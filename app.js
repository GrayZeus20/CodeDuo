/* CodeDuo — app engine: state owner, event registry, path shuffle, router, UI, motion.
 * State shape:
 *   persisted (localStorage codeduo_state_v1):
 *     { version, seed, path[], streak:{count,lastActive}, progress:{[topicId]:{done:[nodeId]}},
 *       stats:{correct,wrong,lessonsDone}, muted }
 *     nodeId = "topicId--N" (step) atau "topicId--N--test" (ujian tier); lihat stepsForTopic.
 *     (progress lama menyimpan lessonId "html-1" → dimigrasi malas di progressDone()).
 *   session (in-memory, owner app.js, persistence none):
 *     { topicId, nodeId, tier, kind:'step'|'test'|'review', label, keys[], exercises[], order[],
 *       pos, hearts, phase, lastResult, mcMap, arrMap, arrPlaced, answered, wrongOnThis, pendingAnswer }
 *   SRS (owner app.js, persistence localStorage codeduo_srs_v1):
 *     jadwal ulangan per soal → retensi ≥30 hari. Bentuk = srs.js (schedule/dueItems/toJSON/fromJSON).
 *   expression model (owner app.js, persistence localStorage codeduo_expr_v1):
 *     softmax regression (bobot W[9][14] + lr + l2 + n) yang belajar dari sinyal interaksi
 *     → muka Bibit berubah tiap interaksi. Bentuk = robot.js (createExpressionModel/restoreExpressionModel).
 * Motion: anime.js + canvas-confetti (CDN) — graceful degrade kalau offline; prefers-reduced-motion dihormati.
 */
'use strict';

const STORAGE_KEY = 'codeduo_state_v1';
const TIERS = TIER_ORDER;          /* dari content.js — satu sumber urutan tier */
const MAX_HEARTS = 3;

let state = null;
let session = null;
let srs = null;                    /* jadwal ulangan (owner app.js, persistensi codeduo_srs_v1) */
let stateLoadError = null;
const EXPR_KEY = 'codeduo_expr_v1';
let exprModel = null;     /* model ekspresi on-device (owner app.js) */
let exprTrained = null;   /* sinyal interaksi terakhir yang ikut melatih model */
let buddyFace = null;     /* state wajah yang sedang tampil (derived; dipilih ulang tiap interaksi) */

/* ================= Seeded RNG + personal path ================= */

function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffled(arr, rng) {
  const a = arr.slice();
  const r = rng || Math.random;
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* Path personal: SEMUA topik terbuka; urutan tampil di-shuffle per seed.
 * Tahap = urutan pelajaran DI DALAM 1 topik (Dasar → Menengah → Advance), unlock berurutan. */
function generatePath(seed) {
  return shuffled(CURRICULUM.map((t) => t.id), mulberry32(seed));
}

function topicById(id) {
  return CURRICULUM.find((t) => t.id === id);
}

function lessonById(topic, lessonId) {
  return topic.lessons.find((l) => l.id === lessonId);
}

/* Tahap sebuah langkah: pakai field `level` bila ada, kalau tidak sebar merata per tier */
function lessonTier(topic, lesson) {
  if (lesson && TIERS.includes(lesson.level)) return lesson.level;
  const i = topic.lessons.indexOf(lesson);
  const per = Math.ceil(topic.lessons.length / TIERS.length) || 1;
  return TIERS[Math.min(TIERS.length - 1, Math.floor(i / per))];
}

function isTopicDone(id) {
  const t = topicById(id);
  if (!t) return false; /* state lama bisa bawa id topik yang sudah dihapus dari kurikulum */
  /* topik tuntas bila ketiga step (Dasar/Menengah/Advance) selesai */
  return stepsForTopic(t).filter((n) => n.kind === 'step').every((n) => isNodeDone(id, n.id));
}

function currentTopicId() {
  return state.path.find((id) => !isTopicDone(id)) || null;
}

/* nodeId progresi topik = 3 step + 3 ujian, urut: step1, ujian1, step2, ujian2, step3, ujian3 */
function topicNodes(topicId) {
  const t = topicById(topicId);
  return t ? stepsForTopic(t) : [];
}

/* Progres topik sebagai Set. Migrasi malas: entri lama berisi lessonId ("html-1")
 * dianggap menandai step tier-nya bila SEMUA pelajaran tier itu sudah tercatat. */
function progressSet(topicId) {
  const p = state.progress[topicId];
  const raw = (p && Array.isArray(p.done)) ? p.done : [];
  const t = topicById(topicId);
  if (!t) return new Set(raw);
  const out = new Set(raw);
  stepsForTopic(t).forEach((n) => {
    if (n.kind !== 'step' || out.has(n.id)) return;
    const tierLessons = t.lessons.filter((l) => l.level === n.tier).map((l) => l.id);
    if (tierLessons.length && tierLessons.every((lid) => raw.includes(lid))) out.add(n.id);
  });
  return out;
}

function isNodeDone(topicId, nodeId) {
  return progressSet(topicId).has(nodeId);
}

function isLessonDone(topicId, lessonId) {
  const t = topicById(topicId);
  const l = t && lessonById(t, lessonId);
  if (!l) return false;
  const done = progressSet(topicId);
  return done.has(lessonId)
    || topicNodes(topicId).some((n) => n.kind === 'step' && n.tier === l.level && done.has(n.id));
}

function nextUnlockedNode(topic) {
  const nodes = topicNodes(topic.id);
  return nodes.find((n) => !isNodeDone(topic.id, n.id)) || nodes[0] || null;
}

/* ================= State persistence ================= */

function defaultState() {
  return {
    version: 1,
    seed: Math.floor(Math.random() * 2 ** 31),
    path: null,
    streak: { count: 0, lastActive: null },
    progress: {},
    stats: { correct: 0, wrong: 0, lessonsDone: 0 },
    muted: false,
  };
}

function sanitizeState(parsed) {
  /* deep-validate: satu field korup tidak boleh melempar error di tengah render
   * (mis. progress[id].done = null → `.includes` crash di isTopicDone). */
  const base = defaultState();
  const s = Object.assign(base, parsed);
  if (typeof s.seed !== 'number' || !Number.isFinite(s.seed)) s.seed = base.seed;
  if (!Array.isArray(s.path) || !s.path.every((id) => typeof id === 'string')) s.path = null;
  if (!s.streak || typeof s.streak !== 'object') s.streak = { count: 0, lastActive: null };
  if (typeof s.streak.count !== 'number' || !Number.isFinite(s.streak.count) || s.streak.count < 0) s.streak.count = 0;
  if (typeof s.streak.lastActive !== 'string') s.streak.lastActive = null;
  if (!s.stats || typeof s.stats !== 'object') s.stats = { correct: 0, wrong: 0, lessonsDone: 0 };
  ['correct', 'wrong', 'lessonsDone'].forEach((k) => {
    if (typeof s.stats[k] !== 'number' || !Number.isFinite(s.stats[k]) || s.stats[k] < 0) s.stats[k] = 0;
  });
  if (!s.progress || typeof s.progress !== 'object' || Array.isArray(s.progress)) s.progress = {};
  const cleanProgress = {};
  Object.keys(s.progress).forEach((tid) => {
    const entry = s.progress[tid];
    const done = entry && Array.isArray(entry.done) ? entry.done.filter((x) => typeof x === 'string') : [];
    cleanProgress[tid] = { done };
  });
  s.progress = cleanProgress;
  s.muted = !!s.muted;
  return s;
}

function loadState() {
  let raw = null;
  try {
    raw = localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    stateLoadError = 'localStorage tidak bisa diakses: ' + e.message;
    state = defaultState();
    return;
  }
  if (!raw) {
    state = defaultState();
    return;
  }
  try {
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      throw new Error('struktur tidak valid');
    }
    state = sanitizeState(parsed);
  } catch (e) {
    /* corrupt → backup + reset aman (error path SERT) */
    try {
      localStorage.setItem(STORAGE_KEY + '_corrupt_backup', raw);
    } catch (_) { /* ignore */ }
    stateLoadError = 'Data lama rusak, progress direset (backup disimpan). ' + e.message;
    state = defaultState();
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn('[codeduo] gagal simpan state:', e.message);
  }
}

