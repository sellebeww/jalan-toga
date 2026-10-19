import type { ApproachId } from './majors';

export interface Approach {
  id: ApproachId;
  nama: string;
  ringkas: string;
  cocokJika: string[];
  hatiHati: string[];
  desain: string[];
  sampling: string;
  instrumen: string[];
  analisis: string[];
  bab3: string;
  alat: string[];
  contohJudul: string[];
}

export const approaches: Record<ApproachId, Approach> = {
  kuantitatif: {
    id: 'kuantitatif',
    nama: 'Kuantitatif',
    ringkas: 'Mengukur variabel dalam angka lalu menguji pengaruh, hubungan, atau perbedaan secara statistik.',
    cocokJika: [
      'Kamu sudah punya teori dan variabel yang jelas untuk diuji',
      'Responden atau data sekunder mudah diakses dalam jumlah memadai',
      'Kamu ingin hasil yang bisa digeneralisasi ke populasi',
      'Nyaman dengan statistik dasar'
    ],
    hatiHati: [
      'Jumlah sampel yang terlalu kecil melemahkan uji statistik',
      'Instrumen harus valid dan reliabel, bukan dibuat asal',
      'Korelasi tidak sama dengan sebab-akibat'
    ],
    desain: ['Survei korelasional/kausal', 'Eksperimen atau quasi-eksperimen (pretest–posttest, kelompok kontrol)', 'Ex post facto', 'Analisis data sekunder atau data panel'],
    sampling: 'Idealnya probability sampling (acak sederhana, stratified, cluster). Jika populasi tidak diketahui, gunakan nonprobability (purposive/accidental) dengan alasan dan batas generalisasi yang jelas.',
    instrumen: ['Kuesioner skala Likert', 'Tes hasil belajar atau skala psikologi baku', 'Alat ukur laboratorium', 'Data sekunder (laporan keuangan, statistik resmi)'],
    analisis: ['Uji validitas dan reliabilitas', 'Statistik deskriptif', 'Uji asumsi (normalitas, homogenitas, multikolinearitas)', 'Regresi, korelasi, uji t, ANOVA, atau SEM-PLS'],
    bab3: 'Desain, populasi & sampel (dengan rumus), definisi operasional variabel, instrumen & uji instrumen, serta teknik analisis dan uji hipotesis.',
    alat: ['SPSS', 'SmartPLS', 'R/Python', 'Excel', 'JASP/Jamovi'],
    contohJudul: ['Pengaruh Kualitas Pelayanan terhadap Kepuasan Pelanggan Kafe X', 'Hubungan Pola Tidur dengan Prestasi Belajar Mahasiswa']
  },
  kualitatif: {
    id: 'kualitatif',
    nama: 'Kualitatif',
    ringkas: 'Memahami makna, pengalaman, dan proses melalui data berupa kata, tindakan, dan dokumen.',
    cocokJika: [
      'Kamu ingin tahu "bagaimana" dan "mengapa", bukan "seberapa besar"',
      'Fenomena belum banyak diteliti atau teorinya belum mapan',
      'Informan yang tepat bisa diwawancarai secara mendalam (sekitar 5–15 orang)',
      'Kamu nyaman menulis uraian naratif dan menganalisis teks'
    ],
    hatiHati: [
      'Transkripsi dan koding memakan waktu sangat banyak',
      'Subjektivitas peneliti harus dikelola (refleksivitas, triangulasi)',
      'Hasil tidak untuk digeneralisasi secara statistik'
    ],
    desain: ['Fenomenologi', 'Etnografi', 'Grounded theory', 'Naratif', 'Analisis isi / wacana / semiotika'],
    sampling: 'Purposive sampling atau snowball. Jumlah ditentukan oleh kejenuhan data (saturation), bukan rumus.',
    instrumen: ['Pedoman wawancara semiterstruktur', 'Lembar observasi', 'Studi dokumentasi', 'Peneliti sebagai instrumen utama'],
    analisis: ['Reduksi, penyajian, dan verifikasi data (Miles, Huberman & Saldaña)', 'Analisis tematik (Braun & Clarke)', 'Koding terbuka–aksial–selektif (grounded theory)'],
    bab3: 'Pendekatan & jenis, lokasi & informan, teknik pengumpulan data, instrumen, teknik analisis, dan uji keabsahan data (triangulasi, member check, audit trail).',
    alat: ['NVivo', 'Atlas.ti', 'Excel/Notion untuk matriks koding', 'Perekam suara + transkripsi'],
    contohJudul: ['Pengalaman Perawat Merawat Pasien Paliatif: Studi Fenomenologi', 'Strategi Adaptasi Petani Menghadapi Perubahan Iklim']
  },
  mixed: {
    id: 'mixed',
    nama: 'Metode campuran (mixed methods)',
    ringkas: 'Menggabungkan data angka dan data naratif dalam satu penelitian untuk saling melengkapi.',
    cocokJika: [
      'Angka saja tidak cukup menjelaskan, atau cerita saja tidak cukup membuktikan',
      'Waktu cukup panjang (lebih dari satu semester biasanya aman)',
      'Pembimbing berpengalaman dengan desain campuran'
    ],
    hatiHati: [
      'Beban kerja ganda: dua pengumpulan dan dua analisis data',
      'Harus ada alasan kuat menggabungkan, bukan sekadar "biar lengkap"',
      'Sering terlalu berat untuk skripsi S1; tanyakan pembimbing'
    ],
    desain: ['Sequential explanatory (kuantitatif lalu kualitatif)', 'Sequential exploratory (kualitatif lalu kuantitatif)', 'Convergent parallel'],
    sampling: 'Gabungan: sampel kuantitatif yang cukup besar dan sub-sampel informan kualitatif yang dipilih purposif.',
    instrumen: ['Kuesioner/tes', 'Pedoman wawancara/observasi'],
    analisis: ['Analisis statistik untuk bagian kuantitatif', 'Analisis tematik untuk bagian kualitatif', 'Integrasi: bandingkan atau jelaskan temuan satu dengan yang lain'],
    bab3: 'Desain campuran dan alasannya, dua rangkaian pengumpulan/analisis data, serta bagaimana kedua temuan diintegrasikan.',
    alat: ['SPSS/R + NVivo', 'Excel'],
    contohJudul: ['Efektivitas dan Pengalaman Penggunaan Aplikasi Belajar Daring pada Siswa SMA: Studi Campuran']
  },
  rnd: {
    id: 'rnd',
    nama: 'Penelitian dan pengembangan (R&D)',
    ringkas: 'Menghasilkan dan menguji produk (media, modul, aplikasi, model, alat) sampai layak dipakai.',
    cocokJika: [
      'Tujuan akhirnya adalah sebuah produk yang bisa dipakai',
      'Ada akses ke ahli untuk validasi dan pengguna untuk uji coba',
      'Kamu menikmati merancang dan membangun'
    ],
    hatiHati: [
      'Produk tanpa masalah penelitian yang jelas hanya jadi "proyek", bukan skripsi',
      'Perlu bukti kelayakan: validasi ahli, kepraktisan, keefektifan',
      'Waktu pembuatan produk sering diremehkan'
    ],
    desain: ['ADDIE', '4D (Define, Design, Develop, Disseminate)', 'Borg & Gall', 'Waterfall / Prototyping (perangkat lunak)', 'Design Thinking'],
    sampling: 'Subjek uji coba dipilih purposif: ahli untuk validasi, pengguna untuk uji kepraktisan, kelompok terbatas untuk uji keefektifan.',
    instrumen: ['Lembar validasi ahli (materi, media, bahasa)', 'Angket respons pengguna', 'Tes pretest–posttest untuk efektivitas', 'Pengujian fungsional (blackbox) dan UAT/SUS untuk perangkat lunak'],
    analisis: ['Analisis kelayakan (skor validasi → kategori)', 'Analisis kepraktisan (skor angket)', 'Uji keefektifan (N-Gain atau uji t)'],
    bab3: 'Model pengembangan, prosedur tiap tahap, subjek uji coba, instrumen validasi/respons, dan teknik analisis kelayakan.',
    alat: ['Figma', 'Canva/Adobe', 'Bahasa pemrograman terkait', 'SPSS/Excel'],
    contohJudul: ['Pengembangan Media Pembelajaran Interaktif Materi Ekosistem Berbasis Android', 'Rancang Bangun Sistem Informasi Inventaris dengan Metode Prototyping']
  },
  ptk: {
    id: 'ptk',
    nama: 'Penelitian tindakan kelas (PTK)',
    ringkas: 'Memperbaiki praktik pembelajaran lewat siklus tindakan, pengamatan, dan refleksi di kelasmu sendiri.',
    cocokJika: [
      'Kamu mengajar atau punya akses penuh ke sebuah kelas untuk beberapa pertemuan',
      'Ada masalah nyata di kelas (hasil belajar rendah, siswa pasif)',
      'Guru kolaborator bersedia mengamati'
    ],
    hatiHati: [
      'Butuh minimal 2 siklus dan waktu kelas yang pasti',
      'Indikator keberhasilan harus ditetapkan sejak awal',
      'Beberapa kampus hanya menerima PTK untuk prodi keguruan'
    ],
    desain: ['Model Kemmis & McTaggart (perencanaan–tindakan–observasi–refleksi)', 'Model Lewin', 'PTK kolaboratif'],
    sampling: 'Satu kelas (subjek tindakan) yang sudah ditentukan; tidak memakai sampling acak.',
    instrumen: ['Lembar observasi aktivitas', 'Tes hasil belajar tiap siklus', 'Angket respons siswa', 'Catatan lapangan dan dokumentasi'],
    analisis: ['Analisis deskriptif (persentase ketuntasan, rata-rata)', 'Perbandingan pra-siklus, siklus I, siklus II', 'Refleksi kualitatif'],
    bab3: 'Subjek dan lokasi, desain siklus, prosedur tiap siklus, instrumen, teknik analisis, dan indikator keberhasilan.',
    alat: ['Excel', 'SPSS (opsional)'],
    contohJudul: ['Peningkatan Hasil Belajar Matematika melalui Model PBL pada Siswa Kelas V: PTK']
  },
  'studi-kasus': {
    id: 'studi-kasus',
    nama: 'Studi kasus',
    ringkas: 'Menyelidiki satu atau beberapa kasus nyata secara mendalam dengan banyak sumber bukti.',
    cocokJika: [
      'Kamu punya akses mendalam ke satu organisasi, komunitas, program, atau peristiwa',
      'Pertanyaannya "bagaimana" atau "mengapa" pada konteks nyata',
      'Kasusnya menarik atau unik secara akademik'
    ],
    hatiHati: [
      'Batas kasus (unit analisis) harus jelas',
      'Generalisasi terbatas; fokus pada kedalaman',
      'Perlu banyak sumber bukti agar tidak berat sebelah'
    ],
    desain: ['Kasus tunggal holistik atau terpancang', 'Kasus ganda (komparatif)', 'Studi kasus intrinsik atau instrumental (Stake)'],
    sampling: 'Pemilihan kasus purposif dengan alasan (unik, representatif, atau ekstrem), dan informan kunci di dalam kasus.',
    instrumen: ['Wawancara', 'Observasi', 'Dokumen dan arsip', 'Protokol studi kasus'],
    analisis: ['Pattern matching', 'Pembangunan penjelasan (explanation building)', 'Triangulasi sumber', 'Analisis tematik lintas data'],
    bab3: 'Alasan memilih kasus, batas kasus, sumber bukti, protokol pengumpulan data, dan teknik analisis serta keabsahan data.',
    alat: ['NVivo', 'Atlas.ti', 'Excel'],
    contohJudul: ['Implementasi Transformasi Digital pada UMKM X: Studi Kasus']
  },
  'hukum-normatif': {
    id: 'hukum-normatif',
    nama: 'Penelitian hukum normatif',
    ringkas: 'Mengkaji norma hukum (peraturan, putusan, asas, doktrin) lewat studi dokumen dan penalaran hukum.',
    cocokJika: [
      'Isu penelitian berupa kekosongan, konflik, atau ketidakjelasan norma',
      'Bahan hukum tersedia lengkap (JDIH, direktori putusan, literatur)',
      'Kamu nyaman dengan penalaran hukum dan argumentasi tertulis'
    ],
    hatiHati: [
      'Pastikan peraturan masih berlaku dan sebutkan pasal dengan tepat',
      'Hindari sekadar menjelaskan isi aturan tanpa analisis',
      'Bila butuh data empiris, ubah ke pendekatan yuridis empiris'
    ],
    desain: ['Pendekatan perundang-undangan', 'Pendekatan kasus', 'Pendekatan konseptual', 'Pendekatan perbandingan', 'Pendekatan historis'],
    sampling: 'Tidak memakai sampling responden. Bahan hukum dipilih berdasarkan relevansi: primer (peraturan, putusan), sekunder (buku, jurnal), tersier (kamus, ensiklopedia).',
    instrumen: ['Studi kepustakaan dan dokumen', 'Inventarisasi bahan hukum'],
    analisis: ['Analisis preskriptif', 'Penafsiran (gramatikal, sistematis, teleologis)', 'Penalaran deduktif (silogisme hukum)'],
    bab3: 'Jenis penelitian, pendekatan, bahan hukum, teknik pengumpulan bahan hukum, dan teknik analisis.',
    alat: ['JDIH', 'Direktori putusan MA', 'Mendeley/Zotero'],
    contohJudul: ['Analisis Yuridis Perlindungan Data Pribadi dalam Pinjaman Daring Berdasarkan UU PDP']
  },
  'kajian-pustaka': {
    id: 'kajian-pustaka',
    nama: 'Kajian pustaka / systematic review',
    ringkas: 'Menyintesis penelitian atau pemikiran yang sudah ada secara sistematis tanpa pengumpulan data lapangan.',
    cocokJika: [
      'Akses data lapangan sulit atau waktu sangat terbatas',
      'Tujuanmu memetakan state of the art atau menyintesis bukti',
      'Prodi mengizinkan skripsi berbasis studi literatur'
    ],
    hatiHati: [
      'Banyak prodi hanya mengizinkan kajian pustaka dengan metode sistematis (SLR) yang ketat',
      'Pencarian dan seleksi harus terdokumentasi (PRISMA)',
      'Sintesis, bukan sekadar daftar ringkasan'
    ],
    desain: ['Systematic Literature Review (PRISMA)', 'Scoping review', 'Narrative review', 'Library research (kajian teks)'],
    sampling: 'Studi dipilih lewat kriteria inklusi–eksklusi dari database terpilih (Scopus, Google Scholar, Garuda, DOAJ).',
    instrumen: ['Protokol review', 'String pencarian', 'Formulir ekstraksi data', 'Penilaian kualitas studi'],
    analisis: ['Sintesis naratif atau tematik', 'Tabulasi dan pemetaan studi', 'Meta-analisis (jika data kuantitatif memungkinkan)'],
    bab3: 'Pertanyaan review, strategi pencarian, kriteria inklusi–eksklusi, proses seleksi (diagram alir), ekstraksi, dan teknik sintesis.',
    alat: ['Zotero/Mendeley', 'Rayyan', 'Excel', 'VOSviewer'],
    contohJudul: ['Systematic Literature Review: Penerapan Machine Learning dalam Deteksi Dini Penyakit']
  }
};

