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
              "jumlah argumen masukan",
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
              "MATLAB Production Server",
              "Menyatakan operasi array secara langsung dan memanfaatkan operasi bawaan",
              "[a b] / [a; b]",
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
              "ya"
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
              ".m"
            ],
            "a": 0,
            "explain": "MATLAB memakai %."
          },
          {
            "type": "mc",
            "q": "Script MATLAB adalah",
            "options": [
              "strtrim",
              "memeriksa kondisi",
              "kumpulan perintah .m",
              "rgb2gray"
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
              "imwrite"
            ],
            "a": 1,
            "explain": "MATLAB memakai function."
          },
          {
            "type": "mc",
            "q": "Vectorization disarankan",
            "options": [
              "tidak",
              "end",
              "ya",
              "var()"
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
              "nilai antar panggilan"
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
              "plot(x,y)",
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
              "disp()/fprintf",
              "kondisi array",
              "size(A)"
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
              "imresize"
            ],
            "a": 1,
            "explain": "MATLAB memakai Inf."
          },
          {
            "type": "mc",
            "q": "Nilai NaN berarti",
            "options": [
              "bukan angka",
              "==/</>",
              "\"teks\"",
              "strlength"
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
              "ode45"
            ],
            "a": 2,
            "explain": "Array kosong memakai []."
          },
          {
            "type": "mc",
            "q": "Menampilkan variabel memakai",
            "options": [
              "disp()/fprintf",
              "cakupan test",
              "rank(A)",
              "max()"
            ],
            "a": 0,
            "explain": "disp/fprintf menampilkan."
          },
          {
            "type": "mc",
            "q": "Mengubah tipe memakai",
            "options": [
              "performa",
              "cast/int32/str2double",
              "solver numerik",
              "membuat GUI"
            ],
            "a": 1,
            "explain": "Konversi eksplisit."
          },
          {
            "type": "mc",
            "q": "who/whos untuk",
            "options": [
              "parfor",
              "kompleksitas",
              "logika state",
              "melihat variabel"
            ],
            "a": 3,
            "explain": "who/whos menampilkan variabel."
          },
          {
            "type": "mc",
            "q": "clear menghapus",
            "options": [
              "xlabel()",
              "variabel workspace",
              "saveas()/print()",
              "loop manual"
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
              "wajib",
              "mask logis",
              "analisis sinyal",
              "MathWorks"
            ],
            "a": 1,
            "explain": "Mask logis memilih elemen."
          },
          {
            "type": "mc",
            "q": "A(A>5) memilih",
            "options": [
              "MATLAB Production Server",
              "Menyatakan operasi array secara langsung dan memanfaatkan operasi bawaan",
              "[a b] / [a; b]",
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
              "sqrt()",
              "grid on",
              "di signature"
            ],
            "a": 0,
            "explain": "end elemen terakhir."
          },
          {
            "type": "mc",
            "q": "A(2:4) memilih",
            "options": [
              "jumlah argumen masukan",
              "nilai antar panggilan",
              "dipakai bila ada",
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
              "matriks",
              "analisis spektral",
              "unittest/matlab.unittest"
            ],
            "a": 0,
            "explain": "find mencari index."
          },
          {
            "type": "mc",
            "q": "any/all memeriksa",
            "options": [
              "mask logis",
              "kondisi array",
              "zeros()",
              "exp()"
            ],
            "a": 1,
            "explain": "any/all memeriksa."
          },
          {
            "type": "mc",
            "q": "Menggabungkan array memakai",
            "options": [
              "&& || ~",
              "[a b] / [a; b]",
              "fungsi ke elemen",
              "data tabular kolom"
            ],
            "a": 1,
            "explain": "Konkatenasi horizontal/vertikal."
          },
          {
            "type": "mc",
            "q": "Membalik array memakai",
            "options": [
              "fliplr/flipud",
              "replace/strrep",
              "debugging",
              "imread"
            ],
            "a": 0,
            "explain": "fliplr/flipud membalik."
          },
          {
            "type": "mc",
            "q": "Membentuk ulang array memakai",
            "options": [
              "kode C/C++",
              "profile on",
              ".slx",
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
              ".mlapp",
              "backslash",
              "tabulate"
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
              "[a b] / [a; b]",
              "jumlah argumen keluaran"
            ],
            "a": 1,
            "explain": "Baris dipisah ;."
          },
          {
            "type": "mc",
            "q": "Semua elemen dikalikan per elemen memakai",
            "options": [
              "*",
              "help",
              "edge",
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
              "di signature",
              "strcmp",
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
              "banyak record",
              "fopen"
            ],
            "a": 1,
            "explain": "Tanda : memilih semua kolom."
          },
          {
            "type": "mc",
            "q": "Dimensi array memakai",
            "options": [
              "shape(A)",
              "variabel workspace",
              "A(2) = []",
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
              "imbinarize",
              "sampling rate",
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
              ".slx",
              "[]",
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
              "exp()",
              "legend()"
            ],
            "a": 0,
            "explain": "eye membuat identitas."
          },
          {
            "type": "mc",
            "q": "Matriks nol memakai",
            "options": [
              "nulls()",
              "std()",
              "zeros()",
              "data tabular"
            ],
            "a": 2,
            "explain": "zeros membuat nol."
          },
          {
            "type": "mc",
            "q": "Matriks acak memakai",
            "options": [
              "random()",
              "pengolahan citra",
              "double",
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
              "[]",
              "index elemen"
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
              "ya",
              "./"
            ],
            "a": 1,
            "explain": "Perkalian matriks memakai *."
          },
          {
            "type": "mc",
            "q": "Perkalian per elemen memakai",
            "options": [
              "*",
              ".m",
              ".*",
              "A'"
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
              "fft",
              "std()"
            ],
            "a": 1,
            "explain": "./ untuk per elemen."
          },
          {
            "type": "mc",
            "q": "Pangkat per elemen memakai",
            "options": [
              "^",
              "var()",
              ".^",
              "{ }"
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
              "scatter()",
              "split/strsplit"
            ],
            "a": 0,
            "explain": "mod menghitung sisa."
          },
          {
            "type": "mc",
            "q": "Fungsi eksponen memakai",
            "options": [
              "^e",
              "struktur kode",
              "exp()",
              "replace/strrep"
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
              "model sistem",
              "statistik"
            ],
            "a": 1,
            "explain": "sqrt akar kuadrat."
          },
          {
            "type": "mc",
            "q": "Nilai absolut memakai",
            "options": [
              "absolute()",
              "Inf",
              "mask logis",
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
              "readmatrix/readtable",
              "regularisasi",
              "sesuai data"
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
              "exist/isfile",
              "ode45"
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
              "elemen terakhir",
              "A(1,2)"
            ],
            "a": 1,
            "explain": "title memberi judul."
          },
          {
            "type": "mc",
            "q": "Label sumbu x memakai",
            "options": [
              "labelx()",
              "membuat GUI",
              "xlabel()",
              "Inf"
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
              "strlength",
              "breakpoint programatik"
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
              "histogram()",
              "di loop"
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
              "max()",
              "C{1}"
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
              "event UI",
              "state test"
            ],
            "a": 1,
            "explain": "scatter membuat scatter."
          },
          {
            "type": "mc",
            "q": "Histogram memakai",
            "options": [
              "hist_only",
              "database toolbox",
              "perlu diperhatikan",
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
              "keberadaan field",
              "fgetl/fgets",
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
              "kutip tunggal/ganda",
              "variabel workspace",
              "A(2) = []"
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
              "parfor",
              "kompleksitas"
            ],
            "a": 1,
            "explain": "MATLAB memakai elseif."
          },
          {
            "type": "mc",
            "q": "Mengakhiri blok if memakai",
            "options": [
              "}",
              "runtests",
              "end",
              "norm(A)"
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
              "&& || ~",
              "fungsi ke elemen"
            ],
            "a": 1,
            "explain": "For dengan rentang."
          },
          {
            "type": "mc",
            "q": "Perulangan while memakai",
            "options": [
              "while kondisi",
              "fminsearch/fmincon",
              "trainNetwork",
              "ODE non-stiff"
            ],
            "a": 0,
            "explain": "While bergantung kondisi."
          },
          {
            "type": "mc",
            "q": "switch memakai",
            "options": [
              "switch/case/otherwise",
              "+ / strcat",
              "memeriksa kondisi",
              "rgb2gray"
            ],
            "a": 0,
            "explain": "MATLAB memakai switch."
          },
          {
            "type": "mc",
            "q": "break/continue berlaku",
            "options": [
              ".slx",
              "laporan",
              "di loop",
              "index elemen"
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
              "menjalankan perintah interaktif",
              "fungsi ke elemen"
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
              "xlabel()",
              "saveas()/print()"
            ],
            "a": 1,
            "explain": "MATLAB memakai ==."
          },
          {
            "type": "mc",
            "q": "Vectorization menggantikan",
            "options": [
              "stabilitas",
              "memori",
              "loop manual",
              "database toolbox"
            ],
            "a": 2,
            "explain": "Vectorization menghindari loop."
          },
          {
            "type": "mc",
            "q": "Menghindari loop di dalam loop berlebihan",
            "options": [
              "tidak",
              "imresize",
              "disarankan",
              "filter/designfilt"
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
              "[a b] / [a; b]",
              "function out = nama(in)"
            ],
            "a": 3,
            "explain": "MATLAB memakai function."
          },
          {
            "type": "mc",
            "q": "Nilai balik fungsi dideklarasikan",
            "options": [
              "backslash",
              "tabulate",
              "struct()",
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
              "nilai antar panggilan",
              "dipakai bila ada",
              "Dimensi array A"
            ],
            "a": 0,
            "explain": "Nama berkas = nama fungsi."
          },
          {
            "type": "mc",
            "q": "Fungsi anonim memakai",
            "options": [
              "lambda",
              "disarankan",
              "+ / strcat",
              "@(x) x.^2"
            ],
            "a": 3,
            "explain": "MATLAB memakai @()."
          },
          {
            "type": "mc",
            "q": "nargin mengecek",
            "options": [
              "Menyatakan operasi array secara langsung dan memanfaatkan operasi bawaan",
              "jumlah argumen masukan",
              "[a b] / [a; b]",
              "jumlah argumen keluaran"
            ],
            "a": 1,
            "explain": "nargin jumlah input."
          },
          {
            "type": "mc",
            "q": "nargout mengecek",
            "options": [
              "data campuran tipe",
              "jumlah argumen keluaran",
              "dengan hardware nyata",
              "nama = nilai"
            ],
            "a": 1,
            "explain": "nargout jumlah output."
          },
          {
            "type": "mc",
            "q": "varargin menampung",
            "options": [
              "penting",
              "argumen variabel",
              "imresize",
              "filter/designfilt"
            ],
            "a": 1,
            "explain": "varargin variadik."
          },
          {
            "type": "mc",
            "q": "Fungsi lokal berada di",
            "options": [
              "menjalankan perintah interaktif",
              "berkas yang sama",
              "&& || ~",
              "fungsi ke elemen"
            ],
            "a": 1,
            "explain": "Local function satu berkas."
          },
          {
            "type": "mc",
            "q": "Subfunction membantu",
            "options": [
              "grid on",
              "di signature",
              "strcmp",
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
              "fopen",
              "fzero"
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
              "fungsi khusus",
              "help"
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
              "mean()",
              "corr()"
            ],
            "a": 0,
            "explain": "Char memakai ''."
          },
          {
            "type": "mc",
            "q": "Menggabungkan string memakai",
            "options": [
              "fopen",
              "fzero",
              "neural network",
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
              "error()",
              "penting"
            ],
            "a": 0,
            "explain": "strcmp membandingkan."
          },
          {
            "type": "mc",
            "q": "Format string memakai",
            "options": [
              "sprintf/fprintf",
              "sampling rate",
              ".mlapp",
              "backslash"
            ],
            "a": 0,
            "explain": "sprintf memformat."
          },
          {
            "type": "mc",
            "q": "Memecah string memakai",
            "options": [
              "A(2) = []",
              "split/strsplit",
              "eye(n)",
              "mod()"
            ],
            "a": 1,
            "explain": "split memecah."
          },
          {
            "type": "mc",
            "q": "Mengganti string memakai",
            "options": [
              "legend()",
              "if/elseif/else",
              "replace/strrep",
              "disarankan"
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
              "komputasi",
              "kode C/C++"
            ],
            "a": 1,
            "explain": "strlength panjang string."
          },
          {
            "type": "mc",
            "q": "Mengubah huruf besar memakai",
            "options": [
              "toUpper",
              ".m",
              "double",
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
              "data tabular",
              "strtrim",
              "field"
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
              "struktur kode",
              "error()",
              "replace/strrep"
            ],
            "a": 2,
            "explain": "error melempar."
          },
          {
            "type": "mc",
            "q": "Peringatan memakai",
            "options": [
              "model sistem",
              "statistik",
              "warning()",
              ".mat"
            ],
            "a": 2,
            "explain": "warning memberi peringatan."
          },
          {
            "type": "mc",
            "q": "try/catch memakai",
            "options": [
              "try ... catch",
              "svd(A)",
              "var()",
              "keberadaan field"
            ],
            "a": 0,
            "explain": "MATLAB mendukung try/catch."
          },
          {
            "type": "mc",
            "q": "Breakpoint memudahkan",
            "options": [
              "round()/floor()/ceil()",
              "scatter()",
              "debugging",
              "switch/case/otherwise"
            ],
            "a": 2,
            "explain": "Breakpoint berhenti eksekusi."
          },
          {
            "type": "mc",
            "q": "dbstop memakai",
            "options": [
              "pemrosesan besar",
              "webread/webwrite",
              "kompatibel",
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
              "fungsi",
              "matlab.unittest.TestCase",
              "eig(A)"
            ],
            "a": 0,
            "explain": "dbstep melangkah."
          },
          {
            "type": "mc",
            "q": "Menangkap pesan error memakai",
            "options": [
              "kode dan narasi",
              "elemen lebih dari 5",
              "catch err / err.message",
              "berkas .m bernama sama"
            ],
            "a": 2,
            "explain": "Error object menyimpan pesan."
          },
          {
            "type": "mc",
            "q": "assert membantu",
            "options": [
              "memeriksa kondisi",
              "integral()",
              "operasi fungsi",
              "codegen/export"
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
              ".m",
              "A'"
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
              "eig(A)",
              "std()"
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
              "sesuai data",
              "callback",
              "komputasi",
              "kode C/C++"
            ],
            "a": 1,
            "explain": "Anonymous untuk callback."
          },
          {
            "type": "mc",
            "q": "cellfun/arrayfun menerapkan",
            "options": [
              "dipakai bila ada",
              "Dimensi array A",
              "fungsi ke elemen",
              "[1 2; 3 4]"
            ],
            "a": 2,
            "explain": "Menerapkan fungsi."
          },
          {
            "type": "mc",
            "q": "Function handle memungkinkan",
            "options": [
              "menyimpan fungsi di variabel",
              "data tabular kolom",
              "kode dan narasi",
              "elemen lebih dari 5"
            ],
            "a": 0,
            "explain": "Function handle."
          },
          {
            "type": "mc",
            "q": "Nested function membantu",
            "options": [
              "jumlah argumen keluaran",
              "membuat aplikasi GUI",
              "pemodelan sistem dinamis",
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
              "dengan hardware nyata",
              "nama = nilai",
              "function out = nama(in)"
            ],
            "a": 0,
            "explain": "Persistent antar panggilan."
          },
          {
            "type": "mc",
            "q": "global sebaiknya",
            "options": [
              "dihindari",
              "banyak record",
              "fopen",
              "fzero"
            ],
            "a": 0,
            "explain": "Hindari global."
          },
          {
            "type": "mc",
            "q": "Menyimpan fungsi sebagai string berisiko",
            "options": [
              "tidak",
              "load",
              "ya",
              ".m"
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
              "data jarang",
              "fungsi khusus"
            ],
            "a": 1,
            "explain": "Anonymous untuk optimasi."
          },
          {
            "type": "mc",
            "q": "Menulis fungsi kecil fokus",
            "options": [
              "tidak",
              "mex",
              "MATLAB Compiler",
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
              "hold on",
              "penting",
              "while kondisi"
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
              "ODE non-stiff",
              "strategi",
              "performa",
              "imread"
            ],
            "a": 3,
            "explain": "imread membaca gambar."
          },
          {
            "type": "mc",
            "q": "Menampilkan gambar memakai",
            "options": [
              "imfilter",
              "conv",
              "imshow",
              "App Designer"
            ],
            "a": 2,
            "explain": "imshow menampilkan."
          },
          {
            "type": "mc",
            "q": "Menyimpan gambar memakai",
            "options": [
              "runtests",
              "norm(A)",
              "min()",
              "imwrite"
            ],
            "a": 3,
            "explain": "imwrite menyimpan."
          },
          {
            "type": "mc",
            "q": "Grayscale memakai",
            "options": [
              "title()",
              "rgb2gray",
              "subplot()",
              "==/</>"
            ],
            "a": 1,
            "explain": "rgb2gray konversi."
          },
          {
            "type": "mc",
            "q": "Resize gambar memakai",
            "options": [
              "strcmp",
              "error()",
              "penting",
              "imresize"
            ],
            "a": 3,
            "explain": "imresize mengubah ukuran."
          },
          {
            "type": "mc",
            "q": "Filter citra memakai",
            "options": [
              "fungsi khusus",
              "help",
              "imfilter",
              "function"
            ],
            "a": 2,
            "explain": "imfilter filter."
          },
          {
            "type": "mc",
            "q": "Deteksi tepi memakai",
            "options": [
              "numel(A)",
              "./",
              "edge",
              "plot(x,y)"
            ],
            "a": 2,
            "explain": "edge deteksi tepi."
          },
          {
            "type": "mc",
            "q": "Threshold memakai",
            "options": [
              "fopen",
              "imbinarize",
              "fzero",
              "neural network"
            ],
            "a": 1,
            "explain": "imbinarize threshold."
          },
          {
            "type": "mc",
            "q": "Gambar disimpan sebagai",
            "options": [
              "efisien",
              "matriks",
              "kriteria berhenti",
              "pemrosesan besar"
            ],
            "a": 1,
            "explain": "Gambar representasi matriks."
          },
          {
            "type": "mc",
            "q": "Image Processing Toolbox menambah",
            "options": [
              "fungsi lanjutan",
              "memeriksa kondisi",
              "rgb2gray",
              "fungsi"
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
              "parfor",
              "loop",
              "fft",
              "A(1,2)"
            ],
            "a": 2,
            "explain": "fft transformasi."
          },
          {
            "type": "mc",
            "q": "Filter digital memakai",
            "options": [
              "eye(n)",
              "filter/designfilt",
              "xlabel()",
              "saveas()/print()"
            ],
            "a": 1,
            "explain": "Filter digital."
          },
          {
            "type": "mc",
            "q": "Konvolusi memakai",
            "options": [
              ".mlapp",
              "A\\b",
              "backslash",
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
              "kode C/C++",
              "profile on",
              ".slx"
            ],
            "a": 0,
            "explain": "spectrogram spektral."
          },
          {
            "type": "mc",
            "q": "Menghitung frekuensi memakai",
            "options": [
              "if/elseif/else",
              "disarankan",
              "+ / strcat",
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
              "corr()",
              "fieldnames",
              "diff/gradient"
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
              "help",
              "*"
            ],
            "a": 0,
            "explain": "Nyquist menghindari aliasing."
          },
          {
            "type": "mc",
            "q": "Menyaring noise memakai",
            "options": [
              "error()",
              "penting",
              "imresize",
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
              "fzero",
              "neural network",
              "stabilitas"
            ],
            "a": 0,
            "explain": "Toolbox sinyal."
          },
          {
            "type": "mc",
            "q": "Visualisasi penting",
            "options": [
              "tidak",
              "./",
              "A\\b",
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
              "nama = nilai",
              "membuat aplikasi GUI",
              "function out = nama(in)",
              "menyimpan fungsi di variabel"
            ],
            "a": 1,
            "explain": "App Designer GUI."
          },
          {
            "type": "mc",
            "q": "uicontrol untuk",
            "options": [
              "jumlah argumen keluaran",
              "membuat aplikasi GUI",
              "komponen GUI klasik",
              "pemodelan sistem dinamis"
            ],
            "a": 2,
            "explain": "uicontrol komponen."
          },
          {
            "type": "mc",
            "q": "Callback menangani",
            "options": [
              "abs()",
              "hold on",
              "event UI",
              "while kondisi"
            ],
            "a": 2,
            "explain": "Callback event."
          },
          {
            "type": "mc",
            "q": "uilabel/uibutton bagian dari",
            "options": [
              "App Designer",
              "bertahap",
              "MATLAB Compiler",
              "wajib"
            ],
            "a": 0,
            "explain": "Komponen modern."
          },
          {
            "type": "mc",
            "q": "Layout GUI memakai",
            "options": [
              "grid/layout",
              "imread",
              "imbinarize",
              "sampling rate"
            ],
            "a": 0,
            "explain": "Layout mengatur."
          },
          {
            "type": "mc",
            "q": "Menyimpan app memakai",
            "options": [
              ".mlapp",
              "A(2) = []",
              "eye(n)",
              "mod()"
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
              "loop",
              "%"
            ],
            "a": 0,
            "explain": "Uji GUI."
          },
          {
            "type": "mc",
            "q": "Responsif penting",
            "options": [
              "tidak",
              "edge",
              "min()",
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
              "help",
              "*"
            ],
            "a": 0,
            "explain": "Dokumentasi."
          },
          {
            "type": "mc",
            "q": "Aksesibilitas penting",
            "options": [
              "tidak",
              "load",
              "ya",
              ".m"
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
              "round()/floor()/ceil()",
              "scatter()",
              "unittest/matlab.unittest",
              "switch/case/otherwise"
            ],
            "a": 2,
            "explain": "MATLAB unittest."
          },
          {
            "type": "mc",
            "q": "assert memeriksa",
            "options": [
              "event UI",
              "state test",
              "svd(A)",
              "kondisi"
            ],
            "a": 3,
            "explain": "assert memeriksa."
          },
          {
            "type": "mc",
            "q": "Test class memakai",
            "options": [
              "memeriksa kondisi",
              "data tabular",
              "fminsearch/fmincon",
              "matlab.unittest.TestCase"
            ],
            "a": 3,
            "explain": "Test class."
          },
          {
            "type": "mc",
            "q": "Fixture menyiapkan",
            "options": [
              "efisien",
              "kriteria berhenti",
              "state test",
              "pemrosesan besar"
            ],
            "a": 2,
            "explain": "Fixture state."
          },
          {
            "type": "mc",
            "q": "Coverage membantu",
            "options": [
              "struct()",
              "cakupan test",
              "integral()",
              "operasi fungsi"
            ],
            "a": 1,
            "explain": "Coverage."
          },
          {
            "type": "mc",
            "q": "Menjalankan test memakai",
            "options": [
              "runtests",
              "kumpulan perintah .m",
              "index elemen",
              "A(1,:)"
            ],
            "a": 0,
            "explain": "runtests menjalankan."
          },
          {
            "type": "mc",
            "q": "Test perilaku lebih stabil",
            "options": [
              "tidak",
              "loop",
              "%",
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
              "upper",
              "ya",
              "fopen"
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
              "end",
              "var()"
            ],
            "a": 0,
            "explain": "Toleransi float."
          },
          {
            "type": "mc",
            "q": "Dokumentasi test penting",
            "options": [
              "tidak",
              "fopen",
              "ya",
              "fzero"
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
              "gpuArray",
              ".m",
              "A\\b",
              "double"
            ],
            "a": 2,
            "explain": "Backslash menyelesaikan Ax=b."
          },
          {
            "type": "mc",
            "q": "Invers matriks memakai",
            "options": [
              "rgb2gray",
              "fft",
              "fungsi",
              "inv(A)"
            ],
            "a": 3,
            "explain": "inv menghitung invers."
          },
          {
            "type": "mc",
            "q": "Determinan memakai",
            "options": [
              "state test",
              "svd(A)",
              "var()",
              "det(A)"
            ],
            "a": 3,
            "explain": "det determinan."
          },
          {
            "type": "mc",
            "q": "Transpose memakai",
            "options": [
              "*",
              "edge",
              "min()",
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
              "di loop",
              "struktur kode",
              "replace/strrep"
            ],
            "a": 0,
            "explain": "eig nilai eigen."
          },
          {
            "type": "mc",
            "q": "Dekomposisi SVD memakai",
            "options": [
              "svd(A)",
              "model sistem",
              "statistik",
              ".mat"
            ],
            "a": 0,
            "explain": "svd dekomposisi."
          },
          {
            "type": "mc",
            "q": "Rank memakai",
            "options": [
              "Inf",
              "mask logis",
              "zeros()",
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
              "C{1}",
              "fprintf",
              "polyfit"
            ],
            "a": 0,
            "explain": "norm norma."
          },
          {
            "type": "mc",
            "q": "Perkalian matriks memakai",
            "options": [
              ".*",
              "ode45",
              "*",
              "klasifikasi"
            ],
            "a": 2,
            "explain": "Perkalian matriks *."
          },
          {
            "type": "mc",
            "q": "Hindari inv bila bisa pakai",
            "options": [
              "backslash",
              "breakpoint programatik",
              "imshow",
              "matriks"
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
              "C{1}",
              "fprintf",
              "mean()"
            ],
            "a": 3,
            "explain": "mean rata-rata."
          },
          {
            "type": "mc",
            "q": "Median memakai",
            "options": [
              "Inf",
              "mask logis",
              "median()",
              "zeros()"
            ],
            "a": 2,
            "explain": "median nilai tengah."
          },
          {
            "type": "mc",
            "q": "Standar deviasi memakai",
            "options": [
              "imshow",
              "std()",
              "matriks",
              "inv(A)"
            ],
            "a": 1,
            "explain": "std simpangan baku."
          },
          {
            "type": "mc",
            "q": "Varians memakai",
            "options": [
              "var()",
              "ode45",
              "klasifikasi",
              "data besar"
            ],
            "a": 0,
            "explain": "var varians."
          },
          {
            "type": "mc",
            "q": "Nilai maksimum memakai",
            "options": [
              "max()",
              "scatter()",
              "split/strsplit",
              "try ... catch"
            ],
            "a": 0,
            "explain": "max maksimum."
          },
          {
            "type": "mc",
            "q": "Nilai minimum memakai",
            "options": [
              "min()",
              "state test",
              "svd(A)",
              "var()"
            ],
            "a": 0,
            "explain": "min minimum."
          },
          {
            "type": "mc",
            "q": "Tabel frekuensi memakai",
            "options": [
              "perlu diperhatikan",
              "model sistem",
              "statistik",
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
              "di loop",
              "struktur kode",
              "replace/strrep"
            ],
            "a": 0,
            "explain": "corr korelasi."
          },
          {
            "type": "mc",
            "q": "Menghapus NaN memakai",
            "options": [
              "save",
              "integral()",
              "operasi fungsi",
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
              "index elemen",
              "A(1,:)",
              "abs()"
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
              "A(1,:)"
            ],
            "a": 0,
            "explain": "Cell memakai {}."
          },
          {
            "type": "mc",
            "q": "Cell menyimpan",
            "options": [
              "for i = 1:n",
              "data campuran tipe",
              "catch err / err.message",
              "dengan hardware nyata"
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
              "melangkah",
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
              "bukan angka",
              "elemen terakhir"
            ],
            "a": 0,
            "explain": "Struct memakai .field."
          },
          {
            "type": "mc",
            "q": "Membuat struct memakai",
            "options": [
              "s.field",
              "struct()",
              "writematrix/writetable",
              "exist/isfile"
            ],
            "a": 1,
            "explain": "struct() membuat struct."
          },
          {
            "type": "mc",
            "q": "Field struct memakai",
            "options": [
              "==/</>",
              "\"teks\"",
              "fieldnames",
              "strlength"
            ],
            "a": 2,
            "explain": "fieldnames daftar field."
          },
          {
            "type": "mc",
            "q": "Array of struct memungkinkan",
            "options": [
              "banyak record",
              "performa",
              "solver numerik",
              "membuat GUI"
            ],
            "a": 0,
            "explain": "Struct array."
          },
          {
            "type": "mc",
            "q": "Fungsi `rmfield` pada struct di MATLAB digunakan untuk menghapus sebuah",
            "options": [
              "field",
              "cakupan test",
              "rank(A)",
              "max()"
            ],
            "a": 0,
            "explain": "rmfield hapus field."
          },
          {
            "type": "mc",
            "q": "isfield memeriksa",
            "options": [
              "plot(x,y)",
              "keberadaan field",
              "histogram()",
              "di loop"
            ],
            "a": 1,
            "explain": "isfield cek field."
          },
          {
            "type": "mc",
            "q": "Table lebih nyaman untuk",
            "options": [
              "data campuran tipe",
              "data tabular kolom",
              "dengan hardware nyata",
              "nama = nilai"
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
              "title()",
              "readmatrix/readtable",
              "subplot()",
              "strlength"
            ],
            "a": 1,
            "explain": "readmatrix membaca CSV."
          },
          {
            "type": "mc",
            "q": "Menulis CSV memakai",
            "options": [
              "runtests",
              "exist/isfile",
              "klasifikasi",
              "writematrix/writetable"
            ],
            "a": 3,
            "explain": "writetable menulis."
          },
          {
            "type": "mc",
            "q": "Menyimpan variabel memakai",
            "options": [
              "imfilter",
              "conv",
              "save",
              "rank(A)"
            ],
            "a": 2,
            "explain": "save menyimpan .mat."
          },
          {
            "type": "mc",
            "q": "Memuat variabel memakai",
            "options": [
              "strategi",
              "performa",
              "load",
              "membuat GUI"
            ],
            "a": 2,
            "explain": "load memuat .mat."
          },
          {
            "type": "mc",
            "q": "Membuka berkas teks memakai",
            "options": [
              "struct()",
              "fopen",
              "save",
              "integral()"
            ],
            "a": 1,
            "explain": "fopen membuka berkas."
          },
          {
            "type": "mc",
            "q": "Menutup berkas memakai",
            "options": [
              "index elemen",
              "fclose",
              "A(1,:)",
              "abs()"
            ],
            "a": 1,
            "explain": "fclose menutup."
          },
          {
            "type": "mc",
            "q": "Membaca baris memakai",
            "options": [
              "loop",
              "logika state",
              "fgetl/fgets",
              "Add-On Explorer"
            ],
            "a": 2,
            "explain": "fgetl membaca baris."
          },
          {
            "type": "mc",
            "q": "Menulis terformat memakai",
            "options": [
              "loop manual",
              "'teks'",
              "fprintf",
              "upper"
            ],
            "a": 2,
            "explain": "fprintf menulis."
          },
          {
            "type": "mc",
            "q": "Memeriksa path memakai",
            "options": [
              "size(A)",
              "round()/floor()/ceil()",
              "exist/isfile",
              "scatter()"
            ],
            "a": 2,
            "explain": "exist memeriksa."
          },
          {
            "type": "mc",
            "q": "Menangani IO error penting",
            "options": [
              "tidak",
              "var()",
              "{ }",
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
              "try ... catch",
              "dihindari",
              "integral()",
              "edge"
            ],
            "a": 2,
            "explain": "integral menghitung integral."
          },
          {
            "type": "mc",
            "q": "Turunan numerik memakai",
            "options": [
              "interp1",
              "train/validation",
              "ODE stiff",
              "diff/gradient"
            ],
            "a": 3,
            "explain": "diff/gradient turunan."
          },
          {
            "type": "mc",
            "q": "Mencari akar memakai",
            "options": [
              "data tabular",
              "field",
              "fclose",
              "fzero"
            ],
            "a": 3,
            "explain": "fzero akar fungsi."
          },
          {
            "type": "mc",
            "q": "Optimasi memakai",
            "options": [
              "melihat variabel",
              "fminsearch/fmincon",
              "reshape",
              "title()"
            ],
            "a": 1,
            "explain": "Fungsi optimasi."
          },
          {
            "type": "mc",
            "q": "Interpolasi memakai",
            "options": [
              "komputasi",
              "kode C/C++",
              "interp1",
              "profile on"
            ],
            "a": 2,
            "explain": "interp1 interpolasi."
          },
          {
            "type": "mc",
            "q": "Kurva fitting memakai",
            "options": [
              "legend()",
              "polyfit",
              "if/elseif/else",
              "disarankan"
            ],
            "a": 1,
            "explain": "polyfit fitting."
          },
          {
            "type": "mc",
            "q": "Solve ODE memakai",
            "options": [
              "A(2) = []",
              "eye(n)",
              "ode45",
              "mod()"
            ],
            "a": 2,
            "explain": "ode45 menyelesaikan ODE."
          },
          {
            "type": "mc",
            "q": "Fungsi anonim membantu",
            "options": [
              "sampling rate",
              ".mlapp",
              "operasi fungsi",
              "backslash"
            ],
            "a": 2,
            "explain": "Anonymous function."
          },
          {
            "type": "mc",
            "q": "Vectorize fungsi agar",
            "options": [
              "strcmp",
              "error()",
              "penting",
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
              "fopen",
              "ya",
              "fzero"
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
              "MathWorks",
              "cast/int32/str2double",
              "fliplr/flipud"
            ],
            "a": 0,
            "explain": "Toolbox DL."
          },
          {
            "type": "mc",
            "q": "Training model memakai",
            "options": [
              "trainNetwork",
              "rmmissing",
              "banyak record",
              "fopen"
            ],
            "a": 0,
            "explain": "trainNetwork melatih."
          },
          {
            "type": "mc",
            "q": "Feature extraction penting",
            "options": [
              "tidak",
              "end",
              "var()",
              "ya"
            ],
            "a": 3,
            "explain": "Fitur penting."
          },
          {
            "type": "mc",
            "q": "Data split memakai",
            "options": [
              "kode CUDA",
              "train/validation",
              "data jarang",
              "fungsi khusus"
            ],
            "a": 1,
            "explain": "Split data."
          },
          {
            "type": "mc",
            "q": "Overfitting dicegah dengan",
            "options": [
              "unittest/matlab.unittest",
              "inv(A)",
              "regularisasi",
              "mean()"
            ],
            "a": 2,
            "explain": "Regularisasi."
          },
          {
            "type": "mc",
            "q": "Confusion matrix mengevaluasi",
            "options": [
              "zeros()",
              "exp()",
              "klasifikasi",
              "legend()"
            ],
            "a": 2,
            "explain": "Confusion matrix."
          },
          {
            "type": "mc",
            "q": "Model deployment memakai",
            "options": [
              "regularisasi",
              "codegen/export",
              "sesuai data",
              "komputasi"
            ],
            "a": 1,
            "explain": "Deploy model."
          },
          {
            "type": "mc",
            "q": "Mengukur metrik penting",
            "options": [
              "tidak",
              "A\\b",
              "ya",
              "save"
            ],
            "a": 2,
            "explain": "Metrik evaluasi."
          },
          {
            "type": "mc",
            "q": "Reproducibility penting",
            "options": [
              "tidak",
              "mod()",
              "upper",
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
              "loop",
              "%"
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
              "memeriksa kondisi",
              "rgb2gray",
              "fungsi"
            ],
            "a": 0,
            "explain": "Konvergensi perlu kriteria."
          },
          {
            "type": "mc",
            "q": "Kondisi matriks memengaruhi",
            "options": [
              "efisien",
              "stabilitas",
              "kriteria berhenti",
              "pemrosesan besar"
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
              "*",
              "edge"
            ],
            "a": 1,
            "explain": "Presisi float."
          },
          {
            "type": "mc",
            "q": "Memilih solver tepat",
            "options": [
              "tidak",
              "event UI",
              "state test",
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
              "database toolbox",
              "perlu diperhatikan",
              "model sistem"
            ],
            "a": 0,
            "explain": "ode45 umum."
          },
          {
            "type": "mc",
            "q": "ode15s untuk",
            "options": [
              "histogram()",
              "ODE stiff",
              "di loop",
              "struktur kode"
            ],
            "a": 1,
            "explain": "ode15s stiff."
          },
          {
            "type": "mc",
            "q": "Interpolasi memilih metode",
            "options": [
              "sesuai data",
              "max()",
              "C{1}",
              "readmatrix/readtable"
            ],
            "a": 0,
            "explain": "Metode interpolasi."
          },
          {
            "type": "mc",
            "q": "Mengukur error penting",
            "options": [
              "tidak",
              "1",
              "Inf",
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
              "conv",
              "max()"
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
              "1",
              "Inf"
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
              "fungsi",
              "data besar",
              "matlab.unittest.TestCase",
              "eig(A)"
            ],
            "a": 1,
            "explain": "Tall array data besar."
          },
          {
            "type": "mc",
            "q": "Datastore membaca",
            "options": [
              "filter",
              "kondisi",
              "bertahap",
              "det(A)"
            ],
            "a": 2,
            "explain": "Datastore bertahap."
          },
          {
            "type": "mc",
            "q": "MapReduce membantu",
            "options": [
              "scatter()",
              "switch/case/otherwise",
              "pemrosesan besar",
              "argumen variabel"
            ],
            "a": 2,
            "explain": "MapReduce."
          },
          {
            "type": "mc",
            "q": "Sparse matrix menghemat",
            "options": [
              "memori",
              "webread/webwrite",
              "kompatibel",
              "gpuArray"
            ],
            "a": 0,
            "explain": "Sparse hemat."
          },
          {
            "type": "mc",
            "q": "Memori terbatas perlu",
            "options": [
              "breakpoint programatik",
              "imshow",
              "strategi",
              "matriks"
            ],
            "a": 2,
            "explain": "Kelola memori."
          },
          {
            "type": "mc",
            "q": "Paralel memakai",
            "options": [
              "Inf",
              "parfor",
              "mask logis",
              "zeros()"
            ],
            "a": 1,
            "explain": "parfor paralel."
          },
          {
            "type": "mc",
            "q": "GPU mempercepat",
            "options": [
              "A(1,2)",
              "rand()",
              "sqrt()",
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
              "ode45",
              "py."
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
              "perlu diperhatikan",
              "model sistem"
            ],
            "a": 0,
            "explain": "Bersihkan data."
          },
          {
            "type": "mc",
            "q": "Dokumentasi pipeline penting",
            "options": [
              "tidak",
              "var()",
              "{ }",
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
              "help",
              "function",
              "size(A)",
              "py."
            ],
            "a": 3,
            "explain": "Interop Python via py."
          },
          {
            "type": "mc",
            "q": "Memanggil C memakai",
            "options": [
              "sqrt()",
              "mex",
              "grid on",
              "end"
            ],
            "a": 1,
            "explain": "MEX untuk C."
          },
          {
            "type": "mc",
            "q": "Java interop memakai",
            "options": [
              "java object",
              "svd(A)",
              "var()",
              "{ }"
            ],
            "a": 0,
            "explain": "Java interop."
          },
          {
            "type": "mc",
            "q": "REST API memakai",
            "options": [
              "matriks",
              "analisis spektral",
              "unittest/matlab.unittest",
              "webread/webwrite"
            ],
            "a": 3,
            "explain": "webread API."
          },
          {
            "type": "mc",
            "q": "Database memakai",
            "options": [
              "replace/strrep",
              "database toolbox",
              "debugging",
              "imread"
            ],
            "a": 1,
            "explain": "Database toolbox."
          },
          {
            "type": "mc",
            "q": "Compiler men-deploy",
            "options": [
              "fprintf",
              "polyfit",
              "regularisasi",
              "aplikasi standalone"
            ],
            "a": 3,
            "explain": "MATLAB Compiler."
          },
          {
            "type": "mc",
            "q": "Interop menambah",
            "options": [
              "var()",
              "kompleksitas",
              "keberadaan field",
              "fgetl/fgets"
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
              ".mat",
              "mod()"
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
              "hold on",
              "while kondisi"
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
              "edge",
              "min()"
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
              "laporan",
              "kumpulan perintah .m",
              "index elemen"
            ],
            "a": 0,
            "explain": "Coder ke C/C++."
          },
          {
            "type": "mc",
            "q": "GPU Coder untuk",
            "options": [
              "kode CUDA",
              "tabulate",
              "struct()",
              "save"
            ],
            "a": 0,
            "explain": "GPU Coder."
          },
          {
            "type": "mc",
            "q": "Simulink Coder untuk",
            "options": [
              "data tabular kolom",
              "kode dan narasi",
              "elemen lebih dari 5",
              "model ke kode"
            ],
            "a": 3,
            "explain": "Simulink Coder."
          },
          {
            "type": "mc",
            "q": "Standalone app memakai",
            "options": [
              "kompleksitas",
              "logika state",
              "MATLAB Compiler",
              "Add-On Explorer"
            ],
            "a": 2,
            "explain": "Compiler standalone."
          },
          {
            "type": "mc",
            "q": "Deploy ke cloud memakai",
            "options": [
              "dengan hardware nyata",
              "nama = nilai",
              "MATLAB Production Server",
              "function out = nama(in)"
            ],
            "a": 2,
            "explain": "Production Server."
          },
          {
            "type": "mc",
            "q": "Codegen butuh kode",
            "options": [
              "kompatibel",
              "kondisi array",
              "size(A)",
              "round()/floor()/ceil()"
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
              "diff/gradient",
              "efisien"
            ],
            "a": 1,
            "explain": "Uji hasil."
          },
          {
            "type": "mc",
            "q": "Dokumentasi deployment",
            "options": [
              "tidak",
              "strtrim",
              "penting",
              "memeriksa kondisi"
            ],
            "a": 2,
            "explain": "Dokumentasi."
          },
          {
            "type": "mc",
            "q": "Lisensi deployment",
            "options": [
              "perlu diperhatikan",
              "cast/int32/str2double",
              "fliplr/flipud",
              "numel(A)"
            ],
            "a": 0,
            "explain": "Lisensi penting."
          },
          {
            "type": "mc",
            "q": "Monitoring produksi penting",
            "options": [
              "tidak",
              "fopen",
              "ya",
              "fzero"
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
              "stabilitas",
              "performa",
              "memori",
              "database toolbox"
            ],
            "a": 1,
            "explain": "Preallocation menghindari resize."
          },
          {
            "type": "mc",
            "q": "Vectorization mempercepat",
            "options": [
              "./",
              "plot(x,y)",
              "histogram()",
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
              "cakupan test",
              "rank(A)",
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
              "performa",
              "solver numerik",
              "membuat GUI"
            ],
            "a": 0,
            "explain": "profile menemukan bottleneck."
          },
          {
            "type": "mc",
            "q": "Fungsi built-in teroptimasi",
            "options": [
              "dipakai bila ada",
              "membuat aplikasi GUI",
              "pemodelan sistem dinamis",
              "komputasi numerik dan matriks"
            ],
            "a": 0,
            "explain": "Gunakan built-in."
          },
          {
            "type": "mc",
            "q": "Mengurangi copy data",
            "options": [
              "tidak",
              "load",
              "penting",
              "diff/gradient"
            ],
            "a": 2,
            "explain": "Copy mahal."
          },
          {
            "type": "mc",
            "q": "Sparse matrix untuk",
            "options": [
              "data jarang",
              "disp()/fprintf",
              "kondisi array",
              "size(A)"
            ],
            "a": 0,
            "explain": "Sparse hemat memori."
          },
          {
            "type": "mc",
            "q": "Mengukur sebelum optimasi",
            "options": [
              "tidak",
              "imresize",
              "wajib",
              "event UI"
            ],
            "a": 2,
            "explain": "Ukur dulu."
          },
          {
            "type": "mc",
            "q": "Paralel memakai",
            "options": [
              "parfor",
              "operasi fungsi",
              "codegen/export",
              "bertahap"
            ],
            "a": 0,
            "explain": "parfor paralel."
          },
          {
            "type": "mc",
            "q": "GPU memakai",
            "options": [
              "A(1,:)",
              "abs()",
              "gpuArray",
              "hold on"
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
              "menyimpan fungsi di variabel",
              "pemodelan sistem dinamis",
              "model ke kode",
              "Perkalian elemen demi elemen"
            ],
            "a": 1,
            "explain": "Simulink model dinamik."
          },
          {
            "type": "mc",
            "q": "Blok diagram mewakili",
            "options": [
              "zeros()",
              "model sistem",
              "exp()",
              "legend()"
            ],
            "a": 1,
            "explain": "Blok menyusun model."
          },
          {
            "type": "mc",
            "q": "Simulasi memakai",
            "options": [
              "grid on",
              "solver numerik",
              "di signature",
              "strcmp"
            ],
            "a": 1,
            "explain": "Solver menyelesaikan."
          },
          {
            "type": "mc",
            "q": "Stateflow untuk",
            "options": [
              "logika state",
              "kode CUDA",
              "data jarang",
              "fungsi khusus"
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
              "membuat aplikasi GUI",
              "deploy ke hardware",
              "pemodelan sistem dinamis",
              "komputasi numerik dan matriks"
            ],
            "a": 1,
            "explain": "Code generation deploy."
          },
          {
            "type": "mc",
            "q": "Hardware-in-the-loop menguji",
            "options": [
              "data tabular kolom",
              "kode dan narasi",
              "elemen lebih dari 5",
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
              "conv",
              "max()"
            ],
            "a": 0,
            "explain": "Dokumentasi model."
          },
          {
            "type": "mc",
            "q": "Versioning model penting",
            "options": [
              "tidak",
              "std()",
              "field",
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
              "+",
              "abs()"
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
              "mask logis",
              "zeros()",
              "exp()",
              "fungsi khusus"
            ],
            "a": 3,
            "explain": "Toolbox memperluas."
          },
          {
            "type": "mc",
            "q": "Deep Learning Toolbox untuk",
            "options": [
              "breakpoint programatik",
              "imshow",
              "matriks",
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
              "di loop",
              "struktur kode",
              "replace/strrep"
            ],
            "a": 0,
            "explain": "Signal toolbox."
          },
          {
            "type": "mc",
            "q": "Image Processing Toolbox untuk",
            "options": [
              "pengolahan citra",
              "readmatrix/readtable",
              "fprintf",
              "polyfit"
            ],
            "a": 0,
            "explain": "Image toolbox."
          },
          {
            "type": "mc",
            "q": "Statistics Toolbox untuk",
            "options": [
              "filter",
              "statistik",
              "kondisi",
              "det(A)"
            ],
            "a": 1,
            "explain": "Stats toolbox."
          },
          {
            "type": "mc",
            "q": "App Designer untuk",
            "options": [
              "MATLAB Compiler",
              "membuat GUI",
              "wajib",
              "analisis sinyal"
            ],
            "a": 1,
            "explain": "App Designer GUI."
          },
          {
            "type": "mc",
            "q": "Mengelola add-on via",
            "options": [
              "klasifikasi",
              "data besar",
              "kode CUDA",
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
              "A(1,2)",
              "rand()"
            ],
            "a": 1,
            "explain": "Konsistensi versi."
          },
          {
            "type": "mc",
            "q": "Dokumentasi toolbox penting",
            "options": [
              "tidak",
              "[]",
              "+",
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
              "fft",
              "std()"
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
              "A'",
              ".^",
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
              "1",
              "Inf",
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
              "callback",
              "imfilter",
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
              "./",
              "ya",
              "A\\b"
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
              "fopen",
              "fzero"
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
              "di signature",
              "strcmp"
            ],
            "a": 1,
            "explain": "Version control."
          },
          {
            "type": "mc",
            "q": "Menangani error eksplisit",
            "options": [
              "tidak",
              "data jarang",
              "fungsi khusus",
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
              "inv(A)",
              "mean()"
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
              "kondisi array",
              "size(A)"
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
              "diff/gradient",
              "efisien"
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
              "elemen lebih dari 5",
              "berkas .m bernama sama",
              "akses variabel induk"
            ],
            "a": 0,
            "explain": "Live Script naratif."
          },
          {
            "type": "mc",
            "q": "Publishing menghasilkan",
            "options": [
              "operasi fungsi",
              "codegen/export",
              "laporan",
              "bertahap"
            ],
            "a": 2,
            "explain": "Publish laporan."
          },
          {
            "type": "mc",
            "q": "Perintah MATLAB untuk menampilkan dokumentasi komentar fungsi langsung di Command Window adalah",
            "options": [
              "help",
              "kompatibel",
              "gpuArray",
              ".m"
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
              "std()",
              "field"
            ],
            "a": 0,
            "explain": "Git untuk kode."
          },
          {
            "type": "mc",
            "q": "Naming konsisten penting",
            "options": [
              "tidak",
              "ode45",
              "ya",
              "py."
            ],
            "a": 2,
            "explain": "Konsistensi nama."
          },
          {
            "type": "mc",
            "q": "Testing terintegrasi",
            "options": [
              "tidak",
              "==/</>",
              "\"teks\"",
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
              "fopen",
              "fzero",
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
              "bukan angka",
              "elemen terakhir"
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
              "plot(x,y)",
              "histogram()"
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
              "stabilitas",
              "memori"
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
