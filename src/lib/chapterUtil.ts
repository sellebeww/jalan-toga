import type { Chapter } from '../data/chapters';
import type { BabStatus } from '../types/skripsi';

export const statusLabels: Record<BabStatus, string> = {
  belum: 'Belum mulai',
  draft: 'Sedang menulis',
  bimbingan: 'Di dosen',
  revisi: 'Revisi',
  acc: 'ACC'
};

export const statusTone: Record<BabStatus, 'neutral' | 'info' | 'warn' | 'accent' | 'good'> = {
  belum: 'neutral',
  draft: 'info',
  bimbingan: 'accent',
  revisi: 'warn',
  acc: 'good'
};

/** Bobot progres tiap status bab untuk perhitungan persentase di tracker. */
export const statusWeight: Record<BabStatus, number> = {
  belum: 0,
  draft: 35,
  bimbingan: 60,
  revisi: 80,
  acc: 100
};

export function chapterProgress(ch: Chapter, checks: Record<string, boolean>) {
  const total = ch.checklist.length;
  const done = ch.checklist.filter((_, i) => checks[`chk.${ch.id}.${i}`]).length;
  return { done, total, pct: total ? (done / total) * 100 : 0 };
}
