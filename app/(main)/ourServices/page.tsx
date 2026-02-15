import React from 'react';
import type { Metadata } from "next";
import {
  Home, Building2, Sparkles, Truck, HardHat, Sofa, Wind, MessageCircle, Phone, Star
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Professional cleaning and hospitality services by Izzan Global — residential, commercial, deep cleaning, post-renovation, carpet cleaning, aircon servicing, and more across Malaysia.",
  keywords: [
    "cleaning services Malaysia",
    "residential cleaning",
    "commercial cleaning",
    "deep cleaning Malaysia",
    "hospitality services",
  ],
  openGraph: {
    title: "Our Services | Izzan Global Hotels & Resorts",
    description: "Professional cleaning and hospitality services across Malaysia.",
    url: "https://www.izzanglobalhospitality.com/ourServices",
    type: "website",
  },
};

export default function OurServices() {
  const services = [
    { title: "Residential Cleaning", icon: <Home className="text-[#D4A373]" />, desc: "Complete home cleaning services including dusting, vacuuming, mopping and sanitization.", points: ["Living Areas", "Bedrooms", "Bathrooms", "Kitchen"] },
    { title: "Commercial Cleaning", icon: <Building2 className="text-[#D4A373]" />, desc: "Professional cleaning for offices, retail spaces, and commercial properties.", points: ["Office Spaces", "Retail Stores", "Warehouses", "Lobbies"] },
    { title: "Deep Cleaning", icon: <Sparkles className="text-[#D4A373]" />, desc: "Intensive cleaning that reaches every corner, including hard to reach areas.", points: ["Detail Cleaning", "Appliance Deep Clean", "Wall Washing", "Ceiling Fans"] },
    { title: "Move-in/Move-Out", icon: <Truck className="text-[#D4A373]" />, desc: "Thorough cleaning services for properties before moving in or after moving out.", points: ["Full Property Clean", "Cabinet Interiors", "Window Tracks", "Light Fixtures"] },
    { title: "Post-Renovation", icon: <HardHat className="text-[#D4A373]" />, desc: "Specialized cleaning to remove construction dust, debris, and residue.", points: ["Dust Removal", "Debris Cleanup", "Surface Polishing", "Final Touches"] },
    { title: "Carpet & Upholstery", icon: <Sofa className="text-[#D4A373]" />, desc: "Professional steam cleaning and stain removal for carpets, sofas, and fabrics.", points: ["Steam Cleaning", "Stain Removal", "Odor Treatment", "Fabric Protection"] },
    { title: "Aircon Servicing", icon: <Wind className="text-[#D4A373]" />, desc: "Complete air conditioning maintenance including chemical wash and gas top-up.", points: ["Chemical Wash", "Gas Top Up", "Filter Cleaning", "General Servicing"] },
    { title: "Window Cleaning", icon: <Star className="text-[#D4A373]" />, desc: "Crystal clear window cleaning for residential and commercial properties.", points: ["Interior Windows", "Exterior Windows", "Glass Doors", "Mirrors"] },
  ];

  const stats = [
    { label: "Years Experience", value: "10+", color: "bg-[#1a2b4b]" },
    { label: "Happy Clients", value: "5K+", color: "bg-[#f2b830]" },
    { label: "Team Members", value: "50+", color: "bg-[#f2b830]" },
    { label: "Satisfaction", value: "100%", color: "bg-[#1a2b4b]" },
  ];

  const areas = ["Kuala Lumpur", "Selangor", "Penang", "Johor Bahru", "Langkawi", "Kota Kinabalu", "Melaka", "Ipoh"];

  return (
    <div className="min-h-screen font-sans text-[#1a2b4b]">

      {/* 1. Hero Section */}
      <section className="bg-[#1a2b4b] text-white pt-28 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#f2b830] font-bold tracking-[0.2em] text-sm mb-4 uppercase">Professional Cleaning</p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Malaysia&apos;s Premier <br /> Cleaning Services
          </h1>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            From residential homes to commercial spaces, we deliver exceptional cleaning services across Malaysia with attention to detail.
          </p>

        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="bg-[#FDFCFB] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#f2b830] font-bold text-xs uppercase tracking-widest mb-2">What We Offer</p>
            <h2 className="text-4xl font-serif font-bold">Our Cleaning Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-[#FDFCFB] w-12 h-12 flex items-center justify-center rounded-lg mb-6">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">{s.desc}</p>
                <ul className="space-y-2">
                  {s.points.map((p, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full border border-[#f2b830]" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#f2b830] font-bold text-xs uppercase tracking-widest mb-2">Why Choose Us</p>
            <h2 className="text-4xl font-serif font-bold mb-6 leading-tight">Trusted by Thousands <br /> Across Malaysia</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              With years of experience serving homes and businesses, we&apos;ve built a reputation for excellence and reliability. Our team uses the latest equipment and eco-friendly products.
            </p>
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              {["Trained Professionals", "Flexible Scheduling", "Competitive Pricing", "Eco-friendly Products", "100% Satisfaction", "Fully Insured"].map(item => (
                <div key={item} className="flex items-center gap-2 text-sm font-semibold">
                  <div className="w-2 h-2 bg-[#f2b830] rounded-full" /> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <div key={i} className={`${s.color} text-white p-10 rounded-lg text-center`}>
                <div className="text-3xl font-bold mb-1">{s.value}</div>
                <div className="text-xs uppercase tracking-widest opacity-80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Service Areas */}
      <section className="bg-[#FDFCFB] py-20 px-6 text-center border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#f2b830] font-bold text-xs uppercase tracking-widest mb-2">Coverage</p>
          <h2 className="text-3xl font-serif font-bold mb-4">Service Areas</h2>
          <p className="text-gray-500 mb-10">We provide premium services across major cities and regions.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map(area => (
              <span key={area} className="bg-white border border-gray-200 px-6 py-2 rounded-full text-sm font-medium shadow-sm hover:border-[#f2b830] transition-colors cursor-default">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Footer CTA */}
      <section className="bg-[#1a2b4b] text-white py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-6">Ready for a Spotless Space?</h2>
          <p className="text-gray-400 mb-10">Contact us today for a free quote. Our team is ready to transform your space.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/60177085596?text=Hello, I am interested in booking a room."
    target="_blank"
    rel="noopener noreferrer" className="bg-[#25D366] text-white px-8 py-4 rounded-md font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all">
              <MessageCircle size={20} /> WhatsApp Us
            </a>
            <a href="tel:+60177085596"  className="bg-[#f2b830] text-[#1a2b4b] px-8 py-4 rounded-md font-bold flex items-center justify-center gap-2 hover:bg-[#d4a028] transition-all">
              <Phone size={18} /> Call Now
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}