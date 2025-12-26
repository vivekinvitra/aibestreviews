
import React, { useEffect } from 'react';

const AffiliateDisclosure: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-40 pb-24 bg-white dark:bg-[#0b0c10] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16">
          <span className="inline-block px-4 py-1 bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest border border-indigo-600/20 rounded-md mb-6">
            Trust & Transparency
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter">
            Affiliate Disclosure
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg font-light italic">
            Last updated: May 20, 2024
          </p>
        </header>

        <div className="prose prose-indigo dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 space-y-10">
          <p className="leading-relaxed text-lg font-medium text-gray-900 dark:text-white">
            Transparency is the foundation of our editorial integrity. This disclosure is provided to inform you about how aiBestReviews ("[ABR]") sustains its deep-dive testing operations.
          </p>

          <section>
            <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-4">How We Monetize</h2>
            <p className="leading-relaxed">
              [ABR] participates in various affiliate marketing programs. This means that we may earn a small commission if you click on a link to an AI tool featured on our site and eventually sign up for a paid subscription. This comes at <strong>no additional cost to you</strong>.
            </p>
          </section>

          <section className="p-8 bg-indigo-600 text-white rounded-[2.5rem] shadow-2xl shadow-indigo-500/20">
            <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Our "No Bias" Guarantee</h2>
            <p className="leading-relaxed font-medium">
              Crucially, our participation in affiliate programs <strong>does not influence our scores, rankings, or reviews</strong>. Our technical research team and our partnership team operate in strict silos. We rank tools based on actual performance benchmarks and user experience, regardless of whether a partnership exists.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-4">Why We Use This Model</h2>
            <p className="leading-relaxed">
              Testing high-end AI software is expensive. We pay for premium subscriptions of every tool we review to ensure we see the full feature set. These commissions allow us to maintain an independent laboratory and keep our high-quality content free for the community.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-4">Independent Vetting</h2>
            <p className="leading-relaxed">
              We frequently review tools with which we have no financial relationship simply because they are excellent or important to the ecosystem. Our goal is to be the most objective authority in the AI space.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AffiliateDisclosure;
