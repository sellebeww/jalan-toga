export interface JournalSource {
  id: string;
  nama: string;
  url: string;
  untuk: string;
  fungsi: string;
  tips: string;
}

export const journalSources: JournalSource[] = [
  {
    id: 'scholar',
    nama: 'Google Scholar',
    url: 'https://scholar.google.com',
    untuk: 'Semua bidang',
    fungsi: 'Mesin pencari akademik terluas: artikel, buku, tesis, dan paten. Menampilkan jumlah sitasi dan tautan "Cited by" serta "Related articles".',
    tips: 'Pakai tanda kutip untuk frasa pasti, filter tahun di menu kiri, dan klik tanda kutip (") untuk salin sitasi. Gunakan "Cited by" untuk menemukan penelitian yang lebih baru.'
  },
  {
    id: 'garuda',
    nama: 'Garuda (Garba Rujukan Digital)',
    url: 'https://garuda.kemdikbud.go.id',
    untuk: 'Penelitian Indonesia, semua bidang',
    fungsi: 'Portal artikel jurnal ilmiah Indonesia yang diindeks Kemdikbudristek, memudahkan menemukan penelitian dengan konteks lokal.',
    tips: 'Cocok untuk kata kunci berbahasa Indonesia dan objek lokal. Cek ketersediaan teks lengkap pada tautan jurnalnya.'
  },
  {
    id: 'sinta',
    nama: 'SINTA (Science and Technology Index)',
    url: 'https://sinta.kemdikbud.go.id',
    untuk: 'Mengecek akreditasi jurnal & rekam jejak peneliti Indonesia',
    fungsi: 'Basis data pemeringkatan jurnal (Sinta 1–6) dan peneliti Indonesia. Dipakai untuk menilai kualitas jurnal, bukan untuk membaca artikel.',
    tips: 'Sinta 1–2 umumnya paling bergengsi; Sinta 3–4 tetap kredibel untuk skripsi. Cari nama jurnal di menu Journals untuk melihat peringkatnya.'
  },
  {
    id: 'scopus',
    nama: 'Scopus',
    url: 'https://www.scopus.com',
    untuk: 'Jurnal internasional bereputasi',
    fungsi: 'Basis data sitasi dan abstrak terbesar; jurnal terindeks diberi kuartil Q1–Q4. Umumnya diakses lewat langganan kampus.',
    tips: 'Tanyakan ke perpustakaan kampus apakah ada akses. Untuk mengecek apakah sebuah jurnal terindeks, pakai Scimago Journal Rank (scimagojr.com) yang gratis.'
  },
  {
    id: 'doaj',
    nama: 'DOAJ (Directory of Open Access Journals)',
    url: 'https://doaj.org',
    untuk: 'Jurnal akses terbuka yang terkurasi',
    fungsi: 'Daftar jurnal open access yang lolos seleksi kualitas. Berguna mencari artikel gratis dan memeriksa jurnal tidak dikenal.',
    tips: 'Jurnal yang tercantum di DOAJ cenderung lebih tepercaya. Cari artikel langsung di menu Articles.'
  },
  {
    id: 'semantic',
    nama: 'Semantic Scholar',
    url: 'https://www.semanticscholar.org',
    untuk: 'Ilmu komputer, biomedis, dan umum',
    fungsi: 'Pencarian literatur dengan ringkasan singkat (TLDR), daftar sitasi, dan artikel terkait.',
    tips: 'Gunakan "Highly influential citations" dan fitur "Cited by" untuk menelusuri perkembangan topik.'
  },
  {
    id: 'pubmed',
    nama: 'PubMed',
    url: 'https://pubmed.ncbi.nlm.nih.gov',
    untuk: 'Kesehatan, kedokteran, farmasi, gizi',
    fungsi: 'Basis data literatur biomedis dari NIH/NLM dengan filter jenis studi dan akses teks lengkap bila tersedia.',
    tips: 'Gunakan MeSH terms dan filter "Free full text". Cocok untuk telaah klinis dan systematic review.'
  },
  {
    id: 'eric',
    nama: 'ERIC',
    url: 'https://eric.ed.gov',
    untuk: 'Pendidikan',
    fungsi: 'Basis data penelitian dan praktik pendidikan, banyak dokumen akses terbuka.',
    tips: 'Gunakan filter "Peer reviewed only" dan tahun terbit.'
  },
  {
    id: 'arxiv',
    nama: 'arXiv',
    url: 'https://arxiv.org',
    untuk: 'Informatika, matematika, fisika, statistika',
    fungsi: 'Arsip preprint (belum tentu telah ditelaah sejawat) yang menampilkan riset terbaru lebih cepat dari jurnal.',
    tips: 'Periksa apakah preprint sudah terbit di jurnal; sitasi versi terbitnya bila ada.'
  },
  {
    id: 'ssrn',
    nama: 'SSRN / RePEc',
    url: 'https://www.ssrn.com',
    untuk: 'Ekonomi, bisnis, hukum, ilmu sosial',
    fungsi: 'Repositori working paper dan artikel ilmu sosial. RePEc menyediakan indeks literatur ekonomi.',
    tips: 'Gunakan untuk menemukan studi terbaru sebelum terbit di jurnal.'
  },
  {
    id: 'repo',
    nama: 'Repositori & perpustakaan kampus',
    url: '',
    untuk: 'Skripsi terdahulu & akses berlangganan',
    fungsi: 'Tempat membaca skripsi kakak tingkat dan mengakses jurnal berlangganan lewat jaringan atau akun kampus.',
    tips: 'Tanyakan layanan akses jarak jauh (VPN/proxy) perpustakaan. Skripsi terdahulu berguna untuk contoh struktur, bukan sebagai sumber utama.'
  }
];