/* Inspectable dump (SERT State gate) */
function dumpState() {
  const dump = { persisted: JSON.parse(JSON.stringify(state)), session: session ? JSON.parse(JSON.stringify(session)) : null, loadError: stateLoadError };
  console.log('[codeduo:state-dump]', dump);
  return dump;
}
window.dumpState = dumpState;

/* ================= Event registry (SERT Event gate) ================= */

const EVENT_REGISTRY = {
  STEP_START: { emitter: 'topic-screen', handler: onStepStart },
  TIER_TEST: { emitter: 'topic-screen', handler: onTierTest },
  REVIEW_START: { emitter: 'home-screen', handler: onReviewStart },
  ANSWER_CHECK: { emitter: 'lesson-screen', handler: onAnswerCheck },
  LESSON_CONTINUE: { emitter: 'feedback-bar', handler: onLessonContinue },
  LESSON_RETRY: { emitter: 'fail-screen', handler: onLessonRetry },
  LESSON_EXIT: { emitter: 'lesson-header', handler: onLessonExit },
  STATE_RESET: { emitter: 'profile-screen', handler: onStateReset },
  INTERACTION: { emitter: 'app (klik/rute/jawab)', handler: onInteraction },
  BUDDY_TAP: { emitter: 'buddy-head', handler: onBuddyTap },
};

/* sinyal mentah interaksi → vektor fitur untuk model ekspresi (SERT Event: payload jelas). */
function interactionSignal(sig) {
  const s = sig || {};
  let hearts = 1;
  if (s.hearts === 'session') hearts = (session && MAX_HEARTS) ? session.hearts / MAX_HEARTS : 1;
  else if (Number.isFinite(s.hearts)) hearts = s.hearts;
  const n = typeof s.n === 'number' ? s.n : 0.5;
  let progress = 0;
  if (s.progress === 'session') progress = session && session.order.length ? (session.pos + 1) / session.order.length : 0;
  else if (Number.isFinite(s.progress)) progress = s.progress;
  const streak = state && state.streak ? state.streak.count / 7 : 0;
  return {
    correct: s.correct ? 1 : 0,
    wrong: s.wrong ? 1 : 0,
    urgency: s.correct ? 1 : s.wrong ? 0.85 : 0.4,
    progress: progress,
    lesson: s.lesson ? 1 : 0,
    tap: s.tap ? 1 : 0,
    nav: s.nav ? 1 : 0,
    pick: s.pick ? 1 : 0,
    hearts: hearts,
    streak: streak,
    firstTry: 1 - n,
    fast: s.correct ? 1 - n * 0.5 : (s.wrong ? n * 0.5 : 0),
  };
}

/* dipanggil tiap interaksi: latih model BARU LALU pilih wajah baru (muka berubah tiap aksi).
 * Tak ada guard dedup: tiap klik/tap/jawab harus benar-benar memilih ulang (anti-ulang di pickExpression). */
function onInteraction(sig) {
  const s = sig || {};
  const features = interactionSignal(s);
  learnExpression(features);
  buddyFace = pickExpression(exprModel, features, Math.random, buddyFace);
  buddyMood = stateToMood(buddyFace);
  /* head hidup → ganti muka SEGERA, tanpa nunggu render (klik di lesson = wajah langsung ganti) */
  if (buddyHead) { buddyHead.setState(buddyFace); popHead(); }
}

function onBuddyTap() {
  onInteraction({ tap: true, nav: false, lesson: !!session, n: 0.3 });
}

function dispatch(name, payload) {
  const ev = EVENT_REGISTRY[name];
  if (!ev) {
    console.warn('[codeduo] unhandled event:', name, payload);
    return;
  }
  try {
    ev.handler(payload);
  } catch (err) {
    console.error('[codeduo] handler error pada event ' + name + ':', err);
  }
}

/* ================= Step / ujian / review session ================= */

function onStepStart({ topicId, nodeId }) { session = null; startNode(topicId, nodeId); }
function onTierTest({ topicId, nodeId }) { session = null; startNode(topicId, nodeId); }
function onReviewStart() { session = null; startReview(); }

/* ================= SRS — penjadwal ulangan (owner app.js) ================= */

function loadSrs() {
  let raw = null;
  try { raw = localStorage.getItem(SRS_KEY); } catch (_) { raw = null; }
  srs = fromJSON(raw) || newSched();
}

function saveSrs() {
  try { localStorage.setItem(SRS_KEY, JSON.stringify(toJSON(srs))); }
  catch (e) { console.warn('[codeduo] gagal simpan jadwal SRS:', e.message); }
}

function dueReviewKeys() {
  return dueItems(allQuestionIds(), srs, Date.now());
}

function srsDump() {
  const bank = allQuestionIds();
  const dump = {
    scheduled: Object.keys(srs).length,
    bank: bank.length,
    due: dueItems(bank, srs, Date.now()).length,
    intervals: SRS_INTERVALS,
    sample: Object.keys(srs).slice(0, 3).map((k) => ({ key: k, box: srs[k].box, reps: srs[k].reps, lapses: srs[k].lapses })),
  };
  console.log('[codeduo:srs-dump]', dump);
  return dump;
}
window.srsDump = srsDump;

/* Daftar soal sesi dari kunci global (step/ujian kunci tetap; review dari SRS). */
function sessionExercises(keys) {
  const out = [];
  (keys || []).forEach((k) => { const ex = resolveQuestion(k); if (ex) out.push({ key: k, ex }); });
  return out;
}

