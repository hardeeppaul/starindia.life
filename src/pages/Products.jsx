import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';
import { Sparkles, ShieldCheck } from 'lucide-react';
import companyInfo from '../data/companyInfo';

export default function Products() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';

  return (
    <div className="py-12 md:py-16">
      <SEO
        title="Products Catalog | Jewellery, Technology & Personal Care"
        description="Explore Star India's comprehensive showcase of gents and ladies gold rings, portable mobile solar chargers, and women's hygiene pads."
        canonicalPath="/products"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Product Portfolio</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight">
            Explore Star India Products
          </h1>
          
          <p className="text-base text-slate-600 leading-relaxed">
            Browse our versatile range of lifestyle products designed for quality, comfort, and everyday reliability. Select any product to view comprehensive details.
          </p>

          {/* Pure Showcase Notice */}
          <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 bg-slate-100 px-4 py-2 rounded-full border border-slate-200">
            <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" />
            <span>Product information & showcase catalog only • {companyInfo.domain}</span>
          </div>
        </div>

        {/* Filterable Product Grid */}
        <ProductGrid products={products} initialCategory={categoryParam} />

      </div>
    </div>
  );
}
