/* CodeDuo — Topbar: brand (maskot Bib) + mute + streak. */
'use strict';

import { useStore } from '../useStore.js';
import { getState, toggleMute } from '../store.js';
import { SFX } from '../../sfx.js';
import Bib from './Bib.jsx';

export default function Topbar() {
  useStore();
  const state = getState();
  const muted = state ? state.muted : false;
  const streak = state ? state.streak.count : 0;

  const onMute = () => {
    const m = toggleMute();
    SFX.setMuted(m);
    if (m) SFX.muteOn(); else SFX.muteOff();
  };

  return (
    <header className="topbar">
      <a className="brand" href="#/">
        <span className="brand__mascot" aria-hidden="true"><Bib mood="idle" size={34} label="CodeDuo" /></span>
        <span className="brand__text">CodeDuo</span>
      </a>
      <div className="top-stats">
        <button className="mute-btn" onClick={onMute} aria-label="Suara" title="Suara">{muted ? '🔇' : '🔊'}</button>
        <span className="streak" title="Streak harian">🔥 <b>{streak}</b></span>
      </div>
    </header>
  );
}
