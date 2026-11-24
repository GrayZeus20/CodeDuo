/* CodeDuo — Materi: halaman belajar terpisah (Pusat Materi Topik & Materi Mendalam Per Bab).
 * Route:
 *   #/materi/:topicId            → Pusat Materi Topik (panduan inti + daftar seluruh bab per tier)
 *   #/materi/:topicId/:lessonId  → Halaman Bacaan Mendalam per pelajaran + tombol Mulai Latihan
 */
'use strict';

import { useMemo, useState } from 'react';
import { useStore } from '../useStore.js';
import {
  topicById, topicNodes, isLessonDone, isNodeDone, nextUnlockedNode, stepStart, tierTest,
} from '../store.js';
import { TIER_ORDER } from '../../content.js';
import { TOPIC_GUIDES } from '../guidebooks.js';
import { lessonGuide } from '../lessonGuides.js';
import { pop } from '../lib/motion.js';
import { SFX } from '../../sfx.js';
import TopicIcon from './TopicIcon.jsx';

export default function Materi({ topicId, lessonId }) {
  useStore();
  const topic = topicById(topicId);
  if (!topic) {
    return (
      <section className="screen">
        <p>Topik tidak ditemukan. <a href="#/">Ke beranda</a></p>
      </section>
    );
  }

  if (!lessonId) {
    return <TopicMateriHub topic={topic} />;
  }

  const lessons = topic.lessons || [];
  const lessonIdx = lessons.findIndex((l) => l.id === lessonId);
  if (lessonIdx < 0) {
    return (
      <section className="screen">
        <p>
          Materi tidak ditemukan. <a href={'#/materi/' + topic.id}>Lihat semua materi {topic.name}</a>
        </p>
      </section>
    );
  }

  return (
    <LessonMateriDetail
      topic={topic}
      lesson={lessons[lessonIdx]}
      prevLesson={lessonIdx > 0 ? lessons[lessonIdx - 1] : null}
      nextLesson={lessonIdx < lessons.length - 1 ? lessons[lessonIdx + 1] : null}
    />
  );
}

/* ================= 1. Pusat Materi Topik (#/materi/:topicId) ================= */