/* nodeId sintetis: step "topic--N", ujian "topic--N--test" (dari stepsForTopic). */
function startNode(topicId, nodeId) {
  const topic = topicById(topicId);
  if (!topic) { location.hash = '#/'; return; }
  const node = topicNodes(topicId).find((n) => n.id === nodeId);
  if (!node) { location.hash = '#/topic/' + topicId; return; }
  const keys = node.questionIds.slice();
  session = {
    topicId,
    nodeId,
    tier: node.tier,
    kind: node.kind,       /* step | test */
    label: node.label,
    keys,
    exercises: sessionExercises(keys),
    order: shuffled(keys.map((_, i) => i)), /* urutan soal beda tiap attempt (anti hafal posisi) */
    pos: 0,
    hearts: MAX_HEARTS,
    phase: 'run',          /* run | feedback | done | failed */
    lastResult: null,
    mcMap: {},
    arrMap: {},
    arrPlaced: [],
    answered: false,
    wrongOnThis: false,
    pendingAnswer: null,
  };
  dispatch('INTERACTION', { lesson: true, n: 0 });
  const target = '#/lesson/' + topicId + '/' + nodeId;
  if (location.hash !== target) location.hash = target;
  else render();
}

function startReview() {
  const keys = dueReviewKeys().slice(0, STEP_SIZE); /* sesi ingat = maks 10 soal jatuh tempo */
  if (!keys.length) { location.hash = '#/'; return; }
  session = {
    topicId: '__review__',
    nodeId: 'review',
    tier: null,
    kind: 'review',
    label: 'Ingat · ' + keys.length + ' soal',
    keys,
    exercises: sessionExercises(keys),
    order: shuffled(keys.map((_, i) => i)),
    pos: 0,
    hearts: MAX_HEARTS,
    phase: 'run',
    lastResult: null,
    mcMap: {},
    arrMap: {},
    arrPlaced: [],
    answered: false,
    wrongOnThis: false,
    pendingAnswer: null,
  };
  dispatch('INTERACTION', { lesson: true, n: 0 });
  const target = '#/review';
  if (location.hash !== target) location.hash = target;
  else render();
}

function onLessonExit() {
  const topicId = session ? session.topicId : currentTopicId();
  const fromReview = !!(session && session.kind === 'review');
  session = null;
  const target = fromReview ? '#/' : (topicId ? '#/topic/' + topicId : '#/');
  if (location.hash === target) render();
  else location.hash = target;
}

function onLessonRetry() {
  if (!session) return;
  if (session.kind === 'review') { startReview(); return; }
  const { topicId, nodeId } = session;
  session = null;
  startNode(topicId, nodeId);
}

function onStateReset() {
  if (!window.confirm('Hapus SEMUA progress, jadwal ulangan, dan streak? Tidak bisa dibatalkan.')) return;
  state = defaultState();
  /* reset juga "ingatan": model ekspresi + jadwal SRS — mulai dari nol, jangan tinggalkan data lama */
  exprModel = createExpressionModel();
  exprTrained = null;
  buddyFace = null;
  buddyMood = null;
  srs = newSched();
  try { localStorage.removeItem(EXPR_KEY); } catch (_) { /* ignore */ }
  try { localStorage.removeItem(SRS_KEY); } catch (_) { /* ignore */ }
  saveState();
  session = null;
  location.hash = '#/';
  render();
  updateHeader();
}

function currentExercise() {
  if (!session) return null;
  const idx = session.order[session.pos];
  if (!Number.isInteger(idx)) return null;
  const entry = session.exercises[idx];
  return entry ? entry.ex : null;
}

/* kunci soal yang sedang dikerjakan (untuk penjadwalan SRS) */
function currentKey() {
  if (!session) return null;
  const idx = session.order[session.pos];
  const entry = session.exercises[idx];
  return entry ? entry.key : null;
}

function onAnswerCheck(answer) {
  if (!session || session.phase !== 'run' || session.answered) return; /* idempotency guard */
  const ex = currentExercise();
  if (!ex) return;
  let result;
  if (ex.type === 'mc') result = answer === ex.a ? { correct: true } : { correct: false, message: 'Pilihan belum tepat.' };
  else if (ex.type === 'fill') result = checkFill(answer, ex.accept);
  else if (ex.type === 'code') result = checkCode(answer, { fnName: ex.fn, tests: ex.tests });
  else if (ex.type === 'preview') result = checkPreview(answer, ex);
  else if (ex.type === 'arrange') result = checkArrange(answer, ex.blocks.map((_, i) => String(i)));
  else result = { correct: false, message: 'Tipe soal tidak dikenal.' };

  session.answered = true;
  session.lastResult = { correct: result.correct, message: result.message || (result.correct ? 'Mantap!' : 'Belum tepat.'), explain: ex.explain };
  /* edge: jawaban kosong → jangan bakar nyawa, tetap di soal yang sama */
  if (result.reason === 'empty') {
    session.answered = false;
    session.lastResult = null;
    session.phase = 'run';
    render();
    const hint = document.createElement('div');
    hint.className = 'banner banner--warn';
    hint.textContent = result.message;
    const qEl = document.querySelector('.lesson__q');
    if (qEl && qEl.parentNode) qEl.parentNode.insertBefore(hint, qEl.nextSibling);
    return;
  }

  if (result.correct) {
    state.stats.correct += 1;
  } else {
    session.hearts -= 1;
    session.wrongOnThis = true;
    state.stats.wrong += 1;
    if (session.hearts <= 0) session.phase = 'failed';
  }
  if (session.phase === 'run') session.phase = 'feedback';
  if (result.correct) SFX.correct();
  else if (session.hearts <= 0) SFX.fail();
  else SFX.wrong();
  /* SRS: setiap soal dijadwalkan ulang → retensi ≥30 hari (graded, idempoten per soal) */
  const key = currentKey();
  if (key) { srs = schedule(srs, key, gradeFromResult(result.correct), Date.now()); saveSrs(); }
  /* sinyal hasil → model belajar benar/salah + nyawa + progress, pilih muka baru */
  dispatch('INTERACTION', {
    correct: session.lastResult.correct,
    wrong: !session.lastResult.correct,
    hearts: 'session',
    progress: 'session',
    lesson: true,
    n: session.order.length ? session.pos / session.order.length : 0,
  });
  saveState();
  render();
  if (session && session.phase === 'feedback') {
    const sheet = document.querySelector('.feedback');
    if (sheet) slideUp(sheet);
  }
}

function onLessonContinue() {
  if (!session || session.phase !== 'feedback') return;
  if (session.pos >= session.order.length - 1) {
    finishLesson();
  } else {
    session.pos += 1;
    session.phase = 'run';
    session.answered = false;
    session.wrongOnThis = false;
    session.lastResult = null;
    session.pendingAnswer = null;
    session.arrPlaced = [];
    dispatch('INTERACTION', {
      lesson: true,
      progress: 'session',
      hearts: 'session',
      n: session.order.length ? session.pos / session.order.length : 0,
    });
    render();
  }
}

function finishLesson() {
  state.stats.lessonsDone += 1;
  /* review tidak menandai progres topik (soal lintas topik) */
  if (session.kind !== 'review') {
    const p = (state.progress[session.topicId] = state.progress[session.topicId] || { done: [] });
    if (!p.done.includes(session.nodeId)) p.done.push(session.nodeId);
  }
  const newStreakDay = bumpStreak();
  saveState();
  session.phase = 'done';
  dispatch('INTERACTION', { lesson: true, progress: 1, hearts: 'session', n: 1 });
  render();
  updateHeader();
  celebrate();
  firePulse();
  SFX.complete();
  if (newStreakDay) setTimeout(() => SFX.streak(), 550);
}

