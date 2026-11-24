/* CodeDuo — blok konten: topik "Python" (dipisah dari Blok Web).
 * 1 topik (python) × 31 pelajaran (10 Dasar, 10 Menengah, 11 Advance). Total 305 soal.
 * Engine di content.js (barrel) & app.js. Format tipe soal: mc | fill | code | preview | arrange.
 * ESM murni: dipakai Vite (browser) & Node (test).
 */
'use strict';

const CONTENT_PYTHON = [
  {
    "id": "python",
    "name": "Python",
    "icon": "🐍",
    "color": "#3776ab",
    "desc": "Bahasa serbaguna: otomasi & data",
    "lessons": [
      {
        "id": "python-1",
        "level": "Dasar",
        "title": "Pengenalan Python",
        "exercises": [
          {
            "type": "mc",
            "q": "Python dibuat oleh",
            "options": [
              "Brendan Eich",
              "Guido van Rossum",
              "Yukihiro Matsumoto",
              "James Gosling"
            ],
            "a": 1,
            "explain": "Guido menciptakan Python."
          },
          {
            "type": "mc",
            "q": "Python dikenal dengan sintaks",
            "options": [
              "mudah dibaca",
              "penuh simbol",
              ".strip()",
              "SQL"
            ],
            "a": 0,
            "explain": "Python menekankan keterbacaan."
          },
          {
            "type": "mc",
            "q": "Berkas Python berekstensi",
            "options": [
              ".py",
              ".pyt",
              ".python",
              ".pn"
            ],
            "a": 0,
            "explain": "Berkas Python .py."
          },
          {
            "type": "mc",
            "q": "Menjalankan berkas Python memakai",
            "options": [
              "python file.py",
              "node file.py",
              "php file.py",
              "python / ipython"
            ],
            "a": 0,
            "explain": "Perintah python menjalankan."
          },
          {
            "type": "mc",
            "q": "REPL Python dibuka dengan",
            "options": [
              "irb",
              "node",
              "python file.py",
              "python / ipython"
            ],
            "a": 3,
            "explain": "Python interaktif menggunakann python/ipython."
          },
          {
            "type": "mc",
            "q": "Python adalah bahasa",
            "options": [
              "compiled statis",
              "& | ^ ~",
              "interpreted dan dinamis",
              "argumen posisional variabel"
            ],
            "a": 2,
            "explain": "Python diinterpretasi, bertipe dinamis."
          },
          {
            "type": "mc",
            "q": "Manajer package Python adalah",
            "options": [
              "npm",
              "composer",
              "pip",
              "gem"
            ],
            "a": 2,
            "explain": "pip mengelola package."
          },
          {
            "type": "mc",
            "q": "Virtual environment dibuat dengan",
            "options": [
              "python venv new",
              "pip venv",
              "python -m venv",
              "nama = nilai"
            ],
            "a": 2,
            "explain": "venv membuat environment."
          },
          {
            "type": "mc",
            "q": "Komentar satu baris memakai",
            "options": [
              "//",
              "#",
              "--",
              "is"
            ],
            "a": 1,
            "explain": "Python memakai #."
          },
          {
            "type": "mc",
            "q": "Python banyak dipakai untuk",
            "options": [
              "otomasi, web, dan data science",
              "a if cond else b",
              "mengubah variabel luar",
              "beberapa coroutine paralel"
            ],
            "a": 0,
            "explain": "Python serbaguna."
          }
        ]
      },
      {
        "id": "python-2",
        "level": "Dasar",
        "title": "Variabel & Tipe",
        "exercises": [
          {
            "type": "mc",
            "q": "Deklarasi variabel cukup",
            "options": [
              "let nama",
              "var nama",
              "nama = nilai",
              "int nama"
            ],
            "a": 2,
            "explain": "Python tanpa kata kunci deklarasi."
          },
          {
            "type": "mc",
            "q": "Tipe teks adalah",
            "options": [
              "String",
              "text",
              "char",
              "str"
            ],
            "a": 3,
            "explain": "Python memakai str."
          },
          {
            "type": "mc",
            "q": "Tipe bilangan bulat adalah",
            "options": [
              "int",
              "Integer",
              "long",
              "number"
            ],
            "a": 0,
            "explain": "Python memakai int."
          },
          {
            "type": "mc",
            "q": "Tipe desimal adalah",
            "options": [
              "double",
              "decimal only",
              "float",
              "real"
            ],
            "a": 2,
            "explain": "Python memakai float."
          },
          {
            "type": "mc",
            "q": "Tipe boolean adalah",
            "options": [
              "boolean",
              "bool",
              "bit",
              "flag"
            ],
            "a": 1,
            "explain": "Python memakai bool."
          },
          {
            "type": "mc",
            "q": "Nilai kosong adalah",
            "options": [
              "null",
              "None",
              "nil",
              "undefined"
            ],
            "a": 1,
            "explain": "Python memakai None."
          },
          {
            "type": "mc",
            "q": "Mengubah tipe memakai",
            "options": [
              "cast()",
              "input()",
              ".strip()",
              "int()/str()/float()"
            ],
            "a": 3,
            "explain": "Python memakai konversi eksplisit."
          },
          {
            "type": "mc",
            "q": "Type hint tersedia via",
            "options": [
              "anotasi tipe",
              "generator",
              ".strptime()",
              "konstruktor"
            ],
            "a": 0,
            "explain": "Python mendukung type hint."
          },
          {
            "type": "mc",
            "q": "Periksa tipe memakai",
            "options": [
              "type()/isinstance()",
              "typeof",
              "dokumentasi/alat",
              "Django/Flask/FastAPI"
            ],
            "a": 0,
            "explain": "type/isinstance memeriksa tipe."
          },
          {
            "type": "mc",
            "q": "String immutable",
            "options": [
              "tidak",
              "nilai",
              "ya",
              "bool"
            ],
            "a": 2,
            "explain": "String Python tidak berubah."
          }
        ]
      },
      {
        "id": "python-3",
        "level": "Dasar",
        "title": "Input & Output",
        "exercises": [
          {
            "type": "mc",
            "q": "Mencetak output memakai",
            "options": [
              "puts",
              "echo",
              "print()",
              "'a'"
            ],
            "a": 2,
            "explain": "Python memakai print()."
          },
          {
            "type": "mc",
            "q": "Membaca input memakai",
            "options": [
              "input()",
              "gets()",
              "scan()",
              "remove()/pop()"
            ],
            "a": 0,
            "explain": "input() membaca input."
          },
          {
            "type": "mc",
            "q": "input() mengembalikan",
            "options": [
              "int",
              ".strftime()",
              "class Nama:",
              "string"
            ],
            "a": 3,
            "explain": "input() selalu string."
          },
          {
            "type": "mc",
            "q": "Memformat output memakai",
            "options": [
              "f-string/format",
              "and/or/not",
              ".upper()",
              "s[1:3]"
            ],
            "a": 0,
            "explain": "Python memakai f-string."
          },
          {
            "type": "mc",
            "q": "Mengonversi input ke int memakai",
            "options": [
              "input().int",
              "sinkronisasi",
              "int(input())",
              "eksplorasi"
            ],
            "a": 2,
            "explain": "Konversi eksplisit."
          },
          {
            "type": "mc",
            "q": "Menulis ke stderr memakai",
            "options": [
              "sys.stderr",
              "re.sub",
              "generator",
              ".strptime()"
            ],
            "a": 0,
            "explain": "sys.stderr untuk error."
          },
          {
            "type": "mc",
            "q": "print default menambah",
            "options": [
              "newline",
              "performa",
              "perawatan",
              "poetry/uv"
            ],
            "a": 0,
            "explain": "print menambah baris baru."
          },
          {
            "type": "mc",
            "q": "Mengatur separator print memakai",
            "options": [
              "sep=",
              "re.findall",
              "memori",
              "instance"
            ],
            "a": 0,
            "explain": "sep mengatur pemisah."
          },
          {
            "type": "mc",
            "q": "Mengatur akhir print memakai",
            "options": [
              ".upper()",
              "s[1:3]",
              "end=",
              "{'a': 1}"
            ],
            "a": 2,
            "explain": "end mengatur akhir."
          },
          {
            "type": "mc",
            "q": "Keluar program memakai",
            "options": [
              "build",
              "safe_load",
              "perhitungan mahal",
              "sys.exit()"
            ],
            "a": 3,
            "explain": "sys.exit mengakhiri."
          }
        ]
      },
      {
        "id": "python-4",
        "level": "Dasar",
        "title": "Operator",
        "exercises": [
          {
            "type": "mc",
            "q": "Pembagian bulat memakai",
            "options": [
              "/",
              "%",
              "re",
              "//"
            ],
            "a": 3,
            "explain": "Python memakai //."
          },
          {
            "type": "mc",
            "q": "Modulo memakai",
            "options": [
              "//",
              "mod",
              "is",
              "%"
            ],
            "a": 3,
            "explain": "Python memakai %."
          },
          {
            "type": "mc",
            "q": "Pangkat memakai",
            "options": [
              "^",
              "**",
              "pow only",
              "@nama"
            ],
            "a": 1,
            "explain": "Python memakai **."
          },
          {
            "type": "mc",
            "q": "Perbandingan memakai",
            "options": [
              "==/!=/</>",
              "===",
              "wajib",
              "skalabilitas"
            ],
            "a": 0,
            "explain": "Python memakai ==."
          },
          {
            "type": "mc",
            "q": "Operator logika memakai",
            "options": [
              "and/or/not",
              "&&/||/!",
              "(?P<name>...)",
              "kombinasi/permutasi"
            ],
            "a": 0,
            "explain": "Python memakai and/or/not."
          },
          {
            "type": "mc",
            "q": "Membership memakai",
            "options": [
              "contains",
              "str",
              "**",
              "in"
            ],
            "a": 3,
            "explain": "Python memakai in."
          },
          {
            "type": "mc",
            "q": "Identity memakai",
            "options": [
              "===",
              "is",
              "bool",
              "end="
            ],
            "a": 1,
            "explain": "is membandingkan identitas."
          },
          {
            "type": "mc",
            "q": "Bitwise memakai",
            "options": [
              "& | ^ ~",
              "if __name__ == '__main__'",
              "tidak ada exception",
              "Membentuk list dari iterable dengan ekspresi ringkas"
            ],
            "a": 0,
            "explain": "Python mendukung bitwise."
          },
          {
            "type": "mc",
            "q": "Assignment majemuk memakai",
            "options": [
              "reproduksibilitas",
              "validasi path",
              "+=/-=/...",
              "akses data"
            ],
            "a": 2,
            "explain": "Python mendukung +=."
          },
          {
            "type": "mc",
            "q": "Walrus operator memakai",
            "options": [
              "->",
              ":=",
              "=>",
              "lazy"
            ],
            "a": 1,
            "explain": "Python 3.8+ memakai :=."
          }
        ]
      },
      {
        "id": "python-5",
        "level": "Dasar",
        "title": "String",
        "exercises": [
          {
            "type": "mc",
            "q": "Interpolasi modern memakai",
            "options": [
              "dependency",
              "decorator factory",
              "kombinasi cartesian",
              "f-string"
            ],
            "a": 3,
            "explain": "Python memakai f\"...\"."
          },
          {
            "type": "mc",
            "q": "Menggabungkan string memakai",
            "options": [
              "&&",
              "concat",
              "+",
              "in"
            ],
            "a": 2,
            "explain": "Operator + menggabungkan."
          },
          {
            "type": "mc",
            "q": "Mengubah huruf besar memakai",
            "options": [
              ".upper",
              ".big()",
              "pembersihan",
              ".upper()"
            ],
            "a": 3,
            "explain": "upper() menaikkan huruf."
          },
          {
            "type": "mc",
            "q": "Memotong spasi memakai",
            "options": [
              ".trim()",
              ".cut()",
              ".strip()",
              "def"
            ],
            "a": 2,
            "explain": "strip memangkas."
          },
          {
            "type": "mc",
            "q": "Mengganti memakai",
            "options": [
              ".replace()",
              ".gsub()",
              ".swap()",
              "newline"
            ],
            "a": 0,
            "explain": "replace mengganti."
          },
          {
            "type": "mc",
            "q": "Membagi memakai",
            "options": [
              ".explode()",
              ".split()",
              ".divide()",
              "exception"
            ],
            "a": 1,
            "explain": "split memecah."
          },
          {
            "type": "mc",
            "q": "Menggabungkan list string memakai",
            "options": [
              ".concat()",
              "len()",
              "list[1:3]",
              "\"\".join(list)"
            ],
            "a": 3,
            "explain": "join menggabungkan."
          },
          {
            "type": "mc",
            "q": "Panjang string memakai",
            "options": [
              ".length",
              "len()",
              ".size",
              "RCE"
            ],
            "a": 1,
            "explain": "len() memberi panjang."
          },
          {
            "type": "mc",
            "q": "String indexing memakai",
            "options": [
              "s.at(0)",
              "pengujian",
              "s[0]",
              "coroutine"
            ],
            "a": 2,
            "explain": "Indexing dengan []."
          },
          {
            "type": "mc",
            "q": "Slicing memakai",
            "options": [
              "s.sub(1,3)",
              "re.sub",
              "s[1:3]",
              "generator"
            ],
            "a": 2,
            "explain": "Slicing memakai [start:end]."
          }
        ]
      },
      {
        "id": "python-6",
        "level": "Dasar",
        "title": "List & Tuple",
        "exercises": [
          {
            "type": "mc",
            "q": "List dibuat memakai",
            "options": [
              "(1,2,3)",
              "[1,2,3]",
              "{1,2,3}",
              "sebagian argumen"
            ],
            "a": 1,
            "explain": "List memakai []."
          },
          {
            "type": "mc",
            "q": "List mutable",
            "options": [
              "tidak",
              "ya",
              "pip",
              "//"
            ],
            "a": 1,
            "explain": "List dapat diubah."
          },
          {
            "type": "mc",
            "q": "Tuple dibuat memakai",
            "options": [
              "(1,2,3)",
              "[1,2,3]",
              "{1,2,3}",
              "{k:v for ...}"
            ],
            "a": 0,
            "explain": "Tuple memakai ()."
          },
          {
            "type": "mc",
            "q": "Tuple immutable",
            "options": [
              "tidak",
              "build",
              "ya",
              "#"
            ],
            "a": 2,
            "explain": "Tuple tidak berubah."
          },
          {
            "type": "mc",
            "q": "Menambah list memakai",
            "options": [
              "push()",
              ".add()",
              "resource otomatis",
              "append()"
            ],
            "a": 3,
            "explain": "List memakai append."
          },
          {
            "type": "mc",
            "q": "Mengakses list memakai",
            "options": [
              "list.get(0)",
              "input()",
              "list[0]",
              "end="
            ],
            "a": 2,
            "explain": "List diakses dengan []."
          },
          {
            "type": "mc",
            "q": "Panjang list memakai",
            "options": [
              ".length",
              "len()",
              ".size",
              "generator"
            ],
            "a": 1,
            "explain": "len() memberi panjang."
          },
          {
            "type": "mc",
            "q": "Slicing memakai",
            "options": [
              "list.sub",
              "eksplorasi",
              "list[1:3]",
              "black/ruff format"
            ],
            "a": 2,
            "explain": "Slicing list."
          },
          {
            "type": "mc",
            "q": "Menghapus elemen memakai",
            "options": [
              "delete only",
              "coroutine",
              "sinkronisasi",
              "remove()/pop()"
            ],
            "a": 3,
            "explain": "remove/pop menghapus."
          },
          {
            "type": "mc",
            "q": "List comprehension memakai",
            "options": [
              "context manager dari generator",
              "[x for x in ...]",
              "URL ke handler",
              "otomasi, web, dan data science"
            ],
            "a": 1,
            "explain": "Python menyediakan comprehension."
          }
        ]
      },
      {
        "id": "python-7",
        "level": "Dasar",
        "title": "Dict & Set",
        "exercises": [
          {
            "type": "mc",
            "q": "Dict dibuat memakai",
            "options": [
              "{'a': 1}",
              "[a:1]",
              "(a:1)",
              "iterable"
            ],
            "a": 0,
            "explain": "Dict memakai {} dengan key-value."
          },
          {
            "type": "mc",
            "q": "Mengakses dict memakai",
            "options": [
              "d[k] always",
              "d['k'] / d.get('k')",
              "boilerplate",
              "request"
            ],
            "a": 1,
            "explain": "Dict diakses dengan get/[]."
          },
          {
            "type": "mc",
            "q": "Menambah dict memakai",
            "options": [
              "d.add(k,v)",
              "d['k'] = v",
              "objek iterable",
              "return"
            ],
            "a": 1,
            "explain": "Assignment menambah key."
          },
          {
            "type": "mc",
            "q": "Set dibuat memakai",
            "options": [
              "[1,2,3]",
              "(1,2,3)",
              "black/ruff",
              "{1,2,3}"
            ],
            "a": 3,
            "explain": "Set memakai {}."
          },
          {
            "type": "mc",
            "q": "Set menghapus",
            "options": [
              "string",
              "duplikat",
              "sys.exit()",
              ".replace()"
            ],
            "a": 1,
            "explain": "Set unik."
          },
          {
            "type": "mc",
            "q": "Iterasi dict memakai",
            "options": [
              "Menandai struktur blok kode",
              "nama = nilai",
              "for k in d",
              "menyebut nama parameter"
            ],
            "a": 2,
            "explain": "Iterasi memberi key."
          },
          {
            "type": "mc",
            "q": "items() pada dict memberi",
            "options": [
              "dokumentasi/alat",
              "Django/Flask/FastAPI",
              "pasangan key-value",
              "int()/str()/float()"
            ],
            "a": 2,
            "explain": "items mengembalikan pasangan."
          },
          {
            "type": "mc",
            "q": "Dict comprehension memakai",
            "options": [
              "memori",
              "{k:v for ...}",
              "selisih waktu",
              "instance"
            ],
            "a": 1,
            "explain": "Dict comprehension."
          },
          {
            "type": "mc",
            "q": "Operasi set memakai",
            "options": [
              "for k in d",
              "| & -",
              "from mod import f",
              "{x for x in ...}"
            ],
            "a": 1,
            "explain": "Operasi himpunan."
          },
          {
            "type": "mc",
            "q": "Key dict harus",
            "options": [
              "datetime.now()",
              "pencatatan",
              "self/cls",
              "hashable"
            ],
            "a": 3,
            "explain": "Key harus hashable."
          }
        ]
      },
      {
        "id": "python-8",
        "level": "Dasar",
        "title": "Kontrol Alur",
        "exercises": [
          {
            "type": "mc",
            "q": "Percabangan memakai",
            "options": [
              "if/elseif",
              "switch",
              "ruff/flake8",
              "if/elif/else"
            ],
            "a": 3,
            "explain": "Python memakai elif."
          },
          {
            "type": "mc",
            "q": "Indentasi berfungsi sebagai",
            "options": [
              "urutan angka",
              "dependency",
              "penanda blok",
              "decorator factory"
            ],
            "a": 2,
            "explain": "Python memakai indentasi."
          },
          {
            "type": "mc",
            "q": "Perulangan for mengiterasi",
            "options": [
              "konstanta",
              "float",
              "objek iterable",
              "print()"
            ],
            "a": 2,
            "explain": "for mengiterasi iterable."
          },
          {
            "type": "mc",
            "q": "range() menghasilkan",
            "options": [
              "berurutan",
              "urutan angka",
              "pembersihan",
              "re.search/match"
            ],
            "a": 1,
            "explain": "range membuat urutan."
          },
          {
            "type": "mc",
            "q": "while mengulang selama",
            "options": [
              "getter",
              "kondisi benar",
              "exception",
              "unittest"
            ],
            "a": 1,
            "explain": "while bergantung kondisi."
          },
          {
            "type": "mc",
            "q": "break/continue berlaku",
            "options": [
              "int",
              "newline",
              "di loop",
              "==/!=/</>"
            ],
            "a": 2,
            "explain": "Mengatur loop."
          },
          {
            "type": "mc",
            "q": "enumerate memberi",
            "options": [
              "index dan nilai",
              "urutan tak terbatas",
              "GIL untuk CPU-bound",
              "interpreted dan dinamis"
            ],
            "a": 0,
            "explain": "enumerate pasangan index-nilai."
          },
          {
            "type": "mc",
            "q": "zip menggabungkan",
            "options": [
              "dua iterable",
              "f-string",
              "len()",
              "list[1:3]"
            ],
            "a": 0,
            "explain": "zip memasangkan."
          },
          {
            "type": "mc",
            "q": "Ternary memakai",
            "options": [
              "a if cond else b",
              "argumen keyword variabel",
              "context manager dari generator",
              "URL ke handler"
            ],
            "a": 0,
            "explain": "Python memakai if-else ekspresi."
          },
          {
            "type": "mc",
            "q": "match (3.10+) memakai",
            "options": [
              "pattern matching",
              "komputasi numerik",
              "pengujian",
              "mypy/pyright"
            ],
            "a": 0,
            "explain": "Python mendukung match."
          }
        ]
      },
      {
        "id": "python-9",
        "level": "Dasar",
        "title": "Fungsi",
        "exercises": [
          {
            "type": "mc",
            "q": "Mendefinisikan fungsi memakai",
            "options": [
              "def nama():",
              "function nama()",
              "fun nama()",
              "pool eksekutor"
            ],
            "a": 0,
            "explain": "Python memakai def."
          },
          {
            "type": "mc",
            "q": "Nilai balik memakai",
            "options": [
              "yield only",
              "re.search/match",
              "lazy",
              "return"
            ],
            "a": 3,
            "explain": "return mengembalikan nilai."
          },
          {
            "type": "mc",
            "q": "Parameter default memakai",
            "options": [
              ":",
              "is",
              "=",
              "re"
            ],
            "a": 2,
            "explain": "Nilai default dengan =."
          },
          {
            "type": "mc",
            "q": "Keyword argument memungkinkan",
            "options": [
              "interpreted dan dinamis",
              "menyebut nama parameter",
              "| & -",
              "if __name__ == '__main__'"
            ],
            "a": 1,
            "explain": "Keyword argument memperjelas."
          },
          {
            "type": "mc",
            "q": "*args menampung",
            "options": [
              "fungsi yang membungkus fungsi lain",
              "argumen posisional variabel",
              "build dari sumber",
              "Mengisolasi dependency antarproyek"
            ],
            "a": 1,
            "explain": "*args variadik posisional."
          },
          {
            "type": "mc",
            "q": "**kwargs menampung",
            "options": [
              "Guido van Rossum",
              "for k in d",
              "argumen keyword variabel",
              "from mod import f"
            ],
            "a": 2,
            "explain": "**kwargs keyword variabel."
          },
          {
            "type": "mc",
            "q": "Lambda memakai",
            "options": [
              "kondisi benar",
              "lambda x: expr",
              "isolasi dependency",
              "logging/auth/caching"
            ],
            "a": 1,
            "explain": "Python memakai lambda."
          },
          {
            "type": "mc",
            "q": "Docstring memakai",
            "options": [
              "mypy/pyright",
              "coroutine",
              "triple quote",
              "sinkronisasi"
            ],
            "a": 2,
            "explain": "Docstring memakai \"\"\"."
          },
          {
            "type": "mc",
            "q": "Fungsi adalah first-class",
            "options": [
              "tidak",
              "lazy",
              "ya",
              "cls"
            ],
            "a": 2,
            "explain": "Fungsi dapat dipakai sebagai nilai."
          },
          {
            "type": "mc",
            "q": "Mutable default argument berisiko",
            "options": [
              "tidak",
              "def",
              "float",
              "ya"
            ],
            "a": 3,
            "explain": "Default mutable dibagi antar pemanggilan."
          }
        ]
      },
      {
        "id": "python-10",
        "level": "Dasar",
        "title": "Module & Package",
        "exercises": [
          {
            "type": "mc",
            "q": "Mengimpor module memakai",
            "options": [
              "import",
              "require",
              "use",
              "kondisi benar"
            ],
            "a": 0,
            "explain": "Python memakai import."
          },
          {
            "type": "mc",
            "q": "Mengimpor fungsi memakai",
            "options": [
              "from mod import f",
              "otomasi, web, dan data science",
              "a if cond else b",
              "mengubah variabel luar"
            ],
            "a": 0,
            "explain": "From-import memilih nama."
          },
          {
            "type": "mc",
            "q": "Membuat module berarti",
            "options": [
              "remove()/pop()",
              "membuat berkas .py",
              "{k:v for ...}",
              "di loop"
            ],
            "a": 1,
            "explain": "Module adalah berkas .py."
          },
          {
            "type": "mc",
            "q": "Package Python berisi",
            "options": [
              "metadata/build",
              "parameterized query",
              "performa",
              "__init__.py/folder"
            ],
            "a": 3,
            "explain": "Package folder dengan __init__."
          },
          {
            "type": "mc",
            "q": "Menjalankan script sebagai main memakai",
            "options": [
              "mengubah variabel luar",
              "if __name__ == '__main__'",
              "beberapa coroutine paralel",
              "Guido van Rossum"
            ],
            "a": 1,
            "explain": "Guard main mencegah eksekusi saat import."
          },
          {
            "type": "mc",
            "q": "pip install memasang",
            "options": [
              "sep=",
              "and/or/not",
              ".upper()",
              "package"
            ],
            "a": 3,
            "explain": "pip memasang package."
          },
          {
            "type": "mc",
            "q": "requirements.txt mencatat",
            "options": [
              "kombinasi cartesian",
              "suppress/teruskan",
              "re.sub",
              "dependency"
            ],
            "a": 3,
            "explain": "Requirements mencatat dependency."
          },
          {
            "type": "mc",
            "q": "VIRTUAL_ENV penting untuk",
            "options": [
              "TypeVar/Generic",
              "mudah dibaca",
              "input()",
              "isolasi dependency"
            ],
            "a": 3,
            "explain": "venv mengisolasi."
          },
          {
            "type": "mc",
            "q": "Module standar untuk sistem memakai",
            "options": [
              "pengujian",
              "mypy/pyright",
              "os/sys",
              "coroutine"
            ],
            "a": 2,
            "explain": "os/sys standard library."
          },
          {
            "type": "mc",
            "q": "Menghindari import melingkar",
            "options": [
              "tidak",
              "dependency",
              "decorator factory",
              "penting"
            ],
            "a": 3,
            "explain": "Import melingkar bermasalah."
          }
        ]
      },
      {
        "id": "python-11",
        "level": "Menengah",
        "title": "Decorator & Closure",
        "exercises": [
          {
            "type": "mc",
            "q": "Decorator adalah",
            "options": [
              "fungsi yang membungkus fungsi lain",
              "a if cond else b",
              "mengubah variabel luar",
              "beberapa coroutine paralel"
            ],
            "a": 0,
            "explain": "Decorator membungkus fungsi."
          },
          {
            "type": "mc",
            "q": "Decorator diterapkan memakai",
            "options": [
              "generator",
              ".strptime()",
              "@nama",
              "konstruktor"
            ],
            "a": 2,
            "explain": "Python memakai @."
          },
          {
            "type": "mc",
            "q": "functools.wraps menjaga",
            "options": [
              "eksplorasi",
              "black/ruff format",
              "metadata fungsi",
              "string"
            ],
            "a": 2,
            "explain": "wraps mempertahankan metadata."
          },
          {
            "type": "mc",
            "q": "Closure menangkap",
            "options": [
              "variabel lingkup",
              "logging/auth/caching",
              "sebagian argumen",
              "beberapa resource"
            ],
            "a": 0,
            "explain": "Closure menangkap variabel."
          },
          {
            "type": "mc",
            "q": "nonlocal dipakai untuk",
            "options": [
              "mengubah variabel luar",
              "argumen posisional variabel",
              "iterable beda panjang",
              "async dan validasi otomatis"
            ],
            "a": 0,
            "explain": "nonlocal mengubah variabel enclosing."
          },
          {
            "type": "mc",
            "q": "Decorator berparameter memerlukan",
            "options": [
              "decorator factory",
              "{k:v for ...}",
              "di loop",
              "triple quote"
            ],
            "a": 0,
            "explain": "Factory untuk argumen."
          },
          {
            "type": "mc",
            "q": "Decorator berguna untuk",
            "options": [
              "logging/auth/caching",
              "safe_load",
              "perhitungan mahal",
              "ketergantungan konkret"
            ],
            "a": 0,
            "explain": "Decorator untuk lintas-potong."
          },
          {
            "type": "mc",
            "q": "functools.lru_cache membantu",
            "options": [
              "and/or/not",
              ".upper()",
              "s[1:3]",
              "cache hasil"
            ],
            "a": 3,
            "explain": "lru_cache menyimpan hasil."
          },
          {
            "type": "mc",
            "q": "Decorator berlebihan dapat",
            "options": [
              "class Nama:",
              "resource otomatis",
              "menyulitkan debugging",
              "readline/iterasi"
            ],
            "a": 2,
            "explain": "Gunakan seperlunya."
          },
          {
            "type": "mc",
            "q": "Menulis decorator yang baik perlu",
            "options": [
              "test",
              "bool",
              "input()",
              "end="
            ],
            "a": 0,
            "explain": "Uji decorator."
          }
        ]
      },
      {
        "id": "python-12",
        "level": "Menengah",
        "title": "Itertools & Functools",
        "exercises": [
          {
            "type": "mc",
            "q": "itertools.chain menggabungkan",
            "options": [
              "iterable",
              "s[0]",
              "remove()/pop()",
              "{k:v for ...}"
            ],
            "a": 0,
            "explain": "chain menggabungkan."
          },
          {
            "type": "mc",
            "q": "itertools.groupby mengelompokkan",
            "options": [
              "metadata/build",
              "parameterized query",
              "performa",
              "berurutan"
            ],
            "a": 3,
            "explain": "groupby butuh data berurutan."
          },
          {
            "type": "mc",
            "q": "itertools.product menghasilkan",
            "options": [
              "kondisi benar",
              "kombinasi cartesian",
              "lambda x: expr",
              "isolasi dependency"
            ],
            "a": 1,
            "explain": "product cartesian."
          },
          {
            "type": "mc",
            "q": "itertools.islice memotong",
            "options": [
              "iterable",
              "mypy/pyright",
              "coroutine",
              "sinkronisasi"
            ],
            "a": 0,
            "explain": "islice memotong."
          },
          {
            "type": "mc",
            "q": "functools.partial membekukan",
            "options": [
              "sebagian argumen",
              "kombinasi cartesian",
              "suppress/teruskan",
              "re.sub"
            ],
            "a": 0,
            "explain": "partial membekukan argumen."
          },
          {
            "type": "mc",
            "q": "functools.reduce mengakumulasi",
            "options": [
              "nilai",
              "mudah dibaca",
              "bool",
              "input()"
            ],
            "a": 0,
            "explain": "reduce akumulasi."
          },
          {
            "type": "mc",
            "q": "functools.total_ordering mengisi",
            "options": [
              ".strftime()",
              "class Nama:",
              "operasi perbandingan",
              "resource otomatis"
            ],
            "a": 2,
            "explain": "total_ordering melengkapi."
          },
          {
            "type": "mc",
            "q": "itertools.count menghasilkan",
            "options": [
              "urutan tak terbatas",
              "GIL untuk CPU-bound",
              "interpreted dan dinamis",
              "| & -"
            ],
            "a": 0,
            "explain": "count tak terbatas."
          },
          {
            "type": "mc",
            "q": "itertools.zip_longest memadukan",
            "options": [
              "mengubah variabel luar",
              "beberapa coroutine paralel",
              "Guido van Rossum",
              "iterable beda panjang"
            ],
            "a": 3,
            "explain": "zip_longest."
          },
          {
            "type": "mc",
            "q": "Fungsi helper mengurangi",
            "options": [
              "list[1:3]",
              "pasangan key-value",
              "kondisi benar",
              "duplikasi"
            ],
            "a": 3,
            "explain": "DRY."
          }
        ]
      },
      {
        "id": "python-13",
        "level": "Menengah",
        "title": "Context Manager",
        "exercises": [
          {
            "type": "mc",
            "q": "with memakai",
            "options": [
              "int(input())",
              "\"\".join(list)",
              "context manager",
              "list[0]"
            ],
            "a": 2,
            "explain": "with menggunakan context manager."
          },
          {
            "type": "mc",
            "q": "__enter__/__exit__ mendefinisikan",
            "options": [
              "kombinasi/permutasi",
              "context manager",
              "acak aman",
              "method induk"
            ],
            "a": 1,
            "explain": "__enter__/__exit__ protokol."
          },
          {
            "type": "mc",
            "q": "contextlib.contextmanager membuat",
            "options": [
              "context manager dari generator",
              "menyebut nama parameter",
              "urutan tak terbatas",
              "GIL untuk CPU-bound"
            ],
            "a": 0,
            "explain": "contextmanager dekorator."
          },
          {
            "type": "mc",
            "q": "with menjamin",
            "options": [
              "debugging",
              "pembersihan",
              "utilitas path",
              "banyak kasus"
            ],
            "a": 1,
            "explain": "with menjamin cleanup."
          },
          {
            "type": "mc",
            "q": "Menangani exception di __exit__ memungkinkan",
            "options": [
              "skalabilitas",
              "Sphinx/MkDocs",
              "HTTP async",
              "suppress/teruskan"
            ],
            "a": 3,
            "explain": "__exit__ menangani exception."
          },
          {
            "type": "mc",
            "q": "with dapat menangani",
            "options": [
              "penanda blok",
              "def nama():",
              "__init__.py/folder",
              "beberapa resource"
            ],
            "a": 3,
            "explain": "Beberapa resource dengan with."
          },
          {
            "type": "mc",
            "q": "Nested with dapat",
            "options": [
              "structural typing",
              "disederhanakan",
              "ORM/admin",
              "type()/isinstance()"
            ],
            "a": 1,
            "explain": "Menggabungkan with."
          },
          {
            "type": "mc",
            "q": "Context manager berguna untuk",
            "options": [
              "lock/file/transaksi",
              "duplikasi",
              "async with",
              "datetime"
            ],
            "a": 0,
            "explain": "Lintas resource."
          },
          {
            "type": "mc",
            "q": "Menguji context manager penting",
            "options": [
              "ya",
              "tidak",
              "RCE",
              ".py"
            ],
            "a": 0,
            "explain": "Uji perilaku."
          },
          {
            "type": "mc",
            "q": "Async context manager memakai",
            "options": [
              "async with",
              "type()/isinstance()",
              "sys.stderr",
              "f-string"
            ],
            "a": 0,
            "explain": "Async dengan async with."
          }
        ]
      },
      {
        "id": "python-14",
        "level": "Menengah",
        "title": "Regular Expression",
        "exercises": [
          {
            "type": "mc",
            "q": "Module regex memakai",
            "options": [
              "re",
              ".py",
              "None",
              "is"
            ],
            "a": 0,
            "explain": "Python memakai re."
          },
          {
            "type": "mc",
            "q": "Mencari kecocokan memakai",
            "options": [
              "re.sub",
              "re.search/match",
              "generator",
              ".strptime()"
            ],
            "a": 1,
            "explain": "search/match mencari."
          },
          {
            "type": "mc",
            "q": "Mengganti memakai",
            "options": [
              "re.sub",
              "performa",
              "perawatan",
              "poetry/uv"
            ],
            "a": 0,
            "explain": "sub mengganti."
          },
          {
            "type": "mc",
            "q": "Menemukan semua memakai",
            "options": [
              "isolasi dependency",
              "logging/auth/caching",
              "sebagian argumen",
              "re.findall"
            ],
            "a": 3,
            "explain": "findall menemukan semua."
          },
          {
            "type": "mc",
            "q": "Compile pola memakai",
            "options": [
              "pytest",
              "build",
              "safe_load",
              "re.compile"
            ],
            "a": 3,
            "explain": "compile untuk reuse."
          },
          {
            "type": "mc",
            "q": "Raw string penting untuk regex",
            "options": [
              "ya",
              "tidak",
              "nilai",
              "bool"
            ],
            "a": 0,
            "explain": "r\"...\" menghindari escape."
          },
          {
            "type": "mc",
            "q": "Grup bernama memakai",
            "options": [
              ".strftime()",
              "class Nama:",
              "resource otomatis",
              "(?P<name>...)"
            ],
            "a": 3,
            "explain": "Named group memakai (?P<name>)."
          },
          {
            "type": "mc",
            "q": "Regex kompleks bisa lambat",
            "options": [
              "ya",
              "tidak",
              "sep=",
              "RCE"
            ],
            "a": 0,
            "explain": "Backtracking berat."
          },
          {
            "type": "mc",
            "q": "Modifier flags seperti IGNORECASE",
            "options": [
              "tidak",
              "wajib",
              "int",
              "ya"
            ],
            "a": 3,
            "explain": "re.IGNORECASE."
          },
          {
            "type": "mc",
            "q": "Menguji regex penting",
            "options": [
              "tidak",
              "ya",
              "bool",
              "end="
            ],
            "a": 1,
            "explain": "Uji pola."
          }
        ]
      },
      {
        "id": "python-15",
        "level": "Menengah",
        "title": "Comprehension & Generator",
        "exercises": [
          {
            "type": "mc",
            "q": "Ekspresi `[x * 2 for x in range(5)]` di Python menghasilkan struktur data bertipe",
            "options": [
              "request",
              "int",
              "ya",
              "list"
            ],
            "a": 3,
            "explain": "Comprehension membentuk list."
          },
          {
            "type": "mc",
            "q": "Generator expression memakai",
            "options": [
              "[]",
              "{}",
              "re",
              "()"
            ],
            "a": 3,
            "explain": "Generator memakai ()."
          },
          {
            "type": "mc",
            "q": "Generator bersifat",
            "options": [
              "eager",
              "async def",
              "lazy",
              "hati-hati"
            ],
            "a": 2,
            "explain": "Generator mengevaluasi lazy."
          },
          {
            "type": "mc",
            "q": "yield menghasilkan",
            "options": [
              "return",
              "package",
              "generator",
              "variabel lingkup"
            ],
            "a": 2,
            "explain": "yield membuat generator."
          },
          {
            "type": "mc",
            "q": "Generator menghemat",
            "options": [
              "duplikat",
              "memori",
              "urutan angka",
              "dependency"
            ],
            "a": 1,
            "explain": "Lazy hemat memori."
          },
          {
            "type": "mc",
            "q": "Dict comprehension memakai",
            "options": [
              "json.dump",
              "{k:v for ...}",
              "coverage.py",
              "komputasi numerik"
            ],
            "a": 1,
            "explain": "Dict comprehension."
          },
          {
            "type": "mc",
            "q": "Set comprehension memakai",
            "options": [
              "otomasi, web, dan data science",
              "a if cond else b",
              "mengubah variabel luar",
              "{x for x in ...}"
            ],
            "a": 3,
            "explain": "Set comprehension."
          },
          {
            "type": "mc",
            "q": "Comprehension bersarang bisa",
            "options": [
              "id unik",
              "getter",
              "kurang terbaca",
              "exception"
            ],
            "a": 2,
            "explain": "Nested comprehension sulit dibaca."
          },
          {
            "type": "mc",
            "q": "itertools membantu",
            "options": [
              "datetime.now()",
              "pencatatan",
              "kombinasi/permutasi",
              "self/cls"
            ],
            "a": 2,
            "explain": "itertools berguna."
          },
          {
            "type": "mc",
            "q": "Mengonsumsi generator sekali saja",
            "options": [
              "tidak",
              "def",
              "ya",
              "float"
            ],
            "a": 2,
            "explain": "Generator sekali pakai."
          }
        ]
      },
      {
        "id": "python-16",
        "level": "Menengah",
        "title": "Datetime & Utilities",
        "exercises": [
          {
            "type": "mc",
            "q": "Module waktu memakai",
            "options": [
              "pengujian",
              "mypy/pyright",
              "datetime",
              "coroutine"
            ],
            "a": 2,
            "explain": "Python memakai datetime."
          },
          {
            "type": "mc",
            "q": "Waktu sekarang memakai",
            "options": [
              "datetime.now()",
              "decorator factory",
              "kombinasi cartesian",
              "suppress/teruskan"
            ],
            "a": 0,
            "explain": "now mengambil waktu."
          },
          {
            "type": "mc",
            "q": "Format tanggal memakai",
            "options": [
              "machine learning",
              ".strftime()",
              "TypeVar/Generic",
              "mudah dibaca"
            ],
            "a": 1,
            "explain": "strftime memformat."
          },
          {
            "type": "mc",
            "q": "Parse tanggal memakai",
            "options": [
              ".strptime()",
              "lazy",
              ".strftime()",
              "class Nama:"
            ],
            "a": 0,
            "explain": "strptime mem-parse."
          },
          {
            "type": "mc",
            "q": "Timezone-aware disarankan",
            "options": [
              "ya",
              "tidak",
              "'a'",
              "build"
            ],
            "a": 0,
            "explain": "Gunakan timezone."
          },
          {
            "type": "mc",
            "q": "timedelta untuk",
            "options": [
              "==/!=/</>",
              "remove()/pop()",
              "{k:v for ...}",
              "selisih waktu"
            ],
            "a": 3,
            "explain": "timedelta menghitung selisih."
          },
          {
            "type": "mc",
            "q": "random untuk",
            "options": [
              "angka acak",
              "unittest",
              "metadata/build",
              "parameterized query"
            ],
            "a": 0,
            "explain": "random module."
          },
          {
            "type": "mc",
            "q": "secret untuk",
            "options": [
              "pasangan key-value",
              "acak aman",
              "kondisi benar",
              "lambda x: expr"
            ],
            "a": 1,
            "explain": "secrets untuk kripto."
          },
          {
            "type": "mc",
            "q": "uuid untuk",
            "options": [
              "dependency",
              "id unik",
              "decorator factory",
              "kombinasi cartesian"
            ],
            "a": 1,
            "explain": "uuid membuat id."
          },
          {
            "type": "mc",
            "q": "logging untuk",
            "options": [
              "menunggu coroutine",
              "pencatatan",
              "pool eksekutor",
              "machine learning"
            ],
            "a": 1,
            "explain": "logging standar."
          }
        ]
      },
      {
        "id": "python-17",
        "level": "Menengah",
        "title": "OOP Python",
        "exercises": [
          {
            "type": "mc",
            "q": "Mendefinisikan class memakai",
            "options": [
              "struct Nama",
              "komputasi numerik",
              "class Nama:",
              "pengujian"
            ],
            "a": 2,
            "explain": "Python memakai class."
          },
          {
            "type": "mc",
            "q": "__init__ adalah",
            "options": [
              "len()",
              "list[1:3]",
              "konstruktor",
              "pasangan key-value"
            ],
            "a": 2,
            "explain": "__init__ inisialisasi."
          },
          {
            "type": "mc",
            "q": "self merujuk",
            "options": [
              "instance",
              "menunggu coroutine",
              "pool eksekutor",
              "machine learning"
            ],
            "a": 0,
            "explain": "self menunjuk instance."
          },
          {
            "type": "mc",
            "q": "Inheritance memakai",
            "options": [
              "extends",
              "dependency",
              "decorator factory",
              "class Anak(Induk):"
            ],
            "a": 3,
            "explain": "Python memakai ()."
          },
          {
            "type": "mc",
            "q": "super() memanggil",
            "options": [
              "float",
              "print()",
              "and/or/not",
              "method induk"
            ],
            "a": 3,
            "explain": "super memanggil induk."
          },
          {
            "type": "mc",
            "q": "@property membuat",
            "options": [
              "pembersihan",
              "getter",
              "re.search/match",
              "lazy"
            ],
            "a": 1,
            "explain": "property membuat getter."
          },
          {
            "type": "mc",
            "q": "@staticmethod tidak menerima",
            "options": [
              "==/!=/</>",
              "s[0]",
              "self/cls",
              "remove()/pop()"
            ],
            "a": 2,
            "explain": "staticmethod tanpa self."
          },
          {
            "type": "mc",
            "q": "@classmethod menerima",
            "options": [
              "self/cls",
              "cls",
              "'a'",
              "pytest"
            ],
            "a": 1,
            "explain": "classmethod menerima cls."
          },
          {
            "type": "mc",
            "q": "Dunder method seperti __str__ mengubah",
            "options": [
              "duplikat",
              "urutan angka",
              "perilaku bawaan",
              "dependency"
            ],
            "a": 2,
            "explain": "Dunder mengubah perilaku."
          },
          {
            "type": "mc",
            "q": "Mixin memakai",
            "options": [
              "multiple inheritance",
              "json.dump",
              "coverage.py",
              "komputasi numerik"
            ],
            "a": 0,
            "explain": "Mixin via multiple inheritance."
          }
        ]
      },
      {
        "id": "python-18",
        "level": "Menengah",
        "title": "Exception",
        "exercises": [
          {
            "type": "mc",
            "q": "Menangkap exception memakai",
            "options": [
              "try/except",
              "try/catch",
              "dokumentasi/alat",
              "Django/Flask/FastAPI"
            ],
            "a": 0,
            "explain": "Python memakai except."
          },
          {
            "type": "mc",
            "q": "finally dijalankan",
            "options": [
              "memori",
              "selisih waktu",
              "instance",
              "selalu"
            ],
            "a": 3,
            "explain": "finally selalu."
          },
          {
            "type": "mc",
            "q": "else pada try dijalankan bila",
            "options": [
              "GIL untuk CPU-bound",
              "interpreted dan dinamis",
              "| & -",
              "tidak ada exception"
            ],
            "a": 3,
            "explain": "else saat sukses."
          },
          {
            "type": "mc",
            "q": "raise melempar",
            "options": [
              "cache hasil",
              "exception",
              "nilai",
              "disederhanakan"
            ],
            "a": 1,
            "explain": "raise melempar."
          },
          {
            "type": "mc",
            "q": "Saat mendefinisikan galat kustom di Python, kelas baru sebaiknya mewarisi kelas dasar",
            "options": [
              "Error wajib",
              "[1,2,3]",
              "d['k'] / d.get('k')",
              "Exception"
            ],
            "a": 3,
            "explain": "Mewarisi Exception."
          },
          {
            "type": "mc",
            "q": "Menangkap tipe spesifik memakai",
            "options": [
              "environment/secret manager",
              "CPU-bound",
              "except Tipe",
              "disarankan"
            ],
            "a": 2,
            "explain": "except menyebut tipe."
          },
          {
            "type": "mc",
            "q": "with menutup",
            "options": [
              "string",
              "sys.exit()",
              ".replace()",
              "resource otomatis"
            ],
            "a": 3,
            "explain": "with context manager."
          },
          {
            "type": "mc",
            "q": "Menangkap terlalu luas berisiko",
            "options": [
              "unittest.mock",
              "kompatibilitas",
              "hash kuat",
              "menyembunyikan bug"
            ],
            "a": 3,
            "explain": "Jangan tangkap semua sembarangan."
          },
          {
            "type": "mc",
            "q": "Exception chaining memakai",
            "options": [
              "raise ... from",
              "disederhanakan",
              "re.compile",
              "kurang terbaca"
            ],
            "a": 0,
            "explain": "from merantai exception."
          },
          {
            "type": "mc",
            "q": "Traceback berguna untuk",
            "options": [
              "int()/str()/float()",
              "f-string/format",
              "+=/-=/...",
              "debugging"
            ],
            "a": 3,
            "explain": "Traceback melacak error."
          }
        ]
      },
      {
        "id": "python-19",
        "level": "Menengah",
        "title": "File & IO",
        "exercises": [
          {
            "type": "mc",
            "q": "Membaca berkas memakai",
            "options": [
              "kompatibilitas",
              "open() dengan with",
              "hash kuat",
              "skalabilitas"
            ],
            "a": 1,
            "explain": "with open membaca."
          },
          {
            "type": "mc",
            "q": "Mode menulis memakai",
            "options": [
              "'r'",
              "'a'",
              "'w'",
              "(1,2,3)"
            ],
            "a": 2,
            "explain": "'w' menulis (overwrite)."
          },
          {
            "type": "mc",
            "q": "Mode menambah memakai",
            "options": [
              "'w'",
              "'r'",
              "'a'",
              "def"
            ],
            "a": 2,
            "explain": "'a' menambah di akhir."
          },
          {
            "type": "mc",
            "q": "Membaca baris memakai",
            "options": [
              "int()/str()/float()",
              "f-string/format",
              "+=/-=/...",
              "readline/iterasi"
            ],
            "a": 3,
            "explain": "readline per baris."
          },
          {
            "type": "mc",
            "q": "Membaca semua memakai",
            "options": [
              "read()",
              "re.compile",
              "kurang terbaca",
              "angka acak"
            ],
            "a": 0,
            "explain": "read membaca seluruhnya."
          },
          {
            "type": "mc",
            "q": "Encoding penting ditentukan",
            "options": [
              "ya",
              "tidak",
              "#",
              "%"
            ],
            "a": 0,
            "explain": "Tentukan encoding."
          },
          {
            "type": "mc",
            "q": "pathlib memudahkan",
            "options": [
              "penting",
              "menyulitkan debugging",
              "manipulasi path",
              "operasi perbandingan"
            ],
            "a": 2,
            "explain": "pathlib untuk path."
          },
          {
            "type": "mc",
            "q": "os.path menyediakan",
            "options": [
              "utilitas path",
              "CPU-bound",
              "disarankan",
              "kualitas commit"
            ],
            "a": 0,
            "explain": "os.path utilities."
          },
          {
            "type": "mc",
            "q": "Menulis JSON memakai",
            "options": [
              "json.dump",
              "d['k'] = v",
              "penanda blok",
              "def nama():"
            ],
            "a": 0,
            "explain": "json.dump menulis."
          },
          {
            "type": "mc",
            "q": "Menangani IOError penting",
            "options": [
              "ya",
              "tidak",
              "def",
              "float"
            ],
            "a": 0,
            "explain": "Tangani error IO."
          }
        ]
      },
      {
        "id": "python-20",
        "level": "Menengah",
        "title": "Testing Python",
        "exercises": [
          {
            "type": "mc",
            "q": "Framework test bawaan adalah",
            "options": [
              "Jest",
              "PHPUnit",
              "unittest",
              "RSpec"
            ],
            "a": 2,
            "explain": "unittest bawaan Python."
          },
          {
            "type": "mc",
            "q": "Framework populer adalah",
            "options": [
              "pytest",
              "except Tipe",
              "'a'",
              "build"
            ],
            "a": 0,
            "explain": "pytest populer."
          },
          {
            "type": "mc",
            "q": "Perintah CLI populer di ekosistem Python untuk menjalankan pengujian unit otomatis adalah",
            "options": [
              "python test",
              "print()",
              "sep=",
              "pytest"
            ],
            "a": 3,
            "explain": "pytest menjalankan test."
          },
          {
            "type": "mc",
            "q": "Kata kunci Python untuk memverifikasi apakah suatu kondisi pengujian bernilai benar adalah",
            "options": [
              "assert",
              "expect",
              "lazy",
              ".strftime()"
            ],
            "a": 0,
            "explain": "Python memakai assert."
          },
          {
            "type": "mc",
            "q": "Mocking memakai",
            "options": [
              "suppress/teruskan",
              "unittest.mock",
              "re.sub",
              "generator"
            ],
            "a": 1,
            "explain": "unittest.mock."
          },
          {
            "type": "mc",
            "q": "Fixture pada pytest memakai",
            "options": [
              "coroutine",
              "@pytest.fixture",
              "sinkronisasi",
              "eksplorasi"
            ],
            "a": 1,
            "explain": "Fixture menyiapkan state."
          },
          {
            "type": "mc",
            "q": "Parametrize memudahkan",
            "options": [
              "lambda x: expr",
              "isolasi dependency",
              "logging/auth/caching",
              "banyak kasus"
            ],
            "a": 3,
            "explain": "Parametrize test."
          },
          {
            "type": "mc",
            "q": "Coverage memakai",
            "options": [
              "parameterized query",
              "performa",
              "perawatan",
              "coverage.py"
            ],
            "a": 3,
            "explain": "coverage mengukur."
          },
          {
            "type": "mc",
            "q": "Test perilaku lebih stabil",
            "options": [
              "tidak",
              "pip",
              "//",
              "ya"
            ],
            "a": 3,
            "explain": "Perilaku jarang berubah."
          },
          {
            "type": "mc",
            "q": "CI menjalankan test penting",
            "options": [
              "tidak",
              "+",
              "s[0]",
              "ya"
            ],
            "a": 3,
            "explain": "CI otomasi."
          }
        ]
      },
      {
        "id": "python-21",
        "level": "Advance",
        "title": "Packaging & Distribution",
        "exercises": [
          {
            "type": "mc",
            "q": "pyproject.toml mendefinisikan",
            "options": [
              "append()",
              "{1,2,3}",
              "objek iterable",
              "metadata/build"
            ],
            "a": 3,
            "explain": "pyproject.toml konfigurasi proyek."
          },
          {
            "type": "mc",
            "q": "Membangun package memakai",
            "options": [
              "validasi path",
              "build",
              "akses data",
              "black/ruff"
            ],
            "a": 1,
            "explain": "Module build membuat dist."
          },
          {
            "type": "mc",
            "q": "Menerbitkan ke PyPI memakai",
            "options": [
              "twine",
              "int(input())",
              ":=",
              "\"\".join(list)"
            ],
            "a": 0,
            "explain": "twine upload."
          },
          {
            "type": "mc",
            "q": "Versioning semantic membantu",
            "options": [
              "debugging",
              "utilitas path",
              "kompatibilitas",
              "banyak kasus"
            ],
            "a": 2,
            "explain": "Semver."
          },
          {
            "type": "mc",
            "q": "Mengunci dependency penting",
            "options": [
              "structural typing",
              "reproduksibilitas",
              "ORM/admin",
              "type()/isinstance()"
            ],
            "a": 1,
            "explain": "Lock dependency."
          },
          {
            "type": "mc",
            "q": "Wheel adalah",
            "options": [
              "kombinasi/permutasi",
              "acak aman",
              "distribusi binary",
              "method induk"
            ],
            "a": 2,
            "explain": "Wheel paket binary."
          },
          {
            "type": "mc",
            "q": "Source distribution memungkinkan",
            "options": [
              "build dari sumber",
              "context manager dari generator",
              "URL ke handler",
              "otomasi, web, dan data science"
            ],
            "a": 0,
            "explain": "Sdist sumber."
          },
          {
            "type": "mc",
            "q": "Menguji package terpasang penting",
            "options": [
              "ya",
              "tidak",
              "test",
              "list"
            ],
            "a": 0,
            "explain": "Uji instalasi."
          },
          {
            "type": "mc",
            "q": "Dokumentasi package penting",
            "options": [
              "tidak",
              "bool",
              "ya",
              "end="
            ],
            "a": 2,
            "explain": "Dokumentasi jelas."
          },
          {
            "type": "mc",
            "q": "License wajib",
            "options": [
              "ya",
              "tidak",
              "lazy",
              "cls"
            ],
            "a": 0,
            "explain": "Sertakan lisensi."
          }
        ]
      },
      {
        "id": "python-22",
        "level": "Advance",
        "title": "Keamanan Python",
        "exercises": [
          {
            "type": "mc",
            "q": "eval/exec pada input berisiko",
            "options": [
              "//",
              "RCE",
              ".split()",
              "append()"
            ],
            "a": 1,
            "explain": "eval berbahaya."
          },
          {
            "type": "mc",
            "q": "SQL injection dicegah dengan",
            "options": [
              "re.compile",
              "parameterized query",
              "kurang terbaca",
              "angka acak"
            ],
            "a": 1,
            "explain": "Parameter query."
          },
          {
            "type": "mc",
            "q": "pickle tak aman pada data tak tepercaya",
            "options": [
              "tidak",
              "ya",
              "re",
              "()"
            ],
            "a": 1,
            "explain": "pickle berbahaya."
          },
          {
            "type": "mc",
            "q": "yaml.load berisiko; gunakan",
            "options": [
              "multiple inheritance",
              "raise ... from",
              "manipulasi path",
              "safe_load"
            ],
            "a": 3,
            "explain": "safe_load."
          },
          {
            "type": "mc",
            "q": "Secrets disimpan di",
            "options": [
              "environment/secret manager",
              "pattern matching",
              "membuat berkas .py",
              "async with"
            ],
            "a": 0,
            "explain": "Rahasia aman."
          },
          {
            "type": "mc",
            "q": "Menyimpan password memakai",
            "options": [
              "hash kuat",
              "kompatibilitas",
              "wajib",
              "skalabilitas"
            ],
            "a": 0,
            "explain": "Hashing."
          },
          {
            "type": "mc",
            "q": "Dependency scanning penting",
            "options": [
              "tidak",
              "RCE",
              "ya",
              ".py"
            ],
            "a": 2,
            "explain": "Scan dependency."
          },
          {
            "type": "mc",
            "q": "Path traversal dicegah dengan",
            "options": [
              "kualitas commit",
              "validasi path",
              "multiprocessing",
              "array numerik"
            ],
            "a": 1,
            "explain": "Validasi path."
          },
          {
            "type": "mc",
            "q": "Log tidak memuat rahasia",
            "options": [
              "ya",
              "tidak",
              "bool",
              "end="
            ],
            "a": 0,
            "explain": "Hindari rahasia di log."
          },
          {
            "type": "mc",
            "q": "Audit berkala penting",
            "options": [
              "tidak",
              "#",
              "ya",
              "%"
            ],
            "a": 2,
            "explain": "Audit rutin."
          }
        ]
      },
      {
        "id": "python-23",
        "level": "Advance",
        "title": "Performance Python",
        "exercises": [
          {
            "type": "mc",
            "q": "Profiling memakai",
            "options": [
              "f-string",
              "cProfile",
              "len()",
              "list[1:3]"
            ],
            "a": 1,
            "explain": "cProfile profil."
          },
          {
            "type": "mc",
            "q": "Vectorization mempercepat",
            "options": [
              "komputasi numerik",
              "json.dump",
              "coverage.py",
              "pengujian"
            ],
            "a": 0,
            "explain": "NumPy vectorization."
          },
          {
            "type": "mc",
            "q": "Mengurangi alokasi membantu",
            "options": [
              "duplikat",
              "performa",
              "urutan angka",
              "dependency"
            ],
            "a": 1,
            "explain": "Alokasi berpengaruh."
          },
          {
            "type": "mc",
            "q": "Menggunakan tipe data tepat",
            "options": [
              "tidak",
              "penting",
              "logika bisnis",
              "ruff/flake8"
            ],
            "a": 1,
            "explain": "Tipe memengaruhi."
          },
          {
            "type": "mc",
            "q": "Caching membantu",
            "options": [
              "async def",
              "perhitungan mahal",
              "hati-hati",
              "visualisasi"
            ],
            "a": 1,
            "explain": "Cache mahal."
          },
          {
            "type": "mc",
            "q": "Generator hemat memori",
            "options": [
              "tidak",
              "re",
              "()",
              "ya"
            ],
            "a": 3,
            "explain": "Lazy hemat memori."
          },
          {
            "type": "mc",
            "q": "Cython/C extension mempercepat",
            "options": [
              "CPU-bound",
              "request",
              "newline",
              "==/!=/</>"
            ],
            "a": 0,
            "explain": "Extension native."
          },
          {
            "type": "mc",
            "q": "Multiprocessing untuk CPU",
            "options": [
              "tidak",
              "id unik",
              "penting",
              "getter"
            ],
            "a": 2,
            "explain": "Paralel proses."
          },
          {
            "type": "mc",
            "q": "Ukur sebelum optimasi",
            "options": [
              "wajib",
              "tidak",
              "exception",
              "'w'"
            ],
            "a": 0,
            "explain": "Ukur dulu."
          },
          {
            "type": "mc",
            "q": "Bottleneck jaringan berbeda dari CPU",
            "options": [
              "tidak",
              "len()",
              "ya",
              "def"
            ],
            "a": 2,
            "explain": "Diagnosis tepat."
          }
        ]
      },
      {
        "id": "python-24",
        "level": "Advance",
        "title": "Arsitektur & Pattern",
        "exercises": [
          {
            "type": "mc",
            "q": "Repository memisahkan",
            "options": [
              "akses data",
              "{k:v for ...}",
              "di loop",
              "triple quote"
            ],
            "a": 0,
            "explain": "Repository data."
          },
          {
            "type": "mc",
            "q": "Service layer menampung",
            "options": [
              "pytest",
              "build",
              "logika bisnis",
              "safe_load"
            ],
            "a": 2,
            "explain": "Service bisnis."
          },
          {
            "type": "mc",
            "q": "Dependency injection memudahkan",
            "options": [
              "and/or/not",
              ".upper()",
              "pengujian",
              "s[1:3]"
            ],
            "a": 2,
            "explain": "DI mudah diuji."
          },
          {
            "type": "mc",
            "q": "Pemisahan layer membantu",
            "options": [
              "perawatan",
              "class Nama:",
              "resource otomatis",
              "readline/iterasi"
            ],
            "a": 0,
            "explain": "Pemisahan layer."
          },
          {
            "type": "mc",
            "q": "Protocol typing mengurangi",
            "options": [
              "mudah dibaca",
              ".strip()",
              "d['k'] / d.get('k')",
              "ketergantungan konkret"
            ],
            "a": 3,
            "explain": "Struct typing."
          },
          {
            "type": "mc",
            "q": "Composition over inheritance",
            "options": [
              "tidak",
              "disarankan",
              "suppress/teruskan",
              "re.sub"
            ],
            "a": 1,
            "explain": "Komposisi fleksibel."
          },
          {
            "type": "mc",
            "q": "Domain bebas framework",
            "options": [
              "tidak",
              "coroutine",
              "disarankan",
              "sinkronisasi"
            ],
            "a": 2,
            "explain": "Domain bersih."
          },
          {
            "type": "mc",
            "q": "Modularisasi membantu",
            "options": [
              "skalabilitas",
              "lambda x: expr",
              "isolasi dependency",
              "logging/auth/caching"
            ],
            "a": 0,
            "explain": "Modul besar."
          },
          {
            "type": "mc",
            "q": "Dokumentasi arsitektur penting",
            "options": [
              "tidak",
              "#",
              "%",
              "ya"
            ],
            "a": 3,
            "explain": "Dokumentasi tim."
          },
          {
            "type": "mc",
            "q": "Refactor bertahap aman",
            "options": [
              "tidak",
              "ya",
              "RCE",
              ".py"
            ],
            "a": 1,
            "explain": "Bertahap."
          }
        ]
      },
      {
        "id": "python-25",
        "level": "Advance",
        "title": "Tools & Ekosistem",
        "exercises": [
          {
            "type": "mc",
            "q": "Formatter populer adalah",
            "options": [
              "re.search/match",
              "black/ruff",
              "lazy",
              ".strftime()"
            ],
            "a": 1,
            "explain": "Black/Ruff format."
          },
          {
            "type": "mc",
            "q": "Linter populer adalah",
            "options": [
              "ruff/flake8",
              "float",
              "print()",
              "sep="
            ],
            "a": 0,
            "explain": "Ruff/Flake8 lint."
          },
          {
            "type": "mc",
            "q": "Type checker adalah",
            "options": [
              "mypy/pyright",
              "dependency",
              "decorator factory",
              "kombinasi cartesian"
            ],
            "a": 0,
            "explain": "Mypy/Pyright."
          },
          {
            "type": "mc",
            "q": "Dependency manager modern",
            "options": [
              "pool eksekutor",
              "machine learning",
              "TypeVar/Generic",
              "poetry/uv"
            ],
            "a": 3,
            "explain": "Poetry/uv."
          },
          {
            "type": "mc",
            "q": "Notebook untuk",
            "options": [
              "metadata/build",
              "eksplorasi data",
              "parameterized query",
              "performa"
            ],
            "a": 1,
            "explain": "Jupyter."
          },
          {
            "type": "mc",
            "q": "CI/CD penting",
            "options": [
              "ya",
              "tidak",
              "def",
              "float"
            ],
            "a": 0,
            "explain": "CI otomasi."
          },
          {
            "type": "mc",
            "q": "Pre-commit membantu",
            "options": [
              "kualitas commit",
              "self/cls",
              "except Tipe",
              "pytest"
            ],
            "a": 0,
            "explain": "Pre-commit hooks."
          },
          {
            "type": "mc",
            "q": "Mengelola versi Python penting",
            "options": [
              "tidak",
              "+",
              "ya",
              "s[0]"
            ],
            "a": 2,
            "explain": "Versi konsisten."
          },
          {
            "type": "mc",
            "q": "Dokumentasi memakai",
            "options": [
              "TypeVar/Generic",
              "mudah dibaca",
              "Sphinx/MkDocs",
              "input()"
            ],
            "a": 2,
            "explain": "Dokumentasi tool."
          },
          {
            "type": "mc",
            "q": "Menjaga dependency minimal",
            "options": [
              "tidak",
              ".strftime()",
              "penting",
              "class Nama:"
            ],
            "a": 2,
            "explain": "Minimalkan dependency."
          }
        ]
      },
      {
        "id": "python-26",
        "level": "Advance",
        "title": "Async Python",
        "exercises": [
          {
            "type": "mc",
            "q": "Async dideklarasikan dengan",
            "options": [
              "async def",
              "menyulitkan debugging",
              "operasi perbandingan",
              "lock/file/transaksi"
            ],
            "a": 0,
            "explain": "async def membuat coroutine."
          },
          {
            "type": "mc",
            "q": "await dipakai untuk",
            "options": [
              "disarankan",
              "kualitas commit",
              "menunggu coroutine",
              "multiprocessing"
            ],
            "a": 2,
            "explain": "await menunggu."
          },
          {
            "type": "mc",
            "q": "Event loop menjalankan",
            "options": [
              "kurang terbaca",
              "angka acak",
              "class Anak(Induk):",
              "coroutine"
            ],
            "a": 3,
            "explain": "Event loop menjalankan async."
          },
          {
            "type": "mc",
            "q": "asyncio.run menjalankan",
            "options": [
              "tipe statis",
              "validasi data",
              "program async",
              "anotasi tipe"
            ],
            "a": 2,
            "explain": "asyncio.run entrypoint."
          },
          {
            "type": "mc",
            "q": "asyncio.gather menjalankan",
            "options": [
              "beberapa coroutine paralel",
              "urutan tak terbatas",
              "GIL untuk CPU-bound",
              "interpreted dan dinamis"
            ],
            "a": 0,
            "explain": "gather paralel."
          },
          {
            "type": "mc",
            "q": "Async cocok untuk",
            "options": [
              "IO-bound",
              "CPU-bound",
              "instance",
              "multiple inheritance"
            ],
            "a": 0,
            "explain": "Async untuk IO."
          },
          {
            "type": "mc",
            "q": "CPU-bound sebaiknya memakai",
            "options": [
              "if/elif/else",
              "pattern matching",
              "membuat berkas .py",
              "multiprocessing"
            ],
            "a": 3,
            "explain": "Multiprocessing untuk CPU."
          },
          {
            "type": "mc",
            "q": "aiohttp/httpx untuk",
            "options": [
              "unittest.mock",
              "kompatibilitas",
              "hash kuat",
              "HTTP async"
            ],
            "a": 3,
            "explain": "HTTP async library."
          },
          {
            "type": "mc",
            "q": "Menangani timeout async",
            "options": [
              "tidak",
              "IO-bound",
              "untuk paralelisme",
              "penting"
            ],
            "a": 3,
            "explain": "Timeout penting."
          },
          {
            "type": "mc",
            "q": "Mencampur sync dan async perlu",
            "options": [
              "import",
              "penting",
              "menyulitkan debugging",
              "hati-hati"
            ],
            "a": 3,
            "explain": "Hati-hati blocking call."
          }
        ]
      },
      {
        "id": "python-27",
        "level": "Advance",
        "title": "Concurrency & Parallelism",
        "exercises": [
          {
            "type": "mc",
            "q": "Threading Python dibatasi oleh",
            "options": [
              "GIL untuk CPU-bound",
              "python -m venv",
              "index dan nilai",
              "fungsi yang membungkus fungsi lain"
            ],
            "a": 0,
            "explain": "GIL membatasi CPU paralel."
          },
          {
            "type": "mc",
            "q": "Threading cocok untuk",
            "options": [
              "CPU-bound",
              "anotasi tipe",
              "int(input())",
              "IO-bound"
            ],
            "a": 3,
            "explain": "Threading untuk IO."
          },
          {
            "type": "mc",
            "q": "Multiprocessing untuk",
            "options": [
              "IO-bound",
              "CPU-bound",
              "class Anak(Induk):",
              "try/except"
            ],
            "a": 1,
            "explain": "Multiprocessing untuk CPU."
          },
          {
            "type": "mc",
            "q": "concurrent.futures menyediakan",
            "options": [
              "pool eksekutor",
              "+=/-=/...",
              ".split()",
              "append()"
            ],
            "a": 0,
            "explain": "Futures menyediakan pool."
          },
          {
            "type": "mc",
            "q": "Race condition mengharuskan",
            "options": [
              "@pytest.fixture",
              "reproduksibilitas",
              "validasi path",
              "sinkronisasi"
            ],
            "a": 3,
            "explain": "Sinkronisasi untuk data bersama."
          },
          {
            "type": "mc",
            "q": "Queue thread-safe membantu",
            "options": [
              "penanda blok",
              "komunikasi",
              "def nama():",
              "__init__.py/folder"
            ],
            "a": 1,
            "explain": "Queue mengkoordinasikan."
          },
          {
            "type": "mc",
            "q": "Sub-interpreter/GIL-free berkembang",
            "options": [
              "untuk paralelisme",
              "skalabilitas",
              "Sphinx/MkDocs",
              "HTTP async"
            ],
            "a": 0,
            "explain": "Perkembangan Python baru."
          },
          {
            "type": "mc",
            "q": "Mengukur beban penting",
            "options": [
              "tidak",
              "test",
              "ya",
              "list"
            ],
            "a": 2,
            "explain": "Ukur sebelum optimasi."
          },
          {
            "type": "mc",
            "q": "Shutdown executor tepat",
            "options": [
              "penting",
              "tidak",
              "structural typing",
              "ORM/admin"
            ],
            "a": 0,
            "explain": "Tutup executor."
          },
          {
            "type": "mc",
            "q": "Menghindari shared mutable global",
            "options": [
              "tidak",
              "kombinasi/permutasi",
              "acak aman",
              "penting"
            ],
            "a": 3,
            "explain": "Hindari state global mutable."
          }
        ]
      },
      {
        "id": "python-28",
        "level": "Advance",
        "title": "Data & Scientific",
        "exercises": [
          {
            "type": "mc",
            "q": "NumPy menyediakan",
            "options": [
              "except Tipe",
              "pytest",
              "build",
              "array numerik"
            ],
            "a": 3,
            "explain": "NumPy array efisien."
          },
          {
            "type": "mc",
            "q": "Pandas menyediakan",
            "options": [
              "print()",
              "sep=",
              "DataFrame",
              "and/or/not"
            ],
            "a": 2,
            "explain": "Pandas DataFrame."
          },
          {
            "type": "mc",
            "q": "Vectorization membantu",
            "options": [
              "lazy",
              ".strftime()",
              "performa",
              "class Nama:"
            ],
            "a": 2,
            "explain": "Vectorization cepat."
          },
          {
            "type": "mc",
            "q": "Matplotlib untuk",
            "options": [
              "machine learning",
              "TypeVar/Generic",
              "visualisasi",
              "mudah dibaca"
            ],
            "a": 2,
            "explain": "Matplotlib plotting."
          },
          {
            "type": "mc",
            "q": "scikit-learn untuk",
            "options": [
              "machine learning",
              "coroutine",
              "sinkronisasi",
              "eksplorasi"
            ],
            "a": 0,
            "explain": "sklearn ML."
          },
          {
            "type": "mc",
            "q": "Data cleaning penting",
            "options": [
              "ya",
              "tidak",
              "def",
              "float"
            ],
            "a": 0,
            "explain": "Bersihkan data."
          },
          {
            "type": "mc",
            "q": "Mengelola memori data besar",
            "options": [
              "tidak",
              "penting",
              "parameterized query",
              "performa"
            ],
            "a": 1,
            "explain": "Kelola memori."
          },
          {
            "type": "mc",
            "q": "Type data DataFrame memengaruhi",
            "options": [
              "s[0]",
              "remove()/pop()",
              "performa",
              "{k:v for ...}"
            ],
            "a": 2,
            "explain": "Tipe data memengaruhi."
          },
          {
            "type": "mc",
            "q": "Notebook memudahkan",
            "options": [
              "eksplorasi",
              "and/or/not",
              ".upper()",
              "s[1:3]"
            ],
            "a": 0,
            "explain": "Jupyter untuk eksplorasi."
          },
          {
            "type": "mc",
            "q": "Reproducibility penting",
            "options": [
              "tidak",
              "cls",
              "ya",
              "twine"
            ],
            "a": 2,
            "explain": "Pin versi dependency."
          }
        ]
      },
      {
        "id": "python-29",
        "level": "Advance",
        "title": "Typing & Kualitas",
        "exercises": [
          {
            "type": "mc",
            "q": "Type hint membantu",
            "options": [
              "acak aman",
              "method induk",
              "dokumentasi/alat",
              "selalu"
            ],
            "a": 2,
            "explain": "Type hint memberi info."
          },
          {
            "type": "mc",
            "q": "mypy memeriksa",
            "options": [
              "\"\".join(list)",
              "tipe statis",
              "list[0]",
              "duplikat"
            ],
            "a": 1,
            "explain": "mypy static checking."
          },
          {
            "type": "mc",
            "q": "Protocol mendukung",
            "options": [
              "duplikasi",
              "async with",
              "structural typing",
              "datetime"
            ],
            "a": 2,
            "explain": "Protocol typing struktural."
          },
          {
            "type": "mc",
            "q": "dataclass mengurangi",
            "options": [
              "boilerplate",
              "ORM/admin",
              "type()/isinstance()",
              "sys.stderr"
            ],
            "a": 0,
            "explain": "dataclass ringkas."
          },
          {
            "type": "mc",
            "q": "Enum untuk",
            "options": [
              "def nama():",
              "konstanta",
              "__init__.py/folder",
              "metadata fungsi"
            ],
            "a": 1,
            "explain": "Enum konstanta."
          },
          {
            "type": "mc",
            "q": "Type generics memakai",
            "options": [
              "Sphinx/MkDocs",
              "HTTP async",
              "DataFrame",
              "TypeVar/Generic"
            ],
            "a": 3,
            "explain": "Generics typing."
          },
          {
            "type": "mc",
            "q": "Menjaga type hint konsisten",
            "options": [
              "tidak",
              "penting",
              ".split()",
              "append()"
            ],
            "a": 1,
            "explain": "Konsistensi penting."
          },
          {
            "type": "mc",
            "q": "Linter memakai",
            "options": [
              "reproduksibilitas",
              "validasi path",
              "akses data",
              "ruff/flake8"
            ],
            "a": 3,
            "explain": "Linter menjaga kualitas."
          },
          {
            "type": "mc",
            "q": "Formatter memakai",
            "options": [
              "anotasi tipe",
              "int(input())",
              "\"\".join(list)",
              "black/ruff format"
            ],
            "a": 3,
            "explain": "Formatter menyeragamkan."
          },
          {
            "type": "mc",
            "q": "Menghindari any secara berlebihan",
            "options": [
              "tidak",
              "try/except",
              "debugging",
              "penting"
            ],
            "a": 3,
            "explain": "Hindari any."
          }
        ]
      },
      {
        "id": "python-30",
        "level": "Advance",
        "title": "Web & API Python",
        "exercises": [
          {
            "type": "mc",
            "q": "Framework web populer adalah",
            "options": [
              "safe_load",
              "perhitungan mahal",
              "Django/Flask/FastAPI",
              "ketergantungan konkret"
            ],
            "a": 2,
            "explain": "Framework web Python."
          },
          {
            "type": "mc",
            "q": "FastAPI unggul pada",
            "options": [
              "for k in d",
              "from mod import f",
              "async dan validasi otomatis",
              "{x for x in ...}"
            ],
            "a": 2,
            "explain": "FastAPI async + validasi."
          },
          {
            "type": "mc",
            "q": "Pydantic untuk",
            "options": [
              "program async",
              "validasi data",
              "komunikasi",
              "dokumentasi/alat"
            ],
            "a": 1,
            "explain": "Pydantic validasi."
          },
          {
            "type": "mc",
            "q": "Django menyediakan",
            "options": [
              "beberapa resource",
              "ORM/admin",
              "re.findall",
              "memori"
            ],
            "a": 1,
            "explain": "Django ORM/admin."
          },
          {
            "type": "mc",
            "q": "Routing memetakan",
            "options": [
              "{x for x in ...}",
              "Menandai struktur blok kode",
              "URL ke handler",
              "nama = nilai"
            ],
            "a": 2,
            "explain": "Routing URL."
          },
          {
            "type": "mc",
            "q": "Middleware memproses",
            "options": [
              "konstruktor",
              "request",
              "perilaku bawaan",
              "menyembunyikan bug"
            ],
            "a": 1,
            "explain": "Middleware request."
          },
          {
            "type": "mc",
            "q": "Autentikasi penting",
            "options": [
              "tidak",
              "ya",
              "in",
              "@nama"
            ],
            "a": 1,
            "explain": "Autentikasi wajib."
          },
          {
            "type": "mc",
            "q": "Validasi input di server",
            "options": [
              "opsional",
              "wajib",
              "assert",
              "twine"
            ],
            "a": 1,
            "explain": "Validasi server."
          },
          {
            "type": "mc",
            "q": "Dokumentasi API otomatis membantu",
            "options": [
              "tidak",
              "RCE",
              "ya",
              ".py"
            ],
            "a": 2,
            "explain": "OpenAPI otomatis."
          },
          {
            "type": "mc",
            "q": "Observability penting",
            "options": [
              "tidak",
              "#",
              "ya",
              "%"
            ],
            "a": 2,
            "explain": "Log/metrik/tracing."
          }
        ]
      },
      {
        "id": "python-31",
        "level": "Advance",
        "title": "Master Review & Best Practice Python",
        "exercises": [
          {
            "type": "mc",
            "q": "Kata kunci Python untuk mendefinisikan fungsi adalah",
            "options": [
              "func",
              "def",
              "function",
              "method"
            ],
            "a": 1,
            "explain": "Fungsi Python didefinisikan dengan kata kunci def."
          },
          {
            "type": "mc",
            "q": "Dictionary Python menyimpan data sebagai",
            "options": [
              "Pasangan key-value",
              "Urutan karakter saja",
              "Blok CSS",
              "Pointer tanpa tipe"
            ],
            "a": 0,
            "explain": "Dictionary adalah koleksi pemetaan key ke value."
          },
          {
            "type": "mc",
            "q": "Indentasi pada Python digunakan untuk",
            "options": [
              "Mengakhiri semua nama variabel",
              "Membuat komentar multi-file",
              "Menandai struktur blok kode",
              "Mendeklarasikan tipe data wajib"
            ],
            "a": 2,
            "explain": "Indentasi menentukan batas blok seperti isi fungsi dan percabangan."
          },
          {
            "type": "mc",
            "q": "List comprehension berguna untuk",
            "options": [
              "Menghapus seluruh elemen list",
              "Membentuk list dari iterable dengan ekspresi ringkas",
              "Menjalankan server web otomatis",
              "Mengganti dictionary menjadi file"
            ],
            "a": 1,
            "explain": "List comprehension membuat list baru dari iterable."
          },
          {
            "type": "mc",
            "q": "Virtual environment Python membantu",
            "options": [
              "Mengisolasi dependency antarproyek",
              "Mengubah Python menjadi C++",
              "Menyimpan password di source code",
              "Menghapus kebutuhan package"
            ],
            "a": 0,
            "explain": "Environment terpisah mencegah dependency satu proyek mengganggu proyek lain."
          }
        ]
      }
    ]
  }
];

export { CONTENT_PYTHON };
