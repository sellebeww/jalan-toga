import { ClipboardCheck, Printer } from 'lucide-react';
import { adminGroups, allAdminItems } from '../data/administrasi';
import { appStore, useAppStore } from '../lib/store';
import { CampusNote, CheckRow, Page, PageHeader, ProgressBar, Tag } from '../components/common/ui';

export default function Administrasi() {
  const { adminChecks } = useAppStore();
  const done = allAdminItems.filter((i) => adminChecks[i.id]).length;
  const pct = (done / allAdminItems.length) * 100;

  return (
    <Page>
      <div className="no-print">
        <PageHeader
          eyebrow="Bimbingan & sidang"
          title="Checklist administrasi kampus"
          subtitle="Dari pengajuan judul sampai wisuda. Daftar ini umum; sesuaikan nama dan urutan dokumen dengan panduan akademik kampusmu."
          icon={<ClipboardCheck aria-hidden="true" className="h-5 w-5" />}
          actions={
            <button className="btn-soft" onClick={() => window.print()}>
              <Printer aria-hidden="true" className="h-4 w-4" /> Cetak / PDF
            </button>
          }
        />
        <div className="card mb-6 p-5">
          <div className="mb-2 flex items-center justify-between">
            <p className="font-heading text-lg font-bold">Kelengkapan administrasi</p>
            <span className="font-semibold">
              {done}/{allAdminItems.length}
            </span>
          </div>
          <ProgressBar value={pct} label="Kelengkapan administrasi" tone={pct === 100 ? 'good' : 'accent'} />
        </div>
        <div className="mb-6">
          <CampusNote>Setiap kampus punya formulir, tanda tangan, dan batas waktu sendiri. Tambahkan catatan di kalender dan tanyakan ke admin prodi bila ada yang berbeda.</CampusNote>
        </div>
      </div>

      <div className="space-y-5">
        {adminGroups.map((g, gi) => {
          const gDone = g.items.filter((i) => adminChecks[i.id]).length;
          return (
            <section key={g.id} className="card p-4 sm:p-5">
              <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">Bagian {gi + 1}</p>
                  <h2 className="font-heading text-lg font-bold">{g.nama}</h2>
                  <p className="text-sm text-slate-500">{g.ringkas}</p>
                </div>
                <Tag tone={gDone === g.items.length ? 'good' : 'neutral'}>
                  {gDone}/{g.items.length}
                </Tag>
              </div>
              <div className="-mx-1.5">
                {g.items.map((i) => (
                  <CheckRow key={i.id} checked={!!adminChecks[i.id]} onToggle={() => appStore.toggleAdminCheck(i.id)}>
                    {i.text}
                    {i.catatan && <span className="ml-1 text-xs text-slate-500">({i.catatan})</span>}
                  </CheckRow>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </Page>
  );
}
