'use client';
import { useState } from 'react';

const stats = ['500+ Happy Clients', '5+ Years Experience', '1,200+ Photo Sessions', '200+ Weddings Shot', 'Fast Turnaround', 'Studio & Location Shoots'];

const testimonials = [
  {
    name: 'Adaeze Okafor',
    role: 'Bride',
    text: "Delisuz Studio made our wedding day absolutely magical. Every photo is a masterpiece — we still can't stop looking at them months later. Highly, highly recommend!",
    stars: 5,
  },
  {
    name: 'Tunde Balogun',
    role: 'Corporate Client',
    text: "Professional, creative and so easy to work with. Our brand shoot came out better than we imagined. The team has a real eye for quality and storytelling.",
    stars: 5,
  },
  {
    name: 'Chidinma Eze',
    role: 'Portrait Session',
    text: "I was nervous about my photoshoot but they made me feel so comfortable and confident. The final images are stunning — exactly what I needed for my portfolio!",
    stars: 5,
  },
  {
    name: 'Emeka Nwosu',
    role: 'Event Organiser',
    text: "They covered our product launch event and the photos and video reel were exceptional. Delivered ahead of schedule too. We'll definitely be working with them again.",
    stars: 5,
  },
  {
    name: 'Blessing Afolabi',
    role: 'Model',
    text: "My model portfolio came out absolutely fire! The photographer understood my vision perfectly. I've gotten so many bookings since sharing those images.",
    stars: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <>
      {/* Marquee */}
      <div className="bg-[#C9A96E] py-4 overflow-hidden">
        <div className="marquee-inner">
          {[...stats, ...stats].map((s, i) => (
            <span key={i} className="flex items-center gap-6 px-6 text-black font-jost text-[0.7rem] tracking-[0.25em] uppercase whitespace-nowrap">
              {s}
              <span className="w-1.5 h-1.5 bg-black/30 rounded-full" />
            </span>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <section className="py-28 bg-[#111111] relative overflow-hidden">
        {/* Background quote mark */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 font-cormorant text-[20rem] text-white/[0.02] leading-none select-none pointer-events-none">
          "
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#C9A96E]/60" />
              <span className="section-label">Kind Words</span>
              <div className="w-8 h-px bg-[#C9A96E]/60" />
            </div>
            <h2 className="font-cormorant text-5xl font-light text-white">
              Client Testimonials
            </h2>
          </div>

          {/* Active testimonial */}
          <div className="text-center mb-12">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-8">
              {Array.from({ length: testimonials[active].stars }).map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#C9A96E">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            <blockquote className="font-cormorant text-2xl md:text-3xl font-light text-white/90 leading-relaxed mb-8 italic">
              &ldquo;{testimonials[active].text}&rdquo;
            </blockquote>

            <div className="w-8 h-px bg-[#C9A96E] mx-auto mb-4" />
            <div className="font-jost text-[#C9A96E] text-sm tracking-wider">
              {testimonials[active].name}
            </div>
            <div className="font-jost text-white/40 text-[0.65rem] tracking-[0.2em] uppercase mt-1">
              {testimonials[active].role}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === active
                    ? 'w-6 h-1.5 bg-[#C9A96E]'
                    : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/50'
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
