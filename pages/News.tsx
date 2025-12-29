
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ContentService } from '../services/contentService';
import NewsCard from '../components/NewsCard';

const News: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const articles = ContentService.getNews();
  const featuredArticle = ContentService.getFeaturedNews();
  
  const categories = ['All', 'Policy', 'Research', 'Business', 'Top Story', 'Productivity'];

  const filteredArticles = useMemo(() => {
    return articles.filter(n => (activeCategory === 'All' || n.category === activeCategory));
  }, [activeCategory, articles]);

  return (
    <div className="pt-32 pb-20 transition-colors duration-300 min-h-screen bg-white dark:bg-[#0b0c10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border-b border-gray-100 dark:border-white/5 pb-8">
          <h1 className="text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">The Wire <span className="text-indigo-500">.</span></h1>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar max-w-full">
            {categories.map(cat => (
              <button 
                key={cat} 
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeCategory === cat ? 'bg-gray-900 dark:bg-white text-white dark:text-black' : 'text-gray-500 hover:text-indigo-600 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            {activeCategory === 'All' && featuredArticle && (
              <Link to={`/news/${featuredArticle.category.toLowerCase()}/${featuredArticle.id}`} className="mb-16 block group relative overflow-hidden rounded-[2.5rem] aspect-[21/9] shadow-2xl">
                <img src={featuredArticle.imageUrl} alt={featuredArticle.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10">
                  <h2 className="text-3xl md:text-5xl font-black text-white mb-4 group-hover:text-indigo-400">{featuredArticle.title}</h2>
                </div>
              </Link>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {filteredArticles.filter(a => a.id !== (activeCategory === 'All' ? featuredArticle?.id : null)).map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
