import { phases } from '../data/roadmap';
import type { PhaseId } from '../data/majors';
import { addDays, monthKey, todayKey } from './date';

export type AdvisorSpeed = 'cepat' | 'sedang' | 'lambat';
export type Complexity = 'sekunder' | 'survei' | 'kualitatif' | 'eksperimen' | 'rnd';

export const advisorFactor: Record<AdvisorSpeed, number> = { cepat: 0.9, sedang: 1, lambat: 1.35 };
export const complexityFactor: Record<Complexity, number> = { sekunder: 0.8, survei: 1, kualitatif: 1.1, eksperimen: 1.25, rnd: 1.25 };

/** Fase yang waktunya dipengaruhi kompleksitas data/penelitian. */
const DATA_HEAVY: PhaseId[] = ['izin', 'data', 'analisis'];
/** Fase yang waktunya dipengaruhi kecepatan respons pembimbing. */
const ADVISOR_HEAVY: PhaseId[] = ['topik', 'proposal', 'analisis', 'final'];

export interface EstimateInput {
  startPhase: PhaseId;
  hoursPerWeek: number;
  advisor: AdvisorSpeed;
  complexity: Complexity;
  today?: string;
}

export interface EstimateRow {
  id: PhaseId;
  nama: string;
  minggu: number;
}

export interface EstimateResult {
  rows: EstimateRow[];
  totalWeeks: number;
  scenarios: { label: 'Optimis' | 'Realistis' | 'Hati-hati'; weeks: number; date: string; month: string }[];
}

export function estimateGraduation(input: EstimateInput): EstimateResult {
  const today = input.today ?? todayKey();
  const startIdx = Math.max(0, phases.findIndex((p) => p.id === input.startPhase));
  const hours = Math.min(40, Math.max(2, input.hoursPerWeek || 12));
  // baseline fase dirancang untuk sekitar 12 jam per minggu
  const hourFactor = Math.min(3, Math.max(0.6, 12 / hours));

  const rows: EstimateRow[] = phases.slice(startIdx).map((p) => {
    let w = p.minggu * hourFactor;
    if (DATA_HEAVY.includes(p.id)) w *= complexityFactor[input.complexity];
    if (ADVISOR_HEAVY.includes(p.id)) w *= advisorFactor[input.advisor];
    return { id: p.id, nama: p.nama, minggu: Math.max(1, Math.round(w)) };
  });

  const totalWeeks = rows.reduce((s, r) => s + r.minggu, 0);
  const mk = (label: 'Optimis' | 'Realistis' | 'Hati-hati', f: number) => {
    const weeks = Math.max(1, Math.round(totalWeeks * f));
    const date = addDays(today, weeks * 7);
    return { label, weeks, date, month: date.slice(0, 7) };
  };
  return { rows, totalWeeks, scenarios: [mk('Optimis', 0.8), mk('Realistis', 1), mk('Hati-hati', 1.35)] };
}

export { monthKey };
