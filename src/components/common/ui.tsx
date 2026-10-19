import React, { useEffect, useId, useRef, useState } from 'react';
import { AlertTriangle, Check, ChevronDown, Copy, Info, Lightbulb } from 'lucide-react';
import { cn } from './cn';
import { toast } from '../../lib/toast';

/* ---------- Kerangka halaman ---------- */

export const Page: React.FC<{ children: React.ReactNode; wide?: boolean; className?: string }> = ({
  children,
  wide,
  className
}) => (
  <div className={cn('page-enter mx-auto w-full px-4 py-6 sm:px-6 lg:px-8 lg:py-8', wide ? 'max-w-7xl' : 'max-w-5xl', className)}>
    {children}
  </div>
);

export const PageHeader: React.FC<{
  eyebrow?: string;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  actions?: React.ReactNode;
}> = ({ eyebrow, title, subtitle, icon, actions }) => (
  <header className="mb-6 flex flex-wrap items-start justify-between gap-4 sm:mb-8">
    <div className="flex min-w-0 items-start gap-3.5">
      {icon && (
        <div
          aria-hidden="true"
          className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300"
        >
          {icon}
        </div>
      )}
      <div className="min-w-0">
        {eyebrow && (
          <p className="mb-1 text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">{eyebrow}</p>
        )}
        <h1 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl dark:text-slate-50">{title}</h1>
        {subtitle && <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-[15px] dark:text-slate-300">{subtitle}</p>}
      </div>
    </div>
    {actions && <div className="no-print flex flex-wrap items-center gap-2">{actions}</div>}
  </header>
);

export const Section: React.FC<{
  title?: string;
  hint?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  id?: string;
}> = ({ title, hint, action, children, className, id }) => (
  <section id={id} className={cn('mb-8', className)}>
    {(title || action) && (
      <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
        <div>
          {title && <h2 className="text-lg font-bold text-slate-900 sm:text-xl dark:text-slate-50">{title}</h2>}
          {hint && <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{hint}</p>}
        </div>
        {action}
      </div>
    )}
    {children}
  </section>
);

/* ---------- Penanda & status ---------- */

type Tone = 'neutral' | 'accent' | 'good' | 'warn' | 'bad' | 'info';

const toneClasses: Record<Tone, string> = {
  neutral: 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700',
  accent: 'bg-indigo-50 text-indigo-800 border-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-200 dark:border-indigo-900',
  good: 'bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-200 dark:border-emerald-900',
  warn: 'bg-amber-50 text-amber-900 border-amber-200 dark:bg-amber-950/40 dark:text-amber-200 dark:border-amber-900',
  bad: 'bg-rose-50 text-rose-800 border-rose-200 dark:bg-rose-950/40 dark:text-rose-200 dark:border-rose-900',
  info: 'bg-sky-50 text-sky-900 border-sky-200 dark:bg-sky-950/40 dark:text-sky-200 dark:border-sky-900'
};

export const Tag: React.FC<{ tone?: Tone; children: React.ReactNode; className?: string }> = ({
  tone = 'neutral',
  children,
  className
}) => (
  <span className={cn('inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold', toneClasses[tone], className)}>
    {children}
  </span>
);

export const Notice: React.FC<{
  tone?: 'info' | 'warn' | 'tip' | 'good';
  title?: string;
  children: React.ReactNode;
  className?: string;
}> = ({ tone = 'info', title, children, className }) => {
  const Icon = tone === 'warn' ? AlertTriangle : tone === 'tip' ? Lightbulb : Info;
  const palette = {
    info: toneClasses.info,
    warn: toneClasses.warn,
    tip: toneClasses.accent,
    good: toneClasses.good
  }[tone];
  return (
    <div role={tone === 'warn' ? 'note' : undefined} className={cn('flex gap-3 rounded-2xl border p-3.5 text-sm leading-relaxed', palette, className)}>
      <Icon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
      <div className="min-w-0">
        {title && <p className="mb-0.5 font-semibold">{title}</p>}
        <div className="[&_a]:underline [&_ul]:ml-4 [&_ul]:list-disc">{children}</div>
      </div>
    </div>
  );
};

/** Pengingat standar untuk hal yang bergantung pada aturan kampus. */
export const CampusNote: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <Notice tone="warn" title="Cocokkan dengan aturan kampusmu">
    {children ?? 'Format, jumlah halaman, syarat sidang, dan prosedur bisa berbeda tiap kampus dan fakultas. Pakai ini sebagai acuan umum, lalu cek buku pedoman skripsi fakultasmu.'}
  </Notice>
);

