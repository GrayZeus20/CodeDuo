/* CodeDuo — Ketentuan Penyimpanan & Persistensi Data (Terms of Local & Persistent Storage).
 * Menjelaskan hak privasi, arsitektur local-first, hak persistent storage, dan portabilitas data. */
'use strict';

import { useState, useEffect } from 'react';

export default function Terms() {
  const [persistentStatus, setPersistentStatus] = useState('checking'); // 'checking' | 'persisted' | 'prompt' | 'unsupported'

  const checkPersist = async () => {
    if (typeof navigator !== 'undefined' && navigator.storage && navigator.storage.persisted) {
      try {
        const isPersisted = await navigator.storage.persisted();
        setPersistentStatus(isPersisted ? 'persisted' : 'prompt');
      } catch {
        setPersistentStatus('prompt');
      }
    } else {
      setPersistentStatus('unsupported');
    }
  };

  useEffect(() => {
    checkPersist();
  }, []);

  const handleRequestPersist = async () => {
    if (typeof navigator !== 'undefined' && navigator.storage && navigator.storage.persist) {
      try {
        const granted = await navigator.storage.persist();
        if (granted) {
          try { localStorage.setItem('codeduo_persist_consent', 'accepted'); } catch (_) {}
        }
        setPersistentStatus(granted ? 'persisted' : 'prompt');
      } catch (err) {
        alert('Gagal meminta persistensi: ' + err.message);
      }
    }
  };

  return (
    <section className="screen profile terms">
      <a className="back" href="#/profile">← Kembali ke Profil</a>
      <h1>Ketentuan & Privasi Penyimpanan</h1>
      <p className="muted" style={{ marginTop: '-4px', marginBottom: '20px' }}>
        Transparansi penuh tentang bagaimana data belajar Anda disimpan secara mandiri di perangkat ini.
      </p>

      {/* Kartu Status Persistensi Perangkat */}
      <div className="card" style={{ borderLeft: '4px solid var(--accent, #6366f1)' }}>
        <h3>Status Persistensi Penyimpanan di Perangkat Ini</h3>
        <p className="muted">
          Penyimpanan persisten melindungi progres belajar dari pembersihan cache otomatis oleh browser/sistem operasi.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginTop: '10px' }}>
          <div style={{
            padding: '6px 14px',
            borderRadius: '999px',
            fontSize: '0.88rem',
            fontWeight: 600,
            background: persistentStatus === 'persisted'
              ? 'rgba(34, 197, 94, 0.2)'
              : persistentStatus === 'checking'
              ? 'rgba(255, 255, 255, 0.1)'
              : 'rgba(234, 179, 8, 0.2)',
            color: persistentStatus === 'persisted'
              ? '#4ade80'
              : persistentStatus === 'checking'
              ? '#cbd5e1'
              : '#facc15',
            border: `1px solid ${persistentStatus === 'persisted' ? 'rgba(34, 197, 94, 0.4)' : 'rgba(234, 179, 8, 0.4)'}`,
          }}>
            {persistentStatus === 'persisted' && '✅ Aktif (Tahan Eviksi Otomatis)'}
            {persistentStatus === 'prompt' && '⚠️ Standar (Dapat dibersihkan jika memori penuh)'}
            {persistentStatus === 'checking' && 'Memeriksa status browser...'}
            {persistentStatus === 'unsupported' && 'ℹ️ Browser tidak mendukung Storage API'}
          </div>

          {persistentStatus === 'prompt' && (
            <button className="btn btn--primary" onClick={handleRequestPersist} style={{ padding: '6px 14px', fontSize: '0.88rem' }}>
              🛡️ Kunci Penyimpanan Permanen
            </button>
          )}
        </div>
      </div>

      {/* Poin 1: Local-First & Zero Tracking */}
      <div className="card">
        <h3>1. Arsitektur Local-First & Tanpa Akun (Zero-Server)</h3>
        <p className="muted">
          CodeDuo menganut prinsip <strong>Privasi Penuh (Privacy by Design)</strong>.
        </p>
        <ul style={{ paddingLeft: '20px', lineHeight: '1.6', fontSize: '0.94rem' }}>
          <li>Seluruh data kemajuan belajar, streak harian, poin, preferensi karakter Bibit, dan jadwal pengulangan materi (SRS) disimpan <strong>secara lokal di browser Anda</strong> (melalui <code>localStorage</code> dan <code>CacheStorage</code>).</li>
          <li>Kami tidak memiliki server database terpusat yang melacak identitas, email, IP, maupun riwayat jawaban Anda.</li>
          <li>Aplikasi bebas iklan, bebas pelacak analitik pihak ketiga (no trackers), dan sepenuhnya dapat dijalankan tanpa koneksi internet (offline-ready).</li>
        </ul>
      </div>

      {/* Poin 2: Izin Persistent Storage */}
      <div className="card">
        <h3>2. Ketentuan Izin Penyimpanan Permanen (Persistent Storage)</h3>
        <p className="muted">
          Browser modern memiliki sistem pembersihan otomatis ketika ruang penyimpanan perangkat menipis atau situs tidak dibuka dalam jangka waktu tertentu (misalnya kebijakan 7 hari di Safari iOS).
        </p>
        <ul style={{ paddingLeft: '20px', lineHeight: '1.6', fontSize: '0.94rem' }}>
          <li><strong>Tujuan Permintaan:</strong> CodeDuo meminta hak <code>navigator.storage.persist()</code> murni untuk menandai data aplikasi ini sebagai <em>data penting</em> agar browser tidak menghapusnya saat pembersihan berkala.</li>
          <li><strong>Batasan Hak Akses:</strong> Izin ini <strong>HANYA</strong> berlaku untuk kuota penyimpanan lokal CodeDuo sendiri di dalam sandbox browser. Izin ini sama sekali tidak memiliki akses ke berkas luar, dokumen, foto, kontak, mikrofon, kamera, atau perangkat keras Anda.</li>
          <li><strong>Persyaratan Sistem:</strong> Di beberapa peramban (seperti Chrome/Edge), browser otomatis menyetujui hak ini jika pengguna sering berinteraksi dengan aplikasi atau menginstalnya sebagai PWA (Progressive Web App).</li>
        </ul>
      </div>

      {/* Poin 3: Ketahanan saat Pembaruan Aplikasi */}
      <div className="card">
        <h3>3. Pembaruan Aplikasi (PWA Updates)</h3>
        <ul style={{ paddingLeft: '20px', lineHeight: '1.6', fontSize: '0.94rem' }}>
          <li>Setiap ada fitur baru atau materi pelajaran baru yang dirilis, pembaruan diunduh melalui Service Worker tanpa mengganggu atau mereset data belajar Anda.</li>
          <li>Fitur pembaruan aplikasi hanya memperbarui berkas kode program (HTML/CSS/JS) di Cache Storage, dan tidak menyentuh kunci penyimpanan progres murid.</li>
        </ul>
      </div>

      {/* Poin 4: Kepemilikan & Cadangan Berkas */}
      <div className="card">
        <h3>4. Kepemilikan & Portabilitas Data (Backup & Restore)</h3>
        <ul style={{ paddingLeft: '20px', lineHeight: '1.6', fontSize: '0.94rem' }}>
          <li>Karena data berada di perangkat Anda, Anda memiliki <strong>kepemilikan 100%</strong> atas data belajar Anda.</li>
          <li>Anda dapat mengunduh berkas cadangan (format <code>.json</code>) kapan saja melalui menu <strong>Profil → Unduh Cadangan Data</strong>.</li>
          <li>Cadangan berkas tersebut dapat digunakan untuk memulihkan progres di perangkat lain (misal dari laptop ke HP) atau sebagai arsip cadangan sebelum Anda membersihkan riwayat browser secara manual.</li>
        </ul>
      </div>

      {/* Poin 5: Hak Penghapusan Data */}
      <div className="card">
        <h3>5. Hak Penghapusan & Reset</h3>
        <p className="muted" style={{ lineHeight: '1.6', fontSize: '0.94rem' }}>
          Anda memegang kendali mutlak. Jika Anda ingin menghapus seluruh jejak dan progres belajar:
        </p>
        <ul style={{ paddingLeft: '20px', lineHeight: '1.6', fontSize: '0.94rem' }}>
          <li>Klik tombol <strong>Reset progress</strong> di halaman Profil, atau</li>
          <li>Gunakan fitur "Hapus Data Situs" (Clear Site Data) pada menu pengaturan peramban Anda. Seluruh data lokal akan terhapus seketika dan bersih tanpa jejak.</li>
        </ul>
      </div>

      <div style={{ textAlign: 'center', marginTop: '24px', marginBottom: '40px' }}>
        <a href="#/profile" className="btn btn--primary">
          Mengerti & Kembali ke Profil
        </a>
      </div>
    </section>
  );
}
