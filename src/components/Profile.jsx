/* CodeDuo — Profil & Pengaturan: ringkasan stat, preferensi Bibit, suara,
 * musik latar akustik minimalis, data/cadangan, dan jalur belajar. */
'use strict';

import { useRef, useState } from 'react';
import { useStore } from '../useStore.js';
import {
  getState, topicById, isTopicDone,
  dumpState, stateReset, toggleMotion,
  setBuddySize,
  toggleMute,
  exportSaveData, importSaveData,
} from '../store.js';
import TopicIcon from './TopicIcon.jsx';
import { SFX } from '../../sfx.js';
import { BGM } from '../../bgm.js';

/* Ikon garis sederhana (24px) — konsisten 1 stroke width, tanpa aset luar. */
function Icon({ name, size = 20 }) {
  const paths = {
    spark: 'M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18',
    volume: 'M4 9.5h3L12 5v14l-5-4.5H4zM16 8.5a5 5 0 0 1 0 7M18.8 5.7a9 9 0 0 1 0 12.6',
    music: 'M9 18V5l12-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm12-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z',
    db: 'M4 6.5c0-1.4 3.6-2.5 8-2.5s8 1.1 8 2.5S16.4 9 12 9 4 7.9 4 6.5zM4 6.5v11c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5v-11M4 12c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5',
    route: 'M6 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 13V9a3 3 0 0 1 3-3h6M18 11v4a3 3 0 0 1-3 3H9',
    bot: 'M9 3h6v3H9zM5 6h14v12H5zM9 11h2M13 11h2M9 15h6',
    back: 'M15 5l-7 7 7 7',
  };
  return (
    <svg className="ico" viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d={paths[name] || ''} />
    </svg>
  );
}

/* Baris pengaturan: ikon + judul + deskripsi di kiri, kontrol di kanan. */
function Row({ icon, title, desc, children, stacked = false }) {
  return (
    <div className={'set-row' + (stacked ? ' set-row--stacked' : '')}>
      <div className="set-row__head">
        <span className="set-row__icon" aria-hidden="true"><Icon name={icon} /></span>
        <div className="set-row__text">
          <b>{title}</b>
          {desc && <span className="muted">{desc}</span>}
        </div>
      </div>
      <div className="set-row__control">{children}</div>
    </div>
  );
}

/* Sakelar (switch) aksesibel. */
function Switch({ checked, onChange, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      className={'switch' + (checked ? ' is-on' : '')}
      onClick={onChange}
    >
      <span className="switch__knob" />
    </button>
  );
}

