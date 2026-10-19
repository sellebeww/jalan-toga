import React, { useState } from 'react';
import { QuizQuestion } from '../../types';
import { CheckCircle2, XCircle, HelpCircle } from 'lucide-react';

interface MiniQuizInlineProps {
  questions: QuizQuestion[];
  topicId: string;
}

export const MiniQuizInline: React.FC<MiniQuizInlineProps> = ({ questions }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, any>>({});
  const [submitted, setSubmitted] = useState<Record<string, boolean>>({});

  if (!questions || questions.length === 0) return null;

  const handleSelect = (qId: string, val: any) => {
    if (submitted[qId]) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: val }));
  };

  const handleToggleMulti = (qId: string, optIdx: number) => {
    if (submitted[qId]) return;
    const current = (selectedAnswers[qId] as number[]) || [];
    const next = current.includes(optIdx)
      ? current.filter((i) => i !== optIdx)
      : [...current, optIdx];
    setSelectedAnswers((prev) => ({ ...prev, [qId]: next }));
  };

  const handleSubmit = (qId: string) => {
    setSubmitted((prev) => ({ ...prev, [qId]: true }));
  };

  return (
    <div className="my-8 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-850 dark:bg-slate-900/40">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-1.5 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
          <HelpCircle className="w-4 h-4" />
        </div>
        <div>
          <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-slate-100">
            Cek Pemahaman (Mini Quiz)
          </h4>
          <span className="text-[11px] text-slate-500 dark:text-slate-400">
            Uji pemahaman kilat sebelum lanjut ke topik berikutnya
          </span>
        </div>
      </div>

      <div className="space-y-6">
        {questions.map((q, idx) => {
          const isSubmitted = !!submitted[q.id];
          const userAns = selectedAnswers[q.id];

          let isCorrect = false;
          if (isSubmitted) {
            if (q.type === 'single') {
              isCorrect = userAns === q.answer;
            } else if (q.type === 'truefalse') {
              isCorrect = userAns === q.answer;
            } else if (q.type === 'multi') {
              const ansArr = Array.isArray(q.answer) ? (q.answer as number[]) : [];
              const uArr = Array.isArray(userAns) ? (userAns as number[]) : [];
              isCorrect =
                ansArr.length === uArr.length &&
                ansArr.every((v) => uArr.includes(v));
            }
          }

          return (
            <div
              key={q.id}
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 shadow-xs"
            >
              <div className="flex items-start gap-2.5">
                <span className="font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5">
                  #{idx + 1}
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                  {q.prompt}
                </p>
              </div>

              {/* Options for True/False */}
              {q.type === 'truefalse' && (
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {[true, false].map((val) => {
                    const isSelected = userAns === val;
                    return (
                      <button
                        key={String(val)}
                        disabled={isSubmitted}
                        onClick={() => handleSelect(q.id, val)}
                        className={`py-2 px-3 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 ring-2 ring-indigo-400'
                            : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                        } ${isSubmitted ? 'cursor-default' : ''}`}
                      >
                        {val ? 'Benar' : 'Salah'}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Options for Single / Multi */}
              {q.options && (
                <div className="space-y-1.5 pt-1">
                  {q.options.map((opt, oIdx) => {
                    const isSelected =
                      q.type === 'multi'
                        ? ((userAns as number[]) || []).includes(oIdx)
                        : userAns === oIdx;

                    return (
                      <button
                        key={oIdx}
                        disabled={isSubmitted}
                        onClick={() => {
                          if (q.type === 'multi') handleToggleMulti(q.id, oIdx);
                          else handleSelect(q.id, oIdx);
                        }}
                        className={`w-full p-2.5 rounded-lg border text-left text-xs transition-all flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200 font-medium ring-1 ring-indigo-400'
                            : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                        } ${isSubmitted ? 'cursor-default' : ''}`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 font-bold">
                            {String.fromCharCode(65 + oIdx)}.
                          </span>
                          <span>{opt}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Check Answer Button */}
              {!isSubmitted && (
                <button
                  disabled={userAns === undefined || (Array.isArray(userAns) && userAns.length === 0)}
                  onClick={() => handleSubmit(q.id)}
                  className={`mt-2 py-1.5 px-3 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                    userAns !== undefined && (!Array.isArray(userAns) || userAns.length > 0)
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed'
                  }`}
                >
                  Periksa Jawaban
                </button>
              )}

              {/* Feedback and Explanation */}
              {isSubmitted && (
                <div
                  className={`p-3 rounded-xl border text-xs leading-relaxed ${
                    isCorrect
                      ? 'border-emerald-200 dark:border-emerald-950 bg-emerald-50/60 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-200'
                      : 'border-rose-200 dark:border-rose-950 bg-rose-50/60 dark:bg-rose-950/30 text-rose-950 dark:text-rose-200'
                  }`}
                >
                  <div className="flex items-center gap-1.5 font-bold mb-1">
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Jawaban Kamu Benar!</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                        <span>Kurang Tepat.</span>
                      </>
                    )}
                  </div>
                  <p>{q.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
