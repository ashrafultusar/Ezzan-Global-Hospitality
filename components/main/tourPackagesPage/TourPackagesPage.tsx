import Image from "next/image";
import { Star, Users, Calendar, Compass } from "lucide-react";
import TourSlider from "./TourSlider";
import { toursInsideKL, toursInternational, toursOutsideKL } from "@/data/tour";


export default function TourPackagesPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-[#023047]">
      {/* 1. Hero Section */}
      <section className="relative h-[450px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/home/home.jpg"
            alt="Resort"
            fill
            className="object-cover brightness-[0.4]"
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <p className="text-[#FFB703] uppercase tracking-[0.3em] text-sm font-bold mb-4">
            Discover Malaysia
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Exclusive Tour Packages
          </h1>
          <p className="text-gray-200 text-lg md:text-xl font-light leading-relaxed">
            Curated travel experiences showcasing the best of Malaysia&apos;s
            natural beauty, rich culture, and world-class hospitality.
          </p>
        </div>
      </section>

      {/* 2. Simple Icon Bar (Yellow) */}
      <div className="bg-[#FFB703] py-4">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-6 md:gap-12">
          <IconLabel icon="⭐" text="5-Star Service" />
          <IconLabel icon="👥" text="Expert Guides" />
          <IconLabel icon="📅" text="Flexible Booking" />
          <IconLabel icon="📍" text="Handpicked Destinations" />
        </div>
      </div>

      {/* 3. Tour Grid Section */}

      <div className="bg-white container mx-auto py-12">
        <div className="px-6 mb-8">
          <h2 className="text-3xl font-serif font-bold">Inside Kuala Lumpur</h2>
          <div className="h-1 w-20 bg-[#FFB703] mt-2"></div>
        </div>
        <TourSlider tours={toursInsideKL} />

        <div className="px-6 mb-8 mt-20">
          <h2 className="text-3xl font-serif font-bold">
            Excursions Outside KL
          </h2>
          <div className="h-1 w-20 bg-[#FFB703] mt-2"></div>
        </div>
        <TourSlider tours={toursOutsideKL} />
        <div className="px-6 mb-8 mt-20">
          <h2 className="text-3xl font-serif font-bold">
          World Explorations & Sacred Journeys          </h2>
          <div className="h-1 w-20 bg-[#FFB703] mt-2"></div>
        </div>
        <TourSlider tours={toursInternational} />
      </div>

      {/* 4. "Why Choose Us" Section */}
      <section className="bg-[#F9F7F2] py-24">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[#D4A373] uppercase tracking-widest text-[13px] font-bold mb-3">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#023047] mb-20">
            Your Journey, Our Expertise
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
            <FeatureCard
              icon={
                <Star size={32} strokeWidth={1.5} className="text-[#D4A373]" />
              }
              title="Premium Quality"
              desc="Only the finest hotels, restaurants, and experiences curated for discerning travelers."
            />
            <FeatureCard
              icon={
                <Users size={32} strokeWidth={1.5} className="text-[#D4A373]" />
              }
              title="Local Experts"
              desc="Knowledgeable guides who bring destinations to life with insider stories and access."
            />
            <FeatureCard
              icon={
                <Calendar
                  size={32}
                  strokeWidth={1.5}
                  className="text-[#D4A373]"
                />
              }
              title="Flexible Plans"
              desc="Customize your itinerary or reschedule with our hassle-free booking policies."
            />
            <FeatureCard
              icon={
                <Compass
                  size={32}
                  strokeWidth={1.5}
                  className="text-[#D4A373]"
                />
              }
              title="24/7 Support"
              desc="Round-the-clock assistance ensuring peace of mind throughout your journey."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// --- Internal Small Components ---
function IconLabel({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-2 text-[#023047] text-xs font-bold uppercase tracking-tight">
      <span className="text-lg">{icon}</span>
      {text}
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 bg-[#F2E8CF] rounded-[24px] flex items-center justify-center mb-8 transition-transform hover:scale-105 duration-300">
        {icon}
      </div>

      {/* Title */}
      <h4 className="text-[22px] font-bold text-[#023047] mb-4">{title}</h4>

      {/* Description */}
      <p className="text-gray-500 text-[15px] leading-[1.6] max-w-[280px]">
        {desc}
      </p>
    </div>
  );
}
