import { useState } from 'react';
import { ArrowLeft, ArrowRight, BookText, Check } from 'lucide-react';
import { Link, navigate, useLocation } from '../app/router';
import { chapterById, chaptersFor, urutanMenulis } from '../data/chapters';
import { chapterProgress, statusLabels, statusTone } from '../lib/chapterUtil';
import { usePlan } from '../lib/usePlan';
import { appStore, useAppStore } from '../lib/store';
import type { BabStatus } from '../types/skripsi';
import { CampusNote, CheckRow, CopyButton, Notice, Page, PageHeader, ProgressBar, Section, Segmented, Tag } from '../components/common/ui';
import { cn } from '../components/common/cn';
import { MajorSelect, resolveMajor } from '../components/common/MajorSelect';

function approachKeywords(approach: string | undefined, majorId: string): string[] {
  const k: string[] = [];
  if (approach === 'kuantitatif') k.push('Kuantitatif');
  if (approach === 'kualitatif' || approach === 'studi-kasus') k.push('Kualitatif');
  if (approach === 'rnd') k.push('R&D');
  if (approach === 'ptk') k.push('PTK');
  if (approach === 'hukum-normatif') k.push('Hukum');
  if (majorId === 'informatika') k.push('Informatika');
  if (['teknik', 'sains', 'pertanian'].includes(majorId)) k.push('Eksperimen');
  return k;
}

