import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  Lock, 
  Eye, 
  EyeOff, 
  Sparkles, 
  ArrowRight, 
  AlertCircle
} from 'lucide-react';
import SEO from '../components/SEO';
import { API } from '../config/api';

export default function Login() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!userId.trim()) {
      newErrors.userId = 'User ID is required';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Ready for your API connection in src/config/api.js
    if (API.login) {
      fetch(API.login, {
        method: "POST",
        // Add your headers and body format here when ready
      })
      .then(res => res.json())
      .then(data => {
        console.log('Login Response:', data);
      })
      .catch(err => {
        console.error('Login Error:', err);
      });
    } else {
      console.log('Login submitted:', { userId, password });
      console.log('To connect the API, set your URL in src/config/api.js');
    }
  };

  return (
    <div className="py-12 md:py-20 flex items-center justify-center bg-gradient-to-b from-slate-50 to-amber-50/20">
      <SEO
        title="Member Login | Star India"
        description="Login to your Star India member account."
        canonicalPath="/login"
      />

      <div className="w-full max-w-md mx-auto px-4">
        {/* Card Container */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-2xl shadow-slate-900/5 overflow-hidden">
          
          {/* Header Banner */}
          <div className="bg-slate-950 p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-radial-gradient from-amber-500/15 via-transparent to-transparent pointer-events-none" />
            
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-200 flex items-center justify-center mx-auto mb-3 shadow-lg shadow-amber-500/20">
              <Sparkles className="w-7 h-7 text-slate-950 fill-slate-950" />
            </div>

            <h1 className="text-2xl font-bold text-white font-['Outfit']">
              Star India Portal
            </h1>
            <p className="text-xs text-amber-300/90 mt-1 font-medium tracking-wide">
              Member & Associate Login
            </p>
          </div>

          {/* Form Area */}
          <div className="p-8 space-y-6">
            <form onSubmit={handleLogin} className="space-y-4">
              
              {/* User ID Field */}
              <div className="space-y-1.5">
                <label htmlFor="userId" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  User ID <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    id="userId"
                    name="userId"
                    type="text"
                    value={userId}
                    onChange={(e) => {
                      setUserId(e.target.value);
                      if (errors.userId) setErrors(prev => ({ ...prev, userId: '' }));
                    }}
                    placeholder="Enter your User ID"
                    className={`w-full pl-10 pr-4 py-3 bg-slate-50 border ${
                      errors.userId ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 focus:border-amber-500 focus:bg-white'
                    } rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all`}
                  />
                </div>
                {errors.userId && (
                  <p className="text-[11px] text-rose-500 flex items-center gap-1 font-medium mt-1">
                    <AlertCircle className="w-3 h-3" /> {errors.userId}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-1.5">
                <label htmlFor="password" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Password <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errors.password) setErrors(prev => ({ ...prev, password: '' }));
                    }}
                    placeholder="Enter your password"
                    className={`w-full pl-10 pr-11 py-3 bg-slate-50 border ${
                      errors.password ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 focus:border-amber-500 focus:bg-white'
                    } rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-[11px] text-rose-500 flex items-center gap-1 font-medium mt-1">
                    <AlertCircle className="w-3 h-3" /> {errors.password}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-600 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/25 hover:shadow-amber-500/35 active:scale-[0.99] transition-all flex items-center justify-center gap-2 group cursor-pointer mt-2"
              >
                <span>Login</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>

            {/* Account Creation Link */}
            <div className="pt-4 border-t border-slate-100 text-center">
              <p className="text-xs text-slate-500">
                Don't have an account?{' '}
                <Link to="/signup" className="font-bold text-amber-600 hover:text-amber-700 hover:underline">
                  Create Account / Signup
                </Link>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
