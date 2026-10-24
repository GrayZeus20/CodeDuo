/* CodeDuo — kurikulum (BARREL). Konten dipecah per blok agar mudah dirawat:
 *   content/html.js  → HTML, CSS
 *   content/js.js    → JavaScript, Struktur Data
 *   content/sql.js   → SQL, Database, API
 *   content/ts.js    → TypeScript, REST API
 *   content/web.js   → Blok Web
 * File ini menyusun semuanya jadi CURRICULUM + helper murni (step/ujian/SRS key).
 *
 * Struktur: 10 topik. Umumnya 31 pelajaran; Blok Web memiliki jalur Advance lebih panjang.
 * Total 3.080 soal (>300 per topik).
 * Tiap tier dipotong menjadi step berurutan (10 soal per step) hingga seluruh soal habis,
 * ditutup dengan 1 ujian tier (10 soal komprehensif dari tier tersebut).
 * Step dibuat per 10 soal pada tiap tier, lalu ditutup satu ujian per tier.
 * Tipe soal: mc | fill | code | preview | arrange
 *
 * ESM murni: dipakai Vite (browser) & Node (test).
 */
'use strict';

import { CONTENT_HTML } from './content/html.js';
import { CONTENT_JS } from './content/js.js';
import { CONTENT_SQL } from './content/sql.js';
import { CONTENT_TS } from './content/ts.js';
import { CONTENT_WEB } from './content/web.js';

const CURRICULUM = [].concat(CONTENT_HTML, CONTENT_JS, CONTENT_SQL, CONTENT_TS, CONTENT_WEB);

/* Tier tetap & ukuran step — dipakai app.js untuk memotong topik jadi step + ujian. */
const TIER_ORDER = ['Dasar', 'Menengah', 'Advance'];
const STEP_SIZE = 10;

/* Kunci soal global & stabil: "topicId|lessonId#index". Dipakai SRS & sesi. */
function questionKey(topicId, lessonId, idx) {
  return topicId + '|' + lessonId + '#' + idx;
}

/* stepsForTopic(topic) → daftar node progresi murni:
 * tiap tier dipecah jadi step-step berurutan (10 soal/step) hingga soal habis,
 * diikuti 1 ujian tier (10 soal representatif dari tier tersebut).
 * Node: { id, topicId, tier, kind:'step'|'test', label, questionIds[], stepNo }
 * questionIds = kunci global (questionKey). */
function stepsForTopic(topic) {
  if (!topic || !Array.isArray(topic.lessons)) return [];
  const nodes = [];
  let globalStepNo = 0;
  TIER_ORDER.forEach((tier) => {
    const ids = topic.lessons
      .filter((l) => l.level === tier)
      .flatMap((l) => l.exercises.map((_, i) => questionKey(topic.id, l.id, i)));
    if (!ids.length) return;
    const tierStepNodes = [];
    for (let c = 0; c < ids.length; c += STEP_SIZE) {
      globalStepNo += 1;
      const slice = ids.slice(c, c + STEP_SIZE);
      const stepNode = {
        id: `${topic.id}--${globalStepNo}`,
        topicId: topic.id,
        tier,
        kind: 'step',
        label: `Step ${globalStepNo} · ${tier}`,
        questionIds: slice,
        stepNo: globalStepNo,
      };
      nodes.push(stepNode);
      tierStepNodes.push(stepNode);
    }
    /* Ujian tier: 10 soal komprehensif — sampel merata dari seluruh step tier ini
     * (1 soal per step dulu; jika step < 10, lengkapi dari soal cadangan per step). */
    const perStep = tierStepNodes.map((s) => s.questionIds);
    const testQuestionIds = [];
    for (const qids of perStep) { if (qids.length && testQuestionIds.length < STEP_SIZE) testQuestionIds.push(qids[0]); }
    for (const qids of perStep) {
      if (testQuestionIds.length >= STEP_SIZE) break;
      for (let i = 1; i < qids.length && testQuestionIds.length < STEP_SIZE; i++) testQuestionIds.push(qids[i]);
    }
    nodes.push({
      id: `${topic.id}--${globalStepNo}--test`,
      topicId: topic.id,
      tier,
      kind: 'test',
      label: `Ujian ${tier}`,
      questionIds: testQuestionIds,
      stepNo: globalStepNo,
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
 * Path lama dipertahankan urutannya; topik yang sudah ada tak diacak ulang. */function syncPath(path, rng) {
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

export {
  CURRICULUM, syncPath,
  stepsForTopic, allQuestionIds, questionKey, resolveQuestion, exerciseById,
  TIER_ORDER, STEP_SIZE,
};
