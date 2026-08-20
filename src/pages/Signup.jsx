import React, { useState, useEffect } from 'react';
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
  ChevronRight,
  Loader2,
  Users,
  Compass
} from 'lucide-react';
import SEO from '../components/SEO';
import { signupUser, verifySponsor } from '../services/authService';
import { AUTH_API } from '../config/authApi';

export default function Signup() {
  const [formData, setFormData] = useState({
    sponsorId: '',
    position: 'Left',
    fullName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    agreeTerms: true
  });

  const [sponsorName, setSponsorName] = useState('');
  const [verifyingSponsor, setVerifyingSponsor] = useState(false);
  const [sponsorError, setSponsorError] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Real-time Sponsor ID Verification (via existing ajax_sponsor.php)
  useEffect(() => {
    if (!formData.sponsorId.trim()) {
      setSponsorName('');
      setSponsorError('');
      return;
    }

    const timer = setTimeout(async () => {
      setVerifyingSponsor(true);
      setSponsorError('');
      try {
        const result = await verifySponsor(formData.sponsorId.trim());
        if (result.valid && result.name && !result.unverified) {
          setSponsorName(result.name);
        } else if (!result.valid) {
          setSponsorError(result.message || 'Sponsor ID not found in Star India system');
          setSponsorName('');
        }
      } catch (e) {
        console.warn('Sponsor check notice:', e);
      } finally {
        setVerifyingSponsor(false);
      }
    }, 600);

    return () => clearTimeout(timer);
  }, [formData.sponsorId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear field-specific error
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.sponsorId.trim()) {
      newErrors.sponsorId = 'Referral / Sponsor ID is required';
    }

    if (!formData.position) {
      newErrors.position = 'Please select a placement position';
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
    } else if (!/^[0-9]{10}$/.test(formData.mobile.replace(/\D/g, ''))) {
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
      newErrors.agreeTerms = 'You must agree to the Terms & Privacy Policy to register';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setServerError('');

    if (!validate()) return;

    setLoading(true);
    try {
      const result = await signupUser({
        sponsorId: formData.sponsorId.trim(),
        position: formData.position,
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        mobile: formData.mobile.trim(),
        password: formData.password,
        agreed: formData.agreeTerms
      });

      if (result.success) {
        setSignupSuccess(true);
        setSuccessMessage(result.message || 'Registration completed successfully!');
        if (result.redirectUrl) {
          setTimeout(() => {
            window.location.href = result.redirectUrl;
          }, 2000);
        }
      } else {
        setServerError(result.message || 'Registration could not be completed. Please verify your details.');
      }
    } catch (err) {
      setServerError(err.message || 'Network communication error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-12 md:py-20 flex items-center justify-center bg-gradient-to-b from-slate-50 to-amber-50/20">
      <SEO
        title="Associate Registration | Star India Portal"
        description="Register a new member associate account on the official Star India portal."
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
              Join Star India
            </h1>
            <p className="text-xs text-amber-300/90 mt-1 font-medium tracking-wide">
              Official Member & Associate Registration Portal
            </p>
          </div>

          {/* Form Area */}
          <div className="p-8 space-y-6">
            
            {/* Server Error Notification */}
            {serverError && (
              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200/80 text-rose-800 text-xs flex items-start gap-3 animate-fadeIn">
                <AlertCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold block">Registration Notice</strong>
                  <span>{serverError}</span>
                </div>
              </div>
            )}

            {/* Success Notification */}
            {signupSuccess ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-emerald-950 font-['Outfit']">Registration Successful!</h3>
                  <p className="text-xs text-emerald-700 leading-relaxed max-w-sm mx-auto">
                    {successMessage}
                  </p>
                </div>

                <div className="pt-4">
                  <Link
                    to="/login"
                    className="inline-flex items-center justify-center gap-2 py-3 px-8 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all"
                  >
                    Proceed to Member Login <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSignup} className="space-y-4">
                
                {/* Referral / Sponsor ID (PHP: sponsor_id) */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label htmlFor="sponsorId" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Referral / Sponsor ID <span className="text-rose-500">*</span>
                    </label>
                    {verifyingSponsor && (
                      <span className="text-[11px] text-amber-600 flex items-center gap-1">
                        <Loader2 className="w-3 h-3 animate-spin" /> Verifying sponsor...
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Users className="w-4 h-4" />
                    </div>
                    <input
                      id="sponsorId"
                      name="sponsorId"
                      type="text"
                      value={formData.sponsorId}
                      onChange={handleChange}
                      placeholder="Enter Referral / Sponsor ID"
                      disabled={loading}
                      className={`w-full pl-10 pr-4 py-3 bg-slate-50 border ${
                        errors.sponsorId || sponsorError ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 focus:border-amber-500 focus:bg-white'
                      } rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all`}
                    />
                  </div>
                  {sponsorName && !sponsorError && (
                    <p className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1 mt-1">
                      <CheckCircle2 className="w-3 h-3" /> Sponsor: {sponsorName}
                    </p>
                  )}
                  {(errors.sponsorId || sponsorError) && (
                    <p className="text-[11px] text-rose-500 flex items-center gap-1 font-medium mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.sponsorId || sponsorError}
                    </p>
                  )}
                </div>

                {/* Placement Position (PHP: position -> Left / Right) */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Select Position <span className="text-rose-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, position: 'Left' }))}
                      disabled={loading}
                      className={`py-2.5 px-4 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                        formData.position === 'Left'
                          ? 'bg-amber-50 border-amber-500 text-amber-950 ring-2 ring-amber-500/20'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <Compass className="w-3.5 h-3.5" />
                      <span>Left Position</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, position: 'Right' }))}
                      disabled={loading}
                      className={`py-2.5 px-4 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                        formData.position === 'Right'
                          ? 'bg-amber-50 border-amber-500 text-amber-950 ring-2 ring-amber-500/20'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <Compass className="w-3.5 h-3.5" />
                      <span>Right Position</span>
                    </button>
                  </div>
                  {errors.position && (
                    <p className="text-[11px] text-rose-500 flex items-center gap-1 font-medium mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.position}
                    </p>
                  )}
                </div>

                {/* Full Name (PHP: fname) */}
                <div className="space-y-1.5">
                  <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Hardeep Singh"
                      autoComplete="name"
                      disabled={loading}
                      className={`w-full pl-10 pr-4 py-3 bg-slate-50 border ${
                        errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 focus:border-amber-500 focus:bg-white'
                      } rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-[11px] text-rose-500 flex items-center gap-1 font-medium mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email Address & Mobile Number Grid (PHP: email, mobile) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Email Address <span className="text-rose-500">*</span>
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
                        placeholder="you@domain.com"
                        autoComplete="email"
                        disabled={loading}
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
                        placeholder="10-digit mobile"
                        autoComplete="tel"
                        disabled={loading}
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

                {/* Passwords Grid (PHP: lpass) */}
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
                        placeholder="••••••••"
                        autoComplete="new-password"
                        disabled={loading}
                        className={`w-full pl-10 pr-10 py-3 bg-slate-50 border ${
                          errors.password ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 focus:border-amber-500 focus:bg-white'
                        } rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
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
                        placeholder="••••••••"
                        autoComplete="new-password"
                        disabled={loading}
                        className={`w-full pl-10 pr-10 py-3 bg-slate-50 border ${
                          errors.confirmPassword ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 focus:border-amber-500 focus:bg-white'
                        } rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                        tabIndex={-1}
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

                {/* Terms Agreement (PHP: chk_u) */}
                <div className="pt-2">
                  <label className="flex items-start gap-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      disabled={loading}
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-amber-500 focus:ring-amber-400"
                    />
                    <span className="text-xs text-slate-600 leading-relaxed">
                      I agree to the Star India <span className="font-semibold text-slate-900">Terms of Service</span>,{' '}
                      <span className="font-semibold text-slate-900">Privacy Policy</span>, and associate terms.
                    </span>
                  </label>
                  {errors.agreeTerms && (
                    <p className="text-[11px] text-rose-500 flex items-center gap-1 font-medium mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.agreeTerms}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-600 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/25 hover:shadow-amber-500/35 active:scale-[0.99] transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                      <span>Registering with Star India Database...</span>
                    </>
                  ) : (
                    <>
                      <span>Create Associate Account</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}

            {/* Existing Member Link */}
            <div className="pt-4 border-t border-slate-100 text-center space-y-3">
              <p className="text-xs text-slate-500">
                Already have an associate account?{' '}
                <Link to="/login" className="font-bold text-amber-600 hover:text-amber-700 hover:underline">
                  Sign In to Dashboard
                </Link>
              </p>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Seamless integration with Star India Live Database</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
