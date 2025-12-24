
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { AI_TOOLS } from '../constants';
import { AITool } from '../types';

const Compare: React.FC = () => {
  // Support comparing up to 4 tools
  const [selectedIds, setSelectedIds] = useState<string[]>([
    AI_TOOLS[0]?.id || '',
    AI_TOOLS[4]?.id || '', // ChatGPT
    AI_TOOLS[3]?.id || '', // Descript
    AI_TOOLS[1]?.id || ''  // Canva
  ]);

  const selectedTools = useMemo(() => {
    return selectedIds.map(id => AI_TOOLS.find(t => t.id === id)).filter(Boolean) as AITool[];
  }, [selectedIds]);

  const handleToolChange = (index: number, newId: string) => {
    const nextIds = [...selectedIds];
    nextIds[index] = newId;
    setSelectedIds(nextIds);
  };

  const featureRows = [
    { label: 'Pricing Plan', key: 'pricingTier' },
    { label: 'Starting At', key: 'price' },
    { label: 'Best For', key: 'bestFor' },
    { label: 'Star Rating', key: 'rating' },
    { label: 'Market Segment', key: 'targetAudience' },
    { label: 'Core Features', key: 'features' },
  ];

  return (
    <div className="pt-32 pb-20 transition-colors duration-300 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            Benchmark Engine v2.0
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 font-heading tracking-tighter">
            Compare <span className="gradient-text">Top AI</span> Platforms
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Select up to four competitors to visualize key differences in features, audience targeting, and ROI.
          </p>
        </div>

        {/* Tool Selectors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {selectedIds.map((id, idx) => (
            <div key={idx} className="relative group">
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-2">Slot 0{idx + 1}</label>
              <select
                value={id}
                onChange={(e) => handleToolChange(idx, e.target.value)}
                className="w-full bg-white dark:bg-[#15171e] border border-gray-200 dark:border-white/10 rounded-2xl px-4 py-4 text-sm font-bold text-gray-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-all appearance-none cursor-pointer shadow-sm group-hover:border-indigo-500/50"
              >
                <option value="">Select a tool...</option>
                {AI_TOOLS.map(t => (
                  <option key={t.id} value={t.id} disabled={selectedIds.includes(t.id) && t.id !== id}>
                    {t.name}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 bottom-4 pointer-events-none text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Matrix */}
        <div className="overflow-x-auto no-scrollbar glass bg-white dark:bg-[#0b0c10] border border-gray-200 dark:border-white/10 rounded-[2.5rem] shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 dark:border-white/5">
                <th className="p-8 min-w-[200px] bg-gray-50/50 dark:bg-white/[0.02]">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500 dark:text-indigo-400">Feature Matrix</span>
                </th>
                {selectedTools.map((tool) => (
                  <th key={tool.id} className="p-8 min-w-[250px] border-l border-gray-100 dark:border-white/5">
                    <div className="flex flex-col items-center text-center">
                      <img src={tool.logo} alt={tool.name} className="w-20 h-20 rounded-2xl object-cover bg-white p-1 mb-4 shadow-lg border border-gray-100 dark:border-transparent" />
                      <h3 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-tight">{tool.name}</h3>
                      <Link to={`/tool/${tool.id}`} className="mt-4 text-[10px] font-black text-indigo-500 uppercase tracking-widest hover:underline">Full Analysis</Link>
                    </div>
                  </th>
                ))}
                {/* Empty slots placeholders */}
                {[...Array(4 - selectedTools.length)].map((_, i) => (
                  <th key={i} className="p-8 min-w-[250px] border-l border-gray-100 dark:border-white/5 opacity-20">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 rounded-2xl bg-gray-200 dark:bg-white/5 mb-4 border-2 border-dashed border-gray-300 dark:border-white/10" />
                      <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">Empty Slot</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featureRows.map((row, rowIdx) => (
                <tr key={row.label} className={`border-b border-gray-100 dark:border-white/5 transition-colors ${rowIdx % 2 === 0 ? 'bg-transparent' : 'bg-gray-50/30 dark:bg-white/[0.01]'}`}>
                  <td className="p-8 bg-gray-50/50 dark:bg-white/[0.02]">
                    <span className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">{row.label}</span>
                  </td>
                  {selectedTools.map((tool) => (
                    <td key={tool.id} className="p-8 border-l border-gray-100 dark:border-white/5">
                      {row.key === 'rating' ? (
                        <div className="flex flex-col gap-1">
                          <div className="flex text-yellow-500 text-lg">
                            {"★".repeat(Math.floor(tool.rating))}<span className="text-gray-200 dark:text-gray-700">{"★".repeat(5 - Math.floor(tool.rating))}</span>
                          </div>
                          <span className="text-xs font-bold text-gray-900 dark:text-white">{tool.rating} / 5.0</span>
                        </div>
                      ) : row.key === 'bestFor' ? (
                        <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 leading-tight">
                          {tool.useCases[0]}
                        </span>
                      ) : row.key === 'targetAudience' ? (
                        <div className="flex flex-wrap gap-1">
                          {tool.targetAudience.map(aud => (
                            <span key={aud} className="px-2 py-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-md text-[9px] font-bold text-gray-500 dark:text-gray-400 uppercase">
                              {aud}
                            </span>
                          ))}
                        </div>
                      ) : row.key === 'features' ? (
                        <ul className="space-y-2">
                          {tool.features.slice(0, 4).map(f => (
                            <li key={f} className="text-[11px] font-medium text-gray-600 dark:text-gray-400 flex items-start gap-2">
                              <span className="text-indigo-500 font-bold">•</span> {f}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <span className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-tight">
                          {(tool as any)[row.key]}
                        </span>
                      )}
                    </td>
                  ))}
                  {/* Fill missing tool data columns */}
                  {[...Array(4 - selectedTools.length)].map((_, i) => (
                    <td key={i} className="p-8 border-l border-gray-100 dark:border-white/5 text-center">
                      <span className="text-gray-300 dark:text-gray-800 text-xs font-black">—</span>
                    </td>
                  ))}
                </tr>
              ))}
              
              {/* Bottom Call to Action Row */}
              <tr>
                <td className="p-8 bg-gray-50/50 dark:bg-white/[0.02]"></td>
                {selectedTools.map((tool) => (
                  <td key={tool.id} className="p-8 border-l border-gray-100 dark:border-white/5">
                    <a 
                      href={tool.affiliateUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block w-full py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-xl text-center text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
                    >
                      Visit Tool
                    </a>
                  </td>
                ))}
                {[...Array(4 - selectedTools.length)].map((_, i) => (
                  <td key={i} className="p-8 border-l border-gray-100 dark:border-white/5" />
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Legend / Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="p-8 glass rounded-3xl border-white/5">
              <div className="text-indigo-500 text-2xl mb-4">⚖️</div>
              <h4 className="text-gray-900 dark:text-white font-bold mb-2">Unbiased Scores</h4>
              <p className="text-gray-500 text-xs leading-relaxed font-light">Ratings are aggregated from G2, Capterra, and our own proprietary testing benchmarks.</p>
           </div>
           <div className="p-8 glass rounded-3xl border-white/5">
              <div className="text-indigo-500 text-2xl mb-4">💰</div>
              <h4 className="text-gray-900 dark:text-white font-bold mb-2">Pricing Accuracy</h4>
              <p className="text-gray-500 text-xs leading-relaxed font-light">Data is refreshed weekly to capture the latest "freemium" updates and promotional offers.</p>
           </div>
           <div className="p-8 glass rounded-3xl border-white/5">
              <div className="text-indigo-500 text-2xl mb-4">🛠️</div>
              <h4 className="text-gray-900 dark:text-white font-bold mb-2">Technical Vetting</h4>
              <p className="text-gray-500 text-xs leading-relaxed font-light">"Core Features" are ranked by adoption rates and verified API stability.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;
