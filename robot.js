/* CodeDuo — robot companion "Bibit". Head kanvas = port desain robot-heads.
 *
 * Head (bahasa bentuk): kotak TV glossy, layar LED-matrix, mata/mulut LED,
 * antena pegas + bohlam, 9 state. Ini PORT MURNI gaya robot-heads —
 * github.com/fayazara/robot-heads — MIT © Fayaz Ahmed (@fayazara).
 * Tidak ada kode atau aset pihak ketiga yang disalin; hanya idiom bentuknya.
 * Paket robot-heads sendiri adalah komponen React + bundler, sedangkan CodeDuo
 * = PWA vanilla tanpa framework & tanpa build, wajib offline (nol request aset
 * eksternal). Karena itu yang dipakai: port native tanpa dependensi runtime.
 *
 * API:
 *   ROBOT_NAME       — nama teman
 *   ROBOT_MOODS      — mood internal (dipakai robotSVG + tes lama)
 *   ROBOT_STATES     — 9 state robot-heads (idle/thinking/…/sleeping)
 *   robotSVG(m)      — head SVG (fallback + maskot brand/favicon)
 *   robotSay(c,s)    — satu baris dialog Indonesia (deterministik per seed)
 *   robotReact(h)    — pilih mood dari hasil latihan
 *   stateFromMood(m) — petakan mood → state kanvas
 *   ledMatrixFor(s)  — grid wajah 22×14 nilai float 0..1 utk state s (murni, Node-testable)
 *   mountRobotHead(el, o) — pasang head kanvas + loop bersama (DOM, aman utk jsdom-less)
 *
 * Animasi: tiap state HIDUP (bukan cuma idle). Mesin gerak murni `_rhFrame(state,t,seed)`
 * menurunkan kedip/lirik/sisi/goyang; `_rhFaceGrid(state,f)` menyusun wajah LED tiap state
 * (mata blok, equaliser, mulut, scan beam, progress, `^ ^`, `X X`, huruf z). Deterministik.
 *
 * Kode render (rAF/DOM) hanya jalan lewat mountRobotHead — require di Node aman.
 */
'use strict';

const ROBOT_NAME = 'Bibit';
const ROBOT_MOODS = ['idle', 'happy', 'thinking', 'excited', 'sad', 'celebrate'];

/* 9 state komponen robot-heads (dipakai head kanvas). */
const ROBOT_STATES = [
  'idle', 'thinking', 'searching', 'listening', 'speaking',
  'working', 'happy', 'error', 'sleeping',
];

/* Palet inline — SVG berdiri sendiri (juga dipakai sebagai favicon/icon.svg). */
const INK = '#3c3c3c';
const SHELL = '#58cc02';
const SHELL_DARK = '#46a302';
const FACE = '#f7f9fb';
const GOLD = '#ffc800';
const BLUSH = '#ff9a9a';

const STAR = 'M0 -7 L1.8 -1.8 L7 0 L1.8 1.8 L0 7 L-1.8 1.8 L-7 0 L-1.8 -1.8 Z';

function eyesFor(mood) {
  switch (mood) {
    case 'happy':
      return '<path class="robot__eye" d="M42 60 q6 -9 12 0" fill="none" stroke="' + INK + '" stroke-width="3.5" stroke-linecap="round"/>'
        + '<path class="robot__eye" d="M66 60 q6 -9 12 0" fill="none" stroke="' + INK + '" stroke-width="3.5" stroke-linecap="round"/>';
    case 'thinking':
      return '<circle class="robot__eye" cx="48" cy="58" r="5.5" fill="' + INK + '"/>'
        + '<circle class="robot__eye" cx="72" cy="57" r="4" fill="' + INK + '"/>'
        + '<circle class="robot__glint" cx="46.5" cy="56" r="1.6" fill="' + FACE + '"/>';
    case 'excited':
      return '<circle class="robot__eye" cx="48" cy="58" r="7" fill="' + INK + '"/>'
        + '<circle class="robot__eye" cx="72" cy="58" r="7" fill="' + INK + '"/>'
        + '<circle class="robot__glint" cx="46" cy="55.5" r="2" fill="' + FACE + '"/>'
        + '<circle class="robot__glint" cx="70" cy="55.5" r="2" fill="' + FACE + '"/>';
    case 'sad':
      return '<circle class="robot__eye" cx="48" cy="59" r="5.5" fill="' + INK + '"/>'
        + '<circle class="robot__eye" cx="72" cy="59" r="5.5" fill="' + INK + '"/>'
        + '<path class="robot__brow" d="M42 48 l12 4" fill="none" stroke="' + INK + '" stroke-width="3" stroke-linecap="round"/>'
        + '<path class="robot__brow" d="M78 48 l-12 4" fill="none" stroke="' + INK + '" stroke-width="3" stroke-linecap="round"/>';
    case 'celebrate':
      return '<path class="robot__eye robot__eye--gold" transform="translate(48 58)" d="' + STAR + '" fill="' + GOLD + '"/>'
        + '<path class="robot__eye robot__eye--gold" transform="translate(72 58)" d="' + STAR + '" fill="' + GOLD + '"/>';
    default: /* idle */
      return '<circle class="robot__eye" cx="48" cy="58" r="5.5" fill="' + INK + '"/>'
        + '<circle class="robot__eye" cx="72" cy="58" r="5.5" fill="' + INK + '"/>';
  }
}

function mouthFor(mood) {
  switch (mood) {
    case 'happy':
      return '<path class="robot__mouth" d="M50 70 q10 9 20 0" fill="none" stroke="' + INK + '" stroke-width="3.5" stroke-linecap="round"/>';
    case 'thinking':
      return '<path class="robot__mouth" d="M55 73 h10" fill="none" stroke="' + INK + '" stroke-width="3.5" stroke-linecap="round"/>';
    case 'excited':
      return '<ellipse class="robot__mouth" cx="60" cy="72" rx="6" ry="5.5" fill="' + INK + '"/>';
    case 'sad':
      return '<path class="robot__mouth" d="M50 75 q10 -9 20 0" fill="none" stroke="' + INK + '" stroke-width="3.5" stroke-linecap="round"/>';
    case 'celebrate':
      return '<path class="robot__mouth" d="M48 69 q12 12 24 0 Z" fill="' + INK + '"/>';
    default: /* idle */
      return '<path class="robot__mouth" d="M52 72 h16" fill="none" stroke="' + INK + '" stroke-width="3.5" stroke-linecap="round"/>';
  }
}

