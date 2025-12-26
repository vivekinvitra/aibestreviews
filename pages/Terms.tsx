
import React, { useEffect } from 'react';

const Terms: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 bg-white dark:bg-[#0b0c10] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-10 tracking-tighter">Terms of Service</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 space-y-6">
          <p className="text-xl font-light">Last updated: May 20, 2024</p>
          
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">1. Acceptance of Terms</h2>
          <p>By accessing and using aiBestReviews ("[ABR]", "we", "us", or "our"), you accept and agree to be bound by the terms and provision of this agreement.</p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">2. Use of Content</h2>
          <p>All content provided on [ABR] is for informational purposes only. The reviews, comparisons, and rankings are the opinions of our editorial board based on our testing methodologies.</p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">3. Intellectual Property</h2>
          <p>The trademarks, logos, and service marks displayed on the site are the property of [ABR] or other third parties. You are not permitted to use these Marks without the prior written consent of [ABR] or such third party which may own the Mark.</p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">4. User Submissions</h2>
          <p>When you submit a tool or a review, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and display that content on our platform.</p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">5. Disclaimers</h2>
          <p>The site is provided on an "as is" and "as available" basis. We make no representations or warranties of any kind, express or implied, as to the operation of the site or the information, content, or materials included on the site.</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
