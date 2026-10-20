import { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Rocket, Search } from 'lucide-react';
import { majors, rumpunList } from '../data/majors';
import { jalurInfo, statusOptions } from '../data/roadmap';
import { buildPlan } from '../lib/roadmap';
import { addMonths, formatDateID, formatMonthID, monthKey } from '../lib/date';
import { appStore, useAppStore } from '../lib/store';
import type { Jalur, Profile, StatusId } from '../types/skripsi';
import { Field, Notice, Page, PageHeader, ProgressBar, Tag } from '../components/common/ui';
import { cn } from '../components/common/cn';
import { navigate } from '../app/router';
import { toast } from '../lib/toast';
import { BrandLogoFull } from '../components/shell/Brand';

const STEPS = ['Kenalan', 'Jurusan', 'Semester', 'Status', 'Target', 'Ringkasan'];

const monthOptions = (() => {
  const start = monthKey();
  return Array.from({ length: 37 }, (_, i) => addMonths(start, i));
})();

const kelayakanLabel = {
  lega: { text: 'Waktunya lega', tone: 'good' as const },
  aman: { text: 'Waktunya cukup', tone: 'good' as const },
  ketat: { text: 'Waktunya ketat', tone: 'warn' as const },
  'sangat-ketat': { text: 'Waktunya sangat ketat', tone: 'bad' as const },
  'tanpa-target': { text: 'Tanpa target', tone: 'neutral' as const }
};

