import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Lock, X } from 'lucide-react';
import { navigate, useLocation } from '../../app/router';
import { routes } from '../../app/routes';
import { statusById } from '../../data/roadmap';
import { appStore, useAppStore } from '../../lib/store';
import { requiredStatus } from '../../lib/stageGate';
import { cn } from '../common/cn';

const STEPS: { path: string; title: string; body: string }[] = [
  { path: '/', title: 'Mulai setiap hari dari sini', body: 'Beranda selalu menunjukkan satu langkah berikutnya. Kerjakan, tandai selesai, dan progresmu naik. Tekan Ctrl/Cmd + K kapan saja untuk mencari halaman atau istilah.' },
  { path: '/roadmap', title: 'Peta perjalananmu sampai wisuda', body: 'Roadmap disusun dari jurusan, semester, dan target lulusmu. Centang checklist tiap tahap; tahap berikutnya otomatis jadi fokus.' },
  { path: '/topik', title: 'Belum punya topik? Mulai di sini', body: 'Generator ide sesuai jurusan dan minatmu, checklist kelayakan, dan rumus rumusan masalah. Simpan ide favorit untuk diuji.' },
  { path: '/riset-topik', title: 'Uji kekuatan topik dengan AI', body: 'AI meriset penelitian serupa di web, menilai lima dimensi topikmu, lalu memberi saran judul yang lebih tajam lengkap dengan sumbernya.' },
  { path: '/bab', title: 'Panduan menulis Bab 1 sampai 5', body: 'Fungsi tiap bab, kerangka subbab, kesalahan umum, dan checklist sebelum bimbingan. Halaman yang belum sesuai tahapmu dikunci agar kamu fokus.' },
  { path: '/referensi', title: 'Sitasi rapi tanpa pusing', body: 'Simpan sumber sekali, lalu salin sitasi APA 7, IEEE, atau Harvard dan daftar pustaka yang sudah terurut.' },
  { path: '/tracker', title: 'Pantau progres dan deadline', body: 'Status tiap bab, kanban tugas, target mingguan, dan deadline yang diingatkan sebelum bimbingan atau sidang.' },
  { path: '/fokus', title: 'Jaga ritme menulis', body: 'Timer Pomodoro, target kata harian, dan streak supaya menulis jadi kebiasaan kecil setiap hari.' },
  { path: '/bimbingan', title: 'Bimbingan dan sidang', body: 'Catat hasil bimbingan dan revisi, pakai template pesan sopan ke dosen, lalu latihan sidang dengan bank pertanyaan penguji.' },
  { path: '/pengaturan', title: 'Datamu tetap milikmu', body: 'Tidak ada akun dan server: semua tersimpan di perangkat ini. Ekspor cadangan berkala, dan putar ulang tutorial ini dari sini.' }
];

