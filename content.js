/* CodeDuo — kurikulum (BARREL). Konten dipecah per blok agar mudah dirawat:
 *   content/html.js  → HTML, CSS
 *   content/js.js    → JavaScript, Struktur Data
 *   content/sql.js   → SQL, Database, API
 *   content/ts.js    → TypeScript, REST API
 *   content/web.js   → Blok Web
 * File ini menyusun semuanya jadi CURRICULUM + helper murni (step/ujian/SRS key).
 *
 * Struktur: 10 topik × 3 tier (Dasar/Menengah/Advance) = 30 step, 300 soal.
 * Tiap topik punya 6 pelajaran: 2 per tier (urutan lessons = urutan langkah, unlock berurutan).
 * Field `level` menandai tier; tiap tier = TEPAT 10 soal → 1 step = 10 soal.
 * stepsForTopic() memotong tiap topik jadi 6 node: [step, ujian] × 3 tier.
 * tipe soal: mc | fill | code | preview | arrange
 *
 * Dual-mode (tanpa build): Node pakai require(), browser pakai global CONTENT_*
 * (content/*.js dimuat sebelum file ini di index.html & sw.js SHELL).
 */
'use strict';

/* Kumpulkan blok konten. Node = require; browser = variabel global CONTENT_*. */
function collectContent() {
  if (typeof module !== 'undefined' && module.exports) {
    return [
      require('./content/html.js'),
      require('./content/js.js'),
      require('./content/sql.js'),
      require('./content/ts.js'),
      require('./content/web.js'),
    ];
  }
  /* eslint-disable no-undef */
  return [CONTENT_HTML, CONTENT_JS, CONTENT_SQL, CONTENT_TS, CONTENT_WEB];
  /* eslint-enable no-undef */
}

const CURRICULUM = collectContent().reduce((all, block) => all.concat(block), []);

/* Tier tetap & ukuran step — dipakai app.js untuk memotong topik jadi step + ujian. */
const TIER_ORDER = ['Dasar', 'Menengah', 'Advance'];
const STEP_SIZE = 10;

/* Kunci soal global & stabil: "topicId|lessonId#index". Dipakai SRS & sesi. */
function questionKey(topicId, lessonId, idx) {
  return topicId + '|' + lessonId + '#' + idx;
}

/* stepsForTopic(topic) → daftar node progresi murni: 3 step (10 soal/tier)
 * masing-masing diikuti 1 ujian tier (10 soal tier yang sama, diacak ulang per attempt).
 * Node: { id, topicId, tier, kind:'step'|'test', label, questionIds[], stepNo }
 * questionIds = kunci global (questionKey). Total soal per topik = 30; kurikulum = 300. */
function stepsForTopic(topic) {
  if (!topic || !Array.isArray(topic.lessons)) return [];
  const nodes = [];
  TIER_ORDER.forEach((tier, ti) => {
    const ids = topic.lessons
      .filter((l) => l.level === tier)
      .flatMap((l) => l.exercises.map((_, i) => questionKey(topic.id, l.id, i)));
    if (!ids.length) return;
    const stepNo = ti + 1;
    nodes.push({
      id: `${topic.id}--${ti + 1}`,
      topicId: topic.id,
      tier,
      kind: 'step',
      label: `Step ${stepNo} · ${tier}`,
      questionIds: ids.slice(),
      stepNo,
    });
    nodes.push({
      id: `${topic.id}--${ti + 1}--test`,
      topicId: topic.id,
      tier,
      kind: 'test',
      label: `Ujian ${tier}`,
      questionIds: ids.slice(),
      stepNo,
    });
  });
  return nodes;
}

/* Seluruh kunci soal kurikulum (bank SRS). Panjang = total soal. */
function allQuestionIds() {
  return CURRICULUM.flatMap((t) => t.lessons.flatMap((l) => l.exercises.map((_, i) => questionKey(t.id, l.id, i))));
}

/* Ambil objek soal dari kunci global (atau "lessonId#index"). Murni & aman. */
function resolveQuestion(key) {
  if (typeof key !== 'string') return null;
  const bar = key.indexOf('|');
  const topicId = bar >= 0 ? key.slice(0, bar) : null;
  const rest = bar >= 0 ? key.slice(bar + 1) : key;
  const topic = topicId ? CURRICULUM.find((t) => t.id === topicId) : null;
  return topic ? exerciseById(topic, rest) : null;
}

/* Ambil objek soal dari id "lessonId#index" (murni, aman dipakai app.js & test). */
function exerciseById(topic, qid) {
  if (!topic || typeof qid !== 'string') return null;
  const sep = qid.indexOf('#');
  if (sep < 0) return null;
  const lessonId = qid.slice(0, sep);
  const idx = Number(qid.slice(sep + 1));
  const lesson = topic.lessons.find((l) => l.id === lessonId);
  if (!lesson || !Number.isInteger(idx) || idx < 0 || idx >= lesson.exercises.length) return null;
  return lesson.exercises[idx];
}

/* Sinkronkan path personal tersimpan dengan kurikulum saat ini:
 * topik baru (mis. "web") ditambahkan di akhir; id yang sudah dihapus dibuang.
 * Path lama dipertahankan urutannya; topik yang sudah ada tak diacak ulang. */
function syncPath(path, rng) {
  const ids = CURRICULUM.map((t) => t.id);
  const r = typeof rng === 'function' ? rng : Math.random;
  const seen = new Set();
  const kept = (Array.isArray(path) ? path : []).filter((id) => {
    if (!ids.includes(id) || seen.has(id)) return false;
    seen.add(id);
    return true;
  });
  const rest = ids.filter((id) => !seen.has(id));
  return kept.concat(shuffledIds(rest, r));
}

/* Fisher-Yates lokal (content.js murni; hindari dependensi ke app.js) */
function shuffledIds(arr, rng) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    const tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    CURRICULUM, syncPath,
    stepsForTopic, allQuestionIds, questionKey, resolveQuestion, exerciseById,
    TIER_ORDER, STEP_SIZE,
  };
}