export const searchTips: { judul: string; isi: string; contoh?: string }[] = [
  { judul: 'Pecah topik jadi kata kunci', isi: 'Ambil 2–4 konsep inti dari judulmu dan buat sinonim serta padanan Inggrisnya.', contoh: 'kepuasan pelanggan → "customer satisfaction", "consumer satisfaction"' },
  { judul: 'Gabungkan dengan AND/OR', isi: 'AND mempersempit, OR memperluas (sinonim), NOT/tanda minus menyingkirkan.', contoh: '("customer satisfaction" OR "customer loyalty") AND "service quality" AND Indonesia' },
  { judul: 'Frasa dengan tanda kutip', isi: 'Tanda kutip mencari frasa persis sehingga hasil lebih relevan.', contoh: '"technology acceptance model"' },
  { judul: 'Filter tahun & jenis', isi: 'Atur 5 tahun terakhir untuk sumber utama dan cari artikel review untuk gambaran umum.' },
  { judul: 'Snowballing', isi: 'Ambil satu artikel yang pas, lalu telusuri daftar pustakanya (mundur) dan "Cited by" (maju).' },
  { judul: 'Cari dalam dua bahasa', isi: 'Kata kunci Indonesia memunculkan konteks lokal; Inggris membuka literatur internasional.' }
];

export const journalQuality: { judul: string; isi: string }[] = [
  { judul: 'Peringkat Sinta', isi: 'Sinta 1–6: semakin kecil angka, semakin tinggi. Jurnal terakreditasi lebih terjamin proses telaah sejawatnya.' },
  { judul: 'Kuartil Scopus/SJR', isi: 'Q1 (terbaik) sampai Q4. Skripsi S1 tidak wajib Q1; yang penting relevan dan kredibel.' },
  { judul: 'Telaah sejawat (peer review)', isi: 'Pastikan jurnal menyebut proses peer review. Preprint dan blog bukan pengganti.' },
  { judul: 'Tahun terbit', isi: 'Utamakan 5–10 tahun terakhir, kecuali karya klasik yang menjadi dasar teori.' },
  { judul: 'Jumlah sitasi', isi: 'Sitasi tinggi menandakan pengaruh, tetapi artikel baru wajar bersitasi sedikit.' }
];

export const predatorSigns: string[] = [
  'Menjanjikan publikasi super cepat (hitungan hari) dengan biaya mendadak',
  'Email promosi berlebihan yang meminta naskah',
  'Tidak ada informasi dewan editor atau alamat yang jelas',
  'Nama jurnal mirip jurnal terkenal, tetapi situs dan kontaknya meragukan',
  'Tidak ditemukan di DOAJ, Scopus, Sinta, atau pangkalan terpercaya lainnya',
  'Kualitas bahasa dan format situs buruk, artikel tidak konsisten dengan lingkup jurnal'
];

export const readingStrategy: string[] = [
  'Baca judul dan abstrak dulu untuk memutuskan relevan atau tidak.',
  'Lompat ke kesimpulan, lalu lihat gambar dan tabel utama.',
  'Baca pendahuluan untuk memahami masalah dan celah penelitian.',
  'Baca metode jika kamu butuh meniru atau membandingkan pendekatan.',
  'Catat dalam satu baris per artikel: masalah, metode, temuan, relevansi untukku.',
  'Simpan sitasi lengkap di pengelola referensi sejak awal.'
];
