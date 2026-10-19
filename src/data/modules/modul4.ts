import { ModuleData } from '../../types';

export const modul4: ModuleData = {
  slug: 'modul-4',
  number: 4,
  title: 'Desain Penelitian',
  subtitle: '4 Tipe Proyek, 10 Desain Riset, Pembeda Kausal, dan Pohon Keputusan',
  color: 'amber',
  icon: 'Layers',
  description: 'Membahas klasifikasi 4 tipe proyek penelitian (Descriptive, Theory oriented, Applied, Comparison of theory and practice), hakikat desain penelitian sebagai pedoman metodologis, 10 desain/jenis riset beserta kekhususan versi modul, perbedaan krusial eksperimen vs causal-comparative, serta pohon keputusan pemilihan desain.',
  estimatedMinutes: 40,
  topics: [
    {
      id: 'm4-empat-tipe-proyek',
      moduleSlug: 'modul-4',
      slug: 'empat-tipe-proyek-riset',
      title: '4 Tipe Proyek Riset TI',
      order: 1,
      readingMinutes: 4,
      tldr: '4 Tipe Proyek: Descriptive (state-of-the-art), Theory oriented (perluas teori tanpa uji langsung), Applied (eksperimen & bukti), Comparison theory & practice (bandingkan teori vs dunia industri).',
      definition: 'Empat tipe proyek penelitian menurut modul:\n1. Descriptive projects: Menyajikan keadaan terkini (state-of-the-art), mengelompokkan atau membandingkan riset-riset terdahulu, atau memahami faktor-faktor penting pada area tertentu.\n2. Theory oriented: Memperluas teori/model atau membandingkan dua model konseptual tanpa uji langsung, namun model harus dapat diterapkan pada lingkungan uji coba.\n3. Applied: Membangun penerapan pembuktian (proof-of-concept) dan memperoleh pengalaman/hasil eksperimen nyata.\n4. Comparison of theory and practice: Membandingkan teori atau pemodelan teoritis dengan kenyataan penerapan nyata di perusahaan atau organisasi lapangan.\nCatatan modul: Proyek dapat menggabungkan beberapa tipe. Descriptive project tidak otomatis sama dengan survey research!',
      explanation: 'Dalam skripsi TI di Indonesia, sebagian besar mahasiswa membuat proyek tipe "Applied" (membangun sistem pembuktian lalu menguji kinerjanya) atau "Comparison of theory and practice" (menerapkan framework tata kelola TI di instansi lalu membandingkan hasil lapangan dengan teori). Namun ada pula skripsi "Descriptive" berupa tinjauan sistematis state-of-the-art atau "Theory oriented" memformulasikan variasi algoritma kriptografi.',
      example: {
        text: 'Contoh pada Portal Kampus:\n- Pemetaan riset portal informasi terkini: Descriptive project.\n- Memperluas model konseptual penerimaan teknologi portal: Theory oriented.\n- Menguji penerapan algoritma caching baru pada server portal: Applied project.\n- Membandingkan teori perancangan arsitektur microservices portal dengan praktik nyata di Puskom: Comparison of theory and practice.',
        isFabricated: false
      },
      pitfalls: [
        'Menyamakan descriptive project dengan survey research. Descriptive project adalah tipe orientasi proyek, sedangkan survey adalah metode pengumpulan data.',
        'Mengira skripsi S1 dilarang menggabungkan dua tipe proyek; modul membolehkan kombinasi.'
      ],
      compare: {
        headers: ['Tipe Proyek', 'Fokus Utama', 'Keluaran Inti'],
        rows: [
          ['Descriptive', 'Menyajikan state-of-the-art riset terdahulu', 'Peta taksonomi & faktor penting terkini'],
          ['Theory Oriented', 'Memperluas atau membandingkan teori/model', 'Kerangka teori baru yang siap diuji'],
          ['Applied', 'Membangun aplikasi pembuktian & eksperimen', 'Artefak sistem & bukti hasil pengujian nyata'],
          ['Theory & Practice', 'Bandingkan model teori dengan kenyataan kantor', 'Analisis kesenjangan (gap) teori vs praktik']
        ]
      },
      memorize: {
        title: '4 Tipe Proyek Penelitian TI',
        items: [
          '1. Descriptive: Pemetaan state-of-the-art riset terdahulu.',
          '2. Theory oriented: Perluasan teori/model tanpa uji langsung.',
          '3. Applied: Membangun penerapan pembuktian eksperimental.',
          '4. Comparison theory & practice: Membandingkan teori dengan kenyataan lapangan.'
        ],
        ordered: false
      },
      mnemonic: {
        text: 'D-T-A-C: Descriptive, Theory, Applied, Comparison',
        note: 'Mnemonik buatan'
      },
      miniQuiz: [
        {
          id: 'q-m4-1-1',
          type: 'single',
          prompt: 'Tipe proyek yang bertujuan memperluas model atau membandingkan dua model konseptual tanpa melakukan pengujian langsung dalam proyek tersebut adalah:',
          options: ['Applied', 'Theory oriented', 'Descriptive', 'Action research'],
          answer: 1,
          explanation: 'Theory oriented berfokus memperluas atau membandingkan teori/model tanpa uji langsung, namun model harus dapat diuji di lingkungan uji coba.',
          difficulty: 1,
          topicId: 'm4-empat-tipe-proyek'
        }
      ],
      tags: ['Tipe Proyek', 'Descriptive', 'Applied', 'Theory Oriented'],
      glossaryTerms: ['tipe-proyek', 'applied-project', 'state-of-the-art']
    },
    {
      id: 'm4-pedoman-desain',
      moduleSlug: 'modul-4',
      slug: 'desain-penelitian-sebagai-pedoman',
      title: 'Desain Penelitian: Pedoman Operasional Riset',
      order: 2,
      readingMinutes: 3,
      tldr: 'Desain penelitian = pedoman penentuan instrumen, sampel, pengumpulan, dan analisis data. Desain adalah bagian dari metodologi; nama software tidak menggantikan desain!',
      definition: 'Desain penelitian adalah pedoman proses penelitian dalam penentuan instrumen, pemilihan sampel, pengumpulan data, dan analisis data. Desain merupakan bagian dari metodologi. Peringatan penting modul: Nama tools/software tidak menggantikan desain penelitian! Tipe proyek dan desain menjawab pertanyaan klasifikasi yang berbeda.',
      explanation: 'Bila metodologi adalah strategi perang menyeluruh, desain penelitian adalah cetak biru taktis operasional: berapa kelompok subjek yang dilibatkan, apakah ada kelompok kontrol yang tidak diberi perlakuan, kapan data diambil (sebelum atau sesudah), dan bagaimana variabel pengganggu dinetralkan.',
      example: {
        text: 'Tujuan membandingkan waktu respons antara pengguna antarmuka lama dan antarmuka baru memerlukan rancangan desain eksperimen terkendali (paired pretest-posttest atau two-group controlled design), bukan sekadar memilih aplikasi statistik SPSS atau Python.',
        isFabricated: false
      },
      pitfalls: [
        'Mengisi bab desain penelitian hanya dengan screenshot software tools alih-alih menjelaskan struktur kontrol eksperimen atau sampel.',
        'Menganggap tipe proyek dan desain riset adalah hal yang sama.'
      ],
      memorize: {
        title: '4 Pilar yang Ditetapkan Desain Penelitian',
        items: [
          '1. Pemilihan instrumen penelitian yang valid.',
          '2. Penentuan teknik sampling dan ukuran sampel.',
          '3. Prosedur baku pengumpulan data lapangan/sistem.',
          '4. Rancangan analisis data dan uji statistik.'
        ],
        ordered: true
      },
      miniQuiz: [
        {
          id: 'q-m4-2-1',
          type: 'truefalse',
          prompt: 'Benar atau Salah: Menuliskan nama software analisis data seperti "SPSS 26" atau "TensorFlow" sudah cukup untuk menggantikan deskripsi desain penelitian.',
          answer: false,
          explanation: 'Salah. Modul secara eksplisit mengingatkan: "Nama tools tidak menggantikan desain. Desain adalah pedoman instrumen, sampel, pengumpulan, dan analisis data."',
          difficulty: 1,
          topicId: 'm4-pedoman-desain'
        }
      ],
      tags: ['Desain Penelitian', 'Metodologi', 'Pedoman'],
      glossaryTerms: ['desain-penelitian', 'metodologi']
    },
    {
      id: 'm4-sepuluh-desain-riset',
      moduleSlug: 'modul-4',
      slug: 'sepuluh-desain-jenis-riset',
      title: '10 Desain & Jenis Riset TI (Koleksi Lengkap Modul)',
      order: 3,
      readingMinutes: 6,
      tldr: '10 Desain riset: Experimental, Quasi experimental, Causal-comparative, Correlational, Survey, Action research, Historical, Ethnographic, Case studies, plus pembeda kausalitas.',
      definition: 'Sepuluh desain/jenis riset yang disajikan modul:\n1. Experimental: Menentukan sumber/penyebab suatu pola; membandingkan kelompok kontrol (tanpa treatment) dan kelompok perlakuan; ada manipulasi variabel dan pengendalian ketat.\n2. Quasi experimental (versi modul): Eksperimen tanpa kelompok kontrol, diukur sesudah treatment, biasanya menggunakan data kualitatif, disebut "one-shot posttest with no control group".\n3. Causal-comparative: Mengkaji efek yang sudah terjadi lebih dulu, lalu menelusuri kemungkinan penyebabnya; variabel independen TIDAK dimanipulasi oleh peneliti.\n4. Correlational: Menyelidiki hubungan antarvariabel tanpa variabel kontrol, menggunakan analisis korelasi/regresi; korelasi tidak menjamin kausalitas!\n5. Survey: Mengambil sampel dari populasi menggunakan kuesioner sebagai alat pokok; analisis deskriptif dan explanatory; kekuatan: data langsung, kelemahan: jawaban responden belum tentu stabil.\n6. Action research: Berfokus pada tindakan sosial nyata; peneliti terjun langsung menyelesaikan masalah bersama organisasi.\n7. Historical: Mengumpulkan, mengevaluasi, memverifikasi, dan mensintesis bukti masa lampau untuk rekonstruksi objektif.\n8. Ethnographic: Berfokus pada kebudayaan sekelompok orang atau komunitas dalam organisasi.\n9. Case studies: Berpusat pada kasus mendalam tertentu; modul mensyaratkan data primer, dokumen tervalidasi, dan konfirmasi ke primary source.\n10. Pembeda kunci Eksperimen vs Causal-Comparative: Ada tidaknya manipulasi treatment oleh peneliti!',
      explanation: 'Poin penting modul yang sering ditanyakan dalam ujian:\n- Pembeda utama Experimental dengan Causal-Comparative adalah MANIPULASI. Dalam eksperimen, peneliti sendiri yang memanipulasi variabel (misal memberi caching pada Server A dan membiarkan Server B tanpa caching). Dalam causal-comparative, kejadian sudah terjadi di masa lalu (misal membandingkan kepuasan mahasiswa yang sudah terlanjur menggunakan Android vs iOS) tanpa manipulasi perlakuan oleh peneliti.\n- Pembeda Action Research dengan Etnografi: Action research menekankan TINDAKAN intervensi perubahan, sedangkan etnografi menekankan observasi BUDAYA kelompok.',
      example: {
        text: 'Contoh penerapan 10 desain pada Portal Kampus:\n- Experimental: Menguji 2 kelompok server (1 memakai algoritma baru, 1 kontrol).\n- Quasi experimental: Mengukur respons kepuasan pengguna tepat setelah portal baru diluncurkan tanpa kelompok kontrol.\n- Causal-comparative: Membandingkan performa akademik mahasiswa yang aktif vs tidak aktif memakai portal (perilaku sudah terjadi alami).\n- Correlational: Menghitung korelasi antara frekuensi klik dengan IPK mahasiswa.\n- Survey: Membagikan 200 kuesioner skala Likert.\n- Action research: Peneliti dan admin kampus berkolaborasi mengubah alur publikasi kegiatan dan mengevaluasi dampaknya tiap bulan.\n- Historical: Menganalisis arsip data web kampus sejak tahun 2005 untuk melihat evolusi kebutuhan berita.\n- Ethnographic: Mengamati budaya komunikasi panitia acara kampus dalam berbagi berkas pengumuman.\n- Case study: Penyelidikan mendalam pada BEM Fakultas Teknik yang paling aktif memanfaatkan portal.',
        isFabricated: false
      },
      pitfalls: [
        'Menyimpulkan sebab-akibat (kausalitas) dari penelitian korelasional; dua variabel berkorelasi tinggi belum tentu saling memengaruhi secara kausal.',
        'Mengira studi kasus cukup dengan mewawancarai 1 orang teman; studi kasus modul mensyaratkan dokumen tervalidasi dan konfirmasi ke primary source.',
        'Menukar antara Action Research (tindakan) dengan Etnografi (budaya).'
      ],
      compare: {
        headers: ['Desain Penelitian', 'Ada Kelompok Kontrol?', 'Manipulasi Peneliti?', 'Tujuan Utama'],
        rows: [
          ['Experimental', 'Ya, wajib', 'Ya, aktif', 'Uji sebab-akibat murni'],
          ['Quasi Experimental (modul)', 'Tidak ada', 'Ya (ada treatment)', 'One-shot posttest kualitatif/kuantitatif'],
          ['Causal-Comparative', 'Ya/Tidak (alami)', 'TIDAK ada', 'Telusuri kemungkinan penyebab dari efek yang ada'],
          ['Correlational', 'Tidak ada', 'TIDAK ada', 'Mengukur derajat hubungan linier antarvariabel'],
          ['Survey', 'Tidak ada', 'TIDAK ada', 'Memotret opini/deskripsi sampel luas'],
          ['Action Research', 'Tidak ada', 'Ya (tindakan solusi)', 'Menyelesaikan masalah praktis bersama mitra'],
          ['Case Study', 'Tidak ada', 'TIDAK ada', 'Eksplorasi holistik mendalam satu entitas kasus']
        ]
      },
      memorize: {
        title: 'Pasangan Emas Pembeda Desain Riset',
        items: [
          'Eksperimen vs Causal-Comparative: Dibedakan oleh ada/tidaknya MANIPULASI treatment.',
          'Action Research vs Etnografi: Action = Tindakan Solutif; Etnografi = Budaya Kelompok.',
          'Korelasi ≠ Kausalitas: Angka korelasi tinggi bukan bukti otomatis sebab-akibat.',
          'Quasi Experimental (versi modul): One-shot posttest tanpa kelompok kontrol.'
        ],
        ordered: false
      },
      sourceNote: 'Definisi quasi-experimental sebagai "one-shot posttest with no control group" mengikuti teks slide Modul 4 RTI.',
      miniQuiz: [
        {
          id: 'q-m4-3-1',
          type: 'single',
          prompt: 'Pembeda paling mendasar antara penelitian Experimental dengan penelitian Causal-Comparative menurut modul adalah:',
          options: [
            'Bahasa pemrograman yang digunakan peneliti',
            'Ada tidaknya manipulasi treatment oleh peneliti terhadap variabel independen',
            'Jumlah halaman laporan skripsi',
            'Tingkat kesulitan ujian sidang'
          ],
          answer: 1,
          explanation: 'Pembeda utama eksperimen dari causal-comparative adalah manipulasi treatment; pada causal-comparative efek sudah terjadi dan variabel independen tidak dimanipulasi.',
          difficulty: 1,
          topicId: 'm4-sepuluh-desain-riset'
        }
      ],
      tags: ['10 Desain Riset', 'Eksperimen', 'Causal Comparative', 'Hafalan'],
      glossaryTerms: ['experimental-research', 'quasi-experimental', 'causal-comparative', 'correlational-research', 'etnografi']
    },
    {
      id: 'm4-pohon-keputusan',
      moduleSlug: 'modul-4',
      slug: 'pohon-keputusan-desain-riset',
      title: 'Pohon Keputusan: "Penelitianku Cocok Pakai Desain Apa?"',
      order: 4,
      readingMinutes: 3,
      tldr: 'Gunakan panduan ya/tidak untuk menemukan desain riset yang tepat: manipulasi variabel? kelompok kontrol? aksi nyata? budaya? peristiwa lampau?',
      definition: 'Pohon keputusan metodologis membantu peneliti menentukan desain yang sah berdasarkan karakteristik pertanyaan riset dan kondisi pengumpulan data.',
      explanation: 'Ikuti jalur alur pertanyaan logis:\n1. Apakah Anda ingin menguji sebab-akibat dengan memberikan perlakuan (treatment) yang sengaja diubah-ubah?\n   - Ya → Apakah ada kelompok kontrol pembanding? Jika Ya = Experimental; Jika Tidak (hanya ukur setelahnya) = Quasi Experimental (versi modul).\n   - Tidak → Lanjut ke pertanyaan 2.\n2. Apakah efek/akibat sudah terjadi di lapangan dan Anda ingin mencari tahu faktor penyebabnya?\n   - Ya → Causal-Comparative.\n   - Tidak → Lanjut ke pertanyaan 3.\n3. Apakah Anda terjun langsung melakukan aksi nyata bersama subjek/organisasi untuk menyelesaikan masalah?\n   - Ya → Action Research.\n   - Tidak → Lanjut ke pertanyaan 4.\n4. Apakah fokus utama Anda adalah mengamati kebiasaan dan budaya komunitas?\n   - Ya → Ethnographic.\n   - Tidak → Lanjut ke pertanyaan 5.\n5. Apakah meneliti dokumen masa lampau?\n   - Ya → Historical.\n   - Tidak → Apakah mengeksplorasi satu kasus mendalam dengan konfirmasi dokumen primer? Ya = Case Study; Jika membagikan kuesioner ke sampel banyak orang = Survey.',
      example: {
        text: 'Peneliti membandingkan apakah mahasiswa pengguna aplikasi A lebih cepat mendapat info daripada pengguna aplikasi B dengan membuat dua ruang lab terkendali: Jalur pohon = Manipulasi treatment (Ya) + Kelompok kontrol (Ya) → Experimental Research.',
        isFabricated: true
      },
      pitfalls: [
        'Memilih eksperimen padahal tidak memiliki izin atau kemampuan memanipulasi variabel sistem.',
        'Memilih survei hanya karena merasa survei adalah jalan termudah tanpa memikirkan bias sampel.'
      ],
      memorize: {
        title: '5 Pertanyaan Kunci Pohon Keputusan',
        items: [
          '1. Apakah ada manipulasi treatment & kelompok kontrol? → Experimental',
          '2. Efek sudah terjadi, lacak penyebab tanpa manipulasi? → Causal-Comparative',
          '3. Ada aksi perbaikan nyata bersama mitra? → Action Research',
          '4. Eksplorasi mendalam 1 entitas spesifik? → Case Study',
          '5. Kuesioner terstruktur ke sampel populasi luas? → Survey'
        ],
        ordered: true
      },
      miniQuiz: [
        {
          id: 'q-m4-4-1',
          type: 'single',
          prompt: 'Seorang mahasiswa ingin meneliti faktor-faktor penyebab tingginya angka drop-out mahasiswa sistem informasi selama 5 tahun terakhir berdasarkan arsip nilai yang sudah ada tanpa memanipulasi variabel apapun. Desain yang paling tepat adalah:',
          options: ['Experimental', 'Action Research', 'Causal-Comparative', 'Quasi Experimental'],
          answer: 2,
          explanation: 'Karena efek (drop-out) sudah terjadi dan peneliti menelusuri kemungkinan penyebabnya tanpa manipulasi variabel, ini adalah Causal-Comparative.',
          difficulty: 1,
          topicId: 'm4-pohon-keputusan'
        }
      ],
      tags: ['Pohon Keputusan', 'Desain Riset', 'Pemilihan'],
      glossaryTerms: ['desain-penelitian', 'causal-comparative']
    }
  ]
};
