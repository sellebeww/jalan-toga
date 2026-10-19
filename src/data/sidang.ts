export type DefenseScope =
  | 'umum'
  | 'bab1'
  | 'bab2'
  | 'bab3'
  | 'bab4'
  | 'bab5'
  | 'etika'
  | 'tantangan'
  | 'jurusan';

export interface DefenseQuestion {
  id: string;
  scope: DefenseScope;
  /** hanya muncul untuk jurusan tertentu (scope = 'jurusan') */
  majorId?: string;
  level: 1 | 2 | 3;
  tanya: string;
  maksud: string;
  jawab: string;
  /** true bila lebih sering muncul saat seminar proposal */
  sempro?: boolean;
}

export const scopeLabels: Record<DefenseScope, string> = {
  umum: 'Pembuka & umum',
  bab1: 'Bab 1 · Pendahuluan',
  bab2: 'Bab 2 · Teori & pustaka',
  bab3: 'Bab 3 · Metode',
  bab4: 'Bab 4 · Hasil & pembahasan',
  bab5: 'Bab 5 · Kesimpulan',
  etika: 'Etika & orisinalitas',
  tantangan: 'Pertanyaan menjebak',
  jurusan: 'Khusus jurusan'
};

export const defenseQuestions: DefenseQuestion[] = [
  // ---------- Umum
  { id: 'u1', scope: 'umum', level: 1, tanya: 'Coba jelaskan penelitianmu secara singkat dalam dua menit.', maksud: 'Menguji apakah kamu menguasai inti penelitian dan bisa menyampaikannya ringkas.', jawab: 'Pakai pola: masalah → tujuan → metode → temuan utama → kesimpulan. Latih sampai bisa dalam 2 menit tanpa membaca.' },
  { id: 'u2', scope: 'umum', level: 1, tanya: 'Mengapa kamu memilih topik ini?', maksud: 'Melihat motivasi dan relevansi topik.', jawab: 'Hubungkan masalah nyata, data awal, dan celah penelitian. Hindari jawaban "karena mudah" atau "disuruh dosen".' },
  { id: 'u3', scope: 'umum', level: 2, tanya: 'Apa kontribusi penelitianmu, secara teori maupun praktik?', maksud: 'Menguji kesadaranmu tentang nilai tambah.', jawab: 'Sebut satu kontribusi teoretis (menguatkan/menambah bukti pada teori) dan satu praktis (siapa yang bisa memakai hasilnya dan bagaimana).' },
  { id: 'u4', scope: 'umum', level: 2, tanya: 'Apa bedanya penelitianmu dengan penelitian sebelumnya?', maksud: 'Memeriksa kebaruan (novelty) dan penguasaan literatur.', jawab: 'Sebut 2–3 penelitian terdekat, lalu jelaskan perbedaannya: objek, variabel, metode, atau periode.' },
  { id: 'u5', scope: 'umum', level: 1, tanya: 'Apa kesimpulan utama penelitianmu dalam satu kalimat?', maksud: 'Menguji kejelasan berpikir.', jawab: 'Jawab langsung menjawab rumusan masalah utama. Baru tambahkan angka kunci bila diminta.' },
  { id: 'u6', scope: 'umum', level: 2, tanya: 'Bagian mana dari penelitianmu yang paling sulit dan bagaimana kamu mengatasinya?', maksud: 'Melihat pengalaman riset dan kemampuan problem solving.', jawab: 'Pilih satu kendala nyata (data, izin, analisis), jelaskan solusinya, dan pelajaran yang kamu ambil.' },

  // ---------- Bab 1
  { id: 'b1-1', scope: 'bab1', level: 1, tanya: 'Apa masalah utama yang kamu angkat dan apa buktinya bahwa masalah itu nyata?', maksud: 'Menguji dasar masalah (data, bukan opini).', jawab: 'Sebut data/fakta (angka, tahun, sumber) dari latar belakang, lalu kaitkan dengan objek penelitian.', sempro: true },
  { id: 'b1-2', scope: 'bab1', level: 1, tanya: 'Mengapa penelitian ini penting dilakukan sekarang?', maksud: 'Menguji urgensi.', jawab: 'Jelaskan dampak jika masalah dibiarkan dan siapa yang diuntungkan bila terjawab.', sempro: true },
  { id: 'b1-3', scope: 'bab1', level: 2, tanya: 'Apa bedanya rumusan masalah dan tujuan penelitian?', maksud: 'Memastikan kamu paham struktur riset.', jawab: 'Rumusan adalah pertanyaan yang ingin dijawab; tujuan adalah pernyataan hasil yang ingin dicapai. Keduanya paralel dan satu-satu.', sempro: true },
  { id: 'b1-4', scope: 'bab1', level: 2, tanya: 'Mengapa memilih objek atau lokasi ini?', maksud: 'Menguji pertimbangan pemilihan objek.', jawab: 'Alasan ilmiah (karakteristik objek sesuai masalah) lalu alasan praktis (akses data, izin).', sempro: true },
  { id: 'b1-5', scope: 'bab1', level: 2, tanya: 'Mengapa ruang lingkupmu dibatasi seperti itu?', maksud: 'Menguji realisme dan kejelasan batas.', jawab: 'Jelaskan pembatasan berdasarkan waktu, sumber daya, dan fokus tujuan; sebut apa yang sengaja tidak diteliti.', sempro: true },
  { id: 'b1-6', scope: 'bab1', level: 2, tanya: 'Apa manfaat konkret penelitianmu dan untuk siapa?', maksud: 'Menguji kejelasan manfaat.', jawab: 'Sebut pihak spesifik (nama instansi/jenis pengguna) dan tindakan yang bisa mereka ambil dari hasilmu.', sempro: true },

  // ---------- Bab 2
  { id: 'b2-1', scope: 'bab2', level: 1, tanya: 'Teori apa yang paling mendasari penelitianmu dan mengapa dipilih?', maksud: 'Menguji penguasaan teori dan kesesuaiannya.', jawab: 'Sebut teori inti, ringkas inti gagasannya, lalu hubungkan dengan variabel/fokusmu.', sempro: true },
  { id: 'b2-2', scope: 'bab2', level: 2, tanya: 'Mengapa memilih definisi atau model ini dibanding yang lain?', maksud: 'Menguji kemampuan menyintesis dan memilih.', jawab: 'Bandingkan singkat dua definisi/model, lalu alasan memilih (lebih relevan, lebih operasional, paling banyak dipakai).', sempro: true },
  { id: 'b2-3', scope: 'bab2', level: 2, tanya: 'Jelaskan kerangka berpikirmu.', maksud: 'Menguji logika hubungan antar konsep.', jawab: 'Telusuri diagramnya dari kiri ke kanan: apa memengaruhi apa, dasarnya dari teori atau penelitian mana.', sempro: true },
  { id: 'b2-4', scope: 'bab2', level: 2, tanya: 'Dari mana hipotesismu berasal?', maksud: 'Memastikan hipotesis tidak asal.', jawab: 'Sebut teori dan temuan penelitian terdahulu yang mendukung arah hipotesis.', sempro: true },
  { id: 'b2-5', scope: 'bab2', level: 3, tanya: 'Apa research gap yang kamu isi?', maksud: 'Menguji kebaruan dan pemahaman literatur.', jawab: 'Sebutkan apa yang belum dijawab penelitian sebelumnya (tabel penelitian terdahulu) dan bagaimana penelitianmu mengisinya.', sempro: true },
  { id: 'b2-6', scope: 'bab2', level: 2, tanya: 'Jurnal atau sumber mana yang paling berpengaruh bagi penelitianmu?', maksud: 'Menguji apakah kamu benar-benar membaca sumber.', jawab: 'Pilih 1–2 sumber utama, ringkas temuannya, dan jelaskan bagaimana kamu memakainya.', sempro: true },

  // ---------- Bab 3
  { id: 'b3-1', scope: 'bab3', level: 1, tanya: 'Mengapa memilih pendekatan ini (kuantitatif/kualitatif/dll) untuk masalahmu?', maksud: 'Menguji kesesuaian metode dengan pertanyaan.', jawab: 'Hubungkan sifat rumusan masalah dengan pendekatan: ukur pengaruh → kuantitatif; pahami makna → kualitatif; hasilkan produk → R&D.', sempro: true },
  { id: 'b3-2', scope: 'bab3', level: 2, tanya: 'Bagaimana kamu menentukan jumlah sampel/informan?', maksud: 'Menguji dasar perhitungan.', jawab: 'Sebut rumus (Slovin/Cochran/tabel/aturan praktis) dan hitungannya; untuk kualitatif, jelaskan kriteria dan kejenuhan data.', sempro: true },
  { id: 'b3-3', scope: 'bab3', level: 2, tanya: 'Mengapa memakai teknik sampling ini dan apa kelemahannya?', maksud: 'Menguji kesadaran bias.', jawab: 'Alasan pemilihan teknik, lalu akui keterbatasan generalisasi dan bagaimana kamu meminimalkannya.', sempro: true },
  { id: 'b3-4', scope: 'bab3', level: 2, tanya: 'Bagaimana kamu menguji validitas dan reliabilitas instrumen?', maksud: 'Menguji kualitas instrumen.', jawab: 'Jelaskan validitas isi (ahli), validitas butir (korelasi), reliabilitas (Cronbach Alpha/KR-20), hasil uji coba, dan butir yang dibuang.', sempro: true },
  { id: 'b3-5', scope: 'bab3', level: 2, tanya: 'Bagaimana kamu menjamin keabsahan data kualitatif?', maksud: 'Menguji rigor penelitian kualitatif.', jawab: 'Triangulasi sumber/teknik, member check, audit trail, dan deskripsi kaya (thick description).', sempro: true },
  { id: 'b3-6', scope: 'bab3', level: 2, tanya: 'Mengapa memakai uji statistik ini dan apa asumsinya?', maksud: 'Menguji pemahaman statistik.', jawab: 'Hubungkan jenis data dan tujuan dengan uji; sebut asumsinya (normalitas, homogenitas, dsb.) dan hasil pengecekannya.', sempro: true },
  { id: 'b3-7', scope: 'bab3', level: 2, tanya: 'Bagaimana definisi operasional variabelmu disusun?', maksud: 'Menguji keterukuran variabel.', jawab: 'Jelaskan indikator dari teori, bagaimana diubah menjadi butir/skala, dan sumber adopsinya.', sempro: true },
  { id: 'b3-8', scope: 'bab3', level: 3, tanya: 'Bagaimana kamu mengatasi bias responden atau bias peneliti?', maksud: 'Menguji kesadaran metodologis.', jawab: 'Contoh langkah: anonimitas, butir netral, uji coba, triangulasi, dan catatan refleksi peneliti.', sempro: true },
  { id: 'b3-9', scope: 'bab3', level: 2, tanya: 'Bagaimana aspek etika penelitianmu (izin, persetujuan, kerahasiaan)?', maksud: 'Memastikan penelitian etis.', jawab: 'Sebut izin lembaga, informed consent, anonimisasi, dan penyimpanan data yang aman.', sempro: true },
  { id: 'b3-10', scope: 'bab3', level: 2, tanya: 'Apa risiko terbesar penelitianmu dan rencana cadanganmu?', maksud: 'Menguji kesiapan menghadapi hambatan.', jawab: 'Sebut risiko nyata (responden kurang, izin lambat, alat rusak) dan langkah mitigasi konkret.', sempro: true },

  // ---------- Bab 4
  { id: 'b4-1', scope: 'bab4', level: 1, tanya: 'Apa temuan paling penting dan mengapa menurutmu hal itu terjadi?', maksud: 'Menguji kedalaman interpretasi.', jawab: 'Sebut temuan utama dengan angka kunci, lalu alasan berdasarkan teori atau konteks lapangan.' },
  { id: 'b4-2', scope: 'bab4', level: 2, tanya: 'Hasilmu berbeda dengan penelitian lain. Mengapa?', maksud: 'Menguji pemahaman konteks dan kritis.', jawab: 'Bandingkan perbedaan objek, periode, sampel, atau instrumen. Akui kemungkinan keterbatasan sendiri.' },
  { id: 'b4-3', scope: 'bab4', level: 2, tanya: 'Apa arti nilai p, koefisien, atau R² yang kamu peroleh secara praktis?', maksud: 'Menguji pemahaman statistik, bukan hafalan angka.', jawab: 'Terjemahkan ke bahasa awam: seberapa besar perubahan Y per perubahan X, berapa persen variasi yang dijelaskan, dan kepastiannya.' },
  { id: 'b4-4', scope: 'bab4', level: 3, tanya: 'Bagaimana kamu tahu hasil ini bukan kebetulan atau dipengaruhi variabel lain?', maksud: 'Menguji penalaran kausal.', jawab: 'Sebut uji signifikansi, kontrol variabel, dan keterbatasan desain. Hindari klaim sebab-akibat bila desain korelasional.' },
  { id: 'b4-5', scope: 'bab4', level: 2, tanya: 'Bagaimana kamu memeriksa kualitas data (data hilang, outlier, jawaban asal)?', maksud: 'Menguji ketelitian.', jawab: 'Jelaskan pembersihan data: aturan eksklusi, penanganan data hilang, dan pengecekan outlier.' },
  { id: 'b4-6', scope: 'bab4', level: 3, tanya: 'Ada hasil yang tidak mendukung hipotesismu. Bagaimana kamu menjelaskannya?', maksud: 'Menguji kejujuran ilmiah.', jawab: 'Akui hasil apa adanya, bahas kemungkinan alasan (konteks, sampel, ukuran), dan sampaikan itu tetap temuan yang berharga.' },
  { id: 'b4-7', scope: 'bab4', level: 2, tanya: 'Apakah hasilmu bisa digeneralisasi?', maksud: 'Menguji kesadaran batas generalisasi.', jawab: 'Jelaskan cakupan sampel/populasi dan batasnya. Sampling nonprobabilitas membatasi generalisasi.' },

  // ---------- Bab 5
  { id: 'b5-1', scope: 'bab5', level: 1, tanya: 'Apakah kesimpulanmu sudah menjawab semua rumusan masalah?', maksud: 'Memeriksa keselarasan penelitian.', jawab: 'Telusuri satu per satu: rumusan 1 → kesimpulan 1, dan seterusnya.' },
  { id: 'b5-2', scope: 'bab5', level: 2, tanya: 'Saran apa yang bisa langsung dilakukan oleh pihak terkait?', maksud: 'Menguji manfaat praktis.', jawab: 'Sebut siapa, melakukan apa, dan dasarnya dari temuanmu.' },
  { id: 'b5-3', scope: 'bab5', level: 2, tanya: 'Apa keterbatasan penelitianmu?', maksud: 'Menguji kejujuran dan refleksi.', jawab: 'Sebut 2–3 keterbatasan nyata (sampel, waktu, instrumen) dan bagaimana ini memengaruhi tafsir hasil.' },
  { id: 'b5-4', scope: 'bab5', level: 2, tanya: 'Jika penelitian ini diulang, apa yang akan kamu ubah?', maksud: 'Menguji pembelajaran.', jawab: 'Pilih perbaikan konkret (sampel lebih besar, instrumen lebih baik, metode tambahan).' },
  { id: 'b5-5', scope: 'bab5', level: 2, tanya: 'Penelitian lanjutan seperti apa yang kamu usulkan?', maksud: 'Melihat wawasan ke depan.', jawab: 'Usulkan arah spesifik: variabel baru, objek lain, pendekatan berbeda, atau periode lebih panjang.' },

  // ---------- Etika
  { id: 'e1', scope: 'etika', level: 2, tanya: 'Bagaimana kamu memastikan skripsimu orisinal?', maksud: 'Memeriksa integritas akademik.', jawab: 'Sebut cek kemiripan, sitasi konsisten, parafrase dengan pemahaman sendiri, dan catatan sumber.' },
  { id: 'e2', scope: 'etika', level: 3, tanya: 'Bagian mana yang benar-benar kamu kerjakan sendiri dan siapa saja yang membantu?', maksud: 'Memeriksa keterlibatan sebenarnya.', jawab: 'Jawab jujur dan spesifik: peran pembimbing, bantuan teknis, serta bagian yang kamu kerjakan sendiri.' },
  { id: 'e3', scope: 'etika', level: 2, tanya: 'Bagaimana kamu melindungi privasi responden?', maksud: 'Menguji etika data.', jawab: 'Anonimisasi, penyimpanan terproteksi, akses terbatas, dan penghapusan identitas dari laporan.' },

  // ---------- Pertanyaan menjebak
  { id: 't1', scope: 'tantangan', level: 3, tanya: 'Menurut saya penelitianmu tidak penting. Bagaimana tanggapanmu?', maksud: 'Menguji sikap dan kemampuan membela dengan tenang.', jawab: 'Tetap tenang, akui sudut pandang penguji, lalu jelaskan urgensi dengan data dan kontribusi spesifik.' },
  { id: 't2', scope: 'tantangan', level: 3, tanya: 'Mengapa tidak memakai metode lain yang lebih sederhana atau lebih canggih?', maksud: 'Menguji pertimbangan metodologis.', jawab: 'Bandingkan singkat alternatif, jelaskan kelebihan metodemu untuk pertanyaanmu, dan akui trade-off-nya.' },
  { id: 't3', scope: 'tantangan', level: 3, tanya: 'Sebutkan tiga kelemahan terbesar penelitianmu.', maksud: 'Menguji kejujuran dan refleksi diri.', jawab: 'Siapkan tiga kelemahan nyata beserta dampaknya dan bagaimana kamu meminimalkannya. Jangan menyangkal bahwa ada kelemahan.' },
  { id: 't4', scope: 'tantangan', level: 3, tanya: 'Kalau saya minta kamu mengubah satu hal di penelitian ini sekarang, apa yang akan berubah dan apa dampaknya?', maksud: 'Menguji pemahaman keterkaitan antar bagian.', jawab: 'Telusuri dampak perubahan pada rumusan, metode, analisis, dan kesimpulan secara runtut.' },
  { id: 't5', scope: 'tantangan', level: 2, tanya: 'Kalau kamu tidak tahu jawaban pertanyaan saya, apa yang kamu lakukan?', maksud: 'Menguji integritas dan sikap ilmiah.', jawab: 'Katakan jujur belum mengetahuinya, sampaikan dugaan dengan alasan bila ada, dan jelaskan bagaimana kamu akan mencari tahu.' },

  // ---------- Khusus jurusan
  { id: 'j-inf-1', scope: 'jurusan', majorId: 'informatika', level: 2, tanya: 'Mengapa memilih algoritma/metode ini dibanding alternatif lain?', maksud: 'Menguji dasar pemilihan metode teknis.', jawab: 'Bandingkan dengan 1–2 alternatif berdasarkan karakteristik data, kebutuhan akurasi, dan sumber daya komputasi.' },
  { id: 'j-inf-2', scope: 'jurusan', majorId: 'informatika', level: 3, tanya: 'Bagaimana kamu membagi data latih dan uji, dan bagaimana mencegah kebocoran data (data leakage)?', maksud: 'Menguji rigor eksperimen.', jawab: 'Jelaskan pembagian (hold-out/k-fold), urutan pra-pemrosesan setelah pemisahan, dan seed yang dipakai.' },
  { id: 'j-inf-3', scope: 'jurusan', majorId: 'informatika', level: 3, tanya: 'Mengapa memakai metrik itu, dan bagaimana mengatasi overfitting atau data tidak seimbang?', maksud: 'Menguji pemahaman evaluasi model.', jawab: 'Pilih metrik sesuai kasus (F1/recall untuk kelas timpang), jelaskan regularisasi, validasi silang, atau teknik penyeimbangan data.' },
  { id: 'j-inf-4', scope: 'jurusan', majorId: 'informatika', level: 2, tanya: 'Bagaimana pengujian sistemmu menjamin kualitas dan siapa yang menguji?', maksud: 'Menguji kualitas perangkat lunak.', jawab: 'Sebut blackbox/whitebox, skenario uji, UAT dengan responden nyata, dan hasil (misal skor SUS).' },
  { id: 'j-tek-1', scope: 'jurusan', majorId: 'teknik', level: 2, tanya: 'Standar apa yang kamu rujuk dan apakah hasilmu memenuhinya?', maksud: 'Menguji kepatuhan standar teknik.', jawab: 'Sebut standar (SNI/ASTM/ISO) beserta nilai syarat, lalu bandingkan hasilmu dalam tabel.' },
  { id: 'j-tek-2', scope: 'jurusan', majorId: 'teknik', level: 3, tanya: 'Berapa jumlah ulangan benda uji dan mengapa dianggap cukup? Apa sumber kesalahan pengukuran?', maksud: 'Menguji keandalan data eksperimen.', jawab: 'Dasar jumlah ulangan (standar/statistik), kalibrasi alat, kondisi lingkungan, dan cara meminimalkan galat.' },
  { id: 'j-sai-1', scope: 'jurusan', majorId: 'sains', level: 2, tanya: 'Apa kontrol dalam percobaanmu dan bagaimana kamu mengendalikan variabel pengganggu?', maksud: 'Menguji rancangan percobaan.', jawab: 'Jelaskan kontrol negatif/positif, ulangan, pengacakan, dan variabel yang dijaga tetap.' },
  { id: 'j-per-1', scope: 'jurusan', majorId: 'pertanian', level: 2, tanya: 'Mengapa memakai RAL/RAK dan bagaimana pengaruh musim/cuaca terhadap hasilmu?', maksud: 'Menguji rancangan dan validitas lapangan.', jawab: 'Hubungkan keseragaman lahan dengan rancangan; sebut pencatatan kondisi lingkungan dan pengaruhnya pada interpretasi.' },
  { id: 'j-kes-1', scope: 'jurusan', majorId: 'kesehatan', level: 2, tanya: 'Bagaimana kelayakan etik dan persetujuan responden diurus?', maksud: 'Menguji kepatuhan etik penelitian kesehatan.', jawab: 'Sebut komisi etik, nomor kelayakan etik, informed consent, dan perlindungan data pribadi.' },
  { id: 'j-kes-2', scope: 'jurusan', majorId: 'kesehatan', level: 3, tanya: 'Apa implikasi klinis atau praktis hasilmu dan seberapa besar efeknya?', maksud: 'Menguji relevansi di luar signifikansi statistik.', jawab: 'Bedakan signifikan secara statistik dan bermakna secara klinis/praktis; sebut ukuran efek dan batasannya.' },
  { id: 'j-eko-1', scope: 'jurusan', majorId: 'ekonomi-bisnis', level: 2, tanya: 'Mengapa indikator variabel ini yang dipilih dan bagaimana asumsi klasik terpenuhi?', maksud: 'Menguji validitas pengukuran dan asumsi model.', jawab: 'Rujuk sumber indikator, jelaskan hasil uji asumsi, dan apa yang dilakukan bila ada pelanggaran.' },
  { id: 'j-eko-2', scope: 'jurusan', majorId: 'ekonomi-bisnis', level: 2, tanya: 'Apa implikasi manajerial dari hasilmu?', maksud: 'Menguji relevansi praktis.', jawab: 'Terjemahkan temuan menjadi langkah manajemen konkret dan prioritasnya.' },
  { id: 'j-huk-1', scope: 'jurusan', majorId: 'hukum', level: 2, tanya: 'Apa dasar hukum utama dan bagaimana hierarkinya?', maksud: 'Menguji penguasaan norma.', jawab: 'Sebut peraturan inti, tingkatannya, serta asas yang dipakai (lex specialis, lex posterior, dll.) bila ada konflik norma.' },
  { id: 'j-huk-2', scope: 'jurusan', majorId: 'hukum', level: 3, tanya: 'Metode penafsiran apa yang kamu pakai terhadap pasal tersebut dan mengapa?', maksud: 'Menguji penalaran hukum.', jawab: 'Jelaskan penafsiran gramatikal, sistematis, atau teleologis dan alasan memilihnya.' },
  { id: 'j-sos-1', scope: 'jurusan', majorId: 'sospol', level: 2, tanya: 'Bagaimana teori yang kamu pakai membantu membedah datamu?', maksud: 'Menguji keterkaitan teori dan data.', jawab: 'Tunjukkan 1–2 temuan dan jelaskan bagaimana konsep teori mengorganisasi pemaknaannya.' },
  { id: 'j-kom-1', scope: 'jurusan', majorId: 'komunikasi', level: 2, tanya: 'Bagaimana unit analisis ditentukan dan seberapa andal pengkodeanmu?', maksud: 'Menguji rigor analisis isi/wacana.', jawab: 'Jelaskan unit analisis, lembar koding, dan uji keterandalan antar-pengkode atau pemeriksaan sejawat.' },
  { id: 'j-psi-1', scope: 'jurusan', majorId: 'psikologi', level: 2, tanya: 'Apakah alat ukurmu valid untuk populasi ini dan sudah diadaptasi dengan benar?', maksud: 'Menguji kualitas pengukuran psikologis.', jawab: 'Sebut prosedur adaptasi, uji coba, indeks validitas dan reliabilitas, serta norma skor.' },
  { id: 'j-pen-1', scope: 'jurusan', majorId: 'pendidikan', level: 2, tanya: 'Bagaimana indikator keberhasilan ditetapkan dan apa bukti peningkatan bukan karena faktor lain?', maksud: 'Menguji validitas internal tindakan/perlakuan.', jawab: 'Jelaskan dasar indikator (KKM/standar), data pra-tindakan, kontrol faktor lain, dan triangulasi pengamatan.' },
  { id: 'j-pen-2', scope: 'jurusan', majorId: 'pendidikan', level: 2, tanya: 'Bagaimana validitas perangkat atau instrumen pembelajaranmu?', maksud: 'Menguji kualitas perangkat.', jawab: 'Sebut validasi ahli, hasil revisi, uji coba terbatas, dan analisis butir (daya beda, tingkat kesukaran).' },
  { id: 'j-aga-1', scope: 'jurusan', majorId: 'agama', level: 2, tanya: 'Mengapa sumber primer ini dipilih dan metode penafsiran apa yang kamu pakai?', maksud: 'Menguji metodologi kajian teks.', jawab: 'Jelaskan alasan pemilihan sumber, otoritas ilmiahnya, dan metode (tematik, analisis isi, hermeneutik) yang konsisten.' },
  { id: 'j-hum-1', scope: 'jurusan', majorId: 'humaniora', level: 2, tanya: 'Bagaimana kriteria pemilihan korpus datamu dan teori apa yang kamu pakai membedahnya?', maksud: 'Menguji rancangan kajian teks/bahasa.', jawab: 'Jelaskan kriteria seleksi korpus, jumlah data, dan konsep teori yang dipakai pada tiap temuan.' },
  { id: 'j-sen-1', scope: 'jurusan', majorId: 'seni-desain', level: 2, tanya: 'Apa konsep di balik karyamu dan bagaimana kamu menguji penerimaannya oleh target audiens?', maksud: 'Menguji dasar perancangan dan evaluasi.', jawab: 'Jelaskan alur riset → konsep → karya, dan hasil uji audiens (kuesioner/usability test) beserta perbaikannya.' }
];

