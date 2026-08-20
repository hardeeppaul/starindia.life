import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  MessageSquare, 
  HelpCircle,
  AlertCircle
} from 'lucide-react';
import SEO from '../components/SEO';
import companyInfo from '../data/companyInfo';
import { products } from '../data/products';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    productInterest: 'General Inquiry',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your inquiry';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Frontend-only confirmation
      setSubmitted(true);
    }
  };

  return (
    <div className="py-12 md:py-16 space-y-16">
      <SEO
        title="Contact Us | Reach Star India"
        description="Get in touch with Star India for general inquiries, product information, and showcase details."
        canonicalPath="/contact"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect with Us</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight">
            Get in Touch with Star India
          </h1>
          
          <p className="text-base text-slate-600 leading-relaxed">
            Have questions about our product categories or company showcase? Send us a message or reach out via our contact channels.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Email */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 font-['Outfit']">Email Us</h3>
              <p className="text-xs text-slate-500 mt-1">For general & product inquiries</p>
              <a 
                href={`mailto:${companyInfo.email}`} 
                className="block text-sm font-semibold text-amber-600 hover:underline mt-2"
              >
                {companyInfo.email}
              </a>
            </div>
          </div>

          {/* Card 2: Phone */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 font-['Outfit']">Call Us</h3>
              <p className="text-xs text-slate-500 mt-1">Direct telephonic support</p>
              <a 
                href={`tel:${companyInfo.phone}`} 
                className="block text-sm font-semibold text-amber-600 hover:underline mt-2"
              >
                {companyInfo.phone}
              </a>
            </div>
          </div>

          {/* Card 3: Location */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 font-['Outfit']">Corporate Office</h3>
              <p className="text-xs text-slate-500 mt-1">Main headquarters</p>
              <p className="text-xs text-slate-700 font-medium mt-2 leading-relaxed">
                {companyInfo.address.fullAddress}
              </p>
            </div>
          </div>

          {/* Card 4: Hours */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 font-['Outfit']">Working Hours</h3>
              <p className="text-xs text-slate-500 mt-1">{companyInfo.businessHours.weekdays}</p>
              <p className="text-xs text-slate-500 mt-0.5">{companyInfo.businessHours.saturday}</p>
            </div>
          </div>

        </div>

        {/* Main Contact Form & Location Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-md">
          
          {/* Inquiry Form */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 font-['Outfit']">
                Send Us an Inquiry
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Fill out the form below and our team will get in touch with you.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-emerald-950 font-['Outfit']">Thank You!</h3>
                <p className="text-sm text-emerald-800 max-w-sm mx-auto">
                  Your message has been recorded. Our team will review your inquiry shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      productInterest: 'General Inquiry',
                      message: ''
                    });
                  }}
                  className="mt-3 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-700 text-white hover:bg-emerald-800 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-all ${
                      errors.fullName 
                        ? 'border-red-400 bg-red-50/50 focus:ring-2 focus:ring-red-200' 
                        : 'border-slate-200 bg-slate-50 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-all ${
                        errors.email 
                          ? 'border-red-400 bg-red-50/50 focus:ring-2 focus:ring-red-200' 
                          : 'border-slate-200 bg-slate-50 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20'
                      }`}
                    />
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
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-all ${
                        errors.phone 
                          ? 'border-red-400 bg-red-50/50 focus:ring-2 focus:ring-red-200' 
                          : 'border-slate-200 bg-slate-50 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Product Interest Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Product / Topic of Interest
                  </label>
                  <select
                    value={formData.productInterest}
                    onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                  >
                    <option value="General Inquiry">General Company Inquiry</option>
                    {products.map((p) => (
                      <option key={p.id} value={p.name}>{p.name} ({p.category})</option>
                    ))}
                    <option value="Future Partnership">Partnership / Distribution Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Message / Questions *
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Please let us know how we can assist you..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-all ${
                      errors.message 
                        ? 'border-red-400 bg-red-50/50 focus:ring-2 focus:ring-red-200' 
                        : 'border-slate-200 bg-slate-50 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md shadow-amber-500/20 transition-all duration-200"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>

              </form>
            )}
          </div>

          {/* Right Side: Map & Direct Support Details */}
          <div className="lg:col-span-5 bg-slate-950 text-white p-8 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Headquarters</span>
              <h3 className="text-2xl font-bold font-['Outfit']">{companyInfo.name}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {companyInfo.address.fullAddress}
              </p>

              {/* Styled Mock Map / Office visual */}
              <div className="mt-4 aspect-video rounded-xl bg-slate-900 border border-slate-800 overflow-hidden relative flex items-center justify-center p-4 text-center">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-bold text-white">Outer Ring Road, New Delhi</p>
                  <p className="text-[11px] text-slate-400">Central Hub • {companyInfo.domain}</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800/80 space-y-2 text-xs text-slate-400">
              <div className="flex items-center justify-between">
                <span>Official Domain</span>
                <span className="text-amber-400 font-semibold">{companyInfo.domain}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Support Email</span>
                <span className="text-slate-200">{companyInfo.supportEmail}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
