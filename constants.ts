
import { AITool, Category, NewsArticle, Comparison, LegalPageData } from './types';

export const CATEGORIES: Category[] = [
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
];

export const AI_TOOLS: AITool[] = [
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
];

export const NEWS: NewsArticle[] = [
  {
    id: 'n1',
    title: 'The Generative AI Revolution: How It’s Transforming Global Markets',
    category: 'Top Story',
    date: 'May 12, 2024',
    author: 'Alex River',
    readTime: '8 min read',
    summary: 'From automated coding to creative arts, the adoption of generative models is projected to add trillions to the global economy by 2030.',
    content: `The rise of generative AI marks a fundamental shift in how businesses operate across the globe. Recent reports suggest that the integration of large language models (LLMs) and diffusion models into enterprise workflows could boost global GDP by as much as 7% over the next decade.

Industry analysts emphasize that we are moving beyond the "experimental" phase. Companies are now deploying AI at scale for customer service automation, software development, and synthetic media creation.

"We are seeing a convergence of high-compute hardware and refined algorithms," says Alex River, Lead Researcher at Global Intel. "The barrier to entry for sophisticated AI applications has dropped significantly, allowing even SMEs to compete with tech giants in terms of innovation speed."

However, the revolution is not without its hurdles. Infrastructure costs, energy consumption, and data privacy remain top concerns for C-suite executives navigating this new frontier.`,
    imageUrl: 'https://picsum.photos/seed/genai_market/1200/600',
    isFeatured: true,
  },
  {
    id: 'n2',
    title: 'Synthesia 2.0: Moving Beyond Talking Heads',
    category: 'Research',
    date: 'May 10, 2024',
    author: 'Sarah Chen',
    readTime: '5 min read',
    summary: 'The latest update from Synthesia introduces full-body movement and nuanced emotional cues in AI avatars.',
    content: `Synthesia has unveiled its next-generation video platform, Synthesia 2.0. The update introduces "EX-Avatars," which are capable of natural full-body movement, dynamic hand gestures, and micro-expressions that were previously impossible with purely synthetic actors.

The update also features a new "Tone of Voice" engine, allowing users to select emotional states—such as empathetic, enthusiastic, or professional—for the AI's speech patterns.

"Our goal is to make video production as easy as writing an email, but with the quality of a professional film crew," says Sarah Chen. The platform's new capabilities are expected to revolutionize internal corporate training and multilingual marketing campaigns.`,
    imageUrl: 'https://picsum.photos/seed/syn2/600/400',
  },
  {
    id: 'n3',
    title: 'The EU AI Act: A Final Compliance Guide for Startups',
    category: 'Policy',
    date: 'May 08, 2024',
    author: 'Marcus Thorne',
    readTime: '12 min read',
    summary: 'Navigating the complex requirements of the worlds first comprehensive AI regulation.',
    content: `The European Parliament has officially ratified the EU AI Act, setting a global precedent for AI governance. For startups, the act introduces a tiered risk system that dictates strictness of compliance.

Founders must now categorize their applications into "Unacceptable," "High," "Limited," or "Minimal" risk. High-risk systems, such as those used in critical infrastructure or recruitment, face the most rigorous documentation and transparency requirements.

Marcus Thorne, a legal expert in emerging tech, warns that non-compliance could lead to fines of up to €35 million or 7% of global turnover. "Startups need to implement 'Ethics by Design' from day one," Thorne advises.`,
    imageUrl: 'https://picsum.photos/seed/euact/600/400',
  },
  {
    id: 'n4',
    title: 'NVIDIA BlackWell Architecture: A New Paradigm for Inference',
    category: 'Business',
    date: 'May 06, 2024',
    author: 'Dr. Elena Wu',
    readTime: '6 min read',
    summary: 'How the latest hardware breakthroughs are making trillion-parameter models accessible to small businesses.',
    content: `NVIDIA's Blackwell architecture is set to redefine the performance ceiling for AI inference. By moving to a multi-die configuration, NVIDIA has achieved a 2.5x increase in training performance and up to 30x faster inference for massive models.

This breakthrough specifically targets the "Inference Gap"—the high cost of running live AI applications. With Blackwell, companies can host trillon-parameter models with significantly lower power draw and latency.

Dr. Elena Wu explains: "This isn't just about faster chips; it's about the interconnect technology that allows GPUs to talk to each other as a single massive unit. This changes the economics of AI deployment entirely."`,
    imageUrl: 'https://picsum.photos/seed/nvidia/600/400',
  },
  {
    id: 'n5',
    title: 'Why Prompt Engineering Might Be a Dead Skill',
    category: 'Productivity',
    date: 'May 04, 2024',
    author: 'John Doe',
    readTime: '4 min read',
    summary: 'As models get smarter, the need for complex prompt structures is diminishing. What comes next?',
    content: `Only a year ago, "Prompt Engineer" was touted as the job of the future. Today, the field is rapidly evolving into something entirely different. Next-generation models are becoming increasingly proficient at "Auto-Prompting"—understanding intent even from vague, natural language inputs.

"We are moving from 'telling the model how to think' to 'defining what we want achieved'," says John Doe. The focus is shifting toward workflow orchestration and domain-specific context injection, rather than the syntactic tricks of 2023.

Productivity experts suggest that the next major skill will be "AI Orchestration"—the ability to string multiple agents together to solve complex, multi-step business problems.`,
    imageUrl: 'https://picsum.photos/seed/prompt/600/400',
  },
];

