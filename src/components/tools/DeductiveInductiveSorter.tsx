import React, { useState } from 'react';
import { ArrowLeftRight, CheckCircle2, XCircle, RotateCcw, Sparkles } from 'lucide-react';

interface CardItem {
  id: string;
  statement: string;
  correctCategory: 'deduktif' | 'induktif';
  note: string;
}

const initialCards: CardItem[] = [
  { id: 'c1', statement: 'Bergerak dari pengetahuan umum menuju kesimpulan khusus', correctCategory: 'deduktif', note: 'Top-down' },
  { id: 'c2', statement: 'Bergerak dari observasi kasus khusus menuju kesimpulan umum', correctCategory: 'induktif', note: 'Bottom-up' },
  { id: 'c3', statement: 'Bersifat analitis dan tautologis (kesimpulan sudah tersirat di premis)', correctCategory: 'deduktif', note: 'Ciri analisis premis' },
  { id: 'c4', statement: 'Bersifat sintetis dan general (kesimpulan melampaui kasus teramati)', correctCategory: 'induktif', note: 'Sintesis banyak kasus' },
  { id: 'c5', statement: 'Penarikan kesimpulan secara a priori tanpa observasi empiris baru', correctCategory: 'deduktif', note: 'A priori' },
  { id: 'c6', statement: 'Berlandaskan pengamatan inderawi empiris secara a posteriori', correctCategory: 'induktif', note: 'A posteriori' },
  { id: 'c7', statement: 'Mengandung aspek probabilitas dan tidak memberi kepastian mutlak', correctCategory: 'induktif', note: 'Peluang' },
  { id: 'c8', statement: 'Dapat dinilai kesahihan (validitas) penalarannya secara logika murni', correctCategory: 'deduktif', note: 'Sahih atau batal' },
  { id: 'c9', statement: 'Alur: Teori → Hipotesis → Observasi → Konfirmasi', correctCategory: 'deduktif', note: 'Alur deduktif modul' },
  { id: 'c10', statement: 'Alur: Observasi → Pola → Hipotesis Sementara → Teori', correctCategory: 'induktif', note: 'Alur induktif modul' }
];

