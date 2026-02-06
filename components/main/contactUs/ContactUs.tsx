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
    value: "+6017708 5596",
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
    value: "izzanglobalhospitality@gmail.com",
    icon: <Mail className="w-6 h-6 text-[#4285F4]" />, // Email Blue
  },
];

const LOCATIONS = [
  {
    id: 1,
    name: "Grand Millennium Kuala Lumpur",
    address: "160, Jalan Bukit Bintang, 55100 Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.7844!2d101.7093!3d3.1478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc3629!2sGrand%20Millennium%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1700000000000",
  },
  {
    id: 2,
    name: "Paradise Resort Langkawi",
    address: "Pantai Cenang, 07000 Langkawi, Kedah, Malaysia",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.1!2d99.7!3d6.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304b!2sPantai%20Cenang!5e0!3m2!1sen!2smy!4v1700000000000",
  },
  {
    id: 3,
    name: "Heritage Grand Penang",
    address: "10, Lebuh Farquhar, George Town, 10200 Penang, Malaysia",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.1!2d100.3!3d5.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304a!2sGeorge%20Town!5e0!3m2!1sen!2smy!4v1700000000000",
  },
  {
    id: 4,
    name: "Waterfront Luxury Johor Bahru",
    address: "Jalan Ibrahim Sultan, Stulang Laut, 80300 Johor Bahru, Johor, Malaysia",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.1!2d103.7!3d1.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da!2sJohor%20Bahru!5e0!3m2!1sen!2smy!4v1700000000000",
  },
  {
    id: 5,
    name: "Rainforest Eco Lodge Sabah",
    address: "Jalan Pantai, Tanjung Aru, 88100 Kota Kinabalu, Sabah, Malaysia",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.1!2d116.0!3d5.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x323b!2sKota%20Kinabalu!5e0!3m2!1sen!2smy!4v1700000000000",
  },
];

export default function ContactUs() {
  return (
    <section className="bg-[#fdfbf7] min-h-screen">
      {/* Header */}

      <section className="bg-[#1a2a4d] pt-28 pb-20 px-4 text-center">
      <div className="max-w-5xl mx-auto">
        {/* Sub-title */}
        <p className="text-[#d48e28] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
        GET IN TOUCH
        </p>

        {/* Main Title */}
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
        Contact Us
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
        Have questions or need assistance? Our team is here to help you plan your perfect stay.
        </p>
      </div>
    </section>


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


        {/* Hotel Cards Grid */}
        <section className="pb-20 bg-[#FDFCFB]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold text-[#1a2b4b] text-center mb-12">
          Our Hotel Locations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LOCATIONS.map((hotel) => (
            <div 
              key={hotel.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] border  border-gray-100 group hover:shadow-lg transition-shadow duration-300"
            >
              {/* Google Map Embed */}
              <div className="h-64 w-full relative">
                <iframe
                  title={hotel.name}
                  src={hotel.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[0.2] contrast-[1.1]"
                />
              </div>

              {/* Hotel Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1a2b4b] mb-3 group-hover:text-[#D4A373] transition-colors">
                  {hotel.name}
                </h3>
                <div className="flex items-start gap-2 text-gray-500">
                  <MapPin className="w-4 h-4 text-[#D4A373] mt-1 shrink-0" />
                  <p className="text-sm leading-relaxed">
                    {hotel.address}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      </div>
    </section>
  );
}