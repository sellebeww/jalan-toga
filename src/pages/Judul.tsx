import { useState } from 'react';
import { CheckCircle2, CircleAlert, SpellCheck, ThumbsDown, ThumbsUp, TriangleAlert } from 'lucide-react';
import { useLocation } from '../app/router';
import { titleManualChecks, titlePairs } from '../data/topik';
import { checkTitle, scoreLabel } from '../lib/titleCheck';
import { appStore, useAppStore } from '../lib/store';
import { CheckRow, Notice, Page, PageHeader, Ring, Section, Segmented, Tag } from '../components/common/ui';

type Tab = 'periksa' | 'galeri';

export default function Judul() {
  const { query } = useLocation();
  const { profile, titleChecks } = useAppStore();
  const [tab, setTab] = useState<Tab>('periksa');
  const [title, setTitle] = useState(query.get('t') ?? profile?.judul ?? '');
  const report = checkTitle(title);
  const label = scoreLabel(report.score);
  const manualDone = titleManualChecks.filter((c) => titleChecks[c.id]).length;

  return (
    <Page>
      <PageHeader eyebrow="Mulai skripsi" title="Pemeriksa judul" subtitle="Periksa judul secara cepat, pelajari contoh judul bagus vs buruk, dan lengkapi dengan checklist 8 butir sebelum diajukan." icon={<SpellCheck aria-hidden="true" className="h-5 w-5" />} />
      <div className="mb-6">
        <Segmented<Tab>
          ariaLabel="Bagian pemeriksa judul"
          value={tab}
          onChange={setTab}
          options={[
            { value: 'periksa', label: 'Periksa judul' },
            { value: 'galeri', label: 'Galeri bagus vs buruk' }
          ]}
        />
      </div>

      {tab === 'periksa' && (
        <div className="grid gap-6 lg:grid-cols-2">
          <section>
            <label htmlFor="judul-input" className="mb-1.5 block text-sm font-semibold">
              Judul yang ingin diperiksa
            </label>
            <textarea
              id="judul-input"
              className="field min-h-36 resize-y font-heading text-lg leading-snug"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ketik atau tempel judul skripsimu di sini"
              maxLength={400}
            />
            <p className="mt-1.5 text-xs text-slate-500">{report.words} kata</p>

            <div className="mt-6">
              <h2 className="mb-1 text-lg font-bold">Checklist 8 butir</h2>
              <p className="mb-2 text-sm text-slate-500">
                {manualDone}/{titleManualChecks.length} terpenuhi. Pemeriksa otomatis tidak bisa menilai hal-hal ini.
              </p>
              <div className="card -mx-0.5 p-2">
                {titleManualChecks.map((c) => (
                  <CheckRow key={c.id} checked={!!titleChecks[c.id]} onToggle={() => appStore.toggleTitleCheck(c.id)}>
                    {c.text}
                  </CheckRow>
                ))}
              </div>
            </div>
          </section>

          <section className="card h-fit p-5" aria-live="polite">
            <div className="flex items-center gap-4">
              <Ring value={report.score} size={92} stroke={9} label="Skor judul" />
              <div>
                <Tag tone={label.tone}>{label.label}</Tag>
                <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300">Pemeriksa otomatis memakai aturan sederhana. Pembimbingmu yang menentukan akhirnya.</p>
              </div>
            </div>
            <ul className="mt-5 space-y-2.5">
              {report.findings.map((f, i) => {
                const Icon = f.tone === 'good' ? CheckCircle2 : f.tone === 'warn' ? TriangleAlert : CircleAlert;
                const color = f.tone === 'good' ? 'text-emerald-600' : f.tone === 'warn' ? 'text-amber-600' : 'text-rose-600';
                return (
                  <li key={i} className="flex gap-2.5 text-sm leading-relaxed">
                    <Icon aria-hidden="true" className={`mt-0.5 h-4 w-4 shrink-0 ${color}`} />
                    <span>{f.text}</span>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      )}

      {tab === 'galeri' && (
        <Section hint="Perhatikan bagaimana judul yang bagus memuat fokus, objek, dan konteks sekaligus.">
          <ul className="space-y-5">
            {titlePairs.map((p) => (
              <li key={p.buruk} className="grid gap-3 md:grid-cols-2">
                <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 dark:border-rose-900 dark:bg-rose-950/25">
                  <p className="mb-1 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-rose-700 dark:text-rose-300">
                    <ThumbsDown aria-hidden="true" className="h-3.5 w-3.5" /> Kurang baik
                  </p>
                  <p className="font-heading text-lg font-semibold leading-snug">{p.buruk}</p>
                  <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">{p.alasanBuruk}</p>
                </div>
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900 dark:bg-emerald-950/25">
                  <p className="mb-1 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
                    <ThumbsUp aria-hidden="true" className="h-3.5 w-3.5" /> Lebih baik
                  </p>
                  <p className="font-heading text-lg font-semibold leading-snug">{p.bagus}</p>
                  <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">{p.alasanBagus}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Notice tone="tip" title="Rumus cepat judul yang tajam">
              [Penanda jenis: Pengaruh / Analisis / Pengembangan] + [fokus atau variabel] + [terhadap/untuk/pada] + [objek] + [konteks: lokasi, periode, metode].
            </Notice>
          </div>
        </Section>
      )}
    </Page>
  );
}
