/* CodeDuo — Modul Notifikasi & Pengingat Belajar (Web & PWA).
 * Mendukung desktop Web browser & mobile PWA (Standalone, Service Worker, Web Push API).
 * Menjaga streak belajar harian, pengingat bahaya streak mau pecah, ulangan SRS, dan selebrasi milestone.
 */
'use strict';

import { getState, dueReviewKeys, getStreakRealtime } from './store.js';
import { SFX } from '../sfx.js';

const STORAGE_KEY = 'codeduo_notifications_config';

const DEFAULT_CONFIG = {
  enabled: false,
  time: '19:00', // Jam 19:00 (malam) sebagai default
  streakReminder: true,
  streakDangerAlert: true, // Peringatan darurat otomatis jika streak mau pecah
  srsReminder: true,
  milestoneAlert: true,
  lastSentDate: null,
  lastDangerSentDate: null,
};

const subscribers = new Set();

function notifySubscribers() {
  subscribers.forEach((fn) => {
    try { fn(); } catch (_) {}
  });
}

/** Memeriksa apakah Notification API didukung oleh browser saat ini */
export function isNotificationSupported() {
  return typeof window !== 'undefined' && 'Notification' in window;
}

/** Memperoleh status izin notifikasi: 'granted' | 'denied' | 'default' | 'unsupported' */
export function getPermissionStatus() {
  if (!isNotificationSupported()) return 'unsupported';
  return Notification.permission;
}

/** Membaca konfigurasi notifikasi dari localStorage */
export function getNotificationSettings() {
  if (typeof localStorage === 'undefined') return { ...DEFAULT_CONFIG };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_CONFIG };
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_CONFIG, ...parsed };
  } catch (_) {
    return { ...DEFAULT_CONFIG };
  }
}

/** Menyimpan pembaruan konfigurasi notifikasi */
export function updateNotificationSettings(partial) {
  const current = getNotificationSettings();
  const next = { ...current, ...partial };
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    }
  } catch (_) {}
  notifySubscribers();
  return next;
}

/** Berlangganan perubahan status/pengaturan notifikasi */
export function subscribeNotifications(fn) {
  subscribers.add(fn);
  return () => { subscribers.delete(fn); };
}

/** Format tanggal lokal YYYY-MM-DD */
function getTodayDateStr() {
  const now = new Date();
  return now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');
}

/**
 * Meminta izin notifikasi ke browser dengan dukungan Web & PWA.
 * Jika disetujui, otomatis mengaktifkan setting pengingat dan mendaftarkan periodic background sync.
 */
export async function requestNotificationPermission() {
  if (!isNotificationSupported()) {
    return { ok: false, permission: 'unsupported', message: 'Browser ini tidak mendukung notifikasi Web/PWA.' };
  }

  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      updateNotificationSettings({ enabled: true });
      registerPeriodicSync().catch(() => {});
      return { ok: true, permission: 'granted' };
    } else {
      updateNotificationSettings({ enabled: false });
      return {
        ok: false,
        permission,
        message: permission === 'denied'
          ? 'Notifikasi diblokir oleh browser. Klik ikon gembok di sebelah alamat web untuk mengizinkan.'
          : 'Izin notifikasi belum diberikan.'
      };
    }
  } catch (err) {
    return { ok: false, permission: getPermissionStatus(), message: err.message };
  }
}

/**
 * Mengirim notifikasi lokal via Service Worker (standar PWA) dengan fallback ke Web Notification API.
 */
export async function sendLocalNotification(title, options = {}) {
  if (!isNotificationSupported() || getPermissionStatus() !== 'granted') {
    return false;
  }

  const defaultOptions = {
    icon: './icon-192.png',
    badge: './icon.svg',
    vibrate: [120, 60, 120],
    renotify: true,
    data: { url: './' },
  };

  const finalOptions = { ...defaultOptions, ...options };

  // 1. Prioritas: Kirim via Service Worker Registration (PWA & Android Mobile Friendly)
  if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
    try {
      const reg = await Promise.race([
        navigator.serviceWorker.ready,
        new Promise((_, reject) => setTimeout(() => reject(new Error('SW timeout')), 1000))
      ]);
      if (reg && reg.showNotification) {
        await reg.showNotification(title, finalOptions);
        return true;
      }
    } catch (_) {
      // Fallback ke Notification constructor standar
    }
  }

  // 2. Fallback: Standar Notification constructor (Desktop Web)
  try {
    const notif = new Notification(title, finalOptions);
    notif.onclick = () => {
      if (typeof window !== 'undefined') {
        window.focus();
        if (finalOptions.data && finalOptions.data.url) {
          window.location.hash = finalOptions.data.url.replace(/^\.\/?/, '');
        }
      }
      notif.close();
    };
    return true;
  } catch (err) {
    console.warn('[Notification Error]', err);
    return false;
  }
}

