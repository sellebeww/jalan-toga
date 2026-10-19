import type { RefAuthor, RefType, Reference } from '../types/skripsi';

export type CitationStyle = 'apa' | 'ieee' | 'harvard';

/** Potongan teks; `i` berarti dicetak miring. */
export interface Seg {
  t: string;
  i?: boolean;
}

export const toPlain = (segs: Seg[]) => segs.map((s) => s.t).join('');

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
export const toHtml = (segs: Seg[]) => segs.map((s) => (s.i ? `<i>${esc(s.t)}</i>` : esc(s.t))).join('');

/* ---------- Penulis ---------- */

/** "Nama Belakang, Nama Depan" atau "Nama Depan Nama Belakang"; satu baris satu penulis. */
export function parseAuthors(text: string): RefAuthor[] {
  return text
    .split(/\n|;/)
    .map((l) => l.trim())
    .filter(Boolean)
    .map((line) => {
      if (line.includes(',')) {
        const [family, ...rest] = line.split(',');
        return { family: family.trim(), given: rest.join(',').trim() };
      }
      const parts = line.split(/\s+/);
      if (parts.length === 1) return { family: parts[0], given: '' };
      return { family: parts[parts.length - 1], given: parts.slice(0, -1).join(' ') };
    });
}

export function authorsToText(authors: RefAuthor[]): string {
  return authors.map((a) => (a.given ? `${a.family}, ${a.given}` : a.family)).join('\n');
}

function initialsOf(given: string, withSpace: boolean): string {
  if (!given.trim()) return '';
  const parts = given
    .trim()
    .split(/\s+/)
    .map((p) =>
      p
        .split('-')
        .map((s) => (s ? s.charAt(0).toUpperCase() + '.' : ''))
        .join('-')
    );
  return parts.join(withSpace ? ' ' : '');
}

/* ---------- Utilitas ---------- */

const dash = (pages?: string) => (pages ? pages.replace(/\s*[-–—]+\s*/g, '–') : '');

function doiUrl(doi?: string): string {
  if (!doi) return '';
  const d = doi.trim().replace(/^https?:\/\/(dx\.)?doi\.org\//i, '').replace(/^doi:\s*/i, '');
  return `https://doi.org/${d}`;
}

const endDot = (s: string) => (/[.?!]$/.test(s.trim()) ? s.trim() : `${s.trim()}.`);

const MONTHS_EN = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];
const MONTHS_ID = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

function accessedParts(key?: string) {
  if (!key || !/^\d{4}-\d{2}-\d{2}$/.test(key)) return null;
  const [y, m, d] = key.split('-').map(Number);
  return { y, m, d };
}

/* ---------- APA 7 ---------- */

function apaAuthors(authors: RefAuthor[]): string {
  const fmt = authors.map((a) => (a.given ? `${a.family}, ${initialsOf(a.given, true)}` : a.family));
  if (fmt.length === 0) return '';
  if (fmt.length === 1) return fmt[0];
  if (fmt.length <= 20) return `${fmt.slice(0, -1).join(', ')}, & ${fmt[fmt.length - 1]}`;
  return `${fmt.slice(0, 19).join(', ')}, ... ${fmt[fmt.length - 1]}`;
}

function formatApa(r: Reference): Seg[] {
  const au = apaAuthors(r.authors);
  const year = r.year?.trim() || 'n.d.';
  const head: Seg[] = au ? [{ t: `${endDot(au)} (${year}). ` }] : [];
  const noAuthorYear: Seg[] = au ? [] : [];
  const link = r.doi ? doiUrl(r.doi) : r.url?.trim() || '';
  const tail: Seg[] = link ? [{ t: ` ${link}` }] : [];
  const title = r.title.trim();

  switch (r.type) {
    case 'jurnal': {
      const vol = r.volume ? [{ t: ', ' }, { t: r.volume, i: true }] : [];
      const issue = r.issue ? [{ t: `(${r.issue})` }] : [];
      const pages = r.pages ? [{ t: `, ${dash(r.pages)}` }] : [];
      const body: Seg[] = [{ t: `${endDot(title)} ` }, { t: r.container.trim(), i: true }, ...vol, ...issue, ...pages, { t: '.' }];
      return au ? [...head, ...body, ...tail] : [{ t: `${endDot(title)} (${year}). ` }, { t: r.container.trim(), i: true }, ...vol, ...issue, ...pages, { t: '.' }, ...tail];
    }
    case 'buku': {
      const ed = r.edition ? ` (${r.edition} ed.)` : '';
      const pub = r.publisher ? ` ${endDot(r.publisher)}` : '';
      if (au) return [...head, { t: title, i: true }, { t: `${ed}.${pub}` }, ...tail];
      return [{ t: title, i: true }, { t: `${ed}. (${year}).${pub}` }, ...tail];
    }
    case 'prosiding': {
      const pages = r.pages ? ` (pp. ${dash(r.pages)})` : '';
      const pub = r.publisher ? ` ${endDot(r.publisher)}` : '';
      const mid: Seg[] = [{ t: `${endDot(title)} In ` }, { t: r.container.trim(), i: true }, { t: `${pages}.${pub}` }];
      return au ? [...head, ...mid, ...tail] : [{ t: `${endDot(title)} (${year}). In ` }, { t: r.container.trim(), i: true }, { t: `${pages}.${pub}` }, ...tail];
    }
    case 'web': {
      const site = r.container ? ` ${endDot(r.container)}` : '';
      if (au) return [...head, { t: title, i: true }, { t: `.${site}` }, ...tail];
      return [{ t: title, i: true }, { t: `. (${year}).${site}` }, ...tail];
    }
    case 'skripsi': {
      const uni = r.container ? `Skripsi, ${r.container.trim()}` : 'Skripsi tidak dipublikasikan';
      const repo = r.publisher ? ` ${endDot(r.publisher)}` : '';
      if (au) return [...head, { t: title, i: true }, { t: ` [${uni}].${repo}` }, ...tail];
      return [{ t: title, i: true }, { t: ` [${uni}]. (${year}).${repo}` }, ...tail];
    }
    case 'laporan': {
      const pub = r.publisher || r.container ? ` ${endDot((r.publisher || r.container).trim())}` : '';
      if (au) return [...head, { t: title, i: true }, { t: `.${pub}` }, ...tail];
      return [{ t: title, i: true }, { t: `. (${year}).${pub}` }, ...tail];
    }
  }
  void noAuthorYear;
  return head;
}

