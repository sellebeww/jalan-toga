import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, BookmarkPlus, KeyRound, Radar, ShieldAlert, Sparkles, Square, ThumbsUp } from 'lucide-react';
import { useAppStore, appStore } from '../lib/store';
import { majorById } from '../data/majors';
import { AI_KEY_STORAGE, researchTopic, type ResearchResult } from '../lib/topicAI';
import { CopyButton, Notice, Page, Ring } from '../components/common/ui';
import { cn } from '../components/common/cn';
import { toast } from '../lib/toast';

const STAGES = ['Membaca topikmu', 'Mencari penelitian serupa', 'Menimbang kebaruan dan celah riset', 'Mengecek ketersediaan data', 'Menyusun laporan'];

const readKey = () => {
  try {
    return localStorage.getItem(AI_KEY_STORAGE) ?? '';
  } catch {
    return '';
  }
};

const verdictCopy = {
  kuat: { label: 'Topik kuat', tone: 'text-emerald-300' },
  cukup: { label: 'Cukup, perlu dipertajam', tone: 'text-amber-300' },
  lemah: { label: 'Masih lemah', tone: 'text-rose-300' }
} as const;

const barTone = (n: number) => (n >= 75 ? 'bg-emerald-500' : n >= 50 ? 'bg-amber-500' : 'bg-rose-500');

const darkInput =
  'w-full rounded-2xl border border-white/15 bg-slate-900/70 px-4 text-white placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/40';

