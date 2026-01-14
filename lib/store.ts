
import type { AppStore } from '../types.ts';

export const APP_STORE: AppStore = {
  navigation: {
    main: [
      { name: 'Discover', path: '/tools' },
      { name: 'Compare', path: '/compare' },
      { name: 'News', path: '/news' },
    ],
    categories: []
  },
  footer: {
    about: {
      brand: "aiBestReviews",
      badge: "ABR",
      tagline: "Empowering creators and businesses by ranking the world's most innovative AI tools. Your trusted guide to the AI revolution."
    },
    sections: [
      {
        title: "Platform",
        links: [
          { label: "Directory", path: "/tools" },
          { label: "Comparisons", path: "/compare" },
          { label: "Insights", path: "/news" },
          { label: "Submit Tool", path: "/submit-tool" },
          { label: "Contact Us", path: "/contact" }
        ]
      },
      {
        title: "Legal",
        links: [
          { label: "Terms", path: "/p/terms" },
          { label: "Privacy", path: "/p/privacy" },
          { label: "Cookies", path: "/p/cookies" },
          { label: "Affiliate Disclosure", path: "/p/affiliate" }
        ]
      }
    ],
    socials: [
      { platform: "Twitter", icon: "X", url: "#" },
      { platform: "GitHub", icon: "G", url: "#" },
      { platform: "LinkedIn", icon: "L", url: "#" }
    ],
    copyright: "aiBestReviews. All rights reserved. [ABR]"
  },
  categories: [
    { 
      id: 'video', 
      name: 'Video Generation', 
      icon: '🎥', 
      description: 'Create professional videos with AI avatars and synthetic media. Perfect for marketing, training, and scaling content production.',
      imageUrl: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000&auto=format&fit=crop',
      pageFeatures: ['AI Avatars', 'Text-to-Video', 'Lip Sync', 'Scene Generation', 'Motion Tracking']
    },
    { 
      id: 'writing', 
      name: 'AI Writing', 
      icon: '✍️', 
      description: 'Elevate your copy with assistants that understand tone, context, and intent. From blog posts to high-converting ad copy.',
      imageUrl: 'https://images.unsplash.com/photo-1455391727333-e771c53e8392?q=80&w=2000&auto=format&fit=crop',
      pageFeatures: ['SEO Optimization', 'Plagiarism Detection', 'Tone Adjustment', 'Content Rewriting', 'Multi-language Support']
    },
    { 
      id: 'image', 
      name: 'Image & Design', 
      icon: '🎨', 
      description: 'Transform ideas into visuals instantly. Generate art, edit photos with precision, and automate your brand design workflow.',
      imageUrl: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=2000&auto=format&fit=crop',
      pageFeatures: ['Generative Fill', 'Text-to-Image', 'Background Removal', 'Vectorization', 'Style Transfer']
    },
    { 
      id: 'audio', 
      name: 'Audio & Speech', 
      icon: '🎙️', 
      description: 'Synthetic speech that sounds human. Voice cloning, noise reduction, and automated transcriptions for global creators.',
      imageUrl: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2000&auto=format&fit=crop',
      pageFeatures: ['Voice Cloning', 'Text-to-Speech', 'Audio Cleanup', 'Dubbing', 'Music Generation']
    },
    { 
      id: 'productivity', 
      name: 'Productivity', 
      icon: '🚀', 
      description: 'Workflow automation and intelligent assistants that reclaim your time. Focus on the work that actually matters.',
      imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2000&auto=format&fit=crop',
      pageFeatures: ['Email Management', 'Meeting Summaries', 'Project Planning', 'CRM Automation', 'Note Taking']
    },
    { 
      id: 'chatbots', 
      name: 'Chatbots & LLMs', 
      icon: '💬', 
      description: 'The foundation of the AI era. Interact with advanced models for reasoning, coding, and large-scale data analysis.',
      imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c2079eadbed?q=80&w=2000&auto=format&fit=crop',
      pageFeatures: ['Complex Reasoning', 'Code Generation', 'Vision Integration', 'Large Context Window', 'Fine-tuning']
    },
  ],
  tools: [
    {
      id: 'synthesia',
      name: 'Synthesia',
      logo: 'https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/pizn7vj8mptv7cndsh8j',
      category: 'Video Generation',
      tagline: 'The #1 AI Video Generation Platform.',
      rating: 4.9,
      reviewCount: 4500,
      price: '$22/mo',
      pricingTier: 'Paid',
      targetAudience: ['Business', 'L&D Teams', 'Marketers'],
      features: ['AI Avatars', 'Text-to-Video', 'Multi-language Support', 'Custom Avatars'],
      pros: ['Highly realistic avatars', 'Zero video editing skills required', 'Fast rendering'],
      cons: ['Limited character movement', 'Strict content moderation'],
      useCases: ['Training videos', 'Sales outreach', 'Onboarding'],
      description: 'Synthesia is an AI video communications platform that lets you create videos with AI avatars, directly from text.',
      affiliateUrl: 'https://www.synthesia.io',
      screenshots: ['https://picsum.photos/seed/syn1/800/450'],
      alternatives: ['HeyGen', 'Colossyan'],
      dateAdded: '2023-01-15'
    },
    {
      id: 'canva',
      name: 'Canva Magic Studio',
      logo: 'https://picsum.photos/seed/canva/200/200',
      category: 'Image & Design',
      tagline: 'Design for everyone, powered by AI.',
      rating: 4.8,
      reviewCount: 12500,
      price: 'Free',
      pricingTier: 'Freemium',
      targetAudience: ['Designers', 'Small Business', 'Students'],
      features: ['Text-to-Image', 'Generative Fill', 'Magic Expand', 'AI Eraser'],
      pros: ['Extremely easy to use', 'Massive template library', 'Cross-platform'],
      cons: ['Limited advanced design controls', 'Pro features can be expensive'],
      useCases: ['Social media posts', 'Presentations', 'Marketing materials'],
      description: 'Canva is a free-to-use online graphic design tool. Use it to create social media posts, presentations, posters, videos, logos and more.',
      affiliateUrl: 'https://www.canva.com',
      screenshots: ['https://picsum.photos/seed/canvass/800/450'],
      alternatives: ['Adobe Express', 'Figma'],
      dateAdded: '2023-10-01'
    },
    {
      id: 'grammarly',
      name: 'Grammarly GO',
      logo: 'https://picsum.photos/seed/grammarly/200/200',
      category: 'AI Writing',
      tagline: 'Responsible AI for work and life.',
      rating: 4.7,
      reviewCount: 55000,
      price: 'Free',
      pricingTier: 'Freemium',
      targetAudience: ['Professionals', 'Students', 'Business'],
      features: ['Tone Adjustment', 'SEO Optimization', 'Plagiarism Detection', 'Grammar Correction'],
      pros: ['Everywhere you write', 'Accurate grammar engine', 'Helpful tone suggestions'],
      cons: ['Free version is limited', 'Privacy concerns for some industries'],
      useCases: ['Email writing', 'Academic papers', 'Business reports'],
      description: 'Grammarly is a cloud-based typing assistant that reviews spelling, grammar, punctuation, clarity, engagement, and delivery mistakes.',
      affiliateUrl: 'https://www.grammarly.com',
      screenshots: ['https://picsum.photos/seed/gramss/800/450'],
      alternatives: ['Jasper', 'Hemingway'],
      dateAdded: '2023-05-12'
    },
    {
      id: 'descript',
      name: 'Descript',
      logo: 'https://picsum.photos/seed/descript/200/200',
      category: 'Video Generation',
      tagline: 'The new way to make video and podcasts.',
      rating: 4.8,
      reviewCount: 3200,
      price: 'Free',
      pricingTier: 'Freemium',
      targetAudience: ['Creators', 'Business', 'Developers'],
      features: ['Text-to-Video', 'Voice Cloning', 'Lip Sync', 'Audio Cleanup'],
      pros: ['Revolutionary editing workflow', 'AI-powered clean up', 'Transcription accuracy'],
      cons: ['Software can be heavy', 'Learning curve for text-based editing'],
      useCases: ['Podcast editing', 'Social video shorts', 'Instructional videos'],
      description: 'Descript is the only tool you need to write, record, transcribe, edit, collaborate, and share your videos and podcasts.',
      affiliateUrl: 'https://www.descript.com',
      screenshots: ['https://picsum.photos/seed/desss/800/450'],
      alternatives: ['Riverside', 'Adobe Premiere'],
      dateAdded: '2022-11-20'
    },
    {
      id: 'chatgpt',
      name: 'ChatGPT',
      logo: 'https://picsum.photos/seed/openai/200/200',
      category: 'Chatbots & LLMs',
      tagline: 'The standard for conversational AI.',
      rating: 4.9,
      reviewCount: 120000,
      price: 'Free',
      pricingTier: 'Freemium',
      targetAudience: ['Everyone', 'Developers', 'Students'],
      features: ['Complex Reasoning', 'Code Generation', 'Vision Integration', 'Large Context Window'],
      pros: ['Extremely versatile', 'Large context window', 'Great mobile app'],
      cons: ['Information accuracy issues', 'Usage caps on free tier'],
      useCases: ['Coding', 'Creative writing', 'Research'],
      description: 'ChatGPT is a generative artificial intelligence chatbot developed by OpenAI and launched in 2022.',
      affiliateUrl: 'https://chat.openai.com',
      screenshots: ['https://picsum.photos/seed/gptss/800/450'],
      alternatives: ['Claude', 'Gemini'],
      dateAdded: '2022-11-30'
    },
    {
      id: 'jasper',
      name: 'Jasper',
      logo: 'https://picsum.photos/seed/jasper/200/200',
      category: 'AI Writing',
      tagline: 'The AI content platform for enterprise teams.',
      rating: 4.7,
      reviewCount: 8200,
      price: '$39/mo',
      pricingTier: 'Paid',
      targetAudience: ['Agencies', 'Business', 'Copywriters'],
      features: ['Tone Adjustment', 'SEO Optimization', 'Plagiarism Detection', 'Multi-language Support'],
      pros: ['Excellent team collaboration', 'Plagiarism checker included', 'Rich templates'],
      cons: ['Pricey for individuals', 'Output can be repetitive'],
      useCases: ['Blog posts', 'Ad copy', 'Email marketing'],
      description: 'Jasper is the AI Content Platform that helps organizations break through creative blocks to create amazing, original content 10X faster.',
      affiliateUrl: 'https://www.jasper.ai',
      screenshots: ['https://picsum.photos/seed/jasss/800/450'],
      alternatives: ['Copy.ai', 'Writesonic'],
      dateAdded: '2023-02-14'
    }
  ],
  news: [
    {
      id: 'the-generative-ai-revolution-how-its-transforming-global-markets',
      title: 'The Generative AI Revolution: How It’s Transforming Global Markets',
      category: 'Top Story',
      date: 'May 12, 2026',
      author: 'Alex River',
      readTime: '8 min read',
      summary: 'From automated coding to creative arts, the adoption of generative models is projected to add trillions to the global economy by 2030.',
      content: `The rise of generative AI marks a fundamental shift in how businesses operate across the globe. Recent reports suggest that the integration of large language models (LLMs) and diffusion models into enterprise workflows could boost global GDP by as much as 7% over the next decade.`,
      imageUrl: 'https://picsum.photos/seed/genai_market/1200/600',
      isFeatured: true,
    },
    {
      id: 'synthesia-2-0-moving-beyond-talking-heads',
      title: 'Synthesia 2.0: Moving Beyond Talking Heads',
      category: 'Research',
      date: 'May 10, 2026',
      author: 'Sarah Chen',
      readTime: '5 min read',
      summary: 'The latest update from Synthesia introduces full-body movement and nuanced emotional cues in AI avatars.',
      content: `Synthesia has unveiled its next-generation video platform, Synthesia 2.0. The update introduces "EX-Avatars," which are capable of natural full-body movement.`,
      imageUrl: 'https://picsum.photos/seed/syn2/600/400',
    },
    {
      id: 'the-eu-ai-act-a-final-compliance-guide-for-startups',
      title: 'The EU AI Act: A Final Compliance Guide for Startups',
      category: 'Policy',
      date: 'May 08, 2026',
      author: 'Marcus Thorne',
      readTime: '12 min read',
      summary: 'Navigating the complex requirements of the worlds first comprehensive AI regulation.',
      content: `The European Parliament has officially ratified the EU AI Act, setting a global precedent for AI governance.`,
      imageUrl: 'https://picsum.photos/seed/euact/600/400',
    }
  ],
  legal: {
    terms: {
      badge: "Legal Framework",
      title: "Terms of Service",
      lastUpdated: "May 20, 2026",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content: "By accessing, browsing, or utilizing the aiBestReviews platform (\"[ABR]\"), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service."
        }
      ]
    },
    privacy: {
      badge: "Data Governance",
      title: "Privacy Policy",
      lastUpdated: "May 20, 2026",
      sections: [
        {
          title: "1. Data Collection Disclosure",
          content: "We collect minimal personal data necessary to provide a personalized experience."
        }
      ]
    },
    cookies: {
      badge: "Tracking Disclosure",
      title: "Cookie Policy",
      lastUpdated: "May 20, 2026",
      intro: "This policy explains how aiBestReviews uses cookies and similar technologies.",
      sections: [
        {
          title: "What are cookies?",
          content: "Cookies are small data files that are placed on your computer or mobile device when you visit a website."
        }
      ]
    },
    affiliate: {
      badge: "Trust & Transparency",
      title: "Affiliate Disclosure",
      lastUpdated: "May 20, 2026",
      intro: "Transparency is the foundation of our editorial integrity.",
      sections: [
        {
          title: "How We Monetize",
          content: "[ABR] participates in various affiliate marketing programs."
        },
        {
          title: "Our \"No Bias\" Guarantee",
          content: "Crucially, our participation in affiliate programs does not influence our scores.",
          isCallout: true
        }
      ]
    }
  }
};
