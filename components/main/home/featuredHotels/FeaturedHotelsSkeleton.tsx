const HotelSkeleton = () => (
    <div className="bg-white rounded-xl overflow-hidden shadow-md animate-pulse">
      {/* Image Area */}
      <div className="h-64 w-full bg-gray-200" />
      
      <div className="p-6">
        {/* Location Area */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-4 h-4 bg-gray-200 rounded-full" />
          <div className="h-3 w-24 bg-gray-200 rounded" />
        </div>
        
        {/* Title Area */}
        <div className="h-6 w-3/4 bg-gray-200 rounded mb-3" />
        
        {/* Description Area */}
        <div className="space-y-2 mb-6">
          <div className="h-3 w-full bg-gray-200 rounded" />
          <div className="h-3 w-5/6 bg-gray-200 rounded" />
        </div>
  
        {/* Button Area */}
        <div className="h-4 w-28 bg-gray-200 rounded" />
      </div>
    </div>
  );
  
  const FeaturedHotelsSkeleton = () => {
    return (
      <section className="py-20 px-4 bg-[#f3eee6]">
        <div className="max-w-7xl mx-auto">
          {/* Header Skeleton */}
          <div className="text-center mb-16 space-y-4">
            <div className="h-4 w-32 bg-gray-200 mx-auto rounded-full" />
            <div className="h-10 w-64 bg-gray-200 mx-auto rounded" />
            <div className="h-4 w-48 bg-gray-200 mx-auto rounded" />
          </div>
  
          {/* Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <HotelSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturedHotelsSkeleton;