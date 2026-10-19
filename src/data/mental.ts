export const burnoutItems: string[] = [
  'Aku merasa lelah secara fisik atau mental bahkan setelah tidur cukup.',
  'Aku kehilangan minat pada skripsi yang dulu terasa menarik.',
  'Aku merasa skripsi ini tidak ada artinya atau tidak akan selesai.',
  'Aku mudah marah atau tersinggung, terutama saat membahas skripsi.',
  'Aku sulit berkonsentrasi lebih dari beberapa menit saat menulis atau membaca.',
  'Aku menghindari bimbingan, pesan dosen, atau orang yang menanyakan progres.',
  'Pola tidur atau makanku berantakan sejak mengerjakan skripsi.',
  'Aku merasa sendirian dan tidak ada yang paham beban yang kutanggung.',
  'Aku sering sakit kepala, nyeri otot, atau gangguan perut tanpa sebab jelas.',
  'Aku mengkritik diri sendiri dengan keras karena progresku lambat.'
];

export const burnoutScale = ['Tidak pernah', 'Kadang-kadang', 'Sering', 'Hampir selalu'];

export interface BurnoutLevel {
  max: number;
  label: string;
  tone: 'good' | 'warn' | 'bad';
  desc: string;
  langkah: string[];
}

export const burnoutLevels: BurnoutLevel[] = [
  {
    max: 9,
    label: 'Rendah',
    tone: 'good',
    desc: 'Kamu masih punya energi. Jaga ritme supaya tidak sampai terkuras.',
    langkah: ['Tetap sisakan waktu istirahat dan tidur yang cukup', 'Rayakan progres kecil', 'Bangun rutinitas menulis yang ringan tapi konsisten']
  },
  {
    max: 19,
    label: 'Sedang',
    tone: 'warn',
    desc: 'Ada tanda kelelahan. Ini saat yang tepat untuk mengatur ulang sebelum memburuk.',
    langkah: [
      'Kurangi target hari ini menjadi separuhnya dan selesaikan itu saja',
      'Jadwalkan satu hari penuh tanpa skripsi dalam seminggu',
      'Ceritakan kondisimu ke teman, keluarga, atau sesama pejuang skripsi',
      'Perbaiki tidur dan makan lebih dulu sebelum menambah jam kerja'
    ]
  },
  {
    max: 30,
    label: 'Tinggi',
    tone: 'bad',
    desc: 'Beban yang kamu rasakan berat. Ini bukan tanda kamu lemah; tubuh dan pikiranmu meminta jeda dan dukungan.',
    langkah: [
      'Bicara dengan konselor kampus atau tenaga profesional sesegera mungkin',
      'Beri tahu orang yang kamu percaya tentang kondisimu',
      'Jika perlu, bicarakan penyesuaian jadwal dengan pembimbing atau dosen wali',
      'Fokus pada kebutuhan dasar: tidur, makan, bergerak sedikit setiap hari',
      'Jika muncul pikiran menyakiti diri, segera hubungi layanan darurat atau orang terdekat'
    ]
  }
];

export const burnoutDisclaimer =
  'Ini bukan alat diagnosis. Hasilnya hanya gambaran kasar untuk membantumu mengenali kondisi. Jika kamu merasa tidak baik-baik saja, bicaralah dengan konselor atau tenaga kesehatan jiwa.';

export const supportResources: { nama: string; isi: string }[] = [
  { nama: 'Layanan konseling kampus', isi: 'Hampir semua kampus punya unit konseling mahasiswa. Biasanya gratis dan rahasia. Tanyakan ke bagian kemahasiswaan atau fakultas.' },
  { nama: 'Layanan kesehatan jiwa nasional', isi: 'Kementerian Kesehatan menyediakan layanan konsultasi kesehatan jiwa lewat 119 ekstensi 8. Periksa informasi terbaru dan jam layanan sebelum menghubungi.' },
  { nama: 'Keadaan darurat', isi: 'Jika kamu berada dalam bahaya atau memiliki pikiran untuk menyakiti diri, hubungi layanan darurat setempat atau datang ke IGD terdekat, dan beri tahu orang terdekat sekarang juga.' }
];

export interface ProcrastinationType {
  id: string;
  nama: string;
  tanda: string;
  akar: string;
  langkah: string[];
}

