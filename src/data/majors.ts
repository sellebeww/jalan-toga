/**
 * Data rumpun jurusan. Semua personalisasi (roadmap, contoh topik, rekomendasi metodologi,
 * alat, sitasi) membaca dari sini. Edit file ini untuk menambah/mengubah jurusan.
 */

export type PhaseId =
  | 'eksplorasi'
  | 'topik'
  | 'proposal'
  | 'sempro'
  | 'izin'
  | 'data'
  | 'analisis'
  | 'final'
  | 'sidang'
  | 'wisuda';

export type ApproachId =
  | 'kuantitatif'
  | 'kualitatif'
  | 'mixed'
  | 'rnd'
  | 'ptk'
  | 'studi-kasus'
  | 'hukum-normatif'
  | 'kajian-pustaka';

export interface InterestCluster {
  id: string;
  label: string;
  /** Objek/lokasi/subjek penelitian. */
  objek: string[];
  /** Variabel bebas / fenomena penyebab. */
  x: string[];
  /** Variabel terikat / hasil. */
  y: string[];
  /** Template judul kualitatif/studi kasus; {o} diganti objek. */
  kualitatif: string[];
  /** Template judul pengembangan/rancang bangun; {o} diganti objek. */
  pengembangan: string[];
}

export interface Major {
  id: string;
  nama: string;
  rumpun: 'Teknik & IT' | 'Sains & Pertanian' | 'Kesehatan' | 'Sosial & Humaniora' | 'Ekonomi & Hukum' | 'Pendidikan & Agama' | 'Seni & Desain';
  contoh: string[];
  ringkas: string;
  struktur: 'bab15' | 'imrad';
  pendekatan: ApproachId[];
  alat: string[];
  sitasi: string;
  sumberData: string[];
  tips: string[];
  /** Langkah tambahan khusus jurusan yang disisipkan ke fase roadmap. */
  langkahTambahan: { fase: PhaseId; teks: string }[];
  /** Contoh judul nyata sebagai gambaran level yang wajar untuk S1. */
  contohJudul: string[];
  minat: InterestCluster[];
}

