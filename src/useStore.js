/* CodeDuo — hook store: berlangganan versi snapshot (useSyncExternalStore) supaya semua
 * komponen re-render saat satu aksi mengubah state. Data dibaca lewat selector getX(). */
'use strict';

import { useSyncExternalStore } from 'react';
import { subscribe, getSnapshot } from './store.js';

export function useStore() {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
