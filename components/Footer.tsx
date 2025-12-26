
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-[#0b0c10] border-t border-gray-100 dark:border-white/10 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white text-[10px]">ABR</div>
              <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white font-heading">aiBestReviews</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm mb-6 leading-relaxed">
              Empowering creators and businesses by ranking the world's most innovative AI tools. Your trusted guide to the AI revolution.
            </p>
            <div className="flex gap-4">
              {['twitter', 'github', 'linkedin'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-400 hover:border-indigo-500 hover:text-indigo-500 transition-all">
                  <span className="capitalize text-xs font-bold">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-gray-900 dark:text-white font-black mb-6 uppercase text-xs tracking-widest">Platform</h4>
            <ul className="space-y-4">
              <li><Link to="/tools" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-500 transition-colors font-medium">Directory</Link></li>
              <li><Link to="/compare" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-500 transition-colors font-medium">Comparisons</Link></li>
              <li><Link to="/news" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-500 transition-colors font-medium">Insights</Link></li>
              <li><Link to="/submit-tool" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-500 transition-colors font-medium">Submit Tool</Link></li>
              <li><Link to="/contact" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-500 transition-colors font-medium">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-black mb-6 uppercase text-xs tracking-widest">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/terms" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-500 transition-colors font-medium">Terms</Link></li>
              <li><Link to="/privacy" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-500 transition-colors font-medium">Privacy</Link></li>
              <li><Link to="/cookies" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-500 transition-colors font-medium">Cookies</Link></li>
              <li><Link to="/affiliate-disclosure" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-500 transition-colors font-medium">Affiliate Disclosure</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100 dark:border-white/5 text-center text-gray-400 dark:text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} aiBestReviews. All rights reserved. [ABR]</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
