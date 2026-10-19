/**
 * Panduan penulisan per bab. Isi bersifat umum; tiap kampus punya format sendiri,
 * jadi mahasiswa harus mencocokkannya dengan buku pedoman fakultas.
 */

export interface Subbab {
  nama: string;
  isi: string;
  tips?: string;
}

export interface Chapter {
  id: string;
  nomor: string;
  judul: string;
  fungsi: string;
  /** perkiraan panjang umum (BUKAN aturan; cocokkan dengan panduan kampus) */
  panjang: string;
  subbab: Subbab[];
  kerangka: string;
  contoh?: { judul: string; teks: string }[];
  kesalahan: string[];
  checklist: string[];
  varian: { untuk: string; catatan: string }[];
}

export const chaptersBab: Chapter[] = [
  {
    id: 'bab-1',
    nomor: 'Bab 1',
    judul: 'Pendahuluan',
    fungsi:
      'Meyakinkan pembaca bahwa masalah yang kamu angkat nyata, penting, dan layak diteliti, lalu menyatakan dengan tegas apa yang akan kamu lakukan. Bab ini adalah "etalase" skripsi: penguji biasanya menilai kualitas keseluruhan dari seberapa tajam bab ini.',
    panjang: 'Umumnya 8–15 halaman',
    subbab: [
      {
        nama: '1.1 Latar Belakang Masalah',
        isi: 'Susun seperti corong: (1) kondisi umum atau ideal, (2) fenomena atau masalah nyata yang menyimpang dari kondisi ideal beserta data pendukung, (3) apa yang sudah dilakukan peneliti lain dan celah (research gap) yang tersisa, (4) mengapa penelitianmu perlu dilakukan di objek ini.',
        tips: 'Pakai angka dan sumber (BPS, laporan instansi, jurnal) di paragraf masalah, bukan opini pribadi. Satu paragraf satu gagasan.'
      },
      {
        nama: '1.2 Rumusan Masalah',
        isi: 'Pertanyaan penelitian yang akan dijawab. Satu rumusan memetakan ke satu tujuan, satu metode analisis, dan satu bagian kesimpulan.',
        tips: 'Hindari pertanyaan yang jawabannya hanya "ya/tidak". Gunakan "seberapa besar pengaruh...", "bagaimana...", "faktor apa saja...".'
      },
      {
        nama: '1.3 Tujuan Penelitian',
        isi: 'Pernyataan hasil yang ingin dicapai, paralel dengan rumusan masalah. Gunakan kata kerja operasional: menganalisis, mengidentifikasi, mengembangkan, menguji, mendeskripsikan.'
      },
      {
        nama: '1.4 Manfaat Penelitian',
        isi: 'Dua sisi: manfaat teoretis (kontribusi pada ilmu/teori) dan manfaat praktis (untuk siapa persisnya: sekolah X, UMKM Y, puskesmas Z).',
        tips: 'Hindari "bagi penulis" dan "bagi kampus" yang generik kecuali memang diminta.'
      },
      {
        nama: '1.5 Batasan Masalah / Ruang Lingkup',
        isi: 'Membatasi objek, lokasi, periode, dan variabel agar penelitian terfokus dan selesai tepat waktu. Beberapa kampus mewajibkan, sebagian tidak.'
      },
      {
        nama: '1.6 Sistematika Penulisan',
        isi: 'Ringkasan isi setiap bab dalam satu dua kalimat. Hanya jika diwajibkan panduan kampus.'
      }
    ],
    kerangka: `1.1 Latar Belakang
  P1  Kondisi umum/ideal tentang [topik] (sumber)
  P2  Fenomena/masalah di [objek] + data (angka, tahun, sumber)
  P3  Penyebab yang diduga + teori singkat
  P4  Penelitian terdahulu dan celahnya
  P5  Posisi penelitian ini + alasan memilih [objek]
1.2 Rumusan Masalah
  1) ...?
  2) ...?
1.3 Tujuan Penelitian
  1) Untuk menganalisis ...
  2) Untuk mengetahui ...
1.4 Manfaat
  Teoretis: ...
  Praktis : bagi [pihak spesifik], ...
1.5 Batasan Masalah
  1) Objek/lokasi: ...  2) Periode: ...  3) Variabel/fokus: ...`,
    contoh: [
      {
        judul: 'Contoh rumusan & tujuan yang selaras (kuantitatif)',
        teks:
          'Rumusan: (1) Seberapa besar pengaruh kualitas pelayanan terhadap kepuasan pelanggan Kafe X? (2) Seberapa besar pengaruh harga terhadap kepuasan pelanggan Kafe X?\nTujuan: (1) Menganalisis pengaruh kualitas pelayanan terhadap kepuasan pelanggan Kafe X. (2) Menganalisis pengaruh harga terhadap kepuasan pelanggan Kafe X.'
      },
      {
        judul: 'Contoh pembuka paragraf masalah yang kuat',
        teks:
          'Berdasarkan data [instansi] tahun [20XX], terdapat [angka]% [fenomena] di [lokasi], meningkat dari [angka]% pada tahun sebelumnya. Kondisi ini menunjukkan bahwa [masalah] belum teratasi meskipun [upaya yang sudah ada].'
      }
    ],
    kesalahan: [
      'Latar belakang berisi teori panjang atau sejarah umum tanpa data masalah yang spesifik.',
      'Rumusan masalah tidak selaras dengan judul, tujuan, dan metode.',
      'Tujuan penelitian hanya menyalin rumusan dengan mengubah tanda tanya menjadi titik.',
      'Manfaat terlalu umum dan bisa ditempel ke skripsi apa saja.',
      'Ruang lingkup terlalu luas sehingga tidak mungkin selesai dalam satu semester.'
    ],
    checklist: [
      'Ada data/fakta (angka + sumber) yang membuktikan masalahnya nyata',
      'Alur latar belakang mengerucut dari umum ke khusus',
      'Research gap atau alasan penelitian ini perlu dilakukan tertulis jelas',
      'Setiap rumusan masalah punya tujuan yang berpasangan',
      'Rumusan berupa pertanyaan terbuka (bukan ya/tidak)',
      'Manfaat menyebut pihak yang spesifik',
      'Batasan masalah realistis untuk waktu yang tersedia',
      'Istilah dan nama variabel konsisten dengan judul'
    ],
    varian: [
      { untuk: 'Kuantitatif', catatan: 'Rumusan berbentuk hubungan/pengaruh antar variabel. Hipotesis biasanya diletakkan di akhir Bab 2.' },
      { untuk: 'Kualitatif', catatan: 'Pakai fokus penelitian dan pertanyaan "bagaimana/mengapa". Latar belakang menekankan konteks dan fenomena, bukan variabel.' },
      { untuk: 'R&D / pengembangan', catatan: 'Tambahkan identifikasi kebutuhan, spesifikasi produk, dan asumsi pengembangan. Tujuan: menghasilkan produk yang valid, praktis, dan efektif.' },
      { untuk: 'PTK', catatan: 'Latar belakang berisi refleksi awal masalah di kelas beserta data awal (pra-siklus). Tujuan: meningkatkan [aspek] melalui [tindakan].' },
      { untuk: 'Hukum normatif', catatan: 'Tonjolkan isu hukum (kekosongan, konflik, atau ketidakjelasan norma). Rumusan umumnya "bagaimana pengaturan/penerapan/pertimbangan hakim...".' },
      { untuk: 'Informatika / sistem', catatan: 'Jelaskan masalah proses bisnis atau kinerja algoritma yang ada, lalu batasan sistem (fitur, platform, dataset).' }
    ]
  },
  {
    id: 'bab-2',
    nomor: 'Bab 2',
    judul: 'Tinjauan Pustaka / Landasan Teori',
    fungsi:
      'Membangun pondasi ilmiah: teori apa yang dipakai untuk memahami masalahmu, apa kata penelitian sebelumnya, dan bagaimana semuanya mengarah ke kerangka berpikir dan (jika ada) hipotesis penelitianmu.',
    panjang: 'Umumnya 15–30 halaman',
    subbab: [
      {
        nama: '2.1 Landasan Teori',
        isi: 'Uraikan teori/konsep setiap variabel atau fokus penelitian: definisi (dari beberapa ahli lalu disintesis), dimensi atau indikator, faktor yang mempengaruhi, dan hubungan antar konsep.',
        tips: 'Jangan menyalin definisi satu per satu. Bandingkan, lalu tulis definisi operasional yang kamu pakai dan alasannya.'
      },
      {
        nama: '2.2 Penelitian Terdahulu',
        isi: 'Rangkum 5 sampai 10 penelitian relevan (utamakan 5 tahun terakhir): peneliti dan tahun, topik, metode, hasil, serta persamaan dan perbedaan dengan penelitianmu. Tabel membantu.',
        tips: 'Kolom "perbedaan" itulah yang menunjukkan kebaruan (novelty) penelitianmu.'
      },
      {
        nama: '2.3 Kerangka Pemikiran / Konseptual',
        isi: 'Diagram yang menggambarkan hubungan antar variabel atau alur pemikiran, disertai penjelasan satu dua paragraf yang menghubungkan teori ke masalahmu.'
      },
      {
        nama: '2.4 Hipotesis (jika kuantitatif)',
        isi: 'Dugaan jawaban sementara yang dapat diuji, ditulis dalam bentuk H0 dan Ha, masing-masing didukung argumen teori atau penelitian terdahulu.'
      }
    ],
    kerangka: `2.1 Landasan Teori
  2.1.1 [Variabel/konsep 1]: definisi (sintesis), dimensi/indikator
  2.1.2 [Variabel/konsep 2]: definisi, dimensi/indikator
  2.1.3 Hubungan [konsep 1] dan [konsep 2]
2.2 Penelitian Terdahulu
  Tabel: No | Peneliti (Tahun) | Judul | Metode | Hasil | Perbedaan
2.3 Kerangka Pemikiran
  Gambar alur + penjelasan
2.4 Hipotesis
  H1: [X] berpengaruh positif terhadap [Y]  (didukung: [peneliti, tahun])`,
    contoh: [
      {
        judul: 'Contoh kalimat sintesis (bukan salin-tempel)',
        teks:
          'Kepuasan pelanggan didefinisikan sebagai perasaan senang atau kecewa setelah membandingkan kinerja produk dengan harapan (Kotler & Keller, 2016). Definisi ini sejalan dengan Oliver (2010) yang menekankan unsur evaluasi pasca-konsumsi. Dalam penelitian ini, kepuasan pelanggan diukur melalui tiga indikator: kesesuaian harapan, minat berkunjung kembali, dan kesediaan merekomendasikan.'
      }
    ],
    kesalahan: [
      'Mengumpulkan teori dari banyak buku tanpa disintesis sehingga terasa seperti potongan tempel.',
      'Teori yang dimuat tidak dipakai di pembahasan.',
      'Terlalu bergantung pada buku, sedikit jurnal; atau sumber yang sudah sangat lama tanpa alasan.',
      'Penelitian terdahulu hanya dirangkum tanpa menyebut perbedaan dengan penelitianmu.',
      'Hipotesis tanpa argumen pendukung.'
    ],
    checklist: [
      'Setiap variabel/konsep di judul punya subbab teori',
      'Definisi disintesis dan ada definisi yang kamu pilih',
      'Minimal 5 penelitian terdahulu relevan dengan perbedaan jelas',
      'Mayoritas sumber jurnal/buku yang kredibel dan relatif baru',
      'Kerangka pemikiran menggambarkan alur dari teori ke masalahmu',
      'Hipotesis (jika ada) selaras dengan rumusan masalah',
      'Semua kutipan ada di daftar pustaka'
    ],
    varian: [
      { untuk: 'Kualitatif', catatan: 'Teori berfungsi sebagai "kacamata" analisis, tidak selalu memuat hipotesis. Pilih teori inti dan pakai konsisten saat menganalisis temuan.' },
      { untuk: 'R&D', catatan: 'Tambahkan kajian produk sejenis, teori pengembangan (ADDIE/4D/Borg & Gall), dan kriteria kelayakan (validitas, kepraktisan, keefektifan).' },
      { untuk: 'PTK', catatan: 'Landasan teori memuat konsep tindakan (model/metode), aspek yang ditingkatkan, dan kerangka berpikir tindakan. Hipotesis tindakan opsional.' },
      { untuk: 'Hukum normatif', catatan: 'Bab 2 memuat kerangka konseptual dan teori hukum (kepastian, keadilan, kemanfaatan) serta tinjauan peraturan terkait; bisa bergabung dengan Bab 3 pembahasan.' },
      { untuk: 'Informatika / sistem', catatan: 'Tambahkan landasan teknologi (algoritma, framework, metode pengembangan) dan penelitian terkait yang membandingkan metode.' }
    ]
  },
  {
    id: 'bab-3',
    nomor: 'Bab 3',
    judul: 'Metode Penelitian',
    fungsi:
      'Menjelaskan secara rinci bagaimana penelitian dilakukan sehingga orang lain bisa menilai kelayakan dan mengulanginya. Bab ini adalah "resep"; kekuatan skripsi sangat bergantung padanya.',
    panjang: 'Umumnya 10–20 halaman',
    subbab: [
      { nama: '3.1 Jenis dan Desain Penelitian', isi: 'Pendekatan (kuantitatif/kualitatif/campuran/R&D/PTK), jenis (survei, eksperimen, studi kasus, dll.), dan alasan memilihnya. Sertakan skema desain bila ada (misal pretest–posttest).' },
      { nama: '3.2 Lokasi dan Waktu', isi: 'Tempat penelitian dan alasan pemilihannya, serta periode pelaksanaan.' },
      { nama: '3.3 Populasi dan Sampel', isi: 'Definisi populasi, teknik sampling (probability/nonprobability), rumus atau dasar penentuan jumlah sampel, dan kriteria inklusi/eksklusi. Untuk kualitatif: kriteria dan jumlah informan.', tips: 'Tampilkan perhitungannya (misal Slovin/Cochran) agar tidak dianggap menebak.' },
      { nama: '3.4 Variabel dan Definisi Operasional', isi: 'Daftar variabel, definisi operasional, indikator, dan skala ukur dalam bentuk tabel.' },
      { nama: '3.5 Teknik Pengumpulan Data dan Instrumen', isi: 'Cara memperoleh data (kuesioner, wawancara, observasi, dokumentasi, tes, pengujian laboratorium) dan instrumen yang dipakai beserta kisi-kisinya.' },
      { nama: '3.6 Uji Instrumen', isi: 'Validitas dan reliabilitas (kuantitatif) atau keabsahan data (kualitatif: triangulasi, member check, audit trail).' },
      { nama: '3.7 Teknik Analisis Data', isi: 'Langkah analisis dan uji statistik yang dipakai, termasuk uji asumsi dan taraf signifikansi. Untuk kualitatif: tahapan reduksi, penyajian, penarikan kesimpulan.', tips: 'Pilih uji statistik sebelum mengambil data. Gunakan Pemilih Uji Statistik di Toolkit.' }
    ],
    kerangka: `3.1 Jenis dan Desain Penelitian: [pendekatan], [desain], alasan
3.2 Lokasi dan Waktu: [tempat], [bulan–bulan]
3.3 Populasi dan Sampel
  Populasi: ...  Teknik: ...  Rumus: ...  Jumlah: ...
3.4 Variabel dan Definisi Operasional
  Tabel: Variabel | Definisi | Indikator | Skala
3.5 Pengumpulan Data dan Instrumen
3.6 Uji Instrumen (validitas, reliabilitas / keabsahan data)
3.7 Teknik Analisis Data
  Langkah 1 ... Langkah 2 ... (uji, taraf signifikansi, alat bantu)`,
    kesalahan: [
      'Metode tidak cocok dengan rumusan masalah (misal rumusan "pengaruh" tetapi analisisnya deskriptif).',
      'Jumlah sampel tidak punya dasar perhitungan.',
      'Instrumen tidak diuji sebelum dipakai.',
      'Teknik analisis tidak disebut atau hanya "dianalisis dengan SPSS".',
      'Menyalin Bab 3 skripsi lain tanpa menyesuaikan konteks.'
    ],
    checklist: [
      'Jenis dan desain penelitian disertai alasan',
      'Teknik sampling dan jumlah sampel punya dasar',
      'Setiap variabel punya definisi operasional dan indikator',
      'Instrumen dan kisi-kisinya dijelaskan',
      'Rencana uji validitas/reliabilitas (atau keabsahan data) jelas',
      'Teknik analisis menjawab tiap rumusan masalah',
      'Prosedur cukup rinci untuk diulang orang lain',
      'Aspek etika (persetujuan, kerahasiaan) disebut bila relevan'
    ],
    varian: [
      { untuk: 'Kualitatif', catatan: 'Jelaskan peran peneliti sebagai instrumen, pemilihan informan (purposive/snowball), teknik wawancara/observasi/dokumentasi, dan uji keabsahan (triangulasi, member check).' },
      { untuk: 'R&D', catatan: 'Uraikan model pengembangan, tahapan (analisis, desain, pengembangan, uji coba, evaluasi), subjek uji coba, instrumen validasi ahli, dan kriteria kelayakan.' },
      { untuk: 'PTK', catatan: 'Jelaskan siklus (perencanaan, tindakan, pengamatan, refleksi), subjek, indikator keberhasilan, dan teknik analisis deskriptif komparatif.' },
      { untuk: 'Hukum normatif', catatan: 'Sebut pendekatan (perundang-undangan, kasus, konseptual, perbandingan), jenis bahan hukum primer/sekunder/tersier, teknik pengumpulan, dan analisis (preskriptif/deskriptif).' },
      { untuk: 'Informatika / sistem', catatan: 'Pisahkan metode pengembangan (Waterfall/Agile/Prototyping), perancangan (UML, ERD), dan metode pengujian (blackbox, UAT, SUS) atau metrik evaluasi model (akurasi, F1, RMSE).' },
      { untuk: 'Eksperimen laboratorium', catatan: 'Tuliskan rancangan percobaan (RAL/RAK), kontrol, ulangan, alat dan bahan lengkap, prosedur langkah demi langkah, serta standar uji yang dirujuk.' }
    ]
  },
  {
    id: 'bab-4',
    nomor: 'Bab 4',
    judul: 'Hasil dan Pembahasan',
    fungsi:
      'Menyajikan temuan dan memaknainya. Hasil menjawab "apa yang ditemukan", pembahasan menjawab "mengapa begitu dan apa artinya" dengan membandingkan ke teori dan penelitian terdahulu.',
    panjang: 'Umumnya 15–30 halaman',
    subbab: [
      { nama: '4.1 Gambaran Umum Objek / Karakteristik Responden', isi: 'Profil singkat lokasi atau subjek dan deskripsi data (jumlah, rata-rata, sebaran) sebelum masuk ke analisis utama.' },
      { nama: '4.2 Hasil Penelitian', isi: 'Hasil analisis disusun mengikuti urutan rumusan masalah. Setiap hasil berisi tabel/grafik yang rapi dan narasi singkat yang menyebut angka kuncinya.', tips: 'Jangan menempel output mentah SPSS/Excel di badan teks; ringkas ke tabel dan taruh output lengkap di lampiran.' },
      { nama: '4.3 Pembahasan', isi: 'Interpretasi tiap hasil: apakah sesuai teori, sejalan atau berbeda dari penelitian terdahulu, dan alasan yang masuk akal. Hubungkan kembali ke masalah di Bab 1.' },
      { nama: '4.4 Keterbatasan Penelitian', isi: 'Hal yang membatasi kesimpulan (sampel, waktu, instrumen). Menyebutnya jujur justru menambah kredibilitas.' }
    ],
    kerangka: `4.1 Gambaran Umum / Karakteristik Responden
4.2 Hasil Penelitian
  4.2.1 [Hasil untuk rumusan 1]: tabel + narasi
  4.2.2 [Hasil untuk rumusan 2]: tabel + narasi
4.3 Pembahasan
  4.3.1 [Rumusan 1]: temuan → teori → penelitian terdahulu → alasan
  4.3.2 [Rumusan 2]: ...
4.4 Keterbatasan`,
    contoh: [
      {
        judul: 'Contoh pola kalimat pembahasan',
        teks:
          'Hasil uji t menunjukkan bahwa kualitas pelayanan berpengaruh signifikan terhadap kepuasan pelanggan (t = 3,42; p = 0,001). Temuan ini sejalan dengan teori ... (Kotler & Keller, 2016) dan mendukung penelitian [Penulis, tahun] yang menemukan ... Pengaruh tersebut dapat dijelaskan karena ... Namun, hasil ini berbeda dengan [Penulis, tahun] yang ... kemungkinan akibat perbedaan ...'
      }
    ],
    kesalahan: [
      'Pembahasan hanya mengulang isi tabel tanpa interpretasi.',
      'Tidak mengaitkan temuan dengan teori maupun penelitian terdahulu.',
      'Angka di teks tidak sama dengan angka di tabel.',
      'Menarik kesimpulan kausal dari data korelasional.',
      'Urutan tidak mengikuti rumusan masalah.'
    ],
    checklist: [
      'Setiap rumusan masalah punya hasil dan pembahasan',
      'Tabel/grafik bernomor, berjudul, dan disebut di teks',
      'Angka di teks cocok dengan tabel',
      'Pembahasan memuat minimal teori dan penelitian terdahulu',
      'Alasan temuan yang berbeda dari harapan dijelaskan',
      'Keterbatasan penelitian disebutkan',
      'Output lengkap ada di lampiran'
    ],
    varian: [
      { untuk: 'Kualitatif', catatan: 'Sajikan temuan berupa tema/kategori dengan kutipan informan (identitas disamarkan), lalu bahas dengan teori. Hasil dan pembahasan sering digabung per tema.' },
      { untuk: 'R&D', catatan: 'Sajikan tiap tahap: hasil analisis kebutuhan, desain awal, hasil validasi ahli, revisi, uji coba, dan produk akhir beserta skor kelayakan.' },
      { untuk: 'PTK', catatan: 'Sajikan data pra-siklus, siklus I, II (dst.), refleksi tiap siklus, dan perbandingan peningkatan terhadap indikator keberhasilan.' },
      { untuk: 'Hukum normatif', catatan: 'Bab ini disebut Pembahasan: analisis norma, penafsiran, dan argumentasi hukum atas tiap isu, bukan angka-angka.' },
      { untuk: 'Informatika / sistem', catatan: 'Sajikan hasil perancangan, implementasi (tangkapan layar), pengujian, dan evaluasi (tabel metrik, confusion matrix, skor UAT/SUS) beserta interpretasi.' }
    ]
  },
  {
    id: 'bab-5',
    nomor: 'Bab 5',
    judul: 'Kesimpulan dan Saran',
    fungsi: 'Menjawab rumusan masalah secara ringkas dan memberi rekomendasi yang berguna. Pembaca sering membaca bab ini lebih dulu, jadi harus bisa berdiri sendiri.',
    panjang: 'Umumnya 2–5 halaman',
    subbab: [
      { nama: '5.1 Kesimpulan', isi: 'Jawaban singkat untuk setiap rumusan masalah, berurutan, berdasarkan temuan. Jangan memuat data baru atau pembahasan ulang.', tips: 'Satu rumusan, satu kesimpulan. Kalau ada 3 rumusan, kesimpulan minimal 3 butir.' },
      { nama: '5.2 Saran', isi: 'Rekomendasi konkret: (a) praktis, untuk pihak yang spesifik dan (b) akademis, untuk penelitian selanjutnya (variabel, objek, metode yang bisa diperluas).' },
      { nama: '5.3 Keterbatasan (jika belum ada di Bab 4)', isi: 'Batasan yang perlu diketahui pembaca ketika menafsirkan hasil.' }
    ],
    kerangka: `5.1 Kesimpulan
  1) Berdasarkan hasil ..., [jawaban rumusan 1].
  2) ... [jawaban rumusan 2].
5.2 Saran
  1) Bagi [pihak]: ... (konkret, bisa dilakukan)
  2) Bagi peneliti selanjutnya: ...`,
    kesalahan: [
      'Kesimpulan memuat informasi atau angka baru yang tidak dibahas sebelumnya.',
      'Kesimpulan tidak menjawab rumusan masalah satu per satu.',
      'Saran terlalu umum ("perlu ditingkatkan") atau tidak berkaitan dengan temuan.',
      'Hanya menyarankan "penelitian selanjutnya diharapkan lebih baik".'
    ],
    checklist: [
      'Jumlah butir kesimpulan sama dengan jumlah rumusan masalah',
      'Kesimpulan bisa dibaca tanpa membuka bab lain',
      'Tidak ada data atau teori baru',
      'Saran spesifik: siapa, melakukan apa, mengapa',
      'Saran akademis menunjuk arah penelitian lanjutan yang jelas'
    ],
    varian: [
      { untuk: 'R&D', catatan: 'Tambahkan saran pemanfaatan, diseminasi, dan pengembangan produk lebih lanjut.' },
      { untuk: 'PTK', catatan: 'Kesimpulan menyatakan apakah indikator keberhasilan tercapai dan pada siklus berapa.' },
      { untuk: 'Hukum normatif', catatan: 'Saran dapat berupa rekomendasi perubahan norma atau penegakan hukum kepada pembentuk undang-undang atau aparat.' }
    ]
  },
  {
    id: 'pelengkap',
    nomor: 'Pelengkap',
    judul: 'Bagian Awal & Akhir Naskah',
    fungsi: 'Bagian administratif yang sering luput tetapi wajib: halaman formal di depan, dan daftar pustaka serta lampiran di belakang.',
    panjang: 'Mengikuti panduan kampus',
    subbab: [
      { nama: 'Halaman judul, pengesahan, pernyataan keaslian', isi: 'Format dan tanda tangan ditentukan kampus. Pernyataan keaslian menyatakan karyamu bebas plagiarisme.' },
      { nama: 'Abstrak (dan abstract)', isi: 'Ringkasan 150–250 kata: latar, tujuan, metode, hasil utama, kesimpulan, plus 3–5 kata kunci. Tulis paling akhir.' },
      { nama: 'Kata pengantar, daftar isi, tabel, gambar', isi: 'Buat otomatis dengan fitur heading dan caption di Word agar nomor halaman akurat.' },
      { nama: 'Daftar pustaka', isi: 'Semua sumber yang dikutip, urut abjad (APA/Harvard) atau urut kemunculan (IEEE/Vancouver). Setiap sitasi di teks harus ada di sini dan sebaliknya.' },
      { nama: 'Lampiran', isi: 'Kuesioner, pedoman wawancara, output analisis, surat izin, dokumentasi, dan data pendukung.' }
    ],
    kerangka: `Halaman judul → Pengesahan → Pernyataan keaslian → Abstrak/Abstract
→ Kata pengantar → Daftar isi/tabel/gambar → [Bab 1–5] → Daftar pustaka → Lampiran`,
    kesalahan: [
      'Daftar isi dan nomor halaman diketik manual sehingga tidak sinkron.',
      'Sumber di daftar pustaka tidak pernah dikutip di teks (atau sebaliknya).',
      'Abstrak ditulis di awal lalu tidak diperbarui setelah hasil final.'
    ],
    checklist: [
      'Halaman formal lengkap dan bertanda tangan',
      'Abstrak memuat latar, tujuan, metode, hasil, kesimpulan',
      'Daftar isi dibuat otomatis dan terbaru',
      'Daftar pustaka cocok dengan sitasi di teks',
      'Lampiran penting (instrumen, izin, output) tersedia'
    ],
    varian: []
  }
];

