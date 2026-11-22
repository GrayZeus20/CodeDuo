/* CodeDuo — workbenchEngine.js: Mesin rangkaian listrik & validasi Arduino Interactive Workbench.
 * Murni (tanpa DOM), dapat diuji penuh di Node.js dan dijalankan real-time di browser.
 * Mendukung: LED (merah/hijau/kuning), Resistor 220Ω, Push Button, Potensiometer, Buzzer,
 * deteksi korsleting (short circuit), polaritas LED terbalik, LED tanpa resistor (overcurrent),
 * serta evaluasi tantangan rakitan interaktif.
 */
'use strict';

export const BOARD_PINS = [
  // Header Atas (Digital)
  { id: 'D13', label: '13', group: 'digital', num: 13, pwm: false, x: 76,  y: 34 },
  { id: 'D12', label: '12', group: 'digital', num: 12, pwm: false, x: 96,  y: 34 },
  { id: 'D11', label: '11~', group: 'digital', num: 11, pwm: true,  x: 116, y: 34 },
  { id: 'D10', label: '10~', group: 'digital', num: 10, pwm: true,  x: 136, y: 34 },
  { id: 'D9',  label: '9~',  group: 'digital', num: 9,  pwm: true,  x: 156, y: 34 },
  { id: 'D8',  label: '8',   group: 'digital', num: 8,  pwm: false, x: 176, y: 34 },
  { id: 'D7',  label: '7',   group: 'digital', num: 7,  pwm: false, x: 204, y: 34 },
  { id: 'D6',  label: '6~',  group: 'digital', num: 6,  pwm: true,  x: 224, y: 34 },
  { id: 'D5',  label: '5~',  group: 'digital', num: 5,  pwm: true,  x: 244, y: 34 },
  { id: 'D4',  label: '4',   group: 'digital', num: 4,  pwm: false, x: 264, y: 34 },
  { id: 'D3',  label: '3~',  group: 'digital', num: 3,  pwm: true,  x: 284, y: 34 },
  { id: 'D2',  label: '2',   group: 'digital', num: 2,  pwm: false, x: 304, y: 34 },
  // Header Bawah (Power & Analog)
  { id: '5V',   label: '5V',  group: 'power',  x: 116, y: 178 },
  { id: 'GND1', label: 'GND', group: 'ground', x: 142, y: 178 },
  { id: 'GND2', label: 'GND', group: 'ground', x: 168, y: 178 },
  { id: 'A0',   label: 'A0',  group: 'analog', x: 224, y: 178 },
  { id: 'A1',   label: 'A1',  group: 'analog', x: 250, y: 178 },
  { id: 'A2',   label: 'A2',  group: 'analog', x: 276, y: 178 },
];

export const BOARD_PIN_MAP = Object.fromEntries(BOARD_PINS.map((p) => [p.id, p]));

