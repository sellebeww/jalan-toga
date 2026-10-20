# Model ancaman singkat

**Sistem:** SPA statis tanpa backend, login, maupun API pihak ketiga. Dihosting sebagai file statis, bisa dipasang sebagai PWA (service worker same-origin).

**Aset paling berharga:**
1. Data skripsi pengguna di `localStorage` (profil: nama, NIM, judul, dosen; referensi, log bimbingan, catatan).
2. Integritas kode yang disajikan (rantai build dan dependensi).
3. Ketersediaan aplikasi offline (cache service worker).

**Titik masuk:**
- Input form (referensi, log, catatan, template).
- **File cadangan JSON** yang diimpor dari Pengaturan (paling berisiko: bisa berasal dari orang lain).
- Parameter URL (`#/rute?tab=…&q=…&t=…&modul=…&topik=…&alat=…&istilah=…`).
- Dependensi npm saat build.

**Batas kepercayaan:** antara browser pengguna dan file/URL dari luar (file impor, tautan yang dibagikan); antara registry npm dan proses build.

**Ancaman teratas dan status:**

| # | Ancaman | Status |
|---|---|---|
| T1 | XSS lewat data referensi/judul yang dirender sebagai HTML | Dimitigasi: escape di `toHtml`, ditambah CSP |
| T2 | Tautan `javascript:`/skema berbahaya dari file impor | Diperbaiki (S1) |
| T3 | File impor rusak membuat aplikasi tidak bisa dipakai | Diperbaiki (S3); `ErrorBoundary` dan "hapus semua data" tetap ada |
| T4 | Clickjacking (situs dibingkai pihak lain) | Butuh header host (MANUAL_ACTIONS #1) |
| T5 | Dependensi berbahaya atau rentan | `npm audit` 0, lockfile, tanpa skrip install, semua dari registry resmi |
| T6 | Service worker menyajikan aset lama atau milik origin lain | Hanya permintaan same-origin `GET`; versi cache dinaikkan |
| T7 | Kebocoran PII dari `localStorage` lewat ekstensi atau perangkat bersama | Sesuai desain; risiko diterima (tidak ada server). Bisa ditambahkan peringatan di Pengaturan |
| T8 | Parameter URL (`tab`, `q`, `t`, `modul`, `topik`, `alat`, `istilah`) memicu crash atau injeksi | Aman [TERVERIFIKASI]: `tab` divalidasi lewat `useTabParam`; parameter lain dirender sebagai teks React atau dipakai sebagai kunci pencarian. Uji di browser dengan nilai tak valid dan payload `<img onerror>`/`<script>`: 0 crash, 0 elemen tersisip |

**Lingkungan uji yang tersedia:** Node 25, Google Chrome (dijalankan headless lewat `playwright-core` dari scratchpad), `vite preview`. Tidak ada Docker, database, maupun emulator perangkat.
