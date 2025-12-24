
import { AITool, Category, NewsArticle, Comparison } from './types';

export const CATEGORIES: Category[] = [
  { id: 'video', name: 'Video Generation', icon: '🎥', description: 'Create professional videos with AI avatars and synthetic media.' },
  { id: 'writing', name: 'AI Writing', icon: '✍️', description: 'Copywriting, content strategy, and creative writing assistants.' },
  { id: 'image', name: 'Image & Design', icon: '🎨', description: 'Art generation, photo editing, and brand design assets.' },
  { id: 'audio', name: 'Audio & Speech', icon: '🎙️', description: 'Voice cloning, text-to-speech, and music generation.' },
  { id: 'productivity', name: 'Productivity', icon: '🚀', description: 'Meeting assistants, note-taking, and workflow automation.' },
  { id: 'chatbots', name: 'Chatbots & LLMs', icon: '💬', description: 'Advanced conversational agents and logic engines.' },
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
    targetAudience: ['L&D Teams', 'Marketers', 'Enterprises'],
    features: ['140+ AI Avatars', '120+ Languages', 'AI Video Assistant', 'Custom Avatars'],
    pros: ['Highly realistic avatars', 'Zero video editing skills required', 'Fast rendering'],
    cons: ['Limited character movement', 'Strict content moderation'],
    useCases: ['Training videos', 'Sales outreach', 'Onboarding'],
    description: 'Synthesia is an AI video communications platform that lets you create videos with AI avatars, directly from text.',
    affiliateUrl: 'https://www.synthesia.io',
    screenshots: ['https://picsum.photos/seed/syn1/800/450'],
    alternatives: ['HeyGen', 'Colossyan'],
  },
  {
    id: 'canva',
    name: 'Canva Magic Studio',
    logo: 'https://picsum.photos/seed/canva/200/200',
    category: 'Image & Design',
    tagline: 'Design for everyone, powered by AI.',
    rating: 4.8,
    reviewCount: 12500,
    price: 'Freemium',
    pricingTier: 'Freemium',
    targetAudience: ['Designers', 'Social Media Managers', 'Small Businesses'],
    features: ['Magic Edit', 'Magic Media', 'Magic Expand', 'AI Eraser'],
    pros: ['Extremely easy to use', 'Massive template library', 'Cross-platform'],
    cons: ['Limited advanced design controls', 'Pro features can be expensive'],
    useCases: ['Social media posts', 'Presentations', 'Marketing materials'],
    description: 'Canva is a free-to-use online graphic design tool. Use it to create social media posts, presentations, posters, videos, logos and more.',
    affiliateUrl: 'https://www.canva.com',
    screenshots: ['https://picsum.photos/seed/canvass/800/450'],
    alternatives: ['Adobe Express', 'Figma'],
  },
  {
    id: 'grammarly',
    name: 'Grammarly GO',
    logo: 'https://picsum.photos/seed/grammarly/200/200',
    category: 'AI Writing',
    tagline: 'Responsible AI for work and life.',
    rating: 4.7,
    reviewCount: 55000,
    price: 'Freemium',
    pricingTier: 'Freemium',
    targetAudience: ['Professionals', 'Students', 'Writers'],
    features: ['Real-time editing', 'Tone detection', 'AI content generation', 'Plagiarism checker'],
    pros: ['Everywhere you write', 'Accurate grammar engine', 'Helpful tone suggestions'],
    cons: ['Free version is limited', 'Privacy concerns for some industries'],
    useCases: ['Email writing', 'Academic papers', 'Business reports'],
    description: 'Grammarly is a cloud-based typing assistant that reviews spelling, grammar, punctuation, clarity, engagement, and delivery mistakes.',
    affiliateUrl: 'https://www.grammarly.com',
    screenshots: ['https://picsum.photos/seed/gramss/800/450'],
    alternatives: ['Jasper', 'Hemingway'],
  },
  {
    id: 'descript',
    name: 'Descript',
    logo: 'https://picsum.photos/seed/descript/200/200',
    category: 'Video Generation',
    tagline: 'The new way to make video and podcasts.',
    rating: 4.8,
    reviewCount: 3200,
    price: 'Freemium',
    pricingTier: 'Freemium',
    targetAudience: ['Podcasters', 'Video Editors', 'Creators'],
    features: ['Edit by Text', 'Overdub', 'Eye Contact Correction', 'Studio Sound'],
    pros: ['Revolutionary editing workflow', 'AI-powered clean up', 'Transcription accuracy'],
    cons: ['Software can be heavy', 'Learning curve for text-based editing'],
    useCases: ['Podcast editing', 'Social video shorts', 'Instructional videos'],
    description: 'Descript is the only tool you need to write, record, transcribe, edit, collaborate, and share your videos and podcasts.',
    affiliateUrl: 'https://www.descript.com',
    screenshots: ['https://picsum.photos/seed/desss/800/450'],
    alternatives: ['Riverside', 'Adobe Premiere'],
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    logo: 'https://picsum.photos/seed/openai/200/200',
    category: 'Chatbots & LLMs',
    tagline: 'The standard for conversational AI.',
    rating: 4.9,
    reviewCount: 120000,
    price: 'Freemium',
    pricingTier: 'Freemium',
    targetAudience: ['Everyone', 'Developers', 'Writers'],
    features: ['GPT-4o', 'Advanced Data Analysis', 'Image Generation', 'Vision'],
    pros: ['Extremely versatile', 'Large context window', 'Great mobile app'],
    cons: ['Information accuracy issues', 'Usage caps on free tier'],
    useCases: ['Coding', 'Creative writing', 'Research'],
    description: 'ChatGPT is a generative artificial intelligence chatbot developed by OpenAI and launched in 2022.',
    affiliateUrl: 'https://chat.openai.com',
    screenshots: ['https://picsum.photos/seed/gptss/800/450'],
    alternatives: ['Claude', 'Gemini'],
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
    targetAudience: ['Content Teams', 'Agencies', 'Copywriters'],
    features: ['Brand Voice', 'Campaign Builder', 'SEO Integration', 'Browser Extension'],
    pros: ['Excellent team collaboration', 'Plagiarism checker included', 'Rich templates'],
    cons: ['Pricey for individuals', 'Output can be repetitive'],
    useCases: ['Blog posts', 'Ad copy', 'Email marketing'],
    description: 'Jasper is the AI Content Platform that helps organizations break through creative blocks to create amazing, original content 10X faster.',
    affiliateUrl: 'https://www.jasper.ai',
    screenshots: ['https://picsum.photos/seed/jasss/800/450'],
    alternatives: ['Copy.ai', 'Writesonic'],
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
