import { ModuleData } from '../../types';

export const modul1: ModuleData = {
  slug: 'modul-1',
  number: 1,
  title: 'Pengantar Riset TI',
  subtitle: 'Tujuan RTI, Siklus Skripsi, Batasan CS vs IS, dan Sejarah Komputer',
  color: 'indigo',
  icon: 'BookOpen',
  description: 'Membahas pondasi riset bidang Ilmu Komputer dan Sistem Informasi: tujuan skripsi, 7 langkah proses skripsi, kriteria penilaian, CS sebagai disiplin empiris berpusat pada algoritma, 6 pertanyaan algoritma, 12 subbidang CS, batas CS vs IS, serta 5 generasi komputer.',
  estimatedMinutes: 35,
  topics: [
    {
      id: 'm1-tujuan-rti',
      moduleSlug: 'modul-1',
      slug: 'tujuan-rti-skripsi',
      title: 'Tujuan RTI & Skripsi',
      order: 1,
      readingMinutes: 4,
      tldr: 'RTI mengajarkan "belajar cara belajar" untuk menjembatani metodologi riset dan proses tugas akhir S1 menuju profesionalisme.',
      definition: 'Pembelajaran akademis mengembangkan kemampuan belajar cara belajar, agar mahasiswa terus menerima pengetahuan baru. Skripsi merupakan tahap akhir S1 untuk membangun dan menguji pengetahuan serta keahlian sebagai persiapan menjadi profesional. RTI membahas pelaku proyek skripsi, menjembatani metodologi penelitian, dan menjelaskan proses umum tugas akhir ilmu komputer.',
      explanation: 'Di perkuliahan, teknologi berkembang begitu cepat. Yang diajarkan dosen hari ini bisa usang beberapa tahun lagi. Karena itu, esensi riset dan skripsi di tingkat S1 bukan sekadar membuat aplikasi yang jalan, melainkan melatih mahasiswa berpikir sistematis dan memiliki kemandirian ilmiah untuk memecahkan persoalan baru yang belum pernah diajarkan sebelumnya. Materi pendukung RTI meliputi penulisan makalah ilmiah dan perancangan poster ilmiah.',
      example: {
        text: 'Contoh Berjalan (Portal Kampus): Mahasiswa tidak sekadar membuat web pengumuman kegiatan kampus, melainkan meneliti bagaimana arsitektur data pencarian memengaruhi efisiensi penemuan informasi oleh mahasiswa.',
        isFabricated: true
      },
      pitfalls: [
        'Menganggap skripsi hanya proyek pembuatan software/coding tanpa metodologi ilmiah.',
        'Menganggap kuliah selesai saat lulus tanpa perlu keterampilan "belajar cara belajar" mandiri.'
      ],
      compare: {
        headers: ['Aspek', 'Tugas Akhir / Skripsi', 'Proyek Coding Biasa'],
        rows: [
          ['Fokus Utama', 'Metodologi, kebaruan, pengujian ilmiah, dan argumentasi data', 'Fungsionalitas fitur software berjalan'],
          ['Tujuan Akademis', 'Menguji kemampuan belajar cara belajar dan kontribusi pengetahuan', 'Menyelesaikan pesanan/kebutuhan teknis'],
          ['Luaran Utama', 'Laporan ilmiah, naskah publikasi/poster, artefak teruji', 'Executable software / source code saja']
        ]
      },
      memorize: {
        title: '3 Aspek Kunci Tujuan RTI & Skripsi',
        items: [
          'Mengembangkan kemampuan "belajar cara belajar" secara mandiri sepanjang hayat.',
          'Membangun & menguji pengetahuan serta keahlian sebagai persiapan profesional.',
          'Menjembatani metodologi penelitian dengan proses tugas akhir (didukung makalah & poster ilmiah).'
        ],
        ordered: false
      },
      mnemonic: {
        text: 'BAP: Belajar cara belajar, Asah keahlian profesional, Proses jembatan metodologi',
        note: 'Mnemonik buatan'
      },
      miniQuiz: [
        {
          id: 'q-m1-1-1',
          type: 'single',
          prompt: 'Menurut Modul 1 RTI, apa esensi paling mendasar dari pembelajaran akademis?',
          options: [
            'Menghafal sintaks bahasa pemrograman terkini',
            'Mengembangkan kemampuan belajar cara belajar',
            'Membuat aplikasi komersial sebanyak mungkin',
            'Mendapatkan nilai IPK sempurna'
          ],
          answer: 1,
          explanation: 'Modul menegaskan bahwa pembelajaran akademis mengembangkan kemampuan "belajar cara belajar", agar mahasiswa dapat terus menerima pengetahuan baru sepanjang kariernya.',
          difficulty: 1,
          topicId: 'm1-tujuan-rti'
        }
      ],
      tags: ['Tujuan RTI', 'Skripsi', 'Fondasi'],
      glossaryTerms: ['riset', 'skripsi', 'metodologi']
    },
    {
      id: 'm1-proses-skripsi',
      moduleSlug: 'modul-1',
      slug: 'tujuh-langkah-skripsi',
      title: '7 Langkah Proses Skripsi',
      order: 2,
      readingMinutes: 4,
      tldr: 'Tujuh langkah skripsi berurutan: Proposal → Rumusan Masalah → Tujuan → Tampilkan & Analisis Data → Kesimpulan & Saran → Sidang → Versi Akhir Laporan.',
      definition: 'Tujuh langkah proses skripsi yang wajib dilalui berurutan menurut Modul: (1) Mengembangkan proposal penelitian, (2) Mengembangkan rumusan permasalahan, (3) Mengikuti tujuan penelitian yang ditetapkan, (4) Menampilkan dan menganalisis data, (5) Menarik kesimpulan dan mengidentifikasi saran penelitian lebih lanjut, (6) Menampilkan dan mempertahankan hasil penelitian dalam sidang, (7) Mempersiapkan versi akhir laporan.',
      explanation: 'Skripsi bukan pekerjaan satu malam yang acak, melainkan alur linear bertahap. Kegagalan paling umum mahasiswa adalah langsung loncat mengumpulkan data atau membuat aplikasi sebelum proposal dan rumusan masalahnya jelas. Setiap langkah mengalir ke langkah berikutnya secara logis.',
      example: {
        text: 'Pada Penelitian Portal Kampus: Dimulai dari (1) menyusun proposal kebutuhan portal, (2) merumuskan masalah lambatnya temu kembali info, (3) menetapkan tujuan komparasi algoritma temu balik, (4) mengukur kecepatan & akurasi, (5) menyimpulkan algoritma terbaik, (6) mempertanggungjawabkan di hadapan dewan penguji, dan (7) merevisi laporan akhir.',
        isFabricated: true
      },
      pitfalls: [
        'Mengumpulkan data atau menulis kesimpulan sebelum rumusan masalah dan tujuan disepakati.',
        'Mengira sidang adalah langkah terakhir; langkah ke-7 yang krusial adalah revisi dan mempersiapkan versi akhir laporan.'
      ],
      memorize: {
        title: '7 Langkah Proses Skripsi (Wajib Berurutan)',
        items: [
          '1. Mengembangkan proposal penelitian',
          '2. Mengembangkan rumusan permasalahan',
          '3. Mengikuti tujuan penelitian yang ditetapkan',
          '4. Menampilkan dan menganalisis data',
          '5. Menarik kesimpulan dan mengidentifikasi saran penelitian lebih lanjut',
          '6. Menampilkan dan mempertahankan hasil penelitian dalam sidang',
          '7. Mempersiapkan versi akhir laporan'
        ],
        ordered: true
      },
      mnemonic: {
        text: 'PRO-RU-TU-DA-SIM-SI-LAP (Proposal, Rumusan, Tujuan, Data, Kesimpulan, Sidang, Laporan akhir)',
        note: 'Mnemonik buatan'
      },
      miniQuiz: [
        {
          id: 'q-m1-2-1',
          type: 'single',
          prompt: 'Langkah terakhir (ke-7) dalam proses skripsi menurut Modul 1 adalah:',
          options: [
            'Menampilkan hasil di sidang skripsi',
            'Mempersiapkan versi akhir laporan',
            'Menarik kesimpulan dan saran',
            'Menyebarkan kuesioner kepada responden'
          ],
          answer: 1,
          explanation: 'Langkah ke-6 adalah sidang (mempertahankan hasil), sedangkan langkah ke-7 adalah mempersiapkan versi akhir laporan (revisi akhir).',
          difficulty: 1,
          topicId: 'm1-proses-skripsi'
        }
      ],
      tags: ['Langkah Skripsi', 'Alur', 'Urutan'],
      glossaryTerms: ['skripsi', 'sidang', 'proposal']
    },
    {
      id: 'm1-kriteria-penilaian',
      moduleSlug: 'modul-1',
      slug: 'kriteria-penilaian',
      title: 'Kriteria Penilaian: Umum, Laporan, Sidang, Lainnya',
      order: 3,
      readingMinutes: 4,
      tldr: 'Penilaian skripsi dibagi 4 ranah: Umum (kesesuaian & keaslian), Laporan (kejelasan, argumentasi, rujukan), Sidang (penguasaan & tanya jawab), dan Lainnya (sikap & tenggat).',
      definition: 'Kriteria penilaian skripsi mencakup: (1) Umum: kesesuaian dan keaslian topik, serta pentingnya penemuan. (2) Laporan: kejelasan isi, konsistensi antarbagian, pemahaman argumentasi pendukung keputusan, pemisahan pemikiran peneliti dan orang lain, penanganan rujukan, kesesuaian style/format. (3) Sidang: pemahaman argumentasi pendukung pernyataan dan kesimpulan, penguasaan penelitian melalui diskusi dan tanya jawab. (4) Lainnya: sikap selama sidang dan proses penelitian, pemenuhan tenggat waktu dan persyaratan formal.',
      explanation: 'Perhatikan pembeda penting: Keaslian topik berbeda dari pentingnya penemuan! Topik bisa jadi asli (belum pernah diteliti di kampus tersebut), namun penemuannya sepele. Sebaliknya, laporan yang ditata rapi secara tipografi tetap tidak bernilai tinggi jika argumentasi ilmiahnya rapuh.',
      example: {
        text: 'Peneliti membuat aplikasi pencarian jadwal. Tata letak laporan sangat rapi (format IEEE rapi), namun saat ditanya penguji mengapa memilih algoritma Trie dibanding Hash Table, peneliti tidak bisa memberi argumentasi berbasis data. Nilai sidang akan turun.',
        isFabricated: true
      },
      pitfalls: [
        'Menganggap laporan yang rapi formatnya otomatis lolos tanpa argumentasi data yang kuat.',
        'Menyamakan keaslian topik dengan pentingnya penemuan; keduanya dinilai terpisah.',
        'Mengabaikan aspek pemisahan pemikiran peneliti dengan rujukan orang lain (risiko plagiarisme).'
      ],
      compare: {
        headers: ['Kategori Penilaian', 'Fokus yang Dinilai', 'Jebakan Mahasiswa'],
        rows: [
          ['Umum', 'Kesesuaian bidang dan keaslian topik vs bobot penemuan', 'Mengira topik unik otomatis berbobot tinggi'],
          ['Laporan', 'Konsistensi bab, pemisahan ide sendiri vs sitasi, gaya format', 'Mengira font rapi menggantikan argumentasi'],
          ['Sidang', 'Argumentasi putusan dan penguasaan tanya jawab', 'Hanya menghafal slide tanpa mengerti alasan metodologis'],
          ['Lainnya', 'Sikap, etika, dan kepatuhan tenggat waktu formal', 'Meremehkan tenggat administrasi']
        ]
      },
      memorize: {
        title: '4 Kategori Kriteria Penilaian Skripsi',
        items: [
          'Umum: Kesesuaian & keaslian topik, serta pentingnya penemuan.',
          'Laporan: Kejelasan, konsistensi, argumentasi keputusan, pemisahan pemikiran, penanganan rujukan, style/format.',
          'Sidang: Pemahaman argumentasi pernyataan/kesimpulan, penguasaan materi via diskusi/tanya jawab.',
          'Lainnya: Sikap/etika riset, kepatuhan tenggat waktu, dan syarat formal institusi.'
        ],
        ordered: false
      },
      miniQuiz: [
        {
          id: 'q-m1-3-1',
          type: 'truefalse',
          prompt: 'Benar atau Salah: Laporan yang formatnya rapi dan sesuai style panduan otomatis menjamin skripsi mendapatkan nilai tinggi meskipun argumentasi pendukung keputusannya lemah.',
          answer: false,
          explanation: 'Salah. Modul secara tegas menyatakan bahwa laporan rapi tetap memerlukan argumentasi yang kuat.',
          difficulty: 1,
          topicId: 'm1-kriteria-penilaian'
        }
      ],
      tags: ['Kriteria Penilaian', 'Sidang', 'Laporan'],
      glossaryTerms: ['kriteria-penilaian', 'keaslian', 'argumentasi']
    },
    {
      id: 'm1-cs-empiris',
      moduleSlug: 'modul-1',
      slug: 'cs-disiplin-empiris',
      title: 'CS sebagai Disiplin Empiris (Newell & Simon)',
      order: 4,
      readingMinutes: 4,
      tldr: 'Menurut Newell & Simon, program/artefak baru adalah percobaan yang struktur dan karakteristiknya dipelajari secara empiris.',
      definition: 'Dalam pandangan Newell dan Simon yang disajikan modul, Computer Science (CS) merupakan disiplin empiris. Artefak baru, misalnya program komputer, dapat dipandang sebagai percobaan yang struktur dan karakteristiknya dipelajari. Rantai hafalan: artefak → percobaan → karakteristik. Sifat empiris ini tidak menghapus aspek teori dan matematis CS.',
      explanation: 'Banyak orang mengira sains empiris hanya biologi atau fisika di laboratorium alam. Newell & Simon (peraih Turing Award) menegaskan bahwa sistem komputer adalah dunia empiris buatan manusia. Setiap kita menulis algoritma atau membangun sistem (artefak), kita sedang menyiapkan percobaan untuk melihat bagaimana sistem itu berperilaku ketika diberi beban data nyata.',
      example: {
        text: 'Program pencarian indeks dijalankan pada berbagai ukuran data (1.000, 10.000, 100.000 data) untuk mengamati bagaimana konsumsi memori dan waktu eksekusinya berubah secara empiris.',
        isFabricated: false
      },
      pitfalls: [
        'Menganggap CS murni matematika teoritis tanpa kebutuhan uji empiris pada komputer.',
        'Menganggap karena empiris, landasan matematis dan analisis kompleksitas formal tidak diperlukan.'
      ],
      compare: {
        headers: ['Perspektif Teknologi CS', 'Cakupan Kajian'],
        rows: [
          ['Teori', 'Analisis numeris, struktur data, algoritma'],
          ['Penyimpanan & Manipulasi', 'Basis data dan manajemen berkas'],
          ['Hubungan Antarsoftware', 'Arsitektur perangkat lunak'],
          ['Teknik & Alat Pengembangan', 'Rekayasa perangkat lunak, bahasa pemrograman, sistem operasi']
        ]
      },
      memorize: {
        title: 'Rantai Inti CS Empiris (Newell & Simon)',
        items: [
          'Artefak: Program atau sistem komputasi baru yang dibangun.',
          'Percobaan: Menjalankan artefak di bawah kondisi terkendali.',
          'Karakteristik: Mengamati, mengukur, dan menganalisis perilaku/kinerja struktur artefak tersebut.'
        ],
        ordered: true
      },
      mnemonic: {
        text: 'A-P-K: Artefak → Percobaan → Karakteristik',
        note: 'Mnemonik buatan'
      },
      miniQuiz: [
        {
          id: 'q-m1-4-1',
          type: 'single',
          prompt: 'Dalam pandangan Newell & Simon, program komputer baru dipandang sebagai:',
          options: [
            'Produk bisnis komersial',
            'Percobaan yang struktur dan karakteristiknya dipelajari',
            'Karya seni visual tanpa aturan baku',
            'Pengganti teori matematika murni'
          ],
          answer: 1,
          explanation: 'Newell & Simon menyatakan program baru adalah artefak yang dipandang sebagai percobaan ilmiah untuk mempelajari struktur dan perilakunya.',
          difficulty: 1,
          topicId: 'm1-cs-empiris'
        }
      ],
      tags: ['Disiplin Empiris', 'Newell & Simon', 'Artefak'],
      glossaryTerms: ['artefak', 'empiris', 'komputasi']
    },
    {
      id: 'm1-cs-algoritma',
      moduleSlug: 'modul-1',
      slug: 'cs-berpusat-pada-algoritma',
      title: 'CS Berpusat pada Algoritma (Biermann, Brookshear, Schneider)',
      order: 5,
      readingMinutes: 3,
      tldr: 'CS adalah studi ilmiah tentang algoritma, bukan sekadar belajar mengetik kode atau memakai software.',
      definition: 'Biermann: CS adalah studi tentang algoritma. Brookshear: CS membangun landasan ilmiah bagi desain komputer, pemrograman, pengolahan informasi, solusi algoritmik, dan proses algoritmik. Schneider & Gersting: kajian algoritma mencakup sifat formal/matematis, realisasi hardware, realisasi bahasa, serta penerapannya.',
      explanation: 'Modul secara tegas menolak penyempitan Computer Science menjadi sekadar "studi tentang komputer fisik", "cara menulis program", atau "keterampilan memakai software aplikasi perkantoran". Dua program pengurutan yang berbeda bisa menghasilkan keluaran identik, namun algoritma di dalamnya menentukan apakah proses butuh 1 milidetik atau 1 jam.',
      example: {
        text: 'Algoritma Bubble Sort vs Quick Sort: keduanya menghasilkan array terurut yang sama, tetapi Quick Sort memiliki efisiensi waktu O(N log N) sedangkan Bubble Sort O(N^2) pada data besar.',
        isFabricated: false
      },
      pitfalls: [
        'Menyederhanakan CS sebagai tempat belajar cara mengetik syntax program (coding semata).',
        'Mengira CS adalah studi tentang merakit atau memperbaiki komputer fisik.'
      ],
      memorize: {
        title: '3 Tokoh & Definisi CS Berpusat Algoritma',
        items: [
          'Biermann: CS adalah studi tentang algoritma.',
          'Brookshear: CS membangun landasan ilmiah bagi desain komputer, pemrosesan informasi, dan solusi algoritmik.',
          'Schneider & Gersting: Mengkaji algoritma dari sifat formal, realisasi hardware, realisasi bahasa, hingga penerapan.'
        ],
        ordered: false
      },
      miniQuiz: [
        {
          id: 'q-m1-5-1',
          type: 'single',
          prompt: 'Siapa tokoh yang mendefinisikan secara singkat bahwa "CS adalah studi tentang algoritma"?',
          options: ['Biermann', 'Allen S. Lee', 'Harry King', 'Roscoe'],
          answer: 0,
          explanation: 'Biermann mendefinisikan Computer Science sebagai studi tentang algoritma.',
          difficulty: 1,
          topicId: 'm1-cs-algoritma'
        }
      ],
      tags: ['Algoritma', 'Biermann', 'Brookshear'],
      glossaryTerms: ['algoritma', 'ilmu-komputer']
    },
    {
      id: 'm1-enam-pertanyaan-algoritma',
      moduleSlug: 'modul-1',
      slug: 'enam-pertanyaan-algoritma',
      title: '6 Pertanyaan tentang Algoritma',
      order: 6,
      readingMinutes: 3,
      tldr: 'Enam pertanyaan kunci kajian algoritma: Discovery, Representation, Execution, Communication, Analysis, Limitations.',
      definition: 'Enam pertanyaan dasar tentang algoritma yang dikaji dalam Computer Science: (1) Discovery: bagaimana algoritma ditemukan atau dikembangkan? (2) Representation: bagaimana algoritma dinyatakan? (3) Execution: bagaimana algoritma dijalankan? (4) Communication: bagaimana algoritma dikomunikasikan? (5) Analysis: bagaimana sifat atau efisiensinya dianalisis? (6) Limitations: apa keterbatasannya?',
      explanation: 'Ketika seorang peneliti TI mengajukan algoritma baru, ia tidak hanya memperlihatkan kodenya, tetapi harus mampu menjawab keenam dimensi ini: darimana ide dasarnya (Discovery), dengan notasi apa ditulis (Representation), pada mesin apa dieksekusi (Execution), bagaimana tim memahami logikanya (Communication), seberapa cepat dan hemat memori (Analysis), serta pada batasan kondisi apa algoritma itu gagal atau tidak optimal (Limitations).',
      example: {
        text: 'Pada algoritma pencarian Portal Kampus: Discovery (inspirasi dari inverted index), Representation (pseudocode & diagram alur), Execution (Node.js runtime), Communication (dokumentasi API), Analysis (uji beban 10.000 query), Limitations (kurang akurat untuk ejaan salah/typo berat).',
        isFabricated: true
      },
      pitfalls: [
        'Hanya fokus pada Execution (menjalankan kode) tapi melupakan Limitations (keterbatasan algoritma).',
        'Lupa bahwa algoritma harus bisa dikomunikasikan (Communication) dan dianalisis efisiensinya secara formal (Analysis).'
      ],
      memorize: {
        title: '6 Pertanyaan tentang Algoritma (Wajib Hafal)',
        items: [
          '1. Discovery (Bagaimana algoritma ditemukan/dikembangkan?)',
          '2. Representation (Bagaimana algoritma dinyatakan?)',
          '3. Execution (Bagaimana algoritma dijalankan?)',
          '4. Communication (Bagaimana algoritma dikomunikasikan?)',
          '5. Analysis (Bagaimana sifat atau efisiensinya dianalisis?)',
          '6. Limitations (Apa keterbatasan algoritma tersebut?)'
        ],
        ordered: true
      },
      mnemonic: {
        text: 'DREC-AL (Discovery, Representation, Execution, Communication, Analysis, Limitations)',
        note: 'Mnemonik buatan'
      },
      miniQuiz: [
        {
          id: 'q-m1-6-1',
          type: 'multi',
          prompt: 'Manakah di antara pilihan berikut yang termasuk dalam 6 pertanyaan tentang algoritma menurut modul? (Pilih semua yang benar)',
          options: ['Discovery', 'Commercialization', 'Representation', 'Limitations'],
          answer: [0, 2, 3],
          explanation: 'Commercialization bukan salah satu dari 6 pertanyaan modul. Enam pertanyaan adalah Discovery, Representation, Execution, Communication, Analysis, Limitations.',
          difficulty: 2,
          topicId: 'm1-enam-pertanyaan-algoritma'
        }
      ],
      tags: ['Enam Pertanyaan', 'Algoritma', 'Hafalan'],
      glossaryTerms: ['algoritma', 'analisis-kompleksitas']
    },
    {
      id: 'm1-is-sosial-teknologi',
      moduleSlug: 'modul-1',
      slug: 'is-interaksi-sosial-teknologi',
      title: 'IS: Interaksi Isu Sosial dan Teknologi (Allen S. Lee)',
      order: 7,
      readingMinutes: 4,
      tldr: 'Information Systems (IS) berfokus pada interaksi manusia dalam organisasi dengan hardware, software, dan data.',
      definition: 'Menurut Allen S. Lee, Information Systems (IS) berkaitan dengan interaksi isu sosial dan teknologi: hubungan manusia dalam organisasi atau lingkungan sosial dengan hardware, software, dan data. Rantai hafalan: manusia → organisasi → teknologi. Tips: tentukan pusat pertanyaan penelitian, bukan hanya nama aplikasinya.',
      explanation: 'Perbedaan utama antara CS dan IS tidak terletak pada merek software atau bahasa pemrogramannya, melainkan pada pusat pertanyaan penelitiannya. Jika pertanyaan riset berpusat pada efisiensi algoritma atau arsitektur internal teknis, riset tersebut cenderung CS. Jika pertanyaan riset berpusat pada perilaku adopsi pegawai, perubahan budaya kerja organisasi, dan efektivitas proses bisnis, itu adalah IS.',
      example: {
        text: 'Tiga contoh klasifikasi dari modul:\n1. Perubahan organisasi akibat adopsi CASE tools → Cenderung IS.\n2. Fitur OO-CASE yang dibutuhkan pengembang dan kesesuaian alat → Irisan IS dan teknik CS.\n3. KOGGE untuk mengimplementasikan CASE tool pendukung metode BON → Cenderung CS (sistem teknis dan implementasi).',
        isFabricated: false
      },
      pitfalls: [
        'Mengira perbedaan CS dan IS adalah "CS ngoding, IS tidak ngoding". Keduanya bisa melibatkan coding, bedanya adalah pusat pertanyaan penelitian.',
        'Menentukan bidang hanya dari nama aplikasi yang dibuat, bukan dari rumusan masalahnya.'
      ],
      compare: {
        headers: ['Dimensi', 'Computer Science (CS)', 'Information Systems (IS)'],
        rows: [
          ['Fokus Utama', 'Algoritma, komputasi, kehandalan struktur software/hardware', 'Manusia dalam organisasi berinteraksi dengan teknologi'],
          ['Pusat Pertanyaan', 'Seberapa cepat, aman, dan efisien algoritma bekerja?', 'Bagaimana teknologi mengubah cara kerja dan keputusan manusia?'],
          ['Rantai Inti', 'Artefak → Percobaan → Karakteristik', 'Manusia → Organisasi → Teknologi']
        ]
      },
      memorize: {
        title: 'Rantai Inti Information Systems (Allen S. Lee)',
        items: [
          'Manusia: Pengguna, pemangku kepentingan, perilaku individu.',
          'Organisasi: Struktur kerja, budaya kantor, proses bisnis.',
          'Teknologi: Hardware, software, dan data yang diintegrasikan.'
        ],
        ordered: true
      },
      mnemonic: {
        text: 'MOT: Manusia → Organisasi → Teknologi',
        note: 'Mnemonik buatan'
      },
      miniQuiz: [
        {
          id: 'q-m1-7-1',
          type: 'single',
          prompt: 'Menurut Allen S. Lee, Information Systems (IS) berpusat pada interaksi antara:',
          options: [
            'Bahasa rakitan dengan mikrokontroler',
            'Isu sosial (manusia dalam organisasi) dan teknologi',
            'Sirkuit elektronik dan vacuum tubes',
            'Desain grafis dan pemasaran produk'
          ],
          answer: 1,
          explanation: 'Allen S. Lee merumuskan IS sebagai interaksi isu sosial dan teknologi: hubungan manusia dalam organisasi dengan hardware, software, dan data.',
          difficulty: 1,
          topicId: 'm1-is-sosial-teknologi'
        }
      ],
      tags: ['IS vs CS', 'Allen S. Lee', 'Organisasi'],
      glossaryTerms: ['sistem-informasi', 'ilmu-komputer']
    },
    {
      id: 'm1-dua-belas-subbidang-cs',
      moduleSlug: 'modul-1',
      slug: 'dua-belas-subbidang-cs',
      title: '12 Subbidang Computer Science',
      order: 8,
      readingMinutes: 4,
      tldr: 'Modul mencantumkan 12 subbidang CS. Catatan penting: HCI dan Organizational Informatics tercantum sebagai subbidang CS!',
      definition: 'Dua belas subbidang Computer Science menurut modul: (1) Algorithms and Data Structures, (2) Operating Systems and Networks, (3) Artificial Intelligence and Robotics, (4) Programming Languages, (5) Graphics, (6) Computational Science, (7) Architecture, (8) Software Engineering, (9) Bioinformatics, (10) Databases and Information Retrieval, (11) Human Computer Interaction (HCI), (12) Organizational Informatics.',
      explanation: 'Catatan penting modul: Karena HCI (Human Computer Interaction) dan Organizational Informatics secara eksplisit tercantum di dalam 12 subbidang CS, maka pembeda antara CS dan IS bukanlah pemisahan mutlak/tembok kedap air. Keduanya beririsan secara dinamis.',
      example: {
        text: 'Pencarian data cepat pada portal kampus berkaitan dengan Databases and Information Retrieval; desain kemudahan navigasi antarmuka bagi mahasiswa berkaitan dengan HCI.',
        isFabricated: false
      },
      pitfalls: [
        'Menganggap HCI dan Organizational Informatics murni milik IS; modul mencantumkannya di daftar subbidang CS.',
        'Mengira subbidang CS hanya coding algoritma murni.'
      ],
      memorize: {
        title: '12 Subbidang Computer Science (Hafalan Lengkap)',
        items: [
          '1. Algorithms and Data Structures',
          '2. Operating Systems and Networks',
          '3. Artificial Intelligence and Robotics',
          '4. Programming Languages',
          '5. Graphics',
          '6. Computational Science',
          '7. Architecture',
          '8. Software Engineering',
          '9. Bioinformatics',
          '10. Databases and Information Retrieval',
          '11. Human Computer Interaction (HCI)',
          '12. Organizational Informatics'
        ],
        ordered: true
      },
      miniQuiz: [
        {
          id: 'q-m1-8-1',
          type: 'truefalse',
          prompt: 'Benar atau Salah: Menurut modul RTI, Human Computer Interaction (HCI) dan Organizational Informatics tidak termasuk dalam 12 subbidang Computer Science.',
          answer: false,
          explanation: 'Salah! Keduanya secara eksplisit tercantum sebagai subbidang ke-11 dan ke-12 dari Computer Science dalam modul.',
          difficulty: 2,
          topicId: 'm1-dua-belas-subbidang-cs'
        }
      ],
      tags: ['Subbidang CS', 'Hafalan', 'Klasifikasi'],
      glossaryTerms: ['subbidang-cs', 'hci', 'software-engineering']
    },
    {
      id: 'm1-komputasi-efisiensi',
      moduleSlug: 'modul-1',
      slug: 'komputasi-dan-efisiensi',
      title: 'Komputasi & Efisiensi Algoritma',
      order: 9,
      readingMinutes: 3,
      tldr: 'Komputasi adalah urutan langkah sederhana menuju perubahan informasi kompleks. Hardware 2x lebih cepat tidak otomatis membuat ukuran masalah yang diselesaikan 2x lebih besar!',
      definition: 'Komputasi adalah urutan langkah sederhana yang mengarah pada perubahan informasi yang kompleks. Teori komputasi melibatkan algoritma, kompleksitas, dan implikasi. Contoh uji program pada 1.000, 10.000, dan 100.000 data: pelajari perubahan waktu eksekusi serta pengaruh kemampuan hardware. Peringatan penting: Kapasitas hardware dua kali lipat tidak otomatis membuat semua ukuran masalah yang dapat diselesaikan menjadi dua kali lipat.',
      explanation: 'Jika sebuah algoritma memiliki kompleksitas eksponensial O(2^N), menggandakan kecepatan CPU hanya menambah ukuran masalah yang bisa diselesaikan sebanyak +1 atau +2 data saja, bukan 2 kali lipat! Karena itu, efisiensi algoritma selalu lebih unggul dibanding sekadar mengandalkan upgrade hardware komputer.',
      example: {
        text: 'Menguji fungsi pencarian pada 1.000 data membutuhkan 0,02 detik. Pada 100.000 data membutuhkan 20 detik jika algoritma O(N^2), tetapi hanya butuh 0,1 detik jika algoritma dioptimasi menjadi O(N log N).',
        isFabricated: false
      },
      pitfalls: [
        'Beranggapan masalah performa sistem lambat selalu bisa diatasi dengan membeli komputer/server yang 2x lebih mahal.',
        'Mengabaikan uji beban bertingkat (1.000 vs 10.000 vs 100.000).'
      ],
      memorize: {
        title: 'Poin Kunci Komputasi & Efisiensi',
        items: [
          'Komputasi: langkah sederhana menghasilkan perubahan informasi kompleks.',
          'Pilar teori: Algoritma, Kompleksitas, dan Implikasi.',
          'Hukum efisiensi: Hardware 2x lebih kuat ≠ ukuran masalah terpecahkan otomatis 2x lipat.'
        ],
        ordered: false
      },
      miniQuiz: [
        {
          id: 'q-m1-9-1',
          type: 'single',
          prompt: 'Jika kapasitas hardware komputer digandakan menjadi 2 kali lipat, apakah ukuran masalah yang dapat diselesaikan otomatis meningkat 2 kali lipat?',
          options: [
            'Ya, selalu meningkat tepat 2 kali lipat pada semua algoritma',
            'Tidak otomatis, karena sangat bergantung pada kompleksitas algoritma yang digunakan',
            'Tidak, ukuran masalah justru menurun menjadi separuhnya',
            'Ya, asalkan RAM ditambah 4 kali lipat'
          ],
          answer: 1,
          explanation: 'Modul menegaskan: Kapasitas hardware dua kali lipat tidak otomatis membuat semua ukuran masalah yang dapat diselesaikan menjadi dua kali lipat.',
          difficulty: 1,
          topicId: 'm1-komputasi-efisiensi'
        }
      ],
      tags: ['Komputasi', 'Efisiensi', 'Kompleksitas'],
      glossaryTerms: ['komputasi', 'analisis-kompleksitas']
    },
    {
      id: 'm1-sejarah-komputer',
      moduleSlug: 'modul-1',
      slug: 'periode-sejarah-lima-generasi',
      title: 'Periode Sejarah & 5 Generasi Komputer',
      order: 10,
      readingMinutes: 5,
      tldr: '3 Periode: Early (<1940), Birth (1940-1950), Modern (≥1950). 5 Generasi: Vacuum tubes → Transistor → IC → LSI/VLSI → ULSI.',
      definition: 'Tiga periode sejarah komputer: (1) Early Period (sebelum 1940): Pascaline, Jacquard loom. (2) Birth of Computers (1940-1950): ENIAC. (3) Modern Era (sejak 1950): antara lain Altair 8800 dan perkembangan 5 generasi. Rantai komponen utama 5 generasi: vacuum tubes → transistor → IC → LSI/VLSI → ULSI. Tanda tanya pada akhir generasi V (1985-?) mengikuti modul.',
      explanation: 'Bedakan secara tegas antara "3 Periode Sejarah" dan "5 Generasi Komputer". Periode membagi era waktu besar peradaban hitung, sedangkan 5 Generasi membagi lompatan teknologi komponen elektronik penyimpanan/pemrosesan.',
      example: {
        text: 'Timeline Evolusi Komponen: Tabung hampa udara yang panas dan rapuh digantikan transistor kristal silikon padat, dipadatkan menjadi sirkuit terpadu (IC), diperluas ke ribuan transistor (VLSI) di mikroprosesor PC, hingga jutaan-miliaran transistor (ULSI) di chip smartphone dan superkomputer paralel.',
        isFabricated: false
      },
      pitfalls: [
        'Menukar antara 3 Periode Sejarah dengan 5 Generasi Komputer.',
        'Mengabaikan tanda tanya pada Generasi V (1985-?) yang mencerminkan era komputasi meluas yang terus berevolusi.'
      ],
      compare: {
        headers: ['Generasi', 'Rentang Tahun', 'Komponen / Ciri Utama'],
        rows: [
          ['Generasi I', '1950 - 1957', 'Komputer komersial awal, vacuum tubes, kartu berlubang (punched cards), aritmetika biner'],
          ['Generasi II', '1957 - 1965', 'Transistor, core memories, disk penyimpanan massal, bahasa tingkat tinggi, OS awal'],
          ['Generasi III', '1965 - 1975', 'Integrated Circuits (IC), minicomputer, time-shared OS, industri software, standar kompatibilitas'],
          ['Generasi IV', '1975 - 1985', 'LSI / VLSI, microcomputer, pertumbuhan software, jaringan komputer, GUI (antarmuka grafis)'],
          ['Generasi V', '1985 - ?', 'ULSI, supercomputer paralel, laptop/smartphone, wireless, ubiquitous computing, VR, cloud, multimedia']
        ]
      },
      memorize: {
        title: 'Rantai Hafalan Komponen 5 Generasi',
        items: [
          'Gen I: Vacuum tubes (tabung hampa)',
          'Gen II: Transistor',
          'Gen III: IC (Integrated Circuits)',
          'Gen IV: LSI / VLSI',
          'Gen V: ULSI (Ultra Large Scale Integration)'
        ],
        ordered: true
      },
      mnemonic: {
        text: 'V-T-I-L-U (Vacuum tube, Transistor, IC, Lsi, Ulsi)',
        note: 'Mnemonik buatan'
      },
      sourceNote: 'Tanda tanya pada akhir generasi V (1985-?) mengikuti modul asli RTI.',
      miniQuiz: [
        {
          id: 'q-m1-10-1',
          type: 'single',
          prompt: 'Komponen teknologi kunci yang menandai era Generasi III (1965-1975) komputer adalah:',
          options: ['Vacuum tubes', 'Transistor', 'Integrated Circuits (IC)', 'ULSI'],
          answer: 2,
          explanation: 'Generasi I menggunakan vacuum tubes, Generasi II transistor, Generasi III IC, Generasi IV LSI/VLSI, dan Generasi V ULSI.',
          difficulty: 1,
          topicId: 'm1-sejarah-komputer'
        }
      ],
      tags: ['Sejarah Komputer', 'Lima Generasi', 'Hafalan'],
      glossaryTerms: ['lima-generasi', 'vacuum-tube', 'integrated-circuit', 'vlsi', 'ulsi']
    }
  ]
};
