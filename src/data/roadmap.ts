import type { PhaseId } from './majors';
import type { Jalur, StatusId } from '../types/skripsi';

export interface PhaseDef {
  id: PhaseId;
  nama: string;
  /** Penanda semester pada jalur normal */
  semester: '5-6' | '7' | '8';
  ringkas: string;
  tujuan: string;
  langkah: string[];
  checklist: string[];
  kesalahanUmum: string;
  /** Bobot waktu (minggu) pada jalur normal */
  minggu: number;
  /** Halaman di aplikasi yang paling membantu pada fase ini */
  bantuan: { label: string; path: string }[];
}

export const phases: PhaseDef[] = [
  {
    id: 'eksplorasi',
    nama: 'Eksplorasi & persiapan',
    semester: '5-6',
    ringkas: 'Kenali minat, pelajari dasar riset, dan siapkan bekal sebelum mencari topik.',
    tujuan: 'Punya 3 area minat, paham dasar metodologi, dan tahu syarat administrasi skripsi di kampusmu.',
    langkah: [
      'Ikuti mata kuliah metodologi penelitian dengan serius; simpan contoh tugasnya karena akan terpakai untuk proposal.',
      'Baca 3 sampai 5 skripsi kakak tingkat dari jurusanmu (repositori kampus) untuk merasakan level, struktur, dan gaya tulisannya.',
      'Catat 3 area minat berdasarkan mata kuliah yang paling kamu nikmati atau masalah di sekitarmu yang mengusik.',
      'Cari tahu dosen dan bidang keahliannya (halaman profil dosen, Google Scholar, Sinta). Tandai 3 calon pembimbing.',
      'Pelajari syarat skripsi di buku panduan fakultas: SKS minimal, mata kuliah prasyarat, jadwal pengajuan judul.',
      'Mulai biasakan membaca jurnal dan menyimpan referensi di aplikasi pengelola sitasi.'
    ],
    checklist: [
      'Sudah membaca buku panduan skripsi fakultas',
      'Punya minimal 3 area minat tertulis',
      'Sudah membaca 3 skripsi kakak tingkat',
      'Sudah mencatat 3 calon dosen pembimbing',
      'Sudah mencoba pengelola referensi (Zotero/Mendeley/aplikasi ini)',
      'Memahami syarat administrasi (SKS, prasyarat, jadwal)'
    ],
    kesalahanUmum: 'Menunda sampai semester akhir baru mulai membaca. Eksplorasi 1 sampai 2 bulan lebih awal menghemat berbulan-bulan nanti.',
    minggu: 16,
    bantuan: [
      { label: 'Cari ide topik', path: '/topik' },
      { label: 'Materi metodologi', path: '/belajar' }
    ]
  },
  {
    id: 'topik',
    nama: 'Topik, judul & pembimbing',
    semester: '7',
    ringkas: 'Menyempitkan minat menjadi topik yang layak, lalu mengamankan judul dan dosen pembimbing.',
    tujuan: 'Judul yang disetujui, dosen pembimbing yang pasti, dan keyakinan bahwa topik bisa diselesaikan tepat waktu.',
    langkah: [
      'Ubah area minat menjadi 3 sampai 5 kandidat judul menggunakan generator ide dan rumus judul.',
      'Uji tiap kandidat dengan checklist kelayakan: data, waktu, biaya, dosen, alat, dan etika.',
      'Cari 3 sampai 5 jurnal terbaru tentang topikmu untuk memastikan ada celah penelitian (research gap) dan ada landasan teori.',
      'Temui calon pembimbing dengan membawa ringkasan satu halaman: masalah, tujuan, metode, dan data yang akan dipakai.',
      'Ajukan judul sesuai prosedur kampus (formulir, sistem akademik, atau sidang judul).',
      'Setelah judul disetujui, minta surat keputusan pembimbing dan catat jadwal serta cara bimbingan.'
    ],
    checklist: [
      'Punya minimal 3 kandidat judul',
      'Kandidat utama lolos checklist kelayakan',
      'Sudah ada ringkasan 1 halaman untuk calon pembimbing',
      'Sudah bertemu calon pembimbing',
      'Judul diajukan dan disetujui',
      'Surat penetapan pembimbing sudah diterima'
    ],
    kesalahanUmum: 'Memilih topik terlalu besar atau data yang ternyata sulit diakses. Cek ketersediaan data sebelum jatuh cinta pada sebuah judul.',
    minggu: 4,
    bantuan: [
      { label: 'Generator ide & kelayakan', path: '/topik' },
      { label: 'Pemeriksa judul', path: '/judul' },
      { label: 'Wizard metodologi', path: '/metodologi' }
    ]
  },
  {
    id: 'proposal',
    nama: 'Menulis proposal (Bab 1–3)',
    semester: '7',
    ringkas: 'Menyusun latar belakang, tinjauan pustaka, dan metode penelitian hingga disetujui pembimbing.',
    tujuan: 'Naskah proposal Bab 1 sampai 3 yang sudah di-ACC pembimbing dan siap diseminarkan.',
    langkah: [
      'Tulis kerangka Bab 1: latar belakang, rumusan masalah, tujuan, manfaat, dan batasan masalah. Kirim ke pembimbing dulu sebelum menulis panjang.',
      'Kumpulkan dan baca 15 sampai 30 referensi (utamakan jurnal 5 tahun terakhir) lalu susun Bab 2 dengan tema, bukan per penulis.',
      'Tentukan metode di Bab 3: desain, populasi dan sampel, instrumen, teknik pengumpulan data, dan teknik analisis.',
      'Pastikan rumusan masalah, tujuan, metode, dan analisis saling menjawab (aturan keselarasan).',
      'Jalankan bimbingan rutin, catat revisi di log bimbingan, dan kerjakan revisi sebelum pertemuan berikutnya.',
      'Cek plagiarisme dan format penulisan, lalu minta persetujuan maju seminar proposal.'
    ],
    checklist: [
      'Bab 1 selesai dan di-ACC kerangkanya',
      'Bab 2 memuat teori dan penelitian terdahulu relevan',
      'Bab 3 memuat desain, sampel, instrumen, dan analisis',
      'Rumusan masalah, tujuan, dan metode sudah selaras',
      'Daftar pustaka konsisten dengan sitasi di teks',
      'Cek kemiripan (plagiarisme) di bawah batas kampus',
      'Pembimbing menyetujui maju seminar proposal'
    ],
    kesalahanUmum: 'Menulis Bab 2 sebagai kumpulan salinan teori tanpa kaitan dengan masalahmu, dan Bab 3 yang tidak cocok dengan rumusan masalah.',
    minggu: 8,
    bantuan: [
      { label: 'Panduan Bab 1–3', path: '/bab' },
      { label: 'Log bimbingan', path: '/bimbingan' },
      { label: 'Pengelola referensi', path: '/referensi' }
    ]
  },
  {
    id: 'sempro',
    nama: 'Seminar proposal',
    semester: '7',
    ringkas: 'Mendaftar, mempresentasikan, dan merevisi proposal berdasarkan masukan penguji.',
    tujuan: 'Proposal dinyatakan layak dilanjutkan, revisi selesai, dan kamu boleh mengambil data.',
    langkah: [
      'Daftar seminar proposal sesuai ketentuan (berkas, jadwal, penguji) dan cetak sejumlah naskah yang diminta.',
      'Susun slide 10 sampai 12 halaman: latar masalah, tujuan, kajian pustaka ringkas, metode, rencana jadwal.',
      'Latihan presentasi dengan timer dan jawab bank pertanyaan penguji, termasuk di depan teman.',
      'Saat sempro, catat semua masukan penguji dengan rapi dan jangan membantah di tempat.',
      'Susun daftar revisi, selesaikan dalam batas waktu, lalu minta tanda tangan persetujuan revisi.'
    ],
    checklist: [
      'Berkas pendaftaran sempro lengkap',
      'Slide presentasi selesai dan dilatih minimal 2 kali',
      'Sudah menjawab latihan pertanyaan penguji',
      'Catatan masukan penguji tersimpan',
      'Revisi proposal selesai dan disetujui penguji',
      'Berita acara/lembar pengesahan sempro diterima'
    ],
    kesalahanUmum: 'Menganggap sempro hanya formalitas. Pertanyaan penguji di sini biasanya sama dengan pertanyaan sidang akhir.',
    minggu: 3,
    bantuan: [
      { label: 'Simulasi sempro', path: '/sidang' },
      { label: 'Template slide', path: '/sidang' }
    ]
  },
  {
    id: 'izin',
    nama: 'Perizinan & instrumen',
    semester: '8',
    ringkas: 'Mengurus izin, etik, dan menyiapkan serta menguji instrumen sebelum turun ke lapangan.',
    tujuan: 'Izin penelitian terbit dan instrumen sudah valid sehingga pengambilan data bisa dimulai.',
    langkah: [
      'Minta surat pengantar penelitian dari fakultas dan kirim ke lokasi penelitian dengan proposal ringkas.',
      'Susun instrumen final (kuesioner, pedoman wawancara, lembar observasi, atau rancangan eksperimen) sesuai revisi sempro.',
      'Validasi instrumen oleh ahli atau pembimbing bila diperlukan; lakukan uji coba kecil dan ukur validitas serta reliabilitas.',
      'Siapkan lembar persetujuan responden (informed consent) dan rencana menjaga kerahasiaan data.',
      'Buat jadwal pengumpulan data yang realistis dan siapkan cadangan bila responden sulit dijangkau.'
    ],
    checklist: [
      'Surat izin penelitian sudah terbit',
      'Instrumen final siap digunakan',
      'Validitas/reliabilitas instrumen sudah diuji',
      'Lembar persetujuan responden tersedia',
      'Jadwal pengumpulan data tersusun'
    ],
    kesalahanUmum: 'Mengurus izin setelah instrumen selesai. Izin sering memakan waktu paling lama, jadi ajukan paralel dengan revisi sempro.',
    minggu: 3,
    bantuan: [
      { label: 'Template surat & kuesioner', path: '/template' },
      { label: 'Kalkulator sampel', path: '/toolkit' }
    ]
  },
  {
    id: 'data',
    nama: 'Pengumpulan data / implementasi',
    semester: '8',
    ringkas: 'Mengambil data di lapangan, laboratorium, atau membangun dan menguji produk penelitian.',
    tujuan: 'Seluruh data mentah terkumpul lengkap, rapi, dan dapat ditelusuri.',
    langkah: [
      'Mulai pengumpulan data sesuai jadwal; lakukan pilot kecil untuk memastikan prosedur berjalan.',
      'Catat kendala dan penyimpangan dari rencana di jurnal lapangan karena akan dibahas di Bab 3/4.',
      'Simpan data mentah di dua tempat (laptop dan penyimpanan awan) dan jangan ubah data mentah.',
      'Pantau jumlah data harian/mingguan terhadap target sampel. Tambah upaya bila tertinggal.',
      'Konsultasikan progres ke pembimbing setiap 2 sampai 3 minggu agar arah tetap benar.'
    ],
    checklist: [
      'Pilot/uji awal berhasil',
      'Target jumlah data/sampel tercapai',
      'Data mentah tersimpan di 2 lokasi',
      'Jurnal lapangan/catatan kendala terisi',
      'Progres dilaporkan ke pembimbing'
    ],
    kesalahanUmum: 'Tidak mencadangkan data. Satu laptop rusak bisa menghapus pengumpulan data berminggu-minggu.',
    minggu: 6,
    bantuan: [
      { label: 'Tracker tugas', path: '/tracker' },
      { label: 'Mode fokus', path: '/fokus' }
    ]
  },
  {
    id: 'analisis',
    nama: 'Analisis data & Bab 4–5',
    semester: '8',
    ringkas: 'Mengolah data, menulis hasil dan pembahasan, serta menarik kesimpulan.',
    tujuan: 'Bab 4 (hasil dan pembahasan) dan Bab 5 (kesimpulan dan saran) rampung dan konsisten dengan rumusan masalah.',
    langkah: [
      'Bersihkan data dan lakukan uji asumsi atau pengodean data kualitatif sesuai rencana analisis di Bab 3.',
      'Jalankan analisis utama; simpan keluaran perangkat lunak (screenshot atau file) sebagai bukti.',
      'Tulis hasil secara runtut mengikuti urutan rumusan masalah: tabel/grafik, lalu interpretasi singkat.',
      'Bahas hasil dengan teori dan penelitian terdahulu: sesuai atau berbeda, dan mengapa.',
      'Tulis kesimpulan yang menjawab satu per satu rumusan masalah dan saran yang konkret serta dapat ditindaklanjuti.'
    ],
    checklist: [
      'Data bersih dan siap dianalisis',
      'Analisis utama selesai dan terdokumentasi',
      'Bab 4 memuat hasil + pembahasan terkait teori',
      'Bab 5 menjawab semua rumusan masalah',
      'Saran konkret dan dapat dilakukan',
      'Pembimbing memeriksa Bab 4–5'
    ],
    kesalahanUmum: 'Menulis kesimpulan yang memuat informasi baru atau tidak menjawab rumusan masalah, dan pembahasan yang hanya mengulang tabel.',
    minggu: 8,
    bantuan: [
      { label: 'Pemilih uji statistik', path: '/toolkit' },
      { label: 'Panduan Bab 4–5', path: '/bab' }
    ]
  },
  {
    id: 'final',
    nama: 'Finalisasi naskah & pra-sidang',
    semester: '8',
    ringkas: 'Merapikan seluruh naskah, mengecek format, dan mendaftar sidang akhir.',
    tujuan: 'Naskah lengkap di-ACC pembimbing, bebas masalah format/plagiarisme, dan terdaftar sidang.',
    langkah: [
      'Baca ulang seluruh naskah dari awal; samakan istilah, nomor tabel/gambar, dan daftar isi.',
      'Pastikan semua sitasi di teks ada di daftar pustaka dan sebaliknya.',
      'Tulis abstrak (Indonesia dan Inggris bila diwajibkan) dan kata kunci.',
      'Cek kemiripan (plagiarisme) dan format sesuai panduan fakultas (margin, spasi, penomoran).',
      'Minta ACC final pembimbing, lengkapi berkas administrasi sidang, dan daftar.'
    ],
    checklist: [
      'Seluruh bab konsisten dan tanpa typo besar',
      'Abstrak dan kata kunci selesai',
      'Daftar pustaka dan sitasi cocok',
      'Format sesuai panduan fakultas',
      'Hasil cek plagiarisme memenuhi batas',
      'ACC final pembimbing sudah ditandatangani',
      'Berkas pendaftaran sidang lengkap'
    ],
    kesalahanUmum: 'Mengirim naskah ke pembimbing tanpa membaca ulang sendiri, sehingga bimbingan terbuang untuk membetulkan hal remeh.',
    minggu: 3,
    bantuan: [
      { label: 'Checklist administrasi', path: '/administrasi' },
      { label: 'Format penulisan', path: '/format' }
    ]
  },
  {
    id: 'sidang',
    nama: 'Sidang akhir & revisi',
    semester: '8',
    ringkas: 'Mempertahankan penelitian di depan penguji, lalu menyelesaikan revisi.',
    tujuan: 'Lulus sidang dan semua revisi disetujui penguji serta pembimbing.',
    langkah: [
      'Susun slide sidang 15 sampai 20 halaman yang menonjolkan masalah, metode, temuan utama, dan kontribusi.',
      'Latihan simulasi sidang dengan bank pertanyaan penguji, minimal 3 kali dengan timer.',
      'Siapkan hari-H: berkas, pakaian, perangkat cadangan, dan datang lebih awal.',
      'Catat semua masukan penguji saat sidang; konfirmasi bila ada pertanyaan yang kurang jelas.',
      'Susun tabel revisi (halaman, masukan, perbaikan), selesaikan cepat, dan minta tanda tangan penguji.'
    ],
    checklist: [
      'Slide sidang selesai',
      'Simulasi sidang minimal 3 kali',
      'Perlengkapan hari-H siap',
      'Sidang dilaksanakan',
      'Tabel revisi tersusun',
      'Semua penguji menandatangani lembar revisi'
    ],
    kesalahanUmum: 'Menunda revisi karena lega setelah sidang. Revisi yang lambat menunda yudisium dan wisuda.',
    minggu: 3,
    bantuan: [
      { label: 'Simulasi sidang', path: '/sidang' },
      { label: 'Dukungan mental', path: '/mental' }
    ]
  },
  {
    id: 'wisuda',
    nama: 'Jilid, pengumpulan & wisuda',
    semester: '8',
    ringkas: 'Mencetak, mengumpulkan naskah final, melengkapi administrasi, hingga wisuda.',
    tujuan: 'Berkas lulus lengkap, naskah terkumpul di perpustakaan/repositori, dan terdaftar wisuda.',
    langkah: [
      'Cetak dan jilid naskah final sesuai jumlah dan warna sampul yang ditentukan.',
      'Unggah naskah ke repositori kampus bila diwajibkan dan kumpulkan berkas ke perpustakaan.',
      'Urus surat bebas pustaka, bebas tanggungan keuangan, dan syarat yudisium lain.',
      'Daftar wisuda, ukur toga, dan siapkan dokumen foto serta data ijazah.',
      'Rayakan! Lalu simpan salinan digital seluruh data penelitian.'
    ],
    checklist: [
      'Naskah dijilid dan dikumpulkan',
      'Unggah repositori (jika diwajibkan)',
      'Bebas pustaka dan keuangan',
      'Syarat yudisium terpenuhi',
      'Terdaftar wisuda'
    ],
    kesalahanUmum: 'Terlambat mengurus bebas pustaka/keuangan dan melewatkan batas pendaftaran wisuda periode terdekat.',
    minggu: 4,
    bantuan: [
      { label: 'Checklist administrasi', path: '/administrasi' }
    ]
  }
];

