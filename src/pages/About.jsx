import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Target, 
  Eye, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  Compass, 
  ArrowRight 
} from 'lucide-react';
import SEO from '../components/SEO';
import companyInfo from '../data/companyInfo';

export default function About() {
  return (
    <div className="py-12 md:py-16 space-y-16">
      <SEO
        title="About Us | Trusted Quality & Product Diversity"
        description="Learn about Star India's commitment to quality craftsmanship, product diversity across lifestyle categories, and long-term customer trust."
        canonicalPath="/about"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero Banner / Introduction */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Star India</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight">
            Committed to Quality. <br />
            <span className="gold-gradient-text">Built on Trust.</span>
          </h1>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Star India is dedicated to offering a multi-faceted product showcase spanning stylish jewellery, sustainable tech accessories, and dependable personal care solutions for modern consumers.
          </p>
        </div>

        {/* Brand Overview & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-sm">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600">
              <ShieldCheck className="w-4 h-4" />
              <span>Who We Are</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-['Outfit']">
              A Modern Approach to Everyday Essentials & Lifestyle Needs
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              At Star India, our core philosophy is centered on offering thoughtfully designed products that balance elegance, durability, and practical everyday utility. We believe that modern lifestyles require a diverse range of reliable solutions—from timeless gold jewellery collections for special occasions to portable clean energy tools and gentle hygiene care.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Our priority is simple: maintain strict quality control, provide crystal-clear product information, and build meaningful, enduring relationships with the people who explore our product portfolio.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-semibold text-slate-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Diverse Product Range</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Quality-First Standards</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Customer-Driven Focus</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Transparent Information</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-950 text-white p-8 rounded-2xl border border-slate-800 space-y-6 shadow-xl">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Our Domain</span>
              <h3 className="text-2xl font-bold font-['Outfit']">{companyInfo.domain}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                The official digital showcase for Star India. All official product announcements, updates, and catalogs are hosted exclusively on this domain.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-3 text-xs text-slate-300">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Category Mix</span>
                <span className="font-semibold text-white">Jewellery • Tech • Care</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Platform Nature</span>
                <span className="font-semibold text-amber-400">Pure Product Showcase</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Support Inquiries</span>
                <span className="font-semibold text-white">{companyInfo.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-['Outfit']">Our Mission</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              To curate and present dependable, aesthetically refined, and accessible lifestyle products that seamlessly integrate into the daily lives of individuals and families across India.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-['Outfit']">Our Vision</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              To build a long-lasting, trusted Indian enterprise known for consistent quality delivery, ethical communication, and progressive expansion into multi-category essentials.
            </p>
          </div>

        </div>

        {/* Core Pillars */}
        <div className="bg-slate-900 text-white p-8 sm:p-12 rounded-3xl border border-slate-800 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-['Outfit']">Our Core Pillars</h2>
            <p className="text-xs sm:text-sm text-slate-400">The foundational values guiding our product selections and service mindset.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
              <h4 className="text-base font-bold text-amber-400 font-['Outfit']">Quality Assurance</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Prioritizing superior finishes in our jewellery, durable builds in our tech utilities, and skin-friendly gentleness in personal care.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
              <h4 className="text-base font-bold text-amber-400 font-['Outfit']">Transparent Presentation</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Honest and accurate product specifications without exaggerated claims, ensuring trust and authenticity at every step.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
              <h4 className="text-base font-bold text-amber-400 font-['Outfit']">Progressive Expansion</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Regularly evaluating innovative product segments to introduce valuable, modern lifestyle additions in the future.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-4 pt-4">
          <h3 className="text-2xl font-bold text-slate-900 font-['Outfit']">Explore What Star India Has to Offer</h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Take a look at our current collections or reach out to our team with any product inquiries.
          </p>
          <div className="flex items-center justify-center gap-4 pt-2">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-amber-400 font-bold text-sm hover:bg-slate-800 transition-colors shadow-md"
            >
              <span>View Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-slate-100 text-slate-800 font-semibold text-sm hover:bg-slate-200 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
