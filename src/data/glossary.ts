import { GlossaryTerm } from '../types';

export const allGlossaryTerms: GlossaryTerm[] = [
  {
    id: 'a-posteriori',
    term: 'A Posteriori',
    english: 'A posteriori knowledge',
    meaning: 'Pengetahuan yang diperoleh berdasarkan pengamatan inderawi atau bukti fakta empiris (ciri penalaran induktif).',
    moduleSlug: 'modul-3',
    relatedTerms: ['a-priori', 'induktif', 'empiris'],
    example: 'Menyimpulkan algoritma lambat setelah melihat hasil pengukuran log server.'
  },
  {
    id: 'a-priori',
    term: 'A Priori',
    english: 'A priori knowledge',
    meaning: 'Pengetahuan atau penalaran yang ditarik dari logika murni dan analisis premis tanpa memerlukan observasi empiris baru (ciri penalaran deduktif).',
    moduleSlug: 'modul-3',
    relatedTerms: ['a-posteriori', 'deduktif', 'tautologis'],
    example: 'Mengetahui bahwa segitiga memiliki tiga sudut tanpa perlu mengukur segitiga di lapangan.'
  },
  {
    id: 'action-research',
    term: 'Action Research',
    english: 'Action Research',
    meaning: 'Pendekatan penelitian berupa pembelajaran terdokumentasi dan termonitor atas tindakan intervensi nyata untuk menyelesaikan masalah atau mengubah keadaan bersama subjek organisasi.',
    moduleSlug: 'modul-2',
    relatedTerms: ['etnografi', 'case-study'],
    example: 'Peneliti bersama pengurus BEM memperbaiki alur publikasi informasi dan memonitor dampaknya tiap minggu.'
  },
  {
    id: 'algoritma',
    term: 'Algoritma',
    english: 'Algorithm',
    meaning: 'Urutan langkah logis yang terdefinisi dengan jelas untuk memecahkan suatu masalah atau menyelesaikan komputasi. CS berpusat pada studi algoritma.',
    moduleSlug: 'modul-1',
    relatedTerms: ['komputasi', 'ilmu-komputer', 'analisis-kompleksitas'],
    example: 'Algoritma Dijkstra untuk pencarian rute terpendek.'
  },
  {
    id: 'alpha-taraf-nyata',
    term: 'Alpha (α)',
    english: 'Significance level / Type I error rate',
    meaning: 'Probabilitas terjadinya Kesalahan Tipe I, yaitu peluang menolak hipotesis nol (H0) padahal H0 sebenarnya benar.',
    moduleSlug: 'modul-3',
    relatedTerms: ['kesalahan-tipe-1', 'beta-probabilitas', 'hipotesis-nol'],
    example: 'Taraf signifikansi α = 0,05 (5%) berarti peneliti menoleransi risiko kesalahan 5%.'
  },
  {
    id: 'analisis-data',
    term: 'Analisis Data',
    english: 'Data Analysis',
    meaning: 'Proses mengevaluasi data penelitian terhadap tujuan (objektif) yang telah ditetapkan untuk menghasilkan temuan ilmiah.',
    moduleSlug: 'modul-7',
    relatedTerms: ['penyajian-data', 'temuan-penelitian', 'evaluasi-objektif'],
    example: 'Menghubungkan persentase skor kepuasan dengan variabel frekuensi penggunaan portal.'
  },
  {
    id: 'analisis-kompleksitas',
    term: 'Analisis Kompleksitas',
    english: 'Complexity Analysis',
    meaning: 'Kajian teoritis dan empiris untuk mengukur konsumsi waktu dan ruang memori yang dibutuhkan suatu algoritma terhadap ukuran masukan data.',
    moduleSlug: 'modul-1',
    relatedTerms: ['komputasi', 'efisiensi', 'algoritma'],
    example: 'Membandingkan algoritma O(N log N) dengan O(N^2).'
  },
  {
    id: 'apa-style',
    term: 'APA Style',
    english: 'American Psychological Association Style',
    meaning: 'Format sitasi berbasis penulis-tahun (author-date) yang umum digunakan dalam bidang ilmu sosial dan sistem informasi.',
    moduleSlug: 'modul-5',
    relatedTerms: ['ieee-style', 'harvard-style', 'sitasi'],
    example: '(Santoso, 2024).'
  },
  {
    id: 'applied-project',
    term: 'Applied Project',
    english: 'Applied Research Project',
    meaning: 'Tipe proyek penelitian yang membangun penerapan pembuktian (proof of concept) dan memperoleh hasil/pengalaman eksperimen nyata.',
    moduleSlug: 'modul-4',
    relatedTerms: ['tipe-proyek', 'theory-oriented', 'descriptive-project'],
    example: 'Membangun aplikasi mobile pencari beasiswa dan menguji latensi rekomendasinya.'
  },
  {
    id: 'approach',
    term: 'Approach (Pendekatan)',
    english: 'Research Approach',
    meaning: 'Metode yang diterapkan dalam penyelidikan ilmiah untuk memecahkan masalah penelitian (bagian dari triad Field, Approach, Nature).',
    moduleSlug: 'modul-2',
    relatedTerms: ['field', 'nature', 'metode'],
    example: 'Pendekatan eksperimental atau pendekatan survei.'
  },
  {
    id: 'argumentasi',
    term: 'Argumentasi Ilmiah',
    english: 'Scientific Argumentation',
    meaning: 'Rangkaian penalaran logis yang didukung oleh bukti empiris atau rujukan ilmiah untuk mempertahankan pernyataan dan kesimpulan penelitian.',
    moduleSlug: 'modul-1',
    relatedTerms: ['logika', 'penalaran', 'sidang'],
    example: 'Mempertahankan pilihan struktur Trie di hadapan dewan penguji berdasarkan data memori.'
  },
  {
    id: 'artefak',
    term: 'Artefak Komputasi',
    english: 'Computational Artifact',
    meaning: 'Program atau sistem baru buatan manusia yang dalam pandangan Newell & Simon dipandang sebagai percobaan yang dipelajari struktur dan karakteristiknya.',
    moduleSlug: 'modul-1',
    relatedTerms: ['empiris', 'newell-simon', 'ilmu-komputer'],
    example: 'Source code prototipe mesin pencari portal kampus.'
  },
  {
    id: 'associative-hypothesis',
    term: 'Associative Hypothesis',
    english: 'Associative Hypothesis',
    meaning: 'Dugaan sementara tentang adanya hubungan atau pengaruh antara dua variabel atau lebih.',
    moduleSlug: 'modul-3',
    relatedTerms: ['hipotesis', 'hipotesis-comparative', 'hipotesis-descriptive'],
    example: 'Tidak ada pengaruh penambahan atribut A terhadap akurasi C4.5.'
  },
  {
    id: 'beta-probabilitas',
    term: 'Beta (β)',
    english: 'Type II error rate',
    meaning: 'Probabilitas terjadinya Kesalahan Tipe II, yaitu peluang menerima hipotesis nol (H0) padahal H0 tersebut sebenarnya salah.',
    moduleSlug: 'modul-3',
    relatedTerms: ['kesalahan-tipe-2', 'alpha-taraf-nyata', 'power-of-test'],
    example: 'Tingkat Beta 0,20 berarti kekuatan uji (1 - β) adalah 0,80.'
  },
  {
    id: 'biermann',
    term: 'Biermann',
    english: 'A. W. Biermann',
    meaning: 'Pakar yang mendefinisikan Computer Science secara ringkas dan berpusat pada algoritma: "Computer science is the study of algorithms."',
    moduleSlug: 'modul-1',
    relatedTerms: ['algoritma', 'ilmu-komputer', 'brookshear'],
    example: 'Kutipan Biermann menegaskan CS bukan sekadar studi perangkat keras.'
  },
  {
    id: 'bioinformatics',
    term: 'Bioinformatics',
    english: 'Bioinformatics',
    meaning: 'Subbidang Computer Science yang menerapkan algoritma dan komputasi untuk menganalisis data biologis seperti sekuens DNA dan protein.',
    moduleSlug: 'modul-1',
    relatedTerms: ['subbidang-cs', 'computational-science'],
    example: 'Penyelarasan sekuens genom menggunakan algoritma Needleman-Wunsch.'
  },
  {
    id: 'bob-grady-furps',
    term: 'Bob Grady (FURPS+)',
    english: 'FURPS+ Quality Model',
    meaning: 'Model klasifikasi kebutuhan kualitas perangkat lunak: Functionality, Usability, Reliability, Performance, Support.',
    moduleSlug: 'modul-6',
    relatedTerms: ['furps', 'iso-9126', 'reliabilitas'],
    example: 'Mengukur kehandalan (Reliability) portal berdasarkan uptime dan MTBF.'
  },
  {
    id: 'bob-hayes',
    term: 'Bob Hayes (Customer Satisfaction)',
    english: 'Bob Hayes Quality Requirements',
    meaning: 'Dimensi kualitas kepuasan pengguna menurut Bob Hayes: Availability, Responsiveness, Timeliness, Completeness, Professionalism.',
    moduleSlug: 'modul-6',
    relatedTerms: ['furps', 'dimensi-kualitas', 'kuesioner'],
    example: 'Mengukur ketepatan waktu pengumuman (Timeliness) pada portal kampus.'
  },
  {
    id: 'brookshear',
    term: 'Brookshear',
    english: 'J. Glenn Brookshear',
    meaning: 'Penulis buku dasar ilmu komputer yang menyatakan CS membangun landasan ilmiah bagi desain komputer, pemrograman, pemrosesan informasi, dan proses algoritmik.',
    moduleSlug: 'modul-1',
    relatedTerms: ['biermann', 'algoritma', 'ilmu-komputer'],
    example: 'Definisi Brookshear menempatkan pemrosesan informasi sebagai pilar sains.'
  },
  {
    id: 'burgess-model',
    term: 'Burgess (Model Survei)',
    english: 'Burgess Survey Model',
    meaning: 'Model 7 tahap proses survei: Tujuan → Populasi/sampel → Cara pengumpulan → Desain kuesioner → Pilot → Main survey → Analisis.',
    moduleSlug: 'modul-6',
    relatedTerms: ['hart-diagram', 'proses-survei', 'pilot-test'],
    example: 'Melakukan pilot test sebelum menyebarkan survei utama.'
  },
  {
    id: 'by-company',
    term: 'By Company (Penyajian Wawancara)',
    english: 'By company reporting',
    meaning: 'Pola pengorganisasian data wawancara di mana setiap unit atau perusahaan dipaparkan secara utuh terlebih dahulu sebelum berpindah ke unit lain.',
    moduleSlug: 'modul-7',
    relatedTerms: ['by-question', 'wawancara', 'data-kualitatif'],
    example: 'Menjelaskan hasil wawancara di Bagian Akademik, lalu di Bagian Keuangan.'
  },
  {
    id: 'by-question',
    term: 'By Question (Penyajian Wawancara)',
    english: 'By question reporting',
    meaning: 'Pola penyajian data wawancara di mana setiap pertanyaan dibahas satu per satu lalu dibandingkan responsnya antar-unit.',
    moduleSlug: 'modul-7',
    relatedTerms: ['by-company', 'wawancara'],
    example: 'Membahas kendala login di semua fakultas sekaligus.'
  },
  {
    id: 'case-study',
    term: 'Case Study (Studi Kasus)',
    english: 'Case Study Research',
    meaning: 'Pendekatan eksplorasi mendalam atas suatu entitas, masalah, atau kelompok tertentu dengan memanfaatkan data primer, dokumen tervalidasi, dan verifikasi sumber utama.',
    moduleSlug: 'modul-2',
    relatedTerms: ['action-research', 'data-primer'],
    example: 'Investigasi mendalam faktor kegagalan adopsi sistem informasi di Fakultas Hukum.'
  },
  {
    id: 'causal-comparative',
    term: 'Causal-Comparative',
    english: 'Causal-Comparative Research (Ex Post Facto)',
    meaning: 'Desain penelitian yang mengkaji efek yang sudah terjadi lebih dulu lalu mencari kemungkinan penyebabnya tanpa adanya manipulasi perlakuan oleh peneliti.',
    moduleSlug: 'modul-4',
    relatedTerms: ['experimental-research', 'manipulasi-treatment', 'sebab-akibat'],
    example: 'Meneliti perbedaan IPK antara mahasiswa yang aktif berorganisasi vs tidak aktif.'
  },
  {
    id: 'circulatory',
    term: 'Circulatory Model',
    english: 'Circulatory Research Model',
    meaning: 'Model tahapan penelitian yang memandang riset sebagai lingkaran penemuan berkelanjutan yang dapat berputar kembali ke tahap awal (refine hipotesis).',
    moduleSlug: 'modul-2',
    relatedTerms: ['evolutionary', 'research-wheel', 'sequential'],
    example: 'Hasil pengujian memunculkan hipotesis baru lalu siklus riset diulang.'
  },
  {
    id: 'cluster-sampling',
    term: 'Cluster / Area Sampling',
    english: 'Cluster / Area Sampling',
    meaning: 'Teknik probability sampling yang digunakan saat sumber data sangat luas secara geografis, sering dilakukan dalam dua tahap (pilih area lalu unit di dalamnya).',
    moduleSlug: 'modul-6',
    relatedTerms: ['probability-sampling', 'stratified-sampling'],
    example: 'Memilih 3 dari 10 kampus cabang, lalu meneliti mahasiswa di kampus terpilih.'
  },
  {
    id: 'comic-sans-larangan',
    term: 'Comic Sans (Larangan Desain)',
    english: 'Decorative font prohibition',
    meaning: 'Contoh font kasual/dekoratif yang secara spesifik dilarang penggunaannya dalam pembuatan poster ilmiah oleh modul karena merusak kesan profesionalitas.',
    moduleSlug: 'modul-7',
    relatedTerms: ['poster-ilmiah', 'tipografi-poster'],
    example: 'Gunakan font profesional seperti Inter atau Plus Jakarta Sans alih-alih Comic Sans.'
  },
  {
    id: 'comparative-hypothesis',
    term: 'Comparative Hypothesis',
    english: 'Comparative Hypothesis',
    meaning: 'Dugaan sementara tentang perbedaan antara dua atau lebih kelompok, sampel, atau kondisi (sebelum-sesudah). Kalimat bernada negatif tetap tergolong komparatif.',
    moduleSlug: 'modul-3',
    relatedTerms: ['hipotesis', 'hipotesis-descriptive', 'hipotesis-associative'],
    example: 'Tidak ada perbedaan akurasi antara algoritma C4.5 dan Artificial Neural Network.'
  },
  {
    id: 'comparison-theory-practice',
    term: 'Comparison of Theory & Practice',
    english: 'Comparison of Theory and Practice Project',
    meaning: 'Tipe proyek penelitian yang membandingkan teori atau pemodelan teoritis dengan kenyataan penerapannya di lapangan/perusahaan.',
    moduleSlug: 'modul-4',
    relatedTerms: ['tipe-proyek', 'applied-project'],
    example: 'Membandingkan standar keamanan ISO 27001 dengan konfigurasi server aktual kampus.'
  },
  {
    id: 'computational-science',
    term: 'Computational Science',
    english: 'Computational Science',
    meaning: 'Subbidang Computer Science yang memanfaatkan komputasi canggih dan simulasi numerik untuk memecahkan persoalan ilmiah kompleks di bidang fisika, kimia, dan teknik.',
    moduleSlug: 'modul-1',
    relatedTerms: ['subbidang-cs', 'bioinformatics'],
    example: 'Simulasi aerodinamika atau peramalan cuaca numerik.'
  },
  {
    id: 'confidentiality',
    term: 'Confidentiality (Kerahasiaan)',
    english: 'Confidentiality',
    meaning: 'Salah satu dari 10 perhatian wawancara modul, yaitu kewajiban peneliti menjaga kerahasiaan identitas dan data sensitif narasumber.',
    moduleSlug: 'modul-6',
    relatedTerms: ['wawancara', 'etika-penelitian'],
    example: 'Menyamarkan nama responden menjadi "Pengguna X" dalam laporan publikasi.'
  },
  {
    id: 'kontinum-skala',
    term: 'Kontinum (Continuum)',
    english: 'Measurement Continuum',
    meaning: 'Garis kontinyu persentase skor (misal 0% s/d 100%) yang membagi wilayah persepsi mulai dari sangat negatif, negatif, netral, positif, hingga sangat positif.',
    moduleSlug: 'modul-6',
    relatedTerms: ['skala-likert', 'skor-ideal'],
    example: 'Skor 70% berada di daerah kategori "Positif/Setuju" pada kontinum.'
  },
  {
    id: 'correlational-research',
    term: 'Correlational Research',
    english: 'Correlational Research',
    meaning: 'Desain penelitian untuk menyelidiki hubungan dua atau beberapa variabel tanpa manipulasi atau kontrol variabel; dianalisis dengan statistik korelasi/regresi.',
    moduleSlug: 'modul-4',
    relatedTerms: ['kausalitas', 'causal-comparative'],
    example: 'Menyelidiki hubungan antara waktu belajar harian dan nilai algoritma.'
  },
  {
    id: 'counter-argument',
    term: 'Counter-Argument',
    english: 'Counter-Argument',
    meaning: 'Argumen tandingan atau bukti penelitian lain yang berlawanan dengan temuan peneliti; wajib disajikan secara transparan dalam telaah literatur.',
    moduleSlug: 'modul-7',
    relatedTerms: ['literature-review', 'integritas-ilmiah'],
    example: 'Menyajikan paper yang menunjukkan kelemahan algoritma di samping keunggulannya.'
  },
  {
    id: 'cronbach-alpha',
    term: 'Cronbach’s Alpha (α)',
    english: 'Cronbach’s Alpha Reliability Coefficient',
    meaning: 'Uji reliabilitas konsistensi internal yang mengukur rata-rata corrected split-half pada seluruh kombinasi belahan; standar untuk data berskala bertingkat seperti Likert.',
    moduleSlug: 'modul-6',
    relatedTerms: ['reliabilitas', 'split-half', 'kr-20'],
    example: 'Nilai alpha α = 0,80 menunjukkan instrumen kuesioner memiliki kehandalan tinggi.'
  },
  {
    id: 'cycles-of-literature',
    term: 'Cycles of Scientific Literature',
    english: 'Cycles of Scientific Literature',
    meaning: 'Siklus perjalanan informasi ilmiah: Topik → Riset → Komunikasi informal → Prosiding → Jurnal → Edited volumes → Textbooks → Reference sources → Topik baru.',
    moduleSlug: 'modul-5',
    relatedTerms: ['prosiding', 'jurnal-ilmiah', 'textbook'],
    example: 'Teori yang bermula dari makalah prosiding berkembang menjadi bab buku teks kuliah.'
  },
  {
    id: 'data',
    term: 'Data',
    english: 'Data',
    meaning: 'Elemen fakta mentah tentang objek atau kejadian yang belum diolah (tingkat pertama piramida DIKW).',
    moduleSlug: 'modul-2',
    relatedTerms: ['informasi', 'knowledge', 'wisdom'],
    example: 'Catatan waktu respons 2, 4, 6 detik pada log database.'
  },
  {
    id: 'deduktif',
    term: 'Deduktif',
    english: 'Deductive Reasoning',
    meaning: 'Penalaran yang bergerak dari pengetahuan umum menuju kesimpulan khusus; bersifat analitis, tautologis, a priori, dan dapat dinilai kesahihannya.',
    moduleSlug: 'modul-3',
    relatedTerms: ['induktif', 'a-priori', 'tautologis'],
    example: 'Semua query yang melebihi timeout di-abort; Query X timeout; Maka Query X di-abort.'
  },
  {
    id: 'dependent-variable',
    term: 'Dependent Variable (Variabel Terikat)',
    english: 'Dependent Variable',
    meaning: 'Variabel yang menjadi fokus utama penyelidikan yang nilainya dipengaruhi atau diterangkan oleh variabel independen.',
    moduleSlug: 'modul-3',
    relatedTerms: ['independent-variable', 'perumusan-masalah'],
    example: 'Waktu respons query pencarian (yang dipengaruhi oleh algoritma indexing).'
  },
  {
    id: 'descriptive-hypothesis',
    term: 'Descriptive Hypothesis',
    english: 'Descriptive Hypothesis',
    meaning: 'Dugaan sementara tentang nilai suatu variabel mandiri tanpa perbandingan atau hubungan dengan variabel lain.',
    moduleSlug: 'modul-3',
    relatedTerms: ['hipotesis', 'hipotesis-comparative'],
    example: 'Akurasi prediksi algoritma C4.5 mencapai 90%.'
  },
  {
    id: 'descriptive-project',
    term: 'Descriptive Project',
    english: 'Descriptive Research Project',
    meaning: 'Tipe proyek penelitian yang menyajikan tinjauan terkini (state-of-the-art), mengelompokkan penelitian terdahulu, atau memetakan faktor penting di suatu bidang.',
    moduleSlug: 'modul-4',
    relatedTerms: ['tipe-proyek', 'state-of-the-art'],
    example: 'Pemetaan riset terkini mengenai penerapan blockchain pada rekam medis.'
  },
  {
    id: 'disproportionate-stratified',
    term: 'Disproportionate Stratified Random',
    english: 'Disproportionate Stratified Random Sampling',
    meaning: 'Teknik sampling berstrata untuk populasi yang proporsinya sangat timpang; strata minoritas sangat kecil diambil seluruhnya (sensus) agar keterwakilannya terjaga.',
    moduleSlug: 'modul-6',
    relatedTerms: ['stratified-sampling', 'proportionate-stratified'],
    example: 'Mengambil seluruh 3 orang berpendidikan S3 dan 10% dari 350 orang SMU.'
  },
  {
    id: 'electronic-dummy',
    term: 'Electronic Dummy',
    english: 'Electronic dummy / Template layout',
    meaning: 'Rancangan digital tata letak poster di software komputer yang menggunakan teks dan kotak gambar rekaan/placeholder sebelum diisi materi penelitian asli.',
    moduleSlug: 'modul-7',
    relatedTerms: ['storyboard', 'poster-ilmiah'],
    example: 'Template InDesign dengan kotak placeholder judul dan 3 kolom teks.'
  },
  {
    id: 'empiris',
    term: 'Empiris',
    english: 'Empirical',
    meaning: 'Berdasarkan pengamatan, percobaan, atau bukti nyata di dunia nyata, bukan semata-mata spekulasi atau teori murni.',
    moduleSlug: 'modul-1',
    relatedTerms: ['artefak', 'ilmu-komputer', 'newell-simon'],
    example: 'Menguji waktu eksekusi kode di server fisik alih-alih hanya menghitung di atas kertas.'
  },
  {
    id: 'eniac',
    term: 'ENIAC',
    english: 'ENIAC (Electronic Numerical Integrator and Computer)',
    meaning: 'Komputer elektronik digital pertama yang menandai periode Birth of Computers (1940-1950) dalam sejarah komputasi.',
    moduleSlug: 'modul-1',
    relatedTerms: ['sejarah-komputer', 'vacuum-tube'],
    example: 'ENIAC dibangun dengan ribuan tabung hampa udara untuk kalkulasi militer.'
  },
  {
    id: 'etnografi',
    term: 'Ethnographic Research (Etnografi)',
    english: 'Ethnographic Research',
    meaning: 'Desain penelitian yang berfokus mendalam pada pengamatan kebudayaan, nilai, dan kebiasaan sekelompok orang (misal komunitas pengembang software dalam organisasi).',
    moduleSlug: 'modul-4',
    relatedTerms: ['action-research', 'data-kualitatif'],
    example: 'Mengamati budaya kerja komunitas programmer open-source dalam melakukan code-review.'
  },
  {
    id: 'evaluasi-objektif',
    term: 'Evaluasi Objektif',
    english: 'Objective Evaluation',
    meaning: 'Kegiatan sistematis mengevaluasi setiap butir tujuan penelitian yang dirumuskan di awal berdasarkan data empiris yang diperoleh.',
    moduleSlug: 'modul-7',
    relatedTerms: ['analisis-data', 'significance-test'],
    example: 'Mengecek satu per satu apakah tujuan 1, tujuan 2, dan tujuan 3 berhasil terjawab.'
  },
  {
    id: 'evaluasi-proses',
    term: 'Evaluasi Proses',
    english: 'Process Evaluation',
    meaning: 'Menelusuri kembali perjalanan pengerjaan riset untuk mengidentifikasi kelebihan, kelemahan, kesalahan, dan keputusan baik yang telah diambil.',
    moduleSlug: 'modul-7',
    relatedTerms: ['future-work', 'kesimpulan-penelitian'],
    example: 'Menjelaskan keputusan pemilihan arsitektur microservices yang terbukti tepat.'
  },
  {
    id: 'evolutionary',
    term: 'Evolutionary Model',
    english: 'Evolutionary Research Model',
    meaning: 'Model penelitian yang menekankan perkembangan dan transformasi riset dari waktu ke waktu tanpa kewajiban mengulang pola siklus analisis yang sama.',
    moduleSlug: 'modul-2',
    relatedTerms: ['circulatory', 'research-wheel'],
    example: 'Riset bertransformasi dari optimasi database ke privasi pengguna seiring regulasi baru.'
  },
  {
    id: 'experimental-research',
    term: 'Experimental Research (Eksperimen)',
    english: 'Experimental Research',
    meaning: 'Penelitian untuk menentukan hubungan sebab-akibat dengan membandingkan kelompok kontrol dan kelompok perlakuan melalui manipulasi variabel yang dikendalikan peneliti.',
    moduleSlug: 'modul-4',
    relatedTerms: ['causal-comparative', 'kelompok-kontrol', 'manipulasi-treatment'],
    example: 'Menguji performa server dengan menerapkan caching (perlakuan) vs tanpa caching (kontrol).'
  },
  {
    id: 'factor-analysis-plot',
    term: 'Factor Analysis Plot',
    english: 'Factor Analysis Plot',
    meaning: 'Jenis visualisasi grafik statistik untuk memetakan pembebanan variabel pada faktor laten dalam analisis reduksi dimensi.',
    moduleSlug: 'modul-7',
    relatedTerms: ['penyajian-numeris', 'scatter-plot'],
    example: 'Plot sebaran butir kuesioner pada dua dimensi kepuasan pengguna.'
  },
  {
    id: 'feasible',
    term: 'Feasible (Layak Dilaksanakan)',
    english: 'Research Feasibility',
    meaning: 'Syarat masalah penelitian yang baik: dapat dipecahkan, data dan metode tersedia, biaya memadai, dan waktu penyelesaian masuk akal.',
    moduleSlug: 'modul-3',
    relatedTerms: ['masalah-penelitian', 'nilai-penelitian'],
    example: 'Mempersempit ruang lingkup agar dapat diselesaikan dalam 6 bulan masa skripsi.'
  },
  {
    id: 'field',
    term: 'Field (Bidang Ilmu)',
    english: 'Research Field',
    meaning: 'Kelompok peneliti dengan ketertarikan sama pada domain ilmu tertentu (elemen pertama dari triad Field, Approach, Nature).',
    moduleSlug: 'modul-2',
    relatedTerms: ['approach', 'nature', 'subbidang-cs'],
    example: 'Bidang Information Retrieval atau Software Engineering.'
  },
  {
    id: 'flowchart',
    term: 'Flowchart',
    english: 'Flowchart',
    meaning: 'Bagan alur grafis yang menggambarkan urutan instruksi atau proses logika sistem; dalam skripsi harus disertai penjelasan naratif teks pendukung.',
    moduleSlug: 'modul-7',
    relatedTerms: ['pseudocode', 'implementasi-data'],
    example: 'Diagram alur proses autentikasi pengguna pada portal kampus.'
  },
  {
    id: 'furps',
    term: 'FURPS+',
    english: 'FURPS+ Quality Attributes',
    meaning: 'Model dimensi kualitas sistem oleh Bob Grady: Functionality (fungsi), Usability (kegunaan), Reliability (kehandalan), Performance (kinerja), Support (dukungan).',
    moduleSlug: 'modul-6',
    relatedTerms: ['iso-9126', 'bob-grady-furps', 'reliabilitas'],
    example: 'Evaluasi Usability melalui kemudahan navigasi dan Performance melalui respon server.'
  },
  {
    id: 'future-work',
    term: 'Future Work (Saran Penelitian Lanjut)',
    english: 'Future Work / Future Research',
    meaning: 'Rekomendasi konkret dan terukur untuk penelitian lanjutan berdasarkan keterbatasan temuan yang dicapai (bukan sekadar saran normatif "agar lebih baik").',
    moduleSlug: 'modul-7',
    relatedTerms: ['evaluasi-proses', 'kesimpulan-penelitian'],
    example: 'Menyarankan pengujian algoritma pada dataset berskala di atas 1 juta rekaman.'
  },
  {
    id: 'generalised',
    term: 'Generalised Model',
    english: 'Generalised Research Model',
    meaning: 'Model proses riset yang tetap berstruktur namun menyediakan rute alternatif dan tahapan adaptif sesuai sifat keluaran studi (contoh model Kane).',
    moduleSlug: 'modul-2',
    relatedTerms: ['sequential', 'kane-model'],
    example: 'Melewati survei pengguna saat riset berfokus pada simulasi matematika murni.'
  },
  {
    id: 'good-result',
    term: 'Good Result (Hasil yang Baik)',
    english: 'Good Scientific Result',
    meaning: 'Hasil penelitian yang memungkinkan kesimpulan jelas dengan tingkat kepercayaan tinggi dari metode dan analisis yang benar, terlepas dari apakah hipotesis didukung atau tidak.',
    moduleSlug: 'modul-7',
    relatedTerms: ['integritas-ilmiah', 'reliable-result'],
    example: 'Membuktikan bahwa metode A tidak lebih baik dari metode B adalah hasil yang baik.'
  },
  {
    id: 'guttman-skala',
    term: 'Skala Guttman',
    english: 'Guttman Scale',
    meaning: 'Format skala pengukuran kumulatif yang bertujuan memperoleh jawaban tegas dengan dua alternatif dikotomi (Ya/Tidak, Pernah/Belum).',
    moduleSlug: 'modul-6',
    relatedTerms: ['skala-likert', 'semantic-differential'],
    example: 'Pernyataan "Apakah Anda pernah mengalami error 404 pada portal?" [Pernah / Tidak].'
  },
  {
    id: 'hanging-indent',
    term: 'Hanging Indent',
    english: 'Hanging Indent',
    meaning: 'Format tata letak paragraf pada daftar referensi IEEE di mana baris pertama menjorok rata kiri dan baris kedua dan seterusnya menjorok ke dalam.',
    moduleSlug: 'modul-7',
    relatedTerms: ['ieee-style', 'references-list'],
    example: 'Format entri daftar pustaka pada standar publikasi internasional.'
  },
  {
    id: 'harry-king-nomogram',
    term: 'Harry King (Nomogram)',
    english: 'Harry King Nomogram',
    meaning: 'Metode grafis nomogram untuk menentukan ukuran sampel berdasarkan populasi N, taraf kesalahan, dan taraf kepercayaan (contoh slide: N=200 menghasilkan sampel 139).',
    moduleSlug: 'modul-6',
    relatedTerms: ['ukuran-sampel', 'isaac-michael'],
    example: 'Perhitungan slide: 0,58 × 200 × 1,195 = 138,62 ≈ 139.'
  },
  {
    id: 'harvard-style',
    term: 'Harvard Style',
    english: 'Harvard Referencing System',
    meaning: 'Sistem pengutipan berbasis penulis-tahun (author-date) di mana nama penulis dan tahun publikasi dicantumkan di dalam tanda kurung di teks.',
    moduleSlug: 'modul-5',
    relatedTerms: ['ieee-style', 'apa-style'],
    example: '(Pratama, 2024).'
  },
  {
    id: 'hawthorne-effect',
    term: 'Hawthorne Effect',
    english: 'Hawthorne Effect',
    meaning: 'Fenomena perubahan perilaku subjek penelitian (menjadi lebih rajin atau berhati-hati) yang terjadi semata-mata karena mereka menyadari sedang diamati peneliti.',
    moduleSlug: 'modul-6',
    relatedTerms: ['observasi', 'bias-riset'],
    example: 'Staf admin bekerja lebih rapi saat didampingi peneliti di samping mejanya.'
  },
  {
    id: 'hci',
    term: 'Human Computer Interaction (HCI)',
    english: 'Human Computer Interaction',
    meaning: 'Subbidang Computer Science (dan irisan IS) yang mempelajari perancangan, evaluasi, dan implementasi antarmuka komputasi interaktif agar mudah digunakan manusia.',
    moduleSlug: 'modul-1',
    relatedTerms: ['subbidang-cs', 'sistem-informasi', 'usability'],
    example: 'Pengujian kegunaan navigasi menu portal kampus bagi pengguna disabilitas.'
  },
  {
    id: 'hipotesis',
    term: 'Hipotesis',
    english: 'Hypothesis',
    meaning: 'Jawaban sementara atas masalah penelitian yang kebenarannya diuji secara empiris dengan data fakta.',
    moduleSlug: 'modul-3',
    relatedTerms: ['hipotesis-nol', 'uji-hipotesis'],
    example: 'Dugaan bahwa penambahan cache redis mempercepat waktu respon minimal 50%.'
  },
  {
    id: 'hipotesis-nol',
    term: 'Hipotesis Nol (H0)',
    english: 'Null Hypothesis (H0)',
    meaning: 'Pernyataan hipotesis statistik yang menyatakan tidak adanya perbedaan, tidak adanya hubungan, atau tidak adanya efek perlakuan.',
    moduleSlug: 'modul-3',
    relatedTerms: ['kesalahan-tipe-1', 'kesalahan-tipe-2', 'taraf-signifikansi'],
    example: 'H0: Tidak ada perbedaan kecepatan rata-rata antara algoritma A dan B.'
  },
  {
    id: 'histogram',
    term: 'Histogram',
    english: 'Histogram',
    meaning: 'Diagram batang khusus yang menampilkan distribusi frekuensi dari data kuantitatif kontinu yang dikelompokkan ke dalam rentang interval (bins).',
    moduleSlug: 'modul-7',
    relatedTerms: ['penyajian-numeris', 'distribusi-data'],
    example: 'Distribusi waktu unduh berkas mahasiswa yang dikelompokkan per 0,5 detik.'
  },
  {
    id: 'historical-research',
    term: 'Historical Research (Riset Historis)',
    english: 'Historical Research',
    meaning: 'Desain riset yang mengumpulkan, mengevaluasi, memverifikasi, dan mensintesis bukti-bukti masa lampau untuk rekonstruksi sejarah yang objektif dan sistematis.',
    moduleSlug: 'modul-4',
    relatedTerms: ['desain-penelitian', 'bukti-primer'],
    example: 'Mengkaji perubahan arsitektur sistem informasi universitas dari arsip tahun 1990-2020.'
  },
  {
    id: 'ieee-style',
    term: 'IEEE Style',
    english: 'IEEE Citation Style',
    meaning: 'Format sitasi standar bidang teknik komputer dan elektro yang menggunakan nomor urut dalam kurung siku [1] sesuai urutan kemunculan di teks.',
    moduleSlug: 'modul-5',
    relatedTerms: ['references-list', 'in-text-citation'],
    example: 'Penggunaan nomor [1] di teks yang merujuk entri nomor 1 di daftar References.'
  },
  {
    id: 'ilmu-komputer',
    term: 'Ilmu Komputer (Computer Science)',
    english: 'Computer Science',
    meaning: 'Disiplin empiris dan teoritis yang berpusat pada studi tentang algoritma, proses komputasi, perangkat lunak, dan arsitektur pengolahan informasi.',
    moduleSlug: 'modul-1',
    relatedTerms: ['algoritma', 'komputasi', 'sistem-informasi'],
    example: 'Penelitian perancangan struktur data graf untuk rute transportasi.'
  },
  {
    id: 'incidental-sampling',
    term: 'Incidental / Convenience Sampling',
    english: 'Incidental / Convenience Sampling',
    meaning: 'Teknik nonprobability sampling di mana sampel diambil dari siapa saja yang kebetulan bertemu dengan peneliti dan dinilai cocok sebagai sumber data.',
    moduleSlug: 'modul-6',
    relatedTerms: ['nonprobability-sampling', 'quota-sampling'],
    example: 'Mewawancarai mahasiswa yang kebetulan sedang duduk di kantin perpustakaan.'
  },
  {
    id: 'induktif',
    term: 'Induktif',
    english: 'Inductive Reasoning',
    meaning: 'Penalaran yang bergerak dari observasi kasus khusus menuju kesimpulan atau teori umum; bersifat sintetis, a posteriori, dan mengandung aspek probabilitas.',
    moduleSlug: 'modul-3',
    relatedTerms: ['deduktif', 'a-posteriori', 'generalisasi'],
    example: 'Mengamati 100 query gagal, menemukan pola kesamaan karakter, lalu menyusun teori bug.'
  },
  {
    id: 'information-retrieval',
    term: 'Information Retrieval',
    english: 'Information Retrieval',
    meaning: 'Subbidang Computer Science (bagian dari Databases & Information Retrieval) yang mempelajari temu kembali informasi dan dokumen yang relevan dari repositori data.',
    moduleSlug: 'modul-1',
    relatedTerms: ['subbidang-cs', 'inverted-index'],
    example: 'Algoritma mesin pencari untuk portal pengumuman kampus.'
  },
  {
    id: 'informasi',
    term: 'Informasi',
    english: 'Information',
    meaning: 'Data yang telah diolah dan diorganisasikan sehingga memiliki makna dan nilai pemahaman bagi penerimanya (tingkat kedua piramida DIKW).',
    moduleSlug: 'modul-2',
    relatedTerms: ['data', 'knowledge', 'wisdom'],
    example: 'Rata-rata waktu tanggap sistem sebesar 4 detik (dari angka mentah 2, 4, 6).'
  },
  {
    id: 'integrated-circuit',
    term: 'Integrated Circuit (IC)',
    english: 'Integrated Circuit (IC)',
    meaning: 'Komponen semikonduktor terpadu yang menandai lompatan teknologi komputer Generasi III (1965-1975), menggantikan transistor diskrit.',
    moduleSlug: 'modul-1',
    relatedTerms: ['lima-generasi', 'transistor', 'vlsi'],
    example: 'Chip IC memungkinkan terciptanya komputer mini (minicomputers) yang lebih andal.'
  },
  {
    id: 'integritas-ilmiah',
    term: 'Integritas Ilmiah',
    english: 'Scientific Integrity',
    meaning: 'Prinsip kejujuran, transparansi, dan tanggung jawab etis dalam menyajikan data dan mengakui rujukan orang lain tanpa manipulasi atau plagiarisme.',
    moduleSlug: 'modul-7',
    relatedTerms: ['good-result', 'counter-argument', 'plagiarisme'],
    example: 'Tidak mengubah data pengujian meski hasilnya berlawanan dengan hipotesis awal.'
  },
  {
    id: 'interval-skala',
    term: 'Skala Interval',
    english: 'Interval Scale',
    meaning: 'Skala pengukuran numerik yang memiliki urutan dan jarak antarnilai yang setara, tetapi TIDAK memiliki nilai nol absolut (nol mutlak).',
    moduleSlug: 'modul-6',
    relatedTerms: ['skala-rasio', 'skala-ordinal', 'skala-nominal'],
    example: 'Suhu 0° Celsius tidak berarti ketiadaan suhu sama sekali.'
  },
  {
    id: 'inverted-index',
    term: 'Inverted Index',
    english: 'Inverted Index',
    meaning: 'Struktur data indeks basis data yang memetakan kata kunci ke daftar dokumen yang memuat kata tersebut; fondasi mesin pencari temu kembali informasi.',
    moduleSlug: 'modul-1',
    relatedTerms: ['information-retrieval', 'algoritma'],
    example: 'Kata "Seminar" memetakan ke dokumen [ID 4, ID 12, ID 88].'
  },
  {
    id: 'isaac-michael',
    term: 'Isaac & Michael (Tabel Ukuran Sampel)',
    english: 'Isaac and Michael Sample Size Table',
    meaning: 'Tabel statistik penentuan ukuran sampel s berdasarkan populasi N untuk taraf kesalahan 1%, 5%, dan 10% (pada N=200: s=154, 127, 115).',
    moduleSlug: 'modul-6',
    relatedTerms: ['ukuran-sampel', 'harry-king-nomogram'],
    example: 'Untuk populasi 200 orang pada taraf kesalahan 5%, sampel yang diambil adalah 127 orang.'
  },
  {
    id: 'iso-9126',
    term: 'ISO 9126',
    english: 'ISO 9126 Quality Model',
    meaning: 'Standar kualitas perangkat lunak menurut modul: Usability, Reliability, Efficiency, Reusability, Maintainability, Portability, Testability.',
    moduleSlug: 'modul-6',
    relatedTerms: ['furps', 'reliabilitas', 'usability'],
    example: 'Mengukur efisiensi sistem melalui konsumsi memori dan latensi query.'
  },
  {
    id: 'jurnal-ilmiah',
    term: 'Jurnal Ilmiah',
    english: 'Scientific Journal',
    meaning: 'Terbitan berkala ilmiah yang memuat artikel hasil penelitian asli yang telah melalui proses telaah sejawat (peer-review) ketat.',
    moduleSlug: 'modul-5',
    relatedTerms: ['prosiding', 'peer-review', 'literature-review'],
    example: 'IEEE Transactions on Software Engineering.'
  },
  {
    id: 'kane-model',
    term: 'Model Kane',
    english: 'Kane Research Model',
    meaning: 'Model proses riset kategori generalised yang memiliki 11 tahap dengan alternatif metode pengumpulan dan pengolahan data.',
    moduleSlug: 'modul-2',
    relatedTerms: ['generalised', 'sharp-model'],
    example: 'Riset yang menyediakan cabang alternatif saat data kuantitatif tidak tersedia.'
  },
  {
    id: 'keaslian-topik',
    term: 'Keaslian Topik',
    english: 'Topic Originality',
    meaning: 'Kriteria penilaian umum skripsi yang menilai apakah topik penelitian belum pernah diteliti sebelumnya; dibedakan dari pentingnya penemuan.',
    moduleSlug: 'modul-1',
    relatedTerms: ['originalitas', 'kriteria-penilaian'],
    example: 'Topik unik di kampus setempat namun metode yang diuji standar.'
  },
  {
    id: 'kesalahan-tipe-1',
    term: 'Kesalahan Tipe I (Type I Error)',
    english: 'Type I Error (False Positive)',
    meaning: 'Kesalahan statistik di mana peneliti MENOLAK hipotesis nol (H0) padahal H0 tersebut sebenarnya BENAR; disimbolkan dengan alpha (α).',
    moduleSlug: 'modul-3',
    relatedTerms: ['kesalahan-tipe-2', 'alpha-taraf-nyata', 'hipotesis-nol'],
    example: 'Menyimpulkan ada perbedaan performa padahal di dunia nyata performanya identik.'
  },
  {
    id: 'kesalahan-tipe-2',
    term: 'Kesalahan Tipe II (Type II Error)',
    english: 'Type II Error (False Negative)',
    meaning: 'Kesalahan statistik di mana peneliti MENERIMA hipotesis nol (H0) padahal H0 tersebut sebenarnya SALAH; disimbolkan dengan beta (β).',
    moduleSlug: 'modul-3',
    relatedTerms: ['kesalahan-tipe-1', 'beta-probabilitas', 'power-of-test'],
    example: 'Gagal mendeteksi perbedaan akurasi padahal algoritma baru sebenarnya jauh lebih unggul.'
  },
  {
    id: 'keselarasan-skripsi',
    term: 'Keselarasan Skripsi',
    english: 'Research Alignment',
    meaning: 'Aturan emas metodologi ilmiah: Masalah ↔ Tujuan ↔ Data ↔ Kesimpulan harus terhubung selaras tanpa ada bagian yang melenceng.',
    moduleSlug: 'modul-1',
    relatedTerms: ['rumusan-masalah', 'kesimpulan-penelitian', 'evaluasi-objektif'],
    example: 'Bila ada 2 rumusan masalah, harus ada 2 tujuan, data pembuktian, dan 2 kesimpulan.'
  },
  {
    id: 'knowledge',
    term: 'Knowledge (Pengetahuan)',
    english: 'Knowledge',
    meaning: 'Tingkatan pemahaman yang lebih tinggi dalam piramida DIKW yang mengaitkan informasi dengan konteks, pola penyebab, dan implikasi.',
    moduleSlug: 'modul-2',
    relatedTerms: ['data', 'informasi', 'wisdom'],
    example: 'Memahami bahwa lonjakan beban pendaftaran di portal memicu kebocoran memori.'
  },
  {
    id: 'kr-20',
    term: 'KR-20 (Kuder-Richardson 20)',
    english: 'Kuder-Richardson Formula 20',
    meaning: 'Formula statistik untuk menguji konsistensi internal reliabilitas instrumen yang memiliki butir item dikotomi (benar=1, salah=0).',
    moduleSlug: 'modul-6',
    relatedTerms: ['cronbach-alpha', 'reliabilitas', 'split-half'],
    example: 'Menguji tes kompetensi algoritma mahasiswa yang berskor 1 atau 0.'
  },
  {
    id: 'kriteria-penilaian',
    term: 'Kriteria Penilaian Skripsi',
    english: 'Thesis Evaluation Criteria',
    meaning: 'Empat kelompok penilaian skripsi modul: Umum (keaslian & pentingnya penemuan), Laporan (kejelasan & rujukan), Sidang (argumentasi), dan Lainnya (sikap & tenggat).',
    moduleSlug: 'modul-1',
    relatedTerms: ['sidang', 'laporan-penelitian', 'argumentasi'],
    example: 'Laporan rapi dinilai di ranah Laporan, namun argumentasi lisan dinilai di Sidang.'
  },
  {
    id: 'kualitatif',
    term: 'Kualitatif',
    english: 'Qualitative Research',
    meaning: 'Pendekatan penelitian berakar ilmu sosial yang menekankan peningkatan pemahaman atas area substantif lewat data tidak terstruktur (wawancara, observasi).',
    moduleSlug: 'modul-2',
    relatedTerms: ['kuantitatif', 'data-kualitatif'],
    example: 'Mengkaji alasan psikologis mahasiswa enggan membaca surat pengumuman di portal.'
  },
  {
    id: 'kuantitatif',
    term: 'Kuantitatif',
    english: 'Quantitative Research',
    meaning: 'Pendekatan penelitian berbasis pengukuran skala numerik, data terstruktur, dan pembuktian hipotesis melalui analisis statistik.',
    moduleSlug: 'modul-2',
    relatedTerms: ['kualitatif', 'data-numerik'],
    example: 'Mengukur latensi query dan persentase utilisasi CPU server.'
  },
  {
    id: 'kuesioner',
    term: 'Kuesioner (Angket)',
    english: 'Questionnaire',
    meaning: 'Instrumen penelitian tertulis yang memuat daftar pertanyaan terstandar untuk mengumpulkan data dari banyak subjek responden.',
    moduleSlug: 'modul-6',
    relatedTerms: ['survei', 'skala-likert', 'checklist-kuesioner'],
    example: 'Kuesioner kepuasan pengguna portal kampus beranggotakan 15 butir pernyataan.'
  },
  {
    id: 'kutipan-langsung',
    term: 'Kutipan Langsung',
    english: 'Direct Quotation',
    meaning: 'Bentuk pengutipan di mana kata-kata penulis asli disalin persis tanpa perubahan dan diapit tanda petik; tetap wajib menyertakan sitasi sumber.',
    moduleSlug: 'modul-5',
    relatedTerms: ['parafrasa', 'sitasi'],
    example: '"Menurut Brookshear [2], ilmu komputer membangun landasan ilmiah bagi pemrograman."'
  },
  {
    id: 'laporan-penelitian',
    term: 'Laporan Penelitian / Skripsi',
    english: 'Research Report / Thesis',
    meaning: 'Dokumen naskah akademik tertulis yang menyajikan proses riset lengkap dari latar belakang, metodologi, data, analisis, hingga kesimpulan akhir.',
    moduleSlug: 'modul-1',
    relatedTerms: ['skripsi', 'keselarasan-skripsi'],
    example: 'Buku skripsi mahasiswa S1 yang dipertahankan dalam ujian sidang.'
  },
  {
    id: 'leading-question',
    term: 'Leading Question (Pertanyaan Menggiring)',
    english: 'Leading Question',
    meaning: 'Pertanyaan dalam kuesioner yang menggunakan kata bermuatan emosional sehingga menggiring responden ke arah jawaban tertentu; hal ini wajib dihindari!',
    moduleSlug: 'modul-6',
    relatedTerms: ['checklist-kuesioner', 'kuesioner'],
    example: '"Bukankah sistem baru kami ini sangat luar biasa?" (Contoh buruk).'
  },
  {
    id: 'leitner-box',
    term: 'Sistem Leitner (5 Kotak)',
    english: 'Leitner Spaced Repetition Box System',
    meaning: 'Metode pengulangan berjeda (spaced repetition) untuk menghafal kartu: jawaban benar naik kotak dengan jeda hari lebih panjang; jawaban salah kembali ke Kotak 1.',
    moduleSlug: 'modul-1',
    relatedTerms: ['flashcard', 'spaced-repetition'],
    example: 'Kotak 1 diulang tiap 1 hari; Kotak 5 diulang tiap 16 hari.'
  },
  {
    id: 'likert-skala',
    term: 'Skala Likert',
    english: 'Likert Scale',
    meaning: 'Format skala pengukuran sikap dan persepsi yang memiliki jawaban bergradasi (misal Sangat Setuju=5 s/d Sangat Tidak Setuju=1) dengan 3-7 interval pilihan.',
    moduleSlug: 'modul-6',
    relatedTerms: ['kontinum-skala', 'skor-ideal', 'skala-guttman'],
    example: 'Kuesioner 5 tingkat: SS (5), ST (4), RG (3), TS (2), STS (1).'
  },
  {
    id: 'lima-generasi',
    term: '5 Generasi Komputer',
    english: 'Five Generations of Computers',
    meaning: 'Periodisasi lompatan komponen perangkat keras: Gen I (Vacuum Tubes) → Gen II (Transistor) → Gen III (IC) → Gen IV (LSI/VLSI) → Gen V (ULSI).',
    moduleSlug: 'modul-1',
    relatedTerms: ['sejarah-komputer', 'vacuum-tube', 'transistor', 'vlsi', 'ulsi'],
    example: 'Generasi IV memperkenalkan microcomputer dan antarmuka grafis (GUI).'
  },
  {
    id: 'literature-review',
    term: 'Literature Review (Tinjauan Pustaka)',
    english: 'Literature Review',
    meaning: 'Uraian teori, temuan, dan bahan acuan sebagai landasan pemikiran masalah penelitian untuk menghindari duplikasi dan memperjelas kontribusi.',
    moduleSlug: 'modul-5',
    relatedTerms: ['sintesis-literatur', 'literature-search'],
    example: 'Bab 2 skripsi yang menyatukan teori temu balik dan temuan riset terdahulu.'
  },
  {
    id: 'literature-search',
    term: 'Literature Search (Penelusuran Pustaka)',
    english: 'Literature Search',
    meaning: 'Proses menemukan dan mengumpulkan dokumen sumber rujukan yang relevan dari basis data jurnal atau repositori digital.',
    moduleSlug: 'modul-5',
    relatedTerms: ['literature-review', 'mendeley'],
    example: 'Mengetik query kata kunci di database IEEE Xplore dan Google Scholar.'
  },
  {
    id: 'logika',
    term: 'Logika',
    english: 'Logic',
    meaning: 'Keterampilan dan prinsip penalaran yang digunakan untuk membedakan antara penarikan kesimpulan yang tepat (valid) dan tidak tepat (invalid).',
    moduleSlug: 'modul-3',
    relatedTerms: ['penalaran', 'deduktif', 'induktif'],
    example: 'Menilai keabsahan silogisme deduktif dalam algoritma inferensi.'
  },
  {
    id: 'lsi-vlsi',
    term: 'LSI / VLSI',
    english: 'Large Scale / Very Large Scale Integration',
    meaning: 'Teknologi pemadatan ribuan hingga jutaan transistor pada sebuah chip mikroprosesor yang menandai komputer Generasi IV (1975-1985).',
    moduleSlug: 'modul-1',
    relatedTerms: ['lima-generasi', 'integrated-circuit', 'ulsi'],
    example: 'Mikroprosesor Intel 8086 pada era komputer mikro pribadi (PC).'
  },
  {
    id: 'manipulasi-treatment',
    term: 'Manipulasi Treatment',
    english: 'Treatment Manipulation',
    meaning: 'Tindakan sengaja peneliti mengubah atau menerapkan variabel independen pada kelompok tertentu untuk mengamati dampaknya (ciri khas eksperimen).',
    moduleSlug: 'modul-4',
    relatedTerms: ['experimental-research', 'causal-comparative'],
    example: 'Memberikan fitur rekomendasi otomatis ke Kelompok A dan tidak ke Kelompok B.'
  },
  {
    id: 'masalah-penelitian',
    term: 'Masalah Penelitian',
    english: 'Research Problem',
    meaning: 'Kesenjangan antara kondisi teoritis/harapan dengan kenyataan aktual yang memerlukan investigasi sistematis untuk dipecahkan.',
    moduleSlug: 'modul-3',
    relatedTerms: ['perumusan-masalah', 'rumusan-masalah', 'feasible'],
    example: 'Tingginya waktu tunggu mahasiswa saat mengakses pengumuman beasiswa.'
  },
  {
    id: 'mendeley',
    term: 'Mendeley',
    english: 'Mendeley Reference Manager',
    meaning: 'Perangkat lunak manajer referensi dan jejaring sosial akademis yang secara spesifik dicantumkan dalam modul RTI untuk mengelola berkas PDF dan sitasi.',
    moduleSlug: 'modul-5',
    relatedTerms: ['overleaf', 'sitasi', 'ieee-style'],
    example: 'Mengimpor file bibtex dari Mendeley ke dokumen skripsi di Overleaf.'
  },
  {
    id: 'meta-analysis',
    term: 'Meta-Analysis',
    english: 'Meta-Analysis',
    meaning: 'Bentuk quantitative systematic literature review yang menggabungkan hasil data statistik dari puluhan penelitian independen terdahulu.',
    moduleSlug: 'modul-5',
    relatedTerms: ['systematic-review', 'literature-review'],
    example: 'Menghitung rata-rata ukuran efek akurasi algoritma SVM dari 50 paper berbeda.'
  },
  {
    id: 'metode',
    term: 'Metode',
    english: 'Method',
    meaning: 'Kerangka tindakan atau cara berpikir tertentu yang terarah pada tujuan khusus; merupakan bagian operasional di dalam metodologi.',
    moduleSlug: 'modul-3',
    relatedTerms: ['metodologi', 'metode-ilmiah'],
    example: 'Metode wawancara semi-terstruktur atau metode benchmark sistem.'
  },
  {
    id: 'metode-ilmiah',
    term: 'Metode Ilmiah',
    english: 'Scientific Method',
    meaning: 'Proses sistematis untuk memperoleh pengetahuan baru yang dapat diuji kebenarannya berdasarkan bukti fisis/empiris dan logika yang sahih.',
    moduleSlug: 'modul-3',
    relatedTerms: ['metode', 'metodologi', 'empiris'],
    example: 'Menyusun hipotesis, menguji data di lab, dan mempublikasikan hasil temuan.'
  },
  {
    id: 'metodologi',
    term: 'Metodologi Penelitian',
    english: 'Research Methodology',
    meaning: 'Tahapan perencanaan komprehensif yang memadukan metode, teknik, alat bantu (tools), dan dokumentasi untuk meminimalkan risiko kegagalan riset.',
    moduleSlug: 'modul-3',
    relatedTerms: ['metode', 'desain-penelitian'],
    example: 'Bab 3 skripsi yang merancang keseluruhan alur kerja dari instrumen hingga analisis.'
  },
  {
    id: 'misleading-graph',
    term: 'Misleading Graph (Grafik Menyesatkan)',
    english: 'Misleading Graph',
    meaning: 'Grafik penyajian data yang mendistorsi persepsi pembaca karena pemotongan skala sumbu Y atau pemilihan interval yang tidak proporsional.',
    moduleSlug: 'modul-7',
    relatedTerms: ['penyajian-numeris', 'visualisasi'],
    example: 'Memulai sumbu Y dari 98% sehingga selisih 0,5% terlihat seperti jurang perbedaan raksasa.'
  },
  {
    id: 'mutakhir',
    term: 'Mutakhir (Keterkinian Pustaka)',
    english: 'Up-to-date Literature',
    meaning: 'Kriteria kualitas rujukan pustaka yang menunjukkan keterkinian tahun terbit; modul RTI secara spesifik menggunakan acuan tiga tahun terakhir.',
    moduleSlug: 'modul-5',
    relatedTerms: ['kualitas-literatur', 'relevan', 'memadai'],
    example: 'Mengutamakan paper jurnal yang terbit dalam 3 tahun terakhir.'
  },
  {
    id: 'narrative-review',
    term: 'Narrative Literature Review',
    english: 'Narrative Literature Review',
    meaning: 'Tinjauan pustaka tradisional yang menyajikan telaah konseptual dan rangkuman komprehensif tanpa kewajiban protokol seleksi matematis yang kaku.',
    moduleSlug: 'modul-5',
    relatedTerms: ['systematic-review', 'literature-review'],
    example: 'Uraian Bab 2 tinjauan teori algoritma pengurutan data.'
  },
  {
    id: 'nature',
    term: 'Nature (Hakikat Kontribusi)',
    english: 'Nature of Research Contribution',
    meaning: 'Jenis atau hakikat sumbangsih yang diberikan penelitian terhadap khazanah pengetahuan (elemen ketiga dari triad Field, Approach, Nature).',
    moduleSlug: 'modul-2',
    relatedTerms: ['field', 'approach', 'kontribusi'],
    example: 'Kontribusi berupa metode baru atau evaluasi komparatif empiris.'
  },
  {
    id: 'newell-simon',
    term: 'Newell & Simon',
    english: 'Allen Newell & Herbert A. Simon',
    meaning: 'Ilmuwan peraih Turing Award yang menyatakan bahwa Computer Science adalah disiplin ilmu empiris di mana setiap program baru dipandang sebagai sebuah percobaan.',
    moduleSlug: 'modul-1',
    relatedTerms: ['artefak', 'empiris', 'ilmu-komputer'],
    example: 'Pandangan Newell-Simon menjadi dasar bahwa software harus diuji perilakunya.'
  },
  {
    id: 'nilai-penelitian',
    term: 'Nilai Penelitian (Research Value)',
    english: 'Research Value',
    meaning: 'Syarat masalah penelitian yang baik menurut modul: bersifat asli/original, menyatakan hubungan dengan bidang lain, dan dapat diuji secara empiris.',
    moduleSlug: 'modul-3',
    relatedTerms: ['feasible', 'masalah-penelitian'],
    example: 'Topik skripsi yang menghubungkan algoritma temu balik dengan kebutuhan sosial mahasiswa.'
  },
  {
    id: 'nominal-skala',
    term: 'Skala Nominal',
    english: 'Nominal Scale',
    meaning: 'Skala pengukuran paling dasar yang hanya berfungsi membedakan kategori atau label objek tanpa memiliki tingkatan atau urutan tertentu.',
    moduleSlug: 'modul-6',
    relatedTerms: ['skala-ordinal', 'skala-interval'],
    example: 'Jenis sistem operasi (1=Windows, 2=Linux, 3=macOS).'
  },
  {
    id: 'nonprobability-sampling',
    term: 'Nonprobability Sampling',
    english: 'Nonprobability Sampling',
    meaning: 'Teknik penarikan sampel yang tidak memberi kesempatan atau peluang yang sama bagi setiap anggota populasi untuk terpilih menjadi sampel.',
    moduleSlug: 'modul-6',
    relatedTerms: ['probability-sampling', 'purposive-sampling', 'quota-sampling'],
    example: 'Quota sampling, Incidental sampling, Purposive sampling, Systematic (menurut modul).'
  },
  {
    id: 'observasi',
    term: 'Observasi',
    english: 'Observation',
    meaning: 'Teknik pengumpulan data dengan cara mengamati, merekam, dan menganalisis fenomena atau perilaku subjek di lapangan secara sistematis.',
    moduleSlug: 'modul-6',
    relatedTerms: ['hawthorne-effect', 'instrumen-penelitian'],
    example: 'Mencatat waktu interaksi pengguna saat mencari tombol pendaftaran di layar portal.'
  },
  {
    id: 'ordinal-skala',
    term: 'Skala Ordinal',
    english: 'Ordinal Scale',
    meaning: 'Skala pengukuran data yang memiliki tingkatan atau urutan kategori, tetapi jarak antartingkatan tidak dapat dipastikan setara.',
    moduleSlug: 'modul-6',
    relatedTerms: ['skala-nominal', 'skala-interval'],
    example: 'Peringkat kecepatan respon: Cepat (1), Sedang (2), Lambat (3).'
  },
  {
    id: 'originalitas',
    term: 'Originalitas',
    english: 'Originality',
    meaning: 'Melakukan sesuatu yang belum pernah dilakukan sebelumnya; bentuknya menurut modul meliputi alat/metode baru, eksplorasi hal tak diketahui, atau interpretasi data baru.',
    moduleSlug: 'modul-2',
    relatedTerms: ['riset', 'kontribusi'],
    example: 'Menerapkan algoritma clustering pada pola navigasi portal kampus yang belum pernah diteliti.'
  },
  {
    id: 'overgeneralization',
    term: 'Overgeneralization',
    english: 'Overgeneralization',
    meaning: 'Kesalahan menarik kesimpulan yang terlalu luas melampaui kondisi, sampel, atau lingkungan yang sebenarnya diteliti; hal ini dilarang oleh modul.',
    moduleSlug: 'modul-7',
    relatedTerms: ['kesimpulan-penelitian', 'tujuh-pertanyaan-konteks'],
    example: 'Hanya menguji di lab kampus lokal tapi menyimpulkan software tercepat di dunia.'
  },
  {
    id: 'overleaf',
    term: 'Overleaf LaTeX',
    english: 'Overleaf LaTeX Editor',
    meaning: 'Platform editor dokumen LaTeX berbasis cloud yang secara spesifik dicantumkan dalam modul RTI sebagai alat bantu penulisan naskah artikel ilmiah.',
    moduleSlug: 'modul-5',
    relatedTerms: ['mendeley', 'ieee-style'],
    example: 'Menulis naskah publikasi format IEEE dua kolom di Overleaf.'
  },
  {
    id: 'parafrasa',
    term: 'Parafrasa',
    english: 'Paraphrasing',
    meaning: 'Menyusun ulang gagasan orang lain dengan kata-kata dan struktur kalimat sendiri; etika ilmiah mewajibkan tetap mencantumkan sitasi rujukan sumber asli.',
    moduleSlug: 'modul-5',
    relatedTerms: ['kutipan-langsung', 'sitasi', 'plagiarisme'],
    example: 'Mengungkapkan kembali teori efisiensi algoritma dengan kalimat sendiri disertai nomor [1].'
  },
  {
    id: 'pembimbing',
    term: 'Dosen Pembimbing',
    english: 'Thesis Supervisor / Advisor',
    meaning: 'Pendidik yang membantu mahasiswa dalam area subjek, mengarahkan pemikiran ilmiah, dan memonitor kemajuan; bukan pelaksana pengganti tugas mahasiswa.',
    moduleSlug: 'modul-2',
    relatedTerms: ['penguji', 'mahasiswa'],
    example: 'Memberi masukan metodologis mingguan saat mahasiswa berkonsultasi.'
  },
  {
    id: 'penguji',
    term: 'Dosen Penguji',
    english: 'Thesis Examiner',
    meaning: 'Pihak akademis yang bertugas menilai kualitas penelitian, argumentasi pertanggungjawaban, kelebihan/kekurangan, dan kelulusan mahasiswa di sidang.',
    moduleSlug: 'modul-2',
    relatedTerms: ['quality-evaluator', 'quality-assuror', 'sidang'],
    example: 'Menguji penalaran mahasiswa terkait pemilihan sampel di ruang sidang skripsi.'
  },
  {
    id: 'penyajian-data',
    term: 'Penyajian Data',
    english: 'Data Presentation',
    meaning: 'Bentuk tampilan data penelitian dalam wujud tabel, grafik, flowchart, atau matriks; penyajian saja belum sama dengan analisis data.',
    moduleSlug: 'modul-7',
    relatedTerms: ['analisis-data', 'penyajian-numeris'],
    example: 'Menampilkan tabel perbandingan memori antara dua konfigurasi database.'
  },
  {
    id: 'pilot-test',
    term: 'Pilot Test (Uji Coba Kuesioner)',
    english: 'Pilot Study / Pretest',
    meaning: 'Uji coba instrumen kuesioner kepada kelompok responden kecil sebelum survei utama untuk mendeteksi kelemahan butir pertanyaan; bukan pengganti survei utama.',
    moduleSlug: 'modul-6',
    relatedTerms: ['proses-survei', 'kuesioner'],
    example: 'Menyebarkan draf kuesioner ke 20 mahasiswa sebelum disebar ke 300 sampel utama.'
  },
  {
    id: 'polar-chart',
    term: 'Polar Chart',
    english: 'Polar Chart / Radar Chart',
    meaning: 'Jenis visualisasi grafik koordinat melingkar yang menampilkan beberapa sumbu nilai kuantitatif yang memancar dari titik pusat.',
    moduleSlug: 'modul-7',
    relatedTerms: ['penyajian-numeris', 'visualisasi'],
    example: 'Membandingkan skor 5 dimensi FURPS+ antar-dua versi portal kampus.'
  },
  {
    id: 'populasi',
    term: 'Populasi',
    english: 'Population',
    meaning: 'Wilayah generalisasi yang terdiri atas objek/subjek yang memiliki kuantitas dan karakteristik tertentu yang ditetapkan peneliti untuk diteliti.',
    moduleSlug: 'modul-6',
    relatedTerms: ['sampel', 'representatif'],
    example: 'Seluruh 8.000 mahasiswa aktif yang terdaftar di universitas.'
  },
  {
    id: 'poster-ilmiah',
    term: 'Poster Ilmiah',
    english: 'Scientific Poster',
    meaning: 'Bentuk presentasi visual ringkas hasil penelitian dalam konferensi ilmiah yang memfasilitasi dialog dua arah dan jejaring ilmuwan muda.',
    moduleSlug: 'modul-7',
    relatedTerms: ['storyboard', 'semiglossy', 'tipografi-poster'],
    example: 'Poster ukuran A0 yang dipajang di aula konferensi ICACSIS.'
  },
  {
    id: 'power-of-test',
    term: 'Power of Test (Kekuatan Uji)',
    english: 'Statistical Power (1 - β)',
    meaning: 'Probabilitas untuk menolak hipotesis nol (H0) secara benar ketika H0 memang sebenarnya salah di populasi (disimbolkan dengan 1 - β).',
    moduleSlug: 'modul-3',
    relatedTerms: ['kesalahan-tipe-2', 'beta-probabilitas'],
    example: 'Kekuatan uji 0,80 berarti ada peluang 80% mendeteksi perbedaan nyata antar-sistem.'
  },
  {
    id: 'probability-sampling',
    term: 'Probability Sampling',
    english: 'Probability Sampling',
    meaning: 'Teknik penarikan sampel yang memberikan peluang yang sama besar bagi setiap anggota populasi untuk terpilih; memungkinkan generalisasi statistik terukur.',
    moduleSlug: 'modul-6',
    relatedTerms: ['nonprobability-sampling', 'simple-random'],
    example: 'Simple Random Sampling, Proportionate Stratified, Area/Cluster Sampling.'
  },
  {
    id: 'proportionate-stratified',
    term: 'Proportionate Stratified Random',
    english: 'Proportionate Stratified Random Sampling',
    meaning: 'Teknik sampling acak berstrata di mana sampel diambil sebanding dengan proporsi besaran masing-masing strata populasi heterogen.',
    moduleSlug: 'modul-6',
    relatedTerms: ['stratified-sampling', 'disproportionate-stratified'],
    example: 'Mengambil sampel 5% dari tiap fakultas (Fakultas Teknik 50 orang, MIPA 20 orang).'
  },
  {
    id: 'prosiding',
    term: 'Prosiding Konferensi',
    english: 'Conference Proceedings',
    meaning: 'Kumpulan makalah ilmiah yang telah dipresentasikan dalam suatu konferensi ilmiah dan dipublikasikan secara resmi.',
    moduleSlug: 'modul-5',
    relatedTerms: ['jurnal-ilmiah', 'cycles-of-literature'],
    example: 'IEEE International Conference Proceedings on Advanced Computer Science.'
  },
  {
    id: 'pseudocode',
    term: 'Pseudocode',
    english: 'Pseudocode',
    meaning: 'Deskripsi algoritma tingkat tinggi informal yang menggunakan konvensi struktural bahasa pemrograman agar mudah dipahami manusia tanpa terikat sintaks spesifik.',
    moduleSlug: 'modul-7',
    relatedTerms: ['algoritma', 'flowchart', 'source-code'],
    example: 'Notasi pseudocode fungsi binary search dalam Bab 4 skripsi.'
  },
  {
    id: 'purposive-sampling',
    term: 'Purposive Sampling',
    english: 'Purposive / Judgemental Sampling',
    meaning: 'Teknik nonprobability sampling di mana peneliti memilih sampel berdasarkan kriteria atau pertimbangan kualifikasi tertentu; sangat cocok untuk studi kualitatif.',
    moduleSlug: 'modul-6',
    relatedTerms: ['nonprobability-sampling', 'quota-sampling'],
    example: 'Memilih narasumber yang hanya menjabat sebagai administrator jaringan senior minimal 3 tahun.'
  },
  {
    id: 'quality-assuror',
    term: 'Quality Assuror',
    english: 'Quality Assuror Examiner Model',
    meaning: 'Model peran penguji yang mereview hasil pada beberapa tahap berkala, memahami proses kemajuan, dan ikut bertanggung jawab mengawal kualitas penelitian.',
    moduleSlug: 'modul-2',
    relatedTerms: ['quality-evaluator', 'penguji'],
    example: 'Dosen penelaah yang memberikan masukan pada seminar proposal dan seminar hasil.'
  },
  {
    id: 'quality-evaluator',
    term: 'Quality Evaluator',
    english: 'Quality Evaluator Examiner Model',
    meaning: 'Model peran penguji yang berorientasi murni pada hasil akhir (kontribusi, kompleksitas, kegunaan) berdasarkan laporan dan sidang tanpa komunikasi selama riset.',
    moduleSlug: 'modul-2',
    relatedTerms: ['quality-assuror', 'penguji'],
    example: 'Penguji eksternal yang baru membaca berkas saat sidang ujian berlangsung.'
  },
  {
    id: 'quasi-experimental',
    term: 'Quasi Experimental (Versi Modul)',
    english: 'Quasi-Experimental Design',
    meaning: 'Desain eksperimen tanpa kelompok kontrol pembanding yang diukur sesudah perlakuan (one-shot posttest with no control group), biasanya menggunakan data kualitatif.',
    moduleSlug: 'modul-4',
    relatedTerms: ['experimental-research', 'desain-penelitian'],
    example: 'Mengukur persepsi pengguna tepat setelah sistem baru kampus diluncurkan tanpa ada pembanding.'
  },
  {
    id: 'quota-sampling',
    term: 'Quota Sampling',
    english: 'Quota Sampling',
    meaning: 'Teknik nonprobability sampling yang menetapkan kuota jumlah sampel berdasarkan ciri tertentu hingga jumlah target terpenuhi.',
    moduleSlug: 'modul-6',
    relatedTerms: ['nonprobability-sampling', 'purposive-sampling'],
    example: 'Mengumpulkan tepat 50 pengguna Android dan 50 pengguna iPhone.'
  },
  {
    id: 'rasio-skala',
    term: 'Skala Rasio',
    english: 'Ratio Scale',
    meaning: 'Tingkatan skala pengukuran tertinggi yang memiliki urutan, jarak antarnilai yang setara, dan memiliki titik nol absolut (nol mutlak).',
    moduleSlug: 'modul-6',
    relatedTerms: ['skala-interval', 'skala-ordinal'],
    example: 'Waktu eksekusi dalam detik, kapasitas hard disk dalam gigabyte.'
  },
  {
    id: 'rating-scale',
    term: 'Rating Scale',
    english: 'Rating Scale',
    meaning: 'Format skala instrumen di mana responden langsung memilih jawaban kuantitatif (angka skor mentah) yang disediakan oleh peneliti.',
    moduleSlug: 'modul-6',
    relatedTerms: ['skala-likert', 'skala-guttman'],
    example: 'Memberikan penilaian angka 0 sampai 4 untuk kenyamanan tata letak halaman.'
  },
  {
    id: 'references-list',
    term: 'References (Daftar Referensi)',
    english: 'References Section',
    meaning: 'Daftar rujukan di akhir laporan karya ilmiah; dalam format IEEE diberi judul References dan diurutkan berdasarkan nomor urut kemunculan dalam teks.',
    moduleSlug: 'modul-7',
    relatedTerms: ['ieee-style', 'sitasi'],
    example: 'Halaman terakhir skripsi yang memuat rujukan [1] sampai [25].'
  },
  {
    id: 'reliabilitas',
    term: 'Reliabilitas (Reliability)',
    english: 'Reliability',
    meaning: 'Tingkat konsistensi alat ukur; pengukuran berulang atas karakteristik yang sama memberikan hasil yang sama stabilnya.',
    moduleSlug: 'modul-6',
    relatedTerms: ['validitas', 'cronbach-alpha', 'spearman-brown'],
    example: 'Kuesioner yang menghasilkan skor serupa saat diisi ulang seminggu kemudian.'
  },
  {
    id: 'research-wheel',
    term: 'Research Wheel',
    english: 'Research Wheel',
    meaning: 'Diagram siklus riset yang menghubungkan 5 pilar: Kerangka konseptual → Pertanyaan/Hipotesis → Pengumpulan data → Analisis → Pengembangan pemahaman.',
    moduleSlug: 'modul-2',
    relatedTerms: ['circulatory', 'tahapan-riset'],
    example: 'Siklus pengulangan riset dari teori menuju observasi dan kembali memperkaya teori.'
  },
  {
    id: 'riset',
    term: 'Riset (Penelitian)',
    english: 'Research',
    meaning: 'Investigasi asli yang dilakukan secara terencana dan sistematis untuk memperoleh pengetahuan dan pemahaman baru.',
    moduleSlug: 'modul-2',
    relatedTerms: ['originalitas', 'kontribusi'],
    example: 'Investigasi performa arsitektur caching untuk server berkapasitas terbatas.'
  },
  {
    id: 'roscoe-saran',
    term: 'Saran Roscoe',
    english: 'Roscoe Sample Size Guidelines',
    meaning: 'Empat pedoman ukuran sampel dari Roscoe: ukuran layak 30-500, per kategori minimal 30, analisis multivariat minimal 10x variabel, eksperimen sederhana 10-20.',
    moduleSlug: 'modul-6',
    relatedTerms: ['ukuran-sampel', 'isaac-michael'],
    example: 'Penelitian 4 variabel memerlukan minimal 10 × 4 = 40 responden.'
  },
  {
    id: 'rumusan-masalah',
    term: 'Rumusan Masalah',
    english: 'Problem Statement / Research Question',
    meaning: 'Pertanyaan penelitian (research question) atau kalimat deklaratif yang terfokus pada dependent variable dan mengimplikasikan data pemecahannya.',
    moduleSlug: 'modul-3',
    relatedTerms: ['masalah-penelitian', 'dependent-variable'],
    example: '"Bagaimana pengaruh penambahan indexing B-Tree terhadap waktu respon portal?"'
  },
  {
    id: 'sampling-jenuh',
    term: 'Sampling Jenuh / Sensus',
    english: 'Saturated Sampling / Census',
    meaning: 'Teknik sampling nonprobability di mana seluruh anggota populasi dijadikan sampel penelitian; digunakan bila populasi relatif kecil (< 30).',
    moduleSlug: 'modul-6',
    relatedTerms: ['nonprobability-sampling', 'populasi'],
    example: 'Meneliti seluruh 15 staf teknisi pusat komputer universitas.'
  },
  {
    id: 'scatter-plot',
    term: 'Scatter Diagram (Diagram Pencar)',
    english: 'Scatter Plot',
    meaning: 'Grafik penyajian numerik yang menampilkan sebaran titik pasangan nilai dari dua variabel untuk melihat tren pola hubungan atau korelasinya.',
    moduleSlug: 'modul-7',
    relatedTerms: ['penyajian-numeris', 'correlational-research'],
    example: 'Plot sebaran antara ukuran memori RAM dan latensi query.'
  },
  {
    id: 'schneider-gersting',
    term: 'Schneider & Gersting',
    english: 'G. Michael Schneider & Judith Gersting',
    meaning: 'Penulis buku Invitation to CS yang merumuskan bahwa kajian algoritma mencakup sifat matematis, realisasi hardware, realisasi bahasa, dan penerapannya.',
    moduleSlug: 'modul-1',
    relatedTerms: ['algoritma', 'ilmu-komputer', 'biermann'],
    example: 'Algoritma dikaji mulai dari formula formal hingga eksekusi mikroprosesor.'
  },
  {
    id: 'scribus',
    term: 'Scribus',
    english: 'Scribus Open-Source Desktop Publishing',
    meaning: 'Perangkat lunak tata letak desktop publishing gratis dan open-source yang secara khusus disebut dalam modul untuk mendesain poster ilmiah.',
    moduleSlug: 'modul-7',
    relatedTerms: ['poster-ilmiah', 'indesign-software'],
    example: 'Alternatif gratis pengganti Adobe InDesign untuk pembuatan template poster.'
  },
  {
    id: 'semantic-differential',
    term: 'Semantic Differential (Osgood)',
    english: 'Semantic Differential Scale',
    meaning: 'Format skala instrumen oleh Osgood berupa garis kontinum di antara sepasang kata sifat yang berlawanan kutub (ejaan slide: Semantic Deferential).',
    moduleSlug: 'modul-6',
    relatedTerms: ['skala-likert', 'skala-guttman'],
    example: 'Menilai antarmuka portal pada rentang: Sulit [ 1 - 2 - 3 - 4 - 5 ] Mudah.'
  },
  {
    id: 'semiglossy',
    term: 'Semiglossy',
    english: 'Semiglossy paper finish',
    meaning: 'Jenis bahan kertas cetak yang disarankan oleh modul untuk poster ilmiah karena menghasilkan warna tajam tanpa memantulkan kilau lampu sorot ruangan.',
    moduleSlug: 'modul-7',
    relatedTerms: ['poster-ilmiah', 'ultraglossy-peringatan'],
    example: 'Mencetak poster skripsi pada kertas semiglossy agar nyaman dibaca pengunjung.'
  },
  {
    id: 'sequential',
    term: 'Sequential Model',
    english: 'Sequential Research Model',
    meaning: 'Model proses penelitian yang bergerak secara linear dan berurutan dari satu tahap ke tahap berikutnya tanpa lompatan (contoh model 7 tahap Sharp).',
    moduleSlug: 'modul-2',
    relatedTerms: ['sharp-model', 'generalised'],
    example: 'Menyelesaikan perumusan masalah secara tuntas sebelum mengumpulkan data.'
  },
  {
    id: 'sharp-model',
    term: 'Model Sharp (7 Tahap)',
    english: 'Sharp’s 7-Stage Sequential Model',
    meaning: 'Tujuh tahap linear: Broad area → Research topic → Decide approach → Plan research → Gather data → Analyse data → Present findings.',
    moduleSlug: 'modul-2',
    relatedTerms: ['sequential', 'kane-model'],
    example: 'Urutan baku metodologis skripsi yang wajib dihafal.'
  },
  {
    id: 'sidang',
    term: 'Sidang Tugas Akhir / Skripsi',
    english: 'Thesis Defense / Examination',
    meaning: 'Tahap ke-6 proses skripsi di mana mahasiswa menampilkan dan mempertahankan hasil penelitian serta argumentasi keputusannya di hadapan dewan penguji.',
    moduleSlug: 'modul-1',
    relatedTerms: ['kriteria-penilaian', 'argumentasi', 'skripsi'],
    example: 'Tanya jawab mengenai validitas instrumen dengan dosen penguji.'
  },
  {
    id: 'significance-test',
    term: 'Significance Test (Uji Signifikansi)',
    english: 'Statistical Significance Test',
    meaning: 'Uji statistik untuk memastikan apakah perbedaan atau hubungan data yang teramati bermakna secara ilmiah atau hanya kebetulan (misal t-test, ANOVA).',
    moduleSlug: 'modul-7',
    relatedTerms: ['p-value', 'evaluasi-objektif'],
    example: 'Uji paired t-test untuk membuktikan penurunan latensi signifikan pada p < 0,01.'
  },
  {
    id: 'simple-random',
    term: 'Simple Random Sampling',
    english: 'Simple Random Sampling',
    meaning: 'Teknik probability sampling di mana setiap anggota populasi homogen memiliki kesempatan sama untuk terpilih secara acak tanpa memperhatikan tingkatan.',
    moduleSlug: 'modul-6',
    relatedTerms: ['probability-sampling', 'populasi'],
    example: 'Mengundi nomor induk mahasiswa (NIM) menggunakan generator angka acak.'
  },
  {
    id: 'sintesis-literatur',
    term: 'Sintesis Literatur',
    english: 'Literature Synthesis',
    meaning: 'Pekerjaan menghubungkan, membandingkan, dan menganyam temuan dari berbagai artikel rujukan menjadi satu kesatuan pemahaman utuh yang melahirkan celah riset.',
    moduleSlug: 'modul-5',
    relatedTerms: ['literature-review', 'ringkasan-pustaka'],
    example: 'Mempertemukan dua pandangan pakar yang berbeda dan menyimpulkan jalan tengahnya.'
  },
  {
    id: 'sistem-informasi',
    term: 'Sistem Informasi (Information Systems)',
    english: 'Information Systems (IS)',
    meaning: 'Disiplin ilmu yang menurut Allen S. Lee mengkaji interaksi isu sosial dan teknologi: hubungan manusia dalam organisasi dengan hardware, software, dan data.',
    moduleSlug: 'modul-1',
    relatedTerms: ['ilmu-komputer', 'allen-s-lee'],
    example: 'Penelitian mengenai dampak adopsi sistem ERP terhadap kepuasan staf kampus.'
  },
  {
    id: 'sitasi',
    term: 'Sitasi (In-Text Citation)',
    english: 'In-Text Citation',
    meaning: 'Pencantuman penanda rujukan di dalam teks untuk membedakan pekerjaan peneliti dengan pemikiran orang lain; wajib diletakkan sebelum tanda baca.',
    moduleSlug: 'modul-5',
    relatedTerms: ['references-list', 'ieee-style', 'parafrasa'],
    example: 'Pernyataan "Struktur Trie memiliki kecepatan pencarian optimal [1]."'
  },
  {
    id: 'skor-ideal',
    term: 'Skor Ideal (Maksimum)',
    english: 'Ideal / Maximum Score',
    meaning: 'Skor tertinggi yang dapat diperoleh pada instrumen pengukuran bila seluruh responden memilih pilihan jawaban dengan bobot tertinggi (N × bobot max).',
    moduleSlug: 'modul-6',
    relatedTerms: ['skala-likert', 'kontinum-skala'],
    example: 'Pada 100 responden skala Likert 1-5, skor ideal adalah 100 × 5 = 500.'
  },
  {
    id: 'skripsi',
    term: 'Skripsi (Tugas Akhir S1)',
    english: 'Undergraduate Thesis',
    meaning: 'Tahap akhir jenjang sarjana (S1) untuk membangun dan menguji pengetahuan serta keahlian metodologis sebagai persiapan menjadi profesional.',
    moduleSlug: 'modul-1',
    relatedTerms: ['riset', 'sidang', 'proses-skripsi'],
    example: 'Karya ilmiah mahasiswa tingkat akhir yang terdiri dari 7 langkah proses riset.'
  },
  {
    id: 'snowball-sampling',
    term: 'Snowball Sampling',
    english: 'Snowball Sampling',
    meaning: 'Teknik sampling nonprobability di mana sampel mula-mula kecil, kemudian membesar secara berantai melalui rekomendasi dari informan sebelumnya.',
    moduleSlug: 'modul-6',
    relatedTerms: ['nonprobability-sampling', 'purposive-sampling'],
    example: 'Menemukan hacker atau staf peretas etis lewat rujukan informan pertama.'
  },
  {
    id: 'software-engineering',
    term: 'Software Engineering',
    english: 'Software Engineering',
    meaning: 'Subbidang Computer Science yang menerapkan pendekatan rekayasa sistematis dan terdisiplin dalam pengembangan, operasi, dan pemeliharaan perangkat lunak.',
    moduleSlug: 'modul-1',
    relatedTerms: ['subbidang-cs', 'furps'],
    example: 'Penerapan metodologi Scrum dalam perancangan portal terintegrasi.'
  },
  {
    id: 'spearman-brown',
    term: 'Spearman-Brown Formula',
    english: 'Spearman-Brown Prophecy Formula',
    meaning: 'Rumus koreksi reliabilitas untuk metode Split-Half guna mengestimasi reliabilitas instrumen tes penuh: ρ = 2r / (1 + r).',
    moduleSlug: 'modul-6',
    relatedTerms: ['split-half', 'reliabilitas', 'cronbach-alpha'],
    example: 'Korelasi dua belahan r = 0,60 menghasilkan koefisien reliabilitas tes penuh 0,75.'
  },
  {
    id: 'split-half',
    term: 'Split-Half (Uji Belah Dua)',
    english: 'Split-Half Reliability Method',
    meaning: 'Metode pengujian reliabilitas dengan cara membagi butir instrumen menjadi dua kelompok setara (misal ganjil-genap) lalu menghitung korelasi antarkelompok.',
    moduleSlug: 'modul-6',
    relatedTerms: ['spearman-brown', 'reliabilitas'],
    example: 'Mengkorelasikan skor total butir nomor ganjil dengan butir nomor genap.'
  },
  {
    id: 'state-of-the-art',
    term: 'State-of-the-Art',
    english: 'State-of-the-Art',
    meaning: 'Tingkat perkembangan tertinggi dan paling mutakhir dari suatu teknologi atau bidang ilmu pengetahuan pada saat sekarang.',
    moduleSlug: 'modul-4',
    relatedTerms: ['descriptive-project', 'literature-review'],
    example: 'Menyajikan perbandingan algoritma AI termutakhir tahun 2026.'
  },
  {
    id: 'storyboard',
    term: 'Storyboard Poster',
    english: 'Poster Storyboard',
    meaning: 'Sketsa manual awal rancangan tata letak poster ilmiah yang digambar di atas kertas menggunakan pensil sebelum dipindahkan ke komputer.',
    moduleSlug: 'modul-7',
    relatedTerms: ['electronic-dummy', 'poster-ilmiah'],
    example: 'Membuat coretan tata letak 3 kolom poster dengan pensil di kertas A4.'
  },
  {
    id: 'survei',
    term: 'Survei (Survey Research)',
    english: 'Survey Research',
    meaning: 'Pendekatan penelitian yang mengambil sampel dari suatu populasi dengan kuesioner sebagai alat pengumpul data pokok untuk analisis deskriptif/penjelasan.',
    moduleSlug: 'modul-4',
    relatedTerms: ['kuesioner', 'populasi', 'sampel'],
    example: 'Survei kepuasan mahasiswa terhadap performa portal baru kampus.'
  },
  {
    id: 'systematic-review',
    term: 'Systematic Literature Review (SLR)',
    english: 'Systematic Literature Review',
    meaning: 'Metode telaah literatur yang menggunakan protokol sistematis dan transparan untuk mencari, menyaring, dan mengevaluasi seluruh paper yang relevan.',
    moduleSlug: 'modul-5',
    relatedTerms: ['narrative-review', 'meta-analysis'],
    example: 'Menyeleksi 120 paper adopsi AI dengan kriteria inklusi dan eksklusi ketat.'
  },
  {
    id: 'systematic-sampling',
    term: 'Systematic Sampling',
    english: 'Systematic Sampling',
    meaning: 'Teknik pengambilan sampel berdasarkan pola nomor urut dari populasi yang telah diberi nomor (dalam klasifikasi modul RTI dimasukkan ke Nonprobability).',
    moduleSlug: 'modul-6',
    relatedTerms: ['nonprobability-sampling', 'probability-sampling'],
    example: 'Mengambil mahasiswa dengan nomor presensi kelipatan 5 (5, 10, 15, dst).'
  },
  {
    id: 'taraf-signifikansi',
    term: 'Taraf Signifikansi (α)',
    english: 'Significance Level',
    meaning: 'Tingkat toleransi kesalahan maksimum yang ditetapkan peneliti dalam menguji hipotesis statistik (biasanya 5% atau 0,05).',
    moduleSlug: 'modul-3',
    relatedTerms: ['alpha-taraf-nyata', 'kesalahan-tipe-1'],
    example: 'Uji statistik dengan taraf kepercayaan 95% menggunakan signifikansi 5%.'
  },
  {
    id: 'tautologis',
    term: 'Tautologis',
    english: 'Tautological',
    meaning: 'Sifat penalaran deduktif di mana kebenaran kesimpulan sebenarnya sudah tersirat di dalam pernyataan premis-premis sebelumnya.',
    moduleSlug: 'modul-3',
    relatedTerms: ['deduktif', 'a-priori'],
    example: 'Jika A = B dan B = C, maka A = C (sudah tersirat tanpa perlu pembuktian baru).'
  },
  {
    id: 'theory-oriented',
    term: 'Theory Oriented Project',
    english: 'Theory Oriented Research Project',
    meaning: 'Tipe proyek penelitian yang bertujuan memperluas atau membandingkan teori/model konseptual tanpa melakukan pengujian langsung dalam proyek tersebut.',
    moduleSlug: 'modul-4',
    relatedTerms: ['tipe-proyek', 'applied-project'],
    example: 'Memperluas model matematika antrian server untuk jaringan komputasi awan.'
  },
  {
    id: 'transistor',
    term: 'Transistor',
    english: 'Transistor',
    meaning: 'Komponen semikonduktor penguat sinyal dan saklar yang menggantikan tabung hampa pada komputer Generasi II (1957-1965).',
    moduleSlug: 'modul-1',
    relatedTerms: ['lima-generasi', 'vacuum-tube', 'integrated-circuit'],
    example: 'Penemuan transistor di Bell Labs membuat komputer menjadi jauh lebih kecil dan dingin.'
  },
  {
    id: 'two-way-dialogue',
    term: 'Two-Way Dialogue',
    english: 'Two-Way Dialogue in Posters',
    meaning: 'Salah satu kelebihan utama poster ilmiah modul, yaitu terciptanya ruang diskusi interaktif dua arah yang rileks antara penyaji dan pengunjung konferensi.',
    moduleSlug: 'modul-7',
    relatedTerms: ['poster-ilmiah', 'networking-kelebihan'],
    example: 'Pengunjung bertanya langsung tentang detail algoritma kepada pembuat poster.'
  },
  {
    id: 'ulsi',
    term: 'ULSI (Ultra Large Scale Integration)',
    english: 'Ultra Large Scale Integration',
    meaning: 'Teknologi integrasi miliaran transistor pada sebuah mikroprosesor yang menandai komputer Generasi V (1985-?).',
    moduleSlug: 'modul-1',
    relatedTerms: ['lima-generasi', 'lsi-vlsi'],
    example: 'Chip prosesor multicore modern pada smartphone dan superkomputer paralel.'
  },
  {
    id: 'usability',
    term: 'Usability (Kemudahan Penggunaan)',
    english: 'Usability',
    meaning: 'Dimensi kualitas yang mengukur sejauh mana antarmuka sistem dapat digunakan dengan efektif, efisien, dan memuaskan bagi pengguna sasarannya.',
    moduleSlug: 'modul-6',
    relatedTerms: ['furps', 'iso-9126', 'hci'],
    example: 'Waktu yang dibutuhkan pengguna baru untuk berhasil mencari info kegiatan kampus.'
  },
  {
    id: 'vacuum-tube',
    term: 'Vacuum Tube (Tabung Hampa)',
    english: 'Vacuum Tube',
    meaning: 'Komponen tabung kaca hampa udara yang digunakan sebagai penguat dan penyimpan memori pada komputer Generasi I (1950-1957).',
    moduleSlug: 'modul-1',
    relatedTerms: ['lima-generasi', 'transistor', 'eniac'],
    example: 'Komputer ENIAC dan UNIVAC menggunakan ribuan tabung hampa udara.'
  },
  {
    id: 'validitas',
    term: 'Validitas (Validity)',
    english: 'Validity',
    meaning: 'Derajat ketepatan instrumen dalam mengukur apa yang semestinya diukur; konsisten saja tidak menjamin bahwa instrumen valid.',
    moduleSlug: 'modul-6',
    relatedTerms: ['reliabilitas', 'instrumen-penelitian'],
    example: 'Pertanyaan tentang kecepatan pencarian harus benar-benar mengukur persepsi kecepatan.'
  },
  {
    id: 'vancouver-style',
    term: 'Vancouver / AMA Style',
    english: 'Vancouver Citation Style',
    meaning: 'Sistem rujukan numerik berurutan yang banyak digunakan di bidang kedokteran, bioinformatika, dan ilmu kesehatan.',
    moduleSlug: 'modul-5',
    relatedTerms: ['ieee-style', 'gaya-rujukan'],
    example: 'Penulisan nomor rujukan superskrip pada badan teks.'
  },
  {
    id: 'wisdom',
    term: 'Wisdom (Kebijaksanaan)',
    english: 'Wisdom',
    meaning: 'Puncak piramida DIKW yang merepresentasikan kemampuan menerapkan pengetahuan secara bijak ke dalam tindakan nyata yang memberi dampak positif.',
    moduleSlug: 'modul-2',
    relatedTerms: ['knowledge', 'informasi', 'data'],
    example: 'Memutuskan untuk merombak arsitektur basis data demi menjamin kelancaran akademik.'
  },
  {
    id: 'wsis-2015',
    term: 'WSIS 2015',
    english: 'World Summit on the Information Society 2015',
    meaning: 'Target masyarakat informasi dunia yang dikutip dalam slide Modul 3 perumusan tahun 2007 sebagai contoh keterkaitan konteks, target, dan fokus kajian.',
    moduleSlug: 'modul-3',
    relatedTerms: ['perumusan-masalah', 'fokus-subfokus'],
    example: 'Contoh modul perumusan masalah berbasis target nasional transformasi digital.'
  }
];

export function getGlossaryTermById(id: string): GlossaryTerm | undefined {
  return allGlossaryTerms.find((g) => g.id === id);
}

export function searchGlossary(query: string, moduleSlug?: string): GlossaryTerm[] {
  const q = query.toLowerCase().trim();
  return allGlossaryTerms.filter((term) => {
    const matchModule = moduleSlug ? term.moduleSlug === moduleSlug : true;
    if (!matchModule) return false;
    if (!q) return true;
    return (
      term.term.toLowerCase().includes(q) ||
      (term.english && term.english.toLowerCase().includes(q)) ||
      term.meaning.toLowerCase().includes(q)
    );
  });
}
