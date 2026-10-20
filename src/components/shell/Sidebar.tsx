import React from 'react';
import { ArrowRight, Cloud, CloudOff, Lock, LogIn, LogOut } from 'lucide-react';
import { useAppStore } from '../../lib/store';
import { requiredStatus } from '../../lib/stageGate';
import { Link, useLocation } from '../../app/router';
import { matchRoute, navGroups, routes } from '../../app/routes';
import { usePlan } from '../../lib/usePlan';
import { ProgressBar } from '../common/ui';
import { cn } from '../common/cn';
import { Brand } from './Brand';
import { cloudEnabled, requestLogin, signOut, useAuth } from '../../lib/auth';
import { confirmAction } from '../common/Confirm';
import { toast } from '../../lib/toast';

export const NavLinks: React.FC<{ onNavigate?: () => void }> = ({ onNavigate }) => {
  const { path } = useLocation();
  const active = matchRoute(path);
  const status = useAppStore().profile?.status;
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
                const locked = !!requiredStatus(r.path, status);
                return (
                  <li key={r.path}>
                    <Link
                      to={r.path}
                      onClick={onNavigate}
                      data-nav-path={r.path}
                      aria-current={isActive ? 'page' : undefined}
                      className={cn(
                        'flex min-h-10 items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition',
                        isActive
                          ? 'bg-indigo-100 font-semibold text-indigo-900 dark:bg-indigo-950/70 dark:text-indigo-100'
                          : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/70'
                      )}
                    >
                      <Icon aria-hidden="true" className={cn('h-[18px] w-[18px] shrink-0', isActive ? 'text-indigo-700 dark:text-indigo-300' : 'text-slate-500 dark:text-slate-400')} />
                      <span className={cn('flex-1', locked && 'opacity-70')}>{r.title}</span>
                      {locked && (
                        <>
                          <Lock aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-slate-400 dark:text-slate-500" />
                          <span className="sr-only">(terkunci untuk tahapmu)</span>
                        </>
                      )}
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

/** Status akun + tombol masuk/keluar. Dipakai di sidebar, menu HP, dan Pengaturan. */
export const AccountCard: React.FC<{ onNavigate?: () => void }> = ({ onNavigate }) => {
  const { status, user } = useAuth();
  if (!cloudEnabled) {
    return <p className="px-2 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">Data tersimpan di perangkatmu. Cadangkan lewat Pengaturan.</p>;
  }
  if (status !== 'signedIn' || !user) {
    return (
      <div className="flex items-center gap-3 rounded-2xl px-2 py-1.5">
        <CloudOff aria-hidden="true" className="h-5 w-5 shrink-0 text-slate-400" />
        <p className="min-w-0 flex-1 text-xs leading-snug text-slate-600 dark:text-slate-300">Tanpa akun: data hanya di perangkat ini.</p>
        <button
          type="button"
          className="btn-soft min-h-9 shrink-0 px-3 text-xs"
          onClick={() => {
            onNavigate?.();
            requestLogin();
          }}
        >
          <LogIn aria-hidden="true" className="h-4 w-4" /> Masuk
        </button>
      </div>
    );
  }
  const name = (user.user_metadata?.full_name as string | undefined) || user.email || 'Akun';
  const avatar = user.user_metadata?.avatar_url as string | undefined;
  const onLogout = async () => {
    const ok = await confirmAction({
      title: 'Keluar dari akun?',
      body: 'Data skripsimu tetap aman di akun dan akan muncul lagi saat kamu masuk. Data di perangkat ini dibersihkan.',
      confirmLabel: 'Keluar'
    });
    if (!ok) return;
    onNavigate?.();
    try {
      await signOut();
      toast('Kamu sudah keluar', { body: 'Sampai jumpa lagi!' });
    } catch {
      toast('Gagal keluar', { body: 'Periksa koneksi lalu coba lagi.', tone: 'warn' });
    }
  };
  return (
    <div className="flex items-center gap-3 rounded-2xl px-2 py-1.5">
      {avatar ? (
        <img src={avatar} alt="" referrerPolicy="no-referrer" className="h-9 w-9 shrink-0 rounded-full" />
      ) : (
        <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold uppercase text-white dark:bg-indigo-500 dark:text-slate-950">
          {name.charAt(0)}
        </span>
      )}
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-slate-900 dark:text-slate-50">{name}</p>
        <p className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
          <Cloud aria-hidden="true" className="h-3 w-3" /> Tersinkron ke akun
        </p>
      </div>
      <button type="button" onClick={() => void onLogout()} className="btn-ghost min-h-10 shrink-0 px-2.5" aria-label="Keluar dari akun" title="Keluar">
        <LogOut aria-hidden="true" className="h-[18px] w-[18px]" />
      </button>
    </div>
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
    <div className="border-t border-slate-200 p-3 dark:border-slate-800">
      <AccountCard />
    </div>
  </aside>
);