export const phaseById = (id: PhaseId): PhaseDef => phases.find((p) => p.id === id) as PhaseDef;

export interface StatusOption {
  id: StatusId;
  label: string;
  desc: string;
  fase: PhaseId;
}

export const statusOptions: StatusOption[] = [
  { id: 'belum-topik', label: 'Belum punya topik', desc: 'Masih bingung mau meneliti apa. Tenang, ini titik awal yang wajar.', fase: 'topik' },
  { id: 'punya-judul', label: 'Sudah punya judul', desc: 'Judul sudah ada atau disetujui, belum mulai menulis proposal.', fase: 'proposal' },
  { id: 'proposal', label: 'Sedang menulis proposal (Bab 1–3)', desc: 'Sedang menyusun Bab 1, 2, atau 3 dan bimbingan berjalan.', fase: 'proposal' },
  { id: 'sudah-sempro', label: 'Sudah sempro, siap lanjut', desc: 'Seminar proposal selesai; sedang revisi atau mengurus izin.', fase: 'izin' },
  { id: 'penelitian', label: 'Sedang pengumpulan data', desc: 'Sedang di lapangan, laboratorium, atau membangun produk penelitian.', fase: 'data' },
  { id: 'olah-data', label: 'Sedang olah data & Bab 4–5', desc: 'Data terkumpul; sedang analisis dan menulis hasil.', fase: 'analisis' },
  { id: 'menjelang-sidang', label: 'Menjelang sidang', desc: 'Naskah hampir lengkap; mengurus ACC dan pendaftaran sidang.', fase: 'final' },
  { id: 'revisi-akhir', label: 'Sudah sidang, tinggal revisi', desc: 'Sidang selesai; mengerjakan revisi dan administrasi akhir.', fase: 'sidang' }
];

