
import React, { useEffect } from 'react';

const Privacy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-40 pb-24 bg-white dark:bg-[#0b0c10] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16">
          <span className="inline-block px-4 py-1 bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest border border-indigo-600/20 rounded-md mb-6">
            Data Governance
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter">
            Privacy Policy
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg font-light italic">
            Last updated: May 20, 2024
          </p>
        </header>

        <div className="prose prose-indigo dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 space-y-10">
          <section>
            <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-4">1. Data Collection Disclosure</h2>
            <p className="leading-relaxed">
              We collect minimal personal data necessary to provide a personalized experience. This includes email addresses for newsletter subscribers and account holders, and technical data such as IP addresses for security and analytics purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-4">2. How We Utilize Your Information</h2>
            <p className="leading-relaxed">
              Your data is used to:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-light">
              <li>Manage and secure your user account.</li>
              <li>Send requested AI tool updates and industry news.</li>
              <li>Improve site performance via anonymized usage analytics.</li>
              <li>Communicate regarding tool submissions and review status.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-4">3. Security Standards</h2>
            <p className="leading-relaxed">
              [ABR] employs industry-standard SSL encryption and secure database protocols to ensure your information remains private. We do not sell or trade your personal data to third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-4">4. GDPR & CCPA Compliance</h2>
            <p className="leading-relaxed">
              Users residing in the EU or California have specific rights regarding their data, including the right to request access, correction, or deletion. To exercise these rights, please contact our privacy officer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-4">5. Third-Party Tracking</h2>
            <p className="leading-relaxed">
              We use trusted analytics partners (like Google Analytics) to understand site traffic. These partners may use cookies to track anonymized user behavior. You can opt-out of this via our Cookie Settings.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
