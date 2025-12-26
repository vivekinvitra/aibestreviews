
import React, { useEffect } from 'react';

const Privacy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 bg-white dark:bg-[#0b0c10] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-10 tracking-tighter">Privacy Policy</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 space-y-6">
          <p className="text-xl font-light">Last updated: May 20, 2024</p>
          
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or submit a tool for review. This may include your name, email address, and company details.</p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">2. Use of Information</h2>
          <p>We use the information we collect to maintain and improve our services, send you technical notices, updates, and marketing communications, and to monitor and analyze trends and usage.</p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">3. Data Security</h2>
          <p>We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.</p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">4. Third-Party Services</h2>
          <p>Our platform contains links to other websites. We are not responsible for the privacy practices or content of these third-party sites.</p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">5. Your Choices</h2>
          <p>You may opt out of receiving promotional emails from us by following the instructions in those emails. If you opt out, we may still send you non-promotional emails, such as those about your account or our ongoing business relations.</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
