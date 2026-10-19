import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { createHash } from 'node:crypto';
import path from 'path';
import { defineConfig, loadEnv, type Plugin } from 'vite';

/** Membuat sitemap.xml saat build bila SITE_URL diisi (mis. SITE_URL=https://jalantoga.example). */
function sitemap(siteUrl: string | undefined): Plugin {
  const routes = ['', 'roadmap', 'tracker', 'topik', 'judul', 'metodologi', 'bab', 'referensi', 'toolkit', 'fokus', 'template', 'format', 'bimbingan', 'sidang', 'administrasi', 'mental', 'estimasi', 'pencapaian', 'belajar'];
  return {
    name: 'jalan-toga-sitemap',
    apply: 'build',
    generateBundle() {
      if (!siteUrl) return;
      const base = siteUrl.replace(/\/+$/, '');
      const urls = routes.map((r) => `  <url><loc>${base}/${r ? `#/${r}` : ''}</loc></url>`).join('\n');
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n` });
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: `User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\n` });
    }
  };
}

/** CSP via <meta> hanya untuk build (dev server butuh skrip inline React Refresh). Skrip inline diizinkan lewat hash. */
function csp(): Plugin {
  return {
    name: 'jalan-toga-csp',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        const hashes = [...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)]
          .map((m) => `'sha256-${createHash('sha256').update(m[1]).digest('base64')}'`)
          .join(' ');
        const policy = [
          "default-src 'self'",
          `script-src 'self' ${hashes}`,
          "style-src 'self' 'unsafe-inline'",
          "img-src 'self' data: blob:",
          "font-src 'self' data:",
          "connect-src 'self'",
          "worker-src 'self'",
          "manifest-src 'self'",
          "object-src 'none'",
          "base-uri 'self'",
          "form-action 'none'"
        ].join('; ');
        return html.replace(/<meta charset="UTF-8" \/>/, `$&\n    <meta http-equiv="Content-Security-Policy" content="${policy}" />`);
      }
    }
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    base: './',
    plugins: [react(), tailwindcss(), sitemap(env.SITE_URL), csp()],
    resolve: { alias: { '@': path.resolve(import.meta.dirname, '.') } },
    test: { environment: 'jsdom', globals: true, include: ['src/**/*.test.ts'] }
  };
});
