import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { CornerDownLeft, Search, X } from 'lucide-react';
import { navigate } from '../../app/router';
import { routes } from '../../app/routes';
import { allChapters } from '../../data/chapters';
import { faqs } from '../../data/faq';
import { istilahList } from '../../data/istilah';
import { docTemplates } from '../../data/templates';
import { statTests, software } from '../../data/stats';
import { journalSources } from '../../data/jurnal';
import { messageTemplates } from '../../data/pesan';
import { defenseQuestions } from '../../data/sidang';
import { majors } from '../../data/majors';
import { allTopics } from '../../data/modules';
import { allGlossaryTerms } from '../../data/glossary';
import { allComparisons } from '../../data/comparisons';
import { cn } from '../common/cn';

interface Entry {
  id: string;
  kategori: string;
  title: string;
  body: string;
  to: string;
}

const legacyTools: [string, string, string][] = [
  ['likert', 'Likert Calculator & Kontinuum', 'Skor ideal kuesioner dan persentase kriteria'],
  ['spearman', 'Spearman-Brown', 'Reliabilitas split-half'],
  ['cronbach', 'Cronbach Alpha', 'Reliabilitas konsistensi internal'],
  ['kr20', 'KR-20', 'Reliabilitas tes benar/salah'],
  ['sample', 'Sample Size Helper', 'Isaac–Michael, Harry King, Roscoe'],
  ['sampling', 'Sampling Classifier', 'Probability vs nonprobability'],
  ['error', 'Error Type Simulator', 'Kesalahan tipe I dan II'],
  ['sorter', 'Deduktif vs Induktif Sorter', 'Latihan penalaran'],
  ['decision', 'Decision Tree Desain Riset', 'Memilih desain riset'],
  ['ieee', 'IEEE Citation Generator', 'Sitasi kurung siku'],
  ['chart', 'Chart Selector', 'Memilih grafik data'],
  ['alignment', 'Thesis Alignment Checklist', 'Keselarasan skripsi'],
  ['poster', 'Poster Ilmiah Checklist', 'Audit poster']
];

let cache: Entry[] | null = null;

function buildIndex(): Entry[] {
  if (cache) return cache;
  const e: Entry[] = [];
  routes.forEach((r) => e.push({ id: `page-${r.path}`, kategori: 'Halaman', title: r.title, body: r.desc, to: r.path }));
  allChapters.forEach((c) => {
    e.push({ id: `bab-${c.id}`, kategori: 'Panduan bab', title: `${c.nomor}: ${c.judul}`, body: c.fungsi, to: `/bab/${c.id}` });
    c.subbab.forEach((s, i) => e.push({ id: `sub-${c.id}-${i}`, kategori: 'Panduan bab', title: s.nama, body: s.isi, to: `/bab/${c.id}` }));
  });
  faqs.forEach((f) => e.push({ id: `faq-${f.id}`, kategori: 'FAQ', title: f.tanya, body: f.jawab, to: `/template?tab=faq&q=${encodeURIComponent(f.tanya.split(' ').slice(0, 3).join(' '))}` }));
  istilahList.forEach((i) => e.push({ id: `istilah-${i.term}`, kategori: 'Istilah', title: i.term + (i.english ? ` (${i.english})` : ''), body: i.arti, to: '/template?tab=istilah' }));
  docTemplates.forEach((t) => e.push({ id: `tpl-${t.id}`, kategori: 'Template', title: t.judul, body: t.ringkas, to: '/template' }));
  Object.values(statTests).forEach((t) => e.push({ id: `uji-${t.id}`, kategori: 'Uji statistik', title: t.nama, body: t.kapan, to: '/toolkit?tab=uji' }));
  software.forEach((s) => e.push({ id: `sw-${s.id}`, kategori: 'Perangkat lunak', title: s.nama, body: s.untuk, to: '/toolkit?tab=software' }));
  journalSources.forEach((j) => e.push({ id: `jurnal-${j.id}`, kategori: 'Cari jurnal', title: j.nama, body: j.fungsi, to: '/referensi?tab=jurnal' }));
  messageTemplates.forEach((m) => e.push({ id: `pesan-${m.id}`, kategori: 'Pesan dosen', title: m.judul, body: m.kapan, to: '/bimbingan?tab=pesan' }));
  defenseQuestions.forEach((q) => e.push({ id: `sidang-${q.id}`, kategori: 'Pertanyaan penguji', title: q.tanya, body: q.jawab, to: '/sidang?tab=bank' }));
  majors.forEach((m) => e.push({ id: `jurusan-${m.id}`, kategori: 'Jurusan', title: m.nama, body: `${m.contoh.join(', ')}. ${m.ringkas}`, to: '/mulai' }));
  allTopics.forEach((t) => e.push({ id: `topik-${t.id}`, kategori: 'Materi metodologi', title: t.title, body: t.tldr || t.definition || '', to: `/belajar?tab=materi&modul=${t.moduleSlug}&topik=${t.id}` }));
  allGlossaryTerms.forEach((g) => e.push({ id: `glos-${g.id}`, kategori: 'Glosarium', title: g.term + (g.english ? ` (${g.english})` : ''), body: g.meaning, to: `/belajar?tab=glosarium&istilah=${g.id}` }));
  allComparisons.forEach((c) => e.push({ id: `cmp-${c.id}`, kategori: 'Bandingkan', title: `${c.conceptA} vs ${c.conceptB}`, body: c.summary, to: '/belajar?tab=latihan' }));
  legacyTools.forEach(([id, name, desc]) => e.push({ id: `alat-${id}`, kategori: 'Alat', title: name, body: desc, to: `/belajar?tab=alat&alat=${id}` }));
  cache = e;
  return e;
}

