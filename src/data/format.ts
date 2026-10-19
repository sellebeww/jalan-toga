export interface FormatRow {
  aspek: string;
  umum: string;
  catatan?: string;
}

export interface FormatGroup {
  id: string;
  nama: string;
  baris: FormatRow[];
}

/** Nilai di bawah adalah praktik UMUM di banyak kampus Indonesia, bukan aturan resmi. Ikuti buku pedoman fakultasmu. */
export const formatGroups: FormatGroup[] = [
  {
    id: 'halaman',
    nama: 'Halaman & tipografi',
    baris: [
      { aspek: 'Ukuran kertas', umum: 'A4 (21 × 29,7 cm)', catatan: 'Beberapa kampus memakai HVS 80 gram.' },
      { aspek: 'Margin', umum: 'Kiri 4 cm; atas, kanan, bawah 3 cm', catatan: 'Margin kiri lebih lebar untuk ruang jilid. Sebagian kampus memakai 4-3-3-3 atau 3-3-3-3.' },
      { aspek: 'Jenis huruf', umum: 'Times New Roman 12 pt', catatan: 'Ada yang memakai Arial/Calibri; ikuti panduan.' },
      { aspek: 'Spasi isi', umum: '1,5 (atau ganda/2)', catatan: 'Kutipan panjang, tabel, daftar pustaka, dan catatan kaki biasanya spasi 1.' },
      { aspek: 'Perataan', umum: 'Rata kiri-kanan (justify)', catatan: 'Judul bab biasanya rata tengah.' },
      { aspek: 'Paragraf', umum: 'Awal paragraf menjorok sekitar 1 cm (atau 1,27 cm)', catatan: 'Atau tanpa indentasi dengan jarak antarparagraf.' }
    ]
  },
  {
    id: 'penomoran',
    nama: 'Penomoran & susunan',
    baris: [
      { aspek: 'Bagian awal', umum: 'Angka Romawi kecil (i, ii, iii...)', catatan: 'Halaman judul biasanya dihitung tetapi tidak dicetak nomornya.' },
      { aspek: 'Isi (Bab 1–5)', umum: 'Angka Arab (1, 2, 3...)', catatan: 'Halaman awal bab sering di tengah bawah; halaman lain di kanan atas.' },
      { aspek: 'Judul bab', umum: 'Huruf kapital, tebal, rata tengah (BAB I PENDAHULUAN)' },
      { aspek: 'Subbab', umum: 'Penomoran bertingkat (1.1, 1.1.1), huruf awal kapital, tebal' },
      { aspek: 'Urutan', umum: 'Judul → pengesahan → pernyataan keaslian → abstrak → kata pengantar → daftar isi/tabel/gambar → bab → daftar pustaka → lampiran' }
    ]
  },
  {
    id: 'tabel-gambar',
    nama: 'Tabel, gambar & persamaan',
    baris: [
      { aspek: 'Judul tabel', umum: 'Di atas tabel, bernomor per bab (Tabel 4.1)', catatan: 'Tabel gaya terbuka: garis horizontal saja.' },
      { aspek: 'Judul gambar', umum: 'Di bawah gambar (Gambar 4.1)', catatan: 'Beri sumber di bawahnya bila dari pihak lain.' },
      { aspek: 'Rujukan dalam teks', umum: 'Selalu disebut dalam teks sebelum ditampilkan', catatan: 'Contoh: "Hasil ditunjukkan pada Tabel 4.1".' },
      { aspek: 'Persamaan', umum: 'Rata tengah, nomor di kanan dalam kurung (1)' },
      { aspek: 'Resolusi gambar', umum: 'Minimal 300 dpi untuk cetak, teks dalam gambar terbaca', catatan: 'Hindari tangkapan layar buram.' }
    ]
  },
  {
    id: 'kutipan',
    nama: 'Kutipan & daftar pustaka',
    baris: [
      { aspek: 'Kutipan langsung pendek', umum: 'Kurang dari 40 kata: dalam tanda petik di paragraf', catatan: 'Sertakan nama, tahun, dan halaman (Penulis, 2020, hlm. 12).' },
      { aspek: 'Kutipan langsung panjang', umum: '40 kata atau lebih: blok terpisah menjorok, tanpa tanda petik, spasi 1' },
      { aspek: 'Kutipan tidak langsung', umum: 'Parafrase dengan kata sendiri + sitasi (Penulis, tahun)' },
      { aspek: 'Gaya sitasi', umum: 'Satu gaya konsisten: APA 7 (nama-tahun), IEEE (angka), Vancouver (angka), atau Harvard' },
      { aspek: 'Daftar pustaka', umum: 'APA/Harvard: urut abjad; IEEE/Vancouver: urut kemunculan', catatan: 'Format hanging indent untuk APA/Harvard.' }
    ]
  },
  {
    id: 'bahasa',
    nama: 'Bahasa & penulisan',
    baris: [
      { aspek: 'Ejaan', umum: 'Ejaan Bahasa Indonesia (EBI/PUEBI) dan KBBI', catatan: 'Gunakan kamus resmi daring KBBI untuk memeriksa ejaan.' },
      { aspek: 'Kalimat', umum: 'Efektif, baku, satu gagasan per kalimat', catatan: 'Hindari "saya/kami"; gunakan "penulis"/"peneliti" bila perlu.' },
      { aspek: 'Istilah asing', umum: 'Dicetak miring pada penyebutan pertama (mis. research gap)', catatan: 'Gunakan padanan Indonesia bila ada.' },
      { aspek: 'Angka', umum: 'Angka 1–10 dituliskan dengan huruf di awal kalimat; selebihnya angka', catatan: 'Tidak mulai kalimat dengan angka.' },
      { aspek: 'Singkatan', umum: 'Tulis lengkap pada penyebutan pertama diikuti singkatan dalam kurung' },
      { aspek: 'Awalan "di-"', umum: 'Ditulis serangkai dengan kata kerja (dibaca), terpisah dengan tempat (di rumah)' }
    ]
  }
];

