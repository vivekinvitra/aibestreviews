// SEO utility functions and schema generators

const SITE_NAME = 'aiBestReviews';
const SITE_URL = 'https://aibestreviews.com';
const SITE_DESCRIPTION = "Empowering creators and businesses by ranking the world's most innovative AI tools. Your trusted guide to the AI revolution.";
const DEFAULT_IMAGE = `${SITE_URL}/og-default.png`;

export interface SEOConfig {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  schema?: object | object[];
  noindex?: boolean;
  article?: {
    publishedTime?: string;
    author?: string;
    section?: string;
  };
}

export function generateSEOConfig(config: SEOConfig): SEOConfig {
  const fullTitle = config.title.includes(SITE_NAME)
    ? config.title
    : `${config.title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description: config.description,
    canonical: config.canonical || SITE_URL,
    image: config.image || DEFAULT_IMAGE,
    type: config.type || 'website',
    schema: config.schema,
    noindex: config.noindex || false,
    article: config.article,
  };
}

// Schema generators
export function generateToolSchema(tool: any) {
  return {
    '@context': 'https://schema.org/',
    '@type': 'SoftwareApplication',
    name: tool.name,
    description: tool.tagline,
    operatingSystem: 'Web-based',
    applicationCategory: getCategoryType(tool.category),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: tool.rating.toString(),
      ratingCount: tool.reviewCount.toString(),
      bestRating: '5',
      worstRating: '1'
    },
    offers: {
      '@type': 'Offer',
      price: tool.price.replace(/[^0-9.]/g, '') || '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    },
    image: tool.logo,
    url: `${SITE_URL}/tool/${tool.id}`
  };
}

export function generateArticleSchema(article: any) {
  return {
    '@context': 'https://schema.org/',
    '@type': 'Article',
    headline: article.title,
    description: article.summary,
    image: article.imageUrl,
    datePublished: article.date,
    author: {
      '@type': 'Person',
      name: article.author
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`
      }
    }
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org/',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org/',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: SITE_DESCRIPTION,
    sameAs: [
      'https://twitter.com/aibestreviews',
      'https://github.com/aibestreviews'
    ]
  };
}

function getCategoryType(category: string): string {
  const mapping: Record<string, string> = {
    'Video Generation': 'MultimediaApplication',
    'AI Writing': 'BusinessApplication',
    'Image & Design': 'MultimediaApplication',
    'Audio & Speech': 'MultimediaApplication',
    'Productivity': 'BusinessApplication',
    'Chatbots & LLMs': 'BusinessApplication'
  };
  return mapping[category] || 'BusinessApplication';
}
