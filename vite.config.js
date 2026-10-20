import { createHash } from 'node:crypto';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/* Ganti `__BUILD_ID__` di dist/sw.js dengan hash build → cache lama dibuang otomatis,
 * tak perlu bump versi manual tiap deploy. */
function swBuildId() {
  let outDir = 'dist';
  return {
    name: 'codeduo-sw-build-id',
    apply: 'build',
    configResolved(cfg) { outDir = resolve(cfg.root, cfg.build.outDir); },
    async closeBundle() {
      const assets = await readdir(join(outDir, 'assets'));
      const html = await readFile(join(outDir, 'index.html'), 'utf8');
      const id = createHash('sha1').update(assets.sort().join() + html).digest('hex').slice(0, 8);
      const swPath = join(outDir, 'sw.js');
      const sw = await readFile(swPath, 'utf8');
      await writeFile(swPath, sw.replace("const BUILD = '__BUILD_ID__'", "const BUILD = '" + id + "'"));
    },
  };
}

/* CodeDuo — React + Vite. base './' → aset relatif, aman di subfolder Cloudflare Pages.
 * SPA statis (hash routing, tanpa server): service worker menangani offline. */
export default defineConfig({
  base: './',
  plugins: [react(), swBuildId()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    target: 'es2019',
    rollupOptions: {
      output: {
        /* Pisah vendor & tiap blok kurikulum → cache awet antar deploy:
         * ubah 1 blok konten hanya mengunduh ulang blok itu, bukan seluruh bundel. */
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (/node_modules[\\/](react|react-dom|scheduler)[\\/]/.test(id)) return 'react';
            if (/node_modules[\\/]robot-heads[\\/]/.test(id)) return 'robot';
            if (/node_modules[\\/](animejs|canvas-confetti)[\\/]/.test(id)) return 'vendor';
            return undefined;
          }
          const block = /[\\/]content[\\/](html|js|sql|ts|web)\.js$/.exec(id);
          return block ? 'content-' + block[1] : undefined;
        },
      },
    },
  },
});
