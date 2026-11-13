import { describe, expect, it } from 'vitest';
import {
  ISAAC_MICHAEL_TABLE,
  calculateCronbachAlpha,
  calculateHarryKing,
  calculateKR20,
  calculateLikert,
  calculateSpearmanBrown,
  getRoscoeGuidelines
} from './calculators';

/**
 * Nilai acuan dihitung terpisah (Python, `statistics`) dari data mentah, bukan dari kode aplikasi.
 * Cronbach: 4 responden x 3 item [[2,3,3],[3,4,4],[4,4,5],[5,5,5]]
 *   varians sampel per item = 1.6667, 0.6667, 0.9167 -> jumlah 3.25; varians skor total (sampel) = 8.9167
 *   alpha = 3/2 * (1 - 3.25/8.9167) = 0.95327
 */
describe('Cronbach alpha', () => {
  it('cocok dengan nilai acuan dari data mentah', () => {
    const r = calculateCronbachAlpha(3, 3.25, 8.916666666666666);
    expect(r.isValid).toBe(true);
    expect(r.alpha).toBeCloseTo(0.9533, 4);
    expect(r.interpretation).toBe('Sangat Baik (Tinggi)');
  });
  it('batas kategori: 0.8, 0.7, 0.6', () => {
    // k=2 -> faktor 2, alpha = 2 * (1 - ratio); ratio 0.6 -> 0.8, 0.65 -> 0.7, 0.7 -> 0.6, 0.71 -> 0.58
    expect(calculateCronbachAlpha(2, 0.6, 1).interpretation).toBe('Sangat Baik (Tinggi)');
    expect(calculateCronbachAlpha(2, 0.65, 1).interpretation).toBe('Dapat Diterima (Layak)');
    expect(calculateCronbachAlpha(2, 0.7, 1).interpretation).toBe('Cukup');
    expect(calculateCronbachAlpha(2, 0.71, 1).interpretation).toBe('Rendah / Perlu Perbaikan Item');
  });
  it('nilai tepat di batas tidak turun kategori karena galat floating-point', () => {
    // 4/3 * (1 - 2/5) = 0.7999999999999999 di IEEE-754, padahal secara matematis tepat 0.8
    expect(calculateCronbachAlpha(4, 2, 5).alpha).toBe(0.8);
    expect(calculateCronbachAlpha(4, 2, 5).interpretation).toBe('Sangat Baik (Tinggi)');
    // 6/5 * (1 - 5/12) = 0.6999999999999998 (batas 0.7)
    expect(calculateCronbachAlpha(6, 5, 12).interpretation).toBe('Dapat Diterima (Layak)');
    // 4/3 * (1 - 11/20) = 0.5999999999999999 (batas 0.6)
    expect(calculateCronbachAlpha(4, 11, 20).interpretation).toBe('Cukup');
  });
  it('data kosong / varians nol / satu item -> tidak valid, bukan NaN', () => {
    for (const r of [calculateCronbachAlpha(0, 0, 0), calculateCronbachAlpha(3, 1, 0), calculateCronbachAlpha(1, 1, 2), calculateCronbachAlpha(-2, 1, 2)]) {
      expect(r.isValid).toBe(false);
      expect(r.alpha).toBe(0);
      expect(r.interpretation).toBe('Tidak valid');
    }
  });
  it('varians item sama dengan varians total -> alpha 0', () => {
    expect(calculateCronbachAlpha(4, 5, 5).alpha).toBe(0);
  });
  it('langkah perhitungan memuat k dan hasil', () => {
    const r = calculateCronbachAlpha(3, 3.25, 8.916666666666666);
    expect(r.steps.some((s) => s.includes('k = 3'))).toBe(true);
    expect(r.steps.at(-2)).toContain('0.9533');
  });
});

