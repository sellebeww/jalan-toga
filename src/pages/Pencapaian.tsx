import React from 'react';
import {
  Award,
  BookCheck,
  CalendarCheck,
  ClipboardCheck,
  FileCheck2,
  Flag,
  Flame,
  GraduationCap,
  HeartHandshake,
  Layers,
  Library,
  Lightbulb,
  ListChecks,
  Lock,
  MessagesSquare,
  Mic,
  PenLine,
  Route,
  Timer,
  Trophy,
  Type
} from 'lucide-react';
import { badges, bestWritingStreak, computeXp, levelFor, levels, totalWords, writingStreak } from '../lib/badges';
import { useAppStore } from '../lib/store';
import { formatDateID } from '../lib/date';
import { Page, PageHeader, ProgressBar, Ring, Section, StatCard } from '../components/common/ui';
import { cn } from '../components/common/cn';

const icons: Record<string, React.ComponentType<{ className?: string; 'aria-hidden'?: boolean | 'true' }>> = {
  Award, BookCheck, CalendarCheck, ClipboardCheck, FileCheck2, Flag, Flame, GraduationCap, HeartHandshake, Layers, Library, Lightbulb, ListChecks, MessagesSquare, Mic, PenLine, Route, Timer, Trophy, Type
};

export default function Pencapaian() {
  const s = useAppStore();
  const xp = computeXp(s);
  const lvl = levelFor(xp);
  const earned = badges.filter((b) => s.badges[b.id]);

  return (
    <Page>
      <PageHeader eyebrow="Diri sendiri" title="Pencapaian" subtitle="Level dan badge yang naik seiring progresmu. Tidak ada yang berlebihan: hanya penanda bahwa kamu terus bergerak." icon={<Trophy aria-hidden="true" className="h-5 w-5" />} />

      <section className="card paper-grain mb-6 flex flex-col items-center gap-6 p-6 sm:flex-row sm:p-8">
        <Ring value={lvl.progress * 100} size={130} stroke={11} label="Menuju level berikutnya">
          <div className="text-center">
            <p className="font-heading text-3xl font-bold">{lvl.index + 1}</p>
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Level</p>
          </div>
        </Ring>
        <div className="w-full flex-1 text-center sm:text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">Levelmu</p>
          <h2 className="font-heading text-3xl font-bold">{lvl.name}</h2>
          <p className="mt-1 text-slate-600 dark:text-slate-300">
            {xp} XP{lvl.nextName ? ` · ${lvl.toNext} XP lagi menuju ${lvl.nextName}` : ' · level tertinggi tercapai'}
          </p>
          <ProgressBar value={lvl.progress * 100} label="Kemajuan level" className="mt-3" />
          <ol className="mt-4 flex flex-wrap justify-center gap-1.5 sm:justify-start" aria-label="Daftar level">
            {levels.map((l, i) => (
              <li key={l.name} className={cn('rounded-full border px-2.5 py-1 text-[11px] font-semibold', i <= lvl.index ? 'border-indigo-300 bg-indigo-100 text-indigo-900 dark:border-indigo-800 dark:bg-indigo-950 dark:text-indigo-100' : 'border-slate-200 text-slate-400 dark:border-slate-800')}>
                {l.name}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Streak harian" value={`${s.streakDays} hari`} icon={<Flame className="h-4 w-4 text-orange-500" />} />
        <StatCard label="Streak menulis" value={`${writingStreak(s)} hari`} hint={`Terbaik ${bestWritingStreak(s)} hari`} />
        <StatCard label="Total kata" value={totalWords(s).toLocaleString('id-ID')} />
        <StatCard label="Badge" value={`${earned.length}/${badges.length}`} />
      </div>

      <Section title="Badge" hint="Badge terbuka otomatis saat syaratnya terpenuhi.">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {badges.map((b) => {
            const at = s.badges[b.id];
            const Icon = icons[b.icon] ?? Award;
            return (
              <li key={b.id} className={cn('card flex items-start gap-3 p-4', !at && 'opacity-70')}>
                <span aria-hidden="true" className={cn('flex h-11 w-11 shrink-0 items-center justify-center rounded-xl', at ? 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300' : 'bg-slate-100 text-slate-400 dark:bg-slate-800')}>
                  {at ? <Icon className="h-5 w-5" /> : <Lock className="h-4 w-4" />}
                </span>
                <div>
                  <p className="font-semibold">{b.name}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{b.desc}</p>
                  <p className="mt-1 text-xs text-slate-500">{at ? `Diraih ${formatDateID(new Date(at).toISOString().slice(0, 10))}` : 'Belum diraih'}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Section>
    </Page>
  );
}
