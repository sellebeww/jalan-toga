import { useState } from 'react';
import { AlertTriangle, ArrowRight, Check, ChevronDown, Circle, Download, Pencil, Route as RouteIcon } from 'lucide-react';
import { Link } from '../app/router';
import { semesterGroups, jalurInfo, phases } from '../data/roadmap';
import { usePlan } from '../lib/usePlan';
import { appStore, useAppStore } from '../lib/store';
import { phaseProgress, type PlanPhase } from '../lib/roadmap';
import { formatDateID, formatMonthID } from '../lib/date';
import { CampusNote, CheckRow, EmptyState, Notice, Page, PageHeader, ProgressBar, Segmented, Tag } from '../components/common/ui';
import { cn } from '../components/common/cn';
import type { Jalur } from '../types/skripsi';

type View = 'timeline' | 'semester' | 'jalur';

const kelayakanMsg = {
  lega: { tone: 'good' as const, title: 'Waktumu lega', body: 'Dengan tempo normal, targetmu masih punya cadangan. Jaga ritme dan jangan menunda tahap awal.' },
  aman: { tone: 'good' as const, title: 'Waktumu cukup', body: 'Targetmu realistis jika kamu konsisten. Sisakan ruang untuk revisi dan hal tak terduga.' },
  ketat: { tone: 'warn' as const, title: 'Waktumu ketat', body: 'Perlu tempo lebih cepat (jalur kejar tayang): kerjakan beberapa hal paralel dan minta jadwal bimbingan rutin.' },
  'sangat-ketat': { tone: 'warn' as const, title: 'Waktumu sangat ketat', body: 'Target ini sulit dicapai dengan tempo wajar. Pertimbangkan menggeser target atau mempersempit ruang lingkup penelitian.' },
  'tanpa-target': { tone: 'info' as const, title: 'Belum ada target lulus', body: 'Atur target lulus di profil agar jadwal tiap tahap bisa dihitung.' }
} as const;

