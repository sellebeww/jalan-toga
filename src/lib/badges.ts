import type { AppState } from './store';
import { addDays, todayKey } from './date';

export interface BadgeDef {
  id: string;
  name: string;
  desc: string;
  /** nama ikon lucide (dipetakan di komponen) */
  icon: string;
  test: (s: AppState) => boolean;
}

const sum = (xs: number[]) => xs.reduce((a, b) => a + b, 0);

export function totalWords(s: AppState): number {
  return sum(Object.values(s.wordLog));
}

/** Jumlah hari berturut-turut (berakhir hari ini atau kemarin) dengan kata ≥ target (atau >0 bila target 0). */
export function writingStreak(s: AppState, today: string = todayKey()): number {
  const goal = Math.max(1, s.writingTarget || 1);
  const ok = (d: string) => (s.wordLog[d] ?? 0) >= goal;
  let day = ok(today) ? today : addDays(today, -1);
  let n = 0;
  while (ok(day)) {
    n += 1;
    day = addDays(day, -1);
  }
  return n;
}

export function bestWritingStreak(s: AppState): number {
  const goal = Math.max(1, s.writingTarget || 1);
  const days = Object.keys(s.wordLog)
    .filter((d) => (s.wordLog[d] ?? 0) >= goal)
    .sort();
  let best = 0;
  let run = 0;
  let prev = '';
  for (const d of days) {
    run = prev && addDays(prev, 1) === d ? run + 1 : 1;
    best = Math.max(best, run);
    prev = d;
  }
  return best;
}

const accCount = (s: AppState) => Object.values(s.babStatus).filter((v) => v === 'acc').length;
const reviewedCards = (s: AppState) => Object.keys(s.cardStates).length;

