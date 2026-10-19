import { useMemo, useState } from 'react';
import { Download, ExternalLink, Library, Pencil, Plus, Search, Trash2 } from 'lucide-react';
import { useTabParam } from '../app/router';
import { appStore, uid, useAppStore } from '../lib/store';
import {
  authorsToText,
  buildBibliography,
  formatInText,
  formatReference,
  parseAuthors,
  refTypeLabels,
  styleLabels,
  toHtml,
  toPlain,
  type CitationStyle
} from '../lib/citations';
import { journalQuality, journalSources, predatorSigns, readingStrategy, searchTips } from '../data/jurnal';
import type { RefType, Reference } from '../types/skripsi';
import { CopyButton, Disclosure, EmptyState, Field, Notice, Page, PageHeader, Section, Segmented, Tag, downloadText } from '../components/common/ui';
import { Modal } from '../components/common/Modal';
import { confirmAction } from '../components/common/Confirm';
import { toast } from '../lib/toast';

type Tab = 'pustaka' | 'daftar' | 'jurnal';

const containerLabel: Record<RefType, string> = {
  jurnal: 'Nama jurnal',
  buku: '',
  prosiding: 'Nama konferensi / prosiding',
  web: 'Nama situs / penerbit daring',
  skripsi: 'Perguruan tinggi',
  laporan: 'Lembaga penerbit'
};

interface FormState {
  type: RefType;
  authors: string;
  year: string;
  title: string;
  container: string;
  volume: string;
  issue: string;
  pages: string;
  publisher: string;
  city: string;
  edition: string;
  doi: string;
  url: string;
  accessed: string;
  tags: string;
}

const emptyForm: FormState = {
  type: 'jurnal',
  authors: '',
  year: '',
  title: '',
  container: '',
  volume: '',
  issue: '',
  pages: '',
  publisher: '',
  city: '',
  edition: '',
  doi: '',
  url: '',
  accessed: '',
  tags: ''
};

const toForm = (r: Reference): FormState => ({
  type: r.type,
  authors: authorsToText(r.authors),
  year: r.year,
  title: r.title,
  container: r.container,
  volume: r.volume ?? '',
  issue: r.issue ?? '',
  pages: r.pages ?? '',
  publisher: r.publisher ?? '',
  city: r.city ?? '',
  edition: r.edition ?? '',
  doi: r.doi ?? '',
  url: r.url ?? '',
  accessed: r.accessed ?? '',
  tags: r.tags.join(', ')
});

const fromForm = (f: FormState, id: string, createdAt: number): Reference => ({
  id,
  type: f.type,
  authors: parseAuthors(f.authors),
  year: f.year.trim(),
  title: f.title.trim(),
  container: f.container.trim(),
  volume: f.volume.trim() || undefined,
  issue: f.issue.trim() || undefined,
  pages: f.pages.trim() || undefined,
  publisher: f.publisher.trim() || undefined,
  city: f.city.trim() || undefined,
  edition: f.edition.trim() || undefined,
  doi: f.doi.trim() || undefined,
  url: f.url.trim() || undefined,
  accessed: f.accessed.trim() || undefined,
  tags: f.tags.split(',').map((t) => t.trim()).filter(Boolean),
  createdAt
});

