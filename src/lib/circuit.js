/* CodeDuo — diagram rangkaian Arduino sebagai SVG (tanpa aset eksternal).
 *
 * Tujuan: pelajaran "lihat gambar → rakit → koding" tanpa perlu hardware.
 * Digambar dari spesifikasi deklaratif supaya konsisten, tajam di semua ukuran,
 * dan ikut tema terang/gelap (memakai currentColor & CSS variable).
 *
 * Bentuk spec:
 *   { type: 'arduino', parts: [...], wires: [...], note: '...' }
 *
 * Part yang didukung:
 *   { k:'led', pin:9, color:'red', label:'LED' }
 *   { k:'resistor', value:'220', label:'220Ω' }
 *   { k:'button', pin:2, label:'Tombol' }
 *   { k:'pot', pin:'A0', label:'Potensio' }
 *   { k:'buzzer', pin:8, label:'Buzzer' }
 *   { k:'ldr', pin:'A0' }  { k:'servo', pin:9 }  { k:'lcd' }  { k:'ultrasonic', pin:9 }
 *   { k:'breadboard' }  { k:'text', v:'...' }
 *   { k:'pinmap' } → peta pin Arduino Uno (untuk pelajaran pinout)
 * Semua digambar sebagai skema blok + kabel berlabel; fokus ke PEMETAAN
 * pin ↔ komponen, bukan fotorealistik.
 */
'use strict';

const THEME = {
  board: '#0b6e4f',
  boardEdge: '#075c41',
  chip: '#1f2937',
  ink: '#0f172a',
  muted: '#64748b',
  wire: '#334155',
  power: '#e11d48',
  gnd: '#1e293b',
  signal: '#2563eb',
};

const LED_COLORS = {
  red: '#ef4444', green: '#22c55e', blue: '#3b82f6',
  yellow: '#eab308', white: '#e5e7eb', orange: '#f97316',
};

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* Label pin di papan Arduino (kiri: digital, kanan: analog/power). */
function pinLabel(pin) {
  if (typeof pin === 'string' && /^A\d$/.test(pin)) return pin;
  return String(pin);
}

/* ---------------------------- Komponen ---------------------------- */

function drawLed(x, y, part) {
  const color = LED_COLORS[part.color] || LED_COLORS.red;
  return `
  <g transform="translate(${x},${y})">
    <line x1="0" y1="0" x2="0" y2="10" stroke="${THEME.wire}" stroke-width="2"/>
    <line x1="-6" y1="0" x2="6" y2="0" stroke="${THEME.wire}" stroke-width="2"/>
    <path d="M-10 10 L10 10 L0 30 Z" fill="${color}" opacity="0.9" stroke="${THEME.ink}" stroke-width="1.2"/>
    <line x1="-10" y1="30" x2="10" y2="30" stroke="${THEME.ink}" stroke-width="2"/>
    <line x1="0" y1="30" x2="0" y2="42" stroke="${THEME.wire}" stroke-width="2"/>
    <text x="14" y="24" font-size="11" font-weight="700" fill="${THEME.ink}">${esc(part.label || 'LED')}</text>
    <text x="14" y="37" font-size="9" fill="${THEME.muted}">pin ${esc(pinLabel(part.pin))}</text>
  </g>`;
}

function drawResistor(x, y, part) {
  return `
  <g transform="translate(${x},${y})">
    <rect x="-22" y="-7" width="44" height="14" rx="3" fill="#f5e0c3" stroke="${THEME.ink}" stroke-width="1.2"/>
    <line x1="-30" y1="0" x2="-22" y2="0" stroke="${THEME.wire}" stroke-width="2"/>
    <line x1="22" y1="0" x2="30" y2="0" stroke="${THEME.wire}" stroke-width="2"/>
    <line x1="-10" y1="-7" x2="-10" y2="7" stroke="#7c2d12" stroke-width="3"/>
    <line x1="0" y1="-7" x2="0" y2="7" stroke="#7c2d12" stroke-width="3"/>
    <line x1="10" y1="-7" x2="10" y2="7" stroke="#a16207" stroke-width="3"/>
    <text x="0" y="24" font-size="10" font-weight="700" text-anchor="middle" fill="${THEME.ink}">${esc(part.label || part.value + 'Ω')}</text>
  </g>`;
}

