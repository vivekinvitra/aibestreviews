
import { APP_STORE } from '../lib/store';

export const ContentService = {
  getNavbarData: () => APP_STORE.navigation,
  getFooterData: () => APP_STORE.footer,
  getCategories: () => APP_STORE.categories,
  getCategoryById: (id: string) => APP_STORE.categories.find(c => c.id === id),
  getTools: () => APP_STORE.tools,
  getToolById: (id: string) => APP_STORE.tools.find(t => t.id === id),
  getNews: () => APP_STORE.news,
  getNewsById: (id: string) => APP_STORE.news.find(n => n.id === id),
  getLegalPage: (id: string) => APP_STORE.legal[id] || null,
  getFeaturedNews: () => APP_STORE.news.find(n => n.isFeatured) || APP_STORE.news[0]
};
