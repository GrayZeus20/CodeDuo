/* CodeDuo — penjadwal ulangan berjarak (spaced repetition), MURNI & offline.
 *
 * Tujuan literatur: retensi ≥30 hari. Dasar:
 *  - Ebbinghaus (1885): kurva lupa eksponensial → ulang sebelum lupa.
 *  - Cepeda, Pashler, Vul, Wixted & Rohrer (2006), Psych. Bulletin 132(3) &
 *    Cepeda dkk (2008), Psych. Science 19(11): jeda antar-ulangan optimal ≈
 *    10–20% interval retensi → target 30+ hari = jeda ~3–6 hari, makin lama makin panjang.
 *  - Roediger & Karpicke (2006), Psych. Science 17(3) & Karpicke & Blunt (2011),
 *    Science 331: testing effect → tiap sesi = ingat ulang (tes), bukan baca ulang.
 *  - Murre & Dros (2015), PLoS ONE 10(7): replikasi kurva lupa.
 *  - Smolen, Zhang & Byrne (2016), Nat. Rev. Neuroscience 17: dosis spaced learning.
 *  - Settles & Meeder (2016), ACL: preseden SRS (Duolingo half-life regression).
 *
 * Model: kotak Leitner membesar. Tiap soal punya state { box, due, last, reps, lapses }.
 * Benar → box naik, jeda berikutnya = SRS_INTERVALS[box] hari. Salah → reset box 0.
 * Interval membesar 1→2→4→8→16→32 hari (konsisten Cepeda: makin jauh target, makin panjang jeda).
 * Semua fungsi murni (return state baru, tak memutasi argumen) → aman diuji & idempoten.
 *
 * Owner state: app.js. Persistensi: localStorage `codeduo_srs_v1` (lihat SRS_KEY).
 * Modul ini NO-DOM, NO-storage → bisa diuji penuh di Node.
 */
'use strict';

const SRS_KEY = 'codeduo_srs_v1';
const SRS_VERSION = 1;
const DAY_MS = 24 * 60 * 60 * 1000;
/* Interval (hari) per kotak. Panjang = jumlah kotak - 1 (kotak terakhir tetap). */
const SRS_INTERVALS = [1, 2, 4, 8, 16, 32];
const SRS_MAX_BOX = SRS_INTERVALS.length - 1;

/* State awal kosong: tak ada soal yang pernah dijadwalkan. */
function newSched() {
  return {};
}

/* Jeda (ms) untuk sebuah kotak, kotak di-clamp ke rentang valid. */
function intervalFor(box) {
  const b = Math.max(0, Math.min(SRS_MAX_BOX, Math.floor(Number(box) || 0)));
  return SRS_INTERVALS[b] * DAY_MS;
}

/* Grade dari hasil jawaban: benar → 1 (naik kotak), salah → 0 (reset). */
function gradeFromResult(correct /* , firstTry */) {
  return correct ? 1 : 0;
}

/* Jadwalkan 1 item. Mengembalikan SCHED BARU (fungsi murni, tak memutasi input).
 * now = epoch ms. grade 1 → box+1 (clamp), grade 0 → box 0 + lapses+1.
 * Soal baru (belum punya entri) dianggap "kotak -1": benar pertama sudah naik ke
 * kotak 0 → jeda 1 hari (Leitner: sukses pertama = interval terpendek).
 * Idempoten: memanggil ulang dengan (item, grade, now) sama → state sama. */
function schedule(sched, item, grade, now) {
  const base = sched && typeof sched === 'object' ? sched : {};
  const t = Number.isFinite(now) ? now : Date.now();
  const prev = base[item];
  const prevBox = prev && Number.isInteger(prev.box) ? prev.box : -1;
  const good = grade ? 1 : 0;

  const box = good ? Math.min(SRS_MAX_BOX, prevBox + 1) : 0;
  const reps = prev && Number.isInteger(prev.reps) ? prev.reps + 1 : 1;
  const lapses = (prev && Number.isInteger(prev.lapses) ? prev.lapses : 0) + (good ? 0 : 1);

  return Object.assign({}, base, {
    [item]: { box, due: t + intervalFor(box), last: t, reps, lapses },
  });
}

/* Item sudah pernah dijadwalkan? */
function isScheduled(sched, item) {
  return !!(sched && Object.prototype.hasOwnProperty.call(sched, item));
}

/* Sebuah item "jatuh tempo" bila belum pernah dijadwalkan (baru) ATAU due <= now. */
function isDue(sched, item, now) {
  if (!isScheduled(sched, item)) return true;
  const e = sched[item];
  return !(Number.isFinite(e.due) && e.due > now);
}

/* Urutan deterministik: jatuh tempo terlama dulu, lalu item baru (urut masukan).
 * Return daftar id dari `bank` (semua id soal kurikulum). Tanpa rng → stabil diuji. */
function dueItems(bank, sched, now) {
  const t = Number.isFinite(now) ? now : Date.now();
  const list = Array.isArray(bank) ? bank : [];
  const overdue = [];
  const fresh = [];
  for (const id of list) {
    if (!isScheduled(sched, id)) { fresh.push(id); continue; }
    const e = sched[id];
    if (Number.isFinite(e.due) && e.due <= t) overdue.push(id);
  }
  overdue.sort((a, b) => sched[a].due - sched[b].due);
  return overdue.concat(fresh);
}

/* Hitung cepat berapa item jatuh tempo (untuk badge). */
function dueCount(bank, sched, now) {
  return dueItems(bank, sched, now).length;
}

/* Validasi 1 entri jadwal (anti data korup). */
function validEntry(e) {
  if (!e || typeof e !== 'object') return false;
  if (!Number.isInteger(e.box) || e.box < 0 || e.box > SRS_MAX_BOX) return false;
  if (!Number.isFinite(e.due) || !Number.isFinite(e.last)) return false;
  if (!Number.isInteger(e.reps) || e.reps < 0) return false;
  if (!Number.isInteger(e.lapses) || e.lapses < 0) return false;
  return true;
}

/* Serialisasi ke bentuk JSON-safe. */
function toJSON(sched) {
  const items = {};
  if (sched && typeof sched === 'object') {
    for (const id of Object.keys(sched)) {
      if (validEntry(sched[id])) items[id] = sched[id];
    }
  }
  return { version: SRS_VERSION, items };
}

/* Parse dari string ATAU objek tersimpan. Korup/tak dikenal → null (pemanggil
 * memilih fallback newSched()); jangan pernah melempar ke UI. */
function fromJSON(value) {
  let raw = value;
  if (typeof value === 'string') {
    try { raw = JSON.parse(value); } catch (_) { return null; }
  }
  if (!raw || typeof raw !== 'object' || raw.version !== SRS_VERSION) return null;
  const items = raw.items;
  if (!items || typeof items !== 'object' || Array.isArray(items)) return null;
  const clean = {};
  let any = false;
  for (const id of Object.keys(items)) {
    if (validEntry(items[id])) { clean[id] = items[id]; any = true; }
  }
  return any ? clean : null;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    SRS_KEY, SRS_VERSION, SRS_INTERVALS, SRS_MAX_BOX, DAY_MS,
    newSched, intervalFor, gradeFromResult, schedule, isScheduled, isDue,
    dueItems, dueCount, toJSON, fromJSON,
  };
}
