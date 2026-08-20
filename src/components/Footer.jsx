import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Mail, Phone, MapPin, Clock, ArrowUpRight, ShieldCheck } from 'lucide-react';
import companyInfo from '../data/companyInfo';
import { categories } from '../data/products';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Purpose */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 group inline-block">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-200 flex items-center justify-center shadow-md shadow-amber-500/20">
                <Sparkles className="w-5 h-5 text-slate-950 fill-slate-950" />
              </div>
              <div>
                <span className="text-2xl font-bold tracking-tight text-white font-['Outfit']">
                  Star India
                </span>
                <span className="block text-[11px] font-medium tracking-wider text-amber-400 uppercase">
                  {companyInfo.domain}
                </span>
              </div>
            </Link>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {companyInfo.subheading}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400 bg-slate-900/60 p-3 rounded-lg border border-slate-800/80">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Official Product Showcase Platform of Star India.</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white font-['Outfit']">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-amber-400 transition-colors">Products Catalog</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors">About Star India</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-amber-400 transition-colors">User Login</Link>
              </li>
              <li>
                <Link to="/signup" className="hover:text-amber-400 transition-colors">Register / Signup</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Categories */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white font-['Outfit']">
              Product Categories
            </h3>
            <ul className="space-y-2.5 text-sm">
              {categories.filter(c => c.id !== 'all').map((cat) => (
                <li key={cat.id}>
                  <Link 
                    to={`/products?category=${cat.id}`} 
                    className="flex items-center gap-1.5 hover:text-amber-400 transition-colors group"
                  >
                    <span>{cat.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </Link>
                </li>
              ))}
              <li className="pt-2 text-xs text-slate-500">
                • Gents Gold Rings<br />
                • Ladies Gold Rings<br />
                • Mobile Solar Charger<br />
                • Ladies Personal Care Pads
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info (Config Driven) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white font-['Outfit']">
              Connect With Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <span className="text-slate-300">{companyInfo.address.fullAddress}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="hover:text-amber-400 transition-colors text-slate-300">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-amber-400 transition-colors text-slate-300">
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-400">{companyInfo.businessHours.weekdays}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            {companyInfo.copyright}
          </p>
          <div className="flex items-center gap-6">
            <a 
              href={companyInfo.website} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-amber-400/90 hover:text-amber-300 font-medium"
            >
              {companyInfo.domain}
            </a>
            <span>•</span>
            <span className="text-slate-500">Product Showcase & Corporate Platform</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
