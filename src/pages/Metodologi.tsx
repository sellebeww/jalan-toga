import { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Compass, RotateCcw } from 'lucide-react';
import { Link } from '../app/router';
import { approaches, scoreWizard, wizard, type Approach } from '../data/methods';
import type { ApproachId } from '../data/majors';
import { usePlan } from '../lib/usePlan';
import { appStore } from '../lib/store';
import { MajorSelect, resolveMajor } from '../components/common/MajorSelect';
import { CampusNote, Disclosure, Notice, Page, PageHeader, ProgressBar, Section, Tag } from '../components/common/ui';
import { cn } from '../components/common/cn';
import { toast } from '../lib/toast';

function ApproachDetail({ a, rank, persen }: { a: Approach; rank?: number; persen?: number }) {
  const { profile } = usePlan();
  const chosen = profile?.pendekatanId === a.id;
  return (
    <article className={cn('card p-5 sm:p-6', rank === 1 && 'border-2 border-indigo-300 dark:border-indigo-800')}>
      <div className="flex flex-wrap items-center gap-2">
        {rank && <Tag tone={rank === 1 ? 'accent' : 'neutral'}>{rank === 1 ? 'Paling cocok' : `Alternatif ${rank - 1}`}</Tag>}
        {chosen && <Tag tone="good">Dipakai di profilmu</Tag>}
      </div>
      <h3 className="mt-2 font-heading text-2xl font-bold">{a.nama}</h3>
      <p className="mt-1 text-slate-600 dark:text-slate-300">{a.ringkas}</p>
      {persen !== undefined && <ProgressBar value={persen} label={`Kecocokan ${a.nama}`} className="mt-3 max-w-sm" />}

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div>
          <h4 className="mb-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Cocok jika</h4>
          <ul className="list-disc space-y-1 pl-5 text-sm">{a.cocokJika.map((c) => <li key={c}>{c}</li>)}</ul>
        </div>
        <div>
          <h4 className="mb-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300">Hati-hati</h4>
          <ul className="list-disc space-y-1 pl-5 text-sm">{a.hatiHati.map((c) => <li key={c}>{c}</li>)}</ul>
        </div>
      </div>

      <div className="mt-5 grid gap-3">
        <Disclosure title="Desain yang umum dipakai">
          <ul className="list-disc space-y-1 pl-5 text-sm">{a.desain.map((c) => <li key={c}>{c}</li>)}</ul>
        </Disclosure>
        <Disclosure title="Sampling, instrumen, dan analisis">
          <dl className="space-y-3 text-sm">
            <div>
              <dt className="font-bold">Sampel / subjek</dt>
              <dd className="text-slate-700 dark:text-slate-200">{a.sampling}</dd>
            </div>
            <div>
              <dt className="font-bold">Instrumen</dt>
              <dd><ul className="list-disc pl-5">{a.instrumen.map((c) => <li key={c}>{c}</li>)}</ul></dd>
            </div>
            <div>
              <dt className="font-bold">Teknik analisis</dt>
              <dd><ul className="list-disc pl-5">{a.analisis.map((c) => <li key={c}>{c}</li>)}</ul></dd>
            </div>
            <div>
              <dt className="font-bold">Alat bantu</dt>
              <dd>{a.alat.join(' · ')}</dd>
            </div>
          </dl>
        </Disclosure>
        <Disclosure title="Isi Bab 3 jika memakai pendekatan ini">
          <p className="text-sm leading-relaxed">{a.bab3}</p>
          <p className="mt-2 text-sm">
            <Link to="/bab/bab-3" className="font-semibold text-indigo-700 underline dark:text-indigo-300">
              Buka panduan Bab 3
            </Link>
          </p>
        </Disclosure>
        <Disclosure title="Contoh judul">
          <ul className="list-disc space-y-1 pl-5 text-sm">{a.contohJudul.map((c) => <li key={c}>{c}</li>)}</ul>
        </Disclosure>
      </div>

      {profile && !chosen && (
        <button
          className="btn-primary mt-5"
          onClick={() => {
            appStore.updateProfile({ pendekatanId: a.id });
            toast('Pendekatan disimpan', { body: `${a.nama} dipakai untuk menyesuaikan panduan bab.`, tone: 'success' });
          }}
        >
          <Check aria-hidden="true" className="h-4 w-4" /> Pakai pendekatan ini
        </button>
      )}
    </article>
  );
}

