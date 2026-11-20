/* CodeDuo — useRealtimeStreak: Hook untuk memantau status streak dan countdown timer secara realtime (per detik). */
'use strict';

import { useState, useEffect } from 'react';
import { useStore } from './useStore.js';
import { getStreakRealtime, syncStreakRealtime } from './store.js';

export function useRealtimeStreak() {
  useStore(); // Re-render instan saat state store berubah (misal pelajaran tuntas / reset)
  const [, setTick] = useState(0);

  useEffect(() => {
    syncStreakRealtime();

    const refresh = () => {
      syncStreakRealtime();
      setTick((t) => (t + 1) % 60);
    };

    const timer = setInterval(refresh, 1000);
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
  }, []);

  return getStreakRealtime();
}
