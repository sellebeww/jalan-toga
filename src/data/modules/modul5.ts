import { ModuleData } from '../../types';

export const modul5: ModuleData = {
  slug: 'modul-5',
  number: 5,
  title: 'Studi Literatur, Referensi, dan Sitasi',
  subtitle: 'Sintesis Pustaka, 3 Macam Review, Siklus Dokumen, dan Standar Sitasi IEEE',
  color: 'blue',
  icon: 'FileText',
  description: 'Membahas tinjauan pustaka (Literature Review), kriteria kualitas literatur (relevan, mutakhir acuan 3 tahun, memadai), 4 pekerjaan review (analisis, sintesis, ringkas, bandingkan), 3 jenis review, 4 langkah studi literatur, siklus publikasi ilmiah, jenis dokumen rujukan, etika sitasi, pola peletakan sitasi, gaya rujukan (IEEE, Harvard, APA, Vancouver), serta tools Mendeley & Overleaf.',
  estimatedMinutes: 40,
  topics: [
    {
      id: 'm5-literature-review',
      moduleSlug: 'modul-5',
      slug: 'definisi-literature-review',
      title: 'Literature Review: Hakikat & Peran',
      order: 1,
      readingMinutes: 4,
      tldr: 'Literature review = uraian teori, temuan, dan bahan acuan sebagai landasan & kerangka pemikiran masalah. Menumpuk ringkasan artikel belum sintesis!',
      definition: 'Literature review adalah uraian teori, temuan, dan bahan penelitian dari acuan yang menjadi landasan kegiatan penelitian serta kerangka pemikiran untuk masalah yang telah dirumuskan. Telusur pustaka membantu menghindari duplikasi penelitian yang sia-sia. Peringatan penting modul: Menumpuk ringkasan satu artikel per paragraf belum menunjukkan sintesis!',
      explanation: 'Banyak mahasiswa membuat kesalahan dengan menulis bab 2 seperti daftar bibliografi berjalan: "Peneliti A mengatakan X pada tahun 2021. Peneliti B mengatakan Y pada tahun 2022." Ini baru ringkasan terpisah. Literature review yang sesungguhnya adalah menganyam (mensintesis) pandangan-pandangan tersebut untuk menunjukkan di mana letak celah (research gap) yang akan diselesaikan oleh skripsi Anda.',
      example: {
        text: 'Untuk portal kampus, bandingkan temuan tentang pencarian informasi, kebutuhan pengguna, dan pendekatan yang relevan dengan persoalan portal: "Meskipun Peneliti A (2022) membuktikan efisiensi inverted index pada dokumen teks panjang, Peneliti B (2023) mencatat penurunan akurasi pada metadata pendek. Penelitian ini menggabungkan inverted index dengan filtering kategori untuk mengatasi keterbatasan tersebut."',
        isFabricated: false
      },
      pitfalls: [
        'Hanya menumpuk ringkasan terpisah satu artikel per paragraf tanpa menghubungkan antar-penelitian (belum sintesis).',
        'Mengabaikan studi literatur sehingga tanpa sadar meneliti hal yang sudah dipecahkan tuntas oleh orang lain (duplikasi).'
      ],
      compare: {
        headers: ['Aspek', 'Pencarian Literatur (Search)', 'Tinjauan Literatur (Review)'],
        rows: [
          ['Definisi', 'Proses menemukan sumber referensi yang relevan', 'Pengolahan, telaah, dan sintesis isi sumber'],
          ['Aktivitas', 'Query kata kunci di IEEE Xplore, Google Scholar', 'Menganalisis, membandingkan, dan mengkritisi argumen'],
          ['Keluaran', 'Kumpulan berkas PDF referensi', 'Naskah Bab 2 yang kohesif dan menunjukkan gap']
        ]
      },
      memorize: {
        title: '3 Tujuan Pokok Literature Review',
        items: [
          '1. Membangun landasan teori dan kerangka pemikiran yang kokoh.',
          '2. Menghindari duplikasi penelitian yang sudah pernah dilakukan.',
          '3. Menunjukkan posisi kontribusi dan orisinalitas riset kita.'
        ],
        ordered: false
      },
      miniQuiz: [
        {
          id: 'q-m5-1-1',
          type: 'single',
          prompt: 'Apa kritik utama modul terhadap mahasiswa yang menulis Bab 2 dengan cara merangkum satu artikel di setiap paragraf secara berurutan?',
          options: [
            'Tulisan tersebut terlalu panjang',
            'Menumpuk ringkasan satu artikel per paragraf belum menunjukkan sintesis',
            'Font yang digunakan pasti salah',
            'Artikel yang dikutip tidak boleh berbahasa Inggris'
          ],
          answer: 1,
          explanation: 'Modul menegaskan: Menumpuk ringkasan satu artikel per paragraf belum menunjukkan sintesis ilmiah yang menghubungkan dan membandingkan temuan.',
          difficulty: 1,
          topicId: 'm5-literature-review'
        }
      ],
      tags: ['Literature Review', 'Sintesis', 'Kerangka Pemikiran'],
      glossaryTerms: ['literature-review', 'sintesis-literatur', 'literature-search']
    },
    {
      id: 'm5-kualitas-literatur',
      moduleSlug: 'modul-5',
      slug: 'kualitas-literatur-dan-pekerjaan-review',
      title: 'Kualitas Literatur & 4 Pekerjaan Review',
      order: 2,
      readingMinutes: 4,
      tldr: 'Kualitas literatur: Relevan, Mutakhir (acuan 3 tahun terakhir menurut modul), Memadai. 4 Pekerjaan review: Analisis, Sintesis, Ringkas, Bandingkan.',
      definition: 'Kriteria kualitas acuan literatur:\n1. Relevan: Berhubungan langsung dengan masalah dan tujuan penelitian.\n2. Mutakhir: Modul menggunakan acuan tiga tahun terakhir.\n3. Memadai: Cukup untuk membangun landasan dan argumentasi yang kuat.\nEmpat pekerjaan dalam melakukan review:\n1. Analisis: Mengurai kontribusi dan metodologi tiap artikel.\n2. Sintesis: Menghubungkan temuan-temuan terpisah menjadi satu pemahaman baru.\n3. Ringkas: Memadatkan isi inti tanpa menghilangkan esensi temuan.\n4. Bandingkan: Mempertemukan persamaan, perbedaan, dan pertentangan hasil penelitian.',
      explanation: 'Peringatan keakuratan: Modul RTI menyebut acuan mutakhir adalah 3 tahun terakhir. Dalam komunitas akademik global, batas kemutakhiran biasanya berkisar 3-5 tahun untuk artikel bidang komputer yang sangat dinamis, kecuali untuk karya seminal (buku klasik/teori dasar).',
      example: {
        text: 'Dalam meneliti algoritma pencarian: Peneliti mengurai cara kerja 5 jurnal (analisis), merangkum intinya (ringkas), mengontraskan hasil akurasinya (bandingkan), lalu menyatukan temuan tersebut untuk mendukung hipotesis rancangan portal (sintesis).',
        isFabricated: false
      },
      pitfalls: [
        'Mengutip artikel yang sangat lama (di atas 10 tahun) untuk topik tren teknologi web yang sudah usang.',
        'Mengutip artikel hanya karena judulnya mirip, padahal isinya tidak relevan dengan pertanyaan riset.'
      ],
      compare: {
        headers: ['Kriteria Kualitas', 'Arti Menurut Modul RTI'],
        rows: [
          ['Relevan', 'Berhubungan erat dengan masalah dan tujuan yang dirumuskan'],
          ['Mutakhir', 'Keterkinian waktu terbit (modul menggunakan acuan 3 tahun terakhir)'],
          ['Memadai', 'Jumlah dan kedalaman cukup untuk menopang seluruh argumentasi']
        ]
      },
      memorize: {
        title: '4 Pekerjaan Review (Hafalan Wajib)',
        items: [
          '1. Analisis: Mengurai kontribusi tiap penelitian secara cermat.',
          '2. Sintesis: Menghubungkan berbagai temuan menjadi kerangka utuh.',
          '3. Ringkas: Memadatkan isi penting secara padat dan jelas.',
          '4. Bandingkan: Mempertemukan hasil, kelebihan, dan kelemahan antar-penelitian.'
        ],
        ordered: true
      },
      sourceNote: 'Batasan "mutakhir 3 tahun terakhir" adalah panduan spesifik yang tercantum dalam modul RTI.',
      mnemonic: {
        text: 'A-S-R-B: Analisis, Sintesis, Ringkas, Bandingkan',
        note: 'Mnemonik buatan'
      },
      miniQuiz: [
        {
          id: 'q-m5-2-1',
          type: 'single',
          prompt: 'Berapa tahun acuan kemutakhiran literatur yang secara spesifik dicantumkan dalam modul RTI?',
          options: ['1 tahun terakhir', '3 tahun terakhir', '10 tahun terakhir', 'Bebas tahun berapa saja'],
          answer: 1,
          explanation: 'Modul 5 secara spesifik menyebut: "Mutakhir: modul menggunakan acuan tiga tahun terakhir."',
          difficulty: 1,
          topicId: 'm5-kualitas-literatur'
        }
      ],
      tags: ['Kualitas Literatur', 'Mutakhir', 'Sintesis'],
      glossaryTerms: ['relevan', 'mutakhir', 'memadai', 'sintesis-literatur']
    },
    {
      id: 'm5-tiga-macam-review',
      moduleSlug: 'modul-5',
      slug: 'tiga-macam-literature-review',
      title: '3 Macam Literature Review',
      order: 3,
      readingMinutes: 3,
      tldr: '3 Macam review menurut modul: (1) Narrative literature review, (2) Qualitative systematic literature review, (3) Quantitative systematic literature review (meta-analysis).',
      definition: 'Modul mencantumkan 3 macam literature review:\n1. Narrative literature review: Tinjauan pustaka tradisional bertutur yang merangkum dan mengkritisi literatur secara komprehensif tanpa protokol seleksi ketat matematis.\n2. Qualitative systematic literature review: Tinjauan sistematis berbasis protokol eksplisit untuk menyaring, mengevaluasi, dan mensintesis bukti kualitatif/deskriptif.\n3. Quantitative systematic literature review (Meta-analysis): Tinjauan sistematis yang menggunakan teknik statistik untuk menggabungkan hasil kuantitatif dari berbagai penelitian independen.',
      explanation: 'Dalam skripsi S1 standar, mahasiswa umumnya menyusun narrative literature review di Bab 2. Namun jika topik skripsi adalah Systematic Literature Review (SLR) mengenai adopsi AI di perbankan, metodologi qualitative systematic review diterapkan. Sedangkan meta-analisis menggabungkan ukuran efek (effect size) dari puluhan eksperimen.',
      example: {
        text: 'Seorang peneliti mengumpulkan 40 eksperimen pengujian akurasi Convolutional Neural Network (CNN) pada citra medis dari berbagai jurnal, lalu menghitung rata-rata tertimbang akurasinya dengan rumus statistik: ini adalah Quantitative systematic literature review (Meta-analysis).',
        isFabricated: false
      },
      pitfalls: [
        'Mengira meta-analysis adalah analisis data kuesioner pribadi; meta-analysis adalah analisis kuantitatif atas kumpulan publikasi riset orang lain.',
        'Menyamakan narrative review dengan systematic review; systematic review memiliki protokol seleksi artikel yang sangat ketat dan dapat direplikasi.'
      ],
      memorize: {
        title: '3 Macam Literature Review Modul RTI',
        items: [
          '1. Narrative literature review (Tradisional / bertutur).',
          '2. Qualitative systematic literature review (Sistematis kualitatif).',
          '3. Quantitative systematic literature review / Meta-analysis (Sistematis kuantitatif statistik).'
        ],
        ordered: true
      },
      miniQuiz: [
        {
          id: 'q-m5-3-1',
          type: 'single',
          prompt: 'Meta-analysis menurut modul RTI diklasifikasikan ke dalam jenis literature review:',
          options: [
            'Narrative literature review',
            'Qualitative systematic literature review',
            'Quantitative systematic literature review',
            'Incidental review'
          ],
          answer: 2,
          explanation: 'Modul mencantumkan meta-analysis sebagai Quantitative systematic literature review.',
          difficulty: 1,
          topicId: 'm5-tiga-macam-review'
        }
      ],
      tags: ['Jenis Review', 'Narrative', 'Systematic', 'Meta-analysis'],
      glossaryTerms: ['narrative-review', 'systematic-review', 'meta-analysis']
    },
    {
      id: 'm5-empat-langkah-review',
      moduleSlug: 'modul-5',
      slug: 'empat-langkah-literature-review',
      title: '4 Langkah Proses Literature Review',
      order: 4,
      readingMinutes: 3,
      tldr: '4 Langkah proses literature review: Formulasi Permasalahan → Cari Literatur → Evaluasi Data → Analisis dan Interpretasi.',
      definition: 'Empat langkah literature review yang disajikan modul secara berurutan:\n1. Formulasi permasalahan: Memilih topik sesuai isu dan interest penelitian.\n2. Cari literatur: Menemukan sumber-sumber yang relevan dengan pertanyaan riset.\n3. Evaluasi data: Memeriksa kontribusi keilmuan dan keabsahan sumber yang tepat.\n4. Analisis dan interpretasi: Mendiskusikan temuan, menemukan hubungan, dan meringkas isi literatur.',
      explanation: 'Jangan mencari literatur tanpa formulasi masalah yang jelas! Jika Anda mengetik kata kunci umum seperti "Website" di mesin pencari, Anda akan dibanjiri jutaan artikel yang tidak berguna. Tentukan dulu masalah spesifiknya, baru cari, evaluasi kredibilitas penerbitnya, dan sintesis maknanya.',
      example: {
        text: 'Pada Portal Kampus:\n1. Formulasi: Mengapa pencarian kegiatan UKM lambat dan tidak tepat sasaran?\n2. Cari: Mengunduh 15 paper tentang inverted index dan semantic search di IEEE Xplore.\n3. Evaluasi: Memilih 8 paper paling mutakhir dan bereputasi tinggi.\n4. Analisis: Menyimpulkan kelebihan dan kelemahan masing-masing algoritma.',
        isFabricated: true
      },
      pitfalls: [
        'Mencari literatur tanpa batasan formulasi masalah yang jelas sehingga tersesat dalam lautan paper.',
        'Melewatkan tahap evaluasi data dan mengutip blog anonim tanpa reputasi ilmiah.'
      ],
      memorize: {
        title: '4 Langkah Literature Review (Wajib Berurutan)',
        items: [
          '1. Formulasi permasalahan (pilih topik sesuai isu & interest).',
          '2. Cari literatur (temukan sumber relevan).',
          '3. Evaluasi data (periksa kontribusi & sumber tepat).',
          '4. Analisis dan interpretasi (diskusikan, cari relasi, ringkas).'
        ],
        ordered: true
      },
      mnemonic: {
        text: 'F-C-E-A: Formulasi → Cari → Evaluasi → Analisis',
        note: 'Mnemonik buatan'
      },
      miniQuiz: [
        {
          id: 'q-m5-4-1',
          type: 'single',
          prompt: 'Langkah pertama yang harus dilakukan dalam proses literature review menurut modul adalah:',
          options: [
            'Membeli software Mendeley',
            'Formulasi permasalahan (pilih topik sesuai isu dan interest)',
            'Mencetak seluruh naskah jurnal',
            'Menulis daftar pustaka di halaman terakhir'
          ],
          answer: 1,
          explanation: 'Langkah pertama adalah formulasi permasalahan: merumuskan topik dan isu penelitian secara jelas sebelum mencari literatur.',
          difficulty: 1,
          topicId: 'm5-empat-langkah-review'
        }
      ],
      tags: ['Langkah Review', 'Proses', 'Urutan'],
      glossaryTerms: ['formulasi-permasalahan', 'evaluasi-data']
    },
    {
      id: 'm5-cycles-literature',
      moduleSlug: 'modul-5',
      slug: 'cycles-of-scientific-literature',
      title: 'Cycles of Scientific Literature',
      order: 5,
      readingMinutes: 4,
      tldr: 'Siklus literatur: Topik → Riset → Komunikasi informal → Prosiding → Jurnal → Edited volumes → Textbooks → Reference sources → Kembali ke topik.',
      definition: 'Diagram siklus literatur ilmiah menggambarkan perjalanan evolusi pengetahuan:\nPemilihan topik → Riset → Komunikasi informal → Prosiding konferensi/workshop → Artikel jurnal ilmiah → Edited volumes → Textbooks (buku teks) → Reference sources (ensiklopedia/handbook), yang kemudian kembali memberi masukan dan inspirasi pada pemilihan topik baru.\nCatatan penting modul: Diagram menunjukkan sebuah siklus evolusi literatur, bukan perintah bahwa setiap penelitian skripsi harus menerbitkan semua jenis dokumen tersebut secara berurutan. Label primary dan secondary literature ditunjukkan pada diagram tanpa uraian definisi rinci.',
      explanation: 'Mengapa siklus ini penting? Ide riset baru biasanya pertama kali diuji di ruang diskusi/komunikasi informal dan prosiding konferensi. Setelah matang, diterbitkan di jurnal bereputasi tinggi. Bertahun-tahun kemudian, teori yang telah kokoh disaring ke buku teks mahasiswa dan buku referensi. Mahasiswa S1 umumnya membaca textbook untuk memahami dasar, lalu membaca artikel jurnal dan prosiding untuk melihat batas terdepan (state-of-the-art) ilmu.',
      example: {
        text: 'Gagasan temu kembali informasi (Information Retrieval) dimulai dari riset laboratorium dan makalah konferensi SIGIR, masuk ke jurnal ACM TOIS, lalu diringkas dalam buku teks perkuliahan, dan kini menjadi bab ensiklopedia rujukan yang memicu ide riset baru.',
        isFabricated: false
      },
      pitfalls: [
        'Mengira siklus ini adalah kewajiban satu peneliti untuk menerbitkan semua 8 jenis dokumen.',
        'Mengira buku teks adalah tempat mencari riset terdepan; buku teks biasanya berisi ilmu mapan yang usianya sudah beberapa tahun sejak dipublikasikan di jurnal.'
      ],
      memorize: {
        title: 'Alur Siklus Publikasi Literatur Ilmiah',
        items: [
          '1. Pemilihan topik & pelaksanaan riset',
          '2. Komunikasi informal antar-peneliti',
          '3. Prosiding konferensi / workshop',
          '4. Artikel jurnal ilmiah bereputasi',
          '5. Edited volumes (buku kompilasi bab pakar)',
          '6. Textbooks (buku teks mata kuliah)',
          '7. Reference sources (ensiklopedia/kamus rujukan)',
          '8. Kembali menjadi inspirasi pemilihan topik baru'
        ],
        ordered: true
      },
      miniQuiz: [
        {
          id: 'q-m5-5-1',
          type: 'truefalse',
          prompt: 'Benar atau Salah: Siklus literatur ilmiah mewajibkan setiap mahasiswa skripsi untuk menerbitkan semua jenis dokumen mulai dari prosiding hingga buku teks sebelum boleh lulus.',
          answer: false,
          explanation: 'Salah! Modul secara eksplisit mengingatkan bahwa diagram menunjukkan siklus evolusi pengetahuan di dunia ilmiah, bukan perintah bahwa setiap penelitian harus menerbitkan semua jenis dokumen.',
          difficulty: 1,
          topicId: 'm5-cycles-literature'
        }
      ],
      tags: ['Cycles of Literature', 'Publikasi', 'Jurnal', 'Buku Teks'],
      glossaryTerms: ['cycles-of-literature', 'prosiding', 'jurnal-ilmiah']
    },
    {
      id: 'm5-referensi-tepat',
      moduleSlug: 'modul-5',
      slug: 'referensi-yang-tepat-dan-manfaat',
      title: 'Referensi yang Tepat: Definisi & Manfaat',
      order: 6,
      readingMinutes: 3,
      tldr: 'Referensi = deskripsi sumber informasi. Manfaat: perluasan ilmu, orisinalitas, penghargaan karya orang lain, dukungan argumen, penguasaan area.',
      definition: 'Referensi adalah deskripsi yang menjelaskan suatu sumber informasi secara lengkap. Rujukan yang benar menunjukkan: (1) perluasan pengetahuan, (2) originalitas (memperjelas mana batas ide sendiri), (3) penghargaan terhadap karya orang lain, (4) dukungan kokoh bagi argumen, dan (5) penguasaan area penelitian. Peringatan modul: Jenis dokumen saja belum menjamin relevansi. Tulisan lebih mudah ditelusuri dan umumnya telah melalui proses peer-review; sumber oral sebaiknya didukung sumber tertulis bila diperlukan.',
      explanation: 'Referensi bukan sekadar ornamen pemanis di akhir bab untuk memuaskan dosen. Tanpa referensi, tulisan ilmiah berubah menjadi opini tak berdasar. Dengan mencantumkan referensi, pembaca dapat menelusuri keaslian data dan menguji kembali argumen yang kita bangun.',
      example: {
        text: 'Ketika peneliti menyatakan bahwa "Algoritma X memiliki kompleksitas O(N log N)", pernyataan ini ditopang oleh referensi buku Cormen et al. atau paper asli penemu algoritma tersebut.',
        isFabricated: false
      },
      pitfalls: [
        'Mengandalkan desas-desus atau informasi lisan (oral) tanpa berusaha mencari dokumen tertulis resminya.',
        'Menganggap banyaknya jumlah referensi otomatis membuat skripsi bermutu tinggi meskipun referensi tersebut tidak relevan.'
      ],
      memorize: {
        title: '5 Manfaat Utama Mencantumkan Referensi Tepat',
        items: [
          '1. Menunjukkan perluasan pengetahuan ilmiah.',
          '2. Menegaskan originalitas (pemisah ide sendiri vs orang lain).',
          '3. Penghargaan etis atas karya peneliti terdahulu.',
          '4. Memberikan dukungan bukti kuat bagi setiap argumen.',
          '5. Membuktikan penguasaan area penelitian bagi penguji.'
        ],
        ordered: false
      },
      miniQuiz: [
        {
          id: 'q-m5-6-1',
          type: 'single',
          prompt: 'Menurut modul, mengapa sumber tertulis lebih diutamakan dibandingkan sumber lisan (oral) sebagai referensi ilmiah?',
          options: [
            'Karena sumber tertulis lebih mudah ditelusuri pembaca dan umumnya telah melalui proses review',
            'Karena sumber lisan dilarang total oleh undang-undang',
            'Karena mencetak tulisan lebih murah daripada berbicara',
            'Karena sumber lisan tidak memiliki hak cipta'
          ],
          answer: 0,
          explanation: 'Modul menegaskan: tulisan lebih mudah ditelusuri dan umumnya telah direview; sumber oral sebaiknya didukung sumber tertulis bila diperlukan.',
          difficulty: 1,
          topicId: 'm5-referensi-tepat'
        }
      ],
      tags: ['Referensi', 'Manfaat Rujukan', 'Etika Ilmiah'],
      glossaryTerms: ['referensi', 'peer-review', 'sitasi']
    },
    {
      id: 'm5-jenis-dokumen',
      moduleSlug: 'modul-5',
      slug: 'jenis-dokumen-referensi',
      title: 'Jenis Dokumen Referensi Ilmiah',
      order: 7,
      readingMinutes: 3,
      tldr: 'Modul menyebut 8 jenis dokumen: Jurnal, Prosiding, Tesis/Disertasi, Buku Teks, Majalah Ilmiah, Laman Web, Koran, dan Dokumen Lain (Manual/Blueprint/Commercial).',
      definition: 'Jenis-jenis dokumen referensi yang dicantumkan modul:\n1. Jurnal penelitian ilmiah (sumber primer paling direkomendasikan).\n2. Prosiding konferensi atau workshop.\n3. Tesis (S2) dan Disertasi (S3).\n4. Buku teks (textbooks).\n5. Majalah ilmiah (scientific magazines/periodicals).\n6. Laman web (harus kredibel dan berdomain resmi).\n7. Koran (untuk konteks peristiwa umum).\n8. Dokumen lain seperti manual teknis, blueprint arsitektur, dan commercial information.',
      explanation: 'Dalam skripsi TI, urutan prioritas rujukan terbaik adalah artikel jurnal bereputasi dan prosiding konferensi internasional (IEEE, ACM, Springer), disusul buku teks rujukan. Manual teknis (misal dokumentasi resmi React atau PostgreSQL) boleh dirujuk untuk detail implementasi di bab 3 dan 4.',
      example: {
        text: 'Pada skripsi Portal Kampus: Algoritma temu kembali merujuk Jurnal IEEE Trans. on Big Data [1], arsitektur sistem merujuk prosiding ICACSIS [2], teori rekayasa software merujuk buku teks Pressman [3], dan spesifikasi protokol HTTP merujuk manual RFC resmi [4].',
        isFabricated: true
      },
      pitfalls: [
        'Merujuk blog personal gratisan (seperti Blogspot/WordPress anonim) atau jawaban forum santai untuk landasan teori utama.',
        'Menganggap koran setara dengan jurnal ilmiah dalam pembuktian algoritma komputer.'
      ],
      memorize: {
        title: '8 Jenis Dokumen Referensi Menurut Modul',
        items: [
          '1. Jurnal penelitian ilmiah',
          '2. Prosiding konferensi / workshop',
          '3. Tesis dan disertasi',
          '4. Buku teks akademis',
          '5. Majalah ilmiah',
          '6. Laman web resmi',
          '7. Koran',
          '8. Dokumen lain: manual teknis, blueprint, commercial information'
        ],
        ordered: false
      },
      miniQuiz: [
        {
          id: 'q-m5-7-1',
          type: 'multi',
          prompt: 'Manakah di antara dokumen berikut yang secara eksplisit tercantum dalam daftar jenis dokumen referensi di slide Modul 5? (Pilih semua yang benar)',
          options: ['Jurnal penelitian ilmiah', 'Prosiding konferensi', 'Manual, blueprint, dan commercial info', 'Postingan media sosial pribadi'],
          answer: [0, 1, 2],
          explanation: 'Jurnal, prosiding, serta manual/blueprint/commercial information secara eksplisit ada di slide Modul 5.',
          difficulty: 1,
          topicId: 'm5-jenis-dokumen'
        }
      ],
      tags: ['Jenis Dokumen', 'Rujukan', 'Sumber Data'],
      glossaryTerms: ['jurnal-ilmiah', 'prosiding', 'manual-teknis']
    },
    {
      id: 'm5-sitasi-daftar-referensi',
      moduleSlug: 'modul-5',
      slug: 'sitasi-dan-daftar-referensi',
      title: 'Sitasi & Etika Pengutipan',
      order: 8,
      readingMinutes: 4,
      tldr: 'Sitasi = penggunaan rujukan dalam teks untuk memisahkan karya sendiri vs orang lain. Mengubah kata-kata TIDAK mengubah asal gagasan!',
      definition: 'Sitasi ialah penggunaan referensi di dalam isi tulisan untuk membedakan pekerjaan/pemikiran penulis dan orang lain. Semua pernyataan dan hasil penelitian yang berasal dari orang lain wajib disebutkan sumbernya. Kaidah emas etika akademik: Mengubah kata-kata (parafrasa) tidak mengubah asal gagasannya! Pasangan istilah pengutipan: Kutipan langsung (direct quotation) vs Gagasan yang disusun ulang (paraphrasing). Keduanya tetap wajib mencantumkan sitasi.',
      explanation: 'Banyak mahasiswa terjebak plagiarisme karena mengira jika mereka telah menulis ulang sebuah kalimat dengan kata-kata sendiri (parafrasa), mereka tidak perlu lagi menyitir penulis aslinya. Ini keliru besar. Kalimat baru Anda tetap meminjam konsep orang lain, sehingga sumber asli wajib dicantumkan.',
      example: {
        text: '"Menurut Peneliti A (2023), algoritma hashing lebih tahan benturan data..." adalah pola pengenalan gagasan dari sumber, bukan bukti bahwa gagasan itu milik penulis laporan.',
        isFabricated: false
      },
      pitfalls: [
        'Mengira bahwa jika teks sudah diparafrasa, nama penulis asli tidak perlu lagi dicantumkan.',
        'Mengutip langsung kata per kata secara panjang tanpa tanda kutip atau indentasi khusus.'
      ],
      compare: {
        headers: ['Bentuk Pengutipan', 'Ciri Penulisan', 'Kewajiban Sitasi'],
        rows: [
          ['Kutipan Langsung', 'Kata demi kata persis aslinya, diapit tanda kutip', 'Wajib menyertakan sumber & halaman spesifik'],
          ['Gagasan Disusun Ulang (Parafrasa)', 'Disampaikan dengan gaya bahasa penulis sendiri', 'Tetap WAJIB menyertakan sumber rujukan']
        ]
      },
      memorize: {
        title: 'Prinsip Kunci Sitasi Ilmiah',
        items: [
          'Sitasi memisahkan pemikiran peneliti sendiri dengan pemikiran orang lain.',
          'Mengubah kata-kata tidak menghapus kewajiban menyebutkan asal gagasan.',
          'Kutipan langsung maupun parafrasa wajib memiliki sitasi.',
          'Daftar referensi di akhir harus selaras persis dengan apa yang disitasi di badan teks.'
        ],
        ordered: false
      },
      miniQuiz: [
        {
          id: 'q-m5-8-1',
          type: 'truefalse',
          prompt: 'Benar atau Salah: Jika seorang peneliti mengubah seluruh kata-kata dari sebuah artikel jurnal ke dalam susunan kalimatnya sendiri (parafrasa), ia tidak perlu lagi mencantumkan sitasi ke artikel asli tersebut.',
          answer: false,
          explanation: 'Salah! Modul secara tegas menyatakan: "Semua pernyataan dan hasil penelitian orang lain perlu disebutkan sumbernya. Mengubah kata-kata tidak mengubah asal gagasannya."',
          difficulty: 1,
          topicId: 'm5-sitasi-daftar-referensi'
        }
      ],
      tags: ['Sitasi', 'Etika Pengutipan', 'Parafrasa', 'Plagiarisme'],
      glossaryTerms: ['sitasi', 'daftar-pustaka', 'parafrasa']
    },
    {
      id: 'm5-pola-sitasi',
      moduleSlug: 'modul-5',
      slug: 'pola-sitasi-dalam-modul',
      title: 'Pola Penempatan Sitasi dalam Modul',
      order: 9,
      readingMinutes: 4,
      tldr: 'Posisi sitasi: sebelum tanda baca, tempat logis dalam kalimat, struktur kalimat ("Menurut A..."), sebelum daftar item, dan ikuti kutipan langsung. Hindari menaruh sitasi hanya di akhir kalimat suatu paragraf!',
      definition: 'Modul menunjukkan beberapa posisi penempatan sitasi yang tepat:\n1. Sebelum tanda baca (titik/koma).\n2. Pada tempat logis dalam kalimat untuk memperjelas batas klaim.\n3. Sebagai bagian struktur kalimat (misal: "Menurut Scholtz [2]...").\n4. Sebelum daftar item berbutir.\n5. Mengikuti kutipan langsung.\nPeringatan khusus Slide 14: Hindari menempatkan sitasi hanya pada akhir kalimat suatu paragraf! Cakupan sumber dalam teks harus selalu jelas, agar pembaca tahu kalimat mana milik peneliti dan kalimat mana yang disandarkan pada literatur.',
      explanation: 'Jika Anda meletakkan sitasi [1] di ujung paling akhir satu paragraf yang terdiri dari 5 kalimat, pembaca tidak dapat membedakan: apakah kelima kalimat itu berasal dari [1], atau hanya kalimat terakhir saja? Meletakkan sitasi secara spesifik di tempat logis kalimat membuat batas klaim sangat transparan.',
      example: {
        text: 'Pola yang benar:\n- Di dalam struktur kalimat: "Scholtz [2] menyatakan bahwa evaluasi antarmuka membutuhkan minimal 5 pengguna terlatih."\n- Sebelum tanda baca: "Pendekatan pencarian tersebut telah dievaluasi pada dataset berskala besar [1]."',
        isFabricated: false
      },
      pitfalls: [
        'Menumpuk seluruh nomor sitasi hanya di akhir paragraf tanpa memperjelas klaim mana yang didukung.',
        'Meletakkan nomor sitasi sesudah tanda titik (misal: "...selesai.[1]" - dalam IEEE yang benar adalah "...selesai [1].").'
      ],
      memorize: {
        title: '5 Posisi Sitasi yang Tepat Menurut Modul',
        items: [
          '1. Sebelum tanda baca (dengan spasi sebelum kurung: "teks [1].").',
          '2. Pada tempat logis di tengah kalimat bila klaim bersumber khusus.',
          '3. Sebagai bagian struktur tata bahasa (contoh: "Menurut Smith [3]...").',
          '4. Sebelum penguraian daftar item.',
          '5. Mengikuti langsung kutipan kalimat.',
          'PERINGATAN: Hindari sitasi hanya di akhir kalimat suatu paragraf!'
        ],
        ordered: false
      },
      miniQuiz: [
        {
          id: 'q-m5-9-1',
          type: 'single',
          prompt: 'Peringatan apa yang secara eksplisit dicantumkan pada Slide 14 Modul 5 mengenai peletakan sitasi?',
          options: [
            'Hindari sitasi pada awal bab',
            'Hindari sitasi pada akhir kalimat suatu paragraf agar cakupan sumber tetap jelas',
            'Sitasi hanya boleh menggunakan angka ganjil',
            'Dilarang menyebutkan nama peneliti di badan teks'
          ],
          answer: 1,
          explanation: 'Slide 14 memuat peringatan: hindari sitasi pada akhir kalimat suatu paragraf, karena cakupan sumber dalam teks harus tetap jelas bagi pembaca.',
          difficulty: 2,
          topicId: 'm5-pola-sitasi'
        }
      ],
      tags: ['Pola Sitasi', 'Slide 14', 'Format Teks'],
      glossaryTerms: ['sitasi', 'in-text-citation']
    },
    {
      id: 'm5-gaya-software',
      moduleSlug: 'modul-5',
      slug: 'gaya-rujukan-dan-software',
      title: 'Gaya Rujukan & Software Manajemen Referensi',
      order: 10,
      readingMinutes: 4,
      tldr: 'Gaya rujukan: IEEE, Harvard, APA, Vancouver/AMA. Software yang disebut modul: Mendeley & Overleaf LaTeX. Dilengkapi tabel pasangan pembeda!',
      definition: 'Gaya rujukan yang dicantumkan dalam modul:\n- IEEE (Institute of Electrical and Electronics Engineers): Angka numerik dalam kurung siku [1], berurutan sesuai kemunculan pertama di teks.\n- Harvard: Sistem penulis-tahun dalam kurung, misalnya (Smith, 2023).\n- APA (American Psychological Association): Penulis-tahun dengan format standar ilmu sosial.\n- Vancouver / AMA: Sistem penomoran numerik berurutan untuk bidang medis/sains.\nSoftware yang dicantumkan dalam modul:\n- Mendeley: Reference manager untuk mengelola berkas PDF dan sitasi otomatis.\n- Overleaf LaTeX: Platform editor LaTeX kolaboratif berbasis cloud untuk penulisan naskah ilmiah standar.',
      explanation: 'Tabel pasangan istilah Modul 5:\n1. Literature search vs Literature review: Pencarian berkas vs Pengolahan & sintesis isi berkas.\n2. Ringkasan vs Sintesis: Memadatkan isi vs Menghubungkan dan membandingkan temuan.\n3. Referensi vs Sitasi: Deskripsi entri sumber lengkap di akhir vs Penanda rujukan di dalam teks.\n4. Mutakhir vs Relevan: Keterkinian waktu terbit vs Keterhubungan langsung dengan masalah.',
      example: {
        text: 'Peneliti mengumpulkan 30 berkas PDF jurnal di Mendeley, lalu menyusun naskah tugas akhir di Overleaf LaTeX menggunakan template IEEE conference format dengan file rujukan .bib.',
        isFabricated: false
      },
      pitfalls: [
        'Mengelola daftar pustaka secara manual ketik di Word sehingga nomor sitasi berantakan saat ada penambahan sumber baru di tengah teks.',
        'Mencampuradukkan format IEEE numerik [1] dengan format Harvard (Smith, 2021) dalam satu naskah skripsi.'
      ],
      compare: {
        headers: ['Pasangan Istilah', 'Konsep Pertama', 'Konsep Kedua'],
        rows: [
          ['Search vs Review', 'Literature Search: Menemukan sumber', 'Literature Review: Mensintesis isi sumber'],
          ['Ringkasan vs Sintesis', 'Ringkasan: Memadatkan satu per satu', 'Sintesis: Menganyam perbandingan antar-sumber'],
          ['Referensi vs Sitasi', 'Referensi: Entri lengkap di daftar akhir', 'Sitasi: Penanda kutipan di badan teks'],
          ['Mutakhir vs Relevan', 'Mutakhir: Waktu terbit baru (3 tahun)', 'Relevan: Berhubungan langsung dengan topik']
        ]
      },
      memorize: {
        title: 'Software & Gaya Rujukan Modul RTI',
        items: [
          'Gaya Rujukan: IEEE (numerik kurung siku), Harvard (author-date), APA, Vancouver/AMA.',
          'Software modul: Mendeley (manajemen referensi) & Overleaf LaTeX (editor naskah).',
          '4 Pasangan Pembeda: Search/Review, Ringkasan/Sintesis, Referensi/Sitasi, Mutakhir/Relevan.'
        ],
        ordered: false
      },
      miniQuiz: [
        {
          id: 'q-m5-10-1',
          type: 'single',
          prompt: 'Dua aplikasi/software pendukung studi literatur dan penulisan ilmiah yang secara spesifik dicantumkan dalam modul RTI adalah:',
          options: [
            'Photoshop dan CorelDraw',
            'Mendeley dan Overleaf LaTeX',
            'Excel dan PowerPoint',
            'Spotify dan Discord'
          ],
          answer: 1,
          explanation: 'Modul secara eksplisit mencantumkan Mendeley (manajer referensi) dan Overleaf LaTeX (editor penulisan ilmiah).',
          difficulty: 1,
          topicId: 'm5-gaya-software'
        }
      ],
      tags: ['Gaya Rujukan', 'IEEE', 'Mendeley', 'Overleaf', 'Pasangan Pembeda'],
      glossaryTerms: ['ieee-style', 'apa-style', 'harvard-style', 'mendeley', 'overleaf']
    }
  ]
};
