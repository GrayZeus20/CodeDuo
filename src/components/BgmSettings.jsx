/* CodeDuo — Pengaturan Musik Latar (BGM) Akustik:
 * Halaman khusus untuk memilih, mempratinjau streaming, dan mengunduh musik latar
 * dari katalog Pixabay ke IndexedDB browser, atau kembali ke petikan sintetis bawaan. */
'use strict';

import { useRef, useState, useEffect, useMemo } from 'react';
import { useStore } from '../useStore.js';
import { getState, toggleMute } from '../store.js';
import { SFX } from '../../sfx.js';
import { BGM } from '../../bgm.js';

function Icon({ name, size = 20 }) {
  const paths = {
    volume: 'M4 9.5h3L12 5v14l-5-4.5H4zM16 8.5a5 5 0 0 1 0 7M18.8 5.7a9 9 0 0 1 0 12.6',
    music: 'M9 18V5l12-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm12-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z',
    back: 'M15 5l-7 7 7 7',
    db: 'M4 6.5c0-1.4 3.6-2.5 8-2.5s8 1.1 8 2.5S16.4 9 12 9 4 7.9 4 6.5zM4 6.5v11c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5v-11M4 12c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5',
    spark: 'M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18',
  };
  return (
    <svg className="ico" viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d={paths[name] || ''} />
    </svg>
  );
}

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

/* Katalog offline cadangan jika belum berhasil fetch */
const FALLBACK_CATALOG = [
  {
    id: 'px-uplifting',
    title: 'Acoustic Guitars Ambient Uplifting',
    artist: 'Lesfm',
    duration: '2:40',
    sizeStr: '3.4 MB',
    tag: 'Hangat & Inspiratif',
    url: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=acoustic-guitars-ambient-uplifting-10173.mp3'
  },
  {
    id: 'px-motivation',
    title: 'Acoustic Motivation',
    artist: 'Coma-Media',
    duration: '2:18',
    sizeStr: '5.3 MB',
    tag: 'Fokus & Bersemangat',
    url: 'https://cdn.pixabay.com/download/audio/2022/10/14/audio_9939f792cb.mp3?filename=acoustic-motivation-11290.mp3'
  },
  {
    id: 'px-lofi',
    title: 'Lofi Study Chill Beats',
    artist: 'FASSounds',
    duration: '2:27',
    sizeStr: '4.5 MB',
    tag: 'Lo-Fi Akustik Santai',
    url: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3'
  },
  {
    id: 'px-relax',
    title: 'Relaxing Acoustic Guitar',
    artist: 'Music_For_Videos',
    duration: '2:05',
    sizeStr: '5.8 MB',
    tag: 'Fingerstyle Mellow & Tenang',
    url: 'https://cdn.pixabay.com/download/audio/2022/08/02/audio_884fe92c21.mp3?filename=relaxing-guitar-loop-v5-22436.mp3'
  },
  {
    id: 'px-folk',
    title: 'Acoustic Guitar Folk Melody',
    artist: 'AcousticMusic',
    duration: '2:11',
    sizeStr: '5.0 MB',
    tag: 'Folk Melodi Riang',
    url: 'https://cdn.pixabay.com/download/audio/2023/02/28/audio_550d815fa5.mp3?filename=acoustic-guitar-folk-melody.mp3'
  },
  {
    id: 'px-inspiring',
    title: 'Inspiring Acoustic Day',
    artist: 'prazkhanal',
    duration: '2:02',
    sizeStr: '3.7 MB',
    tag: 'Cerah & Produktif',
    url: 'https://cdn.pixabay.com/download/audio/2022/05/16/audio_db6591201e.mp3?filename=inspiring-acoustic-day.mp3'
  },
  {
    id: 'px-loop',
    title: 'Clean Acoustic Guitar Loop',
    artist: 'SoulProdMusic',
    duration: '0:14',
    sizeStr: '78 KB',
    tag: 'Loop Ringan & Cepat',
    url: 'https://cdn.pixabay.com/download/audio/2021/08/04/audio_12b0c7443c.mp3?filename=clean-acoustic-guitar-loop-139bpm-1215.mp3'
  }
];

