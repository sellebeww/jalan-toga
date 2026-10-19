import React, { useState } from 'react';
import { HeartHandshake, Phone, RefreshCw } from 'lucide-react';
import { burnoutDisclaimer, burnoutItems, burnoutLevels, burnoutScale, difficultAdvisor, motivationNotes, procrastinationTypes, supportResources, techniques } from '../data/mental';
import { appStore, useAppStore } from '../lib/store';
import { todayKey, formatDateID } from '../lib/date';
import { usePlan } from '../lib/usePlan';
import { fillTemplate, greetingNow } from '../data/pesan';
import { CopyButton, Disclosure, Notice, Page, PageHeader, ProgressBar, Segmented, Tag } from '../components/common/ui';
import { cn } from '../components/common/cn';
import { Link, useTabParam } from '../app/router';

type Tab = 'burnout' | 'prokrastinasi' | 'motivasi' | 'dosen' | 'bantuan';

const moods = [
  { v: 1 as const, e: '😞', l: 'Berat' },
  { v: 2 as const, e: '😕', l: 'Kurang baik' },
  { v: 3 as const, e: '😐', l: 'Biasa' },
  { v: 4 as const, e: '🙂', l: 'Baik' },
  { v: 5 as const, e: '😄', l: 'Semangat' }
];

