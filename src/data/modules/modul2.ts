import { ModuleData } from '../../types';

export const modul2: ModuleData = {
  slug: 'modul-2',
  number: 2,
  title: 'Tahapan Penelitian',
  subtitle: 'Siklus Riset, Model Linear vs Siklus, Pendekatan, dan Peran Pelaku',
  color: 'teal',
  icon: 'GitFork',
  description: 'Membahas hakikat riset, originalitas, kontribusi, piramida DIKW + Theory, model tahapan penelitian (Sequential vs Generalised, 7 tahap Sharp, Circulatory vs Evolutionary), klasifikasi Field-Approach-Nature, Kuantitatif vs Kualitatif, 4 pendekatan riset beserta jebakannya, serta peran mahasiswa, pembimbing, dan penguji (Quality evaluator vs assuror).',
  estimatedMinutes: 40,
  topics: [
    {
      id: 'm2-riset-originalitas',
      moduleSlug: 'modul-2',
      slug: 'riset-originalitas-kontribusi',
      title: 'Riset, Originalitas, dan Kontribusi',
      order: 1,
      readingMinutes: 4,
      tldr: 'Riset = investigasi asli untuk pengetahuan; Originalitas = melakukan sesuatu yang belum dilakukan; Kontribusi = membagikan temuan baru.',
      definition: 'Riset ialah investigasi asli untuk memperoleh pengetahuan dan pemahaman. Originalitas berarti melakukan sesuatu yang belum dilakukan sebelumnya. Kontribusi membagikan ide, teori, dan temuan baru untuk memperluas pengetahuan. Modul mencantumkan 4 bentuk originalitas: (1) alat/teknik/prosedur/metode, (2) eksplorasi hal yang tidak diketahui, (3) hal yang tidak diantisipasi, (4) penggunaan/interpretasi data.',
      explanation: 'Salah kaprah terbesar mahasiswa adalah mengira originalitas harus berupa penemuan spektakuler sekelas hukum gravitasi Newton. Dalam penelitian S1/TI, originalitas dapat berupa menerapkan teknik lama pada domain data baru yang belum pernah diuji, atau menemukan anomali yang tidak diantisipasi sebelumnya. Peringatan penting: Sesuatu yang "asli bagi peneliti" (karena peneliti baru pertama kali mempelajarinya) belum otomatis "asli bagi bidang ilmu"!',
      example: {
        text: 'Mempelajari algoritma TF-IDF yang sudah ada menambah pemahaman pribadi peneliti. Namun, menyelidiki bagaimana TF-IDF dimodifikasi untuk indeks informasi kegiatan kampus dwibahasa lokal yang belum pernah diteliti sebelumnya adalah bentuk originalitas yang berkontribusi.',
        isFabricated: false
      },
      pitfalls: [
        'Mengira bila suatu topik baru bagi diri sendiri, maka otomatis sudah bernilai originalitas bagi dunia akademis.',
        'Menganggap riset harus menciptakan sesuatu dari nol mutlak tanpa bertumpu pada kajian terdahulu.'
      ],
      compare: {
        headers: ['Istilah', 'Definisi Modul', 'Kunci Hafalan'],
        rows: [
          ['Riset', 'Investigasi asli untuk memperoleh pengetahuan & pemahaman', 'Investigasi asli'],
          ['Originalitas', 'Melakukan sesuatu yang belum pernah dilakukan sebelumnya', 'Belum pernah dilakukan'],
          ['Kontribusi', 'Membagikan ide, teori, temuan baru memperluas bidang ilmu', 'Membagikan temuan baru']
        ]
      },
      memorize: {
        title: '4 Bentuk Originalitas menurut Modul RTI',
        items: [
          '1. Alat / teknik / prosedur / metode baru atau yang diperbaiki.',
          '2. Eksplorasi hal yang sebelumnya tidak diketahui.',
          '3. Menemukan hal yang tidak diantisipasi sebelumnya.',
          '4. Penggunaan atau interpretasi baru terhadap data.'
        ],
        ordered: false
      },
      mnemonic: {
        text: 'AT-E-A-D (Alat/Teknik, Eksplorasi, Antisipasi, Data)',
        note: 'Mnemonik buatan'
      },
      miniQuiz: [
        {
          id: 'q-m2-1-1',
          type: 'single',
          prompt: 'Pernyataan mana yang paling tepat menggambarkan jebakan pemahaman originalitas dalam modul?',
          options: [
            'Sesuatu yang asli bagi peneliti belum otomatis asli bagi bidang ilmu',
            'Originalitas hanya boleh dibuat oleh profesor senior',
            'Riset tidak boleh membagikan ide baru kepada publik',
            'Alat baru tidak pernah dianggap sebagai bentuk originalitas'
          ],
          answer: 0,
          explanation: 'Modul menegaskan: Asli bagi peneliti belum otomatis asli bagi bidang ilmu. Perlu pembuktian melalui studi literatur mendalam.',
          difficulty: 1,
          topicId: 'm2-riset-originalitas'
        }
      ],
      tags: ['Riset', 'Originalitas', 'Kontribusi'],
      glossaryTerms: ['riset', 'originalitas', 'kontribusi']
    },
    {
      id: 'm2-dikw-theory',
      moduleSlug: 'modul-2',
      slug: 'dikw-plus-theory',
      title: 'Piramida DIKW + Theory: Data, Info, Knowledge, Wisdom, Theory',
      order: 2,
      readingMinutes: 4,
      tldr: 'Fakta mentah (Data) → Diolah bermakna (Information) → Pemahaman mendalam (Knowledge) → Tindakan bijak (Wisdom). Theory merepresentasikan ide berdasar observasi.',
      definition: 'Data adalah elemen fakta tentang objek/kejadian. Information ialah data yang diolah untuk memberi pemahaman makna. Knowledge merupakan pemahaman lebih tinggi. Wisdom ialah kemampuan merealisasikan pengetahuan dalam tindakan. Theory merepresentasikan ide, pendapat, dan pengandaian berdasarkan observasi. Rantai hafalan: fakta → makna → pemahaman → tindakan.',
      explanation: 'Dalam skripsi TI, mahasiswa sering menyajikan data mentah berupa log server atau angka kuesioner tanpa mengolahnya menjadi informasi dan pengetahuan. Menghitung rata-rata saja belum sama dengan kebijaksanaan dalam bertindak (wisdom) ataupun membangun teori penjelas.',
      example: {
        text: 'Data: Catatan waktu respons server 2, 4, dan 6 detik.\nInformasi: Rata-rata waktu respons portal adalah 4 detik.\nKnowledge: Pemahaman bahwa kelambatan terjadi akibat query database kegiatan tidak terindeks.\nWisdom: Mengambil tindakan merefaktor indeks database untuk mempercepat layanan bagi pengguna.',
        isFabricated: false
      },
      pitfalls: [
        'Hanya menyajikan angka mentah (Data) dan mengiranya sudah cukup sebagai kesimpulan penelitian.',
        'Menyamakan Informasi (data olahan/rata-rata) dengan Wisdom (kebijaksanaan tindakan nyata).'
      ],
      compare: {
        headers: ['Tingkatan', 'Sifat', 'Contoh Kasus Portal Kampus'],
        rows: [
          ['Data', 'Fakta mentah tanpa konteks', 'Angka 2, 4, 6 detik pada log'],
          ['Information', 'Data terstruktur & bermakna', 'Waktu respons rata-rata 4 detik'],
          ['Knowledge', 'Pemahaman pola sebab-akibat', 'Sebab lambat: query join tanpa indeks'],
          ['Wisdom', 'Keputusan tindakan yang tepat', 'Menata ulang arsitektur basis data'],
          ['Theory', 'Konseptualisasi observasi', 'Teori beban query pada sistem berbasis relasional']
        ]
      },
      memorize: {
        title: 'Rantai Inti DIKW + Theory',
        items: [
          'Data = Fakta (elemen fakta tentang objek/kejadian)',
          'Information = Makna (data diolah memberi arti)',
          'Knowledge = Pemahaman (pemahaman konteks yang lebih tinggi)',
          'Wisdom = Tindakan (kemampuan merealisasikan pengetahuan menjadi tindakan)',
          'Theory = Ide/pengandaian berdasarkan observasi ilmiah'
        ],
        ordered: true
      },
      mnemonic: {
        text: 'DIKW-T: Data fakta, Info makna, Knowledge paham, Wisdom tindak, Theory dalil',
        note: 'Mnemonik buatan'
      },
      miniQuiz: [
        {
          id: 'q-m2-2-1',
          type: 'single',
          prompt: 'Kemampuan untuk merealisasikan pengetahuan ke dalam bentuk tindakan nyata dalam piramida DIKW disebut:',
          options: ['Information', 'Knowledge', 'Wisdom', 'Theory'],
          answer: 2,
          explanation: 'Wisdom adalah kemampuan merealisasikan pengetahuan dalam tindakan bijak.',
          difficulty: 1,
          topicId: 'm2-dikw-theory'
        }
      ],
      tags: ['DIKW', 'Knowledge', 'Wisdom', 'Theory'],
      glossaryTerms: ['data', 'informasi', 'knowledge', 'wisdom', 'teori']
    },
    {
      id: 'm2-sequential-generalised',
      moduleSlug: 'modul-2',
      slug: 'sequential-vs-generalised',
      title: 'Sequential vs Generalised Model',
      order: 3,
      readingMinutes: 3,
      tldr: 'Sequential = alur linear kaku berurutan. Generalised = tetap berstruktur namun menyediakan rute alternatif/fleksibel.',
      definition: 'Sequential adalah tahapan kegiatan linear dan berurutan dari awal sampai akhir. Generalised tetap mengenali kegiatan-kegiatan riset, tetapi menyediakan rute alternatif, penerapan berbeda, atau tahap yang tidak berlaku sesuai sifat dan keluaran riset. Generalised bukan berarti riset berjalan tanpa struktur.',
      explanation: 'Dalam model sequential murni, seorang peneliti harus menyelesaikan tahap A secara tuntas sebelum boleh melangkah ke tahap B. Namun dalam kenyataan riset komputer, model generalised sering terjadi: misalnya tahap pengumpulan data berbeda karena memakai simulasi alih-alih survei manusia, sehingga rute disesuaikan.',
      example: {
        text: 'Jika penelitian menguji performa algoritma kompresi, tahap "penyusunan kuesioner manusia" dalam model standar dilewati dan diganti rute pengujian benchmark dataset sintetis.',
        isFabricated: true
      },
      pitfalls: [
        'Mengira model generalised berarti peneliti boleh bekerja semaunya tanpa metodologi yang jelas.',
        'Memaksakan tahapan yang tidak relevan hanya demi meniru urutan linear kaku.'
      ],
      compare: {
        headers: ['Karakteristik', 'Sequential Model', 'Generalised Model'],
        rows: [
          ['Sifat Alur', 'Linear, langkah per langkah kaku', 'Menyediakan rute alternatif & cabang'],
          ['Fleksibilitas', 'Rendah (harus selesai satu per satu)', 'Tinggi (menyesuaikan keluaran & jenis riset)'],
          ['Struktur', 'Tunggal dan seragam', 'Tetap terstruktur namun adaptif'],
          ['Contoh Model', 'Model 7 tahap Sharp', 'Model 11 tahap Kane']
        ]
      },
      memorize: {
        title: 'Poin Pembeda Sequential vs Generalised',
        items: [
          'Sequential: Alur linear bertahap dari awal hingga akhir tanpa cabang.',
          'Generalised: Menyediakan rute alternatif dan tahapan adaptif sesuai jenis riset.',
          'Ingat: Generalised tetap berstruktur ketat, bukan ketiadaan metodologi.'
        ],
        ordered: false
      },
      miniQuiz: [
        {
          id: 'q-m2-3-1',
          type: 'truefalse',
          prompt: 'Benar atau Salah: Model penelitian generalised berarti penelitian boleh berjalan bebas tanpa struktur perencanaan.',
          answer: false,
          explanation: 'Salah. Generalised tetap mengenali kegiatan riset secara terstruktur, namun menyediakan rute alternatif sesuai kebutuhan riset.',
          difficulty: 1,
          topicId: 'm2-sequential-generalised'
        }
      ],
      tags: ['Sequential', 'Generalised', 'Tahapan Riset'],
      glossaryTerms: ['sequential', 'generalised']
    },
    {
      id: 'm2-tujuh-tahap-sharp',
      moduleSlug: 'modul-2',
      slug: 'tujuh-tahap-sequential-sharp',
      title: '7 Tahap Sequential Model (Sharp)',
      order: 4,
      readingMinutes: 4,
      tldr: 'Model Sharp memiliki 7 tahap berurutan: Broad area → Topic → Approach → Plan → Gather data → Analyse & interpret → Present results.',
      definition: 'Tujuh tahap sequential menurut model Sharp (hafalan berurutan): (1) Identify the broad area of study (identifikasi bidang luas), (2) Select a research topic (pilih topik), (3) Decide on an approach (tentukan pendekatan), (4) Plan how you will perform the research (rencanakan pelaksanaan), (5) Gather data and information (kumpulkan data/informasi), (6) Analyse and interpret these data (analisis dan interpretasi), (7) Present the results and findings (sajikan hasil dan temuan). Model Kane yang disebut modul memiliki 11 tahap dengan alternatif metode.',
      explanation: 'Perhatikan bahwa Sharp menempatkan penentuan pendekatan (approach) sebelum menyusun rencana rinci (plan), dan pengumpulan data dilakukan setelah perencanaan matang. Mahasiswa yang sukses selalu mengikuti alur logis ini.',
      example: {
        text: 'Penerapan Sharp pada Portal Kampus:\n1. Broad Area: Information Retrieval / Web Systems\n2. Topic: Optimasi Pencarian Info Kegiatan Kampus\n3. Approach: Eksperimental & Survei Kepuasan\n4. Plan: Menyiapkan dataset kegiatan dan kuesioner Likert\n5. Gather: Mengambil log pencarian dan respons pengguna\n6. Analyse: Menghitung latensi dan reliabilitas instrumen\n7. Present: Menulis laporan skripsi dan naskah publikasi',
        isFabricated: true
      },
      pitfalls: [
        'Langsung memilih topik spesifik tanpa memahami peta bidang ilmu yang luas (broad area).',
        'Mengumpulkan data sebelum merencanakan metode analisis dan interpretasinya.'
      ],
      memorize: {
        title: '7 Tahap Sequential Sharp (Wajib Hafal Berurutan)',
        items: [
          '1. Identify the broad area of study (Identifikasi bidang luas)',
          '2. Select a research topic (Pilih topik penelitian)',
          '3. Decide on an approach (Tentukan pendekatan)',
          '4. Plan how you will perform the research (Rencanakan pelaksanaan)',
          '5. Gather data and information (Kumpulkan data & informasi)',
          '6. Analyse and interpret these data (Analisis & interpretasi)',
          '7. Present the results and findings (Sajikan hasil & temuan)'
        ],
        ordered: true
      },
      mnemonic: {
        text: 'B-T-A-P-G-A-P: Broad area, Topic, Approach, Plan, Gather, Analyse, Present',
        note: 'Mnemonik buatan'
      },
      miniQuiz: [
        {
          id: 'q-m2-4-1',
          type: 'single',
          prompt: 'Dalam 7 tahap sequential model Sharp, apa yang dilakukan setelah memilih topik penelitian (Select a research topic)?',
          options: [
            'Gather data and information',
            'Decide on an approach',
            'Present the results',
            'Analyse and interpret data'
          ],
          answer: 1,
          explanation: 'Setelah memilih topik (langkah 2), langkah ke-3 adalah menentukan pendekatan penelitian (Decide on an approach).',
          difficulty: 1,
          topicId: 'm2-tujuh-tahap-sharp'
        }
      ],
      tags: ['Model Sharp', 'Tahap Sequential', 'Urutan'],
      glossaryTerms: ['sequential', 'pendekatan-riset']
    },
    {
      id: 'm2-circulatory-evolutionary',
      moduleSlug: 'modul-2',
      slug: 'circulatory-vs-evolutionary',
      title: 'Circulatory vs Evolutionary & Research Wheel',
      order: 5,
      readingMinutes: 4,
      tldr: 'Circulatory = lingkaran riset berkelanjutan yang kembali ke tahap awal. Evolutionary = perubahan riset seiring waktu tanpa terikat pola pengulangan sama.',
      definition: 'Circulatory memandang riset sebagai lingkaran penemuan berkelanjutan yang dapat kembali ke tahap awal (refine hipotesis lalu berputar lagi). Evolutionary menekankan perubahan riset dari waktu ke waktu tanpa wajib mengulang pola siklus atau cara analisis yang sama. Research Wheel menghubungkan conceptual framework, pertanyaan/hipotesis, pengumpulan data, analisis, dan pengembangan pemahaman. Diagram proses modul: permasalahan → pengumpulan literatur → perumusan masalah → metodologi desain → pengumpulan data → analisis → hasil → refine hipotesis, lalu berputar kembali.',
      explanation: 'Dalam dunia sains nyata, sebuah penelitian jarang selesai total dalam satu garis lurus. Temuan dari pengujian sering memunculkan pertanyaan baru. Jika peneliti mengulangi siklus metodologi yang sama untuk memperdalam temuan, itu adalah Circulatory. Namun bila temuan tersebut mengubah total paradigma dan memicu arah baru yang berevolusi dari waktu ke waktu, itu adalah Evolutionary.',
      example: {
        text: 'Temuan bahwa sistem portal lambat pada jam pendaftaran memunculkan pertanyaan baru tentang algoritma caching, lalu siklus riset diulang (Circulatory). Jika temuan berikutnya mengubah seluruh fokus dari performa teknis menjadi perubahan kebijakan pendaftaran mahasiswa, penekanannya menjadi Evolutionary.',
        isFabricated: false
      },
      pitfalls: [
        'Mengira circulatory dan evolutionary adalah dua hal yang saling meniadakan; keduanya sama-sama memandang kelanjutan riset namun berbeda pada kepatuhan pola pengulangan siklus.',
        'Menganggap hasil penelitian yang memunculkan hipotesis baru sebagai kegagalan riset.'
      ],
      compare: {
        headers: ['Dimensi', 'Circulatory Model', 'Evolutionary Model'],
        rows: [
          ['Fokus Utama', 'Siklus pengulangan penemuan kembali ke awal', 'Perubahan dan perkembangan riset seiring waktu'],
          ['Pola Pengulangan', 'Mengulang siklus (Research Wheel) yang konsisten', 'Tidak terikat pola siklus atau metode analisis yang sama'],
          ['Diagram Kunci', 'Permasalahan → Literatur → Desain → Data → Analisis → Hasil → Refine Hipotesis', 'Evolusi paradigma dan pergeseran fokus studi']
        ]
      },
      memorize: {
        title: '5 Elemen Research Wheel',
        items: [
          '1. Conceptual framework (Kerangka konseptual)',
          '2. Pertanyaan penelitian atau Hipotesis',
          '3. Pengumpulan data',
          '4. Analisis data',
          '5. Pengembangan pemahaman (lalu memperkaya framework)'
        ],
        ordered: true
      },
      miniQuiz: [
        {
          id: 'q-m2-5-1',
          type: 'single',
          prompt: 'Apa perbedaan mendasar antara model Circulatory dan Evolutionary?',
          options: [
            'Circulatory hanya untuk skripsi, evolutionary untuk disertasi',
            'Circulatory mengulang pola siklus kembali ke tahap awal, sedangkan evolutionary berkembang seiring waktu tanpa wajib mengulang pola siklus yang sama',
            'Evolutionary tidak memerlukan pengumpulan data',
            'Circulatory menolak adanya hipotesis'
          ],
          answer: 1,
          explanation: 'Sama-sama dapat berlanjut, tetapi evolutionary tidak terikat pola pengulangan yang sama seperti circulatory.',
          difficulty: 2,
          topicId: 'm2-circulatory-evolutionary'
        }
      ],
      tags: ['Circulatory', 'Evolutionary', 'Research Wheel'],
      glossaryTerms: ['circulatory', 'evolutionary', 'research-wheel']
    },
    {
      id: 'm2-field-approach-nature',
      moduleSlug: 'modul-2',
      slug: 'field-approach-nature',
      title: 'Triad Riset: Field, Approach, dan Nature',
      order: 6,
      readingMinutes: 3,
      tldr: 'Field = kelompok/bidang kajian ilmu; Approach = metode yang diterapkan; Nature = jenis kontribusi terhadap pengetahuan.',
      definition: 'Field mengidentifikasi kelompok peneliti dengan ketertarikan sama pada suatu cabang ilmu. Approach merepresentasikan metode yang diterapkan untuk memecahkan masalah. Nature berhubungan dengan jenis kontribusi terhadap pengetahuan (apakah bersifat teoritis, komparatif, evaluatif, atau terapan).',
      explanation: 'Setiap karya ilmiah yang baik dapat dipetakan ke dalam 3 koordinat ini: Di bidang mana Anda berpijak (Field), instrumen dan metode apa yang Anda pakai (Approach), dan apa hakikat sumbangsih pengetahuan yang Anda berikan (Nature).',
      example: {
        text: 'Pada Penelitian Portal Kampus:\n- Field: Information Retrieval & Human-Computer Interaction\n- Approach: Experiment (uji beban algoritma) dan Survey (kuesioner kepuasan)\n- Nature: Evaluasi empiris performa dan penerimaan sistem temu balik pada lingkungan kampus.',
        isFabricated: false
      },
      pitfalls: [
        'Menyamakan Field (bidang) dengan Approach (metode); misalnya menyebut "metode saya adalah Machine Learning" (ML adalah subbidang/teknik, bukan sekadar approach).',
        'Lupa menjelaskan Nature (hakikat kontribusi) dari hasil penelitian yang didapatkan.'
      ],
      memorize: {
        title: 'Triad Klasifikasi Penelitian',
        items: [
          'Field: Kelompok peneliti dengan ketertarikan sama (mis. Database, AI, Jaringan).',
          'Approach: Metode yang diterapkan (mis. Experiment, Survey, Action Research).',
          'Nature: Jenis kontribusi terhadap khazanah pengetahuan.'
        ],
        ordered: false
      },
      mnemonic: {
        text: 'FAN: Field (bidang), Approach (cara), Nature (hakikat kontribusi)',
        note: 'Mnemonik buatan'
      },
      miniQuiz: [
        {
          id: 'q-m2-6-1',
          type: 'single',
          prompt: 'Jika seorang mahasiswa menyatakan penelitiannya menggunakan metode eksperimen terkendali di laboratorium, elemen triad yang dimaksud adalah:',
          options: ['Field', 'Approach', 'Nature', 'Wisdom'],
          answer: 1,
          explanation: 'Metode yang diterapkan (seperti eksperimen, survei, action research) adalah elemen Approach.',
          difficulty: 1,
          topicId: 'm2-field-approach-nature'
        }
      ],
      tags: ['Field', 'Approach', 'Nature', 'Triad'],
      glossaryTerms: ['field', 'approach', 'nature']
    },
    {
      id: 'm2-kuantitatif-kualitatif',
      moduleSlug: 'modul-2',
      slug: 'quantitative-vs-qualitative',
      title: 'Kuantitatif vs Kualitatif',
      order: 7,
      readingMinutes: 4,
      tldr: 'Kuantitatif = pengukuran skala numerik & analisis statistik. Kualitatif = peningkatan pemahaman area substantif via data tidak terstruktur.',
      definition: 'Quantitative berkaitan dengan pengukuran dalam skala numerik, data terstruktur, dan analisis statistik. Qualitative berakar pada ilmu sosial dan menekankan peningkatan pemahaman atas area substantif melalui data tidak terstruktur serta wawancara atau observasi. Jebakan penting modul: Instrumen saja belum menentukan seluruh pendekatan!',
      explanation: 'Sering terjadi salah kaprah bahwa membuat kuesioner otomatis menjadikan penelitian kuantitatif. Jika kuesioner berisi pertanyaan terbuka bebas yang dianalisis secara tematik untuk memahami pengalaman subjektif, itu tetap berada pada ranah kualitatif. Sebaliknya, waktu respons milidetik dan throughput query adalah data kuantitatif murni.',
      example: {
        text: 'Mengukur waktu respons portal kampus dalam milidetik adalah fokus kuantitatif. Memahami pengalaman dan rasa frustrasi staf fakultas saat memakai sistem lama melalui wawancara mendalam adalah fokus kualitatif.',
        isFabricated: false
      },
      pitfalls: [
        'Menganggap kuesioner otomatis kuantitatif; instrumen saja belum menentukan seluruh pendekatan.',
        'Menganggap penelitian kualitatif tidak ilmiah hanya karena tidak menyajikan angka uji statistik.'
      ],
      compare: {
        headers: ['Aspek', 'Kuantitatif (Quantitative)', 'Kualitatif (Qualitative)'],
        rows: [
          ['Akar Disiplin', 'Ilmu alam, sains eksakta, matematika', 'Ilmu sosial, antropologi, psikologi'],
          ['Tipe Data', 'Numerik, terstruktur, metrik terukur', 'Teks, rekaman narasi, data tidak terstruktur'],
          ['Tujuan Analisis', 'Uji hipotesis statistik & generalisasi', 'Peningkatan pemahaman mendalam area substantif'],
          ['Instrumen Utama', 'Sensor, alat ukur sistem, skala Likert', 'Wawancara mendalam, observasi partisipatif']
        ]
      },
      memorize: {
        title: 'Poin Kunci Kuantitatif vs Kualitatif',
        items: [
          'Kuantitatif: skala numerik, data terstruktur, analisis statistik inferensial.',
          'Kualitatif: pemahaman mendalam makna, narasi tidak terstruktur, observasi/wawancara.',
          'Ingat pesan modul: Instrumen saja belum menentukan seluruh pendekatan riset!'
        ],
        ordered: false
      },
      miniQuiz: [
        {
          id: 'q-m2-7-1',
          type: 'single',
          prompt: 'Mengapa modul mengingatkan bahwa "instrumen saja belum menentukan seluruh pendekatan riset"?',
          options: [
            'Karena instrumen tidak penting dalam penelitian',
            'Karena wawancara dan kuesioner dapat digunakan dalam pendekatan kualitatif maupun kuantitatif tergantung struktur dan cara analisis datanya',
            'Karena semua riset TI wajib menggunakan sensor hardware',
            'Karena analisis data kualitatif selalu lebih cepat'
          ],
          answer: 1,
          explanation: 'Instrumen (seperti wawancara atau angket) dapat dirancang secara terstruktur/numerik atau terbuka/naratif; pendekatan ditentukan oleh bagaimana data dikonstruksi dan dianalisis.',
          difficulty: 2,
          topicId: 'm2-kuantitatif-kualitatif'
        }
      ],
      tags: ['Kuantitatif', 'Kualitatif', 'Metode'],
      glossaryTerms: ['kuantitatif', 'kualitatif']
    },
    {
      id: 'm2-empat-pendekatan',
      moduleSlug: 'modul-2',
      slug: 'empat-pendekatan-riset-dan-jebakan',
      title: '4 Pendekatan Riset: Action Research, Experiment, Case Study, Survey',
      order: 8,
      readingMinutes: 5,
      tldr: 'Action Research (tindakan kolaboratif), Experiment (sebab-akibat terkendali), Case Study (eksplorasi mendalam 1 kasus), Survey (kuesioner/sampel luas). Masing-masing punya jebakan!',
      definition: 'Empat pendekatan riset utama beserta jebakannya dalam modul:\n1. Action Research: Pembelajaran terdokumentasi dan termonitor atas tindakan untuk menyelesaikan masalah/mengubah keadaan bersama subjek; jebakan: observasi tanpa tindakan nyata belum memenuhi cirinya.\n2. Experiment: Investigasi sebab-akibat melalui tes yang dikendalikan peneliti; jebakan: sekadar melihat dua angka berbeda belum menjelaskan sebab-akibat.\n3. Case Study: Eksplorasi mendalam atas keadaan, masalah, perusahaan, atau kelompok tertentu; jebakan: jumlah kasus kecil saja belum menjamin kedalaman.\n4. Survey: Mengumpulkan data lewat kuesioner/wawancara dengan memperhatikan sampel dan rancangan pertanyaan; jebakan: survei dan kuesioner berbeda tingkat konsep.',
      explanation: 'Setiap pendekatan memiliki kecocokan masing-masing. Jangan memaksakan eksperimen jika variabel tidak bisa dikendalikan. Dan ingat: Survei adalah pendekatan metodologi penelitian, sedangkan kuesioner adalah instrumen pengumpul datanya!',
      example: {
        text: 'Contoh Berjalan Portal Kampus pada 4 pendekatan:\n- Action Research: Peneliti bersama pengelola portal merevisi alur penginputan kegiatan dan memonitor dampaknya tiap minggu.\n- Experiment: Menguji waktu pencarian antara Algoritma A vs Algoritma B pada kondisi beban server terkendali.\n- Case Study: Penyelidikan mendalam bagaimana satu fakultas tertentu mengadopsi portal dan mengatasi resistensi dosen.\n- Survey: Menyebarkan kuesioner ke 200 mahasiswa untuk mengukur tingkat kepuasan fitur portal.',
        isFabricated: true
      },
      pitfalls: [
        'Action research: Hanya melakukan observasi diam tanpa ada tindakan intervensi perubahan bersama subjek.',
        'Experiment: Menyimpulkan sebab-akibat hanya karena ada 2 angka berbeda tanpa kontrol variabel luar.',
        'Case study: Meneliti sedikit objek tapi analisinya dangkal di permukaan.',
        'Survey: Menyamakan survei (pendekatan) dengan kuesioner (instrumen).'
      ],
      compare: {
        headers: ['Pendekatan', 'Ciri Pokok', 'Jebakan Kritis Modul'],
        rows: [
          ['Action Research', 'Tindakan nyata + monitoring pembelajaran bersama organisasi', 'Observasi tanpa tindakan belum memenuhi ciri lengkap'],
          ['Experiment', 'Uji sebab-akibat dengan kontrol ketat variabel', 'Dua angka berbeda belum membuktikan hubungan kausal'],
          ['Case Study', 'Penyelidikan mendalam satu kasus / kelompok', 'Jumlah kasus kecil tidak otomatis berarti mendalam'],
          ['Survey', 'Sampel representatif populasi via kuesioner/tanya jawab', 'Survei dan kuesioner berada pada tingkatan konsep berbeda']
        ]
      },
      memorize: {
        title: '4 Pendekatan Riset & Pasangan Jebakannya',
        items: [
          'Action Research → Jebakan: Observasi tanpa tindakan.',
          'Experiment → Jebakan: 2 angka beda ≠ sebab-akibat.',
          'Case Study → Jebakan: Kasus sedikit ≠ otomatis mendalam.',
          'Survey → Jebakan: Kuesioner ≠ Survei (beda tingkat konsep).'
        ],
        ordered: false
      },
      mnemonic: {
        text: 'A-E-C-S: Action (tindak), Experiment (sebab), Case (dalam), Survey (luas)',
        note: 'Mnemonik buatan'
      },
      miniQuiz: [
        {
          id: 'q-m2-8-1',
          type: 'single',
          prompt: 'Seorang peneliti mengamati dua sistem komputer dan mencatat bahwa Sistem A mencatat skor 80 dan Sistem B mencatat 85. Apakah peneliti sudah boleh langsung menyimpulkan hubungan sebab-akibat murni?',
          options: [
            'Ya, karena angka 85 lebih besar dari 80',
            'Tidak, karena modul memperingatkan bahwa sekadar melihat dua angka berbeda belum menjelaskan sebab-akibat tanpa kendali eksperimental yang valid',
            'Ya, asalkan data dicetak dalam bentuk grafik 3D',
            'Boleh, jika mahasiswa sudah semester akhir'
          ],
          answer: 1,
          explanation: 'Jebakan eksperimen dalam modul menegaskan: sekadar melihat dua angka berbeda belum menjelaskan hubungan sebab-akibat.',
          difficulty: 1,
          topicId: 'm2-empat-pendekatan'
        }
      ],
      tags: ['Pendekatan Riset', 'Action Research', 'Experiment', 'Case Study', 'Survey'],
      glossaryTerms: ['action-research', 'experiment', 'case-study', 'survei']
    },
    {
      id: 'm2-peran-pelaku',
      moduleSlug: 'modul-2',
      slug: 'peran-mahasiswa-pembimbing-penguji',
      title: 'Peran Pelaku: Mahasiswa, Pembimbing, Penguji (Evaluator vs Assuror)',
      order: 9,
      readingMinutes: 4,
      tldr: 'Mahasiswa = motor inisiatif; Pembimbing = pemandu ilmiah (bukan pelaksana ganti); Penguji = penilai kelulusan. Model: Quality Evaluator vs Quality Assuror.',
      definition: 'Mahasiswa bertugas mengidentifikasi masalah, mencari pendekatan/solusi, serta memiliki inisiatif dan komitmen tinggi. Pembimbing membantu area subjek, mengarahkan pemikiran ilmiah, dan memonitor kemajuan (pembimbing bukan pelaksana pengganti mahasiswa!). Penguji menilai kualitas, kelebihan/kekurangan, kelulusan, dan nilai. Dua model peran penguji:\n1. Quality Evaluator: Berorientasi hasil akhir (kontribusi, kompleksitas, kegunaan, penyampaian) berdasarkan laporan/sidang; dalam model ini tidak ada komunikasi proyek selama penelitian.\n2. Quality Assuror: Mereview hasil pada beberapa tahap berkala, memahami proses kemajuan, dan ikut bertanggung jawab menilai kualitas.',
      explanation: 'Catatan penting modul: Larangan komunikasi pada Quality Evaluator adalah gambaran model teoritis dalam literatur, bukan aturan kaku semua universitas. Dalam praktik nyata di kampus, penguji sering menggabungkan unsur kedua peran tersebut.',
      example: {
        text: 'Mahasiswa rutin menyiapkan log kemajuan mingguan. Pembimbing menantang mahasiswa untuk mempertajam metodologi, tetapi kode program tetap ditulis 100% oleh mahasiswa. Di sidang, dewan penguji menguji pemahaman argumentasi keputusan.',
        isFabricated: false
      },
      pitfalls: [
        'Mengharapkan pembimbing menuliskan kode program atau merumuskan solusi teknis pengganti mahasiswa.',
        'Mengira larangan komunikasi penguji adalah hukum mutlak; dalam banyak institusi, penguji juga dapat bertindak sebagai reviewer berkala.'
      ],
      compare: {
        headers: ['Dimensi', 'Quality Evaluator', 'Quality Assuror'],
        rows: [
          ['Fokus Penilaian', 'Berorientasi hasil akhir (laporan & sidang)', 'Berorientasi proses bertahap dan kemajuan'],
          ['Komunikasi Riset', 'Tidak ada komunikasi proyek selama riset', 'Review berkala di berbagai checkpoint'],
          ['Tanggung Jawab', 'Murni menilai kepantasan lulus di akhir', 'Ikut mengawal standar kualitas selama proses']
        ]
      },
      memorize: {
        title: 'Peran Kunci Pelaku Skripsi',
        items: [
          'Mahasiswa: Motor utama, pemilik inisiatif & komitmen riset.',
          'Pembimbing: Pemandu pemikiran ilmiah & monitor kemajuan (Bukan pengganti!).',
          'Penguji: Penilai independen kualitas, argumentasi, dan kelulusan.',
          'Quality Evaluator: Berorientasi hasil akhir (tanpa komunikasi proyek).',
          'Quality Assuror: Mereview berkala di beberapa tahap kemajuan.'
        ],
        ordered: false
      },
      miniQuiz: [
        {
          id: 'q-m2-9-1',
          type: 'single',
          prompt: 'Model penguji yang berorientasi hasil akhir (kontribusi, kompleksitas, penyampaian) berdasarkan laporan dan sidang tanpa komunikasi proyek selama riset disebut:',
          options: ['Quality Assuror', 'Quality Evaluator', 'Research Director', 'Senior Supervisor'],
          answer: 1,
          explanation: 'Model Quality Evaluator berorientasi pada hasil (kontribusi, kompleksitas, kegunaan) berdasarkan laporan/sidang.',
          difficulty: 1,
          topicId: 'm2-peran-pelaku'
        }
      ],
      tags: ['Pelaku Skripsi', 'Quality Evaluator', 'Quality Assuror'],
      glossaryTerms: ['pembimbing', 'penguji', 'quality-evaluator', 'quality-assuror']
    },
    {
      id: 'm2-banyak-mahasiswa-pembimbing',
      moduleSlug: 'modul-2',
      slug: 'proyek-banyak-mahasiswa-atau-pembimbing',
      title: 'Proyek dengan Banyak Mahasiswa atau Banyak Pembimbing',
      order: 10,
      readingMinutes: 3,
      tldr: 'Banyak mahasiswa = wajib bagi sub-masalah unik & tanggung jawab sama atas laporan gabungan. Banyak pembimbing = butuh pembimbing utama & ekspektasi jelas.',
      definition: 'Banyak mahasiswa dalam satu payung penelitian memerlukan koordinasi yang ketat, pembagian bagian masalah yang unik untuk tiap individu, dan penggabungan laporan utuh. Semua anggota bertanggung jawab sama atas isi laporan gabungan. Banyak pembimbing memerlukan komunikasi aktif, penunjukan pembimbing utama (lead supervisor), serta pembagian peran dan batasan harapan yang jelas.',
      explanation: 'Bila 2-3 mahasiswa mengerjakan proyek bersama (misalnya satu sistem besar), setiap mahasiswa harus memiliki rumusan masalah spesifik yang menjadi kontribusi pribadinya. Namun saat laporan diuji, penguji berhak menanyakan bagian manapun, dan semua anggota memikul tanggung jawab integritas laporan tersebut.',
      example: {
        text: 'Dua mahasiswa meneliti Portal Kampus: Mahasiswa A berfokus pada algoritma indexing temu kembali (CS), Mahasiswa B berfokus pada evaluasi kegunaan antarmuka dan kepuasan mahasiswa (HCI/IS). Keduanya menyusun modul masing-masing namun memahami keterhubungan sistem utuh.',
        isFabricated: true
      },
      pitfalls: [
        'Mengira dalam proyek tim, kesalahan anggota lain di laporan bersama bukan menjadi tanggung jawab diri sendiri.',
        'Tidak memiliki pembimbing utama saat dibimbing lebih dari satu dosen, sehingga terjebak dalam silang pendapat yang membingungkan.'
      ],
      memorize: {
        title: 'Aturan Emas Proyek Kolaboratif Riset',
        items: [
          'Bagian masalah harus unik dan jelas bagi setiap mahasiswa.',
          'Semua anggota bertanggung jawab sama atas isi laporan gabungan.',
          'Wajib ada pembimbing utama untuk sinkronisasi arahan jika dosen lebih dari satu.'
        ],
        ordered: false
      },
      miniQuiz: [
        {
          id: 'q-m2-10-1',
          type: 'truefalse',
          prompt: 'Benar atau Salah: Dalam skripsi yang dikerjakan oleh beberapa mahasiswa secara kelompok, jika ditemukan kesalahan fatal pada bab yang ditulis rekan tim, anggota lain bebas dari tanggung jawab.',
          answer: false,
          explanation: 'Salah. Modul menegaskan bahwa semua anggota bertanggung jawab sama atas isi laporan gabungan.',
          difficulty: 1,
          topicId: 'm2-banyak-mahasiswa-pembimbing'
        }
      ],
      tags: ['Kolaborasi', 'Tim Riset', 'Pembimbing'],
      glossaryTerms: ['laporan-penelitian', 'pembimbing']
    }
  ]
};