export const statusById = (id: StatusId): StatusOption =>
  statusOptions.find((s) => s.id === id) ?? statusOptions[0];

export interface JalurInfo {
  id: Jalur;
  nama: string;
  ringkas: string;
  faktorWaktu: number;
  cocokUntuk: string[];
  risiko: string[];
  strategi: string[];
}

export const jalurInfo: Record<Jalur, JalurInfo> = {
  normal: {
    id: 'normal',
    nama: 'Jalur normal',
    ringkas: 'Mengikuti tempo wajar dengan ruang bernapas untuk revisi dan hal tak terduga.',
    faktorWaktu: 1,
    cocokUntuk: ['Punya waktu 1 sampai 2 semester', 'Aktivitas lain masih berjalan (kerja, organisasi)', 'Ingin kualitas dan kesehatan mental terjaga'],
    risiko: ['Bila terlalu santai, sering molor karena tidak ada tenggat internal'],
    strategi: ['Tetapkan tenggat internal tiap fase', 'Jadwalkan bimbingan rutin dua mingguan', 'Pakai target mingguan di Tracker']
  },
  kejar: {
    id: 'kejar',
    nama: 'Jalur kejar tayang',
    ringkas: 'Memadatkan fase agar selesai dalam satu semester atau kurang, dengan disiplin tinggi.',
    faktorWaktu: 0.65,
    cocokUntuk: ['Sudah punya topik/data jelas', 'Pembimbing responsif', 'Bisa menyisihkan 15 sampai 20 jam per minggu'],
    risiko: ['Kelelahan dan burnout', 'Kualitas turun bila fase dilewati', 'Tergantung pada kecepatan pembimbing dan penguji'],
    strategi: [
      'Pilih topik yang datanya sudah tersedia atau mudah diakses',
      'Kerjakan paralel: izin penelitian saat revisi sempro, tulis Bab 1–2 saat menunggu data',
      'Minta jadwal bimbingan mingguan dan kirim draft sebelum pertemuan',
      'Siapkan rencana cadangan bila data/responden tersendat',
      'Jangan korbankan tidur; jadwalkan jeda istirahat'
    ]
  },
  molor: {
    id: 'molor',
    nama: 'Jalur molor (pemulihan)',
    ringkas: 'Untuk yang sudah tertinggal. Fokus pada menata ulang, bukan menyalahkan diri.',
    faktorWaktu: 1.4,
    cocokUntuk: ['Sudah melewati semester 8 atau lebih', 'Pernah vakum atau berhenti menulis', 'Sedang bekerja sambil menyelesaikan skripsi'],
    risiko: ['Hilang momentum dan malu bertemu pembimbing', 'Batas masa studi (maksimal semester) terlewat', 'Topik atau data menjadi kedaluwarsa'],
    strategi: [
      'Cek batas masa studi dan aturan perpanjangan di bagian akademik',
      'Temui pembimbing apa adanya, bawa rencana pemulihan 4 minggu, bukan alasan',
      'Mulai dari tugas terkecil: 25 menit menulis per hari (pomodoro)',
      'Evaluasi topik: bila terlalu besar, kecilkan ruang lingkup atau ganti dengan yang lebih feasibel',
      'Cari teman akuntabilitas atau kelompok skripsi untuk saling mengingatkan',
      'Pertimbangkan bantuan konseling kampus bila ada hambatan psikologis'
    ]
  }
};

export const semesterGroups: { id: string; nama: string; ringkas: string; fase: PhaseId[] }[] = [
  { id: '5-6', nama: 'Semester 5–6 · Persiapan', ringkas: 'Membangun bekal: minat, bacaan, dan kenalan dengan calon pembimbing.', fase: ['eksplorasi'] },
  { id: '7', nama: 'Semester 7 · Proposal & sempro', ringkas: 'Menentukan topik, menulis Bab 1–3, dan seminar proposal.', fase: ['topik', 'proposal', 'sempro'] },
  { id: '8', nama: 'Semester 8 · Penelitian & sidang', ringkas: 'Mengambil data, menganalisis, sidang, hingga wisuda.', fase: ['izin', 'data', 'analisis', 'final', 'sidang', 'wisuda'] }
];
