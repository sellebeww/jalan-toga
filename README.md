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
npm ci            # pasang dependensi sesuai package-lock.json
npm run dev       # http://localhost:3000
npm run build     # hasil di dist/
npm run preview   # sajikan hasil build
```

### Skrip

| Skrip | Fungsi |
|---|---|
| `npm run dev` | Server pengembangan (port 3000) |
| `npm run build` | Build produksi ke `dist/` |
| `npm run preview` | Menyajikan `dist/` secara lokal |
| `npm run typecheck` | Pemeriksaan tipe TypeScript (`tsc --noEmit`) |
| `npm run lint` | Alias dari `typecheck`; belum ada ESLint |
| `npm test` | Tes unit (Vitest, jsdom) |
| `npm run brand` | Membuat ulang aset logo dari `scripts/logo-source.png` |

### Variabel lingkungan

Semua opsional. Salin `.env.example` ke `.env` bila perlu; jangan mengomit `.env`.

| Variabel | Dipakai untuk |
|---|---|
| `VITE_SUPABASE_URL` | Alamat proyek Supabase untuk login dan sinkron antar perangkat |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Kunci publik (publishable/anon) Supabase. Jangan pernah mengisi kunci `service_role` di sini: semua `VITE_*` masuk ke bundle browser |
| `SITE_URL` | Saat build, untuk membuat `sitemap.xml` dan `robots.txt` |

Tanpa konfigurasi, data tersimpan di browser dan bisa diekspor/diimpor lewat Pengaturan. Fitur Riset Topik memakai kunci API Anthropic milik pengguna yang dimasukkan di halaman itu; kunci disimpan di `localStorage` perangkat, tidak ikut cadangan, dan tidak dibaca dari `.env`.

## Tes

```bash
npm test
```

Tes ada di `src/**/*.test.ts` dan dijalankan dengan `TZ=UTC` (diatur di `test/globalSetup.ts`) agar hasilnya sama di semua mesin. Isinya:

- `src/lib/calculators.test.ts`: Cronbach alpha, KR-20, Spearman-Brown, Likert, Harry King, Roscoe, tabel Isaac-Michael. Nilai acuan dihitung terpisah dari data mentah, bukan dari kode aplikasi.
- `src/lib/sampling.test.ts`: Slovin, Cochran, aturan praktis, statistik deskriptif, Pearson.
- `src/lib/estimate.test.ts`: estimasi kelulusan dan perencanaan roadmap (hitung tangan).
- `src/data/data.test.ts`: integritas data glosarium dan flashcard (id unik, field wajib, modul valid).
- `src/lib/lib.test.ts`, `src/lib/auth.test.ts`: sitasi, store, judul, parser laporan AI, dan lainnya.

Tes tidak memanggil Supabase maupun Anthropic dan tidak butuh jaringan.

## CI

`.github/workflows/ci.yml` berjalan di setiap push ke `main` dan `improve/**` serta pada pull request: Node 22, `npm ci`, `npm run typecheck`, `npm test`, `npm run build`.

## Batasan

- Belum ada tes komponen/UI dan tes end-to-end; cakupan tes baru pada logika murni dan data.
- Belum ada ESLint (`npm run lint` hanya memeriksa tipe).
- Kunci API Anthropic dipakai langsung dari browser (`dangerouslyAllowBrowser`). Ini kompromi untuk aplikasi tanpa backend; lihat [docs/AUDIT.md](docs/AUDIT.md).
- Repo tidak menyertakan migrasi atau kebijakan RLS Supabase untuk tabel `user_state`; pastikan RLS aktif di proyekmu.
- Tabel Harry King hanya terverifikasi untuk N=200 (contoh pada materi); nilai lain adalah pendekatan.
- Pemeriksaan gulir horizontal 360px dilakukan manual dengan Playwright, belum otomatis di CI.

## Struktur

| Folder | Isi |
|---|---|
| `src/data/` | Konten (jurusan, roadmap, bab, metodologi, sidang, FAQ). Edit di sini untuk mengubah isi. |
| `src/lib/` | Logika murni (roadmap, sitasi, store, badge) beserta tesnya. |
| `src/pages/`, `src/app/` | Halaman dan router. |
| `src/components/` | Komponen UI bersama. |
| `public/` | Logo, ikon PWA, manifest, service worker. |
| `docs/audit/` | Laporan audit keamanan dan aksesibilitas (Oktober 2026). |
| `docs/AUDIT.md` | Audit keamanan kunci, `.env`, dan Supabase/RLS. |
| `test/` | Setup global tes (zona waktu). |

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
