
import React, { useEffect } from 'react';

const AffiliateDisclosure: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 bg-white dark:bg-[#0b0c10] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-10 tracking-tighter">Affiliate Disclosure</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 space-y-6">
          <p className="text-xl font-light italic">Transparency is at the core of our editorial integrity.</p>
          
          <p>aiBestReviews ("[ABR]") is a participant in several affiliate marketing programs. This means that we may earn a commission when you click on links to AI tools or services featured on our site and make a purchase or sign up for a paid plan.</p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">Why We Use Affiliate Links</h2>
          <p>Maintaining a platform that provides deep-dive testing and independent reviews requires significant resources. Affiliate commissions help us fund our research team and pay for the tool subscriptions we test, allowing us to keep our content free for our readers.</p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">Our Integrity Promise</h2>
          <p>Crucially, our participation in affiliate programs <strong>does not influence our reviews or rankings</strong>. Our editorial team operates independently from our partnership team. We rank tools based on performance, usability, and value, regardless of whether we have an affiliate relationship with the provider.</p>

          <p>We don't accept money for higher rankings. If a tool is ranked #1, it's because it earned that spot through our testing metrics.</p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">Questions?</h2>
          <p>If you have any questions regarding our affiliate relationships, please feel free to contact our transparency officer via our support channels.</p>
        </div>
      </div>
    </div>
  );
};

export default AffiliateDisclosure;
