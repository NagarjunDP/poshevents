import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUp, Calendar, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Navbar({ currentPath, navigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Scroll listener for sticky header styling & back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
      setShowBackToTop(scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Nav links in Title Case (Inter, 15-16px, 500 weight)
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Wedding Planners', path: '/wedding-planners-in-bangalore' },
    { label: 'Event Management', path: '/event-management-bangalore' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (e, path) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    navigate(path);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* ── STICKY SINGLE-ROW LUXURY HEADER ── */}
      <header
        className={`sticky top-0 inset-x-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F3]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.06)] border-b border-[#B08D57]/20'
            : 'bg-[#FAF8F3] border-b border-[#B08D57]/15'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 min-[1180px]:px-10 flex items-center justify-between h-[68px] min-[1180px]:h-[84px]">
          
          {/* LEFT: Circular Logo (48-52px desktop, 42px mobile) + Brand Name on ONE line */}
          <a
            href="/"
            onClick={(e) => handleNavClick(e, '/')}
            className="flex items-center space-x-3 shrink-0 whitespace-nowrap group select-none cursor-pointer"
          >
            <div className="w-[42px] h-[42px] min-[1180px]:w-[50px] min-[1180px]:h-[50px] rounded-full bg-white p-1 shadow-sm border border-[#B08D57]/30 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/logo.png"
                alt="Posh Events Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-serif font-bold text-xl sm:text-2xl min-[1180px]:text-[26px] text-[#2B2B2B] tracking-wide whitespace-nowrap group-hover:text-[#B08D57] transition-colors">
              Posh Events
            </span>
          </a>

          {/* CENTRE: Nav links in Inter, Title Case, 15-16px, 500 weight (>= 1180px) */}
          <nav className="hidden min-[1180px]:flex items-center gap-[clamp(14px,1.5vw,28px)] shrink-0 whitespace-nowrap">
            {navLinks.map((link) => {
              const isActive =
                currentPath === link.path ||
                (link.path === '/portfolio' && currentPath === '/gallery');
              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleNavClick(e, link.path)}
                  className={`relative font-sans text-[clamp(14px,1.02vw,15.5px)] font-medium whitespace-nowrap py-1 transition-colors duration-200 ${
                    isActive
                      ? 'text-[#B08D57] font-semibold'
                      : 'text-[#2B2B2B] hover:text-[#B08D57]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="navActiveUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B08D57] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* RIGHT: CTA Button (>= 1180px) & Hamburger (< 1180px) */}
          <div className="flex items-center min-[1180px]:ml-6 shrink-0 whitespace-nowrap">
            <a
              href="/contact"
              onClick={(e) => handleNavClick(e, '/contact')}
              className="hidden min-[1180px]:inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#B08D57] to-[#C4A574] hover:from-[#9C7A45] hover:to-[#B08D57] text-white font-sans text-[15px] font-semibold px-6 py-3 whitespace-nowrap shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Book Consultation
            </a>

            {/* Mobile / Tablet Hamburger Toggle (< 1180px) - 44x44px accessible tap target */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="min-[1180px]:hidden w-11 h-11 rounded-full bg-white border border-[#B08D57]/30 text-[#2B2B2B] flex items-center justify-center hover:bg-[#B08D57]/10 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B08D57]/40"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE SLIDE-IN NAVIGATION DRAWER (< 1280px) ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dimmed Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 min-[1180px]:hidden"
              aria-hidden="true"
            />

            {/* Slide-in Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#FAF8F3] z-50 shadow-2xl flex flex-col justify-between p-6 overflow-y-auto min-[1180px]:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation Menu"
            >
              {/* Drawer Header */}
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-[#B08D57]/20">
                  <div className="flex items-center space-x-3">
                    <img
                      src="/logo.png"
                      alt="Posh Events"
                      className="w-10 h-10 object-contain rounded-full bg-white p-1 border border-[#B08D57]/30"
                    />
                    <span className="font-serif font-bold text-lg text-[#2B2B2B] tracking-wide whitespace-nowrap">
                      Posh Events
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                    className="w-10 h-10 rounded-full bg-white border border-[#B08D57]/30 flex items-center justify-center text-[#2B2B2B] hover:bg-[#B08D57]/10 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Drawer Links: 18-20px font, 52px+ row height, thin dividers */}
                <nav className="flex flex-col mt-4 divide-y divide-[#B08D57]/15">
                  {navLinks.map((link) => {
                    const isActive =
                      currentPath === link.path ||
                      (link.path === '/portfolio' && currentPath === '/gallery');
                    return (
                      <a
                        key={link.path}
                        href={link.path}
                        onClick={(e) => handleNavClick(e, link.path)}
                        className={`min-h-[52px] flex items-center px-3 py-3.5 font-serif text-[19px] tracking-wide whitespace-nowrap transition-colors ${
                          isActive
                            ? 'text-[#B08D57] font-bold'
                            : 'text-[#2B2B2B] hover:text-[#B08D57]'
                        }`}
                      >
                        {link.label}
                      </a>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer Footer CTA & Direct Contact */}
              <div className="pt-6 border-t border-[#B08D57]/20 space-y-4">
                <a
                  href="/contact"
                  onClick={(e) => handleNavClick(e, '/contact')}
                  className="w-full btn-gold-pill py-3.5 text-center text-sm font-semibold shadow-lg flex items-center justify-center space-x-2 whitespace-nowrap"
                >
                  <Calendar size={16} />
                  <span>Book Consultation</span>
                </a>

                <div className="flex items-center justify-center space-x-6 pt-1 text-xs font-sans text-[#2B2B2B]">
                  <a
                    href="tel:+917899243348"
                    className="flex items-center space-x-1.5 font-semibold text-[#8A6B2E] hover:underline"
                  >
                    <Phone size={13} />
                    <span>+91 78992 43348</span>
                  </a>
                  <a
                    href="https://wa.me/917899243348"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1.5 font-semibold text-[#25D366] hover:underline"
                  >
                    <FaWhatsapp size={15} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── FLOATING WHATSAPP CHAT BUTTON (FIXED BOTTOM-RIGHT) ── */}
      <aside aria-label="Quick contact and navigation">
        <a
          href="https://wa.me/917899243348?text=Hello%20Posh%20Events%2C%20I%20would%20like%20to%20plan%20a%20luxury%20wedding%20or%20event."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Posh Events on WhatsApp"
          className="fixed bottom-6 right-6 z-40 group flex items-center"
        >
          {/* Slide-out tooltip on hover */}
          <span className="mr-3 hidden md:inline-block px-3 py-1.5 rounded-full bg-white/95 text-[#2B2B2B] text-[11px] font-sans font-semibold tracking-wider uppercase border border-[#B08D57]/40 shadow-xl opacity-0 scale-90 translate-x-3 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
            Chat on WhatsApp
          </span>

          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-transform duration-300">
            <FaWhatsapp className="w-7 h-7" />
          </div>
        </a>

        {/* ── CIRCULAR BACK TO TOP BUTTON ── */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              aria-label="Back to top"
              className="fixed bottom-24 right-7 z-40 w-11 h-11 rounded-full bg-white text-[#2B2B2B] border border-[#B08D57]/30 shadow-lg flex items-center justify-center hover:bg-[#B08D57] hover:text-white hover:border-[#B08D57] transition-all duration-300"
            >
              <ArrowUp size={18} />
            </motion.button>
          )}
        </AnimatePresence>
      </aside>
    </>
  );
}
