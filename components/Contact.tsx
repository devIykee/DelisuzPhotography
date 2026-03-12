'use client';
import { useState } from 'react';

const services = [
  'Wedding Photography',
  'Pre-Wedding Shoot',
  'Portrait Session',
  'Events Photography',
  'Product Photography',
  'Fashion / Editorial',
  'Video Production',
  'Corporate Headshots',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputCls = "w-full bg-transparent border-b border-white/20 focus:border-[#C9A96E] outline-none py-3 text-white font-jost text-sm placeholder-white/30 transition-colors duration-300";
  const labelCls = "block text-[0.6rem] tracking-[0.25em] uppercase text-[#C9A96E] font-jost mb-2";

  return (
    <section id="contact" className="py-28 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-divider-left" />
              <span className="section-label">Get In Touch</span>
            </div>

            <h2 className="font-cormorant text-5xl font-light text-white leading-tight mb-6">
              Let&apos;s Create<br />
              <span className="italic text-[#C9A96E]">Something Beautiful</span>
            </h2>

            <p className="font-jost text-white/50 text-sm leading-relaxed mb-10">
              Ready to book a session or have a project in mind? Fill out the form and we&apos;ll be in
              touch within 24 hours to discuss how we can bring your vision to life.
            </p>

            {/* Contact info */}
            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.4 9.32 19.79 19.79 0 01.31 4.47 2 2 0 012.3 2.27h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.18 6.18l1.2-1.23a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  ),
                  label: 'WhatsApp / Phone',
                  value: '+234 800 000 0000',
                  href: 'https://wa.me/2348000000000',
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                  label: 'Email',
                  value: 'hello@delisuzstudio.com',
                  href: 'mailto:hello@delisuzstudio.com',
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                    </svg>
                  ),
                  label: 'Instagram',
                  value: '@delisuzstudio',
                  href: 'https://www.instagram.com/delisuzstudio',
                },
              ].map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 border border-[#C9A96E]/30 flex items-center justify-center text-[#C9A96E] group-hover:bg-[#C9A96E] group-hover:text-black transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[0.6rem] tracking-[0.2em] uppercase text-white/40 font-jost">{item.label}</div>
                    <div className="font-jost text-sm text-white/80 group-hover:text-[#C9A96E] transition-colors">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 border border-[#C9A96E]/20">
                <div className="w-16 h-16 border border-[#C9A96E] flex items-center justify-center mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-cormorant text-3xl font-light text-white mb-3">Thank You!</h3>
                <p className="font-jost text-white/50 text-sm max-w-sm">
                  Your message has been received. We&apos;ll be in touch within 24 hours to discuss your project.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <label className={labelCls}>Full Name *</label>
                    <input name="name" required value={form.name} onChange={handle} placeholder="Your name" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Email Address *</label>
                    <input name="email" type="email" required value={form.email} onChange={handle} placeholder="your@email.com" className={inputCls} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <label className={labelCls}>Phone Number</label>
                    <input name="phone" value={form.phone} onChange={handle} placeholder="+234 800 000 0000" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Preferred Date</label>
                    <input name="date" type="date" value={form.date} onChange={handle} className={inputCls} style={{ colorScheme: 'dark' }} />
                  </div>
                </div>

                <div>
                  <label className={labelCls}>Service of Interest *</label>
                  <select name="service" required value={form.service} onChange={handle} className={`${inputCls} bg-[#0D0D0D]`}>
                    <option value="" disabled>Select a service</option>
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-[#1A1A1A]">{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={labelCls}>Message *</label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handle}
                    rows={4}
                    placeholder="Tell us about your vision, event details, or any questions you have..."
                    className={`${inputCls} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#C9A96E] text-black text-[0.7rem] tracking-[0.3em] uppercase font-jost font-medium hover:bg-[#E8D5A3] transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
