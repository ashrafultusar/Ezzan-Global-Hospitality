"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import { Menu, X } from "lucide-react";

const NAVIGATION_LINKS = [
  { name: "HOME", href: "/" },
  { name: "HOMESTAY", href: "/homestay" },
  { name: "TOUR PACKAGES", href: "/tourPackages" },
  { name: "SERVICES", href: "/ourServices" },
  { name: "GALLERY", href: "/gallery" },
  { name: "ABOUT", href: "/about" },
  { name: "CONTACT", href: "/contactUs" },
];

export default function Navbar() {
  const pathname = usePathname(); // Get current route
  const [mobileOpen, setMobileOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll Detection Logic
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      const timer = setTimeout(() => setAnimate(true), 10);
      document.body.style.overflow = "hidden";
      return () => clearTimeout(timer);
    } else {
      setAnimate(false);
      document.body.style.overflow = "unset";
    }
  }, [mobileOpen]);

  return (
    <>
      {/* --- Main Navbar Section --- */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm py-0"
            : "bg-transparent border-b border-transparent py-2"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            {/* --- Logo Section --- */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileOpen(true)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  isScrolled
                    ? "hover:bg-slate-100 text-slate-700"
                    : "hover:bg-white/10 text-white"
                }`}
              >
                <Menu size={22} className="cursor-pointer" />
              </button>

              <Link href="/" className="flex items-center gap-2 group">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform">
                  <span className="text-xl">👑</span>
                </div>
                <div className="flex flex-col">
                  <span
                    className={`text-lg font-serif font-bold leading-tight transition-colors duration-300 ${
                      isScrolled ? "text-slate-900" : "text-white"
                    }`}
                  >
                    Ezzan Global
                  </span>
                  <span
                    className={`text-[8px] tracking-[0.2em] font-medium uppercase transition-colors duration-300 ${
                      isScrolled ? "text-slate-500" : "text-[#D4AF37]"
                    }`}
                  >
                    Hotels & Resorts
                  </span>
                </div>
              </Link>
            </div>

            {/* --- Desktop Navigation --- */}
            <div className="hidden lg:flex items-center gap-8">
              {NAVIGATION_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-semibold transition-colors duration-300 relative py-1 ${
                      isActive
                        ? "text-[#D4AF37]"
                        : isScrolled
                        ? "text-slate-700 hover:text-[#D4AF37]"
                        : "text-white hover:text-[#D4AF37]"
                    }`}
                  >
                    {link.name}
                    {/* Active Underline Indicator */}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* --- Booking Button --- */}
            <div className="flex items-center">
              <Link
                href="/booking"
                className="bg-gradient-to-r from-[#E5A524] to-[#D4891A] hover:brightness-110 text-white text-xs font-bold px-5 py-2.5 rounded-md transition-all shadow-md active:scale-95"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* --- Mobile Full Screen Side Bar --- */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-500 ${
          mobileOpen
            ? "bg-gradient-to-br from-black/95 via-black/90 to-black/80 backdrop-blur-sm opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-full z-[110] transition-all duration-500 ${
          mobileOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-8 right-8 z-[120] p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 group"
        >
          <X
            size={28}
            className="text-white group-hover:rotate-90 transition-transform duration-300 cursor-pointer"
          />
        </button>

        <div className="relative h-full w-full flex flex-col justify-center items-center px-4">
          <div className="text-center w-full max-w-md">
            {/* Logo Section */}
            <div
              className={`mb-12 transition-all duration-700 ${
                animate
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
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

            {/* Nav Links */}
            <nav className="space-y-6">
              {NAVIGATION_LINKS.map((link, index) => {
                const isActive = pathname === link.href;
                return (
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
                      className="group block"
                    >
                      <div
                        className={`text-3xl md:text-4xl font-bold transition-all duration-300 ${
                          isActive
                            ? "text-[#D4AF37]"
                            : "text-white hover:text-[#D4AF37]"
                        }`}
                      >
                        {link.name}
                      </div>
                      <div
                        className={`h-0.5 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent transition-all duration-500 mt-2 ${
                          isActive ? "w-32" : "w-0 group-hover:w-32"
                        }`}
                      />
                    </Link>
                  </div>
                );
              })}
            </nav>

            {/* Social Icons & Contact */}
            <div
              className={`mt-12 transition-all duration-700 ${
                animate
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <div className="text-white/70 text-sm space-y-1 mb-6">
                <p>Contact: +888045425560</p>
                <p>Email: info@ezan.com</p>
              </div>
              <div className="flex justify-center gap-6">
                {["Facebook", "Instagram", "Twitter"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-white/70 hover:text-[#D4AF37] transition-colors text-sm font-medium"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