function extrasFor(mood) {
  if (mood === 'happy' || mood === 'celebrate') {
    return '<circle class="robot__blush" cx="36" cy="68" r="5" fill="' + BLUSH + '" opacity="0.55"/>'
      + '<circle class="robot__blush" cx="84" cy="68" r="5" fill="' + BLUSH + '" opacity="0.55"/>';
  }
  return '';
}

function robotSVG(mood) {
  const m = ROBOT_MOODS.includes(mood) ? mood : 'idle';
  return '<svg class="robot robot--' + m + '" data-mood="' + m + '" viewBox="0 0 120 120" role="img" '
    + 'aria-label="' + ROBOT_NAME + ' — robot teman belajar" xmlns="http://www.w3.org/2000/svg">'
    + '<g class="robot__antenna">'
    + '<line x1="60" y1="30" x2="60" y2="16" stroke="' + SHELL_DARK + '" stroke-width="4" stroke-linecap="round"/>'
    + '<circle class="robot__bulb" cx="60" cy="13" r="5.5" fill="' + GOLD + '" stroke="' + SHELL_DARK + '" stroke-width="2.5"/>'
    + '</g>'
    + '<rect class="robot__shell" x="22" y="28" width="76" height="68" rx="22" fill="' + SHELL + '" stroke="' + SHELL_DARK + '" stroke-width="3"/>'
    + '<rect class="robot__face" x="33" y="40" width="54" height="44" rx="15" fill="' + FACE + '"/>'
    + '<g class="robot__eyes">' + eyesFor(m) + '</g>'
    + '<g class="robot__mouth-wrap">' + mouthFor(m) + '</g>'
    + extrasFor(m)
    + '</svg>';
}

const SAY = {
  greet: [
    'Halo! Aku Bibit, teman belajarmu. Siap nge-code?',
    'Eh, kamu balik! Aku udah nyalain bengkelnya.',
    'Ayok lanjut. Satu pelajaran sehari aja udah bussin.',
    'Senang ketemu lagi! Yuk lanjutkan langkah kodingmu.',
  ],
  start: [
    'Gas! Baca soalnya pelan-pelan ya.',
    'Aku pantau dari sini. Santai aja.',
    'Fokus dikit, nanti kita rayain.',
    'Pahami alur kodenya, kamu pasti bisa pecahin!',
  ],
  correct: [
    'Bener! Kepalamu lebih cepat dari prosesorku.',
    'Sip, mantap. Lanjut!',
    'Itu dia. Jangan berhenti.',
    'Jawaban tepat! Logika kodingmu makin tajam.',
    'Mantap jiwa! Bebas bug dan rapi.',
  ],
  wrong: [
    'Hampir. Coba baca ulang soalnya.',
    'Belum tepat, tenang — error itu guru terbaik.',
    'Salah itu normal. Yang penting lanjut.',
    'Jangan khawatir, coba amati detail kodenya sekali lagi.',
  ],
  'lost-heart': [
    'Nyawa habis... tapi urutan soalnya bakal beda. Coba lagi!',
    'Ups, kita mulai ulang dari awal. Aku temenin.',
    'Tarik napas dulu. Latihan ulang bikin otak makin paham kok.',
  ],
  done: [
    'Pelajaran tuntas! Aku bangga.',
    'YES! Pelajaran tuntas. Kepalamu makin terang.',
    'Tuntas! Sekarang istirahat, nanti lanjut lagi.',
    'Level ini berhasil kamu taklukkan! Keren banget.',
  ],
  streak: [
    'Streak nambah! Jangan putus rantainya.',
    'Hari ini kehitung. Besok balik lagi ya!',
    'Apinya makin membara! Pertahankan konsistensimu.',
  ],
  'idle-home': [
    'Pilih topik yang mau dipelajari!',
    'Yuk mulai satu modul dulu!',
    'Siap eksplorasi tantangan baru?',
  ],
  'idle-topic': [
    'Pilih level yang terbuka ya.',
    'Ayo kuasai topik ini bareng!',
    'Satu level lagi menuju tuntas!',
  ],
  'idle-lesson': [
    'Fokus ke pertanyaannya!',
    'Kamu pasti bisa pecahin.',
    'Amati alur kodenya ya.',
  ],
  slow: [
    'Perlu bantuan? Baca lagi kodenya.',
    'Tenang, teliti ya.',
  ],
  wake: [
    'Aku bangun! Siap ngoding.',
    'Online lagi! Yuk lanjut!',
  ],
  tap: [
    'Siap bantu! Semangat!',
    'Yuk, kita pecahin kodenya!',
    'Fokus ya, kamu pasti bisa!',
  ],
  'face-thinking': [
    'Hmm... lagi mikir logikanya...',
    'Telaah kondisinya bareng yuk.',
  ],
  'face-searching': [
    'Mencari kata kunci yang pas...',
    'Cari tag atau fungsi yang cocok.',
  ],
  'face-working': [
    'Fokus penuh! Simulasi kode.',
    'Logikamu udah di arah tepat!',
  ],
  'face-listening': [
    'Aku simak, ketik aja dulu!',
    'Coba idemu, jangan takut salah.',
  ],
  'face-speaking': [
    'Perhatikan variabel dan urutan ya!',
    'Cek kurung dan tanda bacanya.',
  ],
  'face-sleeping': [
    'Zzz... sentuh aku buat bangunin.',
  ],
  'type-code': [
    'Perhatikan parameter dan return ya!',
    'Pastikan fungsi mengembalikan nilai.',
  ],
  'type-fill': [
    'Isi keyword yang paling tepat.',
    'Amati sintaks di sekelilingnya.',
  ],
  'type-arrange': [
    'Susun blok kode berurutan.',
    'Inisialisasi dulu, lalu output.',
  ],
  'type-preview': [
    'Ketik kodenya, cek preview!',
    'Pastikan tag HTML/CSS tertulis rapi.',
  ],
  'type-mc': [
    'Eliminasi opsi yang janggal dulu.',
    'Pilih opsi yang paling tepat.',
  ],
  'heart-low': [
    'Awas, nyawa sisa 1 hati!',
    'Santai aja, lebih teliti ya.',
  ],
  idle: [
    'Aku di sini kalau kamu butuh.',
    'Yuk lanjut koding!',
  ],
};

