/* CodeDuo — Buddy: Bibit sebagai agent hidup. Memakai paket robot-heads (renderer:
 * shell glossy 3D-proyeksi, lighting studio, LED bloom, glitch/crossfade antar state,
 * dan loop rAF sendiri: sway / kedip / hop / antena damped-spring) + timer otonom
 * (idle-life & proaktif & hint) dari store.tickBuddy.
 *
 * Mendukung interaksi seret (drag & drop) ke mana saja di layar dengan reaksi melayang
 * dinamis dan pendaratan membal (squash & stretch), elusan hover bolak-balik (purr),
 * serta proteksi anti-spam klik (pusing/dizzy).
 */
'use strict';

import { useEffect, useRef, useState, useCallback } from 'react';
import { RobotHead } from 'robot-heads';
import {
  buddyState, buddyFace, buddyLine, onBuddyTap, onBuddyPet, onBuddySpam, onBuddyRecover,
  onBuddyDrag, onBuddyLand, tickBuddy, getSession, getCompanion, getState,
} from '../store.js';
import { useStore } from '../useStore.js';
import { SFX } from '../../sfx.js';

const IDLE_TICK_MS = 1000;
const BUDDY_HEAD_SIZES = { small: 96, medium: 124, large: 148 };

export default function Buddy() {
  useStore();                       /* re-render tiap state store berubah */
  const state = getState();
  const buddyHidden = state ? !!state.buddyHidden : false;

  const buddyRef = useRef(null);
  const headSize = BUDDY_HEAD_SIZES[state && state.buddySize] || BUDDY_HEAD_SIZES.medium;

  /* Posisi custom hasil seretan (drag) yang tersimpan di localStorage */
  const [pos, setPos] = useState(() => {
    if (typeof window === 'undefined') return null;
    try {
      const saved = localStorage.getItem('codeduo_buddy_drag_pos');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (typeof parsed.x === 'number' && typeof parsed.y === 'number') {
          return parsed;
        }
      }
    } catch {}
    return null;
  });

  /* State interaksi Drag & Drop */
  const [isDragging, setIsDragging] = useState(false);
  const [isLanded, setIsLanded] = useState(false);
  const [dragTilt, setDragTilt] = useState(0);
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({
    startX: 0,
    startY: 0,
    origX: 0,
    origY: 0,
    isMoved: false,
  });
  const hasJustDraggedRef = useRef(false);
  const landTimerRef = useRef(null);

  /* Re-clamp posisi saat ukuran jendela browser berubah */
  useEffect(() => {
    const onResize = () => {
      const buddyRect = buddyRef.current && buddyRef.current.getBoundingClientRect();
      const headW = buddyRect ? buddyRect.width : headSize + 8;
      const headH = buddyRect ? buddyRect.height : headSize + 32;
      setPos((prev) => {
        if (!prev) return null;
        const minX = 0; /* Mentok di batas kiri layar */
        const maxX = Math.max(0, window.innerWidth - headW);
        const minY = 0; /* Mentok di batas atas layar */
        const maxY = Math.max(0, window.innerHeight - headH);
        const clampedX = Math.max(minX, Math.min(maxX, prev.x));
        const clampedY = Math.max(minY, Math.min(maxY, prev.y));
        if (clampedX !== prev.x || clampedY !== prev.y) {
          const next = { x: clampedX, y: clampedY };
          try {
            localStorage.setItem('codeduo_buddy_drag_pos', JSON.stringify(next));
          } catch {}
          return next;
        }
        return prev;
      });
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [headSize]);

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

  /* State dielus-elus & pusing karena spam klik */
  const [isPetted, setIsPetted] = useState(false);
  const [isDizzy, setIsDizzy] = useState(false);
  const isDizzyRef = useRef(false);
  const isPettedRef = useRef(false);
  const clickTimestamps = useRef([]);
  const dizzyTimerRef = useRef(null);
  const strokeStateRef = useRef({
    lastX: 0,
    lastY: 0,
    lastDir: 0,
    currentStrokeDist: 0,
    reversalTimes: [],
    totalDist: 0,
    lastMoveTime: 0,
  });
  const petFadeTimerRef = useRef(null);
  const lastPetTimeRef = useRef(0);

  /* Pemulihan dari pusing */
  const recoverFromDizzy = useCallback(() => {
    isDizzyRef.current = false;
    setIsDizzy(false);
    onBuddyRecover();
    setIsBubbleVisible(true);
    setBubbleKey((k) => k + 1);
  }, []);

  /* Cleanup semua timer saat unmount */
  useEffect(() => {
    return () => {
      clearTimeout(dizzyTimerRef.current);
      clearTimeout(petFadeTimerRef.current);
      clearTimeout(landTimerRef.current);
    };
  }, []);

  /* Deteksi ganti ekspresi/wajah → picu mikro-reaksi fisik antisipasi */
  useEffect(() => {
    if (prevFace.current !== face) {
      prevFace.current = face;
      if (face === 'sleeping') SFX.sleep();
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

  /* Pemicu Elusan (Hanya aktif saat dielus mondar-mandir / bolak-balik) */
  const triggerPet = useCallback(() => {
    if (isDizzyRef.current || isDraggingRef.current || dragStartRef.current.isMoved) return;
    const now = Date.now();
    clearTimeout(petFadeTimerRef.current);
    isPettedRef.current = true;
    setIsPetted(true);

    // Suara & dialog dipicu secara harmonis (dibatasi jeda min 1.8 detik antar celoteh)
    if (now - lastPetTimeRef.current >= 1800) {
      lastPetTimeRef.current = now;
      if (buddyFace() === 'sleeping') SFX.wake();
      else SFX.pet();
      onBuddyPet();
      setIsBubbleVisible(true);
      setBubbleKey((k) => k + 1);
    }

    // Jika gerakan mengelus terhenti selama 1.4 dtk, kembali rileks ke idle
    petFadeTimerRef.current = setTimeout(() => {
      isPettedRef.current = false;
      setIsPetted(false);
    }, 1400);
  }, []);

  /* Masuk area kepala: inisialisasi titik awal */
  const handlePointerEnter = (e) => {
    if (isDizzyRef.current || isDraggingRef.current || dragStartRef.current.isMoved) return;
    strokeStateRef.current = {
      lastX: e.clientX,
      lastY: e.clientY,
      lastDir: 0,
      currentStrokeDist: 0,
      reversalTimes: [],
      totalDist: 0,
      lastMoveTime: Date.now(),
    };
  };

  /* Gerakan mengelus bolak-balik (mondar-mandir) */
  const handlePointerMove = (e) => {
    if (isDizzyRef.current || isDraggingRef.current || dragStartRef.current.isMoved) return;
    const now = Date.now();
    const st = strokeStateRef.current;

    // Jika jeda usapan terlalu lama (> 650ms), reset siklus elusan
    if (now - st.lastMoveTime > 650) {
      st.currentStrokeDist = 0;
      st.reversalTimes = [];
      st.totalDist = 0;
      st.lastDir = 0;
    }
    st.lastMoveTime = now;

    const dx = e.clientX - st.lastX;
    const dy = e.clientY - st.lastY;
    st.lastX = e.clientX;
    st.lastY = e.clientY;

    const moveDist = Math.hypot(dx, dy);
    if (moveDist < 2) return; /* abaikan tremor sangat kecil */

    st.totalDist += moveDist;
    st.currentStrokeDist += moveDist;

    // Deteksi arah dominan elusan (horizontal atau vertikal)
    const primaryDelta = Math.abs(dx) >= Math.abs(dy) ? dx : dy;
    const dirThreshold = 6;

    if (Math.abs(primaryDelta) > dirThreshold) {
      const currentDir = primaryDelta > 0 ? 1 : -1;
      // Terjadi pembalikan arah usapan (mondar-mandir)
      if (st.lastDir !== 0 && currentDir !== st.lastDir) {
        if (st.currentStrokeDist >= 18) {
          st.reversalTimes.push(now);
          st.reversalTimes = st.reversalTimes.filter((t) => now - t < 1400);
        }
        st.currentStrokeDist = 0;
      }
      st.lastDir = currentDir;
    }

    // Syarat sah "dielus": minimal 2x bolak-balik & total kayuhan >= 50px
    if (st.reversalTimes.length >= 2 && st.totalDist >= 50) {
      triggerPet();
      st.reversalTimes.shift();
      st.totalDist = 25;
    }
  };

  /* Kursor meninggalkan kepala Bibit */
  const handlePointerLeave = () => {
    strokeStateRef.current = {
      lastX: 0,
      lastY: 0,
      lastDir: 0,
      currentStrokeDist: 0,
      reversalTimes: [],
      totalDist: 0,
      lastMoveTime: 0,
    };
    clearTimeout(petFadeTimerRef.current);
    petFadeTimerRef.current = setTimeout(() => {
      isPettedRef.current = false;
      setIsPetted(false);
    }, 1400);
  };

  /* Handler Drag & Drop: Angkat, geser bebas dengan tilt dinamis, lalu mendarat */
  const handlePointerDown = (e) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    if (isDizzyRef.current) return;

    const buddyEl = buddyRef.current;
    if (!buddyEl) return;
    const rect = buddyEl.getBoundingClientRect();

    dragStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      origX: rect.left,
      origY: rect.top,
      width: rect.width,
      height: rect.height,
      isMoved: false,
    };

    const handlePointerMoveGlobal = (moveEv) => {
      const st = dragStartRef.current;
      const dx = moveEv.clientX - st.startX;
      const dy = moveEv.clientY - st.startY;
      const dist = Math.hypot(dx, dy);

      if (!st.isMoved) {
        if (dist > 6) {
          st.isMoved = true;
          isDraggingRef.current = true;
          setIsDragging(true);
          isPettedRef.current = false;
          setIsPetted(false);
          clearTimeout(petFadeTimerRef.current);

          // Reaksi suara & celoteh saat diangkat
          SFX.lift();
          onBuddyDrag();
          setIsBubbleVisible(true);
          setBubbleKey((k) => k + 1);
        }
      }

      if (st.isMoved) {
        moveEv.preventDefault();
        const headW = st.width;
        const headH = st.height;
        const minX = 0; /* Mentok persis di kiri (0px) */
        const maxX = Math.max(0, window.innerWidth - headW);
        const minY = 0; /* Mentok persis di atas (0px) */
        const maxY = Math.max(0, window.innerHeight - headH);

        const targetX = Math.max(minX, Math.min(maxX, st.origX + dx));
        const targetY = Math.max(minY, Math.min(maxY, st.origY + dy));

        // Kemiringan dinamis (tilt) mengikuti kelincahan geseran
        const tilt = Math.max(-14, Math.min(14, (moveEv.movementX || dx * 0.15) * 1.6));
        setDragTilt(tilt);

        setPos({ x: targetX, y: targetY });
      }
    };

    const handlePointerUpGlobal = () => {
      window.removeEventListener('pointermove', handlePointerMoveGlobal);
      window.removeEventListener('pointerup', handlePointerUpGlobal);
      window.removeEventListener('pointercancel', handlePointerUpGlobal);

      const st = dragStartRef.current;
      if (st.isMoved) {
        hasJustDraggedRef.current = true;
        setTimeout(() => {
          hasJustDraggedRef.current = false;
        }, 220);

        setIsDragging(false);
        isDraggingRef.current = false;
        setDragTilt(0);

        // Simpan posisi terakhir ke localStorage
        setPos((current) => {
          if (current) {
            try {
              localStorage.setItem('codeduo_buddy_drag_pos', JSON.stringify(current));
            } catch {}
          }
          return current;
        });

        // Reaksi pendaratan (landing bounce + sound + face + dialog)
        SFX.land();
        onBuddyLand();
        setIsLanded(true);
        setIsBubbleVisible(true);
        setBubbleKey((k) => k + 1);

        clearTimeout(landTimerRef.current);
        landTimerRef.current = setTimeout(() => {
          setIsLanded(false);
        }, 620);
      }
      st.isMoved = false;
    };

    window.addEventListener('pointermove', handlePointerMoveGlobal, { passive: false });
    window.addEventListener('pointerup', handlePointerUpGlobal);
    window.addEventListener('pointercancel', handlePointerUpGlobal);
  };

  /* Klik & Deteksi Spam Klik */
  const handleTap = (e) => {
    if (hasJustDraggedRef.current) return;
    const now = Date.now();

    // Jika sedang pusing dan masih diklik terus
    if (isDizzyRef.current) {
      SFX.dizzy();
      onBuddySpam();
      clearTimeout(dizzyTimerRef.current);
      dizzyTimerRef.current = setTimeout(recoverFromDizzy, 3000);
      setIsBubbleVisible(true);
      setBubbleKey((k) => k + 1);
      return;
    }

    // Hitung frekuensi klik dalam jendela 1.5 detik
    const recent = clickTimestamps.current.filter((t) => now - t < 1500);
    recent.push(now);
    clickTimestamps.current = recent;

    // Spam terdeteksi jika klik >= 4 kali dalam 1.5 detik
    if (recent.length >= 4) {
      isDizzyRef.current = true;
      setIsDizzy(true);
      isPettedRef.current = false;
      setIsPetted(false);
      clearTimeout(petFadeTimerRef.current);

      SFX.angry();
      onBuddySpam();
      setIsBubbleVisible(true);
      setBubbleKey((k) => k + 1);

      clearTimeout(dizzyTimerRef.current);
      dizzyTimerRef.current = setTimeout(recoverFromDizzy, 3200);
      return;
    }

    // Klik normal sekali
    if (face === 'sleeping') SFX.wake();
    else SFX.happy();
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
  const activeFace = isDizzy
    ? 'error'
    : (isDragging ? 'searching' : (isPetted || isLanded ? 'happy' : face));
  const isSleeping = activeFace === 'sleeping';
  const isHappy = activeFace === 'happy' || currentMood === 'celebrate' || isPetted || isLanded;
  const isThinking = activeFace === 'thinking';
  const isTalking = activeFace === 'speaking' || !!companion.line;

  const isAlignLeft = pos !== null && typeof window !== 'undefined' && pos.x < 180;
  const isFlipTop = pos !== null && typeof window !== 'undefined' && pos.y < 85;

  const buddyClassNames = [
    'buddy',
    pos ? 'buddy--custom-pos' : '',
    isAlignLeft ? 'buddy--align-left' : '',
    isFlipTop ? 'buddy--flip-top' : '',
    isDragging ? 'buddy--dragging' : '',
    isLanded ? 'buddy--landed' : '',
    isHiding ? 'buddy--hiding' : 'buddy--showing',
    `buddy--state-${activeFace}`,
    `buddy--mood-${currentMood}`,
    isDizzy ? 'buddy--dizzy' : '',
    isPetted ? 'buddy--petted' : '',
    isTalking ? 'buddy--talking' : '',
    isSleeping ? 'buddy--sleeping' : '',
    isHappy ? 'buddy--happy' : '',
    isThinking ? 'buddy--thinking' : '',
    transitioning ? 'buddy--transitioning' : '',
    tapped ? 'buddy--tapped' : '',
  ].filter(Boolean).join(' ');

  const customStyle = pos
    ? {
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        right: 'auto',
        bottom: 'auto',
        '--drag-tilt': `${dragTilt}deg`,
      }
    : {
        '--drag-tilt': `${dragTilt}deg`,
      };

  return (
    <aside
      ref={buddyRef}
      className={buddyClassNames}
      style={{
        ...customStyle,
        width: `${headSize + 8}px`,
        height: `${headSize + 32}px`,
      }}
      aria-live="polite"
      aria-label={'Bibit, teman belajar — ' + currentMood}
    >
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

      {/* Panggung fisik robot */}
      <div className="buddy__stage">
        <button
          className="buddy__head"
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          onContextMenu={(e) => e.preventDefault()}
          onPointerDown={handlePointerDown}
          onPointerEnter={handlePointerEnter}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          onClick={handleTap}
          style={{
            WebkitTapHighlightColor: 'transparent',
            outline: 'none',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            WebkitTouchCallout: 'none',
            touchAction: 'none',
          }}
          aria-label={
            isDizzy
              ? "Bibit sedang pusing"
              : (isDragging ? "Sedang memindahkan Bibit" : (isPetted ? "Bibit sedang dielus" : "Bibit"))
          }
          title={
            isDizzy
              ? "Aduh pusinggg!"
              : (isDragging ? "Seret ke posisi mana saja!" : (isPetted ? "Hehe senang dielus-elus~" : "Seret untuk memindahkan · Elus atau sentuh aku!"))
          }
        >
          <RobotHead
            state={activeFace}
            size={headSize}
            color="#58cc02"
            trimColor="#46a302"
            screenColor="#0f1a10"
            shape="rectangle"
            speed={isDizzy ? 2.5 : (isDragging ? 1.6 : 1)}
            interactive={!isDragging}
            antenna
            floorShadow={false}
            seed={0.3}
          />
        </button>
      </div>
    </aside>
  );
}
