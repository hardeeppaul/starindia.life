# Star India — Official Product Showcase Platform

[![Website](https://img.shields.io/badge/Website-starindia.deepinfotech.site-amber.svg)](https://starindia.deepinfotech.site)
[![Framework](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![Build](https://img.shields.io/badge/Vite-6-646CFF.svg)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38B2AC.svg)](https://tailwindcss.com/)

A modern, responsive, and SEO-optimized frontend product showcase website for **Star India** ([https://starindia.deepinfotech.site](https://starindia.deepinfotech.site)).

---

## 📌 Project Overview

This website serves as the official **product showcase & company credibility platform** for Star India. 

> [!NOTE]
> This is strictly a **product showcase website**, not an e-commerce store. It does not include a cart, checkout, buy now buttons, or payment gateway integration.

### Core Showcase Categories
- **Jewellery**: Stylish Gents Gold Rings and elegant Ladies Gold Rings crafted for daily wear and celebrations.
- **Technology & Solar**: Portable Mobile Solar Chargers designed for travel, outdoor utility, and clean power backup.
- **Personal Care & Hygiene**: Breathable, ultra-soft Ladies Hygiene Care products.

---

## 🚀 Key Features

- **Dynamic Showcase**: Detailed product presentation with feature checklists and technical specifications.
- **Category Filtering & Search**: Instant filtering across Jewellery, Technology, and Personal Care categories.
- **Centralized Data Management**:
  - `src/data/products.js`: Single extensible source of truth for products with bundled assets for reliable mobile loading.
  - `src/data/companyInfo.js`: Centralized configuration for contact information, address, phone numbers, and domain settings.
  - `src/config/api.js`: Simple, beginner-friendly single API configuration file for future backend connections.
- **Member Portal UI**: Professional frontend Login and Registration interfaces (with Referral ID and Left/Right position selection).
- **Responsive & Accessible**: Optimized for mobile, tablet, laptop, and 4K desktop screens with cross-browser fallbacks.
- **Built-in SEO**: Dynamic document titles, meta descriptions, Open Graph cards, sitemap.xml, robots.txt, and canonical links pointing to `https://starindia.deepinfotech.site`.
- **Vercel SPA Routing**: `vercel.json` SPA rewrite configuration to prevent 404 on inner page refresh.

---

## 🛠️ Technology Stack

- **Frontend**: React.js (v19)
- **Bundler**: Vite
- **Styling**: Tailwind CSS v4 + Custom Utility Layers with cross-browser fallbacks
- **Routing**: React Router DOM (v7) with catch-all 404 page
- **Icons**: Lucide React
- **Typography**: Google Fonts (*Outfit* & *Plus Jakarta Sans*) with fallback font stacks

---

## 📂 Project Structure

```text
starindia/
├── public/
│   ├── favicon.svg               # Star India brand SVG icon
│   ├── robots.txt                # SEO crawler directives
│   ├── sitemap.xml               # Canonical XML sitemap
│   └── products/                 # High-resolution product images
│       ├── gents-gold-ring.jpg
│       ├── ladies-gold-ring.jpg
│       ├── mobile-solar-charger.jpg
│       └── ladies-pad.jpg
├── src/
│   ├── assets/products/          # Bundled images for mobile & offline resilience
│   ├── components/               # Reusable UI components
│   │   ├── Navbar.jsx            # Sticky navigation bar with mobile drawer
│   │   ├── Footer.jsx            # Comprehensive footer with quick links & badges
│   │   ├── ProductCard.jsx       # Interactive product showcase card
│   │   ├── ProductGrid.jsx       # Grid container with filter chips
│   │   └── SEO.jsx               # Dynamic document title & meta tags
│   ├── config/
│   │   └── api.js                # Single simple API configuration file
│   ├── data/
│   │   ├── companyInfo.js        # Contact details & site configuration
│   │   └── products.js           # Central product catalog
│   ├── pages/                    # Route pages
│   │   ├── Home.jsx              # Hero, features, category spotlight, credibility
│   │   ├── Products.jsx          # Catalog filter and showcase
│   │   ├── ProductDetails.jsx    # Specifications, feature lists, related items
│   │   ├── About.jsx             # Company mission, values, trust pillars
│   │   ├── Contact.jsx           # Inquiries form, office address, map placeholder
│   │   ├── Login.jsx             # Member portal login UI
│   │   ├── Signup.jsx            # Associate registration UI
│   │   └── NotFound.jsx          # Custom 404 page
│   ├── App.jsx                   # Main layout and React Router routes
│   ├── main.jsx                  # React DOM entrypoint
│   └── index.css                 # Base design tokens & responsive fallbacks
├── index.html                    # Root HTML document & SEO tags
├── vercel.json                   # Vercel SPA rewrite rule for refresh support
└── vite.config.js                # Vite build and dev configuration
```

---

## 💻 Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start local development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

---

Official Production Website: [https://starindia.deepinfotech.site](https://starindia.deepinfotech.site)
