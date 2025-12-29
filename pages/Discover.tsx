
import React, { useState, useMemo } from 'react';
import { ContentService } from '../services/contentService';
import ToolCard from '../components/ToolCard';

const Discover: React.FC = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categoriesData = ContentService.getCategories();
  const toolsData = ContentService.getTools();
  
  const categoriesList = useMemo(() => ['All', ...categoriesData.map(c => c.name)], [categoriesData]);
  
  const filteredTools = useMemo(() => {
    return toolsData.filter(t => {
      const matchesSearch = t.name.toLowerCase().includes(search.toLowerCase()) || 
                            t.tagline.toLowerCase().includes(search.toLowerCase()) ||
                            t.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === 'All' || t.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory, toolsData]);

  return (
    <div className="pt-32 pb-20 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 font-heading tracking-tight">
            The AI <span className="gradient-text">Directory</span>
          </h1>
        </div>
        
        <div className="flex flex-col gap-8 mb-12">
          <input 
            type="text"
            placeholder="Search tools..."
            className="w-full bg-white dark:bg-[#0b0c10] border border-gray-200 dark:border-white/10 rounded-2xl px-8 py-4 text-lg focus:outline-none shadow-xl"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar">
            {categoriesList.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-xl font-bold text-xs whitespace-nowrap transition-all border ${
                  activeCategory === cat ? 'bg-indigo-600 text-white' : 'bg-gray-100 dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;
