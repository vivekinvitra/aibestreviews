
export type PricingTier = 'Free' | 'Freemium' | 'Paid' | 'Enterprise';

export interface AITool {
  id: string;
  name: string;
  logo: string;
  category: string;
  tagline: string;
  rating: number;
  reviewCount: number;
  price: string;
  pricingTier: PricingTier;
  targetAudience: string[];
  features: string[];
  pros: string[];
  cons: string[];
  useCases: string[];
  description: string;
  affiliateUrl: string;
  screenshots: string[];
  alternatives: string[];
  dateAdded: string; // ISO format
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  imageUrl: string;
  pageFeatures: string[];
}

export interface NewsArticle {
  id: string;
  title: string;
  category: 'Policy' | 'Business' | 'Research' | 'Top Story' | 'Productivity';
  date: string;
  author: string;
  readTime: string;
  summary: string;
  content?: string;
  imageUrl: string;
  isFeatured?: boolean;
}

export interface Comparison {
  id: string;
  title: string;
  toolA: string;
  toolB: string;
  winner: string;
  summary: string;
}

export interface LegalSection {
  title?: string;
  content: string | string[];
  isCallout?: boolean;
}

export interface LegalPageData {
  badge: string;
  title: string;
  lastUpdated: string;
  intro?: string;
  sections: LegalSection[];
}

export interface NavLink {
  name: string;
  path: string;
}

export interface FooterSection {
  title: string;
  links: { label: string; path: string }[];
}

export interface AppStore {
  navigation: {
    main: NavLink[];
    categories: { id: string; name: string }[];
  };
  footer: {
    about: {
      brand: string;
      badge: string;
      tagline: string;
    };
    sections: FooterSection[];
    socials: { platform: string; icon: string; url: string }[];
    copyright: string;
  };
  categories: Category[];
  tools: AITool[];
  news: NewsArticle[];
  legal: Record<string, LegalPageData>;
}
