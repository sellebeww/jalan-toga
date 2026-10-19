import React, { useState } from 'react';
import { CheckCircle2, XCircle, RotateCcw, Sparkles, HelpCircle } from 'lucide-react';

interface TechniqueItem {
  id: string;
  name: string;
  correctCategory: 'probability' | 'nonprobability';
  description: string;
}

const initialTechniques: TechniqueItem[] = [
  { id: 't1', name: 'Simple Random Sampling', correctCategory: 'probability', description: 'Acak murni tanpa strata, populasi homogen' },
  { id: 't2', name: 'Proportionate Stratified Random', correctCategory: 'probability', description: 'Populasi heterogen berstrata, proporsional tiap strata' },
  { id: 't3', name: 'Disproportionate Stratified Random', correctCategory: 'probability', description: 'Strata minoritas sangat kecil diambil seluruhnya' },
  { id: 't4', name: 'Area / Cluster Sampling', correctCategory: 'probability', description: 'Dua tahap bila wilayah populasi sangat luas' },
  { id: 't5', name: 'Systematic Sampling', correctCategory: 'nonprobability', description: 'Berdasarkan pola urutan nomor anggota (Nonprob menurut modul!)' },
  { id: 't6', name: 'Quota Sampling', correctCategory: 'nonprobability', description: 'Berdasarkan kuota ciri tertentu sampai jumlah target terpenuhi' },
  { id: 't7', name: 'Incidental / Convenience Sampling', correctCategory: 'nonprobability', description: 'Kebetulan bertemu dan dinilai cocok sebagai sumber data' },
  { id: 't8', name: 'Purposive Sampling', correctCategory: 'nonprobability', description: 'Pertimbangan atau kriteria khusus peneliti' },
  { id: 't9', name: 'Saturated / Jenuh / Sensus', correctCategory: 'nonprobability', description: 'Seluruh anggota populasi kecil (< 30) dijadikan sampel' },
  { id: 't10', name: 'Snowball Sampling', correctCategory: 'nonprobability', description: 'Mula-mula kecil lalu membesar melalui rekomendasi berantai' }
];