function apaInText(r: Reference): string {
  const year = r.year?.trim() || 'n.d.';
  const fam = r.authors.map((a) => a.family);
  if (fam.length === 0) return `(${r.title.split(/\s+/).slice(0, 4).join(' ')}…, ${year})`;
  if (fam.length === 1) return `(${fam[0]}, ${year})`;
  if (fam.length === 2) return `(${fam[0]} & ${fam[1]}, ${year})`;
  return `(${fam[0]} et al., ${year})`;
}

/* ---------- Harvard ---------- */

function harvardAuthors(authors: RefAuthor[]): string {
  const fmt = authors.map((a) => (a.given ? `${a.family}, ${initialsOf(a.given, false)}` : a.family));
  if (fmt.length === 0) return '';
  if (fmt.length === 1) return fmt[0];
  return `${fmt.slice(0, -1).join(', ')} and ${fmt[fmt.length - 1]}`;
}

function formatHarvard(r: Reference): Seg[] {
  const au = harvardAuthors(r.authors) || r.container || '';
  const year = r.year?.trim() || 'n.d.';
  const head = `${au} (${year}) `;
  const title = r.title.trim();
  const url = r.url ? `Available at: ${r.url}` : '';
  const doi = r.doi ? ` doi:${doiUrl(r.doi).replace('https://doi.org/', '')}` : '';
  const acc = accessedParts(r.accessed);
  const accessed = acc ? ` (Accessed: ${acc.d} ${MONTHS_EN[acc.m - 1].replace('.', '')} ${acc.y})` : '';

  switch (r.type) {
    case 'jurnal': {
      const vol = r.volume ? `, ${r.volume}` : '';
      const issue = r.issue ? `(${r.issue})` : '';
      const pages = r.pages ? `, pp. ${dash(r.pages)}` : '';
      return [{ t: `${head}'${title}', ` }, { t: r.container.trim(), i: true }, { t: `${vol}${issue}${pages}.${doi}` }];
    }
    case 'buku': {
      const ed = r.edition ? ` ${r.edition} edn.` : '';
      const pub = [r.city, r.publisher].filter(Boolean).join(': ');
      return [{ t: head }, { t: title, i: true }, { t: `.${ed}${pub ? ` ${pub}.` : ''}` }];
    }
    case 'prosiding': {
      const pages = r.pages ? `, pp. ${dash(r.pages)}` : '';
      return [{ t: `${head}'${title}', in ` }, { t: r.container.trim(), i: true }, { t: `${pages}.${r.publisher ? ` ${r.publisher}.` : ''}` }];
    }
    case 'web':
      return [{ t: head }, { t: title, i: true }, { t: `. ${r.container ? `${r.container}. ` : ''}${url}${accessed}.` }];
    case 'skripsi':
      return [{ t: head }, { t: title, i: true }, { t: `. ${r.container ? `Skripsi. ${r.container}.` : 'Skripsi tidak dipublikasikan.'}${url ? ` ${url}` : ''}` }];
    case 'laporan':
      return [{ t: head }, { t: title, i: true }, { t: `. ${[r.city, r.publisher || r.container].filter(Boolean).join(': ')}${url ? `. ${url}` : ''}.` }];
  }
  return [{ t: head + title }];
}

function harvardInText(r: Reference): string {
  const year = r.year?.trim() || 'n.d.';
  const fam = r.authors.map((a) => a.family);
  if (fam.length === 0) return `(${r.container || r.title.split(/\s+/).slice(0, 3).join(' ')} ${year})`;
  if (fam.length === 1) return `(${fam[0]} ${year})`;
  if (fam.length === 2) return `(${fam[0]} and ${fam[1]} ${year})`;
  return `(${fam[0]} et al. ${year})`;
}

