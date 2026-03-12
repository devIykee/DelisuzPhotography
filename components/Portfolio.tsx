'use client';
import { useState } from 'react';
import Image from 'next/image';

const categories = ['All', 'Weddings', 'Portraits', 'Events', 'Fashion', 'Products'];

const portfolio = [
  { id: 1, cat: 'Weddings', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=85', tall: true },
  { id: 2, cat: 'Portraits', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=85', tall: false },
  { id: 3, cat: 'Fashion', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=85', tall: true },
  { id: 4, cat: 'Events', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=85', tall: false },
  { id: 5, cat: 'Portraits', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=85', tall: true },
  { id: 6, cat: 'Weddings', img: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&q=85', tall: false },
  { id: 7, cat: 'Products', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=85', tall: true },
  { id: 8, cat: 'Fashion', img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=85', tall: false },
  { id: 9, cat: 'Events', img: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600&q=85', tall: true },
  { id: 10, cat: 'Weddings', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=85', tall: false },
  { id: 11, cat: 'Portraits', img: 'https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?w=600&q=85', tall: false },
  { id: 12, cat: 'Fashion', img: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=600&q=85', tall: true },
];

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === 'All' ? portfolio : portfolio.filter((p) => p.cat === active);

  return (
    <section id="portfolio" className="py-28 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C9A96E]/60" />
            <span className="section-label">Our Work</span>
            <div className="w-8 h-px bg-[#C9A96E]/60" />
          </div>
          <h2 className="font-cormorant text-5xl md:text-6xl font-light text-white mb-4">
            Photography Portfolio
          </h2>
          <div className="gold-divider mt-4 mb-8" />

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 text-[0.65rem] tracking-[0.2em] uppercase font-jost transition-all duration-300 ${
                  active === cat
                    ? 'bg-[#C9A96E] text-black'
                    : 'border border-white/20 text-white/60 hover:border-[#C9A96E]/60 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-2 space-y-2">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightbox(item.img)}
              className="portfolio-item relative overflow-hidden break-inside-avoid cursor-zoom-in block"
              style={{ marginBottom: '8px' }}
            >
              <div className={`relative w-full ${item.tall ? 'aspect-[2/3]' : 'aspect-square'}`}>
                <Image
                  src={item.img}
                  alt={item.cat}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Hover overlay */}
                <div className="overlay absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-2 z-10">
                  <div className="w-8 h-px bg-[#C9A96E]" />
                  <span className="section-label text-[0.6rem]">{item.cat}</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white mt-1">
                    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M17 17l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M8 11h6M11 8v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/delisuzstudio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-[#C9A96E] text-[0.7rem] tracking-[0.2em] uppercase font-jost hover:gap-5 transition-all duration-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            See More on Instagram
            <svg width="16" height="10" viewBox="0 0 20 12" fill="none">
              <path d="M0 6h18M13 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white"
            onClick={() => setLightbox(null)}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
          <div className="relative max-w-4xl max-h-[85vh] w-full h-full">
            <Image
              src={lightbox}
              alt="Portfolio"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}
