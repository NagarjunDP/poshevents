import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

// Global Visual & Luxury Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import ScrollProgress from './components/ScrollProgress';
import WhatsAppDock from './components/WhatsAppDock';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import WeddingPlanners from './pages/WeddingPlanners';
import DestinationWeddings from './pages/DestinationWeddings';
import EventManagement from './pages/EventManagement';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');

  // SPA navigation helper
  const navigate = (path) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Sync route on browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Initialize Lenis Smooth Scrolling (Fast, smooth, no delay)
  useEffect(() => {
    const isMobile =
      /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) || window.innerWidth < 768;

    if (isMobile) {
      // Use buttery native momentum scrolling on mobile to eliminate delay
      return;
    }

    const lenis = new Lenis({
      duration: 0.85,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -8 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.05,
      smoothTouch: false,
      touchMultiplier: 1.5,
      infinite: false,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Route Resolver
  const renderCurrentPage = () => {
    const cleanPath =
      currentPath.length > 1 && currentPath.endsWith('/')
        ? currentPath.slice(0, -1)
        : currentPath;

    switch (cleanPath) {
      case '/':
        return <Home navigate={navigate} />;
      case '/about':
        return <About navigate={navigate} />;
      case '/portfolio':
      case '/gallery':
        return <Portfolio navigate={navigate} />;
      case '/wedding-planners-in-bangalore':
        return <WeddingPlanners navigate={navigate} />;
      case '/destination-weddings':
      case '/destination-wedding-guide':
        return <DestinationWeddings navigate={navigate} />;
      case '/event-management-bangalore':
        return <EventManagement navigate={navigate} />;
      case '/pricing':
        return <Pricing navigate={navigate} />;
      case '/admin':
        return <Admin navigate={navigate} />;
      case '/contact':
        return <Contact navigate={navigate} />;
      default:
        return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FFF9F0] text-[#3D0A14] flex flex-col justify-between selection:bg-[#F2A900]/25 selection:text-[#3D0A14]">
      {/* Luxury Warm Preloader with Gold Monogram */}
      <Preloader />

      {/* Gold Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Floating Glass Pill Navbar with Fullscreen Split Overlay */}
      <Navbar currentPath={currentPath} navigate={navigate} />

      {/* Main Page Content */}
      <main className="flex-1 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPath}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {renderCurrentPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating Action Dock (Mobile) & WhatsApp Concierge (Desktop) */}
      <WhatsAppDock navigate={navigate} />

      {/* Global Luxury Footer */}
      <Footer navigate={navigate} />
    </div>
  );
}

export default App;
