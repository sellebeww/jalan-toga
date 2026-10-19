import { ModuleData } from '../../types';

export const modul6: ModuleData = {
  slug: 'modul-6',
  number: 6,
  title: 'Teknik dan Instrumen Penelitian',
  subtitle: 'Sampling, Skala Pengukuran, Kuesioner, Observasi, Hawthorne, dan Rumus Reliabilitas',
  color: 'green',
  icon: 'Sliders',
  description: 'Membahas populasi & sampel, pembagian Probability vs Nonprobability (termasuk klasifikasi Systematic sebagai nonprobability sesuai modul), 10 teknik sampling, penentuan ukuran sampel (Harry King, Isaac & Michael, saran Roscoe), skala nominal/ordinal/interval/rasio, skala Likert, Guttman, Semantic Differential, Rating, instrumen wawancara & 10 perhatian, checklist pertanyaan kuesioner Lakukan vs Hindari, observasi & Hawthorne Effect, proses survei Hart & Burgess, serta rumus lengkap uji reliabilitas (Split-Half Spearman-Brown, KR-20, Cronbach Alpha).',
  estimatedMinutes: 50,
  topics: [
    {
      id: 'm6-populasi-sampel',
      moduleSlug: 'modul-6',
      slug: 'populasi-dan-sampel',
      title: 'Populasi vs Sampel',
      order: 1,
      readingMinutes: 3,
      tldr: 'Populasi = wilayah generalisasi objek/subjek bertaraf kuantitas & karakteristik tertentu. Sampel = bagian representatif populasi. Ukuran populasi ≠ ukuran sampel!',
      definition: 'Populasi adalah wilayah generalisasi yang terdiri atas objek atau subjek yang mempunyai kuantitas dan karakteristik tertentu yang ditetapkan oleh peneliti untuk dipelajari dan kemudian ditarik kesimpulannya. Sampel adalah bagian dari jumlah dan karakteristik yang dimiliki oleh populasi tersebut. Sampel harus representatif (mewakili). Peringatan penting modul: Responden yang mudah dijangkau belum otomatis mewakili seluruh populasi! Ukuran populasi tidak sama dengan ukuran sampel.',
      explanation: 'Jika populasi penelitian adalah seluruh 10.000 mahasiswa aktif di universitas, dan peneliti hanya membagikan kuesioner kepada 30 orang teman sekelasnya di jurusan TI yang mudah ditemui, sampel tersebut bias dan tidak representatif mewakili karakteristik seluruh mahasiswa kampus (misal mahasiswa kedokteran, hukum, dan ekonomi memiliki kebiasaan akses portal yang berbeda).',
      example: {
        text: 'Pada Portal Kampus:\n- Populasi: Seluruh 8.500 mahasiswa aktif universitas yang terdaftar pada semester ganjil 2026.\n- Sampel: 367 mahasiswa yang dipilih melalui teknik proportionate stratified sampling dari tiap fakultas.',
        isFabricated: true
      },
      pitfalls: [
        'Menganggap siapa pun responden yang bersedia mengisi angket otomatis mewakili seluruh populasi tanpa memeriksa keterwakilan profilnya.',
        'Menyamakan simbol $N$ (populasi) dengan $n$ atau $s$ (sampel).'
      ],
      memorize: {
        title: 'Kaidah Emas Populasi & Sampel',
        items: [
          'Populasi ($N$): Wilayah generalisasi dengan karakteristik spesifik.',
          'Sampel ($n$ / $s$): Bagian yang diambil untuk diteliti.',
          'Syarat mutlak sampel: Harus REPRESENTATIF (mewakili variasi populasi).',
          'Ingat: Mudah dijangkau ≠ Representatif!'
        ],
        ordered: false
      },
      miniQuiz: [
        {
          id: 'q-m6-1-1',
          type: 'truefalse',
          prompt: 'Benar atau Salah: Menurut modul, responden yang paling mudah dijangkau dan ditemui peneliti sudah pasti otomatis mewakili seluruh populasi penelitian.',
          answer: false,
          explanation: 'Salah. Modul secara tegas memperingatkan: "Responden yang mudah dijangkau belum otomatis mewakili seluruh populasi."',
          difficulty: 1,
          topicId: 'm6-populasi-sampel'
        }
      ],
      tags: ['Populasi', 'Sampel', 'Representatif'],
      glossaryTerms: ['populasi', 'sampel', 'representatif']
    },
    {
      id: 'm6-probability-nonprobability',
      moduleSlug: 'modul-6',
      slug: 'probability-dan-nonprobability-sampling',
      title: 'Probability vs Nonprobability Sampling',
      order: 2,
      readingMinutes: 4,
      tldr: 'Probability = setiap anggota populasi punya peluang sama untuk dipilih. Nonprobability = peluang tidak sama. Catatan modul: Systematic masuk nonprobability!',
      definition: 'Dalam definisi slide modul:\n- Probability sampling: Teknik pengambilan sampel yang memberikan peluang yang sama bagi setiap unsur (anggota) populasi untuk dipilih menjadi anggota sampel.\n- Nonprobability sampling: Teknik pengambilan sampel yang tidak memberi peluang atau kesempatan sama bagi setiap unsur atau anggota populasi untuk dipilih.\nCatatan penting modul: Dalam diagram klasifikasi modul RTI, Systematic sampling dimasukkan ke dalam kelompok Nonprobability sampling (berbeda dengan sebagian literatur statistik lain yang menggolongkannya ke probability). Ikuti acuan modul RTI saat ujian!',
      explanation: 'Probability sampling memungkinkan generalisasi statistik ke seluruh populasi dengan tingkat kepercayaan terukur (misal 95%). Sebaliknya, nonprobability sampling sering digunakan pada penelitian eksploratif, kualitatif, atau saat kerangka sampling (daftar nama seluruh anggota populasi) tidak tersedia.',
      example: {
        text: 'Memilih mahasiswa dengan undian nomor induk acak komputer adalah Probability sampling (Simple Random). Memilih mahasiswa yang kebetulan sedang nongkrong di kantin kampus adalah Nonprobability sampling (Incidental).',
        isFabricated: false
      },
      pitfalls: [
        'Mengklasifikasikan Systematic sampling sebagai probability dalam ujian RTI; modul secara eksplisit mengelompokkannya di cabang Nonprobability!',
        'Melakukan generalisasi statistik populasi pada data yang diambil dari teknik nonprobability sampling murni.'
      ],
      compare: {
        headers: ['Dimensi', 'Probability Sampling', 'Nonprobability Sampling'],
        rows: [
          ['Peluang Anggota', 'Sama besar untuk setiap unsur populasi', 'Tidak sama (ada pertimbangan tertentu/akses)'],
          ['Tujuan Utama', 'Generalisasi hasil ke seluruh populasi', 'Eksplorasi mendalam, studi kasus, kepraktisan'],
          ['Teknik dalam Modul', 'Simple random, Proportionate stratified, Disproportionate stratified, Area/cluster', 'Systematic, Quota, Incidental, Purposive, Saturated/jenuh, Snowball']
        ]
      },
      memorize: {
        title: 'Daftar Klasifikasi Sampling Menurut Modul RTI',
        items: [
          'PROBABILITY (4 Teknik): Simple Random, Proportionate Stratified, Disproportionate Stratified, Cluster/Area.',
          'NONPROBABILITY (6 Teknik): Systematic, Quota, Incidental, Purposive, Saturated/Jenuh, Snowball.',
          'Catatan Ujian: Systematic sampling masuk NONPROBABILITY dalam modul!'
        ],
        ordered: false
      },
      sourceNote: 'Dalam klasifikasi diagram Modul 6 RTI, systematic sampling dimasukkan ke kelompok nonprobability sampling.',
      miniQuiz: [
        {
          id: 'q-m6-2-1',
          type: 'single',
          prompt: 'Dalam diagram klasifikasi teknik sampling yang disajikan dalam modul RTI, Systematic Sampling dimasukkan ke dalam kelompok:',
          options: ['Probability sampling', 'Nonprobability sampling', 'Continuous sampling', 'Cluster sampling'],
          answer: 1,
          explanation: 'Slide 46 Modul 6 secara eksplisit mengelompokkan Systematic sampling ke dalam daftar Nonprobability sampling.',
          difficulty: 1,
          topicId: 'm6-probability-nonprobability'
        }
      ],
      tags: ['Probability', 'Nonprobability', 'Klasifikasi Modul'],
      glossaryTerms: ['probability-sampling', 'nonprobability-sampling', 'systematic-sampling']
    },
    {
      id: 'm6-sepuluh-teknik-sampling',
      moduleSlug: 'modul-6',
      slug: 'sepuluh-teknik-sampling-lengkap',
      title: '10 Teknik Sampling Lengkap Beserta Jebakannya',
      order: 3,
      readingMinutes: 6,
      tldr: '10 Teknik: Simple random, Proportionate stratified, Disproportionate stratified, Cluster, Systematic, Quota, Incidental, Purposive, Saturated, Snowball.',
      definition: 'Sepuluh teknik sampling yang wajib dipahami:\n1. Simple Random: Acak tanpa strata, populasi dianggap homogen. Jebakan: memilih siapa yang ditemui bukan acak.\n2. Proportionate Stratified Random: Populasi heterogen berstrata; tiap strata diwakili proporsional sesuai perbandingan populasi. Jebakan: proporsional bukan berarti mengambil jumlah yang sama persis di tiap strata!\n3. Disproportionate Stratified Random: Untuk populasi berstrata yang proporsinya sangat timpang. Kelompok sangat kecil diambil seluruhnya, kelompok besar diambil sebagian. Contoh slide: 3 S3, 4 S2, 250 S1, 350 SMU, 300 SMP.\n4. Cluster / Area Sampling: Sumber data sangat luas (lintas wilayah/kampus); sering dilakukan dua tahap (pilih area dulu, baru pilih unit di dalamnya).\n5. Systematic Sampling: Berdasarkan pola nomor urut anggota populasi (misal kelipatan 5 atau genap).\n6. Quota Sampling: Menetapkan ciri tertentu sampai jumlah target terpenuhi. Jebakan: terpenuhinya angka bukan bukti pemilihan acak.\n7. Incidental Sampling: Mengambil subjek yang kebetulan bertemu dan dinilai cocok sebagai sumber data.\n8. Purposive Sampling: Pemilihan sampel dengan pertimbangan/kriteria spesifik tertentu; sangat cocok untuk kualitatif.\n9. Saturated / Jenuh / Sensus: Semua anggota populasi dijadikan sampel. Modul menyebut untuk populasi relatif kecil (< 30) atau bila ingin kesalahan generalisasi sekecil mungkin.\n10. Snowball Sampling: Sampel mula-mula kecil, kemudian membesar secara bertahap melalui rekomendasi informan sebelumnya.',
      explanation: 'Perhatikan detail penting:\n- Pada Proportionate stratified: Jika angkatan 2024 berjumlah 500 dan angkatan 2021 berjumlah 100, sampel 10% berarti mengambil 50 dari angkatan 2024 dan 10 dari angkatan 2021 (proporsional, bukan sama-sama 30!).\n- Pada Disproportionate stratified: Jika dosen S3 hanya 3 orang dan dosen S1 ada 250 orang, ke-3 dosen S3 diambil seluruhnya agar kelompok strata langka tersebut tidak hilang dalam analisis.\n- Pada Saturated sampling: Jika populasi cuma 20 orang pengelola server, teliti semuanya!',
      example: {
        text: 'Penerapan pada Portal Kampus:\n- Simple Random: Mengundi 100 NIM dari seluruh daftar mahasiswa.\n- Proportionate Stratified: Mengambil 5% mahasiswa dari tiap fakultas.\n- Disproportionate Stratified: Mengambil seluruh 3 pimpinan IT rektorat, dan 10% staf teknis.\n- Cluster: Memilih Kampus A dan Kampus B secara bertahap.\n- Systematic: Mengambil mahasiswa dengan nomor presensi urutan kelipatan 10.\n- Quota: Mengambil tepat 50 pria dan 50 wanita pengguna portal.\n- Incidental: Mewawancarai mahasiswa yang kebetulan sedang browsing portal di lobi perpustakaan.\n- Purposive: Memilih 5 admin portal yang sudah bertugas minimal 2 tahun.\n- Saturated: Meneliti seluruh 12 programmer portal kampus.\n- Snowball: Menemukan mahasiswa yang pernah komplain tiket portal lewat rekomendasi teman korban komplain pertama.',
        isFabricated: true
      },
      pitfalls: [
        'Mengira proportionate stratified mengambil jumlah sama tiap kelompok (misal sama-sama 20 orang); itu salah, proportionate mengambil perbandingan persentase yang sebanding!',
        'Menyamakan quota sampling dengan stratified random sampling (quota tidak menggunakan pengacakan probabilistik).',
        'Menganggap incidental sampling otomatis valid tanpa memeriksa kecocokan subjek.'
      ],
      compare: {
        headers: ['Teknik', 'Sifat Populasi', 'Cara Pemilihan Anggota'],
        rows: [
          ['Simple Random', 'Homogen tanpa tingkatan', 'Acak murni (undian/lotere/RNG)'],
          ['Proportionate Stratified', 'Heterogen berstrata seimbang', 'Proporsi persentase sama tiap strata'],
          ['Disproportionate Stratified', 'Heterogen dengan strata sangat timpang', 'Strata minoritas diambil semua, mayoritas disampel'],
          ['Cluster / Area', 'Wilayah geografis sangat luas', 'Pilih klaster area terlebih dahulu'],
          ['Systematic', 'Daftar bernomor urut', 'Pola interval nomor urut (k-th)'],
          ['Quota', 'Punya kuota target angka', 'Asal target kuota terpenuhi'],
          ['Purposive', 'Kriteria kualifikasi spesifik', 'Pertimbangan kriteria khusus peneliti'],
          ['Saturated / Sensus', 'Populasi sangat kecil (< 30)', '100% seluruh anggota populasi diteliti'],
          ['Snowball', 'Populasi tersembunyi / sulit', 'Informan merekomendasikan informan baru']
        ]
      },
      memorize: {
        title: '10 Teknik Sampling Modul RTI',
        items: [
          '1. Simple Random: Acak homogen.',
          '2. Proportionate Stratified: Persentase sebanding per strata.',
          '3. Disproportionate Stratified: Strata mini diambil semua.',
          '4. Cluster/Area: Wilayah luas 2 tahap.',
          '5. Systematic: Interval nomor urut daftar.',
          '6. Quota: Angka kuota target terpenuhi.',
          '7. Incidental: Kebetulan bertemu & cocok.',
          '8. Purposive: Kriteria pertimbangan tertentu.',
          '9. Saturated / Jenuh: Sensus seluruh anggota (<30).',
          '10. Snowball: Berantai dari kecil membesar.'
        ],
        ordered: true
      },
      miniQuiz: [
        {
          id: 'q-m6-3-1',
          type: 'single',
          prompt: 'Suatu populasi terdiri dari 3 orang lulusan S3, 4 orang S2, 250 orang S1, dan 350 orang SMU. Jika peneliti mengambil seluruh lulusan S3 dan S2 karena jumlahnya terlalu kecil, teknik sampling yang digunakan adalah:',
          options: [
            'Simple random sampling',
            'Proportionate stratified random sampling',
            'Disproportionate stratified random sampling',
            'Snowball sampling'
          ],
          answer: 2,
          explanation: 'Slide 48 Modul 6 memberikan contoh persis ini untuk Disproportionate stratified random sampling (kelompok kecil diambil seluruhnya agar tidak hilang keterwakilannya).',
          difficulty: 1,
          topicId: 'm6-sepuluh-teknik-sampling'
        }
      ],
      tags: ['10 Teknik Sampling', 'Stratified', 'Saturated', 'Snowball'],
      glossaryTerms: ['simple-random', 'stratified-sampling', 'purposive-sampling', 'snowball-sampling', 'sampling-jenuh']
    },
    {
      id: 'm6-ukuran-sampel',
      moduleSlug: 'modul-6',
      slug: 'penentuan-ukuran-sampel',
      title: 'Penentuan Ukuran Sampel: Harry King, Isaac & Michael, Saran Roscoe',
      order: 4,
      readingMinutes: 5,
      tldr: 'Ukuran sampel berbanding terbalik dengan taraf kesalahan. Contoh Harry King N=200 → 139. Tabel Isaac & Michael N=200 → s=154 (1%), 127 (5%), 115 (10%). Saran Roscoe: 30-500, per kategori ≥30, multivariate ≥10x variabel.',
      definition: 'Ukuran sampel adalah banyaknya anggota sampel yang diambil. Prinsip pokok: Kesalahan yang diizinkan makin besar memerlukan sampel makin kecil, dan sebaliknya (makin teliti/ketat toleransi kesalahan, makin besar sampel yang dibutuhkan).\n1. Contoh Nomogram Harry King pada slide: Populasi N = 200, taraf kepercayaan 95%, taraf kesalahan 5%:\n   Perhitungan: 0,58 × 200 × 1,195 = 138,62 → dibulatkan 139 orang (faktor 0,58 dan pengali 1,195 berasal dari pembacaan nomogram).\n2. Tabel Isaac & Michael (slide 51): Menampilkan nilai N populasi dan s sampel pada taraf kesalahan 1%, 5%, dan 10%. Pada N = 200:\n   - Taraf kesalahan 1% → s = 154\n   - Taraf kesalahan 5% → s = 127\n   - Taraf kesalahan 10% → s = 115\n3. Saran Roscoe yang dikutip modul:\n   - Ukuran sampel yang layak antara 30 sampai 500 subjek.\n   - Jika sampel dipecah ke dalam subkategori (pria/wanita, junior/senior), tiap kategori minimal 30 subjek.\n   - Analisis multivariate (regresi ganda): Ukuran sampel minimal 10 kali jumlah variabel penelitian (misal 5 variabel = minimal 50 responden).\n   - Eksperimen sederhana dengan kelompok kontrol & eksperimen: Masing-masing kelompok 10 sampai 20 subjek.',
      explanation: 'Catatan penting modul: Saran Roscoe adalah beberapa panduan untuk konteks penelitian yang berbeda-beda, bukan satu aturan kaku yang dipaksakan sekaligus pada semua desain penelitian!',
      example: {
        text: 'Sebuah skripsi TI meneliti faktor penerimaan portal dengan model TAM yang memiliki 4 variabel independen dan 1 variabel dependen (total 5 variabel). Berdasarkan saran Roscoe untuk multivariate, peneliti wajib menyiapkan sampel minimal 10 × 5 = 50 responden.',
        isFabricated: false
      },
      pitfalls: [
        'Mengira toleransi kesalahan yang lebih besar membutuhkan sampel yang lebih banyak (faktanya: toleransi kesalahan longgar = sampel lebih sedikit).',
        'Menggabungkan semua saran Roscoe secara membabi buta tanpa melihat apakah risetnya multivariate atau eksperimen sederhana.'
      ],
      compare: {
        headers: ['Metode Penentuan', 'Kondisi Acuan Modul (N = 200)', 'Hasil Ukuran Sampel'],
        rows: [
          ['Harry King Nomogram', 'Taraf kepercayaan 95%, kesalahan 5%', '0,58 × 200 × 1,195 = 138,62 ≈ 139'],
          ['Isaac & Michael (1%)', 'Populasi N = 200, alpha 1%', 's = 154'],
          ['Isaac & Michael (5%)', 'Populasi N = 200, alpha 5%', 's = 127'],
          ['Isaac & Michael (10%)', 'Populasi N = 200, alpha 10%', 's = 115']
        ]
      },
      memorize: {
        title: '4 Saran Roscoe untuk Ukuran Sampel',
        items: [
          '1. Ukuran sampel layak secara umum: 30 sampai 500 responden.',
          '2. Tiap subkategori: Minimal 30 responden per kelompok.',
          '3. Analisis multivariate: Minimal 10 × jumlah variabel penelitian (5 var → 50).',
          '4. Eksperimen sederhana: 10 sampai 20 responden per kelompok (kontrol vs eksperimen).'
        ],
        ordered: true
      },
      miniQuiz: [
        {
          id: 'q-m6-4-1',
          type: 'single',
          prompt: 'Berdasarkan tabel Isaac & Michael pada slide Modul 6, jika populasi N = 200 dengan taraf kesalahan 5%, berapakah ukuran sampel s yang harus diambil?',
          options: ['154', '127', '115', '139'],
          answer: 1,
          explanation: 'Tabel Isaac & Michael pada N=200 menunjukkan nilai s=154 pada 1%, s=127 pada 5%, dan s=115 pada 10%.',
          difficulty: 1,
          topicId: 'm6-ukuran-sampel'
        }
      ],
      tags: ['Ukuran Sampel', 'Harry King', 'Isaac Michael', 'Roscoe'],
      glossaryTerms: ['ukuran-sampel', 'isaac-michael', 'nomogram-king', 'saran-roscoe']
    },
    {
      id: 'm6-skala-pengukuran',
      moduleSlug: 'modul-6',
      slug: 'skala-pengukuran-data',
      title: 'Skala Pengukuran: Nominal, Ordinal, Interval, Rasio',
      order: 5,
      readingMinutes: 4,
      tldr: 'Nominal (kategori tanpa urutan) → Ordinal (kategori berurutan) → Interval (jarak setara, tanpa nol mutlak) → Rasio (jarak setara + nol absolut).',
      definition: 'Skala adalah kesepakatan acuan untuk menentukan interval dalam alat ukur. Empat tingkat skala pengukuran:\n1. Nominal: Membedakan kategori objek tanpa tingkatan/urutan (misal: jenis perangkat: laptop/smartphone; jenis kelamin: pria/wanita).\n2. Ordinal: Membedakan kategori dengan tingkatan/urutan tertentu, namun jarak antartingkat tidak setara (misal: peringkat kemudahan: juara 1, 2, 3; tingkat kepuasan: rendah, sedang, tinggi).\n3. Interval: Memiliki urutan dan jarak yang setara antar-nilai, namun tidak memiliki nilai nol absolut (misal: suhu dalam Celsius; nilai IQ).\n4. Rasio: Memiliki urutan, jarak yang setara, dan memiliki nilai nol absolut (nol berarti ketiadaan sifat murni; misal: waktu eksekusi dalam detik, kapasitas memori dalam byte, berat dalam kg).\nPeringatan modul: Hindari menganggap kode kategori angka 1/2/3 pada data nominal otomatis mempunyai jarak numerik yang bermakna!',
      explanation: 'Pembeda format skala vs tingkat pengukuran: Likert, Guttman, Semantic Differential, dan Rating Scale merupakan format format skala instrumen yang dibahas, bukan daftar yang identik langsung dengan nominal-ordinal-interval-rasio.',
      example: {
        text: 'Contoh pada Portal Kampus:\n- Nominal: Sistem operasi pengguna (1=Windows, 2=Linux, 3=macOS). Angka 1, 2, 3 hanya label, tidak berarti macOS lebih tinggi dari Windows!\n- Ordinal: Peringkat fitur favorit (1=Jadwal Kuliah, 2=Cari Kegiatan, 3=Download Surat).\n- Interval: Suhu ruang server dalam Celsius (0°C bukan berarti ketiadaan suhu).\n- Rasio: Waktu unduh file pengumuman dalam detik (0 detik = tidak butuh waktu / instan mutlak).',
        isFabricated: true
      },
      pitfalls: [
        'Melakukan operasi rata-rata matematika (mean) pada data nominal (misal menghitung rata-rata jenis kelamin = 1,5).',
        'Mengira suhu Celsius memiliki skala rasio (suhu Celsius adalah interval karena 0°C adalah titik beku air buatan, bukan nol mutlak ketiadaan energi kalor).'
      ],
      compare: {
        headers: ['Tingkat Skala', 'Kategori?', 'Ada Urutan?', 'Jarak Setara?', 'Nol Absolut?', 'Contoh'],
        rows: [
          ['Nominal', 'Ya', 'Tidak', 'Tidak', 'Tidak', 'Jenis kelamin, OS'],
          ['Ordinal', 'Ya', 'Ya', 'Tidak', 'Tidak', 'Peringkat juara, eselon'],
          ['Interval', 'Ya', 'Ya', 'Ya', 'Tidak', 'Suhu Celsius, nilai tes'],
          ['Rasio', 'Ya', 'Ya', 'Ya', 'Ya (mutlak)', 'Waktu detik, ukuran byte']
        ]
      },
      memorize: {
        title: 'Tangga Tingkat Pengukuran Data (NOIR)',
        items: [
          'N - Nominal: Label pembeda kategori.',
          'O - Ordinal: Urutan / jenjang tingkatan.',
          'I - Interval: Jarak setara tanpa nol absolut.',
          'R - Rasio: Jarak setara + Ada nol absolut murni.'
        ],
        ordered: true
      },
      mnemonic: {
        text: 'NOIR: Nominal, Ordinal, Interval, Rasio',
        note: 'Mnemonik buatan'
      },
      miniQuiz: [
        {
          id: 'q-m6-5-1',
          type: 'single',
          prompt: 'Pengukuran waktu eksekusi query pencarian portal kampus dalam satuan detik termasuk ke dalam skala pengukuran tingkat:',
          options: ['Nominal', 'Ordinal', 'Interval', 'Rasio'],
          answer: 3,
          explanation: 'Waktu dalam detik memiliki jarak yang setara dan memiliki nilai nol absolut (0 detik berarti tidak ada waktu yang berlalu), sehingga termasuk skala Rasio.',
          difficulty: 1,
          topicId: 'm6-skala-pengukuran'
        }
      ],
      tags: ['Skala Pengukuran', 'Nominal', 'Ordinal', 'Interval', 'Rasio'],
      glossaryTerms: ['skala-nominal', 'skala-ordinal', 'skala-interval', 'skala-rasio']
    },
    {
      id: 'm6-skala-likert',
      moduleSlug: 'modul-6',
      slug: 'skala-likert-dan-perhitungan',
      title: 'Skala Likert & Contoh Perhitungan Modul',
      order: 6,
      readingMinutes: 5,
      tldr: 'Likert mengukur sikap/pendapat. Jawaban bergradasi (SS=5, ST=4, RG=3, TS=2, STS=1), pilihan 3-7. Contoh hitung modul: 100 orang → total skor 350 dari maksimum 500, minimum 100.',
      definition: 'Skala Likert digunakan untuk mengukur sikap, pendapat, dan persepsi seseorang atau sekelompok orang tentang fenomena sosial. Variabel dijabarkan menjadi indikator, lalu disusun menjadi butir-butir item pernyataan. Jawaban bergradasi dari sangat positif hingga sangat negatif dalam bentuk checklist atau pilihan ganda. Modul menyebut Likert umumnya memiliki 3 sampai 7 interval pilihan. Bobot standar: Sangat Setuju (SS) = 5, Setuju (ST) = 4, Ragu-ragu (RG) = 3, Tidak Setuju (TS) = 2, Sangat Tidak Setuju (STS) = 1.',
      explanation: 'Contoh perhitungan resmi dari slide Modul 6 (halaman 54):\nDari 100 orang responden yang ditanya mengenai satu butir item:\n- 25 orang memilih Sangat Setuju (SS)\n- 40 orang memilih Setuju (ST)\n- 5 orang memilih Ragu-ragu (RG)\n- 20 orang memilih Tidak Setuju (TS)\n- 10 orang memilih Sangat Tidak Setuju (STS)\nPerhitungan total skor:\nTotal = (25 × 5) + (40 × 4) + (5 × 3) + (20 × 2) + (10 × 1)\nTotal = 125 + 160 + 15 + 40 + 10 = 350.\n- Skor ideal maksimum (bila semua 100 memilih SS) = 100 × 5 = 500.\n- Skor minimum (bila semua 100 memilih STS) = 100 × 1 = 100.\n- Persentase terhadap skor ideal: (350 / 500) × 100% = 70% (kategori Setuju / Positif pada garis kontinum).',
      example: {
        text: 'Item kuesioner Portal Kampus: "Fitur pencarian informasi kegiatan UKM mudah digunakan." Hasil 100 mahasiswa menghasilkan total skor 350 dari ideal 500 (70%), menunjukkan persepsi pengguna berada di wilayah positif/setuju.',
        isFabricated: false
      },
      pitfalls: [
        'Lupa mengalikan frekuensi responden dengan bobot nilai masing-masing pilihan (5, 4, 3, 2, 1).',
        'Mengira skor minimum selalu 0; pada skala Likert 1-5 untuk 100 responden, skor minimum adalah 100 × 1 = 100!'
      ],
      memorize: {
        title: 'Angka Contoh Hitung Modul Likert',
        items: [
          'Responden: 100 orang (25 SS, 40 ST, 5 RG, 20 TS, 10 STS).',
          'Perhitungan: 25(5) + 40(4) + 5(3) + 20(2) + 10(1) = 350.',
          'Skor Maksimum Ideal: 100 × 5 = 500.',
          'Skor Minimum: 100 × 1 = 100.',
          'Hasil: 350 dari 500 (70%).'
        ],
        ordered: true
      },
      miniQuiz: [
        {
          id: 'q-m6-6-1',
          type: 'single',
          prompt: 'Pada contoh perhitungan skala Likert 100 responden di slide Modul 6, berapakah total skor yang dihasilkan dan berapa skor minimumnya?',
          options: [
            'Total skor 350, skor minimum 100',
            'Total skor 500, skor minimum 0',
            'Total skor 250, skor minimum 50',
            'Total skor 400, skor minimum 200'
          ],
          answer: 0,
          explanation: 'Slide 54 Modul 6 menghitung total skor 350, skor maksimum 500, dan skor minimum 100 (100 orang x bobot terendah 1).',
          difficulty: 1,
          topicId: 'm6-skala-likert'
        }
      ],
      tags: ['Skala Likert', 'Hitung Likert', 'Kontinum'],
      glossaryTerms: ['skala-likert', 'skor-ideal', 'kontinum']
    },
    {
      id: 'm6-skala-lain',
      moduleSlug: 'modul-6',
      slug: 'skala-guttman-semantic-differential-rating',
      title: 'Skala Guttman, Semantic Differential, dan Rating Scale',
      order: 7,
      readingMinutes: 4,
      tldr: 'Guttman = 2 pilihan tegas (dikotomi: ya/tidak). Semantic Differential = kontinum kata sifat dua kutub (Osgood). Rating Scale = langsung memilih angka mentah.',
      definition: 'Tiga format skala pengukuran lainnya dalam modul:\n1. Skala Guttman: Bertujuan memperoleh jawaban yang tegas dan konsisten dengan dua alternatif dikotomi (misal: Setuju / Tidak Setuju, Pernah / Tidak Pernah, Ya / Tidak). Modul menyebut menghasilkan data interval atau rasio dikotomi.\n2. Semantic Differential (Osgood): Dikembangkan oleh Osgood; berupa garis kontinum di antara dua kata sifat yang berlawanan kutub (sangat positif di satu ujung dan sangat negatif di ujung lain). Modul menyebut hasilnya data interval. (Catatan: ejaan slide adalah "Semantic Deferential", istilah baku umum: Semantic Differential).\n3. Rating Scale: Responden langsung memilih jawaban kuantitatif (angka) yang disediakan, bukan mula-mula memilih kategori kualitatif kata lalu diubah ke angka. Contoh slide: Tingkat pengetahuan 0-4, dan contoh total penilaian tata ruang 818 dari 30 responden, 10 item pernyataan, skor maksimum 4 (skor ideal = 30 × 10 × 4 = 1.200).',
      explanation: 'Bedakan ketiga format ini:\n- Likert: Pilihan kata bergradasi (Sangat Setuju s/d Sangat Tidak Setuju).\n- Guttman: Pilihan dua kutub tegas tanpa kompromi ragu-ragu (Pernah vs Tidak Pernah).\n- Semantic Differential: Garis titik di antara sepasang kata sifat yang berlawanan (misal "Membingungkan . . . . . Jelas").\n- Rating Scale: Kolom angka langsung (0, 1, 2, 3, 4) yang dilingkari responden.',
      example: {
        text: 'Contoh pada evaluasi Portal Kampus:\n- Guttman: "Apakah Anda pernah mengalami gagal unduh jadwal?" [Pernah] [Tidak Pernah].\n- Semantic Differential: Antarmuka portal dinilai pada kutub: Lambat [ 1 - 2 - 3 - 4 - 5 ] Cepat.\n- Rating Scale: Responden langsung memberi nilai 0 sampai 4 untuk kejelasan navigasi menu.',
        isFabricated: false
      },
      pitfalls: [
        'Menyamakan Guttman dengan Likert; Guttman tidak memiliki gradasi ragu-ragu/netral.',
        'Mengira Rating Scale otomatis valid hanya karena responden langsung memilih angka.'
      ],
      compare: {
        headers: ['Format Skala', 'Karakteristik Pilihan', 'Tipe Data Menurut Modul'],
        rows: [
          ['Likert Scale', 'Gradasi 3-7 pilihan (SS, ST, RG, TS, STS)', 'Ordinal / perlakuan interval'],
          ['Guttman Scale', '2 Alternatif tegas dikotomi (Ya/Tidak)', 'Interval / rasio dikotomi'],
          ['Semantic Differential', 'Garis kontinum dua kutub kata sifat (Osgood)', 'Interval'],
          ['Rating Scale', 'Responden langsung memilih angka skor', 'Interval kuantitatif']
        ]
      },
      memorize: {
        title: '3 Format Skala Non-Likert',
        items: [
          'Guttman: Dua alternatif jawaban tegas dikotomi (Pernah/Tidak).',
          'Semantic Differential: Osgood, garis kontinum 2 kutub kata sifat.',
          'Rating Scale: Responden langsung memilih angka kuantitatif mentah.',
          'Contoh slide Rating: 818 dari 30 responden, 10 item, max 4 (ideal 1.200).'
        ],
        ordered: false
      },
      sourceNote: 'Ejaan slide asli tertulis "Semantic Deferential"; penjelasan padanan bakunya adalah Semantic Differential.',
      miniQuiz: [
        {
          id: 'q-m6-7-1',
          type: 'single',
          prompt: 'Skala pengukuran yang menggunakan garis kontinum dengan dua kata sifat berlawanan kutub (seperti "Membingungkan" di satu ujung dan "Jelas" di ujung lain) dikembangkan oleh Osgood dan disebut:',
          options: ['Skala Likert', 'Semantic Differential', 'Skala Guttman', 'Nomogram King'],
          answer: 1,
          explanation: 'Osgood mengembangkan Semantic Differential yang mengukur respons pada kontinum dua kutub kata sifat.',
          difficulty: 1,
          topicId: 'm6-skala-lain'
        }
      ],
      tags: ['Guttman', 'Semantic Differential', 'Rating Scale', 'Osgood'],
      glossaryTerms: ['skala-guttman', 'semantic-differential', 'rating-scale']
    },
    {
      id: 'm6-instrumen-penelitian',
      moduleSlug: 'modul-6',
      slug: 'instrumen-penelitian-dan-fungsi',
      title: 'Instrumen Penelitian: Hakikat & 4 Fungsi Pokok',
      order: 8,
      readingMinutes: 3,
      tldr: 'Instrumen = alat pengambil data demi tujuan riset. 3 Teknik utama: wawancara, kuesioner, observasi. 4 Fungsi: batas lingkup, kondisi diketahui, data tambahan, arsip permanen.',
      definition: 'Instrumen penelitian adalah alat yang sesuai untuk mengambil data demi mencapai tujuan penelitian. Tiga teknik utama instrumen yang disebut modul: (1) Interviews (wawancara), (2) Questionnaires (kuesioner), dan (3) Observation (observasi). Empat fungsi utama instrumen menurut modul:\n1. Membatasi ruang lingkup pengumpulan data agar tetap fokus pada variabel relevan.\n2. Memperoleh data pada kondisi yang diketahui dan terkendali.\n3. Mampu menangkap data tambahan yang memperkaya analisis.\n4. Menyimpan informasi secara permanen untuk keperluan verifikasi dan analisis ulang.',
      explanation: 'Tanpa instrumen yang valid dan reliabel, data yang diperoleh tidak akan diakui dalam sidang skripsi. Menggunakan instrumen yang tepat memastikan pengujian dapat direplikasi oleh peneliti lain.',
      example: {
        text: 'Pedoman wawancara kebutuhan portal kampus, kuesioner skala Likert untuk kepuasan mahasiswa, dan lembar catatan observasi waktu tanggap sistem.',
        isFabricated: false
      },
      pitfalls: [
        'Mengumpulkan data tanpa instrumen terstandar (hanya mengandalkan ingatan kepala peneliti).',
        'Instrumen tidak diuji validitas dan reliabilitasnya sebelum disebarkan ke responden.'
      ],
      memorize: {
        title: '4 Fungsi Pokok Instrumen Penelitian',
        items: [
          '1. Membatasi ruang lingkup pengumpulan data.',
          '2. Memperoleh data pada kondisi yang diketahui.',
          '3. Mampu menangkap data tambahan yang relevan.',
          '4. Menyimpan informasi permanen untuk dianalisis.'
        ],
        ordered: true
      },
      miniQuiz: [
        {
          id: 'q-m6-8-1',
          type: 'multi',
          prompt: 'Tiga teknik utama instrumen pengumpulan data yang secara spesifik disebut dalam modul adalah: (Pilih 3)',
          options: ['Interviews (Wawancara)', 'Questionnaires (Kuesioner)', 'Observation (Observasi)', 'Plagiarism Checker'],
          answer: [0, 1, 2],
          explanation: 'Tiga teknik pokok instrumen pada slide Modul 6 adalah Interviews, Questionnaires, dan Observation.',
          difficulty: 1,
          topicId: 'm6-instrumen-penelitian'
        }
      ],
      tags: ['Instrumen Penelitian', 'Wawancara', 'Kuesioner', 'Observasi'],
      glossaryTerms: ['instrumen-penelitian', 'wawancara', 'kuesioner', 'observasi']
    },
    {
      id: 'm6-wawancara',
      moduleSlug: 'modul-6',
      slug: 'wawancara-dan-sepuluh-perhatian',
      title: 'Wawancara: Terstruktur vs Terbuka & 10 Perhatian',
      order: 9,
      readingMinutes: 4,
      tldr: 'Wawancara terstruktur (daftar pertanyaan tetap) vs tidak terstruktur/terbuka (informal & mendalam). Wajib hafal 10 butir perhatian wawancara!',
      definition: 'Wawancara terstruktur memakai daftar pertanyaan yang dipersiapkan secara ketat; wawancara tidak terstruktur / open interviews lebih informal dan memakai pertanyaan terbuka agar jawaban narasumber luas dan mendalam. Peringatan: Terbuka tidak berarti tanpa persiapan atau tanpa tujuan!\nSepuluh perhatian wawancara menurut modul (hafalan wajib):\n(1) Selecting interviewees (pemilihan narasumber yang tepat),\n(2) Preparation (persiapan matang materi dan waktu),\n(3) Questionnaires (daftar pertanyaan pemandu),\n(4) Agenda (susunan urutan pembicaraan),\n(5) Structured replies (penataan dan klasifikasi jawaban),\n(6) Note taking (pencatatan transkrip yang teliti),\n(7) Confidentiality (penjagaan kerahasiaan identitas sumber),\n(8) Logistics (perlengkapan rekaman dan lokasi),\n(9) Characterization (karakterisasi profil narasumber),\n(10) Ethical issues (isu etika dan informed consent).',
      explanation: 'Dalam skripsi sistem informasi, mahasiswa sering mewawancarai calon pengguna untuk menggali kebutuhan sistem. Memperhatikan kerahasiaan (confidentiality) dan penataan jawaban (structured replies) membedakan wawancara ilmiah dengan sekadar obrolan santai di warung kopi.',
      example: {
        text: 'Wawancara terstruktur: Menanyakan 10 pertanyaan spesifik tentang modul pengumuman kepada seluruh 5 perwakilan BEM. Wawancara terbuka: Menggali kendala emosional ketua panitia saat sistem portal down di hari H.',
        isFabricated: false
      },
      pitfalls: [
        'Melakukan wawancara tanpa agenda atau persiapan, mengira wawancara terbuka boleh asal mengalir tanpa arah.',
        'Lupa meminta izin perekaman dan mengabaikan kode etik kerahasiaan identitas narasumber (confidentiality).'
      ],
      memorize: {
        title: '10 Perhatian Wawancara (Wajib Hafal)',
        items: [
          '1. Selecting interviewees (Pemilihan narasumber)',
          '2. Preparation (Persiapan materi & janji temu)',
          '3. Questionnaires (Panduan instrumen pertanyaan)',
          '4. Agenda (Jadwal alur pembicaraan)',
          '5. Structured replies (Penataan format respons)',
          '6. Note taking (Teknik pencatatan & transkrip)',
          '7. Confidentiality (Jaminan kerahasiaan)',
          '8. Logistics (Tempat, alat rekam, perizinan)',
          '9. Characterization (Analisis karakter profil narasumber)',
          '10. Ethical issues (Etika penelitian & persetujuan)'
        ],
        ordered: true
      },
      miniQuiz: [
        {
          id: 'q-m6-9-1',
          type: 'truefalse',
          prompt: 'Benar atau Salah: Wawancara tidak terstruktur (open interviews) berarti peneliti boleh datang menemui narasumber tanpa persiapan materi dan tanpa tujuan penelitian yang jelas.',
          answer: false,
          explanation: 'Salah. Modul secara eksplisit mengingatkan: "Terbuka tidak berarti tanpa persiapan atau tanpa tujuan; wawancara dapat dipakai pada beberapa tahap proyek."',
          difficulty: 1,
          topicId: 'm6-wawancara'
        }
      ],
      tags: ['Wawancara', '10 Perhatian', 'Hafalan'],
      glossaryTerms: ['wawancara-terstruktur', 'wawancara-terbuka', 'confidentiality']
    },
    {
      id: 'm6-kuesioner',
      moduleSlug: 'modul-6',
      slug: 'kuesioner-dan-efektivitas',
      title: 'Kuesioner dalam Penelitian TI',
      order: 10,
      readingMinutes: 3,
      tldr: 'Kuesioner mengumpulkan data dari banyak subjek. Banyak pertanyaan tidak otomatis memberi data relevan. Tujuan penelitian yang menentukan butir pertanyaan!',
      definition: 'Kuesioner adalah sarana memperoleh data dari banyak subjek; dapat digunakan di beberapa tahap proyek dan dalam studi kasus. Peringatan penting modul: Banyak pertanyaan tidak otomatis memberi data yang relevan! Tujuan penelitianlah yang menentukan apa yang perlu dan tidak perlu ditanyakan.',
      explanation: 'Penyakit kuesioner mahasiswa adalah membuat pertanyaan terlalu banyak (misal 60 pertanyaan) hingga responden bosan (survey fatigue) dan mengisinya asal-asalan. Kuesioner yang baik ringkas, tajam, dan setiap butir pertanyaan memiliki relasi langsung ke indikator variabel penelitian.',
      example: {
        text: 'Kuesioner kebutuhan pencarian Portal Kampus dibatasi pada 15 butir terfokus: 5 butir tentang kecepatan penemuan, 5 butir tentang relevansi judul, dan 5 butir tentang kemudahan navigasi.',
        isFabricated: true
      },
      pitfalls: [
        'Membuat pertanyaan terlalu banyak yang tidak ada kaitannya dengan variabel penelitian.',
        'Mengabaikan tingkat kelelahan responden (survey fatigue).'
      ],
      memorize: {
        title: 'Prinsip Kunci Kuesioner Efektif',
        items: [
          'Sarana menjaring data dari banyak subjek secara terstandar.',
          'Banyak pertanyaan ≠ data relevan.',
          'Semua butir pertanyaan harus berakar dari indikator variabel penelitian.',
          'Tata letak rapi, instruksi jelas, dan tidak ambigu.'
        ],
        ordered: false
      },
      miniQuiz: [
        {
          id: 'q-m6-10-1',
          type: 'single',
          prompt: 'Apa pesan penting modul mengenai jumlah pertanyaan dalam kuesioner penelitian?',
          options: [
            'Makin banyak pertanyaan, penelitian dijamin makin bermutu tinggi',
            'Banyak pertanyaan tidak otomatis memberi data relevan; tujuanlah yang menentukan apa yang perlu ditanyakan',
            'Kuesioner wajib berisi minimal 100 pertanyaan',
            'Jumlah pertanyaan harus kelipatan 7'
          ],
          answer: 1,
          explanation: 'Slide 57 Modul 6 memperingatkan: "Banyak pertanyaan tidak otomatis memberi data relevan. Tujuan menentukan apa yang perlu ditanyakan."',
          difficulty: 1,
          topicId: 'm6-kuesioner'
        }
      ],
      tags: ['Kuesioner', 'Instrumen', 'Relevansi'],
      glossaryTerms: ['kuesioner', 'survey-fatigue']
    },
    {
      id: 'm6-observasi-hawthorne',
      moduleSlug: 'modul-6',
      slug: 'observasi-dan-hawthorne-effect',
      title: 'Observasi & Hawthorne Effect',
      order: 11,
      readingMinutes: 4,
      tldr: 'Observasi = mengamati, merekam, menganalisis. Perhatikan: arrangements, recording, participation, dan Hawthorne Effect (perilaku berubah karena sadar diamati!).',
      definition: 'Observasi adalah metode mengamati, merekam, dan menganalisis kejadian atau perilaku yang diteliti. Observasi tidak berhenti pada sekadar melihat; pencatatan (recording), posisi partisipasi peneliti (participation), dan pengaturan jadwal/lokasi (arrangements) harus jelas. Modul secara khusus mencantumkan Hawthorne Effect.\nPenjelas istilah: Hawthorne Effect adalah fenomena di mana perilaku subjek penelitian berubah (misal menjadi lebih rajin, lebih teliti, atau berpura-pura patuh) semata-mata karena mereka menyadari bahwa diri mereka sedang diamati oleh peneliti.',
      explanation: 'Dalam evaluasi sistem komputer (misalnya usability testing portal kampus), staf administrasi yang biasanya sering salah klik bisa mendadak menjadi sangat hati-hati dan lambat karena merasa sedang diawasi di sampingnya oleh peneliti skripsi. Ini adalah bias Hawthorne Effect yang harus diantisipasi peneliti.',
      example: {
        text: 'Contoh buatan berlabel: Staf administrasi kampus mengetik data kegiatan dengan sangat teliti dan tidak membuka media sosial hanya pada saat peneliti duduk mengamati di samping mejanya. Setelah peneliti keluar ruangan, kebiasaan kerja kembali normal.',
        isFabricated: true
      },
      pitfalls: [
        'Mengabaikan Hawthorne Effect sehingga menyimpulkan bahwa antarmuka sistem sudah sangat mudah tanpa menyadari kehati-hatian buatan subjek.',
        'Observasi pasif tanpa alat rekam/lembar catatan terstruktur sehingga data hilang terlupa.'
      ],
      compare: {
        headers: ['Elemen Observasi', 'Deskripsi Menurut Modul RTI'],
        rows: [
          ['Arrangements', 'Pengaturan logistik tempat, waktu, dan skenario pengamatan'],
          ['Recording', 'Pencatatan data sistematis (video, audio, lembar checklist)'],
          ['Participation', 'Peran peneliti (apakah menjadi pengamat pasif atau terlibat aktif)'],
          ['Hawthorne Effect', 'Perubahan perilaku subjek karena sadar sedang diamati']
        ]
      },
      memorize: {
        title: '4 Hal yang Wajib Diperhatikan dalam Observasi',
        items: [
          '1. Arrangements (Pengaturan logistik & kondisi observasi).',
          '2. Recording (Perekaman data akurat & objektif).',
          '3. Participation (Tingkat partisipasi peneliti di lapangan).',
          '4. Hawthorne Effect (Bias perubahan perilaku karena merasa diamati).'
        ],
        ordered: false
      },
      sourceNote: 'Slide Modul 6 mencantumkan istilah Hawthorne Effect sebagai hal yang perlu diperhatikan dalam observasi.',
      miniQuiz: [
        {
          id: 'q-m6-11-1',
          type: 'single',
          prompt: 'Perubahan perilaku subjek penelitian yang menjadi lebih rajin atau lebih teliti semata-mata karena mereka menyadari sedang diamati oleh peneliti dikenal sebagai:',
          options: ['Placebo Effect', 'Hawthorne Effect', 'Halo Effect', 'Butterfly Effect'],
          answer: 1,
          explanation: 'Hawthorne Effect adalah istilah ilmiah untuk perubahan perilaku subjek karena menyadari bahwa dirinya sedang menjadi objek pengamatan.',
          difficulty: 1,
          topicId: 'm6-observasi-hawthorne'
        }
      ],
      tags: ['Observasi', 'Hawthorne Effect', 'Bias Riset'],
      glossaryTerms: ['observasi', 'hawthorne-effect']
    },
    {
      id: 'm6-pertanyaan-efektif',
      moduleSlug: 'modul-6',
      slug: 'checklist-pertanyaan-efektif',
      title: 'Checklist Pertanyaan Kuesioner: Lakukan vs Hindari',
      order: 12,
      readingMinutes: 4,
      tldr: 'Pedoman kuesioner efektif: 9 aturan LAKUKAN dan 8 aturan HINDARI dari modul untuk mencegah kuesioner menyesatkan.',
      definition: 'Checklist pertanyaan efektif modul RTI membagi aturan penulisan item angket menjadi dua kolom tegas:\nLAKUKAN:\n1. Instruksi pengisian jelas.\n2. Struktur kalimat sederhana.\n3. Satu hal/gagasan pokok per pertanyaan (hindari double-barreled).\n4. Struktur paralel pada pilihan jawaban.\n5. Definisikan istilah teknis yang belum umum.\n6. Sebut periode waktu yang spesifik (misal: "dalam 1 bulan terakhir").\n7. Pilihan pertanyaan tertutup lengkap dan tidak tumpang tindih (mutually exclusive).\n8. Beri label setiap opsi dengan kata-kata jelas.\n9. Tanyakan jumlah kejadian jika sesuai; letakkan data pribadi/demografis di akhir kuesioner.\nHINDARI:\n1. Jargon atau frasa rumit.\n2. Pertanyaan berbentuk kalimat negatif ganda.\n3. Singkatan atau simbol yang tidak jelas maknanya.\n4. Memakai istilah berbeda untuk konsep yang sama.\n5. Kata bermuatan emosional atau menggiring opini (leading questions).\n6. Menggabungkan beberapa dimensi jawaban dalam satu pertanyaan.\n7. Memberi kesan mengharapkan jawaban tertentu.\n8. Melompat-lompat antar-topik/periode; grafis/font campuran tak perlu; lupa instruksi pengembalian.',
      explanation: 'Meletakkan data demografis (nama, usia, IPK) di akhir kuesioner sangat dianjurkan agar responden tidak merasa terintimidasi di awal dan dapat langsung masuk ke substansi pertanyaan utama.',
      example: {
        text: 'Koreksi item buruk:\n- Buruk (menggiring & double-barreled): "Tidakkah Anda setuju bahwa portal baru ini sangat hebat dan lebih cepat daripada portal lama yang buruk?"\n- Baik: "Kecepatan pencarian informasi pada portal baru memenuhi kebutuhan saya." (1=Sangat Tidak Setuju s/d 5=Sangat Setuju).',
        isFabricated: true
      },
      pitfalls: [
        'Membuat pertanyaan menggiring (leading question) yang memaksakan responden memilih jawaban positif.',
        'Meletakkan data demografis yang sensitif di halaman paling depan sehingga menurunkan minat responden.'
      ],
      compare: {
        headers: ['Aspek', 'Lakukan (Do)', 'Hindari (Don\'t)'],
        rows: [
          ['Struktur Kalimat', 'Sederhana, satu hal per butir', 'Menggabungkan beberapa dimensi (double-barreled)'],
          ['Bahasa', 'Definisikan istilah, struktur paralel', 'Jargon rumit, kalimat negatif, singkatan kabur'],
          ['Netralitas', 'Pilihan tertutup lengkap tidak tumpang tindih', 'Kata bermuatan emosi menggiring jawaban'],
          ['Urutan Halaman', 'Data demografis di letakkan di bagian AKHIR', 'Melompat antar-topik tanpa instruksi pengembalian']
        ]
      },
      memorize: {
        title: 'Aturan Emas Kuesioner (Hafalan Kilat)',
        items: [
          'Lakukan: 1 ide per butir, definisikan istilah, beri rentang waktu, data pribadi di AKHIR.',
          'Hindari: Leading question (menggiring), negatif ganda, jargon rumit, opsi tumpang tindih.'
        ],
        ordered: false
      },
      miniQuiz: [
        {
          id: 'q-m6-12-1',
          type: 'single',
          prompt: 'Menurut checklist pertanyaan efektif dalam slide Modul 6, di bagian manakah data pribadi / demografis responden sebaiknya diletakkan dalam kuesioner?',
          options: [
            'Di halaman paling awal sebagai syarat pembuka',
            'Di bagian akhir kuesioner',
            'Disebar acak di tengah-tengah pertanyaan substansi',
            'Tidak boleh ditanyakan sama sekali'
          ],
          answer: 1,
          explanation: 'Checklist modul secara tegas menyarankan: "letakkan data pribadi/demografis di akhir" untuk kenyamanan responden.',
          difficulty: 1,
          topicId: 'm6-pertanyaan-efektif'
        }
      ],
      tags: ['Checklist Kuesioner', 'Lakukan vs Hindari', 'Pertanyaan Efektif'],
      glossaryTerms: ['kuesioner-efektif', 'leading-question', 'double-barreled']
    },
    {
      id: 'm6-proses-survei',
      moduleSlug: 'modul-6',
      slug: 'tahapan-proses-survei-hart-burgess',
      title: 'Tahapan Proses Survei: Model Hart & Burgess',
      order: 13,
      readingMinutes: 4,
      tldr: 'Diagram Hart: Design → Develop questions → Test & train → Collect → Analyze. Burgess: 7 tahap. Pilot bukan pengganti survei utama! Saran tenggat: 7-10 hari dengan reminder.',
      definition: 'Dua model tahapan survei dalam modul:\n1. Diagram Hart (5 tahap): Design survey process → Develop questions → Test and train → Collect data → Analyze data.\n2. Model Burgess (7 tahap): Tujuan → Populasi/sampel → Cara pengumpulan data → Desain kuesioner → Uji coba (Pilot) → Main survey (survei utama) → Analisis.\nPeringatan penting modul:\n- Pilot (pretest/uji coba) bukan pengganti survei utama! Pilot berfungsi mereview, menguji, dan merevisi instrumen untuk memperbaiki response rate dan error rate.\n- Collect: Target data berguna, handal, valid. Modul mengutip saran tenggat pengembalian 7-10 hari dengan reminder beberapa hari sebelumnya.\n- Analyze: Pengolahan data sesuai variabel, dapat memakai software seperti SPSS, Minitab, atau SAS; visualisasi histogram frekuensi dan bar chart membantu kesimpulan. Software membantu pekerjaan, tidak menggantikan ketepatan variabel atau interpretasi.',
      explanation: 'Sebelum menyebarkan angket ke 300 mahasiswa, uji coba (pilot test) wajib dilakukan kepada 20-30 responden serupa untuk melihat apakah ada kata-kata yang membingungkan atau menimbulkan salah tafsir. Setelah diperbaiki, baru kuesioner disebarkan pada survei utama.',
      example: {
        text: 'Peneliti membuat draf kuesioner portal, melakukan pilot ke 25 mahasiswa, menemukan bahwa istilah "throughput" tidak dimengerti lalu menggantinya dengan "kecepatan unduh", menetapkan batas pengembalian 10 hari dan mengirim pesan pengingat di hari ke-5.',
        isFabricated: false
      },
      pitfalls: [
        'Menganggap hasil uji coba pilot sudah cukup sebagai data akhir survei utama.',
        'Memberi tenggat pengumpulan kuesioner tanpa tindak lanjut (follow-up reminder).'
      ],
      memorize: {
        title: '5 Tahap Survei Diagram Hart (Wajib Hafal)',
        items: [
          '1. Design survey process (Rancang proses & populasi target)',
          '2. Develop questions (Susun butir pertanyaan)',
          '3. Test and train (Uji coba pilot & review-test-revise)',
          '4. Collect data (Pengumpulan data, batas 7-10 hari + reminder)',
          '5. Analyze data (Analisis statistik, histogram, bar chart)'
        ],
        ordered: true
      },
      sourceNote: 'Saran tenggat survei 7-10 hari dengan reminder dan software SPSS/Minitab/SAS adalah panduan spesifik modul RTI.',
      miniQuiz: [
        {
          id: 'q-m6-13-1',
          type: 'single',
          prompt: 'Berapa hari saran tenggat waktu pengembalian kuesioner survei yang dikutip dalam slide Modul 6?',
          options: ['1 - 2 hari', '7 - 10 hari dengan reminder', '30 hari tanpa pengingat', 'Bebas seumur hidup'],
          answer: 1,
          explanation: 'Slide 60 Modul 6 mengutip saran tenggat 7-10 hari dengan pengingat (reminder) beberapa hari sebelumnya.',
          difficulty: 1,
          topicId: 'm6-proses-survei'
        }
      ],
      tags: ['Proses Survei', 'Model Hart', 'Pilot Test', 'Tenggat Waktu'],
      glossaryTerms: ['proses-survei', 'pilot-test', 'response-rate']
    },
    {
      id: 'm6-reliabilitas-validitas',
      moduleSlug: 'modul-6',
      slug: 'reliabilitas-validitas-dan-dimensi-kualitas',
      title: 'Reliabilitas vs Validitas & Dimensi Kualitas Perangkat Lunak',
      order: 14,
      readingMinutes: 5,
      tldr: 'Reliabilitas = konsistensi pengukuran ulang; Validitas = ketepatan mengukur apa yang semestinya diukur. Dimensi kualitas: FURPS+ (Bob Grady), ISO 9126 modul, Bob Hayes.',
      definition: 'Definisi kunci modul:\n- Reliability (Kehandalan): Pengukuran berulang atas sifat yang sama memberikan hasil yang sama (konsisten).\n- Validity (Kesahihan): Pertanyaan atau instrumen benar-benar mengukur hal yang semestinya diukur.\nPeringatan penting modul: Konsistensi saja tidak menjamin ketepatan konstruk! Jangan pernah menukar kedua definisi ini!\nDimensi Kualitas yang dikutip modul:\n1. Bob Grady: Model FURPS+ (Functionality, Usability, Reliability, Performance, Support).\n2. ISO 9126 (menurut modul): Usability, Reliability, Efficiency, Reusability, Maintainability, Portability, Testability.\n3. Bob Hayes (Customer Satisfaction Requirements): Availability, Responsiveness, Timeliness, Completeness, Professionalism.\nPeringatan penting modul: Jangan memasukkan semua dimensi tanpa alasan! Pilih hanya dimensi kualitas yang relevan dengan tujuan riset.',
      explanation: 'Analogi buatan: Menimbang badan di timbangan yang rusak. Setiap Anda naik ke timbangan, jarum selalu menunjuk angka 70 kg dengan sangat konsisten (Reliable). Namun berat badan Anda yang sebenarnya adalah 60 kg (timbangan tidak Valid). Konsisten tidak berarti benar!',
      example: {
        text: 'Item kuesioner tentang kemudahan pencarian portal perlu mengukur kemudahan, bukan sekadar warna favorit antarmuka. Jawaban yang stabil tetapi mengukur warna tidak memenuhi tujuan validitas kemudahan.',
        isFabricated: false
      },
      pitfalls: [
        'Menukar definisi reliabilitas (kehandalan/konsistensi) dengan validitas (ketepatan/akurasi alat ukur).',
        'Memasukkan seluruh 7 dimensi ISO 9126 ke dalam kuesioner padahal penelitian hanya berfokus pada Usability.'
      ],
      compare: {
        headers: ['Dimensi', 'Reliability (Reliabilitas)', 'Validity (Validitas)'],
        rows: [
          ['Definisi Pokok', 'Hasil pengukuran berulang tetap konsisten', 'Instrumen tepat mengukur variabel yang semestinya diukur'],
          ['Fokus Utama', 'Konsistensi dan kehandalan internal', 'Ketepatan konstruk dan relevansi target'],
          ['Uji Pembuktian', 'Cronbach Alpha, KR-20, Split-Half', 'Validitas konstruk (korelasi Pearson item-total), expert judgment']
        ]
      },
      memorize: {
        title: '3 Model Dimensi Kualitas Perangkat Lunak',
        items: [
          'Bob Grady (FURPS+): Functionality, Usability, Reliability, Performance, Support.',
          'ISO 9126 (versi modul): Usability, Reliability, Efficiency, Reusability, Maintainability, Portability, Testability.',
          'Bob Hayes: Availability, Responsiveness, Timeliness, Completeness, Professionalism.',
          'Prinsip: Pilih hanya dimensi yang relevan, jangan masukkan semuanya tanpa alasan!'
        ],
        ordered: false
      },
      miniQuiz: [
        {
          id: 'q-m6-14-1',
          type: 'single',
          prompt: 'Akronim FURPS+ yang diperkenalkan oleh Bob Grady untuk kebutuhan kualitas pelanggan mencakup lima dimensi utama yaitu:',
          options: [
            'Fast, Useful, Robust, Pretty, Simple',
            'Functionality, Usability, Reliability, Performance, Support',
            'Framework, Unit, Release, Package, Server',
            'File, User, Record, Password, Security'
          ],
          answer: 1,
          explanation: 'Bob Grady merumuskan model FURPS+: Functionality, Usability, Reliability, Performance, dan Support.',
          difficulty: 1,
          topicId: 'm6-reliabilitas-validitas'
        }
      ],
      tags: ['Reliabilitas', 'Validitas', 'FURPS+', 'ISO 9126', 'Bob Hayes'],
      glossaryTerms: ['reliabilitas', 'validitas', 'furps', 'iso-9126', 'bob-hayes']
    },
    {
      id: 'm6-rumus-reliabilitas',
      moduleSlug: 'modul-6',
      slug: 'rumus-uji-reliabilitas-lengkap',
      title: '3 Rumus Uji Reliabilitas: Split-Half, KR-20, Cronbach Alpha',
      order: 15,
      readingMinutes: 6,
      tldr: 'Split-Half (koreksi Spearman-Brown: ρ=2r/(1+r)), KR-20 (item dikotomi 1/0), Cronbach Alpha (Likert/skor bertingkat). Lengkap rumus, notasi, dan contoh hitung angka slide!',
      definition: 'Tiga rumus pokok uji reliabilitas instrumen dalam modul:\n\n1. Split-Half + Koreksi Spearman-Brown:\n- Membagi instrumen menjadi dua belahan (misal item ganjil vs genap), menghitung korelasi dua belahan (r), lalu mengoreksinya dengan formula Spearman-Brown:\n  ρ = 2r / (1 + r)\n- Contoh modul: Jika korelasi dua belahan r = 0,60, maka reliabilitas terkoreksi tes penuh adalah:\n  ρ = (2 × 0,60) / (1 + 0,60) = 1,20 / 1,60 = 0,75.\n\n2. Kuder-Richardson Formula 20 (KR-20):\n- Menguji internal consistency pada item dikotomi (benar = 1, salah = 0).\n- Rumus: ρKR20 = [k / (k - 1)] × [1 - Σ(pj × qj) / σ²]\n- Notasi: k = jumlah item; pj = proporsi responden yang menjawab benar pada item j; qj = 1 - pj; σ² = varians total skor.\n- Contoh buatan: k = 5, Σpjqj = 1, σ² = 2:\n  ρ = (5/4) × (1 - 1/2) = 1,25 × 0,5 = 0,625.\n\n3. Cronbach’s Alpha:\n- Rata-rata koefisien corrected split-half pada seluruh kombinasi belahan; dipakai untuk nilai parsial dan kuesioner skala Likert.\n- Rumus: α = [k / (k - 1)] × [1 - Σvar(xj) / var(x0)]\n- Notasi: k = jumlah item; var(xj) = varians skor item ke-j; var(x0) = varians skor total.\n- Contoh buatan: k = 4, jumlah varians item Σvar(xj) = 2, varians skor total var(x0) = 5:\n  α = (4/3) × (1 - 2/5) = (4/3) × (3/5) = 4/5 = 0,80.\n\nCatatan penting modul: Alpha menguji reliabilitas (konsistensi internal), bukan bukti tunggal validitas konstruk!',
      explanation: 'Panduan pemilihan rumus di skripsi TI:\n- Jika instrumen berupa tes pilihan ganda dengan kunci jawaban Benar/Salah (skor 1 atau 0) → Gunakan KR-20.\n- Jika instrumen berupa angket skala Likert (skor bergradasi 1, 2, 3, 4, 5) → Gunakan Cronbach Alpha.\n- Jika ingin membagi tes menjadi dua kelompok ganjil-genap secara manual → Gunakan Split-Half dengan Spearman-Brown.',
      example: {
        text: 'Kuesioner portal kampus memiliki 4 butir pernyataan Likert (k=4). Total varians item adalah 2, dan varians skor total seluruh responden adalah 5. Menghitung alpha: (4/3) * (1 - 2/5) = 1,333 * 0,6 = 0,80 (Reliabilitas Sangat Tinggi).',
        isFabricated: false
      },
      pitfalls: [
        'Menggunakan KR-20 untuk kuesioner skala Likert (KR-20 hanya khusus untuk item dikotomi benar=1/salah=0).',
        'Mengasumsikan koefisien Cronbach alpha yang tinggi (misal 0,85) otomatis membuktikan bahwa pertanyaan kuesioner sudah valid (alpha hanya mengukur reliabilitas, bukan validitas konstruk).',
        'Lupa menerapkan koreksi Spearman-Brown pada uji split-half (korelasi r belahan baru mencerminkan setengah tes, bukan tes penuh).'
      ],
      compare: {
        headers: ['Metode Uji', 'Jenis Data Item', 'Rumus Pokok', 'Kunci Karakteristik'],
        rows: [
          ['Spearman-Brown', 'Belahan tes (ganjil-genap)', 'ρ = 2r / (1 + r)', 'Mengoreksi korelasi separuh tes menjadi tes penuh'],
          ['KR-20', 'Item dikotomi (benar=1, salah=0)', 'ρ = [k/(k-1)] × [1 - Σpq/σ²]', 'Khusus data biner dua nilai'],
          ['Cronbach Alpha', 'Item Likert / nilai bertingkat', 'α = [k/(k-1)] × [1 - Σvar(item)/var(total)]', 'Rata-rata split-half seluruh kombinasi']
        ]
      },
      memorize: {
        title: '3 Rumus & Contoh Angka Modul',
        items: [
          'Spearman-Brown: ρ = 2r / (1+r) → contoh r=0,60 menghasilkan ρ = 0,75.',
          'KR-20: ρ = [k/(k-1)] × [1 - Σpq/σ²] → contoh k=5, Σpq=1, σ²=2 menghasilkan 0,625.',
          'Cronbach Alpha: α = [k/(k-1)] × [1 - Σvar(j)/var(total)] → contoh k=4, Σvar=2, total=5 menghasilkan 0,80.',
          'Ingat: Alpha = Uji reliabilitas, bukan bukti tunggal validitas!'
        ],
        ordered: true
      },
      miniQuiz: [
        {
          id: 'q-m6-15-1',
          type: 'single',
          prompt: 'Jika korelasi antara dua belahan instrumen (ganjil-genap) adalah r = 0,60, berapakah koefisien reliabilitas tes penuh setelah dihitung dengan koreksi Spearman-Brown?',
          options: ['0,60', '0,75', '0,80', '1,20'],
          answer: 1,
          explanation: 'Rumus Spearman-Brown: 2r / (1 + r) = (2 * 0,60) / (1 + 0,60) = 1,20 / 1,60 = 0,75.',
          difficulty: 1,
          topicId: 'm6-rumus-reliabilitas'
        }
      ],
      tags: ['Rumus Reliabilitas', 'Spearman Brown', 'KR-20', 'Cronbach Alpha'],
      glossaryTerms: ['spearman-brown', 'kr-20', 'cronbach-alpha', 'split-half']
    }
  ]
};
