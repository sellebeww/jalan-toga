import React, { useState } from 'react';
import { Bell, BellOff, CalendarClock, ChevronLeft, ChevronRight, KanbanSquare, Plus, Trash2 } from 'lucide-react';
import { Link } from '../app/router';
import { chaptersFor } from '../data/chapters';
import { usePlan } from '../lib/usePlan';
import { appStore, useAppStore } from '../lib/store';
import { chapterProgress, statusLabels, statusTone, statusWeight } from '../lib/chapterUtil';
import { diffDays, formatDateID, relativeDaysLabel, todayKey, weekStartKey, addDays } from '../lib/date';
import { notificationsSupported, requestReminderPermission } from '../lib/reminders';
import type { BabStatus, Task, TaskStatus } from '../types/skripsi';
import { EmptyState, Notice, Page, PageHeader, ProgressBar, Ring, Section, Segmented, Tag, CheckRow } from '../components/common/ui';
import { cn } from '../components/common/cn';
import { confirmAction } from '../components/common/Confirm';
import { toast } from '../lib/toast';

type Tab = 'progres' | 'kanban' | 'mingguan' | 'deadline';

const columns: { id: TaskStatus; label: string; hint: string }[] = [
  { id: 'todo', label: 'Akan dikerjakan', hint: 'Antrean tugas' },
  { id: 'doing', label: 'Sedang dikerjakan', hint: 'Fokus pada 1–3 saja' },
  { id: 'done', label: 'Selesai', hint: 'Rayakan' }
];

