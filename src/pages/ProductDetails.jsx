import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Tag, 
  Sparkles, 
  ShieldCheck, 
  Info, 
  Layers, 
  Send,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import SEO from '../components/SEO';
import { products } from '../data/products';
import companyInfo from '../data/companyInfo';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find product by id
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="py-24 max-w-7xl mx-auto px-4 text-center">
        <SEO 
          title="Product Not Found"
          description="The requested Star India product could not be located in our showcase catalog."
        />
        <h2 className="text-2xl font-bold text-slate-900 font-['Outfit']">Product Not Found</h2>
        <p className="mt-2 text-sm text-slate-600">The product you are looking for does not exist in our showcase catalog.</p>
        <Link
          to="/products"
          className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-900 text-amber-400 font-semibold text-sm hover:bg-slate-800"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Products</span>
        </Link>
      </div>
    );
  }

  // Related products from same category
  const relatedProducts = products.filter(
    (p) => p.categoryId === product.categoryId && p.id !== product.id
  );

  return (
    <div className="py-10 md:py-16">
      <SEO
        title={product.name}
        description={product.shortDescription}
        canonicalPath={`/products/${product.id}`}
        image={product.image}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 overflow-x-auto pb-1">
          <Link to="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link to="/products" className="hover:text-amber-600 transition-colors">Products</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link to={`/products?category=${product.categoryId}`} className="hover:text-amber-600 transition-colors">
            {product.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-900 font-semibold truncate">{product.name}</span>
        </nav>

        {/* Back Button */}
        <div>
          <button
            onClick={() => navigate('/products')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-amber-600" />
            <span>Back to Products Catalog</span>
          </button>
        </div>

        {/* Product Main Showcase Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-md">
          
          {/* Left Column: High-Res Image Display */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative w-full min-h-[260px] h-[280px] sm:h-[380px] md:h-[420px] aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/60 shadow-inner group">
              <img
                src={product.image || product.fallbackImage}
                alt={`${product.name} - Detailed Showcase`}
                decoding="async"
                className="w-full h-full min-h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 max-w-full block"
                onError={(e) => {
                  if (product.fallbackImage && e.target.src !== product.fallbackImage) {
                    e.target.src = product.fallbackImage;
                  }
                }}
              />
              
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-slate-950 shadow-md">
                    <Sparkles className="w-3.5 h-3.5" />
                    {product.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Showcase Disclaimer Notice */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 text-xs text-slate-600 flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>
                <strong>Product Showcase:</strong> This page serves for product presentation and technical specifications under Star India.
              </span>
            </div>
          </div>

          {/* Right Column: Information & Features */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              
              {/* Category & Status */}
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-slate-900 text-amber-400">
                  <Tag className="w-3 h-3" />
                  {product.category}
                </span>
                <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  {product.status || "In Showcase"}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight">
                {product.name}
              </h1>

              {/* Full Description */}
              <p className="text-base text-slate-700 leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Key Highlights Tags */}
              {product.highlights && (
                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Key Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.highlights.map((hl, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium px-3 py-1 rounded-lg bg-amber-50 text-amber-900 border border-amber-200/60"
                      >
                        {hl}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features Checklist */}
              <div className="pt-4 space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-['Outfit']">
                  Product Features
                </h4>
                <ul className="space-y-2.5">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Inquiries / Connect Action */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md shadow-amber-500/20 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Inquire About This Product</span>
              </Link>
              <Link
                to="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                Explore More Products
              </Link>
            </div>

          </div>
        </div>

        {/* Specifications & Overview Details Table */}
        {product.specifications && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Info className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-['Outfit']">
                  Specifications & Overview
                </h3>
                <p className="text-xs text-slate-500">Official technical and design overview for {product.name}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {product.specifications.map((spec, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/60">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    {spec.label}
                  </span>
                  <span className="text-sm font-bold text-slate-900">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Category Products */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-slate-900 font-['Outfit']">
                More in {product.category}
              </h3>
              <Link
                to={`/products?category=${product.categoryId}`}
                className="text-xs font-bold uppercase tracking-wider text-amber-600 hover:underline"
              >
                View Category
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relProduct) => (
                <div key={relProduct.id} className="bg-white p-5 rounded-2xl border border-slate-200 flex items-center gap-4 hover:shadow-md transition-shadow">
                  <img
                    src={relProduct.image || relProduct.fallbackImage}
                    alt={relProduct.name}
                    loading="lazy"
                    decoding="async"
                    className="w-16 h-16 rounded-xl object-cover shrink-0"
                    onError={(e) => {
                      if (relProduct.fallbackImage && e.target.src !== relProduct.fallbackImage) {
                        e.target.src = relProduct.fallbackImage;
                      }
                    }}
                  />
                  <div className="flex-grow">
                    <h4 className="text-sm font-bold text-slate-900 font-['Outfit']">{relProduct.name}</h4>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{relProduct.shortDescription}</p>
                    <Link
                      to={`/products/${relProduct.id}`}
                      className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-amber-600 hover:underline"
                    >
                      <span>View</span>
                      <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
