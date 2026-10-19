/** Kalkulator ukuran sampel dan statistik deskriptif dasar. Murni fungsi agar mudah diuji. */

export interface SlovinResult {
  n: number;
  raw: number;
}

/** Slovin: n = N / (1 + N·e²). e = batas toleransi kesalahan (0–1). */
export function slovin(N: number, e: number): SlovinResult | null {
  if (!Number.isFinite(N) || !Number.isFinite(e) || N < 1 || e <= 0 || e >= 1) return null;
  const raw = N / (1 + N * e * e);
  return { raw, n: Math.ceil(raw) };
}

/** Nilai Z dua sisi untuk tingkat kepercayaan umum. */
export const Z_TABLE: Record<string, number> = {
  '90': 1.645,
  '95': 1.96,
  '99': 2.576
};

export interface CochranResult {
  n0: number;
  nAdjusted: number | null;
  n: number;
}

/**
 * Cochran: n0 = Z²·p·(1−p) / e². Jika ukuran populasi N diketahui, dikoreksi:
 * n = n0 / (1 + (n0 − 1) / N).
 */
export function cochran(z: number, p: number, e: number, N?: number): CochranResult | null {
  if (![z, p, e].every(Number.isFinite) || z <= 0 || p <= 0 || p >= 1 || e <= 0 || e >= 1) return null;
  const n0 = (z * z * p * (1 - p)) / (e * e);
  if (N !== undefined && Number.isFinite(N) && N > 0) {
    const adj = n0 / (1 + (n0 - 1) / N);
    return { n0, nAdjusted: adj, n: Math.ceil(adj) };
  }
  return { n0, nAdjusted: null, n: Math.ceil(n0) };
}

/** Aturan praktis jumlah sampel minimum. */
export function rulesOfThumb(predictors: number) {
  const k = Math.max(1, Math.round(predictors));
  return {
    regresiTenPer: 10 * k,
    regresiFifteenPer: 15 * k,
    regresiGreen: 50 + 8 * k,
    plsSem: 10 * k,
    korelasi: 30,
    eksperimenPerKelompok: 15
  };
}

export function parseNumbers(text: string): number[] {
  // Pemisah: spasi, baris baru, titik koma. Koma tunggal di dalam angka = desimal ("1,5");
  // dua koma atau lebih dalam satu token = pemisah ("72,88,91").
  return text
    .split(/[\s;]+/)
    .map((t) => t.replace(/^,+|,+$/g, ''))
    .filter(Boolean)
    .flatMap((t) => ((t.match(/,/g) ?? []).length >= 2 ? t.split(',') : [t.replace(',', '.')]))
    .map(Number)
    .filter((n) => Number.isFinite(n));
}

export interface Described {
  n: number;
  mean: number;
  median: number;
  modus: number[];
  min: number;
  max: number;
  range: number;
  variance: number;
  sd: number;
}

export function describe(values: number[]): Described | null {
  const n = values.length;
  if (n === 0) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const mean = values.reduce((s, v) => s + v, 0) / n;
  const median = n % 2 ? sorted[(n - 1) / 2] : (sorted[n / 2 - 1] + sorted[n / 2]) / 2;
  const freq = new Map<number, number>();
  values.forEach((v) => freq.set(v, (freq.get(v) ?? 0) + 1));
  const maxFreq = Math.max(...freq.values());
  const modus = maxFreq > 1 ? [...freq.entries()].filter(([, f]) => f === maxFreq).map(([v]) => v).sort((a, b) => a - b) : [];
  const variance = n > 1 ? values.reduce((s, v) => s + (v - mean) ** 2, 0) / (n - 1) : 0;
  return { n, mean, median, modus, min: sorted[0], max: sorted[n - 1], range: sorted[n - 1] - sorted[0], variance, sd: Math.sqrt(variance) };
}

export function pearson(x: number[], y: number[]): { r: number; n: number } | null {
  const n = Math.min(x.length, y.length);
  if (n < 3) return null;
  const xs = x.slice(0, n);
  const ys = y.slice(0, n);
  const mx = xs.reduce((s, v) => s + v, 0) / n;
  const my = ys.reduce((s, v) => s + v, 0) / n;
  let num = 0;
  let dx = 0;
  let dy = 0;
  for (let i = 0; i < n; i++) {
    num += (xs[i] - mx) * (ys[i] - my);
    dx += (xs[i] - mx) ** 2;
    dy += (ys[i] - my) ** 2;
  }
  if (dx === 0 || dy === 0) return null;
  return { r: num / Math.sqrt(dx * dy), n };
}

export function interpretR(r: number): string {
  const a = Math.abs(r);
  const dir = r > 0 ? 'positif' : r < 0 ? 'negatif' : 'tidak ada arah';
  const power = a < 0.2 ? 'sangat lemah' : a < 0.4 ? 'lemah' : a < 0.6 ? 'sedang' : a < 0.8 ? 'kuat' : 'sangat kuat';
  return `Hubungan ${power} (${dir})`;
}

export const fmt = (n: number, digits = 2) =>
  Number.isInteger(n) ? String(n) : n.toLocaleString('id-ID', { maximumFractionDigits: digits });
