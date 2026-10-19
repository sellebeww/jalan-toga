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

  const canNext =
    (step === 0 && true) ||
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
    navigate('/roadmap');
  };

  return (
    <Page>
      <PageHeader
        eyebrow={editing ? 'Ubah profil' : 'Selamat datang'}
        title={editing ? 'Perbarui profil skripsimu' : 'Kenalan dulu, yuk'}
        subtitle="Jawab beberapa pertanyaan singkat. Roadmap, contoh topik, dan rekomendasi akan menyesuaikan dengan jurusan dan posisimu sekarang. Semua data tersimpan di perangkatmu."
        icon={<Rocket aria-hidden="true" className="h-5 w-5" />}
      />

      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-300">
          <span>
            Langkah {step + 1} dari {STEPS.length}: {STEPS[step]}
          </span>
        </div>
        <ProgressBar value={((step + 1) / STEPS.length) * 100} label="Langkah onboarding" />
      </div>

      <div className="card p-5 sm:p-7">
        {step === 0 && (
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Nama panggilan (opsional)" hint="Dipakai untuk menyapa dan mengisi template pesan.">
              {(id) => <input id={id} className="field" value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Contoh: Rani" autoComplete="given-name" maxLength={60} />}
            </Field>
            <Field label="NIM (opsional)" hint="Hanya tersimpan di perangkatmu; dipakai mengisi template surat.">
              {(id) => <input id={id} className="field" value={nim} onChange={(e) => setNim(e.target.value)} placeholder="Contoh: 2110123456" inputMode="numeric" maxLength={30} />}
            </Field>
            <div className="sm:col-span-2">
              <Notice tone="tip" title="Tanpa login, tanpa akun">
                Datamu tidak dikirim ke server mana pun. Kamu bisa mengekspor dan mengimpor cadangan kapan saja lewat Pengaturan.
              </Notice>
            </div>
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
                        {selected && <Check aria-hidden="true" className="absolute right-3 top-3 h-5 w-5 text-indigo-700 dark:text-indigo-300" />}
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
                      {selected && <Check className="h-3 w-3 text-white dark:text-slate-950" />}
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

      <div className="sticky bottom-16 z-10 mt-5 flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white/95 p-3 backdrop-blur lg:bottom-4 dark:border-slate-800 dark:bg-slate-900/95">
        <button type="button" className="btn-soft" onClick={() => (step === 0 ? navigate(editing ? '/pengaturan' : '/') : setStep(step - 1))}>
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          {step === 0 ? 'Batal' : 'Kembali'}
        </button>
        {step < STEPS.length - 1 ? (
          <button type="button" className="btn-primary" disabled={!canNext} onClick={() => setStep(step + 1)}>
            Lanjut <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </button>
        ) : (
          <button type="button" className="btn-primary" onClick={finish} disabled={!draft}>
            {editing ? 'Simpan perubahan' : 'Buat roadmap-ku'} <Check aria-hidden="true" className="h-4 w-4" />
          </button>
        )}
      </div>
    </Page>
  );
}
