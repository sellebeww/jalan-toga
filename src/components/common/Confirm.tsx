import React, { useEffect, useState } from 'react';
import { Modal } from './Modal';

interface ConfirmRequest {
  title: string;
  body?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  danger?: boolean;
  resolve: (ok: boolean) => void;
}

let push: ((r: ConfirmRequest) => void) | null = null;

/** Pengganti window.confirm yang konsisten dengan desain dan aksesibel. */
export function confirmAction(opts: Omit<ConfirmRequest, 'resolve'>): Promise<boolean> {
  return new Promise((resolve) => {
    if (!push) {
      resolve(window.confirm(opts.title));
      return;
    }
    push({ ...opts, resolve });
  });
}

export const ConfirmHost: React.FC = () => {
  const [req, setReq] = useState<ConfirmRequest | null>(null);

  useEffect(() => {
    push = setReq;
    return () => {
      push = null;
    };
  }, []);

  const close = (ok: boolean) => {
    req?.resolve(ok);
    setReq(null);
  };

  return (
    <Modal
      open={!!req}
      onClose={() => close(false)}
      title={req?.title ?? ''}
      size="sm"
      footer={
        <>
          <button type="button" className="btn-soft" onClick={() => close(false)}>
            {req?.cancelLabel ?? 'Batal'}
          </button>
          <button
            type="button"
            className={req?.danger ? 'btn bg-rose-600 text-white hover:bg-rose-700' : 'btn-primary'}
            onClick={() => close(true)}
          >
            {req?.confirmLabel ?? 'Ya, lanjut'}
          </button>
        </>
      }
    >
      {req?.body && <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{req.body}</p>}
    </Modal>
  );
};
