export interface Istilah {
  term: string;
  english?: string;
  arti: string;
  kategori: 'Proses' | 'Metode' | 'Statistik' | 'Penulisan';
}

/** Istilah umum seputar skripsi dan penelitian (lintas jurusan). */
export const istilahList: Istilah[] = [
  { term: 'ACC', arti: 'Persetujuan dosen atas naskah atau tahapan (berasal dari kata "accord"). Dipakai sebagai syarat maju seminar atau sidang.', kategori: 'Proses' },
  { term: 'Sempro', english: 'Proposal seminar', arti: 'Seminar proposal: presentasi dan uji kelayakan rencana penelitian (Bab 1–3) di depan penguji.', kategori: 'Proses' },
  { term: 'Semhas', english: 'Results seminar', arti: 'Seminar hasil: presentasi hasil penelitian sebelum sidang akhir (ada di sebagian kampus).', kategori: 'Proses' },
  { term: 'Yudisium', arti: 'Rapat atau penetapan kelulusan mahasiswa setelah semua persyaratan akademik terpenuhi.', kategori: 'Proses' },
  { term: 'Revisi', arti: 'Perbaikan naskah berdasarkan masukan pembimbing atau penguji.', kategori: 'Proses' },
  { term: 'Pembimbing utama / pendamping', arti: 'Dosen yang mengarahkan penelitian; sebagian kampus memiliki dua pembimbing dengan peran berbeda.', kategori: 'Proses' },
  { term: 'Penguji', arti: 'Dosen yang menilai proposal atau skripsi saat seminar dan sidang.', kategori: 'Proses' },
  { term: 'Variabel', english: 'Variable', arti: 'Sesuatu yang nilainya bervariasi dan diukur dalam penelitian.', kategori: 'Metode' },
  { term: 'Variabel bebas (X)', english: 'Independent variable', arti: 'Variabel yang diduga memengaruhi variabel lain.', kategori: 'Metode' },
  { term: 'Variabel terikat (Y)', english: 'Dependent variable', arti: 'Variabel yang dipengaruhi oleh variabel bebas.', kategori: 'Metode' },
  { term: 'Variabel moderasi / mediasi', english: 'Moderating / mediating variable', arti: 'Moderasi mengubah kekuatan hubungan X–Y; mediasi menjelaskan mekanisme X memengaruhi Y.', kategori: 'Metode' },
  { term: 'Definisi operasional', english: 'Operational definition', arti: 'Penjelasan cara variabel diukur: indikator, instrumen, dan skala.', kategori: 'Metode' },
  { term: 'Populasi', english: 'Population', arti: 'Seluruh objek atau subjek yang menjadi cakupan generalisasi penelitian.', kategori: 'Metode' },
  { term: 'Sampel', english: 'Sample', arti: 'Bagian populasi yang benar-benar diteliti.', kategori: 'Metode' },
  { term: 'Purposive sampling', arti: 'Pemilihan sampel berdasarkan kriteria tertentu yang ditetapkan peneliti.', kategori: 'Metode' },
  { term: 'Hipotesis', english: 'Hypothesis', arti: 'Dugaan sementara yang dapat diuji.', kategori: 'Metode' },
  { term: 'Instrumen', english: 'Instrument', arti: 'Alat pengumpul data: kuesioner, pedoman wawancara, tes, lembar observasi, alat ukur.', kategori: 'Metode' },
  { term: 'Validitas', english: 'Validity', arti: 'Sejauh mana instrumen mengukur apa yang seharusnya diukur.', kategori: 'Metode' },
  { term: 'Reliabilitas', english: 'Reliability', arti: 'Konsistensi hasil pengukuran bila diulang.', kategori: 'Metode' },
  { term: 'Triangulasi', english: 'Triangulation', arti: 'Memeriksa keabsahan data kualitatif dengan banyak sumber, teknik, atau waktu.', kategori: 'Metode' },
  { term: 'Informan', english: 'Informant', arti: 'Narasumber kunci dalam penelitian kualitatif.', kategori: 'Metode' },
  { term: 'Research gap', arti: 'Celah pengetahuan yang belum dijawab penelitian sebelumnya dan menjadi alasan penelitianmu.', kategori: 'Metode' },
  { term: 'State of the art', arti: 'Perkembangan terkini suatu bidang atau topik penelitian.', kategori: 'Metode' },
  { term: 'Novelty', arti: 'Kebaruan atau keunikan kontribusi penelitian.', kategori: 'Metode' },
  { term: 'Deskriptif', arti: 'Analisis yang menggambarkan data (rata-rata, persentase, sebaran) tanpa menguji hipotesis.', kategori: 'Statistik' },
  { term: 'Inferensial', arti: 'Analisis untuk menyimpulkan populasi dari sampel melalui uji statistik.', kategori: 'Statistik' },
  { term: 'Nilai p (p-value)', arti: 'Peluang memperoleh hasil seekstrem data jika H0 benar. Umumnya p < 0,05 dianggap signifikan.', kategori: 'Statistik' },
  { term: 'Taraf signifikansi (α)', english: 'Significance level', arti: 'Batas kesalahan yang diterima saat menolak H0, umumnya 0,05.', kategori: 'Statistik' },
  { term: 'H0 dan Ha', arti: 'Hipotesis nol (tidak ada pengaruh/beda) dan hipotesis alternatif (ada pengaruh/beda).', kategori: 'Statistik' },
  { term: 'Normalitas', english: 'Normality', arti: 'Asumsi bahwa data berdistribusi normal; menentukan pilihan uji parametrik atau nonparametrik.', kategori: 'Statistik' },
  { term: 'Korelasi', english: 'Correlation', arti: 'Ukuran kekuatan dan arah hubungan dua variabel (−1 sampai +1). Bukan bukti sebab-akibat.', kategori: 'Statistik' },
  { term: 'Regresi', english: 'Regression', arti: 'Analisis untuk memprediksi atau menjelaskan pengaruh variabel bebas terhadap variabel terikat.', kategori: 'Statistik' },
  { term: 'Likert', english: 'Likert scale', arti: 'Skala jawaban bertingkat (misal 1 sangat tidak setuju sampai 5 sangat setuju).', kategori: 'Statistik' },
  { term: 'Cronbach Alpha', arti: 'Koefisien reliabilitas konsistensi internal untuk skala dengan banyak butir.', kategori: 'Statistik' },
  { term: 'Outlier', arti: 'Data pencilan yang jauh berbeda dari mayoritas data dan dapat mempengaruhi hasil.', kategori: 'Statistik' },
  { term: 'Kerangka pemikiran', english: 'Conceptual framework', arti: 'Alur logis yang menghubungkan teori dan variabel menuju hipotesis atau pertanyaan penelitian.', kategori: 'Penulisan' },
  { term: 'Sitasi', english: 'Citation', arti: 'Penyebutan sumber di dalam teks.', kategori: 'Penulisan' },
  { term: 'Daftar pustaka', english: 'References / bibliography', arti: 'Daftar lengkap semua sumber yang dikutip dalam naskah.', kategori: 'Penulisan' },
  { term: 'Parafrase', english: 'Paraphrase', arti: 'Menyampaikan ulang gagasan sumber dengan kalimat sendiri tanpa mengubah makna, tetap disertai sitasi.', kategori: 'Penulisan' },
  { term: 'Plagiarisme', english: 'Plagiarism', arti: 'Mengambil karya atau gagasan orang lain tanpa pengakuan yang semestinya.', kategori: 'Penulisan' },
  { term: 'Abstrak', english: 'Abstract', arti: 'Ringkasan singkat seluruh penelitian: tujuan, metode, hasil, kesimpulan.', kategori: 'Penulisan' },
  { term: 'Lampiran', english: 'Appendix', arti: 'Dokumen pendukung di akhir naskah: instrumen, output, surat izin, dokumentasi.', kategori: 'Penulisan' },
  { term: 'IMRAD', arti: 'Struktur Introduction, Methods, Results, and Discussion yang umum di artikel ilmiah dan sebagian skripsi sains.', kategori: 'Penulisan' },
  { term: 'Peer review', arti: 'Penelaahan naskah oleh pakar sejawat sebelum diterbitkan di jurnal.', kategori: 'Penulisan' },
  { term: 'DOI', english: 'Digital Object Identifier', arti: 'Pengenal unik permanen untuk artikel ilmiah; dipakai untuk membuat tautan sitasi.', kategori: 'Penulisan' },
  { term: 'Sinta', arti: 'Sistem pemeringkatan jurnal dan peneliti Indonesia dengan peringkat 1–6.', kategori: 'Penulisan' }
];
