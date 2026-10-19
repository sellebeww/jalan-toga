import React, { useState } from 'react';
import { BookOpen, Copy, Check, AlertTriangle, FileText, CheckCircle2 } from 'lucide-react';

export const IEEECitationBuilder: React.FC = () => {
  const [docType, setDocType] = useState<'article' | 'book' | 'proceeding'>('article');
  const [citationNumber, setCitationNumber] = useState<number>(1);
  const [authorInitials, setAuthorInitials] = useState<string>('A.');
  const [authorLastName, setAuthorLastName] = useState<string>('Al Muhairy');
  const [title, setTitle] = useState<string>('Evaluasi Algoritma Temu Balik Informasi');
  const [containerTitle, setContainerTitle] = useState<string>('Jurnal Sistem Komputer'); // Journal or Book title
  const [city] = useState<string>('Jakarta'); // belum ada input kota; lihat docs/audit/AUDIT_REPORT.md
  const [publisher, setPublisher] = useState<string>('Informatika Press');
  const [volume, setVolume] = useState<string>('12');
  const [issue, setIssue] = useState<string>('2');
  const [pages, setPages] = useState<string>('45-52');
  const [year, setYear] = useState<string>('2025');

  const [copied, setCopied] = useState(false);

  // Citation order checker state
  const [textToCheck, setTextToCheck] = useState<string>(
    'Sistem lama masih lambat [2]. Namun menurut penelitian awal [1], penambahan indeks mempermudah pencarian [3].'
  );

  let formattedCitation = '';
  if (docType === 'book') {
    formattedCitation = `[${citationNumber}] ${authorInitials} ${authorLastName}, ${containerTitle || title}. ${city}: ${publisher}, ${year}.`;
  } else if (docType === 'article') {
    formattedCitation = `[${citationNumber}] ${authorInitials} ${authorLastName}, "${title}," ${containerTitle}, vol. ${volume}, no. ${issue}, pp. ${pages}, ${year}.`;
  } else {
    formattedCitation = `[${citationNumber}] ${authorInitials} ${authorLastName}, "${title}," in Proc. ${containerTitle}, ${year}, pp. ${pages}.`;
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedCitation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Citation Order Checking Logic
  const extractCitationNumbers = (str: string): number[] => {
    const regex = /\[(\d+)\]/g;
    const matches: number[] = [];
    let match;
    while ((match = regex.exec(str)) !== null) {
      matches.push(parseInt(match[1]));
    }
    return matches;
  };

  const citationsFound = extractCitationNumbers(textToCheck);
  const seenNumbers = new Set<number>();
  let hasOrderError = false;
  let orderErrorMessage = '';
  let highestSeen = 0;

  for (const num of citationsFound) {
    if (!seenNumbers.has(num)) {
      if (num !== highestSeen + 1) {
        hasOrderError = true;
        orderErrorMessage = `Peringatan IEEE: Sitasi [${num}] muncul sebelum nomor [${highestSeen + 1}] diperkenalkan! Dalam IEEE, nomor sitasi WAJIB berurutan 1, 2, 3 sesuai kemunculan pertama.`;
        break;
      }
      highestSeen = num;
      seenNumbers.add(num);
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-xs uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>Alat Interaktif #9</span>
          </div>
          <h3 className="font-heading font-bold text-xl text-stone-900 dark:text-stone-100 mt-1">
            IEEE Citation Builder & Order Checker
          </h3>
          <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
            Penyusun entri sitasi format IEEE standar dan pengecek urutan penomoran sitasi dalam paragraf
          </p>
        </div>
      </div>

      {/* Type Selector Tabs */}
      <div className="flex gap-2 p-1 bg-stone-100 dark:bg-stone-900/60 rounded-xl mb-6 max-w-md">
        <button
          onClick={() => setDocType('article')}
          className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
            docType === 'article'
              ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs'
              : 'text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
          }`}
        >
          Artikel Jurnal
        </button>
        <button
          onClick={() => setDocType('book')}
          className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
            docType === 'book'
              ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs'
              : 'text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
          }`}
        >
          Buku Teks
        </button>
        <button
          onClick={() => setDocType('proceeding')}
          className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
            docType === 'proceeding'
              ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs'
              : 'text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
          }`}
        >
          Makalah Prosiding
        </button>
      </div>

      {/* Citation Form */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <div>
          <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block mb-1">
            Nomor Sitasi:
          </label>
          <input
            type="number"
            min="1"
            value={citationNumber}
            onChange={(e) => setCitationNumber(parseInt(e.target.value) || 1)}
            className="w-full px-3 py-1.5 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-slate-900 text-stone-900 dark:text-stone-100 font-mono text-xs focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block mb-1">
            Inisial Nama Depan:
          </label>
          <input
            type="text"
            value={authorInitials}
            onChange={(e) => setAuthorInitials(e.target.value)}
            placeholder="A."
            className="w-full px-3 py-1.5 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-slate-900 text-stone-900 dark:text-stone-100 font-mono text-xs focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block mb-1">
            Nama Keluarga (Last Name):
          </label>
          <input
            type="text"
            value={authorLastName}
            onChange={(e) => setAuthorLastName(e.target.value)}
            placeholder="Al Muhairy"
            className="w-full px-3 py-1.5 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-slate-900 text-stone-900 dark:text-stone-100 font-mono text-xs focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block mb-1">
            Tahun Penerbitan:
          </label>
          <input
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="2025"
            className="w-full px-3 py-1.5 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-slate-900 text-stone-900 dark:text-stone-100 font-mono text-xs focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block mb-1">
            {docType === 'book' ? 'Judul Buku:' : 'Judul Artikel / Makalah:'}
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-1.5 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-slate-900 text-stone-900 dark:text-stone-100 text-xs focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block mb-1">
            {docType === 'book'
              ? 'Penerbit & Kota:'
              : docType === 'article'
              ? 'Nama Jurnal Ilmiah:'
              : 'Nama Konferensi (Proc.):'}
          </label>
          <input
            type="text"
            value={docType === 'book' ? `${publisher}` : containerTitle}
            onChange={(e) => {
              if (docType === 'book') setPublisher(e.target.value);
              else setContainerTitle(e.target.value);
            }}
            className="w-full px-3 py-1.5 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-slate-900 text-stone-900 dark:text-stone-100 text-xs focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {docType !== 'book' && (
          <>
            <div>
              <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block mb-1">
                Volume:
              </label>
              <input
                type="text"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                placeholder="12"
                className="w-full px-3 py-1.5 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-slate-900 text-stone-900 dark:text-stone-100 font-mono text-xs focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block mb-1">
                Issue / Nomor:
              </label>
              <input
                type="text"
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                placeholder="2"
                className="w-full px-3 py-1.5 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-slate-900 text-stone-900 dark:text-stone-100 font-mono text-xs focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block mb-1">
                Halaman (pp.):
              </label>
              <input
                type="text"
                value={pages}
                onChange={(e) => setPages(e.target.value)}
                placeholder="45-52"
                className="w-full px-3 py-1.5 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-slate-900 text-stone-900 dark:text-stone-100 font-mono text-xs focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </>
        )}
      </div>

      {/* Formatted IEEE Output Box */}
      <div className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/40 dark:bg-indigo-950/20 mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold uppercase text-indigo-700 dark:text-indigo-300 font-mono">
            Keluaran Format Referensi IEEE (Siap Salin):
          </span>
          <button
            onClick={handleCopy}
            className="px-2.5 py-1 rounded bg-white dark:bg-[#171A21] border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 text-xs font-semibold flex items-center gap-1 cursor-pointer transition-colors shadow-xs"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Tersalin!' : 'Salin Entri'}</span>
          </button>
        </div>

        <div className="p-3 bg-white dark:bg-[#171A21] rounded-lg border border-indigo-100 dark:border-indigo-900 font-mono text-xs text-stone-900 dark:text-stone-100 leading-relaxed break-all">
          {formattedCitation}
        </div>
      </div>

      {/* Citation Order Checker in Paragraph */}
      <div className="pt-6 border-t border-stone-200 dark:border-stone-800">
        <div className="flex items-center gap-2 mb-2">
          <FileText className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          <h4 className="font-heading font-bold text-sm text-stone-900 dark:text-stone-100">
            Pengecek Urutan Nomor Sitasi IEEE dalam Paragraf
          </h4>
        </div>
        <p className="text-xs text-stone-500 dark:text-stone-400 mb-3">
          Ketik atau tempel teks paragraf Anda yang memuat sitasi kurung siku seperti [1], [2], dsb. untuk mengecek kepatuhan urutan IEEE:
        </p>

        <textarea
          rows={3}
          value={textToCheck}
          onChange={(e) => setTextToCheck(e.target.value)}
          className="w-full p-3 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-900/40 text-stone-900 dark:text-stone-100 text-xs font-mono leading-relaxed focus:ring-2 focus:ring-indigo-500 mb-3"
        />

        {hasOrderError ? (
          <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-xs text-rose-800 dark:text-rose-200 flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold mb-0.5">Urutan Sitasi Tidak Sesuai Standar IEEE!</div>
              <div className="leading-relaxed">{orderErrorMessage}</div>
            </div>
          </div>
        ) : (
          <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-xs text-emerald-800 dark:text-emerald-200 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Urutan nomor sitasi IEEE pada teks di atas sudah runtut dan benar!</span>
          </div>
        )}
      </div>
    </div>
  );
};