/* ---------- IEEE ---------- */

function ieeeAuthors(authors: RefAuthor[]): string {
  const fmt = authors.map((a) => (a.given ? `${initialsOf(a.given, true)} ${a.family}` : a.family));
  if (fmt.length === 0) return '';
  if (fmt.length === 1) return fmt[0];
  if (fmt.length === 2) return `${fmt[0]} and ${fmt[1]}`;
  if (fmt.length > 6) return `${fmt[0]} et al.`;
  return `${fmt.slice(0, -1).join(', ')}, and ${fmt[fmt.length - 1]}`;
}

function formatIeee(r: Reference, index: number): Seg[] {
  const num = `[${index}] `;
  const au = ieeeAuthors(r.authors);
  const auPart = au ? `${au}, ` : '';
  const title = r.title.trim();
  const year = r.year?.trim() || 'n.d.';
  const doi = r.doi ? `, doi: ${doiUrl(r.doi).replace('https://doi.org/', '')}` : '';
  const acc = accessedParts(r.accessed);
  const accessed = acc ? ` (accessed ${MONTHS_EN[acc.m - 1]} ${acc.d}, ${acc.y})` : '';

  switch (r.type) {
    case 'jurnal': {
      const parts = [r.volume ? `vol. ${r.volume}` : '', r.issue ? `no. ${r.issue}` : '', r.pages ? `pp. ${dash(r.pages)}` : '', year].filter(Boolean);
      return [{ t: `${num}${auPart}"${title}," ` }, { t: r.container.trim(), i: true }, { t: `, ${parts.join(', ')}${doi}.` }];
    }
    case 'buku': {
      const ed = r.edition ? `, ${r.edition} ed` : '';
      const pub = [r.city, r.publisher].filter(Boolean).join(': ');
      return [{ t: `${num}${auPart}` }, { t: title, i: true }, { t: `${ed}. ${pub ? `${pub}, ` : ''}${year}.` }];
    }
    case 'prosiding': {
      const pages = r.pages ? `, pp. ${dash(r.pages)}` : '';
      return [{ t: `${num}${auPart}"${title}," in ` }, { t: r.container.trim(), i: true }, { t: `${r.city ? `, ${r.city}` : ''}, ${year}${pages}${doi}.` }];
    }
    case 'web':
      return [{ t: `${num}${auPart}"${title}," ` }, { t: r.container || 'Website', i: true }, { t: `. ${r.url ? `${r.url}` : ''}${accessed}.` }];
    case 'skripsi':
      return [{ t: `${num}${auPart}"${title}," Skripsi, ${r.container || 'Universitas'}, ${r.city ? `${r.city}, ` : ''}${year}.` }];
    case 'laporan':
      return [{ t: `${num}${auPart}"${title}," ${[r.publisher || r.container, r.city].filter(Boolean).join(', ')}, ${year}.${r.url ? ` ${r.url}` : ''}` }];
  }
  return [{ t: num + title }];
}

/* ---------- API publik ---------- */

export function formatReference(r: Reference, style: CitationStyle, index = 1): Seg[] {
  const segs = style === 'apa' ? formatApa(r) : style === 'harvard' ? formatHarvard(r) : formatIeee(r, index);
  // rapikan spasi ganda
  return segs.map((s) => ({ ...s, t: s.t.replace(/\s{2,}/g, ' ') }));
}

export function formatInText(r: Reference, style: CitationStyle, index = 1): string {
  if (style === 'ieee') return `[${index}]`;
  return style === 'apa' ? apaInText(r) : harvardInText(r);
}

const sortKey = (r: Reference) => `${(r.authors[0]?.family || r.title).toLowerCase()}|${r.year}`;

export interface BibliographyEntry {
  ref: Reference;
  segs: Seg[];
  index: number;
}

/** Daftar pustaka siap tempel: APA/Harvard urut abjad, IEEE urut tambah (nomor = urutan kemunculan). */
export function buildBibliography(refs: Reference[], style: CitationStyle): BibliographyEntry[] {
  const ordered =
    style === 'ieee' ? [...refs].sort((a, b) => a.createdAt - b.createdAt) : [...refs].sort((a, b) => sortKey(a).localeCompare(sortKey(b), 'id'));
  return ordered.map((ref, i) => ({ ref, index: i + 1, segs: formatReference(ref, style, i + 1) }));
}

export const refTypeLabels: Record<RefType, string> = {
  jurnal: 'Artikel jurnal',
  buku: 'Buku',
  prosiding: 'Prosiding / konferensi',
  web: 'Situs web / artikel daring',
  skripsi: 'Skripsi / tesis',
  laporan: 'Laporan / dokumen lembaga'
};

export const styleLabels: Record<CitationStyle, string> = {
  apa: 'APA 7',
  ieee: 'IEEE',
  harvard: 'Harvard'
};

export { MONTHS_ID };
