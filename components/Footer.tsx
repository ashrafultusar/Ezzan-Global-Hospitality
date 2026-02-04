"use client";

import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const services = [
    { name: "Luxury Suites", href: "/rooms" },
    { name: "Spa & Wellness", href: "/spa" },
    { name: "Fine Dining", href: "/dining" },
    { name: "Event Venues", href: "/events" },
    { name: "Concierge Service", href: "/concierge" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Hotels", href: "/hotels" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
    { name: "Book Now", href: "/booking" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "#",
      label: "Facebook",
      brandClass: "bg-[#1877F2] hover:bg-[#1877F2]/90 text-white",
    },
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
      brandClass: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:opacity-90 text-white",
    },
    {
      icon: Twitter,
      href: "#",
      label: "Twitter",
      brandClass: "bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 text-white",
    },
    {
      icon: Youtube,
      href: "#",
      label: "YouTube",
      brandClass: "bg-[#FF0000] hover:bg-[#FF0000]/90 text-white",
    },
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+888045425560",
      href: "tel:+888045425560",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@ezzan.com",
      href: "mailto:info@ezzan.com",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Luxury Street, Resort City 5400",
      href: "#",
    },
  ];

  return (
    <footer className="bg-[#2a2622] text-white/80">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B37314] flex items-center justify-center shadow-lg">
                <span className="text-3xl">👑</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold text-white">
                  Ezzan Global
                </span>
                <span className="text-xs tracking-[0.2em] text-[#D4AF37] font-medium uppercase">
                  Hotels & Resorts
                </span>
              </div>
            </div>

            <p className="text-white/60 leading-relaxed text-sm">
              Experience unparalleled luxury and world-class hospitality at Ezzan Global. 
              Where every stay becomes a cherished memory and every moment is crafted to perfection.
            </p>
            
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${social.brandClass} hover:scale-110 active:scale-95 shadow-lg`}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b border-[#D4AF37]/20">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 group text-white/60 hover:text-[#D4AF37] transition-all duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40 group-hover:bg-[#D4AF37] transition-colors" />
                    <span className="text-sm group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b border-[#D4AF37]/20">
              Our Services
            </h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="flex items-center gap-3 group text-white/60 hover:text-[#D4AF37] transition-all duration-300"
                  >
                    <span className="text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition-colors">
                      •
                    </span>
                    <span className="text-sm group-hover:translate-x-1 transition-transform">
                      {service.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b border-[#D4AF37]/20">
              Contact Us
            </h3>
            <div className="space-y-5">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors">
                    <info.icon size={18} className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/90 group-hover:text-[#D4AF37] transition-colors">
                      {info.label}
                    </p>
                    <p className="text-sm text-white/60 group-hover:text-white/90 transition-colors mt-1">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

          
          </div>
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;