
import React, { useEffect } from 'react';

const Cookies: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-40 pb-24 bg-white dark:bg-[#0b0c10] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16">
          <span className="inline-block px-4 py-1 bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest border border-indigo-600/20 rounded-md mb-6">
            Tracking Disclosure
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter">
            Cookie Policy
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg font-light italic">
            Last updated: May 20, 2024
          </p>
        </header>

        <div className="prose prose-indigo dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 space-y-10">
          <p className="leading-relaxed text-lg">
            This policy explains how aiBestReviews uses cookies and similar technologies to recognize you when you visit our website.
          </p>

          <section>
            <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-4">What are cookies?</h2>
            <p className="leading-relaxed">
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. They are essential for modern web applications to "remember" user preferences and sessions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-4">Types of cookies we use</h2>
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Essential Cookies</h3>
                <p className="text-sm font-light">Crucial for security and core site functionality (e.g., maintaining your dark mode preference or login session).</p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Analytics Cookies</h3>
                <p className="text-sm font-light">Help us understand which AI tools are trending and how users navigate our comparison engine.</p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Functional Cookies</h3>
                <p className="text-sm font-light">Allow the site to remember your specific filter choices in the directory.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-4">Controlling Cookies</h2>
            <p className="leading-relaxed">
              You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality may be restricted.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