export interface WizardOption {
  label: string;
  /** poin tambahan untuk tiap pendekatan */
  skor: Partial<Record<ApproachId, number>>;
}

export interface WizardQuestion {
  id: string;
  tanya: string;
  bantuan?: string;
  opsi: WizardOption[];
}

export const wizard: WizardQuestion[] = [
  {
    id: 'tujuan',
    tanya: 'Apa yang paling ingin kamu ketahui atau hasilkan?',
    bantuan: 'Pilih yang paling dekat dengan inti pertanyaan penelitianmu.',
    opsi: [
      { label: 'Seberapa besar pengaruh, hubungan, atau perbedaan antar hal yang bisa diukur', skor: { kuantitatif: 4, mixed: 1 } },
      { label: 'Bagaimana orang mengalami atau memaknai sesuatu, atau mengapa suatu hal terjadi', skor: { kualitatif: 4, 'studi-kasus': 1, mixed: 1 } },
      { label: 'Membuat dan menguji produk (aplikasi, media, modul, alat, model)', skor: { rnd: 5 } },
      { label: 'Memperbaiki praktik pembelajaran atau pekerjaan di kelas/tempat yang aku kelola', skor: { ptk: 5 } },
      { label: 'Memahami satu kasus (organisasi, program, peristiwa) secara mendalam', skor: { 'studi-kasus': 5, kualitatif: 1 } },
      { label: 'Menganalisis peraturan, putusan, atau norma hukum', skor: { 'hukum-normatif': 6 } },
      { label: 'Menyintesis penelitian atau pemikiran yang sudah ada', skor: { 'kajian-pustaka': 5 } }
    ]
  },
  {
    id: 'data',
    tanya: 'Data seperti apa yang paling mungkin kamu dapatkan?',
    opsi: [
      { label: 'Angka: skor kuesioner, pengukuran alat, data statistik/keuangan', skor: { kuantitatif: 3, rnd: 1 } },
      { label: 'Kata-kata: wawancara, observasi, dokumen, unggahan media', skor: { kualitatif: 3, 'studi-kasus': 2 } },
      { label: 'Keduanya, dan aku butuh dua-duanya untuk menjawab pertanyaan', skor: { mixed: 4 } },
      { label: 'Hasil uji produk dan penilaian ahli/pengguna', skor: { rnd: 3, ptk: 1 } },
      { label: 'Teks: peraturan, putusan, kitab, artikel ilmiah', skor: { 'hukum-normatif': 3, 'kajian-pustaka': 3 } }
    ]
  },
  {
    id: 'akses',
    tanya: 'Bagaimana akses ke responden atau lokasi penelitianmu?',
    opsi: [
      { label: 'Mudah menjangkau banyak responden (50 orang atau lebih)', skor: { kuantitatif: 2 } },
      { label: 'Terbatas, tetapi bisa mewawancarai beberapa orang secara mendalam', skor: { kualitatif: 2, 'studi-kasus': 2 } },
      { label: 'Aku punya akses penuh ke satu organisasi, sekolah, atau kelas', skor: { 'studi-kasus': 2, ptk: 2, rnd: 1 } },
      { label: 'Tidak membutuhkan responden', skor: { 'hukum-normatif': 2, 'kajian-pustaka': 2 } }
    ]
  },
  {
    id: 'teori',
    tanya: 'Seberapa jelas teori dan variabel di topikmu?',
    opsi: [
      { label: 'Sudah jelas: ada teori dan variabel yang tinggal diuji', skor: { kuantitatif: 3 } },
      { label: 'Belum jelas: aku ingin membangun pemahaman dari data', skor: { kualitatif: 3, 'studi-kasus': 1 } },
      { label: 'Ingin menguji sekaligus mendalami penyebabnya', skor: { mixed: 3 } },
      { label: 'Tidak relevan: fokusku produk atau perbaikan praktik', skor: { rnd: 1, ptk: 1 } }
    ]
  },
  {
    id: 'waktu',
    tanya: 'Berapa waktu yang realistis untuk seluruh proses penelitian?',
    bantuan: 'Hitung dari sekarang sampai target lulus, dikurangi waktu bimbingan.',
    opsi: [
      { label: 'Kurang dari 4 bulan (mepet)', skor: { 'kajian-pustaka': 2, kuantitatif: 1, mixed: -3, rnd: -1, ptk: -1 } },
      { label: '4–8 bulan (wajar satu semester)', skor: {} },
      { label: 'Lebih dari 8 bulan (longgar)', skor: { mixed: 2, rnd: 1, kualitatif: 1 } }
    ]
  },
  {
    id: 'kemampuan',
    tanya: 'Apa yang paling kamu nyaman kerjakan?',
    opsi: [
      { label: 'Mengolah angka dan statistik', skor: { kuantitatif: 2, mixed: 1 } },
      { label: 'Wawancara, mengamati, dan menulis uraian naratif', skor: { kualitatif: 2, 'studi-kasus': 1 } },
      { label: 'Merancang, membuat, dan menguji sesuatu', skor: { rnd: 2 } },
      { label: 'Mengajar atau memfasilitasi kelompok', skor: { ptk: 2 } },
      { label: 'Membaca teks panjang dan menganalisis argumen', skor: { 'hukum-normatif': 2, 'kajian-pustaka': 2, kualitatif: 1 } }
    ]
  },
  {
    id: 'hasil',
    tanya: 'Hasil akhir seperti apa yang ingin kamu tunjukkan di sidang?',
    opsi: [
      { label: 'Angka yang bisa digeneralisasi ke populasi', skor: { kuantitatif: 3 } },
      { label: 'Deskripsi mendalam, tema, atau pola makna', skor: { kualitatif: 3, 'studi-kasus': 2 } },
      { label: 'Produk yang valid, praktis, dan efektif dipakai', skor: { rnd: 3 } },
      { label: 'Peningkatan nyata pada kelas atau praktik', skor: { ptk: 3 } },
      { label: 'Rekomendasi atau argumentasi hukum/konseptual', skor: { 'hukum-normatif': 3, 'kajian-pustaka': 1 } },
      { label: 'Peta dan sintesis pengetahuan yang ada', skor: { 'kajian-pustaka': 3 } }
    ]
  }
];

