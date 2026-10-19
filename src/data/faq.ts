export type FaqCategory = 'Memulai' | 'Topik & judul' | 'Pembimbing' | 'Menulis' | 'Metode & data' | 'Sitasi' | 'Seminar & sidang' | 'Administrasi' | 'Mental';

export interface Faq {
  id: string;
  kategori: FaqCategory;
  tanya: string;
  jawab: string;
  kampus?: boolean;
}

export const faqCategories: FaqCategory[] = ['Memulai', 'Topik & judul', 'Pembimbing', 'Menulis', 'Metode & data', 'Sitasi', 'Seminar & sidang', 'Administrasi', 'Mental'];

export const faqs: Faq[] = [
  { id: 'f1', kategori: 'Memulai', tanya: 'Kapan sebaiknya mulai memikirkan skripsi?', jawab: 'Idealnya sejak semester 5–6: baca skripsi kakak tingkat, kumpulkan minat, dan kenali dosen. Persiapan dini menghemat berbulan-bulan saat semester skripsi.' },
  { id: 'f2', kategori: 'Memulai', tanya: 'Apa bedanya skripsi, tugas akhir, tesis, dan disertasi?', jawab: 'Skripsi dan tugas akhir adalah karya akhir jenjang S1/D4 (istilah tergantung kampus dan prodi), tesis untuk S2, disertasi untuk S3 dengan tuntutan kebaruan teori yang lebih tinggi.' },
  { id: 'f3', kategori: 'Memulai', tanya: 'Berapa lama waktu normal mengerjakan skripsi?', jawab: 'Umumnya 6–12 bulan sejak topik disetujui sampai sidang, tergantung metode, ketersediaan data, dan kecepatan bimbingan. Bukan lomba; yang penting konsisten.', kampus: true },
  { id: 'f4', kategori: 'Memulai', tanya: 'Apakah boleh mulai skripsi sebelum semester skripsi?', jawab: 'Boleh mempersiapkan: membaca, mencari topik, mencari pembimbing informal. Pengajuan resmi mengikuti syarat kampus (SKS, KRS skripsi).', kampus: true },

  { id: 'f5', kategori: 'Topik & judul', tanya: 'Bagaimana cara menemukan topik skripsi?', jawab: 'Mulai dari minat dan masalah nyata di sekitarmu, lalu cek kelayakan (data, waktu, biaya, dosen). Gunakan Generator Ide Topik dan baca 5 jurnal terbaru untuk menemukan celah penelitian.' },
  { id: 'f6', kategori: 'Topik & judul', tanya: 'Bolehkah meneliti topik yang sudah pernah diteliti?', jawab: 'Boleh, selama ada perbedaan: objek, lokasi, periode, variabel, atau metode. Kuncinya adalah menjelaskan kebaruan dan alasan penelitian ulang.' },
  { id: 'f7', kategori: 'Topik & judul', tanya: 'Bagaimana jika judul ditolak?', jawab: 'Minta alasan spesifik. Biasanya karena terlalu luas, tidak feasibel, atau tumpang tindih. Revisi dengan mempersempit dan ajukan lagi; tolakan adalah bagian proses.' },
  { id: 'f8', kategori: 'Topik & judul', tanya: 'Apakah judul boleh berubah di tengah jalan?', jawab: 'Perubahan kecil (kata, istilah) lazim dan biasanya cukup disetujui pembimbing. Perubahan besar mungkin perlu prosedur resmi ke prodi.', kampus: true },
  { id: 'f9', kategori: 'Topik & judul', tanya: 'Lebih baik topik populer atau topik unik?', jawab: 'Pilih yang datanya mudah dan kamu minati. Topik populer lebih mudah referensinya; topik unik butuh lebih banyak pembuktian kelayakan.' },

  { id: 'f10', kategori: 'Pembimbing', tanya: 'Bagaimana cara memilih dosen pembimbing?', jawab: 'Lihat bidang keahlian, gaya membimbing (tanya kakak tingkat), dan ketersediaan. Bawa ringkasan satu halaman topikmu saat menemui calon pembimbing.', kampus: true },
  { id: 'f11', kategori: 'Pembimbing', tanya: 'Berapa kali sebaiknya bimbingan?', jawab: 'Idealnya rutin dua mingguan (atau sesuai kesepakatan) dengan draf yang jelas. Banyak kampus mensyaratkan jumlah minimal sesi bimbingan.', kampus: true },
  { id: 'f12', kategori: 'Pembimbing', tanya: 'Dosenku susah dihubungi. Apa yang harus dilakukan?', jawab: 'Kirim pesan ringkas dengan pilihan waktu, lampirkan berkas, dan tindak lanjuti dengan sopan. Jika berlarut-larut, hubungi koordinator skripsi atau dosen wali. Lihat modul "Dosen sulit" di menu Dukungan Mental.' },
  { id: 'f13', kategori: 'Pembimbing', tanya: 'Apa yang sebaiknya dibawa saat bimbingan?', jawab: 'Draf tercetak/terkirim, daftar pertanyaan spesifik, catatan revisi sebelumnya, dan tanda bukti bimbingan. Setelahnya, catat hasil di Log Bimbingan.' },

  { id: 'f14', kategori: 'Menulis', tanya: 'Mulai menulis dari Bab berapa?', jawab: 'Tidak harus Bab 1. Banyak yang mulai dari rencana metode dan kerangka Bab 1, lalu Bab 2, dan melengkapi Bab 1 setelah teori mantap. Abstrak ditulis terakhir.' },
  { id: 'f15', kategori: 'Menulis', tanya: 'Berapa jumlah halaman skripsi yang wajar?', jawab: 'Bervariasi: sekitar 60–120 halaman untuk S1 di banyak bidang, tetapi kualitas dan keselarasan lebih penting daripada tebal. Cek pedoman prodi.', kampus: true },
  { id: 'f16', kategori: 'Menulis', tanya: 'Bagaimana menghindari plagiarisme?', jawab: 'Catat sumber sejak membaca, parafrase dengan memahami (bukan mengganti sinonim), cantumkan sitasi, dan cek kemiripan dengan alat yang disediakan kampus. Kutipan langsung harus bertanda petik.' },
  { id: 'f17', kategori: 'Menulis', tanya: 'Apakah boleh memakai alat bantu menulis dan penerjemah?', jawab: 'Aturan berbeda tiap kampus. Prinsipnya: gagasan, analisis, dan tulisan akhir harus pekerjaanmu dan kamu bertanggung jawab penuh. Selalu ikuti kebijakan akademik kampus dan jujur kepada pembimbing.', kampus: true },
  { id: 'f18', kategori: 'Menulis', tanya: 'Berapa lama menulis satu bab?', jawab: 'Draf satu bab biasanya 1–3 minggu dengan menulis rutin. Revisi bisa lebih lama dari menulis draf. Targetkan jumlah kata harian yang realistis.' },
  { id: 'f19', kategori: 'Menulis', tanya: 'Bagaimana cara menulis dengan bahasa ilmiah?', jawab: 'Gunakan kalimat efektif, satu gagasan per kalimat, hindari kata subjektif berlebihan, dan dukung klaim dengan data/sumber. Baca ulang dengan keras untuk menemukan kalimat yang berbelit.' },

  { id: 'f20', kategori: 'Metode & data', tanya: 'Bagaimana memilih antara kuantitatif dan kualitatif?', jawab: 'Kuantitatif untuk mengukur dan menguji hubungan; kualitatif untuk memahami makna dan proses. Gunakan Pemilih Metodologi untuk rekomendasi berdasarkan situasimu.' },
  { id: 'f21', kategori: 'Metode & data', tanya: 'Berapa jumlah sampel minimal?', jawab: 'Tergantung populasi dan analisis: gunakan rumus Slovin/Cochran, aturan praktis regresi (10–15 per prediktor), atau power analysis. Pembimbing berhak menentukan batas yang disarankan di prodi.' },
  { id: 'f22', kategori: 'Metode & data', tanya: 'Responden kurang dari target, bagaimana?', jawab: 'Perpanjang waktu, perluas kanal penyebaran, dan beri insentif kecil bila etis. Jika tetap kurang, diskusikan dengan pembimbing: ubah teknik analisis atau sesuaikan ruang lingkup.' },
  { id: 'f23', kategori: 'Metode & data', tanya: 'Apa yang dilakukan jika hasil tidak sesuai hipotesis?', jawab: 'Itu tetap hasil yang sah. Laporkan apa adanya dan bahas mengapa mungkin berbeda (konteks, sampel, ukuran). Jangan mengubah data atau menyembunyikan temuan.' },
  { id: 'f24', kategori: 'Metode & data', tanya: 'Apakah kuesioner perlu diuji dulu?', jawab: 'Ya, lakukan uji coba kecil dan uji validitas–reliabilitas, kecuali memakai instrumen baku yang sudah teruji pada populasi serupa (tetap jelaskan sumbernya).' },
  { id: 'f25', kategori: 'Metode & data', tanya: 'Data sekunder boleh dipakai untuk skripsi?', jawab: 'Boleh, asal sumbernya kredibel dan dapat ditelusuri (BPS, laporan resmi, dataset publik), serta metode pengolahannya jelas.' },

  { id: 'f26', kategori: 'Sitasi', tanya: 'Gaya sitasi apa yang harus dipakai?', jawab: 'Ikuti buku pedoman prodi. Umumnya APA 7 (sosial, ekonomi, pendidikan), IEEE (teknik/informatika), Vancouver (kesehatan), dan footnote (hukum).', kampus: true },
  { id: 'f27', kategori: 'Sitasi', tanya: 'Bolehkah mengutip dari Wikipedia atau blog?', jawab: 'Sebaiknya tidak sebagai sumber utama. Gunakan untuk memahami garis besar, lalu cari sumber primer yang dikutip di dalamnya (jurnal, buku, dokumen resmi).' },
  { id: 'f28', kategori: 'Sitasi', tanya: 'Berapa jumlah referensi yang ideal?', jawab: 'Bervariasi, tetapi 25–50 sumber relevan (utamakan jurnal) wajar untuk S1. Kualitas dan relevansi lebih penting daripada jumlah.', kampus: true },
  { id: 'f29', kategori: 'Sitasi', tanya: 'Bagaimana mengutip sumber yang dikutip sumber lain?', jawab: 'Sebaiknya cari sumber aslinya. Jika tidak ada, tulis "(Penulis asli, tahun, dalam Penulis kedua, tahun)" dan masukkan hanya sumber yang kamu baca ke daftar pustaka (APA).' },

  { id: 'f30', kategori: 'Seminar & sidang', tanya: 'Apa bedanya seminar proposal dan sidang skripsi?', jawab: 'Sempro menilai kelayakan rencana penelitian (Bab 1–3) sebelum mengambil data; sidang akhir menilai seluruh penelitian dan kemampuanmu mempertahankannya.' },
  { id: 'f31', kategori: 'Seminar & sidang', tanya: 'Bagaimana mengatasi gugup saat sidang?', jawab: 'Latihan berulang dengan timer dan bank pertanyaan, atur napas, dan hafalkan alur bukan kalimat. Gugup itu normal; persiapan mengubahnya menjadi energi.' },
  { id: 'f32', kategori: 'Seminar & sidang', tanya: 'Apa yang terjadi jika tidak lulus sidang?', jawab: 'Biasanya ada keputusan: lulus, lulus dengan revisi (paling umum), atau mengulang sidang setelah perbaikan besar. Tanyakan aturannya di prodi; tidak lulus bukan akhir.', kampus: true },
  { id: 'f33', kategori: 'Seminar & sidang', tanya: 'Berapa lama batas waktu revisi?', jawab: 'Ditentukan kampus, sering 1–4 minggu. Segera mulai setelah sidang dan jadwalkan bimbingan revisi.', kampus: true },

  { id: 'f34', kategori: 'Administrasi', tanya: 'Dokumen apa saja yang perlu disiapkan?', jawab: 'Lihat menu Administrasi Kampus untuk daftar umum dari pengajuan judul sampai wisuda, lalu cocokkan dengan panduan akademik kampus.', kampus: true },
  { id: 'f35', kategori: 'Administrasi', tanya: 'Berapa batas maksimal masa studi?', jawab: 'Batas masa studi ditetapkan kampus mengacu pada aturan nasional (pada aturan lama sekitar 7 tahun untuk S1), dan bisa berbeda antar kampus atau mengikuti kebijakan terbaru. Cek buku akademik dan ajukan perpanjangan bila perlu.', kampus: true },
  { id: 'f36', kategori: 'Administrasi', tanya: 'Apakah perlu mencetak banyak salinan?', jawab: 'Jumlah salinan untuk sempro, sidang, dan pengumpulan ditentukan kampus. Beberapa kampus kini memakai pengumpulan digital.', kampus: true },

  { id: 'f37', kategori: 'Mental', tanya: 'Aku merasa tertinggal dari teman-teman. Apa yang harus kulakukan?', jawab: 'Setiap lintasan skripsi berbeda: topik, data, dan dosen mempengaruhi tempo. Bandingkan dengan dirimu minggu lalu, tetapkan target mingguan kecil, dan minta dukungan.' },
  { id: 'f38', kategori: 'Mental', tanya: 'Aku merasa burnout, haruskah berhenti dulu?', jawab: 'Beristirahat beberapa hari terencana sering lebih baik daripada memaksakan diri. Jika kelelahan menetap atau mengganggu keseharian, bicarakan dengan konselor kampus atau tenaga profesional.' },
  { id: 'f39', kategori: 'Mental', tanya: 'Bagaimana menghadapi tekanan keluarga dan lingkungan?', jawab: 'Sampaikan progres nyata dengan jadwal, bukan janji. Minta dukungan spesifik (ruang tenang, waktu), dan tetapkan batas bahwa kamu sedang berusaha.' },
  { id: 'f40', kategori: 'Mental', tanya: 'Aku sering menunda-nunda. Dari mana mulai?', jawab: 'Mulai dari langkah 2 menit: buka dokumen dan tulis satu kalimat, lalu satu sesi pomodoro 25 menit. Lihat modul prokrastinasi di menu Dukungan Mental.' }
];
