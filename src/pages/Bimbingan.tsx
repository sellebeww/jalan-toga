import { useMemo, useState } from 'react';
import { ListPlus, MessagesSquare, Pencil, Plus, Send, Trash2 } from 'lucide-react';
import { useTabParam } from '../app/router';
import { messageTemplates, fillTemplate, greetingNow } from '../data/pesan';
import { appStore, uid, useAppStore } from '../lib/store';
import { usePlan } from '../lib/usePlan';
import { formatDateID, todayKey } from '../lib/date';
import type { GuidanceLog } from '../types/skripsi';
import { CheckRow, CopyButton, EmptyState, Field, Notice, Page, PageHeader, Segmented, Tag } from '../components/common/ui';
import { Modal } from '../components/common/Modal';
import { confirmAction } from '../components/common/Confirm';
import { toast } from '../lib/toast';

type Tab = 'log' | 'pesan';

interface FormState {
  date: string;
  dosen: string;
  topik: string;
  hasil: string;
  revisi: string;
  nextDate: string;
  todos: string;
}

function LogForm({ initial, defaultDosen, onClose }: { initial?: GuidanceLog; defaultDosen: string; onClose: () => void }) {
  const [f, setF] = useState<FormState>({
    date: initial?.date ?? todayKey(),
    dosen: initial?.dosen ?? defaultDosen,
    topik: initial?.topik ?? '',
    hasil: initial?.hasil ?? '',
    revisi: initial?.revisi ?? '',
    nextDate: initial?.nextDate ?? '',
    todos: initial ? '' : ''
  });
  const [touched, setTouched] = useState(false);
  const set = <K extends keyof FormState>(k: K, v: string) => setF((p) => ({ ...p, [k]: v }));
  const errors = { topik: !f.topik.trim() ? 'Isi topik bimbingan.' : '', date: !f.date ? 'Pilih tanggal.' : '' };

  const save = (toKanban: boolean) => {
    setTouched(true);
    if (errors.topik || errors.date) return;
    const newTodos = f.todos
      .split('\n')
      .map((t) => t.trim())
      .filter(Boolean)
      .map((text) => ({ id: uid(), text, done: false }));
    if (initial) {
      appStore.updateGuidance(initial.id, {
        date: f.date,
        dosen: f.dosen,
        topik: f.topik.trim(),
        hasil: f.hasil,
        revisi: f.revisi,
        nextDate: f.nextDate || undefined,
        todos: [...initial.todos, ...newTodos]
      });
    } else {
      appStore.addGuidance({ date: f.date, dosen: f.dosen, topik: f.topik.trim(), hasil: f.hasil, revisi: f.revisi, todos: newTodos, nextDate: f.nextDate || undefined });
    }
    if (f.nextDate) appStore.addDeadline({ title: `Bimbingan berikutnya: ${f.topik.trim()}`, date: f.nextDate });
    if (toKanban) newTodos.forEach((t) => appStore.addTask(t.text, { due: f.nextDate || undefined }));
    toast(initial ? 'Catatan bimbingan diperbarui' : 'Bimbingan tercatat', { body: toKanban && newTodos.length ? `${newTodos.length} tugas ditambahkan ke kanban.` : undefined, tone: 'success' });
    onClose();
  };

  return (
    <Modal
      open
      onClose={onClose}
      size="lg"
      title={initial ? 'Ubah catatan bimbingan' : 'Catat bimbingan'}
      footer={
        <>
          <button className="btn-soft" onClick={onClose}>
            Batal
          </button>
          <button className="btn-soft" onClick={() => save(true)}>
            Simpan + kirim to-do ke kanban
          </button>
          <button className="btn-primary" onClick={() => save(false)}>
            Simpan
          </button>
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Tanggal bimbingan" hint={touched ? errors.date : undefined}>
          {(id) => <input id={id} type="date" className="field" value={f.date} onChange={(e) => set('date', e.target.value)} />}
        </Field>
        <Field label="Dosen pembimbing">
          {(id) => <input id={id} className="field" value={f.dosen} onChange={(e) => set('dosen', e.target.value)} maxLength={120} />}
        </Field>
        <Field label="Topik / bagian yang dibahas" className="sm:col-span-2" hint={touched ? errors.topik : undefined}>
          {(id) => <input id={id} className="field" value={f.topik} onChange={(e) => set('topik', e.target.value)} placeholder="Mis. Bab 2 landasan teori" maxLength={160} />}
        </Field>
        <Field label="Hasil / keputusan bimbingan" className="sm:col-span-2">
          {(id) => <textarea id={id} className="field min-h-20" value={f.hasil} onChange={(e) => set('hasil', e.target.value)} placeholder="Apa kata dosen? Disetujui, perlu revisi, arah baru?" />}
        </Field>
        <Field label="Revisi dari dosen" className="sm:col-span-2">
          {(id) => <textarea id={id} className="field min-h-24" value={f.revisi} onChange={(e) => set('revisi', e.target.value)} placeholder="Catat poin revisi selengkap mungkin" />}
        </Field>
        <Field label="To-do turunan (satu per baris)" className="sm:col-span-2" hint="Contoh: Tambah 3 jurnal baru tentang X / Perbaiki definisi operasional">
          {(id) => <textarea id={id} className="field min-h-24" value={f.todos} onChange={(e) => set('todos', e.target.value)} />}
        </Field>
        <Field label="Jadwal bimbingan berikutnya (opsional)">
          {(id) => <input id={id} type="date" className="field" value={f.nextDate} onChange={(e) => set('nextDate', e.target.value)} />}
        </Field>
      </div>
    </Modal>
  );
}

function LogTab() {
  const { guidance } = useAppStore();
  const { profile } = usePlan();
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState<GuidanceLog | null>(null);
  const sorted = useMemo(() => [...guidance].sort((a, b) => b.date.localeCompare(a.date)), [guidance]);
  const openTodos = guidance.reduce((s, g) => s + g.todos.filter((t) => !t.done).length, 0);

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-slate-600 dark:text-slate-300">
          {guidance.length} sesi tercatat · {openTodos} to-do terbuka
        </p>
        <button className="btn-primary" onClick={() => setAdding(true)}>
          <Plus aria-hidden="true" className="h-4 w-4" /> Catat bimbingan
        </button>
      </div>

      {sorted.length === 0 ? (
        <EmptyState
          icon={<MessagesSquare className="h-6 w-6" />}
          title="Belum ada catatan bimbingan"
          body="Catat tanggal, hasil, dan revisi setiap bimbingan. Kamu jadi tidak lupa arahan dosen dan punya bukti proses bimbingan."
          action={
            <button className="btn-primary" onClick={() => setAdding(true)}>
              <Plus aria-hidden="true" className="h-4 w-4" /> Catat bimbingan pertama
            </button>
          }
        />
      ) : (
        <ol className="space-y-4">
          {sorted.map((g, i) => (
            <li key={g.id} className="card p-5">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
                    Bimbingan ke-{sorted.length - i} · {formatDateID(g.date)}
                  </p>
                  <h3 className="font-heading text-lg font-bold">{g.topik}</h3>
                  {g.dosen && <p className="text-sm text-slate-500">dengan {g.dosen}</p>}
                </div>
                {g.nextDate && <Tag tone="accent">Berikutnya {formatDateID(g.nextDate, false)}</Tag>}
              </div>
              {g.hasil && (
                <div className="mt-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Hasil</p>
                  <p className="whitespace-pre-line text-sm leading-relaxed">{g.hasil}</p>
                </div>
              )}
              {g.revisi && (
                <div className="mt-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Revisi</p>
                  <p className="whitespace-pre-line text-sm leading-relaxed">{g.revisi}</p>
                </div>
              )}
              {g.todos.length > 0 && (
                <div className="mt-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">To-do turunan</p>
                  <div className="-mx-1.5">
                    {g.todos.map((t) => (
                      <CheckRow
                        key={t.id}
                        checked={t.done}
                        onToggle={() => appStore.updateGuidance(g.id, { todos: g.todos.map((x) => (x.id === t.id ? { ...x, done: !x.done } : x)) })}
                      >
                        {t.text}
                      </CheckRow>
                    ))}
                  </div>
                  <button
                    className="btn-ghost mt-1 min-h-10 text-sm"
                    onClick={() => {
                      const open = g.todos.filter((t) => !t.done);
                      open.forEach((t) => appStore.addTask(t.text, {}));
                      toast(`${open.length} tugas ditambahkan ke kanban`, { tone: 'success' });
                    }}
                    disabled={g.todos.every((t) => t.done)}
                  >
                    <ListPlus aria-hidden="true" className="h-4 w-4" /> Kirim to-do terbuka ke kanban
                  </button>
                </div>
              )}
              <div className="mt-4 flex gap-2 border-t border-slate-200 pt-3 dark:border-slate-800">
                <button className="btn-soft min-h-10 text-sm" onClick={() => setEditing(g)}>
                  <Pencil aria-hidden="true" className="h-4 w-4" /> Ubah
                </button>
                <button
                  className="btn-ghost min-h-10 text-sm text-rose-600 dark:text-rose-400"
                  onClick={async () => {
                    if (await confirmAction({ title: 'Hapus catatan bimbingan ini?', body: g.topik, confirmLabel: 'Hapus', danger: true })) appStore.deleteGuidance(g.id);
                  }}
                >
                  <Trash2 aria-hidden="true" className="h-4 w-4" /> Hapus
                </button>
              </div>
            </li>
          ))}
        </ol>
      )}
      {adding && <LogForm defaultDosen={profile?.dosen ?? ''} onClose={() => setAdding(false)} />}
      {editing && <LogForm initial={editing} defaultDosen={profile?.dosen ?? ''} onClose={() => setEditing(null)} />}
    </div>
  );
}

