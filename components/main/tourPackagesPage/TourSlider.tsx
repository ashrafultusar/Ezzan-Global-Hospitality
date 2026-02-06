import Image from 'next/image';
import styles from './TourSlider.module.css';
interface TourPackage {
    id: number;
    category: string;
    duration: string;
    image: string;
    title: string;
    description: string;
    rating: number;
    reviews: number;
    tags: string[];
    price: string;
  }
  
  export default function TourSlider({ tours }: { tours: TourPackage[] }) {

  const infiniteTours = [...tours,...tours, ...tours];

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderWrapper}>
        {infiniteTours.map((tour, index) => (
          <div key={`${tour.id}-${index}`} className={styles.slideCard}>
            <div className="relative h-60 w-full">
              <Image src={tour.image} alt={tour.title} fill className="object-cover" />
              <div className="absolute top-4 left-4 bg-[#FFB703] text-[#023047] text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                {tour.category}
              </div>
              <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm text-white text-[11px] px-3 py-1 rounded-full">
                🕒 {tour.duration}
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow bg-white">
              <div className="flex items-center gap-1 mb-2">
                <span className="text-orange-400 text-sm">★</span>
                <span className="font-bold text-sm">{tour.rating}</span>
                <span className="text-gray-400 text-xs">({tour.reviews} reviews)</span>
              </div>
              <h3 className="text-xl font-bold text-[#023047] mb-3">{tour.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{tour.description}</p>
              <div className="mt-auto pt-4 border-t border-gray-50 flex justify-between items-end">
                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase block mb-0.5">Starting from</span>
                  <span className="text-xl font-black text-[#FB8500]">MYR {tour.price}</span>
                </div>
                <button className="bg-[#FFB703] hover:bg-[#FB8500] text-[#023047] font-bold py-2.5 px-6 rounded-lg text-sm transition-colors shadow-sm">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}