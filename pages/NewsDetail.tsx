
import React, { useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { NEWS } from '../constants';

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  const article = useMemo(() => NEWS.find(n => n.id === id), [id]);
  const relatedArticles = useMemo(() => NEWS.filter(n => n.id !== id).slice(0, 3), [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="pt-40 pb-20 text-center min-h-screen">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Article Not Found</h2>
        <Link to="/news" className="text-indigo-600 hover:underline">Back to The Wire</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 transition-colors duration-300 min-h-screen bg-white dark:bg-[#0b0c10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 mb-8">
          <Link to="/news" className="hover:text-indigo-600 transition-colors">The Wire</Link>
          <span>/</span>
          <span className="text-indigo-500">{article.category}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Article Content */}
          <article className="lg:col-span-8">
            <header className="mb-12">
              <span className="inline-block px-4 py-1.5 bg-indigo-600 text-white text-[10px] font-black uppercase rounded-lg tracking-widest mb-6">
                {article.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight mb-8 tracking-tighter">
                {article.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-8 py-6 border-y border-gray-100 dark:border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center font-bold text-gray-500">
                    {article.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Written By</div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">{article.author}</div>
                  </div>
                </div>
                <div className="h-8 w-px bg-gray-100 dark:bg-white/5 hidden sm:block"></div>
                <div>
                  <div className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Published</div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white">{article.date}</div>
                </div>
                <div className="h-8 w-px bg-gray-100 dark:bg-white/5 hidden sm:block"></div>
                <div>
                  <div className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Reading Time</div>
                  <div className="text-sm font-bold text-indigo-500">{article.readTime}</div>
                </div>
              </div>
            </header>

            <figure className="mb-12 rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 dark:border-white/5">
              <img 
                src={article.imageUrl} 
                alt={article.title} 
                className="w-full aspect-[16/9] object-cover"
              />
            </figure>

            {/* Social Share (Static) */}
            <div className="flex gap-4 mb-12">
               {['Share on X', 'Share on LinkedIn', 'Email Article'].map(platform => (
                 <button key={platform} className="px-4 py-2 border border-gray-100 dark:border-white/5 rounded-full text-[9px] font-black uppercase tracking-widest text-gray-500 hover:border-indigo-500 hover:text-indigo-500 transition-all">
                   {platform}
                 </button>
               ))}
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-light italic mb-10 border-l-4 border-indigo-500 pl-8 py-2">
                {article.summary}
              </p>
              
              <div className="text-gray-700 dark:text-gray-400 leading-[1.8] font-light space-y-8 whitespace-pre-line text-lg">
                {article.content || "Content coming soon..."}
              </div>
            </div>

            <footer className="mt-20 pt-12 border-t border-gray-100 dark:border-white/5">
               <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-8">Tags</h4>
               <div className="flex flex-wrap gap-2">
                 {['Artificial Intelligence', article.category, 'Global Markets', 'Tech Ethics'].map(tag => (
                   <span key={tag} className="px-4 py-2 bg-gray-100 dark:bg-white/5 rounded-lg text-xs font-bold text-gray-500">#{tag}</span>
                 ))}
               </div>
            </footer>
          </article>

          {/* Sidebar Area */}
          <aside className="lg:col-span-4 space-y-12">
            
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

            {/* Trending / Related */}
            <div className="glass bg-gray-50 dark:bg-white/5 p-10 rounded-[2.5rem] border-gray-200 dark:border-white/10">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-8">Related Coverage</h4>
              <div className="space-y-8">
                {relatedArticles.map((n, i) => (
                  <Link 
                    to={`/news/${n.category.toLowerCase().replace(/\s+/g, '-')}/${n.id}`} 
                    key={n.id} 
                    className="block group"
                  >
                    <div className="text-[9px] font-black uppercase text-indigo-500 tracking-widest mb-2">{n.category}</div>
                    <h5 className="text-sm font-bold text-gray-900 dark:text-white leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {n.title}
                    </h5>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sticky Ad / Promo */}
            <div className="sticky top-28">
               <div className="p-8 glass bg-gray-50 dark:bg-white/5 rounded-[2rem] border border-dashed border-gray-300 dark:border-white/10 text-center">
                  <span className="text-[8px] font-black uppercase text-gray-400 mb-6 block tracking-[0.3em]">Partner Spotlight</span>
                  <div className="w-12 h-12 bg-indigo-500 rounded-2xl mx-auto mb-6 flex items-center justify-center font-bold text-white">ABR</div>
                  <h5 className="text-gray-900 dark:text-white font-bold mb-4">Want your tool featured?</h5>
                  <p className="text-gray-500 text-[10px] leading-relaxed mb-6">Reach 250k+ decision makers monthly.</p>
                  <button className="w-full py-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-xl text-[9px] font-black uppercase tracking-widest">Media Kit</button>
               </div>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
