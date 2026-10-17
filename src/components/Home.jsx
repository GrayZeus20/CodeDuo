/* CodeDuo — Home: hero + kartu Ingat + kartu topik + stat. */
'use strict';

import { useStore } from '../useStore.js';
import {
  getState, getLoadError, topicById, isTopicDone, isNodeDone,
  openTopic, dueReviewKeys, reviewStart,
} from '../store.js';
import { CURRICULUM, stepsForTopic } from '../../content.js';
import Bib from './Bib.jsx';
import TopicIcon from './TopicIcon.jsx';
import { pop } from '../lib/motion.js';

export default function Home() {
  useStore();
  const state = getState();
  const loadError = getLoadError();
  const allDone = state.path.every(isTopicDone);
  const dueCount = dueReviewKeys().length;

  return (
    <section className="screen home">
      {loadError && <div className="banner banner--warn">{loadError}</div>}

      <div className="home__hero">
        <span className="home__robot" aria-hidden="true"><Bib mood={allDone ? 'celebrate' : 'happy'} label="Bibit" interactive /></span>
        <div className="home__hero-text">
          <h1 className="home__hi">Lanjut belajar 👋</h1>
          <p className="home__sub">
            Aku <b>Bibit</b>, teman belajarmu. Tiap topik terbagi dalam 31 step (Dasar → Menengah → Advance) + ujian tiap tier.
          </p>
        </div>
      </div>

      {allDone && (
        <div className="card card--done">🎉 Semua step tuntas! {CURRICULUM.length * 31} step koding kamu habiskan — kamu juara.</div>
      )}

      {/* Kartu "Ingat" — pintu ulangan berjarak (SRS): soal yang pernah dipelajari & jatuh tempo */}
      {dueCount > 0 && (
        <button className="card recall card--due" onClick={(e) => { pop(e.currentTarget); reviewStart(); }}>
          <span aria-hidden="true" style={{ fontSize: '1.6rem' }}>🧠</span>
          <span className="recall__text">
            <span className="topic-card__tier">Ulangan ingatan</span>
            <b>{dueCount} soal siap diulang</b>
            <span className="topic-card__desc">Retensi makin kuat kalau diulang tepat waktu.</span>
          </span>
          <span className="btn btn--primary btn--sm recall__btn">Ulangi</span>
        </button>
      )}

      {state.path.map((id) => {
        const t = topicById(id);
        if (!t) return null;
        const done = isTopicDone(id);
        const nodes = stepsForTopic(t);
        const stepNodes = nodes.filter((n) => n.kind === 'step');
        const doneSteps = stepNodes.filter((n) => isNodeDone(id, n.id)).length;
        return (
          <button
            key={id}
            className={'topic-card topic-card--active' + (done ? ' topic-card--done' : '')}
            onClick={(e) => { pop(e.currentTarget); openTopic(t.id); }}
          >
            <span className="topic-card__icon"><TopicIcon id={t.id} size={36} /></span>
            <span className="topic-card__body">
              <span className="topic-card__name">{t.name}{done ? ' ✓' : ''}</span>
              <span className="topic-card__desc">{t.desc}</span>
              <span className="progress-bar">
                <span className="progress-bar__fill" style={{ transform: 'scaleX(' + (doneSteps / (stepNodes.length || 1)).toFixed(3) + ')' }} />
              </span>
              <span className="topic-card__meta">{doneSteps}/{stepNodes.length} step · ujian tiap tier</span>
            </span>
          </button>
        );
      })}

      <div className="stat-row">
        <div className="stat"><b>{state.stats.lessonsDone}</b><span>sesi</span></div>
        <div className="stat"><b>{state.stats.correct}</b><span>benar</span></div>
        <div className="stat"><b>{state.stats.close || 0}</b><span>hampir</span></div>
        <div className="stat"><b>{state.streak.count}</b><span>streak 🔥</span></div>
      </div>
      <a className="btn btn--ghost home__profile" href="#/profile">Profil &amp; pengaturan</a>
    </section>
  );
}
