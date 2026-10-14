/* CodeDuo — Notifikasi Izin Penyimpanan Permanen (First-time Consent Prompt).
 * Ditampilkan saat user pertama kali membuka aplikasi.
 * Jika diterima: panggil navigator.storage.persist() & simpan status 'accepted'.
 * Jika ditolak: jangan panggil persist() & simpan status 'declined'.
 */
'use strict';

import { useState, useEffect } from 'react';

export default function StorageConsentPrompt() {
  const [visible, setVisible] = useState(false);
  const [statusMsg, setStatusMsg] = useState(null);

  useEffect(() => {
    try {
      if (typeof window === 'undefined') return;
      const consent = localStorage.getItem('codeduo_persist_consent');
      // Hanya tampilkan jika belum pernah memilih sama sekali
      if (!consent && typeof navigator !== 'undefined' && navigator.storage && navigator.storage.persist) {
        const timer = setTimeout(() => setVisible(true), 650);
        return () => clearTimeout(timer);
      }
    } catch (_) {}
  }, []);

  const handleAccept = async () => {
    try {
      localStorage.setItem('codeduo_persist_consent', 'accepted');
      if (typeof navigator !== 'undefined' && navigator.storage && navigator.storage.persist) {
        await navigator.storage.persist();
      }
      setStatusMsg('✅ Penyimpanan permanen aktif! Progres belajarmu aman.');
      setTimeout(() => setVisible(false), 900);
    } catch (_) {
      setVisible(false);
    }
  };

  const handleDecline = () => {
    try {
      localStorage.setItem('codeduo_persist_consent', 'declined');
      setVisible(false);
    } catch (_) {
      setVisible(false);
    }
  };

  const handleGoToTerms = (e) => {
    e.preventDefault();
    setVisible(false);
    window.location.hash = '#/terms';
  };

  if (!visible) return null;

  return (
    <div className="consent-overlay" role="dialog" aria-modal="true" aria-labelledby="consent-title">
      <div className="consent-dialog">
        <div className="consent-dialog__icon">🛡️</div>
        <h2 id="consent-title" className="consent-dialog__title">Amankan Progres Belajarmu?</h2>

        <p className="consent-dialog__desc">
          CodeDuo menyimpan materi, streak harian, dan kuis <strong>secara mandiri di browser ini</strong> tanpa perlu akun atau server.
          Izinkan penyimpanan permanen agar browsermu tidak otomatis menghapus datamu saat memori HP penuh atau jarang dibuka.
        </p>

        <div className="consent-dialog__badges">
          <div>🔒 <b>Privasi 100%:</b> Tanpa pelacak, tanpa akses berkas pribadi/HP.</div>
          <div style={{ marginTop: '5px' }}>⚡ <b>Tahan Eviksi:</b> Data tersimpan aman dan tidak terhapus berkala oleh browser.</div>
        </div>

        {statusMsg ? (
          <p style={{ color: '#16a34a', fontWeight: 'bold', padding: '10px 0', fontSize: '0.94rem' }}>
            {statusMsg}
          </p>
        ) : (
          <div className="consent-dialog__actions">
            <button className="btn btn--primary" onClick={handleAccept} autoFocus>
              Izinkan & Simpan
            </button>
            <button className="btn btn--ghost" onClick={handleDecline}>
              Nanti Saja
            </button>
          </div>
        )}

        <div>
          <button type="button" className="consent-dialog__terms-link" onClick={handleGoToTerms}>
            📜 Pelajari Syarat & Ketentuan Penyimpanan
          </button>
        </div>
      </div>
    </div>
  );
}
