
import React, { useEffect } from 'react';

const Terms: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-40 pb-24 bg-white dark:bg-[#0b0c10] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16">
          <span className="inline-block px-4 py-1 bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest border border-indigo-600/20 rounded-md mb-6">
            Legal Framework
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter">
            Terms of Service
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg font-light italic">
            Last updated: May 20, 2024
          </p>
        </header>

        <div className="prose prose-indigo dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 space-y-10">
          <section>
            <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing, browsing, or utilizing the aiBestReviews platform ("[ABR]"), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please discontinue use of the site immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-4">2. Editorial Integrity & Use of Content</h2>
            <p className="leading-relaxed">
              All reviews, rankings, and comparisons on [ABR] are the intellectual property of our editorial team. While we strive for 100% accuracy, AI software changes rapidly. Content is provided "as-is" for informational purposes. Users are encouraged to perform their own due diligence before making purchasing decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-4">3. User Submissions & Tool Listings</h2>
            <p className="leading-relaxed">
              When submitting a tool for review, you warrant that the information provided is accurate and that you have the right to represent the software. [ABR] reserves the right to edit descriptions for clarity, SEO optimization, and objectivity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-4">4. Intellectual Property Rights</h2>
            <p className="leading-relaxed">
              The "ABR" brand, logo, and proprietary benchmarking algorithms are protected by copyright and trademark laws. Unauthorized reproduction of our review data or "Best of" badges without express written permission is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-4">5. Limitation of Liability</h2>
            <p className="leading-relaxed">
              [ABR] shall not be liable for any damages resulting from the use or inability to use the services, including but not limited to the performance of third-party AI tools discovered through our platform.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