export const procrastinationTypes: ProcrastinationType[] = [
  {
    id: 'perfeksionis',
    nama: 'Perfeksionis',
    tanda: 'Menulis satu kalimat lalu menghapus, atau menunggu "mood" dan "ide sempurna" sebelum mulai.',
    akar: 'Takut hasil jelek, sehingga lebih aman tidak memulai.',
    langkah: ['Tulis draf jelek dulu (ugly first draft) dan beri label "DRAF 0"', 'Pasang batas waktu 20 menit tanpa menghapus apa pun', 'Pisahkan sesi menulis dan sesi menyunting']
  },
  {
    id: 'takut-dinilai',
    nama: 'Takut dinilai',
    tanda: 'Menunda mengirim draf ke dosen walaupun sudah ada, atau menghindari bimbingan.',
    akar: 'Takut dikritik atau dianggap tidak mampu.',
    langkah: ['Kirim draf yang "cukup" lebih awal; revisi adalah bagian normal', 'Siapkan 2–3 pertanyaan spesifik untuk dosen agar bimbingan terarah', 'Ingat: kritik ditujukan pada naskah, bukan pada dirimu']
  },
  {
    id: 'kewalahan',
    nama: 'Kewalahan',
    tanda: 'Menatap dokumen kosong dan tidak tahu mulai dari mana, lalu membuka media sosial.',
    akar: 'Tugas terasa terlalu besar dan tidak terstruktur.',
    langkah: ['Pecah menjadi langkah 25 menit (satu paragraf, satu tabel, satu jurnal dibaca)', 'Tulis daftar 3 tugas terkecil untuk hari ini', 'Mulai dari bagian yang paling mudah, bukan yang paling berurutan']
  },
  {
    id: 'kehilangan-makna',
    nama: 'Kehilangan makna',
    tanda: 'Merasa skripsi hanya formalitas dan tidak peduli lagi.',
    akar: 'Jarak antara usaha hari ini dan hasil akhir terasa terlalu jauh.',
    langkah: ['Tuliskan alasanmu lulus dan taruh di tempat terlihat', 'Bagi target jadi kemenangan mingguan kecil dan rayakan', 'Cari satu bagian skripsi yang paling menarik bagimu dan mulai dari situ']
  },
  {
    id: 'distraksi',
    nama: 'Terdistraksi gawai',
    tanda: 'Mulai bekerja tetapi 5 menit kemudian sudah membuka ponsel.',
    akar: 'Lingkungan dan kebiasaan memicu pengalihan instan.',
    langkah: ['Letakkan ponsel di ruangan lain selama sesi fokus', 'Pakai mode fokus aplikasi ini (pomodoro 25 menit)', 'Tutup tab yang tidak perlu dan matikan notifikasi']
  }
];

export const techniques: { nama: string; isi: string }[] = [
  { nama: 'Aturan 2 menit', isi: 'Buka dokumen dan tulis satu kalimat. Tujuannya hanya memulai; seringkali kamu lanjut sendiri.' },
  { nama: 'Pomodoro', isi: '25 menit fokus, 5 menit istirahat. Setelah 4 putaran, istirahat 15–30 menit.' },
  { nama: 'Draf jelek dulu', isi: 'Izinkan tulisan pertama berantakan. Menyunting jauh lebih mudah daripada menulis dari kosong.' },
  { nama: 'Niat "jika–maka"', isi: '"Jika jam 19.00 dan aku sudah makan, maka aku buka laptop dan menulis 1 subbab." Detail waktu dan tempat mengurangi keputusan.' },
  { nama: 'Body doubling', isi: 'Bekerja bersama teman (di kafe, perpustakaan, atau panggilan video) tanpa harus mengerjakan hal yang sama.' },
  { nama: 'Satu hal besar per hari', isi: 'Tentukan satu tugas penting yang jika selesai membuat harimu terasa berhasil.' },
  { nama: 'Tutup sesi dengan catatan', isi: 'Akhiri tiap sesi dengan menulis langkah pertama untuk besok agar mulainya mudah.' }
];