function PhaseCard({ p, defaultOpen }: { p: PlanPhase; defaultOpen: boolean }) {
  const { roadmapChecks } = useAppStore();
  const [open, setOpen] = useState(defaultOpen);
  const prog = phaseProgress(p, roadmapChecks);
  const isCurrent = p.state === 'berjalan';
  const isDone = p.state === 'selesai' || prog.fraction === 1;

  return (
    <li className="relative pl-9 sm:pl-12">
      <span
        aria-hidden="true"
        className={cn(
          'absolute left-0 top-4 flex h-7 w-7 items-center justify-center rounded-full border-2 bg-white text-xs font-bold sm:h-8 sm:w-8 dark:bg-slate-900',
          isDone
            ? 'border-emerald-600 bg-emerald-600 text-white dark:border-emerald-500 dark:bg-emerald-600'
            : isCurrent
              ? 'border-indigo-600 text-indigo-700 dark:border-indigo-400 dark:text-indigo-300'
              : 'border-slate-300 text-slate-500 dark:border-slate-700'
        )}
      >
        {isDone ? <Check className="h-4 w-4" /> : p.index + 1}
      </span>
      <div className={cn('card overflow-hidden', isCurrent && 'border-indigo-300 ring-2 ring-indigo-500/15 dark:border-indigo-800')}>
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="flex min-h-14 w-full items-start gap-3 px-4 py-3.5 text-left"
        >
          <span className="min-w-0 flex-1">
            <span className="flex flex-wrap items-center gap-2">
              <span className="font-heading text-lg font-bold text-slate-900 dark:text-slate-50">{p.def.nama}</span>
              {isCurrent && <Tag tone="accent">Kamu di sini</Tag>}
              {p.state === 'selesai' && <Tag tone="good">Sudah dilewati</Tag>}
            </span>
            <span className="mt-0.5 block text-sm text-slate-600 dark:text-slate-300">{p.def.ringkas}</span>
            <span className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
              {p.state !== 'selesai' && (
                <span>
                  {formatDateID(p.mulai, false)} – {formatDateID(p.selesai, false)} · {p.minggu} minggu
                </span>
              )}
              <span>
                {prog.done}/{prog.total} langkah
              </span>
            </span>
            <ProgressBar value={prog.fraction * 100} label={`Progres ${p.def.nama}`} className="mt-2 max-w-xs" tone={isDone ? 'good' : 'accent'} />
          </span>
          <ChevronDown aria-hidden="true" className={cn('mt-1 h-5 w-5 shrink-0 text-slate-500 transition-transform', open && 'rotate-180')} />
        </button>

        {open && (
          <div className="space-y-5 border-t border-slate-200 px-4 py-4 dark:border-slate-800">
            <div>
              <h4 className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-500">Tujuan</h4>
              <p className="text-sm leading-relaxed">{p.def.tujuan}</p>
            </div>
            <div>
              <h4 className="mb-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">Langkah-langkah</h4>
              <ol className="list-decimal space-y-1.5 pl-5 text-sm leading-relaxed marker:font-semibold marker:text-indigo-600">
                {p.def.langkah.map((l, i) => (
                  <li key={i}>{l}</li>
                ))}
              </ol>
            </div>
            <div>
              <h4 className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-500">Checklist</h4>
              <div className="-mx-1.5">
                {p.items.map((item) => (
                  <CheckRow key={item.id} checked={p.state === 'selesai' ? true : !!roadmapChecks[item.id]} onToggle={() => appStore.toggleRoadmapCheck(item.id)} extra={item.extra}>
                    {item.text}
                  </CheckRow>
                ))}
              </div>
            </div>
            <Notice tone="warn" title="Kesalahan yang sering terjadi">
              {p.def.kesalahanUmum}
            </Notice>
            {p.def.bantuan.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {p.def.bantuan.map((b) => (
                  <Link key={b.label} to={b.path} className="btn-soft min-h-10 text-sm">
                    {b.label} <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </li>
  );
}

function PrintView() {
  const { profile, major, plan, progress } = usePlan();
  const { roadmapChecks } = useAppStore();
  if (!profile || !plan) return null;
  return (
    <div className="print-only text-black">
      <h1 style={{ fontSize: 22, fontWeight: 700 }}>Roadmap Skripsi</h1>
      <p style={{ fontSize: 12, margin: '4px 0 12px' }}>
        {profile.nama || 'Mahasiswa'} · {major?.nama} · Semester {profile.semester} · Target lulus {profile.targetLulus ? formatMonthID(profile.targetLulus) : '-'} · Jalur {jalurInfo[profile.jalur].nama} · Progres {progress}%
      </p>
      {profile.judul && <p style={{ fontSize: 12, marginBottom: 12 }}>Judul: {profile.judul}</p>}
      {plan.phases.map((p) => (
        <section key={p.def.id} style={{ breakInside: 'avoid', marginBottom: 14 }}>
          <h2 style={{ fontSize: 14, fontWeight: 700 }}>
            {p.index + 1}. {p.def.nama} {p.state === 'selesai' ? '(dilewati)' : `· ${formatDateID(p.mulai, false)} – ${formatDateID(p.selesai, false)}`}
          </h2>
          <p style={{ fontSize: 11, margin: '2px 0 4px' }}>{p.def.tujuan}</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 11 }}>
            {p.items.map((i) => (
              <li key={i.id} style={{ marginBottom: 2 }}>
                {p.state === 'selesai' || roadmapChecks[i.id] ? '☑' : '☐'} {i.text}
              </li>
            ))}
          </ul>
        </section>
      ))}
      <p style={{ fontSize: 10, marginTop: 12 }}>Dibuat dengan Jalan Toga. Cocokkan jadwal dan syarat dengan panduan akademik kampusmu.</p>
    </div>
  );
}

export default function Roadmap() {
  const { profile, major, plan, phaseIndex, progress } = usePlan();
  const [view, setView] = useState<View>('timeline');

  if (!profile || !plan) {
    return (
      <Page>
        <PageHeader eyebrow="Roadmap" title="Peta perjalanan skripsi" subtitle="Dari eksplorasi sampai wisuda dalam 10 tahap. Atur profilmu untuk mendapatkan jadwal dan checklist yang disesuaikan dengan jurusanmu." icon={<RouteIcon aria-hidden="true" className="h-5 w-5" />} />
        <EmptyState
          icon={<RouteIcon className="h-6 w-6" />}
          title="Roadmap personalmu belum dibuat"
          body="Jawab 5 pertanyaan singkat (jurusan, semester, status, target lulus) dan roadmap langsung tersusun."
          action={
            <Link to="/mulai" className="btn-primary">
              Buat roadmap sekarang
            </Link>
          }
        />
        <div className="mt-8">
          <h2 className="mb-3 text-lg font-bold">Gambaran 10 tahap</h2>
          <ol className="grid gap-3 sm:grid-cols-2">
            {phases.map((p, i) => (
              <li key={p.id} className="card p-4">
                <p className="text-xs font-bold text-indigo-700 dark:text-indigo-300">Tahap {i + 1} · semester {p.semester}</p>
                <p className="font-heading text-lg font-bold">{p.nama}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">{p.ringkas}</p>
              </li>
            ))}
          </ol>
        </div>
      </Page>
    );
  }

  const km = kelayakanMsg[plan.kelayakan];
  const current = plan.phases[phaseIndex];

  return (
    <Page>
      <div className="no-print">
        <PageHeader
          eyebrow="Roadmap"
          title="Peta perjalanan skripsimu"
          subtitle={`${major?.nama} · Semester ${profile.semester} · ${jalurInfo[profile.jalur].nama}${profile.targetLulus ? ` · Target lulus ${formatMonthID(profile.targetLulus)}` : ''}`}
          icon={<RouteIcon aria-hidden="true" className="h-5 w-5" />}
          actions={
            <>
              <button className="btn-soft" onClick={() => window.print()}>
                <Download aria-hidden="true" className="h-4 w-4" /> Ekspor PDF
              </button>
              <Link to="/mulai" className="btn-soft">
                <Pencil aria-hidden="true" className="h-4 w-4" /> Ubah profil
              </Link>
            </>
          }
        />

        <div className="mb-6 grid gap-4 sm:grid-cols-3">
          <div className="card p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Progres keseluruhan</p>
            <p className="mt-1 font-heading text-3xl font-bold">{progress}%</p>
            <ProgressBar value={progress} label="Progres keseluruhan" className="mt-2" />
          </div>
          <div className="card p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Tahap sekarang</p>
            <p className="mt-1 font-heading text-xl font-bold leading-tight">{current.def.nama}</p>
            <p className="mt-1 text-xs text-slate-500">
              Tahap {phaseIndex + 1} dari {plan.phases.length}
            </p>
          </div>
          <div className="card p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Estimasi selesai</p>
            <p className="mt-1 font-heading text-xl font-bold">{formatMonthID(plan.saranLulus)}</p>
            <p className="mt-1 text-xs text-slate-500">Dengan tempo normal dari hari ini</p>
          </div>
        </div>

        <Notice tone={km.tone === 'good' ? 'good' : km.tone === 'warn' ? 'warn' : 'info'} title={km.title} className="mb-6">
          {km.body} {plan.rekomendasiJalur !== profile.jalur && plan.kelayakan !== 'tanpa-target' && (
            <button className="font-semibold underline" onClick={() => appStore.updateProfile({ jalur: plan.rekomendasiJalur })}>
              Ganti ke {jalurInfo[plan.rekomendasiJalur].nama}
            </button>
          )}
        </Notice>

        <div className="mb-5">
          <Segmented<View>
            ariaLabel="Tampilan roadmap"
            value={view}
            onChange={setView}
            scrollable
            options={[
              { value: 'timeline', label: 'Timeline' },
              { value: 'semester', label: 'Peta semester' },
              { value: 'jalur', label: 'Jalur' }
            ]}
          />
        </div>

        {view === 'timeline' && (
          <>
            <ol className="relative space-y-4 before:absolute before:bottom-6 before:left-[13px] before:top-6 before:w-0.5 before:bg-slate-200 sm:before:left-[15px] dark:before:bg-slate-800">
              {plan.phases.map((p) => (
                <PhaseCard key={p.def.id} p={p} defaultOpen={p.index === phaseIndex} />
              ))}
            </ol>
            <div className="mt-6">
              <CampusNote>Urutan, nama dokumen, dan syarat sidang berbeda tiap kampus. Pakai roadmap ini sebagai kerangka, lalu sesuaikan dengan kalender akademik dan buku pedoman fakultasmu.</CampusNote>
            </div>
          </>
        )}

        {view === 'semester' && (
          <div className="grid gap-4 lg:grid-cols-3">
            {semesterGroups.map((g) => (
              <section key={g.id} className="card p-5">
                <h2 className="font-heading text-lg font-bold">{g.nama}</h2>
                <p className="mb-4 mt-1 text-sm text-slate-600 dark:text-slate-300">{g.ringkas}</p>
                <ul className="space-y-2.5">
                  {g.fase.map((id) => {
                    const p = plan.phases.find((x) => x.def.id === id)!;
                    const prog = phaseProgress(p, appStore.getState().roadmapChecks);
                    const done = p.state === 'selesai' || prog.fraction === 1;
                    return (
                      <li key={id} className="flex items-start gap-2.5">
                        {done ? <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" /> : <Circle aria-hidden="true" className={cn('mt-0.5 h-4 w-4 shrink-0', p.state === 'berjalan' ? 'text-indigo-600' : 'text-slate-300')} />}
                        <div>
                          <p className="text-sm font-semibold">{p.def.nama}</p>
                          <p className="text-xs text-slate-500">
                            {p.state === 'selesai' ? 'Sudah dilewati' : p.state === 'berjalan' ? 'Sedang berjalan' : 'Akan datang'} · {prog.done}/{prog.total}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}
          </div>
        )}

        {view === 'jalur' && (
          <div className="grid gap-4 lg:grid-cols-3">
            {(['normal', 'kejar', 'molor'] as Jalur[]).map((j) => {
              const info = jalurInfo[j];
              const active = profile.jalur === j;
              return (
                <section key={j} className={cn('card flex flex-col p-5', active && 'border-indigo-400 ring-2 ring-indigo-500/15 dark:border-indigo-700')}>
                  <div className="mb-1 flex items-center justify-between gap-2">
                    <h2 className="font-heading text-lg font-bold">{info.nama}</h2>
                    {active && <Tag tone="accent">Dipakai</Tag>}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{info.ringkas}</p>
                  <h3 className="mb-1 mt-4 text-xs font-bold uppercase tracking-wider text-slate-500">Cocok jika</h3>
                  <ul className="list-disc space-y-1 pl-5 text-sm">
                    {info.cocokUntuk.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                  <h3 className="mb-1 mt-4 flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300">
                    <AlertTriangle aria-hidden="true" className="h-3.5 w-3.5" /> Risiko
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-sm">
                    {info.risiko.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                  <h3 className="mb-1 mt-4 text-xs font-bold uppercase tracking-wider text-slate-500">Strategi</h3>
                  <ul className="list-disc space-y-1 pl-5 text-sm">
                    {info.strategi.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                  {!active && (
                    <button className="btn-soft mt-5" onClick={() => appStore.updateProfile({ jalur: j })}>
                      Pakai jalur ini
                    </button>
                  )}
                </section>
              );
            })}
          </div>
        )}
      </div>
      <PrintView />
    </Page>
  );
}
