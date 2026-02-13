
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AI_TOOLS } from '../constants';
import { AITool } from '../types';
import SEOHead from '../components/SEOHead';
import { generateToolSchema, generateBreadcrumbSchema } from '../utils/seo';

const ToolDetail: React.FC = () => {
  const { id } = useParams();
  const [tool, setTool] = useState<AITool | null>(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const found = AI_TOOLS.find(t => t.id === id);
    if (found) {
      setTool(found);
    }
    window.scrollTo(0, 0);
  }, [id]);

  if (!tool) return <div className="pt-40 text-center h-screen text-gray-900 dark:text-white">Loading tool details...</div>;

  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://aibestreviews.com/' },
    { name: 'Directory', url: 'https://aibestreviews.com/tools' },
    { name: tool.name, url: `https://aibestreviews.com/tool/${tool.id}` }
  ]);

  const currentYear = new Date().getFullYear();

  return (
    <>
      <SEOHead
        title={`${tool.name} Review ${currentYear} | ${tool.tagline}`}
        description={`Expert review of ${tool.name}: ${tool.tagline}. Rating: ${tool.rating}/5 from ${tool.reviewCount} reviews. Pricing starts at ${tool.price}. ${tool.pros.slice(0, 2).join('. ')}.`}
        canonical={`https://aibestreviews.com/tool/${tool.id}/`}
        image={tool.logo}
        type="product"
        schema={[generateToolSchema(tool), breadcrumbs]}
      />
      <div className="pt-28 pb-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500 mb-8 font-medium">
          <Link to="/tools" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Directory</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-bold">{tool.name}</span>
        </div>

        {/* Hero Header Section */}
        <div className="glass bg-gray-50 dark:bg-white/5 p-8 md:p-12 rounded-[2.5rem] mb-12 relative overflow-hidden border-gray-200 dark:border-white/10 shadow-xl">
          <div className="absolute top-0 right-0 p-8 hidden md:block">
             <div className="text-center bg-white/60 dark:bg-[#0b0c10]/40 backdrop-blur-md p-6 rounded-3xl border border-gray-200 dark:border-white/5 shadow-lg">
                <div className="text-4xl font-black text-gray-900 dark:text-white leading-none">{tool.rating}</div>
                <div className="text-yellow-500 text-xl my-2">
                   {"★".repeat(Math.floor(tool.rating))}<span className="text-gray-200 dark:text-gray-600">{"★".repeat(5 - Math.floor(tool.rating))}</span>
                </div>
                <div className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-bold tracking-widest">{tool.reviewCount} Verified Reviews</div>
             </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[2.2rem] blur opacity-10 dark:opacity-25 group-hover:opacity-40 transition-opacity"></div>
              <img src={tool.logo} alt={tool.name} className="relative w-28 h-28 md:w-40 md:h-40 rounded-[2rem] object-cover bg-white p-2 shadow-inner border border-gray-100 dark:border-transparent" />
            </div>
            <div className="text-center md:text-left flex-1">
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                <span className="px-4 py-1.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase rounded-full tracking-widest border border-indigo-500/20">{tool.category}</span>
                <span className="px-4 py-1.5 bg-gray-200/50 dark:bg-white/5 text-gray-500 dark:text-gray-400 text-[10px] font-black uppercase rounded-full tracking-widest border border-gray-300 dark:border-white/10">{tool.pricingTier}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-4 tracking-tighter">{tool.name}</h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl font-light leading-relaxed">{tool.tagline}</p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a 
                  href={tool.affiliateUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full sm:w-auto px-10 py-5 bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-black dark:hover:bg-indigo-50 rounded-2xl font-black uppercase text-xs tracking-[0.2em] shadow-2xl transition-all active:scale-95"
                >
                  Visit Official Website
                </a>
                <button className="w-full sm:w-auto px-10 py-5 glass bg-gray-100 dark:bg-white/5 border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/5 text-gray-700 dark:text-white rounded-2xl font-black uppercase text-xs tracking-[0.2em] transition-all">
                  Write a Review
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Areas */}
          <div className="lg:col-span-2">
            <div className="flex border-b border-gray-100 dark:border-white/5 mb-10 overflow-x-auto no-scrollbar scroll-smooth">
              {['Overview', 'Pricing', 'Features', 'Pros & Cons', 'Reviews'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`px-8 py-5 text-xs font-black uppercase tracking-widest transition-all border-b-2 whitespace-nowrap ${
                    activeTab === tab.toLowerCase() ? 'border-indigo-500 text-gray-900 dark:text-white' : 'border-transparent text-gray-400 hover:text-indigo-600 dark:hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="min-h-[400px]">
              {/* Tool Overview & Use Cases */}
              {activeTab === 'overview' && (
                <div className="animate-fade-in space-y-12">
                  <section>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Deep Dive Analysis</h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed text-lg font-light mb-8 whitespace-pre-line"
                      dangerouslySetInnerHTML={{ __html: tool?.description ?? "" }}
                    />
                  </section>
                  
                  <section>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-indigo-500/10 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-sm font-bold">✦</span>
                      Best Use Cases
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {tool.useCases.map((uc, i) => (
                        <div key={i} className="flex items-center gap-4 p-5 glass bg-gray-50 dark:bg-white/5 rounded-[1.5rem] border-gray-100 dark:border-white/5 group hover:border-indigo-500/30 transition-all">
                          <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-white/5 flex items-center justify-center text-indigo-600 dark:text-indigo-500 group-hover:scale-110 transition-transform">✓</div>
                          <span className="text-gray-700 dark:text-gray-300 font-medium">{uc}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              )}

              {/* Pricing Section */}
              {activeTab === 'pricing' && (
                <div className="animate-fade-in space-y-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Investment Structure</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="glass bg-gray-50 dark:bg-white/5 p-10 rounded-[2.5rem] border-gray-200 dark:border-indigo-500/30 relative overflow-hidden shadow-lg">
                      <div className="absolute top-0 right-0 p-6">
                        <span className="px-3 py-1 bg-indigo-600 text-white text-[10px] font-black uppercase rounded-full">Entry Tier</span>
                      </div>
                      <div className="mb-6">
                        <span className="text-5xl font-black text-gray-900 dark:text-white">{tool.price}</span>
                        <span className="text-gray-400 dark:text-gray-500 ml-2">/month</span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{tool.pricingTier} Plan</h4>
                      <p className="text-gray-500 dark:text-gray-500 text-sm mb-8 leading-relaxed">Perfect for individual creators and small teams looking to leverage {tool.name}'s core capabilities.</p>
                      <ul className="space-y-3 mb-10">
                         {tool.features.slice(0, 3).map(f => (
                           <li key={f} className="text-gray-700 dark:text-gray-300 text-sm flex items-center gap-2 font-medium">
                             <span className="text-indigo-600 dark:text-indigo-500 font-bold">✔</span> {f}
                           </li>
                         ))}
                      </ul>
                      <a href={tool.affiliateUrl} className="block w-full py-4 bg-indigo-600 text-white text-center font-black uppercase text-[10px] tracking-widest rounded-xl hover:bg-indigo-700 transition-all shadow-lg">Get Started</a>
                    </div>
                    
                    <div className="glass bg-gray-100 dark:bg-white/5 p-10 rounded-[2.5rem] border-gray-200 dark:border-white/5 opacity-80 hover:opacity-100 transition-all">
                      <div className="mb-6">
                        <span className="text-5xl font-black text-gray-900 dark:text-white">Custom</span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Enterprise Hub</h4>
                      <p className="text-gray-500 dark:text-gray-500 text-sm mb-8 leading-relaxed">For organizations requiring high-volume usage, API access, and dedicated support.</p>
                      <button className="block w-full py-4 glass bg-white dark:bg-white/5 text-gray-900 dark:text-white text-center font-black uppercase text-[10px] tracking-widest rounded-xl hover:bg-gray-50 dark:hover:bg-white/10 border-gray-200 dark:border-white/10 transition-all">Contact Sales</button>
                    </div>
                  </div>
                </div>
              )}

              {/* Feature Breakdown */}
              {activeTab === 'features' && (
                <div className="animate-fade-in space-y-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Technological Capabilities</h2>
                  <div className="grid grid-cols-1 gap-4">
                    {tool.features.map((feat, i) => (
                      <div key={i} className="p-8 glass bg-gray-50 dark:bg-white/5 rounded-[1.5rem] flex items-center justify-between group hover:bg-gray-100 dark:hover:bg-white/[0.05] border-gray-100 dark:border-white/5 transition-all">
                        <div className="flex items-center gap-6">
                          <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold">{i+1}</div>
                          <span className="text-gray-900 dark:text-white text-lg font-bold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{feat}</span>
                        </div>
                        <span className="text-gray-300 dark:text-gray-600 group-hover:text-indigo-500 transition-colors font-bold">→</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Pros & Cons */}
              {activeTab === 'pros & cons' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
                  <div className="glass bg-green-50/20 dark:bg-green-500/5 p-10 rounded-[2.5rem] border-green-200 dark:border-green-500/10">
                    <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-8 flex items-center gap-4">
                      <span className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-400/10 flex items-center justify-center text-xl font-black">+</span> Advantages
                    </h3>
                    <ul className="space-y-6">
                      {tool.pros.map((pro, i) => (
                        <li key={i} className="text-gray-700 dark:text-gray-300 flex items-start gap-4">
                          <div className="mt-1 w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></div>
                          <p className="font-light leading-relaxed">{pro}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="glass bg-red-50/20 dark:bg-red-500/5 p-10 rounded-[2.5rem] border-red-200 dark:border-red-500/10">
                    <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-8 flex items-center gap-4">
                      <span className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-400/10 flex items-center justify-center text-xl font-black">−</span> Limitations
                    </h3>
                    <ul className="space-y-6">
                      {tool.cons.map((con, i) => (
                        <li key={i} className="text-gray-700 dark:text-gray-300 flex items-start gap-4">
                          <div className="mt-1 w-2 h-2 rounded-full bg-red-500 flex-shrink-0"></div>
                          <p className="font-light leading-relaxed">{con}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* User Reviews */}
              {activeTab === 'reviews' && (
                <div className="animate-fade-in space-y-10">
                   <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Community Ratings</h2>
                      <button className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold text-sm shadow-lg">Write Review</button>
                   </div>
                   
                   <div className="grid grid-cols-1 gap-6">
                      {[
                        { name: "Sarah J.", role: "Creative Director", rating: 5, comment: "Absolutely changed our video workflow. We've cut production time by 70% using their avatars." },
                        { name: "Mark T.", role: "Marketing Lead", rating: 4, comment: "Great UI, easy to learn. Wish there were more casual avatar poses, but for corporate it's 10/10." }
                      ].map((rev, i) => (
                        <div key={i} className="glass bg-gray-50/50 dark:bg-white/5 p-8 rounded-[2rem] border-gray-100 dark:border-white/5 shadow-sm">
                           <div className="flex items-center justify-between mb-4">
                              <div>
                                 <div className="text-gray-900 dark:text-white font-bold">{rev.name}</div>
                                 <div className="text-gray-400 dark:text-gray-500 text-xs font-bold uppercase tracking-widest">{rev.role}</div>
                              </div>
                              <div className="text-yellow-500 font-bold">{"★".repeat(rev.rating)}</div>
                           </div>
                           <p className="text-gray-600 dark:text-gray-400 font-light italic">"{rev.comment}"</p>
                        </div>
                      ))}
                   </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="space-y-8">
            <div className="glass bg-gray-50 dark:bg-white/5 p-10 rounded-[2.5rem] border-gray-200 dark:border-white/10 sticky top-28 shadow-sm">
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-8">Audience Profile</h3>
              <div className="flex flex-wrap gap-2 mb-10">
                {tool.targetAudience.map(aud => (
                  <span key={aud} className="px-4 py-2 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 rounded-xl text-[10px] font-bold text-indigo-600 dark:text-indigo-300 uppercase tracking-wider">{aud}</span>
                ))}
              </div>
              
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-8">Industry Alternatives</h3>
              <div className="space-y-4 mb-10">
                {tool.alternatives.map(alt => (
                  <Link 
                    key={alt} 
                    to={`/tools`} 
                    className="flex items-center justify-between p-5 glass bg-white dark:bg-white/5 rounded-2xl border-gray-100 dark:border-white/5 hover:border-indigo-500/40 hover:bg-gray-50 dark:hover:bg-white/[0.05] transition-all group shadow-sm"
                  >
                    <span className="text-gray-700 dark:text-gray-300 font-bold group-hover:text-indigo-600 dark:group-hover:text-white transition-colors">{alt}</span>
                    <span className="text-xs text-indigo-500 dark:text-indigo-400 font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">Review</span>
                  </Link>
                ))}
              </div>

              <div className="p-8 bg-indigo-50 dark:bg-indigo-600/10 border border-indigo-100 dark:border-indigo-500/20 rounded-3xl">
                <h3 className="text-indigo-900 dark:text-white font-bold mb-4">Verified Listing</h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs mb-8 leading-relaxed font-light">This data is strictly vetted by our research team as of May 2024. Report inconsistencies to our data team.</p>
                <button className="w-full py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-xl font-black uppercase text-[10px] tracking-widest shadow-xl transition-all active:scale-95">Claim Profile</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ToolDetail;