export const WORKBENCH_COMPONENTS = [
  {
    type: 'led-red',
    name: 'LED Merah',
    short: 'LED 🔴',
    color: '#ef4444',
    kind: 'led',
    legs: [
      { id: 'anode', label: '+ (Anoda)', dx: -16, dy: 28 },
      { id: 'cathode', label: '- (Katoda)', dx: 16, dy: 28 },
    ],
  },
  {
    type: 'led-green',
    name: 'LED Hijau',
    short: 'LED 🟢',
    color: '#22c55e',
    kind: 'led',
    legs: [
      { id: 'anode', label: '+ (Anoda)', dx: -16, dy: 28 },
      { id: 'cathode', label: '- (Katoda)', dx: 16, dy: 28 },
    ],
  },
  {
    type: 'led-amber',
    name: 'LED Kuning',
    short: 'LED 🟡',
    color: '#f59e0b',
    kind: 'led',
    legs: [
      { id: 'anode', label: '+ (Anoda)', dx: -16, dy: 28 },
      { id: 'cathode', label: '- (Katoda)', dx: 16, dy: 28 },
    ],
  },
  {
    type: 'resistor',
    name: 'Resistor 220Ω',
    short: '220Ω',
    color: '#d97706',
    kind: 'resistor',
    legs: [
      { id: 'p1', label: 'Kaki 1', dx: -24, dy: 14 },
      { id: 'p2', label: 'Kaki 2', dx: 24, dy: 14 },
    ],
  },
  {
    type: 'button',
    name: 'Push Button',
    short: 'Tombol',
    color: '#0284c7',
    kind: 'button',
    legs: [
      { id: 'p1', label: 'Pin A', dx: -18, dy: 26 },
      { id: 'p2', label: 'Pin B', dx: 18, dy: 26 },
    ],
  },
  {
    type: 'pot',
    name: 'Potensiometer',
    short: 'Potensio',
    color: '#6366f1',
    kind: 'pot',
    legs: [
      { id: 'vcc', label: '5V', dx: -22, dy: 28 },
      { id: 'sig', label: 'SIG', dx: 0, dy: 28 },
      { id: 'gnd', label: 'GND', dx: 22, dy: 28 },
    ],
  },
  {
    type: 'buzzer',
    name: 'Buzzer Piezo',
    short: 'Buzzer 🔊',
    color: '#475569',
    kind: 'buzzer',
    legs: [
      { id: 'pos', label: '+ (Positif)', dx: -16, dy: 28 },
      { id: 'neg', label: '- (Negatif)', dx: 16, dy: 28 },
    ],
  },
];

export const COMP_DEF_MAP = Object.fromEntries(WORKBENCH_COMPONENTS.map((c) => [c.type, c]));

/* Posisi 6 slot rakitan komponen di papan breadboard virtual (SVG viewBox 680x360) */
export const WORKBENCH_SLOTS = [
  { id: 0, x: 435, y: 78 },
  { id: 1, x: 565, y: 78 },
  { id: 2, x: 435, y: 184 },
  { id: 3, x: 565, y: 184 },
  { id: 4, x: 435, y: 288 },
  { id: 5, x: 565, y: 288 },
];

export function endpointKey(ep) {
  if (!ep) return '';
  return ep.kind === 'board' ? `board:${ep.pin}` : `comp:${ep.compId}:${ep.leg}`;
}

export function wireColorFor(a, b) {
  const keys = [a, b].map((e) => (e && e.kind === 'board' ? e.pin : ''));
  if (keys.includes('5V')) return '#ef4444';
  if (keys.includes('GND1') || keys.includes('GND2')) return '#334155';
  if (keys.some((k) => /^A\d/.test(k))) return '#f59e0b';
  if (keys.some((k) => BOARD_PIN_MAP[k] && BOARD_PIN_MAP[k].pwm)) return '#10b981';
  return '#0284c7';
}

/* Membangun graf konektivitas dari daftar kabel jumper */
function buildAdjacency(wires) {
  const adj = new Map();
  const add = (u, v) => {
    if (!adj.has(u)) adj.set(u, new Set());
    adj.get(u).add(v);
  };
  (wires || []).forEach((w) => {
    const u = endpointKey(w.from);
    const v = endpointKey(w.to);
    if (u && v && u !== v) {
      add(u, v);
      add(v, u);
    }
  });
  return adj;
}

