import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
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

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    base: './',
    plugins: [react(), tailwindcss(), sitemap(env.SITE_URL)],
    resolve: { alias: { '@': path.resolve(import.meta.dirname, '.') } },
    test: { environment: 'jsdom', globals: true, include: ['src/**/*.test.ts'] }
  };
});