function robotSay(context, seed) {
  const lines = SAY[context] || SAY.idle;
  const i = Number.isFinite(seed) ? Math.abs(Math.floor(seed)) % lines.length : 0;
  return lines[i];
}

function robotReact(info) {
  const s = info || {};
  if (s.phase === 'done') return 'celebrate';
  if (s.correct === false && s.hearts <= 0) return 'sad';
  if (s.correct) return 'happy';
  if (s.correct === false) return 'thinking';
  return 'idle';
}

/* ================= Head kanvas — port robot-heads (murni + DOM) ================= */

/* LED matrix asli robot-heads: 22 kolom × 14 baris. */
const RH_COLS = 22;
const RH_ROWS = 14;
const RH_EYE_A = 6;    /* kolom blok mata kiri */
const RH_EYE_B = 13;   /* kolom blok mata kanan */
const RH_EYE_Y = 5;    /* baris dasar mata */
/* glif wajah (port persis dari robot-heads) */
const RH_GLYPH_HAPPY = ['..#..', '.#.#.', '#...#'];               /* mata ^ ^ */
const RH_GLYPH_X = ['#...#', '.#.#.', '..#..', '.#.#.', '#...#']; /* mata X X */
const RH_GLYPH_Z = ['####', '..#.', '.#..', '####'];              /* z besar */
const RH_GLYPH_Z_SM = ['###', '.#.', '###'];                      /* z kecil */
const RH_GLYPH_SMILE = ['#......#', '.######.'];                  /* mulut senyum */

/* mood → state robot-heads (bentuk kanvas) */
const MOOD_TO_STATE = {
  idle: 'idle',
  happy: 'happy',
  thinking: 'thinking',
  excited: 'speaking',
  sad: 'error',
  celebrate: 'happy',
};

function stateFromMood(mood) {
  return MOOD_TO_STATE[mood] || 'idle';
}

/* --- grid murni: nilai 0..1 = kecerahan LED (0 = mati) --- */
function _rhBlank() {
  const g = [];
  for (let y = 0; y < RH_ROWS; y++) g.push(new Array(RH_COLS).fill(0));
  return g;
}
/* set dengan MERGE-MAX (tumpukan sel ambil yang paling terang — sama seperti sumber) */
function _rhSet(g, x, y, v) {
  if (x < 0 || x >= RH_COLS || y < 0 || y >= RH_ROWS) return;
  let val = Number.isFinite(v) ? v : 1;
  if (val <= 0) return;
  if (val > 1) val = 1;             /* kecerahan LED selalu ≤ 1 (clamp: noise bisa 1+ε) */
  if (val > g[y][x]) g[y][x] = val;
}
function _rhRect(g, x, y, w, h, v) {
  for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) _rhSet(g, x + i, y + j, v);
}
/* gambar glif string: '#' = penuh, '+' = redup separuh */
function _rhGlyph(g, x, y, rows, v) {
  const base = Number.isFinite(v) ? v : 1;
  rows.forEach((row, dy) => {
    for (let dx = 0; dx < row.length; dx++) {
      const ch = row[dx];
      if (ch === '#') _rhSet(g, x + dx, y + dy, base);
      else if (ch === '+') _rhSet(g, x + dx, y + dy, base * 0.5);
    }
  });
}
/* noise halus (port fungsi Ft robot-heads) — dipakai equaliser & mulut */
function _rhNoise(n) {
  return 0.5 + 0.25 * Math.sin(n * 1.7) + 0.15 * Math.sin(n * 3.1 + 1.3) + 0.1 * Math.sin(n * 5.3 + 4.1);
}

/* dua blok mata: kedip (tinggi menyusut), pandangan, mode "terkulai" (thinking).
 * f = { lookX, lookY, blink }; s = tinggi mata (default 4); e = kecerahan; o = geser baris */
function _rhEyes(g, f, s, e, o, reduce) {
  const c = f || {};
  const lookX = Math.round(Number.isFinite(c.lookX) ? c.lookX : 0);
  const lookY = Math.round(Number.isFinite(c.lookY) ? c.lookY : 0) + (Number.isFinite(o) ? o : 0);
  const size = Number.isFinite(s) ? s : 4;
  const bright = Number.isFinite(e) ? e : 1;
  const red = Number.isFinite(reduce) ? reduce : 0;
  const blink = Number.isFinite(c.blink) ? c.blink : 0;
  const l = Math.max(1, Math.round(size - (size - 1) * blink)); /* 4 saat melek → 1 saat terpejam */
  const h = RH_EYE_Y + Math.floor((4 - size) / 2) + lookY + Math.floor((size - l) / 2);
  for (const x0 of [RH_EYE_A, RH_EYE_B]) {
    if (red > 0 && l > 1) { /* thinking: sisi atas meredup → mata "menengadah" */
      _rhRect(g, x0 + lookX, h, 3, 1, bright * (1 - red));
      _rhRect(g, x0 + lookX, h + 1, 3, l - 1, bright);
    } else {
      _rhRect(g, x0 + lookX, h, 3, l, bright);
    }
  }
}

