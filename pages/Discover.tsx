
import React, { useState, useMemo } from 'react';
import { AI_TOOLS, CATEGORIES } from '../constants';
import ToolCard from '../components/ToolCard';

const Discover: React.FC = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = useMemo(() => ['All', ...CATEGORIES.map(c => c.name)], []);
  
  const filteredTools = useMemo(() => {
    return AI_TOOLS.filter(t => {
      const matchesSearch = t.name.toLowerCase().includes(search.toLowerCase()) || 
                            t.tagline.toLowerCase().includes(search.toLowerCase()) ||
                            t.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === 'All' || t.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <div className="pt-32 pb-20 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 font-heading tracking-tight">
            The AI <span className="gradient-text">Directory</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl leading-relaxed">
            Browse through our curated database of {AI_TOOLS.length}+ verified AI tools. Filter by category or search for specific features.
          </p>
        </div>
        
        {/* Search and Filters */}
        <div className="flex flex-col gap-8 mb-12">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-5 dark:opacity-10 group-focus-within:opacity-15 dark:group-focus-within:opacity-25 transition-opacity"></div>
            <div className="relative flex items-center">
              <span className="absolute left-6 text-gray-400 text-xl">🔍</span>
              <input 
                type="text"
                placeholder="Search tools by name, features, or category..."
                className="w-full bg-white dark:bg-[#0b0c10] border border-gray-200 dark:border-white/10 rounded-2xl px-16 py-6 text-gray-900 dark:text-white text-lg focus:outline-none focus:border-indigo-500 transition-all shadow-xl dark:shadow-2xl"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-3 overflow-x-auto pb-4 no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-2xl font-bold text-sm whitespace-nowrap transition-all border ${
                  activeCategory === cat 
                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/20' 
                    : 'bg-gray-100 dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-200 dark:hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between text-gray-400 dark:text-gray-500 text-sm border-b border-gray-100 dark:border-white/5 pb-6 mb-10">
          <span className="font-medium">Found <span className="text-gray-900 dark:text-white font-bold">{filteredTools.length}</span> results</span>
          <div className="hidden sm:flex items-center gap-6">
            <span className="flex items-center gap-2">Sort by: 
              <select className="bg-transparent text-gray-900 dark:text-white font-bold outline-none cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <option className="bg-white dark:bg-[#0b0c10]">Trending</option>
                <option className="bg-white dark:bg-[#0b0c10]">Highest Rated</option>
                <option className="bg-white dark:bg-[#0b0c10]">Most Popular</option>
              </select>
            </span>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTools.length > 0 ? (
            filteredTools.map((tool, idx) => (
              <div key={tool.id} className="animate-fade-in" style={{ animationDelay: `${idx * 50}ms` }}>
                <ToolCard tool={tool} />
              </div>
            ))
          ) : (
            <div className="col-span-full py-32 text-center glass bg-gray-50 dark:bg-white/5 rounded-[3rem] border-gray-200 dark:border-white/5">
              <div className="text-6xl mb-6">🏜️</div>
              <h3 className="text-gray-900 dark:text-white font-bold text-2xl mb-3">No tools found</h3>
              <p className="text-gray-500 dark:text-gray-500 max-w-sm mx-auto">We couldn't find any tools matching your current search or category filters.</p>
              <button 
                onClick={() => {setSearch(''); setActiveCategory('All')}}
                className="mt-8 px-8 py-3 bg-gray-200 dark:bg-white/5 hover:bg-gray-300 dark:hover:bg-white/10 text-gray-900 dark:text-white rounded-xl font-bold transition-all"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Discover;