export const timerOptions = [60, 90, 120, 180];

/* ---------- Tips presentasi & template slide ---------- */

export interface SlidePlan {
  nomor: number;
  judul: string;
  isi: string;
  menit: string;
}

export const slidesSempro: SlidePlan[] = [
  { nomor: 1, judul: 'Judul & identitas', isi: 'Judul, nama, NIM, prodi, pembimbing, kampus.', menit: '0:15' },
  { nomor: 2, judul: 'Latar belakang masalah', isi: '1–2 data kunci yang membuktikan masalah nyata (grafik sederhana lebih baik dari paragraf).', menit: '1:00' },
  { nomor: 3, judul: 'Rumusan masalah & tujuan', isi: 'Rumusan dan tujuan berdampingan agar kelihatan selaras.', menit: '0:45' },
  { nomor: 4, judul: 'Manfaat & batasan', isi: 'Manfaat spesifik dan batas ruang lingkup.', menit: '0:30' },
  { nomor: 5, judul: 'Tinjauan pustaka ringkas', isi: 'Teori inti dan 2–3 penelitian terdahulu terdekat + perbedaan.', menit: '1:00' },
  { nomor: 6, judul: 'Kerangka pemikiran & hipotesis', isi: 'Satu diagram dan hipotesis (jika ada).', menit: '0:45' },
  { nomor: 7, judul: 'Metode: desain & subjek', isi: 'Pendekatan, lokasi, populasi/sampel, teknik sampling.', menit: '1:00' },
  { nomor: 8, judul: 'Metode: instrumen & analisis', isi: 'Instrumen, uji validitas/reliabilitas, teknik analisis.', menit: '1:00' },
  { nomor: 9, judul: 'Rencana jadwal', isi: 'Timeline sederhana beberapa bulan ke depan.', menit: '0:30' },
  { nomor: 10, judul: 'Daftar pustaka utama', isi: '5–8 sumber kunci saja; sisanya ada di naskah.', menit: '0:15' },
  { nomor: 11, judul: 'Penutup & terima kasih', isi: 'Ringkasan 1 kalimat dan slide cadangan bila ada.', menit: '0:15' }
];

