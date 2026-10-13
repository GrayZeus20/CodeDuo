/* CodeDuo — companion.js: perilaku otonom Bibit (idle-life + proaktif). MURNI, Node-testable.
 *
 * SERT State — bentuk & pemilik:
 *   companion (in-memory, owner store.js):
 *     { face, mood, ctx, t, sinceUser, sinceLine, lines: number[], hints: {[pos]: t} }
 *   Semua transisi lewat tickCompanion()/onUserInteract() — tak ada mutasi dari luar.
 *
 * SERT Event — registry perilaku:
 *   IDLE_FACE   : tiap 5–12 dtk diam     → wajah ambien (idle dominan; sesekali melirik)
 *   SLEEP_DRIFT : diam > 75 dtk          → condong ke 'sleeping' (napas pelan)
 *   WAKE        : user kembali           → 'happy' + sapaan singkat
 *   PROACTIVE   : diam 45–110 dtk        → satu baris komentar konteks (maks 2 / 3 mnt)
 *   HINT        : murid lambat (>25 dtk) → satu petunjuk per posisi soal
 *   Unhandled/kosong → tak ada aksi (tak ada transisi tersembunyi).
 *
 * Guard anti-spam: garis proaktif dibatasi 2 per 180 dtk; tidak saat fase feedback/failed/done;
 * hint sekali per posisi; jeda makin panjang kalau baris terakhir diabaikan (backoff x1.6).
 */
'use strict';

export const IDLE = {
  FACE_MIN: 5000,   /* ms — jeda minimum ganti wajah ambien */
  FACE_MAX: 12000,
  SLEEP_AFTER: 75000,/* ms diam → condong tidur */
  LINE_MIN: 45000,   /* ms diam sebelum baris proaktif pertama */
  LINE_MAX: 110000,
  HINT_AFTER: 25000, /* ms diam di 1 soal → petunjuk */
  WINDOW: 180000,    /* ms jendela pembatas baris proaktif */
  MAX_LINES: 2,      /* maks baris proaktif per WINDOW */
  BACKOFF: 1.6,      /* pengali jeda bila baris terakhir diabaikan user */
};

export const AMBIENT = ['idle', 'thinking', 'searching', 'listening', 'working'];

/* SERT State: companion kosong (fresh). */
export function newCompanion() {
  return { face: null, mood: null, ctx: null, line: null, t: 0, sinceUser: 0, sinceLine: 0, nextFaceAt: 0, lines: [], hints: {} };
}

/* Wajah ambien: 'idle' dominan — Bibit kebanyakan tenang & bernapas, sesekali melirik.
 * Renderer robot-heads menggerakkan (sway/blink/hop/antena) tiap frame; posture tak perlu
 * loncat-loncat antar aktivitas (itu bikin keliatan "pindah-pindah", bukan hidup). */
function pickAmbient(rnd) {
  const r = rnd ? rnd() : Math.random();
  if (r < 0.62) return 'idle';
  const rest = AMBIENT.slice(1); /* thinking/searching/listening/working */
  return rest[Math.min(rest.length - 1, Math.floor((r - 0.62) / 0.38 * rest.length))];
}

/* Pangkas baris proaktif yang keluar dari jendela pembatas. */
function pruneWindow(c, now) {
  c.lines = (c.lines || []).filter((t) => now - t < IDLE.WINDOW);
}

/* Berapa lama menunggu sebelum baris proaktif berikutnya (backoff bila diabaikan). */
function lineGap(c, rnd) {
  const base = IDLE.LINE_MIN + (IDLE.LINE_MAX - IDLE.LINE_MIN) * (rnd ? rnd() : 0.5);
  const ignored = Math.min(IDLE.MAX_LINES, c.lines ? c.lines.length : 0);
  return base * Math.pow(IDLE.BACKOFF, ignored); /* makin banyak diabaikan → jeda makin panjang */
}

/* Context baris proaktif dari kondisi app (murni). */
export function proactiveContext(ctx) {
  const c = ctx || {};
  if (c.route === 'lesson' || c.route === 'review') return 'idle-lesson';
  if (c.route === 'topic') return 'idle-topic';
  return 'idle-home';
}

