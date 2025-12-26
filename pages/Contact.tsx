
import React, { useState, useEffect } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log('Contact Inquiry:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-40 pb-24 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-lg animate-fade-in">
          <div className="text-6xl mb-8">✉️</div>
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter">Message Dispatched</h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg font-light leading-relaxed mb-10">
            Thank you for reaching out. A member of the [ABR] team will respond to your inquiry within 24 business hours.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="px-10 py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl active:scale-95 transition-all"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-24 bg-white dark:bg-[#0b0c10] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest border border-indigo-600/20 rounded-lg mb-6">
            Direct Line
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter">Connect with <br /><span className="gradient-text">the Experts</span></h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg font-light max-w-2xl mx-auto">
            Have questions about a specific tool, media inquiries, or partnership opportunities? Drop us a line below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="p-8 glass bg-gray-50 dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/10">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-indigo-500 mb-6">General Support</h4>
              <p className="text-gray-900 dark:text-white font-bold text-sm mb-2">support@aibestreviews.com</p>
              <p className="text-gray-500 text-xs font-light">Available Mon-Fri 9am-6pm EST</p>
            </div>
            
            <div className="p-8 glass bg-gray-50 dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/10">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-indigo-500 mb-6">Media & Partnerships</h4>
              <p className="text-gray-900 dark:text-white font-bold text-sm mb-2">partners@aibestreviews.com</p>
              <p className="text-gray-500 text-xs font-light">For press kits and advertising inquiries.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass bg-gray-50/50 dark:bg-white/5 p-8 md:p-12 rounded-[3rem] border border-gray-200 dark:border-white/10 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-2">Your Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Jane Doe" 
                      className="w-full bg-white dark:bg-[#0b0c10] border border-gray-200 dark:border-white/10 rounded-2xl px-6 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-all shadow-inner"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-2">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="jane@company.com" 
                      className="w-full bg-white dark:bg-[#0b0c10] border border-gray-200 dark:border-white/10 rounded-2xl px-6 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-all shadow-inner"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-2">Phone Number (Optional)</label>
                  <input 
                    type="tel" 
                    placeholder="+1 (555) 000-0000" 
                    className="w-full bg-white dark:bg-[#0b0c10] border border-gray-200 dark:border-white/10 rounded-2xl px-6 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-all shadow-inner"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-2">How can we help?</label>
                  <textarea 
                    rows={6} 
                    required 
                    placeholder="Describe your inquiry in detail..." 
                    className="w-full bg-white dark:bg-[#0b0c10] border border-gray-200 dark:border-white/10 rounded-[2rem] px-6 py-6 text-gray-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-all shadow-inner resize-none"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                  ></textarea>
                </div>

                <div className="flex items-center justify-end">
                  <button 
                    type="submit" 
                    className="w-full md:w-auto px-16 py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl shadow-indigo-500/20 transition-all active:scale-95"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
