import { useSyncExternalStore } from 'react';
import { appStore } from './store';
import { toast } from './toast';

/** Timer pomodoro tingkat modul: tetap berjalan saat pengguna berpindah halaman. */

export type FocusPhase = 'work' | 'short' | 'long';

export interface FocusSettings {
  work: number;
  short: number;
  long: number;
  /** jumlah sesi fokus sebelum istirahat panjang */
  every: number;
}

export interface FocusState {
  phase: FocusPhase;
  running: boolean;
  /** detik tersisa saat jeda; saat berjalan dihitung dari endsAt */
  remaining: number;
  endsAt: number | null;
  completed: number;
  label: string;
  settings: FocusSettings;
}

const SETTINGS_KEY = 'pendamping_skripsi_focus';
export const DEFAULT_SETTINGS: FocusSettings = { work: 25, short: 5, long: 15, every: 4 };

function loadSettings(): FocusSettings {
  try {
    const raw = JSON.parse(localStorage.getItem(SETTINGS_KEY) || 'null');
    if (raw && typeof raw === 'object') {
      const clamp = (v: unknown, d: number, min: number, max: number) => {
        const n = Number(v);
        return Number.isFinite(n) ? Math.min(max, Math.max(min, Math.round(n))) : d;
      };
      return {
        work: clamp(raw.work, 25, 1, 120),
        short: clamp(raw.short, 5, 1, 60),
        long: clamp(raw.long, 15, 1, 90),
        every: clamp(raw.every, 4, 2, 8)
      };
    }
  } catch {
    /* gunakan default */
  }
  return { ...DEFAULT_SETTINGS };
}

const durationOf = (phase: FocusPhase, s: FocusSettings) => (phase === 'work' ? s.work : phase === 'short' ? s.short : s.long) * 60;

let state: FocusState = {
  phase: 'work',
  running: false,
  remaining: durationOf('work', DEFAULT_SETTINGS),
  endsAt: null,
  completed: 0,
  label: '',
  settings: DEFAULT_SETTINGS
};

if (typeof window !== 'undefined') {
  const s = loadSettings();
  state = { ...state, settings: s, remaining: durationOf('work', s) };
}

const listeners = new Set<() => void>();
let interval: number | undefined;
let baseTitle = '';

const emit = () => listeners.forEach((l) => l());
const set = (patch: Partial<FocusState>) => {
  state = { ...state, ...patch };
  emit();
};

export function secondsLeft(s: FocusState = state): number {
  if (s.running && s.endsAt) return Math.max(0, Math.ceil((s.endsAt - Date.now()) / 1000));
  return s.remaining;
}

function beep() {
  try {
    const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new Ctx();
    [0, 0.25, 0.5].forEach((t) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.frequency.value = 880;
      gain.gain.setValueAtTime(0.0001, ctx.currentTime + t);
      gain.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + t + 0.2);
      osc.connect(gain).connect(ctx.destination);
      osc.start(ctx.currentTime + t);
      osc.stop(ctx.currentTime + t + 0.22);
    });
    window.setTimeout(() => ctx.close().catch(() => {}), 1200);
  } catch {
    /* audio tidak tersedia */
  }
}

function setTitle(text: string | null) {
  if (typeof document === 'undefined') return;
  if (text === null) {
    if (baseTitle) document.title = baseTitle;
    baseTitle = '';
    return;
  }
  if (!baseTitle) baseTitle = document.title;
  document.title = text;
}

const fmtTime = (sec: number) => `${String(Math.floor(sec / 60)).padStart(2, '0')}:${String(sec % 60).padStart(2, '0')}`;

function finishPhase() {
  const wasWork = state.phase === 'work';
  beep();
  if (wasWork) {
    const minutes = state.settings.work;
    appStore.addFocusSession(minutes, state.label.trim() || 'Sesi fokus');
    const completed = state.completed + 1;
    const nextPhase: FocusPhase = completed % state.settings.every === 0 ? 'long' : 'short';
    toast('Sesi fokus selesai', { body: `${minutes} menit tercatat. Waktunya istirahat ${nextPhase === 'long' ? 'panjang' : 'singkat'}.`, tone: 'success' });
    notify('Sesi fokus selesai', 'Istirahat dulu, regangkan badan.');
    start(nextPhase, completed);
  } else {
    toast('Istirahat selesai', { body: 'Siap kembali menulis?', tone: 'info' });
    notify('Istirahat selesai', 'Siap lanjut menulis?');
    stopTicking();
    setTitle(null);
    set({ phase: 'work', running: false, endsAt: null, remaining: durationOf('work', state.settings) });
  }
}

function notify(title: string, body: string) {
  try {
    if ('Notification' in window && Notification.permission === 'granted' && document.hidden) new Notification(title, { body });
  } catch {
    /* abaikan */
  }
}

function tick() {
  const left = secondsLeft();
  if (state.running && left <= 0) {
    finishPhase();
    return;
  }
  setTitle(`${fmtTime(left)} · ${state.phase === 'work' ? 'Fokus' : 'Istirahat'}`);
  emit();
}

function startTicking() {
  stopTicking();
  interval = window.setInterval(tick, 500);
}

function stopTicking() {
  if (interval !== undefined) {
    window.clearInterval(interval);
    interval = undefined;
  }
}

function start(phase: FocusPhase, completed = state.completed) {
  const dur = durationOf(phase, state.settings);
  set({ phase, running: true, remaining: dur, endsAt: Date.now() + dur * 1000, completed });
  startTicking();
  tick();
}

export const focusTimer = {
  getState: () => state,
  subscribe(l: () => void) {
    listeners.add(l);
    return () => listeners.delete(l);
  },
  start() {
    if (state.running) return;
    if (state.endsAt === null || state.remaining === durationOf(state.phase, state.settings)) {
      start(state.phase);
    } else {
      set({ running: true, endsAt: Date.now() + state.remaining * 1000 });
      startTicking();
      tick();
    }
  },
  pause() {
    if (!state.running) return;
    const left = secondsLeft();
    stopTicking();
    setTitle(null);
    set({ running: false, remaining: left, endsAt: null });
  },
  reset() {
    stopTicking();
    setTitle(null);
    set({ phase: 'work', running: false, endsAt: null, remaining: durationOf('work', state.settings), completed: 0 });
  },
  skip() {
    if (state.phase === 'work') {
      stopTicking();
      setTitle(null);
      const next: FocusPhase = (state.completed + 1) % state.settings.every === 0 ? 'long' : 'short';
      set({ phase: next, running: false, endsAt: null, remaining: durationOf(next, state.settings) });
    } else {
      stopTicking();
      setTitle(null);
      set({ phase: 'work', running: false, endsAt: null, remaining: durationOf('work', state.settings) });
    }
  },
  setLabel(label: string) {
    set({ label });
  },
  setSettings(patch: Partial<FocusSettings>) {
    const settings = { ...state.settings, ...patch };
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch {
      /* abaikan */
    }
    set({ settings, ...(state.running ? {} : { remaining: durationOf(state.phase, settings), endsAt: null }) });
  }
};

export function useFocusTimer(): FocusState {
  return useSyncExternalStore(focusTimer.subscribe, focusTimer.getState, focusTimer.getState);
}

export const formatClock = fmtTime;
