import { useMemo, useState } from 'react';
import { Download, FileText, Printer, Search } from 'lucide-react';
import { Link, useLocation, useTabParam } from '../app/router';
import { docTemplates, fillDoc } from '../data/templates';
import { faqCategories, faqs, type FaqCategory } from '../data/faq';
import { istilahList } from '../data/istilah';
import { usePlan } from '../lib/usePlan';
import { CampusNote, CopyButton, Disclosure, EmptyState, Field, Notice, Page, PageHeader, Segmented, Tag, downloadText } from '../components/common/ui';
import { cn } from '../components/common/cn';

type Tab = 'template' | 'faq' | 'istilah';

function Templates() {
  const { profile, major } = usePlan();
  const [vals, setVals] = useState({
    nama: profile?.nama ?? '',
    nim: profile?.nim ?? '',
    prodi: '',
    kampus: '',
    dosen: profile?.dosen ?? '',
    judul: profile?.judul ?? ''
  });
  const [selected, setSelected] = useState(docTemplates[0].id);
  const doc = docTemplates.find((d) => d.id === selected)!;
  const text = fillDoc(doc.isi, vals);
  const set = (k: keyof typeof vals, v: string) => setVals((p) => ({ ...p, [k]: v }));
  const fields: [keyof typeof vals, string][] = [
    ['nama', 'Nama lengkap'],
    ['nim', 'NIM'],
    ['prodi', 'Program studi'],
    ['kampus', 'Kampus'],
    ['dosen', 'Dosen pembimbing'],
    ['judul', 'Judul skripsi']
  ];

  return (
    <>
      <div className="no-print grid grid-cols-1 gap-6 lg:grid-cols-5">
        <aside className="space-y-5 lg:col-span-2">
          <section className="card p-5">
            <h2 className="font-heading text-lg font-bold">Data untuk mengisi template</h2>
            <p className="mb-3 mt-1 text-xs text-slate-500">Bagian kosong tampil sebagai [kurung siku].{major ? ` Rumpun: ${major.nama.split(' (')[0]}.` : ''}</p>
            <div className="grid gap-3">
              {fields.map(([k, label]) => (
                <Field key={k} label={label}>
                  {(id) => <input id={id} className="field" value={vals[k]} onChange={(e) => set(k, e.target.value)} maxLength={300} />}
                </Field>
              ))}
            </div>
          </section>
          <section aria-label="Daftar template">
            <h2 className="mb-2 font-heading text-lg font-bold">Pilih template</h2>
            <ul className="space-y-2">
              {docTemplates.map((d) => (
                <li key={d.id}>
                  <button
                    onClick={() => setSelected(d.id)}
                    aria-pressed={selected === d.id}
                    className={cn('w-full rounded-2xl border p-3.5 text-left transition', selected === d.id ? 'border-indigo-600 bg-indigo-50 dark:border-indigo-400 dark:bg-indigo-950/40' : 'border-slate-200 bg-white hover:border-indigo-300 dark:border-slate-800 dark:bg-slate-900/50')}
                  >
                    <span className="block font-semibold">{d.judul}</span>
                    <span className="block text-xs text-slate-500">{d.ringkas}</span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        </aside>

        <section className="lg:col-span-3">
          <div className="card p-5">
            <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="font-heading text-xl font-bold">{doc.judul}</h2>
                <p className="text-sm text-slate-500">{doc.untuk}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <CopyButton text={text} size="sm" className="min-h-10" />
                <button className="btn-soft min-h-10 px-3 text-xs" onClick={() => downloadText(`${doc.id}.txt`, text)}>
                  <Download aria-hidden="true" className="h-4 w-4" /> Unduh
                </button>
                <button className="btn-soft min-h-10 px-3 text-xs" onClick={() => window.print()}>
                  <Printer aria-hidden="true" className="h-4 w-4" /> Cetak / PDF
                </button>
              </div>
            </div>
            <pre tabIndex={0} aria-label="Pratinjau isi template" className="max-h-[70vh] overflow-auto whitespace-pre-wrap rounded-xl bg-slate-100 p-4 font-mono text-[13px] leading-relaxed dark:bg-slate-800/70">{text}</pre>
          </div>
          <div className="mt-4">
            <CampusNote>Ini kerangka umum. Kop surat, nomor surat, dan format resmi mengikuti ketentuan kampus dan instansi tujuan. Minta pembimbing mengecek sebelum digunakan.</CampusNote>
          </div>
        </section>
      </div>
      <div className="print-only">
        <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'Times New Roman, serif', fontSize: '12pt', lineHeight: 1.5 }}>{text}</pre>
      </div>
    </>
  );
}

function Faq() {
  const { query } = useLocation();
  const [q, setQ] = useState(query.get('q') ?? '');
  const [cat, setCat] = useState<FaqCategory | 'semua'>('semua');
  const list = faqs.filter((f) => (cat === 'semua' || f.kategori === cat) && (!q.trim() || `${f.tanya} ${f.jawab}`.toLowerCase().includes(q.trim().toLowerCase())));
  return (
    <div>
      <div className="relative mb-4">
        <Search aria-hidden="true" className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input className="field pl-10" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari pertanyaan, mis. plagiarisme, sampel, dosen" aria-label="Cari FAQ" />
      </div>
      <div className="mb-5 flex flex-wrap gap-2" role="group" aria-label="Kategori FAQ">
        {(['semua', ...faqCategories] as const).map((c) => (
          <button
            key={c}
            aria-pressed={cat === c}
            onClick={() => setCat(c)}
            className={cn('min-h-10 rounded-full border px-3.5 text-sm font-semibold transition', cat === c ? 'border-indigo-600 bg-indigo-600 text-white dark:border-indigo-400 dark:bg-indigo-500 dark:text-slate-950' : 'border-slate-300 dark:border-slate-700')}
          >
            {c === 'semua' ? 'Semua' : c}
          </button>
        ))}
      </div>
      {list.length === 0 ? (
        <EmptyState title="Tidak ditemukan" body="Coba kata kunci lain atau pilih kategori Semua." />
      ) : (
        <ul className="space-y-2.5">
          {list.map((f) => (
            <li key={f.id}>
              <Disclosure title={f.tanya} badge={f.kampus ? <Tag tone="warn">Cek aturan kampus</Tag> : undefined}>
                <p className="text-[15px] leading-relaxed">{f.jawab}</p>
                <p className="mt-2 text-xs text-slate-500">Kategori: {f.kategori}</p>
              </Disclosure>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Istilah() {
  const [q, setQ] = useState('');
  const [kat, setKat] = useState<'semua' | 'Proses' | 'Metode' | 'Statistik' | 'Penulisan'>('semua');
  const list = useMemo(
    () => istilahList.filter((i) => (kat === 'semua' || i.kategori === kat) && (!q.trim() || `${i.term} ${i.english ?? ''} ${i.arti}`.toLowerCase().includes(q.trim().toLowerCase()))).sort((a, b) => a.term.localeCompare(b.term, 'id')),
    [q, kat]
  );
  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <div className="relative min-w-[220px] flex-1">
          <Search aria-hidden="true" className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input className="field pl-10" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari istilah, mis. sempro, hipotesis, outlier" aria-label="Cari istilah" />
        </div>
        <select className="field w-auto" value={kat} onChange={(e) => setKat(e.target.value as typeof kat)} aria-label="Kategori istilah">
          <option value="semua">Semua kategori</option>
          <option value="Proses">Proses & administrasi</option>
          <option value="Metode">Metode penelitian</option>
          <option value="Statistik">Statistik</option>
          <option value="Penulisan">Penulisan</option>
        </select>
      </div>
      <Notice tone="info" className="mb-4">
        Butuh istilah metodologi yang lebih dalam (185 istilah lengkap dengan contoh)?{' '}
        <Link to="/belajar?tab=glosarium" className="font-semibold underline">
          Buka glosarium lengkap
        </Link>
        .
      </Notice>
      {list.length === 0 ? (
        <EmptyState title="Istilah tidak ditemukan" body="Coba kata kunci lain." />
      ) : (
        <dl className="grid gap-3 md:grid-cols-2">
          {list.map((i) => (
            <div key={i.term} className="card p-4">
              <dt className="flex flex-wrap items-baseline gap-2">
                <span className="font-heading text-lg font-bold">{i.term}</span>
                {i.english && <span className="text-sm italic text-slate-500">{i.english}</span>}
                <Tag className="ml-auto">{i.kategori}</Tag>
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-slate-700 dark:text-slate-200">{i.arti}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}

export default function Template() {
  const [tab, setTab] = useTabParam<Tab>(['template', 'faq', 'istilah'], 'template');
  return (
    <Page wide>
      <div className="no-print">
        <PageHeader eyebrow="Menulis" title="Template, FAQ & istilah" subtitle="Template siap isi, jawaban pertanyaan yang paling sering muncul, dan daftar istilah skripsi." icon={<FileText aria-hidden="true" className="h-5 w-5" />} />
        <div className="mb-6">
          <Segmented<Tab>
            ariaLabel="Bagian pustaka template"
            value={tab}
            onChange={setTab}
            options={[
              { value: 'template', label: 'Template' },
              { value: 'faq', label: 'FAQ' },
              { value: 'istilah', label: 'Istilah' }
            ]}
          />
        </div>
      </div>
      {tab === 'template' && <Templates />}
      {tab === 'faq' && <Faq />}
      {tab === 'istilah' && <Istilah />}
    </Page>
  );
}