/* grid wajah tiap state (port Xt). f = { lookX, lookY, blink, time, side, seed } */
function _rhFaceGrid(state, f) {
  const s = ROBOT_STATES.includes(state) ? state : 'idle';
  const g = _rhBlank();
  const t = f || {};
  const time = Number.isFinite(t.time) ? t.time : 0;
  const side = t.side === -1 ? -1 : 1;
  switch (s) {
    case 'thinking': {
      _rhEyes(g, { lookX: (t.lookX || 0) + side * 1.4, lookY: (t.lookY || 0) - 1.2, blink: t.blink || 0 }, 3, 1, 0, 0.45);
      for (let i = 0; i < 3; i++) { /* tiga titik berdenyut bergantian */
        const ph = (time * 1.6 - i * 0.22) % 1;
        const o = ph < 0.35 ? Math.sin(ph / 0.35 * Math.PI) : 0;
        _rhRect(g, 6 + i * 4, 11 - (o > 0.5 ? 1 : 0), 2, 2, 0.28 + 0.72 * o);
      }
      break;
    }
    case 'searching': {
      _rhEyes(g, t);
      const beam = (Math.sin(time * 1.6 + 0.4) * 0.5 + 0.5) * (RH_COLS - 1);
      const dir = Math.cos(time * 1.6 + 0.4) > 0 ? -1 : 1;
      for (let a = 0; a < 5; a++) {
        const x0 = Math.round(beam + dir * a);
        const l = 0.32 * (1 - a / 5);
        for (let y = 0; y < RH_ROWS; y++) _rhSet(g, x0, y, l);
      }
      break;
    }
    case 'listening': {
      _rhEyes(g, t, 4, 1, -1);
      for (let i = 0; i < 12; i++) { /* equaliser 12 bar */
        const env = 1 - Math.abs(i - 5.5) / 7;
        const o = _rhNoise(time * 7 + i * 1.9 + (t.seed || 0) * 10) * env;
        const hh = Math.max(1, Math.round(o * 4));
        for (let a = 0; a < hh; a++) _rhSet(g, 5 + i, 12 - a, 0.75 - a * 0.12);
      }
      break;
    }
    case 'speaking': {
      _rhEyes(g, t, 4, 1, -1);
      const open = Math.max(0, Math.sin(time * 2.1) * 0.5 + Math.sin(time * 3.7 + 1) * 0.5);
      for (let i = 0; i < 8; i++) { /* mulut 8 kolom, tinggi ikut suara */
        const env = 1 - Math.abs(i - 3.5) / 5;
        const o = _rhNoise(time * 11 + i * 0.9) * env * (0.35 + open);
        const hgt = o > 0.55 ? 3 : o > 0.28 ? 2 : 1;
        const row = hgt === 3 ? 10 : 11;
        _rhRect(g, 7 + i, row, 1, hgt, 1);
      }
      break;
    }
    case 'working': {
      _rhEyes(g, { lookX: t.lookX || 0, lookY: (t.lookY || 0) + 1, blink: t.blink || 0 }, 2, 1, 0);
      const filled = Math.round((((time / 2.6) % 1)) * 12);
      for (let i = 0; i < 12; i++) _rhSet(g, 5 + i, 11, i < filled ? 0.95 : 0.16); /* progress bar */
      _rhSet(g, 4, 11, 0.4); _rhSet(g, 17, 11, 0.4); /* ujung track */
      break;
    }
    case 'happy': {
      const bob = Math.round(Math.max(0, Math.sin(time * 5.6)) * -1); /* 0 / -1 */
      _rhGlyph(g, RH_EYE_A - 1, RH_EYE_Y + bob, RH_GLYPH_HAPPY, 1);
      _rhGlyph(g, RH_EYE_B - 1, RH_EYE_Y + bob, RH_GLYPH_HAPPY, 1);
      _rhGlyph(g, 7, 10 + bob, RH_GLYPH_SMILE, 0.9);
      break;
    }
    case 'error': {
      const b = Math.sin(time * 7) > -0.6 ? 1 : 0.55; /* X berkedip */
      _rhGlyph(g, RH_EYE_A - 1, 4, RH_GLYPH_X, b);
      _rhGlyph(g, RH_EYE_B - 1, 4, RH_GLYPH_X, b);
      for (let i = 0; i < 8; i++) _rhSet(g, 7 + i, i % 2 ? 11 : 12, 0.8); /* garis rusak */
      break;
    }
    case 'sleeping': {
      for (const x0 of [RH_EYE_A, RH_EYE_B]) { /* mata pejam (baris datar) */
        _rhSet(g, x0 - 1, 7, 0.32); _rhRect(g, x0, 8, 3, 1, 0.42); _rhSet(g, x0 + 3, 7, 0.32);
      }
      for (const [off, big] of [[0, true], [1.1, false]]) { /* dua z naik & memudar */
        const ph = (((time + off) % 2.2)) / 2.2;
        const iv = Math.sin(ph * Math.PI) * 0.6;
        const yy = Math.round(5 - ph * 5), xx = 16 + Math.round(ph * 2);
        _rhGlyph(g, xx, yy, big ? RH_GLYPH_Z : RH_GLYPH_Z_SM, iv);
      }
      break;
    }
    default: _rhEyes(g, t); /* idle */
  }
  return g;
}

/* matriks LED state pada pose diam (murni, Node-testable) */
function ledMatrixFor(state) {
  const s = ROBOT_STATES.includes(state) ? state : 'idle';
  return _rhFaceGrid(s, { lookX: 0, lookY: 0, blink: 0, time: 0.4, side: 1, seed: 0 });
}

/* nada per state: warna LED + bohlam + amplitudo antena */
/* led = warna layar LED state (dipilih agar kontras di kaca pucat CodeDuo);
 * bulb = warna bohlam antena persis robot-heads (Ot): idle/speaking/sleeping krem,
 * thinking amber, searching cyan, listening hijau, working biru, happy pink, error merah. */
const RH_META = {
  idle:      { led: INK,        bulb: '#fffaf0', amp: 1.0, tilt: 0.02, nod: 0.012 },
  thinking:  { led: '#e08a00',  bulb: '#ffb840', amp: 0.6, tilt: 0.07, nod: -0.018 },
  searching: { led: '#0aa2c0',  bulb: '#5adcff', amp: 1.2, tilt: 0.00, nod: 0.006 },
  listening: { led: '#2fae3f',  bulb: '#60ff96', amp: 0.5, tilt: -0.05, nod: 0.015 },
  speaking:  { led: INK,        bulb: '#fffaf0', amp: 1.1, tilt: 0.00, nod: 0.022 },
  working:   { led: '#5f8fe0',  bulb: '#6ea0ff', amp: 1.6, tilt: 0.03, nod: 0.016 },
  happy:     { led: '#e0559c',  bulb: '#ff82c8', amp: 1.4, tilt: 0.00, nod: -0.028 },
  error:     { led: '#e5484d',  bulb: '#ff3c32', amp: 1.8, tilt: 0.00, nod: 0.000 },
  sleeping:  { led: '#9aa0a6',  bulb: '#fffaf0', amp: 0.2, tilt: 0.12, nod: 0.006 },
};
const RH_LABEL = {
  idle: 'diam', thinking: 'berpikir', searching: 'mencari', listening: 'mendengar',
  speaking: 'bicara', working: 'bekerja', happy: 'senang', error: 'error', sleeping: 'tidur',
};
/* warna LED tiap state (dibocorkan untuk inspeksi/test; sumbernya RH_META.led) */
const RH_COLORS = Object.keys(RH_META).reduce((o, k) => { o[k] = RH_META[k].led; return o; }, {});

