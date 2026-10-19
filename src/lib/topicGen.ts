import type { Major } from '../data/majors';

export type IdeaMode = 'kuantitatif' | 'kualitatif' | 'pengembangan';

const SMALL = new Set([
  'di', 'ke', 'dari', 'dan', 'pada', 'untuk', 'terhadap', 'dengan', 'yang', 'atau', 'dalam', 'oleh', 'serta', 'sebagai', 'antara', 'secara', 'tentang', 'melalui'
]);
const PRESERVE = new Set(['aureus', 'coli', 'subtilis']);

/** Title Case ala judul skripsi: kata kecil tetap huruf kecil, singkatan/huruf besar dipertahankan. */
export function titleCase(text: string): string {
  return text
    .split(/(\s+)/)
    .map((tok, i, arr) => {
      if (/^\s+$/.test(tok) || tok === '') return tok;
      if (/[A-Z\[\]]/.test(tok) || /\d/.test(tok) || PRESERVE.has(tok.toLowerCase())) return tok;
      const isFirst = arr.slice(0, i).every((t) => /^\s*$/.test(t));
      if (!isFirst && SMALL.has(tok.toLowerCase())) return tok;
      return tok.charAt(0).toUpperCase() + tok.slice(1);
    })
    .join('');
}

/** PRNG deterministik agar tombol "acak lagi" menghasilkan urutan berbeda tapi bisa diuji. */
export function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pick<T>(rng: () => number, arr: T[]): T {
  return arr[Math.floor(rng() * arr.length)];
}

function pickDifferent<T>(rng: () => number, arr: T[], not: T): T {
  if (arr.length <= 1) return arr[0];
  let v = pick(rng, arr);
  let guard = 0;
  while (v === not && guard++ < 8) v = pick(rng, arr);
  return v;
}

export function generateIdeas(
  major: Major,
  clusterIds: string[],
  mode: IdeaMode,
  count = 6,
  seed = 1
): string[] {
  const clusters = major.minat.filter((c) => clusterIds.length === 0 || clusterIds.includes(c.id));
  if (clusters.length === 0) return [];
  const rng = mulberry32(seed * 9973 + clusters.length * 31 + count);
  const out: string[] = [];
  const seen = new Set<string>();
  let attempts = 0;

  while (out.length < count && attempts < count * 12) {
    attempts += 1;
    const c = pick(rng, clusters);
    const o = pick(rng, c.objek);
    let title = '';

    if (mode === 'kuantitatif') {
      const x = pick(rng, c.x);
      const y = pick(rng, c.y);
      const x2 = pickDifferent(rng, c.x, x);
      const form = Math.floor(rng() * 4);
      if (form === 0) title = `Pengaruh ${x} terhadap ${y} pada ${o}`;
      else if (form === 1) title = `Hubungan antara ${x} dan ${y} pada ${o}`;
      else if (form === 2 && x2 !== x) title = `Pengaruh ${x} dan ${x2} terhadap ${y} pada ${o}`;
      else title = `Analisis Pengaruh ${x} terhadap ${y} pada ${o}`;
    } else {
      const pool = mode === 'kualitatif' ? c.kualitatif : c.pengembangan;
      const tpl = pick(rng, pool);
      title = tpl.replace('{o}', o);
    }

    title = titleCase(title);
    if (!seen.has(title)) {
      seen.add(title);
      out.push(title);
    }
  }
  return out;
}

export interface FormulationInput {
  mode: 'pengaruh' | 'hubungan' | 'perbedaan' | 'deskriptif' | 'fenomena' | 'pengembangan';
  x: string;
  y: string;
  z: string;
}

export interface Formulation {
  judul: string;
  rumusan: string[];
  tujuan: string[];
  hipotesis: string[];
}

const clean = (s: string) => s.trim().replace(/\s+/g, ' ').replace(/[.?!]+$/, '');

