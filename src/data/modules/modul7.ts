import { ModuleData } from '../../types';

export const modul7: ModuleData = {
  slug: 'modul-7',
  number: 7,
  title: 'Penyajian Data Penelitian',
  subtitle: 'Format IEEE, Analisis Data, Visualisasi Grafik, Kontekstualisasi, dan Poster Ilmiah',
  color: 'pink',
  icon: 'BarChart2',
  description: 'Membahas kaidah penulisan sitasi gaya IEEE style, pembeda penyajian vs analisis, telaah data nonnumeris, implementasi koding sebagai data ilmiah, penyajian numeris & 9 jenis grafik visual, uji signifikansi, hakikat hasil yang baik (good result), 7 pertanyaan konteks hasil, evaluasi proses & future work, serta panduan lengkap desain, software, tipografi, dan presentasi poster ilmiah.',
  estimatedMinutes: 50,
  topics: [
    {
      id: 'm7-ieee-style',
      moduleSlug: 'modul-7',
      slug: 'ieee-style-dan-aturan-penulisan',
      title: 'IEEE Style & Aturan Penulisan Daftar Referensi',
      order: 1,
      readingMinutes: 5,
      tldr: 'Gaya IEEE: nomor dalam kurung siku [1] berurutan sesuai kemunculan pertama. Sumber sama nomor sama. Inisial depan + nama keluarga. Artikel diapit tanda kutip, jurnal/buku miring.',
      definition: 'IEEE Style adalah gaya sitasi dengan angka dalam kurung siku yang merujuk deskripsi lengkap di daftar referensi. Sumber diberi nomor menurut urutan pertama dikutip di badan teks, BUKAN menurut urutan alfabet nama penulis. Ketika sumber yang sama dikutip kembali di halaman berikutnya, nomor rujukan tetap sama [1]. Jangan mengganti nomor atau mengurutkan ulang daftar berdasarkan alfabet! Sitasi ditempatkan sebelum tanda baca, dengan spasi sebelum kurung pertama (contoh: "menurut data [1].").\nAturan penulisan dalam modul:\n- In-text citation tidak wajib menyebut nama, halaman, atau tahun; angka mengacu ke entri lengkap di daftar akhir. Nama dapat tetap menjadi bagian kalimat, seperti contoh: "Scholtz [2] ...".\n- Banyak sumber dapat ditulis [1], [3], [5] atau rentang [1]-[5] jika merujuk sumber berurutan.\n- Daftar di akhir diberi judul References; nomor kurung siku di awal tiap entri; hanging indent dan nomor rata kiri.\n- Nama penulis: inisial nama depan lalu nama keluarga (contoh: A. Al Muhairy).\n- Judul artikel memakai tanda kutip; judul jurnal atau buku dicetak miring (italic).',
      explanation: 'Pola buatan untuk format entri rujukan (berlabel bukan referensi nyata):\n- Format Buku: [1] A. Penulis, Judul Buku. Kota: Penerbit, tahun.\n- Format Artikel Jurnal: [2] B. Penulis, "Judul artikel," Nama Jurnal, vol. ..., no. ..., pp. ..., tahun.\n- Format Prosiding: [3] C. Penulis, "Judul makalah," in Proc. Nama Konferensi, tahun, pp. ...',
      example: {
        text: 'Contoh teks: "Pendekatan pencarian tersebut dibandingkan pada ukuran data berbeda [1]."\nContoh daftar akhir:\n[1] A. Pratama, Dasar Algoritma Temu Balik. Jakarta: Informatika Press, 2024.\n[2] B. Santoso, "Evaluasi indexing metadata kampus," Jurnal Sistem Informasi, vol. 8, no. 2, pp. 45-52, 2025.',
        isFabricated: true
      },
      pitfalls: [
        'Mengurutkan daftar referensi IEEE secara alfabetis nama penulis (IEEE WAJIB diurutkan sesuai urutan kemunculan nomor pertama kali di teks).',
        'Menempatkan nomor sitasi sesudah tanda titik kalimat (contoh salah: "...selesai.[1]").',
        'Memberi nomor baru ketika menyitir kembali sumber yang sama di bab berikutnya.'
      ],
      compare: {
        headers: ['Elemen', 'Aturan Gaya IEEE', 'Jebakan Kesalahan Umum'],
        rows: [
          ['Urutan Daftar', 'Nomor urut kemunculan di teks [1], [2], [3]', 'Diurutkan alfabet nama penulis A-Z (salah)'],
          ['Format Sitasi Teks', 'Kurung siku [1] sebelum tanda baca', 'Menulis nama tahun (Smith, 2023)'],
          ['Nama Penulis', 'Inisial nama depan + nama keluarga (A. Smith)', 'Nama lengkap dibalik tanpa inisial'],
          ['Judul Artikel', 'Diapit tanda petik ("Judul...")', 'Dicetak miring tanpa tanda petik'],
          ['Judul Jurnal/Buku', 'Dicetak miring (Italic)', 'Ditulis tegak biasa']
        ]
      },
      memorize: {
        title: '5 Aturan Emas IEEE Style',
        items: [
          '1. Angka dalam kurung siku [1] berurutan sesuai kemunculan pertama.',
          '2. Sumber sama nomor sama di seluruh bab skripsi.',
          '3. Sitasi ditaruh sebelum tanda baca dengan spasi: "teks [1]."',
          '4. Nama penulis: Inisial nama depan lalu nama keluarga (A. Smith).',
          '5. Judul artikel dalam tanda kutip ("..."), judul jurnal/buku miring.'
        ],
        ordered: true
      },
      sourceNote: 'Pola entri buku dan artikel di atas adalah pola ilustrasi sesuai panduan Modul 7, bukan referensi publikasi nyata.',
      miniQuiz: [
        {
          id: 'q-m7-1-1',
          type: 'single',
          prompt: 'Bagaimana urutan daftar entri pada halaman "References" dalam format IEEE style menurut modul?',
          options: [
            'Diurutkan berdasarkan abjad A-Z nama belakang penulis',
            'Diurutkan berdasarkan urutan nomor pertama kali sumber tersebut disitasi dalam teks',
            'Diurutkan dari tahun penerbitan yang paling mutakhir',
            'Diurutkan berdasarkan panjangnya halaman artikel'
          ],
          answer: 1,
          explanation: 'Dalam IEEE style, daftar referensi diurutkan berdasarkan urutan nomor pertama kali dikutip dalam teks [1], [2], [3], bukan urutan alfabet nama.',
          difficulty: 1,
          topicId: 'm7-ieee-style'
        }
      ],
      tags: ['IEEE Style', 'Sitasi', 'Daftar Referensi', 'Format'],
      glossaryTerms: ['ieee-style', 'in-text-citation', 'references-list']
    },
    {
      id: 'm7-penyajian-analisis',
      moduleSlug: 'modul-7',
      slug: 'penyajian-vs-analisis-data',
      title: 'Penyajian vs Analisis Data',
      order: 2,
      readingMinutes: 3,
      tldr: 'Penyajian = menampilkan data simulasi/wawancara/literatur dengan benar. Analisis = mengevaluasi data terhadap objektif menjadi temuan penelitian. Tabel saja belum analisis!',
      definition: 'Data dari simulasi, wawancara, atau telaah literatur disajikan dengan benar. Analisis adalah proses mengevaluasi data terhadap objektif (tujuan) penelitian; hasil analisis inilah yang menjadi temuan penelitian. Peringatan penting modul: Penyajian tabel atau kutipan saja belum sama dengan analisis! Peneliti wajib mempertahankan kaitan dengan tujuan penelitian.',
      explanation: 'Sering kali mahasiswa di Bab 4 hanya menempelkan 10 tabel dan grafik tanpa ada kalimat penjelas, atau hanya menulis: "Berdasarkan Tabel 4.1 dapat dilihat angka 80 dan 60." Ini baru penyajian deskriptif dangkal. Analisis yang sesungguhnya harus menjelaskan: Apa makna angka tersebut terhadap tujuan penelitian? Mengapa fenomena tersebut terjadi? Apakah mendukung hipotesis?',
      example: {
        text: 'Menampilkan tabel latensi: "Tabel 4.1 menyajikan waktu respons". Ini adalah Penyajian. Menambahkan penjelasan: "Penurunan latensi sebesar 45% pada konfigurasi B membuktikan bahwa algoritma indexing memenuhi objektif pertama penelitian yaitu efisiensi temu kembali". Ini adalah Analisis.',
        isFabricated: false
      },
      pitfalls: [
        'Hanya menempelkan gambar atau tabel tanpa ada narasi analisis mendalam yang mengaitkannya dengan tujuan penelitian.',
        'Mengira bahwa memuat banyak tabel tebal otomatis membuat Bab 4 berbobot ilmiah tinggi.'
      ],
      compare: {
        headers: ['Aktivitas', 'Penyajian Data', 'Analisis Data'],
        rows: [
          ['Fokus Utama', 'Format tampilan visual (tabel, grafik, transkrip kutipan)', 'Evaluasi makna data terhadap objektif penelitian'],
          ['Bentuk Luaran', 'Diagram batang, tabel rekapitulasi, matriks', 'Temuan ilmiah, verifikasi hipotesis, argumentasi fakta'],
          ['Tuntutan Ilmiah', 'Kerapian, ketepatan skala angka, kejelasan label', 'Kedalaman penalaran, pembuktian sebab-akibat, sintesis']
        ]
      },
      memorize: {
        title: 'Prinsip Kunci Analisis Data',
        items: [
          'Penyajian menampilkan data dalam bentuk terstruktur.',
          'Analisis mengevaluasi data terhadap tujuan (objektif) penelitian.',
          'Temuan penelitian lahir dari analisis, bukan sekadar dari adanya tabel.',
          'Tabel/kutipan saja ≠ analisis.'
        ],
        ordered: false
      },
      miniQuiz: [
        {
          id: 'q-m7-2-1',
          type: 'truefalse',
          prompt: 'Benar atau Salah: Menurut modul, jika seorang mahasiswa sudah menyajikan 15 tabel data dan 10 kutipan wawancara di Bab 4, ia sudah otomatis melakukan analisis data penelitian.',
          answer: false,
          explanation: 'Salah. Modul secara eksplisit memperingatkan: "Penyajian tabel atau kutipan saja belum sama dengan analisis. Analisis mengevaluasi data terhadap objektif penelitian."',
          difficulty: 1,
          topicId: 'm7-penyajian-analisis'
        }
      ],
      tags: ['Penyajian Data', 'Analisis Data', 'Temuan Penelitian'],
      glossaryTerms: ['penyajian-data', 'analisis-data', 'temuan-penelitian']
    },
    {
      id: 'm7-literatur-nonnumeris',
      moduleSlug: 'modul-7',
      slug: 'telaah-literatur-sebagai-data-nonnumeris',
      title: 'Telaah Literatur sebagai Data Nonnumeris',
      order: 3,
      readingMinutes: 3,
      tldr: 'Literatur dapat menjadi data kualitatif. Pilih sumber penting, bangun argumen, dan wajib sajikan seluruh counter-argument penting! Tidak ada 1 format kaku.',
      definition: 'Telaah literatur dapat diperlakukan sebagai sumber data nonnumeris. Prinsip telaah literatur menurut modul:\n1. Pilih sumber yang penting dan berhubungan langsung dengan analisis; jangan memasukkan pembahasan yang tidak berdampak pada penelitian.\n2. Bangun argumen dan interpretasi ilmiah yang kokoh.\n3. Wajib sajikan juga seluruh counter-argument (argumen tandingan/hasil yang berlawanan) yang penting.\n4. Tidak ada satu format pasti: struktur penulisan menyesuaikan data, fokus penelitian, dan alur argumen.',
      explanation: 'Penelitian ilmiah yang jujur tidak hanya menampilkan penelitian terdahulu yang mendukung pendapat kita. Jika ada paper terkenal yang menemukan kelemahan algoritma yang kita gunakan, paper tersebut (counter-argument) wajib disajikan dan dibahas secara objektif.',
      example: {
        text: 'Dalam membandingkan pendekatan pencarian pada portal kampus, peneliti menyajikan studi yang membuktikan keunggulan inverted index, sekaligus memuat studi tandingan (counter-argument) yang menunjukkan borosnya memori RAM, lalu menjelaskan mitigasi yang dipilih.',
        isFabricated: false
      },
      pitfalls: [
        'Menyembunyikan atau sengaja menghapus artikel tandingan (counter-argument) yang tidak sejalan dengan hipotesis peneliti.',
        'Memasukkan ringkasan topik yang tidak ada dampaknya pada fokus analisis penelitian.'
      ],
      memorize: {
        title: '3 Pedoman Telaah Literatur Nonnumeris',
        items: [
          '1. Pilih hanya sumber penting yang berdampak pada analisis.',
          '2. Bangun interpretasi & argumen logis.',
          '3. Wajib sajikan counter-argument penting secara transparan.'
        ],
        ordered: false
      },
      miniQuiz: [
        {
          id: 'q-m7-3-1',
          type: 'single',
          prompt: 'Apa yang harus dilakukan peneliti jika menemukan literatur yang memberikan counter-argument (argumen yang menentang atau berbeda dengan hasil yang diharapkan peneliti)?',
          options: [
            'Sengaja menyembunyikan artikel tersebut agar skripsi cepat lulus',
            'Menyajikan seluruh counter-argument penting tersebut secara transparan dan membangun interpretasi penjelas',
            'Menghapus seluruh bab kajian literatur',
            'Mengganti nama penulis artikel tandingan tersebut'
          ],
          answer: 1,
          explanation: 'Modul menegaskan: bangun argumen dan interpretasi, tetapi sajikan juga seluruh counter-argument penting.',
          difficulty: 1,
          topicId: 'm7-literatur-nonnumeris'
        }
      ],
      tags: ['Data Nonnumeris', 'Counter-Argument', 'Telaah Literatur'],
      glossaryTerms: ['counter-argument', 'data-kualitatif']
    },
    {
      id: 'm7-penyajian-kualitatif',
      moduleSlug: 'modul-7',
      slug: 'penyajian-wawancara-dan-kuesioner',
      title: 'Penyajian Hasil Wawancara & Kuesioner',
      order: 4,
      readingMinutes: 4,
      tldr: 'Penyajian wawancara: By company (per unit dulu), By question (per pertanyaan), No grouping/grouping/summary. Ringkasan dilarang hilangkan temuan berlawanan!',
      definition: 'Rekaman dan catatan disusun serta dipilih untuk meringkas isi wawancara dalam bentuk yang sesuai. Kuesioner dapat ditampilkan melalui gambar atau tabel. Tiga model pengelompokan penyajian wawancara menurut modul:\n1. By company / by unit: Setiap perusahaan atau unit dijelaskan dahulu secara tuntas, lalu disajikan jawaban-jawaban pertanyaannya.\n2. By question: Setiap pertanyaan atau kelompok pertanyaan dijelaskan satu per satu, lalu diperbandingkan jawabannya antar-unit/perusahaan.\n3. No grouping / grouping / summary: Bahan dapat disajikan per butir pertanyaan mentah, dikelompokkan berdasarkan tema tertentu, atau diringkas sesuai tujuan analisis.\nPeringatan penting modul: Ringkasan tidak boleh menghilangkan temuan-temuan penting yang berlawanan dengan argumen peneliti!',
      explanation: 'Dalam skripsi TI yang meneliti implementasi ERP di 3 divisi kampus (BAAK, Keuangan, Perpustakaan), peneliti dapat memilih menyajikan hasil per divisi (By company/unit) atau membahas pertanyaan "kendala login" di ketiga divisi sekaligus (By question).',
      example: {
        text: 'Kelompokkan jawaban pengelola portal kampus menurut tema koordinasi atau menurut unit pengelola. Bila ada unit pengelola yang menyatakan sistem baru justru memperlambat kerja mereka, keluhan tersebut tetap wajib dimuat dalam ringkasan temuan.',
        isFabricated: false
      },
      pitfalls: [
        'Melakukan cherry-picking (hanya memilih kutipan wawancara yang memuji aplikasi dan membuang semua kritikan tajam pengguna).',
        'Menyajikan transkrip wawancara 50 halaman mentah tanpa analisis pengelompokan tema yang jelas.'
      ],
      compare: {
        headers: ['Model Penyajian', 'Struktur Alur Paparan', 'Kapan Tepat Digunakan?'],
        rows: [
          ['By Company / Unit', 'Profil Unit A → Semua Jawaban A; lalu Unit B → Semua Jawaban B', 'Bila tiap organisasi memiliki konteks budaya kerja yang sangat unik'],
          ['By Question', 'Pertanyaan 1 → Bandingkan Unit A vs B; Pertanyaan 2 → Bandingkan lagi', 'Bila ingin melihat perbandingan langsung respons lintas organisasi'],
          ['Grouping / Summary', 'Jawaban dikelompokkan ke tema besar (mis. kendala teknis vs manajemen)', 'Bila data wawancara sangat banyak dan butuh sintesis tematik']
        ]
      },
      memorize: {
        title: '3 Model Pengorganisasian Wawancara',
        items: [
          '1. By company: Tiap unit dijelaskan utuh, lalu jawabannya.',
          '2. By question: Tiap pertanyaan dibahas, lalu dibandingkan antar-unit.',
          '3. Grouping/summary: Dikelompokkan/diringkas tematik (dilarang hapus temuan berlawanan).'
        ],
        ordered: false
      },
      miniQuiz: [
        {
          id: 'q-m7-4-1',
          type: 'single',
          prompt: 'Metode pengorganisasian data wawancara di mana setiap pertanyaan dijelaskan terlebih dahulu lalu jawabannya diperbandingkan antar-unit/organisasi disebut:',
          options: ['By company', 'By question', 'Hawthorne analysis', 'Saturated summary'],
          answer: 1,
          explanation: 'By question menyajikan data pertanyaan per pertanyaan, lalu membandingkan respons dari berbagai unit yang diteliti.',
          difficulty: 1,
          topicId: 'm7-penyajian-kualitatif'
        }
      ],
      tags: ['Wawancara', 'By Company', 'By Question', 'Penyajian'],
      glossaryTerms: ['by-company', 'by-question', 'sintesis-tematik']
    },
    {
      id: 'm7-implementasi-data',
      moduleSlug: 'modul-7',
      slug: 'implementasi-sebagai-sumber-data',
      title: 'Implementasi Koding sebagai Sumber Data Ilmiah',
      order: 5,
      readingMinutes: 4,
      tldr: 'Implementasi menghasilkan data simulasi & pembuktian metode. Tampilkan: pseudocode, flowchart dengan penjelasan teks, cuplikan penting. Source code panjang tanpa penjelasan bukan argumen!',
      definition: 'Implementasi perangkat lunak dapat menghasilkan data simulasi, menunjukkan bahwa sesuatu dapat dilakukan (proof of concept), atau menjadi wadah percobaan metode pengembangan baru. Pengembangan dan dokumentasi yang baik membuktikan kebenaran implementasi.\nPola penyajian yang dianjurkan modul:\n- Sajikan pseudocode algoritma penting.\n- Jelaskan bagian-bagian penting dalam paragraf teks.\n- Berikan flowchart arsitektur yang dijelaskan secara naratif dalam teks.\n- Tampilkan cuplikan source code (code snippets) penting yang relevan.\nPeringatan penting modul: Source code panjang tanpa penjelasan belum memberi argumen! Modul juga menyebut penempatan code lengkap di isi bab atau lampiran, pemberian komentar program, spesifikasi software/hardware, serta petunjuk penggunaan (user guide).',
      explanation: 'Dalam skripsi software engineering, jangan pernah melakukan "copy-paste" 200 baris kode mentah ke dalam bab skripsi tanpa analisis. Yang dinilai dalam karya ilmiah adalah penjelasan konseptual logika algoritma, notasi pseudocode, dan bukti eksekusinya.',
      example: {
        text: 'Pada Portal Kampus: Peneliti menampilkan pseudocode fungsi pencarian inverted index, menjelaskan bagaimana penanganan typo dihitung dengan Levenshtein distance, menyertakan flowchart alur query, dan menaruh kode lengkap 500 baris di Bab Lampiran.',
        isFabricated: false
      },
      pitfalls: [
        'Memasukkan ratusan baris kode mentah ke dalam Bab 4 tanpa satu pun kalimat penjelasan ilmiah.',
        'Lupa menyertakan spesifikasi lingkungan pengujian (spesifikasi CPU, RAM, OS, versi database).'
      ],
      memorize: {
        title: 'Komponen Penyajian Implementasi Perangkat Lunak',
        items: [
          '1. Pseudocode algoritma inti dengan notasi standar.',
          '2. Flowchart alur sistem yang dinarasikan dalam teks.',
          '3. Cuplikan kode penting (snippets) yang diberi penjelasan argumen.',
          '4. Spesifikasi software, hardware pengujian, komentar kode, dan panduan.',
          '5. Source code utuh ditempatkan pada LAMPIRAN skripsi.'
        ],
        ordered: false
      },
      miniQuiz: [
        {
          id: 'q-m7-5-1',
          type: 'truefalse',
          prompt: 'Benar atau Salah: Menurut modul, mencantumkan source code program yang sangat panjang secara utuh di bab isi skripsi tanpa penjelasan teks sudah otomatis memberikan argumen ilmiah yang kuat.',
          answer: false,
          explanation: 'Salah. Modul secara eksplisit menyatakan: "Source code panjang tanpa penjelasan belum memberi argumen. Pengembangan dan dokumentasi yang baik yang menunjukkan kebenaran implementasi."',
          difficulty: 1,
          topicId: 'm7-implementasi-data'
        }
      ],
      tags: ['Implementasi', 'Pseudocode', 'Source Code', 'Dokumentasi'],
      glossaryTerms: ['pseudocode', 'source-code', 'flowchart', 'spesifikasi-sistem']
    },
    {
      id: 'm7-penyajian-numeris',
      moduleSlug: 'modul-7',
      slug: 'penyajian-numeris-dan-jenis-visual',
      title: 'Penyajian Data Numeris & 9 Jenis Grafik Visual',
      order: 6,
      readingMinutes: 5,
      tldr: 'Hindari misleading graphs! Perhatikan cakupan interval sumbu. 9 Jenis visual: Garis, Batang, Lingkaran/Doughnut, Histogram, Combined bar, Scatter, 3D bar, Polar, Factor analysis plot.',
      definition: 'Modul menganjurkan penggunaan tabel dan grafik untuk memvisualisasikan angka agar mudah dipahami pembaca. Peneliti wajib menghindari misleading graphs (grafik yang menyesatkan persepsi) dan memperhatikan significance tests (uji signifikansi statistik).\nAturan interval sumbu modul: Jika hanya interval tertentu yang dipilih (misal 10.000 - 60.000 data), jelaskan cakupan interval tersebut secara jujur agar pembaca tidak salah menilai seluruh pola tren. Perbedaan yang tampak besar secara visual pada grafik belum otomatis bermakna secara analisis statistik!\nSembilan jenis visual yang dicantumkan dalam modul:\n1. Diagram garis (Line chart): Membantu melihat perubahan tren secara berurutan/waktu.\n2. Diagram batang (Bar chart): Membandingkan nilai antar-kategori diskrit.\n3. Diagram lingkaran / doughnut (Pie/Doughnut): Memperlihatkan proporsi komposisi dari total 100%.\n4. Histogram: Menunjukkan distribusi frekuensi data numerik yang dikelompokkan ke dalam interval/bin.\n5. Combined bar chart: Memadukan beberapa kategori batang berdampingan.\n6. Scatter diagram (Diagram pencar): Memperlihatkan sebaran pasangan nilai dua variabel numerik.\n7. 3D bar chart: Visualisasi batang tiga dimensi untuk beberapa dimensi data.\n8. Polar chart: Grafik koordinat polar melingkar untuk data arah/sudut/siklus.\n9. Factor analysis plot: Plot pemetaan faktor dalam analisis multivariat reduksi dimensi.',
      explanation: 'Grafik menyesatkan (misleading graph) sering terjadi saat peneliti memotong sumbu Y (misal sumbu Y dimulai dari 95 sampai 100). Perbedaan performa sebesar 1% akan terlihat seperti jurang perbedaan raksasa di mata pembaca awam. Peneliti wajib transparan mengenai skala sumbu!',
      example: {
        text: 'Menguji perbandingan waktu eksekusi algoritma: Disajikan dengan diagram garis untuk ukuran data 1.000 s/d 100.000. Sumbu X dan Y diberi label satuan milidetik yang jelas, tanpa manipulasi batas bawah skala.',
        isFabricated: false
      },
      pitfalls: [
        'Memotong sumbu vertikal grafik secara ekstrem sehingga perbedaan kecil terlihat seolah-olah lonjakan dramatis (misleading graph).',
        'Memakai diagram lingkaran (pie chart) untuk data yang jumlah persentasenya tidak menghasilkan 100% atau memiliki kategori terlalu banyak (> 7 irisan).'
      ],
      compare: {
        headers: ['Jenis Visual', 'Fungsi Representasi Terbaik', 'Peringatan Penggunaan'],
        rows: [
          ['Garis (Line)', 'Melihat tren perubahan berurutan waktu / beban', 'Hanya untuk data kontinu terurut'],
          ['Batang (Bar)', 'Membandingkan nilai kuantitas antar-kategori', 'Mulai sumbu Y dari angka 0'],
          ['Lingkaran (Pie/Doughnut)', 'Menunjukkan proporsi bagian terhadap keseluruhan', 'Hanya bila total bernilai tepat 100%'],
          ['Histogram', 'Melihat bentuk distribusi frekuensi data numerik', 'Bukan sekadar diagram batang biasa (ada binning)'],
          ['Scatter Plot', 'Melihat pola hubungan / korelasi 2 variabel', 'Titik ekstrem (outlier) harus dicermati']
        ]
      },
      memorize: {
        title: '9 Jenis Visual yang Disebut dalam Modul',
        items: [
          '1. Garis (perubahan berurutan)',
          '2. Batang (bandingkan kategori)',
          '3. Lingkaran / Doughnut (komposisi proporsi)',
          '4. Histogram (distribusi numerik kelompok)',
          '5. Combined bar chart',
          '6. Scatter diagram (pasangan nilai)',
          '7. 3D bar chart',
          '8. Polar chart',
          '9. Factor analysis plot'
        ],
        ordered: false
      },
      miniQuiz: [
        {
          id: 'q-m7-6-1',
          type: 'single',
          prompt: 'Jika seorang peneliti ingin memperlihatkan bentuk distribusi frekuensi dari data numerik skor tes yang dikelompokkan ke dalam rentang nilai tertentu, jenis visual yang paling tepat menurut modul adalah:',
          options: ['Diagram lingkaran (Pie chart)', 'Histogram', 'Polar chart', 'Factor analysis plot'],
          answer: 1,
          explanation: 'Histogram secara spesifik berfungsi menunjukkan distribusi data numerik yang dikelompokkan ke dalam interval frekuensi.',
          difficulty: 1,
          topicId: 'm7-penyajian-numeris'
        }
      ],
      tags: ['Visualisasi', '9 Jenis Grafik', 'Misleading Graph', 'Histogram'],
      glossaryTerms: ['misleading-graph', 'histogram', 'scatter-plot', 'line-chart']
    },
    {
      id: 'm7-signifikansi-evaluasi',
      moduleSlug: 'modul-7',
      slug: 'significance-tests-dan-evaluasi-objektif',
      title: 'Significance Tests & Evaluasi Sistematis Objektif',
      order: 7,
      readingMinutes: 4,
      tldr: 'Uji signifikansi wajib sebelum menarik kesimpulan eksperimen/simulasi. Evaluasi data secara sistematis terhadap setiap objektif penelitian satu per satu.',
      definition: 'Sebelum mengambil kesimpulan akhir dari eksperimen atau simulasi, peneliti wajib menerapkan significance tests (uji signifikansi statistik) yang sesuai. Peneliti kemudian mengevaluasi data secara sistematis terhadap setiap objektif (tujuan) penelitian. Pemilihan uji statistik harus sesuai dengan jenis data dan rancangan penelitian yang telah ditetapkan.',
      explanation: 'Dalam skripsi TI, jika Algoritma Baru rata-rata mencatat waktu 12,4 milidetik dan Algoritma Lama 12,6 milidetik, selisih 0,2 milidetik tersebut belum tentu signifikan secara statistik! Bisa saja selisih itu murni akibat variasi fluktuasi CPU latar belakang. Peneliti wajib menjalankan uji t (paired t-test atau independent t-test) untuk memastikan p-value < 0,05.',
      example: {
        text: 'Penelitian portal kampus memiliki 2 objektif: (1) menurunkan waktu pencarian, (2) meningkatkan kepuasan pengguna. Peneliti mengevaluasi objektif 1 dengan uji paired t-test (terbukti p < 0,01), lalu mengevaluasi objektif 2 dengan analisis deskriptif skor kuesioner Likert.',
        isFabricated: false
      },
      pitfalls: [
        'Menyimpulkan suatu algoritma lebih unggul hanya berdasarkan selisih rata-rata aritmetika kecil tanpa melakukan uji signifikansi statistik.',
        'Melewatkan salah satu tujuan penelitian yang tertulis di Bab 1 sehingga ada objektif yang tidak terjawab di Bab 4.'
      ],
      memorize: {
        title: 'Prinsip Evaluasi Objektif Penelitian',
        items: [
          'Uji signifikansi wajib dilakukan sebelum menyimpulkan hasil eksperimen.',
          'Evaluasi data dilakukan secara runtut terhadap setiap objektif yang ditetapkan di Bab 1.',
          'Pemilihan uji statistik harus selaras dengan skala data (nominal, ordinal, interval, rasio).'
        ],
        ordered: true
      },
      miniQuiz: [
        {
          id: 'q-m7-7-1',
          type: 'truefalse',
          prompt: 'Benar atau Salah: Sebelum menyimpulkan keunggulan suatu algoritma dalam eksperimen simulasi, peneliti wajib menerapkan uji signifikansi (significance tests) yang sesuai.',
          answer: true,
          explanation: 'Benar. Modul menegaskan: sebelum kesimpulan eksperimen/simulasi, terapkan uji signifikansi yang sesuai.',
          difficulty: 1,
          topicId: 'm7-signifikansi-evaluasi'
        }
      ],
      tags: ['Uji Signifikansi', 'Evaluasi Objektif', 'Statistik'],
      glossaryTerms: ['significance-test', 'p-value', 'evaluasi-objektif']
    },
    {
      id: 'm7-hasil-baik',
      moduleSlug: 'modul-7',
      slug: 'what-is-a-good-result',
      title: 'What is a Good Result? Hakikat Hasil Penelitian yang Baik',
      order: 8,
      readingMinutes: 4,
      tldr: 'Hasil baik = kesimpulan jelas dengan tingkat kepercayaan tinggi dari metode & analisis yang benar. Hipotesis boleh tidak didukung! Hasil yang diinginkan ≠ hasil yang handal.',
      definition: 'Hasil penelitian yang baik (What is a good result?) adalah hasil yang memungkinkan penarikan kesimpulan secara jelas dengan tingkat kepercayaan yang tinggi, yang diperoleh dari metode, data, penyajian, dan analisis yang benar secara ilmiah. Hipotesis awal BOLEH didukung atau TIDAK didukung!\nPeringatan keras modul: Hasil yang diinginkan (desired results) berbeda dari hasil yang handal (reliable results)! Peneliti dilarang keras menyembunyikan, memanipulasi, atau merekayasa data semata-mata demi mempertahankan hipotesis awalnya.',
      explanation: 'Banyak mahasiswa panik saat algoritma buatan mereka ternyata lebih lambat dari algoritma bawaan yang sudah ada, lalu tergoda mengubah angka log. Modul menegaskan: Hasil eksperimen yang membuktikan suatu metode tidak lebih baik tetap merupakan hasil penelitian yang baik dan bernilai ilmiah tinggi, asalkan metodologi dan pengujiannya dilakukan secara benar dan transparan.',
      example: {
        text: 'Algoritma pencarian baru yang dirancang ternyata membutuhkan memori 30% lebih besar setelah diuji pada beban 100.000 data. Temuan negatif ini tetap merupakan hasil penelitian yang sangat baik karena memberikan pengetahuan ilmiah berharga tentang keterbatasan arsitektur tersebut.',
        isFabricated: false
      },
      pitfalls: [
        'Mengubah atau membuang data pengujian agar hipotesis terbukti benar (pelanggaran etika integritas data).',
        'Menganggap skripsi gagal jika hipotesis nol (H0) tidak berhasil ditolak.'
      ],
      compare: {
        headers: ['Dimensi', 'Hasil yang Diinginkan (Desired)', 'Hasil yang Handal (Reliable/Good)'],
        rows: [
          ['Motivasi', 'Ego pribadi peneliti / harapan subjektif', 'Kebenaran empiris objektif fakta lapangan'],
          ['Status Hipotesis', 'Dipaksa harus terbukti mendukung hipotesis', 'Boleh terbukti didukung maupun tidak didukung'],
          ['Integritas Ilmiah', 'Rentan fabrikasi & cherry-picking data', 'Transparan, dapat direplikasi, dan dapat dipercaya']
        ]
      },
      memorize: {
        title: '3 Karakteristik Hasil Riset yang Baik',
        items: [
          '1. Memungkinkan kesimpulan jelas dengan derajat kepercayaan tinggi.',
          '2. Lahir dari metode, data, penyajian, dan analisis yang valid.',
          '3. Hipotesis boleh didukung atau ditolak; jangan pernah sembunyikan data!'
        ],
        ordered: false
      },
      miniQuiz: [
        {
          id: 'q-m7-8-1',
          type: 'single',
          prompt: 'Jika algoritma baru yang diajukan peneliti ternyata setelah diuji secara valid terbukti tidak lebih cepat dari algoritma lama, apa status hasil penelitian tersebut menurut modul?',
          options: [
            'Skripsi otomatis dinyatakan gagal dan harus mengulang dari awal',
            'Temuan itu tetap dapat menjadi hasil penelitian yang baik asalkan diperoleh dari metode, pengujian, dan analisis yang benar',
            'Peneliti wajib mengubah data log agar hasilnya sesuai harapan',
            'Hasil tersebut tidak boleh dipresentasikan di sidang'
          ],
          answer: 1,
          explanation: 'Modul menegaskan: hipotesis awal boleh didukung atau tidak didukung; hasil yang diinginkan berbeda dari hasil yang handal, dan temuan tersebut tetap bernilai ilmiah.',
          difficulty: 1,
          topicId: 'm7-hasil-baik'
        }
      ],
      tags: ['Good Result', 'Integritas Data', 'Hipotesis Ditolak'],
      glossaryTerms: ['good-result', 'reliable-result', 'integritas-ilmiah']
    },
    {
      id: 'm7-tujuh-pertanyaan-konteks',
      moduleSlug: 'modul-7',
      slug: 'tujuh-pertanyaan-konteks-hasil',
      title: 'Merangkum & 7 Pertanyaan Konteks Hasil Riset',
      order: 9,
      readingMinutes: 4,
      tldr: 'Bagian penutup merangkum hasil & menempatkannya dalam konteks. Jangan memperluas kesimpulan ke kondisi yang tidak diteliti! Wajib hafal 7 pertanyaan konteks modul.',
      definition: 'Bagian penutup skripsi merangkum hasil serta menempatkannya dalam konteks manfaat, pengguna, kontribusi bidang, area terkait, dan hubungan dengan penelitian lain. Peringatan penting modul: Jangan memperluas kesimpulan ke kondisi yang tidak diteliti!\nTujuh pertanyaan konteks dari modul (hafalan berurutan):\n1. Untuk apa hasil dapat digunakan?\n2. Siapa yang dapat menggunakan temuan dan dengan cara apa?\n3. Apakah ada kontribusi pada bidang penelitian?\n4. Area terkait apa yang dapat memperoleh manfaat?\n5. Apakah manfaat bersifat praktis atau memperdalam teori?\n6. Bagaimana hasil dibanding hasil orang lain?\n7. Apakah temuan sejalan dengan pekerjaan terkait?',
      explanation: 'Jika Anda hanya meneliti performa portal kampus pada jaringan lokal intranet universitas, Anda tidak boleh menarik kesimpulan generalis bahwa "aplikasi ini terbukti tercepat di seluruh jaringan internet Indonesia". Batasi klaim kesimpulan persis pada parameter lingkungan yang diteliti, lalu jawab ketujuh pertanyaan konteks ini di bab pembahasan.',
      example: {
        text: 'Temuan bahwa algoritma inverted index 40% lebih cepat pada pencarian kegiatan kampus diuraikan: (1) dipakai untuk mesin cari kampus, (2) digunakan admin BEM, (3) menyumbang optimasi pencarian metadata pendek, (4) bermanfaat untuk sistem perpustakaan, (5) manfaat praktis, (6) 15% lebih hemat memori dibanding sistem X, (7) sejalan dengan temuan Peneliti A.',
        isFabricated: false
      },
      pitfalls: [
        'Melakukan overgeneralization (menarik kesimpulan melampaui kondisi data yang diuji).',
        'Menulis bab penutup yang hanya mengulang kalimat ringkasan bab 4 tanpa menghubungkannya dengan konteks kontribusi ilmu pengetahuan.'
      ],
      memorize: {
        title: '7 Pertanyaan Konteks Hasil (Wajib Hafal)',
        items: [
          '1. Untuk apa hasil dapat digunakan?',
          '2. Siapa yang dapat menggunakan temuan dan dengan cara apa?',
          '3. Apakah ada kontribusi pada bidang penelitian?',
          '4. Area terkait apa yang dapat memperoleh manfaat?',
          '5. Apakah manfaat bersifat praktis atau memperdalam teori?',
          '6. Bagaimana hasil dibanding hasil orang lain?',
          '7. Apakah temuan sejalan dengan pekerjaan terkait?'
        ],
        ordered: true
      },
      mnemonic: {
        text: 'A-S-K-A-M-B-S (Apa guna, Siapa pakai, Kontribusi bidang, Area terkait, Manfaat praktis/teori, Banding orang, Sejalan terkait)',
        note: 'Mnemonik buatan'
      },
      miniQuiz: [
        {
          id: 'q-m7-9-1',
          type: 'single',
          prompt: 'Peringatan penting modul RTI saat merangkum dan menarik kesimpulan hasil penelitian adalah:',
          options: [
            'Wajib mengubah kesimpulan agar memuji kampus',
            'Jangan memperluas kesimpulan ke kondisi yang tidak diteliti',
            'Kesimpulan harus dibuat sepanjang 50 halaman',
            'Dilarang membandingkan temuan dengan penelitian orang lain'
          ],
          answer: 1,
          explanation: 'Modul secara tegas mengingatkan: "Jangan memperluas kesimpulan ke kondisi yang tidak diteliti."',
          difficulty: 1,
          topicId: 'm7-tujuh-pertanyaan-konteks'
        }
      ],
      tags: ['7 Pertanyaan Konteks', 'Kesimpulan', 'Hafalan'],
      glossaryTerms: ['kontekstualisasi', 'overgeneralization', 'kesimpulan-penelitian']
    },
    {
      id: 'm7-evaluasi-future-work',
      moduleSlug: 'modul-7',
      slug: 'evaluasi-proses-dan-future-work',
      title: 'Evaluasi Proses & Saran Penelitian Lanjut (Future Work)',
      order: 10,
      readingMinutes: 4,
      tldr: 'Evaluasi proses = kelebihan, kelemahan, kesalahan, dan keputusan baik. Future work = saran konkret & prioritas (bukan sekadar saran normatif "agar lebih baik").',
      definition: 'Evaluasi proses adalah kegiatan menelusuri kembali perjalanan pekerjaan penelitian untuk menunjukkan kelebihan, kelemahan, kesalahan yang terjadi, serta keputusan baik yang diyakini valid. Peringatan modul: Evaluasi bukan daftar kelemahan saja; keputusan yang baik juga perlu dijelaskan dengan dasar yang logis!\nFuture work (saran penelitian lanjut) membantu pemahaman pekerjaan dan perencanaan riset baru berdasarkan hasil yang dicapai. Peringatan modul: Saran umum seperti "agar sistem lebih baik" belum menunjukkan pekerjaan konkret! Tanyakan tujuan yang masih tersisa, prioritas bila waktu bertambah, pertanyaan baru yang muncul, serta syarat penerapan di dunia nyata.',
      explanation: 'Saran skripsi yang buruk: "Diharapkan aplikasi ini di masa depan dapat dikembangkan agar lebih baik dan bermanfaat bagi nusa bangsa." Ini adalah klise tanpa nilai akademis. Saran yang baik: "Pengujian selanjutnya disarankan mengevaluasi performa algoritma pada kondisi koneksi seluler 3G/4G dengan packet loss di atas 10%."',
      example: {
        text: 'Jika portal hanya diuji pada satu unit kampus, pengujian pada unit lintas fakultas dengan struktur data beragam dapat diusulkan sebagai saran penelitian lanjut yang terukur.',
        isFabricated: false
      },
      pitfalls: [
        'Menuliskan saran penelitian lanjut yang bersifat umum, klise, dan normatif tanpa rencana teknis konkret.',
        'Hanya menuliskan daftar kelemahan diri sendiri pada evaluasi proses tanpa menjelaskan keputusan pengendalian yang berhasil diambil.'
      ],
      memorize: {
        title: 'Panduan Evaluasi Proses & Future Work',
        items: [
          'Evaluasi proses mencakup 4 hal: kelebihan, kelemahan, kesalahan, dan keputusan baik.',
          'Evaluasi bukan sekadar daftar komplain kelemahan diri.',
          'Saran penelitian lanjut harus KONKRET, terukur, dan menjawab batas penelitian.',
          'Hindari saran klise normatif "agar lebih baik".'
        ],
        ordered: false
      },
      miniQuiz: [
        {
          id: 'q-m7-10-1',
          type: 'truefalse',
          prompt: 'Benar atau Salah: Menuliskan saran skripsi dengan kalimat "Semoga di masa depan aplikasi ini dapat dikembangkan menjadi lebih baik dan sempurna" sudah memenuhi standar Future Work yang baik menurut modul.',
          answer: false,
          explanation: 'Salah. Modul memperingatkan: "Saran umum seperti agar lebih baik belum menunjukkan pekerjaan konkret. Tanyakan tujuan tersisa, prioritas, dan syarat penerapan nyata."',
          difficulty: 1,
          topicId: 'm7-evaluasi-future-work'
        }
      ],
      tags: ['Evaluasi Proses', 'Future Work', 'Saran Konkret'],
      glossaryTerms: ['evaluasi-proses', 'future-work', 'keterbatasan-penelitian']
    },
    {
      id: 'm7-poster-ilmiah',
      moduleSlug: 'modul-7',
      slug: 'poster-ilmiah-panduan-lengkap',
      title: 'Poster Ilmiah: Panduan Lengkap Desain & Presentasi',
      order: 11,
      readingMinutes: 7,
      tldr: 'Bentuk presentasi visual dua arah di konferensi. 3 Pedoman: Let it breathe, Keep it lined up, Tell reader where to go. Software: InDesign, PowerPoint, Scribus. Batasan kata: Title 1-2 baris, Intro/Methods/Results/Conclusions ~200 kata, Aims <100 kata, Refs 5-10 sitasi font sangat kecil.',
      definition: 'Poster ilmiah adalah bentuk presentasi penelitian selain presentasi oral yang diizinkan pada konferensi ilmiah. Modul mengupas tuntas poster ilmiah:\n\n1. Empat Kelebihan Poster Ilmiah:\n- Meeting organization: Memungkinkan panitia menampilkan lebih banyak karya dalam waktu dan ruangan yang terbatas.\n- Two-way dialogue: Diskusi lebih rileks, fleksibel, interaktif dua arah dengan audiens.\n- Networking ilmuwan muda: Peluang interaksi empat mata yang sangat efektif untuk membangun jaringan kolaborasi.\n- Visual communication: Pengunjung dapat mengatur kecepatan bacanya sendiri; poster dapat dipasang kembali di institusi kampus.\n\n2. Empat Keterbatasan Poster Ilmiah:\n- Memerlukan waktu ekstra untuk tata letak desain dan biaya cetak format besar.\n- Tidak semua jenis penelitian cocok disajikan dalam bentuk poster (misalnya riset murni teoritis/matematis yang sarat rumus pembuktian panjang menurut slide).\n- Poster fisik berukuran besar lebih rentan kusut/rusak dan sulit dibawa saat bepergian.\n- Sebagian kalangan masih menganggap presentasi poster kurang prestisius/resmi dibanding presentasi oral di podium utama.\n\n3. Komponen Utama Poster:\nTitle, author(s), affiliation(s), abstract (jika diminta konferensi), introduction, objectives/hypotheses/aims/questions, materials and methods, results, conclusions, acknowledgements, references, contact information.\n\n4. Storyboard vs Electronic Dummy:\n- Storyboard: Sketsa tata letak awal poster menggunakan pensil dan kertas fisik.\n- Electronic dummy / template: Rancangan digital di software menggunakan placeholder teks/kotak gambar rekaan sebelum diisi materi penelitian yang sebenarnya.\n\n5. Tiga Pedoman Desain Utama (Hafalan Wajib):\n- Let it breathe: Berikan ruang kosong (whitespace) yang cukup agar pembaca tidak sesak.\n- Keep it lined up: Jaga perataan tepi (alignment) dan struktur grid yang rapi.\n- Tell the reader where to go: Ciptakan alur baca visual yang jelas terorganisir (kiri ke kanan, atas ke bawah).\n\n6. Tiga Software yang Disebut Modul:\n- Adobe InDesign: Khusus tata letak penerbitan profesional, modul menyebut harganya mahal.\n- Microsoft PowerPoint: Sangat familiar bagi mahasiswa, namun bukan software yang dirancang khusus untuk pencetakan dokumen poster skala besar.\n- Scribus: Perangkat lunak gratis (open-source), namun memerlukan kurva pembelajaran.\n\n7. Panduan Panjang Bagian (Word Count Modul):\n- Title: Maksimum 1 sampai 2 baris.\n- Introduction: Sekitar 200 kata.\n- Aims / Objectives: Kurang dari 100 kata (bila dicantumkan terpisah).\n- Materials and Methods: Sekitar 200 kata.\n- Results: Sekitar 200 kata (di luar teks caption gambar/tabel).\n- Conclusions: Sekitar 200 kata.\n- Acknowledgements: Kurang dari 100 kata (font kecil).\n- References: Sekitar 5 sampai 10 sitasi kunci (modul menyebut menggunakan font sangat kecil).\n\n8. Tipografi, Warna, dan Gambar:\n- Maksimum 2 hingga 3 font yang saling melengkapi (misal sans-serif untuk judul dan serif untuk narasi). Hindari word art, drop shadows tebal, efek gradient norak, dan font dekoratif nonformal seperti Comic Sans!\n- Pastikan kontras teks terhadap warna latar (background solid) sangat tinggi, serta pertimbangkan pembaca yang buta warna.\n- Kualitas gambar: Masukkan gambar resolusi tinggi (PNG/TIFF/JPG) menggunakan menu Import/Place, BUKAN copy-paste langsung!\n- Jaga proporsi gambar saat mengubah ukuran (resize menggunakan tombol Shift agar gambar tidak terdistorsi gepeng/lebar).\n\n9. Pemeriksaan, Cetak, dan Presentasi:\n- Cetak draf percobaan ukuran kecil (A4) pada bahan sasaran untuk mengecek kesesuaian warna.\n- Ekspor ke format PDF resolusi tinggi dan mintalah kritik sejawat sebelum mencetak.\n- Modul menyarankan bahan cetak kertas semiglossy, dan memperingatkan pantulan cahaya lampu sorot jika memakai bahan ultraglossy atau laminasi plastik kilap.\n- Lindungi poster dalam tabung plastik selama perjalanan, siapkan kartu nama, kenakan pakaian sopan, dan latih penjelasan ringkas 3 sampai 5 menit.',
      explanation: 'Poster ilmiah bukanlah salinan PDF makalah skripsi yang ditempel di papan! Poster adalah ringkasan visual yang memancing orang untuk berhenti berjalan, membaca poin kuncinya dalam 2 menit, lalu berdialog langsung dengan Anda.',
      example: {
        text: 'Poster Portal Kampus dirancang dengan 3 kolom vertikal di Scribus, judul 1 baris, diagram alur algoritma berwarna kontras, grafik perbandingan latensi di tengah, kesimpulan 180 kata di kanan bawah, 6 rujukan IEEE di kaki poster, dan kartu nama disiapkan di saku.',
        isFabricated: false
      },
      pitfalls: [
        'Menyalin-tempel teks skripsi 1.000 kata ke poster sehingga huruf berukuran sangat kecil dan tidak terbaca dari jarak 1 meter.',
        'Menggunakan font Comic Sans atau WordArt gradien warna-warni yang merusak profesionalisme akademis.',
        'Melakukan copy-paste gambar langsung dari browser web beresolusi rendah sehingga pecah dan buram saat dicetak besar.',
        'Menggunakan laminasi ultraglossy yang memantulkan lampu sorot ruangan konferensi sehingga poster sulit dibaca.'
      ],
      compare: {
        headers: ['Bagian Poster', 'Panduan Panjang Modul RTI', 'Ukuran Font & Catatan'],
        rows: [
          ['Title (Judul)', 'Maksimum 1 - 2 baris', 'Font paling besar, terbaca dari 3-5 meter'],
          ['Introduction', 'Sekitar 200 kata', 'Latar belakang & problem statement'],
          ['Aims / Objectives', 'Kurang dari 100 kata', 'Pernyataan sasaran lugas'],
          ['Materials & Methods', 'Sekitar 200 kata', 'Bagan alur atau diagram sistem'],
          ['Results', 'Sekitar 200 kata (di luar caption)', 'Didominasi grafik & tabel bersih'],
          ['Conclusions', 'Sekitar 200 kata', 'Temuan inti menjawab tujuan'],
          ['Acknowledgements', 'Kurang dari 100 kata', 'Ucapan terima kasih donatur/pembimbing'],
          ['References', 'Sekitar 5 - 10 sitasi kunci', 'Font sangat kecil di bagian bawah']
        ]
      },
      memorize: {
        title: 'Hafalan Inti Poster Ilmiah',
        items: [
          '3 Pedoman Desain: Let it breathe (ruang kosong), Keep it lined up (grid rapi), Tell the reader where to go (alur jelas).',
          '3 Software Modul: InDesign (mahal), PowerPoint (familiar tapi bukan cetak besar), Scribus (gratis open source).',
          'Panduan Kata: Intro ~200, Methods ~200, Results ~200, Conclusions ~200, Aims <100, Ref 5-10 sitasi.',
          'Aturan Visual: Maks 3 font (hindari Comic Sans/WordArt), solid background, import gambar (jangan copy-paste), semiglossy (hindari pantulan ultraglossy), latihan bicara 3-5 menit.'
        ],
        ordered: false
      },
      sourceNote: 'Batasan panjang kata per bagian poster dan software yang dicantumkan adalah panduan spesifik dari slide Modul 7 RTI.',
      miniQuiz: [
        {
          id: 'q-m7-11-1',
          type: 'single',
          prompt: 'Tiga pedoman desain poster ilmiah yang wajib diingat menurut modul RTI adalah:',
          options: [
            'Make it flashy, Add gradients, Fill all space',
            'Let it breathe, Keep it lined up, Tell the reader where to go',
            'Print in black, Use comic sans, Save as jpg',
            'Copy text, Paste code, Add animations'
          ],
          answer: 1,
          explanation: 'Slide 77 Modul 7 menegaskan 3 pedoman emas: Let it breathe (ruang kosong), Keep it lined up (alignment grid), dan Tell the reader where to go (alur navigasi jelas).',
          difficulty: 1,
          topicId: 'm7-poster-ilmiah'
        }
      ],
      tags: ['Poster Ilmiah', '3 Pedoman Desain', 'Panjang Kata', 'Software', 'Presentasi'],
      glossaryTerms: ['poster-ilmiah', 'storyboard', 'electronic-dummy', 'semiglossy']
    }
  ]
};
