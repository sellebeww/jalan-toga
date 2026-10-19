import { ModuleData } from '../../types';

export const modul3: ModuleData = {
  slug: 'modul-3',
  number: 3,
  title: 'Konsep Dasar Penelitian',
  subtitle: 'Logika, Deduktif vs Induktif, Metodologi, Perumusan Masalah, dan Hipotesis',
  color: 'purple',
  icon: 'Compass',
  description: 'Membahas prinsip logika dan penalaran, perbandingan lengkap Deduktif vs Induktif, perbedaan Metode vs Metode Ilmiah vs Metodologi, kriteria kelayakan masalah, 4 langkah perumusan masalah, hipotesis (Descriptive, Comparative, Associative), serta matriks Types of Error (Tipe I & II).',
  estimatedMinutes: 45,
  topics: [
    {
      id: 'm3-logika-penalaran',
      moduleSlug: 'modul-3',
      slug: 'logika-dan-penalaran',
      title: 'Logika & Penalaran dalam Riset',
      order: 1,
      readingMinutes: 3,
      tldr: 'Logika = metode membedakan penalaran tepat dan tidak tepat. Penalaran menghubungkan fakta (evidences) ke kesimpulan lewat input-process-output.',
      definition: 'Logika mempelajari metode dan prinsip untuk membedakan penalaran yang tepat (valid) dan tidak tepat (invalid). Penalaran menghubungkan fakta-fakta (evidences) menuju kesimpulan melalui proses input, process, dan output. Logika adalah sebuah keterampilan/kemampuan praktis berpikir, bukan sekadar hafalan istilah teknis.',
      explanation: 'Dalam skripsi TI, fakta (input) diperoleh dari log uji atau data lapangan. Proses berpikir logis (process) menganalisis fakta tersebut tanpa bias. Hasil akhirnya (output) adalah kesimpulan yang sah. Argumentasi ilmiah runtuh bila fakta tidak mendukung kesimpulan yang ditarik.',
      example: {
        text: 'Dari temuan hasil uji sistem (input: rata-rata latensi query meningkat seiring bertambahnya data konkurensi), peneliti memproses hubungan logis (process), lalu menyusun argumentasi kesimpulan bahwa arsitektur saat ini belum thread-safe (output).',
        isFabricated: false
      },
      pitfalls: [
        'Menganggap logika sekadar teori filsafat abstrak tanpa penerapan praktis dalam penulisan bab analisis skripsi.',
        'Menarik kesimpulan yang diinginkan pribadi (wishful thinking) padahal tidak didukung oleh fakta pengujian.'
      ],
      memorize: {
        title: '3 Komponen Alur Penalaran Ilmiah',
        items: [
          'Input: Fakta atau bukti-bukti empiris (evidences) yang teramati.',
          'Process: Penalaran dan pengolahan logis menghubungkan premis/fakta.',
          'Output: Penarikan kesimpulan yang sahih (valid).'
        ],
        ordered: true
      },
      miniQuiz: [
        {
          id: 'q-m3-1-1',
          type: 'single',
          prompt: 'Alur penalaran ilmiah menurut modul menghubungkan fakta menuju kesimpulan melalui tiga tahapan yaitu:',
          options: [
            'Input, Process, Output',
            'Download, Compile, Run',
            'Trial, Error, Success',
            'Survey, Coding, Presentation'
          ],
          answer: 0,
          explanation: 'Penalaran ilmiah menghubungkan fakta ke kesimpulan melalui alur input (evidences), process (penalaran logis), dan output (kesimpulan).',
          difficulty: 1,
          topicId: 'm3-logika-penalaran'
        }
      ],
      tags: ['Logika', 'Penalaran', 'Dasar Riset'],
      glossaryTerms: ['logika', 'penalaran', 'argumentasi']
    },
    {
      id: 'm3-deduktif-induktif',
      moduleSlug: 'modul-3',
      slug: 'deduktif-vs-induktif',
      title: 'Deduktif vs Induktif: Perbandingan Lengkap',
      order: 2,
      readingMinutes: 5,
      tldr: 'Deduktif = umum → khusus (analitis, tautologis, a priori, sahih/tidak). Induktif = khusus → umum (sintetis, general, a posteriori, probabilitas).',
      definition: 'Deduktif bergerak dari pengetahuan umum menuju kesimpulan khusus. Bersifat analitis (menganalisis premis yang ada), tautologis (kesimpulan sudah tersirat dalam premis), a priori (tanpa perlu observasi empiris baru), dan dapat dinilai sahih/tidaknya. Induktif bergerak dari observasi khusus menuju kesimpulan umum. Bersifat sintetis (mensintesis kasus pada premis), general (kesimpulan melampaui kasus yang diamati), a posteriori (berlandaskan pengamatan inderawi empiris), dan mengandung aspek probabilitas. Generalisasi induktif tidak memberi kepastian mutlak; keabsahan penalaran perlu dibedakan dari keyakinan atas hasil.',
      explanation: 'Alur diagram modul:\n- Alur Deduktif: Teori → Hipotesis → Observasi → Konfirmasi.\n- Alur Induktif: Observasi → Pola (Pattern) → Hipotesis Sementara (Tentative Hypothesis) → Teori.',
      example: {
        text: 'Contoh Deduksi: Semua data uji yang memenuhi aturan R pasti diproses modul A (premis umum). Data X memenuhi aturan R (premis khusus). Maka data X pasti diproses modul A (kesimpulan deduktif pasti).\nContoh Induksi: Pada 5 sesi pengujian beban, sistem selalu mengalami kebocoran memori saat data mencapai 10.000 (observasi khusus). Peneliti menyimpulkan kemungkinan besar ada bug buffer overflow pada modul memori (generalisasi induktif berpeluang).',
        isFabricated: false
      },
      pitfalls: [
        'Mengira kesimpulan induktif memberikan kepastian mutlak 100%; induksi selalu mengandung probabilitas (kemungkinan pengecualian).',
        'Menyamakan "keabsahan penalaran" (validitas logika) dengan "keyakinan perasaan peneliti".'
      ],
      compare: {
        headers: ['Karakteristik', 'Penalaran Deduktif', 'Penalaran Induktif'],
        rows: [
          ['Arah Gerak', 'Umum ke Khusus (Top-Down)', 'Khusus ke Umum (Bottom-Up)'],
          ['Sifat Analisis', 'Analitis (analisis premis yang ada)', 'Sintetis (mensintesis berbagai kasus)'],
          ['Tersirat / Baru', 'Tautologis (kesimpulan tersirat di premis)', 'General (kesimpulan melampaui data amatan)'],
          ['Sumber Bukti', 'A Priori (logika murni sebelum fakta empiris)', 'A Posteriori (pengamatan inderawi empiris)'],
          ['Tingkat Kepastian', 'Pasti (dapat dinilai sahih/tidak sahih)', 'Probabilitas / peluang (tidak mutlak)'],
          ['Alur Proses', 'Teori → Hipotesis → Observasi → Konfirmasi', 'Observasi → Pola → Hipotesis Sementara → Teori']
        ]
      },
      memorize: {
        title: 'Pasangan Kata Kunci Deduktif vs Induktif',
        items: [
          'Deduktif: Umum → Khusus | Analitis | Tautologis | A Priori | Sahih/Batal.',
          'Induktif: Khusus → Umum | Sintetis | General | A Posteriori | Probabilitas.',
          'Alur Deduktif: Teori → Hipotesis → Observasi → Konfirmasi.',
          'Alur Induktif: Observasi → Pola → Hipotesis Sementara → Teori.'
        ],
        ordered: false
      },
      mnemonic: {
        text: 'D-U-K (Deduktif Umum ke Khusus) vs I-K-U (Induktif Khusus ke Umum)',
        note: 'Mnemonik buatan'
      },
      miniQuiz: [
        {
          id: 'q-m3-2-1',
          type: 'single',
          prompt: 'Pernyataan mana yang benar mengenai penalaran induktif menurut modul?',
          options: [
            'Kesimpulannya bersifat tautologis dan a priori',
            'Bergerak dari observasi kasus khusus menuju kesimpulan umum dan mengandung probabilitas',
            'Memberikan kepastian mutlak yang tidak dapat dibantah',
            'Hanya digunakan dalam matematika murni'
          ],
          answer: 1,
          explanation: 'Induktif bergerak dari observasi khusus ke umum, bersifat sintetis, a posteriori, dan mengandung unsur probabilitas (bukan kepastian mutlak).',
          difficulty: 1,
          topicId: 'm3-deduktif-induktif'
        }
      ],
      tags: ['Deduktif', 'Induktif', 'Logika'],
      glossaryTerms: ['deduktif', 'induktif', 'a-priori', 'a-posteriori']
    },
    {
      id: 'm3-metode-metodologi',
      moduleSlug: 'modul-3',
      slug: 'metode-metode-ilmiah-metodologi',
      title: 'Metode vs Metode Ilmiah vs Metodologi',
      order: 3,
      readingMinutes: 4,
      tldr: 'Metode = kerangka tindakan terarah; Metode Ilmiah = bukti fisis sistematis; Metodologi = tahapan perencanaan terpadu (metode, teknik, tools, dokumentasi) untuk minimalkan risiko.',
      definition: 'Metode ialah kerangka tindakan atau berpikir yang terarah pada tujuan tertentu. Metode ilmiah adalah cara memperoleh pengetahuan sistematis berdasarkan bukti fisis/empiris. Metodologi adalah tahapan perencanaan penelitian dengan metode, teknik, tools, dan dokumentasi untuk meminimalkan risiko kegagalan serta menekankan proses dan sasaran. Peringatan penting: Metode adalah bagian dari metodologi. Menyebut "penelitian saya menggunakan Python" saja belum menjelaskan metodologi!',
      explanation: 'Manfaat metodologi menurut modul:\n1. Meningkatkan pemahaman dan tanggung jawab peneliti.\n2. Mendukung argumentasi berdasarkan fakta yang dapat dipertanggungjawabkan.\n3. Membantu mengembangkan saran, masukan, dan ide baru dengan dasar yang jelas.',
      example: {
        text: 'Metodologi penelitian portal kampus menjelaskan urutan: perumusan masalah → studi literatur → perancangan sampel kuota → pengumpulan log dan survei Likert → analisis reliabilitas Cronbach → penyusunan rekomendasi. Survei dan pengujian log server adalah metode di dalamnya, sedangkan Python/SPSS hanyalah tools bantu.',
        isFabricated: false
      },
      pitfalls: [
        'Mengira metodologi sama dengan daftar software/alat ("Metodologi saya adalah Visual Studio Code dan MySQL").',
        'Menyamakan metode dengan metodologi (metode adalah instrumen tindakan di dalam payung metodologi yang lebih luas).'
      ],
      compare: {
        headers: ['Istilah', 'Definisi', 'Tingkat Konsep'],
        rows: [
          ['Metode', 'Kerangka tindakan atau cara berpikir terarah tujuan', 'Teknis / instrumen tindakan spesifik'],
          ['Metode Ilmiah', 'Pengetahuan sistematis berdasarkan bukti fisis & logika', 'Prinsip epistemologi sains umum'],
          ['Metodologi', 'Tahapan perencanaan komprehensif (metode + teknik + tools + dokumentasi)', 'Kerangka kerja proses penelitian holistik']
        ]
      },
      memorize: {
        title: '3 Manfaat Utama Metodologi Riset',
        items: [
          '1. Meningkatkan pemahaman dan rasa tanggung jawab peneliti.',
          '2. Mendukung argumentasi berbasis fakta yang terverifikasi.',
          '3. Membantu mengembangkan saran, masukan, dan ide baru dengan dasar kokoh.'
        ],
        ordered: false
      },
      miniQuiz: [
        {
          id: 'q-m3-3-1',
          type: 'single',
          prompt: 'Jika seorang mahasiswa menulis di bab skripsinya: "Metodologi penelitian ini adalah menggunakan bahasa pemrograman Python dan database MySQL", apa evaluasi modul terhadap pernyataan tersebut?',
          options: [
            'Pernyataan itu sudah lengkap dan sempurna',
            'Pernyataan itu keliru karena menyebut nama tools saja belum menjelaskan keseluruhan metodologi penelitian',
            'Python adalah metodologi kualitatif',
            'MySQL adalah satu-satunya metode ilmiah'
          ],
          answer: 1,
          explanation: 'Modul menegaskan bahwa metode adalah bagian dari metodologi, dan menyebut nama tools (seperti Python/MySQL) belum menjelaskan tahapan metodologi penelitian.',
          difficulty: 1,
          topicId: 'm3-metode-metodologi'
        }
      ],
      tags: ['Metode', 'Metodologi', 'Metode Ilmiah'],
      glossaryTerms: ['metode', 'metode-ilmiah', 'metodologi']
    },
    {
      id: 'm3-identifikasi-kelayakan',
      moduleSlug: 'modul-3',
      slug: 'identifikasi-dan-kelayakan-masalah',
      title: 'Identifikasi & Kelayakan Masalah Penelitian',
      order: 4,
      readingMinutes: 4,
      tldr: 'Masalah yang baik wajib memenuhi 3 syarat: Punya Nilai Penelitian (asli, berhubungan, dapat diuji), Feasible (bisa dipecahkan), dan Sesuai Kualifikasi Peneliti. Menarik belum otomatis feasible!',
      definition: 'Identifikasi masalah memperjelas tujuan dan sasaran penelitian. Masalah yang baik memiliki 3 syarat utama:\n1. Nilai penelitian: Asli/original, menyatakan hubungan dengan bidang lain, dan dapat diuji secara empiris.\n2. Feasible (dapat dilaksanakan): Dapat dipecahkan, data dan metode tersedia, biaya tersedia, dan waktu penyelesaian wajar.\n3. Kualifikasi peneliti: Menarik minat serta sesuai dengan kemampuan dan kualifikasi yang dimiliki. Peringatan penting: Menarik belum otomatis feasible!',
      explanation: 'Banyak mahasiswa gagal menyelesaikan skripsi tepat waktu bukan karena tidak pintar, melainkan karena memilih topik yang sangat keren dan menarik namun tidak feasible: datanya bersifat rahasia perusahaan perbankan, membutuhkan superkomputer yang tidak dimiliki kampus, atau membutuhkan waktu pengerjaan 3 tahun.',
      example: {
        text: 'Penelitian aplikasi kampus: Rencana awal meneliti seluruh integrasi 20 sistem informasi di universitas dipersempit menjadi fokus pada "pencarian informasi kegiatan mahasiswa", karena data log, waktu 6 bulan, biaya, dan kemampuan tim hanya feasible untuk ruang lingkup tersebut.',
        isFabricated: false
      },
      pitfalls: [
        'Tergiur memilih topik yang tampak hebat dan menarik tetapi data tidak bisa diakses atau waktu pengerjaan tidak masuk akal (tidak feasible).',
        'Memilih topik yang tidak diminati sama sekali sehingga kehilangan motivasi di tengah jalan.'
      ],
      compare: {
        headers: ['Kriteria Masalah Baik', 'Elemen Penentu', 'Jebakan'],
        rows: [
          ['Nilai Penelitian', 'Keaslian topik, kaitan dengan ilmu lain, dapat diuji', 'Topik basi/duplikasi persis yang sudah selesai'],
          ['Feasible (Kelayakan)', 'Data ada, metode dikuasai, biaya cukup, waktu wajar', 'Topik menarik tapi data tertutup/rahasia'],
          ['Kualifikasi Peneliti', 'Sesuai kompetensi S1 dan membangkitkan minat', 'Memilih topik di luar kapasitas dasar yang dimiliki']
        ]
      },
      memorize: {
        title: '3 Kriteria Wajib Masalah Penelitian yang Baik',
        items: [
          '1. Nilai penelitian: Asli, berhubungan dengan bidang lain, dapat diuji.',
          '2. Feasible: Dapat dipecahkan; data, metode, biaya, dan waktu wajar.',
          '3. Kualifikasi peneliti: Menarik minat dan sesuai kompetensi yang dimiliki.'
        ],
        ordered: false
      },
      miniQuiz: [
        {
          id: 'q-m3-4-1',
          type: 'truefalse',
          prompt: 'Benar atau Salah: Jika suatu topik penelitian sangat menarik dan memiliki nilai penelitian tinggi, topik tersebut pasti otomatis feasible untuk dikerjakan sebagai skripsi S1.',
          answer: false,
          explanation: 'Salah! Modul secara eksplisit memperingatkan: "Menarik belum otomatis feasible. Periksa ketersediaan data, metode, biaya, dan waktu yang wajar."',
          difficulty: 1,
          topicId: 'm3-identifikasi-kelayakan'
        }
      ],
      tags: ['Kelayakan Masalah', 'Feasible', 'Nilai Penelitian'],
      glossaryTerms: ['feasible', 'masalah-penelitian']
    },
    {
      id: 'm3-perumusan-masalah',
      moduleSlug: 'modul-3',
      slug: 'perumusan-masalah-dan-empat-langkah',
      title: 'Perumusan Masalah & 4 Langkah Penyusunan',
      order: 5,
      readingMinutes: 4,
      tldr: 'Rumusan masalah berbentuk research question atau kalimat deklaratif yang fokus pada dependent variable. Disusun lewat 4 langkah: Fokus → Subfokus → Kaji/Pilih → Hubungkan logis.',
      definition: 'Perumusan masalah berbentuk research question (kalimat tanya) atau kalimat deklaratif yang berfokus pada dependent variable (hal yang diteliti). Rumusan harus jelas, padat, mengimplikasikan data untuk pemecahan masalah, dan menjadi dasar pembentukan hipotesis bila digunakan.\nEmpat langkah penyusunan rumusan masalah:\n1. Tentukan fokus penelitian.\n2. Cari faktor-faktor terkait sebagai subfokus.\n3. Kaji dan pilih faktor yang menarik dan relevan.\n4. Hubungkan subfokus terpilih dengan fokus secara logis.',
      explanation: 'Catatan penting modul: Contoh asli modul mengutip kajian transformasi masyarakat informasi Indonesia berdasarkan target WSIS 2015 dengan latar waktu perumusan tahun 2007. Contoh ini ditampilkan modul untuk memperlihatkan hubungan kontekstual antara konteks, target, dan fokus kajian, bukan sebagai informasi kondisi terkini.',
      example: {
        text: 'Langkah Perumusan Portal Kampus:\n1. Fokus: Kecepatan dan kepuasan pencarian informasi kegiatan mahasiswa.\n2. Subfokus terkait: Algoritma temu kembali, struktur indeks metadata, antarmuka pencarian, kategori UKM.\n3. Pilih: Algoritma indeks terbalik (Inverted Index) dan antarmuka responsif.\n4. Hubungkan: "Bagaimana penerapan algoritma inverted index pada metadata kegiatan mahasiswa memengaruhi waktu respons pencarian di Portal Kampus?"',
        isFabricated: true
      },
      pitfalls: [
        'Merumuskan masalah terlalu luas dan mengambang tanpa fokus pada dependent variable yang jelas.',
        'Rumusan masalah tidak mengimplikasikan jenis data apa yang dibutuhkan untuk menjawabnya.'
      ],
      memorize: {
        title: '4 Langkah Perumusan Masalah (Wajib Urut)',
        items: [
          '1. Tentukan fokus penelitian.',
          '2. Cari faktor-faktor terkait sebagai subfokus.',
          '3. Kaji dan pilih faktor yang menarik dan feasible.',
          '4. Hubungkan subfokus terpilih dengan fokus secara logis.'
        ],
        ordered: true
      },
      sourceNote: 'Contoh perumusan masalah WSIS 2015 pada slide dirumuskan tahun 2007 untuk mengilustrasikan relasi fokus-konteks, bukan data kondisi Indonesia saat ini.',
      miniQuiz: [
        {
          id: 'q-m3-5-1',
          type: 'single',
          prompt: 'Rumusan masalah yang baik harus berfokus pada:',
          options: [
            'Merek laptop yang dipakai peneliti',
            'Dependent variable (variabel terikat / hal yang diteliti)',
            'Pendapat pribadi teman satu kos',
            'Jumlah halaman bab lampiran'
          ],
          answer: 1,
          explanation: 'Modul menegaskan rumusan masalah berbentuk research question atau kalimat deklaratif yang berfokus pada dependent variable dan mengimplikasikan data pemecahannya.',
          difficulty: 1,
          topicId: 'm3-perumusan-masalah'
        }
      ],
      tags: ['Perumusan Masalah', 'Research Question', 'Dependent Variable'],
      glossaryTerms: ['perumusan-masalah', 'dependent-variable', 'subfokus']
    },
    {
      id: 'm3-hipotesis-fungsi',
      moduleSlug: 'modul-3',
      slug: 'hipotesis-dan-fungsinya',
      title: 'Hipotesis dan Fungsinya dalam Riset',
      order: 6,
      readingMinutes: 3,
      tldr: 'Hipotesis = jawaban sementara atas masalah penelitian yang diuji empiris. Tidak semua penelitian memerlukannya (deskriptif, eksploratif, kualitatif tidak wajib).',
      definition: 'Hipotesis merupakan jawaban sementara atas masalah penelitian; kebenarannya diuji secara empiris dengan data. Sifat sementara berasal dari kenyataan bahwa ia dirumuskan berdasarkan landasan teori yang belum diuji melalui data penelitian spesifik tersebut. Catatan penting: Hipotesis bukan hasil akhir. Modul menyatakan tidak semua penelitian memerlukannya, misalnya penelitian deskriptif, eksploratif, dan kualitatif. Jangan menganggap hipotesis sebagai kewajiban universal semua skripsi!',
      explanation: 'Manfaat hipotesis menurut modul:\n1. Menjelaskan masalah dan variabel yang diteliti.\n2. Mengarahkan tujuan agar fokus dan efisien.\n3. Menghindari pengumpulan data yang tidak relevan.\n4. Membantu pemilihan teknik analisis data yang tepat.\n5. Memandu penarikan kesimpulan akhir.',
      example: {
        text: 'Dugaan sementara: Penambahan fitur auto-complete pada kolom pencarian portal kampus meningkatkan kecepatan penemuan informasi kegiatan minimal 20%. Hipotesis ini mengarahkan peneliti untuk mengukur kecepatan sebelum dan sesudah fitur dipasang.',
        isFabricated: true
      },
      pitfalls: [
        'Memaksakan membuat hipotesis statistik pada skripsi rancang bangun software atau studi kualitatif eksploratif.',
        'Menganggap hipotesis adalah fakta pasti; jika hipotesis terbukti tidak didukung data, peneliti tidak boleh memanipulasi data!'
      ],
      memorize: {
        title: '5 Manfaat Hipotesis Penelitian',
        items: [
          '1. Menjelaskan masalah & hubungan antarvariabel.',
          '2. Mengarahkan tujuan penelitian secara efisien.',
          '3. Mencegah pengumpulan data yang tidak relevan.',
          '4. Membantu pemilihan metode analisis statistik yang sesuai.',
          '5. Memandu penyusunan kesimpulan akhir.'
        ],
        ordered: false
      },
      miniQuiz: [
        {
          id: 'q-m3-6-1',
          type: 'truefalse',
          prompt: 'Benar atau Salah: Semua jenis penelitian, termasuk penelitian deskriptif, eksploratif, dan kualitatif, wajib memiliki hipotesis formal.',
          answer: false,
          explanation: 'Salah. Modul secara eksplisit menyatakan bahwa tidak semua penelitian memerlukan hipotesis, misalnya penelitian deskriptif, eksploratif, dan kualitatif.',
          difficulty: 1,
          topicId: 'm3-hipotesis-fungsi'
        }
      ],
      tags: ['Hipotesis', 'Fungsi Hipotesis', 'Metodologi'],
      glossaryTerms: ['hipotesis', 'jawaban-sementara']
    },
    {
      id: 'm3-tiga-jenis-hipotesis',
      moduleSlug: 'modul-3',
      slug: 'tiga-jenis-hipotesis',
      title: '3 Jenis Hipotesis: Descriptive, Comparative, Associative',
      order: 7,
      readingMinutes: 4,
      tldr: 'Descriptive (nilai variabel mandiri), Comparative (perbandingan/perbedaan), Associative (hubungan/sebab-akibat). Rumusan negatif tetap comparative!',
      definition: 'Tiga jenis hipotesis berdasarkan pertanyaan penelitian:\n1. Descriptive: Dugaan nilai satu variabel mandiri tanpa perbandingan atau hubungan dengan variabel lain. Contoh: Akurasi prediksi C4.5 mencapai 90%.\n2. Comparative: Dugaan perbedaan antara hal yang dibandingkan. Modul menyebut dua variabel atau lebih pada sampel berbeda, serta perbandingan sebelum-sesudah. Contoh: Tidak ada perbedaan akurasi C4.5 dan ANN.\n3. Associative: Dugaan hubungan (dalam slide juga disebut sebab-akibat) antara dua variabel atau lebih. Contoh: Tidak ada pengaruh penambahan atribut A terhadap akurasi C4.5.\nCatatan penting: Rumusan negatif seperti "tidak ada perbedaan" tetap tergolong Comparative! Dan kata "hubungan" sendiri belum membuktikan sebab-akibat murni.',
      explanation: 'Klasifikasi ini sangat memudahkan Anda menentukan uji statistik yang cocok di Bab 3 dan 4. Jika hipotesis Anda comparative, Anda menggunakan uji beda (seperti t-test atau ANOVA). Jika associative, Anda menggunakan korelasi atau analisis regresi.',
      example: {
        text: 'Contoh pada Portal Kampus:\n- Descriptive: Tingkat kepuasan mahasiswa terhadap portal mencapai minimal 75%.\n- Comparative: Terdapat perbedaan kepuasan antara mahasiswa angkatan 2024 dan angkatan 2021.\n- Associative: Terdapat pengaruh positif antara frekuensi kunjungan portal dengan kecepatan penyebaran info kegiatan.',
        isFabricated: true
      },
      pitfalls: [
        'Mengira kalimat negatif ("tidak ada perbedaan") bukan hipotesis komparatif. Rumusan negatif adalah hipotesis nol (H0) komparatif.',
        'Mengasumsikan bahwa hipotesis asosiatif yang terbukti berhubungan otomatis membuktikan sebab-akibat searah.'
      ],
      compare: {
        headers: ['Jenis Hipotesis', 'Ciri Pertanyaan', 'Contoh dari Modul RTI'],
        rows: [
          ['Descriptive', 'Menilai besaran/nilai variabel tunggal mandiri', 'Akurasi prediksi C4.5 mencapai 90%'],
          ['Comparative', 'Membandingkan 2 kelompok/kondisi (beda/tidak beda)', 'Tidak ada perbedaan akurasi C4.5 dan ANN'],
          ['Associative', 'Meneliti hubungan/pengaruh antarvariabel', 'Tidak ada pengaruh penambahan atribut A terhadap akurasi C4.5']
        ]
      },
      memorize: {
        title: '3 Jenis Hipotesis Berdasarkan Pertanyaan',
        items: [
          'Descriptive: Nilai variabel mandiri tunggal (mis. akurasi = 90%).',
          'Comparative: Perbedaan antar-kondisi/sampel (mis. tidak ada beda C4.5 vs ANN).',
          'Associative: Hubungan atau pengaruh antar-variabel (mis. pengaruh atribut A ke akurasi).'
        ],
        ordered: false
      },
      miniQuiz: [
        {
          id: 'q-m3-7-1',
          type: 'single',
          prompt: 'Rumusan hipotesis: "Tidak ada perbedaan waktu penemuan rute antara Algoritma Dijkstra dan A*" termasuk dalam jenis hipotesis:',
          options: ['Descriptive', 'Comparative', 'Associative', 'Circulatory'],
          answer: 1,
          explanation: 'Meskipun bernada negatif ("tidak ada perbedaan"), hipotesis ini menguji perbedaan antara dua hal yang dibandingkan, sehingga merupakan hipotesis Comparative.',
          difficulty: 1,
          topicId: 'm3-tiga-jenis-hipotesis'
        }
      ],
      tags: ['Jenis Hipotesis', 'Descriptive', 'Comparative', 'Associative'],
      glossaryTerms: ['hipotesis-descriptive', 'hipotesis-comparative', 'hipotesis-associative']
    },
    {
      id: 'm3-tipe-error',
      moduleSlug: 'modul-3',
      slug: 'types-of-error-matriks-2x2',
      title: 'Types of Error: Kesalahan Tipe I (α) vs Tipe II (β)',
      order: 8,
      readingMinutes: 4,
      tldr: 'Tipe I (α) = Menolak H0 yang sebenarnya BENAR. Tipe II (β) = Menerima H0 yang sebenarnya SALAH. Kuncinya: periksa kondisi sebenarnya vs keputusan peneliti.',
      definition: 'Matriks keputusan uji hipotesis (Types of Error):\n- Kondisi H0 Sebenarnya BENAR:\n  * Peneliti Menerima H0 → Keputusan Benar (1 - α)\n  * Peneliti Menolak H0 → Kesalahan Tipe I (Tipe 1), probabilitas = α (taraf signifikansi)\n- Kondisi H0 Sebenarnya SALAH:\n  * Peneliti Menerima H0 → Kesalahan Tipe II (Tipe 2), probabilitas = β\n  * Peneliti Menolak H0 → Keputusan Benar (1 - β, Power of Test)\nIntinya: periksa dua hal secara terpisah: keadaan sebenarnya di populasi dan keputusan peneliti.',
      explanation: 'Analogi buatan: Bayangkan sistem alarm kebakaran kantor.\n- H0: "Kondisi normal, TIDAK ada kebakaran."\n- Kesalahan Tipe I (False Alarm): Kondisi sebenarnya tidak ada api (H0 benar), tapi alarm berbunyi keras mengevakuasi seisi gedung (Menolak H0). Panik padahal aman!\n- Kesalahan Tipe II (Missed Detection): Kondisi sebenarnya sedang ada kobaran api (H0 salah), tapi alarm tetap hening tak berbunyi (Menerima H0). Gedung terbakar tanpa ada yang tahu!',
      example: {
        text: 'H0: Algoritma A dan Algoritma B memiliki akurasi yang sama (tidak ada perbedaan nyata). Dalam kenyataan di dunia nyata, keduanya memang sama akuratnya (H0 benar). Namun karena kesalahan sampling data uji, peneliti menolak H0 dan menyatakan Algoritma A lebih unggul. Peneliti melakukan Kesalahan Tipe I.',
        isFabricated: false
      },
      pitfalls: [
        'Menukar antara Tipe I dan Tipe II dalam ujian.',
        'Lupa bahwa "α" adalah peluang Tipe I dan "β" adalah peluang Tipe II, sedangkan (1 - β) adalah kekuatan uji (power).',
        'Mengira jika H0 diterima maka otomatis pasti benar; selalu ada risiko Kesalahan Tipe II bila H0 sebenarnya salah.'
      ],
      compare: {
        headers: ['Keputusan Peneliti', 'H0 Sebenarnya BENAR', 'H0 Sebenarnya SALAH'],
        rows: [
          ['Terima H0', 'Keputusan Benar (1 - α)', 'KESALAHAN TIPE II (β)'],
          ['Tolak H0', 'KESALAHAN TIPE I (α)', 'Keputusan Benar (1 - β)']
        ]
      },
      memorize: {
        title: 'Rumus Kilat Types of Error',
        items: [
          'Tipe I (α): Menolak H0 yang sebenarnya BENAR (Alarm bunyi saat tak ada api).',
          'Tipe II (β): Menerima H0 yang sebenarnya SALAH (Alarm diam saat gedung terbakar).',
          'Keputusan Benar 1: Terima H0 saat H0 memang Benar (1 - α).',
          'Keputusan Benar 2: Tolak H0 saat H0 memang Salah (1 - β).'
        ],
        ordered: false
      },
      mnemonic: {
        text: 'Tolak yang Benar = Tipe 1; Terima yang Salah = Tipe 2',
        note: 'Mnemonik buatan'
      },
      miniQuiz: [
        {
          id: 'q-m3-8-1',
          type: 'single',
          prompt: 'Jika hipotesis nol (H0) sebenarnya benar, tetapi peneliti mengambil keputusan untuk menolak H0, kesalahan apa yang terjadi?',
          options: [
            'Kesalahan Tipe I (Alpha)',
            'Kesalahan Tipe II (Beta)',
            'Keputusan yang benar (1 - Beta)',
            'Tidak terjadi kesalahan apapun'
          ],
          answer: 0,
          explanation: 'Menolak H0 yang sebenarnya benar adalah Kesalahan Tipe I (dengan probabilitas sebasar Alpha).',
          difficulty: 1,
          topicId: 'm3-tipe-error'
        }
      ],
      tags: ['Tipe Error', 'Tipe I', 'Tipe II', 'Alpha Beta', 'Hipotesis'],
      glossaryTerms: ['kesalahan-tipe-1', 'kesalahan-tipe-2', 'hipotesis-nol', 'taraf-signifikansi']
    }
  ]
};
