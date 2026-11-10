<div align="center">

<img src="public/logo.webp" alt="Jalan Toga" width="220">

### Dari bingung, sampai wisuda.

<p>Pendamping skripsi untuk mahasiswa Indonesia: roadmap personal, panduan bab, toolkit statistik, pengelola referensi, log bimbingan, dan simulasi sidang.</p>

<p><img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&labelColor=3a3f47" alt="React 19"> <img src="https://img.shields.io/badge/TypeScript-7-3178C6?logo=typescript&logoColor=white&labelColor=3a3f47" alt="TypeScript 7"> <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white&labelColor=3a3f47" alt="Vite 8"> <img src="https://img.shields.io/badge/Tailwind-4-38BDF8?logo=tailwindcss&logoColor=white&labelColor=3a3f47" alt="Tailwind 4"> <img src="https://img.shields.io/badge/PWA-offline-5A0FC8?logo=pwa&logoColor=white&labelColor=3a3f47" alt="PWA offline"> <img src="https://img.shields.io/badge/license-All%20rights%20reserved-1e3a8a?labelColor=3a3f47" alt="license All rights reserved"></p>

</div>

## Fitur

- **Roadmap personal**: 10 tahap dari cari topik sampai revisi akhir, lengkap dengan estimasi selesai.
- **Panduan** tiap bab, pemilih metodologi, dan toolkit statistik (Cronbach, KR-20, Likert, ukuran sampel, dll).
- **Pengelola referensi** dan format sitasi (IEEE dan lainnya).
- **Tracker**: log bimbingan, kanban tugas, deadline, dan sesi fokus.
- **Simulasi sidang**, kuis, flashcard, dan dukungan mental.
- Mode **gelap** (Dark Forest) dan **terang** (Sage Cream), tur pengguna baru, serta badge pencapaian.

## Tampilan

| Beranda | Roadmap |
|---|---|
| ![Beranda](docs/screenshots/beranda.jpg) | ![Roadmap](docs/screenshots/roadmap.jpg) |

| Toolkit penelitian | Simulasi sidang |
|---|---|
| ![Toolkit penelitian](docs/screenshots/toolkit.jpg) | ![Simulasi sidang](docs/screenshots/sidang.jpg) |

## Menjalankan

Butuh Node.js 22.12+.

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # hasil di dist/
npm test          # tes unit (vitest)
npm run lint      # type-check
```

Tanpa konfigurasi, data tersimpan di browser dan bisa diekspor/diimpor lewat Pengaturan. Untuk login dan sinkron antar perangkat, isi `VITE_SUPABASE_URL` dan `VITE_SUPABASE_PUBLISHABLE_KEY` (lihat `.env.example`). Untuk `sitemap.xml` dan `robots.txt`, build dengan `SITE_URL=https://alamat-situsmu.id npm run build`.

## Struktur

| Folder | Isi |
|---|---|
| `src/data/` | Konten (jurusan, roadmap, bab, metodologi, sidang, FAQ). Edit di sini untuk mengubah isi. |
| `src/lib/` | Logika murni (roadmap, sitasi, store, badge) beserta tesnya. |
| `src/pages/`, `src/app/` | Halaman dan router. |
| `src/components/` | Komponen UI bersama. |
| `public/` | Logo, ikon PWA, manifest, service worker. |
| `docs/audit/` | Laporan audit keamanan dan aksesibilitas. |

Konten yang bergantung aturan kampus (format, jumlah halaman, syarat sidang) ditandai di aplikasi agar dicocokkan dengan buku pedoman fakultas.

## Deploy

Build menyisipkan Content-Security-Policy lewat `<meta>`. Header berikut hanya bisa dipasang dari hosting:

```
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
Content-Security-Policy: frame-ancestors 'none'
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

## Lisensi

© 2026 Vassel Goleyu. All rights reserved. Lihat [LICENSE](LICENSE).
