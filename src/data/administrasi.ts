export interface AdminGroup {
  id: string;
  nama: string;
  ringkas: string;
  items: { id: string; text: string; catatan?: string }[];
}

/** Daftar umum. Nama dokumen, urutan, dan syarat BERBEDA tiap kampus; cocokkan dengan panduan akademikmu. */
export const adminGroups: AdminGroup[] = [
  {
    id: 'prasyarat',
    nama: 'Prasyarat & pengajuan judul',
    ringkas: 'Memastikan kamu boleh mengambil skripsi dan mengajukan judul.',
    items: [
      { id: 'a-1', text: 'Cek syarat SKS minimal dan mata kuliah prasyarat skripsi' },
      { id: 'a-2', text: 'Cek IPK minimal dan nilai mata kuliah metodologi penelitian' },
      { id: 'a-3', text: 'Registrasi/KRS mata kuliah skripsi pada semester berjalan' },
      { id: 'a-4', text: 'Ambil formulir pengajuan judul dan syarat pendukungnya' },
      { id: 'a-5', text: 'Ajukan judul dan (bila ada) hadiri sidang/seleksi judul' },
      { id: 'a-6', text: 'Terima SK atau surat penetapan dosen pembimbing' },
      { id: 'a-7', text: 'Ambil buku pedoman penulisan skripsi dan jadwal akademik terbaru' }
    ]
  },
  {
    id: 'bimbingan',
    nama: 'Bimbingan & kartu kendali',
    ringkas: 'Dokumen bukti proses bimbingan yang sering diminta saat mendaftar seminar atau sidang.',
    items: [
      { id: 'b-1', text: 'Siapkan kartu/buku bimbingan atau akun sistem bimbingan daring' },
      { id: 'b-2', text: 'Minta tanda tangan atau persetujuan dosen pada setiap sesi bimbingan' },
      { id: 'b-3', text: 'Cek jumlah minimal pertemuan bimbingan yang disyaratkan', catatan: 'Angkanya beragam; periksa panduan.' },
      { id: 'b-4', text: 'Dapatkan persetujuan (ACC) tertulis untuk maju seminar proposal' }
    ]
  },
  {
    id: 'sempro',
    nama: 'Seminar proposal',
    ringkas: 'Berkas dan langkah untuk mendaftar dan menyelesaikan seminar proposal.',
    items: [
      { id: 's-1', text: 'Naskah proposal sesuai format dan disetujui pembimbing' },
      { id: 's-2', text: 'Formulir pendaftaran sempro dan persetujuan pembimbing' },
      { id: 's-3', text: 'Bukti pembayaran/administrasi (bila ada)' },
      { id: 's-4', text: 'Hasil cek kemiripan (plagiarisme) sesuai batas kampus' },
      { id: 's-5', text: 'Cetak/kirim naskah ke penguji sesuai waktu yang ditentukan' },
      { id: 's-6', text: 'Hadiri sempro, catat revisi, dan dapatkan berita acara' },
      { id: 's-7', text: 'Selesaikan revisi dan minta tanda tangan persetujuan revisi' }
    ]
  },
  {
    id: 'penelitian',
    nama: 'Izin & pelaksanaan penelitian',
    ringkas: 'Dokumen agar penelitianmu sah dan lancar di lapangan.',
    items: [
      { id: 'p-1', text: 'Surat pengantar penelitian dari fakultas/prodi' },
      { id: 'p-2', text: 'Surat izin dari instansi/sekolah/lokasi penelitian' },
      { id: 'p-3', text: 'Kelayakan etik (jika melibatkan manusia/hewan)', catatan: 'Wajib di banyak bidang kesehatan.' },
      { id: 'p-4', text: 'Surat keterangan telah melakukan penelitian dari lokasi' },
      { id: 'p-5', text: 'Dokumentasi kegiatan (foto, daftar hadir, rekaman izin)' }
    ]
  },
  {
    id: 'sidang',
    nama: 'Pendaftaran sidang akhir',
    ringkas: 'Kelengkapan yang biasa diminta sebelum sidang skripsi.',
    items: [
      { id: 'd-1', text: 'Naskah final disetujui (ACC) semua pembimbing' },
      { id: 'd-2', text: 'Hasil cek plagiarisme final' },
      { id: 'd-3', text: 'Formulir pendaftaran sidang dan bukti administrasi' },
      { id: 'd-4', text: 'Fotokopi/riwayat nilai, KRS, dan bukti SKS terpenuhi' },
      { id: 'd-5', text: 'Sertifikat/syarat tambahan (bahasa asing, seminar, ibadah, dsb.) jika ada' },
      { id: 'd-6', text: 'Jadwal sidang, ruang, dan penguji sudah terkonfirmasi' },
      { id: 'd-7', text: 'Cetak naskah sesuai jumlah penguji dan hadir sesuai jadwal' }
    ]
  },
  {
    id: 'revisi-yudisium',
    nama: 'Revisi, jilid & yudisium',
    ringkas: 'Setelah sidang: revisi, pengumpulan, dan dokumen kelulusan.',
    items: [
      { id: 'y-1', text: 'Tabel revisi dan tanda tangan persetujuan semua penguji' },
      { id: 'y-2', text: 'Lembar pengesahan final bertanda tangan' },
      { id: 'y-3', text: 'Cetak dan jilid naskah (jumlah dan warna sampul sesuai aturan)' },
      { id: 'y-4', text: 'Unggah naskah ke repositori kampus (jika wajib) dan surat persetujuan publikasi' },
      { id: 'y-5', text: 'Serahkan naskah ke perpustakaan dan dapatkan surat bebas pustaka' },
      { id: 'y-6', text: 'Bebas tanggungan keuangan/laboratorium/unit lain' },
      { id: 'y-7', text: 'Ikuti proses yudisium dan ambil surat keterangan lulus' }
    ]
  },
  {
    id: 'wisuda',
    nama: 'Wisuda',
    ringkas: 'Persiapan akhir menuju hari wisuda.',
    items: [
      { id: 'w-1', text: 'Daftar wisuda dan unggah dokumen yang diminta' },
      { id: 'w-2', text: 'Foto formal untuk ijazah/buku wisuda' },
      { id: 'w-3', text: 'Cek data nama, tempat/tanggal lahir, dan NIM untuk ijazah' },
      { id: 'w-4', text: 'Pesan/ukur toga dan perlengkapan' },
      { id: 'w-5', text: 'Ambil transkrip, ijazah, dan SKPI sesuai jadwal kampus' },
      { id: 'w-6', text: 'Simpan salinan digital semua dokumen penting' }
    ]
  }
];

export const allAdminItems = adminGroups.flatMap((g) => g.items);
