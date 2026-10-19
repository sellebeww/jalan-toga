import { useState } from 'react';
import {
  ArrowRight,
  BookText,
  CalendarClock,
  Check,
  Compass,
  Download,
  Flame,
  Lightbulb,
  Library,
  MessagesSquare,
  Mic,
  PenLine,
  Route as RouteIcon,
  ShieldCheck,
  Sparkles,
  Timer,
  Trophy,
  Wrench
} from 'lucide-react';
import { Link } from '../app/router';
import { BrandLogoFull } from '../components/shell/Brand';
import { usePlan } from '../lib/usePlan';
import { appStore, useAppStore } from '../lib/store';
import { badges, computeXp, levelFor, writingStreak } from '../lib/badges';
import { formatDateID, relativeDaysLabel, todayKey, diffDays } from '../lib/date';
import { motivationNotes } from '../data/mental';
import { promptInstall, useInstallState } from '../lib/pwa';
import { Page, Ring, ProgressBar, Tag } from '../components/common/ui';
import { cn } from '../components/common/cn';
import { phaseLabel } from '../lib/roadmap';

const features = [
  { to: '/roadmap', icon: RouteIcon, title: 'Roadmap personal', desc: 'Peta dari eksplorasi sampai wisuda, dengan jadwal dan checklist sesuai jurusanmu.' },
  { to: '/topik', icon: Lightbulb, title: 'Cari & cek topik', desc: 'Generator ide, uji kelayakan, dan rumus rumusan masalah.' },
  { to: '/metodologi', icon: Compass, title: 'Pemilih metodologi', desc: 'Jawab beberapa pertanyaan, dapatkan pendekatan yang cocok beserta alasannya.' },
  { to: '/bab', icon: BookText, title: 'Panduan tiap bab', desc: 'Isi subbab, kerangka, kesalahan umum, dan checklist sebelum kirim ke dosen.' },
  { to: '/toolkit', icon: Wrench, title: 'Toolkit penelitian', desc: 'Kalkulator sampel, pemilih uji statistik, dan penjelasan SPSS, Excel, Python.' },
  { to: '/referensi', icon: Library, title: 'Referensi & sitasi', desc: 'Simpan sumber, hasilkan sitasi APA 7, IEEE, Harvard.' },
  { to: '/bimbingan', icon: MessagesSquare, title: 'Log bimbingan', desc: 'Catat revisi dan template pesan sopan ke dosen.' },
  { to: '/sidang', icon: Mic, title: 'Simulasi sidang', desc: 'Bank pertanyaan penguji dan latihan acak dengan timer.' }
];

const greeting = () => {
  const h = new Date().getHours();
  if (h < 11) return 'Selamat pagi';
  if (h < 15) return 'Selamat siang';
  if (h < 18) return 'Selamat sore';
  return 'Selamat malam';
};

const dailyNote = () => {
  const d = new Date();
  const idx = (d.getFullYear() * 366 + d.getMonth() * 31 + d.getDate()) % motivationNotes.length;
  return motivationNotes[idx];
};