function bumpStreak() {
  const today = localDateStr();
  if (state.streak.lastActive === today) return false;
  const y = new Date();
  y.setDate(y.getDate() - 1);
  const yesterday = localDateStr(y);
  state.streak.count = state.streak.lastActive === yesterday ? state.streak.count + 1 : 1;
  state.streak.lastActive = today;
  return true; /* streak baru hari ini → caller boleh bunyiin sparkle */
}

function localDateStr(d) {
  const x = d || new Date();
  return x.getFullYear() + '-' + String(x.getMonth() + 1).padStart(2, '0') + '-' + String(x.getDate()).padStart(2, '0');
}

/* ================= Preview checker (browser-only) ================= */

function checkPreview(userCode, ex) {
  const code = String(userCode == null ? '' : userCode);
  if (!code.trim()) return { correct: false, reason: 'empty', message: 'Kode masih kosong.' };
  if (ex.lang === 'css') {
    const flat = code.replace(/\s+/g, '');
    for (const m of ex.must) {
      if (m.t === 'code' && !flat.includes(String(m.v).replace(/\s+/g, ''))) {
        return { correct: false, message: 'Belum ada di CSS: ' + m.v };
      }
    }
    return { correct: true };
  }
  const doc = new DOMParser().parseFromString(code, 'text/html');
  for (const m of ex.must) {
    if (m.t === 'selector' && !doc.querySelector(m.v)) {
      return { correct: false, message: 'Elemen ' + m.v + ' tidak ditemukan.' };
    }
    if (m.t === 'text' && !doc.body.textContent.includes(m.v)) {
      return { correct: false, message: 'Teks "' + m.v + '" tidak ditemukan.' };
    }
  }
  return { correct: true };
}

/* ================= Motion (juicy) ================= */

const REDUCED = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;

function pop(el) {
  if (REDUCED || typeof anime === 'undefined' || !el) return;
  anime({
    targets: el,
    scale: [
      { value: 1.06, duration: 110, easing: 'easeOutQuad' },
      { value: 1, duration: 160, easing: 'easeOutBack' },
    ],
  });
}

/* "pop" kecil saat muka Bibit ganti (in-place, bukan render ulang) — bikin transisi ekspresi terasa */
function popHead() {
  if (REDUCED || typeof anime === 'undefined' || !buddyHead || !buddyHead.canvas) return;
  anime({
    targets: buddyHead.canvas,
    scale: [
      { value: 0.9, duration: 90, easing: 'easeOutQuad' },
      { value: 1, duration: 220, easing: 'easeOutBack' },
    ],
  });
}

function slideUp(el) {
  if (REDUCED || typeof anime === 'undefined') return;
  anime({ targets: el, translateY: [40, 0], opacity: [0, 1], duration: 280, easing: 'easeOutCubic' });
}

function celebrate() {
  if (REDUCED || typeof confetti !== 'function') return;
  confetti({ particleCount: 140, spread: 78, origin: { y: 0.6 }, colors: ['#58cc02', '#ffc800', '#1cb0f6', '#ff4b4b'] });
  setTimeout(() => confetti({ particleCount: 80, spread: 100, origin: { y: 0.7 } }), 250);
}

function firePulse() {  const badge = document.getElementById('streak-badge');
  if (REDUCED || typeof anime === 'undefined' || !badge) return;
  anime({
    targets: badge,
    scale: [
      { value: 1.35, duration: 180, easing: 'easeOutBack' },
      { value: 1, duration: 320, easing: 'easeOutElastic(1, .5)' },
    ],
  });
}

function updateHeader() {
  const stEl = document.getElementById('streak-count');
  const muteEl = document.getElementById('mute-btn');
  if (stEl) stEl.textContent = state.streak.count;
  if (muteEl) muteEl.textContent = state.muted ? '🔇' : '🔊';
}

/* ================= Utils ================= */

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/* ================= Robot companion — "Bibit" (SERT State: derived, no persistence) ================= */

/* --- model ekspresi on-device (SERT State: owner app.js, persistence localStorage) --- */
let buddyMood = null; /* mood baris bubble; default diturunkan dari buddyState() */

function loadExpression() {
  let raw = null;
  try { raw = localStorage.getItem(EXPR_KEY); } catch (_) { raw = null; }
  if (raw) exprModel = restoreExpressionModel(raw);
  if (!exprModel) exprModel = createExpressionModel();
}

function saveExpression() {
  try { localStorage.setItem(EXPR_KEY, JSON.stringify(exprModel)); }
  catch (e) { console.warn('[codeduo] gagal simpan model ekspresi:', e.message); }
}

/* latih sekali per sinyal-vektor (idempoten). Pilih-wajah tetap jalan tiap aksi di onInteraction. */
function learnExpression(features) {
  if (!exprModel || !features) return;
  const key = JSON.stringify(features);
  if (key === exprTrained) return;
  exprTrained = key;
  exprLearn(exprModel, exprFeatures(features), exprLabelIndex(features));
  saveExpression();
}

function buddyState() {
  if (session) {
    if (session.phase === 'done') return { mood: 'celebrate', ctx: 'done' };
    if (session.phase === 'failed') return { mood: 'sad', ctx: 'lost-heart' };
    if (session.phase === 'feedback' && session.lastResult) {
      return session.lastResult.correct
        ? { mood: 'happy', ctx: 'correct' }
        : { mood: 'thinking', ctx: 'wrong' };
    }
    return { mood: 'idle', ctx: 'start' };
  }
  return { mood: 'happy', ctx: 'greet' };
}

/* Inspectable dump (SERT State gate untuk companion): bocorkan model + probs supaya bisa diperiksa */
function buddyDump() {
  const b = buddyState();
  let probs = null;
  if (exprModel && typeof exprProbs === 'function') {
    const p = exprProbs(exprModel, interactionSignal({ lesson: !!session, hearts: 'session' }));
    probs = {};
    if (p) EXPR_STATES.forEach((s, i) => { probs[s] = Math.round(p[i] * 1000) / 1000; });
  }
  return {
    derived: b,
    name: ROBOT_NAME,
    mounted: !!document.getElementById('buddy'),
    headState: buddyHead ? buddyHead.state : null,
    mood: buddyMood,
    model: exprModel ? { n: exprModel.n, lr: exprModel.lr, l2: exprModel.l2, feats: EXPR_FEATURES.length, classes: EXPR_STATES.length } : null,
    probs: probs,
  };
}
window.buddyDump = buddyDump;

/* Instans head kanvas yang aktif (derived, tanpa persistence). Dibuang tiap render. */
let buddyHead = null;