/* ================= Tick otonom (dipanggil timer di React) =================
 * dtMs = ms sejak tick terakhir. rnd = fungsi 0..1 (opsional). now = epoch ms.
 * Return { state, emit } — emit = null | { kind:'face'|'line'|'hint', face, ctx, line? } */
export function tickCompanion(c, ctx, dtMs, rnd, now) {
  const prev = c || newCompanion();
  const next = Object.assign({}, prev, { hints: Object.assign({}, prev.hints) });
  const t = Number.isFinite(now) ? now : 0;
  const dt = Number.isFinite(dtMs) && dtMs > 0 ? dtMs : 0;
  next.t += dt;
  next.sinceUser += dt;
  next.sinceLine += dt;
  pruneWindow(next, next.t);

  const k = ctx || {};
  const inSession = k.route === 'lesson' || k.route === 'review';
  const busy = k.phase === 'feedback' || k.phase === 'failed' || k.phase === 'done';

  /* 1) HINT — satu per posisi soal, hanya saat fase run & murid lambat */
  if (inSession && k.phase === 'run' && next.sinceUser >= IDLE.HINT_AFTER) {
    const pos = Number.isFinite(k.pos) ? k.pos : 0;
    const seen = next.hints[pos];
    if (!seen) {
      next.hints[pos] = next.t;
      return { state: next, emit: { kind: 'hint', ctx: 'slow', face: 'thinking' } };
    }
  }

  /* 2) PROACTIVE LINE — saat diam lama, tidak saat busy, dijeda & dibatasi jendela */
  if (!busy && next.sinceUser >= IDLE.LINE_MIN && next.sinceLine >= lineGap(next, rnd) && next.lines.length < IDLE.MAX_LINES) {
    next.lines.push(next.t);
    next.sinceLine = 0;
    return { state: next, emit: { kind: 'line', ctx: proactiveContext(k), face: 'speaking' } };
  }

  /* 3) IDLE-LIFE — wajah ambien berkala biar tak beku (jeda 5–12 dtk antar ganti) */
  if (!busy && next.sinceUser >= IDLE.FACE_MIN && next.t >= (next.nextFaceAt || 0)) {
    const sleep = next.sinceUser >= IDLE.SLEEP_AFTER;
    let face = sleep ? 'sleeping' : pickAmbient(rnd);
    if (face === next.face) face = sleep ? 'sleeping' : 'idle'; /* tetap ganti, tapi condong tenang */
    next.face = face;
    next.mood = stateToMoodSafe(face);
    next.nextFaceAt = next.t + IDLE.FACE_MIN + (rnd ? rnd() : 0.5) * (IDLE.FACE_MAX - IDLE.FACE_MIN);
    return { state: next, emit: { kind: 'face', face: face } };
  }

  return { state: next, emit: null };
}

/* Interaksi user: reset timer, boleh melepaskan sapaan singkat kalau baru bangun. */
export function onUserInteract(c, rnd) {
  const prev = c || newCompanion();
  const woke = prev.face === 'sleeping' && prev.sinceUser >= IDLE.SLEEP_AFTER;
  const next = Object.assign({}, prev, {
    sinceUser: 0,
    sinceLine: 0,
    nextFaceAt: prev.t + IDLE.FACE_MIN, /* wajah hasil-model tahan ≥4 dtk sebelum idle-life menimpa */
    hints: {},
  });
  /* bangun dari "tidur" → reaksi sapaan, user tahu Bibit hadir */
  if (woke) return { state: next, greeting: { ctx: 'wake', face: 'happy' } };
  return { state: next, greeting: null };
}

/* stateFromMood lokal (hindari import sirkuler); identik robot.js. */
function stateToMoodSafe(state) {
  if (state === 'happy') return 'celebrate';
  if (state === 'error') return 'sad';
  if (state === 'thinking' || state === 'searching' || state === 'listening' || state === 'working') return 'thinking';
  if (state === 'sleeping') return 'idle';
  return 'idle';
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { IDLE, AMBIENT, newCompanion, tickCompanion, onUserInteract, proactiveContext };
}