export default function Metodologi() {
  const { profile, major: profMajor } = usePlan();
  const [majorId, setMajorId] = useState<string | null>(null);
  const major = resolveMajor(majorId, profile?.jurusanId);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const finished = step >= wizard.length;

  const results = useMemo(() => scoreWizard(answers, major.pendekatan), [answers, major]);
  const q = wizard[step];

  const reset = () => {
    setStep(0);
    setAnswers({});
  };

  return (
    <Page>
      <PageHeader
        eyebrow="Mulai skripsi"
        title="Pemilih metodologi"
        subtitle="Jawab beberapa pertanyaan tentang tujuan, data, waktu, dan kenyamananmu. Kamu akan mendapat pendekatan yang cocok lengkap dengan alasannya."
        icon={<Compass aria-hidden="true" className="h-5 w-5" />}
      />

      {!profile && !finished && (
        <div className="mb-5 max-w-md">
          <MajorSelect value={major.id} onChange={(id) => setMajorId(id)} hint="Jurusan dipakai untuk menimbang pendekatan yang lazim." />
        </div>
      )}

      {!finished && q && (
        <section className="card p-5 sm:p-7" aria-live="polite">
          <div className="mb-4 flex items-center justify-between text-xs font-semibold text-slate-500">
            <span>
              Pertanyaan {step + 1} dari {wizard.length}
            </span>
            {profMajor && <span>{profMajor.nama.split(' (')[0]}</span>}
          </div>
          <ProgressBar value={((step + 1) / wizard.length) * 100} label="Kemajuan wizard" className="mb-5" />
          <h2 className="font-heading text-2xl font-bold leading-snug">{q.tanya}</h2>
          {q.bantuan && <p className="mt-1 text-sm text-slate-500">{q.bantuan}</p>}
          <div role="radiogroup" aria-label={q.tanya} className="mt-5 grid gap-2.5">
            {q.opsi.map((o, i) => {
              const selected = answers[q.id] === i;
              return (
                <button
                  key={o.label}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => setAnswers({ ...answers, [q.id]: i })}
                  className={cn(
                    'flex min-h-12 items-center gap-3 rounded-2xl border px-4 py-3 text-left transition',
                    selected ? 'border-indigo-600 bg-indigo-50 font-semibold ring-2 ring-indigo-600/20 dark:border-indigo-400 dark:bg-indigo-950/40' : 'border-slate-200 bg-white hover:border-indigo-300 dark:border-slate-700 dark:bg-slate-900/50'
                  )}
                >
                  <span aria-hidden="true" className={cn('flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2', selected ? 'border-indigo-600 bg-indigo-600 dark:border-indigo-400 dark:bg-indigo-400' : 'border-slate-300 dark:border-slate-600')}>
                    {selected && <Check className="h-3 w-3 text-white dark:text-slate-950" />}
                  </span>
                  <span className="text-[15px]">{o.label}</span>
                </button>
              );
            })}
          </div>
          <div className="mt-6 flex items-center justify-between gap-3">
            <button className="btn-soft" disabled={step === 0} onClick={() => setStep(step - 1)}>
              <ArrowLeft aria-hidden="true" className="h-4 w-4" /> Kembali
            </button>
            <button className="btn-primary" disabled={answers[q.id] === undefined} onClick={() => setStep(step + 1)}>
              {step === wizard.length - 1 ? 'Lihat rekomendasi' : 'Lanjut'} <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </button>
          </div>
        </section>
      )}

      {finished && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-heading text-2xl font-bold">Rekomendasi untukmu</h2>
            <button className="btn-soft" onClick={reset}>
              <RotateCcw aria-hidden="true" className="h-4 w-4" /> Ulangi
            </button>
          </div>
          {results.slice(0, 3).map((r, i) => (
            <div key={r.id}>
              <ApproachDetail a={approaches[r.id]} rank={i + 1} persen={r.persen} />
              {r.alasan.length > 0 && (
                <details className="mt-2 px-1 text-sm text-slate-600 dark:text-slate-300">
                  <summary className="cursor-pointer font-semibold">Mengapa ini muncul?</summary>
                  <ul className="mt-1.5 list-disc space-y-1 pl-5">{r.alasan.map((a) => <li key={a}>{a}</li>)}</ul>
                  {!r.lazimDiJurusan && <p className="mt-1.5 text-amber-700 dark:text-amber-300">Pendekatan ini kurang lazim di jurusanmu. Tanyakan prodi apakah diperbolehkan.</p>}
                </details>
              )}
            </div>
          ))}

          <Notice tone="info" title="Ini rekomendasi awal, bukan keputusan akhir">
            Bawa hasil ini ke calon pembimbing. Mereka tahu aturan prodi dan kebiasaan penguji di jurusanmu.
          </Notice>

          <Section title="Semua pendekatan secara ringkas">
            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
              <table className="w-full min-w-[640px] text-left text-sm">
                <caption className="sr-only">Perbandingan pendekatan penelitian</caption>
                <thead className="bg-slate-100 text-xs uppercase tracking-wide text-slate-600 dark:bg-slate-800/70 dark:text-slate-300">
                  <tr>
                    <th scope="col" className="px-4 py-3">Pendekatan</th>
                    <th scope="col" className="px-4 py-3">Intinya</th>
                    <th scope="col" className="px-4 py-3">Instrumen khas</th>
                    <th scope="col" className="px-4 py-3">Alat bantu</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {(Object.keys(approaches) as ApproachId[]).map((id) => (
                    <tr key={id} className="align-top">
                      <th scope="row" className="px-4 py-3 font-semibold">{approaches[id].nama}</th>
                      <td className="px-4 py-3">{approaches[id].ringkas}</td>
                      <td className="px-4 py-3">{approaches[id].instrumen[0]}</td>
                      <td className="px-4 py-3">{approaches[id].alat.slice(0, 3).join(', ')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>
          <CampusNote>Beberapa prodi hanya mengizinkan jenis penelitian tertentu (misalnya kajian pustaka murni atau PTK). Pastikan pendekatanmu diizinkan sebelum menulis proposal.</CampusNote>
        </div>
      )}
    </Page>
  );
}
