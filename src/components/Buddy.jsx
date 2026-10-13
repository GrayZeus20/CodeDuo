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

import { useEffect, useRef } from 'react';
import { RobotHead } from 'robot-heads';
import {
  buddyState, buddyFace, buddyLine, onBuddyTap, tickBuddy, getSession, getCompanion,
} from '../store.js';
import { useStore } from '../useStore.js';

const IDLE_TICK_MS = 1000;
const HEAD_SIZE = 132;

export default function Buddy() {
  useStore();                       /* re-render tiap state store berubah */
  const last = useRef(Date.now());
  const session = getSession();
  const companion = getCompanion();
  const b = buddyState();
  const face = buddyFace();
  const line = buddyLine(session ? session.pos : 0);

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

  return (
    <aside className="buddy" aria-live="polite" aria-label={'Bibit, teman belajar — ' + (companion.mood || b.mood)}>
      <div className="buddy__bubble" role="status">{line.text}</div>
      <button className="buddy__head" type="button" onClick={onBuddyTap} aria-label="Sentuh Bibit" title="Sentuh aku">
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
          floorShadow
          seed={0.3}
        />
      </button>
    </aside>
  );
}
