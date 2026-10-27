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
              "CSS",
              "route"
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
              "CSS",
              "route",
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
              "CSS"
            ],
            "a": 2,
            "explain": "Compiler C++."
          },
          {
            "type": "mc",
            "q": "Header IO C++ adalah",
            "options": [
              "<stdio.h>",
              "CSS",
              "<iostream>",
              "route"
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
              "CSS",
              "route"
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
              "CSS"
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
              "CSS",
              "std"
            ],
            "a": 3,
            "explain": "C++ memakai std."
          },
          {
            "type": "mc",
            "q": "C++ mendukung",
            "options": [
              "CSS",
              "route",
              "OOP, generics, dan fungsional",
              "migrasi"
            ],
            "a": 2,
            "explain": "C++ multiparadigma."
          },
          {
            "type": "mc",
            "q": "Standard library C++ adalah",
            "options": [
              "CSS",
              "route",
              "STL",
              "migrasi"
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
              "CSS"
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
              "CSS"
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
              "CSS",
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
              "CSS"
            ],
            "a": 2,
            "explain": "C++ memakai const/constexpr."
          },
          {
            "type": "mc",
            "q": "Deklarasi variabel",
            "options": [
              "var nama",
              "CSS",
              "route",
              "tipe nama;"
            ],
            "a": 3,
            "explain": "C++ memakai tipe eksplisit."
          },
          {
            "type": "mc",
            "q": "auto memungkinkan",
            "options": [
              "CSS",
              "route",
              "inferensi tipe",
              "migrasi"
            ],
            "a": 2,
            "explain": "C++11 auto inferensi."
          },
          {
            "type": "mc",
            "q": "nullptr menggantikan",
            "options": [
              "void",
              "CSS",
              "NULL",
              "route"
            ],
            "a": 2,
            "explain": "C++11 nullptr."
          },
          {
            "type": "mc",
            "q": "Ukuran tipe memakai",
            "options": [
              "size()",
              "CSS",
              "sizeof",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "C++ memakai else if."
          },
          {
            "type": "mc",
            "q": "Switch memakai",
            "options": [
              "when",
              "CSS",
              "route",
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
              "CSS",
              "for (...)",
              "route"
            ],
            "a": 2,
            "explain": "For klasik."
          },
          {
            "type": "mc",
            "q": "Range-based for memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "for (auto x : c)"
            ],
            "a": 3,
            "explain": "C++11 range for."
          },
          {
            "type": "mc",
            "q": "while mengulang selama",
            "options": [
              "CSS",
              "route",
              "kondisi benar",
              "migrasi"
            ],
            "a": 2,
            "explain": "While bergantung."
          },
          {
            "type": "mc",
            "q": "do-while menjalankan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "minimal sekali"
            ],
            "a": 3,
            "explain": "Minimal sekali."
          },
          {
            "type": "mc",
            "q": "break/continue berlaku",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "route",
              "tipe nama(params) {}"
            ],
            "a": 3,
            "explain": "C++ memakai tipe balik."
          },
          {
            "type": "mc",
            "q": "Default argument memungkinkan",
            "options": [
              "CSS",
              "parameter opsional",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Default argument."
          },
          {
            "type": "mc",
            "q": "Function overloading memungkinkan",
            "options": [
              "CSS",
              "nama sama beda parameter",
              "route",
              "migrasi"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "C++ memakai tipe&."
          },
          {
            "type": "mc",
            "q": "Pass by value berarti",
            "options": [
              "referensi",
              "CSS",
              "salinan",
              "route"
            ],
            "a": 2,
            "explain": "By value salinan."
          },
          {
            "type": "mc",
            "q": "Pass by reference memungkinkan",
            "options": [
              "mengubah asli",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Referensi memberi efek."
          },
          {
            "type": "mc",
            "q": "const reference menghindari",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Inline hint."
          },
          {
            "type": "mc",
            "q": "Lambda memakai",
            "options": [
              "function()",
              "CSS",
              "[capture](params) {}",
              "route"
            ],
            "a": 2,
            "explain": "C++11 lambda."
          },
          {
            "type": "mc",
            "q": "Variadic template memungkinkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route"
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Konstruktor nama class."
          },
          {
            "type": "mc",
            "q": "Destruktor memakai",
            "options": [
              "destroy()",
              "CSS",
              "route",
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Stack atau heap."
          },
          {
            "type": "mc",
            "q": "Access specifier meliputi",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "C++ memakai :."
          },
          {
            "type": "mc",
            "q": "Method virtual memungkinkan",
            "options": [
              "CSS",
              "route",
              "dynamic dispatch",
              "migrasi"
            ],
            "a": 2,
            "explain": "Virtual method."
          },
          {
            "type": "mc",
            "q": "Override memakai kata kunci",
            "options": [
              "@override",
              "override",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "C++11 override."
          },
          {
            "type": "mc",
            "q": "Constructor member init list memakai",
            "options": [
              ": member(nilai)",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Init list konstruktor."
          },
          {
            "type": "mc",
            "q": "this adalah",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Struct default public."
          },
          {
            "type": "mc",
            "q": "Enum class lebih aman karena",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "scoped"
            ],
            "a": 3,
            "explain": "Enum class scoped."
          },
          {
            "type": "mc",
            "q": "Mengakses member struct memakai",
            "options": [
              "CSS",
              ". / ->",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Dot/arrow."
          },
          {
            "type": "mc",
            "q": "Struct dapat berisi",
            "options": [
              "CSS",
              "route",
              "method",
              "migrasi"
            ],
            "a": 2,
            "explain": "Struct dapat method."
          },
          {
            "type": "mc",
            "q": "Aggregate initialization memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "{}"
            ],
            "a": 3,
            "explain": "Brace init."
          },
          {
            "type": "mc",
            "q": "Enum memberi",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "nama konstanta"
            ],
            "a": 3,
            "explain": "Enum nama konstanta."
          },
          {
            "type": "mc",
            "q": "Struct padding memengaruhi",
            "options": [
              "CSS",
              "route",
              "ukuran",
              "migrasi"
            ],
            "a": 2,
            "explain": "Padding ukuran."
          },
          {
            "type": "mc",
            "q": "typedef/using membuat",
            "options": [
              "CSS",
              "route",
              "alias",
              "migrasi"
            ],
            "a": 2,
            "explain": "Alias tipe."
          },
          {
            "type": "mc",
            "q": "Menghindari struct raksasa",
            "options": [
              "tidak",
              "CSS",
              "penting",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Overload operator."
          },
          {
            "type": "mc",
            "q": "operator+ didefinisikan sebagai",
            "options": [
              "CSS",
              "fungsi/method",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Definisi operator."
          },
          {
            "type": "mc",
            "q": "Konvensi operator penting",
            "options": [
              "tidak",
              "CSS",
              "route",
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Friend akses."
          },
          {
            "type": "mc",
            "q": "Operator harus masuk akal",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "Jangan membingungkan."
          },
          {
            "type": "mc",
            "q": "Stream operator <<",
            "options": [
              "CSS",
              "sering dioverload",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Overload <<."
          },
          {
            "type": "mc",
            "q": "Comparator operator",
            "options": [
              "CSS",
              "route",
              "sering dipakai",
              "migrasi"
            ],
            "a": 2,
            "explain": "Comparator."
          },
          {
            "type": "mc",
            "q": "Overloading berlebihan berisiko",
            "options": [
              "CSS",
              "route",
              "kebingungan",
              "migrasi"
            ],
            "a": 2,
            "explain": "Gunakan wajar."
          },
          {
            "type": "mc",
            "q": "Testing operator penting",
            "options": [
              "tidak",
              "CSS",
              "route",
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
        "id": "cpp-8",
        "level": "Dasar",
        "title": "STL Container",
        "exercises": [
          {
            "type": "mc",
            "q": "Vector adalah",
            "options": [
              "CSS",
              "route",
              "array dinamis",
              "migrasi"
            ],
            "a": 2,
            "explain": "vector dinamis."
          },
          {
            "type": "mc",
            "q": "Map adalah",
            "options": [
              "koleksi key-value terurut",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "map terurut."
          },
          {
            "type": "mc",
            "q": "unordered_map memakai",
            "options": [
              "hash",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "unordered hash."
          },
          {
            "type": "mc",
            "q": "Set menyimpan",
            "options": [
              "unik terurut",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "set unik."
          },
          {
            "type": "mc",
            "q": "Menambah vector memakai",
            "options": [
              "append",
              "CSS",
              "route",
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "size()."
          },
          {
            "type": "mc",
            "q": "Iterasi container memakai",
            "options": [
              "iterator/range for",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Iterator/range-for."
          },
          {
            "type": "mc",
            "q": "Mengakses vector memakai",
            "options": [
              "v.get(i)",
              "CSS",
              "v[i] / v.at(i)",
              "route"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "C++ memakai std::string."
          },
          {
            "type": "mc",
            "q": "Container memerlukan",
            "options": [
              "CSS",
              "route",
              "#include sesuai",
              "migrasi"
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Pointer alamat."
          },
          {
            "type": "mc",
            "q": "Referensi adalah",
            "options": [
              "CSS",
              "alias objek",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Referensi alias."
          },
          {
            "type": "mc",
            "q": "Referensi harus",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Pointer boleh nullptr."
          },
          {
            "type": "mc",
            "q": "Bar operator &",
            "options": [
              "CSS",
              "mengambil alamat",
              "route",
              "migrasi"
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
              "CSS",
              "*"
            ],
            "a": 3,
            "explain": "Operator *."
          },
          {
            "type": "mc",
            "q": "Arrow dipakai untuk",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "pointer ke objek"
            ],
            "a": 3,
            "explain": "Arrow akses member."
          },
          {
            "type": "mc",
            "q": "Reference vs pointer",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
              "migrasi"
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
              "CSS",
              "route"
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
              "CSS",
              "+ / append",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "C++ string mendukung +."
          },
          {
            "type": "mc",
            "q": "Panjang string memakai",
            "options": [
              ".len()",
              "CSS",
              ".size()/.length()",
              "route"
            ],
            "a": 2,
            "explain": "size/length."
          },
          {
            "type": "mc",
            "q": "Mengambil substring memakai",
            "options": [
              ".slice()",
              "CSS",
              "route",
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
              "CSS",
              ".find()",
              "route"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "cin/getline."
          },
          {
            "type": "mc",
            "q": "Output memakai",
            "options": [
              "printf only",
              "CSS",
              "route",
              "std::cout"
            ],
            "a": 3,
            "explain": "cout output."
          },
          {
            "type": "mc",
            "q": "Format output memakai",
            "options": [
              "CSS",
              "route",
              "std::format (C++20) / printf",
              "migrasi"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "route",
              "migrasi",
              "tidak mengubah objek"
            ],
            "a": 3,
            "explain": "Const method."
          },
          {
            "type": "mc",
            "q": "const reference menghindari",
            "options": [
              "CSS",
              "route",
              "salinan",
              "migrasi"
            ],
            "a": 2,
            "explain": "Const ref."
          },
          {
            "type": "mc",
            "q": "mutable memungkinkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "ubah di method const"
            ],
            "a": 3,
            "explain": "mutable."
          },
          {
            "type": "mc",
            "q": "constexpr memungkinkan",
            "options": [
              "CSS",
              "evaluasi compile-time",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "constexpr."
          },
          {
            "type": "mc",
            "q": "const correctness meningkatkan",
            "options": [
              "keamanan",
              "CSS",
              "route",
              "migrasi"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Konsistensi."
          },
          {
            "type": "mc",
            "q": "const_cast sebaiknya",
            "options": [
              "CSS",
              "route",
              "dihindari",
              "migrasi"
            ],
            "a": 2,
            "explain": "Hindari const_cast."
          },
          {
            "type": "mc",
            "q": "Pointer const berbeda dari",
            "options": [
              "pointer ke const",
              "CSS",
              "route",
              "migrasi"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Testing."
          },
          {
            "type": "mc",
            "q": "Dokumentasi penting",
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
        "id": "cpp-12",
        "level": "Menengah",
        "title": "Inheritance & Polymorphism",
        "exercises": [
          {
            "type": "mc",
            "q": "Virtual function memungkinkan",
            "options": [
              "dynamic dispatch",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Virtual dispatch."
          },
          {
            "type": "mc",
            "q": "Pure virtual membuat class",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "abstract"
            ],
            "a": 3,
            "explain": "Pure virtual abstract."
          },
          {
            "type": "mc",
            "q": "Virtual destructor penting pada",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Runtime poly."
          },
          {
            "type": "mc",
            "q": "Static polymorphism via",
            "options": [
              "CSS",
              "template/CRTP",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Static poly."
          },
          {
            "type": "mc",
            "q": "Slicing object terjadi saat",
            "options": [
              "CSS",
              "pass by value base",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Object slicing."
          },
          {
            "type": "mc",
            "q": "Composition over inheritance",
            "options": [
              "tidak",
              "CSS",
              "route",
              "disarankan"
            ],
            "a": 3,
            "explain": "Komposisi."
          },
          {
            "type": "mc",
            "q": "Multiple inheritance berisiko",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "diamond problem"
            ],
            "a": 3,
            "explain": "Diamond."
          },
          {
            "type": "mc",
            "q": "Interface via abstract class",
            "options": [
              "CSS",
              "umum",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Interface abstrak."
          },
          {
            "type": "mc",
            "q": "Testing polymorphic penting",
            "options": [
              "tidak",
              "CSS",
              "route",
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Pasangkan new/delete."
          },
          {
            "type": "mc",
            "q": "Smart pointer menggantikan",
            "options": [
              "CSS",
              "route",
              "manual new/delete",
              "migrasi"
            ],
            "a": 2,
            "explain": "Smart pointer."
          },
          {
            "type": "mc",
            "q": "Memory leak terjadi bila",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "delete tidak dipanggil"
            ],
            "a": 3,
            "explain": "Leak."
          },
          {
            "type": "mc",
            "q": "Valgrind/ASan mendeteksi",
            "options": [
              "CSS",
              "kesalahan memori",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Deteksi."
          },
          {
            "type": "mc",
            "q": "Alignment memengaruhi",
            "options": [
              "CSS",
              "route",
              "akses memori",
              "migrasi"
            ],
            "a": 2,
            "explain": "Alignment."
          },
          {
            "type": "mc",
            "q": "Arena/pool alokasi memungkinkan",
            "options": [
              "CSS",
              "route",
              "performa",
              "migrasi"
            ],
            "a": 2,
            "explain": "Pool."
          },
          {
            "type": "mc",
            "q": "Menghindari alokasi berlebih",
            "options": [
              "tidak",
              "CSS",
              "route",
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
              "CSS",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "route",
              "GoogleTest/Catch2"
            ],
            "a": 3,
            "explain": "GTest/Catch2."
          },
          {
            "type": "mc",
            "q": "Assertion memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "GoogleMock."
          },
          {
            "type": "mc",
            "q": "Coverage memakai",
            "options": [
              "CSS",
              "gcov/llvm-cov",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Coverage tool."
          },
          {
            "type": "mc",
            "q": "Test fixture menyiapkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "state"
            ],
            "a": 3,
            "explain": "Fixture."
          },
          {
            "type": "mc",
            "q": "Sanitizer membantu",
            "options": [
              "CSS",
              "route",
              "deteksi bug",
              "migrasi"
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Perilaku."
          },
          {
            "type": "mc",
            "q": "CI menjalankan test",
            "options": [
              "tidak",
              "CSS",
              "penting",
              "route"
            ],
            "a": 2,
            "explain": "CI."
          },
          {
            "type": "mc",
            "q": "Test performa memakai",
            "options": [
              "CSS",
              "benchmark",
              "route",
              "migrasi"
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
              "CSS",
              "route"
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
              "CSS",
              "route",
              "migrasi",
              "resource terikat masa hidup objek"
            ],
            "a": 3,
            "explain": "RAII mengaitkan resource."
          },
          {
            "type": "mc",
            "q": "unique_ptr menandakan",
            "options": [
              "CSS",
              "route",
              "kepemilikan tunggal",
              "migrasi"
            ],
            "a": 2,
            "explain": "Unique kepemilikan tunggal."
          },
          {
            "type": "mc",
            "q": "shared_ptr memungkinkan",
            "options": [
              "CSS",
              "route",
              "kepemilikan bersama",
              "migrasi"
            ],
            "a": 2,
            "explain": "Shared bersama."
          },
          {
            "type": "mc",
            "q": "weak_ptr memecah",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "reference cycle"
            ],
            "a": 3,
            "explain": "Weak memecah siklus."
          },
          {
            "type": "mc",
            "q": "make_unique membuat",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "unique_ptr"
            ],
            "a": 3,
            "explain": "make_unique."
          },
          {
            "type": "mc",
            "q": "make_shared membuat",
            "options": [
              "CSS",
              "route",
              "shared_ptr",
              "migrasi"
            ],
            "a": 2,
            "explain": "make_shared."
          },
          {
            "type": "mc",
            "q": "Smart pointer mengurangi",
            "options": [
              "CSS",
              "kebocoran memori",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Hindari leak."
          },
          {
            "type": "mc",
            "q": "Destructor dipanggil saat",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "objek keluar scope"
            ],
            "a": 3,
            "explain": "Destructor scope."
          },
          {
            "type": "mc",
            "q": "new/delete manual sebaiknya",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
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
              "CSS",
              "route",
              "kepemilikan resource",
              "migrasi"
            ],
            "a": 2,
            "explain": "Move memindah resource."
          },
          {
            "type": "mc",
            "q": "std::move menandai",
            "options": [
              "CSS",
              "route",
              "objek dapat dipindah",
              "migrasi"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "C++11 T&&."
          },
          {
            "type": "mc",
            "q": "Copy constructor dipanggil saat",
            "options": [
              "menyalin objek",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Copy saat menyalin."
          },
          {
            "type": "mc",
            "q": "Move constructor menghindari",
            "options": [
              "salinan mahal",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Move efisien."
          },
          {
            "type": "mc",
            "q": "Rule of five mencakup",
            "options": [
              "destructor/copy/move",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Lima fungsi khusus."
          },
          {
            "type": "mc",
            "q": "Perfect forwarding memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Moved-from state."
          },
          {
            "type": "mc",
            "q": "Move menghindari",
            "options": [
              "deep copy",
              "CSS",
              "route",
              "migrasi"
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
              "CSS",
              "route"
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
              "CSS",
              "route",
              "std::ifstream",
              "migrasi"
            ],
            "a": 2,
            "explain": "ifstream membaca."
          },
          {
            "type": "mc",
            "q": "Menulis berkas memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "std::ofstream"
            ],
            "a": 3,
            "explain": "ofstream menulis."
          },
          {
            "type": "mc",
            "q": "Mode biner memakai",
            "options": [
              "CSS",
              "std::ios::binary",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "ios binary."
          },
          {
            "type": "mc",
            "q": "Memeriksa berkas terbuka",
            "options": [
              "CSS",
              "route",
              "is_open()",
              "migrasi"
            ],
            "a": 2,
            "explain": "is_open."
          },
          {
            "type": "mc",
            "q": "Stream RAII menutup",
            "options": [
              "CSS",
              "otomatis",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "RAII close."
          },
          {
            "type": "mc",
            "q": "Stringstream memformat",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "ya",
              "route"
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Close."
          },
          {
            "type": "mc",
            "q": "Testing IO penting",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "Testing."
          },
          {
            "type": "mc",
            "q": "Dokumentasi penting",
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
        "id": "cpp-18",
        "level": "Menengah",
        "title": "Templates & Generics",
        "exercises": [
          {
            "type": "mc",
            "q": "Template fungsi memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Class template."
          },
          {
            "type": "mc",
            "q": "STL berbasis",
            "options": [
              "template",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "STL berbasis template."
          },
          {
            "type": "mc",
            "q": "Spesialisasi template memungkinkan",
            "options": [
              "perilaku khusus",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Specialization."
          },
          {
            "type": "mc",
            "q": "SFINAE memungkinkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "pemilihan overload"
            ],
            "a": 3,
            "explain": "SFINAE."
          },
          {
            "type": "mc",
            "q": "Concepts (C++20) memudahkan",
            "options": [
              "CSS",
              "route",
              "batasan template",
              "migrasi"
            ],
            "a": 2,
            "explain": "Concepts."
          },
          {
            "type": "mc",
            "q": "Template memengaruhi",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
              "migrasi"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Biasakan wajar."
          },
          {
            "type": "mc",
            "q": "Dokumentasi template penting",
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
              "CSS",
              "route"
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "C++ memakai throw."
          },
          {
            "type": "mc",
            "q": "Standard exception memakai",
            "options": [
              "CSS",
              "std::exception",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "std::exception."
          },
          {
            "type": "mc",
            "q": "what() memberi",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "Exception safety."
          },
          {
            "type": "mc",
            "q": "noexcept menandai",
            "options": [
              "CSS",
              "route",
              "tidak melempar",
              "migrasi"
            ],
            "a": 2,
            "explain": "noexcept."
          },
          {
            "type": "mc",
            "q": "RAII menjaga",
            "options": [
              "CSS",
              "exception safety",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "RAII safety."
          },
          {
            "type": "mc",
            "q": "Custom exception mewarisi",
            "options": [
              "CSS",
              "route",
              "std::exception",
              "migrasi"
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Jangan sembunyikan."
          },
          {
            "type": "mc",
            "q": "Testing exception penting",
            "options": [
              "tidak",
              "CSS",
              "route",
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
              "CSS",
              "route",
              "migrasi",
              "range"
            ],
            "a": 3,
            "explain": "sort range."
          },
          {
            "type": "mc",
            "q": "std::find mencari",
            "options": [
              "CSS",
              "elemen",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "find elemen."
          },
          {
            "type": "mc",
            "q": "std::transform mentransformasi",
            "options": [
              "CSS",
              "route",
              "range",
              "migrasi"
            ],
            "a": 2,
            "explain": "transform."
          },
          {
            "type": "mc",
            "q": "std::accumulate mengakumulasi",
            "options": [
              "CSS",
              "nilai",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "accumulate."
          },
          {
            "type": "mc",
            "q": "std::for_each menjalankan",
            "options": [
              "CSS",
              "route",
              "fungsi per elemen",
              "migrasi"
            ],
            "a": 2,
            "explain": "for_each."
          },
          {
            "type": "mc",
            "q": "std::count menghitung",
            "options": [
              "kemunculan",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "count."
          },
          {
            "type": "mc",
            "q": "std::remove_if menyaring",
            "options": [
              "CSS",
              "elemen",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "remove_if."
          },
          {
            "type": "mc",
            "q": "Algoritma menerima",
            "options": [
              "iterator",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Algoritma iterator."
          },
          {
            "type": "mc",
            "q": "Lambda membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "comparator/predikat"
            ],
            "a": 3,
            "explain": "Lambda predikat."
          },
          {
            "type": "mc",
            "q": "Ranges (C++20) memudahkan",
            "options": [
              "CSS",
              "komposisi",
              "route",
              "migrasi"
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
              "CSS",
              "perilaku tak terdefinisi",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "UB."
          },
          {
            "type": "mc",
            "q": "Use after free adalah",
            "options": [
              "CSS",
              "route",
              "UB",
              "migrasi"
            ],
            "a": 2,
            "explain": "UB."
          },
          {
            "type": "mc",
            "q": "Data race adalah",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "UB"
            ],
            "a": 3,
            "explain": "UB race."
          },
          {
            "type": "mc",
            "q": "UBSan/ASan mendeteksi",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Aman=optimizable."
          },
          {
            "type": "mc",
            "q": "Smart pointer membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "keamanan"
            ],
            "a": 3,
            "explain": "Smart pointer."
          },
          {
            "type": "mc",
            "q": "Bounds checking memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "ya",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Socket API."
          },
          {
            "type": "mc",
            "q": "Asio/Boost.Asio untuk",
            "options": [
              "CSS",
              "networking async",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Asio async."
          },
          {
            "type": "mc",
            "q": "Filesystem C++17 memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "std::filesystem"
            ],
            "a": 3,
            "explain": "std::filesystem."
          },
          {
            "type": "mc",
            "q": "Thread lokal memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "thread_local"
            ],
            "a": 3,
            "explain": "thread_local."
          },
          {
            "type": "mc",
            "q": "Shared memory memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "error_code."
          },
          {
            "type": "mc",
            "q": "Portabilitas penting",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Testing."
          },
          {
            "type": "mc",
            "q": "Dokumentasi penting",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "build system generator",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "CMake generator."
          },
          {
            "type": "mc",
            "q": "Makefile mengotomasi",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Modules."
          },
          {
            "type": "mc",
            "q": "Package manager populer",
            "options": [
              "CSS",
              "route",
              "vcpkg/conan",
              "migrasi"
            ],
            "a": 2,
            "explain": "vcpkg/conan."
          },
          {
            "type": "mc",
            "q": "Preset CMake membantu",
            "options": [
              "CSS",
              "route",
              "konfigurasi",
              "migrasi"
            ],
            "a": 2,
            "explain": "CMake presets."
          },
          {
            "type": "mc",
            "q": "Header-only library",
            "options": [
              "CSS",
              "umum",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Header-only."
          },
          {
            "type": "mc",
            "q": "Cross-compiling penting",
            "options": [
              "tidak",
              "CSS",
              "route",
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
              "CSS",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Nama deskriptif."
          },
          {
            "type": "mc",
            "q": "RAII konsisten penting",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "RAII konsisten."
          },
          {
            "type": "mc",
            "q": "Static analysis memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "clang-tidy"
            ],
            "a": 3,
            "explain": "clang-tidy."
          },
          {
            "type": "mc",
            "q": "Formatter memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "route",
              "migrasi",
              "inferensi tipe"
            ],
            "a": 3,
            "explain": "C++11 auto."
          },
          {
            "type": "mc",
            "q": "nullptr menggantikan",
            "options": [
              "CSS",
              "route",
              "NULL",
              "migrasi"
            ],
            "a": 2,
            "explain": "nullptr type-safe."
          },
          {
            "type": "mc",
            "q": "Range-based for memperpendek",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "iterasi"
            ],
            "a": 3,
            "explain": "Range for."
          },
          {
            "type": "mc",
            "q": "std::optional mewakili",
            "options": [
              "CSS",
              "route",
              "nilai opsional",
              "migrasi"
            ],
            "a": 2,
            "explain": "optional."
          },
          {
            "type": "mc",
            "q": "std::variant untuk",
            "options": [
              "CSS",
              "union type-safe",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "variant."
          },
          {
            "type": "mc",
            "q": "std::string_view menghindari",
            "options": [
              "CSS",
              "salinan string",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "string_view efisien."
          },
          {
            "type": "mc",
            "q": "Concepts membatasi",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "template"
            ],
            "a": 3,
            "explain": "C++20 concepts."
          },
          {
            "type": "mc",
            "q": "Modules menggantikan",
            "options": [
              "CSS",
              "preprocessor include",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "C++20 modules."
          },
          {
            "type": "mc",
            "q": "std::format memformat",
            "options": [
              "CSS",
              "string",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "C++20 format."
          },
          {
            "type": "mc",
            "q": "Coroutines mendukung",
            "options": [
              "CSS",
              "async",
              "route",
              "migrasi"
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "std::thread."
          },
          {
            "type": "mc",
            "q": "Mutex memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "std::mutex"
            ],
            "a": 3,
            "explain": "std::mutex."
          },
          {
            "type": "mc",
            "q": "lock_guard mengunci",
            "options": [
              "CSS",
              "route",
              "RAII",
              "migrasi"
            ],
            "a": 2,
            "explain": "lock_guard RAII."
          },
          {
            "type": "mc",
            "q": "unique_lock fleksibel",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "unique_lock."
          },
          {
            "type": "mc",
            "q": "condition_variable membantu",
            "options": [
              "sinkronisasi",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "condition_variable."
          },
          {
            "type": "mc",
            "q": "future/promise untuk",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "std::async."
          },
          {
            "type": "mc",
            "q": "atomic untuk",
            "options": [
              "operasi atomik",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "std::atomic."
          },
          {
            "type": "mc",
            "q": "Data race harus",
            "options": [
              "dihindari",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Hindari race."
          },
          {
            "type": "mc",
            "q": "Thread sanitizer membantu",
            "options": [
              "deteksi race",
              "CSS",
              "route",
              "migrasi"
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
              "CSS",
              "perf/VTune",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Profiler C++."
          },
          {
            "type": "mc",
            "q": "Optimasi compiler memakai",
            "options": [
              "-O2/-O3",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Flag optimasi."
          },
          {
            "type": "mc",
            "q": "Move semantics menghindari",
            "options": [
              "salinan",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Move efisien."
          },
          {
            "type": "mc",
            "q": "Cache locality penting",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "Locality cache."
          },
          {
            "type": "mc",
            "q": "Reserve vector menghindari",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Inline kecil."
          },
          {
            "type": "mc",
            "q": "Template mempercepat",
            "options": [
              "tanpa virtual",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Template statis."
          },
          {
            "type": "mc",
            "q": "Ukur sebelum optimasi",
            "options": [
              "tidak",
              "CSS",
              "route",
              "wajib"
            ],
            "a": 3,
            "explain": "Ukur dulu."
          },
          {
            "type": "mc",
            "q": "PGO membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "optimasi"
            ],
            "a": 3,
            "explain": "Profile-guided."
          },
          {
            "type": "mc",
            "q": "SIMD memungkinkan",
            "options": [
              "CSS",
              "vektorisasi",
              "route",
              "migrasi"
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
              "CSS",
              "satu instance",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Singleton."
          },
          {
            "type": "mc",
            "q": "Factory memusatkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "pembuatan objek"
            ],
            "a": 3,
            "explain": "Factory."
          },
          {
            "type": "mc",
            "q": "Builder memudahkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Observer."
          },
          {
            "type": "mc",
            "q": "Strategy menukar",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "algoritma"
            ],
            "a": 3,
            "explain": "Strategy."
          },
          {
            "type": "mc",
            "q": "Adapter menjembatani",
            "options": [
              "CSS",
              "antar muka",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Adapter."
          },
          {
            "type": "mc",
            "q": "CRTP memungkinkan",
            "options": [
              "polimorfisme statis",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "CRTP."
          },
          {
            "type": "mc",
            "q": "Type erasure memungkinkan",
            "options": [
              "CSS",
              "abstraksi runtime",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Type erasure."
          },
          {
            "type": "mc",
            "q": "Pola berlebihan berisiko",
            "options": [
              "over-engineering",
              "CSS",
              "route",
              "migrasi"
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
              "CSS",
              "route"
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
              "CSS",
              "komposisi algoritma",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Ranges compose."
          },
          {
            "type": "mc",
            "q": "Views bersifat lazy",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "Views lazy."
          },
          {
            "type": "mc",
            "q": "std::span mengakses",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "Invalidation."
          },
          {
            "type": "mc",
            "q": "Reserve menghindari",
            "options": [
              "CSS",
              "invalidasi/realloc",
              "route",
              "migrasi"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Dokumentasi."
          },
          {
            "type": "mc",
            "q": "Pipe operator memungkinkan komposisi",
            "options": [
              "CSS",
              "aliran data",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Pipe compose."
          },
          {
            "type": "mc",
            "q": "Projection pada ranges membantu",
            "options": [
              "CSS",
              "route",
              "mengakses member",
              "migrasi"
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
              "CSS",
              "route",
              "migrasi",
              "efisiensi"
            ],
            "a": 3,
            "explain": "Efisiensi."
          },
          {
            "type": "mc",
            "q": "Tanpa RTTI/exception membantu",
            "options": [
              "CSS",
              "ukuran",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Kurangi overhead."
          },
          {
            "type": "mc",
            "q": "constexpr membantu",
            "options": [
              "CSS",
              "route",
              "komputasi compile-time",
              "migrasi"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "RAII."
          },
          {
            "type": "mc",
            "q": "Alokasi dinamis dibatasi",
            "options": [
              "sering",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Batasi alokasi."
          },
          {
            "type": "mc",
            "q": "Testing di target penting",
            "options": [
              "tidak",
              "CSS",
              "route",
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
              "CSS",
              "ya",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Hindari overhead."
          },
          {
            "type": "mc",
            "q": "Interrupt-safe code penting",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
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
