
import React, { useEffect } from 'react';

const Cookies: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 bg-white dark:bg-[#0b0c10] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-10 tracking-tighter">Cookie Policy</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 space-y-6">
          <p className="text-xl font-light">Last updated: May 20, 2024</p>
          
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">1. What Are Cookies</h2>
          <p>Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">2. How We Use Cookies</h2>
          <p>We use cookies to understand how you interact with our site, remember your preferences (like dark mode), and personalize your experience.</p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">3. Types of Cookies We Use</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Essential Cookies:</strong> Necessary for the operation of the site.</li>
            <li><strong>Performance Cookies:</strong> Collect information about how visitors use a website.</li>
            <li><strong>Functional Cookies:</strong> Allow the website to remember choices you make.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">4. Managing Cookies</h2>
          <p>Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://www.aboutcookies.org" className="text-indigo-500 hover:underline">aboutcookies.org</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
