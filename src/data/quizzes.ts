import { QuizQuestion, ModuleSlug } from '../types';

export const allQuizQuestions: QuizQuestion[] = [
  // MODUL 1 (15 questions)
  {
    id: 'qz-m1-01',
    topicId: 'm1-tujuan-rti',
    type: 'single',
    prompt: 'Apa fungsi utama pembelajaran akademis menurut Modul 1 RTI?',
    options: [
      'Menghafal spesifikasi perangkat keras komputer',
      'Mengembangkan kemampuan belajar cara belajar agar terus menerima pengetahuan baru',
      'Menghasilkan software komersial berbayar',
      'Mendapatkan sertifikasi vendor industri'
    ],
    answer: 1,
    explanation: 'Modul menegaskan esensi pembelajaran akademis adalah "belajar cara belajar", yang membekali mahasiswa menghadapi perkembangan teknologi yang dinamis.',
    difficulty: 1
  },
  {
    id: 'qz-m1-02',
    topicId: 'm1-proses-skripsi',
    type: 'single',
    prompt: 'Dalam 7 langkah proses skripsi, apa kegiatan yang dilakukan tepat setelah "mengikuti tujuan penelitian yang ditetapkan"?',
    options: [
      'Mengembangkan rumusan permasalahan',
      'Menampilkan dan menganalisis data',
      'Menampilkan dan mempertahankan hasil di sidang',
      'Mempersiapkan proposal'
    ],
    answer: 1,
    explanation: 'Langkah 3 adalah mengikuti tujuan penelitian; langkah 4 tepat sesudahnya adalah menampilkan dan menganalisis data.',
    difficulty: 2
  },
  {
    id: 'qz-m1-03',
    topicId: 'm1-proses-skripsi',
    type: 'single',
    prompt: 'Apakah langkah terakhir (langkah ke-7) dari proses skripsi menurut modul?',
    options: [
      'Sidang ujian skripsi',
      'Mempersiapkan versi akhir laporan (revisi akhir)',
      'Menarik kesimpulan',
      'Mengambil ijazah sarjana'
    ],
    answer: 1,
    explanation: 'Sidang adalah langkah ke-6, sedangkan langkah ke-7 adalah revisi dan mempersiapkan versi akhir laporan.',
    difficulty: 1
  },
  {
    id: 'qz-m1-04',
    topicId: 'm1-kriteria-penilaian',
    type: 'truefalse',
    prompt: 'Benar atau Salah: Keaslian topik penelitian adalah hal yang sama dengan pentingnya penemuan.',
    answer: false,
    explanation: 'Salah. Modul secara eksplisit membedakan antara keaslian topik dengan pentingnya penemuan; topik bisa jadi asli namun signifikansi penemuannya berbeda.',
    difficulty: 1
  },
  {
    id: 'qz-m1-05',
    topicId: 'm1-cs-empiris',
    type: 'single',
    prompt: 'Menurut Newell dan Simon, bagaimana Computer Science memandang sebuah artefak program baru?',
    options: [
      'Sebagai produk komersial yang siap dipasarkan',
      'Sebagai sebuah percobaan yang struktur dan karakteristiknya dipelajari',
      'Sebagai karya estetika visual antarmuka',
      'Sebagai pengganti hukum logika matematika'
    ],
    answer: 1,
    explanation: 'Newell dan Simon memandang artefak baru sebagai percobaan empiris untuk meneliti struktur dan karakteristik perilakunya.',
    difficulty: 2
  },
  {
    id: 'qz-m1-06',
    topicId: 'm1-cs-empiris',
    type: 'single',
    prompt: 'Rantai konsep hafalan CS empiris menurut Newell & Simon adalah:',
    options: [
      'Teori → Hardware → Software',
      'Artefak → Percobaan → Karakteristik',
      'Input → Process → Output',
      'Proposal → Sidang → Lulus'
    ],
    answer: 1,
    explanation: 'Rantai hafalan Newell & Simon dari modul adalah: artefak → percobaan → karakteristik.',
    difficulty: 1
  },
  {
    id: 'qz-m1-07',
    topicId: 'm1-cs-algoritma',
    type: 'single',
    prompt: 'Siapa tokoh yang mendefinisikan "Computer science is the study of algorithms"?',
    options: ['Biermann', 'Brookshear', 'Allen S. Lee', 'Newell'],
    answer: 0,
    explanation: 'Biermann mendefinisikan Computer Science secara ringkas sebagai studi tentang algoritma.',
    difficulty: 1
  },
  {
    id: 'qz-m1-08',
    topicId: 'm1-enam-pertanyaan-algoritma',
    type: 'single',
    prompt: 'Manakah yang BUKAN merupakan salah satu dari 6 pertanyaan tentang algoritma dalam modul?',
    options: ['Discovery', 'Representation', 'Monetization', 'Execution'],
    answer: 2,
    explanation: 'Enam pertanyaan tentang algoritma adalah Discovery, Representation, Execution, Communication, Analysis, Limitations (DREC-AL). Monetization bukan bagian di dalamnya.',
    difficulty: 1
  },
  {
    id: 'qz-m1-09',
    topicId: 'm1-is-sosial-teknologi',
    type: 'single',
    prompt: 'Menurut Allen S. Lee, Information Systems (IS) berkaitan dengan interaksi antara:',
    options: [
      'Kabel jaringan dan switch',
      'Isu sosial (manusia dalam organisasi) dan teknologi',
      'Sistem operasi dan compiler',
      'Matematika diskrit dan aljabar linier'
    ],
    answer: 1,
    explanation: 'Allen S. Lee merumuskan IS sebagai hubungan manusia dalam organisasi atau lingkungan sosial dengan hardware, software, dan data.',
    difficulty: 1
  },
  {
    id: 'qz-m1-10',
    topicId: 'm1-is-sosial-teknologi',
    type: 'single',
    prompt: 'Penelitian yang mengkaji "perubahan organisasi akibat adopsi CASE tools" cenderung diklasifikasikan ke:',
    options: ['Computer Science (CS)', 'Information Systems (IS)', 'Hardware Engineering', 'Teori Komputasi'],
    answer: 1,
    explanation: 'Contoh modul menyebutkan bahwa dampak adopsi teknologi terhadap perubahan organisasi cenderung berorientasi Information Systems (IS).',
    difficulty: 2
  },
  {
    id: 'qz-m1-11',
    topicId: 'm1-dua-belas-subbidang-cs',
    type: 'truefalse',
    prompt: 'Benar atau Salah: Human Computer Interaction (HCI) dan Organizational Informatics tercantum sebagai subbidang Computer Science dalam modul RTI.',
    answer: true,
    explanation: 'Benar. Keduanya tercantum dalam 12 subbidang CS modul, membuktikan bahwa batas CS dan IS bukan pemisahan mutlak.',
    difficulty: 2
  },
  {
    id: 'qz-m1-12',
    topicId: 'm1-komputasi-efisiensi',
    type: 'single',
    prompt: 'Pernyataan modul tentang hubungan kapasitas hardware dan ukuran masalah yang dapat diselesaikan menyatakan bahwa:',
    options: [
      'Kapasitas hardware dua kali lipat otomatis menggandakan ukuran masalah yang dapat dipecahkan',
      'Kapasitas hardware dua kali lipat tidak otomatis membuat semua ukuran masalah yang dapat diselesaikan menjadi dua kali lipat',
      'Hardware tidak berpengaruh sama sekali terhadap kecepatan komputasi',
      'Komputasi hanya bergantung pada ukuran RAM'
    ],
    answer: 1,
    explanation: 'Pada algoritma dengan kompleksitas eksponensial atau polinomial tinggi, peningkatan hardware 2x hanya menambah sedikit sekali kapasitas ukuran input masalah.',
    difficulty: 2
  },
  {
    id: 'qz-m1-13',
    topicId: 'm1-sejarah-komputer',
    type: 'single',
    prompt: 'Periode sejarah komputer "Early Period" (sebelum 1940) ditandai oleh artefak hitung mekanik seperti:',
    options: ['ENIAC', 'Altair 8800', 'Pascaline dan Jacquard loom', 'Apple I'],
    answer: 2,
    explanation: 'Pascaline dan Jacquard loom menandai Early Period sebelum 1940.',
    difficulty: 1
  },
  {
    id: 'qz-m1-14',
    topicId: 'm1-sejarah-komputer',
    type: 'single',
    prompt: 'Komponen elektronik utama yang menandai Generasi II (1957-1965) komputer adalah:',
    options: ['Vacuum tubes', 'Transistor', 'Integrated Circuits', 'ULSI'],
    answer: 1,
    explanation: 'Generasi II menggunakan transistor dan core memories menggantikan vacuum tubes.',
    difficulty: 1
  },
  {
    id: 'qz-m1-15',
    topicId: 'm1-sejarah-komputer',
    type: 'single',
    prompt: 'Rantai hafalan komponen utama dari Generasi I sampai Generasi V komputer adalah:',
    options: [
      'Transistor → IC → Vacuum tubes → ULSI → VLSI',
      'Vacuum tubes → Transistor → IC → LSI/VLSI → ULSI',
      'IC → Transistor → Vacuum tubes → VLSI → AI',
      'Relay → Switch → Processor → Cloud → Quantum'
    ],
    answer: 1,
    explanation: 'Urutan evolusi 5 generasi: Vacuum tubes → Transistor → IC → LSI/VLSI → ULSI.',
    difficulty: 1
  },

  // MODUL 2 (15 questions)
  {
    id: 'qz-m2-01',
    topicId: 'm2-riset-originalitas',
    type: 'single',
    prompt: 'Apa perbedaan definisi riset dan originalitas menurut Modul 2?',
    options: [
      'Riset = membaca buku; Originalitas = menulis artikel',
      'Riset = investigasi asli memperoleh pengetahuan; Originalitas = melakukan sesuatu yang belum dilakukan sebelumnya',
      'Riset = membuat coding; Originalitas = menerbitkan jurnal',
      'Riset = lulus sidang; Originalitas = nilai A'
    ],
    answer: 1,
    explanation: 'Riset adalah investigasi asli untuk pengetahuan dan pemahaman; originalitas adalah melakukan hal yang belum dilakukan sebelumnya.',
    difficulty: 1
  },
  {
    id: 'qz-m2-02',
    topicId: 'm2-riset-originalitas',
    type: 'truefalse',
    prompt: 'Benar atau Salah: Jika suatu konsep merupakan hal baru dan asli bagi diri peneliti pribadi, maka otomatis konsep tersebut bernilai originalitas bagi bidang ilmu.',
    answer: false,
    explanation: 'Salah. Modul memperingatkan: "Asli bagi peneliti belum otomatis asli bagi bidang ilmu."',
    difficulty: 1
  },
  {
    id: 'qz-m2-03',
    topicId: 'm2-dikw-theory',
    type: 'single',
    prompt: 'Dalam piramida DIKW + Theory, tingkatan yang didefinisikan sebagai "kemampuan merealisasikan pengetahuan dalam tindakan" adalah:',
    options: ['Data', 'Information', 'Knowledge', 'Wisdom'],
    answer: 3,
    explanation: 'Wisdom adalah kemampuan merealisasikan pengetahuan dalam tindakan nyata.',
    difficulty: 1
  },
  {
    id: 'qz-m2-04',
    topicId: 'm2-dikw-theory',
    type: 'single',
    prompt: 'Berdasarkan contoh angka waktu respons 2, 4, dan 6 detik pada modul, angka "rata-rata 4 detik" berada pada tingkatan:',
    options: ['Data', 'Information', 'Knowledge', 'Wisdom'],
    answer: 1,
    explanation: 'Angka mentah 2, 4, 6 adalah Data; rata-rata 4 detik adalah data yang telah diolah memberi makna sehingga merupakan Information.',
    difficulty: 2
  },
  {
    id: 'qz-m2-05',
    topicId: 'm2-sequential-generalised',
    type: 'single',
    prompt: 'Karakteristik utama model penelitian Generalised adalah:',
    options: [
      'Alur linear kaku tanpa cabang',
      'Menyediakan rute alternatif atau tahap yang disesuaikan dengan keluaran riset',
      'Peneliti bebas tidak menggunakan metodologi ilmiah',
      'Tidak perlu mengumpulkan data'
    ],
    answer: 1,
    explanation: 'Generalised tetap berstruktur namun menyediakan rute alternatif sesuai karakteristik penelitian.',
    difficulty: 2
  },
  {
    id: 'qz-m2-06',
    topicId: 'm2-tujuh-tahap-sharp',
    type: 'single',
    prompt: 'Tahap pertama dalam 7 tahap sequential model Sharp adalah:',
    options: [
      'Select a research topic',
      'Identify the broad area of study',
      'Decide on an approach',
      'Gather data and information'
    ],
    answer: 1,
    explanation: 'Langkah pertama Sharp adalah mengidentifikasi bidang kajian luas (Identify the broad area of study).',
    difficulty: 1
  },
  {
    id: 'qz-m2-07',
    topicId: 'm2-circulatory-evolutionary',
    type: 'single',
    prompt: 'Model penelitian yang memandang riset sebagai lingkaran penemuan berkelanjutan yang dapat berputar kembali ke tahap awal disebut:',
    options: ['Sequential model', 'Generalised model', 'Circulatory model', 'Evolutionary model'],
    answer: 2,
    explanation: 'Circulatory memandang riset sebagai siklus berulang yang kembali ke perumusan/refine hipotesis.',
    difficulty: 1
  },
  {
    id: 'qz-m2-08',
    topicId: 'm2-field-approach-nature',
    type: 'single',
    prompt: 'Dalam triad Field, Approach, dan Nature, elemen yang merepresentasikan metode yang diterapkan dalam riset adalah:',
    options: ['Field', 'Approach', 'Nature', 'Wisdom'],
    answer: 1,
    explanation: 'Approach merepresentasikan metode penelitian yang diterapkan.',
    difficulty: 1
  },
  {
    id: 'qz-m2-09',
    topicId: 'm2-kuantitatif-kualitatif',
    type: 'single',
    prompt: 'Peringatan modul tentang hubungan antara instrumen kuesioner dan pendekatan penelitian menyatakan bahwa:',
    options: [
      'Instrumen kuesioner otomatis membuat penelitian 100% kuantitatif',
      'Instrumen saja belum menentukan seluruh pendekatan penelitian',
      'Penelitian kualitatif dilarang memakai instrumen apapun',
      'Penelitian kuantitatif tidak boleh menggunakan angka'
    ],
    answer: 1,
    explanation: 'Modul menegaskan instrumen saja belum menentukan seluruh pendekatan; kuesioner dengan analisis teks terbuka tetaplah kualitatif.',
    difficulty: 2
  },
  {
    id: 'qz-m2-10',
    topicId: 'm2-empat-pendekatan',
    type: 'single',
    prompt: 'Jebakan paling umum dalam pelaksanaan Action Research menurut modul adalah:',
    options: [
      'Mengambil sampel terlalu besar',
      'Observasi tanpa tindakan nyata bersama subjek belum memenuhi ciri lengkapnya',
      'Terlalu banyak menggunakan rumus statistik',
      'Melakukan wawancara lebih dari satu kali'
    ],
    answer: 1,
    explanation: 'Jebakan action research: peneliti hanya mengamati tanpa melakukan intervensi tindakan perbaikan nyata bersama mitra.',
    difficulty: 2
  },
  {
    id: 'qz-m2-11',
    topicId: 'm2-empat-pendekatan',
    type: 'single',
    prompt: 'Jebakan eksperimen dalam modul mengingatkan bahwa:',
    options: [
      'Laboratorium komputer membutuhkan biaya listrik mahal',
      'Sekadar melihat dua angka berbeda belum menjelaskan hubungan sebab-akibat',
      'Eksperimen tidak boleh menggunakan kelompok kontrol',
      'Data eksperimen harus selalu kualitatif'
    ],
    answer: 1,
    explanation: 'Adanya dua angka berbeda belum membuktikan hubungan kausalitas tanpa kontrol variabel yang valid.',
    difficulty: 1
  },
  {
    id: 'qz-m2-12',
    topicId: 'm2-empat-pendekatan',
    type: 'single',
    prompt: 'Jebakan pendekatan Case Study dalam modul menyatakan bahwa:',
    options: [
      'Jumlah kasus kecil tidak otomatis menjamin kedalaman analisis',
      'Studi kasus wajib meneliti minimal 100 perusahaan',
      'Studi kasus tidak boleh menggunakan data primer',
      'Studi kasus harus diselesaikan dalam waktu 1 minggu'
    ],
    answer: 0,
    explanation: 'Meneliti sedikit objek tidak otomatis menjamin analisisnya mendalam.',
    difficulty: 1
  },
  {
    id: 'qz-m2-13',
    topicId: 'm2-peran-pelaku',
    type: 'truefalse',
    prompt: 'Benar atau Salah: Dosen pembimbing skripsi bertugas sebagai pelaksana teknis pengganti mahasiswa jika mahasiswa mengalami kebuntuan coding.',
    answer: false,
    explanation: 'Salah. Modul secara tegas menegaskan: "Pembimbing bukan pelaksana pengganti mahasiswa."',
    difficulty: 1
  },
  {
    id: 'qz-m2-14',
    topicId: 'm2-peran-pelaku',
    type: 'single',
    prompt: 'Model penguji yang mereview hasil pada beberapa tahap berkala dan ikut bertanggung jawab menilai kualitas disebut:',
    options: ['Quality Evaluator', 'Quality Assuror', 'Lead Supervisor', 'External Auditor'],
    answer: 1,
    explanation: 'Quality Assuror mereview berkala dan ikut mengawal proses kualitas.',
    difficulty: 1
  },
  {
    id: 'qz-m2-15',
    topicId: 'm2-banyak-mahasiswa-pembimbing',
    type: 'single',
    prompt: 'Pada proyek penelitian yang dikerjakan oleh banyak mahasiswa, bagaimana aturan tanggung jawab terhadap isi laporan gabungan?',
    options: [
      'Hanya ketua kelompok yang bertanggung jawab atas seluruh isi laporan',
      'Semua anggota bertanggung jawab sama atas seluruh isi laporan gabungan',
      'Tiap mahasiswa hanya bertanggung jawab atas 1 halaman yang ia ketik',
      'Dosen pembimbing yang menanggung seluruh kesalahan'
    ],
    answer: 1,
    explanation: 'Modul menegaskan: semua anggota bertanggung jawab sama atas isi laporan gabungan.',
    difficulty: 1
  },

  // MODUL 3 (15 questions)
  {
    id: 'qz-m3-01',
    topicId: 'm3-logika-penalaran',
    type: 'single',
    prompt: 'Logika adalah:',
    options: [
      'Hafalan istilah teknis pemrograman',
      'Metode atau prinsip untuk membedakan penalaran tepat dan tidak tepat',
      'Kumpulan instruksi machine learning',
      'Desain arsitektur database'
    ],
    answer: 1,
    explanation: 'Logika mempelajari prinsip pembeda penalaran yang valid dan tidak valid.',
    difficulty: 1
  },
  {
    id: 'qz-m3-02',
    topicId: 'm3-deduktif-induktif',
    type: 'single',
    prompt: 'Sifat penalaran deduktif yang menyatakan bahwa kesimpulan sebenarnya sudah tersirat di dalam premis disebut:',
    options: ['A posteriori', 'Sintetis', 'Tautologis', 'General'],
    answer: 2,
    explanation: 'Tautologis bermakna kesimpulan deduktif sudah tersirat secara niscaya di dalam premis-premisnya.',
    difficulty: 2
  },
  {
    id: 'qz-m3-03',
    topicId: 'm3-deduktif-induktif',
    type: 'single',
    prompt: 'Penalaran induktif bergerak dari:',
    options: [
      'Pengetahuan umum menuju kesimpulan khusus',
      'Observasi khusus menuju kesimpulan umum',
      'Hipotesis menuju teori tanpa data',
      'Kesimpulan langsung ke pendahuluan'
    ],
    answer: 1,
    explanation: 'Induktif bergerak dari kasus khusus (bottom-up) menuju generalisasi umum.',
    difficulty: 1
  },
  {
    id: 'qz-m3-04',
    topicId: 'm3-deduktif-induktif',
    type: 'truefalse',
    prompt: 'Benar atau Salah: Generalisasi induktif memberikan kepastian mutlak yang setara dengan deduksi matematika.',
    answer: false,
    explanation: 'Salah. Modul menegaskan: generalisasi induktif tidak memberi kepastian mutlak karena mengandung aspek probabilitas.',
    difficulty: 2
  },
  {
    id: 'qz-m3-05',
    topicId: 'm3-metode-metodologi',
    type: 'single',
    prompt: 'Kedudukan metode terhadap metodologi penelitian adalah:',
    options: [
      'Metode sama persis dengan metodologi',
      'Metode adalah bagian dari metodologi',
      'Metodologi adalah bagian kecil dari metode',
      'Keduanya tidak berhubungan sama sekali'
    ],
    answer: 1,
    explanation: 'Metode adalah instrumen tindakan yang menjadi bagian di dalam metodologi perencanaan komprehensif.',
    difficulty: 1
  },
  {
    id: 'qz-m3-06',
    topicId: 'm3-identifikasi-kelayakan',
    type: 'single',
    prompt: 'Masalah penelitian yang feasible berarti:',
    options: [
      'Sangat disukai oleh dosen penguji luar',
      'Dapat dipecahkan, data dan metode tersedia, biaya tersedia, dan waktu penyelesaian wajar',
      'Menggunakan teknologi AI generasi terbaru',
      'Menghabiskan dana ratusan juta rupiah'
    ],
    answer: 1,
    explanation: 'Feasible berarti layak dilaksanakan dalam batas sumber daya, data, dan waktu.',
    difficulty: 1
  },
  {
    id: 'qz-m3-07',
    topicId: 'm3-perumusan-masalah',
    type: 'single',
    prompt: 'Rumusan masalah penelitian yang baik berfokus pada:',
    options: [
      'Merek laptop peneliti',
      'Dependent variable (hal yang diteliti)',
      'Independent variable saja',
      'Jumlah software yang diinstal'
    ],
    answer: 1,
    explanation: 'Rumusan masalah harus berfokus pada dependent variable dan mengimplikasikan data pemecahannya.',
    difficulty: 1
  },
  {
    id: 'qz-m3-08',
    topicId: 'm3-perumusan-masalah',
    type: 'single',
    prompt: 'Langkah ke-2 dari 4 langkah perumusan masalah adalah:',
    options: [
      'Tentukan fokus penelitian',
      'Cari faktor terkait sebagai subfokus',
      'Kaji dan pilih faktor menarik',
      'Hubungkan subfokus terpilih dengan fokus secara logis'
    ],
    answer: 1,
    explanation: 'Langkah 1: tentukan fokus; Langkah 2: cari faktor terkait sebagai subfokus.',
    difficulty: 2
  },
  {
    id: 'qz-m3-09',
    topicId: 'm3-hipotesis-fungsi',
    type: 'single',
    prompt: 'Mengapa hipotesis disebut sebagai jawaban "sementara"?',
    options: [
      'Karena mahasiswa masih belajar',
      'Karena landasan teorinya belum diuji dengan data penelitian spesifik tersebut',
      'Karena dosen pembimbing belum menandatangani proposal',
      'Karena hipotesis akan dihapus sebelum sidang'
    ],
    answer: 1,
    explanation: 'Sementara karena kebenarannya baru berdasar teori dan masih harus diuji secara empiris dengan data fakta.',
    difficulty: 1
  },
  {
    id: 'qz-m3-10',
    topicId: 'm3-tiga-jenis-hipotesis',
    type: 'single',
    prompt: 'Rumusan: "Akurasi prediksi algoritma C4.5 mencapai minimal 90%" merupakan contoh hipotesis:',
    options: ['Descriptive', 'Comparative', 'Associative', 'Circulatory'],
    answer: 0,
    explanation: 'Hipotesis ini menduga nilai satu variabel mandiri tanpa perbandingan, sehingga merupakan Descriptive.',
    difficulty: 1
  },
  {
    id: 'qz-m3-11',
    topicId: 'm3-tiga-jenis-hipotesis',
    type: 'single',
    prompt: 'Rumusan: "Tidak ada pengaruh penambahan atribut A terhadap akurasi C4.5" termasuk jenis:',
    options: ['Descriptive', 'Comparative', 'Associative', 'Generalised'],
    answer: 2,
    explanation: 'Menguji hubungan/pengaruh antarvariabel (atribut A terhadap akurasi) adalah hipotesis Associative.',
    difficulty: 1
  },
  {
    id: 'qz-m3-12',
    topicId: 'm3-tipe-error',
    type: 'single',
    prompt: 'Menolak hipotesis nol (H0) padahal H0 sebenarnya BENAR adalah:',
    options: [
      'Kesalahan Tipe I (Alpha)',
      'Kesalahan Tipe II (Beta)',
      'Keputusan Benar (1 - Alpha)',
      'Keputusan Benar (1 - Beta)'
    ],
    answer: 0,
    explanation: 'Menolak H0 yang sebenarnya benar adalah Kesalahan Tipe I (peluang = Alpha).',
    difficulty: 1
  },
  {
    id: 'qz-m3-13',
    topicId: 'm3-tipe-error',
    type: 'single',
    prompt: 'Menerima hipotesis nol (H0) padahal H0 sebenarnya SALAH adalah:',
    options: [
      'Kesalahan Tipe I (Alpha)',
      'Kesalahan Tipe II (Beta)',
      'Power of test',
      'Taraf signifikansi'
    ],
    answer: 1,
    explanation: 'Menerima H0 yang sebenarnya salah adalah Kesalahan Tipe II (peluang = Beta).',
    difficulty: 1
  },
  {
    id: 'qz-m3-14',
    topicId: 'm3-tipe-error',
    type: 'single',
    prompt: 'Jika H0 sebenarnya benar dan peneliti menerima H0, probabilitas keputusan benar ini disimbolkan:',
    options: ['α', 'β', '1 - α', '1 - β'],
    answer: 2,
    explanation: 'Keputusan benar saat H0 memang benar adalah 1 - α (tingkat kepercayaan).',
    difficulty: 2
  },
  {
    id: 'qz-m3-15',
    topicId: 'm3-tipe-error',
    type: 'single',
    prompt: 'Dalam analogi alarm kebakaran, kondisi "alarm diam padahal gedung terbakar" menganalogikan:',
    options: ['Kesalahan Tipe I', 'Kesalahan Tipe II', 'Keputusan Benar', 'Penalaran Deduktif'],
    answer: 1,
    explanation: 'Gedung terbakar (H0 salah) tapi alarm diam (terima H0) adalah Missed Detection = Kesalahan Tipe II.',
    difficulty: 2
  },

  // MODUL 4 (15 questions)
  {
    id: 'qz-m4-01',
    topicId: 'm4-empat-tipe-proyek',
    type: 'single',
    prompt: 'Tipe proyek penelitian yang menyajikan tinjauan terkini (state-of-the-art) dan membandingkan riset terdahulu disebut:',
    options: ['Applied project', 'Theory oriented project', 'Descriptive project', 'Action research'],
    answer: 2,
    explanation: 'Descriptive project bertujuan memetakan keadaan terkini dan riset terdahulu.',
    difficulty: 1
  },
  {
    id: 'qz-m4-02',
    topicId: 'm4-empat-tipe-proyek',
    type: 'single',
    prompt: 'Tipe proyek yang membangun penerapan pembuktian (proof of concept) dan eksperimen disebut:',
    options: ['Applied project', 'Theory oriented', 'Descriptive', 'Historical'],
    answer: 0,
    explanation: 'Applied project berfokus pada implementasi pembuktian nyata dan eksperimen.',
    difficulty: 1
  },
  {
    id: 'qz-m4-03',
    topicId: 'm4-sepuluh-desain-riset',
    type: 'single',
    prompt: 'Pembeda paling mendasar antara penelitian Experimental dengan Causal-Comparative adalah:',
    options: [
      'Ada tidaknya manipulasi perlakuan (treatment) oleh peneliti',
      'Bahasa pemrograman yang digunakan',
      'Format penulisan sitasi',
      'Jumlah bab skripsi'
    ],
    answer: 0,
    explanation: 'Eksperimen ada manipulasi treatment; causal-comparative efek sudah terjadi tanpa manipulasi peneliti.',
    difficulty: 1
  },
  {
    id: 'qz-m4-04',
    topicId: 'm4-sepuluh-desain-riset',
    type: 'single',
    prompt: 'Desain penelitian yang dijelaskan slide modul sebagai eksperimen tanpa kontrol, diukur sesudah treatment ("one-shot posttest") adalah:',
    options: ['True Experimental', 'Quasi Experimental', 'Case Study', 'Etnografi'],
    answer: 1,
    explanation: 'Quasi experimental dalam slide Modul 4 dijelaskan sebagai one-shot posttest with no control group.',
    difficulty: 2
  },
  {
    id: 'qz-m4-05',
    topicId: 'm4-sepuluh-desain-riset',
    type: 'truefalse',
    prompt: 'Benar atau Salah: Jika nilai korelasi antara dua variabel sangat tinggi (r = 0,92), maka peneliti dapat memastikan bahwa variabel X adalah penyebab langsung dari variabel Y.',
    answer: false,
    explanation: 'Salah. Modul menegaskan: korelasi tidak menjamin kausalitas!',
    difficulty: 1
  },
  {
    id: 'qz-m4-06',
    topicId: 'm4-sepuluh-desain-riset',
    type: 'single',
    prompt: 'Desain riset yang mengambil sampel dari populasi dan menggunakan kuesioner sebagai instrumen pokok adalah:',
    options: ['Historical research', 'Survey research', 'Ethnographic research', 'Action research'],
    answer: 1,
    explanation: 'Survey research menggunakan kuesioner untuk mengambil sampel dari populasi sasaran.',
    difficulty: 1
  },
  {
    id: 'qz-m4-07',
    topicId: 'm4-sepuluh-desain-riset',
    type: 'single',
    prompt: 'Desain penelitian yang berfokus langsung pada tindakan sosial di mana peneliti terjun ke lapangan bersama subjek adalah:',
    options: ['Action research', 'Correlational research', 'Historical research', 'Theory oriented'],
    answer: 0,
    explanation: 'Action research berfokus pada tindakan pemecahan masalah bersama subjek di lapangan.',
    difficulty: 1
  },
  {
    id: 'qz-m4-08',
    topicId: 'm4-sepuluh-desain-riset',
    type: 'single',
    prompt: 'Penelitian yang berfokus mendalam pada budaya sekelompok orang atau komunitas kerja dalam organisasi disebut:',
    options: ['Ethnographic research', 'Survey research', 'Quasi experimental', 'Historical research'],
    answer: 0,
    explanation: 'Ethnographic research berfokus pada budaya sekelompok orang.',
    difficulty: 1
  },
  {
    id: 'qz-m4-09',
    topicId: 'm4-sepuluh-desain-riset',
    type: 'single',
    prompt: 'Slide modul mensyaratkan Case Studies harus memenuhi kriteria:',
    options: [
      'Data primer, dokumen tervalidasi, dan konfirmasi ke primary source',
      'Mewawancarai minimal 1.000 orang',
      'Hanya boleh menggunakan data dari media sosial',
      'Dilarang menggunakan dokumen tertulis'
    ],
    answer: 0,
    explanation: 'Studi kasus modul mensyaratkan data primer, dokumen tervalidasi, dan konfirmasi ke sumber utama.',
    difficulty: 2
  },
  {
    id: 'qz-m4-10',
    topicId: 'm4-sepuluh-desain-riset',
    type: 'single',
    prompt: 'Penelitian yang mengumpulkan dan memverifikasi bukti-bukti masa lampau untuk rekonstruksi sistematis disebut:',
    options: ['Historical research', 'Survey research', 'Quasi experimental', 'Action research'],
    answer: 0,
    explanation: 'Historical research merekonstruksi peristiwa masa lampau dari bukti dokumen sejarah.',
    difficulty: 1
  },
  {
    id: 'qz-m4-11',
    topicId: 'm4-pohon-keputusan',
    type: 'single',
    prompt: 'Jika seorang mahasiswa ingin membandingkan dua algoritma kompresi data dengan sengaja memberi beban file yang dimanipulasi di laboratorium terkendali, desain yang tepat adalah:',
    options: ['Experimental research', 'Case study', 'Historical research', 'Ethnographic research'],
    answer: 0,
    explanation: 'Ada manipulasi treatment pada kondisi terkendali = Experimental research.',
    difficulty: 1
  },
  {
    id: 'qz-m4-12',
    topicId: 'm4-pohon-keputusan',
    type: 'single',
    prompt: 'Jika mahasiswa ingin meneliti faktor penyebab kegagalan implementasi sistem absensi finger print tahun lalu tanpa intervensi apapun, desain yang tepat adalah:',
    options: ['Causal-comparative', 'Experimental', 'Action research', 'Theory oriented'],
    answer: 0,
    explanation: 'Efek sudah terjadi di masa lampau dan peneliti melacak penyebabnya tanpa manipulasi = Causal-comparative.',
    difficulty: 2
  },
  {
    id: 'qz-m4-13',
    topicId: 'm4-pedoman-desain',
    type: 'truefalse',
    prompt: 'Benar atau Salah: Menyebutkan bahwa penelitian menggunakan bahasa pemrograman Node.js dan database PostgreSQL sudah otomatis menjelaskan desain penelitian skripsi.',
    answer: false,
    explanation: 'Salah. Nama tools atau teknologi tidak menggantikan desain operasional penelitian.',
    difficulty: 1
  },
  {
    id: 'qz-m4-14',
    topicId: 'm4-empat-tipe-proyek',
    type: 'single',
    prompt: 'Penelitian yang membandingkan teori pemodelan arsitektur perangkat lunak dengan implementasi aktual di perusahaan PT X termasuk tipe:',
    options: [
      'Comparison of theory and practice',
      'Descriptive project murni',
      'Theory oriented tanpa aplikasi',
      'Historical research'
    ],
    answer: 0,
    explanation: 'Membandingkan model teori dengan kenyataan lapangan organisasi adalah Comparison of theory and practice.',
    difficulty: 1
  },
  {
    id: 'qz-m4-15',
    topicId: 'm4-sepuluh-desain-riset',
    type: 'single',
    prompt: 'Kelemahan pokok dari pengumpulan data kuesioner pada penelitian survei menurut modul adalah:',
    options: [
      'Biayanya selalu mahal',
      'Jawaban responden belum tentu sesuai isi hati atau pengalaman yang stabil',
      'Tidak bisa disebarkan secara online',
      'Dilarang oleh dewan penguji'
    ],
    answer: 1,
    explanation: 'Jawaban responden pada angket belum tentu stabil atau sepenuhnya jujur.',
    difficulty: 2
  },

  // MODUL 5 (15 questions)
  {
    id: 'qz-m5-01',
    topicId: 'm5-literature-review',
    type: 'single',
    prompt: 'Apa fungsi utama tinjauan literatur (Literature Review) menurut Modul 5?',
    options: [
      'Memenuhi syarat ketebalan halaman skripsi',
      'Membangun landasan penelitian dan kerangka pemikiran serta menghindari duplikasi',
      'Menyalin daftar isi buku teks',
      'Menghafal nama-nama profesor luar negeri'
    ],
    answer: 1,
    explanation: 'Literature review membangun landasan teori, kerangka pemikiran masalah, dan menghindari duplikasi penelitian.',
    difficulty: 1
  },
  {
    id: 'qz-m5-02',
    topicId: 'm5-kualitas-literatur',
    type: 'single',
    prompt: 'Berapa tahun acuan kemutakhiran literatur yang secara eksplisit dicantumkan dalam modul RTI?',
    options: ['1 tahun terakhir', '3 tahun terakhir', '10 tahun terakhir', 'Bebas tahun berapa pun'],
    answer: 1,
    explanation: 'Slide Modul 5 secara spesifik menyebut: "Mutakhir: modul menggunakan acuan tiga tahun terakhir."',
    difficulty: 1
  },
  {
    id: 'qz-m5-03',
    topicId: 'm5-kualitas-literatur',
    type: 'single',
    prompt: 'Empat pekerjaan penting dalam melakukan review literatur disingkat A-S-R-B, yaitu:',
    options: [
      'Ambil, Simpan, Rangkul, Bagikan',
      'Analisis, Sintesis, Ringkas, Bandingkan',
      'Akses, Scan, Rancang, Buktikan',
      'Autentikasi, Simpan, Rekam, Baca'
    ],
    answer: 1,
    explanation: 'Empat pekerjaan review modul adalah Analisis, Sintesis, Ringkas, Bandingkan.',
    difficulty: 1
  },
  {
    id: 'qz-m5-04',
    topicId: 'm5-tiga-macam-review',
    type: 'single',
    prompt: 'Literature review yang menggunakan teknik statistik untuk menggabungkan hasil kuantitatif dari berbagai riset independen disebut:',
    options: ['Narrative review', 'Qualitative systematic review', 'Meta-analysis', 'Incidental review'],
    answer: 2,
    explanation: 'Meta-analysis adalah Quantitative systematic literature review berbasis statistik.',
    difficulty: 1
  },
  {
    id: 'qz-m5-05',
    topicId: 'm5-empat-langkah-review',
    type: 'single',
    prompt: 'Langkah pertama dari 4 langkah literature review adalah:',
    options: [
      'Cari literatur di Google',
      'Formulasi permasalahan (pilih topik sesuai isu dan interest)',
      'Evaluasi data sumber',
      'Analisis dan interpretasi'
    ],
    answer: 1,
    explanation: 'Langkah 1 adalah formulasi permasalahan sebelum mulai melakukan penelusuran pustaka.',
    difficulty: 1
  },
  {
    id: 'qz-m5-06',
    topicId: 'm5-cycles-literature',
    type: 'single',
    prompt: 'Dalam Cycles of Scientific Literature, jenis dokumen yang pertama kali mempublikasikan hasil riset setelah komunikasi informal adalah:',
    options: ['Buku teks (Textbooks)', 'Reference sources (Ensiklopedia)', 'Prosiding konferensi/workshop', 'Disertasi'],
    answer: 2,
    explanation: 'Hasil riset awal dipresentasikan dan diterbitkan di prosiding konferensi/workshop.',
    difficulty: 2
  },
  {
    id: 'qz-m5-07',
    topicId: 'm5-referensi-tepat',
    type: 'single',
    prompt: 'Mengapa sumber tertulis lebih diutamakan dibandingkan sumber lisan (oral) sebagai referensi ilmiah?',
    options: [
      'Karena tulisan lebih mudah ditelusuri dan umumnya telah melalui proses review',
      'Karena sumber lisan dilarang total oleh undang-undang',
      'Karena sumber lisan tidak memiliki nama penulis',
      'Karena buku selalu gratis'
    ],
    answer: 0,
    explanation: 'Sumber tertulis dapat ditelusuri kebenarannya oleh pembaca dan umumnya telah ditelaah sejawat.',
    difficulty: 1
  },
  {
    id: 'qz-m5-08',
    topicId: 'm5-sitasi-daftar-referensi',
    type: 'truefalse',
    prompt: 'Benar atau Salah: Jika seorang peneliti mengubah kata-kata dari artikel jurnal menjadi susunan kalimatnya sendiri (parafrasa), maka asal gagasan tersebut otomatis menjadi milik pribadi dan tidak perlu mencantumkan sitasi.',
    answer: false,
    explanation: 'Salah. Modul menegaskan: mengubah kata-kata tidak mengubah asal gagasannya! Sitasi tetap wajib dicantumkan.',
    difficulty: 1
  },
  {
    id: 'qz-m5-09',
    topicId: 'm5-pola-sitasi',
    type: 'single',
    prompt: 'Peringatan apa yang secara khusus dimuat di Slide 14 Modul 5 mengenai penempatan sitasi?',
    options: [
      'Hindari sitasi pada awal kalimat',
      'Hindari sitasi hanya pada akhir kalimat suatu paragraf',
      'Dilarang menyitir lebih dari satu sumber',
      'Sitasi harus menggunakan font Comic Sans'
    ],
    answer: 1,
    explanation: 'Slide 14 memperingatkan: hindari sitasi pada akhir kalimat suatu paragraf agar cakupan sumber tetap jelas.',
    difficulty: 2
  },
  {
    id: 'qz-m5-10',
    topicId: 'm5-pola-sitasi',
    type: 'single',
    prompt: 'Bagaimana penempatan sitasi gaya IEEE yang benar terhadap tanda baca titik?',
    options: [
      'Diletakkan setelah tanda titik tanpa spasi: "...selesai.[1]"',
      'Diletakkan sebelum tanda baca dengan spasi: "...selesai [1]."',
      'Diletakkan di catatan kaki bawah halaman',
      'Diletakkan di awal judul bab'
    ],
    answer: 1,
    explanation: 'IEEE menempatkan nomor sitasi sebelum tanda baca dengan spasi sebelum kurung siku [1].',
    difficulty: 1
  },
  {
    id: 'qz-m5-11',
    topicId: 'm5-gaya-software',
    type: 'single',
    prompt: 'Software reference manager yang secara khusus disebut dalam Modul 5 adalah:',
    options: ['Mendeley', 'Photoshop', 'Steam', 'Postman'],
    answer: 0,
    explanation: 'Modul secara eksplisit menyebut Mendeley sebagai software pengelola referensi.',
    difficulty: 1
  },
  {
    id: 'qz-m5-12',
    topicId: 'm5-gaya-software',
    type: 'single',
    prompt: 'Software penyunting naskah ilmiah berbasis LaTeX yang disebut dalam modul adalah:',
    options: ['Microsoft Word', 'Overleaf LaTeX', 'Google Docs', 'Notepad++'],
    answer: 1,
    explanation: 'Modul secara eksplisit mencantumkan Overleaf LaTeX.',
    difficulty: 1
  },
  {
    id: 'qz-m5-13',
    topicId: 'm5-gaya-software',
    type: 'single',
    prompt: 'Perbedaan antara "Ringkasan" dan "Sintesis" dalam telaah literatur adalah:',
    options: [
      'Ringkasan = memadatkan isi satu per satu; Sintesis = menghubungkan dan membandingkan temuan',
      'Ringkasan = berbahasa Indonesia; Sintesis = berbahasa Inggris',
      'Keduanya sama persis tanpa perbedaan',
      'Sintesis hanya dibuat oleh dosen'
    ],
    answer: 0,
    explanation: 'Ringkasan memadatkan isi artikel, sedangkan sintesis menganyam perbandingan antar-penelitian.',
    difficulty: 1
  },
  {
    id: 'qz-m5-14',
    topicId: 'm5-jenis-dokumen',
    type: 'single',
    prompt: 'Manakah jenis dokumen yang BUKAN merupakan rujukan resmi yang tercantum di Modul 5?',
    options: [
      'Jurnal ilmiah',
      'Prosiding konferensi',
      'Komentar anonim media sosial tanpa identitas',
      'Manual teknis dan blueprint'
    ],
    answer: 2,
    explanation: 'Komentar anonim media sosial bukan jenis rujukan ilmiah.',
    difficulty: 1
  },
  {
    id: 'qz-m5-15',
    topicId: 'm5-literature-review',
    type: 'single',
    prompt: 'Literature search berbeda dari Literature review karena literature search berfokus pada:',
    options: [
      'Sintesis temuan mendalam',
      'Pencarian dan penemuan sumber berkas referensi',
      'Penulisan kesimpulan akhir',
      'Ujian sidang skripsi'
    ],
    answer: 1,
    explanation: 'Search berfokus pada penelusuran berkas, sedangkan review berfokus pada pengolahan dan sintesis isinya.',
    difficulty: 1
  },

  // MODUL 6 (15 questions)
  {
    id: 'qz-m6-01',
    topicId: 'm6-populasi-sampel',
    type: 'single',
    prompt: 'Bagian dari jumlah dan karakteristik yang dimiliki oleh populasi dan mewakilinya disebut:',
    options: ['Parameter', 'Sampel', 'Variabel', 'Konstanta'],
    answer: 1,
    explanation: 'Sampel adalah bagian dari populasi yang representatif mewakilinya.',
    difficulty: 1
  },
  {
    id: 'qz-m6-02',
    topicId: 'm6-probability-nonprobability',
    type: 'single',
    prompt: 'Dalam klasifikasi diagram modul RTI, teknik Systematic Sampling dikelompokkan ke dalam:',
    options: ['Probability sampling', 'Nonprobability sampling', 'Continuous sampling', 'Cluster sampling'],
    answer: 1,
    explanation: 'Slide 46 Modul 6 secara tegas memasukkan Systematic ke dalam kelompok Nonprobability sampling.',
    difficulty: 2
  },
  {
    id: 'qz-m6-03',
    topicId: 'm6-sepuluh-teknik-sampling',
    type: 'single',
    prompt: 'Teknik sampling yang membagi populasi berstrata heterogen dan mengambil proporsi sebanding dari tiap tingkatan disebut:',
    options: [
      'Simple random sampling',
      'Proportionate stratified random sampling',
      'Purposive sampling',
      'Snowball sampling'
    ],
    answer: 1,
    explanation: 'Proportionate stratified random sampling mengambil sampel sebanding dengan proporsi strata populasi.',
    difficulty: 1
  },
  {
    id: 'qz-m6-04',
    topicId: 'm6-sepuluh-teknik-sampling',
    type: 'single',
    prompt: 'Teknik sampling di mana semua anggota populasi dijadikan sampel karena populasinya relatif kecil (< 30) disebut:',
    options: ['Snowball sampling', 'Saturated / Jenuh / Sensus', 'Quota sampling', 'Incidental sampling'],
    answer: 1,
    explanation: 'Sampling jenuh (sensus) meneliti seluruh anggota populasi kecil.',
    difficulty: 1
  },
  {
    id: 'qz-m6-05',
    topicId: 'm6-ukuran-sampel',
    type: 'single',
    prompt: 'Pada contoh Harry King di slide Modul 6, populasi N=200 pada taraf kepercayaan 95% dan kesalahan 5% menghasilkan sampel sebanyak:',
    options: ['100', '139', '154', '180'],
    answer: 1,
    explanation: 'Perhitungan slide: 0,58 × 200 × 1,195 = 138,62 dibulatkan menjadi 139 orang.',
    difficulty: 2
  },
  {
    id: 'qz-m6-06',
    topicId: 'm6-ukuran-sampel',
    type: 'single',
    prompt: 'Berdasarkan tabel Isaac & Michael pada slide modul, untuk populasi N=200 pada taraf kesalahan 5%, ukuran sampel s adalah:',
    options: ['154', '127', '115', '139'],
    answer: 1,
    explanation: 'Tabel slide 51: N=200 pada 5% menghasilkan s = 127.',
    difficulty: 2
  },
  {
    id: 'qz-m6-07',
    topicId: 'm6-ukuran-sampel',
    type: 'single',
    prompt: 'Menurut saran Roscoe untuk analisis multivariat (seperti regresi ganda), ukuran sampel minimal adalah:',
    options: [
      '2 kali jumlah variabel',
      '10 kali jumlah variabel penelitian',
      'Tepat 30 orang untuk semua penelitian',
      'Minimal 1.000 orang'
    ],
    answer: 1,
    explanation: 'Roscoe menyarankan minimal 10 kali jumlah variabel penelitian (misal 5 variabel = 50 responden).',
    difficulty: 1
  },
  {
    id: 'qz-m6-08',
    topicId: 'm6-skala-pengukuran',
    type: 'single',
    prompt: 'Skala pengukuran yang memiliki urutan dan jarak setara tetapi TIDAK memiliki nilai nol absolut adalah:',
    options: ['Nominal', 'Ordinal', 'Interval', 'Rasio'],
    answer: 2,
    explanation: 'Skala Interval memiliki jarak setara tanpa nol absolut (seperti suhu Celsius).',
    difficulty: 1
  },
  {
    id: 'qz-m6-09',
    topicId: 'm6-skala-likert',
    type: 'single',
    prompt: 'Pada contoh hitung skala Likert 100 responden modul (25 SS, 40 ST, 5 RG, 20 TS, 10 STS), berapakah total skor yang diperoleh?',
    options: ['300', '350', '400', '500'],
    answer: 1,
    explanation: '25(5) + 40(4) + 5(3) + 20(2) + 10(1) = 125 + 160 + 15 + 40 + 10 = 350.',
    difficulty: 2
  },
  {
    id: 'qz-m6-10',
    topicId: 'm6-skala-lain',
    type: 'single',
    prompt: 'Skala pengukuran dengan dua alternatif jawaban yang tegas dikotomi (seperti Ya/Tidak atau Pernah/Tidak Pernah) adalah:',
    options: ['Skala Likert', 'Skala Guttman', 'Semantic Differential', 'Rating Scale'],
    answer: 1,
    explanation: 'Skala Guttman bertujuan memperoleh jawaban tegas dua alternatif dikotomi.',
    difficulty: 1
  },
  {
    id: 'qz-m6-11',
    topicId: 'm6-skala-lain',
    type: 'single',
    prompt: 'Skala yang dikembangkan oleh Osgood berupa garis kontinum di antara dua kata sifat berlawanan kutub adalah:',
    options: ['Semantic Differential', 'Skala Guttman', 'Skala Likert', 'Nomogram King'],
    answer: 0,
    explanation: 'Osgood mengembangkan Semantic Differential.',
    difficulty: 1
  },
  {
    id: 'qz-m6-12',
    topicId: 'm6-observasi-hawthorne',
    type: 'single',
    prompt: 'Fenomena perubahan perilaku subjek karena menyadari bahwa dirinya sedang diamati peneliti disebut:',
    options: ['Hawthorne Effect', 'Placebo Effect', 'Halo Effect', 'Tunnel Effect'],
    answer: 0,
    explanation: 'Hawthorne Effect adalah bias perubahan perilaku subjek yang diamati.',
    difficulty: 1
  },
  {
    id: 'qz-m6-13',
    topicId: 'm6-reliabilitas-validitas',
    type: 'single',
    prompt: 'Pengukuran berulang atas sifat yang sama memberikan hasil yang sama stabilnya adalah definisi dari:',
    options: ['Validitas', 'Reliabilitas', 'Originalitas', 'Feasibilitas'],
    answer: 1,
    explanation: 'Reliabilitas adalah konsistensi hasil saat pengukuran diulang.',
    difficulty: 1
  },
  {
    id: 'qz-m6-14',
    topicId: 'm6-rumus-reliabilitas',
    type: 'single',
    prompt: 'Jika korelasi dua belahan tes ganjil-genap r = 0,60, berapakah reliabilitas tes penuh berdasarkan rumus koreksi Spearman-Brown ρ = 2r / (1 + r)?',
    options: ['0,60', '0,75', '0,80', '1,20'],
    answer: 1,
    explanation: '2(0,60) / (1 + 0,60) = 1,20 / 1,60 = 0,75.',
    difficulty: 2
  },
  {
    id: 'qz-m6-15',
    topicId: 'm6-rumus-reliabilitas',
    type: 'single',
    prompt: 'Rumus uji reliabilitas yang secara khusus digunakan untuk item berskala dikotomi (skor benar=1 dan salah=0) adalah:',
    options: ['Cronbach’s Alpha', 'KR-20 (Kuder-Richardson 20)', 'Spearman-Brown murni', 'Pearson r'],
    answer: 1,
    explanation: 'KR-20 dirancang khusus untuk internal consistency item dikotomi biner 1 dan 0.',
    difficulty: 1
  },

  // MODUL 7 (15 questions)
  {
    id: 'qz-m7-01',
    topicId: 'm7-ieee-style',
    type: 'single',
    prompt: 'Dalam format IEEE style, daftar rujukan pada bagian akhir diurutkan berdasarkan:',
    options: [
      'Abjad A-Z nama keluarga penulis',
      'Urutan nomor pertama kali sumber disitasi di badan teks',
      'Tahun terbit jurnal dari yang tertua',
      'Tingkat reputasi jurnal'
    ],
    answer: 1,
    explanation: 'IEEE Style diurutkan berdasarkan urutan pertama kali disitasi di teks [1], [2], [3], bukan urutan alfabet.',
    difficulty: 1
  },
  {
    id: 'qz-m7-02',
    topicId: 'm7-ieee-style',
    type: 'single',
    prompt: 'Bagaimana penulisan nama penulis dalam entri daftar referensi IEEE?',
    options: [
      'Nama lengkap tanpa singkatan',
      'Inisial nama depan lalu nama keluarga (contoh: A. Al Muhairy)',
      'Nama belakang ditulis di depan tanpa koma',
      'Hanya boleh mencantumkan nama institusi'
    ],
    answer: 1,
    explanation: 'IEEE menggunakan inisial nama depan diikuti nama keluarga.',
    difficulty: 1
  },
  {
    id: 'qz-m7-03',
    topicId: 'm7-penyajian-analisis',
    type: 'truefalse',
    prompt: 'Benar atau Salah: Menampilkan tabel hasil pengujian dan kutipan wawancara di Bab 4 sudah otomatis sama dengan melakukan analisis data.',
    answer: false,
    explanation: 'Salah. Modul menegaskan penyajian tabel atau kutipan saja belum sama dengan analisis; analisis harus mengevaluasi data terhadap objektif riset.',
    difficulty: 1
  },
  {
    id: 'qz-m7-04',
    topicId: 'm7-literatur-nonnumeris',
    type: 'single',
    prompt: 'Dalam menyajikan telaah literatur sebagai data nonnumeris, apa kewajiban peneliti terkait counter-argument?',
    options: [
      'Menyembunyikannya agar hipotesis aman',
      'Wajib menyajikan seluruh counter-argument penting secara transparan',
      'Menghapus nama penulis yang berbeda pendapat',
      'Mengganti data counter-argument'
    ],
    answer: 1,
    explanation: 'Peneliti wajib menyajikan seluruh counter-argument penting yang relevan.',
    difficulty: 1
  },
  {
    id: 'qz-m7-05',
    topicId: 'm7-penyajian-kualitatif',
    type: 'single',
    prompt: 'Model penyajian wawancara di mana setiap pertanyaan dibahas terlebih dahulu lalu diperbandingkan antar-unit/perusahaan disebut:',
    options: ['By company', 'By question', 'Grouping summary', 'Hawthorne reporting'],
    answer: 1,
    explanation: 'By question membahas pertanyaan per pertanyaan lalu membandingkan jawabannya antar-unit.',
    difficulty: 1
  },
  {
    id: 'qz-m7-06',
    topicId: 'm7-implementasi-data',
    type: 'single',
    prompt: 'Penyajian implementasi sistem komputasi dalam skripsi sebaiknya ditampilkan dalam bentuk:',
    options: [
      'Menyalin 1.000 baris kode mentah ke badan bab',
      'Pseudocode, flowchart disertai narasi teks, dan cuplikan kode penting',
      'Foto monitor komputer yang sedang menyala',
      'Hanya mencantumkan link GitHub tanpa penjelasan'
    ],
    answer: 1,
    explanation: 'Modul menganjurkan pseudocode, flowchart dengan penjelasan teks, dan cuplikan source code penting.',
    difficulty: 1
  },
  {
    id: 'qz-m7-07',
    topicId: 'm7-penyajian-numeris',
    type: 'single',
    prompt: 'Jika data numerik dikelompokkan ke dalam rentang interval frekuensi teratur, grafik visual yang paling tepat adalah:',
    options: ['Pie chart', 'Histogram', 'Polar chart', '3D surface'],
    answer: 1,
    explanation: 'Histogram secara spesifik menunjukkan distribusi frekuensi data numerik yang dikelompokkan.',
    difficulty: 1
  },
  {
    id: 'qz-m7-08',
    topicId: 'm7-signifikansi-evaluasi',
    type: 'single',
    prompt: 'Apa yang wajib dilakukan sebelum menarik kesimpulan eksperimen simulasi menurut modul?',
    options: [
      'Mengubah tema skripsi',
      'Menerapkan uji signifikansi (significance tests) yang sesuai',
      'Meminta tanda tangan semua dosen',
      'Membeli software visualisasi berbayar'
    ],
    answer: 1,
    explanation: 'Peneliti wajib menerapkan uji signifikansi yang sesuai sebelum menyimpulkan eksperimen.',
    difficulty: 1
  },
  {
    id: 'qz-m7-09',
    topicId: 'm7-hasil-baik',
    type: 'truefalse',
    prompt: 'Benar atau Salah: Hasil penelitian yang membuktikan bahwa algoritma baru yang diajukan tidak lebih baik daripada algoritma lama tetap dapat menjadi hasil penelitian yang baik.',
    answer: true,
    explanation: 'Benar! Modul menegaskan hipotesis boleh didukung atau tidak; hasil yang baik adalah yang handal dan diperoleh dari metode yang benar.',
    difficulty: 1
  },
  {
    id: 'qz-m7-10',
    topicId: 'm7-tujuh-pertanyaan-konteks',
    type: 'single',
    prompt: 'Peringatan penting modul RTI saat merangkum dan mengontekstualkan hasil penelitian adalah:',
    options: [
      'Jangan memperluas kesimpulan ke kondisi yang tidak diteliti',
      'Kesimpulan harus dibuat sepanjang mungkin',
      'Wajib menyebutkan nama seluruh anggota keluarga',
      'Dilarang menghubungkan hasil dengan penelitian orang lain'
    ],
    answer: 0,
    explanation: 'Peneliti dilarang melakukan overgeneralization ke kondisi yang tidak diteliti.',
    difficulty: 1
  },
  {
    id: 'qz-m7-11',
    topicId: 'm7-evaluasi-future-work',
    type: 'single',
    prompt: 'Karakteristik saran penelitian lanjut (future work) yang baik menurut modul adalah:',
    options: [
      'Umum dan klise seperti "agar sistem lebih baik"',
      'Konkret, terukur mengenai tujuan tersisa, prioritas waktu, dan syarat penerapan nyata',
      'Saran untuk mengganti seluruh bahasa pemrograman',
      'Saran agar mahasiswa tidak perlu skripsi'
    ],
    answer: 1,
    explanation: 'Future work harus konkret, bukan saran klise normatif.',
    difficulty: 1
  },
  {
    id: 'qz-m7-12',
    topicId: 'm7-poster-ilmiah',
    type: 'single',
    prompt: 'Tiga pedoman desain poster ilmiah menurut modul adalah:',
    options: [
      'Let it shine, Keep it colorful, Add animations',
      'Let it breathe, Keep it lined up, Tell the reader where to go',
      'Fill all space, Use comic sans, Print on glossy',
      'Copy paste text, Keep it secret, Speak fast'
    ],
    answer: 1,
    explanation: 'Tiga pedoman emas poster ilmiah modul: Let it breathe, Keep it lined up, Tell the reader where to go.',
    difficulty: 1
  },
  {
    id: 'qz-m7-13',
    topicId: 'm7-poster-ilmiah',
    type: 'single',
    prompt: 'Perangkat lunak open-source gratis untuk mendesain poster ilmiah yang secara spesifik disebut dalam modul adalah:',
    options: ['Adobe InDesign', 'Scribus', 'PowerPoint', 'Canva'],
    answer: 1,
    explanation: 'Scribus adalah software open source/free yang dicantumkan modul.',
    difficulty: 1
  },
  {
    id: 'qz-m7-14',
    topicId: 'm7-poster-ilmiah',
    type: 'single',
    prompt: 'Berapa panduan panjang kata untuk bagian Introduction, Methods, Results, dan Conclusions pada poster ilmiah menurut modul?',
    options: ['Sekitar 50 kata', 'Sekitar 200 kata masing-masing', 'Sekitar 1.000 kata', 'Bebas tanpa batasan'],
    answer: 1,
    explanation: 'Modul merekomendasikan sekitar 200 kata untuk Intro, Methods, Results, dan Conclusions.',
    difficulty: 2
  },
  {
    id: 'qz-m7-15',
    topicId: 'm7-poster-ilmiah',
    type: 'single',
    prompt: 'Mengapa modul menyarankan kertas Semiglossy dan melarang bahan Ultraglossy untuk poster ilmiah?',
    options: [
      'Kertas ultraglossy dilarang oleh panitia konferensi',
      'Bahan ultraglossy memantulkan cahaya lampu sorot ruangan sehingga menyulitkan pembacaan',
      'Semiglossy lebih tebal dari papan kayu',
      'Ultraglossy tidak bisa dicetak warna hitam'
    ],
    answer: 1,
    explanation: 'Modul memperingatkan pantulan cahaya lampu sorot dari bahan ultraglossy atau laminasi kilap.',
    difficulty: 2
  }
];

export function getQuizQuestionsByModule(moduleSlug: ModuleSlug): QuizQuestion[] {
  const modNum = moduleSlug.replace('modul-', 'm');
  return allQuizQuestions.filter((q) => q.id.startsWith(`qz-${modNum}`));
}

export function generateMockExam(count: number = 30): QuizQuestion[] {
  const shuffled = [...allQuizQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export function getQuestionById(id: string): QuizQuestion | undefined {
  return allQuizQuestions.find((q) => q.id === id);
}
