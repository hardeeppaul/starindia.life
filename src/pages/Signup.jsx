import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  Lock, 
  Mail, 
  Phone, 
  UserPlus, 
  Eye, 
  EyeOff, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import SEO from '../components/SEO';
import companyInfo from '../data/companyInfo';

export default function Signup() {
  const [formData, setFormData] = useState({
    referralId: '',
    position: 'left',
    fullName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [signupSuccess, setSignupSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.referralId.trim()) {
      newErrors.referralId = 'Referral ID is required';
    }

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile Number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm Password is required';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must acknowledge the terms to proceed';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (validate()) {
      setSignupSuccess(true);
    }
  };

  return (
    <div className="py-12 md:py-20 flex items-center justify-center">
      <SEO
        title="Member Registration | Star India Portal"
        description="Register a new associate account on the Star India portal."
        canonicalPath="/signup"
      />

      <div className="w-full max-w-xl mx-auto px-4">
        
        {/* Card Container */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden">
          
          {/* Header Banner */}
          <div className="bg-slate-950 p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-radial-gradient from-amber-500/10 to-transparent pointer-events-none" />
            
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-200 flex items-center justify-center mx-auto mb-3 shadow-lg shadow-amber-500/20">
              <UserPlus className="w-6 h-6 text-slate-950" />
            </div>

            <h1 className="text-2xl font-bold text-white font-['Outfit']">
              Create an Account
            </h1>
            <p className="text-xs text-amber-300/90 mt-1 font-medium">
              Star India Associate Registration UI
            </p>
          </div>

          {/* Form Content */}
          <div className="p-8 space-y-6">
            
            {signupSuccess ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-emerald-950 font-['Outfit']">Registration UI Validated</h3>
                <p className="text-xs text-emerald-700 leading-relaxed max-w-sm mx-auto">
                  Frontend validation completed successfully for <strong>{formData.fullName}</strong> under Referral ID <strong>{formData.referralId}</strong> (Position: {formData.position.toUpperCase()}).
                </p>
                <div className="p-3 bg-white/80 rounded-xl text-xs text-slate-600 border border-emerald-200/80">
                  <ShieldCheck className="w-4 h-4 text-amber-500 inline mr-1" />
                  Frontend Demonstration Only (No live database connected).
                </div>
                <div className="pt-2">
                  <Link
                    to="/login"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-900 text-amber-400 text-xs font-bold uppercase tracking-wider hover:bg-slate-800"
                  >
                    <span>Proceed to Login UI</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSignup} className="space-y-4">
                
                {/* Referral ID & Position Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                  
                  {/* Referral ID */}
                  <div className="sm:col-span-7">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Referral ID *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. REF88420"
                      value={formData.referralId}
                      onChange={(e) => setFormData({ ...formData, referralId: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-all ${
                        errors.referralId 
                          ? 'border-red-400 bg-red-50/50 focus:ring-2 focus:ring-red-200' 
                          : 'border-slate-200 bg-slate-50 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20'
                      }`}
                    />
                    {errors.referralId && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.referralId}
                      </p>
                    )}
                  </div>

                  {/* Position Radio / Selector */}
                  <div className="sm:col-span-5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Position *
                    </label>
                    <div className="grid grid-cols-2 gap-2 h-[42px]">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, position: 'left' })}
                        className={`rounded-xl text-xs font-bold uppercase transition-all flex items-center justify-center ${
                          formData.position === 'left'
                            ? 'bg-slate-900 text-amber-400 border border-slate-900 shadow-sm'
                            : 'bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200'
                        }`}
                      >
                        Left
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, position: 'right' })}
                        className={`rounded-xl text-xs font-bold uppercase transition-all flex items-center justify-center ${
                          formData.position === 'right'
                            ? 'bg-slate-900 text-amber-400 border border-slate-900 shadow-sm'
                            : 'bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200'
                        }`}
                      >
                        Right
                      </button>
                    </div>
                  </div>

                </div>

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Enter full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-all ${
                        errors.fullName 
                          ? 'border-red-400 bg-red-50/50 focus:ring-2 focus:ring-red-200' 
                          : 'border-slate-200 bg-slate-50 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20'
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email & Mobile Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-all ${
                          errors.email 
                            ? 'border-red-400 bg-red-50/50 focus:ring-2 focus:ring-red-200' 
                            : 'border-slate-200 bg-slate-50 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20'
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Mobile Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-all ${
                          errors.mobile 
                            ? 'border-red-400 bg-red-50/50 focus:ring-2 focus:ring-red-200' 
                            : 'border-slate-200 bg-slate-50 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20'
                        }`}
                      />
                    </div>
                    {errors.mobile && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.mobile}
                      </p>
                    )}
                  </div>
                </div>

                {/* Password & Confirm Password Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Password *
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Min 6 chars"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Confirm Password *
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Re-enter password"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        className={`w-full pl-10 pr-10 py-2.5 rounded-xl border text-sm focus:outline-none transition-all ${
                          errors.confirmPassword 
                            ? 'border-red-400 bg-red-50/50 focus:ring-2 focus:ring-red-200' 
                            : 'border-slate-200 bg-slate-50 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20'
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.confirmPassword}
                      </p>
                    )}
                  </div>
                </div>

                {/* Terms Agreement Checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600">
                    <input
                      type="checkbox"
                      checked={formData.agreeTerms}
                      onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                      className="w-4 h-4 rounded text-amber-500 focus:ring-amber-400 border-slate-300 mt-0.5"
                    />
                    <span>
                      I agree to the terms and understand that this is a product showcase and membership portal for {companyInfo.name}.
                    </span>
                  </label>
                  {errors.agreeTerms && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.agreeTerms}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md shadow-amber-500/20 transition-all duration-200 mt-3"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Register Account</span>
                </button>

              </form>
            )}

            {/* Footer / Switch to Login */}
            <div className="pt-6 border-t border-slate-100 text-center space-y-3">
              <p className="text-xs text-slate-600">
                Already have an account?{' '}
                <Link to="/login" className="font-bold text-amber-600 hover:underline">
                  Login Here
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
