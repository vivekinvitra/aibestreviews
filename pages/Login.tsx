
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    console.log('Logging in with:', { email, password });
    navigate('/');
  };

  return (
    <div className="pt-40 pb-24 min-h-screen flex items-center justify-center bg-white dark:bg-[#0b0c10] px-4">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="w-full max-w-md animate-fade-in">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white text-[10px]">ABR</div>
            <span className="text-2xl font-black text-gray-900 dark:text-white font-heading tracking-tight">aiBestReviews</span>
          </div>
          <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-2">Welcome Back</h1>
          <p className="text-gray-500 dark:text-gray-400 font-light">Access your dashboard and saved tools.</p>
        </div>

        <div className="glass bg-gray-50/50 dark:bg-white/5 p-10 rounded-[2.5rem] border border-gray-200 dark:border-white/10 shadow-2xl">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-2">Email Address</label>
              <input 
                type="email" 
                required
                className="w-full bg-white dark:bg-[#0b0c10] border border-gray-200 dark:border-white/10 rounded-2xl px-6 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-all shadow-inner"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2 ml-2">
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400">Password</label>
                <a href="#" className="text-[10px] font-black uppercase tracking-widest text-indigo-500 hover:underline">Forgot?</a>
              </div>
              <input 
                type="password" 
                required
                className="w-full bg-white dark:bg-[#0b0c10] border border-gray-200 dark:border-white/10 rounded-2xl px-6 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-all shadow-inner"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button 
              type="submit" 
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-indigo-500/20 transition-all active:scale-95"
            >
              Sign In
            </button>
          </form>

          <div className="relative my-10 text-center">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100 dark:border-white/5"></div></div>
            <span className="relative bg-transparent px-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Or Continue With</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-4 glass bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/10 transition-all">
               <span className="text-[10px] font-black uppercase tracking-widest text-gray-600 dark:text-gray-300">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 py-4 glass bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/10 transition-all">
               <span className="text-[10px] font-black uppercase tracking-widest text-gray-600 dark:text-gray-300">LinkedIn</span>
            </button>
          </div>
        </div>

        <p className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
          New to [ABR]? <Link to="/signup" className="text-indigo-500 font-bold hover:underline">Create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
