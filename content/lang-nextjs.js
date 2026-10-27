/* CodeDuo — blok konten: topik "Next.js" (dipisah dari Blok Web).
 * 1 topik (nextjs) × 31 pelajaran (10 Dasar, 10 Menengah, 11 Advance). Total 305 soal.
 * Engine di content.js (barrel) & app.js. Format tipe soal: mc | fill | code | preview | arrange.
 * ESM murni: dipakai Vite (browser) & Node (test).
 */
'use strict';

const CONTENT_NEXTJS = [
{
    "id": "nextjs",
    "name": "Next.js",
    "icon": "▲",
    "color": "#000000",
    "desc": "Framework React: routing & rendering",
    "lessons": [
      {
        "id": "nextjs-1",
        "level": "Dasar",
        "title": "Pengenalan Next.js",
        "exercises": [
          {
            "type": "mc",
            "q": "Next.js adalah framework untuk",
            "options": [
              "Laravel PHP",
              "Ruby on Rails",
              "React",
              "MATLAB"
            ],
            "a": 2,
            "explain": "Next.js dibangun di atas React."
          },
          {
            "type": "mc",
            "q": "Manfaat utama Next.js adalah",
            "options": [
              "mengganti JavaScript",
              "routing, rendering server, dan optimasi bawaan",
              "menjadi database",
              "menjadi CSS engine"
            ],
            "a": 1,
            "explain": "Next.js menambah kerangka aplikasi di atas React."
          },
          {
            "type": "mc",
            "q": "Perintah membuat proyek Next.js adalah",
            "options": [
              "npm new next",
              "next create",
              "npx init next",
              "npx create-next-app"
            ],
            "a": 3,
            "explain": "create-next-app men-scaffold proyek Next.js."
          },
          {
            "type": "mc",
            "q": "Perintah menjalankan server pengembangan Next.js adalah",
            "options": [
              "next serve",
              "npm start:dev",
              "npm run dev",
              "node next"
            ],
            "a": 2,
            "explain": "npm run dev menjalankan dev server Next.js."
          },
          {
            "type": "mc",
            "q": "Direktori utama route pada App Router adalah",
            "options": [
              "app",
              "pages",
              "routes",
              "src/pages"
            ],
            "a": 0,
            "explain": "App Router memakai direktori app untuk route."
          },
          {
            "type": "mc",
            "q": "Berkas khusus untuk halaman pada App Router adalah",
            "options": [
              "page.js",
              "index.js",
              "view.js",
              "route-page.js"
            ],
            "a": 0,
            "explain": "page.js mendefinisikan UI untuk sebuah route."
          },
          {
            "type": "mc",
            "q": "Berkas layout.js dipakai untuk",
            "options": [
              "konfigurasi database",
              "membuat API",
              "UI yang dibagi antar-halaman anak",
              "menulis CSS"
            ],
            "a": 2,
            "explain": "Layout membungkus halaman dan bertahan antar navigasi."
          },
          {
            "type": "mc",
            "q": "Next.js mendukung rendering di",
            "options": [
              "client saja",
              "server dan client",
              "server saja",
              "CSS saja"
            ],
            "a": 1,
            "explain": "Next.js mendukung SSR/SSG serta komponen client."
          },
          {
            "type": "mc",
            "q": "Komponen Image bawaan Next.js berguna untuk",
            "options": [
              "menulis SQL",
              "membuat route",
              "optimasi gambar otomatis",
              "migrasi DB"
            ],
            "a": 2,
            "explain": "next/image mengoptimasi ukuran dan lazy loading gambar."
          },
          {
            "type": "mc",
            "q": "Perintah build produksi Next.js adalah",
            "options": [
              "next compile",
              "npm build:prod",
              "next pack",
              "npm run build"
            ],
            "a": 3,
            "explain": "npm run build membuat bundel produksi."
          }
        ]
      },
      {
        "id": "nextjs-2",
        "level": "Dasar",
        "title": "App Router Dasar",
        "exercises": [
          {
            "type": "mc",
            "q": "Route /about dibuat dengan berkas",
            "options": [
              "app/about.js",
              "pages/about.js (App Router hanya)",
              "about/page.js",
              "app/about/page.js"
            ],
            "a": 3,
            "explain": "App Router memetakan folder ke segmen URL dengan page.js."
          },
          {
            "type": "mc",
            "q": "Route dinamis /blog/[slug] memakai folder",
            "options": [
              "app/blog/[slug]",
              "app/blog/:slug",
              "app/blog/{slug}",
              "app/blog/<slug>"
            ],
            "a": 0,
            "explain": "Segmen kurung siku membuat parameter dinamis."
          },
          {
            "type": "mc",
            "q": "Parameter route dinamis dibaca dari prop",
            "options": [
              "params",
              "props",
              "query",
              "args"
            ],
            "a": 0,
            "explain": "Komponen page menerima params berisi nilai segmen dinamis."
          },
          {
            "type": "mc",
            "q": "Navigasi antarhalaman memakai komponen",
            "options": [
              "A",
              "Link",
              "Nav",
              "Route"
            ],
            "a": 1,
            "explain": "Komponen Link melakukan navigasi client-side."
          },
          {
            "type": "mc",
            "q": "Root layout wajib memiliki tag",
            "options": [
              "head saja",
              "main saja",
              "html dan body",
              "div saja"
            ],
            "a": 2,
            "explain": "Root layout harus menyertakan html dan body."
          },
          {
            "type": "mc",
            "q": "Berkas loading.js menampilkan",
            "options": [
              "halaman error",
              "UI loading selama segmen dimuat",
              "konfigurasi",
              "CSS"
            ],
            "a": 1,
            "explain": "loading.js memberi UI fallback saat konten menunggu."
          },
          {
            "type": "mc",
            "q": "Berkas error.js menangani",
            "options": [
              "routing CSS",
              "migrasi",
              "error pada segmen route",
              "build"
            ],
            "a": 2,
            "explain": "error.js adalah error boundary untuk segmen."
          },
          {
            "type": "mc",
            "q": "Berkas not-found.js dipakai untuk",
            "options": [
              "menghapus route",
              "menampilkan halaman 404 kustom",
              "stylesheet",
              "database"
            ],
            "a": 1,
            "explain": "not-found.js menampilkan UI saat resource tidak ditemukan."
          },
          {
            "type": "mc",
            "q": "Grup route tanpa mengubah URL memakai folder",
            "options": [
              "[namagrup]",
              "_namagrup",
              "@namagrup",
              "(namagrup)"
            ],
            "a": 3,
            "explain": "Folder dalam kurung mengelompokkan route tanpa menambah segmen URL."
          },
          {
            "type": "mc",
            "q": "Route handler (API) didefinisikan di berkas",
            "options": [
              "route.js",
              "api.js",
              "server.js",
              "handler.js"
            ],
            "a": 0,
            "explain": "route.js menangani request HTTP pada App Router."
          }
        ]
      },
      {
        "id": "nextjs-3",
        "level": "Dasar",
        "title": "Server & Client Component",
        "exercises": [
          {
            "type": "mc",
            "q": "Secara default, komponen di App Router adalah",
            "options": [
              "Client Component",
              "class component",
              "web component",
              "Server Component"
            ],
            "a": 3,
            "explain": "Defaultnya Server Component kecuali ditandai client."
          },
          {
            "type": "mc",
            "q": "Menandai komponen sebagai client memakai direktif",
            "options": [
              "'use server'",
              "'client'",
              "'browser'",
              "'use client'"
            ],
            "a": 3,
            "explain": "Direktif 'use client' menandai batas komponen klien."
          },
          {
            "type": "mc",
            "q": "Server Component dapat",
            "options": [
              "memakai onClick langsung",
              "mengakses window",
              "mengambil data di server tanpa mengirim kodenya ke browser",
              "memakai useState"
            ],
            "a": 2,
            "explain": "Server Component berjalan di server dan tidak masuk bundel klien."
          },
          {
            "type": "mc",
            "q": "Untuk memakai useState/useEffect komponen harus",
            "options": [
              "Client Component",
              "Server Component",
              "layout",
              "route handler"
            ],
            "a": 0,
            "explain": "Hooks state/effect membutuhkan komponen klien."
          },
          {
            "type": "mc",
            "q": "Rahasia server aman pada Server Component karena",
            "options": [
              "CSS menyembunyikan",
              "kodenya tidak dikirim ke browser",
              "route terenkripsi",
              "state lokal"
            ],
            "a": 1,
            "explain": "Kode server tidak masuk bundel klien."
          },
          {
            "type": "mc",
            "q": "Menandai fungsi sebagai Server Action memakai",
            "options": [
              "'use server'",
              "'use client'",
              "'server'",
              "'action'"
            ],
            "a": 0,
            "explain": "Direktif 'use server' menandai server action."
          },
          {
            "type": "mc",
            "q": "Data yang dikirim dari Server ke Client Component harus",
            "options": [
              "berupa fungsi",
              "dapat diserialisasi",
              "berupa DOM node",
              "berupa stream binary"
            ],
            "a": 1,
            "explain": "Props lintas batas server-klien harus serializable."
          },
          {
            "type": "mc",
            "q": "Server Component tidak dapat langsung memakai",
            "options": [
              "fetch",
              "koneksi database",
              "secrets server",
              "event handler browser"
            ],
            "a": 3,
            "explain": "Interaksi browser memerlukan Client Component."
          },
          {
            "type": "mc",
            "q": "Menempatkan komponen client sedalam mungkin membantu",
            "options": [
              "memperkecil JavaScript klien",
              "mempercepat CSS",
              "menghapus route",
              "migrani DB"
            ],
            "a": 0,
            "explain": "Batas klien yang kecil mengurangi bundel klien."
          },
          {
            "type": "mc",
            "q": "`use client` berlaku untuk",
            "options": [
              "seluruh aplikasi selalu",
              "hanya route",
              "berkas dan import di bawahnya",
              "hanya CSS"
            ],
            "a": 2,
            "explain": "Direktif menandai modul dan turunannya sebagai klien."
          }
        ]
      },
      {
        "id": "nextjs-4",
        "level": "Dasar",
        "title": "Routing Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "Layout bersarang (nested layout) diperoleh dengan",
            "options": [
              "layout.js di folder anak",
              "menulis HTML ulang",
              "CSS",
              "route handler"
            ],
            "a": 0,
            "explain": "Setiap folder dapat punya layout.js sendiri."
          },
          {
            "type": "mc",
            "q": "Untuk membuat beberapa slot render paralel memakai folder",
            "options": [
              "@namaslot",
              "(namaslot)",
              "[namaslot]",
              "_namaslot"
            ],
            "a": 0,
            "explain": "Slot paralel memakai awalan @ pada nama folder."
          },
          {
            "type": "mc",
            "q": "Route intercept menggunakan konvensi",
            "options": [
              "(.)nama",
              "_nama",
              "@nama",
              "#nama"
            ],
            "a": 0,
            "explain": "Konvensi titik mengintercept route untuk tampilan sementara."
          },
          {
            "type": "mc",
            "q": "Catch-all route ditulis dengan",
            "options": [
              "[...]slug",
              "{...slug}",
              "[...slug]",
              "(...slug)"
            ],
            "a": 2,
            "explain": "[...slug] menangkap semua segmen berikutnya."
          },
          {
            "type": "mc",
            "q": "Optional catch-all route memakai",
            "options": [
              "[[...slug]]",
              "[...slug?]",
              "[[slug]]",
              "[...?slug]"
            ],
            "a": 0,
            "explain": "Kurung ganda membuat catch-all opsional."
          },
          {
            "type": "mc",
            "q": "Redirect di App Router dapat memakai",
            "options": [
              "window.location selalu",
              "href saja",
              "CSS",
              "redirect() dari next/navigation"
            ],
            "a": 3,
            "explain": "redirect() melakukan pengalihan di server."
          },
          {
            "type": "mc",
            "q": "Hook untuk navigasi programatik client adalah",
            "options": [
              "useNavigate selalu",
              "usePath",
              "useRouter",
              "useRoute"
            ],
            "a": 2,
            "explain": "useRouter dari next/navigation memberi kontrol navigasi."
          },
          {
            "type": "mc",
            "q": "Hook membaca pathname aktif adalah",
            "options": [
              "usePathname",
              "useUrl",
              "useHref",
              "useLoc"
            ],
            "a": 0,
            "explain": "usePathname mengembalikan path aktif."
          },
          {
            "type": "mc",
            "q": "Hook membaca query string client adalah",
            "options": [
              "useQuery",
              "useParamsOnly",
              "useSearchParams",
              "useString"
            ],
            "a": 2,
            "explain": "useSearchParams membaca parameter query."
          },
          {
            "type": "mc",
            "q": "Metadata halaman didaftarkan lewat",
            "options": [
              "export function css",
              "route.js",
              "export const metadata",
              "layout()"
            ],
            "a": 2,
            "explain": "Ekspor metadata mengatur judul/deskripsi halaman."
          }
        ]
      },
      {
        "id": "nextjs-5",
        "level": "Dasar",
        "title": "Data Fetching Dasar",
        "exercises": [
          {
            "type": "mc",
            "q": "Mengambil data di Server Component biasanya memakai",
            "options": [
              "window.fetch selalu di browser",
              "jQuery",
              "CSS",
              "fetch bawaan (async)"
            ],
            "a": 3,
            "explain": "Server Component bisa await fetch langsung."
          },
          {
            "type": "mc",
            "q": "Fetch pada Server Component dapat di-cache/di-revalidasi dengan opsi",
            "options": [
              "only",
              "css",
              "route",
              "cache dan next.revalidate"
            ],
            "a": 3,
            "explain": "Opsi cache/revalidate mengatur kesegaran data."
          },
          {
            "type": "mc",
            "q": "Revalidasi tiap 60 detik ditulis sebagai",
            "options": [
              "fetch(url, { cache: 60 })",
              "fetch(url, { next: { revalidate: 60 } })",
              "fetch(url, { ttl: 60 })",
              "fetch(url, { every: 60 })"
            ],
            "a": 1,
            "explain": "next.revalidate mengatur interval revalidasi detik."
          },
          {
            "type": "mc",
            "q": "Untuk selalu mengambil data segar memakai",
            "options": [
              "cache: \"no-store\"",
              "cache: \"fresh\"",
              "revalidate: 0 selalu",
              "no-cache: true"
            ],
            "a": 0,
            "explain": "no-store melewati cache."
          },
          {
            "type": "mc",
            "q": "Halaman async di Server Component ditulis dengan",
            "options": [
              "function Page() async",
              "async function Page()",
              "() async =>",
              "Page.async"
            ],
            "a": 1,
            "explain": "Komponen dapat berupa fungsi async pada server."
          },
          {
            "type": "mc",
            "q": "Menampilkan status loading selama fetch dapat memakai",
            "options": [
              "CSS",
              "loading.js atau Suspense",
              "route.js",
              "migration"
            ],
            "a": 1,
            "explain": "loading.js/Suspense memberi UI saat data ditunggu."
          },
          {
            "type": "mc",
            "q": "Mengambil data di Client Component biasanya memakai",
            "options": [
              "redirect()",
              "metadata",
              "useEffect atau library seperti SWR/React Query",
              "layout.js"
            ],
            "a": 2,
            "explain": "Client membuthkan effect/library untuk fetch."
          },
          {
            "type": "mc",
            "q": "Menghindari fetch berulang ke data yang sama pada server dibantu oleh",
            "options": [
              "menghapus fetch",
              "CSS",
              "cache bawaan Next.js",
              "route"
            ],
            "a": 2,
            "explain": "Next.js menyimpan hasil fetch agar dipakai ulang."
          },
          {
            "type": "mc",
            "q": "Parallel fetching dapat memakai",
            "options": [
              "loop tunggal",
              "CSS",
              "Promise.all di Server Component",
              "route"
            ],
            "a": 2,
            "explain": "Promise.all mengambil beberapa sumber secara bersamaan."
          },
          {
            "type": "mc",
            "q": "Data yang diambil di server diteruskan ke client lewat",
            "options": [
              "props",
              "global var",
              "window",
              "localStorage server"
            ],
            "a": 0,
            "explain": "Props meneruskan data server ke komponen client."
          }
        ]
      },
      {
        "id": "nextjs-6",
        "level": "Dasar",
        "title": "Styling di Next.js",
        "exercises": [
          {
            "type": "mc",
            "q": "Next.js mendukung CSS Modules dengan nama berkas",
            "options": [
              "styles.css",
              "styles.module.css",
              "styles.module.scss saja",
              "module.css"
            ],
            "a": 1,
            "explain": "Ekstensi .module.css mengaktifkan CSS Modules."
          },
          {
            "type": "mc",
            "q": "CSS global biasa diimpor di",
            "options": [
              "root layout",
              "setiap komponen",
              "route.js",
              "metadata"
            ],
            "a": 0,
            "explain": "Global CSS diimpor di layout utama."
          },
          {
            "type": "mc",
            "q": "Tailwind dapat dipakai dengan",
            "options": [
              "tanpa setup",
              "hanya CSS Modules",
              "konfigurasi PostCSS/Tailwind",
              "hanya SCSS"
            ],
            "a": 2,
            "explain": "Tailwind diintegrasikan lewat konfigurasi build."
          },
          {
            "type": "mc",
            "q": "CSS-in-JS pada Server Component memiliki batasan karena",
            "options": [
              "menghapus CSS",
              "merusak route",
              "tidak bisa memakai hooks client",
              "migrasi"
            ],
            "a": 2,
            "explain": "Server Component tidak menjalankan kode client."
          },
          {
            "type": "mc",
            "q": "Mengatur kelas kondisional memakai",
            "options": [
              "template string atau helper classnames",
              "string +",
              "json",
              "route"
            ],
            "a": 0,
            "explain": "Template string/helper memudahkan kelas kondisional."
          },
          {
            "type": "mc",
            "q": "Font dioptimasi dengan",
            "options": [
              "CSS import saja",
              "link cdn",
              "next/font",
              "font-face manual"
            ],
            "a": 2,
            "explain": "next/font mengoptimasi pemuatan font."
          },
          {
            "type": "mc",
            "q": "Gambar dioptimasi dengan komponen",
            "options": [
              "next/image",
              "<img> biasa selalu",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "next/image menyediakan optimasi gambar."
          },
          {
            "type": "mc",
            "q": "Mengatur tema gelap biasanya lewat",
            "options": [
              "route",
              "metadata",
              "migration",
              "kelas pada root/html"
            ],
            "a": 3,
            "explain": "Kelas root menjadi pemicu variabel CSS tema."
          },
          {
            "type": "mc",
            "q": "Jika memakai SCSS pada Next.js perlu",
            "options": [
              "install sass",
              "tidak perlu apa pun",
              "hapus CSS",
              "migrasi"
            ],
            "a": 0,
            "explain": "Dukungan SCSS memerlukan paket sass."
          },
          {
            "type": "mc",
            "q": "Mengimpor CSS ke komponen client valid selama",
            "options": [
              "sembarang tempat",
              "tanpa ekstensi",
              "hanya SCSS",
              "berkas CSS diimport sesuai aturan (module/global di root)"
            ],
            "a": 3,
            "explain": "Aturan impor CSS berbeda untuk global dan module."
          }
        ]
      },
      {
        "id": "nextjs-7",
        "level": "Dasar",
        "title": "API Route (Route Handler)",
        "exercises": [
          {
            "type": "mc",
            "q": "Route handler didefinisikan di berkas",
            "options": [
              "page.js",
              "route.js",
              "api.js",
              "action.js"
            ],
            "a": 1,
            "explain": "route.js menangani request HTTP pada App Router."
          },
          {
            "type": "mc",
            "q": "Handler GET diekspor sebagai",
            "options": [
              "export async function GET()",
              "export default GET",
              "export function get()",
              "method.get()"
            ],
            "a": 0,
            "explain": "Ekspor fungsi bernama sesuai metode HTTP."
          },
          {
            "type": "mc",
            "q": "Membaca query parameter pada route handler memakai",
            "options": [
              "request.query langsung",
              "request.params",
              "new URL(request.url).searchParams",
              "window.location"
            ],
            "a": 2,
            "explain": "URL API memberi akses searchParams."
          },
          {
            "type": "mc",
            "q": "Mengembalikan JSON memakai",
            "options": [
              "return object saja",
              "Response.json(data)",
              "res.json",
              "json()"
            ],
            "a": 1,
            "explain": "Response.json membuat respons JSON."
          },
          {
            "type": "mc",
            "q": "Membaca body JSON request memakai",
            "options": [
              "request.body langsung",
              "await request.json()",
              "request.data",
              "request.form"
            ],
            "a": 1,
            "explain": "request.json() mem-parse body JSON."
          },
          {
            "type": "mc",
            "q": "Menetapkan status respons memakai",
            "options": [
              "return 201",
              "res.status(201)",
              "status=201",
              "new Response(body, { status: 201 })"
            ],
            "a": 3,
            "explain": "Objek Response menerima status HTTP."
          },
          {
            "type": "mc",
            "q": "Route handler cocok untuk",
            "options": [
              "UI halaman",
              "CSS",
              "endpoint API/server",
              "migrasi"
            ],
            "a": 2,
            "explain": "Route handler menangani API, bukan UI halaman."
          },
          {
            "type": "mc",
            "q": "Middleware Next.js didefinisikan di berkas",
            "options": [
              "app/middleware.js selalu",
              "route.js",
              "middleware.js di root",
              "config/middleware.js"
            ],
            "a": 2,
            "explain": "middleware.js pada root menjalankan logika sebelum request."
          },
          {
            "type": "mc",
            "q": "Untuk mengarahkan request dalam middleware memakai",
            "options": [
              "redirect() di route.js",
              "window.location",
              "NextResponse.redirect",
              "CSS"
            ],
            "a": 2,
            "explain": "Middleware memakai NextResponse untuk pengalihan."
          },
          {
            "type": "mc",
            "q": "Mengamankan route handler sebaiknya",
            "options": [
              "mengandalkan UI saja",
              "memverifikasi autentikasi di server",
              "tanpa validasi",
              "menonaktifkan HTTPS"
            ],
            "a": 1,
            "explain": "Autentikasi harus ditegakkan di server."
          }
        ]
      },
      {
        "id": "nextjs-8",
        "level": "Dasar",
        "title": "Deploy & Konfigurasi",
        "exercises": [
          {
            "type": "mc",
            "q": "Konfigurasi Next.js berada di",
            "options": [
              "config/next.json",
              "app.config.js",
              "next.config.js",
              "settings.js"
            ],
            "a": 2,
            "explain": "next.config.js mengatur perilaku Next.js."
          },
          {
            "type": "mc",
            "q": "Variabel environment publik diakses di browser harus berawalan",
            "options": [
              "PUBLIC_",
              "ENV_",
              "NEXT_PUBLIC_",
              "APP_"
            ],
            "a": 2,
            "explain": "Hanya variabel NEXT_PUBLIC_ yang diekspos ke klien."
          },
          {
            "type": "mc",
            "q": "Perintah menjalankan hasil build produksi adalah",
            "options": [
              "next run",
              "npm prod",
              "node start",
              "npm run start"
            ],
            "a": 3,
            "explain": "npm run start menjalankan server produksi."
          },
          {
            "type": "mc",
            "q": "Vercel adalah platform yang",
            "options": [
              "mendukung deploy Next.js secara native",
              "database SQL saja",
              "CSS library",
              "editor kode"
            ],
            "a": 0,
            "explain": "Vercel mendukung Next.js secara bawaan."
          },
          {
            "type": "mc",
            "q": "Menyimpan rahasia sebaiknya di",
            "options": [
              "kode klien",
              "CSS",
              "environment/secret manager",
              "nama route"
            ],
            "a": 2,
            "explain": "Rahasia dijaga di environment server."
          },
          {
            "type": "mc",
            "q": "Build gagal biasanya karena",
            "options": [
              "CSS terlalu panjang",
              "error tipe/import atau konfigurasi",
              "pengguna banyak",
              "database kosong"
            ],
            "a": 1,
            "explain": "Error build berasal dari kode/konfigurasi yang tidak valid."
          },
          {
            "type": "mc",
            "q": "`next build` menghasilkan",
            "options": [
              "file CSS saja",
              "bundel produksi teroptimasi",
              "database",
              "migration"
            ],
            "a": 1,
            "explain": "Build menyiapkan aset dan bundel produksi."
          },
          {
            "type": "mc",
            "q": "Mengerjakan pekerjaan berat dari route handler sebaiknya",
            "options": [
              "di dalam loop",
              "dengan sleep",
              "dilempar ke layanan/queue",
              "di CSS"
            ],
            "a": 2,
            "explain": "Queue memindahkan pekerjaan berat keluar dari request."
          },
          {
            "type": "mc",
            "q": "Mengaktifkan kompresi/pengaturan cache membantu",
            "options": [
              "menghapus route",
              "migrasi",
              "performa pengiriman aset",
              "CSS"
            ],
            "a": 2,
            "explain": "Kompresi dan cache mempercepat pengiriman aset."
          },
          {
            "type": "mc",
            "q": "Memantau error produksi Next.js terbantu dengan",
            "options": [
              "mensembunyikan error",
              "menghapus log",
              "tanpa metrik",
              "logging dan monitoring"
            ],
            "a": 3,
            "explain": "Monitoring membantu mendeteksi dan mendiagnosis error produksi."
          }
        ]
      },
      {
        "id": "nextjs-9",
        "level": "Dasar",
        "title": "Komponen & Props",
        "exercises": [
          {
            "type": "mc",
            "q": "Komponen pada Next.js ditulis seperti",
            "options": [
              "komponen React biasa",
              "class PHP",
              "file CSS",
              "route"
            ],
            "a": 0,
            "explain": "Next.js memakai komponen React."
          },
          {
            "type": "mc",
            "q": "Props pada komponen server dapat berupa",
            "options": [
              "data yang dapat diserialisasi",
              "event handler",
              "DOM node",
              "stream"
            ],
            "a": 0,
            "explain": "Props lintas server-klien harus serializable."
          },
          {
            "type": "mc",
            "q": "Komponen client menerima event seperti",
            "options": [
              "onServer",
              "onRoute",
              "onCSS",
              "onClick"
            ],
            "a": 3,
            "explain": "Event browser hanya tersedia di komponen client."
          },
          {
            "type": "mc",
            "q": "Membagi komponen menjadi server + client membantu",
            "options": [
              "menghapus state",
              "migrasi",
              "routing",
              "mengurangi JavaScript klien"
            ],
            "a": 3,
            "explain": "Server Component mengurangi bundel klien."
          },
          {
            "type": "mc",
            "q": "Komponen di Next.js dapat diimpor dari",
            "options": [
              "hanya global",
              "CSS",
              "route.js",
              "file lain dengan export/import"
            ],
            "a": 3,
            "explain": "ES modules dipakai untuk membagikan komponen."
          },
          {
            "type": "mc",
            "q": "Untuk merender daftar komponen memakai",
            "options": [
              "array.map",
              "for JSX",
              "join",
              "switch"
            ],
            "a": 0,
            "explain": "map mengubah array data menjadi elemen."
          },
          {
            "type": "mc",
            "q": "Key pada daftar membantu",
            "options": [
              "CSS",
              "routing",
              "rekonsiliasi item",
              "DB"
            ],
            "a": 2,
            "explain": "Key stabil membantu React mencocokkan item."
          },
          {
            "type": "mc",
            "q": "State lokal pada komponen client memakai",
            "options": [
              "useServer",
              "useState",
              "metadata",
              "route"
            ],
            "a": 1,
            "explain": "useState menyimpan state di komponen client."
          },
          {
            "type": "mc",
            "q": "Context dapat dipakai di",
            "options": [
              "server component tanpa batas",
              "CSS",
              "komponen client",
              "route"
            ],
            "a": 2,
            "explain": "Context memerlukan komponen client untuk perubahan dinamis."
          },
          {
            "type": "mc",
            "q": "Membuat komponen dapat dipakai ulang adalah tujuan",
            "options": [
              "migrasi",
              "routing",
              "CSS",
              "komposisi komponen"
            ],
            "a": 3,
            "explain": "Komposisi menyusun UI dari komponen kecil yang dapat dipakai ulang."
          }
        ]
      },
      {
        "id": "nextjs-10",
        "level": "Dasar",
        "title": "Metadata & SEO",
        "exercises": [
          {
            "type": "mc",
            "q": "Metadata statis diekspor dari berkas",
            "options": [
              "layout.js atau page.js",
              "route.js",
              "middleware.js",
              "next.config.js"
            ],
            "a": 0,
            "explain": "Ekspor metadata di layout/page mengatur head halaman."
          },
          {
            "type": "mc",
            "q": "Judul halaman diatur lewat",
            "options": [
              "metadata.css",
              "metadata.title",
              "metadata.route",
              "metadata.db"
            ],
            "a": 1,
            "explain": "metadata.title mengatur tag title."
          },
          {
            "type": "mc",
            "q": "Metadata dinamis dibangkitkan dengan",
            "options": [
              "makeMetadata",
              "generateMetadata",
              "metadata()",
              "useMetadata"
            ],
            "a": 1,
            "explain": "generateMetadata menghasilkan metadata berdasarkan data."
          },
          {
            "type": "mc",
            "q": "Open Graph meta membantu",
            "options": [
              "pratinjau saat dibagikan di media sosial",
              "mengatur database",
              "CSS",
              "routing"
            ],
            "a": 0,
            "explain": "OG tags memperbaiki tampilan saat dibagikan."
          },
          {
            "type": "mc",
            "q": "robots.txt dapat dikelola lewat",
            "options": [
              "CSS",
              "route.js saja",
              "metadata.robots atau berkas robots",
              "migration"
            ],
            "a": 2,
            "explain": "Pengaturan robots mengatur pengindeksan."
          },
          {
            "type": "mc",
            "q": "Sitemap dapat dibuat dengan",
            "options": [
              "CSS",
              "route.js wajib",
              "app/sitemap.js",
              "migration"
            ],
            "a": 2,
            "explain": "Konvensi sitemap.js menghasilkan sitemap."
          },
          {
            "type": "mc",
            "q": "Canonical URL membantu",
            "options": [
              "menghindari konten duplikat di mesin pencari",
              "mempercepat CSS",
              "routing",
              "migrasi"
            ],
            "a": 0,
            "explain": "Canonical menandai URL utama konten."
          },
          {
            "type": "mc",
            "q": "Mengatur viewport pada metadata Next.js",
            "options": [
              "ditulis manual wajib",
              "otomatis dikelola Next.js",
              "tidak mungkin",
              "css"
            ],
            "a": 1,
            "explain": "Next.js mengelola viewport default secara otomatis."
          },
          {
            "type": "mc",
            "q": "Structured data JSON-LD dapat disisipkan lewat",
            "options": [
              "script tag di layout/page",
              "metadata.css",
              "route.js",
              "middleware"
            ],
            "a": 0,
            "explain": "JSON-LD disisipkan sebagai skrip pada halaman."
          },
          {
            "type": "mc",
            "q": "Judul unik per halaman penting untuk",
            "options": [
              "migrasi",
              "CSS",
              "routing",
              "SEO dan orientasi pengguna"
            ],
            "a": 3,
            "explain": "Judul unik membantu SEO dan kejelasan navigasi."
          }
        ]
      },
      {
        "id": "nextjs-11",
        "level": "Menengah",
        "title": "Data Fetching Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "Request memoization pada Next.js mencegah",
            "options": [
              "CSS",
              "routing",
              "fetch ganda ke sumber sama dalam satu render",
              "migrasi"
            ],
            "a": 2,
            "explain": "Next.js menyimpan hasil fetch dalam satu permintaan render."
          },
          {
            "type": "mc",
            "q": "Data cache Next.js dapat direvalidasi berbasis",
            "options": [
              "CSS",
              "route",
              "waktu atau tag",
              "DB"
            ],
            "a": 2,
            "explain": "Revalidasi memakai interval atau tag."
          },
          {
            "type": "mc",
            "q": "Revalidasi berbasis tag memakai fungsi",
            "options": [
              "refreshTag",
              "revalidateTag",
              "clearTag",
              "resetTag"
            ],
            "a": 1,
            "explain": "revalidateTag menyegarkan data terkait tag."
          },
          {
            "type": "mc",
            "q": "`revalidatePath` dipakai untuk",
            "options": [
              "membuat route",
              "menyegarkan cache sebuah path",
              "CSS",
              "migrasi"
            ],
            "a": 1,
            "explain": "revalidatePath menyegarkan data untuk path tertentu."
          },
          {
            "type": "mc",
            "q": "Mengambil data secara paralel memakai",
            "options": [
              "for loop",
              "setTimeout",
              "CSS",
              "Promise.all"
            ],
            "a": 3,
            "explain": "Promise.all menjalankan fetch bersamaan."
          },
          {
            "type": "mc",
            "q": "Menghindari waterfall request dilakukan dengan",
            "options": [
              "menambahkan await berlapis",
              "memulai fetch lebih awal/paralel",
              "CSS",
              "migrasi"
            ],
            "a": 1,
            "explain": "Waterfall terjadi saat request menunggu berurutan."
          },
          {
            "type": "mc",
            "q": "Streaming UI dengan data memakai",
            "options": [
              "CSS",
              "Suspense di sekitar komponen async",
              "route.js",
              "middleware"
            ],
            "a": 1,
            "explain": "Suspense mengirim fallback lalu konten saat siap."
          },
          {
            "type": "mc",
            "q": "Server Actions berguna untuk",
            "options": [
              "styling",
              "mutasi data dari form",
              "routing CSS",
              "migrasi"
            ],
            "a": 1,
            "explain": "Server Action menangani mutasi di server dari form."
          },
          {
            "type": "mc",
            "q": "Setelah Server Action, menyegarkan data memakai",
            "options": [
              "window.reload selalu",
              "revalidatePath/Tag",
              "CSS",
              "migrasi"
            ],
            "a": 1,
            "explain": "Revalidasi menyegarkan cache setelah mutasi."
          },
          {
            "type": "mc",
            "q": "Error fetching sebaiknya ditangani dengan",
            "options": [
              "mengabaikan",
              "CSS",
              "reload selalu",
              "error boundary/penanganan eksplisit"
            ],
            "a": 3,
            "explain": "Penanganan error membuat UI informatif."
          }
        ]
      },
      {
        "id": "nextjs-12",
        "level": "Menengah",
        "title": "Cache & Revalidasi",
        "exercises": [
          {
            "type": "mc",
            "q": "Cache pada Next.js membantu",
            "options": [
              "menghapus data",
              "migrasi",
              "routing",
              "mengurangi request dan mempercepat"
            ],
            "a": 3,
            "explain": "Cache menyimpan hasil agar tidak diulang tiap request."
          },
          {
            "type": "mc",
            "q": "`cache: \"force-cache\"` berarti",
            "options": [
              "selalu segar",
              "memakai cache bila tersedia",
              "tanpa cache",
              "hanya POST"
            ],
            "a": 1,
            "explain": "force-cache memakai cache bila ada."
          },
          {
            "type": "mc",
            "q": "Untuk data yang sering berubah sebaiknya",
            "options": [
              "selalu di-cache",
              "tanpa revalidate",
              "CSS",
              "tidak di-cache agresif"
            ],
            "a": 3,
            "explain": "Data dinamis perlu kebijakan cache yang tepat."
          },
          {
            "type": "mc",
            "q": "Revalidate pat mengembalikan nilai",
            "options": [
              "true bila berhasil",
              "data",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Fungsi revalidasi menandakan keberhasilan."
          },
          {
            "type": "mc",
            "q": "Tag pada fetch ditulis sebagai",
            "options": [
              "tags: [...] langsung",
              "next: { tags: [...] }",
              "cache-tags",
              "route"
            ],
            "a": 1,
            "explain": "Opsi tags dipakai untuk revalidasi terarah."
          },
          {
            "type": "mc",
            "q": "Full Route Cache menyimpan",
            "options": [
              "hasil render route statis",
              "password",
              "CSS",
              "DB"
            ],
            "a": 0,
            "explain": "Route cache menyimpan HTML/RSC untuk route statis."
          },
          {
            "type": "mc",
            "q": "Router Cache bekerja di",
            "options": [
              "sisi client untuk navigasi",
              "server saja",
              "CSS",
              "DB"
            ],
            "a": 0,
            "explain": "Router cache mempercepat navigasi client."
          },
          {
            "type": "mc",
            "q": "Untuk menonaktifkan cache secara menyeluruh pada request memakai",
            "options": [
              "cache: \"no-store\"",
              "cache: true",
              "revalidate: big",
              "CSS"
            ],
            "a": 0,
            "explain": "no-store memaksa data segar."
          },
          {
            "type": "mc",
            "q": "Menandai route sebagai dinamis dapat memakai",
            "options": [
              "CSS",
              "metadata",
              "migration",
              "penggunaan API dinamis seperti cookies/headers"
            ],
            "a": 3,
            "explain": "Fungsi dinamis membuat route dirender per request."
          },
          {
            "type": "mc",
            "q": "Stale-while-revalidate berarti",
            "options": [
              "selalu segar",
              "tanpa cache",
              "menyajikan cache lama lalu memperbarui di latar",
              "menghapus cache"
            ],
            "a": 2,
            "explain": "SWR menyajikan data lama sambil menyegarkan."
          }
        ]
      },
      {
        "id": "nextjs-13",
        "level": "Menengah",
        "title": "Server Actions & Forms",
        "exercises": [
          {
            "type": "mc",
            "q": "Server action adalah fungsi",
            "options": [
              "yang berjalan di server, dipanggil dari client",
              "CSS",
              "route",
              "migration"
            ],
            "a": 0,
            "explain": "Server action menangani mutasi di server."
          },
          {
            "type": "mc",
            "q": "Direktif untuk server action adalah",
            "options": [
              "'use client'",
              "'server'",
              "'action'",
              "'use server'"
            ],
            "a": 3,
            "explain": "'use server' menandai fungsi/berkas server action."
          },
          {
            "type": "mc",
            "q": "Form dapat memanggil server action lewat prop",
            "options": [
              "onSubmit wajib",
              "action",
              "href",
              "method"
            ],
            "a": 1,
            "explain": "Prop action menerima server action."
          },
          {
            "type": "mc",
            "q": "useFormStatus membantu mengetahui",
            "options": [
              "CSS",
              "routing",
              "status submit form",
              "DB"
            ],
            "a": 2,
            "explain": "Hook form status memberi tahu kondisi submit."
          },
          {
            "type": "mc",
            "q": "useFormState/useActionState memungkinkan",
            "options": [
              "CSS",
              "mengelola state hasil action",
              "routing",
              "migrasi"
            ],
            "a": 1,
            "explain": "Hook ini mengembalikan state hasil action."
          },
          {
            "type": "mc",
            "q": "Validasi pada server action tetap wajib karena",
            "options": [
              "CSS",
              "routing",
              "data client tidak tepercaya",
              "migrasi"
            ],
            "a": 2,
            "explain": "Validasi server melindungi dari input berbahaya."
          },
          {
            "type": "mc",
            "q": "Setelah mutasi, menyegarkan data memakai",
            "options": [
              "CSS",
              "metadata",
              "route",
              "revalidatePath/Tag"
            ],
            "a": 3,
            "explain": "Revalidasi memastikan data terbaru tampil."
          },
          {
            "type": "mc",
            "q": "Mengarahkan setelah action memakai",
            "options": [
              "window.open",
              "redirect()",
              "href",
              "CSS"
            ],
            "a": 1,
            "explain": "redirect() mengalihkan setelah action."
          },
          {
            "type": "mc",
            "q": "Server action dapat memanggil",
            "options": [
              "database dan layanan server",
              "window",
              "localStorage",
              "document"
            ],
            "a": 0,
            "explain": "Server action berjalan di server sehingga akses DOM klien tidak tersedia."
          },
          {
            "type": "mc",
            "q": "Mengamankan server action dengan",
            "options": [
              "mengandalkan UI",
              "tanpa validasi",
              "memeriksa autentikasi/otorisasi",
              "CSS"
            ],
            "a": 2,
            "explain": "Action harus memverifikasi izin di server."
          }
        ]
      },
      {
        "id": "nextjs-14",
        "level": "Menengah",
        "title": "Internationalization (i18n)",
        "exercises": [
          {
            "type": "mc",
            "q": "i18n berarti",
            "options": [
              "CSS global",
              "routing saja",
              "migrasi",
              "dukungan multibahasa"
            ],
            "a": 3,
            "explain": "i18n menangani banyak bahasa/lokal."
          },
          {
            "type": "mc",
            "q": "Pendekatan routing i18n umum memakai segmen",
            "options": [
              "[lang] wajib",
              "(i18n)",
              "@locale",
              "[locale]"
            ],
            "a": 3,
            "explain": "Segmen dinamis locale memisahkan bahasa di URL."
          },
          {
            "type": "mc",
            "q": "Kamus terjemahan biasanya disimpan sebagai",
            "options": [
              "CSS",
              "route.js",
              "objek JSON per bahasa",
              "migration"
            ],
            "a": 2,
            "explain": "Terjemahan disimpan dalam berkas kamus per bahasa."
          },
          {
            "type": "mc",
            "q": "Membaca locale aktif dari params memakai",
            "options": [
              "params.lang",
              "window.locale",
              "params.locale",
              "route.locale"
            ],
            "a": 2,
            "explain": "Locale tersedia lewat params route dinamis."
          },
          {
            "type": "mc",
            "q": "Layout root per locale memungkinkan",
            "options": [
              "menghapus CSS",
              "mengatur atribut lang html",
              "migrasi",
              "routing"
            ],
            "a": 1,
            "explain": "Layout per locale dapat mengatur lang html."
          },
          {
            "type": "mc",
            "q": "redirect ke locale default dilakukan di",
            "options": [
              "CSS",
              "migration",
              "middleware atau layout",
              "route.js"
            ],
            "a": 2,
            "explain": "Middleware dapat mengarahkan ke locale yang sesuai."
          },
          {
            "type": "mc",
            "q": "Format tanggal/angka per locale memakai",
            "options": [
              "CSS",
              "Intl API",
              "route",
              "migration"
            ],
            "a": 1,
            "explain": "Intl memformat sesuai lokal pengguna."
          },
          {
            "type": "mc",
            "q": "Terjemahan sebaiknya tidak berisi",
            "options": [
              "teks biasa",
              "variabel",
              "kunci",
              "HTML mentah tak tepercaya tanpa sanitasi"
            ],
            "a": 3,
            "explain": "Menyisipkan HTML tanpa sanitasi berisiko XSS."
          },
          {
            "type": "mc",
            "q": "Menyimpan preferensi bahasa pengguna dapat di",
            "options": [
              "CSS",
              "route",
              "migration",
              "cookie/profil"
            ],
            "a": 3,
            "explain": "Cookie atau profil menyimpan preferensi bahasa."
          },
          {
            "type": "mc",
            "q": "Tautan antar bahasa sebaiknya",
            "options": [
              "menghapus path",
              "reload saja",
              "CSS",
              "mempertahankan path, mengganti locale"
            ],
            "a": 3,
            "explain": "Navigasi bahasa mempertahankan halaman dengan locale berbeda."
          }
        ]
      },
      {
        "id": "nextjs-15",
        "level": "Menengah",
        "title": "Autentikasi di Next.js",
        "exercises": [
          {
            "type": "mc",
            "q": "Autentikasi di Next.js sebaiknya ditegakkan di",
            "options": [
              "client saja",
              "CSS",
              "migration",
              "server (middleware/route/server component)"
            ],
            "a": 3,
            "explain": "Pemeriksaan di server tidak bisa dilewati pengguna."
          },
          {
            "type": "mc",
            "q": "Session biasanya disimpan di",
            "options": [
              "cookie httpOnly",
              "localStorage selalu",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Cookie httpOnly lebih aman terhadap akses skrip."
          },
          {
            "type": "mc",
            "q": "Middleware dapat dipakai untuk",
            "options": [
              "styling",
              "migrasi",
              "CSS",
              "membatasi akses berdasarkan login"
            ],
            "a": 3,
            "explain": "Middleware memeriksa kondisi sebelum route dijalankan."
          },
          {
            "type": "mc",
            "q": "Library autentikasi populer untuk Next.js adalah",
            "options": [
              "Lodash",
              "NextAuth/Auth.js",
              "jQuery",
              "MATLAB"
            ],
            "a": 1,
            "explain": "Auth.js menyediakan solusi autentikasi umum."
          },
          {
            "type": "mc",
            "q": "Menangani callback login biasanya di",
            "options": [
              "route handler",
              "CSS",
              "migration",
              "layout"
            ],
            "a": 0,
            "explain": "Route handler menangani callback OAuth."
          },
          {
            "type": "mc",
            "q": "Menyimpan password sebaiknya memakai",
            "options": [
              "md5",
              "hash kuat (bcrypt/argon2)",
              "plain text",
              "base64"
            ],
            "a": 1,
            "explain": "Hashing kuat melindungi password."
          },
          {
            "type": "mc",
            "q": "CSRF protection penting pada",
            "options": [
              "CSS",
              "form mutasi",
              "migrasi",
              "routing hanya"
            ],
            "a": 1,
            "explain": "Form mutasi perlu token/perlindungan CSRF."
          },
          {
            "type": "mc",
            "q": "Membatasi area terproteksi dilakukan dengan",
            "options": [
              "menyembunyikan tautan saja",
              "CSS",
              "memeriksa sesi sebelum render/handler",
              "migration"
            ],
            "a": 2,
            "explain": "Menyembunyikan tautan tidak cukup; server harus memeriksa sesi."
          },
          {
            "type": "mc",
            "q": "Logout sebaiknya",
            "options": [
              "hanya CSS",
              "migrasi",
              "menghapus sesi di server dan cookie",
              "menghapus route"
            ],
            "a": 2,
            "explain": "Logout harus mencabut sesi di server."
          },
          {
            "type": "mc",
            "q": "Role-based access control memeriksa",
            "options": [
              "izin per peran di server",
              "warna tombol",
              "CSS",
              "migrasi"
            ],
            "a": 0,
            "explain": "RBAC memverifikasi izin per peran di server."
          }
        ]
      },
      {
        "id": "nextjs-16",
        "level": "Menengah",
        "title": "Middleware & Routing Guards",
        "exercises": [
          {
            "type": "mc",
            "q": "Middleware Next.js berjalan",
            "options": [
              "sebelum route dirender/ditangani",
              "setelah respons dikirim",
              "saat build saja",
              "di CSS"
            ],
            "a": 0,
            "explain": "Middleware memproses request sebelum mencapai route."
          },
          {
            "type": "mc",
            "q": "Matcher middleware diatur lewat",
            "options": [
              "route.js",
              "CSS",
              "export const config = { matcher: [...] }",
              "migrasi"
            ],
            "a": 2,
            "explain": "Konfigurasi matcher membatasi path yang diproses middleware."
          },
          {
            "type": "mc",
            "q": "NextResponse.next() berarti",
            "options": [
              "menghentikan",
              "melanjutkan request",
              "redirect",
              "error"
            ],
            "a": 1,
            "explain": "next() meneruskan request ke route."
          },
          {
            "type": "mc",
            "q": "NextResponse.redirect() dipakai untuk",
            "options": [
              "CSS",
              "migrasi",
              "pengalihan URL",
              "styling"
            ],
            "a": 2,
            "explain": "redirect membuat respons pengalihan."
          },
          {
            "type": "mc",
            "q": "NextResponse.rewrite() dipakai untuk",
            "options": [
              "menyajikan konten berbeda tanpa mengubah URL",
              "menghapus route",
              "CSS",
              "migrasi"
            ],
            "a": 0,
            "explain": "rewrite mengubah tujuan internal tanpa mengubah URL terlihat."
          },
          {
            "type": "mc",
            "q": "Middleware cocok untuk",
            "options": [
              "query database berat",
              "CSS",
              "migrasi",
              "auth, i18n, A/B testing ringan"
            ],
            "a": 3,
            "explain": "Middleware untuk logika ringan di tepi; pekerjaan berat sebaiknya di route."
          },
          {
            "type": "mc",
            "q": "Mengatur header keamanan dapat dilakukan di",
            "options": [
              "CSS",
              "migrasi",
              "middleware atau konfigurasi",
              "metadata"
            ],
            "a": 2,
            "explain": "Header keamanan dapat disetel di middleware/konfigurasi."
          },
          {
            "type": "mc",
            "q": "Route group berguna untuk",
            "options": [
              "menghapus route",
              "CSS",
              "berbagi layout/middleware per grup",
              "migrasi"
            ],
            "a": 2,
            "explain": "Route group mengelompokkan route dengan layout bersama."
          },
          {
            "type": "mc",
            "q": "Proteksi route dengan redirect saat tidak login memakai",
            "options": [
              "CSS",
              "migrasi",
              "metadata",
              "NextResponse.redirect di middleware"
            ],
            "a": 3,
            "explain": "Middleware mengalihkan pengguna tanpa sesi."
          },
          {
            "type": "mc",
            "q": "Middleware harus berhati-hati agar tidak",
            "options": [
              "membuat route",
              "CSS",
              "migrasi",
              "memperlambat semua request"
            ],
            "a": 3,
            "explain": "Middleware berjalan tiap request sehingga harus ringan."
          }
        ]
      },
      {
        "id": "nextjs-17",
        "level": "Menengah",
        "title": "Optimasi Gambar & Font",
        "exercises": [
          {
            "type": "mc",
            "q": "next/image membutuhkan properti",
            "options": [
              "hanya src",
              "hanya alt",
              "src, width, height (atau fill)",
              "src dan color"
            ],
            "a": 2,
            "explain": "next/image butuh dimensi atau mode fill."
          },
          {
            "type": "mc",
            "q": "Mode fill pada next/image berguna untuk",
            "options": [
              "menghapus gambar",
              "CSS",
              "gambar mengisi kontainer",
              "routing"
            ],
            "a": 2,
            "explain": "fill membuat gambar mengisi parent relatif."
          },
          {
            "type": "mc",
            "q": "Properti alt pada gambar penting untuk",
            "options": [
              "CSS",
              "aksesibilitas",
              "routing",
              "migrasi"
            ],
            "a": 1,
            "explain": "alt membantu pembaca layar memahami gambar."
          },
          {
            "type": "mc",
            "q": "Lazy loading gambar pada next/image",
            "options": [
              "tidak didukung",
              "wajib manual",
              "diterapkan otomatis",
              "hanya SVG"
            ],
            "a": 2,
            "explain": "next/image memuat gambar secara lazy secara default."
          },
          {
            "type": "mc",
            "q": "next/font membantu",
            "options": [
              "menulis SQL",
              "CSS",
              "mengoptimasi pemuatan font dan menghindari layout shift",
              "routing"
            ],
            "a": 2,
            "explain": "next/font mengoptimasi font termasuk menghindari layout shift."
          },
          {
            "type": "mc",
            "q": "Menggunakan font lokal dengan next/font memakai",
            "options": [
              "link cdn",
              "next/font/local",
              "CSS import",
              "migration"
            ],
            "a": 1,
            "explain": "next/font/local memuat berkas font lokal."
          },
          {
            "type": "mc",
            "q": "Ukuran gambar yang tepat penting untuk",
            "options": [
              "performa",
              "CSS",
              "routing",
              "migrasi"
            ],
            "a": 0,
            "explain": "Gambar terlalu besar memperlambat halaman."
          },
          {
            "type": "mc",
            "q": "Format gambar modern yang didukung optimasi adalah",
            "options": [
              "WebP/AVIF",
              "BMP hanya",
              "TIFF",
              "PSD"
            ],
            "a": 0,
            "explain": "Optimasi menyajikan format modern seperti WebP/AVIF."
          },
          {
            "type": "mc",
            "q": "Mengatur domain gambar eksternal dilakukan di",
            "options": [
              "CSS",
              "route.js",
              "migration",
              "next.config.js (images.remotePatterns)"
            ],
            "a": 3,
            "explain": "Domain eksternal perlu didaftarkan pada konfigurasi images."
          },
          {
            "type": "mc",
            "q": "Priority pada gambar hero membantu",
            "options": [
              "menghapus alt",
              "CSS",
              "memuat gambar utama lebih awal",
              "routing"
            ],
            "a": 2,
            "explain": "Priority memprioritaskan pemuatan gambar penting."
          }
        ]
      },
      {
        "id": "nextjs-18",
        "level": "Menengah",
        "title": "Testing Next.js",
        "exercises": [
          {
            "type": "mc",
            "q": "Testing komponen/halaman Next.js dapat memakai",
            "options": [
              "Composer",
              "Rails",
              "Vitest/Jest + Testing Library",
              "MATLAB"
            ],
            "a": 2,
            "explain": "Testing JS memakai runner seperti Vitest/Jest."
          },
          {
            "type": "mc",
            "q": "End-to-end test Next.js sering memakai",
            "options": [
              "Lodash",
              "jQuery",
              "Playwright atau Cypress",
              "make"
            ],
            "a": 2,
            "explain": "Playwright/Cypress menguji alur aplikasi nyata."
          },
          {
            "type": "mc",
            "q": "Menguji route handler dapat memanggil",
            "options": [
              "CSS",
              "migration",
              "fungsi GET/POST secara langsung",
              "layout"
            ],
            "a": 2,
            "explain": "Route handler bisa diuji dengan memanggil ekspornya."
          },
          {
            "type": "mc",
            "q": "Mocking fetch pada test memakai",
            "options": [
              "CSS",
              "MSW atau stub",
              "route",
              "migration"
            ],
            "a": 1,
            "explain": "Stub/MSW mensimulasikan respons jaringan."
          },
          {
            "type": "mc",
            "q": "Menguji server component memerlukan",
            "options": [
              "hanya CSS",
              "tanpa React",
              "hanya route",
              "lingkungan yang mendukung render server"
            ],
            "a": 3,
            "explain": "Server Component butuh render server pada test."
          },
          {
            "type": "mc",
            "q": "Assertion berbasis perilaku menguji",
            "options": [
              "struktur internal",
              "nama variabel",
              "apa yang dilihat pengguna",
              "CSS"
            ],
            "a": 2,
            "explain": "Test perilaku lebih tahan refactor."
          },
          {
            "type": "mc",
            "q": "Menguji auth flow sebaiknya mencakup",
            "options": [
              "login sukses/gagal dan akses terproteksi",
              "hanya CSS",
              "hanya route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Coverage auth memastikan akses terkendali."
          },
          {
            "type": "mc",
            "q": "Seed data untuk E2E dapat memakai",
            "options": [
              "database produksi",
              "CSS",
              "migration langsung ke prod",
              "database uji terpisah"
            ],
            "a": 3,
            "explain": "Database uji terpisah menjaga data produksi."
          },
          {
            "type": "mc",
            "q": "Coverage membantu",
            "options": [
              "mempercepat CSS",
              "migrasi",
              "routing",
              "mengetahui bagian yang teruji"
            ],
            "a": 3,
            "explain": "Coverage menunjukkan cakupan test."
          },
          {
            "type": "mc",
            "q": "Test snapshot Next.js sebaiknya",
            "options": [
              "selalu dipakai",
              "mengganti asersi",
              "menghapus test",
              "digunakan bijak; bisa rapuh"
            ],
            "a": 3,
            "explain": "Snapshot besar mudah rapuh."
          }
        ]
      },
      {
        "id": "nextjs-19",
        "level": "Menengah",
        "title": "Environment Variables",
        "exercises": [
          {
            "type": "mc",
            "q": "Variabel environment server aman karena",
            "options": [
              "CSS",
              "tidak dikirim ke browser",
              "routing",
              "migrasi"
            ],
            "a": 1,
            "explain": "Hanya variabel klien berawalan NEXT_PUBLIC_ yang diekspos."
          },
          {
            "type": "mc",
            "q": "Nilai NEXT_PUBLIC_ di-embed saat",
            "options": [
              "setiap request",
              "CSS",
              "routing",
              "build, bukan dibaca ulang saat runtime"
            ],
            "a": 3,
            "explain": "Variabel publik di-inline saat build."
          },
          {
            "type": "mc",
            "q": "Menyimpan rahasia .env sebaiknya",
            "options": [
              "selalu di-commit",
              "tidak di-commit ke repository",
              "di CSS",
              "di route"
            ],
            "a": 1,
            "explain": "Rahasia tidak boleh masuk source control."
          },
          {
            "type": "mc",
            "q": "Membaca env di server memakai",
            "options": [
              "window.env",
              "process.env.NAMA",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "process.env tersedia di server."
          },
          {
            "type": "mc",
            "q": "Membaca env NEXT_PUBLIC_ di client memakai",
            "options": [
              "window.env",
              "CSS",
              "process.env.NEXT_PUBLIC_NAMA",
              "DB"
            ],
            "a": 2,
            "explain": "Variabel publik diakses lewat process.env saat build."
          },
          {
            "type": "mc",
            "q": "Config berbeda per lingkungan (dev/staging/prod) memakai",
            "options": [
              "satu env untuk semua",
              "CSS",
              "migration",
              "berkas env terpisah"
            ],
            "a": 3,
            "explain": "Env terpisah memisahkan konfigurasi tiap lingkungan."
          },
          {
            "type": "mc",
            "q": "Layanan seperti Vercel menyimpan env di",
            "options": [
              "CSS",
              "pengaturan proyek/secret",
              "route",
              "migration"
            ],
            "a": 1,
            "explain": "Platform menyimpan env di pengaturan proyek."
          },
          {
            "type": "mc",
            "q": "Mengubah NEXT_PUBLIC_ memerlukan",
            "options": [
              "tidak apa-apa",
              "CSS",
              "migrasi",
              "build ulang agar terpakai"
            ],
            "a": 3,
            "explain": "Nilai publik dibekukan saat build."
          },
          {
            "type": "mc",
            "q": "Menyalahgunakan env untuk data sensitif di client berisiko",
            "options": [
              "kebocoran",
              "CSS",
              "routing",
              "migrasi"
            ],
            "a": 0,
            "explain": "Data sensitif di klien bisa dibaca siapa pun."
          },
          {
            "type": "mc",
            "q": "Validasi keberadaan env saat start membantu",
            "options": [
              "CSS",
              "routing",
              "mendeteksi konfigurasi hilang lebih awal",
              "migrasi"
            ],
            "a": 2,
            "explain": "Validasi env mencegah kegagalan runtime."
          }
        ]
      },
      {
        "id": "nextjs-20",
        "level": "Menengah",
        "title": "Data Mutasi & Optimistic UI",
        "exercises": [
          {
            "type": "mc",
            "q": "Mutasi data dari client sebaiknya lewat",
            "options": [
              "CSS",
              "layout",
              "server action atau route handler",
              "metadata"
            ],
            "a": 2,
            "explain": "Mutasi dijalankan di server."
          },
          {
            "type": "mc",
            "q": "Optimistic UI berarti",
            "options": [
              "menunggu server selalu",
              "CSS",
              "menampilkan hasil sementara sebelum server merespons",
              "migrasi"
            ],
            "a": 2,
            "explain": "Optimistic UI memberi respons instan."
          },
          {
            "type": "mc",
            "q": "Jika mutasi gagal, aplikasi perlu",
            "options": [
              "diam saja",
              "CSS",
              "migrasi",
              "mengembalikan state/rollback"
            ],
            "a": 3,
            "explain": "Rollback memulihkan state saat gagal."
          },
          {
            "type": "mc",
            "q": "Menyegarkan data setelah mutasi memakai",
            "options": [
              "CSS",
              "revalidatePath/Tag",
              "metadata",
              "layout"
            ],
            "a": 1,
            "explain": "Revalidasi memperbarui data terkait."
          },
          {
            "type": "mc",
            "q": "useOptimistic membantu",
            "options": [
              "menulis CSS",
              "mengelola state optimistik",
              "routing",
              "migrasi"
            ],
            "a": 1,
            "explain": "Hook ini memungkinkan tampilan optimistik."
          },
          {
            "type": "mc",
            "q": "Mengunci tombol saat submit mencegah",
            "options": [
              "CSS",
              "routing",
              "pengiriman ganda",
              "migrasi"
            ],
            "a": 2,
            "explain": "Menonaktifkan tombol mencegah duplikasi submit."
          },
          {
            "type": "mc",
            "q": "Validasi server-side tetap diperlukan meski ada validasi klien karena",
            "options": [
              "CSS",
              "routing",
              "migrasi",
              "klien tidak tepercaya"
            ],
            "a": 3,
            "explain": "Validasi klien bisa dilewati."
          },
          {
            "type": "mc",
            "q": "Menampilkan pesan sukses/gagal mutasi penting untuk",
            "options": [
              "umpan balik pengguna",
              "CSS",
              "routing",
              "migrasi"
            ],
            "a": 0,
            "explain": "Umpan balik memberi kejelasan hasil aksi."
          },
          {
            "type": "mc",
            "q": "Mengubah data terkait setelah mutasi memerlukan",
            "options": [
              "CSS",
              "revalidasi atau update cache lokal",
              "routing",
              "migrasi"
            ],
            "a": 1,
            "explain": "Cache harus diperbarui agar konsisten."
          },
          {
            "type": "mc",
            "q": "Idempotensi mutasi membantu",
            "options": [
              "mencegah efek ganda saat retry",
              "CSS",
              "routing",
              "migrasi"
            ],
            "a": 0,
            "explain": "Operasi idempoten aman diulang."
          }
        ]
      },
      {
        "id": "nextjs-21",
        "level": "Advance",
        "title": "Rendering Mode Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "Static rendering menghasilkan halaman",
            "options": [
              "setiap request",
              "di CSS",
              "di browser selalu",
              "saat build"
            ],
            "a": 3,
            "explain": "Static rendering membuat HTML saat build."
          },
          {
            "type": "mc",
            "q": "Dynamic rendering dilakukan",
            "options": [
              "saat build",
              "di CSS",
              "per request",
              "tanpa server"
            ],
            "a": 2,
            "explain": "Rendering dinamis dijalankan setiap request."
          },
          {
            "type": "mc",
            "q": "Partial Prerendering menggabungkan",
            "options": [
              "bagian statis dan dinamis dalam satu halaman",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "PPR menyajikan shell statis dengan bagian dinamis."
          },
          {
            "type": "mc",
            "q": "ISR (Incremental Static Regeneration) memungkinkan",
            "options": [
              "menghapus halaman",
              "CSS",
              "memperbarui halaman statis setelah build",
              "migrasi"
            ],
            "a": 2,
            "explain": "ISR menyegarkan halaman statis tanpa rebuild penuh."
          },
          {
            "type": "mc",
            "q": "Menyetel revalidate pada segmen memakai",
            "options": [
              "export const ttl",
              "export function css",
              "export const revalidate",
              "route.js"
            ],
            "a": 2,
            "explain": "Ekspor revalidate mengatur interval penyegaran segmen."
          },
          {
            "type": "mc",
            "q": "Menyetel dynamic pada segmen memakai",
            "options": [
              "export const mode",
              "export function render",
              "CSS",
              "export const dynamic"
            ],
            "a": 3,
            "explain": "Ekspor dynamic mengatur perilaku render segmen."
          },
          {
            "type": "mc",
            "q": "Edge runtime berguna untuk",
            "options": [
              "respons cepat di dekat pengguna",
              "query database berat",
              "CSS",
              "migrasi"
            ],
            "a": 0,
            "explain": "Edge menjalankan kode dekat pengguna untuk latensi rendah."
          },
          {
            "type": "mc",
            "q": "Pilihan runtime pada route handler diatur dengan",
            "options": [
              "export const env",
              "export const runtime",
              "CSS",
              "route.js config"
            ],
            "a": 1,
            "explain": "Ekspor runtime memilih nodejs atau edge."
          },
          {
            "type": "mc",
            "q": "Streaming pada App Router memakai",
            "options": [
              "Suspense dan async component",
              "CSS",
              "migration",
              "layout.js"
            ],
            "a": 0,
            "explain": "Suspense men-stream bagian saat siap."
          },
          {
            "type": "mc",
            "q": "Memilih mode rendering bergantung pada",
            "options": [
              "kebutuhan kesegaran data dan performa",
              "CSS",
              "warna",
              "route"
            ],
            "a": 0,
            "explain": "Data dinamis vs statis menentukan mode render."
          }
        ]
      },
      {
        "id": "nextjs-22",
        "level": "Advance",
        "title": "Skalabilitas & Arsitektur",
        "exercises": [
          {
            "type": "mc",
            "q": "Memisahkan komponen server dan client membantu",
            "options": [
              "menghapus CSS",
              "migrasi",
              "mengatur batas data dan interaksi",
              "routing"
            ],
            "a": 2,
            "explain": "Batas yang jelas menjaga bundel klien kecil."
          },
          {
            "type": "mc",
            "q": "Struktur fitur (feature folders) membantu",
            "options": [
              "CSS",
              "migrasi",
              "navigasi dan perawatan kode besar",
              "routing"
            ],
            "a": 2,
            "explain": "Feature folders mengelompokkan kode per fitur."
          },
          {
            "type": "mc",
            "q": "Data access layer terpisah memudahkan",
            "options": [
              "CSS",
              "routing",
              "migrasi",
              "pengujian dan pemakaian ulang"
            ],
            "a": 3,
            "explain": "Lapisan akses data memisahkan detail DB dari UI."
          },
          {
            "type": "mc",
            "q": "Caching berlapis perlu dipahami agar",
            "options": [
              "CSS",
              "routing",
              "data konsisten dan cepat",
              "migrasi"
            ],
            "a": 2,
            "explain": "Beberapa lapisan cache harus konsisten."
          },
          {
            "type": "mc",
            "q": "Server action dan route handler sebaiknya",
            "options": [
              "duplikasi tanpa aturan",
              "tanpa validasi",
              "berbagi validasi dan otorisasi",
              "CSS"
            ],
            "a": 2,
            "explain": "Berbagi validasi menjaga konsistensi keamanan."
          },
          {
            "type": "mc",
            "q": "Memindahkan pekerjaan berat ke worker/queue membantu",
            "options": [
              "CSS",
              "routing",
              "respons request cepat",
              "migrasi"
            ],
            "a": 2,
            "explain": "Queue memindahkan pekerjaan berat keluar dari request."
          },
          {
            "type": "mc",
            "q": "Menangani error terpusat di App Router memakai",
            "options": [
              "CSS",
              "route.js",
              "migration",
              "error.js dan penanganan eksplisit"
            ],
            "a": 3,
            "explain": "error.js menangkap error pada segmen."
          },
          {
            "type": "mc",
            "q": "Observability produksi memerlukan",
            "options": [
              "CSS",
              "routing",
              "migrasi",
              "log, metrik, dan tracing"
            ],
            "a": 3,
            "explain": "Log terpusat, metrik, dan tracing membantu diagnosis."
          },
          {
            "type": "mc",
            "q": "Konfigurasi environment per tahap deploy penting untuk",
            "options": [
              "memisahkan dev/staging/produksi",
              "CSS",
              "routing",
              "migrasi"
            ],
            "a": 0,
            "explain": "Tiap tahap memakai konfigurasi berbeda."
          },
          {
            "type": "mc",
            "q": "Menghindari over-fetching dilakukan dengan",
            "options": [
              "memilih data seperlunya",
              "mengirim semua relasi",
              "CSS",
              "routing"
            ],
            "a": 0,
            "explain": "Hanya mengambil data yang dibutuhkan menekan payload."
          }
        ]
      },
      {
        "id": "nextjs-23",
        "level": "Advance",
        "title": "Caching Lanjutan & Strategi",
        "exercises": [
          {
            "type": "mc",
            "q": "Fetch cache dan data cache berbeda karena",
            "options": [
              "fetch cache menyimpan respons fetch; data cache dipakai API data lainnya",
              "tidak ada perbedaan",
              "CSS",
              "migrasi"
            ],
            "a": 0,
            "explain": "Fetch cache khusus respons fetch; data cache untuk akses data lain."
          },
          {
            "type": "mc",
            "q": "`unstable_cache` dipakai untuk",
            "options": [
              "meng-cache hasil fungsi data",
              "CSS",
              "routing",
              "migrasi"
            ],
            "a": 0,
            "explain": "unstable_cache menyimpan hasil fungsi data."
          },
          {
            "type": "mc",
            "q": "Menandai tag pada cache memungkinkan",
            "options": [
              "revalidasi terarah",
              "menghapus semua data",
              "CSS",
              "routing"
            ],
            "a": 0,
            "explain": "Tag memungkinkan penyegaran selektif."
          },
          {
            "type": "mc",
            "q": "Router cache memengaruhi",
            "options": [
              "server DB",
              "CSS",
              "navigasi client yang cepat",
              "migration"
            ],
            "a": 2,
            "explain": "Router cache mempercepat navigasi back/forward."
          },
          {
            "type": "mc",
            "q": "Stale data pada router cache dapat disegarkan dengan",
            "options": [
              "revalidatePath/revalidateTag",
              "CSS",
              "migrasi",
              "metadata"
            ],
            "a": 0,
            "explain": "Revalidasi menyegarkan data pada cache."
          },
          {
            "type": "mc",
            "q": "Menyimpan cache di CDN membantu",
            "options": [
              "menghapus DB",
              "respons lebih cepat global",
              "CSS",
              "routing"
            ],
            "a": 1,
            "explain": "CDN mendekatkan cache ke pengguna."
          },
          {
            "type": "mc",
            "q": "Cache personal (per user) berisiko bila",
            "options": [
              "selalu kecil",
              "dibagi antar pengguna",
              "CSS",
              "routing"
            ],
            "a": 1,
            "explain": "Cache per user tidak boleh dibagikan ke pengguna lain."
          },
          {
            "type": "mc",
            "q": "Menonaktifkan cache tanpa alasan dapat",
            "options": [
              "mempercepat",
              "menurunkan performa",
              "CSS",
              "routing"
            ],
            "a": 1,
            "explain": "Cache membantu performa; menonaktifkan membebani server."
          },
          {
            "type": "mc",
            "q": "Revalidasi berbasis waktu cocok untuk",
            "options": [
              "data real-time",
              "data yang berubah berkala",
              "CSS",
              "routing"
            ],
            "a": 1,
            "explain": "Interval waktu cocok untuk data yang berubah periodik."
          },
          {
            "type": "mc",
            "q": "Memantau cache hit/miss membantu",
            "options": [
              "mengukur efektivitas cache",
              "CSS",
              "migrasi",
              "routing"
            ],
            "a": 0,
            "explain": "Metrik cache hit menunjukkan efek strategi cache."
          }
        ]
      },
      {
        "id": "nextjs-24",
        "level": "Advance",
        "title": "Keamanan Next.js",
        "exercises": [
          {
            "type": "mc",
            "q": "Rahasia di variabel NEXT_PUBLIC_ akan",
            "options": [
              "terekspos ke browser",
              "aman selalu",
              "CSS",
              "routing"
            ],
            "a": 0,
            "explain": "NEXT_PUBLIC_ masuk bundel klien."
          },
          {
            "type": "mc",
            "q": "Header keamanan seperti CSP membantu mencegah",
            "options": [
              "CSS",
              "injeksi skrip",
              "migrasi",
              "routing"
            ],
            "a": 1,
            "explain": "CSP membatasi sumber skrip yang boleh berjalan."
          },
          {
            "type": "mc",
            "q": "Cookie sesi sebaiknya memakai",
            "options": [
              "plain text",
              "CSS",
              "route",
              "httpOnly, secure, sameSite"
            ],
            "a": 3,
            "explain": "Atribut cookie meningkatkan keamanan sesi."
          },
          {
            "type": "mc",
            "q": "Server action wajib memverifikasi",
            "options": [
              "autentikasi dan otorisasi",
              "CSS",
              "routing",
              "migrasi"
            ],
            "a": 0,
            "explain": "Action bisa dipanggil klien sehingga harus memverifikasi izin."
          },
          {
            "type": "mc",
            "q": "Validasi input di server penting karena",
            "options": [
              "CSS",
              "client tidak tepercaya",
              "routing",
              "migrasi"
            ],
            "a": 1,
            "explain": "Input dari klien bisa berbahaya."
          },
          {
            "type": "mc",
            "q": "Menyembunyikan tautan admin saja tidak cukup karena",
            "options": [
              "CSS",
              "routing",
              "migrasi",
              "URL bisa diakses langsung"
            ],
            "a": 3,
            "explain": "Proteksi harus di server, bukan hanya UI."
          },
          {
            "type": "mc",
            "q": "Content injection dapat dicegah dengan",
            "options": [
              "CSS",
              "routing",
              "escaping dan sanitasi",
              "migrasi"
            ],
            "a": 2,
            "explain": "Escaping/sanitasi mencegah XSS."
          },
          {
            "type": "mc",
            "q": "Rate limiting endpoint membantu mencegah",
            "options": [
              "CSS",
              "routing",
              "penyalahgunaan dan brute force",
              "migrasi"
            ],
            "a": 2,
            "explain": "Rate limit membatasi request berlebihan."
          },
          {
            "type": "mc",
            "q": "Dependency yang usang berisiko",
            "options": [
              "kerentanan keamanan",
              "CSS",
              "routing",
              "migrasi"
            ],
            "a": 0,
            "explain": "Pembaruan dependency menutup celah keamanan."
          },
          {
            "type": "mc",
            "q": "Detail error internal sebaiknya",
            "options": [
              "tidak ditampilkan ke pengguna produksi",
              "selalu ditampilkan",
              "CSS",
              "routing"
            ],
            "a": 0,
            "explain": "Detail internal bisa membuka informasi sensitif."
          }
        ]
      },
      {
        "id": "nextjs-25",
        "level": "Advance",
        "title": "Integrasi & State Management",
        "exercises": [
          {
            "type": "mc",
            "q": "Library state client populer untuk Next.js adalah",
            "options": [
              "Composer",
              "Rails",
              "Zustand/Redux",
              "MATLAB"
            ],
            "a": 2,
            "explain": "Zustand/Redux untuk state client."
          },
          {
            "type": "mc",
            "q": "State server vs client sebaiknya",
            "options": [
              "dipisah pengelolaannya",
              "digabung selalu",
              "CSS",
              "routing"
            ],
            "a": 0,
            "explain": "Data server (cache) berbeda dari state UI."
          },
          {
            "type": "mc",
            "q": "Library data-fetching client (SWR/React Query) membantu",
            "options": [
              "CSS",
              "routing",
              "cache dan revalidasi data client",
              "migrasi"
            ],
            "a": 2,
            "explain": "Mereka mengelola cache/loading/error pada client."
          },
          {
            "type": "mc",
            "q": "Hydration state dari server ke client dapat memakai",
            "options": [
              "window global",
              "CSS",
              "migration",
              "data yang di-serialisasi di props"
            ],
            "a": 3,
            "explain": "Serialisasi di props menghidrasi state client."
          },
          {
            "type": "mc",
            "q": "Integrasi API eksternal sebaiknya memakai",
            "options": [
              "panggilan langsung di mana-mana",
              "CSS",
              "routing",
              "abstraksi data access dengan error handling"
            ],
            "a": 3,
            "explain": "Abstraksi menjaga konsistensi dan penanganan error."
          },
          {
            "type": "mc",
            "q": "Webhook masuk diverifikasi dengan",
            "options": [
              "menerima apa saja",
              "CSS",
              "routing",
              "signature/token"
            ],
            "a": 3,
            "explain": "Verifikasi memastikan webhook dari sumber sah."
          },
          {
            "type": "mc",
            "q": "Mengirim request keluar di server memakai",
            "options": [
              "fetch di server component/route",
              "window.fetch",
              "CSS",
              "migration"
            ],
            "a": 0,
            "explain": "Server dapat memanggil fetch langsung."
          },
          {
            "type": "mc",
            "q": "Menyimpan token klien sebaiknya",
            "options": [
              "localStorage selalu",
              "di cookie httpOnly bila memungkinkan",
              "CSS",
              "routing"
            ],
            "a": 1,
            "explain": "Cookie httpOnly lebih aman dari akses skrip."
          },
          {
            "type": "mc",
            "q": "Optimistic update memberi",
            "options": [
              "UI responsif sebelum konfirmasi server",
              "data pasti benar",
              "CSS",
              "routing"
            ],
            "a": 0,
            "explain": "Optimistic update menampilkan hasil sementara sebelum server merespons."
          },
          {
            "type": "mc",
            "q": "Menangani kegagalan integrasi memerlukan",
            "options": [
              "mengabaikan",
              "retry dan fallback terkontrol",
              "CSS",
              "routing"
            ],
            "a": 1,
            "explain": "Retry/fallback menjaga keandalan integrasi."
          }
        ]
      },
      {
        "id": "nextjs-26",
        "level": "Advance",
        "title": "Performance Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "Core Web Vitals mengukur",
            "options": [
              "CSS",
              "routing",
              "pengalaman performa pengguna",
              "migrasi"
            ],
            "a": 2,
            "explain": "CWV mengukur LCP, INP, CLS, dan metrik terkait."
          },
          {
            "type": "mc",
            "q": "LCP berkaitan dengan",
            "options": [
              "CSS",
              "routing",
              "kecepatan elemen terbesar tampil",
              "migrasi"
            ],
            "a": 2,
            "explain": "LCP mengukur kecepatan konten utama muncul."
          },
          {
            "type": "mc",
            "q": "Code splitting membantu",
            "options": [
              "menghapus CSS",
              "routing",
              "memuat kode sesuai kebutuhan",
              "migrasi"
            ],
            "a": 2,
            "explain": "Code splitting memperkecil bundel awal."
          },
          {
            "type": "mc",
            "q": "Dynamic import komponen client memakai",
            "options": [
              "link cdn",
              "next/dynamic",
              "CSS",
              "migration"
            ],
            "a": 1,
            "explain": "next/dynamic memuat komponen saat dibutuhkan."
          },
          {
            "type": "mc",
            "q": "Mengurangi JavaScript klien membantu",
            "options": [
              "CSS",
              "routing",
              "migrasi",
              "mempercepat interaktivitas"
            ],
            "a": 3,
            "explain": "JS klien lebih sedikit membuat halaman lebih responsif."
          },
          {
            "type": "mc",
            "q": "Memuat font dengan tepat membantu mencegah",
            "options": [
              "CSS",
              "routing",
              "layout shift",
              "migrasi"
            ],
            "a": 2,
            "explain": "Optimasi font mengurangi CLS."
          },
          {
            "type": "mc",
            "q": "Mengukur performa sebaiknya dengan",
            "options": [
              "menebak",
              "CSS",
              "profiling dan Lighthouse",
              "routing"
            ],
            "a": 2,
            "explain": "Pengukuran nyata memandu optimasi."
          },
          {
            "type": "mc",
            "q": "Mengoptimasi gambar membantu",
            "options": [
              "CSS",
              "routing",
              "LCP dan bandwidth",
              "migrasi"
            ],
            "a": 2,
            "explain": "Gambar teroptimasi mempercepat LCP dan menghemat bandwidth."
          },
          {
            "type": "mc",
            "q": "Memanfaatkan cache statis membantu",
            "options": [
              "CSS",
              "routing",
              "migrasi",
              "respons cepat dan beban server rendah"
            ],
            "a": 3,
            "explain": "Cache mengurangi beban dan mempercepat respons."
          },
          {
            "type": "mc",
            "q": "Menunda skrip non-kritis memakai",
            "options": [
              "CSS",
              "dynamic import/lazy loading",
              "routing",
              "migrasi"
            ],
            "a": 1,
            "explain": "Skrip non-kritis dimuat belakangan."
          }
        ]
      },
      {
        "id": "nextjs-27",
        "level": "Advance",
        "title": "Streaming & Suspense Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "Streaming memberi keuntungan",
            "options": [
              "CSS",
              "routing",
              "konten awal tampil lebih cepat",
              "migrasi"
            ],
            "a": 2,
            "explain": "Streaming mengirim bagian halaman saat siap."
          },
          {
            "type": "mc",
            "q": "Suspense boundary pada server memungkinkan",
            "options": [
              "CSS",
              "menunda bagian tertentu tanpa menahan seluruh halaman",
              "routing",
              "migrasi"
            ],
            "a": 1,
            "explain": "Boundary terpisah menunda hanya bagian terkait."
          },
          {
            "type": "mc",
            "q": "`loading.js` setara dengan",
            "options": [
              "CSS",
              "route handler",
              "Suspense di level segmen",
              "migration"
            ],
            "a": 2,
            "explain": "loading.js menyediakan fallback segmen."
          },
          {
            "type": "mc",
            "q": "Menempatkan boundary terlalu tinggi dapat",
            "options": [
              "CSS",
              "routing",
              "menahan bagian lain ikut menunggu",
              "migrasi"
            ],
            "a": 2,
            "explain": "Fallback yang tinggi membuat seluruh area menunggu."
          },
          {
            "type": "mc",
            "q": "Streaming memerlukan",
            "options": [
              "render dinamis atau dukungan streaming",
              "CSS",
              "routing",
              "migrasi"
            ],
            "a": 0,
            "explain": "Streaming butuh dukungan server/render."
          },
          {
            "type": "mc",
            "q": "Error di dalam Suspense ditangani oleh",
            "options": [
              "Suspense sendiri",
              "CSS",
              "route",
              "error boundary"
            ],
            "a": 3,
            "explain": "Error boundary menangani kegagalan."
          },
          {
            "type": "mc",
            "q": "Menampilkan skeleton saat menunggu memakai",
            "options": [
              "fallback Suspense/loading.js",
              "CSS",
              "route",
              "migration"
            ],
            "a": 0,
            "explain": "Skeleton memberi indikasi konten sedang dimuat."
          },
          {
            "type": "mc",
            "q": "Streaming berguna untuk halaman dengan",
            "options": [
              "data statis kecil",
              "CSS",
              "routing",
              "data lambat bervariasi waktu muat"
            ],
            "a": 3,
            "explain": "Bagian lambat bisa di-stream terpisah."
          },
          {
            "type": "mc",
            "q": "Suspense bersarang memungkinkan",
            "options": [
              "CSS",
              "routing",
              "migrasi",
              "fallback bertingkat"
            ],
            "a": 3,
            "explain": "Nested Suspense memberi fallback per bagian."
          },
          {
            "type": "mc",
            "q": "Mengukur manfaat streaming dengan",
            "options": [
              "CSS",
              "metrik performa nyata",
              "routing",
              "migrasi"
            ],
            "a": 1,
            "explain": "Pengukuran memastikan streaming memberi manfaat."
          }
        ]
      },
      {
        "id": "nextjs-28",
        "level": "Advance",
        "title": "Edge & Serverless",
        "exercises": [
          {
            "type": "mc",
            "q": "Edge runtime berjalan",
            "options": [
              "hanya di database",
              "CSS",
              "routing",
              "dekat pengguna secara geografis"
            ],
            "a": 3,
            "explain": "Edge mendekatkan eksekusi ke pengguna."
          },
          {
            "type": "mc",
            "q": "Batasan edge runtime antara lain",
            "options": [
              "tanpa batasan",
              "CSS",
              "routing",
              "API Node.js terbatas dan tanpa filesystem penuh"
            ],
            "a": 3,
            "explain": "Edge tidak mendukung semua API Node.js."
          },
          {
            "type": "mc",
            "q": "Serverless function cocok untuk",
            "options": [
              "endpoint yang jarang dipanggil",
              "CSS",
              "routing",
              "migrasi"
            ],
            "a": 0,
            "explain": "Serverless menangani beban tak terduga tanpa server tetap."
          },
          {
            "type": "mc",
            "q": "Cold start memengaruhi",
            "options": [
              "CSS",
              "routing",
              "latensi request pertama",
              "migrasi"
            ],
            "a": 2,
            "explain": "Cold start menambah latensi awal."
          },
          {
            "type": "mc",
            "q": "Memilih runtime nodejs vs edge bergantung pada",
            "options": [
              "CSS",
              "warna",
              "kebutuhan API dan latensi",
              "routing"
            ],
            "a": 2,
            "explain": "Kebutuhan library/API menentukan runtime."
          },
          {
            "type": "mc",
            "q": "Koneksi database pada serverless perlu",
            "options": [
              "CSS",
              "routing",
              "connection pooling",
              "migrasi"
            ],
            "a": 2,
            "explain": "Pooling mengurangi overhead koneksi."
          },
          {
            "type": "mc",
            "q": "Menyimpan state antar request pada serverless berisiko karena",
            "options": [
              "CSS",
              "routing",
              "instance bisa berbeda tiap request",
              "migrasi"
            ],
            "a": 2,
            "explain": "Serverless tidak menjamin instance yang sama."
          },
          {
            "type": "mc",
            "q": "Caching di edge membantu",
            "options": [
              "CSS",
              "routing",
              "migrasi",
              "respons cepat bagi pengguna global"
            ],
            "a": 3,
            "explain": "Cache terdistribusi mempercepat respons global."
          },
          {
            "type": "mc",
            "q": "Timeout pada function perlu ditangani dengan",
            "options": [
              "CSS",
              "routing",
              "migrasi",
              "desain tugas ringkas/queue"
            ],
            "a": 3,
            "explain": "Tugas berat dipindah ke queue agar tidak melampaui timeout."
          },
          {
            "type": "mc",
            "q": "Observability pada edge memerlukan",
            "options": [
              "CSS",
              "log dan tracing terdistribusi",
              "routing",
              "migrasi"
            ],
            "a": 1,
            "explain": "Tracing membantu melacak request lintas node."
          }
        ]
      },
      {
        "id": "nextjs-29",
        "level": "Advance",
        "title": "Pola Data & Mutasi Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "Data Access Layer (DAL) memusatkan",
            "options": [
              "CSS",
              "routing",
              "akses data dan aturan otorisasi",
              "migrasi"
            ],
            "a": 2,
            "explain": "DAL memusatkan logika akses data."
          },
          {
            "type": "mc",
            "q": "Memisahkan DAL memudahkan",
            "options": [
              "CSS",
              "routing",
              "migrasi",
              "pengujian dan konsistensi"
            ],
            "a": 3,
            "explain": "DAL yang terpisah lebih mudah diuji."
          },
          {
            "type": "mc",
            "q": "Server action sebaiknya memakai",
            "options": [
              "tanpa validasi",
              "CSS",
              "validasi dan otorisasi berlapis",
              "routing"
            ],
            "a": 2,
            "explain": "Lapisan validasi melindungi data."
          },
          {
            "type": "mc",
            "q": "Transaksi database berguna untuk",
            "options": [
              "CSS",
              "routing",
              "menjaga konsistensi operasi majemuk",
              "migrasi"
            ],
            "a": 2,
            "explain": "Transaksi menjaga atomisitas operasi."
          },
          {
            "type": "mc",
            "q": "Idempotency key membantu",
            "options": [
              "CSS",
              "routing",
              "mencegah mutasi ganda saat retry",
              "migrasi"
            ],
            "a": 2,
            "explain": "Kunci idempotensi mencegah duplikasi."
          },
          {
            "type": "mc",
            "q": "Event-driven pada Next.js dapat memakai",
            "options": [
              "CSS",
              "webhook/queue layanan eksternal",
              "routing",
              "migrasi"
            ],
            "a": 1,
            "explain": "Layanan seperti queue menangani event asinkron."
          },
          {
            "type": "mc",
            "q": "Menghindari N+1 pada akses data memakai",
            "options": [
              "loop query",
              "query gabungan/batch",
              "CSS",
              "routing"
            ],
            "a": 1,
            "explain": "Batch/gabungan mengurangi jumlah query."
          },
          {
            "type": "mc",
            "q": "Optimistic update perlu",
            "options": [
              "rollback saat gagal",
              "tanpa rollback",
              "CSS",
              "routing"
            ],
            "a": 0,
            "explain": "Rollback menjaga konsistensi UI."
          },
          {
            "type": "mc",
            "q": "Cache invalidation setelah mutasi memakai",
            "options": [
              "CSS",
              "routing",
              "migrasi",
              "revalidateTag/Path"
            ],
            "a": 3,
            "explain": "Revalidasi menyegarkan data terkait."
          },
          {
            "type": "mc",
            "q": "Audit log mutasi membantu",
            "options": [
              "CSS",
              "routing",
              "migrasi",
              "pelacakan perubahan data"
            ],
            "a": 3,
            "explain": "Audit log mencatat siapa mengubah apa dan kapan."
          }
        ]
      },
      {
        "id": "nextjs-30",
        "level": "Advance",
        "title": "Deployment & Operasional",
        "exercises": [
          {
            "type": "mc",
            "q": "Preview deployment membantu",
            "options": [
              "CSS",
              "routing",
              "meninjau perubahan sebelum produksi",
              "migrasi"
            ],
            "a": 2,
            "explain": "Preview memberikan lingkungan uji per perubahan."
          },
          {
            "type": "mc",
            "q": "Rollback deployment penting untuk",
            "options": [
              "pemulihan cepat saat rilis bermasalah",
              "CSS",
              "routing",
              "migrasi"
            ],
            "a": 0,
            "explain": "Rollback memulihkan versi stabil."
          },
          {
            "type": "mc",
            "q": "Health check memungkinkan",
            "options": [
              "CSS",
              "pemantauan status layanan",
              "routing",
              "migrasi"
            ],
            "a": 1,
            "explain": "Health check memantau ketersediaan."
          },
          {
            "type": "mc",
            "q": "Feature flag membantu",
            "options": [
              "CSS",
              "merilis fitur secara terkontrol",
              "routing",
              "migrasi"
            ],
            "a": 1,
            "explain": "Feature flag mengaktifkan fitur untuk sebagian pengguna."
          },
          {
            "type": "mc",
            "q": "Logging terpusat membantu",
            "options": [
              "CSS",
              "diagnosis masalah lintas instance",
              "routing",
              "migrasi"
            ],
            "a": 1,
            "explain": "Log terpusat menggabungkan sumber terpisah."
          },
          {
            "type": "mc",
            "q": "Mengelola migration DB saat deploy perlu",
            "options": [
              "urutan kompatibel agar tanpa downtime",
              "CSS",
              "routing",
              "migrasi"
            ],
            "a": 0,
            "explain": "Migrasi bertahap menjaga layanan tetap hidup."
          },
          {
            "type": "mc",
            "q": "Secret rotation penting untuk",
            "options": [
              "mengurangi risiko kebocoran",
              "CSS",
              "routing",
              "migrasi"
            ],
            "a": 0,
            "explain": "Rotasi kunci membatasi dampak kebocoran."
          },
          {
            "type": "mc",
            "q": "Memantau error rate membantu",
            "options": [
              "CSS",
              "routing",
              "migrasi",
              "mendeteksi regresi"
            ],
            "a": 3,
            "explain": "Error rate menunjukkan masalah setelah rilis."
          },
          {
            "type": "mc",
            "q": "Backup database penting untuk",
            "options": [
              "CSS",
              "routing",
              "pemulihan data",
              "migrasi"
            ],
            "a": 2,
            "explain": "Backup melindungi dari kehilangan data."
          },
          {
            "type": "mc",
            "q": "Dokumentasi arsitektur membantu",
            "options": [
              "CSS",
              "orientasi tim dan perawatan",
              "routing",
              "migrasi"
            ],
            "a": 1,
            "explain": "Dokumentasi mempermudah kolaborasi."
          }
        ]
      },
      {
        "id": "nextjs-31",
        "level": "Advance",
        "title": "Master Review & Best Practice Next.js",
        "exercises": [
          {
            "type": "mc",
            "q": "Di Next.js App Router, direktori `app/blog/[slug]` biasanya menyatakan",
            "options": [
              "Folder database SQL",
              "Route dinamis dengan parameter slug",
              "Komponen CSS global",
              "Endpoint khusus gambar"
            ],
            "a": 1,
            "explain": "Segmen kurung siku membuat parameter route dinamis."
          },
          {
            "type": "mc",
            "q": "Hydration pada halaman yang dirender di server adalah proses",
            "options": [
              "Menghapus HTML setelah tampil",
              "Menghubungkan HTML awal dengan JavaScript agar interaktif",
              "Mengubah CSS menjadi SQL",
              "Mengirim password ke browser"
            ],
            "a": 1,
            "explain": "Hydration mengaktifkan interaksi client pada markup HTML yang sudah dirender."
          },
          {
            "type": "mc",
            "q": "Server Component di Next.js bermanfaat karena dapat",
            "options": [
              "Mengambil data di server tanpa mengirim seluruh logika ke browser",
              "Menjalankan onClick langsung tanpa client",
              "Mengakses DOM browser saat build",
              "Menggantikan validasi"
            ],
            "a": 0,
            "explain": "Server Components mengerjakan pekerjaan server-side dan mengurangi JavaScript client."
          },
          {
            "type": "fill",
            "q": "Lengkapi opsi fetch agar data selalu segar:",
            "code": "fetch(url, { cache: '___' })",
            "accept": [
              "no-store",
              "nostore",
              "no_store"
            ],
            "explain": "no-store melewati cache."
          },
          {
            "type": "arrange",
            "q": "Susun alur request dari klik ke halaman termuat:",
            "blocks": [
              "Request masuk ke server",
              "Middleware memproses",
              "Server Component render",
              "HTML dikirim",
              "Hydration mengaktifkan interaksi"
            ],
            "explain": "Request melewati middleware, dirender server, lalu dihidrasi di klien."
          }
        ]
      }
    ]
  }
];

export { CONTENT_NEXTJS };
