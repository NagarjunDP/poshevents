import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Loader({ onComplete }) {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    const text = "POSH EVENTS | BY SUDEE";
    setLetters(text.split(''));

    // Trigger onComplete after the entrance timeline finishes to slide up and mount the site
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 2800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <>
      <style>{`
        @keyframes loaderTextGlow {
          0%, 100% {
            text-shadow: 0 0 6px rgba(201, 162, 94, 0.15);
          }
          50% {
            text-shadow: 0 0 14px rgba(201, 162, 94, 0.4), 0 0 22px rgba(227, 194, 133, 0.2);
          }
        }
        .loader-text-glowing {
          animation: loaderTextGlow 3s ease-in-out infinite alternate;
        }
      `}</style>
      <motion.div
        initial={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cream"
      >
        <div className="flex flex-col items-center">
          {/* Logo Image */}
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            src="/logo.png"
            alt="Posh Events Logo"
            className="w-40 h-auto mb-6 object-contain"
          />

          {/* Text */}
          <div className="overflow-hidden flex">
            {letters.map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5 + index * 0.05, duration: 0.5 }}
                className={`font-serif tracking-widest text-navy loader-text-glowing ${char === '|' ? 'mx-3 text-gold' : ''}`}
              >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </div>

        {/* Gold Rules */}
        <div className="flex items-center justify-center mt-4 w-64 space-x-4">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
            className="h-px bg-gold flex-1 origin-right"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
            className="h-px bg-gold flex-1 origin-left"
          />
        </div>
      </div>
    </motion.div>
  </>
  );
}
