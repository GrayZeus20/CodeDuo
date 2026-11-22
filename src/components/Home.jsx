/* CodeDuo — Home: hero + banner streak + kartu Ingat + pencarian & filter kategori + kartu topik. */
'use strict';

import { useState, useMemo } from 'react';
import { useStore } from '../useStore.js';
import { useRealtimeStreak } from '../useRealtimeStreak.js';
import {
  getState, getLoadError, topicById, isTopicDone, isNodeDone,
  openTopic, dueReviewKeys, reviewStart,
  isFavorite, toggleFavorite, orderedTopicIds, getStreakRealtime,
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

const TOPIC_CATEGORIES = [
  { id: 'all', label: 'Semua', ids: null },
  { id: 'web', label: 'Web & Frontend', ids: ['html', 'css', 'js', 'ts', 'web', 'react', 'nextjs'] },
  { id: 'backend', label: 'Backend & API', ids: ['api', 'rest', 'php', 'laravel', 'ruby', 'rails', 'elysia', 'go', 'java', 'python'] },
  { id: 'mobile', label: 'Mobile', ids: ['flutter', 'dart', 'kotlin'] },
  { id: 'data', label: 'Data & Sistem', ids: ['ds', 'sql', 'db', 'matlab', 'c', 'cpp'] },
  { id: 'iot', label: 'Hardware / IoT', ids: ['arduino'] },
];

export default function Home() {
  useStore();
  const initialStreak = getStreakRealtime();
  const needsLiveCountdown = initialStreak.status === 'danger' || (initialStreak.freezeUsedToday && !initialStreak.todayCompleted);
  const streakInfo = useRealtimeStreak({ live: needsLiveCountdown });
  const state = getState();
  const loadError = getLoadError();
  const path = Array.isArray(state.path) ? state.path : [];
  const allDone = path.length > 0 && path.every(isTopicDone);
  const dueCount = dueReviewKeys().length;

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCat, setActiveCat] = useState('all');

  /* Favorit tampil paling atas; sisanya tetap mengikuti jalur belajar. */
  const allPathIds = orderedTopicIds().filter((id) => !!topicById(id));

  const filteredIds = useMemo(() => {
    const cat = TOPIC_CATEGORIES.find((c) => c.id === activeCat);
    const q = searchQuery.trim().toLowerCase();
    return allPathIds.filter((id) => {
      if (cat && cat.ids && !cat.ids.includes(id)) return false;
      if (!q) return true;
      const t = topicById(id);
      if (!t) return false;
      return (
        (t.name && t.name.toLowerCase().includes(q)) ||
        (t.desc && t.desc.toLowerCase().includes(q)) ||
        id.toLowerCase().includes(q)
      );
    });
  }, [allPathIds, activeCat, searchQuery]);

  const favIds = filteredIds.filter((id) => isFavorite(id));
  const restIds = filteredIds.filter((id) => !isFavorite(id));
  const isFiltering = activeCat !== 'all' || searchQuery.trim().length > 0;

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

      {streakInfo.freezeUsedToday && !streakInfo.todayCompleted ? (
        <div className="banner banner--streak-freeze" role="status">
          <span className="banner__icon" aria-hidden="true">❄️</span>
          <span className="banner__text">
            <b>Perisai Streak melindungimu kemarin!</b> Streak {streakInfo.count} harimu masih utuh. Selesaikan 1 step hari ini ({streakInfo.timeLeftFormatted} tersisa) agar terus menyala!
          </span>
        </div>
      ) : streakInfo.status === 'danger' ? (
        <div className="banner banner--streak-danger" role="alert">
          <span className="banner__icon" aria-hidden="true">🔥⚠️</span>
          <span className="banner__text">
            <b>Streak {streakInfo.count} harimu dalam bahaya!</b> Sisa waktu {streakInfo.timeLeftFormatted} sebelum tengah malam. Selesaikan 1 step kuis sekarang agar streak tidak hangus!
          </span>
        </div>
      ) : null}

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

      {/* Pencarian cepat & filter kategori topik */}
      <div className="home-filter" role="search" aria-label="Cari dan filter topik belajar">
        <div className="home-search">
          <svg className="home-search__ico" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" />
          </svg>
          <input
            type="search"
            className="home-search__input"
            placeholder="Cari topik (mis. Python, React, SQL, Arduino)…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Cari topik pemrograman"
          />
          {searchQuery && (
            <button
              type="button"
              className="home-search__clear"
              aria-label="Hapus pencarian"
              onClick={() => { SFX.back(); setSearchQuery(''); }}
            >
              ✕
            </button>
          )}
        </div>
        <div className="home-cats" role="group" aria-label="Filter kategori topik">
          {TOPIC_CATEGORIES.map((cat) => {
            const count = cat.ids ? allPathIds.filter((id) => cat.ids.includes(id)).length : allPathIds.length;
            const active = activeCat === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                className={'home-cat-btn' + (active ? ' is-active' : '')}
                aria-pressed={active}
                onClick={() => { SFX.pick(); setActiveCat(cat.id); }}
              >
                <span>{cat.label}</span>
                <span className="home-cat-btn__count">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {favIds.length > 0 && <h2 className="home__h2">★ Favorit</h2>}
      {favIds.map(renderTopic)}

      {favIds.length > 0 && restIds.length > 0 && <h2 className="home__h2">Topik lain</h2>}
      {restIds.map(renderTopic)}

      {filteredIds.length === 0 && (
        <div className="card home-empty">
          <p className="home-empty__title">
            {isFiltering ? 'Tidak ada topik yang cocok' : 'Belum ada topik'}
          </p>
          <p className="muted home-empty__desc">
            {isFiltering
              ? `Pencarian "${searchQuery.trim() || activeCat}" tidak menemukan topik.`
              : 'Coba muat ulang halaman.'}
          </p>
          {isFiltering && (
            <button
              type="button"
              className="btn btn--ghost btn--sm"
              onClick={() => { SFX.back(); setSearchQuery(''); setActiveCat('all'); }}
            >
              Reset filter
            </button>
          )}
        </div>
      )}
    </section>
  );
}
