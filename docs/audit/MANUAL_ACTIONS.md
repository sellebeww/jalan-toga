# Tindakan manual

Hanya berisi hal yang tidak bisa dikerjakan agent. Tidak ada yang memblokir rilis; aplikasi sudah aman untuk dirilis apa adanya.

## 1. Pasang header keamanan di hosting (prioritas tinggi, ~10 menit)

**Kenapa:** `frame-ancestors` (anti-clickjacking), HSTS, dan `nosniff` hanya berlaku bila dikirim sebagai header HTTP, bukan lewat `<meta>`. Target deploy belum diketahui.

**Langkah:**
- Netlify: buat `public/_headers` berisi
  ```
  /*
    Strict-Transport-Security: max-age=31536000; includeSubDomains
    X-Content-Type-Options: nosniff
    Content-Security-Policy: frame-ancestors 'none'
    Referrer-Policy: strict-origin-when-cross-origin
    Permissions-Policy: camera=(), microphone=(), geolocation=()
  ```
- Vercel: tambahkan blok `"headers"` dengan nilai yang sama di `vercel.json`.
- GitHub Pages: header kustom tidak didukung; pakai Cloudflare di depannya atau pilih host lain.

**Laporkan balik:** nama host dan hasil `curl -sI https://alamat-situs | grep -iE "strict|frame|nosniff"`.

## 2. Putuskan konsolidasi palet komponen alat (prioritas sedang, ~5 menit keputusan)

**Kenapa:** 6 komponen di `src/components/tools/` memakai palet `stone-*` dan hex `#171A21` di luar token "Kertas & Tinta". Menyatukannya akan sedikit mengubah tampilan, jadi butuh persetujuanmu.

**Pilihan:** (a) satukan ke token `slate` dan `--surface-card` (disarankan; tampilan alat jadi hangat seperti halaman lain), atau (b) biarkan.

**Laporkan balik:** a atau b.

## 3. Uji aksesibilitas dengan teknologi asistif nyata (prioritas sedang, ~30 menit)

**Kenapa:** axe dan uji keyboard otomatis menangkap sebagian besar masalah, tapi tidak semuanya.

**Langkah:**
1. macOS: `Cmd+F5` untuk menyalakan VoiceOver, buka `npm run preview` di Safari.
2. Coba alur: Tab ke "Lewati ke konten", buka Cari (`Ctrl+K`), Glosarium (Belajar > Glosarium), Tambah referensi; pastikan judul dialog dibacakan dan Esc menutupnya.
3. Di ponsel, buka situs dan perbesar teks/zoom 200%; pastikan tidak ada yang terpotong.

**Laporkan balik:** bagian yang dibacakan aneh atau tidak bisa dijangkau.

## 4. Merge branch audit (~2 menit)

**Kenapa:** agent tidak melakukan merge atau push.

**Langkah:** tinjau `git log 6045383..chore/audit-20261019`, lalu `git checkout main && git merge chore/audit-20261019`. Repo ini belum punya remote; tambahkan sendiri bila ingin di-push.
