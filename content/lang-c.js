/* CodeDuo — blok konten: topik "C" (dipisah dari Blok Web).
 * 1 topik (c) × 31 pelajaran (10 Dasar, 10 Menengah, 11 Advance). Total 305 soal.
 * Engine di content.js (barrel) & app.js. Format tipe soal: mc | fill | code | preview | arrange.
 * ESM murni: dipakai Vite (browser) & Node (test).
 */
'use strict';

const CONTENT_C = [
  {
    "id": "c",
    "name": "C",
    "icon": "🔧",
    "color": "#5c6bc0",
    "desc": "Bahasa sistem, pointer & memori",
    "lessons": [
      {
        "id": "c-1",
        "level": "Dasar",
        "title": "Pengenalan C",
        "exercises": [
          {
            "type": "mc",
            "q": "C adalah bahasa",
            "options": [
              "interpreted",
              "pemakaian sebelum definisi",
              "ukuran member tertentu",
              "compiled dan prosedural"
            ],
            "a": 3,
            "explain": "C dikompilasi dan prosedural."
          },
          {
            "type": "mc",
            "q": "Berkas sumber C berekstensi",
            "options": [
              ".cpp",
              ".c",
              ".cs",
              ".cy"
            ],
            "a": 1,
            "explain": "Berkas sumber C .c."
          },
          {
            "type": "mc",
            "q": "Berkas header berekstensi",
            "options": [
              ".hpp",
              ".head",
              ".h",
              ".ch"
            ],
            "a": 2,
            "explain": "Header C .h."
          },
          {
            "type": "mc",
            "q": "Mengompilasi C memakai",
            "options": [
              "gcc/clang",
              "javac",
              "node",
              "atomic/C11"
            ],
            "a": 0,
            "explain": "Compiler C seperti gcc."
          },
          {
            "type": "mc",
            "q": "Header input/output adalah",
            "options": [
              "<iostream>",
              "<stdio.h>",
              "switch/case",
              "scanf"
            ],
            "a": 1,
            "explain": "stdio.h menyediakan IO."
          },
          {
            "type": "mc",
            "q": "Fungsi utama C adalah",
            "options": [
              "func main()",
              "int main(void)",
              "def main()",
              "tanpa type-check"
            ],
            "a": 1,
            "explain": "C memakai int main."
          },
          {
            "type": "mc",
            "q": "Menampilkan output memakai",
            "options": [
              "printf()",
              "echo()",
              "print()",
              "newline otomatis"
            ],
            "a": 0,
            "explain": "C memakai printf."
          },
          {
            "type": "mc",
            "q": "Mengakhiri statement memakai",
            "options": [
              ".",
              ".h",
              ";",
              "%f"
            ],
            "a": 2,
            "explain": "C memakai titik koma."
          },
          {
            "type": "mc",
            "q": "C dikenal karena",
            "options": [
              "data dan pointer next",
              "kontrol memori dan performa",
              "urutan lock konsisten",
              "input jadi format"
            ],
            "a": 1,
            "explain": "C dekat ke hardware."
          },
          {
            "type": "mc",
            "q": "Komentar memakai",
            "options": [
              "#",
              "// dan /* */",
              "prev dan next",
              "alternatif include guard"
            ],
            "a": 1,
            "explain": "C mendukung dua gaya komentar."
          }
        ]
      },
      {
        "id": "c-2",
        "level": "Dasar",
        "title": "Variabel & Tipe",
        "exercises": [
          {
            "type": "mc",
            "q": "Tipe bilangan bulat adalah",
            "options": [
              "Integer",
              "int",
              "long only",
              "fwrite"
            ],
            "a": 1,
            "explain": "C memakai int."
          },
          {
            "type": "mc",
            "q": "Tipe teks karakter adalah",
            "options": [
              "string",
              "Str",
              "char",
              "%f"
            ],
            "a": 2,
            "explain": "C memakai char."
          },
          {
            "type": "mc",
            "q": "Tipe desimal presisi adalah",
            "options": [
              "decimal",
              "real",
              "menginisialisasi nol",
              "float/double"
            ],
            "a": 3,
            "explain": "C memakai float/double."
          },
          {
            "type": "mc",
            "q": "Tipe boolean memakai",
            "options": [
              "bool native selalu",
              "pointer next",
              "disarankan",
              "int / <stdbool.h>"
            ],
            "a": 3,
            "explain": "C memakai int atau stdbool."
          },
          {
            "type": "mc",
            "q": "Deklarasi variabel memakai",
            "options": [
              "tipe nama;",
              "var nama",
              "let nama",
              "|= (1<<n)"
            ],
            "a": 0,
            "explain": "C memakai tipe eksplisit."
          },
          {
            "type": "mc",
            "q": "Konstanta memakai",
            "options": [
              "final",
              "const atau #define",
              "val",
              "break agar tidak fallthrough"
            ],
            "a": 1,
            "explain": "C memakai const/#define."
          },
          {
            "type": "mc",
            "q": "Ukuran tipe memakai",
            "options": [
              "size()",
              "sizeof",
              "untuk optimasi",
              "socket()"
            ],
            "a": 1,
            "explain": "sizeof mengukur byte."
          },
          {
            "type": "mc",
            "q": "Format printf int memakai",
            "options": [
              "%d",
              "%s",
              "%f",
              "UB"
            ],
            "a": 0,
            "explain": "%d untuk int."
          },
          {
            "type": "mc",
            "q": "Format printf string memakai",
            "options": [
              "%s",
              "%d",
              "%c",
              "++"
            ],
            "a": 0,
            "explain": "%s untuk string."
          },
          {
            "type": "mc",
            "q": "Format printf float memakai",
            "options": [
              "%f",
              "%d",
              "%s",
              "build"
            ],
            "a": 0,
            "explain": "%f untuk float/double."
          }
        ]
      },
      {
        "id": "c-3",
        "level": "Dasar",
        "title": "Operator & Ekspresi",
        "exercises": [
          {
            "type": "mc",
            "q": "Operasi modulo memakai",
            "options": [
              "/",
              "mod",
              "%",
              ";"
            ],
            "a": 2,
            "explain": "C memakai %."
          },
          {
            "type": "mc",
            "q": "Increment memakai",
            "options": [
              "++",
              "+=1 only",
              "dicek",
              "%"
            ],
            "a": 0,
            "explain": "C memakai ++."
          },
          {
            "type": "mc",
            "q": "Operator logika memakai",
            "options": [
              "and or not",
              "&& || !",
              "tidak menunjuk apa pun",
              "kode error terakhir"
            ],
            "a": 1,
            "explain": "C memakai && || !."
          },
          {
            "type": "mc",
            "q": "Perbandingan memakai",
            "options": [
              "== != < >",
              "===",
              "struct Nama { ... };",
              "build system generator"
            ],
            "a": 0,
            "explain": "C memakai ==."
          },
          {
            "type": "mc",
            "q": "Bitwise memakai",
            "options": [
              "prev dan next",
              "alternatif include guard",
              "& | ^ ~",
              "struct + pointer"
            ],
            "a": 2,
            "explain": "C mendukung bitwise."
          },
          {
            "type": "mc",
            "q": "Shift memakai",
            "options": [
              "dianjurkan",
              "mikrokontroler",
              "<< >>",
              "server"
            ],
            "a": 2,
            "explain": "Shift bit."
          },
          {
            "type": "mc",
            "q": "Ternary memakai",
            "options": [
              "if()",
              "di loop",
              "? :",
              "UB"
            ],
            "a": 2,
            "explain": "C memakai ?:."
          },
          {
            "type": "mc",
            "q": "Assignment majemuk memakai",
            "options": [
              "+= -= *=",
              "data dan pointer next",
              "urutan lock konsisten",
              "input jadi format"
            ],
            "a": 0,
            "explain": "C mendukung +=."
          },
          {
            "type": "mc",
            "q": "Operator sizeof menghasilkan",
            "options": [
              "alias tipe",
              "hati-hati free",
              "status fungsi",
              "ukuran byte"
            ],
            "a": 3,
            "explain": "sizeof byte."
          },
          {
            "type": "mc",
            "q": "Cast eksplisit memakai",
            "options": [
              "program proses",
              "-O2/-O3",
              "(tipe) nilai",
              "realloc"
            ],
            "a": 2,
            "explain": "C memakai cast."
          }
        ]
      },
      {
        "id": "c-4",
        "level": "Dasar",
        "title": "Kontrol Alur",
        "exercises": [
          {
            "type": "mc",
            "q": "Percabangan memakai",
            "options": [
              "if/elif",
              "pthread",
              "ya (promotion)",
              "if/else if/else"
            ],
            "a": 3,
            "explain": "C memakai else if."
          },
          {
            "type": "mc",
            "q": "Switch memakai",
            "options": [
              "when",
              "padding/alignment",
              "tipe (*nama)(params)",
              "switch/case"
            ],
            "a": 3,
            "explain": "C memakai switch."
          },
          {
            "type": "mc",
            "q": "case butuh",
            "options": [
              "input jadi format",
              "break agar tidak fallthrough",
              "Dereference dapat menghasilkan undefined behavior",
              "& | ^ ~"
            ],
            "a": 1,
            "explain": "break mencegah fallthrough."
          },
          {
            "type": "mc",
            "q": "Perulangan for memakai",
            "options": [
              "for x in",
              "data antar proses",
              "Dilepas dengan `free` saat tidak dipakai lagi",
              "for (init; cond; step)"
            ],
            "a": 3,
            "explain": "For klasik."
          },
          {
            "type": "mc",
            "q": "while mengulang selama",
            "options": [
              "newline otomatis",
              "kondisi benar",
              "ke string",
              "strcmp"
            ],
            "a": 1,
            "explain": "While bergantung kondisi."
          },
          {
            "type": "mc",
            "q": "do-while menjalankan",
            "options": [
              "minimal sekali",
              "_Thread_local",
              "tanpa type-check",
              "isalpha/toupper"
            ],
            "a": 0,
            "explain": "Minimal sekali."
          },
          {
            "type": "mc",
            "q": "break/continue berlaku",
            "options": [
              "di loop",
              "konversi sempit",
              "strcat",
              "alamat fungsi"
            ],
            "a": 0,
            "explain": "Mengatur loop."
          },
          {
            "type": "mc",
            "q": "goto ada tetapi",
            "options": [
              "makro aman",
              "kesalahan memori",
              "sebaiknya dihindari",
              "debugging/link"
            ],
            "a": 2,
            "explain": "Hindari goto."
          },
          {
            "type": "mc",
            "q": "Loop tak hingga memakai",
            "options": [
              "while(1) / for(;;)",
              "dipakai",
              "ketergantungan struct",
              "compare function"
            ],
            "a": 0,
            "explain": "Loop tak hingga."
          },
          {
            "type": "mc",
            "q": "Kondisi 0 berarti",
            "options": [
              "true",
              "undefined",
              "false",
              "-Wall -Wextra"
            ],
            "a": 2,
            "explain": "C menganggap 0 false."
          }
        ]
      },
      {
        "id": "c-5",
        "level": "Dasar",
        "title": "Input & Output",
        "exercises": [
          {
            "type": "mc",
            "q": "Membaca input memakai",
            "options": [
              "input()",
              "scanf",
              "gets only",
              "sqrt/pow"
            ],
            "a": 1,
            "explain": "scanf membaca."
          },
          {
            "type": "mc",
            "q": "Format scanf int memakai",
            "options": [
              "%s",
              "false",
              "%d",
              "void"
            ],
            "a": 2,
            "explain": "%d untuk int."
          },
          {
            "type": "mc",
            "q": "Format scanf string memakai",
            "options": [
              "%s",
              "%d",
              ";",
              "ya"
            ],
            "a": 0,
            "explain": "%s untuk string."
          },
          {
            "type": "mc",
            "q": "printf tidak menambah",
            "options": [
              "strcpy/strncpy",
              "nilai (by value)",
              "newline otomatis",
              "bersama"
            ],
            "a": 2,
            "explain": "Tambahkan \\n manual."
          },
          {
            "type": "mc",
            "q": "Mencetak ke stderr memakai",
            "options": [
              "fprintf(stderr, ...)",
              "status fungsi",
              "malloc/calloc",
              "pthread_mutex"
            ],
            "a": 0,
            "explain": "fprintf stderr."
          },
          {
            "type": "mc",
            "q": "putchar mencetak",
            "options": [
              "realloc",
              "ukuran byte",
              "sebaiknya dihindari",
              "satu karakter"
            ],
            "a": 3,
            "explain": "putchar karakter."
          },
          {
            "type": "mc",
            "q": "getchar membaca",
            "options": [
              "sinkronisasi",
              "satu karakter",
              "\"rb\"/\"wb\"",
              "#ifndef/#define/#endif"
            ],
            "a": 1,
            "explain": "getchar karakter."
          },
          {
            "type": "mc",
            "q": "scanf mengembalikan",
            "options": [
              "optimasi lintas modul",
              "node + pointer",
              "jumlah item terbaca",
              "// dan /* */"
            ],
            "a": 2,
            "explain": "Cek kembalian scanf."
          },
          {
            "type": "mc",
            "q": "Buffer input penting",
            "options": [
              "tidak",
              "dicek",
              "%",
              "ya"
            ],
            "a": 3,
            "explain": "Perhatikan buffer."
          },
          {
            "type": "mc",
            "q": "fflush(stdout) memaksa",
            "options": [
              "deteksi kebocoran",
              "flush output",
              "_Thread_local",
              "tanpa type-check"
            ],
            "a": 1,
            "explain": "Flush output."
          }
        ]
      },
      {
        "id": "c-6",
        "level": "Dasar",
        "title": "Casting & Konversi",
        "exercises": [
          {
            "type": "mc",
            "q": "Konversi int ke float otomatis",
            "options": [
              "tidak",
              "while(1) / for(;;)",
              "flush output",
              "ya (promotion)"
            ],
            "a": 3,
            "explain": "Promosi otomatis."
          },
          {
            "type": "mc",
            "q": "Cast eksplisit memakai",
            "options": [
              "cast(x)",
              "#ifndef/#define/#endif",
              "strlen/strcpy",
              "(float)x"
            ],
            "a": 3,
            "explain": "C memakai (tipe)."
          },
          {
            "type": "mc",
            "q": "atoi mengubah",
            "options": [
              "& | ^ ~",
              "alamat elemen pertama",
              ". (atau -> untuk pointer)",
              "string ke int"
            ],
            "a": 3,
            "explain": "atoi konversi."
          },
          {
            "type": "mc",
            "q": "atof mengubah",
            "options": [
              "== != < >",
              "string ke float",
              "struct Nama { ... };",
              "build system generator"
            ],
            "a": 1,
            "explain": "atof konversi."
          },
          {
            "type": "mc",
            "q": "sprintf memformat",
            "options": [
              "bersama",
              "edge case",
              "pesan error",
              "ke string"
            ],
            "a": 3,
            "explain": "sprintf format."
          },
          {
            "type": "mc",
            "q": "Truncation terjadi saat",
            "options": [
              "konversi sempit",
              "handler khusus",
              "transfer data",
              "^= (1<<n)"
            ],
            "a": 0,
            "explain": "Konversi menyempit."
          },
          {
            "type": "mc",
            "q": "Integer overflow memicu",
            "options": [
              "void",
              "&",
              "UB",
              "++"
            ],
            "a": 2,
            "explain": "Overflow UB."
          },
          {
            "type": "mc",
            "q": "sizeof memberi",
            "options": [
              "volatile pointer",
              "client",
              "ukuran byte",
              "&= ~(1<<n)"
            ],
            "a": 2,
            "explain": "sizeof byte."
          },
          {
            "type": "mc",
            "q": "Cek konversi penting",
            "options": [
              "tidak",
              "++",
              "ya",
              "..."
            ],
            "a": 2,
            "explain": "Validasi konversi."
          },
          {
            "type": "mc",
            "q": "strtol lebih aman dari atoi",
            "options": [
              "tidak",
              "ya",
              "fgets",
              "build"
            ],
            "a": 1,
            "explain": "strtol deteksi error."
          }
        ]
      },
      {
        "id": "c-7",
        "level": "Dasar",
        "title": "Array & String",
        "exercises": [
          {
            "type": "mc",
            "q": "Array dideklarasikan memakai",
            "options": [
              "int[] arr",
              "makro terdefinisi",
              "int arr[10];",
              "sqrt/pow"
            ],
            "a": 2,
            "explain": "C memakai [ukuran]."
          },
          {
            "type": "mc",
            "q": "Indexing array dimulai",
            "options": [
              "0",
              "1",
              "&",
              "++"
            ],
            "a": 0,
            "explain": "C memakai index 0."
          },
          {
            "type": "mc",
            "q": "Nama array merujuk",
            "options": [
              "alamat elemen pertama",
              ". (atau -> untuk pointer)",
              "objek ke program",
              "perilaku tak terdefinisi"
            ],
            "a": 0,
            "explain": "Array meluruh jadi pointer."
          },
          {
            "type": "mc",
            "q": "String C adalah",
            "options": [
              "pointer ke struct",
              "array char dengan null terminator",
              "free tidak dipanggil",
              "API sistem Unix"
            ],
            "a": 1,
            "explain": "String C diakhiri \\0."
          },
          {
            "type": "mc",
            "q": "Panjang string memakai",
            "options": [
              ".length",
              "status fungsi",
              "strlen()",
              "malloc/calloc"
            ],
            "a": 2,
            "explain": "strlen menghitung."
          },
          {
            "type": "mc",
            "q": "Menyalin string memakai",
            "options": [
              "realloc",
              "ukuran byte",
              "strcpy/strncpy",
              "sebaiknya dihindari"
            ],
            "a": 2,
            "explain": "strcpy menyalin."
          },
          {
            "type": "mc",
            "q": "Membandingkan string memakai",
            "options": [
              "strcmp",
              "==",
              "pointer next",
              "disarankan"
            ],
            "a": 0,
            "explain": "strcmp membandingkan isi."
          },
          {
            "type": "mc",
            "q": "Menggabungkan string memakai",
            "options": [
              "proses baru",
              "perf/gprof",
              "FIFO",
              "strcat"
            ],
            "a": 3,
            "explain": "strcat menggabungkan."
          },
          {
            "type": "mc",
            "q": "Membaca baris memakai",
            "options": [
              "gets (tidak aman)",
              "dicek",
              "fgets",
              "gcc/clang"
            ],
            "a": 2,
            "explain": "fgets lebih aman."
          },
          {
            "type": "mc",
            "q": "Array 2D memakai",
            "options": [
              "deteksi kebocoran",
              "int m[2][2]",
              "_Thread_local",
              "feof"
            ],
            "a": 1,
            "explain": "C memakai dua kurung."
          }
        ]
      },
      {
        "id": "c-8",
        "level": "Dasar",
        "title": "Fungsi",
        "exercises": [
          {
            "type": "mc",
            "q": "Mendefinisikan fungsi memakai",
            "options": [
              "tipe nama(params)",
              "function nama",
              "def nama",
              "disarankan"
            ],
            "a": 0,
            "explain": "C memakai tipe balik."
          },
          {
            "type": "mc",
            "q": "Deklarasi fungsi (prototype) memungkinkan",
            "options": [
              "// dan /* */",
              "pemakaian sebelum definisi",
              "for (init; cond; step)",
              "mengubah nilai asli"
            ],
            "a": 1,
            "explain": "Prototype deklarasi."
          },
          {
            "type": "mc",
            "q": "Fungsi tanpa nilai balik memakai",
            "options": [
              "null",
              "socket()",
              "void",
              "perawatan"
            ],
            "a": 2,
            "explain": "C memakai void."
          },
          {
            "type": "mc",
            "q": "Parameter dikirim secara",
            "options": [
              "nilai (by value)",
              "referensi otomatis",
              "printf()",
              "sizeof"
            ],
            "a": 0,
            "explain": "C default by value."
          },
          {
            "type": "mc",
            "q": "Mengirim pointer memungkinkan",
            "options": [
              "Dereference dapat menghasilkan undefined behavior",
              "& | ^ ~",
              "alamat elemen pertama",
              "mengubah nilai asli"
            ],
            "a": 3,
            "explain": "Pointer memberi efek."
          },
          {
            "type": "mc",
            "q": "Fungsi variadic memakai",
            "options": [
              "JTAG/SWD",
              "...",
              "dicek",
              "scanf"
            ],
            "a": 1,
            "explain": "C mendukung variadic."
          },
          {
            "type": "mc",
            "q": "Rekursi memungkinkan",
            "options": [
              "fungsi memanggil dirinya",
              "kontrol memori dan performa",
              "break agar tidak fallthrough",
              "pemakaian sebelum definisi"
            ],
            "a": 0,
            "explain": "Rekursi dukung."
          },
          {
            "type": "mc",
            "q": "Nama fungsi merujuk",
            "options": [
              "alamat fungsi",
              "socket()",
              "perawatan",
              "memori"
            ],
            "a": 0,
            "explain": "Fungsi punya alamat."
          },
          {
            "type": "mc",
            "q": "Fungsi harus dideklarasikan sebelum",
            "options": [
              "handler khusus",
              "dipakai",
              "transfer data",
              "^= (1<<n)"
            ],
            "a": 1,
            "explain": "Prototype diperlukan."
          },
          {
            "type": "mc",
            "q": "Header untuk fungsi adalah",
            "options": [
              "deklarasi",
              "strlen()",
              "void",
              "alias tipe"
            ],
            "a": 0,
            "explain": "Header berisi deklarasi."
          }
        ]
      },
      {
        "id": "c-9",
        "level": "Dasar",
        "title": "Pointer",
        "exercises": [
          {
            "type": "mc",
            "q": "Pointer menyimpan",
            "options": [
              "alamat memori",
              "nilai",
              "fread",
              "makro terdefinisi"
            ],
            "a": 0,
            "explain": "Pointer menyimpan alamat."
          },
          {
            "type": "mc",
            "q": "Mengambil alamat memakai",
            "options": [
              "*",
              "->",
              "&",
              "++"
            ],
            "a": 2,
            "explain": "Operator & mengambil alamat."
          },
          {
            "type": "mc",
            "q": "Dereference memakai",
            "options": [
              "&",
              "->",
              "*",
              ";"
            ],
            "a": 2,
            "explain": "Operator * mengakses nilai."
          },
          {
            "type": "mc",
            "q": "Deklarasi pointer memakai",
            "options": [
              "int *p",
              "int &p",
              "(float)x",
              "strcpy/strncpy"
            ],
            "a": 0,
            "explain": "C memakai int *."
          },
          {
            "type": "mc",
            "q": "Pointer NULL menandakan",
            "options": [
              "for (init; cond; step)",
              "mengubah nilai asli",
              "tidak menunjuk apa pun",
              "data dan pointer next"
            ],
            "a": 2,
            "explain": "NULL pointer kosong."
          },
          {
            "type": "mc",
            "q": "Pointer aritmetika memungkinkan",
            "options": [
              "int *p",
              "padding/alignment",
              "tipe (*nama)(params)",
              "navigasi array"
            ],
            "a": 3,
            "explain": "Aritmetika pointer."
          },
          {
            "type": "mc",
            "q": "Pointer ke pointer memakai",
            "options": [
              "int &&",
              "int **",
              "banyak socket",
              "flag efisien"
            ],
            "a": 1,
            "explain": "C memakai **."
          },
          {
            "type": "mc",
            "q": "Pointer fungsi memungkinkan",
            "options": [
              "nilai (salinan)",
              "definisi",
              "ukuran alokasi",
              "callback"
            ],
            "a": 3,
            "explain": "Pointer fungsi callback."
          },
          {
            "type": "mc",
            "q": "Dereference pointer invalid menyebabkan",
            "options": [
              "int arr[10];",
              "undefined behavior",
              "int m[2][2]",
              "deklarasi"
            ],
            "a": 1,
            "explain": "Perilaku tak terdefinisi."
          },
          {
            "type": "mc",
            "q": "Pointer harus diinisialisasi",
            "options": [
              "ya",
              "tidak",
              "LIFO",
              "<< >>"
            ],
            "a": 0,
            "explain": "Inisialisasi penting."
          }
        ]
      },
      {
        "id": "c-10",
        "level": "Dasar",
        "title": "Struct & Union",
        "exercises": [
          {
            "type": "mc",
            "q": "Struct didefinisikan memakai",
            "options": [
              "class Nama",
              "Alamat suatu objek atau fungsi",
              "const atau #define",
              "struct Nama { ... };"
            ],
            "a": 3,
            "explain": "C memakai struct."
          },
          {
            "type": "mc",
            "q": "Mengakses member memakai",
            "options": [
              "Mengambil alamat value",
              ". (atau -> untuk pointer)",
              "&& || !",
              "string ke int"
            ],
            "a": 1,
            "explain": "Dot/arrow mengakses."
          },
          {
            "type": "mc",
            "q": "Arrow (->) dipakai untuk",
            "options": [
              "array + hash",
              "pointer ke struct",
              "kontrol memori dan performa",
              "break agar tidak fallthrough"
            ],
            "a": 1,
            "explain": "Arrow untuk pointer."
          },
          {
            "type": "mc",
            "q": "typedef membuat",
            "options": [
              "penjadwalan",
              "banyak socket",
              "flag efisien",
              "alias tipe"
            ],
            "a": 3,
            "explain": "typedef alias."
          },
          {
            "type": "mc",
            "q": "Union memakai memori",
            "options": [
              "terpisah",
              "pthread_create",
              "fopen",
              "bersama"
            ],
            "a": 3,
            "explain": "Union berbagi memori."
          },
          {
            "type": "mc",
            "q": "Struct dapat bersarang",
            "options": [
              "tidak",
              "<< >>",
              ";",
              "ya"
            ],
            "a": 3,
            "explain": "Struct bersarang."
          },
          {
            "type": "mc",
            "q": "Ukuran struct memengaruhi",
            "options": [
              "compare function",
              "deteksi kebocoran",
              "padding/alignment",
              "_Thread_local"
            ],
            "a": 2,
            "explain": "Padding struct."
          },
          {
            "type": "mc",
            "q": "Bit-field memungkinkan",
            "options": [
              "Dereference dapat menghasilkan undefined behavior",
              "& | ^ ~",
              "alamat elemen pertama",
              "ukuran member tertentu"
            ],
            "a": 3,
            "explain": "Bit-field hemat."
          },
          {
            "type": "mc",
            "q": "Struct dikirim ke fungsi secara",
            "options": [
              "(tipe) nilai",
              "while(1) / for(;;)",
              "flush output",
              "nilai (salinan)"
            ],
            "a": 3,
            "explain": "Salinan kecuali pointer."
          },
          {
            "type": "mc",
            "q": "Forward declaration membantu",
            "options": [
              "makro terdefinisi",
              "ketergantungan struct",
              "sqrt/pow",
              "preprocess/compile/assemble/link"
            ],
            "a": 1,
            "explain": "Deklarasi maju."
          }
        ]
      },
      {
        "id": "c-11",
        "level": "Menengah",
        "title": "Linked Structure",
        "exercises": [
          {
            "type": "mc",
            "q": "Node linked list berisi",
            "options": [
              "const atau #define",
              "jumlah item terbaca",
              "data dan pointer next",
              "fungsi memanggil dirinya"
            ],
            "a": 2,
            "explain": "Node data+next."
          },
          {
            "type": "mc",
            "q": "Menambah node memerlukan",
            "options": [
              ".so/.dll",
              "pthread_join",
              "fclose",
              "alokasi memori"
            ],
            "a": 3,
            "explain": "Alokasi node."
          },
          {
            "type": "mc",
            "q": "Traversal memakai",
            "options": [
              "kode error",
              "pointer next",
              "int main(void)",
              "tipe nama;"
            ],
            "a": 1,
            "explain": "Traversal next."
          },
          {
            "type": "mc",
            "q": "Free list penting",
            "options": [
              "tidak",
              "ya",
              ".a",
              "fopen"
            ],
            "a": 1,
            "explain": "Free setelah selesai."
          },
          {
            "type": "mc",
            "q": "Double linked list punya",
            "options": [
              "Dereference dapat menghasilkan undefined behavior",
              "& | ^ ~",
              "prev dan next",
              "alamat elemen pertama"
            ],
            "a": 2,
            "explain": "Double list."
          },
          {
            "type": "mc",
            "q": "Cyclic structure perlu",
            "options": [
              "dipakai",
              "int **",
              "hati-hati free",
              "ketergantungan struct"
            ],
            "a": 2,
            "explain": "Hindari loop free."
          },
          {
            "type": "mc",
            "q": "Sentinel node memudahkan",
            "options": [
              "berbeda distribusi",
              "JTAG/SWD",
              "edge case",
              "skalabilitas"
            ],
            "a": 2,
            "explain": "Sentinel."
          },
          {
            "type": "mc",
            "q": "Pointer head/tail penting",
            "options": [
              "tidak",
              "ya",
              ";",
              "%d"
            ],
            "a": 1,
            "explain": "Kelola head/tail."
          },
          {
            "type": "mc",
            "q": "Menguji struktur penting",
            "options": [
              "tidak",
              "wajib",
              ".h",
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
              "...",
              "lock",
              "ya"
            ],
            "a": 3,
            "explain": "Dokumentasi."
          }
        ]
      },
      {
        "id": "c-12",
        "level": "Menengah",
        "title": "Function Pointer & Callback",
        "exercises": [
          {
            "type": "mc",
            "q": "Pointer fungsi dideklarasikan",
            "options": [
              "navigasi array",
              "nilai (salinan)",
              "definisi",
              "tipe (*nama)(params)"
            ],
            "a": 3,
            "explain": "Sintaks pointer fungsi."
          },
          {
            "type": "mc",
            "q": "Callback memakai",
            "options": [
              "urutan byte",
              "memori/berkas",
              "pointer fungsi",
              "dicek"
            ],
            "a": 2,
            "explain": "Callback pointer."
          },
          {
            "type": "mc",
            "q": "qsort menerima",
            "options": [
              "deteksi kebocoran",
              "_Thread_local",
              "tanpa type-check",
              "compare function"
            ],
            "a": 3,
            "explain": "qsort comparator."
          },
          {
            "type": "mc",
            "q": "Function pointer dalam struct memungkinkan",
            "options": [
              "vtable",
              "deteksi",
              "<stdio.h>",
              "kondisi benar"
            ],
            "a": 0,
            "explain": "Vtable pola."
          },
          {
            "type": "mc",
            "q": "Mengosongkan pointer setelah free",
            "options": [
              "tidak",
              "disarankan",
              "pthread_create",
              "fopen"
            ],
            "a": 1,
            "explain": "Set NULL."
          },
          {
            "type": "mc",
            "q": "Typedef memudahkan",
            "options": [
              "tipe nama;",
              "pointer fungsi",
              "<< >>",
              "minimal sekali"
            ],
            "a": 1,
            "explain": "Typedef."
          },
          {
            "type": "mc",
            "q": "Callback harus divalidasi",
            "options": [
              "tidak",
              "dicek",
              "%",
              "ya"
            ],
            "a": 3,
            "explain": "Validasi callback."
          },
          {
            "type": "mc",
            "q": "Kesalahan signature berbahaya",
            "options": [
              "tidak",
              "UB",
              "fgets",
              "ya"
            ],
            "a": 3,
            "explain": "Signature penting."
          },
          {
            "type": "mc",
            "q": "Uji callback penting",
            "options": [
              "tidak",
              "ya",
              ".c",
              "int"
            ],
            "a": 1,
            "explain": "Uji callback."
          },
          {
            "type": "mc",
            "q": "Dokumentasi penting",
            "options": [
              "ya",
              "tidak",
              "lock",
              "fread"
            ],
            "a": 0,
            "explain": "Dokumentasi."
          }
        ]
      },
      {
        "id": "c-13",
        "level": "Menengah",
        "title": "Error Handling C",
        "exercises": [
          {
            "type": "mc",
            "q": "C tidak punya exception",
            "options": [
              "tidak",
              "dicek",
              "%",
              "ya"
            ],
            "a": 3,
            "explain": "C memakai kode balik."
          },
          {
            "type": "mc",
            "q": "Kode balik menandakan",
            "options": [
              "<< >>",
              "minimal sekali",
              "status fungsi",
              "fprintf(stderr, ...)"
            ],
            "a": 2,
            "explain": "Return menandai status."
          },
          {
            "type": "mc",
            "q": "errno menyimpan",
            "options": [
              "kode error terakhir",
              "tidak menunjuk apa pun",
              "object dan library",
              "array + hash"
            ],
            "a": 0,
            "explain": "errno error."
          },
          {
            "type": "mc",
            "q": "perror mencetak",
            "options": [
              "satu karakter",
              "pesan error",
              "fgets",
              "dipakai"
            ],
            "a": 1,
            "explain": "perror pesan."
          },
          {
            "type": "mc",
            "q": "Cek NULL setelah malloc penting",
            "options": [
              "tidak",
              "build",
              "ya",
              "feof"
            ],
            "a": 2,
            "explain": "Cek alokasi."
          },
          {
            "type": "mc",
            "q": "goto cleanup pola umum",
            "options": [
              "tidak",
              "dicek",
              "ya",
              "%"
            ],
            "a": 2,
            "explain": "Goto untuk cleanup."
          },
          {
            "type": "mc",
            "q": "Menghindari mengabaikan error",
            "options": [
              "tidak",
              "fopen",
              "penting",
              "open/read/write"
            ],
            "a": 2,
            "explain": "Tangani error."
          },
          {
            "type": "mc",
            "q": "Errno harus direset",
            "options": [
              "tidak",
              "ya",
              "++",
              "..."
            ],
            "a": 1,
            "explain": "Reset errno."
          },
          {
            "type": "mc",
            "q": "Uji jalur error penting",
            "options": [
              "tidak",
              ";",
              "%d",
              "ya"
            ],
            "a": 3,
            "explain": "Uji error."
          },
          {
            "type": "mc",
            "q": "Dokumentasi error penting",
            "options": [
              "ya",
              "tidak",
              "++",
              "..."
            ],
            "a": 0,
            "explain": "Dokumentasi."
          }
        ]
      },
      {
        "id": "c-14",
        "level": "Menengah",
        "title": "Modularisasi & Build",
        "exercises": [
          {
            "type": "mc",
            "q": "Header berisi",
            "options": [
              "free",
              "sinkronisasi",
              "deklarasi",
              "\"rb\"/\"wb\""
            ],
            "a": 2,
            "explain": "Deklarasi di header."
          },
          {
            "type": "mc",
            "q": "Sumber berisi",
            "options": [
              "definisi",
              "int",
              "(tipe) nilai",
              "while(1) / for(;;)"
            ],
            "a": 0,
            "explain": "Definisi di .c."
          },
          {
            "type": "mc",
            "q": "Makefile mengotomasi",
            "options": [
              "build",
              "hati-hati free",
              "status fungsi",
              "malloc/calloc"
            ],
            "a": 0,
            "explain": "Makefile build."
          },
          {
            "type": "mc",
            "q": "CMake adalah",
            "options": [
              "free tidak dipanggil",
              "API sistem Unix",
              "Mengambil alamat value",
              "build system generator"
            ],
            "a": 3,
            "explain": "CMake generator."
          },
          {
            "type": "mc",
            "q": "Static library berekstensi",
            "options": [
              ".so",
              ".a",
              ".dll",
              ".lib"
            ],
            "a": 1,
            "explain": "Static lib .a."
          },
          {
            "type": "mc",
            "q": "Shared library berekstensi",
            "options": [
              ".a",
              "&= ~(1<<n)",
              "proses baru",
              ".so/.dll"
            ],
            "a": 3,
            "explain": "Shared lib .so."
          },
          {
            "type": "mc",
            "q": "Linking menghubungkan",
            "options": [
              "data dan pointer next",
              "urutan lock konsisten",
              "input jadi format",
              "objek ke program"
            ],
            "a": 3,
            "explain": "Link objek."
          },
          {
            "type": "mc",
            "q": "Menjaga deklarasi konsisten",
            "options": [
              "tidak",
              "LIFO",
              "<< >>",
              "ya"
            ],
            "a": 3,
            "explain": "Konsistensi header."
          },
          {
            "type": "mc",
            "q": "Include guard penting",
            "options": [
              "tidak",
              "ya",
              "UB",
              "fgets"
            ],
            "a": 1,
            "explain": "Include guard."
          },
          {
            "type": "mc",
            "q": "Dokumentasi build penting",
            "options": [
              "tidak",
              "ya",
              "++",
              "..."
            ],
            "a": 1,
            "explain": "Dokumentasi."
          }
        ]
      },
      {
        "id": "c-15",
        "level": "Menengah",
        "title": "Memori Dinamis",
        "exercises": [
          {
            "type": "mc",
            "q": "Alokasi memori memakai",
            "options": [
              "multiple definition",
              "pengurutan",
              "malloc/calloc",
              "-Wall -Wextra"
            ],
            "a": 2,
            "explain": "malloc mengalokasi."
          },
          {
            "type": "mc",
            "q": "Melepas memori memakai",
            "options": [
              "delete",
              "free",
              "<< >>",
              "strcat"
            ],
            "a": 1,
            "explain": "C memakai free."
          },
          {
            "type": "mc",
            "q": "calloc berbeda karena",
            "options": [
              "open/read/write",
              "makro aman",
              "menginisialisasi nol",
              "kesalahan memori"
            ],
            "a": 2,
            "explain": "calloc zero-init."
          },
          {
            "type": "mc",
            "q": "realloc mengubah",
            "options": [
              "<stdio.h>",
              "int / <stdbool.h>",
              "kondisi benar",
              "ukuran alokasi"
            ],
            "a": 3,
            "explain": "realloc mengubah ukuran."
          },
          {
            "type": "mc",
            "q": "Memory leak terjadi bila",
            "options": [
              "array + hash",
              "kontrol memori dan performa",
              "free tidak dipanggil",
              "break agar tidak fallthrough"
            ],
            "a": 2,
            "explain": "Lupa free."
          },
          {
            "type": "mc",
            "q": "Double free berbahaya",
            "options": [
              "tidak",
              ".a",
              "ya",
              "fopen"
            ],
            "a": 2,
            "explain": "Double free UB."
          },
          {
            "type": "mc",
            "q": "Use after free berbahaya",
            "options": [
              "tidak",
              "ya",
              "++",
              "..."
            ],
            "a": 1,
            "explain": "Use after free UB."
          },
          {
            "type": "mc",
            "q": "malloc dapat mengembalikan",
            "options": [
              "data antar proses",
              "Dilepas dengan `free` saat tidak dipakai lagi",
              "NULL bila gagal",
              "== != < >"
            ],
            "a": 2,
            "explain": "Cek NULL."
          },
          {
            "type": "mc",
            "q": "sizeof membantu",
            "options": [
              "realloc",
              "ukuran byte",
              "ukuran alokasi",
              "sebaiknya dihindari"
            ],
            "a": 2,
            "explain": "sizeof mengukur."
          },
          {
            "type": "mc",
            "q": "Valgrind membantu",
            "options": [
              "deteksi kebocoran",
              "status fungsi",
              "malloc/calloc",
              "pthread_mutex"
            ],
            "a": 0,
            "explain": "Valgrind analisis memori."
          }
        ]
      },
      {
        "id": "c-16",
        "level": "Menengah",
        "title": "Threading C",
        "exercises": [
          {
            "type": "mc",
            "q": "Thread POSIX memakai",
            "options": [
              "pthread_create",
              "float/double",
              "switch/case",
              "scanf"
            ],
            "a": 0,
            "explain": "pthread_create."
          },
          {
            "type": "mc",
            "q": "Join thread memakai",
            "options": [
              "pthread_join",
              "tanpa type-check",
              "isalpha/toupper",
              "kebocoran memori"
            ],
            "a": 0,
            "explain": "pthread_join."
          },
          {
            "type": "mc",
            "q": "Mutex memakai",
            "options": [
              "pthread_mutex",
              "kondisi benar",
              "newline otomatis",
              "ke string"
            ],
            "a": 0,
            "explain": "pthread_mutex."
          },
          {
            "type": "mc",
            "q": "Condition variable membantu",
            "options": [
              "sinkronisasi",
              "assert",
              "kesalahan memori",
              "debugging/link"
            ],
            "a": 0,
            "explain": "Condvar."
          },
          {
            "type": "mc",
            "q": "Race condition dihindari dengan",
            "options": [
              "& (1<<n)",
              "performa",
              ".c",
              "lock"
            ],
            "a": 3,
            "explain": "Lock."
          },
          {
            "type": "mc",
            "q": "Atomic operations memakai",
            "options": [
              "tipe (*nama)(params)",
              "atomic/C11",
              "penting",
              "menginisialisasi nol"
            ],
            "a": 1,
            "explain": "Atomics C11."
          },
          {
            "type": "mc",
            "q": "Deadlock dihindari",
            "options": [
              "object dan library",
              "urutan lock konsisten",
              "array + hash",
              "kontrol memori dan performa"
            ],
            "a": 1,
            "explain": "Urutan lock."
          },
          {
            "type": "mc",
            "q": "Testing concurrency penting",
            "options": [
              "tidak",
              "ya",
              ";",
              "%d"
            ],
            "a": 1,
            "explain": "Testing."
          },
          {
            "type": "mc",
            "q": "TLS memakai",
            "options": [
              "preprocess/compile/assemble/link",
              "_Thread_local",
              "volatile pointer",
              "client"
            ],
            "a": 1,
            "explain": "Thread local."
          },
          {
            "type": "mc",
            "q": "Dokumentasi penting",
            "options": [
              "tidak",
              "void",
              "ya",
              "&"
            ],
            "a": 2,
            "explain": "Dokumentasi."
          }
        ]
      },
      {
        "id": "c-17",
        "level": "Menengah",
        "title": "File I/O",
        "exercises": [
          {
            "type": "mc",
            "q": "Membuka berkas memakai",
            "options": [
              "int **",
              "build",
              "fopen",
              "_Thread_local"
            ],
            "a": 2,
            "explain": "fopen membuka."
          },
          {
            "type": "mc",
            "q": "Menutup berkas memakai",
            "options": [
              "JTAG/SWD",
              "skalabilitas",
              "fclose",
              "urutan byte"
            ],
            "a": 2,
            "explain": "fclose menutup."
          },
          {
            "type": "mc",
            "q": "Membaca baris memakai",
            "options": [
              "vtable",
              "fgets",
              ".a",
              "pthread_create"
            ],
            "a": 1,
            "explain": "fgets membaca."
          },
          {
            "type": "mc",
            "q": "Menulis memakai",
            "options": [
              "fprintf/fwrite",
              "memori",
              "komunikasi jaringan",
              "deteksi"
            ],
            "a": 0,
            "explain": "fprintf/fwrite."
          },
          {
            "type": "mc",
            "q": "Mode biner memakai",
            "options": [
              "\"r\"/\"w\"",
              "pthread_join",
              "fclose",
              "\"rb\"/\"wb\""
            ],
            "a": 3,
            "explain": "Mode biner."
          },
          {
            "type": "mc",
            "q": "Membaca blok memakai",
            "options": [
              "LIFO",
              "fread",
              "int main(void)",
              "tipe nama;"
            ],
            "a": 1,
            "explain": "fread membaca blok."
          },
          {
            "type": "mc",
            "q": "Menulis blok memakai",
            "options": [
              "makro/konstanta",
              "fwrite",
              "malloc/atoi/exit",
              "pencarian biner"
            ],
            "a": 1,
            "explain": "fwrite menulis blok."
          },
          {
            "type": "mc",
            "q": "Memeriksa akhir file memakai",
            "options": [
              "sizeof",
              "? :",
              "di loop",
              "feof"
            ],
            "a": 3,
            "explain": "feof tanda akhir."
          },
          {
            "type": "mc",
            "q": "Error IO harus dicek",
            "options": [
              "tidak",
              ".h",
              "char",
              "ya"
            ],
            "a": 3,
            "explain": "Cek kembalian."
          },
          {
            "type": "mc",
            "q": "File descriptor (POSIX) memakai",
            "options": [
              "penting",
              "menginisialisasi nol",
              "open/read/write",
              "makro terdefinisi"
            ],
            "a": 2,
            "explain": "Syscall POSIX."
          }
        ]
      },
      {
        "id": "c-18",
        "level": "Menengah",
        "title": "Preprocessor & Header",
        "exercises": [
          {
            "type": "mc",
            "q": "#include menyertakan",
            "options": [
              "assert",
              "header",
              "kesalahan memori",
              "debugging/link"
            ],
            "a": 1,
            "explain": "#include header."
          },
          {
            "type": "mc",
            "q": "#define membuat",
            "options": [
              "konversi sempit",
              "makro/konstanta",
              "strcat",
              "alamat fungsi"
            ],
            "a": 1,
            "explain": "#define makro."
          },
          {
            "type": "mc",
            "q": "Include guard memakai",
            "options": [
              "tanpa type-check",
              "isalpha/toupper",
              "kebocoran memori",
              "#ifndef/#define/#endif"
            ],
            "a": 3,
            "explain": "Include guard."
          },
          {
            "type": "mc",
            "q": "#ifdef memeriksa",
            "options": [
              "kondisi benar",
              "makro terdefinisi",
              "newline otomatis",
              "ke string"
            ],
            "a": 1,
            "explain": "#ifdef kondisional."
          },
          {
            "type": "mc",
            "q": "Makro fungsi memakai",
            "options": [
              "perawatan",
              "#define F(x) ...",
              "memori",
              "komunikasi jaringan"
            ],
            "a": 1,
            "explain": "Makro fungsi."
          },
          {
            "type": "mc",
            "q": "Makro berisiko karena",
            "options": [
              "tanpa type-check",
              "alokasi memori",
              "vtable",
              "pthread_create"
            ],
            "a": 0,
            "explain": "Makro tidak type-safe."
          },
          {
            "type": "mc",
            "q": "inline function menggantikan",
            "options": [
              "berbeda distribusi",
              "makro aman",
              "JTAG/SWD",
              "skalabilitas"
            ],
            "a": 1,
            "explain": "Inline lebih aman."
          },
          {
            "type": "mc",
            "q": "#pragma once adalah",
            "options": [
              "alternatif include guard",
              "for (init; cond; step)",
              "mengubah nilai asli",
              "data dan pointer next"
            ],
            "a": 0,
            "explain": "Banyak compiler mendukung."
          },
          {
            "type": "mc",
            "q": "Header sebaiknya berisi",
            "options": [
              "printf()",
              "sizeof",
              "di loop",
              "deklarasi"
            ],
            "a": 3,
            "explain": "Deklarasi di header."
          },
          {
            "type": "mc",
            "q": "Definisi di header bisa memicu",
            "options": [
              "if/else if/else",
              "ya (promotion)",
              "strlen()",
              "multiple definition"
            ],
            "a": 3,
            "explain": "Hindari definisi di header."
          }
        ]
      },
      {
        "id": "c-19",
        "level": "Menengah",
        "title": "Standard Library",
        "exercises": [
          {
            "type": "mc",
            "q": "stdlib.h menyediakan",
            "options": [
              "malloc/atoi/exit",
              "strlen()",
              "alias tipe",
              "hati-hati free"
            ],
            "a": 0,
            "explain": "stdlib utilitas."
          },
          {
            "type": "mc",
            "q": "string.h menyediakan",
            "options": [
              "preprocess/compile/assemble/link",
              "volatile pointer",
              "strlen/strcpy",
              "client"
            ],
            "a": 2,
            "explain": "string.h manip string."
          },
          {
            "type": "mc",
            "q": "math.h menyediakan",
            "options": [
              "while(1) / for(;;)",
              "flush output",
              "tipe nama(params)",
              "sqrt/pow"
            ],
            "a": 3,
            "explain": "math.h matematika."
          },
          {
            "type": "mc",
            "q": "time.h menyediakan",
            "options": [
              "time/clock",
              "#ifndef/#define/#endif",
              "strlen/strcpy",
              "angka acak"
            ],
            "a": 0,
            "explain": "time.h waktu."
          },
          {
            "type": "mc",
            "q": "ctype.h menyediakan",
            "options": [
              "ukuran byte",
              "sebaiknya dihindari",
              "int arr[10];",
              "isalpha/toupper"
            ],
            "a": 3,
            "explain": "ctype.h karakter."
          },
          {
            "type": "mc",
            "q": "Header standar `<assert.h>` di bahasa C menyediakan makro diagnostik runtime bernama",
            "options": [
              "pthread_mutex",
              "fprintf/fwrite",
              "assert",
              "makro/konstanta"
            ],
            "a": 2,
            "explain": "assert debugging."
          },
          {
            "type": "mc",
            "q": "qsort untuk",
            "options": [
              "pengurutan",
              "FIFO",
              "printf()",
              "sizeof"
            ],
            "a": 0,
            "explain": "qsort generic."
          },
          {
            "type": "mc",
            "q": "bsearch untuk",
            "options": [
              "disarankan",
              ".so/.dll",
              "pencarian biner",
              "pthread_join"
            ],
            "a": 2,
            "explain": "bsearch biner."
          },
          {
            "type": "mc",
            "q": "rand/srand untuk",
            "options": [
              "feof",
              "tanpa type-check",
              "isalpha/toupper",
              "angka acak"
            ],
            "a": 3,
            "explain": "rand acak."
          },
          {
            "type": "mc",
            "q": "Membaca dokumentasi penting",
            "options": [
              "ya",
              "tidak",
              "%",
              "scanf"
            ],
            "a": 0,
            "explain": "Man pages."
          }
        ]
      },
      {
        "id": "c-20",
        "level": "Menengah",
        "title": "Debugging & Tools",
        "exercises": [
          {
            "type": "mc",
            "q": "Compiler debug flag adalah",
            "options": [
              "-O2",
              "-g",
              ";",
              "%d"
            ],
            "a": 1,
            "explain": "-g simbol debug."
          },
          {
            "type": "mc",
            "q": "GDB adalah",
            "options": [
              "char",
              "if/else if/else",
              "false",
              "debugger"
            ],
            "a": 3,
            "explain": "GDB debugger."
          },
          {
            "type": "mc",
            "q": "Valgrind mendeteksi",
            "options": [
              "penting",
              "menginisialisasi nol",
              "kebocoran memori",
              "makro terdefinisi"
            ],
            "a": 2,
            "explain": "Valgrind memori."
          },
          {
            "type": "mc",
            "q": "AddressSanitizer mendeteksi",
            "options": [
              "komunikasi proses",
              "performa",
              "kesalahan memori",
              "(tipe) nilai"
            ],
            "a": 2,
            "explain": "ASan deteksi."
          },
          {
            "type": "mc",
            "q": "Warning compiler memakai",
            "options": [
              "kesalahan memori",
              "debugging/link",
              "penjadwalan",
              "-Wall -Wextra"
            ],
            "a": 3,
            "explain": "Warning berguna."
          },
          {
            "type": "mc",
            "q": "Static analyzer membantu",
            "options": [
              "newline otomatis",
              "menemukan bug",
              "ke string",
              "strcmp"
            ],
            "a": 1,
            "explain": "Analyzer bug."
          },
          {
            "type": "mc",
            "q": "Perbaiki warning",
            "options": [
              "tidak",
              "dianjurkan",
              "tanpa type-check",
              "isalpha/toupper"
            ],
            "a": 1,
            "explain": "Warning penting."
          },
          {
            "type": "mc",
            "q": "Stack vs heap penting",
            "options": [
              "ya",
              "tidak",
              "%",
              "scanf"
            ],
            "a": 0,
            "explain": "Memahami memori."
          },
          {
            "type": "mc",
            "q": "Membaca core dump membantu",
            "options": [
              "tidak",
              "0",
              "ya",
              "dicek"
            ],
            "a": 2,
            "explain": "Core dump debugging."
          },
          {
            "type": "mc",
            "q": "Testing otomatis penting",
            "options": [
              "tidak",
              "LIFO",
              "ya",
              "<< >>"
            ],
            "a": 2,
            "explain": "Uji program."
          }
        ]
      },
      {
        "id": "c-21",
        "level": "Advance",
        "title": "Compiler & Linker",
        "exercises": [
          {
            "type": "mc",
            "q": "Compiler C menjalankan",
            "options": [
              "float/double",
              "strcpy/strncpy",
              "nilai (by value)",
              "preprocess/compile/assemble/link"
            ],
            "a": 3,
            "explain": "Tahap kompilasi."
          },
          {
            "type": "mc",
            "q": "Preprocessor mengolah",
            "options": [
              "makro/include",
              "_Thread_local",
              "tanpa type-check",
              "isalpha/toupper"
            ],
            "a": 0,
            "explain": "Preprocessor makro."
          },
          {
            "type": "mc",
            "q": "Assembler menghasilkan",
            "options": [
              "pthread",
              "wajib",
              "object file",
              "char"
            ],
            "a": 2,
            "explain": "Object file."
          },
          {
            "type": "mc",
            "q": "Linker menggabungkan",
            "options": [
              "pemakaian sebelum definisi",
              "ukuran member tertentu",
              "object dan library",
              "NULL bila gagal"
            ],
            "a": 2,
            "explain": "Linker gabung."
          },
          {
            "type": "mc",
            "q": "LTO memungkinkan",
            "options": [
              "string ke float",
              "struct Nama { ... };",
              "build system generator",
              "optimasi lintas modul"
            ],
            "a": 3,
            "explain": "Link time optimization."
          },
          {
            "type": "mc",
            "q": "Symbol table membantu",
            "options": [
              "padding/alignment",
              "tipe (*nama)(params)",
              "debugging/link",
              "penting"
            ],
            "a": 2,
            "explain": "Symbol table."
          },
          {
            "type": "mc",
            "q": "Static vs dynamic linking",
            "options": [
              "makro/include",
              "handler khusus",
              "transfer data",
              "berbeda distribusi"
            ],
            "a": 3,
            "explain": "Static/dynamic."
          },
          {
            "type": "mc",
            "q": "Header kompatibel penting",
            "options": [
              "tidak",
              "*",
              "free",
              "ya"
            ],
            "a": 3,
            "explain": "ABI/kompatibilitas."
          },
          {
            "type": "mc",
            "q": "Flags compiler penting",
            "options": [
              "ya",
              "tidak",
              ".a",
              "fopen"
            ],
            "a": 0,
            "explain": "Flag compiler."
          },
          {
            "type": "mc",
            "q": "Dokumentasi build penting",
            "options": [
              "tidak",
              "LIFO",
              "ya",
              "<< >>"
            ],
            "a": 2,
            "explain": "Dokumentasi."
          }
        ]
      },
      {
        "id": "c-22",
        "level": "Advance",
        "title": "Undefined Behavior",
        "exercises": [
          {
            "type": "mc",
            "q": "UB berarti",
            "options": [
              "data antar proses",
              "Dilepas dengan `free` saat tidak dipakai lagi",
              "== != < >",
              "perilaku tak terdefinisi"
            ],
            "a": 3,
            "explain": "UB tak terdefinisi."
          },
          {
            "type": "mc",
            "q": "Overflow signed int adalah",
            "options": [
              "dicek",
              "%",
              "UB",
              "scanf"
            ],
            "a": 2,
            "explain": "UB untuk signed."
          },
          {
            "type": "mc",
            "q": "Dereference NULL adalah",
            "options": [
              ".a",
              "fopen",
              "wajib",
              "UB"
            ],
            "a": 3,
            "explain": "UB."
          },
          {
            "type": "mc",
            "q": "Strict aliasing melanggar",
            "options": [
              "++",
              "...",
              "lock",
              "UB"
            ],
            "a": 3,
            "explain": "Aliasing UB."
          },
          {
            "type": "mc",
            "q": "Compiler mengandalkan UB",
            "options": [
              "untuk optimasi",
              ".so/.dll",
              "pthread_join",
              "fclose"
            ],
            "a": 0,
            "explain": "Optimasi berasumsi tanpa UB."
          },
          {
            "type": "mc",
            "q": "UBSan mendeteksi",
            "options": [
              "LIFO",
              "<< >>",
              ";",
              "UB"
            ],
            "a": 3,
            "explain": "UBSan deteksi UB."
          },
          {
            "type": "mc",
            "q": "Menghindari UB penting",
            "options": [
              "tidak",
              "++",
              "ya",
              "..."
            ],
            "a": 2,
            "explain": "Hindari UB."
          },
          {
            "type": "mc",
            "q": "Menulis kode portabel",
            "options": [
              "tidak",
              "printf()",
              "disarankan",
              "sizeof"
            ],
            "a": 2,
            "explain": "Portabilitas."
          },
          {
            "type": "mc",
            "q": "Review kode penting",
            "options": [
              "tidak",
              "ya",
              "LIFO",
              "<< >>"
            ],
            "a": 1,
            "explain": "Review."
          },
          {
            "type": "mc",
            "q": "Testing penting",
            "options": [
              "tidak",
              "ya",
              ".a",
              "fopen"
            ],
            "a": 1,
            "explain": "Testing."
          }
        ]
      },
      {
        "id": "c-23",
        "level": "Advance",
        "title": "Embedded C",
        "exercises": [
          {
            "type": "mc",
            "q": "Embedded C berjalan di",
            "options": [
              "mikrokontroler",
              "fclose",
              "header",
              "multiple definition"
            ],
            "a": 0,
            "explain": "Embedded mikrokontroler."
          },
          {
            "type": "mc",
            "q": "Register akses memakai",
            "options": [
              "di loop",
              "satu karakter",
              "volatile pointer",
              "dipakai"
            ],
            "a": 2,
            "explain": "Volatile untuk register."
          },
          {
            "type": "mc",
            "q": "Interrupt memerlukan",
            "options": [
              "malloc/atoi/exit",
              "pencarian biner",
              "menemukan bug",
              "handler khusus"
            ],
            "a": 3,
            "explain": "ISR."
          },
          {
            "type": "mc",
            "q": "Memori terbatas menuntut",
            "options": [
              "int arr[10];",
              "efisiensi",
              "int m[2][2]",
              "deklarasi"
            ],
            "a": 1,
            "explain": "Efisiensi memori."
          },
          {
            "type": "mc",
            "q": "RTOS membantu",
            "options": [
              "ketergantungan struct",
              "compare function",
              "penjadwalan",
              "build"
            ],
            "a": 2,
            "explain": "RTOS."
          },
          {
            "type": "mc",
            "q": "Cross-compiling penting",
            "options": [
              "tidak",
              "++",
              "ya",
              "..."
            ],
            "a": 2,
            "explain": "Cross compile."
          },
          {
            "type": "mc",
            "q": "Debugging hardware memakai",
            "options": [
              "pthread_create",
              "fopen",
              "JTAG/SWD",
              "open/read/write"
            ],
            "a": 2,
            "explain": "Debug hardware."
          },
          {
            "type": "mc",
            "q": "Kode portabel penting",
            "options": [
              "tidak",
              "<< >>",
              "ya",
              ";"
            ],
            "a": 2,
            "explain": "Portabilitas."
          },
          {
            "type": "mc",
            "q": "Dokumentasi penting",
            "options": [
              "tidak",
              "ya",
              ";",
              "%d"
            ],
            "a": 1,
            "explain": "Dokumentasi."
          },
          {
            "type": "mc",
            "q": "Testing di target penting",
            "options": [
              "ya",
              "tidak",
              "free",
              "LIFO"
            ],
            "a": 0,
            "explain": "Uji di target."
          }
        ]
      },
      {
        "id": "c-24",
        "level": "Advance",
        "title": "Networking C",
        "exercises": [
          {
            "type": "mc",
            "q": "Socket dibuat dengan",
            "options": [
              "deteksi",
              "<stdio.h>",
              "socket()",
              "int / <stdbool.h>"
            ],
            "a": 2,
            "explain": "socket syscall."
          },
          {
            "type": "mc",
            "q": "Bind/Listen menghubungkan",
            "options": [
              "compare function",
              "server",
              "build",
              "_Thread_local"
            ],
            "a": 1,
            "explain": "Server bind."
          },
          {
            "type": "mc",
            "q": "connect menghubungkan",
            "options": [
              "client",
              "urutan byte",
              "memori/berkas",
              "dicek"
            ],
            "a": 0,
            "explain": "Client connect."
          },
          {
            "type": "mc",
            "q": "send/recv untuk",
            "options": [
              "navigasi array",
              "nilai (salinan)",
              "transfer data",
              "pointer fungsi"
            ],
            "a": 2,
            "explain": "Transfer data."
          },
          {
            "type": "mc",
            "q": "Endianness jaringan memakai",
            "options": [
              "big-endian",
              "penjadwalan",
              "banyak socket",
              "flag efisien"
            ],
            "a": 0,
            "explain": "Network byte order."
          },
          {
            "type": "mc",
            "q": "select/poll mengelola",
            "options": [
              "strcmp",
              "int *p",
              "banyak socket",
              "padding/alignment"
            ],
            "a": 2,
            "explain": "Multiplexing."
          },
          {
            "type": "mc",
            "q": "Non-blocking IO memungkinkan",
            "options": [
              "kebocoran memori",
              "skalabilitas",
              "object file",
              "efisiensi"
            ],
            "a": 1,
            "explain": "Non-blocking."
          },
          {
            "type": "mc",
            "q": "Menangani partial read penting",
            "options": [
              "tidak",
              "scanf",
              "ya",
              "*"
            ],
            "a": 2,
            "explain": "Cek kembalian."
          },
          {
            "type": "mc",
            "q": "Testing jaringan penting",
            "options": [
              "ya",
              "tidak",
              "dicek",
              "%"
            ],
            "a": 0,
            "explain": "Testing."
          },
          {
            "type": "mc",
            "q": "Dokumentasi penting",
            "options": [
              "ya",
              "tidak",
              "LIFO",
              "<< >>"
            ],
            "a": 0,
            "explain": "Dokumentasi."
          }
        ]
      },
      {
        "id": "c-25",
        "level": "Advance",
        "title": "Code Style & Maintainability",
        "exercises": [
          {
            "type": "mc",
            "q": "Nama jelas penting",
            "options": [
              "tidak",
              "ya",
              "++",
              "..."
            ],
            "a": 1,
            "explain": "Nama deskriptif."
          },
          {
            "type": "mc",
            "q": "Komentar seperlunya penting",
            "options": [
              "tidak",
              "ya",
              ";",
              "%d"
            ],
            "a": 1,
            "explain": "Komentar jelas."
          },
          {
            "type": "mc",
            "q": "Modularisasi membantu",
            "options": [
              "alamat memori",
              "undefined behavior",
              "pointer next",
              "perawatan"
            ],
            "a": 3,
            "explain": "Modularitas."
          },
          {
            "type": "mc",
            "q": "Fungsi kecil fokus penting",
            "options": [
              "tidak",
              "FIFO",
              "? :",
              "ya"
            ],
            "a": 3,
            "explain": "Fungsi kecil."
          },
          {
            "type": "mc",
            "q": "Consistent style penting",
            "options": [
              "tidak",
              "fread",
              "ya",
              "-g"
            ],
            "a": 2,
            "explain": "Konsistensi."
          },
          {
            "type": "mc",
            "q": "Static analysis penting",
            "options": [
              "ya",
              "tidak",
              "false",
              "void"
            ],
            "a": 0,
            "explain": "Analyzer."
          },
          {
            "type": "mc",
            "q": "Testing penting",
            "options": [
              "ya",
              "tidak",
              "free",
              "LIFO"
            ],
            "a": 0,
            "explain": "Testing."
          },
          {
            "type": "mc",
            "q": "Review kode penting",
            "options": [
              "tidak",
              "int",
              "%s",
              "ya"
            ],
            "a": 3,
            "explain": "Review."
          },
          {
            "type": "mc",
            "q": "Dokumentasi penting",
            "options": [
              "tidak",
              "ya",
              ".c",
              "int"
            ],
            "a": 1,
            "explain": "Dokumentasi."
          },
          {
            "type": "mc",
            "q": "Refactor bertahap aman",
            "options": [
              "tidak",
              "...",
              "ya",
              "lock"
            ],
            "a": 2,
            "explain": "Bertahap."
          }
        ]
      },
      {
        "id": "c-26",
        "level": "Advance",
        "title": "Bit Manipulation",
        "exercises": [
          {
            "type": "mc",
            "q": "Menetapkan bit memakai",
            "options": [
              "|= (1<<n)",
              "atomic/C11",
              "fwrite",
              "#define F(x) ..."
            ],
            "a": 0,
            "explain": "Set bit dengan OR."
          },
          {
            "type": "mc",
            "q": "Menghapus bit memakai",
            "options": [
              "&= ~(1<<n)",
              "char",
              "if/else if/else",
              "false"
            ],
            "a": 0,
            "explain": "Clear bit dengan AND NOT."
          },
          {
            "type": "mc",
            "q": "Membalik bit memakai",
            "options": [
              "tanpa type-check",
              "isalpha/toupper",
              "^= (1<<n)",
              "kebocoran memori"
            ],
            "a": 2,
            "explain": "Toggle bit dengan XOR."
          },
          {
            "type": "mc",
            "q": "Memeriksa bit memakai",
            "options": [
              "switch/case",
              "scanf",
              "(float)x",
              "& (1<<n)"
            ],
            "a": 3,
            "explain": "Cek bit dengan AND."
          },
          {
            "type": "mc",
            "q": "Bitmask membantu",
            "options": [
              "bersama",
              "edge case",
              "pesan error",
              "flag efisien"
            ],
            "a": 3,
            "explain": "Bitmask flag."
          },
          {
            "type": "mc",
            "q": "Endianness memengaruhi",
            "options": [
              "transfer data",
              "^= (1<<n)",
              "program proses",
              "urutan byte"
            ],
            "a": 3,
            "explain": "Endian urutan byte."
          },
          {
            "type": "mc",
            "q": "Bit-field hemat",
            "options": [
              "penting",
              "lock",
              "fread",
              "memori"
            ],
            "a": 3,
            "explain": "Bit-field memori."
          },
          {
            "type": "mc",
            "q": "Shift hati-hati pada",
            "options": [
              "komunikasi proses",
              "signed/overflow",
              "performa",
              "(tipe) nilai"
            ],
            "a": 1,
            "explain": "UB pada shift."
          },
          {
            "type": "mc",
            "q": "XOR untuk swap elegan",
            "options": [
              "tidak",
              "0",
              "dicek",
              "ya"
            ],
            "a": 3,
            "explain": "XOR swap."
          },
          {
            "type": "mc",
            "q": "Dokumentasi bitmask penting",
            "options": [
              "tidak",
              "LIFO",
              "<< >>",
              "ya"
            ],
            "a": 3,
            "explain": "Dokumentasi."
          }
        ]
      },
      {
        "id": "c-27",
        "level": "Advance",
        "title": "Sistem & POSIX",
        "exercises": [
          {
            "type": "mc",
            "q": "POSIX menyediakan",
            "options": [
              "// dan /* */",
              "API sistem Unix",
              "for (init; cond; step)",
              "mengubah nilai asli"
            ],
            "a": 1,
            "explain": "POSIX API."
          },
          {
            "type": "mc",
            "q": "fork membuat",
            "options": [
              "pointer next",
              "disarankan",
              "proses baru",
              ".so/.dll"
            ],
            "a": 2,
            "explain": "fork proses."
          },
          {
            "type": "mc",
            "q": "exec mengganti",
            "options": [
              "perf/gprof",
              "program proses",
              "printf()",
              "sizeof"
            ],
            "a": 1,
            "explain": "exec program."
          },
          {
            "type": "mc",
            "q": "Pipe mengalirkan",
            "options": [
              "== != < >",
              "data antar proses",
              "string ke float",
              "struct Nama { ... };"
            ],
            "a": 1,
            "explain": "Pipe data."
          },
          {
            "type": "mc",
            "q": "Signal memakai",
            "options": [
              "ukuran byte",
              "sebaiknya dihindari",
              "int arr[10];",
              "komunikasi proses"
            ],
            "a": 3,
            "explain": "Signal proses."
          },
          {
            "type": "mc",
            "q": "Thread POSIX memakai",
            "options": [
              "\"rb\"/\"wb\"",
              "strlen/strcpy",
              "pthread",
              "angka acak"
            ],
            "a": 2,
            "explain": "pthread thread."
          },
          {
            "type": "mc",
            "q": "Mutex/monitor",
            "options": [
              "(tipe) nilai",
              "sinkronisasi",
              "while(1) / for(;;)",
              "flush output"
            ],
            "a": 1,
            "explain": "Sinkronisasi thread."
          },
          {
            "type": "mc",
            "q": "mmap memetakan",
            "options": [
              "sqrt/pow",
              "preprocess/compile/assemble/link",
              "volatile pointer",
              "memori/berkas"
            ],
            "a": 3,
            "explain": "mmap memetakan."
          },
          {
            "type": "mc",
            "q": "socket untuk",
            "options": [
              "komunikasi jaringan",
              "ya (promotion)",
              "strlen()",
              "alias tipe"
            ],
            "a": 0,
            "explain": "Socket jaringan."
          },
          {
            "type": "mc",
            "q": "errno memberi",
            "options": [
              "kode error",
              "makro/include",
              "handler khusus",
              "transfer data"
            ],
            "a": 0,
            "explain": "errno error."
          }
        ]
      },
      {
        "id": "c-28",
        "level": "Advance",
        "title": "Optimasi & Performa",
        "exercises": [
          {
            "type": "mc",
            "q": "Profil memakai",
            "options": [
              "fgets",
              "dipakai",
              "perf/gprof",
              "int **"
            ],
            "a": 2,
            "explain": "Profiler C."
          },
          {
            "type": "mc",
            "q": "Optimasi compiler memakai",
            "options": [
              "-Wall -Wextra",
              "berbeda distribusi",
              "-O2/-O3",
              "JTAG/SWD"
            ],
            "a": 2,
            "explain": "Flag optimasi."
          },
          {
            "type": "mc",
            "q": "Cache locality memengaruhi",
            "options": [
              "performa",
              "fprintf(stderr, ...)",
              "konversi sempit",
              "strcat"
            ],
            "a": 0,
            "explain": "Locality cache."
          },
          {
            "type": "mc",
            "q": "Struktur data tepat penting",
            "options": [
              "tidak",
              "wajib",
              ".h",
              "ya"
            ],
            "a": 3,
            "explain": "Pilih struktur."
          },
          {
            "type": "mc",
            "q": "Alokasi berlebih mahal",
            "options": [
              "tidak",
              "ya",
              "dicek",
              "%"
            ],
            "a": 1,
            "explain": "Minimalkan alokasi."
          },
          {
            "type": "mc",
            "q": "Inline function membantu",
            "options": [
              "signed/overflow",
              "kode error",
              "LIFO",
              "performa"
            ],
            "a": 3,
            "explain": "Inline kecil."
          },
          {
            "type": "mc",
            "q": "Branch prediction penting",
            "options": [
              "tidak",
              ".a",
              "fopen",
              "ya"
            ],
            "a": 3,
            "explain": "Branch memengaruhi."
          },
          {
            "type": "mc",
            "q": "Ukur sebelum optimasi",
            "options": [
              "wajib",
              "tidak",
              "socket()",
              "perawatan"
            ],
            "a": 0,
            "explain": "Ukur dulu."
          },
          {
            "type": "mc",
            "q": "Simon/UB harus dihindari",
            "options": [
              "tidak",
              "LIFO",
              "ya",
              "<< >>"
            ],
            "a": 2,
            "explain": "Hindari UB."
          },
          {
            "type": "mc",
            "q": "Vectorization compiler otomatis",
            "options": [
              "tidak",
              "%d",
              ".a",
              "ya"
            ],
            "a": 3,
            "explain": "Auto vectorization."
          }
        ]
      },
      {
        "id": "c-29",
        "level": "Advance",
        "title": "Keamanan C",
        "exercises": [
          {
            "type": "mc",
            "q": "Buffer overflow berbahaya",
            "options": [
              "tidak",
              "ya",
              ".a",
              "fopen"
            ],
            "a": 1,
            "explain": "Overflow UB."
          },
          {
            "type": "mc",
            "q": "strncpy lebih aman dari strcpy",
            "options": [
              "tidak",
              "LIFO",
              "ya",
              "<< >>"
            ],
            "a": 2,
            "explain": "Batasi panjang."
          },
          {
            "type": "mc",
            "q": "gets tidak aman",
            "options": [
              "tidak",
              "UB",
              "ya",
              "fgets"
            ],
            "a": 2,
            "explain": "gets tidak aman."
          },
          {
            "type": "mc",
            "q": "Format string berbahaya bila",
            "options": [
              "input jadi format",
              "// dan /* */",
              "for (init; cond; step)",
              "mengubah nilai asli"
            ],
            "a": 0,
            "explain": "Jangan pakai input sebagai format."
          },
          {
            "type": "mc",
            "q": "Integer overflow harus",
            "options": [
              "tipe nama;",
              "dicek",
              "<< >>",
              "minimal sekali"
            ],
            "a": 1,
            "explain": "Cek overflow."
          },
          {
            "type": "mc",
            "q": "Validasi input penting",
            "options": [
              "tidak",
              "dicek",
              "%",
              "ya"
            ],
            "a": 3,
            "explain": "Validasi input."
          },
          {
            "type": "mc",
            "q": "Sanitasi penting",
            "options": [
              "tidak",
              "++",
              "...",
              "ya"
            ],
            "a": 3,
            "explain": "Sanitasi data."
          },
          {
            "type": "mc",
            "q": "AddressSanitizer membantu",
            "options": [
              "deteksi",
              "pthread_create",
              "fopen",
              "open/read/write"
            ],
            "a": 0,
            "explain": "ASan mendeteksi."
          },
          {
            "type": "mc",
            "q": "Kode harus diuji",
            "options": [
              "tidak",
              "ya",
              "dicek",
              "%"
            ],
            "a": 1,
            "explain": "Testing."
          },
          {
            "type": "mc",
            "q": "Compiler warning penting",
            "options": [
              "tidak",
              "ya",
              "build",
              "feof"
            ],
            "a": 1,
            "explain": "Warning penting."
          }
        ]
      },
      {
        "id": "c-30",
        "level": "Advance",
        "title": "Data Structures C",
        "exercises": [
          {
            "type": "mc",
            "q": "Linked list memakai",
            "options": [
              "fungsi memanggil dirinya",
              "struct + pointer",
              "prev dan next",
              "alternatif include guard"
            ],
            "a": 1,
            "explain": "List lewat pointer."
          },
          {
            "type": "mc",
            "q": "Stack memakai",
            "options": [
              "angka acak",
              "dianjurkan",
              "LIFO",
              "server"
            ],
            "a": 2,
            "explain": "Stack LIFO."
          },
          {
            "type": "mc",
            "q": "Queue memakai",
            "options": [
              "disarankan",
              "FIFO",
              ".so/.dll",
              "fclose"
            ],
            "a": 1,
            "explain": "Queue FIFO."
          },
          {
            "type": "mc",
            "q": "Hash table memakai",
            "options": [
              "array + hash",
              ". (atau -> untuk pointer)",
              "objek ke program",
              "perilaku tak terdefinisi"
            ],
            "a": 0,
            "explain": "Hash table."
          },
          {
            "type": "mc",
            "q": "Tree memakai",
            "options": [
              "pointer ke struct",
              "free tidak dipanggil",
              "API sistem Unix",
              "node + pointer"
            ],
            "a": 3,
            "explain": "Tree pointer."
          },
          {
            "type": "mc",
            "q": "Dynamic array memakai",
            "options": [
              "handler khusus",
              "transfer data",
              "^= (1<<n)",
              "realloc"
            ],
            "a": 3,
            "explain": "Dynamic array."
          },
          {
            "type": "mc",
            "q": "Manajemen memori penting",
            "options": [
              "tidak",
              "*",
              "free",
              "ya"
            ],
            "a": 3,
            "explain": "Kelola memori."
          },
          {
            "type": "mc",
            "q": "Struktur tepat memengaruhi performa",
            "options": [
              "ya",
              "tidak",
              ".c",
              "int"
            ],
            "a": 0,
            "explain": "Pilih struktur."
          },
          {
            "type": "mc",
            "q": "Menguji struktur data penting",
            "options": [
              "ya",
              "tidak",
              "lock",
              "fread"
            ],
            "a": 0,
            "explain": "Testing."
          },
          {
            "type": "mc",
            "q": "Dokumentasi penting",
            "options": [
              "tidak",
              "wajib",
              ".h",
              "ya"
            ],
            "a": 3,
            "explain": "Dokumentasi."
          }
        ]
      },
      {
        "id": "c-31",
        "level": "Advance",
        "title": "Master Review & Best Practice C",
        "exercises": [
          {
            "type": "mc",
            "q": "Pointer pada C menyimpan",
            "options": [
              "Nama class",
              "Route HTTP",
              "Nilai CSS",
              "Alamat suatu objek atau fungsi"
            ],
            "a": 3,
            "explain": "Pointer menyimpan alamat yang dapat merujuk ke objek atau fungsi."
          },
          {
            "type": "mc",
            "q": "Operator `&value` pada C digunakan untuk",
            "options": [
              "Mengakses isi pointer",
              "Mengambil alamat value",
              "Mengalikan dua nilai",
              "Menghapus variabel"
            ],
            "a": 1,
            "explain": "Operator & menghasilkan alamat objek yang diberikan."
          },
          {
            "type": "mc",
            "q": "Memori yang dialokasikan secara dinamis dengan `malloc` perlu",
            "options": [
              "Dilepas dengan `delete[]`",
              "Disimpan dalam CSS",
              "Dilepas dengan `free` saat tidak dipakai lagi",
              "Dibiarkan tanpa batas"
            ],
            "a": 2,
            "explain": "Di C, memori hasil malloc harus dilepas dengan free ketika masa pakainya berakhir."
          },
          {
            "type": "mc",
            "q": "Mengakses elemen array di luar batas pada C dapat menyebabkan",
            "options": [
              "Pengecekan batas otomatis selalu",
              "Undefined behavior",
              "Konversi ke string",
              "Kompilasi menjadi route"
            ],
            "a": 1,
            "explain": "C tidak menjamin pemeriksaan batas array otomatis."
          },
          {
            "type": "mc",
            "q": "Pointer yang sudah menunjuk ke objek yang masa hidupnya berakhir disebut berbahaya karena",
            "options": [
              "Garbage collector selalu memperbaikinya",
              "Pointer berubah menjadi null otomatis",
              "Dereference dapat menghasilkan undefined behavior",
              "Compiler mengubahnya ke Java"
            ],
            "a": 2,
            "explain": "Pointer dangling tidak lagi merujuk ke objek valid dan tidak boleh diakses."
          }
        ]
      }
    ]
  }
];

export { CONTENT_C };
