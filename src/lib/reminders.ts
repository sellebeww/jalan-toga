import { appStore } from './store';
import { diffDays, todayKey } from './date';

const NOTIFIED_KEY = 'pendamping_skripsi_notified';

function readNotified(): Record<string, string> {
  try {
    return JSON.parse(localStorage.getItem(NOTIFIED_KEY) || '{}');
  } catch {
    return {};
  }
}

export function notificationsSupported(): boolean {
  return typeof window !== 'undefined' && 'Notification' in window;
}

export async function requestReminderPermission(): Promise<NotificationPermission | 'unsupported'> {
  if (!notificationsSupported()) return 'unsupported';
  if (Notification.permission === 'granted') return 'granted';
  return Notification.requestPermission();
}

/** Deadline aktif yang jatuh tempo dalam `withinDays` hari (termasuk yang sudah lewat). */
export function dueSoon(withinDays = 3) {
  const today = todayKey();
  return appStore
    .getState()
    .deadlines.filter((d) => !d.done && diffDays(today, d.date) <= withinDays)
    .sort((a, b) => a.date.localeCompare(b.date));
}

/** Kirim notifikasi browser (maks. 1x per deadline per hari) selama aplikasi terbuka. */
export function checkAndNotify() {
  const s = appStore.getState();
  if (!s.remindersOn || !notificationsSupported() || Notification.permission !== 'granted') return;
  const today = todayKey();
  const notified = readNotified();
  let changed = false;
  for (const d of dueSoon(2)) {
    if (notified[d.id] === today) continue;
    const left = diffDays(today, d.date);
    const when = left < 0 ? `lewat ${Math.abs(left)} hari` : left === 0 ? 'hari ini' : left === 1 ? 'besok' : `${left} hari lagi`;
    try {
      new Notification('Pengingat deadline skripsi', { body: `${d.title} (${when})`, tag: d.id });
      notified[d.id] = today;
      changed = true;
    } catch {
      /* beberapa browser seluler hanya mengizinkan lewat service worker */
    }
  }
  if (changed) {
    try {
      localStorage.setItem(NOTIFIED_KEY, JSON.stringify(notified));
    } catch {
      /* abaikan */
    }
  }
}