function TopicMateriHub({ topic }) {
  const [tierFilter, setTierFilter] = useState('Semua');
  const [query, setQuery] = useState('');

  const topicGuide = TOPIC_GUIDES[topic.id] || null;
  const nodes = topicNodes(topic.id);
  const stepNodes = nodes.filter((n) => n.kind === 'step');
  const doneSteps = stepNodes.filter((n) => isNodeDone(topic.id, n.id)).length;
  const nextNode = nextUnlockedNode(topic);

  /* Petakan tiap lesson ke stepNo pertamanya agar konsisten dengan jalur belajar. */
  const lessonStepMap = useMemo(() => {
    const map = new Map();
    for (const n of stepNodes) {
      if (n.lessonId && !map.has(n.lessonId)) map.set(n.lessonId, n);
    }
    return map;
  }, [stepNodes]);

  const lessons = topic.lessons || [];
  const qNorm = query.trim().toLowerCase();

  const filteredByTier = useMemo(() => {
    const tiers = tierFilter === 'Semua' ? TIER_ORDER : [tierFilter];
    return tiers.map((tier) => {
      const items = lessons.filter((l) => {
        if ((l.level || 'Dasar') !== tier) return false;
        if (!qNorm) return true;
        return l.title.toLowerCase().includes(qNorm) || l.id.toLowerCase().includes(qNorm);
      });
      return { tier, items };
    }).filter((g) => g.items.length > 0);
  }, [lessons, tierFilter, qNorm]);

  const handleContinuePractice = (e) => {
    try { pop(e.currentTarget); } catch (_) {}
    try { SFX.open(); } catch (_) {}
    if (!nextNode) {
      window.location.hash = '#/topic/' + topic.id;
      return;
    }
    if (nextNode.kind === 'test') tierTest(topic.id, nextNode.id);
    else stepStart(topic.id, nextNode.id);
  };

  return (
    <section className="screen materi-hub">
      <a className="back" href={'#/topic/' + topic.id} onClick={() => SFX.back()}>
        ← Kembali ke Jalur {topic.name}
      </a>

      <header className="materi-hub__hero card" style={{ borderColor: topic.color }}>
        <div className="materi-hub__hero-top">
          <span className="topic__icon"><TopicIcon id={topic.id} size={48} /></span>
          <div className="materi-hub__hero-meta">
            <span className="topic-card__tier">Pusat Materi Lengkap · {lessons.length} Bab</span>
            <h1 className="materi__title">{topicGuide ? topicGuide.title : 'Materi ' + topic.name}</h1>
            <p className="muted materi-hub__desc">{topic.desc}</p>
          </div>
        </div>
        <div className="materi-hub__hero-bar">
          <span className="materi-hub__stat">
            Progres: <b>{doneSteps}/{stepNodes.length}</b> bab selesai
          </span>
          <button type="button" className="btn btn--primary btn--sm" onClick={handleContinuePractice}>
            {nextNode ? 'Lanjut Latihan · ' + nextNode.label : 'Mulai Latihan'} →
          </button>
        </div>
      </header>

      {/* Panduan Konsep Inti Topik */}
      <article className="card materi__card materi__section-card">
        <div className="materi__section-head">
          <h2 className="materi__heading">📘 Konsep Dasar {topic.name}</h2>
          <span className="materi__badge">Ringkasan Topik</span>
        </div>
        <p className="materi__prose">
          {topicGuide
            ? topicGuide.summary + ' Gunakan halaman ini sebagai referensi belajar sebelum mengerjakan latihan bertahap di jalur topik.'
            : `${topic.name} — ${topic.desc}. Pilih salah satu bab di bawah untuk membaca penjelasan mendalam, contoh kode, dan poin penting sebelum mulai berlatih.`}
        </p>

        {topicGuide && topicGuide.keyPoints && topicGuide.keyPoints.length > 0 && (
          <>
            <h3 className="materi__subtitle">🔑 Pilar Utama yang Perlu Dikuasai</h3>
            <ol className="materi__numbered">
              {topicGuide.keyPoints.map((pt, i) => (
                <li key={i} className="materi__numbered-item">
                  <span className="materi__num">{i + 1}</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ol>
          </>
        )}

        {topicGuide && topicGuide.snippet && (
          <>
            <h3 className="materi__subtitle">💻 Contoh Kode Inti</h3>
            <pre className="code-block materi__code"><code>{topicGuide.snippet}</code></pre>
          </>
        )}

        {topicGuide && topicGuide.bibitTip && (
          <div className="materi__tip">
            <span aria-hidden="true">🤖</span>
            <div><b>Tips Bibit:</b> {topicGuide.bibitTip}</div>
          </div>
        )}
      </article>

      {/* Daftar Seluruh Bab Materi */}
      <section className="materi-hub__chapters">
        <div className="materi-hub__chapters-head">
          <div>
            <h2 className="materi__heading">📚 Daftar Bab Materi ({lessons.length})</h2>
            <p className="muted" style={{ fontSize: '0.86rem' }}>
              Klik bab mana saja untuk membaca penjelasan lengkap, contoh kode, dan kesalahan umum.
            </p>
          </div>
        </div>

        <div className="materi-hub__controls">
          <input
            type="search"
            className="input materi-hub__search"
            placeholder={'Cari bab di ' + topic.name + '…'}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Cari bab materi"
          />
          <div className="materi-hub__tabs" role="tablist" aria-label="Filter tingkat materi">
            {['Semua', ...TIER_ORDER].map((t) => (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={tierFilter === t}
                className={'materi-hub__tab' + (tierFilter === t ? ' is-active' : '')}
                onClick={() => setTierFilter(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {filteredByTier.length === 0 ? (
          <div className="card materi-hub__empty">
            <p className="muted">Tidak ada bab materi yang cocok dengan kata kunci &ldquo;{query}&rdquo;.</p>
          </div>
        ) : (
          filteredByTier.map(({ tier, items }) => (
            <div className="materi-hub__tier-group" key={tier}>
              <div className="tier__head">
                <span className="tier__name">{tier}</span>
                <span className="tier__count">{items.length} bab</span>
              </div>
              <div className="materi-hub__list">
                {items.map((lesson) => {
                  const step = lessonStepMap.get(lesson.id);
                  const done = isLessonDone(topic.id, lesson.id);
                  const g = lessonGuide(lesson, topic);
                  return (
                    <a
                      key={lesson.id}
                      href={'#/materi/' + topic.id + '/' + lesson.id}
                      className={'materi-hub__item' + (done ? ' is-done' : '')}
                      onClick={() => SFX.open()}
                    >
                      <span className={'materi-hub__step-badge' + (done ? ' is-done' : '')}>
                        {done ? '✓' : (step ? step.stepNo : '•')}
                      </span>
                      <div className="materi-hub__item-body">
                        <div className="materi-hub__item-top">
                          <b className="materi-hub__item-title">{lesson.title}</b>
                          <span className="materi-hub__item-meta">
                            {g ? `~${g.readMinutes} mnt baca` : ''} · {lesson.exercises.length} soal
                          </span>
                        </div>
                        {g && <p className="materi-hub__item-summary">{g.summary}</p>}
                      </div>
                      <span className="materi-hub__arrow" aria-hidden="true">→</span>
                    </a>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </section>
    </section>
  );
}

/* ================= 2. Materi Mendalam Per Bab (#/materi/:topicId/:lessonId) ================= */

function LessonMateriDetail({ topic, lesson, prevLesson, nextLesson }) {
  const guide = lessonGuide(lesson, topic);
  const nodes = topicNodes(topic.id);
  const node = nodes.find((n) => n.kind === 'step' && n.lessonId === lesson.id)
    || nodes.find((n) => n.kind === 'step' && (n.questionIds || []).some((k) => k.includes('|' + lesson.id + '#')));
  const done = isLessonDone(topic.id, lesson.id);

  const startPractice = (e) => {
    try { pop(e.currentTarget); } catch (_) {}
    try { SFX.open(); } catch (_) {}
    if (node) stepStart(topic.id, node.id);
    else window.location.hash = '#/topic/' + topic.id;
  };

  return (
    <section className="screen materi materi--detail">
      <nav className="materi__nav" aria-label="Navigasi materi">
        <a className="back" href={'#/materi/' + topic.id} onClick={() => SFX.back()}>
          ← Semua Materi {topic.name}
        </a>
        <a className="materi__nav-alt" href={'#/topic/' + topic.id} onClick={() => SFX.back()}>
          Jalur {topic.name}
        </a>
      </nav>

      <header className="card materi__hero-card" style={{ borderColor: topic.color }}>
        <div className="materi__meta-row">
          <span className="materi__badge">{lesson.level || 'Dasar'}</span>
          {node && <span className="materi__badge materi__badge--muted">Step {node.stepNo}</span>}
          {guide && <span className="materi__badge materi__badge--muted">~{guide.readMinutes} menit baca</span>}
          {done && <span className="chip chip--done">✓ Sudah dipelajari</span>}
        </div>
        <h1 className="materi__title">{lesson.title}</h1>
        <p className="muted materi__hero-sub">
          {topic.name} · {guide ? guide.exerciseSummary : `${lesson.exercises.length} soal latihan`}
        </p>
      </header>

      {guide && (
        <div className="materi__article">
          {/* Bagian 1: Pengenalan & Tujuan */}
          <article className="card materi__card">
            <h2 className="materi__heading">📖 Pengenalan &amp; Tujuan Belajar</h2>
            <p className="materi__prose">{guide.overview}</p>
          </article>

          {/* Bagian 2: Penjelasan Konsep Inti */}
          {guide.points && guide.points.length > 0 && (
            <article className="card materi__card">
              <h2 className="materi__heading">🧭 Penjelasan Konsep Inti</h2>
              <p className="muted materi__section-lead">
                Pahami setiap poin berikut secara berurutan agar mudah menjawab variasi soal latihan:
              </p>
              <ol className="materi__numbered">
                {guide.points.map((pt, i) => (
                  <li key={i} className="materi__numbered-item">
                    <span className="materi__num">{i + 1}</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ol>
            </article>
          )}

          {/* Bagian 3: Contoh Kode & Sintaks */}
          {guide.examples && guide.examples.length > 0 && (
            <article className="card materi__card">
              <h2 className="materi__heading">💻 Contoh Kode &amp; Penerapan</h2>
              <div className="materi__examples">
                {guide.examples.map((ex, i) => (
                  <div className="materi__example" key={i}>
                    <div className="materi__example-label">{ex.label}</div>
                    <pre className="code-block materi__code"><code>{ex.code}</code></pre>
                    {ex.note && <p className="materi__example-note">{ex.note}</p>}
                  </div>
                ))}
              </div>
            </article>
          )}

          {/* Bagian 4: Kesalahan Umum & Tips Bibit */}
          <article className="card materi__card">
            <h2 className="materi__heading">⚠️ Hal yang Sering Salah &amp; Tips Praktis</h2>
            {guide.pitfalls && guide.pitfalls.length > 0 && (
              <ul className="materi__pitfalls">
                {guide.pitfalls.map((pf, i) => <li key={i}>{pf}</li>)}
              </ul>
            )}
            <div className="materi__tip">
              <span aria-hidden="true">🤖</span>
              <div><b>Tips Bibit:</b> {guide.bibitTip}</div>
            </div>
          </article>
        </div>
      )}

      {/* Aksi Utama: Satu tombol primary untuk mulai latihan */}
      <div className="card materi__cta-box">
        <div>
          <b className="materi__cta-title">Siap menguji pemahamanmu?</b>
          <p className="muted materi__cta-sub">
            Langsung praktikkan konsep {lesson.title} lewat {lesson.exercises.length} soal interaktif.
          </p>
        </div>
        <button type="button" className="btn btn--primary btn--wide" onClick={startPractice}>
          {done
            ? `Ulangi Latihan${node ? ' · Step ' + node.stepNo : ''} (${lesson.exercises.length} soal)`
            : `Mulai Latihan${node ? ' · Step ' + node.stepNo : ''} (${lesson.exercises.length} soal)`}
        </button>
      </div>

      {/* Navigasi Antar Bab */}
      <nav className="materi__pager" aria-label="Navigasi bab materi">
        {prevLesson ? (
          <a
            className="btn btn--ghost materi__pager-btn"
            href={'#/materi/' + topic.id + '/' + prevLesson.id}
            onClick={() => SFX.back()}
          >
            ← {prevLesson.title}
          </a>
        ) : <span />}
        {nextLesson ? (
          <a
            className="btn btn--ghost materi__pager-btn materi__pager-btn--next"
            href={'#/materi/' + topic.id + '/' + nextLesson.id}
            onClick={() => SFX.open()}
          >
            {nextLesson.title} →
          </a>
        ) : <span />}
      </nav>
    </section>
  );
}
