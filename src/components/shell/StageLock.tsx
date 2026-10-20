import React from 'react';
import { ArrowRight, Check, Lock } from 'lucide-react';
import { Link } from '../../app/router';
import type { AppRoute } from '../../app/routes';
import { statusOptions, statusById } from '../../data/roadmap';
import { appStore } from '../../lib/store';
import { toast } from '../../lib/toast';
import type { StatusId } from '../../types/skripsi';
import { confirmAction } from '../common/Confirm';
import { cn } from '../common/cn';

/** Pengganti halaman yang belum relevan untuk tahap penulis saat ini. */
export const StageLock: React.FC<{ route: AppRoute; current: StatusId; need: StatusId }> = ({ route, current, need }) => {
  const curIdx = statusOptions.findIndex((s) => s.id === current);
  const needIdx = statusOptions.findIndex((s) => s.id === need);
  const Icon = route.icon;

  const unlock = async () => {
    const ok = await confirmAction({
      title: `Perbarui tahapmu ke "${statusById(need).label}"?`,
      body: 'Roadmap dan saran di Beranda ikut menyesuaikan. Kamu bisa mengubahnya lagi di Atur profil.',
      confirmLabel: 'Ya, perbarui'
    });
    if (!ok) return;
    appStore.updateProfile({ status: need });
    toast(`${route.title} sekarang terbuka`);
  };

  return (
    <div className="page-enter mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:py-16">
      <div className="relative isolate overflow-hidden rounded-3xl bg-slate-950 px-6 py-10 text-white sm:px-10">
        <div aria-hidden="true" className="ai-orb pointer-events-none absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-indigo-600/40 blur-3xl" />
        <div className="flex items-center gap-3 text-slate-300">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
            <Icon aria-hidden="true" className="h-5 w-5" />
          </span>
          <span className="flex items-center gap-1.5 text-sm font-semibold">
            <Lock aria-hidden="true" className="h-4 w-4" /> Belum terbuka
          </span>
        </div>
        <h1 className="mt-6 max-w-2xl font-heading text-3xl font-bold leading-tight sm:text-4xl">
          {route.title} terbuka saat kamu sudah di tahap “{statusById(need).label.toLowerCase()}”.
        </h1>
        <p className="mt-3 max-w-xl leading-relaxed text-slate-300">
          Fokus dulu ke tahapmu sekarang supaya tidak kewalahan. Kalau ternyata kamu sudah sampai di sana, perbarui tahapmu.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/roadmap" className="btn min-h-12 rounded-2xl bg-white px-5 text-slate-950 hover:bg-indigo-100">
            Lihat tugas tahapku <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
          <button type="button" onClick={unlock} className="btn min-h-12 rounded-2xl border border-white/25 px-5 text-white hover:bg-white/10">
            Aku sudah di tahap ini
          </button>
        </div>
      </div>

      <ol className="mt-8 space-y-2" aria-label="Tahapan skripsi">
        {statusOptions.map((s, i) => {
          const done = i < curIdx;
          const here = i === curIdx;
          const target = i === needIdx;
          return (
            <li
              key={s.id}
              aria-current={here ? 'step' : undefined}
              className={cn(
                'flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm',
                here
                  ? 'border-indigo-300 bg-indigo-50 font-semibold text-indigo-950 dark:border-indigo-800 dark:bg-indigo-950/50 dark:text-indigo-100'
                  : target
                    ? 'border-dashed border-slate-400 text-slate-800 dark:border-slate-600 dark:text-slate-100'
                    : 'border-transparent text-slate-600 dark:text-slate-400'
              )}
            >
              <span
                className={cn(
                  'flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold',
                  done ? 'bg-emerald-600 text-white' : here ? 'bg-indigo-600 text-white dark:bg-indigo-400 dark:text-slate-950' : 'bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                )}
              >
                {done ? <Check aria-hidden="true" className="h-3.5 w-3.5" /> : i + 1}
              </span>
              <span className="min-w-0 flex-1">{s.label}</span>
              {here && <span className="text-xs">Kamu di sini</span>}
              {target && (
                <span className="flex items-center gap-1 text-xs">
                  <Lock aria-hidden="true" className="h-3 w-3" /> Membuka halaman ini
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
};
