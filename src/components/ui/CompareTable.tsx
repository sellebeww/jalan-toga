import React from 'react';

interface CompareTableProps {
  headers: string[];
  rows: string[][];
  className?: string;
}

export const CompareTable: React.FC<CompareTableProps> = ({ headers, rows, className = '' }) => {
  if (!headers || !rows || rows.length === 0) return null;

  return (
    <div className={`my-6 ${className}`}>
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800">
              {headers.map((header, idx) => (
                <th
                  key={idx}
                  className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 font-heading"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
            {rows.map((row, rIdx) => (
              <tr
                key={rIdx}
                className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
              >
                {row.map((cell, cIdx) => (
                  <td
                    key={cIdx}
                    className={`px-4 py-3 text-slate-700 dark:text-slate-300 ${
                      cIdx === 0 ? 'font-medium text-slate-900 dark:text-slate-100' : ''
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Stacked Card View */}
      <div className="md:hidden space-y-3">
        {rows.map((row, rIdx) => (
          <div
            key={rIdx}
            className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2 text-sm shadow-xs"
          >
            <div className="font-semibold text-indigo-600 dark:text-indigo-400 font-heading pb-1 border-b border-slate-100 dark:border-slate-800">
              {row[0]}
            </div>
            {row.slice(1).map((cell, cIdx) => (
              <div key={cIdx} className="pt-1">
                <span className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold block mb-0.5">
                  {headers[cIdx + 1] || `Kolom ${cIdx + 2}`}
                </span>
                <span className="text-slate-800 dark:text-slate-200">{cell}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
