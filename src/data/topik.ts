export interface FeasibilityQuestion {
  id: string;
  aspek: string;
  tanya: string;
  opsi: [string, string, string];
  saranKurang: string;
}

/** Skor opsi: indeks 0 = kuat (2 poin), 1 = sedang (1), 2 = lemah (0). */
export const feasibilityQuestions: FeasibilityQuestion[] = [
  {
    id: 'data',
    aspek: 'Data',
    tanya: 'Apakah data, responden, atau lokasi penelitianmu pasti bisa diakses?',
    opsi: ['Ya, sudah ada izin/komitmen atau datanya publik', 'Kemungkinan bisa, tetapi belum pasti', 'Belum tahu atau kelihatannya sulit'],
    saranKurang: 'Cari bukti akses sebelum menulis: tanyakan langsung ke instansi, cek ketersediaan dataset, atau siapkan topik cadangan dengan data yang lebih pasti.'
  },
  {
    id: 'waktu',
    aspek: 'Waktu',
    tanya: 'Seberapa cukup waktu yang kamu punya untuk topik ini?',
    opsi: ['Cukup longgar, bahkan ada cadangan 1–2 bulan', 'Pas-pasan, tidak boleh ada hambatan', 'Kelihatannya kurang'],
    saranKurang: 'Persempit ruang lingkup: kurangi variabel, lokasi, atau jumlah sampel. Penelitian yang kecil dan tuntas lebih baik daripada yang besar dan tidak selesai.'
  },
  {
    id: 'biaya',
    aspek: 'Biaya',
    tanya: 'Apakah biaya yang dibutuhkan (cetak, transport, bahan, uji lab, perangkat) terjangkau?',
    opsi: ['Ya, hampir tanpa biaya atau sudah teranggarkan', 'Perlu biaya sedang yang masih bisa kuusahakan', 'Mahal dan belum ada sumbernya'],
    saranKurang: 'Cari alternatif murah: data sekunder, fasilitas kampus/lab bersama, sampel lebih kecil, atau skema bantuan penelitian mahasiswa.'
  },
  {
    id: 'dosen',
    aspek: 'Dosen',
    tanya: 'Apakah ada dosen yang menguasai topik ini dan mau membimbing?',
    opsi: ['Ya, sudah ada calon yang sesuai bidangnya', 'Ada, tetapi belum kutanyakan', 'Belum ada yang cocok'],
    saranKurang: 'Telusuri bidang keahlian dosen (profil, Google Scholar, Sinta) dan temui satu per satu dengan ringkasan 1 halaman. Topik yang sejalan dengan riset dosen biasanya lebih lancar.'
  },
  {
    id: 'kompetensi',
    aspek: 'Kemampuan & alat',
    tanya: 'Apakah kamu menguasai atau bisa mempelajari metode dan alat yang dibutuhkan?',
    opsi: ['Ya, sudah biasa atau ada waktu belajar', 'Perlu belajar banyak tetapi masih mungkin', 'Terlalu jauh di luar kemampuanku saat ini'],
    saranKurang: 'Pilih metode yang lebih sederhana atau cari kolaborator/mentor. Jangan memilih teknik yang hanya kamu dengar sekilas.'
  },
  {
    id: 'kebaruan',
    aspek: 'Kebaruan',
    tanya: 'Apakah ada celah penelitian yang jelas dibanding penelitian sebelumnya?',
    opsi: ['Ya, aku bisa menyebutkan perbedaannya dengan 3 jurnal', 'Mirip dengan penelitian lain, tetapi objek/konteksnya baru', 'Belum kucari penelitian sebelumnya'],
    saranKurang: 'Baca 5 jurnal terbaru topikmu, lalu catat apa yang belum dilakukan: objek berbeda, variabel tambahan, metode lain, atau periode terbaru.'
  },
  {
    id: 'fokus',
    aspek: 'Ketajaman masalah',
    tanya: 'Apakah masalahnya spesifik dan ada bukti nyata bahwa ia terjadi?',
    opsi: ['Ya, ada data awal dan rumusan yang tajam', 'Masalahnya ada tetapi masih melebar', 'Masih umum atau sekadar topik'],
    saranKurang: 'Ubah "topik" menjadi "masalah": siapa terdampak, seberapa parah, di mana, kapan. Gunakan rumus judul untuk mengerucutkan.'
  },
  {
    id: 'etika',
    aspek: 'Etika & izin',
    tanya: 'Apakah penelitian ini melibatkan data sensitif, anak, pasien, atau izin berlapis?',
    opsi: ['Tidak atau izinnya sederhana', 'Ya, tetapi aku tahu prosedurnya', 'Ya dan aku belum tahu prosedurnya'],
    saranKurang: 'Cari tahu syarat etik dan izin dari awal (komisi etik, sekolah, instansi). Prosedur ini sering menjadi jalur terlama.'
  }
];

export function feasibilityVerdict(total: number, max: number) {
  const ratio = total / max;
  if (ratio >= 0.8) return { tone: 'good' as const, label: 'Layak, lanjutkan', desc: 'Topikmu terlihat realistis. Segera konsultasikan ke calon pembimbing.' };
  if (ratio >= 0.55) return { tone: 'warn' as const, label: 'Layak dengan perbaikan', desc: 'Ada beberapa titik lemah. Perbaiki dulu sebelum mengajukan judul.' };
  return { tone: 'bad' as const, label: 'Perlu dirombak', desc: 'Risiko tinggi molor atau macet. Pertimbangkan mempersempit atau ganti topik.' };
}

