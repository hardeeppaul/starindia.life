import { useEffect } from 'react';
import companyInfo from '../data/companyInfo';

/**
 * Dynamic SEO component that updates head metadata per page/product.
 */
export default function SEO({ 
  title, 
  description, 
  keywords, 
  canonicalPath = "",
  image = "/favicon.svg" 
}) {
  const fullTitle = title 
    ? `${title} | ${companyInfo.name}` 
    : `${companyInfo.name} | ${companyInfo.tagline}`;
    
  const metaDescription = description || companyInfo.subheading;
  const canonicalUrl = `${companyInfo.website}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;

  useEffect(() => {
    // Document Title
    document.title = fullTitle;

    // Helper function to update or create meta tag
    const setMetaTag = (attribute, name, content) => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper function for link tags
    const setLinkTag = (rel, href) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // Standard Meta Tags
    setMetaTag('name', 'description', metaDescription);
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }
    setLinkTag('canonical', canonicalUrl);

    // Open Graph
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', metaDescription);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', `${companyInfo.website}${image}`);

    // Twitter
    setMetaTag('property', 'twitter:title', fullTitle);
    setMetaTag('property', 'twitter:description', metaDescription);
    setMetaTag('property', 'twitter:url', canonicalUrl);
  }, [fullTitle, metaDescription, canonicalUrl, keywords, image]);

  return null;
}
