/* CodeDuo — Home: hero + kartu Ingat + kartu topik + stat. */
'use strict';

import { useStore } from '../useStore.js';
import {
  getState, getLoadError, topicById, isTopicDone, isNodeDone,
  openTopic,
} from '../store.js';
import { CURRICULUM, stepsForTopic } from '../../content.js';
import Bib from './Bib.jsx';
import { pop } from '../lib/motion.js';

export default function Home() {
  useStore();
  const state = getState();
  const loadError = getLoadError();
  const allDone = state.path.every(isTopicDone);

  return (
    <section className="screen home">
      {loadError && <div className="banner banner--warn">{loadError}</div>}

      <div className="home__hero">
        <span className="home__robot" aria-hidden="true"><Bib mood={allDone ? 'celebrate' : 'happy'} size={76} label="Bibit" interactive /></span>
        <div className="home__hero-text">
          <h1 className="home__hi">Lanjut belajar 👋</h1>
          <p className="home__sub">
            Aku <b>Bibit</b>, teman belajarmu. Tiap topik: 3 step (Dasar → Menengah → Advance) + ujian tiap tier.
          </p>
        </div>
      </div>

      {allDone && (
        <div className="card card--done">🎉 Semua step tuntas! {CURRICULUM.length * 3} step × 10 soal kamu habiskan — kamu juara.</div>
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
            <span className="topic-card__icon">{t.icon}</span>
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
        <div className="stat"><b>{state.streak.count}</b><span>streak 🔥</span></div>
      </div>
      <a className="btn btn--ghost home__profile" href="#/profile">Profil &amp; pengaturan</a>
    </section>
  );
}
