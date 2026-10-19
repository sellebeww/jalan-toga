import React, { useState, useMemo } from 'react';
import { allGlossaryTerms } from '../../data/glossary';
import { GlossaryTerm } from '../../types';
import { Search, X, BookMarked, BookOpen } from 'lucide-react';
import { allModules } from '../../data/modules';

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTermId?: string;
}

export const GlossaryModal: React.FC<GlossaryModalProps> = ({ isOpen, onClose, initialTermId }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModule, setSelectedModule] = useState<string>('all');
  const [selectedLetter, setSelectedLetter] = useState<string>('all');
  const [activeTerm, setActiveTerm] = useState<GlossaryTerm | null>(null);

  // Set initial term if provided
  React.useEffect(() => {
    if (initialTermId) {
      const found = allGlossaryTerms.find((t) => t.id === initialTermId);
      if (found) setActiveTerm(found);
    }
  }, [initialTermId]);

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const filteredTerms = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return allGlossaryTerms.filter((item) => {
      // Module filter
      if (selectedModule !== 'all' && item.moduleSlug !== selectedModule) {
        return false;
      }
      // Letter filter
      if (selectedLetter !== 'all' && !item.term.toUpperCase().startsWith(selectedLetter)) {
        return false;
      }
      // Text search
      if (!q) return true;
      return (
        item.term.toLowerCase().includes(q) ||
        (item.english && item.english.toLowerCase().includes(q)) ||
        item.meaning.toLowerCase().includes(q)
      );
    });
  }, [searchQuery, selectedModule, selectedLetter]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-xs">
      <div className="relative w-full max-w-5xl h-[88vh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-850 dark:bg-slate-900/90">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400">
              <BookMarked className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-100 flex items-center gap-2">
                Glosarium & Kamus Riset TI
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 font-mono font-medium">
                  {allGlossaryTerms.length} Istilah
                </span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Definisi baku, padanan istilah Inggris, dan contoh kontekstual dari Modul 1-7
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter bar */}
        <div className="px-6 py-3 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari istilah, padanan kata, atau kata dalam definisi..."
                className="w-full pl-9 pr-8 py-2 text-sm bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Module Filter Pills */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
              <button
                onClick={() => setSelectedModule('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition cursor-pointer ${
                  selectedModule === 'all'
                    ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                Semua Modul
              </button>
              {allModules.map((m) => (
                <button
                  key={m.slug}
                  onClick={() => setSelectedModule(m.slug)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition cursor-pointer ${
                    selectedModule === m.slug
                      ? 'bg-amber-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  M{m.number}
                </button>
              ))}
            </div>
          </div>

          {/* Alphabet Bar */}
          <div className="flex items-center gap-1 overflow-x-auto text-[11px] font-mono py-1">
            <button
              onClick={() => setSelectedLetter('all')}
              className={`px-2 py-0.5 rounded transition cursor-pointer ${
                selectedLetter === 'all'
                  ? 'bg-amber-500 text-white font-bold'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              Semua
            </button>
            {alphabet.map((letter) => (
              <button
                key={letter}
                onClick={() => setSelectedLetter(letter)}
                className={`px-1.5 py-0.5 rounded transition cursor-pointer ${
                  selectedLetter === letter
                    ? 'bg-amber-500 text-white font-bold'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>

        {/* Content Body: Split View */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Term List Sidebar */}
          <div className="w-full md:w-80 lg:w-96 border-r border-slate-200 dark:border-slate-800 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800/60 p-2">
            {filteredTerms.length === 0 ? (
              <div className="p-8 text-center text-slate-400 dark:text-slate-500 text-xs">
                Tidak ada istilah yang cocok dengan filter.
              </div>
            ) : (
              filteredTerms.map((item) => {
                const isSelected = activeTerm?.id === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveTerm(item)}
                    className={`p-3 rounded-xl cursor-pointer transition ${
                      isSelected
                        ? 'bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-800/60'
                        : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <span className="font-heading font-semibold text-sm text-slate-900 dark:text-slate-100">
                        {item.term}
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                        {item.moduleSlug.replace('modul-', 'M')}
                      </span>
                    </div>
                    {item.english && (
                      <p className="text-xs text-slate-400 dark:text-slate-500 italic mb-1 font-serif">
                        {item.english}
                      </p>
                    )}
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                      {item.meaning}
                    </p>
                  </div>
                );
              })
            )}
          </div>

          {/* Term Detail View */}
          <div className="flex-1 overflow-y-auto p-6 bg-slate-50/40 dark:bg-slate-950/40">
            {activeTerm ? (
              <div className="max-w-2xl mx-auto space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300">
                      {activeTerm.moduleSlug.toUpperCase().replace('MODUL-', 'MODUL ')}
                    </span>
                    {activeTerm.english && (
                      <span className="text-xs font-serif italic text-slate-500 dark:text-slate-400">
                        Bahasa Inggris: {activeTerm.english}
                      </span>
                    )}
                  </div>
                  <h2 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-slate-100 tracking-tight">
                    {activeTerm.term}
                  </h2>
                </div>

                <div className="p-5 rounded-2xl bg-white dark:bg-slate-850 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 font-semibold">
                    Definisi Konsep
                  </h4>
                  <p className="text-sm sm:text-base leading-relaxed text-slate-800 dark:text-slate-200 font-sans">
                    {activeTerm.meaning}
                  </p>
                </div>

                {activeTerm.example && (
                  <div className="p-5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800/40">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-800 dark:text-emerald-300 mb-2 font-semibold">
                      Contoh Konkret dalam Riset TI
                    </h4>
                    <p className="text-sm leading-relaxed text-emerald-900 dark:text-emerald-100">
                      {activeTerm.example}
                    </p>
                  </div>
                )}

                {activeTerm.relatedTerms && activeTerm.relatedTerms.length > 0 && (
                  <div className="pt-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 font-semibold">
                      Istilah Terkait
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeTerm.relatedTerms.map((relId: string) => {
                        const rel = allGlossaryTerms.find((t) => t.id === relId);
                        return (
                          <button
                            key={relId}
                            onClick={() => rel && setActiveTerm(rel)}
                            className="px-3 py-1 rounded-lg text-xs font-medium bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 transition cursor-pointer"
                          >
                            {rel?.term || relId}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center text-slate-400 dark:text-slate-500 p-8">
                <BookOpen className="w-12 h-12 mb-3 opacity-30 text-slate-400" />
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  Pilih salah satu istilah dari daftar di sebelah kiri
                </p>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                  Atau gunakan kolom pencarian untuk menemukan definisi spesifik.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
