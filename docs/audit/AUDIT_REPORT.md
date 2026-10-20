# Laporan Audit: Jalan Toga

Tanggal: 19 Oktober 2026 · Branch: `chore/audit-20261019` · Baseline: commit `6045383`

## 1. Ringkasan eksekutif

Jalan Toga adalah SPA statis (Vite 8, React 19, Tailwind 4, TypeScript 7) tanpa backend; semua data pengguna ada di `localStorage`. Kondisi awal sudah sehat: type-check bersih, 31 tes lulus, build sukses, 0 kerentanan dependensi, tidak ada secret. Audit memperbaiki **3 temuan keamanan** (URL impor tak tervalidasi, CSP belum ada, data impor rusak membuat halaman crash), menurunkan ukuran `dist/` dari **3,8 MB ke 2,3 MB** (logo PNG 1,56 MB jadi WebP 208 KB), menghapus **5 file** (2 kode yatim, 3 PNG yang diganti WebP) dan 1 dependensi tak terpakai, serta membawa seluruh rute, tab, dan alat ke **0 pelanggaran axe WCAG 2.2 AA** (dari 33 di rute dasar dan 72+ di tab/alat), termasuk 3 dialog yang sebelumnya bocor fokus atau tidak bisa dipakai lewat keyboard.

## 2. File dan folder yang dihapus

| File | Alasan | Bukti tidak terpakai |
|---|---|---|
| `src/components/shell/shellConstants.ts` | Konstanta `TOPBAR_HEIGHT` tidak dipakai | Tidak terjangkau dari `src/main.tsx` maupun tes (penelusuran graf impor); `grep` nama file/ekspor di `src`, `index.html`, `vite.config.ts`: 0 hasil |
| `src/components/ui/GlossaryTooltip.tsx` | Komponen tidak dipakai | Sama seperti di atas |
| `public/logo.png`, `public/logo-dark.png`, `public/logo-mark.png` | Diganti versi WebP | Semua referensi (`Brand.tsx`, `sw.js`, skrip generator) diperbarui; `grep` nama lama: 0 hasil |

Semua dihapus dengan `git rm`, jadi bisa dipulihkan dari commit `6045383`.

## 3. Aset visual

| Lama | Baru / aksi | Ukuran | Dimensi |
|---|---|---|---|
| `logo.png` | `logo.webp` (q90) | 698.187 → 98.184 B (−86%) | 1155×597 → 864×447 (3× lebar tampil 288 px) |
| `logo-dark.png` | `logo-dark.webp` (q90) | 601.288 → 98.642 B (−84%) | 1155×597 → 864×447 |
| `logo-mark.png` | `logo-mark.webp` (q90) | 263.148 → 11.450 B (−96%) | 505×500 → 144×143 (3× tampil 48 px) |
| `og-image.png` | tetap PNG, kompresi palet | 283.080 → 73.585 B (−74%) | 1200×630 tetap; PSNR 50,2 dB |
| ikon PWA, favicon | tidak diubah | sudah sesuai ukuran | |

- Duplikat dicek dengan hash SHA-1: tidak ada.
- `logo-mark` dimuat di setiap halaman (sidebar dan top bar), jadi penghematan 250 KB ini berlaku di semua kunjungan pertama.
- Verifikasi visual [TERVERIFIKASI]: screenshot sebelum/sesudah di 1280 px terang dan 360 px gelap memberi PSNR 59 dB. Logo terang/gelap di landing page diperiksa manual: tajam, varian benar.
- `scripts/make-brand-assets.mjs` diperbarui agar `npm run brand` menghasilkan file yang sama. Sumber asli tetap ada di `scripts/logo-source.png`.
- `sw.js`: daftar cache shell diperbarui dan versi dinaikkan ke `jalan-toga-v2` agar cache lama terbuang.
- Font sudah optimal: woff2 Fontsource dengan subset `unicode-range` dan `font-display: swap`.

## 4. Struktur direktori

Tidak diubah. Struktur yang ada sudah jelas (`app/`, `components/{common,shell,tools,ui,views,…}`, `data/`, `lib/`, `pages/`, `types/`). Memindahkan file hanya menambah churn tanpa manfaat (lihat DECISIONS D4). Tambahan baru: `docs/audit/`, `.editorconfig`, `.env.example`.

## 5. Standar penamaan

Konvensi yang sudah berlaku tetap dipakai, dan memang sudah konsisten: komponen `PascalCase.tsx`, logika `camelCase.ts` di `lib/`, halaman `PascalCase` berbahasa Indonesia, aset `kebab-case`. Satu-satunya pengecualian adalah `components/common/ui.tsx` (kumpulan komponen kecil), dibiarkan karena diimpor di banyak tempat.