/* Telusuri node yang terhubung langsung (tanpa melewati komponen), serta lewat resistor seri */
function traceSignal(startKey, adj, components) {
  const resMap = new Map();
  (components || []).forEach((c) => {
    const def = COMP_DEF_MAP[c.type];
    if (def && def.kind === 'resistor') {
      resMap.set(`comp:${c.id}:p1`, `comp:${c.id}:p2`);
      resMap.set(`comp:${c.id}:p2`, `comp:${c.id}:p1`);
    }
  });

  // BFS menyimpan jarak resistor minimal (0 = langsung tanpa resistor, >=1 = lewat resistor)
  const visited = new Map(); // nodeKey -> minResistors
  const queue = [{ key: startKey, res: 0 }];
  visited.set(startKey, 0);

  const boardPins = new Map(); // pinId -> minResistors
  while (queue.length > 0) {
    const cur = queue.shift();
    if (cur.key.startsWith('board:')) {
      const pinId = cur.key.slice(6);
      const prev = boardPins.get(pinId);
      if (prev === undefined || cur.res < prev) boardPins.set(pinId, cur.res);
    }
    const neighbors = adj.get(cur.key);
    if (neighbors) {
      neighbors.forEach((nxt) => {
        const prev = visited.get(nxt);
        if (prev === undefined || cur.res < prev) {
          visited.set(nxt, cur.res);
          queue.push({ key: nxt, res: cur.res });
        }
      });
    }
    if (resMap.has(cur.key)) {
      const otherLeg = resMap.get(cur.key);
      const nxtRes = cur.res + 1;
      const prev = visited.get(otherLeg);
      if (prev === undefined || nxtRes < prev) {
        visited.set(otherLeg, nxtRes);
        queue.push({ key: otherLeg, res: nxtRes });
      }
    }
  }

  return { boardPins, visited };
}

/* Konversi nilai tegangan/sinyal pin papan virtual dari hasil simulasi `runSketch` */
function readBoardPinVoltage(pinId, boardPinsState) {
  if (pinId === '5V') return { level: 1, high: true, ground: false, pwm: 255 };
  if (pinId === 'GND1' || pinId === 'GND2') return { level: 0, high: false, ground: true, pwm: 0 };
  const pinDef = BOARD_PIN_MAP[pinId];
  if (!pinDef || pinDef.group !== 'digital') return { level: 0, high: false, ground: false, pwm: 0 };

  const st = boardPinsState && boardPinsState[String(pinDef.num)];
  if (!st) return { level: 0, high: false, ground: false, pwm: 0 };
  if (st.pwm > 0) {
    const lvl = Math.max(0, Math.min(1, st.pwm / 255));
    return { level: lvl, high: lvl > 0.05, ground: false, pwm: st.pwm };
  }
  if (st.digital === 1) return { level: 1, high: true, ground: false, pwm: 255 };
  if (st.mode === 'OUTPUT' && st.digital === 0) return { level: 0, high: false, ground: true, pwm: 0 };
  return { level: 0, high: false, ground: false, pwm: 0 };
}

/**
 * Mengekstrak opsi input simulasi (tombol & potensiometer) dari rangkaian user untuk dikirim ke `runSketch()`.
 */
export function buildSimInputsFromCircuit(components, wires, interactiveState = {}) {
  const adj = buildAdjacency(wires);
  const buttons = {};
  const analog = {};

  (components || []).forEach((c) => {
    const def = COMP_DEF_MAP[c.type];
    if (!def) return;

    if (def.kind === 'button') {
      const pressed = !!interactiveState[`btn:${c.id}`];
      const t1 = traceSignal(`comp:${c.id}:p1`, adj, components);
      const t2 = traceSignal(`comp:${c.id}:p2`, adj, components);
      const pins = [...t1.boardPins.keys(), ...t2.boardPins.keys()];
      const hasGnd = pins.includes('GND1') || pins.includes('GND2');
      const has5v = pins.includes('5V');
      pins.forEach((pid) => {
        const pd = BOARD_PIN_MAP[pid];
        if (pd && pd.group === 'digital') {
          if (hasGnd) buttons[String(pd.num)] = pressed ? 0 : 1; // INPUT_PULLUP: LOW saat ditekan
          else if (has5v) buttons[String(pd.num)] = pressed ? 1 : 0;
        }
      });
    }

    if (def.kind === 'pot') {
      const val = Number.isFinite(interactiveState[`pot:${c.id}`]) ? interactiveState[`pot:${c.id}`] : 512;
      const tSig = traceSignal(`comp:${c.id}:sig`, adj, components);
      const tVcc = traceSignal(`comp:${c.id}:vcc`, adj, components);
      const tGnd = traceSignal(`comp:${c.id}:gnd`, adj, components);
      const powered = tVcc.boardPins.has('5V') && (tGnd.boardPins.has('GND1') || tGnd.boardPins.has('GND2'));
      tSig.boardPins.forEach((_, pid) => {
        if (/^A\d/.test(pid)) {
          analog[pid] = powered ? Math.max(0, Math.min(1023, Math.round(val))) : 0;
        }
      });
    }
  });

  return { buttons, analog };
}

