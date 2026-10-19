export interface ToastMessage {
  id: number;
  title: string;
  body?: string;
  tone: 'info' | 'success' | 'badge' | 'warn';
}

type Listener = (t: ToastMessage) => void;

const listeners = new Set<Listener>();
let counter = 0;

export function subscribeToasts(fn: Listener): () => void {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}

export function toast(title: string, opts: { body?: string; tone?: ToastMessage['tone'] } = {}) {
  const msg: ToastMessage = { id: ++counter, title, body: opts.body, tone: opts.tone ?? 'info' };
  listeners.forEach((l) => l(msg));
}