/** Mengirim notifikasi uji coba umum ke pengguna */
export async function sendTestNotification() {
  const perm = getPermissionStatus();
  if (perm !== 'granted') {
    const res = await requestNotificationPermission();
    if (!res.ok) return res;
  }

  const ok = await sendLocalNotification('🤖 Halo dari Bibit! Notifikasi Aktif!', {
    body: 'Notifikasi pengingat belajar CodeDuo berhasil terpasang di browsermu 🎉',
    tag: 'codeduo-test-notif',
    data: { url: './' },
    actions: [
      { action: 'open', title: 'Buka CodeDuo 🚀' }
    ]
  });

  if (ok) {
    try { SFX.happy(); } catch (_) {}
    return { ok: true, message: 'Notifikasi uji coba berhasil dikirim!' };
  } else {
    return { ok: false, message: 'Gagal mengirim notifikasi. Pastikan izin diizinkan.' };
  }
}

/** Mengirim notifikasi simulasi peringatan streak mau pecah */
export async function sendStreakDangerTestNotification() {
  const perm = getPermissionStatus();
  if (perm !== 'granted') {
    const res = await requestNotificationPermission();
    if (!res.ok) return res;
  }

  const streakInfo = typeof getStreakRealtime === 'function' ? getStreakRealtime() : null;
  const count = (streakInfo && streakInfo.count > 0) ? streakInfo.count : 5;
  const hours = (streakInfo && streakInfo.hoursLeft > 0) ? streakInfo.hoursLeft : 3;

  const ok = await sendLocalNotification(`🔥⚠️ BAHAYA! Streak ${count} Harimu Mau Pecah!`, {
    body: `Contoh simulasi: Tersisa ${hours} jam lagi sebelum tengah malam! Selesaikan 1 kuis kilat sekarang agar streak ${count} harimu tidak hangus.`,
    tag: 'codeduo-streak-danger-test',
    data: { url: './' },
    vibrate: [200, 100, 200, 100, 200],
    actions: [
      { action: 'study', title: 'Selamatkan Streak Sekarang 🔥' }
    ]
  });

  if (ok) {
    try { SFX.pick(); } catch (_) {}
    return { ok: true, message: 'Notifikasi darurat streak mau pecah berhasil dikirim!' };
  } else {
    return { ok: false, message: 'Gagal mengirim notifikasi. Pastikan izin diizinkan.' };
  }
}

/** Mengirim notifikasi selebrasi kenaikan streak harian */
let lastMilestoneNotified = 0;
export async function notifyStreakMilestone(streakCount) {
  const cfg = getNotificationSettings();
  if (!cfg.enabled || !cfg.milestoneAlert || getPermissionStatus() !== 'granted') return;
  if (!streakCount || streakCount <= 0 || streakCount === lastMilestoneNotified) return;
  lastMilestoneNotified = streakCount;

  await sendLocalNotification(`🔥 Luar Biasa! Streak ${streakCount} Hari!`, {
    body: `Kamu konsisten belajar koding hari ini! Pertahankan ritmemu bersama Bibit 🌟`,
    tag: 'codeduo-streak-milestone',
    data: { url: './' }
  });
}