export const commonFormatMistakes: string[] = [
  'Daftar isi, tabel, dan gambar diketik manual sehingga nomor halaman tidak sinkron. Gunakan fitur Heading/Caption di Word.',
  'Ukuran huruf atau spasi berubah-ubah karena menyalin dari sumber lain. Paste dengan "Keep text only".',
  'Tabel terpotong halaman tanpa mengulang judul kolom.',
  'Gambar buram atau teks dalam gambar terlalu kecil.',
  'Sitasi di teks memakai gaya berbeda dengan daftar pustaka.',
  'Kata asing tidak dimiringkan, dan singkatan tidak dijelaskan.',
  'Nomor halaman tidak mengikuti aturan (Romawi untuk bagian awal, Arab untuk isi).'
];

export const wordTips: { judul: string; isi: string }[] = [
  { judul: 'Gunakan Styles', isi: 'Atur Heading 1 (judul bab), Heading 2 (subbab), dan Normal sekali di awal. Daftar isi otomatis akan ikut.' },
  { judul: 'Section break untuk penomoran', isi: 'Sisipkan section break di antara bagian awal dan isi, lalu putus tautan "Link to Previous" agar penomoran Romawi dan Arab terpisah.' },
  { judul: 'Caption otomatis', isi: 'Insert → Caption untuk tabel/gambar agar daftar tabel/gambar bisa dibuat otomatis.' },
  { judul: 'Pengelola referensi', isi: 'Zotero/Mendeley mengisi sitasi dan daftar pustaka otomatis dan mudah berganti gaya.' },
  { judul: 'Simpan versi', isi: 'Simpan berkas dengan nama bertanggal (skripsi_v12_2025-03-02) dan cadangkan di awan.' }
];
