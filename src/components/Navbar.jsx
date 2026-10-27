import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Phone, Calendar, Sparkles } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Navbar({ currentPath, navigate }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(0);

  // Exact Final Menu Order:
  // Home, About, Portfolio, Weddings, Destination Weddings, Event Management, Packages, Contact
  const navLinks = [
    {
      label: 'Home',
      path: '/',
      preview: '/media/hero/hero-poster.jpg',
      tagline: 'Where every love story becomes a celebration',
    },
    {
      label: 'About',
      path: '/about',
      preview: '/media/about/founder.jpg',
      tagline: 'Sudee’s vision, heritage & architectural tenets',
    },
    {
      label: 'Portfolio',
      path: '/portfolio',
      preview: '/media/gallery/moments-1.jpg',
      tagline: 'Real celebrations, films & archival moments',
    },
    {
      label: 'Weddings',
      path: '/wedding-planners-in-bangalore',
      preview: '/media/weddings/wedding-card.jpg',
      tagline: 'Bespoke mandaps & royal celebrations',
    },
    {
      label: 'Destination Weddings',
      path: '/destination-weddings',
      preview: '/media/destinations/destination-hero.jpg',
      tagline: 'Turnkey weddings in Goa, Rajasthan & serene destinations',
    },
    {
      label: 'Event Management',
      path: '/event-management-bangalore',
      preview: '/media/corporate/corporate-card.jpg',
      tagline: 'Corporate summits, galas & brand spectacles',
    },
    {
      label: 'Packages',
      path: '/pricing',
      preview: '/media/story/philosophy-tradition.jpg',
      tagline: 'Curated investment tiers starting from ₹3 Lakhs',
    },
    {
      label: 'Contact',
      path: '/contact',
      preview: '/media/story/journey-dream.jpg',
      tagline: 'Sadashivanagar studio consultation with Sudee',
    },
  ];

  // Scroll direction detection (hide on down, reveal on up)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 40);

      if (currentScrollY > lastScrollY && currentScrollY > 120 && !menuOpen) {
        setIsVisible(false); // scrolling down
      } else {
        setIsVisible(true); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, menuOpen]);

  // Lock body scroll when overlay menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleLinkClick = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <>
      {/* ── DESKTOP FLOATING FROSTED GLASS PILL NAVBAR ── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-5 inset-x-0 z-40 hidden min-[1180px]:flex justify-center px-4 pointer-events-none"
      >
        <div
          className={`pointer-events-auto flex items-center justify-between gap-4 xl:gap-6 px-4 py-2.5 rounded-full border transition-all duration-300 ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-xl border-[#EEDDC8] shadow-[0_12px_40px_rgba(201,162,75,0.18)]'
              : 'bg-white/85 backdrop-blur-md border-[#EEDDC8] shadow-[0_6px_25px_rgba(201,162,75,0.1)]'
          }`}
        >
          {/* Brand Monogram Logo */}
          <button
            onClick={() => handleLinkClick('/')}
            className="flex items-center gap-3.5 group pl-1.5 focus:outline-none shrink-0"
          >
            <div className="relative w-12 h-12 xl:w-13 xl:h-13 rounded-full overflow-hidden border-[1.5px] border-gold/60 p-0.5 group-hover:border-gold shadow-sm transition-all duration-300">
              <img
                src="/logo.png"
                alt="Posh Events by Sudee"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display text-base xl:text-lg tracking-[0.22em] uppercase text-[#3D0A14] font-bold group-hover:text-gold transition-colors whitespace-nowrap">
                POSH EVENTS
              </span>
              <span className="text-[10px] xl:text-[11px] tracking-[0.28em] uppercase text-gold font-sans font-extrabold -mt-0.5">
                BY SUDEE
              </span>
            </div>
          </button>

          {/* Centered Navigation Links with Gold Active Indicator */}
          <div className="flex items-center gap-0.5 xl:gap-1.5 px-1">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;

              return (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.path)}
                  className="relative px-2.5 xl:px-3 py-1.5 text-[11px] xl:text-[12.5px] tracking-[0.06em] uppercase font-sans font-medium transition-colors focus:outline-none text-[#4A101D] hover:text-gold whitespace-nowrap"
                >
                  <span className={isActive ? 'text-gold font-bold' : ''}>
                    {link.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activePillUnderline"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Action: Plan CTA & Hamburger Trigger */}
          <div className="flex items-center gap-2 pr-1 shrink-0">
            <button
              onClick={() => handleLinkClick('/contact')}
              className="btn-gold-pill !py-2 !px-3.5 !text-[11px] !tracking-wider flex items-center gap-1.5 shadow-sm whitespace-nowrap"
            >
              <span>Plan Celebration</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Immersive Menu Trigger */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open Fullscreen Menu"
              className="w-9 h-9 rounded-full border border-gold/40 bg-[#FFF9F0] hover:bg-gold/20 flex items-center justify-center text-gold transition-colors focus:outline-none"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── MOBILE / TABLET SLIM TOP BAR ── */}
      <div
        className={`fixed top-0 inset-x-0 z-40 min-[1180px]:hidden flex items-center justify-between px-4 py-3 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-[#EEDDC8] shadow-md'
            : 'bg-white/90 backdrop-blur-md border-b border-[#EEDDC8]/80'
        }`}
      >
        <button
          onClick={() => handleLinkClick('/')}
          className="flex items-center gap-3 focus:outline-none"
        >
          <div className="w-11 h-11 rounded-full overflow-hidden border-[1.5px] border-gold/60 p-0.5 shadow-sm">
            <img src="/logo.png" alt="Posh Events Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-display text-base tracking-[0.2em] uppercase text-[#3D0A14] font-bold leading-tight">
              POSH EVENTS
            </span>
            <span className="text-[9.5px] tracking-[0.25em] uppercase text-gold font-sans font-extrabold mt-0.5">
              BY SUDEE
            </span>
          </div>
        </button>

        {/* Menu Hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open Mobile Menu"
          className="w-10 h-10 rounded-full border border-gold/40 bg-[#FFF9F0] flex items-center justify-center text-gold focus:outline-none"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* ── FULL-SCREEN CELEBRATORY SPLIT OVERLAY MENU ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at top right)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#FFF9F0] text-[#3D0A14] flex flex-col justify-between overflow-y-auto"
          >
            {/* Top Bar inside overlay */}
            <div className="flex items-center justify-between px-6 sm:px-12 py-6 border-b border-[#EEDDC8] bg-white/70 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="Posh Events" className="w-10 h-10 object-contain" />
                <div className="flex flex-col">
                  <span className="font-display tracking-[0.2em] text-sm uppercase text-[#3D0A14] font-semibold">
                    POSH EVENTS BY SUDEE
                  </span>
                  <span className="text-[9px] tracking-[0.3em] uppercase text-gold font-bold">
                    BENGALURU • SOUTH INDIA
                  </span>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setMenuOpen(false)}
                className="w-11 h-11 rounded-full border border-gold/50 bg-white hover:bg-gold/15 flex items-center justify-center text-gold transition-colors focus:outline-none shadow-sm"
                aria-label="Close Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Split Body */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 px-6 sm:px-12 py-8 items-center max-w-7xl mx-auto w-full">
              {/* Left Column: Giant Serif Menu Links */}
              <div className="lg:col-span-7 flex flex-col space-y-2 sm:space-y-2.5 text-left">
                <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-sans font-bold mb-1">
                  CELEBRATION CHAPTERS
                </span>
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + idx * 0.03, duration: 0.4 }}
                    onMouseEnter={() => setHoveredLink(idx)}
                    className="group"
                  >
                    <button
                      onClick={() => handleLinkClick(link.path)}
                      className="flex items-baseline gap-4 text-left w-full focus:outline-none py-1"
                    >
                      <span className="text-xs font-mono text-gold group-hover:text-gold-dark transition-colors font-semibold">
                        0{idx + 1}
                      </span>
                      <span className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#3D0A14] group-hover:text-gold group-hover:italic transition-all duration-300">
                        {link.label}
                      </span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gold" />
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* Right Column (Desktop): Dynamic Rotating Photo / Video Preview */}
              <div className="hidden lg:flex lg:col-span-5 flex-col items-center">
                <div className="relative w-full aspect-[4/5] max-w-md rounded-3xl overflow-hidden border border-[#EEDDC8] shadow-[0_12px_45px_rgba(201,162,75,0.15)] bg-white group">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={hoveredLink}
                      src={navLinks[hoveredLink]?.preview}
                      alt={navLinks[hoveredLink]?.label}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.35 }}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = '/media/hero/hero-poster.jpg';
                      }}
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-6 text-left text-white">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-gold-light font-semibold block">
                      Featured Preview
                    </span>
                    <h3 className="font-display text-2xl mt-1">
                      {navLinks[hoveredLink]?.label}
                    </h3>
                    <p className="text-xs text-white/80 font-light mt-1">
                      {navLinks[hoveredLink]?.tagline}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Contact & Social Strip */}
            <div className="px-6 sm:px-12 py-6 border-t border-[#EEDDC8] bg-white/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#5A2A27]">
              <div className="flex flex-wrap items-center gap-6">
                <span>Chikkabanavara, Bengaluru</span>
                <a href="tel:+917899243348" className="hover:text-gold transition-colors font-medium">
                  +91 78992 43348
                </a>
                <a href="mailto:poshevntz2001@gmail.com" className="hover:text-gold transition-colors">
                  poshevntz2001@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://wa.me/917899243348?text=Hello%20Posh%20Events%20by%20Sudee,%20I%20would%20like%20to%20plan%20a%20luxury%20celebration."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gold font-semibold hover:text-gold-dark transition-colors"
                >
                  <FaWhatsapp className="w-4 h-4 text-green-600" />
                  <span>WhatsApp Concierge</span>
                </a>
                <a
                  href="https://www.instagram.com/posheventsbysudee/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center hover:text-gold transition-colors bg-white"
                >
                  <FaInstagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