/**
 * KR-20: 5 responden x 4 item dikotomi [[1,1,1,0],[1,1,0,0],[1,0,0,0],[1,1,1,1],[0,0,0,0]]
 *   p = 0.8, 0.6, 0.4, 0.2 -> sum(pq) = 0.16+0.24+0.24+0.16 = 0.8
 *   skor total = 3,2,1,4,0 -> varians populasi = 2 (KR-20 klasik memakai varians populasi)
 *   rho = 4/3 * (1 - 0.8/2) = 0.8
 */
describe('KR-20', () => {
  it('cocok dengan nilai acuan dari data mentah', () => {
    const r = calculateKR20(4, 0.8, 2);
    expect(r.isValid).toBe(true);
    expect(r.kr20).toBeCloseTo(0.8, 4);
    expect(r.rho).toBe(r.kr20);
    expect(r.interpretation).toBe('Sangat Baik (Tinggi)');
  });
  it('nilai tepat di batas tidak turun kategori karena galat floating-point', () => {
    expect(calculateKR20(4, 2, 5).interpretation).toBe('Sangat Baik (Tinggi)');
  });
  it('kategori pada batas', () => {
    // k=2: rho = 2 * (1 - sumPq/var)
    expect(calculateKR20(2, 0.65, 1).interpretation).toBe('Layak / Baik');
    expect(calculateKR20(2, 0.7, 1).interpretation).toBe('Cukup');
    expect(calculateKR20(2, 0.9, 1).interpretation).toBe('Rendah');
  });
  it('input degenerat -> tidak valid', () => {
    for (const r of [calculateKR20(0, 0, 0), calculateKR20(1, 0.2, 1), calculateKR20(5, 1, 0)]) {
      expect(r.isValid).toBe(false);
      expect(r.kr20).toBe(0);
    }
  });
});

describe('Spearman-Brown', () => {
  it('r=0.6 -> 0.75 (2r/(1+r))', () => {
    const r = calculateSpearmanBrown(0.6);
    expect(r.rho).toBe(0.75);
    expect(r.interpretation).toBe('Tinggi (Cukup Handal)');
  });
  it('r=1 -> 1 dan r=0 -> 0', () => {
    expect(calculateSpearmanBrown(1).rho).toBe(1);
    expect(calculateSpearmanBrown(0).rho).toBe(0);
  });
  it('r <= -1 ditolak tanpa NaN/Infinity', () => {
    for (const x of [-1, -2]) {
      const r = calculateSpearmanBrown(x);
      expect(r.interpretation).toBe('Tidak valid');
      expect(Number.isFinite(r.rho)).toBe(true);
    }
  });
});

describe('Likert', () => {
  it('contoh hitung tangan: 4 SS, 3 ST, 2 RG, 1 TS, 0 STS', () => {
    // N=10, skor = 20+12+6+2+0 = 40, maks = 50 -> 80% (batas bawah kategori tertinggi)
    const r = calculateLikert({ ss: 4, st: 3, rg: 2, ts: 1, sts: 0 });
    expect(r.totalRespondents).toBe(10);
    expect(r.totalScore).toBe(40);
    expect(r.maxScore).toBe(50);
    expect(r.minScore).toBe(10);
    expect(r.percentage).toBe(80);
    expect(r.continuumCategory).toBe('Sangat Positif / Sangat Setuju');
  });
  it('semua jawaban STS -> 20% (bukan 0%), kategori negatif', () => {
    const r = calculateLikert({ ss: 0, st: 0, rg: 0, ts: 0, sts: 7 });
    expect(r.percentage).toBe(20);
    expect(r.continuumCategory).toBe('Negatif / Tidak Setuju');
  });
  it('semua SS -> 100%', () => {
    expect(calculateLikert({ ss: 1, st: 0, rg: 0, ts: 0, sts: 0 }).percentage).toBe(100);
  });
  it('batas kategori 60% dan 40%', () => {
    // N=5, skor 15 -> 60%; skor 10 -> 40%
    expect(calculateLikert({ ss: 0, st: 0, rg: 5, ts: 0, sts: 0 }).continuumCategory).toBe('Positif / Setuju');
    expect(calculateLikert({ ss: 0, st: 0, rg: 0, ts: 5, sts: 0 }).continuumCategory).toBe('Netral / Cukup');
  });
  it('data kosong -> "Belum ada data", tanpa NaN', () => {
    const r = calculateLikert({ ss: 0, st: 0, rg: 0, ts: 0, sts: 0 });
    expect(r.totalRespondents).toBe(0);
    expect(r.percentage).toBe(0);
    expect(r.continuumCategory).toBe('Belum ada data');
  });
  it('persentase dibulatkan 2 desimal', () => {
    // N=3: 5+4+3 = 12 / 15 = 80%; N=3: 5+5+1 = 11/15 = 73.333..%
    expect(calculateLikert({ ss: 2, st: 0, rg: 0, ts: 0, sts: 1 }).percentage).toBe(73.33);
  });
});

