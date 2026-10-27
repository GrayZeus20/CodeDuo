/* CodeDuo — blok konten: topik "Elysia" (dipisah dari Blok Web).
 * 1 topik (elysia) × 31 pelajaran (10 Dasar, 10 Menengah, 11 Advance). Total 305 soal.
 * Engine di content.js (barrel) & app.js. Format tipe soal: mc | fill | code | preview | arrange.
 * ESM murni: dipakai Vite (browser) & Node (test).
 */
'use strict';

const CONTENT_ELYSIA = [
{
    "id": "elysia",
    "name": "Elysia",
    "icon": "🦊",
    "color": "#8b5cf6",
    "desc": "Framework API TypeScript untuk Bun",
    "lessons": [
      {
        "id": "elysia-1",
        "level": "Dasar",
        "title": "Pengenalan Elysia",
        "exercises": [
          {
            "type": "mc",
            "q": "Elysia adalah framework untuk",
            "options": [
              "PHP",
              "Ruby",
              "TypeScript/JavaScript",
              "MATLAB"
            ],
            "a": 2,
            "explain": "Elysia adalah framework web TypeScript/JS."
          },
          {
            "type": "mc",
            "q": "Elysia dirancang berjalan terutama di runtime",
            "options": [
              "JVM",
              "Bun",
              "MATLAB",
              "Unity"
            ],
            "a": 1,
            "explain": "Elysia dioptimalkan untuk Bun."
          },
          {
            "type": "mc",
            "q": "Membuat instance aplikasi Elysia memakai",
            "options": [
              "elysia()",
              "createApp()",
              "new Server()",
              "new Elysia()"
            ],
            "a": 3,
            "explain": "new Elysia() membuat aplikasi."
          },
          {
            "type": "mc",
            "q": "Menjalankan server biasanya memakai",
            "options": [
              ".listen(3000)",
              ".serve(3000)",
              ".start(3000)",
              ".run(3000)"
            ],
            "a": 0,
            "explain": "listen memulai server pada port."
          },
          {
            "type": "mc",
            "q": "Elysia menekankan",
            "options": [
              "CSS",
              "SQL engine",
              "type-safety end-to-end",
              "GUI"
            ],
            "a": 2,
            "explain": "Elysia unggul pada tipe yang aman."
          },
          {
            "type": "mc",
            "q": "Bahasa utama Elysia adalah",
            "options": [
              "Ruby",
              "PHP",
              "TypeScript",
              "Kotlin"
            ],
            "a": 2,
            "explain": "Elysia ditulis untuk TypeScript/JS."
          },
          {
            "type": "mc",
            "q": "Dokumentasi API otomatis bisa lewat",
            "options": [
              "CSS",
              "plugin swagger/OpenAPI",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Plugin menghasilkan dokumentasi OpenAPI."
          },
          {
            "type": "mc",
            "q": "Mengimpor Elysia memakai",
            "options": [
              "import elysia from 'elysia'",
              "import { Elysia } from 'elysia'",
              "require elysia",
              "use elysia"
            ],
            "a": 1,
            "explain": "Elysia diekspor sebagai named import."
          },
          {
            "type": "mc",
            "q": "Elysia cocok untuk membangun",
            "options": [
              "server dan API",
              "CSS",
              "database",
              "mobile UI"
            ],
            "a": 0,
            "explain": "Elysia untuk server/API."
          },
          {
            "type": "mc",
            "q": "Menjalankan skrip Bun memakai",
            "options": [
              "node file.ts selalu",
              "ts-node wajib",
              "php file.ts",
              "bun run file.ts"
            ],
            "a": 3,
            "explain": "bun run menjalankan berkas."
          }
        ]
      },
      {
        "id": "elysia-2",
        "level": "Dasar",
        "title": "Routing Dasar",
        "exercises": [
          {
            "type": "mc",
            "q": "Mendefinisikan route GET memakai",
            "options": [
              ".fetch('/path')",
              ".route('GET')",
              ".read('/path')",
              ".get('/path', handler)"
            ],
            "a": 3,
            "explain": ".get mendaftar handler GET."
          },
          {
            "type": "mc",
            "q": "Mendefinisikan route POST memakai",
            "options": [
              ".post(...)",
              ".send(...)",
              ".create(...)",
              ".write(...)"
            ],
            "a": 0,
            "explain": ".post menangani POST."
          },
          {
            "type": "mc",
            "q": "Parameter path dinamis ditulis",
            "options": [
              "'/user/{id}'",
              "'/user/:id'",
              "'/user/[id]'",
              "'/user/<id>'"
            ],
            "a": 1,
            "explain": "Titik dua menandai parameter path."
          },
          {
            "type": "mc",
            "q": "Mengakses parameter path memakai",
            "options": [
              "query.id",
              "body.id",
              "ctx.id",
              "params.id"
            ],
            "a": 3,
            "explain": "params berisi nilai segmen path."
          },
          {
            "type": "mc",
            "q": "Mengakses query string memakai",
            "options": [
              "params.nama",
              "body.nama",
              "search.nama",
              "query.nama"
            ],
            "a": 3,
            "explain": "query berisi parameter query."
          },
          {
            "type": "mc",
            "q": "Membaca body request JSON memakai",
            "options": [
              "data",
              "payload",
              "body",
              "form"
            ],
            "a": 2,
            "explain": "body berisi data request."
          },
          {
            "type": "mc",
            "q": "Mengembalikan JSON dari handler dengan",
            "options": [
              "return hanya string",
              "write json",
              "CSS",
              "return objek biasa"
            ],
            "a": 3,
            "explain": "Mengembalikan objek menghasilkan JSON."
          },
          {
            "type": "mc",
            "q": "Mengelompokkan route memakai",
            "options": [
              ".group(...)",
              ".cluster(...)",
              ".section(...)",
              ".folder(...)"
            ],
            "a": 0,
            "explain": "group mengelompokkan route."
          },
          {
            "type": "mc",
            "q": "Menambahkan prefix route memakai",
            "options": [
              ".prefix()",
              ".base()",
              ".group dengan prefix",
              ".root()"
            ],
            "a": 2,
            "explain": "Prefix diterapkan lewat group."
          },
          {
            "type": "mc",
            "q": "Mendefinisikan route wildcard memakai",
            "options": [
              "'/all'",
              "'/*'",
              "'/any'",
              "'/star'"
            ],
            "a": 1,
            "explain": "Wildcard menangkap banyak path."
          }
        ]
      },
      {
        "id": "elysia-3",
        "level": "Dasar",
        "title": "Handler & Context",
        "exercises": [
          {
            "type": "mc",
            "q": "Context handler berisi",
            "options": [
              "CSS",
              "params, query, body, dan lain-lain",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Context menyediakan input request."
          },
          {
            "type": "mc",
            "q": "Mengembalikan status custom memakai",
            "options": [
              "status(code, body)",
              "res.status",
              "return code",
              "CSS"
            ],
            "a": 0,
            "explain": "Helper status mengatur kode HTTP."
          },
          {
            "type": "mc",
            "q": "Mengembalikan error 404 memakai",
            "options": [
              "throw 404",
              "status(404, ...)",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "status 404 menandakan tidak ditemukan."
          },
          {
            "type": "mc",
            "q": "Handler dapat berupa",
            "options": [
              "hanya string",
              "CSS",
              "fungsi async",
              "route"
            ],
            "a": 2,
            "explain": "Handler dapat async untuk operasi IO."
          },
          {
            "type": "mc",
            "q": "Mengakses header request memakai",
            "options": [
              "heads",
              "meta",
              "headers",
              "top"
            ],
            "a": 2,
            "explain": "headers berisi header request."
          },
          {
            "type": "mc",
            "q": "Menggunakan cookie memakai",
            "options": [
              "cookies",
              "jar",
              "store",
              "cookie"
            ],
            "a": 3,
            "explain": "Context menyediakan cookie."
          },
          {
            "type": "mc",
            "q": "Menyimpan nilai per request memakai",
            "options": [
              "cache",
              "store",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "store menyimpan state per request."
          },
          {
            "type": "mc",
            "q": "Mengembalikan teks biasa memakai",
            "options": [
              "return object",
              "CSS",
              "return string",
              "route"
            ],
            "a": 2,
            "explain": "String menghasilkan respons teks."
          },
          {
            "type": "mc",
            "q": "Redirect memakai",
            "options": [
              "go(url)",
              "redirect(url)",
              "nav(url)",
              "CSS"
            ],
            "a": 1,
            "explain": "redirect mengalihkan."
          },
          {
            "type": "mc",
            "q": "Handler harus mengembalikan",
            "options": [
              "respons yang valid",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Handler wajib mengembalikan respons."
          }
        ]
      },
      {
        "id": "elysia-4",
        "level": "Dasar",
        "title": "Validasi & Schema",
        "exercises": [
          {
            "type": "mc",
            "q": "Schema pada route berguna untuk",
            "options": [
              "CSS",
              "memvalidasi input",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Schema memvalidasi bentuk input."
          },
          {
            "type": "mc",
            "q": "Elysia memakai library validasi",
            "options": [
              "TypeBox",
              "Jest",
              "Composer",
              "PHPUnit"
            ],
            "a": 0,
            "explain": "Elysia memakai TypeBox untuk schema."
          },
          {
            "type": "mc",
            "q": "Mendefinisikan schema body memakai",
            "options": [
              "body: t.Object({...})",
              "body: {}",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "t.Object mendefinisikan bentuk body."
          },
          {
            "type": "mc",
            "q": "Tipe string pada schema memakai",
            "options": [
              "t.Text",
              "string",
              "t.String()",
              "CSS"
            ],
            "a": 2,
            "explain": "t.String() menandai tipe string."
          },
          {
            "type": "mc",
            "q": "Tipe angka memakai",
            "options": [
              "t.Int",
              "t.Number()",
              "number",
              "CSS"
            ],
            "a": 1,
            "explain": "t.Number() menandai angka."
          },
          {
            "type": "mc",
            "q": "Field opsional memakai",
            "options": [
              "optional()",
              "?",
              "CSS",
              "t.Optional(...)"
            ],
            "a": 3,
            "explain": "t.Optional menandai field opsional."
          },
          {
            "type": "mc",
            "q": "Validasi gagal menghasilkan status",
            "options": [
              "422",
              "404",
              "500",
              "301"
            ],
            "a": 0,
            "explain": "Validasi gagal umumnya 422."
          },
          {
            "type": "mc",
            "q": "Schema params memvalidasi",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "parameter path"
            ],
            "a": 3,
            "explain": "params schema memvalidasi path."
          },
          {
            "type": "mc",
            "q": "Schema query memvalidasi",
            "options": [
              "CSS",
              "route",
              "query string",
              "migrasi"
            ],
            "a": 2,
            "explain": "query schema memvalidasi query."
          },
          {
            "type": "mc",
            "q": "Schema penting untuk",
            "options": [
              "CSS",
              "route",
              "kontrak API yang konsisten",
              "migrasi"
            ],
            "a": 2,
            "explain": "Schema menjaga kontrak API."
          }
        ]
      },
      {
        "id": "elysia-5",
        "level": "Dasar",
        "title": "Type Safety",
        "exercises": [
          {
            "type": "mc",
            "q": "TypeScript membantu saat",
            "options": [
              "runtime wajib",
              "pengembangan dan editor",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "TypeScript memberi pemeriksaan saat pengembangan."
          },
          {
            "type": "mc",
            "q": "Tipe pada Elysia mengalir ke",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "handler dan client"
            ],
            "a": 3,
            "explain": "Tipe diteruskan ke handler."
          },
          {
            "type": "mc",
            "q": "Inferensi tipe body berarti",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "body bertipe sesuai schema"
            ],
            "a": 3,
            "explain": "Schema menurunkan tipe body."
          },
          {
            "type": "mc",
            "q": "Menjalankan TypeScript butuh",
            "options": [
              "CSS",
              "route",
              "transpilasi/runtime TS seperti Bun",
              "migrasi"
            ],
            "a": 2,
            "explain": "Bun menjalankan TS langsung."
          },
          {
            "type": "mc",
            "q": "Tipe any sebaiknya",
            "options": [
              "selalu dipakai",
              "dihindari bila memungkinkan",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "any mematikan pemeriksaan tipe."
          },
          {
            "type": "mc",
            "q": "TypeScript tidak menggantikan validasi runtime karena",
            "options": [
              "CSS",
              "route",
              "input eksternal tetap tak tepercaya",
              "migrasi"
            ],
            "a": 2,
            "explain": "Validasi runtime tetap perlu."
          },
          {
            "type": "mc",
            "q": "tsconfig mengatur",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "perilaku compiler TypeScript"
            ],
            "a": 3,
            "explain": "tsconfig mengatur TypeScript."
          },
          {
            "type": "mc",
            "q": "Strict mode TypeScript membuat",
            "options": [
              "pemeriksaan tipe lebih ketat",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "strict menambah ketatnya pemeriksaan."
          },
          {
            "type": "mc",
            "q": "Tipe union memakai",
            "options": [
              "|",
              "&",
              "+",
              "*"
            ],
            "a": 0,
            "explain": "Tanda | menyatakan union."
          },
          {
            "type": "mc",
            "q": "Tipe intersection memakai",
            "options": [
              "|",
              "+",
              "&",
              "*"
            ],
            "a": 2,
            "explain": "Tanda & menyatakan irisan tipe."
          }
        ]
      },
      {
        "id": "elysia-6",
        "level": "Dasar",
        "title": "Response & Status",
        "exercises": [
          {
            "type": "mc",
            "q": "Status 200 berarti",
            "options": [
              "not found",
              "error server",
              "sukses",
              "unauthorized"
            ],
            "a": 2,
            "explain": "200 OK menandakan sukses."
          },
          {
            "type": "mc",
            "q": "Status 201 berarti",
            "options": [
              "tidak ditemukan",
              "error",
              "redirect",
              "dibuat"
            ],
            "a": 3,
            "explain": "201 Created menandakan pembuatan."
          },
          {
            "type": "mc",
            "q": "Status 400 berarti",
            "options": [
              "sukses",
              "bad request",
              "redirect",
              "created"
            ],
            "a": 1,
            "explain": "400 menandakan request tidak valid."
          },
          {
            "type": "mc",
            "q": "Status 401 berarti",
            "options": [
              "sukses",
              "created",
              "redirect",
              "unauthorized"
            ],
            "a": 3,
            "explain": "401 menandakan belum terautentikasi."
          },
          {
            "type": "mc",
            "q": "Status 403 berarti",
            "options": [
              "forbidden",
              "sukses",
              "created",
              "redirect"
            ],
            "a": 0,
            "explain": "403 menandakan terlarang."
          },
          {
            "type": "mc",
            "q": "Status 404 berarti",
            "options": [
              "tidak ditemukan",
              "sukses",
              "created",
              "error server"
            ],
            "a": 0,
            "explain": "404 menandakan resource tidak ada."
          },
          {
            "type": "mc",
            "q": "Status 500 berarti",
            "options": [
              "sukses",
              "error server",
              "created",
              "redirect"
            ],
            "a": 1,
            "explain": "500 menandakan error internal."
          },
          {
            "type": "mc",
            "q": "Mengembalikan header custom memakai",
            "options": [
              "set.headers",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "set.headers mengatur header respons."
          },
          {
            "type": "mc",
            "q": "Mengembalikan file memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "file(path)"
            ],
            "a": 3,
            "explain": "file mengirim berkas."
          },
          {
            "type": "mc",
            "q": "Status 204 berarti",
            "options": [
              "sukses tanpa konten",
              "error",
              "created",
              "redirect"
            ],
            "a": 0,
            "explain": "204 No Content tanpa body."
          }
        ]
      },
      {
        "id": "elysia-7",
        "level": "Dasar",
        "title": "Plugin Dasar",
        "exercises": [
          {
            "type": "mc",
            "q": "Plugin di Elysia berguna untuk",
            "options": [
              "CSS",
              "route",
              "mengelompokkan fitur yang dapat dipakai ulang",
              "migrasi"
            ],
            "a": 2,
            "explain": "Plugin memisahkan dan memakai ulang fitur."
          },
          {
            "type": "mc",
            "q": "Membuat plugin berupa",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "instance Elysia yang diekspor"
            ],
            "a": 3,
            "explain": "Plugin adalah instance Elysia."
          },
          {
            "type": "mc",
            "q": "Memakai plugin memakai",
            "options": [
              ".plug()",
              ".add()",
              ".mount()",
              ".use(plugin)"
            ],
            "a": 3,
            "explain": "use mendaftarkan plugin."
          },
          {
            "type": "mc",
            "q": "Plugin dapat menambah",
            "options": [
              "CSS",
              "route",
              "route, decorator, dan hook",
              "migrasi"
            ],
            "a": 2,
            "explain": "Plugin menambah kemampuan aplikasi."
          },
          {
            "type": "mc",
            "q": "Decorator menambah",
            "options": [
              "CSS",
              "properti pada context",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "decorate menambah properti context."
          },
          {
            "type": "mc",
            "q": "Plugin autentikasi biasanya menambah",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "pemeriksaan sesi/token"
            ],
            "a": 3,
            "explain": "Plugin auth memeriksa kredensial."
          },
          {
            "type": "mc",
            "q": "Plugin logging menambah",
            "options": [
              "CSS",
              "route",
              "pencatatan request",
              "migrasi"
            ],
            "a": 2,
            "explain": "Plugin log mencatat aktivitas."
          },
          {
            "type": "mc",
            "q": "Plugin CORS membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "mengatur akses lintas origin"
            ],
            "a": 3,
            "explain": "Plugin CORS mengatur header CORS."
          },
          {
            "type": "mc",
            "q": "Plugin dapat bersifat scoped sehingga",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "hanya berlaku pada grup"
            ],
            "a": 3,
            "explain": "Scope membatasi efek plugin."
          },
          {
            "type": "mc",
            "q": "Membuat plugin kecil lebih mudah",
            "options": [
              "CSS",
              "route",
              "diuji dan dipakai ulang",
              "migrasi"
            ],
            "a": 2,
            "explain": "Plugin kecil lebih modular."
          }
        ]
      },
      {
        "id": "elysia-8",
        "level": "Dasar",
        "title": "Decorator & Store",
        "exercises": [
          {
            "type": "mc",
            "q": "Menambah properti context memakai",
            "options": [
              ".add(...)",
              ".inject(...)",
              ".decorate(...)",
              ".prop(...)"
            ],
            "a": 2,
            "explain": "decorate menambah properti."
          },
          {
            "type": "mc",
            "q": "Mendeklarasikan tipe decorator memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              ".decorate({ as: 'type' })"
            ],
            "a": 3,
            "explain": "Opsi as mendeklarasikan tipe decorator."
          },
          {
            "type": "mc",
            "q": "Store menyimpan state per request",
            "options": [
              "selamanya",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "store adalah penyimpanan per request."
          },
          {
            "type": "mc",
            "q": "Store dapat diakses di handler",
            "options": [
              "CSS",
              "route",
              "store.nama",
              "migrasi"
            ],
            "a": 2,
            "explain": "store tersedia pada context."
          },
          {
            "type": "mc",
            "q": "Menetapkan store awal memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "store: {...} pada constructor"
            ],
            "a": 3,
            "explain": "Store awal diberikan saat membuat instance."
          },
          {
            "type": "mc",
            "q": "Decorator dipakai ulang lewat",
            "options": [
              "CSS",
              "plugin",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Plugin membagikan decorator."
          },
          {
            "type": "mc",
            "q": "Tipe decorator penting agar",
            "options": [
              "TypeScript mengenali properti",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Deklarasi tipe menjaga keamanan tipe."
          },
          {
            "type": "mc",
            "q": "State global aplikasi disimpan di",
            "options": [
              "store saat pembuatan instance",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Store instance menyimpan state aplikasi."
          },
          {
            "type": "mc",
            "q": "Membedakan decorator dan store karena",
            "options": [
              "sama",
              "CSS",
              "decorator = fungsi/properti, store = data",
              "route"
            ],
            "a": 2,
            "explain": "Decorator menambah kemampuan; store menyimpan data."
          },
          {
            "type": "mc",
            "q": "Menghindari state global mutable berlebihan penting untuk",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "keamanan data antar request"
            ],
            "a": 3,
            "explain": "State bersama bisa bocor antar request."
          }
        ]
      },
      {
        "id": "elysia-9",
        "level": "Dasar",
        "title": "Middleware/Hook Dasar",
        "exercises": [
          {
            "type": "mc",
            "q": "Hook menjalankan logika pada",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "titik tertentu siklus request"
            ],
            "a": 3,
            "explain": "Hook menjalankan kode pada tahap tertentu."
          },
          {
            "type": "mc",
            "q": "Hook sebelum handler adalah",
            "options": [
              "beforeHandle",
              "afterHandle",
              "onError",
              "CSS"
            ],
            "a": 0,
            "explain": "beforeHandle berjalan sebelum handler."
          },
          {
            "type": "mc",
            "q": "Hook setelah handler adalah",
            "options": [
              "beforeHandle",
              "afterHandle",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "afterHandle berjalan setelah handler."
          },
          {
            "type": "mc",
            "q": "Hook untuk error adalah",
            "options": [
              "onFail",
              "CSS",
              "onError",
              "route"
            ],
            "a": 2,
            "explain": "onError menangani error."
          },
          {
            "type": "mc",
            "q": "Middleware autentikasi biasanya memakai",
            "options": [
              "beforeHandle",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "beforeHandle memeriksa sebelum handler."
          },
          {
            "type": "mc",
            "q": "Hook transform dapat mengubah",
            "options": [
              "CSS",
              "route",
              "request atau respons",
              "migrasi"
            ],
            "a": 2,
            "explain": "Transformasi memodifikasi data."
          },
          {
            "type": "mc",
            "q": "onBeforeHandle berlaku per route group",
            "options": [
              "ya, sesuai scope",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Hook berlaku sesuai scope-nya."
          },
          {
            "type": "mc",
            "q": "Membatalkan request di beforeHandle memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "mengembalikan respons/status"
            ],
            "a": 3,
            "explain": "Mengembalikan respons menghentikan alur."
          },
          {
            "type": "mc",
            "q": "Hook berguna untuk",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "logging, auth, dan validasi"
            ],
            "a": 3,
            "explain": "Hook menangani lintas-potong."
          },
          {
            "type": "mc",
            "q": "Hook berlebihan dapat",
            "options": [
              "CSS",
              "route",
              "menambah kompleksitas",
              "migrasi"
            ],
            "a": 2,
            "explain": "Banyak hook menyulitkan pelacakan."
          }
        ]
      },
      {
        "id": "elysia-10",
        "level": "Dasar",
        "title": "Testing Dasar",
        "exercises": [
          {
            "type": "mc",
            "q": "Menguji route Elysia biasanya dengan",
            "options": [
              "app.run()",
              "CSS",
              "app.handle(request)",
              "route"
            ],
            "a": 2,
            "explain": "handle memproses request di test."
          },
          {
            "type": "mc",
            "q": "Framework test JS populer adalah",
            "options": [
              "PHPUnit",
              "Jest/Vitest atau bun test",
              "RSpec",
              "Composer"
            ],
            "a": 1,
            "explain": "Runner JS untuk test."
          },
          {
            "type": "mc",
            "q": "bun test dijalankan dengan",
            "options": [
              "bun run test",
              "bun test",
              "bun spec",
              "test bun"
            ],
            "a": 1,
            "explain": "bun test menjalankan test."
          },
          {
            "type": "mc",
            "q": "Assertion status memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "expect(res.status).toBe(200)"
            ],
            "a": 3,
            "explain": "Assertion memeriksa status."
          },
          {
            "type": "mc",
            "q": "Test API sebaiknya menguji",
            "options": [
              "kontrak dan validasi",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Test API memverifikasi kontrak."
          },
          {
            "type": "mc",
            "q": "Mocking database pada test penting agar",
            "options": [
              "CSS",
              "route",
              "test cepat dan terisolasi",
              "migrasi"
            ],
            "a": 2,
            "explain": "Mock menghindari dependensi nyata."
          },
          {
            "type": "mc",
            "q": "Test perilaku lebih stabil dari",
            "options": [
              "CSS",
              "route",
              "test implementasi",
              "migrasi"
            ],
            "a": 2,
            "explain": "Perilaku jarang berubah."
          },
          {
            "type": "mc",
            "q": "Coverage mengukur",
            "options": [
              "CSS",
              "bagian kode teruji",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Coverage menunjukkan cakupan."
          },
          {
            "type": "mc",
            "q": "Menjalankan test di CI membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "mendeteksi regresi"
            ],
            "a": 3,
            "explain": "CI menjalankan test otomatis."
          },
          {
            "type": "mc",
            "q": "Test validasi gagal memeriksa",
            "options": [
              "status 200",
              "CSS",
              "route",
              "status 422"
            ],
            "a": 3,
            "explain": "Validasi gagal umumnya 422."
          }
        ]
      },
      {
        "id": "elysia-11",
        "level": "Menengah",
        "title": "Schema Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "Schema respons bisa didefinisikan untuk",
            "options": [
              "memvalidasi/menghasilkan output",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Schema response menjaga bentuk output."
          },
          {
            "type": "mc",
            "q": "Nested object pada schema memakai",
            "options": [
              "t.Object bersarang",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Object dapat bersarang."
          },
          {
            "type": "mc",
            "q": "Array pada schema memakai",
            "options": [
              "t.List",
              "CSS",
              "route",
              "t.Array(...)"
            ],
            "a": 3,
            "explain": "t.Array menandai array."
          },
          {
            "type": "mc",
            "q": "Enum pada schema memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "t.Union([...]) atau t.Literal"
            ],
            "a": 3,
            "explain": "Union/Literal membatasi nilai."
          },
          {
            "type": "mc",
            "q": "Transformasi nilai memakai",
            "options": [
              "CSS",
              "t.Transform",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Transform mengubah nilai validasi."
          },
          {
            "type": "mc",
            "q": "Schema kustom untuk format khusus memakai",
            "options": [
              "t.String({ format })",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Format memvalidasi string khusus."
          },
          {
            "type": "mc",
            "q": "Default value pada schema memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "t.Optional dengan default"
            ],
            "a": 3,
            "explain": "Default mengisi nilai kosong."
          },
          {
            "type": "mc",
            "q": "Validasi referensi silang memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "custom check/refine"
            ],
            "a": 3,
            "explain": "Pemeriksaan kustom menangani aturan khusus."
          },
          {
            "type": "mc",
            "q": "Schema bersama didefinisikan di",
            "options": [
              "CSS",
              "modul terpisah agar dipakai ulang",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Schema modular dapat dipakai ulang."
          },
          {
            "type": "mc",
            "q": "Schema penting untuk",
            "options": [
              "CSS",
              "keamanan dan konsistensi",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Schema melindungi batas API."
          }
        ]
      },
      {
        "id": "elysia-12",
        "level": "Menengah",
        "title": "Autentikasi & Keamanan",
        "exercises": [
          {
            "type": "mc",
            "q": "Autentikasi sering memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "token/JWT atau sesi"
            ],
            "a": 3,
            "explain": "Token/JWT umum untuk API."
          },
          {
            "type": "mc",
            "q": "Menyimpan password sebaiknya memakai",
            "options": [
              "md5",
              "hash kuat (bcrypt/argon2)",
              "plain",
              "CSS"
            ],
            "a": 1,
            "explain": "Hashing kuat melindungi password."
          },
          {
            "type": "mc",
            "q": "Verifikasi JWT penting untuk",
            "options": [
              "CSS",
              "memastikan token sah",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Verifikasi mencegah token palsu."
          },
          {
            "type": "mc",
            "q": "Menyimpan rahasia JWT di",
            "options": [
              "kode klien",
              "environment/secret manager",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Rahasia dijaga di server."
          },
          {
            "type": "mc",
            "q": "Rate limiting membantu mencegah",
            "options": [
              "abuse/brute force",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Rate limit membatasi request."
          },
          {
            "type": "mc",
            "q": "CORS diatur untuk",
            "options": [
              "CSS",
              "route",
              "membatasi origin yang diizinkan",
              "migrasi"
            ],
            "a": 2,
            "explain": "CORS mengatur sumber yang boleh mengakses."
          },
          {
            "type": "mc",
            "q": "Header keamanan seperti CSP membantu mencegah",
            "options": [
              "injeksi skrip",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "CSP membatasi sumber skrip."
          },
          {
            "type": "mc",
            "q": "Validasi input mencegah",
            "options": [
              "injeksi dan data tak valid",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Validasi menjaga integritas."
          },
          {
            "type": "mc",
            "q": "Menggunakan HTTPS penting untuk",
            "options": [
              "melindungi data transit",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi data."
          },
          {
            "type": "mc",
            "q": "Log tidak boleh berisi",
            "options": [
              "CSS",
              "data sensitif",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Log menghindari data sensitif."
          }
        ]
      },
      {
        "id": "elysia-13",
        "level": "Menengah",
        "title": "Database & ORM",
        "exercises": [
          {
            "type": "mc",
            "q": "Elysia tidak memaksa ORM tertentu sehingga",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "bisa memilih sesuai kebutuhan"
            ],
            "a": 3,
            "explain": "Elysia fleksibel terhadap ORM."
          },
          {
            "type": "mc",
            "q": "ORM populer untuk Bun adalah",
            "options": [
              "CSS",
              "Drizzle atau Prisma",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Drizzle/Prisma umum dipakai."
          },
          {
            "type": "mc",
            "q": "Query berparameter penting untuk",
            "options": [
              "CSS",
              "route",
              "mencegah SQL injection",
              "migrasi"
            ],
            "a": 2,
            "explain": "Parameter memisahkan data dan query."
          },
          {
            "type": "mc",
            "q": "Transaksi database menjaga",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "atomisitas operasi"
            ],
            "a": 3,
            "explain": "Transaksi memastikan semua atau tidak sama sekali."
          },
          {
            "type": "mc",
            "q": "Connection pooling mengatur",
            "options": [
              "CSS",
              "route",
              "jumlah koneksi DB",
              "migrasi"
            ],
            "a": 2,
            "explain": "Pooling membatasi koneksi."
          },
          {
            "type": "mc",
            "q": "Migration mencatat",
            "options": [
              "CSS",
              "perubahan skema",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Migration menyimpan riwayat skema."
          },
          {
            "type": "mc",
            "q": "Index mempercepat",
            "options": [
              "pencarian kolom",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Index mempercepat query."
          },
          {
            "type": "mc",
            "q": "Mengambil data berelasi menghindari N+1 dengan",
            "options": [
              "join/eager load",
              "loop query",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Join/eager loading mengurangi query."
          },
          {
            "type": "mc",
            "q": "Menyimpan rahasia koneksi di",
            "options": [
              "kode klien",
              "CSS",
              "environment",
              "route"
            ],
            "a": 2,
            "explain": "Rahasia koneksi dijaga."
          },
          {
            "type": "mc",
            "q": "Validasi sebelum menyimpan penting untuk",
            "options": [
              "CSS",
              "route",
              "integritas data",
              "migrasi"
            ],
            "a": 2,
            "explain": "Validasi menjaga data bersih."
          }
        ]
      },
      {
        "id": "elysia-14",
        "level": "Menengah",
        "title": "Websocket & Realtime",
        "exercises": [
          {
            "type": "mc",
            "q": "Elysia mendukung websocket lewat",
            "options": [
              "plugin/ws handler",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Elysia menyediakan dukungan websocket."
          },
          {
            "type": "mc",
            "q": "Websocket memungkinkan",
            "options": [
              "komunikasi dua arah realtime",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Websocket mengirim data dua arah."
          },
          {
            "type": "mc",
            "q": "Menangani event pesan memakai",
            "options": [
              "CSS",
              "route",
              "handler pesan/onMessage",
              "migrasi"
            ],
            "a": 2,
            "explain": "Handler pesan menerima data."
          },
          {
            "type": "mc",
            "q": "Broadcast ke banyak klien memerlukan",
            "options": [
              "manajemen koneksi",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Perlu melacak koneksi aktif."
          },
          {
            "type": "mc",
            "q": "Autentikasi websocket penting pada",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "koneksi awal"
            ],
            "a": 3,
            "explain": "Verifikasi saat handshake."
          },
          {
            "type": "mc",
            "q": "Server-Sent Events cocok untuk",
            "options": [
              "aliran data satu arah",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "SSE mengirim satu arah dari server."
          },
          {
            "type": "mc",
            "q": "Menutup koneksi harus membersihkan",
            "options": [
              "CSS",
              "route",
              "resource terkait",
              "migrasi"
            ],
            "a": 2,
            "explain": "Cleanup mencegah kebocoran."
          },
          {
            "type": "mc",
            "q": "Heartbeat membantu",
            "options": [
              "CSS",
              "mendeteksi koneksi mati",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Heartbeat menjaga koneksi hidup."
          },
          {
            "type": "mc",
            "q": "Scale websocket memerlukan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "adapter pub/sub bersama"
            ],
            "a": 3,
            "explain": "Pub/sub menyinkronkan antar instance."
          },
          {
            "type": "mc",
            "q": "Realtime memerlukan penanganan backpressure",
            "options": [
              "ya",
              "tidak",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Backpressure menjaga klien lambat."
          }
        ]
      },
      {
        "id": "elysia-15",
        "level": "Menengah",
        "title": "File Upload & Streaming",
        "exercises": [
          {
            "type": "mc",
            "q": "Menerima upload di Elysia memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "file pada body/form"
            ],
            "a": 3,
            "explain": "Context menyediakan berkas unggahan."
          },
          {
            "type": "mc",
            "q": "Validasi tipe berkas penting untuk",
            "options": [
              "CSS",
              "route",
              "mencegah berkas berbahaya",
              "migrasi"
            ],
            "a": 2,
            "explain": "Validasi mencegah risiko."
          },
          {
            "type": "mc",
            "q": "Membatasi ukuran unggahan penting untuk",
            "options": [
              "mencegah penyalahgunaan",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Batas ukuran melindungi server."
          },
          {
            "type": "mc",
            "q": "Mengirim file ke klien memakai",
            "options": [
              "CSS",
              "route",
              "file(path)",
              "migrasi"
            ],
            "a": 2,
            "explain": "file mengirim berkas."
          },
          {
            "type": "mc",
            "q": "Streaming respons membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "pengiriman data besar"
            ],
            "a": 3,
            "explain": "Streaming mengurangi memori."
          },
          {
            "type": "mc",
            "q": "Menyimpan berkas sebaiknya di",
            "options": [
              "storage/objek storage",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Object storage cocok untuk berkas."
          },
          {
            "type": "mc",
            "q": "Nama berkas pengguna sebaiknya",
            "options": [
              "dipakai apa adanya",
              "CSS",
              "disanitasi",
              "route"
            ],
            "a": 2,
            "explain": "Sanitasi mencegah path traversal."
          },
          {
            "type": "mc",
            "q": "Menangani error upload penting untuk",
            "options": [
              "umpan balik yang jelas",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Error jelas membantu pengguna."
          },
          {
            "type": "mc",
            "q": "Range request memungkinkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "unduhan sebagian"
            ],
            "a": 3,
            "explain": "Range mendukung resume/seek."
          },
          {
            "type": "mc",
            "q": "Membersihkan berkas sementara penting untuk",
            "options": [
              "CSS",
              "route",
              "mencegah penumpukan",
              "migrasi"
            ],
            "a": 2,
            "explain": "Cleanup menjaga penyimpanan."
          }
        ]
      },
      {
        "id": "elysia-16",
        "level": "Menengah",
        "title": "Logging & Monitoring",
        "exercises": [
          {
            "type": "mc",
            "q": "Logging membantu",
            "options": [
              "CSS",
              "diagnosis masalah",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Log mencatat kejadian."
          },
          {
            "type": "mc",
            "q": "Log terstruktur memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "JSON"
            ],
            "a": 3,
            "explain": "JSON memudahkan pencarian."
          },
          {
            "type": "mc",
            "q": "Level log umum meliputi",
            "options": [
              "debug, info, warn, error",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Level log memisahkan kepentingan."
          },
          {
            "type": "mc",
            "q": "Mencatat request penting untuk",
            "options": [
              "audit dan debugging",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Request log membantu diagnosis."
          },
          {
            "type": "mc",
            "q": "Tracing terdistribusi membantu",
            "options": [
              "CSS",
              "melacak request lintas layanan",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Tracing menghubungkan span."
          },
          {
            "type": "mc",
            "q": "Metrik penting seperti",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "latensi dan error rate"
            ],
            "a": 3,
            "explain": "Metrik menunjukkan kesehatan."
          },
          {
            "type": "mc",
            "q": "Health check endpoint membantu",
            "options": [
              "CSS",
              "pemantauan kesiapan",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Health check memeriksa layanan."
          },
          {
            "type": "mc",
            "q": "Alert membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "deteksi dini masalah"
            ],
            "a": 3,
            "explain": "Alert memberi tahu anomali."
          },
          {
            "type": "mc",
            "q": "Log tidak boleh mencatat",
            "options": [
              "CSS",
              "route",
              "password/token",
              "migrasi"
            ],
            "a": 2,
            "explain": "Data sensitif tidak dicatat."
          },
          {
            "type": "mc",
            "q": "Sampling log membantu",
            "options": [
              "CSS",
              "route",
              "mengurangi volume",
              "migrasi"
            ],
            "a": 2,
            "explain": "Sampling menjaga biaya."
          }
        ]
      },
      {
        "id": "elysia-17",
        "level": "Menengah",
        "title": "Error Handling",
        "exercises": [
          {
            "type": "mc",
            "q": "onError menangani",
            "options": [
              "CSS",
              "route",
              "error di aplikasi",
              "migrasi"
            ],
            "a": 2,
            "explain": "onError menangkap error."
          },
          {
            "type": "mc",
            "q": "Error handler dapat mengembalikan",
            "options": [
              "CSS",
              "respons terstruktur",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Respons error harus jelas."
          },
          {
            "type": "mc",
            "q": "Membedakan error klien dan server penting untuk",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "status yang tepat"
            ],
            "a": 3,
            "explain": "Status mencerminkan jenis error."
          },
          {
            "type": "mc",
            "q": "Error validasi harus memberi",
            "options": [
              "CSS",
              "route",
              "detail field",
              "migrasi"
            ],
            "a": 2,
            "explain": "Detail membantu klien."
          },
          {
            "type": "mc",
            "q": "Error tak terduga sebaiknya",
            "options": [
              "di-log dan tidak membocorkan detail",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Jangan bocorkan internal."
          },
          {
            "type": "mc",
            "q": "Retry pada klien memerlukan",
            "options": [
              "CSS",
              "route",
              "status yang jelas",
              "migrasi"
            ],
            "a": 2,
            "explain": "Status memandu retry."
          },
          {
            "type": "mc",
            "q": "Custom error class membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "klasifikasi error"
            ],
            "a": 3,
            "explain": "Kelas error memisahkan jenis."
          },
          {
            "type": "mc",
            "q": "Membungkus error pihak ketiga penting agar",
            "options": [
              "tidak membocorkan internal",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Wrapping menjaga batas."
          },
          {
            "type": "mc",
            "q": "Graceful shutdown memastikan",
            "options": [
              "CSS",
              "route",
              "request selesai dengan baik",
              "migrasi"
            ],
            "a": 2,
            "explain": "Shutdown menunggu request selesai."
          },
          {
            "type": "mc",
            "q": "Error boundary di level aplikasi mencegah",
            "options": [
              "CSS",
              "crash total",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Penanganan terpusat mencegah crash."
          }
        ]
      },
      {
        "id": "elysia-18",
        "level": "Menengah",
        "title": "Middleware Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "Middleware berlapis memungkinkan",
            "options": [
              "CSS",
              "route",
              "logika bertahap pada request",
              "migrasi"
            ],
            "a": 2,
            "explain": "Middleware berlapis memproses bertahap."
          },
          {
            "type": "mc",
            "q": "Middleware global didefinisikan di",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "instance utama"
            ],
            "a": 3,
            "explain": "Middleware global pada instance utama."
          },
          {
            "type": "mc",
            "q": "Middleware scoped memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "group/guard"
            ],
            "a": 3,
            "explain": "Group membatasi middleware."
          },
          {
            "type": "mc",
            "q": "Guard berguna untuk",
            "options": [
              "memeriksa izin sebelum handler",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Guard mengecek izin."
          },
          {
            "type": "mc",
            "q": "Middleware transform dapat",
            "options": [
              "CSS",
              "memodifikasi respons",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Transform memodifikasi respons."
          },
          {
            "type": "mc",
            "q": "Middleware logging mencatat",
            "options": [
              "request dan durasi",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Log mencatat request."
          },
          {
            "type": "mc",
            "q": "Middleware rate limit membatasi",
            "options": [
              "CSS",
              "jumlah request",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Rate limit membatasi frekuensi."
          },
          {
            "type": "mc",
            "q": "Middleware CORS mengatur",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "header lintas origin"
            ],
            "a": 3,
            "explain": "CORS mengatur akses origin."
          },
          {
            "type": "mc",
            "q": "Urutan middleware memengaruhi",
            "options": [
              "hasil akhir",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Urutan menentukan hasil."
          },
          {
            "type": "mc",
            "q": "Middleware berat memperlambat",
            "options": [
              "CSS",
              "route",
              "semua request",
              "migrasi"
            ],
            "a": 2,
            "explain": "Middleware jalan tiap request."
          }
        ]
      },
      {
        "id": "elysia-19",
        "level": "Menengah",
        "title": "Validasi Kustom",
        "exercises": [
          {
            "type": "mc",
            "q": "Validasi kustom memakai",
            "options": [
              "CSS",
              "t.Refine / custom check",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Refine menyusun aturan khusus."
          },
          {
            "type": "mc",
            "q": "Pesan error kustom membantu",
            "options": [
              "CSS",
              "klien memahami kesalahan",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Pesan jelas memudahkan klien."
          },
          {
            "type": "mc",
            "q": "Validasi lintas field memakai",
            "options": [
              "refine pada object",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Refine menangani aturan antar field."
          },
          {
            "type": "mc",
            "q": "Normalisasi input memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "transform"
            ],
            "a": 3,
            "explain": "Transform menormalkan nilai."
          },
          {
            "type": "mc",
            "q": "Validasi schema response membantu",
            "options": [
              "menjaga kontrak output",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Response schema menjaga konsistensi."
          },
          {
            "type": "mc",
            "q": "Validasi params penting untuk",
            "options": [
              "mencegah input salah",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Params yang divalidasi aman."
          },
          {
            "type": "mc",
            "q": "Menyatukan schema dipakai",
            "options": [
              "reuse antar route",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Schema dipakai ulang."
          },
          {
            "type": "mc",
            "q": "Validasi berlapis memisahkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "transport dan domain"
            ],
            "a": 3,
            "explain": "Lapisan validasi terpisah."
          },
          {
            "type": "mc",
            "q": "Error validasi harus",
            "options": [
              "CSS",
              "route",
              "konsisten formatnya",
              "migrasi"
            ],
            "a": 2,
            "explain": "Format konsisten memudahkan klien."
          },
          {
            "type": "mc",
            "q": "Menguji validasi penting untuk",
            "options": [
              "memastikan aturan benar",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Test memastikan validasi bekerja."
          }
        ]
      },
      {
        "id": "elysia-20",
        "level": "Menengah",
        "title": "CORS & Header",
        "exercises": [
          {
            "type": "mc",
            "q": "CORS mengatur",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "akses lintas origin"
            ],
            "a": 3,
            "explain": "CORS mengatur sumber lintas origin."
          },
          {
            "type": "mc",
            "q": "Header Access-Control-Allow-Origin menetapkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "origin diizinkan"
            ],
            "a": 3,
            "explain": "Header menentukan origin."
          },
          {
            "type": "mc",
            "q": "Preflight request memakai method",
            "options": [
              "GET",
              "OPTIONS",
              "POST",
              "HEAD"
            ],
            "a": 1,
            "explain": "OPTIONS untuk preflight."
          },
          {
            "type": "mc",
            "q": "Header keamanan umum adalah",
            "options": [
              "CSS",
              "route",
              "CSP, X-Frame-Options",
              "migrasi"
            ],
            "a": 2,
            "explain": "Header keamanan melindungi."
          },
          {
            "type": "mc",
            "q": "Strict-Transport-Security memaksa",
            "options": [
              "CSS",
              "route",
              "HTTPS",
              "migrasi"
            ],
            "a": 2,
            "explain": "HSTS memaksa HTTPS."
          },
          {
            "type": "mc",
            "q": "Cookie sebaiknya memakai",
            "options": [
              "CSS",
              "route",
              "httpOnly, secure, sameSite",
              "migrasi"
            ],
            "a": 2,
            "explain": "Atribut cookie meningkatkan keamanan."
          },
          {
            "type": "mc",
            "q": "Cache-Control mengatur",
            "options": [
              "CSS",
              "kebijakan cache",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Cache-Control mengatur caching."
          },
          {
            "type": "mc",
            "q": "Content-Type menetapkan",
            "options": [
              "tipe isi respons",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Content-Type menentukan tipe."
          },
          {
            "type": "mc",
            "q": "Mengatur header respons memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "set.headers"
            ],
            "a": 3,
            "explain": "set.headers mengatur header."
          },
          {
            "type": "mc",
            "q": "CORS terlalu permisif berisiko",
            "options": [
              "CSS",
              "route",
              "keamanan",
              "migrasi"
            ],
            "a": 2,
            "explain": "CORS longgar membahayakan."
          }
        ]
      },
      {
        "id": "elysia-21",
        "level": "Advance",
        "title": "Arsitektur Modul & Plugin",
        "exercises": [
          {
            "type": "mc",
            "q": "Modularisasi berbasis fitur membantu",
            "options": [
              "CSS",
              "route",
              "perawatan aplikasi besar",
              "migrasi"
            ],
            "a": 2,
            "explain": "Fitur terpisah mudah dirawat."
          },
          {
            "type": "mc",
            "q": "Plugin bersarang memungkinkan",
            "options": [
              "CSS",
              "route",
              "komposisi fitur",
              "migrasi"
            ],
            "a": 2,
            "explain": "Plugin dapat menyusun plugin lain."
          },
          {
            "type": "mc",
            "q": "Scoping plugin penting agar",
            "options": [
              "CSS",
              "efek terbatas pada area",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Scope mencegah efek global tak diinginkan."
          },
          {
            "type": "mc",
            "q": "Dependency antar plugin sebaiknya",
            "options": [
              "CSS",
              "eksplisit",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Ketergantungan jelas memudahkan perawatan."
          },
          {
            "type": "mc",
            "q": "Dokumentasi plugin penting untuk",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "pemakaian ulang"
            ],
            "a": 3,
            "explain": "Dokumentasi memudahkan pemakaian."
          },
          {
            "type": "mc",
            "q": "Memisahkan domain dan transport membantu",
            "options": [
              "CSS",
              "route",
              "pengujian",
              "migrasi"
            ],
            "a": 2,
            "explain": "Domain terpisah mudah diuji."
          },
          {
            "type": "mc",
            "q": "Injeksi layanan memakai",
            "options": [
              "CSS",
              "decorate/store",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Decorator/store menyuntikkan layanan."
          },
          {
            "type": "mc",
            "q": "Pola clean architecture memisahkan",
            "options": [
              "CSS",
              "route",
              "lapisan aplikasi",
              "migrasi"
            ],
            "a": 2,
            "explain": "Pemisahan lapisan menjaga kode."
          },
          {
            "type": "mc",
            "q": "Mengurangi ketergantungan langsung membantu",
            "options": [
              "CSS",
              "fleksibilitas",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Dependensi longgar mudah diubah."
          },
          {
            "type": "mc",
            "q": "Konsistensi struktur proyek penting untuk",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "kerjasama tim"
            ],
            "a": 3,
            "explain": "Struktur konsisten memudahkan kolaborasi."
          }
        ]
      },
      {
        "id": "elysia-22",
        "level": "Advance",
        "title": "Performance & Benchmark",
        "exercises": [
          {
            "type": "mc",
            "q": "Bun dikenal karena",
            "options": [
              "CSS",
              "route",
              "startup dan eksekusi cepat",
              "migrasi"
            ],
            "a": 2,
            "explain": "Bun berfokus pada performa."
          },
          {
            "type": "mc",
            "q": "Benchmark endpoint memakai",
            "options": [
              "CSS",
              "route",
              "alat benchmark/load test",
              "migrasi"
            ],
            "a": 2,
            "explain": "Load test mengukur throughput."
          },
          {
            "type": "mc",
            "q": "Cache respons membantu",
            "options": [
              "CSS",
              "route",
              "mengurangi beban",
              "migrasi"
            ],
            "a": 2,
            "explain": "Cache mengurangi kerja berulang."
          },
          {
            "type": "mc",
            "q": "Query lambat perlu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "index dan optimasi"
            ],
            "a": 3,
            "explain": "Optimasi query penting."
          },
          {
            "type": "mc",
            "q": "Connection pooling memengaruhi",
            "options": [
              "CSS",
              "route",
              "throughput",
              "migrasi"
            ],
            "a": 2,
            "explain": "Pooling menentukan kapasitas."
          },
          {
            "type": "mc",
            "q": "Mengurangi payload membantu",
            "options": [
              "CSS",
              "latensi jaringan",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Payload kecil lebih cepat."
          },
          {
            "type": "mc",
            "q": "Compression respons membantu",
            "options": [
              "CSS",
              "bandwidth",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Kompresi menghemat bandwidth."
          },
          {
            "type": "mc",
            "q": "Profiling membantu menemukan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "hot spot"
            ],
            "a": 3,
            "explain": "Profiler menunjukkan bagian lambat."
          },
          {
            "type": "mc",
            "q": "Optimasi berdasarkan",
            "options": [
              "pengukuran",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Pengukuran memandu optimasi."
          },
          {
            "type": "mc",
            "q": "Caching berlapis perlu",
            "options": [
              "CSS",
              "route",
              "strategi invalidasi",
              "migrasi"
            ],
            "a": 2,
            "explain": "Invalidasi menjaga data segar."
          }
        ]
      },
      {
        "id": "elysia-23",
        "level": "Advance",
        "title": "Deployment & Operasional",
        "exercises": [
          {
            "type": "mc",
            "q": "Deploy Elysia umumnya memakai",
            "options": [
              "runtime Bun di server/container",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Deploy menjalankan Bun di server."
          },
          {
            "type": "mc",
            "q": "Environment variables memisahkan",
            "options": [
              "konfigurasi antar lingkungan",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Env memisahkan konfigurasi."
          },
          {
            "type": "mc",
            "q": "Container memudahkan",
            "options": [
              "CSS",
              "reproduksibilitas deploy",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Container konsisten antar lingkungan."
          },
          {
            "type": "mc",
            "q": "Health check membantu orchestrator",
            "options": [
              "merestart layanan bermasalah",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Health check memandu orkestrasi."
          },
          {
            "type": "mc",
            "q": "Rolling deploy meminimalkan",
            "options": [
              "downtime",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Rolling deploy menjaga layanan hidup."
          },
          {
            "type": "mc",
            "q": "Graceful shutdown penting saat",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "deploy/restart"
            ],
            "a": 3,
            "explain": "Shutdown menuntaskan request."
          },
          {
            "type": "mc",
            "q": "Centralized logging membantu",
            "options": [
              "CSS",
              "route",
              "diagnosis produksi",
              "migrasi"
            ],
            "a": 2,
            "explain": "Log terpusat memudahkan diagnosis."
          },
          {
            "type": "mc",
            "q": "Secret management penting untuk",
            "options": [
              "CSS",
              "route",
              "keamanan konfigurasi",
              "migrasi"
            ],
            "a": 2,
            "explain": "Rahasia dijaga aman."
          },
          {
            "type": "mc",
            "q": "Migration DB saat deploy perlu",
            "options": [
              "urutan kompatibel",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Migrasi bertahap menjaga uptime."
          },
          {
            "type": "mc",
            "q": "Backup penting untuk",
            "options": [
              "CSS",
              "pemulihan data",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Backup melindungi data."
          }
        ]
      },
      {
        "id": "elysia-24",
        "level": "Advance",
        "title": "Integrasi & Webhook",
        "exercises": [
          {
            "type": "mc",
            "q": "HTTP client pada Bun memakai",
            "options": [
              "fetch bawaan",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Bun menyediakan fetch."
          },
          {
            "type": "mc",
            "q": "Webhook diverifikasi dengan",
            "options": [
              "CSS",
              "signature/token",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Verifikasi memastikan sumber."
          },
          {
            "type": "mc",
            "q": "Menerima webhook sebaiknya async",
            "options": [
              "ya, agar tidak timeout",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Proses async mencegah timeout."
          },
          {
            "type": "mc",
            "q": "Idempotensi webhook penting karena",
            "options": [
              "pengiriman bisa berulang",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Webhook dapat dikirim ulang."
          },
          {
            "type": "mc",
            "q": "Retry keluar memakai",
            "options": [
              "CSS",
              "backoff",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Backoff menghindari banjir retry."
          },
          {
            "type": "mc",
            "q": "Menguji integrasi memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "mock fetch"
            ],
            "a": 3,
            "explain": "Mock menghindari panggilan nyata."
          },
          {
            "type": "mc",
            "q": "Timeout request keluar penting untuk",
            "options": [
              "CSS",
              "keandalan",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Timeout mencegah menggantung."
          },
          {
            "type": "mc",
            "q": "Rahasia API disimpan di",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "environment"
            ],
            "a": 3,
            "explain": "Rahasia di environment."
          },
          {
            "type": "mc",
            "q": "Versioning API membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "kompatibilitas klien"
            ],
            "a": 3,
            "explain": "Versi memisahkan perubahan."
          },
          {
            "type": "mc",
            "q": "Audit event membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "pelacakan"
            ],
            "a": 3,
            "explain": "Audit mencatat riwayat."
          }
        ]
      },
      {
        "id": "elysia-25",
        "level": "Advance",
        "title": "Testing & Kualitas",
        "exercises": [
          {
            "type": "mc",
            "q": "Test integrasi menguji",
            "options": [
              "alur end-to-end",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Integrasi menguji beberapa bagian bersama."
          },
          {
            "type": "mc",
            "q": "Test unit menguji",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "satu unit kecil"
            ],
            "a": 3,
            "explain": "Unit test fokus pada bagian kecil."
          },
          {
            "type": "mc",
            "q": "Contract testing memverifikasi",
            "options": [
              "kesesuaian API",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Contract test menjaga kesepakatan API."
          },
          {
            "type": "mc",
            "q": "Mock database membantu",
            "options": [
              "isolasi test",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Mock menghindari dependensi nyata."
          },
          {
            "type": "mc",
            "q": "Linting memakai",
            "options": [
              "ESLint/Biome",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Linter menjaga kualitas."
          },
          {
            "type": "mc",
            "q": "Static typing membantu menemukan",
            "options": [
              "error lebih awal",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Tipe menangkap error dini."
          },
          {
            "type": "mc",
            "q": "Coverage membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "mengukur cakupan"
            ],
            "a": 3,
            "explain": "Coverage mengukur test."
          },
          {
            "type": "mc",
            "q": "CI menjalankan",
            "options": [
              "CSS",
              "lint dan test otomatis",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "CI otomatis memeriksa."
          },
          {
            "type": "mc",
            "q": "Test perilaku lebih stabil dari",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "test implementasi"
            ],
            "a": 3,
            "explain": "Perilaku jarang berubah."
          },
          {
            "type": "mc",
            "q": "Regression test mencegah",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "bug berulang"
            ],
            "a": 3,
            "explain": "Regression test melindungi fitur lama."
          }
        ]
      },
      {
        "id": "elysia-26",
        "level": "Advance",
        "title": "Streaming & SSR Data",
        "exercises": [
          {
            "type": "mc",
            "q": "Streaming respons membantu",
            "options": [
              "pengiriman bertahap",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Streaming mengirim data bertahap."
          },
          {
            "type": "mc",
            "q": "Server-Sent Events cocok untuk",
            "options": [
              "CSS",
              "aliran satu arah",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "SSE mengirim event satu arah."
          },
          {
            "type": "mc",
            "q": "Backpressure penting pada",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "streaming data besar"
            ],
            "a": 3,
            "explain": "Backpressure mengatur aliran."
          },
          {
            "type": "mc",
            "q": "Mengirim file besar sebaiknya",
            "options": [
              "CSS",
              "streaming",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Streaming menghemat memori."
          },
          {
            "type": "mc",
            "q": "Membatalkan request perlu",
            "options": [
              "dihormati",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Pembatalan menghentikan kerja."
          },
          {
            "type": "mc",
            "q": "Compression streaming perlu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "pertimbangan CPU"
            ],
            "a": 3,
            "explain": "Kompresi menambah beban CPU."
          },
          {
            "type": "mc",
            "q": "Timeout streaming membantu",
            "options": [
              "CSS",
              "route",
              "mencegah koneksi menggantung",
              "migrasi"
            ],
            "a": 2,
            "explain": "Timeout menjaga resource."
          },
          {
            "type": "mc",
            "q": "Event framing SSE memakai",
            "options": [
              "teks berformat event",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "SSE memakai format event teks."
          },
          {
            "type": "mc",
            "q": "Streaming JSON membutuhkan",
            "options": [
              "CSS",
              "route",
              "format berurutan",
              "migrasi"
            ],
            "a": 2,
            "explain": "Format harus dapat di-parse bertahap."
          },
          {
            "type": "mc",
            "q": "Menguji streaming perlu",
            "options": [
              "CSS",
              "route",
              "klien streaming",
              "migrasi"
            ],
            "a": 2,
            "explain": "Test memakai klien yang membaca aliran."
          }
        ]
      },
      {
        "id": "elysia-27",
        "level": "Advance",
        "title": "State & Caching Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "Cache respons endpoint membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "mengurangi beban"
            ],
            "a": 3,
            "explain": "Cache mengurangi kerja."
          },
          {
            "type": "mc",
            "q": "Invalidasi cache penting agar",
            "options": [
              "data segar",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Invalidasi menjaga kesegaran."
          },
          {
            "type": "mc",
            "q": "Cache berbasis ETag memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "kondisi if-none-match"
            ],
            "a": 3,
            "explain": "ETag mendukung revalidasi."
          },
          {
            "type": "mc",
            "q": "Tidak boleh caching data personal berbagi",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "ya, berisiko bocor"
            ],
            "a": 3,
            "explain": "Cache personal harus terpisah."
          },
          {
            "type": "mc",
            "q": "Store bersama antar instans memakai",
            "options": [
              "Redis",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Redis menyimpan state bersama."
          },
          {
            "type": "mc",
            "q": "Cache warming membantu",
            "options": [
              "CSS",
              "respons awal cepat",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Warming mengisi cache lebih awal."
          },
          {
            "type": "mc",
            "q": "TTL mengatur",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "masa berlaku cache"
            ],
            "a": 3,
            "explain": "TTL menentukan kedaluwarsa."
          },
          {
            "type": "mc",
            "q": "Menghindari cache stampede memakai",
            "options": [
              "CSS",
              "lock/backoff",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Lock mencegah lonjakan."
          },
          {
            "type": "mc",
            "q": "Memoization dalam proses perlu",
            "options": [
              "CSS",
              "route",
              "batas memori",
              "migrasi"
            ],
            "a": 2,
            "explain": "Memoization tanpa batas membengkak."
          },
          {
            "type": "mc",
            "q": "Mengukur cache hit ratio membantu",
            "options": [
              "menilai efektivitas",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Hit ratio menunjukkan manfaat."
          }
        ]
      },
      {
        "id": "elysia-28",
        "level": "Advance",
        "title": "Keamanan Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "Rate limiting per pengguna membantu",
            "options": [
              "CSS",
              "route",
              "mencegah abuse",
              "migrasi"
            ],
            "a": 2,
            "explain": "Rate limit per pengguna lebih tepat."
          },
          {
            "type": "mc",
            "q": "Input sanitasi mencegah",
            "options": [
              "CSS",
              "injeksi",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Sanitasi mencegah injeksi."
          },
          {
            "type": "mc",
            "q": "Menyimpan sesi server-side lebih aman dari",
            "options": [
              "CSS",
              "route",
              "manipulasi klien",
              "migrasi"
            ],
            "a": 2,
            "explain": "Sesi server tidak bisa diubah klien."
          },
          {
            "type": "mc",
            "q": "Token rotation membatasi",
            "options": [
              "CSS",
              "route",
              "dampak kebocoran",
              "migrasi"
            ],
            "a": 2,
            "explain": "Rotasi token mengurangi risiko."
          },
          {
            "type": "mc",
            "q": "RBAC memeriksa",
            "options": [
              "izin per peran",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "RBAC memeriksa peran."
          },
          {
            "type": "mc",
            "q": "Audit log membantu",
            "options": [
              "CSS",
              "investigasi",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Audit log mendukung investigasi."
          },
          {
            "type": "mc",
            "q": "Menyembunyikan detail error mencegah",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "bocor informasi"
            ],
            "a": 3,
            "explain": "Detail error bisa membocorkan."
          },
          {
            "type": "mc",
            "q": "Dependency scanning membantu",
            "options": [
              "menutup kerentanan",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Scan menemukan celah."
          },
          {
            "type": "mc",
            "q": "Enkripsi at-rest penting untuk",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "data sensitif"
            ],
            "a": 3,
            "explain": "Enkripsi melindungi data diam."
          },
          {
            "type": "mc",
            "q": "Enkripsi in-transit memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "TLS"
            ],
            "a": 3,
            "explain": "TLS melindungi data transit."
          }
        ]
      },
      {
        "id": "elysia-29",
        "level": "Advance",
        "title": "Refactor & Kualitas Kode",
        "exercises": [
          {
            "type": "mc",
            "q": "Nama yang jelas membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "pemeliharaan"
            ],
            "a": 3,
            "explain": "Nama jelas memudahkan perawatan."
          },
          {
            "type": "mc",
            "q": "Fungsi kecil berfokus membantu",
            "options": [
              "CSS",
              "pengujian",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Fungsi kecil mudah diuji."
          },
          {
            "type": "mc",
            "q": "Menghindari duplikasi membantu",
            "options": [
              "CSS",
              "konsistensi",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "DRY menjaga konsistensi."
          },
          {
            "type": "mc",
            "q": "Pemisahan lapisan membantu",
            "options": [
              "CSS",
              "perubahan terisolasi",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Lapisan terpisah memudahkan perubahan."
          },
          {
            "type": "mc",
            "q": "Type strict membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "mencegah bug"
            ],
            "a": 3,
            "explain": "Strict typing mengurangi bug."
          },
          {
            "type": "mc",
            "q": "Dokumentasi kode secukupnya membantu",
            "options": [
              "CSS",
              "route",
              "orientasi",
              "migrasi"
            ],
            "a": 2,
            "explain": "Dokumentasi membantu pemahaman."
          },
          {
            "type": "mc",
            "q": "Refactor bertahap lebih aman",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "ya"
            ],
            "a": 3,
            "explain": "Bertahap mudah diverifikasi."
          },
          {
            "type": "mc",
            "q": "Review kode membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "kualitas"
            ],
            "a": 3,
            "explain": "Review menjaga kualitas."
          },
          {
            "type": "mc",
            "q": "Test regresi melindungi",
            "options": [
              "CSS",
              "route",
              "fitur lama",
              "migrasi"
            ],
            "a": 2,
            "explain": "Regresi mencegah kerusakan."
          },
          {
            "type": "mc",
            "q": "Linter + formatter menjaga",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "konsistensi"
            ],
            "a": 3,
            "explain": "Tool menjaga gaya."
          }
        ]
      },
      {
        "id": "elysia-30",
        "level": "Advance",
        "title": "Ekosistem Bun & Tooling",
        "exercises": [
          {
            "type": "mc",
            "q": "Bun menyediakan",
            "options": [
              "CSS",
              "runtime, bundler, dan test runner",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Bun all-in-one tooling."
          },
          {
            "type": "mc",
            "q": "bun install dipakai untuk",
            "options": [
              "CSS",
              "memasang dependency",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "bun install memasang paket."
          },
          {
            "type": "mc",
            "q": "bun build membuat",
            "options": [
              "CSS",
              "bundel",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "bun build membundel."
          },
          {
            "type": "mc",
            "q": "bun test menjalankan",
            "options": [
              "test",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "bun test menjalankan test."
          },
          {
            "type": "mc",
            "q": "Kompatibilitas Node API membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "migrasi library"
            ],
            "a": 3,
            "explain": "Bun mendukung banyak API Node."
          },
          {
            "type": "mc",
            "q": "Menggunakan TypeScript langsung tanpa transpile manual karena",
            "options": [
              "Bun mendukung TS",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Bun menjalankan TS native."
          },
          {
            "type": "mc",
            "q": "Manajemen versi runtime penting untuk",
            "options": [
              "CSS",
              "reproduksibilitas",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Versi konsisten mencegah beda perilaku."
          },
          {
            "type": "mc",
            "q": "Bundler pilihan berpengaruh pada",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "ukuran dan performa"
            ],
            "a": 3,
            "explain": "Bundler memengaruhi hasil."
          },
          {
            "type": "mc",
            "q": "Monorepo di Bun didukung dengan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "workspaces"
            ],
            "a": 3,
            "explain": "Workspaces mengelola paket."
          },
          {
            "type": "mc",
            "q": "Lockfile penting agar",
            "options": [
              "dependency konsisten",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Lockfile mengunci versi."
          }
        ]
      },
      {
        "id": "elysia-31",
        "level": "Advance",
        "title": "Master Review & Best Practice Elysia",
        "exercises": [
          {
            "type": "mc",
            "q": "Elysia dirancang untuk membangun server/API terutama pada runtime",
            "options": [
              "JVM",
              "MATLAB",
              "Bun",
              "Unity"
            ],
            "a": 2,
            "explain": "Elysia adalah framework web TypeScript/JavaScript yang dirancang untuk Bun."
          },
          {
            "type": "mc",
            "q": "Pada Elysia, route GET sederhana biasanya didaftarkan dengan",
            "options": [
              ".get(path, handler)",
              ".style(path, handler)",
              ".table(path, handler)",
              ".compileCSS(path, handler)"
            ],
            "a": 0,
            "explain": "Metode get mendaftarkan handler untuk request HTTP GET."
          },
          {
            "type": "mc",
            "q": "Schema request pada endpoint Elysia berguna untuk",
            "options": [
              "Melewati pemeriksaan tipe",
              "Menggantikan semua pengujian",
              "Memvalidasi bentuk input di batas endpoint",
              "Mengubah request menjadi file CSS"
            ],
            "a": 2,
            "explain": "Schema membantu memvalidasi input dan menjaga kontrak API."
          },
          {
            "type": "mc",
            "q": "Plugin pada aplikasi Elysia paling berguna untuk",
            "options": [
              "Mengganti semua route dengan CSS",
              "Membuat variabel global tanpa batas",
              "Mengelompokkan dan memakai ulang fitur server",
              "Menjalankan query tanpa koneksi"
            ],
            "a": 2,
            "explain": "Plugin membantu memisahkan fitur dengan cara memakai ulang fitur."
          },
          {
            "type": "fill",
            "q": "Lengkapi pendaftaran plugin:",
            "code": "app.___(plugin)",
            "accept": [
              "use"
            ],
            "explain": "use mendaftarkan plugin pada instance Elysia."
          }
        ]
      }
    ]
  }
];

export { CONTENT_ELYSIA };