/**
 * Mengevaluasi status kelistrikan seluruh komponen & mendeteksi kesalahan rangkaian (korsleting, polaritas, resistor).
 */
export function evaluateWorkbenchCircuit(components, wires, boardResult = null) {
  const adj = buildAdjacency(wires);
  const boardPinsState = boardResult && boardResult.pins ? boardResult.pins : {};
  const toneInfo = boardResult && boardResult.tone ? boardResult.tone : null;

  const warnings = [];
  const componentStates = {};

  // 1. Cek Korsleting: 5V langsung ke GND (0 resistor)
  const trace5v = traceSignal('board:5V', adj, components);
  if (trace5v.boardPins.get('GND1') === 0 || trace5v.boardPins.get('GND2') === 0) {
    warnings.push({
      code: 'short_circuit',
      severity: 'error',
      message: 'Korsleting terdeteksi! Pin 5V terhubung langsung ke GND tanpa beban/resistor.',
    });
  }

  // 2. Evaluasi tiap komponen
  (components || []).forEach((c) => {
    const def = COMP_DEF_MAP[c.type];
    if (!def) return;

    if (def.kind === 'led') {
      const tAnode = traceSignal(`comp:${c.id}:anode`, adj, components);
      const tCathode = traceSignal(`comp:${c.id}:cathode`, adj, components);

      let anodeBest = { level: 0, high: false, ground: false, res: 0, pin: null };
      tAnode.boardPins.forEach((res, pid) => {
        const v = readBoardPinVoltage(pid, boardPinsState);
        if (v.level > anodeBest.level || (v.ground && !anodeBest.high)) {
          anodeBest = { ...v, res, pin: pid };
        }
      });

      let cathodeBest = { level: 0, high: false, ground: false, res: 0, pin: null };
      tCathode.boardPins.forEach((res, pid) => {
        const v = readBoardPinVoltage(pid, boardPinsState);
        if (v.ground) cathodeBest = { ...v, res, pin: pid };
        else if (v.high && !cathodeBest.ground) cathodeBest = { ...v, res, pin: pid };
      });

      const hasResistor = (anodeBest.res + cathodeBest.res) >= 1;
      const forwardLit = anodeBest.high && cathodeBest.ground;
      const reversed = anodeBest.ground && cathodeBest.high;
      const overcurrent = forwardLit && !hasResistor;

      if (reversed) {
        warnings.push({
          code: 'led_reversed',
          severity: 'warn',
          compId: c.id,
          message: `${def.name} terpasang terbalik! Sambungkan kaki + (Anoda) ke pin sinyal/5V dan - (Katoda) ke GND.`,
        });
      } else if (overcurrent) {
        warnings.push({
          code: 'led_no_resistor',
          severity: 'warn',
          compId: c.id,
          message: `${def.name} menyala tanpa Resistor 220Ω seri! Pasang resistor agar LED tidak kelebihan arus.`,
        });
      }

      componentStates[c.id] = {
        lit: forwardLit,
        brightness: forwardLit ? anodeBest.level : 0,
        hasResistor,
        overcurrent,
        reversed,
        connectedPin: anodeBest.pin,
        connectedGnd: cathodeBest.ground,
      };
    }

    if (def.kind === 'buzzer') {
      const tPos = traceSignal(`comp:${c.id}:pos`, adj, components);
      const tNeg = traceSignal(`comp:${c.id}:neg`, adj, components);
      const hasGnd = tNeg.boardPins.has('GND1') || tNeg.boardPins.has('GND2');
      let active = false;
      let freq = 0;
      let pinId = null;

      tPos.boardPins.forEach((_, pid) => {
        const pd = BOARD_PIN_MAP[pid];
        if (toneInfo && pd && pd.group === 'digital' && String(toneInfo.pin) === String(pd.num)) {
          active = hasGnd;
          freq = toneInfo.freq || 880;
          pinId = pid;
        } else {
          const v = readBoardPinVoltage(pid, boardPinsState);
          if (v.high && hasGnd) {
            active = true;
            freq = 660;
            pinId = pid;
          }
        }
      });

      componentStates[c.id] = { active, freq, connectedPin: pinId, connectedGnd: hasGnd };
    }

    if (def.kind === 'button') {
      const t1 = traceSignal(`comp:${c.id}:p1`, adj, components);
      const t2 = traceSignal(`comp:${c.id}:p2`, adj, components);
      const allPins = [...t1.boardPins.keys(), ...t2.boardPins.keys()];
      const digitalPin = allPins.find((p) => BOARD_PIN_MAP[p] && BOARD_PIN_MAP[p].group === 'digital') || null;
      const hasGnd = allPins.includes('GND1') || allPins.includes('GND2');
      componentStates[c.id] = { connectedPin: digitalPin, connectedGnd: hasGnd };
    }

    if (def.kind === 'pot') {
      const tVcc = traceSignal(`comp:${c.id}:vcc`, adj, components);
      const tSig = traceSignal(`comp:${c.id}:sig`, adj, components);
      const tGnd = traceSignal(`comp:${c.id}:gnd`, adj, components);
      const analogPin = [...tSig.boardPins.keys()].find((p) => /^A\d/.test(p)) || null;
      const powered = tVcc.boardPins.has('5V') && (tGnd.boardPins.has('GND1') || tGnd.boardPins.has('GND2'));
      componentStates[c.id] = { analogPin, powered };
    }
  });

  return { warnings, componentStates, hasShortCircuit: warnings.some((w) => w.code === 'short_circuit') };
}