export default function Mulai() {
  const { profile } = useAppStore();
  const editing = !!profile;

  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const go = (n: number) => {
    setDir(n > step ? 1 : -1);
    setStep(n);
    // Daftar jurusan panjang: tanpa ini langkah berikutnya terbuka di posisi gulir lama.
    window.scrollTo({ top: 0 });
  };
  const [nama, setNama] = useState(profile?.nama ?? '');
  const [nim, setNim] = useState(profile?.nim ?? '');
  const [jurusanId, setJurusanId] = useState(profile?.jurusanId ?? '');
  const [query, setQuery] = useState('');
  const [semester, setSemester] = useState(profile?.semester ?? 0);
  const [status, setStatus] = useState<StatusId | ''>(profile?.status ?? '');
  const [target, setTarget] = useState(profile?.targetLulus ?? '');
  const [jalur, setJalur] = useState<Jalur | ''>(profile?.jalur ?? '');
  const [judul, setJudul] = useState(profile?.judul ?? '');
  const [dosen, setDosen] = useState(profile?.dosen ?? '');

  const filteredMajors = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return majors;
    return majors.filter((m) => `${m.nama} ${m.contoh.join(' ')} ${m.rumpun}`.toLowerCase().includes(q));
  }, [query]);

  const draft: Profile | null =
    jurusanId && semester && status
      ? {
          nama,
          nim,
          jurusanId,
          semester,
          status,
          targetLulus: target,
          jalur: (jalur || 'normal') as Jalur,
          judul,
          dosen,
          pendekatanId: profile?.pendekatanId ?? '',
          createdAt: profile?.createdAt ?? Date.now()
        }
      : null;

  const plan = useMemo(() => (draft ? buildPlan(draft) : null), [draft?.jurusanId, draft?.semester, draft?.status, draft?.targetLulus, draft?.jalur]); // eslint-disable-line react-hooks/exhaustive-deps

  const importBackup = async (file: File | undefined) => {
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      toast('File terlalu besar', { body: 'Cadangan seharusnya jauh di bawah 10 MB.', tone: 'warn' });
      return;
    }
    try {
      appStore.importData(await file.text());
      // Cadangan tanpa profil membuat layar ini tetap tampil; beri tahu alasannya.
      toast(appStore.getState().profile ? 'Data berhasil diimpor' : 'Cadangan diimpor, tapi belum ada profil', { tone: appStore.getState().profile ? 'success' : 'warn' });
    } catch (e) {
      toast('Impor gagal', { body: e instanceof Error ? e.message : 'File tidak dapat dibaca.', tone: 'warn' });
    }
  };

  const canNext =
    (step === 0 && nama.trim().length > 0) ||
    (step === 1 && !!jurusanId) ||
    (step === 2 && semester > 0) ||
    (step === 3 && !!status) ||
    step === 4 ||
    step === 5;

  const finish = () => {
    if (!draft) return;
    const final: Profile = { ...draft, jalur: (jalur || plan?.rekomendasiJalur || 'normal') as Jalur };
    appStore.saveProfile(final);
    toast(editing ? 'Profil diperbarui' : 'Roadmap-mu sudah siap', {
      body: editing ? 'Rencana disesuaikan dengan data terbaru.' : 'Mulai dari langkah pertama di halaman Roadmap.',
      tone: 'success'
    });
    navigate(editing ? '/roadmap' : '/');
  };

  return (
    <Page>
      {editing ? (
        <PageHeader
          eyebrow="Ubah profil"
          title="Perbarui profil skripsimu"
          subtitle="Roadmap, contoh topik, dan rekomendasi akan menyesuaikan dengan data terbaru."
          icon={<Rocket aria-hidden="true" className="h-5 w-5" />}
        />
      ) : (
        // Layar pertama aplikasi: judul besar + satu kalimat, tanpa label kecil di atasnya.
        <header className="mb-8 pt-4 sm:pt-8">
          <BrandLogoFull className="mb-6 w-44" />
          <h1 className="text-4xl font-bold leading-[1.05] text-slate-900 sm:text-5xl dark:text-slate-50">Kenalan dulu, yuk.</h1>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-800 sm:text-lg dark:text-slate-100">
            Empat pertanyaan wajib, lalu roadmap skripsimu langsung jadi. Bisa diubah kapan saja.
          </p>
        </header>
      )}

      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-300">
          <span>
            Langkah {step + 1} dari {STEPS.length}: {STEPS[step]}
          </span>
          {step <= 3 ? <Tag tone="warn">Wajib diisi</Tag> : step === 4 ? <Tag tone="neutral">Opsional</Tag> : null}
        </div>
        <ProgressBar value={((step + 1) / STEPS.length) * 100} label="Langkah onboarding" />
      </div>

      <div className="card overflow-hidden p-5 sm:p-7">
        {/* key memaksa remount agar animasi pindah langkah diputar ulang */}
        <div key={step} className={dir > 0 ? 'step-next' : 'step-prev'}>
          {step === 0 && (
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nama panggilan *" hint="Wajib. Dipakai untuk menyapa dan mengisi template pesan.">
                {(id) => <input id={id} className="field" value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Contoh: Rani" autoComplete="given-name" maxLength={60} required aria-required="true" autoFocus={!editing} />}
              </Field>
              <Field label="NIM (opsional)" hint="Hanya tersimpan di perangkatmu; dipakai mengisi template surat.">
                {(id) => <input id={id} className="field" value={nim} onChange={(e) => setNim(e.target.value)} placeholder="Contoh: 2110123456" inputMode="numeric" maxLength={30} />}
              </Field>
              <div className="sm:col-span-2">
                <Notice tone="tip" title="Tanpa login, tanpa akun">
                  Datamu tidak dikirim ke server mana pun. Kamu bisa mengekspor dan mengimpor cadangan kapan saja lewat Pengaturan.
                </Notice>
              </div>
              {!editing && (
                <p className="text-sm text-slate-600 sm:col-span-2 dark:text-slate-300">
                  Sudah pernah pakai di perangkat lain?{' '}
                  <label className="cursor-pointer font-semibold text-indigo-700 underline-offset-2 hover:underline focus-within:underline dark:text-indigo-300">
                    Impor file cadangan
                    <input type="file" accept="application/json,.json" className="sr-only" onChange={(e) => importBackup(e.target.files?.[0])} />
                  </label>
                </p>
              )}
            </div>
          )}

          {step === 1 && (
            <div>
              <h2 className="text-lg font-bold">Kamu dari rumpun jurusan mana?</h2>
              <p className="mb-4 mt-1 text-sm text-slate-600 dark:text-slate-300">Pilih yang paling mendekati. Ini menentukan metode yang umum, alat, dan contoh topik.</p>
              <div className="relative mb-4">
                <Search aria-hidden="true" className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  className="field pl-10"
                  placeholder="Cari jurusan, mis. Keperawatan, Manajemen, DKV..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  aria-label="Cari jurusan"
                />
              </div>
              {filteredMajors.length === 0 && <p className="py-6 text-center text-sm text-slate-500">Tidak ada yang cocok. Pilih rumpun terdekat, misalnya "Sosial, Politik & Administrasi".</p>}
              <div role="radiogroup" aria-label="Rumpun jurusan" className="grid gap-3 sm:grid-cols-2">
                {rumpunList.flatMap((r) => {
                  const list = filteredMajors.filter((m) => m.rumpun === r);
                  if (list.length === 0) return [];
                  return [
                    <p key={`h-${r}`} className="col-span-full mt-2 text-xs font-bold uppercase tracking-wider text-slate-500 first:mt-0">
                      {r}
                    </p>,
                    ...list.map((m) => {
                      const selected = m.id === jurusanId;
                      return (
                        <button
                          key={m.id}
                          type="button"
                          role="radio"
                          aria-checked={selected}
                          onClick={() => setJurusanId(m.id)}
                          className={cn(
                            'relative rounded-2xl border p-4 text-left transition',
                            selected
                              ? 'border-indigo-600 bg-indigo-50 ring-2 ring-indigo-600/20 dark:border-indigo-400 dark:bg-indigo-950/40'
                              : 'border-slate-200 bg-white hover:border-indigo-300 dark:border-slate-800 dark:bg-slate-900/50'
                          )}
                        >
                          {selected && <Check aria-hidden="true" className="check-pop absolute right-3 top-3 h-5 w-5 text-indigo-700 dark:text-indigo-300" />}
                          <span className="block pr-6 font-semibold text-slate-900 dark:text-slate-50">{m.nama}</span>
                          <span className="mt-1 block text-xs text-slate-500 dark:text-slate-400">{m.contoh.slice(0, 4).join(' · ')}</span>
                        </button>
                      );
                    })
                  ];
                })}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-lg font-bold">Sekarang kamu semester berapa?</h2>
              <p className="mb-4 mt-1 text-sm text-slate-600 dark:text-slate-300">Dipakai untuk menentukan apakah kamu sedang persiapan, proposal, penelitian, atau sudah molor.</p>
              <div role="radiogroup" aria-label="Semester" className="grid grid-cols-4 gap-2 sm:grid-cols-7">
                {Array.from({ length: 14 }, (_, i) => i + 1).map((s) => (
                  <button
                    key={s}
                    type="button"
                    role="radio"
                    aria-checked={semester === s}
                    onClick={() => setSemester(s)}
                    className={cn(
                      'min-h-12 rounded-xl border text-base font-bold transition',
                      semester === s
                        ? 'border-indigo-600 bg-indigo-600 text-white dark:border-indigo-400 dark:bg-indigo-500 dark:text-slate-950'
                        : 'border-slate-200 bg-white hover:border-indigo-300 dark:border-slate-700 dark:bg-slate-900'
                    )}
                  >
                    {s}
                    {s === 14 ? '+' : ''}
                  </button>
                ))}
              </div>
              {semester >= 9 && (
                <div className="mt-4">
                  <Notice tone="info" title="Tidak apa-apa kalau sudah lewat semester 8">
                    Banyak orang menyelesaikan skripsi di semester 9–10 karena kerja, ganti topik, atau alasan lain. Kami siapkan jalur pemulihan untukmu.
                  </Notice>
                </div>
              )}
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-lg font-bold">Posisi skripsimu sekarang?</h2>
              <p className="mb-4 mt-1 text-sm text-slate-600 dark:text-slate-300">Pilih yang paling jujur. Roadmap akan dimulai dari tahap ini.</p>
              <div role="radiogroup" aria-label="Status skripsi" className="grid gap-2.5">
                {statusOptions.map((s) => {
                  const selected = s.id === status;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      onClick={() => setStatus(s.id)}
                      className={cn(
                        'flex items-start gap-3 rounded-2xl border p-4 text-left transition',
                        selected
                          ? 'border-indigo-600 bg-indigo-50 ring-2 ring-indigo-600/20 dark:border-indigo-400 dark:bg-indigo-950/40'
                          : 'border-slate-200 bg-white hover:border-indigo-300 dark:border-slate-800 dark:bg-slate-900/50'
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2',
                          selected ? 'border-indigo-600 bg-indigo-600 dark:border-indigo-400 dark:bg-indigo-400' : 'border-slate-300 dark:border-slate-600'
                        )}
                      >
                        {selected && <Check className="check-pop h-3 w-3 text-white dark:text-slate-950" />}
                      </span>
                      <span>
                        <span className="block font-semibold text-slate-900 dark:text-slate-50">{s.label}</span>
                        <span className="mt-0.5 block text-sm text-slate-600 dark:text-slate-300">{s.desc}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-lg font-bold">Kapan target lulusmu?</h2>
              <p className="mb-4 mt-1 text-sm text-slate-600 dark:text-slate-300">Dipakai untuk membagi waktu per tahap dan menilai apakah targetnya realistis. Boleh dikosongkan.</p>
              <Field label="Bulan target lulus / wisuda">
                {(id) => (
                  <select id={id} className="field max-w-sm" value={target} onChange={(e) => setTarget(e.target.value)}>
                    <option value="">Belum tahu / tidak ada target</option>
                    {monthOptions.map((m) => (
                      <option key={m} value={m}>
                        {formatMonthID(m)}
                      </option>
                    ))}
                  </select>
                )}
              </Field>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <Field label="Judul skripsi (opsional)" hint="Boleh judul sementara. Bisa diubah kapan saja.">
                  {(id) => <input id={id} className="field" value={judul} onChange={(e) => setJudul(e.target.value)} maxLength={300} placeholder="Judul sementara" />}
                </Field>
                <Field label="Dosen pembimbing (opsional)">
                  {(id) => <input id={id} className="field" value={dosen} onChange={(e) => setDosen(e.target.value)} maxLength={120} placeholder="Nama dosen, mis. Dr. Budi Santoso" />}
                </Field>
              </div>
            </div>
          )}

          {step === 5 && draft && plan && (
            <div>
              <h2 className="text-lg font-bold">Ringkasan roadmap-mu</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/50">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Tahap sekarang</p>
                  <p className="mt-1 font-heading text-lg font-bold">{plan.phases[plan.currentIndex].def.nama}</p>
                  <p className="text-xs text-slate-500">
                    Tahap {plan.currentIndex + 1} dari {plan.phases.length}
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/50">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Waktu tersisa ke target</p>
                  <p className="mt-1 font-heading text-lg font-bold">{plan.mingguTersedia ? `${Math.round(plan.mingguTersedia)} minggu` : 'Belum diatur'}</p>
                  <p className="text-xs text-slate-500">Butuh sekitar {plan.mingguDibutuhkanNormal} minggu (tempo normal)</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/50">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Penilaian</p>
                  <p className="mt-1">
                    <Tag tone={kelayakanLabel[plan.kelayakan].tone}>{kelayakanLabel[plan.kelayakan].text}</Tag>
                  </p>
                  <p className="mt-1 text-xs text-slate-500">Selesai realistis: {formatMonthID(plan.saranLulus)}</p>
                </div>
              </div>

              <h3 className="mb-2 mt-6 text-sm font-bold">Pilih jalurmu</h3>
              <div role="radiogroup" aria-label="Jalur" className="grid gap-2.5 sm:grid-cols-3">
                {(['normal', 'kejar', 'molor'] as Jalur[]).map((j) => {
                  const info = jalurInfo[j];
                  const selected = (jalur || plan.rekomendasiJalur) === j;
                  return (
                    <button
                      key={j}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      onClick={() => setJalur(j)}
                      className={cn(
                        'rounded-2xl border p-4 text-left transition',
                        selected ? 'border-indigo-600 bg-indigo-50 ring-2 ring-indigo-600/20 dark:border-indigo-400 dark:bg-indigo-950/40' : 'border-slate-200 bg-white hover:border-indigo-300 dark:border-slate-800 dark:bg-slate-900/50'
                      )}
                    >
                      <span className="flex items-center justify-between gap-2">
                        <span className="font-semibold">{info.nama}</span>
                        {plan.rekomendasiJalur === j && plan.kelayakan !== 'tanpa-target' && <Tag tone="accent">Disarankan</Tag>}
                      </span>
                      <span className="mt-1 block text-xs text-slate-600 dark:text-slate-300">{info.ringkas}</span>
                    </button>
                  );
                })}
              </div>

              {plan.kelayakan === 'sangat-ketat' && (
                <div className="mt-4">
                  <Notice tone="warn" title="Targetmu sangat ketat">
                    Dengan tempo normal, perkiraan realistis selesai sekitar {formatMonthID(plan.saranLulus)}. Kamu bisa tetap memakai targetmu lewat jalur kejar, atau menggeser target agar lebih sehat.
                  </Notice>
                </div>
              )}
              {plan.phases[plan.currentIndex].items.length > 0 && (
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                  Langkah pertamamu: <strong>{plan.phases[plan.currentIndex].items[0].text}</strong>. Jadwal tahap berjalan: {formatDateID(plan.phases[plan.currentIndex].mulai)} – {formatDateID(plan.phases[plan.currentIndex].selesai)}.
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      <div
        className={cn(
          'sticky z-10 mt-5 flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white/95 p-3 backdrop-blur dark:border-slate-800 dark:bg-slate-900/95',
          // Saat onboarding pertama tidak ada BottomNav, jadi bar menempel ke bawah layar.
          editing ? 'bottom-16 lg:bottom-4' : 'bottom-4'
        )}
      >
        {step === 0 && !editing ? (
          <span />
        ) : (
          <button type="button" className="btn-soft" onClick={() => (step === 0 ? navigate('/pengaturan') : go(step - 1))}>
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            {step === 0 ? 'Batal' : 'Kembali'}
          </button>
        )}
        {step < STEPS.length - 1 ? (
          <div className="flex items-center gap-3">
            {!canNext && <span className="hidden text-xs text-slate-500 sm:inline dark:text-slate-400">Isi bagian wajib dulu</span>}
            <button type="button" className="btn-primary" disabled={!canNext} onClick={() => go(step + 1)}>
              Lanjut <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <button type="button" className="btn-primary" onClick={finish} disabled={!draft}>
            {editing ? 'Simpan perubahan' : 'Buat roadmap-ku'} <Check aria-hidden="true" className="h-4 w-4" />
          </button>
        )}
      </div>
    </Page>
  );
}