export default function RisetTopik() {
  const { profile, savedTopics } = useAppStore();
  const major = profile ? majorById(profile.jurusanId) : undefined;
  const [apiKey, setApiKey] = useState(readKey);
  const [topik, setTopik] = useState(profile?.judul || savedTopics[0]?.judul || '');
  const [konteks, setKonteks] = useState('');
  const [busy, setBusy] = useState(false);
  const [stage, setStage] = useState(0);
  const [error, setError] = useState('');
  const [result, setResult] = useState<ResearchResult | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  // Label tahap hanya penanda kemajuan; riset sebenarnya berjalan di server AI.
  useEffect(() => {
    if (!busy) return;
    setStage(0);
    const t = window.setInterval(() => setStage((s) => Math.min(s + 1, STAGES.length - 1)), 9000);
    return () => window.clearInterval(t);
  }, [busy]);

  useEffect(() => () => abortRef.current?.abort(), []);

  const saveKey = (k: string) => {
    setApiKey(k);
    try {
      if (k) localStorage.setItem(AI_KEY_STORAGE, k);
      else localStorage.removeItem(AI_KEY_STORAGE);
    } catch {
      /* penyimpanan diblokir: kunci tetap dipakai selama sesi ini */
    }
  };

  const ready = apiKey.trim() !== '' && topik.trim().length >= 8;

  const run = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ready) return;
    const ctrl = new AbortController();
    abortRef.current = ctrl;
    setBusy(true);
    setError('');
    setResult(null);
    try {
      const r = await researchTopic(apiKey.trim(), { topik: topik.trim(), jurusan: major?.nama ?? 'tidak disebutkan', konteks: konteks.trim() }, ctrl.signal);
      setResult(r);
      requestAnimationFrame(() => resultRef.current?.focus());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan tak terduga.');
    } finally {
      setBusy(false);
      abortRef.current = null;
    }
  };

  const report = result?.report;
  const v = report ? verdictCopy[report.verdict] : null;

  return (
    <div className="overflow-x-hidden">
      {/* Panggung utama: gelap, lebar, cahaya radial yang bergerak pelan */}
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div aria-hidden="true" className="ai-orb pointer-events-none absolute -left-32 -top-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-indigo-600/40 blur-3xl" />
        <div aria-hidden="true" className="ai-orb ai-orb-late pointer-events-none absolute -bottom-48 right-[-10rem] -z-10 h-[30rem] w-[30rem] rounded-full bg-fuchsia-500/25 blur-3xl" />
        <div aria-hidden="true" className="ai-grain pointer-events-none absolute inset-0 -z-10 opacity-[0.07]" />

        <div className="page-enter mx-auto max-w-6xl px-4 pb-14 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-20 lg:pt-20">
          <h1 className="max-w-5xl font-heading text-[clamp(2rem,4.6vw,3.75rem)] font-bold leading-[1.05] tracking-tight">
            Seberapa kuat topikmu?{' '}
            <span className="bg-gradient-to-r from-indigo-300 via-sky-200 to-fuchsia-300 bg-clip-text text-transparent">Biar AI yang riset dulu.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            AI menelusuri penelitian serupa di web, menimbang kebaruan, data, dan ruang lingkup, lalu memberi skor jujur beserta saran judul yang lebih tajam.
          </p>

          <form onSubmit={run} className="mt-10 grid gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md sm:p-6 lg:grid-cols-[1fr_auto]">
            <div className="space-y-4">
              <div>
                <label htmlFor="ai-topik" className="mb-1.5 block text-sm font-semibold text-slate-200">
                  Topik atau judul
                </label>
                <textarea
                  id="ai-topik"
                  rows={2}
                  required
                  minLength={8}
                  value={topik}
                  onChange={(e) => setTopik(e.target.value)}
                  placeholder="Contoh: Pengaruh literasi digital terhadap minat berwirausaha mahasiswa di Yogyakarta"
                  className={cn(darkInput, 'resize-y py-3 text-base')}
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="ai-konteks" className="mb-1.5 block text-sm font-semibold text-slate-200">
                    Konteks tambahan <span className="font-normal text-slate-400">(opsional)</span>
                  </label>
                  <input id="ai-konteks" value={konteks} onChange={(e) => setKonteks(e.target.value)} placeholder="Lokasi, objek, data yang sudah ada" className={cn(darkInput, 'py-2.5')} />
                </div>
                <div>
                  <label htmlFor="ai-key" className="mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-slate-200">
                    <KeyRound aria-hidden="true" className="h-3.5 w-3.5" /> Anthropic API key
                  </label>
                  <input
                    id="ai-key"
                    type="password"
                    autoComplete="off"
                    spellCheck={false}
                    required
                    value={apiKey}
                    onChange={(e) => saveKey(e.target.value)}
                    placeholder="sk-ant-..."
                    aria-describedby="ai-key-hint"
                    className={cn(darkInput, 'py-2.5 font-mono text-sm')}
                  />
                </div>
              </div>
              <p id="ai-key-hint" className="text-xs leading-relaxed text-slate-400">
                Kunci hanya disimpan di perangkat ini, tidak ikut file cadangan, dan dikirim langsung ke Anthropic. Biaya riset ditagihkan ke akun API-mu. Buat kunci di console.anthropic.com.
              </p>
            </div>

            <div className="flex flex-col justify-end gap-2 lg:w-56">
              {busy ? (
                <button type="button" onClick={() => abortRef.current?.abort()} className="btn min-h-14 rounded-2xl border border-white/20 bg-white/5 text-white hover:bg-white/10">
                  <Square aria-hidden="true" className="h-4 w-4" /> Batalkan
                </button>
              ) : (
                <button type="submit" disabled={!ready} className="btn min-h-14 rounded-2xl bg-white text-base text-slate-950 hover:bg-indigo-100">
                  <Sparkles aria-hidden="true" className="h-5 w-5" /> Riset topikku
                </button>
              )}
            </div>
          </form>

          {busy && (
            <div role="status" aria-live="polite" className="mt-8 flex items-center gap-4">
              <span className="ai-radar relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-indigo-300/40">
                <Radar aria-hidden="true" className="h-5 w-5 text-indigo-200" />
              </span>
              <div className="min-w-0">
                <p key={stage} className="step-next font-semibold text-white">
                  {STAGES[stage]}...
                </p>
                <p className="text-sm text-slate-400">Riset menyeluruh biasanya butuh 1 sampai 3 menit.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      <Page wide>
        {error && (
          <Notice tone="warn" title="Riset belum berhasil" className="mb-6">
            {error}
          </Notice>
        )}

        {!report && !busy && !error && (
          <p className="mx-auto max-w-2xl py-10 text-center text-slate-500 dark:text-slate-400">
            Hasil riset muncul di sini: skor total, lima dimensi penilaian, kekuatan, risiko, saran judul, dan penelitian yang mirip dengan topikmu.
          </p>
        )}

        {result && report && v && (
          <div ref={resultRef} tabIndex={-1} className="outline-none" aria-label="Hasil riset topik">
            {/* Bento 6 kolom + grid-flow-dense: (2+4)x2 baris | 3+3 | 6 | 6, tanpa sel kosong */}
            <div className="grid grid-flow-dense gap-4 md:grid-cols-6">
              <section className="rise-stagger relative overflow-hidden rounded-3xl bg-slate-950 p-6 text-white md:col-span-2 md:row-span-2">
                <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-indigo-500/30 blur-3xl" />
                <h2 className="text-sm font-semibold text-slate-300">Skor kekuatan topik</h2>
                <div className="mt-5 flex justify-center [&_circle:first-child]:stroke-white/10 [&_circle:last-child]:stroke-indigo-300">
                  <Ring value={report.skor} size={168} stroke={12} label="Skor kekuatan topik">
                    <span className="font-heading text-5xl font-bold text-white">{report.skor}</span>
                    <span className="text-xs text-slate-400">dari 100</span>
                  </Ring>
                </div>
                <p className={cn('mt-5 text-center font-heading text-xl font-bold', v.tone)}>{v.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{report.ringkasan}</p>
              </section>

              <section className="rise-stagger card p-6 md:col-span-4 md:row-span-2">
                <h2 className="font-heading text-lg font-bold">Lima dimensi penilaian</h2>
                <ul className="mt-5 space-y-5">
                  {report.dimensi.map((d) => (
                    <li key={d.nama}>
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="font-semibold">{d.nama}</span>
                        <span className="font-heading text-lg font-bold tabular-nums">{d.skor}</span>
                      </div>
                      <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800" role="img" aria-label={`${d.nama}: ${d.skor} dari 100`}>
                        <div className={cn('ai-bar h-full rounded-full', barTone(d.skor))} style={{ width: `${d.skor}%` }} />
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{d.alasan}</p>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rise-stagger rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:col-span-3 dark:border-emerald-900 dark:bg-emerald-950/30">
                <h2 className="flex items-center gap-2 font-heading text-lg font-bold text-emerald-900 dark:text-emerald-200">
                  <ThumbsUp aria-hidden="true" className="h-5 w-5" /> Yang sudah kuat
                </h2>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-emerald-950 dark:text-emerald-100">
                  {report.kekuatan.map((k) => (
                    <li key={k}>{k}</li>
                  ))}
                </ul>
              </section>

              <section className="rise-stagger rounded-3xl border border-amber-200 bg-amber-50 p-6 md:col-span-3 dark:border-amber-900 dark:bg-amber-950/30">
                <h2 className="flex items-center gap-2 font-heading text-lg font-bold text-amber-950 dark:text-amber-200">
                  <ShieldAlert aria-hidden="true" className="h-5 w-5" /> Risiko yang perlu diantisipasi
                </h2>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-amber-950 dark:text-amber-100">
                  {report.risiko.map((k) => (
                    <li key={k}>{k}</li>
                  ))}
                </ul>
              </section>

              <section className="rise-stagger card p-6 md:col-span-6">
                <h2 className="font-heading text-lg font-bold">Saran judul yang lebih tajam</h2>
                <ul className="mt-4 grid gap-3 lg:grid-cols-3">
                  {report.saranJudul.map((j) => {
                    const saved = savedTopics.some((t) => t.judul === j);
                    return (
                      <li
                        key={j}
                        className="flex flex-col justify-between gap-4 rounded-2xl border border-slate-200 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-lg dark:border-slate-800 dark:hover:border-indigo-800"
                      >
                        <p className="font-heading font-semibold leading-snug">{j}</p>
                        <div className="flex gap-2">
                          <button
                            type="button"
                            className="btn-soft min-h-10 flex-1 text-xs"
                            disabled={saved}
                            onClick={() => {
                              appStore.saveTopic(j, 'Saran AI riset topik', report.skor);
                              toast('Disimpan ke topik tersimpan');
                            }}
                          >
                            <BookmarkPlus aria-hidden="true" className="h-4 w-4" /> {saved ? 'Tersimpan' : 'Simpan'}
                          </button>
                          <CopyButton text={j} size="sm" />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </section>

              {(report.penelitianTerkait.length > 0 || result.sources.length > 0) && (
                <section className="rise-stagger card p-6 md:col-span-6">
                  <h2 className="font-heading text-lg font-bold">Penelitian yang mirip</h2>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Buka dan baca sendiri sebelum dikutip; AI bisa keliru merangkum.</p>
                  {report.penelitianTerkait.length > 0 && (
                    <ul className="mt-4 divide-y divide-slate-200 dark:divide-slate-800">
                      {report.penelitianTerkait.map((r) => (
                        <li key={r.url} className="py-3">
                          <a href={r.url} target="_blank" rel="noopener noreferrer" className="group inline-flex items-start gap-1.5 font-semibold text-indigo-800 hover:underline dark:text-indigo-300">
                            <span>
                              {r.judul} {r.tahun && <span className="font-normal text-slate-500 dark:text-slate-400">({r.tahun})</span>}
                            </span>
                            <ArrowUpRight aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          </a>
                          <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-300">{r.relevansi}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                  {result.sources.length > 0 && (
                    <details className="mt-4 text-sm">
                      <summary className="cursor-pointer font-semibold text-slate-700 dark:text-slate-200">Semua sumber yang ditelusuri ({result.sources.length})</summary>
                      <ul className="mt-2 space-y-1">
                        {result.sources.map((s) => (
                          <li key={s.url} className="truncate">
                            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-indigo-800 hover:underline dark:text-indigo-300">
                              {s.title || s.url}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </details>
                  )}
                </section>
              )}
            </div>
          </div>
        )}
      </Page>
    </div>
  );
}
