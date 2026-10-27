/* CodeDuo — blok konten: topik "MATLAB" (dipisah dari Blok Web).
 * 1 topik (matlab) × 31 pelajaran (10 Dasar, 10 Menengah, 11 Advance). Total 305 soal.
 * Engine di content.js (barrel) & app.js. Format tipe soal: mc | fill | code | preview | arrange.
 * ESM murni: dipakai Vite (browser) & Node (test).
 */
'use strict';

const CONTENT_MATLAB = [
{
    "id": "matlab",
    "name": "MATLAB",
    "icon": "📊",
    "color": "#e16737",
    "desc": "Komputasi numerik & analisis matriks",
    "lessons": [
      {
        "id": "matlab-1",
        "level": "Dasar",
        "title": "Pengenalan MATLAB",
        "exercises": [
          {
            "type": "mc",
            "q": "MATLAB dikembangkan oleh",
            "options": [
              "Google",
              "MathWorks",
              "Microsoft",
              "Oracle"
            ],
            "a": 1,
            "explain": "MATLAB dari MathWorks."
          },
          {
            "type": "mc",
            "q": "MATLAB berfokus pada",
            "options": [
              "komputasi numerik dan matriks",
              "CSS",
              "routing",
              "HTML"
            ],
            "a": 0,
            "explain": "MATLAB berorientasi matriks."
          },
          {
            "type": "mc",
            "q": "Berkas fungsi MATLAB berekstensi",
            "options": [
              ".mat",
              ".m",
              ".ml",
              ".mb"
            ],
            "a": 1,
            "explain": "Script/fungsi MATLAB .m."
          },
          {
            "type": "mc",
            "q": "Command window dipakai untuk",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "menjalankan perintah interaktif"
            ],
            "a": 3,
            "explain": "Command window interaktif."
          },
          {
            "type": "mc",
            "q": "Menyimpan workspace memakai",
            "options": [
              ".mat",
              ".m",
              ".txt",
              ".csv"
            ],
            "a": 0,
            "explain": "Format .mat menyimpan variabel."
          },
          {
            "type": "mc",
            "q": "MATLAB memakai indexing mulai dari",
            "options": [
              "0",
              "1",
              "-1",
              "CSS"
            ],
            "a": 1,
            "explain": "MATLAB memakai indexing berbasis satu."
          },
          {
            "type": "mc",
            "q": "Komentar MATLAB memakai",
            "options": [
              "%",
              "//",
              "#",
              "CSS"
            ],
            "a": 0,
            "explain": "MATLAB memakai %."
          },
          {
            "type": "mc",
            "q": "Script MATLAB adalah",
            "options": [
              "CSS",
              "route",
              "kumpulan perintah .m",
              "migrasi"
            ],
            "a": 2,
            "explain": "Script menjalankan perintah."
          },
          {
            "type": "mc",
            "q": "Fungsi MATLAB dideklarasikan dengan",
            "options": [
              "def",
              "function",
              "fun",
              "CSS"
            ],
            "a": 1,
            "explain": "MATLAB memakai function."
          },
          {
            "type": "mc",
            "q": "Vectorization disarankan",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "Vectorization efisien."
          }
        ]
      },
      {
        "id": "matlab-2",
        "level": "Dasar",
        "title": "Variabel & Tipe",
        "exercises": [
          {
            "type": "mc",
            "q": "Membuat variabel cukup",
            "options": [
              "var nama",
              "let nama",
              "nama = nilai",
              "CSS"
            ],
            "a": 2,
            "explain": "MATLAB tanpa deklarasi."
          },
          {
            "type": "mc",
            "q": "Tipe bilangan default adalah",
            "options": [
              "int",
              "float",
              "CSS",
              "double"
            ],
            "a": 3,
            "explain": "MATLAB default double."
          },
          {
            "type": "mc",
            "q": "Teks diapit",
            "options": [
              "kutip tunggal/ganda",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "String memakai kutip."
          },
          {
            "type": "mc",
            "q": "Nilai tak hingga memakai",
            "options": [
              "null",
              "Inf",
              "nil",
              "CSS"
            ],
            "a": 1,
            "explain": "MATLAB memakai Inf."
          },
          {
            "type": "mc",
            "q": "Nilai NaN berarti",
            "options": [
              "bukan angka",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "NaN menandakan hasil tak valid."
          },
          {
            "type": "mc",
            "q": "Kosong memakai",
            "options": [
              "null",
              "nil",
              "[]",
              "CSS"
            ],
            "a": 2,
            "explain": "Array kosong memakai []."
          },
          {
            "type": "mc",
            "q": "Menampilkan variabel memakai",
            "options": [
              "disp()/fprintf",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "disp/fprintf menampilkan."
          },
          {
            "type": "mc",
            "q": "Mengubah tipe memakai",
            "options": [
              "CSS",
              "cast/int32/str2double",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Konversi eksplisit."
          },
          {
            "type": "mc",
            "q": "who/whos untuk",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "melihat variabel"
            ],
            "a": 3,
            "explain": "who/whos menampilkan variabel."
          },
          {
            "type": "mc",
            "q": "clear menghapus",
            "options": [
              "CSS",
              "variabel workspace",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "clear menghapus."
          }
        ]
      },
      {
        "id": "matlab-3",
        "level": "Dasar",
        "title": "Indexing & Logika Array",
        "exercises": [
          {
            "type": "mc",
            "q": "Indexing logika memakai",
            "options": [
              "CSS",
              "mask logis",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Mask logis memilih elemen."
          },
          {
            "type": "mc",
            "q": "A(A>5) memilih",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "elemen lebih dari 5"
            ],
            "a": 3,
            "explain": "Mask memfilter elemen."
          },
          {
            "type": "mc",
            "q": "end menunjuk",
            "options": [
              "elemen terakhir",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "end elemen terakhir."
          },
          {
            "type": "mc",
            "q": "A(2:4) memilih",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "elemen 2 sampai 4"
            ],
            "a": 3,
            "explain": "Range memilih slice."
          },
          {
            "type": "mc",
            "q": "find mengembalikan",
            "options": [
              "index elemen",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "find mencari index."
          },
          {
            "type": "mc",
            "q": "any/all memeriksa",
            "options": [
              "CSS",
              "kondisi array",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "any/all memeriksa."
          },
          {
            "type": "mc",
            "q": "Menggabungkan array memakai",
            "options": [
              "CSS",
              "[a b] / [a; b]",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Konkatenasi horizontal/vertikal."
          },
          {
            "type": "mc",
            "q": "Membalik array memakai",
            "options": [
              "fliplr/flipud",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "fliplr/flipud membalik."
          },
          {
            "type": "mc",
            "q": "Membentuk ulang array memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "reshape"
            ],
            "a": 3,
            "explain": "reshape mengubah dimensi."
          },
          {
            "type": "mc",
            "q": "Menghapus elemen memakai",
            "options": [
              "A(2) = []",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Assign [] menghapus."
          }
        ]
      },
      {
        "id": "matlab-4",
        "level": "Dasar",
        "title": "Matriks & Array",
        "exercises": [
          {
            "type": "mc",
            "q": "Membuat matriks memakai",
            "options": [
              "(1,2;3,4)",
              "[1 2; 3 4]",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Baris dipisah ;."
          },
          {
            "type": "mc",
            "q": "Semua elemen dikalikan per elemen memakai",
            "options": [
              "*",
              "CSS",
              "route",
              ".*"
            ],
            "a": 3,
            "explain": "Operator titik untuk per elemen."
          },
          {
            "type": "mc",
            "q": "Mengakses elemen memakai",
            "options": [
              "A[1][2]",
              "CSS",
              "route",
              "A(1,2)"
            ],
            "a": 3,
            "explain": "MATLAB memakai ()."
          },
          {
            "type": "mc",
            "q": "Baris pertama diakses memakai",
            "options": [
              "A[:,1]",
              "A(1,:)",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Tanda : memilih semua kolom."
          },
          {
            "type": "mc",
            "q": "Dimensi array memakai",
            "options": [
              "shape(A)",
              "CSS",
              "route",
              "size(A)"
            ],
            "a": 3,
            "explain": "size mengembalikan dimensi."
          },
          {
            "type": "mc",
            "q": "Jumlah elemen memakai",
            "options": [
              "length_all",
              "CSS",
              "route",
              "numel(A)"
            ],
            "a": 3,
            "explain": "numel menghitung elemen."
          },
          {
            "type": "mc",
            "q": "Transpose memakai",
            "options": [
              "transpose_only",
              "CSS",
              "route",
              "A'"
            ],
            "a": 3,
            "explain": "' mentranspose."
          },
          {
            "type": "mc",
            "q": "Matriks identitas memakai",
            "options": [
              "eye(n)",
              "identity(n)",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "eye membuat identitas."
          },
          {
            "type": "mc",
            "q": "Matriks nol memakai",
            "options": [
              "nulls()",
              "CSS",
              "zeros()",
              "route"
            ],
            "a": 2,
            "explain": "zeros membuat nol."
          },
          {
            "type": "mc",
            "q": "Matriks acak memakai",
            "options": [
              "random()",
              "CSS",
              "route",
              "rand()"
            ],
            "a": 3,
            "explain": "rand membuat acak."
          }
        ]
      },
      {
        "id": "matlab-5",
        "level": "Dasar",
        "title": "Operasi Aritmetika",
        "exercises": [
          {
            "type": "mc",
            "q": "Penjumlahan matriks memakai",
            "options": [
              "+",
              "++",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Operator +."
          },
          {
            "type": "mc",
            "q": "Perkalian matriks memakai",
            "options": [
              ".*",
              "*",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Perkalian matriks memakai *."
          },
          {
            "type": "mc",
            "q": "Perkalian per elemen memakai",
            "options": [
              "*",
              "CSS",
              ".*",
              "route"
            ],
            "a": 2,
            "explain": "Operator titik per elemen."
          },
          {
            "type": "mc",
            "q": "Pembagian per elemen memakai",
            "options": [
              "/",
              "./",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "./ untuk per elemen."
          },
          {
            "type": "mc",
            "q": "Pangkat per elemen memakai",
            "options": [
              "^",
              "CSS",
              ".^",
              "route"
            ],
            "a": 2,
            "explain": ".^ per elemen."
          },
          {
            "type": "mc",
            "q": "Modulo memakai",
            "options": [
              "mod()",
              "%",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "mod menghitung sisa."
          },
          {
            "type": "mc",
            "q": "Fungsi eksponen memakai",
            "options": [
              "^e",
              "CSS",
              "exp()",
              "route"
            ],
            "a": 2,
            "explain": "exp menghitung e^x."
          },
          {
            "type": "mc",
            "q": "Akar kuadrat memakai",
            "options": [
              "root()",
              "sqrt()",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "sqrt akar kuadrat."
          },
          {
            "type": "mc",
            "q": "Nilai absolut memakai",
            "options": [
              "absolute()",
              "CSS",
              "route",
              "abs()"
            ],
            "a": 3,
            "explain": "abs nilai absolut."
          },
          {
            "type": "mc",
            "q": "Pembulatan memakai",
            "options": [
              "round()/floor()/ceil()",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Fungsi pembulatan."
          }
        ]
      },
      {
        "id": "matlab-6",
        "level": "Dasar",
        "title": "Plotting Dasar",
        "exercises": [
          {
            "type": "mc",
            "q": "Plot garis memakai",
            "options": [
              "plot(x,y)",
              "line(x,y)",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "plot menggambar garis."
          },
          {
            "type": "mc",
            "q": "Memberi judul plot memakai",
            "options": [
              "name()",
              "title()",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "title memberi judul."
          },
          {
            "type": "mc",
            "q": "Label sumbu x memakai",
            "options": [
              "labelx()",
              "CSS",
              "xlabel()",
              "route"
            ],
            "a": 2,
            "explain": "xlabel label sumbu."
          },
          {
            "type": "mc",
            "q": "Legenda memakai",
            "options": [
              "legend()",
              "key()",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "legend menampilkan legenda."
          },
          {
            "type": "mc",
            "q": "Grid memakai",
            "options": [
              "grid()",
              "grid on",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "grid on menampilkan grid."
          },
          {
            "type": "mc",
            "q": "Menahan plot memakai",
            "options": [
              "hold on",
              "keep on",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "hold on menahan plot."
          },
          {
            "type": "mc",
            "q": "Scatter plot memakai",
            "options": [
              "points()",
              "scatter()",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "scatter membuat scatter."
          },
          {
            "type": "mc",
            "q": "Histogram memakai",
            "options": [
              "hist_only",
              "CSS",
              "route",
              "histogram()"
            ],
            "a": 3,
            "explain": "histogram membuat hist."
          },
          {
            "type": "mc",
            "q": "subplot memakai",
            "options": [
              "panel()",
              "CSS",
              "route",
              "subplot()"
            ],
            "a": 3,
            "explain": "subplot membagi figur."
          },
          {
            "type": "mc",
            "q": "Menyimpan figur memakai",
            "options": [
              "saveas()/print()",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "saveas menyimpan."
          }
        ]
      },
      {
        "id": "matlab-7",
        "level": "Dasar",
        "title": "Kontrol Alur",
        "exercises": [
          {
            "type": "mc",
            "q": "Percabangan memakai",
            "options": [
              "if/elif",
              "if/elseif/else",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "MATLAB memakai elseif."
          },
          {
            "type": "mc",
            "q": "Mengakhiri blok if memakai",
            "options": [
              "}",
              "CSS",
              "end",
              "route"
            ],
            "a": 2,
            "explain": "MATLAB memakai end."
          },
          {
            "type": "mc",
            "q": "Perulangan for memakai",
            "options": [
              "for (i=1;i<n)",
              "for i = 1:n",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "For dengan rentang."
          },
          {
            "type": "mc",
            "q": "Perulangan while memakai",
            "options": [
              "while kondisi",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "While bergantung kondisi."
          },
          {
            "type": "mc",
            "q": "switch memakai",
            "options": [
              "switch/case/otherwise",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "MATLAB memakai switch."
          },
          {
            "type": "mc",
            "q": "break/continue berlaku",
            "options": [
              "CSS",
              "route",
              "di loop",
              "migrasi"
            ],
            "a": 2,
            "explain": "Mengatur loop."
          },
          {
            "type": "mc",
            "q": "Logika memakai",
            "options": [
              "and or not",
              "&& || ~",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "MATLAB memakai && || ~."
          },
          {
            "type": "mc",
            "q": "Perbandingan memakai",
            "options": [
              "===",
              "==/</>",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "MATLAB memakai ==."
          },
          {
            "type": "mc",
            "q": "Vectorization menggantikan",
            "options": [
              "CSS",
              "route",
              "loop manual",
              "migrasi"
            ],
            "a": 2,
            "explain": "Vectorization menghindari loop."
          },
          {
            "type": "mc",
            "q": "Menghindari loop di dalam loop berlebihan",
            "options": [
              "tidak",
              "CSS",
              "disarankan",
              "route"
            ],
            "a": 2,
            "explain": "Nested loop bisa lambat."
          }
        ]
      },
      {
        "id": "matlab-8",
        "level": "Dasar",
        "title": "Fungsi",
        "exercises": [
          {
            "type": "mc",
            "q": "Mendefinisikan fungsi memakai",
            "options": [
              "def nama",
              "fun nama",
              "CSS",
              "function out = nama(in)"
            ],
            "a": 3,
            "explain": "MATLAB memakai function."
          },
          {
            "type": "mc",
            "q": "Nilai balik fungsi dideklarasikan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "di signature"
            ],
            "a": 3,
            "explain": "Output di header fungsi."
          },
          {
            "type": "mc",
            "q": "Fungsi disimpan sebagai",
            "options": [
              "berkas .m bernama sama",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Nama berkas = nama fungsi."
          },
          {
            "type": "mc",
            "q": "Fungsi anonim memakai",
            "options": [
              "lambda",
              "CSS",
              "route",
              "@(x) x.^2"
            ],
            "a": 3,
            "explain": "MATLAB memakai @()."
          },
          {
            "type": "mc",
            "q": "nargin mengecek",
            "options": [
              "CSS",
              "jumlah argumen masukan",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "nargin jumlah input."
          },
          {
            "type": "mc",
            "q": "nargout mengecek",
            "options": [
              "CSS",
              "jumlah argumen keluaran",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "nargout jumlah output."
          },
          {
            "type": "mc",
            "q": "varargin menampung",
            "options": [
              "CSS",
              "argumen variabel",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "varargin variadik."
          },
          {
            "type": "mc",
            "q": "Fungsi lokal berada di",
            "options": [
              "CSS",
              "berkas yang sama",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Local function satu berkas."
          },
          {
            "type": "mc",
            "q": "Subfunction membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "struktur kode"
            ],
            "a": 3,
            "explain": "Subfunction organisasi."
          },
          {
            "type": "mc",
            "q": "Fungsi harus diuji",
            "options": [
              "tidak",
              "ya",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Uji fungsi."
          }
        ]
      },
      {
        "id": "matlab-9",
        "level": "Dasar",
        "title": "String & Char",
        "exercises": [
          {
            "type": "mc",
            "q": "String memakai kutip ganda",
            "options": [
              "\"teks\"",
              "'teks'",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "String modern memakai \"\"."
          },
          {
            "type": "mc",
            "q": "Char array memakai kutip tunggal",
            "options": [
              "'teks'",
              "\"teks\"",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Char memakai ''."
          },
          {
            "type": "mc",
            "q": "Menggabungkan string memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "+ / strcat"
            ],
            "a": 3,
            "explain": "String memakai +."
          },
          {
            "type": "mc",
            "q": "Membandingkan string memakai",
            "options": [
              "strcmp",
              "==",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "strcmp membandingkan."
          },
          {
            "type": "mc",
            "q": "Format string memakai",
            "options": [
              "sprintf/fprintf",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "sprintf memformat."
          },
          {
            "type": "mc",
            "q": "Memecah string memakai",
            "options": [
              "CSS",
              "split/strsplit",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "split memecah."
          },
          {
            "type": "mc",
            "q": "Mengganti string memakai",
            "options": [
              "CSS",
              "route",
              "replace/strrep",
              "migrasi"
            ],
            "a": 2,
            "explain": "replace mengganti."
          },
          {
            "type": "mc",
            "q": "Panjang string memakai",
            "options": [
              "len",
              "strlength",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "strlength panjang string."
          },
          {
            "type": "mc",
            "q": "Mengubah huruf besar memakai",
            "options": [
              "toUpper",
              "CSS",
              "route",
              "upper"
            ],
            "a": 3,
            "explain": "upper menaikkan."
          },
          {
            "type": "mc",
            "q": "Menghapus spasi memakai",
            "options": [
              "trim",
              "CSS",
              "strtrim",
              "route"
            ],
            "a": 2,
            "explain": "strtrim memangkas."
          }
        ]
      },
      {
        "id": "matlab-10",
        "level": "Dasar",
        "title": "Debugging & Error",
        "exercises": [
          {
            "type": "mc",
            "q": "Melempar error memakai",
            "options": [
              "throw",
              "CSS",
              "error()",
              "route"
            ],
            "a": 2,
            "explain": "error melempar."
          },
          {
            "type": "mc",
            "q": "Peringatan memakai",
            "options": [
              "CSS",
              "route",
              "warning()",
              "migrasi"
            ],
            "a": 2,
            "explain": "warning memberi peringatan."
          },
          {
            "type": "mc",
            "q": "try/catch memakai",
            "options": [
              "try ... catch",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "MATLAB mendukung try/catch."
          },
          {
            "type": "mc",
            "q": "Breakpoint memudahkan",
            "options": [
              "CSS",
              "route",
              "debugging",
              "migrasi"
            ],
            "a": 2,
            "explain": "Breakpoint berhenti eksekusi."
          },
          {
            "type": "mc",
            "q": "dbstop memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "breakpoint programatik"
            ],
            "a": 3,
            "explain": "dbstop menetapkan breakpoint."
          },
          {
            "type": "mc",
            "q": "dbstep untuk",
            "options": [
              "melangkah",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "dbstep melangkah."
          },
          {
            "type": "mc",
            "q": "Menangkap pesan error memakai",
            "options": [
              "CSS",
              "route",
              "catch err / err.message",
              "migrasi"
            ],
            "a": 2,
            "explain": "Error object menyimpan pesan."
          },
          {
            "type": "mc",
            "q": "assert membantu",
            "options": [
              "memeriksa kondisi",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "assert memeriksa."
          },
          {
            "type": "mc",
            "q": "Menangani error input penting",
            "options": [
              "ya",
              "tidak",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Validasi input."
          },
          {
            "type": "mc",
            "q": "Menghindari error diam-diam",
            "options": [
              "tidak",
              "penting",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Tangani error jelas."
          }
        ]
      },
      {
        "id": "matlab-11",
        "level": "Menengah",
        "title": "Programming Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "Anonymous function membantu",
            "options": [
              "CSS",
              "callback",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Anonymous untuk callback."
          },
          {
            "type": "mc",
            "q": "cellfun/arrayfun menerapkan",
            "options": [
              "CSS",
              "route",
              "fungsi ke elemen",
              "migrasi"
            ],
            "a": 2,
            "explain": "Menerapkan fungsi."
          },
          {
            "type": "mc",
            "q": "Function handle memungkinkan",
            "options": [
              "menyimpan fungsi di variabel",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Function handle."
          },
          {
            "type": "mc",
            "q": "Nested function membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "akses variabel induk"
            ],
            "a": 3,
            "explain": "Nested function akses parent."
          },
          {
            "type": "mc",
            "q": "Persistent variable menyimpan",
            "options": [
              "nilai antar panggilan",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Persistent antar panggilan."
          },
          {
            "type": "mc",
            "q": "global sebaiknya",
            "options": [
              "dihindari",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Hindari global."
          },
          {
            "type": "mc",
            "q": "Menyimpan fungsi sebagai string berisiko",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "Hindari eval."
          },
          {
            "type": "mc",
            "q": "Anonymous function untuk optimasi",
            "options": [
              "tidak",
              "penting",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Anonymous untuk optimasi."
          },
          {
            "type": "mc",
            "q": "Menulis fungsi kecil fokus",
            "options": [
              "tidak",
              "CSS",
              "route",
              "penting"
            ],
            "a": 3,
            "explain": "Fungsi kecil."
          },
          {
            "type": "mc",
            "q": "Dokumentasi fungsi",
            "options": [
              "tidak",
              "CSS",
              "penting",
              "route"
            ],
            "a": 2,
            "explain": "Help dokumentasi."
          }
        ]
      },
      {
        "id": "matlab-12",
        "level": "Menengah",
        "title": "Pengolahan Citra",
        "exercises": [
          {
            "type": "mc",
            "q": "Membaca gambar memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "imread"
            ],
            "a": 3,
            "explain": "imread membaca gambar."
          },
          {
            "type": "mc",
            "q": "Menampilkan gambar memakai",
            "options": [
              "CSS",
              "route",
              "imshow",
              "migrasi"
            ],
            "a": 2,
            "explain": "imshow menampilkan."
          },
          {
            "type": "mc",
            "q": "Menyimpan gambar memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "imwrite"
            ],
            "a": 3,
            "explain": "imwrite menyimpan."
          },
          {
            "type": "mc",
            "q": "Grayscale memakai",
            "options": [
              "CSS",
              "rgb2gray",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "rgb2gray konversi."
          },
          {
            "type": "mc",
            "q": "Resize gambar memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "imresize"
            ],
            "a": 3,
            "explain": "imresize mengubah ukuran."
          },
          {
            "type": "mc",
            "q": "Filter citra memakai",
            "options": [
              "CSS",
              "route",
              "imfilter",
              "migrasi"
            ],
            "a": 2,
            "explain": "imfilter filter."
          },
          {
            "type": "mc",
            "q": "Deteksi tepi memakai",
            "options": [
              "CSS",
              "route",
              "edge",
              "migrasi"
            ],
            "a": 2,
            "explain": "edge deteksi tepi."
          },
          {
            "type": "mc",
            "q": "Threshold memakai",
            "options": [
              "CSS",
              "imbinarize",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "imbinarize threshold."
          },
          {
            "type": "mc",
            "q": "Gambar disimpan sebagai",
            "options": [
              "CSS",
              "matriks",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Gambar representasi matriks."
          },
          {
            "type": "mc",
            "q": "Image Processing Toolbox menambah",
            "options": [
              "fungsi lanjutan",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Toolbox fungsi."
          }
        ]
      },
      {
        "id": "matlab-13",
        "level": "Menengah",
        "title": "Sinyal & Waktu",
        "exercises": [
          {
            "type": "mc",
            "q": "Sinyal diekstrak memakai",
            "options": [
              "CSS",
              "route",
              "fft",
              "migrasi"
            ],
            "a": 2,
            "explain": "fft transformasi."
          },
          {
            "type": "mc",
            "q": "Filter digital memakai",
            "options": [
              "CSS",
              "filter/designfilt",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Filter digital."
          },
          {
            "type": "mc",
            "q": "Konvolusi memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "conv"
            ],
            "a": 3,
            "explain": "conv konvolusi."
          },
          {
            "type": "mc",
            "q": "Spektogram memakai",
            "options": [
              "spectrogram",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "spectrogram spektral."
          },
          {
            "type": "mc",
            "q": "Menghitung frekuensi memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "sampling rate"
            ],
            "a": 3,
            "explain": "Sampling rate penting."
          },
          {
            "type": "mc",
            "q": "Window memengaruhi",
            "options": [
              "analisis spektral",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Window memengaruhi spektrum."
          },
          {
            "type": "mc",
            "q": "Nyquist penting",
            "options": [
              "ya",
              "tidak",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Nyquist menghindari aliasing."
          },
          {
            "type": "mc",
            "q": "Menyaring noise memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "filter"
            ],
            "a": 3,
            "explain": "Filter noise."
          },
          {
            "type": "mc",
            "q": "Signal Processing Toolbox menambah",
            "options": [
              "fungsi",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Toolbox sinyal."
          },
          {
            "type": "mc",
            "q": "Visualisasi penting",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Visualisasi sinyal."
          }
        ]
      },
      {
        "id": "matlab-14",
        "level": "Menengah",
        "title": "GUI & App",
        "exercises": [
          {
            "type": "mc",
            "q": "App Designer untuk",
            "options": [
              "CSS",
              "membuat aplikasi GUI",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "App Designer GUI."
          },
          {
            "type": "mc",
            "q": "uicontrol untuk",
            "options": [
              "CSS",
              "route",
              "komponen GUI klasik",
              "migrasi"
            ],
            "a": 2,
            "explain": "uicontrol komponen."
          },
          {
            "type": "mc",
            "q": "Callback menangani",
            "options": [
              "CSS",
              "route",
              "event UI",
              "migrasi"
            ],
            "a": 2,
            "explain": "Callback event."
          },
          {
            "type": "mc",
            "q": "uilabel/uibutton bagian dari",
            "options": [
              "App Designer",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Komponen modern."
          },
          {
            "type": "mc",
            "q": "Layout GUI memakai",
            "options": [
              "grid/layout",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Layout mengatur."
          },
          {
            "type": "mc",
            "q": "Menyimpan app memakai",
            "options": [
              ".mlapp",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "App .mlapp."
          },
          {
            "type": "mc",
            "q": "Menguji GUI penting",
            "options": [
              "ya",
              "tidak",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Uji GUI."
          },
          {
            "type": "mc",
            "q": "Responsif penting",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Responsif."
          },
          {
            "type": "mc",
            "q": "Dokumentasi UI penting",
            "options": [
              "ya",
              "tidak",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Dokumentasi."
          },
          {
            "type": "mc",
            "q": "Aksesibilitas penting",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "Aksesibilitas."
          }
        ]
      },
      {
        "id": "matlab-15",
        "level": "Menengah",
        "title": "Testing MATLAB",
        "exercises": [
          {
            "type": "mc",
            "q": "Framework test MATLAB adalah",
            "options": [
              "CSS",
              "route",
              "unittest/matlab.unittest",
              "migrasi"
            ],
            "a": 2,
            "explain": "MATLAB unittest."
          },
          {
            "type": "mc",
            "q": "assert memeriksa",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "kondisi"
            ],
            "a": 3,
            "explain": "assert memeriksa."
          },
          {
            "type": "mc",
            "q": "Test class memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "matlab.unittest.TestCase"
            ],
            "a": 3,
            "explain": "Test class."
          },
          {
            "type": "mc",
            "q": "Fixture menyiapkan",
            "options": [
              "CSS",
              "route",
              "state test",
              "migrasi"
            ],
            "a": 2,
            "explain": "Fixture state."
          },
          {
            "type": "mc",
            "q": "Coverage membantu",
            "options": [
              "CSS",
              "cakupan test",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Coverage."
          },
          {
            "type": "mc",
            "q": "Menjalankan test memakai",
            "options": [
              "runtests",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "runtests menjalankan."
          },
          {
            "type": "mc",
            "q": "Test perilaku lebih stabil",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Perilaku stabil."
          },
          {
            "type": "mc",
            "q": "CI menjalankan test penting",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "CI otomasi."
          },
          {
            "type": "mc",
            "q": "Test numerik butuh toleransi",
            "options": [
              "ya",
              "tidak",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Toleransi float."
          },
          {
            "type": "mc",
            "q": "Dokumentasi test penting",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "Dokumentasi."
          }
        ]
      },
      {
        "id": "matlab-16",
        "level": "Menengah",
        "title": "Aljabar Linear",
        "exercises": [
          {
            "type": "mc",
            "q": "Menyelesaikan sistem linear memakai",
            "options": [
              "CSS",
              "route",
              "A\\b",
              "migrasi"
            ],
            "a": 2,
            "explain": "Backslash menyelesaikan Ax=b."
          },
          {
            "type": "mc",
            "q": "Invers matriks memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "inv(A)"
            ],
            "a": 3,
            "explain": "inv menghitung invers."
          },
          {
            "type": "mc",
            "q": "Determinan memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "det(A)"
            ],
            "a": 3,
            "explain": "det determinan."
          },
          {
            "type": "mc",
            "q": "Transpose memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "A'"
            ],
            "a": 3,
            "explain": "Transpose."
          },
          {
            "type": "mc",
            "q": "Nilai eigen memakai",
            "options": [
              "eig(A)",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "eig nilai eigen."
          },
          {
            "type": "mc",
            "q": "Dekomposisi SVD memakai",
            "options": [
              "svd(A)",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "svd dekomposisi."
          },
          {
            "type": "mc",
            "q": "Rank memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "rank(A)"
            ],
            "a": 3,
            "explain": "rank peringkat."
          },
          {
            "type": "mc",
            "q": "Norm memakai",
            "options": [
              "norm(A)",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "norm norma."
          },
          {
            "type": "mc",
            "q": "Perkalian matriks memakai",
            "options": [
              ".*",
              "CSS",
              "*",
              "route"
            ],
            "a": 2,
            "explain": "Perkalian matriks *."
          },
          {
            "type": "mc",
            "q": "Hindari inv bila bisa pakai",
            "options": [
              "backslash",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Backslash lebih stabil."
          }
        ]
      },
      {
        "id": "matlab-17",
        "level": "Menengah",
        "title": "Statistik & Analisis Data",
        "exercises": [
          {
            "type": "mc",
            "q": "Rata-rata memakai",
            "options": [
              "avg()",
              "CSS",
              "route",
              "mean()"
            ],
            "a": 3,
            "explain": "mean rata-rata."
          },
          {
            "type": "mc",
            "q": "Median memakai",
            "options": [
              "CSS",
              "route",
              "median()",
              "migrasi"
            ],
            "a": 2,
            "explain": "median nilai tengah."
          },
          {
            "type": "mc",
            "q": "Standar deviasi memakai",
            "options": [
              "CSS",
              "std()",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "std simpangan baku."
          },
          {
            "type": "mc",
            "q": "Varians memakai",
            "options": [
              "var()",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "var varians."
          },
          {
            "type": "mc",
            "q": "Nilai maksimum memakai",
            "options": [
              "max()",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "max maksimum."
          },
          {
            "type": "mc",
            "q": "Nilai minimum memakai",
            "options": [
              "min()",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "min minimum."
          },
          {
            "type": "mc",
            "q": "Tabel frekuensi memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "tabulate"
            ],
            "a": 3,
            "explain": "tabulate frekuensi."
          },
          {
            "type": "mc",
            "q": "Korelasi memakai",
            "options": [
              "corr()",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "corr korelasi."
          },
          {
            "type": "mc",
            "q": "Menghapus NaN memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "rmmissing"
            ],
            "a": 3,
            "explain": "rmmissing hapus NaN."
          },
          {
            "type": "mc",
            "q": "Table/array cocok untuk",
            "options": [
              "data tabular",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Table untuk data tabular."
          }
        ]
      },
      {
        "id": "matlab-18",
        "level": "Menengah",
        "title": "Cell & Struct",
        "exercises": [
          {
            "type": "mc",
            "q": "Cell array memakai",
            "options": [
              "{ }",
              "[ ]",
              "( )",
              "CSS"
            ],
            "a": 0,
            "explain": "Cell memakai {}."
          },
          {
            "type": "mc",
            "q": "Cell menyimpan",
            "options": [
              "CSS",
              "data campuran tipe",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Cell heterogen."
          },
          {
            "type": "mc",
            "q": "Mengakses cell memakai",
            "options": [
              "C[1]",
              "C(1) always",
              "CSS",
              "C{1}"
            ],
            "a": 3,
            "explain": "Cell diakses dengan {}."
          },
          {
            "type": "mc",
            "q": "Struct memakai",
            "options": [
              "s.field",
              "s[field]",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Struct memakai .field."
          },
          {
            "type": "mc",
            "q": "Membuat struct memakai",
            "options": [
              "CSS",
              "struct()",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "struct() membuat struct."
          },
          {
            "type": "mc",
            "q": "Field struct memakai",
            "options": [
              "CSS",
              "route",
              "fieldnames",
              "migrasi"
            ],
            "a": 2,
            "explain": "fieldnames daftar field."
          },
          {
            "type": "mc",
            "q": "Array of struct memungkinkan",
            "options": [
              "banyak record",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Struct array."
          },
          {
            "type": "mc",
            "q": "rmfield menghapus",
            "options": [
              "field",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "rmfield hapus field."
          },
          {
            "type": "mc",
            "q": "isfield memeriksa",
            "options": [
              "CSS",
              "keberadaan field",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "isfield cek field."
          },
          {
            "type": "mc",
            "q": "Table lebih nyaman untuk",
            "options": [
              "CSS",
              "data tabular kolom",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Table kolom bernama."
          }
        ]
      },
      {
        "id": "matlab-19",
        "level": "Menengah",
        "title": "File I/O",
        "exercises": [
          {
            "type": "mc",
            "q": "Membaca CSV memakai",
            "options": [
              "CSS",
              "readmatrix/readtable",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "readmatrix membaca CSV."
          },
          {
            "type": "mc",
            "q": "Menulis CSV memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "writematrix/writetable"
            ],
            "a": 3,
            "explain": "writetable menulis."
          },
          {
            "type": "mc",
            "q": "Menyimpan variabel memakai",
            "options": [
              "CSS",
              "route",
              "save",
              "migrasi"
            ],
            "a": 2,
            "explain": "save menyimpan .mat."
          },
          {
            "type": "mc",
            "q": "Memuat variabel memakai",
            "options": [
              "CSS",
              "route",
              "load",
              "migrasi"
            ],
            "a": 2,
            "explain": "load memuat .mat."
          },
          {
            "type": "mc",
            "q": "Membuka berkas teks memakai",
            "options": [
              "CSS",
              "fopen",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "fopen membuka berkas."
          },
          {
            "type": "mc",
            "q": "Menutup berkas memakai",
            "options": [
              "CSS",
              "fclose",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "fclose menutup."
          },
          {
            "type": "mc",
            "q": "Membaca baris memakai",
            "options": [
              "CSS",
              "route",
              "fgetl/fgets",
              "migrasi"
            ],
            "a": 2,
            "explain": "fgetl membaca baris."
          },
          {
            "type": "mc",
            "q": "Menulis terformat memakai",
            "options": [
              "CSS",
              "route",
              "fprintf",
              "migrasi"
            ],
            "a": 2,
            "explain": "fprintf menulis."
          },
          {
            "type": "mc",
            "q": "Memeriksa path memakai",
            "options": [
              "CSS",
              "route",
              "exist/isfile",
              "migrasi"
            ],
            "a": 2,
            "explain": "exist memeriksa."
          },
          {
            "type": "mc",
            "q": "Menangani IO error penting",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Tangani error IO."
          }
        ]
      },
      {
        "id": "matlab-20",
        "level": "Menengah",
        "title": "Fungsi Matematika Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "Integral numerik memakai",
            "options": [
              "CSS",
              "route",
              "integral()",
              "migrasi"
            ],
            "a": 2,
            "explain": "integral menghitung integral."
          },
          {
            "type": "mc",
            "q": "Turunan numerik memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "diff/gradient"
            ],
            "a": 3,
            "explain": "diff/gradient turunan."
          },
          {
            "type": "mc",
            "q": "Mencari akar memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "fzero"
            ],
            "a": 3,
            "explain": "fzero akar fungsi."
          },
          {
            "type": "mc",
            "q": "Optimasi memakai",
            "options": [
              "CSS",
              "fminsearch/fmincon",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Fungsi optimasi."
          },
          {
            "type": "mc",
            "q": "Interpolasi memakai",
            "options": [
              "CSS",
              "route",
              "interp1",
              "migrasi"
            ],
            "a": 2,
            "explain": "interp1 interpolasi."
          },
          {
            "type": "mc",
            "q": "Kurva fitting memakai",
            "options": [
              "CSS",
              "polyfit",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "polyfit fitting."
          },
          {
            "type": "mc",
            "q": "Solve ODE memakai",
            "options": [
              "CSS",
              "route",
              "ode45",
              "migrasi"
            ],
            "a": 2,
            "explain": "ode45 menyelesaikan ODE."
          },
          {
            "type": "mc",
            "q": "Fungsi anonim membantu",
            "options": [
              "CSS",
              "route",
              "operasi fungsi",
              "migrasi"
            ],
            "a": 2,
            "explain": "Anonymous function."
          },
          {
            "type": "mc",
            "q": "Vectorize fungsi agar",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "efisien"
            ],
            "a": 3,
            "explain": "Vectorization efisien."
          },
          {
            "type": "mc",
            "q": "Menangani NaN/Inf penting",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "Tangani nilai khusus."
          }
        ]
      },
      {
        "id": "matlab-21",
        "level": "Advance",
        "title": "Machine Learning MATLAB",
        "exercises": [
          {
            "type": "mc",
            "q": "Deep Learning Toolbox untuk",
            "options": [
              "neural network",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Toolbox DL."
          },
          {
            "type": "mc",
            "q": "Training model memakai",
            "options": [
              "trainNetwork",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "trainNetwork melatih."
          },
          {
            "type": "mc",
            "q": "Feature extraction penting",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Fitur penting."
          },
          {
            "type": "mc",
            "q": "Data split memakai",
            "options": [
              "CSS",
              "train/validation",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Split data."
          },
          {
            "type": "mc",
            "q": "Overfitting dicegah dengan",
            "options": [
              "CSS",
              "route",
              "regularisasi",
              "migrasi"
            ],
            "a": 2,
            "explain": "Regularisasi."
          },
          {
            "type": "mc",
            "q": "Confusion matrix mengevaluasi",
            "options": [
              "CSS",
              "route",
              "klasifikasi",
              "migrasi"
            ],
            "a": 2,
            "explain": "Confusion matrix."
          },
          {
            "type": "mc",
            "q": "Model deployment memakai",
            "options": [
              "CSS",
              "codegen/export",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Deploy model."
          },
          {
            "type": "mc",
            "q": "Mengukur metrik penting",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "Metrik evaluasi."
          },
          {
            "type": "mc",
            "q": "Reproducibility penting",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Seed/reproducibility."
          },
          {
            "type": "mc",
            "q": "Dokumentasi model penting",
            "options": [
              "ya",
              "tidak",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Dokumentasi."
          }
        ]
      },
      {
        "id": "matlab-22",
        "level": "Advance",
        "title": "Numerical Methods",
        "exercises": [
          {
            "type": "mc",
            "q": "Metode iteratif membutuhkan",
            "options": [
              "kriteria berhenti",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Konvergensi perlu kriteria."
          },
          {
            "type": "mc",
            "q": "Kondisi matriks memengaruhi",
            "options": [
              "CSS",
              "stabilitas",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Condition number."
          },
          {
            "type": "mc",
            "q": "Presisi numerik penting",
            "options": [
              "tidak",
              "ya",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Presisi float."
          },
          {
            "type": "mc",
            "q": "Memilih solver tepat",
            "options": [
              "tidak",
              "CSS",
              "route",
              "penting"
            ],
            "a": 3,
            "explain": "Solver sesuai masalah."
          },
          {
            "type": "mc",
            "q": "ode45 untuk",
            "options": [
              "ODE non-stiff",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "ode45 umum."
          },
          {
            "type": "mc",
            "q": "ode15s untuk",
            "options": [
              "CSS",
              "ODE stiff",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "ode15s stiff."
          },
          {
            "type": "mc",
            "q": "Interpolasi memilih metode",
            "options": [
              "sesuai data",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Metode interpolasi."
          },
          {
            "type": "mc",
            "q": "Mengukur error penting",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Ukur error."
          },
          {
            "type": "mc",
            "q": "Dokumentasi asumsi penting",
            "options": [
              "ya",
              "tidak",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Asumsi jelas."
          },
          {
            "type": "mc",
            "q": "Validasi numerik penting",
            "options": [
              "tidak",
              "ya",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Validasi hasil."
          }
        ]
      },
      {
        "id": "matlab-23",
        "level": "Advance",
        "title": "Big Data & Memory",
        "exercises": [
          {
            "type": "mc",
            "q": "Tall array untuk",
            "options": [
              "CSS",
              "data besar",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Tall array data besar."
          },
          {
            "type": "mc",
            "q": "Datastore membaca",
            "options": [
              "CSS",
              "route",
              "bertahap",
              "migrasi"
            ],
            "a": 2,
            "explain": "Datastore bertahap."
          },
          {
            "type": "mc",
            "q": "MapReduce membantu",
            "options": [
              "CSS",
              "route",
              "pemrosesan besar",
              "migrasi"
            ],
            "a": 2,
            "explain": "MapReduce."
          },
          {
            "type": "mc",
            "q": "Sparse matrix menghemat",
            "options": [
              "memori",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Sparse hemat."
          },
          {
            "type": "mc",
            "q": "Memori terbatas perlu",
            "options": [
              "CSS",
              "route",
              "strategi",
              "migrasi"
            ],
            "a": 2,
            "explain": "Kelola memori."
          },
          {
            "type": "mc",
            "q": "Paralel memakai",
            "options": [
              "CSS",
              "parfor",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "parfor paralel."
          },
          {
            "type": "mc",
            "q": "GPU mempercepat",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "komputasi"
            ],
            "a": 3,
            "explain": "GPU percepat."
          },
          {
            "type": "mc",
            "q": "Mengukur memori penting",
            "options": [
              "tidak",
              "ya",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Ukur memori."
          },
          {
            "type": "mc",
            "q": "Klarifikasi data besar",
            "options": [
              "penting",
              "tidak",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Bersihkan data."
          },
          {
            "type": "mc",
            "q": "Dokumentasi pipeline penting",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Dokumentasi."
          }
        ]
      },
      {
        "id": "matlab-24",
        "level": "Advance",
        "title": "Integration & Interop",
        "exercises": [
          {
            "type": "mc",
            "q": "Memanggil Python dari MATLAB memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "py."
            ],
            "a": 3,
            "explain": "Interop Python via py."
          },
          {
            "type": "mc",
            "q": "Memanggil C memakai",
            "options": [
              "CSS",
              "mex",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "MEX untuk C."
          },
          {
            "type": "mc",
            "q": "Java interop memakai",
            "options": [
              "java object",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Java interop."
          },
          {
            "type": "mc",
            "q": "REST API memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "webread/webwrite"
            ],
            "a": 3,
            "explain": "webread API."
          },
          {
            "type": "mc",
            "q": "Database memakai",
            "options": [
              "CSS",
              "database toolbox",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Database toolbox."
          },
          {
            "type": "mc",
            "q": "Compiler men-deploy",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "aplikasi standalone"
            ],
            "a": 3,
            "explain": "MATLAB Compiler."
          },
          {
            "type": "mc",
            "q": "Interop menambah",
            "options": [
              "CSS",
              "kompleksitas",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Kompleksitas interop."
          },
          {
            "type": "mc",
            "q": "Uji interop penting",
            "options": [
              "ya",
              "tidak",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Uji integrasi."
          },
          {
            "type": "mc",
            "q": "Menjaga versi konsisten",
            "options": [
              "tidak",
              "penting",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Versi konsisten."
          },
          {
            "type": "mc",
            "q": "Dokumentasi interop penting",
            "options": [
              "tidak",
              "ya",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Dokumentasi."
          }
        ]
      },
      {
        "id": "matlab-25",
        "level": "Advance",
        "title": "Code Generation & Deployment",
        "exercises": [
          {
            "type": "mc",
            "q": "MATLAB Coder menghasilkan",
            "options": [
              "kode C/C++",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Coder ke C/C++."
          },
          {
            "type": "mc",
            "q": "GPU Coder untuk",
            "options": [
              "kode CUDA",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "GPU Coder."
          },
          {
            "type": "mc",
            "q": "Simulink Coder untuk",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "model ke kode"
            ],
            "a": 3,
            "explain": "Simulink Coder."
          },
          {
            "type": "mc",
            "q": "Standalone app memakai",
            "options": [
              "CSS",
              "route",
              "MATLAB Compiler",
              "migrasi"
            ],
            "a": 2,
            "explain": "Compiler standalone."
          },
          {
            "type": "mc",
            "q": "Deploy ke cloud memakai",
            "options": [
              "CSS",
              "route",
              "MATLAB Production Server",
              "migrasi"
            ],
            "a": 2,
            "explain": "Production Server."
          },
          {
            "type": "mc",
            "q": "Codegen butuh kode",
            "options": [
              "kompatibel",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Kode harus didukung."
          },
          {
            "type": "mc",
            "q": "Uji kode hasil generate",
            "options": [
              "tidak",
              "penting",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Uji hasil."
          },
          {
            "type": "mc",
            "q": "Dokumentasi deployment",
            "options": [
              "tidak",
              "CSS",
              "penting",
              "route"
            ],
            "a": 2,
            "explain": "Dokumentasi."
          },
          {
            "type": "mc",
            "q": "Lisensi deployment",
            "options": [
              "perlu diperhatikan",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Lisensi penting."
          },
          {
            "type": "mc",
            "q": "Monitoring produksi penting",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "Monitoring."
          }
        ]
      },
      {
        "id": "matlab-26",
        "level": "Advance",
        "title": "Performance MATLAB",
        "exercises": [
          {
            "type": "mc",
            "q": "Preallocation array membantu",
            "options": [
              "CSS",
              "performa",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Preallocation menghindari resize."
          },
          {
            "type": "mc",
            "q": "Vectorization mempercepat",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "loop"
            ],
            "a": 3,
            "explain": "Vectorization lebih cepat."
          },
          {
            "type": "mc",
            "q": "Menghindari grow array di loop",
            "options": [
              "tidak",
              "CSS",
              "route",
              "penting"
            ],
            "a": 3,
            "explain": "Grow array lambat."
          },
          {
            "type": "mc",
            "q": "Profiling memakai",
            "options": [
              "profile on",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "profile menemukan bottleneck."
          },
          {
            "type": "mc",
            "q": "Fungsi built-in teroptimasi",
            "options": [
              "dipakai bila ada",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Gunakan built-in."
          },
          {
            "type": "mc",
            "q": "Mengurangi copy data",
            "options": [
              "tidak",
              "CSS",
              "penting",
              "route"
            ],
            "a": 2,
            "explain": "Copy mahal."
          },
          {
            "type": "mc",
            "q": "Sparse matrix untuk",
            "options": [
              "data jarang",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Sparse hemat memori."
          },
          {
            "type": "mc",
            "q": "Mengukur sebelum optimasi",
            "options": [
              "tidak",
              "CSS",
              "wajib",
              "route"
            ],
            "a": 2,
            "explain": "Ukur dulu."
          },
          {
            "type": "mc",
            "q": "Paralel memakai",
            "options": [
              "parfor",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "parfor paralel."
          },
          {
            "type": "mc",
            "q": "GPU memakai",
            "options": [
              "CSS",
              "route",
              "gpuArray",
              "migrasi"
            ],
            "a": 2,
            "explain": "gpuArray percepat."
          }
        ]
      },
      {
        "id": "matlab-27",
        "level": "Advance",
        "title": "Simulink & Modeling",
        "exercises": [
          {
            "type": "mc",
            "q": "Simulink untuk",
            "options": [
              "CSS",
              "pemodelan sistem dinamis",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Simulink model dinamik."
          },
          {
            "type": "mc",
            "q": "Blok diagram mewakili",
            "options": [
              "CSS",
              "model sistem",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Blok menyusun model."
          },
          {
            "type": "mc",
            "q": "Simulasi memakai",
            "options": [
              "CSS",
              "solver numerik",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Solver menyelesaikan."
          },
          {
            "type": "mc",
            "q": "Stateflow untuk",
            "options": [
              "logika state",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Stateflow logika."
          },
          {
            "type": "mc",
            "q": "Menyimpan model memakai",
            "options": [
              ".mdl",
              ".mat",
              ".slx",
              ".m"
            ],
            "a": 2,
            "explain": "Model Simulink .slx."
          },
          {
            "type": "mc",
            "q": "Code generation memungkinkan",
            "options": [
              "CSS",
              "deploy ke hardware",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Code generation deploy."
          },
          {
            "type": "mc",
            "q": "Hardware-in-the-loop menguji",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "dengan hardware nyata"
            ],
            "a": 3,
            "explain": "HIL menguji."
          },
          {
            "type": "mc",
            "q": "Dokumentasi model penting",
            "options": [
              "ya",
              "tidak",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Dokumentasi model."
          },
          {
            "type": "mc",
            "q": "Versioning model penting",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Versioning penting."
          },
          {
            "type": "mc",
            "q": "Validasi model penting",
            "options": [
              "ya",
              "tidak",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Validasi model."
          }
        ]
      },
      {
        "id": "matlab-28",
        "level": "Advance",
        "title": "Toolbox & Ekosistem",
        "exercises": [
          {
            "type": "mc",
            "q": "Toolbox menambah",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "fungsi khusus"
            ],
            "a": 3,
            "explain": "Toolbox memperluas."
          },
          {
            "type": "mc",
            "q": "Deep Learning Toolbox untuk",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "neural network"
            ],
            "a": 3,
            "explain": "DL toolbox."
          },
          {
            "type": "mc",
            "q": "Signal Processing Toolbox untuk",
            "options": [
              "analisis sinyal",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Signal toolbox."
          },
          {
            "type": "mc",
            "q": "Image Processing Toolbox untuk",
            "options": [
              "pengolahan citra",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Image toolbox."
          },
          {
            "type": "mc",
            "q": "Statistics Toolbox untuk",
            "options": [
              "CSS",
              "statistik",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Stats toolbox."
          },
          {
            "type": "mc",
            "q": "App Designer untuk",
            "options": [
              "CSS",
              "membuat GUI",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "App Designer GUI."
          },
          {
            "type": "mc",
            "q": "Mengelola add-on via",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "Add-On Explorer"
            ],
            "a": 3,
            "explain": "Add-On Explorer."
          },
          {
            "type": "mc",
            "q": "Menjaga toolbox konsisten",
            "options": [
              "tidak",
              "penting",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Konsistensi versi."
          },
          {
            "type": "mc",
            "q": "Dokumentasi toolbox penting",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Dokumentasi."
          },
          {
            "type": "mc",
            "q": "Lisensi perlu diperhatikan",
            "options": [
              "tidak",
              "ya",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Lisensi penting."
          }
        ]
      },
      {
        "id": "matlab-29",
        "level": "Advance",
        "title": "Keamanan & Best Practice",
        "exercises": [
          {
            "type": "mc",
            "q": "Validasi input penting",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Validasi input."
          },
          {
            "type": "mc",
            "q": "eval pada input berisiko",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Hindari eval."
          },
          {
            "type": "mc",
            "q": "Menghindari nilai global berlebih",
            "options": [
              "tidak",
              "CSS",
              "route",
              "penting"
            ],
            "a": 3,
            "explain": "Global menyulitkan."
          },
          {
            "type": "mc",
            "q": "Dokumentasi fungsi penting",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "Help/documentation."
          },
          {
            "type": "mc",
            "q": "Unit test membantu",
            "options": [
              "ya",
              "tidak",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Test fungsi."
          },
          {
            "type": "mc",
            "q": "Mengelola versi script",
            "options": [
              "tidak",
              "penting",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Version control."
          },
          {
            "type": "mc",
            "q": "Menangani error eksplisit",
            "options": [
              "tidak",
              "CSS",
              "route",
              "penting"
            ],
            "a": 3,
            "explain": "Tangani error."
          },
          {
            "type": "mc",
            "q": "Menghindari hardcode path",
            "options": [
              "tidak",
              "penting",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Path relatif."
          },
          {
            "type": "mc",
            "q": "Komentar seperlunya",
            "options": [
              "tidak",
              "penting",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Komentar jelas."
          },
          {
            "type": "mc",
            "q": "Mengukur performa",
            "options": [
              "penting",
              "tidak",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Ukur performa."
          }
        ]
      },
      {
        "id": "matlab-30",
        "level": "Advance",
        "title": "Dokumentasi & Kolaborasi",
        "exercises": [
          {
            "type": "mc",
            "q": "Live Script memadukan",
            "options": [
              "kode dan narasi",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Live Script naratif."
          },
          {
            "type": "mc",
            "q": "Publishing menghasilkan",
            "options": [
              "CSS",
              "route",
              "laporan",
              "migrasi"
            ],
            "a": 2,
            "explain": "Publish laporan."
          },
          {
            "type": "mc",
            "q": "Komantar help dibaca via",
            "options": [
              "help",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "help membaca komentar."
          },
          {
            "type": "mc",
            "q": "Version control penting",
            "options": [
              "ya",
              "tidak",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Git untuk kode."
          },
          {
            "type": "mc",
            "q": "Naming konsisten penting",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "Konsistensi nama."
          },
          {
            "type": "mc",
            "q": "Testing terintegrasi",
            "options": [
              "tidak",
              "CSS",
              "route",
              "penting"
            ],
            "a": 3,
            "explain": "Test terintegrasi."
          },
          {
            "type": "mc",
            "q": "Review kode penting",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Review kode."
          },
          {
            "type": "mc",
            "q": "Dokumentasi proyek",
            "options": [
              "penting",
              "tidak",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Dokumentasi proyek."
          },
          {
            "type": "mc",
            "q": "Modularisasi script",
            "options": [
              "penting",
              "tidak",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Modularisasi."
          },
          {
            "type": "mc",
            "q": "Menjaga dependensi jelas",
            "options": [
              "penting",
              "tidak",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Dependensi jelas."
          }
        ]
      },
      {
        "id": "matlab-31",
        "level": "Advance",
        "title": "Master Review & Best Practice MATLAB",
        "exercises": [
          {
            "type": "mc",
            "q": "Indeks elemen pertama array MATLAB dimulai dari",
            "options": [
              "1",
              "0",
              "-1",
              "Ukuran array"
            ],
            "a": 0,
            "explain": "MATLAB menggunakan indexing berbasis satu."
          },
          {
            "type": "mc",
            "q": "Operasi `A .* B` pada MATLAB berarti",
            "options": [
              "Perkalian elemen demi elemen",
              "Perkalian matriks biasa",
              "Penggabungan string",
              "Pembagian setiap baris"
            ],
            "a": 0,
            "explain": "Operator titik menandakan operasi per elemen."
          },
          {
            "type": "mc",
            "q": "Vectorization di MATLAB sering berguna karena",
            "options": [
              "Loop dilarang oleh bahasa",
              "Menyatakan operasi array secara langsung dan memanfaatkan operasi bawaan",
              "Matriks tidak memiliki ukuran",
              "Semua variabel berubah menjadi string"
            ],
            "a": 1,
            "explain": "Operasi vektor/matriks menyatakan komputasi array dengan ringkas dan efisien."
          },
          {
            "type": "mc",
            "q": "Fungsi MATLAB biasanya disimpan dalam file dengan ekstensi",
            "options": [
              ".php",
              ".css",
              ".class",
              ".m"
            ],
            "a": 3,
            "explain": "File .m digunakan untuk script dan fungsi MATLAB."
          },
          {
            "type": "mc",
            "q": "Fungsi `size(A)` digunakan untuk mengetahui",
            "options": [
              "Nilai maksimum A saja",
              "Nama file A",
              "Dimensi array A",
              "Waktu eksekusi A"
            ],
            "a": 2,
            "explain": "size mengembalikan ukuran dimensi array."
          }
        ]
      }
    ]
  }
];

export { CONTENT_MATLAB };
