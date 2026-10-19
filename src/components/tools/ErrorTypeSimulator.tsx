import React, { useState } from 'react';
import { ShieldCheck, AlertTriangle, ShieldAlert, Sparkles, Bell } from 'lucide-react';

export const ErrorTypeSimulator: React.FC = () => {
  const [actualH0, setActualH0] = useState<'benar' | 'salah'>('benar');
  const [researcherDecision, setResearcherDecision] = useState<'terima' | 'tolak'>('tolak');

  let outcomeType: 'correct_accept' | 'type_1' | 'type_2' | 'correct_reject' = 'type_1';
  if (actualH0 === 'benar' && researcherDecision === 'terima') outcomeType = 'correct_accept';
  else if (actualH0 === 'benar' && researcherDecision === 'tolak') outcomeType = 'type_1';
  else if (actualH0 === 'salah' && researcherDecision === 'terima') outcomeType = 'type_2';
  else outcomeType = 'correct_reject';

  const outcomeData = {
    type_1: {
      status: 'KESALAHAN TIPE I (Type I Error / α)',
      isError: true,
      color: 'border-rose-500 bg-rose-50/70 dark:bg-rose-950/30 text-rose-900 dark:text-rose-200',
      badgeColor: 'bg-rose-100 text-rose-700 dark:bg-rose-900/60 dark:text-rose-200',
      symbol: 'Peluang Terjadi = α (Alpha)',
      icon: <AlertTriangle className="w-8 h-8 text-rose-500" />,
      definition: 'Peneliti MENOLAK hipotesis nol (H0) padahal H0 sebenarnya BENAR di dunia nyata.',
      consequence: 'Klaim palsu (False Positive). Peneliti mengklaim menemukan perbedaan atau algoritma baru lebih hebat, padahal sebenarnya performanya sama saja.',
      analogy: 'Alarm kebakaran berbunyi kencang meraung-raung, padahal gedung TIDAK ada api sama sekali (False Alarm).'
    },
    type_2: {
      status: 'KESALAHAN TIPE II (Type II Error / β)',
      isError: true,
      color: 'border-amber-500 bg-amber-50/70 dark:bg-amber-950/30 text-amber-900 dark:text-amber-200',
      badgeColor: 'bg-amber-100 text-amber-700 dark:bg-amber-900/60 dark:text-amber-200',
      symbol: 'Peluang Terjadi = β (Beta)',
      icon: <ShieldAlert className="w-8 h-8 text-amber-500" />,
      definition: 'Peneliti MENERIMA hipotesis nol (H0) padahal H0 sebenarnya SALAH di dunia nyata.',
      consequence: 'Gagal deteksi (False Negative). Peneliti gagal mendeteksi adanya efek nyata atau kegagalan sistem penting.',
      analogy: 'Gedung sedang terbakar api sungguhan, tapi alarm kebakaran tetap DIAM MEMBISU (Missed Detection).'
    },
    correct_accept: {
      status: 'KEPUTUSAN BENAR (Tepat Menerima)',
      isError: false,
      color: 'border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-200',
      badgeColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-200',
      symbol: 'Tingkat Kepercayaan = 1 - α (misal 95%)',
      icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
      definition: 'H0 memang benar di populasi, dan peneliti dengan tepat mengambil keputusan untuk menerima H0.',
      consequence: 'Peneliti secara tepat menyatakan tidak ada efek/perbedaan, sesuai fakta kenyataan.',
      analogy: 'Tidak ada api, dan alarm tetap diam dengan tenang.'
    },
    correct_reject: {
      status: 'KEPUTUSAN BENAR (Kekuatan Uji / Power of Test)',
      isError: false,
      color: 'border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-200',
      badgeColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-200',
      symbol: 'Power of the Test = 1 - β (misal 80%)',
      icon: <Sparkles className="w-8 h-8 text-emerald-500" />,
      definition: 'H0 memang salah di populasi, dan peneliti dengan tepat menolak H0 dan menerima hipotesis alternatif (H1).',
      consequence: 'Penemuan baru terbukti valid secara ilmiah dengan daya uji yang kuat.',
      analogy: 'Ada api sungguhan, dan sistem alarm mendeteksi kebakaran secara akurat.'
    }
  }[outcomeType];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-xs uppercase tracking-wider">
            <Bell className="w-4 h-4" />
            <span>Alat Interaktif #7</span>
          </div>
          <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-slate-100 mt-1">
            Simulator Tipe Error Uji Hipotesis (Tipe I & Tipe II)
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Eksplorasi interaktif hubungan antara kondisi fakta sebenarnya di populasi dan keputusan peneliti
          </p>
        </div>
      </div>

      {/* Interactive Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Toggle 1: Actual State */}
        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40">
          <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-2">
            1. Kondisi Sebenarnya di Populasi (Kebenaran Objektif):
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setActualH0('benar')}
              className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                actualH0 === 'benar'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
              }`}
            >
              H0 Sebenarnya BENAR
            </button>
            <button
              onClick={() => setActualH0('salah')}
              className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                actualH0 === 'salah'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
              }`}
            >
              H0 Sebenarnya SALAH
            </button>
          </div>
        </div>

        {/* Toggle 2: Researcher's Decision */}
        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40">
          <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-2">
            2. Keputusan yang Diambil Peneliti:
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setResearcherDecision('terima')}
              className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                researcherDecision === 'terima'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
              }`}
            >
              Menerima H0
            </button>
            <button
              onClick={() => setResearcherDecision('tolak')}
              className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                researcherDecision === 'tolak'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
              }`}
            >
              Menolak H0
            </button>
          </div>
        </div>
      </div>

      {/* Simulated Outcome Display */}
      <div className={`p-6 rounded-xl border-2 ${outcomeData.color} transition-all duration-300`}>
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            {outcomeData.icon}
            <div>
              <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full ${outcomeData.badgeColor}`}>
                {outcomeData.symbol}
              </span>
              <h4 className="font-heading font-extrabold text-xl mt-1">
                {outcomeData.status}
              </h4>
            </div>
          </div>
        </div>

        <div className="space-y-2 text-xs sm:text-sm mt-3">
          <p className="font-medium leading-relaxed">{outcomeData.definition}</p>
          <p className="leading-relaxed opacity-90">{outcomeData.consequence}</p>

          <div className="p-3 bg-white/80 dark:bg-slate-900/80 rounded-lg mt-3 border border-current/20 text-xs">
            <strong className="block font-semibold mb-0.5">Analogi Alarm Kebakaran:</strong>
            <span className="italic font-mono">"{outcomeData.analogy}"</span>
          </div>
        </div>
      </div>
    </div>
  );
};