export const chaptersImrad: Chapter[] = [
  {
    id: 'imrad-abstrak',
    nomor: 'Abstrak',
    judul: 'Abstrak',
    fungsi: 'Ringkasan mandiri seluruh penelitian yang menjadi pintu masuk pembaca. Tulis paling akhir.',
    panjang: 'Umumnya 150–250 kata',
    subbab: [
      { nama: 'Latar & tujuan', isi: '1–2 kalimat: masalah dan tujuan penelitian.' },
      { nama: 'Metode', isi: '1–2 kalimat: desain, subjek/sampel, alat analisis.' },
      { nama: 'Hasil', isi: '2–3 kalimat: temuan utama dengan angka kuncinya.' },
      { nama: 'Simpulan & kata kunci', isi: '1 kalimat simpulan dan 3–5 kata kunci.' }
    ],
    kerangka: `[Latar & tujuan]. [Metode: desain, sampel, analisis]. [Hasil utama + angka]. [Simpulan/implikasi].
Kata kunci: ...; ...; ...`,
    kesalahan: ['Memuat sitasi atau singkatan yang belum dijelaskan.', 'Tidak menyebut hasil kuantitatif/temuan utama.', 'Terlalu panjang dan memuat latar belakang berlebihan.'],
    checklist: ['Memuat tujuan, metode, hasil, simpulan', 'Ada angka/temuan konkret', 'Tanpa sitasi', 'Kata kunci 3–5'],
    varian: []
  },
  {
    id: 'imrad-pendahuluan',
    nomor: 'I',
    judul: 'Pendahuluan (Introduction)',
    fungsi: 'Menjelaskan masalah, celah pengetahuan, dan tujuan penelitian dengan alur corong yang pendek dan tajam.',
    panjang: 'Umumnya 2–5 halaman',
    subbab: [
      { nama: 'Konteks & masalah', isi: 'Mengapa topik ini penting; data atau fakta pendukung.' },
      { nama: 'Tinjauan ringkas literatur & celah', isi: 'Apa yang sudah diketahui, apa yang belum, dan kebutuhan penelitian ini.' },
      { nama: 'Tujuan & hipotesis', isi: 'Pernyataan tujuan yang spesifik; hipotesis bila relevan.' }
    ],
    kerangka: `P1 Konteks umum → P2 Masalah spesifik + data → P3 Penelitian terdahulu & celah → P4 Tujuan (+ hipotesis)`,
    kesalahan: ['Terlalu panjang dan tidak mengerucut.', 'Tujuan tidak eksplisit.', 'Tidak ada celah yang menjustifikasi penelitian.'],
    checklist: ['Alur umum → khusus', 'Celah penelitian jelas', 'Tujuan/hipotesis eksplisit di akhir'],
    varian: []
  },
  {
    id: 'imrad-metode',
    nomor: 'M',
    judul: 'Metode (Methods)',
    fungsi: 'Resep yang cukup rinci agar penelitian dapat diulang orang lain.',
    panjang: 'Umumnya 2–6 halaman',
    subbab: [
      { nama: 'Desain & lokasi/waktu', isi: 'Jenis penelitian, rancangan percobaan, tempat, dan periode.' },
      { nama: 'Subjek/sampel atau bahan', isi: 'Populasi, jumlah sampel, kriteria; atau bahan dan spesifikasi.' },
      { nama: 'Alat & prosedur', isi: 'Langkah kerja berurutan, kondisi, instrumen, kalibrasi.' },
      { nama: 'Analisis data', isi: 'Uji statistik, perangkat lunak, taraf signifikansi.' }
    ],
    kerangka: `Desain → Subjek/Bahan → Alat → Prosedur (langkah 1..n) → Analisis data`,
    kesalahan: ['Prosedur terlalu ringkas sehingga tak bisa diulang.', 'Tidak menyebut uji statistik.', 'Mencampur hasil ke dalam bagian metode.'],
    checklist: ['Rancangan dan ulangan jelas', 'Alat/bahan lengkap dengan spesifikasi', 'Prosedur berurutan', 'Uji statistik dan taraf signifikansi disebut'],
    varian: []
  },
  {
    id: 'imrad-hasil',
    nomor: 'R',
    judul: 'Hasil (Results)',
    fungsi: 'Menyajikan temuan secara objektif tanpa tafsir panjang.',
    panjang: 'Umumnya 3–8 halaman',
    subbab: [
      { nama: 'Deskripsi data', isi: 'Karakteristik sampel dan statistik deskriptif.' },
      { nama: 'Hasil utama', isi: 'Tabel/gambar plus narasi pendek yang menyebut angka dan hasil uji.' }
    ],
    kerangka: `Deskripsi data → Hasil 1 (tabel/gambar + narasi) → Hasil 2 → ...`,
    kesalahan: ['Menafsirkan terlalu panjang di bagian hasil.', 'Tabel tanpa judul/satuan.', 'Data tidak sesuai metode yang dijanjikan.'],
    checklist: ['Urutan sesuai tujuan', 'Tabel/gambar bernomor dan disebut di teks', 'Uji statistik dilaporkan lengkap (nilai, p)'],
    varian: []
  },
  {
    id: 'imrad-pembahasan',
    nomor: 'D',
    judul: 'Pembahasan (Discussion)',
    fungsi: 'Menafsirkan hasil, membandingkannya dengan teori dan penelitian lain, dan menjelaskan implikasinya.',
    panjang: 'Umumnya 3–8 halaman',
    subbab: [
      { nama: 'Interpretasi', isi: 'Arti temuan dan alasan yang mungkin.' },
      { nama: 'Perbandingan literatur', isi: 'Sejalan atau berbeda dengan penelitian lain, dan sebabnya.' },
      { nama: 'Keterbatasan & implikasi', isi: 'Batasan penelitian dan manfaat praktis/teoretis.' }
    ],
    kerangka: `Temuan utama → interpretasi → perbandingan literatur → keterbatasan → implikasi`,
    kesalahan: ['Mengulang hasil tanpa tafsir.', 'Menggeneralisasi melebihi data.', 'Tidak menyebut keterbatasan.'],
    checklist: ['Setiap hasil utama dibahas', 'Ada perbandingan dengan literatur', 'Keterbatasan disebut', 'Implikasi jelas'],
    varian: []
  },
  {
    id: 'imrad-kesimpulan',
    nomor: 'K',
    judul: 'Kesimpulan & Saran',
    fungsi: 'Jawaban singkat atas tujuan penelitian dan rekomendasi.',
    panjang: 'Umumnya 0,5–1 halaman',
    subbab: [
      { nama: 'Kesimpulan', isi: 'Menjawab tujuan satu per satu, tanpa data baru.' },
      { nama: 'Saran', isi: 'Rekomendasi konkret untuk praktik dan penelitian lanjutan.' }
    ],
    kerangka: `Kesimpulan: 1) ... 2) ...  Saran: 1) ... 2) ...`,
    kesalahan: ['Menambah data baru.', 'Saran tidak spesifik.'],
    checklist: ['Menjawab semua tujuan', 'Saran konkret'],
    varian: []
  },
  {
    id: 'imrad-pustaka',
    nomor: 'DP',
    judul: 'Daftar Pustaka & Lampiran',
    fungsi: 'Seluruh sumber yang dikutip dan bahan pendukung.',
    panjang: 'Mengikuti jumlah sumber',
    subbab: [
      { nama: 'Daftar pustaka', isi: 'Konsisten dalam satu gaya (APA/Vancouver/IEEE/ACS) dan sesuai sitasi di teks.' },
      { nama: 'Lampiran', isi: 'Data mentah, output, instrumen, dokumentasi.' }
    ],
    kerangka: `Daftar Pustaka (satu gaya sitasi) → Lampiran 1..n`,
    kesalahan: ['Gaya sitasi campur aduk.', 'Sumber tak pernah dikutip.'],
    checklist: ['Satu gaya sitasi konsisten', 'Semua sitasi ada di daftar', 'Lampiran lengkap'],
    varian: []
  }
];

