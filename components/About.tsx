'use client';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#0D0D0D] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=900&q=85"
                alt="Delisuz Studio photographer"
                fill
                className="object-cover"
              />
              {/* Gold frame accent */}
              <div className="absolute inset-0 border border-[#C9A96E]/20 m-4 pointer-events-none z-10" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 bg-[#1A1A1A] border border-[#C9A96E]/30 p-6 w-44">
              <div className="font-cormorant text-4xl font-light text-[#C9A96E]">5+</div>
              <div className="text-[0.65rem] tracking-[0.2em] uppercase text-white/50 mt-1 font-jost">
                Years of Excellence
              </div>
            </div>
            {/* Second stat */}
            <div className="absolute -top-6 -left-6 bg-[#C9A96E] p-6 w-40">
              <div className="font-cormorant text-4xl font-light text-black">500+</div>
              <div className="text-[0.6rem] tracking-[0.15em] uppercase text-black/70 mt-1 font-jost">
                Happy Clients
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="lg:pl-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-divider-left" />
              <span className="section-label">About Us</span>
            </div>

            <h2 className="font-cormorant text-5xl md:text-6xl font-light text-white leading-tight mb-6">
              Where Every Frame<br />
              <span className="italic text-[#C9A96E]">Tells a Story</span>
            </h2>

            <p className="font-jost text-white/60 text-sm leading-relaxed mb-5">
              Delisuz Studio is a boutique photography and videography studio built on the belief that
              every person, every couple, every brand has a story worth telling — and we are here to
              tell it beautifully.
            </p>
            <p className="font-jost text-white/60 text-sm leading-relaxed mb-8">
              From intimate portrait sessions to grand wedding celebrations, we bring artistry,
              technical expertise and a warm personal touch to every project. Our studio is equipped
              with professional lighting, modern equipment and a creative eye shaped by hundreds of
              shoots across Nigeria.
            </p>

            {/* Qualities */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {['Creative Vision', 'Modern Equipment', 'Fast Delivery', 'Affordable Rates'].map((q) => (
                <div key={q} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#C9A96E] rounded-full flex-shrink-0" />
                  <span className="text-[0.72rem] tracking-wide text-white/70 font-jost">{q}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 text-[#C9A96E] text-[0.7rem] tracking-[0.2em] uppercase font-jost hover:gap-5 transition-all duration-300"
            >
              Book Your Session
              <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                <path d="M0 6h18M13 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
