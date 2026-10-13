/* CodeDuo — Topbar: brand (maskot Bib) + mute + streak. */
'use strict';

import { useStore } from '../useStore.js';
import { getState, toggleMute, toggleBuddy } from '../store.js';
import { SFX } from '../../sfx.js';
import { pop } from '../lib/motion.js';
import Bib from './Bib.jsx';

export default function Topbar() {
  useStore();
  const state = getState();
  const muted = state ? state.muted : false;
  const streak = state ? state.streak.count : 0;
  const buddyHidden = state ? !!state.buddyHidden : false;

  const onMute = (e) => {
    pop(e.currentTarget);
    const m = toggleMute();
    SFX.setMuted(m);
    if (m) SFX.muteOn(); else SFX.muteOff();
  };

  const onToggleBuddy = (e) => {
    pop(e.currentTarget);
    SFX.click();
    toggleBuddy();
  };

  return (
    <header className="topbar">
      <a className="brand" href="#/">
        <span className="brand__mascot" aria-hidden="true"><Bib mood="idle" size={34} label="CodeDuo" /></span>
        <span className="brand__text">CodeDuo</span>
      </a>
      <div className="top-stats">
        <button
          className={'robot-btn' + (buddyHidden ? ' robot-btn--off' : '')}
          onClick={onToggleBuddy}
          aria-label={buddyHidden ? 'Tampilkan Bibit' : 'Sembunyikan Bibit'}
          title={buddyHidden ? 'Tampilkan Bibit' : 'Sembunyikan Bibit'}
        >
          🤖
        </button>
        <button className="mute-btn" onClick={onMute} aria-label="Suara" title="Suara">{muted ? '🔇' : '🔊'}</button>
        <span className="streak" title="Streak harian">🔥 <b>{streak}</b></span>
      </div>
    </header>
  );
}
