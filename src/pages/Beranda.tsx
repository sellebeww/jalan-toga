import { useState } from 'react';
import {
  ArrowRight,
  CalendarClock,
  Check,
  Download,
  Flame,
  PenLine,
  Timer
} from 'lucide-react';
import { Link } from '../app/router';
import { usePlan } from '../lib/usePlan';
import { appStore, useAppStore } from '../lib/store';
import { writingStreak } from '../lib/badges';
import { formatDateID, relativeDaysLabel, todayKey, diffDays } from '../lib/date';
import { motivationNotes } from '../data/mental';
import { promptInstall, useInstallState } from '../lib/pwa';
import { Page, Ring, ProgressBar, Tag } from '../components/common/ui';
import { cn } from '../components/common/cn';
import { phaseLabel } from '../lib/roadmap';

const greeting = () => {
  const h = new Date().getHours();
  if (h < 11) return 'Selamat pagi';
  if (h < 15) return 'Selamat siang';
  if (h < 18) return 'Selamat sore';
  return 'Selamat malam';
};

const dailyNote = () => {
  const d = new Date();
  const idx = (d.getFullYear() * 366 + d.getMonth() * 31 + d.getDate()) % motivationNotes.length;
  return motivationNotes[idx];
};

function InstallBanner() {
  const state = useInstallState();
  const [hidden, setHidden] = useState(() => {
    try {
      return localStorage.getItem('pendamping_install_hidden') === '1';
    } catch {
      return false;
    }
  });
  if (state !== 'ready' || hidden) return null;
  return (
    <div className="card mb-5 flex flex-wrap items-center justify-between gap-3 border-indigo-200 bg-indigo-50 p-4 dark:border-indigo-900 dark:bg-indigo-950/30">
      <div className="flex items-center gap-3">
        <Download aria-hidden="true" className="h-5 w-5 text-indigo-700 dark:text-indigo-300" />
        <p className="text-sm font-medium">Pasang di layar utama agar bisa dibuka cepat dan offline.</p>
      </div>
      <div className="flex gap-2">
        <button className="btn-primary min-h-10" onClick={() => promptInstall()}>
          Pasang
        </button>
        <button
          className="btn-ghost min-h-10"
          onClick={() => {
            setHidden(true);
            try {
              localStorage.setItem('pendamping_install_hidden', '1');
            } catch {
              /* abaikan */
            }
          }}
        >
          Nanti
        </button>
      </div>
    </div>
  );
}