export default function Profile() {
  useStore();
  const state = getState();
  const topicsDone = state.path.filter((id) => isTopicDone(id)).length;
  const fileInputRef = useRef(null);
  const [importStatus, setImportStatus] = useState(null);
  const [volumePct, setVolumePct] = useState(() => Math.round(SFX.getVolume() * 100));

  const motionOn = state.motionEnabled !== false;
  const totalTopics = state.path.length;
  const pctDone = totalTopics ? Math.round((topicsDone / totalTopics) * 100) : 0;

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
    const btn = e.currentTarget;
    btn.disabled = true;
    btn.textContent = 'Memperbarui…';
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
    } catch { /* offline → tetap muat ulang */ }
    window.location.reload();
  };

  /* Volume SFX 0–100 */
  const applyVolume = (v) => {
    const clamped = Math.min(100, Math.max(0, Math.round(Number(v) || 0)));
    setVolumePct(clamped);
    SFX.setVolume(clamped / 100);
    if (!state.muted && clamped > 0) SFX.pick();
  };

  /* Sinkron sakelar mute topbar */
  const onToggleSound = () => {
    const m = toggleMute();
    SFX.setMuted(m);
    BGM.setMuted(m);
    if (m) SFX.muteOn(); else SFX.muteOff();
  };

  return (
    <section className="screen profile">
      <header className="profile__hero">
        <a className="profile__back" href="#/" onClick={() => SFX.back()}>
          <Icon name="back" size={18} /> Kembali
        </a>
        <div className="profile__hero-text">
          <h1>Profil &amp; Pengaturan</h1>
          <p className="muted">Atur teman belajar Bibit, audio, dan data progres belajarmu.</p>
        </div>
      </header>

      {/* Ringkasan progres */}
      <div className="profile__stats">
        <div className="stat stat--streak">
          <span>streak hari</span>
          <b>{state.streak.count} 🔥</b>
        </div>
        <div className="stat">
          <span>sesi selesai</span>
          <b>{state.stats.lessonsDone}</b>
        </div>
        <div className="stat">
          <span>jawaban benar</span>
          <b>{state.stats.correct}</b>
        </div>
        <div className="stat">
          <span>hampir benar</span>
          <b>{state.stats.close || 0}</b>
        </div>
        <div className="stat stat--progress">
          <b>{topicsDone}/{totalTopics} topik</b>
          <span>{pctDone}% kurikulum dikuasai</span>
          <span className="progress-bar" aria-hidden="true">
            <span className="progress-bar__fill" style={{ transform: 'scaleX(' + (pctDone / 100).toFixed(3) + ')' }} />
          </span>
        </div>
      </div>

      <section className="card set-card">
        <h2 className="set-card__title"><Icon name="route" /> Jalur belajar</h2>
        <ol className="path-list">
          {state.path.map((id, i) => {
            const t = topicById(id);
            if (!t) return null;
            const done = isTopicDone(id);
            const isNext = !done && state.path.slice(0, i).every((x) => isTopicDone(x));
            return (
              <li key={id} className={done ? 'is-done' : isNext ? 'is-cur' : ''}>
                <span className="path-list__no">{done ? '✓' : i + 1}</span>
                <span className="path-list__icon"><TopicIcon id={t.id} size={20} /></span>
                <span className="path-list__name">{t.name}</span>
                {isNext && <span className="path-list__tag">lanjut di sini</span>}
              </li>
            );
          })}
        </ol>
      </section>

      <div className="profile__grid">
        {/* 1. Preferensi Bibit */}
        <section className="card set-card">
          <h2 className="set-card__title"><Icon name="bot" /> Bibit</h2>

          <Row icon="bot" title="Ukuran Bibit" desc="Seberapa besar teman belajarmu tampil.">
            <div className="segmented" role="group" aria-label="Ukuran Bibit">
              {[
                { value: 'small', label: 'Kecil' },
                { value: 'medium', label: 'Normal' },
                { value: 'large', label: 'Besar' },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={'segmented__item' + (state.buddySize === option.value ? ' is-active' : '')}
                  aria-pressed={state.buddySize === option.value}
                  onClick={() => { SFX.pick(); setBuddySize(option.value); }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </Row>

          <Row
            icon="spark"
            title="Gerakan & animasi"
            desc={motionOn ? 'Bibit bergerak hidup, 60fps.' : 'Mode hemat daya: tampilan statis.'}
          >
            <Switch
              checked={motionOn}
              label="Gerakan dan animasi"
              onChange={() => { if (motionOn) SFX.back(); else SFX.pick(); toggleMotion(); }}
            />
          </Row>
        </section>

        {/* 2. Efek Suara */}
        <section className="card set-card">
          <h2 className="set-card__title"><Icon name="volume" /> Efek suara</h2>
          <Row
            icon="volume"
            title="Suara"
            desc={state.muted ? 'Dimatikan — volume tetap tersimpan.' : 'Aktif, disintesis langsung di perangkat.'}
          >
            <Switch checked={!state.muted} label="Efek suara aktif" onChange={onToggleSound} />
          </Row>

          <div className={'set-row set-row--stacked volume' + (state.muted ? ' is-muted' : '')}>
            <div className="set-row__head">
              <span className="set-row__icon" aria-hidden="true">
                {volumePct === 0 ? '🔇' : volumePct < 50 ? '🔈' : '🔊'}
              </span>
              <div className="set-row__text">
                <b>Volume Efek Suara</b>
                <span className="muted">Skala 0–100, responsif tanpa file eksternal.</span>
              </div>
              <output className="volume__value">{volumePct}%</output>
            </div>
            <input
              className="volume__slider"
              type="range"
              min="0"
              max="100"
              step="1"
              value={volumePct}
              style={{ '--vol': volumePct + '%' }}
              aria-label="Volume efek suara"
              aria-valuetext={volumePct + ' persen'}
              onChange={(e) => {
                const v = Number(e.target.value);
                setVolumePct(v);
                SFX.setVolume(v / 100);
              }}
              onPointerUp={() => { if (!state.muted && volumePct > 0) SFX.pick(); }}
              onKeyUp={() => { if (!state.muted && volumePct > 0) SFX.pick(); }}
            />
            <div className="volume__presets" role="group" aria-label="Pilihan volume cepat">
              {[0, 25, 50, 75, 100].map((v) => (
                <button
                  key={v}
                  type="button"
                  className={'chip-btn' + (volumePct === v ? ' is-active' : '')}
                  aria-pressed={volumePct === v}
                  onClick={() => applyVolume(v)}
                >
                  {v}%
                </button>
              ))}
              <button type="button" className="chip-btn chip-btn--test" onClick={() => { if (!state.muted && volumePct > 0) SFX.pick(); }}>
                🔊 Coba
              </button>
            </div>
          </div>
        </section>

        {/* 3. Musik Latar (Akustik) — Minimalis */}
        <section className="card set-card">
          <h2 className="set-card__title"><Icon name="music" /> Musik Latar (BGM)</h2>
          <p className="muted set-card__desc">
            Atur pemutaran, volume, pratinjau, dan pilihan lagu dari satu halaman.
          </p>
          <a
            href="#/profile/bgm"
            className="setting-nav-btn"
            onClick={() => SFX.pick()}
            title="Buka pengaturan musik latar"
          >
            <div className="setting-nav-btn__info">
              <div className="setting-nav-btn__title">
                <span>Buka pengaturan musik</span>
                <span className="badge badge--soft">Kontrol lengkap</span>
              </div>
              <div className="muted" style={{ fontSize: '0.78rem' }}>
                Pilih lagu, atur volume, atau gunakan petikan bawaan
              </div>
            </div>
            <span className="setting-nav-btn__arrow" aria-hidden="true">➔</span>
          </a>
        </section>

        {/* 4. Data & Cadangan */}
        <section className="card set-card">
          <h2 className="set-card__title"><Icon name="db" /> Data &amp; cadangan</h2>
          <p className="muted set-card__desc">
            Progres tersimpan di browser ini. Unduh cadangan JSON agar tidak hilang atau bisa dipindah perangkat.
          </p>
          <div className="set-actions">
            <button className="btn btn--primary btn--sm" onClick={handleExport} title="Unduh cadangan data ke file JSON">
              📥 Unduh cadangan
            </button>
            <button className="btn btn--ghost btn--sm" onClick={() => fileInputRef.current?.click()} title="Pulihkan data dari file JSON cadangan">
              📤 Pulihkan berkas
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
            <p className={'set-status' + (importStatus.ok ? ' set-status--ok' : ' set-status--bad')} role="status">
              {importStatus.message}
            </p>
          )}
          <div className="set-actions set-actions--muted">
            <a href="#/terms" className="btn btn--ghost btn--sm">📜 Ketentuan &amp; privasi</a>
            <button className="btn btn--ghost btn--sm" onClick={onRefreshApp}>🔄 Periksa pembaruan</button>
            <button
              className="btn btn--ghost btn--sm"
              onClick={(e) => { dumpState(); e.currentTarget.textContent = 'State dicetak ✓'; }}
            >
              🧾 Lihat state
            </button>
          </div>
          <div className="set-danger">
            <div>
              <b>Reset progres</b>
              <span className="muted">Hapus semua progres, streak, dan model ekspresi Bibit.</span>
            </div>
            <button className="btn btn--danger btn--sm" onClick={onReset}>Reset</button>
          </div>
        </section>

      </div>
    </section>
  );
}