/* ---------- Progres ---------- */

export const ProgressBar: React.FC<{ value: number; label?: string; tone?: 'accent' | 'good' | 'warn'; className?: string }> = ({
  value,
  label,
  tone = 'accent',
  className
}) => {
  const pct = Math.max(0, Math.min(100, Math.round(value)));
  const bar = tone === 'good' ? 'bg-emerald-600' : tone === 'warn' ? 'bg-amber-500' : 'bg-indigo-600 dark:bg-indigo-400';
  return (
    <div
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label ?? 'Progres'}
      className={cn('h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800', className)}
    >
      <div className={cn('h-full rounded-full transition-all duration-500', bar)} style={{ width: `${pct}%` }} />
    </div>
  );
};

export const Ring: React.FC<{ value: number; size?: number; stroke?: number; label?: string; children?: React.ReactNode }> = ({
  value,
  size = 96,
  stroke = 9,
  label = 'Progres',
  children
}) => {
  const pct = Math.max(0, Math.min(100, value));
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }} role="img" aria-label={`${label}: ${Math.round(pct)} persen`}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" strokeWidth={stroke} className="stroke-slate-200 dark:stroke-slate-800" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - pct / 100)}
          className="stroke-indigo-600 transition-all duration-700 dark:stroke-indigo-400"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        {children ?? <span className="font-heading text-xl font-bold text-slate-900 dark:text-slate-50">{Math.round(pct)}%</span>}
      </div>
    </div>
  );
};

/* ---------- Kontrol ---------- */

