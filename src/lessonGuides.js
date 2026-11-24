/* CodeDuo — lessonGuides.js: MATERI BELAJAR per pelajaran (blok).
 *
 * Setiap pelajaran (lesson) punya halaman materi sendiri: ringkasan konsep,
 * poin penting, contoh kode, dan tips Bibit — ditampilkan SEBELUM latihan
 * (alur: baca materi → kerjakan soal). Data editorial di file ini; fallback
 * otomatis dirangkum dari soal (explain) bila pelajaran belum terdaftar.
 *
 * Format: LESSON_GUIDES[lessonId] = { title, summary, points[], snippet, bibitTip }
 */
'use strict';

const LESSON_GUIDES = {
  /* ===== HTML ===== */
  'html-1': {
    summary: 'Setiap halaman web punya kerangka yang sama: doctype, html, head (informasi tentang halaman), dan body (isi yang terlihat).',
    points: [
      '<!doctype html> memberi tahu browser: "ini dokumen HTML5".',
      '<head> menyimpan metadata (judul tab, charset) — tidak tampil di halaman.',
      '<body> memuat semua konten yang dilihat pengunjung: teks, gambar, tombol.',
    ],
    snippet: `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Web Pertamaku</title>
  </head>
  <body>
    <p>Halo dunia!</p>
  </body>
</html>`,
    bibitTip: 'Ingat: apa yang ada di <head> itu "di balik layar", yang di <body> baru terlihat!',
  },
  'html-2': {
    summary: 'Heading (<h1>–<h6>) menyusun judul berjenjang, dan <p> membuat paragraf. Search engine memakai h1 untuk memahami topik halaman.',
    points: [
      'Pakai <h1> hanya sekali per halaman — itu judul utamanya.',
      'Urutan heading jangan melompat: h1 → h2 → h3, bukan h1 → h4.',
      '<p> otomatis memberi jarak atas-bawah antar paragraf.',
    ],
    snippet: `<h1>Resep Nasi Goreng</h1>
<h2>Bahan</h2>
<p>Nasi, telur, bumbu.</p>
<h2>Cara Memasak</h2>
<p>Tumis bumbu, masukkan nasi.</p>`,
    bibitTip: 'Heading itu bukan soal ukuran huruf — itu soal struktur makna!',
  },
  'html-3': {
    summary: 'Teks bisa ditekankan: <strong> penting (tebal), <em> penekanan (miring), <br> pindah baris, <hr> pemisah tematik.',
    points: [
      '<strong> punya makna semantik "penting"; <b> hanya visual tebal.',
      '<em> menekankan intonasi kalimat; <i> hanya visual miring.',
      '<br> untuk pindah baris di dalam paragraf (alamat, pantun).',
    ],
    snippet: `<p>Belajar koding itu <strong>menyenangkan</strong>,
apalagi kalau <em>ditemani Bibit</em>.<br>Semangat!</p>`,
    bibitTip: 'Screen reader membaca <strong> dengan intonasi berbeda — makna penting!',
  },
  'html-4': {
    summary: 'Link <a href> menghubungkan halaman; protokolnya menentukan tujuan: https:// web, mailto: email, tel: telepon, dan # untuk area yang sama.',
    points: [
      'href="https://..." → website lain; href="#id" → lompat ke elemen di halaman yang sama.',
      'Atribut target="_blank" membuka link di tab baru.',
      'Atribut download memaksa browser mengunduh file, bukan membukanya.',
    ],
    snippet: `<a href="https://example.com">Kunjungi situs</a>
<a href="mailto:halo@example.com">Kirim email</a>
<a href="#bab-2">Lompat ke Bab 2</a>`,
    bibitTip: 'Teks link harus deskriptif — hindari "klik di sini"!',
  },
  'html-5': {
    summary: 'Gambar memakai <img src="..." alt="...">. Atribut alt wajib: teks pengganti kalau gambar gagal tampil dan untuk pembaca layar.',
    points: [
      'src = lokasi file gambar; alt = deskripsi teks pengganti.',
      'width & height menjaga layout stabil saat gambar loading.',
      '<figure> + <figcaption> membungkus gambar dengan keterangan.',
    ],
    snippet: `<img src="bibit.png" alt="Robot Bibit tersenyum" width="200">
<figure>
  <img src="grafik.png" alt="Grafik belajar naik">
  <figcaption>Progres belajar minggu ini</figcaption>
</figure>`,
    bibitTip: 'alt yang baik mendeskripsikan ISI gambar, bukan "gambar" atau "foto"!',
  },
  /* ===== CSS (contoh beberapa; sisanya fallback otomatis) ===== */
  'css-1': {
    summary: 'CSS memilih elemen lalu menata gayanya: tag (p), class (.kartu), atau id (#utama). Deklarasi ditulis property: value;.',
    points: [
      'Selector tag → semua elemen itu; .class → bisa dipakai berulang; #id → unik satu elemen.',
      'Blok deklarasi dibungkus { } dan tiap deklarasi diakhiri titik koma.',
      'Urutan kekuatan: id > class > tag (specificity).',
    ],
    snippet: `p { color: #3c3c3c; }
.kartu { border: 2px solid #e5e5e5; }
#utama { background: #58cc02; }`,
    bibitTip: 'Biasakan pakai class — lebih fleksibel dan bisa dipakai ulang!',
  },
  'css-2': {
    summary: 'Warna di CSS bisa ditulis dengan nama (red), hex (#ff4b4b), rgb(), atau hsl(). Hex paling umum di industri.',
    points: [
      'Hex 6 digit = #RRGGBB; 3 digit #f00 = kependekan dari #ff0000.',
      'rgba(255,75,75,0.5) — angka terakhir = transparansi (alpha).',
      'color untuk teks; background-color untuk latar elemen.',
    ],
    snippet: `.teks { color: #3c3c3c; }
.latar { background-color: rgba(88, 204, 2, 0.15); }`,
    bibitTip: 'Kontras teks & latar harus cukup agar mudah dibaca semua orang!',
  },
  /* ===== JavaScript ===== */
  'js-1': {
    summary: 'Variabel adalah wadah nilai. Pakai const bila nilainya tetap, let bila perlu berubah. Hindari var (aturan lama).',
    points: [
      'const PI = 3.14 → tidak bisa di-reassign; let skor = 0 → bisa diubah.',
      'Nama variabel: camelCase, deskriptif, tidak diawali angka.',
      'Tipe dasar: string ("teks"), number (42), boolean (true/false).',
    ],
    snippet: `const nama = 'Bibit';
let skor = 0;
skor = skor + 10; // 10
const aktif = true;`,
    bibitTip: 'Kalau lupa const/let, variabel "bocor" jadi global — bahaya!',
  },
  'js-2': {
    summary: 'Operator mengolah nilai: aritmatika (+ - * / %), perbandingan (=== !==), dan logika (&& || !).',
    points: [
      'Selalu pakai === (perbandingan ketat), bukan == (yang mengonversi tipe diam-diam).',
      '% (modulo) = sisa pembagian — berguna cek bilangan genap: n % 2 === 0.',
      '&& = dan, || = atau, ! = kebalikan (negasi).',
    ],
    snippet: `const genap = 8 % 2 === 0; // true
const dewasa = 18; // umur
if (umur >= 17 && punyaKtp) { /* boleh */ }`,
    bibitTip: 'Bug klasik: "5" == 5 → true, tapi "5" === 5 → false. Selalu ===!',
  },
  'js-3': {
    summary: 'Fungsi membungkus logika agar bisa dipakai ulang: menerima parameter, memproses, lalu mengembalikan hasil dengan return.',
    points: [
      'Deklarasi: function nama(a, b) { return a + b; } atau arrow: const nama = (a, b) => a + b.',
      'Tanpa return, fungsi menghasilkan undefined.',
      'Parameter = variabel di definisi; argumen = nilai nyata saat dipanggil.',
    ],
    snippet: `function tambah(a, b) {
  return a + b;
}
const kali = (a, b) => a * b;
tambah(2, 3); // 5`,
    bibitTip: 'Cek selalu ada return-nya — fungsi tanpa return = undefined!',
  },
  /* ===== SQL ===== */
  'sql-1': {
    summary: 'SELECT mengambil data: pilih kolomnya, sebutkan tabelnya dengan FROM, dan filter barisnya dengan WHERE.',
    points: [
      'SELECT kolom1, kolom2 FROM tabel — pakai * untuk semua kolom (hemat untuk belajar, boros di produksi).',
      'WHERE kolom = nilai — string pakai kutip satu: WHERE nama = \'Bibit\'.',
      'Alias dengan AS: SELECT nama AS username — mengganti nama kolom di hasil.',
    ],
    snippet: `SELECT nama, email
FROM users
WHERE status = 'aktif';`,
    bibitTip: 'SQL tidak case-sensitive untuk kata kunci, tapi tulis SELECT/FROM kapital agar mudah dibaca!',
  },
  'sql-2': {
    summary: 'Urutan logika query: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT. Menulisnya harus sesuai urutan ini.',
    points: [
      'ORDER BY kolom ASC|DESC — mengurutkan hasil (default ASC).',
      'LIMIT n membatasi jumlah baris yang kembali.',
      'DISTINCT membuang baris duplikat pada hasil SELECT.',
    ],
    snippet: `SELECT DISTINCT kota
FROM users
ORDER BY kota ASC
LIMIT 10;`,
    bibitTip: 'LIMIT di produksi menyelamatkan server — jangan tarik jutaan baris percuma!',
  },
  /* ===== Struktur Data ===== */
  'ds-1': {
    summary: 'Array adalah daftar berurutan: diakses lewat indeks (mulai 0), bisa ditambah (push), dihapus (pop), dan dijelajahi (for/of).',
    points: [
      'arr[0] = elemen pertama; arr.length = jumlah elemen; indeks terakhir = length - 1.',
      'push() menambah di akhir; pop() mengambil dari akhir; shift/unshift untuk depan.',
      'Array bisa memuat tipe apa pun — termasuk array lain (array 2D).',
    ],
    snippet: `const buah = ['apel', 'mangga'];
buah.push('jeruk');     // ['apel','mangga','jeruk']
console.log(buah[0]);   // 'apel'
console.log(buah.length); // 3`,
    bibitTip: 'Index out of range = undefined (bukan error) — sering jadi bug tersembunyi!',
  },
  'ds-2': {
    summary: 'Method array transformasi: map (ubah tiap elemen), filter (saring), reduce (lipat jadi satu nilai), join (gabung jadi string).',
    points: [
      '.map(fn) → array BARU dengan hasil fn di tiap elemen.',
      '.filter(fn) → array baru berisi elemen yang lolos kondisi.',
      '.join(pemisah) menyambung elemen jadi string: [\'a\',\'b\'].join(\' \') → "a b".',
    ],
    snippet: `const angka = [1, 2, 3, 4];
const genap = angka.filter(n => n % 2 === 0); // [2, 4]
const kuadrat = genap.map(n => n * n);        // [4, 16]
const teks = kuadrat.join('-');               // "4-16"`,
    bibitTip: 'map & filter membuat array baru — array aslinya aman tidak berubah!',
  },
  /* ===== TypeScript ===== */
  'ts-1': {
    summary: 'TypeScript menambahkan tipe pada JavaScript: string, number, boolean, array, dan union. Error tipe tertangkap sebelum program jalan.',
    points: [
      'Anotasi: let nama: string = "Bibit"; parameter & return juga bertipe.',
      'string[] = array of string; number | null = union (bisa number atau null).',
      'Kompilator menolak kode yang melanggar tipe — bug mati sebelum deploy.',
    ],
    snippet: `function sapa(nama: string): string {
  return 'Halo, ' + nama;
}
let skor: number = 0;
let catatan: string | null = null;`,
    bibitTip: 'Mulai dari tipe parameter & return — itu 80% manfaat TypeScript!',
  },
  /* ===== API / REST ===== */
  'api-1': {
    summary: 'API = perantara data antara klien dan server. fetch() meminta data (request) dan menerima balasan (response) — umumnya JSON.',
    points: [
      'fetch(url) mengembalikan Promise; tunggu dengan await atau .then().',
      'res.json() mengurai body JSON — juga Promise, jadi perlu await.',
      'res.ok / res.status memberi tahu apakah request berhasil (200–299).',
    ],
    snippet: `const res = await fetch('/api/murid');
if (!res.ok) throw new Error('Gagal: ' + res.status);
const data = await res.json();
console.log(data);`,
    bibitTip: 'Lupa await pada res.json() = kamu mem-print Promise, bukan datanya!',
  },
};

