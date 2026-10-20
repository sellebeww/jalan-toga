import { useSyncExternalStore } from 'react';
import { createClient, type User } from '@supabase/supabase-js';
import { appStore } from './store';
import { toast } from './toast';
import { confirmAction } from '../components/common/Confirm';

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined;

/** Tanpa konfigurasi Supabase, aplikasi tetap berjalan sebagai mode lokal tanpa akun. */
export const cloudEnabled = !!(url && key);
// PKCE: hasil OAuth/magic link datang lewat ?code=, tidak bentrok dengan router berbasis hash.
const supabase = cloudEnabled ? createClient(url!, key!, { auth: { flowType: 'pkce' } }) : null;

const GUEST_KEY = 'jalan_toga_guest';
/** Pemilik data lokal + waktu perubahan terakhir, untuk memilih versi terbaru saat masuk. */
const OWNER_KEY = 'jalan_toga_owner';

export type AuthStatus = 'loading' | 'signedOut' | 'guest' | 'signedIn';
export interface AuthState {
  status: AuthStatus;
  user: User | null;
}

const ls = {
  get(k: string) {
    try {
      return localStorage.getItem(k);
    } catch {
      return null;
    }
  },
  set(k: string, v: string) {
    try {
      localStorage.setItem(k, v);
    } catch {
      /* mode privat: abaikan */
    }
  },
  del(k: string) {
    try {
      localStorage.removeItem(k);
    } catch {
      /* abaikan */
    }
  }
};

function readOwner(): { uid: string; at: number } | null {
  try {
    const o = JSON.parse(ls.get(OWNER_KEY) || 'null');
    return o && typeof o.uid === 'string' && typeof o.at === 'number' ? o : null;
  } catch {
    return null;
  }
}

let state: AuthState = { status: cloudEnabled ? 'loading' : 'guest', user: null };
const listeners = new Set<() => void>();
function set(next: AuthState) {
  state = next;
  listeners.forEach((l) => l());
}
const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => {
    listeners.delete(l);
  };
};
export const useAuth = () => useSyncExternalStore(subscribe, () => state, () => state);

// ---------- Sinkronisasi: seluruh state disimpan sebagai satu baris JSON per pengguna.
// shortcut: last-write-wins per perangkat; cukup untuk satu orang, ganti ke merge per-field bila ada kolaborasi.
let stopSync: (() => Promise<void>) | null = null;
let syncErrorShown = false;

async function push(uid: string) {
  if (!supabase) return;
  const { error } = await supabase
    .from('user_state')
    .upsert({ user_id: uid, data: appStore.getState(), updated_at: new Date().toISOString() });
  if (error && !syncErrorShown) {
    syncErrorShown = true;
    toast('Sinkron ke akun gagal', { body: 'Perubahan tetap tersimpan di perangkat ini dan dicoba lagi saat kamu mengubah data.', tone: 'warn' });
  } else if (!error) syncErrorShown = false;
}

function startSync(uid: string) {
  let timer: number | undefined;
  let dirty = false;
  const flush = async () => {
    if (!dirty) return;
    window.clearTimeout(timer);
    dirty = false;
    await push(uid);
  };
  const unsub = appStore.subscribe(() => {
    ls.set(OWNER_KEY, JSON.stringify({ uid, at: Date.now() }));
    dirty = true;
    window.clearTimeout(timer);
    timer = window.setTimeout(() => void flush(), 1500);
  });
  const onHide = () => {
    if (document.visibilityState === 'hidden') void flush();
  };
  document.addEventListener('visibilitychange', onHide);
  stopSync = async () => {
    unsub();
    document.removeEventListener('visibilitychange', onHide);
    await flush();
  };
}

/** Muat data akun. Mengembalikan false bila gagal agar data cloud tidak tertimpa versi lokal yang basi. */
async function hydrate(user: User): Promise<boolean> {
  if (!supabase) return false;
  const { data, error } = await supabase.from('user_state').select('data, updated_at').eq('user_id', user.id).maybeSingle();
  if (error) {
    toast('Data akun belum bisa dimuat', { body: 'Periksa koneksi lalu muat ulang halaman. Sementara itu perubahan tidak disinkronkan.', tone: 'warn' });
    return false;
  }
  const owner = readOwner();
  const local = appStore.getState();
  if (!data) {
    await push(user.id); // akun baru: bawa data tamu (jika ada) ke cloud
  } else if (owner?.uid === user.id) {
    if (Date.parse(data.updated_at) > owner.at) appStore.replaceState(data.data);
    else if (owner.at > Date.parse(data.updated_at)) await push(user.id);
  } else if (local.profile && (data.data as { profile?: unknown } | null)?.profile) {
    const useCloud = await confirmAction({
      title: 'Ada dua versi data',
      body: 'Akun ini sudah punya data skripsi, dan perangkat ini juga punya data dari mode tanpa akun. Pilih data mana yang dipakai. Versi yang tidak dipilih akan ditimpa.',
      confirmLabel: 'Pakai data akun',
      cancelLabel: 'Pakai data perangkat ini'
    });
    if (useCloud) appStore.replaceState(data.data);
    else await push(user.id);
  } else {
    appStore.replaceState(data.data);
  }
  ls.set(OWNER_KEY, JSON.stringify({ uid: user.id, at: Date.now() }));
  return true;
}