/* =========================================================================
 * Tantangan Rakitan Interaktif (Guided Labs + Sandbox)
 * ========================================================================= */

export const WORKBENCH_CHALLENGES = [
  {
    id: 'blink-led',
    title: '1. Rakit LED Blink + Resistor',
    desc: 'Pasang 1 LED dan 1 Resistor 220Ω secara seri antara pin D13 dan GND, lalu jalankan simulasi Blink.',
    sketch: `void setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  Serial.println("LED D13 MENYALA");\n  delay(500);\n}`,
    demo: {
      components: [
        { id: 'c1', type: 'resistor', slot: 0 },
        { id: 'c2', type: 'led-red', slot: 1 },
      ],
      wires: [
        { id: 'w1', from: { kind: 'board', pin: 'D13' }, to: { kind: 'comp', compId: 'c1', leg: 'p1' } },
        { id: 'w2', from: { kind: 'comp', compId: 'c1', leg: 'p2' }, to: { kind: 'comp', compId: 'c2', leg: 'anode' } },
        { id: 'w3', from: { kind: 'comp', compId: 'c2', leg: 'cathode' }, to: { kind: 'board', pin: 'GND1' } },
      ],
    },
    check: (components, wires, evalRes, simRan) => {
      const leds = components.filter((c) => COMP_DEF_MAP[c.type]?.kind === 'led');
      const resistors = components.filter((c) => COMP_DEF_MAP[c.type]?.kind === 'resistor');
      const goodLed = leds.some((l) => {
        const st = evalRes.componentStates[l.id];
        return st && st.connectedPin === 'D13' && st.connectedGnd && st.hasResistor && st.lit;
      });
      return [
        { label: 'Pasang 1 LED di papan rakitan', ok: leds.length > 0 },
        { label: 'Pasang Resistor 220Ω sebagai pelindung arus', ok: resistors.length > 0 },
        { label: 'Hubungkan seri D13 → Resistor → LED (+) → LED (-) → GND', ok: goodLed && !evalRes.hasShortCircuit },
        { label: 'Jalankan Simulasi & LED menyala aman', ok: simRan && goodLed },
      ];
    },
  },
  {
    id: 'pwm-dimmer',
    title: '2. Dimmer LED PWM (D9~)',
    desc: 'Hubungkan LED + Resistor seri ke pin PWM D9~ dan GND, lalu atur kecerahan dengan analogWrite(9, 140).',
    sketch: `void setup() {\n  pinMode(9, OUTPUT);\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  analogWrite(9, 140);\n  Serial.println("PWM D9 = 140 (~55%)");\n  delay(300);\n}`,
    demo: {
      components: [
        { id: 'c1', type: 'resistor', slot: 0 },
        { id: 'c2', type: 'led-green', slot: 1 },
      ],
      wires: [
        { id: 'w1', from: { kind: 'board', pin: 'D9' }, to: { kind: 'comp', compId: 'c1', leg: 'p1' } },
        { id: 'w2', from: { kind: 'comp', compId: 'c1', leg: 'p2' }, to: { kind: 'comp', compId: 'c2', leg: 'anode' } },
        { id: 'w3', from: { kind: 'comp', compId: 'c2', leg: 'cathode' }, to: { kind: 'board', pin: 'GND1' } },
      ],
    },
    check: (components, wires, evalRes, simRan) => {
      const leds = components.filter((c) => COMP_DEF_MAP[c.type]?.kind === 'led');
      const pwmLit = leds.some((l) => {
        const st = evalRes.componentStates[l.id];
        return st && st.connectedPin === 'D9' && st.connectedGnd && st.hasResistor && st.lit && st.brightness > 0 && st.brightness < 1;
      });
      return [
        { label: 'Pasang LED & Resistor seri', ok: leds.length > 0 && components.some((c) => c.type === 'resistor') },
        { label: 'Hubungkan ke pin PWM D9~ dan GND', ok: leds.some((l) => evalRes.componentStates[l.id]?.connectedPin === 'D9' && evalRes.componentStates[l.id]?.connectedGnd) },
        { label: 'Jalankan Simulasi dengan kecerahan PWM', ok: simRan && pwmLit && !evalRes.hasShortCircuit },
      ];
    },
  },
  {
    id: 'button-led',
    title: '3. Saklar Push Button',
    desc: 'Pasang Push Button antara D2 & GND, serta LED + Resistor di D13 & GND. Tekan tombol untuk menyalakan LED!',
    sketch: `void setup() {\n  pinMode(2, INPUT_PULLUP);\n  pinMode(13, OUTPUT);\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  if (digitalRead(2) == LOW) {\n    digitalWrite(13, HIGH);\n    Serial.println("Tombol DITEKAN -> LED ON");\n  } else {\n    digitalWrite(13, LOW);\n    Serial.println("Tombol lepas -> LED OFF");\n  }\n}`,
    demo: {
      components: [
        { id: 'c1', type: 'button', slot: 2 },
        { id: 'c2', type: 'resistor', slot: 0 },
        { id: 'c3', type: 'led-amber', slot: 1 },
      ],
      wires: [
        { id: 'w1', from: { kind: 'board', pin: 'D2' }, to: { kind: 'comp', compId: 'c1', leg: 'p1' } },
        { id: 'w2', from: { kind: 'comp', compId: 'c1', leg: 'p2' }, to: { kind: 'board', pin: 'GND2' } },
        { id: 'w3', from: { kind: 'board', pin: 'D13' }, to: { kind: 'comp', compId: 'c2', leg: 'p1' } },
        { id: 'w4', from: { kind: 'comp', compId: 'c2', leg: 'p2' }, to: { kind: 'comp', compId: 'c3', leg: 'anode' } },
        { id: 'w5', from: { kind: 'comp', compId: 'c3', leg: 'cathode' }, to: { kind: 'board', pin: 'GND1' } },
      ],
    },
    check: (components, wires, evalRes, simRan) => {
      const btnOk = components.some((c) => c.type === 'button' && evalRes.componentStates[c.id]?.connectedPin === 'D2' && evalRes.componentStates[c.id]?.connectedGnd);
      const ledOk = components.some((c) => COMP_DEF_MAP[c.type]?.kind === 'led' && evalRes.componentStates[c.id]?.connectedPin === 'D13' && evalRes.componentStates[c.id]?.hasResistor && evalRes.componentStates[c.id]?.connectedGnd);
      return [
        { label: 'Hubungkan Push Button ke D2 dan GND', ok: btnOk },
        { label: 'Hubungkan LED + Resistor seri ke D13 dan GND', ok: ledOk },
        { label: 'Jalankan Simulasi (coba tekan tombolnya!)', ok: simRan && btnOk && ledOk && !evalRes.hasShortCircuit },
      ];
    },
  },
  {
    id: 'pot-buzzer',
    title: '4. Alarm Potensio + Buzzer',
    desc: 'Pasang Potensiometer (5V, A0, GND) & Buzzer (D8, GND). Geser knob di atas 500 agar alarm berbunyi!',
    sketch: `void setup() {\n  pinMode(8, OUTPUT);\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  int val = analogRead(A0);\n  Serial.println(val);\n  if (val > 500) {\n    tone(8, 880);\n  } else {\n    noTone(8);\n  }\n}`,
    demo: {
      components: [
        { id: 'c1', type: 'pot', slot: 2 },
        { id: 'c2', type: 'buzzer', slot: 3 },
      ],
      wires: [
        { id: 'w1', from: { kind: 'board', pin: '5V' }, to: { kind: 'comp', compId: 'c1', leg: 'vcc' } },
        { id: 'w2', from: { kind: 'board', pin: 'A0' }, to: { kind: 'comp', compId: 'c1', leg: 'sig' } },
        { id: 'w3', from: { kind: 'board', pin: 'GND1' }, to: { kind: 'comp', compId: 'c1', leg: 'gnd' } },
        { id: 'w4', from: { kind: 'board', pin: 'D8' }, to: { kind: 'comp', compId: 'c2', leg: 'pos' } },
        { id: 'w5', from: { kind: 'board', pin: 'GND2' }, to: { kind: 'comp', compId: 'c2', leg: 'neg' } },
      ],
    },
    check: (components, wires, evalRes, simRan) => {
      const potOk = components.some((c) => c.type === 'pot' && evalRes.componentStates[c.id]?.analogPin === 'A0' && evalRes.componentStates[c.id]?.powered);
      const buzOk = components.some((c) => c.type === 'buzzer' && evalRes.componentStates[c.id]?.connectedPin === 'D8' && evalRes.componentStates[c.id]?.connectedGnd);
      return [
        { label: 'Hubungkan Potensiometer ke 5V, A0, dan GND', ok: potOk },
        { label: 'Hubungkan Buzzer (+) ke D8 dan (-) ke GND', ok: buzOk },
        { label: 'Jalankan Simulasi & geser Potensiometer', ok: simRan && potOk && buzOk && !evalRes.hasShortCircuit },
      ];
    },
  },
  {
    id: 'sandbox',
    title: 'Mode Bebas (Sandbox)',
    desc: 'Rakit komponen dan tulis kode Arduino C++ bebas sesuka hatimu!',
    sketch: `void setup() {\n  pinMode(13, OUTPUT);\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  Serial.println("Halo dari Lab Arduino CodeDuo!");\n}`,
    demo: { components: [], wires: [] },
    check: () => [],
  },
];
