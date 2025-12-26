
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: 'Discover', path: '/tools' },
    { name: 'Compare', path: '/compare' },
    { name: 'News', path: '/news' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-[#0b0c10]/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-12 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white text-sm group-hover:scale-110 transition-transform">ABR</div>
              <span className="text-xl font-extrabold tracking-tight text-gray-900 dark:text-white font-heading">
                ai<span className="text-indigo-500">BestReviews</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-bold transition-all border-b-2 ${
                    location.pathname === link.path
                      ? 'text-gray-900 dark:text-white border-indigo-500'
                      : 'text-gray-500 dark:text-gray-400 border-transparent hover:text-indigo-600 dark:hover:text-white hover:border-indigo-500/50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 text-gray-500 dark:text-gray-400 transition-colors"
              aria-label="Toggle Theme"
            >
              {isDark ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.243 17.657l.707.707M7.757 6.343l.707.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>
            <Link to="/login" className="text-gray-500 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white text-sm font-medium hover:underline">Log In</Link>
            <Link to="/submit-tool" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-indigo-500/20 active:scale-95">
              Submit Tool
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 text-gray-500 dark:text-gray-400 transition-colors"
            >
              {isDark ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.243 17.657l.707.707M7.757 6.343l.707.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white focus:outline-none p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#0b0c10] border-b border-gray-200 dark:border-white/10 animate-fade-in-down shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 rounded-xl text-lg font-medium ${
                  location.pathname === link.path ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-gray-100 dark:border-white/10 flex flex-col gap-3">
              <Link to="/login" onClick={() => setIsOpen(false)} className="w-full text-center text-gray-500 dark:text-gray-400 py-3 font-bold">Log In</Link>
              <Link to="/submit-tool" onClick={() => setIsOpen(false)} className="w-full bg-indigo-600 text-white py-4 rounded-2xl text-center font-bold shadow-xl shadow-indigo-500/20">Submit Tool</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
