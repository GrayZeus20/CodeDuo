import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/* CodeDuo — React + Vite. base './' → aset relatif, aman di subfolder Cloudflare Pages.
 * SPA statis (hash routing, tanpa server): service worker menangani offline. */
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    target: 'es2019',
    rollupOptions: {
      output: {
        /* pisah vendor berat dari kode app → cache awet antar deploy */
        manualChunks: {
          react: ['react', 'react-dom'],
          robot: ['robot-heads'],
        },
      },
    },
  },
});
