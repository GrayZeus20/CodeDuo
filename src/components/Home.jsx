/* CodeDuo — Home: hero + kartu Ingat + kartu topik. */
'use strict';

import { useStore } from '../useStore.js';
import {
  getState, getLoadError, topicById, isTopicDone, isNodeDone,
  openTopic, dueReviewKeys, reviewStart,
  isFavorite, toggleFavorite, orderedTopicIds,
} from '../store.js';
import { CURRICULUM, stepsForTopic } from '../../content.js';
import Bib from './Bib.jsx';
import TopicIcon from './TopicIcon.jsx';
import { pop } from '../lib/motion.js';
import { SFX } from '../../sfx.js';

const TOTAL_STEP_COUNT = CURRICULUM.reduce(
  (total, topic) => total + stepsForTopic(topic).filter((node) => node.kind === 'step').length,
  0,
);

export default function Home() {
  useStore();
  const state = getState();
  const loadError = getLoadError();
  const allDone = state.path.every(isTopicDone);
  const dueCount = dueReviewKeys().length;

  /* Favorit tampil paling atas; sisanya tetap mengikuti jalur belajar. */
  const pathIds = orderedTopicIds().filter((id) => !!topicById(id));
  const favIds = pathIds.filter((id) => isFavorite(id));
  const restIds = pathIds.filter((id) => !isFavorite(id));

  const renderTopic = (id) => {
    const t = topicById(id);
    if (!t) return null;
    const done = isTopicDone(id);
    const nodes = stepsForTopic(t);
    const stepNodes = nodes.filter((n) => n.kind === 'step');
    const doneSteps = stepNodes.filter((n) => isNodeDone(id, n.id)).length;
    const fav = isFavorite(id);
    return (
      <div className={'topic-row' + (fav ? ' topic-row--fav' : '')} key={id}>
        <button
          className={'topic-card topic-card--active' + (done ? ' topic-card--done' : '')}
          onClick={(e) => { pop(e.currentTarget); SFX.open(); openTopic(t.id); }}
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
        <button
          type="button"
          className={'topic-fav' + (fav ? ' is-on' : '')}
          aria-pressed={fav}
          aria-label={fav ? 'Hapus ' + t.name + ' dari favorit' : 'Favoritkan ' + t.name}
          title={fav ? 'Hapus dari favorit' : 'Tandai sebagai favorit'}
          onClick={(e) => {
            e.stopPropagation();
            pop(e.currentTarget);
            if (toggleFavorite(t.id)) SFX.pick();
            else SFX.back();
          }}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path
              d="M12 3.2l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.6l6-.9z"
              fill={fav ? 'currentColor' : 'none'}
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    );
  };

  return (
    <section className="screen home">
      {loadError && <div className="banner banner--warn">{loadError}</div>}

      <div className="home__hero">
        <span className="home__robot" aria-hidden="true"><Bib mood={allDone ? 'celebrate' : 'happy'} label="Bibit" interactive /></span>
        <div className="home__hero-text">
          <h1 className="home__hi">Lanjut belajar 👋</h1>
          <p className="home__sub">
            Aku <b>Bibit</b>, teman belajarmu. Setiap topik punya step bertahap sesuai materi, dari Dasar sampai Advance, plus ujian tiap tier.
          </p>
        </div>
      </div>

      {allDone && (
        <div className="card card--done">🎉 Semua step tuntas! {TOTAL_STEP_COUNT} step koding kamu habiskan — kamu juara.</div>
      )}

      {/* Kartu "Ingat" — pintu ulangan berjarak (SRS): soal yang pernah dipelajari & jatuh tempo */}
      {dueCount > 0 && (
        <button className="card recall card--due" onClick={(e) => { pop(e.currentTarget); SFX.open(); reviewStart(); }}>
          <span aria-hidden="true" style={{ fontSize: '1.6rem' }}>🧠</span>
          <span className="recall__text">
            <span className="topic-card__tier">Ulangan ingatan</span>
            <b>{dueCount} soal siap diulang</b>
            <span className="topic-card__desc">Retensi makin kuat kalau diulang tepat waktu.</span>
          </span>
          <span className="btn btn--primary btn--sm recall__btn">Ulangi</span>
        </button>
      )}

      {favIds.length > 0 && <h2 className="home__h2">★ Favorit</h2>}
      {favIds.map(renderTopic)}

      {favIds.length > 0 && restIds.length > 0 && <h2 className="home__h2">Topik lain</h2>}
      {restIds.map(renderTopic)}

      {pathIds.length === 0 && (
        <p className="muted">Belum ada topik. Coba muat ulang halaman.</p>
      )}

    </section>
  );
}
