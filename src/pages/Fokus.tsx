import React, { useEffect, useState } from 'react';
import { Flame, Pause, Play, RotateCcw, SkipForward, Timer } from 'lucide-react';
import { appStore, useAppStore } from '../lib/store';
import { bestWritingStreak, totalWords, writingStreak } from '../lib/badges';
import { addDays, todayKey, weekStartKey } from '../lib/date';
import { DEFAULT_SETTINGS, focusTimer, formatClock, secondsLeft, useFocusTimer } from '../lib/focusTimer';
import { Field, Notice, Page, PageHeader, ProgressBar, Ring, Section, StatCard } from '../components/common/ui';
import { cn } from '../components/common/cn';

const presets = [
  { label: '25 / 5', work: 25, short: 5, long: 15 },
  { label: '50 / 10', work: 50, short: 10, long: 25 },
  { label: '15 / 3', work: 15, short: 3, long: 10 }
];

const phaseLabel = { work: 'Fokus menulis', short: 'Istirahat singkat', long: 'Istirahat panjang' } as const;

function Pomodoro() {
  const t = useFocusTimer();
  const [, force] = useState(0);
  // render ulang tiap 500 ms saat berjalan agar detik tampil mulus
  useEffect(() => {
    if (!t.running) return;
    const id = window.setInterval(() => force((n) => n + 1), 500);
    return () => window.clearInterval(id);
  }, [t.running]);

  const left = secondsLeft(t);
  const total = (t.phase === 'work' ? t.settings.work : t.phase === 'short' ? t.settings.short : t.settings.long) * 60;
  const pct = total ? ((total - left) / total) * 100 : 0;
  const st = useAppStore();
  const today = todayKey();
  const todaySessions = st.focusSessions.filter((s) => s.date === today);
  const todayMinutes = todaySessions.reduce((s, x) => s + x.minutes, 0);

  return (
    <section className="card p-5 sm:p-7" aria-label="Pomodoro">
      <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start sm:gap-8">
        <div className="relative">
          <Ring value={pct} size={200} stroke={14} label="Kemajuan sesi">
            <div className="text-center">
              <div className="font-heading text-5xl font-bold tabular-nums" role="timer" aria-live="off">
                {formatClock(left)}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">{phaseLabel[t.phase]}</div>
            </div>
          </Ring>
        </div>
        <div className="w-full flex-1">
          <div className="flex flex-wrap gap-2">
            {t.running ? (
              <button className="btn-primary px-6" onClick={() => focusTimer.pause()}>
                <Pause aria-hidden="true" className="h-4 w-4" /> Jeda
              </button>
            ) : (
              <button className="btn-primary px-6" onClick={() => focusTimer.start()}>
                <Play aria-hidden="true" className="h-4 w-4" /> {left < total ? 'Lanjut' : 'Mulai'}
              </button>
            )}
            <button className="btn-soft" onClick={() => focusTimer.skip()}>
              <SkipForward aria-hidden="true" className="h-4 w-4" /> Lewati
            </button>
            <button className="btn-soft" onClick={() => focusTimer.reset()}>
              <RotateCcw aria-hidden="true" className="h-4 w-4" /> Reset
            </button>
          </div>

          <div className="mt-4">
            <Field label="Sedang mengerjakan apa? (opsional)">
              {(id) => <input id={id} className="field" value={t.label} onChange={(e) => focusTimer.setLabel(e.target.value)} placeholder="Mis. Tinjauan pustaka subbab 2.1" maxLength={80} />}
            </Field>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2" role="group" aria-label="Preset durasi">
            {presets.map((p) => {
              const active = t.settings.work === p.work && t.settings.short === p.short;
              return (
                <button
                  key={p.label}
                  disabled={t.running}
                  aria-pressed={active}
                  onClick={() => focusTimer.setSettings({ work: p.work, short: p.short, long: p.long })}
                  className={cn('min-h-10 rounded-full border px-3.5 text-sm font-semibold transition disabled:opacity-50', active ? 'border-indigo-600 bg-indigo-600 text-white dark:bg-indigo-500 dark:text-slate-950' : 'border-slate-300 dark:border-slate-700')}
                >
                  {p.label} menit
                </button>
              );
            })}
            <button className="btn-ghost min-h-10 text-sm" disabled={t.running} onClick={() => focusTimer.setSettings(DEFAULT_SETTINGS)}>
              Atur ulang
            </button>
          </div>

          <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
            Hari ini: <strong>{todaySessions.length}</strong> sesi · <strong>{todayMinutes}</strong> menit fokus · siklus ke-{t.completed + (t.phase === 'work' ? 1 : 0)} dari {t.settings.every}
          </p>
        </div>
      </div>
    </section>
  );
}

