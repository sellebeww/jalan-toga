import { useMemo, useState } from 'react';
import { CalendarClock } from 'lucide-react';
import { phases } from '../data/roadmap';
import type { PhaseId } from '../data/majors';
import { advisorFactor, complexityFactor, estimateGraduation, type AdvisorSpeed, type Complexity } from '../lib/estimate';
import { formatDateID, formatMonthID } from '../lib/date';
import { usePlan } from '../lib/usePlan';
import { CampusNote, Field, Notice, Page, PageHeader, Tag } from '../components/common/ui';
import { cn } from '../components/common/cn';
import { Link } from '../app/router';

const advisorOptions: { v: AdvisorSpeed; l: string; d: string }[] = [
  { v: 'cepat', l: 'Cepat', d: 'Membalas dan mengoreksi dalam beberapa hari' },
  { v: 'sedang', l: 'Sedang', d: 'Biasanya 1–2 minggu' },
  { v: 'lambat', l: 'Lambat', d: 'Sering lebih dari 2 minggu' }
];

const complexityOptions: { v: Complexity; l: string; d: string }[] = [
  { v: 'sekunder', l: 'Data sekunder / kajian', d: 'Tanpa pengambilan data lapangan' },
  { v: 'survei', l: 'Survei kuesioner', d: 'Menyebar dan mengolah kuesioner' },
  { v: 'kualitatif', l: 'Wawancara / observasi', d: 'Transkripsi dan koding memakan waktu' },
  { v: 'eksperimen', l: 'Eksperimen / lab / lapangan', d: 'Bergantung alat, musim, dan jadwal' },
  { v: 'rnd', l: 'Pengembangan produk', d: 'Membangun dan menguji produk' }
];

export default function Estimasi() {
  const { profile, plan, phaseIndex } = usePlan();
  const [start, setStart] = useState<PhaseId>(plan ? plan.phases[phaseIndex].def.id : 'topik');
  const [hours, setHours] = useState(12);
  const [advisor, setAdvisor] = useState<AdvisorSpeed>('sedang');
  const [complexity, setComplexity] = useState<Complexity>('survei');

  const result = useMemo(() => estimateGraduation({ startPhase: start, hoursPerWeek: hours, advisor, complexity }), [start, hours, advisor, complexity]);
  const max = Math.max(...result.rows.map((r) => r.minggu));
  const target = profile?.targetLulus;
  const real = result.scenarios[1];

  return (
    <Page wide>
      <PageHeader
        eyebrow="Diri sendiri"
        title="Estimasi waktu lulus"
        subtitle="Perkiraan kasar kapan skripsimu selesai, berdasarkan tahap sekarang, waktu yang bisa kamu sisihkan, kecepatan pembimbing, dan jenis penelitian."
        icon={<CalendarClock aria-hidden="true" className="h-5 w-5" />}
      />

      <div className="grid gap-6 lg:grid-cols-5">
        <section className="card space-y-5 p-5 sm:p-6 lg:col-span-2">
          <Field label="Kamu sekarang di tahap">
            {(id) => (
              <select id={id} className="field" value={start} onChange={(e) => setStart(e.target.value as PhaseId)}>
                {phases.map((p, i) => (
                  <option key={p.id} value={p.id}>
                    {i + 1}. {p.nama}
                  </option>
                ))}
              </select>
            )}
          </Field>
          <Field label={`Waktu yang bisa disisihkan: ${hours} jam per minggu`} hint="Hitung jam yang benar-benar fokus, bukan jam yang 'rasanya' ada.">
            {(id) => <input id={id} type="range" min={2} max={40} step={1} value={hours} onChange={(e) => setHours(Number(e.target.value))} className="w-full accent-indigo-600" />}
          </Field>
          <fieldset>
            <legend className="mb-1.5 text-sm font-semibold">Kecepatan pembimbing</legend>
            <div role="radiogroup" className="grid gap-2">
              {advisorOptions.map((o) => (
                <button key={o.v} role="radio" aria-checked={advisor === o.v} onClick={() => setAdvisor(o.v)} className={cn('rounded-xl border p-3 text-left text-sm transition', advisor === o.v ? 'border-indigo-600 bg-indigo-50 dark:border-indigo-400 dark:bg-indigo-950/40' : 'border-slate-200 dark:border-slate-700')}>
                  <span className="font-semibold">{o.l}</span> <span className="text-slate-500">· {o.d}</span>
                </button>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend className="mb-1.5 text-sm font-semibold">Jenis pengumpulan data</legend>
            <div role="radiogroup" className="grid gap-2">
              {complexityOptions.map((o) => (
                <button key={o.v} role="radio" aria-checked={complexity === o.v} onClick={() => setComplexity(o.v)} className={cn('rounded-xl border p-3 text-left text-sm transition', complexity === o.v ? 'border-indigo-600 bg-indigo-50 dark:border-indigo-400 dark:bg-indigo-950/40' : 'border-slate-200 dark:border-slate-700')}>
                  <span className="font-semibold">{o.l}</span> <span className="text-slate-500">· {o.d}</span>
                </button>
              ))}
            </div>
          </fieldset>
        </section>

        <section className="space-y-5 lg:col-span-3" aria-live="polite">
          <div className="grid gap-3 sm:grid-cols-3">
            {result.scenarios.map((s) => (
              <div key={s.label} className={cn('card p-4', s.label === 'Realistis' && 'border-2 border-indigo-300 dark:border-indigo-800')}>
                <Tag tone={s.label === 'Realistis' ? 'accent' : 'neutral'}>{s.label}</Tag>
                <p className="mt-2 font-heading text-xl font-bold">{formatMonthID(s.month)}</p>
                <p className="text-xs text-slate-500">
                  ± {s.weeks} minggu · {formatDateID(s.date, false)}
                </p>
              </div>
            ))}
          </div>

          {target && (
            <Notice tone={real.month <= target ? 'good' : 'warn'} title={real.month <= target ? 'Sesuai target' : 'Melewati targetmu'}>
              Target lulusmu {formatMonthID(target)}. Perkiraan realistis {formatMonthID(real.month)}.{' '}
              {real.month > target && (
                <>
                  Tambah jam per minggu, persempit ruang lingkup, atau pertimbangkan menggeser target. Lihat{' '}
                  <Link to="/roadmap" className="underline">
                    roadmap
                  </Link>
                  .
                </>
              )}
            </Notice>
          )}

          <div className="card p-5">
            <h2 className="font-heading text-lg font-bold">Durasi per tahap (minggu)</h2>
            <ul className="mt-3 space-y-2.5">
              {result.rows.map((r) => (
                <li key={r.id}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>{r.nama}</span>
                    <span className="font-semibold">{r.minggu}</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-slate-200 dark:bg-slate-800" role="presentation">
                    <div className="h-full rounded-full bg-indigo-500" style={{ width: `${(r.minggu / max) * 100}%` }} />
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
              Total sekitar <strong>{result.totalWeeks} minggu</strong> (±{Math.round(result.totalWeeks / 4.3)} bulan). Faktor: pembimbing ×{advisorFactor[advisor]}, data ×{complexityFactor[complexity]}.
            </p>
          </div>
          <CampusNote>Ini perkiraan kasar. Jadwal sidang, kuota penguji, libur akademik, dan periode wisuda kampus bisa menambah waktu tunggu. Tanyakan kalender akademik ke prodi.</CampusNote>
        </section>
      </div>
    </Page>
  );
}
