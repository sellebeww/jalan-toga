import React, { useState } from 'react';
import { calculateKR20 } from '../../lib/calculators';
import { Calculator, Sparkles, CheckCircle2, Info } from 'lucide-react';

export const KR20Calculator: React.FC = () => {
  const [k, setK] = useState<number>(5);
  const [sumPq, setSumPq] = useState<number>(1);
  const [totalVariance, setTotalVariance] = useState<number>(2);

  const result = calculateKR20(k, sumPq, totalVariance);

  const handleFillModuleExample = () => {
    // Example from slide page 64:
    // k = 5, sum(pj * qj) = 1, varians total sigma^2 = 2 -> 1.25 * 0.5 = 0.625
    setK(5);
    setSumPq(1);
    setTotalVariance(2);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-xs uppercase tracking-wider">
            <Calculator className="w-4 h-4" />
            <span>Alat Interaktif #4</span>
          </div>
          <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-slate-100 mt-1">
            Kalkulator Kuder-Richardson Formula 20 (KR-20)
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Uji reliabilitas konsistensi internal untuk butir instrumen dikotomi (benar = 1, salah = 0)
          </p>
        </div>

        <button
          onClick={handleFillModuleExample}
          className="px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Isi Contoh Modul (k=5, Σpq=1, σ²=2 → 0,625)</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Form Inputs */}
        <div className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
              Jumlah Butir Item Dikotomi (k):
            </label>
            <input
              type="number"
              min="2"
              value={k}
              onChange={(e) => setK(parseInt(e.target.value) || 2)}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5 block">Total butir soal benar/salah</span>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
              Jumlah Proporsi pj × qj (Σ(pj × qj)):
            </label>
            <input
              type="number"
              step="0.01"
              min="0"
              value={sumPq}
              onChange={(e) => setSumPq(parseFloat(e.target.value) || 0)}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5 block">
              pj = proporsi benar butir j; qj = 1 - pj (proporsi salah)
            </span>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
              Varians Skor Total Tes (σ²):
            </label>
            <input
              type="number"
              step="0.01"
              min="0.01"
              value={totalVariance}
              onChange={(e) => setTotalVariance(parseFloat(e.target.value) || 0.01)}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5 block">Varians kuadrat dari nilai total responden</span>
          </div>
        </div>

        {/* Results Box */}
        <div className="p-5 rounded-xl border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/40 dark:bg-indigo-950/20 flex flex-col justify-between">
          <div>
            <span className="text-xs uppercase font-mono font-semibold text-indigo-700 dark:text-indigo-300 block mb-1">
              Koefisien Reliabilitas KR-20
            </span>
            <div className="text-4xl font-extrabold font-mono text-indigo-600 dark:text-indigo-400">
              r = {result.kr20}
            </div>
            <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white dark:bg-slate-900 text-indigo-800 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 shadow-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>Status: {result.interpretation}</span>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-indigo-200/60 dark:border-indigo-900/60 font-mono text-xs text-slate-600 dark:text-slate-400 space-y-1">
            {result.steps.map((st, i) => (
              <div key={i}>{st}</div>
            ))}
          </div>

          <div className="mt-3 p-2.5 rounded-lg bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-900/50 text-[11px] text-sky-800 dark:text-sky-200 flex gap-2 items-start">
            <Info className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
            <span>
              Catatan: KR-20 dipakai untuk tes objektif dikotomis (pilihan ganda yang dinilai 1 atau 0), sedangkan Cronbach Alpha untuk skala Likert bertingkat.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