/* #rrggbb + alpha → rgba() (bloom LED) */
function _rhRGBA(hex, a) {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map((c) => c + c).join('') : h, 16);
  return 'rgba(' + ((n >> 16) & 255) + ',' + ((n >> 8) & 255) + ',' + (n & 255) + ',' + a + ')';
}

function _rhRound(ctx, x, y, w, h, r) {
  const rr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y, x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x, y + h, rr);
  ctx.arcTo(x, y + h, x, y, rr);
  ctx.arcTo(x, y, x + w, y, rr);
  ctx.closePath();
}

/* ---- Mesin gerak murni (Node-testable) ----
 * Semua nilai diturunkan dari (state, t, seed) tanpa DOM. t dalam milidetik.
 * Yang diturunkan di sini hanya gerak tubuh & mata (kedip, lirik, sisi, goyang);
 * isi wajah LED tiap state disusun `_rhFaceGrid` (equaliser, mulut, scan, progress, z). */

/* hash deterministik string → 0..1 (FNV-1a) untuk seed per-head */
function _rhHash(str) {
  let h = 2166136261 >>> 0;
  const s = String(str == null ? '' : str);
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; }
  return (h >>> 0) / 4294967296;
}

/* tempo per state. blink/mouth = detik (0 = mati); glance = amplitudo lirik;
 * scan = laju sapu kolom/detik; bob = skala goyang; hop/shake/zzz = 0..1. */
const RH_MOTION = {
  idle:      { blink: 3.8, glance: 0.85, mouth: 0,   scan: 0,   bob: 1.00, hop: 0,   shake: 0, zzz: 0 },
  thinking:  { blink: 2.8, glance: 0.30, mouth: 0,   scan: 0,   bob: 0.60, hop: 0,   shake: 0, zzz: 0 },
  searching: { blink: 2.6, glance: 0.20, mouth: 0,   scan: 3.2, bob: 1.20, hop: 0,   shake: 0, zzz: 0 },
  listening: { blink: 2.2, glance: 0.20, mouth: 0,   scan: 0,   bob: 0.50, hop: 0,   shake: 0, zzz: 0 },
  speaking:  { blink: 2.0, glance: 0.25, mouth: 5.0, scan: 0,   bob: 1.10, hop: 0,   shake: 0, zzz: 0 },
  working:   { blink: 1.8, glance: 0.15, mouth: 0,   scan: 0,   bob: 1.60, hop: 0.3, shake: 0, zzz: 0 },
  happy:     { blink: 0,   glance: 0,    mouth: 0,   scan: 0,   bob: 1.40, hop: 1,   shake: 0, zzz: 0 },
  error:     { blink: 0,   glance: 0,    mouth: 0,   scan: 0,   bob: 1.80, hop: 0,   shake: 1, zzz: 0 },
  sleeping:  { blink: 0,   glance: 0,    mouth: 0,   scan: 0,   bob: 0.20, hop: 0,   shake: 0, zzz: 1 },
};
function _rhMotionFor(state) {
  return RH_MOTION[ROBOT_STATES.includes(state) ? state : 'idle'] || RH_MOTION.idle;
}

/* parameter animasi satu frame (murni). Dipakai _rhDraw + diuji di test.js. */
function _rhFrame(state, t, seed) {
  const s = ROBOT_STATES.includes(state) ? state : 'idle';
  const m = _rhMotionFor(s);
  const ms = Number.isFinite(t) ? t : 0;
  const sd = Number.isFinite(seed) ? seed : 0;
  const tt = ms / 1000;

  /* kedip: turun 0 lalu naik (crossfade mata→garis) */
  let blink = 1;
  if (m.blink > 0) {
    const period = m.blink * 1000;
    const phase = ((ms + sd * period * 0.7) % period + period) % period;
    if (phase < 130) blink = 1 - phase / 130;         /* menutup */
    else if (phase < 215) blink = (phase - 130) / 85; /* membuka */
  }
  /* lirik: dua sinus → geser mata satuan kolom */
  const gl = m.glance > 0 ? (Math.sin(ms / 900 + sd * 6.28) * 0.6 + Math.sin(ms / 2400 + sd * 3.1) * 0.4) * m.glance : 0;
  const glance = Math.max(-1, Math.min(1, Math.round(gl)));
  /* mulut: geser baris bawah ±1 (bicara/komentar) */
  const mw = m.mouth > 0 ? Math.sin(tt * m.mouth) : 0;
  const mouth = mw > 0.35 ? 1 : mw < -0.35 ? -1 : 0;
  /* sapu scan (searching): kolom bergerak L→R */
  const scan = m.scan > 0 ? ((tt * m.scan) % 1) * RH_COLS : 0;
  /* progress berdenyut (working) */
  const prog = 0.5 + 0.5 * Math.sin(tt * 1.6 + sd * 6.28);
  /* fase naik-turun huruf z (sleeping) */
  const zzz = m.zzz > 0 ? ((tt * 0.5 + sd) % 1) : 0;
  /* badan: lompat (happy) + gemetar (error) */
  const hop = m.hop > 0 ? Math.abs(Math.sin(tt * 4.2)) * m.hop : 0;
  const shake = m.shake > 0 ? Math.sin(tt * 20) * 0.035 * m.shake : 0;
  /* sisi pandang (thinking berganti arah tiap ~3–5 detik) */
  const side = (Math.floor(tt / (3 + sd * 2)) % 2) ? -1 : 1;
  /* kelopak: 0 = melek, 1 = terpejam (dipakai _rhEyes saat menyusut tinggi mata) */
  const closed = 1 - blink;
  return {
    blink: blink, glance: glance, mouth: mouth, scan: scan, prog: prog, zzz: zzz,
    bob: m.bob, hop: hop, shake: shake,
    lookX: glance, lookY: 0, side: side, closed: closed,
  };
}

