
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { NEWS } from '../constants';
import NewsCard from '../components/NewsCard';

const News: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Policy', 'Research', 'Business', 'Top Story', 'Productivity'];

  const featuredArticle = useMemo(() => NEWS.find(n => n.isFeatured) || NEWS[0], []);
  
  const otherArticles = useMemo(() => {
    return NEWS.filter(n => (activeCategory === 'All' || n.category === activeCategory));
  }, [activeCategory]);

  return (
    <div className="pt-32 pb-20 transition-colors duration-300 min-h-screen bg-white dark:bg-[#0b0c10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* News Navigation / Categories */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border-b border-gray-100 dark:border-white/5 pb-8">
          <div>
            <h1 className="text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">The Wire <span className="text-indigo-500">.</span></h1>
            <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.3em]">Global AI Intelligence Hub</p>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar max-w-full">
            {categories.map(cat => (
              <button 
                key={cat} 
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-black' 
                    : 'text-gray-500 hover:text-indigo-600 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Editorial Feed */}
          <div className="lg:col-span-8">
            
            {/* Featured Hero Story */}
            {activeCategory === 'All' && featuredArticle && (
              <Link 
                to={`/news/${featuredArticle.category.toLowerCase().replace(/\s+/g, '-')}/${featuredArticle.id}`} 
                className="mb-16 block group cursor-pointer relative overflow-hidden rounded-[2.5rem] aspect-[21/9] shadow-2xl"
              >
                <img 
                  src={featuredArticle.imageUrl} 
                  alt={featuredArticle.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10">
                  <span className="px-4 py-1.5 bg-indigo-600 text-white text-[10px] font-black uppercase rounded-lg tracking-widest mb-4 inline-block shadow-lg">
                    {featuredArticle.category}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4 group-hover:text-indigo-400 transition-colors">
                    {featuredArticle.title}
                  </h2>
                  <div className="flex items-center gap-6 text-gray-300 text-[10px] font-bold uppercase tracking-widest">
                    <span>By {featuredArticle.author}</span>
                    <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                    <span>{featuredArticle.date}</span>
                    <span className="text-indigo-400">{featuredArticle.readTime}</span>
                  </div>
                </div>
              </Link>
            )}

            {/* Articles List Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {otherArticles.filter(a => a.id !== (activeCategory === 'All' ? featuredArticle.id : null)).map((article, idx) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>

            {/* Empty State */}
            {otherArticles.length === 0 && (
              <div className="py-20 text-center glass bg-gray-50 dark:bg-white/5 rounded-3xl border-gray-200 dark:border-white/5">
                <p className="text-gray-500 dark:text-gray-400 text-lg">No articles found in this category.</p>
              </div>
            )}

            {/* Load More Button */}
            <div className="mt-20 text-center">
               <button className="px-12 py-5 glass border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-gray-50 dark:hover:bg-white/5 transition-all">
                 Load More Archives
               </button>
            </div>
          </div>

          {/* Sidebar Area */}
          <aside className="lg:col-span-4 space-y-12">
            
            {/* Trending Now */}
            <div className="glass bg-gray-50 dark:bg-white/5 p-10 rounded-[2.5rem] border-gray-200 dark:border-white/10">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-8 flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span> Most Popular
              </h4>
              <div className="space-y-8">
                {NEWS.slice(0, 4).map((n, i) => (
                  <Link 
                    to={`/news/${n.category.toLowerCase().replace(/\s+/g, '-')}/${n.id}`} 
                    key={n.id} 
                    className="flex gap-4 group cursor-pointer"
                  >
                    <div className="text-2xl font-black text-gray-200 dark:text-white/10 group-hover:text-indigo-500 transition-colors leading-none">0{i+1}</div>
                    <div>
                      <h5 className="text-sm font-bold text-gray-900 dark:text-white leading-tight mb-2 group-hover:underline underline-offset-4 decoration-indigo-500">
                        {n.title}
                      </h5>
                      <span className="text-[9px] font-black uppercase text-gray-400 tracking-widest">{n.category}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter Spotlight */}
            <div className="p-10 rounded-[2.5rem] bg-indigo-600 text-white shadow-2xl shadow-indigo-500/30 relative overflow-hidden group">
               <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
               <h4 className="text-2xl font-black mb-4 leading-tight relative z-10">AI Intel <br />Direct to Inbox</h4>
               <p className="text-indigo-100 text-xs mb-8 font-light relative z-10">Join 45k founders receiving our proprietary market analysis every Thursday.</p>
               <input 
                 type="email" 
                 placeholder="Your Email" 
                 className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-xs focus:outline-none focus:bg-white/20 transition-all mb-4 placeholder:text-white/50 text-white font-medium"
               />
               <button className="w-full py-4 bg-white text-indigo-600 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:bg-indigo-50 transition-all active:scale-95">
                 Join The Briefing
               </button>
            </div>

            {/* Editorial Board Quote */}
            <div className="p-10 border-l-4 border-indigo-500 bg-gray-50 dark:bg-white/5 rounded-r-[2rem]">
               <p className="text-gray-600 dark:text-gray-400 italic text-sm font-light leading-relaxed mb-4">
                 "Our mission is to filter the signal from the noise. In a world of synthetic media, verified data is the only currency that matters."
               </p>
               <span className="text-[9px] font-black uppercase text-indigo-500 tracking-[0.2em]">— ABR Editorial Board</span>
            </div>

            {/* Tags Cloud */}
            <div className="p-4">
               <h4 className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6">Topic Clusters</h4>
               <div className="flex flex-wrap gap-2">
                 {['LLMs', 'NVIDIA', 'Sora', 'Agents', 'Ethics', 'Compliance', 'Open Source', 'SaaS', 'Venture'].map(tag => (
                   <span key={tag} className="px-3 py-1.5 bg-gray-100 dark:bg-white/5 text-[9px] font-bold text-gray-600 dark:text-gray-400 rounded-lg border border-gray-200 dark:border-white/5 hover:border-indigo-500/50 cursor-pointer transition-all">
                     #{tag}
                   </span>
                 ))}
               </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default News;
