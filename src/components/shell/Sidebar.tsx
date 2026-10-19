import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link, useLocation } from '../../app/router';
import { matchRoute, navGroups, routes } from '../../app/routes';
import { usePlan } from '../../lib/usePlan';
import { ProgressBar } from '../common/ui';
import { cn } from '../common/cn';
import { Brand } from './Brand';

export const NavLinks: React.FC<{ onNavigate?: () => void }> = ({ onNavigate }) => {
  const { path } = useLocation();
  const active = matchRoute(path);
  return (
    <nav aria-label="Navigasi utama" className="space-y-5">
      {navGroups.map((group) => (
        <div key={group}>
          <p className="mb-1.5 px-3 text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">{group}</p>
          <ul className="space-y-0.5">
            {routes
              .filter((r) => r.nav && r.group === group)
              .map((r) => {
                const Icon = r.icon;
                const isActive = active?.path === r.path;
                return (
                  <li key={r.path}>
                    <Link
                      to={r.path}
                      onClick={onNavigate}
                      aria-current={isActive ? 'page' : undefined}
                      className={cn(
                        'flex min-h-10 items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition',
                        isActive
                          ? 'bg-indigo-100 font-semibold text-indigo-900 dark:bg-indigo-950/70 dark:text-indigo-100'
                          : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/70'
                      )}
                    >
                      <Icon aria-hidden="true" className={cn('h-[18px] w-[18px] shrink-0', isActive ? 'text-indigo-700 dark:text-indigo-300' : 'text-slate-500 dark:text-slate-400')} />
                      {r.title}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      ))}
    </nav>
  );
};

export const ProfileCard: React.FC<{ onNavigate?: () => void }> = ({ onNavigate }) => {
  const { profile, major, plan, phaseIndex, progress } = usePlan();
  if (!profile || !plan) {
    return (
      <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-3.5 dark:border-indigo-900 dark:bg-indigo-950/40">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">Belum ada profil</p>
        <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-300">Atur jurusan dan statusmu untuk mendapat roadmap personal.</p>
        <Link to="/mulai" onClick={onNavigate} className="btn-primary mt-3 min-h-10 w-full text-sm">
          Mulai sekarang <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    );
  }
  const phase = plan.phases[phaseIndex];
  return (
    <Link
      to="/roadmap"
      onClick={onNavigate}
      className="block rounded-2xl border border-slate-200 bg-white p-3.5 transition hover:border-indigo-300 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-indigo-800"
    >
      <p className="truncate text-sm font-semibold text-slate-900 dark:text-slate-50">{profile.nama || 'Mahasiswa'}</p>
      <p className="mt-0.5 line-clamp-2 text-xs text-slate-500 dark:text-slate-400">{major?.nama}</p>
      <div className="mt-3 flex items-center justify-between text-xs">
        <span className="font-semibold text-indigo-800 dark:text-indigo-300">
          Tahap {phaseIndex + 1}/{plan.phases.length}
        </span>
        <span className="font-semibold text-slate-600 dark:text-slate-300">{progress}%</span>
      </div>
      <ProgressBar value={progress} label="Progres skripsi" className="mt-1.5" />
      <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">{phase.def.nama}</p>
    </Link>
  );
};

export const Sidebar: React.FC = () => (
  <aside className="no-print fixed inset-y-0 left-0 z-30 hidden w-72 flex-col border-r border-slate-200 bg-slate-50/80 backdrop-blur lg:flex dark:border-slate-800 dark:bg-slate-950/60">
    <div className="px-5 pb-3 pt-5">
      <Brand />
    </div>
    <div className="px-4 pb-3">
      <ProfileCard />
    </div>
    <div className="flex-1 overflow-y-auto px-3 pb-6 pt-2">
      <NavLinks />
    </div>
    <p className="border-t border-slate-200 px-5 py-3 text-[11px] leading-relaxed text-slate-500 dark:border-slate-800 dark:text-slate-400">
      Data tersimpan di perangkatmu, tanpa login. Cadangkan lewat Pengaturan.
    </p>
  </aside>
);
