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
              "CSS",
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
              "CSS"
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
              "CSS",
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
              "CSS",
              "interpreted dan dinamis",
              "route"
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
              "CSS"
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
              "CSS"
            ],
            "a": 1,
            "explain": "Python memakai #."
          },
          {
            "type": "mc",
            "q": "Python banyak dipakai untuk",
            "options": [
              "otomasi, web, dan data science",
              "CSS",
              "route",
              "migrasi"
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
              "CSS",
              "route",
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
              "CSS",
              "route",
              "migrasi"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "type/isinstance memeriksa tipe."
          },
          {
            "type": "mc",
            "q": "String immutable",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
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
              "CSS"
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
              "CSS"
            ],
            "a": 0,
            "explain": "input() membaca input."
          },
          {
            "type": "mc",
            "q": "input() mengembalikan",
            "options": [
              "int",
              "CSS",
              "route",
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Python memakai f-string."
          },
          {
            "type": "mc",
            "q": "Mengonversi input ke int memakai",
            "options": [
              "input().int",
              "CSS",
              "int(input())",
              "route"
            ],
            "a": 2,
            "explain": "Konversi eksplisit."
          },
          {
            "type": "mc",
            "q": "Menulis ke stderr memakai",
            "options": [
              "sys.stderr",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "sys.stderr untuk error."
          },
          {
            "type": "mc",
            "q": "print default menambah",
            "options": [
              "newline",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "print menambah baris baru."
          },
          {
            "type": "mc",
            "q": "Mengatur separator print memakai",
            "options": [
              "sep=",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "sep mengatur pemisah."
          },
          {
            "type": "mc",
            "q": "Mengatur akhir print memakai",
            "options": [
              "CSS",
              "route",
              "end=",
              "migrasi"
            ],
            "a": 2,
            "explain": "end mengatur akhir."
          },
          {
            "type": "mc",
            "q": "Keluar program memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
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
              "CSS",
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
              "CSS"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Python memakai and/or/not."
          },
          {
            "type": "mc",
            "q": "Membership memakai",
            "options": [
              "contains",
              "CSS",
              "route",
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "is membandingkan identitas."
          },
          {
            "type": "mc",
            "q": "Bitwise memakai",
            "options": [
              "& | ^ ~",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Python mendukung bitwise."
          },
          {
            "type": "mc",
            "q": "Assignment majemuk memakai",
            "options": [
              "CSS",
              "route",
              "+=/-=/...",
              "migrasi"
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
              "CSS"
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
              "CSS",
              "route",
              "migrasi",
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
              "CSS"
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
              "CSS",
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
              "CSS"
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
              "CSS"
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
              "CSS"
            ],
            "a": 1,
            "explain": "split memecah."
          },
          {
            "type": "mc",
            "q": "Menggabungkan list string memakai",
            "options": [
              ".concat()",
              "CSS",
              "route",
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
              "CSS"
            ],
            "a": 1,
            "explain": "len() memberi panjang."
          },
          {
            "type": "mc",
            "q": "String indexing memakai",
            "options": [
              "s.at(0)",
              "CSS",
              "s[0]",
              "route"
            ],
            "a": 2,
            "explain": "Indexing dengan []."
          },
          {
            "type": "mc",
            "q": "Slicing memakai",
            "options": [
              "s.sub(1,3)",
              "CSS",
              "s[1:3]",
              "route"
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
              "CSS"
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
              "CSS",
              "route"
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
              "CSS"
            ],
            "a": 0,
            "explain": "Tuple memakai ()."
          },
          {
            "type": "mc",
            "q": "Tuple immutable",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
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
              "CSS",
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
              "CSS",
              "list[0]",
              "route"
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
              "CSS"
            ],
            "a": 1,
            "explain": "len() memberi panjang."
          },
          {
            "type": "mc",
            "q": "Slicing memakai",
            "options": [
              "list.sub",
              "CSS",
              "list[1:3]",
              "route"
            ],
            "a": 2,
            "explain": "Slicing list."
          },
          {
            "type": "mc",
            "q": "Menghapus elemen memakai",
            "options": [
              "delete only",
              "CSS",
              "route",
              "remove()/pop()"
            ],
            "a": 3,
            "explain": "remove/pop menghapus."
          },
          {
            "type": "mc",
            "q": "List comprehension memakai",
            "options": [
              "CSS",
              "[x for x in ...]",
              "route",
              "migrasi"
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
              "CSS"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "{1,2,3}"
            ],
            "a": 3,
            "explain": "Set memakai {}."
          },
          {
            "type": "mc",
            "q": "Set menghapus",
            "options": [
              "CSS",
              "duplikat",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Set unik."
          },
          {
            "type": "mc",
            "q": "Iterasi dict memakai",
            "options": [
              "CSS",
              "route",
              "for k in d",
              "migrasi"
            ],
            "a": 2,
            "explain": "Iterasi memberi key."
          },
          {
            "type": "mc",
            "q": "items() pada dict memberi",
            "options": [
              "CSS",
              "route",
              "pasangan key-value",
              "migrasi"
            ],
            "a": 2,
            "explain": "items mengembalikan pasangan."
          },
          {
            "type": "mc",
            "q": "Dict comprehension memakai",
            "options": [
              "CSS",
              "{k:v for ...}",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Dict comprehension."
          },
          {
            "type": "mc",
            "q": "Operasi set memakai",
            "options": [
              "CSS",
              "| & -",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Operasi himpunan."
          },
          {
            "type": "mc",
            "q": "Key dict harus",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "if/elif/else"
            ],
            "a": 3,
            "explain": "Python memakai elif."
          },
          {
            "type": "mc",
            "q": "Indentasi berfungsi sebagai",
            "options": [
              "CSS",
              "route",
              "penanda blok",
              "migrasi"
            ],
            "a": 2,
            "explain": "Python memakai indentasi."
          },
          {
            "type": "mc",
            "q": "Perulangan for mengiterasi",
            "options": [
              "CSS",
              "route",
              "objek iterable",
              "migrasi"
            ],
            "a": 2,
            "explain": "for mengiterasi iterable."
          },
          {
            "type": "mc",
            "q": "range() menghasilkan",
            "options": [
              "CSS",
              "urutan angka",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "range membuat urutan."
          },
          {
            "type": "mc",
            "q": "while mengulang selama",
            "options": [
              "CSS",
              "kondisi benar",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "while bergantung kondisi."
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
            "q": "enumerate memberi",
            "options": [
              "index dan nilai",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "enumerate pasangan index-nilai."
          },
          {
            "type": "mc",
            "q": "zip menggabungkan",
            "options": [
              "dua iterable",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "zip memasangkan."
          },
          {
            "type": "mc",
            "q": "Ternary memakai",
            "options": [
              "a if cond else b",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Python memakai if-else ekspresi."
          },
          {
            "type": "mc",
            "q": "match (3.10+) memakai",
            "options": [
              "pattern matching",
              "CSS",
              "route",
              "migrasi"
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
              "CSS"
            ],
            "a": 0,
            "explain": "Python memakai def."
          },
          {
            "type": "mc",
            "q": "Nilai balik memakai",
            "options": [
              "yield only",
              "CSS",
              "route",
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
              "CSS",
              "=",
              "route"
            ],
            "a": 2,
            "explain": "Nilai default dengan =."
          },
          {
            "type": "mc",
            "q": "Keyword argument memungkinkan",
            "options": [
              "CSS",
              "menyebut nama parameter",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Keyword argument memperjelas."
          },
          {
            "type": "mc",
            "q": "*args menampung",
            "options": [
              "CSS",
              "argumen posisional variabel",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "*args variadik posisional."
          },
          {
            "type": "mc",
            "q": "**kwargs menampung",
            "options": [
              "CSS",
              "route",
              "argumen keyword variabel",
              "migrasi"
            ],
            "a": 2,
            "explain": "**kwargs keyword variabel."
          },
          {
            "type": "mc",
            "q": "Lambda memakai",
            "options": [
              "CSS",
              "lambda x: expr",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Python memakai lambda."
          },
          {
            "type": "mc",
            "q": "Docstring memakai",
            "options": [
              "CSS",
              "route",
              "triple quote",
              "migrasi"
            ],
            "a": 2,
            "explain": "Docstring memakai \"\"\"."
          },
          {
            "type": "mc",
            "q": "Fungsi adalah first-class",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "Fungsi dapat dipakai sebagai nilai."
          },
          {
            "type": "mc",
            "q": "Mutable default argument berisiko",
            "options": [
              "tidak",
              "CSS",
              "route",
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
              "CSS"
            ],
            "a": 0,
            "explain": "Python memakai import."
          },
          {
            "type": "mc",
            "q": "Mengimpor fungsi memakai",
            "options": [
              "from mod import f",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "From-import memilih nama."
          },
          {
            "type": "mc",
            "q": "Membuat module berarti",
            "options": [
              "CSS",
              "membuat berkas .py",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Module adalah berkas .py."
          },
          {
            "type": "mc",
            "q": "Package Python berisi",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "__init__.py/folder"
            ],
            "a": 3,
            "explain": "Package folder dengan __init__."
          },
          {
            "type": "mc",
            "q": "Menjalankan script sebagai main memakai",
            "options": [
              "CSS",
              "if __name__ == '__main__'",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Guard main mencegah eksekusi saat import."
          },
          {
            "type": "mc",
            "q": "pip install memasang",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "package"
            ],
            "a": 3,
            "explain": "pip memasang package."
          },
          {
            "type": "mc",
            "q": "requirements.txt mencatat",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "dependency"
            ],
            "a": 3,
            "explain": "Requirements mencatat dependency."
          },
          {
            "type": "mc",
            "q": "VIRTUAL_ENV penting untuk",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "isolasi dependency"
            ],
            "a": 3,
            "explain": "venv mengisolasi."
          },
          {
            "type": "mc",
            "q": "Module standar untuk sistem memakai",
            "options": [
              "CSS",
              "route",
              "os/sys",
              "migrasi"
            ],
            "a": 2,
            "explain": "os/sys standard library."
          },
          {
            "type": "mc",
            "q": "Menghindari import melingkar",
            "options": [
              "tidak",
              "CSS",
              "route",
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Decorator membungkus fungsi."
          },
          {
            "type": "mc",
            "q": "Decorator diterapkan memakai",
            "options": [
              "CSS",
              "route",
              "@nama",
              "migrasi"
            ],
            "a": 2,
            "explain": "Python memakai @."
          },
          {
            "type": "mc",
            "q": "functools.wraps menjaga",
            "options": [
              "CSS",
              "route",
              "metadata fungsi",
              "migrasi"
            ],
            "a": 2,
            "explain": "wraps mempertahankan metadata."
          },
          {
            "type": "mc",
            "q": "Closure menangkap",
            "options": [
              "variabel lingkup",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Closure menangkap variabel."
          },
          {
            "type": "mc",
            "q": "nonlocal dipakai untuk",
            "options": [
              "mengubah variabel luar",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "nonlocal mengubah variabel enclosing."
          },
          {
            "type": "mc",
            "q": "Decorator berparameter memerlukan",
            "options": [
              "decorator factory",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Factory untuk argumen."
          },
          {
            "type": "mc",
            "q": "Decorator berguna untuk",
            "options": [
              "logging/auth/caching",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Decorator untuk lintas-potong."
          },
          {
            "type": "mc",
            "q": "functools.lru_cache membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "cache hasil"
            ],
            "a": 3,
            "explain": "lru_cache menyimpan hasil."
          },
          {
            "type": "mc",
            "q": "Decorator berlebihan dapat",
            "options": [
              "CSS",
              "route",
              "menyulitkan debugging",
              "migrasi"
            ],
            "a": 2,
            "explain": "Gunakan seperlunya."
          },
          {
            "type": "mc",
            "q": "Menulis decorator yang baik perlu",
            "options": [
              "test",
              "CSS",
              "route",
              "migrasi"
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "chain menggabungkan."
          },
          {
            "type": "mc",
            "q": "itertools.groupby mengelompokkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "berurutan"
            ],
            "a": 3,
            "explain": "groupby butuh data berurutan."
          },
          {
            "type": "mc",
            "q": "itertools.product menghasilkan",
            "options": [
              "CSS",
              "kombinasi cartesian",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "product cartesian."
          },
          {
            "type": "mc",
            "q": "itertools.islice memotong",
            "options": [
              "iterable",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "islice memotong."
          },
          {
            "type": "mc",
            "q": "functools.partial membekukan",
            "options": [
              "sebagian argumen",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "partial membekukan argumen."
          },
          {
            "type": "mc",
            "q": "functools.reduce mengakumulasi",
            "options": [
              "nilai",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "reduce akumulasi."
          },
          {
            "type": "mc",
            "q": "functools.total_ordering mengisi",
            "options": [
              "CSS",
              "route",
              "operasi perbandingan",
              "migrasi"
            ],
            "a": 2,
            "explain": "total_ordering melengkapi."
          },
          {
            "type": "mc",
            "q": "itertools.count menghasilkan",
            "options": [
              "urutan tak terbatas",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "count tak terbatas."
          },
          {
            "type": "mc",
            "q": "itertools.zip_longest memadukan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "iterable beda panjang"
            ],
            "a": 3,
            "explain": "zip_longest."
          },
          {
            "type": "mc",
            "q": "Fungsi helper mengurangi",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
              "context manager",
              "migrasi"
            ],
            "a": 2,
            "explain": "with menggunakan context manager."
          },
          {
            "type": "mc",
            "q": "__enter__/__exit__ mendefinisikan",
            "options": [
              "CSS",
              "context manager",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "__enter__/__exit__ protokol."
          },
          {
            "type": "mc",
            "q": "contextlib.contextmanager membuat",
            "options": [
              "context manager dari generator",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "contextmanager dekorator."
          },
          {
            "type": "mc",
            "q": "with menjamin",
            "options": [
              "CSS",
              "pembersihan",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "with menjamin cleanup."
          },
          {
            "type": "mc",
            "q": "Menangani exception di __exit__ memungkinkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "suppress/teruskan"
            ],
            "a": 3,
            "explain": "__exit__ menangani exception."
          },
          {
            "type": "mc",
            "q": "with dapat menangani",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "beberapa resource"
            ],
            "a": 3,
            "explain": "Beberapa resource dengan with."
          },
          {
            "type": "mc",
            "q": "Nested with dapat",
            "options": [
              "CSS",
              "disederhanakan",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Menggabungkan with."
          },
          {
            "type": "mc",
            "q": "Context manager berguna untuk",
            "options": [
              "lock/file/transaksi",
              "CSS",
              "route",
              "migrasi"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Uji perilaku."
          },
          {
            "type": "mc",
            "q": "Async context manager memakai",
            "options": [
              "async with",
              "CSS",
              "route",
              "migrasi"
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Python memakai re."
          },
          {
            "type": "mc",
            "q": "Mencari kecocokan memakai",
            "options": [
              "CSS",
              "re.search/match",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "search/match mencari."
          },
          {
            "type": "mc",
            "q": "Mengganti memakai",
            "options": [
              "re.sub",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "sub mengganti."
          },
          {
            "type": "mc",
            "q": "Menemukan semua memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "re.findall"
            ],
            "a": 3,
            "explain": "findall menemukan semua."
          },
          {
            "type": "mc",
            "q": "Compile pola memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "r\"...\" menghindari escape."
          },
          {
            "type": "mc",
            "q": "Grup bernama memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Backtracking berat."
          },
          {
            "type": "mc",
            "q": "Modifier flags seperti IGNORECASE",
            "options": [
              "tidak",
              "CSS",
              "route",
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
              "CSS",
              "route"
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
            "q": "List comprehension menghasilkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
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
              "CSS",
              "lazy",
              "route"
            ],
            "a": 2,
            "explain": "Generator mengevaluasi lazy."
          },
          {
            "type": "mc",
            "q": "yield menghasilkan",
            "options": [
              "CSS",
              "route",
              "generator",
              "migrasi"
            ],
            "a": 2,
            "explain": "yield membuat generator."
          },
          {
            "type": "mc",
            "q": "Generator menghemat",
            "options": [
              "CSS",
              "memori",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Lazy hemat memori."
          },
          {
            "type": "mc",
            "q": "Dict comprehension memakai",
            "options": [
              "CSS",
              "{k:v for ...}",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Dict comprehension."
          },
          {
            "type": "mc",
            "q": "Set comprehension memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "{x for x in ...}"
            ],
            "a": 3,
            "explain": "Set comprehension."
          },
          {
            "type": "mc",
            "q": "Comprehension bersarang bisa",
            "options": [
              "CSS",
              "route",
              "kurang terbaca",
              "migrasi"
            ],
            "a": 2,
            "explain": "Nested comprehension sulit dibaca."
          },
          {
            "type": "mc",
            "q": "itertools membantu",
            "options": [
              "CSS",
              "route",
              "kombinasi/permutasi",
              "migrasi"
            ],
            "a": 2,
            "explain": "itertools berguna."
          },
          {
            "type": "mc",
            "q": "Mengonsumsi generator sekali saja",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
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
              "CSS",
              "route",
              "datetime",
              "migrasi"
            ],
            "a": 2,
            "explain": "Python memakai datetime."
          },
          {
            "type": "mc",
            "q": "Waktu sekarang memakai",
            "options": [
              "datetime.now()",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "now mengambil waktu."
          },
          {
            "type": "mc",
            "q": "Format tanggal memakai",
            "options": [
              "CSS",
              ".strftime()",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "strftime memformat."
          },
          {
            "type": "mc",
            "q": "Parse tanggal memakai",
            "options": [
              ".strptime()",
              "CSS",
              "route",
              "migrasi"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Gunakan timezone."
          },
          {
            "type": "mc",
            "q": "timedelta untuk",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "random module."
          },
          {
            "type": "mc",
            "q": "secret untuk",
            "options": [
              "CSS",
              "acak aman",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "secrets untuk kripto."
          },
          {
            "type": "mc",
            "q": "uuid untuk",
            "options": [
              "CSS",
              "id unik",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "uuid membuat id."
          },
          {
            "type": "mc",
            "q": "logging untuk",
            "options": [
              "CSS",
              "pencatatan",
              "route",
              "migrasi"
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
              "CSS",
              "class Nama:",
              "route"
            ],
            "a": 2,
            "explain": "Python memakai class."
          },
          {
            "type": "mc",
            "q": "__init__ adalah",
            "options": [
              "CSS",
              "route",
              "konstruktor",
              "migrasi"
            ],
            "a": 2,
            "explain": "__init__ inisialisasi."
          },
          {
            "type": "mc",
            "q": "self merujuk",
            "options": [
              "instance",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "self menunjuk instance."
          },
          {
            "type": "mc",
            "q": "Inheritance memakai",
            "options": [
              "extends",
              "CSS",
              "route",
              "class Anak(Induk):"
            ],
            "a": 3,
            "explain": "Python memakai ()."
          },
          {
            "type": "mc",
            "q": "super() memanggil",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "method induk"
            ],
            "a": 3,
            "explain": "super memanggil induk."
          },
          {
            "type": "mc",
            "q": "@property membuat",
            "options": [
              "CSS",
              "getter",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "property membuat getter."
          },
          {
            "type": "mc",
            "q": "@staticmethod tidak menerima",
            "options": [
              "CSS",
              "route",
              "self/cls",
              "migrasi"
            ],
            "a": 2,
            "explain": "staticmethod tanpa self."
          },
          {
            "type": "mc",
            "q": "@classmethod menerima",
            "options": [
              "CSS",
              "cls",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "classmethod menerima cls."
          },
          {
            "type": "mc",
            "q": "Dunder method seperti __str__ mengubah",
            "options": [
              "CSS",
              "route",
              "perilaku bawaan",
              "migrasi"
            ],
            "a": 2,
            "explain": "Dunder mengubah perilaku."
          },
          {
            "type": "mc",
            "q": "Mixin memakai",
            "options": [
              "multiple inheritance",
              "CSS",
              "route",
              "migrasi"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Python memakai except."
          },
          {
            "type": "mc",
            "q": "finally dijalankan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "selalu"
            ],
            "a": 3,
            "explain": "finally selalu."
          },
          {
            "type": "mc",
            "q": "else pada try dijalankan bila",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "tidak ada exception"
            ],
            "a": 3,
            "explain": "else saat sukses."
          },
          {
            "type": "mc",
            "q": "raise melempar",
            "options": [
              "CSS",
              "exception",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "raise melempar."
          },
          {
            "type": "mc",
            "q": "Custom exception mewarisi",
            "options": [
              "Error wajib",
              "CSS",
              "route",
              "Exception"
            ],
            "a": 3,
            "explain": "Mewarisi Exception."
          },
          {
            "type": "mc",
            "q": "Menangkap tipe spesifik memakai",
            "options": [
              "CSS",
              "route",
              "except Tipe",
              "migrasi"
            ],
            "a": 2,
            "explain": "except menyebut tipe."
          },
          {
            "type": "mc",
            "q": "with menutup",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "resource otomatis"
            ],
            "a": 3,
            "explain": "with context manager."
          },
          {
            "type": "mc",
            "q": "Menangkap terlalu luas berisiko",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "from merantai exception."
          },
          {
            "type": "mc",
            "q": "Traceback berguna untuk",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "open() dengan with",
              "route",
              "migrasi"
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
              "CSS"
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
              "CSS"
            ],
            "a": 2,
            "explain": "'a' menambah di akhir."
          },
          {
            "type": "mc",
            "q": "Membaca baris memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
              "migrasi"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Tentukan encoding."
          },
          {
            "type": "mc",
            "q": "pathlib memudahkan",
            "options": [
              "CSS",
              "route",
              "manipulasi path",
              "migrasi"
            ],
            "a": 2,
            "explain": "pathlib untuk path."
          },
          {
            "type": "mc",
            "q": "os.path menyediakan",
            "options": [
              "utilitas path",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "os.path utilities."
          },
          {
            "type": "mc",
            "q": "Menulis JSON memakai",
            "options": [
              "json.dump",
              "CSS",
              "route",
              "migrasi"
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
              "CSS",
              "route"
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "pytest populer."
          },
          {
            "type": "mc",
            "q": "Menjalankan pytest memakai",
            "options": [
              "python test",
              "CSS",
              "route",
              "pytest"
            ],
            "a": 3,
            "explain": "pytest menjalankan test."
          },
          {
            "type": "mc",
            "q": "Assertion memakai",
            "options": [
              "assert",
              "expect",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Python memakai assert."
          },
          {
            "type": "mc",
            "q": "Mocking memakai",
            "options": [
              "CSS",
              "unittest.mock",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "unittest.mock."
          },
          {
            "type": "mc",
            "q": "Fixture pada pytest memakai",
            "options": [
              "CSS",
              "@pytest.fixture",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Fixture menyiapkan state."
          },
          {
            "type": "mc",
            "q": "Parametrize memudahkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "banyak kasus"
            ],
            "a": 3,
            "explain": "Parametrize test."
          },
          {
            "type": "mc",
            "q": "Coverage memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
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
              "CSS",
              "route",
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
              "CSS",
              "route",
              "migrasi",
              "metadata/build"
            ],
            "a": 3,
            "explain": "pyproject.toml konfigurasi proyek."
          },
          {
            "type": "mc",
            "q": "Membangun package memakai",
            "options": [
              "CSS",
              "build",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Module build membuat dist."
          },
          {
            "type": "mc",
            "q": "Menerbitkan ke PyPI memakai",
            "options": [
              "twine",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "twine upload."
          },
          {
            "type": "mc",
            "q": "Versioning semantic membantu",
            "options": [
              "CSS",
              "route",
              "kompatibilitas",
              "migrasi"
            ],
            "a": 2,
            "explain": "Semver."
          },
          {
            "type": "mc",
            "q": "Mengunci dependency penting",
            "options": [
              "CSS",
              "reproduksibilitas",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Lock dependency."
          },
          {
            "type": "mc",
            "q": "Wheel adalah",
            "options": [
              "CSS",
              "route",
              "distribusi binary",
              "migrasi"
            ],
            "a": 2,
            "explain": "Wheel paket binary."
          },
          {
            "type": "mc",
            "q": "Source distribution memungkinkan",
            "options": [
              "build dari sumber",
              "CSS",
              "route",
              "migrasi"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Uji instalasi."
          },
          {
            "type": "mc",
            "q": "Dokumentasi package penting",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "RCE",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "eval berbahaya."
          },
          {
            "type": "mc",
            "q": "SQL injection dicegah dengan",
            "options": [
              "CSS",
              "parameterized query",
              "route",
              "migrasi"
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "pickle berbahaya."
          },
          {
            "type": "mc",
            "q": "yaml.load berisiko; gunakan",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Rahasia aman."
          },
          {
            "type": "mc",
            "q": "Menyimpan password memakai",
            "options": [
              "hash kuat",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Hashing."
          },
          {
            "type": "mc",
            "q": "Dependency scanning penting",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "Scan dependency."
          },
          {
            "type": "mc",
            "q": "Path traversal dicegah dengan",
            "options": [
              "CSS",
              "validasi path",
              "route",
              "migrasi"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Hindari rahasia di log."
          },
          {
            "type": "mc",
            "q": "Audit berkala penting",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
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
              "CSS",
              "cProfile",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "cProfile profil."
          },
          {
            "type": "mc",
            "q": "Vectorization mempercepat",
            "options": [
              "komputasi numerik",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "NumPy vectorization."
          },
          {
            "type": "mc",
            "q": "Mengurangi alokasi membantu",
            "options": [
              "CSS",
              "performa",
              "route",
              "migrasi"
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Tipe memengaruhi."
          },
          {
            "type": "mc",
            "q": "Caching membantu",
            "options": [
              "CSS",
              "perhitungan mahal",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Cache mahal."
          },
          {
            "type": "mc",
            "q": "Generator hemat memori",
            "options": [
              "tidak",
              "CSS",
              "route",
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Extension native."
          },
          {
            "type": "mc",
            "q": "Multiprocessing untuk CPU",
            "options": [
              "tidak",
              "CSS",
              "penting",
              "route"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Ukur dulu."
          },
          {
            "type": "mc",
            "q": "Bottleneck jaringan berbeda dari CPU",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Repository data."
          },
          {
            "type": "mc",
            "q": "Service layer menampung",
            "options": [
              "CSS",
              "route",
              "logika bisnis",
              "migrasi"
            ],
            "a": 2,
            "explain": "Service bisnis."
          },
          {
            "type": "mc",
            "q": "Dependency injection memudahkan",
            "options": [
              "CSS",
              "route",
              "pengujian",
              "migrasi"
            ],
            "a": 2,
            "explain": "DI mudah diuji."
          },
          {
            "type": "mc",
            "q": "Pemisahan layer membantu",
            "options": [
              "perawatan",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Pemisahan layer."
          },
          {
            "type": "mc",
            "q": "Protocol typing mengurangi",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Komposisi fleksibel."
          },
          {
            "type": "mc",
            "q": "Domain bebas framework",
            "options": [
              "tidak",
              "CSS",
              "disarankan",
              "route"
            ],
            "a": 2,
            "explain": "Domain bersih."
          },
          {
            "type": "mc",
            "q": "Modularisasi membantu",
            "options": [
              "skalabilitas",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Modul besar."
          },
          {
            "type": "mc",
            "q": "Dokumentasi arsitektur penting",
            "options": [
              "tidak",
              "CSS",
              "route",
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
              "CSS",
              "route"
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
              "CSS",
              "black/ruff",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Black/Ruff format."
          },
          {
            "type": "mc",
            "q": "Linter populer adalah",
            "options": [
              "ruff/flake8",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Ruff/Flake8 lint."
          },
          {
            "type": "mc",
            "q": "Type checker adalah",
            "options": [
              "mypy/pyright",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Mypy/Pyright."
          },
          {
            "type": "mc",
            "q": "Dependency manager modern",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "poetry/uv"
            ],
            "a": 3,
            "explain": "Poetry/uv."
          },
          {
            "type": "mc",
            "q": "Notebook untuk",
            "options": [
              "CSS",
              "eksplorasi data",
              "route",
              "migrasi"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "CI otomasi."
          },
          {
            "type": "mc",
            "q": "Pre-commit membantu",
            "options": [
              "kualitas commit",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Pre-commit hooks."
          },
          {
            "type": "mc",
            "q": "Mengelola versi Python penting",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "Versi konsisten."
          },
          {
            "type": "mc",
            "q": "Dokumentasi memakai",
            "options": [
              "CSS",
              "route",
              "Sphinx/MkDocs",
              "migrasi"
            ],
            "a": 2,
            "explain": "Dokumentasi tool."
          },
          {
            "type": "mc",
            "q": "Menjaga dependency minimal",
            "options": [
              "tidak",
              "CSS",
              "penting",
              "route"
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "async def membuat coroutine."
          },
          {
            "type": "mc",
            "q": "await dipakai untuk",
            "options": [
              "CSS",
              "route",
              "menunggu coroutine",
              "migrasi"
            ],
            "a": 2,
            "explain": "await menunggu."
          },
          {
            "type": "mc",
            "q": "Event loop menjalankan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "coroutine"
            ],
            "a": 3,
            "explain": "Event loop menjalankan async."
          },
          {
            "type": "mc",
            "q": "asyncio.run menjalankan",
            "options": [
              "CSS",
              "route",
              "program async",
              "migrasi"
            ],
            "a": 2,
            "explain": "asyncio.run entrypoint."
          },
          {
            "type": "mc",
            "q": "asyncio.gather menjalankan",
            "options": [
              "beberapa coroutine paralel",
              "CSS",
              "route",
              "migrasi"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Async untuk IO."
          },
          {
            "type": "mc",
            "q": "CPU-bound sebaiknya memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "multiprocessing"
            ],
            "a": 3,
            "explain": "Multiprocessing untuk CPU."
          },
          {
            "type": "mc",
            "q": "aiohttp/httpx untuk",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
              "penting"
            ],
            "a": 3,
            "explain": "Timeout penting."
          },
          {
            "type": "mc",
            "q": "Mencampur sync dan async perlu",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "GIL membatasi CPU paralel."
          },
          {
            "type": "mc",
            "q": "Threading cocok untuk",
            "options": [
              "CPU-bound",
              "CSS",
              "route",
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Multiprocessing untuk CPU."
          },
          {
            "type": "mc",
            "q": "concurrent.futures menyediakan",
            "options": [
              "pool eksekutor",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Futures menyediakan pool."
          },
          {
            "type": "mc",
            "q": "Race condition mengharuskan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "sinkronisasi"
            ],
            "a": 3,
            "explain": "Sinkronisasi untuk data bersama."
          },
          {
            "type": "mc",
            "q": "Queue thread-safe membantu",
            "options": [
              "CSS",
              "komunikasi",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Queue mengkoordinasikan."
          },
          {
            "type": "mc",
            "q": "Sub-interpreter/GIL-free berkembang",
            "options": [
              "untuk paralelisme",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Perkembangan Python baru."
          },
          {
            "type": "mc",
            "q": "Mengukur beban penting",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Tutup executor."
          },
          {
            "type": "mc",
            "q": "Menghindari shared mutable global",
            "options": [
              "tidak",
              "CSS",
              "route",
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
              "CSS",
              "route",
              "migrasi",
              "array numerik"
            ],
            "a": 3,
            "explain": "NumPy array efisien."
          },
          {
            "type": "mc",
            "q": "Pandas menyediakan",
            "options": [
              "CSS",
              "route",
              "DataFrame",
              "migrasi"
            ],
            "a": 2,
            "explain": "Pandas DataFrame."
          },
          {
            "type": "mc",
            "q": "Vectorization membantu",
            "options": [
              "CSS",
              "route",
              "performa",
              "migrasi"
            ],
            "a": 2,
            "explain": "Vectorization cepat."
          },
          {
            "type": "mc",
            "q": "Matplotlib untuk",
            "options": [
              "CSS",
              "route",
              "visualisasi",
              "migrasi"
            ],
            "a": 2,
            "explain": "Matplotlib plotting."
          },
          {
            "type": "mc",
            "q": "scikit-learn untuk",
            "options": [
              "machine learning",
              "CSS",
              "route",
              "migrasi"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Kelola memori."
          },
          {
            "type": "mc",
            "q": "Type data DataFrame memengaruhi",
            "options": [
              "CSS",
              "route",
              "performa",
              "migrasi"
            ],
            "a": 2,
            "explain": "Tipe data memengaruhi."
          },
          {
            "type": "mc",
            "q": "Notebook memudahkan",
            "options": [
              "eksplorasi",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Jupyter untuk eksplorasi."
          },
          {
            "type": "mc",
            "q": "Reproducibility penting",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
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
              "CSS",
              "route",
              "dokumentasi/alat",
              "migrasi"
            ],
            "a": 2,
            "explain": "Type hint memberi info."
          },
          {
            "type": "mc",
            "q": "mypy memeriksa",
            "options": [
              "CSS",
              "tipe statis",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "mypy static checking."
          },
          {
            "type": "mc",
            "q": "Protocol mendukung",
            "options": [
              "CSS",
              "route",
              "structural typing",
              "migrasi"
            ],
            "a": 2,
            "explain": "Protocol typing struktural."
          },
          {
            "type": "mc",
            "q": "dataclass mengurangi",
            "options": [
              "boilerplate",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "dataclass ringkas."
          },
          {
            "type": "mc",
            "q": "Enum untuk",
            "options": [
              "CSS",
              "konstanta",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Enum konstanta."
          },
          {
            "type": "mc",
            "q": "Type generics memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Konsistensi penting."
          },
          {
            "type": "mc",
            "q": "Linter memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "ruff/flake8"
            ],
            "a": 3,
            "explain": "Linter menjaga kualitas."
          },
          {
            "type": "mc",
            "q": "Formatter memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
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
              "CSS",
              "route",
              "Django/Flask/FastAPI",
              "migrasi"
            ],
            "a": 2,
            "explain": "Framework web Python."
          },
          {
            "type": "mc",
            "q": "FastAPI unggul pada",
            "options": [
              "CSS",
              "route",
              "async dan validasi otomatis",
              "migrasi"
            ],
            "a": 2,
            "explain": "FastAPI async + validasi."
          },
          {
            "type": "mc",
            "q": "Pydantic untuk",
            "options": [
              "CSS",
              "validasi data",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Pydantic validasi."
          },
          {
            "type": "mc",
            "q": "Django menyediakan",
            "options": [
              "CSS",
              "ORM/admin",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Django ORM/admin."
          },
          {
            "type": "mc",
            "q": "Routing memetakan",
            "options": [
              "CSS",
              "route",
              "URL ke handler",
              "migrasi"
            ],
            "a": 2,
            "explain": "Routing URL."
          },
          {
            "type": "mc",
            "q": "Middleware memproses",
            "options": [
              "CSS",
              "request",
              "route",
              "migrasi"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Validasi server."
          },
          {
            "type": "mc",
            "q": "Dokumentasi API otomatis membantu",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "OpenAPI otomatis."
          },
          {
            "type": "mc",
            "q": "Observability penting",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
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
