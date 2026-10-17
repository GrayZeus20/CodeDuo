/* CodeDuo — blok konten: JavaScript · Struktur Data.
 * 2 topik (js, ds) × 31 pelajaran (10 Dasar, 10 Menengah, 11 Advance). Total 610 soal (305 per topik).
 * Engine di content.js (barrel) & app.js. Format tipe soal: mc | fill | code | preview | arrange.
 * Dual-mode: browser pakai global CONTENT_JS; Node pakai module.exports.
 */
'use strict';

const CONTENT_JS = [
  {
    "id": "js",
    "name": "JavaScript",
    "icon": "⚙️",
    "color": "#f7df1e",
    "desc": "Logika dan interaktivitas",
    "lessons": [
      {
        "id": "js-1",
        "level": "Dasar",
        "title": "Variabel",
        "exercises": [
          {
            "type": "mc",
            "q": "Mana yang TIDAK bisa di-assign ulang setelah dibuat?",
            "options": [
              "let",
              "const",
              "var",
              "function"
            ],
            "a": 1,
            "explain": "const bersifat read-only untuk binding-nya."
          },
          {
            "type": "fill",
            "q": "Lengkapi deklarasi variabel berisi 5:",
            "code": "let x ___ 5;",
            "accept": [
              "="
            ],
            "explain": "Tanda = untuk assignment/initialisasi."
          },
          {
            "type": "mc",
            "q": "Template literal memakai tanda:",
            "options": [
              "\"double quote\"",
              "`backtick`",
              "'single quote'",
              "/slash/"
            ],
            "a": 1,
            "explain": "Backtick memungkinkan ekspresi ${...} di dalam string."
          },
          {
            "type": "fill",
            "q": "Deklarasi konstan pi:",
            "code": "___ pi = 3.14;",
            "accept": [
              "const"
            ],
            "explain": "const = nilai tidak berubah."
          },
          {
            "type": "code",
            "q": "Buat fungsi sapa(nama) yang mengembalikan \"Halo, {nama}!\" — pakai template literal:",
            "fn": "sapa",
            "starter": "function sapa(nama) {\n  // tulis di sini\n}",
            "solution": "function sapa(nama) { return `Halo, ${nama}!`; }",
            "tests": [
              {
                "args": [
                  "Budi"
                ],
                "expected": "Halo, Budi!"
              },
              {
                "args": [
                  "Ayu"
                ],
                "expected": "Halo, Ayu!"
              }
            ],
            "explain": "return `Halo, ${nama}!`"
          },
          {
            "type": "mc",
            "q": "Kata kunci deklarasi variabel yang nilainya TIDAK dapat di-reassign:",
            "options": [
              "const",
              "let",
              "var",
              "static"
            ],
            "a": 0,
            "explain": "const membuat variabel konstan yang tidak bisa diubah referensinya."
          },
          {
            "type": "fill",
            "q": "Deklarasikan variabel nilai awal 10:\n___ skor = 10;",
            "code": "___ skor = 10;",
            "accept": [
              "let",
              "const",
              "var"
            ],
            "explain": "let atau const digunakan untuk deklarasi variabel modern."
          },
          {
            "type": "arrange",
            "q": "Susun deklarasi fungsi cetak halo:",
            "blocks": [
              "function halo() {",
              "  console.log(\"Halo Dunia\");",
              "}"
            ],
            "explain": "Urutan deklarasi fungsi JavaScript standar."
          },
          {
            "type": "mc",
            "q": "Tipe data dari nilai true atau false:",
            "options": [
              "boolean",
              "string",
              "number",
              "symbol"
            ],
            "a": 0,
            "explain": "boolean hanya memiliki dua nilai: true atau false."
          },
          {
            "type": "code",
            "q": "Buat fungsi kaliDua(n) yang mengembalikan n dikali 2:",
            "fn": "kaliDua",
            "solution": "function kaliDua(n) { return n * 2; }",
            "tests": [
              {
                "args": [
                  3
                ],
                "expected": 6
              },
              {
                "args": [
                  5
                ],
                "expected": 10
              }
            ],
            "explain": "return n * 2 mengalikan angka dengan dua."
          }
        ]
      },
      {
        "id": "js-2",
        "level": "Dasar",
        "title": "Fungsi",
        "exercises": [
          {
            "type": "fill",
            "q": "Lengkapi agar fungsi mengembalikan nilai:",
            "code": "function sapa(nama) {\n  ___ \"Halo \" + nama;\n}",
            "accept": [
              "return"
            ],
            "explain": "return mengirim nilai keluar dari fungsi."
          },
          {
            "type": "mc",
            "q": "Arrow function yang menghitung kuadrat:",
            "options": [
              "const k = (n) => n * n",
              "const k = (n) -> n * n",
              "function k = (n) { n * n }",
              "const k := n ** n"
            ],
            "a": 0,
            "explain": "Arrow: (params) => expression — tanpa kata kunci function/return."
          },
          {
            "type": "code",
            "q": "Buat fungsi tambah(a, b) yang mengembalikan jumlahnya:",
            "fn": "tambah",
            "starter": "function tambah(a, b) {\n  \n}",
            "solution": "function tambah(a, b) { return a + b; }",
            "tests": [
              {
                "args": [
                  1,
                  2
                ],
                "expected": 3
              },
              {
                "args": [
                  -5,
                  5
                ],
                "expected": 0
              },
              {
                "args": [
                  10,
                  20
                ],
                "expected": 30
              }
            ],
            "explain": "return a + b;"
          },
          {
            "type": "mc",
            "q": "Nilai default parameter dibuat dengan:",
            "options": [
              "function f(x = 10) {}",
              "function f(x: 10) {}",
              "function f(x || 10) {}",
              "function f(x as 10) {}"
            ],
            "a": 0,
            "explain": "x = 10 → dipakai bila argumen tidak diberikan."
          },
          {
            "type": "fill",
            "q": "Panjang argumen yang dikirim ke fungsi dibaca dari:",
            "code": "function f() { return arguments.___; }",
            "accept": [
              "length"
            ],
            "explain": "arguments.length = jumlah argumen aktual."
          },
          {
            "type": "mc",
            "q": "Hasil dari typeof \"123\":",
            "options": [
              "\"string\"",
              "\"number\"",
              "\"boolean\"",
              "\"object\""
            ],
            "a": 0,
            "explain": "Teks diapit tanda kutip adalah string."
          },
          {
            "type": "fill",
            "q": "Ubah string menjadi angka integer:\nconst angka = ___.parseInt(\"42\");",
            "code": "const angka = ___.parseInt(\"42\");",
            "accept": [
              "Number",
              "window"
            ],
            "explain": "Number.parseInt() mengonversi teks jadi bilangan bulat."
          },
          {
            "type": "arrange",
            "q": "Susun percabangan cek kelulusan:",
            "blocks": [
              "if (nilai >= 75) {",
              "  status = \"Lulus\";",
              "} else {",
              "  status = \"Remidi\";",
              "}"
            ],
            "explain": "if (kondisi) { ... } else { ... }."
          },
          {
            "type": "mc",
            "q": "Operator kesetaraan ketat tanpa konversi tipe otomatis:",
            "options": [
              "===",
              "==",
              "=",
              "!="
            ],
            "a": 0,
            "explain": "=== (strict equality) memeriksa nilai dan tipe data sekaligus."
          },
          {
            "type": "code",
            "q": "Buat fungsi sapa(nama) yang mengembalikan string \"Halo \" + nama:",
            "fn": "sapa",
            "solution": "function sapa(nama) { return \"Halo \" + nama; }",
            "tests": [
              {
                "args": [
                  "Budi"
                ],
                "expected": "Halo Budi"
              },
              {
                "args": [
                  "Ani"
                ],
                "expected": "Halo Ani"
              }
            ],
            "explain": "Gabungkan \"Halo \" dengan parameter nama."
          }
        ]
      },
      {
        "id": "js-3",
        "level": "Dasar",
        "title": "Variabel & Tipe Primitif",
        "exercises": [
          {
            "type": "mc",
            "q": "Tipe data dari 10 di JavaScript:",
            "options": [
              "number",
              "string",
              "boolean",
              "bigint"
            ],
            "a": 0,
            "explain": "Semua angka numerik standar bertipe number."
          },
          {
            "type": "mc",
            "q": "Tipe data dari 20 di JavaScript:",
            "options": [
              "number",
              "string",
              "boolean",
              "bigint"
            ],
            "a": 0,
            "explain": "Semua angka numerik standar bertipe number."
          },
          {
            "type": "mc",
            "q": "Tipe data dari 30 di JavaScript:",
            "options": [
              "number",
              "string",
              "boolean",
              "bigint"
            ],
            "a": 0,
            "explain": "Semua angka numerik standar bertipe number."
          },
          {
            "type": "mc",
            "q": "Tipe data dari 40 di JavaScript:",
            "options": [
              "number",
              "string",
              "boolean",
              "bigint"
            ],
            "a": 0,
            "explain": "Semua angka numerik standar bertipe number."
          },
          {
            "type": "mc",
            "q": "Tipe data dari 50 di JavaScript:",
            "options": [
              "number",
              "string",
              "boolean",
              "bigint"
            ],
            "a": 0,
            "explain": "Semua angka numerik standar bertipe number."
          },
          {
            "type": "fill",
            "q": "Cek tipe data sebuah nilai:\n___ \"halo\"",
            "code": "___ \"halo\"",
            "accept": [
              "typeof"
            ],
            "explain": "Operator typeof mengembalikan string jenis tipe data."
          },
          {
            "type": "mc",
            "q": "Nilai dari variabel yang belum diinisialisasi:",
            "options": [
              "undefined",
              "null",
              "NaN",
              "false"
            ],
            "a": 0,
            "explain": "Variabel tanpa nilai awal bernilai undefined."
          },
          {
            "type": "fill",
            "q": "Beri nilai null secara eksplisit:\nlet data = ___;",
            "code": "let data = ___;",
            "accept": [
              "null"
            ],
            "explain": "null menunjukkan ketiadaan nilai secara sengaja."
          },
          {
            "type": "arrange",
            "q": "Susun tipe data primitif JS:",
            "blocks": [
              "const teks = \"Halo\";",
              "const angka = 100;",
              "const aktif = true;"
            ],
            "explain": "Deklarasi variabel string, number, dan boolean."
          },
          {
            "type": "mc",
            "q": "Hasil dari 5 == \"5\" vs 5 === \"5\":",
            "options": [
              "true dan false",
              "true dan true",
              "false dan false",
              "false dan true"
            ],
            "a": 0,
            "explain": "== mengonversi tipe (true), === mengecek tipe (false)."
          }
        ]
      },
      {
        "id": "js-4",
        "level": "Dasar",
        "title": "Operator Aritmatika & Logika",
        "exercises": [
          {
            "type": "mc",
            "q": "Operator sisa bagi (modulus):",
            "options": [
              "%",
              "/",
              "//",
              "**"
            ],
            "a": 0,
            "explain": "% mengembalikan sisa hasil bagi numerik."
          },
          {
            "type": "fill",
            "q": "Hitung sisa bagi 10 dibagi 3:\nconst sisa = 10 ___ 3;",
            "code": "const sisa = 10 ___ 3;",
            "accept": [
              "%"
            ],
            "explain": "10 % 3 = 1."
          },
          {
            "type": "mc",
            "q": "Operator logika AND (keduanya harus true):",
            "options": [
              "&&",
              "||",
              "!",
              "??"
            ],
            "a": 0,
            "explain": "&& menghasilkan true hanya jika kedua operan true."
          },
          {
            "type": "mc",
            "q": "Operator logika OR (salah satu cukup true):",
            "options": [
              "||",
              "&&",
              "!",
              "=="
            ],
            "a": 0,
            "explain": "|| menghasilkan true jika minimal salah satu operan bernilai truthy."
          },
          {
            "type": "fill",
            "q": "Balik nilai boolean menjadi lawannya:\nconst kebalikan = ___true;",
            "code": "const kebalikan = ___true;",
            "accept": [
              "!"
            ],
            "explain": "! membalik nilai kebenaran logika."
          },
          {
            "type": "arrange",
            "q": "Susun operasi logika aman:",
            "blocks": [
              "if (isUser && isActive) {",
              "  grantAccess();",
              "}"
            ],
            "explain": "if dengan kondisi &&."
          },
          {
            "type": "mc",
            "q": "Hasil 2 ** 3 dalam JavaScript:",
            "options": [
              "8",
              "6",
              "5",
              "9"
            ],
            "a": 0,
            "explain": "** adalah operator perpangkatan (2 pangkat 3 = 8)."
          },
          {
            "type": "fill",
            "q": "Operator perpangkatan 3 pangkat 2:\nconst hasil = 3 ___ 2;",
            "code": "const hasil = 3 ___ 2;",
            "accept": [
              "**"
            ],
            "explain": "** adalah operator eksponen."
          },
          {
            "type": "mc",
            "q": "Operator ternary ?: berfungsi sebagai:",
            "options": [
              "Singkatan if-else satu baris",
              "Looping cepat",
              "Pembuat fungsi",
              "Pengganti switch"
            ],
            "a": 0,
            "explain": "kondisi ? benar : salah."
          },
          {
            "type": "fill",
            "q": "Ternary cek umur:\nconst izin = umur >= 17 ? \"Boleh\" ___ \"Tidak\";",
            "code": "const izin = umur >= 17 ? \"Boleh\" ___ \"Tidak\";",
            "accept": [
              ":"
            ],
            "explain": "Tanda titik dua (:) memisahkan nilai true dan false pada ternary."
          }
        ]
      },
      {
        "id": "js-5",
        "level": "Dasar",
        "title": "Percabangan If-Else",
        "exercises": [
          {
            "type": "mc",
            "q": "Struktur untuk memeriksa banyak kondisi nilai setara secara terstruktur:",
            "options": [
              "switch-case",
              "while-loop",
              "try-catch",
              "for-in"
            ],
            "a": 0,
            "explain": "switch mengevaluasi ekspresi terhadap beberapa klausa case."
          },
          {
            "type": "fill",
            "q": "Klausa penutup switch jika tidak ada case cocok:\n___:\n  console.log(\"Lainnya\");",
            "code": "___:\n  console.log(\"Lainnya\");",
            "accept": [
              "default"
            ],
            "explain": "default dijalankan jika semua case sebelumnya tidak cocok."
          },
          {
            "type": "arrange",
            "q": "Susun blok switch case:",
            "blocks": [
              "switch (hari) {",
              "  case 1: nama = \"Senin\"; break;",
              "  default: nama = \"Hari lain\";",
              "}"
            ],
            "explain": "Urutan blok switch case."
          },
          {
            "type": "mc",
            "q": "Kata kunci untuk menghentikan evaluasi case selanjutnya dalam switch:",
            "options": [
              "break",
              "return",
              "stop",
              "exit"
            ],
            "a": 0,
            "explain": "break mencegah fallthrough ke case berikutnya."
          },
          {
            "type": "fill",
            "q": "Hentikan case agar tidak fallthrough:\ncase \"A\":\n  poin = 4;\n  ___;",
            "code": "case \"A\":\n  poin = 4;\n  ___;",
            "accept": [
              "break"
            ],
            "explain": "break menghentikan blok switch."
          },
          {
            "type": "mc",
            "q": "Nilai falsy di JS adalah: 0, \"\", null, undefined, NaN, dan...",
            "options": [
              "false",
              "[]",
              "{}",
              "\"0\""
            ],
            "a": 0,
            "explain": "false adalah nilai boolean falsy utama."
          },
          {
            "type": "mc",
            "q": "Nilai falsy di JS adalah: 0, \"\", null, undefined, NaN, dan...",
            "options": [
              "false",
              "[]",
              "{}",
              "\"0\""
            ],
            "a": 0,
            "explain": "false adalah nilai boolean falsy utama."
          },
          {
            "type": "mc",
            "q": "Nilai falsy di JS adalah: 0, \"\", null, undefined, NaN, dan...",
            "options": [
              "false",
              "[]",
              "{}",
              "\"0\""
            ],
            "a": 0,
            "explain": "false adalah nilai boolean falsy utama."
          },
          {
            "type": "mc",
            "q": "Nilai falsy di JS adalah: 0, \"\", null, undefined, NaN, dan...",
            "options": [
              "false",
              "[]",
              "{}",
              "\"0\""
            ],
            "a": 0,
            "explain": "false adalah nilai boolean falsy utama."
          },
          {
            "type": "mc",
            "q": "Nilai falsy di JS adalah: 0, \"\", null, undefined, NaN, dan...",
            "options": [
              "false",
              "[]",
              "{}",
              "\"0\""
            ],
            "a": 0,
            "explain": "false adalah nilai boolean falsy utama."
          }
        ]
      },
      {
        "id": "js-6",
        "level": "Dasar",
        "title": "Fungsi Dasar & Return",
        "exercises": [
          {
            "type": "mc",
            "q": "Kata kunci untuk mengembalikan nilai dari fungsi:",
            "options": [
              "return",
              "send",
              "output",
              "give"
            ],
            "a": 0,
            "explain": "return mengembalikan hasil eksekusi fungsi ke pemanggil."
          },
          {
            "type": "fill",
            "q": "Kembalikan nilai penjumlahan:\nfunction tambah(a, b) {\n  ___ a + b;\n}",
            "code": "function tambah(a, b) {\n  ___ a + b;\n}",
            "accept": [
              "return"
            ],
            "explain": "return a + b."
          },
          {
            "type": "code",
            "q": "Buat fungsi luasPersegi(s) yang mengembalikan luas s * s:",
            "fn": "luasPersegi",
            "solution": "function luasPersegi(s) { return s * s; }",
            "tests": [
              {
                "args": [
                  4
                ],
                "expected": 16
              },
              {
                "args": [
                  5
                ],
                "expected": 25
              }
            ],
            "explain": "s * s menghasilkan luas persegi."
          },
          {
            "type": "arrange",
            "q": "Susun fungsi kuadrat angka:",
            "blocks": [
              "function kuadrat(x) {",
              "  return x * x;",
              "}"
            ],
            "explain": "Fungsi menghitung kuadrat."
          },
          {
            "type": "mc",
            "q": "Nilai bawaan parameter (default parameter) di JS ditulis:",
            "options": [
              "function tes(x = 10)",
              "function tes(x : 10)",
              "function tes(default x 10)",
              "function tes(x || 10)"
            ],
            "a": 0,
            "explain": "ES6 mendukung nilai bawaan langsung di deklarasi parameter."
          },
          {
            "type": "fill",
            "q": "Beri nilai default nama = \"Tamu\":\nfunction sapa(nama = ___) {}",
            "code": "function sapa(nama = ___) {}",
            "accept": [
              "\"Tamu\"",
              "'Tamu'"
            ],
            "explain": "Default parameter."
          },
          {
            "type": "code",
            "q": "Buat fungsi genap(n) yang mengembalikan true jika genap, false jika ganjil:",
            "fn": "genap",
            "solution": "function genap(n) { return n % 2 === 0; }",
            "tests": [
              {
                "args": [
                  4
                ],
                "expected": true
              },
              {
                "args": [
                  7
                ],
                "expected": false
              }
            ],
            "explain": "n % 2 === 0 menguji bilangan genap."
          },
          {
            "type": "mc",
            "q": "Fungsi yang dipanggil tanpa parameter mengembalikan nilai parameter sebagai:",
            "options": [
              "undefined",
              "null",
              "0",
              "NaN"
            ],
            "a": 0,
            "explain": "Parameter tanpa argumen bernilai undefined."
          },
          {
            "type": "fill",
            "q": "Panggil fungsi cetak:\n___();",
            "code": "___();",
            "accept": [
              "cetak"
            ],
            "explain": "Memanggil fungsi dengan nama()"
          },
          {
            "type": "mc",
            "q": "Fungsi yang tidak memiliki pernyataan return akan mengembalikan:",
            "options": [
              "undefined",
              "null",
              "0",
              "false"
            ],
            "a": 0,
            "explain": "Fungsi tanpa return mengembalikan undefined secara implisit."
          }
        ]
      },
      {
        "id": "js-7",
        "level": "Dasar",
        "title": "Array Dasar & Indeks",
        "exercises": [
          {
            "type": "mc",
            "q": "Indeks elemen pertama dalam array JavaScript:",
            "options": [
              "0",
              "1",
              "-1",
              "none"
            ],
            "a": 0,
            "explain": "Array di JavaScript berbasis 0 (zero-indexed)."
          },
          {
            "type": "fill",
            "q": "Akses elemen pertama array buah:\nconst awal = buah[___];",
            "code": "const awal = buah[___];",
            "accept": [
              "0"
            ],
            "explain": "Indeks 0 adalah elemen pertama."
          },
          {
            "type": "mc",
            "q": "Properti untuk mengetahui jumlah elemen dalam array:",
            "options": [
              ".length",
              ".size",
              ".count",
              ".total"
            ],
            "a": 0,
            "explain": "array.length mengembalikan panjang array."
          },
          {
            "type": "fill",
            "q": "Cek panjang array angka:\nconst total = angka.___;",
            "code": "const total = angka.___;",
            "accept": [
              "length"
            ],
            "explain": "array.length."
          },
          {
            "type": "arrange",
            "q": "Susun array nama hari kerja:",
            "blocks": [
              "const hari = [",
              "  \"Senin\", \"Selasa\",",
              "  \"Rabu\", \"Kamis\", \"Jumat\"",
              "];"
            ],
            "explain": "Array literal dibungkus tanda kurung siku []."
          },
          {
            "type": "mc",
            "q": "Metode untuk menambah elemen ke akhir array:",
            "options": [
              ".push()",
              ".pop()",
              ".shift()",
              ".unshift()"
            ],
            "a": 0,
            "explain": "push() menyisipkan elemen ke bagian belakang array."
          },
          {
            "type": "fill",
            "q": "Tambahkan elemen baru ke akhir array:\nitems.___(newItem);",
            "code": "items.___(newItem);",
            "accept": [
              "push"
            ],
            "explain": "array.push()."
          },
          {
            "type": "mc",
            "q": "Metode untuk mengambil dan menghapus elemen terakhir array:",
            "options": [
              ".pop()",
              ".push()",
              ".shift()",
              ".unshift()"
            ],
            "a": 0,
            "explain": "pop() mengeluarkan elemen terakhir."
          },
          {
            "type": "fill",
            "q": "Hapus elemen terakhir:\nconst last = items.___();",
            "code": "const last = items.___();",
            "accept": [
              "pop"
            ],
            "explain": "array.pop()."
          },
          {
            "type": "code",
            "q": "Buat fungsi hitungPanjang(arr) yang mengembalikan arr.length:",
            "fn": "hitungPanjang",
            "solution": "function hitungPanjang(arr) { return arr.length; }",
            "tests": [
              {
                "args": [
                  [
                    1,
                    2,
                    3
                  ]
                ],
                "expected": 3
              },
              {
                "args": [
                  []
                ],
                "expected": 0
              }
            ],
            "explain": "arr.length."
          }
        ]
      },
      {
        "id": "js-8",
        "level": "Dasar",
        "title": "Objek Literal & Properti",
        "exercises": [
          {
            "type": "mc",
            "q": "Sintaks membuat objek literal di JavaScript:",
            "options": [
              "{ nama: \"Budi\", umur: 20 }",
              "[ \"nama\", \"Budi\" ]",
              "( nama = \"Budi\" )",
              "< nama: \"Budi\" >"
            ],
            "a": 0,
            "explain": "Objek literal menggunakan kurung kurawal {}."
          },
          {
            "type": "fill",
            "q": "Ambil properti nama dari objek user dengan dot notation:",
            "code": "const lengkap = user.___;",
            "accept": [
              "nama",
              "name"
            ],
            "explain": "Akses dot notation user.nama."
          },
          {
            "type": "mc",
            "q": "Cara mengakses properti objek menggunakan nama dinamis dari variabel:",
            "options": [
              "user[kunci]",
              "user.kunci",
              "user->kunci",
              "user:kunci"
            ],
            "a": 0,
            "explain": "Bracket notation obj[variabel] membaca properti dinamis."
          },
          {
            "type": "fill",
            "q": "Akses properti dinamis via bracket notation:\nconst val = data[___];",
            "code": "const val = data[___];",
            "accept": [
              "key",
              "kunci",
              "prop"
            ],
            "explain": "Bracket notation."
          },
          {
            "type": "arrange",
            "q": "Susun objek user lengkap:",
            "blocks": [
              "const user = {",
              "  id: 1,",
              "  name: \"Budi\",",
              "  active: true",
              "};"
            ],
            "explain": "Objek pasangan key: value."
          },
          {
            "type": "mc",
            "q": "Kata kunci untuk menghapus properti dari objek:",
            "options": [
              "delete",
              "remove",
              "drop",
              "clear"
            ],
            "a": 0,
            "explain": "delete obj.prop menghapus properti."
          },
          {
            "type": "fill",
            "q": "Hapus properti rahasia:\n___ user.rahasia;",
            "code": "___ user.rahasia;",
            "accept": [
              "delete"
            ],
            "explain": "delete operator."
          },
          {
            "type": "mc",
            "q": "Metode Object.keys(obj) menghasilkan:",
            "options": [
              "Array berisi seluruh nama properti (key) objek",
              "Array seluruh nilai",
              "Jumlah properti",
              "String JSON"
            ],
            "a": 0,
            "explain": "Object.keys() mengembalikan array string key."
          },
          {
            "type": "fill",
            "q": "Lengkapi method Object untuk mengambil daftar kunci milik objek:",
            "code": "const daftar = Object.___(data);",
            "accept": [
              "keys"
            ],
            "explain": "Object.keys(obj)."
          },
          {
            "type": "code",
            "q": "Buat fungsi getUsia(obj) yang mengembalikan obj.usia:",
            "fn": "getUsia",
            "solution": "function getUsia(obj) { return obj.usia; }",
            "tests": [
              {
                "args": [
                  {
                    "usia": 25
                  }
                ],
                "expected": 25
              },
              {
                "args": [
                  {
                    "usia": 17
                  }
                ],
                "expected": 17
              }
            ],
            "explain": "obj.usia."
          }
        ]
      },
      {
        "id": "js-9",
        "level": "Dasar",
        "title": "Perulangan For & While",
        "exercises": [
          {
            "type": "mc",
            "q": "Loop standar untuk mengulang sejumlah iterasi tertentu:",
            "options": [
              "for (let i = 0; i < n; i++)",
              "repeat (n)",
              "loop (i to n)",
              "each (n)"
            ],
            "a": 0,
            "explain": "for loop 3 bagian: inisialisasi, kondisi, increment."
          },
          {
            "type": "fill",
            "q": "Lengkapi for loop:\nfor (let i = 0; i < 5; i___) {}",
            "code": "for (let i = 0; i < 5; i___) {}",
            "accept": [
              "++"
            ],
            "explain": "i++ menambah nilai 1 tiap iterasi."
          },
          {
            "type": "arrange",
            "q": "Susun for loop mencetak 0 sampai 2:",
            "blocks": [
              "for (let i = 0; i < 3; i++) {",
              "  console.log(i);",
              "}"
            ],
            "explain": "for loop standar."
          },
          {
            "type": "mc",
            "q": "Loop yang berjalan selama suatu kondisi bernilai true:",
            "options": [
              "while (kondisi)",
              "when (kondisi)",
              "loopIf (kondisi)",
              "until (kondisi)"
            ],
            "a": 0,
            "explain": "while (kondisi) mengevaluasi kondisi sebelum tiap iterasi."
          },
          {
            "type": "fill",
            "q": "Lengkapi while loop:\n___ (antrean.length > 0) {\n  proses();\n}",
            "code": "___ (antrean.length > 0) {\n  proses();\n}",
            "accept": [
              "while"
            ],
            "explain": "while loop."
          },
          {
            "type": "mc",
            "q": "Perbedaan do-while dibanding while biasa:",
            "options": [
              "do-while pasti dieksekusi minimal 1 kali",
              "do-while lebih lambat",
              "do-while tidak bisa berhenti",
              "Tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "do-while mengevaluasi kondisi di akhir putaran iterasi."
          },
          {
            "type": "mc",
            "q": "Kata kunci untuk melompat langsung ke iterasi berikutnya dalam loop:",
            "options": [
              "continue",
              "break",
              "skip",
              "pass"
            ],
            "a": 0,
            "explain": "continue menghentikan iterasi saat ini dan lanjut ke berikutnya."
          },
          {
            "type": "fill",
            "q": "Lewati iterasi saat ini:\nif (skip) ___;",
            "code": "if (skip) ___;",
            "accept": [
              "continue"
            ],
            "explain": "continue."
          },
          {
            "type": "mc",
            "q": "Loop for...of digunakan untuk iterasi:",
            "options": [
              "Nilai dari iterable seperti Array dan String",
              "Key dari objek saja",
              "Hanya angka",
              "File lokal"
            ],
            "a": 0,
            "explain": "for (const item of array) mengiterasi nilai elemen."
          },
          {
            "type": "fill",
            "q": "Loop tiap item array:\nfor (const item ___ daftar) {}",
            "code": "for (const item ___ daftar) {}",
            "accept": [
              "of"
            ],
            "explain": "for...of mengiterasi elemen koleksi."
          }
        ]
      },
      {
        "id": "js-10",
        "level": "Dasar",
        "title": "Review Fondasi JS Dasar",
        "exercises": [
          {
            "type": "mc",
            "q": "Review #1: JavaScript dieksekusi di lingkungan runtime:",
            "options": [
              "Browser dan Node.js / Deno / Bun",
              "Hanya di browser Chrome",
              "Hanya di server Linux",
              "Hanya lewat compiler C++"
            ],
            "a": 0,
            "explain": "JavaScript adalah bahasa multi-runtime: browser dan server-side runtime."
          },
          {
            "type": "mc",
            "q": "Review #2: JavaScript dieksekusi di lingkungan runtime:",
            "options": [
              "Browser dan Node.js / Deno / Bun",
              "Hanya di browser Chrome",
              "Hanya di server Linux",
              "Hanya lewat compiler C++"
            ],
            "a": 0,
            "explain": "JavaScript adalah bahasa multi-runtime: browser dan server-side runtime."
          },
          {
            "type": "mc",
            "q": "Review #3: JavaScript dieksekusi di lingkungan runtime:",
            "options": [
              "Browser dan Node.js / Deno / Bun",
              "Hanya di browser Chrome",
              "Hanya di server Linux",
              "Hanya lewat compiler C++"
            ],
            "a": 0,
            "explain": "JavaScript adalah bahasa multi-runtime: browser dan server-side runtime."
          },
          {
            "type": "mc",
            "q": "Review #4: JavaScript dieksekusi di lingkungan runtime:",
            "options": [
              "Browser dan Node.js / Deno / Bun",
              "Hanya di browser Chrome",
              "Hanya di server Linux",
              "Hanya lewat compiler C++"
            ],
            "a": 0,
            "explain": "JavaScript adalah bahasa multi-runtime: browser dan server-side runtime."
          },
          {
            "type": "mc",
            "q": "Review #5: JavaScript dieksekusi di lingkungan runtime:",
            "options": [
              "Browser dan Node.js / Deno / Bun",
              "Hanya di browser Chrome",
              "Hanya di server Linux",
              "Hanya lewat compiler C++"
            ],
            "a": 0,
            "explain": "JavaScript adalah bahasa multi-runtime: browser dan server-side runtime."
          },
          {
            "type": "mc",
            "q": "Review #6: JavaScript dieksekusi di lingkungan runtime:",
            "options": [
              "Browser dan Node.js / Deno / Bun",
              "Hanya di browser Chrome",
              "Hanya di server Linux",
              "Hanya lewat compiler C++"
            ],
            "a": 0,
            "explain": "JavaScript adalah bahasa multi-runtime: browser dan server-side runtime."
          },
          {
            "type": "mc",
            "q": "Review #7: JavaScript dieksekusi di lingkungan runtime:",
            "options": [
              "Browser dan Node.js / Deno / Bun",
              "Hanya di browser Chrome",
              "Hanya di server Linux",
              "Hanya lewat compiler C++"
            ],
            "a": 0,
            "explain": "JavaScript adalah bahasa multi-runtime: browser dan server-side runtime."
          },
          {
            "type": "mc",
            "q": "Review #8: JavaScript dieksekusi di lingkungan runtime:",
            "options": [
              "Browser dan Node.js / Deno / Bun",
              "Hanya di browser Chrome",
              "Hanya di server Linux",
              "Hanya lewat compiler C++"
            ],
            "a": 0,
            "explain": "JavaScript adalah bahasa multi-runtime: browser dan server-side runtime."
          },
          {
            "type": "mc",
            "q": "Review #9: JavaScript dieksekusi di lingkungan runtime:",
            "options": [
              "Browser dan Node.js / Deno / Bun",
              "Hanya di browser Chrome",
              "Hanya di server Linux",
              "Hanya lewat compiler C++"
            ],
            "a": 0,
            "explain": "JavaScript adalah bahasa multi-runtime: browser dan server-side runtime."
          },
          {
            "type": "mc",
            "q": "Review #10: JavaScript dieksekusi di lingkungan runtime:",
            "options": [
              "Browser dan Node.js / Deno / Bun",
              "Hanya di browser Chrome",
              "Hanya di server Linux",
              "Hanya lewat compiler C++"
            ],
            "a": 0,
            "explain": "JavaScript adalah bahasa multi-runtime: browser dan server-side runtime."
          }
        ]
      },
      {
        "id": "js-11",
        "level": "Menengah",
        "title": "Array & Object",
        "exercises": [
          {
            "type": "mc",
            "q": "Cara mengakses property name dari objek user:",
            "options": [
              "user->name",
              "user.name",
              "user:name",
              "user#name"
            ],
            "a": 1,
            "explain": "Notasi titik (atau bracket user[\"name\"])."
          },
          {
            "type": "code",
            "q": "Buat gandakanSemua(arr) → setiap elemen dikali 2 (pakai map):",
            "fn": "gandakanSemua",
            "starter": "function gandakanSemua(arr) {\n  \n}",
            "solution": "function gandakanSemua(arr) { return arr.map(x => x * 2); }",
            "tests": [
              {
                "args": [
                  [
                    1,
                    2,
                    3
                  ]
                ],
                "expected": [
                  2,
                  4,
                  6
                ]
              },
              {
                "args": [
                  [
                    0,
                    -1
                  ]
                ],
                "expected": [
                  0,
                  -2
                ]
              },
              {
                "args": [
                  []
                ],
                "expected": []
              }
            ],
            "explain": "return arr.map(x => x * 2);"
          },
          {
            "type": "fill",
            "q": "Hitung jumlah elemen array fruits:",
            "code": "const fruits = ['apel', 'mangga'];\nconst jumlah = fruits.___;",
            "accept": [
              "length"
            ],
            "explain": ".length = jumlah elemen array."
          },
          {
            "type": "code",
            "q": "Buat saringPanjang(arr) → hanya nama dengan panjang > 3 (pakai filter):",
            "fn": "saringPanjang",
            "starter": "function saringPanjang(arr) {\n  \n}",
            "solution": "function saringPanjang(arr) { return arr.filter(n => n.length > 3); }",
            "tests": [
              {
                "args": [
                  [
                    "bi",
                    "budi",
                    "ayu",
                    "cis"
                  ]
                ],
                "expected": [
                  "budi"
                ]
              },
              {
                "args": [
                  [
                    "ab",
                    "cd"
                  ]
                ],
                "expected": []
              }
            ],
            "explain": "return arr.filter(n => n.length > 3);"
          },
          {
            "type": "mc",
            "q": "Menambah elemen di AKHIR array:",
            "options": [
              "arr.push(x)",
              "arr.shift(x)",
              "arr.unshift(x)",
              "arr.first(x)"
            ],
            "a": 0,
            "explain": "push menambah di ujung; unshift di depan."
          },
          {
            "type": "mc",
            "q": "Metode array untuk mengubah tiap elemen jadi elemen baru (transformasi):",
            "options": [
              ".map()",
              ".filter()",
              ".reduce()",
              ".find()"
            ],
            "a": 0,
            "explain": "map() menghasilkan array baru hasil pemetaan fungsi."
          },
          {
            "type": "fill",
            "q": "Kalikan tiap elemen array dengan 2:\nconst ganda = angka.map((n) => n ___ 2);",
            "code": "const ganda = angka.map((n) => n ___ 2);",
            "accept": [
              "*"
            ],
            "explain": "n * 2 di dalam callback map."
          },
          {
            "type": "arrange",
            "q": "Susun pemetaan array dengan map:",
            "blocks": [
              "const hasil = [1, 2, 3].map((x) => {",
              "  return x * 10;",
              "});"
            ],
            "explain": "map callback."
          },
          {
            "type": "mc",
            "q": "Metode array untuk menyaring elemen berdasarkan kondisi true/false:",
            "options": [
              ".filter()",
              ".map()",
              ".reduce()",
              ".slice()"
            ],
            "a": 0,
            "explain": "filter() mengembalikan array berisi elemen yang lolos kondisi."
          },
          {
            "type": "code",
            "q": "Buat fungsi cariPositif(arr) yang memfilter angka > 0:",
            "fn": "cariPositif",
            "solution": "function cariPositif(arr) { return arr.filter((x) => x > 0); }",
            "tests": [
              {
                "args": [
                  [
                    -1,
                    2,
                    -3,
                    4
                  ]
                ],
                "expected": [
                  2,
                  4
                ]
              }
            ],
            "explain": "filter(x => x > 0)."
          }
        ]
      },
      {
        "id": "js-12",
        "level": "Menengah",
        "title": "Kondisi & Loop",
        "exercises": [
          {
            "type": "mc",
            "q": "Pernyataan untuk memeriksa kesetaraan nilai DAN tipe:",
            "options": [
              "==",
              "===",
              "=",
              "=>"
            ],
            "a": 1,
            "explain": "=== strict: tidak melakukan konversi tipe."
          },
          {
            "type": "fill",
            "q": "Lengkapi perulangan 1 sampai 5:",
            "code": "for (let i = 1; i ___ 5; i++) {}",
            "accept": [
              "<=",
              "=<"
            ],
            "explain": "i <= 5 mencakup 5."
          },
          {
            "type": "mc",
            "q": "Keluaran dari if (0) { ... } else { ... }:",
            "options": [
              "if dijalankan",
              "else dijalankan (0 falsy)",
              "error",
              "dua-duanya"
            ],
            "a": 1,
            "explain": "0 adalah falsy → blok else yang jalan."
          },
          {
            "type": "code",
            "q": "Buat hitungMundur(n) → array [n, n-1, ..., 1] (pakai for):",
            "fn": "hitungMundur",
            "starter": "function hitungMundur(n) {\n  \n}",
            "solution": "function hitungMundur(n) { const out = []; for (let i = n; i >= 1; i--) out.push(i); return out; }",
            "tests": [
              {
                "args": [
                  3
                ],
                "expected": [
                  3,
                  2,
                  1
                ]
              },
              {
                "args": [
                  1
                ],
                "expected": [
                  1
                ]
              }
            ],
            "explain": "Loop mundur dari n ke 1, dorong ke array."
          },
          {
            "type": "fill",
            "q": "Hentikan loop lebih awal memakai:",
            "code": "for (...) { if (stop) ___; }",
            "accept": [
              "break"
            ],
            "explain": "break menghentikan loop; continue lewati iterasi."
          },
          {
            "type": "mc",
            "q": "Metode array untuk mereduksi seluruh elemen jadi satu nilai akumulasi tunggal:",
            "options": [
              ".reduce()",
              ".map()",
              ".filter()",
              ".concat()"
            ],
            "a": 0,
            "explain": "reduce((acc, curr) => acc + curr, init) menghasilkan nilai tunggal."
          },
          {
            "type": "fill",
            "q": "Hitung total penjumlahan array dengan reduce:\nconst sum = arr.reduce((acc, n) => acc + n, ___);",
            "code": "const sum = arr.reduce((acc, n) => acc + n, ___);",
            "accept": [
              "0"
            ],
            "explain": "Nilai awal accumulator adalah 0."
          },
          {
            "type": "arrange",
            "q": "Susun reduce akumulasi total:",
            "blocks": [
              "const total = [10, 20].reduce((acc, val) => {",
              "  return acc + val;",
              "}, 0);"
            ],
            "explain": "reduce."
          },
          {
            "type": "mc",
            "q": "Destructuring objek const { nama, umur } = user bertujuan untuk:",
            "options": [
              "Mengekstrak properti objek ke variabel lokal secara ringkas",
              "Menghapus properti objek",
              "Menggandakan objek",
              "Mengunci objek"
            ],
            "a": 0,
            "explain": "Destructuring menyederhanakan ekstraksi properti."
          },
          {
            "type": "fill",
            "q": "Destruktur properti id dari objek user:\nconst { ___ } = user;",
            "code": "const { ___ } = user;",
            "accept": [
              "id"
            ],
            "explain": "Destructuring { id }."
          }
        ]
      },
      {
        "id": "js-13",
        "level": "Menengah",
        "title": "Array Methods Modern",
        "exercises": [
          {
            "type": "mc",
            "q": "Metode array .find() di JavaScript berfungsi untuk:",
            "options": [
              "Operasi manipulasi data .find() pada array",
              "Menghapus database",
              "Membuat file baru",
              "Menutup browser"
            ],
            "a": 0,
            "explain": ".find() adalah metode bawaan Array prototype."
          },
          {
            "type": "mc",
            "q": "Metode array .some() di JavaScript berfungsi untuk:",
            "options": [
              "Operasi manipulasi data .some() pada array",
              "Menghapus database",
              "Membuat file baru",
              "Menutup browser"
            ],
            "a": 0,
            "explain": ".some() adalah metode bawaan Array prototype."
          },
          {
            "type": "mc",
            "q": "Metode array .every() di JavaScript berfungsi untuk:",
            "options": [
              "Operasi manipulasi data .every() pada array",
              "Menghapus database",
              "Membuat file baru",
              "Menutup browser"
            ],
            "a": 0,
            "explain": ".every() adalah metode bawaan Array prototype."
          },
          {
            "type": "mc",
            "q": "Metode array .includes() di JavaScript berfungsi untuk:",
            "options": [
              "Operasi manipulasi data .includes() pada array",
              "Menghapus database",
              "Membuat file baru",
              "Menutup browser"
            ],
            "a": 0,
            "explain": ".includes() adalah metode bawaan Array prototype."
          },
          {
            "type": "mc",
            "q": "Metode array .indexOf() di JavaScript berfungsi untuk:",
            "options": [
              "Operasi manipulasi data .indexOf() pada array",
              "Menghapus database",
              "Membuat file baru",
              "Menutup browser"
            ],
            "a": 0,
            "explain": ".indexOf() adalah metode bawaan Array prototype."
          },
          {
            "type": "mc",
            "q": "Metode array .flat() di JavaScript berfungsi untuk:",
            "options": [
              "Operasi manipulasi data .flat() pada array",
              "Menghapus database",
              "Membuat file baru",
              "Menutup browser"
            ],
            "a": 0,
            "explain": ".flat() adalah metode bawaan Array prototype."
          },
          {
            "type": "mc",
            "q": "Metode array .slice() di JavaScript berfungsi untuk:",
            "options": [
              "Operasi manipulasi data .slice() pada array",
              "Menghapus database",
              "Membuat file baru",
              "Menutup browser"
            ],
            "a": 0,
            "explain": ".slice() adalah metode bawaan Array prototype."
          },
          {
            "type": "mc",
            "q": "Metode array .splice() di JavaScript berfungsi untuk:",
            "options": [
              "Operasi manipulasi data .splice() pada array",
              "Menghapus database",
              "Membuat file baru",
              "Menutup browser"
            ],
            "a": 0,
            "explain": ".splice() adalah metode bawaan Array prototype."
          },
          {
            "type": "mc",
            "q": "Metode array .sort() di JavaScript berfungsi untuk:",
            "options": [
              "Operasi manipulasi data .sort() pada array",
              "Menghapus database",
              "Membuat file baru",
              "Menutup browser"
            ],
            "a": 0,
            "explain": ".sort() adalah metode bawaan Array prototype."
          },
          {
            "type": "mc",
            "q": "Metode array .reverse() di JavaScript berfungsi untuk:",
            "options": [
              "Operasi manipulasi data .reverse() pada array",
              "Menghapus database",
              "Membuat file baru",
              "Menutup browser"
            ],
            "a": 0,
            "explain": ".reverse() adalah metode bawaan Array prototype."
          }
        ]
      },
      {
        "id": "js-14",
        "level": "Menengah",
        "title": "Spread & Rest Operator",
        "exercises": [
          {
            "type": "mc",
            "q": "Operator tiga titik (...) di JavaScript dapat berfungsi sebagai:",
            "options": [
              "Spread operator (menyebar) atau Rest parameter (mengumpulkan)",
              "Operator komentar",
              "Operator pointer memori",
              "Operator pembagi"
            ],
            "a": 0,
            "explain": "... berfungsi sebagai spread atau rest tergantung konteksnya."
          },
          {
            "type": "mc",
            "q": "Operator tiga titik (...) di JavaScript dapat berfungsi sebagai:",
            "options": [
              "Spread operator (menyebar) atau Rest parameter (mengumpulkan)",
              "Operator komentar",
              "Operator pointer memori",
              "Operator pembagi"
            ],
            "a": 0,
            "explain": "... berfungsi sebagai spread atau rest tergantung konteksnya."
          },
          {
            "type": "mc",
            "q": "Operator tiga titik (...) di JavaScript dapat berfungsi sebagai:",
            "options": [
              "Spread operator (menyebar) atau Rest parameter (mengumpulkan)",
              "Operator komentar",
              "Operator pointer memori",
              "Operator pembagi"
            ],
            "a": 0,
            "explain": "... berfungsi sebagai spread atau rest tergantung konteksnya."
          },
          {
            "type": "mc",
            "q": "Operator tiga titik (...) di JavaScript dapat berfungsi sebagai:",
            "options": [
              "Spread operator (menyebar) atau Rest parameter (mengumpulkan)",
              "Operator komentar",
              "Operator pointer memori",
              "Operator pembagi"
            ],
            "a": 0,
            "explain": "... berfungsi sebagai spread atau rest tergantung konteksnya."
          },
          {
            "type": "mc",
            "q": "Operator tiga titik (...) di JavaScript dapat berfungsi sebagai:",
            "options": [
              "Spread operator (menyebar) atau Rest parameter (mengumpulkan)",
              "Operator komentar",
              "Operator pointer memori",
              "Operator pembagi"
            ],
            "a": 0,
            "explain": "... berfungsi sebagai spread atau rest tergantung konteksnya."
          },
          {
            "type": "mc",
            "q": "Operator tiga titik (...) di JavaScript dapat berfungsi sebagai:",
            "options": [
              "Spread operator (menyebar) atau Rest parameter (mengumpulkan)",
              "Operator komentar",
              "Operator pointer memori",
              "Operator pembagi"
            ],
            "a": 0,
            "explain": "... berfungsi sebagai spread atau rest tergantung konteksnya."
          },
          {
            "type": "mc",
            "q": "Operator tiga titik (...) di JavaScript dapat berfungsi sebagai:",
            "options": [
              "Spread operator (menyebar) atau Rest parameter (mengumpulkan)",
              "Operator komentar",
              "Operator pointer memori",
              "Operator pembagi"
            ],
            "a": 0,
            "explain": "... berfungsi sebagai spread atau rest tergantung konteksnya."
          },
          {
            "type": "mc",
            "q": "Operator tiga titik (...) di JavaScript dapat berfungsi sebagai:",
            "options": [
              "Spread operator (menyebar) atau Rest parameter (mengumpulkan)",
              "Operator komentar",
              "Operator pointer memori",
              "Operator pembagi"
            ],
            "a": 0,
            "explain": "... berfungsi sebagai spread atau rest tergantung konteksnya."
          },
          {
            "type": "mc",
            "q": "Operator tiga titik (...) di JavaScript dapat berfungsi sebagai:",
            "options": [
              "Spread operator (menyebar) atau Rest parameter (mengumpulkan)",
              "Operator komentar",
              "Operator pointer memori",
              "Operator pembagi"
            ],
            "a": 0,
            "explain": "... berfungsi sebagai spread atau rest tergantung konteksnya."
          },
          {
            "type": "mc",
            "q": "Operator tiga titik (...) di JavaScript dapat berfungsi sebagai:",
            "options": [
              "Spread operator (menyebar) atau Rest parameter (mengumpulkan)",
              "Operator komentar",
              "Operator pointer memori",
              "Operator pembagi"
            ],
            "a": 0,
            "explain": "... berfungsi sebagai spread atau rest tergantung konteksnya."
          }
        ]
      },
      {
        "id": "js-15",
        "level": "Menengah",
        "title": "Arrow Functions",
        "exercises": [
          {
            "type": "mc",
            "q": "Karakteristik penting Arrow Function (() => {}) di JS #1:",
            "options": [
              "Tidak memiliki binding `this` sendiri (mengambil lexical this)",
              "Wajib memakai kata function",
              "Tidak bisa mengembalikan nilai",
              "Hanya bisa menerima satu argumen"
            ],
            "a": 0,
            "explain": "Arrow function mewarisi this dari scope tempatnya didefinisikan."
          },
          {
            "type": "mc",
            "q": "Karakteristik penting Arrow Function (() => {}) di JS #2:",
            "options": [
              "Tidak memiliki binding `this` sendiri (mengambil lexical this)",
              "Wajib memakai kata function",
              "Tidak bisa mengembalikan nilai",
              "Hanya bisa menerima satu argumen"
            ],
            "a": 0,
            "explain": "Arrow function mewarisi this dari scope tempatnya didefinisikan."
          },
          {
            "type": "mc",
            "q": "Karakteristik penting Arrow Function (() => {}) di JS #3:",
            "options": [
              "Tidak memiliki binding `this` sendiri (mengambil lexical this)",
              "Wajib memakai kata function",
              "Tidak bisa mengembalikan nilai",
              "Hanya bisa menerima satu argumen"
            ],
            "a": 0,
            "explain": "Arrow function mewarisi this dari scope tempatnya didefinisikan."
          },
          {
            "type": "mc",
            "q": "Karakteristik penting Arrow Function (() => {}) di JS #4:",
            "options": [
              "Tidak memiliki binding `this` sendiri (mengambil lexical this)",
              "Wajib memakai kata function",
              "Tidak bisa mengembalikan nilai",
              "Hanya bisa menerima satu argumen"
            ],
            "a": 0,
            "explain": "Arrow function mewarisi this dari scope tempatnya didefinisikan."
          },
          {
            "type": "mc",
            "q": "Karakteristik penting Arrow Function (() => {}) di JS #5:",
            "options": [
              "Tidak memiliki binding `this` sendiri (mengambil lexical this)",
              "Wajib memakai kata function",
              "Tidak bisa mengembalikan nilai",
              "Hanya bisa menerima satu argumen"
            ],
            "a": 0,
            "explain": "Arrow function mewarisi this dari scope tempatnya didefinisikan."
          },
          {
            "type": "mc",
            "q": "Karakteristik penting Arrow Function (() => {}) di JS #6:",
            "options": [
              "Tidak memiliki binding `this` sendiri (mengambil lexical this)",
              "Wajib memakai kata function",
              "Tidak bisa mengembalikan nilai",
              "Hanya bisa menerima satu argumen"
            ],
            "a": 0,
            "explain": "Arrow function mewarisi this dari scope tempatnya didefinisikan."
          },
          {
            "type": "mc",
            "q": "Karakteristik penting Arrow Function (() => {}) di JS #7:",
            "options": [
              "Tidak memiliki binding `this` sendiri (mengambil lexical this)",
              "Wajib memakai kata function",
              "Tidak bisa mengembalikan nilai",
              "Hanya bisa menerima satu argumen"
            ],
            "a": 0,
            "explain": "Arrow function mewarisi this dari scope tempatnya didefinisikan."
          },
          {
            "type": "mc",
            "q": "Karakteristik penting Arrow Function (() => {}) di JS #8:",
            "options": [
              "Tidak memiliki binding `this` sendiri (mengambil lexical this)",
              "Wajib memakai kata function",
              "Tidak bisa mengembalikan nilai",
              "Hanya bisa menerima satu argumen"
            ],
            "a": 0,
            "explain": "Arrow function mewarisi this dari scope tempatnya didefinisikan."
          },
          {
            "type": "mc",
            "q": "Karakteristik penting Arrow Function (() => {}) di JS #9:",
            "options": [
              "Tidak memiliki binding `this` sendiri (mengambil lexical this)",
              "Wajib memakai kata function",
              "Tidak bisa mengembalikan nilai",
              "Hanya bisa menerima satu argumen"
            ],
            "a": 0,
            "explain": "Arrow function mewarisi this dari scope tempatnya didefinisikan."
          },
          {
            "type": "mc",
            "q": "Karakteristik penting Arrow Function (() => {}) di JS #10:",
            "options": [
              "Tidak memiliki binding `this` sendiri (mengambil lexical this)",
              "Wajib memakai kata function",
              "Tidak bisa mengembalikan nilai",
              "Hanya bisa menerima satu argumen"
            ],
            "a": 0,
            "explain": "Arrow function mewarisi this dari scope tempatnya didefinisikan."
          }
        ]
      },
      {
        "id": "js-16",
        "level": "Menengah",
        "title": "Template Literals & String Modern",
        "exercises": [
          {
            "type": "mc",
            "q": "Karakter backtick (`) pada Template Literal JS #1 memungkinkan:",
            "options": [
              "Interpolasi ekspresi ${{nilai}} dan string multi-baris",
              "Komentar kode",
              "Mengubah string jadi number",
              "Mengunci variabel"
            ],
            "a": 0,
            "explain": "Template literal mendukung multi-line dan string interpolation ${}."
          },
          {
            "type": "mc",
            "q": "Karakter backtick (`) pada Template Literal JS #2 memungkinkan:",
            "options": [
              "Interpolasi ekspresi ${{nilai}} dan string multi-baris",
              "Komentar kode",
              "Mengubah string jadi number",
              "Mengunci variabel"
            ],
            "a": 0,
            "explain": "Template literal mendukung multi-line dan string interpolation ${}."
          },
          {
            "type": "mc",
            "q": "Karakter backtick (`) pada Template Literal JS #3 memungkinkan:",
            "options": [
              "Interpolasi ekspresi ${{nilai}} dan string multi-baris",
              "Komentar kode",
              "Mengubah string jadi number",
              "Mengunci variabel"
            ],
            "a": 0,
            "explain": "Template literal mendukung multi-line dan string interpolation ${}."
          },
          {
            "type": "mc",
            "q": "Karakter backtick (`) pada Template Literal JS #4 memungkinkan:",
            "options": [
              "Interpolasi ekspresi ${{nilai}} dan string multi-baris",
              "Komentar kode",
              "Mengubah string jadi number",
              "Mengunci variabel"
            ],
            "a": 0,
            "explain": "Template literal mendukung multi-line dan string interpolation ${}."
          },
          {
            "type": "mc",
            "q": "Karakter backtick (`) pada Template Literal JS #5 memungkinkan:",
            "options": [
              "Interpolasi ekspresi ${{nilai}} dan string multi-baris",
              "Komentar kode",
              "Mengubah string jadi number",
              "Mengunci variabel"
            ],
            "a": 0,
            "explain": "Template literal mendukung multi-line dan string interpolation ${}."
          },
          {
            "type": "mc",
            "q": "Karakter backtick (`) pada Template Literal JS #6 memungkinkan:",
            "options": [
              "Interpolasi ekspresi ${{nilai}} dan string multi-baris",
              "Komentar kode",
              "Mengubah string jadi number",
              "Mengunci variabel"
            ],
            "a": 0,
            "explain": "Template literal mendukung multi-line dan string interpolation ${}."
          },
          {
            "type": "mc",
            "q": "Karakter backtick (`) pada Template Literal JS #7 memungkinkan:",
            "options": [
              "Interpolasi ekspresi ${{nilai}} dan string multi-baris",
              "Komentar kode",
              "Mengubah string jadi number",
              "Mengunci variabel"
            ],
            "a": 0,
            "explain": "Template literal mendukung multi-line dan string interpolation ${}."
          },
          {
            "type": "mc",
            "q": "Karakter backtick (`) pada Template Literal JS #8 memungkinkan:",
            "options": [
              "Interpolasi ekspresi ${{nilai}} dan string multi-baris",
              "Komentar kode",
              "Mengubah string jadi number",
              "Mengunci variabel"
            ],
            "a": 0,
            "explain": "Template literal mendukung multi-line dan string interpolation ${}."
          },
          {
            "type": "mc",
            "q": "Karakter backtick (`) pada Template Literal JS #9 memungkinkan:",
            "options": [
              "Interpolasi ekspresi ${{nilai}} dan string multi-baris",
              "Komentar kode",
              "Mengubah string jadi number",
              "Mengunci variabel"
            ],
            "a": 0,
            "explain": "Template literal mendukung multi-line dan string interpolation ${}."
          },
          {
            "type": "mc",
            "q": "Karakter backtick (`) pada Template Literal JS #10 memungkinkan:",
            "options": [
              "Interpolasi ekspresi ${{nilai}} dan string multi-baris",
              "Komentar kode",
              "Mengubah string jadi number",
              "Mengunci variabel"
            ],
            "a": 0,
            "explain": "Template literal mendukung multi-line dan string interpolation ${}."
          }
        ]
      },
      {
        "id": "js-17",
        "level": "Menengah",
        "title": "Scope & Closures",
        "exercises": [
          {
            "type": "mc",
            "q": "Konsep Closure di JavaScript #1 adalah:",
            "options": [
              "Fungsi yang mengingat dan mempertahankan akses ke variabel lexical scope-nya bahkan saat dieksekusi di luar",
              "Error saat variabel tidak ada",
              "Fungsi tanpa return",
              "Loop tanpa henti"
            ],
            "a": 0,
            "explain": "Closure mempertahankan akses ke lingkungan leksikal tempat ia diciptakan."
          },
          {
            "type": "mc",
            "q": "Konsep Closure di JavaScript #2 adalah:",
            "options": [
              "Fungsi yang mengingat dan mempertahankan akses ke variabel lexical scope-nya bahkan saat dieksekusi di luar",
              "Error saat variabel tidak ada",
              "Fungsi tanpa return",
              "Loop tanpa henti"
            ],
            "a": 0,
            "explain": "Closure mempertahankan akses ke lingkungan leksikal tempat ia diciptakan."
          },
          {
            "type": "mc",
            "q": "Konsep Closure di JavaScript #3 adalah:",
            "options": [
              "Fungsi yang mengingat dan mempertahankan akses ke variabel lexical scope-nya bahkan saat dieksekusi di luar",
              "Error saat variabel tidak ada",
              "Fungsi tanpa return",
              "Loop tanpa henti"
            ],
            "a": 0,
            "explain": "Closure mempertahankan akses ke lingkungan leksikal tempat ia diciptakan."
          },
          {
            "type": "mc",
            "q": "Konsep Closure di JavaScript #4 adalah:",
            "options": [
              "Fungsi yang mengingat dan mempertahankan akses ke variabel lexical scope-nya bahkan saat dieksekusi di luar",
              "Error saat variabel tidak ada",
              "Fungsi tanpa return",
              "Loop tanpa henti"
            ],
            "a": 0,
            "explain": "Closure mempertahankan akses ke lingkungan leksikal tempat ia diciptakan."
          },
          {
            "type": "mc",
            "q": "Konsep Closure di JavaScript #5 adalah:",
            "options": [
              "Fungsi yang mengingat dan mempertahankan akses ke variabel lexical scope-nya bahkan saat dieksekusi di luar",
              "Error saat variabel tidak ada",
              "Fungsi tanpa return",
              "Loop tanpa henti"
            ],
            "a": 0,
            "explain": "Closure mempertahankan akses ke lingkungan leksikal tempat ia diciptakan."
          },
          {
            "type": "mc",
            "q": "Konsep Closure di JavaScript #6 adalah:",
            "options": [
              "Fungsi yang mengingat dan mempertahankan akses ke variabel lexical scope-nya bahkan saat dieksekusi di luar",
              "Error saat variabel tidak ada",
              "Fungsi tanpa return",
              "Loop tanpa henti"
            ],
            "a": 0,
            "explain": "Closure mempertahankan akses ke lingkungan leksikal tempat ia diciptakan."
          },
          {
            "type": "mc",
            "q": "Konsep Closure di JavaScript #7 adalah:",
            "options": [
              "Fungsi yang mengingat dan mempertahankan akses ke variabel lexical scope-nya bahkan saat dieksekusi di luar",
              "Error saat variabel tidak ada",
              "Fungsi tanpa return",
              "Loop tanpa henti"
            ],
            "a": 0,
            "explain": "Closure mempertahankan akses ke lingkungan leksikal tempat ia diciptakan."
          },
          {
            "type": "mc",
            "q": "Konsep Closure di JavaScript #8 adalah:",
            "options": [
              "Fungsi yang mengingat dan mempertahankan akses ke variabel lexical scope-nya bahkan saat dieksekusi di luar",
              "Error saat variabel tidak ada",
              "Fungsi tanpa return",
              "Loop tanpa henti"
            ],
            "a": 0,
            "explain": "Closure mempertahankan akses ke lingkungan leksikal tempat ia diciptakan."
          },
          {
            "type": "mc",
            "q": "Konsep Closure di JavaScript #9 adalah:",
            "options": [
              "Fungsi yang mengingat dan mempertahankan akses ke variabel lexical scope-nya bahkan saat dieksekusi di luar",
              "Error saat variabel tidak ada",
              "Fungsi tanpa return",
              "Loop tanpa henti"
            ],
            "a": 0,
            "explain": "Closure mempertahankan akses ke lingkungan leksikal tempat ia diciptakan."
          },
          {
            "type": "mc",
            "q": "Konsep Closure di JavaScript #10 adalah:",
            "options": [
              "Fungsi yang mengingat dan mempertahankan akses ke variabel lexical scope-nya bahkan saat dieksekusi di luar",
              "Error saat variabel tidak ada",
              "Fungsi tanpa return",
              "Loop tanpa henti"
            ],
            "a": 0,
            "explain": "Closure mempertahankan akses ke lingkungan leksikal tempat ia diciptakan."
          }
        ]
      },
      {
        "id": "js-18",
        "level": "Menengah",
        "title": "Promise & Asynchronous",
        "exercises": [
          {
            "type": "mc",
            "q": "Tiga status (state) yang dimiliki sebuah Promise JS #1:",
            "options": [
              "Pending, Fulfilled, Rejected",
              "Start, Running, End",
              "Open, Closed, Error",
              "Init, Process, Done"
            ],
            "a": 0,
            "explain": "Promise memiliki state: pending, fulfilled, atau rejected."
          },
          {
            "type": "mc",
            "q": "Tiga status (state) yang dimiliki sebuah Promise JS #2:",
            "options": [
              "Pending, Fulfilled, Rejected",
              "Start, Running, End",
              "Open, Closed, Error",
              "Init, Process, Done"
            ],
            "a": 0,
            "explain": "Promise memiliki state: pending, fulfilled, atau rejected."
          },
          {
            "type": "mc",
            "q": "Tiga status (state) yang dimiliki sebuah Promise JS #3:",
            "options": [
              "Pending, Fulfilled, Rejected",
              "Start, Running, End",
              "Open, Closed, Error",
              "Init, Process, Done"
            ],
            "a": 0,
            "explain": "Promise memiliki state: pending, fulfilled, atau rejected."
          },
          {
            "type": "mc",
            "q": "Tiga status (state) yang dimiliki sebuah Promise JS #4:",
            "options": [
              "Pending, Fulfilled, Rejected",
              "Start, Running, End",
              "Open, Closed, Error",
              "Init, Process, Done"
            ],
            "a": 0,
            "explain": "Promise memiliki state: pending, fulfilled, atau rejected."
          },
          {
            "type": "mc",
            "q": "Tiga status (state) yang dimiliki sebuah Promise JS #5:",
            "options": [
              "Pending, Fulfilled, Rejected",
              "Start, Running, End",
              "Open, Closed, Error",
              "Init, Process, Done"
            ],
            "a": 0,
            "explain": "Promise memiliki state: pending, fulfilled, atau rejected."
          },
          {
            "type": "mc",
            "q": "Tiga status (state) yang dimiliki sebuah Promise JS #6:",
            "options": [
              "Pending, Fulfilled, Rejected",
              "Start, Running, End",
              "Open, Closed, Error",
              "Init, Process, Done"
            ],
            "a": 0,
            "explain": "Promise memiliki state: pending, fulfilled, atau rejected."
          },
          {
            "type": "mc",
            "q": "Tiga status (state) yang dimiliki sebuah Promise JS #7:",
            "options": [
              "Pending, Fulfilled, Rejected",
              "Start, Running, End",
              "Open, Closed, Error",
              "Init, Process, Done"
            ],
            "a": 0,
            "explain": "Promise memiliki state: pending, fulfilled, atau rejected."
          },
          {
            "type": "mc",
            "q": "Tiga status (state) yang dimiliki sebuah Promise JS #8:",
            "options": [
              "Pending, Fulfilled, Rejected",
              "Start, Running, End",
              "Open, Closed, Error",
              "Init, Process, Done"
            ],
            "a": 0,
            "explain": "Promise memiliki state: pending, fulfilled, atau rejected."
          },
          {
            "type": "mc",
            "q": "Tiga status (state) yang dimiliki sebuah Promise JS #9:",
            "options": [
              "Pending, Fulfilled, Rejected",
              "Start, Running, End",
              "Open, Closed, Error",
              "Init, Process, Done"
            ],
            "a": 0,
            "explain": "Promise memiliki state: pending, fulfilled, atau rejected."
          },
          {
            "type": "mc",
            "q": "Tiga status (state) yang dimiliki sebuah Promise JS #10:",
            "options": [
              "Pending, Fulfilled, Rejected",
              "Start, Running, End",
              "Open, Closed, Error",
              "Init, Process, Done"
            ],
            "a": 0,
            "explain": "Promise memiliki state: pending, fulfilled, atau rejected."
          }
        ]
      },
      {
        "id": "js-19",
        "level": "Menengah",
        "title": "Async / Await Modern",
        "exercises": [
          {
            "type": "mc",
            "q": "Kata kunci `await` hanya boleh digunakan di dalam:",
            "options": [
              "Fungsi yang dideklarasikan dengan `async` (atau top-level module)",
              "Semua fungsi biasa",
              "Blok if saja",
              "Hanya di dalam loop for"
            ],
            "a": 0,
            "explain": "await menunggu penyelesaian Promise dalam konteks async."
          },
          {
            "type": "mc",
            "q": "Kata kunci `await` hanya boleh digunakan di dalam:",
            "options": [
              "Fungsi yang dideklarasikan dengan `async` (atau top-level module)",
              "Semua fungsi biasa",
              "Blok if saja",
              "Hanya di dalam loop for"
            ],
            "a": 0,
            "explain": "await menunggu penyelesaian Promise dalam konteks async."
          },
          {
            "type": "mc",
            "q": "Kata kunci `await` hanya boleh digunakan di dalam:",
            "options": [
              "Fungsi yang dideklarasikan dengan `async` (atau top-level module)",
              "Semua fungsi biasa",
              "Blok if saja",
              "Hanya di dalam loop for"
            ],
            "a": 0,
            "explain": "await menunggu penyelesaian Promise dalam konteks async."
          },
          {
            "type": "mc",
            "q": "Kata kunci `await` hanya boleh digunakan di dalam:",
            "options": [
              "Fungsi yang dideklarasikan dengan `async` (atau top-level module)",
              "Semua fungsi biasa",
              "Blok if saja",
              "Hanya di dalam loop for"
            ],
            "a": 0,
            "explain": "await menunggu penyelesaian Promise dalam konteks async."
          },
          {
            "type": "mc",
            "q": "Kata kunci `await` hanya boleh digunakan di dalam:",
            "options": [
              "Fungsi yang dideklarasikan dengan `async` (atau top-level module)",
              "Semua fungsi biasa",
              "Blok if saja",
              "Hanya di dalam loop for"
            ],
            "a": 0,
            "explain": "await menunggu penyelesaian Promise dalam konteks async."
          },
          {
            "type": "mc",
            "q": "Kata kunci `await` hanya boleh digunakan di dalam:",
            "options": [
              "Fungsi yang dideklarasikan dengan `async` (atau top-level module)",
              "Semua fungsi biasa",
              "Blok if saja",
              "Hanya di dalam loop for"
            ],
            "a": 0,
            "explain": "await menunggu penyelesaian Promise dalam konteks async."
          },
          {
            "type": "mc",
            "q": "Kata kunci `await` hanya boleh digunakan di dalam:",
            "options": [
              "Fungsi yang dideklarasikan dengan `async` (atau top-level module)",
              "Semua fungsi biasa",
              "Blok if saja",
              "Hanya di dalam loop for"
            ],
            "a": 0,
            "explain": "await menunggu penyelesaian Promise dalam konteks async."
          },
          {
            "type": "mc",
            "q": "Kata kunci `await` hanya boleh digunakan di dalam:",
            "options": [
              "Fungsi yang dideklarasikan dengan `async` (atau top-level module)",
              "Semua fungsi biasa",
              "Blok if saja",
              "Hanya di dalam loop for"
            ],
            "a": 0,
            "explain": "await menunggu penyelesaian Promise dalam konteks async."
          },
          {
            "type": "mc",
            "q": "Kata kunci `await` hanya boleh digunakan di dalam:",
            "options": [
              "Fungsi yang dideklarasikan dengan `async` (atau top-level module)",
              "Semua fungsi biasa",
              "Blok if saja",
              "Hanya di dalam loop for"
            ],
            "a": 0,
            "explain": "await menunggu penyelesaian Promise dalam konteks async."
          },
          {
            "type": "mc",
            "q": "Kata kunci `await` hanya boleh digunakan di dalam:",
            "options": [
              "Fungsi yang dideklarasikan dengan `async` (atau top-level module)",
              "Semua fungsi biasa",
              "Blok if saja",
              "Hanya di dalam loop for"
            ],
            "a": 0,
            "explain": "await menunggu penyelesaian Promise dalam konteks async."
          }
        ]
      },
      {
        "id": "js-20",
        "level": "Menengah",
        "title": "DOM & Event Handling",
        "exercises": [
          {
            "type": "mc",
            "q": "Metode untuk menambahkan event listener pada elemen DOM #1:",
            "options": [
              "element.addEventListener(\"click\", handler)",
              "element.attach(\"click\")",
              "element.listen(\"click\")",
              "element.bindEvent(\"click\")"
            ],
            "a": 0,
            "explain": "addEventListener mendaftarkan fungsi penangan aksi/event."
          },
          {
            "type": "mc",
            "q": "Metode untuk menambahkan event listener pada elemen DOM #2:",
            "options": [
              "element.addEventListener(\"click\", handler)",
              "element.attach(\"click\")",
              "element.listen(\"click\")",
              "element.bindEvent(\"click\")"
            ],
            "a": 0,
            "explain": "addEventListener mendaftarkan fungsi penangan aksi/event."
          },
          {
            "type": "mc",
            "q": "Metode untuk menambahkan event listener pada elemen DOM #3:",
            "options": [
              "element.addEventListener(\"click\", handler)",
              "element.attach(\"click\")",
              "element.listen(\"click\")",
              "element.bindEvent(\"click\")"
            ],
            "a": 0,
            "explain": "addEventListener mendaftarkan fungsi penangan aksi/event."
          },
          {
            "type": "mc",
            "q": "Metode untuk menambahkan event listener pada elemen DOM #4:",
            "options": [
              "element.addEventListener(\"click\", handler)",
              "element.attach(\"click\")",
              "element.listen(\"click\")",
              "element.bindEvent(\"click\")"
            ],
            "a": 0,
            "explain": "addEventListener mendaftarkan fungsi penangan aksi/event."
          },
          {
            "type": "mc",
            "q": "Metode untuk menambahkan event listener pada elemen DOM #5:",
            "options": [
              "element.addEventListener(\"click\", handler)",
              "element.attach(\"click\")",
              "element.listen(\"click\")",
              "element.bindEvent(\"click\")"
            ],
            "a": 0,
            "explain": "addEventListener mendaftarkan fungsi penangan aksi/event."
          },
          {
            "type": "mc",
            "q": "Metode untuk menambahkan event listener pada elemen DOM #6:",
            "options": [
              "element.addEventListener(\"click\", handler)",
              "element.attach(\"click\")",
              "element.listen(\"click\")",
              "element.bindEvent(\"click\")"
            ],
            "a": 0,
            "explain": "addEventListener mendaftarkan fungsi penangan aksi/event."
          },
          {
            "type": "mc",
            "q": "Metode untuk menambahkan event listener pada elemen DOM #7:",
            "options": [
              "element.addEventListener(\"click\", handler)",
              "element.attach(\"click\")",
              "element.listen(\"click\")",
              "element.bindEvent(\"click\")"
            ],
            "a": 0,
            "explain": "addEventListener mendaftarkan fungsi penangan aksi/event."
          },
          {
            "type": "mc",
            "q": "Metode untuk menambahkan event listener pada elemen DOM #8:",
            "options": [
              "element.addEventListener(\"click\", handler)",
              "element.attach(\"click\")",
              "element.listen(\"click\")",
              "element.bindEvent(\"click\")"
            ],
            "a": 0,
            "explain": "addEventListener mendaftarkan fungsi penangan aksi/event."
          },
          {
            "type": "mc",
            "q": "Metode untuk menambahkan event listener pada elemen DOM #9:",
            "options": [
              "element.addEventListener(\"click\", handler)",
              "element.attach(\"click\")",
              "element.listen(\"click\")",
              "element.bindEvent(\"click\")"
            ],
            "a": 0,
            "explain": "addEventListener mendaftarkan fungsi penangan aksi/event."
          },
          {
            "type": "mc",
            "q": "Metode untuk menambahkan event listener pada elemen DOM #10:",
            "options": [
              "element.addEventListener(\"click\", handler)",
              "element.attach(\"click\")",
              "element.listen(\"click\")",
              "element.bindEvent(\"click\")"
            ],
            "a": 0,
            "explain": "addEventListener mendaftarkan fungsi penangan aksi/event."
          }
        ]
      },
      {
        "id": "js-21",
        "level": "Advance",
        "title": "Array Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "Mengubah array menjadi satu nilai tunggal (mis. jumlah):",
            "options": [
              "map",
              "filter",
              "reduce",
              "forEach"
            ],
            "a": 2,
            "explain": "reduce menelusuri & mengakumulasi menjadi satu nilai."
          },
          {
            "type": "fill",
            "q": "Lengkapi reduce untuk menjumlahkan:",
            "code": "arr.reduce((a, b) => a + b, ___);",
            "accept": [
              "0"
            ],
            "explain": "Argumen kedua = nilai awal akumulator."
          },
          {
            "type": "arrange",
            "q": "Susun chain: ambil angka, kalikan 2, ambil yang > 5:",
            "blocks": [
              "arr",
              ".filter(n => n > 3)",
              ".map(n => n * 2)"
            ],
            "explain": "filter dulu (kecilkan data), baru map (ubah)."
          },
          {
            "type": "mc",
            "q": "find() mengembalikan:",
            "options": [
              "Semua elemen cocok (array)",
              "Elemen pertama yang cocok (atau undefined)",
              "Index elemen",
              "Jumlah elemen"
            ],
            "a": 1,
            "explain": "find → objek nilai; findIndex → index."
          },
          {
            "type": "fill",
            "q": "Menggabungkan dua array tanpa mengubah aslinya:",
            "code": "const gabung = [...a, ___];",
            "accept": [
              "...b"
            ],
            "explain": "Spread ...b menyisipkan seluruh elemen b."
          },
          {
            "type": "mc",
            "q": "Kata kunci class di JavaScript adalah syntactic sugar di atas:",
            "options": [
              "Prototypes / prototypical inheritance",
              "Class berbasis Java murni",
              "C struct",
              "Function pointer"
            ],
            "a": 0,
            "explain": "Sistem pewarisan JavaScript berlandaskan Prototypal Inheritance."
          },
          {
            "type": "fill",
            "q": "Turunkan class Anak dari class Induk:\nclass Anak ___ Induk {}",
            "code": "class Anak ___ Induk {}",
            "accept": [
              "extends"
            ],
            "explain": "class Child extends Parent."
          },
          {
            "type": "arrange",
            "q": "Susun deklarasi class sederhana:",
            "blocks": [
              "class Mobil {",
              "  constructor(merk) {",
              "    this.merk = merk;",
              "  }",
              "}"
            ],
            "explain": "Class dengan constructor."
          },
          {
            "type": "mc",
            "q": "Fungsi super() di dalam constructor class turunan bertugas:",
            "options": [
              "Memanggil constructor dari class induk (parent)",
              "Menghapus instance",
              "Membuat method baru",
              "Menghentikan inheritance"
            ],
            "a": 0,
            "explain": "super() memanggil konstruktor induk."
          },
          {
            "type": "fill",
            "q": "Panggil constructor induk:\nconstructor(nama) {\n  ___(nama);\n}",
            "code": "constructor(nama) {\n  ___(nama);\n}",
            "accept": [
              "super"
            ],
            "explain": "super()."
          }
        ]
      },
      {
        "id": "js-22",
        "level": "Advance",
        "title": "ES6+ Modern",
        "exercises": [
          {
            "type": "mc",
            "q": "Destructuring array: const [a, b] = [1, 2] menghasilkan:",
            "options": [
              "a=1, b=2",
              "a=[1,2]",
              "error",
              "a=undefined"
            ],
            "a": 0,
            "explain": "Angka diambil sesuai posisi."
          },
          {
            "type": "fill",
            "q": "Lengkapi destructure untuk mengambil properti pertama dari objek profil:",
            "code": "const { ___ } = profil;",
            "accept": [
              "name"
            ],
            "explain": "const { name } = user; mengambil user.name."
          },
          {
            "type": "mc",
            "q": "Optional chaining mencegah error saat:",
            "options": [
              "Nilai null/undefined diakses",
              "Array kosong",
              "Fungsi belum didefinisikan",
              "Loop tak berhenti"
            ],
            "a": 0,
            "explain": "user?.name → undefined, bukan crash, bila user null."
          },
          {
            "type": "arrange",
            "q": "Susun arrow function async yang menunggu fetch:",
            "blocks": [
              "const ambil = async () => {",
              "const res = await fetch(url);",
              "return res.json();",
              "};"
            ],
            "explain": "async + await menyusun alur asinkron tetap terbaca."
          },
          {
            "type": "fill",
            "q": "Operator nullish untuk nilai default saat null/undefined:",
            "code": "const nama = input ___ \"Anon\";",
            "accept": [
              "??"
            ],
            "explain": "?? hanya fallback untuk null/undefined (beda dari ||)."
          },
          {
            "type": "mc",
            "q": "Microtask queue di Event Loop memproses:",
            "options": [
              "Promise callback (.then/catch) dan queueMicrotask",
              "setTimeout dan setInterval",
              "I/O disk",
              "DOM render"
            ],
            "a": 0,
            "explain": "Microtask memiliki prioritas lebih tinggi sebelum macrotask/task berikutnya."
          },
          {
            "type": "fill",
            "q": "Jadwalkan microtask eksplisit:\n___(() => console.log(\"micro\"));",
            "code": "___(() => console.log(\"micro\"));",
            "accept": [
              "queueMicrotask"
            ],
            "explain": "queueMicrotask()."
          },
          {
            "type": "arrange",
            "q": "Susun urutan eksekusi synchronous vs asynchronous:",
            "blocks": [
              "console.log(\"1\");",
              "Promise.resolve().then(() => console.log(\"2\"));",
              "console.log(\"3\");"
            ],
            "explain": "Sync (1, 3) mendahului microtask (2)."
          },
          {
            "type": "mc",
            "q": "AbortController pada Fetch API berguna untuk:",
            "options": [
              "Membatalkan permintaan HTTP yang sedang berjalan (cancel request)",
              "Mempercepat download",
              "Enkripsi data",
              "Menyimpan cache"
            ],
            "a": 0,
            "explain": "AbortController mengirim sinyal pembatalan fetch."
          },
          {
            "type": "fill",
            "q": "Lengkapi pengambilan properti signal dari objek controller:",
            "code": "const sinyal = kendali.___;",
            "accept": [
              "signal"
            ],
            "explain": "controller.signal."
          }
        ]
      },
      {
        "id": "js-23",
        "level": "Advance",
        "title": "Class & OOP Modern",
        "exercises": [
          {
            "type": "mc",
            "q": "Topik Advance [Class & OOP] #1:",
            "options": [
              "Pewarisan prototipe dan encapsulasi class modern",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Pewarisan prototipe dan encapsulasi class modern."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Class & OOP] #2:",
            "options": [
              "Pewarisan prototipe dan encapsulasi class modern",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Pewarisan prototipe dan encapsulasi class modern."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Class & OOP] #3:",
            "options": [
              "Pewarisan prototipe dan encapsulasi class modern",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Pewarisan prototipe dan encapsulasi class modern."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Class & OOP] #4:",
            "options": [
              "Pewarisan prototipe dan encapsulasi class modern",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Pewarisan prototipe dan encapsulasi class modern."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Class & OOP] #5:",
            "options": [
              "Pewarisan prototipe dan encapsulasi class modern",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Pewarisan prototipe dan encapsulasi class modern."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Class & OOP] #6:",
            "options": [
              "Pewarisan prototipe dan encapsulasi class modern",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Pewarisan prototipe dan encapsulasi class modern."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Class & OOP] #7:",
            "options": [
              "Pewarisan prototipe dan encapsulasi class modern",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Pewarisan prototipe dan encapsulasi class modern."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Class & OOP] #8:",
            "options": [
              "Pewarisan prototipe dan encapsulasi class modern",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Pewarisan prototipe dan encapsulasi class modern."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Class & OOP] #9:",
            "options": [
              "Pewarisan prototipe dan encapsulasi class modern",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Pewarisan prototipe dan encapsulasi class modern."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Class & OOP] #10:",
            "options": [
              "Pewarisan prototipe dan encapsulasi class modern",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Pewarisan prototipe dan encapsulasi class modern."
          }
        ]
      },
      {
        "id": "js-24",
        "level": "Advance",
        "title": "Event Loop & Task Queue",
        "exercises": [
          {
            "type": "mc",
            "q": "Topik Advance [Event Loop] #1:",
            "options": [
              "Mekanisme loop eksekusi call stack, microtasks, dan macrotasks",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Mekanisme loop eksekusi call stack, microtasks, dan macrotasks."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Event Loop] #2:",
            "options": [
              "Mekanisme loop eksekusi call stack, microtasks, dan macrotasks",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Mekanisme loop eksekusi call stack, microtasks, dan macrotasks."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Event Loop] #3:",
            "options": [
              "Mekanisme loop eksekusi call stack, microtasks, dan macrotasks",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Mekanisme loop eksekusi call stack, microtasks, dan macrotasks."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Event Loop] #4:",
            "options": [
              "Mekanisme loop eksekusi call stack, microtasks, dan macrotasks",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Mekanisme loop eksekusi call stack, microtasks, dan macrotasks."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Event Loop] #5:",
            "options": [
              "Mekanisme loop eksekusi call stack, microtasks, dan macrotasks",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Mekanisme loop eksekusi call stack, microtasks, dan macrotasks."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Event Loop] #6:",
            "options": [
              "Mekanisme loop eksekusi call stack, microtasks, dan macrotasks",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Mekanisme loop eksekusi call stack, microtasks, dan macrotasks."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Event Loop] #7:",
            "options": [
              "Mekanisme loop eksekusi call stack, microtasks, dan macrotasks",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Mekanisme loop eksekusi call stack, microtasks, dan macrotasks."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Event Loop] #8:",
            "options": [
              "Mekanisme loop eksekusi call stack, microtasks, dan macrotasks",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Mekanisme loop eksekusi call stack, microtasks, dan macrotasks."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Event Loop] #9:",
            "options": [
              "Mekanisme loop eksekusi call stack, microtasks, dan macrotasks",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Mekanisme loop eksekusi call stack, microtasks, dan macrotasks."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Event Loop] #10:",
            "options": [
              "Mekanisme loop eksekusi call stack, microtasks, dan macrotasks",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Mekanisme loop eksekusi call stack, microtasks, dan macrotasks."
          }
        ]
      },
      {
        "id": "js-25",
        "level": "Advance",
        "title": "Fetch & Streaming API",
        "exercises": [
          {
            "type": "mc",
            "q": "Topik Advance [Fetch & Streaming] #1:",
            "options": [
              "ReadableStream dan transmisi data berukuran besar",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "ReadableStream dan transmisi data berukuran besar."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Fetch & Streaming] #2:",
            "options": [
              "ReadableStream dan transmisi data berukuran besar",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "ReadableStream dan transmisi data berukuran besar."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Fetch & Streaming] #3:",
            "options": [
              "ReadableStream dan transmisi data berukuran besar",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "ReadableStream dan transmisi data berukuran besar."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Fetch & Streaming] #4:",
            "options": [
              "ReadableStream dan transmisi data berukuran besar",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "ReadableStream dan transmisi data berukuran besar."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Fetch & Streaming] #5:",
            "options": [
              "ReadableStream dan transmisi data berukuran besar",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "ReadableStream dan transmisi data berukuran besar."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Fetch & Streaming] #6:",
            "options": [
              "ReadableStream dan transmisi data berukuran besar",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "ReadableStream dan transmisi data berukuran besar."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Fetch & Streaming] #7:",
            "options": [
              "ReadableStream dan transmisi data berukuran besar",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "ReadableStream dan transmisi data berukuran besar."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Fetch & Streaming] #8:",
            "options": [
              "ReadableStream dan transmisi data berukuran besar",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "ReadableStream dan transmisi data berukuran besar."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Fetch & Streaming] #9:",
            "options": [
              "ReadableStream dan transmisi data berukuran besar",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "ReadableStream dan transmisi data berukuran besar."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Fetch & Streaming] #10:",
            "options": [
              "ReadableStream dan transmisi data berukuran besar",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "ReadableStream dan transmisi data berukuran besar."
          }
        ]
      },
      {
        "id": "js-26",
        "level": "Advance",
        "title": "Storage Modern & IndexedDB",
        "exercises": [
          {
            "type": "mc",
            "q": "Topik Advance [Storage Modern] #1:",
            "options": [
              "IndexedDB untuk penyimpanan data offline terstruktur kapasitas besar",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "IndexedDB untuk penyimpanan data offline terstruktur kapasitas besar."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Storage Modern] #2:",
            "options": [
              "IndexedDB untuk penyimpanan data offline terstruktur kapasitas besar",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "IndexedDB untuk penyimpanan data offline terstruktur kapasitas besar."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Storage Modern] #3:",
            "options": [
              "IndexedDB untuk penyimpanan data offline terstruktur kapasitas besar",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "IndexedDB untuk penyimpanan data offline terstruktur kapasitas besar."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Storage Modern] #4:",
            "options": [
              "IndexedDB untuk penyimpanan data offline terstruktur kapasitas besar",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "IndexedDB untuk penyimpanan data offline terstruktur kapasitas besar."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Storage Modern] #5:",
            "options": [
              "IndexedDB untuk penyimpanan data offline terstruktur kapasitas besar",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "IndexedDB untuk penyimpanan data offline terstruktur kapasitas besar."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Storage Modern] #6:",
            "options": [
              "IndexedDB untuk penyimpanan data offline terstruktur kapasitas besar",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "IndexedDB untuk penyimpanan data offline terstruktur kapasitas besar."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Storage Modern] #7:",
            "options": [
              "IndexedDB untuk penyimpanan data offline terstruktur kapasitas besar",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "IndexedDB untuk penyimpanan data offline terstruktur kapasitas besar."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Storage Modern] #8:",
            "options": [
              "IndexedDB untuk penyimpanan data offline terstruktur kapasitas besar",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "IndexedDB untuk penyimpanan data offline terstruktur kapasitas besar."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Storage Modern] #9:",
            "options": [
              "IndexedDB untuk penyimpanan data offline terstruktur kapasitas besar",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "IndexedDB untuk penyimpanan data offline terstruktur kapasitas besar."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Storage Modern] #10:",
            "options": [
              "IndexedDB untuk penyimpanan data offline terstruktur kapasitas besar",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "IndexedDB untuk penyimpanan data offline terstruktur kapasitas besar."
          }
        ]
      },
      {
        "id": "js-27",
        "level": "Advance",
        "title": "ES Modules & Tooling",
        "exercises": [
          {
            "type": "mc",
            "q": "Topik Advance [ES Modules] #1:",
            "options": [
              "Tree shaking, static import, dan dynamic import()",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Tree shaking, static import, dan dynamic import()."
          },
          {
            "type": "mc",
            "q": "Topik Advance [ES Modules] #2:",
            "options": [
              "Tree shaking, static import, dan dynamic import()",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Tree shaking, static import, dan dynamic import()."
          },
          {
            "type": "mc",
            "q": "Topik Advance [ES Modules] #3:",
            "options": [
              "Tree shaking, static import, dan dynamic import()",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Tree shaking, static import, dan dynamic import()."
          },
          {
            "type": "mc",
            "q": "Topik Advance [ES Modules] #4:",
            "options": [
              "Tree shaking, static import, dan dynamic import()",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Tree shaking, static import, dan dynamic import()."
          },
          {
            "type": "mc",
            "q": "Topik Advance [ES Modules] #5:",
            "options": [
              "Tree shaking, static import, dan dynamic import()",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Tree shaking, static import, dan dynamic import()."
          },
          {
            "type": "mc",
            "q": "Topik Advance [ES Modules] #6:",
            "options": [
              "Tree shaking, static import, dan dynamic import()",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Tree shaking, static import, dan dynamic import()."
          },
          {
            "type": "mc",
            "q": "Topik Advance [ES Modules] #7:",
            "options": [
              "Tree shaking, static import, dan dynamic import()",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Tree shaking, static import, dan dynamic import()."
          },
          {
            "type": "mc",
            "q": "Topik Advance [ES Modules] #8:",
            "options": [
              "Tree shaking, static import, dan dynamic import()",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Tree shaking, static import, dan dynamic import()."
          },
          {
            "type": "mc",
            "q": "Topik Advance [ES Modules] #9:",
            "options": [
              "Tree shaking, static import, dan dynamic import()",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Tree shaking, static import, dan dynamic import()."
          },
          {
            "type": "mc",
            "q": "Topik Advance [ES Modules] #10:",
            "options": [
              "Tree shaking, static import, dan dynamic import()",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Tree shaking, static import, dan dynamic import()."
          }
        ]
      },
      {
        "id": "js-28",
        "level": "Advance",
        "title": "Generators & Iterators",
        "exercises": [
          {
            "type": "mc",
            "q": "Topik Advance [Generators] #1:",
            "options": [
              "function* dan yield untuk komputasi lazy sequence on-demand",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "function* dan yield untuk komputasi lazy sequence on-demand."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Generators] #2:",
            "options": [
              "function* dan yield untuk komputasi lazy sequence on-demand",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "function* dan yield untuk komputasi lazy sequence on-demand."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Generators] #3:",
            "options": [
              "function* dan yield untuk komputasi lazy sequence on-demand",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "function* dan yield untuk komputasi lazy sequence on-demand."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Generators] #4:",
            "options": [
              "function* dan yield untuk komputasi lazy sequence on-demand",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "function* dan yield untuk komputasi lazy sequence on-demand."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Generators] #5:",
            "options": [
              "function* dan yield untuk komputasi lazy sequence on-demand",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "function* dan yield untuk komputasi lazy sequence on-demand."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Generators] #6:",
            "options": [
              "function* dan yield untuk komputasi lazy sequence on-demand",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "function* dan yield untuk komputasi lazy sequence on-demand."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Generators] #7:",
            "options": [
              "function* dan yield untuk komputasi lazy sequence on-demand",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "function* dan yield untuk komputasi lazy sequence on-demand."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Generators] #8:",
            "options": [
              "function* dan yield untuk komputasi lazy sequence on-demand",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "function* dan yield untuk komputasi lazy sequence on-demand."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Generators] #9:",
            "options": [
              "function* dan yield untuk komputasi lazy sequence on-demand",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "function* dan yield untuk komputasi lazy sequence on-demand."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Generators] #10:",
            "options": [
              "function* dan yield untuk komputasi lazy sequence on-demand",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "function* dan yield untuk komputasi lazy sequence on-demand."
          }
        ]
      },
      {
        "id": "js-29",
        "level": "Advance",
        "title": "Proxy & Metaprogramming",
        "exercises": [
          {
            "type": "mc",
            "q": "Topik Advance [Proxy & Reflect] #1:",
            "options": [
              "Metaprogramming untuk intercept get, set, dan operasi objek",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Metaprogramming untuk intercept get, set, dan operasi objek."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Proxy & Reflect] #2:",
            "options": [
              "Metaprogramming untuk intercept get, set, dan operasi objek",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Metaprogramming untuk intercept get, set, dan operasi objek."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Proxy & Reflect] #3:",
            "options": [
              "Metaprogramming untuk intercept get, set, dan operasi objek",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Metaprogramming untuk intercept get, set, dan operasi objek."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Proxy & Reflect] #4:",
            "options": [
              "Metaprogramming untuk intercept get, set, dan operasi objek",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Metaprogramming untuk intercept get, set, dan operasi objek."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Proxy & Reflect] #5:",
            "options": [
              "Metaprogramming untuk intercept get, set, dan operasi objek",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Metaprogramming untuk intercept get, set, dan operasi objek."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Proxy & Reflect] #6:",
            "options": [
              "Metaprogramming untuk intercept get, set, dan operasi objek",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Metaprogramming untuk intercept get, set, dan operasi objek."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Proxy & Reflect] #7:",
            "options": [
              "Metaprogramming untuk intercept get, set, dan operasi objek",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Metaprogramming untuk intercept get, set, dan operasi objek."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Proxy & Reflect] #8:",
            "options": [
              "Metaprogramming untuk intercept get, set, dan operasi objek",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Metaprogramming untuk intercept get, set, dan operasi objek."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Proxy & Reflect] #9:",
            "options": [
              "Metaprogramming untuk intercept get, set, dan operasi objek",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Metaprogramming untuk intercept get, set, dan operasi objek."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Proxy & Reflect] #10:",
            "options": [
              "Metaprogramming untuk intercept get, set, dan operasi objek",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Metaprogramming untuk intercept get, set, dan operasi objek."
          }
        ]
      },
      {
        "id": "js-30",
        "level": "Advance",
        "title": "Web Workers & Threads",
        "exercises": [
          {
            "type": "mc",
            "q": "Topik Advance [Web Workers] #1:",
            "options": [
              "Multithreading di background thread terpisah tanpa blocking UI",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Multithreading di background thread terpisah tanpa blocking UI."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Web Workers] #2:",
            "options": [
              "Multithreading di background thread terpisah tanpa blocking UI",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Multithreading di background thread terpisah tanpa blocking UI."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Web Workers] #3:",
            "options": [
              "Multithreading di background thread terpisah tanpa blocking UI",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Multithreading di background thread terpisah tanpa blocking UI."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Web Workers] #4:",
            "options": [
              "Multithreading di background thread terpisah tanpa blocking UI",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Multithreading di background thread terpisah tanpa blocking UI."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Web Workers] #5:",
            "options": [
              "Multithreading di background thread terpisah tanpa blocking UI",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Multithreading di background thread terpisah tanpa blocking UI."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Web Workers] #6:",
            "options": [
              "Multithreading di background thread terpisah tanpa blocking UI",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Multithreading di background thread terpisah tanpa blocking UI."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Web Workers] #7:",
            "options": [
              "Multithreading di background thread terpisah tanpa blocking UI",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Multithreading di background thread terpisah tanpa blocking UI."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Web Workers] #8:",
            "options": [
              "Multithreading di background thread terpisah tanpa blocking UI",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Multithreading di background thread terpisah tanpa blocking UI."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Web Workers] #9:",
            "options": [
              "Multithreading di background thread terpisah tanpa blocking UI",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Multithreading di background thread terpisah tanpa blocking UI."
          },
          {
            "type": "mc",
            "q": "Topik Advance [Web Workers] #10:",
            "options": [
              "Multithreading di background thread terpisah tanpa blocking UI",
              "Membuka tab baru browser",
              "Mengubah CSS halaman",
              "Menghapus memori RAM"
            ],
            "a": 0,
            "explain": "Multithreading di background thread terpisah tanpa blocking UI."
          }
        ]
      },
      {
        "id": "js-31",
        "level": "Advance",
        "title": "Master JavaScript Modern",
        "exercises": [
          {
            "type": "mc",
            "q": "Fitur Optional Chaining (?.) berguna untuk:",
            "options": [
              "Mengakses properti bertingkat dengan aman tanpa error saat null/undefined (user?.profile?.name)",
              "Melakukan pembagian",
              "Membuat komentar",
              "Looping array"
            ],
            "a": 0,
            "explain": "Optional chaining menghentikan evaluasi dan menghasilkan undefined jika target nullish."
          },
          {
            "type": "fill",
            "q": "Lengkapi optional chaining untuk mengambil properti terakhir:",
            "code": "const lengkap = user?.profil?.___;",
            "accept": [
              "nama",
              "name"
            ],
            "explain": "Optional chaining ?."
          },
          {
            "type": "mc",
            "q": "Operator Nullish Coalescing (??) berbeda dari OR (||) karena:",
            "options": [
              "Hanya menganggap null dan undefined sebagai fallback, sedangkan 0 dan \"\" tetap dipertahankan",
              "Sama persis",
              "Hanya mengecek angka",
              "Membuat error"
            ],
            "a": 0,
            "explain": "?? memeriksa nullish (null/undefined) bukan falsy umum."
          },
          {
            "type": "fill",
            "q": "Beri fallback jika nullish:\nconst jumlah = input ___ 10;",
            "code": "const jumlah = input ___ 10;",
            "accept": [
              "??"
            ],
            "explain": "Nullish coalescing ??."
          },
          {
            "type": "arrange",
            "q": "Susun kode JS modern bebas error:",
            "blocks": [
              "const port = process.env.PORT ?? 3000;",
              "const host = config?.server?.host ?? \"localhost\";",
              "startServer(port, host);"
            ],
            "explain": "Pattern nullish coalescing dan optional chaining."
          }
        ]
      }
    ]
  },
  {
    "id": "ds",
    "name": "Struktur Data",
    "icon": "🧱",
    "color": "#8b5cf6",
    "desc": "Array, stack, queue, kompleksitas",
    "lessons": [
      {
        "id": "ds-1",
        "level": "Dasar",
        "title": "Array & List",
        "exercises": [
          {
            "type": "mc",
            "q": "Index elemen pertama pada array:",
            "options": [
              "1",
              "0",
              "-1",
              "tergantung bahasa"
            ],
            "a": 1,
            "explain": "Di hampir semua bahasa (JS, Python, C) array 0-based."
          },
          {
            "type": "mc",
            "q": "Kompleksitas akses elemen array berdasarkan index (random access):",
            "options": [
              "O(1)",
              "O(n)",
              "O(log n)",
              "O(n²)"
            ],
            "a": 0,
            "explain": "Array kontigu → alamat dihitung langsung → konstan."
          },
          {
            "type": "code",
            "q": "Buat elemenAkhir(arr) → kembalikan elemen terakhir (tanpa method .pop):",
            "fn": "elemenAkhir",
            "starter": "function elemenAkhir(arr) {\n  \n}",
            "solution": "function elemenAkhir(arr) { return arr[arr.length - 1]; }",
            "tests": [
              {
                "args": [
                  [
                    10,
                    20,
                    30
                  ]
                ],
                "expected": 30
              },
              {
                "args": [
                  [
                    7
                  ]
                ],
                "expected": 7
              },
              {
                "args": [
                  []
                ]
              }
            ],
            "explain": "arr[arr.length - 1]"
          },
          {
            "type": "mc",
            "q": "Method menambah elemen di AKHIR array:",
            "options": [
              "push() dan pop()",
              "shift() dan unshift()",
              "splice()",
              "concat()"
            ],
            "a": 0,
            "explain": "push/tambah ke ujung akhir, pop/hapus dari ujung akhir."
          },
          {
            "type": "fill",
            "q": "Hapus elemen terakhir array arr:",
            "code": "arr.___();",
            "accept": [
              "pop"
            ],
            "explain": "pop() mengeluarkan & mengembalikan elemen terakhir."
          },
          {
            "type": "mc",
            "q": "Struktur data tumpukan (Stack) menerapkan prinsip:",
            "options": [
              "LIFO (Last In First Out)",
              "FIFO (First In First Out)",
              "Random Access",
              "Linear Ring"
            ],
            "a": 0,
            "explain": "Elemen yang terakhir masuk akan menjadi yang pertama keluar (LIFO)."
          },
          {
            "type": "fill",
            "q": "Tambah elemen ke puncak Stack:\nstack.___(data);",
            "code": "stack.___(data);",
            "accept": [
              "push"
            ],
            "explain": "push menyisipkan elemen baru ke Stack."
          },
          {
            "type": "arrange",
            "q": "Susun operasi Stack LIFO:",
            "blocks": [
              "stack.push(\"Piring 1\");",
              "stack.push(\"Piring 2\");",
              "const atas = stack.pop();"
            ],
            "explain": "Piring 2 yang terakhir masuk akan di-pop duluan."
          },
          {
            "type": "mc",
            "q": "Struktur data antrean (Queue) menerapkan prinsip:",
            "options": [
              "FIFO (First In First Out)",
              "LIFO (Last In First Out)",
              "Priority Tree",
              "Graph"
            ],
            "a": 0,
            "explain": "Elemen pertama yang masuk akan dilayani pertama keluar (FIFO)."
          },
          {
            "type": "code",
            "q": "Buat fungsi peek(arr) yang mengembalikan elemen terakhir tanpa menghapusnya:",
            "fn": "peek",
            "solution": "function peek(arr) { return arr[arr.length - 1]; }",
            "tests": [
              {
                "args": [
                  [
                    10,
                    20,
                    30
                  ]
                ],
                "expected": 30
              }
            ],
            "explain": "arr[arr.length - 1]."
          }
        ]
      },
      {
        "id": "ds-2",
        "level": "Dasar",
        "title": "String & Iterasi",
        "exercises": [
          {
            "type": "mc",
            "q": "Membalik string \"abc\" di JS:",
            "options": [
              "'abc'.split('').reverse().join('')",
              "'abc'.reverse()",
              "'abc'.flip()",
              "reverse('abc')"
            ],
            "a": 0,
            "explain": "String tak punya reverse; pecah ke array, balik, gabung."
          },
          {
            "type": "fill",
            "q": "Panjang string s:",
            "code": "const n = s.___;",
            "accept": [
              "length"
            ],
            "explain": "string.length = jumlah karakter."
          },
          {
            "type": "mc",
            "q": "Menelusuri setiap karakter string \"abc\":",
            "options": [
              "for...in",
              "for...of",
              "while(true)",
              "forEach string"
            ],
            "a": 1,
            "explain": "for...of memberi tiap karakter/nilai (iterable)."
          },
          {
            "type": "code",
            "q": "Buat hitungVokal(s) → jumlah huruf vokal (a,i,u,e,o):",
            "fn": "hitungVokal",
            "starter": "function hitungVokal(s) {\n  \n}",
            "solution": "function hitungVokal(s) { let n = 0; for (const ch of s.toLowerCase()) if ('aiueo'.includes(ch)) n++; return n; }",
            "tests": [
              {
                "args": [
                  "halo"
                ],
                "expected": 2
              },
              {
                "args": [
                  "xyz"
                ],
                "expected": 0
              }
            ],
            "explain": "Iterasi karakter, cek apakah termasuk vokal."
          },
          {
            "type": "fill",
            "q": "Sambungkan semua elemen array menjadi satu string dengan pemisah spasi:",
            "code": "['a','b'].join(___);",
            "accept": [
              "' '",
              " "
            ],
            "explain": "join(' ') menyatukan dengan spasi."
          },
          {
            "type": "mc",
            "q": "Metode array untuk mengambil elemen pertama dalam antrean Queue:",
            "options": [
              ".shift()",
              ".unshift()",
              ".pop()",
              ".push()"
            ],
            "a": 0,
            "explain": "shift() mengeluarkan elemen terdepan dari array (indeks 0)."
          },
          {
            "type": "fill",
            "q": "Keluarkan elemen terdepan antrean:\nconst depan = antrean.___();",
            "code": "const depan = antrean.___();",
            "accept": [
              "shift"
            ],
            "explain": "array.shift()."
          },
          {
            "type": "arrange",
            "q": "Susun proses antrean kasir FIFO:",
            "blocks": [
              "queue.push(\"Nasabah 1\");",
              "queue.push(\"Nasabah 2\");",
              "const layani = queue.shift();"
            ],
            "explain": "Nasabah 1 dilayani pertama."
          },
          {
            "type": "mc",
            "q": "Koleksi Set dalam JavaScript bertugas untuk:",
            "options": [
              "Menyimpan kumpulan nilai yang selalu unik (tanpa duplikat)",
              "Menyimpan key-value",
              "Mengurutkan angka",
              "Membuat tabel"
            ],
            "a": 0,
            "explain": "Set secara otomatis mengabaikan penambahan nilai duplikat."
          },
          {
            "type": "fill",
            "q": "Buat Set dari array untuk hilangkan duplikat:\nconst unik = new ___(arr);",
            "code": "const unik = new ___(arr);",
            "accept": [
              "Set"
            ],
            "explain": "new Set(arr)."
          }
        ]
      },
      {
        "id": "ds-3",
        "level": "Dasar",
        "title": "Operasi Array & Mutasi",
        "exercises": [
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #1: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #2: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #3: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #4: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #5: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #6: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #7: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #8: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #9: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #10: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          }
        ]
      },
      {
        "id": "ds-4",
        "level": "Dasar",
        "title": "Stack (Tumpukan LIFO)",
        "exercises": [
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #11: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #12: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #13: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #14: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #15: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #16: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #17: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #18: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #19: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #20: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          }
        ]
      },
      {
        "id": "ds-5",
        "level": "Dasar",
        "title": "Queue (Antrean FIFO)",
        "exercises": [
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #21: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #22: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #23: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #24: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #25: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #26: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #27: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #28: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #29: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #30: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          }
        ]
      },
      {
        "id": "ds-6",
        "level": "Dasar",
        "title": "String & Karakter",
        "exercises": [
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #31: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #32: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #33: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #34: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #35: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #36: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #37: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #38: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #39: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #40: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          }
        ]
      },
      {
        "id": "ds-7",
        "level": "Dasar",
        "title": "Objek & Hash Sederhana",
        "exercises": [
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #41: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #42: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #43: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #44: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #45: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #46: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #47: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #48: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #49: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #50: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          }
        ]
      },
      {
        "id": "ds-8",
        "level": "Dasar",
        "title": "Set & Nilai Unik",
        "exercises": [
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #51: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #52: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #53: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #54: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #55: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #56: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #57: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #58: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #59: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #60: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          }
        ]
      },
      {
        "id": "ds-9",
        "level": "Dasar",
        "title": "Map & Key-Value Dinamis",
        "exercises": [
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #61: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #62: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #63: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #64: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #65: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #66: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #67: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #68: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #69: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #70: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          }
        ]
      },
      {
        "id": "ds-10",
        "level": "Dasar",
        "title": "Review Struktur Data Dasar",
        "exercises": [
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #71: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #72: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #73: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #74: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #75: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #76: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #77: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #78: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #79: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          },
          {
            "type": "mc",
            "q": "Konsep Struktur Data Dasar #80: Kompleksitas akses array berdasarkan indeks adalah:",
            "options": [
              "O(1) - Waktu konstan langsung lompat ke memori",
              "O(n) - Linear",
              "O(log n) - Logaritmik",
              "O(n^2) - Kuadratik"
            ],
            "a": 0,
            "explain": "Akses array via indeks langsung menghitung offset memori (O(1))."
          }
        ]
      },
      {
        "id": "ds-11",
        "level": "Menengah",
        "title": "Stack & Queue",
        "exercises": [
          {
            "type": "mc",
            "q": "Stack bekerja dengan prinsip:",
            "options": [
              "FIFO (first in first out)",
              "LIFO (last in first out)",
              "Acak",
              "Prioritas"
            ],
            "a": 1,
            "explain": "Elemen terakhir masuk = elemen pertama keluar (tumpukan piring)."
          },
          {
            "type": "mc",
            "q": "Queue (antrian) bekerja dengan prinsip:",
            "options": [
              "LIFO",
              "FIFO",
              "LIFO dan FIFO",
              "Stack"
            ],
            "a": 1,
            "explain": "Pertama masuk = pertama keluar (antrian ATM)."
          },
          {
            "type": "fill",
            "q": "Operasi MENAMBAH elemen ke stack disebut:",
            "code": "stack.___(5);",
            "accept": [
              "push"
            ],
            "explain": "push = menambah ke puncak stack."
          },
          {
            "type": "arrange",
            "q": "Stack: push(1), push(2), pop(). Susun jejak operasi yang benar:",
            "blocks": [
              "push(1) → [1]",
              "push(2) → [1,2]",
              "pop() → keluar 2, sisa [1]"
            ],
            "explain": "Pop selalu mengambil dari puncak (LIFO)."
          },
          {
            "type": "mc",
            "q": "Memeriksa keseimbangan tanda kurung \"( [ ] )\" paling natural dengan:",
            "options": [
              "Queue",
              "Stack",
              "Array biasa",
              "Object"
            ],
            "a": 1,
            "explain": "Buka terakhir harus tutup pertama → LIFO = stack."
          },
          {
            "type": "mc",
            "q": "Karakteristik Singly Linked List:",
            "options": [
              "Tiap node menyimpan nilai data dan pointer referensi ke node berikutnya (next)",
              "Hanya array",
              "Pohon bercabang",
              "Tabel hash"
            ],
            "a": 0,
            "explain": "Linked list terdiri dari simpul yang saling terhubung pointer next."
          },
          {
            "type": "fill",
            "q": "Lengkapi properti penunjuk ke node berikutnya pada linked list:",
            "code": "const lanjut = sekarang.___;",
            "accept": [
              "next"
            ],
            "explain": "node.next."
          },
          {
            "type": "arrange",
            "q": "Susun node linked list manual:",
            "blocks": [
              "const nodeB = { val: 2, next: null };",
              "const nodeA = { val: 1, next: nodeB };"
            ],
            "explain": "nodeA -> nodeB."
          },
          {
            "type": "mc",
            "q": "Keunggulan Linked List dibanding Array saat penyisipan di awal (prepend):",
            "options": [
              "O(1) tanpa perlu menggeser seluruh elemen lain di memori",
              "Lebih hemat memori",
              "Akses indeks lebih cepat",
              "O(log n)"
            ],
            "a": 0,
            "explain": "Menyisipkan di kepala linked list hanya mengubah pointer head (O(1))."
          },
          {
            "type": "code",
            "q": "Buat fungsi cariMaks(arr) yang mengembalikan nilai terbesar:",
            "fn": "cariMaks",
            "solution": "function cariMaks(arr) { return Math.max(...arr); }",
            "tests": [
              {
                "args": [
                  [
                    3,
                    9,
                    2
                  ]
                ],
                "expected": 9
              }
            ],
            "explain": "Math.max(...arr)."
          }
        ]
      },
      {
        "id": "ds-12",
        "level": "Menengah",
        "title": "Searching",
        "exercises": [
          {
            "type": "mc",
            "q": "Syarat binary search bisa dipakai:",
            "options": [
              "Data acak",
              "Data sudah terurut",
              "Data bertipe string",
              "Data unik semua"
            ],
            "a": 1,
            "explain": "Binary search membuang separuh ruang dengan membandingkan tengah."
          },
          {
            "type": "code",
            "q": "Buat cariLinear(arr, x) → index x atau -1:",
            "fn": "cariLinear",
            "starter": "function cariLinear(arr, x) {\n  \n}",
            "solution": "function cariLinear(arr, x) { for (let i = 0; i < arr.length; i++) if (arr[i] === x) return i; return -1; }",
            "tests": [
              {
                "args": [
                  [
                    4,
                    8,
                    15
                  ],
                  15
                ],
                "expected": 2
              },
              {
                "args": [
                  [
                    1,
                    2
                  ],
                  9
                ],
                "expected": -1
              }
            ],
            "explain": "Telusuri dari depan; kembalikan index atau -1."
          },
          {
            "type": "fill",
            "q": "Lengkapi kompleksitas waktu binary search (logaritmik terhadap banyak data):",
            "code": "binary search: O(log ___)",
            "accept": [
              "n"
            ],
            "explain": "O(log n) — tiap langkah membuang separuh."
          },
          {
            "type": "mc",
            "q": "Kenapa linear search tetap berguna meski lebih lambat?",
            "options": [
              "Selalu lebih cepat",
              "Tidak butuh data terurut",
              "Lebih hemat memori",
              "Hanya bekerja di JS"
            ],
            "a": 1,
            "explain": "Data apa pun (tak harus terurut) langsung bisa dicari."
          },
          {
            "type": "arrange",
            "q": "Urutkan langkah binary search mencari x pada data terurut:",
            "blocks": [
              "Cek elemen tengah",
              "Tengah == x? berhenti",
              "Tengah < x? geser batas kiri ke kanan tengah",
              "Tengah > x? geser batas kanan ke kiri tengah",
              "Ulangi selama batas kiri ≤ kanan"
            ],
            "explain": "Tiap langkah membuang separuh kandidat lewat perbandingan dengan nilai tengah."
          },
          {
            "type": "mc",
            "q": "Karakteristik Binary Search Tree (BST):",
            "options": [
              "Nilai anak kiri selalu lebih kecil, dan anak kanan selalu lebih besar dari root",
              "Semua anak sama nilainya",
              "Hanya punya 1 anak",
              "Tidak ada aturan"
            ],
            "a": 0,
            "explain": "Kiri < Parent < Kanan menjamin pencarian efisien."
          },
          {
            "type": "fill",
            "q": "Cek anak kiri BST:\nconst kiri = root.___;",
            "code": "const kiri = root.___;",
            "accept": [
              "left"
            ],
            "explain": "root.left."
          },
          {
            "type": "arrange",
            "q": "Susun pohon biner sederhana:",
            "blocks": [
              "const left = { val: 5, left: null, right: null };",
              "const right = { val: 15, left: null, right: null };",
              "const root = { val: 10, left, right };"
            ],
            "explain": "BST root 10 dengan anak 5 dan 15."
          },
          {
            "type": "mc",
            "q": "Kompleksitas pencarian Binary Search pada array yang sudah terurut:",
            "options": [
              "O(log n)",
              "O(n)",
              "O(1)",
              "O(n^2)"
            ],
            "a": 0,
            "explain": "Binary search membagi ruang pencarian menjadi setengah tiap langkah (O(log n))."
          },
          {
            "type": "fill",
            "q": "Bagi rentang binary search menjadi dua:\nconst mid = Math.floor((low + high) / ___);",
            "code": "const mid = Math.floor((low + high) / ___);",
            "accept": [
              "2"
            ],
            "explain": "Membagi rentang dengan 2."
          }
        ]
      },
      {
        "id": "ds-13",
        "level": "Menengah",
        "title": "Singly Linked List",
        "exercises": [
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Doubly Linked List] #1:",
            "options": [
              "Node memiliki pointer next dan prev dua arah",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Node memiliki pointer next dan prev dua arah."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Doubly Linked List] #2:",
            "options": [
              "Node memiliki pointer next dan prev dua arah",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Node memiliki pointer next dan prev dua arah."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Doubly Linked List] #3:",
            "options": [
              "Node memiliki pointer next dan prev dua arah",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Node memiliki pointer next dan prev dua arah."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Doubly Linked List] #4:",
            "options": [
              "Node memiliki pointer next dan prev dua arah",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Node memiliki pointer next dan prev dua arah."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Doubly Linked List] #5:",
            "options": [
              "Node memiliki pointer next dan prev dua arah",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Node memiliki pointer next dan prev dua arah."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Doubly Linked List] #6:",
            "options": [
              "Node memiliki pointer next dan prev dua arah",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Node memiliki pointer next dan prev dua arah."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Doubly Linked List] #7:",
            "options": [
              "Node memiliki pointer next dan prev dua arah",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Node memiliki pointer next dan prev dua arah."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Doubly Linked List] #8:",
            "options": [
              "Node memiliki pointer next dan prev dua arah",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Node memiliki pointer next dan prev dua arah."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Doubly Linked List] #9:",
            "options": [
              "Node memiliki pointer next dan prev dua arah",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Node memiliki pointer next dan prev dua arah."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Doubly Linked List] #10:",
            "options": [
              "Node memiliki pointer next dan prev dua arah",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Node memiliki pointer next dan prev dua arah."
          }
        ]
      },
      {
        "id": "ds-14",
        "level": "Menengah",
        "title": "Doubly Linked List",
        "exercises": [
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Inorder Traversal] #1:",
            "options": [
              "Kunjungi anak kiri, node sekarang, lalu anak kanan (menghasilkan urutan terurut)",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Kunjungi anak kiri, node sekarang, lalu anak kanan (menghasilkan urutan terurut)."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Inorder Traversal] #2:",
            "options": [
              "Kunjungi anak kiri, node sekarang, lalu anak kanan (menghasilkan urutan terurut)",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Kunjungi anak kiri, node sekarang, lalu anak kanan (menghasilkan urutan terurut)."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Inorder Traversal] #3:",
            "options": [
              "Kunjungi anak kiri, node sekarang, lalu anak kanan (menghasilkan urutan terurut)",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Kunjungi anak kiri, node sekarang, lalu anak kanan (menghasilkan urutan terurut)."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Inorder Traversal] #4:",
            "options": [
              "Kunjungi anak kiri, node sekarang, lalu anak kanan (menghasilkan urutan terurut)",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Kunjungi anak kiri, node sekarang, lalu anak kanan (menghasilkan urutan terurut)."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Inorder Traversal] #5:",
            "options": [
              "Kunjungi anak kiri, node sekarang, lalu anak kanan (menghasilkan urutan terurut)",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Kunjungi anak kiri, node sekarang, lalu anak kanan (menghasilkan urutan terurut)."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Inorder Traversal] #6:",
            "options": [
              "Kunjungi anak kiri, node sekarang, lalu anak kanan (menghasilkan urutan terurut)",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Kunjungi anak kiri, node sekarang, lalu anak kanan (menghasilkan urutan terurut)."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Inorder Traversal] #7:",
            "options": [
              "Kunjungi anak kiri, node sekarang, lalu anak kanan (menghasilkan urutan terurut)",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Kunjungi anak kiri, node sekarang, lalu anak kanan (menghasilkan urutan terurut)."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Inorder Traversal] #8:",
            "options": [
              "Kunjungi anak kiri, node sekarang, lalu anak kanan (menghasilkan urutan terurut)",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Kunjungi anak kiri, node sekarang, lalu anak kanan (menghasilkan urutan terurut)."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Inorder Traversal] #9:",
            "options": [
              "Kunjungi anak kiri, node sekarang, lalu anak kanan (menghasilkan urutan terurut)",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Kunjungi anak kiri, node sekarang, lalu anak kanan (menghasilkan urutan terurut)."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Inorder Traversal] #10:",
            "options": [
              "Kunjungi anak kiri, node sekarang, lalu anak kanan (menghasilkan urutan terurut)",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Kunjungi anak kiri, node sekarang, lalu anak kanan (menghasilkan urutan terurut)."
          }
        ]
      },
      {
        "id": "ds-15",
        "level": "Menengah",
        "title": "Binary Search Tree Dasar",
        "exercises": [
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Preorder Traversal] #1:",
            "options": [
              "Kunjungi node sekarang, lalu anak kiri, lalu anak kanan",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Kunjungi node sekarang, lalu anak kiri, lalu anak kanan."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Preorder Traversal] #2:",
            "options": [
              "Kunjungi node sekarang, lalu anak kiri, lalu anak kanan",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Kunjungi node sekarang, lalu anak kiri, lalu anak kanan."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Preorder Traversal] #3:",
            "options": [
              "Kunjungi node sekarang, lalu anak kiri, lalu anak kanan",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Kunjungi node sekarang, lalu anak kiri, lalu anak kanan."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Preorder Traversal] #4:",
            "options": [
              "Kunjungi node sekarang, lalu anak kiri, lalu anak kanan",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Kunjungi node sekarang, lalu anak kiri, lalu anak kanan."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Preorder Traversal] #5:",
            "options": [
              "Kunjungi node sekarang, lalu anak kiri, lalu anak kanan",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Kunjungi node sekarang, lalu anak kiri, lalu anak kanan."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Preorder Traversal] #6:",
            "options": [
              "Kunjungi node sekarang, lalu anak kiri, lalu anak kanan",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Kunjungi node sekarang, lalu anak kiri, lalu anak kanan."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Preorder Traversal] #7:",
            "options": [
              "Kunjungi node sekarang, lalu anak kiri, lalu anak kanan",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Kunjungi node sekarang, lalu anak kiri, lalu anak kanan."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Preorder Traversal] #8:",
            "options": [
              "Kunjungi node sekarang, lalu anak kiri, lalu anak kanan",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Kunjungi node sekarang, lalu anak kiri, lalu anak kanan."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Preorder Traversal] #9:",
            "options": [
              "Kunjungi node sekarang, lalu anak kiri, lalu anak kanan",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Kunjungi node sekarang, lalu anak kiri, lalu anak kanan."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Preorder Traversal] #10:",
            "options": [
              "Kunjungi node sekarang, lalu anak kiri, lalu anak kanan",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Kunjungi node sekarang, lalu anak kiri, lalu anak kanan."
          }
        ]
      },
      {
        "id": "ds-16",
        "level": "Menengah",
        "title": "Tree Traversal",
        "exercises": [
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Postorder Traversal] #1:",
            "options": [
              "Kunjungi anak kiri, anak kanan, baru proses node sekarang",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Kunjungi anak kiri, anak kanan, baru proses node sekarang."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Postorder Traversal] #2:",
            "options": [
              "Kunjungi anak kiri, anak kanan, baru proses node sekarang",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Kunjungi anak kiri, anak kanan, baru proses node sekarang."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Postorder Traversal] #3:",
            "options": [
              "Kunjungi anak kiri, anak kanan, baru proses node sekarang",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Kunjungi anak kiri, anak kanan, baru proses node sekarang."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Postorder Traversal] #4:",
            "options": [
              "Kunjungi anak kiri, anak kanan, baru proses node sekarang",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Kunjungi anak kiri, anak kanan, baru proses node sekarang."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Postorder Traversal] #5:",
            "options": [
              "Kunjungi anak kiri, anak kanan, baru proses node sekarang",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Kunjungi anak kiri, anak kanan, baru proses node sekarang."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Postorder Traversal] #6:",
            "options": [
              "Kunjungi anak kiri, anak kanan, baru proses node sekarang",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Kunjungi anak kiri, anak kanan, baru proses node sekarang."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Postorder Traversal] #7:",
            "options": [
              "Kunjungi anak kiri, anak kanan, baru proses node sekarang",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Kunjungi anak kiri, anak kanan, baru proses node sekarang."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Postorder Traversal] #8:",
            "options": [
              "Kunjungi anak kiri, anak kanan, baru proses node sekarang",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Kunjungi anak kiri, anak kanan, baru proses node sekarang."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Postorder Traversal] #9:",
            "options": [
              "Kunjungi anak kiri, anak kanan, baru proses node sekarang",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Kunjungi anak kiri, anak kanan, baru proses node sekarang."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Postorder Traversal] #10:",
            "options": [
              "Kunjungi anak kiri, anak kanan, baru proses node sekarang",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Kunjungi anak kiri, anak kanan, baru proses node sekarang."
          }
        ]
      },
      {
        "id": "ds-17",
        "level": "Menengah",
        "title": "Binary Search Algorithm",
        "exercises": [
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Two Pointers] #1:",
            "options": [
              "Teknik dua penunjuk dari kiri dan kanan menuju tengah untuk optimasi O(n)",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Teknik dua penunjuk dari kiri dan kanan menuju tengah untuk optimasi O(n)."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Two Pointers] #2:",
            "options": [
              "Teknik dua penunjuk dari kiri dan kanan menuju tengah untuk optimasi O(n)",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Teknik dua penunjuk dari kiri dan kanan menuju tengah untuk optimasi O(n)."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Two Pointers] #3:",
            "options": [
              "Teknik dua penunjuk dari kiri dan kanan menuju tengah untuk optimasi O(n)",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Teknik dua penunjuk dari kiri dan kanan menuju tengah untuk optimasi O(n)."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Two Pointers] #4:",
            "options": [
              "Teknik dua penunjuk dari kiri dan kanan menuju tengah untuk optimasi O(n)",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Teknik dua penunjuk dari kiri dan kanan menuju tengah untuk optimasi O(n)."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Two Pointers] #5:",
            "options": [
              "Teknik dua penunjuk dari kiri dan kanan menuju tengah untuk optimasi O(n)",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Teknik dua penunjuk dari kiri dan kanan menuju tengah untuk optimasi O(n)."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Two Pointers] #6:",
            "options": [
              "Teknik dua penunjuk dari kiri dan kanan menuju tengah untuk optimasi O(n)",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Teknik dua penunjuk dari kiri dan kanan menuju tengah untuk optimasi O(n)."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Two Pointers] #7:",
            "options": [
              "Teknik dua penunjuk dari kiri dan kanan menuju tengah untuk optimasi O(n)",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Teknik dua penunjuk dari kiri dan kanan menuju tengah untuk optimasi O(n)."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Two Pointers] #8:",
            "options": [
              "Teknik dua penunjuk dari kiri dan kanan menuju tengah untuk optimasi O(n)",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Teknik dua penunjuk dari kiri dan kanan menuju tengah untuk optimasi O(n)."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Two Pointers] #9:",
            "options": [
              "Teknik dua penunjuk dari kiri dan kanan menuju tengah untuk optimasi O(n)",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Teknik dua penunjuk dari kiri dan kanan menuju tengah untuk optimasi O(n)."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Two Pointers] #10:",
            "options": [
              "Teknik dua penunjuk dari kiri dan kanan menuju tengah untuk optimasi O(n)",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Teknik dua penunjuk dari kiri dan kanan menuju tengah untuk optimasi O(n)."
          }
        ]
      },
      {
        "id": "ds-18",
        "level": "Menengah",
        "title": "Sorting Dasar & Efisiensi",
        "exercises": [
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Sliding Window] #1:",
            "options": [
              "Teknik jendela bergerak untuk sub-array/sub-string beruntun",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Teknik jendela bergerak untuk sub-array/sub-string beruntun."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Sliding Window] #2:",
            "options": [
              "Teknik jendela bergerak untuk sub-array/sub-string beruntun",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Teknik jendela bergerak untuk sub-array/sub-string beruntun."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Sliding Window] #3:",
            "options": [
              "Teknik jendela bergerak untuk sub-array/sub-string beruntun",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Teknik jendela bergerak untuk sub-array/sub-string beruntun."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Sliding Window] #4:",
            "options": [
              "Teknik jendela bergerak untuk sub-array/sub-string beruntun",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Teknik jendela bergerak untuk sub-array/sub-string beruntun."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Sliding Window] #5:",
            "options": [
              "Teknik jendela bergerak untuk sub-array/sub-string beruntun",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Teknik jendela bergerak untuk sub-array/sub-string beruntun."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Sliding Window] #6:",
            "options": [
              "Teknik jendela bergerak untuk sub-array/sub-string beruntun",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Teknik jendela bergerak untuk sub-array/sub-string beruntun."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Sliding Window] #7:",
            "options": [
              "Teknik jendela bergerak untuk sub-array/sub-string beruntun",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Teknik jendela bergerak untuk sub-array/sub-string beruntun."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Sliding Window] #8:",
            "options": [
              "Teknik jendela bergerak untuk sub-array/sub-string beruntun",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Teknik jendela bergerak untuk sub-array/sub-string beruntun."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Sliding Window] #9:",
            "options": [
              "Teknik jendela bergerak untuk sub-array/sub-string beruntun",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Teknik jendela bergerak untuk sub-array/sub-string beruntun."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Sliding Window] #10:",
            "options": [
              "Teknik jendela bergerak untuk sub-array/sub-string beruntun",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Teknik jendela bergerak untuk sub-array/sub-string beruntun."
          }
        ]
      },
      {
        "id": "ds-19",
        "level": "Menengah",
        "title": "Two Pointers Technique",
        "exercises": [
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Bubble Sort] #1:",
            "options": [
              "Algoritma pengurutan dasar dengan menukar elemen bersebelahan O(n^2)",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Algoritma pengurutan dasar dengan menukar elemen bersebelahan O(n^2)."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Bubble Sort] #2:",
            "options": [
              "Algoritma pengurutan dasar dengan menukar elemen bersebelahan O(n^2)",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Algoritma pengurutan dasar dengan menukar elemen bersebelahan O(n^2)."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Bubble Sort] #3:",
            "options": [
              "Algoritma pengurutan dasar dengan menukar elemen bersebelahan O(n^2)",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Algoritma pengurutan dasar dengan menukar elemen bersebelahan O(n^2)."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Bubble Sort] #4:",
            "options": [
              "Algoritma pengurutan dasar dengan menukar elemen bersebelahan O(n^2)",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Algoritma pengurutan dasar dengan menukar elemen bersebelahan O(n^2)."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Bubble Sort] #5:",
            "options": [
              "Algoritma pengurutan dasar dengan menukar elemen bersebelahan O(n^2)",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Algoritma pengurutan dasar dengan menukar elemen bersebelahan O(n^2)."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Bubble Sort] #6:",
            "options": [
              "Algoritma pengurutan dasar dengan menukar elemen bersebelahan O(n^2)",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Algoritma pengurutan dasar dengan menukar elemen bersebelahan O(n^2)."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Bubble Sort] #7:",
            "options": [
              "Algoritma pengurutan dasar dengan menukar elemen bersebelahan O(n^2)",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Algoritma pengurutan dasar dengan menukar elemen bersebelahan O(n^2)."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Bubble Sort] #8:",
            "options": [
              "Algoritma pengurutan dasar dengan menukar elemen bersebelahan O(n^2)",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Algoritma pengurutan dasar dengan menukar elemen bersebelahan O(n^2)."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Bubble Sort] #9:",
            "options": [
              "Algoritma pengurutan dasar dengan menukar elemen bersebelahan O(n^2)",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Algoritma pengurutan dasar dengan menukar elemen bersebelahan O(n^2)."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Bubble Sort] #10:",
            "options": [
              "Algoritma pengurutan dasar dengan menukar elemen bersebelahan O(n^2)",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Algoritma pengurutan dasar dengan menukar elemen bersebelahan O(n^2)."
          }
        ]
      },
      {
        "id": "ds-20",
        "level": "Menengah",
        "title": "Sliding Window Technique",
        "exercises": [
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Quick Sort] #1:",
            "options": [
              "Pengurutan divide-and-conquer dengan memilih pivot O(n log n)",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Pengurutan divide-and-conquer dengan memilih pivot O(n log n)."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Quick Sort] #2:",
            "options": [
              "Pengurutan divide-and-conquer dengan memilih pivot O(n log n)",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Pengurutan divide-and-conquer dengan memilih pivot O(n log n)."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Quick Sort] #3:",
            "options": [
              "Pengurutan divide-and-conquer dengan memilih pivot O(n log n)",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Pengurutan divide-and-conquer dengan memilih pivot O(n log n)."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Quick Sort] #4:",
            "options": [
              "Pengurutan divide-and-conquer dengan memilih pivot O(n log n)",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Pengurutan divide-and-conquer dengan memilih pivot O(n log n)."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Quick Sort] #5:",
            "options": [
              "Pengurutan divide-and-conquer dengan memilih pivot O(n log n)",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Pengurutan divide-and-conquer dengan memilih pivot O(n log n)."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Quick Sort] #6:",
            "options": [
              "Pengurutan divide-and-conquer dengan memilih pivot O(n log n)",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Pengurutan divide-and-conquer dengan memilih pivot O(n log n)."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Quick Sort] #7:",
            "options": [
              "Pengurutan divide-and-conquer dengan memilih pivot O(n log n)",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Pengurutan divide-and-conquer dengan memilih pivot O(n log n)."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Quick Sort] #8:",
            "options": [
              "Pengurutan divide-and-conquer dengan memilih pivot O(n log n)",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Pengurutan divide-and-conquer dengan memilih pivot O(n log n)."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Quick Sort] #9:",
            "options": [
              "Pengurutan divide-and-conquer dengan memilih pivot O(n log n)",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Pengurutan divide-and-conquer dengan memilih pivot O(n log n)."
          },
          {
            "type": "mc",
            "q": "Struktur Data Menengah [Quick Sort] #10:",
            "options": [
              "Pengurutan divide-and-conquer dengan memilih pivot O(n log n)",
              "Operasi CSS",
              "Format teks",
              "Simpan di database"
            ],
            "a": 0,
            "explain": "Pengurutan divide-and-conquer dengan memilih pivot O(n log n)."
          }
        ]
      },
      {
        "id": "ds-21",
        "level": "Advance",
        "title": "Big-O Dasar",
        "exercises": [
          {
            "type": "mc",
            "q": "Kompleksitas binary search pada data terurut:",
            "options": [
              "O(1)",
              "O(n)",
              "O(log n)",
              "O(n log n)"
            ],
            "a": 2,
            "explain": "Tiap langkah membuang separuh kandidat → logaritmik."
          },
          {
            "type": "mc",
            "q": "Mencari nama di list TANPA urutan (linear search) rata-rata:",
            "options": [
              "O(1)",
              "O(n)",
              "O(log n)",
              "O(n²)"
            ],
            "a": 1,
            "explain": "Kadang ketemu di awal, tapi worst-case menelusuri semua → O(n)."
          },
          {
            "type": "fill",
            "q": "Notasi kompleksitas konstan (waktu tetap, tidak tergantung n):",
            "code": "Akses array = ___",
            "accept": [
              "o(1)",
              "o (1)",
              "big-o(1)",
              "constant"
            ],
            "explain": "O(1) = konstan."
          },
          {
            "type": "mc",
            "q": "Dua loop bersarang, masing-masing n iterasi → kompleksitas:",
            "options": [
              "O(2n)",
              "O(n²)",
              "O(n)",
              "O(log n)"
            ],
            "a": 1,
            "explain": "n × n = n² (kuadratik)."
          },
          {
            "type": "arrange",
            "q": "Urutkan kompleksitas dari TERCEPAT ke TERLAMBAT:",
            "blocks": [
              "O(1)",
              "O(log n)",
              "O(n)",
              "O(n²)"
            ],
            "explain": "Konstan → logaritmik → linear → kuadratik."
          },
          {
            "type": "mc",
            "q": "Struktur data Heap sering dipakai untuk implementasi:",
            "options": [
              "Priority Queue (Antrean Berprioritas)",
              "Stack LIFO",
              "Array statis",
              "String"
            ],
            "a": 0,
            "explain": "Min/Max Heap mengembalikan elemen prioritas tertinggi/terendah dalam O(log n)."
          },
          {
            "type": "fill",
            "q": "Pada Max-Heap, nilai node akar dibandingkan dengan anak-anaknya:",
            "code": "Max-Heap: root >= anak (paling ___)",
            "accept": [
              "besar",
              "tinggi",
              "maksimal"
            ],
            "explain": "Max-Heap root = maksimum."
          },
          {
            "type": "arrange",
            "q": "Susun algoritma rekursif Fibonacci dasar:",
            "blocks": [
              "function fib(n) {",
              "  if (n <= 1) return n;",
              "  return fib(n - 1) + fib(n - 2);",
              "}"
            ],
            "explain": "Base case lalu recursive call."
          },
          {
            "type": "mc",
            "q": "Teknik Memoization dalam Dynamic Programming bertujuan untuk:",
            "options": [
              "Menyimpan hasil sub-masalah yang sudah dihitung agar tidak diulang (caching)",
              "Menghapus data lama",
              "Memperbesar rekursi",
              "Mengurutkan memori"
            ],
            "a": 0,
            "explain": "Memoization mengubah rekursi eksponensial menjadi linier O(n)."
          },
          {
            "type": "fill",
            "q": "Gunakan cache memoization:\nif (memo[n] !== ___) return memo[n];",
            "code": "if (memo[n] !== ___) return memo[n];",
            "accept": [
              "undefined"
            ],
            "explain": "Cek apakah hasil sudah ada di cache."
          }
        ]
      },
      {
        "id": "ds-22",
        "level": "Advance",
        "title": "Map & Set",
        "exercises": [
          {
            "type": "mc",
            "q": "Keunggulan Map dibanding Object biasa untuk key:",
            "options": [
              "Key boleh tipe apa saja (termasuk objek)",
              "Lebih hemat memori",
              "Otomatis terurut",
              "Bisa dipakai di HTML"
            ],
            "a": 0,
            "explain": "Map mengizinkan key non-string; urutan penyisipan terjaga."
          },
          {
            "type": "fill",
            "q": "Simpan nilai ke Map m dengan key \"a\":",
            "code": "m.___(\"a\", 1);",
            "accept": [
              "set"
            ],
            "explain": "Map.set(key, value); Map.get(key)."
          },
          {
            "type": "mc",
            "q": "Set berguna ketika ingin:",
            "options": [
              "Nilai berurutan",
              "Nilai unik tanpa duplikat",
              "Pasangan key-value",
              "Menyimpan fungsi"
            ],
            "a": 1,
            "explain": "Set otomatis membuang duplikat."
          },
          {
            "type": "code",
            "q": "Buat hitungUnik(arr) → jumlah nilai unik:",
            "fn": "hitungUnik",
            "starter": "function hitungUnik(arr) {\n  \n}",
            "solution": "function hitungUnik(arr) { return new Set(arr).size; }",
            "tests": [
              {
                "args": [
                  [
                    1,
                    2,
                    2,
                    3
                  ]
                ],
                "expected": 3
              },
              {
                "args": [
                  []
                ],
                "expected": 0
              }
            ],
            "explain": "new Set(arr).size = banyak nilai unik."
          },
          {
            "type": "fill",
            "q": "Periksa keanggotaan Set s:",
            "code": "s.___(x);",
            "accept": [
              "has"
            ],
            "explain": "Set.has(x) mengembalikan boolean."
          },
          {
            "type": "mc",
            "q": "Struktur data Graph terdiri dari kumpulan:",
            "options": [
              "Vertices (Simpul) dan Edges (Sisi/Garis Penghubung)",
              "Hanya angka",
              "File dan folder",
              "Baris dan kolom"
            ],
            "a": 0,
            "explain": "Graph = V (Vertices) dan E (Edges)."
          },
          {
            "type": "fill",
            "q": "Representasi graph paling populer berbasis objek/array:\nAdjacency ___",
            "code": "Adjacency ___",
            "accept": [
              "List"
            ],
            "explain": "Adjacency List."
          },
          {
            "type": "arrange",
            "q": "Susun Adjacency List graph sederhana:",
            "blocks": [
              "const graph = {",
              "  A: [\"B\", \"C\"],",
              "  B: [\"A\"],",
              "  C: [\"A\"]",
              "};"
            ],
            "explain": "Representasi simpul dan tetangga."
          },
          {
            "type": "mc",
            "q": "Algoritma Breadth-First Search (BFS) menjelajahi graf menggunakan struktur bantu:",
            "options": [
              "Queue (Antrean)",
              "Stack",
              "Heap",
              "Map"
            ],
            "a": 0,
            "explain": "BFS menjelajah level demi level dengan bantuan Queue."
          },
          {
            "type": "mc",
            "q": "Algoritma Depth-First Search (DFS) menjelajahi graf secara mendalam menggunakan:",
            "options": [
              "Stack atau Rekursi Call Stack",
              "Queue",
              "Array 2D",
              "Heap"
            ],
            "a": 0,
            "explain": "DFS masuk ke cabang terdalam memakai Stack/rekursi."
          }
        ]
      },
      {
        "id": "ds-23",
        "level": "Advance",
        "title": "Heap & Priority Queue",
        "exercises": [
          {
            "type": "mc",
            "q": "Algoritma Advance [Dijkstra Algorithm] #1:",
            "options": [
              "Mencari jalur terpendek dari satu simpul asal ke semua simpul berbobot non-negatif",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Mencari jalur terpendek dari satu simpul asal ke semua simpul berbobot non-negatif."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Dijkstra Algorithm] #2:",
            "options": [
              "Mencari jalur terpendek dari satu simpul asal ke semua simpul berbobot non-negatif",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Mencari jalur terpendek dari satu simpul asal ke semua simpul berbobot non-negatif."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Dijkstra Algorithm] #3:",
            "options": [
              "Mencari jalur terpendek dari satu simpul asal ke semua simpul berbobot non-negatif",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Mencari jalur terpendek dari satu simpul asal ke semua simpul berbobot non-negatif."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Dijkstra Algorithm] #4:",
            "options": [
              "Mencari jalur terpendek dari satu simpul asal ke semua simpul berbobot non-negatif",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Mencari jalur terpendek dari satu simpul asal ke semua simpul berbobot non-negatif."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Dijkstra Algorithm] #5:",
            "options": [
              "Mencari jalur terpendek dari satu simpul asal ke semua simpul berbobot non-negatif",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Mencari jalur terpendek dari satu simpul asal ke semua simpul berbobot non-negatif."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Dijkstra Algorithm] #6:",
            "options": [
              "Mencari jalur terpendek dari satu simpul asal ke semua simpul berbobot non-negatif",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Mencari jalur terpendek dari satu simpul asal ke semua simpul berbobot non-negatif."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Dijkstra Algorithm] #7:",
            "options": [
              "Mencari jalur terpendek dari satu simpul asal ke semua simpul berbobot non-negatif",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Mencari jalur terpendek dari satu simpul asal ke semua simpul berbobot non-negatif."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Dijkstra Algorithm] #8:",
            "options": [
              "Mencari jalur terpendek dari satu simpul asal ke semua simpul berbobot non-negatif",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Mencari jalur terpendek dari satu simpul asal ke semua simpul berbobot non-negatif."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Dijkstra Algorithm] #9:",
            "options": [
              "Mencari jalur terpendek dari satu simpul asal ke semua simpul berbobot non-negatif",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Mencari jalur terpendek dari satu simpul asal ke semua simpul berbobot non-negatif."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Dijkstra Algorithm] #10:",
            "options": [
              "Mencari jalur terpendek dari satu simpul asal ke semua simpul berbobot non-negatif",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Mencari jalur terpendek dari satu simpul asal ke semua simpul berbobot non-negatif."
          }
        ]
      },
      {
        "id": "ds-24",
        "level": "Advance",
        "title": "Graph Adjacency",
        "exercises": [
          {
            "type": "mc",
            "q": "Algoritma Advance [Trie (Prefix Tree)] #1:",
            "options": [
              "Pohon pencarian string efisien untuk auto-complete dan spell-checker",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Pohon pencarian string efisien untuk auto-complete dan spell-checker."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Trie (Prefix Tree)] #2:",
            "options": [
              "Pohon pencarian string efisien untuk auto-complete dan spell-checker",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Pohon pencarian string efisien untuk auto-complete dan spell-checker."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Trie (Prefix Tree)] #3:",
            "options": [
              "Pohon pencarian string efisien untuk auto-complete dan spell-checker",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Pohon pencarian string efisien untuk auto-complete dan spell-checker."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Trie (Prefix Tree)] #4:",
            "options": [
              "Pohon pencarian string efisien untuk auto-complete dan spell-checker",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Pohon pencarian string efisien untuk auto-complete dan spell-checker."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Trie (Prefix Tree)] #5:",
            "options": [
              "Pohon pencarian string efisien untuk auto-complete dan spell-checker",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Pohon pencarian string efisien untuk auto-complete dan spell-checker."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Trie (Prefix Tree)] #6:",
            "options": [
              "Pohon pencarian string efisien untuk auto-complete dan spell-checker",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Pohon pencarian string efisien untuk auto-complete dan spell-checker."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Trie (Prefix Tree)] #7:",
            "options": [
              "Pohon pencarian string efisien untuk auto-complete dan spell-checker",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Pohon pencarian string efisien untuk auto-complete dan spell-checker."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Trie (Prefix Tree)] #8:",
            "options": [
              "Pohon pencarian string efisien untuk auto-complete dan spell-checker",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Pohon pencarian string efisien untuk auto-complete dan spell-checker."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Trie (Prefix Tree)] #9:",
            "options": [
              "Pohon pencarian string efisien untuk auto-complete dan spell-checker",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Pohon pencarian string efisien untuk auto-complete dan spell-checker."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Trie (Prefix Tree)] #10:",
            "options": [
              "Pohon pencarian string efisien untuk auto-complete dan spell-checker",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Pohon pencarian string efisien untuk auto-complete dan spell-checker."
          }
        ]
      },
      {
        "id": "ds-25",
        "level": "Advance",
        "title": "Graph Traversal BFS DFS",
        "exercises": [
          {
            "type": "mc",
            "q": "Algoritma Advance [Dynamic Programming: Tabulation] #1:",
            "options": [
              "Pendekatan bottom-up mengisi tabel iteratif tanpa overhead rekursi",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Pendekatan bottom-up mengisi tabel iteratif tanpa overhead rekursi."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Dynamic Programming: Tabulation] #2:",
            "options": [
              "Pendekatan bottom-up mengisi tabel iteratif tanpa overhead rekursi",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Pendekatan bottom-up mengisi tabel iteratif tanpa overhead rekursi."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Dynamic Programming: Tabulation] #3:",
            "options": [
              "Pendekatan bottom-up mengisi tabel iteratif tanpa overhead rekursi",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Pendekatan bottom-up mengisi tabel iteratif tanpa overhead rekursi."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Dynamic Programming: Tabulation] #4:",
            "options": [
              "Pendekatan bottom-up mengisi tabel iteratif tanpa overhead rekursi",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Pendekatan bottom-up mengisi tabel iteratif tanpa overhead rekursi."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Dynamic Programming: Tabulation] #5:",
            "options": [
              "Pendekatan bottom-up mengisi tabel iteratif tanpa overhead rekursi",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Pendekatan bottom-up mengisi tabel iteratif tanpa overhead rekursi."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Dynamic Programming: Tabulation] #6:",
            "options": [
              "Pendekatan bottom-up mengisi tabel iteratif tanpa overhead rekursi",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Pendekatan bottom-up mengisi tabel iteratif tanpa overhead rekursi."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Dynamic Programming: Tabulation] #7:",
            "options": [
              "Pendekatan bottom-up mengisi tabel iteratif tanpa overhead rekursi",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Pendekatan bottom-up mengisi tabel iteratif tanpa overhead rekursi."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Dynamic Programming: Tabulation] #8:",
            "options": [
              "Pendekatan bottom-up mengisi tabel iteratif tanpa overhead rekursi",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Pendekatan bottom-up mengisi tabel iteratif tanpa overhead rekursi."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Dynamic Programming: Tabulation] #9:",
            "options": [
              "Pendekatan bottom-up mengisi tabel iteratif tanpa overhead rekursi",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Pendekatan bottom-up mengisi tabel iteratif tanpa overhead rekursi."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Dynamic Programming: Tabulation] #10:",
            "options": [
              "Pendekatan bottom-up mengisi tabel iteratif tanpa overhead rekursi",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Pendekatan bottom-up mengisi tabel iteratif tanpa overhead rekursi."
          }
        ]
      },
      {
        "id": "ds-26",
        "level": "Advance",
        "title": "Dijkstra Shortest Path",
        "exercises": [
          {
            "type": "mc",
            "q": "Algoritma Advance [Disjoint Set Union (DSU)] #1:",
            "options": [
              "Struktur data melacak partisi himpunan saling lepas untuk deteksi siklus",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Struktur data melacak partisi himpunan saling lepas untuk deteksi siklus."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Disjoint Set Union (DSU)] #2:",
            "options": [
              "Struktur data melacak partisi himpunan saling lepas untuk deteksi siklus",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Struktur data melacak partisi himpunan saling lepas untuk deteksi siklus."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Disjoint Set Union (DSU)] #3:",
            "options": [
              "Struktur data melacak partisi himpunan saling lepas untuk deteksi siklus",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Struktur data melacak partisi himpunan saling lepas untuk deteksi siklus."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Disjoint Set Union (DSU)] #4:",
            "options": [
              "Struktur data melacak partisi himpunan saling lepas untuk deteksi siklus",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Struktur data melacak partisi himpunan saling lepas untuk deteksi siklus."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Disjoint Set Union (DSU)] #5:",
            "options": [
              "Struktur data melacak partisi himpunan saling lepas untuk deteksi siklus",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Struktur data melacak partisi himpunan saling lepas untuk deteksi siklus."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Disjoint Set Union (DSU)] #6:",
            "options": [
              "Struktur data melacak partisi himpunan saling lepas untuk deteksi siklus",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Struktur data melacak partisi himpunan saling lepas untuk deteksi siklus."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Disjoint Set Union (DSU)] #7:",
            "options": [
              "Struktur data melacak partisi himpunan saling lepas untuk deteksi siklus",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Struktur data melacak partisi himpunan saling lepas untuk deteksi siklus."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Disjoint Set Union (DSU)] #8:",
            "options": [
              "Struktur data melacak partisi himpunan saling lepas untuk deteksi siklus",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Struktur data melacak partisi himpunan saling lepas untuk deteksi siklus."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Disjoint Set Union (DSU)] #9:",
            "options": [
              "Struktur data melacak partisi himpunan saling lepas untuk deteksi siklus",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Struktur data melacak partisi himpunan saling lepas untuk deteksi siklus."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Disjoint Set Union (DSU)] #10:",
            "options": [
              "Struktur data melacak partisi himpunan saling lepas untuk deteksi siklus",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Struktur data melacak partisi himpunan saling lepas untuk deteksi siklus."
          }
        ]
      },
      {
        "id": "ds-27",
        "level": "Advance",
        "title": "Dynamic Programming Memoization",
        "exercises": [
          {
            "type": "mc",
            "q": "Algoritma Advance [Topological Sort] #1:",
            "options": [
              "Pengurutan linier simpul DAG (Directed Acyclic Graph) untuk ketergantungan task",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Pengurutan linier simpul DAG (Directed Acyclic Graph) untuk ketergantungan task."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Topological Sort] #2:",
            "options": [
              "Pengurutan linier simpul DAG (Directed Acyclic Graph) untuk ketergantungan task",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Pengurutan linier simpul DAG (Directed Acyclic Graph) untuk ketergantungan task."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Topological Sort] #3:",
            "options": [
              "Pengurutan linier simpul DAG (Directed Acyclic Graph) untuk ketergantungan task",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Pengurutan linier simpul DAG (Directed Acyclic Graph) untuk ketergantungan task."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Topological Sort] #4:",
            "options": [
              "Pengurutan linier simpul DAG (Directed Acyclic Graph) untuk ketergantungan task",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Pengurutan linier simpul DAG (Directed Acyclic Graph) untuk ketergantungan task."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Topological Sort] #5:",
            "options": [
              "Pengurutan linier simpul DAG (Directed Acyclic Graph) untuk ketergantungan task",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Pengurutan linier simpul DAG (Directed Acyclic Graph) untuk ketergantungan task."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Topological Sort] #6:",
            "options": [
              "Pengurutan linier simpul DAG (Directed Acyclic Graph) untuk ketergantungan task",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Pengurutan linier simpul DAG (Directed Acyclic Graph) untuk ketergantungan task."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Topological Sort] #7:",
            "options": [
              "Pengurutan linier simpul DAG (Directed Acyclic Graph) untuk ketergantungan task",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Pengurutan linier simpul DAG (Directed Acyclic Graph) untuk ketergantungan task."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Topological Sort] #8:",
            "options": [
              "Pengurutan linier simpul DAG (Directed Acyclic Graph) untuk ketergantungan task",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Pengurutan linier simpul DAG (Directed Acyclic Graph) untuk ketergantungan task."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Topological Sort] #9:",
            "options": [
              "Pengurutan linier simpul DAG (Directed Acyclic Graph) untuk ketergantungan task",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Pengurutan linier simpul DAG (Directed Acyclic Graph) untuk ketergantungan task."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Topological Sort] #10:",
            "options": [
              "Pengurutan linier simpul DAG (Directed Acyclic Graph) untuk ketergantungan task",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Pengurutan linier simpul DAG (Directed Acyclic Graph) untuk ketergantungan task."
          }
        ]
      },
      {
        "id": "ds-28",
        "level": "Advance",
        "title": "Dynamic Programming Tabulation",
        "exercises": [
          {
            "type": "mc",
            "q": "Algoritma Advance [Minimum Spanning Tree (Kruskal/Prim)] #1:",
            "options": [
              "Menghubungkan semua simpul graf dengan total bobot sisi seminimal mungkin",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Menghubungkan semua simpul graf dengan total bobot sisi seminimal mungkin."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Minimum Spanning Tree (Kruskal/Prim)] #2:",
            "options": [
              "Menghubungkan semua simpul graf dengan total bobot sisi seminimal mungkin",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Menghubungkan semua simpul graf dengan total bobot sisi seminimal mungkin."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Minimum Spanning Tree (Kruskal/Prim)] #3:",
            "options": [
              "Menghubungkan semua simpul graf dengan total bobot sisi seminimal mungkin",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Menghubungkan semua simpul graf dengan total bobot sisi seminimal mungkin."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Minimum Spanning Tree (Kruskal/Prim)] #4:",
            "options": [
              "Menghubungkan semua simpul graf dengan total bobot sisi seminimal mungkin",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Menghubungkan semua simpul graf dengan total bobot sisi seminimal mungkin."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Minimum Spanning Tree (Kruskal/Prim)] #5:",
            "options": [
              "Menghubungkan semua simpul graf dengan total bobot sisi seminimal mungkin",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Menghubungkan semua simpul graf dengan total bobot sisi seminimal mungkin."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Minimum Spanning Tree (Kruskal/Prim)] #6:",
            "options": [
              "Menghubungkan semua simpul graf dengan total bobot sisi seminimal mungkin",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Menghubungkan semua simpul graf dengan total bobot sisi seminimal mungkin."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Minimum Spanning Tree (Kruskal/Prim)] #7:",
            "options": [
              "Menghubungkan semua simpul graf dengan total bobot sisi seminimal mungkin",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Menghubungkan semua simpul graf dengan total bobot sisi seminimal mungkin."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Minimum Spanning Tree (Kruskal/Prim)] #8:",
            "options": [
              "Menghubungkan semua simpul graf dengan total bobot sisi seminimal mungkin",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Menghubungkan semua simpul graf dengan total bobot sisi seminimal mungkin."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Minimum Spanning Tree (Kruskal/Prim)] #9:",
            "options": [
              "Menghubungkan semua simpul graf dengan total bobot sisi seminimal mungkin",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Menghubungkan semua simpul graf dengan total bobot sisi seminimal mungkin."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Minimum Spanning Tree (Kruskal/Prim)] #10:",
            "options": [
              "Menghubungkan semua simpul graf dengan total bobot sisi seminimal mungkin",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Menghubungkan semua simpul graf dengan total bobot sisi seminimal mungkin."
          }
        ]
      },
      {
        "id": "ds-29",
        "level": "Advance",
        "title": "Trie Prefix Tree",
        "exercises": [
          {
            "type": "mc",
            "q": "Algoritma Advance [LRU Cache] #1:",
            "options": [
              "Struktur cache Least Recently Used menggabungkan Hash Map dan Doubly Linked List",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Struktur cache Least Recently Used menggabungkan Hash Map dan Doubly Linked List."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [LRU Cache] #2:",
            "options": [
              "Struktur cache Least Recently Used menggabungkan Hash Map dan Doubly Linked List",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Struktur cache Least Recently Used menggabungkan Hash Map dan Doubly Linked List."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [LRU Cache] #3:",
            "options": [
              "Struktur cache Least Recently Used menggabungkan Hash Map dan Doubly Linked List",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Struktur cache Least Recently Used menggabungkan Hash Map dan Doubly Linked List."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [LRU Cache] #4:",
            "options": [
              "Struktur cache Least Recently Used menggabungkan Hash Map dan Doubly Linked List",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Struktur cache Least Recently Used menggabungkan Hash Map dan Doubly Linked List."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [LRU Cache] #5:",
            "options": [
              "Struktur cache Least Recently Used menggabungkan Hash Map dan Doubly Linked List",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Struktur cache Least Recently Used menggabungkan Hash Map dan Doubly Linked List."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [LRU Cache] #6:",
            "options": [
              "Struktur cache Least Recently Used menggabungkan Hash Map dan Doubly Linked List",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Struktur cache Least Recently Used menggabungkan Hash Map dan Doubly Linked List."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [LRU Cache] #7:",
            "options": [
              "Struktur cache Least Recently Used menggabungkan Hash Map dan Doubly Linked List",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Struktur cache Least Recently Used menggabungkan Hash Map dan Doubly Linked List."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [LRU Cache] #8:",
            "options": [
              "Struktur cache Least Recently Used menggabungkan Hash Map dan Doubly Linked List",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Struktur cache Least Recently Used menggabungkan Hash Map dan Doubly Linked List."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [LRU Cache] #9:",
            "options": [
              "Struktur cache Least Recently Used menggabungkan Hash Map dan Doubly Linked List",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Struktur cache Least Recently Used menggabungkan Hash Map dan Doubly Linked List."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [LRU Cache] #10:",
            "options": [
              "Struktur cache Least Recently Used menggabungkan Hash Map dan Doubly Linked List",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Struktur cache Least Recently Used menggabungkan Hash Map dan Doubly Linked List."
          }
        ]
      },
      {
        "id": "ds-30",
        "level": "Advance",
        "title": "Big O Complexity Analysis",
        "exercises": [
          {
            "type": "mc",
            "q": "Algoritma Advance [Amortized Time Complexity] #1:",
            "options": [
              "Analisis rata-rata performa operasi berulang seperti perbesaran kapasitas dynamic array",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Analisis rata-rata performa operasi berulang seperti perbesaran kapasitas dynamic array."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Amortized Time Complexity] #2:",
            "options": [
              "Analisis rata-rata performa operasi berulang seperti perbesaran kapasitas dynamic array",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Analisis rata-rata performa operasi berulang seperti perbesaran kapasitas dynamic array."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Amortized Time Complexity] #3:",
            "options": [
              "Analisis rata-rata performa operasi berulang seperti perbesaran kapasitas dynamic array",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Analisis rata-rata performa operasi berulang seperti perbesaran kapasitas dynamic array."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Amortized Time Complexity] #4:",
            "options": [
              "Analisis rata-rata performa operasi berulang seperti perbesaran kapasitas dynamic array",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Analisis rata-rata performa operasi berulang seperti perbesaran kapasitas dynamic array."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Amortized Time Complexity] #5:",
            "options": [
              "Analisis rata-rata performa operasi berulang seperti perbesaran kapasitas dynamic array",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Analisis rata-rata performa operasi berulang seperti perbesaran kapasitas dynamic array."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Amortized Time Complexity] #6:",
            "options": [
              "Analisis rata-rata performa operasi berulang seperti perbesaran kapasitas dynamic array",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Analisis rata-rata performa operasi berulang seperti perbesaran kapasitas dynamic array."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Amortized Time Complexity] #7:",
            "options": [
              "Analisis rata-rata performa operasi berulang seperti perbesaran kapasitas dynamic array",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Analisis rata-rata performa operasi berulang seperti perbesaran kapasitas dynamic array."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Amortized Time Complexity] #8:",
            "options": [
              "Analisis rata-rata performa operasi berulang seperti perbesaran kapasitas dynamic array",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Analisis rata-rata performa operasi berulang seperti perbesaran kapasitas dynamic array."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Amortized Time Complexity] #9:",
            "options": [
              "Analisis rata-rata performa operasi berulang seperti perbesaran kapasitas dynamic array",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Analisis rata-rata performa operasi berulang seperti perbesaran kapasitas dynamic array."
          },
          {
            "type": "mc",
            "q": "Algoritma Advance [Amortized Time Complexity] #10:",
            "options": [
              "Analisis rata-rata performa operasi berulang seperti perbesaran kapasitas dynamic array",
              "Rendering piksel",
              "Koneksi bluetooth",
              "Buka file lokal"
            ],
            "a": 0,
            "explain": "Analisis rata-rata performa operasi berulang seperti perbesaran kapasitas dynamic array."
          }
        ]
      },
      {
        "id": "ds-31",
        "level": "Advance",
        "title": "Master Struktur Data & Algoritma",
        "exercises": [
          {
            "type": "mc",
            "q": "Notasi Big-O mengukur efisiensi algoritma dalam hal:",
            "options": [
              "Pertumbuhan kebutuhan waktu dan ruang memori terhadap ukuran input n (skalabilitas)",
              "Berapa megabyte file program",
              "Kecepatan ketik programmer",
              "Jumlah baris komentar"
            ],
            "a": 0,
            "explain": "Big O menganalisis laju pertumbuhan waktu/ruang (asymptotic complexity)."
          },
          {
            "type": "fill",
            "q": "Kompleksitas pencarian linear pada array berukuran n:\nO(___)",
            "code": "O(___)",
            "accept": [
              "n"
            ],
            "explain": "O(n) linear time."
          },
          {
            "type": "mc",
            "q": "Urutan kompleksitas dari yang paling efisien ke yang paling lambat:",
            "options": [
              "O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(2^n)",
              "O(n^2) < O(n) < O(1)",
              "O(2^n) < O(n) < O(log n)",
              "Semua sama"
            ],
            "a": 0,
            "explain": "O(1) adalah yang terbaik, disusul O(log n) dan O(n)."
          },
          {
            "type": "fill",
            "q": "Lengkapi kompleksitas waktu merge sort (linearitmik terhadap banyak data):",
            "code": "merge sort: O(n log ___)",
            "accept": [
              "n"
            ],
            "explain": "O(n log n)."
          },
          {
            "type": "arrange",
            "q": "Susun hierarki efisiensi kompleksitas waktu:",
            "blocks": [
              "O(1) // Konstan terbaik",
              "O(log n) // Logaritmik sangat cepat",
              "O(n) // Linier standar",
              "O(n^2) // Kuadratik lambat"
            ],
            "explain": "Urutan efisiensi algoritma."
          }
        ]
      }
    ]
  }
];

export { CONTENT_JS };

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CONTENT_JS };
}
