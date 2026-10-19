import React, { useState } from 'react';
import { Layout, Printer } from 'lucide-react';

interface ChecklistGroup {
  groupTitle: string;
  items: { id: string; label: string; note: string }[];
}

const posterGroups: ChecklistGroup[] = [
  {
    groupTitle: '1. Tiga Pedoman Desain Utama (Slide 77)',
    items: [
      { id: 'p1', label: 'Let it breathe (Beri Ruang Kosong / Whitespace)', note: 'Jangan penuhi seluruh poster dengan teks rapat; beri margin dan spasi antar-kolom agar pembaca nyaman.' },
      { id: 'p2', label: 'Keep it lined up (Jaga Perataan / Grid Alignment)', note: 'Seluruh judul, gambar, dan tepi kolom sejajar rapi mengikuti struktur grid 3 atau 4 kolom.' },
      { id: 'p3', label: 'Tell the reader where to go (Alur Navigasi Terarah)', note: 'Alur baca visual tertata jelas dari kiri ke kanan, lalu atas ke bawah.' }
    ]
  },
  {
    groupTitle: '2. Panduan Panjang Bagian & Kata (Slide 78-79)',
    items: [
      { id: 'p4', label: 'Title (Judul): Maksimum 1 - 2 baris', note: 'Font besar terbaca jelas dari jarak 3-5 meter.' },
      { id: 'p5', label: 'Introduction: Sekitar 200 kata', note: 'Memuat latar belakang singkat dan problem statement.' },
      { id: 'p6', label: 'Aims / Objectives: Kurang dari 100 kata', note: 'Bila dicantumkan terpisah, tuliskan sasaran penelitian secara lugas.' },
      { id: 'p7', label: 'Materials & Methods: Sekitar 200 kata', note: 'Gunakan diagram alur arsitektur untuk menghemat kata narasi.' },
      { id: 'p8', label: 'Results: Sekitar 200 kata (di luar teks caption grafik)', note: 'Didominasi visualisasi grafik/tabel yang bersih.' },
      { id: 'p9', label: 'Conclusions: Sekitar 200 kata', note: 'Merangkum temuan pokok yang menjawab tujuan penelitian.' },
      { id: 'p10', label: 'Acknowledgements: Kurang dari 100 kata', note: 'Gunakan ukuran font kecil untuk ucapan terima kasih mitra/donatur.' },
      { id: 'p11', label: 'References: Sekitar 5 - 10 sitasi kunci', note: 'Modul menyebut menggunakan font sangat kecil di kaki poster.' }
    ]
  },
  {
    groupTitle: '3. Tipografi, Warna, dan Gambar (Slide 79-80)',
    items: [
      { id: 'p12', label: 'Maksimum 2 - 3 font yang saling melengkapi', note: 'Misal sans-serif untuk judul dan serif untuk narasi bacaan.' },
      { id: 'p13', label: 'Hindari WordArt, drop shadows, gradient norak, dan font Comic Sans', note: 'Patuhi standar estetika ilmiah akademis.' },
      { id: 'p14', label: 'Latar belakang warna solid & kontras teks tinggi', note: 'Pertimbangkan kemudahan membaca bagi pengunjung yang memiliki gangguan penglihatan warna.' },
      { id: 'p15', label: 'Gambar diimpor melalui File > Place/Import (BUKAN copy-paste)', note: 'Gunakan format PNG, TIFF, atau JPG resolusi tinggi (300 DPI) agar tidak pecah saat dicetak.' },
      { id: 'p16', label: 'Jaga proporsi gambar saat resize (Gunakan tombol Shift)', note: 'Jangan biarkan gambar atau diagram menjadi gepeng/terdistorsi.' }
    ]
  },
  {
    groupTitle: '4. Pemeriksaan, Cetak, dan Presentasi (Slide 80)',
    items: [
      { id: 'p17', label: 'Cetak draf kecil ukuran A4 untuk mengecek warna', note: 'Warna monitor RGB sering berbeda dengan keluaran cetak tinta CMYK.' },
      { id: 'p18', label: 'Ekspor naskah ke PDF resolusi tinggi & minta kritik sejawat', note: 'Periksa typo dan susunan ejaan sebelum cetak final skala besar.' },
      { id: 'p19', label: 'Pilih bahan kertas Semiglossy (Hindari Ultraglossy/Laminasi)', note: 'Semiglossy menampilkan warna cerah tanpa memantulkan kilau lampu sorot ruangan.' },
      { id: 'p20', label: 'Lindungi poster dalam tabung plastik selama bepergian', note: 'Siapkan kartu nama dan kenakan pakaian formal.' },
      { id: 'p21', label: 'Latih presentasi ringkas 3 sampai 5 menit', note: 'Sesi poster adalah percakapan dua arah rileks; siapkan elevator pitch ringkas.' }
    ]
  }
];