function updateBuddy() {
  const el = document.getElementById('buddy');
  if (!el) return;
  /* head lama hidup di DOM lama → buang (idempoten, cegah kebocoran rAF) */
  if (buddyHead) { buddyHead.destroy(); buddyHead = null; }

  const b = buddyState();
  /* muka sudah dipilih oleh event INTERACTION (navigasi/klik/jawab). Fallback ke aturan
   * buddyState() hanya kalau model belum pernah memilih (mis. render pertama sebelum rute). */
  if (!buddyFace || !buddyMood) { buddyFace = stateFromMood(b.mood === 'celebrate' ? 'happy' : b.mood); buddyMood = b.mood; }
  const ctx = b.ctx; /* baris bubble tetap ikut konteks permainan (benar/salah/tuntas) */
  const seed = (state ? state.seed : 0) + (session ? session.pos : 0);
  const line = robotSay(ctx, seed);
  el.innerHTML = '<div class="buddy__bubble" role="status">' + esc(line) + '</div>'
    + '<div class="buddy__head"></div>';

  const host = el.querySelector('.buddy__head');
  buddyHead = (typeof mountRobotHead === 'function')
    ? mountRobotHead(host, { size: 96, state: buddyFace, seed: (Math.abs(seed) % 7) / 7 })
    : null;

  if (!buddyHead) { /* canvas tak didukung → fallback SVG lama */
    if (host) host.innerHTML = robotSVG(b.mood);
    return;
  }

  /* tap-to-talk: kepala merespons sentuhan → sinyal interaksi baru, muka ganti */
  const cv = buddyHead.canvas;
  cv.style.cursor = 'pointer';
  cv.addEventListener('click', () => {
    if (typeof SFX !== 'undefined' && SFX && typeof SFX.tap === 'function') SFX.tap();
    dispatch('BUDDY_TAP');
    updateBuddy();
    if (typeof anime !== 'undefined') {
      anime({ targets: cv, translateY: [-10, 0], rotate: [-5, 0], duration: 480, easing: 'easeOutBack' });
    }
  });
}

/* ================= Render: HOME (path personal, tidak tampil semua) ================= */

function renderHome() {
  const allDone = state.path.every(isTopicDone);
  const due = dueReviewKeys().length;

  let html = '<section class="screen home">';
  if (stateLoadError) html += '<div class="banner banner--warn">' + esc(stateLoadError) + '</div>';
  html += '<div class="home__hero">'
    + '<span class="home__robot" aria-hidden="true">' + robotSVG(allDone ? 'celebrate' : 'happy') + '</span>'
    + '<div class="home__hero-text">'
    + '<h1 class="home__hi">Lanjut belajar 👋</h1>'
    + '<p class="home__sub">Aku <b>Bibit</b>, teman belajarmu. Tiap topik: 3 step (Dasar → Menengah → Advance) + ujian tiap tier — tiap step 10 soal, diingat ulang biar nempel 30 hari.</p>'
    + '</div></div>';

  /* kartu "Ingat" — ulangan berjarak; muncul kalau ada ≥1 soal jatuh tempo */
  html += '<div class="recall card' + (due ? ' card--due' : '') + '">'
    + '<div class="recall__text"><b>Ingat · ulangan berjarak</b>'
    + '<span class="muted">' + (due ? due + ' soal jatuh tempo hari ini' : 'Semua soal sudah terjadwal. Balik kapan nanti 👍') + '</span></div>'
    + (due ? '<button class="btn btn--primary recall__btn" data-act="start-review">Ulangi ' + Math.min(due, STEP_SIZE) + ' soal</button>' : '')
    + '</div>';

  if (allDone) {
    const totalSteps = CURRICULUM.length * 3;
    html += '<div class="card card--done">🎉 Semua step tuntas! ' + totalSteps + ' step × 10 soal kamu habiskan — kamu juara.</div>';
  }

  /* Semua topik terbuka — path personal sekadar menentukan urutan tampil */
  state.path.forEach((id) => {
    const t = topicById(id);
    if (!t) return;
    const done = isTopicDone(id);
    const doneSteps = stepsForTopic(t).filter((n) => n.kind === 'step' && isNodeDone(id, n.id)).length;
    const stepTotal = stepsForTopic(t).filter((n) => n.kind === 'step').length;
    html += '<button class="topic-card topic-card--active' + (done ? ' topic-card--done' : '') + '" data-act="open-topic" data-id="' + t.id + '">'
      + '<span class="topic-card__icon">' + t.icon + '</span>'
      + '<span class="topic-card__body">'
      + '<span class="topic-card__name">' + esc(t.name) + (done ? ' ✓' : '') + '</span>'
      + '<span class="topic-card__desc">' + esc(t.desc) + '</span>'
      + '<span class="progress-bar"><span class="progress-bar__fill" style="transform:scaleX(' + (doneSteps / (stepTotal || 1)).toFixed(3) + ')"></span></span>'
      + '<span class="topic-card__meta">' + doneSteps + '/' + stepTotal + ' step · ujian tiap tier</span>'
      + '</span></button>';
  });

  html += '<div class="stat-row">'
    + '<div class="stat"><b>' + state.stats.lessonsDone + '</b><span>sesi</span></div>'
    + '<div class="stat"><b>' + state.stats.correct + '</b><span>benar</span></div>'
    + '<div class="stat"><b>' + state.streak.count + '</b><span>streak 🔥</span></div>'
    + '</div>'
    + '<a class="btn btn--ghost home__profile" href="#/profile">Profil & pengaturan</a>'
    + '</section>';
  return html;
}

/* ================= Render: TOPIC (3 step + ujian tiap tier) ================= */

function renderTopic(topicId) {
  const topic = topicById(topicId);
  if (!topic) return '<section class="screen"><p>Topik tidak ditemukan. <a href="#/">Ke home</a></p></section>';
  const nodes = topicNodes(topicId);
  const stepNodes = nodes.filter((n) => n.kind === 'step');
  const doneSteps = stepNodes.filter((n) => isNodeDone(topicId, n.id)).length;
  let html = '<section class="screen topic">'
    + '<a class="back" href="#/">← Kembali</a>'
    + '<header class="topic__head" style="border-color:' + topic.color + '">'
    + '<span class="topic__icon">' + topic.icon + '</span>'
    + '<div><span class="topic-card__tier">3 step · 10 soal/step · ujian tiap tier</span>'
    + '<h1>' + esc(topic.name) + '</h1><p>' + esc(topic.desc) + '</p></div>'
    + '<span class="topic__progress">' + doneSteps + '/' + stepNodes.length + '</span>'
    + '</header>';

  /* render per tier: 1 step (10 soal) + 1 ujian tier; unlock berurutan global */
  TIERS.forEach((tier) => {
    const step = nodes.find((n) => n.kind === 'step' && n.tier === tier);
    const test = nodes.find((n) => n.kind === 'test' && n.tier === tier);
    if (!step || !test) return;
    const idxStep = nodes.indexOf(step);
    const idxTest = nodes.indexOf(test);
    const stepDone = isNodeDone(topicId, step.id);
    const testDone = isNodeDone(topicId, test.id);
    const stepOpen = idxStep === 0 || isNodeDone(topicId, nodes[idxStep - 1].id) || stepDone;
    const testOpen = stepDone || testDone;
    html += '<section class="tier">'
      + '<div class="tier__head"><span class="tier__name">' + tier + '</span>'
      + '<span class="tier__count">' + (stepDone ? '1' : '0') + '/1 step' + (testDone ? ' · ujian ✓' : '') + '</span></div>'
      + '<ol class="lesson-path">'
      + nodeItem(topicId, step, idxStep, stepOpen, 'step')
      + nodeItem(topicId, test, idxTest, testOpen, 'test')
      + '</ol></section>';
  });
  html += '</section>';
  return html;
}

