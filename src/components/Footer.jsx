import React from 'react';
import { ArrowUp, MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';

export default function Footer({ navigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Our Story', path: '/about' },
    { label: 'Moments Portfolio', path: '/portfolio' },
    { label: 'Royal Weddings', path: '/wedding-planners-in-bangalore' },
    { label: 'Destination Weddings', path: '/destination-weddings' },
    { label: 'Event Management', path: '/event-management-bangalore' },
    { label: 'Packages & Pricing', path: '/pricing' },
    { label: 'Contact Studio', path: '/contact' },
    { label: 'Admin Portal', path: '/admin' },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-b from-[#FFFDF9] via-[#FAF7F2] to-[#F5EFEB] text-[#2A070E] border-t border-[#E5D7C3] pt-16 sm:pt-20 pb-28 md:pb-16 overflow-hidden">
      {/* Top refined gold gradient divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[1.5px] bg-gradient-to-r from-transparent via-[#C9A24B] to-transparent" />

      {/* Ambient warm champagne radial glow */}
      <div className="absolute top-0 right-1/4 w-[420px] h-[420px] bg-[#C9A24B]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-[#E5D7C3]">
          
          {/* ── 1. PROPER BIG LOGO & BRAND STATEMENT (lg:col-span-5) ── */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-6">
            <div className="flex items-center gap-4 sm:gap-5">
              {/* Proper Big Logo (80px mobile, 96px desktop) */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#C9A24B] p-1.5 shadow-[0_10px_30px_rgba(201,162,75,0.18)] bg-white shrink-0">
                <img
                  src="/logo.png"
                  alt="Posh Events by Sudee Monogram"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex flex-col text-left">
                <span
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-2xl sm:text-3xl tracking-[0.2em] uppercase text-[#2A070E] font-bold leading-tight"
                >
                  POSH EVENTS
                </span>
                <span className="text-[11px] sm:text-[12px] tracking-[0.32em] uppercase text-[#9E7828] font-sans font-extrabold mt-1">
                  BY SUDEE • BENGALURU
                </span>
                <span className="text-[10px] tracking-wider text-[#6B4B3E] uppercase font-medium mt-0.5">
                  South India's Premier Luxury Planners
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#4A352F] font-light leading-relaxed max-w-md text-left">
              Crafting bespoke celebrations where ancestral Southern heritage, sacred temple mandaps, and authentic jasmine protocols seamlessly integrate with world-class contemporary grandeur.
            </p>

            {/* Social Channels with generous touch targets */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.instagram.com/posheventsbysudee/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Posh Events on Instagram"
                className="w-11 h-11 rounded-full border border-[#E5D7C3] bg-white hover:bg-[#C9A24B] hover:text-white flex items-center justify-center text-[#2A070E] transition-all duration-300 shadow-sm"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/917899243348?text=Hello%20Posh%20Events%20by%20Sudee,%20I%20would%20like%20to%20plan%20a%20celebration."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Direct WhatsApp Concierge"
                className="w-11 h-11 rounded-full border border-[#E5D7C3] bg-white hover:bg-[#25D366] hover:text-white flex items-center justify-center text-[#2A070E] transition-all duration-300 shadow-sm"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/posheventsbysudee"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Posh Events on Facebook"
                className="w-11 h-11 rounded-full border border-[#E5D7C3] bg-white hover:bg-[#1877F2] hover:text-white flex items-center justify-center text-[#2A070E] transition-all duration-300 shadow-sm"
              >
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* ── 2. QUICK NAVIGATION LINKS (lg:col-span-3) ── */}
          <div className="lg:col-span-3 flex flex-col items-start space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#9E7828]">
              Navigation
            </span>
            <ul className="space-y-2.5 text-left w-full">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => {
                      if (navigate) navigate(link.path);
                      else window.location.href = link.path;
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-sm text-[#4A352F] hover:text-[#9E7828] hover:translate-x-1 transition-all font-normal py-1 inline-block text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── 3. BANGALORE STUDIO & DIRECT CONTACT DETAILS (lg:col-span-4) ── */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#9E7828]">
              Bangalore Studio & Contact
            </span>

            <div className="space-y-3.5 text-sm text-[#4A352F] font-normal text-left w-full bg-white/70 p-5 rounded-2xl border border-[#E5D7C3] shadow-[0_4px_20px_rgba(201,162,75,0.06)]">
              {/* Full Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#9E7828] shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-[#2A070E] block">Creative Studio Address:</span>
                  <span className="text-[#4A352F] block leading-relaxed mt-0.5 text-xs sm:text-sm">
                    Behind Shantinagar Arch, Secrets of Ocean Resto, Acharya College Main Road, Shanti Nagar, Chikkabanavara, Bengaluru
                  </span>
                  <a
                    href="https://maps.google.com/?q=Secrets+of+Ocean+Resto+Acharya+College+Main+Road+Chikkabanavara+Bengaluru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#9E7828] hover:underline mt-1 font-semibold"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Direct Phone / WhatsApp */}
              <div className="flex items-start gap-3 pt-1">
                <Phone className="w-4 h-4 text-[#9E7828] shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-[#2A070E] block">Phone / WhatsApp:</span>
                  <a
                    href="tel:+917899243348"
                    className="text-sm text-[#2A070E] font-medium hover:text-[#9E7828] transition-colors py-0.5 block"
                  >
                    +91 78992 43348
                  </a>
                </div>
              </div>

              {/* Direct Email */}
              <div className="flex items-start gap-3 pt-1">
                <Mail className="w-4 h-4 text-[#9E7828] shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-[#2A070E] block">Email Inquiries:</span>
                  <a
                    href="mailto:poshevntz2001@gmail.com"
                    className="text-[#4A352F] hover:text-[#9E7828] transition-colors break-all"
                  >
                    poshevntz2001@gmail.com
                  </a>
                </div>
              </div>

              {/* Studio Hours */}
              <div className="flex items-start gap-3 pt-1">
                <Clock className="w-4 h-4 text-[#9E7828] shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-[#2A070E] block">Studio Hours:</span>
                  <span className="text-[#4A352F] block text-xs mt-0.5">
                    Monday to Sunday: 9:00 AM – 9:00 PM (IST)
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ── BOTTOM BAR & BACK TO TOP ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B4B3E]">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Posh Events by Sudee. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-[10px] tracking-widest uppercase text-[#9E7828] font-semibold">
              Southern Heritage • Global Grandeur
            </span>

            {/* Back to top gold button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-[#C9A24B]/50 bg-white hover:bg-[#C9A24B] hover:text-white flex items-center justify-center text-[#9E7828] transition-all duration-300 shadow-sm cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
