import { ComparisonPair } from '../types';

export const allComparisons: ComparisonPair[] = [
  {
    id: 'comp-cs-is',
    conceptA: 'Computer Science (CS)',
    conceptB: 'Information Systems (IS)',
    moduleSlug: 'modul-1',
    summary: 'CS berpusat pada studi algoritma dan rekayasa komputasi (artefak), sedangkan IS berpusat pada interaksi isu sosial, manusia dalam organisasi, dan teknologi.',
    differences: [
      {
        dimension: 'Pusat Kajian',
        aspectA: 'Studi tentang algoritma, komputasi, dan struktur teknologi (Biermann, Brookshear)',
        aspectB: 'Hubungan manusia dalam organisasi dengan hardware, software, dan data (Allen S. Lee)'
      },
      {
        dimension: 'Rantai Inti',
        aspectA: 'Artefak → Percobaan → Karakteristik',
        aspectB: 'Manusia → Organisasi → Teknologi'
      },
      {
        dimension: 'Pertanyaan Utama',
        aspectA: 'Bagaimana membuat algoritma dan sistem yang lebih cepat, efisien, dan benar?',
        aspectB: 'Bagaimana teknologi memengaruhi efektivitas kerja manusia dan pengambilan keputusan organisasi?'
      }
    ],
    pitfall: 'Mengira pembeda CS dan IS adalah "CS ngoding, IS tidak ngoding". Keduanya melibatkan coding; perbedaannya terletak pada pusat pertanyaan penelitiannya.',
    keyTakeaway: 'Tentukan pusat pertanyaan penelitian, bukan hanya nama aplikasinya.'
  },
  {
    id: 'comp-seq-gen',
    conceptA: 'Sequential Model',
    conceptB: 'Generalised Model',
    moduleSlug: 'modul-2',
    summary: 'Sequential mengikuti alur linear kaku langkah demi langkah, sedangkan Generalised menyediakan rute alternatif dan tahapan yang adaptif.',
    differences: [
      {
        dimension: 'Sifat Alur',
        aspectA: 'Linear, kaku, harus selesai berurutan dari awal sampai akhir',
        aspectB: 'Tetap mengenali kegiatan, tetapi menyediakan rute alternatif dan cabang'
      },
      {
        dimension: 'Contoh Model',
        aspectA: 'Model 7 tahap Sharp',
        aspectB: 'Model 11 tahap Kane'
      },
      {
        dimension: 'Fleksibilitas',
        aspectA: 'Rendah (satu alur untuk semua riset)',
        aspectB: 'Tinggi (menyesuaikan keluaran dan jenis studi komputer)'
      }
    ],
    pitfall: 'Menganggap model generalised berarti penelitian boleh berjalan tanpa metodologi atau tanpa struktur.',
    keyTakeaway: 'Generalised tetap berstruktur ketat, namun rute tahapan disesuaikan dengan kebutuhan jenis riset.'
  },
  {
    id: 'comp-circ-evol',
    conceptA: 'Circulatory Model',
    conceptB: 'Evolutionary Model',
    moduleSlug: 'modul-2',
    summary: 'Circulatory mengulang siklus penemuan kembali ke awal (Research Wheel), sedangkan Evolutionary menekankan perubahan arah riset seiring waktu.',
    differences: [
      {
        dimension: 'Pola Pengulangan',
        aspectA: 'Lingkaran penemuan berkelanjutan yang kembali ke tahap awal (refine hipotesis)',
        aspectB: 'Perubahan riset dari waktu ke waktu tanpa wajib mengulang pola siklus yang sama'
      },
      {
        dimension: 'Kerangka Acuan',
        aspectA: 'Research Wheel (framework, pertanyaan, data, analisis, pemahaman)',
        aspectB: 'Evolusi paradigma dan pergeseran fokus studi seiring kemajuan ilmu'
      }
    ],
    pitfall: 'Mengira salah satu model lebih superior; keduanya sama-sama melihat kelanjutan riset dengan penekanan pola yang berbeda.',
    keyTakeaway: 'Circulatory terikat siklus pengulangan; evolutionary bebas berevolusi tanpa pola yang kaku.'
  },
  {
    id: 'comp-quant-qual',
    conceptA: 'Kuantitatif (Quantitative)',
    conceptB: 'Kualitatif (Qualitative)',
    moduleSlug: 'modul-2',
    summary: 'Kuantitatif berakar dari ilmu alam dengan skala numerik & uji statistik; Kualitatif berakar dari ilmu sosial untuk memahami makna mendalam dari data tidak terstruktur.',
    differences: [
      {
        dimension: 'Akar Disiplin',
        aspectA: 'Ilmu alam, sains eksakta, matematika',
        aspectB: 'Ilmu sosial, antropologi, psikologi'
      },
      {
        dimension: 'Format Data',
        aspectA: 'Skala numerik terstruktur, metrik waktu/skor',
        aspectB: 'Teks narasi, rekaman percakapan, observasi tidak terstruktur'
      },
      {
        dimension: 'Tujuan Analisis',
        aspectA: 'Uji hipotesis statistik dan generalisasi populasi',
        aspectB: 'Peningkatan pemahaman mendalam atas area substantif'
      }
    ],
    pitfall: 'Mengira keberadaan kuesioner otomatis membuat penelitian menjadi kuantitatif; instrumen saja belum menentukan seluruh pendekatan.',
    keyTakeaway: 'Kuantitatif mengukur angka untuk digeneralisasi; kualitatif menggali makna untuk dipahami mendalam.'
  },
  {
    id: 'comp-ded-ind',
    conceptA: 'Penalaran Deduktif',
    conceptB: 'Penalaran Induktif',
    moduleSlug: 'modul-3',
    summary: 'Deduktif bergerak dari umum ke khusus (analitis, a priori, tautologis); Induktif bergerak dari khusus ke umum (sintetis, a posteriori, probabilitas).',
    differences: [
      {
        dimension: 'Arah Penalaran',
        aspectA: 'Umum ke khusus (Top-down)',
        aspectB: 'Khusus ke umum (Bottom-up)'
      },
      {
        dimension: 'Sifat Penarikan',
        aspectA: 'Analitis, tautologis (kesimpulan tersirat di premis), a priori',
        aspectB: 'Sintetis, general (melampaui amatan), a posteriori'
      },
      {
        dimension: 'Alur Proses',
        aspectA: 'Teori → Hipotesis → Observasi → Konfirmasi',
        aspectB: 'Observasi → Pola → Hipotesis Sementara → Teori'
      },
      {
        dimension: 'Kepastian',
        aspectA: 'Sahih atau batal secara logika murni',
        aspectB: 'Mengandung unsur probabilitas (tidak memberi kepastian mutlak)'
      }
    ],
    pitfall: 'Mengira generalisasi induktif memberikan jaminan kepastian mutlak 100%.',
    keyTakeaway: 'Deduksi membuktikan keniscayaan logika premis; induksi membangun teori baru dari pola fakta empiris.'
  },
  {
    id: 'comp-metode-metodologi',
    conceptA: 'Metode Penelitian',
    conceptB: 'Metodologi Penelitian',
    moduleSlug: 'modul-3',
    summary: 'Metode adalah kerangka tindakan atau berpikir terarah tujuan; Metodologi adalah tahapan perencanaan komprehensif (metode + teknik + tools + dokumentasi).',
    differences: [
      {
        dimension: 'Cakupan Konsep',
        aspectA: 'Instrumen atau teknik tindakan spesifik (misal survei, eksperimen, wawancara)',
        aspectB: 'Seluruh arsitektur tahapan perencanaan untuk meminimalkan risiko kegagalan'
      },
      {
        dimension: 'Kedudukan',
        aspectA: 'Metode adalah bagian di dalam metodologi',
        aspectB: 'Metodologi memayungi metode, teknik, tools, dan dokumentasi'
      }
    ],
    pitfall: 'Menyebut nama tools seperti "menggunakan Python dan MySQL" sebagai penjelasan metodologi penelitian.',
    keyTakeaway: 'Metode adalah cara melakukan sesuatu; metodologi adalah ilmu dan desain perencanaan proses riset secara utuh.'
  },
  {
    id: 'comp-error-1-2',
    conceptA: 'Kesalahan Tipe I (α)',
    conceptB: 'Kesalahan Tipe II (β)',
    moduleSlug: 'modul-3',
    summary: 'Tipe I menolak H0 yang sebenarnya benar (false positive); Tipe II menerima H0 yang sebenarnya salah (false negative).',
    differences: [
      {
        dimension: 'Kondisi Nyata H0',
        aspectA: 'H0 sebenarnya BENAR di dunia nyata',
        aspectB: 'H0 sebenarnya SALAH di dunia nyata'
      },
      {
        dimension: 'Keputusan Peneliti',
        aspectA: 'Peneliti MENOLAK H0',
        aspectB: 'Peneliti MENERIMA H0'
      },
      {
        dimension: 'Analogi Alarm Api',
        aspectA: 'Alarm berbunyi keras padahal tidak ada kebakaran sama sekali',
        aspectB: 'Alarm diam hening padahal gedung sedang terbakar'
      },
      {
        dimension: 'Simbol Probabilitas',
        aspectA: 'Alpha (α) / taraf signifikansi',
        aspectB: 'Beta (β)'
      }
    ],
    pitfall: 'Menukar definisi Tipe I dan Tipe II saat menjawab pertanyaan ujian atau menafsirkan uji hipotesis.',
    keyTakeaway: 'Tipe 1 = Tolak yang Benar; Tipe 2 = Terima yang Salah.'
  },
  {
    id: 'comp-hipotesis-3',
    conceptA: 'Hipotesis Comparative',
    conceptB: 'Hipotesis Associative',
    moduleSlug: 'modul-3',
    summary: 'Comparative menguji perbedaan antara kelompok/kondisi; Associative menguji hubungan atau pengaruh keterkaitan antarvariabel.',
    differences: [
      {
        dimension: 'Pusat Dugaan',
        aspectA: 'Apakah ada perbedaan antara dua atau lebih sampel/kondisi?',
        aspectB: 'Apakah ada hubungan atau pengaruh antara variabel independen dan dependen?'
      },
      {
        dimension: 'Bentuk Negatif',
        aspectA: '"Tidak ada perbedaan akurasi antara A dan B" (tetap comparative!)',
        aspectB: '"Tidak ada pengaruh atribut X terhadap akurasi Y"'
      },
      {
        dimension: 'Uji Statistik',
        aspectA: 't-test, ANOVA, Mann-Whitney',
        aspectB: 'Korelasi Pearson, regresi linier'
      }
    ],
    pitfall: 'Mengira kalimat bernada negatif ("tidak ada perbedaan") bukan hipotesis komparatif, atau menganggap korelasi asosiatif otomatis berarti sebab-akibat.',
    keyTakeaway: 'Comparative mencari selisih/beda; Associative mencari korelasi/pengaruh hubungan.'
  },
  {
    id: 'comp-exp-causal',
    conceptA: 'Experimental Research',
    conceptB: 'Causal-Comparative Research',
    moduleSlug: 'modul-4',
    summary: 'Eksperimen melibatkan manipulasi treatment aktif oleh peneliti; Causal-comparative meneliti efek yang sudah terjadi alami tanpa manipulasi.',
    differences: [
      {
        dimension: 'Manipulasi Peneliti',
        aspectA: 'Peneliti sengaja memanipulasi variabel perlakuan pada kelompok eksperimen',
        aspectB: 'Variabel independen TIDAK dimanipulasi (peristiwa sudah terjadi alami)'
      },
      {
        dimension: 'Kelompok Kontrol',
        aspectA: 'Dibuat dan dijaga kondisinya secara setara oleh peneliti',
        aspectB: 'Kelompok terbentuk secara alami dari keadaan masa lampau'
      },
      {
        dimension: 'Tujuan Analisis',
        aspectA: 'Membuktikan sebab-akibat secara murni di laboratorium',
        aspectB: 'Mengkaji efek lalu menelusuri kemungkinan faktor penyebab di lapangan'
      }
    ],
    pitfall: 'Menyebut penelitian kausal-komparatif sebagai eksperimen sejati padahal peneliti tidak pernah memanipulasi variabel perlakuan.',
    keyTakeaway: 'Pembeda kunci keduanya adalah ada/tidaknya MANIPULASI perlakuan oleh peneliti.'
  },
  {
    id: 'comp-action-etno',
    conceptA: 'Action Research',
    conceptB: 'Ethnographic Research',
    moduleSlug: 'modul-4',
    summary: 'Action Research menekankan intervensi tindakan perbaikan bersama subjek; Etnografi menekankan observasi mendalam atas kebudayaan sekelompok orang.',
    differences: [
      {
        dimension: 'Fokus Utama',
        aspectA: 'Tindakan (action) praktis untuk menyelesaikan masalah nyata organisasi',
        aspectB: 'Budaya (culture), kebiasaan, dan nilai-nilai sekelompok orang'
      },
      {
        dimension: 'Peran Peneliti',
        aspectA: 'Agen perubahan yang terlibat aktif memodifikasi proses kerja bersama mitra',
        aspectB: 'Pengamat budaya yang menyelami kehidupan komunitas tanpa mengubah adat mereka'
      }
    ],
    pitfall: 'Menganggap berada lama di suatu kantor otomatis melakukan etnografi, padahal yang dilakukan adalah memodifikasi alur software (Action Research).',
    keyTakeaway: 'Action = Tindakan perubahan; Etnografi = Budaya sekelompok orang.'
  },
  {
    id: 'comp-correl-causal',
    conceptA: 'Penelitian Korelasional (Correlational)',
    conceptB: 'Hubungan Sebab-Akibat (Causality)',
    moduleSlug: 'modul-4',
    summary: 'Korelasi mengukur derajat hubungan linier antarvariabel tanpa variabel kontrol; Korelasi tinggi tidak menjamin adanya hubungan sebab-akibat.',
    differences: [
      {
        dimension: 'Tingkat Klaim',
        aspectA: 'Kedua variabel bergerak searah (korelasi positif) atau berlawanan',
        aspectB: 'Perubahan pada variabel X menjadi penyebab langsung perubahan variabel Y'
      },
      {
        dimension: 'Variabel Pengganggu',
        aspectA: 'Tidak dikendalikan (bisa ada variabel ketiga tersembunyi)',
        aspectB: 'Dikendalikan secara ketat agar isolasi kausalitas terjamin'
      }
    ],
    pitfall: 'Menyimpulkan bahwa variabel A menyebabkan variabel B hanya karena nilai koefisien korelasi r mendekati 1,0.',
    keyTakeaway: 'Korelasi tidak sama dengan kausalitas (Correlation is not causation).'
  },
  {
    id: 'comp-prob-nonprob',
    conceptA: 'Probability Sampling',
    conceptB: 'Nonprobability Sampling',
    moduleSlug: 'modul-6',
    summary: 'Probability memberi peluang sama bagi setiap anggota populasi untuk terpilih; Nonprobability tidak memberi kesempatan yang sama.',
    differences: [
      {
        dimension: 'Peluang Terpilih',
        aspectA: 'Sama besar untuk setiap unsur populasi (ada kerangka sampling)',
        aspectB: 'Tidak sama (bergantung pada kriteria, kuota, atau kebetulan)'
      },
      {
        dimension: 'Generalisasi Statistik',
        aspectA: 'Dapat digeneralisasi ke populasi dengan taraf signifikansi terukur',
        aspectB: 'Tidak dapat digeneralisasi secara statistik murni'
      },
      {
        dimension: 'Klasifikasi Modul',
        aspectA: 'Simple random, Proportionate stratified, Disproportionate stratified, Cluster',
        aspectB: 'Systematic, Quota, Incidental, Purposive, Saturated, Snowball'
      }
    ],
    pitfall: 'Mengira systematic sampling termasuk probability dalam ujian RTI; modul mengklasifikasikannya ke nonprobability.',
    keyTakeaway: 'Probability mengandalkan pengacakan murni; nonprobability mengandalkan pertimbangan praktis.'
  },
  {
    id: 'comp-prop-disprop',
    conceptA: 'Proportionate Stratified',
    conceptB: 'Disproportionate Stratified',
    moduleSlug: 'modul-6',
    summary: 'Proportionate mengambil persentase yang sebanding dari tiap strata; Disproportionate mengambil seluruh anggota pada strata minoritas yang sangat kecil.',
    differences: [
      {
        dimension: 'Kondisi Strata Populasi',
        aspectA: 'Heterogen berstrata dengan proporsi yang relatif seimbang',
        aspectB: 'Heterogen dengan strata minoritas yang sangat timpang (misal S3 hanya 3 orang)'
      },
      {
        dimension: 'Alokasi Sampel',
        aspectA: 'Persentase sama pada tiap strata (misal 10% dari tiap angkatan)',
        aspectB: 'Kelompok sangat kecil diambil seluruhnya (sensus), kelompok besar sebagian'
      }
    ],
    pitfall: 'Mengira proportionate berarti mengambil jumlah kepala yang sama persis (misal 20 orang per strata); yang sama adalah proporsinya!',
    keyTakeaway: 'Proportionate menjaga perbandingan asli; Disproportionate menyelamatkan strata langka agar tidak hilang.'
  },
  {
    id: 'comp-quota-purposive',
    conceptA: 'Quota Sampling',
    conceptB: 'Purposive Sampling',
    moduleSlug: 'modul-6',
    summary: 'Quota berhenti saat angka target kuota terpenuhi; Purposive memilih subjek berdasarkan pertimbangan kualifikasi spesifik.',
    differences: [
      {
        dimension: 'Dasar Pemilihan',
        aspectA: 'Mencapai target jumlah responden berdasar ciri tertentu (misal 50 pria, 50 wanita)',
        aspectB: 'Pertimbangan keahlian atau kriteria khusus (misal admin yang berpengalaman >3 tahun)'
      },
      {
        dimension: 'Kesesuaian Riset',
        aspectA: 'Survei cepat penjajakan opini',
        aspectB: 'Penelitian kualitatif mendalam / studi kasus'
      }
    ],
    pitfall: 'Menganggap terpenuhinya angka kuota membuktikan bahwa sampel telah dipilih secara objektif acak.',
    keyTakeaway: 'Quota mengejar kuantitas angka target; Purposive mengejar kualitas kualifikasi narasumber.'
  },
  {
    id: 'comp-likert-guttman',
    conceptA: 'Skala Likert',
    conceptB: 'Skala Guttman',
    moduleSlug: 'modul-6',
    summary: 'Likert menyediakan 3-7 pilihan jawaban bertingkat/gradasi; Guttman menyediakan 2 alternatif jawaban tegas dikotomi.',
    differences: [
      {
        dimension: 'Karakter Pilihan',
        aspectA: 'Bergradasi dari sangat positif ke sangat negatif (SS, ST, RG, TS, STS)',
        aspectB: 'Tegas dua alternatif (Setuju/Tidak, Pernah/Tidak Pernah, Ya/Tidak)'
      },
      {
        dimension: 'Rentang Opsi',
        aspectA: 'Umumnya 3 sampai 7 interval pilihan',
        aspectB: 'Tepat 2 pilihan dikotomi (tanpa opsi ragu-ragu)'
      },
      {
        dimension: 'Tujuan Pengukuran',
        aspectA: 'Mengukur spektrum intensitas sikap atau persepsi',
        aspectB: 'Memperoleh kepastian jawaban tegas atas satu kondisi'
      }
    ],
    pitfall: 'Menyediakan pilihan "ragu-ragu" pada skala Guttman (Guttman mutlak dikotomi).',
    keyTakeaway: 'Likert mengukur derajat persetujuan; Guttman mengukur kepastian dikotomis.'
  },
  {
    id: 'comp-rel-val',
    conceptA: 'Reliability (Reliabilitas)',
    conceptB: 'Validity (Validitas)',
    moduleSlug: 'modul-6',
    summary: 'Reliabilitas menguji konsistensi hasil saat diulang; Validitas menguji ketepatan instrumen mengukur hal yang semestinya diukur.',
    differences: [
      {
        dimension: 'Definisi Pokok',
        aspectA: 'Pengukuran berulang atas sifat yang sama memberi hasil sama (konsisten)',
        aspectB: 'Instrumen benar-benar mengukur konstruk yang semestinya diukur (tepat)'
      },
      {
        dimension: 'Rumus Uji',
        aspectA: 'Cronbach Alpha, KR-20, Split-Half Spearman-Brown',
        aspectB: 'Korelasi Pearson item-total, validitas isi (content validity)'
      }
    ],
    pitfall: 'Mengira bahwa alat ukur yang konsisten (reliable) sudah otomatis valid; alat ukur bisa konsisten salah mengukur konstruk yang keliru.',
    keyTakeaway: 'Reliabilitas adalah konsistensi; validitas adalah ketepatan sasaran.'
  },
  {
    id: 'comp-rumus-rel-3',
    conceptA: 'KR-20 (Kuder-Richardson)',
    conceptB: 'Cronbach’s Alpha',
    moduleSlug: 'modul-6',
    summary: 'KR-20 digunakan khusus untuk item dikotomi (benar=1, salah=0); Cronbach Alpha digunakan untuk skala bertingkat seperti Likert.',
    differences: [
      {
        dimension: 'Bentuk Data Item',
        aspectA: 'Item dikotomi bernilai 1 atau 0 (tes objektif benar/salah)',
        aspectB: 'Item bertingkat / skor kontinu (angket Likert 1-5, skor parsial)'
      },
      {
        dimension: 'Notasi Rumus',
        aspectA: 'Menggunakan proporsi benar pj dan salah qj: [k/(k-1)] × [1 - Σpjqj/σ²]',
        aspectB: 'Menggunakan varians tiap butir var(xj): [k/(k-1)] × [1 - Σvar(xj)/var(x0)]'
      }
    ],
    pitfall: 'Menghitung reliabilitas kuesioner skala Likert memakai rumus KR-20 (KR-20 hanya valid untuk skor biner 1 dan 0).',
    keyTakeaway: 'Biner 1/0 gunakan KR-20; Skala Likert bertingkat gunakan Cronbach Alpha.'
  },
  {
    id: 'comp-sitasi-referensi',
    conceptA: 'Sitasi (Citation)',
    conceptB: 'Referensi (Reference)',
    moduleSlug: 'modul-5',
    summary: 'Sitasi adalah penanda rujukan di dalam badan teks [1]; Referensi adalah deskripsi lengkap sumber informasi di daftar pustaka akhir.',
    differences: [
      {
        dimension: 'Letak Penulisan',
        aspectA: 'Di dalam badan kalimat teks (in-text citation), sebelum tanda baca',
        aspectB: 'Di halaman tersendiri di akhir naskah berjudul "References"'
      },
      {
        dimension: 'Tujuan Spesifik',
        aspectA: 'Menandai kalimat mana yang merujuk pada karya orang lain agar tidak plagiat',
        aspectB: 'Memberikan informasi lengkap (penulis, judul, penerbit, tahun) agar dapat ditelusuri'
      }
    ],
    pitfall: 'Mencantumkan sitasi di teks [1] tetapi lupa menuliskan data bukunya di daftar pustaka, atau sebaliknya.',
    keyTakeaway: 'Sitasi adalah tanda kutip dalam teks; referensi adalah entri lengkap di daftar akhir.'
  },
  {
    id: 'comp-narrative-systematic',
    conceptA: 'Narrative Literature Review',
    conceptB: 'Systematic Literature Review',
    moduleSlug: 'modul-5',
    summary: 'Narrative review bertutur secara naratif tanpa protokol seleksi ketat; Systematic review menggunakan protokol formal eksplisit dan dapat direplikasi.',
    differences: [
      {
        dimension: 'Protokol Seleksi',
        aspectA: 'Subjektif berdasarkan pertimbangan penulis tanpa kriteria inklusi/eksklusi formal',
        aspectB: 'Protokol ketat, transparan, terdefinisi di awal, dan dapat direplikasi peneliti lain'
      },
      {
        dimension: 'Cakupan Sintesis',
        aspectA: 'Membahas teori dan temuan terpilih sebagai dasar Bab 2 skripsi umum',
        aspectB: 'Menyaring ribuan paper untuk menjawab pertanyaan riset spesifik secara komprehensif'
      }
    ],
    pitfall: 'Mengklaim skripsi melakukan Systematic Literature Review padahal tidak memiliki protokol pencarian dan seleksi kata kunci yang terstandar.',
    keyTakeaway: 'Narrative bertutur bebas; Systematic mengikuti protokol seleksi yang ketat.'
  },
  {
    id: 'comp-evaluator-assuror',
    conceptA: 'Quality Evaluator',
    conceptB: 'Quality Assuror',
    moduleSlug: 'modul-2',
    summary: 'Quality Evaluator berorientasi hasil akhir tanpa komunikasi proyek; Quality Assuror mereview berkala di beberapa tahap kemajuan.',
    differences: [
      {
        dimension: 'Orientasi Penilaian',
        aspectA: 'Berorientasi pada hasil akhir (kontribusi, kompleksitas, kegunaan, penyampaian)',
        aspectB: 'Berorientasi pada proses bertahap, pemahaman kemajuan, dan pengawalan mutu'
      },
      {
        dimension: 'Komunikasi Riset',
        aspectA: 'Dalam model modul, tidak ada komunikasi proyek dengan mahasiswa selama riset',
        aspectB: 'Melakukan review berkala di beberapa tahap dan ikut bertanggung jawab'
      }
    ],
    pitfall: 'Menganggap larangan komunikasi evaluator adalah aturan semua universitas; modul menegaskan itu adalah model konseptual.',
    keyTakeaway: 'Evaluator menilai saat selesai; Assuror mengawal selama proses berlangsung.'
  }
];
