
import React from 'react';
import { Link } from 'react-router-dom';
import { NewsArticle } from '../types';

interface NewsCardProps {
  article: NewsArticle;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  // Normalize category for URL
  const categorySlug = article.category.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <Link to={`/news/${categorySlug}/${article.id}`} className="group flex flex-col h-full animate-fade-in">
      <div className="relative overflow-hidden rounded-[2rem] mb-6 aspect-[16/10] shadow-xl border border-gray-100 dark:border-white/5">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white dark:bg-black/80 dark:backdrop-blur text-black dark:text-white text-[9px] font-black uppercase rounded-md tracking-widest border border-gray-100 dark:border-white/10 shadow-lg">
            {article.category}
          </span>
        </div>
      </div>
      <div className="flex flex-col flex-grow">
        <div className="flex items-center gap-3 text-gray-400 text-[9px] font-bold uppercase tracking-widest mb-4">
          <span>{article.date}</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          <span>{article.readTime}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {article.title}
        </h3>
        <p className="text-gray-500 dark:text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2 font-light">
          {article.summary}
        </p>
        <div className="mt-auto pt-4 border-t border-gray-50 dark:border-white/5 flex items-center justify-between">
           <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">By {article.author}</span>
           <span className="text-indigo-500 group-hover:translate-x-2 transition-transform">→</span>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
