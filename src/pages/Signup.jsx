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
  AlertCircle, 
  ChevronRight,
  Users,
  Compass
} from 'lucide-react';
import SEO from '../components/SEO';
import { API } from '../config/api';

export default function Signup() {
  const [formData, setFormData] = useState({
    referralId: '',
    position: 'Left',
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.referralId.trim()) {
      newErrors.referralId = 'Referral ID is required';
    }

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile Number is required';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm Password is required';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Ready for your API connection in src/config/api.js
    if (API.signup) {
      fetch(API.signup, {
        method: "POST",
        // Add your headers and body format here when ready
      })
      .then(res => res.json())
      .then(data => {
        console.log('Signup Response:', data);
      })
      .catch(err => {
        console.error('Signup Error:', err);
      });
    } else {
      console.log('Signup submitted:', formData);
      console.log('To connect the API, set your URL in src/config/api.js');
    }
  };

  return (
    <div className="py-12 md:py-20 flex items-center justify-center bg-gradient-to-b from-slate-50 to-amber-50/20">
      <SEO
        title="Register / Signup | Star India"
        description="Register a new member account on the Star India portal."
        canonicalPath="/signup"
      />

      <div className="w-full max-w-xl mx-auto px-4">
        {/* Card Container */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-2xl shadow-slate-900/5 overflow-hidden">
          
          {/* Header Banner */}
          <div className="bg-slate-950 p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-radial-gradient from-amber-500/15 via-transparent to-transparent pointer-events-none" />
            
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-200 flex items-center justify-center mx-auto mb-3 shadow-lg shadow-amber-500/20">
              <UserPlus className="w-7 h-7 text-slate-950" />
            </div>

            <h1 className="text-2xl font-bold text-white font-['Outfit']">
              Create Account
            </h1>
            <p className="text-xs text-amber-300/90 mt-1 font-medium tracking-wide">
              Star India Registration
            </p>
          </div>

          {/* Form Area */}
          <div className="p-8 space-y-6">
            <form onSubmit={handleSignup} className="space-y-4">
              
              {/* Referral ID Field */}
              <div className="space-y-1.5">
                <label htmlFor="referralId" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Referral ID <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Users className="w-4 h-4" />
                  </div>
                  <input
                    id="referralId"
                    name="referralId"
                    type="text"
                    value={formData.referralId}
                    onChange={handleChange}
                    placeholder="Enter Referral ID"
                    className={`w-full pl-10 pr-4 py-3 bg-slate-50 border ${
                      errors.referralId ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 focus:border-amber-500 focus:bg-white'
                    } rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all`}
                  />
                </div>
                {errors.referralId && (
                  <p className="text-[11px] text-rose-500 flex items-center gap-1 font-medium mt-1">
                    <AlertCircle className="w-3 h-3" /> {errors.referralId}
                  </p>
                )}
              </div>

              {/* Position Selection (Left / Right) */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Position <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, position: 'Left' }))}
                    className={`py-2.5 px-4 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                      formData.position === 'Left'
                        ? 'bg-amber-50 border-amber-500 text-amber-950 ring-2 ring-amber-500/20'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <Compass className="w-3.5 h-3.5" />
                    <span>Left</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, position: 'Right' }))}
                    className={`py-2.5 px-4 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                      formData.position === 'Right'
                        ? 'bg-amber-50 border-amber-500 text-amber-950 ring-2 ring-amber-500/20'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <Compass className="w-3.5 h-3.5" />
                    <span>Right</span>
                  </button>
                </div>
              </div>

              {/* Name Field */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Full Name"
                    className={`w-full pl-10 pr-4 py-3 bg-slate-50 border ${
                      errors.name ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 focus:border-amber-500 focus:bg-white'
                    } rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all`}
                  />
                </div>
                {errors.name && (
                  <p className="text-[11px] text-rose-500 flex items-center gap-1 font-medium mt-1">
                    <AlertCircle className="w-3 h-3" /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email Address & Mobile Number Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Email <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Email"
                      className={`w-full pl-10 pr-4 py-3 bg-slate-50 border ${
                        errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 focus:border-amber-500 focus:bg-white'
                      } rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-[11px] text-rose-500 flex items-center gap-1 font-medium mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Mobile */}
                <div className="space-y-1.5">
                  <label htmlFor="mobile" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Mobile Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Enter Mobile Number"
                      className={`w-full pl-10 pr-4 py-3 bg-slate-50 border ${
                        errors.mobile ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 focus:border-amber-500 focus:bg-white'
                      } rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all`}
                    />
                  </div>
                  {errors.mobile && (
                    <p className="text-[11px] text-rose-500 flex items-center gap-1 font-medium mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.mobile}
                    </p>
                  )}
                </div>
              </div>

              {/* Passwords Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Password */}
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
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter Password"
                      className={`w-full pl-10 pr-10 py-3 bg-slate-50 border ${
                        errors.password ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 focus:border-amber-500 focus:bg-white'
                      } rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
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

                {/* Confirm Password */}
                <div className="space-y-1.5">
                  <label htmlFor="confirmPassword" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Confirm Password <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Lock className="w-4 h-4" />
                    </div>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm Password"
                      className={`w-full pl-10 pr-10 py-3 bg-slate-50 border ${
                        errors.confirmPassword ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 focus:border-amber-500 focus:bg-white'
                      } rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-[11px] text-rose-500 flex items-center gap-1 font-medium mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.confirmPassword}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-600 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/25 hover:shadow-amber-500/35 active:scale-[0.99] transition-all flex items-center justify-center gap-2 group cursor-pointer mt-4"
              >
                <span>Signup</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>

            {/* Existing Member Link */}
            <div className="pt-4 border-t border-slate-100 text-center">
              <p className="text-xs text-slate-500">
                Already have an account?{' '}
                <Link to="/login" className="font-bold text-amber-600 hover:text-amber-700 hover:underline">
                  Login here
                </Link>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
