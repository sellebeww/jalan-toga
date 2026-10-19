import React, { useState } from 'react';
import { BarChart3, LineChart, PieChart, AlertTriangle, CheckCircle2, TrendingUp, Layers } from 'lucide-react';

interface ChartRecommendation {
  type: string;
  bestFor: string;
  icon: React.ReactNode;
  characteristics: string;
  misleadingWarning: string;
  exampleData: string;
}

export const ChartSelector: React.FC = () => {
  const [selectedGoal, setSelectedGoal] = useState<string>('trend');

  const chartMap: Record<string, ChartRecommendation> = {
    trend: {
      type: 'Diagram Garis (Line Chart)',
      bestFor: 'Melihat perubahan nilai secara berurutan waktu atau beban komputasi bertahap',
      icon: <LineChart className="w-6 h-6 text-indigo-500" />,
      characteristics: 'Sumbu X mewakili urutan kontinu (misal beban data 1.000, 10.000, 100.000) dan sumbu Y mewakili metrik kuantitas kontinu (latensi milidetik).',
      misleadingWarning: 'Peringatan modul: Bila hanya interval tertentu yang dipilih (misal 10.000-60.000), jelaskan cakupan interval tersebut secara jujur agar pembaca tidak salah menilai pola keseluruhan.',
      exampleData: 'Perubahan waktu eksekusi algoritma C4.5 seiring pertambahan ukuran dataset.'
    },
    compare: {
      type: 'Diagram Batang (Bar Chart / Combined Bar)',
      bestFor: 'Membandingkan nilai kuantitas diskrit antar-kelompok atau antar-kategori sistem',
      icon: <BarChart3 className="w-6 h-6 text-emerald-500" />,
      characteristics: 'Batang vertikal atau horizontal memisahkan kategori diskrit yang jelas; tinggi batang berbanding lurus dengan nilai.',
      misleadingWarning: 'Peringatan bahaya: JANGAN memotong sumbu Y! Jika sumbu Y dimulai dari angka 90 bukan 0, selisih 1% akan terlihat seperti perbedaan 10 kali lipat di mata pembaca.',
      exampleData: 'Perbandingan akurasi rata-rata antara Algoritma A, Algoritma B, dan Algoritma C.'
    },
    composition: {
      type: 'Diagram Lingkaran / Doughnut (Pie / Doughnut Chart)',
      bestFor: 'Memperlihatkan proporsi komposisi bagian terhadap keseluruhan 100%',
      icon: <PieChart className="w-6 h-6 text-amber-500" />,
      characteristics: 'Setiap juring mewakili persentase dari total populasi; seluruh juring harus berjumlah tepat 100%.',
      misleadingWarning: 'Peringatan: Hindari efek 3D miring yang mendistorsi sudut juring depan. Jangan gunakan diagram lingkaran jika kategori lebih dari 6 irisan (sulit dibedakan).',
      exampleData: 'Proporsi sistem operasi yang digunakan mahasiswa pengakses portal kampus (Windows, Android, iOS, macOS).'
    },
    distribution: {
      type: 'Histogram',
      bestFor: 'Menunjukkan bentuk distribusi data numerik yang dikelompokkan ke dalam rentang interval',
      icon: <Layers className="w-6 h-6 text-teal-500" />,
      characteristics: 'Batang-batang histogram saling menempel rapat tanpa celah karena mewakili variabel kontinu yang dikelompokkan dalam bin interval.',
      misleadingWarning: 'Histogram berbeda dari diagram batang biasa! Pemilihan lebar interval (bin width) yang terlalu lebar atau terlalu sempit dapat menyembunyikan puncak distribusi sebenarnya.',
      exampleData: 'Distribusi nilai ujian kuis metodologi riset dari 100 mahasiswa (interval 60-70, 71-80, 81-90, 91-100).'
    },
    correlation: {
      type: 'Scatter Diagram (Diagram Pencar)',
      bestFor: 'Menyelidiki pola hubungan atau korelasi antara dua variabel numerik kontinu',
      icon: <TrendingUp className="w-6 h-6 text-purple-500" />,
      characteristics: 'Setiap titik mewakili sepasang nilai (X, Y) dari satu subjek amatan.',
      misleadingWarning: 'Korelasi tidak menjamin kausalitas! Adanya garis tren linear pada scatter plot tidak membuktikan variabel X adalah penyebab langsung variabel Y.',
      exampleData: 'Sebaran titik antara frekuensi pencarian informasi dan IPK mahasiswa.'
    }
  };

  const current = chartMap[selectedGoal];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-xs uppercase tracking-wider">
            <BarChart3 className="w-4 h-4" />
            <span>Alat Interaktif #10</span>
          </div>
          <h3 className="font-heading font-bold text-xl text-stone-900 dark:text-stone-100 mt-1">
            Pemilih Grafik yang Tepat & Peringatan Misleading
          </h3>
          <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
            Panduan metodologis memilih jenis visualisasi data numeris yang valid dan tidak menyesatkan pembaca
          </p>
        </div>
      </div>

      {/* Goal Selector Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6">
        <button
          onClick={() => setSelectedGoal('trend')}
          className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
            selectedGoal === 'trend'
              ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200 ring-2 ring-indigo-400'
              : 'border-stone-200 dark:border-stone-800 hover:border-stone-300'
          }`}
        >
          <div className="font-bold text-xs mb-1">Melihat Tren</div>
          <div className="text-[10px] text-stone-500 line-clamp-2">Perubahan waktu / beban berurutan</div>
        </button>

        <button
          onClick={() => setSelectedGoal('compare')}
          className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
            selectedGoal === 'compare'
              ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200 ring-2 ring-indigo-400'
              : 'border-stone-200 dark:border-stone-800 hover:border-stone-300'
          }`}
        >
          <div className="font-bold text-xs mb-1">Bandingkan Kategori</div>
          <div className="text-[10px] text-stone-500 line-clamp-2">Perbedaan performa antar sistem</div>
        </button>

        <button
          onClick={() => setSelectedGoal('composition')}
          className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
            selectedGoal === 'composition'
              ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200 ring-2 ring-indigo-400'
              : 'border-stone-200 dark:border-stone-800 hover:border-stone-300'
          }`}
        >
          <div className="font-bold text-xs mb-1">Komposisi Bagian</div>
          <div className="text-[10px] text-stone-500 line-clamp-2">Proporsi dari total 100%</div>
        </button>

        <button
          onClick={() => setSelectedGoal('distribution')}
          className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
            selectedGoal === 'distribution'
              ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200 ring-2 ring-indigo-400'
              : 'border-stone-200 dark:border-stone-800 hover:border-stone-300'
          }`}
        >
          <div className="font-bold text-xs mb-1">Distribusi Data</div>
          <div className="text-[10px] text-stone-500 line-clamp-2">Frekuensi kelompok angka</div>
        </button>

        <button
          onClick={() => setSelectedGoal('correlation')}
          className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
            selectedGoal === 'correlation'
              ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200 ring-2 ring-indigo-400'
              : 'border-stone-200 dark:border-stone-800 hover:border-stone-300'
          }`}
        >
          <div className="font-bold text-xs mb-1">Hubungan Nilai</div>
          <div className="text-[10px] text-stone-500 line-clamp-2">Korelasi pasangan variabel</div>
        </button>
      </div>

      {/* Selected Recommendation Detail */}
      <div className="p-5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/30 space-y-4">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-stone-800 shadow-xs">
            {current.icon}
          </div>
          <div>
            <span className="text-[11px] font-mono uppercase text-indigo-600 dark:text-indigo-400 font-bold block mb-0.5">
              Rekomendasi Visualisasi Terbaik
            </span>
            <h4 className="font-heading font-extrabold text-lg text-stone-900 dark:text-stone-100">
              {current.type}
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1">
              {current.bestFor}
            </p>
          </div>
        </div>

        <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-stone-200 dark:border-stone-800 text-xs">
          <span className="font-bold text-stone-800 dark:text-stone-200 block mb-1">
            Karakteristik Penyajian:
          </span>
          <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
            {current.characteristics}
          </p>
          <div className="mt-2 text-[11px] text-stone-500">
            <strong>Contoh: </strong> {current.exampleData}
          </div>
        </div>

        {/* Misleading Warning Banner */}
        <div className="p-3.5 rounded-xl bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-900/50 text-xs text-orange-950 dark:text-orange-200 flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 text-orange-600 dark:text-orange-400 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-bold block mb-0.5">Awas Misleading Graph!</span>
            {current.misleadingWarning}
          </div>
        </div>
      </div>
    </div>
  );
};
