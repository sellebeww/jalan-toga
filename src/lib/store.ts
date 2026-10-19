import { useSyncExternalStore } from 'react';
import type { CardState, QuizAttempt } from '../types';
import type {
  BabStatus,
  BackupFile,
  Deadline,
  DefenseRun,
  FocusSession,
  GuidanceLog,
  MoodEntry,
  Profile,
  Reference,
  SavedTopic,
  Task,
  WeeklyTarget
} from '../types/skripsi';
import { addDays, todayKey } from './date';
import { applyTheme, type ThemePref } from './theme';
import { evaluateBadges } from './badges';
import { toast } from './toast';

export const STORAGE_KEY = 'pendamping_skripsi_v2';
const LEGACY_KEY = 'rti_pintar_state_v1';
export const STATE_VERSION = 2;

export interface AppState {
  // --- Preferensi
  themePref: ThemePref;
  studyMode: 'paham' | 'hafal';
  remindersOn: boolean;

  // --- Profil & roadmap
  profile: Profile | null;
  roadmapChecks: Record<string, boolean>;

  // --- Panduan bab & tracker
  babStatus: Record<string, BabStatus>;
  babChecks: Record<string, boolean>;
  tasks: Task[];
  weeklyTargets: WeeklyTarget[];
  deadlines: Deadline[];

  // --- Bimbingan
  guidance: GuidanceLog[];

  // --- Topik, referensi
  savedTopics: SavedTopic[];
  references: Reference[];

  // --- Menulis & fokus
  writingTarget: number;
  wordLog: Record<string, number>;
  focusSessions: FocusSession[];

  // --- Sidang
  defenseRuns: DefenseRun[];
  defenseWeak: string[];

  // --- Mental & administrasi
  moods: MoodEntry[];
  adminChecks: Record<string, boolean>;
  titleChecks: Record<string, boolean>;

  // --- Gamifikasi
  badges: Record<string, number>;
  streakDays: number;
  lastActiveDate: string;

  // --- Materi Metodologi (jalur TI, bawaan versi lama)
  completedTopics: string[];
  bookmarks: string[];
  notes: Record<string, string>;
  cardStates: Record<string, CardState>;
  quizAttempts: QuizAttempt[];
}

export function createDefaultState(): AppState {
  return {
    themePref: 'system',
    studyMode: 'paham',
    remindersOn: false,
    profile: null,
    roadmapChecks: {},
    babStatus: {},
    babChecks: {},
    tasks: [],
    weeklyTargets: [],
    deadlines: [],
    guidance: [],
    savedTopics: [],
    references: [],
    writingTarget: 300,
    wordLog: {},
    focusSessions: [],
    defenseRuns: [],
    defenseWeak: [],
    moods: [],
    adminChecks: {},
    titleChecks: {},
    badges: {},
    streakDays: 1,
    lastActiveDate: todayKey(),
    completedTopics: [],
    bookmarks: [],
    notes: {},
    cardStates: {},
    quizAttempts: []
  };
}

const isObj = (v: unknown): v is Record<string, unknown> =>
  typeof v === 'object' && v !== null && !Array.isArray(v);

const REF_OPTIONAL = ['volume', 'issue', 'pages', 'publisher', 'city', 'edition', 'doi', 'url', 'accessed', 'note'] as const;

type Ref = AppState['references'][number];

/** Field wajib harus bertipe benar (entri dibuang bila tidak); field opsional angka jadi string, sisanya dihapus. */
function normalizeReference(r: unknown): Ref | null {
  if (!isObj(r)) return null;
  const str = (k: string) => typeof r[k] === 'string';
  const ok =
    ['id', 'type', 'title', 'year', 'container'].every(str) &&
    Array.isArray(r.authors) &&
    r.authors.every((a) => isObj(a) && typeof a.family === 'string' && typeof a.given === 'string') &&
    Array.isArray(r.tags) &&
    r.tags.every((t) => typeof t === 'string');
  if (!ok) return null;
  const out = { ...r };
  for (const k of REF_OPTIONAL) {
    if (typeof out[k] === 'number') out[k] = String(out[k]);
    else if (out[k] !== undefined && typeof out[k] !== 'string') delete out[k];
  }
  return out as unknown as Ref;
}

