import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { APP_STORE } from '../lib/store.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');
const templatePath = path.join(distDir, 'index.html');
const SITE_URL = 'https://aibestreviews.com';
const SITE_NAME = 'aiBestReviews';

// Generate meta tags for a specific route
function generateMetaTags(route) {
  const currentYear = new Date().getFullYear();
  let title, description, image, type = 'website', schema = null;

  // Home page
  if (route === '/') {
    title = `${SITE_NAME} | Discover & Compare the Best AI Tools`;
    description = `Empowering creators and businesses by ranking the world's most innovative AI tools. Expert reviews of ${APP_STORE.tools.length}+ AI platforms including ChatGPT, Synthesia, and more.`;
    image = `${SITE_URL}/og-default.png`;
    schema = {
      '@context': 'https://schema.org/',
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      description: "Empowering creators and businesses by ranking the world's most innovative AI tools.",
      sameAs: ['https://twitter.com/aibestreviews', 'https://github.com/aibestreviews']
    };
  }

  // Tool detail pages
  else if (route.startsWith('/tool/')) {
    const toolId = route.split('/tool/')[1];
    const tool = APP_STORE.tools.find(t => t.id === toolId);
    if (tool) {
      title = `${tool.name} Review ${currentYear} | ${tool.tagline}`;
      description = `Expert review of ${tool.name}: ${tool.tagline}. Rating: ${tool.rating}/5 from ${tool.reviewCount} reviews. Pricing starts at ${tool.price}. ${tool.pros.slice(0, 2).join('. ')}.`;
      image = tool.logo;
      type = 'product';
      schema = {
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
  }

  // Category pages
  else if (route.startsWith('/category/')) {
    const catId = route.split('/category/')[1];
    const category = APP_STORE.categories.find(c => c.id === catId);
    if (category) {
      const toolCount = APP_STORE.tools.filter(t => t.category === category.name).length;
      title = `Best ${category.name} Tools ${currentYear} | AI Reviews & Comparisons`;
      description = `${category.description} Compare ${toolCount} top-rated ${category.name} tools. Expert reviews, pricing, features, and ratings.`;
      image = category.imageUrl;
    }
  }

  // News article pages
  else if (route.startsWith('/news/') && route.split('/').length > 3) {
    const articleId = route.split('/').pop();
    const article = APP_STORE.news.find(n => n.id === articleId);
    if (article) {
      title = `${article.title} | ${SITE_NAME}`;
      description = article.summary;
      image = article.imageUrl;
      type = 'article';
      schema = {
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
  }

  // Legal pages
  else if (route.startsWith('/p/')) {
    const pageId = route.split('/p/')[1];
    const legal = APP_STORE.legal[pageId];
    if (legal) {
      title = `${legal.title} | ${SITE_NAME}`;
      description = legal.badge || `Legal information for ${SITE_NAME}`;
      image = `${SITE_URL}/og-default.png`;
    }
  }

  // Static pages
  else if (route === '/tools') {
    title = `Discover ${APP_STORE.tools.length}+ Best AI Tools | Expert Reviews & Rankings`;
    description = `Browse our comprehensive directory of AI tools. Filter by category, compare features, read expert reviews, and find the perfect AI software for your needs.`;
    image = `${SITE_URL}/og-default.png`;
  }
  else if (route === '/compare') {
    title = `Compare AI Tools Side-by-Side | Find the Best Solution`;
    description = `Compare features, pricing, and ratings of top AI tools side-by-side. Make informed decisions with our comprehensive comparison tool.`;
    image = `${SITE_URL}/og-default.png`;
  }
  else if (route === '/news') {
    title = `AI News & Insights | Latest Industry Updates | ${SITE_NAME}`;
    description = `Stay updated with the latest AI industry news, product launches, and expert analysis. Your source for AI technology trends and updates.`;
    image = `${SITE_URL}/og-default.png`;
  }
  else if (route === '/contact') {
    title = `Contact Us | ${SITE_NAME}`;
    description = `Get in touch with the ${SITE_NAME} team. We're here to help with questions about AI tools and our reviews.`;
    image = `${SITE_URL}/og-default.png`;
  }
  else if (route === '/login' || route === '/signup') {
    title = route === '/login' ? `Login | ${SITE_NAME}` : `Sign Up | ${SITE_NAME}`;
    description = `Access your ${SITE_NAME} account to save your favorite AI tools and comparisons.`;
    image = `${SITE_URL}/og-default.png`;
  }
  else if (route === '/submit-tool') {
    title = `Submit Your AI Tool | ${SITE_NAME}`;
    description = `Submit your AI tool for review. Get featured in our comprehensive directory of the best AI tools.`;
    image = `${SITE_URL}/og-default.png`;
  }

  const canonical = `${SITE_URL}${route}`;

  return buildMetaTagsHTML(title, description, canonical, image, type, schema);
}

function buildMetaTagsHTML(title, description, canonical, image, type, schema) {
  let html = `
  <title>${title}</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <link rel="canonical" href="${canonical}" />

  <!-- Open Graph -->
  <meta property="og:type" content="${type}" />
  <meta property="og:title" content="${escapeHtml(title)}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta property="og:image" content="${image}" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:site_name" content="${SITE_NAME}" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(title)}" />
  <meta name="twitter:description" content="${escapeHtml(description)}" />
  <meta name="twitter:image" content="${image}" />`;

  if (schema) {
    html += `\n  <script type="application/ld+json">${JSON.stringify(schema)}</script>`;
  }

  return html;
}

function escapeHtml(text) {
  return text.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function getCategoryType(category) {
  const mapping = {
    'Video Generation': 'MultimediaApplication',
    'AI Writing': 'BusinessApplication',
    'Image & Design': 'MultimediaApplication',
    'Audio & Speech': 'MultimediaApplication',
    'Productivity': 'BusinessApplication',
    'Chatbots & LLMs': 'BusinessApplication'
  };
  return mapping[category] || 'BusinessApplication';
}

// Generate all routes
function generateRoutes() {
  const routes = [
    '/',
    '/tools',
    '/compare',
    '/news',
    '/login',
    '/signup',
    '/submit-tool',
    '/contact',
  ];

  APP_STORE.tools.forEach((tool) => {
    routes.push(`/tool/${tool.id}`);
  });

  APP_STORE.categories.forEach((cat) => {
    routes.push(`/category/${cat.id}`);
  });

  APP_STORE.news.forEach((article) => {
    const categorySlug = article.category.toLowerCase().replace(/\s+/g, '-');
    routes.push(`/news/${categorySlug}/${article.id}`);
  });

  Object.keys(APP_STORE.legal).forEach((pageId) => {
    routes.push(`/p/${pageId}`);
  });

  return routes;
}

// Pre-render routes with SEO meta tags
async function prerenderRoutes() {
  const baseTemplate = fs.readFileSync(templatePath, 'utf-8');
  const routes = generateRoutes();

  console.log(`\n🎨 Pre-rendering ${routes.length} routes with SEO meta tags...\n`);

  let count = 0;

  for (const route of routes) {
    // Generate meta tags for this route
    const metaTags = generateMetaTags(route);

    // Inject meta tags into template
    let html = baseTemplate.replace(
      /<title>.*?<\/title>/,
      metaTags
    );

    // Convert route to file path
    const routePath = route === '/' ? '/index.html' : `${route}/index.html`;
    const fullPath = path.join(distDir, routePath);

    // Create directory if it doesn't exist
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Write HTML with injected meta tags
    fs.writeFileSync(fullPath, html);
    count++;

    if (count % 10 === 0) {
      console.log(`  ✓ ${count}/${routes.length} routes pre-rendered...`);
    }
  }

  console.log(`\n✅ Successfully pre-rendered ${count} routes with SEO meta tags!\n`);
  console.log(`📦 Build output:`);
  console.log(`   - ${count} SEO-optimized HTML pages`);
  console.log(`   - Sitemap: /sitemap.xml`);
  console.log(`   - Robots: /robots.txt`);
  console.log(`\n🔍 SEO Features:`);
  console.log(`   - Unique titles & descriptions per page`);
  console.log(`   - Open Graph tags for social sharing`);
  console.log(`   - Twitter Card tags`);
  console.log(`   - JSON-LD structured data (tools & articles)`);
  console.log(`   - Canonical URLs\n`);
}

// Run pre-rendering
prerenderRoutes().catch((err) => {
  console.error('❌ Pre-rendering failed:', err);
  process.exit(1);
});
