# Audit Keamanan: Jalan Toga

Cakupan: kunci Anthropic dan Supabase, file `.env`, riwayat git yang terlihat, serta RLS/migrasi Supabase. Arsitektur AI tidak didesain ulang; dokumen ini hanya melaporkan temuan. Tidak ada nilai rahasia yang dicantumkan.

Metode: `grep` pola kunci (`sk-ant-`, JWT `eyJ…`, `service_role`, `sb_secret_`, token umum) di working tree dan seluruh riwayat git (`git log --all -S/-G`), pemeriksaan file yang pernah ditambahkan ke riwayat, pembacaan `src/lib/auth.ts`, `src/lib/topicAI.ts`, `src/pages/RisetTopik.tsx`, `vite.config.ts`, dan `grep` pada hasil `npm run build` (`dist/`).

## Ringkasan

| # | Keparahan | Temuan |
|---|---|---|
| A1 | Sedang | Kunci API Anthropic milik pengguna dipakai langsung di browser (`dangerouslyAllowBrowser: true`) dan disimpan di `localStorage` |
| A2 | Sedang (fungsional) | CSP build hanya mengizinkan `connect-src` ke `self` dan `api.anthropic.com`; host Supabase tidak ada, sehingga login/sinkron kemungkinan diblokir di build produksi |
| A3 | Informasi | Tidak ada migrasi/SQL/RLS di repo; keamanan tabel `user_state` tidak bisa diverifikasi dari kode |
| A4 | Rendah | Tidak ada `.env` ter-commit, tapi `.gitignore` memakai `.env*` dengan pengecualian `.env.example` (sudah benar); satu-satunya string mirip kunci di riwayat adalah placeholder UI |
| A5 | Rendah | Header keamanan hosting (HSTS, `frame-ancestors`, dll.) tidak bisa dipasang dari `<meta>` (sudah tercatat di audit sebelumnya) |

## Rincian

### A1. Kunci Anthropic di sisi klien (Sedang)

- Tidak ada kunci Anthropic bawaan aplikasi: tidak ada variabel `VITE_*` untuk Anthropic. Kunci dimasukkan sendiri oleh pengguna di halaman Riset Topik (model "bawa kunci sendiri").
- `src/lib/topicAI.ts` membuat klien dengan `dangerouslyAllowBrowser: true` dan memanggil `api.anthropic.com` langsung dari browser. Kunci disimpan di `localStorage` (`jalan_toga_ai_key`), sengaja dipisah dari `AppState` sehingga tidak ikut ekspor cadangan maupun sinkron Supabase (diverifikasi: kunci hanya dibaca/ditulis di `RisetTopik.tsx`).
- Risiko: skrip apa pun yang berjalan di origin yang sama (XSS, ekstensi, dependensi tercemar) dapat membaca kunci. Mitigasi yang sudah ada: CSP `<meta>` dengan `script-src` berbasis hash, UI menjelaskan bahwa kunci hanya di perangkat.
- Saran: (1) pertahankan model BYOK hanya selama ada peringatan jelas (sudah ada); (2) bila nanti ada backend, pindahkan pemanggilan ke proxy server dan hapus `dangerouslyAllowBrowser`; (3) sarankan pengguna memakai kunci dengan batas pengeluaran rendah. Tidak diubah di PR ini karena di luar mode aman.

### A2. CSP dan Supabase (Sedang, fungsional)

- `vite.config.ts` menyisipkan `connect-src 'self' https://api.anthropic.com`. `@supabase/supabase-js` memanggil `https://<project>.supabase.co` lewat `fetch`/WebSocket, yang tidak termasuk daftar itu.
- Dampak: pada build produksi dengan `VITE_SUPABASE_URL` terisi, permintaan login dan `user_state` kemungkinan diblokir CSP. Ini belum saya buktikan di browser karena tidak ada proyek Supabase di lingkungan ini; ini temuan dari pembacaan konfigurasi.
- Saran: tambahkan host dari `VITE_SUPABASE_URL` (dan `wss://` bila Realtime dipakai) ke `connect-src` saat build, lalu uji login nyata. Tidak diubah di PR ini (perilaku build, perlu proyek Supabase untuk verifikasi).

### A3. Supabase: kunci, RLS, migrasi (Informasi)

- Klien memakai `VITE_SUPABASE_URL` dan `VITE_SUPABASE_PUBLISHABLE_KEY` (kunci publik/anon, aman di bundle bila RLS benar). Tidak ada kunci `service_role` atau `sb_secret_*` di working tree, riwayat, maupun `dist/`.
- Aplikasi memakai satu tabel `user_state (user_id, data, updated_at)` lewat `upsert` dan `select ... eq('user_id', ...)`.
- Repo tidak berisi `supabase/`, file `.sql`, atau dokumentasi RLS. Artinya tidak ada bukti dari repo bahwa RLS aktif. Bila RLS mati, siapa pun dengan kunci publik bisa membaca/menulis data semua pengguna.
- Saran: simpan migrasi di repo (`supabase/migrations/`) dengan `alter table user_state enable row level security;` dan kebijakan `select/insert/update` dengan `auth.uid() = user_id`, lalu periksa di dashboard Supabase (Advisors → Security). Saya tidak mengakses proyek Supabase mana pun.

### A4. Rahasia di repo dan riwayat (Rendah)

- Tidak ditemukan pola kunci Anthropic, JWT, `service_role`, `sb_secret_`, AWS, atau token GitHub di working tree maupun `dist/`.
- Tidak ada file `.env` yang pernah ditambahkan ke riwayat; hanya `.env.example` (nilai kosong).
- Pencarian `sk-ant` di riwayat hanya mengenai atribut `placeholder="sk-ant-…"` pada kolom isian (bukan kunci).
- Keterbatasan: yang diperiksa hanya riwayat yang ada di clone ini (satu remote, `main`). Branch/fork lain atau riwayat yang sudah ditulis ulang tidak terlihat.

### A5. Header hosting (Rendah)

Lihat bagian Deploy di README. Perlu dipasang di hosting.

## Yang tidak diperiksa

- Konfigurasi sebenarnya di dashboard Supabase (RLS, redirect URL, provider Google).
- Apakah kunci yang pernah dipakai pengguna sudah dirotasi.
- Kerentanan dependensi di luar yang dilaporkan `npm audit` (hasil: 0 kerentanan pada dependensi produksi).
