"use client";

import React from "react";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";

// --- Types ---
interface ContactMethod {
  title: string;
  description: string;
  value: string;
  icon: React.ReactNode;
  btnLabel?: string;
  btnColor?: string;
}

interface HotelContact {
  id: number;
  name: string;
  location: string;
  phone: string;
}

// --- Data ---
const TOP_CONTACTS: ContactMethod[] = [
  {
    title: "Call Us",
    description: "Available 24/7 for your inquiries",
    value: "+60 12-345 6789",
    icon: <Phone className="w-6 h-6 text-[#d4a373]" />, // Golden color
  },
  {
    title: "WhatsApp",
    description: "Quick responses via WhatsApp",
    value: "Chat Now",
    icon: <MessageCircle className="w-6 h-6 text-[#25D366]" />, // WhatsApp Green
    btnLabel: "Chat Now",
    btnColor: "bg-[#25D366]",
  },
  {
    title: "Email Us",
    description: "We'll respond within 24 hours",
    value: "+60 12-345 6789",
    icon: <Mail className="w-6 h-6 text-[#4285F4]" />, // Email Blue
  },
];

const HOTEL_LIST: HotelContact[] = [
  { id: 1, name: "Grand Millennium Lumpur", location: "Kuala Lumpur, Malaysia", phone: "+60 12345679" },
  { id: 2, name: "Paradise Resort Langkawi", location: "Langkawi, Kedah, Malaysia", phone: "+60 12546639" },
  { id: 3, name: "Heritage Grand Penang", location: "George Town, Penang, Malaysia", phone: "+60 12346693" },
  { id: 4, name: "Waterfront Luxury Johor Bahru", location: "Johor Bahru, Malaysia", phone: "+60 12345667" },
  { id: 5, name: "Rainforest Eco Lodge Sabah", location: "Kota Kinabalu, Sabah, Malaysia", phone: "+60 12348682" },
  { id: 6, name: "The Majestic Hotel", location: "Kuala Lumpur, Malaysia", phone: "+60 12346682" },
];

export default function ContactUs() {
  return (
    <section className="bg-[#fdfbf7] min-h-screen">
      {/* Header */}
      <div className="bg-[#1a2b4b] text-white py-16 text-center px-4">
        <p className="text-[#f2b830] uppercase tracking-[0.2em] text-xs font-bold mb-2">GET IN TOUCH</p>
        <h2 className="text-4xl md:text-5xl font-serif mb-4">Contact Us</h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm">
          Have questions or need assistance? Our team is here to help plan your perfect stay.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-10">
        {/* Top 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {TOP_CONTACTS.map((contact, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center flex flex-col items-center">
              <div className="mb-4 p-3 bg-gray-50 rounded-full">{contact.icon}</div>
              <h3 className="text-lg font-bold text-[#1a2b4b] mb-1">{contact.title}</h3>
              <p className="text-gray-400 text-xs mb-4">{contact.description}</p>
              {contact.btnLabel ? (
                <button className={`${contact.btnColor} text-white px-6 py-2 rounded text-xs font-bold hover:opacity-90 transition-all`}>
                  {contact.btnLabel}
                </button>
              ) : (
                <p className="text-[#f2b830] font-bold">{contact.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* Middle Section Title */}
        <h2 className="text-2xl font-serif text-center text-[#1a2b4b] mb-10">Contact Our Hotels Directly</h2>

        {/* Hotel Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {HOTEL_LIST.map((hotel) => (
            <div key={hotel.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-[#1a2b4b] mb-3">{hotel.name}</h4>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <MapPin className="w-3.5 h-3.5 text-gray-400" />
                  <span>{hotel.location}</span>
                </div>
                <div className="flex items-center gap-2 text-[#f2b830] text-xs font-bold">
                  <Phone className="w-3.5 h-3.5" />
                  <span>{hotel.phone}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-[#25D366] text-white py-2 rounded text-[10px] font-bold">WhatsApp</button>
                <button className="flex-1 bg-[#1a2b4b] text-white py-2 rounded text-[10px] font-bold">Call</button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="border-t border-gray-200 pt-16 pb-10">
            <h3 className="text-center text-2xl font-serif text-[#1a2b4b] mb-12">Head Office</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
                <div className="flex flex-col items-center">
                    <MapPin className="text-[#f2b830] w-5 h-5 mb-3" />
                    <h5 className="font-bold text-sm mb-1">Address</h5>
                    <p className="text-gray-500 text-[10px] leading-relaxed">Level 19, Tower A, KL23, Kuala Lumpur, 50088 Malaysia</p>
                </div>
                <div className="flex flex-col items-center">
                    <Phone className="text-[#f2b830] w-5 h-5 mb-3" />
                    <h5 className="font-bold text-sm mb-1">Phone</h5>
                    <p className="text-gray-500 text-[10px]">+60 12-345 6789</p>
                </div>
                <div className="flex flex-col items-center">
                    <Clock className="text-[#f2b830] w-5 h-5 mb-3" />
                    <h5 className="font-bold text-sm mb-1">Hours</h5>
                    <p className="text-gray-500 text-[10px]">Mon - Fri: 9:00 AM - 6:00 PM<br/>Sat - Sun: 10:00 AM - 4:00 PM</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}