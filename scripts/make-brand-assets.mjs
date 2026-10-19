/**
 * Membuat aset merek (logo tanpa latar, ikon PWA, favicon, gambar OG) dari scripts/logo-source.png.
 * Jalankan: node scripts/make-brand-assets.mjs
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(root, 'scripts/logo-source.png');
const PUB = path.join(root, 'public');
await mkdir(path.join(PUB, 'icons'), { recursive: true });

const { data, info } = await sharp(SRC).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const W = info.width;
const H = info.height;
const px = new Uint8ClampedArray(data);

// ---- warna latar: rata-rata empat sudut
const corners = [[2, 2], [W - 3, 2], [2, H - 3], [W - 3, H - 3]];
const bg = [0, 0, 0];
for (const [x, y] of corners) for (let c = 0; c < 3; c++) bg[c] += px[(y * W + x) * 4 + c] / corners.length;

const dist = (i) => Math.hypot(px[i * 4] - bg[0], px[i * 4 + 1] - bg[1], px[i * 4 + 2] - bg[2]);
const T_BG = 20;

// ---- komponen piksel "mirip latar" (BFS)
const label = new Int32Array(W * H).fill(-1);
const comps = [];
const stack = new Int32Array(W * H);
for (let s = 0; s < W * H; s++) {
  if (label[s] !== -1 || dist(s) > T_BG) continue;
  const id = comps.length;
  let sp = 0;
  stack[sp++] = s;
  label[s] = id;
  let n = 0, sx = 0, sy = 0, touches = false;
  while (sp) {
    const p = stack[--sp];
    const x = p % W, y = (p / W) | 0;
    n++; sx += x; sy += y;
    if (x === 0 || y === 0 || x === W - 1 || y === H - 1) touches = true;
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const nx = x + dx, ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue;
      const q = ny * W + nx;
      if (label[q] === -1 && dist(q) <= T_BG) {
        label[q] = id;
        stack[sp++] = q;
      }
    }
  }
  comps.push({ n, cx: sx / n, cy: sy / n, touches });
}

// Hapus latar yang menyentuh tepi, serta lubang kecil di dalam huruf (x > 600).
// Garis putus-putus jalan di dalam ikon (x <= 600) dipertahankan.
const remove = comps.map((c) => c.touches || c.cx > 600);
const alpha = new Float32Array(W * H).fill(1);
for (let i = 0; i < W * H; i++) if (label[i] !== -1 && remove[label[i]]) alpha[i] = 0;

// ---- haluskan tepi: piksel dekat area transparan diberi alpha parsial dan warnanya di-"unblend"
const near = new Uint8Array(W * H);
const R = 2;
for (let y = 0; y < H; y++)
  for (let x = 0; x < W; x++) {
    if (alpha[y * W + x] !== 0) continue;
    for (let dy = -R; dy <= R; dy++)
      for (let dx = -R; dx <= R; dx++) {
        const nx = x + dx, ny = y + dy;
        if (nx >= 0 && ny >= 0 && nx < W && ny < H) near[ny * W + nx] = 1;
      }
  }
for (let i = 0; i < W * H; i++) {
  if (alpha[i] === 0 || !near[i]) continue;
  const d = dist(i);
  const a = Math.min(1, Math.max(0, (d - T_BG) / 60));
  if (a < 1) {
    alpha[i] = a;
    if (a > 0.02) for (let c = 0; c < 3; c++) px[i * 4 + c] = Math.min(255, Math.max(0, (px[i * 4 + c] - (1 - a) * bg[c]) / a));
  }
}
for (let i = 0; i < W * H; i++) px[i * 4 + 3] = Math.round(alpha[i] * 255);

const toSharp = (buf) => sharp(Buffer.from(buf), { raw: { width: W, height: H, channels: 4 } });
const CLEAR = { r: 0, g: 0, b: 0, alpha: 0 };
const trimPad = (s, pad) => s.trim({ background: CLEAR, threshold: 8 }).extend({ top: pad, bottom: pad, left: pad, right: pad, background: CLEAR });

// ---- logo penuh (tanpa latar), dipangkas
const full = await trimPad(toSharp(px), 24).png().toBuffer();
await sharp(full).toFile(path.join(PUB, 'logo.png'));

// ---- ikon saja: komponen terhubung berpusat di kiri-atas
const fg = new Int32Array(W * H).fill(-1);
const fcomps = [];
for (let s = 0; s < W * H; s++) {
  if (fg[s] !== -1 || px[s * 4 + 3] < 40) continue;
  const id = fcomps.length;
  let sp = 0;
  stack[sp++] = s;
  fg[s] = id;
  let n = 0, sx = 0, sy = 0;
  while (sp) {
    const p = stack[--sp];
    const x = p % W, y = (p / W) | 0;
    n++; sx += x; sy += y;
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, -1], [1, -1], [-1, 1]]) {
      const nx = x + dx, ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue;
      const q = ny * W + nx;
      if (fg[q] === -1 && px[q * 4 + 3] >= 40) {
        fg[q] = id;
        stack[sp++] = q;
      }
    }
  }
  fcomps.push({ n, cx: sx / n, cy: sy / n });
}
const isMark = fcomps.map((c) => c.cx < 700 && c.cy < 700 && c.n > 20);
const mk = new Uint8ClampedArray(px);
for (let i = 0; i < W * H; i++) {
  const k = fg[i];
  if (k !== -1 && isMark[k]) continue;
  const x = i % W, y = (i / W) | 0;
  // tepi halus (alpha parsial) di sekitar ikon tetap dipertahankan
  if (!(k === -1 && x < 725 && y < 700)) mk[i * 4 + 3] = 0;
}
const mark = await trimPad(toSharp(mk), 12).png().toBuffer();
await sharp(mark).toFile(path.join(PUB, 'logo-mark.png'));

// ---- varian mode gelap: navy diterangkan agar terbaca di latar gelap
const dk = new Uint8ClampedArray(px);
const light = [236, 242, 252];
for (let i = 0; i < W * H; i++) {
  const r = dk[i * 4], g = dk[i * 4 + 1], b = dk[i * 4 + 2];
  const x = i % W, y = (i / W) | 0;
  // hanya teks, topi toga, dan tagline; sampul buku biru tidak disentuh
  const inRegion = x >= 730 || y < 470 || (y >= 700 && x >= 530);
  const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  if (inRegion && b > r + 15 && r < 130 && lum < 0.36) {
    const t = Math.min(1, Math.max(0, (0.36 - lum) / 0.1));
    dk[i * 4] = r * (1 - t) + light[0] * t;
    dk[i * 4 + 1] = g * (1 - t) + light[1] * t;
    dk[i * 4 + 2] = b * (1 - t) + light[2] * t;
  }
}
const fullDark = await trimPad(toSharp(dk), 24).png().toBuffer();
await sharp(fullDark).toFile(path.join(PUB, 'logo-dark.png'));

// ---- ikon aplikasi
const CREAM = { r: 251, g: 248, b: 243, alpha: 1 };
async function appIcon(size, markRatio, rounded) {
  const m = await sharp(mark).resize({ width: Math.round(size * markRatio), height: Math.round(size * markRatio), fit: 'inside' }).toBuffer();
  let out = await sharp({ create: { width: size, height: size, channels: 4, background: CREAM } }).composite([{ input: m, gravity: 'center' }]).png().toBuffer();
  if (rounded) {
    const r = Math.round(size * 0.22);
    const mask = Buffer.from(`<svg width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${r}" ry="${r}" fill="#fff"/></svg>`);
    out = await sharp(out).composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer();
  }
  return out;
}
await sharp(await appIcon(192, 0.74, true)).toFile(path.join(PUB, 'icons/icon-192.png'));
await sharp(await appIcon(512, 0.74, true)).toFile(path.join(PUB, 'icons/icon-512.png'));
await sharp(await appIcon(512, 0.58, false)).toFile(path.join(PUB, 'icons/icon-maskable-512.png'));
await sharp(await appIcon(180, 0.74, false)).toFile(path.join(PUB, 'icons/apple-touch-icon.png'));
await sharp(mark).resize({ width: 64, height: 64, fit: 'contain', background: CLEAR }).png().toFile(path.join(PUB, 'favicon.png'));

// ---- gambar Open Graph 1200x630
const ogLogo = await sharp(full).resize({ width: 920, height: 440, fit: 'inside' }).toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: CREAM } }).composite([{ input: ogLogo, gravity: 'center' }]).png().toFile(path.join(PUB, 'og-image.png'));

const meta = await sharp(full).metadata();
console.log('latar:', bg.map(Math.round), '| logo penuh:', meta.width, 'x', meta.height, '| komponen ikon:', isMark.filter(Boolean).length);