async function enter(user: User) {
  if (stopSync) await stopSync();
  stopSync = null;
  set({ status: 'loading', user });
  if (await hydrate(user)) startSync(user.id);
  ls.del(GUEST_KEY);
  set({ status: 'signedIn', user });
}

function leave() {
  // Data dihapus dari perangkat agar akun berikutnya di perangkat ini tidak melihatnya; salinan aman di cloud.
  ls.del(OWNER_KEY);
  appStore.clearAllData();
  set({ status: 'signedOut', user: null });
}

if (supabase) {
  supabase.auth.onAuthStateChange((event, session) => {
    const user = session?.user ?? null;
    // Jangan await panggilan Supabase di dalam callback ini (bisa deadlock); tunda ke tick berikutnya.
    if (user && state.user?.id !== user.id) window.setTimeout(() => void enter(user), 0);
    else if (user) set({ ...state, user });
    else if (event === 'SIGNED_OUT' && state.status === 'signedIn') leave();
    else if (state.status === 'loading') set({ status: ls.get(GUEST_KEY) ? 'guest' : 'signedOut', user: null });
  });
}

// ---------- Aksi
const redirectTo = () => `${window.location.origin}${import.meta.env.BASE_URL}`;

/** Pesan ramah untuk galat Supabase yang paling sering muncul. */
export function authErrorMessage(message: string): string {
  const m = message.toLowerCase();
  if (m.includes('invalid login credentials')) return 'Email atau password salah.';
  if (m.includes('email not confirmed')) return 'Email belum dikonfirmasi. Buka link di kotak masuk emailmu dulu.';
  if (m.includes('already registered')) return 'Email ini sudah terdaftar. Silakan masuk.';
  if (m.includes('provider is not enabled')) return 'Login dengan cara ini belum diaktifkan. Pakai email dulu, ya.';
  if (m.includes('password should be')) return 'Password minimal 6 karakter.';
  if (m.includes('rate limit') || m.includes('security purposes')) return 'Terlalu banyak percobaan. Tunggu sebentar lalu coba lagi.';
  if (m.includes('failed to fetch') || m.includes('network')) return 'Tidak ada koneksi internet. Coba lagi saat online.';
  return 'Terjadi kesalahan. Coba lagi sebentar lagi.';
}

async function run<T extends { error: { message: string } | null }>(p: Promise<T>): Promise<T> {
  let res: T;
  try {
    res = await p;
  } catch (e) {
    throw new Error(authErrorMessage(e instanceof Error ? e.message : String(e)));
  }
  if (res.error) throw new Error(authErrorMessage(res.error.message));
  return res;
}

export async function signInWithGoogle() {
  await run(supabase!.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: redirectTo() } }));
}

export async function signInWithPassword(email: string, password: string) {
  await run(supabase!.auth.signInWithPassword({ email, password }));
}

/** Mengembalikan true bila akun perlu konfirmasi email dulu. */
export async function signUp(email: string, password: string): Promise<boolean> {
  const { data } = await run(supabase!.auth.signUp({ email, password, options: { emailRedirectTo: redirectTo() } }));
  return !data.session;
}

export async function sendMagicLink(email: string) {
  await run(supabase!.auth.signInWithOtp({ email, options: { emailRedirectTo: redirectTo() } }));
}

export function continueAsGuest() {
  ls.set(GUEST_KEY, '1');
  set({ status: 'guest', user: null });
}

/** Dari mode tamu ke layar masuk; data lokal tetap ada dan ikut terunggah saat akun baru dibuat. */
export function requestLogin() {
  ls.del(GUEST_KEY);
  set({ status: 'signedOut', user: null });
}

export async function signOut() {
  if (stopSync) await stopSync();
  stopSync = null;
  await supabase?.auth.signOut();
  if (state.status === 'signedIn') leave();
}
