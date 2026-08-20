# Star India — Official Product Showcase Platform

[![Website](https://img.shields.io/badge/Website-starindia.life-amber.svg)](https://starindia.life)
[![Framework](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![Build](https://img.shields.io/badge/Vite-6-646CFF.svg)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38B2AC.svg)](https://tailwindcss.com/)

A modern, responsive, and SEO-optimized frontend product showcase website for **Star India** ([https://starindia.life](https://starindia.life)).

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
  - `src/data/products.js`: Single extensible source of truth for products.
  - `src/data/companyInfo.js`: Centralized configuration for contact information, address, phone numbers, and domain settings.
- **Member Portal UI**: Professional frontend Login and Registration interfaces (with Referral ID and Left/Right position selection).
- **Responsive & Accessible**: Optimized for mobile, tablet, laptop, and 4K desktop screens.
- **Built-in SEO**: Dynamic document titles, meta descriptions, Open Graph cards, and canonical links pointing to `https://starindia.life`.

---

## 🛠️ Technology Stack

- **Frontend**: React.js (v19)
- **Bundler**: Vite
- **Styling**: Tailwind CSS v4 + Custom Utility Layers
- **Routing**: React Router DOM (v7)
- **Icons**: Lucide React
- **Typography**: Google Fonts (*Outfit* & *Plus Jakarta Sans*)

---

## 📂 Project Structure

```text
starindia.life/
├── public/
│   ├── favicon.svg               # Star India brand SVG icon
│   └── products/                 # High-resolution product images
│       ├── gents-gold-ring.jpg
│       ├── ladies-gold-ring.jpg
│       ├── mobile-solar-charger.jpg
│       └── ladies-pad.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Responsive navigation & mobile drawer
│   │   ├── Footer.jsx            # Footer with centralized contact & links
│   │   ├── ProductCard.jsx       # Reusable showcase card
│   │   ├── ProductGrid.jsx       # Filterable & searchable product grid
│   │   └── SEO.jsx               # Dynamic SEO head meta manager
│   ├── data/
│   │   ├── companyInfo.js        # Centralized company & contact config
│   │   └── products.js           # Extensible product catalog array
│   ├── pages/
│   │   ├── Home.jsx              # Landing page & hero showcase
│   │   ├── Products.jsx          # Dedicated products catalog
│   │   ├── ProductDetails.jsx    # Dynamic product detail & specs page
│   │   ├── About.jsx             # Company story, vision & pillars
│   │   ├── Contact.jsx           # Validated inquiry form & office details
│   │   ├── Login.jsx             # Member portal login UI
│   │   ├── Signup.jsx            # Member registration UI
│   │   └── NotFound.jsx          # 404 error handling page
│   ├── App.jsx                   # Route configuration & layout wrapper
│   ├── index.css                 # Design tokens & Tailwind imports
│   └── main.jsx                  # React application entry point
├── package.json
└── vite.config.js
```

---

## ⚙️ Getting Started Locally

### Prerequisites
- Node.js (v18.0 or later)
- npm (v9.0 or later)

### Installation

```bash
# Clone the repository
git clone <your-repository-url>
cd Starindia.life

# Install dependencies
npm install

# Start local development server
npm run dev
```

The application will be running at `http://localhost:5173`.

### Production Build

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🔄 Adding New Products in the Future

To add a new product to the showcase, open `src/data/products.js` and append a new object:

```javascript
{
  id: "new-product-slug",
  name: "Product Name",
  category: "Jewellery", // "Jewellery" | "Technology" | "Personal Care"
  categoryId: "jewellery",
  badge: "New Arrival",
  image: "/products/new-product.jpg",
  shortDescription: "Short summary...",
  fullDescription: "Detailed overview...",
  features: ["Feature 1", "Feature 2"],
  specifications: [{ label: "Spec Name", value: "Value" }],
  highlights: ["Highlight 1", "Highlight 2"],
  status: "Available for Showcase"
}
```

---

## 📄 License & Copyright

© Star India. All Rights Reserved.  
Official Website: [https://starindia.life](https://starindia.life)
