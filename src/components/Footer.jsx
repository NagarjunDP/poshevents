import React from 'react';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

const navLinks = [
  { label: 'Home',      href: '#home'         },
  { label: 'About',     href: '#about'        },
  { label: 'Services',  href: '#celebrations' },
  { label: 'Portfolio', href: '#showcase'     },
  { label: 'Contact',   href: '#contact'      },
];

export default function Footer() {
  return (
    <footer className="bg-[#0E1520] text-[#FAF8F3] relative overflow-hidden">

      {/* Subtle radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, #C9A25E 0%, transparent 70%)' }} />

      {/* Top gold divider */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A25E] to-transparent" />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10 relative z-10">

        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-14">

          {/* COL 1 — Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src="/logo.png"
              alt="Posh Events"
              className="h-16 w-auto object-contain mb-4"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <h2 className="font-serif text-[#C9A25E] tracking-[0.25em] text-sm uppercase font-semibold mb-3">
              Posh Events By Sudee
            </h2>
            <p className="font-serif italic text-[#FAF8F3]/60 text-sm leading-relaxed">
              "Turning Visions into<br />Timeless Celebrations."
            </p>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/poshevents_by_sudee/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-10 h-10 rounded-full border border-[#C9A25E]/40 flex items-center justify-center
                         text-[#FAF8F3]/60 hover:bg-[#C9A25E] hover:text-[#0E1520] hover:border-[#C9A25E]
                         transition-all duration-300"
            >
              <Instagram size={17} />
            </a>
          </div>

          {/* COL 2 — Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p className="font-sans text-[#C9A25E] text-[10px] tracking-[0.3em] uppercase font-semibold mb-5">
              Quick Links
            </p>
            <div className="w-8 h-[1px] bg-gradient-to-r from-[#C9A25E] to-transparent mb-5" />
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-sans text-[#FAF8F3]/70 text-sm tracking-[0.12em] uppercase
                             hover:text-[#C9A25E] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* COL 3 — Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p className="font-sans text-[#C9A25E] text-[10px] tracking-[0.3em] uppercase font-semibold mb-5">
              Get In Touch
            </p>
            <div className="w-8 h-[1px] bg-gradient-to-r from-[#C9A25E] to-transparent mb-5" />

            <div className="flex flex-col gap-5">
              {/* Phone */}
              <a
                href="tel:+917899243348"
                className="flex items-start gap-3 group"
              >
                <div className="w-8 h-8 rounded-full border border-[#C9A25E]/30 flex items-center justify-center flex-shrink-0
                                group-hover:bg-[#C9A25E] group-hover:border-[#C9A25E] transition-all duration-300 mt-0.5">
                  <Phone size={13} className="text-[#C9A25E] group-hover:text-[#0E1520] transition-colors" />
                </div>
                <div>
                  <p className="font-sans text-[10px] text-[#FAF8F3]/40 tracking-widest uppercase mb-0.5">Phone</p>
                  <p className="font-sans text-[#FAF8F3]/80 text-sm hover:text-[#C9A25E] transition-colors">
                    +91 78992 43348
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:sudee43348@gmail.com"
                className="flex items-start gap-3 group"
              >
                <div className="w-8 h-8 rounded-full border border-[#C9A25E]/30 flex items-center justify-center flex-shrink-0
                                group-hover:bg-[#C9A25E] group-hover:border-[#C9A25E] transition-all duration-300 mt-0.5">
                  <Mail size={13} className="text-[#C9A25E] group-hover:text-[#0E1520] transition-colors" />
                </div>
                <div>
                  <p className="font-sans text-[10px] text-[#FAF8F3]/40 tracking-widest uppercase mb-0.5">Email</p>
                  <p className="font-sans text-[#FAF8F3]/80 text-sm hover:text-[#C9A25E] transition-colors break-all">
                    sudee43348@gmail.com
                  </p>
                </div>
              </a>

              {/* Address */}
              <a
                href="https://maps.google.com/?q=Posh+Events+Madanayakanahalli+Karnataka"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <div className="w-8 h-8 rounded-full border border-[#C9A25E]/30 flex items-center justify-center flex-shrink-0
                                group-hover:bg-[#C9A25E] group-hover:border-[#C9A25E] transition-all duration-300 mt-0.5">
                  <MapPin size={13} className="text-[#C9A25E] group-hover:text-[#0E1520] transition-colors" />
                </div>
                <div>
                  <p className="font-sans text-[10px] text-[#FAF8F3]/40 tracking-widest uppercase mb-0.5">Location</p>
                  <p className="font-sans text-[#FAF8F3]/80 text-sm leading-relaxed hover:text-[#C9A25E] transition-colors">
                    Posh Events, Opp. Siddraju Water Point,<br />
                    Madavara, Madanayakanahalli,<br />
                    Karnataka – 562162
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* ── BOTTOM DIVIDER ── */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A25E]/30 to-transparent mb-8" />

        {/* ── BOTTOM ROW ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center">
          <p className="font-sans text-[#FAF8F3]/35 text-[11px] tracking-widest uppercase">
            © 2026 Posh Events by Sudee. All rights reserved.
          </p>
          <p className="font-sans text-[#FAF8F3]/25 text-[11px] tracking-widest">
            Made with ♥ in Bengaluru by{' '}
            <a
              href="https://webibi.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FAF8F3]/45 hover:text-[#C9A25E] transition-colors duration-300 hover:underline underline-offset-2"
            >
              webibi.tech
            </a>
          </p>
        </div>
      </div>

      {/* Background concentric circles decoration */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-[0.04] pointer-events-none translate-x-1/3 translate-y-1/3">
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="250" cy="250" r="240" stroke="#C9A84C" strokeWidth="1" />
          <circle cx="250" cy="250" r="180" stroke="#C9A84C" strokeWidth="1" />
          <circle cx="250" cy="250" r="120" stroke="#C9A84C" strokeWidth="1" />
          <circle cx="250" cy="250" r="60"  stroke="#C9A84C" strokeWidth="1" />
        </svg>
      </div>
    </footer>
  );
}