export const SamplingClassifier: React.FC = () => {
  const [unassigned, setUnassigned] = useState<TechniqueItem[]>(initialTechniques);
  const [probList, setProbList] = useState<TechniqueItem[]>([]);
  const [nonProbList, setNonProbList] = useState<TechniqueItem[]>([]);
  const [checked, setChecked] = useState<boolean>(false);

  const handleMove = (item: TechniqueItem, target: 'probability' | 'nonprobability' | 'unassigned') => {
    setChecked(false);
    // Remove from all
    setUnassigned((prev) => prev.filter((i) => i.id !== item.id));
    setProbList((prev) => prev.filter((i) => i.id !== item.id));
    setNonProbList((prev) => prev.filter((i) => i.id !== item.id));

    if (target === 'probability') setProbList((prev) => [...prev, item]);
    else if (target === 'nonprobability') setNonProbList((prev) => [...prev, item]);
    else setUnassigned((prev) => [...prev, item]);
  };

  const handleAutoSolve = () => {
    setUnassigned([]);
    setProbList(initialTechniques.filter((t) => t.correctCategory === 'probability'));
    setNonProbList(initialTechniques.filter((t) => t.correctCategory === 'nonprobability'));
    setChecked(true);
  };

  const handleReset = () => {
    setUnassigned(initialTechniques);
    setProbList([]);
    setNonProbList([]);
    setChecked(false);
  };

  const isCompleted = unassigned.length === 0;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-xs uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Alat Interaktif #6</span>
          </div>
          <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-slate-100 mt-1">
            Uji Klasifikasi 10 Teknik Sampling Modul RTI
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Pindahkan tiap kartu teknik sampling ke kolom Probability atau Nonprobability sesuai slide modul
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleAutoSolve}
            className="px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tampilkan Solusi Modul</span>
          </button>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 cursor-pointer text-xs transition"
            title="Reset klasifikasi"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Unassigned Pool */}
      {unassigned.length > 0 && (
        <div className="mb-6 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
          <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-2">
            Kartu Teknik Sampling Tersedia (Klik tombol tujuan di kartu untuk memindahkan):
          </span>
          <div className="flex flex-wrap gap-2">
            {unassigned.map((item) => (
              <div
                key={item.id}
                className="p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs shadow-xs"
              >
                <div className="font-bold text-slate-900 dark:text-slate-100 mb-1">
                  {item.name}
                </div>
                <div className="text-[11px] text-slate-400 dark:text-slate-500 mb-2">{item.description}</div>
                <div className="flex gap-1.5">
                  <button
                    onClick={() => handleMove(item, 'probability')}
                    className="px-2 py-1 rounded bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-[10px] cursor-pointer transition"
                  >
                    + Probability
                  </button>
                  <button
                    onClick={() => handleMove(item, 'nonprobability')}
                    className="px-2 py-1 rounded bg-teal-600 hover:bg-teal-700 text-white font-medium text-[10px] cursor-pointer transition"
                  >
                    + Nonprobability
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Target Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Column 1: Probability */}
        <div className="p-4 rounded-xl border-2 border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/30 dark:bg-indigo-950/20">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-indigo-200 dark:border-indigo-900">
            <div>
              <h4 className="font-heading font-bold text-sm text-indigo-900 dark:text-indigo-200">
                PROBABILITY SAMPLING (4 Teknik)
              </h4>
              <span className="text-[11px] text-indigo-600 dark:text-indigo-400">
                Peluang sama bagi setiap unsur populasi
              </span>
            </div>
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300">
              {probList.length} / 4
            </span>
          </div>

          <div className="space-y-2 min-h-[140px]">
            {probList.length === 0 ? (
              <div className="text-xs text-slate-400 dark:text-slate-500 text-center py-8 italic">
                Belum ada teknik dimasukkan ke kolom ini
              </div>
            ) : (
              probList.map((item) => {
                const isCorrect = item.correctCategory === 'probability';
                return (
                  <div
                    key={item.id}
                    className="p-2.5 rounded-lg border border-indigo-200 dark:border-indigo-800 bg-white dark:bg-slate-900 flex items-center justify-between text-xs"
                  >
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                        {checked && (
                          isCorrect ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          ) : (
                            <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                          )
                        )}
                        <span>{item.name}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 dark:text-slate-500">{item.description}</span>
                    </div>
                    <button
                      onClick={() => handleMove(item, 'unassigned')}
                      className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs px-1.5 py-0.5 cursor-pointer"
                    >
                      ✕
                    </button>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Column 2: Nonprobability */}
        <div className="p-4 rounded-xl border-2 border-teal-200 dark:border-teal-900/60 bg-teal-50/30 dark:bg-teal-950/20">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-teal-200 dark:border-teal-900">
            <div>
              <h4 className="font-heading font-bold text-sm text-teal-900 dark:text-teal-200">
                NONPROBABILITY SAMPLING (6 Teknik)
              </h4>
              <span className="text-[11px] text-teal-600 dark:text-teal-400">
                Peluang tidak sama bagi anggota populasi
              </span>
            </div>
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300">
              {nonProbList.length} / 6
            </span>
          </div>

          <div className="space-y-2 min-h-[140px]">
            {nonProbList.length === 0 ? (
              <div className="text-xs text-slate-400 dark:text-slate-500 text-center py-8 italic">
                Belum ada teknik dimasukkan ke kolom ini
              </div>
            ) : (
              nonProbList.map((item) => {
                const isCorrect = item.correctCategory === 'nonprobability';
                return (
                  <div
                    key={item.id}
                    className="p-2.5 rounded-lg border border-teal-200 dark:border-teal-800 bg-white dark:bg-slate-900 flex items-center justify-between text-xs"
                  >
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                        {checked && (
                          isCorrect ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          ) : (
                            <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                          )
                        )}
                        <span>{item.name}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 dark:text-slate-500">{item.description}</span>
                    </div>
                    <button
                      onClick={() => handleMove(item, 'unassigned')}
                      className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs px-1.5 py-0.5 cursor-pointer"
                    >
                      ✕
                    </button>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>

      {/* Feedback check button */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-200 dark:border-slate-800">
        <button
          disabled={!isCompleted}
          onClick={() => setChecked(true)}
          className={`py-2 px-4 rounded-xl font-semibold text-xs transition-colors cursor-pointer ${
            isCompleted
              ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs'
              : 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed'
          }`}
        >
          Periksa Kebenaran Klasifikasi
        </button>

        <span className="text-xs text-slate-500 dark:text-slate-400 italic">
          Ingat: Dalam diagram modul RTI, <strong>Systematic Sampling</strong> dimasukkan ke kelompok Nonprobability!
        </span>
      </div>
    </div>
  );
};