function ProgressTab() {
  const state = useAppStore();
  const { profile, major, progress } = usePlan();
  const struktur = major?.struktur ?? 'bab15';
  const list = chaptersFor(struktur);
  const avg = list.length ? Math.round(list.reduce((s, c) => s + statusWeight[state.babStatus[c.id] ?? 'belum'], 0) / list.length) : 0;

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="card flex items-center gap-4 p-5">
          <Ring value={avg} size={84} stroke={9} label="Progres penulisan" />
          <div>
            <p className="font-heading text-lg font-bold">Penulisan naskah</p>
            <p className="text-sm text-slate-500">Rata-rata status {list.length} bab</p>
          </div>
        </div>
        <div className="card flex items-center gap-4 p-5">
          <Ring value={progress} size={84} stroke={9} label="Progres roadmap" />
          <div>
            <p className="font-heading text-lg font-bold">Roadmap</p>
            <p className="text-sm text-slate-500">{profile ? 'Checklist 10 tahap' : 'Atur profil dulu'}</p>
          </div>
        </div>
        <div className="card p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Tugas selesai</p>
          <p className="mt-1 font-heading text-3xl font-bold">
            {state.tasks.filter((t) => t.status === 'done').length}
            <span className="text-base font-medium text-slate-500"> / {state.tasks.length}</span>
          </p>
          <p className="mt-1 text-xs text-slate-500">Dari kanban tugasmu</p>
        </div>
      </div>

      <Section title="Progres per bab" hint="Ubah status setelah kamu menyelesaikan atau mengirim bab. Persentase mengikuti status.">
        <ul className="space-y-3">
          {list.map((ch) => {
            const status = state.babStatus[ch.id] ?? 'belum';
            const prog = chapterProgress(ch, state.babChecks);
            return (
              <li key={ch.id} className="card p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="min-w-0">
                    <Link to={`/bab/${ch.id}`} className="font-semibold hover:underline">
                      {ch.nomor} · {ch.judul}
                    </Link>
                    <p className="text-xs text-slate-500">Checklist siap kirim {prog.done}/{prog.total}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag tone={statusTone[status]}>{statusWeight[status]}%</Tag>
                    <label className="sr-only" htmlFor={`st-${ch.id}`}>
                      Status {ch.judul}
                    </label>
                    <select id={`st-${ch.id}`} className="field min-h-10 w-auto py-1.5" value={status} onChange={(e) => appStore.setBabStatus(ch.id, e.target.value as BabStatus)}>
                      {(Object.keys(statusLabels) as BabStatus[]).map((s) => (
                        <option key={s} value={s}>
                          {statusLabels[s]}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <ProgressBar value={statusWeight[status]} label={`Progres ${ch.judul}`} tone={status === 'acc' ? 'good' : 'accent'} className="mt-3" />
              </li>
            );
          })}
        </ul>
      </Section>
    </div>
  );
}

function TaskCard({ t, idx }: { t: Task; idx: number }) {
  const left = t.due ? diffDays(todayKey(), t.due) : null;
  const order: TaskStatus[] = ['todo', 'doing', 'done'];
  const pos = order.indexOf(t.status);
  return (
    <div
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData('text/plain', t.id);
        e.dataTransfer.effectAllowed = 'move';
      }}
      className="card cursor-grab p-3 active:cursor-grabbing"
      data-testid={`task-${idx}`}
    >
      <p className={cn('text-sm font-medium leading-snug', t.status === 'done' && 'text-slate-500 line-through')}>{t.title}</p>
      {t.due && (
        <p className="mt-1.5">
          <Tag tone={left !== null && left < 0 && t.status !== 'done' ? 'bad' : left !== null && left <= 2 && t.status !== 'done' ? 'warn' : 'neutral'}>
            <CalendarClock aria-hidden="true" className="h-3 w-3" /> {formatDateID(t.due, false)} · {relativeDaysLabel(t.due)}
          </Tag>
        </p>
      )}
      <div className="mt-2.5 flex items-center justify-between gap-1">
        <div className="flex gap-1">
          <button className="btn-ghost h-9 min-h-9 w-9 px-0" disabled={pos === 0} aria-label={`Pindah "${t.title}" ke kolom sebelumnya`} onClick={() => appStore.moveTask(t.id, order[pos - 1])}>
            <ChevronLeft aria-hidden="true" className="h-4 w-4" />
          </button>
          <button className="btn-ghost h-9 min-h-9 w-9 px-0" disabled={pos === 2} aria-label={`Pindah "${t.title}" ke kolom berikutnya`} onClick={() => appStore.moveTask(t.id, order[pos + 1])}>
            <ChevronRight aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
        <button className="btn-ghost h-9 min-h-9 w-9 px-0 text-rose-600" aria-label={`Hapus tugas "${t.title}"`} onClick={() => appStore.deleteTask(t.id)}>
          <Trash2 aria-hidden="true" className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function KanbanTab() {
  const { tasks } = useAppStore();
  const [title, setTitle] = useState('');
  const [due, setDue] = useState('');
  const [over, setOver] = useState<TaskStatus | null>(null);

  const add = (e: React.FormEvent) => {
    e.preventDefault();
    appStore.addTask(title, due ? { due } : {});
    setTitle('');
    setDue('');
  };

  return (
    <div>
      <form onSubmit={add} className="card mb-5 flex flex-wrap items-end gap-3 p-4">
        <div className="min-w-[200px] flex-1">
          <label htmlFor="task-title" className="mb-1.5 block text-sm font-semibold">
            Tugas baru
          </label>
          <input id="task-title" className="field" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Mis. Revisi latar belakang sesuai catatan dosen" maxLength={160} />
        </div>
        <div>
          <label htmlFor="task-due" className="mb-1.5 block text-sm font-semibold">
            Tenggat (opsional)
          </label>
          <input id="task-due" type="date" className="field" value={due} onChange={(e) => setDue(e.target.value)} />
        </div>
        <button type="submit" className="btn-primary" disabled={!title.trim()}>
          <Plus aria-hidden="true" className="h-4 w-4" /> Tambah
        </button>
      </form>

      {tasks.length === 0 && (
        <EmptyState
          icon={<KanbanSquare className="h-6 w-6" />}
          title="Belum ada tugas"
          body="Pecah pekerjaan besar jadi tugas kecil yang bisa selesai dalam 1–2 jam. Tambahkan tugas pertamamu di atas."
          className="mb-5"
        />
      )}

      <div className="grid gap-4 lg:grid-cols-3">
        {columns.map((col) => {
          const items = tasks.filter((t) => t.status === col.id);
          return (
            <section
              key={col.id}
              aria-label={col.label}
              onDragOver={(e) => {
                e.preventDefault();
                setOver(col.id);
              }}
              onDragLeave={() => setOver(null)}
              onDrop={(e) => {
                e.preventDefault();
                const id = e.dataTransfer.getData('text/plain');
                if (id) appStore.moveTask(id, col.id);
                setOver(null);
              }}
              className={cn('rounded-2xl border border-slate-200 bg-slate-100/60 p-3 transition dark:border-slate-800 dark:bg-slate-900/40', over === col.id && 'border-indigo-400 bg-indigo-50 dark:bg-indigo-950/30')}
            >
              <div className="mb-3 flex items-center justify-between px-1">
                <div>
                  <h3 className="font-heading font-bold">{col.label}</h3>
                  <p className="text-xs text-slate-500">{col.hint}</p>
                </div>
                <Tag>{items.length}</Tag>
              </div>
              <div className="space-y-2.5">
                {items.length === 0 && <p className="rounded-xl border border-dashed border-slate-300 py-6 text-center text-xs text-slate-400 dark:border-slate-700">Kosong</p>}
                {items.map((t, i) => (
                  <TaskCard key={t.id} t={t} idx={i} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
      <p className="mt-3 text-xs text-slate-500">Tips: seret kartu antar kolom di komputer, atau pakai tombol panah di HP.</p>
    </div>
  );
}

function WeeklyTab() {
  const { weeklyTargets, wordLog, writingTarget } = useAppStore();
  const [text, setText] = useState('');
  const [offset, setOffset] = useState(0);
  const week = addDays(weekStartKey(), offset * 7);
  const items = weeklyTargets.filter((w) => w.weekKey === week);
  const done = items.filter((w) => w.done).length;
  const days = Array.from({ length: 7 }, (_, i) => addDays(week, i));
  const dayNames = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];
  const totalWords = days.reduce((s, d) => s + (wordLog[d] ?? 0), 0);

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <section className="card p-5">
        <div className="mb-4 flex items-center justify-between gap-2">
          <button className="btn-ghost h-10 min-h-10 w-10 px-0" aria-label="Minggu sebelumnya" onClick={() => setOffset(offset - 1)}>
            <ChevronLeft aria-hidden="true" className="h-5 w-5" />
          </button>
          <div className="text-center">
            <p className="font-heading font-bold">{offset === 0 ? 'Minggu ini' : offset === 1 ? 'Minggu depan' : offset === -1 ? 'Minggu lalu' : 'Minggu'}</p>
            <p className="text-xs text-slate-500">
              {formatDateID(week, false)} – {formatDateID(addDays(week, 6))}
            </p>
          </div>
          <button className="btn-ghost h-10 min-h-10 w-10 px-0" aria-label="Minggu berikutnya" onClick={() => setOffset(offset + 1)}>
            <ChevronRight aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
        <form
          className="mb-3 flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            appStore.addWeeklyTarget(text, week);
            setText('');
          }}
        >
          <input className="field" value={text} onChange={(e) => setText(e.target.value)} placeholder="Target minggu ini, mis. Selesaikan Bab 2 subbab 2.1" aria-label="Target mingguan baru" maxLength={160} />
          <button className="btn-primary px-4" type="submit" disabled={!text.trim()} aria-label="Tambah target">
            <Plus aria-hidden="true" className="h-4 w-4" />
          </button>
        </form>
        {items.length === 0 ? (
          <p className="py-4 text-center text-sm text-slate-500">Belum ada target. Tulis 2–3 target spesifik yang realistis untuk minggu ini.</p>
        ) : (
          <>
            <ProgressBar value={(done / items.length) * 100} label="Target mingguan" className="mb-2" tone={done === items.length ? 'good' : 'accent'} />
            <p className="mb-2 text-xs text-slate-500">
              {done} dari {items.length} target tercapai
            </p>
            <ul>
              {items.map((w) => (
                <li key={w.id} className="flex items-center gap-1">
                  <div className="flex-1">
                    <CheckRow checked={w.done} onToggle={() => appStore.toggleWeeklyTarget(w.id)}>
                      {w.text}
                    </CheckRow>
                  </div>
                  <button className="btn-ghost h-9 min-h-9 w-9 px-0 text-rose-600" aria-label={`Hapus target "${w.text}"`} onClick={() => appStore.deleteWeeklyTarget(w.id)}>
                    <Trash2 aria-hidden="true" className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>

      <section className="card p-5">
        <h3 className="font-heading font-bold">Kata ditulis minggu ini</h3>
        <p className="mb-4 text-sm text-slate-500">
          Total {totalWords.toLocaleString('id-ID')} kata · target harian {writingTarget.toLocaleString('id-ID')}
        </p>
        <div className="flex h-40 items-end gap-2">
          {days.map((d, i) => {
            const v = wordLog[d] ?? 0;
            const h = Math.min(100, (v / Math.max(writingTarget, 1)) * 100);
            const isToday = d === todayKey();
            return (
              <div key={d} className="flex flex-1 flex-col items-center gap-1.5">
                <span className="text-[10px] font-semibold text-slate-500">{v || ''}</span>
                <div className="flex h-24 w-full items-end rounded-lg bg-slate-100 dark:bg-slate-800">
                  <div className={cn('w-full rounded-lg transition-all', v >= writingTarget ? 'bg-emerald-500' : 'bg-indigo-500')} style={{ height: `${h}%`, minHeight: v > 0 ? 4 : 0 }} />
                </div>
                <span className={cn('text-xs font-semibold', isToday ? 'text-indigo-700 dark:text-indigo-300' : 'text-slate-500')}>{dayNames[i]}</span>
              </div>
            );
          })}
        </div>
        <p className="mt-4 text-xs text-slate-500">
          Catat kata di Beranda atau{' '}
          <Link to="/fokus" className="font-semibold underline">
            Mode fokus
          </Link>
          .
        </p>
      </section>
    </div>
  );
}

function DeadlineTab() {
  const { deadlines, remindersOn } = useAppStore();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const sorted = [...deadlines].sort((a, b) => Number(a.done) - Number(b.done) || a.date.localeCompare(b.date));

  const toggleReminder = async () => {
    if (remindersOn) {
      appStore.patch({ remindersOn: false });
      return;
    }
    const res = await requestReminderPermission();
    if (res === 'granted') {
      appStore.patch({ remindersOn: true });
      toast('Pengingat aktif', { body: 'Notifikasi muncul saat aplikasi terbuka, untuk deadline 2 hari ke depan.', tone: 'success' });
    } else if (res === 'unsupported') {
      toast('Browser tidak mendukung notifikasi', { body: 'Pengingat tetap tampil di Beranda dan halaman ini.', tone: 'warn' });
    } else {
      toast('Izin notifikasi ditolak', { body: 'Kamu bisa mengubahnya lewat pengaturan situs di browser.', tone: 'warn' });
    }
  };

  return (
    <div>
      <form
        className="card mb-5 flex flex-wrap items-end gap-3 p-4"
        onSubmit={(e) => {
          e.preventDefault();
          appStore.addDeadline({ title, date });
          setTitle('');
          setDate('');
        }}
      >
        <div className="min-w-[200px] flex-1">
          <label htmlFor="dl-title" className="mb-1.5 block text-sm font-semibold">
            Deadline atau jadwal penting
          </label>
          <input id="dl-title" className="field" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Mis. Bimbingan Bab 2 / Pendaftaran sempro" maxLength={140} />
        </div>
        <div>
          <label htmlFor="dl-date" className="mb-1.5 block text-sm font-semibold">
            Tanggal
          </label>
          <input id="dl-date" type="date" className="field" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <button className="btn-primary" type="submit" disabled={!title.trim() || !date}>
          <Plus aria-hidden="true" className="h-4 w-4" /> Tambah
        </button>
      </form>

      {notificationsSupported() && (
        <div className="mb-5">
          <Notice tone="info" title="Pengingat">
            <span>Aktifkan notifikasi browser agar deadline 2 hari ke depan diingatkan saat aplikasi terbuka. Pengingat juga tampil di Beranda.</span>
            <div className="mt-2">
              <button className="btn-soft min-h-10 text-sm" onClick={toggleReminder}>
                {remindersOn ? <BellOff aria-hidden="true" className="h-4 w-4" /> : <Bell aria-hidden="true" className="h-4 w-4" />}
                {remindersOn ? 'Matikan notifikasi' : 'Aktifkan notifikasi'}
              </button>
            </div>
          </Notice>
        </div>
      )}

      {sorted.length === 0 ? (
        <EmptyState icon={<CalendarClock className="h-6 w-6" />} title="Belum ada deadline" body="Masukkan tanggal bimbingan, sempro, sidang, atau batas pengumpulan agar tidak terlewat." />
      ) : (
        <ul className="space-y-2.5">
          {sorted.map((d) => {
            const left = diffDays(todayKey(), d.date);
            return (
              <li key={d.id} className="card flex items-center gap-3 p-3.5">
                <div className="flex-1">
                  <CheckRow checked={d.done} onToggle={() => appStore.toggleDeadline(d.id)}>
                    <span className="font-medium">{d.title}</span>
                  </CheckRow>
                  <p className="pl-10 text-xs text-slate-500">{formatDateID(d.date)}</p>
                </div>
                {!d.done && <Tag tone={left < 0 ? 'bad' : left <= 3 ? 'warn' : 'neutral'}>{relativeDaysLabel(d.date)}</Tag>}
                <button
                  className="btn-ghost h-9 min-h-9 w-9 px-0 text-rose-600"
                  aria-label={`Hapus deadline "${d.title}"`}
                  onClick={async () => {
                    if (await confirmAction({ title: 'Hapus deadline ini?', body: d.title, confirmLabel: 'Hapus', danger: true })) appStore.deleteDeadline(d.id);
                  }}
                >
                  <Trash2 aria-hidden="true" className="h-4 w-4" />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default function Tracker() {
  const [tab, setTab] = useState<Tab>('progres');
  return (
    <Page wide>
      <PageHeader eyebrow="Tracker" title="Progres, tugas, dan deadline" subtitle="Pantau persentase tiap bab, atur tugas di kanban, tetapkan target mingguan, dan jangan lewatkan deadline." icon={<KanbanSquare aria-hidden="true" className="h-5 w-5" />} />
      <div className="mb-6">
        <Segmented<Tab>
          ariaLabel="Bagian tracker"
          value={tab}
          onChange={setTab}
          scrollable
          options={[
            { value: 'progres', label: 'Progres' },
            { value: 'kanban', label: 'Kanban' },
            { value: 'mingguan', label: 'Mingguan' },
            { value: 'deadline', label: 'Deadline' }
          ]}
        />
      </div>
      {tab === 'progres' && <ProgressTab />}
      {tab === 'kanban' && <KanbanTab />}
      {tab === 'mingguan' && <WeeklyTab />}
      {tab === 'deadline' && <DeadlineTab />}
    </Page>
  );
}
