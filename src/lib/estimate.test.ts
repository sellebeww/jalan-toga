import { describe, expect, it } from 'vitest';
import { estimateGraduation } from './estimate';
import { buildPlan, effectivePhaseIndex, nextStep, overallProgress, phaseProgress } from './roadmap';
import { phases } from '../data/roadmap';
import type { Profile } from '../types/skripsi';

const profile = (o: Partial<Profile> = {}): Profile => ({
  nama: 'Uji', nim: '1', jurusanId: 'teknik-informatika', semester: 7, status: 'proposal', targetLulus: '', jalur: 'normal',
  judul: '', dosen: '', pendekatanId: '', createdAt: 1, ...o
});
const TODAY = '2026-01-05';

/**
 * Acuan hitung tangan, mulai fase "proposal" (minggu dasar: proposal 8, sempro 3, izin 3, data 6, analisis 8, final 3, sidang 3, wisuda 4).
 * 12 jam/minggu (faktor 1), survei (x1), pembimbing lambat (x1,35 untuk proposal, analisis, final):
 *   proposal 10,8 -> 11; sempro 3; izin 3; data 6; analisis 10,8 -> 11; final 4,05 -> 4; sidang 3; wisuda 4 = 45 minggu.
 * Skenario: optimis round(45 x 0,8) = 36, realistis 45, hati-hati round(45 x 1,35) = 61 minggu dari 2026-01-05.
 */
describe('estimateGraduation', () => {
  it('cocok dengan hitung tangan', () => {
    const r = estimateGraduation({ startPhase: 'proposal', hoursPerWeek: 12, advisor: 'lambat', complexity: 'survei', today: TODAY });
    expect(r.rows.map((x) => x.minggu)).toEqual([11, 3, 3, 6, 11, 4, 3, 4]);
    expect(r.rows.map((x) => x.id)).toEqual(['proposal', 'sempro', 'izin', 'data', 'analisis', 'final', 'sidang', 'wisuda']);
    expect(r.totalWeeks).toBe(45);
    expect(r.scenarios.map((s) => [s.label, s.weeks, s.date])).toEqual([
      ['Optimis', 36, '2026-09-14'],
      ['Realistis', 45, '2026-11-16'],
      ['Hati-hati', 61, '2027-03-08']
    ]);
    expect(r.scenarios[1].month).toBe('2026-11');
  });
  it('mulai dari fase terakhir: hanya fase itu, minimal 1 minggu', () => {
    const r = estimateGraduation({ startPhase: 'wisuda', hoursPerWeek: 12, advisor: 'sedang', complexity: 'survei', today: TODAY });
    expect(r.rows).toHaveLength(1);
    expect(r.totalWeeks).toBe(4);
  });
  it('mulai dari fase pertama mencakup seluruh fase', () => {
    const r = estimateGraduation({ startPhase: 'eksplorasi', hoursPerWeek: 12, advisor: 'sedang', complexity: 'survei', today: TODAY });
    expect(r.rows).toHaveLength(phases.length);
    expect(r.totalWeeks).toBe(phases.reduce((s, p) => s + p.minggu, 0));
  });
  it('jam per minggu dibatasi 2-40 dan faktor 0,6-3; 0/NaN dianggap 12', () => {
    const base = { startPhase: 'proposal' as const, advisor: 'sedang' as const, complexity: 'survei' as const, today: TODAY };
    const w = (h: number) => estimateGraduation({ ...base, hoursPerWeek: h }).totalWeeks;
    expect(w(1)).toBe(w(2)); // di bawah batas -> 2 jam
    expect(w(100)).toBe(w(40)); // di atas batas -> 40 jam
    expect(w(0)).toBe(w(12));
    expect(w(Number.NaN)).toBe(w(12));
    expect(w(6)).toBeGreaterThan(w(12));
    expect(w(24)).toBeLessThan(w(12));
  });
  it('kompleksitas dan pembimbing menaikkan total secara monoton', () => {
    const t = (complexity: 'sekunder' | 'survei' | 'eksperimen') =>
      estimateGraduation({ startPhase: 'proposal', hoursPerWeek: 12, advisor: 'sedang', complexity, today: TODAY }).totalWeeks;
    expect(t('sekunder')).toBeLessThanOrEqual(t('survei'));
    expect(t('survei')).toBeLessThan(t('eksperimen'));
  });
  it('skenario berurutan optimis <= realistis <= hati-hati dan tanggal tidak mundur', () => {
    const r = estimateGraduation({ startPhase: 'topik', hoursPerWeek: 10, advisor: 'cepat', complexity: 'kualitatif', today: TODAY });
    const [a, b, c] = r.scenarios;
    expect(a.weeks).toBeLessThanOrEqual(b.weeks);
    expect(b.weeks).toBeLessThanOrEqual(c.weeks);
    expect(a.date <= b.date && b.date <= c.date).toBe(true);
  });
  it('tidak bergantung pada tanggal sistem bila today diberikan (deterministik)', () => {
    const i = { startPhase: 'data' as const, hoursPerWeek: 12, advisor: 'sedang' as const, complexity: 'survei' as const, today: TODAY };
    expect(estimateGraduation(i)).toEqual(estimateGraduation(i));
  });
});

