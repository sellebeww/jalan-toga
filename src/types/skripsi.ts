/** Tipe domain untuk fitur pendamping skripsi (profil, tracker, bimbingan, referensi, dst). */

export type StatusId =
  | 'belum-topik'
  | 'punya-judul'
  | 'proposal'
  | 'sudah-sempro'
  | 'penelitian'
  | 'olah-data'
  | 'menjelang-sidang'
  | 'revisi-akhir';

export type Jalur = 'normal' | 'kejar' | 'molor';

export interface Profile {
  nama: string;
  nim: string;
  jurusanId: string;
  semester: number;
  status: StatusId;
  /** Bulan target lulus, format YYYY-MM */
  targetLulus: string;
  jalur: Jalur;
  judul: string;
  dosen: string;
  /** id pendekatan penelitian yang dipilih (hasil wizard metodologi) */
  pendekatanId: string;
  createdAt: number;
}

export type BabStatus = 'belum' | 'draft' | 'bimbingan' | 'revisi' | 'acc';

export type TaskStatus = 'todo' | 'doing' | 'done';

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  babId?: string;
  due?: string;
  createdAt: number;
}

export interface WeeklyTarget {
  id: string;
  text: string;
  done: boolean;
  /** Tanggal Senin minggu terkait, YYYY-MM-DD */
  weekKey: string;
}

export interface Deadline {
  id: string;
  title: string;
  /** YYYY-MM-DD */
  date: string;
  done: boolean;
  note?: string;
}

export interface GuidanceTodo {
  id: string;
  text: string;
  done: boolean;
}

export interface GuidanceLog {
  id: string;
  date: string;
  dosen: string;
  topik: string;
  hasil: string;
  revisi: string;
  todos: GuidanceTodo[];
  nextDate?: string;
}

export type RefType = 'jurnal' | 'buku' | 'prosiding' | 'web' | 'skripsi' | 'laporan';

export interface RefAuthor {
  family: string;
  given: string;
}

export interface Reference {
  id: string;
  type: RefType;
  authors: RefAuthor[];
  year: string;
  title: string;
  /** Nama jurnal / situs web / nama konferensi / perguruan tinggi / lembaga */
  container: string;
  volume?: string;
  issue?: string;
  pages?: string;
  publisher?: string;
  city?: string;
  edition?: string;
  doi?: string;
  url?: string;
  accessed?: string;
  note?: string;
  tags: string[];
  createdAt: number;
}

export interface SavedTopic {
  id: string;
  judul: string;
  catatan: string;
  skor?: number;
  createdAt: number;
}

export interface DefenseRun {
  id: string;
  date: number;
  mode: string;
  total: number;
  siap: number;
  ragu: number;
  belum: number;
  seconds: number;
}

export interface MoodEntry {
  date: string;
  mood: 1 | 2 | 3 | 4 | 5;
  note: string;
}

export interface FocusSession {
  id: string;
  date: string;
  minutes: number;
  label: string;
  at: number;
}

export interface BackupFile {
  app: 'pendamping-skripsi';
  version: number;
  exportedAt: string;
  state: unknown;
}