function drawButton(x, y, part) {
  return `
  <g transform="translate(${x},${y})">
    <rect x="-16" y="-14" width="32" height="28" rx="4" fill="#e2e8f0" stroke="${THEME.ink}" stroke-width="1.2"/>
    <circle cx="0" cy="0" r="7" fill="#94a3b8" stroke="${THEME.ink}" stroke-width="1"/>
    <line x1="-16" y1="-14" x2="-26" y2="-14" stroke="${THEME.wire}" stroke-width="2"/>
    <line x1="-16" y1="14" x2="-26" y2="14" stroke="${THEME.wire}" stroke-width="2"/>
    <text x="0" y="30" font-size="10" font-weight="700" text-anchor="middle" fill="${THEME.ink}">${esc(part.label || 'Tombol')}</text>
    <text x="0" y="42" font-size="9" text-anchor="middle" fill="${THEME.muted}">pin ${esc(pinLabel(part.pin))}</text>
  </g>`;
}

function drawPot(x, y, part) {
  return `
  <g transform="translate(${x},${y})">
    <rect x="-18" y="-16" width="36" height="32" rx="5" fill="#cbd5e1" stroke="${THEME.ink}" stroke-width="1.2"/>
    <line x1="0" y1="14" x2="0" y2="-8" stroke="${THEME.ink}" stroke-width="3"/>
    <circle cx="0" cy="-8" r="5" fill="${THEME.signal}"/>
    <line x1="-18" y1="-10" x2="-28" y2="-10" stroke="${THEME.wire}" stroke-width="2"/>
    <line x1="18" y1="-10" x2="28" y2="-10" stroke="${THEME.wire}" stroke-width="2"/>
    <line x1="0" y1="16" x2="0" y2="26" stroke="${THEME.wire}" stroke-width="2"/>
    <text x="0" y="40" font-size="10" font-weight="700" text-anchor="middle" fill="${THEME.ink}">${esc(part.label || 'Potensio')}</text>
    <text x="0" y="52" font-size="9" text-anchor="middle" fill="${THEME.muted}">${esc(pinLabel(part.pin))}</text>
  </g>`;
}

function drawBuzzer(x, y, part) {
  return `
  <g transform="translate(${x},${y})">
    <circle cx="0" cy="0" r="16" fill="#facc15" stroke="${THEME.ink}" stroke-width="1.2"/>
    <circle cx="0" cy="0" r="4" fill="${THEME.ink}"/>
    <path d="M-24 -10 a 30 30 0 0 0 0 20" fill="none" stroke="${THEME.muted}" stroke-width="2"/>
    <text x="0" y="34" font-size="10" font-weight="700" text-anchor="middle" fill="${THEME.ink}">${esc(part.label || 'Buzzer')}</text>
    <text x="0" y="46" font-size="9" text-anchor="middle" fill="${THEME.muted}">pin ${esc(pinLabel(part.pin))}</text>
  </g>`;
}

function drawLdr(x, y, part) {
  return `
  <g transform="translate(${x},${y})">
    <circle cx="0" cy="0" r="15" fill="#fef9c3" stroke="${THEME.ink}" stroke-width="1.2"/>
    <path d="M-8 -6 q 8 6 0 12 M0 -8 q 8 8 0 16 M8 -6 q 6 6 0 12" fill="none" stroke="${THEME.ink}" stroke-width="1.4"/>
    <text x="0" y="33" font-size="10" font-weight="700" text-anchor="middle" fill="${THEME.ink}">${esc(part.label || 'LDR')}</text>
    <text x="0" y="45" font-size="9" text-anchor="middle" fill="${THEME.muted}">${esc(pinLabel(part.pin))}</text>
  </g>`;
}

function drawServo(x, y, part) {
  return `
  <g transform="translate(${x},${y})">
    <rect x="-14" y="-16" width="28" height="32" rx="3" fill="#3b82f6" stroke="${THEME.ink}" stroke-width="1.2"/>
    <rect x="8" y="-22" width="8" height="8" fill="#1e40af" stroke="${THEME.ink}" stroke-width="1"/>
    <text x="0" y="36" font-size="10" font-weight="700" text-anchor="middle" fill="${THEME.ink}">${esc(part.label || 'Servo')}</text>
    <text x="0" y="48" font-size="9" text-anchor="middle" fill="${THEME.muted}">pin ${esc(pinLabel(part.pin))}</text>
  </g>`;
}

function drawUltrasonic(x, y, part) {
  return `
  <g transform="translate(${x},${y})">
    <rect x="-24" y="-14" width="48" height="28" rx="3" fill="#0ea5e9" stroke="${THEME.ink}" stroke-width="1.2"/>
    <circle cx="-12" cy="0" r="8" fill="#e2e8f0" stroke="${THEME.ink}" stroke-width="1"/>
    <circle cx="12" cy="0" r="8" fill="#e2e8f0" stroke="${THEME.ink}" stroke-width="1"/>
    <text x="0" y="32" font-size="10" font-weight="700" text-anchor="middle" fill="${THEME.ink}">${esc(part.label || 'Ultrasonik')}</text>
    <text x="0" y="44" font-size="9" text-anchor="middle" fill="${THEME.muted}">Trig ${esc(pinLabel(part.pin))}</text>
  </g>`;
}

