import React, { useState } from 'react';
import { Cpu, HardDrive, Radio, Monitor, Zap } from 'lucide-react';

export const Timeline5Generations: React.FC = () => {
  const [activeGen, setActiveGen] = useState<number>(3); // default Gen IV

  const generations = [
    {
      gen: 'I',
      period: '1950 - 1957',
      component: 'Vacuum Tubes',
      icon: <Radio className="w-5 h-5 text-amber-500" />,
      features: 'Komputer komersial awal, bahasa simbolik awal, aritmetika biner, vacuum tubes untuk penyimpanan memori, input/output kartu berlubang (punched cards).'
    },
    {
      gen: 'II',
      period: '1957 - 1965',
      component: 'Transistor',
      icon: <Zap className="w-5 h-5 text-sky-500" />,
      features: 'Transistor dan core memories, disk penyimpanan massal, ukuran/biaya turun, keandalan naik, bahasa tingkat tinggi (FORTRAN/COBOL), dan sistem operasi awal.'
    },
    {
      gen: 'III',
      period: '1965 - 1975',
      component: 'Integrated Circuits (IC)',
      icon: <Cpu className="w-5 h-5 text-indigo-500" />,
      features: 'Integrated Circuits (IC), ukuran & biaya semakin turun, keandalan naik tajam, minicomputer, time-shared operating systems, industri software, standar kompatibilitas.'
    },
    {
      gen: 'IV',
      period: '1975 - 1985',
      component: 'LSI / VLSI',
      icon: <HardDrive className="w-5 h-5 text-teal-500" />,
      features: 'LSI/VLSI (Large/Very Large Scale Integration), mikrokomputer (PC pribadi), pertumbuhan pesat industri software, jaringan komputer (LAN/WAN awal), Graphical User Interfaces (GUI).'
    },
    {
      gen: 'V',
      period: '1985 - Sekarang',
      component: 'ULSI (Ultra Large Scale)',
      icon: <Monitor className="w-5 h-5 text-purple-500" />,
      features: 'ULSI, superkomputer & prosesor paralel, laptop, tablet, smartphone, wireless, penyimpanan eksternal raksasa, ubiquitous computing, grafis resolusi tinggi & VR, jaringan dunia/cloud, multimedia luas suara/gambar/video digital.'
    }
  ];

  return (
    <div className="my-6 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="font-heading font-bold text-slate-900 dark:text-slate-100 text-base">
            Timeline 5 Generasi Komputer
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Klik generasi untuk melihat detail komponen dan teknologi kunci
          </p>
        </div>
        <div className="text-xs font-mono font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 rounded-md">
          V-T-I-L-U
        </div>
      </div>

      {/* Generation Buttons / Tabs */}
      <div className="grid grid-cols-5 gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-xl mb-4">
        {generations.map((g, idx) => {
          const isActive = activeGen === idx;
          return (
            <button
              key={idx}
              onClick={() => setActiveGen(idx)}
              className={`py-2 px-1 text-center rounded-lg transition-all cursor-pointer ${
                isActive
                  ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <div className="text-xs font-bold font-heading">Gen {g.gen}</div>
              <div className="text-[10px] hidden sm:block truncate text-slate-400 dark:text-slate-500">
                {g.period}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Generation Detail */}
      {(() => {
        const cur = generations[activeGen];
        return (
          <div className="p-4 rounded-xl border border-indigo-100 dark:border-indigo-950/60 bg-indigo-50/40 dark:bg-indigo-950/20">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-white dark:bg-slate-800 shadow-xs">
                {cur.icon}
              </div>
              <div>
                <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold uppercase">
                  Generasi {cur.gen} · {cur.period}
                </span>
                <h5 className="font-heading font-bold text-base text-slate-900 dark:text-slate-100">
                  Komponen Utama: {cur.component}
                </h5>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {cur.features}
            </p>
          </div>
        );
      })()}
    </div>
  );
};
