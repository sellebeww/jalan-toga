import React, { useMemo, useState } from 'react';
import { Calculator, FlaskConical, Wrench } from 'lucide-react';
import { Link, useTabParam } from '../app/router';
import { cochran, describe, fmt, interpretR, parseNumbers, pearson, rulesOfThumb, slovin, Z_TABLE } from '../lib/sampling';
import { recommendTest, software, statTests, type StatAnswers, type StatGoal } from '../data/stats';
import { CampusNote, CopyButton, Disclosure, EmptyState, Field, Notice, Page, PageHeader, Section, Segmented, Tag } from '../components/common/ui';
import { cn } from '../components/common/cn';

type Tab = 'sampel' | 'deskriptif' | 'uji' | 'software' | 'alat';

function Result({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-2xl bg-indigo-50 p-4 dark:bg-indigo-950/40" aria-live="polite">
      <p className="text-xs font-bold uppercase tracking-wider text-indigo-800 dark:text-indigo-200">{label}</p>
      <p className="font-heading text-3xl font-bold text-slate-900 dark:text-slate-50">{value}</p>
      {hint && <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">{hint}</p>}
    </div>
  );
}

function NumberField({ label, value, onChange, hint, step, min, max }: { label: string; value: string; onChange: (v: string) => void; hint?: string; step?: string; min?: string; max?: string }) {
  return (
    <Field label={label} hint={hint}>
      {(id) => <input id={id} className="field" type="number" inputMode="decimal" value={value} onChange={(e) => onChange(e.target.value)} step={step} min={min} max={max} />}
    </Field>
  );
}

function SampleTab() {
  const [N, setN] = useState('500');
  const [e1, setE1] = useState('0.05');
  const [z, setZ] = useState('95');
  const [p, setP] = useState('0.5');
  const [e2, setE2] = useState('0.05');
  const [N2, setN2] = useState('');
  const [k, setK] = useState('3');

  const s = slovin(Number(N), Number(e1));
  const c = cochran(Z_TABLE[z], Number(p), Number(e2), N2.trim() ? Number(N2) : undefined);
  const r = rulesOfThumb(Number(k) || 1);

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <section className="card p-5">
        <h2 className="font-heading text-xl font-bold">Rumus Slovin</h2>
        <p className="mb-4 mt-1 text-sm text-slate-600 dark:text-slate-300">Untuk populasi yang jumlahnya diketahui. n = N / (1 + N·e²)</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <NumberField label="Populasi (N)" value={N} onChange={setN} min="1" />
          <Field label="Toleransi kesalahan (e)">
            {(id) => (
              <select id={id} className="field" value={e1} onChange={(ev) => setE1(ev.target.value)}>
                <option value="0.01">1% (0,01)</option>
                <option value="0.05">5% (0,05)</option>
                <option value="0.1">10% (0,10)</option>
                <option value="0.15">15% (0,15)</option>
                <option value="0.2">20% (0,20)</option>
              </select>
            )}
          </Field>
        </div>
        <div className="mt-4">{s ? <Result label="Sampel minimal" value={`${s.n} responden`} hint={`Hasil mentah ${fmt(s.raw, 2)}, dibulatkan ke atas.`} /> : <Notice tone="warn">Isi populasi (≥ 1) dan toleransi antara 0 dan 1.</Notice>}</div>
        <p className="mt-3 text-xs text-slate-500">Catatan: Slovin menganggap populasi homogen dan sering dikritik; tanyakan apakah prodi-mu menerimanya.</p>
      </section>

      <section className="card p-5">
        <h2 className="font-heading text-xl font-bold">Rumus Cochran</h2>
        <p className="mb-4 mt-1 text-sm text-slate-600 dark:text-slate-300">Untuk proporsi. Bisa untuk populasi tak diketahui, atau dikoreksi bila N diketahui.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Tingkat kepercayaan">
            {(id) => (
              <select id={id} className="field" value={z} onChange={(ev) => setZ(ev.target.value)}>
                <option value="90">90% (Z = 1,645)</option>
                <option value="95">95% (Z = 1,96)</option>
                <option value="99">99% (Z = 2,576)</option>
              </select>
            )}
          </Field>
          <NumberField label="Proporsi perkiraan (p)" value={p} onChange={setP} step="0.01" min="0.01" max="0.99" hint="Jika tidak tahu, pakai 0,5 (paling konservatif)." />
          <NumberField label="Margin error (e)" value={e2} onChange={setE2} step="0.01" min="0.01" max="0.5" />
          <NumberField label="Populasi N (opsional)" value={N2} onChange={setN2} hint="Kosongkan bila tidak diketahui." />
        </div>
        <div className="mt-4">
          {c ? (
            <Result label="Sampel minimal" value={`${c.n} responden`} hint={c.nAdjusted ? `n₀ = ${fmt(c.n0, 1)}, setelah koreksi populasi hingga ${fmt(c.nAdjusted, 1)}.` : `n₀ = ${fmt(c.n0, 1)} (tanpa koreksi populasi).`} />
          ) : (
            <Notice tone="warn">Periksa nilai p dan e (antara 0 dan 1).</Notice>
          )}
        </div>
      </section>

      <section className="card p-5 lg:col-span-2">
        <h2 className="font-heading text-xl font-bold">Aturan praktis untuk analisis tertentu</h2>
        <div className="mt-3 max-w-xs">
          <NumberField label="Jumlah variabel bebas / prediktor" value={k} onChange={setK} min="1" />
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ['Regresi (10× prediktor)', `${r.regresiTenPer}`, 'Batas bawah yang sering dipakai'],
            ['Regresi (15× prediktor)', `${r.regresiFifteenPer}`, 'Lebih aman'],
            ['Regresi (Green: 50 + 8k)', `${r.regresiGreen}`, 'Untuk menguji model keseluruhan'],
            ['PLS-SEM (10× jalur terbanyak)', `${r.plsSem}`, 'Aturan 10 kali; periksa dengan power analysis'],
            ['Korelasi', `≥ ${r.korelasi}`, 'Minimal agar hasil stabil'],
            ['Eksperimen per kelompok', `≥ ${r.eksperimenPerKelompok}`, 'Lebih besar lebih baik; G*Power untuk presisi']
          ].map(([a, b, c2]) => (
            <div key={a} className="rounded-xl border border-slate-200 p-3.5 dark:border-slate-800">
              <p className="text-xs font-semibold text-slate-500">{a}</p>
              <p className="font-heading text-2xl font-bold">{b}</p>
              <p className="text-xs text-slate-500">{c2}</p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <CampusNote>Sebagian prodi menetapkan minimal sampel sendiri. Utamakan aturan prodi dan arahan pembimbing.</CampusNote>
        </div>
      </section>
    </div>
  );
}

function DescribeTab() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const da = useMemo(() => describe(parseNumbers(a)), [a]);
  const corr = useMemo(() => pearson(parseNumbers(a), parseNumbers(b)), [a, b]);
  const rows: [string, string][] = da
    ? [
        ['Jumlah data (n)', String(da.n)],
        ['Rata-rata', fmt(da.mean, 3)],
        ['Median', fmt(da.median, 3)],
        ['Modus', da.modus.length ? da.modus.join(', ') : 'tidak ada'],
        ['Minimum', fmt(da.min, 3)],
        ['Maksimum', fmt(da.max, 3)],
        ['Rentang', fmt(da.range, 3)],
        ['Varians (sampel)', fmt(da.variance, 3)],
        ['Simpangan baku (SD)', fmt(da.sd, 3)]
      ]
    : [];

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <section className="card p-5">
        <h2 className="font-heading text-xl font-bold">Statistik deskriptif cepat</h2>
        <p className="mb-3 mt-1 text-sm text-slate-600 dark:text-slate-300">Tempel angka dipisah spasi, koma, atau baris baru (dari Excel pun bisa).</p>
        <label htmlFor="data-a" className="mb-1.5 block text-sm font-semibold">
          Data pertama
        </label>
        <textarea id="data-a" className="field min-h-32 font-mono" value={a} onChange={(e) => setA(e.target.value)} placeholder={'78 85 90\n72, 88, 91'} />
        <label htmlFor="data-b" className="mb-1.5 mt-4 block text-sm font-semibold">
          Data kedua (opsional, untuk korelasi Pearson)
        </label>
        <textarea id="data-b" className="field min-h-24 font-mono" value={b} onChange={(e) => setB(e.target.value)} placeholder="Jumlah angka sama dengan data pertama" />
      </section>

      <section className="card p-5" aria-live="polite">
        <h2 className="mb-3 font-heading text-xl font-bold">Hasil</h2>
        {!da ? (
          <EmptyState icon={<Calculator className="h-6 w-6" />} title="Belum ada data" body="Masukkan angka di sebelah kiri untuk melihat ringkasan." />
        ) : (
          <>
            <dl className="divide-y divide-slate-200 dark:divide-slate-800">
              {rows.map(([k, v]) => (
                <div key={k} className="flex justify-between py-2 text-sm">
                  <dt className="text-slate-600 dark:text-slate-300">{k}</dt>
                  <dd className="font-mono font-semibold">{v}</dd>
                </div>
              ))}
            </dl>
            {corr && (
              <div className="mt-4 rounded-2xl bg-indigo-50 p-4 dark:bg-indigo-950/40">
                <p className="text-xs font-bold uppercase tracking-wider text-indigo-800 dark:text-indigo-200">Korelasi Pearson</p>
                <p className="font-heading text-2xl font-bold">r = {fmt(corr.r, 3)}</p>
                <p className="text-sm">{interpretR(corr.r)} (n = {corr.n})</p>
                <p className="mt-1 text-xs text-slate-500">Untuk uji signifikansi (nilai p), gunakan SPSS/JASP/R.</p>
              </div>
            )}
            <div className="mt-4">
              <CopyButton text={rows.map(([k, v]) => `${k}: ${v}`).join('\n')} label="Salin ringkasan" size="sm" />
            </div>
          </>
        )}
      </section>
    </div>
  );
}

