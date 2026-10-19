import { useEffect, useRef, useState } from 'react';
import { Check, Eye, Mic, Play, RotateCcw, Search, Timer } from 'lucide-react';
import { useTabParam } from '../app/router';
import { answeringTips, dayOfChecklist, defenseQuestions, presentationTips, scopeLabels, slidesSempro, slidesSidang, timerOptions, type DefenseQuestion, type DefenseScope } from '../data/sidang';
import { appStore, useAppStore } from '../lib/store';
import { usePlan } from '../lib/usePlan';
import { formatDuration } from '../lib/date';
import { mulberry32 } from '../lib/topicGen';
import { MajorSelect, resolveMajor } from '../components/common/MajorSelect';
import { CampusNote, CheckRow, CopyButton, Disclosure, EmptyState, Field, Notice, Page, PageHeader, ProgressBar, Ring, Segmented, Tag } from '../components/common/ui';
import { cn } from '../components/common/cn';

type Tab = 'latihan' | 'bank' | 'slide' | 'harih';
type Mode = 'sempro' | 'sidang';
type Rating = 'siap' | 'ragu' | 'belum';

const allScopes = Object.keys(scopeLabels) as DefenseScope[];

function poolFor(mode: Mode, scopes: DefenseScope[], majorId: string): DefenseQuestion[] {
  return defenseQuestions.filter((q) => {
    if (!scopes.includes(q.scope)) return false;
    if (q.scope === 'jurusan' && q.majorId !== majorId) return false;
    if (mode === 'sempro') return q.sempro || q.scope === 'umum' || q.scope === 'jurusan' || q.scope === 'tantangan';
    return true;
  });
}

