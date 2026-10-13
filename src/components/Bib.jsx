/* CodeDuo — Bib: maskot SVG hidup (logo brand + hero + fallback).
 * Dimensi viewBox sama (0 0 120 120). */
'use strict';

import { useState } from 'react';
import { SFX } from '../../sfx.js';

const INK = '#3c3c3c';
const SHELL = '#58cc02';
const SHELL_DARK = '#46a302';
const FACE = '#f7f9fb';
const GOLD = '#ffc800';
const BLUSH = '#ff9a9a';
const STAR = 'M0 -7 L1.8 -1.8 L7 0 L1.8 1.8 L0 7 L-1.8 1.8 L-7 0 L-1.8 -1.8 Z';

function Eyes({ mood }) {
  switch (mood) {
    case 'happy':
    case 'celebrate':
      return (
        <g className="robot__eyes-group robot__eyes--happy">
          <path className="robot__eye" d="M42 60 q6 -9 12 0" fill="none" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
          <path className="robot__eye" d="M66 60 q6 -9 12 0" fill="none" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
        </g>
      );
    case 'thinking':
      return (
        <g className="robot__eyes-group robot__eyes--thinking">
          <circle className="robot__eye" cx="48" cy="58" r="5.5" fill={INK} />
          <circle className="robot__eye" cx="72" cy="57" r="4" fill={INK} />
          <circle className="robot__glint" cx="46.5" cy="56" r="1.6" fill={FACE} />
        </g>
      );
    case 'sad':
      return (
        <g className="robot__eyes-group robot__eyes--sad">
          <circle className="robot__eye" cx="48" cy="59" r="5.5" fill={INK} />
          <circle className="robot__eye" cx="72" cy="59" r="5.5" fill={INK} />
          <path className="robot__brow" d="M42 48 l12 4" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
          <path className="robot__brow" d="M78 48 l-12 4" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        </g>
      );
    case 'excited':
      return (
        <g className="robot__eyes-group robot__eyes--excited">
          <circle className="robot__eye" cx="48" cy="58" r="7" fill={INK} />
          <circle className="robot__eye" cx="72" cy="58" r="7" fill={INK} />
          <circle className="robot__glint" cx="46" cy="55.5" r="2" fill={FACE} />
          <circle className="robot__glint" cx="70" cy="55.5" r="2" fill={FACE} />
        </g>
      );
    default:
      return (
        <g className="robot__eyes-group robot__eyes--idle">
          <circle className="robot__eye" cx="48" cy="58" r="5.5" fill={INK} />
          <circle className="robot__eye" cx="72" cy="58" r="5.5" fill={INK} />
          <circle className="robot__glint" cx="46.5" cy="56.5" r="1.6" fill={FACE} />
          <circle className="robot__glint" cx="70.5" cy="56.5" r="1.6" fill={FACE} />
        </g>
      );
  }
}

function Mouth({ mood }) {
  if (mood === 'happy' || mood === 'celebrate') {
    return <path className="robot__mouth robot__mouth--happy" d="M50 70 q10 9 20 0" fill="none" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />;
  }
  if (mood === 'thinking') return <path className="robot__mouth robot__mouth--thinking" d="M55 73 h10" fill="none" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />;
  if (mood === 'sad') return <path className="robot__mouth robot__mouth--sad" d="M50 75 q10 -9 20 0" fill="none" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />;
  if (mood === 'excited') return <ellipse className="robot__mouth robot__mouth--excited" cx="60" cy="72" rx="6" ry="5.5" fill={INK} />;
  return <path className="robot__mouth robot__mouth--idle" d="M52 72 h16" fill="none" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />;
}

export default function Bib({ mood = 'idle', size = 34, label = 'Bibit, teman belajar', interactive = false, onMascotClick }) {
  const m = mood || 'idle';
  const blush = m === 'happy' || m === 'celebrate';
  const [bounced, setBounced] = useState(false);

  const handleClick = (e) => {
    if (interactive || onMascotClick) {
      SFX.click();
      setBounced(true);
      setTimeout(() => setBounced(false), 550);
      if (onMascotClick) onMascotClick(e);
    }
  };

  return (
    <svg
      className={'robot robot--' + m + (bounced ? ' robot--bounced' : '')}
      data-mood={m}
      viewBox="0 0 120 120"
      width={size}
      height={size}
      role="img"
      aria-label={label}
      xmlns="http://www.w3.org/2000/svg"
      onClick={interactive || onMascotClick ? handleClick : undefined}
      style={{ cursor: interactive || onMascotClick ? 'pointer' : undefined }}
    >
      <defs>
        <radialGradient id="bibHalo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={GOLD} stopOpacity="0.85" />
          <stop offset="60%" stopColor={GOLD} stopOpacity="0.3" />
          <stop offset="100%" stopColor={GOLD} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Tubuh utuh beranimasi melayang & bernapas */}
      <g className="robot__body">
        {/* Antena berpegas */}
        <g className="robot__antenna">
          <line x1="60" y1="30" x2="60" y2="16" stroke={SHELL_DARK} strokeWidth="4" strokeLinecap="round" />
          <circle className="robot__bulb-halo" cx="60" cy="13" r="10" fill="url(#bibHalo)" />
          <circle className="robot__bulb" cx="60" cy="13" r="5.5" fill={GOLD} stroke={SHELL_DARK} strokeWidth="2.5" />
        </g>

        {/* Cangkang kepala */}
        <rect className="robot__shell" x="22" y="28" width="76" height="68" rx="22" fill={SHELL} stroke={SHELL_DARK} strokeWidth="3" />

        {/* Layar kaca wajah */}
        <rect className="robot__face" x="33" y="40" width="54" height="44" rx="15" fill={FACE} />
        {/* Kilau pantulan kaca lembut */}
        <path className="robot__glare" d="M37 44 Q60 41 81 44 A13 13 0 0 1 83 48 Q60 45 37 48 Z" fill="#ffffff" opacity="0.32" />

        {/* Ekspresi wajah */}
        <g className="robot__eyes"><Eyes mood={m} /></g>
        <g className="robot__mouth-wrap"><Mouth mood={m} /></g>

        {/* Pipi merona */}
        {blush && (
          <g className="robot__blush-wrap">
            <circle className="robot__blush" cx="36" cy="68" r="5" fill={BLUSH} opacity="0.65" />
            <circle className="robot__blush" cx="84" cy="68" r="5" fill={BLUSH} opacity="0.65" />
          </g>
        )}
      </g>
    </svg>
  );
}

export { STAR };
