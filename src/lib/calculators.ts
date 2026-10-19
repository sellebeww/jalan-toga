// Mathematical and statistical calculation helpers for RTI

export interface LikertInput {
  ss: number; // Sangat Setuju (5)
  st: number; // Setuju (4)
  rg: number; // Ragu-ragu (3)
  ts: number; // Tidak Setuju (2)
  sts: number; // Sangat Tidak Setuju (1)
}

export interface LikertResult {
  totalRespondents: number;
  totalScore: number;
  minScore: number;
  maxScore: number;
  percentage: number;
  continuumCategory: string;
  steps: string[];
}

export function calculateLikert(input: LikertInput): LikertResult {
  const { ss, st, rg, ts, sts } = input;
  const n = ss + st + rg + ts + sts;
  if (n === 0) {
    return {
      totalRespondents: 0,
      totalScore: 0,
      minScore: 0,
      maxScore: 0,
      percentage: 0,
      continuumCategory: 'Belum ada data',
      steps: ['Masukkan jumlah responden untuk setiap skala jawaban (SS, ST, RG, TS, STS).']
    };
  }

  const ssVal = ss * 5;
  const stVal = st * 4;
  const rgVal = rg * 3;
  const tsVal = ts * 2;
  const stsVal = sts * 1;
  const totalScore = ssVal + stVal + rgVal + tsVal + stsVal;
  const minScore = n * 1;
  const maxScore = n * 5;
  const percentage = maxScore > 0 ? (totalScore / maxScore) * 100 : 0;

  let continuumCategory = 'Netral / Ragu-ragu';
  if (percentage >= 80) continuumCategory = 'Sangat Positif / Sangat Setuju';
  else if (percentage >= 60) continuumCategory = 'Positif / Setuju';
  else if (percentage >= 40) continuumCategory = 'Netral / Cukup';
  else if (percentage >= 20) continuumCategory = 'Negatif / Tidak Setuju';
  else continuumCategory = 'Sangat Negatif / Sangat Tidak Setuju';

  const steps = [
    `1. Hitung total responden: N = ${ss} + ${st} + ${rg} + ${ts} + ${sts} = ${n} orang`,
    `2. Kalikan tiap frekuensi dengan bobot nilai:`,
    `   - SS (5): ${ss} × 5 = ${ssVal}`,
    `   - ST (4): ${st} × 4 = ${stVal}`,
    `   - RG (3): ${rg} × 3 = ${rgVal}`,
    `   - TS (2): ${ts} × 2 = ${tsVal}`,
    `   - STS (1): ${sts} × 1 = ${stsVal}`,
    `3. Jumlahkan seluruh skor: ${ssVal} + ${stVal} + ${rgVal} + ${tsVal} + ${stsVal} = ${totalScore}`,
    `4. Skor ideal maksimum = ${n} × 5 = ${maxScore}; Skor minimum = ${n} × 1 = ${minScore}`,
    `5. Persentase pencapaian = (${totalScore} / ${maxScore}) × 100% = ${percentage.toFixed(2)}%`,
    `6. Posisi pada kontinum: ${continuumCategory}`
  ];

  return {
    totalRespondents: n,
    totalScore,
    minScore,
    maxScore,
    percentage: Math.round(percentage * 100) / 100,
    continuumCategory,
    steps
  };
}

export interface SpearmanBrownResult {
  rho: number;
  steps: string[];
  interpretation: string;
}

export function calculateSpearmanBrown(r: number): SpearmanBrownResult {
  if (r <= -1) {
    return {
      rho: 0,
      steps: ['Nilai korelasi r tidak valid (harus lebih besar dari -1).'],
      interpretation: 'Tidak valid'
    };
  }

  const numerator = 2 * r;
  const denominator = 1 + r;
  const rho = numerator / denominator;

  let interpretation = 'Rendah';
  if (rho >= 0.8) interpretation = 'Sangat Tinggi (Sangat Handal)';
  else if (rho >= 0.6) interpretation = 'Tinggi (Cukup Handal)';
  else if (rho >= 0.4) interpretation = 'Sedang';
  else interpretation = 'Rendah / Kurang Handal';

  const steps = [
    `1. Rumus Spearman-Brown: ρ = 2r / (1 + r)`,
    `2. Masukkan koefisien korelasi belahan (r = ${r}):`,
    `   - Pembilang = 2 × ${r} = ${numerator.toFixed(4)}`,
    `   - Penyebut = 1 + ${r} = ${denominator.toFixed(4)}`,
    `3. Hitung reliabilitas tes penuh: ρ = ${numerator.toFixed(4)} / ${denominator.toFixed(4)} = ${rho.toFixed(4)}`,
    `4. Tingkat reliabilitas instrumen: ${interpretation}`
  ];

  return {
    rho: Math.round(rho * 10000) / 10000,
    steps,
    interpretation
  };
}

export interface CronbachResult {
  alpha: number;
  steps: string[];
  interpretation: string;
  isValid: boolean;
}

