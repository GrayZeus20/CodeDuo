/* CodeDuo — tipe soal `wiring`: rakit rangkaian dengan memilih pin yang benar.
 *
 * Bentuk soal:
 *   { type:'wiring', q, circuit:{parts,wires,note}, slots:[
 *       { id:'led', label:'LED anode', options:['D9','D13','GND','5V'], a:'D9' }, ...
 *     ], explain }
 *
 * Murid memilih satu opsi per slot. Semua slot harus benar. Bila hanya salah
 * sedikit → `close` (hampir benar) supaya murid bisa memperbaiki tanpa
 * kehilangan nyawa, sama seperti aturan longgar tipe lain.
 */
'use strict';

function checkWiring(answer, ex) {
  const slots = Array.isArray(ex && ex.slots) ? ex.slots : [];
  if (!slots.length) return { correct: false, message: 'Soal wiring tidak punya slot.' };

  /* `answer` = objek {slotId: pilihan} atau array sejajar urutan slot. */
  const picks = Array.isArray(answer)
    ? slots.reduce((acc, s, i) => { acc[s.id] = answer[i]; return acc; }, {})
    : (answer && typeof answer === 'object' ? answer : {});

  const missing = slots.filter((s) => picks[s.id] == null || picks[s.id] === '');
  if (missing.length) {
    return { correct: false, reason: 'incomplete', message: 'Masih ada sambungan yang belum dipilih.' };
  }

  const wrong = slots.filter((s) => String(picks[s.id]) !== String(s.a));
  if (!wrong.length) return { correct: true };

  /* Hampir benar: hanya 1–2 slot meleset → beri kesempatan memperbaiki. */
  if (wrong.length <= 2) {
    return {
      correct: false,
      close: true,
      message: wrong.length === 1
        ? 'Hampir benar! Ada satu sambungan yang belum tepat.'
        : 'Hampir benar! Dua sambungan masih keliru.',
      wrongSlots: wrong.map((s) => s.id),
    };
  }
  return {
    correct: false,
    reason: 'wrong',
    message: 'Rangkaian belum benar. Periksa lagi pin tiap komponen.',
    wrongSlots: wrong.map((s) => s.id),
  };
}

export { checkWiring };