export interface WizardResult {
  id: ApproachId;
  skor: number;
  /** 0–100 relatif terhadap pendekatan teratas */
  persen: number;
  alasan: string[];
  lazimDiJurusan: boolean;
}

/** Hitung peringkat pendekatan dari jawaban (indeks opsi per pertanyaan) dan jurusan (opsional). */
export function scoreWizard(answers: Record<string, number>, lazim: ApproachId[] = []): WizardResult[] {
  const totals: Record<string, number> = {};
  const reasons: Record<string, string[]> = {};
  (Object.keys(approaches) as ApproachId[]).forEach((a) => {
    totals[a] = 0;
    reasons[a] = [];
  });

  for (const q of wizard) {
    const idx = answers[q.id];
    if (idx === undefined) continue;
    const opt = q.opsi[idx];
    if (!opt) continue;
    for (const [a, pts] of Object.entries(opt.skor) as [ApproachId, number][]) {
      totals[a] += pts;
      if (pts > 0) reasons[a].push(`${q.tanya} → "${opt.label}"`);
    }
  }

  // Bobot kelaziman di jurusan: pendekatan lazim dapat bonus, yang tidak lazim penalti.
  if (lazim.length > 0) {
    (Object.keys(approaches) as ApproachId[]).forEach((a) => {
      const pos = lazim.indexOf(a);
      if (pos === -1) totals[a] -= 3;
      else totals[a] += Math.max(1, 3 - pos);
    });
  }

  const ranked = (Object.keys(approaches) as ApproachId[])
    .map((id) => ({ id, skor: totals[id], alasan: reasons[id].slice(0, 3), lazimDiJurusan: lazim.length === 0 || lazim.includes(id) }))
    .sort((a, b) => b.skor - a.skor);

  const top = Math.max(1, ranked[0]?.skor ?? 1);
  return ranked.map((r) => ({ ...r, persen: Math.max(0, Math.round((r.skor / top) * 100)) }));
}
