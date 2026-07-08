import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(false);

  // Responsive check
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ScrollSpy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.25, rootMargin: '-15% 0px -50% 0px' }
    );
    const sections = ['home', 'about', 'celebrations', 'showcase', 'weddings', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 60) {
        setVisible(true);
      } else {
        setVisible(currentScrollY < lastScrollY);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const yOffsetSpring = useSpring(visible ? 0 : -100, { stiffness: 300, damping: 30 });

  const navLinks = [
    { label: 'Home', target: '#home', id: 'home' },
    { label: 'About', target: '#about', id: 'about' },
    { label: 'Services', target: '#celebrations', id: 'celebrations' },
    { label: 'Portfolio', target: '#showcase', id: 'showcase' },
    { label: 'Contact', target: '#contact', id: 'contact' },
  ];

  const FoliageIndicator = () => (
    <motion.svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      className="inline-block ml-3 w-5 h-5 text-[#8A6B2E]">
      <motion.path d="M2,18 C8,16 12,12 18,6" stroke="currentColor" strokeWidth="1.5"
        strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }} />
      <motion.path d="M12,12 C13,10 16,9 17,11 C15,13 13,13 12,12 Z" stroke="currentColor"
        strokeWidth="1.2" fill="currentColor" initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }} />
    </motion.svg>
  );

  return (
    <>
      <style>{`
        @keyframes shimmerBorder {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes liquidText {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .liquid-text-active {
          background: linear-gradient(270deg, #8A6B2E, #C9A25E, #E3C285, #FAF8F3, #C9A25E, #8A6B2E);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: liquidText 6s ease-in-out infinite;
        }
      `}</style>

      {/* ── DESKTOP PILL NAVBAR ── always pill, centered via x:'-50%' in framer-motion */}
      <motion.div
        style={{ y: yOffsetSpring, x: '-50%' }}
        className="fixed top-4 left-1/2 z-40 hidden md:grid grid-cols-[auto_1fr_auto] items-center
                   w-[780px] max-w-[calc(100vw-48px)]
                   px-5 py-2.5
                   rounded-full
                   shadow-2xl pointer-events-auto
                   overflow-hidden"
      >
        {/* Gold shimmer border layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#8A6B2E] via-[#C9A25E] to-[#E3C285]
                        bg-[length:200%_200%] animate-[shimmerBorder_8s_linear_infinite] z-0 rounded-full" />
        {/* Cream fill (1.5px inset reveals border) */}
        <div className="absolute inset-[1.5px] bg-[#FAF8F3]/95 backdrop-blur-xl z-10 rounded-full" />

        {/* LEFT — Logo */}
        <div className="flex items-center z-20">
          <img src="/logo.png" alt="Posh Events" className="h-9 w-auto object-contain" />
        </div>

        {/* CENTER — Nav links */}
        <nav className="flex items-center justify-center gap-6 z-20">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.target}
              className={`text-[10px] font-sans tracking-[0.18em] uppercase transition-colors duration-200 relative py-1 whitespace-nowrap hover:scale-105 inline-block
                ${activeSection === link.id ? 'text-[#C9A25E]' : 'text-[#14203A]'}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* RIGHT — Hamburger toggle */}
        <div className="flex items-center justify-end z-20">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="flex flex-col justify-center items-center gap-1.5 w-9 h-9 rounded-full
                       hover:bg-[#14203A]/8 transition-colors focus:outline-none"
          >
            <span className="w-5 h-[1.2px] bg-[#14203A] block" />
            <span className="w-5 h-[1.2px] bg-[#14203A] block" />
          </button>
        </div>
      </motion.div>

      {/* ── MOBILE PILL NAVBAR ── */}
      <motion.div
        style={{ y: yOffsetSpring, x: '-50%' }}
        className="fixed top-4 left-1/2 z-40 md:hidden flex items-center justify-between
                   w-[90vw] px-4 py-2.5 rounded-full shadow-2xl pointer-events-auto overflow-hidden"
      >
        {/* Gold shimmer border */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#8A6B2E] via-[#C9A25E] to-[#E3C285]
                        bg-[length:200%_200%] animate-[shimmerBorder_8s_linear_infinite] z-0 rounded-full" />
        <div className="absolute inset-[1.5px] bg-[#FAF8F3]/95 backdrop-blur-xl z-10 rounded-full" />

        {/* Mobile Logo */}
        <div className="z-20">
          <img src="/logo.png" alt="Posh Events" className="h-8 w-auto object-contain" />
        </div>

        {/* Mobile Center Brand */}
        <div className="absolute left-1/2 -translate-x-1/2 z-20 pointer-events-none">
          <span className="font-serif text-[12px] tracking-[0.18em] uppercase font-bold liquid-text-active">
            Posh Events
          </span>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="z-20 flex flex-col justify-center items-center gap-1.5 w-9 h-9 rounded-full
                     hover:bg-[#14203A]/8 transition-colors focus:outline-none"
        >
          <span className="w-5 h-[1.2px] bg-[#14203A] block" />
          <span className="w-5 h-[1.2px] bg-[#14203A] block" />
        </button>
      </motion.div>

      {/* ── FULL SCREEN MOBILE MENU ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 bg-[#FAF8F3] flex flex-col justify-between p-8 md:p-16 select-none"
          >
            {/* Header row */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-3">
                <img src="/logo.png" alt="Posh Events Logo" className="h-10 w-auto object-contain" />
                <span className="font-serif text-[#14203A] tracking-[0.2em] text-xs uppercase">
                  POSH EVENTS
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="relative w-8 h-8 flex items-center justify-center focus:outline-none"
              >
                <span className="absolute w-6 h-[1.5px] bg-[#14203A] rotate-45" />
                <span className="absolute w-6 h-[1.5px] bg-[#14203A] -rotate-45" />
              </button>
            </div>

            {/* Nav items */}
            <div className="flex flex-col items-start space-y-5 my-auto max-w-lg">
              <span className="font-sans text-[#8A6B2E] text-[10px] tracking-[0.25em] uppercase font-semibold">
                EXPERIENCE GRAND CONCEPTS
              </span>
              <div className="w-12 h-[1px] bg-gradient-to-r from-[#C9A25E] to-transparent mb-2" />
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + idx * 0.06, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex items-center"
                >
                  <a
                    href={link.target}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif text-4xl text-[#14203A] hover:text-[#C9A25E] transition-colors relative py-1 flex items-center"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#8A6B2E] transition-all duration-300 group-hover:w-full" />
                  </a>
                  {activeSection === link.id && <FoliageIndicator />}
                </motion.div>
              ))}
            </div>

            {/* Footer row */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end
                            w-full border-t border-[#14203A]/10 pt-5">
              <div className="mb-3 md:mb-0">
                <p className="font-sans text-[#14203A]/50 text-[10px] tracking-widest uppercase">Bengaluru, India</p>
                <p className="font-sans text-[#14203A] text-xs mt-1">sudee43348@gmail.com</p>
              </div>
              <p className="font-serif italic text-[#8A6B2E] text-sm">
                ✦ Blending South Indian heritage with global production value.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
