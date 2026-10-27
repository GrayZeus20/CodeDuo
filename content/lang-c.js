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
              "CSS",
              "route",
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
              "CSS"
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
              "CSS",
              "route"
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
              "CSS"
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
              "CSS"
            ],
            "a": 0,
            "explain": "C memakai printf."
          },
          {
            "type": "mc",
            "q": "Mengakhiri statement memakai",
            "options": [
              ".",
              "CSS",
              ";",
              "route"
            ],
            "a": 2,
            "explain": "C memakai titik koma."
          },
          {
            "type": "mc",
            "q": "C dikenal karena",
            "options": [
              "CSS",
              "kontrol memori dan performa",
              "route",
              "migrasi"
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
              "CSS",
              "route"
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
              "CSS"
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
              "CSS"
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
              "CSS",
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
              "CSS",
              "route",
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
              "CSS"
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
              "CSS"
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
              "CSS",
              "route"
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
              "CSS"
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
              "CSS"
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
              "CSS"
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
              "CSS"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "C memakai ==."
          },
          {
            "type": "mc",
            "q": "Bitwise memakai",
            "options": [
              "CSS",
              "route",
              "& | ^ ~",
              "migrasi"
            ],
            "a": 2,
            "explain": "C mendukung bitwise."
          },
          {
            "type": "mc",
            "q": "Shift memakai",
            "options": [
              "CSS",
              "route",
              "<< >>",
              "migrasi"
            ],
            "a": 2,
            "explain": "Shift bit."
          },
          {
            "type": "mc",
            "q": "Ternary memakai",
            "options": [
              "if()",
              "CSS",
              "? :",
              "route"
            ],
            "a": 2,
            "explain": "C memakai ?:."
          },
          {
            "type": "mc",
            "q": "Assignment majemuk memakai",
            "options": [
              "+= -= *=",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "C mendukung +=."
          },
          {
            "type": "mc",
            "q": "Operator sizeof menghasilkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "ukuran byte"
            ],
            "a": 3,
            "explain": "sizeof byte."
          },
          {
            "type": "mc",
            "q": "Cast eksplisit memakai",
            "options": [
              "CSS",
              "route",
              "(tipe) nilai",
              "migrasi"
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
              "CSS",
              "route",
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
              "CSS",
              "route",
              "switch/case"
            ],
            "a": 3,
            "explain": "C memakai switch."
          },
          {
            "type": "mc",
            "q": "case butuh",
            "options": [
              "CSS",
              "break agar tidak fallthrough",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "break mencegah fallthrough."
          },
          {
            "type": "mc",
            "q": "Perulangan for memakai",
            "options": [
              "for x in",
              "CSS",
              "route",
              "for (init; cond; step)"
            ],
            "a": 3,
            "explain": "For klasik."
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
            "explain": "While bergantung kondisi."
          },
          {
            "type": "mc",
            "q": "do-while menjalankan",
            "options": [
              "minimal sekali",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Minimal sekali."
          },
          {
            "type": "mc",
            "q": "break/continue berlaku",
            "options": [
              "di loop",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Mengatur loop."
          },
          {
            "type": "mc",
            "q": "goto ada tetapi",
            "options": [
              "CSS",
              "route",
              "sebaiknya dihindari",
              "migrasi"
            ],
            "a": 2,
            "explain": "Hindari goto."
          },
          {
            "type": "mc",
            "q": "Loop tak hingga memakai",
            "options": [
              "while(1) / for(;;)",
              "CSS",
              "route",
              "migrasi"
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
              "CSS"
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
              "CSS"
            ],
            "a": 1,
            "explain": "scanf membaca."
          },
          {
            "type": "mc",
            "q": "Format scanf int memakai",
            "options": [
              "%s",
              "CSS",
              "%d",
              "route"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "%s untuk string."
          },
          {
            "type": "mc",
            "q": "printf tidak menambah",
            "options": [
              "CSS",
              "route",
              "newline otomatis",
              "migrasi"
            ],
            "a": 2,
            "explain": "Tambahkan \\n manual."
          },
          {
            "type": "mc",
            "q": "Mencetak ke stderr memakai",
            "options": [
              "fprintf(stderr, ...)",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "fprintf stderr."
          },
          {
            "type": "mc",
            "q": "putchar mencetak",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "satu karakter"
            ],
            "a": 3,
            "explain": "putchar karakter."
          },
          {
            "type": "mc",
            "q": "getchar membaca",
            "options": [
              "CSS",
              "satu karakter",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "getchar karakter."
          },
          {
            "type": "mc",
            "q": "scanf mengembalikan",
            "options": [
              "CSS",
              "route",
              "jumlah item terbaca",
              "migrasi"
            ],
            "a": 2,
            "explain": "Cek kembalian scanf."
          },
          {
            "type": "mc",
            "q": "Buffer input penting",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Perhatikan buffer."
          },
          {
            "type": "mc",
            "q": "fflush(stdout) memaksa",
            "options": [
              "CSS",
              "flush output",
              "route",
              "migrasi"
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
              "CSS",
              "route",
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
              "CSS",
              "route",
              "(float)x"
            ],
            "a": 3,
            "explain": "C memakai (tipe)."
          },
          {
            "type": "mc",
            "q": "atoi mengubah",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "string ke int"
            ],
            "a": 3,
            "explain": "atoi konversi."
          },
          {
            "type": "mc",
            "q": "atof mengubah",
            "options": [
              "CSS",
              "string ke float",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "atof konversi."
          },
          {
            "type": "mc",
            "q": "sprintf memformat",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Konversi menyempit."
          },
          {
            "type": "mc",
            "q": "Integer overflow memicu",
            "options": [
              "CSS",
              "route",
              "UB",
              "migrasi"
            ],
            "a": 2,
            "explain": "Overflow UB."
          },
          {
            "type": "mc",
            "q": "sizeof memberi",
            "options": [
              "CSS",
              "route",
              "ukuran byte",
              "migrasi"
            ],
            "a": 2,
            "explain": "sizeof byte."
          },
          {
            "type": "mc",
            "q": "Cek konversi penting",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "int arr[10];",
              "route"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "C memakai index 0."
          },
          {
            "type": "mc",
            "q": "Nama array merujuk",
            "options": [
              "alamat elemen pertama",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Array meluruh jadi pointer."
          },
          {
            "type": "mc",
            "q": "String C adalah",
            "options": [
              "CSS",
              "array char dengan null terminator",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "String C diakhiri \\0."
          },
          {
            "type": "mc",
            "q": "Panjang string memakai",
            "options": [
              ".length",
              "CSS",
              "strlen()",
              "route"
            ],
            "a": 2,
            "explain": "strlen menghitung."
          },
          {
            "type": "mc",
            "q": "Menyalin string memakai",
            "options": [
              "CSS",
              "route",
              "strcpy/strncpy",
              "migrasi"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "strcmp membandingkan isi."
          },
          {
            "type": "mc",
            "q": "Menggabungkan string memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "fgets",
              "route"
            ],
            "a": 2,
            "explain": "fgets lebih aman."
          },
          {
            "type": "mc",
            "q": "Array 2D memakai",
            "options": [
              "CSS",
              "int m[2][2]",
              "route",
              "migrasi"
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
              "CSS"
            ],
            "a": 0,
            "explain": "C memakai tipe balik."
          },
          {
            "type": "mc",
            "q": "Deklarasi fungsi (prototype) memungkinkan",
            "options": [
              "CSS",
              "pemakaian sebelum definisi",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Prototype deklarasi."
          },
          {
            "type": "mc",
            "q": "Fungsi tanpa nilai balik memakai",
            "options": [
              "null",
              "CSS",
              "void",
              "route"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "C default by value."
          },
          {
            "type": "mc",
            "q": "Mengirim pointer memungkinkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "mengubah nilai asli"
            ],
            "a": 3,
            "explain": "Pointer memberi efek."
          },
          {
            "type": "mc",
            "q": "Fungsi variadic memakai",
            "options": [
              "CSS",
              "...",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "C mendukung variadic."
          },
          {
            "type": "mc",
            "q": "Rekursi memungkinkan",
            "options": [
              "fungsi memanggil dirinya",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Rekursi dukung."
          },
          {
            "type": "mc",
            "q": "Nama fungsi merujuk",
            "options": [
              "alamat fungsi",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Fungsi punya alamat."
          },
          {
            "type": "mc",
            "q": "Fungsi harus dideklarasikan sebelum",
            "options": [
              "CSS",
              "dipakai",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Prototype diperlukan."
          },
          {
            "type": "mc",
            "q": "Header untuk fungsi adalah",
            "options": [
              "deklarasi",
              "CSS",
              "route",
              "migrasi"
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
              "CSS",
              "route"
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
              "CSS"
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
              "CSS"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "C memakai int *."
          },
          {
            "type": "mc",
            "q": "Pointer NULL menandakan",
            "options": [
              "CSS",
              "route",
              "tidak menunjuk apa pun",
              "migrasi"
            ],
            "a": 2,
            "explain": "NULL pointer kosong."
          },
          {
            "type": "mc",
            "q": "Pointer aritmetika memungkinkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "C memakai **."
          },
          {
            "type": "mc",
            "q": "Pointer fungsi memungkinkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "callback"
            ],
            "a": 3,
            "explain": "Pointer fungsi callback."
          },
          {
            "type": "mc",
            "q": "Dereference pointer invalid menyebabkan",
            "options": [
              "CSS",
              "undefined behavior",
              "route",
              "migrasi"
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
              "CSS",
              "route"
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
              "CSS",
              "route",
              "struct Nama { ... };"
            ],
            "a": 3,
            "explain": "C memakai struct."
          },
          {
            "type": "mc",
            "q": "Mengakses member memakai",
            "options": [
              "CSS",
              ". (atau -> untuk pointer)",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Dot/arrow mengakses."
          },
          {
            "type": "mc",
            "q": "Arrow (->) dipakai untuk",
            "options": [
              "CSS",
              "pointer ke struct",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Arrow untuk pointer."
          },
          {
            "type": "mc",
            "q": "typedef membuat",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
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
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Struct bersarang."
          },
          {
            "type": "mc",
            "q": "Ukuran struct memengaruhi",
            "options": [
              "CSS",
              "route",
              "padding/alignment",
              "migrasi"
            ],
            "a": 2,
            "explain": "Padding struct."
          },
          {
            "type": "mc",
            "q": "Bit-field memungkinkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "ukuran member tertentu"
            ],
            "a": 3,
            "explain": "Bit-field hemat."
          },
          {
            "type": "mc",
            "q": "Struct dikirim ke fungsi secara",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "nilai (salinan)"
            ],
            "a": 3,
            "explain": "Salinan kecuali pointer."
          },
          {
            "type": "mc",
            "q": "Forward declaration membantu",
            "options": [
              "CSS",
              "ketergantungan struct",
              "route",
              "migrasi"
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
              "CSS",
              "route",
              "data dan pointer next",
              "migrasi"
            ],
            "a": 2,
            "explain": "Node data+next."
          },
          {
            "type": "mc",
            "q": "Menambah node memerlukan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "alokasi memori"
            ],
            "a": 3,
            "explain": "Alokasi node."
          },
          {
            "type": "mc",
            "q": "Traversal memakai",
            "options": [
              "CSS",
              "pointer next",
              "route",
              "migrasi"
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Free setelah selesai."
          },
          {
            "type": "mc",
            "q": "Double linked list punya",
            "options": [
              "CSS",
              "route",
              "prev dan next",
              "migrasi"
            ],
            "a": 2,
            "explain": "Double list."
          },
          {
            "type": "mc",
            "q": "Cyclic structure perlu",
            "options": [
              "CSS",
              "route",
              "hati-hati free",
              "migrasi"
            ],
            "a": 2,
            "explain": "Hindari loop free."
          },
          {
            "type": "mc",
            "q": "Sentinel node memudahkan",
            "options": [
              "CSS",
              "route",
              "edge case",
              "migrasi"
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Kelola head/tail."
          },
          {
            "type": "mc",
            "q": "Menguji struktur penting",
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
              "route",
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
              "CSS",
              "route",
              "migrasi",
              "tipe (*nama)(params)"
            ],
            "a": 3,
            "explain": "Sintaks pointer fungsi."
          },
          {
            "type": "mc",
            "q": "Callback memakai",
            "options": [
              "CSS",
              "route",
              "pointer fungsi",
              "migrasi"
            ],
            "a": 2,
            "explain": "Callback pointer."
          },
          {
            "type": "mc",
            "q": "qsort menerima",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
              "migrasi"
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Set NULL."
          },
          {
            "type": "mc",
            "q": "Typedef memudahkan",
            "options": [
              "CSS",
              "pointer fungsi",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Typedef."
          },
          {
            "type": "mc",
            "q": "Callback harus divalidasi",
            "options": [
              "tidak",
              "CSS",
              "route",
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
              "CSS",
              "route",
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
              "CSS",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "C memakai kode balik."
          },
          {
            "type": "mc",
            "q": "Kode balik menandakan",
            "options": [
              "CSS",
              "route",
              "status fungsi",
              "migrasi"
            ],
            "a": 2,
            "explain": "Return menandai status."
          },
          {
            "type": "mc",
            "q": "errno menyimpan",
            "options": [
              "kode error terakhir",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "errno error."
          },
          {
            "type": "mc",
            "q": "perror mencetak",
            "options": [
              "CSS",
              "pesan error",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "perror pesan."
          },
          {
            "type": "mc",
            "q": "Cek NULL setelah malloc penting",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "Cek alokasi."
          },
          {
            "type": "mc",
            "q": "goto cleanup pola umum",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "Goto untuk cleanup."
          },
          {
            "type": "mc",
            "q": "Menghindari mengabaikan error",
            "options": [
              "tidak",
              "CSS",
              "penting",
              "route"
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Reset errno."
          },
          {
            "type": "mc",
            "q": "Uji jalur error penting",
            "options": [
              "tidak",
              "CSS",
              "route",
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
              "CSS",
              "route"
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
              "CSS",
              "route",
              "deklarasi",
              "migrasi"
            ],
            "a": 2,
            "explain": "Deklarasi di header."
          },
          {
            "type": "mc",
            "q": "Sumber berisi",
            "options": [
              "definisi",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Definisi di .c."
          },
          {
            "type": "mc",
            "q": "Makefile mengotomasi",
            "options": [
              "build",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Makefile build."
          },
          {
            "type": "mc",
            "q": "CMake adalah",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
              ".so/.dll"
            ],
            "a": 3,
            "explain": "Shared lib .so."
          },
          {
            "type": "mc",
            "q": "Linking menghubungkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
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
              "CSS",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "route",
              "malloc/calloc",
              "migrasi"
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "C memakai free."
          },
          {
            "type": "mc",
            "q": "calloc berbeda karena",
            "options": [
              "CSS",
              "route",
              "menginisialisasi nol",
              "migrasi"
            ],
            "a": 2,
            "explain": "calloc zero-init."
          },
          {
            "type": "mc",
            "q": "realloc mengubah",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "ukuran alokasi"
            ],
            "a": 3,
            "explain": "realloc mengubah ukuran."
          },
          {
            "type": "mc",
            "q": "Memory leak terjadi bila",
            "options": [
              "CSS",
              "route",
              "free tidak dipanggil",
              "migrasi"
            ],
            "a": 2,
            "explain": "Lupa free."
          },
          {
            "type": "mc",
            "q": "Double free berbahaya",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Use after free UB."
          },
          {
            "type": "mc",
            "q": "malloc dapat mengembalikan",
            "options": [
              "CSS",
              "route",
              "NULL bila gagal",
              "migrasi"
            ],
            "a": 2,
            "explain": "Cek NULL."
          },
          {
            "type": "mc",
            "q": "sizeof membantu",
            "options": [
              "CSS",
              "route",
              "ukuran alokasi",
              "migrasi"
            ],
            "a": 2,
            "explain": "sizeof mengukur."
          },
          {
            "type": "mc",
            "q": "Valgrind membantu",
            "options": [
              "deteksi kebocoran",
              "CSS",
              "route",
              "migrasi"
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "pthread_create."
          },
          {
            "type": "mc",
            "q": "Join thread memakai",
            "options": [
              "pthread_join",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "pthread_join."
          },
          {
            "type": "mc",
            "q": "Mutex memakai",
            "options": [
              "pthread_mutex",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "pthread_mutex."
          },
          {
            "type": "mc",
            "q": "Condition variable membantu",
            "options": [
              "sinkronisasi",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Condvar."
          },
          {
            "type": "mc",
            "q": "Race condition dihindari dengan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "lock"
            ],
            "a": 3,
            "explain": "Lock."
          },
          {
            "type": "mc",
            "q": "Atomic operations memakai",
            "options": [
              "CSS",
              "atomic/C11",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Atomics C11."
          },
          {
            "type": "mc",
            "q": "Deadlock dihindari",
            "options": [
              "CSS",
              "urutan lock konsisten",
              "route",
              "migrasi"
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Testing."
          },
          {
            "type": "mc",
            "q": "TLS memakai",
            "options": [
              "CSS",
              "_Thread_local",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Thread local."
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
        "id": "c-17",
        "level": "Menengah",
        "title": "File I/O",
        "exercises": [
          {
            "type": "mc",
            "q": "Membuka berkas memakai",
            "options": [
              "CSS",
              "route",
              "fopen",
              "migrasi"
            ],
            "a": 2,
            "explain": "fopen membuka."
          },
          {
            "type": "mc",
            "q": "Menutup berkas memakai",
            "options": [
              "CSS",
              "route",
              "fclose",
              "migrasi"
            ],
            "a": 2,
            "explain": "fclose menutup."
          },
          {
            "type": "mc",
            "q": "Membaca baris memakai",
            "options": [
              "CSS",
              "fgets",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "fgets membaca."
          },
          {
            "type": "mc",
            "q": "Menulis memakai",
            "options": [
              "fprintf/fwrite",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "fprintf/fwrite."
          },
          {
            "type": "mc",
            "q": "Mode biner memakai",
            "options": [
              "\"r\"/\"w\"",
              "CSS",
              "route",
              "\"rb\"/\"wb\""
            ],
            "a": 3,
            "explain": "Mode biner."
          },
          {
            "type": "mc",
            "q": "Membaca blok memakai",
            "options": [
              "CSS",
              "fread",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "fread membaca blok."
          },
          {
            "type": "mc",
            "q": "Menulis blok memakai",
            "options": [
              "CSS",
              "fwrite",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "fwrite menulis blok."
          },
          {
            "type": "mc",
            "q": "Memeriksa akhir file memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Cek kembalian."
          },
          {
            "type": "mc",
            "q": "File descriptor (POSIX) memakai",
            "options": [
              "CSS",
              "route",
              "open/read/write",
              "migrasi"
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
              "CSS",
              "header",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "#include header."
          },
          {
            "type": "mc",
            "q": "#define membuat",
            "options": [
              "CSS",
              "makro/konstanta",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "#define makro."
          },
          {
            "type": "mc",
            "q": "Include guard memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "#ifndef/#define/#endif"
            ],
            "a": 3,
            "explain": "Include guard."
          },
          {
            "type": "mc",
            "q": "#ifdef memeriksa",
            "options": [
              "CSS",
              "makro terdefinisi",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "#ifdef kondisional."
          },
          {
            "type": "mc",
            "q": "Makro fungsi memakai",
            "options": [
              "CSS",
              "#define F(x) ...",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Makro fungsi."
          },
          {
            "type": "mc",
            "q": "Makro berisiko karena",
            "options": [
              "tanpa type-check",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Makro tidak type-safe."
          },
          {
            "type": "mc",
            "q": "inline function menggantikan",
            "options": [
              "CSS",
              "makro aman",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Inline lebih aman."
          },
          {
            "type": "mc",
            "q": "#pragma once adalah",
            "options": [
              "alternatif include guard",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Banyak compiler mendukung."
          },
          {
            "type": "mc",
            "q": "Header sebaiknya berisi",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "deklarasi"
            ],
            "a": 3,
            "explain": "Deklarasi di header."
          },
          {
            "type": "mc",
            "q": "Definisi di header bisa memicu",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "stdlib utilitas."
          },
          {
            "type": "mc",
            "q": "string.h menyediakan",
            "options": [
              "CSS",
              "route",
              "strlen/strcpy",
              "migrasi"
            ],
            "a": 2,
            "explain": "string.h manip string."
          },
          {
            "type": "mc",
            "q": "math.h menyediakan",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "time.h waktu."
          },
          {
            "type": "mc",
            "q": "ctype.h menyediakan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "isalpha/toupper"
            ],
            "a": 3,
            "explain": "ctype.h karakter."
          },
          {
            "type": "mc",
            "q": "assert.h menyediakan",
            "options": [
              "CSS",
              "route",
              "assert",
              "migrasi"
            ],
            "a": 2,
            "explain": "assert debugging."
          },
          {
            "type": "mc",
            "q": "qsort untuk",
            "options": [
              "pengurutan",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "qsort generic."
          },
          {
            "type": "mc",
            "q": "bsearch untuk",
            "options": [
              "CSS",
              "route",
              "pencarian biner",
              "migrasi"
            ],
            "a": 2,
            "explain": "bsearch biner."
          },
          {
            "type": "mc",
            "q": "rand/srand untuk",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route"
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "-g simbol debug."
          },
          {
            "type": "mc",
            "q": "GDB adalah",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "debugger"
            ],
            "a": 3,
            "explain": "GDB debugger."
          },
          {
            "type": "mc",
            "q": "Valgrind mendeteksi",
            "options": [
              "CSS",
              "route",
              "kebocoran memori",
              "migrasi"
            ],
            "a": 2,
            "explain": "Valgrind memori."
          },
          {
            "type": "mc",
            "q": "AddressSanitizer mendeteksi",
            "options": [
              "CSS",
              "route",
              "kesalahan memori",
              "migrasi"
            ],
            "a": 2,
            "explain": "ASan deteksi."
          },
          {
            "type": "mc",
            "q": "Warning compiler memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "-Wall -Wextra"
            ],
            "a": 3,
            "explain": "Warning berguna."
          },
          {
            "type": "mc",
            "q": "Static analyzer membantu",
            "options": [
              "CSS",
              "menemukan bug",
              "route",
              "migrasi"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Memahami memori."
          },
          {
            "type": "mc",
            "q": "Membaca core dump membantu",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "Core dump debugging."
          },
          {
            "type": "mc",
            "q": "Testing otomatis penting",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
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
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Preprocessor makro."
          },
          {
            "type": "mc",
            "q": "Assembler menghasilkan",
            "options": [
              "CSS",
              "route",
              "object file",
              "migrasi"
            ],
            "a": 2,
            "explain": "Object file."
          },
          {
            "type": "mc",
            "q": "Linker menggabungkan",
            "options": [
              "CSS",
              "route",
              "object dan library",
              "migrasi"
            ],
            "a": 2,
            "explain": "Linker gabung."
          },
          {
            "type": "mc",
            "q": "LTO memungkinkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "optimasi lintas modul"
            ],
            "a": 3,
            "explain": "Link time optimization."
          },
          {
            "type": "mc",
            "q": "Symbol table membantu",
            "options": [
              "CSS",
              "route",
              "debugging/link",
              "migrasi"
            ],
            "a": 2,
            "explain": "Symbol table."
          },
          {
            "type": "mc",
            "q": "Static vs dynamic linking",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Flag compiler."
          },
          {
            "type": "mc",
            "q": "Dokumentasi build penting",
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
        "id": "c-22",
        "level": "Advance",
        "title": "Undefined Behavior",
        "exercises": [
          {
            "type": "mc",
            "q": "UB berarti",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "perilaku tak terdefinisi"
            ],
            "a": 3,
            "explain": "UB tak terdefinisi."
          },
          {
            "type": "mc",
            "q": "Overflow signed int adalah",
            "options": [
              "CSS",
              "route",
              "UB",
              "migrasi"
            ],
            "a": 2,
            "explain": "UB untuk signed."
          },
          {
            "type": "mc",
            "q": "Dereference NULL adalah",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "UB"
            ],
            "a": 3,
            "explain": "UB."
          },
          {
            "type": "mc",
            "q": "Strict aliasing melanggar",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Optimasi berasumsi tanpa UB."
          },
          {
            "type": "mc",
            "q": "UBSan mendeteksi",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "Hindari UB."
          },
          {
            "type": "mc",
            "q": "Menulis kode portabel",
            "options": [
              "tidak",
              "CSS",
              "disarankan",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Embedded mikrokontroler."
          },
          {
            "type": "mc",
            "q": "Register akses memakai",
            "options": [
              "CSS",
              "route",
              "volatile pointer",
              "migrasi"
            ],
            "a": 2,
            "explain": "Volatile untuk register."
          },
          {
            "type": "mc",
            "q": "Interrupt memerlukan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "handler khusus"
            ],
            "a": 3,
            "explain": "ISR."
          },
          {
            "type": "mc",
            "q": "Memori terbatas menuntut",
            "options": [
              "CSS",
              "efisiensi",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Efisiensi memori."
          },
          {
            "type": "mc",
            "q": "RTOS membantu",
            "options": [
              "CSS",
              "route",
              "penjadwalan",
              "migrasi"
            ],
            "a": 2,
            "explain": "RTOS."
          },
          {
            "type": "mc",
            "q": "Cross-compiling penting",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "Cross compile."
          },
          {
            "type": "mc",
            "q": "Debugging hardware memakai",
            "options": [
              "CSS",
              "route",
              "JTAG/SWD",
              "migrasi"
            ],
            "a": 2,
            "explain": "Debug hardware."
          },
          {
            "type": "mc",
            "q": "Kode portabel penting",
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
            "q": "Testing di target penting",
            "options": [
              "ya",
              "tidak",
              "CSS",
              "route"
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
              "CSS",
              "route",
              "socket()",
              "migrasi"
            ],
            "a": 2,
            "explain": "socket syscall."
          },
          {
            "type": "mc",
            "q": "Bind/Listen menghubungkan",
            "options": [
              "CSS",
              "server",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Server bind."
          },
          {
            "type": "mc",
            "q": "connect menghubungkan",
            "options": [
              "client",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Client connect."
          },
          {
            "type": "mc",
            "q": "send/recv untuk",
            "options": [
              "CSS",
              "route",
              "transfer data",
              "migrasi"
            ],
            "a": 2,
            "explain": "Transfer data."
          },
          {
            "type": "mc",
            "q": "Endianness jaringan memakai",
            "options": [
              "big-endian",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Network byte order."
          },
          {
            "type": "mc",
            "q": "select/poll mengelola",
            "options": [
              "CSS",
              "route",
              "banyak socket",
              "migrasi"
            ],
            "a": 2,
            "explain": "Multiplexing."
          },
          {
            "type": "mc",
            "q": "Non-blocking IO memungkinkan",
            "options": [
              "CSS",
              "skalabilitas",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Non-blocking."
          },
          {
            "type": "mc",
            "q": "Menangani partial read penting",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Komentar jelas."
          },
          {
            "type": "mc",
            "q": "Modularisasi membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
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
              "CSS",
              "ya",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Testing."
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
            "q": "Refactor bertahap aman",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Set bit dengan OR."
          },
          {
            "type": "mc",
            "q": "Menghapus bit memakai",
            "options": [
              "&= ~(1<<n)",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Clear bit dengan AND NOT."
          },
          {
            "type": "mc",
            "q": "Membalik bit memakai",
            "options": [
              "CSS",
              "route",
              "^= (1<<n)",
              "migrasi"
            ],
            "a": 2,
            "explain": "Toggle bit dengan XOR."
          },
          {
            "type": "mc",
            "q": "Memeriksa bit memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "& (1<<n)"
            ],
            "a": 3,
            "explain": "Cek bit dengan AND."
          },
          {
            "type": "mc",
            "q": "Bitmask membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "flag efisien"
            ],
            "a": 3,
            "explain": "Bitmask flag."
          },
          {
            "type": "mc",
            "q": "Endianness memengaruhi",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "urutan byte"
            ],
            "a": 3,
            "explain": "Endian urutan byte."
          },
          {
            "type": "mc",
            "q": "Bit-field hemat",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "memori"
            ],
            "a": 3,
            "explain": "Bit-field memori."
          },
          {
            "type": "mc",
            "q": "Shift hati-hati pada",
            "options": [
              "CSS",
              "signed/overflow",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "UB pada shift."
          },
          {
            "type": "mc",
            "q": "XOR untuk swap elegan",
            "options": [
              "tidak",
              "CSS",
              "route",
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
        "id": "c-27",
        "level": "Advance",
        "title": "Sistem & POSIX",
        "exercises": [
          {
            "type": "mc",
            "q": "POSIX menyediakan",
            "options": [
              "CSS",
              "API sistem Unix",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "POSIX API."
          },
          {
            "type": "mc",
            "q": "fork membuat",
            "options": [
              "CSS",
              "route",
              "proses baru",
              "migrasi"
            ],
            "a": 2,
            "explain": "fork proses."
          },
          {
            "type": "mc",
            "q": "exec mengganti",
            "options": [
              "CSS",
              "program proses",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "exec program."
          },
          {
            "type": "mc",
            "q": "Pipe mengalirkan",
            "options": [
              "CSS",
              "data antar proses",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Pipe data."
          },
          {
            "type": "mc",
            "q": "Signal memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "komunikasi proses"
            ],
            "a": 3,
            "explain": "Signal proses."
          },
          {
            "type": "mc",
            "q": "Thread POSIX memakai",
            "options": [
              "CSS",
              "route",
              "pthread",
              "migrasi"
            ],
            "a": 2,
            "explain": "pthread thread."
          },
          {
            "type": "mc",
            "q": "Mutex/monitor",
            "options": [
              "CSS",
              "sinkronisasi",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Sinkronisasi thread."
          },
          {
            "type": "mc",
            "q": "mmap memetakan",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Socket jaringan."
          },
          {
            "type": "mc",
            "q": "errno memberi",
            "options": [
              "kode error",
              "CSS",
              "route",
              "migrasi"
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
              "CSS",
              "route",
              "perf/gprof",
              "migrasi"
            ],
            "a": 2,
            "explain": "Profiler C."
          },
          {
            "type": "mc",
            "q": "Optimasi compiler memakai",
            "options": [
              "CSS",
              "route",
              "-O2/-O3",
              "migrasi"
            ],
            "a": 2,
            "explain": "Flag optimasi."
          },
          {
            "type": "mc",
            "q": "Cache locality memengaruhi",
            "options": [
              "performa",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Locality cache."
          },
          {
            "type": "mc",
            "q": "Struktur data tepat penting",
            "options": [
              "tidak",
              "CSS",
              "route",
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Minimalkan alokasi."
          },
          {
            "type": "mc",
            "q": "Inline function membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Ukur dulu."
          },
          {
            "type": "mc",
            "q": "Simon/UB harus dihindari",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "Hindari UB."
          },
          {
            "type": "mc",
            "q": "Vectorization compiler otomatis",
            "options": [
              "tidak",
              "CSS",
              "route",
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Overflow UB."
          },
          {
            "type": "mc",
            "q": "strncpy lebih aman dari strcpy",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "Batasi panjang."
          },
          {
            "type": "mc",
            "q": "gets tidak aman",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "gets tidak aman."
          },
          {
            "type": "mc",
            "q": "Format string berbahaya bila",
            "options": [
              "input jadi format",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Jangan pakai input sebagai format."
          },
          {
            "type": "mc",
            "q": "Integer overflow harus",
            "options": [
              "CSS",
              "dicek",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Cek overflow."
          },
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
            "q": "Sanitasi penting",
            "options": [
              "tidak",
              "CSS",
              "route",
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
              "CSS",
              "route",
              "migrasi"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "struct + pointer",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "List lewat pointer."
          },
          {
            "type": "mc",
            "q": "Stack memakai",
            "options": [
              "CSS",
              "route",
              "LIFO",
              "migrasi"
            ],
            "a": 2,
            "explain": "Stack LIFO."
          },
          {
            "type": "mc",
            "q": "Queue memakai",
            "options": [
              "CSS",
              "FIFO",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Queue FIFO."
          },
          {
            "type": "mc",
            "q": "Hash table memakai",
            "options": [
              "array + hash",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Hash table."
          },
          {
            "type": "mc",
            "q": "Tree memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "node + pointer"
            ],
            "a": 3,
            "explain": "Tree pointer."
          },
          {
            "type": "mc",
            "q": "Dynamic array memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
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
              "CSS",
              "route"
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
              "route",
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
