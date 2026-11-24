/* CodeDuo — blok konten: topik "C++" (dipisah dari Blok Web).
 * 1 topik (cpp) × 31 pelajaran (10 Dasar, 10 Menengah, 11 Advance). Total 305 soal.
 * Engine di content.js (barrel) & app.js. Format tipe soal: mc | fill | code | preview | arrange.
 * ESM murni: dipakai Vite (browser) & Node (test).
 */
'use strict';

const CONTENT_CPP = [
  {
    "id": "cpp",
    "name": "C++",
    "icon": "➕",
    "color": "#00599c",
    "desc": "C++: OOP, RAII, dan koleksi STL",
    "lessons": [
      {
        "id": "cpp-1",
        "level": "Dasar",
        "title": "Pengenalan C++",
        "exercises": [
          {
            "type": "mc",
            "q": "C++ adalah bahasa",
            "options": [
              "compiled berorientasi objek",
              "interpreted",
              "sama dengan class",
              "std::cin >> / getline"
            ],
            "a": 0,
            "explain": "C++ dikompilasi dan OOP."
          },
          {
            "type": "mc",
            "q": "Berkas sumber C++ umumnya",
            "options": [
              ".c",
              ".cpp",
              ".cs",
              ".cx"
            ],
            "a": 1,
            "explain": "Berkas sumber .cpp."
          },
          {
            "type": "mc",
            "q": "Header C++ umumnya",
            "options": [
              ".hh only",
              "algoritma",
              "aliran data",
              ".h/.hpp"
            ],
            "a": 3,
            "explain": "Header .h/.hpp."
          },
          {
            "type": "mc",
            "q": "Mengompilasi C++ memakai",
            "options": [
              "gcc only",
              "javac",
              "g++/clang++",
              "manual new/delete"
            ],
            "a": 2,
            "explain": "Compiler C++."
          },
          {
            "type": "mc",
            "q": "Header IO C++ adalah",
            "options": [
              "<stdio.h>",
              "sering",
              "<iostream>",
              "inferensi tipe"
            ],
            "a": 2,
            "explain": "C++ memakai iostream."
          },
          {
            "type": "mc",
            "q": "Fungsi utama C++ adalah",
            "options": [
              "func main()",
              "int main()",
              "kepemilikan tunggal",
              "std::ios::binary"
            ],
            "a": 1,
            "explain": "Entry point int main."
          },
          {
            "type": "mc",
            "q": "Menampilkan output memakai",
            "options": [
              "printf always",
              "std::cout",
              "echo",
              "bool"
            ],
            "a": 1,
            "explain": "C++ memakai cout."
          },
          {
            "type": "mc",
            "q": "Namespace standar adalah",
            "options": [
              "main",
              "C++",
              "panjang",
              "std"
            ],
            "a": 3,
            "explain": "C++ memakai std."
          },
          {
            "type": "mc",
            "q": "C++ mendukung",
            "options": [
              "Array dinamis yang dapat bertambah ukurannya",
              "nama sama beda parameter",
              "OOP, generics, dan fungsional",
              "referensi tak bisa null"
            ],
            "a": 2,
            "explain": "C++ multiparadigma."
          },
          {
            "type": "mc",
            "q": "Standard library C++ adalah",
            "options": [
              "alias",
              "state",
              "STL",
              "panjang"
            ],
            "a": 2,
            "explain": "STL koleksi/algoritma."
          }
        ]
      },
      {
        "id": "cpp-2",
        "level": "Dasar",
        "title": "Variabel & Tipe",
        "exercises": [
          {
            "type": "mc",
            "q": "Tipe bilangan bulat",
            "options": [
              "int",
              "Integer",
              "long only",
              "umum"
            ],
            "a": 0,
            "explain": "C++ memakai int."
          },
          {
            "type": "mc",
            "q": "Tipe karakter",
            "options": [
              "string",
              "char",
              "Str",
              "RAII"
            ],
            "a": 1,
            "explain": "C++ memakai char."
          },
          {
            "type": "mc",
            "q": "Tipe boolean",
            "options": [
              "Boolean",
              "bit",
              "std::stoi",
              "bool"
            ],
            "a": 3,
            "explain": "C++ memakai bool."
          },
          {
            "type": "mc",
            "q": "Membuat konstanta memakai",
            "options": [
              "final",
              "val",
              "const/constexpr",
              "konfigurasi"
            ],
            "a": 2,
            "explain": "C++ memakai const/constexpr."
          },
          {
            "type": "mc",
            "q": "Deklarasi variabel",
            "options": [
              "var nama",
              "operator kustom",
              "hash",
              "tipe nama;"
            ],
            "a": 3,
            "explain": "C++ memakai tipe eksplisit."
          },
          {
            "type": "mc",
            "q": "auto memungkinkan",
            "options": [
              "UB/memori",
              "std::error_code",
              "inferensi tipe",
              "iterasi"
            ],
            "a": 2,
            "explain": "C++11 auto inferensi."
          },
          {
            "type": "mc",
            "q": "Literal pointer kosong modern di C++11 (`nullptr`) menggantikan makro lama",
            "options": [
              "void",
              "override",
              "NULL",
              "ukuran"
            ],
            "a": 2,
            "explain": "C++11 nullptr."
          },
          {
            "type": "mc",
            "q": "Ukuran tipe memakai",
            "options": [
              "size()",
              "pesan error",
              "sizeof",
              "iterator"
            ],
            "a": 2,
            "explain": "sizeof byte."
          },
          {
            "type": "mc",
            "q": "Cast modern memakai",
            "options": [
              "C cast only",
              "static_cast/dynamic_cast",
              "class Nama {}",
              "array dinamis"
            ],
            "a": 1,
            "explain": "C++ cast eksplisit."
          },
          {
            "type": "mc",
            "q": "Referensi memakai",
            "options": [
              "*",
              "&",
              "UB",
              "template<typename T>"
            ],
            "a": 1,
            "explain": "C++ referensi memakai &."
          }
        ]
      },
      {
        "id": "cpp-3",
        "level": "Dasar",
        "title": "Kontrol Alur",
        "exercises": [
          {
            "type": "mc",
            "q": "Percabangan memakai",
            "options": [
              "if/else if/else",
              "if/elif",
              "salinan string",
              "hasil async"
            ],
            "a": 0,
            "explain": "C++ memakai else if."
          },
          {
            "type": "mc",
            "q": "Switch memakai",
            "options": [
              "when",
              "nullptr",
              ".find()",
              "switch/case"
            ],
            "a": 3,
            "explain": "C++ memakai switch."
          },
          {
            "type": "mc",
            "q": "Perulangan for memakai",
            "options": [
              "for x in",
              "mmap",
              "for (...)",
              "clang-format"
            ],
            "a": 2,
            "explain": "For klasik."
          },
          {
            "type": "mc",
            "q": "Range-based for memakai",
            "options": [
              "koleksi key-value terurut",
              "pointer ke const",
              "fungsi per elemen",
              "for (auto x : c)"
            ],
            "a": 3,
            "explain": "C++11 range for."
          },
          {
            "type": "mc",
            "q": "while mengulang selama",
            "options": [
              "antar muka",
              "mengakses member",
              "kondisi benar",
              "<iostream>"
            ],
            "a": 2,
            "explain": "While bergantung."
          },
          {
            "type": "mc",
            "q": "do-while menjalankan",
            "options": [
              "kesalahan memori",
              "state",
              "shared_ptr",
              "minimal sekali"
            ],
            "a": 3,
            "explain": "Minimal sekali."
          },
          {
            "type": "mc",
            "q": "break/continue berlaku",
            "options": [
              "perf/VTune",
              "satu instance",
              "over-engineering",
              "di loop"
            ],
            "a": 3,
            "explain": "Mengatur loop."
          },
          {
            "type": "mc",
            "q": "Ternary memakai",
            "options": [
              "? :",
              "if()",
              "keamanan",
              "T&&"
            ],
            "a": 0,
            "explain": "C++ memakai ?:."
          },
          {
            "type": "mc",
            "q": "Operator logika memakai",
            "options": [
              "&& || !",
              "and or not always",
              "class Anak : public Induk",
              "tidak mengubah objek"
            ],
            "a": 0,
            "explain": "C++ memakai && || !."
          },
          {
            "type": "mc",
            "q": "Initialization list memakai",
            "options": [
              "{}",
              "[]",
              "umum",
              "char"
            ],
            "a": 0,
            "explain": "C++11 {} init."
          }
        ]
      },
      {
        "id": "cpp-4",
        "level": "Dasar",
        "title": "Function",
        "exercises": [
          {
            "type": "mc",
            "q": "Mendefinisikan fungsi memakai",
            "options": [
              "function nama",
              "if/else if/else",
              "inlining",
              "tipe nama(params) {}"
            ],
            "a": 3,
            "explain": "C++ memakai tipe balik."
          },
          {
            "type": "mc",
            "q": "Default argument memungkinkan",
            "options": [
              "menyalin objek",
              "parameter opsional",
              "is_open()",
              "pemilihan overload"
            ],
            "a": 1,
            "explain": "Default argument."
          },
          {
            "type": "mc",
            "q": "Function overloading memungkinkan",
            "options": [
              "Satu pemilik eksklusif mengelola resource",
              "nama sama beda parameter",
              "&& || !",
              "diinisialisasi saat dibuat"
            ],
            "a": 1,
            "explain": "Overload fungsi."
          },
          {
            "type": "mc",
            "q": "Referensi parameter memakai",
            "options": [
              "tipe&",
              "tipe*",
              "class generik",
              "try/catch"
            ],
            "a": 0,
            "explain": "C++ memakai tipe&."
          },
          {
            "type": "mc",
            "q": "Pass by value berarti",
            "options": [
              "referensi",
              ": member(nilai)",
              "salinan",
              "alias"
            ],
            "a": 2,
            "explain": "By value salinan."
          },
          {
            "type": "mc",
            "q": "Pass by reference memungkinkan",
            "options": [
              "mengubah asli",
              "tidak melempar",
              "comparator/predikat",
              "std::filesystem"
            ],
            "a": 0,
            "explain": "Referensi memberi efek."
          },
          {
            "type": "mc",
            "q": "const reference menghindari",
            "options": [
              "fungsi/method",
              "unik terurut",
              "alamat",
              "salinan mahal"
            ],
            "a": 3,
            "explain": "Const ref efisien."
          },
          {
            "type": "mc",
            "q": "inline menyarankan",
            "options": [
              "inlining",
              "std::vector::at",
              "build",
              "nilai opsional"
            ],
            "a": 0,
            "explain": "Inline hint."
          },
          {
            "type": "mc",
            "q": "Lambda memakai",
            "options": [
              "function()",
              "hasil async",
              "[capture](params) {}",
              "tanpa virtual"
            ],
            "a": 2,
            "explain": "C++11 lambda."
          },
          {
            "type": "mc",
            "q": "Variadic template memungkinkan",
            "options": [
              "std::string",
              "membatasi modifikasi",
              "evaluasi compile-time",
              "parameter variabel"
            ],
            "a": 3,
            "explain": "Variadic template."
          }
        ]
      },
      {
        "id": "cpp-5",
        "level": "Dasar",
        "title": "Class & Object",
        "exercises": [
          {
            "type": "mc",
            "q": "Mendefinisikan class memakai",
            "options": [
              "struct only",
              "class Nama {}",
              "tanpa virtual",
              "algoritma"
            ],
            "a": 1,
            "explain": "C++ memakai class."
          },
          {
            "type": "mc",
            "q": "Konstruktor bernama",
            "options": [
              "constructor",
              "sama dengan class",
              "valid tapi tak ditentukan",
              "Array dinamis yang dapat bertambah ukurannya"
            ],
            "a": 1,
            "explain": "Konstruktor nama class."
          },
          {
            "type": "mc",
            "q": "Destruktor memakai",
            "options": [
              "destroy()",
              "over-engineering",
              "sering",
              "~Nama()"
            ],
            "a": 3,
            "explain": "C++ memakai ~Nama."
          },
          {
            "type": "mc",
            "q": "Membuat objek memakai",
            "options": [
              "Nama obj; / new Nama()",
              "pointer ke const",
              "fungsi per elemen",
              "Merupakan alias yang harus terikat pada objek saat inisialisasi"
            ],
            "a": 0,
            "explain": "Stack atau heap."
          },
          {
            "type": "mc",
            "q": "Access specifier meliputi",
            "options": [
              "union type-safe",
              "sinkronisasi",
              "objek kompleks",
              "public/private/protected"
            ],
            "a": 3,
            "explain": "C++ tiga access."
          },
          {
            "type": "mc",
            "q": "Pewarisan memakai",
            "options": [
              "extends",
              "class Anak : public Induk",
              "for (auto x : c)",
              "koleksi key-value terurut"
            ],
            "a": 1,
            "explain": "C++ memakai :."
          },
          {
            "type": "mc",
            "q": "Method virtual memungkinkan",
            "options": [
              "std::thread",
              "deteksi race",
              "dynamic dispatch",
              "vektorisasi"
            ],
            "a": 2,
            "explain": "Virtual method."
          },
          {
            "type": "mc",
            "q": "Specifier C++11 pada metode turunan untuk memastikan metode tersebut menimpa fungsi virtual induk adalah",
            "options": [
              "@override",
              "override",
              "membatasi modifikasi",
              "evaluasi compile-time"
            ],
            "a": 1,
            "explain": "C++11 override."
          },
          {
            "type": "mc",
            "q": "Constructor member init list memakai",
            "options": [
              ": member(nilai)",
              "std::vector::at",
              "nilai opsional",
              "-O2/-O3"
            ],
            "a": 0,
            "explain": "Init list konstruktor."
          },
          {
            "type": "mc",
            "q": "this adalah",
            "options": [
              "tidak mengubah objek",
              "objek dapat dipindah",
              "Satu pemilik eksklusif mengelola resource",
              "pointer ke objek"
            ],
            "a": 3,
            "explain": "C++ this pointer."
          }
        ]
      },
      {
        "id": "cpp-6",
        "level": "Dasar",
        "title": "Struct & Enum",
        "exercises": [
          {
            "type": "mc",
            "q": "Struct di C++ mirip class karena",
            "options": [
              "default public",
              "std::to_string",
              "template/CRTP",
              "akses memori"
            ],
            "a": 0,
            "explain": "Struct default public."
          },
          {
            "type": "mc",
            "q": "Enum class lebih aman karena",
            "options": [
              "operasi atomik",
              "optimasi",
              "efisiensi",
              "scoped"
            ],
            "a": 3,
            "explain": "Enum class scoped."
          },
          {
            "type": "mc",
            "q": "Mengakses member struct memakai",
            "options": [
              "alamat",
              ". / ->",
              "dihindari",
              "umum"
            ],
            "a": 1,
            "explain": "Dot/arrow."
          },
          {
            "type": "mc",
            "q": "Struct dapat berisi",
            "options": [
              "nilai opsional",
              "RAII",
              "method",
              "-O2/-O3"
            ],
            "a": 2,
            "explain": "Struct dapat method."
          },
          {
            "type": "mc",
            "q": "Aggregate initialization memakai",
            "options": [
              "throw",
              "nilai",
              "build",
              "{}"
            ],
            "a": 3,
            "explain": "Brace init."
          },
          {
            "type": "mc",
            "q": "Enum memberi",
            "options": [
              "komputasi compile-time",
              "std::cout",
              "tipe nama;",
              "nama konstanta"
            ],
            "a": 3,
            "explain": "Enum nama konstanta."
          },
          {
            "type": "mc",
            "q": "Struct padding memengaruhi",
            "options": [
              "dipasangkan",
              "GoogleMock",
              "ukuran",
              "reference cycle"
            ],
            "a": 2,
            "explain": "Padding ukuran."
          },
          {
            "type": "mc",
            "q": "typedef/using membuat",
            "options": [
              "objek kompleks",
              ".h/.hpp",
              "alias",
              "int"
            ],
            "a": 2,
            "explain": "Alias tipe."
          },
          {
            "type": "mc",
            "q": "Menghindari struct raksasa",
            "options": [
              "tidak",
              "perilaku khusus",
              "penting",
              "std::exception"
            ],
            "a": 2,
            "explain": "Pecah struct."
          },
          {
            "type": "mc",
            "q": "Dokumentasi struct penting",
            "options": [
              "ya",
              "tidak",
              "*",
              "std"
            ],
            "a": 0,
            "explain": "Dokumentasi."
          }
        ]
      },
      {
        "id": "cpp-7",
        "level": "Dasar",
        "title": "Operator Overloading",
        "exercises": [
          {
            "type": "mc",
            "q": "Operator overloading memungkinkan",
            "options": [
              "operator kustom",
              "destructor/copy/move",
              "otomatis",
              "batasan template"
            ],
            "a": 0,
            "explain": "Overload operator."
          },
          {
            "type": "mc",
            "q": "operator+ didefinisikan sebagai",
            "options": [
              "switch/case",
              "fungsi/method",
              "tipe nama(params) {}",
              "[capture](params) {}"
            ],
            "a": 1,
            "explain": "Definisi operator."
          },
          {
            "type": "mc",
            "q": "Konvensi operator penting",
            "options": [
              "tidak",
              "std",
              "*",
              "ya"
            ],
            "a": 3,
            "explain": "Ikuti konvensi."
          },
          {
            "type": "mc",
            "q": "Friend function memungkinkan",
            "options": [
              "akses private",
              "sizeof",
              "minimal sekali",
              "salinan"
            ],
            "a": 0,
            "explain": "Friend akses."
          },
          {
            "type": "mc",
            "q": "Operator harus masuk akal",
            "options": [
              "tidak",
              "umum",
              "ya",
              "char"
            ],
            "a": 2,
            "explain": "Jangan membingungkan."
          },
          {
            "type": "mc",
            "q": "Stream operator <<",
            "options": [
              "efisiensi",
              "sering dioverload",
              "int main()",
              "const/constexpr"
            ],
            "a": 1,
            "explain": "Overload <<."
          },
          {
            "type": "mc",
            "q": "Comparator operator",
            "options": [
              "std::stoi",
              "polimorfisme runtime",
              "sering dipakai",
              "kesalahan memori"
            ],
            "a": 2,
            "explain": "Comparator."
          },
          {
            "type": "mc",
            "q": "Overloading berlebihan berisiko",
            "options": [
              "pembuatan objek",
              "komposisi algoritma",
              "kebingungan",
              ".cpp"
            ],
            "a": 2,
            "explain": "Gunakan wajar."
          },
          {
            "type": "mc",
            "q": "Testing operator penting",
            "options": [
              "tidak",
              "T&&",
              "int",
              "ya"
            ],
            "a": 3,
            "explain": "Testing."
          },
          {
            "type": "mc",
            "q": "Dokumentasi penting",
            "options": [
              "tidak",
              "wajib",
              "ya",
              "bool"
            ],
            "a": 2,
            "explain": "Dokumentasi."
          }
        ]
      },
      {
        "id": "cpp-8",
        "level": "Dasar",
        "title": "STL Container",
        "exercises": [
          {
            "type": "mc",
            "q": "Vector adalah",
            "options": [
              "v[i] / v.at(i)",
              "std::to_string",
              "array dinamis",
              "template/CRTP"
            ],
            "a": 2,
            "explain": "vector dinamis."
          },
          {
            "type": "mc",
            "q": "Map adalah",
            "options": [
              "koleksi key-value terurut",
              "pointer ke const",
              "fungsi per elemen",
              "Merupakan alias yang harus terikat pada objek saat inisialisasi"
            ],
            "a": 0,
            "explain": "map terurut."
          },
          {
            "type": "mc",
            "q": "unordered_map memakai",
            "options": [
              "hash",
              ".substr()",
              "abstract",
              "dipasangkan"
            ],
            "a": 0,
            "explain": "unordered hash."
          },
          {
            "type": "mc",
            "q": "Set menyimpan",
            "options": [
              "unik terurut",
              "sinkronisasi",
              "realloc",
              "objek kompleks"
            ],
            "a": 0,
            "explain": "set unik."
          },
          {
            "type": "mc",
            "q": "Menambah vector memakai",
            "options": [
              "append",
              ": member(nilai)",
              "alias",
              "push_back"
            ],
            "a": 3,
            "explain": "push_back menambah."
          },
          {
            "type": "mc",
            "q": "Ukuran container memakai",
            "options": [
              ".length",
              ".size()",
              "tidak melempar",
              "comparator/predikat"
            ],
            "a": 1,
            "explain": "size()."
          },
          {
            "type": "mc",
            "q": "Iterasi container memakai",
            "options": [
              "iterator/range for",
              "fungsi/method",
              "unik terurut",
              ".size()/.length()"
            ],
            "a": 0,
            "explain": "Iterator/range-for."
          },
          {
            "type": "mc",
            "q": "Mengakses vector memakai",
            "options": [
              "v.get(i)",
              "std::vector::at",
              "v[i] / v.at(i)",
              "build"
            ],
            "a": 2,
            "explain": "Operator [] atau at()."
          },
          {
            "type": "mc",
            "q": "String C++ adalah",
            "options": [
              "std::string",
              "char* only",
              "if/else if/else",
              "inlining"
            ],
            "a": 0,
            "explain": "C++ memakai std::string."
          },
          {
            "type": "mc",
            "q": "Container memerlukan",
            "options": [
              "menyalin objek",
              "is_open()",
              "#include sesuai",
              "pemilihan overload"
            ],
            "a": 2,
            "explain": "Sertakan header."
          }
        ]
      },
      {
        "id": "cpp-9",
        "level": "Dasar",
        "title": "Pointer & Reference",
        "exercises": [
          {
            "type": "mc",
            "q": "Pointer menyimpan",
            "options": [
              "nilai",
              "alamat",
              "string",
              "waktu kompilasi"
            ],
            "a": 1,
            "explain": "Pointer alamat."
          },
          {
            "type": "mc",
            "q": "Referensi adalah",
            "options": [
              "parameter opsional",
              "alias objek",
              "parameter variabel",
              "default public"
            ],
            "a": 1,
            "explain": "Referensi alias."
          },
          {
            "type": "mc",
            "q": "Referensi harus",
            "options": [
              "fungsi per elemen",
              "Merupakan alias yang harus terikat pada objek saat inisialisasi",
              "sama dengan class",
              "diinisialisasi saat dibuat"
            ],
            "a": 3,
            "explain": "Referensi wajib init."
          },
          {
            "type": "mc",
            "q": "Pointer dapat",
            "options": [
              "nullptr",
              "dynamic dispatch",
              "nama konstanta",
              "akses private"
            ],
            "a": 0,
            "explain": "Pointer boleh nullptr."
          },
          {
            "type": "mc",
            "q": "Bar operator &",
            "options": [
              "clang-format",
              "mengambil alamat",
              "std::thread",
              "deteksi race"
            ],
            "a": 1,
            "explain": "& ambil alamat."
          },
          {
            "type": "mc",
            "q": "Dereference memakai",
            "options": [
              "&",
              "->",
              "ya",
              "*"
            ],
            "a": 3,
            "explain": "Operator *."
          },
          {
            "type": "mc",
            "q": "Arrow dipakai untuk",
            "options": [
              "referensi tak bisa null",
              "delete tidak dipanggil",
              "build system generator",
              "pointer ke objek"
            ],
            "a": 3,
            "explain": "Arrow akses member."
          },
          {
            "type": "mc",
            "q": "Reference vs pointer",
            "options": [
              "perilaku tak terdefinisi",
              "Masa hidup objek berakhir",
              "Nama obj; / new Nama()",
              "referensi tak bisa null"
            ],
            "a": 3,
            "explain": "Referensi lebih aman."
          },
          {
            "type": "mc",
            "q": "Pointer ke const",
            "options": [
              "membatasi modifikasi",
              "std::mutex",
              "perf/VTune",
              "satu instance"
            ],
            "a": 0,
            "explain": "Pointer const."
          },
          {
            "type": "mc",
            "q": "Memory management penting",
            "options": [
              "tidak",
              "ya",
              "T&&",
              "int"
            ],
            "a": 1,
            "explain": "Kelola memori."
          }
        ]
      },
      {
        "id": "cpp-10",
        "level": "Dasar",
        "title": "String & IO",
        "exercises": [
          {
            "type": "mc",
            "q": "Menggabungkan string memakai",
            "options": [
              "std::ios::binary",
              "+ / append",
              "perilaku khusus",
              "std::exception"
            ],
            "a": 1,
            "explain": "C++ string mendukung +."
          },
          {
            "type": "mc",
            "q": "Panjang string memakai",
            "options": [
              ".len()",
              "salinan mahal",
              ".size()/.length()",
              "dynamic dispatch"
            ],
            "a": 2,
            "explain": "size/length."
          },
          {
            "type": "mc",
            "q": "Mengambil substring memakai",
            "options": [
              ".slice()",
              "gcov/llvm-cov",
              "unique_ptr",
              ".substr()"
            ],
            "a": 3,
            "explain": "substr."
          },
          {
            "type": "mc",
            "q": "Mencari substring memakai",
            "options": [
              ".indexOf()",
              "std",
              ".find()",
              "inferensi tipe"
            ],
            "a": 2,
            "explain": "find mencari."
          },
          {
            "type": "mc",
            "q": "Input string memakai",
            "options": [
              "std::cin >> / getline",
              "scanf only",
              "Masa hidup objek pemiliknya",
              "for (auto x : c)"
            ],
            "a": 0,
            "explain": "cin/getline."
          },
          {
            "type": "mc",
            "q": "Output memakai",
            "options": [
              "printf only",
              "override",
              "ukuran",
              "std::cout"
            ],
            "a": 3,
            "explain": "cout output."
          },
          {
            "type": "mc",
            "q": "Format output memakai",
            "options": [
              "OOP, generics, dan fungsional",
              "pointer ke objek",
              "std::format (C++20) / printf",
              "ubah di method const"
            ],
            "a": 2,
            "explain": "Format output."
          },
          {
            "type": "mc",
            "q": "Konversi string ke int memakai",
            "options": [
              "std::stoi",
              "atoi only",
              "tipe&",
              "class Nama {}"
            ],
            "a": 0,
            "explain": "stoi konversi."
          },
          {
            "type": "mc",
            "q": "Konversi int ke string memakai",
            "options": [
              "std::to_string",
              "str()",
              "konfigurasi",
              "preprocessor include"
            ],
            "a": 0,
            "explain": "to_string."
          },
          {
            "type": "mc",
            "q": "String mutable",
            "options": [
              "ya",
              "tidak",
              "state",
              "range"
            ],
            "a": 0,
            "explain": "std::string dapat diubah."
          }
        ]
      },
      {
        "id": "cpp-11",
        "level": "Menengah",
        "title": "Const Correctness",
        "exercises": [
          {
            "type": "mc",
            "q": "const member function berarti",
            "options": [
              "perilaku tak terdefinisi",
              "Masa hidup objek berakhir",
              "Nama obj; / new Nama()",
              "tidak mengubah objek"
            ],
            "a": 3,
            "explain": "Const method."
          },
          {
            "type": "mc",
            "q": "const reference menghindari",
            "options": [
              "unik terurut",
              "alamat",
              "salinan",
              ".size()/.length()"
            ],
            "a": 2,
            "explain": "Const ref."
          },
          {
            "type": "mc",
            "q": "mutable memungkinkan",
            "options": [
              "Merupakan alias yang harus terikat pada objek saat inisialisasi",
              "sama dengan class",
              "std::cin >> / getline",
              "ubah di method const"
            ],
            "a": 3,
            "explain": "mutable."
          },
          {
            "type": "mc",
            "q": "constexpr memungkinkan",
            "options": [
              "sering dipakai",
              "evaluasi compile-time",
              "iterator/range for",
              "mengambil alamat"
            ],
            "a": 1,
            "explain": "constexpr."
          },
          {
            "type": "mc",
            "q": "const correctness meningkatkan",
            "options": [
              "keamanan",
              "comparator/predikat",
              "std::filesystem",
              "konfigurasi"
            ],
            "a": 0,
            "explain": "Keamanan."
          },
          {
            "type": "mc",
            "q": "Menandai method const penting",
            "options": [
              "ya",
              "tidak",
              "hash",
              "T&&"
            ],
            "a": 0,
            "explain": "Konsistensi."
          },
          {
            "type": "mc",
            "q": "const_cast sebaiknya",
            "options": [
              "try/catch",
              "elemen",
              "dihindari",
              "UB/memori"
            ],
            "a": 2,
            "explain": "Hindari const_cast."
          },
          {
            "type": "mc",
            "q": "Pointer const berbeda dari",
            "options": [
              "pointer ke const",
              "Array dinamis yang dapat bertambah ukurannya",
              "nama sama beda parameter",
              "referensi tak bisa null"
            ],
            "a": 0,
            "explain": "Perbedaan const."
          },
          {
            "type": "mc",
            "q": "Testing const penting",
            "options": [
              "ya",
              "tidak",
              "*",
              "std"
            ],
            "a": 0,
            "explain": "Testing."
          },
          {
            "type": "mc",
            "q": "Dokumentasi penting",
            "options": [
              "tidak",
              "async",
              "ya",
              "{}"
            ],
            "a": 2,
            "explain": "Dokumentasi."
          }
        ]
      },
      {
        "id": "cpp-12",
        "level": "Menengah",
        "title": "Inheritance & Polymorphism",
        "exercises": [
          {
            "type": "mc",
            "q": "Virtual function memungkinkan",
            "options": [
              "dynamic dispatch",
              "string",
              "waktu kompilasi",
              "exception safety"
            ],
            "a": 0,
            "explain": "Virtual dispatch."
          },
          {
            "type": "mc",
            "q": "Pure virtual membuat class",
            "options": [
              "parameter opsional",
              "parameter variabel",
              "default public",
              "abstract"
            ],
            "a": 3,
            "explain": "Pure virtual abstract."
          },
          {
            "type": "mc",
            "q": "Virtual destructor penting pada",
            "options": [
              "std::exception",
              "kemunculan",
              "POSIX/Winsock",
              "base class"
            ],
            "a": 3,
            "explain": "Virtual destructor."
          },
          {
            "type": "mc",
            "q": "Objective polymorphism",
            "options": [
              "polimorfisme runtime",
              "dynamic dispatch",
              "nama konstanta",
              "akses private"
            ],
            "a": 0,
            "explain": "Runtime poly."
          },
          {
            "type": "mc",
            "q": "Static polymorphism via",
            "options": [
              "clang-format",
              "template/CRTP",
              "std::thread",
              "deteksi race"
            ],
            "a": 1,
            "explain": "Static poly."
          },
          {
            "type": "mc",
            "q": "Slicing object terjadi saat",
            "options": [
              "Merupakan alias yang harus terikat pada objek saat inisialisasi",
              "pass by value base",
              "sama dengan class",
              "std::cin >> / getline"
            ],
            "a": 1,
            "explain": "Object slicing."
          },
          {
            "type": "mc",
            "q": "Composition over inheritance",
            "options": [
              "tidak",
              "vcpkg/conan",
              "salinan string",
              "disarankan"
            ],
            "a": 3,
            "explain": "Komposisi."
          },
          {
            "type": "mc",
            "q": "Multiple inheritance berisiko",
            "options": [
              ".size()",
              "nullptr",
              ".find()",
              "diamond problem"
            ],
            "a": 3,
            "explain": "Diamond."
          },
          {
            "type": "mc",
            "q": "Interface via abstract class",
            "options": [
              "std::mutex",
              "umum",
              "perf/VTune",
              "sering"
            ],
            "a": 1,
            "explain": "Interface abstrak."
          },
          {
            "type": "mc",
            "q": "Testing polymorphic penting",
            "options": [
              "tidak",
              "T&&",
              "int",
              "ya"
            ],
            "a": 3,
            "explain": "Testing."
          }
        ]
      },
      {
        "id": "cpp-13",
        "level": "Menengah",
        "title": "Memory Management",
        "exercises": [
          {
            "type": "mc",
            "q": "new/delete manual harus",
            "options": [
              "dipasangkan",
              "<iostream>",
              "bool",
              "salinan mahal"
            ],
            "a": 0,
            "explain": "Pasangkan new/delete."
          },
          {
            "type": "mc",
            "q": "Smart pointer menggantikan",
            "options": [
              "GoogleTest/Catch2",
              "kepemilikan tunggal",
              "manual new/delete",
              "std::ios::binary"
            ],
            "a": 2,
            "explain": "Smart pointer."
          },
          {
            "type": "mc",
            "q": "Memory leak terjadi bila",
            "options": [
              "pointer ke const",
              "fungsi per elemen",
              "Merupakan alias yang harus terikat pada objek saat inisialisasi",
              "delete tidak dipanggil"
            ],
            "a": 3,
            "explain": "Leak."
          },
          {
            "type": "mc",
            "q": "Valgrind/ASan mendeteksi",
            "options": [
              "shared_ptr",
              "kesalahan memori",
              "deep copy",
              "template<typename T>"
            ],
            "a": 1,
            "explain": "Deteksi."
          },
          {
            "type": "mc",
            "q": "Alignment memengaruhi",
            "options": [
              "tanpa virtual",
              "algoritma",
              "akses memori",
              "aliran data"
            ],
            "a": 2,
            "explain": "Alignment."
          },
          {
            "type": "mc",
            "q": "Arena/pool alokasi memungkinkan",
            "options": [
              "membatasi modifikasi",
              "evaluasi compile-time",
              "performa",
              "disarankan"
            ],
            "a": 2,
            "explain": "Pool."
          },
          {
            "type": "mc",
            "q": "Menghindari alokasi berlebih",
            "options": [
              "tidak",
              "over-engineering",
              "sering",
              "penting"
            ],
            "a": 3,
            "explain": "Minimalkan alokasi."
          },
          {
            "type": "mc",
            "q": "Custom allocator lanjutan",
            "options": [
              "tidak",
              "ya",
              "async",
              "{}"
            ],
            "a": 1,
            "explain": "Allocator."
          },
          {
            "type": "mc",
            "q": "Testing memori penting",
            "options": [
              "tidak",
              "ya",
              "int",
              "hash"
            ],
            "a": 1,
            "explain": "Testing."
          },
          {
            "type": "mc",
            "q": "Dokumentasi penting",
            "options": [
              "tidak",
              "ya",
              "*",
              "std"
            ],
            "a": 1,
            "explain": "Dokumentasi."
          }
        ]
      },
      {
        "id": "cpp-14",
        "level": "Menengah",
        "title": "Testing C++",
        "exercises": [
          {
            "type": "mc",
            "q": "Framework test populer",
            "options": [
              "Jest",
              "iterator",
              "networking async",
              "GoogleTest/Catch2"
            ],
            "a": 3,
            "explain": "GTest/Catch2."
          },
          {
            "type": "mc",
            "q": "Assertion memakai",
            "options": [
              "ukuran",
              "sering dioverload",
              ".size()",
              "EXPECT_EQ/ASSERT"
            ],
            "a": 3,
            "explain": "Assertion test."
          },
          {
            "type": "mc",
            "q": "Mocking memakai",
            "options": [
              "GoogleMock",
              "panjang",
              "range",
              "mmap"
            ],
            "a": 0,
            "explain": "GoogleMock."
          },
          {
            "type": "mc",
            "q": "Coverage memakai",
            "options": [
              "class Nama {}",
              "gcov/llvm-cov",
              "scoped",
              "array dinamis"
            ],
            "a": 1,
            "explain": "Coverage tool."
          },
          {
            "type": "mc",
            "q": "Test fixture menyiapkan",
            "options": [
              "std::exception",
              "kemunculan",
              "POSIX/Winsock",
              "state"
            ],
            "a": 3,
            "explain": "Fixture."
          },
          {
            "type": "mc",
            "q": "Sanitizer membantu",
            "options": [
              "salinan mahal",
              "dynamic dispatch",
              "deteksi bug",
              "nama konstanta"
            ],
            "a": 2,
            "explain": "Sanitizer."
          },
          {
            "type": "mc",
            "q": "Test perilaku penting",
            "options": [
              "tidak",
              "ya",
              "async",
              "{}"
            ],
            "a": 1,
            "explain": "Perilaku."
          },
          {
            "type": "mc",
            "q": "CI menjalankan test",
            "options": [
              "tidak",
              "inferensi tipe",
              "penting",
              "for (...)"
            ],
            "a": 2,
            "explain": "CI."
          },
          {
            "type": "mc",
            "q": "Test performa memakai",
            "options": [
              "polimorfisme statis",
              "benchmark",
              "efisiensi",
              "int main()"
            ],
            "a": 1,
            "explain": "Benchmark."
          },
          {
            "type": "mc",
            "q": "Dokumentasi test penting",
            "options": [
              "ya",
              "tidak",
              "std",
              "*"
            ],
            "a": 0,
            "explain": "Dokumentasi."
          }
        ]
      },
      {
        "id": "cpp-15",
        "level": "Menengah",
        "title": "RAII & Smart Pointer",
        "exercises": [
          {
            "type": "mc",
            "q": "RAII berarti",
            "options": [
              "std::cin >> / getline",
              "buffer tanpa salinan",
              "OOP, generics, dan fungsional",
              "resource terikat masa hidup objek"
            ],
            "a": 3,
            "explain": "RAII mengaitkan resource."
          },
          {
            "type": "mc",
            "q": "unique_ptr menandakan",
            "options": [
              "std::forward",
              "waktu kompilasi",
              "kepemilikan tunggal",
              "exception safety"
            ],
            "a": 2,
            "explain": "Unique kepemilikan tunggal."
          },
          {
            "type": "mc",
            "q": "shared_ptr memungkinkan",
            "options": [
              "g++/clang++",
              "static_cast/dynamic_cast",
              "kepemilikan bersama",
              "di loop"
            ],
            "a": 2,
            "explain": "Shared bersama."
          },
          {
            "type": "mc",
            "q": "weak_ptr memecah",
            "options": [
              "performa",
              "benchmark",
              "kepemilikan resource",
              "reference cycle"
            ],
            "a": 3,
            "explain": "Weak memecah siklus."
          },
          {
            "type": "mc",
            "q": "make_unique membuat",
            "options": [
              "class Nama {}",
              "scoped",
              "array dinamis",
              "unique_ptr"
            ],
            "a": 3,
            "explain": "make_unique."
          },
          {
            "type": "mc",
            "q": "make_shared membuat",
            "options": [
              "panjang",
              "range",
              "shared_ptr",
              "mmap"
            ],
            "a": 2,
            "explain": "make_shared."
          },
          {
            "type": "mc",
            "q": "Smart pointer mengurangi",
            "options": [
              "salinan mahal",
              "kebocoran memori",
              "dynamic dispatch",
              "nama konstanta"
            ],
            "a": 1,
            "explain": "Hindari leak."
          },
          {
            "type": "mc",
            "q": "Destructor dipanggil saat",
            "options": [
              "build system generator",
              "compiled berorientasi objek",
              "class Anak : public Induk",
              "objek keluar scope"
            ],
            "a": 3,
            "explain": "Destructor scope."
          },
          {
            "type": "mc",
            "q": "new/delete manual sebaiknya",
            "options": [
              "async",
              "operasi atomik",
              "optimasi",
              "dihindari"
            ],
            "a": 3,
            "explain": "Gunakan smart pointer."
          },
          {
            "type": "mc",
            "q": "Resource management penting",
            "options": [
              "tidak",
              "umum",
              "char",
              "ya"
            ],
            "a": 3,
            "explain": "Kelola resource."
          }
        ]
      },
      {
        "id": "cpp-16",
        "level": "Menengah",
        "title": "Move Semantics",
        "exercises": [
          {
            "type": "mc",
            "q": "Move semantics memindahkan",
            "options": [
              "iterator/range for",
              "mengambil alamat",
              "kepemilikan resource",
              "std::stoi"
            ],
            "a": 2,
            "explain": "Move memindah resource."
          },
          {
            "type": "mc",
            "q": "std::move menandai",
            "options": [
              "tidak mengubah objek",
              "Satu pemilik eksklusif mengelola resource",
              "objek dapat dipindah",
              "&& || !"
            ],
            "a": 2,
            "explain": "std::move cast rvalue."
          },
          {
            "type": "mc",
            "q": "Rvalue reference memakai",
            "options": [
              "T&&",
              "T&",
              "umum",
              "iterator"
            ],
            "a": 0,
            "explain": "C++11 T&&."
          },
          {
            "type": "mc",
            "q": "Copy constructor dipanggil saat",
            "options": [
              "menyalin objek",
              "optimasi",
              "polimorfisme statis",
              "efisiensi"
            ],
            "a": 0,
            "explain": "Copy saat menyalin."
          },
          {
            "type": "mc",
            "q": "Move constructor menghindari",
            "options": [
              "salinan mahal",
              "override",
              "ukuran",
              "sering dioverload"
            ],
            "a": 0,
            "explain": "Move efisien."
          },
          {
            "type": "mc",
            "q": "Rule of five mencakup",
            "options": [
              "destructor/copy/move",
              "UB/memori",
              "std::error_code",
              "iterasi"
            ],
            "a": 0,
            "explain": "Lima fungsi khusus."
          },
          {
            "type": "mc",
            "q": "Perfect forwarding memakai",
            "options": [
              "operator kustom",
              "#include sesuai",
              "+ / append",
              "std::forward"
            ],
            "a": 3,
            "explain": "Forward menjaga kategori."
          },
          {
            "type": "mc",
            "q": "Setelah move objek",
            "options": [
              "valid tapi tak ditentukan",
              "objek keluar scope",
              "Masa hidup objek pemiliknya",
              "for (auto x : c)"
            ],
            "a": 0,
            "explain": "Moved-from state."
          },
          {
            "type": "mc",
            "q": "Move menghindari",
            "options": [
              "deep copy",
              "kepemilikan resource",
              "std::ofstream",
              "template"
            ],
            "a": 0,
            "explain": "Hindari deep copy."
          },
          {
            "type": "mc",
            "q": "Optimasi return value penting",
            "options": [
              "ya",
              "tidak",
              "umum",
              "char"
            ],
            "a": 0,
            "explain": "RVO."
          }
        ]
      },
      {
        "id": "cpp-17",
        "level": "Menengah",
        "title": "File & Stream",
        "exercises": [
          {
            "type": "mc",
            "q": "Membaca berkas memakai",
            "options": [
              "benchmark",
              "kepemilikan resource",
              "std::ifstream",
              "std::ofstream"
            ],
            "a": 2,
            "explain": "ifstream membaca."
          },
          {
            "type": "mc",
            "q": "Menulis berkas memakai",
            "options": [
              "komputasi compile-time",
              "std::cout",
              "tipe nama;",
              "std::ofstream"
            ],
            "a": 3,
            "explain": "ofstream menulis."
          },
          {
            "type": "mc",
            "q": "Mode biner memakai",
            "options": [
              "std::forward",
              "std::ios::binary",
              "string",
              "waktu kompilasi"
            ],
            "a": 1,
            "explain": "ios binary."
          },
          {
            "type": "mc",
            "q": "Memeriksa berkas terbuka",
            "options": [
              "char",
              "static_cast/dynamic_cast",
              "is_open()",
              "di loop"
            ],
            "a": 2,
            "explain": "is_open."
          },
          {
            "type": "mc",
            "q": "Stream RAII menutup",
            "options": [
              "perilaku khusus",
              "otomatis",
              "std::exception",
              "kemunculan"
            ],
            "a": 1,
            "explain": "RAII close."
          },
          {
            "type": "mc",
            "q": "Kelas `std::stringstream` di C++ dipakai untuk memformat dan mengurai data layaknya stream ke dalam",
            "options": [
              "for (...)",
              "default public",
              "penting",
              "string"
            ],
            "a": 3,
            "explain": "stringstream."
          },
          {
            "type": "mc",
            "q": "Menangani error stream penting",
            "options": [
              "tidak",
              "range",
              "ya",
              "UB"
            ],
            "a": 2,
            "explain": "Error stream."
          },
          {
            "type": "mc",
            "q": "Menutup berkas penting",
            "options": [
              "tidak",
              "ya",
              "wajib",
              "bool"
            ],
            "a": 1,
            "explain": "Close."
          },
          {
            "type": "mc",
            "q": "Testing IO penting",
            "options": [
              "tidak",
              "char",
              "ya",
              "umum"
            ],
            "a": 2,
            "explain": "Testing."
          },
          {
            "type": "mc",
            "q": "Dokumentasi penting",
            "options": [
              "tidak",
              "throw",
              "ya",
              "nilai"
            ],
            "a": 2,
            "explain": "Dokumentasi."
          }
        ]
      },
      {
        "id": "cpp-18",
        "level": "Menengah",
        "title": "Templates & Generics",
        "exercises": [
          {
            "type": "mc",
            "q": "Template fungsi memakai",
            "options": [
              "salinan string",
              "hasil async",
              "tanpa virtual",
              "template<typename T>"
            ],
            "a": 3,
            "explain": "C++ template."
          },
          {
            "type": "mc",
            "q": "Template class memungkinkan",
            "options": [
              "class generik",
              "nullptr",
              ".find()",
              "base class"
            ],
            "a": 0,
            "explain": "Class template."
          },
          {
            "type": "mc",
            "q": "STL berbasis",
            "options": [
              "template",
              "mmap",
              "clang-format",
              "std::thread"
            ],
            "a": 0,
            "explain": "STL berbasis template."
          },
          {
            "type": "mc",
            "q": "Spesialisasi template memungkinkan",
            "options": [
              "perilaku khusus",
              "array dinamis",
              "std::string",
              "membatasi modifikasi"
            ],
            "a": 0,
            "explain": "Specialization."
          },
          {
            "type": "mc",
            "q": "SFINAE memungkinkan",
            "options": [
              "antar muka",
              "mengakses member",
              "<iostream>",
              "pemilihan overload"
            ],
            "a": 3,
            "explain": "SFINAE."
          },
          {
            "type": "mc",
            "q": "Concepts (C++20) memudahkan",
            "options": [
              "kesalahan memori",
              "shared_ptr",
              "batasan template",
              "deep copy"
            ],
            "a": 2,
            "explain": "Concepts."
          },
          {
            "type": "mc",
            "q": "Template memengaruhi",
            "options": [
              "perf/VTune",
              "satu instance",
              "over-engineering",
              "waktu kompilasi"
            ],
            "a": 3,
            "explain": "Kompilasi template."
          },
          {
            "type": "mc",
            "q": "Error template bisa",
            "options": [
              "panjang",
              "keamanan",
              "diamond problem",
              "GoogleTest/Catch2"
            ],
            "a": 0,
            "explain": "Error panjang."
          },
          {
            "type": "mc",
            "q": "Gunakan template bijak",
            "options": [
              "ya",
              "tidak",
              "throw",
              "nilai"
            ],
            "a": 0,
            "explain": "Biasakan wajar."
          },
          {
            "type": "mc",
            "q": "Dokumentasi template penting",
            "options": [
              "tidak",
              "umum",
              "ya",
              "char"
            ],
            "a": 2,
            "explain": "Dokumentasi."
          }
        ]
      },
      {
        "id": "cpp-19",
        "level": "Menengah",
        "title": "Exception C++",
        "exercises": [
          {
            "type": "mc",
            "q": "Menangkap exception memakai",
            "options": [
              "try/catch",
              "try/rescue",
              ".size()/.length()",
              "dihindari"
            ],
            "a": 0,
            "explain": "C++ memakai try/catch."
          },
          {
            "type": "mc",
            "q": "Melempar memakai",
            "options": [
              "raise",
              "throw",
              "RAII",
              "-O2/-O3"
            ],
            "a": 1,
            "explain": "C++ memakai throw."
          },
          {
            "type": "mc",
            "q": "Standard exception memakai",
            "options": [
              "iterator/range for",
              "std::exception",
              "mengambil alamat",
              "std::stoi"
            ],
            "a": 1,
            "explain": "std::exception."
          },
          {
            "type": "mc",
            "q": "what() memberi",
            "options": [
              "konfigurasi",
              "preprocessor include",
              "tugas async",
              "pesan error"
            ],
            "a": 3,
            "explain": "what() pesan."
          },
          {
            "type": "mc",
            "q": "Exception safety penting",
            "options": [
              "tidak",
              "hash",
              "ya",
              "T&&"
            ],
            "a": 2,
            "explain": "Exception safety."
          },
          {
            "type": "mc",
            "q": "noexcept menandai",
            "options": [
              "UB/memori",
              "std::error_code",
              "tidak melempar",
              "iterasi"
            ],
            "a": 2,
            "explain": "noexcept."
          },
          {
            "type": "mc",
            "q": "RAII menjaga",
            "options": [
              "override",
              "exception safety",
              "ukuran",
              "sering dioverload"
            ],
            "a": 1,
            "explain": "RAII safety."
          },
          {
            "type": "mc",
            "q": "Custom exception mewarisi",
            "options": [
              "pesan error",
              "iterator",
              "std::exception",
              "networking async"
            ],
            "a": 2,
            "explain": "Mewarisi std::exception."
          },
          {
            "type": "mc",
            "q": "Menghindari catch(...) berlebih",
            "options": [
              "tidak",
              "penting",
              "tipe&",
              "class Nama {}"
            ],
            "a": 1,
            "explain": "Jangan sembunyikan."
          },
          {
            "type": "mc",
            "q": "Testing exception penting",
            "options": [
              "tidak",
              "range",
              "UB",
              "ya"
            ],
            "a": 3,
            "explain": "Testing."
          }
        ]
      },
      {
        "id": "cpp-20",
        "level": "Menengah",
        "title": "STL Algorithms",
        "exercises": [
          {
            "type": "mc",
            "q": "std::sort mengurutkan",
            "options": [
              "build",
              "nilai opsional",
              "RAII",
              "range"
            ],
            "a": 3,
            "explain": "sort range."
          },
          {
            "type": "mc",
            "q": "std::find mencari",
            "options": [
              ": member(nilai)",
              "elemen",
              "alias",
              "sering dipakai"
            ],
            "a": 1,
            "explain": "find elemen."
          },
          {
            "type": "mc",
            "q": "std::transform mentransformasi",
            "options": [
              "tidak melempar",
              "konfigurasi",
              "range",
              "tugas async"
            ],
            "a": 2,
            "explain": "transform."
          },
          {
            "type": "mc",
            "q": "std::accumulate mengakumulasi",
            "options": [
              "salinan",
              "nilai",
              "~Nama()",
              ". / ->"
            ],
            "a": 1,
            "explain": "accumulate."
          },
          {
            "type": "mc",
            "q": "std::for_each menjalankan",
            "options": [
              "perilaku tak terdefinisi",
              "Masa hidup objek berakhir",
              "fungsi per elemen",
              "Nama obj; / new Nama()"
            ],
            "a": 2,
            "explain": "for_each."
          },
          {
            "type": "mc",
            "q": "std::count menghitung",
            "options": [
              "kemunculan",
              "v[i] / v.at(i)",
              "std::to_string",
              "template/CRTP"
            ],
            "a": 0,
            "explain": "count."
          },
          {
            "type": "mc",
            "q": "std::remove_if menyaring",
            "options": [
              "clang-tidy",
              "elemen",
              "async",
              "operasi atomik"
            ],
            "a": 1,
            "explain": "remove_if."
          },
          {
            "type": "mc",
            "q": "Algoritma menerima",
            "options": [
              "iterator",
              "fungsi/method",
              "unik terurut",
              "alamat"
            ],
            "a": 0,
            "explain": "Algoritma iterator."
          },
          {
            "type": "mc",
            "q": "Lambda membantu",
            "options": [
              "aliran data",
              "g++/clang++",
              "static_cast/dynamic_cast",
              "comparator/predikat"
            ],
            "a": 3,
            "explain": "Lambda predikat."
          },
          {
            "type": "mc",
            "q": "Ranges (C++20) memudahkan",
            "options": [
              "disarankan",
              "komposisi",
              "performa",
              "benchmark"
            ],
            "a": 1,
            "explain": "Ranges."
          }
        ]
      },
      {
        "id": "cpp-21",
        "level": "Advance",
        "title": "Undefined Behavior & Safety",
        "exercises": [
          {
            "type": "mc",
            "q": "UB berarti",
            "options": [
              "&& || !",
              "perilaku tak terdefinisi",
              "diinisialisasi saat dibuat",
              "pass by value base"
            ],
            "a": 1,
            "explain": "UB."
          },
          {
            "type": "mc",
            "q": "Use after free adalah",
            "options": [
              "state",
              "range",
              "UB",
              "mmap"
            ],
            "a": 2,
            "explain": "UB."
          },
          {
            "type": "mc",
            "q": "Data race adalah",
            "options": [
              "std",
              "*",
              "std::mutex",
              "UB"
            ],
            "a": 3,
            "explain": "UB race."
          },
          {
            "type": "mc",
            "q": "UBSan/ASan mendeteksi",
            "options": [
              "+ / append",
              "keamanan",
              "diamond problem",
              "UB/memori"
            ],
            "a": 3,
            "explain": "Sanitizer."
          },
          {
            "type": "mc",
            "q": "Menghindari UB penting",
            "options": [
              "tidak",
              "ya",
              "char",
              "umum"
            ],
            "a": 1,
            "explain": "Hindari UB."
          },
          {
            "type": "mc",
            "q": "Kode aman lebih mudah dioptimasi",
            "options": [
              "ya",
              "tidak",
              "async",
              "{}"
            ],
            "a": 0,
            "explain": "Aman=optimizable."
          },
          {
            "type": "mc",
            "q": "Smart pointer membantu",
            "options": [
              "mmap",
              "clang-format",
              "std::thread",
              "keamanan"
            ],
            "a": 3,
            "explain": "Smart pointer."
          },
          {
            "type": "mc",
            "q": "Bounds checking memakai",
            "options": [
              "array dinamis",
              "std::string",
              "membatasi modifikasi",
              "std::vector::at"
            ],
            "a": 3,
            "explain": "at bounds."
          },
          {
            "type": "mc",
            "q": "Review kode penting",
            "options": [
              "tidak",
              "int",
              "ya",
              "hash"
            ],
            "a": 2,
            "explain": "Review."
          },
          {
            "type": "mc",
            "q": "Testing penting",
            "options": [
              "ya",
              "tidak",
              "wajib",
              "bool"
            ],
            "a": 0,
            "explain": "Testing."
          }
        ]
      },
      {
        "id": "cpp-22",
        "level": "Advance",
        "title": "Networking & Systems",
        "exercises": [
          {
            "type": "mc",
            "q": "Socket API tersedia lewat",
            "options": [
              "POSIX/Winsock",
              "salinan",
              "~Nama()",
              ". / ->"
            ],
            "a": 0,
            "explain": "Socket API."
          },
          {
            "type": "mc",
            "q": "Asio/Boost.Asio untuk",
            "options": [
              "class generik",
              "networking async",
              "try/catch",
              "elemen"
            ],
            "a": 1,
            "explain": "Asio async."
          },
          {
            "type": "mc",
            "q": "Filesystem C++17 memakai",
            "options": [
              ": member(nilai)",
              "sering dipakai",
              "iterator/range for",
              "std::filesystem"
            ],
            "a": 3,
            "explain": "std::filesystem."
          },
          {
            "type": "mc",
            "q": "Thread lokal memakai",
            "options": [
              "tidak melempar",
              "comparator/predikat",
              "std::filesystem",
              "thread_local"
            ],
            "a": 3,
            "explain": "thread_local."
          },
          {
            "type": "mc",
            "q": "Shared memory memakai",
            "options": [
              "alamat",
              "dihindari",
              "umum",
              "mmap"
            ],
            "a": 3,
            "explain": "mmap."
          },
          {
            "type": "mc",
            "q": "Menangani error sistem memakai",
            "options": [
              "std::error_code",
              "std::vector::at",
              "nilai opsional",
              "-O2/-O3"
            ],
            "a": 0,
            "explain": "error_code."
          },
          {
            "type": "mc",
            "q": "Portabilitas penting",
            "options": [
              "tidak",
              "*",
              "ya",
              "std"
            ],
            "a": 2,
            "explain": "Portabilitas."
          },
          {
            "type": "mc",
            "q": "Testing sistem penting",
            "options": [
              "ya",
              "tidak",
              "async",
              "{}"
            ],
            "a": 0,
            "explain": "Testing."
          },
          {
            "type": "mc",
            "q": "Dokumentasi penting",
            "options": [
              "tidak",
              "std",
              "ya",
              "*"
            ],
            "a": 2,
            "explain": "Dokumentasi."
          },
          {
            "type": "mc",
            "q": "Mengelola buffer jaringan hati-hati",
            "options": [
              "penting",
              "tidak",
              ".find()",
              "base class"
            ],
            "a": 0,
            "explain": "Buffer jaringan perlu hati-hati."
          }
        ]
      },
      {
        "id": "cpp-23",
        "level": "Advance",
        "title": "Build Tools & Modules",
        "exercises": [
          {
            "type": "mc",
            "q": "CMake adalah",
            "options": [
              "compiled berorientasi objek",
              "build system generator",
              "class Anak : public Induk",
              "tidak mengubah objek"
            ],
            "a": 1,
            "explain": "CMake generator."
          },
          {
            "type": "mc",
            "q": "Makefile mengotomasi",
            "options": [
              "T&&",
              "std::exception",
              "kemunculan",
              "build"
            ],
            "a": 3,
            "explain": "Makefile."
          },
          {
            "type": "mc",
            "q": "Modules (C++20) menggantikan",
            "options": [
              "include",
              "<iostream>",
              "bool",
              "? :"
            ],
            "a": 0,
            "explain": "Modules."
          },
          {
            "type": "mc",
            "q": "Package manager populer",
            "options": [
              "shared_ptr",
              "deep copy",
              "vcpkg/conan",
              "template<typename T>"
            ],
            "a": 2,
            "explain": "vcpkg/conan."
          },
          {
            "type": "mc",
            "q": "Preset CMake membantu",
            "options": [
              "std::thread",
              "deteksi race",
              "konfigurasi",
              "vektorisasi"
            ],
            "a": 2,
            "explain": "CMake presets."
          },
          {
            "type": "mc",
            "q": "Header-only library",
            "options": [
              "disarankan",
              "umum",
              "performa",
              "benchmark"
            ],
            "a": 1,
            "explain": "Header-only."
          },
          {
            "type": "mc",
            "q": "Cross-compiling penting",
            "options": [
              "tidak",
              "char",
              "umum",
              "ya"
            ],
            "a": 3,
            "explain": "Cross compile."
          },
          {
            "type": "mc",
            "q": "CI build penting",
            "options": [
              "ya",
              "tidak",
              "async",
              "{}"
            ],
            "a": 0,
            "explain": "CI."
          },
          {
            "type": "mc",
            "q": "Dokumentasi build penting",
            "options": [
              "tidak",
              "ya",
              "async",
              "{}"
            ],
            "a": 1,
            "explain": "Dokumentasi."
          },
          {
            "type": "mc",
            "q": "Reproducible build penting",
            "options": [
              "ya",
              "tidak",
              "*",
              "std"
            ],
            "a": 0,
            "explain": "Build reproducible."
          }
        ]
      },
      {
        "id": "cpp-24",
        "level": "Advance",
        "title": "Refactor & Code Quality",
        "exercises": [
          {
            "type": "mc",
            "q": "Nama jelas penting",
            "options": [
              "ya",
              "tidak",
              "std",
              "*"
            ],
            "a": 0,
            "explain": "Nama deskriptif."
          },
          {
            "type": "mc",
            "q": "RAII konsisten penting",
            "options": [
              "tidak",
              "{}",
              "ya",
              "async"
            ],
            "a": 2,
            "explain": "RAII konsisten."
          },
          {
            "type": "mc",
            "q": "Static analysis memakai",
            "options": [
              ".size()/.length()",
              "dihindari",
              "umum",
              "clang-tidy"
            ],
            "a": 3,
            "explain": "clang-tidy."
          },
          {
            "type": "mc",
            "q": "Formatter memakai",
            "options": [
              "-O2/-O3",
              "pembuatan objek",
              "komposisi algoritma",
              "clang-format"
            ],
            "a": 3,
            "explain": "clang-format."
          },
          {
            "type": "mc",
            "q": "Refactor bertahap aman",
            "options": [
              "tidak",
              "ya",
              "state",
              "range"
            ],
            "a": 1,
            "explain": "Bertahap."
          },
          {
            "type": "mc",
            "q": "Testing regresi penting",
            "options": [
              "tidak",
              "ya",
              "wajib",
              "bool"
            ],
            "a": 1,
            "explain": "Regresi."
          },
          {
            "type": "mc",
            "q": "Review kode penting",
            "options": [
              "ya",
              "tidak",
              "hash",
              "T&&"
            ],
            "a": 0,
            "explain": "Review."
          },
          {
            "type": "mc",
            "q": "Dokumentasi penting",
            "options": [
              "tidak",
              "ya",
              "std",
              "*"
            ],
            "a": 1,
            "explain": "Dokumentasi."
          },
          {
            "type": "mc",
            "q": "Menghindari over-engineering",
            "options": [
              "penting",
              "tidak",
              "override",
              "ukuran"
            ],
            "a": 0,
            "explain": "Sederhana."
          },
          {
            "type": "mc",
            "q": "Mengukur performa",
            "options": [
              "tidak",
              "penting",
              "pesan error",
              "iterator"
            ],
            "a": 1,
            "explain": "Ukur."
          }
        ]
      },
      {
        "id": "cpp-25",
        "level": "Advance",
        "title": "Modern C++ (11/14/17/20)",
        "exercises": [
          {
            "type": "mc",
            "q": "auto memungkinkan",
            "options": [
              "perf/VTune",
              "satu instance",
              "over-engineering",
              "inferensi tipe"
            ],
            "a": 3,
            "explain": "C++11 auto."
          },
          {
            "type": "mc",
            "q": "Di C++ modern, `nullptr` direkomendasikan sebagai pengganti aman bagi makro pointer lama",
            "options": [
              "keamanan",
              "T&&",
              "NULL",
              "kemunculan"
            ],
            "a": 2,
            "explain": "nullptr type-safe."
          },
          {
            "type": "mc",
            "q": "Range-based for memperpendek",
            "options": [
              "salinan string",
              "hasil async",
              "tanpa virtual",
              "iterasi"
            ],
            "a": 3,
            "explain": "Range for."
          },
          {
            "type": "mc",
            "q": "std::optional mewakili",
            "options": [
              "nullptr",
              ".find()",
              "nilai opsional",
              "base class"
            ],
            "a": 2,
            "explain": "optional."
          },
          {
            "type": "mc",
            "q": "std::variant untuk",
            "options": [
              "kondisi benar",
              "union type-safe",
              "class Nama {}",
              "scoped"
            ],
            "a": 1,
            "explain": "variant."
          },
          {
            "type": "mc",
            "q": "std::string_view menghindari",
            "options": [
              "kepemilikan bersama",
              "salinan string",
              "menyalin objek",
              "is_open()"
            ],
            "a": 1,
            "explain": "string_view efisien."
          },
          {
            "type": "mc",
            "q": "Concepts membatasi",
            "options": [
              "antar muka",
              "mengakses member",
              "<iostream>",
              "template"
            ],
            "a": 3,
            "explain": "C++20 concepts."
          },
          {
            "type": "mc",
            "q": "Modules menggantikan",
            "options": [
              "kesalahan memori",
              "preprocessor include",
              "shared_ptr",
              "deep copy"
            ],
            "a": 1,
            "explain": "C++20 modules."
          },
          {
            "type": "mc",
            "q": "std::format memformat",
            "options": [
              "waktu kompilasi",
              "string",
              "exception safety",
              "komposisi"
            ],
            "a": 1,
            "explain": "C++20 format."
          },
          {
            "type": "mc",
            "q": "Coroutines mendukung",
            "options": [
              "default public",
              "async",
              "penting",
              "kebingungan"
            ],
            "a": 1,
            "explain": "C++20 coroutines."
          }
        ]
      },
      {
        "id": "cpp-26",
        "level": "Advance",
        "title": "Concurrency C++",
        "exercises": [
          {
            "type": "mc",
            "q": "Thread memakai",
            "options": [
              "std::thread",
              "evaluasi compile-time",
              "disarankan",
              "performa"
            ],
            "a": 0,
            "explain": "std::thread."
          },
          {
            "type": "mc",
            "q": "Mutex memakai",
            "options": [
              "deteksi race",
              "vektorisasi",
              "abstraksi runtime",
              "std::mutex"
            ],
            "a": 3,
            "explain": "std::mutex."
          },
          {
            "type": "mc",
            "q": "lock_guard mengunci",
            "options": [
              "unique_ptr",
              "string",
              "RAII",
              "komposisi"
            ],
            "a": 2,
            "explain": "lock_guard RAII."
          },
          {
            "type": "mc",
            "q": "unique_lock fleksibel",
            "options": [
              "tidak",
              "char",
              "ya",
              "umum"
            ],
            "a": 2,
            "explain": "unique_lock."
          },
          {
            "type": "mc",
            "q": "condition_variable membantu",
            "options": [
              "sinkronisasi",
              "kebingungan",
              "v[i] / v.at(i)",
              "std::to_string"
            ],
            "a": 0,
            "explain": "condition_variable."
          },
          {
            "type": "mc",
            "q": "future/promise untuk",
            "options": [
              "thread_local",
              "clang-tidy",
              "async",
              "hasil async"
            ],
            "a": 3,
            "explain": "future/promise."
          },
          {
            "type": "mc",
            "q": "async menjalankan",
            "options": [
              "tugas async",
              "alias objek",
              ".substr()",
              "abstract"
            ],
            "a": 0,
            "explain": "std::async."
          },
          {
            "type": "mc",
            "q": "atomic untuk",
            "options": [
              "operasi atomik",
              "union type-safe",
              "sinkronisasi",
              "realloc"
            ],
            "a": 0,
            "explain": "std::atomic."
          },
          {
            "type": "mc",
            "q": "Data race harus",
            "options": [
              "dihindari",
              "pemilihan overload",
              "pesan error",
              "iterator"
            ],
            "a": 0,
            "explain": "Hindari race."
          },
          {
            "type": "mc",
            "q": "Thread sanitizer membantu",
            "options": [
              "deteksi race",
              "kondisi benar",
              "tipe&",
              "class Nama {}"
            ],
            "a": 0,
            "explain": "TSan."
          }
        ]
      },
      {
        "id": "cpp-27",
        "level": "Advance",
        "title": "Performance & Optimization",
        "exercises": [
          {
            "type": "mc",
            "q": "Profiling memakai",
            "options": [
              "EXPECT_EQ/ASSERT",
              "perf/VTune",
              "kepemilikan bersama",
              "menyalin objek"
            ],
            "a": 1,
            "explain": "Profiler C++."
          },
          {
            "type": "mc",
            "q": "Optimasi compiler memakai",
            "options": [
              "-O2/-O3",
              "int main()",
              "const/constexpr",
              "if/else if/else"
            ],
            "a": 0,
            "explain": "Flag optimasi."
          },
          {
            "type": "mc",
            "q": "Move semantics menghindari",
            "options": [
              "salinan",
              "kebocoran memori",
              "std::ifstream",
              "class generik"
            ],
            "a": 0,
            "explain": "Move efisien."
          },
          {
            "type": "mc",
            "q": "Cache locality penting",
            "options": [
              "tidak",
              "hash",
              "ya",
              "T&&"
            ],
            "a": 2,
            "explain": "Locality cache."
          },
          {
            "type": "mc",
            "q": "Reserve vector menghindari",
            "options": [
              "otomatis",
              "batasan template",
              "tidak melempar",
              "realloc"
            ],
            "a": 3,
            "explain": "Reserve alokasi."
          },
          {
            "type": "mc",
            "q": "Inline function membantu",
            "options": [
              "performa",
              "tipe nama(params) {}",
              "[capture](params) {}",
              ": member(nilai)"
            ],
            "a": 0,
            "explain": "Inline kecil."
          },
          {
            "type": "mc",
            "q": "Template mempercepat",
            "options": [
              "tanpa virtual",
              "throw",
              "nilai",
              "std::vector::at"
            ],
            "a": 0,
            "explain": "Template statis."
          },
          {
            "type": "mc",
            "q": "Ukur sebelum optimasi",
            "options": [
              "tidak",
              "method",
              "fungsi/method",
              "wajib"
            ],
            "a": 3,
            "explain": "Ukur dulu."
          },
          {
            "type": "mc",
            "q": "PGO membantu",
            "options": [
              "array dinamis",
              "std::string",
              "membatasi modifikasi",
              "optimasi"
            ],
            "a": 3,
            "explain": "Profile-guided."
          },
          {
            "type": "mc",
            "q": "SIMD memungkinkan",
            "options": [
              "vcpkg/conan",
              "vektorisasi",
              "salinan string",
              "hasil async"
            ],
            "a": 1,
            "explain": "SIMD."
          }
        ]
      },
      {
        "id": "cpp-28",
        "level": "Advance",
        "title": "Design Pattern C++",
        "exercises": [
          {
            "type": "mc",
            "q": "Singleton memastikan",
            "options": [
              "salinan mahal",
              "satu instance",
              "dynamic dispatch",
              "nama konstanta"
            ],
            "a": 1,
            "explain": "Singleton."
          },
          {
            "type": "mc",
            "q": "Factory memusatkan",
            "options": [
              "std::ios::binary",
              "perilaku khusus",
              "std::exception",
              "pembuatan objek"
            ],
            "a": 3,
            "explain": "Factory."
          },
          {
            "type": "mc",
            "q": "Builder memudahkan",
            "options": [
              "inferensi tipe",
              "for (...)",
              "parameter opsional",
              "objek kompleks"
            ],
            "a": 3,
            "explain": "Builder."
          },
          {
            "type": "mc",
            "q": "Observer via callback",
            "options": [
              "tidak",
              "ya",
              "async",
              "{}"
            ],
            "a": 1,
            "explain": "Observer."
          },
          {
            "type": "mc",
            "q": "Strategy menukar",
            "options": [
              "ukuran",
              "sering dioverload",
              ".size()",
              "algoritma"
            ],
            "a": 3,
            "explain": "Strategy."
          },
          {
            "type": "mc",
            "q": "Adapter menjembatani",
            "options": [
              "iterator",
              "antar muka",
              "networking async",
              "vcpkg/conan"
            ],
            "a": 1,
            "explain": "Adapter."
          },
          {
            "type": "mc",
            "q": "CRTP memungkinkan",
            "options": [
              "polimorfisme statis",
              "class Nama {}",
              "array dinamis",
              "std::string"
            ],
            "a": 0,
            "explain": "CRTP."
          },
          {
            "type": "mc",
            "q": "Type erasure memungkinkan",
            "options": [
              "panjang",
              "abstraksi runtime",
              "clang-format",
              "std::thread"
            ],
            "a": 1,
            "explain": "Type erasure."
          },
          {
            "type": "mc",
            "q": "Pola berlebihan berisiko",
            "options": [
              "over-engineering",
              "realloc",
              "objek kompleks",
              "invalidasi/realloc"
            ],
            "a": 0,
            "explain": "Gunakan wajar."
          },
          {
            "type": "mc",
            "q": "Dokumentasi pola penting",
            "options": [
              "tidak",
              "ya",
              "*",
              "std"
            ],
            "a": 1,
            "explain": "Dokumentasi."
          }
        ]
      },
      {
        "id": "cpp-29",
        "level": "Advance",
        "title": "STL Lanjutan & Ranges",
        "exercises": [
          {
            "type": "mc",
            "q": "std::ranges (C++20) memudahkan",
            "options": [
              "pemilihan overload",
              "komposisi algoritma",
              "pesan error",
              "iterator"
            ],
            "a": 1,
            "explain": "Ranges compose."
          },
          {
            "type": "mc",
            "q": "Views bersifat lazy",
            "options": [
              "tidak",
              "async",
              "ya",
              "{}"
            ],
            "a": 2,
            "explain": "Views lazy."
          },
          {
            "type": "mc",
            "q": "std::span mengakses",
            "options": [
              "OOP, generics, dan fungsional",
              "pointer ke objek",
              "ubah di method const",
              "buffer tanpa salinan"
            ],
            "a": 3,
            "explain": "span view."
          },
          {
            "type": "mc",
            "q": "Iterator invalidation berbahaya",
            "options": [
              "tidak",
              "tipe&",
              "ya",
              "throw"
            ],
            "a": 2,
            "explain": "Invalidation."
          },
          {
            "type": "mc",
            "q": "Reserve menghindari",
            "options": [
              "kepemilikan tunggal",
              "invalidasi/realloc",
              "std::ios::binary",
              "perilaku khusus"
            ],
            "a": 1,
            "explain": "Reserve."
          },
          {
            "type": "mc",
            "q": "Custom comparator penting",
            "options": [
              "tidak",
              "ya",
              "bool",
              "&"
            ],
            "a": 1,
            "explain": "Comparator."
          },
          {
            "type": "mc",
            "q": "Mengukur performa container",
            "options": [
              "tidak",
              "penting",
              "manual new/delete",
              "gcov/llvm-cov"
            ],
            "a": 1,
            "explain": "Ukur performa."
          },
          {
            "type": "mc",
            "q": "Dokumentasi STL penting",
            "options": [
              "tidak",
              "ya",
              "std",
              "*"
            ],
            "a": 1,
            "explain": "Dokumentasi."
          },
          {
            "type": "mc",
            "q": "Pipe operator memungkinkan komposisi",
            "options": [
              "operasi atomik",
              "aliran data",
              "optimasi",
              "polimorfisme statis"
            ],
            "a": 1,
            "explain": "Pipe compose."
          },
          {
            "type": "mc",
            "q": "Projection pada ranges membantu",
            "options": [
              "std::to_string",
              "template/CRTP",
              "mengakses member",
              "akses memori"
            ],
            "a": 2,
            "explain": "Projection member."
          }
        ]
      },
      {
        "id": "cpp-30",
        "level": "Advance",
        "title": "Embedded & Systems C++",
        "exercises": [
          {
            "type": "mc",
            "q": "Embedded C++ menuntut",
            "options": [
              "destructor/copy/move",
              "otomatis",
              "batasan template",
              "efisiensi"
            ],
            "a": 3,
            "explain": "Efisiensi."
          },
          {
            "type": "mc",
            "q": "Tanpa RTTI/exception membantu",
            "options": [
              "switch/case",
              "ukuran",
              ": member(nilai)",
              "alias"
            ],
            "a": 1,
            "explain": "Kurangi overhead."
          },
          {
            "type": "mc",
            "q": "constexpr membantu",
            "options": [
              "template",
              "std::vector::at",
              "komputasi compile-time",
              "nilai opsional"
            ],
            "a": 2,
            "explain": "constexpr."
          },
          {
            "type": "mc",
            "q": "RAII tetap penting",
            "options": [
              "ya",
              "tidak",
              "umum",
              "char"
            ],
            "a": 0,
            "explain": "RAII."
          },
          {
            "type": "mc",
            "q": "Alokasi dinamis dibatasi",
            "options": [
              "sering",
              "exception safety",
              "komposisi",
              "thread_local"
            ],
            "a": 0,
            "explain": "Batasi alokasi."
          },
          {
            "type": "mc",
            "q": "Testing di target penting",
            "options": [
              "tidak",
              "*",
              "std",
              "ya"
            ],
            "a": 3,
            "explain": "Uji target."
          },
          {
            "type": "mc",
            "q": "Dokumentasi penting",
            "options": [
              "tidak",
              "int",
              "ya",
              "hash"
            ],
            "a": 2,
            "explain": "Dokumentasi."
          },
          {
            "type": "mc",
            "q": "Mengukur resource penting",
            "options": [
              "ya",
              "tidak",
              "wajib",
              "bool"
            ],
            "a": 0,
            "explain": "Ukur resource."
          },
          {
            "type": "mc",
            "q": "Menghindari fitur berat memori",
            "options": [
              "penting",
              "tidak",
              "#include sesuai",
              "+ / append"
            ],
            "a": 0,
            "explain": "Hindari overhead."
          },
          {
            "type": "mc",
            "q": "Interrupt-safe code penting",
            "options": [
              "tidak",
              "wajib",
              "ya",
              "bool"
            ],
            "a": 2,
            "explain": "Interrupt safe."
          }
        ]
      },
      {
        "id": "cpp-31",
        "level": "Advance",
        "title": "Master Review & Best Practice C++",
        "exercises": [
          {
            "type": "mc",
            "q": "Prinsip RAII di C++ mengaitkan masa hidup resource dengan",
            "options": [
              "Masa hidup objek pemiliknya",
              "Nama file CSS",
              "Urutan route web",
              "Nilai balik HTTP"
            ],
            "a": 0,
            "explain": "Resource dilepas oleh destructor saat objek pemiliknya keluar dari masa hidup."
          },
          {
            "type": "mc",
            "q": "`std::unique_ptr<T>` cocok ketika",
            "options": [
              "Resource tidak memiliki tipe",
              "Banyak pemilik bersama selalu diperlukan",
              "Satu pemilik eksklusif mengelola resource",
              "Resource harus bocor"
            ],
            "a": 2,
            "explain": "unique_ptr menyatakan kepemilikan tunggal dan melepas resource otomatis."
          },
          {
            "type": "mc",
            "q": "Container `std::vector<T>` menyediakan",
            "options": [
              "Pointer tanpa batas",
              "Array dinamis yang dapat bertambah ukurannya",
              "Tabel SQL",
              "Pengganti compiler"
            ],
            "a": 1,
            "explain": "vector adalah container urutan yang mengelola array dinamis."
          },
          {
            "type": "mc",
            "q": "C++ references berbeda dari pointer karena reference",
            "options": [
              "Selalu dapat bernilai null",
              "Merupakan alias yang harus terikat pada objek saat inisialisasi",
              "Menyimpan route HTTP",
              "Harus dibebaskan dengan free"
            ],
            "a": 1,
            "explain": "Reference adalah alias untuk objek dan harus diinisialisasi ketika dibuat."
          },
          {
            "type": "mc",
            "q": "Destructor C++ biasanya dipanggil ketika",
            "options": [
              "Program mengimpor header",
              "Masa hidup objek berakhir",
              "Fungsi mengubah warna UI",
              "Pointer ditampilkan sebagai string"
            ],
            "a": 1,
            "explain": "Destructor membersihkan resource saat objek keluar dari masa hidupnya."
          }
        ]
      }
    ]
  }
];

export { CONTENT_CPP };
