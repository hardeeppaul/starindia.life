import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  SunMedium, 
  HeartHandshake, 
  CheckCircle2, 
  Gem, 
  Zap, 
  HeartPulse,
  ExternalLink
} from 'lucide-react';
import SEO from '../components/SEO';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import companyInfo from '../data/companyInfo';

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      <SEO 
        title="Quality Products. Trusted Choice."
        description="Discover Star India's showcase of gold jewellery for men and women, mobile solar chargers, and personal care essentials."
        canonicalPath="/"
      />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-950 text-white pt-12 pb-24 md:pt-20 md:pb-32">
        {/* Background Gradients & Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,119,6,0.15),rgba(255,255,255,0))] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            
            {/* Top Brand Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-300 text-xs font-semibold shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Official Showcase • {companyInfo.domain}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-['Outfit'] leading-tight sm:leading-tight">
              Quality Products. <br />
              <span className="gold-gradient-text">Trusted Choice.</span> <br />
              Star India.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Star India offers a thoughtfully curated range of lifestyle jewellery, innovative solar utilities, and essential personal care products tailored for everyday life.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                to="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-850 border border-slate-700/80 transition-all duration-300"
              >
                <span>About Star India</span>
              </Link>
            </div>

            {/* Key Value Highlights Badges */}
            <div className="pt-10 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-300 text-left sm:text-center max-w-xl mx-auto">
              <div className="flex items-center gap-2 justify-center bg-slate-900/50 p-2.5 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Curated Selection</span>
              </div>
              <div className="flex items-center gap-2 justify-center bg-slate-900/50 p-2.5 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Verified Quality</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center gap-2 justify-center bg-slate-900/50 p-2.5 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Multi-Category</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. PRODUCT CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 md:-mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Category 1: Jewellery */}
          <Link
            to="/products?category=jewellery"
            className="group bg-white p-8 rounded-2xl border border-slate-200/90 shadow-lg hover:shadow-xl hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-amber-100 transition-all">
                <Gem className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-['Outfit'] group-hover:text-amber-600 transition-colors">
                Jewellery Collection
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Explore stylish gold rings for men and elegant designs for women crafted for daily elegance and special occasions.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600">
              <span>View Jewellery</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Category 2: Technology */}
          <Link
            to="/products?category=technology"
            className="group bg-white p-8 rounded-2xl border border-slate-200/90 shadow-lg hover:shadow-xl hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-amber-100 transition-all">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-['Outfit'] group-hover:text-amber-600 transition-colors">
                Technology & Solar
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Practical, portable mobile solar charging solutions designed for modern mobility, travel, and eco-conscious utility.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600">
              <span>View Technology</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Category 3: Personal Care */}
          <Link
            to="/products?category=personal-care"
            className="group bg-white p-8 rounded-2xl border border-slate-200/90 shadow-lg hover:shadow-xl hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-amber-100 transition-all">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-['Outfit'] group-hover:text-amber-600 transition-colors">
                Personal Care & Hygiene
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Respectful, gentle, and reliable feminine care pads offering soft breathable layers and all-day comfort.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600">
              <span>View Personal Care</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

        </div>
      </section>

      {/* 3. FEATURED PRODUCTS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-200 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Showcase Spotlight</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit']">
              Featured Star India Products
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-xl">
              Explore our current lineup of lifestyle products engineered with precision and quality focus.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-amber-600 group"
          >
            <span>View Complete Catalog</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. WHY CHOOSE STAR INDIA */}
      <section className="bg-slate-900 text-white py-20 rounded-3xl max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 border border-slate-800 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-amber-400 border border-slate-700 mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Our Principles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit']">
              Why Choose Star India
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              We stand for dependable craftsmanship, balanced product diversity, and a relentless focus on customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="space-y-3 bg-slate-950/60 p-6 rounded-2xl border border-slate-800">
              <div className="w-10 h-10 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center">
                <Gem className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-['Outfit']">Quality Selection</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Carefully selected materials and rigorous finishing standards ensure dependable satisfaction across all categories.
              </p>
            </div>

            <div className="space-y-3 bg-slate-950/60 p-6 rounded-2xl border border-slate-800">
              <div className="w-10 h-10 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-['Outfit']">Diverse Product Mix</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                From timeless jewellery to innovative power utilities and personal wellness essentials under one trusted name.
              </p>
            </div>

            <div className="space-y-3 bg-slate-950/60 p-6 rounded-2xl border border-slate-800">
              <div className="w-10 h-10 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center">
                <SunMedium className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-['Outfit']">Modern Utility</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Embracing sustainable technology and modern practical solutions designed for everyday life and travel.
              </p>
            </div>

            <div className="space-y-3 bg-slate-950/60 p-6 rounded-2xl border border-slate-800">
              <div className="w-10 h-10 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-['Outfit']">Customer Focused</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Clear product information, transparent communication, and a commitment to long-term trust and reliability.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 rounded-3xl p-8 sm:p-12 text-slate-950 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Outfit']">
              Ready to Explore Star India Products?
            </h2>
            <p className="text-slate-900 font-medium text-sm sm:text-base max-w-xl">
              Browse detailed specifications and feature highlights across our entire product portfolio.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/products"
              className="px-6 py-3 rounded-xl bg-slate-950 text-white font-bold text-sm hover:bg-slate-900 transition-colors shadow-md"
            >
              Browse Products
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-white/90 hover:bg-white text-slate-950 font-bold text-sm transition-colors border border-amber-600/30"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