function Practice() {
  const { profile } = usePlan();
  const [majorId, setMajorId] = useState<string | null>(null);
  const major = resolveMajor(majorId, profile?.jurusanId);
  const [mode, setMode] = useState<Mode>('sidang');
  const [scopes, setScopes] = useState<DefenseScope[]>(allScopes);
  const [count, setCount] = useState(10);
  const [seconds, setSeconds] = useState(90);
  const [weakOnly, setWeakOnly] = useState(false);
  const { defenseWeak } = useAppStore();

  const [session, setSession] = useState<DefenseQuestion[] | null>(null);
  const available = poolFor(mode, scopes, major.id).filter((q) => !weakOnly || defenseWeak.includes(q.id));

  const start = () => {
    const rng = mulberry32(Date.now() % 100000);
    const shuffled = [...available].sort(() => rng() - 0.5).slice(0, Math.min(count, available.length));
    setSession(shuffled);
  };

  if (session) return <Session questions={session} seconds={seconds} mode={mode} onExit={() => setSession(null)} onRestart={start} />;

  const toggleScope = (s: DefenseScope) => setScopes((cur) => (cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]));

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <section className="card p-5 sm:p-6 lg:col-span-3">
        <h2 className="font-heading text-xl font-bold">Atur sesi latihan</h2>
        <div className="mt-5 space-y-5">
          <div>
            <p className="mb-2 text-sm font-semibold">Jenis ujian</p>
            <Segmented<Mode>
              ariaLabel="Jenis ujian"
              value={mode}
              onChange={setMode}
              options={[
                { value: 'sempro', label: 'Seminar proposal' },
                { value: 'sidang', label: 'Sidang akhir' }
              ]}
            />
          </div>
          {!profile && <MajorSelect value={major.id} onChange={setMajorId} hint="Dipakai untuk pertanyaan khusus jurusan." />}
          <div>
            <p className="mb-2 text-sm font-semibold">Topik pertanyaan</p>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Topik pertanyaan">
              {allScopes.map((s) => {
                const on = scopes.includes(s);
                return (
                  <button
                    key={s}
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggleScope(s)}
                    className={cn('min-h-10 rounded-full border px-3.5 text-sm font-semibold transition', on ? 'border-indigo-600 bg-indigo-600 text-white dark:border-indigo-400 dark:bg-indigo-500 dark:text-slate-950' : 'border-slate-300 dark:border-slate-700')}
                  >
                    {scopeLabels[s]}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Jumlah pertanyaan">
              {(id) => (
                <select id={id} className="field" value={count} onChange={(e) => setCount(Number(e.target.value))}>
                  {[5, 10, 15, 20].map((n) => (
                    <option key={n} value={n}>
                      {n} pertanyaan
                    </option>
                  ))}
                </select>
              )}
            </Field>
            <Field label="Waktu jawab per pertanyaan">
              {(id) => (
                <select id={id} className="field" value={seconds} onChange={(e) => setSeconds(Number(e.target.value))}>
                  {timerOptions.map((n) => (
                    <option key={n} value={n}>
                      {n >= 120 ? `${n / 60} menit` : `${n} detik`}
                    </option>
                  ))}
                </select>
              )}
            </Field>
          </div>
          <label className="flex min-h-11 cursor-pointer items-center gap-3 rounded-xl px-1 text-sm">
            <input type="checkbox" className="h-5 w-5 accent-indigo-600" checked={weakOnly} onChange={(e) => setWeakOnly(e.target.checked)} disabled={defenseWeak.length === 0} />
            Hanya pertanyaan yang sebelumnya kutandai “belum siap” ({defenseWeak.length})
          </label>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button className="btn-primary px-7" disabled={available.length === 0} onClick={start}>
            <Play aria-hidden="true" className="h-4 w-4" /> Mulai latihan
          </button>
          <span className="text-sm text-slate-500">{available.length} pertanyaan tersedia</span>
        </div>
        {available.length === 0 && (
          <div className="mt-4">
            <Notice tone="warn">Tidak ada pertanyaan yang cocok dengan filter. Aktifkan lebih banyak topik.</Notice>
          </div>
        )}
      </section>

      <aside className="space-y-4 lg:col-span-2">
        <HistoryCard />
        <Notice tone="tip" title="Cara latihan yang efektif">
          Jawab dengan suara keras seolah di depan penguji. Baru buka petunjuk jawaban setelah kamu selesai, lalu nilai dirimu dengan jujur.
        </Notice>
      </aside>
    </div>
  );
}

function HistoryCard() {
  const { defenseRuns } = useAppStore();
  if (defenseRuns.length === 0) {
    return <EmptyState icon={<Mic className="h-6 w-6" />} title="Belum ada riwayat latihan" body="Selesaikan satu sesi untuk melihat progresmu di sini." />;
  }
  return (
    <section className="card p-5">
      <h3 className="mb-3 font-heading text-lg font-bold">Riwayat latihan</h3>
      <ul className="space-y-2.5">
        {defenseRuns.slice(0, 5).map((r) => (
          <li key={r.id} className="flex items-center justify-between gap-3 text-sm">
            <span>
              <span className="font-semibold">{r.mode}</span>
              <span className="block text-xs text-slate-500">{new Date(r.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })} · {formatDuration(r.seconds)}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Tag tone="good">{r.siap}</Tag>
              <Tag tone="warn">{r.ragu}</Tag>
              <Tag tone="bad">{r.belum}</Tag>
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-slate-500">Hijau = siap, kuning = ragu, merah = belum siap.</p>
    </section>
  );
}

function Session({ questions, seconds, mode, onExit, onRestart }: { questions: DefenseQuestion[]; seconds: number; mode: Mode; onExit: () => void; onRestart: () => void }) {
  const [idx, setIdx] = useState(0);
  const [ratings, setRatings] = useState<Record<string, Rating>>({});
  const [reveal, setReveal] = useState(false);
  const [left, setLeft] = useState(seconds);
  const [done, setDone] = useState(false);
  const startedAt = useRef(Date.now());
  const qStart = useRef(Date.now());
  const savedRef = useRef(false);

  const q = questions[idx];

  useEffect(() => {
    if (done) return;
    qStart.current = Date.now();
    setLeft(seconds);
    const id = window.setInterval(() => {
      const remain = seconds - Math.floor((Date.now() - qStart.current) / 1000);
      setLeft(Math.max(0, remain));
    }, 250);
    return () => window.clearInterval(id);
  }, [idx, seconds, done]);

  const rate = (r: Rating) => {
    const next = { ...ratings, [q.id]: r };
    setRatings(next);
    setReveal(false);
    if (idx + 1 >= questions.length) finish(next);
    else setIdx(idx + 1);
  };

  const finish = (final: Record<string, Rating>) => {
    setDone(true);
    if (savedRef.current) return;
    savedRef.current = true;
    const vals = Object.values(final);
    const weakIds = Object.entries(final).filter(([, v]) => v !== 'siap').map(([k]) => k);
    const strongIds = Object.entries(final).filter(([, v]) => v === 'siap').map(([k]) => k);
    const prev = appStore.getState().defenseWeak.filter((id) => !strongIds.includes(id));
    appStore.setDefenseWeak([...prev, ...weakIds.filter((id) => final[id] === 'belum')]);
    appStore.addDefenseRun({
      date: Date.now(),
      mode: mode === 'sempro' ? 'Seminar proposal' : 'Sidang akhir',
      total: questions.length,
      siap: vals.filter((v) => v === 'siap').length,
      ragu: vals.filter((v) => v === 'ragu').length,
      belum: vals.filter((v) => v === 'belum').length,
      seconds: Math.round((Date.now() - startedAt.current) / 1000)
    });
  };

  if (done) {
    const vals = Object.values(ratings);
    const siap = vals.filter((v) => v === 'siap').length;
    const ragu = vals.filter((v) => v === 'ragu').length;
    const belum = vals.filter((v) => v === 'belum').length;
    const weak = questions.filter((x) => ratings[x.id] && ratings[x.id] !== 'siap');
    return (
      <section className="card p-6" aria-live="polite">
        <h2 className="font-heading text-2xl font-bold">Sesi selesai</h2>
        <p className="mt-1 text-slate-600 dark:text-slate-300">Total waktu {formatDuration((Date.now() - startedAt.current) / 1000)}</p>
        <div className="mt-5 grid grid-cols-3 gap-3">
          <div className="rounded-2xl bg-emerald-50 p-4 text-center dark:bg-emerald-950/30">
            <p className="font-heading text-3xl font-bold text-emerald-700 dark:text-emerald-300">{siap}</p>
            <p className="text-xs font-semibold">Siap</p>
          </div>
          <div className="rounded-2xl bg-amber-50 p-4 text-center dark:bg-amber-950/30">
            <p className="font-heading text-3xl font-bold text-amber-700 dark:text-amber-300">{ragu}</p>
            <p className="text-xs font-semibold">Ragu</p>
          </div>
          <div className="rounded-2xl bg-rose-50 p-4 text-center dark:bg-rose-950/30">
            <p className="font-heading text-3xl font-bold text-rose-700 dark:text-rose-300">{belum}</p>
            <p className="text-xs font-semibold">Belum siap</p>
          </div>
        </div>
        {weak.length > 0 && (
          <div className="mt-6">
            <h3 className="mb-2 font-heading text-lg font-bold">Perlu dilatih lagi</h3>
            <ul className="space-y-2">
              {weak.map((w) => (
                <li key={w.id}>
                  <Disclosure title={w.tanya}>
                    <p className="text-sm"><strong>Maksud penguji:</strong> {w.maksud}</p>
                    <p className="mt-2 text-sm"><strong>Kerangka jawaban:</strong> {w.jawab}</p>
                  </Disclosure>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="mt-6 flex flex-wrap gap-3">
          <button className="btn-primary" onClick={onRestart}>
            <RotateCcw aria-hidden="true" className="h-4 w-4" /> Latihan lagi
          </button>
          <button className="btn-soft" onClick={onExit}>
            Kembali ke pengaturan
          </button>
        </div>
      </section>
    );
  }

  const urgent = left <= 10;
  return (
    <section className="card p-5 sm:p-7" aria-live="polite">
      <div className="mb-4 flex items-center justify-between text-xs font-semibold text-slate-500">
        <span>
          Pertanyaan {idx + 1} dari {questions.length}
        </span>
        <button className="underline" onClick={onExit}>
          Akhiri sesi
        </button>
      </div>
      <ProgressBar value={((idx + 1) / questions.length) * 100} label="Kemajuan sesi" className="mb-6" />
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        <div className="shrink-0">
          <Ring value={(left / seconds) * 100} size={110} stroke={10} label="Sisa waktu">
            <span className={cn('font-heading text-2xl font-bold tabular-nums', urgent && 'text-rose-600')}>{formatDuration(left)}</span>
          </Ring>
        </div>
        <div className="flex-1">
          <Tag tone="accent">{scopeLabels[q.scope]}</Tag>
          <h2 className="mt-2 font-heading text-2xl font-bold leading-snug sm:text-[28px]">{q.tanya}</h2>
          {left === 0 && <p className="mt-2 text-sm font-semibold text-rose-600 dark:text-rose-400">Waktu habis. Dalam sidang sungguhan, rangkum jawabanmu dengan satu kalimat penutup.</p>}
        </div>
      </div>

      {!reveal ? (
        <button className="btn-soft mt-6" onClick={() => setReveal(true)}>
          <Eye aria-hidden="true" className="h-4 w-4" /> Lihat petunjuk jawaban
        </button>
      ) : (
        <div className="mt-6 space-y-3 rounded-2xl bg-slate-100 p-4 dark:bg-slate-800/60">
          <p className="text-sm"><strong>Maksud penguji:</strong> {q.maksud}</p>
          <p className="text-sm"><strong>Kerangka jawaban:</strong> {q.jawab}</p>
        </div>
      )}

      <div className="mt-6">
        <p className="mb-2 text-sm font-semibold">Seberapa siap kamu menjawab ini?</p>
        <div className="grid grid-cols-3 gap-2.5">
          <button className="btn bg-emerald-600 text-white hover:bg-emerald-700" onClick={() => rate('siap')}>
            <Check aria-hidden="true" className="h-4 w-4" /> Siap
          </button>
          <button className="btn bg-amber-500 text-slate-950 hover:bg-amber-600" onClick={() => rate('ragu')}>
            Ragu
          </button>
          <button className="btn bg-rose-600 text-white hover:bg-rose-700" onClick={() => rate('belum')}>
            Belum
          </button>
        </div>
      </div>
    </section>
  );
}

function Bank() {
  const { profile } = usePlan();
  const [q, setQ] = useState('');
  const [scope, setScope] = useState<DefenseScope | 'semua'>('semua');
  const [majorId, setMajorId] = useState<string | null>(null);
  const major = resolveMajor(majorId, profile?.jurusanId);
  const list = defenseQuestions.filter((x) => {
    if (x.scope === 'jurusan' && x.majorId !== major.id) return false;
    if (scope !== 'semua' && x.scope !== scope) return false;
    const s = q.trim().toLowerCase();
    return !s || `${x.tanya} ${x.maksud} ${x.jawab}`.toLowerCase().includes(s);
  });

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <div className="relative min-w-[220px] flex-1">
          <Search aria-hidden="true" className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input className="field pl-10" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari pertanyaan" aria-label="Cari pertanyaan" />
        </div>
        <select className="field w-auto" value={scope} onChange={(e) => setScope(e.target.value as DefenseScope | 'semua')} aria-label="Filter topik">
          <option value="semua">Semua topik</option>
          {allScopes.map((s) => (
            <option key={s} value={s}>
              {scopeLabels[s]}
            </option>
          ))}
        </select>
        {!profile && (
          <div className="min-w-[220px]">
            <MajorSelect value={major.id} onChange={setMajorId} label="Jurusan (untuk pertanyaan khusus)" />
          </div>
        )}
      </div>
      <p className="mb-3 text-sm text-slate-500">{list.length} pertanyaan</p>
      <ul className="space-y-2.5">
        {list.map((x) => (
          <li key={x.id}>
            <Disclosure
              title={x.tanya}
              badge={<Tag tone={x.level === 1 ? 'good' : x.level === 2 ? 'warn' : 'bad'}>{x.level === 1 ? 'Dasar' : x.level === 2 ? 'Menengah' : 'Sulit'}</Tag>}
            >
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{scopeLabels[x.scope]}</p>
              <p className="mt-2 text-sm"><strong>Maksud penguji:</strong> {x.maksud}</p>
              <p className="mt-2 text-sm"><strong>Kerangka jawaban:</strong> {x.jawab}</p>
            </Disclosure>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Slides() {
  const [mode, setMode] = useState<Mode>('sempro');
  const slides = mode === 'sempro' ? slidesSempro : slidesSidang;
  const text = slides.map((s) => `${s.nomor}. ${s.judul} (${s.menit})\n   ${s.isi}`).join('\n');
  return (
    <div className="space-y-8">
      <section>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <Segmented<Mode>
            ariaLabel="Jenis presentasi"
            value={mode}
            onChange={setMode}
            options={[
              { value: 'sempro', label: 'Template sempro' },
              { value: 'sidang', label: 'Template sidang' }
            ]}
          />
          <CopyButton text={text} label="Salin kerangka slide" size="sm" />
        </div>
        <ol className="space-y-2.5">
          {slides.map((s) => (
            <li key={s.nomor} className="card flex gap-3 p-3.5">
              <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-100 font-bold text-indigo-800 dark:bg-indigo-950 dark:text-indigo-200">
                {s.nomor}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-semibold">{s.judul}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">{s.isi}</p>
              </div>
              <Tag className="self-start"><Timer aria-hidden="true" className="h-3 w-3" /> {s.menit}</Tag>
            </li>
          ))}
        </ol>
        <div className="mt-4"><CampusNote>Durasi presentasi (umumnya 10–20 menit) dan jumlah slide ditentukan prodi-mu. Sesuaikan alokasi waktu di atas.</CampusNote></div>
      </section>
      <section className="grid gap-5 md:grid-cols-2">
        <div>
          <h2 className="mb-3 font-heading text-xl font-bold">Tips presentasi</h2>
          <ul className="space-y-2.5">
            {presentationTips.map((t) => (
              <li key={t.judul} className="card p-3.5 text-sm">
                <strong>{t.judul}.</strong> {t.isi}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-3 font-heading text-xl font-bold">Cara menjawab penguji</h2>
          <ul className="space-y-2.5">
            {answeringTips.map((t) => (
              <li key={t} className="card flex gap-2.5 p-3.5 text-sm">
                <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

function DayOf() {
  const { adminChecks } = useAppStore();
  const done = dayOfChecklist.filter((_, i) => adminChecks[`harih.${i}`]).length;
  return (
    <section className="card max-w-2xl p-5">
      <h2 className="font-heading text-xl font-bold">Checklist hari-H</h2>
      <p className="mb-3 mt-1 text-sm text-slate-500">
        {done}/{dayOfChecklist.length} siap
      </p>
      <ProgressBar value={(done / dayOfChecklist.length) * 100} label="Kesiapan hari-H" className="mb-3" tone={done === dayOfChecklist.length ? 'good' : 'accent'} />
      {dayOfChecklist.map((c, i) => (
        <CheckRow key={c} checked={!!adminChecks[`harih.${i}`]} onToggle={() => appStore.toggleAdminCheck(`harih.${i}`)}>
          {c}
        </CheckRow>
      ))}
    </section>
  );
}

export default function Sidang() {
  const [tab, setTab] = useTabParam<Tab>(['latihan', 'bank', 'slide', 'harih'], 'latihan');
  return (
    <Page wide>
      <PageHeader eyebrow="Bimbingan & sidang" title="Simulasi sidang & sempro" subtitle="Latihan pertanyaan penguji dengan timer, bank pertanyaan per bab, template slide, dan checklist hari-H." icon={<Mic aria-hidden="true" className="h-5 w-5" />} />
      <div className="mb-6">
        <Segmented<Tab>
          ariaLabel="Bagian simulasi sidang"
          value={tab}
          onChange={setTab}
          scrollable
          options={[
            { value: 'latihan', label: 'Latihan acak' },
            { value: 'bank', label: 'Bank pertanyaan' },
            { value: 'slide', label: 'Slide & tips' },
            { value: 'harih', label: 'Hari-H' }
          ]}
        />
      </div>
      {tab === 'latihan' && <Practice />}
      {tab === 'bank' && <Bank />}
      {tab === 'slide' && <Slides />}
      {tab === 'harih' && <DayOf />}
    </Page>
  );
}
