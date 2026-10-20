import React, { lazy } from 'react';
import {
  Award,
  BookText,
  CalendarClock,
  ClipboardCheck,
  Compass,
  FileText,
  Flag,
  GraduationCap,
  HeartHandshake,
  Home,
  KanbanSquare,
  Library,
  Lightbulb,
  MessagesSquare,
  Mic,
  Route as RouteIcon,
  Ruler,
  Settings,
  Sparkles,
  SpellCheck,
  Timer,
  Wrench
} from 'lucide-react';
import type { NavGroup } from '../pages/pageTypes';

export interface AppRoute {
  path: string;
  title: string;
  desc: string;
  group: NavGroup;
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean | 'true' }>;
  /** tampilkan di navigasi */
  nav: boolean;
  component: React.LazyExoticComponent<React.ComponentType>;
}

const Beranda = lazy(() => import('../pages/Beranda'));
const Mulai = lazy(() => import('../pages/Mulai'));
const Roadmap = lazy(() => import('../pages/Roadmap'));
const Topik = lazy(() => import('../pages/Topik'));
const Judul = lazy(() => import('../pages/Judul'));
const RisetTopik = lazy(() => import('../pages/RisetTopik'));
const Metodologi = lazy(() => import('../pages/Metodologi'));
const Bab = lazy(() => import('../pages/Bab'));
const Referensi = lazy(() => import('../pages/Referensi'));
const Toolkit = lazy(() => import('../pages/Toolkit'));
const Fokus = lazy(() => import('../pages/Fokus'));
const Template = lazy(() => import('../pages/Template'));
const Bimbingan = lazy(() => import('../pages/Bimbingan'));
const Sidang = lazy(() => import('../pages/Sidang'));
const Administrasi = lazy(() => import('../pages/Administrasi'));
const Format = lazy(() => import('../pages/Format'));
const Mental = lazy(() => import('../pages/Mental'));
const Pencapaian = lazy(() => import('../pages/Pencapaian'));
const Estimasi = lazy(() => import('../pages/Estimasi'));
const Pengaturan = lazy(() => import('../pages/Pengaturan'));
const Tracker = lazy(() => import('../pages/Tracker'));
const Belajar = lazy(() => import('../pages/Belajar'));

