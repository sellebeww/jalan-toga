export interface StatTest {
  id: string;
  nama: string;
  kapan: string;
  asumsi: string[];
  baca: string;
  spss: string;
  excel: string;
  python: string;
  r: string;
  efek?: string;
}

export const statTests: Record<string, StatTest> = {
  'one-sample-t': {
    id: 'one-sample-t', nama: 'Uji t satu sampel',
    kapan: 'Membandingkan rata-rata satu kelompok dengan nilai acuan (mis. KKM 75).',
    asumsi: ['Data numerik', 'Distribusi mendekati normal (atau n besar)'],
    baca: 'Jika p < 0,05, rata-rata kelompok berbeda signifikan dari nilai acuan.',
    spss: 'Analyze → Compare Means → One-Sample T Test',
    excel: '=T.TEST dengan data vs kolom konstan, atau Data Analysis → t-Test',
    python: 'from scipy import stats\nstats.ttest_1samp(data, popmean=75)',
    r: "t.test(data, mu = 75)", efek: "Cohen's d"
  },
  'independent-t': {
    id: 'independent-t', nama: 'Uji t sampel independen',
    kapan: 'Membandingkan rata-rata dua kelompok berbeda (mis. kelas eksperimen vs kontrol).',
    asumsi: ['Data numerik', 'Dua kelompok saling bebas', 'Normalitas tiap kelompok', 'Homogenitas varians (Levene)'],
    baca: 'Lihat baris "Equal variances assumed" bila Levene p > 0,05. Jika p uji t < 0,05, rata-rata kedua kelompok berbeda signifikan.',
    spss: 'Analyze → Compare Means → Independent-Samples T Test',
    excel: '=T.TEST(array1;array2;2;3)  (tipe 2 = dua sampel asumsi varians sama, 3 = beda)',
    python: 'from scipy import stats\nstats.ttest_ind(a, b, equal_var=True)',
    r: 't.test(a, b, var.equal = TRUE)', efek: "Cohen's d"
  },
  'paired-t': {
    id: 'paired-t', nama: 'Uji t berpasangan',
    kapan: 'Membandingkan sebelum dan sesudah pada subjek yang sama (pretest–posttest).',
    asumsi: ['Data numerik', 'Selisih pasangan berdistribusi normal'],
    baca: 'Jika p < 0,05, ada perubahan rata-rata yang signifikan antara dua pengukuran.',
    spss: 'Analyze → Compare Means → Paired-Samples T Test',
    excel: '=T.TEST(array1;array2;2;1)',
    python: 'from scipy import stats\nstats.ttest_rel(pre, post)',
    r: 't.test(pre, post, paired = TRUE)', efek: "Cohen's d untuk selisih"
  },
  anova: {
    id: 'anova', nama: 'ANOVA satu arah',
    kapan: 'Membandingkan rata-rata tiga kelompok atau lebih (mis. tiga metode, tiga dosis).',
    asumsi: ['Data numerik', 'Kelompok saling bebas', 'Normalitas residual', 'Homogenitas varians'],
    baca: 'Jika p < 0,05, minimal ada satu pasangan kelompok yang berbeda. Lanjutkan dengan uji post hoc (Tukey/Bonferroni, atau Games-Howell bila varians tak sama).',
    spss: 'Analyze → Compare Means → One-Way ANOVA (+ Post Hoc)',
    excel: 'Data Analysis → Anova: Single Factor',
    python: 'from scipy import stats\nstats.f_oneway(g1, g2, g3)',
    r: 'summary(aov(nilai ~ kelompok, data = df))', efek: 'Eta kuadrat (η²)'
  },
  'rm-anova': {
    id: 'rm-anova', nama: 'ANOVA pengukuran berulang',
    kapan: 'Subjek yang sama diukur tiga kali atau lebih (mis. awal, tengah, akhir).',
    asumsi: ['Data numerik', 'Normalitas', 'Sphericity (Mauchly)'],
    baca: 'Jika p < 0,05 (gunakan koreksi Greenhouse–Geisser bila sphericity dilanggar), ada perubahan antar waktu.',
    spss: 'Analyze → General Linear Model → Repeated Measures',
    excel: 'Tidak tersedia bawaan; gunakan JASP/Jamovi/SPSS',
    python: 'import pingouin as pg\npg.rm_anova(data=df, dv="skor", within="waktu", subject="id")',
    r: 'summary(aov(skor ~ waktu + Error(id/waktu), data = df))', efek: 'Partial eta kuadrat'
  },
  'mann-whitney': {
    id: 'mann-whitney', nama: 'Mann–Whitney U',
    kapan: 'Dua kelompok bebas, data ordinal atau numerik tidak normal (alternatif uji t independen).',
    asumsi: ['Data ordinal/numerik', 'Dua kelompok saling bebas'],
    baca: 'Jika p < 0,05, distribusi atau peringkat kedua kelompok berbeda.',
    spss: 'Analyze → Nonparametric Tests → Independent Samples',
    excel: 'Tidak tersedia bawaan; hitung peringkat manual atau pakai JASP',
    python: 'from scipy import stats\nstats.mannwhitneyu(a, b)',
    r: 'wilcox.test(a, b)', efek: 'r = Z/√N'
  },
  wilcoxon: {
    id: 'wilcoxon', nama: 'Wilcoxon signed-rank',
    kapan: 'Dua pengukuran berpasangan, data ordinal/tidak normal (alternatif uji t berpasangan).',
    asumsi: ['Data ordinal/numerik', 'Pasangan terkait'],
    baca: 'Jika p < 0,05, ada pergeseran yang signifikan antara dua pengukuran.',
    spss: 'Analyze → Nonparametric Tests → Related Samples',
    excel: 'Tidak tersedia bawaan; gunakan JASP/SPSS',
    python: 'from scipy import stats\nstats.wilcoxon(pre, post)',
    r: 'wilcox.test(pre, post, paired = TRUE)', efek: 'r = Z/√N'
  },
  kruskal: {
    id: 'kruskal', nama: 'Kruskal–Wallis',
    kapan: 'Tiga kelompok bebas atau lebih, data ordinal/tidak normal (alternatif ANOVA).',
    asumsi: ['Data ordinal/numerik', 'Kelompok saling bebas'],
    baca: 'Jika p < 0,05, minimal satu kelompok berbeda; lanjutkan uji post hoc Dunn.',
    spss: 'Analyze → Nonparametric Tests → Independent Samples',
    excel: 'Tidak tersedia bawaan',
    python: 'from scipy import stats\nstats.kruskal(g1, g2, g3)',
    r: 'kruskal.test(nilai ~ kelompok, data = df)', efek: 'Epsilon kuadrat'
  },
  friedman: {
    id: 'friedman', nama: 'Uji Friedman',
    kapan: 'Tiga pengukuran berulang atau lebih, data ordinal/tidak normal.',
    asumsi: ['Data ordinal/numerik', 'Subjek sama diukur berulang'],
    baca: 'Jika p < 0,05, ada perbedaan antar pengukuran.',
    spss: 'Analyze → Nonparametric Tests → Related Samples',
    excel: 'Tidak tersedia bawaan',
    python: 'from scipy import stats\nstats.friedmanchisquare(t1, t2, t3)',
    r: 'friedman.test(as.matrix(df))', efek: "Kendall's W"
  },
  chisq: {
    id: 'chisq', nama: 'Chi-square (independensi)',
    kapan: 'Menguji hubungan dua variabel kategorik atau membandingkan proporsi antar kelompok.',
    asumsi: ['Data kategorik (frekuensi)', 'Sel dengan frekuensi harapan < 5 maksimal 20%'],
    baca: 'Jika p < 0,05, ada hubungan antar kategori. Bila ada sel harapan kecil, pakai uji Fisher.',
    spss: 'Analyze → Descriptive Statistics → Crosstabs → Statistics → Chi-square',
    excel: '=CHISQ.TEST(observed; expected)',
    python: 'from scipy import stats\nstats.chi2_contingency(tabel)',
    r: 'chisq.test(tabel)', efek: "Cramér's V"
  },
  fisher: {
    id: 'fisher', nama: 'Uji eksak Fisher',
    kapan: 'Tabel kontingensi 2×2 dengan sampel kecil atau frekuensi harapan < 5.',
    asumsi: ['Data kategorik', 'Tabel 2×2'],
    baca: 'Jika p < 0,05, ada hubungan antara dua variabel.',
    spss: 'Crosstabs → Statistics → Chi-square (pembacaan Fisher Exact)',
    excel: 'Tidak tersedia bawaan',
    python: 'from scipy import stats\nstats.fisher_exact([[a,b],[c,d]])',
    r: 'fisher.test(tabel)', efek: 'Odds ratio'
  },
  mcnemar: {
    id: 'mcnemar', nama: 'Uji McNemar',
    kapan: 'Dua pengukuran berpasangan pada data kategorik biner (mis. lulus/tidak sebelum dan sesudah).',
    asumsi: ['Data biner berpasangan'],
    baca: 'Jika p < 0,05, proporsi berubah secara signifikan.',
    spss: 'Analyze → Nonparametric Tests → Related Samples → McNemar',
    excel: 'Tidak tersedia bawaan',
    python: 'from statsmodels.stats.contingency_tables import mcnemar\nmcnemar(tabel)',
    r: 'mcnemar.test(tabel)'
  },
  pearson: {
    id: 'pearson', nama: 'Korelasi Pearson',
    kapan: 'Hubungan linear antara dua variabel numerik berdistribusi normal.',
    asumsi: ['Dua variabel numerik', 'Hubungan linear', 'Normalitas bivariat (kasar)'],
    baca: 'r mendekati ±1 berarti hubungan kuat; p < 0,05 berarti hubungan signifikan. Korelasi bukan sebab-akibat.',
    spss: 'Analyze → Correlate → Bivariate → Pearson',
    excel: '=CORREL(array1;array2)',
    python: 'from scipy import stats\nstats.pearsonr(x, y)',
    r: 'cor.test(x, y, method = "pearson")', efek: 'r itu sendiri; r² = variasi bersama'
  },
  spearman: {
    id: 'spearman', nama: 'Korelasi Spearman',
    kapan: 'Hubungan monoton antara dua variabel ordinal atau numerik yang tidak normal.',
    asumsi: ['Data ordinal/numerik', 'Hubungan monoton'],
    baca: 'rho mendekati ±1 berarti hubungan kuat; p < 0,05 berarti signifikan.',
    spss: 'Analyze → Correlate → Bivariate → Spearman',
    excel: 'Hitung peringkat dengan =RANK.AVG lalu =CORREL pada peringkat',
    python: 'from scipy import stats\nstats.spearmanr(x, y)',
    r: 'cor.test(x, y, method = "spearman")', efek: 'rho'
  },
  'point-biserial': {
    id: 'point-biserial', nama: 'Korelasi point-biserial',
    kapan: 'Hubungan antara variabel biner (mis. laki/perempuan) dan variabel numerik.',
    asumsi: ['Satu variabel biner', 'Satu variabel numerik'],
    baca: 'Setara korelasi Pearson dengan variabel dikotomi; p < 0,05 berarti signifikan.',
    spss: 'Analyze → Correlate → Bivariate (Pearson dengan variabel dikotomi 0/1)',
    excel: '=CORREL(biner; numerik) dengan kode 0/1',
    python: 'from scipy import stats\nstats.pointbiserialr(biner, nilai)',
    r: 'cor.test(biner, nilai)'
  },
  'regresi-sederhana': {
    id: 'regresi-sederhana', nama: 'Regresi linear sederhana',
    kapan: 'Satu variabel bebas memprediksi satu variabel terikat numerik.',
    asumsi: ['Y numerik', 'Linearitas', 'Normalitas residual', 'Homoskedastisitas', 'Independensi residual'],
    baca: 'Lihat nilai B (arah dan besar pengaruh), p uji t, dan R² (proporsi variasi yang dijelaskan).',
    spss: 'Analyze → Regression → Linear',
    excel: 'Data Analysis → Regression',
    python: 'import statsmodels.api as sm\nsm.OLS(y, sm.add_constant(x)).fit().summary()',
    r: 'summary(lm(y ~ x, data = df))', efek: 'R²'
  },
  'regresi-berganda': {
    id: 'regresi-berganda', nama: 'Regresi linear berganda',
    kapan: 'Beberapa variabel bebas memprediksi satu variabel terikat numerik.',
    asumsi: ['Y numerik', 'Linearitas', 'Normalitas residual', 'Homoskedastisitas', 'Tidak ada multikolinearitas (VIF < 10)', 'Tidak ada autokorelasi (data runtun)'],
    baca: 'Uji F untuk kelayakan model, uji t untuk tiap variabel, R² adjusted untuk kemampuan menjelaskan.',
    spss: 'Analyze → Regression → Linear (Collinearity diagnostics untuk VIF)',
    excel: 'Data Analysis → Regression (beberapa kolom X)',
    python: 'import statsmodels.formula.api as smf\nsmf.ols("y ~ x1 + x2 + x3", data=df).fit().summary()',
    r: 'summary(lm(y ~ x1 + x2 + x3, data = df))', efek: 'R² adjusted, beta terstandar'
  },
  logistik: {
    id: 'logistik', nama: 'Regresi logistik',
    kapan: 'Variabel terikat biner (ya/tidak, lulus/tidak) dengan satu atau lebih prediktor.',
    asumsi: ['Y biner', 'Independensi observasi', 'Tidak ada multikolinearitas', 'Sampel memadai (≥10 kejadian per prediktor)'],
    baca: 'Lihat Exp(B) = odds ratio. OR > 1 berarti meningkatkan peluang kejadian.',
    spss: 'Analyze → Regression → Binary Logistic',
    excel: 'Tidak tersedia bawaan',
    python: 'import statsmodels.formula.api as smf\nsmf.logit("y ~ x1 + x2", data=df).fit().summary()',
    r: 'summary(glm(y ~ x1 + x2, family = binomial, data = df))', efek: 'Odds ratio'
  },
  'regresi-ordinal': {
    id: 'regresi-ordinal', nama: 'Regresi logistik ordinal',
    kapan: 'Variabel terikat ordinal (kategori berurutan, mis. rendah–sedang–tinggi).',
    asumsi: ['Y ordinal', 'Proportional odds'],
    baca: 'Exp(B) menunjukkan peningkatan peluang berada di kategori lebih tinggi.',
    spss: 'Analyze → Regression → Ordinal',
    excel: 'Tidak tersedia bawaan',
    python: 'from statsmodels.miscmodels.ordinal_model import OrderedModel',
    r: 'MASS::polr(y ~ x1 + x2, data = df, Hess = TRUE)'
  },
  sem: {
    id: 'sem', nama: 'SEM (PLS-SEM / CB-SEM)',
    kapan: 'Model dengan variabel laten, banyak indikator, atau jalur bertingkat/mediasi.',
    asumsi: ['Model berbasis teori', 'PLS-SEM tahan sampel kecil/non-normal; CB-SEM butuh normalitas dan sampel besar'],
    baca: 'Evaluasi outer model (loading, AVE, CR) lalu inner model (path coefficient, R², Q², bootstrapping).',
    spss: 'Tidak tersedia bawaan; SmartPLS (PLS-SEM) atau AMOS (CB-SEM)',
    excel: 'Tidak tersedia',
    python: 'semopy atau plspm',
    r: 'lavaan (CB-SEM), seminr (PLS-SEM)'
  },
  cronbach: {
    id: 'cronbach', nama: "Cronbach's Alpha",
    kapan: 'Reliabilitas (konsistensi internal) kuesioner dengan skala Likert.',
    asumsi: ['Item mengukur konstruk yang sama', 'Minimal 3 item per konstruk'],
    baca: 'Umumnya ≥ 0,70 dianggap dapat diterima (≥ 0,80 baik).',
    spss: 'Analyze → Scale → Reliability Analysis',
    excel: 'Hitung manual dengan varians item dan total, atau pakai alat Cronbach di menu Belajar → Alat',
    python: 'import pingouin as pg\npg.cronbach_alpha(data=df)',
    r: 'psych::alpha(df)'
  },
  'item-total': {
    id: 'item-total', nama: 'Validitas item (korelasi item-total)',
    kapan: 'Menguji apakah tiap butir kuesioner valid memotret konstruknya.',
    asumsi: ['Skor item dan skor total numerik'],
    baca: 'Bandingkan r hitung dengan r tabel (n−2 pada α 0,05) atau corrected item-total correlation ≥ 0,30.',
    spss: 'Analyze → Correlate → Bivariate (item vs total) atau Reliability → Scale if item deleted',
    excel: '=CORREL(item; total)',
    python: 'df.corrwith(df.sum(axis=1))',
    r: 'cor(df, rowSums(df))'
  },
  kr20: {
    id: 'kr20', nama: 'KR-20',
    kapan: 'Reliabilitas tes dengan butir benar/salah (dikotomi).',
    asumsi: ['Butir dikotomi (0/1)'],
    baca: 'Umumnya ≥ 0,70 dianggap memadai.',
    spss: 'Analyze → Scale → Reliability Analysis (hasil alpha = KR-20 untuk data 0/1)',
    excel: 'Hitung manual atau pakai alat KR-20 di menu Belajar → Alat',
    python: 'import pingouin as pg\npg.cronbach_alpha(data=df01)',
    r: 'psych::alpha(df01)'
  },
  normalitas: {
    id: 'normalitas', nama: 'Uji normalitas (Shapiro–Wilk / Kolmogorov–Smirnov)',
    kapan: 'Memeriksa asumsi normalitas sebelum memilih uji parametrik.',
    asumsi: ['Data numerik'],
    baca: 'p > 0,05 berarti tidak ada bukti menyimpang dari normal. Untuk sampel besar, lihat juga Q-Q plot dan skewness.',
    spss: 'Analyze → Descriptive Statistics → Explore → Plots → Normality plots with tests',
    excel: 'Tidak tersedia bawaan; gunakan histogram + skewness',
    python: 'from scipy import stats\nstats.shapiro(data)',
    r: 'shapiro.test(data)'
  }
};