export const urutanMenulis: { langkah: string; alasan: string }[] = [
  { langkah: 'Bab 3 (rencana metode) dan kerangka Bab 1', alasan: 'Metode menentukan data yang kamu butuhkan; kerangka Bab 1 menjaga arah.' },
  { langkah: 'Bab 2 (landasan teori & penelitian terdahulu)', alasan: 'Dibaca sambil jalan; teori akan menentukan indikator dan pembahasan.' },
  { langkah: 'Lengkapi Bab 1 setelah teori mantap', alasan: 'Latar belakang lebih tajam setelah kamu paham literatur.' },
  { langkah: 'Bab 4 setelah data dianalisis', alasan: 'Tulis hasil saat analisis masih segar di kepala.' },
  { langkah: 'Bab 5, lalu abstrak, daftar isi, dan bagian pelengkap', alasan: 'Kesimpulan dan abstrak hanya bisa benar setelah semuanya final.' }
];

export function chaptersFor(struktur: 'bab15' | 'imrad'): Chapter[] {
  return struktur === 'imrad' ? chaptersImrad : chaptersBab;
}

export const allChapters: Chapter[] = [...chaptersBab, ...chaptersImrad];

export const chapterById = (id: string): Chapter | undefined => allChapters.find((c) => c.id === id);