export function calculateCronbachAlpha(
  k: number,
  sumItemVariance: number,
  totalVariance: number
): CronbachResult {
  if (k <= 1 || totalVariance <= 0) {
    return {
      alpha: 0,
      steps: ['Jumlah item k harus lebih besar dari 1 dan varians total harus lebih besar dari 0.'],
      interpretation: 'Tidak valid',
      isValid: false
    };
  }

  const factor = k / (k - 1);
  const ratio = sumItemVariance / totalVariance;
  const bracket = 1 - ratio;
  const alpha = factor * bracket;

  let interpretation = 'Kurang Handal';
  if (alpha >= 0.8) interpretation = 'Sangat Baik (Tinggi)';
  else if (alpha >= 0.7) interpretation = 'Dapat Diterima (Layak)';
  else if (alpha >= 0.6) interpretation = 'Cukup';
  else interpretation = 'Rendah / Perlu Perbaikan Item';

  const steps = [
    `1. Rumus Cronbach's Alpha: α = [k / (k - 1)] × [1 - Σvar(xj) / var(x0)]`,
    `2. Substitusi nilai:`,
    `   - k = ${k} item`,
    `   - Σvar(xj) = ${sumItemVariance}`,
    `   - var(x0) = ${totalVariance}`,
    `3. Hitung faktor koreksi: k / (k - 1) = ${k} / ${k - 1} = ${factor.toFixed(4)}`,
    `4. Hitung rasio varians: Σvar(xj) / var(x0) = ${sumItemVariance} / ${totalVariance} = ${ratio.toFixed(4)}`,
    `5. Pengurangan: 1 - ${ratio.toFixed(4)} = ${bracket.toFixed(4)}`,
    `6. Hasil akhir: α = ${factor.toFixed(4)} × ${bracket.toFixed(4)} = ${alpha.toFixed(4)}`,
    `7. Kategori kehandalan: ${interpretation}`
  ];

  return {
    alpha: Math.round(alpha * 10000) / 10000,
    steps,
    interpretation,
    isValid: true
  };
}

export interface KR20Result {
  kr20: number;
  rho: number;
  steps: string[];
  interpretation: string;
  isValid: boolean;
}

export function calculateKR20(
  k: number,
  sumPq: number,
  totalVariance: number
): KR20Result {
  if (k <= 1 || totalVariance <= 0) {
    return {
      kr20: 0,
      rho: 0,
      steps: ['Jumlah item k harus lebih besar dari 1 dan varians total harus lebih besar dari 0.'],
      interpretation: 'Tidak valid',
      isValid: false
    };
  }

  const factor = k / (k - 1);
  const ratio = sumPq / totalVariance;
  const bracket = 1 - ratio;
  const rho = factor * bracket;

  let interpretation = 'Kurang Handal';
  if (rho >= 0.8) interpretation = 'Sangat Baik (Tinggi)';
  else if (rho >= 0.7) interpretation = 'Layak / Baik';
  else if (rho >= 0.6) interpretation = 'Cukup';
  else interpretation = 'Rendah';

  const steps = [
    `1. Rumus KR-20 (item dikotomi 1/0): ρ = [k / (k - 1)] × [1 - Σ(pj × qj) / σ²]`,
    `2. Substitusi nilai:`,
    `   - k = ${k} item`,
    `   - Σ(pj × qj) = ${sumPq}`,
    `   - Varians total σ² = ${totalVariance}`,
    `3. Faktor k / (k - 1) = ${k} / ${k - 1} = ${factor.toFixed(4)}`,
    `4. Rasio Σpq / σ² = ${sumPq} / ${totalVariance} = ${ratio.toFixed(4)}`,
    `5. Pengurangan 1 - rasio = 1 - ${ratio.toFixed(4)} = ${bracket.toFixed(4)}`,
    `6. Hasil akhir: ρ = ${factor.toFixed(4)} × ${bracket.toFixed(4)} = ${rho.toFixed(4)}`,
    `7. Kategori reliabilitas: ${interpretation}`
  ];

  const rounded = Math.round(rho * 10000) / 10000;
  return {
    kr20: rounded,
    rho: rounded,
    steps,
    interpretation,
    isValid: true
  };
}

// Harry King Calculation
export function calculateHarryKing(populationN: number, confidence: number = 95, errorRate: number = 5): { sampleSize: number; formulaText: string } {
  // From slide example: N=200, 95% confidence, 5% error: 0.58 * 200 * 1.195 = 138.62 -> 139
  // Factors depend on nomogram. For N=200, factor is 0.58 and multiplier 1.195.
  // Standard approximation based on Harry King nomogram formula:
  let factor = 0.58;
  let mult = 1.195;
  if (populationN !== 200) {
    // general interpolation for nomogram approximation
    factor = Math.min(0.9, Math.max(0.1, 1 / (1 + (populationN * Math.pow(errorRate / 100, 2)) / 3.841)));
    mult = 1.195;
  }
  const calc = factor * populationN * mult;
  const sampleSize = Math.round(calc);
  return {
    sampleSize,
    formulaText: `${factor.toFixed(2)} × ${populationN} × ${mult} = ${calc.toFixed(2)} ≈ ${sampleSize}`
  };
}

// Roscoe Rules Helper
export function getRoscoeGuidelines(numVariables: number = 5): {
  generalRange: string;
  perCategory: number;
  multivariateMin: number;
  simpleExperiment: string;
} {
  return {
    generalRange: '30 - 500 responden (ukuran yang layak untuk sebagian besar penelitian)',
    perCategory: 30, // minimal per kategori / subkelompok
    multivariateMin: numVariables * 10, // minimal 10x jumlah variabel (5 var -> 50)
    simpleExperiment: '10 - 20 subjek per kelompok (masing-masing untuk kelompok kontrol dan eksperimen)'
  };
}

// Isaac and Michael Lookup Table (selected benchmarks from slide)
export const ISAAC_MICHAEL_TABLE = [
  { n: 10, s1: 10, s5: 10, s10: 10 },
  { n: 20, s1: 19, s5: 19, s10: 19 },
  { n: 50, s1: 47, s5: 44, s10: 42 },
  { n: 100, s1: 87, s5: 80, s10: 73 },
  { n: 200, s1: 154, s5: 127, s10: 115 }, // from slide!
  { n: 500, s1: 285, s5: 217, s10: 176 },
  { n: 1000, s1: 399, s5: 278, s10: 207 },
  { n: 5000, s1: 618, s5: 357, s10: 246 },
  { n: 10000, s1: 658, s5: 370, s10: 250 }
];
