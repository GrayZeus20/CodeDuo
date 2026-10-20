/* CodeDuo — pure exercise checkers. No DOM. Node-testable.
 * ponytail: checkCode pakai new Function (sandbox = browser user sendiri, tool lokal).
 * upgrade path kalau mau multi-user online: pindah ke Worker + timeout + iframe sandbox.
 *
 * Gradasi penilaian (aturan longgar):
 *  - correct → jawaban tepat.
 *  - close   → "hampir benar": mirip jawaban (typo ringan, kapital, tanda kutip,
 *              urutan blok meleset 1–2 posisi, output beda format tipis).
 *              TIDAK mengurangi nyawa; soal diulang di akhir sesi (store.answerCheck).
 *  - wrong   → salah sungguhan (-1 nyawa).
 */
'use strict';

/* Jarak Levenshtein (iteratif, O(len*len)) — dipakai untuk skor kemiripan. */
function levenshtein(a, b) {
  const m = a.length;
  const n = b.length;
  if (!m) return n;
  if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) {
      cur[j] = Math.min(
        prev[j] + 1,
        cur[j - 1] + 1,
        prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1),
      );
    }
    prev = cur;
  }
  return prev[n];
}

/* Skor kemiripan 0..1 antara dua string (1 = identik setelah normalisasi). */
function similarity(a, b) {
  const x = String(a);
  const y = String(b);
  if (x === y) return 1;
  const max = Math.max(x.length, y.length);
  if (!max) return 1;
  return 1 - levenshtein(x, y) / max;
}

/* Ambil kemiripan TERBAIK antara jawaban user dan salah satu kandidat. */
function bestSimilarity(user, candidates) {
  let best = 0;
  for (const c of candidates) {
    const s = similarity(user, c);
    if (s > best) best = s;
  }
  return best;
}

/* ≥ 0.75 mirip → dianggap "hampir benar" (typo ringan 1–2 huruf). */
const CLOSE_THRESHOLD = 0.75;

function normalizeCode(s) {
  return String(s == null ? '' : s)
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/;\s*$/, '')
    .trim();
}

