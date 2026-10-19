import React, { useState } from 'react';
import { ISAAC_MICHAEL_TABLE, calculateHarryKing, getRoscoeGuidelines } from '../../lib/calculators';
import { Users, Sparkles, Table, BookOpen, Calculator } from 'lucide-react';

export const SampleSizeHelper: React.FC = () => {
  const [popN, setPopN] = useState<number>(200);
  const [numVars, setNumVars] = useState<number>(5);

  const kingResult = calculateHarryKing(popN, 95, 5);
  const roscoe = getRoscoeGuidelines(numVars);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-xs uppercase tracking-wider">
            <Users className="w-4 h-4" />
            <span>Alat Interaktif #5</span>
          </div>
          <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-slate-100 mt-1">
            Pembantu Ukuran Sampel: Isaac-Michael, Harry King, & Roscoe
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Panduan penentuan jumlah sampel berdasarkan tabel Isaac & Michael, formula nomogram Harry King, dan 4 saran Roscoe
          </p>
        </div>

        <button
          onClick={() => {
            setPopN(200);
            setNumVars(5);
          }}
          className="px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Isi Contoh Modul (N = 200, 5 Variabel)</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Section 1: Harry King Nomogram */}
        <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2 font-heading font-bold text-sm text-slate-900 dark:text-slate-100">
              <Calculator className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>1. Formula Harry King (Slide Modul)</span>
            </div>
            <label htmlFor="sample-size-helper-1" className="text-xs text-slate-600 dark:text-slate-400 block mb-1">
              Jumlah Populasi (N):
            </label>
            <input id="sample-size-helper-1"
              type="number"
              min="10"
              value={popN}
              onChange={(e) => setPopN(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-mono space-y-1">
              <div className="text-slate-400 dark:text-slate-500">Taraf Kepercayaan: 95%</div>
              <div className="text-slate-400 dark:text-slate-500">Taraf Kesalahan: 5%</div>
              <div className="text-slate-800 dark:text-slate-200 pt-1 font-bold">
                Rumus: {kingResult.formulaText}
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-baseline justify-between">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Ukuran Sampel (s):</span>
            <span className="text-2xl font-bold font-mono text-indigo-600 dark:text-indigo-400">
              {kingResult.sampleSize} orang
            </span>
          </div>
        </div>

        {/* Section 2: Roscoe Multivariate */}
        <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2 font-heading font-bold text-sm text-slate-900 dark:text-slate-100">
              <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>2. Saran Roscoe (Multivariate)</span>
            </div>
            <label htmlFor="sample-size-helper-2" className="text-xs text-slate-600 dark:text-slate-400 block mb-1">
              Jumlah Variabel Penelitian (Independen + Dependen):
            </label>
            <input id="sample-size-helper-2"
              type="number"
              min="1"
              max="50"
              value={numVars}
              onChange={(e) => setNumVars(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1.5 leading-relaxed">
              <div>
                • <strong className="text-slate-800 dark:text-slate-200">Kaidah 10x:</strong> Minimal 10 × jumlah variabel = <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">{roscoe.multivariateMin} orang</span>.
              </div>
              <div>• Rentang layak umum: 30 - 500 responden.</div>
              <div>• Per kategori pecahan: minimal 30 orang.</div>
              <div>• Eksperimen sederhana: 10 - 20 per kelompok.</div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-baseline justify-between">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Minimal Multivariate:</span>
            <span className="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400">
              {roscoe.multivariateMin} orang
            </span>
          </div>
        </div>

        {/* Section 3: Isaac & Michael Benchmark Card */}
        <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2 font-heading font-bold text-sm text-slate-900 dark:text-slate-100">
              <Table className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span>3. Tabel Isaac & Michael (N = 200)</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 leading-relaxed">
              Data resmi slide halaman 51 untuk populasi N = 200 pada 3 tingkat taraf kesalahan:
            </p>

            <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="text-[10px] text-slate-400 dark:text-slate-500 block mb-0.5">Taraf 1%</span>
                <span className="font-bold text-base text-slate-800 dark:text-slate-200">154</span>
              </div>
              <div className="p-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800">
                <span className="text-[10px] text-indigo-500 block mb-0.5">Taraf 5%</span>
                <span className="font-bold text-base text-indigo-600 dark:text-indigo-400">127</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="text-[10px] text-slate-400 dark:text-slate-500 block mb-0.5">Taraf 10%</span>
                <span className="font-bold text-base text-slate-800 dark:text-slate-200">115</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed italic">
            Kaidah: Toleransi kesalahan lebih besar (10%) membutuhkan sampel lebih sedikit (115); toleransi ketat (1%) membutuhkan sampel lebih banyak (154).
          </div>
        </div>
      </div>

      {/* Expanded Isaac & Michael Lookup Table */}
      <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
        <h5 className="font-heading font-semibold text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
          Rujukan Cepat Tabel Isaac & Michael Berbagai Ukuran Populasi (N)
        </h5>
        <div tabIndex={0} role="region" aria-label="Tabel Isaac & Michael" className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left text-xs font-mono border-collapse">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                <th className="px-3 py-2">Populasi (N)</th>
                <th className="px-3 py-2">Kesalahan 1%</th>
                <th className="px-3 py-2">Kesalahan 5% (Standar)</th>
                <th className="px-3 py-2">Kesalahan 10%</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {ISAAC_MICHAEL_TABLE.map((row) => {
                const isSelected = row.n === popN;
                return (
                  <tr
                    key={row.n}
                    className={
                      isSelected
                        ? 'bg-indigo-50/80 dark:bg-indigo-950/40 font-bold text-indigo-700 dark:text-indigo-300'
                        : 'hover:bg-slate-50/50 dark:hover:bg-slate-800/40 text-slate-700 dark:text-slate-300'
                    }
                  >
                    <td className="px-3 py-2">{row.n}</td>
                    <td className="px-3 py-2">{row.s1}</td>
                    <td className="px-3 py-2">{row.s5}</td>
                    <td className="px-3 py-2">{row.s10}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