function search(q: string): Entry[] {
  const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];
  const scored: { e: Entry; s: number }[] = [];
  for (const e of buildIndex()) {
    const title = e.title.toLowerCase();
    const body = e.body.toLowerCase();
    let score = 0;
    let ok = true;
    for (const t of terms) {
      if (title.startsWith(t)) score += 6;
      else if (title.includes(t)) score += 4;
      else if (e.kategori.toLowerCase().includes(t)) score += 1;
      else if (body.includes(t)) score += 1;
      else {
        ok = false;
        break;
      }
    }
    if (ok) scored.push({ e, s: score + (e.kategori === 'Halaman' ? 2 : 0) });
  }
  return scored.sort((a, b) => b.s - a.s).slice(0, 30).map((x) => x.e);
}

const suggestions = ['sempro', 'rumusan masalah', 'plagiarisme', 'uji t', 'APA 7', 'kuesioner', 'burnout', 'Slovin'];

export default function SearchModal({ onClose }: { onClose: () => void }) {
  const [q, setQ] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const results = useMemo(() => search(q), [q]);

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    inputRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      previous?.focus?.();
    };
  }, []);

  useEffect(() => {
    listRef.current?.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: 'nearest' });
  }, [active]);

  const go = (e: Entry) => {
    onClose();
    navigate(e.to);
  };

  const onKey = (ev: React.KeyboardEvent) => {
    if (ev.key === 'Escape') {
      ev.preventDefault();
      onClose();
    } else if (ev.key === 'ArrowDown') {
      ev.preventDefault();
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (ev.key === 'ArrowUp') {
      ev.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (ev.key === 'Enter' && results[active]) {
      ev.preventDefault();
      go(results[active]);
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-[60] flex items-start justify-center px-3 pt-[8vh] sm:px-4 sm:pt-[12vh]" onKeyDown={onKey}>
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px]" onClick={onClose} aria-hidden="true" />
      <div role="dialog" aria-modal="true" aria-label="Pencarian" className="toast-enter relative flex max-h-[78dvh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center gap-3 border-b border-slate-200 px-4 dark:border-slate-800">
          <Search aria-hidden="true" className="h-5 w-5 shrink-0 text-slate-400" />
          <input
            ref={inputRef}
            role="combobox"
            aria-expanded={results.length > 0}
            aria-controls="hasil-cari"
            aria-activedescendant={results[active] ? `opt-${results[active].id}` : undefined}
            aria-autocomplete="list"
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setActive(0);
            }}
            placeholder="Cari panduan, istilah, FAQ, template, alat..."
            className="h-14 w-full bg-transparent text-base outline-none placeholder:text-slate-400"
          />
          <button onClick={onClose} aria-label="Tutup pencarian" className="btn-ghost h-10 min-h-10 w-10 shrink-0 px-0">
            <X aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-2" aria-live="polite">
          {q.trim() === '' ? (
            <div className="px-3 py-8 text-center">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-200">Cari apa saja di seluruh situs</p>
              <p className="mt-1 text-xs text-slate-500">Coba salah satu:</p>
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {suggestions.map((s) => (
                  <button key={s} className="chip hover:border-indigo-300" onClick={() => setQ(s)}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <p className="px-3 py-10 text-center text-sm text-slate-500">Tidak ada hasil untuk “{q}”. Coba kata kunci yang lebih umum.</p>
          ) : (
            <ul id="hasil-cari" role="listbox" ref={listRef}>
              {results.map((r, i) => (
                <li
                  key={r.id}
                  id={`opt-${r.id}`}
                  role="option"
                  aria-selected={i === active}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => go(r)}
                  className={cn('flex min-h-12 cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5', i === active ? 'bg-indigo-50 dark:bg-indigo-950/50' : 'hover:bg-slate-50 dark:hover:bg-slate-800/50')}
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="shrink-0 rounded-md border border-slate-200 bg-slate-100 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">{r.kategori}</span>
                      <span className="truncate text-sm font-semibold">{r.title}</span>
                    </div>
                    <p className="mt-0.5 line-clamp-1 text-xs text-slate-500">{r.body}</p>
                  </div>
                  {i === active && <CornerDownLeft aria-hidden="true" className="hidden h-4 w-4 shrink-0 text-slate-400 sm:block" />}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="hidden items-center justify-between border-t border-slate-200 px-4 py-2 text-[11px] text-slate-500 sm:flex dark:border-slate-800">
          <span>{results.length > 0 ? `${results.length} hasil` : 'Ketik untuk mencari'}</span>
          <span>↑↓ pilih · Enter buka · Esc tutup</span>
        </div>
      </div>
    </div>,
    document.body
  );
}
