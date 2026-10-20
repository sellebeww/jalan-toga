import React, { useState } from 'react';
import { Lock, Menu } from 'lucide-react';
import { useAppStore } from '../../lib/store';
import { requiredStatus } from '../../lib/stageGate';
import { Link, useLocation } from '../../app/router';
import { matchRoute, routes } from '../../app/routes';
import { Modal } from '../common/Modal';
import { cn } from '../common/cn';
import { AccountCard, NavLinks, ProfileCard } from './Sidebar';

const PRIMARY = ['/', '/roadmap', '/tracker', '/bab'];

export const BottomNav: React.FC = () => {
  const { path } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const active = matchRoute(path);
  const primary = PRIMARY.map((p) => routes.find((r) => r.path === p)!);
  const inMore = !!active && !PRIMARY.includes(active.path);
  const status = useAppStore().profile?.status;

  return (
    <>
      <nav
        aria-label="Navigasi bawah"
        className="no-print safe-bottom fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur-md lg:hidden dark:border-slate-800 dark:bg-slate-950/95"
      >
        <ul className="mx-auto grid max-w-lg grid-cols-5">
          {primary.map((r) => {
            const Icon = r.icon;
            const isActive = active?.path === r.path;
            const locked = !!requiredStatus(r.path, status);
            return (
              <li key={r.path}>
                <Link
                  to={r.path}
                  data-nav-path={r.path}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'flex min-h-14 flex-col items-center justify-center gap-0.5 text-[11px] font-semibold transition',
                    isActive ? 'text-indigo-700 dark:text-indigo-300' : 'text-slate-500 dark:text-slate-400'
                  )}
                >
                  <span className={cn('relative flex h-7 w-12 items-center justify-center rounded-full transition', isActive && 'bg-indigo-100 dark:bg-indigo-950')}>
                    <Icon aria-hidden="true" className="h-5 w-5" />
                    {locked && <Lock aria-hidden="true" className="absolute right-1.5 top-0 h-3 w-3" />}
                  </span>
                  {r.title.split(' ')[0]}
                  {locked && <span className="sr-only">(terkunci untuk tahapmu)</span>}
                </Link>
              </li>
            );
          })}
          <li>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-haspopup="dialog"
              className={cn(
                'flex min-h-14 w-full flex-col items-center justify-center gap-0.5 text-[11px] font-semibold transition',
                inMore ? 'text-indigo-700 dark:text-indigo-300' : 'text-slate-500 dark:text-slate-400'
              )}
            >
              <span className={cn('flex h-7 w-12 items-center justify-center rounded-full transition', inMore && 'bg-indigo-100 dark:bg-indigo-950')}>
                <Menu aria-hidden="true" className="h-5 w-5" />
              </span>
              Menu
            </button>
          </li>
        </ul>
      </nav>

      <Modal open={menuOpen} onClose={() => setMenuOpen(false)} title="Semua fitur" size="md">
        <div className="mb-4">
          <ProfileCard onNavigate={() => setMenuOpen(false)} />
        </div>
        <NavLinks onNavigate={() => setMenuOpen(false)} />
        <div className="mt-5 border-t border-slate-200 pt-3 dark:border-slate-800">
          <AccountCard onNavigate={() => setMenuOpen(false)} />
        </div>
      </Modal>
    </>
  );
};