export const DeductiveInductiveSorter: React.FC = () => {
  const [unassigned, setUnassigned] = useState<CardItem[]>(initialCards);
  const [deductiveList, setDeductiveList] = useState<CardItem[]>([]);
  const [inductiveList, setInductiveList] = useState<CardItem[]>([]);
  const [checked, setChecked] = useState<boolean>(false);

  const handleMove = (item: CardItem, target: 'deduktif' | 'induktif' | 'unassigned') => {
    setChecked(false);
    setUnassigned((prev) => prev.filter((i) => i.id !== item.id));
    setDeductiveList((prev) => prev.filter((i) => i.id !== item.id));
    setInductiveList((prev) => prev.filter((i) => i.id !== item.id));

    if (target === 'deduktif') setDeductiveList((prev) => [...prev, item]);
    else if (target === 'induktif') setInductiveList((prev) => [...prev, item]);
    else setUnassigned((prev) => [...prev, item]);
  };

  const handleAutoSolve = () => {
    setUnassigned([]);
    setDeductiveList(initialCards.filter((c) => c.correctCategory === 'deduktif'));
    setInductiveList(initialCards.filter((c) => c.correctCategory === 'induktif'));
    setChecked(true);
  };

  const handleReset = () => {
    setUnassigned(initialCards);
    setDeductiveList([]);
    setInductiveList([]);
    setChecked(false);
  };

  const isCompleted = unassigned.length === 0;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-xs uppercase tracking-wider">
            <ArrowLeftRight className="w-4 h-4" />
            <span>Alat Interaktif #8</span>
          </div>
          <h3 className="font-heading font-bold text-xl text-stone-900 dark:text-stone-100 mt-1">
            Deduktif vs Induktif Sorter
          </h3>
          <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
            Pilah pernyataan karakteristik penalaran logika ke kolom Deduktif atau Induktif
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleAutoSolve}
            className="px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kunci Jawaban</span>
          </button>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-lg border border-stone-200 dark:border-stone-800 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-500 cursor-pointer text-xs"
            title="Reset"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Unassigned Pool */}
      {unassigned.length > 0 && (
        <div className="mb-6 p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/40">
          <span className="text-xs font-semibold text-stone-500 block mb-2">
            Pernyataan Tersisa (Pilih kolom tujuan):
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {unassigned.map((card) => (
              <div
                key={card.id}
                className="p-3 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-[#171A21] text-xs flex flex-col justify-between"
              >
                <div className="font-medium text-stone-800 dark:text-stone-200 mb-2">
                  "{card.statement}"
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleMove(card, 'deduktif')}
                    className="flex-1 py-1 rounded bg-purple-600 hover:bg-purple-700 text-white font-medium text-[11px] cursor-pointer"
                  >
                    + Deduktif
                  </button>
                  <button
                    onClick={() => handleMove(card, 'induktif')}
                    className="flex-1 py-1 rounded bg-teal-600 hover:bg-teal-700 text-white font-medium text-[11px] cursor-pointer"
                  >
                    + Induktif
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sorting Target Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Deduktif Column */}
        <div className="p-4 rounded-xl border-2 border-purple-200 dark:border-purple-900/60 bg-purple-50/30 dark:bg-purple-950/20">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-purple-200 dark:border-purple-900">
            <div>
              <h4 className="font-heading font-bold text-sm text-purple-900 dark:text-purple-200">
                PENALARAN DEDUKTIF (Umum → Khusus)
              </h4>
              <span className="text-[11px] text-purple-600 dark:text-purple-400">
                Analitis, Tautologis, A Priori, Pasti
              </span>
            </div>
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300">
              {deductiveList.length} / 5
            </span>
          </div>

          <div className="space-y-2 min-h-[140px]">
            {deductiveList.length === 0 ? (
              <div className="text-xs text-stone-400 text-center py-8 italic">
                Belum ada kartu di kolom Deduktif
              </div>
            ) : (
              deductiveList.map((item) => {
                const isCorrect = item.correctCategory === 'deduktif';
                return (
                  <div
                    key={item.id}
                    className="p-2.5 rounded-lg border border-purple-200 dark:border-purple-800 bg-white dark:bg-[#171A21] flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-1.5 flex-1 pr-2">
                      {checked && (
                        isCorrect ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        ) : (
                          <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                        )
                      )}
                      <span className="text-stone-800 dark:text-stone-200">{item.statement}</span>
                    </div>
                    <button
                      onClick={() => handleMove(item, 'unassigned')}
                      className="text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 text-xs px-1 cursor-pointer"
                    >
                      ✕
                    </button>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Induktif Column */}
        <div className="p-4 rounded-xl border-2 border-teal-200 dark:border-teal-900/60 bg-teal-50/30 dark:bg-teal-950/20">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-teal-200 dark:border-teal-900">
            <div>
              <h4 className="font-heading font-bold text-sm text-teal-900 dark:text-teal-200">
                PENALARAN INDUKTIF (Khusus → Umum)
              </h4>
              <span className="text-[11px] text-teal-600 dark:text-teal-400">
                Sintetis, General, A Posteriori, Probabilitas
              </span>
            </div>
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300">
              {inductiveList.length} / 5
            </span>
          </div>

          <div className="space-y-2 min-h-[140px]">
            {inductiveList.length === 0 ? (
              <div className="text-xs text-stone-400 text-center py-8 italic">
                Belum ada kartu di kolom Induktif
              </div>
            ) : (
              inductiveList.map((item) => {
                const isCorrect = item.correctCategory === 'induktif';
                return (
                  <div
                    key={item.id}
                    className="p-2.5 rounded-lg border border-teal-200 dark:border-teal-800 bg-white dark:bg-[#171A21] flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-1.5 flex-1 pr-2">
                      {checked && (
                        isCorrect ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        ) : (
                          <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                        )
                      )}
                      <span className="text-stone-800 dark:text-stone-200">{item.statement}</span>
                    </div>
                    <button
                      onClick={() => handleMove(item, 'unassigned')}
                      className="text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 text-xs px-1 cursor-pointer"
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

      <div className="flex items-center justify-between pt-3 border-t border-stone-200 dark:border-stone-800">
        <button
          disabled={!isCompleted}
          onClick={() => setChecked(true)}
          className={`py-2 px-4 rounded-xl font-semibold text-xs transition-colors cursor-pointer ${
            isCompleted
              ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs'
              : 'bg-stone-200 dark:bg-stone-800 text-stone-400 cursor-not-allowed'
          }`}
        >
          Periksa Kebenaran Logika
        </button>

        <span className="text-xs text-stone-500">
          D-U-K (Deduktif: Umum → Khusus) vs I-K-U (Induktif: Khusus → Umum)
        </span>
      </div>
    </div>
  );
};
