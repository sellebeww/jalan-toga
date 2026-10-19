import React from 'react';
import { RefreshCw, TriangleAlert } from 'lucide-react';
import { appStore } from '../../lib/store';
import { downloadText } from '../common/ui';

interface State {
  error: Error | null;
}

/** Mencegah halaman putih: tampilkan pesan ramah dan jalan keluar (muat ulang / cadangkan data). */
export class ErrorBoundary extends React.Component<{ children: React.ReactNode; resetKey?: string }, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidUpdate(prev: { resetKey?: string }) {
    if (this.state.error && prev.resetKey !== this.props.resetKey) this.setState({ error: null });
  }

  componentDidCatch(error: Error) {
    console.error('Kesalahan tampilan:', error);
  }

  backup = () => {
    try {
      downloadText('cadangan-jalan-toga.json', JSON.stringify(appStore.exportData(), null, 2), 'application/json');
    } catch {
      /* abaikan */
    }
  };

  render() {
    if (!this.state.error) return this.props.children;
    return (
      <div className="mx-auto flex max-w-md flex-col items-center px-6 py-20 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300">
          <TriangleAlert aria-hidden="true" className="h-7 w-7" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Ups, halaman ini bermasalah</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          Datamu aman di perangkat ini. Coba muat ulang halaman. Kalau masih bermasalah, unduh cadangan dulu lalu hubungi pengelola situs.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button className="btn-primary" onClick={() => window.location.reload()}>
            <RefreshCw aria-hidden="true" className="h-4 w-4" /> Muat ulang
          </button>
          <button className="btn-soft" onClick={this.backup}>
            Unduh cadangan data
          </button>
        </div>
        <p className="mt-6 max-w-sm break-words font-mono text-xs text-slate-400">{this.state.error.message}</p>
      </div>
    );
  }
}
