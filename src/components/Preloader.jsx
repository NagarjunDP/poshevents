import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Check if preloader was already shown in this session
    const hasLoaded = sessionStorage.getItem('posh_preloader_shown');
    if (hasLoaded) {
      setShow(false);
      if (onComplete) onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem('posh_preloader_shown', 'true');
      if (onComplete) onComplete();
    }, 1200); // Quick, smooth 1.2s introduction

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FFF9F0] text-[#3D0A14] select-none pointer-events-auto"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: 'easeOut' } }}
        >
          {/* Subtle warm radial sunshine glow */}
          <div className="absolute w-96 h-96 rounded-full bg-gold/15 blur-[80px] pointer-events-none" />

          {/* Gold SVG Monogram & Crest */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative flex flex-col items-center"
          >
            <div className="relative w-24 h-24 mb-5 flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full stroke-gold fill-none"
              >
                {/* Outer ornamental circle */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  strokeWidth="1.5"
                  strokeDasharray="283"
                  initial={{ strokeDashoffset: 283 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 0.9, ease: 'easeInOut' }}
                />
                {/* Inner decorative ring */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="38"
                  strokeWidth="0.8"
                  strokeDasharray="239"
                  strokeOpacity="0.4"
                  initial={{ strokeDashoffset: 239 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 0.8, delay: 0.15, ease: 'easeInOut' }}
                />
              </svg>

              {/* Logo Monogram */}
              <motion.img
                src="/logo.png"
                alt="Posh Events by Sudee"
                className="absolute w-16 h-16 object-contain"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.25 }}
              />
            </div>

            <motion.h1
              className="font-display text-2xl tracking-[0.25em] text-[#3D0A14] uppercase font-semibold"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              POSH EVENTS
            </motion.h1>

            <motion.p
              className="text-[11px] tracking-[0.35em] uppercase text-gold font-semibold mt-1 font-sans"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              BY SUDEE • BENGALURU
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
