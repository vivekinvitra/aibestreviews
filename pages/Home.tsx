
import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES, AI_TOOLS, NEWS } from '../constants';
import ToolCard from '../components/ToolCard';
import NewsCard from '../components/NewsCard';

const Home: React.FC = () => {
  return (
    <div className="pt-32 pb-20 overflow-x-hidden transition-colors duration-300">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24 relative">
        <div className="absolute top-[-150px] left-1/2 transform -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/5 dark:bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8 animate-pulse">
          🏆 Verified AI Reviews 2024
        </div>
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-gray-900 dark:text-white mb-8 leading-[0.9]">
          The Authority on <br /><span className="gradient-text">AI Software</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          We test, rank, and review the world's most powerful AI tools. Find the perfect fit for your workflow with <span className="text-gray-900 dark:text-white font-bold italic">aiBestReviews</span>.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link to="/tools" className="group w-full sm:w-auto px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold text-xl shadow-2xl shadow-indigo-500/40 transition-all active:scale-95">
            Explore {AI_TOOLS.length}+ Reviews <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link to="/compare" className="w-full sm:w-auto px-10 py-5 glass bg-gray-50/50 dark:bg-white/5 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-full font-bold text-xl transition-all border border-gray-200 dark:border-white/20">
            Compare Head-to-Head
          </Link>
        </div>
        
        {/* Statistics */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-gray-100 dark:border-white/10 pt-12">
          <div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">500+</div>
            <div className="text-gray-500 text-sm uppercase font-bold tracking-widest">In-Depth Reviews</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">250k+</div>
            <div className="text-gray-500 text-sm uppercase font-bold tracking-widest">Monthly Readers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">100%</div>
            <div className="text-gray-500 text-sm uppercase font-bold tracking-widest">Independent</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">Real</div>
            <div className="text-gray-500 text-sm uppercase font-bold tracking-widest">User Benchmarks</div>
          </div>
        </div>
      </section>

      {/* Dynamic Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Discovery Hub</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Skip the hype. Browse our deep-dive collections by category.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <Link 
              key={cat.id} 
              to={`/category/${cat.id}`}
              className="group glass bg-gray-50/30 dark:bg-white/5 p-8 rounded-[2.5rem] border-gray-100 dark:border-white/5 hover:border-indigo-500/40 transition-all hover:bg-gray-100/50 dark:hover:bg-white/[0.05]"
            >
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform">{cat.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{cat.name}</h3>
              <p className="text-gray-600 dark:text-gray-500 text-sm leading-relaxed mb-6">{cat.description}</p>
              <div className="text-indigo-600 dark:text-indigo-400 font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                See Best Rated <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Tools */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured AI Platforms</h2>
            <p className="text-gray-500">The most influential tools currently reshaping industries.</p>
          </div>
          <Link to="/tools" className="px-8 py-3 glass bg-gray-50/50 dark:bg-white/5 border-gray-200 dark:border-white/10 rounded-xl text-gray-700 dark:text-white font-bold hover:bg-gray-100 dark:hover:bg-white/5 transition-all">Browse Directory</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AI_TOOLS.slice(0, 3).map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      {/* Latest Insights (News) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Latest From The Wire</h2>
            <p className="text-gray-500">Stay ahead with the latest industry research, policy, and trends.</p>
          </div>
          <Link to="/news" className="px-8 py-3 glass bg-gray-50/50 dark:bg-white/5 border-gray-200 dark:border-white/10 rounded-xl text-gray-700 dark:text-white font-bold hover:bg-gray-100 dark:hover:bg-white/5 transition-all">Explore News Hub</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS.slice(0, 3).map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* Trust Badge Section */}
      <section className="bg-gray-50 dark:bg-white/5 py-24 mb-32 border-y border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-16">Why Professionals Trust [ABR]</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "No Paid Bias", desc: "We don't accept money for higher rankings. Our scores are purely performance-based." },
              { title: "Hands-on Testing", desc: "Every tool is tested for at least 10 hours before a final review is published." },
              { title: "Price Transparency", desc: "We track historical pricing to let you know if you're getting a fair deal." }
            ].map((item, i) => (
              <div key={i} className="p-8">
                <div className="text-indigo-600 dark:text-indigo-500 text-4xl mb-4">✦</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative glass bg-gray-50 dark:bg-white/5 p-12 md:p-20 rounded-[3rem] border-gray-200 dark:border-indigo-500/20 overflow-hidden text-center bg-gradient-to-br from-indigo-600/5 dark:from-indigo-600/20 to-transparent">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05),transparent)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent)] pointer-events-none"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-heading">Join the [ABR] Circle</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 max-w-2xl mx-auto font-light">Get a curated list of new AI tools and hidden gems delivered to your inbox weekly.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="name@company.com" 
              className="flex-1 px-6 py-4 rounded-2xl bg-white dark:bg-[#0b0c10] border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-all shadow-inner"
            />
            <button className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-2xl font-bold hover:bg-black dark:hover:bg-gray-200 transition-all shadow-xl active:scale-95">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
