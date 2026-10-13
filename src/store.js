/* CodeDuo — store (headless). Satu pemilik state + semua aksi, tanpa DOM.
 * React membaca lewat useSyncExternalStore(subscribe, getSnapshot); komponen memanggil aksi.
 *
 * State shape:
 *   persisted (localStorage codeduo_state_v1):
 *     { version, seed, path[], streak:{count,lastActive}, progress:{[topicId]:{done:[nodeId]}},
 *       stats:{correct,wrong,lessonsDone}, muted }
 *     nodeId = "topicId--N" (step) | "topicId--N--test" (ujian tier) — lihat stepsForTopic().
 *   session (in-memory, persistence none):
 *     { topicId, nodeId, tier, kind:'step'|'test'|'review', label, exercises[], order[],
 *       pos, hearts, phase:'run'|'feedback'|'done'|'failed', lastResult, mcMap, arrMap,
 *       arrPlaced, answered, wrongOnThis, pendingAnswer }
 *   SRS (localStorage codeduo_srs_v1): jadwal ulangan per soal → retensi ≥30 hari.
 *   expression model (localStorage codeduo_expr_v1): softmax regression on-device (robot.js).
 *   companion (in-memory): wajah/mood + jam perilaku otonom (companion.js).
 *   route (derived dari location.hash): { name, topicId?, nodeId? }.
 *
 * Nol DOM di file ini → Node-testable penuh. Efek samping (SFX/motion/DOM) dipasang
 * komponen lewat efek React, bukan di sini.
 */
'use strict';

import {
  CURRICULUM, TIER_ORDER, STEP_SIZE, syncPath,
  stepsForTopic, allQuestionIds, resolveQuestion,
} from '../content.js';
import {
  SRS_KEY, SRS_INTERVALS, newSched, schedule, gradeFromResult, dueItems, toJSON, fromJSON,
} from '../srs.js';
import { checkFill, checkCode, checkArrange } from '../checkers.js';
import { MAX_HEARTS, mulberry32, shuffled } from './lib/rng.js';
import {
  ROBOT_NAME, robotSay, stateFromMood,
  pickExpression, exprProbs, exprFeatures, exprLabelIndex, exprLearn,
  createExpressionModel, restoreExpressionModel, stateToMood,
  EXPR_STATES, EXPR_FEATURES,
} from '../robot.js';
import { newCompanion, tickCompanion, onUserInteract } from './companion.js';
import {
  createDialogueModel, updateDialogueModel,
  getAiTapDialogue, generateAiDialogue, getAiHintDialogue,
} from './aiDialogue.js';

export { MAX_HEARTS, ROBOT_NAME };
const TIERS = TIER_ORDER;
const STORAGE_KEY = 'codeduo_state_v1';
const EXPR_KEY = 'codeduo_expr_v1';
const AI_MODEL_KEY = 'codeduo_ai_dialogue_v1';

/* ================= Store inti ================= */

let state = null;
let session = null;
let srs = newSched();
let stateLoadError = null;
let exprModel = null;
let exprTrained = null;
let aiDialogueModel = createDialogueModel();
let companion = newCompanion();
let version = 0;
const listeners = new Set();

function bump() {
  version += 1;
  listeners.forEach((fn) => { try { fn(); } catch (e) { console.warn('[codeduo] listener error:', e); } });
}

export function subscribe(fn) {
  listeners.add(fn);
  return () => { listeners.delete(fn); };
}

/* Snapshot = nomor versi (imutabel). Data dibaca via getX() — hindari clone tiap render. */
export function getSnapshot() { return version; }

export function getState() { return state; }
export function getSession() { return session; }
export function getSrs() { return srs; }
export function getCompanion() { return companion; }
export function getLoadError() { return stateLoadError; }
export function getExprModel() { return exprModel; }

/* ================= Seeded path personal ================= */

function generatePath() {
  return CURRICULUM.map((t) => t.id);
}

export function topicById(id) {
  return CURRICULUM.find((t) => t.id === id);
}

function lessonById(topic, lessonId) {
  return topic.lessons.find((l) => l.id === lessonId);
}

/* Tahap sebuah langkah: pakai field `level` bila ada, jika tidak sebar merata per tier. */
export function lessonTier(topic, lesson) {
  if (lesson && TIERS.includes(lesson.level)) return lesson.level;
  const i = topic.lessons.indexOf(lesson);
  const per = Math.ceil(topic.lessons.length / TIERS.length) || 1;
  return TIERS[Math.min(TIERS.length - 1, Math.floor(i / per))];
}

