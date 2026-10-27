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

/* Normalisasi tanda kutip tunggal terluar menjadi tanda kutip ganda untuk literal string. */
function quoteNormalized(s) {
  const norm = normalizeCode(s);
  if (norm.startsWith("'") && norm.endsWith("'") && norm.length >= 2) {
    return '"' + norm.slice(1, -1).replace(/"/g, '\\"') + '"';
  }
  return norm;
}

/* Normalisasi spasi di sekitar operator/simbol kode (contoh: 1 / 1 → 1/1, ... b → ...b). */
function canonCode(s) {
  return quoteNormalized(s)
    .replace(/\s*([=+\-*/%<>!&|^~?:,;()[\]{}])\s*/g, '$1')
    .replace(/\.\s*\.\s*\.\s*/g, '...')
    .trim();
}

/* Nilai objek dibandingkan berdasarkan isinya, bukan urutan penulisan propertinya.
 * Array tetap berurutan karena posisi elemen adalah bagian dari hasil yang diminta. */
function sameOutput(actual, expected, seen) {
  if (Object.is(actual, expected)) return true;
  if (actual === null || expected === null || typeof actual !== 'object' || typeof expected !== 'object') return false;
  if (Array.isArray(actual) !== Array.isArray(expected)) return false;
  if (!Array.isArray(actual)) {
    const actualPrototype = Object.getPrototypeOf(actual);
    const expectedPrototype = Object.getPrototypeOf(expected);
    if ((actualPrototype !== Object.prototype && actualPrototype !== null) ||
        (expectedPrototype !== Object.prototype && expectedPrototype !== null)) return false;
  }

  const pairs = seen || new WeakMap();
  if (pairs.has(actual)) return pairs.get(actual) === expected;
  pairs.set(actual, expected);

  if (Array.isArray(actual)) {
    if (actual.length !== expected.length) return false;
    for (let i = 0; i < actual.length; i++) {
      const actualHasIndex = Object.prototype.hasOwnProperty.call(actual, i);
      const expectedHasIndex = Object.prototype.hasOwnProperty.call(expected, i);
      if (actualHasIndex !== expectedHasIndex) return false;
      if (actualHasIndex && !sameOutput(actual[i], expected[i], pairs)) return false;
    }
    return true;
  }

  const actualKeys = Object.keys(actual).sort();
  const expectedKeys = Object.keys(expected).sort();
  if (actualKeys.length !== expectedKeys.length) return false;
  for (let i = 0; i < actualKeys.length; i++) {
    if (actualKeys[i] !== expectedKeys[i] ||
        !sameOutput(actual[actualKeys[i]], expected[expectedKeys[i]], pairs)) return false;
  }
  return true;
}

function describeOutput(value) {
  try {
    const json = JSON.stringify(value);
    return json === undefined ? String(value) : json;
  } catch (_) {
    return String(value);
  }
}

/* Abaikan kapital + tanda kutip → "X" vs "x" vs "'x'" dianggap sama. */
function looseNormalize(s) {
  return normalizeCode(s).replace(/['"]/g, '');
}

/* ---------- fill ---------- */
function checkFill(user, accept) {
  const u = normalizeCode(user);
  const list = (Array.isArray(accept) ? accept : [accept]).map((a) => String(a));
  if (!u) {
    /* Jika user memasukkan spasi tetapi accept menghendaki string spasi dengan tanda kutip */
    if (user != null && String(user).length > 0 && list.some((a) => looseNormalize(a).trim() === '')) {
      return { correct: false, close: true, message: "Hampir benar! Tambahkan tanda kutip untuk membuat string: ' '." };
    }
    return { correct: false, reason: 'empty', message: 'Jawaban masih kosong.' };
  }
  if (list.some((a) => normalizeCode(a) === u)) return { correct: true };
  if (list.some((a) => quoteNormalized(a) === quoteNormalized(u))) return { correct: true };
  if (list.some((a) => canonCode(a) === canonCode(u))) return { correct: true };
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
  /* Aturan longgar #3: perbedaan kurung siku < > pada tag HTML */
  const uNoAngle = u.replace(/[<>]/g, '');
  if (uNoAngle && list.some((a) => normalizeCode(a).replace(/[<>]/g, '') === uNoAngle)) {
    return { correct: false, close: true, message: 'Hampir benar! Perhatikan tanda kurung siku < > pada tag HTML.' };
  }
  /* Aturan longgar #4: typo ringan (kemiripan tinggi) → hampir benar. */
  if (bestSimilarity(u, list.map((a) => normalizeCode(a))) >= CLOSE_THRESHOLD) {
    return { correct: false, close: true, message: 'Hampir benar! Ada huruf yang keliru, cek lagi.' };
  }
  /* Aturan longgar #5: kurang benar sedikit (potongan/substring/awalan) */
  if (list.some((a) => {
    const na = normalizeCode(a);
    return (na.length >= 3 && u.length >= 3 && (na.includes(u) || u.includes(na)));
  })) {
    return { correct: false, close: true, message: 'Kurang sedikit lagi! Cek kembali penulisan jawabanmu.' };
  }
  return { correct: false, reason: 'wrong', message: 'Jawaban belum tepat.' };
}

/* ---------- arrange ---------- */
/* Bandingkan urutan sebagai string supaya tahan beda tipe: UI mengirim id blok
 * sebagai string ('0','1',…) sedangkan `answers` di konten boleh berupa angka
 * (0,1,…). Tanpa normalisasi ini, urutan yang sah gagal cocok ('0' !== 0). */
function sameOrder(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) return false;
  return a.every((v, i) => String(v) === String(b[i]));
}

/* Cek apakah sebuah urutan `order` sama persis dengan salah satu urutan sah. */
function matchesOrder(order, candidates) {
  return candidates.some((valid) => sameOrder(order, valid));
}

/* `blocks`  : urutan id blok saat dirender (acuan utama).
 * `answers` : daftar urutan sah TAMBAHAN (opsional). Dipakai saat blok yang isinya
 *             saling-tukar memang sama-sama benar — mis. dua `<li>` bersaudara di
 *             dalam `<ul>`, beberapa `<meta>`, atau deklarasi CSS dalam satu rule.
 *             Tanpa ini, murid yang menukar urutan yang sah tetap dinilai salah.
 */
function checkArrange(userOrder, blocks, answers) {
  if (!Array.isArray(userOrder) || userOrder.length !== blocks.length) {
    return { correct: false, reason: 'incomplete', message: 'Susun dulu semua bloknya.' };
  }
  const validOrders = [blocks];
  if (Array.isArray(answers)) {
    answers.forEach((order) => {
      if (Array.isArray(order) && order.length === blocks.length) validOrders.push(order);
    });
  }
  if (matchesOrder(userOrder, validOrders)) return { correct: true };
  /* Aturan longgar: susunan salah urutan — semua blok lengkap tapi urutan belum pas
   * → "hampir benar / salah urutan", diberi kesempatan memperbaiki. */
  const uKeys = userOrder.map(String).sort().join('\u0000');
  const bKeys = blocks.map(String).sort().join('\u0000');
  const sameSet = uKeys === bKeys;
  if (sameSet) {
    const wrongPos = userOrder.filter((id, i) => String(id) !== String(blocks[i])).length;
    return {
      correct: false,
      close: true,
      message: wrongPos <= 2
        ? 'Hampir benar! Tinggal sedikit blok yang belum di tempat yang pas.'
        : 'Hampir benar! Semua blok sudah terpakai, tapi urutannya masih keliru.',
    };
  }
  return { correct: false, reason: 'wrong', message: 'Urutan blok belum benar.' };
}

/* ---------- mc ---------- */
function checkMc(answer, ex) {
  /* UI mengirim index pilihan (bukan teks). Bandingkan index: opsi bisa sengaja
   * hanya beda kapital (mis. `string` vs `String`), jadi pencocokan teks
   * case-insensitive akan menilai pilihan yang salah sebagai benar. */
  if (typeof answer === 'number') {
    if (!Number.isInteger(answer) || answer < 0 || answer >= ex.options.length) {
      return { correct: false, reason: 'empty', message: 'Pilih salah satu jawaban dulu.' };
    }
    if (answer === ex.a) return { correct: true };
    return { correct: false, reason: 'wrong', message: 'Pilihan belum tepat.' };
  }
  /* Jalur teks (API/pemanggil lain): tetap longgar, salah ketik ringan → hampir benar. */
  const chosen = String(answer == null ? '' : answer);
  if (!looseNormalize(chosen)) return { correct: false, reason: 'empty', message: 'Pilih salah satu jawaban dulu.' };
  const correctText = String(ex.options[ex.a] == null ? '' : ex.options[ex.a]);
  if (normalizeCode(chosen) === normalizeCode(correctText)) return { correct: true };
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
    if (!sameOutput(got, t.expected)) {
      /* Aturan longgar: hasil hampir sama (beda format/tanda tipis) → hampir benar. */
      const g = describeOutput(got);
      const w = describeOutput(t.expected);
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

export { normalizeCode, quoteNormalized, canonCode, looseNormalize, similarity, CLOSE_THRESHOLD, checkFill, checkArrange, checkMc, checkCode };