export function Segmented<T extends string>({
  options,
  value,
  onChange,
  ariaLabel,
  className,
  scrollable
}: {
  options: { value: T; label: string; icon?: React.ReactNode }[];
  value: T;
  onChange: (v: T) => void;
  ariaLabel: string;
  className?: string;
  scrollable?: boolean;
}) {
  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className={cn(
        'inline-flex max-w-full gap-1 rounded-2xl border border-slate-200 bg-slate-100 p-1 dark:border-slate-800 dark:bg-slate-900',
        scrollable && 'no-scrollbar overflow-x-auto',
        className
      )}
    >
      {options.map((o) => {
        const active = o.value === value;
        return (
          <button
            key={o.value}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(o.value)}
            className={cn(
              'flex min-h-10 shrink-0 items-center gap-1.5 rounded-xl px-3.5 text-sm font-semibold transition',
              active
                ? 'bg-white text-indigo-800 shadow-xs dark:bg-slate-800 dark:text-indigo-200'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
            )}
          >
            {o.icon}
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

export const Field: React.FC<{ label: string; hint?: string; children: (id: string) => React.ReactNode; className?: string }> = ({
  label,
  hint,
  children,
  className
}) => {
  const id = useId();
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-slate-800 dark:text-slate-100">
        {label}
      </label>
      {children(id)}
      {hint && <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">{hint}</p>}
    </div>
  );
};

export const CopyButton: React.FC<{ text: string; html?: string; label?: string; className?: string; size?: 'sm' | 'md' }> = ({
  text,
  html,
  label = 'Salin',
  className,
  size = 'md'
}) => {
  const [done, setDone] = useState(false);
  const timer = useRef<number | undefined>(undefined);
  useEffect(() => () => window.clearTimeout(timer.current), []);
  const copy = async () => {
    try {
      if (html && typeof ClipboardItem !== 'undefined' && navigator.clipboard.write) {
        await navigator.clipboard.write([
          new ClipboardItem({
            'text/html': new Blob([html], { type: 'text/html' }),
            'text/plain': new Blob([text], { type: 'text/plain' })
          })
        ]);
      } else {
        await navigator.clipboard.writeText(text);
      }
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
      } catch {
        toast('Gagal menyalin', { body: 'Salin manual dengan menyorot teksnya.', tone: 'warn' });
        document.body.removeChild(ta);
        return;
      }
      document.body.removeChild(ta);
    }
    setDone(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setDone(false), 1800);
  };
  return (
    <button
      type="button"
      onClick={copy}
      className={cn(size === 'sm' ? 'btn-soft min-h-9 px-3 text-xs' : 'btn-soft', className)}
      aria-live="polite"
    >
      {done ? <Check aria-hidden="true" className="h-4 w-4 text-emerald-600" /> : <Copy aria-hidden="true" className="h-4 w-4" />}
      {done ? 'Tersalin' : label}
    </button>
  );
};

export const Disclosure: React.FC<{
  title: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
  badge?: React.ReactNode;
}> = ({ title, children, defaultOpen, className, badge }) => {
  const [open, setOpen] = useState(!!defaultOpen);
  const id = useId();
  return (
    <div className={cn('card overflow-hidden', className)}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
        className="flex min-h-12 w-full items-center justify-between gap-3 px-4 py-3 text-left"
      >
        <span className="min-w-0 flex-1 font-semibold text-slate-900 dark:text-slate-50">{title}</span>
        {badge}
        <ChevronDown aria-hidden="true" className={cn('h-4 w-4 shrink-0 text-slate-500 transition-transform', open && 'rotate-180')} />
      </button>
      {open && (
        <div id={id} className="border-t border-slate-200 px-4 py-4 dark:border-slate-800">
          {children}
        </div>
      )}
    </div>
  );
};

/** Centang besar yang nyaman disentuh dengan label yang bisa diklik. */
export const CheckRow: React.FC<{
  checked: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  extra?: boolean;
}> = ({ checked, onToggle, children, extra }) => (
  <label
    className={cn(
      'flex min-h-11 cursor-pointer items-start gap-3 rounded-xl px-2.5 py-2 transition hover:bg-slate-50 dark:hover:bg-slate-800/60',
      checked && 'opacity-75'
    )}
  >
    <input
      type="checkbox"
      checked={checked}
      onChange={onToggle}
      className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded-md border-slate-300 accent-indigo-600"
    />
    <span className={cn('text-sm leading-relaxed text-slate-800 dark:text-slate-100', checked && 'line-through decoration-slate-400')}>
      {children}
      {extra && (
        <Tag tone="accent" className="ml-2 align-middle">
          Khusus jurusanmu
        </Tag>
      )}
    </span>
  </label>
);

export const EmptyState: React.FC<{
  icon?: React.ReactNode;
  title: string;
  body?: string;
  action?: React.ReactNode;
  className?: string;
}> = ({ icon, title, body, action, className }) => (
  <div className={cn('flex flex-col items-center rounded-2xl border border-dashed border-slate-300 px-6 py-10 text-center dark:border-slate-700', className)}>
    {icon && (
      <div aria-hidden="true" className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
        {icon}
      </div>
    )}
    <p className="font-heading text-lg font-semibold text-slate-900 dark:text-slate-50">{title}</p>
    {body && <p className="mt-1 max-w-sm text-sm text-slate-500 dark:text-slate-400">{body}</p>}
    {action && <div className="mt-4">{action}</div>}
  </div>
);

export const StatCard: React.FC<{ label: string; value: React.ReactNode; hint?: string; icon?: React.ReactNode }> = ({
  label,
  value,
  hint,
  icon
}) => (
  <div className="card p-4">
    <div className="flex items-center justify-between gap-2 text-slate-500 dark:text-slate-400">
      <span className="text-xs font-semibold uppercase tracking-wide">{label}</span>
      <span aria-hidden="true">{icon}</span>
    </div>
    <div className="mt-1.5 font-heading text-2xl font-bold text-slate-900 dark:text-slate-50">{value}</div>
    {hint && <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{hint}</p>}
  </div>
);

/** Menyalin file teks untuk diunduh (template, daftar pustaka, dll). */
export function downloadText(filename: string, text: string, mime = 'text/plain;charset=utf-8') {
  const blob = new Blob([text], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}
