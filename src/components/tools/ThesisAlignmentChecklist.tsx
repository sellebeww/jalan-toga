import React, { useState } from 'react';
import { CheckSquare, Sparkles, AlertCircle, CheckCircle2, RotateCcw } from 'lucide-react';

export const ThesisAlignmentChecklist: React.FC = () => {
  const [masalah, setMasalah] = useState<string>(
    '1. Berapa lama waktu yang dibutuhkan mahasiswa dalam menemukan informasi kegiatan pada portal kampus saat ini?\n2. Sejauh mana penerapan inverted index mampu mempercepat pencarian data kegiatan?'
  );

  const [tujuan, setTujuan] = useState<string>(
    '1. Mengukur waktu respon pencarian informasi kegiatan pada portal kampus lama.\n2. Menganalisis peningkatan kecepatan dan akurasi pencarian setelah penerapan inverted index.'
  );

  const [data, setData] = useState<string>(
    '1. Log waktu eksekusi query (milidetik) pada dataset 1.000, 10.000, dan 100.000 kegiatan.\n2. Skor kuesioner skala Likert kepuasan mahasiswa pengguna portal.'
  );

  const [kesimpulan, setKesimpulan] = useState<string>(
    '1. Waktu respon portal lama rata-rata adalah 4,2 detik.\n2. Penerapan inverted index terbukti secara signifikan menurunkan waktu respon menjadi 0,6 detik (p < 0,01) dan memperoleh skor kepuasan 70%.'
  );

  const [checks, setChecks] = useState<Record<string, boolean>>({
    c1: true,
    c2: true,
    c3: true,
    c4: false,
    c5: true
  });

  const toggleCheck = (id: string) => {
    setChecks((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleFillExample = () => {
    setMasalah(
      '1. Berapa lama waktu respon pencarian info kegiatan di portal kampus saat ini?\n2. Apakah penambahan inverted index mempercepat waktu respon secara signifikan?'
    );
    setTujuan(
      '1. Mengukur waktu respon pencarian pada portal kampus lama.\n2. Menganalisis percepatan waktu respon setelah penambahan inverted index.'
    );
    setData(
      '1. Log pengukuran milidetik pada beban data uji 1.000 s/d 100.000 rekaman.\n2. Uji paired t-test signifikansi statistik.'
    );
    setKesimpulan(
      '1. Portal lama membutuhkan rata-rata 4,2 detik.\n2. Penambahan inverted index mempercepat respon menjadi 0,6 detik (terbukti signifikan p < 0,01).'
    );
    setChecks({ c1: true, c2: true, c3: true, c4: true, c5: true });
  };

  const handleReset = () => {
    setMasalah('');
    setTujuan('');
    setData('');
    setKesimpulan('');
    setChecks({ c1: false, c2: false, c3: false, c4: false, c5: false });
  };

  const completedChecksCount = Object.values(checks).filter(Boolean).length;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-xs uppercase tracking-wider">
            <CheckSquare className="w-4 h-4" />
            <span>Alat Interaktif #11</span>
          </div>
          <h3 className="font-heading font-bold text-xl text-stone-900 dark:text-stone-100 mt-1">
            Checklist Keselarasan Skripsi (Golden Alignment Rule)
          </h3>
          <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
            Aturan Emas: Masalah ↔ Tujuan ↔ Data ↔ Kesimpulan harus tertata selaras tanpa ada bagian yang melenceng
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleFillExample}
            className="px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Isi Contoh Portal</span>
          </button>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-lg border border-stone-200 dark:border-stone-800 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-500 cursor-pointer text-xs"
            title="Kosongkan"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 4 Interactive Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="p-3.5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/30">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold font-heading text-indigo-600 dark:text-indigo-400">
              1. RUMUSAN MASALAH
            </span>
            <span className="text-[10px] text-stone-400 font-mono">Bab 1</span>
          </div>
          <textarea
            rows={6}
            value={masalah}
            onChange={(e) => setMasalah(e.target.value)}
            placeholder="Ketik butir rumusan masalah penelitian Anda..."
            className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-mono text-slate-800 dark:text-slate-200 leading-relaxed focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="p-3.5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/30">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold font-heading text-indigo-600 dark:text-indigo-400">
              2. TUJUAN PENELITIAN
            </span>
            <span className="text-[10px] text-stone-400 font-mono">Bab 1</span>
          </div>
          <textarea
            rows={6}
            value={tujuan}
            onChange={(e) => setTujuan(e.target.value)}
            placeholder="Ketik butir tujuan penelitian yang selaras..."
            className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-mono text-slate-800 dark:text-slate-200 leading-relaxed focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="p-3.5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/30">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold font-heading text-indigo-600 dark:text-indigo-400">
              3. DATA & PENGUJIAN
            </span>
            <span className="text-[10px] text-stone-400 font-mono">Bab 3 & 4</span>
          </div>
          <textarea
            rows={6}
            value={data}
            onChange={(e) => setData(e.target.value)}
            placeholder="Data apa yang dikumpulkan untuk membuktikan tujuan..."
            className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-mono text-slate-800 dark:text-slate-200 leading-relaxed focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="p-3.5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/30">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold font-heading text-indigo-600 dark:text-indigo-400">
              4. KESIMPULAN AKHIR
            </span>
            <span className="text-[10px] text-stone-400 font-mono">Bab 5</span>
          </div>
          <textarea
            rows={6}
            value={kesimpulan}
            onChange={(e) => setKesimpulan(e.target.value)}
            placeholder="Kesimpulan yang menjawab rumusan masalah secara langsung..."
            className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-mono text-slate-800 dark:text-slate-200 leading-relaxed focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Reflection Checklist Questions */}
      <div className="p-5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50/60 dark:bg-stone-900/40">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-heading font-bold text-sm text-stone-900 dark:text-stone-100">
            Daftar Uji Refleksi Keselarasan (Self-Audit Checklist)
          </h4>
          <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">
            {completedChecksCount} dari 5 Terpenuhi
          </span>
        </div>

        <div className="space-y-2 text-xs">
          {[
            { id: 'c1', text: 'Jumlah butir tujuan penelitian tepat sama dan menjawab langsung butir rumusan masalah.' },
            { id: 'c2', text: 'Setiap variabel yang disebutkan di rumusan masalah memiliki instrumen pengambil data yang jelas di kolom Data.' },
            { id: 'c3', text: 'Kesimpulan akhir menjawab rumusan masalah secara tuntas menggunakan bukti angka/fakta data yang ada.' },
            { id: 'c4', text: 'Tidak ada klaim kesimpulan baru di Bab 5 yang tidak pernah diuji datanya di Bab 4 (bebas overgeneralization).' },
            { id: 'c5', text: 'Metodologi dan instrumen yang digunakan relevan untuk menghasilkan data yang dibutuhkan.' }
          ].map((item) => (
            <label
              key={item.id}
              className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-white dark:hover:bg-[#171A21] cursor-pointer transition-colors"
            >
              <input
                type="checkbox"
                checked={checks[item.id] || false}
                onChange={() => toggleCheck(item.id)}
                className="mt-0.5 rounded text-indigo-600 focus:ring-indigo-500 w-4 h-4 cursor-pointer"
              />
              <span className={checks[item.id] ? 'text-stone-900 dark:text-stone-100 font-medium' : 'text-stone-500'}>
                {item.text}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
