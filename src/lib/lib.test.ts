import { describe, expect, it } from 'vitest';
import { cochran, describe as describeData, parseNumbers, pearson, slovin } from './sampling';
import { buildBibliography, formatInText, formatReference, parseAuthors, toPlain } from './citations';
import { buildPlan, currentPhaseIndex, overallProgress } from './roadmap';
import { buildFormulation, generateIdeas, titleCase } from './topicGen';
import { checkTitle } from './titleCheck';
import { estimateGraduation } from './estimate';
import { createDefaultState, sanitizeState } from './store';
import { addDays, diffDays, weekStartKey } from './date';
import { bestWritingStreak, writingStreak } from './badges';
import { recommendTest } from '../data/stats';
import { scoreWizard } from '../data/methods';
import { majors } from '../data/majors';
import type { Profile, Reference } from '../types/skripsi';

const profile = (over: Partial<Profile> = {}): Profile => ({
  nama: 'Rani', nim: '1', jurusanId: 'kesehatan', semester: 7, status: 'proposal', targetLulus: '2027-07', jalur: 'normal', judul: '', dosen: '', pendekatanId: '', createdAt: 0, ...over
});

const jurnal: Reference = {
  id: 'r1', type: 'jurnal', authors: parseAuthors('Santoso, Budi Hartono\nWulandari, Siti'), year: '2023',
  title: 'Pengaruh kualitas layanan terhadap kepuasan', container: 'Jurnal Manajemen', volume: '12', issue: '3', pages: '10-20', doi: '10.1234/jm.2023.1', tags: [], createdAt: 1
};

describe('sampling', () => {
  it('Slovin N=500 e=0.05 -> 223', () => expect(slovin(500, 0.05)?.n).toBe(223));
  it('Slovin menolak input tidak valid', () => {
    expect(slovin(0, 0.05)).toBeNull();
    expect(slovin(100, 0)).toBeNull();
  });
  it('Cochran 95% p=0.5 e=0.05 -> 385', () => expect(cochran(1.96, 0.5, 0.05)?.n).toBe(385));
  it('Cochran dengan koreksi populasi lebih kecil', () => expect(cochran(1.96, 0.5, 0.05, 1000)!.n).toBeLessThan(385));
  it('statistik deskriptif', () => {
    const d = describeData([2, 4, 4, 4, 5, 5, 7, 9])!;
    expect(d.mean).toBe(5);
    expect(d.median).toBe(4.5);
    expect(d.modus).toEqual([4]);
    expect(d.sd).toBeCloseTo(2.138, 2);
  });
  it('parseNumbers menerima koma desimal dan pemisah campur', () => expect(parseNumbers('1,5 2\n3; x')).toEqual([1.5, 2, 3]));
  it('pearson sempurna', () => expect(pearson([1, 2, 3, 4], [2, 4, 6, 8])!.r).toBeCloseTo(1));
});

describe('sitasi', () => {
  it('parseAuthors dua format', () => {
    expect(parseAuthors('Doe, John')).toEqual([{ family: 'Doe', given: 'John' }]);
    expect(parseAuthors('John Ronald Doe')).toEqual([{ family: 'Doe', given: 'John Ronald' }]);
    expect(parseAuthors('Kemenkes')).toEqual([{ family: 'Kemenkes', given: '' }]);
  });
  it('APA jurnal', () => {
    expect(toPlain(formatReference(jurnal, 'apa'))).toBe(
      'Santoso, B. H., & Wulandari, S. (2023). Pengaruh kualitas layanan terhadap kepuasan. Jurnal Manajemen, 12(3), 10–20. https://doi.org/10.1234/jm.2023.1'
    );
  });
  it('IEEE jurnal bernomor', () => {
    const t = toPlain(formatReference(jurnal, 'ieee', 4));
    expect(t.startsWith('[4] B. H. Santoso and S. Wulandari, "Pengaruh')).toBe(true);
    expect(t).toContain('vol. 12, no. 3, pp. 10–20, 2023');
  });
  it('sitasi dalam teks', () => {
    expect(formatInText(jurnal, 'apa')).toBe('(Santoso & Wulandari, 2023)');
    expect(formatInText(jurnal, 'ieee', 2)).toBe('[2]');
    expect(formatInText({ ...jurnal, authors: [...jurnal.authors, { family: 'C', given: 'D' }] }, 'harvard')).toBe('(Santoso et al. 2023)');
  });
  it('tanpa penulis dan tahun tidak error', () => {
    const r = { ...jurnal, authors: [], year: '' };
    expect(toPlain(formatReference(r, 'apa'))).toContain('(n.d.)');
  });
  it('daftar pustaka APA urut abjad', () => {
    const b = { ...jurnal, id: 'b', authors: parseAuthors('Adi, Rudi') };
    expect(buildBibliography([jurnal, b], 'apa')[0].ref.id).toBe('b');
  });
});

