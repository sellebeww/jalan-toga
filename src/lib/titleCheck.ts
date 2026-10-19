export interface TitleFinding {
  tone: 'good' | 'warn' | 'bad';
  text: string;
}

export interface TitleReport {
  score: number;
  words: number;
  findings: TitleFinding[];
}

const FOCUS_WORDS = [
  'pengaruh', 'hubungan', 'perbedaan', 'analisis', 'pengembangan', 'rancang bangun', 'perancangan', 'implementasi', 'penerapan',
  'strategi', 'efektivitas', 'persepsi', 'evaluasi', 'studi', 'kajian', 'peningkatan', 'faktor', 'dampak', 'optimasi', 'perbandingan', 'pemetaan', 'penciptaan'
];
const OBJECT_MARKERS = [' pada ', ' di ', ' untuk ', ' terhadap ', ' studi kasus', ' kabupaten', ' kota ', ' sma', ' smp', ' sd ', ' ukm', ' umkm', ' puskesmas', ' rumah sakit'];
const VAGUE = ['berbagai', 'beberapa', 'dll', 'dan lain-lain', 'dan sebagainya', 'masalah', 'hal-hal', 'tentang', 'terbaik', 'sangat', 'optimal'];

/** Pemeriksaan heuristik judul. Bukan penilaian akhir; pembimbing yang menentukan. */
export function checkTitle(raw: string): TitleReport {
  const title = raw.trim().replace(/\s+/g, ' ');
  const lower = ` ${title.toLowerCase()} `;
  const words = title ? title.split(' ').length : 0;
  const findings: TitleFinding[] = [];
  let score = 40;

  if (words === 0) return { score: 0, words: 0, findings: [{ tone: 'bad', text: 'Ketik judul terlebih dahulu.' }] };

  if (words < 7) {
    findings.push({ tone: 'bad', text: `Terlalu pendek (${words} kata). Biasanya perlu menyebut fokus dan objek penelitian.` });
    score -= 10;
  } else if (words <= 22) {
    findings.push({ tone: 'good', text: `Panjang pas (${words} kata).` });
    score += 15;
  } else if (words <= 30) {
    findings.push({ tone: 'warn', text: `Agak panjang (${words} kata). Coba padatkan di bawah 25 kata.` });
    score += 5;
  } else {
    findings.push({ tone: 'bad', text: `Terlalu panjang (${words} kata). Judul yang panjang biasanya memuat terlalu banyak hal.` });
    score -= 5;
  }

  const hasFocus = FOCUS_WORDS.some((w) => lower.includes(` ${w}`));
  if (hasFocus) {
    findings.push({ tone: 'good', text: 'Ada kata kerja/penanda jenis penelitian (mis. pengaruh, analisis, pengembangan).' });
    score += 15;
  } else {
    findings.push({ tone: 'warn', text: 'Belum ada penanda jenis penelitian. Tambahkan seperti "Pengaruh...", "Analisis...", atau "Pengembangan...".' });
  }

  const hasObject = OBJECT_MARKERS.some((w) => lower.includes(w));
  if (hasObject) {
    findings.push({ tone: 'good', text: 'Objek atau lokasi penelitian tampak disebut.' });
    score += 15;
  } else {
    findings.push({ tone: 'warn', text: 'Objek/lokasi belum jelas. Tambahkan "pada [objek]" agar ruang lingkup terbaca.' });
  }

  const vague = VAGUE.filter((w) => lower.includes(` ${w} `) || lower.includes(` ${w},`));
  if (vague.length > 0) {
    findings.push({ tone: 'warn', text: `Kata kurang terukur/terlalu umum: ${vague.join(', ')}. Ganti dengan istilah spesifik.` });
    score -= 8;
  } else {
    score += 5;
  }

  if (/\?/.test(title)) {
    findings.push({ tone: 'warn', text: 'Judul berbentuk pertanyaan. Pertanyaan sebaiknya ditaruh di rumusan masalah, bukan judul.' });
    score -= 5;
  }

  const connectors = (lower.match(/ dan /g) ?? []).length;
  if (connectors >= 3) {
    findings.push({ tone: 'warn', text: 'Banyak kata "dan": kemungkinan terlalu banyak variabel/fokus. Pastikan semuanya benar-benar akan diukur.' });
    score -= 5;
  }

  if (/\b(20\d{2}|19\d{2})\b/.test(title) || /(kabupaten|kota|provinsi|desa|kecamatan)/i.test(title)) {
    findings.push({ tone: 'good', text: 'Ada pembatas waktu atau wilayah yang membuat topik terfokus.' });
    score += 5;
  }

  if (title === title.toUpperCase() && words > 3) {
    findings.push({ tone: 'warn', text: 'Seluruh judul huruf kapital. Pakai huruf kapital di awal tiap kata penting saja, kecuali panduan kampus mewajibkan.' });
  }

  return { score: Math.max(0, Math.min(100, score)), words, findings };
}

export function scoreLabel(score: number): { label: string; tone: 'good' | 'warn' | 'bad' } {
  if (score >= 80) return { label: 'Sudah tajam', tone: 'good' };
  if (score >= 55) return { label: 'Cukup, bisa dipertajam', tone: 'warn' };
  return { label: 'Perlu dirombak', tone: 'bad' };
}
