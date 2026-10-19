import React, { useMemo, useState } from 'react';
import { BookmarkPlus, Check, Dices, Lightbulb, SpellCheck, Trash2 } from 'lucide-react';
import { Link, navigate, useTabParam } from '../app/router';
import { feasibilityQuestions, feasibilityVerdict } from '../data/topik';
import { buildFormulation, generateIdeas, type FormulationInput, type IdeaMode } from '../lib/topicGen';
import { appStore, useAppStore } from '../lib/store';
import { MajorSelect, resolveMajor } from '../components/common/MajorSelect';
import { CopyButton, EmptyState, Field, Notice, Page, PageHeader, ProgressBar, Section, Segmented, Tag } from '../components/common/ui';
import { cn } from '../components/common/cn';
import { toast } from '../lib/toast';
import { formatDateID } from '../lib/date';

type Tab = 'ide' | 'layak' | 'rumus' | 'simpan';

function IdeaTab({ onCheck }: { onCheck: (judul: string) => void }) {
  const { profile, savedTopics } = useAppStore();
  const [majorId, setMajorId] = useState<string | null>(null);
  const major = resolveMajor(majorId, profile?.jurusanId);
  const [clusters, setClusters] = useState<string[]>([]);
  const [mode, setMode] = useState<IdeaMode>('kuantitatif');
  const [seed, setSeed] = useState(1);

  const ideas = useMemo(() => generateIdeas(major, clusters, mode, 6, seed), [major, clusters, mode, seed]);
  const toggleCluster = (id: string) => setClusters((c) => (c.includes(id) ? c.filter((x) => x !== id) : [...c, id]));

  return (
    <div className="space-y-5">
      <div className="grid gap-4 md:grid-cols-2">
        {!profile && <MajorSelect value={major.id} onChange={(id) => { setMajorId(id); setClusters([]); }} hint="Atur profil agar jurusan terisi otomatis." />}
        <div>
          <p className="mb-1.5 text-sm font-semibold">Jenis penelitian</p>
          <Segmented<IdeaMode>
            ariaLabel="Jenis penelitian"
            value={mode}
            onChange={(m) => { setMode(m); setSeed(1); }}
            scrollable
            options={[
              { value: 'kuantitatif', label: 'Kuantitatif' },
              { value: 'kualitatif', label: 'Kualitatif / studi kasus' },
              { value: 'pengembangan', label: 'Pengembangan' }
            ]}
          />
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm font-semibold">Bidang minatmu (boleh pilih lebih dari satu)</p>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Bidang minat">
          {major.minat.map((c) => {
            const on = clusters.includes(c.id);
            return (
              <button
                key={c.id}
                type="button"
                aria-pressed={on}
                onClick={() => { toggleCluster(c.id); setSeed(1); }}
                className={cn(
                  'min-h-11 rounded-full border px-4 text-sm font-semibold transition',
                  on ? 'border-indigo-600 bg-indigo-600 text-white dark:border-indigo-400 dark:bg-indigo-500 dark:text-slate-950' : 'border-slate-300 bg-white hover:border-indigo-400 dark:border-slate-700 dark:bg-slate-900'
                )}
              >
                {c.label}
              </button>
            );
          })}
        </div>
        {clusters.length === 0 && <p className="mt-2 text-xs text-slate-500">Belum memilih? Tidak apa-apa, ide dari semua bidang akan ditampilkan.</p>}
      </div>

      <div className="flex items-center justify-between gap-3">
        <h3 className="font-heading text-lg font-bold">Ide judul untukmu</h3>
        <button className="btn-soft" onClick={() => setSeed((s) => s + 1)}>
          <Dices aria-hidden="true" className="h-4 w-4" /> Acak lagi
        </button>
      </div>

      {ideas.length === 0 ? (
        <EmptyState title="Belum ada ide" body="Coba ganti jenis penelitian atau bidang minat." />
      ) : (
        <ul className="space-y-3">
          {ideas.map((idea) => {
            const saved = savedTopics.some((t) => t.judul === idea);
            return (
              <li key={idea} className="card p-4">
                <p className="font-heading text-[17px] font-semibold leading-snug">{idea}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <button className="btn-soft min-h-10 text-sm" onClick={() => onCheck(idea)}>
                    <Check aria-hidden="true" className="h-4 w-4" /> Cek kelayakan
                  </button>
                  <button className="btn-soft min-h-10 text-sm" onClick={() => navigate(`/judul?t=${encodeURIComponent(idea)}`)}>
                    <SpellCheck aria-hidden="true" className="h-4 w-4" /> Periksa judul
                  </button>
                  <button
                    className="btn-soft min-h-10 text-sm"
                    disabled={saved}
                    onClick={() => {
                      appStore.saveTopic(idea);
                      toast('Topik disimpan', { tone: 'success' });
                    }}
                  >
                    <BookmarkPlus aria-hidden="true" className="h-4 w-4" /> {saved ? 'Tersimpan' : 'Simpan'}
                  </button>
                  <CopyButton text={idea} size="sm" className="min-h-10" />
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <Notice tone="tip" title="Ide ini titik awal, bukan judul final">
        Ubah variabel dan objek menjadi hal yang benar-benar kamu minati dan datanya bisa kamu akses. Diskusikan dengan calon pembimbing. Contoh judul nyata jurusanmu:
        <ul>
          {major.contohJudul.map((j) => (
            <li key={j}>{j}</li>
          ))}
        </ul>
      </Notice>
    </div>
  );
}

function FeasibilityTab({ initialTitle }: { initialTitle: string }) {
  const [title, setTitle] = useState(initialTitle);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [done, setDone] = useState(false);

  const answered = Object.keys(answers).length;
  const total = feasibilityQuestions.reduce((s, q) => s + (answers[q.id] === undefined ? 0 : 2 - answers[q.id]), 0);
  const max = feasibilityQuestions.length * 2;
  const verdict = feasibilityVerdict(total, max);
  const weak = feasibilityQuestions.filter((q) => answers[q.id] !== undefined && answers[q.id] >= 1);

  return (
    <div className="space-y-5">
      <Field label="Judul/topik yang diuji" hint="Opsional, hanya agar hasil bisa disimpan bersama judul.">
        {(id) => <input id={id} className="field" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Tempel judul kandidatmu" maxLength={300} />}
      </Field>

      <ol className="space-y-4">
        {feasibilityQuestions.map((q, qi) => (
          <li key={q.id}>
            <fieldset className="card p-4 sm:p-5">
              <legend className="sr-only">{q.aspek}</legend>
              <p className="mb-1 text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
                {qi + 1}. {q.aspek}
              </p>
              <p className="mb-3 font-semibold">{q.tanya}</p>
              <div role="radiogroup" aria-label={q.tanya} className="grid gap-2">
                {q.opsi.map((o, i) => {
                  const selected = answers[q.id] === i;
                  return (
                    <button
                      key={o}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      onClick={() => { setAnswers({ ...answers, [q.id]: i }); setDone(false); }}
                      className={cn(
                        'flex min-h-11 items-center gap-3 rounded-xl border px-3.5 py-2.5 text-left text-sm transition',
                        selected ? 'border-indigo-600 bg-indigo-50 font-semibold dark:border-indigo-400 dark:bg-indigo-950/40' : 'border-slate-200 hover:border-indigo-300 dark:border-slate-700'
                      )}
                    >
                      <span aria-hidden="true" className={cn('flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2', selected ? 'border-indigo-600 bg-indigo-600 dark:border-indigo-400 dark:bg-indigo-400' : 'border-slate-300 dark:border-slate-600')}>
                        {selected && <Check className="h-3 w-3 text-white dark:text-slate-950" />}
                      </span>
                      {o}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          </li>
        ))}
      </ol>

      <div className="flex flex-wrap items-center gap-3">
        <button className="btn-primary" disabled={answered < feasibilityQuestions.length} onClick={() => setDone(true)}>
          Lihat hasil
        </button>
        <span className="text-sm text-slate-500">
          {answered}/{feasibilityQuestions.length} pertanyaan dijawab
        </span>
      </div>

      {done && (
        <section className="card border-2 border-indigo-200 p-5 dark:border-indigo-900" aria-live="polite">
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <Tag tone={verdict.tone}>{verdict.label}</Tag>
            <span className="font-heading text-xl font-bold">
              Skor {total}/{max}
            </span>
          </div>
          <ProgressBar value={(total / max) * 100} label="Skor kelayakan" tone={verdict.tone === 'good' ? 'good' : verdict.tone === 'warn' ? 'warn' : 'accent'} />
          <p className="mt-3 text-sm">{verdict.desc}</p>
          {weak.length > 0 && (
            <div className="mt-4">
              <h4 className="mb-2 text-sm font-bold">Yang perlu diperbaiki</h4>
              <ul className="space-y-2.5">
                {weak.map((q) => (
                  <li key={q.id} className="rounded-xl bg-amber-50 p-3 text-sm dark:bg-amber-950/30">
                    <strong>{q.aspek}:</strong> {q.saranKurang}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {title.trim() && (
            <button className="btn-soft mt-4" onClick={() => { appStore.saveTopic(title, `Skor kelayakan ${total}/${max} (${verdict.label})`, Math.round((total / max) * 100)); toast('Topik & skor disimpan', { tone: 'success' }); }}>
              <BookmarkPlus aria-hidden="true" className="h-4 w-4" /> Simpan topik dengan skor ini
            </button>
          )}
        </section>
      )}
    </div>
  );
}

const formulaModes: { value: FormulationInput['mode']; label: string; x: string; y: string; z: string }[] = [
  { value: 'pengaruh', label: 'Pengaruh X → Y', x: 'Variabel bebas (X)', y: 'Variabel terikat (Y)', z: 'Objek / lokasi' },
  { value: 'hubungan', label: 'Hubungan X dan Y', x: 'Variabel pertama', y: 'Variabel kedua', z: 'Objek / lokasi' },
  { value: 'perbedaan', label: 'Perbedaan antar kelompok', x: 'Pembeda kelompok (mis. jenis kelamin, metode)', y: 'Hal yang dibandingkan', z: 'Objek / lokasi' },
  { value: 'deskriptif', label: 'Gambaran / deskriptif', x: 'Aspek tambahan (opsional)', y: 'Hal yang digambarkan', z: 'Objek / lokasi' },
  { value: 'fenomena', label: 'Fenomena (kualitatif)', x: 'Fenomena / fokus', y: 'Jenis studi (mis. Studi Kasus, Fenomenologi)', z: 'Konteks / subjek' },
  { value: 'pengembangan', label: 'Pengembangan produk', x: 'Produk yang dikembangkan', y: '', z: 'Sasaran pengguna' }
];

function FormulaTab() {
  const [mode, setMode] = useState<FormulationInput['mode']>('pengaruh');
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [z, setZ] = useState('');
  const cfg = formulaModes.find((m) => m.value === mode)!;
  const out = useMemo(() => buildFormulation({ mode, x, y, z }), [mode, x, y, z]);
  const { profile } = useAppStore();

  const fullText = `JUDUL\n${out.judul}\n\nRUMUSAN MASALAH\n${out.rumusan.map((r, i) => `${i + 1}. ${r}`).join('\n')}\n\nTUJUAN\n${out.tujuan.map((r, i) => `${i + 1}. ${r}`).join('\n')}\n\nHIPOTESIS\n${out.hipotesis.join('\n')}`;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="space-y-4">
        <Field label="Jenis rumusan">
          {(id) => (
            <select id={id} className="field" value={mode} onChange={(e) => setMode(e.target.value as FormulationInput['mode'])}>
              {formulaModes.map((m) => (
                <option key={m.value} value={m.value}>
                  {m.label}
                </option>
              ))}
            </select>
          )}
        </Field>
        <Field label={cfg.x}>{(id) => <input id={id} className="field" value={x} onChange={(e) => setX(e.target.value)} placeholder="Mis. kualitas pelayanan" maxLength={120} />}</Field>
        {cfg.y && <Field label={cfg.y}>{(id) => <input id={id} className="field" value={y} onChange={(e) => setY(e.target.value)} placeholder="Mis. kepuasan pelanggan" maxLength={120} />}</Field>}
        <Field label={cfg.z}>{(id) => <input id={id} className="field" value={z} onChange={(e) => setZ(e.target.value)} placeholder="Mis. pelanggan Kafe X di Kota Malang" maxLength={140} />}</Field>
        <Notice tone="tip" title="Aturan keselarasan">
          Judul, rumusan, tujuan, hipotesis, metode, dan analisis harus saling menjawab. Satu rumusan, satu tujuan, satu analisis, satu kesimpulan.
        </Notice>
      </section>

      <section className="card h-fit p-5">
        <div className="mb-3 flex items-center justify-between gap-2">
          <h3 className="font-heading text-lg font-bold">Hasil rumusan</h3>
          <CopyButton text={fullText} label="Salin semua" size="sm" />
        </div>
        <Block label="Judul">
          <p className="font-heading text-lg font-semibold leading-snug">{out.judul}</p>
        </Block>
        <Block label="Rumusan masalah (pilih yang sesuai)">
          <ul className="list-disc space-y-1 pl-5 text-sm">{out.rumusan.map((r) => <li key={r}>{r}</li>)}</ul>
        </Block>
        <Block label="Tujuan penelitian">
          <ul className="list-disc space-y-1 pl-5 text-sm">{out.tujuan.map((r) => <li key={r}>{r}</li>)}</ul>
        </Block>
        <Block label="Hipotesis">
          <ul className="space-y-1 text-sm">{out.hipotesis.map((r) => <li key={r}>{r}</li>)}</ul>
        </Block>
        <div className="mt-4 flex flex-wrap gap-2">
          <button className="btn-soft min-h-10 text-sm" disabled={!x.trim()} onClick={() => { appStore.saveTopic(out.judul); toast('Judul disimpan', { tone: 'success' }); }}>
            <BookmarkPlus aria-hidden="true" className="h-4 w-4" /> Simpan judul
          </button>
          {profile && (
            <button className="btn-soft min-h-10 text-sm" disabled={!x.trim()} onClick={() => { appStore.updateProfile({ judul: out.judul }); toast('Judul dipasang di profilmu', { tone: 'success' }); }}>
              Pakai sebagai judul skripsi
            </button>
          )}
          <Link to={`/judul?t=${encodeURIComponent(out.judul)}`} className="btn-soft min-h-10 text-sm">
            <SpellCheck aria-hidden="true" className="h-4 w-4" /> Periksa judul
          </Link>
        </div>
      </section>
    </div>
  );
}

const Block: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div className="mb-4">
    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-500">{label}</p>
    {children}
  </div>
);

function SavedTab() {
  const { savedTopics, profile } = useAppStore();
  if (savedTopics.length === 0) {
    return <EmptyState icon={<BookmarkPlus className="h-6 w-6" />} title="Belum ada topik tersimpan" body="Simpan ide dari generator atau rumus rumusan untuk dibandingkan dan dibawa ke dosen." />;
  }
  return (
    <ul className="space-y-3">
      {savedTopics.map((t) => (
        <li key={t.id} className="card p-4">
          <p className="font-heading text-[17px] font-semibold leading-snug">{t.judul}</p>
          <p className="mt-1 text-xs text-slate-500">
            Disimpan {formatDateID(new Date(t.createdAt).toISOString().slice(0, 10))}
            {t.catatan ? ` · ${t.catatan}` : ''}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {profile && (
              <button className="btn-soft min-h-10 text-sm" onClick={() => { appStore.updateProfile({ judul: t.judul }); toast('Judul dipasang di profilmu', { tone: 'success' }); }}>
                Jadikan judul skripsi
              </button>
            )}
            <Link to={`/judul?t=${encodeURIComponent(t.judul)}`} className="btn-soft min-h-10 text-sm">
              Periksa judul
            </Link>
            <CopyButton text={t.judul} size="sm" className="min-h-10" />
            <button className="btn-ghost min-h-10 text-sm text-rose-600" aria-label={`Hapus topik ${t.judul}`} onClick={() => appStore.deleteTopic(t.id)}>
              <Trash2 aria-hidden="true" className="h-4 w-4" /> Hapus
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function Topik() {
  const [tab, setTab] = useTabParam<Tab>(['ide', 'layak', 'rumus', 'simpan'], 'ide');
  const [checkTitle, setCheckTitle] = useState('');
  const { savedTopics } = useAppStore();

  return (
    <Page>
      <PageHeader
        eyebrow="Mulai skripsi"
        title="Cari & cek topik"
        subtitle="Dari bingung menjadi punya 3 kandidat judul yang layak: generator ide, uji kelayakan, dan rumus rumusan masalah yang selaras."
        icon={<Lightbulb aria-hidden="true" className="h-5 w-5" />}
      />
      <div className="mb-6">
        <Segmented<Tab>
          ariaLabel="Bagian pencari topik"
          value={tab}
          onChange={setTab}
          scrollable
          options={[
            { value: 'ide', label: 'Generator ide' },
            { value: 'layak', label: 'Cek kelayakan' },
            { value: 'rumus', label: 'Rumus rumusan' },
            { value: 'simpan', label: `Tersimpan (${savedTopics.length})` }
          ]}
        />
      </div>
      <Section>
        {tab === 'ide' && <IdeaTab onCheck={(j) => { setCheckTitle(j); setTab('layak'); }} />}
        {tab === 'layak' && <FeasibilityTab key={checkTitle} initialTitle={checkTitle} />}
        {tab === 'rumus' && <FormulaTab />}
        {tab === 'simpan' && <SavedTab />}
      </Section>
    </Page>
  );
}
