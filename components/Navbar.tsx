"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAVIGATION_LINKS = [
  { name: "HOME", href: "/" },
  { name: "HOTELS", href: "/hotels" },
  { name: "SERVICES", href: "/services" },
  { name: "GALLERY", href: "/gallery" },
  { name: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [activeNav, setActiveNav] = useState("/");
  const [isScrolled, setIsScrolled] = useState(false); // স্ক্রল স্টেট ট্র্যাকিং
  const pathname = usePathname();

  // স্ক্রল হ্যান্ডলার: পেজ স্ক্রল করলে ব্যাকগ্রাউন্ড চেঞ্জ হবে
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      const timer = setTimeout(() => setAnimate(true), 10);
      document.body.style.overflow = "hidden"; // মেনু ওপেন থাকলে স্ক্রল বন্ধ
      return () => clearTimeout(timer);
    } else {
      setAnimate(false);
      document.body.style.overflow = "unset";
    }
  }, [mobileOpen]);

  useEffect(() => {
    setActiveNav(pathname);
  }, [pathname]);

  return (
    <>
      {/* Nav classes: 
        - isScrolled ? bg-white : bg-transparent 
      */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md border-slate-100 shadow-sm py-2" 
            : "bg-transparent border-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between">
            
            {/* --- Logo Section --- */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileOpen(true)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  isScrolled ? "hover:bg-slate-100 text-slate-700" : "hover:bg-white/10 text-white"
                }`}
              >
                <Menu size={24} />
              </button>
              
              <Link href="/" className="flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform">
                  <span className="text-2xl">👑</span>
                </div>
                <div className="flex flex-col">
                  <span className={`text-xl font-serif font-bold leading-tight transition-colors duration-300 ${
                    isScrolled ? "text-slate-900" : "text-white"
                  }`}>
                    Ezzan Global
                  </span>
                  <span className={`text-[10px] tracking-[0.2em] font-medium uppercase transition-colors duration-300 ${
                    isScrolled ? "text-slate-500" : "text-[#D4AF37]"
                  }`}>
                    Hotels & Resorts
                  </span>
                </div>
              </Link>
            </div>

            {/* --- Desktop Navigation --- */}
            <div className="hidden lg:flex items-center gap-1">
              {NAVIGATION_LINKS.map((link) => (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className={`px-6 py-2 font-medium transition-all duration-300 relative ${
                      isScrolled 
                        ? (activeNav === link.href ? "text-[#D4AF37]" : "text-slate-700") 
                        : (activeNav === link.href ? "text-[#D4AF37]" : "text-white/90 hover:text-white")
                    }`}
                  >
                    <span className="relative z-10">{link.name}</span>
                    
                    {/* Animated underline */}
                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#D4AF37] transition-all duration-300 ${
                      activeNav === link.href ? "w-12 opacity-100" : "w-0 opacity-0 group-hover:w-12 group-hover:opacity-100"
                    }`} />
                  </Link>
                </div>
              ))}
            </div>

            {/* --- Booking Button --- */}
            <div className="flex items-center">
              <Link
                href="/booking"
                className="bg-gradient-to-r from-[#E5A524] to-[#D4891A] hover:scale-105 text-slate-900 font-bold px-7 py-3 rounded-md transition-all shadow-md active:scale-95 duration-300"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* --- Mobile Full Screen Menu (Same as before) --- */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-500 ${
          mobileOpen 
            ? "bg-slate-900/95 backdrop-blur-xl opacity-100" 
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      >
        {/* Close Button */}
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-8 right-8 z-[120] p-3 text-white hover:rotate-90 transition-transform duration-300"
        >
          <X size={32} />
        </button>

        {/* Menu Content */}
        <div className="h-full flex flex-col justify-center items-center text-center">
           <nav className="space-y-8">
              {NAVIGATION_LINKS.map((link, index) => (
                <div
                  key={link.name}
                  className={`transition-all duration-500 transform ${
                    animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-4xl font-serif font-bold text-white hover:text-[#D4AF37] transition-colors"
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
           </nav>
        </div>
      </div>
    </>
  );
}