/* Fallback otomatis: rangkum materi dari soal-soal pelajaran (murni, tanpa DOM). */
function titleize(id) {
  return String(id).replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

const EXERCISE_TYPE_LABELS = {
  mc: 'pilihan ganda',
  fill: 'isian sintaks',
  code: 'tulis kode',
  preview: 'live preview',
  arrange: 'susun blok',
  wiring: 'rakit rangkaian',
};

function cleanExplain(raw) {
  return String(raw || '').replace(/\s+/g, ' ').trim();
}

function buildExamplesFromExercises(lesson, editorial) {
  const examples = [];
  const seenCode = new Set();

  if (editorial && editorial.snippet) {
    const code = String(editorial.snippet).trim();
    if (code) {
      seenCode.add(code);
      examples.push({
        label: 'Contoh Utama · ' + (editorial.title || lesson.title),
        code,
        note: 'Perhatikan struktur penulisan, tanda baca, dan urutan ekspresi pada contoh di atas.',
      });
    }
  }

  for (const ex of lesson.exercises) {
    if (examples.length >= 3) break;
    if (!ex) continue;

    if ((ex.type === 'code' || ex.type === 'preview') && ex.starter) {
      const code = String(ex.starter).trim();
      if (code && !seenCode.has(code)) {
        seenCode.add(code);
        examples.push({
          label: ex.type === 'preview' ? 'Kerangka Tampilan (Live Preview)' : 'Pola Kode Latihan',
          code,
          note: cleanExplain(ex.explain) || cleanExplain(ex.q),
        });
      }
    } else if (ex.type === 'fill' && ex.code) {
      const firstAccept = Array.isArray(ex.accept) && ex.accept.length ? String(ex.accept[0]) : '…';
      const filled = String(ex.code).split('___').join(firstAccept).trim();
      if (filled && !seenCode.has(filled)) {
        seenCode.add(filled);
        examples.push({
          label: 'Contoh Sintaks Lengkap',
          code: filled,
          note: cleanExplain(ex.explain) || cleanExplain(ex.q),
        });
      }
    } else if (ex.type === 'arrange' && Array.isArray(ex.blocks) && ex.blocks.length >= 2) {
      const ordered = ex.blocks.join('\n').trim();
      if (ordered && !seenCode.has(ordered)) {
        seenCode.add(ordered);
        examples.push({
          label: 'Urutan Struktur yang Benar',
          code: ordered,
          note: cleanExplain(ex.explain) || cleanExplain(ex.q),
        });
      }
    }
  }

  if (examples.length === 0) {
    /* Fallback untuk bab yang mayoritas pilihan ganda (MC): ekstrak potongan sintaks/istilah kunci dari jawaban benar. */
    const mcSnippets = [];
    for (const ex of lesson.exercises) {
      if (!ex || ex.type !== 'mc' || !Array.isArray(ex.options) || !Number.isInteger(ex.a)) continue;
      const ans = String(ex.options[ex.a] || '').trim();
      const q = cleanExplain(ex.q);
      if (!ans || ans.length > 90) continue;
      const line = `${q} → ${ans}`;
      if (!mcSnippets.includes(line)) mcSnippets.push(line);
      if (mcSnippets.length >= 4) break;
    }
    if (mcSnippets.length > 0) {
      examples.push({
        label: 'Ringkasan Pola & Istilah Kunci',
        code: mcSnippets.join('\n'),
        note: 'Kenali pasangan konsep dan sintaks/istilah di atas sebelum memulai latihan.',
      });
    }
  }

  return examples;
}

function buildExerciseBreakdown(exercises) {
  const counts = {};
  for (const ex of exercises) {
    const t = ex && ex.type ? ex.type : 'mc';
    counts[t] = (counts[t] || 0) + 1;
  }
  const parts = Object.keys(counts).map((t) => `${counts[t]} ${EXERCISE_TYPE_LABELS[t] || t}`);
  return `${exercises.length} soal latihan (${parts.join(', ')})`;
}

function buildPitfalls(lesson, editorial) {
  const pitfalls = [];
  const types = new Set(lesson.exercises.map((e) => e && e.type));

  if (editorial && editorial.pitfalls && Array.isArray(editorial.pitfalls)) {
    editorial.pitfalls.forEach((p) => pitfalls.push(p));
  }
  if (types.has('fill')) {
    pitfalls.push('Perhatikan huruf besar/kecil (case-sensitive), spasi, dan simbol seperti tanda kutip atau titik koma pada soal isian.');
  }
  if (types.has('arrange')) {
    pitfalls.push('Saat menyusun blok kode, cek urutan pembuka hingga penutup serta alur logika dari atas ke bawah.');
  }
  if (types.has('code') || types.has('preview')) {
    pitfalls.push('Uji hasil kerjamu secara bertahap dan pastikan nama fungsi, tag, atau properti sesuai dengan yang diminta soal.');
  }
  if (types.has('wiring')) {
    pitfalls.push('Pastikan sambungan pin positif/signal dan GND tidak tertukar agar rangkaian bekerja aman tanpa korslet.');
  }
  if (pitfalls.length === 0) {
    pitfalls.push('Baca pertanyaan secara menyeluruh sebelum memilih jawaban, karena perbedaan kecil pada sintaks bisa mengubah makna kode.');
  }
  return pitfalls.slice(0, 4);
}

/* lessonGuide(lesson, topic?) → objek materi lengkap untuk halaman Materi terpisah.
 * Tetap mempertahankan field lama { title, summary, points[], snippet, bibitTip } agar kompatibel penuh. */
function lessonGuide(lesson, topic) {
  if (!lesson || !Array.isArray(lesson.exercises)) return null;
  const editorial = LESSON_GUIDES[lesson.id] || null;
  const topicName = topic && topic.name ? topic.name : '';
  const level = lesson.level || 'Dasar';

  /* Kumpulkan seluruh intisari penjelasan unik dari soal-soal di bab ini (utuh, tanpa potong 140 karakter). */
  const extractedPoints = [];
  const seen = new Set();
  for (const ex of lesson.exercises) {
    const e = cleanExplain(ex && ex.explain);
    if (!e) continue;
    const k = e.toLowerCase().slice(0, 48);
    if (seen.has(k)) continue;
    seen.add(k);
    extractedPoints.push(e);
    if (extractedPoints.length >= 8) break;
  }

  const editorialPoints = editorial && Array.isArray(editorial.points) ? editorial.points.slice() : [];
  const mergedPoints = editorialPoints.slice();
  for (const pt of extractedPoints) {
    const key = pt.toLowerCase().slice(0, 36);
    if (!mergedPoints.some((m) => m.toLowerCase().slice(0, 36) === key)) {
      mergedPoints.push(pt);
    }
    if (mergedPoints.length >= 8) break;
  }

  const examples = buildExamplesFromExercises(lesson, editorial);
  const snippet = examples.length ? examples[0].code : null;
  const exerciseSummary = buildExerciseBreakdown(lesson.exercises);
  const pitfalls = buildPitfalls(lesson, editorial);

  const baseSummary = editorial && editorial.summary
    ? editorial.summary
    : `Pada bab ${lesson.title}${topicName ? ' (' + topicName + ')' : ''}, kamu akan mempelajari konsep dasar hingga penerapan praktis yang sering ditemui di dunia nyata.`;

  const overview = editorial && editorial.summary
    ? `${editorial.summary} Bab tingkat ${level} ini dirancang agar kamu memahami alasan di balik setiap aturan sintaks sebelum mengujinya langsung melalui ${exerciseSummary}.`
    : `${baseSummary} Pelajari setiap konsep inti dan contoh sintaks di bawah secara perlahan — seluruh poin dirangkum agar kamu siap menyelesaikan ${exerciseSummary} dengan percaya diri.`;

  const totalWords = (overview + ' ' + mergedPoints.join(' ') + ' ' + pitfalls.join(' ')).split(/\s+/).length;
  const readMinutes = Math.max(2, Math.min(6, Math.ceil(totalWords / 110)));

  return {
    title: editorial && editorial.title ? editorial.title : lesson.title,
    level,
    readMinutes,
    summary: baseSummary,
    overview,
    points: mergedPoints,
    examples,
    snippet,
    pitfalls,
    exerciseSummary,
    bibitTip: editorial && editorial.bibitTip
      ? editorial.bibitTip
      : 'Pahami pola contoh kodenya dulu, lalu coba latihan tanpa terburu-buru — ingatan jangka panjang terbentuk saat kamu mengerti alasannya!',
  };
}

export { LESSON_GUIDES, lessonGuide, titleize };
