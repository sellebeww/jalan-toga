import React, { useState, useEffect } from 'react';
import { QuizQuestion } from '../../types';
import { appStore } from '../../lib/store';
import confetti from 'canvas-confetti';
import { CheckCircle2, XCircle, Clock, ArrowRight, RotateCcw, Award } from 'lucide-react';

interface QuizRunnerProps {
  questions: QuizQuestion[];
  scopeTitle: string;
  scopeSlug: string;
  enableTimer?: boolean;
  timerDurationSeconds?: number;
  onFinish?: (score: number, total: number) => void;
}

export const QuizRunner: React.FC<QuizRunnerProps> = ({
  questions,
  scopeTitle,
  scopeSlug,
  enableTimer = false,
  timerDurationSeconds = 1800, // 30 minutes for mock exam
  onFinish
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, any>>({});
  const [confirmedAnswers, setConfirmedAnswers] = useState<Record<number, boolean>>({});
  const [timeLeft, setTimeLeft] = useState(timerDurationSeconds);
  const [isFinished, setIsFinished] = useState(false);
  const [showWrongOnly, setShowWrongOnly] = useState(false);

  // Timer logic
  useEffect(() => {
    if (!enableTimer || isFinished) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleFinishQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [enableTimer, isFinished]);

  if (!questions || questions.length === 0) {
    return <div className="p-8 text-center text-slate-500">Tidak ada soal tersedia.</div>;
  }

  const currentQ = questions[currentIndex];
  const userAns = userAnswers[currentIndex];
  const isConfirmed = !!confirmedAnswers[currentIndex];

  const handleSelectOption = (val: any) => {
    if (isConfirmed || isFinished) return;
    setUserAnswers((prev) => ({ ...prev, [currentIndex]: val }));
  };

  const handleToggleMulti = (optIdx: number) => {
    if (isConfirmed || isFinished) return;
    const current = (userAns as number[]) || [];
    const next = current.includes(optIdx)
      ? current.filter((i) => i !== optIdx)
      : [...current, optIdx];
    setUserAnswers((prev) => ({ ...prev, [currentIndex]: next }));
  };

  const handleConfirmCurrent = () => {
    setConfirmedAnswers((prev) => ({ ...prev, [currentIndex]: true }));
  };

  const checkIsCorrect = (q: QuizQuestion, ans: any): boolean => {
    if (ans === undefined) return false;
    if (q.type === 'single' || q.type === 'truefalse') {
      return ans === q.answer;
    }
    if (q.type === 'multi') {
      const target = Array.isArray(q.answer) ? (q.answer as number[]) : [];
      const user = Array.isArray(ans) ? (ans as number[]) : [];
      return target.length === user.length && target.every((v) => user.includes(v));
    }
    return false;
  };

  const handleFinishQuiz = () => {
    setIsFinished(true);
    let score = 0;
    const wrongIds: string[] = [];

    questions.forEach((q, idx) => {
      if (checkIsCorrect(q, userAnswers[idx])) {
        score += 1;
      } else {
        wrongIds.push(q.id);
      }
    });

    const percentage = Math.round((score / questions.length) * 100);

    // Save to store
    appStore.addQuizAttempt({
      id: 'attempt-' + Date.now(),
      scope: scopeSlug,
      score,
      total: questions.length,
      percentage,
      durationSeconds: enableTimer ? timerDurationSeconds - timeLeft : 0,
      date: Date.now(),
      wrongQuestionIds: wrongIds
    });

    if (percentage >= 70) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // ignore
      }
    }

    if (onFinish) onFinish(score, questions.length);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setUserAnswers({});
    setConfirmedAnswers({});
    setTimeLeft(timerDurationSeconds);
    setIsFinished(false);
    setShowWrongOnly(false);
  };

  // Result Summary Screen
  if (isFinished) {
    let score = 0;
    const wrongQuestions: { q: QuizQuestion; idx: number }[] = [];

    questions.forEach((q, idx) => {
      if (checkIsCorrect(q, userAnswers[idx])) {
        score += 1;
      } else {
        wrongQuestions.push({ q, idx });
      }
    });

    const percentage = Math.round((score / questions.length) * 100);
    const displayedQuestions = showWrongOnly
      ? wrongQuestions.map((w) => w.q)
      : questions;

    return (
      <div className="p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-3">
            <Award className="w-8 h-8" />
          </div>
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-slate-100">
            Hasil Latihan: {scopeTitle}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Ulasan pencapaian pemahaman materi dan rekomendasi topik
          </p>

          <div className="flex items-center justify-center gap-6 my-6">
            <div className="text-center">
              <span className="text-xs text-slate-400 dark:text-slate-500 uppercase font-mono block">Skor Benar</span>
              <span className="font-heading font-extrabold text-3xl text-slate-900 dark:text-slate-100 font-mono">
                {score} <span className="text-base text-slate-400 dark:text-slate-500">/ {questions.length}</span>
              </span>
            </div>
            <div className="h-10 w-px bg-slate-200 dark:bg-slate-800" />
            <div className="text-center">
              <span className="text-xs text-slate-400 dark:text-slate-500 uppercase font-mono block">Persentase</span>
              <span
                className={`font-heading font-extrabold text-3xl font-mono ${
                  percentage >= 80
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : percentage >= 60
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-rose-600 dark:text-rose-400'
                }`}
              >
                {percentage}%
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleRestart}
              className="py-2 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Ulangi Latihan</span>
            </button>
            {wrongQuestions.length > 0 && (
              <button
                onClick={() => setShowWrongOnly(!showWrongOnly)}
                className="py-2 px-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-xs transition-colors cursor-pointer"
              >
                {showWrongOnly ? 'Tampilkan Semua Soal' : `Tinjau ${wrongQuestions.length} Soal Keliru`}
              </button>
            )}
          </div>
        </div>

        {/* Detailed Question Review List */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
          <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-slate-100">
            {showWrongOnly ? `Daftar ${wrongQuestions.length} Soal yang Perlu Diperbaiki:` : 'Rincian Seluruh Soal:'}
          </h4>

          {displayedQuestions.map((q) => {
            const actualIdx = questions.findIndex((item) => item.id === q.id);
            const ans = userAnswers[actualIdx];
            const isCorrect = checkIsCorrect(q, ans);

            return (
              <div
                key={q.id}
                className={`p-4 rounded-xl border ${
                  isCorrect
                    ? 'border-emerald-200 dark:border-emerald-950 bg-emerald-50/30 dark:bg-emerald-950/20'
                    : 'border-rose-200 dark:border-rose-950 bg-rose-50/30 dark:bg-rose-950/20'
                }`}
              >
                <div className="flex items-start gap-2 mb-2">
                  <span className="font-mono text-xs font-bold shrink-0 mt-0.5">
                    #{actualIdx + 1}
                  </span>
                  <div className="flex-1 font-semibold text-xs sm:text-sm text-slate-900 dark:text-slate-100">
                    {q.prompt}
                  </div>
                  {isCorrect ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  )}
                </div>

                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 leading-relaxed space-y-1">
                  <div className="font-semibold text-indigo-600 dark:text-indigo-400">
                    Penjelasan Kunci:
                  </div>
                  <p>{q.explanation}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Active Quiz View
  const progressPercent = Math.round(((currentIndex + 1) / questions.length) * 100);

  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm max-w-3xl mx-auto">
      {/* Quiz Header */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <span className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider block">
            {scopeTitle}
          </span>
          <span className="font-heading font-bold text-base text-slate-900 dark:text-slate-100">
            Soal #{currentIndex + 1} dari {questions.length}
          </span>
        </div>

        {enableTimer && (
          <div className="flex items-center gap-1.5 font-mono text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
            <Clock className="w-3.5 h-3.5 text-indigo-500" />
            <span>{formatTimer(timeLeft)}</span>
          </div>
        )}
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 mb-6 overflow-hidden">
        <div
          className="h-full bg-indigo-600 transition-all duration-300 rounded-full"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Question Prompt */}
      <div className="mb-6">
        <h4 className="font-heading font-bold text-base sm:text-lg text-slate-900 dark:text-slate-100 leading-snug">
          {currentQ.prompt}
        </h4>
        {currentQ.type === 'multi' && (
          <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium mt-1 block">
            (Pilihan ganda dengan beberapa jawaban benar. Pilih semua yang sesuai.)
          </span>
        )}
      </div>

      {/* Options */}
      {currentQ.type === 'truefalse' && (
        <div className="grid grid-cols-2 gap-3 mb-6">
          {[true, false].map((val) => {
            const isSelected = userAns === val;
            return (
              <button
                key={String(val)}
                disabled={isConfirmed}
                onClick={() => handleSelectOption(val)}
                className={`py-3 px-4 rounded-xl border text-sm font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-900 dark:text-indigo-200 ring-2 ring-indigo-400 shadow-xs'
                    : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200'
                } ${isConfirmed ? 'cursor-default' : ''}`}
              >
                {val ? 'Benar' : 'Salah'}
              </button>
            );
          })}
        </div>
      )}

      {currentQ.options && (
        <div className="space-y-2 mb-6">
          {currentQ.options.map((opt, oIdx) => {
            const isSelected =
              currentQ.type === 'multi'
                ? ((userAns as number[]) || []).includes(oIdx)
                : userAns === oIdx;

            return (
              <button
                key={oIdx}
                disabled={isConfirmed}
                onClick={() => {
                  if (currentQ.type === 'multi') handleToggleMulti(oIdx);
                  else handleSelectOption(oIdx);
                }}
                className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${
                  isSelected
                    ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-950 dark:text-indigo-100 font-medium ring-2 ring-indigo-400 shadow-xs'
                    : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-800 dark:text-slate-200'
                } ${isConfirmed ? 'cursor-default' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {String.fromCharCode(65 + oIdx)}
                  </span>
                  <span>{opt}</span>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Confirmation and Immediate Explanation */}
      {!isConfirmed ? (
        <div className="flex justify-end pt-2">
          <button
            disabled={userAns === undefined || (Array.isArray(userAns) && userAns.length === 0)}
            onClick={handleConfirmCurrent}
            className={`py-2 px-5 rounded-xl font-semibold text-xs cursor-pointer transition-colors ${
              userAns !== undefined && (!Array.isArray(userAns) || userAns.length > 0)
                ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs'
                : 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed'
            }`}
          >
            Kunci Jawaban
          </button>
        </div>
      ) : (
        <div className="space-y-4 pt-2">
          {(() => {
            const isCorrect = checkIsCorrect(currentQ, userAns);
            return (
              <div
                className={`p-4 rounded-xl border text-xs sm:text-sm leading-relaxed ${
                  isCorrect
                    ? 'border-emerald-200 dark:border-emerald-950 bg-emerald-50/60 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-200'
                    : 'border-rose-200 dark:border-rose-950 bg-rose-50/60 dark:bg-rose-950/30 text-rose-950 dark:text-rose-200'
                }`}
              >
                <div className="flex items-center gap-1.5 font-bold mb-1.5">
                  {isCorrect ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Jawaban Tepat!</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                      <span>Kurang Tepat.</span>
                    </>
                  )}
                </div>
                <p className="leading-relaxed">{currentQ.explanation}</p>
              </div>
            );
          })()}

          {/* Navigation to Next Question or Finish */}
          <div className="flex items-center justify-between pt-2">
            <button
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex(currentIndex - 1)}
              className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 disabled:opacity-30 cursor-pointer"
            >
              ← Soal Sebelumnya
            </button>

            {currentIndex < questions.length - 1 ? (
              <button
                onClick={() => setCurrentIndex(currentIndex + 1)}
                className="py-2 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>Lanjut ke Soal #{currentIndex + 2}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={handleFinishQuiz}
                className="py-2 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>Selesaikan & Lihat Hasil</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
