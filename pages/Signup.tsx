
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agree: false
  });
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signing up:', formData);
    navigate('/');
  };

  return (
    <div className="pt-40 pb-24 min-h-screen flex items-center justify-center bg-white dark:bg-[#0b0c10] px-4">
      <div className="absolute top-0 right-1/2 translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="w-full max-w-md animate-fade-in">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white text-[10px]">ABR</div>
            <span className="text-2xl font-black text-gray-900 dark:text-white font-heading tracking-tight">aiBestReviews</span>
          </div>
          <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-2">Create Account</h1>
          <p className="text-gray-500 dark:text-gray-400 font-light">Join the hub of elite AI practitioners.</p>
        </div>

        <div className="glass bg-gray-50/50 dark:bg-white/5 p-10 rounded-[2.5rem] border border-gray-200 dark:border-white/10 shadow-2xl">
          <form onSubmit={handleSignup} className="space-y-6">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-2">Full Name</label>
              <input 
                type="text" 
                required
                className="w-full bg-white dark:bg-[#0b0c10] border border-gray-200 dark:border-white/10 rounded-2xl px-6 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-all shadow-inner"
                placeholder="Alex Rivers"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-2">Email Address</label>
              <input 
                type="email" 
                required
                className="w-full bg-white dark:bg-[#0b0c10] border border-gray-200 dark:border-white/10 rounded-2xl px-6 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-all shadow-inner"
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-2">Password</label>
              <input 
                type="password" 
                required
                className="w-full bg-white dark:bg-[#0b0c10] border border-gray-200 dark:border-white/10 rounded-2xl px-6 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-all shadow-inner"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>

            <label className="flex items-center gap-3 cursor-pointer group px-2">
              <input 
                type="checkbox" 
                required
                className="w-4 h-4 rounded text-indigo-600 bg-gray-100 border-gray-300 focus:ring-indigo-500"
                checked={formData.agree}
                onChange={(e) => setFormData({...formData, agree: e.target.checked})}
              />
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">I agree to the Terms of Service</span>
            </label>

            <button 
              type="submit" 
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-indigo-500/20 transition-all active:scale-95"
            >
              Sign Up
            </button>
          </form>
        </div>

        <p className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
          Already have an account? <Link to="/login" className="text-indigo-500 font-bold hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
