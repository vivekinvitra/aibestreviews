
import React from 'react';
import { Link } from 'react-router-dom';
import { ContentService } from '../services/contentService';

const Footer: React.FC = () => {
  const data = ContentService.getFooterData();

  return (
    <footer className="bg-white dark:bg-[#0b0c10] border-t border-gray-100 dark:border-white/10 py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white text-[10px] shadow-lg shadow-indigo-500/20">
                {data.about.badge}
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white font-heading">
                {data.about.brand}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm mb-8 leading-relaxed font-light">
              {data.about.tagline}
            </p>
            <div className="flex gap-4">
              {data.socials.map((social) => (
                <a key={social.platform} href={social.url} className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-400 hover:border-indigo-500 hover:text-indigo-500 transition-all">
                  <span className="text-[10px] font-black uppercase tracking-tighter">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          {data.sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-gray-900 dark:text-white font-black mb-6 uppercase text-xs tracking-widest">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path} className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-500 transition-colors font-medium">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-100 dark:border-white/5 text-center text-gray-400 dark:text-gray-500 text-[10px] font-black uppercase tracking-widest">
          <p>© {new Date().getFullYear()} {data.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
