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
import GallerySection from './components/GallerySection';
import SlidingTabs from './components/SlidingTabs';
import FeatureStrip from './components/FeatureStrip';
import FounderSection from './components/FounderSection';
import Testimonials from './components/Testimonials';
import StatsRibbon from './components/StatsRibbon';
import ContactSection from './components/ContactSection';
import InstagramGallery from './components/InstagramGallery';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Sync route path state
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Initialize Lenis Smooth Scroll and sync with GSAP
  useEffect(() => {
    if (loading) return; // Wait until loader finishes to initialize Lenis

    // Detect mobile to skip smooth scroll (improves performance on mobile)
    const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) || window.innerWidth < 768;

    const lenis = new Lenis({
      duration: isMobile ? 0.8 : 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: !isMobile,
      wheelMultiplier: 1,
      smoothTouch: false, // Always false — native touch scroll is faster
      touchMultiplier: 2,
      infinite: false,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Sync GSAP ScrollTrigger with Lenis scroll updates
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [loading, currentPath]);

  const handleLoaderComplete = () => {
    setLoading(false);
  };

  return (
    <div className="bg-[#F1ECE1] min-h-screen text-[#14203A]">
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
          
          {currentPath === '/gallery' ? (
            <main>
              <GallerySection />
            </main>
          ) : (
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
          )}

          <Footer />

          {/* Premium WhatsApp Sticky Contact FAB */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="fixed bottom-6 right-6 z-50 flex items-center group pointer-events-auto"
          >
            <style>{`
              @keyframes waGlow {
                0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6); }
                70% { box-shadow: 0 0 0 14px rgba(37, 211, 102, 0); }
                100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
              }
              .wa-glow-btn {
                animation: waGlow 2.2s infinite ease-in-out;
              }
            `}</style>

            {/* Left slide-out hover tooltip */}
            <span className="mr-3 px-4 py-2 rounded-full bg-[#14203A]/90 backdrop-blur-md text-[#FAF8F3] text-[10px] tracking-widest font-semibold uppercase border border-[#C9A25E]/40 shadow-2xl opacity-0 scale-90 translate-x-4 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap origin-right hidden md:inline-block">
              Chat on WhatsApp
            </span>

            {/* Pulsing FAB Action Button */}
            <a
              href="https://wa.me/917899243348"
              target="_blank"
              rel="noopener noreferrer"
              className="wa-glow-btn flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 text-white"
              aria-label="Chat on WhatsApp"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
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
