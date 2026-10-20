import { statusOptions } from '../data/roadmap';
import type { StatusId } from '../types/skripsi';

/** Tahap minimal (status profil) agar halaman terbuka. Halaman yang tidak tercantum selalu terbuka. */
export const ROUTE_MIN_STATUS: Record<string, StatusId> = {
  '/bab': 'punya-judul',
  '/referensi': 'punya-judul',
  '/template': 'punya-judul',
  '/format': 'punya-judul',
  '/bimbingan': 'punya-judul',
  '/toolkit': 'proposal',
  '/sidang': 'proposal'
};

const rank = (s: StatusId) => statusOptions.findIndex((o) => o.id === s);

/** Status yang dibutuhkan bila halaman masih terkunci untuk status ini; null bila terbuka. */
export function requiredStatus(path: string, status: StatusId | undefined): StatusId | null {
  const need = ROUTE_MIN_STATUS[path];
  if (!need || !status) return null;
  return rank(status) >= rank(need) ? null : need;
}
