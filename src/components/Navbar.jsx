import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
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

  const { scrollY } = useScroll();

  // ScrollSpy to track active page section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
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

  // Directional hide/show toggler: ONLY active after the pill is fully formed (scrollY > 120)
  useEffect(() => {
    const handleScrollDirection = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 80);
      
      if (currentScrollY <= 120) {
        setVisible(true);
      } else {
        if (currentScrollY > lastScrollY) {
          setVisible(false); // scrolling down
        } else {
          setVisible(true); // scrolling up
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScrollDirection, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollDirection);
  }, [lastScrollY]);

  // Interpolation ranges for scroll progress (scrollY from 0 to 120px mapped to 0 to 1)
  const navProgress = useTransform(scrollY, [0, 120], [0, 1]);

  const widthVal = useTransform(navProgress, [0, 1], ['100%', isMobile ? '90%' : '650px']);
  const maxWidthVal = useTransform(navProgress, [0, 1], [isMobile ? '100%' : '1280px', isMobile ? '90%' : '650px']);
  const topVal = useTransform(navProgress, [0, 1], ['0px', '16px']);
  const radiusVal = useTransform(navProgress, [0, 1], ['0px', '999px']);
  
  // Transition background from fully transparent to solid light cream-white
  const bgVal = useTransform(navProgress, [0, 1], ['rgba(250, 248, 243, 0)', 'rgba(250, 248, 243, 0.9)']);
  const blurVal = useTransform(navProgress, [0, 1], ['blur(0px)', 'blur(20px)']);
  
  // Responsive padding interpolations
  const pyVal = useTransform(navProgress, [0, 1], [isMobile ? '16px' : '24px', '8px']);
  const pxVal = useTransform(navProgress, [0, 1], [isMobile ? '20px' : '32px', '16px']);

  // Crossfade Logo Wordmark out slightly before the pill finishes morphing
  const wordmarkWidth = useTransform(navProgress, [0, 0.5], ['95px', '0px']);
  const wordmarkOpacity = useTransform(navProgress, [0, 0.4], [1, 0]);
  const logoHeight = useTransform(navProgress, [0, 1], [isMobile ? 44 : 56, 36]);

  // Interpolated light-themed text, logo brightness, and hamburger colors
  const textColorVal = useTransform(navProgress, [0, 1], ['#FAF8F3', '#14203A']);
  const activeColorVal = useTransform(navProgress, [0, 1], ['#E3C285', '#C9A25E']);
  const brightnessVal = useTransform(navProgress, [0, 1], ['brightness(1.2)', 'brightness(1.0)']);
  const hamburgerColorVal = useTransform(navProgress, [0, 1], ['#FAF8F3', '#14203A']);

  // Opacity transitions
  const borderOpacity = useTransform(navProgress, [0.8, 1], [0, 1]);
  const enquireOpacity = useTransform(navProgress, [0, 0.5], [1, 0]);
  const enquireScale = useTransform(navProgress, [0, 0.5], [1, 0.8]);
  const hamburgerOpacity = useTransform(navProgress, [0.4, 0.8], [isMobile ? 1 : 0, 1]);

  // Easing spring for directional hiding
  const yOffsetSpring = useSpring(visible ? 0 : -120, { stiffness: 300, damping: 30 });

  const navLinks = [
    { label: 'Home', target: '#home', id: 'home' },
    { label: 'About', target: '#about', id: 'about' },
    { label: 'Services', target: '#celebrations', id: 'celebrations' },
    { label: 'Portfolio', target: '#showcase', id: 'showcase' },
    { label: 'Milestones', target: '#weddings', id: 'weddings' },
    { label: 'Contact', target: '#contact', id: 'contact' }
  ];

  const FoliageIndicator = () => (
    <motion.svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className="inline-block ml-3 w-5 h-5 text-[#8A6B2E]"
    >
      <motion.path
        d="M2,18 C8,16 12,12 18,6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />
      <motion.path
        d="M12,12 C13,10 16,9 17,11 C15,13 13,13 12,12 Z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="currentColor"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
      />
      <motion.path
        d="M7,15 C8,13 11,12 12,14 C10,16 8,16 7,15 Z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="currentColor"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
      />
    </motion.svg>
  );

  return (
    <>
      <style>{`
        @keyframes liquidText {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
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
      <motion.div
        style={{
          x: '-50%', // Centering fix
          y: yOffsetSpring,
          width: widthVal,
          maxWidth: maxWidthVal,
          top: topVal,
          borderRadius: radiusVal,
          backgroundColor: bgVal,
          backdropFilter: blurVal,
          paddingTop: pyVal,
          paddingBottom: pyVal,
          paddingLeft: pxVal,
          paddingRight: pxVal
        }}
        className="fixed left-1/2 z-40 flex items-center justify-between shadow-2xl pointer-events-auto overflow-visible"
      >
        {/* Shimmering Gold Border Layer (z-0 Sibling, prevents negative z-index background concealment) */}
        <motion.div 
          style={{ 
            opacity: borderOpacity,
            borderRadius: radiusVal
          }}
          className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#8A6B2E] via-[#C9A25E] to-[#E3C285] bg-[length:200%_200%] animate-[shimmerBorder_8s_linear_infinite] z-0"
        />

        {/* Inner Light Background Fill layer (z-10 Sibling, leaves 1.5px of border showing) */}
        <motion.div 
          style={{ 
            opacity: borderOpacity,
            borderRadius: radiusVal 
          }}
          className="absolute inset-[1.5px] bg-[#FAF8F3]/95 backdrop-blur-md z-10 pointer-events-none"
        />

        {/* Under-pill gold rule motif */}
        <motion.div 
          style={{ opacity: borderOpacity }}
          className="absolute -bottom-1 left-[-5%] right-[-5%] h-[1px] bg-gradient-to-r from-transparent via-[#C9A25E] to-transparent pointer-events-none opacity-40 z-0"
        />

        {/* Middle: Centered Mobile "Posh Events" typography with liquid gold fill (visible on mobile only) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none md:hidden z-30 w-max">
          <span className="font-serif text-[13px] tracking-[0.18em] uppercase font-bold text-center liquid-text-active">
            Posh Events
          </span>
        </div>

        {/* Logo and Wordmark Area (z-20 to sit on top of backdrops) */}
        <div className="flex items-center space-x-3 z-20">
          <motion.img 
            src="/logo.png" 
            alt="Posh Events" 
            style={{ height: logoHeight, filter: brightnessVal }}
            className="w-auto object-contain" 
          />
          <motion.span 
            style={{ 
              width: isMobile ? '0px' : wordmarkWidth,
              opacity: isMobile ? 0 : wordmarkOpacity,
              color: textColorVal
            }}
            className="hidden md:inline-block font-serif tracking-[0.2em] font-semibold text-xs md:text-sm uppercase translate-y-[1px] overflow-hidden whitespace-nowrap"
          >
            POSH EVENTS
          </motion.span>
        </div>

        {/* Centered navigation links inside the pill (z-20) */}
        <nav className="hidden md:flex items-center space-x-6 z-20">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <motion.a
                key={link.label}
                href={link.target}
                style={{ 
                  color: isActive ? activeColorVal : textColorVal 
                }}
                whileHover={{ scale: 1.05, y: -1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="text-[10px] font-sans tracking-[0.18em] uppercase transition-colors relative py-1"
              >
                {link.label}
              </motion.a>
            );
          })}
        </nav>

        {/* Right Action Side: Enquire button & Hamburger Toggle (z-20) */}
        <div className="flex items-center space-x-4 z-20">
          
          {/* Header Enquire Button (visible in transparent state only) */}
          <motion.a
            href="#contact"
            style={{ opacity: enquireOpacity, scale: enquireScale, pointerEvents: scrolled ? 'none' : 'auto' }}
            className="hidden md:inline-block px-6 py-2 bg-gradient-to-r from-[#8A6B2E] to-[#E3C285] text-[#14203A] font-sans font-semibold text-xs tracking-[0.2em] uppercase rounded-full hover:shadow-lg transition-all duration-300"
          >
            Enquire
          </motion.a>

          {/* Hamburger Menu Toggle (Symmetric & Centered) */}
          <motion.button
            onClick={() => setMobileMenuOpen(true)}
            style={{ opacity: hamburgerOpacity, pointerEvents: (scrolled || isMobile) ? 'auto' : 'none' }}
            className="flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-full focus:outline-none hover:bg-black/5 transition-colors"
          >
            <motion.span style={{ backgroundColor: hamburgerColorVal }} className="w-5 h-[1.2px]" />
            <motion.span style={{ backgroundColor: hamburgerColorVal }} className="w-5 h-[1.2px]" />
          </motion.button>
        </div>

      </motion.div>

      {/* Full Screen Menu Overlay - Refined Light Color Palette */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-[#FAF8F3] flex flex-col justify-between p-8 md:p-16 select-none"
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-4">
                <img src="/logo.png" alt="Posh Events Logo" className="h-12 w-auto object-contain" />
                <span className="font-serif text-[#14203A] tracking-[0.2em] text-xs uppercase translate-y-[2px]">
                  POSH EVENTS
                </span>
              </div>
              
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="relative w-8 h-8 flex items-center justify-center focus:outline-none"
              >
                <span className="absolute w-6 h-[1.5px] bg-[#14203A] transform rotate-45" />
                <span className="absolute w-6 h-[1.5px] bg-[#14203A] transform -rotate-45" />
              </button>
            </div>

            <div className="flex flex-col justify-center items-start space-y-6 my-auto max-w-lg">
              <span className="font-sans text-[#8A6B2E] text-[10px] tracking-[0.25em] uppercase font-semibold">
                EXPERIENCE GRAND CONCEPTS
              </span>
              <div className="w-12 h-[1px] bg-gradient-to-r from-[#C9A25E] to-transparent mb-4" />
              
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex items-center w-full"
                >
                  <a
                    href={link.target}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif text-4xl md:text-6xl text-[#14203A] hover:text-[#C9A25E] transition-all relative py-2 flex items-center"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#8A6B2E] transition-all duration-300 group-hover:w-full" />
                  </a>

                  {activeSection === link.id && <FoliageIndicator />}
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full border-t border-[#14203A]/10 pt-6">
              <div className="mb-4 md:mb-0">
                <p className="font-sans text-[#14203A]/60 text-[10px] tracking-widest uppercase">
                  Bengaluru, India
                </p>
                <p className="font-sans text-[#14203A] text-xs mt-1">
                  sudee43348@gmail.com
                </p>
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
