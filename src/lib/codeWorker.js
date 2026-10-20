/* CodeDuo — worker pemeriksa jawaban 'code' murid.
 * checkCode dijalankan di sini supaya loop tak berujung (while(true)) tak membekukan UI;
 * caller (src/lib/codeRunner.js) memberi batas waktu lalu terminate worker. */
'use strict';

import { checkCode } from '../../checkers.js';

self.onmessage = (e) => {
  self.postMessage(checkCode(e.data.code, e.data.spec));
};
