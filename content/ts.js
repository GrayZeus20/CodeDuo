/* CodeDuo — blok konten: TypeScript · REST API.
 * 2 topik (ts, rest) × 31 pelajaran (10 Dasar, 10 Menengah, 11 Advance). Total 610 soal (305 per topik).
 * Engine di content.js (barrel) & app.js. Format tipe soal: mc | fill | code | preview | arrange.
 * ESM murni: dipakai Vite (browser) & Node (test).
 */
'use strict';

const CONTENT_TS = [
  {
    "id": "ts",
    "name": "TypeScript",
    "icon": "🔷",
    "color": "#3178c6",
    "desc": "JavaScript dengan tipe statis",
    "lessons": [
      {
        "id": "ts-1",
        "level": "Dasar",
        "title": "Tipe Dasar",
        "exercises": [
          {
            "type": "fill",
            "q": "Deklarasi variabel string yang benar:",
            "code": "let nama: ___ = \"Budi\";",
            "accept": [
              "string"
            ],
            "explain": "string (lowercase) untuk tipe, String hanya wrapper."
          },
          {
            "type": "mc",
            "q": "Anotasi tipe number:",
            "options": [
              "let n: int = 5",
              "let n: number = 5",
              "let n: Number = 5 (wajib)",
              "let n: num = 5"
            ],
            "a": 1,
            "explain": "TS memakai number untuk integer & float."
          },
          {
            "type": "fill",
            "q": "Lengkapi tipe boolean:",
            "code": "const aktif: ___ = true;",
            "accept": [
              "boolean"
            ],
            "explain": "boolean = true/false."
          },
          {
            "type": "mc",
            "q": "Keuntungan TypeScript dibanding JavaScript murni:",
            "options": [
              "Kode jalan 2x lebih cepat",
              "Error tipe tertangkap sebelum runtime",
              "Tidak butuh browser",
              "File selalu lebih kecil"
            ],
            "a": 1,
            "explain": "Static type checking → bug tertangkap saat compile/edit."
          },
          {
            "type": "fill",
            "q": "Tipe untuk apa saja (hindari kalau bisa):",
            "code": "let x: ___ = apapun;",
            "accept": [
              "any"
            ],
            "explain": "any mematikan pengecekan tipe."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #1: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #2: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #3: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #4: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #5: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          }
        ]
      },
      {
        "id": "ts-2",
        "level": "Dasar",
        "title": "Interface & Object",
        "exercises": [
          {
            "type": "mc",
            "q": "interface dipakai untuk:",
            "options": [
              "Mendefinisikan bentuk struktur objek",
              "Membuat loop",
              "Query database",
              "Mengimpor gambar"
            ],
            "a": 0,
            "explain": "Interface = blueprint properti & tipenya."
          },
          {
            "type": "fill",
            "q": "Lengkapi tipe property name:",
            "code": "interface User {\n  name: ___;\n}",
            "accept": [
              "string"
            ],
            "explain": "Properti name bertipe string."
          },
          {
            "type": "fill",
            "q": "Property opsional (boleh tidak diisi) ditandai:",
            "code": "interface User {\n  email: string;\n  phone___ : string;\n}",
            "accept": [
              "?",
              "phone?"
            ],
            "explain": "Tanda ? = optional property."
          },
          {
            "type": "arrange",
            "q": "Susun interface yang valid:",
            "blocks": [
              "interface User {",
              "name: string;",
              "age: number;",
              "}"
            ],
            "explain": "interface Nama { prop: tipe; ... }"
          },
          {
            "type": "mc",
            "q": "Membuat objek yang cocok dengan interface User:",
            "options": [
              "const u: User = { name: \"A\", age: 1 }",
              "const u: User = 5",
              "const u = User()",
              "new User"
            ],
            "a": 0,
            "explain": "Objek literal harus memenuhi semua properti wajib."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #6: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #7: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #8: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #9: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #10: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          }
        ]
      },
      {
        "id": "ts-3",
        "level": "Dasar",
        "title": "TS Lesson 3",
        "exercises": [
          {
            "type": "mc",
            "q": "Dasar TypeScript #11: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #12: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #13: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #14: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #15: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #16: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #17: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #18: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #19: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #20: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          }
        ]
      },
      {
        "id": "ts-4",
        "level": "Dasar",
        "title": "TS Lesson 4",
        "exercises": [
          {
            "type": "mc",
            "q": "Dasar TypeScript #21: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #22: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #23: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #24: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #25: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #26: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #27: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #28: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #29: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #30: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          }
        ]
      },
      {
        "id": "ts-5",
        "level": "Dasar",
        "title": "TS Lesson 5",
        "exercises": [
          {
            "type": "mc",
            "q": "Dasar TypeScript #31: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #32: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #33: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #34: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #35: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #36: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #37: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #38: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #39: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #40: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          }
        ]
      },
      {
        "id": "ts-6",
        "level": "Dasar",
        "title": "TS Lesson 6",
        "exercises": [
          {
            "type": "mc",
            "q": "Dasar TypeScript #41: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #42: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #43: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #44: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #45: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #46: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #47: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #48: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #49: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #50: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          }
        ]
      },
      {
        "id": "ts-7",
        "level": "Dasar",
        "title": "TS Lesson 7",
        "exercises": [
          {
            "type": "mc",
            "q": "Dasar TypeScript #51: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #52: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #53: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #54: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #55: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #56: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #57: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #58: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #59: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #60: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          }
        ]
      },
      {
        "id": "ts-8",
        "level": "Dasar",
        "title": "TS Lesson 8",
        "exercises": [
          {
            "type": "mc",
            "q": "Dasar TypeScript #61: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #62: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #63: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #64: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #65: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #66: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #67: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #68: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #69: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #70: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          }
        ]
      },
      {
        "id": "ts-9",
        "level": "Dasar",
        "title": "TS Lesson 9",
        "exercises": [
          {
            "type": "mc",
            "q": "Dasar TypeScript #71: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #72: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #73: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #74: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #75: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #76: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #77: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #78: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #79: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #80: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          }
        ]
      },
      {
        "id": "ts-10",
        "level": "Dasar",
        "title": "TS Lesson 10",
        "exercises": [
          {
            "type": "mc",
            "q": "Dasar TypeScript #81: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #82: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #83: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #84: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #85: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #86: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #87: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #88: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #89: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          },
          {
            "type": "mc",
            "q": "Dasar TypeScript #90: Tipe data primitif untuk teks dalam TypeScript adalah:",
            "options": [
              "string",
              "String",
              "text",
              "char"
            ],
            "a": 0,
            "explain": "string (huruf kecil) adalah tipe primitif resmi TypeScript."
          }
        ]
      },
      {
        "id": "ts-11",
        "level": "Menengah",
        "title": "Union & Type Narrowing",
        "exercises": [
          {
            "type": "mc",
            "q": "Tipe union artinya:",
            "options": [
              "Gabungan dua fungsi",
              "Salah satu dari beberapa tipe yang diizinkan",
              "Tipe khusus array",
              "Tipe untuk database"
            ],
            "a": 1,
            "explain": "\"a\" | \"b\" → nilai boleh \"a\" atau \"b\"."
          },
          {
            "type": "fill",
            "q": "Lengkapi union agar status hanya \"on\" atau \"off\":",
            "code": "type Status = \"on\" | ___;",
            "accept": [
              "\"off\"",
              "'off'",
              "off"
            ],
            "explain": "Union memisah dengan tanda |"
          },
          {
            "type": "fill",
            "q": "Parameter boleh string atau number:",
            "code": "function set(x: string | ___) {}",
            "accept": [
              "number"
            ],
            "explain": "string | number = union dua tipe."
          },
          {
            "type": "mc",
            "q": "typeof dipakai pada union untuk:",
            "options": [
              "Menyempitkan tipe saat runtime (narrowing)",
              "Menghapus tipe",
              "Mengubah nilai",
              "Membuat loop"
            ],
            "a": 0,
            "explain": "if (typeof x === \"string\") → TS tahu x string di dalam blok."
          },
          {
            "type": "mc",
            "q": "let n: number = \"5\" (nilai string) di TS akan:",
            "options": [
              "Otomatis jadi 5",
              "Error saat compile/checking",
              "Jadi null",
              "Diabaikan"
            ],
            "a": 1,
            "explain": "Type mismatch = error sebelum kode jalan."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #1: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #2: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #3: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #4: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #5: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          }
        ]
      },
      {
        "id": "ts-12",
        "level": "Menengah",
        "title": "Function Types",
        "exercises": [
          {
            "type": "mc",
            "q": "Anotasi tipe nilai balik fungsi kuadrat:",
            "options": [
              "function k(n: number): number { return n*n }",
              "function k(n): number { }",
              "function k(n: number) -> number { }",
              "function k(n number) number { }"
            ],
            "a": 0,
            "explain": "Tipe parameter di dalam kurung, tipe balik setelah : di akhir."
          },
          {
            "type": "fill",
            "q": "Tipe balik fungsi tak mengembalikan apa pun:",
            "code": "function log(msg: string): ___ { console.log(msg); }",
            "accept": [
              "void"
            ],
            "explain": "void = tidak ada nilai balik."
          },
          {
            "type": "mc",
            "q": "Parameter opsional pada fungsi:",
            "options": [
              "function f(a?: number) {}",
              "function f(a: number?) {}",
              "function f(optional a: number) {}",
              "function f(a = optional) {}"
            ],
            "a": 0,
            "explain": "a? membuat parameter boleh dilewat."
          },
          {
            "type": "arrange",
            "q": "Susun fungsi bertipe lengkap:",
            "blocks": [
              "function tambah(",
              "a: number,",
              "b: number",
              "): number { return a + b; }"
            ],
            "explain": "Parameter bertipe + tipe balik number."
          },
          {
            "type": "fill",
            "q": "Nilai default parameter:",
            "code": "function f(x: number = ___): number { return x; }",
            "accept": [
              "0"
            ],
            "explain": "x = 0 → dipakai bila argumen absen."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #6: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #7: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #8: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #9: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #10: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          }
        ]
      },
      {
        "id": "ts-13",
        "level": "Menengah",
        "title": "TS Lesson 13",
        "exercises": [
          {
            "type": "mc",
            "q": "TypeScript Menengah #11: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #12: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #13: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #14: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #15: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #16: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #17: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #18: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #19: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #20: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          }
        ]
      },
      {
        "id": "ts-14",
        "level": "Menengah",
        "title": "TS Lesson 14",
        "exercises": [
          {
            "type": "mc",
            "q": "TypeScript Menengah #21: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #22: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #23: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #24: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #25: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #26: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #27: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #28: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #29: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #30: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          }
        ]
      },
      {
        "id": "ts-15",
        "level": "Menengah",
        "title": "TS Lesson 15",
        "exercises": [
          {
            "type": "mc",
            "q": "TypeScript Menengah #31: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #32: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #33: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #34: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #35: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #36: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #37: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #38: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #39: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #40: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          }
        ]
      },
      {
        "id": "ts-16",
        "level": "Menengah",
        "title": "TS Lesson 16",
        "exercises": [
          {
            "type": "mc",
            "q": "TypeScript Menengah #41: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #42: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #43: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #44: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #45: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #46: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #47: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #48: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #49: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #50: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          }
        ]
      },
      {
        "id": "ts-17",
        "level": "Menengah",
        "title": "TS Lesson 17",
        "exercises": [
          {
            "type": "mc",
            "q": "TypeScript Menengah #51: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #52: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #53: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #54: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #55: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #56: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #57: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #58: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #59: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #60: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          }
        ]
      },
      {
        "id": "ts-18",
        "level": "Menengah",
        "title": "TS Lesson 18",
        "exercises": [
          {
            "type": "mc",
            "q": "TypeScript Menengah #61: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #62: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #63: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #64: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #65: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #66: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #67: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #68: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #69: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #70: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          }
        ]
      },
      {
        "id": "ts-19",
        "level": "Menengah",
        "title": "TS Lesson 19",
        "exercises": [
          {
            "type": "mc",
            "q": "TypeScript Menengah #71: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #72: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #73: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #74: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #75: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #76: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #77: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #78: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #79: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #80: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          }
        ]
      },
      {
        "id": "ts-20",
        "level": "Menengah",
        "title": "TS Lesson 20",
        "exercises": [
          {
            "type": "mc",
            "q": "TypeScript Menengah #81: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #82: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #83: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #84: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #85: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #86: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #87: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #88: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #89: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          },
          {
            "type": "mc",
            "q": "TypeScript Menengah #90: Perbedaan utama Interface dan Type Alias:",
            "options": [
              "Interface dapat di-extend via deklarasi ulang (declaration merging) dan extends hierarki",
              "Type alias hanya untuk angka",
              "Interface tidak bisa dipakai untuk objek",
              "Sama sekali tidak ada perbedaan"
            ],
            "a": 0,
            "explain": "Interface mendukung declaration merging dan pewarisan extends alami."
          }
        ]
      },
      {
        "id": "ts-21",
        "level": "Advance",
        "title": "Generics",
        "exercises": [
          {
            "type": "mc",
            "q": "Generics berguna untuk:",
            "options": [
              "Membuat kode yang bekerja untuk banyak tipe tanpa kehilangan tipe",
              "Menghapus tipe",
              "Mempercepat runtime",
              "Mengubah JS jadi Python"
            ],
            "a": 0,
            "explain": "Type parameter <T> menjaga hubunga input↔output."
          },
          {
            "type": "fill",
            "q": "Lengkapi tipe kembalian fungsi generik (elemen yang disimpan array bertipe T):",
            "code": "function first<T>(arr: T[]): ___ { return arr[0]; }",
            "accept": [
              "t",
              "T"
            ],
            "explain": "Tipe balik T = tipe elemen array."
          },
          {
            "type": "mc",
            "q": "const arr = [1, 2, 3] bertipe:",
            "options": [
              "any[]",
              "number[]",
              "string[]",
              "N[]"
            ],
            "a": 1,
            "explain": "TS menyimpulkan array of number."
          },
          {
            "type": "mc",
            "q": "Partial<User> menghasilkan:",
            "options": [
              "Semua properti User jadi wajib",
              "Semua properti User jadi opsional",
              "Menghapus User",
              "Array User"
            ],
            "a": 1,
            "explain": "Utility type bawaan membuat tiap field opsional."
          },
          {
            "type": "arrange",
            "q": "Susun fungsi generik identitas:",
            "blocks": [
              "function identitas<T>(",
              "x: T",
              "): T {",
              "return x; }"
            ],
            "explain": "Terima T, kembalikan T."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #1: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #2: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #3: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #4: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #5: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          }
        ]
      },
      {
        "id": "ts-22",
        "level": "Advance",
        "title": "Type Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "Menandai tipe yang pasti ada tanpa pengecekan null:",
            "options": [
              "let el: HTMLElement = document.getElementById(\"x\")!",
              "let el: HTMLElement = document.getElementById(\"x\")?",
              "let el!: HTMLElement",
              "let el = getElementById"
            ],
            "a": 0,
            "explain": "Non-null assertion (!) menyatakan nilai tidak null."
          },
          {
            "type": "fill",
            "q": "Lengkapi tipe yang hanya boleh nilai tertentu:",
            "code": "type Arah = \"atas\" | \"bawah\" | \"___\";",
            "accept": [
              "kiri",
              "kanan",
              "depan",
              "belakang"
            ],
            "explain": "Literal union = himpunan nilai terbatas."
          },
          {
            "type": "mc",
            "q": "readonly pada properti berarti:",
            "options": [
              "Tidak boleh diubah setelah dibuat",
              "Wajib diisi",
              "Bertipe any",
              "Private"
            ],
            "a": 0,
            "explain": "readonly mencegah penugasan ulang."
          },
          {
            "type": "mc",
            "q": "as const dipakai untuk:",
            "options": [
              "Mengunci literal jadi tipe paling sempit",
              "Cast ke number",
              "Membuat const baru",
              "Menghapus tipe"
            ],
            "a": 0,
            "explain": "const a = [1, 2] as const → tuple readonly literal."
          },
          {
            "type": "fill",
            "q": "Alias tipe baru dari tipe yang ada:",
            "code": "___ UserId = string;",
            "accept": [
              "type"
            ],
            "explain": "type Alias = ... memberi nama tipe."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #6: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #7: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #8: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #9: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #10: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          }
        ]
      },
      {
        "id": "ts-23",
        "level": "Advance",
        "title": "TS Lesson 23",
        "exercises": [
          {
            "type": "mc",
            "q": "TypeScript Advance #11: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #12: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #13: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #14: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #15: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #16: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #17: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #18: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #19: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #20: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          }
        ]
      },
      {
        "id": "ts-24",
        "level": "Advance",
        "title": "TS Lesson 24",
        "exercises": [
          {
            "type": "mc",
            "q": "TypeScript Advance #21: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #22: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #23: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #24: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #25: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #26: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #27: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #28: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #29: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #30: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          }
        ]
      },
      {
        "id": "ts-25",
        "level": "Advance",
        "title": "TS Lesson 25",
        "exercises": [
          {
            "type": "mc",
            "q": "TypeScript Advance #31: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #32: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #33: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #34: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #35: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #36: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #37: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #38: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #39: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #40: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          }
        ]
      },
      {
        "id": "ts-26",
        "level": "Advance",
        "title": "TS Lesson 26",
        "exercises": [
          {
            "type": "mc",
            "q": "TypeScript Advance #41: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #42: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #43: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #44: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #45: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #46: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #47: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #48: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #49: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #50: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          }
        ]
      },
      {
        "id": "ts-27",
        "level": "Advance",
        "title": "TS Lesson 27",
        "exercises": [
          {
            "type": "mc",
            "q": "TypeScript Advance #51: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #52: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #53: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #54: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #55: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #56: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #57: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #58: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #59: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #60: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          }
        ]
      },
      {
        "id": "ts-28",
        "level": "Advance",
        "title": "TS Lesson 28",
        "exercises": [
          {
            "type": "mc",
            "q": "TypeScript Advance #61: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #62: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #63: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #64: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #65: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #66: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #67: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #68: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #69: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #70: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          }
        ]
      },
      {
        "id": "ts-29",
        "level": "Advance",
        "title": "TS Lesson 29",
        "exercises": [
          {
            "type": "mc",
            "q": "TypeScript Advance #71: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #72: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #73: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #74: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #75: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #76: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #77: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #78: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #79: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #80: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          }
        ]
      },
      {
        "id": "ts-30",
        "level": "Advance",
        "title": "TS Lesson 30",
        "exercises": [
          {
            "type": "mc",
            "q": "TypeScript Advance #81: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #82: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #83: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #84: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #85: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #86: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #87: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #88: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #89: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #90: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          }
        ]
      },
      {
        "id": "ts-31",
        "level": "Advance",
        "title": "TS Lesson 31",
        "exercises": [
          {
            "type": "mc",
            "q": "TypeScript Advance #91: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #92: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #93: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #94: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          },
          {
            "type": "mc",
            "q": "TypeScript Advance #95: Utility Type Partial<T> menghasilkan:",
            "options": [
              "Tipe baru di mana seluruh properti dari tipe T menjadi opsional (?)",
              "Tipe baru tanpa properti",
              "Hanya properti required",
              "Array dari T"
            ],
            "a": 0,
            "explain": "Partial<T> membuat seluruh properti objek T menjadi opsional."
          }
        ]
      }
    ]
  },
  {
    "id": "rest",
    "name": "REST API",
    "icon": "🚦",
    "color": "#009688",
    "desc": "Konvensi desain API modern",
    "lessons": [
      {
        "id": "rest-1",
        "level": "Dasar",
        "title": "Prinsip REST",
        "exercises": [
          {
            "type": "mc",
            "q": "REST berarti:",
            "options": [
              "Representational State Transfer — arsitektur berbasis resource di HTTP",
              "Bahasa query",
              "Framework JavaScript",
              "Tipe database"
            ],
            "a": 0,
            "explain": "Resource diidentifikasi URL, dioperasi lewat HTTP method."
          },
          {
            "type": "mc",
            "q": "Stateless artinya:",
            "options": [
              "Server menyimpan session di cookie saja",
              "Tiap request membawa info yang dibutuhkan sendiri, server tanpa memori antar request",
              "Client tidak pernah menyimpan data",
              "API tidak boleh punya status"
            ],
            "a": 1,
            "explain": "Tiap request mandiri — auth via token di tiap request."
          },
          {
            "type": "mc",
            "q": "URL resource-based yang benar:",
            "options": [
              "/getUserData?id=42",
              "/api/users/42",
              "/api/selectUser",
              "/api/users/show"
            ],
            "a": 1,
            "explain": "URL = noun (resource), method = verb."
          },
          {
            "type": "fill",
            "q": "Method standar REST untuk MEMBUAT resource:",
            "code": "___ /api/articles",
            "accept": [
              "post"
            ],
            "explain": "POST ke koleksi = create."
          },
          {
            "type": "mc",
            "q": "Resource pada REST didefinisikan oleh:",
            "options": [
              "Nama fungsi",
              "Nama (noun) yang diakses lewat URL",
              "Nomor baris",
              "Warna tombol"
            ],
            "a": 1,
            "explain": "Resource = kata benda; aksi = HTTP method."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #1: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #2: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #3: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #4: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #5: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          }
        ]
      },
      {
        "id": "rest-2",
        "level": "Dasar",
        "title": "Desain Endpoint",
        "exercises": [
          {
            "type": "mc",
            "q": "GET /api/users/12/posts mengambil:",
            "options": [
              "Semua posts semua user",
              "Posts milik user 12",
              "User ke-12 dari tiap post",
              "Endpoint tidak valid"
            ],
            "a": 1,
            "explain": "Nesting resource: /users/{id}/posts."
          },
          {
            "type": "fill",
            "q": "Koleksi pakai nama jamak — lengkapi:",
            "code": "GET /api/___   // daftar artikel",
            "accept": [
              "articles",
              "artikel",
              "artikels"
            ],
            "explain": "Plural noun = koleksi (articles, users)."
          },
          {
            "type": "mc",
            "q": "Mengapa endpoint sebaiknya TIDAK nested terlalu dalam (mis. /a/1/b/2/c/3/d/4)?",
            "options": [
              "Karena tidak bisa di-cache",
              "Sulit dipahami, diubah, dan di-cache",
              "Melanggar HTTP",
              "Memori server penuh"
            ],
            "a": 1,
            "explain": "Dua level biasanya cukup; sisanya pakai query param."
          },
          {
            "type": "arrange",
            "q": "Pasangkan urutan CRUD ke method REST:",
            "blocks": [
              "Create → POST",
              "Read → GET",
              "Update → PUT/PATCH",
              "Delete → DELETE"
            ],
            "explain": "CRUD dipetakan langsung ke empat method HTTP."
          },
          {
            "type": "fill",
            "q": "Ambil satu resource spesifik dengan id di path:",
            "code": "GET /api/users/___",
            "accept": [
              "42",
              "1",
              "123",
              "{id}",
              ":id",
              "id"
            ],
            "explain": "Identifier ditaruh di segmen path."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #6: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #7: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #8: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #9: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #10: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          }
        ]
      },
      {
        "id": "rest-3",
        "level": "Dasar",
        "title": "REST Lesson 3",
        "exercises": [
          {
            "type": "mc",
            "q": "Konsep REST API #11: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #12: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #13: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #14: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #15: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #16: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #17: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #18: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #19: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #20: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          }
        ]
      },
      {
        "id": "rest-4",
        "level": "Dasar",
        "title": "REST Lesson 4",
        "exercises": [
          {
            "type": "mc",
            "q": "Konsep REST API #21: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #22: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #23: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #24: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #25: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #26: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #27: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #28: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #29: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #30: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          }
        ]
      },
      {
        "id": "rest-5",
        "level": "Dasar",
        "title": "REST Lesson 5",
        "exercises": [
          {
            "type": "mc",
            "q": "Konsep REST API #31: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #32: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #33: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #34: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #35: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #36: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #37: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #38: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #39: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #40: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          }
        ]
      },
      {
        "id": "rest-6",
        "level": "Dasar",
        "title": "REST Lesson 6",
        "exercises": [
          {
            "type": "mc",
            "q": "Konsep REST API #41: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #42: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #43: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #44: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #45: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #46: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #47: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #48: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #49: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #50: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          }
        ]
      },
      {
        "id": "rest-7",
        "level": "Dasar",
        "title": "REST Lesson 7",
        "exercises": [
          {
            "type": "mc",
            "q": "Konsep REST API #51: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #52: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #53: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #54: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #55: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #56: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #57: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #58: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #59: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #60: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          }
        ]
      },
      {
        "id": "rest-8",
        "level": "Dasar",
        "title": "REST Lesson 8",
        "exercises": [
          {
            "type": "mc",
            "q": "Konsep REST API #61: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #62: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #63: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #64: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #65: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #66: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #67: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #68: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #69: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #70: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          }
        ]
      },
      {
        "id": "rest-9",
        "level": "Dasar",
        "title": "REST Lesson 9",
        "exercises": [
          {
            "type": "mc",
            "q": "Konsep REST API #71: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #72: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #73: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #74: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #75: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #76: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #77: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #78: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #79: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #80: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          }
        ]
      },
      {
        "id": "rest-10",
        "level": "Dasar",
        "title": "REST Lesson 10",
        "exercises": [
          {
            "type": "mc",
            "q": "Konsep REST API #81: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #82: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #83: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #84: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #85: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #86: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #87: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #88: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #89: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          },
          {
            "type": "mc",
            "q": "Konsep REST API #90: Metode HTTP yang bersifat idempoten (dijalankan berulang kali menghasilkan efek server yang sama):",
            "options": [
              "GET, PUT, dan DELETE",
              "Hanya POST",
              "Hanya PATCH",
              "Tidak ada yang idempoten"
            ],
            "a": 0,
            "explain": "GET, PUT, dan DELETE adalah metode idempoten standar spesifikasi HTTP."
          }
        ]
      },
      {
        "id": "rest-11",
        "level": "Menengah",
        "title": "Keamanan",
        "exercises": [
          {
            "type": "mc",
            "q": "Token autentikasi dikirim di:",
            "options": [
              "URL query ?token=xxx",
              "Header Authorization: Bearer <token>",
              "Body GET request",
              "Cookie otomatis selalu"
            ],
            "a": 1,
            "explain": "Authorization: Bearer <token> — tidak bocor di log URL."
          },
          {
            "type": "mc",
            "q": "Untuk API publik, transport WAJIB memakai:",
            "options": [
              "HTTP biasa",
              "HTTPS (TLS)",
              "FTP",
              "WebSocket saja"
            ],
            "a": 1,
            "explain": "Tanpa TLS, token/password bisa disadap di jaringan."
          },
          {
            "type": "fill",
            "q": "Simpan password user sebagai (jangan plain text):",
            "code": "password disimpan sebagai ___ (bcrypt dst.)",
            "accept": [
              "hash",
              "hashed",
              "password hash",
              "hashing"
            ],
            "explain": "Hash + salt → password asli tidak tersimpan."
          },
          {
            "type": "mc",
            "q": "Rate limiting pada API berfungsi untuk:",
            "options": [
              "Mempercantik response",
              "Membatasi request per periode → cegah abuse & brute force",
              "Kompressi gambar",
              "Menyimpan cache permanen"
            ],
            "a": 1,
            "explain": "Mis. 100 request/menit per IP/token."
          },
          {
            "type": "mc",
            "q": "CORS diatur oleh:",
            "options": [
              "Browser + header respons dari server",
              "Database",
              "Hardware router",
              "User"
            ],
            "a": 0,
            "explain": "Server mengizinkan origin lewat Access-Control-Allow-Origin."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #1: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #2: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #3: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #4: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #5: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          }
        ]
      },
      {
        "id": "rest-12",
        "level": "Menengah",
        "title": "Resource & Relations",
        "exercises": [
          {
            "type": "mc",
            "q": "Untuk menautkan dua resource pada REST:",
            "options": [
              "Sertakan URL resource terkait di respons (_links/embedded)",
              "Duplikasi semua data",
              "Hapus relasi",
              "Pakai nomor acak"
            ],
            "a": 0,
            "explain": "HATEOAS/gaya hypermedia menyertakan tautan relasi."
          },
          {
            "type": "fill",
            "q": "Filter resource lewat query param:",
            "code": "GET /articles?status=___",
            "accept": [
              "published",
              "draft"
            ],
            "explain": "Query param menyaring koleksi."
          },
          {
            "type": "mc",
            "q": "Mengurutkan koleksi lewat REST umumnya memakai:",
            "options": [
              "?sort=-created_at",
              "?orderby",
              "POST /sort",
              "DELETE /order"
            ],
            "a": 0,
            "explain": "Konvensi: ?sort=field atau -field untuk menurun."
          },
          {
            "type": "mc",
            "q": "Respons yang baik untuk POST yang membuat resource berisi:",
            "options": [
              "201 Created + Location header ke resource baru",
              "200 tanpa apa pun",
              "204 selamanya",
              "404"
            ],
            "a": 0,
            "explain": "Beri tahu client di mana resource baru berada."
          },
          {
            "type": "arrange",
            "q": "Susun interaksi nested resource:",
            "blocks": [
              "GET /users/12",
              "GET /users/12/posts",
              "POST /users/12/posts"
            ],
            "explain": "Ambil user, lihat posts-nya, lalu tambah post baru."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #6: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #7: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #8: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #9: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #10: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          }
        ]
      },
      {
        "id": "rest-13",
        "level": "Menengah",
        "title": "REST Lesson 13",
        "exercises": [
          {
            "type": "mc",
            "q": "Desain REST API Menengah #11: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #12: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #13: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #14: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #15: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #16: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #17: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #18: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #19: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #20: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          }
        ]
      },
      {
        "id": "rest-14",
        "level": "Menengah",
        "title": "REST Lesson 14",
        "exercises": [
          {
            "type": "mc",
            "q": "Desain REST API Menengah #21: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #22: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #23: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #24: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #25: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #26: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #27: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #28: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #29: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #30: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          }
        ]
      },
      {
        "id": "rest-15",
        "level": "Menengah",
        "title": "REST Lesson 15",
        "exercises": [
          {
            "type": "mc",
            "q": "Desain REST API Menengah #31: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #32: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #33: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #34: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #35: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #36: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #37: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #38: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #39: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #40: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          }
        ]
      },
      {
        "id": "rest-16",
        "level": "Menengah",
        "title": "REST Lesson 16",
        "exercises": [
          {
            "type": "mc",
            "q": "Desain REST API Menengah #41: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #42: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #43: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #44: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #45: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #46: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #47: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #48: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #49: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #50: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          }
        ]
      },
      {
        "id": "rest-17",
        "level": "Menengah",
        "title": "REST Lesson 17",
        "exercises": [
          {
            "type": "mc",
            "q": "Desain REST API Menengah #51: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #52: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #53: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #54: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #55: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #56: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #57: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #58: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #59: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #60: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          }
        ]
      },
      {
        "id": "rest-18",
        "level": "Menengah",
        "title": "REST Lesson 18",
        "exercises": [
          {
            "type": "mc",
            "q": "Desain REST API Menengah #61: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #62: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #63: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #64: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #65: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #66: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #67: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #68: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #69: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #70: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          }
        ]
      },
      {
        "id": "rest-19",
        "level": "Menengah",
        "title": "REST Lesson 19",
        "exercises": [
          {
            "type": "mc",
            "q": "Desain REST API Menengah #71: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #72: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #73: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #74: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #75: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #76: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #77: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #78: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #79: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #80: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          }
        ]
      },
      {
        "id": "rest-20",
        "level": "Menengah",
        "title": "REST Lesson 20",
        "exercises": [
          {
            "type": "mc",
            "q": "Desain REST API Menengah #81: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #82: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #83: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #84: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #85: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #86: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #87: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #88: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #89: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          },
          {
            "type": "mc",
            "q": "Desain REST API Menengah #90: Konvensi penamaan URI endpoint yang baik adalah menggunakan:",
            "options": [
              "Kata benda jamak (nouns plural) huruf kecil, contoh: /api/v1/products",
              "Kata kerja (verbs), contoh: /api/getProducts",
              "Huruf kapital campur spasi",
              "Format file ekstensi .php"
            ],
            "a": 0,
            "explain": "RESTful URI memodelkan resource menggunakan kata benda jamak."
          }
        ]
      },
      {
        "id": "rest-21",
        "level": "Advance",
        "title": "Caching & Pagination",
        "exercises": [
          {
            "type": "mc",
            "q": "ETag dipakai untuk:",
            "options": [
              "Validasi cache lewat versi resource",
              "Menghapus data",
              "Menambah user",
              "Mengurutkan"
            ],
            "a": 0,
            "explain": "Client kirim If-None-Match → 304 bila tak berubah."
          },
          {
            "type": "fill",
            "q": "Respons \"tidak berubah, pakai cache\" punya status:",
            "code": "HTTP/1.1 ___ Not Modified",
            "accept": [
              "304"
            ],
            "explain": "304 = cache masih valid."
          },
          {
            "type": "mc",
            "q": "Pagination berbasis cursor lebih baik dari offset untuk:",
            "options": [
              "Data yang sering berubah",
              "Tabel statis kecil",
              "Gambar",
              "Login"
            ],
            "a": 0,
            "explain": "Cursor stabil walau ada penambahan/penghapusan di antara halaman."
          },
          {
            "type": "mc",
            "q": "Header Link pada pagination dipakai untuk:",
            "options": [
              "Menunjukkan URL next/prev/last",
              "Menghapus resource",
              "Auth",
              "Format body"
            ],
            "a": 0,
            "explain": "Membantu client menavigasi antar halaman."
          },
          {
            "type": "fill",
            "q": "Cegah hasil basi dengan mengirim versi di header:",
            "code": "If-None-Match: \"___\"",
            "accept": [
              "etag",
              "versi"
            ],
            "explain": "Nilai ETag yang diharapkan cocok."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #1: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #2: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #3: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #4: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #5: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          }
        ]
      },
      {
        "id": "rest-22",
        "level": "Advance",
        "title": "Versi & Evolusi",
        "exercises": [
          {
            "type": "mc",
            "q": "Cara umum memberi versi API pada URL:",
            "options": [
              "/api/v1/users",
              "/api/users?ver",
              "POST /version",
              "/v/users/1"
            ],
            "a": 0,
            "explain": "Prefix /v1/ memisahkan versi secara eksplisit."
          },
          {
            "type": "fill",
            "q": "Deprecation diberitahukan lewat header:",
            "code": "___: true",
            "accept": [
              "deprecation"
            ],
            "explain": "Header Deprecation menandai endpoint usang."
          },
          {
            "type": "mc",
            "q": "Perubahan yang WAJIB menaikkan major version:",
            "options": [
              "Menambah field opsional",
              "Menghapus/mengubah arti field yang sudah ada",
              "Memperbaiki typo dokumentasi",
              "Menambah query param opsional"
            ],
            "a": 1,
            "explain": "Breaking change → versi baru agar client lama tak rusak."
          },
          {
            "type": "mc",
            "q": "Sunset header memberi tahu:",
            "options": [
              "Kapan endpoint akan dimatikan",
              "Warna tema",
              "Waktu server",
              "Jumlah user"
            ],
            "a": 0,
            "explain": "Sunset: <tanggal> — tenggat migrasi bagi client."
          },
          {
            "type": "arrange",
            "q": "Susun strategi evolusi API yang aman:",
            "blocks": [
              "Rilis /v2 paralel",
              "Umumkan deprecation",
              "Beri masa migrasi",
              "Matikan /v1"
            ],
            "explain": "Versi baru dulu, migrasi, baru pensiunkan yang lama."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #6: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #7: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #8: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #9: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #10: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          }
        ]
      },
      {
        "id": "rest-23",
        "level": "Advance",
        "title": "REST Lesson 23",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #11: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #12: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #13: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #14: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #15: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #16: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #17: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #18: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #19: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #20: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          }
        ]
      },
      {
        "id": "rest-24",
        "level": "Advance",
        "title": "REST Lesson 24",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #21: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #22: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #23: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #24: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #25: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #26: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #27: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #28: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #29: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #30: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          }
        ]
      },
      {
        "id": "rest-25",
        "level": "Advance",
        "title": "REST Lesson 25",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #31: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #32: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #33: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #34: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #35: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #36: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #37: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #38: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #39: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #40: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          }
        ]
      },
      {
        "id": "rest-26",
        "level": "Advance",
        "title": "REST Lesson 26",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #41: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #42: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #43: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #44: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #45: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #46: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #47: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #48: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #49: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #50: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          }
        ]
      },
      {
        "id": "rest-27",
        "level": "Advance",
        "title": "REST Lesson 27",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #51: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #52: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #53: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #54: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #55: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #56: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #57: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #58: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #59: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #60: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          }
        ]
      },
      {
        "id": "rest-28",
        "level": "Advance",
        "title": "REST Lesson 28",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #61: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #62: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #63: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #64: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #65: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #66: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #67: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #68: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #69: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #70: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          }
        ]
      },
      {
        "id": "rest-29",
        "level": "Advance",
        "title": "REST Lesson 29",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #71: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #72: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #73: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #74: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #75: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #76: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #77: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #78: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #79: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #80: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          }
        ]
      },
      {
        "id": "rest-30",
        "level": "Advance",
        "title": "REST Lesson 30",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #81: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #82: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #83: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #84: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #85: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #86: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #87: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #88: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #89: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #90: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          }
        ]
      },
      {
        "id": "rest-31",
        "level": "Advance",
        "title": "REST Lesson 31",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #91: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #92: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #93: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #94: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          },
          {
            "type": "mc",
            "q": "Arsitektur REST API Advance #95: Tingkat tertinggi Richardson Maturity Model (Level 3) mewajibkan:",
            "options": [
              "HATEOAS (Hypermedia As The Engine Of Application State) navigasi link di response",
              "Penggunaan WebSocket",
              "Penggunaan GraphQL",
              "Database NoSQL"
            ],
            "a": 0,
            "explain": "Level 3 menyertakan hypermedia links untuk navigasi dinamis klien."
          }
        ]
      }
    ]
  }
];

export { CONTENT_TS };
