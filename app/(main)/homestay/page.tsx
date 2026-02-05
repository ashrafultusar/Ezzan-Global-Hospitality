import HomeStay from "@/components/main/homeStay/HomeStay";


export default function page() {
  return (
    <div>
      <section className="bg-[#1a2a4d] pt-28 pb-20 px-4 text-center">
      <div className="max-w-5xl mx-auto">
        {/* Sub-title */}
        <p className="text-[#d48e28] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Our Collection
        </p>

        {/* Main Title */}
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
          Luxury Hotels in Malaysia
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
          Explore our handpicked selection of Malaysia&apos;s finest 5-star hotels, 
          each offering unique experiences and world-class hospitality.
        </p>
      </div>
    </section>
      <HomeStay />
    </div>
  );
}
