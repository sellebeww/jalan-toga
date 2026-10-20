import React from 'react';
import { Link } from '../../app/router';

const asset = (name: string) => `${import.meta.env.BASE_URL}${name}`;

/** Ikon Jalan Toga tanpa latar; varian gelap topinya terang agar tetap terlihat. */
export const BrandMark: React.FC<{ className?: string }> = ({ className = 'h-9 w-9' }) => (
  <>
    <img src={asset('logo-mark.webp')} alt="" aria-hidden="true" width={144} height={143} decoding="async" className={`${className} object-contain dark:hidden`} />
    <img src={asset('logo-mark-dark.webp')} alt="" aria-hidden="true" width={144} height={143} decoding="async" className={`${className} hidden object-contain dark:block`} />
  </>
);

/** Logo penuh (ikon + nama + tagline) dengan varian terang/gelap. */
export const BrandLogoFull: React.FC<{ className?: string }> = ({ className = 'w-64' }) => (
  <>
    <img src={asset('logo.webp')} alt="Jalan Toga: dari bingung, sampai wisuda" width={864} height={447} className={`${className} h-auto dark:hidden`} />
    <img src={asset('logo-dark.webp')} alt="Jalan Toga: dari bingung, sampai wisuda" width={864} height={447} className={`${className} hidden h-auto dark:block`} />
  </>
);

export const Brand: React.FC<{ compact?: boolean }> = ({ compact }) => (
  <Link to="/" className="flex items-center gap-2.5 rounded-xl" aria-label="Jalan Toga, ke beranda">
    <BrandMark className="h-10 w-12" />
    {!compact && (
      <span className="leading-tight">
        <span className="block font-heading text-[19px] font-extrabold tracking-tight">
          <span className="text-[#10356b] dark:text-slate-50">Jalan</span> <span className="text-teal-600 dark:text-teal-400">Toga</span>
        </span>
        <span className="block text-[11px] font-medium text-slate-500 dark:text-slate-400">Dari bingung, sampai wisuda.</span>
      </span>
    )}
  </Link>
);