describe('buildPlan (hitung tangan)', () => {
  // status "proposal" -> fase proposal (indeks 2); minggu normal tersisa = 8+3+3+6+8+3+3+4 = 38
  it('tanpa target: kelayakan "tanpa-target", jadwal pakai faktor jalur, saran lulus = +round(38 x 7 x 1,15) hari', () => {
    const plan = buildPlan(profile({ status: 'proposal', targetLulus: '' }), TODAY);
    expect(plan.currentIndex).toBe(2);
    expect(plan.mingguDibutuhkanNormal).toBe(38);
    expect(plan.mingguTersedia).toBeNull();
    expect(plan.rasio).toBeNull();
    expect(plan.kelayakan).toBe('tanpa-target');
    expect(plan.saranLulus).toBe('2026-11'); // 2026-01-05 + 306 hari = 2026-11-07
    expect(plan.phases.map((p) => p.state)).toEqual(['selesai', 'selesai', 'berjalan', 'akan', 'akan', 'akan', 'akan', 'akan', 'akan', 'akan']);
    expect(plan.phases[0].minggu).toBe(0);
    expect(plan.phases[2].mulai).toBe(TODAY);
    expect(plan.phases[2].minggu).toBe(8);
  });
  it('jalur kejar mengecilkan durasi, jalur molor membesarkan', () => {
    const w = (jalur: 'normal' | 'kejar' | 'molor') =>
      buildPlan(profile({ jalur }), TODAY).phases.filter((p) => p.state !== 'selesai').reduce((s, p) => s + p.minggu, 0);
    expect(w('kejar')).toBeLessThan(w('normal'));
    expect(w('molor')).toBeGreaterThan(w('normal'));
  });
  it('target 2026-12 dari 2026-01-05: 360 hari -> rasio ~1,35 -> lega', () => {
    const plan = buildPlan(profile({ status: 'proposal', targetLulus: '2026-12' }), TODAY);
    expect(plan.mingguTersedia).toBeCloseTo(360 / 7, 6);
    expect(plan.rasio).toBeCloseTo(360 / 7 / 38, 6);
    expect(plan.kelayakan).toBe('lega');
    expect(plan.rekomendasiJalur).toBe('normal');
  });
  it('target di masa lalu atau format salah dianggap tanpa target', () => {
    expect(buildPlan(profile({ targetLulus: '2025-06' }), TODAY).kelayakan).toBe('tanpa-target');
    expect(buildPlan(profile({ targetLulus: 'bukan-bulan' }), TODAY).kelayakan).toBe('tanpa-target');
  });
  it('skala jadwal dibatasi 0,5-1,6 dari minggu dasar', () => {
    const tight = buildPlan(profile({ status: 'proposal', targetLulus: '2026-02' }), TODAY);
    const loose = buildPlan(profile({ status: 'proposal', targetLulus: '2035-12' }), TODAY);
    const cur = (p: ReturnType<typeof buildPlan>) => p.phases[p.currentIndex].minggu;
    expect(cur(tight)).toBe(4); // 8 x 0,5
    expect(cur(loose)).toBe(13); // round(8 x 1,6) = 13
    expect(tight.kelayakan).toBe('sangat-ketat');
  });
  it('progres: kosong = 0%, semua dicentang = 100%, nextStep dan fase efektif ikut bergerak', () => {
    const plan = buildPlan(profile({ status: 'proposal' }), TODAY);
    expect(overallProgress(plan, {})).toBeGreaterThan(0); // fase "selesai" dihitung penuh
    const all: Record<string, boolean> = {};
    for (const p of plan.phases) for (const i of p.items) all[i.id] = true;
    expect(overallProgress(plan, all)).toBe(100);
    expect(nextStep(plan, all)).toBeNull();
    expect(nextStep(plan, {})!.phase.index).toBe(plan.currentIndex);
    const first = plan.phases[plan.currentIndex].items.map((i) => i.id);
    const doneFirst = Object.fromEntries(first.map((id) => [id, true]));
    expect(effectivePhaseIndex(plan, {})).toBe(plan.currentIndex);
    expect(effectivePhaseIndex(plan, doneFirst)).toBe(plan.currentIndex + 1);
    expect(phaseProgress(plan.phases[plan.currentIndex], doneFirst).fraction).toBe(1);
  });
});
