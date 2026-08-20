import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Home, ShoppingBag, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
      <SEO
        title="404 - Page Not Found"
        description="The page you were looking for does not exist on Star India."
      />

      <div className="w-16 h-16 rounded-3xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto shadow-md">
        <Sparkles className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <span className="text-sm font-bold uppercase tracking-widest text-amber-600">404 Error</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-['Outfit']">
          Page Not Found
        </h1>
        <p className="text-base text-slate-600 max-w-md mx-auto">
          The page you requested could not be found or may have moved.
        </p>
      </div>

      <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-amber-400 text-sm font-bold hover:bg-slate-800 transition-colors shadow-md"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 text-slate-900 text-sm font-semibold hover:bg-slate-200 transition-colors"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Browse Products</span>
        </Link>
      </div>
    </div>
  );
}
