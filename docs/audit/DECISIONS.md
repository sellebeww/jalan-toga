# Keputusan

| # | Keputusan | Alasan | Alternatif yang ditolak |
|---|---|---|---|
| D1 | Membuat repo git lokal dan commit baseline `6045383` di branch `main`, lalu bekerja di `chore/audit-20261019` | Proyek belum memakai git; perlu titik pemulihan sesuai protokol | Arsip zip (lebih sulit ditinjau per fase) |
| D2 | CSP disisipkan lewat plugin Vite hanya saat build | Dev server butuh skrip inline React Refresh; hash dihitung otomatis supaya tidak perlu `'unsafe-inline'` untuk skrip | CSP statis di `index.html` (merusak dev); `'unsafe-inline'` (melemahkan CSP) |
| D3 | `style-src` tetap mengizinkan `'unsafe-inline'` | React memakai atribut `style` (lebar progres, dsb.) | Nonce (tidak praktis untuk situs statis) |
| D4 | Struktur folder dan nama file tidak diubah | Sudah konsisten; memindahkan file hanya menambah churn | Reorganisasi per fitur |
| D5 | ESLint/Prettier tidak dipasang; diganti `noUnusedLocals` dan `.editorconfig` | `typescript-eslint` butuh JS API TypeScript yang tidak ada di TS 7 native; format ulang massal mengganggu riwayat | Downgrade TypeScript; Biome (perlu persetujuan) |
| D6 | Palet `stone-*` dan `#171A21` di komponen alat tidak disatukan ke token | Mengubah tampilan, jadi masuk kategori perlu konfirmasi | Remap global `--color-stone-*` |
| D7 | Kontras diperbaiki lewat token `--text-muted` dan aturan `@layer utilities` dengan `:where()`, bukan dengan mengganti palet | Teks redup dipakai di 118+ tempat; palet juga dipakai untuk ikon dan border. `:where()` menjaga spesifisitas agar `hover:`/`dark:` tetap menang | Mengganti nilai `--color-slate-400/500` (menggeser warna ikon dan border di seluruh aplikasi); edit kelas satu per satu (ratusan perubahan) |
| D8 | Logo dikonversi dari PNG yang sudah ada, bukan menjalankan ulang pipeline penghapus latar | Hasil identik dan deterministik; skrip tetap diperbarui untuk proses berikutnya | Menjalankan `npm run brand` (berisiko mengubah ikon PWA) |
| D9 | `og-image` tetap PNG | Beberapa platform sosial tidak menampilkan pratinjau WebP | Konversi ke WebP |
| D10 | Skill desain: `design:accessibility-review` dan `design:design-system` | Dipilih atas permintaanmu ("pilih yang paling bagus"); keduanya audit tanpa redesign | `frontend-design` (arahan estetika, berisiko mengubah tampilan) |
| D11 | Skrip uji Playwright/axe tidak ditambahkan ke proyek | Menambah 2 dependensi dan butuh Chrome; jadi saran CI | Menambahkan folder `e2e/` |
