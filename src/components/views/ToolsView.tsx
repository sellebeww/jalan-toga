import React, { useState } from 'react';
import { LikertCalculator } from '../tools/LikertCalculator';
import { SpearmanBrownCalculator } from '../tools/SpearmanBrownCalculator';
import { CronbachAlphaCalculator } from '../tools/CronbachAlphaCalculator';
import { KR20Calculator } from '../tools/KR20Calculator';
import { SampleSizeHelper } from '../tools/SampleSizeHelper';
import { SamplingClassifier } from '../tools/SamplingClassifier';
import { ErrorTypeSimulator } from '../tools/ErrorTypeSimulator';
import { DeductiveInductiveSorter } from '../tools/DeductiveInductiveSorter';
import { IEEECitationBuilder } from '../tools/IEEECitationBuilder';
import { ChartSelector } from '../tools/ChartSelector';
import { ThesisAlignmentChecklist } from '../tools/ThesisAlignmentChecklist';
import { PosterChecklist } from '../tools/PosterChecklist';
import { DecisionTree } from '../ui/DecisionTree';
import { 
  Calculator, 
  GitBranch, 
  FileCheck, 
  Compass, 
  Search, 
  Layers, 
  Sparkles, 
  Binary, 
  CheckSquare, 
  BarChart3, 
  BookOpen, 
  Users 
} from 'lucide-react';

interface ToolsViewProps {
  initialToolId?: string;
}

export const ToolsView: React.FC<ToolsViewProps> = ({ initialToolId }) => {
  const [activeToolId, setActiveToolId] = useState<string>(initialToolId || 'likert');

  // Categories
  const toolCategories = [
    {
      name: 'Kalkulator & Rumus Statistik',
      tools: [
        { id: 'likert', name: 'Likert Score & Kontinuum', icon: Calculator, desc: 'Hitung skor total, persentase kriteria, dan visualisasi kontinuum 5 tingkat' },
        { id: 'spearman', name: 'Spearman-Brown Split-Half', icon: Binary, desc: 'Koreksi estimasi reliabilitas separuh tes menjadi tes penuh' },
        { id: 'cronbach', name: 'Cronbach Alpha Calculator', icon: Calculator, desc: 'Uji konsistensi internal kuesioner skala Likert k-item' },
        { id: 'kr20', name: 'KR-20 (Kuder-Richardson)', icon: Binary, desc: 'Reliabilitas instrumen dikotomi tes objektif benar/salah' },
        { id: 'sample', name: 'Sample Size Helper', icon: Users, desc: 'Tabel Isaac & Michael, Nomogram Harry King, dan pedoman Roscoe' }
      ]
    },
    {
      name: 'Metodologi & Desain Riset',
      tools: [
        { id: 'sampling', name: 'Sampling Classifier', icon: Layers, desc: 'Latihan interaktif klasifikasi Probability vs Nonprobability' },
        { id: 'error', name: 'Error Type Simulator', icon: Sparkles, desc: 'Simulasi interaktif Kesalahan Tipe I (α) vs Tipe II (β) dengan analogi alarm' },
        { id: 'sorter', name: 'Deduktif vs Induktif Sorter', icon: GitBranch, desc: 'Uji pemahaman logika penalaran, premis umum vs fakta empiris khusus' },
        { id: 'decision', name: 'Decision Tree Desain Riset', icon: Compass, desc: 'Pohon keputusan interaktif memilih 1 dari 10 desain penelitian TI' }
      ]
    },
    {
      name: 'Penulisan, Sitasi & Presentasi',
      tools: [
        { id: 'ieee', name: 'IEEE Citation Generator', icon: BookOpen, desc: 'Format sitasi teks kurung siku [1] dan bibliografi baku IEEE' },
        { id: 'chart', name: 'Chart Selector', icon: BarChart3, desc: 'Panduan visual memilih grafik penyajian data menurut Modul 7' },
        { id: 'alignment', name: 'Thesis Alignment Checklist', icon: CheckSquare, desc: 'Audit Aturan Emas: Masalah ↔ Tujuan ↔ Metodologi ↔ Data ↔ Kesimpulan' },
        { id: 'poster', name: 'Poster Ilmiah Checklist', icon: FileCheck, desc: 'Audit poster ilmiah IEEE: alur visual, rasio teks, kontras, dan font' }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Title */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[11px] font-mono uppercase tracking-wider font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
            Laboratorium Metodologi
          </span>
          <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">
            13 Alat Interaktif
          </span>
        </div>
        <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-slate-100 tracking-tight">
          Alat & Kalkulator Riset TI
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Gunakan kalkulator rumus statistik, generator sitasi IEEE, simulator error, dan checklist Aturan Emas skripsi.
        </p>
      </div>

      {/* Main Grid: Sidebar of Tools + Tool Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Tool Navigation List */}
        <div className="lg:col-span-4 xl:col-span-4 space-y-4">
          {toolCategories.map((cat, cIdx) => (
            <div key={cIdx} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-3 shadow-xs">
              <h3 className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-2 py-1 mb-1">
                {cat.name}
              </h3>
              <div className="space-y-1">
                {cat.tools.map((t) => {
                  const Icon = t.icon;
                  const isActive = activeToolId === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setActiveToolId(t.id)}
                      className={`w-full text-left p-2.5 rounded-xl transition flex items-start gap-2.5 cursor-pointer ${
                        isActive
                          ? 'bg-indigo-600 text-white shadow-xs font-semibold'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                      }`}
                    >
                      <div className={`p-1.5 rounded-lg mt-0.5 ${
                        isActive ? 'bg-indigo-700 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-heading font-semibold text-xs leading-tight">
                          {t.name}
                        </div>
                        <div className={`text-[10px] truncate mt-0.5 ${isActive ? 'text-indigo-100' : 'text-slate-400 dark:text-slate-500'}`}>
                          {t.desc}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Active Tool Display */}
        <div className="lg:col-span-8 xl:col-span-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs">
          {activeToolId === 'likert' && <LikertCalculator />}
          {activeToolId === 'spearman' && <SpearmanBrownCalculator />}
          {activeToolId === 'cronbach' && <CronbachAlphaCalculator />}
          {activeToolId === 'kr20' && <KR20Calculator />}
          {activeToolId === 'sample' && <SampleSizeHelper />}
          {activeToolId === 'sampling' && <SamplingClassifier />}
          {activeToolId === 'error' && <ErrorTypeSimulator />}
          {activeToolId === 'sorter' && <DeductiveInductiveSorter />}
          {activeToolId === 'decision' && (
            <div>
              <div className="mb-4">
                <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">
                  MODUL 4
                </span>
                <h2 className="font-heading font-extrabold text-xl text-slate-900 dark:text-slate-100">
                  Pohon Keputusan Desain Riset TI
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Jawab pertanyaan terarah untuk menemukan desain riset (Experimental, Causal-Comparative, Correlational, Survey, Action, Case Study, dll.)
                </p>
              </div>
              <DecisionTree />
            </div>
          )}
          {activeToolId === 'ieee' && <IEEECitationBuilder />}
          {activeToolId === 'chart' && <ChartSelector />}
          {activeToolId === 'alignment' && <ThesisAlignmentChecklist />}
          {activeToolId === 'poster' && <PosterChecklist />}
        </div>
      </div>
    </div>
  );
};
