
import { ContentService } from './services/contentService';

// Backwards compatibility exports for simple static calls
export const CATEGORIES = ContentService.getCategories();
export const AI_TOOLS = ContentService.getTools();
export const NEWS = ContentService.getNews();