function Welcome() {
  return (
    <Page wide>
      <section className="paper-grain relative overflow-hidden rounded-3xl border border-slate-200 px-6 py-10 sm:px-10 sm:py-14 dark:border-slate-800">
        <Tag tone="accent" className="mb-4">
          <Sparkles aria-hidden="true" className="h-3 w-3" /> Gratis · tanpa login · bisa offline
        </Tag>
        <BrandLogoFull className="mb-6 w-60 sm:w-72" />
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] text-slate-900 sm:text-5xl dark:text-slate-50">
          Dari bingung cari topik <span className="text-indigo-600 dark:text-indigo-400">sampai wisuda</span>.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg dark:text-slate-200">
          Jalan Toga adalah pendamping skripsi untuk mahasiswa dari semua jurusan. Kamu cukup jawab beberapa pertanyaan, lalu dapat roadmap, panduan bab, dan alat yang pas dengan posisimu sekarang.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link to="/mulai" className="btn-primary px-6 text-base">
            Mulai (2 menit) <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
          <Link to="/topik" className="btn-soft px-6 text-base">
            Langsung cari topik
          </Link>
        </div>
        <p className="mt-5 flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
          <ShieldCheck aria-hidden="true" className="h-4 w-4 text-emerald-600" /> Datamu tersimpan di perangkatmu sendiri. Dapat diekspor kapan saja.
        </p>
      </section>

      <section className="mt-10" aria-labelledby="fitur">
        <h2 id="fitur" className="mb-4 text-xl font-bold">
          Apa saja yang bisa kamu lakukan di sini
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <Link key={f.to} to={f.to} className="card group p-4 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md dark:hover:border-indigo-800">
                <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <span className="block font-semibold text-slate-900 dark:text-slate-50">{f.title}</span>
                <span className="mt-1 block text-sm leading-relaxed text-slate-600 dark:text-slate-300">{f.desc}</span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mt-10 grid gap-4 sm:grid-cols-3">
        {[
          ['14 rumpun jurusan', 'Saintek, soshum, teknik, pendidikan, kesehatan, hukum, agama, seni, dan lainnya.'],
          ['Jalur normal, kejar tayang, molor', 'Rencana waktu disesuaikan dengan target lulus dan kondisi nyatamu.'],
          ['Aman untuk mental', 'Ada modul burnout, prokrastinasi, dan cara menghadapi dosen sulit.']
        ].map(([t, d]) => (
          <div key={t} className="card p-5">
            <p className="font-heading text-lg font-bold">{t}</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{d}</p>
          </div>
        ))}
      </section>
    </Page>
  );
}

function InstallBanner() {
  const state = useInstallState();
  const [hidden, setHidden] = useState(() => {
    try {
      return localStorage.getItem('pendamping_install_hidden') === '1';
    } catch {
      return false;
    }
  });
  if (state !== 'ready' || hidden) return null;
  return (
    <div className="card mb-5 flex flex-wrap items-center justify-between gap-3 border-indigo-200 bg-indigo-50 p-4 dark:border-indigo-900 dark:bg-indigo-950/30">
      <div className="flex items-center gap-3">
        <Download aria-hidden="true" className="h-5 w-5 text-indigo-700 dark:text-indigo-300" />
        <p className="text-sm font-medium">Pasang di layar utama agar bisa dibuka cepat dan offline.</p>
      </div>
      <div className="flex gap-2">
        <button className="btn-primary min-h-10" onClick={() => promptInstall()}>
          Pasang
        </button>
        <button
          className="btn-ghost min-h-10"
          onClick={() => {
            setHidden(true);
            try {
              localStorage.setItem('pendamping_install_hidden', '1');
            } catch {
              /* abaikan */
            }
          }}
        >
          Nanti
        </button>
      </div>
    </div>
  );
}

