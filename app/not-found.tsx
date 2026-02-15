import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] flex flex-col items-center justify-center px-6 py-12 text-center overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating hotel icons */}
        <div className="absolute top-1/4 left-10 animate-float text-4xl opacity-10">🏨</div>
        <div className="absolute top-1/3 right-20 animate-float text-5xl opacity-10" style={{ animationDelay: '1s' }}>🛎️</div>
        <div className="absolute bottom-1/4 left-20 animate-float text-3xl opacity-10" style={{ animationDelay: '2s' }}>👑</div>
        <div className="absolute bottom-1/3 right-10 animate-float text-6xl opacity-10" style={{ animationDelay: '3s' }}>⭐</div>

        {/* Glowing particles */}
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37]/3 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Hotel-themed 404 Display */}
      <div className="relative mb-12">
        {/* Gold decorative border */}
        <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent rounded-3xl blur-xl" />

        {/* Main 404 number with luxury style */}
        <div className="relative">
          <h1 className="text-[180px] md:text-[220px] font-serif font-bold text-white/10 select-none tracking-tighter">
            404
          </h1>

          {/* Animated overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="text-8xl md:text-9xl font-serif font-bold bg-gradient-to-b from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] bg-clip-text text-transparent animate-glow">
                404
              </div>

              {/* Floating hotel icons around 404 */}
              <div className="absolute -top-6 -left-6 animate-bounce-slow text-4xl">👑</div>
              <div className="absolute -top-6 -right-6 animate-bounce-slow text-4xl" style={{ animationDelay: '0.5s' }}>⭐</div>
              <div className="absolute -bottom-6 -left-6 animate-bounce-slow text-4xl" style={{ animationDelay: '1s' }}>🏨</div>
              <div className="absolute -bottom-6 -right-6 animate-bounce-slow text-4xl" style={{ animationDelay: '1.5s' }}>🛎️</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 animate-fade-up">
          Suite Not Found
        </h2>

        <div className="relative mb-8">
          <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            We apologize, but the luxury suite you&apos;re looking for appears to be
            <span className="text-[#D4AF37] font-semibold"> fully booked</span> or has been
            <span className="text-[#D4AF37] font-semibold"> relocated</span>.
          </p>

          {/* Animated separator */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="text-[#D4AF37] text-lg">✨</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>

          <p className="text-lg text-white/60 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            Our concierge suggests these alternative destinations for your stay
          </p>
        </div>

        {/* Animated hotel amenities icons */}
        <div className="flex justify-center gap-8 mb-10 animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl mb-2 group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/30 group-hover:scale-110 transition-all duration-300">
              🏊
            </div>
            <span className="text-sm text-white/60 group-hover:text-white transition-colors">Pool</span>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl mb-2 group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/30 group-hover:scale-110 transition-all duration-300">
              🍽️
            </div>
            <span className="text-sm text-white/60 group-hover:text-white transition-colors">Dining</span>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl mb-2 group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/30 group-hover:scale-110 transition-all duration-300">
              🧖
            </div>
            <span className="text-sm text-white/60 group-hover:text-white transition-colors">Spa</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '1s' }}>
          <Link
            href="/"
            className="group relative overflow-hidden bg-gradient-to-r from-[#D4AF37] to-[#B37314] text-slate-900 font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <span className="text-2xl">🏨</span>
              <span className="text-lg">Return to Lobby</span>
              <svg
                className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </Link>

          <Link
            href="/homestay"
            className="group relative overflow-hidden bg-transparent border-2 border-[#D4AF37]/30 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:border-[#D4AF37] hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <span className="text-2xl">📅</span>
              <span className="text-lg">Book a Suite</span>
              <svg
                className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-[#D4AF37]/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </Link>
        </div>


      </div>
    </div>
  );
}