/* CodeDuo — useRealtimeStreak: Hook untuk memantau status streak dan countdown timer secara realtime (per detik). */
'use strict';

import { useState, useEffect } from 'react';
import { useStore } from './useStore.js';
import { getStreakRealtime, syncStreakRealtime } from './store.js';

export function useRealtimeStreak() {
  useStore(); // Re-render saat state store berubah (misal pelajaran tuntas)
  const [streakInfo, setStreakInfo] = useState(() => getStreakRealtime());

  useEffect(() => {
    // Sinkronisasi awal saat mount
    setStreakInfo(syncStreakRealtime());

    // Detak realtime setiap 1 detik untuk memperbarui countdown waktu tersisa sebelum tengah malam
    const timer = setInterval(() => {
      const nextInfo = getStreakRealtime();
      setStreakInfo(nextInfo);

      // Jika tepat pergantian hari (tengah malam), sinkronkan store
      if (nextInfo.secondsLeft === 0 && nextInfo.minutesLeft === 0 && nextInfo.hoursLeft === 0) {
        syncStreakRealtime();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return streakInfo;
}