export const routes: AppRoute[] = [
  { path: '/', title: 'Beranda', desc: 'Ringkasan perjalanan skripsimu dan langkah berikutnya.', group: 'Utama', icon: Home, nav: true, component: Beranda },
  { path: '/roadmap', title: 'Roadmap', desc: 'Peta perjalanan skripsi dari eksplorasi sampai wisuda, lengkap dengan jadwal dan checklist.', group: 'Utama', icon: RouteIcon, nav: true, component: Roadmap },
  { path: '/tracker', title: 'Tracker progres', desc: 'Pantau progres tiap bab, kanban tugas, target mingguan, dan deadline.', group: 'Utama', icon: KanbanSquare, nav: true, component: Tracker },
  { path: '/mulai', title: 'Atur profil', desc: 'Pilih jurusan, semester, dan status skripsimu untuk membuat roadmap personal.', group: 'Utama', icon: Flag, nav: false, component: Mulai },

  { path: '/topik', title: 'Cari & cek topik', desc: 'Generator ide topik, checklist kelayakan, dan rumus rumusan masalah.', group: 'Mulai skripsi', icon: Lightbulb, nav: true, component: Topik },
  { path: '/riset-topik', title: 'Uji topik dengan AI', desc: 'AI meriset penelitian serupa di web lalu menilai seberapa kuat topikmu.', group: 'Mulai skripsi', icon: Sparkles, nav: true, component: RisetTopik },
  { path: '/judul', title: 'Pemeriksa judul', desc: 'Galeri judul bagus vs buruk dan pemeriksa kualitas judul.', group: 'Mulai skripsi', icon: SpellCheck, nav: true, component: Judul },
  { path: '/metodologi', title: 'Pemilih metodologi', desc: 'Wizard pertanyaan untuk memilih pendekatan penelitian yang cocok.', group: 'Mulai skripsi', icon: Compass, nav: true, component: Metodologi },

  { path: '/bab', title: 'Panduan bab', desc: 'Panduan Bab 1–5 atau IMRAD: fungsi, subbab, kerangka, kesalahan umum, dan checklist.', group: 'Menulis', icon: BookText, nav: true, component: Bab },
  { path: '/referensi', title: 'Referensi & sitasi', desc: 'Simpan sumber, buat sitasi APA 7, IEEE, Harvard, dan cari jurnal.', group: 'Menulis', icon: Library, nav: true, component: Referensi },
  { path: '/toolkit', title: 'Toolkit penelitian', desc: 'Kalkulator sampel, pemilih uji statistik, dan penjelasan perangkat lunak.', group: 'Menulis', icon: Wrench, nav: true, component: Toolkit },
  { path: '/fokus', title: 'Mode fokus', desc: 'Pomodoro, target kata harian, dan streak menulis.', group: 'Menulis', icon: Timer, nav: true, component: Fokus },
  { path: '/template', title: 'Template & FAQ', desc: 'Template proposal, surat izin, kuesioner, lembar pengesahan, istilah, dan FAQ.', group: 'Menulis', icon: FileText, nav: true, component: Template },
  { path: '/format', title: 'Format penulisan', desc: 'Contekan format penulisan skripsi yang umum dipakai.', group: 'Menulis', icon: Ruler, nav: true, component: Format },

  { path: '/bimbingan', title: 'Log bimbingan', desc: 'Catat bimbingan, revisi, dan template pesan sopan ke dosen pembimbing.', group: 'Bimbingan & sidang', icon: MessagesSquare, nav: true, component: Bimbingan },
  { path: '/sidang', title: 'Simulasi sidang', desc: 'Bank pertanyaan penguji, latihan acak dengan timer, dan tips presentasi.', group: 'Bimbingan & sidang', icon: Mic, nav: true, component: Sidang },
  { path: '/administrasi', title: 'Administrasi kampus', desc: 'Checklist administrasi dari pengajuan judul sampai wisuda.', group: 'Bimbingan & sidang', icon: ClipboardCheck, nav: true, component: Administrasi },

  { path: '/mental', title: 'Dukungan mental', desc: 'Burnout, prokrastinasi, motivasi, dan tips menghadapi dosen sulit.', group: 'Diri sendiri', icon: HeartHandshake, nav: true, component: Mental },
  { path: '/estimasi', title: 'Estimasi waktu lulus', desc: 'Hitung perkiraan lulus dari kondisimu sekarang.', group: 'Diri sendiri', icon: CalendarClock, nav: true, component: Estimasi },
  { path: '/pencapaian', title: 'Pencapaian', desc: 'Level, badge, dan streak dari perjalananmu.', group: 'Diri sendiri', icon: Award, nav: true, component: Pencapaian },
  { path: '/belajar', title: 'Belajar metodologi', desc: 'Materi metodologi riset lengkap: modul, hafalan, latihan, dan alat (jalur TI).', group: 'Diri sendiri', icon: GraduationCap, nav: true, component: Belajar },
  { path: '/pengaturan', title: 'Pengaturan & data', desc: 'Tema, cadangan data, impor/ekspor, dan pengingat.', group: 'Diri sendiri', icon: Settings, nav: true, component: Pengaturan }
];

export const navGroups: NavGroup[] = ['Utama', 'Mulai skripsi', 'Menulis', 'Bimbingan & sidang', 'Diri sendiri'];

export function matchRoute(path: string): AppRoute | undefined {
  if (path === '/') return routes[0];
  // cocok berdasarkan segmen pertama: /bab/bab-1 -> /bab
  const first = '/' + (path.split('/').filter(Boolean)[0] ?? '');
  return routes.find((r) => r.path === first);
}