export const majors: Major[] = [
  {
    id: 'informatika',
    nama: 'Informatika, Sistem Informasi & Ilmu Komputer',
    rumpun: 'Teknik & IT',
    contoh: ['Teknik Informatika', 'Sistem Informasi', 'Ilmu Komputer', 'Teknologi Informasi', 'Sains Data'],
    ringkas: 'Skripsi umumnya berupa pengembangan sistem/model, evaluasi algoritma, atau studi adopsi teknologi.',
    struktur: 'bab15',
    pendekatan: ['rnd', 'kuantitatif', 'studi-kasus', 'mixed', 'kajian-pustaka'],
    alat: ['Python', 'Google Colab', 'SPSS', 'SmartPLS', 'Figma', 'Git/GitHub'],
    sitasi: 'IEEE (paling umum) atau APA 7, tergantung panduan fakultas',
    sumberData: ['Dataset publik (Kaggle, UCI, Hugging Face)', 'Log sistem instansi', 'Kuesioner pengguna (SUS, TAM, UTAUT)', 'Wawancara stakeholder'],
    tips: [
      'Untuk skripsi model/algoritma, kontribusi harus jelas: apa yang berbeda atau lebih baik dibanding penelitian sebelumnya? Siapkan tabel perbandingan metrik.',
      'Simpan dataset, kode, dan versi parameter dengan rapi (Git). Penguji sering minta bukti eksperimen bisa diulang.',
      'Untuk sistem informasi, pisahkan jelas: metode pengembangan (Waterfall/Agile/Prototyping) dan metode pengujian (blackbox, UAT, SUS).',
      'Hindari judul yang hanya menyebut "aplikasi ..." tanpa masalah penelitian yang terukur.'
    ],
    langkahTambahan: [
      { fase: 'data', teks: 'Dokumentasikan dataset (sumber, jumlah, pembagian latih/uji) dan lingkungan eksperimen (spesifikasi, versi library).' },
      { fase: 'analisis', teks: 'Siapkan tabel hasil pengujian (akurasi/F1/RMSE atau skor UAT/SUS) lengkap dengan interpretasi, bukan hanya angka.' }
    ],
    contohJudul: [
      'Analisis Sentimen Ulasan Aplikasi Mobile Banking Menggunakan Algoritma Naive Bayes dan SVM',
      'Pengaruh Kualitas Sistem dan Kualitas Informasi terhadap Kepuasan Pengguna Aplikasi Akademik Kampus',
      'Rancang Bangun Sistem Informasi Inventaris Berbasis Web pada UMKM dengan Metode Prototyping'
    ],
    minat: [
      {
        id: 'data-ai',
        label: 'Data, machine learning & analisis teks',
        objek: ['ulasan pengguna aplikasi e-commerce', 'data cuitan publik', 'data penjualan toko ritel', 'citra daun tanaman'],
        x: ['algoritma Naive Bayes', 'algoritma Random Forest', 'metode seleksi fitur', 'teknik augmentasi data'],
        y: ['akurasi klasifikasi', 'nilai F1-score', 'kesalahan prediksi (RMSE)', 'waktu komputasi'],
        kualitatif: ['Studi Kasus Penerapan Analitik Data pada {o}', 'Evaluasi Tantangan Kualitas Data dalam {o}'],
        pengembangan: ['Implementasi Model Klasifikasi untuk {o} Berbasis Web', 'Perancangan Dashboard Analitik untuk {o}']
      },
      {
        id: 'sistem-info',
        label: 'Sistem informasi & adopsi teknologi',
        objek: ['UMKM kuliner', 'perguruan tinggi swasta', 'puskesmas', 'perusahaan logistik skala menengah'],
        x: ['kualitas sistem', 'kemudahan penggunaan', 'dukungan manajemen', 'literasi digital pegawai'],
        y: ['kepuasan pengguna', 'niat penggunaan berkelanjutan', 'kinerja individu', 'efisiensi proses'],
        kualitatif: ['Studi Kasus Transformasi Digital pada {o}', 'Analisis Hambatan Adopsi Sistem Informasi di {o}'],
        pengembangan: ['Rancang Bangun Sistem Informasi Manajemen untuk {o}', 'Pengembangan Aplikasi Mobile untuk {o} dengan Metode Prototyping']
      },
      {
        id: 'jaringan-keamanan',
        label: 'Jaringan, IoT & keamanan',
        objek: ['jaringan kampus', 'sistem pertanian pintar skala kecil', 'server web instansi pemerintah daerah'],
        x: ['konfigurasi QoS', 'metode enkripsi', 'penggunaan firewall berbasis aturan', 'penempatan sensor'],
        y: ['throughput jaringan', 'latensi', 'tingkat deteksi serangan', 'konsumsi daya perangkat'],
        kualitatif: ['Studi Kasus Pengelolaan Keamanan Informasi pada {o}'],
        pengembangan: ['Rancang Bangun Sistem Monitoring Berbasis IoT untuk {o}', 'Implementasi Sistem Deteksi Intrusi pada {o}']
      }
    ]
  },
  {
    id: 'teknik',
    nama: 'Teknik (Sipil, Mesin, Elektro, Industri, Kimia, Arsitektur)',
    rumpun: 'Teknik & IT',
    contoh: ['Teknik Sipil', 'Teknik Mesin', 'Teknik Elektro', 'Teknik Industri', 'Teknik Kimia', 'Arsitektur'],
    ringkas: 'Skripsi/tugas akhir biasanya eksperimen laboratorium, simulasi, perancangan, atau studi kasus lapangan dengan data terukur.',
    struktur: 'bab15',
    pendekatan: ['kuantitatif', 'rnd', 'studi-kasus', 'mixed'],
    alat: ['Excel', 'MATLAB', 'AutoCAD', 'SAP2000/ETABS', 'ANSYS', 'Minitab', 'SPSS'],
    sitasi: 'IEEE atau APA 7, ikuti buku pedoman tugas akhir fakultas',
    sumberData: ['Pengujian laboratorium', 'Simulasi numerik', 'Data proyek (dengan izin)', 'Standar (SNI, ASTM, ISO)'],
    tips: [
      'Rencanakan jadwal laboratorium sejak awal; antrean alat dan waktu uji (misalnya umur beton 28 hari) sering menjadi penyebab molor.',
      'Tuliskan standar yang dipakai (SNI/ASTM) di Bab 3, dan bandingkan hasil uji dengan nilai syarat standar tersebut.',
      'Minta bantuan laboran untuk kalibrasi alat dan catat kondisi pengujian. Data tanpa kondisi uji sulit dipertanggungjawabkan.',
      'Satuan, angka signifikan, dan grafik yang rapi dinilai serius oleh penguji teknik.'
    ],
    langkahTambahan: [
      { fase: 'izin', teks: 'Booking laboratorium/bengkel dan konfirmasi ketersediaan alat, bahan, serta teknisi.' },
      { fase: 'data', teks: 'Catat kondisi pengujian (suhu, tanggal, operator, kalibrasi) pada setiap sampel agar data dapat ditelusuri.' }
    ],
    contohJudul: [
      'Pengaruh Variasi Penambahan Serat Bambu terhadap Kuat Tekan dan Kuat Tarik Belah Beton',
      'Analisis Efisiensi Panel Surya Monokristalin dengan Variasi Sudut Kemiringan',
      'Optimasi Tata Letak Fasilitas Gudang dengan Metode Systematic Layout Planning'
    ],
    minat: [
      {
        id: 'material',
        label: 'Material, struktur & konstruksi',
        objek: ['beton mutu normal', 'baja ringan', 'tanah lempung', 'campuran aspal'],
        x: ['variasi bahan tambah serat alami', 'variasi komposisi campuran', 'perlakuan perawatan (curing)', 'ukuran agregat'],
        y: ['kuat tekan', 'kuat lentur', 'daya serap air', 'nilai stabilitas'],
        kualitatif: ['Studi Kasus Kegagalan Struktur pada {o}'],
        pengembangan: ['Perancangan Struktur {o} dengan Pemodelan Perangkat Lunak', 'Analisis Perbandingan Biaya dan Kinerja {o}']
      },
      {
        id: 'energi-mesin',
        label: 'Energi, mesin & kelistrikan',
        objek: ['motor bakar 4 langkah', 'panel surya skala rumah tangga', 'sistem pendingin', 'turbin angin skala kecil'],
        x: ['variasi bahan bakar', 'sudut kemiringan', 'laju aliran fluida', 'jumlah sudu'],
        y: ['efisiensi', 'daya keluaran', 'konsumsi bahan bakar', 'suhu kerja'],
        kualitatif: ['Studi Kasus Perawatan Mesin pada {o}'],
        pengembangan: ['Rancang Bangun {o} Tepat Guna', 'Pengujian Kinerja dan Optimasi {o}']
      },
      {
        id: 'industri',
        label: 'Industri, produksi & arsitektur',
        objek: ['lini produksi UKM', 'gudang distribusi', 'bangunan cagar budaya', 'rumah sakit tipe C'],
        x: ['metode 5S', 'penjadwalan produksi', 'ergonomi stasiun kerja', 'orientasi bangunan'],
        y: ['produktivitas', 'tingkat cacat produk', 'beban kerja operator', 'kenyamanan termal'],
        kualitatif: ['Studi Kasus Penerapan Lean Manufacturing pada {o}', 'Analisis Preferensi Pengguna terhadap Ruang di {o}'],
        pengembangan: ['Perancangan Ulang Tata Letak {o}', 'Desain Fasilitas Kerja Ergonomis pada {o}']
      }
    ]
  },
  {
    id: 'sains',
    nama: 'Sains Murni (Biologi, Kimia, Fisika, Matematika, Statistika)',
    rumpun: 'Sains & Pertanian',
    contoh: ['Biologi', 'Kimia', 'Fisika', 'Matematika', 'Statistika', 'Geografi', 'Farmasi sains'],
    ringkas: 'Umumnya penelitian eksperimen/laboratorium atau pemodelan dengan struktur IMRAD dan analisis statistik inferensial.',
    struktur: 'imrad',
    pendekatan: ['kuantitatif', 'kajian-pustaka', 'mixed'],
    alat: ['SPSS', 'R', 'Python', 'Excel', 'GraphPad Prism', 'OriginLab', 'MATLAB'],
    sitasi: 'APA 7 (umum) atau gaya jurnal rujukan (misal ACS untuk kimia)',
    sumberData: ['Percobaan laboratorium', 'Pengamatan lapangan/koleksi sampel', 'Data sekunder (BMKG, BPS, GBIF)', 'Simulasi numerik'],
    tips: [
      'Tentukan rancangan percobaan sedari awal: kontrol, perlakuan, ulangan. Ulangan yang kurang membuat uji statistik tak bermakna.',
      'Lengkapi Bab Metode dengan detail yang cukup supaya orang lain dapat mengulang percobaan (alat, bahan, konsentrasi, durasi).',
      'Simpan data mentah dan buku catatan laboratorium. Penguji bisa meminta data asli.',
      'Pilih uji statistik sebelum mengambil data, bukan sesudahnya.'
    ],
    langkahTambahan: [
      { fase: 'izin', teks: 'Siapkan daftar alat/bahan, ajukan kebutuhan ke laboran, dan cek izin pengambilan sampel di lapangan bila ada.' },
      { fase: 'data', teks: 'Lakukan uji pendahuluan (pilot) kecil sebelum percobaan utama untuk memastikan prosedur berjalan.' }
    ],
    contohJudul: [
      'Pengaruh Konsentrasi Ekstrak Daun Kelor terhadap Pertumbuhan Bakteri Staphylococcus aureus',
      'Pemodelan Penyebaran Penyakit Menggunakan Model SIR dengan Data Kasus Kabupaten',
      'Analisis Regresi Logistik Faktor yang Mempengaruhi Ketepatan Waktu Studi Mahasiswa'
    ],
    minat: [
      {
        id: 'bio-kimia',
        label: 'Biologi, kimia & bahan alam',
        objek: ['Staphylococcus aureus', 'tanaman cabai rawit', 'limbah organik rumah tangga', 'ekstrak daun lokal'],
        x: ['konsentrasi ekstrak', 'lama fermentasi', 'jenis pelarut', 'pH media'],
        y: ['diameter zona hambat', 'kadar senyawa fenolik', 'laju pertumbuhan', 'rendemen'],
        kualitatif: ['Studi Etnobotani Pemanfaatan Tumbuhan oleh {o}'],
        pengembangan: ['Uji Potensi {o} sebagai Bahan Aktif Alami']
      },
      {
        id: 'fisika-mat',
        label: 'Fisika, matematika & statistika',
        objek: ['data curah hujan bulanan', 'data harga komoditas', 'sistem pegas', 'jaringan sosial kampus'],
        x: ['model ARIMA', 'metode peramalan eksponensial', 'variasi massa beban', 'parameter model'],
        y: ['akurasi peramalan (MAPE)', 'periode osilasi', 'stabilitas solusi', 'laju penyebaran'],
        kualitatif: ['Kajian Literatur Penerapan Pemodelan Matematika pada {o}'],
        pengembangan: ['Simulasi Numerik {o} dengan Metode Runge-Kutta', 'Penerapan Analisis Deret Waktu pada {o}']
      },
      {
        id: 'lingkungan-geo',
        label: 'Lingkungan & kebumian',
        objek: ['sungai di sekitar kawasan permukiman', 'tanah lahan pertanian', 'kualitas udara perkotaan', 'wilayah pesisir'],
        x: ['kepadatan penduduk', 'penggunaan lahan', 'curah hujan', 'aktivitas industri'],
        y: ['indeks pencemaran', 'tingkat erosi', 'kualitas air', 'perubahan garis pantai'],
        kualitatif: ['Persepsi Masyarakat terhadap Pengelolaan {o}'],
        pengembangan: ['Pemetaan Sebaran {o} Menggunakan SIG']
      }
    ]
  },
  {
    id: 'pertanian',
    nama: 'Pertanian, Peternakan, Perikanan & Kehutanan',
    rumpun: 'Sains & Pertanian',
    contoh: ['Agroteknologi', 'Agribisnis', 'Peternakan', 'Perikanan', 'Kehutanan', 'Ilmu Tanah', 'Teknologi Pangan'],
    ringkas: 'Gabungan penelitian eksperimen lapangan/laboratorium dan studi sosial-ekonomi petani.',
    struktur: 'bab15',
    pendekatan: ['kuantitatif', 'studi-kasus', 'mixed', 'kualitatif'],
    alat: ['SPSS', 'SAS/Minitab', 'Excel', 'R', 'QGIS'],
    sitasi: 'APA 7 atau gaya yang ditetapkan fakultas',
    sumberData: ['Petak percobaan/kandang/kolam', 'Survei petani/peternak/nelayan', 'Data BPS & dinas terkait', 'Uji laboratorium proksimat'],
    tips: [
      'Penelitian lapangan terikat musim. Hitung mundur dari masa tanam/panen agar tidak menunggu satu musim lagi.',
      'Rancangan Acak Lengkap (RAL) atau Acak Kelompok (RAK) harus dibenarkan oleh kondisi lahan dan ditulis jelas di Bab 3.',
      'Untuk agribisnis, kuesioner petani harus memakai bahasa sederhana. Uji coba kuesioner pada beberapa petani dulu.',
      'Dokumentasi foto kegiatan lapangan dengan tanggal membantu saat sidang.'
    ],
    langkahTambahan: [
      { fase: 'izin', teks: 'Cek ketersediaan lahan/kandang/kolam dan sumber bibit/benih; tentukan jadwal tanam sesuai musim.' },
      { fase: 'data', teks: 'Buat jadwal pengamatan berkala (mingguan/harian) dan lembar pengamatan baku.' }
    ],
    contohJudul: [
      'Pengaruh Dosis Pupuk Organik Cair terhadap Pertumbuhan dan Hasil Tanaman Selada',
      'Analisis Pendapatan dan Kelayakan Usaha Budidaya Ikan Lele Sistem Bioflok',
      'Faktor yang Mempengaruhi Keputusan Petani Menggunakan Benih Bersertifikat'
    ],
    minat: [
      {
        id: 'budidaya',
        label: 'Budidaya tanaman, ternak & ikan',
        objek: ['tanaman selada', 'ayam broiler', 'ikan lele', 'tanaman padi sawah'],
        x: ['dosis pupuk organik cair', 'jenis media tanam', 'kepadatan tebar', 'komposisi pakan'],
        y: ['pertumbuhan tinggi tanaman', 'bobot panen', 'konversi pakan', 'tingkat kelangsungan hidup'],
        kualitatif: ['Praktik Budidaya Tradisional pada {o}'],
        pengembangan: ['Pengembangan Pakan Alternatif untuk {o}']
      },
      {
        id: 'agribisnis',
        label: 'Agribisnis & sosial-ekonomi',
        objek: ['petani padi', 'peternak sapi rakyat', 'pelaku usaha olahan hasil laut', 'kelompok tani milenial'],
        x: ['akses informasi harga', 'luas lahan', 'penyuluhan', 'penggunaan media sosial'],
        y: ['pendapatan usaha', 'adopsi teknologi', 'keputusan pembelian', 'kesejahteraan petani'],
        kualitatif: ['Strategi Adaptasi {o} terhadap Perubahan Iklim', 'Kelembagaan dan Peran Kelompok pada {o}'],
        pengembangan: ['Analisis Kelayakan Usaha {o}']
      },
      {
        id: 'pangan',
        label: 'Teknologi pangan & pascapanen',
        objek: ['produk olahan singkong', 'susu fermentasi', 'buah pasca panen', 'tepung komposit'],
        x: ['lama pengeringan', 'penambahan bahan pengawet alami', 'suhu penyimpanan', 'rasio formulasi'],
        y: ['kadar air', 'daya terima organoleptik', 'umur simpan', 'kandungan gizi'],
        kualitatif: ['Persepsi Konsumen terhadap {o}'],
        pengembangan: ['Formulasi dan Uji Mutu {o}']
      }
    ]
  },
  {
    id: 'kesehatan',
    nama: 'Kesehatan (Keperawatan, Kebidanan, Gizi, Kesmas, Farmasi, Kedokteran)',
    rumpun: 'Kesehatan',
    contoh: ['Keperawatan', 'Kebidanan', 'Gizi', 'Kesehatan Masyarakat', 'Farmasi', 'Kedokteran', 'Fisioterapi', 'Analis Kesehatan'],
    ringkas: 'Penelitian dengan subjek manusia, sehingga etik, informed consent, dan izin institusi sangat menentukan jadwal.',
    struktur: 'bab15',
    pendekatan: ['kuantitatif', 'kualitatif', 'mixed', 'studi-kasus', 'kajian-pustaka'],
    alat: ['SPSS', 'Excel', 'Stata', 'R', 'NVivo', 'G*Power'],
    sitasi: 'Vancouver (umum di kesehatan) atau APA 7 sesuai pedoman fakultas',
    sumberData: ['Kuesioner/pengukuran pada responden', 'Rekam medis (dengan izin)', 'Wawancara informan', 'Data Riskesdas, SKI, dinas kesehatan'],
    tips: [
      'Urus kelayakan etik (ethical clearance) lebih awal. Komisi etik punya jadwal sidang dan butuh proposal yang sudah disetujui; ini sering memakan beberapa minggu.',
      'Siapkan lembar informasi dan persetujuan (informed consent) yang bahasanya mudah dipahami responden.',
      'Gunakan instrumen baku/valid (mis. skala yang sudah diterjemahkan dan diuji) bila ada, daripada membuat dari nol.',
      'Hitung besar sampel dengan rumus yang sesuai desain (analitik, kategorik, beda rerata), bukan sekadar menebak.'
    ],
    langkahTambahan: [
      { fase: 'izin', teks: 'Ajukan kelayakan etik penelitian (ethical clearance) ke komisi etik yang berwenang dan siapkan lembar persetujuan responden.' },
      { fase: 'izin', teks: 'Urus izin penelitian ke fasilitas kesehatan/lokasi (puskesmas, rumah sakit, dinas) beserta surat tugas dari kampus.' },
      { fase: 'data', teks: 'Jaga kerahasiaan identitas responden: pakai kode, simpan data di perangkat terproteksi.' }
    ],
    contohJudul: [
      'Hubungan Pola Makan dan Aktivitas Fisik dengan Kejadian Overweight pada Remaja SMA',
      'Pengaruh Edukasi Menyusui dengan Media Video terhadap Pengetahuan dan Sikap Ibu Hamil Trimester III',
      'Pengalaman Perawat dalam Merawat Pasien Paliatif di Ruang Rawat Inap: Studi Fenomenologi'
    ],
    minat: [
      {
        id: 'gizi-kesmas',
        label: 'Gizi & kesehatan masyarakat',
        objek: ['remaja SMA', 'ibu hamil', 'balita di wilayah kerja puskesmas', 'pekerja kantoran'],
        x: ['pola makan', 'aktivitas fisik', 'pengetahuan gizi', 'dukungan keluarga'],
        y: ['status gizi', 'kejadian anemia', 'kejadian stunting', 'perilaku hidup bersih dan sehat'],
        kualitatif: ['Pengalaman {o} dalam Menjalani Pola Hidup Sehat', 'Faktor Budaya dalam Praktik Pemberian Makan pada {o}'],
        pengembangan: ['Pengembangan Media Edukasi Kesehatan untuk {o}']
      },
      {
        id: 'keperawatan-kebidanan',
        label: 'Keperawatan & kebidanan',
        objek: ['pasien hipertensi', 'ibu postpartum', 'perawat ruang rawat inap', 'pasien diabetes melitus tipe 2'],
        x: ['edukasi kesehatan', 'terapi relaksasi napas dalam', 'dukungan sosial', 'beban kerja perawat'],
        y: ['tekanan darah', 'tingkat kecemasan', 'kepatuhan minum obat', 'kualitas tidur'],
        kualitatif: ['Pengalaman {o}: Studi Fenomenologi', 'Persepsi {o} terhadap Pelayanan Keperawatan'],
        pengembangan: ['Penerapan Intervensi Keperawatan pada {o}: Studi Kasus']
      },
      {
        id: 'farmasi-lab',
        label: 'Farmasi & analis kesehatan',
        objek: ['apotek komunitas', 'sampel darah donor', 'sediaan topikal ekstrak tanaman', 'pasien rawat jalan'],
        x: ['konsentrasi bahan aktif', 'konseling apoteker', 'metode pemeriksaan', 'lama penyimpanan sampel'],
        y: ['kadar hasil pemeriksaan', 'kepatuhan pengobatan', 'stabilitas sediaan', 'tingkat kepuasan pasien'],
        kualitatif: ['Evaluasi Pelayanan Informasi Obat pada {o}'],
        pengembangan: ['Formulasi dan Evaluasi {o}']
      }
    ]
  },
  {
    id: 'ekonomi-bisnis',
    nama: 'Ekonomi, Manajemen, Akuntansi & Bisnis',
    rumpun: 'Ekonomi & Hukum',
    contoh: ['Manajemen', 'Akuntansi', 'Ekonomi Pembangunan', 'Bisnis Digital', 'Perbankan Syariah', 'Perpajakan'],
    ringkas: 'Dominan kuantitatif (kuesioner dan data keuangan) dengan model regresi/SEM; kualitatif untuk studi kasus bisnis.',
    struktur: 'bab15',
    pendekatan: ['kuantitatif', 'kualitatif', 'studi-kasus', 'mixed'],
    alat: ['SPSS', 'SmartPLS', 'EViews', 'Stata', 'Excel', 'AMOS'],
    sitasi: 'APA 7',
    sumberData: ['Kuesioner konsumen/karyawan', 'Laporan keuangan (BEI, OJK)', 'Data BPS/Bank Indonesia', 'Wawancara pemilik usaha'],
    tips: [
      'Ukur setiap variabel dengan indikator yang diadopsi dari penelitian terdahulu, sertakan sumbernya, lalu uji validitas dan reliabilitas.',
      'Untuk data laporan keuangan, jelaskan kriteria pemilihan sampel (purposive) dan periode amatan dengan tabel seleksi.',
      'Data panel/deret waktu butuh uji asumsi berbeda dari regresi biasa. Pelajari uji stasioneritas, Chow, Hausman sebelum olah data.',
      'Jangan hanya melaporkan angka p. Jelaskan arti ekonomis/manajerialnya.'
    ],
    langkahTambahan: [
      { fase: 'izin', teks: 'Jika memakai data perusahaan atau UMKM, minta surat izin dan kesediaan memberi data lebih dulu.' },
      { fase: 'analisis', teks: 'Siapkan uji asumsi klasik (normalitas, multikolinearitas, heteroskedastisitas) atau evaluasi outer/inner model bila memakai SEM-PLS.' }
    ],
    contohJudul: [
      'Pengaruh Kualitas Pelayanan dan Harga terhadap Kepuasan serta Loyalitas Pelanggan Kafe',
      'Pengaruh Profitabilitas dan Leverage terhadap Nilai Perusahaan Sektor Consumer Goods yang Terdaftar di BEI',
      'Pengaruh Literasi Keuangan terhadap Perilaku Menabung Generasi Z'
    ],
    minat: [
      {
        id: 'pemasaran',
        label: 'Pemasaran & perilaku konsumen',
        objek: ['pelanggan kafe lokal', 'pengguna marketplace', 'konsumen produk kecantikan', 'wisatawan domestik'],
        x: ['kualitas pelayanan', 'citra merek', 'promosi media sosial', 'ulasan daring'],
        y: ['kepuasan pelanggan', 'keputusan pembelian', 'loyalitas pelanggan', 'niat beli ulang'],
        kualitatif: ['Strategi Pemasaran Digital pada {o}', 'Analisis Perilaku Konsumen {o} Saat Berbelanja Daring'],
        pengembangan: ['Perancangan Strategi Bisnis untuk {o}']
      },
      {
        id: 'sdm',
        label: 'Sumber daya manusia & organisasi',
        objek: ['karyawan perusahaan startup', 'guru dan tenaga kependidikan', 'pegawai bank daerah', 'karyawan pabrik'],
        x: ['kepemimpinan transformasional', 'lingkungan kerja', 'beban kerja', 'kompensasi'],
        y: ['kepuasan kerja', 'kinerja karyawan', 'komitmen organisasi', 'turnover intention'],
        kualitatif: ['Praktik Manajemen Talenta di {o}'],
        pengembangan: ['Evaluasi Sistem Penilaian Kinerja pada {o}']
      },
      {
        id: 'keuangan-akuntansi',
        label: 'Keuangan, akuntansi & ekonomi',
        objek: ['perusahaan manufaktur di BEI', 'UMKM binaan', 'bank syariah', 'wajib pajak orang pribadi'],
        x: ['profitabilitas', 'literasi keuangan', 'inflasi', 'kualitas audit'],
        y: ['nilai perusahaan', 'kepatuhan pajak', 'pertumbuhan ekonomi daerah', 'manajemen laba'],
        kualitatif: ['Praktik Pencatatan Keuangan pada {o}'],
        pengembangan: ['Penyusunan Laporan Keuangan Sederhana untuk {o}']
      }
    ]
  },
  {
    id: 'hukum',
    nama: 'Hukum & Syariah-Hukum',
    rumpun: 'Ekonomi & Hukum',
    contoh: ['Ilmu Hukum', 'Hukum Pidana', 'Hukum Perdata', 'Hukum Tata Negara', 'Hukum Ekonomi Syariah'],
    ringkas: 'Mayoritas penelitian hukum normatif (kajian peraturan dan putusan), sebagian empiris (hukum di lapangan).',
    struktur: 'bab15',
    pendekatan: ['hukum-normatif', 'kualitatif', 'studi-kasus', 'kajian-pustaka'],
    alat: ['Mendeley/Zotero', 'NVivo', 'Putusan3.mahkamahagung.go.id', 'JDIH', 'Hukumonline'],
    sitasi: 'Footnote (catatan kaki) gaya hukum atau APA 7; tanyakan pedoman fakultas',
    sumberData: ['Peraturan perundang-undangan (JDIH)', 'Putusan pengadilan (direktori putusan MA)', 'Buku & jurnal hukum', 'Wawancara praktisi (hakim, jaksa, advokat, notaris)'],
    tips: [
      'Tentukan jenis pendekatan: perundang-undangan, kasus, konseptual, perbandingan. Sebut eksplisit di Bab 3.',
      'Pastikan peraturan yang dikutip masih berlaku (cek perubahan/pencabutan) dan sebutkan nomor, tahun, dan pasal dengan tepat.',
      'Rumusan masalah hukum sebaiknya berupa pertanyaan analisis ("bagaimana pengaturan...", "bagaimana pertimbangan hakim..."), bukan sekadar deskripsi.',
      'Untuk analisis putusan, kumpulkan salinan putusan resmi dan catat nomor perkara lengkap.'
    ],
    langkahTambahan: [
      { fase: 'data', teks: 'Inventarisasi bahan hukum primer (peraturan, putusan), sekunder (buku, jurnal), dan tersier (kamus, ensiklopedia) dalam tabel.' },
      { fase: 'izin', teks: 'Bila penelitian empiris, ajukan izin wawancara ke instansi (pengadilan, kejaksaan, kantor notaris) dengan surat pengantar kampus.' }
    ],
    contohJudul: [
      'Analisis Yuridis Perlindungan Data Pribadi Konsumen Pinjaman Daring Berdasarkan UU Perlindungan Data Pribadi',
      'Pertimbangan Hakim dalam Putusan Tindak Pidana Penipuan Daring: Studi Putusan Pengadilan Negeri',
      'Efektivitas Mediasi dalam Penyelesaian Sengketa Waris di Pengadilan Agama'
    ],
    minat: [
      {
        id: 'pidana-perdata',
        label: 'Pidana & perdata',
        objek: ['tindak pidana penipuan daring', 'sengketa wanprestasi jual beli', 'kasus kekerasan dalam rumah tangga', 'sengketa waris'],
        x: ['penerapan pasal', 'peran mediasi', 'alat bukti elektronik', 'pertimbangan hakim'],
        y: ['efektivitas penyelesaian perkara', 'perlindungan korban', 'kepastian hukum', 'keadilan putusan'],
        kualitatif: ['Analisis Yuridis terhadap {o}', 'Tinjauan Hukum Positif tentang {o}'],
        pengembangan: ['Studi Putusan Pengadilan tentang {o}']
      },
      {
        id: 'teknologi-bisnis',
        label: 'Hukum teknologi, bisnis & konsumen',
        objek: ['transaksi e-commerce', 'perjanjian pinjaman daring', 'kekayaan intelektual karya digital', 'data pribadi konsumen'],
        x: ['regulasi perlindungan konsumen', 'klausula baku', 'tanggung jawab platform'],
        y: ['perlindungan hukum konsumen', 'kepastian hukum pelaku usaha'],
        kualitatif: ['Perlindungan Hukum dalam {o}', 'Tanggung Jawab Hukum pada {o}'],
        pengembangan: ['Analisis Perbandingan Pengaturan {o} di Indonesia dan Negara Lain']
      },
      {
        id: 'tata-negara-syariah',
        label: 'Tata negara, administrasi & syariah',
        objek: ['pemilihan umum daerah', 'perizinan usaha berbasis risiko', 'akad pembiayaan syariah', 'wakaf produktif'],
        x: ['kewenangan lembaga negara', 'asas pemerintahan yang baik', 'prinsip syariah dalam akad'],
        y: ['kepastian hukum', 'akuntabilitas pemerintahan', 'kepatuhan syariah'],
        kualitatif: ['Kewenangan dan Pengawasan dalam {o}', 'Implementasi Prinsip Syariah pada {o}'],
        pengembangan: ['Kajian Konseptual atas {o}']
      }
    ]
  },
  {
    id: 'sospol',
    nama: 'Sosial, Politik & Administrasi (Sosiologi, Politik, HI, Administrasi Negara)',
    rumpun: 'Sosial & Humaniora',
    contoh: ['Sosiologi', 'Ilmu Politik', 'Hubungan Internasional', 'Administrasi Publik', 'Antropologi', 'Kesejahteraan Sosial'],
    ringkas: 'Kualitatif (wawancara, observasi, dokumen) dan kuantitatif survei; menuntut kerangka teori yang kuat.',
    struktur: 'bab15',
    pendekatan: ['kualitatif', 'kuantitatif', 'studi-kasus', 'mixed', 'kajian-pustaka'],
    alat: ['NVivo', 'Atlas.ti', 'SPSS', 'Excel', 'Mendeley', 'Google Forms'],
    sitasi: 'APA 7 (paling umum), sebagian fakultas memakai Chicago/Harvard',
    sumberData: ['Wawancara mendalam & FGD', 'Observasi lapangan', 'Dokumen kebijakan & arsip', 'Survei masyarakat'],
    tips: [
      'Teori adalah "kacamata" analisis. Pilih satu dua teori inti dan konsisten memakainya di pembahasan, bukan menumpuk banyak teori.',
      'Untuk kualitatif, jelaskan kriteria pemilihan informan, jumlah, dan teknik keabsahan data (triangulasi, member check).',
      'Simpan rekaman dan transkrip wawancara dengan aman; minta persetujuan tertulis informan.',
      'Hindari opini pribadi. Tiap klaim harus bisa ditelusuri ke data (kutipan wawancara, dokumen, angka).'
    ],
    langkahTambahan: [
      { fase: 'izin', teks: 'Surat izin ke kelurahan/instansi/organisasi dan daftar calon informan beserta kontaknya.' },
      { fase: 'data', teks: 'Siapkan pedoman wawancara, lembar persetujuan informan, dan jadwal wawancara; transkripsikan segera setelah wawancara.' }
    ],
    contohJudul: [
      'Strategi Komunikasi Politik Calon Legislatif Muda Melalui Media Sosial pada Pemilu',
      'Implementasi Kebijakan Layanan Publik Digital di Kantor Kecamatan: Studi Kasus',
      'Pengaruh Kualitas Pelayanan Publik terhadap Kepuasan Masyarakat di Kantor Kelurahan'
    ],
    minat: [
      {
        id: 'kebijakan-publik',
        label: 'Kebijakan & pelayanan publik',
        objek: ['kantor kecamatan', 'program bantuan sosial', 'layanan perizinan satu pintu', 'pemerintah desa'],
        x: ['kualitas pelayanan publik', 'transparansi anggaran', 'partisipasi masyarakat', 'digitalisasi layanan'],
        y: ['kepuasan masyarakat', 'kepercayaan publik', 'efektivitas program', 'akuntabilitas'],
        kualitatif: ['Implementasi Kebijakan {o}: Studi Kasus', 'Peran Aktor Lokal dalam {o}'],
        pengembangan: ['Evaluasi Program {o} dengan Model CIPP']
      },
      {
        id: 'masyarakat-budaya',
        label: 'Masyarakat, gender & budaya',
        objek: ['komunitas pekerja informal', 'masyarakat adat', 'pemuda di perkotaan', 'penyintas bencana'],
        x: ['modal sosial', 'penggunaan media sosial', 'migrasi', 'kebijakan afirmasi'],
        y: ['partisipasi sosial', 'identitas sosial', 'kesejahteraan keluarga', 'ketahanan komunitas'],
        kualitatif: ['Konstruksi Identitas {o} di Era Digital', 'Dinamika Sosial pada {o}'],
        pengembangan: ['Pemberdayaan {o}: Studi Etnografi']
      },
      {
        id: 'politik-hi',
        label: 'Politik & hubungan internasional',
        objek: ['pemilih pemula', 'partai politik lokal', 'diplomasi budaya Indonesia', 'kerja sama ASEAN'],
        x: ['kampanye media sosial', 'literasi politik', 'diplomasi publik'],
        y: ['partisipasi politik', 'preferensi pilihan', 'citra negara'],
        kualitatif: ['Strategi {o} dalam Menghadapi Dinamika Politik', 'Analisis Wacana tentang {o}'],
        pengembangan: ['Kajian Kebijakan Luar Negeri terkait {o}']
      }
    ]
  },
  {
    id: 'komunikasi',
    nama: 'Komunikasi, Jurnalistik & Hubungan Masyarakat',
    rumpun: 'Sosial & Humaniora',
    contoh: ['Ilmu Komunikasi', 'Jurnalistik', 'Hubungan Masyarakat', 'Penyiaran', 'Komunikasi Digital'],
    ringkas: 'Analisis isi/wacana/semiotika, studi khalayak (survei), atau perancangan karya komunikasi.',
    struktur: 'bab15',
    pendekatan: ['kualitatif', 'kuantitatif', 'studi-kasus', 'mixed'],
    alat: ['NVivo', 'SPSS', 'Excel', 'Canva/Adobe', 'Google Trends', 'Social media analytics'],
    sitasi: 'APA 7',
    sumberData: ['Konten media (berita, unggahan, iklan)', 'Survei khalayak', 'Wawancara praktisi media/humas', 'Dokumen perusahaan'],
    tips: [
      'Analisis isi/wacana/semiotika butuh unit analisis yang jelas (misal 20 unggahan, 10 berita, 5 iklan) dan alasan pemilihannya.',
      'Kalau memakai data media sosial, jelaskan cara pengumpulan dan perhatikan etika data publik.',
      'Teori komunikasi (agenda setting, framing, uses & gratifications, dsb.) harus nyambung dengan rumusan masalah.',
      'Untuk skripsi karya, siapkan dokumen perancangan dan evaluasi khalayak, bukan hanya karyanya.'
    ],
    langkahTambahan: [
      { fase: 'data', teks: 'Susun lembar koding (coding sheet) analisis isi atau matriks analisis wacana dan uji keterandalan antar-pengkode bila perlu.' }
    ],
    contohJudul: [
      'Analisis Framing Pemberitaan Isu Lingkungan pada Media Daring Nasional',
      'Pengaruh Terpaan Media Sosial Instagram terhadap Citra Merek Produk Lokal',
      'Strategi Komunikasi Krisis Humas Perusahaan dalam Menangani Keluhan Pelanggan di Media Sosial'
    ],
    minat: [
      {
        id: 'media-sosial',
        label: 'Media sosial & budaya digital',
        objek: ['akun Instagram usaha lokal', 'konten TikTok edukasi', 'komunitas penggemar daring', 'kanal YouTube pendidikan'],
        x: ['terpaan media sosial', 'kredibilitas influencer', 'kualitas konten', 'interaksi pengikut'],
        y: ['citra merek', 'minat beli', 'literasi digital', 'keterlibatan audiens'],
        kualitatif: ['Analisis Isi Konten pada {o}', 'Representasi Gender dalam {o}'],
        pengembangan: ['Perancangan Kampanye Komunikasi untuk {o}']
      },
      {
        id: 'jurnalistik',
        label: 'Jurnalistik & pemberitaan',
        objek: ['media daring nasional', 'televisi lokal', 'jurnalis pemula', 'berita bencana alam'],
        x: ['framing berita', 'etika jurnalistik', 'kecepatan pemberitaan'],
        y: ['persepsi publik', 'kepercayaan terhadap media', 'kualitas berita'],
        kualitatif: ['Analisis Framing {o}', 'Praktik Verifikasi Informasi pada {o}'],
        pengembangan: ['Produksi Karya Jurnalistik tentang {o}']
      },
      {
        id: 'humas-pr',
        label: 'Hubungan masyarakat & komunikasi organisasi',
        objek: ['humas pemerintah daerah', 'perusahaan rintisan', 'rumah sakit swasta', 'universitas'],
        x: ['strategi humas', 'komunikasi internal', 'manajemen isu'],
        y: ['reputasi organisasi', 'kepuasan publik', 'kinerja komunikasi'],
        kualitatif: ['Strategi Public Relations {o} dalam Membangun Reputasi', 'Manajemen Krisis Komunikasi pada {o}'],
        pengembangan: ['Perancangan Rencana Komunikasi untuk {o}']
      }
    ]
  },
  {
    id: 'psikologi',
    nama: 'Psikologi',
    rumpun: 'Sosial & Humaniora',
    contoh: ['Psikologi', 'Bimbingan Konseling (jalur psikologi)', 'Psikologi Islam'],
    ringkas: 'Kuantitatif (skala psikologi, korelasi, eksperimen) dan kualitatif (fenomenologi, studi kasus) dengan standar etik ketat.',
    struktur: 'bab15',
    pendekatan: ['kuantitatif', 'kualitatif', 'studi-kasus', 'mixed'],
    alat: ['SPSS', 'JASP', 'Jamovi', 'R', 'AMOS/Mplus', 'NVivo'],
    sitasi: 'APA 7 (wajib di hampir semua fakultas psikologi)',
    sumberData: ['Skala psikologis baku (adaptasi)', 'Wawancara & observasi', 'Eksperimen terkontrol', 'Tes psikologi (butuh kualifikasi)'],
    tips: [
      'Pakai alat ukur yang sudah teruji. Bila mengadaptasi dari bahasa asing, ikuti prosedur adaptasi (translate-back translate, uji coba).',
      'Informed consent dan kerahasiaan wajib. Tes psikologi tertentu hanya boleh digunakan oleh yang berwenang.',
      'Jelaskan kriteria subjek (usia, kondisi) yang tegas di Bab 3, dan batasi generalisasi pada Bab 5.',
      'Korelasi bukan kausalitas. Hati-hati dengan kalimat "mempengaruhi" bila desainnya hanya korelasional.'
    ],
    langkahTambahan: [
      { fase: 'izin', teks: 'Siapkan lembar persetujuan (informed consent), pernyataan kerahasiaan, dan izin lembaga tempat subjek berada.' },
      { fase: 'data', teks: 'Lakukan uji coba skala ke kelompok kecil, hitung validitas dan reliabilitas (mis. Cronbach Alpha) sebelum pengambilan data utama.' }
    ],
    contohJudul: [
      'Hubungan antara Dukungan Sosial dan Resiliensi pada Mahasiswa Tingkat Akhir',
      'Pengaruh Pelatihan Mindfulness terhadap Tingkat Kecemasan Akademik Mahasiswa',
      'Dinamika Penerimaan Diri pada Remaja dari Keluarga Bercerai: Studi Kasus'
    ],
    minat: [
      {
        id: 'klinis-kesejahteraan',
        label: 'Kesejahteraan & kesehatan mental',
        objek: ['mahasiswa tingkat akhir', 'remaja SMA', 'karyawan usia produktif', 'ibu bekerja'],
        x: ['dukungan sosial', 'mindfulness', 'self-compassion', 'penggunaan media sosial'],
        y: ['resiliensi', 'kecemasan akademik', 'kesejahteraan psikologis', 'burnout'],
        kualitatif: ['Pengalaman {o} dalam Menghadapi Tekanan: Studi Fenomenologi', 'Dinamika Psikologis {o}'],
        pengembangan: ['Efektivitas Program Psikoedukasi pada {o}']
      },
      {
        id: 'industri-org',
        label: 'Psikologi industri & organisasi',
        objek: ['karyawan generasi Z', 'guru sekolah dasar', 'tenaga kesehatan', 'pekerja jarak jauh'],
        x: ['kepemimpinan', 'work-life balance', 'iklim organisasi', 'motivasi kerja'],
        y: ['keterikatan kerja (work engagement)', 'kepuasan kerja', 'stres kerja', 'kinerja'],
        kualitatif: ['Pengalaman Bekerja Jarak Jauh pada {o}'],
        pengembangan: ['Evaluasi Program Pelatihan pada {o}']
      },
      {
        id: 'perkembangan-sosial',
        label: 'Perkembangan & psikologi sosial',
        objek: ['anak usia dini', 'remaja panti asuhan', 'orang tua tunggal', 'komunitas daring'],
        x: ['pola asuh', 'kelekatan', 'konformitas teman sebaya', 'literasi digital orang tua'],
        y: ['perkembangan sosial-emosional', 'kepercayaan diri', 'perilaku prososial', 'kecanduan gawai'],
        kualitatif: ['Pengalaman Pengasuhan pada {o}', 'Konstruksi Makna Hidup {o}'],
        pengembangan: ['Penerapan Intervensi Kelompok pada {o}']
      }
    ]
  },
  {
    id: 'pendidikan',
    nama: 'Pendidikan & Keguruan (semua bidang studi)',
    rumpun: 'Pendidikan & Agama',
    contoh: ['PGSD', 'Pendidikan Matematika', 'Pendidikan Bahasa', 'Pendidikan IPA', 'PAUD', 'Bimbingan Konseling', 'Teknologi Pendidikan'],
    ringkas: 'PTK, eksperimen/quasi-eksperimen, R&D pengembangan media/perangkat, dan survei persepsi di sekolah.',
    struktur: 'bab15',
    pendekatan: ['ptk', 'kuantitatif', 'rnd', 'kualitatif', 'mixed', 'studi-kasus'],
    alat: ['SPSS', 'Excel', 'Canva', 'Wordwall/Quizizz', 'Google Forms', 'NVivo'],
    sitasi: 'APA 7',
    sumberData: ['Siswa/guru di sekolah mitra', 'Tes hasil belajar', 'Angket motivasi', 'Observasi pembelajaran & dokumentasi'],
    tips: [
      'Izin sekolah dan jadwal pembelajaran menentukan semuanya. Hubungi guru/kepala sekolah lebih awal dan sesuaikan dengan kalender akademik sekolah.',
      'Instrumen tes harus divalidasi (validitas isi oleh ahli, uji coba, reliabilitas, daya beda, tingkat kesukaran) sebelum dipakai.',
      'Pada PTK, siklus dihentikan berdasarkan indikator keberhasilan yang ditetapkan di awal, bukan berdasarkan jumlah siklus saja.',
      'Pada R&D, tentukan model pengembangan (ADDIE, 4D, Borg & Gall) dan tampilkan hasil validasi ahli serta uji coba terbatas.'
    ],
    langkahTambahan: [
      { fase: 'izin', teks: 'Dapatkan surat izin penelitian untuk sekolah, persetujuan kepala sekolah dan guru kolaborator, serta jadwal masuk kelas.' },
      { fase: 'izin', teks: 'Minta validasi instrumen/perangkat pembelajaran dari dosen ahli (lembar validasi) sebelum uji coba.' },
      { fase: 'data', teks: 'Lakukan pretest, perlakuan, posttest (atau siklus PTK) sesuai jadwal; dokumentasikan RPP, lembar observasi, dan foto kegiatan.' }
    ],
    contohJudul: [
      'Peningkatan Hasil Belajar Matematika Siswa Kelas V melalui Model Problem Based Learning: Penelitian Tindakan Kelas',
      'Pengembangan Media Pembelajaran Interaktif Berbasis Android pada Materi Ekosistem untuk Siswa SMP',
      'Pengaruh Model Pembelajaran Kooperatif Tipe STAD terhadap Motivasi dan Hasil Belajar Siswa'
    ],
    minat: [
      {
        id: 'model-pembelajaran',
        label: 'Model & strategi pembelajaran',
        objek: ['siswa kelas V SD', 'siswa kelas VIII SMP', 'siswa SMA kelas X', 'peserta didik PAUD'],
        x: ['model Problem Based Learning', 'model pembelajaran kooperatif', 'penggunaan media visual', 'pembelajaran berdiferensiasi'],
        y: ['hasil belajar', 'motivasi belajar', 'kemampuan berpikir kritis', 'keterampilan membaca'],
        kualitatif: ['Penerapan Kurikulum Merdeka pada {o}: Studi Kasus', 'Pengalaman Guru dalam Pembelajaran Berdiferensiasi pada {o}'],
        pengembangan: ['Pengembangan Media Pembelajaran Interaktif untuk {o}', 'Pengembangan Modul Ajar untuk {o}']
      },
      {
        id: 'teknologi-pendidikan',
        label: 'Teknologi & literasi digital',
        objek: ['siswa SMP', 'mahasiswa semester awal', 'guru sekolah dasar', 'peserta pelatihan daring'],
        x: ['penggunaan aplikasi kuis interaktif', 'pembelajaran daring', 'literasi digital guru', 'gamifikasi'],
        y: ['keaktifan belajar', 'pemahaman konsep', 'kemandirian belajar', 'kepuasan belajar'],
        kualitatif: ['Kesiapan Guru dalam Mengintegrasikan Teknologi pada {o}'],
        pengembangan: ['Pengembangan Aplikasi Pembelajaran Berbasis Android untuk {o}', 'Pengembangan Bahan Ajar Digital untuk {o}']
      },
      {
        id: 'karakter-bk',
        label: 'Karakter, konseling & manajemen sekolah',
        objek: ['siswa SMA', 'siswa dengan kebutuhan khusus', 'sekolah penggerak', 'orang tua siswa'],
        x: ['layanan bimbingan kelompok', 'keterlibatan orang tua', 'kepemimpinan kepala sekolah', 'budaya sekolah'],
        y: ['kepercayaan diri siswa', 'perilaku disiplin', 'prestasi akademik', 'iklim sekolah'],
        kualitatif: ['Peran Guru BK dalam {o}', 'Pembentukan Karakter melalui Kegiatan Ekstrakurikuler pada {o}'],
        pengembangan: ['Penerapan Layanan Konseling Kelompok pada {o}']
      }
    ]
  },
  {
    id: 'agama',
    nama: 'Agama, Ushuluddin & Dakwah',
    rumpun: 'Pendidikan & Agama',
    contoh: ['Pendidikan Agama Islam', 'Ilmu Al-Qur\'an dan Tafsir', 'Komunikasi dan Penyiaran Islam', 'Pendidikan Agama Kristen/Katolik/Hindu/Buddha', 'Perbandingan Agama'],
    ringkas: 'Kajian teks/pemikiran (library research), studi lapangan di lembaga keagamaan, atau pengembangan pembelajaran agama.',
    struktur: 'bab15',
    pendekatan: ['kualitatif', 'kajian-pustaka', 'kuantitatif', 'studi-kasus', 'rnd', 'ptk'],
    alat: ['Maktabah Syamilah', 'Mendeley', 'NVivo', 'SPSS', 'Atlas.ti'],
    sitasi: 'APA 7 atau gaya khusus fakultas (footnote)',
    sumberData: ['Kitab/teks primer & tafsir', 'Jurnal keislaman/keagamaan terakreditasi', 'Wawancara tokoh/ustaz/pendeta/pemuka agama', 'Observasi lembaga pendidikan agama'],
    tips: [
      'Bedakan sumber primer (teks asli) dan sekunder (syarah/tafsir/artikel) dan sebutkan di Bab 3.',
      'Metode kajian teks (tematik, analisis isi, hermeneutika, komparatif) harus dinyatakan dan konsisten.',
      'Pastikan kutipan teks suci/kitab ditulis lengkap dengan rujukan (surah:ayat, kitab, jilid, halaman).',
      'Jaga netralitas akademik; pisahkan analisis dari keyakinan pribadi saat menulis pembahasan.'
    ],
    langkahTambahan: [
      { fase: 'data', teks: 'Susun tabel inventarisasi sumber primer dan sekunder beserta lembar kutipan untuk memudahkan penelusuran.' }
    ],
    contohJudul: [
      'Nilai-Nilai Pendidikan Karakter dalam Kisah Luqman Menurut Tafsir Al-Misbah',
      'Strategi Dakwah Digital Komunitas Pemuda Masjid melalui Media Sosial',
      'Pengaruh Keteladanan Guru Pendidikan Agama terhadap Akhlak Siswa'
    ],
    minat: [
      {
        id: 'kajian-teks',
        label: 'Kajian teks & pemikiran tokoh',
        objek: ['kitab klasik', 'karya tafsir kontemporer', 'pemikiran tokoh pembaruan', 'naskah ajaran etika'],
        x: ['konsep pendidikan akhlak', 'pandangan tentang toleransi', 'metode penafsiran tematik'],
        y: ['relevansi dengan pendidikan masa kini', 'implikasi bagi kehidupan sosial'],
        kualitatif: ['Konsep Pendidikan Akhlak dalam {o}', 'Analisis Tematik Nilai Toleransi pada {o}'],
        pengembangan: ['Studi Komparatif Pemikiran dalam {o}']
      },
      {
        id: 'pendidikan-agama',
        label: 'Pembelajaran & pendidikan agama',
        objek: ['siswa SMP', 'santri pondok pesantren', 'mahasiswa baru', 'peserta pengajian remaja'],
        x: ['keteladanan guru', 'metode pembelajaran Al-Qur\'an', 'peran orang tua', 'penggunaan media audiovisual'],
        y: ['akhlak siswa', 'kemampuan membaca Al-Qur\'an', 'pemahaman ibadah', 'motivasi beragama'],
        kualitatif: ['Pembentukan Karakter Religius di {o}'],
        pengembangan: ['Pengembangan Media Pembelajaran Agama untuk {o}']
      },
      {
        id: 'dakwah-sosial',
        label: 'Dakwah, komunikasi & sosial keagamaan',
        objek: ['komunitas pemuda masjid', 'majelis taklim', 'lembaga amil zakat', 'rumah ibadah dan umat setempat'],
        x: ['strategi dakwah digital', 'literasi zakat', 'kepemimpinan tokoh agama'],
        y: ['partisipasi jemaah', 'kesadaran berzakat', 'kerukunan antarumat'],
        kualitatif: ['Strategi Dakwah {o} di Era Digital', 'Praktik Kerukunan Umat di {o}'],
        pengembangan: ['Evaluasi Program Pemberdayaan oleh {o}']
      }
    ]
  },
  {
    id: 'humaniora',
    nama: 'Bahasa, Sastra, Sejarah & Humaniora',
    rumpun: 'Sosial & Humaniora',
    contoh: ['Sastra Indonesia', 'Sastra Inggris', 'Pendidikan Bahasa', 'Sejarah', 'Filsafat', 'Linguistik', 'Perpustakaan'],
    ringkas: 'Kajian teks, wacana, bahasa, dan sumber sejarah dengan metode kualitatif dan landasan teori yang kuat.',
    struktur: 'bab15',
    pendekatan: ['kualitatif', 'kajian-pustaka', 'studi-kasus', 'kuantitatif'],
    alat: ['AntConc', 'Praat', 'NVivo', 'Mendeley', 'Excel', 'Voyant Tools'],
    sitasi: 'APA 7 atau MLA/Chicago (sastra & sejarah), ikuti pedoman prodi',
    sumberData: ['Teks sastra/naskah/korpus', 'Arsip & dokumen sejarah', 'Wawancara saksi sejarah (sejarah lisan)', 'Rekaman tuturan'],
    tips: [
      'Tentukan korpus data dengan jelas (novel apa, edisi/cetakan, halaman; surat kabar apa, tahun terbit).',
      'Pilih teori analisis yang spesifik (semiotika, naratologi, pragmatik, sosiolinguistik, historiografi) dan jelaskan alasan pemilihannya.',
      'Pada penelitian sejarah, pakai tahapan heuristik, kritik sumber, interpretasi, historiografi.',
      'Cantumkan kutipan data (kalimat/tuturan/dokumen) beserta kode agar mudah ditelusuri.'
    ],
    langkahTambahan: [
      { fase: 'data', teks: 'Siapkan tabel korpus/data (kode, kutipan, sumber, halaman) dan kartu data untuk memudahkan analisis.' }
    ],
    contohJudul: [
      'Representasi Perempuan dalam Novel Karya Pengarang Kontemporer: Kajian Feminisme',
      'Kesantunan Berbahasa Mahasiswa dalam Grup Percakapan Daring dengan Dosen',
      'Perkembangan Pelabuhan sebagai Pusat Perdagangan pada Awal Abad ke-20'
    ],
    minat: [
      {
        id: 'sastra',
        label: 'Sastra & budaya',
        objek: ['novel Indonesia kontemporer', 'puisi karya penyair daerah', 'cerita rakyat daerah', 'film pendek'],
        x: ['pendekatan feminisme', 'kritik sosial', 'nilai budaya lokal'],
        y: ['representasi tokoh perempuan', 'pesan moral', 'konstruksi identitas'],
        kualitatif: ['Representasi Tokoh dalam {o}: Kajian Semiotika', 'Nilai Budaya dalam {o}'],
        pengembangan: ['Analisis Struktur Naratif {o}']
      },
      {
        id: 'linguistik',
        label: 'Linguistik & pembelajaran bahasa',
        objek: ['grup percakapan daring mahasiswa', 'iklan di media sosial', 'tuturan pedagang pasar', 'siswa pembelajar bahasa Inggris'],
        x: ['strategi kesantunan', 'alih kode', 'penggunaan media pembelajaran bahasa'],
        y: ['penerapan prinsip kesantunan', 'kemampuan berbicara', 'kemampuan menulis'],
        kualitatif: ['Analisis Kesantunan Berbahasa pada {o}', 'Alih Kode dan Campur Kode pada {o}'],
        pengembangan: ['Pengembangan Bahan Ajar Bahasa untuk {o}']
      },
      {
        id: 'sejarah-filsafat',
        label: 'Sejarah & filsafat',
        objek: ['kota pelabuhan pada awal abad ke-20', 'organisasi pergerakan lokal', 'arsip pemerintah kolonial', 'pemikiran tokoh filsafat'],
        x: ['pengaruh kebijakan kolonial', 'peran tokoh lokal', 'konsep etika'],
        y: ['perubahan sosial-ekonomi', 'perkembangan pendidikan', 'relevansi kontemporer'],
        kualitatif: ['Dinamika Perkembangan {o}: Kajian Historis', 'Konsep Etika dalam {o}'],
        pengembangan: ['Kajian Sejarah Lisan tentang {o}']
      }
    ]
  },
  {
    id: 'seni-desain',
    nama: 'Seni, Desain & Arsitektur',
    rumpun: 'Seni & Desain',
    contoh: ['Desain Komunikasi Visual', 'Desain Produk', 'Desain Interior', 'Seni Rupa', 'Seni Musik', 'Film & Televisi', 'Arsitektur'],
    ringkas: 'Bisa berupa skripsi kajian (analisis karya) atau tugas akhir karya (perancangan) disertai laporan ilmiah.',
    struktur: 'bab15',
    pendekatan: ['rnd', 'kualitatif', 'studi-kasus', 'mixed', 'kuantitatif'],
    alat: ['Figma', 'Adobe Creative Suite', 'Canva', 'AutoCAD/SketchUp', 'Blender', 'SPSS (uji khalayak)'],
    sitasi: 'APA 7',
    sumberData: ['Observasi karya & pengguna', 'Wawancara target audiens/klien', 'Studi eksisting/kompetitor', 'Kuesioner uji desain'],
    tips: [
      'Untuk tugas akhir karya, laporan ilmiah tetap perlu: latar masalah, riset target audiens, konsep, proses, dan evaluasi karya.',
      'Dokumentasikan proses (sketsa, iterasi, revisi) sebagai bukti metode. Penguji menilai proses, bukan hanya hasil.',
      'Lakukan uji ke target pengguna (usability testing, kuesioner persepsi) dan laporkan temuannya.',
      'Cantumkan referensi visual dan hak cipta aset (font, ilustrasi, musik) yang dipakai.'
    ],
    langkahTambahan: [
      { fase: 'data', teks: 'Dokumentasikan seluruh tahap perancangan (riset, moodboard, sketsa, iterasi) dan siapkan portofolio proses.' },
      { fase: 'analisis', teks: 'Lakukan uji ke target pengguna dan susun hasil evaluasi desain sebagai dasar kesimpulan.' }
    ],
    contohJudul: [
      'Perancangan Identitas Visual dan Kemasan Produk UMKM Kopi Lokal',
      'Perancangan Kampanye Visual Kesadaran Pengelolaan Sampah untuk Remaja',
      'Analisis Semiotika Poster Film Dokumenter Lingkungan'
    ],
    minat: [
      {
        id: 'dkv',
        label: 'Desain komunikasi visual & branding',
        objek: ['UMKM kopi lokal', 'komunitas pecinta lingkungan', 'museum daerah', 'platform edukasi anak'],
        x: ['identitas visual', 'desain kemasan', 'kampanye visual'],
        y: ['pengenalan merek', 'minat audiens', 'kesadaran target audiens'],
        kualitatif: ['Analisis Semiotika Visual pada {o}', 'Studi Preferensi Visual Audiens terhadap {o}'],
        pengembangan: ['Perancangan Identitas Visual untuk {o}', 'Perancangan Kampanye Media untuk {o}']
      },
      {
        id: 'produk-interior',
        label: 'Produk, interior & arsitektur',
        objek: ['rumah makan keluarga', 'perpustakaan kampus', 'ruang kerja bersama', 'sekolah dasar'],
        x: ['pemilihan material lokal', 'pencahayaan alami', 'ergonomi furnitur'],
        y: ['kenyamanan pengguna', 'efisiensi energi', 'daya tarik ruang'],
        kualitatif: ['Pengalaman Pengguna terhadap Ruang pada {o}'],
        pengembangan: ['Perancangan Interior {o}', 'Perancangan Produk Furnitur Fungsional untuk {o}']
      },
      {
        id: 'seni-pertunjukan-media',
        label: 'Seni pertunjukan & media kreatif',
        objek: ['sanggar tari tradisional', 'kelompok musik lokal', 'film pendek mahasiswa', 'festival budaya'],
        x: ['pelestarian kesenian tradisi', 'strategi pemasaran digital seni', 'inovasi garap musik'],
        y: ['regenerasi pelaku seni', 'apresiasi masyarakat', 'daya tarik pertunjukan'],
        kualitatif: ['Bentuk dan Fungsi Pertunjukan pada {o}', 'Strategi Pelestarian oleh {o}'],
        pengembangan: ['Penciptaan Karya Seni Berbasis Tradisi untuk {o}']
      }
    ]
  }
];

export const majorById = (id: string): Major | undefined => majors.find((m) => m.id === id);

export const rumpunList = Array.from(new Set(majors.map((m) => m.rumpun)));