export const badges: BadgeDef[] = [
  { id: 'mulai', name: 'Langkah Pertama', desc: 'Menyelesaikan onboarding dan membuat roadmap.', icon: 'Flag', test: (s) => s.profile !== null },
  { id: 'roadmap-10', name: 'Mulai Bergerak', desc: 'Mencentang 10 langkah di roadmap.', icon: 'Route', test: (s) => Object.keys(s.roadmapChecks).length >= 10 },
  { id: 'roadmap-30', name: 'Konsisten', desc: 'Mencentang 30 langkah di roadmap.', icon: 'Route', test: (s) => Object.keys(s.roadmapChecks).length >= 30 },
  { id: 'roadmap-60', name: 'Hampir Garis Finis', desc: 'Mencentang 60 langkah di roadmap.', icon: 'Trophy', test: (s) => Object.keys(s.roadmapChecks).length >= 60 },
  { id: 'topik-1', name: 'Pemburu Ide', desc: 'Menyimpan kandidat topik pertama.', icon: 'Lightbulb', test: (s) => s.savedTopics.length >= 1 },
  { id: 'judul', name: 'Punya Judul', desc: 'Mengisi judul skripsi di profil.', icon: 'Type', test: (s) => !!s.profile?.judul },
  { id: 'bab-1', name: 'Satu Bab Beres', desc: 'Satu bab berstatus ACC.', icon: 'BookCheck', test: (s) => accCount(s) >= 1 },
  { id: 'bab-3', name: 'Proposal Beres', desc: 'Tiga bab berstatus ACC.', icon: 'FileCheck2', test: (s) => accCount(s) >= 3 },
  { id: 'bab-5', name: 'Naskah Lengkap', desc: 'Lima bab berstatus ACC.', icon: 'GraduationCap', test: (s) => accCount(s) >= 5 },
  { id: 'ref-10', name: 'Kolektor Pustaka', desc: 'Menyimpan 10 referensi.', icon: 'Library', test: (s) => s.references.length >= 10 },
  { id: 'ref-30', name: 'Perpustakaan Pribadi', desc: 'Menyimpan 30 referensi.', icon: 'Library', test: (s) => s.references.length >= 30 },
  { id: 'bimbingan-1', name: 'Berani Bertanya', desc: 'Mencatat bimbingan pertama.', icon: 'MessagesSquare', test: (s) => s.guidance.length >= 1 },
  { id: 'bimbingan-5', name: 'Mahasiswa Rajin', desc: 'Mencatat 5 sesi bimbingan.', icon: 'MessagesSquare', test: (s) => s.guidance.length >= 5 },
  { id: 'bimbingan-10', name: 'Langganan Dosen', desc: 'Mencatat 10 sesi bimbingan.', icon: 'MessagesSquare', test: (s) => s.guidance.length >= 10 },
  { id: 'tugas-10', name: 'Tukang Eksekusi', desc: 'Menyelesaikan 10 tugas di kanban.', icon: 'ListChecks', test: (s) => s.tasks.filter((t) => t.status === 'done').length >= 10 },
  { id: 'kata-1000', name: '1.000 Kata', desc: 'Total 1.000 kata tercatat.', icon: 'PenLine', test: (s) => totalWords(s) >= 1000 },
  { id: 'kata-10000', name: '10.000 Kata', desc: 'Total 10.000 kata tercatat.', icon: 'PenLine', test: (s) => totalWords(s) >= 10000 },
  { id: 'streak-tulis-3', name: 'Tiga Hari Menulis', desc: 'Target kata harian tercapai 3 hari berturut-turut.', icon: 'Flame', test: (s) => bestWritingStreak(s) >= 3 },
  { id: 'streak-tulis-7', name: 'Seminggu Menulis', desc: 'Target kata harian tercapai 7 hari berturut-turut.', icon: 'Flame', test: (s) => bestWritingStreak(s) >= 7 },
  { id: 'fokus-5', name: 'Pemula Fokus', desc: 'Menyelesaikan 5 sesi fokus.', icon: 'Timer', test: (s) => s.focusSessions.length >= 5 },
  { id: 'fokus-25', name: 'Master Fokus', desc: 'Menyelesaikan 25 sesi fokus.', icon: 'Timer', test: (s) => s.focusSessions.length >= 25 },
  { id: 'sidang-1', name: 'Latihan Perdana', desc: 'Menyelesaikan satu sesi simulasi sidang.', icon: 'Mic', test: (s) => s.defenseRuns.length >= 1 },
  { id: 'sidang-5', name: 'Siap Dicecar', desc: 'Menyelesaikan 5 sesi simulasi sidang.', icon: 'Mic', test: (s) => s.defenseRuns.length >= 5 },
  { id: 'mood-7', name: 'Peduli Diri', desc: 'Mencatat suasana hati 7 kali.', icon: 'HeartHandshake', test: (s) => s.moods.length >= 7 },
  { id: 'admin-10', name: 'Administrasi Rapi', desc: 'Menyelesaikan 10 butir checklist administrasi.', icon: 'ClipboardCheck', test: (s) => Object.keys(s.adminChecks).length >= 10 },
  { id: 'streak-app-7', name: 'Seminggu Bersama', desc: 'Membuka aplikasi 7 hari berturut-turut.', icon: 'CalendarCheck', test: (s) => s.streakDays >= 7 },
  { id: 'kartu-50', name: 'Penghafal', desc: 'Mereview 50 flashcard metodologi.', icon: 'Layers', test: (s) => reviewedCards(s) >= 50 },
  { id: 'kuis-1', name: 'Uji Diri', desc: 'Menyelesaikan satu kuis metodologi.', icon: 'Award', test: (s) => s.quizAttempts.length >= 1 }
];

export const badgeById = (id: string) => badges.find((b) => b.id === id);

/** Badge yang baru memenuhi syarat dan belum tercatat. */
export function evaluateBadges(s: AppState): BadgeDef[] {
  return badges.filter((b) => !s.badges[b.id] && b.test(s));
}

export function computeXp(s: AppState): number {
  return (
    Object.keys(s.roadmapChecks).length * 10 +
    s.tasks.filter((t) => t.status === 'done').length * 8 +
    s.guidance.length * 15 +
    s.references.length * 3 +
    Math.floor(totalWords(s) / 100) +
    s.focusSessions.length * 5 +
    s.defenseRuns.length * 10 +
    accCount(s) * 50 +
    Object.keys(s.badges).length * 20
  );
}

export const levels = [
  { min: 0, name: 'Maba Skripsi' },
  { min: 100, name: 'Pemburu Referensi' },
  { min: 250, name: 'Penyusun Proposal' },
  { min: 500, name: 'Pejuang Lapangan' },
  { min: 900, name: 'Penulis Tangguh' },
  { min: 1400, name: 'Siap Sidang' },
  { min: 2000, name: 'Calon Sarjana' }
];

export function levelFor(xp: number) {
  let idx = 0;
  levels.forEach((l, i) => {
    if (xp >= l.min) idx = i;
  });
  const cur = levels[idx];
  const next = levels[idx + 1];
  return {
    index: idx,
    name: cur.name,
    xp,
    nextName: next?.name ?? null,
    progress: next ? (xp - cur.min) / (next.min - cur.min) : 1,
    toNext: next ? next.min - xp : 0
  };
}
