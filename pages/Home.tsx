
import React from 'react';
import { Link } from 'react-router-dom';
import { ContentService } from '../services/contentService';
import ToolCard from '../components/ToolCard';
import NewsCard from '../components/NewsCard';

const Home: React.FC = () => {
  const tools = ContentService.getTools();
  const categories = ContentService.getCategories();
  const news = ContentService.getNews();

  return (
    <div className="pt-32 pb-20 overflow-x-hidden transition-colors duration-300">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24 relative">
        <div className="absolute top-[-150px] left-1/2 transform -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/5 dark:bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8 animate-pulse">
          🏆 Verified AI Reviews 2026
        </div>
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-gray-900 dark:text-white mb-8 leading-[0.9]">
          The Authority on <br /><span className="gradient-text">AI Software</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          We test, rank, and review the world's most powerful AI tools. Find the perfect fit for your workflow with <span className="text-gray-900 dark:text-white font-bold italic">aiBestReviews</span>.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link to="/tools" className="group w-full sm:w-auto px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold text-xl shadow-2xl shadow-indigo-500/40 transition-all active:scale-95">
            Explore {tools.length}+ Reviews <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link to="/compare" className="w-full sm:w-auto px-10 py-5 glass bg-gray-50/50 dark:bg-white/5 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-full font-bold text-xl transition-all border border-gray-200 dark:border-white/20">
            Compare Head-to-Head
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Discovery Hub</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Skip the hype. Browse our deep-dive collections by category.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link key={cat.id} to={`/category/${cat.id}`} className="group glass bg-gray-50/30 dark:bg-white/5 p-8 rounded-[2.5rem] border-gray-100 dark:border-white/5 hover:border-indigo-500/40 transition-all hover:bg-gray-100/50 dark:hover:bg-white/[0.05]">
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform">{cat.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{cat.name}</h3>
              <p className="text-gray-600 dark:text-gray-500 text-sm leading-relaxed mb-6">{cat.description}</p>
              <div className="text-indigo-600 dark:text-indigo-400 font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all">See Best Rated <span>→</span></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-16">Featured AI Platforms</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.slice(0, 3).map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-16 text-center">Latest Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.slice(0, 3).map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