export function isTopicDone(id) {
  const t = topicById(id);
  if (!t) return false;
  return stepsForTopic(t).filter((n) => n.kind === 'step').every((n) => isNodeDone(id, n.id));
}

export function currentTopicId() {
  return state.path.find((id) => !isTopicDone(id)) || null;
}

export function topicNodes(topicId) {
  const t = topicById(topicId);
  return t ? stepsForTopic(t) : [];
}

/* Progres topik sebagai Set (migrasi malas dari progress lama berisi lessonId). */
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

export function isNodeDone(topicId, nodeId) {
  return progressSet(topicId).has(nodeId);
}

export function isLessonDone(topicId, lessonId) {
  const t = topicById(topicId);
  const l = t && lessonById(t, lessonId);
  if (!l) return false;
  const done = progressSet(topicId);
  return done.has(lessonId)
    || topicNodes(topicId).some((n) => n.kind === 'step' && n.tier === l.level && done.has(n.id));
}

export function nextUnlockedNode(topic) {
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
    buddyHidden: false,
  };
}

function sanitizeState(parsed) {
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
  s.buddyHidden = !!s.buddyHidden;
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
  if (!raw) { state = defaultState(); return; }
  try {
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) throw new Error('struktur tidak valid');
    state = sanitizeState(parsed);
  } catch (e) {
    try { localStorage.setItem(STORAGE_KEY + '_corrupt_backup', raw); } catch (_) { /* ignore */ }
    stateLoadError = 'Data lama rusak, progress direset (backup disimpan). ' + e.message;
    state = defaultState();
  }
}

function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  catch (e) { console.warn('[codeduo] gagal simpan state:', e.message); }
}

export function dumpState() {
  const dump = {
    persisted: JSON.parse(JSON.stringify(state)),
    session: session ? JSON.parse(JSON.stringify(session)) : null,
    loadError: stateLoadError,
  };
  console.log('[codeduo:state-dump]', dump);
  return dump;
}

/* ================= SRS ================= */

function loadSrs() {
  let raw = null;
  try { raw = localStorage.getItem(SRS_KEY); } catch (_) { raw = null; }
  srs = fromJSON(raw) || newSched();
}

function saveSrs() {
  try { localStorage.setItem(SRS_KEY, JSON.stringify(toJSON(srs))); }
  catch (e) { console.warn('[codeduo] gagal simpan jadwal SRS:', e.message); }
}

export function dueReviewKeys() {
  return dueItems(allQuestionIds(), srs, Date.now());
}