function drawLcd(x, y, part) {
  return `
  <g transform="translate(${x},${y})">
    <rect x="-40" y="-26" width="80" height="40" rx="4" fill="#166534" stroke="${THEME.ink}" stroke-width="1.2"/>
    <rect x="-34" y="-20" width="68" height="22" rx="2" fill="#84cc16" opacity="0.85"/>
    <text x="0" y="-6" font-size="10" font-family="monospace" text-anchor="middle" fill="#14532d">Hello, CodeDuo!</text>
    <text x="0" y="28" font-size="10" font-weight="700" text-anchor="middle" fill="${THEME.ink}">${esc(part.label || 'LCD 16×2')}</text>
  </g>`;
}

function drawBreadboard(x, y, w, h) {
  const cols = 12;
  const rows = 5;
  const cw = (w - 40) / cols;
  const rh = (h - 40) / rows;
  let holes = '';
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const hx = x + 20 + c * cw + cw / 2;
      const hy = y + 20 + r * rh + rh / 2;
      holes += `<rect x="${hx - 3}" y="${hy - 3}" width="6" height="6" rx="1" fill="#94a3b8"/>`;
    }
  }
  return `
  <g>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect x="${x + 8}" y="${y + 6}" width="${w - 16}" height="5" fill="#fca5a5" opacity="0.6"/>
    <rect x="${x + 8}" y="${y + h - 11}" width="${w - 16}" height="5" fill="#93c5fd" opacity="0.6"/>
    <line x1="${x + w / 2}" y1="${y + 16}" x2="${x + w / 2}" y2="${y + h - 16}" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="4 3"/>
    ${holes}
    <text x="${x + 12}" y="${y + 14}" font-size="8" fill="#b91c1c">+</text>
    <text x="${x + 12}" y="${y + h - 3}" font-size="8" fill="#1d4ed8">−</text>
  </g>`;
}

/* Peta pin Arduino Uno — dipakai pelajaran pinout. */
function drawPinMap(x, y, w) {
  const digital = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
  const analog = ['GND', 'GND', '5V', '3.3V', 'A0', 'A1', 'A2', 'A3', 'A4', 'A5'];
  const pwm = new Set(['3', '5', '6', '9', '10', '11']);
  let s = '';
  const startX = x + 10;
  digital.forEach((p, i) => {
    const px = startX + i * ((w - 20) / digital.length);
    const isPwm = pwm.has(p);
    const isSerial = p === '0' || p === '1';
    const fill = isPwm ? '#22c55e' : isSerial ? '#f59e0b' : '#cbd5e1';
    s += `<rect x="${px}" y="${y}" width="${(w - 20) / digital.length - 2}" height="20" rx="3" fill="${fill}" stroke="${THEME.ink}" stroke-width="0.8"/>`;
    s += `<text x="${px + ((w - 20) / digital.length - 2) / 2}" y="${y + 14}" font-size="9" font-weight="700" text-anchor="middle" fill="${THEME.ink}">${isPwm ? '~' : ''}${p}</text>`;
  });
  s += `<text x="${x + 10}" y="${y - 6}" font-size="10" font-weight="700" fill="${THEME.ink}">Digital (hijau = PWM ~, oranye = Serial RX/TX)</text>`;
  analog.forEach((p, i) => {
    const px = startX + i * ((w - 20) / analog.length);
    const isAnalog = /^A\d$/.test(p);
    s += `<rect x="${px}" y="${y + 40}" width="${(w - 20) / analog.length - 2}" height="20" rx="3" fill="${isAnalog ? '#3b82f6' : '#e2e8f0'}" stroke="${THEME.ink}" stroke-width="0.8"/>`;
    s += `<text x="${px + ((w - 20) / analog.length - 2) / 2}" y="${y + 54}" font-size="8" font-weight="700" text-anchor="middle" fill="${isAnalog ? '#fff' : THEME.ink}">${p}</text>`;
  });
  s += `<text x="${x + 10}" y="${y + 34}" font-size="10" font-weight="700" fill="${THEME.ink}">Analog &amp; Power</text>`;
  return s;
}

/* ---------------------------- Rangkaian utuh ---------------------------- */

