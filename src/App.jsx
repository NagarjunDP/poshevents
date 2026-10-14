import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger globally
gsap.registerPlugin(ScrollTrigger);

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import WeddingPlanners from './pages/WeddingPlanners';
import EventManagement from './pages/EventManagement';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');

  // Navigate helper for SPA
  const navigate = (path) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sync route path on browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const isMobile =
      /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) || window.innerWidth < 768;

    const lenis = new Lenis({
      duration: isMobile ? 0.8 : 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: !isMobile,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Sync GSAP ScrollTrigger with Lenis
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [currentPath]);

  // Route Resolver
  const renderCurrentPage = () => {
    // Normalise trailing slash
    const cleanPath = currentPath.length > 1 && currentPath.endsWith('/')
      ? currentPath.slice(0, -1)
      : currentPath;

    switch (cleanPath) {
      case '/':
        return <Home navigate={navigate} />;
      case '/about':
        return <About navigate={navigate} />;
      case '/portfolio':
      case '/gallery': // Alias for legacy compatibility
        return <Portfolio navigate={navigate} />;
      case '/wedding-planners-in-bangalore':
        return <WeddingPlanners navigate={navigate} />;
      case '/event-management-bangalore':
        return <EventManagement navigate={navigate} />;
      case '/pricing':
        return <Pricing navigate={navigate} />;
      case '/destination-wedding-guide':
      case '/destination-weddings':
        // Immediate SPA redirect for legacy destination wedding links
        setTimeout(() => navigate('/wedding-planners-in-bangalore'), 0);
        return <WeddingPlanners navigate={navigate} />;
      case '/contact':
        return <Contact navigate={navigate} />;
      default:
        return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="bg-[#F5F0E8] min-h-screen text-[#2B2B2B] flex flex-col justify-between selection:bg-[#B08D57] selection:text-white">
      {/* Global Sticky Luxury Header with Floating Action Buttons */}
      <Navbar currentPath={currentPath} navigate={navigate} />

      {/* Main Page Content with Page Fade Transition */}
      <main className="flex-1 w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPath}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {renderCurrentPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Luxury Footer */}
      <Footer navigate={navigate} />
    </div>
  );
}

export default App;
