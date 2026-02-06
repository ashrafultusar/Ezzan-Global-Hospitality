import Link from "next/link";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  const images = [
    "/assets/home/home.jpg",
    "/assets/home/home1.jpg",
    "/assets/home/home2.jpg",
  ];

  return (
    <section className={styles.heroSection}>
      {/* --- CSS Background Slider --- */}
      <div className="absolute inset-0 z-0">
        {images.map((src, index) => (
          <div
            key={index}
            className={styles.slide}
            style={{
              backgroundImage: `url(${src})`,
              animationDelay: `${index * 5}s`,
            }}
          />
        ))}
        <div className={styles.overlay} />
      </div>

      {/* --- Main Content --- */}
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-[#D4AF37]/30 rounded-full bg-black/20 backdrop-blur-md mb-6 animate-in fade-in duration-1000">
            <span className="text-[#D4AF37] text-xs sm:text-sm font-medium tracking-[0.3em] uppercase">
              ★ THE NO.1 LUXURY HOTEL GROUP IN Malaysia ★
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-4 leading-tight">
            Redefining <span className="text-[#D4AF37]">Luxury</span>
          </h1>

          <h2 className="text-lg md:text-2xl font-serif text-white/90 mb-6 tracking-[0.1em] uppercase">
            Crown Luxury Hotels & Resorts
          </h2>

          <p className="text-sm md:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed px-2">
            Experience world-class 5-star services and royal hospitality at our
            exclusive locations. Every moment crafted for your perfection.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full sm:w-auto">
            <Link
              href="/homestay"
              className="bg-[#D4AF37] hover:bg-[#B37314] text-slate-900 font-bold px-8 py-3.5 rounded-md transition-all w-[80%] sm:w-auto text-base shadow-lg active:scale-95"
            >
              Explore Our Hotels
            </Link>
            <Link
              href="/homestay"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold px-8 py-3.5 rounded-md transition-all w-[80%] sm:w-auto text-base active:scale-95"
            >
              Book Now
            </Link>
          </div>

          {/* Stats Section */}
<div className="hidden sm:grid grid-cols-3 gap-0 py-8 border-t border-white/20 w-full mt-10">
  
  {/* Rooms */}
  <div className="flex flex-col items-center justify-center border-r border-white/10 px-4 text-center">
    <div className="text-2xl md:text-4xl font-bold text-[#D4AF37] mb-1">
      <span className={styles.countRooms}></span>+
    </div>
    <div className="text-[10px] md:text-xs text-white/70 font-bold uppercase tracking-[0.2em]">Rooms</div>
  </div>

  {/* Service */}
  <div className="flex flex-col items-center justify-center border-r border-white/10 px-4 text-center">
    <div className="text-2xl md:text-4xl font-bold text-[#D4AF37] mb-1">24/7</div>
    <div className="text-[10px] md:text-xs text-white/70 font-bold uppercase tracking-[0.2em]">Service</div>
  </div>

  {/* Price */}
  <div className="flex flex-col items-center justify-center px-4 text-center">
    <div className="text-2xl md:text-4xl font-bold text-[#D4AF37] mb-1">
      $<span className={styles.countPrice}></span>+
    </div>
    <div className="text-[10px] md:text-xs text-white/70 font-bold uppercase tracking-[0.2em]">Price</div>
  </div>

</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
