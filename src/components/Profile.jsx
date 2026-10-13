/* CodeDuo — Profil: stat, jalur personal, jadwal ingatan (SRS), data & reset. */
'use strict';

import { useStore } from '../useStore.js';
import {
  getState, topicById, isTopicDone,
  dumpState, stateReset,
} from '../store.js';

export default function Profile() {
  useStore();
  const state = getState();
  const topicsDone = state.path.filter((id) => isTopicDone(id)).length;

  const onReset = () => {
    if (window.confirm('Reset semua progress, streak, dan model ekspresi Bibit? Tindakan ini tidak bisa dibatalkan.')) {
      stateReset();
    }
  };

  return (
    <section className="screen profile">
      <a className="back" href="#/">← Kembali</a>
      <h1>Profil</h1>

      <div className="stat-row">
        <div className="stat"><b>{state.streak.count}</b><span>streak 🔥</span></div>
        <div className="stat"><b>{state.stats.lessonsDone}</b><span>sesi</span></div>
        <div className="stat"><b>{topicsDone}/{state.path.length}</b><span>topik</span></div>
      </div>

      <div className="card">
        <h3>Jalur belajar kurikulum</h3>
        <ol className="path-list">
          {state.path.map((id, i) => {
            const t = topicById(id);
            if (!t) return null; /* id lama yang sudah dihapus dari kurikulum → jangan crash */
            const done = isTopicDone(id);
            const isNext = !done && state.path.slice(0, i).every((x) => isTopicDone(x));
            return (
              <li key={id} className={done ? 'is-done' : isNext ? 'is-cur' : ''}>
                {i + 1}. {t.icon} {t.name}{done ? ' ✓' : isNext ? ' ← lanjut di sini' : ''}
              </li>
            );
          })}
        </ol>
      </div>

      <div className="card">
        <h3>Data</h3>
        <p className="muted">Progress disimpan di localStorage browser ini — tidak ada akun, tidak ada server.</p>
        <button className="btn btn--ghost" onClick={(e) => { dumpState(); e.currentTarget.textContent = 'State dicetak ke console ✓'; }}>Lihat state (console)</button>{' '}
        <button className="btn btn--danger" onClick={onReset}>Reset progress</button>
      </div>
    </section>
  );
}
