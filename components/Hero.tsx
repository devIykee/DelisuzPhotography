'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1920&q=85',
    tag: 'Wedding Photography',
    headline: 'Love Stories,\nTold Forever.',
    sub: 'We capture every laugh, every tear, every kiss — beautifully and timelessly.',
    cta: { label: 'View Weddings', href: '#portfolio' },
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1920&q=85',
    tag: 'Portrait Photography',
    headline: 'Your Story,\nYour Light.',
    sub: 'Studio, outdoor or location — we find your best angle every single time.',
    cta: { label: 'View Portraits', href: '#portfolio' },
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=85',
    tag: 'Event Coverage',
    headline: 'Moments\nMade Eternal.',
    sub: 'Corporate events, parties, concerts — we document every detail beautifully.',
    cta: { label: 'View Events', href: '#portfolio' },
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1920&q=85',
    tag: 'Fashion & Editorial',
    headline: 'Bold Vision,\nPure Art.',
    sub: 'Fashion shoots and model portfolios crafted to stand out in every room.',
    cta: { label: 'View Editorial', href: '#portfolio' },
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 6000);
    return () => clearInterval(timer);
  }, [active]);

  const next = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive((prev) => (prev + 1) % slides.length);
      setAnimating(false);
    }, 600);
  };

  const goTo = (i: number) => {
    if (i === active || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(i);
      setAnimating(false);
    }, 600);
  };

  const slide = slides[active];

  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden grain-overlay">
      {/* Background images */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-all duration-1000 ${
            i === active ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
        >
          <Image
            src={s.image}
            alt={s.tag}
            fill
            priority={i === 0}
            className="object-cover"
            style={{ animation: i === active ? 'kenburns 8s ease-in-out infinite alternate' : 'none' }}
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            {/* Tag */}
            <div
              key={`tag-${active}`}
              className="flex items-center gap-3 mb-6 animate-fade-up"
              style={{ opacity: 0, animationFillMode: 'forwards' }}
            >
              <div className="w-8 h-px bg-[#C9A96E]" />
              <span className="section-label">{slide.tag}</span>
            </div>

            {/* Headline */}
            <h1
              key={`h1-${active}`}
              className="font-cormorant text-6xl md:text-8xl font-light text-white leading-[0.95] mb-6 animate-fade-up stagger-2 whitespace-pre-line"
              style={{ opacity: 0, animationFillMode: 'forwards' }}
            >
              {slide.headline}
            </h1>

            {/* Sub */}
            <p
              key={`sub-${active}`}
              className="font-jost text-white/70 text-sm md:text-base leading-relaxed mb-10 max-w-md animate-fade-up stagger-3"
              style={{ opacity: 0, animationFillMode: 'forwards' }}
            >
              {slide.sub}
            </p>

            {/* CTAs */}
            <div
              key={`cta-${active}`}
              className="flex flex-wrap gap-4 animate-fade-up stagger-4"
              style={{ opacity: 0, animationFillMode: 'forwards' }}
            >
              <a
                href={slide.cta.href}
                className="px-8 py-3.5 bg-[#C9A96E] text-black text-[0.7rem] tracking-[0.25em] uppercase font-jost font-medium hover:bg-[#E8D5A3] transition-colors duration-300"
              >
                {slide.cta.label}
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 border border-white/40 text-white text-[0.7rem] tracking-[0.25em] uppercase font-jost hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-300"
              >
                Book a Session
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-6 right-6 z-20 max-w-7xl mx-auto flex items-center justify-between">
        {/* Dots */}
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`transition-all duration-500 ${
                i === active
                  ? 'w-8 h-1 bg-[#C9A96E]'
                  : 'w-4 h-1 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="flex items-center gap-2 text-white/50 text-[0.65rem] tracking-widest font-jost">
          <span className="text-[#C9A96E] text-lg font-cormorant font-light">
            0{active + 1}
          </span>
          <span>/</span>
          <span>0{slides.length}</span>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[0.55rem] tracking-[0.3em] text-white/40 uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#C9A96E]/60 to-transparent" />
      </div>
    </section>
  );
}