export const slidesSidang: SlidePlan[] = [
  { nomor: 1, judul: 'Judul & identitas', isi: 'Judul, nama, NIM, pembimbing, penguji.', menit: '0:15' },
  { nomor: 2, judul: 'Latar belakang', isi: 'Masalah, data kunci, dan celah penelitian.', menit: '1:00' },
  { nomor: 3, judul: 'Rumusan masalah & tujuan', isi: 'Sama dengan naskah, ditampilkan berpasangan.', menit: '0:45' },
  { nomor: 4, judul: 'Landasan teori & kerangka', isi: 'Teori inti dan kerangka pemikiran dalam satu diagram.', menit: '1:00' },
  { nomor: 5, judul: 'Metode penelitian', isi: 'Desain, sampel, instrumen, dan analisis dalam 1–2 slide visual.', menit: '1:30' },
  { nomor: 6, judul: 'Gambaran data / responden', isi: 'Ringkasan karakteristik sampel atau deskripsi data.', menit: '0:45' },
  { nomor: 7, judul: 'Hasil 1', isi: 'Temuan untuk rumusan 1: satu grafik/tabel + satu kalimat makna.', menit: '1:30' },
  { nomor: 8, judul: 'Hasil 2', isi: 'Temuan untuk rumusan 2 (dan seterusnya, satu slide per rumusan).', menit: '1:30' },
  { nomor: 9, judul: 'Pembahasan', isi: 'Mengapa temuan begitu; kaitkan dengan teori/penelitian lain.', menit: '1:30' },
  { nomor: 10, judul: 'Kesimpulan', isi: 'Jawaban singkat untuk tiap rumusan masalah.', menit: '1:00' },
  { nomor: 11, judul: 'Saran & keterbatasan', isi: 'Saran konkret dan keterbatasan penelitian.', menit: '0:45' },
  { nomor: 12, judul: 'Terima kasih', isi: 'Slide penutup bersih; siapkan slide cadangan (lampiran) untuk tanya jawab.', menit: '0:15' }
];

