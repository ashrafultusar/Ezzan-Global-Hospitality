import Image from "next/image";
import styles from "./TourSlider.module.css";
import { TourPackage } from "@/data/tour";

export default function TourSlider({ tours }: { tours: TourPackage[] }) {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderWrapper}>
        {tours.map((tour) => (
          <div key={tour.id} className={styles.slideCard}>
            <div className="relative h-60 w-full">
              <Image
                src={tour.image}
                alt={tour.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#FFB703] text-[#023047] text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                {tour.category}
              </div>
              
              {/* Country tag for Outside KL */}
              {(tour as any).country && (
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md text-[#023047] text-[10px] font-bold px-2 py-1 rounded shadow-sm">
                  📍 {(tour as any).country}
                </div>
              )}

              <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm text-white text-[11px] px-3 py-1 rounded-full">
                🕒 {tour.duration}
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow bg-white">
              <div className="flex items-center gap-1 mb-2">
                <span className="text-orange-400 text-sm">★</span>
                <span className="font-bold text-sm">{tour.rating}</span>
                <span className="text-gray-400 text-xs">
                  ({tour.reviews} reviews)
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#023047] mb-3">
                {tour.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                {tour.description}
              </p>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}