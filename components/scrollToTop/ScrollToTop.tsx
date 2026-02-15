"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react"; 

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-[#D4AF37] hover:bg-[#B37314] text-white p-3 rounded-full cursor-pointer shadow-2xl transition-all duration-300 active:scale-90 flex items-center justify-center border border-white/20"
          aria-label="Scroll to top"
        >
          {/* Real Gold Color Icon */}
          <ChevronUp size={28} strokeWidth={3} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;