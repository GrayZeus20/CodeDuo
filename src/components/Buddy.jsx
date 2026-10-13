/* CodeDuo — Buddy: Bibit sebagai agent hidup. Memakai paket robot-heads (renderer:
 * shell glossy 3D-proyeksi, lighting studio, LED bloom, glitch/crossfade antar state,
 * dan loop rAF sendiri: sway / kedip / hop / antena damped-spring) + timer otonom
 * (idle-life & proaktif & hint) dari store.tickBuddy.
 *
 * Kunci "hidup": SATU kepala bentuk tetap (tidak morf tiap mood). Loop rAF robot-heads
 * (sway / kedip / hop / antena) dibiarkan jalan terus; robot-heads sendiri mem-crossfade
 * antar state. Wajah otonom pun didominasi 'idle' → Bibit tenang & bernapas, bukan
 * patah-patah ganti aktivitas tiap detik.
 *
 * SERT State: companion (owner store.js) — { face, mood, ctx, sinceUser, lines }.
 * SERT Event: interval 1 dtk → tickBuddy(dt) → store memilih wajah/baris otonom.
 */
'use strict';

import { useEffect, useRef, useState } from 'react';
import { RobotHead } from 'robot-heads';
import {
  buddyState, buddyFace, buddyLine, onBuddyTap, tickBuddy, getSession, getCompanion, getState,
} from '../store.js';
import { useStore } from '../useStore.js';
import { SFX } from '../../sfx.js';

const IDLE_TICK_MS = 1000;
const HEAD_SIZE = 132;

export default function Buddy() {
  useStore();                       /* re-render tiap state store berubah */
  const state = getState();
  const buddyHidden = state ? !!state.buddyHidden : false;

  const [shouldRender, setShouldRender] = useState(!buddyHidden);
  const [isHiding, setIsHiding] = useState(false);

  /* Animasi pop up / pop out saat toggle show/hide Bibit */
  useEffect(() => {
    if (buddyHidden) {
      setIsHiding(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
        setIsHiding(false);
      }, 360);
      return () => clearTimeout(timer);
    } else {
      setShouldRender(true);
      setIsHiding(false);
    }
  }, [buddyHidden]);

  const last = useRef(Date.now());
  const session = getSession();
  const companion = getCompanion();
  const b = buddyState();
  const face = buddyFace();
  const line = buddyLine(session ? session.pos : 0);

  const [tapped, setTapped] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const prevFace = useRef(face);
  const prevText = useRef(line.text);
  const [bubbleKey, setBubbleKey] = useState(0);
  const [isBubbleVisible, setIsBubbleVisible] = useState(true);

  /* Deteksi ganti ekspresi/wajah → picu mikro-reaksi fisik antisipasi */
  useEffect(() => {
    if (prevFace.current !== face) {
      prevFace.current = face;
      setTransitioning(true);
      const timer = setTimeout(() => setTransitioning(false), 420);
      return () => clearTimeout(timer);
    }
  }, [face]);

  /* Deteksi respon baru dari Bibit:
   * Muncul seperti chat baru (bubbleKey++), lalu otomatis menghilang setelah 7 detik. */
  useEffect(() => {
    if (!line.text) {
      setIsBubbleVisible(false);
      return;
    }
    if (prevText.current !== line.text) {
      prevText.current = line.text;
    }
    setIsBubbleVisible(true);
    setBubbleKey((k) => k + 1);

    const timer = setTimeout(() => {
      setIsBubbleVisible(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, [line.text]);

  /* Timer otonom: satu interval per mount. dt dari jam nyata (tab throttle tetap akurat). */
  useEffect(() => {
    const id = setInterval(() => {
      const now = Date.now();
      const dt = Math.min(15000, Math.max(0, now - last.current));
      last.current = now;
      tickBuddy(dt);
    }, IDLE_TICK_MS);
    return () => clearInterval(id);
  }, []);

  const handleTap = (e) => {
    SFX.click();
    setTapped(true);
    setTimeout(() => setTapped(false), 550);
    onBuddyTap(e);
    setIsBubbleVisible(true);
    setBubbleKey((k) => k + 1);
  };

  /* Notif chat Bibit saat diklik langsung menghilang */
  const handleBubbleClick = (e) => {
    e.stopPropagation();
    setIsBubbleVisible(false);
  };

  if (!shouldRender) return null;

  const currentMood = companion.mood || b.mood || 'idle';
  const isSleeping = face === 'sleeping';
  const isHappy = face === 'happy' || currentMood === 'celebrate';
  const isThinking = face === 'thinking';
  const isTalking = face === 'speaking' || !!companion.line;

  const buddyClassNames = [
    'buddy',
    isHiding ? 'buddy--hiding' : 'buddy--showing',
    `buddy--state-${face}`,
    `buddy--mood-${currentMood}`,
    isTalking ? 'buddy--talking' : '',
    isSleeping ? 'buddy--sleeping' : '',
    isHappy ? 'buddy--happy' : '',
    isThinking ? 'buddy--thinking' : '',
    transitioning ? 'buddy--transitioning' : '',
    tapped ? 'buddy--tapped' : '',
  ].filter(Boolean).join(' ');

  return (
    <aside className={buddyClassNames} aria-live="polite" aria-label={'Bibit, teman belajar — ' + currentMood}>
      {/* Balon ucapan beranimasi pop baru; klik untuk menutup; hilang otomatis 7 detik */}
      {isBubbleVisible && line.text && (
        <div
          key={bubbleKey}
          className="buddy__bubble buddy__bubble--pop"
          role="status"
          onMouseDown={(e) => e.preventDefault()}
          onClick={handleBubbleClick}
          title="Klik untuk menutup pesan"
          aria-label={`${line.text} (Klik untuk menutup)`}
        >
          <span className="buddy__bubble-text">{line.text}</span>
          <span className="buddy__bubble-tail" aria-hidden="true" />
        </div>
      )}

      {/* Partikel tidur melayang saat Bibit sedang tertidur */}
      {isSleeping && (
        <div className="buddy__zzz-wrap" aria-hidden="true">
          <span className="buddy__zzz buddy__zzz--1">Z</span>
          <span className="buddy__zzz buddy__zzz--2">z</span>
          <span className="buddy__zzz buddy__zzz--3">z</span>
        </div>
      )}

      {/* Panggung fisik robot tanpa bayangan lantai mengambang */}
      <div className="buddy__stage">
        <button
          className="buddy__head"
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          onClick={handleTap}
          aria-label="Sentuh Bibit"
          title="Sentuh aku!"
        >
          <RobotHead
            state={face}
            size={HEAD_SIZE}
            color="#58cc02"
            trimColor="#46a302"
            screenColor="#0f1a10"
            shape="rectangle"
            speed={1}
            interactive
            antenna
            floorShadow={false}
            seed={0.3}
          />
        </button>
      </div>
    </aside>
  );
}
