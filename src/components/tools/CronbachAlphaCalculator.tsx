import React, { useState } from 'react';
import { calculateCronbachAlpha } from '../../lib/calculators';
import { Calculator, Sparkles, AlertTriangle, CheckCircle2 } from 'lucide-react';

export const CronbachAlphaCalculator: React.FC = () => {
  const [k, setK] = useState<number>(4);
  const [sumItemVar, setSumItemVar] = useState<number>(2);
  const [totalVar, setTotalVar] = useState<number>(5);

  const result = calculateCronbachAlpha(k, sumItemVar, totalVar);

  const handleFillModuleExample = () => {
    // Example from slide page 64:
    // k = 4, jumlah varians item = 2, varians total = 5 -> alpha = (4/3) * (1 - 2/5) = 0.80
    setK(4);
    setSumItemVar(2);
    setTotalVar(5);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-xs uppercase tracking-wider">
            <Calculator className="w-4 h-4" />
            <span>Alat Interaktif #3</span>
          </div>
          <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-slate-100 mt-1">
            Kalkulator Cronbach’s Alpha (Skala Likert)
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Uji reliabilitas konsistensi internal kuesioner berskala bertingkat (Likert)
          </p>
        </div>

        <button
          onClick={handleFillModuleExample}
          className="px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Isi Contoh Modul (k=4, Σvar=2, var=5 → α=0,80)</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Form Inputs */}
        <div className="space-y-4">
          <div>
            <label htmlFor="cronbach-alpha-calculator-1" className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
              Jumlah Butir Item Pertanyaan (k):
            </label>
            <input id="cronbach-alpha-calculator-1"
              type="number"
              min="2"
              value={k}
              onChange={(e) => setK(parseInt(e.target.value) || 2)}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5 block">Minimal 2 butir item</span>
          </div>

          <div>
            <label htmlFor="cronbach-alpha-calculator-2" className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
              Jumlah Varians Butir Item (Σvar(xj)):
            </label>
            <input id="cronbach-alpha-calculator-2"
              type="number"
              step="0.01"
              min="0"
              value={sumItemVar}
              onChange={(e) => setSumItemVar(parseFloat(e.target.value) || 0)}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5 block">Total penjumlahan varians tiap butir pernyataan</span>
          </div>

          <div>
            <label htmlFor="cronbach-alpha-calculator-3" className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
              Varians Skor Total Responden (var(x0)):
            </label>
            <input id="cronbach-alpha-calculator-3"
              type="number"
              step="0.01"
              min="0.01"
              value={totalVar}
              onChange={(e) => setTotalVar(parseFloat(e.target.value) || 0.01)}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5 block">Varians dari total skor seluruh responden</span>
          </div>
        </div>

        {/* Results Box */}
        <div className="p-5 rounded-xl border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/40 dark:bg-indigo-950/20 flex flex-col justify-between">
          <div>
            <span className="text-xs uppercase font-mono font-semibold text-indigo-700 dark:text-indigo-300 block mb-1">
              Koefisien Cronbach’s Alpha
            </span>
            <div className="text-4xl font-extrabold font-mono text-indigo-600 dark:text-indigo-400">
              α = {result.alpha}
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

          <div className="mt-3 p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 text-[11px] text-amber-800 dark:text-amber-200 flex gap-2 items-start">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>
              Catatan Modul: Alpha menguji kehandalan (reliabilitas konsistensi internal), bukan bukti tunggal validitas konstruk.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
