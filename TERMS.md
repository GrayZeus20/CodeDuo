# Syarat & Ketentuan Penyimpanan Data & Persistensi (Data Storage & Persistence Terms)

Terakhir diperbarui: 14 Oktober 2026  
Aplikasi: **CodeDuo** (PWA / Web App)

---

## 1. Pendahuluan & Filosofi Privasi (Local-First Architecture)

CodeDuo dirancang dengan arsitektur **Local-First** dan berpegang teguh pada prinsip **Privacy by Design**. Seluruh proses pembelajaran, pencapaian, dan preferensi pengguna disimpan, diproses, dan dikelola secara mandiri di perangkat lokal masing-masing pengguna tanpa ketergantungan pada basis data terpusat (server-side database).

---

## 2. Data Apa Saja yang Disimpan Secara Lokal?

Aplikasi CodeDuo hanya menyimpan data yang esensial untuk fungsi gamifikasi dan pembelajaran interaktif di penyimpanan lokal peramban (`localStorage` dan `CacheStorage`), meliputi:
1. **Progres Kurikulum:** Daftar ID materi pelajaran yang telah diselesaikan.
2. **Statistik Belajar:** Jumlah latihan yang diselesaikan, rasio jawaban benar/salah, dan rekor streak harian (hari beruntun).
3. **Jadwal Pengulangan Berkala (Spaced Repetition System - SRS):** Kotak Leitner dan jadwal peninjauan kembali soal untuk retensi ingatan jangka panjang.
4. **Preferensi Pengguna:** Preferensi suara (mute), posisi kustom Bibit (drag position), mode tampilan gerakan 60fps/hemat daya.
5. **Aset Aplikasi Offline:** Berkas kode statis (HTML, CSS, JS, audio SFX, ikon PWA) melalui Service Worker agar aplikasi dapat dimainkan secara luring (*offline*).

> **PENTING:** CodeDuo **TIDAK PERNAH** meminta, mengumpulkan, atau mengirimkan data identitas pribadi (seperti Nama Lengkap, Alamat Email, Nomor Telepon, Lokasi Geografis, Kamera, Mikrofon, maupun Berkas Pribadi) ke server mana pun.

---

## 3. Ketentuan Izin Penyimpanan Permanen (`navigator.storage.persist()`)

### a. Tujuan Permintaan
Browser modern (khususnya Safari di iOS dengan aturan *Intelligent Tracking Prevention* / 7-day storage cap, dan Chrome di Android ketika ruang penyimpanan perangkat hampir habis) memperlakukan `localStorage` sebagai *temporary / best-effort storage* yang dapat dihapus sewaktu-waktu secara otomatis oleh sistem operasi.

CodeDuo mengajukan izin **Penyimpanan Permanen (Persistent Storage)** melalui Web API standar `navigator.storage.persist()` dengan tujuan tunggal:
- **Mencegah penghapusan otomatis** progres belajar dan streak harian pengguna saat browser melakukan pembersihan cache rutin atau saat memori perangkat menipis.

### b. Batasan Kuasa & Keamanan
- Izin ini **HANYA** berlaku secara eksklusif untuk kuota penyimpanan web CodeDuo di dalam sandbox browser.
- Izin ini **TIDAK** memberikan izin untuk mengakses file di komputer/HP Anda, kontak, foto, atau data di luar halaman web CodeDuo.
- Pengguna tetap memegang kendali penuh dan dapat menghapus penyimpanan ini kapan saja.

---

## 4. Integritas Data saat Pembaruan Aplikasi (PWA Updates)

1. **Pemisahan Wadah Penyimpanan:** Berkas pembaruan aplikasi (Service Worker Cache) dan data progres belajar (`localStorage`) berada di dua wadah terpisah.
2. **Kekebalan Data saat Update:** Pembaruan versi aplikasi, kurikulum, maupun aset visual **tidak akan mereset atau menghapus** progres belajar murid.
3. **Skema Kompatibilitas Mundur (*Backward Compatibility*):** Jika versi baru CodeDuo menyertakan fitur atau parameter data baru, sistem validasi akan melengkapi data secara otomatis tanpa menghapus riwayat yang sudah ada.

---

## 5. Kepemilikan, Cadangan, dan Portabilitas Data (User Data Ownership)

1. **Kepemilikan Mutlak:** Pengguna adalah satu-satunya pemilik sah atas seluruh riwayat data belajar mereka.
2. **Fitur Ekspor & Impor Cadangan:** Pengguna dapat mengunduh berkas cadangan data belajar kapan saja dalam format standar `.json` melalui menu **Profil → Data & Cadangan Progres**.
3. **Tanggung Jawab Pengguna:** Karena data tidak disimpan di server awan (cloud), pengguna diimbau untuk mengunduh berkas cadangan sebelum:
   - Berganti perangkat/peramban.
   - Melakukan *factory reset* perangkat atau menghapus data browser secara menyeluruh.

---

## 6. Hak Penghapusan Data (Right to Erasure / Reset)

Pengguna berhak menghapus seluruh jejak data kapan pun diinginkan tanpa memerlukan persetujuan siapa pun:
- **Melalui Aplikasi:** Tekan tombol **"Reset progress"** di menu Profil untuk mengosongkan seluruh riwayat dan mengembalikan aplikasi ke kondisi awal.
- **Melalui Browser:** Lakukan "Clear Site Data" / "Hapus Data Situs" pada pengaturan peramban web Anda.

---

## 7. Batasan Tanggung Jawab

Aplikasi ini disediakan secara gratis dan bersifat *Open Source* dengan prinsip "sebagaimana adanya" (*as-is*). Pengembang berupaya sebaik mungkin memastikan integritas data melalui mekanisme persistensi dan validasi, namun tidak bertanggung jawab atas kehilangan data akibat kerusakan perangkat keras, penggunaan mode penyamaran (*Incognito/Private Browsing*), atau penghapusan manual oleh pengguna.
