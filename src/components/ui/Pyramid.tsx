import React, { useState } from 'react';
import { Sparkles, Database, FileSpreadsheet, Brain, Compass } from 'lucide-react';

export const DIKWPyramid: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<string>('wisdom');

  const levels = [
    {
      id: 'wisdom',
      name: 'Wisdom (Kebijaksanaan)',
      keyword: 'Tindakan (Action)',
      color: 'bg-emerald-600 text-white hover:bg-emerald-700',
      width: 'w-2/5',
      icon: <Sparkles className="w-4 h-4" />,
      definition: 'Kemampuan merealisasikan pengetahuan ke dalam bentuk tindakan nyata yang bijaksana untuk menyelesaikan masalah.',
      example: 'Memperbaiki arsitektur indeks query database portal kampus agar mahasiswa tidak lagi mengalami kelambatan.'
    },
    {
      id: 'knowledge',
      name: 'Knowledge (Pemahaman)',
      keyword: 'Pemahaman (Understanding)',
      color: 'bg-indigo-600 text-white hover:bg-indigo-700',
      width: 'w-3/5',
      icon: <Brain className="w-4 h-4" />,
      definition: 'Tingkatan pemahaman pola sebab-akibat yang lebih tinggi mengaitkan informasi dengan konteks penyebab persoalan.',
      example: 'Memahami bahwa kelambatan portal terjadi akibat ketiadaan indeks metadata pada tabel kegiatan mahasiswa.'
    },
    {
      id: 'information',
      name: 'Information (Informasi)',
      keyword: 'Makna (Meaning)',
      color: 'bg-sky-600 text-white hover:bg-sky-700',
      width: 'w-4/5',
      icon: <FileSpreadsheet className="w-4 h-4" />,
      definition: 'Data yang telah diolah dan diorganisasikan sehingga memiliki makna dan nilai arti bagi manusia.',
      example: 'Waktu respons rata-rata pencarian portal adalah 4 detik (dihitung dari angka mentah 2, 4, dan 6 detik).'
    },
    {
      id: 'data',
      name: 'Data (Fakta)',
      keyword: 'Fakta Mentah (Raw Fact)',
      color: 'bg-slate-600 text-white hover:bg-slate-700',
      width: 'w-full',
      icon: <Database className="w-4 h-4" />,
      definition: 'Elemen fakta mentah tentang objek atau kejadian yang teramati di lapangan tanpa konteks makna.',
      example: 'Catatan log server: waktu respons mentah 2 detik, 4 detik, dan 6 detik.'
    }
  ];

  const current = levels.find((l) => l.id === selectedLevel) || levels[0];

  return (
    <div className="my-6 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="font-heading font-bold text-slate-900 dark:text-slate-100 text-base">
            Piramida Interaktif DIKW + Theory
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Klik tiap tingkatan piramida untuk melihat definisi dan contoh konkret modul
          </p>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-indigo-600 dark:text-indigo-400 font-mono bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 rounded-md">
          <Compass className="w-3.5 h-3.5" />
          <span>+ Theory</span>
        </div>
      </div>

      {/* Visual Pyramid Representation */}
      <div className="flex flex-col items-center gap-1.5 my-5">
        {levels.map((lvl) => {
          const isSelected = selectedLevel === lvl.id;
          return (
            <button
              key={lvl.id}
              onClick={() => setSelectedLevel(lvl.id)}
              className={`${lvl.width} ${lvl.color} py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs ${
                isSelected ? 'ring-3 ring-indigo-400 dark:ring-indigo-300 scale-[1.02]' : 'opacity-90'
              }`}
            >
              {lvl.icon}
              <span className="truncate">{lvl.name}</span>
            </button>
          );
        })}
      </div>

      {/* Level Explanation Card */}
      <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/50 space-y-2">
        <div className="flex items-center justify-between">
          <h5 className="font-heading font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
            {current.icon}
            {current.name}
          </h5>
          <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 bg-slate-200/60 dark:bg-slate-700 px-2 py-0.5 rounded">
            Fokus: {current.keyword}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {current.definition}
        </p>
        <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/80">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-400 block mb-0.5">
            Contoh Modul (Portal Kampus):
          </span>
          <p className="text-xs font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-200 dark:border-slate-700">
            {current.example}
          </p>
        </div>
      </div>
    </div>
  );
};
