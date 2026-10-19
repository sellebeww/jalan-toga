import React, { useState } from 'react';
import { getGlossaryTermById } from '../../data/glossary';
import { BookOpen, X } from 'lucide-react';

interface GlossaryTooltipProps {
  termId: string;
  children?: React.ReactNode;
}

export const GlossaryTooltip: React.FC<GlossaryTooltipProps> = ({ termId, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const term = getGlossaryTermById(termId);

  if (!term) {
    return <span>{children || termId}</span>;
  }

  return (
    <span className="relative inline-block">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="underline decoration-dotted decoration-indigo-400 dark:decoration-indigo-500 underline-offset-4 font-medium text-inherit hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-help inline"
      >
        {children || term.term}
      </button>

      {isOpen && (
        <div
          role="tooltip"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 sm:w-80 p-3 rounded-xl bg-stone-900 text-stone-100 text-xs shadow-xl border border-stone-800 animate-in fade-in zoom-in-95 pointer-events-auto"
        >
          <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-stone-800">
            <div className="flex items-center gap-1.5 font-bold font-heading text-white">
              <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
              <span>{term.term}</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-stone-400 hover:text-white"
            >
              <X className="w-3 h-3" />
            </button>
          </div>

          {term.english && (
            <div className="text-[10px] text-stone-400 font-mono italic mb-1">
              EN: {term.english}
            </div>
          )}

          <p className="text-stone-300 leading-relaxed">{term.meaning}</p>

          {term.example && (
            <div className="mt-2 pt-1.5 border-t border-stone-800/80 text-[11px] text-stone-400">
              <span className="text-indigo-300 font-semibold">Contoh: </span>
              {term.example}
            </div>
          )}

          {/* Pointer caret */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-stone-900" />
        </div>
      )}
    </span>
  );
};
