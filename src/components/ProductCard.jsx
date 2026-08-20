import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Tag, Sparkles } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-300/60 transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      
      {/* Image Showcase Container with robust mobile dimensions */}
      <div className="product-image-box relative w-full h-[220px] sm:h-[250px] bg-slate-100 overflow-hidden">
        <img
          src={product.image || product.fallbackImage}
          alt={`${product.name} - Star India Product Showcase`}
          decoding="async"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 max-w-full block"
          onError={(e) => {
            if (product.fallbackImage && e.target.src !== product.fallbackImage) {
              e.target.src = product.fallbackImage;
            }
          }}
        />
        
        {/* Category Pill */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-900/85 backdrop-blur-md text-white border border-slate-700/50 shadow-sm">
            <Tag className="w-3 h-3 text-amber-400" />
            {product.category}
          </span>
        </div>

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 right-3 z-10">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-400 text-slate-950 shadow-md">
              <Sparkles className="w-3 h-3" />
              {product.badge}
            </span>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors font-['Outfit']">
            {product.name}
          </h3>
          <p className="mt-2 text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Feature Highlights Pills */}
        {product.highlights && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {product.highlights.slice(0, 3).map((hl, index) => (
              <span 
                key={index}
                className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/60"
              >
                {hl}
              </span>
            ))}
          </div>
        )}

        {/* Action Button - Pure Showcase (View Details) */}
        <div className="pt-2 border-t border-slate-100">
          <Link
            to={`/products/${product.id}`}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-900 bg-slate-100 hover:bg-gradient-to-r hover:from-amber-400 hover:to-amber-500 hover:text-slate-950 transition-all duration-200 group/btn"
          >
            <span>View Details</span>
            <ArrowRight className="w-4 h-4 text-slate-500 group-hover/btn:text-slate-950 group-hover/btn:translate-x-1 transition-all" />
          </Link>
        </div>

      </div>
    </div>
  );
}
