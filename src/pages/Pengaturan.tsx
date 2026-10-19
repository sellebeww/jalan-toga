import React, { useRef, useState } from 'react';
import { Bell, Download, Settings, Trash2, Upload, Wifi, WifiOff } from 'lucide-react';
import { appStore, useAppStore } from '../lib/store';
import { usePlan } from '../lib/usePlan';
import { majorById } from '../data/majors';
import { jalurInfo, statusById } from '../data/roadmap';
import { formatMonthID } from '../lib/date';
import type { ThemePref } from '../lib/theme';
import { notificationsSupported, requestReminderPermission } from '../lib/reminders';
import { promptInstall, useInstallState } from '../lib/pwa';
import { Link } from '../app/router';
import { Notice, Page, PageHeader, Section, Segmented, downloadText } from '../components/common/ui';
import { confirmAction } from '../components/common/Confirm';
import { toast } from '../lib/toast';

const APP_VERSION = '2.0.0';

export default function Pengaturan() {
  const s = useAppStore();
  const { profile } = usePlan();
  const install = useInstallState();
  const fileRef = useRef<HTMLInputElement>(null);
  const [online, setOnline] = useState(typeof navigator !== 'undefined' ? navigator.onLine : true);

  React.useEffect(() => {
    const on = () => setOnline(true);
    const off = () => setOnline(false);
    window.addEventListener('online', on);
    window.addEventListener('offline', off);
    return () => {
      window.removeEventListener('online', on);
      window.removeEventListener('offline', off);
    };
  }, []);

  const exportData = () => {
    const stamp = new Date().toISOString().slice(0, 10);
    downloadText(`cadangan-jalan-toga-${stamp}.json`, JSON.stringify(appStore.exportData(), null, 2), 'application/json');
    toast('Cadangan diunduh', { body: 'Simpan file ini di tempat aman (Google Drive, flashdisk).', tone: 'success' });
  };

  const importData = async (file: File | undefined) => {
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      toast('File terlalu besar', { body: 'Cadangan seharusnya jauh di bawah 10 MB.', tone: 'warn' });
      return;
    }
    const ok = await confirmAction({ title: 'Impor cadangan ini?', body: 'Seluruh data saat ini akan diganti dengan isi file. Disarankan mengekspor data sekarang terlebih dahulu.', confirmLabel: 'Ya, impor' });
    if (!ok) return;
    try {
      appStore.importData(await file.text());
      toast('Data berhasil diimpor', { tone: 'success' });
    } catch (e) {
      toast('Impor gagal', { body: e instanceof Error ? e.message : 'File tidak dapat dibaca.', tone: 'warn' });
    } finally {
      if (fileRef.current) fileRef.current.value = '';
    }
  };

  const reset = async () => {
    const ok = await confirmAction({ title: 'Hapus semua data?', body: 'Profil, roadmap, catatan bimbingan, referensi, dan semua progres akan dihapus dari perangkat ini dan tidak bisa dikembalikan, kecuali kamu punya cadangan.', confirmLabel: 'Hapus semua', danger: true });
    if (ok) {
      appStore.clearAllData();
      toast('Semua data dihapus', { tone: 'info' });
    }
  };

  const toggleReminders = async () => {
    if (s.remindersOn) return appStore.patch({ remindersOn: false });
    const r = await requestReminderPermission();
    if (r === 'granted') {
      appStore.patch({ remindersOn: true });
      toast('Pengingat aktif', { tone: 'success' });
    } else {
      toast('Notifikasi tidak aktif', { body: r === 'unsupported' ? 'Browser ini tidak mendukung notifikasi.' : 'Izin ditolak. Ubah di pengaturan situs browser.', tone: 'warn' });
    }
  };

  const count = [s.references.length, s.guidance.length, s.tasks.length, s.savedTopics.length, Object.keys(s.roadmapChecks).length].reduce((a, b) => a + b, 0);

  return (
    <Page>
      <PageHeader eyebrow="Diri sendiri" title="Pengaturan & data" subtitle="Tema, profil, pengingat, serta cadangan data. Semua tersimpan di perangkat ini." icon={<Settings aria-hidden="true" className="h-5 w-5" />} />

      <div className="space-y-6">
        <section className="card p-5">
          <h2 className="mb-3 font-heading text-lg font-bold">Tampilan</h2>
          <p className="mb-2 text-sm text-slate-600 dark:text-slate-300">Tema mengikuti pengaturan perangkatmu secara default.</p>
          <Segmented<ThemePref>
            ariaLabel="Tema"
            value={s.themePref}
            onChange={(v) => appStore.setTheme(v)}
            options={[
              { value: 'system', label: 'Ikuti sistem' },
              { value: 'light', label: 'Terang' },
              { value: 'dark', label: 'Gelap' }
            ]}
          />
        </section>

        <section className="card p-5">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <h2 className="font-heading text-lg font-bold">Profil skripsi</h2>
            <Link to="/mulai" className="btn-soft min-h-10 text-sm">
              {profile ? 'Ubah profil' : 'Buat profil'}
            </Link>
          </div>
          {profile ? (
            <dl className="grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
              {[
                ['Nama', profile.nama || '—'],
                ['NIM', profile.nim || '—'],
                ['Jurusan', majorById(profile.jurusanId)?.nama ?? '—'],
                ['Semester', String(profile.semester)],
                ['Status', statusById(profile.status).label],
                ['Target lulus', profile.targetLulus ? formatMonthID(profile.targetLulus) : '—'],
                ['Jalur', jalurInfo[profile.jalur].nama],
                ['Judul', profile.judul || '—'],
                ['Dosen pembimbing', profile.dosen || '—']
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 border-b border-slate-100 py-1.5 dark:border-slate-800">
                  <dt className="text-slate-500">{k}</dt>
                  <dd className="text-right font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          ) : (
            <p className="text-sm text-slate-500">Belum ada profil. Buat profil untuk mendapat roadmap personal.</p>
          )}
        </section>

        <section className="card p-5">
          <h2 className="mb-1 font-heading text-lg font-bold">Cadangan data</h2>
          <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">
            Data ({count} entri utama) hanya tersimpan di browser ini. Jika kamu menghapus data situs atau ganti perangkat, data hilang. Ekspor berkala dan impor di perangkat lain.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="btn-primary" onClick={exportData}>
              <Download aria-hidden="true" className="h-4 w-4" /> Ekspor JSON
            </button>
            <button className="btn-soft" onClick={() => fileRef.current?.click()}>
              <Upload aria-hidden="true" className="h-4 w-4" /> Impor JSON
            </button>
            <input ref={fileRef} type="file" accept="application/json,.json" className="sr-only" aria-label="Pilih file cadangan JSON" onChange={(e) => importData(e.target.files?.[0])} />
          </div>
        </section>

        <section className="card p-5">
          <h2 className="mb-3 font-heading text-lg font-bold">Pengingat & aplikasi</h2>
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-semibold">Notifikasi deadline</p>
                <p className="text-sm text-slate-500">Muncul saat aplikasi terbuka, untuk deadline 2 hari ke depan.</p>
              </div>
              <button className="btn-soft" onClick={toggleReminders} disabled={!notificationsSupported()}>
                <Bell aria-hidden="true" className="h-4 w-4" /> {s.remindersOn ? 'Matikan' : notificationsSupported() ? 'Aktifkan' : 'Tidak didukung'}
              </button>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-semibold">Pasang sebagai aplikasi</p>
                <p className="text-sm text-slate-500">
                  {install === 'installed' ? 'Sudah terpasang.' : install === 'ready' ? 'Bisa dibuka dari layar utama dan bekerja offline.' : 'Di iPhone: Bagikan → Tambah ke Layar Utama. Di Android/desktop: menu browser → Pasang aplikasi.'}
                </p>
              </div>
              {install === 'ready' && (
                <button className="btn-primary" onClick={() => promptInstall()}>
                  Pasang
                </button>
              )}
            </div>
            <div className="flex items-center gap-2 text-sm">
              {online ? <Wifi aria-hidden="true" className="h-4 w-4 text-emerald-600" /> : <WifiOff aria-hidden="true" className="h-4 w-4 text-amber-600" />}
              {online ? 'Online' : 'Offline: konten inti tetap bisa dibuka.'}
            </div>
          </div>
        </section>

        <Section title="Zona berbahaya" className="mb-0">
          <div className="card border-rose-200 p-5 dark:border-rose-900">
            <p className="mb-3 text-sm text-slate-600 dark:text-slate-300">Menghapus semua data tidak bisa dibatalkan. Ekspor cadangan dulu bila perlu.</p>
            <button className="btn bg-rose-600 text-white hover:bg-rose-700" onClick={reset}>
              <Trash2 aria-hidden="true" className="h-4 w-4" /> Hapus semua data
            </button>
          </div>
        </Section>

        <Notice tone="info" title="Tentang">
          Jalan Toga v{APP_VERSION}. Konten bersifat panduan umum; selalu cocokkan format, syarat, dan jadwal dengan buku pedoman kampus dan arahan dosen pembimbingmu. Pintasan: <kbd className="rounded border px-1">Ctrl</kbd> + <kbd className="rounded border px-1">K</kbd> untuk mencari.
        </Notice>
      </div>
    </Page>
  );
}