export const COMPARISONS: Comparison[] = [
  {
    id: 'syn-vs-hey',
    title: 'Synthesia vs HeyGen',
    toolA: 'synthesia',
    toolB: 'HeyGen',
    winner: 'Synthesia (for Enterprise)',
    summary: 'Synthesia dominates with security and scalability, while HeyGen wins on creative flexibility.',
  },
  {
    id: 'gpt-vs-claude',
    title: 'ChatGPT vs Claude 3.5',
    toolA: 'chatgpt',
    toolB: 'claude',
    winner: 'Claude 3.5 (for Coding)',
    summary: 'Claude 3.5 Sonnet shows superior logical reasoning for complex development tasks.',
  },
];

export const LEGAL_CONTENT: Record<string, LegalPageData> = {
  terms: {
    badge: "Legal Framework",
    title: "Terms of Service",
    lastUpdated: "May 20, 2024",
    sections: [
      {
        title: "1. Acceptance of Terms",
        content: "By accessing, browsing, or utilizing the aiBestReviews platform (\"[ABR]\"), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please discontinue use of the site immediately."
      },
      {
        title: "2. Editorial Integrity & Use of Content",
        content: "All reviews, rankings, and comparisons on [ABR] are the intellectual property of our editorial team. While we strive for 100% accuracy, AI software changes rapidly. Content is provided \"as-is\" for informational purposes. Users are encouraged to perform their own due diligence before making purchasing decisions."
      },
      {
        title: "3. User Submissions & Tool Listings",
        content: "When submitting a tool for review, you warrant that the information provided is accurate and that you have the right to represent the software. [ABR] reserves the right to edit descriptions for clarity, SEO optimization, and objectivity."
      },
      {
        title: "4. Intellectual Property Rights",
        content: "The \"ABR\" brand, logo, and proprietary benchmarking algorithms are protected by copyright and trademark laws. Unauthorized reproduction of our review data or \"Best of\" badges without express written permission is strictly prohibited."
      },
      {
        title: "5. Limitation of Liability",
        content: "[ABR] shall not be liable for any damages resulting from the use or inability to use the services, including but not limited to the performance of third-party AI tools discovered through our platform."
      }
    ]
  },
  privacy: {
    badge: "Data Governance",
    title: "Privacy Policy",
    lastUpdated: "May 20, 2024",
    sections: [
      {
        title: "1. Data Collection Disclosure",
        content: "We collect minimal personal data necessary to provide a personalized experience. This includes email addresses for newsletter subscribers and account holders, and technical data such as IP addresses for security and analytics purposes."
      },
      {
        title: "2. How We Utilize Your Information",
        content: [
          "Manage and secure your user account.",
          "Send requested AI tool updates and industry news.",
          "Improve site performance via anonymized usage analytics.",
          "Communicate regarding tool submissions and review status."
        ]
      },
      {
        title: "3. Security Standards",
        content: "[ABR] employs industry-standard SSL encryption and secure database protocols to ensure your information remains private. We do not sell or trade your personal data to third parties for marketing purposes."
      },
      {
        title: "4. GDPR & CCPA Compliance",
        content: "Users residing in the EU or California have specific rights regarding their data, including the right to request access, correction, or deletion. To exercise these rights, please contact our privacy officer."
      }
    ]
  },
  cookies: {
    badge: "Tracking Disclosure",
    title: "Cookie Policy",
    lastUpdated: "May 20, 2024",
    intro: "This policy explains how aiBestReviews uses cookies and similar technologies to recognize you when you visit our website.",
    sections: [
      {
        title: "What are cookies?",
        content: "Cookies are small data files that are placed on your computer or mobile device when you visit a website. They are essential for modern web applications to \"remember\" user preferences and sessions."
      },
      {
        title: "Types of cookies we use",
        content: [
          "Essential Cookies: Crucial for security and core site functionality.",
          "Analytics Cookies: Help us understand which AI tools are trending.",
          "Functional Cookies: Allow the site to remember your specific filter choices."
        ]
      }
    ]
  },
  affiliate: {
    badge: "Trust & Transparency",
    title: "Affiliate Disclosure",
    lastUpdated: "May 20, 2024",
    intro: "Transparency is the foundation of our editorial integrity. This disclosure is provided to inform you about how aiBestReviews (\"[ABR]\") sustains its deep-dive testing operations.",
    sections: [
      {
        title: "How We Monetize",
        content: "[ABR] participates in various affiliate marketing programs. This means that we may earn a small commission if you click on a link to an AI tool featured on our site and eventually sign up for a paid subscription. This comes at no additional cost to you."
      },
      {
        title: "Our \"No Bias\" Guarantee",
        content: "Crucially, our participation in affiliate programs does not influence our scores, rankings, or reviews. Our technical research team and our partnership team operate in strict silos. We rank tools based on actual performance benchmarks.",
        isCallout: true
      },
      {
        title: "Independent Vetting",
        content: "We frequently review tools with which we have no financial relationship simply because they are excellent or important to the ecosystem."
      }
    ]
  }
};
