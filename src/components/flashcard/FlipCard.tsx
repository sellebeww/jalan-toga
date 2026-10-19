import React, { useState, useEffect } from 'react';
import { Flashcard } from '../../types';
import { RotateCw, Check, AlertCircle, HelpCircle } from 'lucide-react';

interface FlipCardProps {
  card: Flashcard;
  boxNumber?: number;
  onRate?: (rating: 'tahu' | 'ragu' | 'belum') => void;
}

export const FlipCard: React.FC<FlipCardProps> = ({ card, boxNumber = 1, onRate }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Reset flip state when card changes
  useEffect(() => {
    setIsFlipped(false);
  }, [card.id]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleRate = (e: React.MouseEvent, rating: 'tahu' | 'ragu' | 'belum') => {
    e.stopPropagation();
    if (onRate) onRate(rating);
    setIsFlipped(false);
  };

  return (
    <div className="w-full max-w-lg mx-auto select-none my-4">
      {/* 3D Flip Card Container */}
      <div
        onClick={handleFlip}
        className="relative h-88 sm:h-96 w-full cursor-pointer perspective-1000 transition-transform duration-300 hover:scale-[1.01]"
      >
        <div
          className={`relative w-full h-full rounded-2xl transition-transform duration-500 transform-style-3d ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* Front Face */}
          <div className="absolute inset-0 w-full h-full rounded-2xl p-6 backface-hidden flex flex-col justify-between bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold">
                {card.category} · {card.moduleSlug.replace('-', ' ').toUpperCase()}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 font-bold border border-indigo-200 dark:border-indigo-800">
                Kotak Leitner #{boxNumber}
              </span>
            </div>

            <div className="my-auto text-center px-4">
              <h4 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 dark:text-slate-100 leading-snug">
                {card.front}
              </h4>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
              <RotateCw className="w-3.5 h-3.5" />
              <span>Klik kartu atau tekan [Spasi] untuk membalik jawaban</span>
            </div>
          </div>

          {/* Back Face */}
          <div className="absolute inset-0 w-full h-full rounded-2xl p-6 backface-hidden rotate-y-180 flex flex-col justify-between bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
              <span className="text-[11px] font-mono uppercase text-emerald-600 dark:text-emerald-400 font-bold">
                Jawaban & Penjelasan Kunci
              </span>
              <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">
                Kotak #{boxNumber}
              </span>
            </div>

            <div className="my-auto overflow-y-auto px-2 py-3 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-normal whitespace-pre-line">
              {card.back}
            </div>

            {/* Rating Buttons */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
              <div className="text-[10px] text-center text-slate-400 dark:text-slate-500 mb-2">
                Seberapa paham Anda dengan kartu ini?
              </div>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={(e) => handleRate(e, 'belum')}
                  className="py-2 px-2 rounded-xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900 font-semibold text-xs flex flex-col items-center justify-center cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Belum</span>
                  </div>
                  <span className="text-[9px] opacity-75 font-mono">[Tekan 1]</span>
                </button>

                <button
                  onClick={(e) => handleRate(e, 'ragu')}
                  className="py-2 px-2 rounded-xl bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-900 font-semibold text-xs flex flex-col items-center justify-center cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-1">
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>Ragu</span>
                  </div>
                  <span className="text-[9px] opacity-75 font-mono">[Tekan 2]</span>
                </button>

                <button
                  onClick={(e) => handleRate(e, 'tahu')}
                  className="py-2 px-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900 font-semibold text-xs flex flex-col items-center justify-center cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>Tahu</span>
                  </div>
                  <span className="text-[9px] opacity-75 font-mono">[Tekan 3]</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
