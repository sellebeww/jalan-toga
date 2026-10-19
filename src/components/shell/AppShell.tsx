import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { useLocation, useDocumentMeta, navigate } from '../../app/router';
import { matchRoute } from '../../app/routes';
import { ConfirmHost } from '../common/Confirm';
import { checkAndNotify } from '../../lib/reminders';
import { ErrorBoundary } from './ErrorBoundary';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { BottomNav } from './BottomNav';
import { ToastHost } from './ToastHost';

const SearchModal = lazy(() => import('../modals/SearchModal'));

const PageSkeleton: React.FC = () => (
  <div className="mx-auto max-w-5xl animate-pulse space-y-4 px-4 py-8 sm:px-6" aria-busy="true" aria-label="Memuat halaman">
    <div className="h-8 w-2/3 rounded-xl bg-slate-200 dark:bg-slate-800" />
    <div className="h-4 w-1/2 rounded-lg bg-slate-200 dark:bg-slate-800" />
    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      <div className="h-40 rounded-2xl bg-slate-200 dark:bg-slate-800" />
      <div className="h-40 rounded-2xl bg-slate-200 dark:bg-slate-800" />
    </div>
  </div>
);

const NotFound: React.FC = () => (
  <div className="mx-auto flex max-w-md flex-col items-center px-6 py-20 text-center">
    <p className="font-heading text-5xl font-bold text-indigo-600 dark:text-indigo-400">404</p>
    <h1 className="mt-3 text-2xl font-bold text-slate-900 dark:text-slate-50">Halaman tidak ditemukan</h1>
    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Alamatnya mungkin salah ketik atau halamannya sudah pindah.</p>
    <button className="btn-primary mt-6" onClick={() => navigate('/')}>
      Kembali ke beranda
    </button>
  </div>
);

export const AppShell: React.FC = () => {
  const { path } = useLocation();
  const route = matchRoute(path);
  const [searchOpen, setSearchOpen] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  useDocumentMeta(route?.title ?? 'Halaman tidak ditemukan', route?.desc);

  // Ctrl/Cmd + K membuka pencarian
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Pindahkan fokus ke konten saat berpindah halaman (pembaca layar & keyboard)
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    mainRef.current?.focus({ preventScroll: true });
  }, [path]);

  // Pengingat deadline selama aplikasi terbuka
  useEffect(() => {
    checkAndNotify();
    const id = window.setInterval(checkAndNotify, 30 * 60 * 1000);
    return () => window.clearInterval(id);
  }, []);

  const Page = route?.component;

  return (
    <div className="min-h-dvh lg:pl-72">
      <a
        href="#main"
        onClick={(e) => {
          e.preventDefault();
          mainRef.current?.focus();
        }}
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[80] focus:rounded-xl focus:bg-indigo-700 focus:px-4 focus:py-2 focus:text-white"
      >
        Lewati ke konten
      </a>
      <Sidebar />
      <TopBar onOpenSearch={() => setSearchOpen(true)} />
      <main id="main" ref={mainRef} tabIndex={-1} className="pb-24 outline-none lg:pb-10">
        <ErrorBoundary resetKey={path}>
          <Suspense fallback={<PageSkeleton />}>{Page ? <Page /> : <NotFound />}</Suspense>
        </ErrorBoundary>
      </main>
      <BottomNav />
      <ToastHost />
      <ConfirmHost />
      {searchOpen && (
        <Suspense fallback={null}>
          <SearchModal onClose={() => setSearchOpen(false)} />
        </Suspense>
      )}
    </div>
  );
};
