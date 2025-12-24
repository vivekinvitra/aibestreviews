
import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CATEGORIES, AI_TOOLS } from '../constants';
import ToolCard from '../components/ToolCard';

const CategoryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const category = useMemo(() => CATEGORIES.find(c => c.id === id), [id]);

  const [priceFilter, setPriceFilter] = useState<'All' | 'Free' | 'Paid'>('All');
  const [minRating, setMinRating] = useState<number>(0);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedAudience, setSelectedAudience] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'Popularity' | 'PriceLow' | 'PriceHigh' | 'Rating' | 'Newest'>('Popularity');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const categoryTools = useMemo(() => {
    return AI_TOOLS.filter(t => t.category === category?.name);
  }, [category]);

  const allAvailableFeatures = useMemo(() => {
    const featuresSet = new Set<string>();
    categoryTools.forEach(t => t.features.forEach(f => featuresSet.add(f)));
    return Array.from(featuresSet).sort();
  }, [categoryTools]);

  const allAvailableAudience = useMemo(() => {
    const audienceSet = new Set<string>();
    categoryTools.forEach(t => t.targetAudience.forEach(a => audienceSet.add(a)));
    return Array.from(audienceSet).sort();
  }, [categoryTools]);

  const filteredAndSortedTools = useMemo(() => {
    let result = categoryTools.filter(t => {
      const matchesPrice = priceFilter === 'All' || 
                          (priceFilter === 'Free' && (t.price.toLowerCase().includes('free') || t.pricingTier === 'Free')) ||
                          (priceFilter === 'Paid' && !t.price.toLowerCase().includes('free'));
      const matchesRating = t.rating >= minRating;
      const matchesFeatures = selectedFeatures.length === 0 || selectedFeatures.every(f => t.features.includes(f));
      const matchesAudience = selectedAudience.length === 0 || selectedAudience.some(a => t.targetAudience.includes(a));
      return matchesPrice && matchesRating && matchesFeatures && matchesAudience;
    });

    result.sort((a, b) => {
      if (sortBy === 'Popularity') return b.reviewCount - a.reviewCount;
      if (sortBy === 'Rating') return b.rating - a.rating;
      if (sortBy === 'Newest') return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
      if (sortBy === 'PriceLow' || sortBy === 'PriceHigh') {
        const getPrice = (p: string) => {
          if (p.toLowerCase().includes('free')) return 0;
          const match = p.match(/\d+/);
          return match ? parseInt(match[0]) : 9999;
        };
        const pA = getPrice(a.price);
        const pB = getPrice(b.price);
        return sortBy === 'PriceLow' ? pA - pB : pB - pA;
      }
      return 0;
    });

    return result;
  }, [categoryTools, priceFilter, minRating, selectedFeatures, selectedAudience, sortBy]);

  const toggleFeature = (feature: string) => {
    setSelectedFeatures(prev => 
      prev.includes(feature) ? prev.filter(f => f !== feature) : [...prev, feature]
    );
  };

  const toggleAudience = (audience: string) => {
    setSelectedAudience(prev => 
      prev.includes(audience) ? prev.filter(a => a !== audience) : [...prev, audience]
    );
  };

  if (!category) {
    return (
      <div className="pt-40 text-center h-screen text-gray-900 dark:text-white">
        <h2 className="text-3xl font-bold mb-4">Category Not Found</h2>
        <Link to="/tools" className="text-indigo-600 hover:underline">Return to Directory</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 transition-colors duration-300">
      {/* Category Hero */}
      <section className="relative h-[400px] overflow-hidden">
        <img 
          src={category.imageUrl} 
          alt={category.name} 
          className="w-full h-full object-cover brightness-[0.4]"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-indigo-600 text-white text-[10px] font-black uppercase rounded-lg tracking-widest mb-6 shadow-xl">
                Expert Guide
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
                {category.icon} {category.name}
              </h1>
              <p className="text-xl text-gray-200 font-light leading-relaxed mb-8">
                {category.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {category.pageFeatures.map(f => (
                  <span key={f} className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1 space-y-10">
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-6">Pricing Model</h3>
              <div className="space-y-3">
                {['All', 'Free', 'Paid'].map(p => (
                  <label key={p} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="price" 
                      checked={priceFilter === p}
                      onChange={() => setPriceFilter(p as any)}
                      className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 focus:ring-indigo-500"
                    />
                    <span className={`text-sm font-bold tracking-tight transition-colors ${priceFilter === p ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white'}`}>
                      {p}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-6">Minimum Rating</h3>
              <div className="space-y-3">
                {[4.5, 4.0, 3.5, 3.0].map(r => (
                  <label key={r} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="rating" 
                      checked={minRating === r}
                      onChange={() => setMinRating(r)}
                      className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 focus:ring-indigo-500"
                    />
                    <span className={`text-sm font-bold flex items-center gap-1 transition-colors ${minRating === r ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-500'}`}>
                      {r}+ Stars <span className="text-yellow-500 text-xs">★</span>
                    </span>
                  </label>
                ))}
                <button onClick={() => setMinRating(0)} className="text-[10px] font-black uppercase tracking-widest text-indigo-500 hover:underline">Clear Rating</button>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-6">Best For</h3>
              <div className="flex flex-wrap gap-2">
                {allAvailableAudience.map(aud => (
                  <button 
                    key={aud}
                    onClick={() => toggleAudience(aud)}
                    className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                      selectedAudience.includes(aud)
                        ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                        : 'bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-500'
                    }`}
                  >
                    {aud}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-6">Core Features</h3>
              <div className="space-y-3">
                {allAvailableFeatures.map(feat => (
                  <label key={feat} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      checked={selectedFeatures.includes(feat)}
                      onChange={() => toggleFeature(feat)}
                      className="w-4 h-4 rounded text-indigo-600 bg-gray-100 border-gray-300 focus:ring-indigo-500"
                    />
                    <span className={`text-sm font-bold transition-colors ${selectedFeatures.includes(feat) ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-500'}`}>
                      {feat}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Tools Grid Area */}
          <div className="lg:col-span-3">
            
            {/* Sorting and Results Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12 pb-6 border-b border-gray-100 dark:border-white/5">
              <div className="text-sm font-medium text-gray-500">
                Showing <span className="text-gray-900 dark:text-white font-black">{filteredAndSortedTools.length}</span> tools in {category.name}
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Sort By</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent text-gray-900 dark:text-white font-black text-xs uppercase tracking-widest focus:outline-none cursor-pointer border-b-2 border-indigo-500 pb-1"
                >
                  <option value="Popularity">Popularity</option>
                  <option value="Rating">Highest Rated</option>
                  <option value="Newest">Newest Added</option>
                  <option value="PriceLow">Price: Low to High</option>
                  <option value="PriceHigh">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredAndSortedTools.length > 0 ? (
                filteredAndSortedTools.map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))
              ) : (
                <div className="col-span-full py-32 text-center glass bg-gray-50 dark:bg-white/5 rounded-[3rem] border-gray-100 dark:border-white/10">
                  <div className="text-6xl mb-6">🔎</div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3">No matches found</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Try adjusting your filters to discover more tools in the {category.name} space.</p>
                  <button 
                    onClick={() => {
                      setPriceFilter('All');
                      setMinRating(0);
                      setSelectedFeatures([]);
                      setSelectedAudience([]);
                    }}
                    className="mt-8 px-10 py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all active:scale-95"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>

            {/* Bottom Insight Section */}
            <div className="mt-20 p-12 glass bg-indigo-50/50 dark:bg-indigo-600/5 rounded-[3rem] border-indigo-100 dark:border-indigo-500/10">
               <div className="flex items-start gap-6">
                  <div className="text-4xl">💡</div>
                  <div>
                    <h4 className="text-xl font-black text-gray-900 dark:text-white mb-4">Buyer's Insight: {category.name}</h4>
                    <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-6">
                      When evaluating {category.name} software, prioritize integration capabilities over raw feature count. Most modern tools offer similar core generative outputs; the true differentiator is how they fit into your existing production pipeline—whether via API access, browser extensions, or direct CRM hooks.
                    </p>
                    <div className="flex items-center gap-8">
                       <div>
                          <div className="text-2xl font-black text-indigo-600 dark:text-indigo-400">85%</div>
                          <div className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Industry Adoption</div>
                       </div>
                       <div className="w-px h-8 bg-gray-200 dark:bg-white/10"></div>
                       <div>
                          <div className="text-2xl font-black text-indigo-600 dark:text-indigo-400">12.4x</div>
                          <div className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Avg. ROI (12mo)</div>
                       </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;
