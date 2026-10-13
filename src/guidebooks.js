/* CodeDuo — guidebooks.js: Panduan materi ringkas ala Duolingo Unit Guidebook.
 * Disajikan bite-sized: konsep kunci, contoh kode singkat, dan tips praktis Bibit.
 */
'use strict';

export const TOPIC_GUIDES = {
  html: {
    title: 'Panduan HTML',
    summary: 'HTML adalah kerangka struktur setiap halaman web menggunakan elemen tag.',
    keyPoints: [
      'Struktur inti dokumen selalu diawali <!doctype html>, <html>, <head> (metadata), dan <body> (tampilan).',
      'Elemen teks berjenjang dari <h1> (judul utama) sampai <h6>, serta <p> untuk paragraf.',
      'Link memakai tag <a href="...">, gambar memakai <img src="..." alt="..."> untuk aksesibilitas.',
    ],
    snippet: `<!-- Contoh Struktur Dasar -->
<h1>Halo Dunia</h1>
<p>Belajar koding bareng <a href="#/">Bibit</a>.</p>
<img src="robot.png" alt="Bibit si robot">`,
    bibitTip: 'Jangan lupa tag penutup dan selalu isi atribut alt pada gambar!',
  },

  css: {
    title: 'Panduan CSS',
    summary: 'CSS mengatur warna, tipografi, dan tata letak halaman agar menarik dan responsif.',
    keyPoints: [
      'Selector menargetkan elemen HTML (tag, .class, atau #id) lalu mengisi deklarasi property: value.',
      'Box Model terdiri dari content, padding (jarak dalam), border, dan margin (jarak luar).',
      'Flexbox (display: flex) mempermudah perataan elemen horizontal maupun vertikal.',
    ],
    snippet: `/* Contoh Flexbox & Styling */
.kartu {
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: #f0fdf4;
  border-radius: 12px;
}`,
    bibitTip: 'Gunakan class ketimbang id untuk kemudahan dipakai ulang!',
  },

  js: {
    title: 'Panduan JavaScript',
    summary: 'JavaScript memberi logika, perhitungan, dan interaktivitas dinamis pada program.',
    keyPoints: [
      'Gunakan const untuk variabel tetap, let untuk variabel yang nilainya bisa berubah.',
      'Tipe data dasar: string, number, boolean, array [], dan object {}.',
      'Fungsi mengolah input (parameter) dan mengembalikan hasil lewat kata kunci return.',
    ],
    snippet: `// Fungsi & Logika Sederhana
const sapa = (nama) => {
  if (!nama) return 'Halo teman!';
  return \`Halo, \${nama}! Siap ngoding?\`;
};`,
    bibitTip: 'Selalu periksa nilai return agar fungsi tidak menghasilkan undefined!',
  },

  ds: {
    title: 'Panduan Struktur Data',
    summary: 'Struktur data membantu menyimpan dan memproses kumpulan informasi secara efisien.',
    keyPoints: [
      'Array [] menyimpan daftar berurutan. Manipulasi populer: .map(), .filter(), dan .reduce().',
      'Object {} menyimpan pasangan key-value untuk data terstruktur.',
      'Set menyimpan nilai unik tanpa duplikat; Map menyimpan kunci bertipe apa saja.',
    ],
    snippet: `// Transformasi Array
const angka = [1, 2, 3, 4, 5];
const genap = angka.filter((n) => n % 2 === 0);
const kuadrat = genap.map((n) => n * n); // [4, 16]`,
    bibitTip: '.map() membuat array baru, sedangkan .forEach() hanya menjalankan iterasi!',
  },

  sql: {
    title: 'Panduan SQL',
    summary: 'SQL adalah bahasa standar untuk membaca, menyaring, dan mengelola data di database.',
    keyPoints: [
      'SELECT memilih kolom yang ingin diambil, FROM menentukan nama tabel.',
      'WHERE menyaring baris berdasarkan kondisi spesifik.',
      'ORDER BY mengurutkan data (ASC / DESC), LIMIT membatasi jumlah baris hasil.',
    ],
    snippet: `-- Ambil user aktif berumur di atas 18
SELECT nama, email 
FROM users 
WHERE status = 'aktif' AND umur >= 18 
ORDER BY nama ASC 
LIMIT 10;`,
    bibitTip: 'Hati-hati saat UPDATE atau DELETE, jangan sampai lupa klausa WHERE!',
  },

  db: {
    title: 'Panduan Database',
    summary: 'Desain database relasional memastikan integritas, hubungan antar data, dan performa tinggi.',
    keyPoints: [
      'Primary Key (PK) mengidentifikasi tiap baris secara unik; Foreign Key (FK) menghubungkan antar tabel.',
      'JOIN (INNER, LEFT) menggabungkan kolom dari dua tabel atau lebih berdasarkan kunci relasi.',
      'Index mempercepat pencarian data, namun menambah sedikit overhead saat insert/update.',
    ],
    snippet: `-- Relasi antar tabel dengan JOIN
SELECT pesanan.id, users.nama 
FROM pesanan 
INNER JOIN users ON pesanan.user_id = users.id;`,
    bibitTip: 'Pasang Foreign Key untuk mencegah data yatim piatu (orphan records)!',
  },

  api: {
    title: 'Panduan API & Fetch',
    summary: 'API menjembatani pertukaran data antara klien (browser) dengan server lewat HTTP.',
    keyPoints: [
      'fetch(url) mengembalikan Promise yang diselesaikan dengan async / await.',
      'Data umumnya dipertukarkan dalam format JSON via response.json().',
      'Selalu bungkus panggilan jaringan dengan try...catch untuk menangani kegagalan koneksi.',
    ],
    snippet: `// Mengambil Data dengan async/await
async function ambilData(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Gagal mengambil data');
    return await res.json();
  } catch (err) {
    console.error(err);
  }
}`,
    bibitTip: 'Jangan lupa kata kunci await saat memanggil res.json()!',
  },

  ts: {
    title: 'Panduan TypeScript',
    summary: 'TypeScript menambahkan sistem pengetikan statis di atas JavaScript untuk mencegah bug sedini mungkin.',
    keyPoints: [
      'Tipe dasar: string, number, boolean, string[], dan union type (string | number).',
      'Gunakan interface atau type untuk mendefinisikan bentuk objek data secara ketat.',
      'Tanda tanya (?) menandai properti opsional yang boleh kosong.',
    ],
    snippet: `// Definisi Tipe & Interface
interface Murid {
  id: number;
  nama: string;
  skor?: number;
}

function hitung(m: Murid): string {
  return \`\${m.nama}: \${m.skor ?? 0} poin\`;
}`,
    bibitTip: 'Hindari memakai tipe any sebisa mungkin agar proteksi tipe tetap maksimal!',
  },

  rest: {
    title: 'Panduan REST API',
    summary: 'REST adalah standar arsitektur endpoint menggunakan metode HTTP untuk operasi CRUD.',
    keyPoints: [
      'Metode HTTP: GET (baca), POST (buat baru), PUT/PATCH (ubah), DELETE (hapus).',
      'Status code: 200 (OK), 201 (Created), 400 (Bad Request), 404 (Not Found), 500 (Server Error).',
      'Header Content-Type: application/json memberitahu format body data yang dikirim.',
    ],
    snippet: `// Mengirim Data Baru (POST)
await fetch('/api/murid', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ nama: 'Budi', level: 1 }),
});`,
    bibitTip: 'GET dipakai murni untuk membaca data tanpa mengubah status di server!',
  },

  web: {
    title: 'Panduan Blok Web',
    summary: 'Blok Web menggabungkan komponen, state, event listener, dan siklus hidup aplikasi modern.',
    keyPoints: [
      'Komponen memecah antarmuka menjadi bagian-bagian kecil yang dapat dipakai ulang.',
      'State menyimpan data dinamis yang otomatis memperbarui tampilan saat berubah.',
      'Event listener (seperti onClick atau onSubmit) menghubungkan interaksi user dengan fungsi logika.',
    ],
    snippet: `// Pola Komponen & State Sederhana
function TombolSuka({ awal = 0 }) {
  let suka = awal;
  const klik = () => {
    suka += 1;
    console.log('Total suka:', suka);
  };
  return { suka, klik };
}`,
    bibitTip: 'Pecah komponen besar menjadi bagian kecil agar mudah diuji dan dirawat!',
  },
};
