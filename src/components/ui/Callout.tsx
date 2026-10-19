import React from 'react';
import { AlertCircle, AlertTriangle, Lightbulb, Bookmark, Info, CheckCircle2 } from 'lucide-react';

interface CalloutProps {
  type?: 'info' | 'warn' | 'memorize' | 'tip' | 'success';
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Callout: React.FC<CalloutProps> = ({
  type = 'info',
  title,
  children,
  className = ''
}) => {
  const styles = {
    info: {
      border: 'border-sky-200 dark:border-sky-900/60',
      bg: 'bg-sky-50/70 dark:bg-sky-950/25',
      text: 'text-sky-950 dark:text-sky-200',
      titleColor: 'text-sky-900 dark:text-sky-100',
      iconContainer: 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300',
      icon: <Info className="w-4 h-4" />,
      defaultTitle: 'Informasi Ilmiah'
    },
    warn: {
      border: 'border-amber-200 dark:border-amber-900/60',
      bg: 'bg-amber-50/70 dark:bg-amber-950/25',
      text: 'text-amber-950 dark:text-amber-200',
      titleColor: 'text-amber-900 dark:text-amber-100',
      iconContainer: 'bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300',
      icon: <AlertTriangle className="w-4 h-4" />,
      defaultTitle: 'Peringatan & Jebakan Ujian'
    },
    memorize: {
      border: 'border-emerald-200 dark:border-emerald-900/60',
      bg: 'bg-emerald-50/70 dark:bg-emerald-950/25',
      text: 'text-emerald-950 dark:text-emerald-200',
      titleColor: 'text-emerald-900 dark:text-emerald-100',
      iconContainer: 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300',
      icon: <Bookmark className="w-4 h-4" />,
      defaultTitle: 'Poin Hafalan Kunci'
    },
    tip: {
      border: 'border-indigo-200 dark:border-indigo-900/60',
      bg: 'bg-indigo-50/70 dark:bg-indigo-950/25',
      text: 'text-indigo-950 dark:text-indigo-200',
      titleColor: 'text-indigo-900 dark:text-indigo-100',
      iconContainer: 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300',
      icon: <Lightbulb className="w-4 h-4" />,
      defaultTitle: 'Tips Metodologi'
    },
    success: {
      border: 'border-emerald-200 dark:border-emerald-900/60',
      bg: 'bg-emerald-50/70 dark:bg-emerald-950/25',
      text: 'text-emerald-950 dark:text-emerald-200',
      titleColor: 'text-emerald-900 dark:text-emerald-100',
      iconContainer: 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300',
      icon: <CheckCircle2 className="w-4 h-4" />,
      defaultTitle: 'Tervalidasi'
    }
  }[type];

  return (
    <div
      className={`border ${styles.border} ${styles.bg} ${styles.text} p-4 sm:p-5 rounded-2xl my-4 text-sm leading-relaxed ${className}`}
    >
      <div className="flex items-start gap-3.5">
        <div className={`p-2 rounded-xl shrink-0 ${styles.iconContainer}`}>
          {styles.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className={`font-semibold text-sm mb-1 font-heading ${styles.titleColor}`}>
            {title || styles.defaultTitle}
          </h4>
          <div className="text-xs sm:text-sm leading-relaxed space-y-1 opacity-90">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