/* satu node di jalur topik: step bernomor, ujian berbadge kuning */
function nodeItem(topicId, node, idx, open, kind) {
  const done = isNodeDone(topicId, node.id);
  const isTest = kind === 'test';
  const cls = done ? 'node node--done' : open ? 'node node--open' : 'node node--locked';
  const label = done ? '★' : open ? (isTest ? '★' : String(node.stepNo)) : '🔒';
  const title = isTest ? 'Ujian ' + node.tier : 'Step ' + node.stepNo + ' · ' + node.tier;
  const act = isTest ? 'tier-test' : 'start-step';
  const attrs = open
    ? ' data-act="' + act + '" data-topic="' + topicId + '" data-node="' + node.id + '"'
    : ' disabled aria-disabled="true"';
  return '<li class="lesson-path__item' + (idx % 2 ? ' lesson-path__item--right' : '') + '">'
    + '<button class="' + cls + (isTest ? ' node--exam' : '') + '"' + attrs + '>' + label + '</button>'
    + '<span class="lesson-path__title"><span class="topic-card__tier">' + (isTest ? 'Ujian' : 'Step ' + node.stepNo + ' · 10 soal') + '</span><br>'
    + esc(title) + (done ? ' · selesai' : open ? '' : ' · terkunci') + '</span>'
    + '</li>';
}

/* ================= Render: LESSON (step / ujian / review) ================= */

function renderLesson() {
  if (!session) return '<section class="screen"><p>Sesi berakhir. <a href="#/">Ke home</a></p></section>';
  const isReview = session.kind === 'review';
  const topic = isReview ? null : topicById(session.topicId);
  if (!isReview && !topic) {
    session = null;
    return '<section class="screen"><p>Topik tidak ditemukan. <a href="#/">Ke home</a></p></section>';
  }
  const total = session.order.length;
  const label = session.label || (isReview ? 'Ingat · ulangan' : '');
  const headName = isReview ? 'Ruang ingat' : topic.name;

  if (session.phase === 'failed') {
    return '<section class="screen screen--center">'
      + '<div class="card card--fail">💔 Nyawa habis!</div>'
      + '<p class="muted">' + esc(label) + ' akan diulang dari awal — urutan soalnya beda lagi.</p>'
      + '<button class="btn btn--danger" data-act="retry">Coba Lagi</button>'
      + (isReview ? '<a class="btn btn--ghost" href="#/">Ke home</a>'
                  : '<a class="btn btn--ghost" href="#/topic/' + topic.id + '">Keluar</a>')
      + '</section>';
  }

  if (session.phase === 'done') {
    const allDone = state.path.every((id) => isTopicDone(id));
    let next = '';
    if (isReview) {
      const more = dueReviewKeys().length;
      next = more
        ? '<button class="btn btn--primary" data-act="start-review">Lanjut ulangan (' + Math.min(more, STEP_SIZE) + ' lagi)</button>'
        : '<a class="btn btn--primary" href="#/">Ke home</a>';
    } else {
      const nodes = topicNodes(topic.id);
      const idx = nodes.findIndex((n) => n.id === session.nodeId);
      const nextNode = nodes[idx + 1];
      const nextTopicId = state.path[state.path.indexOf(topic.id) + 1];
      next = nextNode
        ? '<button class="btn btn--primary" data-act="' + (nextNode.kind === 'test' ? 'tier-test' : 'start-step') + '" data-topic="' + topic.id + '" data-node="' + nextNode.id + '">' + esc(nextNode.label) + '</button>'
        : nextTopicId || allDone
          ? '<a class="btn btn--primary" href="#/">' + (allDone ? 'Semua tuntas 🎉' : 'Lanjut ke topik lain 🔓') + '</a>'
          : '<a class="btn btn--primary" href="#/">Ke home</a>';
    }
    const title = isReview ? 'Ulangan selesai!' : (session.kind === 'test' ? 'Ujian ' + session.tier + ' lulus!' : 'Step ' + session.nodeId.split('--')[1] + ' tuntas!');
    return '<section class="screen screen--center result">'
      + '<div class="result__burst">🎉</div>'
      + '<h1 class="result__title">' + esc(title) + '</h1>'
      + '<p class="result__streak">🔥 Streak: ' + state.streak.count + ' hari</p>'
      + '<p class="muted">' + esc(label) + (topic ? ' · ' + esc(topic.name) : '') + '</p>'
      + '<p class="muted">Soal ini dijadwalkan ulang biar nempel ≥30 hari.</p>'
      + '<div class="result__actions">' + next
      + '<button class="btn btn--ghost" data-act="retry">Ulangi sesi</button>'
      + '</div></section>';
  }

  /* run / feedback */
  const ex = currentExercise();
  if (!ex) return '<section class="screen"><p>Soal tidak ditemukan. <a href="#/">Ke home</a></p></section>';
  const dots = session.order.map((_, i) =>
    '<span class="dot' + (i < session.pos ? ' dot--done' : i === session.pos ? ' dot--now' : '') + '"></span>'
  ).join('');
  const hearts = Array.from({ length: MAX_HEARTS }, (_, i) =>
    '<span class="heart' + (i < session.hearts ? '' : ' heart--lost') + '">❤️</span>'
  ).join('');

  let body = '';
  if (ex.type === 'mc') {
    if (!session.mcMap[session.pos]) {
      session.mcMap[session.pos] = shuffled(ex.options.map((_, i) => i));
    }
    const map = session.mcMap[session.pos];
    body = '<div class="options">'
      + map.map((optIdx) =>
        '<button class="option'
        + (optIdx === session.pendingAnswer ? ' option--sel' : '')
        + (session.answered && optIdx === ex.a ? ' option--correct' : '')
        + '" data-act="pick-mc" data-i="' + optIdx + '"' + (session.answered ? ' disabled' : '') + '>' + esc(ex.options[optIdx]) + '</button>'
      ).join('')
      + '</div>';
  } else if (ex.type === 'fill') {
    const codeHtml = esc(ex.code).replace('___', '<span class="blank-line" id="fill-slot"></span>');
    body = '<pre class="code-block">' + codeHtml + '</pre>'
      + '<input class="input" id="fill-input" type="text" placeholder="Ketik jawaban…" autocomplete="off" autocapitalize="off" spellcheck="false"' + (session.answered ? ' disabled' : '') + '>';
  } else if (ex.type === 'code') {
    body = '<textarea class="code-input" id="code-input" spellcheck="false" rows="8"' + (session.answered ? ' disabled' : '') + '>' + esc(ex.starter) + '</textarea>';
  } else if (ex.type === 'preview') {
    body = '<textarea class="code-input" id="code-input" spellcheck="false" rows="8"' + (session.answered ? ' disabled' : '') + '>' + esc(ex.starter) + '</textarea>'
      + '<iframe class="preview-frame" id="preview-frame" sandbox title="Preview" data-lang="' + ex.lang + '"></iframe>';
  } else if (ex.type === 'arrange') {
    if (!session.arrMap[session.pos]) {
      session.arrMap[session.pos] = shuffled(ex.blocks.map((_, i) => String(i)));
    }
    const pool = session.arrMap[session.pos];
    body = '<div class="arr-zone" id="arr-zone"></div>'
      + '<div class="arr-pool" id="arr-pool">'
      + pool.map((id) => '<button class="arr-block" data-act="arr-pick" data-id="' + id + '">' + esc(ex.blocks[+id]) + '</button>').join('')
      + '</div>';
  }

  const fb = session.phase === 'feedback' && session.lastResult
    ? '<div class="feedback ' + (session.lastResult.correct ? 'feedback--ok' : 'feedback--bad') + '">'
      + '<b>' + (session.lastResult.correct ? '✅ Benar!' : '❌ ' + esc(session.lastResult.message)) + '</b>'
      + '<p>' + esc(session.lastResult.explain) + '</p>'
      + '<button class="btn ' + (session.lastResult.correct ? 'btn--primary' : 'btn--danger') + '" data-act="continue">LANJUT</button>'
      + '</div>'
    : '';

  const exitHref = isReview ? '#/' : '#/topic/' + topic.id;
  const metaName = isReview ? headName : esc(topic.name) + ' · ' + esc(label);
  return '<section class="screen lesson' + (fb ? ' lesson--fb' : '') + '">'
    + '<header class="lesson__bar">'
    + '<a class="lesson__x" href="' + exitHref + '" data-act="exit-lesson" aria-label="Keluar">✕</a>'
    + '<div class="dots">' + dots + '</div>'
    + '<div class="hearts">' + hearts + '</div>'
    + '</header>'
    + '<p class="lesson__meta">' + metaName + ' · soal ' + (session.pos + 1) + '/' + total + '</p>'
    + '<h2 class="lesson__q">' + esc(ex.q) + '</h2>'
    + '<div class="lesson__body">' + body + '</div>'
    + (session.phase === 'run'
      ? '<div class="check-bar"><button class="btn btn--primary btn--wide" data-act="check" id="check-btn">CEK</button></div>'
      : '')
    + fb
    + '</section>';
}

