import { majorById, type PhaseId } from '../data/majors';
import { jalurInfo, phases, statusById, type PhaseDef } from '../data/roadmap';
import type { Profile } from '../types/skripsi';
import { addDays, diffDays, todayKey, toKey } from './date';

export interface PlanPhase {
  def: PhaseDef;
  index: number;
  state: 'selesai' | 'berjalan' | 'akan';
  /** Checklist lengkap (dasar + tambahan jurusan) dengan id stabil. */
  items: { id: string; text: string; extra: boolean }[];
  minggu: number;
  mulai: string;
  selesai: string;
}

export interface Plan {
  phases: PlanPhase[];
  currentIndex: number;
  /** minggu tersedia hingga target lulus (null jika target kosong/lewat) */
  mingguTersedia: number | null;
  mingguDibutuhkanNormal: number;
  rasio: number | null;
  kelayakan: 'lega' | 'aman' | 'ketat' | 'sangat-ketat' | 'tanpa-target';
  rekomendasiJalur: 'normal' | 'kejar' | 'molor';
  saranLulus: string;
}

/** Akhir bulan (YYYY-MM) sebagai tanggal. */
export function endOfMonthKey(month: string): string {
  const [y, m] = month.split('-').map(Number);
  return toKey(new Date(y, m, 0));
}

export function currentPhaseIndex(profile: Profile): number {
  const fase = statusById(profile.status).fase;
  const idx = phases.findIndex((p) => p.id === fase);
  // Pengguna semester awal tanpa topik: mulai dari eksplorasi.
  if (profile.status === 'belum-topik' && profile.semester <= 6) return 0;
  return Math.max(0, idx);
}

export function phaseItems(def: PhaseDef, profile: Profile | null): PlanPhase['items'] {
  const base = def.checklist.map((text, i) => ({ id: `${def.id}.${i + 1}`, text, extra: false }));
  const major = profile ? majorById(profile.jurusanId) : undefined;
  const extra = (major?.langkahTambahan ?? [])
    .filter((l) => l.fase === def.id)
    .map((l, i) => ({ id: `${def.id}.x${i + 1}`, text: l.teks, extra: true }));
  return [...base, ...extra];
}

export function buildPlan(profile: Profile, today: string = todayKey()): Plan {
  const currentIndex = currentPhaseIndex(profile);
  const remaining = phases.slice(currentIndex);
  const needNormal = remaining.reduce((s, p) => s + p.minggu, 0);

  let mingguTersedia: number | null = null;
  if (profile.targetLulus && /^\d{4}-\d{2}$/.test(profile.targetLulus)) {
    const days = diffDays(today, endOfMonthKey(profile.targetLulus));
    if (days > 0) mingguTersedia = days / 7;
  }

  const rasio = mingguTersedia === null ? null : mingguTersedia / needNormal;

  let kelayakan: Plan['kelayakan'] = 'tanpa-target';
  let rekomendasiJalur: Plan['rekomendasiJalur'] = profile.jalur;
  if (rasio !== null) {
    if (rasio >= 1.25) {
      kelayakan = 'lega';
      rekomendasiJalur = 'normal';
    } else if (rasio >= 1) {
      kelayakan = 'aman';
      rekomendasiJalur = 'normal';
    } else if (rasio >= 0.65) {
      kelayakan = 'ketat';
      rekomendasiJalur = 'kejar';
    } else {
      kelayakan = 'sangat-ketat';
      rekomendasiJalur = 'molor';
    }
  }

  // Skala durasi: jika ada target, sesuaikan agar pas dengan waktu tersedia (dibatasi); jika tidak, pakai faktor jalur.
  const faktorJalur = jalurInfo[profile.jalur].faktorWaktu;
  let scale = faktorJalur;
  if (mingguTersedia !== null) {
    scale = Math.min(1.6, Math.max(0.5, mingguTersedia / needNormal));
  }

  let cursor = today;
  const plan: PlanPhase[] = phases.map((def, index) => {
    const items = phaseItems(def, profile);
    const state: PlanPhase['state'] = index < currentIndex ? 'selesai' : index === currentIndex ? 'berjalan' : 'akan';
    if (state === 'selesai') {
      return { def, index, state, items, minggu: 0, mulai: '', selesai: '' };
    }
    const minggu = Math.max(1, Math.round(def.minggu * scale));
    const mulai = cursor;
    const selesai = addDays(cursor, minggu * 7 - 1);
    cursor = addDays(selesai, 1);
    return { def, index, state, items, minggu, mulai, selesai };
  });

  const butuhHari = Math.round(needNormal * 7 * 1.15);
  const saranLulus = addDays(today, butuhHari);

  return {
    phases: plan,
    currentIndex,
    mingguTersedia,
    mingguDibutuhkanNormal: needNormal,
    rasio,
    kelayakan,
    rekomendasiJalur,
    saranLulus: saranLulus.slice(0, 7)
  };
}

export interface PhaseProgress {
  done: number;
  total: number;
  fraction: number;
}

export function phaseProgress(p: PlanPhase, checks: Record<string, boolean>): PhaseProgress {
  if (p.state === 'selesai') return { done: p.items.length, total: p.items.length, fraction: 1 };
  const done = p.items.filter((i) => checks[i.id]).length;
  const total = p.items.length;
  return { done, total, fraction: total === 0 ? 0 : done / total };
}

/** Persentase keseluruhan, berbobot lama fase. */
export function overallProgress(plan: Plan, checks: Record<string, boolean>): number {
  let wDone = 0;
  let wTotal = 0;
  for (const p of plan.phases) {
    wTotal += p.def.minggu;
    wDone += p.def.minggu * phaseProgress(p, checks).fraction;
  }
  return wTotal === 0 ? 0 : Math.round((wDone / wTotal) * 100);
}

export interface NextStep {
  phase: PlanPhase;
  itemId: string;
  text: string;
}

/** Langkah berikutnya: butir pertama yang belum dicentang pada fase berjalan (atau fase berikutnya). */
export function nextStep(plan: Plan, checks: Record<string, boolean>): NextStep | null {
  for (const p of plan.phases) {
    if (p.state === 'selesai') continue;
    const item = p.items.find((i) => !checks[i.id]);
    if (item) return { phase: p, itemId: item.id, text: item.text };
  }
  return null;
}

/** Fase yang secara efektif sedang berjalan: maju bila seluruh checklist fase aktif selesai. */
export function effectivePhaseIndex(plan: Plan, checks: Record<string, boolean>): number {
  for (const p of plan.phases) {
    if (p.state === 'selesai') continue;
    if (!p.items.every((i) => checks[i.id])) return p.index;
  }
  return plan.phases.length - 1;
}

export function phaseLabel(id: PhaseId): string {
  return phases.find((p) => p.id === id)?.nama ?? id;
}
