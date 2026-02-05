"use client";

import Image from "next/image";
import { Award, Users, Heart, Globe } from "lucide-react";

// --- Types ---
interface StatCard {
  id: number;
  label: string;
  value: string;
  bgColor: string;
  textColor: string;
}

interface ValueItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

// --- Data ---
const STATS: StatCard[] = [
  { id: 1, label: "Years of Excellence", value: "15+", bgColor: "bg-[#1a2b4b]", textColor: "text-white" },
  { id: 2, label: "Luxury Hotels", value: "5", bgColor: "bg-[#f2b830]", textColor: "text-[#1a2b4b]" },
  { id: 3, label: "Room Types", value: "50+", bgColor: "bg-[#f2b830]", textColor: "text-[#1a2b4b]" },
  { id: 4, label: "Happy Guests", value: "100K+", bgColor: "bg-[#1a2b4b]", textColor: "text-white" },
];

const VALUES: ValueItem[] = [
  { 
    id: 1, 
    title: "Excellence", 
    description: "We strive for excellence in every aspect of hospitality, from service to amenities.", 
    icon: <Award className="w-8 h-8 text-[#f2b830]" /> 
  },
  { 
    id: 2, 
    title: "Guest Focus", 
    description: "Our guests are at the heart of everything we do. Their comfort is our priority.", 
    icon: <Users className="w-8 h-8 text-[#f2b830]" /> 
  },
  { 
    id: 3, 
    title: "Passion", 
    description: "We are passionate about creating memorable experiences for every guest.", 
    icon: <Heart className="w-8 h-8 text-[#f2b830]" /> 
  },
  { 
    id: 4, 
    title: "Sustainability", 
    description: "We are committed to sustainable practices that protect Malaysia's natural beauty.", 
    icon: <Globe className="w-8 h-8 text-[#f2b830]" /> 
  },
];

export default function About() {
  return (
    <div className="w-full">
      {/* --- Hero Section Fix --- */}
      {/* হাইট h-[50vh] থেকে h-[60vh] করা হয়েছে এবং pt-20 দেওয়া হয়েছে যাতে হেডারের নিচে ঢাকা না পড়ে */}
      <div className="relative h-[60vh] w-full flex items-center justify-center pt-20">
        <Image
          src="/assets/about/image1.jpg" 
          alt="Malaysia Luxury Resort"
          fill
          className="object-cover brightness-[0.45]"
          priority
        />
        
        {/* --- Content Over Image --- */}
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-[#f2b830] uppercase tracking-[0.3em] text-[10px] md:text-xs font-black mb-4">
            ABOUT US
          </p>
          <h1 className="text-4xl md:text-6xl font-serif max-w-4xl mx-auto leading-[1.2] mb-6 font-medium">
            Malaysia&apos;s Premier <br className="hidden md:block" /> Hotel Collection
          </h1>
          <p className="text-gray-300 text-sm md:text-base font-light tracking-wide max-w-xl mx-auto">
            For over 15 years, we&apos;ve been curating the finest luxury hotel experiences across Malaysia.
          </p>
        </div>
      </div>

      {/* --- Our Story Section --- */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h2 className="text-4xl font-serif text-[#1a2b4b] font-bold">Our Story</h2>
            <div className="space-y-5 text-[#555] leading-[1.8] text-[15px]">
              <p>
                Malaysia Luxury Hotels began with a vision to showcase the best of Malaysian hospitality to the world. 
                What started as a single boutique hotel in Kuala Lumpur has grown into a prestigious collection of 
                five exceptional properties across Malaysia&apos;s most sought-after destinations.
              </p>
              <p>
                Each of our hotels reflects the unique character of its location while maintaining the highest 
                standards of luxury and service. From the bustling streets of Kuala Lumpur to the pristine 
                beaches of Langkawi, our properties offer guests an authentic Malaysian experience wrapped 
                in world-class hospitality.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-5 h-fit">
            {STATS.map((stat) => (
              <div 
                key={stat.id} 
                className={`${stat.bgColor} ${stat.textColor} p-10 rounded-xl flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl transition-all duration-500`}
              >
                <span className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold opacity-80">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Our Values Section --- */}
      <section className="bg-[#fdfbf7] py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-[#1a2b4b] font-bold mb-4">Our Values</h2>
          <p className="text-gray-500 text-[15px] font-light max-w-2xl mx-auto mb-20">
            These core values guide everything we do and shape the experiences we create.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {VALUES.map((value) => (
              <div key={value.id} className="flex flex-col items-center group text-center">
                <div className="w-16 h-16 rounded-full bg-[#f2b830]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-[#1a2b4b] mb-3">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[250px]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}