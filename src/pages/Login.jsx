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
  CheckCircle2,
  Loader2,
  ExternalLink
} from 'lucide-react';
import SEO from '../components/SEO';
import { loginUser } from '../services/authService';
import { AUTH_API } from '../config/authApi';

export default function Login() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!userId.trim()) {
      newErrors.userId = 'User ID or Member ID is required';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setServerError('');

    if (!validate()) return;

    setLoading(true);
    try {
      const result = await loginUser({
        userId: userId.trim(),
        password: password
      });

      if (result.success) {
        setLoginSuccess(true);
        setSuccessMessage(result.message || 'Login successful. Redirecting...');
        if (result.redirectUrl) {
          setTimeout(() => {
            window.location.href = result.redirectUrl;
          }, 1500);
        }
      } else {
        setServerError(result.message || 'Invalid User ID or Password. Please try again.');
      }
    } catch (err) {
      setServerError(err.message || 'Network error occurred. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-12 md:py-20 flex items-center justify-center bg-gradient-to-b from-slate-50 to-amber-50/20">
      <SEO
        title="Member Login | Star India Portal"
        description="Securely access the Star India member and associate dashboard using your User ID and password."
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
              Official Member & Associate Login
            </p>
          </div>

          {/* Form Area */}
          <div className="p-8 space-y-6">
            
            {/* Server Error Alert */}
            {serverError && (
              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200/80 text-rose-800 text-xs flex items-start gap-3 animate-fadeIn">
                <AlertCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold block">Authentication Notice</strong>
                  <span>{serverError}</span>
                </div>
              </div>
            )}

            {/* Success Alert */}
            {loginSuccess ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-emerald-950 font-['Outfit']">Authenticated Successfully</h3>
                <p className="text-xs text-emerald-700 leading-relaxed">
                  {successMessage}
                </p>
                <div className="pt-2">
                  <a
                    href={AUTH_API.DASHBOARD_HOME}
                    className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 hover:text-emerald-950 underline"
                  >
                    Click here if not redirected automatically <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleLogin} className="space-y-4">
                
                {/* User ID Field (PHP: user_id) */}
                <div className="space-y-1.5">
                  <label htmlFor="user_id" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    User ID / Member ID <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      id="user_id"
                      name="user_id"
                      type="text"
                      value={userId}
                      onChange={(e) => {
                        setUserId(e.target.value);
                        if (errors.userId) setErrors(prev => ({ ...prev, userId: '' }));
                      }}
                      placeholder="e.g. SI12345"
                      autoComplete="username"
                      disabled={loading}
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

                {/* Password Field (PHP: password) */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Password <span className="text-rose-500">*</span>
                    </label>
                    <a
                      href={AUTH_API.FORGOT_PASSWORD}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-semibold text-amber-600 hover:text-amber-700 hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>
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
                      placeholder="••••••••"
                      autoComplete="current-password"
                      disabled={loading}
                      className={`w-full pl-10 pr-11 py-3 bg-slate-50 border ${
                        errors.password ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 focus:border-amber-500 focus:bg-white'
                      } rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                      tabIndex={-1}
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
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-600 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/25 hover:shadow-amber-500/35 active:scale-[0.99] transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                      <span>Authenticating with Portal...</span>
                    </>
                  ) : (
                    <>
                      <span>Sign In to Member Dashboard</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}

            {/* Account Creation Link */}
            <div className="pt-4 border-t border-slate-100 text-center space-y-3">
              <p className="text-xs text-slate-500">
                Don't have a member account yet?{' '}
                <Link to="/signup" className="font-bold text-amber-600 hover:text-amber-700 hover:underline">
                  Register as Associate
                </Link>
              </p>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Direct SSL Encrypted Connection to Star India Server</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