export type StatGoal = 'beda' | 'hubungan' | 'pengaruh' | 'instrumen';

export interface StatAnswers {
  goal?: StatGoal;
  skala?: 'numerik' | 'ordinal' | 'kategorik';
  kelompok?: 'satu' | 'dua' | 'tiga';
  desain?: 'independen' | 'berpasangan';
  normal?: 'ya' | 'tidak';
  dv?: 'numerik' | 'biner' | 'ordinal';
  jumlahX?: 'satu' | 'banyak' | 'laten';
  instrumen?: 'likert' | 'dikotomi' | 'validitas';
}

export interface StatPick {
  tests: string[];
  catatan: string;
}

/** Peta jawaban ke rekomendasi uji. Mengembalikan null bila jawaban belum lengkap. */
export function recommendTest(a: StatAnswers): StatPick | null {
  switch (a.goal) {
    case 'beda': {
      if (!a.skala) return null;
      if (!a.kelompok) return null;
      if (a.skala === 'kategorik') {
        if (a.kelompok === 'satu') return { tests: ['chisq'], catatan: 'Untuk satu kelompok pada data kategorik, gunakan chi-square goodness of fit.' };
        if (!a.desain) return null;
        return a.desain === 'berpasangan'
          ? { tests: ['mcnemar'], catatan: 'Cocok untuk dua pengukuran biner pada subjek yang sama.' }
          : { tests: ['chisq', 'fisher'], catatan: 'Gunakan Fisher bila ada sel dengan frekuensi harapan kurang dari 5.' };
      }
      if (a.kelompok === 'satu') {
        return a.skala === 'numerik'
          ? { tests: ['one-sample-t', 'normalitas'], catatan: 'Cek normalitas dulu. Jika tidak normal, gunakan Wilcoxon satu sampel.' }
          : { tests: ['wilcoxon'], catatan: 'Untuk satu kelompok ordinal, bandingkan median dengan nilai acuan (Wilcoxon satu sampel).' };
      }
      if (!a.desain) return null;
      if (a.skala === 'numerik') {
        if (!a.normal) return null;
        if (a.normal === 'ya') {
          if (a.kelompok === 'dua') return { tests: [a.desain === 'independen' ? 'independent-t' : 'paired-t', 'normalitas'], catatan: 'Pastikan asumsi normalitas terpenuhi pada tiap kelompok (atau selisih untuk berpasangan).' };
          return { tests: [a.desain === 'independen' ? 'anova' : 'rm-anova', 'normalitas'], catatan: 'Jika signifikan, lanjutkan dengan uji post hoc agar tahu kelompok mana yang berbeda.' };
        }
      }
      // ordinal atau numerik tidak normal
      if (a.kelompok === 'dua') return { tests: [a.desain === 'independen' ? 'mann-whitney' : 'wilcoxon'], catatan: 'Uji nonparametrik tidak mensyaratkan normalitas.' };
      return { tests: [a.desain === 'independen' ? 'kruskal' : 'friedman'], catatan: 'Lanjutkan dengan post hoc (Dunn / Wilcoxon berpasangan dengan koreksi).' };
    }
    case 'hubungan': {
      if (!a.skala) return null;
      if (a.skala === 'kategorik') return { tests: ['chisq', 'fisher'], catatan: 'Untuk kekuatan hubungan gunakan Cramér\'s V.' };
      if (a.skala === 'ordinal') return { tests: ['spearman'], catatan: 'Cocok untuk data ordinal atau hubungan monoton non-linear.' };
      if (!a.normal) return null;
      return a.normal === 'ya'
        ? { tests: ['pearson', 'normalitas'], catatan: 'Lihat scatter plot untuk memastikan hubungan kira-kira linear.' }
        : { tests: ['spearman'], catatan: 'Spearman tidak mensyaratkan normalitas.' };
    }
    case 'pengaruh': {
      if (!a.dv || !a.jumlahX) return null;
      if (a.jumlahX === 'laten') return { tests: ['sem', 'cronbach', 'item-total'], catatan: 'Gunakan PLS-SEM bila sampel kecil atau data tidak normal. Uji validitas dan reliabilitas konstruk dulu.' };
      if (a.dv === 'biner') return { tests: ['logistik'], catatan: 'Pastikan jumlah kejadian cukup (sekitar 10 per prediktor).' };
      if (a.dv === 'ordinal') return { tests: ['regresi-ordinal'], catatan: 'Cek asumsi proportional odds.' };
      return a.jumlahX === 'satu'
        ? { tests: ['regresi-sederhana', 'normalitas'], catatan: 'Periksa asumsi klasik pada residual.' }
        : { tests: ['regresi-berganda', 'normalitas'], catatan: 'Periksa multikolinearitas (VIF) dan asumsi klasik lainnya.' };
    }
    case 'instrumen': {
      if (!a.instrumen) return null;
      if (a.instrumen === 'likert') return { tests: ['cronbach', 'item-total'], catatan: 'Uji validitas dulu, baru reliabilitas pada butir yang valid.' };
      if (a.instrumen === 'dikotomi') return { tests: ['kr20', 'item-total'], catatan: 'Untuk tes pilihan ganda/benar-salah.' };
      return { tests: ['item-total'], catatan: 'Atau analisis faktor konfirmatori (CFA) bila instrumen punya dimensi jelas.' };
    }
    default:
      return null;
  }
}

