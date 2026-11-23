/* CodeDuo — ArduinoWorkbench: Lab Rakitan Arduino Interaktif ala Wokwi.
 * Rakit komponen (LED, Resistor, Tombol, Potensio, Buzzer), tarik kabel jumper (klik-ke-klik),
 * deteksi kesalahan listrik (korsleting, polaritas, tanpa resistor), dan jalankan sketsa C++ langsung!
 */
'use strict';

import { useState, useEffect, useMemo, useRef } from 'react';
import { runSketch } from '../lib/arduino.js';
import {
  BOARD_PINS,
  BOARD_PIN_MAP,
  WORKBENCH_COMPONENTS,
  COMP_DEF_MAP,
  WORKBENCH_SLOTS,
  WORKBENCH_CHALLENGES,
  endpointKey,
  wireColorFor,
  buildSimInputsFromCircuit,
  evaluateWorkbenchCircuit,
} from '../lib/workbenchEngine.js';
import { SFX } from '../../sfx.js';
import { celebrate } from '../lib/motion.js';
import { showToast } from '../uiFeedback.js';
import { getState } from '../store.js';

function getEndpointCoords(ep, components) {
  if (!ep) return null;
  if (ep.kind === 'board') {
    const pin = BOARD_PIN_MAP[ep.pin];
    return pin ? { x: pin.x, y: pin.y } : null;
  }
  const comp = components.find((c) => c.id === ep.compId);
  if (!comp) return null;
  const slot = WORKBENCH_SLOTS[comp.slot];
  const def = COMP_DEF_MAP[comp.type];
  if (!slot || !def) return null;
  const leg = def.legs.find((l) => l.id === ep.leg);
  if (!leg) return null;
  return { x: slot.x + leg.dx, y: slot.y + leg.dy };
}

function wirePathD(a, b) {
  const dx = Math.abs(b.x - a.x);
  const dy = Math.abs(b.y - a.y);
  const arch = Math.min(85, Math.max(26, (dx + dy) * 0.24));
  const c1x = a.x;
  const c1y = a.y < 100 ? a.y - arch * 0.5 : a.y + arch * 0.5;
  const c2x = b.x;
  const c2y = b.y + arch * 0.45;
  return `M ${a.x} ${a.y} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${b.x} ${b.y}`;
}

