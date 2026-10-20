import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Cloud, Eye, EyeOff, Loader2, Mail, Smartphone, Sparkles } from 'lucide-react';
import { continueAsGuest, sendMagicLink, signInWithGoogle, signInWithPassword, signUp } from '../lib/auth';
import { Field, Segmented } from '../components/common/ui';
import { BrandLogoFull } from '../components/shell/Brand';
import { Mascot } from '../components/shell/Mascot';

const GoogleIcon: React.FC = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true" className="h-5 w-5">
    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.3-.4-3.5z" />
    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.2-.1-2.3-.4-3.5z" />
  </svg>
);

const perks = [
  { icon: Cloud, text: 'Progres tersimpan aman di akunmu' },
  { icon: Smartphone, text: 'Lanjutkan dari HP atau laptop' },
  { icon: Sparkles, text: 'Roadmap, tracker, dan alat riset dalam satu tempat' }
];

type Mode = 'masuk' | 'daftar';

export default function Masuk() {
  const [mode, setMode] = useState<Mode>('masuk');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [busy, setBusy] = useState<'google' | 'form' | 'link' | null>(null);
  const [error, setError] = useState('');
  const [sent, setSent] = useState('');

  const act = async (kind: NonNullable<typeof busy>, fn: () => Promise<string | void>) => {
    setBusy(kind);
    setError('');
    setSent('');
    try {
      const msg = await fn();
      if (msg) setSent(msg);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(null);
    }
  };

  const validEmail = /^\S+@\S+\.\S+$/.test(email.trim());

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validEmail) return setError('Tulis alamat email yang valid dulu.');
    if (password.length < 6) return setError('Password minimal 6 karakter.');
    void act('form', async () => {
      if (mode === 'masuk') return signInWithPassword(email.trim(), password);
      const needConfirm = await signUp(email.trim(), password);
      if (needConfirm) return `Akun dibuat. Buka link konfirmasi yang kami kirim ke ${email.trim()}, lalu kamu otomatis masuk.`;
    });
  };

  const onMagicLink = () => {
    if (!validEmail) return setError('Tulis alamat emailmu dulu, lalu klik lagi.');
    void act('link', async () => {
      await sendMagicLink(email.trim());
      return `Link masuk sudah dikirim ke ${email.trim()}. Buka dari perangkat ini.`;
    });
  };

  return (
    <div className="grid min-h-dvh lg:grid-cols-[1.05fr_1fr]">
      {/* Panel ilustrasi (desktop) */}
      <aside className="relative hidden overflow-hidden bg-slate-900 lg:flex lg:flex-col lg:justify-between lg:p-12 dark:bg-slate-900">
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-indigo-500/25 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-amber-400/15 blur-3xl" />
        <img src={`${import.meta.env.BASE_URL}logo-dark.webp`} alt="Jalan Toga" width={864} height={447} className="relative w-44" />
        <div className="relative">
          <Mascot className="mascot-bob h-64 w-64" />
          <h2 className="mt-6 max-w-md text-4xl font-bold leading-tight text-slate-50">Skripsi terasa lebih ringan kalau jalannya jelas.</h2>
          <ul className="mt-6 space-y-3">
            {perks.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-slate-300">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300">
                  <Icon aria-hidden="true" className="h-[18px] w-[18px]" />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>
        <p className="relative text-xs text-slate-400">Dari bingung, sampai wisuda.</p>
      </aside>

      {/* Form */}
      <main id="main" className="relative flex items-center justify-center overflow-hidden px-4 py-10 sm:px-8">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-400/15 blur-3xl lg:hidden" />
        <div className="page-enter relative w-full max-w-md">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="lg:hidden">
              <BrandLogoFull className="w-36" />
            </div>
            <Mascot className="mascot-bob mt-2 h-36 w-36 lg:hidden" />
            <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-slate-50">
              {mode === 'masuk' ? 'Selamat datang lagi!' : 'Mulai perjalananmu'}
            </h1>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              {mode === 'masuk' ? 'Masuk untuk melanjutkan roadmap skripsimu.' : 'Buat akun gratis, progresmu tersimpan di mana saja.'}
            </p>
          </div>

          <div className="card mt-6 p-5 sm:p-6">
            <button
              type="button"
              className="btn min-h-12 w-full border border-slate-200 bg-white text-slate-900 shadow-[inset_0_-3px_0_rgb(0_0_0/0.06)] hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-white"
              onClick={() => void act('google', signInWithGoogle)}
              disabled={!!busy}
            >
              {busy === 'google' ? <Loader2 aria-hidden="true" className="h-5 w-5 animate-spin" /> : <GoogleIcon />}
              Lanjut dengan Google
            </button>

            <div className="my-5 flex items-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400">
              <span className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
              atau pakai email
              <span className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
            </div>

            <Segmented<Mode>
              ariaLabel="Masuk atau daftar"
              className="mb-4 flex w-full [&>button]:flex-1 [&>button]:justify-center"
              options={[
                { value: 'masuk', label: 'Masuk' },
                { value: 'daftar', label: 'Daftar' }
              ]}
              value={mode}
              onChange={(m) => {
                setMode(m);
                setError('');
                setSent('');
              }}
            />

            <form onSubmit={onSubmit} noValidate className="space-y-4">
              <Field label="Email">
                {(id) => (
                  <input id={id} type="email" autoComplete="email" inputMode="email" className="field" placeholder="nama@kampus.ac.id" value={email} onChange={(e) => setEmail(e.target.value)} />
                )}
              </Field>
              <Field label="Password" hint={mode === 'daftar' ? 'Minimal 6 karakter.' : undefined}>
                {(id) => (
                  <div className="relative">
                    <input
                      id={id}
                      type={showPw ? 'text' : 'password'}
                      autoComplete={mode === 'masuk' ? 'current-password' : 'new-password'}
                      className="field pr-12"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPw((v) => !v)}
                      aria-label={showPw ? 'Sembunyikan password' : 'Tampilkan password'}
                      aria-pressed={showPw}
                      className="absolute inset-y-0 right-1 my-auto flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100"
                    >
                      {showPw ? <EyeOff aria-hidden="true" className="h-[18px] w-[18px]" /> : <Eye aria-hidden="true" className="h-[18px] w-[18px]" />}
                    </button>
                  </div>
                )}
              </Field>

              <div aria-live="polite">
                {error && <p className="rounded-xl bg-rose-50 px-3.5 py-2.5 text-sm font-medium text-rose-800 dark:bg-rose-950/50 dark:text-rose-200">{error}</p>}
                {sent && (
                  <p className="flex gap-2 rounded-xl bg-emerald-50 px-3.5 py-2.5 text-sm font-medium text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200">
                    <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                    {sent}
                  </p>
                )}
              </div>

              <button type="submit" className="btn-primary min-h-12 w-full" disabled={!!busy}>
                {busy === 'form' && <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />}
                {mode === 'masuk' ? 'Masuk' : 'Buat akun'}
                {busy !== 'form' && <ArrowRight aria-hidden="true" className="h-4 w-4" />}
              </button>
            </form>

            <button type="button" className="btn-ghost mt-2 w-full text-indigo-700 dark:text-indigo-300" onClick={onMagicLink} disabled={!!busy}>
              {busy === 'link' ? <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" /> : <Mail aria-hidden="true" className="h-4 w-4" />}
              Masuk lewat link email, tanpa password
            </button>
          </div>

          <div className="mt-5 text-center">
            <button type="button" className="btn-ghost text-slate-600 dark:text-slate-300" onClick={continueAsGuest} disabled={!!busy}>
              Lanjut tanpa akun
            </button>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Data hanya tersimpan di perangkat ini. Kamu bisa membuat akun kapan saja.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
