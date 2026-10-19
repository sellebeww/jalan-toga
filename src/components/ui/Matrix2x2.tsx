import React, { useState } from 'react';
import { AlertCircle, CheckCircle, ShieldAlert, Zap } from 'lucide-react';

export const ErrorMatrix2x2: React.FC = () => {
  const [selectedCell, setSelectedCell] = useState<'type1' | 'type2' | 'correct1' | 'correct2'>('type1');

  const cellDetails = {
    type1: {
      title: 'Kesalahan Tipe I (Type I Error / α)',
      condition: 'Kondisi Sebenarnya: H0 BENAR',
      decision: 'Keputusan Peneliti: MENOLAK H0',
      badge: 'False Positive / Salah Menolak',
      badgeColor: 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300',
      description: 'Peneliti menyimpulkan ada perbedaan nyata atau efek baru, padahal pada kenyataan sebenarnya tidak ada perbedaan sama sekali (H0 benar). Tingkat probabilitasnya adalah α (taraf signifikansi, misal 0,05).',
      alarmAnalogy: 'Alarm kebakaran berbunyi kencang meraung-raung, padahal di dalam gedung sama sekali TIDAK ada api (False Alarm). Seisi gedung panik padahal aman!'
    },
    correct1: {
      title: 'Keputusan Benar (1 - α)',
      condition: 'Kondisi Sebenarnya: H0 BENAR',
      decision: 'Keputusan Peneliti: MENERIMA H0',
      badge: 'True Negative / Tepat Menerima',
      badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300',
      description: 'Peneliti menerima H0 saat H0 memang benar di dunia nyata. Probabilitas keberhasilan keputusan ini adalah 1 - α (Tingkat Kepercayaan, misal 95%).',
      alarmAnalogy: 'Tidak ada api, dan alarm tetap hening dengan benar.'
    },
    type2: {
      title: 'Kesalahan Tipe II (Type II Error / β)',
      condition: 'Kondisi Sebenarnya: H0 SALAH',
      decision: 'Keputusan Peneliti: MENERIMA H0',
      badge: 'False Negative / Salah Menerima',
      badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300',
      description: 'Peneliti menerima H0 (gagal mendeteksi efek/perbedaan) padahal H0 tersebut sebenarnya salah di dunia nyata. Probabilitasnya disimbolkan dengan β.',
      alarmAnalogy: 'Gedung sedang dilalap api membara, tapi alarm kebakaran tetap DIAM HENING (Missed Detection). Akibatnya penghuni gedung tidak tahu adanya bahaya nyata!'
    },
    correct2: {
      title: 'Keputusan Benar (1 - β / Power of Test)',
      condition: 'Kondisi Sebenarnya: H0 SALAH',
      decision: 'Keputusan Peneliti: MENOLAK H0',
      badge: 'True Positive / Kekuatan Uji',
      badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300',
      description: 'Peneliti berhasil menolak H0 saat H0 memang salah di dunia nyata. Probabilitas keputusan benar ini disebut Kekuatan Uji Statistik (Power of the Test: 1 - β).',
      alarmAnalogy: 'Ada api sungguhan, dan alarm berbunyi keras mendeteksi kebakaran secara tepat.'
    }
  };

  const active = cellDetails[selectedCell];

  return (
    <div className="my-6 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
      <div className="mb-4">
        <h4 className="font-heading font-bold text-slate-900 dark:text-slate-100 text-base">
          Matriks Interaktif 2×2: Types of Error
        </h4>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Klik salah satu dari 4 kotak matriks untuk memeriksa penjelasan dan analogi alarm
        </p>
      </div>

      {/* 2x2 Matrix Grid */}
      <div className="overflow-x-auto mb-4">
        <div className="min-w-[420px]">
          <div className="grid grid-cols-[140px_1fr_1fr] gap-2 text-xs">
            {/* Header row */}
            <div className="p-2 font-semibold text-slate-400">Keputusan Peneliti</div>
            <div className="p-2 font-bold text-center bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-800 dark:text-slate-200">
              Kondisi Sebenarnya: H0 BENAR
            </div>
            <div className="p-2 font-bold text-center bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-800 dark:text-slate-200">
              Kondisi Sebenarnya: H0 SALAH
            </div>

            {/* Row 1: Terima H0 */}
            <div className="p-3 font-semibold flex items-center bg-slate-50 dark:bg-slate-800/40 rounded-lg text-slate-700 dark:text-slate-300">
              Menerima H0
            </div>
            <button
              onClick={() => setSelectedCell('correct1')}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                selectedCell === 'correct1'
                  ? 'border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/40 ring-2 ring-emerald-400'
                  : 'border-slate-200 dark:border-slate-800 hover:border-emerald-300'
              }`}
            >
              <div className="flex items-center justify-between font-bold text-emerald-700 dark:text-emerald-400 mb-1">
                <span>Keputusan Benar</span>
                <CheckCircle className="w-4 h-4" />
              </div>
              <div className="text-[11px] text-slate-600 dark:text-slate-400 font-mono">
                Peluang = 1 - α
              </div>
            </button>

            <button
              onClick={() => setSelectedCell('type2')}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                selectedCell === 'type2'
                  ? 'border-amber-500 bg-amber-50/80 dark:bg-amber-950/40 ring-2 ring-amber-400'
                  : 'border-slate-200 dark:border-slate-800 hover:border-amber-300'
              }`}
            >
              <div className="flex items-center justify-between font-bold text-amber-700 dark:text-amber-400 mb-1">
                <span>KESALAHAN TIPE II</span>
                <ShieldAlert className="w-4 h-4" />
              </div>
              <div className="text-[11px] text-slate-600 dark:text-slate-400 font-mono">
                Peluang = β
              </div>
            </button>

            {/* Row 2: Tolak H0 */}
            <div className="p-3 font-semibold flex items-center bg-slate-50 dark:bg-slate-800/40 rounded-lg text-slate-700 dark:text-slate-300">
              Menolak H0
            </div>
            <button
              onClick={() => setSelectedCell('type1')}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                selectedCell === 'type1'
                  ? 'border-rose-500 bg-rose-50/80 dark:bg-rose-950/40 ring-2 ring-rose-400'
                  : 'border-slate-200 dark:border-slate-800 hover:border-rose-300'
              }`}
            >
              <div className="flex items-center justify-between font-bold text-rose-700 dark:text-rose-400 mb-1">
                <span>KESALAHAN TIPE I</span>
                <AlertCircle className="w-4 h-4" />
              </div>
              <div className="text-[11px] text-slate-600 dark:text-slate-400 font-mono">
                Peluang = α (Signifikansi)
              </div>
            </button>

            <button
              onClick={() => setSelectedCell('correct2')}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                selectedCell === 'correct2'
                  ? 'border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/40 ring-2 ring-emerald-400'
                  : 'border-slate-200 dark:border-slate-800 hover:border-emerald-300'
              }`}
            >
              <div className="flex items-center justify-between font-bold text-emerald-700 dark:text-emerald-400 mb-1">
                <span>Keputusan Benar</span>
                <Zap className="w-4 h-4" />
              </div>
              <div className="text-[11px] text-slate-600 dark:text-slate-400 font-mono">
                Peluang = 1 - β (Power)
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Selected Cell Detailed Explanation */}
      <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/50 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h5 className="font-heading font-bold text-sm text-slate-900 dark:text-slate-100">
            {active.title}
          </h5>
          <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${active.badgeColor}`}>
            {active.badge}
          </span>
        </div>

        <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-600 dark:text-slate-400">
          <span>{active.condition}</span>
          <span>·</span>
          <span>{active.decision}</span>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {active.description}
        </p>

        <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/80">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 block mb-0.5">
            Analogi Buatan (Sistem Alarm Kebakaran):
          </span>
          <p className="text-xs text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 italic">
            "{active.alarmAnalogy}"
          </p>
        </div>
      </div>
    </div>
  );
};
