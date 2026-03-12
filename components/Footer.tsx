export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#080808] border-t border-white/5">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="font-cormorant text-2xl font-light tracking-[0.15em] text-white">DELISUZ</div>
              <div className="text-[0.55rem] tracking-[0.4em] uppercase" style={{ color: 'var(--gold)', marginTop: '-2px' }}>STUDIO</div>
            </div>
            <p className="font-jost text-white/40 text-xs leading-relaxed mb-6">
              Premium photography and videography studio capturing your most precious moments with artistry, elegance and heart.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { href: 'https://www.instagram.com/delisuzstudio', label: 'Instagram', icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                )},
                { href: '#', label: 'Facebook', icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                )},
                { href: '#', label: 'TikTok', icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.25 8.25 0 004.83 1.56V6.78a4.85 4.85 0 01-1.06-.09z" />
                  </svg>
                )},
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 border border-white/15 flex items-center justify-center text-white/50 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[0.6rem] tracking-[0.25em] uppercase text-[#C9A96E] font-jost mb-5">Services</h4>
            <ul className="space-y-2.5">
              {['Wedding Photography', 'Portrait Sessions', 'Event Coverage', 'Product Photography', 'Video Production', 'Fashion & Editorial'].map((s) => (
                <li key={s}>
                  <a href="#services" className="font-jost text-xs text-white/40 hover:text-white/80 transition-colors duration-200">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[0.6rem] tracking-[0.25em] uppercase text-[#C9A96E] font-jost mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Portfolio', href: '#portfolio' },
                { label: 'Testimonials', href: '#' },
                { label: 'Book a Session', href: '#contact' },
                { label: 'Instagram', href: 'https://www.instagram.com/delisuzstudio' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-jost text-xs text-white/40 hover:text-white/80 transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[0.6rem] tracking-[0.25em] uppercase text-[#C9A96E] font-jost mb-5">Contact</h4>
            <div className="space-y-3">
              <p className="font-jost text-xs text-white/40">
                <span className="block text-white/60 mb-0.5">WhatsApp</span>
                +234 800 000 0000
              </p>
              <p className="font-jost text-xs text-white/40">
                <span className="block text-white/60 mb-0.5">Email</span>
                hello@delisuzstudio.com
              </p>
              <p className="font-jost text-xs text-white/40">
                <span className="block text-white/60 mb-0.5">Instagram</span>
                @delisuzstudio
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-jost text-[0.6rem] text-white/25 tracking-wide">
            © {year} Delisuz Studio. All Rights Reserved.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms & Conditions'].map((link) => (
              <a key={link} href="#" className="font-jost text-[0.6rem] text-white/25 hover:text-white/50 transition-colors tracking-wide">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