/** Rumus penyusunan judul, rumusan masalah, tujuan, dan hipotesis yang selalu selaras. */
export function buildFormulation({ mode, x, y, z }: FormulationInput): Formulation {
  const X = clean(x) || '[variabel X]';
  const Y = clean(y) || '[variabel Y]';
  const Z = clean(z) || '[objek/lokasi penelitian]';

  switch (mode) {
    case 'pengaruh':
      return {
        judul: titleCase(`Pengaruh ${X} terhadap ${Y} pada ${Z}`),
        rumusan: [`Apakah ${X} berpengaruh terhadap ${Y} pada ${Z}?`, `Seberapa besar pengaruh ${X} terhadap ${Y} pada ${Z}?`],
        tujuan: [`Menganalisis pengaruh ${X} terhadap ${Y} pada ${Z}.`, `Mengetahui besarnya pengaruh ${X} terhadap ${Y} pada ${Z}.`],
        hipotesis: [
          `H0: ${X} tidak berpengaruh signifikan terhadap ${Y} pada ${Z}.`,
          `Ha: ${X} berpengaruh signifikan terhadap ${Y} pada ${Z}.`
        ]
      };
    case 'hubungan':
      return {
        judul: titleCase(`Hubungan antara ${X} dan ${Y} pada ${Z}`),
        rumusan: [`Apakah terdapat hubungan antara ${X} dan ${Y} pada ${Z}?`, `Bagaimana arah dan kekuatan hubungan antara ${X} dan ${Y} pada ${Z}?`],
        tujuan: [`Mengetahui hubungan antara ${X} dan ${Y} pada ${Z}.`, `Menentukan arah dan kekuatan hubungan ${X} dengan ${Y} pada ${Z}.`],
        hipotesis: [
          `H0: Tidak terdapat hubungan yang signifikan antara ${X} dan ${Y} pada ${Z}.`,
          `Ha: Terdapat hubungan yang signifikan antara ${X} dan ${Y} pada ${Z}.`
        ]
      };
    case 'perbedaan':
      return {
        judul: titleCase(`Perbedaan ${Y} Ditinjau dari ${X} pada ${Z}`),
        rumusan: [`Apakah terdapat perbedaan ${Y} ditinjau dari ${X} pada ${Z}?`],
        tujuan: [`Mengetahui perbedaan ${Y} ditinjau dari ${X} pada ${Z}.`],
        hipotesis: [
          `H0: Tidak terdapat perbedaan ${Y} yang signifikan ditinjau dari ${X} pada ${Z}.`,
          `Ha: Terdapat perbedaan ${Y} yang signifikan ditinjau dari ${X} pada ${Z}.`
        ]
      };
    case 'deskriptif':
      return {
        judul: titleCase(`Analisis ${Y} pada ${Z}`),
        rumusan: [`Bagaimana gambaran ${Y} pada ${Z}?`, `Faktor apa saja yang berkaitan dengan ${Y} pada ${Z}?`],
        tujuan: [`Mendeskripsikan ${Y} pada ${Z}.`, `Mengidentifikasi faktor yang berkaitan dengan ${Y} pada ${Z}.`],
        hipotesis: ['Penelitian deskriptif umumnya tidak memakai hipotesis statistik. Tanyakan pembimbing bila prodi mewajibkan.']
      };
    case 'fenomena':
      return {
        judul: titleCase(`${X} pada ${Z}: Studi ${Y || 'Kasus'}`),
        rumusan: [`Bagaimana ${X} pada ${Z}?`, `Mengapa ${X} terjadi pada ${Z}, menurut pandangan informan?`, `Apa saja faktor pendukung dan penghambat ${X} pada ${Z}?`],
        tujuan: [`Mendeskripsikan ${X} pada ${Z}.`, `Menganalisis alasan dan makna ${X} menurut informan.`, `Mengidentifikasi faktor pendukung dan penghambat ${X}.`],
        hipotesis: ['Penelitian kualitatif tidak memakai hipotesis statistik; gunakan fokus penelitian dan pertanyaan penelitian.']
      };
    case 'pengembangan':
      return {
        judul: titleCase(`Pengembangan ${X} untuk ${Z}`),
        rumusan: [
          `Bagaimana proses pengembangan ${X} untuk ${Z}?`,
          `Bagaimana kelayakan ${X} menurut ahli (validitas)?`,
          `Bagaimana kepraktisan dan keefektifan ${X} menurut pengguna?`
        ],
        tujuan: [`Mengembangkan ${X} untuk ${Z}.`, `Menguji kelayakan ${X} melalui validasi ahli.`, `Mengetahui kepraktisan dan keefektifan ${X} pada ${Z}.`],
        hipotesis: ['R&D umumnya memakai kriteria kelayakan (valid, praktis, efektif), bukan hipotesis H0/Ha, kecuali pada uji efektivitas.']
      };
  }
}
