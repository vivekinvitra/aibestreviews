import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { APP_STORE } from './lib/store.js';

// Generate all routes from static data for SSG
function generateRoutes() {
  const routes: string[] = [
    '/',
    '/tools',
    '/compare',
    '/news',
    '/login',
    '/signup',
    '/submit-tool',
    '/contact',
  ];

  // Tool detail pages
  APP_STORE.tools.forEach((tool: any) => {
    routes.push(`/tool/${tool.id}`);
  });

  // Category pages
  APP_STORE.categories.forEach((cat: any) => {
    routes.push(`/category/${cat.id}`);
  });

  // News article pages
  APP_STORE.news.forEach((article: any) => {
    const categorySlug = article.category.toLowerCase().replace(/\s+/g, '-');
    routes.push(`/news/${categorySlug}/${article.id}`);
  });

  // Legal pages
  Object.keys(APP_STORE.legal).forEach((pageId: string) => {
    routes.push(`/p/${pageId}`);
  });

  return routes;
}

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