## 6. Kode, dependensi, dan duplikasi

- 32 pernyataan import tak terpakai dirapikan (28 file). `noUnusedLocals` diaktifkan di `tsconfig.json` agar tidak muncul lagi.
- Dependensi `motion` dihapus (tidak di-import di mana pun; `npm ls` menunjukkan bukan peer dependency).
- `vite`, `@vitejs/plugin-react`, `@tailwindcss/vite`, `@types/canvas-confetti` dipindah ke `devDependencies`. Versi terpasang tidak berubah; hanya batas bawah rentang di `package.json` yang naik ke versi yang memang sudah terpasang (`vite ^8.3.4`, `@vitejs/plugin-react ^6.1.2`).
- Duplikasi: logika fokus dialog (ada di `Modal`, salinan tidak lengkap di `SearchModal`, dan tidak ada sama sekali di `GlossaryModal`) disatukan menjadi hook `useDialogFocus` di `src/components/common/Modal.tsx`.
- Ditambah skrip `typecheck`, `engines.node >=22.12.0`, `.editorconfig`, `.env.example` (`SITE_URL`), dan entri `.gitignore` untuk file editor/sementara.
- Tidak ada `console.log`, `debugger`, `TODO`, atau `FIXME` yang tertinggal (dicek dengan `grep`).

## 7. Temuan keamanan