/* Gambar papan Arduino + komponen + kabel. */
function circuitSVG(spec, opts) {
  const o = opts || {};
  const sp = spec || {};
  const parts = Array.isArray(sp.parts) ? sp.parts : [];
  const W = o.width || 640;

  const hasBreadboard = parts.some((p) => p.k === 'breadboard');
  const hasPinMap = parts.some((p) => p.k === 'pinmap');
  const partsOnly = parts.filter((p) => p.k !== 'breadboard' && p.k !== 'pinmap');

  /* Hitung tinggi berdasarkan isi sebenarnya (komponen bisa berbaris banyak). */
  const perRowCalc = Math.max(1, Math.floor((W - 80) / 150));
  const partRows = Math.ceil(Math.max(1, parts.length ? partsOnly.length : 0) / perRowCalc);
  const H = 90 + (hasPinMap ? 90 : 0) + (hasBreadboard ? 130 : 0) + partRows * 110 + 30;

  let body = '';
  let key = 0;

  /* Papan Arduino */
  if (!hasPinMap) {
    body += `
    <g>
      <rect x="24" y="20" width="264" height="44" rx="6" fill="${THEME.board}" stroke="${THEME.boardEdge}" stroke-width="2"/>
      <text x="34" y="48" font-size="15" font-weight="800" fill="#ecfdf5">Arduino Uno</text>
      <text x="248" y="48" font-size="10" fill="#a7f3d0">USB</text>
      <rect x="196" y="30" width="30" height="24" rx="3" fill="#334155"/>
    </g>`;
  }

  if (hasPinMap) {
    body += drawPinMap(24, 60, W - 48);
  }

  /* Breadboard */
  let bbBottom = 90;
  if (hasBreadboard) {
    body += drawBreadboard(24, 90, W - 48, 110);
    bbBottom = 200;
  }

  /* Komponen berbaris */
  const perRow = perRowCalc;
  partsOnly.forEach((p, i) => {
    const col = i % perRow;
    const row = Math.floor(i / perRow);
    const x = 90 + col * 150;
    const y = bbBottom + 60 + row * 110;
    if (p.k === 'led') body += drawLed(x, y, p);
    else if (p.k === 'resistor') body += drawResistor(x, y, p);
    else if (p.k === 'button') body += drawButton(x, y, p);
    else if (p.k === 'pot') body += drawPot(x, y, p);
    else if (p.k === 'buzzer') body += drawBuzzer(x, y, p);
    else if (p.k === 'ldr') body += drawLdr(x, y, p);
    else if (p.k === 'servo') body += drawServo(x, y, p);
    else if (p.k === 'ultrasonic') body += drawUltrasonic(x, y, p);
    else if (p.k === 'lcd') body += drawLcd(x, y, p);
    else if (p.k === 'text') {
      body += `<text x="${x - 40}" y="${y}" font-size="12" font-weight="700" fill="${THEME.ink}">${esc(p.v)}</text>`;
    }
    key++;
  });

  /* Kabel deklaratif: { from, to, label, kind } digambar sebagai busur berlabel. */
  const wires = Array.isArray(sp.wires) ? sp.wires : [];
  wires.forEach((wi, i) => {
    const color = wi.kind === 'power' ? THEME.power : wi.kind === 'gnd' ? THEME.gnd : THEME.signal;
    const y1 = 316 + i * 16;
    body += `
    <g>
      <line x1="60" y1="${y1}" x2="${W - 60}" y2="${y1}" stroke="${color}" stroke-width="2" opacity="0.9"/>
      <circle cx="60" cy="${y1}" r="3.5" fill="${color}"/>
      <circle cx="${W - 60}" cy="${y1}" r="3.5" fill="${color}"/>
      <text x="${W / 2}" y="${y1 - 4}" font-size="10" font-weight="600" text-anchor="middle" fill="${THEME.ink}">${esc(wi.from || '')} → ${esc(wi.to || '')}${wi.label ? ' · ' + esc(wi.label) : ''}</text>
    </g>`;
  });

  const noteH = sp.note ? 26 : 0;
  /* Beri ruang ekstra: label komponen butuh ~110px per baris setelah breadboard. */
  const partsBottom = bbBottom + 60 + Math.max(0, partRows - 1) * 110 + 60;
  const wiresBottom = 316 + wires.length * 16 + 20;
  const totalH = Math.max(H, partsBottom, wiresBottom) + noteH;

  const note = sp.note
    ? `<text x="24" y="${totalH - 8}" font-size="11" font-style="italic" fill="${THEME.muted}">${esc(sp.note)}</text>`
    : '';

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${totalH}" width="100%" role="img" aria-label="${esc(o.alt || 'Diagram rangkaian Arduino')}" style="max-width:${W}px;font-family:system-ui,sans-serif;background:#fff;border-radius:10px">
  <rect width="${W}" height="${totalH}" fill="#ffffff"/>
  ${body}
  ${note}
</svg>`;
  return svg;
}

export { circuitSVG, drawPinMap, LED_COLORS };
