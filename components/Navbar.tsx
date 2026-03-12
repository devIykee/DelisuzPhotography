'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  {
    label: 'Services',
    href: '#services',
    children: [
      { label: 'Wedding Photography', href: '#services' },
      { label: 'Portrait Sessions', href: '#services' },
      { label: 'Event Coverage', href: '#services' },
      { label: 'Product Photography', href: '#services' },
    ],
  },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#C9A96E]/20 py-3'
          : 'bg-gradient-to-b from-black/60 to-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-cormorant text-2xl font-light tracking-[0.15em] text-white">
            DELISUZ
          </span>
          <span
            className="text-[0.55rem] tracking-[0.4em] uppercase"
            style={{ color: 'var(--gold)', marginTop: '-2px' }}
          >
            STUDIO
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={link.href}
                className="nav-link text-[0.75rem] tracking-[0.15em] uppercase font-jost text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-1"
              >
                {link.label}
                {link.children && (
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )}
              </a>

              {/* Dropdown */}
              {link.children && activeDropdown === link.label && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-[#1A1A1A] border border-[#C9A96E]/20 shadow-2xl">
                  {link.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block px-5 py-3 text-[0.7rem] tracking-wider uppercase text-white/70 hover:text-[#C9A96E] hover:bg-[#242424] transition-all duration-150 border-b border-white/5 last:border-0"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://www.instagram.com/delisuzstudio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-[#C9A96E] transition-colors"
            aria-label="Instagram"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 text-[0.65rem] tracking-[0.2em] uppercase font-jost border border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-black transition-all duration-300"
          >
            Book Session
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="bg-[#0D0D0D] border-t border-[#C9A96E]/20 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[0.8rem] tracking-[0.2em] uppercase text-white/80 hover:text-[#C9A96E] transition-colors py-2 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-5 py-3 text-center text-[0.65rem] tracking-[0.2em] uppercase border border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-black transition-all duration-300"
          >
            Book Session
          </a>
        </div>
      </div>
    </header>
  );
}
