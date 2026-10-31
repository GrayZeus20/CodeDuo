/* CodeDuo — Profil & Pengaturan: ringkasan stat, preferensi Bibit, suara,
 * musik latar akustik minimalis, data/cadangan, dan jalur belajar. */
'use strict';

import { useRef, useState, useEffect } from 'react';
import { useStore } from '../useStore.js';
import {
  getState, topicById, isTopicDone,
  dumpState, stateReset, toggleMotion,
  setBuddySize,
  toggleMute,
  exportSaveData, importSaveData,
  getLearnedConcepts, onBuddyTap,
} from '../store.js';
import TopicIcon from './TopicIcon.jsx';
import { useRealtimeStreak } from '../useRealtimeStreak.js';
import { SFX } from '../../sfx.js';
import { BGM } from '../../bgm.js';
import {
  isNotificationSupported,
  getPermissionStatus,
  getNotificationSettings,
  updateNotificationSettings,
  requestNotificationPermission,
  sendTestNotification,
  sendStreakDangerTestNotification,
  subscribeNotifications,
} from '../notifications.js';

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
    bell: 'M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0',
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
  const streakInfo = useRealtimeStreak();
  const state = getState();
  const topicsDone = state.path.filter((id) => isTopicDone(id)).length;
  const fileInputRef = useRef(null);
  const [importStatus, setImportStatus] = useState(null);
  const [volumePct, setVolumePct] = useState(() => Math.round(SFX.getVolume() * 100));
  const [notifCfg, setNotifCfg] = useState(getNotificationSettings);
  const [notifPerm, setNotifPerm] = useState(getPermissionStatus);
  const [testNotifMsg, setTestNotifMsg] = useState(null);
  const [learnedConcepts, setLearnedConcepts] = useState(() => getLearnedConcepts());
  const [chatFeedback, setChatFeedback] = useState(null);

  const onPromptBibitChat = () => {
    SFX.happy();
    onBuddyTap();
    setChatFeedback('Bibit merespons materi yang baru dipelajari! Cek balon obrolan Bibit 💬');
    setTimeout(() => setChatFeedback(null), 4500);
  };

  useEffect(() => {
    return subscribeNotifications(() => {
      setNotifCfg(getNotificationSettings());
      setNotifPerm(getPermissionStatus());
    });
  }, []);

  const onToggleNotification = async () => {
    if (!isNotificationSupported()) {
      alert('Browser ini tidak mendukung fitur notifikasi Web/PWA.');
      return;
    }
    if (notifPerm !== 'granted') {
      const res = await requestNotificationPermission();
      setNotifPerm(getPermissionStatus());
      if (res.ok) {
        SFX.happy();
      } else if (res.permission === 'denied') {
        alert('Notifikasi diblokir oleh browser. Silakan izinkan notifikasi melalui pengaturan izin situs di bilah alamat browser.');
      }
    } else {
      const next = !notifCfg.enabled;
      updateNotificationSettings({ enabled: next });
      if (next) SFX.pick(); else SFX.back();
    }
  };

  const onTimeChange = (e) => {
    const val = e.target.value;
    updateNotificationSettings({ time: val });
  };

  const onTimePreset = (t) => {
    SFX.pick();
    updateNotificationSettings({ time: t });
  };

  const onToggleOption = async (key) => {
    if (notifPerm !== 'granted') {
      const res = await requestNotificationPermission();
      if (!res.ok) return;
    }
    const currentVal = notifCfg[key] !== false;
    const nextVal = !currentVal;
    updateNotificationSettings({ [key]: nextVal });
    if (nextVal) SFX.pick(); else SFX.back();
  };

  const onTestNotification = async () => {
    SFX.pick();
    setTestNotifMsg({ type: 'loading', text: 'Mengirim notifikasi uji coba...' });
    const res = await sendTestNotification();
    setTestNotifMsg({ type: res.ok ? 'ok' : 'warn', text: res.message });
    setTimeout(() => setTestNotifMsg(null), 5000);
  };

  const onTestDangerNotification = async () => {
    SFX.pick();
    setTestNotifMsg({ type: 'loading', text: 'Mengirim simulasi notifikasi streak mau pecah...' });
    const res = await sendStreakDangerTestNotification();
    setTestNotifMsg({ type: res.ok ? 'ok' : 'warn', text: res.message });
    setTimeout(() => setTestNotifMsg(null), 5000);
  };

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
        <div className={`stat stat--streak stat--streak-${streakInfo.status}`}>
          <div className="stat--streak-header">
            <span>streak hari</span>
            <span className={`streak-badge-pill streak-badge-pill--${streakInfo.status}`}>
              {streakInfo.status === 'saved' ? '✓ Aman' : streakInfo.status === 'danger' ? '⚠️ Mau Pecah' : 'Mulai'}
            </span>
          </div>
          <b>{streakInfo.count} 🔥</b>
          <div className="streak-live-timer" title="Hitung mundur waktu tersisa hari ini">
            {streakInfo.status === 'danger' ? (
              <span className="text-danger">⏳ Sisa {streakInfo.timeLeftFormatted}</span>
            ) : streakInfo.status === 'saved' ? (
              <span className="text-muted">✨ Besok dlm {streakInfo.timeLeftFormatted}</span>
            ) : (
              <span className="text-muted">Reset pk 00:00</span>
            )}
          </div>
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

          {/* Otak Belajar Bibit (Machine Learning) */}
          <div className="bibit-brain-box">
            <div className="bibit-brain-header">
              <span className="bibit-brain-title">
                🧠 Otak Belajar Bibit
              </span>
              <span className="bibit-brain-badge">🤖 On-Device ML</span>
            </div>
            <p className="bibit-brain-desc">
              Obrolan dan ekspresi Bibit bertambah secara cerdas mengikuti soal dan konsep koding yang baru saja kamu pelajari.
            </p>
            <div className="bibit-brain-stats">
              <span className="bibit-brain-stat">
                📚 <b>{learnedConcepts.length}</b> konsep diserap
              </span>
              <span className="bibit-brain-stat">
                ⚡ <b>Adaptive Weights</b> aktif
              </span>
            </div>

            {learnedConcepts.length > 0 ? (
              <>
                <div style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--muted)', marginBottom: '6px' }}>
                  Materi terakhir yang dipelajari Bibit:
                </div>
                <div className="bibit-concept-chips">
                  {learnedConcepts.slice(0, 6).map((c) => (
                    <span key={c.id} className="bibit-concept-chip" title={c.insight}>
                      <span className="chip-topic">[{c.topicName}]</span>
                      <span>{c.lessonTitle}</span>
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap', marginTop: '6px' }}>
                  <button
                    type="button"
                    className="btn btn--primary btn--sm"
                    onClick={onPromptBibitChat}
                    style={{ fontSize: '0.76rem', padding: '5px 10px' }}
                  >
                    💬 Ajak Bibit Ngobrol Materi
                  </button>
                  {chatFeedback && (
                    <span style={{ fontSize: '0.76rem', color: '#15803d', fontWeight: 600 }}>
                      {chatFeedback}
                    </span>
                  )}
                </div>
              </>
            ) : (
              <p className="muted" style={{ fontSize: '0.76rem', margin: 0 }}>
                Bibit belum menyerap materi baru. Selesaikan 1 kuis untuk mulai melatih memori konsep Bibit!
              </p>
            )}
          </div>
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

        {/* 4. Notifikasi & Pengingat Belajar (Web & PWA) */}
        <section className="card set-card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
            <h2 className="set-card__title" style={{ margin: 0 }}>
              <Icon name="bell" /> Notifikasi &amp; Pengingat
            </h2>
            <span className={`notif-badge notif-badge--${notifPerm}`}>
              {notifPerm === 'granted'
                ? '✓ Diizinkan'
                : notifPerm === 'denied'
                ? '⚠️ Diblokir Browser'
                : notifPerm === 'unsupported'
                ? 'Tidak Didukung'
                : 'Belum Diizinkan'}
            </span>
          </div>

          <Row
            icon="bell"
            title="Master Notifikasi & Pengingat"
            desc={
              !isNotificationSupported()
                ? 'Browser atau perangkat ini belum mendukung Web Notifications.'
                : notifPerm === 'denied'
                ? 'Izin notifikasi diblokir. Aktifkan izin pada ikon gembok di bilah alamat browser.'
                : notifCfg.enabled && notifPerm === 'granted'
                ? 'Notifikasi aktif untuk menjaga streak, pengingat jam belajar, dan ulangan SRS.'
                : 'Aktifkan agar Bibit dapat mengingatkan saat streak mau pecah atau waktu belajar tiba.'
            }
          >
            <Switch
              checked={notifCfg.enabled && notifPerm === 'granted'}
              label="Master notifikasi aktif"
              onChange={onToggleNotification}
            />
          </Row>

          {notifCfg.enabled && notifPerm === 'granted' && (
            <div style={{ marginTop: '8px' }}>
              {/* Opsi 1: Peringatan Darurat Streak Mau Pecah */}
              <Row
                icon="spark"
                title="🔥 Peringatan Streak Mau Pecah"
                desc="Notifikasi darurat malam hari jika kamu belum belajar agar streak tidak hangus."
              >
                <Switch
                  checked={notifCfg.streakDangerAlert !== false}
                  label="Peringatan darurat streak mau pecah"
                  onChange={() => onToggleOption('streakDangerAlert')}
                />
              </Row>

              {/* Opsi 2: Pengingat Rutin Harian */}
              <Row
                icon="bell"
                title="⏰ Pengingat Belajar Rutin"
                desc={`Pengingat terjadwal setiap pukul ${notifCfg.time || '19:00'}.`}
              >
                <Switch
                  checked={!!notifCfg.streakReminder}
                  label="Pengingat belajar harian rutin"
                  onChange={() => onToggleOption('streakReminder')}
                />
              </Row>

              {notifCfg.streakReminder && (
                <div className="notif-time-wrap" style={{ margin: '4px 0 12px 0' }}>
                  <span style={{ fontSize: '0.84rem', fontWeight: 700 }}>Jam Pengingat:</span>
                  <input
                    type="time"
                    className="notif-time-input"
                    value={notifCfg.time || '19:00'}
                    onChange={onTimeChange}
                    aria-label="Pilih jam pengingat belajar"
                  />
                  <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                    {[
                      { label: 'Pagi', val: '08:00' },
                      { label: 'Siang', val: '12:30' },
                      { label: 'Malam', val: '19:00' },
                      { label: 'Santai', val: '20:30' },
                    ].map((preset) => (
                      <button
                        key={preset.val}
                        type="button"
                        className={'chip-btn' + (notifCfg.time === preset.val ? ' is-active' : '')}
                        onClick={() => onTimePreset(preset.val)}
                        style={{ fontSize: '0.74rem', padding: '3px 8px' }}
                      >
                        {preset.label} ({preset.val})
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Opsi 3: Pengingat Ulangan SRS */}
              <Row
                icon="bot"
                title="🧠 Ulangan Ingatan (SRS Spaced-Repetition)"
                desc="Pengingat jika ada materi koding yang jatuh tempo untuk diulang."
              >
                <Switch
                  checked={!!notifCfg.srsReminder}
                  label="Pengingat ulangan materi ingatan"
                  onChange={() => onToggleOption('srsReminder')}
                />
              </Row>

              {/* Opsi 4: Selebrasi Kenaikan Streak */}
              <Row
                icon="spark"
                title="🎉 Selebrasi Kenaikan Streak"
                desc="Ucapan selamat saat kamu berhasil memecahkan rekor streak baru."
              >
                <Switch
                  checked={!!notifCfg.milestoneAlert}
                  label="Selebrasi kenaikan streak"
                  onChange={() => onToggleOption('milestoneAlert')}
                />
              </Row>

              <div style={{ marginTop: '14px', display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  className="btn btn--ghost btn--sm"
                  onClick={onTestNotification}
                  title="Coba kirimkan notifikasi umum ke browser sekarang"
                >
                  🔔 Tes Notif Umum
                </button>
                <button
                  type="button"
                  className="btn btn--ghost btn--sm"
                  onClick={onTestDangerNotification}
                  title="Simulasikan notifikasi peringatan jika streak kamu mau pecah"
                  style={{ borderColor: 'rgba(239, 68, 68, 0.4)', color: '#dc2626' }}
                >
                  🔥 Tes Notif Streak Mau Pecah
                </button>
                {testNotifMsg && (
                  <span className={`notif-msg notif-msg--${testNotifMsg.type === 'ok' ? 'ok' : 'warn'}`} role="status">
                    {testNotifMsg.text}
                  </span>
                )}
              </div>

              <div className="notif-tip">
                💡 <b>Pengalaman PWA Terbaik:</b> Di HP (Android &amp; iOS 16.4+), pasang CodeDuo ke Layar Utama (<i>Add to Home Screen</i>) agar notifikasi bekerja optimal seperti aplikasi native.
              </div>
            </div>
          )}
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
