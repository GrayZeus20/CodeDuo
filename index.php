<?php
/**
 * CodeDuo — Laragon / Apache entry point.
 * Ketika diakses via browser web melalui Laragon (http://localhost/CodeDuo/ atau http://codeduo.test/),
 * alihkan secara otomatis ke folder dist/ agar bundle aplikasi produksi langsung berjalan mulus
 * dengan semua script, modul, stylesheet, dan Service Worker aktif.
 */
$distIndex = __DIR__ . '/dist/index.html';

if (file_exists($distIndex)) {
    // Redirect ke dist/ agar path relatif (assets, icons, manifest) bekerja sempurna
    header('Location: dist/');
    exit;
} else {
    echo '<!doctype html><html><body style="font-family:sans-serif;padding:2rem;text-align:center;">';
    echo '<h2>CodeDuo</h2>';
    echo '<p>Folder <code>dist/</code> belum dibuild. Jalankan <code>npm run build</code> di terminal, atau buka server pengembangan Vite di <a href="http://localhost:5173/">http://localhost:5173/</a>.</p>';
    echo '</body></html>';
    exit;
}
