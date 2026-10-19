import React, { useState } from 'react';
import { calculateSpearmanBrown } from '../../lib/calculators';
import { Calculator, Sparkles, CheckCircle } from 'lucide-react';

export const SpearmanBrownCalculator: React.FC = () => {
  const [rValue, setRValue] = useState<number>(0.6);
  const result = calculateSpearmanBrown(rValue);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-xs uppercase tracking-wider">
            <Calculator className="w-4 h-4" />
            <span>Alat Interaktif #2</span>
          </div>
          <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-slate-100 mt-1">
            Kalkulator Reliabilitas Spearman-Brown (Split-Half)
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Mengoreksi koefisien korelasi separuh belahan tes (ganjil-genap) menjadi koefisien reliabilitas tes penuh
          </p>
        </div>

        <button
          onClick={() => setRValue(0.6)}
          className="px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Isi Contoh Modul (r = 0,60 → 0,75)</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
              Koefisien Korelasi Belahan (r):
            </label>
            <div className="flex items-center gap-3">
              <input
                type="number"
                step="0.01"
                min="-0.99"
                max="1.00"
                value={rValue}
                onChange={(e) => setRValue(parseFloat(e.target.value) || 0)}
                className="w-32 px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-base font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={rValue}
                onChange={(e) => setRValue(parseFloat(e.target.value))}
                className="flex-1 accent-indigo-600"
              />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
            <span className="font-semibold text-slate-800 dark:text-slate-200 block mb-1">
              Rumus Koreksi Spearman-Brown:
            </span>
            <div className="font-mono text-sm text-indigo-600 dark:text-indigo-400 font-bold p-2 bg-white dark:bg-slate-900 rounded-md border border-slate-200 dark:border-slate-800 text-center">
              ρ = 2r / (1 + r)
            </div>
            <p className="mt-2 text-[11px] leading-relaxed">
              Catatan: Korelasi dua belahan (r) hanya mencerminkan separuh tes; rumus Spearman-Brown memperkirakan kehandalan tes bila disajikan secara penuh.
            </p>
          </div>
        </div>

        {/* Results Box */}
        <div className="p-5 rounded-xl border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/40 dark:bg-indigo-950/20 flex flex-col justify-between">
          <div>
            <span className="text-xs uppercase font-mono font-semibold text-indigo-700 dark:text-indigo-300 block mb-1">
              Hasil Reliabilitas Terkoreksi
            </span>
            <div className="text-4xl font-extrabold font-mono text-indigo-600 dark:text-indigo-400">
              ρ = {result.rho}
            </div>
            <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white dark:bg-slate-900 text-indigo-800 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 shadow-xs">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
              <span>Status: {result.interpretation}</span>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-indigo-200/60 dark:border-indigo-900/60 font-mono text-xs text-slate-600 dark:text-slate-400 space-y-1">
            {result.steps.map((st, i) => (
              <div key={i}>{st}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