export default function Beranda() {
  const state = useAppStore();
  const { profile, major, plan, phaseIndex, progress, next } = usePlan();
  const [words, setWords] = useState('');

  // Tanpa profil, AppShell menampilkan onboarding sehingga halaman ini tidak dirender.
  if (!profile || !plan || !major) return null;

  const today = todayKey();
  const phase = plan.phases[phaseIndex];
  const wordsToday = state.wordLog[today] ?? 0;
  const target = state.writingTarget || 300;
  const wPct = Math.min(100, (wordsToday / target) * 100);
  const streak = writingStreak(state);
  const upcoming = state.deadlines.filter((d) => !d.done).sort((a, b) => a.date.localeCompare(b.date)).slice(0, 3);
  const openTasks = state.tasks.filter((t) => t.status !== 'done').length;
  const name = profile.nama || 'kamu';

  const addWords = () => {
    const n = Number(words);
    if (!Number.isFinite(n) || n <= 0) return;
    appStore.addWords(n);
    setWords('');
  };

  return (
    <Page wide>
      <InstallBanner />
      <header className="mb-8">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{formatDateID(today)}</p>
        <h1 className="text-3xl font-bold sm:text-4xl">
          {greeting()}, {name}.
        </h1>
        <p className="mt-1 text-slate-600 dark:text-slate-300">{major.nama}</p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Langkah berikutnya */}
        <section aria-labelledby="langkah" className="overflow-hidden rounded-2xl bg-indigo-50 p-5 sm:p-7 lg:col-span-2 dark:bg-indigo-950/40">
          <h2 id="langkah" className="font-sans text-sm font-semibold tracking-normal text-slate-700 dark:text-slate-200">
            Langkah berikutnya · tahap {phaseIndex + 1} dari {plan.phases.length}
          </h2>
          {next ? (
            <>
              <p className="mt-2 font-heading text-2xl font-bold leading-snug text-slate-900 sm:text-[28px] dark:text-slate-50">{next.text}</p>
              {next.phase.index !== phaseIndex && (
                <p className="mt-2 text-sm text-slate-500">Dari tahap: {phaseLabel(next.phase.def.id)}</p>
              )}
              <div className="mt-5 flex flex-wrap gap-2.5">
                <button className="btn-primary" onClick={() => appStore.toggleRoadmapCheck(next.itemId)}>
                  <Check aria-hidden="true" className="h-4 w-4" /> Tandai selesai
                </button>
                <Link to="/roadmap" className="btn-soft">
                  Lihat seluruh roadmap
                </Link>
              </div>
            </>
          ) : (
            <p className="mt-2 font-heading text-2xl font-bold">Seluruh checklist roadmap sudah selesai. Selamat!</p>
          )}
          {phase.def.bantuan.length > 0 && (
            <div className="mt-7">
              <p className="mb-2 text-sm text-slate-700 dark:text-slate-200">Alat yang membantu di tahap ini</p>
              <div className="flex flex-wrap gap-2">
                {phase.def.bantuan.map((b) => (
                  <Link key={b.path + b.label} to={b.path} className="chip transition hover:border-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/40">
                    {b.label} <ArrowRight aria-hidden="true" className="h-3 w-3" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Progres */}
        <section aria-label="Progres keseluruhan" className="card flex items-center gap-5 p-5 lg:flex-col lg:justify-center lg:p-6 lg:text-center">
          <Ring value={progress} size={96} stroke={9} label="Progres skripsi" />
          <div>
            <p className="font-heading text-lg font-bold lg:mt-1">Progres keseluruhan</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {plan.kelayakan === 'tanpa-target' ? 'Belum ada target lulus' : `Target lulus ${profile.targetLulus ? 'terpasang' : ''}`}
            </p>
            <Link to="/tracker" className="btn-soft mt-3 min-h-10 text-sm">
              Buka tracker
            </Link>
          </div>
        </section>

        {/* Menulis hari ini */}
        <section aria-labelledby="tulis" className="card p-5">
          <div className="mb-3 flex items-center justify-between">
            <h2 id="tulis" className="flex items-center gap-2 font-bold">
              <PenLine aria-hidden="true" className="h-4 w-4 text-indigo-600 dark:text-indigo-400" /> Menulis hari ini
            </h2>
            <span className="flex items-center gap-1 text-sm font-bold">
              <Flame aria-hidden="true" className={cn('h-4 w-4', streak > 0 ? 'fill-orange-500 text-orange-500' : 'text-slate-400')} />
              {streak} hari
            </span>
          </div>
          <p className="font-heading text-3xl font-bold">
            {wordsToday.toLocaleString('id-ID')} <span className="text-base font-medium text-slate-500">/ {target.toLocaleString('id-ID')} kata</span>
          </p>
          <ProgressBar value={wPct} label="Target kata harian" tone={wPct >= 100 ? 'good' : 'accent'} className="my-3" />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addWords();
            }}
            className="flex gap-2"
          >
            <input
              className="field"
              type="number"
              inputMode="numeric"
              min={1}
              value={words}
              onChange={(e) => setWords(e.target.value)}
              placeholder="Tambah kata"
              aria-label="Jumlah kata yang baru ditulis"
            />
            <button className="btn-primary px-4" type="submit">
              Catat
            </button>
          </form>
          <Link to="/fokus" className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-indigo-700 hover:underline dark:text-indigo-300">
            <Timer aria-hidden="true" className="h-4 w-4" /> Mulai sesi fokus
          </Link>
        </section>

        {/* Deadline */}
        <section aria-labelledby="dl" className="card p-5 lg:col-span-2">
          <div className="mb-3 flex items-center justify-between">
            <h2 id="dl" className="flex items-center gap-2 font-bold">
              <CalendarClock aria-hidden="true" className="h-4 w-4 text-indigo-600 dark:text-indigo-400" /> Deadline terdekat
            </h2>
            <Link to="/tracker" className="text-sm font-semibold text-indigo-700 hover:underline dark:text-indigo-300">
              Kelola
            </Link>
          </div>
          {upcoming.length === 0 ? (
            <p className="text-sm text-slate-500 dark:text-slate-400">Belum ada deadline. Tambahkan tanggal bimbingan, sempro, atau sidang di Tracker supaya diingatkan.</p>
          ) : (
            <ul className="space-y-2.5">
              {upcoming.map((d) => {
                const left = diffDays(today, d.date);
                return (
                  <li key={d.id} className="flex items-start justify-between gap-3">
                    <span className="text-sm font-medium">{d.title}</span>
                    <Tag tone={left < 0 ? 'bad' : left <= 3 ? 'warn' : 'neutral'}>{relativeDaysLabel(d.date)}</Tag>
                  </li>
                );
              })}
            </ul>
          )}
          <p className="mt-3 text-xs text-slate-500">{openTasks} tugas belum selesai di kanban.</p>
        </section>

      </div>

      <section className="mt-8 rounded-2xl border border-dashed border-slate-300 p-5 dark:border-slate-700" aria-label="Catatan hari ini">
        <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">Catatan hari ini</p>
        <p className="mt-1 font-heading text-lg leading-snug">{dailyNote()}</p>
      </section>

    </Page>
  );
}
