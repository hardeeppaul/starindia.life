import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  Lock, 
  Eye, 
  EyeOff, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  AlertCircle,
  CheckCircle2
} from 'lucide-react';
import SEO from '../components/SEO';
import companyInfo from '../data/companyInfo';

export default function Login() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [errors, setErrors] = useState({});
  const [loginSuccess, setLoginSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!userId.trim()) {
      newErrors.userId = 'User ID or Member ID is required';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      // Frontend validation success
      setLoginSuccess(true);
    }
  };

  return (
    <div className="py-12 md:py-20 flex items-center justify-center">
      <SEO
        title="Member Login | Star India Portal"
        description="Access the Star India member and associate login interface."
        canonicalPath="/login"
      />

      <div className="w-full max-w-md mx-auto px-4">
        
        {/* Card Container */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden">
          
          {/* Header Banner */}
          <div className="bg-slate-950 p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-radial-gradient from-amber-500/10 to-transparent pointer-events-none" />
            
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-200 flex items-center justify-center mx-auto mb-3 shadow-lg shadow-amber-500/20">
              <Sparkles className="w-6 h-6 text-slate-950 fill-slate-950" />
            </div>

            <h1 className="text-2xl font-bold text-white font-['Outfit']">
              Star India Portal
            </h1>
            <p className="text-xs text-amber-300/90 mt-1 font-medium">
              Member & Associate Login UI
            </p>
          </div>

          {/* Form Area */}
          <div className="p-8 space-y-6">
            
            {loginSuccess ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-emerald-950 font-['Outfit']">Validation Successful</h3>
                <p className="text-xs text-emerald-700 leading-relaxed">
                  Frontend login validation passed for User ID: <strong>{userId}</strong>.
                </p>
                <div className="p-3 bg-white/80 rounded-xl text-[11px] text-slate-600 border border-emerald-200/80">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-500 inline mr-1" />
                  Frontend Demonstration Mode (No backend database attached).
                </div>
                <button
                  onClick={() => {
                    setLoginSuccess(false);
                    setUserId('');
                    setPassword('');
                  }}
                  className="mt-2 text-xs font-bold text-slate-900 underline"
                >
                  Reset Form
                </button>
              </div>
            ) : (
              <form onSubmit={handleLogin} className="space-y-4">
                
                {/* User ID Field */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    User ID / Member ID *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="e.g. SI10892"
                      value={userId}
                      onChange={(e) => setUserId(e.target.value)}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-all ${
                        errors.userId 
                          ? 'border-red-400 bg-red-50/50 focus:ring-2 focus:ring-red-200' 
                          : 'border-slate-200 bg-slate-50 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20'
                      }`}
                    />
                  </div>
                  {errors.userId && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.userId}
                    </p>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Password *
                    </label>
                    <span className="text-[11px] text-amber-600 font-medium cursor-pointer hover:underline">
                      Forgot Password?
                    </span>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={`w-full pl-10 pr-10 py-2.5 rounded-xl border text-sm focus:outline-none transition-all ${
                        errors.password 
                          ? 'border-red-400 bg-red-50/50 focus:ring-2 focus:ring-red-200' 
                          : 'border-slate-200 bg-slate-50 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20'
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.password}
                    </p>
                  )}
                </div>

                {/* Remember Me */}
                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-600">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 rounded text-amber-500 focus:ring-amber-400 border-slate-300"
                    />
                    <span>Remember this device</span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md shadow-amber-500/20 transition-all duration-200 mt-2"
                >
                  <span>Login to Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </form>
            )}

            {/* Footer / Switch to Signup */}
            <div className="pt-6 border-t border-slate-100 text-center space-y-3">
              <p className="text-xs text-slate-600">
                Don't have an account?{' '}
                <Link to="/signup" className="font-bold text-amber-600 hover:underline">
                  Sign Up Here
                </Link>
              </p>
              
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
                <span>Protected Showcase Interface • {companyInfo.domain}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