export default function Beranda() {
  const state = useAppStore();
  const { profile, major, plan, phaseIndex, progress, next } = usePlan();
  const [words, setWords] = useState('');

  if (!profile || !plan || !major) return <Welcome />;

  const today = todayKey();
  const phase = plan.phases[phaseIndex];
  const wordsToday = state.wordLog[today] ?? 0;
  const target = state.writingTarget || 300;
  const wPct = Math.min(100, (wordsToday / target) * 100);
  const streak = writingStreak(state);
  const upcoming = state.deadlines.filter((d) => !d.done).sort((a, b) => a.date.localeCompare(b.date)).slice(0, 3);
  const openTasks = state.tasks.filter((t) => t.status !== 'done').length;
  const lvl = levelFor(computeXp(state));
  const recentBadges = Object.entries(state.badges)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([id]) => badges.find((b) => b.id === id))
    .filter(Boolean);
  const name = profile.nama || 'kamu';

  const addWords = () => {
    const n = Number(words);
    if (!Number.isFinite(n) || n <= 0) return;
    appStore.addWords(n);
    setWords('');
  };

  return (
    <Page wide>
      <InstallBanner />
      <header className="mb-6">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{formatDateID(today)}</p>
        <h1 className="text-3xl font-bold sm:text-4xl">
          {greeting()}, {name}.
        </h1>
        <p className="mt-1 text-slate-600 dark:text-slate-300">{major.nama}</p>
      </header>

      <div className="grid gap-5 lg:grid-cols-3">
        {/* Langkah berikutnya */}
        <section aria-labelledby="langkah" className="card paper-grain overflow-hidden p-5 sm:p-7 lg:col-span-2">
          <div className="flex flex-wrap items-center gap-2">
            <Tag tone="accent">
              Tahap {phaseIndex + 1}/{plan.phases.length}
            </Tag>
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{phase.def.nama}</span>
          </div>
          <h2 id="langkah" className="mt-4 text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Langkah berikutnya
          </h2>
          {next ? (
            <>
              <p className="mt-2 font-heading text-2xl font-bold leading-snug text-slate-900 sm:text-[28px] dark:text-slate-50">{next.text}</p>
              {next.phase.index !== phaseIndex && (
                <p className="mt-2 text-sm text-slate-500">Dari tahap: {phaseLabel(next.phase.def.id)}</p>
              )}
              <div className="mt-5 flex flex-wrap gap-2.5">
                <button className="btn-primary" onClick={() => appStore.toggleRoadmapCheck(next.itemId)}>
                  <Check aria-hidden="true" className="h-4 w-4" /> Tandai selesai
                </button>
                <Link to="/roadmap" className="btn-soft">
                  Lihat seluruh roadmap
                </Link>
              </div>
            </>
          ) : (
            <p className="mt-2 font-heading text-2xl font-bold">Seluruh checklist roadmap sudah selesai. Selamat!</p>
          )}
          {phase.def.bantuan.length > 0 && (
            <div className="mt-6 border-t border-slate-200 pt-4 dark:border-slate-800">
              <p className="mb-2 text-xs font-semibold text-slate-500">Alat yang membantu di tahap ini</p>
              <div className="flex flex-wrap gap-2">
                {phase.def.bantuan.map((b) => (
                  <Link key={b.path + b.label} to={b.path} className="chip transition hover:border-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/40">
                    {b.label} <ArrowRight aria-hidden="true" className="h-3 w-3" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Progres */}
        <section aria-label="Progres keseluruhan" className="card flex flex-col items-center justify-center p-6 text-center">
          <Ring value={progress} size={132} stroke={11} label="Progres skripsi" />
          <p className="mt-3 font-heading text-lg font-bold">Progres keseluruhan</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {plan.kelayakan === 'tanpa-target' ? 'Belum ada target lulus' : `Target lulus ${profile.targetLulus ? 'terpasang' : ''}`}
          </p>
          <Link to="/tracker" className="btn-soft mt-4 min-h-10 text-sm">
            Buka tracker
          </Link>
        </section>

        {/* Menulis hari ini */}
        <section aria-labelledby="tulis" className="card p-5">
          <div className="mb-3 flex items-center justify-between">
            <h2 id="tulis" className="flex items-center gap-2 font-bold">
              <PenLine aria-hidden="true" className="h-4 w-4 text-indigo-600 dark:text-indigo-400" /> Menulis hari ini
            </h2>
            <span className="flex items-center gap-1 text-sm font-bold">
              <Flame aria-hidden="true" className={cn('h-4 w-4', streak > 0 ? 'fill-orange-500 text-orange-500' : 'text-slate-400')} />
              {streak} hari
            </span>
          </div>
          <p className="font-heading text-3xl font-bold">
            {wordsToday.toLocaleString('id-ID')} <span className="text-base font-medium text-slate-500">/ {target.toLocaleString('id-ID')} kata</span>
          </p>
          <ProgressBar value={wPct} label="Target kata harian" tone={wPct >= 100 ? 'good' : 'accent'} className="my-3" />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addWords();
            }}
            className="flex gap-2"
          >
            <input
              className="field"
              type="number"
              inputMode="numeric"
              min={1}
              value={words}
              onChange={(e) => setWords(e.target.value)}
              placeholder="Tambah kata"
              aria-label="Jumlah kata yang baru ditulis"
            />
            <button className="btn-primary px-4" type="submit">
              Catat
            </button>
          </form>
          <Link to="/fokus" className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-indigo-700 hover:underline dark:text-indigo-300">
            <Timer aria-hidden="true" className="h-4 w-4" /> Mulai sesi fokus
          </Link>
        </section>

        {/* Deadline */}
        <section aria-labelledby="dl" className="card p-5">
          <div className="mb-3 flex items-center justify-between">
            <h2 id="dl" className="flex items-center gap-2 font-bold">
              <CalendarClock aria-hidden="true" className="h-4 w-4 text-indigo-600 dark:text-indigo-400" /> Deadline terdekat
            </h2>
            <Link to="/tracker" className="text-sm font-semibold text-indigo-700 hover:underline dark:text-indigo-300">
              Kelola
            </Link>
          </div>
          {upcoming.length === 0 ? (
            <p className="text-sm text-slate-500 dark:text-slate-400">Belum ada deadline. Tambahkan tanggal bimbingan, sempro, atau sidang di Tracker supaya diingatkan.</p>
          ) : (
            <ul className="space-y-2.5">
              {upcoming.map((d) => {
                const left = diffDays(today, d.date);
                return (
                  <li key={d.id} className="flex items-start justify-between gap-3">
                    <span className="text-sm font-medium">{d.title}</span>
                    <Tag tone={left < 0 ? 'bad' : left <= 3 ? 'warn' : 'neutral'}>{relativeDaysLabel(d.date)}</Tag>
                  </li>
                );
              })}
            </ul>
          )}
          <p className="mt-3 text-xs text-slate-500">{openTasks} tugas belum selesai di kanban.</p>
        </section>

        {/* Level & badge */}
        <section aria-labelledby="lvl" className="card p-5">
          <div className="mb-3 flex items-center justify-between">
            <h2 id="lvl" className="flex items-center gap-2 font-bold">
              <Trophy aria-hidden="true" className="h-4 w-4 text-indigo-600 dark:text-indigo-400" /> {lvl.name}
            </h2>
            <span className="text-xs font-semibold text-slate-500">{lvl.xp} XP</span>
          </div>
          <ProgressBar value={lvl.progress * 100} label="Menuju level berikutnya" className="mb-2" />
          <p className="text-xs text-slate-500">{lvl.nextName ? `${lvl.toNext} XP lagi menuju ${lvl.nextName}` : 'Level tertinggi tercapai'}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {recentBadges.length === 0 && <p className="text-sm text-slate-500">Belum ada badge. Selesaikan satu langkah roadmap untuk memulai.</p>}
            {recentBadges.map((b) => (
              <Tag key={b!.id} tone="accent">
                {b!.name}
              </Tag>
            ))}
          </div>
          <Link to="/pencapaian" className="mt-3 inline-block text-sm font-semibold text-indigo-700 hover:underline dark:text-indigo-300">
            Lihat semua pencapaian
          </Link>
        </section>
      </div>

      <section className="mt-5 rounded-2xl border border-dashed border-slate-300 p-5 dark:border-slate-700" aria-label="Catatan hari ini">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Catatan hari ini</p>
        <p className="mt-1 font-heading text-lg leading-snug">{dailyNote()}</p>
      </section>

      <section className="mt-8" aria-labelledby="semua">
        <h2 id="semua" className="mb-3 text-lg font-bold">
          Jelajahi semua alat
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <Link key={f.to} to={f.to} className="card flex items-center gap-3 p-3.5 transition hover:border-indigo-300 dark:hover:border-indigo-800">
                <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-indigo-600 dark:text-indigo-400" />
                <span className="text-sm font-semibold">{f.title}</span>
              </Link>
            );
          })}
        </div>
      </section>
    </Page>
  );
}