export function srsDump() {
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

/* ================= Model ekspresi (on-device) ================= */

function loadExpression() {
  let raw = null;
  try { raw = localStorage.getItem(EXPR_KEY); } catch (_) { raw = null; }
  if (raw) exprModel = restoreExpressionModel(raw);
  if (!exprModel) exprModel = createExpressionModel();

  let rawAi = null;
  try { rawAi = localStorage.getItem(AI_MODEL_KEY); } catch (_) { rawAi = null; }
  if (rawAi) {
    try { aiDialogueModel = JSON.parse(rawAi); } catch (_) { aiDialogueModel = createDialogueModel(); }
  } else {
    aiDialogueModel = createDialogueModel();
  }
}

function saveExpression() {
  try { localStorage.setItem(EXPR_KEY, JSON.stringify(exprModel)); }
  catch (e) { console.warn('[codeduo] gagal simpan model ekspresi:', e.message); }
  try { localStorage.setItem(AI_MODEL_KEY, JSON.stringify(aiDialogueModel)); }
  catch (_) {}
}

function learnExpression(features) {
  if (!exprModel || !features) return;
  const key = JSON.stringify(features);
  if (key === exprTrained) return;
  exprTrained = key;
  exprLearn(exprModel, exprFeatures(features), exprLabelIndex(features));
  saveExpression();
}

/* sinyal mentah interaksi → vektor fitur (SERT Event: payload jelas). */
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

/* Tiap interaksi: latih model → reset jam otonom (baris proaktif dibuang) → ekspresi kontekstual. */
export function onInteraction(sig) {
  const s = sig || {};
  const features = interactionSignal(s);
  learnExpression(features);
  updateDialogueModel(aiDialogueModel, s);
  saveExpression();
  const r = onUserInteract(companion, Math.random);
  companion = r.state;

  /* Jaga ekspresi tetap sinkron dengan emosi belajar agar Bibit tidak loncat-loncat seperti slideshow */
  if (s.correct) {
    companion.face = 'happy';
  } else if (s.wrong) {
    companion.face = 'thinking';
  } else if (s.tap) {
    companion.face = pickExpression(exprModel, features, Math.random, companion.face);
  } else if (session && session.phase === 'run') {
    /* Saat murid sedang berpikir/memilih jawaban, Bibit tetap fokus menemani */
    if (!companion.face || companion.face === 'sleeping' || companion.face === 'error') {
      companion.face = 'idle';
    }
  } else {
    companion.face = pickExpression(exprModel, features, Math.random, companion.face);
  }

  companion.mood = stateToMood(companion.face);
  companion.line = null; /* balik ke baris konteks permainan sampai tick otonom berikutnya */
  if (r.greeting) { companion.line = robotSay(r.greeting.ctx, (state ? state.seed : 0) + 3); companion.ctx = r.greeting.ctx; }
  bump();
}

let tapSeed = 0;

function collectAiSignals() {
  const r = routeInfo();
  const s = state;
  const ex = currentExercise();
  const t = r.topicId ? topicById(r.topicId) : null;
  const nodes = t ? topicNodes(t.id) : [];
  const doneCount = nodes.filter((n) => isNodeDone(t.id, n.id)).length;
  const nextT = currentTopicId() ? topicById(currentTopicId()) : null;

  return {
    inSession: !!session,
    route: r.name,
    phase: session ? session.phase : null,
    pos: session ? session.pos : 0,
    totalInSession: session && session.order ? session.order.length : 10,
    hearts: session ? session.hearts : 3,
    streak: s && s.streak ? s.streak.count : 0,
    lessonsDone: s && s.stats ? s.stats.lessonsDone : 0,
    correct: s && s.stats ? s.stats.correct : 0,
    dueReviews: dueReviewKeys().length,
    currentExercise: ex,
    face: companion.face,
    mood: companion.mood,
    topicTitle: t ? t.title : null,
    topicDoneCount: doneCount,
    topicTotalCount: nodes.length,
    nextTopicTitle: nextT ? nextT.title : null,
    lessonLabel: session ? session.label : null,
    lastResult: session ? session.lastResult : null,
  };
}

function getTapDialogue(seed) {
  if (companion.face === 'sleeping') {
    return 'Hoam... Aku bangun! Siap ngoding lagi!';
  }
  const signals = collectAiSignals();
  return getAiTapDialogue(signals, seed);
}

export function onBuddyTap() {
  tapSeed += 1;
  onInteraction({ tap: true, nav: false, lesson: !!session, n: 0.3 });
  companion.line = getTapDialogue(tapSeed + (state ? state.seed : 0));
  companion.ctx = 'tap';
  bump();
}

/* ================= Tick otonom (dipanggil timer React) =================
 * dtMs = ms sejak tick terakhir. Return emit = null | { kind, ctx, line?, face? } untuk efek. */
export function tickBuddy(dtMs) {
  const r = tickCompanion(companion, currentCtx(), dtMs, Math.random, Date.now());
  companion = r.state;
  const emit = r.emit;
  if (!emit) return null; /* tak ada perubahan tampak → jangan re-render (bump) */
  if (emit.face) { companion.face = emit.face; companion.mood = stateToMood(emit.face); }
  if (emit.kind === 'line') {
    const seed = (state ? state.seed : 0) + (session ? session.pos : 0) + (companion.lines.length | 0);
    companion.line = buildContextualLine(seed);
    companion.ctx = emit.ctx;
  } else if (emit.kind === 'hint') {
    companion.line = hintLine();
    companion.ctx = 'slow';
  }
  bump();
  return { kind: emit.kind, face: emit.face, ctx: companion.ctx, line: companion.line || null };
}

function currentCtx() {
  const r = routeInfo();
  return { route: r.name, phase: session ? session.phase : null, pos: session ? session.pos : 0 };
}

function hintLine() {
  const ex = currentExercise();
  const signals = collectAiSignals();
  return getAiHintDialogue(ex, signals);
}

function buildContextualLine(seed) {
  const signals = collectAiSignals();
  const b = buddyState();

  if (session && session.phase === 'feedback' && session.lastResult) {
    if (session.lastResult.correct) {
      return generateAiDialogue('correct', signals, seed);
    } else {
      return generateAiDialogue('wrong', signals, seed);
    }
  }

  return generateAiDialogue(b.ctx, signals, seed);
}

/* Baris bubble default (ikut konteks permainan) — dipakai Buddy bila tak ada baris otonom. */
export function buddyState() {
  if (session) {
    if (session.phase === 'done') return { mood: 'celebrate', ctx: 'done' };
    if (session.phase === 'failed') return { mood: 'sad', ctx: 'lost-heart' };
    if (session.phase === 'feedback' && session.lastResult) {
      return session.lastResult.correct ? { mood: 'happy', ctx: 'correct' } : { mood: 'thinking', ctx: 'wrong' };
    }
    return { mood: 'idle', ctx: 'start' };
  }
  return { mood: 'happy', ctx: 'greet' };
}

/* Wajah yang tampil: pilihan model bila ada, else turunan mood konteks. */
export function buddyFace() {
  const b = buddyState();
  if (session && (session.phase === 'feedback' || session.phase === 'done' || session.phase === 'failed')) {
    return stateFromMood(b.mood === 'celebrate' ? 'happy' : b.mood);
  }
  if (companion.face) return companion.face;
  return stateFromMood(b.mood === 'celebrate' ? 'happy' : b.mood);
}

/* Baris yang benar-benar tampil = baris otonom bila ada, jika tidak baris konteks permainan. */
export function buddyLine(pos) {
  const b = buddyState();
  const seed = (state ? state.seed : 0) + (Number.isFinite(pos) ? pos : (session ? session.pos : 0));
  const inFeedback = session && (session.phase === 'feedback' || session.phase === 'done' || session.phase === 'failed');
  if (companion.line && !inFeedback) return { text: companion.line, ctx: companion.ctx };
  return { text: buildContextualLine(seed), ctx: b.ctx };
}

export function buddyDump() {
  const b = buddyState();
  let probs = null;
  if (exprModel) {
    const p = exprProbs(exprModel, interactionSignal({ lesson: !!session, hearts: 'session' }));
    probs = {};
    if (p) EXPR_STATES.forEach((s, i) => { probs[s] = Math.round(p[i] * 1000) / 1000; });
  }
  return {
    derived: b,
    name: ROBOT_NAME,
    face: companion.face,
    mood: companion.mood,
    ctx: companion.ctx,
    autonomous: { sinceUser: Math.round(companion.sinceUser), lines: companion.lines.length },
    model: exprModel ? { n: exprModel.n, lr: exprModel.lr, l2: exprModel.l2, feats: EXPR_FEATURES.length, classes: EXPR_STATES.length } : null,
    probs: probs,
  };
}

/* ================= Sesi: step / ujian / review ================= */

function sessionExercises(keys) {
  const out = [];
  (keys || []).forEach((k) => { const ex = resolveQuestion(k); if (ex) out.push({ key: k, ex }); });
  return out;
}

function startNode(topicId, nodeId) {
  const topic = topicById(topicId);
  if (!topic) { setHash('#/'); return; }
  const node = topicNodes(topicId).find((n) => n.id === nodeId);
  if (!node) { setHash('#/topic/' + topicId); return; }
  const keys = node.questionIds.slice();
  session = {
    topicId, nodeId, tier: node.tier, kind: node.kind, label: node.label,
    exercises: sessionExercises(keys),
    order: shuffled(keys.map((_, i) => i)),
    pos: 0, hearts: MAX_HEARTS, phase: 'run', lastResult: null,
    mcMap: {}, arrMap: {}, arrPlaced: [], answered: false, wrongOnThis: false, pendingAnswer: null,
  };
  onInteraction({ lesson: true, n: 0 });
  /* rute sinkron: #/lesson/<topic>/<node> → router React merender Lesson.
   * setHash juga bump() bila hash sudah sama (retry) → tak menggantung. */
  setHash('#/lesson/' + topicId + '/' + nodeId);
}

function startReview() {
  const keys = dueReviewKeys().slice(0, STEP_SIZE);
  if (!keys.length) { setHash('#/'); return; }
  session = {
    topicId: '__review__', nodeId: 'review', tier: null, kind: 'review',
    label: 'Ingat · ' + keys.length + ' soal',
    exercises: sessionExercises(keys),
    order: shuffled(keys.map((_, i) => i)),
    pos: 0, hearts: MAX_HEARTS, phase: 'run', lastResult: null,
    mcMap: {}, arrMap: {}, arrPlaced: [], answered: false, wrongOnThis: false, pendingAnswer: null,
  };
  onInteraction({ lesson: true, n: 0 });
  setHash('#/review');
}

/* ================= Aksi (dipanggil komponen / router) ================= */

export function openTopic(topicId) { setHash('#/topic/' + topicId); }
export function goHome() { setHash('#/'); }
export function goProfile() { setHash('#/profile'); }

export function stepStart(topicId, nodeId) { session = null; startNode(topicId, nodeId); }
export function tierTest(topicId, nodeId) { session = null; startNode(topicId, nodeId); }
export function reviewStart() { session = null; startReview(); }

export function lessonExit() {
  const topicId = session ? session.topicId : currentTopicId();
  const fromReview = !!(session && session.kind === 'review');
  session = null;
  setHash(fromReview ? '#/' : (topicId ? '#/topic/' + topicId : '#/'));
}

export function lessonRetry() {
  if (!session) return;
  if (session.kind === 'review') { startReview(); return; }
  const { topicId, nodeId } = session;
  session = null;
  startNode(topicId, nodeId);
}

export function stateReset() {
  state = defaultState();
  exprModel = createExpressionModel();
  exprTrained = null;
  companion = newCompanion();
  srs = newSched();
  try { localStorage.removeItem(EXPR_KEY); } catch (_) { /* ignore */ }
  try { localStorage.removeItem(SRS_KEY); } catch (_) { /* ignore */ }
  saveState();
  session = null;
  setHash('#/');
  bump();
}

export function toggleMute() {
  state.muted = !state.muted;
  saveState();
  bump();
  return state.muted;
}

export function toggleBuddy() {
  if (!state) return false;
  state.buddyHidden = !state.buddyHidden;
  saveState();
  bump();
  return state.buddyHidden;
}

export function isBuddyHidden() {
  return state ? !!state.buddyHidden : false;
}

export function currentExercise() {
  if (!session) return null;
  const idx = session.order[session.pos];
  if (!Number.isInteger(idx)) return null;
  const entry = session.exercises[idx];
  return entry ? entry.ex : null;
}

function currentKey() {
  if (!session) return null;
  const idx = session.order[session.pos];
  const entry = session.exercises[idx];
  return entry ? entry.key : null;
}

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
    if (m.t === 'selector' && !doc.querySelector(m.v)) return { correct: false, message: 'Elemen ' + m.v + ' tidak ditemukan.' };
    if (m.t === 'text' && !doc.body.textContent.includes(m.v)) return { correct: false, message: 'Teks "' + m.v + '" tidak ditemukan.' };
  }
  return { correct: true };
}

