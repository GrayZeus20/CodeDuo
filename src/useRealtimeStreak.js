/* CodeDuo — useRealtimeStreak: Hook untuk memantau status streak dan countdown timer secara realtime.
 * Opsi `live`: true = detak tiap 1 detik (untuk tampilan countdown detik); false = cek tiap 30 detik + saat tab aktif. */
'use strict';

import { useState, useEffect } from 'react';
import { useStore } from './useStore.js';
import { getStreakRealtime, syncStreakRealtime } from './store.js';

export function useRealtimeStreak({ live = true } = {}) {
  useStore(); // Re-render instan saat state store berubah (misal pelajaran tuntas / reset)
  const [, setTick] = useState(0);

  useEffect(() => {
    syncStreakRealtime();

    const refresh = () => {
      syncStreakRealtime();
      setTick((t) => (t + 1) % 60);
    };

    const intervalMs = live ? 1000 : 30000;
    const timer = setInterval(refresh, intervalMs);
    const onVis = () => {
      if (typeof document !== 'undefined' && document.visibilityState === 'visible') {
        refresh();
      }
    };

    if (typeof document !== 'undefined') {
      document.addEventListener('visibilitychange', onVis);
    }

    return () => {
      clearInterval(timer);
      if (typeof document !== 'undefined') {
        document.removeEventListener('visibilitychange', onVis);
      }
    };
  }, [live]);

  return getStreakRealtime();
}