export interface SoftwareInfo {
  id: string;
  nama: string;
  untuk: string;
  kelebihan: string[];
  kekurangan: string[];
  mulai: string;
  akses: string;
}

export const software: SoftwareInfo[] = [
  {
    id: 'spss', nama: 'SPSS', untuk: 'Statistik klasik di sosial, pendidikan, kesehatan, ekonomi (uji beda, korelasi, regresi, reliabilitas).',
    kelebihan: ['Antarmuka menu, tanpa kode', 'Banyak panduan berbahasa Indonesia', 'Standar di banyak kampus'],
    kekurangan: ['Berbayar (cek lisensi kampus)', 'Grafik default kurang menarik', 'Kurang fleksibel untuk analisis kustom'],
    mulai: 'Input data di Data View (baris = responden, kolom = variabel), atur Variable View (tipe, skala), lalu pilih menu Analyze.',
    akses: 'Berlisensi; sebagian kampus menyediakan lab atau lisensi. JASP/Jamovi adalah alternatif gratis dengan antarmuka mirip.'
  },
  {
    id: 'excel', nama: 'Microsoft Excel / Google Sheets', untuk: 'Rekap data, statistik deskriptif, grafik, uji t sederhana, regresi dasar.',
    kelebihan: ['Sudah dikenal semua orang', 'Cepat untuk merekap data kuesioner', 'Grafik mudah dibuat'],
    kekurangan: ['Uji statistik terbatas', 'Rawan salah rumus jika tidak hati-hati', 'Kurang cocok untuk data besar'],
    mulai: 'Aktifkan add-in Analysis ToolPak (Excel) untuk menu Data Analysis. Gunakan rumus AVERAGE, STDEV.S, CORREL, T.TEST.',
    akses: 'Excel berbayar atau lisensi kampus; Google Sheets gratis dengan akun Google.'
  },
  {
    id: 'python', nama: 'Python (pandas, scipy, scikit-learn)', untuk: 'Analisis data besar, machine learning, otomatisasi, visualisasi, pemrosesan teks.',
    kelebihan: ['Gratis dan sangat fleksibel', 'Cocok untuk machine learning dan data besar', 'Mudah diulang dan didokumentasikan'],
    kekurangan: ['Perlu belajar menulis kode', 'Setup awal bisa membingungkan', 'Output statistik klasik kurang "siap tempel" dibanding SPSS'],
    mulai: 'Mulai dari Google Colab (tanpa instalasi): impor pandas, baca CSV, jalankan scipy.stats. Simpan notebook sebagai bukti analisis.',
    akses: 'Gratis dan open source.'
  },
  {
    id: 'r', nama: 'R / RStudio', untuk: 'Statistika lanjut, SEM (lavaan), grafik ilmiah (ggplot2), analisis ekologi dan biostatistik.',
    kelebihan: ['Gratis dan sangat lengkap untuk statistik', 'Grafik publikasi berkualitas', 'Komunitas besar'],
    kekurangan: ['Kurva belajar lumayan curam', 'Pesan error kadang membingungkan'],
    mulai: 'Pasang R dan RStudio, impor data dengan read.csv, gunakan paket sesuai kebutuhan (psych, lavaan, ggplot2).',
    akses: 'Gratis dan open source.'
  },
  {
    id: 'jasp', nama: 'JASP & Jamovi', untuk: 'Alternatif gratis berantarmuka seperti SPSS, hasil langsung berformat APA.',
    kelebihan: ['Gratis', 'Ramah pemula', 'Memuat uji lanjutan dan Bayesian (JASP)'],
    kekurangan: ['Kurang dikenal sebagian dosen', 'Fitur tertentu masih terbatas'],
    mulai: 'Unduh, impor CSV/SPSS, pilih analisis dari menu atas; tabel dapat disalin langsung ke Word.',
    akses: 'Gratis dan open source.'
  },
  {
    id: 'smartpls', nama: 'SmartPLS', untuk: 'PLS-SEM untuk model dengan variabel laten dan mediasi (manajemen, psikologi, kesehatan).',
    kelebihan: ['Antarmuka visual jalur model', 'Tahan sampel kecil dan data tidak normal', 'Laporan bootstrapping langsung'],
    kekurangan: ['Versi lengkap berbayar (ada versi terbatas/trial)', 'Perlu paham evaluasi outer dan inner model'],
    mulai: 'Impor data, gambar model (laten dan indikator), jalankan PLS Algorithm lalu Bootstrapping, evaluasi loading, AVE, CR, dan path coefficient.',
    akses: 'Berlisensi dengan opsi gratis terbatas; periksa kebijakan terbaru.'
  },
  {
    id: 'nvivo', nama: 'NVivo / Atlas.ti', untuk: 'Koding data kualitatif: transkrip wawancara, dokumen, media sosial.',
    kelebihan: ['Memudahkan koding dan penelusuran tema', 'Visualisasi hubungan antar kode'],
    kekurangan: ['Berbayar', 'Butuh waktu belajar; kadang cukup dengan Excel/Notion'],
    mulai: 'Impor transkrip, buat kode (node), tarik kutipan ke kode, lalu telusuri pola dan tema.',
    akses: 'Berlisensi; ada masa percobaan. Alternatif gratis: QualCoder, atau matriks koding di Excel.'
  },
  {
    id: 'forms', nama: 'Google Forms / Microsoft Forms', untuk: 'Menyebar kuesioner daring dan mengekspor jawaban ke Excel/SPSS.',
    kelebihan: ['Gratis dan mudah', 'Respons otomatis tersimpan ke spreadsheet'],
    kekurangan: ['Kontrol sampling terbatas', 'Risiko responden ganda dan jawaban asal'],
    mulai: 'Susun bagian: persetujuan, demografi, butir skala. Aktifkan batasi satu respons, ekspor ke CSV, kodekan skala menjadi angka.',
    akses: 'Gratis dengan akun Google/Microsoft.'
  },
  {
    id: 'zotero', nama: 'Zotero / Mendeley', untuk: 'Mengelola referensi dan menyisipkan sitasi otomatis ke Word.',
    kelebihan: ['Sitasi dan daftar pustaka otomatis', 'Satu klik simpan dari browser'],
    kekurangan: ['Perlu merapikan metadata yang salah', 'Gaya sitasi perlu dicek ulang'],
    mulai: 'Pasang plugin Word, simpan jurnal dengan konektor browser, pilih gaya (APA 7, IEEE) dan sisipkan sitasi.',
    akses: 'Zotero gratis dan open source; Mendeley gratis dengan batas penyimpanan.'
  },
  {
    id: 'gpower', nama: 'G*Power', untuk: 'Menghitung ukuran sampel berbasis power analysis untuk berbagai uji.',
    kelebihan: ['Dasar ilmiah penentuan sampel yang kuat', 'Gratis'],
    kekurangan: ['Butuh paham effect size, α, dan power'],
    mulai: 'Pilih keluarga uji (t, F, χ²), tentukan effect size, α = 0,05, power = 0,80, lalu baca total sampel.',
    akses: 'Gratis.'
  }
];