export default function ArduinoWorkbench() {
  const [challengeIdx, setChallengeIdx] = useState(0);
  const challenge = WORKBENCH_CHALLENGES[challengeIdx] || WORKBENCH_CHALLENGES[0];

  const [components, setComponents] = useState(() => challenge.demo.components.map((c) => ({ ...c })));
  const [wires, setWires] = useState(() => challenge.demo.wires.map((w) => ({ ...w })));
  const [code, setCode] = useState(challenge.sketch);
  const [selectedEp, setSelectedEp] = useState(null);
  const [simRunning, setSimRunning] = useState(false);
  const [simRan, setSimRan] = useState(false);
  const [blinkOn, setBlinkOn] = useState(true);
  const [interactive, setInteractive] = useState({});
  const [nextCompId, setNextCompId] = useState(10);

  const celebratedRef = useRef({});
  const buzzerOscRef = useRef(null);

  const stopBuzzerSound = () => {
    if (buzzerOscRef.current) {
      try {
        buzzerOscRef.current.osc.stop();
        buzzerOscRef.current.ctx.close();
      } catch (_) {}
      buzzerOscRef.current = null;
    }
  };

  useEffect(() => () => stopBuzzerSound(), []);

  /* Jalankan simulator Arduino setiap kali simulasi aktif & input/kode/kabel berubah */
  const simResult = useMemo(() => {
    if (!simRunning) return null;
    const inputs = buildSimInputsFromCircuit(components, wires, interactive);
    return runSketch(code, { analog: inputs.analog, buttons: inputs.buttons, loops: 2 });
  }, [simRunning, code, components, wires, interactive]);

  /* Deteksi pin yang berkedip (HIGH & LOW dalam loop) agar LED berkedip nyata di layar */
  const blinkingPins = useMemo(() => {
    const set = new Set();
    const log = simResult && simResult.ok && simResult.board && Array.isArray(simResult.board.log)
      ? simResult.board.log
      : [];
    const seenHigh = new Set();
    const seenLow = new Set();
    log.forEach((ev) => {
      if (ev && ev.op === 'digitalWrite') {
        if (ev.v === 1) seenHigh.add(String(ev.pin));
        if (ev.v === 0) seenLow.add(String(ev.pin));
      }
    });
    seenHigh.forEach((p) => { if (seenLow.has(p)) set.add(p); });
    return set;
  }, [simResult]);

  useEffect(() => {
    if (!simRunning || blinkingPins.size === 0) {
      setBlinkOn(true);
      return undefined;
    }
    const id = setInterval(() => setBlinkOn((v) => !v), 500);
    return () => clearInterval(id);
  }, [simRunning, blinkingPins]);

  /* Kumpulkan seluruh log error (kompilasi/syntax, runtime board, atau pin non-PWM/Serial) */
  const errorLogs = useMemo(() => {
    if (!simRunning || !simResult) return [];
    const logs = [];
    if (!simResult.ok && simResult.error) {
      logs.push({ source: 'Sketsa', message: simResult.error });
    }
    const bErrs = simResult.board && Array.isArray(simResult.board.errors) ? simResult.board.errors : [];
    bErrs.forEach((msg) => logs.push({ source: 'Hardware/Pin', message: msg }));
    return logs;
  }, [simRunning, simResult]);

  /* Bangun state papan efektif (termasuk animasi kedip Blink & mematikan saat error) */
  const effectiveBoard = useMemo(() => {
    if (!simRunning || !simResult || !simResult.ok || !simResult.board) return null;
    if (blinkingPins.size === 0) return simResult.board;
    const nextPins = { ...simResult.board.pins };
    blinkingPins.forEach((p) => {
      const prev = nextPins[p] || { mode: 'OUTPUT', digital: 0, pwm: 0 };
      nextPins[p] = { ...prev, digital: blinkOn ? 1 : 0 };
    });
    return { ...simResult.board, pins: nextPins };
  }, [simRunning, simResult, blinkingPins, blinkOn]);

  /* Evaluasi kelistrikan komponen & cek korsleting/resistor/polaritas */
  const evalRes = useMemo(() => {
    const raw = evaluateWorkbenchCircuit(components, wires, effectiveBoard);
    if (raw.hasShortCircuit) {
      // Matikan output saat korsleting agar realistis
      const safeStates = {};
      Object.entries(raw.componentStates).forEach(([id, st]) => {
        safeStates[id] = { ...st, lit: false, brightness: 0, active: false };
      });
      return { ...raw, componentStates: safeStates };
    }
    return raw;
  }, [components, wires, effectiveBoard]);

  /* Bunyikan buzzer nyata (lembut) saat aktif dalam simulasi */
  useEffect(() => {
    const state = getState();
    const muted = state && state.muted;
    const activeBuzzer = simRunning && !muted && !evalRes.hasShortCircuit
      ? Object.values(evalRes.componentStates).find((st) => st && st.active && st.freq > 0)
      : null;

    if (!activeBuzzer) {
      stopBuzzerSound();
      return;
    }
    if (buzzerOscRef.current) {
      try { buzzerOscRef.current.osc.frequency.value = activeBuzzer.freq; } catch (_) {}
      return;
    }
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      const ctx = new AC();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.value = activeBuzzer.freq;
      gain.gain.value = 0.035;
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      buzzerOscRef.current = { ctx, osc, gain };
    } catch (_) {}
  }, [simRunning, evalRes]);

  /* Evaluasi checklist tantangan aktif (stabil walau LED sedang berkedip Blink) */
  const checklist = useMemo(() => {
    if (!simRunning || !simResult || !simResult.ok || blinkingPins.size === 0) {
      return challenge.check(components, wires, evalRes, simRan);
    }
    const steadyPins = { ...simResult.board.pins };
    blinkingPins.forEach((p) => {
      const prev = steadyPins[p] || { mode: 'OUTPUT', digital: 1, pwm: 0 };
      steadyPins[p] = { ...prev, digital: 1 };
    });
    const steadyEval = evaluateWorkbenchCircuit(components, wires, { ...simResult.board, pins: steadyPins });
    return challenge.check(components, wires, steadyEval, simRan);
  }, [challenge, components, wires, evalRes, simRan, simRunning, simResult, blinkingPins]);

  const allChecklistDone = checklist.length > 0 && checklist.every((item) => item.ok);

  useEffect(() => {
    if (allChecklistDone && !celebratedRef.current[challenge.id]) {
      celebratedRef.current[challenge.id] = true;
      celebrate();
      SFX.complete();
      showToast(`Tantangan "${challenge.title}" tuntas!`, { type: 'success' });
    }
  }, [allChecklistDone, challenge]);

  const onSelectChallenge = (idx) => {
    SFX.pick();
    stopBuzzerSound();
    const next = WORKBENCH_CHALLENGES[idx];
    setChallengeIdx(idx);
    setCode(next.sketch);
    setComponents([]);
    setWires([]);
    setSelectedEp(null);
    setSimRunning(false);
    setSimRan(false);
    setInteractive({});
  };

  const onLoadDemo = () => {
    SFX.pick();
    stopBuzzerSound();
    setComponents(challenge.demo.components.map((c) => ({ ...c })));
    setWires(challenge.demo.wires.map((w) => ({ ...w })));
    setCode(challenge.sketch);
    setSelectedEp(null);
    setSimRunning(false);
    setSimRan(false);
    showToast('Contoh rangkaian dimuat. Klik Jalankan Simulasi untuk melihat hasilnya!', { type: 'info' });
  };

  const onResetCircuit = () => {
    SFX.back();
    stopBuzzerSound();
    setComponents([]);
    setWires([]);
    setSelectedEp(null);
    setSimRunning(false);
    setSimRan(false);
    setInteractive({});
  };

  const onAddComponent = (type) => {
    const usedSlots = new Set(components.map((c) => c.slot));
    const freeSlot = WORKBENCH_SLOTS.find((s) => !usedSlots.has(s.id));
    if (!freeSlot) {
      showToast('Semua 6 slot papan penuh. Hapus 1 komponen dulu untuk menambah yang baru.', { type: 'warn' });
      return;
    }
    SFX.pick();
    const id = 'c' + nextCompId;
    setNextCompId((n) => n + 1);
    setComponents((prev) => [...prev, { id, type, slot: freeSlot.id }]);
  };

  const onRemoveComponent = (compId) => {
    SFX.back();
    setComponents((prev) => prev.filter((c) => c.id !== compId));
    setWires((prev) => prev.filter((w) =>
      !(w.from.kind === 'comp' && w.from.compId === compId) &&
      !(w.to.kind === 'comp' && w.to.compId === compId)
    ));
    if (selectedEp && selectedEp.kind === 'comp' && selectedEp.compId === compId) {
      setSelectedEp(null);
    }
  };

  const onClickEndpoint = (ep) => {
    if (!selectedEp) {
      SFX.click();
      setSelectedEp(ep);
      return;
    }
    const kA = endpointKey(selectedEp);
    const kB = endpointKey(ep);
    if (kA === kB) {
      setSelectedEp(null);
      return;
    }
    // Cek duplikat kabel
    const exists = wires.some((w) => {
      const a = endpointKey(w.from);
      const b = endpointKey(w.to);
      return (a === kA && b === kB) || (a === kB && b === kA);
    });
    if (exists) {
      showToast('Kabel antara dua pin ini sudah terpasang.', { type: 'info', duration: 2400 });
      setSelectedEp(null);
      return;
    }
    SFX.pick();
    const newWire = { id: 'w' + Date.now() + Math.random().toString(36).slice(2, 5), from: selectedEp, to: ep };
    setWires((prev) => [...prev, newWire]);
    setSelectedEp(null);
  };

  const onRemoveWire = (wireId) => {
    SFX.back();
    setWires((prev) => prev.filter((w) => w.id !== wireId));
  };

  const onToggleSim = () => {
    if (simRunning) {
      SFX.back();
      stopBuzzerSound();
      setSimRunning(false);
    } else {
      SFX.open();
      setSimRunning(true);
      setSimRan(true);
    }
  };

  const onboardLed13 = !!(
    simRunning && !evalRes.hasShortCircuit &&
    effectiveBoard && effectiveBoard.pins && effectiveBoard.pins['13'] &&
    (effectiveBoard.pins['13'].digital === 1 || effectiveBoard.pins['13'].pwm > 0)
  );
  const litLedCount = components.filter(
    (c) => COMP_DEF_MAP[c.type]?.kind === 'led' && evalRes.componentStates[c.id]?.lit
  ).length;
  const serialLines = simResult && simResult.board && Array.isArray(simResult.board.serial)
    ? simResult.board.serial
    : [];

  return (
    <section className="screen wb">
      <header className="profile__hero">
        <a className="profile__back" href="#/topic/arduino" onClick={() => { stopBuzzerSound(); SFX.back(); }}>
          ← Kembali ke Arduino
        </a>
        <div className="profile__hero-text">
          <h1>Lab Rakitan Arduino</h1>
          <p className="muted">Pasang komponen ke papan, klik dua pin untuk menarik kabel jumper, lalu jalankan sketsa C++ secara langsung.</p>
        </div>
      </header>

      {/* Pemilih Tantangan */}
      <div className="wb-tabs" role="tablist" aria-label="Pilih tantangan rakitan Arduino">
        {WORKBENCH_CHALLENGES.map((ch, idx) => (
          <button
            key={ch.id}
            type="button"
            role="tab"
            aria-selected={idx === challengeIdx}
            className={'home-cat-btn' + (idx === challengeIdx ? ' is-active' : '')}
            onClick={() => onSelectChallenge(idx)}
          >
            {ch.title}
          </button>
        ))}
      </div>

      {/* Deskripsi & Checklist Tantangan */}
      <div className="card wb-challenge">
        <div className="wb-challenge__head">
          <div>
            <h2 className="wb-challenge__title">{challenge.title}</h2>
            <p className="muted wb-challenge__desc">{challenge.desc}</p>
          </div>
          <div className="wb-challenge__actions">
            {challenge.demo.components.length > 0 && (
              <button type="button" className="btn btn--ghost btn--sm" onClick={onLoadDemo}>
                ⚡ Muat Contoh
              </button>
            )}
            <button type="button" className="btn btn--ghost btn--sm" onClick={onResetCircuit}>
              ↺ Reset Papan
            </button>
          </div>
        </div>
        {checklist.length > 0 && (
          <ul className="wb-checklist">
            {checklist.map((item, i) => (
              <li key={i} className={item.ok ? 'is-ok' : ''}>
                <span aria-hidden="true">{item.ok ? '✓' : '○'}</span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Peringatan Kelistrikan Real-time */}
      {evalRes.warnings.length > 0 && (
        <div className="wb-warnings" role="alert">
          {evalRes.warnings.map((w, i) => (
            <div key={i} className={'banner ' + (w.severity === 'error' ? 'banner--streak-danger' : 'banner--near')}>
              <span>{w.severity === 'error' ? '⚡⚠️' : '⚠️'} {w.message}</span>
            </div>
          ))}
        </div>
      )}

      {/* Grid Utama: Kiri Papan Rakitan SVG, Kanan Editor Kode & Serial Monitor */}
      <div className="wb-grid">
        <div className="card wb-board-card">
          {/* Palette Komponen */}
          <div className="wb-palette">
            <span className="wb-palette__label">Tambah Komponen:</span>
            <div className="wb-palette__list">
              {WORKBENCH_COMPONENTS.map((comp) => (
                <button
                  key={comp.type}
                  type="button"
                  className="chip-btn"
                  onClick={() => onAddComponent(comp.type)}
                  title={'Pasang ' + comp.name}
                >
                  + {comp.short}
                </button>
              ))}
            </div>
          </div>

          <div className="wb-wire-hint">
            {selectedEp ? (
              <span className="wb-wire-hint--active">
                🔌 Pin asal dipilih (<b>{selectedEp.kind === 'board' ? selectedEp.pin : selectedEp.leg}</b>) — klik pin tujuan untuk menyambung kabel.{' '}
                <button type="button" className="wb-link-btn" onClick={() => setSelectedEp(null)}>Batal</button>
              </span>
            ) : (
              <span className="muted">
                💡 Klik 1 pin Arduino lalu klik 1 kaki komponen untuk menarik kabel jumper. Klik kabel untuk melepasnya.
              </span>
            )}
          </div>

          {/* Kanvas SVG Papan Arduino Uno + Breadboard 6 Slot */}
          <div className="wb-canvas-wrap">
            <svg className="wb-svg" viewBox="0 0 660 356" role="img" aria-label="Papan rakitan Arduino Uno interaktif">
              {/* Latar Breadboard kanan */}
              <rect x="366" y="16" width="278" height="324" rx="14" className="wb-breadboard" />
              <text x="505" y="36" textAnchor="middle" className="wb-board-sublabel">PAPAN RAKITAN (6 SLOT)</text>

              {/* 6 Slot Komponen */}
              {WORKBENCH_SLOTS.map((slot) => {
                const occupied = components.some((c) => c.slot === slot.id);
                return (
                  <g key={slot.id}>
                    <rect
                      x={slot.x - 54}
                      y={slot.y - 36}
                      width="108"
                      height="84"
                      rx="10"
                      className={'wb-slot' + (occupied ? ' is-occupied' : '')}
                    />
                    {!occupied && (
                      <text x={slot.x} y={slot.y + 8} textAnchor="middle" className="wb-slot-empty">
                        Slot {slot.id + 1}
                      </text>
                    )}
                  </g>
                );
              })}

              {/* Papan Arduino UNO (kiri) */}
              <g transform="translate(0, 52)">
                {/* Port USB */}
                <rect x="6" y="56" width="28" height="44" rx="4" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
                {/* DC Jack */}
                <rect x="8" y="138" width="26" height="30" rx="3" fill="#1e293b" />
                {/* PCB Teal-Blue Arduino */}
                <rect x="30" y="14" width="308" height="184" rx="12" fill="#0f766e" stroke="#115e59" strokeWidth="2.5" />
                {/* Header strip atas & bawah */}
                <rect x="64" y="22" width="252" height="24" rx="4" fill="#0f172a" />
                <rect x="102" y="166" width="188" height="24" rx="4" fill="#0f172a" />
                {/* Chip ATmega328P */}
                <rect x="128" y="88" width="128" height="40" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
                <text x="192" y="112" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontFamily="monospace" fontWeight="700">ATmega328P</text>
                {/* Logo & label */}
                <text x="58" y="84" fill="#ecfdf5" fontSize="13" fontWeight="800">ARDUINO</text>
                <text x="58" y="100" fill="#99f6e4" fontSize="10" fontWeight="700">UNO R3</text>
                {/* Onboard LED PWR & LED 13 (L) */}
                <circle cx="88" cy="128" r="4.5" fill={simRunning ? '#22c55e' : '#334155'} />
                <text x="98" y="131" fill="#ccfbf1" fontSize="8" fontFamily="monospace">ON</text>
                {onboardLed13 && (
                  <circle cx="88" cy="144" r="10" fill="#f59e0b" opacity="0.45" />
                )}
                <circle cx="88" cy="144" r="4.5" fill={onboardLed13 ? '#fbbf24' : '#334155'} />
                <text x="98" y="147" fill="#ccfbf1" fontSize="8" fontFamily="monospace">L(13)</text>

                {/* Pin-pin Arduino yang bisa diklik */}
                {BOARD_PINS.map((pin) => {
                  const ep = { kind: 'board', pin: pin.id };
                  const isSel = selectedEp && endpointKey(selectedEp) === endpointKey(ep);
                  const isTop = pin.y < 100;
                  return (
                    <g
                      key={pin.id}
                      className="wb-pin-group"
                      onClick={() => onClickEndpoint(ep)}
                      style={{ cursor: 'pointer' }}
                    >
                      <circle
                        cx={pin.x}
                        cy={pin.y}
                        r={isSel ? 8 : 6.5}
                        className={'wb-pin' + (isSel ? ' is-selected' : '') + (pin.group === 'power' ? ' is-pwr' : pin.group === 'ground' ? ' is-gnd' : '')}
                      />
                      <text
                        x={pin.x}
                        y={isTop ? pin.y + 22 : pin.y - 16}
                        textAnchor="middle"
                        fill="#e2e8f0"
                        fontSize="8.5"
                        fontFamily="monospace"
                        fontWeight="700"
                      >
                        {pin.label}
                      </text>
                    </g>
                  );
                })}
              </g>

              {/* Komponen yang terpasang di slot */}
              {components.map((comp) => {
                const slot = WORKBENCH_SLOTS[comp.slot];
                const def = COMP_DEF_MAP[comp.type];
                if (!slot || !def) return null;
                const st = evalRes.componentStates[comp.id] || {};
                const isBtnPressed = !!interactive[`btn:${comp.id}`];

                return (
                  <g key={comp.id} transform={`translate(${slot.x}, ${slot.y})`}>
                    {/* Tombol hapus komponen */}
                    <g
                      className="wb-del-btn"
                      transform="translate(42, -26)"
                      onClick={() => onRemoveComponent(comp.id)}
                      style={{ cursor: 'pointer' }}
                    >
                      <circle r="8" fill="#ef4444" />
                      <text y="3" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="800">×</text>
                    </g>

                    {/* Visual per tipe komponen */}
                    {def.kind === 'led' && (
                      <g>
                        {st.lit && (
                          <>
                            <circle
                              cx="0"
                              cy="-4"
                              r={26 + (st.brightness || 1) * 10}
                              fill={def.color}
                              opacity={0.14 + (st.brightness || 1) * 0.22}
                            />
                            <circle
                              cx="0"
                              cy="-4"
                              r={16 + (st.brightness || 1) * 6}
                              fill={def.color}
                              opacity={0.28 + (st.brightness || 1) * 0.35}
                            />
                          </>
                        )}
                        <path
                          d="M -12 8 L -12 -8 A 12 12 0 0 1 12 -8 L 12 8 Z"
                          fill={st.lit ? def.color : '#64748b'}
                          fillOpacity={st.lit ? (0.45 + (st.brightness || 1) * 0.55) : 0.35}
                          stroke={st.lit ? '#ffffff' : def.color}
                          strokeWidth="2"
                        />
                        {st.lit && (
                          <circle cx="-3" cy="-8" r="4" fill="#ffffff" opacity={0.45 + (st.brightness || 1) * 0.4} />
                        )}
                        <line x1="-16" y1="8" x2="-16" y2="28" stroke="#94a3b8" strokeWidth="2.5" />
                        <line x1="16" y1="8" x2="16" y2="28" stroke="#94a3b8" strokeWidth="2.5" />
                        <text x="0" y="-22" textAnchor="middle" className="wb-comp-title">
                          {def.name}{st.overcurrent ? ' 🔥' : st.lit ? (st.brightness < 0.99 ? ` (${Math.round(st.brightness * 100)}%)` : ' ● ON') : ''}
                        </text>
                      </g>
                    )}

                    {def.kind === 'resistor' && (
                      <g>
                        <line x1="-24" y1="0" x2="-24" y2="14" stroke="#94a3b8" strokeWidth="2.5" />
                        <line x1="24" y1="0" x2="24" y2="14" stroke="#94a3b8" strokeWidth="2.5" />
                        <rect x="-24" y="-8" width="48" height="16" rx="5" fill="#fde68a" stroke="#b45309" strokeWidth="1.5" />
                        <rect x="-14" y="-8" width="4" height="16" fill="#dc2626" />
                        <rect x="-5" y="-8" width="4" height="16" fill="#dc2626" />
                        <rect x="4" y="-8" width="4" height="16" fill="#78350f" />
                        <rect x="14" y="-8" width="3" height="16" fill="#eab308" />
                        <text x="0" y="-16" textAnchor="middle" className="wb-comp-title">220Ω</text>
                      </g>
                    )}

                    {def.kind === 'button' && (
                      <g
                        style={{ cursor: 'pointer' }}
                        onPointerDown={() => { SFX.click(); setInteractive((prev) => ({ ...prev, [`btn:${comp.id}`]: true })); }}
                        onPointerUp={() => setInteractive((prev) => ({ ...prev, [`btn:${comp.id}`]: false }))}
                        onPointerLeave={() => setInteractive((prev) => ({ ...prev, [`btn:${comp.id}`]: false }))}
                      >
                        <rect x="-22" y="-12" width="44" height="28" rx="6" fill="#334155" stroke="#64748b" strokeWidth="1.5" />
                        <circle cx="0" cy="2" r={isBtnPressed ? 8.5 : 10} fill={isBtnPressed ? '#10b981' : '#0284c7'} />
                        <line x1="-18" y1="16" x2="-18" y2="26" stroke="#94a3b8" strokeWidth="2.5" />
                        <line x1="18" y1="16" x2="18" y2="26" stroke="#94a3b8" strokeWidth="2.5" />
                        <text x="0" y="-18" textAnchor="middle" className="wb-comp-title">
                          {isBtnPressed ? 'DITEKAN' : 'Tekan Tombol'}
                        </text>
                      </g>
                    )}

                    {def.kind === 'pot' && (
                      <g>
                        <circle cx="0" cy="0" r="17" fill="#312e81" stroke="#6366f1" strokeWidth="2" />
                        <line
                          x1="0"
                          y1="0"
                          x2={Math.cos((((interactive[`pot:${comp.id}`] ?? 512) / 1023) * 240 - 210) * Math.PI / 180) * 12}
                          y2={Math.sin((((interactive[`pot:${comp.id}`] ?? 512) / 1023) * 240 - 210) * Math.PI / 180) * 12}
                          stroke="#e0e7ff"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                        <line x1="-22" y1="14" x2="-22" y2="28" stroke="#ef4444" strokeWidth="2" />
                        <line x1="0" y1="17" x2="0" y2="28" stroke="#f59e0b" strokeWidth="2" />
                        <line x1="22" y1="14" x2="22" y2="28" stroke="#64748b" strokeWidth="2" />
                        <text x="0" y="-22" textAnchor="middle" className="wb-comp-title">
                          Pot: {interactive[`pot:${comp.id}`] ?? 512}
                        </text>
                      </g>
                    )}

                    {def.kind === 'buzzer' && (
                      <g>
                        {st.active && (
                          <circle cx="0" cy="0" r="24" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="4 3" />
                        )}
                        <circle cx="0" cy="0" r="16" fill="#1e293b" stroke={st.active ? '#10b981' : '#64748b'} strokeWidth="2" />
                        <circle cx="0" cy="0" r="4" fill="#94a3b8" />
                        <line x1="-16" y1="14" x2="-16" y2="28" stroke="#ef4444" strokeWidth="2.5" />
                        <line x1="16" y1="14" x2="16" y2="28" stroke="#64748b" strokeWidth="2.5" />
                        <text x="0" y="-22" textAnchor="middle" className="wb-comp-title">
                          {st.active ? `Buzzer ${st.freq}Hz` : 'Buzzer'}
                        </text>
                      </g>
                    )}

                    {/* Kaki pin komponen yang bisa diklik untuk wiring */}
                    {def.legs.map((leg) => {
                      const ep = { kind: 'comp', compId: comp.id, leg: leg.id };
                      const isSel = selectedEp && endpointKey(selectedEp) === endpointKey(ep);
                      return (
                        <g
                          key={leg.id}
                          onClick={() => onClickEndpoint(ep)}
                          style={{ cursor: 'pointer' }}
                        >
                          <circle
                            cx={leg.dx}
                            cy={leg.dy}
                            r={isSel ? 7.5 : 5.5}
                            className={'wb-pin' + (isSel ? ' is-selected' : '')}
                          />
                          <text x={leg.dx} y={leg.dy + 13} textAnchor="middle" className="wb-leg-label">
                            {leg.id === 'anode' || leg.id === 'pos' ? '+' : leg.id === 'cathode' || leg.id === 'neg' ? '-' : leg.id.toUpperCase()}
                          </text>
                        </g>
                      );
                    })}
                  </g>
                );
              })}

              {/* Kabel Jumper SVG (Bezier) */}
              {wires.map((w) => {
                const rawA = getEndpointCoords(w.from, components);
                const rawB = getEndpointCoords(w.to, components);
                if (!rawA || !rawB) return null;
                const a = w.from.kind === 'board' ? { x: rawA.x, y: rawA.y + 52 } : rawA;
                const b = w.to.kind === 'board' ? { x: rawB.x, y: rawB.y + 52 } : rawB;
                const color = wireColorFor(w.from, w.to);
                return (
                  <g
                    key={w.id}
                    className="wb-wire"
                    onClick={() => onRemoveWire(w.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <path d={wirePathD(a, b)} fill="none" stroke="transparent" strokeWidth="12" />
                    <path d={wirePathD(a, b)} fill="none" stroke={color} strokeWidth="3.2" strokeLinecap="round" />
                    <circle cx={a.x} cy={a.y} r="3.5" fill={color} />
                    <circle cx={b.x} cy={b.y} r="3.5" fill={color} />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Kontrol Interaktif untuk Potensiometer & Tombol (ramah layar sentuh HP) */}
          {components.some((c) => c.type === 'pot' || c.type === 'button') && (
            <div className="wb-controls">
              {components.filter((c) => c.type === 'pot').map((c) => {
                const val = interactive[`pot:${c.id}`] ?? 512;
                return (
                  <label key={c.id} className="wb-control-row">
                    <span>🎛️ Potensiometer (Slot {c.slot + 1}): <b>{val}</b></span>
                    <input
                      type="range"
                      min="0"
                      max="1023"
                      value={val}
                      onChange={(e) => setInteractive((prev) => ({ ...prev, [`pot:${c.id}`]: Number(e.target.value) }))}
                    />
                  </label>
                );
              })}
              {components.filter((c) => c.type === 'button').map((c) => {
                const pressed = !!interactive[`btn:${c.id}`];
                return (
                  <div key={c.id} className="wb-control-row">
                    <span>🔘 Push Button (Slot {c.slot + 1})</span>
                    <button
                      type="button"
                      className={'chip-btn' + (pressed ? ' is-active' : '')}
                      onClick={() => {
                        SFX.click();
                        setInteractive((prev) => ({ ...prev, [`btn:${c.id}`]: !pressed }));
                      }}
                    >
                      {pressed ? 'Sedang Ditekan (ON)' : 'Tekan Tombol'}
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Kolom Kanan: Editor Sketsa Arduino + Serial Monitor */}
        <div className="card wb-code-card">
          <div className="wb-code-head">
            <h2 className="set-card__title" style={{ padding: 0 }}>Sketsa Arduino (C++)</h2>
            <button
              type="button"
              className={'btn btn--sm ' + (simRunning ? 'btn--danger' : 'btn--primary')}
              onClick={onToggleSim}
            >
              {simRunning ? '⏹ Stop Simulasi' : '▶ Jalankan Simulasi'}
            </button>
          </div>

          <textarea
            className="wb-editor"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck={false}
            rows={12}
            aria-label="Editor kode Arduino C++"
          />

          {/* Status Simulasi LED / Log Error */}
          {simRunning && errorLogs.length > 0 && (
            <div className="wb-error-log" role="alert">
              <div className="wb-error-log__head">
                <span>✕ Log Error Simulasi ({errorLogs.length})</span>
                <span>Simulasi Gagal</span>
              </div>
              <pre className="wb-error-log__body">
                {errorLogs.map((e, i) => `[${i + 1}] (${e.source}) ${e.message}`).join('\n')}
              </pre>
            </div>
          )}

          {simRunning && errorLogs.length === 0 && !evalRes.hasShortCircuit && (litLedCount > 0 || onboardLed13) && (
            <div className="wb-sim-ok" role="status">
              <span className="wb-sim-ok__dot" aria-hidden="true" />
              <span>
                <b>Simulasi Berhasil!</b>{' '}
                {litLedCount > 0
                  ? `${litLedCount} LED rakitan menyala${blinkingPins.size > 0 ? ' (berkedip)' : ''}.`
                  : 'LED bawaan L(13) menyala.'}
              </span>
            </div>
          )}

          <div className="wb-serial">
            <div className="wb-serial__head">
              <span>Serial Monitor (9600 baud)</span>
              <span className={'wb-serial__status' + (simRunning ? (errorLogs.length > 0 ? ' is-error' : ' is-live') : '')}>
                {!simRunning ? '○ IDLE' : errorLogs.length > 0 ? '● ERROR' : '● LIVE'}
              </span>
            </div>
            <pre className="wb-serial__out">
              {!simRunning
                ? '// Klik "Jalankan Simulasi" untuk melihat output Serial & nyala LED...'
                : errorLogs.length > 0
                ? errorLogs.map((e) => `ERROR [${e.source}]: ${e.message}`).join('\n')
                : serialLines.length > 0
                ? serialLines.slice(0, 10).join('\n')
                : '(Simulasi berjalan — tidak ada output Serial.println)'}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
