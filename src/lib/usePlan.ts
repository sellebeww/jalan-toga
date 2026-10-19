import { useMemo } from 'react';
import { majorById, type Major } from '../data/majors';
import type { Profile } from '../types/skripsi';
import { useAppStore } from './store';
import { buildPlan, effectivePhaseIndex, nextStep, overallProgress, type NextStep, type Plan } from './roadmap';

export interface PlanContext {
  profile: Profile | null;
  major: Major | null;
  plan: Plan | null;
  /** indeks fase efektif (maju otomatis bila checklist fase selesai) */
  phaseIndex: number;
  progress: number;
  next: NextStep | null;
}

/** Satu pintu untuk data turunan profil: jurusan, rencana, progres, dan langkah berikutnya. */
export function usePlan(): PlanContext {
  const { profile, roadmapChecks } = useAppStore();
  return useMemo(() => {
    if (!profile) return { profile: null, major: null, plan: null, phaseIndex: 0, progress: 0, next: null };
    const plan = buildPlan(profile);
    return {
      profile,
      major: majorById(profile.jurusanId) ?? null,
      plan,
      phaseIndex: effectivePhaseIndex(plan, roadmapChecks),
      progress: overallProgress(plan, roadmapChecks),
      next: nextStep(plan, roadmapChecks)
    };
  }, [profile, roadmapChecks]);
}
