import { AlertTriangle, Ruler } from 'lucide-react';
import { commonFormatMistakes, formatGroups, wordTips } from '../data/format';
import { CampusNote, Page, PageHeader, Section } from '../components/common/ui';

export default function Format() {
  return (
    <Page>
      <PageHeader
        eyebrow="Menulis"
        title="Contekan format penulisan"
        subtitle="Acuan umum format skripsi yang banyak dipakai di kampus Indonesia: margin, huruf, penomoran, tabel, kutipan, dan bahasa."
        icon={<Ruler aria-hidden="true" className="h-5 w-5" />}
      />
      <div className="mb-6">
        <CampusNote>Angka di halaman ini adalah praktik umum, bukan aturan resmi. Kampus dan fakultas punya buku pedoman sendiri. Kalau berbeda, ikuti buku pedoman.</CampusNote>
      </div>

      <div className="space-y-6">
        {formatGroups.map((g) => (
          <Section key={g.id} title={g.nama} className="mb-0">
            <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">{g.nama}</caption>
                <thead className="hidden bg-slate-100 text-xs uppercase tracking-wide text-slate-600 sm:table-header-group dark:bg-slate-800/70 dark:text-slate-300">
                  <tr>
                    <th scope="col" className="w-1/4 px-4 py-2.5">Aspek</th>
                    <th scope="col" className="w-2/5 px-4 py-2.5">Umumnya</th>
                    <th scope="col" className="px-4 py-2.5">Catatan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white dark:divide-slate-800 dark:bg-slate-900/50">
                  {g.baris.map((r) => (
                    <tr key={r.aspek} className="block px-4 py-3 sm:table-row sm:px-0 sm:py-0">
                      <th scope="row" className="block pb-1 font-semibold sm:table-cell sm:px-4 sm:py-3">{r.aspek}</th>
                      <td className="block pb-1 sm:table-cell sm:px-4 sm:py-3">{r.umum}</td>
                      <td className="block text-slate-500 sm:table-cell sm:px-4 sm:py-3 dark:text-slate-400">{r.catatan ?? '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>
        ))}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Section title="Kesalahan format yang sering terjadi" className="mb-0">
          <ul className="space-y-2.5">
            {commonFormatMistakes.map((m) => (
              <li key={m} className="card flex gap-2.5 p-3.5 text-sm">
                <AlertTriangle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                {m}
              </li>
            ))}
          </ul>
        </Section>
        <Section title="Trik Microsoft Word / Google Docs" className="mb-0">
          <ul className="space-y-2.5">
            {wordTips.map((t) => (
              <li key={t.judul} className="card p-3.5 text-sm">
                <strong>{t.judul}.</strong> {t.isi}
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </Page>
  );
}
