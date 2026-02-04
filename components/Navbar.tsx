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
  const pathname = usePathname();

  useEffect(() => {
    if (mobileOpen) {
      const timer = setTimeout(() => setAnimate(true), 10);
      return () => clearTimeout(timer);
    } else {
      setAnimate(false);
    }
  }, [mobileOpen]);

  useEffect(() => {
    setActiveNav(pathname);
  }, [pathname]);

  return (
    <>
      <nav className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-24 flex items-center justify-between">
            {/* --- Logo Section --- */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 hover:bg-slate-100 rounded-lg"
              >
                <Menu size={24} className="text-slate-700" />
              </button>
              
              <Link href="/" className="flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-inner">
                  <span className="text-2xl">👑</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-serif font-bold text-slate-900 leading-tight">
                    Ezzan Global
                  </span>
                  <span className="text-[10px] tracking-[0.2em] text-slate-500 font-medium uppercase">
                    Hotels & Resorts
                  </span>
                </div>
              </Link>
            </div>

            {/* --- Desktop Navigation with Animation --- */}
            <div className="hidden lg:flex items-center gap-1">
              {NAVIGATION_LINKS.map((link) => (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className={`px-6 py-2 font-medium transition-all duration-300 relative ${
                      activeNav === link.href
                        ? "text-[#D4AF37] font-bold"
                        : "text-slate-700 hover:text-[#D4AF37]"
                    }`}
                  >
                    <span className="relative z-10">{link.name}</span>
                    
                    {/* Animated underline */}
                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#D4AF37] transition-all duration-300 ${
                      activeNav === link.href
                        ? "w-16 opacity-100"
                        : "w-0 opacity-0 group-hover:w-16 group-hover:opacity-100"
                    }`} />
                    
                    {/* Hover background animation */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/5 to-[#D4AF37]/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                  </Link>
                </div>
              ))}
            </div>

            {/* --- Booking Button --- */}
            <div className="flex items-center">
              <Link
                href="/booking"
                className="bg-gradient-to-r from-[#E5A524] to-[#D4891A] hover:from-[#D4891A] hover:to-[#B37314] text-slate-900 font-bold px-6 py-3 rounded-md transition-all shadow-md active:scale-95 hover:shadow-lg hover:scale-105 duration-300"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* --- Mobile Full Screen Menu --- */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-500 ${
          mobileOpen 
            ? "bg-gradient-to-br from-black/90 via-black/80 to-black/70 backdrop-blur-sm" 
            : "bg-transparent backdrop-blur-none pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Full Screen Menu - Centered Content */}
      <div
        className={`fixed top-0 right-0 h-full w-full z-[110] transition-all duration-500 ${
          mobileOpen 
            ? "translate-x-0 opacity-100" 
            : "translate-x-full opacity-0"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-8 right-8 z-[120] p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 group"
        >
          <X 
            size={28} 
            className="text-white group-hover:rotate-90 transition-transform duration-300" 
          />
        </button>

        {/* Animated Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-l from-[#D4AF37]/5 to-transparent transition-all duration-700 ${
            animate ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`} />
          
          <div className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#D4AF37/10,transparent_50%)] transition-all duration-1000 ${
            animate ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`} />
        </div>

        {/* Centered Menu Content */}
        <div className="relative h-full w-full flex flex-col justify-center items-center px-4">
          <div className="text-center w-full max-w-md">
            {/* Logo in Menu - Centered */}
            <div className={`mb-12 transition-all duration-700 ${
              animate ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}>
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-lg">
                  <span className="text-3xl">👑</span>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-serif font-bold text-white">
                    Ezzan Global
                  </div>
                  <div className="text-sm tracking-widest text-white/80 uppercase mt-2">
                    Hotels & Resorts
                  </div>
                </div>
              </div>
            </div>

            {/* Centered Navigation Links with Active State */}
            <nav className="space-y-4">
              {NAVIGATION_LINKS.map((link, index) => (
                <div
                  key={link.name}
                  className={`transition-all duration-500 ${
                    animate 
                      ? "translate-y-0 opacity-100" 
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`group block relative ${
                      activeNav === link.href ? "text-[#D4AF37]" : "text-white"
                    }`}
                  >
                    <div className={`text-3xl md:text-4xl font-bold transition-all duration-300 relative inline-block py-2 ${
                      activeNav === link.href 
                        ? "scale-105" 
                        : "hover:scale-105 hover:text-[#D4AF37]"
                    }`}>
                      {link.name}
                      {/* Active indicator dot for mobile */}
                      {activeNav === link.href && (
                        <span className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#D4AF37] rounded-full animate-pulse" />
                      )}
                    </div>
                    <div className={`h-0.5 w-0 mx-auto transition-all duration-500 mt-1 ${
                      activeNav === link.href
                        ? "w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-100"
                        : "group-hover:w-24 group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-[#D4AF37] group-hover:to-transparent group-hover:opacity-100 bg-transparent"
                    }`} />
                  </Link>
                </div>
              ))}
            </nav>

            {/* Centered Mobile Booking Button */}
            <div className={`mt-12 transition-all duration-700 ${
              animate ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`} style={{ transitionDelay: "800ms" }}>
              <Link
                href="/booking"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#E5A524] to-[#D4891A] hover:from-[#D4891A] hover:to-[#B37314] text-slate-900 font-bold px-8 py-4 rounded-lg transition-all shadow-xl active:scale-95 group w-full max-w-xs mx-auto hover:scale-105 duration-300"
              >
                <span className="text-lg">Book Now</span>
                <span className="text-xl transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>

            {/* Centered Contact Info */}
            <div className={`mt-10 text-white/70 text-sm transition-all duration-700 ${
              animate ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`} style={{ transitionDelay: "900ms" }}>
              <div className="space-y-2">
                <p className="font-medium">Contact: +888045425560</p>
                <p className="font-medium">Email: info@ezan.com</p>
              </div>
            </div>

            {/* Social Icons - Centered */}
            <div className={`mt-8 flex justify-center gap-6 transition-all duration-700 ${
              animate ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`} style={{ transitionDelay: "1000ms" }}>
              <a href="#" className="text-white/70 hover:text-[#D4AF37] transition-colors duration-300 transform hover:scale-110">
                <span className="text-lg">Facebook</span>
              </a>
              <a href="#" className="text-white/70 hover:text-[#D4AF37] transition-colors duration-300 transform hover:scale-110">
                <span className="text-lg">Instagram</span>
              </a>
              <a href="#" className="text-white/70 hover:text-[#D4AF37] transition-colors duration-300 transform hover:scale-110">
                <span className="text-lg">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}