export interface TitlePair {
  buruk: string;
  alasanBuruk: string;
  bagus: string;
  alasanBagus: string;
}

export const titlePairs: TitlePair[] = [
  {
    buruk: 'Pengaruh Media Sosial',
    alasanBuruk: 'Tidak ada variabel terikat, objek, maupun konteks. Pembaca tidak tahu apa yang diukur dan pada siapa.',
    bagus: 'Pengaruh Intensitas Penggunaan Instagram terhadap Citra Merek Produk Lokal pada Konsumen Muda di Kota Malang',
    alasanBagus: 'Ada variabel X dan Y yang terukur, objek (konsumen muda), dan lokasi.'
  },
  {
    buruk: 'Analisis Sistem Informasi yang Baik dan Optimal untuk Semua Perusahaan',
    alasanBuruk: '"Baik", "optimal", dan "semua perusahaan" tidak terukur dan terlalu luas.',
    bagus: 'Analisis Kepuasan Pengguna Sistem Informasi Akuntansi pada UMKM Retail Menggunakan Model End-User Computing Satisfaction',
    alasanBagus: 'Fokus jelas (kepuasan pengguna), objek spesifik (UMKM retail), dan model ukur disebut.'
  },
  {
    buruk: 'Masalah Belajar Siswa dan Cara Mengatasinya serta Peran Guru dan Orang Tua',
    alasanBuruk: 'Memuat terlalu banyak fokus sekaligus dan tidak ada lokasi atau jenjang.',
    bagus: 'Peningkatan Motivasi Belajar Siswa Kelas VIII melalui Model Pembelajaran Berbasis Proyek: Penelitian Tindakan Kelas',
    alasanBagus: 'Satu fokus (motivasi), subjek jelas (kelas VIII), tindakan dan jenis penelitian disebut.'
  },
  {
    buruk: 'Studi tentang Kesehatan Ibu Hamil',
    alasanBuruk: '"Studi tentang" membuat judul mengambang; tidak jelas aspek kesehatan apa dan di mana.',
    bagus: 'Hubungan Tingkat Pengetahuan Gizi dengan Kejadian Anemia pada Ibu Hamil Trimester III di Wilayah Kerja Puskesmas X',
    alasanBagus: 'Variabel terukur, populasi dan lokasi spesifik.'
  },
  {
    buruk: 'Perancangan Aplikasi Android',
    alasanBuruk: 'Hanya produk, tidak ada masalah, pengguna, atau tujuan penelitian.',
    bagus: 'Perancangan Aplikasi Pencatatan Stok Barang Berbasis Android untuk UMKM Toko Kelontong dengan Metode Prototyping',
    alasanBagus: 'Masalah (pencatatan stok), pengguna (UMKM), dan metode pengembangan jelas.'
  },
  {
    buruk: 'Tinjauan Hukum Kejahatan Siber',
    alasanBuruk: 'Terlalu luas: kejahatan siber mencakup banyak jenis dan peraturan.',
    bagus: 'Analisis Yuridis Pertanggungjawaban Pidana Pelaku Penipuan Jual Beli Daring Berdasarkan UU ITE: Studi Putusan Pengadilan Negeri',
    alasanBagus: 'Isu hukum spesifik, dasar hukum, dan pendekatan kasus disebut.'
  },
  {
    buruk: 'Strategi Komunikasi yang Efektif',
    alasanBuruk: 'Tidak jelas komunikasi siapa kepada siapa dan di mana; "efektif" tidak terukur.',
    bagus: 'Strategi Komunikasi Humas Pemerintah Kota dalam Sosialisasi Program Pemilahan Sampah melalui Media Sosial',
    alasanBagus: 'Subjek komunikator, program, dan saluran spesifik.'
  },
  {
    buruk: 'Pengaruh Pupuk terhadap Tanaman',
    alasanBuruk: 'Jenis pupuk, tanaman, parameter, dan dosis tidak disebut.',
    bagus: 'Pengaruh Dosis Pupuk Organik Cair Daun Kelor terhadap Pertumbuhan dan Hasil Tanaman Kangkung (Ipomoea reptans)',
    alasanBagus: 'Perlakuan, objek, dan parameter respons spesifik.'
  }
];

export interface TitleCheckItem {
  id: string;
  text: string;
}

/** Checklist manual 8 butir yang dicentang sendiri; melengkapi pemeriksa otomatis. */
export const titleManualChecks: TitleCheckItem[] = [
  { id: 'tc-1', text: 'Aku bisa menyebut variabel/fokus utama judul dalam satu kalimat.' },
  { id: 'tc-2', text: 'Objek, subjek, atau lokasi penelitian tertulis atau tersirat jelas.' },
  { id: 'tc-3', text: 'Dari judul orang bisa menebak jenis penelitiannya (pengaruh, pengembangan, studi kasus).' },
  { id: 'tc-4', text: 'Tidak ada kata yang tidak bisa diukur ("optimal", "terbaik", "efektif" tanpa indikator).' },
  { id: 'tc-5', text: 'Judul, rumusan masalah, tujuan, dan metode saling selaras.' },
  { id: 'tc-6', text: 'Aku sudah menemukan minimal 5 jurnal yang dekat dengan judul ini.' },
  { id: 'tc-7', text: 'Data atau responden untuk judul ini bisa kuakses.' },
  { id: 'tc-8', text: 'Pembimbing atau dosen jurusan setuju lingkup judul ini masuk akal.' }
];
