/** Utilitas tanggal berbasis zona waktu lokal (bukan UTC), supaya "hari ini" benar di WIB/WITA/WIT. */

const pad = (n: number) => String(n).padStart(2, '0');

export function toKey(d: Date): string {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export function todayKey(): string {
  return toKey(new Date());
}

export function parseKey(key: string): Date {
  const [y, m, d] = key.split('-').map(Number);
  return new Date(y, (m || 1) - 1, d || 1);
}

export function addDays(key: string, days: number): string {
  const d = parseKey(key);
  d.setDate(d.getDate() + days);
  return toKey(d);
}

export function diffDays(fromKey: string, toKeyStr: string): number {
  const a = parseKey(fromKey).getTime();
  const b = parseKey(toKeyStr).getTime();
  return Math.round((b - a) / 86400000);
}

/** Senin pada minggu yang memuat tanggal tsb. */
export function weekStartKey(key: string = todayKey()): string {
  const d = parseKey(key);
  const day = (d.getDay() + 6) % 7; // Senin = 0
  d.setDate(d.getDate() - day);
  return toKey(d);
}

export function monthKey(d: Date = new Date()): string {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}`;
}

export function addMonths(monthStr: string, months: number): string {
  const [y, m] = monthStr.split('-').map(Number);
  const d = new Date(y, m - 1 + months, 1);
  return monthKey(d);
}

/** Selisih bulan (to - from), keduanya YYYY-MM. */
export function diffMonths(fromMonth: string, toMonth: string): number {
  const [fy, fm] = fromMonth.split('-').map(Number);
  const [ty, tm] = toMonth.split('-').map(Number);
  return (ty - fy) * 12 + (tm - fm);
}

const ID_MONTHS = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

export function formatDateID(key: string, withYear = true): string {
  if (!key) return '';
  const d = parseKey(key);
  const base = `${d.getDate()} ${ID_MONTHS[d.getMonth()]}`;
  return withYear ? `${base} ${d.getFullYear()}` : base;
}

export function formatMonthID(monthStr: string): string {
  if (!monthStr) return '';
  const [y, m] = monthStr.split('-').map(Number);
  return `${ID_MONTHS[m - 1]} ${y}`;
}

export function relativeDaysLabel(key: string): string {
  const diff = diffDays(todayKey(), key);
  if (diff === 0) return 'Hari ini';
  if (diff === 1) return 'Besok';
  if (diff === -1) return 'Kemarin';
  if (diff > 0) return `${diff} hari lagi`;
  return `Lewat ${Math.abs(diff)} hari`;
}

export function formatDuration(totalSeconds: number): string {
  const s = Math.max(0, Math.round(totalSeconds));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${pad(m)}:${pad(r)}`;
}
