/**
 * Star India - Product Catalog Data
 * 
 * Central data source for Star India product showcase.
 * Uses Vite asset bundling for robust mobile, desktop, and offline-safe image delivery.
 * 
 * Rules:
 * - Pure showcase only: no internal pricing, no e-commerce checkout.
 * - Safe & professional descriptions without unsubstantiated purity or health claims.
 */

import gentsGoldRingImg from '../assets/products/gents-gold-ring.jpg';
import ladiesGoldRingImg from '../assets/products/ladies-gold-ring.jpg';
import mobileSolarChargerImg from '../assets/products/mobile-solar-charger.jpg';
import ladiesPadImg from '../assets/products/ladies-pad.jpg';

export const categories = [
  { id: "all", label: "All Products" },
  { id: "jewellery", label: "Jewellery" },
  { id: "technology", label: "Technology" },
  { id: "personal-care", label: "Personal Care" }
];

export const products = [
  {
    id: "gents-gold-rings",
    name: "Gents Gold Rings",
    category: "Jewellery",
    categoryId: "jewellery",
    badge: "Featured Collection",
    image: gentsGoldRingImg,
    fallbackImage: "/products/gents-gold-ring.jpg",
    shortDescription: "Refined gold rings for men featuring contemporary and timeless styling with an enduring polished finish.",
    fullDescription: "Our Gents Gold Rings collection combines masculine elegance with master craftsmanship. Designed for men who value sophisticated simplicity, each ring features an exquisite finish suitable for everyday wear, formal gatherings, and celebratory milestones.",
    features: [
      "Stylish gold jewellery crafted specifically for men",
      "Ergonomically contoured inner band for all-day comfort",
      "Matte and high-gloss dual texture finish options",
      "Robust build designed for everyday wear and special occasions",
      "Hypoallergenic surface finishing"
    ],
    specifications: [
      { label: "Product Type", value: "Men's Jewellery" },
      { label: "Category", value: "Gold Rings for Men" },
      { label: "Finish", value: "Dual Tone / Polished & Brushed" },
      { label: "Design Style", value: "Classic & Contemporary Band" },
      { label: "Ideal For", value: "Daily Wear, Business & Celebrations" }
    ],
    highlights: [
      "Premium Polish & Luster",
      "Comfort Fit Architecture",
      "Timeless Aesthetic",
      "Durable Finish"
    ],
    status: "Available for Showcase"
  },
  {
    id: "ladies-gold-rings",
    name: "Ladies Gold Rings",
    category: "Jewellery",
    categoryId: "jewellery",
    badge: "Popular Design",
    image: ladiesGoldRingImg,
    fallbackImage: "/products/ladies-gold-ring.jpg",
    shortDescription: "Graceful gold rings designed for women, blending traditional grace with chic modern aesthetics.",
    fullDescription: "Celebrate elegance with our Ladies Gold Rings collection. Featuring intricate artisanal patterns and graceful motifs, these rings offer a harmonious blend of traditional charm and modern design, making them an ideal accessory for festive occasions and daily elegance.",
    features: [
      "Elegant designs tailored for modern and traditional attire",
      "Exquisite floral and geometric artistic detailing",
      "Smooth edges crafted to prevent snagging on fabric",
      "High-luster protective finish to maintain lasting shine",
      "Versatile styling for weddings, parties, and everyday grace"
    ],
    specifications: [
      { label: "Product Type", value: "Women's Jewellery" },
      { label: "Category", value: "Ladies Gold Rings" },
      { label: "Finish", value: "Radiant High-Gloss / Artisanal Motifs" },
      { label: "Design Style", value: "Traditional & Modern Fusion" },
      { label: "Ideal For", value: "Festivals, Weddings & Daily Elegance" }
    ],
    highlights: [
      "Artisanal Craftsmanship",
      "Fabric-Friendly Smooth Edges",
      "Lustrous Finish",
      "Versatile Occasion Wear"
    ],
    status: "Available for Showcase"
  },
  {
    id: "mobile-solar-charger",
    name: "Mobile Solar Charger",
    category: "Technology",
    categoryId: "technology",
    badge: "Eco Innovation",
    image: mobileSolarChargerImg,
    fallbackImage: "/products/mobile-solar-charger.jpg",
    shortDescription: "High-efficiency portable solar power bank engineered for outdoor adventures, travel, and on-the-go utility.",
    fullDescription: "Stay connected wherever life takes you with the Star India Mobile Solar Charger. Harnessing clean solar energy alongside standard rapid charging, this compact and rugged device provides reliable battery backup during travel, remote work, and outdoor excursions.",
    features: [
      "Integrated solar panel for emergency power absorption from sunlight",
      "Multi-port output to charge smartphones, tablets, and accessories simultaneously",
      "Rugged shock-resistant housing with protective corner bumpers",
      "Built-in LED emergency flashlight and battery capacity indicator",
      "Lightweight, travel-friendly profile with carabiner hook attachment"
    ],
    specifications: [
      { label: "Product Type", value: "Portable Power Utility" },
      { label: "Category", value: "Solar Technology" },
      { label: "Input Ports", value: "Solar Absorption + Micro-USB / Type-C" },
      { label: "Output Ports", value: "Dual Smart USB Output" },
      { label: "Body Construction", value: "Shock-Resistant Polymer" },
      { label: "Ideal For", value: "Travel, Outdoor Camping & Power Backup" }
    ],
    highlights: [
      "Eco-Conscious Charging",
      "Rugged Shock Protection",
      "Dual Device Output",
      "Integrated Emergency Light"
    ],
    status: "Available for Showcase"
  },
  {
    id: "ladies-pads",
    name: "Ladies Pads (Personal Care)",
    category: "Personal Care",
    categoryId: "personal-care",
    badge: "Essential Care",
    image: ladiesPadImg,
    fallbackImage: "/products/ladies-pad.jpg",
    shortDescription: "Ultra-soft, breathable hygiene pads thoughtfully designed for reliable leakage protection and all-day comfort.",
    fullDescription: "Prioritize comfort and peace of mind with Star India Ladies Hygiene Pads. Engineered with ultra-soft cottony top layers and rapid-lock absorbent cores, they deliver gentle protection against leakage while keeping the skin dry, fresh, and irritation-free.",
    features: [
      "Gentle, breathable cotton-soft top sheet for skin-friendly comfort",
      "Advanced multi-layer quick-absorb core to lock moisture rapidly",
      "Flexible side wings for secure placement and zero shifting during movement",
      "Odour-neutralizing design providing lasting freshness throughout the day",
      "Hygienically sealed individual packaging for discreet and convenient carrying"
    ],
    specifications: [
      { label: "Product Type", value: "Feminine Hygiene & Wellness" },
      { label: "Category", value: "Personal Care" },
      { label: "Surface Layer", value: "Breathable Cotton-Soft Texture" },
      { label: "Core", value: "Rapid-Absorb Gel Lock Technology" },
      { label: "Packaging", value: "Individually Sealed Pouches" },
      { label: "Ideal For", value: "Day & Night Period Protection" }
    ],
    highlights: [
      "Ultra-Soft Breathable Top",
      "Active Leak-Lock Core",
      "Discreet Individual Wraps",
      "Skin-Friendly & Gentle"
    ],
    status: "Available for Showcase"
  }
];

export default products;
