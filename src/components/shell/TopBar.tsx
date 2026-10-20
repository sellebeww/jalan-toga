import React from 'react';
import { Flame, Monitor, Moon, Search, Sun } from 'lucide-react';
import { Link } from '../../app/router';
import { appStore, useAppStore } from '../../lib/store';
import { usePlan } from '../../lib/usePlan';
import type { ThemePref } from '../../lib/theme';
import { BrandMark } from './Brand';

const NEXT_THEME: Record<ThemePref, ThemePref> = { system: 'light', light: 'dark', dark: 'system' };
const THEME_LABEL: Record<ThemePref, string> = { system: 'sistem', light: 'terang', dark: 'gelap' };

export const ThemeToggle: React.FC = () => {
  const { themePref } = useAppStore();
  const Icon = themePref === 'system' ? Monitor : themePref === 'light' ? Sun : Moon;
  return (
    <button
      type="button"
      onClick={() => appStore.setTheme(NEXT_THEME[themePref])}
      className="btn-ghost h-10 min-h-10 w-10 px-0"
      aria-label={`Tema: ${THEME_LABEL[themePref]}. Ketuk untuk ganti ke ${THEME_LABEL[NEXT_THEME[themePref]]}`}
      title={`Tema: ${THEME_LABEL[themePref]}`}
    >
      <Icon aria-hidden="true" className="h-[18px] w-[18px]" />
    </button>
  );
};

export const TopBar: React.FC<{ onOpenSearch: () => void }> = ({ onOpenSearch }) => {
  const { streakDays } = useAppStore();
  const { profile, plan, phaseIndex } = usePlan();
  return (
    <header className="no-print sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex h-14 max-w-7xl items-center gap-2 px-3 sm:px-6 lg:px-8">
        <Link to="/" className="mr-1 flex items-center lg:hidden" aria-label="Beranda">
          <BrandMark className="h-8 w-9" />
        </Link>

        {profile && plan ? (
          <Link
            to="/roadmap"
            className="flex min-w-0 items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-900 hover:bg-indigo-100 dark:border-indigo-900 dark:bg-indigo-950/50 dark:text-indigo-100"
          >
            <span className="shrink-0">
              Tahap {phaseIndex + 1}/{plan.phases.length}
            </span>
            <span aria-hidden="true" className="h-3 w-px shrink-0 bg-indigo-300 dark:bg-indigo-800" />
            <span className="truncate">{plan.phases[phaseIndex].def.nama}</span>
          </Link>
        ) : (
          <Link to="/mulai" className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-900 hover:bg-indigo-100 dark:border-indigo-900 dark:bg-indigo-950/50 dark:text-indigo-100">
            Atur profil
          </Link>
        )}

        <div className="ml-auto flex items-center gap-1">
          <button
            type="button"
            onClick={onOpenSearch}
            className="btn-ghost h-10 min-h-10 gap-2 px-3 text-slate-600 dark:text-slate-300"
            aria-label="Cari di seluruh situs (Ctrl+K)"
          >
            <Search aria-hidden="true" className="h-[18px] w-[18px]" />
            <span className="hidden text-sm sm:inline">Cari</span>
            <kbd className="hidden rounded border border-slate-300 bg-slate-100 px-1.5 text-[10px] text-slate-600 md:inline dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">Ctrl K</kbd>
          </button>
          <Link
            to="/pencapaian"
            className="flex h-10 items-center gap-1 rounded-xl px-2.5 text-sm font-bold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
            aria-label={`Streak ${streakDays} hari`}
            title="Streak harian"
          >
            <Flame aria-hidden="true" className="h-[18px] w-[18px] fill-orange-500 text-orange-500" />
            {streakDays}
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
