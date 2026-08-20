/**
 * Star India - Company Information Configuration
 * Central source of truth for contact details, domain, branding, and social links.
 * Easily update contact details here without modifying UI components.
 */

export const companyInfo = {
  name: "Star India",
  tagline: "Quality Products. Trusted Choice.",
  subheading: "Offering a curated and diverse selection of quality lifestyle jewellery, innovative tech utilities, and essential personal care products tailored for modern living.",
  website: "https://starindia.life",
  domain: "starindia.life",
  
  // Contact Information (Easily editable)
  email: "contact@starindia.life",
  supportEmail: "support@starindia.life",
  phone: "+91 98765 43210",
  altPhone: "+91 98765 43211",
  whatsapp: "+91 98765 43210",
  
  // Office Location
  address: {
    street: "Star India Corporate Towers, Business Hub",
    area: "Outer Ring Road",
    city: "New Delhi",
    state: "Delhi",
    pincode: "110001",
    country: "India",
    fullAddress: "Star India Corporate Towers, Outer Ring Road, New Delhi, Delhi 110001, India"
  },

  // Operational Hours
  businessHours: {
    weekdays: "Monday – Friday: 9:30 AM – 6:30 PM",
    saturday: "Saturday: 10:00 AM – 4:00 PM",
    sunday: "Sunday: Closed"
  },

  // Social Links (Configurable placeholders)
  socialLinks: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com"
  },

  // Navigation Structure
  navLinks: [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" }
  ],

  // Footer Copyright Notice
  copyright: "© Star India. All Rights Reserved."
};

export default companyInfo;