/* ================= Render: PROFILE ================= */

function renderProfile() {
  const topicsDone = state.path.filter((id) => isTopicDone(id)).length;
  return '<section class="screen profile">'
    + '<a class="back" href="#/">← Kembali</a>'
    + '<h1>Profil</h1>'
    + '<div class="stat-row">'
    + '<div class="stat"><b>' + state.streak.count + '</b><span>streak 🔥</span></div>'
    + '<div class="stat"><b>' + state.stats.lessonsDone + '</b><span>sesi</span></div>'
    + '<div class="stat"><b>' + topicsDone + '/' + state.path.length + '</b><span>topik</span></div>'
    + '</div>'
    + '<div class="card"><h3>Jalur personal kamu</h3><ol class="path-list">'
    + state.path.map((id, i) => {
      const t = topicById(id);
      if (!t) return ''; /* id lama yang sudah dihapus dari kurikulum → jangan crash */
      const done = isTopicDone(id);
      const isNext = !done && state.path.slice(0, i).every((x) => isTopicDone(x));
      return '<li class="' + (done ? 'is-done' : isNext ? 'is-cur' : '') + '">'
        + (i + 1) + '. ' + t.icon + ' ' + esc(t.name)
        + (done ? ' ✓' : isNext ? ' ← lanjut di sini' : '')
        + '</li>';
    }).join('')
    + '</ol></div>'
    + '<div class="card"><h3>Ingatan (30 hari)</h3>'
    + '<p class="muted">' + Object.keys(srs).length + ' soal terjadwal · ' + dueReviewKeys().length + ' jatuh tempo. Interval: ' + SRS_INTERVALS.join(' → ') + ' hari.</p>'
    + '<button class="btn btn--ghost" data-act="srs-dump">Lihat jadwal (console)</button>'
    + '</div>'
    + '<div class="card"><h3>Data</h3>'
    + '<p class="muted">Progress disimpan di localStorage browser ini.</p>'
    + '<button class="btn btn--ghost" data-act="dump">Lihat state (console)</button> '
    + '<button class="btn btn--danger" data-act="reset">Reset progress</button>'
    + '</div></section>';
}

/* ================= Router ================= */

function route() {
  const hash = location.hash || '#/';
  const app = document.getElementById('app');
  const parts = hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  const isReview = parts[0] === 'review';
  const isLesson = (parts[0] === 'lesson' && parts[1] && parts[2]) || isReview;

  /* session hanya hidup di rute lesson/review: pindah ke home/topic/profile = keluar */
  if (!isLesson && session) session = null;
  if (document.body) document.body.classList.toggle('is-lesson', !!isLesson);

  if (parts[0] === 'topic' && parts[1]) app.innerHTML = renderTopic(parts[1]);
  else if (isReview) {
    if (!session || session.kind !== 'review') { dispatch('REVIEW_START'); return; }
    app.innerHTML = renderLesson();
    afterLessonRender();
  } else if (parts[0] === 'lesson' && parts[1] && parts[2]) {
    if (!session || session.topicId !== parts[1] || session.nodeId !== parts[2]) {
      dispatch('STEP_START', { topicId: parts[1], nodeId: parts[2] });
      return; /* STEP_START sets hash → route ulang */
    }
    app.innerHTML = renderLesson();
    afterLessonRender();
  } else if (parts[0] === 'profile') app.innerHTML = renderProfile();
  else app.innerHTML = renderHome();

  /* navigasi rute NON-pelajaran = interaksi → muka ganti tiap pindah home/topik/profil.
   * Rute pelajaran tidak memancarkan sinyal nav (render dalam pelajaran bukan interaksi baru;
   * muka hasil belajar harus bertahan sampai aksi berikutnya). */
  if (!isLesson) dispatch('INTERACTION', { nav: true, n: ((state ? state.seed : 0) % 7) / 7 });
  updateHeader();
  updateBuddy();
  window.scrollTo(0, 0);
}

function render() {
  route();
}

/* Post-render wiring per tipe soal */
function afterLessonRender() {
  if (!session) return;
  const ex = currentExercise();
  if (!ex) return;

  if (ex.type === 'preview') {
    const ta = document.getElementById('code-input');
    const frame = document.getElementById('preview-frame');
    const paint = debounce(() => {
      if (!ta || !frame) return;
      const src = ex.lang === 'css'
        ? '<!doctype html><html><head><meta charset="utf-8"><style>' + ta.value + '</style></head><body>' + (ex.html || '') + '</body></html>'
        : ta.value;
      frame.srcdoc = src;
    }, 250);
    if (ta) ta.addEventListener('input', paint);
    paint();
  }

  if (ex.type === 'arrange') {
    renderArrange();
  }

  if (session.phase === 'done') {
    const burst = document.querySelector('.result__burst');
    if (burst) pop(burst);
  }
}

