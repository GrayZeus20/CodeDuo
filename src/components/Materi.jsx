/* CodeDuo — Materi: halaman belajar per blok/pelajaran (guidebook ala Duolingo).
 * Alur belajar: baca materi → tombol "Mulai Latihan" → step soal pelajaran itu.
 * Materi = gabungan data editorial (lessonGuides.js) + rangkuman otomatis dari soal.
 */
'use strict';

import { useStore } from '../useStore.js';
import {
  topicById, topicNodes, isLessonDone, stepStart,
} from '../store.js';
import { lessonGuide } from '../lessonGuides.js';
import { pop } from '../lib/motion.js';

export default function Materi({ topicId, lessonId }) {
  useStore();
  const topic = topicById(topicId);
  if (!topic) {
    return (<section className="screen"><p>Topik tidak ditemukan. <a href="#/">Ke home</a></p></section>);
  }
  const lesson = (topic.lessons || []).find((l) => l.id === lessonId);
  if (!lesson) {
    return (<section className="screen"><p>Materi tidak ditemukan. <a href={'#/topic/' + topic.id}>Kembali ke {topic.name}</a></p></section>);
  }

  const guide = lessonGuide(lesson);
  const nodes = topicNodes(topic.id);
  /* Node step yang memuat pelajaran ini (step pertama yang memuat soal pelajaran). */
  const node = nodes.find((n) => n.kind === 'step' && (n.questionIds || []).some(
    (k) => k.indexOf('|' + lesson.id + '#') === 0 || k.endsWith('|' + lesson.id + '#0'),
  )) || nodes.find((n) => n.kind === 'step' && (n.questionIds || []).some((k) => k.includes('|' + lesson.id + '#')));
  const done = isLessonDone(topic.id, lesson.id);

  const startPractice = (e) => {
    pop(e.currentTarget);
    if (node) stepStart(topic.id, node.id);
    else window.location.hash = '#/topic/' + topic.id;
  };

  return (
    <section className="screen materi">
      <a className="back" href={'#/topic/' + topic.id}>← {topic.name}</a>

      <header className="materi__head">
        <span className="topic-card__tier">{lesson.level} · Materi</span>
        <h1 className="materi__title">{lesson.title}</h1>
        {done && <span className="chip chip--done">✓ Sudah dipelajari</span>}
      </header>

      {guide && (
        <div className="card materi__card">
          <h2 className="materi__subtitle">📘 Ringkasan</h2>
          <p className="materi__summary">{guide.summary}</p>

          {guide.points && guide.points.length > 0 && (
            <>
              <h2 className="materi__subtitle">🔑 Poin Penting</h2>
              <ul className="materi__points">
                {guide.points.map((pt, i) => <li key={i}>{pt}</li>)}
              </ul>
            </>
          )}

          {guide.snippet && (
            <>
              <h2 className="materi__subtitle">💻 Contoh Kode</h2>
              <pre className="code-block materi__code"><code>{guide.snippet}</code></pre>
            </>
          )}

          <div className="materi__tip">
            <span aria-hidden="true">🤖</span>
            <div><b>Tips Bibit:</b> {guide.bibitTip}</div>
          </div>
        </div>
      )}

      <div className="materi__actions">
        <button className="btn btn--primary btn--wide" onClick={startPractice}>
          {done ? 'Ulangi Latihan (' + lesson.exercises.length + ' soal)' : 'Mulai Latihan (' + lesson.exercises.length + ' soal)'}
        </button>
      </div>

      <p className="muted materi__foot">
        Kosakata baru & contoh di halaman ini diambil langsung dari soal latihan —
        pelajari dulu, lalu buktikan pemahamanmu!
      </p>
    </section>
  );
}