function ChapterList() {
  const { profile, major: profMajor } = usePlan();
  const state = useAppStore();
  const [majorId, setMajorId] = useState<string | null>(null);
  const major = resolveMajor(majorId, profile?.jurusanId);
  const [struktur, setStruktur] = useState<'bab15' | 'imrad'>(profMajor?.struktur ?? major.struktur);
  const list = chaptersFor(struktur);

  return (
    <Page>
      <PageHeader
        eyebrow="Menulis"
        title="Panduan tiap bab"
        subtitle="Fungsi bab, isi tiap subbab, kerangka siap pakai, kesalahan umum, dan checklist sebelum kirim ke dosen. Pilih struktur yang dipakai prodi-mu."
        icon={<BookText aria-hidden="true" className="h-5 w-5" />}
      />
      <div className="mb-6 grid gap-4 sm:grid-cols-2">
        {!profile && <MajorSelect value={major.id} onChange={(id) => { setMajorId(id); setStruktur(resolveMajor(id, undefined).struktur); }} hint="Atur profil agar otomatis terisi." />}
        <div>
          <p className="mb-1.5 text-sm font-semibold">Struktur naskah</p>
          <Segmented<'bab15' | 'imrad'>
            ariaLabel="Struktur naskah"
            value={struktur}
            onChange={setStruktur}
            options={[
              { value: 'bab15', label: 'Bab 1–5' },
              { value: 'imrad', label: 'IMRAD' }
            ]}
          />
          <p className="mt-1.5 text-xs text-slate-500">
            {major.struktur === struktur ? `Umum dipakai di rumpun ${major.nama.split(' (')[0]}.` : 'Jarang dipakai di jurusanmu; pastikan sesuai pedoman.'}
          </p>
        </div>
      </div>

      <ul className="grid gap-3 sm:grid-cols-2">
        {list.map((ch) => {
          const prog = chapterProgress(ch, state.babChecks);
          const status = state.babStatus[ch.id] ?? 'belum';
          return (
            <li key={ch.id}>
              <Link to={`/bab/${ch.id}`} className="card block h-full p-5 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md dark:hover:border-indigo-800">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">{ch.nomor}</span>
                  <Tag tone={statusTone[status]}>{statusLabels[status]}</Tag>
                </div>
                <h2 className="font-heading text-xl font-bold leading-snug">{ch.judul}</h2>
                <p className="mt-1.5 line-clamp-3 text-sm text-slate-600 dark:text-slate-300">{ch.fungsi}</p>
                <div className="mt-4 flex items-center gap-3">
                  <ProgressBar value={prog.pct} label={`Checklist ${ch.judul}`} />
                  <span className="shrink-0 text-xs font-semibold text-slate-500">
                    {prog.done}/{prog.total}
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      <Section title="Urutan menulis yang disarankan" hint="Tidak harus dari Bab 1. Urutan ini biasanya lebih efisien." className="mt-10">
        <ol className="space-y-2.5">
          {urutanMenulis.map((u, i) => (
            <li key={u.langkah} className="card flex gap-3 p-4">
              <span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-800 dark:bg-indigo-950 dark:text-indigo-200">
                {i + 1}
              </span>
              <div>
                <p className="font-semibold">{u.langkah}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">{u.alasan}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>
      <div className="mt-6">
        <CampusNote>Jumlah halaman dan nama bab di sini adalah gambaran umum. Struktur pasti (misalnya apakah Bab 4 dan 5 digabung) mengikuti buku pedoman prodi-mu.</CampusNote>
      </div>
    </Page>
  );
}

type Tab = 'isi' | 'kerangka' | 'kesalahan' | 'checklist';

function ChapterDetail({ id }: { id: string }) {
  const { profile, major: profMajor } = usePlan();
  const state = useAppStore();
  const [tab, setTab] = useState<Tab>('isi');
  const ch = chapterById(id);

  if (!ch) {
    return (
      <Page>
        <Notice tone="warn" title="Bab tidak ditemukan">
          <Link to="/bab" className="underline">
            Kembali ke daftar bab
          </Link>
        </Notice>
      </Page>
    );
  }

  const struktur = id.startsWith('imrad') ? 'imrad' : 'bab15';
  const list = chaptersFor(struktur);
  const idx = list.findIndex((c) => c.id === id);
  const prev = list[idx - 1];
  const nextCh = list[idx + 1];
  const prog = chapterProgress(ch, state.babChecks);
  const status = state.babStatus[ch.id] ?? 'belum';
  const kws = approachKeywords(profile?.pendekatanId, profMajor?.id ?? '');

  const outlineText = `${ch.nomor}. ${ch.judul}\n\n${ch.kerangka}`;

  return (
    <Page>
      <Link to="/bab" className="mb-4 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-700 hover:underline dark:text-indigo-300">
        <ArrowLeft aria-hidden="true" className="h-4 w-4" /> Semua bab
      </Link>
      <PageHeader
        eyebrow={ch.nomor}
        title={ch.judul}
        subtitle={ch.fungsi}
        icon={<BookText aria-hidden="true" className="h-5 w-5" />}
        actions={<Tag tone="neutral">{ch.panjang}</Tag>}
      />

      <div className="card mb-6 flex flex-wrap items-center gap-4 p-4">
        <div className="min-w-[200px] flex-1">
          <label htmlFor="status-bab" className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500">
            Status bab ini
          </label>
          <select id="status-bab" className="field" value={status} onChange={(e) => appStore.setBabStatus(ch.id, e.target.value as BabStatus)}>
            {(Object.keys(statusLabels) as BabStatus[]).map((s) => (
              <option key={s} value={s}>
                {statusLabels[s]}
              </option>
            ))}
          </select>
        </div>
        <div className="min-w-[200px] flex-1">
          <p className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-500">Checklist siap kirim</p>
          <div className="flex items-center gap-3">
            <ProgressBar value={prog.pct} label="Checklist bab" tone={prog.pct === 100 ? 'good' : 'accent'} />
            <span className="shrink-0 text-sm font-semibold">
              {prog.done}/{prog.total}
            </span>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <Segmented<Tab>
          ariaLabel="Bagian panduan"
          value={tab}
          onChange={setTab}
          scrollable
          options={[
            { value: 'isi', label: 'Isi subbab' },
            { value: 'kerangka', label: 'Kerangka' },
            { value: 'kesalahan', label: 'Kesalahan umum' },
            { value: 'checklist', label: 'Checklist' }
          ]}
        />
      </div>

      {tab === 'isi' && (
        <div className="space-y-4">
          {ch.subbab.map((s) => (
            <section key={s.nama} className="card p-5">
              <h2 className="font-heading text-lg font-bold">{s.nama}</h2>
              <p className="mt-1.5 text-[15px] leading-relaxed text-slate-700 dark:text-slate-200">{s.isi}</p>
              {s.tips && (
                <Notice tone="tip" className="mt-3" title="Tips">
                  {s.tips}
                </Notice>
              )}
            </section>
          ))}
          {ch.varian.length > 0 && (
            <section className="card p-5">
              <h2 className="font-heading text-lg font-bold">Penyesuaian menurut jenis penelitian</h2>
              <p className="mb-3 mt-1 text-sm text-slate-500">Yang relevan dengan profilmu ditandai.</p>
              <ul className="space-y-2.5">
                {ch.varian.map((v) => {
                  const relevant = kws.some((k) => v.untuk.includes(k));
                  return (
                    <li key={v.untuk} className={cn('rounded-xl border p-3.5', relevant ? 'border-indigo-300 bg-indigo-50 dark:border-indigo-800 dark:bg-indigo-950/30' : 'border-slate-200 dark:border-slate-800')}>
                      <p className="flex items-center gap-2 text-sm font-bold">
                        {v.untuk} {relevant && <Tag tone="accent">Cocok denganmu</Tag>}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-700 dark:text-slate-200">{v.catatan}</p>
                    </li>
                  );
                })}
              </ul>
            </section>
          )}
        </div>
      )}

      {tab === 'kerangka' && (
        <div className="space-y-4">
          <section className="card p-5">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <h2 className="font-heading text-lg font-bold">Kerangka siap isi</h2>
              <CopyButton text={outlineText} label="Salin kerangka" size="sm" />
            </div>
            <pre className="overflow-x-auto whitespace-pre-wrap rounded-xl bg-slate-100 p-4 font-mono text-[13px] leading-relaxed text-slate-800 dark:bg-slate-800/70 dark:text-slate-100">{ch.kerangka}</pre>
          </section>
          {ch.contoh?.map((c) => (
            <section key={c.judul} className="card p-5">
              <h2 className="font-heading text-base font-bold">{c.judul}</h2>
              <p className="mt-2 whitespace-pre-line rounded-xl border-l-4 border-indigo-400 bg-slate-50 p-4 text-sm leading-relaxed dark:bg-slate-800/50">{c.teks}</p>
            </section>
          ))}
        </div>
      )}

      {tab === 'kesalahan' && (
        <ul className="space-y-3">
          {ch.kesalahan.map((k) => (
            <li key={k} className="card flex gap-3 p-4">
              <span aria-hidden="true" className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-800 dark:bg-amber-950 dark:text-amber-200">
                !
              </span>
              <p className="text-[15px] leading-relaxed">{k}</p>
            </li>
          ))}
        </ul>
      )}

      {tab === 'checklist' && (
        <section className="card p-4 sm:p-5">
          <h2 className="mb-1 font-heading text-lg font-bold">Sebelum dikirim ke dosen</h2>
          <p className="mb-3 text-sm text-slate-500">Centang yang sudah kamu pastikan. Progres tersimpan di perangkatmu.</p>
          {ch.checklist.map((c, i) => (
            <CheckRow key={c} checked={!!state.babChecks[`chk.${ch.id}.${i}`]} onToggle={() => appStore.toggleBabCheck(`chk.${ch.id}.${i}`)}>
              {c}
            </CheckRow>
          ))}
          {prog.pct === 100 && (
            <div className="mt-4">
              <Notice tone="good" title="Siap dikirim">
                Semua poin terpenuhi. Kirim ke dosen dan perbarui status bab menjadi "Di dosen".
                <button className="ml-2 font-semibold underline" onClick={() => appStore.setBabStatus(ch.id, 'bimbingan')}>
                  <Check aria-hidden="true" className="mr-1 inline h-3.5 w-3.5" />
                  Tandai sudah dikirim
                </button>
              </Notice>
            </div>
          )}
        </section>
      )}

      <nav aria-label="Navigasi bab" className="mt-8 grid grid-cols-2 gap-3">
        {prev ? (
          <button className="btn-soft justify-start text-left" onClick={() => navigate(`/bab/${prev.id}`)}>
            <ArrowLeft aria-hidden="true" className="h-4 w-4 shrink-0" />
            <span className="truncate">{prev.nomor}: {prev.judul}</span>
          </button>
        ) : (
          <span />
        )}
        {nextCh ? (
          <button className="btn-soft justify-end text-right" onClick={() => navigate(`/bab/${nextCh.id}`)}>
            <span className="truncate">{nextCh.nomor}: {nextCh.judul}</span>
            <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" />
          </button>
        ) : (
          <span />
        )}
      </nav>
    </Page>
  );
}

export default function Bab() {
  const { segments } = useLocation();
  const id = segments[1];
  return id ? <ChapterDetail id={id} key={id} /> : <ChapterList />;
}
