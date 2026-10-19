import React, { useEffect, useState } from 'react';
import { Award, CheckCircle2, Info, TriangleAlert, X } from 'lucide-react';
import { subscribeToasts, type ToastMessage } from '../../lib/toast';

const icons = {
  info: Info,
  success: CheckCircle2,
  badge: Award,
  warn: TriangleAlert
} as const;

const tones = {
  info: 'border-sky-200 bg-white dark:border-sky-900 dark:bg-slate-900',
  success: 'border-emerald-200 bg-white dark:border-emerald-900 dark:bg-slate-900',
  badge: 'border-indigo-300 bg-indigo-50 dark:border-indigo-800 dark:bg-slate-900',
  warn: 'border-amber-300 bg-amber-50 dark:border-amber-800 dark:bg-slate-900'
} as const;

export const ToastHost: React.FC = () => {
  const [items, setItems] = useState<ToastMessage[]>([]);

  useEffect(
    () =>
      subscribeToasts((t) => {
        setItems((cur) => [...cur.slice(-2), t]);
        window.setTimeout(() => setItems((cur) => cur.filter((x) => x.id !== t.id)), t.tone === 'warn' ? 9000 : 5000);
      }),
    []
  );

  return (
    <div
      aria-live="polite"
      className="no-print pointer-events-none fixed inset-x-0 bottom-20 z-[70] flex flex-col items-center gap-2 px-4 lg:bottom-6 lg:items-end lg:px-6"
    >
      {items.map((t) => {
        const Icon = icons[t.tone];
        return (
          <div
            key={t.id}
            role="status"
            className={`toast-enter pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-2xl border p-3.5 shadow-lg ${tones[t.tone]}`}
          >
            <Icon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-indigo-700 dark:text-indigo-300" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">{t.title}</p>
              {t.body && <p className="mt-0.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">{t.body}</p>}
            </div>
            <button
              onClick={() => setItems((cur) => cur.filter((x) => x.id !== t.id))}
              aria-label="Tutup notifikasi"
              className="-mr-1 -mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <X aria-hidden="true" className="h-4 w-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
