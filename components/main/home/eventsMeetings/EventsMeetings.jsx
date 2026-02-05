import React from 'react';
import Image from 'next/image';
import { Calendar, Users, Music, Briefcase } from 'lucide-react'; 

const EventsMeetings = () => {
    const eventTypes = [
        { name: "Corporate Conferences", icon: <Briefcase className="w-4 h-4" /> },
        { name: "Wedding Receptions", icon: <Music className="w-4 h-4" /> },
        { name: "Gala Dinners", icon: <Users className="w-4 h-4" /> },
        { name: "Business Meetings", icon: <Calendar className="w-4 h-4" /> }
    ];

    return (
        <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                
                {/* Left Side: Large Image with Shadow */}
                <div className="w-full lg:w-1/2">
                    <div className="relative h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl group">
                        <Image 
                            src="/assets/home/home.jpg" 
                            alt="Grand Ballroom Event"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Overlay effect */}
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                    <h4 className="text-[#D4AF37] uppercase tracking-[0.2em] text-sm font-bold animate-fade-in">
                        Events
                    </h4>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A2B48]">
                        Events & Meetings
                    </h2>
                    <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                        From intimate gatherings to grand celebrations, our hotels provide world-class venues 
                        equipped with state-of-the-art facilities. Our dedicated events team ensures every detail 
                        is perfectly executed, leaving you free to focus on your guests.
                    </p>

                    {/* Features List with Icons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        {eventTypes.map((event, index) => (
                            <div key={index} className="flex items-center gap-3 group">
                                <div className="p-2 bg-[#EAB308]/10 text-[#D4AF37] rounded-md transition-colors group-hover:bg-[#EAB308] group-hover:text-white">
                                    {event.icon}
                                </div>
                                <span className="text-[#1A2B48] font-semibold text-sm">
                                    {event.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Dark Button with Hover Effect */}
                    <div className="pt-6">
                        <button className="bg-[#1A2B48] text-white px-8 py-3.5 rounded-lg font-bold flex items-center gap-3 transition-all duration-300 hover:bg-[#2c3f64] hover:shadow-xl active:scale-95 group">
                            Explore Venues 
                            <span className="transition-transform group-hover:translate-x-2">→</span>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default EventsMeetings;