/**
 * Gabungkan data tak tepercaya (localStorage / file impor) dengan default.
 * Tipe tiap field dicek supaya data rusak tidak membuat aplikasi crash.
 */
export function sanitizeState(raw: unknown): AppState {
  const base = createDefaultState();
  if (!isObj(raw)) return base;
  const out = base as unknown as Record<string, unknown>;
  for (const key of Object.keys(base) as (keyof AppState)[]) {
    if (key === 'profile') continue;
    const incoming = raw[key];
    if (incoming === undefined || incoming === null) continue;
    const def = base[key];
    if (Array.isArray(def)) {
      if (Array.isArray(incoming)) out[key] = incoming;
    } else if (isObj(def)) {
      if (isObj(incoming)) out[key] = incoming;
    } else if (typeof def === typeof incoming) {
      out[key] = incoming;
    }
  }
  if (isObj(raw.profile)) {
    const p = raw.profile as Partial<Profile>;
    if (typeof p.jurusanId === 'string' && typeof p.status === 'string') {
      base.profile = {
        nama: String(p.nama ?? ''),
        nim: String(p.nim ?? ''),
        jurusanId: p.jurusanId,
        semester: Number(p.semester) || 7,
        status: p.status as Profile['status'],
        targetLulus: String(p.targetLulus ?? ''),
        jalur: (p.jalur as Profile['jalur']) ?? 'normal',
        judul: String(p.judul ?? ''),
        dosen: String(p.dosen ?? ''),
        pendekatanId: String(p.pendekatanId ?? ''),
        createdAt: Number(p.createdAt) || Date.now()
      };
    }
  }
  if (!['system', 'light', 'dark'].includes(base.themePref)) base.themePref = 'system';
  // Formatter sitasi mengandalkan tipe field; entri rusak dari file impor dibuang agar halaman Referensi tidak crash.
  base.references = base.references.map(normalizeReference).filter((r): r is Ref => r !== null);
  return base;
}

function readStorage(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function loadInitialState(): AppState {
  if (typeof window === 'undefined') return createDefaultState();
  try {
    const raw = readStorage(STORAGE_KEY);
    if (raw) return sanitizeState(JSON.parse(raw));
    // Migrasi dari versi lama (RTI Pintar): bawa progres materi, flashcard, kuis.
    const legacy = readStorage(LEGACY_KEY);
    if (legacy) {
      const parsed = JSON.parse(legacy) as Record<string, unknown>;
      return sanitizeState({
        completedTopics: parsed.completedTopics,
        bookmarks: parsed.bookmarks,
        notes: parsed.notes,
        cardStates: parsed.cardStates,
        quizAttempts: parsed.quizAttempts,
        studyMode: parsed.studyMode,
        themePref: parsed.darkMode === true ? 'dark' : 'system',
        streakDays: parsed.streakDays
      });
    }
  } catch (e) {
    console.error('Gagal membaca data tersimpan, memakai data baru:', e);
  }
  return createDefaultState();
}

let currentState: AppState = loadInitialState();
const listeners = new Set<() => void>();
let persistError = false;

function persist() {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentState));
    persistError = false;
  } catch (e) {
    if (!persistError) {
      persistError = true;
      toast('Data tidak bisa disimpan', {
        body: 'Penyimpanan browser penuh atau dinonaktifkan. Ekspor data kamu dari menu Pengaturan agar tidak hilang.',
        tone: 'warn'
      });
    }
    console.error('Gagal menyimpan:', e);
  }
}

