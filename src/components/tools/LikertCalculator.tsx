import React, { useState } from 'react';
import { calculateLikert, LikertInput } from '../../lib/calculators';
import { Calculator, RefreshCw, Sparkles } from 'lucide-react';

export const LikertCalculator: React.FC = () => {
  const [inputs, setInputs] = useState<LikertInput>({
    ss: 25,
    st: 40,
    rg: 5,
    ts: 20,
    sts: 10
  });

  const [showSteps, setShowSteps] = useState(true);

  const result = calculateLikert(inputs);

  const handleFillModuleExample = () => {
    // Exact numbers from slide page 54:
    // 100 orang: 25 SS, 40 ST, 5 RG, 20 TS, 10 STS -> Total 350 dari max 500
    setInputs({
      ss: 25,
      st: 40,
      rg: 5,
      ts: 20,
      sts: 10
    });
  };

  const handleReset = () => {
    setInputs({
      ss: 0,
      st: 0,
      rg: 0,
      ts: 0,
      sts: 0
    });
  };

  const handleChange = (key: keyof LikertInput, value: string) => {
    const num = Math.max(0, parseInt(value) || 0);
    setInputs((prev) => ({ ...prev, [key]: num }));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-xs uppercase tracking-wider">
            <Calculator className="w-4 h-4" />
            <span>Alat Interaktif #1</span>
          </div>
          <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-slate-100 mt-1">
            Kalkulator Skala Likert & Garis Kontinum
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Menghitung total skor berbobot, rentang ideal (min/max), persentase, dan posisi pada kontinum sikap
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleFillModuleExample}
            className="px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Isi Contoh Modul (100 Resp)</span>
          </button>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 cursor-pointer text-xs transition"
            title="Kosongkan nilai"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Input Fields */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
        <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40">
          <label htmlFor="likert-calculator-1" className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
            SS (Bobot 5)
          </label>
          <span className="text-[10px] text-slate-400 dark:text-slate-500 block mb-1">Sangat Setuju</span>
          <input id="likert-calculator-1"
            type="number"
            min="0"
            value={inputs.ss}
            onChange={(e) => handleChange('ss', e.target.value)}
            className="w-full px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40">
          <label htmlFor="likert-calculator-2" className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
            ST (Bobot 4)
          </label>
          <span className="text-[10px] text-slate-400 dark:text-slate-500 block mb-1">Setuju</span>
          <input id="likert-calculator-2"
            type="number"
            min="0"
            value={inputs.st}
            onChange={(e) => handleChange('st', e.target.value)}
            className="w-full px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40">
          <label htmlFor="likert-calculator-3" className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
            RG (Bobot 3)
          </label>
          <span className="text-[10px] text-slate-400 dark:text-slate-500 block mb-1">Ragu-ragu</span>
          <input id="likert-calculator-3"
            type="number"
            min="0"
            value={inputs.rg}
            onChange={(e) => handleChange('rg', e.target.value)}
            className="w-full px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40">
          <label htmlFor="likert-calculator-4" className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
            TS (Bobot 2)
          </label>
          <span className="text-[10px] text-slate-400 dark:text-slate-500 block mb-1">Tidak Setuju</span>
          <input id="likert-calculator-4"
            type="number"
            min="0"
            value={inputs.ts}
            onChange={(e) => handleChange('ts', e.target.value)}
            className="w-full px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="col-span-2 sm:col-span-1 p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40">
          <label htmlFor="likert-calculator-5" className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
            STS (Bobot 1)
          </label>
          <span className="text-[10px] text-slate-400 dark:text-slate-500 block mb-1">Sangat Tidak Setuju</span>
          <input id="likert-calculator-5"
            type="number"
            min="0"
            value={inputs.sts}
            onChange={(e) => handleChange('sts', e.target.value)}
            className="w-full px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Summary Score Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
          <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Total Responden (N)</span>
          <span className="font-heading font-bold text-2xl text-slate-900 dark:text-slate-100 font-mono">
            {result.totalRespondents}
          </span>
          <span className="text-[11px] text-slate-400 dark:text-slate-500 block mt-0.5">orang</span>
        </div>

        <div className="p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/50">
          <span className="text-xs text-indigo-700 dark:text-indigo-300 block mb-1 font-semibold">
            Total Skor Aktual
          </span>
          <span className="font-heading font-bold text-2xl text-indigo-600 dark:text-indigo-400 font-mono">
            {result.totalScore}
          </span>
          <span className="text-[11px] text-slate-400 dark:text-slate-500 block mt-0.5">
            dari maks ideal {result.maxScore}
          </span>
        </div>

        <div className="p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50">
          <span className="text-xs text-emerald-700 dark:text-emerald-300 block mb-1 font-semibold">
            Persentase Skor
          </span>
          <span className="font-heading font-bold text-2xl text-emerald-600 dark:text-emerald-400 font-mono">
            {result.percentage}%
          </span>
          <span className="text-[11px] text-slate-400 dark:text-slate-500 block mt-0.5">dari skor ideal</span>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
          <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Rentang Kontinum</span>
          <span className="text-sm font-bold text-slate-900 dark:text-slate-100 font-heading block truncate">
            {result.continuumCategory}
          </span>
          <span className="text-[11px] text-slate-400 dark:text-slate-500 block mt-0.5">
            Min {result.minScore} - Max {result.maxScore}
          </span>
        </div>
      </div>

      {/* Visual Continuum Bar */}
      <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-800/30 mb-6">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">
          <span>Garis Kontinum Skor (0% s/d 100%)</span>
          <span className="text-indigo-600 dark:text-indigo-400 font-mono font-bold">
            Posisi: {result.percentage}%
          </span>
        </div>

        <div className="relative h-6 w-full rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden flex">
          <div className="h-full w-1/5 bg-rose-500 text-[9px] text-slate-950 flex items-center justify-center font-bold">
            STS
          </div>
          <div className="h-full w-1/5 bg-orange-500 text-[9px] text-slate-950 flex items-center justify-center font-bold">
            TS
          </div>
          <div className="h-full w-1/5 bg-amber-500 text-[9px] text-slate-950 flex items-center justify-center font-bold">
            RG
          </div>
          <div className="h-full w-1/5 bg-lime-600 text-[9px] text-slate-950 flex items-center justify-center font-bold">
            ST
          </div>
          <div className="h-full w-1/5 bg-emerald-600 text-[9px] text-slate-950 flex items-center justify-center font-bold">
            SS
          </div>

          {/* Marker pin */}
          <div
            className="absolute top-0 bottom-0 w-1.5 bg-black dark:bg-white shadow-md transition-all duration-300"
            style={{ left: `${Math.min(100, Math.max(0, result.percentage))}%` }}
          />
        </div>

        <div className="flex justify-between text-[10px] text-slate-400 dark:text-slate-500 font-mono mt-1.5">
          <span>0% (Sangat Negatif)</span>
          <span>40% (Netral)</span>
          <span>70% (Positif)</span>
          <span>100% (Sangat Positif)</span>
        </div>
      </div>

      {/* Calculation Steps Dropdown */}
      <div>
        <button
          onClick={() => setShowSteps(!showSteps)}
          className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 cursor-pointer mb-2"
        >
          <span>{showSteps ? 'Sembunyikan' : 'Lihat'} Langkah Perhitungan Lengkap</span>
        </button>

        {showSteps && (
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-700 dark:text-slate-300 space-y-1.5">
            {result.steps.map((st, i) => (
              <div key={i} className="leading-relaxed">
                {st}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