/* gambar satu frame head. t dalam milidetik (0 = still pose). */
function _rhDraw(ctx, size, state, t, seed) {
  const W = size, H = size;
  const meta = RH_META[state] || RH_META.idle;
  const tt = t / 1000;
  const fr = _rhFrame(state, t, seed); /* parameter gerak state ini */
  ctx.clearRect(0, 0, W, H);

  const cx = W / 2;
  const cy = H / 2 + H * 0.045;
  const bw = W * 0.74, bh = H * 0.60, br = H * 0.15;
  const sway = Math.sin(tt * 3.1) * meta.amp * H * 0.012 * fr.bob;
  const tilt = meta.tilt + Math.sin(tt * 1.35 + seed * 6.28) * 0.02 * fr.bob;
  const nod = meta.nod * Math.sin(tt * 1.9 + seed * 6.28) * fr.bob;
  const shake = fr.shake;
  const hop = fr.hop * H * 0.02;

  ctx.save();
  ctx.translate(cx, cy - hop);
  ctx.rotate(tilt + shake);
  ctx.translate(0, nod * H);

  /* antena (pegas) + bohlam */
  ctx.strokeStyle = SHELL_DARK;
  ctx.lineWidth = Math.max(2, W * 0.028);
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(0, -bh * 0.5);
  ctx.quadraticCurveTo(sway, -bh * 0.5 - H * 0.13, sway * 1.5, -bh * 0.5 - H * 0.2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(sway * 1.5, -bh * 0.5 - H * 0.2, Math.max(3, W * 0.05), 0, Math.PI * 2);
  ctx.fillStyle = meta.bulb;
  ctx.fill();
  ctx.lineWidth = Math.max(1.4, W * 0.014);
  ctx.strokeStyle = SHELL_DARK;
  ctx.stroke();

  /* kuping knob */
  ctx.fillStyle = SHELL_DARK;
  _rhRound(ctx, -bw * 0.5 - W * 0.035, -bh * 0.14, W * 0.05, bh * 0.28, W * 0.02);
  ctx.fill();
  _rhRound(ctx, bw * 0.5 - W * 0.015, -bh * 0.14, W * 0.05, bh * 0.28, W * 0.02);
  ctx.fill();

  /* cangkang TV */
  _rhRound(ctx, -bw * 0.5, -bh * 0.5, bw, bh, br);
  ctx.fillStyle = SHELL;
  ctx.fill();
  ctx.lineWidth = Math.max(2, W * 0.022);
  ctx.strokeStyle = SHELL_DARK;
  ctx.stroke();

  /* layar (kaca) */
  const sw = bw * 0.72, sh = bh * 0.60;
  _rhRound(ctx, -sw * 0.5, -sh * 0.5, sw, sh, br * 0.7);
  ctx.fillStyle = FACE;
  ctx.fill();

  /* wajah LED: grid 22×14, tiap sel float 0..1 = kecerahan (port Xt robot-heads) */
  const grid = _rhFaceGrid(state, { lookX: fr.lookX, lookY: fr.lookY, blink: fr.closed, time: tt, side: fr.side, seed: seed });
  const cw = sw / RH_COLS, ch = sh / RH_ROWS;
  const pulse = 0.8 + 0.2 * Math.sin(tt * 4.5 + seed * 6.28);
  const led = meta.led;
  let lit = 0;

  ctx.fillStyle = led;
  for (let y = 0; y < RH_ROWS; y++) {
    for (let x = 0; x < RH_COLS; x++) {
      const v = grid[y][x];
      if (v <= 0.02) continue;
      const a = v * pulse;
      ctx.globalAlpha = a > 1 ? 1 : a;
      _rhRound(
        ctx,
        -sw * 0.5 + x * cw + cw * 0.15,
        -sh * 0.5 + y * ch + ch * 0.15,
        cw * 0.70, ch * 0.70, Math.min(cw, ch) * 0.3
      );
      ctx.fill();
      if (v > 0.5) lit++;
    }
  }
  ctx.globalAlpha = 1;
  /* bloom murah: satu gradien radial (bukan shadowBlur per-LED — jauh lebih ringan di HP) */
  if (lit > 0) {
    const grd = ctx.createRadialGradient(0, 0, sh * 0.08, 0, 0, sw * 0.85);
    grd.addColorStop(0, _rhRGBA(led, 0.24 * pulse));
    grd.addColorStop(1, _rhRGBA(led, 0));
    ctx.save();
    _rhRound(ctx, -sw * 0.5, -sh * 0.5, sw, sh, br * 0.7);
    ctx.clip();
    ctx.globalCompositeOperation = 'lighter';
    ctx.fillStyle = grd;
    ctx.fillRect(-sw * 0.5, -sh * 0.5, sw, sh);
    ctx.restore();
  }

  /* kilau kaca (glossy) */
  ctx.save();
  _rhRound(ctx, -sw * 0.5, -sh * 0.5, sw, sh, br * 0.7);
  ctx.clip();
  ctx.globalAlpha = 0.12;
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.moveTo(-sw * 0.5, -sh * 0.5);
  ctx.lineTo(sw * 0.1, -sh * 0.5);
  ctx.lineTo(-sw * 0.3, sh * 0.5);
  ctx.lineTo(-sw * 0.5, sh * 0.5);
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  ctx.restore();
}

/* loop bersama: satu rAF utk semua head, tidur saat tab hidden */
const _rhHeads = new Set();
let _rhLoop = null;
function _rhTick(now) {
  _rhHeads.forEach((h) => { try { h._draw(now); } catch (_) {} });
  _rhLoop = requestAnimationFrame(_rhTick);
}
function _rhEnsure() {
  if (_rhLoop == null && typeof requestAnimationFrame === 'function') _rhLoop = requestAnimationFrame(_rhTick);
}
if (typeof document !== 'undefined' && typeof document.addEventListener === 'function') {
  document.addEventListener('visibilitychange', () => {
    if (typeof document.hidden === 'undefined') return;
    if (document.hidden && _rhLoop != null) {
      cancelAnimationFrame(_rhLoop); _rhLoop = null;
    } else if (!document.hidden && _rhHeads.size) {
      _rhEnsure();
    }
  });
}

function mountRobotHead(el, opts) {
  if (!el || typeof el.appendChild !== 'function') return null;
  if (typeof document === 'undefined' || !document.createElement) return null;
  const o = opts || {};
  let canvas;
  try {
    canvas = document.createElement('canvas');
    if (!canvas || typeof canvas.getContext !== 'function') return null;
  } catch (_) { return null; }
  const ctx = canvas.getContext('2d');
  if (!ctx) return null; /* canvas tak didukung → pemanggil fallback ke SVG */

  const size = Number.isFinite(o.size) ? o.size : 92;
  const dpr = (typeof window !== 'undefined' && window.devicePixelRatio) || 1;
  const state = ROBOT_STATES.includes(o.state) ? o.state : 'idle';
  /* seed deterministik per state (hash nama state) → tiap state punya fase gerak sendiri,
   * bukan semua osilasi serempak. Caller boleh menimpanya lewat o.seed. */
  const seed = Number.isFinite(o.seed) ? o.seed : _rhHash(state);
  const reduced = typeof window !== 'undefined' && window.matchMedia
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  canvas.width = Math.round(size * dpr);
  canvas.height = Math.round(size * dpr);
  canvas.style.width = size + 'px';
  canvas.style.height = size + 'px';
  canvas.className = 'robot-head';
  canvas.setAttribute('role', 'img');
  canvas.setAttribute('aria-label', ROBOT_NAME + ' — ' + (RH_LABEL[state] || state));

  const head = {
    canvas: canvas,
    state: state,
    size: size,
    _draw: function (now) {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      _rhDraw(ctx, size, state, reduced ? 0 : now, seed);
    },
    setState: function (next) {
      if (!ROBOT_STATES.includes(next) || next === state) return;
      state = next;
      canvas.setAttribute('aria-label', ROBOT_NAME + ' — ' + (RH_LABEL[state] || state));
      head._draw(reduced ? 0 : (typeof performance !== 'undefined' ? performance.now() : 0));
    },
    destroy: function () {
      _rhHeads.delete(head);
      if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
      if (_rhHeads.size === 0 && _rhLoop != null) {
        cancelAnimationFrame(_rhLoop); _rhLoop = null;
      }
    },
  };

  el.appendChild(canvas);
  head._draw(reduced ? 0 : (typeof performance !== 'undefined' ? performance.now() : 0));
  if (!reduced) { _rhHeads.add(head); _rhEnsure(); }
  return head;
}

/* ================= Model ekspresi — softmax regression + SGD online =================
 * "Machine learning" on-device: regresi logistik multikelas (softmax) dilatih dengan
 * SGD (gradient descent) di browser murid sendiri. Fitur = ringkasan sinyal interaksi;
 * kelas = 9 state wajah robot-heads. Model belajar bobot dari pengalaman → tiap muka
 * makin pas dengan apa yang sedang dikerjakan murid. Tanpa lib, tanpa server, offline.
 * State owner: app.js. Persistence: localStorage `codeduo_expr_v1`. */

const EXPR_STATES = ROBOT_STATES.slice();
const EXPR_FEATURES = [
  'bias',
  'ok', 'bad', 'ur', 'prog', 'lesson', 'tap', 'nav', 'pick',
  'heartHi', 'heartLo', 'streak', 'firstTry', 'fast',
];
const N_FEAT = EXPR_FEATURES.length;
const N_CLASS = EXPR_STATES.length;

function _clamp01(x) { return x < 0 ? 0 : x > 1 ? 1 : x; }
function _round3(x) { return Math.round(x * 1000) / 1000; }

/* sinyal mentah (0..1) → vektor fitur (index cocok EXPR_FEATURES) */
function exprFeatures(sig) {
  const s = sig || {};
  const num = (k) => (Number.isFinite(s[k]) ? _clamp01(s[k]) : 0);
  const heartHi = num('hearts');
  const heartLo = Math.round((1 - heartHi) * 1000) / 1000;
  return [
    1,                                  /* bias */
    num('correct'),                     /* ok */
    num('wrong'),                       /* bad */
    num('urgency'),                     /* ur */
    num('progress'),                    /* prog */
    num('lesson'),                      /* lesson */
    num('tap'),                         /* tap */
    num('nav'),                         /* nav */
    num('pick'),                        /* pick */
    heartHi,                            /* heartHi */
    heartLo,                            /* heartLo */
    num('streak'),                      /* streak */
    num('firstTry'),                    /* firstTry */
    num('fast'),                        /* fast */
  ].map(_round3);
}

/* label = kelas yang DIHARAPKAN model (bukan yang ditampilkan). Dipakai saat learning:
 * model melatih diri memetakan sinyal interaksi → state yang pantas. */
function exprLabelIndex(sig) {
  const s = sig || {};
  if (s.lesson && Number.isFinite(s.progress) && s.progress >= 0.99) return EXPR_STATES.indexOf('happy');
  const hearts = Number.isFinite(s.hearts) ? s.hearts : 1;
  if (hearts <= 0) return EXPR_STATES.indexOf('error');
  if (s.correct) return EXPR_STATES.indexOf('happy');
  if (s.wrong) return EXPR_STATES.indexOf('thinking');
  if (s.pick) return EXPR_STATES.indexOf('working');
  if (s.lesson) return EXPR_STATES.indexOf('listening');
  if (s.nav) return EXPR_STATES.indexOf('searching');
  if (Number.isFinite(s.urgency) && s.urgency >= 0.6) return EXPR_STATES.indexOf('thinking');
  if (s.tap) return EXPR_STATES.indexOf('speaking');
  return EXPR_STATES.indexOf('idle');
}

function createExpressionModel() {
  const W = [];
  for (let k = 0; k < N_CLASS; k++) W.push(new Array(N_FEAT).fill(0));
  return { W: W, classes: EXPR_STATES.slice(), feats: EXPR_FEATURES.slice(), lr: 0.12, l2: 0.0005, n: 0 };
}

/* terima objek ATAU string JSON; tolak apa pun yang tak sesuai bentuk → model valid atau null */
function restoreExpressionModel(json) {
  let o = json;
  if (typeof json === 'string') { try { o = JSON.parse(json); } catch (_) { return null; } }
  if (!o || typeof o !== 'object' || !Array.isArray(o.W)) return null;
  if (o.W.length !== N_CLASS) return null;
  const W = [];
  for (const row of o.W) {
    if (!Array.isArray(row) || row.length !== N_FEAT) return null;
    W.push(row.map((v) => (Number.isFinite(v) ? v : 0)));
  }
  const lr = Number.isFinite(o.lr) && o.lr > 0 && o.lr < 1 ? o.lr : 0.12;
  const l2 = Number.isFinite(o.l2) && o.l2 >= 0 && o.l2 < 1 ? o.l2 : 0.0005;
  const n = Number.isFinite(o.n) && o.n >= 0 ? o.n : 0;
  return { W: W, classes: EXPR_STATES.slice(), feats: EXPR_FEATURES.slice(), lr: lr, l2: l2, n: n };
}

function _exprForward(m, x) {
  const z = new Array(N_CLASS);
  let max = -Infinity;
  for (let k = 0; k < N_CLASS; k++) {
    let s = 0;
    const wk = m.W[k];
    for (let i = 0; i < N_FEAT; i++) s += wk[i] * x[i];
    z[k] = s;
    if (s > max) max = s;
  }
  let sum = 0;
  for (let k = 0; k < N_CLASS; k++) { z[k] = Math.exp(z[k] - max); sum += z[k]; }
  const p = new Array(N_CLASS);
  for (let k = 0; k < N_CLASS; k++) p[k] = sum > 0 ? z[k] / sum : 1 / N_CLASS;
  return p;
}

/* satu langkah SGD: naikkan peluang kelas label, turunkan lainnya; L2 bikin bobot adem.
 * return {loss, probs} supaya bisa ditest (loss harus turun saat belajar). */
function exprLearn(m, x, yi, lrOverride) {
  if (!m || !Array.isArray(x) || x.length !== N_FEAT) return null;
  const y = Number.isInteger(yi) && yi >= 0 && yi < N_CLASS ? yi : 0;
  const lr = Number.isFinite(lrOverride) ? lrOverride : m.lr;
  const p = _exprForward(m, x);
  for (let k = 0; k < N_CLASS; k++) {
    const g = p[k] - (k === y ? 1 : 0);
    const wk = m.W[k];
    for (let i = 0; i < N_FEAT; i++) {
      wk[i] -= lr * (g * x[i] + m.l2 * wk[i]);
      if (!Number.isFinite(wk[i])) wk[i] = 0; /* overflow → reset bobot, jangan racuni model */
    }
  }
  m.n += 1;
  return { loss: -Math.log(Math.max(p[y], 1e-9)), probs: p };
}

/* prediksi → sampling (suhu 0.6 = dekat pilihan terbaik, sedikit variasi) → hindari state yang
 * barusan tampil (x0.06) → eksplorasi 12% biar muka tak pernah monoton. */
function pickExpression(m, sig, rnd, avoid) {
  const r = typeof rnd === 'function' ? rnd : Math.random;
  const ai = typeof avoid === 'string' ? EXPR_STATES.indexOf(avoid) : -1;
  const x = exprFeatures(sig);
  const p = m ? _exprForward(m, x) : new Array(N_CLASS).fill(1 / N_CLASS);
  const T = 0.6;
  const s = p.map((v) => Math.pow(Math.max(v, 1e-9), 1 / T));
  let sum = s.reduce((a, b) => a + b, 0);
  for (let i = 0; i < N_CLASS; i++) s[i] = s[i] / sum;
  if (ai >= 0) s[ai] *= 0.06; /* hindari state yang barusan tampil */
  sum = s.reduce((a, b) => a + b, 0);
  for (let i = 0; i < N_CLASS; i++) s[i] = s[i] / sum;
  if (r() < 0.12) { /* eksplorasi 12% biar muka tak pernah monoton */
    const j = Math.floor(r() * N_CLASS);
    if (j !== ai) return EXPR_STATES[j];
  }
  let u = r();
  for (let i = 0; i < N_CLASS; i++) { u -= s[i]; if (u <= 0) return EXPR_STATES[i]; }
  return EXPR_STATES[N_CLASS - 1];
}

/* probabilitas tiap state untuk sebuah sinyal (murni, tanpa mengubah bobot) */
function exprProbs(m, sig) {
  const x = exprFeatures(sig);
  if (!m) return null;
  return _exprForward(m, x);
}

/* state wajah → mood (untuk baris bubble robotSay yang sesuai). */
function stateToMood(state) {
  if (state === 'happy') return 'celebrate';
  if (state === 'error') return 'sad';
  if (state === 'thinking' || state === 'searching' || state === 'listening' || state === 'working') return 'thinking';
  return 'idle';
}

export {
  ROBOT_NAME, ROBOT_MOODS, ROBOT_STATES,
  robotSVG, robotSay, robotReact,
  stateFromMood, ledMatrixFor, mountRobotHead,
  RH_MOTION, RH_COLORS, _rhHash, _rhFrame, _rhMotionFor, _rhFaceGrid,
  EXPR_STATES, EXPR_FEATURES, exprFeatures, exprLabelIndex,
  createExpressionModel, restoreExpressionModel, exprLearn, exprProbs, pickExpression, stateToMood,
};

/* Node CJS tetap jalan (require()). ESM = jalur utama Vite & test. */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    ROBOT_NAME, ROBOT_MOODS, ROBOT_STATES,
    robotSVG, robotSay, robotReact,
    stateFromMood, ledMatrixFor, mountRobotHead,
    RH_MOTION, RH_COLORS, _rhHash, _rhFrame, _rhMotionFor, _rhFaceGrid,
    EXPR_STATES, EXPR_FEATURES, exprFeatures, exprLabelIndex,
    createExpressionModel, restoreExpressionModel, exprLearn, exprProbs, pickExpression, stateToMood,
  };
}