/** Tur terpandu: membuka tiap halaman, menyorot menunya, dan bisa ditutup kapan saja. */
export const Tour: React.FC = () => {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const status = useAppStore().profile?.status;
  const { path } = useLocation();
  const nextRef = useRef<HTMLButtonElement>(null);
  const step = STEPS[i];
  const route = routes.find((r) => r.path === step.path)!;
  const Icon = route.icon;
  const last = i === STEPS.length - 1;
  const need = requiredStatus(step.path, status);

  const go = (n: number) => {
    setDir(n > i ? 1 : -1);
    setI(n);
  };
  const done = () => {
    appStore.patch({ tourDone: true });
    navigate('/');
  };

  useEffect(() => {
    navigate(step.path);
  }, [step.path]);

  // Sorot menu halaman ini; AppShell memindah fokus ke konten saat ganti halaman, jadi fokus dikembalikan ke tur setelahnya.
  useEffect(() => {
    const els = document.querySelectorAll(`[data-nav-path="${step.path}"]`);
    els.forEach((el) => el.classList.add('tour-ring'));
    const t = window.setTimeout(() => nextRef.current?.focus({ preventScroll: true }), 0);
    return () => {
      window.clearTimeout(t);
      els.forEach((el) => el.classList.remove('tour-ring'));
    };
  }, [step.path, path]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !document.querySelector('[role="dialog"][aria-modal="true"]')) done();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      role="dialog"
      aria-modal="false"
      aria-labelledby="tour-title"
      aria-describedby="tour-body"
      className="no-print fixed inset-x-3 bottom-[4.75rem] z-[60] mx-auto max-w-md lg:inset-x-auto lg:bottom-6 lg:right-6 lg:w-[26rem]"
    >
      <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-slate-950/95 p-5 text-white shadow-2xl shadow-indigo-950/40 backdrop-blur-xl sm:p-6">
        <div aria-hidden="true" className="ai-orb pointer-events-none absolute -right-20 -top-24 -z-10 h-56 w-56 rounded-full bg-indigo-500/35 blur-3xl" />
        <div aria-hidden="true" className="ai-grain pointer-events-none absolute inset-0 -z-10 opacity-[0.06]" />

        <div className="flex items-center justify-between gap-3">
          {/* Segmen progres: bisa diklik untuk lompat langkah */}
          <ol className="flex flex-1 gap-1" aria-label={`Langkah ${i + 1} dari ${STEPS.length}`}>
            {STEPS.map((s, n) => (
              <li key={s.path} className="flex-1">
                <button
                  type="button"
                  onClick={() => go(n)}
                  aria-label={`Ke langkah ${n + 1}: ${s.title}`}
                  aria-current={n === i ? 'step' : undefined}
                  className="flex h-6 w-full items-center"
                >
                  <span className={cn('h-1 w-full rounded-full transition-colors duration-500', n <= i ? 'bg-indigo-300' : 'bg-white/15')} />
                </button>
              </li>
            ))}
          </ol>
          <button type="button" onClick={done} aria-label="Tutup tutorial" className="-mr-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-slate-300 hover:bg-white/10 hover:text-white">
            <X aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>

        {/* key memaksa remount agar animasi diputar ulang tiap ganti langkah */}
        <div key={i} className={cn('mt-4', dir > 0 ? 'step-next' : 'step-prev')} aria-live="polite">
          <div className="flex items-center gap-3">
            <span className="pop-in flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-indigo-200">
              <Icon aria-hidden="true" className="h-5 w-5" />
            </span>
            <p className="text-sm font-semibold text-indigo-200">{route.title}</p>
          </div>
          <h2 id="tour-title" className="mt-4 font-heading text-xl font-bold leading-snug sm:text-2xl">
            {step.title}
          </h2>
          <p id="tour-body" className="mt-2 text-sm leading-relaxed text-slate-300">
            {step.body}
          </p>
          {need && (
            <p className="mt-3 flex items-start gap-2 rounded-2xl bg-white/[0.06] px-3 py-2.5 text-xs leading-relaxed text-slate-200">
              <Lock aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              Masih terkunci untukmu. Terbuka saat tahapmu sampai “{statusById(need).label.toLowerCase()}”.
            </p>
          )}
        </div>

        <div className="mt-5 flex items-center gap-2">
          {i > 0 ? (
            <button type="button" onClick={() => go(i - 1)} className="btn min-h-11 rounded-2xl px-3 text-slate-200 hover:bg-white/10">
              <ArrowLeft aria-hidden="true" className="h-4 w-4" /> Kembali
            </button>
          ) : (
            <button type="button" onClick={done} className="btn min-h-11 rounded-2xl px-3 text-slate-300 hover:bg-white/10">
              Lewati
            </button>
          )}
          <span className="ml-auto text-xs tabular-nums text-slate-400" aria-hidden="true">
            {i + 1}/{STEPS.length}
          </span>
          <button ref={nextRef} type="button" onClick={() => (last ? done() : go(i + 1))} className="btn min-h-11 rounded-2xl bg-white px-5 text-slate-950 hover:bg-indigo-100">
            {last ? (
              <>
                Mulai pakai <Check aria-hidden="true" className="h-4 w-4" />
              </>
            ) : (
              <>
                Lanjut <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