export const motivationNotes: string[] = [
  'Skripsi bukan ujian kecerdasan. Ini ujian ketekunan merapikan proses, dan itu bisa dilatih.',
  'Kamu tidak perlu merasa siap untuk mulai. Perasaan siap biasanya datang setelah mulai.',
  'Draf yang buruk bisa diperbaiki. Halaman kosong tidak bisa.',
  'Progres 1% setiap hari lebih nyata daripada rencana 100% yang tidak pernah dimulai.',
  'Dosenmu membaca puluhan naskah. Naskahmu tidak perlu sempurna, hanya perlu cukup jelas untuk dikomentari.',
  'Membandingkan bab 1-mu dengan skripsi akhir orang lain itu tidak adil. Bandingkan dengan dirimu minggu lalu.',
  'Istirahat bukan kemalasan; itu bagian dari pekerjaan yang membuat otakmu mampu melanjutkan.',
  'Revisi bukan tanda kamu gagal. Revisi adalah cara kerja ilmu pengetahuan.',
  'Kamu bisa kecewa pada prosesnya dan tetap menyelesaikannya. Dua hal itu boleh ada bersamaan.',
  'Pekerjaan yang terasa menakutkan biasanya hanya belum dipecah cukup kecil.',
  'Tidak ada yang tahu semuanya saat mulai. Penelitian memang proses mencari tahu.',
  'Kalau hari ini hanya mampu menulis satu paragraf, itu satu paragraf lebih banyak dari kemarin.',
  'Tidak apa-apa meminta bantuan. Pembimbing, teman, dan layanan kampus ada untuk itu.',
  'Lulus lebih cepat tidak selalu lebih baik; lulus dengan sehat dan paham jauh lebih berharga.',
  'Rasa takut sebelum bimbingan itu wajar. Persiapkan tiga pertanyaan, dan rasa takutnya akan mengecil.',
  'Kamu pernah melewati hal sulit sebelumnya. Skripsi hanya satu lagi, dengan peta yang bisa dibuat.',
  'Jangan menunggu motivasi. Bangun kebiasaan kecil dan biarkan motivasi menyusul.',
  'Tanyakan pada dirimu: apa langkah terkecil yang bisa kulakukan dalam 10 menit?',
  'Skripsi yang selesai lebih baik daripada skripsi yang sempurna tetapi tidak pernah dikirim.',
  'Perasaan tertinggal dari teman itu nyata, tetapi lintasan setiap orang berbeda.',
  'Kamu boleh lelah. Kamu tidak harus berhenti; cukup melambat dan mengatur ulang.',
  'Sebuah target mingguan yang realistis mengalahkan target harian yang selalu gagal.',
  'Catat kemenangan kecil: satu jurnal terbaca, satu tabel jadi, satu pesan terkirim ke dosen.',
  'Setelah sidang, kebanyakan orang berkata: "ternyata tidak seseram bayanganku."'
];

export interface DifficultAdvisorScenario {
  id: string;
  judul: string;
  tanda: string;
  langkah: string[];
  pesan?: string;
}