describe('roadmap', () => {
  it('status menentukan fase', () => {
    expect(currentPhaseIndex(profile({ status: 'belum-topik', semester: 5 }))).toBe(0);
    expect(currentPhaseIndex(profile({ status: 'belum-topik', semester: 7 }))).toBe(1);
    expect(currentPhaseIndex(profile({ status: 'penelitian' }))).toBe(5);
  });
  it('jadwal berurutan tanpa tumpang tindih', () => {
    const plan = buildPlan(profile(), '2026-10-19');
    const active = plan.phases.filter((p) => p.state !== 'selesai');
    for (let i = 1; i < active.length; i++) expect(active[i].mulai > active[i - 1].selesai).toBe(true);
  });
  it('target terlalu dekat -> sangat ketat', () => {
    const plan = buildPlan(profile({ status: 'belum-topik', semester: 7, targetLulus: '2026-12' }), '2026-10-19');
    expect(plan.kelayakan).toBe('sangat-ketat');
  });
  it('target longgar -> lega', () => {
    const plan = buildPlan(profile({ status: 'penelitian', targetLulus: '2028-12' }), '2026-10-19');
    expect(plan.kelayakan).toBe('lega');
  });
  it('langkah tambahan jurusan masuk checklist', () => {
    const plan = buildPlan(profile({ jurusanId: 'kesehatan', status: 'sudah-sempro' }));
    const izin = plan.phases.find((p) => p.def.id === 'izin')!;
    expect(izin.items.some((i) => i.extra && /etik/i.test(i.text))).toBe(true);
  });
  it('progres bertambah saat checklist dicentang', () => {
    const plan = buildPlan(profile());
    const base = overallProgress(plan, {});
    const first = plan.phases.find((p) => p.state === 'berjalan')!.items[0].id;
    expect(overallProgress(plan, { [first]: true })).toBeGreaterThan(base);
  });
});

describe('topik & judul', () => {
  it('generator deterministik dan unik', () => {
    const a = generateIdeas(majors[0], [], 'kuantitatif', 6, 3);
    const b = generateIdeas(majors[0], [], 'kuantitatif', 6, 3);
    expect(a).toEqual(b);
    expect(new Set(a).size).toBe(a.length);
    expect(generateIdeas(majors[0], [], 'kuantitatif', 6, 4)).not.toEqual(a);
  });
  it('semua jurusan menghasilkan ide untuk setiap jenis', () => {
    for (const m of majors) for (const mode of ['kuantitatif', 'kualitatif', 'pengembangan'] as const) expect(generateIdeas(m, [], mode, 4, 1).length).toBeGreaterThan(0);
  });
  it('titleCase menjaga singkatan dan kata kecil', () => {
    expect(titleCase('pengaruh gaya belajar terhadap hasil siswa SMA di kota')).toBe('Pengaruh Gaya Belajar terhadap Hasil Siswa SMA di Kota');
  });
  it('rumusan selaras', () => {
    const f = buildFormulation({ mode: 'pengaruh', x: 'kualitas layanan', y: 'kepuasan', z: 'Kafe X' });
    expect(f.rumusan[0]).toContain('kualitas layanan');
    expect(f.hipotesis[0].startsWith('H0')).toBe(true);
  });
  it('pemeriksa judul membedakan judul baik dan buruk', () => {
    const bad = checkTitle('Pengaruh Media Sosial');
    const good = checkTitle('Pengaruh Intensitas Penggunaan Instagram terhadap Citra Merek Produk Lokal pada Konsumen Muda di Kota Malang');
    expect(good.score).toBeGreaterThan(bad.score);
  });
});

describe('metodologi & statistik', () => {
  it('wizard: tujuan produk -> R&D teratas', () => {
    const r = scoreWizard({ tujuan: 2, data: 3 }, ['rnd', 'kuantitatif']);
    expect(r[0].id).toBe('rnd');
  });
  it('pemilih uji', () => {
    expect(recommendTest({ goal: 'beda', skala: 'numerik', kelompok: 'dua', desain: 'independen', normal: 'ya' })?.tests[0]).toBe('independent-t');
    expect(recommendTest({ goal: 'beda', skala: 'numerik', kelompok: 'dua', desain: 'berpasangan', normal: 'tidak' })?.tests[0]).toBe('wilcoxon');
    expect(recommendTest({ goal: 'pengaruh', dv: 'biner', jumlahX: 'banyak' })?.tests[0]).toBe('logistik');
    expect(recommendTest({ goal: 'beda' })).toBeNull();
  });
});

describe('estimasi & tanggal', () => {
  it('pembimbing lambat memperpanjang estimasi', () => {
    const fast = estimateGraduation({ startPhase: 'proposal', hoursPerWeek: 12, advisor: 'cepat', complexity: 'survei', today: '2026-10-19' });
    const slow = estimateGraduation({ startPhase: 'proposal', hoursPerWeek: 12, advisor: 'lambat', complexity: 'survei', today: '2026-10-19' });
    expect(slow.totalWeeks).toBeGreaterThan(fast.totalWeeks);
  });
  it('tanggal lokal', () => {
    expect(addDays('2026-02-27', 3)).toBe('2026-03-02');
    expect(diffDays('2026-01-01', '2026-01-31')).toBe(30);
    expect(weekStartKey('2026-10-21')).toBe('2026-10-19');
  });
});

describe('store & gamifikasi', () => {
  it('sanitizeState tahan data rusak', () => {
    const s = sanitizeState({ tasks: 'bukan array', roadmapChecks: [1], profile: { jurusanId: 5 }, themePref: 'ungu', writingTarget: 'x' });
    expect(Array.isArray(s.tasks)).toBe(true);
    expect(s.roadmapChecks).toEqual({});
    expect(s.profile).toBeNull();
    expect(s.themePref).toBe('system');
    expect(s.writingTarget).toBe(300);
  });
  it('sanitizeState mempertahankan data valid', () => {
    const s = sanitizeState({ profile: profile(), roadmapChecks: { 'topik.1': true } });
    expect(s.profile?.jurusanId).toBe('kesehatan');
    expect(s.roadmapChecks['topik.1']).toBe(true);
  });
  it('streak menulis', () => {
    const s = createDefaultState();
    s.writingTarget = 100;
    s.wordLog = { '2026-10-17': 120, '2026-10-18': 150, '2026-10-19': 100, '2026-10-10': 200 };
    expect(writingStreak(s, '2026-10-19')).toBe(3);
    expect(bestWritingStreak(s)).toBe(3);
    s.wordLog['2026-10-19'] = 10;
    expect(writingStreak(s, '2026-10-19')).toBe(2);
  });
});
