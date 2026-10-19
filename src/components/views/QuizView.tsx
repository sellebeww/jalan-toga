import React, { useState } from 'react';
import { 
  allQuizQuestions, 
  getQuizQuestionsByModule, 
  generateMockExam 
} from '../../data/quizzes';
import { allModules } from '../../data/modules';
import { allComparisons } from '../../data/comparisons';
import { runningCaseStudy } from '../../data/caseStudy';
import { QuizRunner } from '../quiz/QuizRunner';
import { useAppStore } from '../../lib/store';
import { 
  Award, 
  Clock, 
  Sparkles, 
  BookOpen, 
  GitCompare, 
  FileText, 
  History, 
  CheckCircle2, 
  AlertTriangle,
  ArrowRight,
  Filter,
  Lightbulb
} from 'lucide-react';
import { ModuleSlug } from '../../types';

export const QuizView: React.FC = () => {
  const store = useAppStore();
  const [subTab, setSubTab] = useState<'modul' | 'simulasi' | 'bandingkan' | 'studi-kasus' | 'riwayat'>('modul');
  const [selectedModuleSlug, setSelectedModuleSlug] = useState<ModuleSlug>('modul-1');
  const [mockExamKey, setMockExamKey] = useState<number>(1);
  const [activeComparisonModule, setActiveComparisonModule] = useState<string>('all');

  // Filtered comparisons
  const filteredComparisons = activeComparisonModule === 'all'
    ? allComparisons
    : allComparisons.filter((c) => c.moduleSlug === activeComparisonModule);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* View Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-mono uppercase tracking-wider font-bold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
              Evaluasi & Pemahaman Mendalam
            </span>
            <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">
              105+ Soal Pembahasan
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-slate-100 tracking-tight">
            Latihan & Uji Pemahaman RTI
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Uji kesiapan ujian komprehensif, telaah perbandingan konsep krusial, dan pelajari studi kasus skripsi nyata.
          </p>
        </div>

        {/* Sub-tab navigation bar */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800/80 p-1 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-x-auto">
          {[
            { id: 'modul', label: 'Kuis Modul', icon: BookOpen },
            { id: 'simulasi', label: 'Simulasi Ujian (30 Soal)', icon: Award },
            { id: 'bandingkan', label: 'Bandingkan Konsep', icon: GitCompare },
            { id: 'studi-kasus', label: 'Studi Kasus RTI', icon: FileText },
            { id: 'riwayat', label: `Riwayat (${store.quizAttempts.length})`, icon: History }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = subTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSubTab(tab.id as any)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                  isActive
                    ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* SUB-TAB 1: Kuis per Modul */}
      {subTab === 'modul' && (
        <div className="space-y-6">
          {/* Module Selector Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {allModules.map((m) => {
              const isSelected = selectedModuleSlug === m.slug;
              return (
                <button
                  key={m.slug}
                  onClick={() => setSelectedModuleSlug(m.slug as ModuleSlug)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition border whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm shadow-indigo-600/20'
                      : 'bg-white dark:bg-slate-850 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <span className={`px-1.5 py-0.5 rounded text-[10px] font-mono ${
                    isSelected ? 'bg-indigo-700 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                  }`}>
                    M{m.number}
                  </span>
                  <span>{m.title}</span>
                </button>
              );
            })}
          </div>

          {/* Quiz Runner */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-xs">
            <QuizRunner
              key={selectedModuleSlug}
              questions={getQuizQuestionsByModule(selectedModuleSlug)}
              scopeTitle={allModules.find((m) => m.slug === selectedModuleSlug)?.title || ''}
              scopeSlug={selectedModuleSlug}
              enableTimer={false}
            />
          </div>
        </div>
      )}

      {/* SUB-TAB 2: Simulasi Ujian (30 Soal Acak dengan Timer 30 Menit) */}
      {subTab === 'simulasi' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-indigo-900 via-indigo-850 to-indigo-800 text-white p-6 sm:p-8 rounded-3xl shadow-lg relative overflow-hidden">
            <div className="max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-indigo-200 text-xs font-semibold mb-3">
                <Clock className="w-3.5 h-3.5" />
                Format Ujian Komprehensif / UAS
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl tracking-tight">
                Simulasi Ujian Riset TI
              </h2>
              <p className="text-sm text-indigo-100 mt-2 leading-relaxed">
                30 pertanyaan pilihan ganda, benar/salah, dan analisis kasus diacak secara proporsional dari Modul 1 sampai Modul 7. Dilengkapi batasan waktu 30 menit dan pembahasan detail di akhir ujian.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <button
                  onClick={() => setMockExamKey((k) => k + 1)}
                  className="px-4 py-2 rounded-xl bg-white text-indigo-950 font-bold text-xs hover:bg-indigo-50 shadow-sm transition cursor-pointer"
                >
                  Acak Ulang Soal Ujian
                </button>
                <span className="text-xs text-indigo-200 font-mono">
                  Batas Lulus: 75% (23/30 Benar)
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-xs">
            <QuizRunner
              key={`mock-${mockExamKey}`}
              questions={generateMockExam(30)}
              scopeTitle="Simulasi Ujian Komprehensif RTI (30 Soal)"
              scopeSlug="simulasi-komprehensif"
              enableTimer={true}
              timerDurationSeconds={1800}
            />
          </div>
        </div>
      )}

      {/* SUB-TAB 3: Bandingkan Konsep (20 Crucial Differences) */}
      {subTab === 'bandingkan' && (
        <div className="space-y-6">
          {/* Module Filter */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-100">
                Matriks Perbandingan 20 Konsep Krusial
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Membedah perbedaan mendasar yang sering mengecoh dalam ujian dan revisi skripsi
              </p>
            </div>

            <div className="flex items-center gap-1 overflow-x-auto">
              <button
                onClick={() => setActiveComparisonModule('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                  activeComparisonModule === 'all'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                Semua
              </button>
              {allModules.map((m) => (
                <button
                  key={m.slug}
                  onClick={() => setActiveComparisonModule(m.slug)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                    activeComparisonModule === m.slug
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  M{m.number}
                </button>
              ))}
            </div>
          </div>

          {/* Comparisons Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredComparisons.map((c) => (
              <div
                key={c.id}
                className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between shadow-xs space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                      {c.moduleSlug.toUpperCase().replace('MODUL-', 'MODUL ')}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-heading font-bold text-lg text-indigo-900 dark:text-indigo-200">
                      {c.conceptA}
                    </h3>
                    <span className="text-xs text-slate-400 dark:text-slate-500 font-mono font-bold">vs</span>
                    <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-100">
                      {c.conceptB}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans mb-4">
                    {c.summary}
                  </p>

                  {/* Differences Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                      <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        <tr>
                          <th className="p-2 border-b border-slate-200 dark:border-slate-700">Dimensi</th>
                          <th className="p-2 border-b border-slate-200 dark:border-slate-700 text-indigo-700 dark:text-indigo-300 font-semibold">{c.conceptA}</th>
                          <th className="p-2 border-b border-slate-200 dark:border-slate-700 font-semibold">{c.conceptB}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
                        {c.differences.map((diff, dIdx) => (
                          <tr key={dIdx} className={dIdx % 2 === 1 ? 'bg-slate-50/50 dark:bg-slate-800/40' : ''}>
                            <td className="p-2 font-medium text-slate-500 dark:text-slate-400 font-mono text-[11px]">{diff.dimension}</td>
                            <td className="p-2 text-indigo-950 dark:text-indigo-200 font-medium">{diff.aspectA}</td>
                            <td className="p-2">{diff.aspectB}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  {c.pitfall && (
                    <div className="p-3 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/50 dark:border-amber-900/40 text-[11px] text-amber-900 dark:text-amber-200">
                      <span className="font-bold flex items-center gap-1 mb-0.5">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                        Jebakan Ujian:
                      </span>
                      {c.pitfall}
                    </div>
                  )}

                  {c.keyTakeaway && (
                    <div className="p-3 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40 text-[11px] text-indigo-900 dark:text-indigo-200">
                      <span className="font-bold flex items-center gap-1 mb-0.5">
                        <Lightbulb className="w-3.5 h-3.5 text-indigo-600" />
                        Poin Intisari:
                      </span>
                      {c.keyTakeaway}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 4: Studi Kasus RTI ("Penelitian Portal Kampus") */}
      {subTab === 'studi-kasus' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs">
            <div className="max-w-3xl mb-8">
              <span className="text-[11px] font-mono uppercase tracking-wider font-bold px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
                Studi Kasus Berkesinambungan Modul 1 - 7
              </span>
              <h2 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-slate-100 mt-2">
                "Penelitian Portal Kampus: Optimalisasi Temu Balik Informasi Kegiatan & Evaluasi Persepsi Pengguna"
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                Ilustrasi nyata penerapan seluruh metodologi RTI dalam satu skripsi lengkap: dari perumusan masalah, telaah pustaka IEEE, desain eksperimen di lab, sampling kuesioner mahasiswa, hingga penyajian grafik dan poster ilmiah.
              </p>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-6 before:w-0.5 before:bg-indigo-200 dark:before:bg-slate-700">
              {runningCaseStudy.map((step) => (
                <div key={step.stepNumber} className="relative pl-12 sm:pl-16">
                  {/* Step Marker */}
                  <div className="absolute left-1.5 sm:left-3 top-0 -translate-x-1/2 w-7 h-7 rounded-full bg-indigo-600 text-white font-mono font-bold text-xs flex items-center justify-center shadow-md shadow-indigo-600/30">
                    {step.stepNumber}
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">
                        {step.moduleTitle}
                      </span>
                      <span className="text-xs font-heading font-bold text-slate-800 dark:text-slate-200">
                        {step.phaseTitle}
                      </span>
                    </div>

                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-serif">
                      {step.scenario}
                    </p>

                    {/* Artifacts Produced */}
                    <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs">
                      <span className="font-mono uppercase font-bold text-slate-400 text-[10px] block mb-1">
                        Artefak Ilmiah yang Dihasilkan:
                      </span>
                      <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300">
                        {step.artifactsProduced.map((art, aIdx) => (
                          <li key={aIdx}>{art}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Golden Rule Link */}
                    <div className="p-3 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/50 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-200">
                      <span className="font-bold">Kaitan Aturan Emas Skripsi:</span> {step.connectionToGoldenRule}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 5: Riwayat Kuis */}
      {subTab === 'riwayat' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-xs">
          <h2 className="font-heading font-bold text-xl text-slate-900 dark:text-slate-100 mb-4">
            Riwayat Ujian & Kuis
          </h2>
          {store.quizAttempts.length === 0 ? (
            <div className="p-12 text-center text-slate-400 text-xs">
              Belum ada riwayat kuis. Ikuti kuis modul atau simulasi ujian untuk melacak skor Anda di sini!
            </div>
          ) : (
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {store.quizAttempts.map((attempt, idx) => {
                const isPass = (attempt.score / attempt.total) >= 0.75;
                const dateStr = new Date(attempt.date).toLocaleDateString('id-ID', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                });

                return (
                  <div key={idx} className="py-4 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                          isPass ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                        }`}>
                          {isPass ? 'LULUS (>=75%)' : 'BELUM LULUS'}
                        </span>
                        <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">{dateStr}</span>
                      </div>
                      <h4 className="font-heading font-semibold text-sm text-slate-800 dark:text-slate-200">
                        {attempt.scope.toUpperCase()}
                      </h4>
                    </div>

                    <div className="text-right">
                      <div className="text-xl font-bold font-mono text-indigo-600 dark:text-indigo-400">
                        {Math.round((attempt.score / attempt.total) * 100)}%
                      </div>
                      <div className="text-xs text-slate-400 dark:text-slate-500 font-mono">
                        {attempt.score}/{attempt.total} benar
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
