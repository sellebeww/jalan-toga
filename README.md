# Jalan Toga

**Dari bingung, sampai wisuda.** Website pendamping skripsi untuk mahasiswa Indonesia dari semua jurusan: roadmap personal, panduan tiap bab, pemilih metodologi, toolkit statistik, manajer referensi, log bimbingan, simulasi sidang, dan dukungan mental. Gratis, tanpa login, bisa dipasang (PWA) dan dibuka offline.

## Menjalankan

Prasyarat: Node.js 20+

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # hasil build di dist/
npm test         # tes unit (vitest)
npm run lint     # type-check
```

Tidak ada API key atau variabel lingkungan wajib. Semua data pengguna tersimpan di browser (localStorage) dan bisa diekspor/impor JSON dari menu Pengaturan.

Untuk membuat `sitemap.xml` dan `robots.txt` saat build, isi alamat situs:

```bash
SITE_URL=https://alamat-situsmu.id npm run build
```

## Struktur

- `src/data/` konten (jurusan, roadmap, bab, metodologi, statistik, sidang, FAQ, template, dst). Edit di sini untuk mengubah isi tanpa menyentuh komponen.
- `src/lib/` logika murni (roadmap, sitasi, sampel, store, badge) dan tesnya.
- `src/pages/` satu berkas per halaman (dimuat lazy). `src/app/` router dan tabel rute.
- `src/components/` UI bersama, shell (sidebar, bottom-nav), dan materi Metodologi Riset.
- `public/` logo, ikon PWA, manifest, service worker.
- `scripts/make-brand-assets.mjs` membuat logo tanpa latar dan ikon dari `scripts/logo-source.png` (`npm run brand`).

Konten yang bergantung aturan kampus (format, jumlah halaman, syarat sidang) ditandai di aplikasi agar dicocokkan dengan buku pedoman fakultas.