/* Pilih jawaban MC (belum dikirim — hanya menandai pilihan). Sinyal pick → muka ganti. */
export function pickMc(i) {
  if (!session || session.answered) return;
  session.pendingAnswer = i;
  onInteraction({ pick: true, lesson: true, n: 0.4 });
}

export function arrangePick(id) {
  if (!session || session.answered) return;
  session.arrPlaced = session.arrPlaced || [];
  if (session.arrPlaced.includes(id)) return;
  session.arrPlaced.push(id);
  onInteraction({ pick: true, lesson: true, n: 0.4 });
}

export function arrangeUnpick(id) {
  if (!session || session.answered) return;
  session.arrPlaced = (session.arrPlaced || []).filter((x) => x !== id);
  onInteraction({ pick: true, lesson: true, n: 0.4 });
}

/* Inti penilaian + SRS + pembelajaran ekspresi. Return objek status untuk efek di komponen. */
export function answerCheck(answer) {
  if (!session || session.phase !== 'run' || session.answered) return null;
  const ex = currentExercise();
  if (!ex) return null;
  let result;
  if (ex.type === 'mc') result = answer === ex.a ? { correct: true } : { correct: false, message: 'Pilihan belum tepat.' };
  else if (ex.type === 'fill') result = checkFill(answer, ex.accept);
  else if (ex.type === 'code') result = checkCode(answer, { fnName: ex.fn, tests: ex.tests });
  else if (ex.type === 'preview') result = checkPreview(answer, ex);
  else if (ex.type === 'arrange') result = checkArrange(answer, ex.blocks.map((_, i) => String(i)));
  else result = { correct: false, message: 'Tipe soal tidak dikenal.' };

  session.answered = true;
  session.lastResult = { correct: result.correct, message: result.message || (result.correct ? 'Mantap!' : 'Belum tepat.'), explain: ex.explain };

  if (result.reason === 'empty') {
    session.answered = false;
    session.lastResult = null;
    session.phase = 'run';
    bump();
    return { empty: true, message: result.message };
  }

  if (result.correct) state.stats.correct += 1;
  else {
    session.hearts -= 1;
    session.wrongOnThis = true;
    state.stats.wrong += 1;
    if (session.hearts <= 0) {
      session.phase = 'failed';
    } else {
      // Duolingo Review Mistakes Queue:
      // Soal yang belum tepat diulang di akhir sesi agar seluruh soal pada materi ini
      // benar-benar habis dan dipahami murid sampai tuntas.
      const currentIdx = session.order[session.pos];
      session.order.push(currentIdx);
    }
  }
  if (session.phase === 'run') session.phase = 'feedback';

  const key = currentKey();
  if (key) { srs = schedule(srs, key, gradeFromResult(result.correct), Date.now()); saveSrs(); }

  onInteraction({
    correct: session.lastResult.correct,
    wrong: !session.lastResult.correct,
    hearts: 'session',
    progress: 'session',
    lesson: true,
    n: session.order.length ? session.pos / session.order.length : 0,
  });
  saveState();
  return { result: { correct: result.correct, failed: session.phase === 'failed' } };
}

