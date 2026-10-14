/* CodeDuo — Topbar: brand (maskot Bib) + mute + streak. */
'use strict';

import { useStore } from '../useStore.js';
import { getState, toggleMute, toggleBuddy } from '../store.js';
import { SFX } from '../../sfx.js';
import { pop } from '../lib/motion.js';
import Bib from './Bib.jsx';

const GOLD = '#ffc800';
const SHELL = '#58cc02';
const SHELL_DARK = '#46a302';
const FACE = '#f7f9fb';
const INK = '#3c3c3c';
const BLUSH = '#ff9a9a';

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
    <header className="topbar-wrapper">
      <div className="topbar">
        <a className="brand" href="#/">
          <span className="brand__mascot" aria-hidden="true"><Bib mood="happy" size={34} label="CodeDuo" /></span>
          <span className="brand__text">CodeDuo</span>
        </a>
        <div className="top-stats">
          <button
            className={'buddy-toggle' + (buddyHidden ? ' buddy-toggle--off' : '')}
            onMouseDown={(e) => e.preventDefault()}
            onClick={onToggleBuddy}
            aria-label={buddyHidden ? 'Tampilkan Bibit' : 'Sembunyikan Bibit'}
            title={buddyHidden ? 'Tampilkan Bibit' : 'Sembunyikan Bibit'}
          >
            <svg className="buddy-toggle__icon" viewBox="0 0 120 120" aria-hidden="true">
              <defs>
                <radialGradient id="btH" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={GOLD} stopOpacity=".85"/>
                  <stop offset="60%" stopColor={GOLD} stopOpacity=".3"/>
                  <stop offset="100%" stopColor={GOLD} stopOpacity="0"/>
                </radialGradient>
              </defs>
              <g>
                <line x1="60" y1="30" x2="60" y2="16" stroke={SHELL_DARK} strokeWidth="4" strokeLinecap="round"/>
                <circle cx="60" cy="13" r="10" fill="url(#btH)"/>
                <circle cx="60" cy="13" r="5.5" fill={GOLD} stroke={SHELL_DARK} strokeWidth="2.5"/>
                <rect x="22" y="28" width="76" height="68" rx="22" fill={SHELL} stroke={SHELL_DARK} strokeWidth="3"/>
                <rect x="33" y="40" width="54" height="44" rx="15" fill={FACE}/>
                {buddyHidden ? (
                  <g>
                    <circle cx="48" cy="58" r="5.5" fill={INK}/>
                    <circle cx="72" cy="58" r="5.5" fill={INK}/>
                    <path d="M50 75 q10 -9 20 0" fill="none" stroke={INK} strokeWidth="3.5" strokeLinecap="round"/>
                  </g>
                ) : (
                  <g>
                    <path d="M42 60 q6 -9 12 0" fill="none" stroke={INK} strokeWidth="3.5" strokeLinecap="round"/>
                    <path d="M66 60 q6 -9 12 0" fill="none" stroke={INK} strokeWidth="3.5" strokeLinecap="round"/>
                    <path d="M50 70 q10 9 20 0" fill="none" stroke={INK} strokeWidth="3.5" strokeLinecap="round"/>
                    <circle cx="36" cy="68" r="5" fill={BLUSH} opacity=".65"/>
                    <circle cx="84" cy="68" r="5" fill={BLUSH} opacity=".65"/>
                  </g>
                )}
              </g>
            </svg>
          </button>
          <button className="mute-btn" onMouseDown={(e) => e.preventDefault()} onClick={onMute} aria-label="Suara" title="Suara">{muted ? '🔇' : '🔊'}</button>
          <span className="streak" title="Streak harian">🔥 <b>{streak}</b></span>
        </div>
      </div>
    </header>
  );
}
