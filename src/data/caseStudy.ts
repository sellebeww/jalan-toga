export interface CaseStudyStep {
  stepNumber: number;
  moduleSlug: string;
  moduleTitle: string;
  phaseTitle: string;
  description: string;
  scenario: string;
  artifactsProduced: string[];
  connectionToGoldenRule: string; // Masalah <-> Tujuan <-> Data <-> Kesimpulan
}

export const runningCaseStudy: CaseStudyStep[] = [
  {
    stepNumber: 1,
    moduleSlug: 'modul-1',
    moduleTitle: 'Modul 1: Pengantar Riset TI',
    phaseTitle: 'Inisiasi & Pemilihan Topik Skripsi',
    description: 'Mahasiswa semester akhir mengidentifikasi persoalan lambatnya mahasiswa menemukan info kegiatan UKM dan seminar di portal kampus lama.',
    scenario: 'Menghubungkan Computer Science (arsitektur temu balik / Information Retrieval) dan Information Systems (perilaku pencarian informasi mahasiswa). Riset ini diposisikan sebagai artefak komputasi empiris yang diuji kinerjanya.',
    artifactsProduced: [
      'Proposal Tugas Akhir ringkas',
      'Pemetaan irisan CS (algoritma indeks) dan IS (perilaku adopsi pengguna)',
      'Jadwal komitmen 6 bulan riset'
    ],
    connectionToGoldenRule: 'Pondasi: Menetapkan bahwa penelitian ini bermuara pada pengujian ilmiah, bukan sekadar proyek coding pembuatan website biasa.'
  },
  {
    stepNumber: 2,
    moduleSlug: 'modul-2',
    moduleTitle: 'Modul 2: Tahapan Penelitian',
    phaseTitle: 'Perencanaan Pendekatan & Alur Metodologis',
    description: 'Menetapkan model tahapan sequential Sharp dan circulatory Research Wheel.',
    scenario: 'Menentukan Field: Information Retrieval & HCI; Approach: Experiment (uji latensi algoritma di lab) dipadukan Survey (kepuasan pengguna); Nature: Kontribusi evaluasi komparatif empiris efisiensi temu balik metadata kegiatan pendek.',
    artifactsProduced: [
      'Diagram alur kerja 7 tahap sequential Sharp',
      'Matriks pembagian peran: Mahasiswa sebagai inisiator solusi teknis, Dosen sebagai pemandu pemikiran ilmiah',
      'Persetujuan protokol pengujian lab'
    ],
    connectionToGoldenRule: 'Penyelarasan: Menetapkan bahwa pembuktian membutuhkan dua jenis data: data empiris waktu respon server dan data persepsi kepuasan mahasiswa.'
  },
  {
    stepNumber: 3,
    moduleSlug: 'modul-3',
    moduleTitle: 'Modul 3: Konsep Dasar Penelitian',
    phaseTitle: 'Perumusan Masalah & Penyusunan Hipotesis',
    description: 'Menerapkan 4 langkah perumusan masalah (Fokus → Subfokus → Kaji/Pilih → Hubungkan logis).',
    scenario: 'Fokus: Kecepatan temu balik info kegiatan; Subfokus: Algoritma inverted index, penanganan typo, struktur metadata. Rumusan Masalah: "Bagaimana pengaruh penerapan inverted index terhadap waktu respon pencarian dan kepuasan pengguna Portal Kampus?"\nHipotesis Associative: Ada pengaruh signifikan penambahan struktur indeks terhadap penurunan waktu respon query.',
    artifactsProduced: [
      'Rumusan masalah deklaratif & research question yang berfokus pada dependent variable',
      'Formulasi Hipotesis H0 dan H1 dengan batas toleransi Tipe I α = 0,05'
    ],
    connectionToGoldenRule: 'Aturan Emas: Masalah yang dirumuskan secara tegas mengimplikasikan data apa yang harus dikumpulkan di tahap berikutnya.'
  },
  {
    stepNumber: 4,
    moduleSlug: 'modul-4',
    moduleTitle: 'Modul 4: Desain Penelitian',
    phaseTitle: 'Penetapan Desain Eksperimental & Survei',
    description: 'Menetapkan tipe proyek "Applied Project" dipadukan dengan desain Experimental terstandar dan Survey.',
    scenario: 'Menggunakan desain eksperimen terkendali: membandingkan Server A (pencarian linier default) vs Server B (inverted index teroptimasi) pada kondisi beban 1.000, 10.000, dan 100.000 data kegiatan. Untuk survei kepuasan, menggunakan kuesioner terstruktur pasca-uji.',
    artifactsProduced: [
      'Protokol uji beban server terkendali',
      'Spesifikasi variabel kontrol (spesifikasi RAM, CPU server, bandwidth dijaga identik)',
      'Pohon keputusan metodologis yang mendasari pemilihan desain'
    ],
    connectionToGoldenRule: 'Aturan Emas: Menjamin bahwa perbandingan dua sistem diuji secara adil dengan manipulasi variabel yang terkontrol secara ilmiah.'
  },
  {
    stepNumber: 5,
    moduleSlug: 'modul-5',
    moduleTitle: 'Modul 5: Studi Literatur & Sitasi IEEE',
    phaseTitle: 'Sintesis Literatur & Kerangka Pemikiran',
    description: 'Menelusuri dan mensintesis 20 paper ilmiah mutakhir (3 tahun terakhir) tentang Information Retrieval dan Web Systems.',
    scenario: 'Menggunakan Mendeley dan menulis naskah di Overleaf LaTeX format IEEE. Mensintesis temuan Peneliti A [1] dan Peneliti B [2], memuat counter-argument mengenai konsumsi memori [3], serta memetakan research gap yang diselesaikan oleh prototipe portal kampus.',
    artifactsProduced: [
      'Bab 2 Literature Review dengan sintesis komparatif (bukan tumpukan ringkasan terpisah)',
      'File bibtex referensi IEEE yang rapi dan terverifikasi'
    ],
    connectionToGoldenRule: 'Aturan Emas: Memberikan landasan teori ilmiah bahwa rancangan sistem didasarkan pada celah riset yang valid dan menghindari duplikasi.'
  },
  {
    stepNumber: 6,
    moduleSlug: 'modul-6',
    moduleTitle: 'Modul 6: Instrumen, Sampling, & Uji Reliabilitas',
    phaseTitle: 'Penentuan Sampel & Penyusunan Instrumen Kuesioner',
    description: 'Menentukan ukuran sampel dan menyusun instrumen kuesioner skala Likert.',
    scenario: 'Populasi N = 8.500 mahasiswa. Mengambil sampel terstratifikasi proporsional (Proportionate Stratified Random). Kuesioner terdiri dari 15 butir skala Likert (SS=5 s/d STS=1). Dilakukan pilot test ke 30 responden dan diuji konsistensi internalnya dengan Cronbach’s Alpha. Dihasilkan nilai α = 0,80 (Sangat Handal).',
    artifactsProduced: [
      'Tabel penentuan ukuran sampel terstratifikasi per fakultas',
      'Instrumen kuesioner 15 butir bebas leading questions dan jargon',
      'Hasil perhitungan rumus Cronbach Alpha dan Spearman-Brown'
    ],
    connectionToGoldenRule: 'Aturan Emas: Menjamin data persepsi yang dikumpulkan benar-benar handal (reliable) dan tepat mewakili populasi kampus.'
  },
  {
    stepNumber: 7,
    moduleSlug: 'modul-7',
    moduleTitle: 'Modul 7: Penyajian Data & Laporan Sidang',
    phaseTitle: 'Analisis Temuan, Kontekstualisasi, & Poster Ilmiah',
    description: 'Menganalisis data pengujian terhadap objektif dan menyusun materi sidang serta poster ilmiah.',
    scenario: 'Data latensi disajikan dalam diagram garis (beban 1.000 s/d 100.000 data). Dilakukan uji signifikansi paired t-test (terbukti p < 0,01). Skor Likert 100 responden menghasilkan rata-rata 350 dari 500 (70% - Positif). Kesimpulan ditarik selaras dengan masalah tanpa overgeneralization. Disusun poster ilmiah di Scribus berprinsip Let it breathe.',
    artifactsProduced: [
      'Visualisasi grafik garis dan histogram tanpa misleading intervals',
      'Jawaban sistematis atas 7 Pertanyaan Konteks Hasil Riset',
      'Draf poster ilmiah format PDF resolusi tinggi siap cetak semiglossy'
    ],
    connectionToGoldenRule: 'Aturan Emas Keselarasan: Masalah (kecepatan & kepuasan) ↔ Tujuan (komparasi performa) ↔ Data (latensi ms & skor 70%) ↔ Kesimpulan (terbukti inverted index meningkatkan kecepatan secara signifikan) TERTATA SELARAS 100%!'
  }
];
