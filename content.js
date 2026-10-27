/* CodeDuo — kurikulum (BARREL). Konten dipecah per blok agar mudah dirawat:
 *   content/html.js  → HTML, CSS
 *   content/js.js    → JavaScript, Struktur Data
 *   content/sql.js   → SQL, Database, API
 *   content/ts.js    → TypeScript, REST API
 *   content/web.js   → Blok Web (peta arsitektur & fungsi blok web)
 *   content/lang-*.js → satu topik per bahasa/framework (React, Next.js, Laravel, dst.)
 * File ini menyusun semuanya jadi CURRICULUM + helper murni (step/ujian/SRS key).
 *
 * Struktur: 26 topik × 31 pelajaran (10 Dasar, 10 Menengah, 11 Advance) = 305 soal/topik.
 * Total 7.930 soal. Bahasa/framework lama yang menumpuk di Blok Web kini jadi topik sendiri.
 * Tiap pelajaran menjadi step tersendiri (maksimal 10 soal per step),
 * lalu tiap tier ditutup dengan 1 ujian (10 soal komprehensif).
 * Tipe soal: mc | fill | code | preview | arrange
 * `arrange` boleh punya `answers` (opsional): daftar urutan index blok yang juga sah,
 * dipakai saat blok bersebelahan memang saling-tukar (mis. dua `<li>` dalam `<ul>`,
 * beberapa `<meta>`, atau deklarasi CSS dalam satu rule). Lihat checkers.js#checkArrange.
 *
 * ESM murni: dipakai Vite (browser) & Node (test).
 */
'use strict';

import { CONTENT_HTML } from './content/html.js';
import { CONTENT_JS } from './content/js.js';
import { CONTENT_SQL } from './content/sql.js';
import { CONTENT_TS } from './content/ts.js';
import { CONTENT_WEB } from './content/web.js';
/* Topik bahasa/framework: dipisah dari Blok Web agar tiap bahasa punya
 * blok soal sendiri (Dasar/Menengah/Advance + Master Review). */
import { CONTENT_REACT } from './content/lang-react.js';
import { CONTENT_NEXTJS } from './content/lang-nextjs.js';
import { CONTENT_LARAVEL } from './content/lang-laravel.js';
import { CONTENT_RUBY } from './content/lang-ruby.js';
import { CONTENT_RAILS } from './content/lang-rails.js';
import { CONTENT_ELYSIA } from './content/lang-elysia.js';
import { CONTENT_GO } from './content/lang-go.js';
import { CONTENT_FLUTTER } from './content/lang-flutter.js';
import { CONTENT_DART } from './content/lang-dart.js';
import { CONTENT_KOTLIN } from './content/lang-kotlin.js';
import { CONTENT_JAVA } from './content/lang-java.js';
import { CONTENT_PYTHON } from './content/lang-python.js';
import { CONTENT_MATLAB } from './content/lang-matlab.js';
import { CONTENT_PHP } from './content/lang-php.js';
import { CONTENT_C } from './content/lang-c.js';
import { CONTENT_CPP } from './content/lang-cpp.js';
import { CONTENT_ARDUINO } from './content/arduino.js';

const CONTENT_LANGS = [].concat(
  CONTENT_REACT, CONTENT_NEXTJS, CONTENT_LARAVEL, CONTENT_RUBY, CONTENT_RAILS,
  CONTENT_ELYSIA, CONTENT_GO, CONTENT_FLUTTER, CONTENT_DART, CONTENT_KOTLIN,
  CONTENT_JAVA, CONTENT_PYTHON, CONTENT_MATLAB, CONTENT_PHP, CONTENT_C, CONTENT_CPP,
  CONTENT_ARDUINO,
);

const CURRICULUM = [].concat(CONTENT_HTML, CONTENT_JS, CONTENT_SQL, CONTENT_TS, CONTENT_WEB, CONTENT_LANGS);

/* Tier tetap & ukuran step — dipakai app.js untuk memotong topik jadi step + ujian. */
const TIER_ORDER = ['Dasar', 'Menengah', 'Advance'];
const STEP_SIZE = 10;

/* Kunci soal global & stabil: "topicId|lessonId#index". Dipakai SRS & sesi. */
function questionKey(topicId, lessonId, idx) {
  return topicId + '|' + lessonId + '#' + idx;
}

/* stepsForTopic(topic) → daftar node progresi murni:
 * tiap pelajaran menjadi step tersendiri (maksimal 10 soal/step),
 * diikuti 1 ujian tier (10 soal representatif dari tier tersebut).
 * Node: { id, topicId, tier, kind:'step'|'test', label, lessonId?, questionIds[], stepNo }
 * questionIds = kunci global (questionKey). */
function stepsForTopic(topic) {
  if (!topic || !Array.isArray(topic.lessons)) return [];
  const nodes = [];
  let globalStepNo = 0;
  TIER_ORDER.forEach((tier) => {
    const lessons = topic.lessons.filter((lesson) => lesson.level === tier && lesson.exercises.length);
    if (!lessons.length) return;
    const tierStepNodes = [];
    lessons.forEach((lesson) => {
      const ids = lesson.exercises.map((_, i) => questionKey(topic.id, lesson.id, i));
      for (let c = 0; c < ids.length; c += STEP_SIZE) {
        globalStepNo += 1;
        const slice = ids.slice(c, c + STEP_SIZE);
        const part = Math.floor(c / STEP_SIZE) + 1;
        const stepNode = {
          id: `${topic.id}--${globalStepNo}`,
          topicId: topic.id,
          tier,
          kind: 'step',
          label: lesson.title + (part > 1 ? ` · Bagian ${part}` : ''),
          lessonId: lesson.id,
          lessonTitle: lesson.title,
          questionIds: slice,
          stepNo: globalStepNo,
        };
        nodes.push(stepNode);
        tierStepNodes.push(stepNode);
      }
    });
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