/* Abaikan kapital + tanda kutip → "X" vs "x" vs "'x'" dianggap sama. */
function looseNormalize(s) {
  return normalizeCode(s).replace(/['"]/g, '');
}

/* ---------- fill ---------- */
function checkFill(user, accept) {
  const u = normalizeCode(user);
  if (!u) return { correct: false, reason: 'empty', message: 'Jawaban masih kosong.' };
  const list = (Array.isArray(accept) ? accept : [accept]).map((a) => String(a));
  if (list.some((a) => normalizeCode(a) === u)) return { correct: true };
  /* Aturan longgar #1: beda kapital/tanda kutip saja → hampir benar. */
  const lu = looseNormalize(user);
  if (lu && list.some((a) => looseNormalize(a) === lu)) {
    return { correct: false, close: true, message: 'Hampir benar! Cek kapital & tanda kutipnya.' };
  }
  /* Aturan longgar #2: beda spasi saja → hampir benar. */
  const uFlat = u.replace(/\s+/g, '');
  if (uFlat && list.some((a) => normalizeCode(a).replace(/\s+/g, '') === uFlat)) {
    return { correct: false, close: true, message: 'Hampir benar! Spasi berlebih terdeteksi.' };
  }
  /* Aturan longgar #3: typo ringan (kemiripan tinggi) → hampir benar. */
  if (bestSimilarity(u, list.map((a) => normalizeCode(a))) >= CLOSE_THRESHOLD) {
    return { correct: false, close: true, message: 'Hampir benar! Ada huruf yang keliru, cek lagi.' };
  }
  /* Aturan longgar #4: kurang benar sedikit (potongan/substring/awalan) */
  if (list.some((a) => {
    const na = normalizeCode(a);
    return (na.length >= 3 && u.length >= 3 && (na.includes(u) || u.includes(na)));
  })) {
    return { correct: false, close: true, message: 'Kurang sedikit lagi! Cek kembali penulisan jawabanmu.' };
  }
  return { correct: false, reason: 'wrong', message: 'Jawaban belum tepat.' };
}

/* ---------- arrange ---------- */
function checkArrange(userOrder, blocks) {
  if (!Array.isArray(userOrder) || userOrder.length !== blocks.length) {
    return { correct: false, reason: 'incomplete', message: 'Susun dulu semua bloknya.' };
  }
  if (userOrder.every((id, i) => id === blocks[i])) return { correct: true };
  /* Aturan longgar: susunan salah urutan — semua blok lengkap tapi urutan belum pas
   * → "hampir benar / salah urutan", diberi kesempatan memperbaiki. */
  const wrongPos = userOrder.filter((id, i) => id !== blocks[i]).length;
  const sameSet = userOrder.slice().sort().join('\u0000') === blocks.slice().sort().join('\u0000');
  if (sameSet) {
    if (wrongPos <= 2) {
      return { correct: false, close: true, message: 'Hampir benar! Tinggal sedikit blok yang belum di tempat yang pas.' };
    }
    return { correct: false, close: true, message: 'Urutan blok belum tepat. Coba atur kembali posisinya.' };
  }
  return { correct: false, reason: 'wrong', message: 'Urutan blok belum benar.' };
}

/* ---------- mc ---------- */
function checkMc(answer, ex) {
  const chosen = typeof answer === 'number'
    ? String(ex.options[answer] == null ? '' : ex.options[answer])
    : String(answer == null ? '' : answer);
  if (!looseNormalize(chosen)) return { correct: false, reason: 'empty', message: 'Pilih salah satu jawaban dulu.' };
  const correctText = String(ex.options[ex.a] == null ? '' : ex.options[ex.a]);
  if (looseNormalize(chosen) === looseNormalize(correctText)) return { correct: true };
  /* Index pilihan sama dengan kunci (teks beda kapital dsb.) → hampir benar. */
  if (typeof answer === 'number' && answer === ex.a) {
    return { correct: false, close: true, message: 'Hampir benar! Perhatikan penulisannya.' };
  }
  /* Teks jawaban sangat mirip kunci (typo ringan saat menyalin) → hampir benar. */
  if (bestSimilarity(looseNormalize(chosen), [looseNormalize(correctText)]) >= CLOSE_THRESHOLD) {
    return { correct: false, close: true, message: 'Hampir benar! Jawabanmu sangat dekat — baca lagi opsinya.' };
  }
  return { correct: false, reason: 'wrong', message: 'Pilihan belum tepat.' };
}

/* ---------- code ---------- */
function checkCode(userCode, spec) {
  const code = String(userCode == null ? '' : userCode);
  if (!code.trim()) return { correct: false, reason: 'empty', message: 'Kode masih kosong.' };
  let fn;
  try {
    const factory = new Function(
      '"use strict";\n' +
        code +
        '\nreturn typeof ' + spec.fnName + ' === "function" ? ' + spec.fnName + ' : undefined;'
    );
    fn = factory();
  } catch (e) {
    return { correct: false, reason: 'syntax', message: 'Syntax error: ' + e.message };
  }
  if (typeof fn !== 'function') {
    return {
      correct: false,
      reason: 'missing-fn',
      message: 'Fungsi ' + spec.fnName + ' tidak ditemukan. Cek namanya.',
    };
  }
  for (const t of spec.tests) {
    let got;
    try {
      got = fn.apply(null, t.args);
    } catch (e) {
      return {
        correct: false,
        reason: 'runtime',
        message: 'Error waktu jalan: ' + e.message,
      };
    }
    if (JSON.stringify(got) !== JSON.stringify(t.expected)) {
      /* Aturan longgar: hasil hampir sama (beda format/tanda tipis) → hampir benar. */
      const g = JSON.stringify(got);
      const w = JSON.stringify(t.expected);
      const loose = (v) => String(v == null ? '' : v).toLowerCase().replace(/\s+/g, '');
      if (got != null && t.expected != null &&
          (loose(g) === loose(w) || similarity(String(got), String(t.expected)) >= CLOSE_THRESHOLD)) {
        return {
          correct: false,
          close: true,
          message: 'Hampir benar! Hasil: ' + g + ', seharusnya ' + w + '. Cek format keluarannya.',
        };
      }
      return {
        correct: false,
        reason: 'wrong-output',
        message:
          'Input ' + JSON.stringify(t.args) +
          ' → hasil ' + g +
          ', seharusnya ' + w,
      };
    }
  }
  return { correct: true };
}

export { normalizeCode, looseNormalize, similarity, CLOSE_THRESHOLD, checkFill, checkArrange, checkMc, checkCode };