export const PosterChecklist: React.FC = () => {
  const [completed, setCompleted] = useState<Record<string, boolean>>({
    p1: true,
    p2: true,
    p3: true,
    p12: true,
    p13: true,
    p19: true
  });

  const toggleItem = (id: string) => {
    setCompleted((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const totalItems = posterGroups.reduce((acc, g) => acc + g.items.length, 0);
  const totalCompleted = Object.values(completed).filter(Boolean).length;
  const percentage = Math.round((totalCompleted / totalItems) * 100);

  const handleSelectAll = () => {
    const all: Record<string, boolean> = {};
    posterGroups.forEach((g) => g.items.forEach((item) => (all[item.id] = true)));
    setCompleted(all);
  };

  const handleReset = () => {
    setCompleted({});
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-6 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-[#171A21] shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 no-print">
        <div>
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-xs uppercase tracking-wider">
            <Layout className="w-4 h-4" />
            <span>Alat Interaktif #12</span>
          </div>
          <h3 className="font-heading font-bold text-xl text-stone-900 dark:text-stone-100 mt-1">
            Checklist Poster Ilmiah & Kesiapan Konferensi
          </h3>
          <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
            Daftar periksa lengkap komponen poster, batasan jumlah kata, aturan tipografi, dan persiapan presentasi
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="px-3 py-1.5 rounded-lg border border-stone-200 dark:border-stone-800 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Cetak / PDF</span>
          </button>
          <button
            onClick={handleSelectAll}
            className="px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs font-semibold cursor-pointer"
          >
            Pilih Semua
          </button>
          <button
            onClick={handleReset}
            className="px-3 py-1.5 rounded-lg border border-stone-200 dark:border-stone-800 text-stone-500 hover:bg-stone-100 text-xs cursor-pointer"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Progress Bar Header */}
      <div className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/40 mb-6">
        <div className="flex items-center justify-between text-xs font-semibold mb-2">
          <span className="text-stone-700 dark:text-stone-300">Kesiapan Poster Ilmiah:</span>
          <span className="font-mono text-indigo-600 dark:text-indigo-400 font-bold">
            {totalCompleted} dari {totalItems} Butir Selesai ({percentage}%)
          </span>
        </div>
        <div className="w-full h-2.5 rounded-full bg-stone-200 dark:bg-stone-800 overflow-hidden">
          <div
            className="h-full bg-indigo-600 transition-all duration-300 rounded-full"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Checklist Sections */}
      <div className="space-y-6">
        {posterGroups.map((group, gIdx) => (
          <div key={gIdx} className="space-y-2">
            <h4 className="font-heading font-bold text-sm text-stone-900 dark:text-stone-100 pb-1 border-b border-stone-200 dark:border-stone-800">
              {group.groupTitle}
            </h4>
            <div className="space-y-2">
              {group.items.map((item) => {
                const isChecked = !!completed[item.id];
                return (
                  <label
                    key={item.id}
                    className={`flex items-start gap-3 p-3 rounded-xl border transition-colors cursor-pointer ${
                      isChecked
                        ? 'border-emerald-200 dark:border-emerald-950 bg-emerald-50/40 dark:bg-emerald-950/20'
                        : 'border-stone-200 dark:border-stone-800 bg-white dark:bg-[#171A21] hover:bg-stone-50'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleItem(item.id)}
                      className="mt-1 rounded text-indigo-600 focus:ring-indigo-500 w-4 h-4 cursor-pointer"
                    />
                    <div className="flex-1 text-xs">
                      <div className={`font-semibold ${isChecked ? 'text-emerald-900 dark:text-emerald-200' : 'text-stone-800 dark:text-stone-200'}`}>
                        {item.label}
                      </div>
                      <div className="text-[11px] text-stone-500 dark:text-stone-400 mt-0.5 leading-relaxed">
                        {item.note}
                      </div>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