export function lessonContinue() {
  if (!session || session.phase !== 'feedback') return false;
  if (session.pos >= session.order.length - 1) return finishLesson();
  session.pos += 1;
  session.phase = 'run';
  session.answered = false;
  session.wrongOnThis = false;
  session.lastResult = null;
  session.pendingAnswer = null;
  session.arrPlaced = [];
  onInteraction({ lesson: true, progress: 'session', hearts: 'session', n: session.order.length ? session.pos / session.order.length : 0 });
  return false;
}

function finishLesson() {
  state.stats.lessonsDone += 1;
  if (session.kind !== 'review') {
    const p = (state.progress[session.topicId] = state.progress[session.topicId] || { done: [] });
    if (!p.done.includes(session.nodeId)) p.done.push(session.nodeId);
  }
  const newStreakDay = bumpStreak();
  saveState();
  session.phase = 'done';
  onInteraction({ lesson: true, progress: 1, hearts: 'session', n: 1 });
  return newStreakDay;
}

function bumpStreak() {
  const today = localDateStr();
  if (state.streak.lastActive === today) return false;
  const y = new Date(); y.setDate(y.getDate() - 1);
  const yesterday = localDateStr(y);
  state.streak.count = state.streak.lastActive === yesterday ? state.streak.count + 1 : 1;
  state.streak.lastActive = today;
  return true;
}