function openMusicDB() {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') return reject(new Error('IndexedDB tidak didukung'));
    const req = indexedDB.open('CodeDuoMusicDB', 1);
    req.onupgradeneeded = (e) => {
      const d = e.target.result;
      if (!d.objectStoreNames.contains('tracks')) {
        d.createObjectStore('tracks', { keyPath: 'id', autoIncrement: true });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function getSavedTracksFromDB() {
  try {
    const db = await openMusicDB();
    return await new Promise((resolve, reject) => {
      const tx = db.transaction('tracks', 'readonly');
      const store = tx.objectStore('tracks');
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    });
  } catch (_) {
    return [];
  }
}

async function saveTrackToDB(name, blob) {
  const db = await openMusicDB();
  return await new Promise((resolve, reject) => {
    const tx = db.transaction('tracks', 'readwrite');
    const store = tx.objectStore('tracks');
    const req = store.add({
      name,
      size: blob.size,
      type: blob.type || 'audio/mpeg',
      blob,
      createdAt: Date.now()
    });
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export default function BgmSettings() {
  useStore();
  const state = getState();
  const [bgmEnabled, setBgmEnabled] = useState(() => BGM.isEnabled());
  const [bgmVolumePct, setBgmVolumePct] = useState(() => Math.round(BGM.getVolume() * 100));
  const [activeTrack, setActiveTrack] = useState(() => BGM.getActiveTrack());
  const [isOnline, setIsOnline] = useState(() => typeof navigator !== 'undefined' ? navigator.onLine : true);
  const [catalog, setCatalog] = useState(FALLBACK_CATALOG);
  const [loadingCatalog, setLoadingCatalog] = useState(false);
  const [savedTracks, setSavedTracks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [previewingId, setPreviewingId] = useState(null);
  const [downloadingId, setDownloadingId] = useState(null);

  const previewAudioRef = useRef(null);
  const previewBlobUrlRef = useRef(null);
  const wasBgmPlayingRef = useRef(false);

  const stopPreview = () => {
    const audio = previewAudioRef.current;
    if (audio) {
      audio.pause();
    }
    setPreviewingId(null);
    if (previewBlobUrlRef.current) {
      URL.revokeObjectURL(previewBlobUrlRef.current);
      previewBlobUrlRef.current = null;
    }
    if (wasBgmPlayingRef.current) {
      wasBgmPlayingRef.current = false;
      BGM.play();
    }
  };

  const refreshSavedTracks = async () => {
    const list = await getSavedTracksFromDB();
    setSavedTracks(list);
  };

  const fetchOnlineCatalog = async () => {
    if (typeof navigator !== 'undefined' && !navigator.onLine) return;
    setLoadingCatalog(true);
    try {
      const res = await fetch('./pixabay-acoustic-catalog.json');
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setCatalog(data);
        }
      }
    } catch (err) {
      console.warn('[BGM Catalog] Gagal fetch online catalog:', err);
    } finally {
      setLoadingCatalog(false);
    }
  };

  useEffect(() => {
    if (!previewAudioRef.current && typeof Audio !== 'undefined') {
      previewAudioRef.current = new Audio();
    }

    const handleOnline = () => {
      setIsOnline(true);
      fetchOnlineCatalog();
    };
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    if (navigator.onLine) {
      fetchOnlineCatalog();
    }
    refreshSavedTracks();

    const unsub = BGM.subscribe(() => {
      setBgmEnabled(BGM.isEnabled());
      setBgmVolumePct(Math.round(BGM.getVolume() * 100));
      setActiveTrack(BGM.getActiveTrack());
    });

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      unsub();
      if (previewAudioRef.current) {
        previewAudioRef.current.pause();
        previewAudioRef.current.src = '';
      }
      if (previewBlobUrlRef.current) {
        URL.revokeObjectURL(previewBlobUrlRef.current);
        previewBlobUrlRef.current = null;
      }
      if (wasBgmPlayingRef.current) {
        wasBgmPlayingRef.current = false;
        BGM.play();
      }
    };
  }, []);

  const onToggleBgm = () => {
    if (bgmEnabled) SFX.back(); else SFX.pick();
    BGM.toggle();
  };

  const applyBgmVolume = (v) => {
    const clamped = Math.min(100, Math.max(0, Math.round(Number(v) || 0)));
    setBgmVolumePct(clamped);
    BGM.setVolume(clamped / 100);
  };

  const togglePreview = (track, isSaved = false) => {
    const audio = previewAudioRef.current;
    if (!audio) return;

    if (previewingId === track.id && !audio.paused) {
      stopPreview();
      return;
    }

    // Jeda BGM saat mempratinjau agar suara tidak bertumpuk
    if (BGM.isPlaying()) {
      wasBgmPlayingRef.current = true;
      BGM.pause();
    }

    audio.pause();
    if (previewBlobUrlRef.current) {
      URL.revokeObjectURL(previewBlobUrlRef.current);
      previewBlobUrlRef.current = null;
    }

    // Cek apakah file sudah tersimpan lokal di IndexedDB
    const saved = savedTracks.find(s => s.name === track.title + '.mp3' || s.id === track.id);
    if ((isSaved || saved) && (track.blob || (saved && saved.blob))) {
      const blob = track.blob || saved.blob;
      previewBlobUrlRef.current = URL.createObjectURL(blob);
      audio.src = previewBlobUrlRef.current;
    } else if (track.url) {
      audio.src = track.url;
    } else {
      return;
    }

    audio.volume = Math.max(0.1, Math.min(1, bgmVolumePct / 100));
    audio.onended = () => {
      setPreviewingId(null);
      if (wasBgmPlayingRef.current) {
        wasBgmPlayingRef.current = false;
        BGM.play();
      }
    };
    audio.onerror = () => {
      setPreviewingId(null);
      if (wasBgmPlayingRef.current) {
        wasBgmPlayingRef.current = false;
        BGM.play();
      }
      alert('Tidak dapat memutar pratinjau audio. Periksa koneksi internet.');
    };

    audio.play().then(() => {
      setPreviewingId(track.id);
    }).catch(err => {
      console.warn('[BGM Preview Error]', err);
      setPreviewingId(null);
      if (wasBgmPlayingRef.current) {
        wasBgmPlayingRef.current = false;
        BGM.play();
      }
    });
  };

  const handleSelectOrDownload = async (track) => {
    stopPreview();
    if (track.blob && track.id) {
      SFX.pick();
      await BGM.setActiveTrack(track.id);
      if (!bgmEnabled) BGM.setEnabled(true);
      BGM.unlock();
      if (!BGM.isPlaying()) BGM.play();
      return;
    }

    const existing = savedTracks.find(s => s.name === track.title + '.mp3');
    if (existing) {
      SFX.pick();
      await BGM.setActiveTrack(existing.id);
      if (!bgmEnabled) BGM.setEnabled(true);
      BGM.unlock();
      if (!BGM.isPlaying()) BGM.play();
      return;
    }

    try {
      setDownloadingId(track.id);
      SFX.pick();
      const res = await fetch(track.url);
      if (!res.ok) throw new Error('Status server: ' + res.status);
      const blob = await res.blob();

      const newId = await saveTrackToDB(track.title + '.mp3', blob);
      await refreshSavedTracks();

      await BGM.setActiveTrack(newId);
      if (!bgmEnabled) BGM.setEnabled(true);
      BGM.unlock();
      if (!BGM.isPlaying()) BGM.play();
      SFX.happy();
    } catch (err) {
      console.error('[BGM Download]', err);
      alert('Gagal mengunduh musik Pixabay: ' + err.message + '\n\nTips: Buka Pengelola Lengkap untuk opsi upload manual.');
    } finally {
      setDownloadingId(null);
    }
  };

  const handleResetToSynth = async () => {
    stopPreview();
    SFX.back();
    await BGM.setActiveTrack(null);
    if (!bgmEnabled) BGM.setEnabled(true);
    BGM.unlock();
    if (!BGM.isPlaying()) BGM.play();
  };

  const filteredCatalog = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return catalog;
    return catalog.filter(t =>
      (t.title && t.title.toLowerCase().includes(q)) ||
      (t.artist && t.artist.toLowerCase().includes(q)) ||
      (t.tag && t.tag.toLowerCase().includes(q))
    );
  }, [catalog, searchQuery]);

  return (
    <section className="screen profile">
      {/* Header Halaman */}
      <header className="profile__hero">
        <a className="profile__back" href="#/profile" onClick={() => SFX.back()}>
          <Icon name="back" size={18} /> Kembali ke Pengaturan
        </a>
        <div className="profile__hero-text">
          <h1>Pilih Musik Latar (BGM)</h1>
          <p className="muted">Pilih alunan petikan akustik santai untuk menemani sesi belajar ngodingmu.</p>
        </div>
      </header>

      <div style={{ maxWidth: '820px', width: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Kartu Status Musik Aktif & Kontrol Cepat */}
        <section className="card set-card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '2rem' }}>
                {BGM.isPlaying() ? '🎵' : '⏸'}
              </span>
              <div>
                <h2 style={{ fontSize: '1.1rem', fontWeight: 800, margin: 0 }}>
                  {activeTrack ? activeTrack.name : 'Petikan Akustik Bawaan (Sintetis)'}
                </h2>
                <div className="muted" style={{ fontSize: '0.8rem', marginTop: '2px' }}>
                  {activeTrack
                    ? 'Memutar berkas audio dari Pixabay / IndexedDB browser'
                    : 'Web Audio Physical Modeling (Karplus-Strong) • 100% Offline'}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Switch checked={bgmEnabled && !state.muted} label="Musik latar akustik aktif" onChange={onToggleBgm} />
            </div>
          </div>

          {/* Slider Volume */}
          <div className={'set-row set-row--stacked volume' + (!bgmEnabled || state.muted ? ' is-muted' : '')} style={{ marginTop: '16px' }}>
            <div className="set-row__head">
              <span className="set-row__icon" aria-hidden="true">
                {!bgmEnabled || state.muted || bgmVolumePct === 0 ? '🔇' : '🎵'}
              </span>
              <div className="set-row__text">
                <b>Volume Musik Latar</b>
                <span className="muted">Atur tingkat kenyamanan suara latar</span>
              </div>
              <output className="volume__value">{bgmVolumePct}%</output>
            </div>
            <input
              className="volume__slider"
              type="range"
              min="0"
              max="100"
              step="1"
              value={bgmVolumePct}
              style={{ '--vol': bgmVolumePct + '%' }}
              aria-label="Volume musik latar akustik"
              aria-valuetext={bgmVolumePct + ' persen'}
              onChange={(e) => {
                const v = Number(e.target.value);
                setBgmVolumePct(v);
                BGM.setVolume(v / 100);
              }}
            />
            <div className="volume__presets" role="group" aria-label="Pilihan volume musik cepat">
              {[0, 20, 35, 60, 100].map((v) => (
                <button
                  key={v}
                  type="button"
                  className={'chip-btn' + (bgmVolumePct === v ? ' is-active' : '')}
                  aria-pressed={bgmVolumePct === v}
                  onClick={() => applyBgmVolume(v)}
                >
                  {v}%
                </button>
              ))}
              <button
                type="button"
                className="chip-btn chip-btn--test"
                onClick={() => {
                  if (!bgmEnabled) BGM.setEnabled(true);
                  BGM.unlock();
                  if (!BGM.isPlaying()) BGM.play();
                }}
              >
                🎵 Putar
              </button>
              {activeTrack && (
                <button
                  type="button"
                  className="chip-btn"
                  onClick={handleResetToSynth}
                  title="Kembali ke nada petikan akustik sintetis bawaan"
                  style={{ marginLeft: 'auto', fontSize: '0.8rem' }}
                >
                  ↩ Reset ke Akustik Bawaan
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Kartu Pemilihan Katalog Musik (Tinggal Scroll) */}
        <section className="card set-card">
          <div className="bgm-catalog__header">
            <div>
              <h2 className="set-card__title" style={{ margin: 0 }}>
                <Icon name="music" /> Pilih Lagu Latar Akustik
              </h2>
              <p className="muted" style={{ fontSize: '0.8rem', marginTop: '4px' }}>
                Daftar otomatis tersinkron saat online. Tinggal scroll dan klik untuk pasang sebagai BGM.
              </p>
            </div>

            <div className="bgm-catalog__status">
              <span className={`bgm-status-dot ${isOnline ? 'bgm-status-dot--online' : 'bgm-status-dot--offline'}`} />
              <span>{isOnline ? 'Tersambung ke Katalog Online' : 'Mode Offline (Musik Lokal)'}</span>
              {loadingCatalog && <span className="muted" style={{ fontSize: '0.75rem' }}>• ⏳ Memuat...</span>}
            </div>
          </div>

          {/* Kolom Pencarian / Filter Cepat */}
          <div className="bgm-search-box">
            <input
              type="search"
              className="bgm-search"
              placeholder="🔍 Cari lagu akustik (judul, artis, suasana)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Cari musik akustik"
            />
          </div>

          {/* Scrollable Container */}
          <div className="bgm-scroll-box" style={{ maxHeight: '420px' }} role="region" aria-label="Daftar lagu musik latar akustik">
            {/* 1. Track Akustik Bawaan (Sintetis) */}
            {(!searchQuery || 'petikan gitar akustik bawaan sintetis karplus strong'.includes(searchQuery.toLowerCase())) && (
              <div className={`bgm-item ${!activeTrack ? 'bgm-item--active' : ''}`}>
                <div className="bgm-item__info">
                  <div className="bgm-item__title">
                    🎸 Petikan Akustik Bawaan {!activeTrack && <span style={{ color: 'var(--green-dark)', fontSize: '0.74rem' }}>✓ AKTIF</span>}
                  </div>
                  <div className="bgm-item__artist">
                    Web Audio Physical Modeling • Karplus-Strong
                  </div>
                  <div className="bgm-item__meta">
                    <span>⏱ Loop Otomatis</span>
                    <span>📦 0 KB (Sintetis)</span>
                    <span className="bgm-item__tag">🌿 100% Offline &amp; Hemat Daya</span>
                  </div>
                </div>
                <div className="bgm-item__actions">
                  <button
                    type="button"
                    className={`chip-btn ${!activeTrack ? 'is-active' : ''}`}
                    disabled={!activeTrack}
                    onClick={handleResetToSynth}
                    style={{ fontSize: '0.82rem', padding: '6px 14px' }}
                  >
                    {!activeTrack ? '✓ Sedang Dipakai' : '▶ Pakai Suara Ini'}
                  </button>
                </div>
              </div>
            )}

            {/* 2. Custom Uploaded Tracks di IndexedDB (jika bukan dari katalog bawaan) */}
            {savedTracks.filter(s => !catalog.some(c => c.title + '.mp3' === s.name)).map(saved => {
              const isActive = activeTrack && activeTrack.id === saved.id;
              const isPreviewing = previewingId === saved.id;
              const matchesSearch = !searchQuery || saved.name.toLowerCase().includes(searchQuery.toLowerCase());
              if (!matchesSearch) return null;

              return (
                <div key={'saved-' + saved.id} className={`bgm-item ${isActive ? 'bgm-item--active' : ''}`}>
                  <div className="bgm-item__info">
                    <div className="bgm-item__title">
                      🎵 {saved.name} {isActive && <span style={{ color: 'var(--green-dark)', fontSize: '0.74rem' }}>✓ AKTIF</span>}
                    </div>
                    <div className="bgm-item__artist">
                      Tersimpan di IndexedDB browser
                    </div>
                    <div className="bgm-item__meta">
                      <span>📦 {(saved.size / 1024 / 1024).toFixed(2)} MB</span>
                      <span className="bgm-item__tag">💾 Musik Tersimpan</span>
                    </div>
                  </div>
                  <div className="bgm-item__actions">
                    <button
                      type="button"
                      className="chip-btn"
                      onClick={() => togglePreview(saved, true)}
                      style={{ fontSize: '0.8rem', padding: '6px 10px' }}
                      title="Dengarkan pratinjau"
                    >
                      {isPreviewing ? '⏸ Jeda' : '▶ Pratinjau'}
                    </button>
                    <button
                      type="button"
                      className={`chip-btn ${isActive ? 'is-active' : ''}`}
                      disabled={isActive}
                      onClick={() => handleSelectOrDownload(saved)}
                      style={{ fontSize: '0.82rem', padding: '6px 14px' }}
                    >
                      {isActive ? '✓ Sedang Dipakai' : '▶ Pakai Ini'}
                    </button>
                  </div>
                </div>
              );
            })}

            {/* 3. Catalog Tracks dari Pixabay (Otomatis diambil jika online) */}
            {filteredCatalog.map(item => {
              const isSaved = savedTracks.some(s => s.name === item.title + '.mp3');
              const isActive = activeTrack && activeTrack.name && activeTrack.name.includes(item.title);
              const isPreviewing = previewingId === item.id;
              const isDownloading = downloadingId === item.id;

              return (
                <div key={item.id} className={`bgm-item ${isActive ? 'bgm-item--active' : ''}`}>
                  <div className="bgm-item__info">
                    <div className="bgm-item__title">
                      {item.title} {isActive && <span style={{ color: 'var(--green-dark)', fontSize: '0.74rem' }}>✓ AKTIF</span>}
                    </div>
                    <div className="bgm-item__artist">
                      👤 {item.artist} • Pixabay Free
                    </div>
                    <div className="bgm-item__meta">
                      <span>⏱ {item.duration}</span>
                      <span>📦 {item.sizeStr}</span>
                      <span className="bgm-item__tag">🏷 {item.tag}</span>
                    </div>
                  </div>
                  <div className="bgm-item__actions">
                    <button
                      type="button"
                      className="chip-btn"
                      onClick={() => togglePreview(item, isSaved)}
                      style={{ fontSize: '0.8rem', padding: '6px 10px' }}
                      title="Dengarkan streaming pratinjau"
                      disabled={!isOnline && !isSaved}
                    >
                      {isPreviewing ? '⏸ Jeda' : '▶ Pratinjau'}
                    </button>
                    <button
                      type="button"
                      className={`chip-btn ${isActive ? 'is-active' : ''}`}
                      disabled={isActive || isDownloading || (!isOnline && !isSaved)}
                      onClick={() => handleSelectOrDownload(item)}
                      style={{ fontSize: '0.82rem', padding: '6px 14px' }}
                    >
                      {isDownloading
                        ? '⏳ Mengunduh...'
                        : isActive
                          ? '✓ Sedang Dipakai'
                          : isSaved
                            ? '▶ Pakai Lagu Ini'
                            : isOnline
                              ? '⬇ Unduh & Pasang'
                              : 'Perlu Online'}
                    </button>
                  </div>
                </div>
              );
            })}

            {/* Fallback pencarian kosong */}
            {filteredCatalog.length === 0 && (
              <div style={{ textAlign: 'center', padding: '36px 12px', color: 'var(--muted)', fontSize: '0.88rem' }}>
                🔍 Tidak ada musik yang cocok dengan "{searchQuery}".
              </div>
            )}
          </div>
        </section>

        {/* Opsi Tambahan / Unggah Mandiri */}
        <section className="card set-card" style={{ padding: '16px 20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <b style={{ fontSize: '0.9rem' }}>Punya file musik MP3 sendiri?</b>
              <p className="muted" style={{ fontSize: '0.8rem', margin: '2px 0 0' }}>
                Gunakan Pengelola Audio Lengkap untuk drag &amp; drop file lokal dari perangkatmu.
              </p>
            </div>
            <a
              href="./bg-music-manager.html"
              className="chip-btn"
              style={{ textDecoration: 'none', fontWeight: 'bold', fontSize: '0.82rem', padding: '7px 16px' }}
            >
              Buka Pengelola Audio ↗
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}