function validate(f: FormState): Record<string, string> {
  const e: Record<string, string> = {};
  if (!f.title.trim()) e.title = 'Judul wajib diisi.';
  if (f.year.trim() && !/^\d{4}[a-z]?$/.test(f.year.trim())) e.year = 'Tahun berupa 4 angka, mis. 2023 (boleh 2023a).';
  if (f.type !== 'buku' && !f.container.trim() && f.type !== 'laporan') e.container = `${containerLabel[f.type]} wajib diisi.`;
  if (f.url.trim() && !/^https?:\/\//i.test(f.url.trim())) e.url = 'Tautan harus diawali http:// atau https://';
  if (f.accessed.trim() && !/^\d{4}-\d{2}-\d{2}$/.test(f.accessed.trim())) e.accessed = 'Pilih tanggal yang valid.';
  return e;
}

function ReferenceForm({ initial, onClose }: { initial?: Reference; onClose: () => void }) {
  const [form, setForm] = useState<FormState>(initial ? toForm(initial) : emptyForm);
  const [touched, setTouched] = useState(false);
  const errors = validate(form);
  const set = <K extends keyof FormState>(k: K, v: FormState[K]) => setForm((f) => ({ ...f, [k]: v }));
  const preview = fromForm(form, 'preview', 0);
  const t = form.type;

  const save = () => {
    setTouched(true);
    if (Object.keys(errors).length > 0) return;
    const ref = fromForm(form, initial?.id ?? uid(), initial?.createdAt ?? Date.now());
    appStore.upsertReference(ref);
    toast(initial ? 'Referensi diperbarui' : 'Referensi disimpan', { tone: 'success' });
    onClose();
  };

  const err = (k: string) => (touched ? errors[k] : undefined);
  const inputCls = (k: string) => `field ${err(k) ? 'border-rose-500' : ''}`;

  return (
    <Modal
      open
      onClose={onClose}
      title={initial ? 'Ubah referensi' : 'Tambah referensi'}
      size="lg"
      footer={
        <>
          <button className="btn-soft" onClick={onClose}>
            Batal
          </button>
          <button className="btn-primary" onClick={save}>
            Simpan
          </button>
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Jenis sumber">
          {(id) => (
            <select id={id} className="field" value={form.type} onChange={(e) => set('type', e.target.value as RefType)}>
              {(Object.keys(refTypeLabels) as RefType[]).map((k) => (
                <option key={k} value={k}>
                  {refTypeLabels[k]}
                </option>
              ))}
            </select>
          )}
        </Field>
        <Field label="Tahun" hint={err('year')}>
          {(id) => <input id={id} className={inputCls('year')} value={form.year} onChange={(e) => set('year', e.target.value)} placeholder="2023" inputMode="numeric" maxLength={5} />}
        </Field>
        <Field label="Penulis" className="sm:col-span-2" hint="Satu penulis per baris. Format “Belakang, Depan” paling aman, mis. Santoso, Budi Hartono. Untuk lembaga, tulis namanya saja.">
          {(id) => <textarea id={id} className="field min-h-20" value={form.authors} onChange={(e) => set('authors', e.target.value)} placeholder={'Santoso, Budi Hartono\nWulandari, Siti'} />}
        </Field>
        <Field label="Judul" className="sm:col-span-2" hint={err('title') ?? 'Tulis dengan huruf kapital hanya di awal kalimat dan nama diri (gaya APA).'}>
          {(id) => <input id={id} className={inputCls('title')} value={form.title} onChange={(e) => set('title', e.target.value)} maxLength={400} />}
        </Field>
        {containerLabel[t] && (
          <Field label={containerLabel[t]} className="sm:col-span-2" hint={err('container')}>
            {(id) => <input id={id} className={inputCls('container')} value={form.container} onChange={(e) => set('container', e.target.value)} maxLength={200} />}
          </Field>
        )}
        {(t === 'jurnal' || t === 'prosiding') && (
          <>
            {t === 'jurnal' && (
              <>
                <Field label="Volume">{(id) => <input id={id} className="field" value={form.volume} onChange={(e) => set('volume', e.target.value)} maxLength={20} />}</Field>
                <Field label="Nomor (issue)">{(id) => <input id={id} className="field" value={form.issue} onChange={(e) => set('issue', e.target.value)} maxLength={20} />}</Field>
              </>
            )}
            <Field label="Halaman" hint="Mis. 112-125">{(id) => <input id={id} className="field" value={form.pages} onChange={(e) => set('pages', e.target.value)} maxLength={30} />}</Field>
            <Field label="DOI" hint="Mis. 10.1234/abcd.2023.001">{(id) => <input id={id} className="field" value={form.doi} onChange={(e) => set('doi', e.target.value)} maxLength={120} />}</Field>
          </>
        )}
        {(t === 'buku' || t === 'prosiding' || t === 'laporan') && (
          <>
            <Field label="Penerbit">{(id) => <input id={id} className="field" value={form.publisher} onChange={(e) => set('publisher', e.target.value)} maxLength={120} />}</Field>
            <Field label="Kota terbit">{(id) => <input id={id} className="field" value={form.city} onChange={(e) => set('city', e.target.value)} maxLength={80} />}</Field>
          </>
        )}
        {t === 'buku' && <Field label="Edisi" hint="Mis. 2nd, 3rd (kosongkan bila cetakan pertama)">{(id) => <input id={id} className="field" value={form.edition} onChange={(e) => set('edition', e.target.value)} maxLength={20} />}</Field>}
        {t === 'skripsi' && <Field label="Repositori (opsional)">{(id) => <input id={id} className="field" value={form.publisher} onChange={(e) => set('publisher', e.target.value)} placeholder="Repositori Universitas ..." maxLength={120} />}</Field>}
        {(t === 'web' || t === 'skripsi' || t === 'laporan' || t === 'jurnal') && (
          <Field label="Tautan (URL)" hint={err('url')} className={t === 'web' ? '' : 'sm:col-span-1'}>
            {(id) => <input id={id} className={inputCls('url')} value={form.url} onChange={(e) => set('url', e.target.value)} placeholder="https://" maxLength={300} />}
          </Field>
        )}
        {t === 'web' && (
          <Field label="Tanggal diakses" hint={err('accessed')}>
            {(id) => <input id={id} type="date" className={inputCls('accessed')} value={form.accessed} onChange={(e) => set('accessed', e.target.value)} />}
          </Field>
        )}
        <Field label="Label (pisahkan dengan koma)" className="sm:col-span-2" hint="Mis. teori, metode, penelitian terdahulu">
          {(id) => <input id={id} className="field" value={form.tags} onChange={(e) => set('tags', e.target.value)} maxLength={120} />}
        </Field>
      </div>

      <div className="mt-5 rounded-2xl bg-slate-100 p-4 dark:bg-slate-800/60">
        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">Pratinjau sitasi</p>
        {(Object.keys(styleLabels) as CitationStyle[]).map((s) => (
          <div key={s} className="mb-2.5 last:mb-0">
            <p className="text-xs font-semibold text-indigo-700 dark:text-indigo-300">{styleLabels[s]}</p>
            <p className="text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: form.title.trim() ? toHtml(formatReference(preview, s, 1)) : '<span class="text-slate-400">Isi judul untuk melihat pratinjau.</span>' }} />
          </div>
        ))}
      </div>
    </Modal>
  );
}

function LibraryTab({ style }: { style: CitationStyle }) {
  const { references } = useAppStore();
  const [q, setQ] = useState('');
  const [typeFilter, setTypeFilter] = useState<RefType | 'semua'>('semua');
  const [editing, setEditing] = useState<Reference | null>(null);
  const [adding, setAdding] = useState(false);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    return references.filter((r) => {
      if (typeFilter !== 'semua' && r.type !== typeFilter) return false;
      if (!s) return true;
      return `${r.title} ${r.authors.map((a) => a.family + a.given).join(' ')} ${r.year} ${r.container} ${r.tags.join(' ')}`.toLowerCase().includes(s);
    });
  }, [references, q, typeFilter]);

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <div className="relative min-w-[220px] flex-1">
          <Search aria-hidden="true" className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input className="field pl-10" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari judul, penulis, tahun, label" aria-label="Cari referensi" />
        </div>
        <select className="field w-auto" value={typeFilter} onChange={(e) => setTypeFilter(e.target.value as RefType | 'semua')} aria-label="Filter jenis sumber">
          <option value="semua">Semua jenis</option>
          {(Object.keys(refTypeLabels) as RefType[]).map((k) => (
            <option key={k} value={k}>
              {refTypeLabels[k]}
            </option>
          ))}
        </select>
        <button className="btn-primary" onClick={() => setAdding(true)}>
          <Plus aria-hidden="true" className="h-4 w-4" /> Tambah referensi
        </button>
      </div>

      {references.length === 0 ? (
        <EmptyState
          icon={<Library className="h-6 w-6" />}
          title="Perpustakaanmu masih kosong"
          body="Tambahkan jurnal atau buku pertamamu. Sitasi dan daftar pustaka dibuat otomatis dalam APA 7, IEEE, atau Harvard."
          action={
            <button className="btn-primary" onClick={() => setAdding(true)}>
              <Plus aria-hidden="true" className="h-4 w-4" /> Tambah referensi pertama
            </button>
          }
        />
      ) : filtered.length === 0 ? (
        <EmptyState title="Tidak ada hasil" body="Coba kata kunci atau filter lain." />
      ) : (
        <ul className="space-y-3">
          {filtered.map((r) => {
            const segs = formatReference(r, style, references.length - references.indexOf(r));
            return (
              <li key={r.id} className="card p-4">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <Tag tone="accent">{refTypeLabels[r.type]}</Tag>
                  {r.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
                <p className="text-[15px] leading-relaxed" dangerouslySetInnerHTML={{ __html: toHtml(segs) }} />
                <p className="mt-1.5 text-xs text-slate-500">
                  Dalam teks: <span className="font-mono">{formatInText(r, style, references.length - references.indexOf(r))}</span>
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <CopyButton text={toPlain(segs)} html={toHtml(segs)} label="Salin sitasi" size="sm" className="min-h-10" />
                  <CopyButton text={formatInText(r, style, references.length - references.indexOf(r))} label="Salin dalam teks" size="sm" className="min-h-10" />
                  {/* url bisa berasal dari file impor yang melewati validasi form, jadi cek ulang skemanya */}
                  {(r.doi || (typeof r.url === 'string' && /^https?:\/\//i.test(r.url))) && (
                    <a className="btn-soft min-h-10 px-3 text-xs" href={r.doi ? `https://doi.org/${r.doi.replace(/^https?:\/\/(dx\.)?doi\.org\//i, '')}` : r.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" /> Buka sumber
                    </a>
                  )}
                  <button className="btn-soft min-h-10 px-3 text-xs" onClick={() => setEditing(r)}>
                    <Pencil aria-hidden="true" className="h-3.5 w-3.5" /> Ubah
                  </button>
                  <button
                    className="btn-ghost min-h-10 px-3 text-xs text-rose-600 dark:text-rose-400"
                    onClick={async () => {
                      if (await confirmAction({ title: 'Hapus referensi ini?', body: r.title, confirmLabel: 'Hapus', danger: true })) appStore.deleteReference(r.id);
                    }}
                  >
                    <Trash2 aria-hidden="true" className="h-3.5 w-3.5" /> Hapus
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      {adding && <ReferenceForm onClose={() => setAdding(false)} />}
      {editing && <ReferenceForm initial={editing} onClose={() => setEditing(null)} />}
    </div>
  );
}

function BibliographyTab({ style }: { style: CitationStyle }) {
  const { references } = useAppStore();
  const entries = useMemo(() => buildBibliography(references, style), [references, style]);
  const plain = entries.map((e) => toPlain(e.segs)).join('\n\n');
  const html = entries.map((e) => `<p style="margin:0 0 8pt 0;${style === 'apa' || style === 'harvard' ? 'padding-left:36pt;text-indent:-36pt;' : ''}">${toHtml(e.segs)}</p>`).join('');
  const issues = references.filter((r) => !r.year || r.authors.length === 0);

  if (references.length === 0) {
    return <EmptyState icon={<Library className="h-6 w-6" />} title="Belum ada referensi" body="Tambahkan referensi di tab Pustaka, lalu daftar pustaka akan tersusun otomatis di sini." />;
  }

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-slate-600 dark:text-slate-300">
          {entries.length} sumber · {style === 'ieee' ? 'Urut sesuai nomor (urutan ditambahkan)' : 'Urut abjad penulis'}
        </p>
        <div className="flex flex-wrap gap-2">
          <CopyButton text={plain} html={html} label="Salin daftar pustaka" />
          <button className="btn-soft" onClick={() => downloadText(`daftar-pustaka-${style}.txt`, plain)}>
            <Download aria-hidden="true" className="h-4 w-4" /> Unduh .txt
          </button>
        </div>
      </div>
      {issues.length > 0 && (
        <div className="mb-4">
          <Notice tone="warn" title={`${issues.length} sumber belum lengkap`}>
            Sumber tanpa penulis atau tahun tampil dengan “n.d.” atau judul di depan. Lengkapi bila datanya ada.
          </Notice>
        </div>
      )}
      <ol className="card space-y-3 p-5 sm:p-6">
        {entries.map((e) => (
          <li
            key={e.ref.id}
            className="text-[15px] leading-relaxed"
            style={style === 'apa' || style === 'harvard' ? { paddingLeft: '2rem', textIndent: '-2rem' } : undefined}
            dangerouslySetInnerHTML={{ __html: toHtml(e.segs) }}
          />
        ))}
      </ol>
      <p className="mt-3 text-xs text-slate-500">Setelah ditempel ke Word, periksa kembali huruf miring, indentasi gantung, dan aturan gaya yang diminta prodi-mu.</p>
    </div>
  );
}

function JournalTab() {
  return (
    <div className="space-y-8">
      <Section title="Tempat mencari jurnal" hint="Pakai beberapa sumber sekaligus; tiap pangkalan punya cakupan berbeda.">
        <ul className="grid gap-3 sm:grid-cols-2">
          {journalSources.map((s) => (
            <li key={s.id} className="card flex flex-col p-4">
              <div className="mb-1 flex items-start justify-between gap-2">
                <h3 className="font-heading text-lg font-bold">{s.nama}</h3>
                {s.url && (
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="btn-ghost -mr-2 h-9 min-h-9 w-9 shrink-0 px-0" aria-label={`Buka ${s.nama} di tab baru`}>
                    <ExternalLink aria-hidden="true" className="h-4 w-4" />
                  </a>
                )}
              </div>
              <Tag className="mb-2 self-start">{s.untuk}</Tag>
              <p className="text-sm text-slate-700 dark:text-slate-200">{s.fungsi}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                <strong>Tips:</strong> {s.tips}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Trik pencarian yang efisien">
        <ul className="grid gap-3 sm:grid-cols-2">
          {searchTips.map((t) => (
            <li key={t.judul} className="card p-4">
              <p className="font-semibold">{t.judul}</p>
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">{t.isi}</p>
              {t.contoh && <p className="mt-2 rounded-lg bg-slate-100 p-2.5 font-mono text-xs dark:bg-slate-800">{t.contoh}</p>}
            </li>
          ))}
        </ul>
      </Section>

      <div className="grid gap-5 md:grid-cols-2">
        <Section title="Menilai kualitas jurnal">
          <ul className="space-y-2.5">
            {journalQuality.map((q) => (
              <li key={q.judul} className="card p-3.5 text-sm">
                <strong>{q.judul}.</strong> {q.isi}
              </li>
            ))}
          </ul>
        </Section>
        <Section title="Waspada jurnal predator">
          <Disclosure title="Ciri-ciri yang perlu dicurigai" defaultOpen>
            <ul className="list-disc space-y-1.5 pl-5 text-sm">{predatorSigns.map((s) => <li key={s}>{s}</li>)}</ul>
          </Disclosure>
          <Disclosure title="Cara membaca jurnal dengan cepat" className="mt-3">
            <ol className="list-decimal space-y-1.5 pl-5 text-sm">{readingStrategy.map((s) => <li key={s}>{s}</li>)}</ol>
          </Disclosure>
        </Section>
      </div>
    </div>
  );
}

export default function Referensi() {
  const [tab, setTab] = useTabParam<Tab>(['pustaka', 'daftar', 'jurnal'], 'pustaka');
  const [style, setStyle] = useState<CitationStyle>('apa');
  const { references } = useAppStore();

  return (
    <Page>
      <PageHeader
        eyebrow="Menulis"
        title="Referensi & sitasi"
        subtitle="Simpan sumber sekali, hasilkan sitasi dan daftar pustaka dalam APA 7, IEEE, atau Harvard. Dilengkapi panduan mencari dan menilai jurnal."
        icon={<Library aria-hidden="true" className="h-5 w-5" />}
      />
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <Segmented<Tab>
          ariaLabel="Bagian referensi"
          value={tab}
          onChange={setTab}
          scrollable
          options={[
            { value: 'pustaka', label: `Pustaka (${references.length})` },
            { value: 'daftar', label: 'Daftar pustaka' },
            { value: 'jurnal', label: 'Cari jurnal' }
          ]}
        />
        {tab !== 'jurnal' && (
          <Segmented<CitationStyle>
            ariaLabel="Gaya sitasi"
            value={style}
            onChange={setStyle}
            options={(Object.keys(styleLabels) as CitationStyle[]).map((s) => ({ value: s, label: styleLabels[s] }))}
          />
        )}
      </div>
      {tab === 'pustaka' && <LibraryTab style={style} />}
      {tab === 'daftar' && <BibliographyTab style={style} />}
      {tab === 'jurnal' && <JournalTab />}
    </Page>
  );
}