describe('ukuran sampel (Harry King, Roscoe, Isaac-Michael)', () => {
  it('Harry King N=200 -> 139 (contoh slide: 0,58 x 200 x 1,195 = 138,62)', () => {
    const r = calculateHarryKing(200);
    expect(r.sampleSize).toBe(139);
    expect(r.formulaText).toContain('138.62');
  });
  it('Roscoe: minimal multivariat 10x jumlah variabel', () => {
    expect(getRoscoeGuidelines(5).multivariateMin).toBe(50);
    expect(getRoscoeGuidelines(8).multivariateMin).toBe(80);
    expect(getRoscoeGuidelines().perCategory).toBe(30);
  });

  /**
   * Acuan independen: s = chi2 * N * P(1-P) / (d^2 (N-1) + chi2 * P(1-P)), P=0.5, d=0.05,
   * chi2 = 6.635 / 3.841 / 2.706 untuk kolom 1% / 5% / 10%.
   * Sel di bawah ini berbeda dari rumus lebih dari 1 responden. Itu dicatat sebagai temuan (bukan diubah):
   * tabel bawaan mungkin mengutip tabel cetak yang membulatkan berbeda.
   */
  const KNOWN_DIVERGENT = new Set(['200:s5', '1000:s10', '5000:s1', '5000:s10', '10000:s1', '10000:s10']);
  const formula = (N: number, chi2: number) => (chi2 * N * 0.25) / (0.05 * 0.05 * (N - 1) + chi2 * 0.25);
  const cols = [
    ['s1', 6.635],
    ['s5', 3.841],
    ['s10', 2.706]
  ] as const;

  it('tabel terurut naik dan sampel tidak melebihi populasi', () => {
    for (let i = 0; i < ISAAC_MICHAEL_TABLE.length; i++) {
      const row = ISAAC_MICHAEL_TABLE[i];
      expect(row.s1).toBeGreaterThanOrEqual(row.s5);
      expect(row.s5).toBeGreaterThanOrEqual(row.s10);
      expect(row.s1).toBeLessThanOrEqual(row.n);
      if (i > 0) expect(row.n).toBeGreaterThan(ISAAC_MICHAEL_TABLE[i - 1].n);
    }
  });
  it('sel yang tidak ditandai divergen cocok dengan rumus (toleransi 1)', () => {
    for (const row of ISAAC_MICHAEL_TABLE) {
      for (const [key, chi2] of cols) {
        if (KNOWN_DIVERGENT.has(`${row.n}:${key}`)) continue;
        expect(Math.abs(row[key] - formula(row.n, chi2)), `N=${row.n} ${key}`).toBeLessThanOrEqual(1);
      }
    }
  });
  it('sel divergen yang tercatat memang masih berbeda (agar daftar ini diperbarui bila data diperbaiki)', () => {
    for (const key of KNOWN_DIVERGENT) {
      const [n, col] = key.split(':');
      const row = ISAAC_MICHAEL_TABLE.find((r) => r.n === Number(n))!;
      const chi2 = cols.find(([c]) => c === col)![1];
      expect(Math.abs(row[col as 's1' | 's5' | 's10'] - formula(row.n, chi2)), key).toBeGreaterThan(1);
    }
  });
});