function localDateStr(d) {
  const x = d || new Date();
  return x.getFullYear() + '-' + String(x.getMonth() + 1).padStart(2, '0') + '-' + String(x.getDate()).padStart(2, '0');
}

/* ================= Router (hash) ================= */

function setHash(h) {
  const target = h || '#/';
  if (location.hash !== target) location.hash = target;
  else { routeChange(); return; }
  bump();
}

export function routeInfo() {
  const hash = (typeof location !== 'undefined' && location.hash) || '#/';
  const parts = hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  if (parts[0] === 'review') return { name: 'review' };
  if (parts[0] === 'lesson' && parts[1] && parts[2]) return { name: 'lesson', topicId: parts[1], nodeId: parts[2] };
  if (parts[0] === 'topic' && parts[1]) return { name: 'topic', topicId: parts[1] };
  if (parts[0] === 'profile') return { name: 'profile' };
  return { name: 'home' };
}

/* Dipanggil router React saat hash berubah: sinkronkan sesi + sinyal nav. */
export function routeChange() {
  const r = routeInfo();
  /* rute lesson yang belum punya sesi (deep-link) → mulai otomatis */
  if (r.name === 'lesson' && (!session || session.topicId !== r.topicId || session.nodeId !== r.nodeId)) {
    session = null;
    startNode(r.topicId, r.nodeId);
    return;
  }
  if (r.name === 'review' && (!session || session.kind !== 'review')) {
    session = null;
    startReview();
    return;
  }
  const isLesson = r.name === 'lesson' || r.name === 'review';
  if (!isLesson && session) session = null;
  if (!isLesson) onInteraction({ nav: true, n: ((state ? state.seed : 0) % 7) / 7 });
  bump();
}

/* ================= Init ================= */

export function initStore() {
  loadState();
  loadSrs();
  loadExpression();
  state.path = CURRICULUM.map((t) => t.id);
  saveState();
  bump();
  return { muted: !!state.muted };
}

/* Expose dump ke window untuk inspeksi manual (SERT State gate). */
export function exposeGlobals() {
  if (typeof window === 'undefined') return;
  window.dumpState = dumpState;
  window.buddyDump = buddyDump;
  window.srsDump = srsDump;
}
