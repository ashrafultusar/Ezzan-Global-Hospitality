import React from 'react';
import { 
  Utensils, Spa, waves, Car, 
  Wifi, Clock, Dumbbell, Diamond 
} from 'lucide-react'; // আইকনের জন্য lucide-react ব্যবহার করা হয়েছে

const amenities = [
    {
        title: "Fine Dining",
        description: "Local and international cuisine prepared by world-class chefs.",
        icon: <Utensils className="w-6 h-6" />
    },
    {
        title: "Spa & Wellness",
        description: "Ayurvedic and modern spa treatments and wellness center.",
        icon: <div className="text-2xl">♨️</div> // Custom emoji or SVG for Spa
    },
    {
        title: "Infinity Pool",
        description: "Infinity pool with stunning views and private cabanas.",
        icon: <div className="text-2xl">✨</div>
    },
    {
        title: "Limousine Service",
        description: "Luxury car service including airport pick-up and drop-off.",
        icon: <Car className="w-6 h-6" />
    },
    {
        title: "High-Speed Internet",
        description: "Free high-speed Wi-Fi in all rooms and business center.",
        icon: <Wifi className="w-6 h-6" />
    },
    {
        title: "24/7 Concierge",
        description: "Dedicated concierge team at your service day and night.",
        icon: <Clock className="w-6 h-6" />
    },
    {
        title: "Fitness Center",
        description: "Modern gym, yoga studio and personal trainers.",
        icon: <Dumbbell className="w-6 h-6" />
    },
    {
        title: "Butler Service",
        description: "Personal butler service available for premium suites.",
        icon: <Diamond className="w-6 h-6" />
    }
];

const Amenities = () => {
    return (
        <section className="bg-[#FAF9F6] py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
                {/* Header */}
                <h4 className="text-[#D4AF37] uppercase tracking-widest text-xs font-bold mb-3">
                    Facilities
                </h4>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A2B48] mb-6">
                    Luxury <span className="text-[#D4AF37]">Amenities</span>
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto mb-16 text-sm md:text-base">
                    At each of our hotels, you will find world-class facilities and services. 
                    We are always ready to fulfill your every need.
                </p>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {amenities.map((item, index) => (
                        <div 
                            key={index}
                            className="group bg-white p-8 rounded-xl border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-luxury hover:border-[#D4AF37]/30 text-left"
                        >
                            {/* Icon Box */}
                            <div className="w-12 h-12 bg-[#EAB308] text-[#1A2B48] rounded-lg flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3">
                                {item.icon}
                            </div>

                            {/* Text Content */}
                            <h3 className="text-[#1A2B48] text-lg font-bold mb-3 group-hover:text-[#D4AF37] transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Amenities;