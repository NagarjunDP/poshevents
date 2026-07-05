import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger globally
gsap.registerPlugin(ScrollTrigger);

// Components
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesGrid from './components/ServicesGrid';
import BentoShowcase from './components/BentoShowcase';
import SlidingTabs from './components/SlidingTabs';
import FeatureStrip from './components/FeatureStrip';
import FounderSection from './components/FounderSection';
import Testimonials from './components/Testimonials';
import StatsRibbon from './components/StatsRibbon';
import ContactSection from './components/ContactSection';
import InstagramGallery from './components/InstagramGallery';
import Footer from './components/Footer';

// Premium Custom Cursor Component for Desktop
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isHoverable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.closest('[data-hover-glow="true"]');
      
      setHovered(!!isHoverable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="hidden lg:block">
      {/* Dot Core */}
      <div 
        className="fixed pointer-events-none z-50 w-2 h-2 rounded-full bg-[#E3C285] mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      {/* Expanding Ring */}
      <div 
        className={`fixed pointer-events-none z-50 rounded-full border border-[#E3C285] mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
          hovered ? 'w-12 h-12 bg-[#E3C285]/10 border-[#E3C285]' : 'w-6 h-6 border-[#E3C285]/50'
        }`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  // Initialize Lenis Smooth Scroll and sync with GSAP
  useEffect(() => {
    if (loading) return; // Wait until loader finishes to initialize Lenis

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Sync GSAP ScrollTrigger with Lenis scroll updates
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, [loading]);

  const handleLoaderComplete = () => {
    setLoading(false);
  };

  return (
    <div className="bg-[#F1ECE1] min-h-screen text-[#14203A]">
      {/* Luxury Custom Cursor (hidden on touch screens) */}
      <CustomCursor />

      <AnimatePresence>
        {loading && (
          <Loader onComplete={handleLoaderComplete} />
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Navbar />
          <main>
            <Hero />
            <AboutSection />
            <ServicesGrid />
            <BentoShowcase />
            <SlidingTabs />
            <FeatureStrip />
            <FounderSection />
            <Testimonials />
            <StatsRibbon />
            <ContactSection />
            <InstagramGallery />
          </main>
          <Footer />

          {/* Premium WhatsApp Sticky Contact FAB */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="fixed bottom-6 right-6 z-50 pointer-events-auto"
          >
            {/* Call / WhatsApp FAB */}
            <a 
              href="https://wa.me/917899243348"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 rounded-full bg-[#14203A] border border-[#C9A25E] shadow-2xl text-[#FAF8F3] hover:bg-[#C9A25E] hover:text-[#14203A] transition-all duration-300 transform hover:scale-110 active:scale-95"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.008.01c-6.61 0-11.948 5.338-11.948 11.948 0 2.097.546 4.142 1.587 5.946l-1.687 6.163 6.309-1.654c1.751.953 3.719 1.454 5.724 1.455 6.612 0 11.948-5.337 11.948-11.948C24.015 5.348 18.679.01 12.008.01zm6.07 16.924c-.25.702-1.24 1.282-1.72 1.344-.48.062-.97.108-3.08-.727-2.7-1.074-4.44-3.829-4.57-4.004-.13-.175-1.09-1.455-1.09-2.781 0-1.326.68-1.98.93-2.24.25-.26.54-.32.72-.32.18 0 .36 0 .51.01.16 0 .37-.06.58.45.22.52.75 1.83.81 1.96.06.13.1.28.01.46-.09.18-.2.39-.39.61-.19.22-.4.49-.57.66-.19.19-.39.4-.17.78.22.38.98 1.62 2.1 2.62 1.44 1.29 2.66 1.69 3.04 1.88.38.19.6.16.82-.1.22-.26.96-1.12 1.22-1.5.26-.38.52-.32.88-.19.36.13 2.27 1.07 2.64 1.25.37.18.62.27.71.43.09.16.09.92-.16 1.62z" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      )}
      </div>
    );
  }

export default App;