/** Memeriksa jadwal pengingat belajar harian dan mengirim notifikasi jika tepat waktu */
export async function checkDailyReminder({ force = false } = {}) {
  const cfg = getNotificationSettings();
  if (!cfg.enabled || getPermissionStatus() !== 'granted') return false;

  const today = getTodayDateStr();
  const streakInfo = typeof getStreakRealtime === 'function' ? getStreakRealtime() : null;

  // 1. PRIORITAS TERTINGGI: Peringatan Darurat Streak Mau Pecah!
  if (streakInfo && streakInfo.streakAtRisk && cfg.streakDangerAlert !== false) {
    const now = new Date();
    const currentHour = now.getHours();
    const [targetHour = 19] = (cfg.time || '19:00').split(':').map(Number);
    // Masuk zona bahaya jika: waktu sudah petang/malam (>= 18:00), tersisa <= 6 jam, atau melewati jam target pengingat
    const isDangerTime = currentHour >= 18 || streakInfo.hoursLeft < 6 || currentHour >= targetHour;

    if ((isDangerTime || force) && (force || cfg.lastDangerSentDate !== today)) {
      const hoursText = streakInfo.hoursLeft > 0
        ? `${streakInfo.hoursLeft} jam lagi`
        : `${streakInfo.minutesLeft} menit lagi`;

      const sent = await sendLocalNotification(`🔥⚠️ BAHAYA: Streak ${streakInfo.count} Harimu Mau Pecah!`, {
        body: `Tersisa ${hoursText} sebelum tengah malam! Selesaikan 1 kuis kilat sekarang agar streak ${streakInfo.count} harimu tidak hangus.`,
        tag: 'codeduo-streak-danger',
        data: { url: './' },
        vibrate: [200, 100, 200, 100, 200],
        actions: [
          { action: 'study', title: 'Selamatkan Streak Sekarang 🔥' }
        ]
      });

      if (sent) {
        updateNotificationSettings({ lastDangerSentDate: today });
        return true;
      }
    }
  }

  // 2. Pengingat Rutin Harian (Normal Scheduled Reminder)
  if (!force && cfg.lastSentDate === today) {
    return false; // Pengingat rutin sudah dikirim hari ini
  }

  // Bandingkan jam sekarang dengan jam pengingat
  if (!force && cfg.time) {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMin = now.getMinutes();
    const [targetHour, targetMin] = cfg.time.split(':').map(Number);

    if (currentHour < targetHour || (currentHour === targetHour && currentMin < targetMin)) {
      return false; // Belum waktunya
    }
  }

  const hasLearnedToday = streakInfo ? streakInfo.todayCompleted : false;
  const streak = streakInfo ? streakInfo.count : 0;

  // 2a. Pengingat Streak Belajar jika belum belajar hari ini
  if (!hasLearnedToday && cfg.streakReminder) {
    const title = streak > 0
      ? `🔥 Jaga Streak ${streak} Harimu!`
      : `🔥 Waktunya Belajar Koding Hari Ini!`;
    const body = streak > 0
      ? `Bibit sudah menunggu! Selesaikan 1 step kuis singkat agar streak ${streak} harimu tidak terputus.`
      : `Luangkan 3 menit untuk belajar koding bersama Bibit hari ini!`;

    const sent = await sendLocalNotification(title, {
      body,
      tag: 'codeduo-daily-streak-reminder',
      data: { url: './' },
      actions: [
        { action: 'study', title: 'Mulai Belajar 🚀' }
      ]
    });

    if (sent) {
      updateNotificationSettings({ lastSentDate: today });
      return true;
    }
  }

  // 2b. Pengingat Ulangan SRS jika sudah belajar tapi ada kartu ingatan jatuh tempo
  if (hasLearnedToday && cfg.srsReminder && typeof dueReviewKeys === 'function') {
    const dueCount = dueReviewKeys().length;
    if (dueCount > 0) {
      const sent = await sendLocalNotification(`🧠 Waktunya Ulangan Ingatan (${dueCount} Soal)`, {
        body: `Ada materi koding yang jatuh tempo review hari ini agar makin melekat di ingatanmu.`,
        tag: 'codeduo-srs-reminder',
        data: { url: './#/' },
        actions: [
          { action: 'review', title: 'Ulangi Sekarang 🧠' }
        ]
      });

      if (sent) {
        updateNotificationSettings({ lastSentDate: today });
        return true;
      }
    }
  }

  return false;
}

/** Mendaftarkan Periodic Background Sync (Chromium PWA) */
async function registerPeriodicSync() {
  if (typeof navigator === 'undefined' || !('serviceWorker' in navigator)) return;
  try {
    const reg = await navigator.serviceWorker.ready;
    if (reg.periodicSync) {
      const status = await navigator.permissions.query({ name: 'periodic-background-sync' }).catch(() => null);
      if (status && (status.state === 'granted' || status.state === 'prompt')) {
        await reg.periodicSync.register('codeduo-daily-reminder', {
          minInterval: 12 * 60 * 60 * 1000 // Minimal per 12 jam
        });
      }
    }
  } catch (_) {}
}

/** Menginisialisasi scheduler otomatis saat aplikasi aktif di browser/PWA */
let schedulerInitialized = false;
export function initNotificationScheduler() {
  if (schedulerInitialized || typeof window === 'undefined') return;
  schedulerInitialized = true;

  // Cek langsung setelah booting (delay 4 detik agar tidak mengganggu inisialisasi awal)
  setTimeout(() => {
    checkDailyReminder().catch(() => {});
  }, 4000);

  // Interval rutin tiap 10 menit saat halaman terbuka
  setInterval(() => {
    checkDailyReminder().catch(() => {});
  }, 10 * 60 * 1000);

  // Cek saat pengguna kembali ke aplikasi / tab (PWA resume atau buka tab)
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      checkDailyReminder().catch(() => {});
    }
  });

  window.addEventListener('online', () => {
    checkDailyReminder().catch(() => {});
  });
}