function Burnout() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const answered = Object.keys(answers).length;
  const score = Object.values(answers).reduce((a, b) => a + b, 0);
  const done = answered === burnoutItems.length;
  const level = burnoutLevels.find((l) => score <= l.max) ?? burnoutLevels[burnoutLevels.length - 1];

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <section className="lg:col-span-3">
        <h2 className="font-heading text-xl font-bold">Cek kondisi dirimu</h2>
        <p className="mb-4 mt-1 text-sm text-slate-600 dark:text-slate-300">Pikirkan 2 minggu terakhir. Jawab apa adanya, tidak ada nilai benar atau salah.</p>
        <ol className="space-y-3">
          {burnoutItems.map((t, i) => (
            <li key={t}>
              <fieldset className="card p-4">
                <legend className="sr-only">Pernyataan {i + 1}</legend>
                <p className="mb-3 text-[15px] font-medium">
                  {i + 1}. {t}
                </p>
                <div role="radiogroup" aria-label={t} className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {burnoutScale.map((s, v) => (
                    <button
                      key={s}
                      type="button"
                      role="radio"
                      aria-checked={answers[i] === v}
                      onClick={() => setAnswers({ ...answers, [i]: v })}
                      className={cn('min-h-11 rounded-xl border px-2 text-sm font-semibold transition', answers[i] === v ? 'border-indigo-600 bg-indigo-600 text-white dark:border-indigo-400 dark:bg-indigo-500 dark:text-slate-950' : 'border-slate-300 hover:border-indigo-400 dark:border-slate-700')}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </fieldset>
            </li>
          ))}
        </ol>
      </section>

      <aside className="lg:col-span-2">
        <div className="card sticky top-20 p-5" aria-live="polite">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
            {answered}/{burnoutItems.length} dijawab
          </p>
          <ProgressBar value={(answered / burnoutItems.length) * 100} label="Jawaban terisi" className="my-2" />
          {!done ? (
            <p className="text-sm text-slate-600 dark:text-slate-300">Selesaikan semua pernyataan untuk melihat gambaran kondisimu.</p>
          ) : (
            <>
              <div className="mt-3 flex items-center gap-2">
                <Tag tone={level.tone}>Tingkat {level.label}</Tag>
                <span className="text-sm text-slate-500">skor {score}/30</span>
              </div>
              <p className="mt-2 text-sm">{level.desc}</p>
              <h3 className="mb-1.5 mt-4 text-sm font-bold">Langkah yang bisa kamu ambil</h3>
              <ul className="list-disc space-y-1.5 pl-5 text-sm">{level.langkah.map((l) => <li key={l}>{l}</li>)}</ul>
              {level.tone === 'bad' && (
                <div className="mt-4">
                  <Notice tone="warn" title="Kamu tidak harus melewatinya sendirian">
                    Pertimbangkan membuka tab “Bantuan” untuk daftar layanan konseling.
                  </Notice>
                </div>
              )}
              <button className="btn-soft mt-4" onClick={() => setAnswers({})}>
                <RefreshCw aria-hidden="true" className="h-4 w-4" /> Ulangi
              </button>
            </>
          )}
          <p className="mt-4 text-xs text-slate-500">{burnoutDisclaimer}</p>
        </div>
      </aside>
    </div>
  );
}

function Procrastination() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="space-y-8">
      <section>
        <h2 className="font-heading text-xl font-bold">Kenali tipe penundaanmu</h2>
        <p className="mb-4 mt-1 text-sm text-slate-600 dark:text-slate-300">Menunda biasanya bukan soal malas, tetapi cara menghindari perasaan tidak nyaman. Pilih yang paling mirip.</p>
        <div className="grid gap-3 md:grid-cols-2">
          {procrastinationTypes.map((t) => {
            const isOpen = open === t.id;
            return (
              <article key={t.id} className={cn('card p-5 transition', isOpen && 'border-indigo-300 dark:border-indigo-800')}>
                <h3 className="font-heading text-lg font-bold">{t.nama}</h3>
                <p className="mt-1 text-sm text-slate-700 dark:text-slate-200"><strong>Tandanya:</strong> {t.tanda}</p>
                <p className="mt-1 text-sm text-slate-700 dark:text-slate-200"><strong>Akarnya:</strong> {t.akar}</p>
                <button className="btn-soft mt-3 min-h-10 text-sm" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : t.id)}>
                  {isOpen ? 'Tutup langkah' : 'Lihat langkahnya'}
                </button>
                {isOpen && <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm marker:font-bold marker:text-indigo-600">{t.langkah.map((l) => <li key={l}>{l}</li>)}</ol>}
              </article>
            );
          })}
        </div>
      </section>
      <section>
        <h2 className="mb-3 font-heading text-xl font-bold">Teknik yang terbukti membantu</h2>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {techniques.map((t) => (
            <li key={t.nama} className="card p-4">
              <p className="font-semibold">{t.nama}</p>
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">{t.isi}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm">
          Siap mencoba? Buka{' '}
          <Link to="/fokus" className="font-semibold text-indigo-700 underline dark:text-indigo-300">
            Mode fokus
          </Link>{' '}
          dan mulai sesi 25 menit.
        </p>
      </section>
    </div>
  );
}

function Motivation() {
  const { moods: log } = useAppStore();
  const [idx, setIdx] = useState(() => Math.floor(Math.random() * motivationNotes.length));
  const [note, setNote] = useState('');
  const today = todayKey();
  const todayMood = log.find((m) => m.date === today);
  const last = log.slice(-14);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="card paper-grain flex flex-col justify-between p-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Catatan untukmu</p>
          <p className="mt-3 font-heading text-2xl font-bold leading-snug sm:text-[28px]">{motivationNotes[idx]}</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          <button className="btn-soft" onClick={() => setIdx((idx + 1 + Math.floor(Math.random() * (motivationNotes.length - 1))) % motivationNotes.length)}>
            <RefreshCw aria-hidden="true" className="h-4 w-4" /> Catatan lain
          </button>
          <CopyButton text={motivationNotes[idx]} label="Salin" />
        </div>
      </section>

      <section className="card p-6">
        <h2 className="font-heading text-xl font-bold">Bagaimana perasaanmu hari ini?</h2>
        <p className="mb-4 mt-1 text-sm text-slate-500">Mencatat suasana hati membantumu melihat pola, misalnya hari apa yang paling berat.</p>
        <div role="radiogroup" aria-label="Suasana hati hari ini" className="grid grid-cols-5 gap-2">
          {moods.map((m) => (
            <button
              key={m.v}
              type="button"
              role="radio"
              aria-checked={todayMood?.mood === m.v}
              onClick={() => appStore.addMood({ date: today, mood: m.v, note: todayMood?.note ?? note })}
              className={cn('flex min-h-16 flex-col items-center justify-center gap-0.5 rounded-xl border text-xs font-semibold transition', todayMood?.mood === m.v ? 'border-indigo-600 bg-indigo-50 dark:border-indigo-400 dark:bg-indigo-950/40' : 'border-slate-200 hover:border-indigo-300 dark:border-slate-700')}
            >
              <span className="text-2xl" aria-hidden="true">{m.e}</span>
              {m.l}
            </button>
          ))}
        </div>
        <div className="mt-3 flex gap-2">
          <input className="field" placeholder="Catatan singkat (opsional)" value={note} onChange={(e) => setNote(e.target.value)} maxLength={140} aria-label="Catatan suasana hati" />
          <button className="btn-soft" disabled={!todayMood} onClick={() => todayMood && appStore.addMood({ ...todayMood, note })}>
            Simpan
          </button>
        </div>
        {last.length > 0 && (
          <div className="mt-5">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">14 catatan terakhir</p>
            <ul className="flex flex-wrap gap-1.5">
              {last.map((m) => (
                <li key={m.date} title={`${formatDateID(m.date)}${m.note ? `: ${m.note}` : ''}`} className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-lg dark:bg-slate-800">
                  <span aria-hidden="true">{moods[m.mood - 1].e}</span>
                  <span className="sr-only">{formatDateID(m.date)}: {moods[m.mood - 1].l}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
}

function Advisor() {
  const { profile } = usePlan();
  return (
    <div>
      <p className="mb-4 max-w-2xl text-sm text-slate-600 dark:text-slate-300">Hubungan dengan dosen pembimbing menentukan kelancaran skripsi. Berikut situasi yang umum dan cara menanganinya dengan tenang dan profesional.</p>
      <ul className="space-y-3">
        {difficultAdvisor.map((s) => (
          <li key={s.id}>
            <Disclosure title={s.judul}>
              <p className="text-sm"><strong>Tandanya:</strong> {s.tanda}</p>
              <h3 className="mb-1.5 mt-3 text-sm font-bold">Yang bisa kamu lakukan</h3>
              <ol className="list-decimal space-y-1.5 pl-5 text-sm marker:font-bold marker:text-indigo-600">{s.langkah.map((l) => <li key={l}>{l}</li>)}</ol>
              {s.pesan && (
                <div className="mt-4">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-500">Contoh pesan</p>
                  <pre className="whitespace-pre-wrap rounded-xl bg-slate-100 p-3 font-sans text-sm dark:bg-slate-800/70">{fillTemplate(s.pesan, { dosen: profile?.dosen ?? '', nama: profile?.nama ?? '', nim: profile?.nim ?? '', waktu: greetingNow() })}</pre>
                  <div className="mt-2">
                    <CopyButton text={fillTemplate(s.pesan, { dosen: profile?.dosen ?? '', nama: profile?.nama ?? '', nim: profile?.nim ?? '' })} size="sm" />
                  </div>
                </div>
              )}
            </Disclosure>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Help() {
  return (
    <div className="max-w-3xl space-y-4">
      <Notice tone="tip" title="Meminta bantuan itu kekuatan">
        Banyak mahasiswa mengalami tekanan saat skripsi. Berbicara dengan orang yang tepat sering membuat bebannya terasa lebih ringan.
      </Notice>
      <ul className="space-y-3">
        {supportResources.map((r) => (
          <li key={r.nama} className="card flex gap-3 p-4">
            <Phone aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-indigo-600 dark:text-indigo-400" />
            <div>
              <p className="font-semibold">{r.nama}</p>
              <p className="text-sm text-slate-700 dark:text-slate-200">{r.isi}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="text-xs text-slate-500">Informasi layanan dapat berubah. Periksa kembali kontak resmi sebelum menghubungi. Situs ini bukan pengganti bantuan profesional.</p>
    </div>
  );
}

export default function Mental() {
  const [tab, setTab] = useTabParam<Tab>(['burnout', 'prokrastinasi', 'motivasi', 'dosen', 'bantuan'], 'burnout');
  return (
    <Page wide>
      <PageHeader eyebrow="Diri sendiri" title="Dukungan mental" subtitle="Cek burnout, atasi prokrastinasi, catat suasana hati, dan hadapi dosen sulit dengan tenang." icon={<HeartHandshake aria-hidden="true" className="h-5 w-5" />} />
      <div className="mb-6">
        <Segmented<Tab>
          ariaLabel="Bagian dukungan mental"
          value={tab}
          onChange={setTab}
          scrollable
          options={[
            { value: 'burnout', label: 'Cek burnout' },
            { value: 'prokrastinasi', label: 'Prokrastinasi' },
            { value: 'motivasi', label: 'Motivasi & mood' },
            { value: 'dosen', label: 'Dosen sulit' },
            { value: 'bantuan', label: 'Bantuan' }
          ]}
        />
      </div>
      {tab === 'burnout' && <Burnout />}
      {tab === 'prokrastinasi' && <Procrastination />}
      {tab === 'motivasi' && <Motivation />}
      {tab === 'dosen' && <Advisor />}
      {tab === 'bantuan' && <Help />}
    </Page>
  );
}
