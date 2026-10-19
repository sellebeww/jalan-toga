# Cara membatalkan

Semua perubahan ada di branch `chore/audit-20261019`. Branch `main` masih berisi baseline `6045383`, yaitu keadaan proyek sebelum audit.

Kembali ke keadaan sebelum audit:
```bash
git checkout main
npm ci        # pasang ulang dependensi sesuai lockfile lama
```

Branch audit tetap tersimpan, jadi bisa dibuka lagi kapan saja dengan `git checkout chore/audit-20261019`.

Batalkan satu fase saja (jalankan di branch audit):

| Fase | Commit | Perintah |
|---|---|---|
| Keamanan: URL dan CSP | `8c51571` | `git revert 8c51571` |
| a11y awal (h1, overflow Template) | `37dff8f` | `git revert 37dff8f` |
| Pembersihan dan dependensi | `8d0663c` | `git revert 8d0663c`, lalu `npm install` |
| Aset WebP | `db397e5` | `git revert db397e5` |
| Aksesibilitas WCAG | `5b89118` | `git revert 5b89118` |
| Validasi impor dan README | `e4064de` | `git revert e4064de` |

Repo git dibuat oleh audit karena proyek sebelumnya belum memakai git. Kalau tidak ingin memakai git, folder `.git` di root proyek boleh dibuang; file proyek tidak terpengaruh.
