import React from 'react';

/** Maskot "Toga": burung hantu bertoga yang memegang buku. Dekoratif, jadi disembunyikan dari pembaca layar. */
export const Mascot: React.FC<{ className?: string }> = ({ className = 'h-40 w-40' }) => (
  <svg viewBox="0 0 220 220" aria-hidden="true" className={className}>
    {/* gelembung pikiran berisi tumpukan buku */}
    <g className="mascot-think" stroke="#ccc8c2" strokeWidth="1.5">
      <circle cx="150" cy="52" r="4" fill="#fff" />
      <circle cx="160" cy="40" r="6" fill="#fff" />
      <ellipse cx="184" cy="24" rx="26" ry="20" fill="#fff" />
    </g>
    <g>
      <rect x="168" y="28" width="32" height="7" rx="2" fill="#fbb629" />
      <rect x="171" y="21" width="27" height="7" rx="2" fill="#14a597" />
      <rect x="166" y="14" width="30" height="7" rx="2" fill="#5b8def" />
    </g>

    <ellipse cx="108" cy="204" rx="56" ry="8" fill="#000" opacity="0.18" />

    {/* kaki */}
    <ellipse cx="92" cy="198" rx="11" ry="6" fill="#f59e0b" />
    <ellipse cx="124" cy="198" rx="11" ry="6" fill="#f59e0b" />

    {/* badan */}
    <path d="M108 66c40 0 64 34 64 74 0 36-26 60-64 60s-64-24-64-60c0-40 24-74 64-74z" fill="#14a597" />
    <path d="M108 104c26 0 42 20 42 46 0 26-18 44-42 44s-42-18-42-44c0-26 16-46 42-46z" fill="#d3f6ee" />
    <path d="M90 140q6 6 12 0M114 140q6 6 12 0M100 158q8 7 16 0" stroke="#6fdcc7" strokeWidth="3" fill="none" strokeLinecap="round" />

    {/* mata */}
    <circle cx="86" cy="112" r="24" fill="#0a6b62" />
    <circle cx="130" cy="112" r="24" fill="#0a6b62" />
    <circle cx="86" cy="112" r="19" fill="#fff" />
    <circle cx="130" cy="112" r="19" fill="#fff" />
    <g className="mascot-eyes">
      <circle cx="89" cy="114" r="9" fill="#1a1918" />
      <circle cx="127" cy="114" r="9" fill="#1a1918" />
      <circle cx="92" cy="110" r="3.2" fill="#fff" />
      <circle cx="130" cy="110" r="3.2" fill="#fff" />
    </g>
    <path d="M108 124l-7 8 7 8 7-8z" fill="#f59e0b" />
    <ellipse cx="66" cy="132" rx="7" ry="4.5" fill="#fb7185" opacity="0.45" />
    <ellipse cx="150" cy="132" rx="7" ry="4.5" fill="#fb7185" opacity="0.45" />

    {/* buku terbuka + sayap memegang */}
    <path d="M62 166l46 8v24l-46-8z" fill="#fff" />
    <path d="M154 166l-46 8v24l46-8z" fill="#f0eeeb" />
    <path d="M58 168l50 9 50-9v6l-50 9-50-9z" fill="#1d5a9e" />
    <path d="M72 172l28 5M72 179l28 5M116 177l28-5M116 184l28-5" stroke="#ccc8c2" strokeWidth="2" strokeLinecap="round" />
    <ellipse cx="56" cy="160" rx="14" ry="22" transform="rotate(28 56 160)" fill="#0b8579" />
    <ellipse cx="160" cy="160" rx="14" ry="22" transform="rotate(-28 160 160)" fill="#0b8579" />

    {/* toga */}
    <path d="M78 74h60v14c-8 6-20 9-30 9s-22-3-30-9z" fill="#33312e" />
    <path d="M108 46l62 20-62 20-62-20z" fill="#403d3a" />
    <path d="M108 46l62 20-62 6-62-6z" fill="#53504c" opacity="0.6" />
    <circle cx="108" cy="66" r="4" fill="#fbb629" />
    <path d="M108 66l46 10v26" stroke="#fbb629" strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M150 100h8l2 14h-12z" fill="#fbb629" />

    {/* kilau */}
    <path d="M30 70l4 10 10 4-10 4-4 10-4-10-10-4 10-4z" fill="#fbb629" />
    <path d="M196 120l3 6 6 3-6 3-3 6-3-6-6-3 6-3z" fill="#6fdcc7" />
  </svg>
);