export const difficultAdvisor: DifficultAdvisorScenario[] = [
  {
    id: 'susah-ditemui',
    judul: 'Dosen susah ditemui atau lambat membalas',
    tanda: 'Pesan tidak dibalas berhari-hari, jadwal berubah terus, atau bimbingan jarang terjadi.',
    langkah: [
      'Kirim pesan singkat, jelas, dan mudah dijawab (satu pertanyaan, dua opsi waktu)',
      'Lampirkan berkas langsung di pesan agar dosen bisa membaca kapan saja',
      'Tindak lanjuti dengan sopan setelah 3–4 hari kerja, lalu coba lewat jalur lain (email, admin prodi, datang ke ruangan di jam kerja)',
      'Dokumentasikan semua upayamu. Jika berlarut-larut, bicarakan dengan koordinator skripsi atau dosen wali'
    ],
    pesan: 'Selamat pagi Bapak/Ibu {dosen}. Mohon izin menindaklanjuti pesan saya tanggal {tanggal} mengenai bimbingan {bab}. Apakah Bapak/Ibu berkenan memberi waktu pada hari {opsi1} atau {opsi2}? Draf sudah saya lampirkan. Terima kasih banyak. {nama} ({nim})'
  },
  {
    id: 'revisi-berubah',
    judul: 'Revisi bolak-balik atau arahan berubah-ubah',
    tanda: 'Arahan minggu ini bertentangan dengan minggu lalu, atau revisi tak ada habisnya.',
    langkah: [
      'Catat setiap arahan secara tertulis setelah bimbingan dan kirim ringkasan ke dosen untuk konfirmasi',
      'Tanyakan kriteria "cukup": "Apa yang masih perlu agar bab ini bisa di-ACC?"',
      'Minta contoh konkret atau referensi bila arahan masih kabur',
      'Jika dua pembimbing berbeda pendapat, minta keduanya duduk bersama atau tulis ringkasan perbedaan dan tanyakan mana yang diprioritaskan'
    ],
    pesan: 'Terima kasih atas bimbingan hari ini, Bapak/Ibu. Izin mengonfirmasi poin revisi yang saya catat: (1) {poin1}, (2) {poin2}. Apakah sudah sesuai? Jika sudah, kriteria apa lagi yang perlu terpenuhi agar {bab} dapat di-ACC? Terima kasih. {nama}'
  },
  {
    id: 'beda-pendapat',
    judul: 'Tidak sepaham dengan dosen',
    tanda: 'Kamu yakin pendekatanmu benar, tetapi dosen menginginkan hal lain.',
    langkah: [
      'Pahami dulu alasan dosen; tanyakan "apa kekhawatiran Bapak/Ibu?"',
      'Siapkan argumen dengan referensi, bukan perasaan',
      'Tawarkan kompromi: bandingkan dua opsi, atau uji coba kecil',
      'Ingat: pembimbing ikut bertanggung jawab atas naskah di sidang; pertimbangkan pengalamannya'
    ]
  },
  {
    id: 'komentar-menyakitkan',
    judul: 'Komentar tajam atau menyakitkan',
    tanda: 'Kata-kata dosen terasa merendahkan atau membuatmu ingin berhenti.',
    langkah: [
      'Tarik napas, pisahkan substansi kritik dari nada penyampaiannya',
      'Catat poin yang bisa diperbaiki dan abaikan sisanya untuk sementara',
      'Ceritakan ke teman atau konselor agar bebanmu tidak dipendam sendiri',
      'Jika komentar bersifat menghina pribadi atau melecehkan, laporkan ke unit layanan pengaduan kampus'
    ]
  },
  {
    id: 'ganti-topik',
    judul: 'Disuruh ganti topik di tengah jalan',
    tanda: 'Sudah mengerjakan banyak, tetapi dosen menyarankan ganti topik.',
    langkah: [
      'Minta alasan yang jelas dan tanyakan apakah topik bisa dipersempit atau diubah sebagian saja',
      'Selamatkan yang bisa dipakai: referensi, metode, dan tulisan lama sering masih berguna',
      'Buat jadwal pemulihan realistis untuk topik baru',
      'Jika alasannya tidak masuk akal, konsultasikan dengan koordinator skripsi'
    ]
  },
  {
    id: 'penguji-killer',
    judul: 'Menghadapi penguji yang "killer"',
    tanda: 'Penguji dikenal galak atau sering menjatuhkan mahasiswa.',
    langkah: [
      'Tanyakan ke kakak tingkat apa yang biasa ditanyakan penguji tersebut',
      'Latihan dengan bank pertanyaan sampai jawabanmu rapi dan tenang',
      'Saat sidang: jawab ringkas, jujur, dan jangan defensif',
      'Ingat, penguji galak biasanya ingin memastikan kamu benar-benar menguasai penelitianmu'
    ]
  },
  {
    id: 'dosen-menghilang',
    judul: 'Dosen sakit, cuti, atau menghilang',
    tanda: 'Pembimbing tidak bisa dihubungi dalam waktu lama.',
    langkah: [
      'Hubungi admin prodi untuk memastikan status dosen',
      'Ajukan penggantian atau pembimbing sementara ke koordinator skripsi',
      'Simpan bukti kontak yang sudah kamu lakukan'
    ]
  },
  {
    id: 'perilaku-tidak-pantas',
    judul: 'Perilaku tidak pantas atau pelecehan',
    tanda: 'Ajakan bertemu di luar urusan akademik, komentar bernada seksual, atau tekanan yang membuatmu tidak nyaman.',
    langkah: [
      'Kamu tidak salah dan tidak sendirian. Jangan menghadapinya sendiri',
      'Simpan bukti (tangkapan layar pesan, tanggal, saksi)',
      'Laporkan ke Satgas Pencegahan dan Penanganan Kekerasan Seksual (PPKS) kampus atau unit pengaduan terkait',
      'Cari pendamping: teman tepercaya, konselor kampus, atau lembaga bantuan hukum'
    ]
  }
];
