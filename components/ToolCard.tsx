
import React from 'react';
import { Link } from 'react-router-dom';
import { AITool } from '../types';

interface ToolCardProps {
  tool: AITool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <div className="group relative glass p-8 rounded-[2.5rem] bg-gray-50/30 dark:bg-white/5 hover:border-indigo-500/50 transition-all hover:translate-y-[-6px] overflow-hidden border-gray-200 dark:border-white/5">
      <div className="absolute top-0 right-0 p-6">
        <span className="px-3 py-1 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 text-[10px] font-black uppercase rounded-full tracking-widest">
          {tool.pricingTier}
        </span>
      </div>
      
      <div className="flex items-start gap-5 mb-8">
        <div className="relative">
          <div className="absolute -inset-1 bg-indigo-500/20 rounded-2xl blur group-hover:opacity-100 opacity-0 transition-opacity"></div>
          <img 
            src={tool.logo} 
            alt={tool.name} 
            className="relative w-16 h-16 rounded-[1.25rem] object-cover bg-white p-1 border border-gray-100 dark:border-transparent"
          />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-tight">{tool.name}</h3>
          <div className="flex items-center gap-1 mt-2">
            <span className="text-yellow-500 text-sm">★</span>
            <span className="text-gray-700 dark:text-gray-400 font-bold text-xs uppercase tracking-widest">{tool.rating}</span>
            <span className="text-gray-400 dark:text-gray-600 text-[10px] ml-1 font-medium">({tool.reviewCount})</span>
          </div>
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-500 text-sm mb-8 line-clamp-2 h-10 leading-relaxed font-light">
        {tool.tagline}
      </p>

      <div className="flex flex-wrap gap-2 mb-10">
        {tool.features.slice(0, 3).map((feat) => (
          <span key={feat} className="text-[9px] font-black uppercase tracking-widest bg-gray-100 dark:bg-white/5 px-3 py-1.5 rounded-lg text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-white/5">
            {feat}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between mt-auto">
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-400 dark:text-gray-600 uppercase font-black tracking-widest mb-1">Starts at</span>
          <span className="text-gray-900 dark:text-white font-black text-lg">{tool.price}</span>
        </div>
        <Link 
          to={`/tool/${tool.id}`} 
          className="bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-black px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all border border-gray-200 dark:border-white/10 active:scale-95"
        >
          Analysis
        </Link>
      </div>
    </div>
  );
};

export default ToolCard;
