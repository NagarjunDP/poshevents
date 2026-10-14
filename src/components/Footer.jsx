import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer({ navigate }) {
  const handleNavClick = (e, path) => {
    e.preventDefault();
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF8F3] border-t border-[#B08D57]/20 pt-16 pb-10 text-[#2B2B2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#B08D57]/15">
          
          {/* Col 1 & 2: Brand Story */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-white p-1.5 shadow-md border border-[#B08D57]/30 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Posh Events Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-serif font-bold text-xl text-[#2B2B2B] tracking-wider uppercase block">
                  POSH EVENTS
                </span>
                <span className="font-sans text-[10px] text-[#8A6B2E] tracking-[0.2em] uppercase font-semibold">
                  LUXURY WEDDING & EVENT PLANNERS
                </span>
              </div>
            </div>

            <p className="font-sans text-sm text-[#4A4A4A] leading-relaxed max-w-md pt-2">
              Bangalore’s premier luxury wedding planning and bespoke celebration studio.
              From sacred temple mandaps and starlit sangeets to scenic destination weddings across India,
              we craft celebrations that become timeless family heirlooms.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com/posh_events_by_sudee"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Posh Events on Instagram"
                className="w-10 h-10 rounded-full bg-white border border-[#B08D57]/30 text-[#8A6B2E] flex items-center justify-center hover:bg-[#B08D57] hover:text-white transition-all duration-300 shadow-sm"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/917899243348"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="w-10 h-10 rounded-full bg-white border border-[#B08D57]/30 text-[#8A6B2E] flex items-center justify-center hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300 shadow-sm"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a
                href="tel:+917899243348"
                aria-label="Call Posh Events"
                className="w-10 h-10 rounded-full bg-white border border-[#B08D57]/30 text-[#8A6B2E] flex items-center justify-center hover:bg-[#B08D57] hover:text-white transition-all duration-300 shadow-sm"
              >
                <Phone size={17} />
              </a>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-3">
            <span className="eyebrow-label block mb-4">Quick Links</span>
            <ul className="space-y-2.5 font-sans text-sm">
              <li>
                <a
                  href="/"
                  onClick={(e) => handleNavClick(e, '/')}
                  className="hover:text-[#B08D57] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => handleNavClick(e, '/about')}
                  className="hover:text-[#B08D57] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  onClick={(e) => handleNavClick(e, '/portfolio')}
                  className="hover:text-[#B08D57] transition-colors"
                >
                  Portfolio / Real Weddings
                </a>
              </li>
              <li>
                <a
                  href="/wedding-planners-in-bangalore"
                  onClick={(e) => handleNavClick(e, '/wedding-planners-in-bangalore')}
                  className="hover:text-[#B08D57] transition-colors"
                >
                  Wedding Planners Bangalore
                </a>
              </li>
              <li>
                <a
                  href="/event-management-bangalore"
                  onClick={(e) => handleNavClick(e, '/event-management-bangalore')}
                  className="hover:text-[#B08D57] transition-colors"
                >
                  Event Management
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  onClick={(e) => handleNavClick(e, '/pricing')}
                  className="hover:text-[#B08D57] transition-colors"
                >
                  Pricing & Packages
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div className="space-y-3">
            <span className="eyebrow-label block mb-4">Celebration Offerings</span>
            <ul className="space-y-2.5 font-sans text-sm text-[#4A4A4A]">
              <li>Bespoke Mandap & Floral Decor</li>
              <li>Sangeet Stage & Concert Lighting</li>
              <li>Haldi & Mehendi Carnivals</li>
              <li>South Indian Traditional Seemantha</li>
              <li>Divine Krishna Naming Ceremonies</li>
              <li>Corporate Galas & Milestone Bashes</li>
              <li>Personal Security & VIP Escorts</li>
            </ul>
          </div>

          {/* Col 5: Contact Details */}
          <div className="space-y-4">
            <span className="eyebrow-label block mb-4">Direct Concierge</span>
            <div className="space-y-3 font-sans text-sm text-[#4A4A4A]">
              <div className="flex items-start space-x-3">
                <MapPin size={17} className="shrink-0 text-[#B08D57] mt-0.5" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone size={17} className="shrink-0 text-[#B08D57] mt-0.5" />
                <a
                  href="tel:+917899243348"
                  className="hover:text-[#B08D57] font-semibold text-[#2B2B2B]"
                >
                  +91 78992 43348
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={17} className="shrink-0 text-[#B08D57] mt-0.5" />
                <a
                  href="mailto:poshevntz2001@gmail.com"
                  className="hover:text-[#B08D57] break-all"
                >
                  poshevntz2001@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="/contact"
                onClick={(e) => handleNavClick(e, '/contact')}
                className="w-full btn-gold-pill text-xs py-2.5 text-center block"
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-[#4A4A4A] gap-4">
          <p>© {new Date().getFullYear()} Posh Events by Sudee. All Rights Reserved.</p>
          <p className="italic text-[#8A6B2E] font-serif">
            ✦ Crafting moments of timeless wonder across South India.
          </p>
        </div>
      </div>
    </footer>
  );
}
