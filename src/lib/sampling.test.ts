import { describe, expect, it } from 'vitest';
import { Z_TABLE, cochran, describe as describeData, interpretR, parseNumbers, pearson, rulesOfThumb, slovin } from './sampling';

describe('Slovin', () => {
  // N=1000, e=0,05: 1000 / (1 + 1000 x 0,0025) = 285,71 -> 286 (pembulatan ke atas)
  it('N=1000 e=0,05 -> 286', () => {
    const r = slovin(1000, 0.05)!;
    expect(r.raw).toBeCloseTo(285.714, 3);
    expect(r.n).toBe(286);
  });
  it('N=1 -> 1 responden; menolak NaN, negatif, e=1', () => {
    expect(slovin(1, 0.05)!.n).toBe(1);
    for (const [N, e] of [[Number.NaN, 0.05], [-5, 0.05], [100, 1], [100, -0.1], [Infinity, 0.05]]) expect(slovin(N, e)).toBeNull();
  });
});

describe('Cochran', () => {
  // n0 = 1,96^2 x 0,25 / 0,05^2 = 384,16 -> 385. Koreksi populasi N=1000: 384,16 / (1 + 383,16/1000) = 277,7 -> 278
  it('tanpa dan dengan populasi terbatas', () => {
    const a = cochran(Z_TABLE['95'], 0.5, 0.05)!;
    expect(a.n0).toBeCloseTo(384.16, 2);
    expect(a.n).toBe(385);
    expect(a.nAdjusted).toBeNull();
    const b = cochran(Z_TABLE['95'], 0.5, 0.05, 1000)!;
    expect(b.nAdjusted).toBeCloseTo(277.7, 1);
    expect(b.n).toBe(278);
  });
  it('p ekstrem atau e tidak valid ditolak', () => {
    for (const [z, p, e] of [[1.96, 0, 0.05], [1.96, 1, 0.05], [1.96, 0.5, 0], [0, 0.5, 0.05], [Number.NaN, 0.5, 0.05]]) expect(cochran(z, p, e)).toBeNull();
  });
  it('N tidak valid (0, negatif, NaN) diabaikan, bukan menghasilkan NaN', () => {
    for (const N of [0, -10, Number.NaN]) expect(cochran(1.96, 0.5, 0.05, N)!.n).toBe(385);
  });
});

describe('rulesOfThumb', () => {
  it('5 prediktor: 10x=50, 15x=75, Green 50+8k=90', () => {
    const r = rulesOfThumb(5);
    expect([r.regresiTenPer, r.regresiFifteenPer, r.regresiGreen, r.plsSem]).toEqual([50, 75, 90, 50]);
  });
  it('prediktor 0 atau negatif dianggap 1', () => {
    expect(rulesOfThumb(0).regresiTenPer).toBe(10);
    expect(rulesOfThumb(-3).regresiTenPer).toBe(10);
  });
});

describe('statistik deskriptif', () => {
  it('data kosong -> null', () => expect(describeData([])).toBeNull());
  it('satu responden: sd 0 (bukan NaN), tanpa modus', () => {
    const d = describeData([7])!;
    expect([d.n, d.mean, d.median, d.variance, d.sd, d.range]).toEqual([1, 7, 7, 0, 0, 0]);
    expect(d.modus).toEqual([]);
  });
  it('semua nilai sama: varians 0', () => {
    const d = describeData([3, 3, 3, 3])!;
    expect(d.variance).toBe(0);
    expect(d.modus).toEqual([3]);
  });
  // data [2,4,4,4,5,5,7,9]: rata-rata 5, varians sampel = 32/7 = 4,5714, sd = 2,1381 (acuan hitung tangan)
  it('varians memakai pembagi n-1', () => {
    const d = describeData([2, 4, 4, 4, 5, 5, 7, 9])!;
    expect(d.variance).toBeCloseTo(32 / 7, 10);
    expect(d.sd).toBeCloseTo(2.1381, 4);
    expect(d.range).toBe(7);
  });
  it('modus ganda diurutkan; tidak mengubah array masukan', () => {
    const input = [3, 1, 1, 3, 2];
    expect(describeData(input)!.modus).toEqual([1, 3]);
    expect(input).toEqual([3, 1, 1, 3, 2]);
  });
});

describe('parseNumbers', () => {
  it('string kosong dan token bukan angka', () => {
    expect(parseNumbers('')).toEqual([]);
    expect(parseNumbers('a b ; ,,')).toEqual([]);
  });
  it('koma desimal vs pemisah', () => {
    expect(parseNumbers('1,5 72,88,91')).toEqual([1.5, 72, 88, 91]);
  });
});

describe('pearson', () => {
  it('kurang dari 3 pasang -> null; varians nol -> null', () => {
    expect(pearson([1, 2], [2, 4])).toBeNull();
    expect(pearson([1, 1, 1], [1, 2, 3])).toBeNull();
  });
  // x=[1,2,3,4,5], y=[2,4,5,4,5]: r = 6 / sqrt(10 x 6) = 0,7746 (acuan hitung tangan)
  it('cocok dengan hitung tangan dan simetris', () => {
    const x = [1, 2, 3, 4, 5];
    const y = [2, 4, 5, 4, 5];
    expect(pearson(x, y)!.r).toBeCloseTo(0.7746, 4);
    expect(pearson(y, x)!.r).toBeCloseTo(pearson(x, y)!.r, 12);
    expect(pearson(x, [5, 4, 3, 2, 1])!.r).toBeCloseTo(-1, 12);
  });
  it('panjang berbeda dipotong ke yang terpendek', () => {
    expect(pearson([1, 2, 3, 4], [2, 4, 6])!.n).toBe(3);
  });
  it('interpretasi', () => {
    expect(interpretR(0.85)).toContain('sangat kuat');
    expect(interpretR(-0.3)).toContain('negatif');
    expect(interpretR(0)).toContain('tidak ada arah');
  });
});
