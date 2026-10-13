/* CodeDuo — uji planner otonom Bibit (companion.js). Run: node test-companion.mjs
 * Cakupan SERT Test: happy (idle-life & proaktif & hint), edge (batas jendela/backoff),
 * error (fase busy → tak ada transisi; dt 0 → state diam).
 */
import assert from 'node:assert/strict';
import {
  IDLE, AMBIENT, newCompanion, tickCompanion, onUserInteract, proactiveContext,
} from './src/companion.js';

let passed = 0;
let failed = 0;
function t(name, fn) {
  try { fn(); passed++; console.log('ok  ' + name); }
  catch (e) { failed++; console.error('FAIL ' + name + ' — ' + e.message); }
}

const home = { route: 'home', phase: null, pos: 0 };
const lesson = (phase, pos) => ({ route: 'lesson', phase: phase || 'run', pos: pos || 0 });
/* rnd tetap 0.5 → deterministik (LINE gap = LINE_MIN + (MAX-MIN)*0.5 saat tanpa backoff). */
const half = () => 0.5;

/* Simulasi loop 1 dtk. Tiap emit dicatat bersama waktu-sim (ms) saat muncul. */
function drive(c, ctx, steps) {
  const emit = [];
  let t = 0;
  for (let i = 0; i < steps; i++) {
    t += 1000;
    const r = tickCompanion(c, ctx, 1000, half, t);
    c = r.state;
    if (r.emit) emit.push(Object.assign({ t }, r.emit));
  }
  return { c, emit };
}
const ofKind = (emit, kind) => emit.filter((e) => e.kind === kind);

t('idle-life: wajah ambien yang muncul ada di daftar AMBIENT (idle dominan, tidak tidur saat ramai)', () => {
  const { emit } = drive(newCompanion(), home, 12);
  const faces = ofKind(emit, 'face');
  assert.ok(faces.length >= 1, 'harus ada emit face setelah >5 dtk diam');
  faces.forEach((e) => assert.ok(AMBIENT.includes(e.face), 'wajah ambien di luar daftar: ' + e.face));
});

t('proaktif: baris pertama butuh ≥ LINE_MIN diam', () => {
  const early = drive(newCompanion(), home, Math.floor(IDLE.LINE_MIN / 1000) - 1);
  assert.equal(ofKind(early.emit, 'line').length, 0, 'baris keluar sebelum LINE_MIN');
  const later = drive(newCompanion(), home, Math.ceil(IDLE.LINE_MAX / 1000) + 5);
  assert.ok(ofKind(later.emit, 'line').length >= 1, 'baris tak muncul setelah diam lama');
});

t('proaktif: TAK ADA baris > MAX_LINES per jendela WINDOW (anti-spam)', () => {
  const { emit } = drive(newCompanion(), home, 900);
  const lines = ofKind(emit, 'line').map((e) => e.t);
  assert.ok(lines.length >= 1, 'tak ada baris sama sekali');
  lines.forEach((L) => {
    const inWin = lines.filter((x) => x >= L && x < L + IDLE.WINDOW).length;
    assert.ok(inWin <= IDLE.MAX_LINES, 'jendela ' + L + ' punya ' + inWin + ' baris (> ' + IDLE.MAX_LINES + ')');
  });
});

t('proaktif: backoff — jeda setelah baris pertama > jeda awal (baris diabaikan)', () => {
  const { emit } = drive(newCompanion(), home, 3000);
  const lines = ofKind(emit, 'line').map((e) => e.t);
  assert.ok(lines.length >= 3, 'butuh ≥3 baris untuk menguji backoff');
  const firstGap = lines[0];            /* diam awal → baris ke-1 */
  const nextGap = lines[1] - lines[0];  /* baris ke-1 (diabaikan) → baris ke-2 */
  assert.ok(nextGap > firstGap, 'jeda tidak memanjang setelah baris diabaikan: ' + firstGap + ' → ' + nextGap);
});

t('hint: satu per posisi soal, hanya saat fase run & lambat', () => {
  const { emit } = drive(newCompanion(), lesson('run', 0), 40);
  assert.equal(ofKind(emit, 'hint').length, 1, 'petunjuk hanya sekali untuk posisi sama');
});

t('edge: fase feedback/done/failed (busy) tidak memancarkan face/line', () => {
  ['feedback', 'done', 'failed'].forEach((phase) => {
    const { emit } = drive(newCompanion(), lesson(phase, 3), 200);
    assert.equal(emit.filter((e) => e.kind === 'face' || e.kind === 'line').length, 0, 'emit saat busy: ' + phase);
  });
});

t('error: interaksi user mereset timer diam & menjeda wajah model', () => {
  const c = drive(newCompanion(), home, 50).c;
  assert.ok(c.sinceUser >= 50000, 'timer diam terakumulasi');
  const r = onUserInteract(c, half);
  assert.equal(r.state.sinceUser, 0, 'interaksi mereset timer diam');
  assert.ok(r.state.nextFaceAt > r.state.t, 'wajah hasil-model dijeda sebelum idle-life menimpa');
});

t('sleep: diam > SLEEP_AFTER memancarkan wajah sleeping', () => {
  const { emit } = drive(newCompanion(), home, Math.ceil(IDLE.SLEEP_AFTER / 1000) + 20);
  assert.ok(ofKind(emit, 'face').some((e) => e.face === 'sleeping'), 'tak pernah tidur');
});

t('wake: interaksi setelah tidur memancarkan sapaan', () => {
  const c = drive(newCompanion(), home, Math.ceil(IDLE.SLEEP_AFTER / 1000) + 20).c;
  assert.equal(c.face, 'sleeping', 'diam > SLEEP_AFTER → tidur');
  const r = onUserInteract(c, half);
  assert.ok(r.greeting, 'bangun dari tidur → sapaan');
  assert.equal(r.greeting.face, 'happy');
});

t('proactiveContext: peta rute → konteks baris', () => {
  assert.equal(proactiveContext({ route: 'lesson' }), 'idle-lesson');
  assert.equal(proactiveContext({ route: 'review' }), 'idle-lesson');
  assert.equal(proactiveContext({ route: 'topic' }), 'idle-topic');
  assert.equal(proactiveContext({ route: 'home' }), 'idle-home');
});

t('idempoten: dt 0 tidak mengubah state (tak ada transisi tersembunyi)', () => {
  const r = tickCompanion(newCompanion(), home, 0, half, 0);
  assert.equal(r.emit, null, 'dt 0 tanpa emit');
  assert.equal(r.state.sinceUser, 0);
});

t('murni: tickCompanion tak memutasi state masukan', () => {
  const c0 = newCompanion();
  const snapshot = JSON.stringify(c0);
  tickCompanion(c0, home, 5000, half, 5000);
  assert.equal(JSON.stringify(c0), snapshot, 'state masukan berubah (mutasi)');
});

console.log('\n' + passed + ' passed, ' + failed + ' failed');
process.exit(failed === 0 ? 0 : 1);