function commit(next: AppState) {
  const earned = evaluateBadges(next);
  if (earned.length > 0) {
    const stamp = Date.now();
    const badges = { ...next.badges };
    earned.forEach((b) => {
      badges[b.id] = stamp;
    });
    next = { ...next, badges };
    earned.forEach((b) => toast(`Badge baru: ${b.name}`, { body: b.desc, tone: 'badge' }));
  }
  currentState = next;
  persist();
  listeners.forEach((l) => l());
}

/** Perbarui streak harian saat aplikasi dibuka. */
function touchActivity() {
  const today = todayKey();
  const s = currentState;
  if (s.lastActiveDate === today) return;
  const streak = s.lastActiveDate === addDays(today, -1) ? s.streakDays + 1 : 1;
  commit({ ...s, streakDays: streak, lastActiveDate: today });
}

export const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);

type Updater = Partial<AppState> | ((s: AppState) => Partial<AppState>);

const toggled = (rec: Record<string, boolean>, id: string) => {
  const next = { ...rec };
  if (next[id]) delete next[id];
  else next[id] = true;
  return next;
};

export const appStore = {
  getState(): AppState {
    return currentState;
  },

  subscribe(listener: () => void) {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  },

  /** Perbarui sebagian state. */
  patch(update: Updater) {
    const delta = typeof update === 'function' ? update(currentState) : update;
    commit({ ...currentState, ...delta });
  },

  touchActivity,

  // ---------- Preferensi
  setTheme(pref: ThemePref) {
    applyTheme(pref);
    appStore.patch({ themePref: pref });
  },
  setStudyMode(mode: 'paham' | 'hafal') {
    appStore.patch({ studyMode: mode });
  },

  // ---------- Profil
  saveProfile(profile: Profile) {
    appStore.patch({ profile });
  },
  updateProfile(partial: Partial<Profile>) {
    const p = currentState.profile;
    if (!p) return;
    appStore.patch({ profile: { ...p, ...partial } });
  },

  // ---------- Roadmap & bab
  toggleRoadmapCheck(id: string) {
    appStore.patch({ roadmapChecks: toggled(currentState.roadmapChecks, id) });
  },
  setBabStatus(babId: string, status: BabStatus) {
    appStore.patch({ babStatus: { ...currentState.babStatus, [babId]: status } });
  },
  toggleBabCheck(id: string) {
    appStore.patch({ babChecks: toggled(currentState.babChecks, id) });
  },

  // ---------- Tugas / target / deadline
  addTask(title: string, extra: Partial<Task> = {}) {
    const t = title.trim();
    if (!t) return;
    const task: Task = { id: uid(), title: t, status: 'todo', createdAt: Date.now(), ...extra };
    appStore.patch({ tasks: [task, ...currentState.tasks] });
  },
  moveTask(id: string, status: Task['status']) {
    appStore.patch({ tasks: currentState.tasks.map((t) => (t.id === id ? { ...t, status } : t)) });
  },
  updateTask(id: string, partial: Partial<Task>) {
    appStore.patch({ tasks: currentState.tasks.map((t) => (t.id === id ? { ...t, ...partial } : t)) });
  },
  deleteTask(id: string) {
    appStore.patch({ tasks: currentState.tasks.filter((t) => t.id !== id) });
  },
  addWeeklyTarget(text: string, weekKey: string) {
    const t = text.trim();
    if (!t) return;
    appStore.patch({
      weeklyTargets: [...currentState.weeklyTargets, { id: uid(), text: t, done: false, weekKey }]
    });
  },
  toggleWeeklyTarget(id: string) {
    appStore.patch({
      weeklyTargets: currentState.weeklyTargets.map((w) => (w.id === id ? { ...w, done: !w.done } : w))
    });
  },
  deleteWeeklyTarget(id: string) {
    appStore.patch({ weeklyTargets: currentState.weeklyTargets.filter((w) => w.id !== id) });
  },
  addDeadline(d: Omit<Deadline, 'id' | 'done'>) {
    if (!d.title.trim() || !d.date) return;
    appStore.patch({
      deadlines: [...currentState.deadlines, { id: uid(), done: false, ...d, title: d.title.trim() }]
    });
  },
  toggleDeadline(id: string) {
    appStore.patch({
      deadlines: currentState.deadlines.map((d) => (d.id === id ? { ...d, done: !d.done } : d))
    });
  },
  deleteDeadline(id: string) {
    appStore.patch({ deadlines: currentState.deadlines.filter((d) => d.id !== id) });
  },

  // ---------- Bimbingan
  addGuidance(log: Omit<GuidanceLog, 'id'>) {
    appStore.patch({ guidance: [{ id: uid(), ...log }, ...currentState.guidance] });
  },
  updateGuidance(id: string, partial: Partial<GuidanceLog>) {
    appStore.patch({
      guidance: currentState.guidance.map((g) => (g.id === id ? { ...g, ...partial } : g))
    });
  },
  deleteGuidance(id: string) {
    appStore.patch({ guidance: currentState.guidance.filter((g) => g.id !== id) });
  },

  // ---------- Topik & referensi
  saveTopic(judul: string, catatan = '', skor?: number) {
    const j = judul.trim();
    if (!j || currentState.savedTopics.some((t) => t.judul === j)) return;
    appStore.patch({
      savedTopics: [{ id: uid(), judul: j, catatan, skor, createdAt: Date.now() }, ...currentState.savedTopics]
    });
  },
  deleteTopic(id: string) {
    appStore.patch({ savedTopics: currentState.savedTopics.filter((t) => t.id !== id) });
  },
  upsertReference(ref: Reference) {
    const exists = currentState.references.some((r) => r.id === ref.id);
    appStore.patch({
      references: exists
        ? currentState.references.map((r) => (r.id === ref.id ? ref : r))
        : [ref, ...currentState.references]
    });
  },
  deleteReference(id: string) {
    appStore.patch({ references: currentState.references.filter((r) => r.id !== id) });
  },

  // ---------- Menulis & fokus
  setWritingTarget(n: number) {
    appStore.patch({ writingTarget: Math.max(0, Math.min(20000, Math.round(n) || 0)) });
  },
  addWords(count: number, date = todayKey()) {
    const cur = currentState.wordLog[date] ?? 0;
    appStore.patch({ wordLog: { ...currentState.wordLog, [date]: Math.max(0, cur + Math.round(count)) } });
  },
  setWords(count: number, date = todayKey()) {
    appStore.patch({ wordLog: { ...currentState.wordLog, [date]: Math.max(0, Math.round(count) || 0) } });
  },
  addFocusSession(minutes: number, label: string) {
    const session: FocusSession = {
      id: uid(),
      date: todayKey(),
      minutes: Math.round(minutes),
      label,
      at: Date.now()
    };
    appStore.patch({ focusSessions: [session, ...currentState.focusSessions].slice(0, 500) });
  },

  // ---------- Sidang
  addDefenseRun(run: Omit<DefenseRun, 'id'>) {
    appStore.patch({ defenseRuns: [{ id: uid(), ...run }, ...currentState.defenseRuns].slice(0, 100) });
  },
  setDefenseWeak(ids: string[]) {
    appStore.patch({ defenseWeak: Array.from(new Set(ids)) });
  },

  // ---------- Mental, admin, judul
  addMood(entry: MoodEntry) {
    const rest = currentState.moods.filter((m) => m.date !== entry.date);
    appStore.patch({ moods: [...rest, entry].sort((a, b) => a.date.localeCompare(b.date)).slice(-365) });
  },
  toggleAdminCheck(id: string) {
    appStore.patch({ adminChecks: toggled(currentState.adminChecks, id) });
  },
  toggleTitleCheck(id: string) {
    appStore.patch({ titleChecks: toggled(currentState.titleChecks, id) });
  },

  // ---------- Materi Metodologi (bawaan)
  toggleTopicComplete(topicId: string) {
    const done = currentState.completedTopics.includes(topicId);
    appStore.patch({
      completedTopics: done
        ? currentState.completedTopics.filter((id) => id !== topicId)
        : [...currentState.completedTopics, topicId]
    });
  },
  setTopicComplete(topicId: string, completed = true) {
    const done = currentState.completedTopics.includes(topicId);
    if (done === completed) return;
    appStore.patch({
      completedTopics: completed
        ? [...currentState.completedTopics, topicId]
        : currentState.completedTopics.filter((id) => id !== topicId)
    });
  },
  toggleBookmark(topicId: string) {
    const has = currentState.bookmarks.includes(topicId);
    appStore.patch({
      bookmarks: has
        ? currentState.bookmarks.filter((id) => id !== topicId)
        : [...currentState.bookmarks, topicId]
    });
  },
  setNote(topicId: string, text: string) {
    appStore.patch({ notes: { ...currentState.notes, [topicId]: text } });
  },
  deleteNote(topicId: string) {
    const next = { ...currentState.notes };
    delete next[topicId];
    appStore.patch({ notes: next });
  },

  // Leitner: Tahu -> box+1 (maks 5), Ragu -> tetap, Belum -> box 1 + lapses+1
  // Interval hari: Box 1: 1, Box 2: 2, Box 3: 4, Box 4: 8, Box 5: 16
  reviewCard(cardId: string, rating: 'tahu' | 'ragu' | 'belum') {
    const current = currentState.cardStates[cardId] || { cardId, box: 1, dueAt: Date.now(), lapses: 0 };
    let nextBox = current.box;
    let lapses = current.lapses;
    if (rating === 'tahu') nextBox = Math.min(5, current.box + 1);
    else if (rating === 'belum') {
      nextBox = 1;
      lapses += 1;
    }
    const daysByBox: Record<number, number> = { 1: 1, 2: 2, 3: 4, 4: 8, 5: 16 };
    const dueAt = Date.now() + (daysByBox[nextBox] || 1) * 86400000;
    appStore.patch({
      cardStates: {
        ...currentState.cardStates,
        [cardId]: { cardId, box: nextBox, dueAt, lapses, lastReviewed: Date.now() }
      }
    });
  },
  resetAllCardProgress() {
    appStore.patch({ cardStates: {} });
  },
  addQuizAttempt(attempt: QuizAttempt) {
    appStore.patch({ quizAttempts: [attempt, ...currentState.quizAttempts].slice(0, 50) });
  },

  // ---------- Data
  exportData(): BackupFile {
    return {
      app: 'pendamping-skripsi',
      version: STATE_VERSION,
      exportedAt: new Date().toISOString(),
      state: currentState
    };
  },
  /** Impor dari teks JSON. Melempar Error berpesan ramah jika file tidak valid. */
  importData(text: string) {
    let parsed: unknown;
    try {
      parsed = JSON.parse(text);
    } catch {
      throw new Error('File bukan JSON yang valid.');
    }
    if (!isObj(parsed) || parsed.app !== 'pendamping-skripsi' || !isObj(parsed.state)) {
      throw new Error('File ini bukan cadangan Jalan Toga.');
    }
    const next = sanitizeState(parsed.state);
    applyTheme(next.themePref);
    commit(next);
  },
  clearAllData() {
    const fresh = createDefaultState();
    applyTheme(fresh.themePref);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* abaikan */
    }
    commit(fresh);
  }
};

export function useAppStore(): AppState {
  return useSyncExternalStore(appStore.subscribe, appStore.getState, appStore.getState);
}

/** Dipakai tes: ganti state langsung tanpa efek samping. */
export function __resetStoreForTests(state: AppState = createDefaultState()) {
  currentState = state;
}
