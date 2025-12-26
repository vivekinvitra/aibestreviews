
import React, { useState } from 'react';
import { CATEGORIES } from '../constants';

const SubmitTool: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-40 pb-24 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-lg animate-fade-in">
          <div className="text-6xl mb-8">🚀</div>
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-6">Submission Received</h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg font-light leading-relaxed mb-10">
            Our editorial board will test and vet your platform within 48 hours. We'll notify you via email once the review is live.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="px-10 py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl active:scale-95 transition-all"
          >
            Submit Another Tool
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-white dark:bg-[#0b0c10]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest border border-indigo-600/20 rounded-lg mb-6">
            Get Discovered
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter">Submit Your <br /><span className="gradient-text">AI Solution</span></h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg font-light max-w-2xl mx-auto">
            Join the directory trusted by 250k+ monthly professionals. We provide deep technical reviews, not just listings.
          </p>
        </div>

        <div className="glass bg-gray-50/50 dark:bg-white/5 p-8 md:p-12 rounded-[3rem] border border-gray-200 dark:border-white/10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-12">
            
            {/* Tool Basics */}
            <section>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-indigo-500 mb-8 border-b border-gray-100 dark:border-white/5 pb-4">01. Core Identity</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-2">Platform Name</label>
                  <input type="text" required placeholder="e.g., Neuraflow" className="w-full bg-white dark:bg-[#0b0c10] border border-gray-200 dark:border-white/10 rounded-2xl px-6 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-all shadow-inner" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-2">Primary Category</label>
                  <select required className="w-full bg-white dark:bg-[#0b0c10] border border-gray-200 dark:border-white/10 rounded-2xl px-6 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-all shadow-inner appearance-none">
                    <option value="">Select Category</option>
                    {CATEGORIES.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-2">Website URL</label>
                  <input type="url" required placeholder="https://example.com" className="w-full bg-white dark:bg-[#0b0c10] border border-gray-200 dark:border-white/10 rounded-2xl px-6 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-all shadow-inner" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-2">High-impact Tagline</label>
                  <input type="text" required placeholder="The world's first autonomous coding agent for legacy systems." className="w-full bg-white dark:bg-[#0b0c10] border border-gray-200 dark:border-white/10 rounded-2xl px-6 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-all shadow-inner" />
                </div>
              </div>
            </section>

            {/* Pricing Model */}
            <section>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-indigo-500 mb-8 border-b border-gray-100 dark:border-white/5 pb-4">02. Economic Structure</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-2">Pricing Tier</label>
                  <select required className="w-full bg-white dark:bg-[#0b0c10] border border-gray-200 dark:border-white/10 rounded-2xl px-6 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-all shadow-inner appearance-none">
                    <option value="Free">Free</option>
                    <option value="Freemium">Freemium</option>
                    <option value="Paid">Paid Only</option>
                    <option value="Enterprise">Enterprise Only</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-2">Starting Price (USD)</label>
                  <input type="text" placeholder="e.g., $19/mo or Free" className="w-full bg-white dark:bg-[#0b0c10] border border-gray-200 dark:border-white/10 rounded-2xl px-6 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-all shadow-inner" />
                </div>
              </div>
            </section>

            {/* Deep Content */}
            <section>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-indigo-500 mb-8 border-b border-gray-100 dark:border-white/5 pb-4">03. Technical Context</h3>
              <div className="space-y-8">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-2">Detailed Platform Overview</label>
                  <textarea rows={6} required placeholder="Describe core technology, architecture, and unique selling points..." className="w-full bg-white dark:bg-[#0b0c10] border border-gray-200 dark:border-white/10 rounded-[2rem] px-6 py-6 text-gray-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-all shadow-inner resize-none"></textarea>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-2">Core Feature 1</label>
                    <input type="text" placeholder="e.g., Real-time GPU scaling" className="w-full bg-white dark:bg-[#0b0c10] border border-gray-200 dark:border-white/10 rounded-2xl px-6 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-all shadow-inner" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-2">Core Feature 2</label>
                    <input type="text" placeholder="e.g., SOC-2 Compliance" className="w-full bg-white dark:bg-[#0b0c10] border border-gray-200 dark:border-white/10 rounded-2xl px-6 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-all shadow-inner" />
                  </div>
                </div>
              </div>
            </section>

            {/* Submit */}
            <div className="pt-8 flex items-center justify-between gap-8 flex-col md:flex-row">
               <p className="text-gray-500 dark:text-gray-500 text-[10px] font-medium leading-relaxed max-w-sm">
                 By submitting, you agree to our editorial standards. We reserve the right to modify descriptions for clarity and objectivity.
               </p>
               <button type="submit" className="w-full md:w-auto px-16 py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl shadow-indigo-500/20 transition-all active:scale-95">
                 Dispatch for Review
               </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default SubmitTool;
