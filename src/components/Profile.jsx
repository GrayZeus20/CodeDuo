/* CodeDuo — Profil: stat, jalur personal, jadwal ingatan (SRS), data & reset. */
'use strict';

import { useRef, useState } from 'react';
import { useStore } from '../useStore.js';
import {
  getState, topicById, isTopicDone,
  dumpState, stateReset, toggleMotion,
  setBuddySize,
  exportSaveData, importSaveData,
} from '../store.js';
import TopicIcon from './TopicIcon.jsx';

export default function Profile() {
  useStore();
  const state = getState();
  const topicsDone = state.path.filter((id) => isTopicDone(id)).length;
  const fileInputRef = useRef(null);
  const [importStatus, setImportStatus] = useState(null);

  const handleExport = () => {
    try {
      const jsonStr = exportSaveData();
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      const dateStr = new Date().toISOString().slice(0, 10);
      a.href = url;
      a.download = `codeduo-cadangan-${dateStr}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      alert('Gagal mengekspor data: ' + err.message);
    }
  };

  const handleImportFile = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const text = evt.target.result;
        const res = importSaveData(text);
        setImportStatus(res);
        if (res.ok) {
          setTimeout(() => setImportStatus(null), 5000);
        }
      } catch (err) {
        setImportStatus({ ok: false, message: 'Gagal memproses file: ' + err.message });
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const onReset = () => {
    if (window.confirm('Reset semua progress, streak, dan model ekspresi Bibit? Tindakan ini tidak bisa dibatalkan.')) {
      stateReset();
    }
  };

  const onRefreshApp = async (e) => {
    e.currentTarget.textContent = 'Memperbarui...';
    try {
      if ('serviceWorker' in navigator) {
        const regs = await navigator.serviceWorker.getRegistrations();
        for (const reg of regs) {
          await reg.update();
          if (reg.waiting) reg.waiting.postMessage({ type: 'SKIP_WAITING' });
        }
      }
      if ('caches' in window) {
        const keys = await caches.keys();
        await Promise.all(keys.map((k) => caches.delete(k)));
      }
    } catch {}
    window.location.reload();
  };

  return (
    <section className="screen profile">
      <a className="back" href="#/">← Kembali</a>
      <h1>Profil</h1>

      <div className="stat-row">
        <div className="stat"><b>{state.streak.count}</b><span>streak 🔥</span></div>
        <div className="stat"><b>{state.stats.lessonsDone}</b><span>sesi</span></div>
        <div className="stat"><b>{state.stats.correct}</b><span>benar</span></div>
        <div className="stat"><b>{state.stats.close || 0}</b><span>hampir</span></div>
        <div className="stat"><b>{topicsDone}/{state.path.length}</b><span>topik</span></div>
      </div>

      <div className="card">
        <h3>Jalur belajar kurikulum</h3>
        <ol className="path-list">
          {state.path.map((id, i) => {
            const t = topicById(id);
            if (!t) return null; /* id lama yang sudah dihapus dari kurikulum → jangan crash */
            const done = isTopicDone(id);
            const isNext = !done && state.path.slice(0, i).every((x) => isTopicDone(x));
            return (
              <li key={id} className={done ? 'is-done' : isNext ? 'is-cur' : ''}>
                {i + 1}. <span style={{ display: 'inline-flex', verticalAlign: '-3px', marginRight: '6px' }}><TopicIcon id={t.id} size={18} /></span> {t.name}{done ? ' ✓' : isNext ? ' ← lanjut di sini' : ''}
              </li>
            );
          })}
        </ol>
      </div>

      <div className="card">
        <h3>Ukuran Bibit</h3>
        <p className="muted">Pilih ukuran teman belajarmu. Pengaturan ini tersimpan di perangkat ini.</p>
        <div className="buddy-size-options" role="group" aria-label="Ukuran Bibit">
          {[
            { value: 'small', label: 'Kecil' },
            { value: 'medium', label: 'Normal' },
            { value: 'large', label: 'Besar' },
          ].map((option) => (
            <button
              key={option.value}
              type="button"
              className={'btn ' + (state.buddySize === option.value ? 'btn--primary' : 'btn--ghost')}
              aria-pressed={state.buddySize === option.value}
              onClick={() => setBuddySize(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="card">
        <h3>Pengaturan Tampilan & Gerakan</h3>
        <p className="muted">
          Bibit bergerak hidup dengan renderer 3D 60fps & ekspresi responsif. Anda bisa mematikannya bila menginginkan tampilan statis hemat daya.
        </p>
        <button
          className={'btn ' + (state.motionEnabled !== false ? 'btn--primary' : 'btn--ghost')}
          onClick={() => toggleMotion()}
        >
          {state.motionEnabled !== false ? '✨ Gerakan & Animasi: Aktif (60fps)' : '🛑 Gerakan: Hemat / Statis'}
        </button>
      </div>

      <div className="card">
        <h3>Data & Cadangan Progres</h3>
        <p className="muted">
          Progres belajar disimpan di penyimpanan lokal browser ini. Anda dapat mengunduh cadangan berkas JSON agar data tidak pernah hilang atau bisa dipindahkan ke perangkat lain.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
          <button className="btn btn--primary" onClick={handleExport} title="Unduh cadangan data ke file JSON">
            📥 Unduh Cadangan (.json)
          </button>
          <button className="btn btn--ghost" onClick={() => fileInputRef.current?.click()} title="Pulihkan data dari file JSON cadangan">
            📤 Pulihkan dari Berkas (.json)
          </button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            accept=".json,application/json"
            onChange={handleImportFile}
          />
        </div>
        {importStatus && (
          <p style={{
            fontSize: '0.88rem',
            padding: '8px 12px',
            borderRadius: '8px',
            marginBottom: '12px',
            background: importStatus.ok ? 'rgba(34, 197, 94, 0.15)' : 'rgba(239, 68, 68, 0.15)',
            color: importStatus.ok ? '#4ade80' : '#f87171',
            border: `1px solid ${importStatus.ok ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
          }}>
            {importStatus.message}
          </p>
        )}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '12px' }}>
          <a href="#/terms" className="btn btn--ghost" style={{ textDecoration: 'none' }}>📜 Ketentuan & Privasi Penyimpanan</a>{' '}
          <button className="btn btn--ghost" onClick={onRefreshApp}>🔄 Periksa Pembaruan PWA</button>{' '}
          <button className="btn btn--ghost" onClick={(e) => { dumpState(); e.currentTarget.textContent = 'State dicetak ke console ✓'; }}>Lihat state (console)</button>{' '}
          <button className="btn btn--danger" onClick={onReset}>Reset progress</button>
        </div>
      </div>
    </section>
  );
}
