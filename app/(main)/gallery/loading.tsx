export default function Loading() {
    return (
        <div className="bg-[#fdfbf7] min-h-screen pb-20">
            {/* Header Skeleton */}
            <div className="bg-[#1a2a4d] pt-28 pb-20 px-4 text-center">
                <div className="h-4 w-24 bg-white/10 mx-auto rounded animate-pulse mb-3" />
                <div className="h-12 w-64 bg-white/10 mx-auto rounded animate-pulse mb-6" />
            </div>

            {/* Filters Skeleton */}
            <div className="flex flex-wrap justify-center gap-3 py-12 px-4">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-10 w-24 bg-gray-200 rounded-full animate-pulse" />
                ))}
            </div>

            {/* Grid Skeleton */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                            key={i}
                            className="aspect-[4/3] rounded-2xl bg-gray-200 animate-pulse"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