function WordTarget() {
  const s = useAppStore();
  const today = todayKey();
  const words = s.wordLog[today] ?? 0;
  const target = s.writingTarget;
  const pct = target ? Math.min(100, (words / target) * 100) : 0;
  const [custom, setCustom] = useState('');
  const [targetInput, setTargetInput] = useState(String(target));
  const streak = writingStreak(s);

  return (
    <section className="card p-5" aria-labelledby="kata">
      <h2 id="kata" className="font-heading text-xl font-bold">
        Target kata harian
      </h2>
      <p className="mt-1 font-heading text-4xl font-bold">
        {words.toLocaleString('id-ID')}
        <span className="text-lg font-medium text-slate-500"> / {target.toLocaleString('id-ID')} kata</span>
      </p>
      <ProgressBar value={pct} label="Kata hari ini" tone={pct >= 100 ? 'good' : 'accent'} className="my-3" />
      {pct >= 100 && <p className="mb-3 text-sm font-semibold text-emerald-700 dark:text-emerald-300">Target hari ini tercapai. Kerja bagus!</p>}
      <div className="flex flex-wrap gap-2">
        {[50, 100, 250].map((n) => (
          <button key={n} className="btn-soft min-h-10 text-sm" onClick={() => appStore.addWords(n)}>
            +{n}
          </button>
        ))}
        <button className="btn-ghost min-h-10 text-sm" onClick={() => appStore.addWords(-50)} aria-label="Kurangi 50 kata">
          −50
        </button>
      </div>
      <form
        className="mt-3 flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          const n = Number(custom);
          if (Number.isFinite(n) && n >= 0 && custom !== '') {
            appStore.setWords(n);
            setCustom('');
          }
        }}
      >
        <input className="field" type="number" min={0} inputMode="numeric" value={custom} onChange={(e) => setCustom(e.target.value)} placeholder="Total kata hari ini" aria-label="Setel total kata hari ini" />
        <button className="btn-soft px-4" type="submit">
          Setel
        </button>
      </form>
      <hr className="my-4 border-slate-200 dark:border-slate-800" />
      <form
        className="flex items-end gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          appStore.setWritingTarget(Number(targetInput));
        }}
      >
        <Field label="Target harian (kata)" className="flex-1">
          {(id) => <input id={id} className="field" type="number" min={0} max={20000} inputMode="numeric" value={targetInput} onChange={(e) => setTargetInput(e.target.value)} />}
        </Field>
        <button className="btn-soft" type="submit">
          Simpan
        </button>
      </form>
      <p className="mt-2 text-xs text-slate-500">Mulai dari angka yang hampir pasti tercapai (mis. 200–300 kata). Konsistensi mengalahkan target besar.</p>
      <div className="mt-4 flex items-center gap-2 rounded-xl bg-orange-50 p-3 dark:bg-orange-950/30">
        <Flame aria-hidden="true" className={cn('h-5 w-5', streak > 0 ? 'fill-orange-500 text-orange-500' : 'text-slate-400')} />
        <p className="text-sm font-semibold">
          Streak menulis: {streak} hari <span className="font-normal text-slate-500">(terbaik {bestWritingStreak(s)})</span>
        </p>
      </div>
    </section>
  );
}

