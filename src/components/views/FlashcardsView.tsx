import React, { useState } from 'react';
import { FlashcardRunner } from '../flashcard/FlashcardRunner';
import { allFlashcards } from '../../data/flashcards';
import { useAppStore, appStore } from '../../lib/store';
import { 
  Layers, 
  BrainCircuit, 
  RotateCcw, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  HelpCircle, 
  Info,
  Calendar
} from 'lucide-react';

export const FlashcardsView: React.FC = () => {
  const store = useAppStore();
  const [showGuide, setShowGuide] = useState(false);

  // Compute Leitner Box distributions
  const boxCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  allFlashcards.forEach((card) => {
    const st = store.cardStates[card.id];
    const box = (st?.box || 1) as 1 | 2 | 3 | 4 | 5;
    boxCounts[box] = (boxCounts[box] || 0) + 1;
  });

  const totalCards = allFlashcards.length;
  const masteredCards = (boxCounts[4] || 0) + (boxCounts[5] || 0);
  const masteryPct = Math.round((masteredCards / totalCards) * 100);

  const handleReset = () => {
    if (window.confirm('Apakah Anda yakin ingin mereset seluruh progres hafalan flashcard ke Box 1?')) {
      appStore.resetAllCardProgress();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Title & Introduction */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-mono uppercase tracking-wider font-bold px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
              Sistem Spaced Repetition (Leitner 5-Box)
            </span>
            <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">
              Total {totalCards} Kartu · {masteryPct}% Dikuasai
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-slate-100 tracking-tight">
            Hafalan Cepat Konsep & Rumus RTI
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Hafalkan definisi, klasifikasi, rumus statistik, dan aturan IEEE dengan pengulangan berjarak optimal.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowGuide(!showGuide)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition cursor-pointer"
          >
            <Info className="w-4 h-4 text-slate-400 dark:text-slate-500" />
            <span>Cara Kerja Leitner</span>
          </button>
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 hover:bg-rose-50 dark:bg-slate-800 dark:hover:bg-rose-950/40 text-slate-600 hover:text-rose-600 dark:text-slate-400 dark:hover:text-rose-400 border border-slate-200 dark:border-slate-700 transition cursor-pointer"
            title="Kembalikan semua kartu ke Box 1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Hafalan</span>
          </button>
        </div>
      </div>

      {/* Leitner Box Status Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {[
          { box: 1, label: 'Box 1: Baru', interval: 'Tiap Hari', count: boxCounts[1], color: 'border-rose-200 dark:border-rose-900/60 bg-rose-50/60 dark:bg-rose-950/20 text-rose-800 dark:text-rose-200' },
          { box: 2, label: 'Box 2: Mulai Ingat', interval: '2 Hari', count: boxCounts[2], color: 'border-amber-200 dark:border-amber-900/60 bg-amber-50/60 dark:bg-amber-950/20 text-amber-800 dark:text-amber-200' },
          { box: 3, label: 'Box 3: Cukup Mantap', interval: '4 Hari', count: boxCounts[3], color: 'border-sky-200 dark:border-sky-900/60 bg-sky-50/60 dark:bg-sky-950/20 text-sky-800 dark:text-sky-200' },
          { box: 4, label: 'Box 4: Kuat', interval: '8 Hari', count: boxCounts[4], color: 'border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/60 dark:bg-indigo-950/20 text-indigo-800 dark:text-indigo-200' },
          { box: 5, label: 'Box 5: Mastered', interval: '16 Hari', count: boxCounts[5], color: 'border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/60 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-200' }
        ].map((b) => (
          <div
            key={b.box}
            className={`p-3.5 rounded-2xl border ${b.color} flex flex-col justify-between`}
          >
            <div className="flex items-center justify-between">
              <span className="font-heading font-bold text-xs uppercase tracking-wide">
                {b.label}
              </span>
              <span className="font-mono text-xs font-semibold opacity-70">
                {b.interval}
              </span>
            </div>
            <div className="mt-3 flex items-baseline justify-between">
              <span className="text-2xl font-extrabold font-mono tabular-nums">
                {b.count}
              </span>
              <span className="text-[11px] opacity-70">kartu</span>
            </div>
          </div>
        ))}
      </div>

      {/* Leitner Guide Explanation Collapsible */}
      {showGuide && (
        <div className="p-5 rounded-2xl bg-indigo-50/80 dark:bg-slate-900 border border-indigo-200/80 dark:border-slate-800 text-xs sm:text-sm text-indigo-950 dark:text-indigo-200 space-y-2 animate-in fade-in">
          <h4 className="font-heading font-bold text-sm text-indigo-900 dark:text-indigo-300 flex items-center gap-2">
            <BrainCircuit className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            Aturan Algoritma Spaced Repetition Leitner:
          </h4>
          <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
            <li><strong>Tahu (Tombol Hijau / Angka 3):</strong> Kartu naik 1 tingkat ke kotak berikutnya (Box 1 → 2 → 3 → 4 → 5). Interval pengulangan semakin panjang.</li>
            <li><strong>Ragu (Tombol Kuning / Angka 2):</strong> Kartu tetap di kotak saat ini untuk dimantapkan lagi.</li>
            <li><strong>Belum (Tombol Merah / Angka 1):</strong> Kartu langsung jatuh kembali ke <strong>Box 1</strong> dan diulang setiap hari sampai hafal kembali.</li>
            <li><strong>Pintasan Keyboard:</strong> Tekan <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 font-mono text-[11px]">Spasi</kbd> untuk membalik kartu, lalu <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 font-mono text-[11px]">1</kbd>, <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 font-mono text-[11px]">2</kbd>, atau <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 font-mono text-[11px]">3</kbd>.</li>
          </ul>
        </div>
      )}

      {/* Main Flashcard Interactive Runner */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-4 sm:p-8 shadow-xs">
        <FlashcardRunner />
      </div>
    </div>
  );
};