function renderArrange() {
  const zone = document.getElementById('arr-zone');
  const pool = document.getElementById('arr-pool');
  if (!zone || !pool) return;
  const ex = currentExercise();
  const placed = (session.arrPlaced = session.arrPlaced || []);
  /* zone: id terurut yang sudah ditempel; pool: sisa */
  const poolIds = session.arrMap[session.pos].filter((id) => !placed.includes(id));
  zone.innerHTML = placed.length
    ? placed.map((id) => '<button class="arr-block arr-block--placed" data-act="arr-unpick" data-id="' + id + '">' + esc(ex.blocks[+id]) + '</button>').join('')
    : '<p class="muted">Klik blok di bawah untuk menyusun urutan.</p>';
  pool.innerHTML = poolIds.map((id) =>
    '<button class="arr-block" data-act="arr-pick" data-id="' + id + '">' + esc(ex.blocks[+id]) + '</button>'
  ).join('');
}

function debounce(fn, ms) {
  let t;
  return function () {
    clearTimeout(t);
    t = setTimeout(fn, ms);
  };
}

/* ================= Event wiring (delegation) ================= */

document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-act]');
  if (!el) return;
  const act = el.dataset.act;
  if (['open-topic', 'start-step', 'tier-test', 'start-review', 'pick-mc', 'check', 'continue', 'retry', 'arr-pick', 'arr-unpick'].includes(act)) {
    SFX.click();
  }

  /* sinyal klik → model ekspresi belajar & pilih muka baru LANGSUNG (setState pada head hidup,
   * tanpa menunggu render). check/continue/retry punya hook berkekuatan-hasil di handler sendiri;
   * open-topic/exit-lesson mengubah rute → sudah ditangani sinyal navigasi di render(). */
  const SIG = {
    'pick-mc': { pick: true },
    'arr-pick': { pick: true },
    'arr-unpick': { pick: true },
  };
  if (SIG[act]) dispatch('INTERACTION', SIG[act]);

  if (act === 'mute') {
    state.muted = !state.muted;
    SFX.setMuted(state.muted);
    /* konfirmasi audio dua arah — user selalu dengar balasan (force: tembus mute) */
    if (state.muted) SFX.muteOn(); else SFX.muteOff();
    saveState();
    updateHeader();
  } else if (act === 'open-topic') {
    location.hash = '#/topic/' + el.dataset.id;
    pop(el);
  } else if (act === 'start-step') {
    dispatch('STEP_START', { topicId: el.dataset.topic, nodeId: el.dataset.node });
  } else if (act === 'tier-test') {
    dispatch('TIER_TEST', { topicId: el.dataset.topic, nodeId: el.dataset.node });
  } else if (act === 'start-review') {
    dispatch('REVIEW_START');
  } else if (act === 'pick-mc') {
    if (session && !session.answered) {
      document.querySelectorAll('.option').forEach((b) => b.classList.remove('option--sel'));
      el.classList.add('option--sel');
      session.pendingAnswer = +el.dataset.i;
    }
  } else if (act === 'check') {
    const ex = session && currentExercise();
    if (!ex) return;
    if (ex.type === 'mc') {
      if (session.pendingAnswer == null) return; /* edge: belum pilih → diam */
      dispatch('ANSWER_CHECK', session.pendingAnswer);
    } else if (ex.type === 'fill') {
      const inp = document.getElementById('fill-input');
      dispatch('ANSWER_CHECK', inp ? inp.value : '');
    } else if (ex.type === 'code' || ex.type === 'preview') {
      const ta = document.getElementById('code-input');
      dispatch('ANSWER_CHECK', ta ? ta.value : '');
    } else if (ex.type === 'arrange') {
      dispatch('ANSWER_CHECK', (session.arrPlaced || []).slice());
    }
    pop(el);
  } else if (act === 'continue') {
    const sheet = document.querySelector('.feedback');
    if (sheet && !REDUCED && typeof anime !== 'undefined') {
      anime({
        targets: sheet,
        translateY: 0,
        opacity: 0,
        duration: 180,
        easing: 'easeInCubic',
        complete: () => dispatch('LESSON_CONTINUE'),
      });
    } else {
      dispatch('LESSON_CONTINUE');
    }
  } else if (act === 'retry') {
    dispatch('LESSON_RETRY');
  } else if (act === 'arr-pick') {
    if (session && !session.answered) {
      session.arrPlaced = session.arrPlaced || [];
      session.arrPlaced.push(el.dataset.id);
      renderArrange();
    }
  } else if (act === 'arr-unpick') {
    if (session && !session.answered) {
      session.arrPlaced = (session.arrPlaced || []).filter((id) => id !== el.dataset.id);
      renderArrange();
    }
  } else if (act === 'dump') {
    dumpState();
    el.textContent = 'State dicetak ke console ✓';
  } else if (act === 'srs-dump') {
    srsDump();
    el.textContent = 'Jadwal dicetak ke console ✓';
  } else if (act === 'reset') {
    dispatch('STATE_RESET');
  } else if (act === 'exit-lesson') {
    e.preventDefault();
    /* state berubah hanya lewat event terdaftar (SERT Event gate) */
    dispatch('LESSON_EXIT');
  }
});

/* Enter = check pada input fill */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.target.id === 'fill-input') {
    const btn = document.getElementById('check-btn');
    if (btn) btn.click();
  }
});

/* ================= Init ================= */

function init() {
  loadState();
  loadSrs();         /* jadwal ulangan (localStorage codeduo_srs_v1) */
  loadExpression(); /* model ekspresi on-device (localStorage) — sebelum render pertama */
  if (!state.path || !state.path.length) {
    state.path = generatePath(state.seed);
    saveState();
  } else {
    /* topik baru di kurikulum (mis. "web") wajib muncul walau path tersimpan dari versi lama */
    const synced = syncPath(state.path, mulberry32(state.seed));
    if (JSON.stringify(synced) !== JSON.stringify(state.path)) { state.path = synced; saveState(); }
  }
  SFX.setMuted(!!state.muted);
  /* maskot head di brand + buddy floating */
  const brandMascot = document.getElementById('brand-mascot');
  if (brandMascot) brandMascot.innerHTML = robotSVG('idle');
  /* autoplay policy: AudioContext butuh gesture pertama */
  document.addEventListener('pointerdown', () => SFX.unlock(), { once: true });
  document.addEventListener('keydown', () => SFX.unlock(), { once: true });
  window.addEventListener('hashchange', route);
  /* PWA: register service worker — http/https saja (localhost OK, file:// skip) */
  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.protocol === 'http:')) {
    navigator.serviceWorker.register('sw.js').catch((e) => console.warn('[sw] register gagal:', e.message));
  }
  route();
}

init();