function Heatmap() {
  const { wordLog, writingTarget } = useAppStore();
  const today = todayKey();
  const start = addDays(weekStartKey(today), -7 * 11);
  const weeks = Array.from({ length: 12 }, (_, w) => Array.from({ length: 7 }, (_, d) => addDays(start, w * 7 + d)));
  const dayNames = ['Sen', '', 'Rab', '', 'Jum', '', 'Min'];
  const level = (d: string) => {
    if (d > today) return -1;
    const v = wordLog[d] ?? 0;
    if (v <= 0) return 0;
    const r = v / Math.max(writingTarget, 1);
    return r < 0.5 ? 1 : r < 1 ? 2 : 3;
  };
  const cls = ['bg-slate-200 dark:bg-slate-800', 'bg-indigo-200 dark:bg-indigo-900', 'bg-indigo-400 dark:bg-indigo-600', 'bg-indigo-700 dark:bg-indigo-300'];
  const activeDays = Object.values(wordLog).filter((v) => v > 0).length;

  return (
    <section className="card p-5" aria-labelledby="heat">
      <h2 id="heat" className="font-heading text-xl font-bold">
        Aktivitas menulis 12 minggu
      </h2>
      <p className="mb-3 text-sm text-slate-500">{activeDays} hari dengan tulisan tercatat. Semakin gelap, semakin dekat atau melewati targetmu.</p>
      <div className="overflow-x-auto pb-1">
        <div className="flex gap-1.5" role="img" aria-label={`Peta aktivitas menulis, ${activeDays} hari aktif dalam 12 minggu terakhir`}>
          <div className="flex flex-col gap-1.5 pr-1 pt-0.5 text-[10px] text-slate-500">
            {dayNames.map((d, i) => (
              <span key={i} className="h-4 leading-4">
                {d}
              </span>
            ))}
          </div>
          {weeks.map((wk, wi) => (
            <div key={wi} className="flex flex-col gap-1.5">
              {wk.map((d) => {
                const lv = level(d);
                return <span key={d} title={`${d}: ${wordLog[d] ?? 0} kata`} className={cn('block h-4 w-4 rounded-[4px]', lv < 0 ? 'opacity-0' : cls[lv], d === today && 'ring-2 ring-indigo-600 ring-offset-1 dark:ring-indigo-300')} />;
              })}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 flex items-center gap-1.5 text-[11px] text-slate-500" aria-hidden="true">
        Sedikit
        {cls.map((c, i) => (
          <span key={i} className={cn('h-3.5 w-3.5 rounded-[4px]', c)} />
        ))}
        Banyak
      </div>
    </section>
  );
}

export default function Fokus() {
  const s = useAppStore();
  const week = weekStartKey();
  const weekMinutes = s.focusSessions.filter((x) => x.date >= week).reduce((sum, x) => sum + x.minutes, 0);
  return (
    <Page wide>
      <PageHeader eyebrow="Menulis" title="Mode fokus" subtitle="Pomodoro, target kata harian, dan streak menulis. Mulai dari sesi pendek yang pasti selesai." icon={<Timer aria-hidden="true" className="h-5 w-5" />} />
      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <StatCard label="Total kata" value={totalWords(s).toLocaleString('id-ID')} hint="Sejak mulai mencatat" />
        <StatCard label="Fokus minggu ini" value={`${weekMinutes} mnt`} hint={`${s.focusSessions.length} sesi total`} />
        <StatCard label="Streak menulis" value={`${writingStreak(s)} hari`} icon={<Flame className="h-4 w-4 text-orange-500" />} />
      </div>
      <div className="space-y-5">
        <Pomodoro />
        <div className="grid gap-5 lg:grid-cols-2">
          <WordTarget />
          <Heatmap />
        </div>
        <Section>
          <Notice tone="tip" title="Cara pakai yang efektif">
            Tutup tab lain, taruh ponsel di luar jangkauan, tulis target sesi di kolom label, dan istirahat betulan (berdiri, minum, tatap jauh). Timer tetap berjalan walau kamu pindah halaman di aplikasi ini.
          </Notice>
        </Section>
      </div>
    </Page>
  );
}
