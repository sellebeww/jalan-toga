import { Flashcard } from '../types';

export const allFlashcards: Flashcard[] = [
  // MODUL 1 (25 cards)
  {
    id: 'fc-m1-01',
    moduleSlug: 'modul-1',
    topicId: 'm1-tujuan-rti',
    category: 'konsep',
    front: 'Apa tujuan utama pembelajaran akademis menurut Modul 1 RTI?',
    back: 'Mengembangkan kemampuan "belajar cara belajar", agar mahasiswa dapat terus menerima pengetahuan baru sepanjang hayat.',
    tags: ['Tujuan RTI', 'Belajar']
  },
  {
    id: 'fc-m1-02',
    moduleSlug: 'modul-1',
    topicId: 'm1-tujuan-rti',
    category: 'definisi',
    front: 'Apa kedudukan skripsi bagi mahasiswa S1 menurut modul?',
    back: 'Tahap akhir jenjang S1 untuk membangun dan menguji pengetahuan serta keahlian sebagai persiapan menjadi profesional.',
    tags: ['Skripsi', 'S1']
  },
  {
    id: 'fc-m1-03',
    moduleSlug: 'modul-1',
    topicId: 'm1-proses-skripsi',
    category: 'urutan',
    front: 'Sebutkan 7 langkah proses skripsi berurutan!',
    back: '1. Kembangkan proposal\n2. Kembangkan rumusan masalah\n3. Ikuti tujuan penelitian\n4. Tampilkan & analisis data\n5. Tarik kesimpulan & saran\n6. Tampilkan & pertahankan hasil di sidang\n7. Siapkan versi akhir laporan',
    tags: ['Langkah Skripsi', 'Hafalan Urut']
  },
  {
    id: 'fc-m1-04',
    moduleSlug: 'modul-1',
    topicId: 'm1-proses-skripsi',
    category: 'konsep',
    front: 'Apa langkah ke-7 (terakhir) dari proses skripsi menurut modul?',
    back: 'Mempersiapkan versi akhir laporan (revisi akhir pasca sidang).',
    tags: ['Skripsi', 'Langkah Akhir']
  },
  {
    id: 'fc-m1-05',
    moduleSlug: 'modul-1',
    topicId: 'm1-kriteria-penilaian',
    category: 'konsep',
    front: 'Sebutkan 4 ranah kriteria penilaian skripsi dalam modul!',
    back: '1. Umum (kesesuaian & keaslian topik, pentingnya penemuan)\n2. Laporan (kejelasan, konsistensi, argumentasi, pemisahan ide, rujukan, format)\n3. Sidang (argumentasi, penguasaan via tanya jawab)\n4. Lainnya (sikap, tenggat waktu, syarat formal)',
    tags: ['Penilaian', 'Kriteria']
  },
  {
    id: 'fc-m1-06',
    moduleSlug: 'modul-1',
    topicId: 'm1-kriteria-penilaian',
    category: 'perbedaan',
    front: 'Apakah keaslian topik sama dengan pentingnya penemuan?',
    back: 'TIDAK sama! Keaslian topik dinilai terpisah dari pentingnya penemuan. Laporan yang rapi formatnya tetap memerlukan argumentasi data yang kuat.',
    tags: ['Keaslian', 'Pentingnya Penemuan']
  },
  {
    id: 'fc-m1-07',
    moduleSlug: 'modul-1',
    topicId: 'm1-cs-empiris',
    category: 'konsep',
    front: 'Bagaimana pandangan Newell & Simon tentang Computer Science?',
    back: 'CS adalah disiplin ilmu empiris. Artefak baru (misalnya program komputer) dipandang sebagai percobaan yang struktur dan karakteristiknya dipelajari.',
    tags: ['Newell & Simon', 'Empiris']
  },
  {
    id: 'fc-m1-08',
    moduleSlug: 'modul-1',
    topicId: 'm1-cs-empiris',
    category: 'urutan',
    front: 'Apa rantai hafalan CS empiris menurut Newell & Simon?',
    back: 'Artefak → Percobaan → Karakteristik.',
    tags: ['Rantai Hafalan', 'Newell & Simon']
  },
  {
    id: 'fc-m1-09',
    moduleSlug: 'modul-1',
    topicId: 'm1-cs-algoritma',
    category: 'definisi',
    front: 'Apa definisi Computer Science menurut Biermann?',
    back: 'Computer Science adalah studi tentang algoritma ("Computer science is the study of algorithms").',
    tags: ['Biermann', 'Algoritma']
  },
  {
    id: 'fc-m1-10',
    moduleSlug: 'modul-1',
    topicId: 'm1-cs-algoritma',
    category: 'konsep',
    front: 'Apa definisi Computer Science menurut Brookshear?',
    back: 'CS membangun landasan ilmiah bagi desain komputer, pemrograman, pengolahan informasi, solusi algoritmik, dan proses algoritmik.',
    tags: ['Brookshear', 'Definisi CS']
  },
  {
    id: 'fc-m1-11',
    moduleSlug: 'modul-1',
    topicId: 'm1-cs-algoritma',
    category: 'konsep',
    front: 'Apa penyempitan makna CS yang secara tegas ditolak oleh modul?',
    back: 'Penyempitan CS menjadi sekadar studi tentang komputer fisik, cara menulis program (coding semata), atau penggunaan software aplikasi perkantoran.',
    tags: ['Salah Kaprah CS', 'Modul 1']
  },
  {
    id: 'fc-m1-12',
    moduleSlug: 'modul-1',
    topicId: 'm1-enam-pertanyaan-algoritma',
    category: 'urutan',
    front: 'Sebutkan 6 pertanyaan tentang algoritma (hafalan wajib)!',
    back: '1. Discovery (ditemukan)\n2. Representation (dinyatakan)\n3. Execution (dijalankan)\n4. Communication (dikomunikasikan)\n5. Analysis (dianalisis efisiensinya)\n6. Limitations (keterbatasannya)',
    tags: ['Enam Pertanyaan', 'DREC-AL']
  },
  {
    id: 'fc-m1-13',
    moduleSlug: 'modul-1',
    topicId: 'm1-is-sosial-teknologi',
    category: 'definisi',
    front: 'Apa hakikat Information Systems (IS) menurut Allen S. Lee?',
    back: 'Interaksi antara isu sosial dan teknologi: hubungan manusia dalam organisasi atau lingkungan sosial dengan hardware, software, dan data.',
    tags: ['Allen S. Lee', 'Sistem Informasi']
  },
  {
    id: 'fc-m1-14',
    moduleSlug: 'modul-1',
    topicId: 'm1-is-sosial-teknologi',
    category: 'urutan',
    front: 'Apa rantai hafalan Information Systems (IS)?',
    back: 'Manusia → Organisasi → Teknologi (MOT).',
    tags: ['Rantai Hafalan', 'IS']
  },
  {
    id: 'fc-m1-15',
    moduleSlug: 'modul-1',
    topicId: 'm1-is-sosial-teknologi',
    category: 'konsep',
    front: 'Bagaimana cara menentukan apakah suatu riset condong ke CS atau IS?',
    back: 'Tentukan pusat pertanyaan penelitiannya, bukan hanya nama atau merek aplikasinya!',
    tags: ['CS vs IS', 'Pertanyaan Riset']
  },
  {
    id: 'fc-m1-16',
    moduleSlug: 'modul-1',
    topicId: 'm1-dua-belas-subbidang-cs',
    category: 'konsep',
    front: 'Apakah HCI dan Organizational Informatics termasuk dalam 12 subbidang CS modul?',
    back: 'YA, keduanya tercantum sebagai subbidang ke-11 dan ke-12 dari Computer Science dalam modul RTI, membuktikan pembeda CS-IS bukan pemisahan mutlak.',
    tags: ['Subbidang CS', 'HCI']
  },
  {
    id: 'fc-m1-17',
    moduleSlug: 'modul-1',
    topicId: 'm1-komputasi-efisiensi',
    category: 'definisi',
    front: 'Apa definisi komputasi menurut modul?',
    back: 'Urutan langkah sederhana yang mengarah pada perubahan informasi yang kompleks.',
    tags: ['Komputasi', 'Definisi']
  },
  {
    id: 'fc-m1-18',
    moduleSlug: 'modul-1',
    topicId: 'm1-komputasi-efisiensi',
    category: 'konsep',
    front: 'Jika hardware 2x lebih kuat, apakah ukuran masalah terpecahkan otomatis 2x lebih besar?',
    back: 'TIDAK otomatis! Pada algoritma eksponensial, hardware 2x lebih cepat hanya menambah ukuran masalah yang bisa diselesaikan sedikit sekali.',
    tags: ['Komputasi', 'Efisiensi']
  },
  {
    id: 'fc-m1-19',
    moduleSlug: 'modul-1',
    topicId: 'm1-sejarah-komputer',
    category: 'urutan',
    front: 'Sebutkan 3 periode sejarah komputer menurut modul!',
    back: '1. Early Period (sebelum 1940: Pascaline, Jacquard loom)\n2. Birth of Computers (1940-1950: ENIAC)\n3. Modern Era (sejak 1950: Altair 8800 & 5 generasi)',
    tags: ['Sejarah Komputer', '3 Periode']
  },
  {
    id: 'fc-m1-20',
    moduleSlug: 'modul-1',
    topicId: 'm1-sejarah-komputer',
    category: 'urutan',
    front: 'Sebutkan rantai komponen utama 5 Generasi Komputer!',
    back: 'Vacuum tubes → Transistor → Integrated Circuits (IC) → LSI/VLSI → ULSI.',
    tags: ['5 Generasi', 'Komponen']
  },
  {
    id: 'fc-m1-21',
    moduleSlug: 'modul-1',
    topicId: 'm1-sejarah-komputer',
    category: 'konsep',
    front: 'Mengapa pada Generasi V tahunnya ditulis "1985 - ?" dengan tanda tanya?',
    back: 'Tanda tanya mengikuti slide asli modul RTI, menandakan era prosesor paralel, mobile, wireless, VR, dan cloud computing yang masih terus berlanjut hingga kini.',
    tags: ['Generasi V', 'Tanda Tanya']
  },
  {
    id: 'fc-m1-22',
    moduleSlug: 'modul-1',
    topicId: 'm1-sejarah-komputer',
    category: 'konsep',
    front: 'Pada generasi berapakah Integrated Circuits (IC) dan minicomputer pertama kali muncul?',
    back: 'Generasi III (1965-1975).',
    tags: ['Generasi III', 'IC']
  },
  {
    id: 'fc-m1-23',
    moduleSlug: 'modul-1',
    topicId: 'm1-sejarah-komputer',
    category: 'konsep',
    front: 'Pada generasi berapakah Graphical User Interface (GUI) dan mikrokomputer PC muncul?',
    back: 'Generasi IV (1975-1985) dengan teknologi LSI/VLSI.',
    tags: ['Generasi IV', 'GUI']
  },
  {
    id: 'fc-m1-24',
    moduleSlug: 'modul-1',
    topicId: 'm1-cs-empiris',
    category: 'konsep',
    front: 'Sebutkan 4 perspektif teknologi Computer Science dalam modul!',
    back: '1. Teori (analisis numeris, struktur data, algoritma)\n2. Penyimpanan/manipulasi data (basis data)\n3. Hubungan antarsoftware (arsitektur)\n4. Teknik & alat pengembangan (rekayasa software, bahasa, OS)',
    tags: ['Perspektif CS', 'Teknologi']
  },
  {
    id: 'fc-m1-25',
    moduleSlug: 'modul-1',
    topicId: 'm1-is-sosial-teknologi',
    category: 'konsep',
    front: 'Contoh riset adopsi CASE tools pada organisasi termasuk condong ke CS atau IS?',
    back: 'Cenderung ke IS (Information Systems), karena menitikberatkan pada perubahan organisasi dan perilaku adopsi teknologi oleh manusia.',
    tags: ['CASE Tools', 'IS']
  },

  // MODUL 2 (25 cards)
  {
    id: 'fc-m2-01',
    moduleSlug: 'modul-2',
    topicId: 'm2-riset-originalitas',
    category: 'definisi',
    front: 'Apa definisi riset menurut Modul 2?',
    back: 'Investigasi asli untuk memperoleh pengetahuan dan pemahaman baru.',
    tags: ['Riset', 'Definisi']
  },
  {
    id: 'fc-m2-02',
    moduleSlug: 'modul-2',
    topicId: 'm2-riset-originalitas',
    category: 'definisi',
    front: 'Apa arti originalitas dan kontribusi dalam riset?',
    back: 'Originalitas = melakukan sesuatu yang belum pernah dilakukan sebelumnya. Kontribusi = membagikan ide, teori, dan temuan baru untuk memperluas pengetahuan.',
    tags: ['Originalitas', 'Kontribusi']
  },
  {
    id: 'fc-m2-03',
    moduleSlug: 'modul-2',
    topicId: 'm2-riset-originalitas',
    category: 'konsep',
    front: 'Apa jebakan fatal tentang originalitas yang diingatkan oleh modul?',
    back: 'Sesuatu yang "asli bagi peneliti" belum otomatis "asli bagi bidang ilmu"!',
    tags: ['Jebakan Originalitas', 'Modul 2']
  },
  {
    id: 'fc-m2-04',
    moduleSlug: 'modul-2',
    topicId: 'm2-riset-originalitas',
    category: 'konsep',
    front: 'Sebutkan 4 bentuk originalitas yang tercantum dalam modul!',
    back: '1. Alat / teknik / prosedur / metode\n2. Eksplorasi hal yang tidak diketahui\n3. Menemukan hal yang tidak diantisipasi\n4. Penggunaan atau interpretasi data baru',
    tags: ['Bentuk Originalitas', 'Modul 2']
  },
  {
    id: 'fc-m2-05',
    moduleSlug: 'modul-2',
    topicId: 'm2-dikw-theory',
    category: 'urutan',
    front: 'Sebutkan tingkatan piramida DIKW + Theory beserta rantai intinya!',
    back: 'Data (fakta) → Information (makna) → Knowledge (pemahaman) → Wisdom (tindakan) + Theory (ide/pengandaian berdasar observasi).',
    tags: ['DIKW', 'Theory']
  },
  {
    id: 'fc-m2-06',
    moduleSlug: 'modul-2',
    topicId: 'm2-dikw-theory',
    category: 'konsep',
    front: 'Berdasarkan contoh angka slide (2, 4, 6 detik), jelaskan perbedaan Data, Info, Knowledge, dan Wisdom!',
    back: 'Data: Waktu respon 2, 4, 6 detik.\nInfo: Rata-rata 4 detik.\nKnowledge: Pemahaman penyebab kelambatan query database.\nWisdom: Bertindak memperbaiki arsitektur database.',
    tags: ['Contoh Angka Slide', 'DIKW']
  },
  {
    id: 'fc-m2-07',
    moduleSlug: 'modul-2',
    topicId: 'm2-sequential-generalised',
    category: 'perbedaan',
    front: 'Apa perbedaan antara model Sequential dan model Generalised?',
    back: 'Sequential = tahapan linear berurutan dari awal sampai akhir. Generalised = tetap berstruktur tetapi menyediakan rute alternatif/tahap adaptif sesuai sifat riset.',
    tags: ['Sequential', 'Generalised']
  },
  {
    id: 'fc-m2-08',
    moduleSlug: 'modul-2',
    topicId: 'm2-tujuh-tahap-sharp',
    category: 'urutan',
    front: 'Sebutkan 7 tahap sequential menurut model Sharp (hafalan berurutan)!',
    back: '1. Identify the broad area of study\n2. Select a research topic\n3. Decide on an approach\n4. Plan how you will perform the research\n5. Gather data and information\n6. Analyse and interpret these data\n7. Present the results and findings',
    tags: ['Model Sharp', 'Hafalan Urut']
  },
  {
    id: 'fc-m2-09',
    moduleSlug: 'modul-2',
    topicId: 'm2-circulatory-evolutionary',
    category: 'perbedaan',
    front: 'Apa perbedaan model Circulatory dan Evolutionary?',
    back: 'Circulatory = lingkaran penemuan berulang yang bisa kembali ke tahap awal (refine hipotesis). Evolutionary = perubahan riset seiring waktu tanpa terikat pola pengulangan siklus yang sama.',
    tags: ['Circulatory', 'Evolutionary']
  },
  {
    id: 'fc-m2-10',
    moduleSlug: 'modul-2',
    topicId: 'm2-circulatory-evolutionary',
    category: 'urutan',
    front: 'Sebutkan 5 elemen dalam Research Wheel modul!',
    back: '1. Conceptual framework\n2. Pertanyaan / Hipotesis\n3. Pengumpulan data\n4. Analisis data\n5. Pengembangan pemahaman',
    tags: ['Research Wheel', 'Modul 2']
  },
  {
    id: 'fc-m2-11',
    moduleSlug: 'modul-2',
    topicId: 'm2-field-approach-nature',
    category: 'konsep',
    front: 'Apa makna Triad Field, Approach, dan Nature dalam penelitian?',
    back: 'Field = kelompok peneliti dengan minat sama (bidang ilmu).\nApproach = metode yang diterapkan.\nNature = jenis kontribusi terhadap pengetahuan.',
    tags: ['FAN Triad', 'Klasifikasi Riset']
  },
  {
    id: 'fc-m2-12',
    moduleSlug: 'modul-2',
    topicId: 'm2-kuantitatif-kualitatif',
    category: 'perbedaan',
    front: 'Apa perbedaan pokok Kuantitatif dan Kualitatif?',
    back: 'Kuantitatif: skala numerik, data terstruktur, analisis statistik inferensial.\nKualitatif: pemahaman mendalam area substantif, data naratif tidak terstruktur, wawancara/observasi.',
    tags: ['Kuantitatif', 'Kualitatif']
  },
  {
    id: 'fc-m2-13',
    moduleSlug: 'modul-2',
    topicId: 'm2-kuantitatif-kualitatif',
    category: 'konsep',
    front: 'Apa peringatan penting modul tentang instrumen penelitian?',
    back: 'Instrumen saja belum menentukan seluruh pendekatan! (Misal kuesioner terbuka tetap kualitatif).',
    tags: ['Peringatan Modul', 'Instrumen']
  },
  {
    id: 'fc-m2-14',
    moduleSlug: 'modul-2',
    topicId: 'm2-empat-pendekatan',
    category: 'konsep',
    front: 'Apa definisi Action Research dan apa jebakannya?',
    back: 'Pembelajaran terdokumentasi dan termonitor atas tindakan nyata menyelesaikan masalah bersama subjek.\nJebakan: Observasi tanpa tindakan belum memenuhi cirinya!',
    tags: ['Action Research', 'Jebakan']
  },
  {
    id: 'fc-m2-15',
    moduleSlug: 'modul-2',
    topicId: 'm2-empat-pendekatan',
    category: 'konsep',
    front: 'Apa definisi Experiment dan apa jebakannya?',
    back: 'Investigasi sebab-akibat lewat tes yang dikendalikan peneliti.\nJebakan: Sekadar melihat dua angka berbeda belum menjelaskan hubungan sebab-akibat!',
    tags: ['Experiment', 'Jebakan']
  },
  {
    id: 'fc-m2-16',
    moduleSlug: 'modul-2',
    topicId: 'm2-empat-pendekatan',
    category: 'konsep',
    front: 'Apa definisi Case Study dan apa jebakannya?',
    back: 'Eksplorasi mendalam atas satu kasus tertentu.\nJebakan: Jumlah kasus yang kecil tidak otomatis menjamin kedalaman analisis!',
    tags: ['Case Study', 'Jebakan']
  },
  {
    id: 'fc-m2-17',
    moduleSlug: 'modul-2',
    topicId: 'm2-empat-pendekatan',
    category: 'konsep',
    front: 'Apa definisi Survey dan apa jebakannya?',
    back: 'Pengumpulan data dari sampel populasi via kuesioner/wawancara.\nJebakan: Survei dan kuesioner berbeda tingkat konsep (survei = metode riset; kuesioner = instrumen).',
    tags: ['Survey', 'Jebakan']
  },
  {
    id: 'fc-m2-18',
    moduleSlug: 'modul-2',
    topicId: 'm2-peran-pelaku',
    category: 'konsep',
    front: 'Apa peran pembimbing skripsi menurut modul?',
    back: 'Membantu area subjek, mengarahkan pemikiran ilmiah, dan memonitor kemajuan. Pembimbing BUKAN pelaksana pengganti pekerjaan mahasiswa!',
    tags: ['Pembimbing', 'Peran']
  },
  {
    id: 'fc-m2-19',
    moduleSlug: 'modul-2',
    topicId: 'm2-peran-pelaku',
    category: 'definisi',
    front: 'Apa karakteristik model penguji Quality Evaluator?',
    back: 'Berorientasi pada hasil akhir (kontribusi, kompleksitas, kegunaan) berdasarkan laporan/sidang tanpa komunikasi proyek selama riset berlangsung.',
    tags: ['Quality Evaluator', 'Penguji']
  },
  {
    id: 'fc-m2-20',
    moduleSlug: 'modul-2',
    topicId: 'm2-peran-pelaku',
    category: 'definisi',
    front: 'Apa karakteristik model penguji Quality Assuror?',
    back: 'Mereview hasil pada beberapa tahap berkala, memahami kemajuan, dan ikut bertanggung jawab menilai kualitas riset.',
    tags: ['Quality Assuror', 'Penguji']
  },
  {
    id: 'fc-m2-21',
    moduleSlug: 'modul-2',
    topicId: 'm2-peran-pelaku',
    category: 'konsep',
    front: 'Apakah larangan komunikasi pada Quality Evaluator berlaku di semua kampus?',
    back: 'TIDAK! Larangan komunikasi adalah gambaran model teoritis dalam modul, bukan aturan mutlak semua institusi. Penguji dalam praktik nyata sering menggabungkan kedua peran.',
    tags: ['Catatan Penting', 'Penguji']
  },
  {
    id: 'fc-m2-22',
    moduleSlug: 'modul-2',
    topicId: 'm2-banyak-mahasiswa-pembimbing',
    category: 'konsep',
    front: 'Apa aturan tanggung jawab pada proyek skripsi dengan banyak mahasiswa?',
    back: 'Semua anggota bertanggung jawab sama atas seluruh isi laporan gabungan!',
    tags: ['Banyak Mahasiswa', 'Tanggung Jawab']
  },
  {
    id: 'fc-m2-23',
    moduleSlug: 'modul-2',
    topicId: 'm2-banyak-mahasiswa-pembimbing',
    category: 'konsep',
    front: 'Apa yang wajib dipastikan bila skripsi dibimbing oleh banyak dosen pembimbing?',
    back: 'Perlu komunikasi aktif, penunjukan pembimbing utama, serta pembagian peran dan harapan yang jelas.',
    tags: ['Banyak Pembimbing', 'Koordinasi']
  },
  {
    id: 'fc-m2-24',
    moduleSlug: 'modul-2',
    topicId: 'm2-banyak-mahasiswa-pembimbing',
    category: 'konsep',
    front: 'Dalam proyek banyak mahasiswa, bagaimana pembagian tugasnya?',
    back: 'Setiap mahasiswa wajib memiliki bagian rumusan masalah yang unik, namun hasil akhirnya digabung dalam satu laporan utuh.',
    tags: ['Tim Riset', 'Rumusan Masalah']
  },
  {
    id: 'fc-m2-25',
    moduleSlug: 'modul-2',
    topicId: 'm2-dikw-theory',
    category: 'definisi',
    front: 'Apa definisi Theory dalam piramida DIKW + Theory modul?',
    back: 'Theory merepresentasikan ide, pendapat, dan pengandaian berdasarkan observasi ilmiah.',
    tags: ['Theory', 'DIKW']
  },

  // MODUL 3 (25 cards)
  {
    id: 'fc-m3-01',
    moduleSlug: 'modul-3',
    topicId: 'm3-logika-penalaran',
    category: 'definisi',
    front: 'Apa definisi logika menurut Modul 3?',
    back: 'Metode atau prinsip untuk membedakan penalaran yang tepat (valid) dan tidak tepat (invalid).',
    tags: ['Logika', 'Definisi']
  },
  {
    id: 'fc-m3-02',
    moduleSlug: 'modul-3',
    topicId: 'm3-logika-penalaran',
    category: 'urutan',
    front: 'Bagaimana alur penalaran ilmiah menghubungkan fakta ke kesimpulan?',
    back: 'Melalui alur: Input (evidences/fakta) → Process (penalaran logis) → Output (kesimpulan).',
    tags: ['Penalaran', 'Alur']
  },
  {
    id: 'fc-m3-03',
    moduleSlug: 'modul-3',
    topicId: 'm3-deduktif-induktif',
    category: 'perbedaan',
    front: 'Apa perbedaan arah penalaran Deduktif vs Induktif?',
    back: 'Deduktif = Umum ke Khusus (Top-Down).\nInduktif = Khusus ke Umum (Bottom-Up).',
    tags: ['Deduktif', 'Induktif']
  },
  {
    id: 'fc-m3-04',
    moduleSlug: 'modul-3',
    topicId: 'm3-deduktif-induktif',
    category: 'konsep',
    front: 'Sebutkan 4 sifat penalaran Deduktif!',
    back: '1. Analitis (menganalisis premis)\n2. Tautologis (tersirat dalam premis)\n3. A Priori (tanpa observasi empiris baru)\n4. Dapat dinilai sahih/tidaknya',
    tags: ['Sifat Deduktif', 'Hafalan']
  },
  {
    id: 'fc-m3-05',
    moduleSlug: 'modul-3',
    topicId: 'm3-deduktif-induktif',
    category: 'konsep',
    front: 'Sebutkan 4 sifat penalaran Induktif!',
    back: '1. Sintetis (mensintesis kasus)\n2. General (melampaui kasus teramati)\n3. A Posteriori (berdasar amatan inderawi)\n4. Mengandung aspek probabilitas (tidak pasti mutlak)',
    tags: ['Sifat Induktif', 'Hafalan']
  },
  {
    id: 'fc-m3-06',
    moduleSlug: 'modul-3',
    topicId: 'm3-deduktif-induktif',
    category: 'urutan',
    front: 'Sebutkan alur diagram proses Deduktif vs Induktif!',
    back: 'Deduktif: Teori → Hipotesis → Observasi → Konfirmasi.\nInduktif: Observasi → Pola → Hipotesis Sementara → Teori.',
    tags: ['Alur Diagram', 'Deduktif Induktif']
  },
  {
    id: 'fc-m3-07',
    moduleSlug: 'modul-3',
    topicId: 'm3-metode-metodologi',
    category: 'perbedaan',
    front: 'Apa perbedaan Metode, Metode Ilmiah, dan Metodologi?',
    back: 'Metode = kerangka tindakan terarah tujuan.\nMetode Ilmiah = pengetahuan sistematis berbasis bukti fisis.\nMetodologi = tahapan perencanaan terpadu (metode, teknik, tools, dokumentasi) untuk minimalkan risiko gagal.',
    tags: ['Metode vs Metodologi', 'Konsep']
  },
  {
    id: 'fc-m3-08',
    moduleSlug: 'modul-3',
    topicId: 'm3-metode-metodologi',
    category: 'konsep',
    front: 'Mengapa menyebut "menggunakan Python" belum menjelaskan metodologi?',
    back: 'Karena Python hanyalah alat bantu (tools), sedangkan metodologi adalah tahapan perencanaan riset yang komprehensif.',
    tags: ['Tools vs Metodologi', 'Modul 3']
  },
  {
    id: 'fc-m3-09',
    moduleSlug: 'modul-3',
    topicId: 'm3-metode-metodologi',
    category: 'konsep',
    front: 'Sebutkan 3 manfaat metodologi menurut modul!',
    back: '1. Meningkatkan pemahaman & tanggung jawab peneliti.\n2. Mendukung argumentasi berbasis fakta.\n3. Membantu mengembangkan saran & ide baru dengan dasar jelas.',
    tags: ['Manfaat Metodologi', 'Hafalan']
  },
  {
    id: 'fc-m3-10',
    moduleSlug: 'modul-3',
    topicId: 'm3-identifikasi-kelayakan',
    category: 'konsep',
    front: 'Sebutkan 3 syarat masalah penelitian yang baik!',
    back: '1. Nilai penelitian (asli, hubungan bidang lain, dapat diuji)\n2. Feasible (dapat dipecahkan, data/metode ada, biaya & waktu wajar)\n3. Kualifikasi peneliti (menarik minat & sesuai kemampuan)',
    tags: ['Kelayakan Masalah', '3 Syarat']
  },
  {
    id: 'fc-m3-11',
    moduleSlug: 'modul-3',
    topicId: 'm3-identifikasi-kelayakan',
    category: 'konsep',
    front: 'Apa jebakan utama dalam memilih masalah penelitian?',
    back: 'Topik yang "menarik" belum tentu "feasible" (layak dikerjakan)! Periksa data, waktu, dan biaya sebelum memutuskan.',
    tags: ['Menarik vs Feasible', 'Jebakan']
  },
  {
    id: 'fc-m3-12',
    moduleSlug: 'modul-3',
    topicId: 'm3-perumusan-masalah',
    category: 'definisi',
    front: 'Bagaimana bentuk rumusan masalah yang baik menurut modul?',
    back: 'Bentuk research question atau kalimat deklaratif yang berfokus pada dependent variable, padat, dan mengimplikasikan data pemecahannya.',
    tags: ['Rumusan Masalah', 'Dependent Variable']
  },
  {
    id: 'fc-m3-13',
    moduleSlug: 'modul-3',
    topicId: 'm3-perumusan-masalah',
    category: 'urutan',
    front: 'Sebutkan 4 langkah perumusan masalah (hafalan berurutan)!',
    back: '1. Tentukan fokus penelitian\n2. Cari faktor-faktor terkait sebagai subfokus\n3. Kaji dan pilih faktor yang menarik\n4. Hubungkan subfokus terpilih dengan fokus secara logis',
    tags: ['4 Langkah Rumusan', 'Hafalan Urut']
  },
  {
    id: 'fc-m3-14',
    moduleSlug: 'modul-3',
    topicId: 'm3-perumusan-masalah',
    category: 'konsep',
    front: 'Apa catatan penting modul tentang contoh rumusan masalah WSIS 2015?',
    back: 'Contoh WSIS 2015 dirumuskan pada tahun 2007 untuk mengilustrasikan relasi fokus-konteks-target, BUKAN informasi kondisi Indonesia saat ini.',
    tags: ['WSIS 2015', 'Catatan Modul']
  },
  {
    id: 'fc-m3-15',
    moduleSlug: 'modul-3',
    topicId: 'm3-hipotesis-fungsi',
    category: 'definisi',
    front: 'Apa definisi hipotesis dan mengapa sifatnya sementara?',
    back: 'Jawaban sementara atas masalah penelitian yang diuji empiris. Bersifat sementara karena berlandaskan teori yang belum diuji pada data penelitian tersebut.',
    tags: ['Hipotesis', 'Definisi']
  },
  {
    id: 'fc-m3-16',
    moduleSlug: 'modul-3',
    topicId: 'm3-hipotesis-fungsi',
    category: 'konsep',
    front: 'Apakah semua penelitian skripsi wajib memiliki hipotesis formal?',
    back: 'TIDAK! Slide 20 menegaskan penelitian deskriptif, eksploratif, dan kualitatif tidak memerlukan hipotesis formal.',
    tags: ['Hipotesis Wajib?', 'Peringatan']
  },
  {
    id: 'fc-m3-17',
    moduleSlug: 'modul-3',
    topicId: 'm3-hipotesis-fungsi',
    category: 'konsep',
    front: 'Sebutkan 5 manfaat hipotesis dalam penelitian!',
    back: '1. Menjelaskan masalah & variabel\n2. Mengarahkan tujuan agar efisien\n3. Mencegah pengumpulan data tak relevan\n4. Membantu pemilihan analisis\n5. Memandu penarikan kesimpulan',
    tags: ['Manfaat Hipotesis', 'Hafalan']
  },
  {
    id: 'fc-m3-18',
    moduleSlug: 'modul-3',
    topicId: 'm3-tiga-jenis-hipotesis',
    category: 'konsep',
    front: 'Sebutkan 3 jenis hipotesis berdasarkan pertanyaan penelitian!',
    back: '1. Descriptive (dugaan nilai variabel mandiri)\n2. Comparative (dugaan perbedaan antar-kelompok/kondisi)\n3. Associative (dugaan hubungan/pengaruh antarvariabel)',
    tags: ['3 Jenis Hipotesis', 'Klasifikasi']
  },
  {
    id: 'fc-m3-19',
    moduleSlug: 'modul-3',
    topicId: 'm3-tiga-jenis-hipotesis',
    category: 'konsep',
    front: 'Termasuk jenis apakah rumusan: "Tidak ada perbedaan akurasi C4.5 dan ANN"?',
    back: 'Comparative! Modul menegaskan rumusan negatif ("tidak ada perbedaan") tetap tergolong hipotesis comparative.',
    tags: ['Comparative Negatif', 'Contoh Slide']
  },
  {
    id: 'fc-m3-20',
    moduleSlug: 'modul-3',
    topicId: 'm3-tiga-jenis-hipotesis',
    category: 'konsep',
    front: 'Apakah kata "hubungan" dalam hipotesis asosiatif otomatis membuktikan sebab-akibat?',
    back: 'TIDAK otomatis! Korelasi hubungan asosiatif belum membuktikan adanya hubungan sebab-akibat searah.',
    tags: ['Hubungan vs Kausal', 'Asosiatif']
  },
  {
    id: 'fc-m3-21',
    moduleSlug: 'modul-3',
    topicId: 'm3-tipe-error',
    category: 'definisi',
    front: 'Apa itu Kesalahan Tipe I (Type I Error)?',
    back: 'Menolak H0 padahal H0 sebenarnya BENAR di populasi (probabilitas = α / taraf signifikansi).',
    tags: ['Tipe I', 'Alpha']
  },
  {
    id: 'fc-m3-22',
    moduleSlug: 'modul-3',
    topicId: 'm3-tipe-error',
    category: 'definisi',
    front: 'Apa itu Kesalahan Tipe II (Type II Error)?',
    back: 'Menerima H0 padahal H0 sebenarnya SALAH di populasi (probabilitas = β).',
    tags: ['Tipe II', 'Beta']
  },
  {
    id: 'fc-m3-23',
    moduleSlug: 'modul-3',
    topicId: 'm3-tipe-error',
    category: 'konsep',
    front: 'Jelaskan analogi alarm kebakaran untuk Kesalahan Tipe I dan Tipe II!',
    back: 'Tipe I: Alarm berbunyi kencang padahal TIDAK ada api (False Alarm).\nTipe II: Alarm diam hening padahal ADA api membakar gedung (Missed Detection).',
    tags: ['Analogi Alarm', 'Tipe Error']
  },
  {
    id: 'fc-m3-24',
    moduleSlug: 'modul-3',
    topicId: 'm3-tipe-error',
    category: 'rumus',
    front: 'Jika H0 sebenarnya benar, berapa probabilitas keputusan yang benar?',
    back: '1 - α (Tingkat Kepercayaan).',
    tags: ['1 - Alpha', 'Keputusan Benar']
  },
  {
    id: 'fc-m3-25',
    moduleSlug: 'modul-3',
    topicId: 'm3-tipe-error',
    category: 'rumus',
    front: 'Jika H0 sebenarnya salah, berapa probabilitas keputusan menolak H0 dengan benar?',
    back: '1 - β (Power of the Test / Kekuatan Uji).',
    tags: ['1 - Beta', 'Power of Test']
  },

  // MODUL 4 (25 cards)
  {
    id: 'fc-m4-01',
    moduleSlug: 'modul-4',
    topicId: 'm4-empat-tipe-proyek',
    category: 'konsep',
    front: 'Sebutkan 4 tipe proyek penelitian menurut modul!',
    back: '1. Descriptive projects (state-of-the-art)\n2. Theory oriented (memperluas teori tanpa uji langsung)\n3. Applied (membangun sistem pembuktian eksperimen)\n4. Comparison of theory and practice (membandingkan teori dengan kenyataan lapangan)',
    tags: ['4 Tipe Proyek', 'Modul 4']
  },
  {
    id: 'fc-m4-02',
    moduleSlug: 'modul-4',
    topicId: 'm4-empat-tipe-proyek',
    category: 'perbedaan',
    front: 'Apakah descriptive project sama dengan survey research?',
    back: 'TIDAK! Descriptive project adalah klasifikasi orientasi proyek, sedangkan survey research adalah desain/metode penelitian.',
    tags: ['Descriptive vs Survey', 'Klasifikasi']
  },
  {
    id: 'fc-m4-03',
    moduleSlug: 'modul-4',
    topicId: 'm4-pedoman-desain',
    category: 'definisi',
    front: 'Apa definisi desain penelitian menurut modul?',
    back: 'Pedoman proses penelitian dalam penentuan instrumen, sampel, pengumpulan, dan analisis data (bagian dari metodologi).',
    tags: ['Desain Penelitian', 'Definisi']
  },
  {
    id: 'fc-m4-04',
    moduleSlug: 'modul-4',
    topicId: 'm4-pedoman-desain',
    category: 'konsep',
    front: 'Apakah nama software tools (seperti SPSS atau Python) dapat menggantikan desain penelitian?',
    back: 'TIDAK! Nama tools tidak menggantikan desain penelitian. Keduanya menjawab klasifikasi yang berbeda.',
    tags: ['Tools vs Desain', 'Peringatan']
  },
  {
    id: 'fc-m4-05',
    moduleSlug: 'modul-4',
    topicId: 'm4-sepuluh-desain-riset',
    category: 'definisi',
    front: 'Apa ciri khas Experimental Research?',
    back: 'Menentukan sebab-akibat; membandingkan kelompok kontrol vs perlakuan; ada manipulasi treatment dan pengendalian variabel.',
    tags: ['Eksperimen', 'Ciri']
  },
  {
    id: 'fc-m4-06',
    moduleSlug: 'modul-4',
    topicId: 'm4-sepuluh-desain-riset',
    category: 'definisi',
    front: 'Bagaimana modul mendefinisikan Quasi Experimental Research?',
    back: 'Eksperimen tanpa kontrol, diukur sesudah treatment, biasanya data kualitatif, disebut "one-shot posttest with no control group".',
    tags: ['Quasi Experimental', 'Versi Modul']
  },
  {
    id: 'fc-m4-07',
    moduleSlug: 'modul-4',
    topicId: 'm4-sepuluh-desain-riset',
    category: 'definisi',
    front: 'Apa ciri khas Causal-Comparative Research?',
    back: 'Mengkaji efek yang sudah terjadi lebih dulu lalu mencari kemungkinan penyebabnya; variabel independen TIDAK dimanipulasi peneliti.',
    tags: ['Causal-Comparative', 'Definisi']
  },
  {
    id: 'fc-m4-08',
    moduleSlug: 'modul-4',
    topicId: 'm4-sepuluh-desain-riset',
    category: 'perbedaan',
    front: 'Apa pembeda utama antara Experimental dan Causal-Comparative?',
    back: 'Ada atau tidaknya MANIPULASI treatment oleh peneliti (Eksperimen ada manipulasi; Causal-Comparative tidak ada).',
    tags: ['Pembeda Kausal', 'Manipulasi']
  },
  {
    id: 'fc-m4-09',
    moduleSlug: 'modul-4',
    topicId: 'm4-sepuluh-desain-riset',
    category: 'konsep',
    front: 'Apakah korelasi yang tinggi membuktikan adanya hubungan sebab-akibat?',
    back: 'TIDAK! Korelasi tidak menjamin kausalitas. Dua variabel bisa berkorelasi karena dipengaruhi faktor ketiga.',
    tags: ['Korelasi vs Kausal', 'Jebakan']
  },
  {
    id: 'fc-m4-10',
    moduleSlug: 'modul-4',
    topicId: 'm4-sepuluh-desain-riset',
    category: 'konsep',
    front: 'Apa kekuatan dan kelemahan Survey Research menurut modul?',
    back: 'Kekuatan: memperoleh data langsung dari responden.\nKelemahan: jawaban responden belum tentu sesuai isi hati atau pengalaman yang stabil.',
    tags: ['Survey Research', 'Kekuatan Kelemahan']
  },
  {
    id: 'fc-m4-11',
    moduleSlug: 'modul-4',
    topicId: 'm4-sepuluh-desain-riset',
    category: 'perbedaan',
    front: 'Apa pembeda Action Research vs Ethnographic Research?',
    back: 'Action Research menekankan TINDAKAN sosial pemecahan masalah bersama mitra; Ethnographic menekankan pengamatan BUDAYA komunitas.',
    tags: ['Action vs Etnografi', 'Pembeda']
  },
  {
    id: 'fc-m4-12',
    moduleSlug: 'modul-4',
    topicId: 'm4-sepuluh-desain-riset',
    category: 'konsep',
    front: 'Apa syarat data pada Case Studies menurut slide Modul 4?',
    back: 'Memerlukan data primer, dokumen tervalidasi, dan konfirmasi ke primary source (bukan sekadar studi dengan sampel sedikit).',
    tags: ['Case Study', 'Syarat Data']
  },
  {
    id: 'fc-m4-13',
    moduleSlug: 'modul-4',
    topicId: 'm4-sepuluh-desain-riset',
    category: 'definisi',
    front: 'Apa tujuan dari Historical Research menurut modul?',
    back: 'Memahami masa lampau, situasi kini, dan perkembangannya lewat mengumpulkan, mengevaluasi, memverifikasi, dan mensintesis bukti lampau.',
    tags: ['Historical Research', 'Tujuan']
  },
  {
    id: 'fc-m4-14',
    moduleSlug: 'modul-4',
    topicId: 'm4-sepuluh-desain-riset',
    category: 'konsep',
    front: 'Apakah mengurutkan tanggal kejadian sudah cukup untuk Historical Research?',
    back: 'Belum cukup! Mengurutkan tanggal saja belum memenuhi evaluasi dan verifikasi bukti historis yang sahih.',
    tags: ['Historical Research', 'Peringatan']
  },
  {
    id: 'fc-m4-15',
    moduleSlug: 'modul-4',
    topicId: 'm4-sepuluh-desain-riset',
    category: 'konsep',
    front: 'Sebutkan 10 desain/jenis penelitian yang disajikan modul!',
    back: '1. Experimental\n2. Quasi experimental\n3. Causal-comparative\n4. Correlational\n5. Survey\n6. Action research\n7. Historical\n8. Ethnographic\n9. Case studies\n10. Evaluasi komparatif sebab-akibat',
    tags: ['10 Desain', 'Daftar Lengkap']
  },
  {
    id: 'fc-m4-16',
    moduleSlug: 'modul-4',
    topicId: 'm4-pohon-keputusan',
    category: 'konsep',
    front: 'Jika Anda ingin menguji efek sistem baru tetapi tanpa kelompok kontrol pembanding, desain apa yang cocok menurut modul?',
    back: 'Quasi Experimental (versi modul: one-shot posttest with no control group).',
    tags: ['Pohon Keputusan', 'Quasi']
  },
  {
    id: 'fc-m4-17',
    moduleSlug: 'modul-4',
    topicId: 'm4-pohon-keputusan',
    category: 'konsep',
    front: 'Jika peristiwa sudah terjadi dan Anda hanya meneliti data nilai mahasiswa lampau untuk mencari penyebabnya, gunakan desain:',
    back: 'Causal-Comparative Research.',
    tags: ['Pohon Keputusan', 'Causal Comparative']
  },
  {
    id: 'fc-m4-18',
    moduleSlug: 'modul-4',
    topicId: 'm4-pohon-keputusan',
    category: 'konsep',
    front: 'Jika peneliti terjun langsung memperbaiki alur tiket bersama staf IT sekolah, desain apa yang digunakan?',
    back: 'Action Research.',
    tags: ['Pohon Keputusan', 'Action Research']
  },
  {
    id: 'fc-m4-19',
    moduleSlug: 'modul-4',
    topicId: 'm4-pohon-keputusan',
    category: 'konsep',
    front: 'Jika peneliti menyebarkan angket ke 200 mahasiswa untuk melihat tren kepuasan, desain apa yang digunakan?',
    back: 'Survey Research.',
    tags: ['Pohon Keputusan', 'Survey']
  },
  {
    id: 'fc-m4-20',
    moduleSlug: 'modul-4',
    topicId: 'm4-empat-tipe-proyek',
    category: 'konsep',
    front: 'Bolehkah satu proyek skripsi menggabungkan beberapa tipe proyek?',
    back: 'Boleh! Modul menegaskan proyek penelitian dapat menggabungkan beberapa tipe (misal Applied + Comparison theory and practice).',
    tags: ['Kombinasi Tipe', 'Proyek']
  },
  {
    id: 'fc-m4-21',
    moduleSlug: 'modul-4',
    topicId: 'm4-sepuluh-desain-riset',
    category: 'konsep',
    front: 'Apakah kuesioner dapat digunakan sebagai bukti otomatis adanya sebab-akibat?',
    back: 'TIDAK! Kuesioner mengukur persepsi atau data amatan deskriptif, bukan bukti otomatis sebab-akibat terkendali.',
    tags: ['Kuesioner vs Sebab Akibat', 'Jebakan']
  },
  {
    id: 'fc-m4-22',
    moduleSlug: 'modul-4',
    topicId: 'm4-empat-tipe-proyek',
    category: 'konsep',
    front: 'Apa syarat utama dari proyek riset tipe Theory Oriented?',
    back: 'Model konseptual yang diperluas atau dibandingkan harus dapat diterapkan pada lingkungan uji coba, meskipun tidak diuji langsung dalam proyek itu.',
    tags: ['Theory Oriented', 'Syarat']
  },
  {
    id: 'fc-m4-23',
    moduleSlug: 'modul-4',
    topicId: 'm4-sepuluh-desain-riset',
    category: 'konsep',
    front: 'Analisis statistik apa yang umumnya digunakan pada penelitian Correlational?',
    back: 'Korelasi (Pearson/Spearman) dan Analisis Regresi.',
    tags: ['Correlational', 'Statistik']
  },
  {
    id: 'fc-m4-24',
    moduleSlug: 'modul-4',
    topicId: 'm4-sepuluh-desain-riset',
    category: 'konsep',
    front: 'Apakah berada lama di suatu organisasi sudah cukup untuk mengklaim riset Etnografi?',
    back: 'Belum cukup! Peneliti harus secara spesifik mencari dan menganalisis fokus BUDAYA kelompok tersebut.',
    tags: ['Etnografi', 'Fokus Budaya']
  },
  {
    id: 'fc-m4-25',
    moduleSlug: 'modul-4',
    topicId: 'm4-pedoman-desain',
    category: 'konsep',
    front: 'Sebutkan 4 penentuan pokok yang diatur dalam desain penelitian!',
    back: '1. Penentuan instrumen\n2. Penentuan sampel\n3. Pengumpulan data\n4. Analisis data',
    tags: ['4 Pokok Desain', 'Hafalan']
  },

  // MODUL 5 (25 cards)
  {
    id: 'fc-m5-01',
    moduleSlug: 'modul-5',
    topicId: 'm5-literature-review',
    category: 'definisi',
    front: 'Apa definisi Literature Review menurut Modul 5?',
    back: 'Uraian teori, temuan, dan bahan penelitian acuan yang menjadi landasan kegiatan riset serta kerangka pemikiran untuk masalah yang dirumuskan.',
    tags: ['Literature Review', 'Definisi']
  },
  {
    id: 'fc-m5-02',
    moduleSlug: 'modul-5',
    topicId: 'm5-literature-review',
    category: 'konsep',
    front: 'Apa kritik modul terhadap penulisan tinjauan pustaka satu artikel per paragraf?',
    back: 'Menumpuk ringkasan satu artikel per paragraf belum menunjukkan sintesis ilmiah yang menghubungkan dan membandingkan temuan.',
    tags: ['Sintesis vs Ringkasan', 'Jebakan Bab 2']
  },
  {
    id: 'fc-m5-03',
    moduleSlug: 'modul-5',
    topicId: 'm5-kualitas-literatur',
    category: 'konsep',
    front: 'Sebutkan 3 kriteria kualitas acuan literatur menurut modul!',
    back: '1. Relevan (berhubungan dengan masalah & tujuan)\n2. Mutakhir (acuan 3 tahun terakhir menurut modul)\n3. Memadai (cukup membangun landasan dan argumen)',
    tags: ['Kualitas Literatur', '3 Kriteria']
  },
  {
    id: 'fc-m5-04',
    moduleSlug: 'modul-5',
    topicId: 'm5-kualitas-literatur',
    category: 'urutan',
    front: 'Sebutkan 4 pekerjaan dalam melakukan review literatur!',
    back: 'Analisis, Sintesis, Ringkas, dan Bandingkan (A-S-R-B).',
    tags: ['4 Pekerjaan Review', 'Hafalan']
  },
  {
    id: 'fc-m5-05',
    moduleSlug: 'modul-5',
    topicId: 'm5-tiga-macam-review',
    category: 'konsep',
    front: 'Sebutkan 3 macam literature review menurut modul!',
    back: '1. Narrative literature review\n2. Qualitative systematic literature review\n3. Quantitative systematic literature review (Meta-analysis)',
    tags: ['3 Macam Review', 'Modul 5']
  },
  {
    id: 'fc-m5-06',
    moduleSlug: 'modul-5',
    topicId: 'm5-tiga-macam-review',
    category: 'definisi',
    front: 'Apa itu Meta-analysis dalam klasifikasi modul?',
    back: 'Quantitative systematic literature review yang menggabungkan hasil data statistik dari berbagai penelitian independen.',
    tags: ['Meta-Analysis', 'Definisi']
  },
  {
    id: 'fc-m5-07',
    moduleSlug: 'modul-5',
    topicId: 'm5-empat-langkah-review',
    category: 'urutan',
    front: 'Sebutkan 4 langkah literature review (hafalan berurutan)!',
    back: '1. Formulasi permasalahan (pilih topik sesuai isu & interest)\n2. Cari literatur (temukan sumber relevan)\n3. Evaluasi data (periksa kontribusi & sumber tepat)\n4. Analisis dan interpretasi (diskusikan, temukan relasi, ringkas)',
    tags: ['4 Langkah Review', 'Hafalan Urut']
  },
  {
    id: 'fc-m5-08',
    moduleSlug: 'modul-5',
    topicId: 'm5-cycles-literature',
    category: 'urutan',
    front: 'Sebutkan alur siklus Cycles of Scientific Literature!',
    back: 'Pemilihan topik → Riset → Komunikasi informal → Prosiding → Jurnal → Edited volumes → Textbooks → Reference sources → Kembali ke topik.',
    tags: ['Cycles of Literature', 'Alur']
  },
  {
    id: 'fc-m5-09',
    moduleSlug: 'modul-5',
    topicId: 'm5-cycles-literature',
    category: 'konsep',
    front: 'Apakah diagram siklus literatur memerintahkan mahasiswa menerbitkan semua jenis dokumen?',
    back: 'TIDAK! Diagram menunjukkan siklus pengetahuan di dunia ilmiah secara umum, bukan perintah wajib untuk setiap riset.',
    tags: ['Catatan Siklus', 'Modul 5']
  },
  {
    id: 'fc-m5-10',
    moduleSlug: 'modul-5',
    topicId: 'm5-referensi-tepat',
    category: 'definisi',
    front: 'Apa definisi referensi menurut modul?',
    back: 'Deskripsi yang menjelaskan suatu sumber informasi secara lengkap.',
    tags: ['Referensi', 'Definisi']
  },
  {
    id: 'fc-m5-11',
    moduleSlug: 'modul-5',
    topicId: 'm5-referensi-tepat',
    category: 'konsep',
    front: 'Sebutkan 5 manfaat rujukan yang benar menurut modul!',
    back: '1. Perluasan pengetahuan\n2. Penegasan originalitas\n3. Penghargaan karya orang lain\n4. Dukungan argumen yang kuat\n5. Penguasaan area penelitian',
    tags: ['Manfaat Referensi', 'Hafalan']
  },
  {
    id: 'fc-m5-12',
    moduleSlug: 'modul-5',
    topicId: 'm5-referensi-tepat',
    category: 'konsep',
    front: 'Mengapa sumber tertulis lebih diutamakan daripada sumber lisan (oral)?',
    back: 'Karena tulisan lebih mudah ditelusuri pembaca dan umumnya telah melalui proses review resmi.',
    tags: ['Tertulis vs Oral', 'Rujukan']
  },
  {
    id: 'fc-m5-13',
    moduleSlug: 'modul-5',
    topicId: 'm5-jenis-dokumen',
    category: 'konsep',
    front: 'Sebutkan 8 jenis dokumen referensi menurut modul!',
    back: '1. Jurnal ilmiah\n2. Prosiding konferensi/workshop\n3. Tesis & disertasi\n4. Buku teks\n5. Majalah ilmiah\n6. Laman web\n7. Koran\n8. Dokumen lain (manual, blueprint, commercial info)',
    tags: ['8 Jenis Dokumen', 'Modul 5']
  },
  {
    id: 'fc-m5-14',
    moduleSlug: 'modul-5',
    topicId: 'm5-sitasi-daftar-referensi',
    category: 'definisi',
    front: 'Apa definisi sitasi menurut modul?',
    back: 'Penggunaan referensi di dalam isi tulisan untuk membedakan pekerjaan/pemikiran penulis dan orang lain.',
    tags: ['Sitasi', 'Definisi']
  },
  {
    id: 'fc-m5-15',
    moduleSlug: 'modul-5',
    topicId: 'm5-sitasi-daftar-referensi',
    category: 'konsep',
    front: 'Jika kalimat diparafrasa dengan kata-kata sendiri, apakah sitasi tetap wajib dicantumkan?',
    back: 'YA, TETAP WAJIB! Kaidah modul: "Mengubah kata-kata tidak mengubah asal gagasannya."',
    tags: ['Parafrasa', 'Etika Sitasi']
  },
  {
    id: 'fc-m5-16',
    moduleSlug: 'modul-5',
    topicId: 'm5-sitasi-daftar-referensi',
    category: 'perbedaan',
    front: 'Apa pasangan istilah bentuk penyampaian kutipan dalam modul?',
    back: 'Kutipan langsung (direct quotation) vs Gagasan yang disusun ulang (parafrasa).',
    tags: ['Bentuk Kutipan', 'Pasangan']
  },
  {
    id: 'fc-m5-17',
    moduleSlug: 'modul-5',
    topicId: 'm5-pola-sitasi',
    category: 'konsep',
    front: 'Sebutkan 5 posisi peletakan sitasi yang ditunjukkan modul!',
    back: '1. Sebelum tanda baca (titik/koma)\n2. Di tempat logis dalam kalimat\n3. Sebagai bagian struktur kalimat ("Menurut A [1]...")\n4. Sebelum daftar item berbutir\n5. Mengikuti kutipan langsung',
    tags: ['Posisi Sitasi', 'Format']
  },
  {
    id: 'fc-m5-18',
    moduleSlug: 'modul-5',
    topicId: 'm5-pola-sitasi',
    category: 'konsep',
    front: 'Peringatan apa yang dimuat di Slide 14 Modul 5 terkait peletakan sitasi?',
    back: 'Hindari sitasi pada akhir kalimat suatu paragraf! Cakupan sumber dalam teks harus selalu jelas bagi pembaca.',
    tags: ['Slide 14', 'Peringatan Sitasi']
  },
  {
    id: 'fc-m5-19',
    moduleSlug: 'modul-5',
    topicId: 'm5-gaya-software',
    category: 'konsep',
    front: 'Sebutkan 4 gaya rujukan yang dicantumkan modul!',
    back: 'IEEE, Harvard, APA, dan Vancouver (serta Vancouver/AMA).',
    tags: ['Gaya Rujukan', 'Modul 5']
  },
  {
    id: 'fc-m5-20',
    moduleSlug: 'modul-5',
    topicId: 'm5-gaya-software',
    category: 'konsep',
    front: 'Sebutkan 2 software manajemen referensi dan penulisan yang dicantumkan modul!',
    back: 'Mendeley dan Overleaf LaTeX.',
    tags: ['Software', 'Mendeley Overleaf']
  },
  {
    id: 'fc-m5-21',
    moduleSlug: 'modul-5',
    topicId: 'm5-gaya-software',
    category: 'perbedaan',
    front: 'Jelaskan perbedaan Literature Search vs Literature Review!',
    back: 'Literature Search = pencarian sumber berkas. Literature Review = pengolahan dan sintesis isi sumber untuk landasan penelitian.',
    tags: ['Search vs Review', 'Pasangan']
  },
  {
    id: 'fc-m5-22',
    moduleSlug: 'modul-5',
    topicId: 'm5-gaya-software',
    category: 'perbedaan',
    front: 'Jelaskan perbedaan Ringkasan vs Sintesis!',
    back: 'Ringkasan = memadatkan isi satu per satu. Sintesis = menghubungkan dan membandingkan temuan antar-penelitian.',
    tags: ['Ringkasan vs Sintesis', 'Pasangan']
  },
  {
    id: 'fc-m5-23',
    moduleSlug: 'modul-5',
    topicId: 'm5-gaya-software',
    category: 'perbedaan',
    front: 'Jelaskan perbedaan Referensi vs Sitasi!',
    back: 'Referensi = deskripsi lengkap sumber di daftar akhir. Sitasi = penggunaan penanda rujukan di badan teks.',
    tags: ['Referensi vs Sitasi', 'Pasangan']
  },
  {
    id: 'fc-m5-24',
    moduleSlug: 'modul-5',
    topicId: 'm5-gaya-software',
    category: 'perbedaan',
    front: 'Jelaskan perbedaan Mutakhir vs Relevan!',
    back: 'Mutakhir = keterkinian tahun terbit (acuan 3 tahun). Relevan = keterhubungan langsung dengan masalah riset.',
    tags: ['Mutakhir vs Relevan', 'Pasangan']
  },
  {
    id: 'fc-m5-25',
    moduleSlug: 'modul-5',
    topicId: 'm5-literature-review',
    category: 'konsep',
    front: 'Mengapa studi literatur yang baik membantu menghindari duplikasi penelitian?',
    back: 'Karena dengan mengetahui apa yang sudah dilakukan orang lain, peneliti tidak menghabiskan waktu meneliti roda yang sudah ditemukan.',
    tags: ['Duplikasi', 'Tujuan Review']
  },

  // MODUL 6 (30 cards)
  {
    id: 'fc-m6-01',
    moduleSlug: 'modul-6',
    topicId: 'm6-populasi-sampel',
    category: 'definisi',
    front: 'Apa definisi Populasi dan Sampel menurut Modul 6?',
    back: 'Populasi = wilayah generalisasi objek/subjek berkarakteristik tertentu.\nSampel = bagian dari jumlah dan karakteristik populasi yang harus representatif.',
    tags: ['Populasi', 'Sampel']
  },
  {
    id: 'fc-m6-02',
    moduleSlug: 'modul-6',
    topicId: 'm6-populasi-sampel',
    category: 'konsep',
    front: 'Apakah responden yang mudah dijangkau otomatis mewakili populasi?',
    back: 'TIDAK otomatis! Modul memperingatkan responden yang mudah dijangkau belum tentu representatif mewakili variasi populasi.',
    tags: ['Responden Mudah', 'Jebakan']
  },
  {
    id: 'fc-m6-03',
    moduleSlug: 'modul-6',
    topicId: 'm6-probability-nonprobability',
    category: 'perbedaan',
    front: 'Apa definisi Probability vs Nonprobability Sampling?',
    back: 'Probability = memberi peluang yang sama bagi setiap anggota populasi.\nNonprobability = tidak memberi kesempatan yang sama.',
    tags: ['Probability vs Nonprob', 'Definisi']
  },
  {
    id: 'fc-m6-04',
    moduleSlug: 'modul-6',
    topicId: 'm6-probability-nonprobability',
    category: 'konsep',
    front: 'Dalam klasifikasi diagram modul RTI, Systematic Sampling masuk ke kelompok mana?',
    back: 'Masuk ke NONPROBABILITY SAMPLING (catatan khusus modul RTI yang wajib diingat!).',
    tags: ['Systematic Sampling', 'Nonprobability']
  },
  {
    id: 'fc-m6-05',
    moduleSlug: 'modul-6',
    topicId: 'm6-probability-nonprobability',
    category: 'konsep',
    front: 'Sebutkan 4 teknik Probability Sampling menurut modul!',
    back: '1. Simple random\n2. Proportionate stratified random\n3. Disproportionate stratified random\n4. Area / cluster sampling',
    tags: ['4 Teknik Probability', 'Hafalan']
  },
  {
    id: 'fc-m6-06',
    moduleSlug: 'modul-6',
    topicId: 'm6-probability-nonprobability',
    category: 'konsep',
    front: 'Sebutkan 6 teknik Nonprobability Sampling menurut modul!',
    back: '1. Systematic\n2. Quota\n3. Incidental\n4. Purposive\n5. Saturated / Jenuh / Sensus\n6. Snowball',
    tags: ['6 Teknik Nonprobability', 'Hafalan']
  },
  {
    id: 'fc-m6-07',
    moduleSlug: 'modul-6',
    topicId: 'm6-sepuluh-teknik-sampling',
    category: 'definisi',
    front: 'Kapan teknik Simple Random Sampling tepat digunakan?',
    back: 'Ketika populasi dianggap HOMOGEN, dipilih secara acak murni tanpa memperhatikan strata tingkatan.',
    tags: ['Simple Random', 'Homogen']
  },
  {
    id: 'fc-m6-08',
    moduleSlug: 'modul-6',
    topicId: 'm6-sepuluh-teknik-sampling',
    category: 'konsep',
    front: 'Apa jebakan pemahaman pada Proportionate Stratified Random Sampling?',
    back: 'Proporsional BUKAN berarti mengambil jumlah yang sama persis tiap strata, melainkan mengambil persentase perbandingan yang sebanding!',
    tags: ['Proportionate Stratified', 'Jebakan']
  },
  {
    id: 'fc-m6-09',
    moduleSlug: 'modul-6',
    topicId: 'm6-sepuluh-teknik-sampling',
    category: 'konsep',
    front: 'Kapan Disproportionate Stratified Sampling digunakan?',
    back: 'Bila populasi berstrata sangat timpang; kelompok minoritas yang sangat kecil diambil seluruhnya (misal 3 S3, 4 S2, 250 S1).',
    tags: ['Disproportionate Stratified', 'Contoh Slide']
  },
  {
    id: 'fc-m6-10',
    moduleSlug: 'modul-6',
    topicId: 'm6-sepuluh-teknik-sampling',
    category: 'definisi',
    front: 'Apa itu Saturated / Jenuh / Sensus Sampling?',
    back: 'Semua anggota populasi dijadikan sampel; digunakan bila populasi relatif kecil (< 30) atau ingin kesalahan generalisasi sekecil mungkin.',
    tags: ['Sampling Jenuh', 'Sensus']
  },
  {
    id: 'fc-m6-11',
    moduleSlug: 'modul-6',
    topicId: 'm6-sepuluh-teknik-sampling',
    category: 'definisi',
    front: 'Apa itu Snowball Sampling?',
    back: 'Sampel mula-mula kecil lalu membesar secara bertahap melalui rekomendasi berantai dari informan sebelumnya.',
    tags: ['Snowball', 'Definisi']
  },
  {
    id: 'fc-m6-12',
    moduleSlug: 'modul-6',
    topicId: 'm6-ukuran-sampel',
    category: 'konsep',
    front: 'Bagaimana hubungan ukuran sampel dengan tingkat kesalahan yang diizinkan?',
    back: 'Berbanding terbalik: Kesalahan yang diizinkan makin besar memerlukan sampel makin kecil (dan sebaliknya).',
    tags: ['Ukuran Sampel', 'Taraf Kesalahan']
  },
  {
    id: 'fc-m6-13',
    moduleSlug: 'modul-6',
    topicId: 'm6-ukuran-sampel',
    category: 'rumus',
    front: 'Berapakah ukuran sampel contoh Harry King pada N=200, kepercayaan 95%, kesalahan 5%?',
    back: '0,58 × 200 × 1,195 = 138,62 → dibulatkan menjadi 139 orang.',
    tags: ['Harry King', 'Angka Slide 139']
  },
  {
    id: 'fc-m6-14',
    moduleSlug: 'modul-6',
    topicId: 'm6-ukuran-sampel',
    category: 'konsep',
    front: 'Berapa nilai sampel s pada tabel Isaac & Michael untuk N=200 pada 1%, 5%, dan 10%?',
    back: 'Pada 1% s = 154;\nPada 5% s = 127;\nPada 10% s = 115.',
    tags: ['Isaac & Michael', 'Angka Slide']
  },
  {
    id: 'fc-m6-15',
    moduleSlug: 'modul-6',
    topicId: 'm6-ukuran-sampel',
    category: 'konsep',
    front: 'Sebutkan 4 saran Roscoe untuk ukuran sampel!',
    back: '1. Layak: 30 - 500 responden\n2. Tiap kategori: minimal 30\n3. Analisis multivariat: minimal 10 × jumlah variabel (5 var → 50)\n4. Eksperimen sederhana: 10 - 20 per kelompok',
    tags: ['Saran Roscoe', '4 Kaidah']
  },
  {
    id: 'fc-m6-16',
    moduleSlug: 'modul-6',
    topicId: 'm6-skala-pengukuran',
    category: 'urutan',
    front: 'Sebutkan 4 tingkatan skala pengukuran data (NOIR)!',
    back: 'Nominal (kategori) → Ordinal (urutan) → Interval (jarak setara tanpa nol absolut) → Rasio (jarak setara + nol absolut).',
    tags: ['NOIR', 'Skala Pengukuran']
  },
  {
    id: 'fc-m6-17',
    moduleSlug: 'modul-6',
    topicId: 'm6-skala-pengukuran',
    category: 'konsep',
    front: 'Mengapa kode angka 1/2/3 pada data jenis kelamin bukan skala rasio?',
    back: 'Karena kode 1/2/3 hanyalah label kategori nominal, tidak memiliki makna jarak atau urutan matematis.',
    tags: ['Kode Angka', 'Nominal']
  },
  {
    id: 'fc-m6-18',
    moduleSlug: 'modul-6',
    topicId: 'm6-skala-likert',
    category: 'definisi',
    front: 'Apa fungsi Skala Likert dan berapa jumlah pilihan yang umum menurut modul?',
    back: 'Mengukur sikap, pendapat, dan persepsi terhadap fenomena sosial; jawaban bergradasi sangat positif ke negatif dengan 3 sampai 7 pilihan.',
    tags: ['Likert', 'Definisi']
  },
  {
    id: 'fc-m6-19',
    moduleSlug: 'modul-6',
    topicId: 'm6-skala-likert',
    category: 'rumus',
    front: 'Hitung total skor Likert modul: 100 orang: 25 SS(5), 40 ST(4), 5 RG(3), 20 TS(2), 10 STS(1)!',
    back: 'Total = 25×5 + 40×4 + 5×3 + 20×2 + 10×1 = 125 + 160 + 15 + 40 + 10 = 350 (Maks 500, Min 100, 70%).',
    tags: ['Hitung Likert', 'Angka Slide 350']
  },
  {
    id: 'fc-m6-20',
    moduleSlug: 'modul-6',
    topicId: 'm6-skala-lain',
    category: 'perbedaan',
    front: 'Apa perbedaan Skala Guttman dan Semantic Differential?',
    back: 'Guttman = 2 pilihan tegas dikotomi (Ya/Tidak).\nSemantic Differential (Osgood) = garis kontinum di antara dua kata sifat berlawanan kutub.',
    tags: ['Guttman vs Semantic', 'Perbedaan']
  },
  {
    id: 'fc-m6-21',
    moduleSlug: 'modul-6',
    topicId: 'm6-skala-lain',
    category: 'definisi',
    front: 'Apa ciri khas Rating Scale menurut modul?',
    back: 'Responden langsung memilih jawaban kuantitatif (angka skor), bukan mula-mula memilih kata kualitatif.',
    tags: ['Rating Scale', 'Ciri']
  },
  {
    id: 'fc-m6-22',
    moduleSlug: 'modul-6',
    topicId: 'm6-wawancara',
    category: 'urutan',
    front: 'Sebutkan 10 perhatian wawancara menurut modul (hafalan)!',
    back: 'Selecting interviewees, preparation, questionnaires, agenda, structured replies, note taking, confidentiality, logistics, characterization, ethical issues.',
    tags: ['10 Perhatian Wawancara', 'Hafalan']
  },
  {
    id: 'fc-m6-23',
    moduleSlug: 'modul-6',
    topicId: 'm6-observasi-hawthorne',
    category: 'definisi',
    front: 'Apa itu Hawthorne Effect dalam observasi?',
    back: 'Perubahan perilaku subjek penelitian (menjadi lebih rajin/teliti) karena menyadari bahwa dirinya sedang diamati oleh pengamat.',
    tags: ['Hawthorne Effect', 'Observasi']
  },
  {
    id: 'fc-m6-24',
    moduleSlug: 'modul-6',
    topicId: 'm6-pertanyaan-efektif',
    category: 'konsep',
    front: 'Di bagian manakah data pribadi/demografis sebaiknya diletakkan dalam kuesioner menurut modul?',
    back: 'Di bagian AKHIR kuesioner.',
    tags: ['Checklist Kuesioner', 'Data Pribadi']
  },
  {
    id: 'fc-m6-25',
    moduleSlug: 'modul-6',
    topicId: 'm6-proses-survei',
    category: 'konsep',
    front: 'Berapa saran tenggat waktu pengembalian kuesioner menurut modul?',
    back: '7 sampai 10 hari dengan pengingat (reminder) beberapa hari sebelumnya.',
    tags: ['Tenggat Survei', '7-10 Hari']
  },
  {
    id: 'fc-m6-26',
    moduleSlug: 'modul-6',
    topicId: 'm6-reliabilitas-validitas',
    category: 'perbedaan',
    front: 'Apa perbedaan definisi Reliability dan Validity?',
    back: 'Reliability = pengukuran berulang atas sifat sama memberi hasil sama (konsistensi).\nValidity = pertanyaan/alat benar-benar mengukur apa yang semestinya diukur (ketepatan).',
    tags: ['Reliability vs Validity', 'Pembeda']
  },
  {
    id: 'fc-m6-27',
    moduleSlug: 'modul-6',
    topicId: 'm6-reliabilitas-validitas',
    category: 'konsep',
    front: 'Sebutkan 5 dimensi kualitas FURPS+ Bob Grady!',
    back: 'Functionality, Usability, Reliability, Performance, Support.',
    tags: ['FURPS+', 'Bob Grady']
  },
  {
    id: 'fc-m6-28',
    moduleSlug: 'modul-6',
    topicId: 'm6-rumus-reliabilitas',
    category: 'rumus',
    front: 'Tulis rumus Spearman-Brown dan hitung jika korelasi belahan r = 0,60!',
    back: 'ρ = 2r / (1 + r)\nρ = (2 × 0,60) / (1 + 0,60) = 1,20 / 1,60 = 0,75.',
    tags: ['Spearman-Brown', 'Angka 0.75']
  },
  {
    id: 'fc-m6-29',
    moduleSlug: 'modul-6',
    topicId: 'm6-rumus-reliabilitas',
    category: 'rumus',
    front: 'Kapan KR-20 digunakan dan hitung jika k=5, Σpq=1, σ²=2!',
    back: 'Digunakan untuk item dikotomi (benar=1, salah=0).\nρKR20 = [k/(k-1)] × [1 - Σpq/σ²] = (5/4) × (1 - 1/2) = 1,25 × 0,5 = 0,625.',
    tags: ['KR-20', 'Angka 0.625']
  },
  {
    id: 'fc-m6-30',
    moduleSlug: 'modul-6',
    topicId: 'm6-rumus-reliabilitas',
    category: 'rumus',
    front: 'Kapan Cronbach Alpha digunakan dan hitung jika k=4, Σvar(j)=2, var total=5!',
    back: 'Digunakan untuk skala Likert / nilai parsial.\nα = [k/(k-1)] × [1 - Σvar(j)/var(total)] = (4/3) × (1 - 2/5) = 1,333 × 0,6 = 0,80.',
    tags: ['Cronbach Alpha', 'Angka 0.80']
  },

  // MODUL 7 (25 cards)
  {
    id: 'fc-m7-01',
    moduleSlug: 'modul-7',
    topicId: 'm7-ieee-style',
    category: 'konsep',
    front: 'Bagaimana penomoran rujukan dalam IEEE Style?',
    back: 'Angka dalam kurung siku [1] diurutkan berdasarkan urutan pertama kali disitasi di teks (BUKAN urutan alfabet nama penulis!).',
    tags: ['IEEE Style', 'Penomoran']
  },
  {
    id: 'fc-m7-02',
    moduleSlug: 'modul-7',
    topicId: 'm7-ieee-style',
    category: 'konsep',
    front: 'Jika sumber yang sama dikutip kembali di halaman selanjutnya pada IEEE, nomornya berubah atau tetap?',
    back: 'TETAP bernomor sama! Sumber yang sama tetap menggunakan nomor aslinya.',
    tags: ['IEEE Style', 'Sumber Sama']
  },
  {
    id: 'fc-m7-03',
    moduleSlug: 'modul-7',
    topicId: 'm7-ieee-style',
    category: 'konsep',
    front: 'Bagaimana format nama penulis dan judul artikel pada entri daftar referensi IEEE?',
    back: 'Nama penulis: inisial nama depan lalu nama keluarga (A. Al Muhairy).\nJudul artikel diapit tanda kutip ("..."); judul jurnal/buku dicetak miring.',
    tags: ['IEEE Format', 'Penulis']
  },
  {
    id: 'fc-m7-04',
    moduleSlug: 'modul-7',
    topicId: 'm7-penyajian-analisis',
    category: 'perbedaan',
    front: 'Apa perbedaan mendasar antara Penyajian Data dan Analisis Data?',
    back: 'Penyajian = menampilkan data (tabel/grafik/kutipan). Analisis = mengevaluasi data terhadap objektif penelitian sehingga menghasilkan temuan ilmiah.',
    tags: ['Penyajian vs Analisis', 'Perbedaan']
  },
  {
    id: 'fc-m7-05',
    moduleSlug: 'modul-7',
    topicId: 'm7-literatur-nonnumeris',
    category: 'konsep',
    front: 'Apakah counter-argument wajib disajikan dalam telaah literatur sebagai data nonnumeris?',
    back: 'YA, WAJIB! Seluruh counter-argument penting harus disajikan secara transparan di samping argumen pendukung.',
    tags: ['Counter-Argument', 'Integritas']
  },
  {
    id: 'fc-m7-06',
    moduleSlug: 'modul-7',
    topicId: 'm7-penyajian-kualitatif',
    category: 'konsep',
    front: 'Sebutkan 3 model pengorganisasian penyajian data wawancara menurut modul!',
    back: '1. By company / by unit\n2. By question\n3. No grouping / grouping / summary',
    tags: ['Wawancara', 'Penyajian']
  },
  {
    id: 'fc-m7-07',
    moduleSlug: 'modul-7',
    topicId: 'm7-penyajian-kualitatif',
    category: 'konsep',
    front: 'Apa pantangan terbesar saat meringkas hasil wawancara?',
    back: 'Ringkasan dilarang menghilangkan temuan-temuan penting yang berlawanan dengan argumen peneliti!',
    tags: ['Ringkasan Wawancara', 'Pantangan']
  },
  {
    id: 'fc-m7-08',
    moduleSlug: 'modul-7',
    topicId: 'm7-implementasi-data',
    category: 'konsep',
    front: 'Mengapa source code panjang tanpa penjelasan ditolak dalam skripsi?',
    back: 'Karena source code panjang tanpa narasi penjelasan belum memberikan argumen ilmiah yang dapat diuji.',
    tags: ['Source Code', 'Argumen']
  },
  {
    id: 'fc-m7-09',
    moduleSlug: 'modul-7',
    topicId: 'm7-penyajian-numeris',
    category: 'konsep',
    front: 'Apa bahaya dari misleading graphs pada penyajian data numeris?',
    back: 'Grafik dengan interval terpotong dapat menyesatkan pembaca karena perbedaan kecil seolah-olah terlihat seperti lompatan besar.',
    tags: ['Misleading Graph', 'Numeris']
  },
  {
    id: 'fc-m7-10',
    moduleSlug: 'modul-7',
    topicId: 'm7-penyajian-numeris',
    category: 'konsep',
    front: 'Sebutkan 9 jenis visual grafik yang dicantumkan dalam modul!',
    back: 'Garis, Batang, Lingkaran/Doughnut, Histogram, Combined bar chart, Scatter diagram, 3D bar, Polar chart, Factor analysis plot.',
    tags: ['9 Jenis Visual', 'Hafalan']
  },
  {
    id: 'fc-m7-11',
    moduleSlug: 'modul-7',
    topicId: 'm7-signifikansi-evaluasi',
    category: 'konsep',
    front: 'Kapan uji signifikansi statistik wajib diterapkan?',
    back: 'Sebelum menarik kesimpulan akhir dari eksperimen atau simulasi komputer.',
    tags: ['Uji Signifikansi', 'Waktu']
  },
  {
    id: 'fc-m7-12',
    moduleSlug: 'modul-7',
    topicId: 'm7-hasil-baik',
    category: 'definisi',
    front: 'Apa itu "Good Result" (hasil yang baik) menurut Modul 7?',
    back: 'Hasil yang memungkinkan kesimpulan jelas dengan tingkat kepercayaan tinggi dari metode, data, dan analisis yang benar, terlepas dari apakah hipotesis didukung atau tidak.',
    tags: ['Good Result', 'Definisi']
  },
  {
    id: 'fc-m7-13',
    moduleSlug: 'modul-7',
    topicId: 'm7-hasil-baik',
    category: 'perbedaan',
    front: 'Apa perbedaan antara "hasil yang diinginkan" dan "hasil yang handal"?',
    back: 'Hasil yang diinginkan = harapan subjektif peneliti. Hasil yang handal = fakta empiris objektif yang benar dan dilarang disembunyikan.',
    tags: ['Desired vs Reliable', 'Integritas']
  },
  {
    id: 'fc-m7-14',
    moduleSlug: 'modul-7',
    topicId: 'm7-tujuh-pertanyaan-konteks',
    category: 'konsep',
    front: 'Apa peringatan penting modul saat merangkum hasil penelitian?',
    back: 'Jangan memperluas kesimpulan ke kondisi yang tidak diteliti (hindari overgeneralization)!',
    tags: ['Overgeneralization', 'Peringatan']
  },
  {
    id: 'fc-m7-15',
    moduleSlug: 'modul-7',
    topicId: 'm7-tujuh-pertanyaan-konteks',
    category: 'urutan',
    front: 'Sebutkan 7 pertanyaan konteks hasil penelitian dari modul (hafalan berurutan)!',
    back: '1. Untuk apa hasil dapat digunakan?\n2. Siapa yang dapat menggunakan dan bagaimana?\n3. Apakah ada kontribusi pada bidang?\n4. Area terkait apa yang memperoleh manfaat?\n5. Apakah manfaat praktis atau memperdalam teori?\n6. Bagaimana hasil dibanding hasil orang lain?\n7. Apakah temuan sejalan dengan pekerjaan terkait?',
    tags: ['7 Pertanyaan Konteks', 'Hafalan Urut']
  },
  {
    id: 'fc-m7-16',
    moduleSlug: 'modul-7',
    topicId: 'm7-evaluasi-future-work',
    category: 'konsep',
    front: 'Apa saja 4 hal yang ditelusuri dalam evaluasi proses?',
    back: 'Kelebihan, kelemahan, kesalahan, dan keputusan baik yang diyakini valid.',
    tags: ['Evaluasi Proses', '4 Hal']
  },
  {
    id: 'fc-m7-17',
    moduleSlug: 'modul-7',
    topicId: 'm7-evaluasi-future-work',
    category: 'konsep',
    front: 'Mengapa saran "agar sistem dikembangkan lebih baik" dikritik oleh modul?',
    back: 'Karena saran umum klise belum menunjukkan pekerjaan konkret; saran harus spesifik mengenai tujuan tersisa, prioritas, dan syarat nyata.',
    tags: ['Future Work', 'Saran Konkret']
  },
  {
    id: 'fc-m7-18',
    moduleSlug: 'modul-7',
    topicId: 'm7-poster-ilmiah',
    category: 'konsep',
    front: 'Sebutkan 4 kelebihan poster ilmiah menurut modul!',
    back: '1. Meeting organization (muat banyak karya)\n2. Two-way dialogue (diskusi rileks 2 arah)\n3. Networking ilmuwan muda\n4. Visual communication (pengunjung atur waktu baca)',
    tags: ['Kelebihan Poster', '4 Poin']
  },
  {
    id: 'fc-m7-19',
    moduleSlug: 'modul-7',
    topicId: 'm7-poster-ilmiah',
    category: 'konsep',
    front: 'Sebutkan 4 keterbatasan poster ilmiah menurut modul!',
    back: '1. Perlu waktu desain dan biaya cetak\n2. Tidak cocok untuk riset teoritis/matematis sarat rumus\n3. Poster fisik besar sulit dibawa & rentan rusak\n4. Sebagian orang menganggap kurang resmi dibanding presentasi oral',
    tags: ['Keterbatasan Poster', '4 Poin']
  },
  {
    id: 'fc-m7-20',
    moduleSlug: 'modul-7',
    topicId: 'm7-poster-ilmiah',
    category: 'perbedaan',
    front: 'Apa perbedaan Storyboard dan Electronic Dummy poster?',
    back: 'Storyboard = sketsa manual pensil di atas kertas.\nElectronic Dummy = rancangan digital template di software dengan teks/kotak placeholder rekaan.',
    tags: ['Storyboard vs Dummy', 'Poster']
  },
  {
    id: 'fc-m7-21',
    moduleSlug: 'modul-7',
    topicId: 'm7-poster-ilmiah',
    category: 'urutan',
    front: 'Sebutkan 3 pedoman desain utama poster ilmiah menurut modul!',
    back: '1. Let it breathe (beri ruang kosong/whitespace)\n2. Keep it lined up (jaga grid/alignment rapi)\n3. Tell the reader where to go (alur navigasi kiri-kanan, atas-bawah jelas)',
    tags: ['3 Pedoman Poster', 'Hafalan']
  },
  {
    id: 'fc-m7-22',
    moduleSlug: 'modul-7',
    topicId: 'm7-poster-ilmiah',
    category: 'konsep',
    front: 'Sebutkan 3 software pembuatan poster yang dibahas dalam modul!',
    back: '1. Adobe InDesign (khusus desain tapi mahal)\n2. Microsoft PowerPoint (familiar tapi bukan untuk cetak besar)\n3. Scribus (gratis open source tapi perlu belajar)',
    tags: ['Software Poster', 'Modul 7']
  },
  {
    id: 'fc-m7-23',
    moduleSlug: 'modul-7',
    topicId: 'm7-poster-ilmiah',
    category: 'konsep',
    front: 'Berapa panduan panjang kata untuk Title, Intro, Methods, Results, dan Conclusions pada poster?',
    back: 'Title: 1-2 baris; Intro ~200 kata; Methods ~200 kata; Results ~200 kata; Conclusions ~200 kata; Aims <100 kata.',
    tags: ['Panjang Kata Poster', 'Angka 200']
  },
  {
    id: 'fc-m7-24',
    moduleSlug: 'modul-7',
    topicId: 'm7-poster-ilmiah',
    category: 'konsep',
    front: 'Mengapa modul menyarankan kertas Semiglossy dan melarang Ultraglossy untuk poster?',
    back: 'Kertas semiglossy menampilkan warna cerah tanpa memantulkan kilau lampu sorot ruangan konferensi (ultraglossy memantulkan cahaya lampu sehingga poster silau dan tidak terbaca).',
    tags: ['Semiglossy vs Ultraglossy', 'Bahan Cetak']
  },
  {
    id: 'fc-m7-25',
    moduleSlug: 'modul-7',
    topicId: 'm7-poster-ilmiah',
    category: 'konsep',
    front: 'Berapa menit waktu presentasi ringkas yang disarankan untuk dilatih saat sesi poster?',
    back: 'Latihan presentasi ringkas 3 sampai 5 menit.',
    tags: ['Presentasi Poster', '3-5 Menit']
  }
];

export function getFlashcardsByModule(moduleSlug?: string): Flashcard[] {
  if (!moduleSlug) return allFlashcards;
  return allFlashcards.filter((fc) => fc.moduleSlug === moduleSlug);
}

export function getFlashcardById(id: string): Flashcard | undefined {
  return allFlashcards.find((fc) => fc.id === id);
}
