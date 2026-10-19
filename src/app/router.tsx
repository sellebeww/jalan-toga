import React, { useEffect, useState, useSyncExternalStore } from 'react';

/** Router hash sederhana (#/jalur?kunci=nilai). Tanpa dependensi, aman di hosting statis apa pun. */

function readHash(): string {
  if (typeof window === 'undefined') return '/';
  const raw = window.location.hash.replace(/^#/, '');
  return raw.startsWith('/') ? raw : `/${raw}`;
}

function subscribe(cb: () => void) {
  window.addEventListener('hashchange', cb);
  return () => window.removeEventListener('hashchange', cb);
}

export interface RouteLocation {
  /** path tanpa query, misal /bab/bab-1 */
  path: string;
  segments: string[];
  query: URLSearchParams;
}

let cached: { raw: string; value: RouteLocation } | null = null;

function parse(raw: string): RouteLocation {
  if (cached && cached.raw === raw) return cached.value;
  const [pathPart, queryPart = ''] = raw.split('?');
  const path = pathPart.replace(/\/+$/, '') || '/';
  const value: RouteLocation = {
    path,
    segments: path.split('/').filter(Boolean).map(decodeURIComponent),
    query: new URLSearchParams(queryPart)
  };
  cached = { raw, value };
  return value;
}

export function useLocation(): RouteLocation {
  const raw = useSyncExternalStore(subscribe, readHash, () => '/');
  return parse(raw);
}

export function navigate(to: string, opts: { replace?: boolean; scroll?: boolean } = {}) {
  const target = to.startsWith('/') ? to : `/${to}`;
  if (opts.replace) {
    const full = window.location.pathname + window.location.search + `#${target}`;
    window.history.replaceState(null, '', full);
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  } else if (window.location.hash !== `#${target}`) {
    window.location.hash = target;
  }
  if (opts.scroll !== false) window.scrollTo({ top: 0 });
}

interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to: string;
}

export const Link: React.FC<LinkProps> = ({ to, children, onClick, ...rest }) => (
  <a
    href={`#${to.startsWith('/') ? to : `/${to}`}`}
    onClick={(e) => {
      onClick?.(e);
      if (!e.defaultPrevented) window.scrollTo({ top: 0 });
    }}
    {...rest}
  >
    {children}
  </a>
);

/** Menyetel judul dan deskripsi halaman untuk tab browser, berbagi tautan, dan mesin pencari. */
export function useDocumentMeta(title: string, description?: string) {
  useEffect(() => {
    const full = title === 'Beranda' ? 'Jalan Toga · Dari bingung, sampai wisuda' : `${title} · Jalan Toga`;
    document.title = full;
    const setMeta = (selector: string, value: string) => {
      const el = document.head.querySelector(selector);
      if (el) el.setAttribute('content', value);
    };
    if (description) {
      setMeta('meta[name="description"]', description);
      setMeta('meta[property="og:description"]', description);
    }
    setMeta('meta[property="og:title"]', full);
  }, [title, description]);
}

/** Tab halaman yang bisa dibuka lewat tautan (?tab=nama) dan tetap bisa diganti di halaman. */
export function useTabParam<T extends string>(valid: readonly T[], fallback: T): [T, (t: T) => void] {
  const { query } = useLocation();
  const q = query.get('tab');
  const [tab, setTab] = useState<T>(valid.includes(q as T) ? (q as T) : fallback);
  useEffect(() => {
    if (q && valid.includes(q as T)) setTab(q as T);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q]);
  return [tab, setTab];
}
