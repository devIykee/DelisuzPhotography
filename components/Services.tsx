import Image from 'next/image';

const services = [
  {
    title: 'Wedding Photography',
    desc: 'We capture every beautiful moment of your wedding — the emotions, vows, kisses and all the fine details that tell your perfect love story.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
    icon: '💍',
  },
  {
    title: 'Portrait Photography',
    desc: 'Studio and outdoor portrait sessions with professional lighting, creative direction and post-processing that make you look extraordinary.',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80',
    icon: '📸',
  },
  {
    title: 'Pre-Wedding Shoots',
    desc: "Let's capture the excitement of your proposal and engagement in a romantic, creative and memorable manner — at any location you desire.",
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&q=80',
    icon: '💕',
  },
  {
    title: 'Event Photography',
    desc: 'Corporate galas, birthdays, concerts, trade shows — we document your event beautifully so you can relive every moment.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80',
    icon: '🎉',
  },
  {
    title: 'Product Photography',
    desc: 'Clean, creative product shots for e-commerce, social media and marketing collaterals that make your products irresistible.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
    icon: '🛍️',
  },
  {
    title: 'Video Production',
    desc: 'Wedding films, event reels, brand videos and short films — cinematic storytelling that moves people and grows your audience.',
    image: 'https://images.unsplash.com/photo-1587899897387-091b3a7a0c4a?w=600&q=80',
    icon: '🎬',
  },
  {
    title: 'Fashion & Editorial',
    desc: 'Model portfolios, lookbook shoots and editorial spreads designed to open doors and launch careers in the fashion industry.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
    icon: '✨',
  },
  {
    title: 'Headshot Photography',
    desc: 'Professional headshots for LinkedIn, corporate websites and marketing materials that convey confidence and credibility.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80',
    icon: '🤝',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C9A96E]/60" />
            <span className="section-label">What We Do</span>
            <div className="w-8 h-px bg-[#C9A96E]/60" />
          </div>
          <h2 className="font-cormorant text-5xl md:text-6xl font-light text-white mb-4">
            Our Services
          </h2>
          <div className="gold-divider mt-4" />
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-[#1A1A1A]">
          {services.map((service) => (
            <a
              key={service.title}
              href="#contact"
              className="group relative overflow-hidden bg-[#111111] aspect-square block"
            >
              {/* Background image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

              {/* Content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                <div className="text-xl mb-2">{service.icon}</div>
                <h3 className="font-cormorant text-xl font-medium text-white mb-2 leading-tight">
                  {service.title}
                </h3>
                <p className="font-jost text-[0.68rem] text-white/0 group-hover:text-white/60 leading-relaxed transition-all duration-400 max-h-0 group-hover:max-h-20 overflow-hidden">
                  {service.desc}
                </p>
                <div className="mt-3 w-0 group-hover:w-8 h-px bg-[#C9A96E] transition-all duration-500" />
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="font-jost text-white/50 text-sm mb-6">
            Not sure which service you need? Let&apos;s talk about your vision.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-3.5 border border-[#C9A96E] text-[#C9A96E] text-[0.7rem] tracking-[0.2em] uppercase font-jost hover:bg-[#C9A96E] hover:text-black transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