function MessageTab() {
  const { profile } = usePlan();
  const [vals, setVals] = useState({
    dosen: profile?.dosen ?? '',
    nama: profile?.nama ?? '',
    nim: profile?.nim ?? '',
    judul: profile?.judul ?? '',
    prodi: '',
    bab: '',
    tanggal: '',
    opsi1: '',
    opsi2: ''
  });
  const [openId, setOpenId] = useState(messageTemplates[0].id);
  const set = (k: keyof typeof vals, v: string) => setVals((p) => ({ ...p, [k]: v }));
  const filled = (t: string) => fillTemplate(t, { ...vals, waktu: greetingNow() });

  const fields: [keyof typeof vals, string, string][] = [
    ['dosen', 'Nama dosen', 'Mis. Dr. Budi Santoso, M.Si.'],
    ['nama', 'Namamu', ''],
    ['nim', 'NIM', ''],
    ['judul', 'Judul skripsi', ''],
    ['prodi', 'Program studi', 'Mis. Manajemen'],
    ['bab', 'Bab / bagian', 'Mis. Bab 2'],
    ['tanggal', 'Tanggal terkait', 'Mis. 12 Maret'],
    ['opsi1', 'Pilihan waktu 1', 'Mis. Selasa 10.00'],
    ['opsi2', 'Pilihan waktu 2', 'Mis. Kamis 13.00']
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <section className="card h-fit p-5 lg:col-span-2">
        <h2 className="font-heading text-lg font-bold">Isi sekali, dipakai semua template</h2>
        <p className="mb-4 mt-1 text-sm text-slate-500">Bagian kosong akan tampil dalam [kurung siku] agar mudah dilengkapi.</p>
        <div className="grid gap-3">
          {fields.map(([k, label, ph]) => (
            <Field key={k} label={label}>
              {(id) => <input id={id} className="field" value={vals[k]} onChange={(e) => set(k, e.target.value)} placeholder={ph} maxLength={160} />}
            </Field>
          ))}
        </div>
      </section>

      <section className="space-y-3 lg:col-span-3">
        <Notice tone="tip" title="Etika pesan ke dosen">
          Awali dengan salam, sebut identitas, sampaikan keperluan singkat, dan lampirkan berkas. Hindari kirim pesan malam hari atau meminta jawaban instan.
        </Notice>
        {messageTemplates.map((m) => {
          const text = filled(m.isi);
          const open = openId === m.id;
          return (
            <article key={m.id} className="card overflow-hidden">
              <button type="button" aria-expanded={open} onClick={() => setOpenId(open ? '' : m.id)} className="flex min-h-14 w-full items-center justify-between gap-3 px-4 py-3 text-left">
                <span>
                  <span className="block font-semibold">{m.judul}</span>
                  <span className="block text-xs text-slate-500">{m.kapan}</span>
                </span>
                <Tag>{m.kanal}</Tag>
              </button>
              {open && (
                <div className="border-t border-slate-200 p-4 dark:border-slate-800">
                  <pre className="whitespace-pre-wrap rounded-xl bg-slate-100 p-4 font-sans text-sm leading-relaxed dark:bg-slate-800/70">{text}</pre>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <CopyButton text={text} />
                    {m.kanal !== 'Email' && (
                      <a className="btn-soft" href={`https://wa.me/?text=${encodeURIComponent(text)}`} target="_blank" rel="noopener noreferrer">
                        <Send aria-hidden="true" className="h-4 w-4" /> Buka di WhatsApp
                      </a>
                    )}
                    {m.kanal !== 'WhatsApp' && (
                      <a className="btn-soft" href={`mailto:?subject=${encodeURIComponent(m.judul)}&body=${encodeURIComponent(text)}`}>
                        Buka email
                      </a>
                    )}
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </section>
    </div>
  );
}

export default function Bimbingan() {
  const [tab, setTab] = useTabParam<Tab>(['log', 'pesan'], 'log');
  return (
    <Page wide>
      <PageHeader eyebrow="Bimbingan & sidang" title="Log bimbingan" subtitle="Catat setiap pertemuan, revisi, dan to-do turunan. Dilengkapi template pesan sopan ke dosen pembimbing." icon={<MessagesSquare aria-hidden="true" className="h-5 w-5" />} />
      <div className="mb-6">
        <Segmented<Tab>
          ariaLabel="Bagian bimbingan"
          value={tab}
          onChange={setTab}
          options={[
            { value: 'log', label: 'Log bimbingan' },
            { value: 'pesan', label: 'Template pesan' }
          ]}
        />
      </div>
      {tab === 'log' ? <LogTab /> : <MessageTab />}
    </Page>
  );
}
