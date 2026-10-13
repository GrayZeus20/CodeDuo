/* CodeDuo — blok konten: SQL · Database · API.
 * 3 topik (sql, db, api) × 31 pelajaran (10 Dasar, 10 Menengah, 11 Advance). Total 915 soal (305 per topik).
 * Engine di content.js (barrel) & app.js. Format tipe soal: mc | fill | code | preview | arrange.
 * Dual-mode: browser pakai global CONTENT_SQL; Node pakai module.exports.
 */
'use strict';

const CONTENT_SQL = [
  {
    "id": "sql",
    "name": "SQL",
    "icon": "🗄️",
    "color": "#336791",
    "desc": "Bahasa query database",
    "lessons": [
      {
        "id": "sql-1",
        "level": "Dasar",
        "title": "SELECT",
        "exercises": [
          {
            "type": "fill",
            "q": "Ambil semua kolom dari tabel users:",
            "code": "SELECT ___ FROM users;",
            "accept": [
              "*"
            ],
            "explain": "Asterisk = semua kolom."
          },
          {
            "type": "mc",
            "q": "SELECT * FROM products artinya:",
            "options": [
              "Ambil semua kolom semua baris products",
              "Ambil semua tabel",
              "Hapus data products",
              "Hitung jumlah products"
            ],
            "a": 0,
            "explain": "* = kolom, tanpa WHERE = semua baris."
          },
          {
            "type": "fill",
            "q": "Ambil hanya kolom name dan email:",
            "code": "SELECT name, email ___ users;",
            "accept": [
              "from"
            ],
            "explain": "FROM menentukan sumber tabel."
          },
          {
            "type": "arrange",
            "q": "Susun query SELECT sederhana:",
            "blocks": [
              "SELECT name",
              "FROM users"
            ],
            "explain": "SELECT dulu kolomnya, baru FROM tabelnya."
          },
          {
            "type": "mc",
            "q": "Mengganti nama kolom pada hasil (alias) memakai:",
            "options": [
              "AS",
              "NAME",
              "RENAME",
              "LABEL"
            ],
            "a": 0,
            "explain": "SELECT name AS nama FROM users;"
          },
          {
            "type": "mc",
            "q": "Perintah SQL untuk mengambil data dari tabel:",
            "options": [
              "SELECT",
              "GET",
              "FETCH",
              "PULL"
            ],
            "a": 0,
            "explain": "SELECT adalah perintah dasar DQL untuk mengambil data."
          },
          {
            "type": "fill",
            "q": "Ambil semua kolom dari tabel users:\nSELECT * ___ users;",
            "code": "SELECT * ___ users;",
            "accept": [
              "FROM",
              "from"
            ],
            "explain": "FROM menentukan tabel sumber data."
          },
          {
            "type": "arrange",
            "q": "Susun query ambil semua data produk:",
            "blocks": [
              "SELECT *",
              "FROM produk;"
            ],
            "explain": "SELECT * FROM produk;."
          },
          {
            "type": "mc",
            "q": "Simbol bintang (*) pada klausa SELECT * melambangkan:",
            "options": [
              "Semua kolom pada tabel",
              "Hanya kolom pertama",
              "Semua baris",
              "Tabel kosong"
            ],
            "a": 0,
            "explain": "* mewakili seluruh kolom yang ada pada tabel."
          },
          {
            "type": "fill",
            "q": "Filter baris dengan kondisi nilai:\nSELECT * FROM user ___ umur > 18;",
            "code": "SELECT * FROM user ___ umur > 18;",
            "accept": [
              "WHERE",
              "where"
            ],
            "explain": "WHERE menyaring baris berdasarkan kondisi."
          }
        ]
      },
      {
        "id": "sql-2",
        "level": "Dasar",
        "title": "WHERE & ORDER BY",
        "exercises": [
          {
            "type": "fill",
            "q": "Ambil user dengan umur > 18:",
            "code": "SELECT * FROM users ___ age > 18;",
            "accept": [
              "where"
            ],
            "explain": "WHERE = filter baris."
          },
          {
            "type": "mc",
            "q": "Urutkan hasil berdasarkan nama A→Z:",
            "options": [
              "ORDER BY name DESC",
              "ORDER BY name ASC",
              "SORT name",
              "WHERE name"
            ],
            "a": 1,
            "explain": "ASC = menaik (A→Z), DESC = menurun (Z→A)."
          },
          {
            "type": "fill",
            "q": "Ambil 5 produk termurah:",
            "code": "SELECT * FROM products ORDER BY price ___ LIMIT 5;",
            "accept": [
              "asc"
            ],
            "explain": "Urut price ASC (termurah dulu) lalu batasi."
          },
          {
            "type": "arrange",
            "q": "Susun query: nama user dewasa, urut nama:",
            "blocks": [
              "SELECT name",
              "FROM users",
              "WHERE age >= 18",
              "ORDER BY name"
            ],
            "explain": "WHERE memfilter dulu, ORDER BY mengurutkan hasil."
          },
          {
            "type": "mc",
            "q": "WHERE vs HAVING:",
            "options": [
              "Sama saja",
              "WHERE filter sebelum agregasi, HAVING setelah GROUP BY",
              "WHERE hanya untuk teks",
              "HAVING lebih cepat selalu"
            ],
            "a": 1,
            "explain": "HAVING menyaring hasil agregat (COUNT, SUM, dst.)."
          },
          {
            "type": "mc",
            "q": "Klausa SQL untuk mengurutkan hasil query:",
            "options": [
              "ORDER BY",
              "SORT BY",
              "GROUP BY",
              "ARRANGE BY"
            ],
            "a": 0,
            "explain": "ORDER BY mengurutkan baris secara ascending atau descending."
          },
          {
            "type": "fill",
            "q": "Urutkan hasil dari nilai terbesar ke terkecil:\nORDER BY harga ___;",
            "code": "ORDER BY harga ___;",
            "accept": [
              "DESC",
              "desc"
            ],
            "explain": "DESC (Descending) mengurutkan menurun."
          },
          {
            "type": "arrange",
            "q": "Susun query filter dan limit hasil:",
            "blocks": [
              "SELECT nama, harga",
              "FROM produk",
              "WHERE stok > 0",
              "LIMIT 5;"
            ],
            "explain": "SELECT ... FROM ... WHERE ... LIMIT."
          },
          {
            "type": "mc",
            "q": "Klausa untuk membatasi jumlah baris yang dikembalikan:",
            "options": [
              "LIMIT",
              "TOP",
              "RESTRICT",
              "MAX"
            ],
            "a": 0,
            "explain": "LIMIT membatasi jumlah record output pada PostgreSQL/MySQL/SQLite."
          },
          {
            "type": "fill",
            "q": "Batasi output hanya 10 baris teratas:\n___ 10;",
            "code": "___ 10;",
            "accept": [
              "LIMIT",
              "limit"
            ],
            "explain": "LIMIT 10."
          }
        ]
      },
      {
        "id": "sql-3",
        "level": "Dasar",
        "title": "SQL Lesson 3",
        "exercises": [
          {
            "type": "mc",
            "q": "Dasar SQL [Kondisi WHERE] #1:",
            "options": [
              "Operator perbandingan =, !=, >, <, >=, <= pada klausa WHERE",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Operator perbandingan =, !=, >, <, >=, <= pada klausa WHERE."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Kondisi WHERE] #2:",
            "options": [
              "Operator perbandingan =, !=, >, <, >=, <= pada klausa WHERE",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Operator perbandingan =, !=, >, <, >=, <= pada klausa WHERE."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Kondisi WHERE] #3:",
            "options": [
              "Operator perbandingan =, !=, >, <, >=, <= pada klausa WHERE",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Operator perbandingan =, !=, >, <, >=, <= pada klausa WHERE."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Kondisi WHERE] #4:",
            "options": [
              "Operator perbandingan =, !=, >, <, >=, <= pada klausa WHERE",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Operator perbandingan =, !=, >, <, >=, <= pada klausa WHERE."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Kondisi WHERE] #5:",
            "options": [
              "Operator perbandingan =, !=, >, <, >=, <= pada klausa WHERE",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Operator perbandingan =, !=, >, <, >=, <= pada klausa WHERE."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Kondisi WHERE] #6:",
            "options": [
              "Operator perbandingan =, !=, >, <, >=, <= pada klausa WHERE",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Operator perbandingan =, !=, >, <, >=, <= pada klausa WHERE."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Kondisi WHERE] #7:",
            "options": [
              "Operator perbandingan =, !=, >, <, >=, <= pada klausa WHERE",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Operator perbandingan =, !=, >, <, >=, <= pada klausa WHERE."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Kondisi WHERE] #8:",
            "options": [
              "Operator perbandingan =, !=, >, <, >=, <= pada klausa WHERE",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Operator perbandingan =, !=, >, <, >=, <= pada klausa WHERE."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Kondisi WHERE] #9:",
            "options": [
              "Operator perbandingan =, !=, >, <, >=, <= pada klausa WHERE",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Operator perbandingan =, !=, >, <, >=, <= pada klausa WHERE."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Kondisi WHERE] #10:",
            "options": [
              "Operator perbandingan =, !=, >, <, >=, <= pada klausa WHERE",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Operator perbandingan =, !=, >, <, >=, <= pada klausa WHERE."
          }
        ]
      },
      {
        "id": "sql-4",
        "level": "Dasar",
        "title": "SQL Lesson 4",
        "exercises": [
          {
            "type": "mc",
            "q": "Dasar SQL [Logika AND & OR] #1:",
            "options": [
              "Menggabungkan beberapa kriteria filter data sekaligus",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Menggabungkan beberapa kriteria filter data sekaligus."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Logika AND & OR] #2:",
            "options": [
              "Menggabungkan beberapa kriteria filter data sekaligus",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Menggabungkan beberapa kriteria filter data sekaligus."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Logika AND & OR] #3:",
            "options": [
              "Menggabungkan beberapa kriteria filter data sekaligus",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Menggabungkan beberapa kriteria filter data sekaligus."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Logika AND & OR] #4:",
            "options": [
              "Menggabungkan beberapa kriteria filter data sekaligus",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Menggabungkan beberapa kriteria filter data sekaligus."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Logika AND & OR] #5:",
            "options": [
              "Menggabungkan beberapa kriteria filter data sekaligus",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Menggabungkan beberapa kriteria filter data sekaligus."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Logika AND & OR] #6:",
            "options": [
              "Menggabungkan beberapa kriteria filter data sekaligus",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Menggabungkan beberapa kriteria filter data sekaligus."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Logika AND & OR] #7:",
            "options": [
              "Menggabungkan beberapa kriteria filter data sekaligus",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Menggabungkan beberapa kriteria filter data sekaligus."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Logika AND & OR] #8:",
            "options": [
              "Menggabungkan beberapa kriteria filter data sekaligus",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Menggabungkan beberapa kriteria filter data sekaligus."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Logika AND & OR] #9:",
            "options": [
              "Menggabungkan beberapa kriteria filter data sekaligus",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Menggabungkan beberapa kriteria filter data sekaligus."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Logika AND & OR] #10:",
            "options": [
              "Menggabungkan beberapa kriteria filter data sekaligus",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Menggabungkan beberapa kriteria filter data sekaligus."
          }
        ]
      },
      {
        "id": "sql-5",
        "level": "Dasar",
        "title": "SQL Lesson 5",
        "exercises": [
          {
            "type": "mc",
            "q": "Dasar SQL [Operator IN] #1:",
            "options": [
              "Memeriksa apakah nilai kolom ada di dalam daftar kumpulan nilai",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Memeriksa apakah nilai kolom ada di dalam daftar kumpulan nilai."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Operator IN] #2:",
            "options": [
              "Memeriksa apakah nilai kolom ada di dalam daftar kumpulan nilai",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Memeriksa apakah nilai kolom ada di dalam daftar kumpulan nilai."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Operator IN] #3:",
            "options": [
              "Memeriksa apakah nilai kolom ada di dalam daftar kumpulan nilai",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Memeriksa apakah nilai kolom ada di dalam daftar kumpulan nilai."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Operator IN] #4:",
            "options": [
              "Memeriksa apakah nilai kolom ada di dalam daftar kumpulan nilai",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Memeriksa apakah nilai kolom ada di dalam daftar kumpulan nilai."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Operator IN] #5:",
            "options": [
              "Memeriksa apakah nilai kolom ada di dalam daftar kumpulan nilai",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Memeriksa apakah nilai kolom ada di dalam daftar kumpulan nilai."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Operator IN] #6:",
            "options": [
              "Memeriksa apakah nilai kolom ada di dalam daftar kumpulan nilai",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Memeriksa apakah nilai kolom ada di dalam daftar kumpulan nilai."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Operator IN] #7:",
            "options": [
              "Memeriksa apakah nilai kolom ada di dalam daftar kumpulan nilai",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Memeriksa apakah nilai kolom ada di dalam daftar kumpulan nilai."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Operator IN] #8:",
            "options": [
              "Memeriksa apakah nilai kolom ada di dalam daftar kumpulan nilai",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Memeriksa apakah nilai kolom ada di dalam daftar kumpulan nilai."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Operator IN] #9:",
            "options": [
              "Memeriksa apakah nilai kolom ada di dalam daftar kumpulan nilai",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Memeriksa apakah nilai kolom ada di dalam daftar kumpulan nilai."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Operator IN] #10:",
            "options": [
              "Memeriksa apakah nilai kolom ada di dalam daftar kumpulan nilai",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Memeriksa apakah nilai kolom ada di dalam daftar kumpulan nilai."
          }
        ]
      },
      {
        "id": "sql-6",
        "level": "Dasar",
        "title": "SQL Lesson 6",
        "exercises": [
          {
            "type": "mc",
            "q": "Dasar SQL [Pencarian LIKE] #1:",
            "options": [
              "Pencarian pola teks dengan wildcard % dan _",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Pencarian pola teks dengan wildcard % dan _."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Pencarian LIKE] #2:",
            "options": [
              "Pencarian pola teks dengan wildcard % dan _",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Pencarian pola teks dengan wildcard % dan _."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Pencarian LIKE] #3:",
            "options": [
              "Pencarian pola teks dengan wildcard % dan _",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Pencarian pola teks dengan wildcard % dan _."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Pencarian LIKE] #4:",
            "options": [
              "Pencarian pola teks dengan wildcard % dan _",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Pencarian pola teks dengan wildcard % dan _."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Pencarian LIKE] #5:",
            "options": [
              "Pencarian pola teks dengan wildcard % dan _",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Pencarian pola teks dengan wildcard % dan _."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Pencarian LIKE] #6:",
            "options": [
              "Pencarian pola teks dengan wildcard % dan _",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Pencarian pola teks dengan wildcard % dan _."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Pencarian LIKE] #7:",
            "options": [
              "Pencarian pola teks dengan wildcard % dan _",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Pencarian pola teks dengan wildcard % dan _."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Pencarian LIKE] #8:",
            "options": [
              "Pencarian pola teks dengan wildcard % dan _",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Pencarian pola teks dengan wildcard % dan _."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Pencarian LIKE] #9:",
            "options": [
              "Pencarian pola teks dengan wildcard % dan _",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Pencarian pola teks dengan wildcard % dan _."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Pencarian LIKE] #10:",
            "options": [
              "Pencarian pola teks dengan wildcard % dan _",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Pencarian pola teks dengan wildcard % dan _."
          }
        ]
      },
      {
        "id": "sql-7",
        "level": "Dasar",
        "title": "SQL Lesson 7",
        "exercises": [
          {
            "type": "mc",
            "q": "Dasar SQL [Fungsi Agregasi COUNT] #1:",
            "options": [
              "Menghitung jumlah baris data yang memenuhi kondisi",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Menghitung jumlah baris data yang memenuhi kondisi."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Fungsi Agregasi COUNT] #2:",
            "options": [
              "Menghitung jumlah baris data yang memenuhi kondisi",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Menghitung jumlah baris data yang memenuhi kondisi."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Fungsi Agregasi COUNT] #3:",
            "options": [
              "Menghitung jumlah baris data yang memenuhi kondisi",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Menghitung jumlah baris data yang memenuhi kondisi."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Fungsi Agregasi COUNT] #4:",
            "options": [
              "Menghitung jumlah baris data yang memenuhi kondisi",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Menghitung jumlah baris data yang memenuhi kondisi."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Fungsi Agregasi COUNT] #5:",
            "options": [
              "Menghitung jumlah baris data yang memenuhi kondisi",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Menghitung jumlah baris data yang memenuhi kondisi."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Fungsi Agregasi COUNT] #6:",
            "options": [
              "Menghitung jumlah baris data yang memenuhi kondisi",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Menghitung jumlah baris data yang memenuhi kondisi."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Fungsi Agregasi COUNT] #7:",
            "options": [
              "Menghitung jumlah baris data yang memenuhi kondisi",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Menghitung jumlah baris data yang memenuhi kondisi."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Fungsi Agregasi COUNT] #8:",
            "options": [
              "Menghitung jumlah baris data yang memenuhi kondisi",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Menghitung jumlah baris data yang memenuhi kondisi."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Fungsi Agregasi COUNT] #9:",
            "options": [
              "Menghitung jumlah baris data yang memenuhi kondisi",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Menghitung jumlah baris data yang memenuhi kondisi."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Fungsi Agregasi COUNT] #10:",
            "options": [
              "Menghitung jumlah baris data yang memenuhi kondisi",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Menghitung jumlah baris data yang memenuhi kondisi."
          }
        ]
      },
      {
        "id": "sql-8",
        "level": "Dasar",
        "title": "SQL Lesson 8",
        "exercises": [
          {
            "type": "mc",
            "q": "Dasar SQL [Fungsi Agregasi SUM & AVG] #1:",
            "options": [
              "Menghitung total penjumlahan dan rata-rata kolom numerik",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Menghitung total penjumlahan dan rata-rata kolom numerik."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Fungsi Agregasi SUM & AVG] #2:",
            "options": [
              "Menghitung total penjumlahan dan rata-rata kolom numerik",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Menghitung total penjumlahan dan rata-rata kolom numerik."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Fungsi Agregasi SUM & AVG] #3:",
            "options": [
              "Menghitung total penjumlahan dan rata-rata kolom numerik",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Menghitung total penjumlahan dan rata-rata kolom numerik."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Fungsi Agregasi SUM & AVG] #4:",
            "options": [
              "Menghitung total penjumlahan dan rata-rata kolom numerik",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Menghitung total penjumlahan dan rata-rata kolom numerik."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Fungsi Agregasi SUM & AVG] #5:",
            "options": [
              "Menghitung total penjumlahan dan rata-rata kolom numerik",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Menghitung total penjumlahan dan rata-rata kolom numerik."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Fungsi Agregasi SUM & AVG] #6:",
            "options": [
              "Menghitung total penjumlahan dan rata-rata kolom numerik",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Menghitung total penjumlahan dan rata-rata kolom numerik."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Fungsi Agregasi SUM & AVG] #7:",
            "options": [
              "Menghitung total penjumlahan dan rata-rata kolom numerik",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Menghitung total penjumlahan dan rata-rata kolom numerik."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Fungsi Agregasi SUM & AVG] #8:",
            "options": [
              "Menghitung total penjumlahan dan rata-rata kolom numerik",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Menghitung total penjumlahan dan rata-rata kolom numerik."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Fungsi Agregasi SUM & AVG] #9:",
            "options": [
              "Menghitung total penjumlahan dan rata-rata kolom numerik",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Menghitung total penjumlahan dan rata-rata kolom numerik."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Fungsi Agregasi SUM & AVG] #10:",
            "options": [
              "Menghitung total penjumlahan dan rata-rata kolom numerik",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Menghitung total penjumlahan dan rata-rata kolom numerik."
          }
        ]
      },
      {
        "id": "sql-9",
        "level": "Dasar",
        "title": "SQL Lesson 9",
        "exercises": [
          {
            "type": "mc",
            "q": "Dasar SQL [Fungsi MIN & MAX] #1:",
            "options": [
              "Mencari nilai terendah dan tertinggi pada sebuah kolom",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Mencari nilai terendah dan tertinggi pada sebuah kolom."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Fungsi MIN & MAX] #2:",
            "options": [
              "Mencari nilai terendah dan tertinggi pada sebuah kolom",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Mencari nilai terendah dan tertinggi pada sebuah kolom."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Fungsi MIN & MAX] #3:",
            "options": [
              "Mencari nilai terendah dan tertinggi pada sebuah kolom",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Mencari nilai terendah dan tertinggi pada sebuah kolom."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Fungsi MIN & MAX] #4:",
            "options": [
              "Mencari nilai terendah dan tertinggi pada sebuah kolom",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Mencari nilai terendah dan tertinggi pada sebuah kolom."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Fungsi MIN & MAX] #5:",
            "options": [
              "Mencari nilai terendah dan tertinggi pada sebuah kolom",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Mencari nilai terendah dan tertinggi pada sebuah kolom."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Fungsi MIN & MAX] #6:",
            "options": [
              "Mencari nilai terendah dan tertinggi pada sebuah kolom",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Mencari nilai terendah dan tertinggi pada sebuah kolom."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Fungsi MIN & MAX] #7:",
            "options": [
              "Mencari nilai terendah dan tertinggi pada sebuah kolom",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Mencari nilai terendah dan tertinggi pada sebuah kolom."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Fungsi MIN & MAX] #8:",
            "options": [
              "Mencari nilai terendah dan tertinggi pada sebuah kolom",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Mencari nilai terendah dan tertinggi pada sebuah kolom."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Fungsi MIN & MAX] #9:",
            "options": [
              "Mencari nilai terendah dan tertinggi pada sebuah kolom",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Mencari nilai terendah dan tertinggi pada sebuah kolom."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Fungsi MIN & MAX] #10:",
            "options": [
              "Mencari nilai terendah dan tertinggi pada sebuah kolom",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Mencari nilai terendah dan tertinggi pada sebuah kolom."
          }
        ]
      },
      {
        "id": "sql-10",
        "level": "Dasar",
        "title": "SQL Lesson 10",
        "exercises": [
          {
            "type": "mc",
            "q": "Dasar SQL [Nilai NULL] #1:",
            "options": [
              "Memeriksa kolom kosong menggunakan IS NULL atau IS NOT NULL",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Memeriksa kolom kosong menggunakan IS NULL atau IS NOT NULL."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Nilai NULL] #2:",
            "options": [
              "Memeriksa kolom kosong menggunakan IS NULL atau IS NOT NULL",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Memeriksa kolom kosong menggunakan IS NULL atau IS NOT NULL."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Nilai NULL] #3:",
            "options": [
              "Memeriksa kolom kosong menggunakan IS NULL atau IS NOT NULL",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Memeriksa kolom kosong menggunakan IS NULL atau IS NOT NULL."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Nilai NULL] #4:",
            "options": [
              "Memeriksa kolom kosong menggunakan IS NULL atau IS NOT NULL",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Memeriksa kolom kosong menggunakan IS NULL atau IS NOT NULL."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Nilai NULL] #5:",
            "options": [
              "Memeriksa kolom kosong menggunakan IS NULL atau IS NOT NULL",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Memeriksa kolom kosong menggunakan IS NULL atau IS NOT NULL."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Nilai NULL] #6:",
            "options": [
              "Memeriksa kolom kosong menggunakan IS NULL atau IS NOT NULL",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Memeriksa kolom kosong menggunakan IS NULL atau IS NOT NULL."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Nilai NULL] #7:",
            "options": [
              "Memeriksa kolom kosong menggunakan IS NULL atau IS NOT NULL",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Memeriksa kolom kosong menggunakan IS NULL atau IS NOT NULL."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Nilai NULL] #8:",
            "options": [
              "Memeriksa kolom kosong menggunakan IS NULL atau IS NOT NULL",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Memeriksa kolom kosong menggunakan IS NULL atau IS NOT NULL."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Nilai NULL] #9:",
            "options": [
              "Memeriksa kolom kosong menggunakan IS NULL atau IS NOT NULL",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Memeriksa kolom kosong menggunakan IS NULL atau IS NOT NULL."
          },
          {
            "type": "mc",
            "q": "Dasar SQL [Nilai NULL] #10:",
            "options": [
              "Memeriksa kolom kosong menggunakan IS NULL atau IS NOT NULL",
              "Membuat layout CSS",
              "Format JSON API",
              "Loop JavaScript"
            ],
            "a": 0,
            "explain": "Memeriksa kolom kosong menggunakan IS NULL atau IS NOT NULL."
          }
        ]
      },
      {
        "id": "sql-11",
        "level": "Menengah",
        "title": "JOIN",
        "exercises": [
          {
            "type": "mc",
            "q": "JOIN dipakai untuk:",
            "options": [
              "Menggabungkan baris dari 2+ tabel lewat relasi",
              "Menghapus tabel",
              "Membuat tabel baru kosong",
              "Mengurutkan data"
            ],
            "a": 0,
            "explain": "Contoh: users ⋈ orders ON users.id = orders.user_id."
          },
          {
            "type": "fill",
            "q": "Lengkapi klausa relasi JOIN:",
            "code": "SELECT * FROM users u\nJOIN orders o ___ u.id = o.user_id;",
            "accept": [
              "on"
            ],
            "explain": "ON = kondisi kecocokan antar tabel."
          },
          {
            "type": "mc",
            "q": "INNER JOIN mengembalikan:",
            "options": [
              "Semua baris kedua tabel",
              "Hanya baris yang cocok di kedua tabel",
              "Baris kiri saja",
              "Baris kanan saja"
            ],
            "a": 1,
            "explain": "INNER = irisan (harus ada pasangan di kedua sisi)."
          },
          {
            "type": "fill",
            "q": "JOIN yang tetap menampilkan semua baris tabel kiri disebut:",
            "code": "SELECT * FROM users u ___ JOIN orders o ON u.id = o.user_id;",
            "accept": [
              "left"
            ],
            "explain": "LEFT JOIN = semua kiri + yang cocok dari kanan."
          },
          {
            "type": "mc",
            "q": "Risiko JOIN tanpa ON yang benar:",
            "options": [
              "Data lebih akurat",
              "Kartesian (kombinasi besar tak diinginkan)",
              "Query gagal selalu",
              "Tabel terhapus"
            ],
            "a": 1,
            "explain": "Tanpa ON, tiap baris kiri × tiap baris kanan → ledakan baris."
          },
          {
            "type": "mc",
            "q": "Jenis JOIN yang hanya mengembalikan baris yang memiliki kecocokan di kedua tabel:",
            "options": [
              "INNER JOIN",
              "LEFT JOIN",
              "RIGHT JOIN",
              "CROSS JOIN"
            ],
            "a": 0,
            "explain": "INNER JOIN menghasilkan irisan data yang cocok di kedua sisi."
          },
          {
            "type": "fill",
            "q": "Gabungkan tabel pesanan dan pembeli:\nSELECT * FROM pesanan\nINNER JOIN pembeli ON pesanan.user_id = pembeli.___;",
            "code": "SELECT * FROM pesanan\nINNER JOIN pembeli ON pesanan.user_id = pembeli.___;",
            "accept": [
              "id"
            ],
            "explain": "Kunci relasi ON pesanan.user_id = pembeli.id."
          },
          {
            "type": "arrange",
            "q": "Susun query INNER JOIN standar:",
            "blocks": [
              "SELECT p.id, u.nama",
              "FROM pesanan p",
              "INNER JOIN users u ON p.user_id = u.id;"
            ],
            "explain": "Struktur join 2 tabel."
          },
          {
            "type": "mc",
            "q": "Karakteristik LEFT JOIN:",
            "options": [
              "Mengembalikan semua baris dari tabel kiri, dan baris yang cocok dari tabel kanan (NULL jika tidak ada)",
              "Hanya baris yang cocok",
              "Semua baris tabel kanan",
              "Menghapus data kosong"
            ],
            "a": 0,
            "explain": "LEFT JOIN mempertahankan semua rekaman tabel kiri."
          },
          {
            "type": "fill",
            "q": "Gunakan klausa LEFT JOIN:\nSELECT * FROM users\n___ JOIN transaksi ON users.id = transaksi.user_id;",
            "code": "SELECT * FROM users\n___ JOIN transaksi ON users.id = transaksi.user_id;",
            "accept": [
              "LEFT",
              "left"
            ],
            "explain": "LEFT JOIN."
          }
        ]
      },
      {
        "id": "sql-12",
        "level": "Menengah",
        "title": "Agregat & GROUP BY",
        "exercises": [
          {
            "type": "mc",
            "q": "COUNT(*) menghitung:",
            "options": [
              "Jumlah kolom",
              "Jumlah baris hasil query",
              "Jumlah tabel",
              "Ukuran database"
            ],
            "a": 1,
            "explain": "COUNT(*) = jumlah baris."
          },
          {
            "type": "fill",
            "q": "Jumlahkan semua price:",
            "code": "SELECT ___(price) FROM products;",
            "accept": [
              "sum"
            ],
            "explain": "SUM = total nilai kolom numerik."
          },
          {
            "type": "mc",
            "q": "Rata-rata umur pengguna memakai:",
            "options": [
              "MID(age)",
              "AVG(age)",
              "MEAN(age)",
              "AVERAGE(age)"
            ],
            "a": 1,
            "explain": "AVG = nilai rata-rata."
          },
          {
            "type": "arrange",
            "q": "Susun query: jumlah user per kota:",
            "blocks": [
              "SELECT city, COUNT(*)",
              "FROM users",
              "GROUP BY city"
            ],
            "explain": "GROUP BY mengelompokkan baris sebelum agregasi."
          },
          {
            "type": "fill",
            "q": "Kelompokkan penjualan per bulan:",
            "code": "SELECT ___, SUM(total) FROM sales GROUP BY month;",
            "accept": [
              "month"
            ],
            "explain": "Kolom yang di-SELECT di luar agregat harus ada di GROUP BY."
          },
          {
            "type": "mc",
            "q": "Klausa GROUP BY digunakan untuk:",
            "options": [
              "Mengelompokkan baris data yang memiliki nilai kolom yang sama ke ringkasan agregat",
              "Mengurutkan alfabet",
              "Menghapus duplikat saja",
              "Membuat tabel baru"
            ],
            "a": 0,
            "explain": "GROUP BY mengelompokkan baris untuk fungsi agregasi."
          },
          {
            "type": "fill",
            "q": "Kelompokkan penjualan berdasarkan kategori:\nGROUP ___ kategori;",
            "code": "GROUP ___ kategori;",
            "accept": [
              "BY",
              "by"
            ],
            "explain": "GROUP BY."
          },
          {
            "type": "arrange",
            "q": "Susun query GROUP BY dengan COUNT:",
            "blocks": [
              "SELECT kategori, COUNT(*)",
              "FROM barang",
              "GROUP BY kategori;"
            ],
            "explain": "SELECT col, COUNT(*) FROM ... GROUP BY col."
          },
          {
            "type": "mc",
            "q": "Perbedaan klausa HAVING dibanding WHERE:",
            "options": [
              "HAVING menyaring hasil setelah agregasi (GROUP BY), sedangkan WHERE menyaring baris sebelum agregasi",
              "Sama saja",
              "HAVING hanya untuk tanggal",
              "WHERE lebih lambat"
            ],
            "a": 0,
            "explain": "HAVING memfilter data berdasarkan fungsi agregat."
          },
          {
            "type": "fill",
            "q": "Filter grup yang memiliki jumlah > 5:\n___ COUNT(*) > 5;",
            "code": "___ COUNT(*) > 5;",
            "accept": [
              "HAVING",
              "having"
            ],
            "explain": "HAVING."
          }
        ]
      },
      {
        "id": "sql-13",
        "level": "Menengah",
        "title": "SQL Lesson 13",
        "exercises": [
          {
            "type": "mc",
            "q": "SQL Menengah [Subqueries] #1:",
            "options": [
              "Query bersarang di dalam klausa WHERE, FROM, atau SELECT",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Query bersarang di dalam klausa WHERE, FROM, atau SELECT."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Subqueries] #2:",
            "options": [
              "Query bersarang di dalam klausa WHERE, FROM, atau SELECT",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Query bersarang di dalam klausa WHERE, FROM, atau SELECT."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Subqueries] #3:",
            "options": [
              "Query bersarang di dalam klausa WHERE, FROM, atau SELECT",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Query bersarang di dalam klausa WHERE, FROM, atau SELECT."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Subqueries] #4:",
            "options": [
              "Query bersarang di dalam klausa WHERE, FROM, atau SELECT",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Query bersarang di dalam klausa WHERE, FROM, atau SELECT."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Subqueries] #5:",
            "options": [
              "Query bersarang di dalam klausa WHERE, FROM, atau SELECT",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Query bersarang di dalam klausa WHERE, FROM, atau SELECT."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Subqueries] #6:",
            "options": [
              "Query bersarang di dalam klausa WHERE, FROM, atau SELECT",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Query bersarang di dalam klausa WHERE, FROM, atau SELECT."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Subqueries] #7:",
            "options": [
              "Query bersarang di dalam klausa WHERE, FROM, atau SELECT",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Query bersarang di dalam klausa WHERE, FROM, atau SELECT."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Subqueries] #8:",
            "options": [
              "Query bersarang di dalam klausa WHERE, FROM, atau SELECT",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Query bersarang di dalam klausa WHERE, FROM, atau SELECT."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Subqueries] #9:",
            "options": [
              "Query bersarang di dalam klausa WHERE, FROM, atau SELECT",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Query bersarang di dalam klausa WHERE, FROM, atau SELECT."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Subqueries] #10:",
            "options": [
              "Query bersarang di dalam klausa WHERE, FROM, atau SELECT",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Query bersarang di dalam klausa WHERE, FROM, atau SELECT."
          }
        ]
      },
      {
        "id": "sql-14",
        "level": "Menengah",
        "title": "SQL Lesson 14",
        "exercises": [
          {
            "type": "mc",
            "q": "SQL Menengah [Alias Tabel & Kolom] #1:",
            "options": [
              "Menggunakan AS untuk menamai ulang tabel atau kolom agar lebih singkat dan rapi",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Menggunakan AS untuk menamai ulang tabel atau kolom agar lebih singkat dan rapi."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Alias Tabel & Kolom] #2:",
            "options": [
              "Menggunakan AS untuk menamai ulang tabel atau kolom agar lebih singkat dan rapi",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Menggunakan AS untuk menamai ulang tabel atau kolom agar lebih singkat dan rapi."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Alias Tabel & Kolom] #3:",
            "options": [
              "Menggunakan AS untuk menamai ulang tabel atau kolom agar lebih singkat dan rapi",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Menggunakan AS untuk menamai ulang tabel atau kolom agar lebih singkat dan rapi."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Alias Tabel & Kolom] #4:",
            "options": [
              "Menggunakan AS untuk menamai ulang tabel atau kolom agar lebih singkat dan rapi",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Menggunakan AS untuk menamai ulang tabel atau kolom agar lebih singkat dan rapi."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Alias Tabel & Kolom] #5:",
            "options": [
              "Menggunakan AS untuk menamai ulang tabel atau kolom agar lebih singkat dan rapi",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Menggunakan AS untuk menamai ulang tabel atau kolom agar lebih singkat dan rapi."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Alias Tabel & Kolom] #6:",
            "options": [
              "Menggunakan AS untuk menamai ulang tabel atau kolom agar lebih singkat dan rapi",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Menggunakan AS untuk menamai ulang tabel atau kolom agar lebih singkat dan rapi."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Alias Tabel & Kolom] #7:",
            "options": [
              "Menggunakan AS untuk menamai ulang tabel atau kolom agar lebih singkat dan rapi",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Menggunakan AS untuk menamai ulang tabel atau kolom agar lebih singkat dan rapi."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Alias Tabel & Kolom] #8:",
            "options": [
              "Menggunakan AS untuk menamai ulang tabel atau kolom agar lebih singkat dan rapi",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Menggunakan AS untuk menamai ulang tabel atau kolom agar lebih singkat dan rapi."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Alias Tabel & Kolom] #9:",
            "options": [
              "Menggunakan AS untuk menamai ulang tabel atau kolom agar lebih singkat dan rapi",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Menggunakan AS untuk menamai ulang tabel atau kolom agar lebih singkat dan rapi."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Alias Tabel & Kolom] #10:",
            "options": [
              "Menggunakan AS untuk menamai ulang tabel atau kolom agar lebih singkat dan rapi",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Menggunakan AS untuk menamai ulang tabel atau kolom agar lebih singkat dan rapi."
          }
        ]
      },
      {
        "id": "sql-15",
        "level": "Menengah",
        "title": "SQL Lesson 15",
        "exercises": [
          {
            "type": "mc",
            "q": "SQL Menengah [Ekspresi CASE WHEN] #1:",
            "options": [
              "Percabangan logika kondisional if-else di dalam pernyataan SQL",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Percabangan logika kondisional if-else di dalam pernyataan SQL."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Ekspresi CASE WHEN] #2:",
            "options": [
              "Percabangan logika kondisional if-else di dalam pernyataan SQL",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Percabangan logika kondisional if-else di dalam pernyataan SQL."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Ekspresi CASE WHEN] #3:",
            "options": [
              "Percabangan logika kondisional if-else di dalam pernyataan SQL",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Percabangan logika kondisional if-else di dalam pernyataan SQL."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Ekspresi CASE WHEN] #4:",
            "options": [
              "Percabangan logika kondisional if-else di dalam pernyataan SQL",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Percabangan logika kondisional if-else di dalam pernyataan SQL."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Ekspresi CASE WHEN] #5:",
            "options": [
              "Percabangan logika kondisional if-else di dalam pernyataan SQL",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Percabangan logika kondisional if-else di dalam pernyataan SQL."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Ekspresi CASE WHEN] #6:",
            "options": [
              "Percabangan logika kondisional if-else di dalam pernyataan SQL",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Percabangan logika kondisional if-else di dalam pernyataan SQL."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Ekspresi CASE WHEN] #7:",
            "options": [
              "Percabangan logika kondisional if-else di dalam pernyataan SQL",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Percabangan logika kondisional if-else di dalam pernyataan SQL."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Ekspresi CASE WHEN] #8:",
            "options": [
              "Percabangan logika kondisional if-else di dalam pernyataan SQL",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Percabangan logika kondisional if-else di dalam pernyataan SQL."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Ekspresi CASE WHEN] #9:",
            "options": [
              "Percabangan logika kondisional if-else di dalam pernyataan SQL",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Percabangan logika kondisional if-else di dalam pernyataan SQL."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Ekspresi CASE WHEN] #10:",
            "options": [
              "Percabangan logika kondisional if-else di dalam pernyataan SQL",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Percabangan logika kondisional if-else di dalam pernyataan SQL."
          }
        ]
      },
      {
        "id": "sql-16",
        "level": "Menengah",
        "title": "SQL Lesson 16",
        "exercises": [
          {
            "type": "mc",
            "q": "SQL Menengah [Operator UNION vs UNION ALL] #1:",
            "options": [
              "Menggabungkan hasil dua query (UNION menghapus duplikat, UNION ALL mempertahankan semua)",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Menggabungkan hasil dua query (UNION menghapus duplikat, UNION ALL mempertahankan semua)."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Operator UNION vs UNION ALL] #2:",
            "options": [
              "Menggabungkan hasil dua query (UNION menghapus duplikat, UNION ALL mempertahankan semua)",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Menggabungkan hasil dua query (UNION menghapus duplikat, UNION ALL mempertahankan semua)."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Operator UNION vs UNION ALL] #3:",
            "options": [
              "Menggabungkan hasil dua query (UNION menghapus duplikat, UNION ALL mempertahankan semua)",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Menggabungkan hasil dua query (UNION menghapus duplikat, UNION ALL mempertahankan semua)."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Operator UNION vs UNION ALL] #4:",
            "options": [
              "Menggabungkan hasil dua query (UNION menghapus duplikat, UNION ALL mempertahankan semua)",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Menggabungkan hasil dua query (UNION menghapus duplikat, UNION ALL mempertahankan semua)."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Operator UNION vs UNION ALL] #5:",
            "options": [
              "Menggabungkan hasil dua query (UNION menghapus duplikat, UNION ALL mempertahankan semua)",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Menggabungkan hasil dua query (UNION menghapus duplikat, UNION ALL mempertahankan semua)."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Operator UNION vs UNION ALL] #6:",
            "options": [
              "Menggabungkan hasil dua query (UNION menghapus duplikat, UNION ALL mempertahankan semua)",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Menggabungkan hasil dua query (UNION menghapus duplikat, UNION ALL mempertahankan semua)."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Operator UNION vs UNION ALL] #7:",
            "options": [
              "Menggabungkan hasil dua query (UNION menghapus duplikat, UNION ALL mempertahankan semua)",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Menggabungkan hasil dua query (UNION menghapus duplikat, UNION ALL mempertahankan semua)."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Operator UNION vs UNION ALL] #8:",
            "options": [
              "Menggabungkan hasil dua query (UNION menghapus duplikat, UNION ALL mempertahankan semua)",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Menggabungkan hasil dua query (UNION menghapus duplikat, UNION ALL mempertahankan semua)."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Operator UNION vs UNION ALL] #9:",
            "options": [
              "Menggabungkan hasil dua query (UNION menghapus duplikat, UNION ALL mempertahankan semua)",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Menggabungkan hasil dua query (UNION menghapus duplikat, UNION ALL mempertahankan semua)."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Operator UNION vs UNION ALL] #10:",
            "options": [
              "Menggabungkan hasil dua query (UNION menghapus duplikat, UNION ALL mempertahankan semua)",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Menggabungkan hasil dua query (UNION menghapus duplikat, UNION ALL mempertahankan semua)."
          }
        ]
      },
      {
        "id": "sql-17",
        "level": "Menengah",
        "title": "SQL Lesson 17",
        "exercises": [
          {
            "type": "mc",
            "q": "SQL Menengah [Operasi String SQL] #1:",
            "options": [
              "Fungsi manipulasi teks seperti CONCAT, UPPER, LOWER, dan SUBSTRING",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Fungsi manipulasi teks seperti CONCAT, UPPER, LOWER, dan SUBSTRING."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Operasi String SQL] #2:",
            "options": [
              "Fungsi manipulasi teks seperti CONCAT, UPPER, LOWER, dan SUBSTRING",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Fungsi manipulasi teks seperti CONCAT, UPPER, LOWER, dan SUBSTRING."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Operasi String SQL] #3:",
            "options": [
              "Fungsi manipulasi teks seperti CONCAT, UPPER, LOWER, dan SUBSTRING",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Fungsi manipulasi teks seperti CONCAT, UPPER, LOWER, dan SUBSTRING."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Operasi String SQL] #4:",
            "options": [
              "Fungsi manipulasi teks seperti CONCAT, UPPER, LOWER, dan SUBSTRING",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Fungsi manipulasi teks seperti CONCAT, UPPER, LOWER, dan SUBSTRING."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Operasi String SQL] #5:",
            "options": [
              "Fungsi manipulasi teks seperti CONCAT, UPPER, LOWER, dan SUBSTRING",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Fungsi manipulasi teks seperti CONCAT, UPPER, LOWER, dan SUBSTRING."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Operasi String SQL] #6:",
            "options": [
              "Fungsi manipulasi teks seperti CONCAT, UPPER, LOWER, dan SUBSTRING",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Fungsi manipulasi teks seperti CONCAT, UPPER, LOWER, dan SUBSTRING."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Operasi String SQL] #7:",
            "options": [
              "Fungsi manipulasi teks seperti CONCAT, UPPER, LOWER, dan SUBSTRING",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Fungsi manipulasi teks seperti CONCAT, UPPER, LOWER, dan SUBSTRING."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Operasi String SQL] #8:",
            "options": [
              "Fungsi manipulasi teks seperti CONCAT, UPPER, LOWER, dan SUBSTRING",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Fungsi manipulasi teks seperti CONCAT, UPPER, LOWER, dan SUBSTRING."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Operasi String SQL] #9:",
            "options": [
              "Fungsi manipulasi teks seperti CONCAT, UPPER, LOWER, dan SUBSTRING",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Fungsi manipulasi teks seperti CONCAT, UPPER, LOWER, dan SUBSTRING."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Operasi String SQL] #10:",
            "options": [
              "Fungsi manipulasi teks seperti CONCAT, UPPER, LOWER, dan SUBSTRING",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Fungsi manipulasi teks seperti CONCAT, UPPER, LOWER, dan SUBSTRING."
          }
        ]
      },
      {
        "id": "sql-18",
        "level": "Menengah",
        "title": "SQL Lesson 18",
        "exercises": [
          {
            "type": "mc",
            "q": "SQL Menengah [Fungsi Tanggal & Waktu] #1:",
            "options": [
              "Operasi NOW(), DATE(), EXTRACT() dan perbandingan interval waktu",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Operasi NOW(), DATE(), EXTRACT() dan perbandingan interval waktu."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Fungsi Tanggal & Waktu] #2:",
            "options": [
              "Operasi NOW(), DATE(), EXTRACT() dan perbandingan interval waktu",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Operasi NOW(), DATE(), EXTRACT() dan perbandingan interval waktu."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Fungsi Tanggal & Waktu] #3:",
            "options": [
              "Operasi NOW(), DATE(), EXTRACT() dan perbandingan interval waktu",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Operasi NOW(), DATE(), EXTRACT() dan perbandingan interval waktu."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Fungsi Tanggal & Waktu] #4:",
            "options": [
              "Operasi NOW(), DATE(), EXTRACT() dan perbandingan interval waktu",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Operasi NOW(), DATE(), EXTRACT() dan perbandingan interval waktu."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Fungsi Tanggal & Waktu] #5:",
            "options": [
              "Operasi NOW(), DATE(), EXTRACT() dan perbandingan interval waktu",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Operasi NOW(), DATE(), EXTRACT() dan perbandingan interval waktu."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Fungsi Tanggal & Waktu] #6:",
            "options": [
              "Operasi NOW(), DATE(), EXTRACT() dan perbandingan interval waktu",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Operasi NOW(), DATE(), EXTRACT() dan perbandingan interval waktu."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Fungsi Tanggal & Waktu] #7:",
            "options": [
              "Operasi NOW(), DATE(), EXTRACT() dan perbandingan interval waktu",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Operasi NOW(), DATE(), EXTRACT() dan perbandingan interval waktu."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Fungsi Tanggal & Waktu] #8:",
            "options": [
              "Operasi NOW(), DATE(), EXTRACT() dan perbandingan interval waktu",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Operasi NOW(), DATE(), EXTRACT() dan perbandingan interval waktu."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Fungsi Tanggal & Waktu] #9:",
            "options": [
              "Operasi NOW(), DATE(), EXTRACT() dan perbandingan interval waktu",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Operasi NOW(), DATE(), EXTRACT() dan perbandingan interval waktu."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Fungsi Tanggal & Waktu] #10:",
            "options": [
              "Operasi NOW(), DATE(), EXTRACT() dan perbandingan interval waktu",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Operasi NOW(), DATE(), EXTRACT() dan perbandingan interval waktu."
          }
        ]
      },
      {
        "id": "sql-19",
        "level": "Menengah",
        "title": "SQL Lesson 19",
        "exercises": [
          {
            "type": "mc",
            "q": "SQL Menengah [Klausa DISTINCT] #1:",
            "options": [
              "Menghilangkan baris duplikat dari kolom yang dipilih",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Menghilangkan baris duplikat dari kolom yang dipilih."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Klausa DISTINCT] #2:",
            "options": [
              "Menghilangkan baris duplikat dari kolom yang dipilih",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Menghilangkan baris duplikat dari kolom yang dipilih."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Klausa DISTINCT] #3:",
            "options": [
              "Menghilangkan baris duplikat dari kolom yang dipilih",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Menghilangkan baris duplikat dari kolom yang dipilih."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Klausa DISTINCT] #4:",
            "options": [
              "Menghilangkan baris duplikat dari kolom yang dipilih",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Menghilangkan baris duplikat dari kolom yang dipilih."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Klausa DISTINCT] #5:",
            "options": [
              "Menghilangkan baris duplikat dari kolom yang dipilih",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Menghilangkan baris duplikat dari kolom yang dipilih."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Klausa DISTINCT] #6:",
            "options": [
              "Menghilangkan baris duplikat dari kolom yang dipilih",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Menghilangkan baris duplikat dari kolom yang dipilih."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Klausa DISTINCT] #7:",
            "options": [
              "Menghilangkan baris duplikat dari kolom yang dipilih",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Menghilangkan baris duplikat dari kolom yang dipilih."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Klausa DISTINCT] #8:",
            "options": [
              "Menghilangkan baris duplikat dari kolom yang dipilih",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Menghilangkan baris duplikat dari kolom yang dipilih."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Klausa DISTINCT] #9:",
            "options": [
              "Menghilangkan baris duplikat dari kolom yang dipilih",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Menghilangkan baris duplikat dari kolom yang dipilih."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Klausa DISTINCT] #10:",
            "options": [
              "Menghilangkan baris duplikat dari kolom yang dipilih",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Menghilangkan baris duplikat dari kolom yang dipilih."
          }
        ]
      },
      {
        "id": "sql-20",
        "level": "Menengah",
        "title": "SQL Lesson 20",
        "exercises": [
          {
            "type": "mc",
            "q": "SQL Menengah [Pembaruan Data UPDATE & DELETE] #1:",
            "options": [
              "Memodifikasi atau menghapus record data dengan proteksi klausa WHERE",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Memodifikasi atau menghapus record data dengan proteksi klausa WHERE."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Pembaruan Data UPDATE & DELETE] #2:",
            "options": [
              "Memodifikasi atau menghapus record data dengan proteksi klausa WHERE",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Memodifikasi atau menghapus record data dengan proteksi klausa WHERE."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Pembaruan Data UPDATE & DELETE] #3:",
            "options": [
              "Memodifikasi atau menghapus record data dengan proteksi klausa WHERE",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Memodifikasi atau menghapus record data dengan proteksi klausa WHERE."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Pembaruan Data UPDATE & DELETE] #4:",
            "options": [
              "Memodifikasi atau menghapus record data dengan proteksi klausa WHERE",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Memodifikasi atau menghapus record data dengan proteksi klausa WHERE."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Pembaruan Data UPDATE & DELETE] #5:",
            "options": [
              "Memodifikasi atau menghapus record data dengan proteksi klausa WHERE",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Memodifikasi atau menghapus record data dengan proteksi klausa WHERE."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Pembaruan Data UPDATE & DELETE] #6:",
            "options": [
              "Memodifikasi atau menghapus record data dengan proteksi klausa WHERE",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Memodifikasi atau menghapus record data dengan proteksi klausa WHERE."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Pembaruan Data UPDATE & DELETE] #7:",
            "options": [
              "Memodifikasi atau menghapus record data dengan proteksi klausa WHERE",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Memodifikasi atau menghapus record data dengan proteksi klausa WHERE."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Pembaruan Data UPDATE & DELETE] #8:",
            "options": [
              "Memodifikasi atau menghapus record data dengan proteksi klausa WHERE",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Memodifikasi atau menghapus record data dengan proteksi klausa WHERE."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Pembaruan Data UPDATE & DELETE] #9:",
            "options": [
              "Memodifikasi atau menghapus record data dengan proteksi klausa WHERE",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Memodifikasi atau menghapus record data dengan proteksi klausa WHERE."
          },
          {
            "type": "mc",
            "q": "SQL Menengah [Pembaruan Data UPDATE & DELETE] #10:",
            "options": [
              "Memodifikasi atau menghapus record data dengan proteksi klausa WHERE",
              "Membuat server HTTP",
              "Manipulasi DOM",
              "Styling font"
            ],
            "a": 0,
            "explain": "Memodifikasi atau menghapus record data dengan proteksi klausa WHERE."
          }
        ]
      },
      {
        "id": "sql-21",
        "level": "Advance",
        "title": "Subquery & Set",
        "exercises": [
          {
            "type": "mc",
            "q": "Subquery adalah:",
            "options": [
              "Query di dalam query lain",
              "Tabel cadangan",
              "Index khusus",
              "Fungsi agregat"
            ],
            "a": 0,
            "explain": "Bisa dipakai di WHERE, FROM, atau SELECT."
          },
          {
            "type": "fill",
            "q": "Ambil produk lebih mahal dari harga rata-rata:",
            "code": "SELECT * FROM products\nWHERE price > (SELECT ___(price) FROM products);",
            "accept": [
              "avg"
            ],
            "explain": "Subquery skalar jadi pembanding."
          },
          {
            "type": "mc",
            "q": "Kesetaraan himpunan yang benar untuk WHERE pada sekumpulan nilai:",
            "options": [
              "IN (1, 2, 3)",
              "IS (1, 2, 3)",
              "HAS (1, 2, 3)",
              "INTO (1, 2, 3)"
            ],
            "a": 0,
            "explain": "IN memeriksa apakah nilai termasuk dalam daftar."
          },
          {
            "type": "mc",
            "q": "Fungsi jendela memakai klausa:",
            "options": [
              "OVER ()",
              "WINDOWED ()",
              "GROUP ()",
              "PARTITION ()"
            ],
            "a": 0,
            "explain": "ROW_NUMBER() OVER (PARTITION BY ... ORDER BY ...)."
          },
          {
            "type": "arrange",
            "q": "Susun subquery: produk di kategori yang ada:",
            "blocks": [
              "SELECT name FROM products",
              "WHERE category_id",
              "IN (SELECT id FROM categories)"
            ],
            "explain": "IN + subquery = filter berdasarkan himpunan lain."
          },
          {
            "type": "mc",
            "q": "Window Function ROW_NUMBER() OVER (PARTITION BY k ORDER BY v) berfungsi untuk:",
            "options": [
              "Memberikan nomor urut baris unik di dalam tiap partisi grup",
              "Menghapus baris",
              "Mengubah tipe data",
              "Membuat index"
            ],
            "a": 0,
            "explain": "ROW_NUMBER() menghasilkan urutan ranking numerik per partisi."
          },
          {
            "type": "fill",
            "q": "Tentukan partisi pada window function:\nROW_NUMBER() OVER (___ BY kategori ORDER BY harga DESC)",
            "code": "ROW_NUMBER() OVER (___ BY kategori ORDER BY harga DESC)",
            "accept": [
              "PARTITION",
              "partition"
            ],
            "explain": "PARTITION BY."
          },
          {
            "type": "arrange",
            "q": "Susun query Window Function ranking:",
            "blocks": [
              "SELECT nama, harga,",
              "  RANK() OVER (ORDER BY harga DESC) as peringkat",
              "FROM produk;"
            ],
            "explain": "Window function OVER (ORDER BY)."
          },
          {
            "type": "mc",
            "q": "Common Table Expression (CTE) dideklarasikan menggunakan kata kunci:",
            "options": [
              "WITH",
              "LET",
              "DEF",
              "SUB"
            ],
            "a": 0,
            "explain": "WITH cte_name AS (SELECT ...) mendefinisikan CTE."
          },
          {
            "type": "fill",
            "q": "Awali pendefinisian CTE:\n___ penjualan_bulanan AS (SELECT * FROM sales)",
            "code": "___ penjualan_bulanan AS (SELECT * FROM sales)",
            "accept": [
              "WITH",
              "with"
            ],
            "explain": "WITH klausa CTE."
          }
        ]
      },
      {
        "id": "sql-22",
        "level": "Advance",
        "title": "Index & Performa",
        "exercises": [
          {
            "type": "mc",
            "q": "Index pada kolom berfungsi untuk:",
            "options": [
              "Mempercepat pencarian/filter di kolom itu",
              "Mengurangi ukuran tabel",
              "Menyimpan gambar",
              "Membuat kolom unik otomatis"
            ],
            "a": 0,
            "explain": "Index seperti daftar isi → pencarian lebih cepat."
          },
          {
            "type": "fill",
            "q": "Buat index untuk kolom email:",
            "code": "CREATE ___ idx_email ON users (email);",
            "accept": [
              "index",
              "unique index"
            ],
            "explain": "CREATE INDEX mempercepat query pada kolom."
          },
          {
            "type": "mc",
            "q": "Kekurangan menambah terlalu banyak index:",
            "options": [
              "Query SELECT melambat permanen",
              "INSERT/UPDATE lebih lambat & boros ruang",
              "Tabel jadi read-only",
              "Data hilang"
            ],
            "a": 1,
            "explain": "Tiap index harus dipelihara tiap tulis data."
          },
          {
            "type": "mc",
            "q": "EXPLAIN dipakai untuk:",
            "options": [
              "Melihat rencana eksekusi query",
              "Menghapus index",
              "Membuat tabel",
              "Mengenkripsi data"
            ],
            "a": 0,
            "explain": "EXPLAIN memperlihatkan apakah index terpakai."
          },
          {
            "type": "fill",
            "q": "Ambil baris dengan pola teks berawalan \"bud\":",
            "code": "SELECT * FROM users WHERE name ___ 'bud%';",
            "accept": [
              "like"
            ],
            "explain": "LIKE 'bud%' = pencocokan pola (prefix)."
          },
          {
            "type": "mc",
            "q": "Index pada kolom tabel database bertujuan utama untuk:",
            "options": [
              "Mempercepat kecepatan pembacaan/pencarian data (SELECT query) dengan struktur B-Tree",
              "Menghemat ukuran hard disk",
              "Membuat warna teks",
              "Mencegah data terhapus"
            ],
            "a": 0,
            "explain": "Index mempercepat pencarian data dengan mengorbankan sedikit overhead saat INSERT/UPDATE."
          },
          {
            "type": "fill",
            "q": "Buat index baru pada kolom email:\nCREATE ___ idx_email ON users(email);",
            "code": "CREATE ___ idx_email ON users(email);",
            "accept": [
              "INDEX",
              "index"
            ],
            "explain": "CREATE INDEX."
          },
          {
            "type": "arrange",
            "q": "Susun transaksi SQL aman:",
            "blocks": [
              "BEGIN TRANSACTION;",
              "UPDATE rekening SET saldo = saldo - 100 WHERE id = 1;",
              "UPDATE rekening SET saldo = saldo + 100 WHERE id = 2;",
              "COMMIT;"
            ],
            "explain": "Pola transaksi atomik."
          },
          {
            "type": "mc",
            "q": "Perintah untuk membatalkan seluruh perubahan dalam transaksi yang gagal:",
            "options": [
              "ROLLBACK",
              "CANCEL",
              "UNDO",
              "RESET"
            ],
            "a": 0,
            "explain": "ROLLBACK membatalkan seluruh perubahan transaksi sebelum COMMIT."
          },
          {
            "type": "fill",
            "q": "Batalkan transaksi yang error:\n___;",
            "code": "___;",
            "accept": [
              "ROLLBACK",
              "rollback"
            ],
            "explain": "ROLLBACK."
          }
        ]
      },
      {
        "id": "sql-23",
        "level": "Advance",
        "title": "SQL Lesson 23",
        "exercises": [
          {
            "type": "mc",
            "q": "SQL Advance [EXPLAIN ANALYZE] #1:",
            "options": [
              "Menganalisis execution plan dan bottleneck performa eksekusi query mesin database",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Menganalisis execution plan dan bottleneck performa eksekusi query mesin database."
          },
          {
            "type": "mc",
            "q": "SQL Advance [EXPLAIN ANALYZE] #2:",
            "options": [
              "Menganalisis execution plan dan bottleneck performa eksekusi query mesin database",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Menganalisis execution plan dan bottleneck performa eksekusi query mesin database."
          },
          {
            "type": "mc",
            "q": "SQL Advance [EXPLAIN ANALYZE] #3:",
            "options": [
              "Menganalisis execution plan dan bottleneck performa eksekusi query mesin database",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Menganalisis execution plan dan bottleneck performa eksekusi query mesin database."
          },
          {
            "type": "mc",
            "q": "SQL Advance [EXPLAIN ANALYZE] #4:",
            "options": [
              "Menganalisis execution plan dan bottleneck performa eksekusi query mesin database",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Menganalisis execution plan dan bottleneck performa eksekusi query mesin database."
          },
          {
            "type": "mc",
            "q": "SQL Advance [EXPLAIN ANALYZE] #5:",
            "options": [
              "Menganalisis execution plan dan bottleneck performa eksekusi query mesin database",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Menganalisis execution plan dan bottleneck performa eksekusi query mesin database."
          },
          {
            "type": "mc",
            "q": "SQL Advance [EXPLAIN ANALYZE] #6:",
            "options": [
              "Menganalisis execution plan dan bottleneck performa eksekusi query mesin database",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Menganalisis execution plan dan bottleneck performa eksekusi query mesin database."
          },
          {
            "type": "mc",
            "q": "SQL Advance [EXPLAIN ANALYZE] #7:",
            "options": [
              "Menganalisis execution plan dan bottleneck performa eksekusi query mesin database",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Menganalisis execution plan dan bottleneck performa eksekusi query mesin database."
          },
          {
            "type": "mc",
            "q": "SQL Advance [EXPLAIN ANALYZE] #8:",
            "options": [
              "Menganalisis execution plan dan bottleneck performa eksekusi query mesin database",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Menganalisis execution plan dan bottleneck performa eksekusi query mesin database."
          },
          {
            "type": "mc",
            "q": "SQL Advance [EXPLAIN ANALYZE] #9:",
            "options": [
              "Menganalisis execution plan dan bottleneck performa eksekusi query mesin database",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Menganalisis execution plan dan bottleneck performa eksekusi query mesin database."
          },
          {
            "type": "mc",
            "q": "SQL Advance [EXPLAIN ANALYZE] #10:",
            "options": [
              "Menganalisis execution plan dan bottleneck performa eksekusi query mesin database",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Menganalisis execution plan dan bottleneck performa eksekusi query mesin database."
          }
        ]
      },
      {
        "id": "sql-24",
        "level": "Advance",
        "title": "SQL Lesson 24",
        "exercises": [
          {
            "type": "mc",
            "q": "SQL Advance [Stored Procedures & Functions] #1:",
            "options": [
              "Menyimpan sekumpulan perintah logika SQL yang dapat dieksekusi berulang di sisi server",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Menyimpan sekumpulan perintah logika SQL yang dapat dieksekusi berulang di sisi server."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Stored Procedures & Functions] #2:",
            "options": [
              "Menyimpan sekumpulan perintah logika SQL yang dapat dieksekusi berulang di sisi server",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Menyimpan sekumpulan perintah logika SQL yang dapat dieksekusi berulang di sisi server."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Stored Procedures & Functions] #3:",
            "options": [
              "Menyimpan sekumpulan perintah logika SQL yang dapat dieksekusi berulang di sisi server",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Menyimpan sekumpulan perintah logika SQL yang dapat dieksekusi berulang di sisi server."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Stored Procedures & Functions] #4:",
            "options": [
              "Menyimpan sekumpulan perintah logika SQL yang dapat dieksekusi berulang di sisi server",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Menyimpan sekumpulan perintah logika SQL yang dapat dieksekusi berulang di sisi server."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Stored Procedures & Functions] #5:",
            "options": [
              "Menyimpan sekumpulan perintah logika SQL yang dapat dieksekusi berulang di sisi server",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Menyimpan sekumpulan perintah logika SQL yang dapat dieksekusi berulang di sisi server."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Stored Procedures & Functions] #6:",
            "options": [
              "Menyimpan sekumpulan perintah logika SQL yang dapat dieksekusi berulang di sisi server",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Menyimpan sekumpulan perintah logika SQL yang dapat dieksekusi berulang di sisi server."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Stored Procedures & Functions] #7:",
            "options": [
              "Menyimpan sekumpulan perintah logika SQL yang dapat dieksekusi berulang di sisi server",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Menyimpan sekumpulan perintah logika SQL yang dapat dieksekusi berulang di sisi server."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Stored Procedures & Functions] #8:",
            "options": [
              "Menyimpan sekumpulan perintah logika SQL yang dapat dieksekusi berulang di sisi server",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Menyimpan sekumpulan perintah logika SQL yang dapat dieksekusi berulang di sisi server."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Stored Procedures & Functions] #9:",
            "options": [
              "Menyimpan sekumpulan perintah logika SQL yang dapat dieksekusi berulang di sisi server",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Menyimpan sekumpulan perintah logika SQL yang dapat dieksekusi berulang di sisi server."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Stored Procedures & Functions] #10:",
            "options": [
              "Menyimpan sekumpulan perintah logika SQL yang dapat dieksekusi berulang di sisi server",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Menyimpan sekumpulan perintah logika SQL yang dapat dieksekusi berulang di sisi server."
          }
        ]
      },
      {
        "id": "sql-25",
        "level": "Advance",
        "title": "SQL Lesson 25",
        "exercises": [
          {
            "type": "mc",
            "q": "SQL Advance [Database Triggers] #1:",
            "options": [
              "Memicu eksekusi kode otomatis saat event INSERT, UPDATE, atau DELETE terjadi",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Memicu eksekusi kode otomatis saat event INSERT, UPDATE, atau DELETE terjadi."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Database Triggers] #2:",
            "options": [
              "Memicu eksekusi kode otomatis saat event INSERT, UPDATE, atau DELETE terjadi",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Memicu eksekusi kode otomatis saat event INSERT, UPDATE, atau DELETE terjadi."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Database Triggers] #3:",
            "options": [
              "Memicu eksekusi kode otomatis saat event INSERT, UPDATE, atau DELETE terjadi",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Memicu eksekusi kode otomatis saat event INSERT, UPDATE, atau DELETE terjadi."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Database Triggers] #4:",
            "options": [
              "Memicu eksekusi kode otomatis saat event INSERT, UPDATE, atau DELETE terjadi",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Memicu eksekusi kode otomatis saat event INSERT, UPDATE, atau DELETE terjadi."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Database Triggers] #5:",
            "options": [
              "Memicu eksekusi kode otomatis saat event INSERT, UPDATE, atau DELETE terjadi",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Memicu eksekusi kode otomatis saat event INSERT, UPDATE, atau DELETE terjadi."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Database Triggers] #6:",
            "options": [
              "Memicu eksekusi kode otomatis saat event INSERT, UPDATE, atau DELETE terjadi",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Memicu eksekusi kode otomatis saat event INSERT, UPDATE, atau DELETE terjadi."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Database Triggers] #7:",
            "options": [
              "Memicu eksekusi kode otomatis saat event INSERT, UPDATE, atau DELETE terjadi",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Memicu eksekusi kode otomatis saat event INSERT, UPDATE, atau DELETE terjadi."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Database Triggers] #8:",
            "options": [
              "Memicu eksekusi kode otomatis saat event INSERT, UPDATE, atau DELETE terjadi",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Memicu eksekusi kode otomatis saat event INSERT, UPDATE, atau DELETE terjadi."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Database Triggers] #9:",
            "options": [
              "Memicu eksekusi kode otomatis saat event INSERT, UPDATE, atau DELETE terjadi",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Memicu eksekusi kode otomatis saat event INSERT, UPDATE, atau DELETE terjadi."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Database Triggers] #10:",
            "options": [
              "Memicu eksekusi kode otomatis saat event INSERT, UPDATE, atau DELETE terjadi",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Memicu eksekusi kode otomatis saat event INSERT, UPDATE, atau DELETE terjadi."
          }
        ]
      },
      {
        "id": "sql-26",
        "level": "Advance",
        "title": "SQL Lesson 26",
        "exercises": [
          {
            "type": "mc",
            "q": "SQL Advance [Materialized Views] #1:",
            "options": [
              "Menyimpan hasil query kompleks secara fisik untuk pembacaan instan berkecepatan tinggi",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Menyimpan hasil query kompleks secara fisik untuk pembacaan instan berkecepatan tinggi."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Materialized Views] #2:",
            "options": [
              "Menyimpan hasil query kompleks secara fisik untuk pembacaan instan berkecepatan tinggi",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Menyimpan hasil query kompleks secara fisik untuk pembacaan instan berkecepatan tinggi."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Materialized Views] #3:",
            "options": [
              "Menyimpan hasil query kompleks secara fisik untuk pembacaan instan berkecepatan tinggi",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Menyimpan hasil query kompleks secara fisik untuk pembacaan instan berkecepatan tinggi."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Materialized Views] #4:",
            "options": [
              "Menyimpan hasil query kompleks secara fisik untuk pembacaan instan berkecepatan tinggi",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Menyimpan hasil query kompleks secara fisik untuk pembacaan instan berkecepatan tinggi."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Materialized Views] #5:",
            "options": [
              "Menyimpan hasil query kompleks secara fisik untuk pembacaan instan berkecepatan tinggi",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Menyimpan hasil query kompleks secara fisik untuk pembacaan instan berkecepatan tinggi."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Materialized Views] #6:",
            "options": [
              "Menyimpan hasil query kompleks secara fisik untuk pembacaan instan berkecepatan tinggi",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Menyimpan hasil query kompleks secara fisik untuk pembacaan instan berkecepatan tinggi."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Materialized Views] #7:",
            "options": [
              "Menyimpan hasil query kompleks secara fisik untuk pembacaan instan berkecepatan tinggi",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Menyimpan hasil query kompleks secara fisik untuk pembacaan instan berkecepatan tinggi."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Materialized Views] #8:",
            "options": [
              "Menyimpan hasil query kompleks secara fisik untuk pembacaan instan berkecepatan tinggi",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Menyimpan hasil query kompleks secara fisik untuk pembacaan instan berkecepatan tinggi."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Materialized Views] #9:",
            "options": [
              "Menyimpan hasil query kompleks secara fisik untuk pembacaan instan berkecepatan tinggi",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Menyimpan hasil query kompleks secara fisik untuk pembacaan instan berkecepatan tinggi."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Materialized Views] #10:",
            "options": [
              "Menyimpan hasil query kompleks secara fisik untuk pembacaan instan berkecepatan tinggi",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Menyimpan hasil query kompleks secara fisik untuk pembacaan instan berkecepatan tinggi."
          }
        ]
      },
      {
        "id": "sql-27",
        "level": "Advance",
        "title": "SQL Lesson 27",
        "exercises": [
          {
            "type": "mc",
            "q": "SQL Advance [Optimasi Index Multi-Kolom] #1:",
            "options": [
              "Composite index dengan prinsip leftmost prefix untuk query multi-kriteria",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Composite index dengan prinsip leftmost prefix untuk query multi-kriteria."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Optimasi Index Multi-Kolom] #2:",
            "options": [
              "Composite index dengan prinsip leftmost prefix untuk query multi-kriteria",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Composite index dengan prinsip leftmost prefix untuk query multi-kriteria."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Optimasi Index Multi-Kolom] #3:",
            "options": [
              "Composite index dengan prinsip leftmost prefix untuk query multi-kriteria",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Composite index dengan prinsip leftmost prefix untuk query multi-kriteria."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Optimasi Index Multi-Kolom] #4:",
            "options": [
              "Composite index dengan prinsip leftmost prefix untuk query multi-kriteria",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Composite index dengan prinsip leftmost prefix untuk query multi-kriteria."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Optimasi Index Multi-Kolom] #5:",
            "options": [
              "Composite index dengan prinsip leftmost prefix untuk query multi-kriteria",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Composite index dengan prinsip leftmost prefix untuk query multi-kriteria."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Optimasi Index Multi-Kolom] #6:",
            "options": [
              "Composite index dengan prinsip leftmost prefix untuk query multi-kriteria",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Composite index dengan prinsip leftmost prefix untuk query multi-kriteria."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Optimasi Index Multi-Kolom] #7:",
            "options": [
              "Composite index dengan prinsip leftmost prefix untuk query multi-kriteria",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Composite index dengan prinsip leftmost prefix untuk query multi-kriteria."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Optimasi Index Multi-Kolom] #8:",
            "options": [
              "Composite index dengan prinsip leftmost prefix untuk query multi-kriteria",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Composite index dengan prinsip leftmost prefix untuk query multi-kriteria."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Optimasi Index Multi-Kolom] #9:",
            "options": [
              "Composite index dengan prinsip leftmost prefix untuk query multi-kriteria",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Composite index dengan prinsip leftmost prefix untuk query multi-kriteria."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Optimasi Index Multi-Kolom] #10:",
            "options": [
              "Composite index dengan prinsip leftmost prefix untuk query multi-kriteria",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Composite index dengan prinsip leftmost prefix untuk query multi-kriteria."
          }
        ]
      },
      {
        "id": "sql-28",
        "level": "Advance",
        "title": "SQL Lesson 28",
        "exercises": [
          {
            "type": "mc",
            "q": "SQL Advance [Partisi Tabel Besar] #1:",
            "options": [
              "Range/List/Hash partitioning untuk memecah tabel raksasa menjadi partisi fisik terpisah",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Range/List/Hash partitioning untuk memecah tabel raksasa menjadi partisi fisik terpisah."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Partisi Tabel Besar] #2:",
            "options": [
              "Range/List/Hash partitioning untuk memecah tabel raksasa menjadi partisi fisik terpisah",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Range/List/Hash partitioning untuk memecah tabel raksasa menjadi partisi fisik terpisah."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Partisi Tabel Besar] #3:",
            "options": [
              "Range/List/Hash partitioning untuk memecah tabel raksasa menjadi partisi fisik terpisah",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Range/List/Hash partitioning untuk memecah tabel raksasa menjadi partisi fisik terpisah."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Partisi Tabel Besar] #4:",
            "options": [
              "Range/List/Hash partitioning untuk memecah tabel raksasa menjadi partisi fisik terpisah",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Range/List/Hash partitioning untuk memecah tabel raksasa menjadi partisi fisik terpisah."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Partisi Tabel Besar] #5:",
            "options": [
              "Range/List/Hash partitioning untuk memecah tabel raksasa menjadi partisi fisik terpisah",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Range/List/Hash partitioning untuk memecah tabel raksasa menjadi partisi fisik terpisah."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Partisi Tabel Besar] #6:",
            "options": [
              "Range/List/Hash partitioning untuk memecah tabel raksasa menjadi partisi fisik terpisah",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Range/List/Hash partitioning untuk memecah tabel raksasa menjadi partisi fisik terpisah."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Partisi Tabel Besar] #7:",
            "options": [
              "Range/List/Hash partitioning untuk memecah tabel raksasa menjadi partisi fisik terpisah",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Range/List/Hash partitioning untuk memecah tabel raksasa menjadi partisi fisik terpisah."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Partisi Tabel Besar] #8:",
            "options": [
              "Range/List/Hash partitioning untuk memecah tabel raksasa menjadi partisi fisik terpisah",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Range/List/Hash partitioning untuk memecah tabel raksasa menjadi partisi fisik terpisah."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Partisi Tabel Besar] #9:",
            "options": [
              "Range/List/Hash partitioning untuk memecah tabel raksasa menjadi partisi fisik terpisah",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Range/List/Hash partitioning untuk memecah tabel raksasa menjadi partisi fisik terpisah."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Partisi Tabel Besar] #10:",
            "options": [
              "Range/List/Hash partitioning untuk memecah tabel raksasa menjadi partisi fisik terpisah",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Range/List/Hash partitioning untuk memecah tabel raksasa menjadi partisi fisik terpisah."
          }
        ]
      },
      {
        "id": "sql-29",
        "level": "Advance",
        "title": "SQL Lesson 29",
        "exercises": [
          {
            "type": "mc",
            "q": "SQL Advance [Full-Text Search] #1:",
            "options": [
              "Pencarian kata kunci relevan cepat menggunakan inverted index bahasa alami",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Pencarian kata kunci relevan cepat menggunakan inverted index bahasa alami."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Full-Text Search] #2:",
            "options": [
              "Pencarian kata kunci relevan cepat menggunakan inverted index bahasa alami",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Pencarian kata kunci relevan cepat menggunakan inverted index bahasa alami."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Full-Text Search] #3:",
            "options": [
              "Pencarian kata kunci relevan cepat menggunakan inverted index bahasa alami",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Pencarian kata kunci relevan cepat menggunakan inverted index bahasa alami."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Full-Text Search] #4:",
            "options": [
              "Pencarian kata kunci relevan cepat menggunakan inverted index bahasa alami",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Pencarian kata kunci relevan cepat menggunakan inverted index bahasa alami."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Full-Text Search] #5:",
            "options": [
              "Pencarian kata kunci relevan cepat menggunakan inverted index bahasa alami",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Pencarian kata kunci relevan cepat menggunakan inverted index bahasa alami."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Full-Text Search] #6:",
            "options": [
              "Pencarian kata kunci relevan cepat menggunakan inverted index bahasa alami",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Pencarian kata kunci relevan cepat menggunakan inverted index bahasa alami."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Full-Text Search] #7:",
            "options": [
              "Pencarian kata kunci relevan cepat menggunakan inverted index bahasa alami",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Pencarian kata kunci relevan cepat menggunakan inverted index bahasa alami."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Full-Text Search] #8:",
            "options": [
              "Pencarian kata kunci relevan cepat menggunakan inverted index bahasa alami",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Pencarian kata kunci relevan cepat menggunakan inverted index bahasa alami."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Full-Text Search] #9:",
            "options": [
              "Pencarian kata kunci relevan cepat menggunakan inverted index bahasa alami",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Pencarian kata kunci relevan cepat menggunakan inverted index bahasa alami."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Full-Text Search] #10:",
            "options": [
              "Pencarian kata kunci relevan cepat menggunakan inverted index bahasa alami",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Pencarian kata kunci relevan cepat menggunakan inverted index bahasa alami."
          }
        ]
      },
      {
        "id": "sql-30",
        "level": "Advance",
        "title": "SQL Lesson 30",
        "exercises": [
          {
            "type": "mc",
            "q": "SQL Advance [Koneksi & Keamanan SQL] #1:",
            "options": [
              "Mencegah SQL Injection dengan Prepared Statements dan parameter binding terikat",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Mencegah SQL Injection dengan Prepared Statements dan parameter binding terikat."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Koneksi & Keamanan SQL] #2:",
            "options": [
              "Mencegah SQL Injection dengan Prepared Statements dan parameter binding terikat",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Mencegah SQL Injection dengan Prepared Statements dan parameter binding terikat."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Koneksi & Keamanan SQL] #3:",
            "options": [
              "Mencegah SQL Injection dengan Prepared Statements dan parameter binding terikat",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Mencegah SQL Injection dengan Prepared Statements dan parameter binding terikat."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Koneksi & Keamanan SQL] #4:",
            "options": [
              "Mencegah SQL Injection dengan Prepared Statements dan parameter binding terikat",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Mencegah SQL Injection dengan Prepared Statements dan parameter binding terikat."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Koneksi & Keamanan SQL] #5:",
            "options": [
              "Mencegah SQL Injection dengan Prepared Statements dan parameter binding terikat",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Mencegah SQL Injection dengan Prepared Statements dan parameter binding terikat."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Koneksi & Keamanan SQL] #6:",
            "options": [
              "Mencegah SQL Injection dengan Prepared Statements dan parameter binding terikat",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Mencegah SQL Injection dengan Prepared Statements dan parameter binding terikat."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Koneksi & Keamanan SQL] #7:",
            "options": [
              "Mencegah SQL Injection dengan Prepared Statements dan parameter binding terikat",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Mencegah SQL Injection dengan Prepared Statements dan parameter binding terikat."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Koneksi & Keamanan SQL] #8:",
            "options": [
              "Mencegah SQL Injection dengan Prepared Statements dan parameter binding terikat",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Mencegah SQL Injection dengan Prepared Statements dan parameter binding terikat."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Koneksi & Keamanan SQL] #9:",
            "options": [
              "Mencegah SQL Injection dengan Prepared Statements dan parameter binding terikat",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Mencegah SQL Injection dengan Prepared Statements dan parameter binding terikat."
          },
          {
            "type": "mc",
            "q": "SQL Advance [Koneksi & Keamanan SQL] #10:",
            "options": [
              "Mencegah SQL Injection dengan Prepared Statements dan parameter binding terikat",
              "Animasi CSS 3D",
              "Event klik tombol",
              "Local storage browser"
            ],
            "a": 0,
            "explain": "Mencegah SQL Injection dengan Prepared Statements dan parameter binding terikat."
          }
        ]
      },
      {
        "id": "sql-31",
        "level": "Advance",
        "title": "SQL Lesson 31",
        "exercises": [
          {
            "type": "mc",
            "q": "Tingkat isolasi transaksi tertinggi pada standar SQL ACID:",
            "options": [
              "SERIALIZABLE",
              "REPEATABLE READ",
              "READ COMMITTED",
              "READ UNCOMMITTED"
            ],
            "a": 0,
            "explain": "SERIALIZABLE menjamin eksekusi transaksi terisolasi tanpa anomaly phantom read."
          },
          {
            "type": "fill",
            "q": "Klausa perintah pencegahan SQL Injection terbaik:\n___ Statements",
            "code": "___ Statements",
            "accept": [
              "Prepared",
              "prepared"
            ],
            "explain": "Prepared Statements."
          },
          {
            "type": "mc",
            "q": "Masalah N+1 Query pada ORM dapat diselesaikan dengan cara:",
            "options": [
              "Eager Loading (JOIN atau IN batch query)",
              "Menghapus database",
              "Menambah RAM",
              "Menggunakan loop for"
            ],
            "a": 0,
            "explain": "Eager loading mengambil relasi sekaligus dalam satu atau dua query batch."
          },
          {
            "type": "fill",
            "q": "Kunci atomisitas transaksi:\n___ (Atomicity, Consistency, Isolation, Durability)",
            "code": "___ (Atomicity, Consistency, Isolation, Durability)",
            "accept": [
              "ACID",
              "acid"
            ],
            "explain": "Prinsip ACID."
          },
          {
            "type": "arrange",
            "q": "Susun arsitektur query performa tinggi:",
            "blocks": [
              "EXPLAIN SELECT * FROM orders WHERE user_id = 42;",
              "CREATE INDEX idx_user ON orders(user_id);",
              "COMMIT;"
            ],
            "explain": "Alur optimasi query dan index."
          }
        ]
      }
    ]
  },
  {
    "id": "db",
    "name": "Database",
    "icon": "🧮",
    "color": "#00758f",
    "desc": "Desain tabel dan relasi",
    "lessons": [
      {
        "id": "db-1",
        "level": "Dasar",
        "title": "Tabel & Kolom",
        "exercises": [
          {
            "type": "mc",
            "q": "Dalam database relasional, tabel terdiri dari:",
            "options": [
              "Baris (record) dan kolom (field)",
              "Hanya baris",
              "Hanya kolom",
              "Gambar dan teks"
            ],
            "a": 0,
            "explain": "Baris = satu entitas, kolom = atribut entitas."
          },
          {
            "type": "fill",
            "q": "Lengkapi tipe data untuk teks pendek:",
            "code": "CREATE TABLE users (\n  id INT PRIMARY KEY,\n  name ___\n);",
            "accept": [
              "varchar(255)",
              "varchar",
              "varchar(100)",
              "text",
              "char(255)",
              "string"
            ],
            "explain": "VARCHAR = teks variabel panjang."
          },
          {
            "type": "mc",
            "q": "PRIMARY KEY harus:",
            "options": [
              "Boleh NULL",
              "Unik dan tidak boleh NULL",
              "Berupa teks saja",
              "Sama di semua baris"
            ],
            "a": 1,
            "explain": "Primary key = identitas unik tiap baris."
          },
          {
            "type": "arrange",
            "q": "Susun sintaks CREATE TABLE:",
            "blocks": [
              "CREATE TABLE users (",
              "id INT PRIMARY KEY,",
              "name VARCHAR(255)",
              ");"
            ],
            "explain": "CREATE TABLE nama ( daftar_kolom );"
          },
          {
            "type": "fill",
            "q": "Lengkapi tipe data bilangan bulat:",
            "code": "CREATE TABLE t (umur ___ );",
            "accept": [
              "int",
              "integer",
              "bigint"
            ],
            "explain": "INT = bilangan bulat."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #1: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #2: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #3: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #4: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #5: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          }
        ]
      },
      {
        "id": "db-2",
        "level": "Dasar",
        "title": "Key & Relasi",
        "exercises": [
          {
            "type": "mc",
            "q": "FOREIGN KEY berfungsi untuk:",
            "options": [
              "Menjaga supaya data tidak duplikat",
              "Merujuk ke PRIMARY KEY tabel lain (relasi)",
              "Menambah kecepatan query otomatis",
              "Mengenkripsi kolom"
            ],
            "a": 1,
            "explain": "Foreign key = jangkar relasi antar tabel."
          },
          {
            "type": "fill",
            "q": "Lengkapi deklarasi foreign key ke tabel users:",
            "code": "FOREIGN KEY (user_id) ___ users(id);",
            "accept": [
              "references"
            ],
            "explain": "REFERENCES menunjuk tabel & kolom tujuan."
          },
          {
            "type": "mc",
            "q": "Relasi One-to-Many antara users dan orders artinya:",
            "options": [
              "Satu user bisa punya banyak orders",
              "Satu order dimiliki banyak user",
              "Tabel tidak saling terkait",
              "Jumlah baris sama"
            ],
            "a": 0,
            "explain": "Satu user → banyak order; tiap order milik satu user."
          },
          {
            "type": "mc",
            "q": "Kalau foreign key dihapus sembarangan, risiko utama:",
            "options": [
              "Database lebih cepat",
              "Data jadi inkonsisten / orphan record",
              "Kolom bertambah",
              "Tabel jadi kosong"
            ],
            "a": 1,
            "explain": "Integritas referensial menjaga data tetap masuk akal."
          },
          {
            "type": "fill",
            "q": "Primary key gabungan dua kolom disebut:",
            "code": "PRIMARY KEY (a, b) -- composite / ___ key",
            "accept": [
              "composite",
              "compound"
            ],
            "explain": "Composite key = lebih dari satu kolom."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #6: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #7: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #8: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #9: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #10: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          }
        ]
      },
      {
        "id": "db-3",
        "level": "Dasar",
        "title": "DB Lesson 3",
        "exercises": [
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #11: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #12: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #13: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #14: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #15: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #16: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #17: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #18: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #19: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #20: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          }
        ]
      },
      {
        "id": "db-4",
        "level": "Dasar",
        "title": "DB Lesson 4",
        "exercises": [
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #21: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #22: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #23: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #24: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #25: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #26: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #27: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #28: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #29: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #30: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          }
        ]
      },
      {
        "id": "db-5",
        "level": "Dasar",
        "title": "DB Lesson 5",
        "exercises": [
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #31: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #32: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #33: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #34: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #35: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #36: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #37: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #38: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #39: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #40: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          }
        ]
      },
      {
        "id": "db-6",
        "level": "Dasar",
        "title": "DB Lesson 6",
        "exercises": [
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #41: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #42: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #43: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #44: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #45: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #46: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #47: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #48: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #49: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #50: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          }
        ]
      },
      {
        "id": "db-7",
        "level": "Dasar",
        "title": "DB Lesson 7",
        "exercises": [
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #51: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #52: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #53: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #54: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #55: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #56: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #57: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #58: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #59: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #60: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          }
        ]
      },
      {
        "id": "db-8",
        "level": "Dasar",
        "title": "DB Lesson 8",
        "exercises": [
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #61: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #62: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #63: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #64: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #65: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #66: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #67: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #68: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #69: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #70: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          }
        ]
      },
      {
        "id": "db-9",
        "level": "Dasar",
        "title": "DB Lesson 9",
        "exercises": [
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #71: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #72: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #73: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #74: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #75: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #76: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #77: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #78: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #79: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #80: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          }
        ]
      },
      {
        "id": "db-10",
        "level": "Dasar",
        "title": "DB Lesson 10",
        "exercises": [
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #81: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #82: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #83: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #84: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #85: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #86: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #87: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #88: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #89: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          },
          {
            "type": "mc",
            "q": "Prinsip Dasar Database #90: Primary Key dalam tabel relational berfungsi untuk:",
            "options": [
              "Mengidentifikasi setiap baris data secara unik dan tidak boleh bernilai NULL",
              "Menyimpan teks panjang",
              "Menghubungkan ke server lain",
              "Mengubah format file"
            ],
            "a": 0,
            "explain": "Primary key adalah pengidentifikasi unik mutlak untuk tiap record."
          }
        ]
      },
      {
        "id": "db-11",
        "level": "Menengah",
        "title": "Normalisasi",
        "exercises": [
          {
            "type": "fill",
            "q": "Normalisasi bertujuan mengurangi:",
            "code": "Normalisasi mengurangi ___ data",
            "accept": [
              "duplikasi",
              "redudansi",
              "redundansi",
              "pengulangan"
            ],
            "explain": "Duplikasi = sumber inkonsistensi."
          },
          {
            "type": "mc",
            "q": "Syarat 1NF (First Normal Form):",
            "options": [
              "Tidak ada nilai multi-value di satu sel",
              "Semua kolom bertipe sama",
              "Tabel sudah pakai JOIN",
              "Wajib punya index"
            ],
            "a": 0,
            "explain": "Satu sel = satu nilai atomik."
          },
          {
            "type": "mc",
            "q": "2NF menuntut data sudah 1NF plus:",
            "options": [
              "Semua kolom PRIMARY KEY jadi unik",
              "Setiap atribut bergantung penuh pada PRIMARY KEY (bukan sebagian)",
              "Tidak boleh ada foreign key",
              "Harus pakai tipe VARCHAR"
            ],
            "a": 1,
            "explain": "Menghilangkan ketergantungan parsial pada composite key."
          },
          {
            "type": "arrange",
            "q": "Urutan normalisasi dari paling dasar:",
            "blocks": [
              "1NF",
              "2NF",
              "3NF"
            ],
            "explain": "Setiap bentuk membangun di atas bentuk sebelumnya."
          },
          {
            "type": "mc",
            "q": "Pelanggaran 3NF yang khas:",
            "options": [
              "Kolom non-key bergantung pada kolom non-key lain",
              "Tabel punya primary key",
              "Ada foreign key",
              "Tabel punya 2 kolom"
            ],
            "a": 0,
            "explain": "Dependensi transitif dihilangkan pada 3NF."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #1: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #2: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #3: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #4: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #5: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          }
        ]
      },
      {
        "id": "db-12",
        "level": "Menengah",
        "title": "Tipe Data & Constraint",
        "exercises": [
          {
            "type": "mc",
            "q": "Tipe untuk tanggal & waktu:",
            "options": [
              "DATE / TIMESTAMP",
              "TEXT",
              "INT",
              "BLOB"
            ],
            "a": 0,
            "explain": "DATE untuk tanggal, TIMESTAMP untuk tanggal+waktu."
          },
          {
            "type": "fill",
            "q": "Lengkapi kolom agar tidak boleh kosong:",
            "code": "CREATE TABLE t (email VARCHAR(255) NOT ___ );",
            "accept": [
              "null"
            ],
            "explain": "NOT NULL = wajib diisi."
          },
          {
            "type": "mc",
            "q": "Constraint DEFAULT berguna untuk:",
            "options": [
              "Nilai otomatis bila kolom tidak diisi",
              "Mengunci tabel",
              "Menghapus baris",
              "Membuat index"
            ],
            "a": 0,
            "explain": "DEFAULT memberi nilai bawaan, mis. created_at."
          },
          {
            "type": "fill",
            "q": "Pastikan tiap email unik:",
            "code": "email VARCHAR(255) ___",
            "accept": [
              "unique"
            ],
            "explain": "UNIQUE mencegah nilai duplikat."
          },
          {
            "type": "mc",
            "q": "Bedanya CHAR dan VARCHAR:",
            "options": [
              "Sama saja",
              "CHAR panjang tetap, VARCHAR panjang variabel",
              "CHAR untuk angka",
              "VARCHAR tidak bisa di-index"
            ],
            "a": 1,
            "explain": "CHAR(10) selalu 10 karakter; VARCHAR menyesuaikan panjang."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #6: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #7: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #8: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #9: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #10: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          }
        ]
      },
      {
        "id": "db-13",
        "level": "Menengah",
        "title": "DB Lesson 13",
        "exercises": [
          {
            "type": "mc",
            "q": "Desain Database Menengah #11: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #12: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #13: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #14: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #15: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #16: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #17: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #18: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #19: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #20: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          }
        ]
      },
      {
        "id": "db-14",
        "level": "Menengah",
        "title": "DB Lesson 14",
        "exercises": [
          {
            "type": "mc",
            "q": "Desain Database Menengah #21: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #22: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #23: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #24: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #25: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #26: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #27: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #28: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #29: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #30: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          }
        ]
      },
      {
        "id": "db-15",
        "level": "Menengah",
        "title": "DB Lesson 15",
        "exercises": [
          {
            "type": "mc",
            "q": "Desain Database Menengah #31: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #32: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #33: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #34: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #35: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #36: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #37: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #38: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #39: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #40: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          }
        ]
      },
      {
        "id": "db-16",
        "level": "Menengah",
        "title": "DB Lesson 16",
        "exercises": [
          {
            "type": "mc",
            "q": "Desain Database Menengah #41: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #42: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #43: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #44: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #45: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #46: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #47: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #48: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #49: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #50: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          }
        ]
      },
      {
        "id": "db-17",
        "level": "Menengah",
        "title": "DB Lesson 17",
        "exercises": [
          {
            "type": "mc",
            "q": "Desain Database Menengah #51: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #52: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #53: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #54: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #55: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #56: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #57: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #58: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #59: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #60: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          }
        ]
      },
      {
        "id": "db-18",
        "level": "Menengah",
        "title": "DB Lesson 18",
        "exercises": [
          {
            "type": "mc",
            "q": "Desain Database Menengah #61: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #62: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #63: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #64: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #65: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #66: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #67: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #68: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #69: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #70: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          }
        ]
      },
      {
        "id": "db-19",
        "level": "Menengah",
        "title": "DB Lesson 19",
        "exercises": [
          {
            "type": "mc",
            "q": "Desain Database Menengah #71: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #72: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #73: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #74: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #75: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #76: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #77: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #78: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #79: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #80: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          }
        ]
      },
      {
        "id": "db-20",
        "level": "Menengah",
        "title": "DB Lesson 20",
        "exercises": [
          {
            "type": "mc",
            "q": "Desain Database Menengah #81: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #82: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #83: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #84: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #85: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #86: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #87: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #88: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #89: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          },
          {
            "type": "mc",
            "q": "Desain Database Menengah #90: Normalisasi 3NF (Third Normal Form) bertujuan untuk:",
            "options": [
              "Menghilangkan redundansi data dan dependensi transitif antar kolom non-kunci",
              "Memperbesar ukuran tabel",
              "Menghapus backup",
              "Menggabungkan semua kolom ke 1 tabel"
            ],
            "a": 0,
            "explain": "3NF memastikan tidak ada dependensi transitif demi integritas data."
          }
        ]
      },
      {
        "id": "db-21",
        "level": "Advance",
        "title": "Transaksi (ACID)",
        "exercises": [
          {
            "type": "mc",
            "q": "ACID singkatan dari:",
            "options": [
              "Atomicity, Consistency, Isolation, Durability",
              "Access, Create, Insert, Delete",
              "Aggregate, Condition, Index, Data",
              "All, Commit, Import, Dump"
            ],
            "a": 0,
            "explain": "Empat jaminan transaksi database."
          },
          {
            "type": "fill",
            "q": "Mulai sebuah transaksi:",
            "code": "___ TRANSACTION;",
            "accept": [
              "begin",
              "start"
            ],
            "explain": "BEGIN TRANSACTION memulai; COMMIT mengakhiri."
          },
          {
            "type": "mc",
            "q": "Atomicity menjamin:",
            "options": [
              "Semua langkah sukses atau semua dibatalkan",
              "Query selalu cepat",
              "Tabel tidak terhapus",
              "Data selalu unik"
            ],
            "a": 0,
            "explain": "Transfer bank: potong & tambah harus bersamaan."
          },
          {
            "type": "mc",
            "q": "ROLLBACK berfungsi untuk:",
            "options": [
              "Menyimpan perubahan",
              "Membatalkan perubahan dalam transaksi",
              "Menghapus tabel",
              "Membuat backup"
            ],
            "a": 1,
            "explain": "ROLLBACK kembali ke keadaan sebelum transaksi."
          },
          {
            "type": "arrange",
            "q": "Susun alur transfer saldo yang aman:",
            "blocks": [
              "BEGIN TRANSACTION",
              "UPDATE a SET saldo = saldo - 100",
              "UPDATE b SET saldo = saldo + 100",
              "COMMIT"
            ],
            "explain": "Bungkus kedua update dalam satu transaksi atomik."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #1: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #2: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #3: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #4: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #5: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          }
        ]
      },
      {
        "id": "db-22",
        "level": "Advance",
        "title": "Index & Denormalisasi",
        "exercises": [
          {
            "type": "mc",
            "q": "Denormalisasi kadang dipakai untuk:",
            "options": [
              "Mempercepat baca dengan mengorbankan redundansi",
              "Menghapus semua index",
              "Mengenkripsi tabel",
              "Memperlambat tulis"
            ],
            "a": 0,
            "explain": "Trade-off: sedikit duplikasi demi query baca yang cepat."
          },
          {
            "type": "fill",
            "q": "Lihat rancangan eksekusi query:",
            "code": "___ SELECT * FROM users WHERE email = ...;",
            "accept": [
              "explain"
            ],
            "explain": "EXPLAIN menunjukkan pemakaian index."
          },
          {
            "type": "mc",
            "q": "Index composite paling berguna bila:",
            "options": [
              "Query memfilter berdasarkan kolom pertama index",
              "Tabel kecil",
              "Tidak ada query",
              "Kolomnya tidak pernah dipakai"
            ],
            "a": 0,
            "explain": "Urutan kolom pada index menentukan efektivitasnya."
          },
          {
            "type": "mc",
            "q": "Kapan index justru merugikan?",
            "options": [
              "Tabel sangat kecil & sering ditulis",
              "Tabel besar dengan banyak SELECT",
              "Kolom sering di-WHERE",
              "Kolom sering di-JOIN"
            ],
            "a": 0,
            "explain": "Overhead index tak sepadan pada tabel kecil/serba-tulis."
          },
          {
            "type": "fill",
            "q": "Hapus index yang tak terpakai:",
            "code": "DROP ___ idx_lama;",
            "accept": [
              "index"
            ],
            "explain": "DROP INDEX membersihkan index yang tak diperlukan."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #6: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #7: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #8: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #9: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #10: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          }
        ]
      },
      {
        "id": "db-23",
        "level": "Advance",
        "title": "DB Lesson 23",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #11: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #12: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #13: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #14: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #15: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #16: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #17: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #18: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #19: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #20: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          }
        ]
      },
      {
        "id": "db-24",
        "level": "Advance",
        "title": "DB Lesson 24",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #21: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #22: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #23: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #24: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #25: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #26: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #27: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #28: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #29: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #30: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          }
        ]
      },
      {
        "id": "db-25",
        "level": "Advance",
        "title": "DB Lesson 25",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #31: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #32: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #33: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #34: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #35: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #36: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #37: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #38: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #39: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #40: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          }
        ]
      },
      {
        "id": "db-26",
        "level": "Advance",
        "title": "DB Lesson 26",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #41: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #42: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #43: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #44: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #45: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #46: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #47: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #48: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #49: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #50: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          }
        ]
      },
      {
        "id": "db-27",
        "level": "Advance",
        "title": "DB Lesson 27",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #51: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #52: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #53: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #54: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #55: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #56: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #57: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #58: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #59: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #60: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          }
        ]
      },
      {
        "id": "db-28",
        "level": "Advance",
        "title": "DB Lesson 28",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #61: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #62: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #63: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #64: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #65: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #66: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #67: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #68: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #69: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #70: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          }
        ]
      },
      {
        "id": "db-29",
        "level": "Advance",
        "title": "DB Lesson 29",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #71: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #72: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #73: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #74: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #75: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #76: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #77: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #78: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #79: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #80: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          }
        ]
      },
      {
        "id": "db-30",
        "level": "Advance",
        "title": "DB Lesson 30",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #81: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #82: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #83: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #84: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #85: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #86: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #87: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #88: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #89: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #90: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          }
        ]
      },
      {
        "id": "db-31",
        "level": "Advance",
        "title": "DB Lesson 31",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #91: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #92: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #93: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #94: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          },
          {
            "type": "mc",
            "q": "Arsitektur Database Advance #95: Replikasi Read-Replica pada basis data bertugas untuk:",
            "options": [
              "Membagi beban pembacaan data (SELECT query) ke beberapa node salinan server",
              "Menghapus transaksi gagal",
              "Mengunci seluruh tabel",
              "Membuat tabel sementara"
            ],
            "a": 0,
            "explain": "Read replica meningkatkan throughput baca secara horizontal."
          }
        ]
      }
    ]
  },
  {
    "id": "api",
    "name": "API",
    "icon": "🔌",
    "color": "#ff6b6b",
    "desc": "Komunikasi antar aplikasi",
    "lessons": [
      {
        "id": "api-1",
        "level": "Dasar",
        "title": "Konsep Dasar",
        "exercises": [
          {
            "type": "mc",
            "q": "API adalah:",
            "options": [
              "Antarmuka yang memungkinkan dua aplikasi saling berkomunikasi",
              "Sebuah bahasa pemrograman",
              "Tipe database",
              "Aplikasi untuk menulis kode"
            ],
            "a": 0,
            "explain": "API = kontrak cara saling memanggil antar software."
          },
          {
            "type": "fill",
            "q": "Format data paling umum dipakai API modern:",
            "code": "Content-Type: application/___",
            "accept": [
              "json"
            ],
            "explain": "JSON ringan dan mudah diparse."
          },
          {
            "type": "fill",
            "q": "Alamat spesifik tempat resource dilayani disebut:",
            "code": "GET /api/users/42 → ___ ini endpoint",
            "accept": [
              "endpoint"
            ],
            "explain": "Endpoint = URL layanan API."
          },
          {
            "type": "arrange",
            "q": "Alur request API yang benar:",
            "blocks": [
              "Kirim request",
              "Server proses",
              "Server kirim response",
              "Client terima & tampilkan"
            ],
            "explain": "Client → request → server → response → client."
          },
          {
            "type": "mc",
            "q": "Client pada konteks API adalah:",
            "options": [
              "Pihak yang mengirim request",
              "Server database",
              "Kabel jaringan",
              "Tipe JSON"
            ],
            "a": 0,
            "explain": "Client meminta; server melayani."
          },
          {
            "type": "mc",
            "q": "Fondasi API #1: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #2: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #3: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #4: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #5: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          }
        ]
      },
      {
        "id": "api-2",
        "level": "Dasar",
        "title": "HTTP Method",
        "exercises": [
          {
            "type": "mc",
            "q": "Method untuk MENGAMBIL data tanpa mengubahnya:",
            "options": [
              "GET",
              "POST",
              "DELETE",
              "PATCH"
            ],
            "a": 0,
            "explain": "GET idempoten dan aman — hanya baca."
          },
          {
            "type": "mc",
            "q": "Method untuk MEMBUAT data baru:",
            "options": [
              "GET",
              "POST",
              "DELETE",
              "HEAD"
            ],
            "a": 1,
            "explain": "POST = kirim/create data, biasanya di koleksi (POST /users)."
          },
          {
            "type": "fill",
            "q": "Method untuk MENGUBAH SELURUH data user id 5:",
            "code": "___ /users/5",
            "accept": [
              "put"
            ],
            "explain": "PUT = replace penuh resource."
          },
          {
            "type": "mc",
            "q": "PATCH bedanya dengan PUT:",
            "options": [
              "Sama saja",
              "PATCH ubah sebagian field saja",
              "PATCH hanya untuk hapus",
              "PUT wajib kirim semua field kecuali satu"
            ],
            "a": 1,
            "explain": "PATCH = perubahan parsial, PUT = penggantian penuh."
          },
          {
            "type": "fill",
            "q": "Method untuk menghapus resource:",
            "code": "___ /users/5",
            "accept": [
              "delete"
            ],
            "explain": "DELETE menghapus resource di URL itu."
          },
          {
            "type": "mc",
            "q": "Fondasi API #6: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #7: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #8: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #9: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #10: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          }
        ]
      },
      {
        "id": "api-3",
        "level": "Dasar",
        "title": "API Lesson 3",
        "exercises": [
          {
            "type": "mc",
            "q": "Fondasi API #11: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #12: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #13: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #14: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #15: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #16: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #17: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #18: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #19: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #20: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          }
        ]
      },
      {
        "id": "api-4",
        "level": "Dasar",
        "title": "API Lesson 4",
        "exercises": [
          {
            "type": "mc",
            "q": "Fondasi API #21: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #22: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #23: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #24: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #25: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #26: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #27: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #28: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #29: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #30: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          }
        ]
      },
      {
        "id": "api-5",
        "level": "Dasar",
        "title": "API Lesson 5",
        "exercises": [
          {
            "type": "mc",
            "q": "Fondasi API #31: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #32: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #33: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #34: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #35: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #36: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #37: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #38: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #39: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #40: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          }
        ]
      },
      {
        "id": "api-6",
        "level": "Dasar",
        "title": "API Lesson 6",
        "exercises": [
          {
            "type": "mc",
            "q": "Fondasi API #41: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #42: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #43: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #44: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #45: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #46: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #47: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #48: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #49: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #50: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          }
        ]
      },
      {
        "id": "api-7",
        "level": "Dasar",
        "title": "API Lesson 7",
        "exercises": [
          {
            "type": "mc",
            "q": "Fondasi API #51: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #52: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #53: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #54: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #55: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #56: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #57: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #58: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #59: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #60: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          }
        ]
      },
      {
        "id": "api-8",
        "level": "Dasar",
        "title": "API Lesson 8",
        "exercises": [
          {
            "type": "mc",
            "q": "Fondasi API #61: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #62: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #63: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #64: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #65: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #66: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #67: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #68: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #69: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #70: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          }
        ]
      },
      {
        "id": "api-9",
        "level": "Dasar",
        "title": "API Lesson 9",
        "exercises": [
          {
            "type": "mc",
            "q": "Fondasi API #71: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #72: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #73: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #74: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #75: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #76: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #77: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #78: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #79: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #80: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          }
        ]
      },
      {
        "id": "api-10",
        "level": "Dasar",
        "title": "API Lesson 10",
        "exercises": [
          {
            "type": "mc",
            "q": "Fondasi API #81: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #82: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #83: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #84: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #85: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #86: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #87: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #88: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #89: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          },
          {
            "type": "mc",
            "q": "Fondasi API #90: Status code HTTP 200 melambangkan:",
            "options": [
              "OK - Permintaan berhasil diproses oleh server",
              "Created",
              "Not Found",
              "Internal Server Error"
            ],
            "a": 0,
            "explain": "200 OK adalah kode status keberhasilan standar protokol HTTP."
          }
        ]
      },
      {
        "id": "api-11",
        "level": "Menengah",
        "title": "Status Code",
        "exercises": [
          {
            "type": "mc",
            "q": "200 OK berarti:",
            "options": [
              "Request sukses",
              "Data tidak ditemukan",
              "Server error",
              "Token habis"
            ],
            "a": 0,
            "explain": "2xx = sukses."
          },
          {
            "type": "mc",
            "q": "404 Not Found berarti:",
            "options": [
              "Server mati",
              "Resource tidak ada di server",
              "Format request salah",
              "Berhasil tapi tanpa body"
            ],
            "a": 1,
            "explain": "URL benar tapi resource-nya tidak ada."
          },
          {
            "type": "fill",
            "q": "Status code untuk \"belum login / token invalid\" (tulis nama statusnya):",
            "code": "HTTP/1.1 401 ___",
            "accept": [
              "unauthorized"
            ],
            "explain": "401 Unauthorized = autentikasi gagal."
          },
          {
            "type": "mc",
            "q": "500 Internal Server Error menandakan masalah di:",
            "options": [
              "Sisi client / salah input",
              "Sisi server / exception tak tertangani",
              "Jaringan user",
              "DNS"
            ],
            "a": 1,
            "explain": "5xx = kesalahan server."
          },
          {
            "type": "mc",
            "q": "201 Created dipakai ketika:",
            "options": [
              "Resource baru berhasil dibuat",
              "Request gagal",
              "User logout",
              "Cache basi"
            ],
            "a": 0,
            "explain": "Khas untuk respons POST yang sukses membuat resource."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #1: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #2: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #3: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #4: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #5: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          }
        ]
      },
      {
        "id": "api-12",
        "level": "Menengah",
        "title": "Header & Body",
        "exercises": [
          {
            "type": "mc",
            "q": "Header Content-Type memberi tahu:",
            "options": [
              "Format data di body request/response",
              "Nama server",
              "Jumlah baris",
              "Warna UI"
            ],
            "a": 0,
            "explain": "Mis. application/json vs text/html."
          },
          {
            "type": "fill",
            "q": "Kirim token autentikasi yang benar di header:",
            "code": "Authorization: ___ <token>",
            "accept": [
              "bearer"
            ],
            "explain": "Skema Bearer untuk token OAuth/JWT."
          },
          {
            "type": "mc",
            "q": "Body request pada umumnya kosong untuk method:",
            "options": [
              "GET",
              "POST",
              "PUT",
              "PATCH"
            ],
            "a": 0,
            "explain": "GET membawa parameter di URL, bukan body."
          },
          {
            "type": "mc",
            "q": "Accept header berfungsi untuk:",
            "options": [
              "Memberi tahu format respons yang diinginkan client",
              "Menentukan method",
              "Membuat user",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Accept: application/json → minta respons JSON."
          },
          {
            "type": "fill",
            "q": "Query parameter untuk pencarian pada URL:",
            "code": "GET /products?___=laptop",
            "accept": [
              "q",
              "search",
              "query"
            ],
            "explain": "Parameter di URL memfilter hasil."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #6: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #7: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #8: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #9: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #10: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          }
        ]
      },
      {
        "id": "api-13",
        "level": "Menengah",
        "title": "API Lesson 13",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #11: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #12: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #13: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #14: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #15: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #16: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #17: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #18: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #19: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #20: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          }
        ]
      },
      {
        "id": "api-14",
        "level": "Menengah",
        "title": "API Lesson 14",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #21: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #22: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #23: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #24: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #25: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #26: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #27: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #28: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #29: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #30: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          }
        ]
      },
      {
        "id": "api-15",
        "level": "Menengah",
        "title": "API Lesson 15",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #31: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #32: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #33: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #34: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #35: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #36: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #37: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #38: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #39: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #40: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          }
        ]
      },
      {
        "id": "api-16",
        "level": "Menengah",
        "title": "API Lesson 16",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #41: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #42: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #43: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #44: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #45: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #46: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #47: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #48: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #49: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #50: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          }
        ]
      },
      {
        "id": "api-17",
        "level": "Menengah",
        "title": "API Lesson 17",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #51: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #52: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #53: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #54: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #55: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #56: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #57: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #58: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #59: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #60: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          }
        ]
      },
      {
        "id": "api-18",
        "level": "Menengah",
        "title": "API Lesson 18",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #61: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #62: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #63: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #64: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #65: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #66: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #67: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #68: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #69: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #70: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          }
        ]
      },
      {
        "id": "api-19",
        "level": "Menengah",
        "title": "API Lesson 19",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #71: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #72: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #73: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #74: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #75: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #76: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #77: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #78: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #79: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #80: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          }
        ]
      },
      {
        "id": "api-20",
        "level": "Menengah",
        "title": "API Lesson 20",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #81: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #82: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #83: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #84: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #85: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #86: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #87: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #88: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #89: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          },
          {
            "type": "mc",
            "q": "Arsitektur API Menengah #90: Header HTTP Content-Type: application/json memberitahu penerima bahwa:",
            "options": [
              "Format muatan data (payload) request atau response berupa dokumen JSON",
              "Data berupa file gambar",
              "Data berupa teks mentah",
              "Data berupa HTML"
            ],
            "a": 0,
            "explain": "Content-Type menentukan format serialisasi data payload."
          }
        ]
      },
      {
        "id": "api-21",
        "level": "Advance",
        "title": "Autentikasi",
        "exercises": [
          {
            "type": "mc",
            "q": "API key vs token: token (JWT) biasanya:",
            "options": [
              "Berisi klaim terenkripsi tanda tangan & punya masa berlaku",
              "Lebih pendek dari key",
              "Tidak bisa dikedaluwarsa",
              "Hanya untuk GET"
            ],
            "a": 0,
            "explain": "JWT membawa payload (sub, exp) yang bisa diverifikasi."
          },
          {
            "type": "fill",
            "q": "JWT terdiri dari header, payload, dan:",
            "code": "xxx.yyy.___",
            "accept": [
              "zzz",
              "signature",
              "tanda tangan"
            ],
            "explain": "Tiga bagian dipisah titik; ketiga = signature."
          },
          {
            "type": "mc",
            "q": "OAuth 2 umumnya memberi:",
            "options": [
              "Access token dengan scope terbatas",
              "Password user ke client",
              "Akses root",
              "Koneksi database langsung"
            ],
            "a": 0,
            "explain": "Scope membatasi aksi yang boleh dilakukan token."
          },
          {
            "type": "mc",
            "q": "Menyimpan token di sisi client paling aman pada:",
            "options": [
              "localStorage (kebal XSS)",
              "httpOnly cookie (kebal XSS baca)",
              "URL query",
              "console.log"
            ],
            "a": 1,
            "explain": "httpOnly cookie tak bisa dibaca lewat JavaScript halaman."
          },
          {
            "type": "arrange",
            "q": "Susun alur login token yang benar:",
            "blocks": [
              "Client kirim kredensial",
              "Server verifikasi",
              "Server kembalikan token",
              "Client pakai token di request berikutnya"
            ],
            "explain": "Kredensial ditukar token sekali; sesudah itu pakai token."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #1: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #2: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #3: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #4: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #5: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          }
        ]
      },
      {
        "id": "api-22",
        "level": "Advance",
        "title": "Praktik Terbaik",
        "exercises": [
          {
            "type": "mc",
            "q": "Pagination pada list besar berfungsi untuk:",
            "options": [
              "Membagi hasil jadi halaman agar ringan",
              "Menghapus data",
              "Menambah kolom",
              "Mengurutkan alfabet"
            ],
            "a": 0,
            "explain": "mis. ?page=2&limit=20 — hindari mengirim semua sekaligus."
          },
          {
            "type": "fill",
            "q": "Batasi jumlah item per halaman:",
            "code": "GET /items?page=1&___=20",
            "accept": [
              "limit",
              "per_page",
              "size"
            ],
            "explain": "limit/per_page mengendalikan ukuran halaman."
          },
          {
            "type": "mc",
            "q": "Versioning API (mis. /api/v1/) berguna untuk:",
            "options": [
              "Mengubah API tanpa memecah client lama",
              "Mempercepat server",
              "Mengurangi data",
              "Membuat token"
            ],
            "a": 0,
            "explain": "v1 tetap hidup saat v2 dirilis."
          },
          {
            "type": "mc",
            "q": "Retry dengan exponential backoff berarti:",
            "options": [
              "Coba ulang dengan jeda yang makin panjang",
              "Kirim request tanpa henti",
              "Hentikan selamanya",
              "Hapus token"
            ],
            "a": 0,
            "explain": "Jeda tumbuh (mis. 1s, 2s, 4s) meredam lonjakan."
          },
          {
            "type": "fill",
            "q": "Cache respons GET dengan header:",
            "code": "___: max-age=3600",
            "accept": [
              "cache-control"
            ],
            "explain": "Cache-Control mengatur lama cache dipakai."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #6: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #7: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #8: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #9: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #10: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          }
        ]
      },
      {
        "id": "api-23",
        "level": "Advance",
        "title": "API Lesson 23",
        "exercises": [
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #11: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #12: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #13: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #14: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #15: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #16: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #17: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #18: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #19: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #20: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          }
        ]
      },
      {
        "id": "api-24",
        "level": "Advance",
        "title": "API Lesson 24",
        "exercises": [
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #21: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #22: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #23: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #24: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #25: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #26: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #27: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #28: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #29: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #30: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          }
        ]
      },
      {
        "id": "api-25",
        "level": "Advance",
        "title": "API Lesson 25",
        "exercises": [
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #31: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #32: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #33: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #34: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #35: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #36: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #37: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #38: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #39: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #40: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          }
        ]
      },
      {
        "id": "api-26",
        "level": "Advance",
        "title": "API Lesson 26",
        "exercises": [
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #41: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #42: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #43: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #44: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #45: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #46: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #47: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #48: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #49: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #50: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          }
        ]
      },
      {
        "id": "api-27",
        "level": "Advance",
        "title": "API Lesson 27",
        "exercises": [
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #51: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #52: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #53: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #54: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #55: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #56: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #57: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #58: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #59: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #60: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          }
        ]
      },
      {
        "id": "api-28",
        "level": "Advance",
        "title": "API Lesson 28",
        "exercises": [
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #61: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #62: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #63: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #64: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #65: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #66: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #67: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #68: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #69: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #70: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          }
        ]
      },
      {
        "id": "api-29",
        "level": "Advance",
        "title": "API Lesson 29",
        "exercises": [
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #71: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #72: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #73: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #74: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #75: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #76: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #77: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #78: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #79: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #80: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          }
        ]
      },
      {
        "id": "api-30",
        "level": "Advance",
        "title": "API Lesson 30",
        "exercises": [
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #81: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #82: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #83: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #84: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #85: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #86: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #87: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #88: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #89: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #90: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          }
        ]
      },
      {
        "id": "api-31",
        "level": "Advance",
        "title": "API Lesson 31",
        "exercises": [
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #91: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #92: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #93: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #94: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          },
          {
            "type": "mc",
            "q": "Keamanan & Skalabilitas API Advance #95: Mekanisme Rate Limiting pada API Gateway berguna untuk:",
            "options": [
              "Membatasi jumlah permintaan per unit waktu dari satu klien guna mencegah abuse dan DDoS",
              "Mempercepat internet klien",
              "Mengubah format database",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "Rate limiting melindungi ketersediaan resource API dari lonjakan beban berlebih."
          }
        ]
      }
    ]
  }
];

export { CONTENT_SQL };

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CONTENT_SQL };
}