type Choice<T extends string> = { value: T; label: string };

function ChoiceGroup<T extends string>({ label, options, value, onChange }: { label: string; options: Choice<T>[]; value?: T; onChange: (v: T) => void }) {
  return (
    <fieldset className="mb-5">
      <legend className="mb-2 text-sm font-semibold">{label}</legend>
      <div role="radiogroup" aria-label={label} className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            role="radio"
            aria-checked={value === o.value}
            onClick={() => onChange(o.value)}
            className={cn(
              'min-h-11 rounded-xl border px-4 text-sm font-semibold transition',
              value === o.value ? 'border-indigo-600 bg-indigo-600 text-white dark:border-indigo-400 dark:bg-indigo-500 dark:text-slate-950' : 'border-slate-300 bg-white hover:border-indigo-400 dark:border-slate-700 dark:bg-slate-900'
            )}
          >
            {o.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

function TestTab() {
  const [a, setA] = useState<StatAnswers>({});
  const set = (patch: Partial<StatAnswers>) => setA((prev) => ({ ...prev, ...patch }));
  const reset = (goal: StatGoal) => setA({ goal });
  const pick = recommendTest(a);

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <section className="card h-fit p-5 lg:col-span-2">
        <ChoiceGroup<StatGoal>
          label="Apa tujuan analisismu?"
          value={a.goal}
          onChange={reset}
          options={[
            { value: 'beda', label: 'Membandingkan kelompok' },
            { value: 'hubungan', label: 'Melihat hubungan' },
            { value: 'pengaruh', label: 'Menguji pengaruh' },
            { value: 'instrumen', label: 'Menguji kuesioner' }
          ]}
        />
        {a.goal === 'beda' && (
          <>
            <ChoiceGroup label="Jenis data yang dibandingkan" value={a.skala} onChange={(v) => set({ skala: v })} options={[{ value: 'numerik', label: 'Angka (nilai, skor)' }, { value: 'ordinal', label: 'Peringkat / ordinal' }, { value: 'kategorik', label: 'Kategori (ya/tidak, jenis)' }]} />
            <ChoiceGroup label="Jumlah kelompok" value={a.kelompok} onChange={(v) => set({ kelompok: v })} options={[{ value: 'satu', label: '1 (vs nilai acuan)' }, { value: 'dua', label: '2 kelompok' }, { value: 'tiga', label: '3 atau lebih' }]} />
            {a.kelompok && a.kelompok !== 'satu' && (
              <ChoiceGroup label="Hubungan antar kelompok" value={a.desain} onChange={(v) => set({ desain: v })} options={[{ value: 'independen', label: 'Orang berbeda (independen)' }, { value: 'berpasangan', label: 'Orang sama diukur ulang' }]} />
            )}
            {a.skala === 'numerik' && a.kelompok && a.kelompok !== 'satu' && (
              <ChoiceGroup label="Apakah data berdistribusi normal?" value={a.normal} onChange={(v) => set({ normal: v })} options={[{ value: 'ya', label: 'Ya / n besar' }, { value: 'tidak', label: 'Tidak / ragu' }]} />
            )}
          </>
        )}
        {a.goal === 'hubungan' && (
          <>
            <ChoiceGroup label="Jenis data" value={a.skala} onChange={(v) => set({ skala: v })} options={[{ value: 'numerik', label: 'Angka' }, { value: 'ordinal', label: 'Ordinal' }, { value: 'kategorik', label: 'Kategori' }]} />
            {a.skala === 'numerik' && <ChoiceGroup label="Apakah data normal?" value={a.normal} onChange={(v) => set({ normal: v })} options={[{ value: 'ya', label: 'Ya' }, { value: 'tidak', label: 'Tidak / ragu' }]} />}
          </>
        )}
        {a.goal === 'pengaruh' && (
          <>
            <ChoiceGroup label="Variabel terikat (Y) berupa" value={a.dv} onChange={(v) => set({ dv: v })} options={[{ value: 'numerik', label: 'Angka kontinu' }, { value: 'biner', label: 'Biner (ya/tidak)' }, { value: 'ordinal', label: 'Ordinal' }]} />
            <ChoiceGroup label="Variabel bebas (X)" value={a.jumlahX} onChange={(v) => set({ jumlahX: v })} options={[{ value: 'satu', label: 'Satu' }, { value: 'banyak', label: 'Beberapa' }, { value: 'laten', label: 'Konstruk laten / mediasi' }]} />
          </>
        )}
        {a.goal === 'instrumen' && (
          <ChoiceGroup label="Yang diuji" value={a.instrumen} onChange={(v) => set({ instrumen: v })} options={[{ value: 'likert', label: 'Kuesioner Likert' }, { value: 'dikotomi', label: 'Tes benar/salah' }, { value: 'validitas', label: 'Hanya validitas' }]} />
        )}
        {a.goal && <button className="btn-ghost mt-1 min-h-10 text-sm" onClick={() => setA({})}>Mulai ulang</button>}
      </section>

      <section className="space-y-4 lg:col-span-3" aria-live="polite">
        {!a.goal && <EmptyState icon={<FlaskConical className="h-6 w-6" />} title="Pilih tujuan analisis dulu" body="Jawab pertanyaan di kiri. Rekomendasi uji, asumsi, dan cara menjalankannya muncul di sini." />}
        {a.goal && !pick && <EmptyState title="Lengkapi jawabanmu" body="Masih ada pertanyaan yang belum dijawab." />}
        {pick && (
          <>
            <Notice tone="tip" title="Catatan">
              {pick.catatan}
            </Notice>
            {pick.tests.map((id, i) => {
              const t = statTests[id];
              if (!t) return null;
              return (
                <article key={id} className="card p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-heading text-xl font-bold">{t.nama}</h3>
                    {i === 0 && <Tag tone="accent">Utama</Tag>}
                    {i > 0 && <Tag>Pendukung</Tag>}
                  </div>
                  <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">{t.kapan}</p>
                  <div className="mt-3 grid gap-4 sm:grid-cols-2">
                    <div>
                      <h4 className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-500">Asumsi</h4>
                      <ul className="list-disc space-y-0.5 pl-5 text-sm">{t.asumsi.map((x) => <li key={x}>{x}</li>)}</ul>
                    </div>
                    <div>
                      <h4 className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-500">Cara membaca hasil</h4>
                      <p className="text-sm">{t.baca}</p>
                      {t.efek && <p className="mt-1 text-xs text-slate-500">Ukuran efek: {t.efek}</p>}
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <Disclosure title="Di SPSS">
                      <p className="font-mono text-sm">{t.spss}</p>
                    </Disclosure>
                    <Disclosure title="Di Excel">
                      <p className="font-mono text-sm">{t.excel}</p>
                    </Disclosure>
                    <Disclosure title="Di Python">
                      <pre className="overflow-x-auto rounded-lg bg-slate-100 p-3 font-mono text-xs dark:bg-slate-800">{t.python}</pre>
                      <div className="mt-2"><CopyButton text={t.python} size="sm" label="Salin kode" /></div>
                    </Disclosure>
                    <Disclosure title="Di R">
                      <pre className="overflow-x-auto rounded-lg bg-slate-100 p-3 font-mono text-xs dark:bg-slate-800">{t.r}</pre>
                      <div className="mt-2"><CopyButton text={t.r} size="sm" label="Salin kode" /></div>
                    </Disclosure>
                  </div>
                </article>
              );
            })}
          </>
        )}
      </section>
    </div>
  );
}

function SoftwareTab() {
  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {software.map((s) => (
        <li key={s.id} className="card p-5">
          <h2 className="font-heading text-xl font-bold">{s.nama}</h2>
          <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">{s.untuk}</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div>
              <h3 className="mb-1 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Kelebihan</h3>
              <ul className="list-disc space-y-0.5 pl-5 text-sm">{s.kelebihan.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
            <div>
              <h3 className="mb-1 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300">Kekurangan</h3>
              <ul className="list-disc space-y-0.5 pl-5 text-sm">{s.kekurangan.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          </div>
          <p className="mt-3 text-sm">
            <strong>Cara mulai:</strong> {s.mulai}
          </p>
          <p className="mt-2 text-xs text-slate-500">
            <strong>Akses:</strong> {s.akses}
          </p>
        </li>
      ))}
    </ul>
  );
}

const legacyTools = [
  ['likert', 'Likert & kontinuum', 'Skor total dan kategori kriteria'],
  ['cronbach', "Cronbach's Alpha", 'Reliabilitas kuesioner'],
  ['kr20', 'KR-20', 'Reliabilitas tes benar/salah'],
  ['spearman', 'Spearman–Brown', 'Koreksi reliabilitas belah dua'],
  ['sample', 'Tabel sampel (Isaac–Michael, Krejcie)', 'Penentuan sampel dari tabel'],
  ['sampling', 'Klasifikasi teknik sampling', 'Latihan probability vs nonprobability'],
  ['error', 'Simulator galat tipe I & II', 'Memahami α dan β'],
  ['decision', 'Pohon keputusan desain riset', 'Memilih 1 dari 10 desain'],
  ['ieee', 'Pembuat sitasi IEEE', 'Format kurung siku'],
  ['chart', 'Pemilih grafik', 'Grafik yang tepat untuk data'],
  ['alignment', 'Checklist keselarasan skripsi', 'Masalah ↔ tujuan ↔ metode ↔ kesimpulan'],
  ['poster', 'Checklist poster ilmiah', 'Audit desain poster']
];

function ToolsTab() {
  return (
    <div>
      <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">Alat interaktif tambahan dari materi Metodologi Riset. Cocok untuk semua jurusan yang memakai kuesioner dan analisis kuantitatif.</p>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {legacyTools.map(([id, name, desc]) => (
          <li key={id}>
            <Link to={`/belajar?tab=alat&alat=${id}`} className="card block h-full p-4 transition hover:border-indigo-300 dark:hover:border-indigo-800">
              <p className="font-semibold">{name}</p>
              <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Toolkit() {
  const [tab, setTab] = useTabParam<Tab>(['sampel', 'deskriptif', 'uji', 'software', 'alat'], 'sampel');
  return (
    <Page wide>
      <PageHeader
        eyebrow="Menulis"
        title="Toolkit penelitian"
        subtitle="Kalkulator sampel, statistik cepat, pemilih uji statistik, dan penjelasan perangkat lunak dalam bahasa sederhana."
        icon={<Wrench aria-hidden="true" className="h-5 w-5" />}
      />
      <div className="mb-6">
        <Segmented<Tab>
          ariaLabel="Bagian toolkit"
          value={tab}
          onChange={setTab}
          scrollable
          options={[
            { value: 'sampel', label: 'Kalkulator sampel' },
            { value: 'deskriptif', label: 'Statistik cepat' },
            { value: 'uji', label: 'Pilih uji statistik' },
            { value: 'software', label: 'SPSS, Excel, Python' },
            { value: 'alat', label: 'Alat lainnya' }
          ]}
        />
      </div>
      <Section>
        {tab === 'sampel' && <SampleTab />}
        {tab === 'deskriptif' && <DescribeTab />}
        {tab === 'uji' && <TestTab />}
        {tab === 'software' && <SoftwareTab />}
        {tab === 'alat' && <ToolsTab />}
      </Section>
    </Page>
  );
}
