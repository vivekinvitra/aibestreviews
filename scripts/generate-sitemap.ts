import fs from 'fs';
import path from 'path';
import { APP_STORE } from '../lib/store.ts';

const BASE_URL = 'https://aibestreviews.com';

function url(loc: string, priority = '0.7', changefreq = 'weekly') {
  return `
  <url>
    <loc>${BASE_URL}${loc}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const urls: string[] = [];

/* ---------- Static pages ---------- */
urls.push(url('/', '1.0', 'daily'));

APP_STORE.navigation.main.forEach(item => {
  urls.push(url(item.path, '0.9'));
});

/* ---------- Footer links ---------- */
APP_STORE.footer.sections.forEach(section => {
  section.links.forEach(link => {
    urls.push(url(link.path, '0.6'));
  });
});

/* ---------- Categories ---------- */
APP_STORE.categories.forEach(cat => {
  urls.push(url(`/category/${cat.id}`, '0.8'));
});

/* ---------- Tools ---------- */
APP_STORE.tools.forEach(tool => {
  urls.push(url(`/tool/${tool.id}`, '0.8'));
});

/* ---------- News ---------- */
APP_STORE.news.forEach(article => {
  const categorySlug = article.category
    .toLowerCase()
    .replace(/\s+/g, '-');

  urls.push(
    url(`/news/${categorySlug}/${article.id}`, '0.7', 'monthly')
  );
});

/* ---------- Sitemap XML ---------- */
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

fs.writeFileSync(
  path.resolve('public/sitemap.xml'),
  sitemap.trim()
);

console.log('✅ sitemap.xml generated successfully');