export const presentationTips: { judul: string; isi: string }[] = [
  { judul: 'Satu slide, satu pesan', isi: 'Teks maksimal 6 baris, ukuran huruf 24 pt ke atas. Slide adalah pendamping bicara, bukan naskah.' },
  { judul: 'Visual mengalahkan paragraf', isi: 'Ubah angka menjadi grafik sederhana; beri satu kalimat "jadi apa artinya" di bawah tiap grafik.' },
  { judul: 'Latihan dengan timer', isi: 'Latih minimal 3 kali dengan waktu sebenarnya. Rekam suara dan dengarkan tempo bicaramu.' },
  { judul: 'Hafal alur, bukan kalimat', isi: 'Hafalkan urutan gagasan (masalah → metode → temuan → makna) agar tidak blank saat gugup.' },
  { judul: 'Siapkan slide cadangan', isi: 'Tabel lengkap, output analisis, dan kuesioner di bagian lampiran slide untuk menjawab pertanyaan detail.' },
  { judul: 'Atur kontak mata & jeda', isi: 'Lihat penguji bergantian, bukan layar. Jeda satu detik setelah poin penting.' }
];

export const answeringTips: string[] = [
  'Dengarkan sampai selesai, catat inti pertanyaan, dan boleh meminta pengulangan.',
  'Jawab dulu intinya dalam satu kalimat, baru beri alasan atau data (30–60 detik).',
  'Jika tidak tahu: akui dengan sopan, sampaikan dugaan beralasan, dan sebut cara mencari tahu.',
  'Jangan membantah penguji. Terima masukan, jelaskan sudut pandangmu dengan tenang.',
  'Catat semua masukan di buku; ini akan jadi daftar revisimu.',
  'Bila pembimbing menjawab untukmu, tetap angguk dan lanjutkan bila diminta; jangan tersinggung.'
];

export const dayOfChecklist: string[] = [
  'Naskah cetak sesuai jumlah yang diminta penguji',
  'Laptop + charger, cadangan slide di flashdisk dan awan',
  'Pointer/klik, adaptor HDMI/USB-C bila perlu',
  'Pakaian sesuai aturan kampus, rapi dan nyaman',
  'Air minum dan permen tenggorokan',
  'Datang 30 menit lebih awal, cek ruangan dan proyektor',
  'Buku catatan dan pulpen untuk mencatat masukan',
  'Nomor kontak pembimbing dan admin prodi tersimpan'
];