| # | Keparahan | Lokasi | Deskripsi | Status |
|---|---|---|---|---|
| S1 | Sedang | `src/pages/Referensi.tsx:299-300` | `href` referensi memakai `r.url` apa adanya. Form memvalidasi `http(s)://`, tapi file cadangan JSON yang diimpor melewati form. React 19 memblokir `javascript:`, namun skema lain tetap lolos. | **Diperbaiki**: tautan hanya dirender untuk `http(s)://`. [TERVERIFIKASI] di browser: referensi `javascript:alert(1)` tidak menghasilkan tautan. |
| S2 | Sedang | `index.html` / `vite.config.ts` | Tidak ada Content-Security-Policy, padahal ada `dangerouslySetInnerHTML` (sitasi). | **Diperbaiki**: CSP `<meta>` disisipkan saat build, skrip inline diizinkan lewat hash SHA-256 yang dihitung otomatis. [TERVERIFIKASI] 0 pelanggaran CSP di 22 rute × 4 lebar × 2 tema, dan injeksi skrip inline benar-benar diblokir. |
| S3 | Rendah | `src/lib/store.ts` `sanitizeState` | Array dari localStorage/file impor tidak divalidasi per elemen. Referensi dengan tipe field salah membuat halaman Referensi crash permanen sampai data dihapus. | **Diperbaiki**: `normalizeReference` membuang entri yang field wajibnya rusak; field opsional berupa angka dikonversi ke string, tipe lain dihapus per field (entri tetap disimpan). Tes baru di `lib.test.ts`. [TERVERIFIKASI] di browser: halaman tidak lagi menampilkan ErrorBoundary. |
| S4 | Rendah | hosting | `Strict-Transport-Security`, `frame-ancestors`, `X-Content-Type-Options` tidak bisa dipasang lewat `<meta>`. | **Perlu tindakan pengguna** (MANUAL_ACTIONS #1). Contoh header ada di README. |
| S5 | Info | `src/pages/Referensi.tsx:222,291,364` | `dangerouslySetInnerHTML` untuk sitasi. | Aman: `toHtml` meng-escape `& < >` di setiap segmen (`src/lib/citations.ts:13-14`). [TERVERIFIKASI] judul `<b>…</b>` tampil sebagai teks. |
| S6 | Info | `localStorage` | Nama, NIM, dan judul skripsi tersimpan di browser tanpa enkripsi. | Sesuai desain (tanpa server, tanpa login). Tidak ada data yang dikirim keluar. |
| S7 | Info | dependensi | `npm audit`: 0 kerentanan. Lockfile ter-commit, semua paket dari registry npm, tidak ada skrip `pre/post/install`. | OK |
| S8 | Info | repo | Pemindaian secret di semua file dan diff: 0 temuan. Belum ada riwayat git sebelum audit, jadi tidak ada riwayat yang perlu diperiksa. | OK |

Model ancaman lengkap: `THREAT_MODEL.md`.

## 8. UI/UX dan aksesibilitas

Skill yang dipakai: `design:accessibility-review` (audit) dan `design:design-system` (konsistensi token).

Metode: axe-core 4.10 (aturan WCAG 2.0/2.1/2.2 A+AA) lewat Chrome headless di 22 rute dan 38 varian tab/alat, masing-masing dalam 5 konteks (terang/gelap × 390/1280 px dengan profil, plus terang 1280 tanpa profil). Ditambah uji keyboard otomatis untuk ketiga dialog, pengukuran target sentuh, dan pengecekan overflow di 360/768/1280/1920 px.

| Temuan | WCAG | Keparahan | Perbaikan |
|---|---|---|---|
| Item istilah Glosarium dan 3 daftar di tab Profil berupa `<div onClick>`, tidak bisa dipakai lewat keyboard | 2.1.1 | Kritis | Diubah menjadi `<button>` (dengan `aria-pressed` di glosarium); tampilan tetap |
| `SearchModal` (Ctrl+K): Tab keluar dari dialog 31/40 kali, lalu Esc tidak berfungsi | 2.4.3, 2.1.2 | Mayor | Hook `useDialogFocus` |
| `GlossaryModal` tanpa `role="dialog"`, `aria-modal`, jebakan fokus, dan Esc; tombol tutup tanpa label | 4.1.2, 2.4.3 | Mayor | Hook, ARIA, `aria-label` |
| 20+ input di 6 alat tanpa label terhubung, `select` filter flashcard tanpa nama | 1.3.1, 4.1.2 | Kritis | `htmlFor`/`id`, `aria-label` |
| Kontras teks redup: slate-400 di latar terang (3,58:1), slate-500 di latar gelap (3,16:1), dan teks merek di tint (4,38:1) | 1.4.3 | Serius | Token `--text-muted` plus aturan di `@layer utilities` dengan `:where()` (spesifisitas setara utility, `hover:`/`dark:` tetap menang). Rasio baru 4,96–7:1 |
| Chip `dark:bg-slate-800` dengan teks slate-400 (4,19:1), tombol hapus `text-rose-600` di mode gelap (3,8:1), bar Likert teks putih 9 px (1,96–3,4:1), tombol teal (3,7:1), huruf glosarium aktif (2,13:1) | 1.4.3 | Serius | Kelas diganti ke varian yang lolos (≥4,5:1) |
| Huruf A–Z glosarium 18×20 px dan berdempetan | 2.5.8 | Minor | `min-h-6 min-w-6` |
| `<pre>` template dan tabel Isaac & Michael bisa di-scroll tapi tidak bisa difokus | 2.1.1 | Serius | `tabIndex={0}` plus label |
| `/belajar` punya 2 `h1` | 1.3.1 | Minor | `h1` di sub-view diubah ke `h2` (gaya heading global sama) |
| `/template` overflow horizontal 395 px di layar 360 px | 1.4.10 | Mayor | `grid-cols-1` (`minmax(0,1fr)`) |

Hasil akhir [TERVERIFIKASI]:
- axe: **0 pelanggaran** di semua 300 kombinasi halaman × konteks.
- Ketiga dialog: Tab tidak pernah keluar (0/60), Esc menutup dialog, fokus kembali ke pemicu.
- Skip link tampil sebagai elemen fokus pertama dan memindahkan fokus ke `<main>`.
- Overflow horizontal: 0 di 4 lebar layar, 2 tema, 22 rute.
- Konsol: 0 error. Satu-satunya peringatan berasal dari Playwright yang memblokir service worker, bukan dari aplikasi.
- Regresi visual: perubahan ≤1,9% piksel di halaman yang diuji (hanya warna teks redup).

Yang **tidak** diuji: screen reader sungguhan (VoiceOver/NVDA), perangkat fisik, dan zoom 200% di browser asli (didekati lewat lebar 360/768 px). Lihat MANUAL_ACTIONS #3.

Audit sistem desain (hanya dilaporkan, tidak diubah; lihat DECISIONS D6):

| Kategori | Kondisi |
|---|---|
| Token warna | Lengkap di `@theme` (`slate`/`indigo` di-remap ke palet "Kertas & Tinta", `ink`, `paper`) |
| Komponen | `btn`, `btn-primary`, `btn-soft`, `btn-ghost`, `card`, `chip`, `field` |
| Penyimpangan | 5 komponen alat warisan (PosterChecklist, ThesisAlignmentChecklist, ChartSelector, DeductiveInductiveSorter, IEEECitationBuilder) memakai `stone-*` (233 kelas); hex `dark:bg-[#171A21]` (8×, di 4 file) di luar token; sekitar 126 dari 217 `<button>` tidak memakai utility `btn-*` (perkiraan berdasarkan grep); 107 ukuran teks arbitrer `text-[10px]`/`[11px]` |

Performa: total JS 1,395 MB (tidak berubah). Chunk lazy terbesar adalah `Belajar` (342 kB) dan `comparisons` (311 kB); keduanya data konten yang dimuat saat dibutuhkan. Saran lanjutan ada di bagian 10.

## 9. Hasil verifikasi

| Pemeriksaan | Perintah | Baseline | Akhir |
|---|---|---|---|
| Install bersih | `npm ci` (clone baru) | n/a | sukses, 0 kerentanan |
| Type-check | `npm run lint` | 0 error | 0 error (dengan `noUnusedLocals`) |
| Tes | `npm test` | 31/31 | 32/32 |
| Build | `npm run build` | sukses, `dist` 3,8 MB | sukses, `dist` 2,3 MB |
| Bundle utama | build output | `index` 267,26 kB (gz 85,70) | 267,34 kB (gz 85,73) |
| Audit dependensi | `npm audit` | 0 | 0 |
| Runtime | Playwright + Chrome, 22 rute × 4 lebar × 2 tema | 2 overflow, 2 `h1` ganda | 0 overflow, 0 error konsol |
| Aksesibilitas | axe-core 4.10 | 33 (rute dasar), 72+ (tab/alat) | 0 |

Semua angka "Akhir" berasal dari clone bersih branch ini. Skrip pemeriksa (Playwright/axe) dijalankan dari scratchpad dan tidak ditambahkan ke proyek.

Tidak tersedia: ESLint/Prettier (tidak ada di proyek; `typescript-eslint` belum mendukung TS 7 native), dan pengujian e2e bawaan proyek.

### Verifikasi independen (red-team)

Sub-agent terpisah meninjau ulang semua klaim dan diff tanpa mengubah file. Ia mengonfirmasi ukuran aset (WebP bisa dibuat ulang byte-identik), angka bundle (dengan membangun baseline sendiri), daftar file terhapus, hash commit, keamanan CSP, dan cascade aturan kontras. Temuannya beserta tindak lanjut (commit `50a38e2`):

| Temuan red-team | Tindakan |
|---|---|
| `line-clamp` di 3 tempat (Glosarium, Profil) tidak berfungsi karena kelas `block` hasil konversi `div`→`span` menimpa `display` | Diperbaiki. [TERVERIFIKASI] tinggi teks kembali 2 baris |
| Satu Esc menutup dua dialog yang bertumpuk (mis. Ctrl+K di atas Glosarium) | Diperbaiki dengan stack dialog di `useDialogFocus`. [TERVERIFIKASI] Esc pertama hanya menutup dialog teratas, fokus tetap di dialog bawah |
| Referensi dengan field opsional bertipe salah dibuang seluruhnya tanpa pemberitahuan | Diubah menjadi normalisasi per field (lihat S3) |
| Aturan kontras bergantung pada variabel warna yang hanya dipancarkan Tailwind bila dipakai | Ditambah fallback hex |
| Klaim kenaikan versi, jumlah komponen/kelas `stone`, dan nomor baris S1/S5 kurang tepat | Laporan dikoreksi |
| Indentasi atribut di tombol baru `ProfileView` | Dirapikan |

Catatan tersisa dari red-team: selektor pengecualian `[class*='dark:text-']` juga cocok dengan kelas ukuran seperti `dark:text-xs`. Saat ini tidak ada elemen seperti itu; bila nanti muncul, warna teks redupnya di mode gelap tidak akan di-override.

## 10. Masalah tersisa dan keputusan manual

Sengaja tidak diubah:
1. **Konsolidasi palet alat** (`stone-*`, `#171A21`, tombol ad-hoc). Mengubah tampilan 5 komponen, jadi butuh persetujuan.
2. **ESLint/Prettier**: tunggu dukungan `typescript-eslint` untuk TS 7, atau pasang Biome. Format ulang massal juga mengganggu riwayat.
3. **`IEEECitationBuilder`**: kota penerbit selalu "Jakarta" karena belum ada inputnya (fitur kecil, bukan bug keamanan).
4. **`StudyView`**: prop `onNavigateToTools` dikirim `Belajar` tapi tidak pernah dipakai, dan tidak ada UI yang membutuhkannya. Bisa dihapus atau dijadikan tombol "Buka alat".
5. **`Roadmap`**: `h1` kedua ada di `PrintView` yang `display:none` di layar. Ini benar untuk versi cetak, jadi tidak diubah.

Rekomendasi berurutan:
1. Pasang header keamanan di hosting (MANUAL_ACTIONS #1).
2. Uji dengan screen reader dan perangkat nyata (MANUAL_ACTIONS #3).
3. Putuskan konsolidasi palet alat ke token (MANUAL_ACTIONS #2).
4. Tambahkan pemeriksaan axe + Playwright ke CI agar regresi aksesibilitas tertangkap otomatis.
5. Pertimbangkan memecah `comparisons.ts` per modul agar chunk `Belajar` lebih kecil.

## 11. Cara membatalkan

Lihat `ROLLBACK.md`. Ringkasnya: semua perubahan ada di branch `chore/audit-20261019` dengan satu commit per fase, di atas baseline `6045383`.
