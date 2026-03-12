import Image from 'next/image';

const feed = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80',
  'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80',
  'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=400&q=80',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80',
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80',
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80',
  'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=400&q=80',
];

export default function Instagram() {
  return (
    <section className="py-20 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="#C9A96E" stroke="none" />
              </svg>
              <span className="section-label">Follow Along</span>
            </div>
            <h2 className="font-cormorant text-4xl font-light text-white">
              @delisuzstudio
            </h2>
          </div>
          <a
            href="https://www.instagram.com/delisuzstudio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-6 py-2.5 border border-[#C9A96E]/50 text-[#C9A96E] text-[0.65rem] tracking-[0.2em] uppercase font-jost hover:bg-[#C9A96E] hover:text-black transition-all duration-300"
          >
            Follow on Instagram
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-1">
          {feed.map((img, i) => (
            <a
              key={i}
              href="https://www.instagram.com/delisuzstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden block"
            >
              <Image
                src={img}
                alt={`Instagram post ${i + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="12.5vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
