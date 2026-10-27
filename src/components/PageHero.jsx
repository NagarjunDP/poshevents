import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function PageHero({
  image,
  title,
  script,
  subtitle,
  ctaText,
  ctaLink,
  alt = '',
  navigate,
}) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);
      const listener = (e) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener?.('change', listener);
      return () => mediaQuery.removeEventListener?.('change', listener);
    }
  }, []);

  useEffect(() => {
    // Preload only current page's hero
    if (image) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = image;
      document.head.appendChild(link);
      return () => {
        if (link.parentNode) link.parentNode.removeChild(link);
      };
    }
  }, [image]);

  const handleCtaClick = () => {
    if (!ctaLink) return;
    if (ctaLink.startsWith('http://') || ctaLink.startsWith('https://')) {
      window.open(ctaLink, '_blank', 'noopener,noreferrer');
    } else if (ctaLink.startsWith('#')) {
      const el = document.querySelector(ctaLink);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (navigate) {
      navigate(ctaLink);
    } else {
      window.location.href = ctaLink;
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative w-full h-[62svh] md:h-[78svh] min-h-[480px] flex items-end overflow-hidden">
      {/* 1. Full-bleed background image - sharp, bright, vivid with zero wash/tint */}
      <img
        src={image}
        alt={alt || title}
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* 2. Left gradient overlay only */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.18) 45%, rgba(0,0,0,0) 70%)',
        }}
      />

      {/* 3. Thin bottom fade into the next ivory section */}
      <div
        className="absolute bottom-0 inset-x-0 h-16 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, #FFF9F0 0%, rgba(255, 249, 240, 0.4) 35%, rgba(255, 249, 240, 0) 100%)',
        }}
      />

      {/* 4. Text content, bottom-left, left-aligned, at 6vw (24px on mobile), pb-10vh */}
      <div
        className="relative z-10 w-full px-6 md:px-[6vw] pb-[10vh] text-left flex flex-col items-start"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start max-w-full"
        >
          {/* Line 1: H1 in Playfair Display, 700, uppercase, white */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: 'clamp(30px, 4.6vw, 64px)',
              letterSpacing: '0.03em',
              lineHeight: 1.1,
              textShadow: '0 3px 24px rgba(0,0,0,0.4)',
            }}
            className="text-white uppercase m-0 p-0 text-left"
          >
            {title}
          </motion.h1>

          {/* Line 2: Script font "Great Vibes" */}
          {script && (
            <motion.div
              variants={itemVariants}
              style={{
                fontFamily: "'Great Vibes', 'Playfair Display', cursive, italic",
                fontSize: 'clamp(36px, 5.4vw, 76px)',
                lineHeight: 1,
                textShadow: '0 3px 24px rgba(0,0,0,0.4)',
              }}
              className="text-white mt-1 text-left"
            >
              {script}
            </motion.div>
          )}

          {/* Subtitle: Inter, uppercase, 500, 12px (11px mobile), 0.28em tracking, white */}
          {subtitle && (
            <motion.p
              variants={itemVariants}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                letterSpacing: '0.28em',
                marginTop: '20px',
                maxWidth: '640px',
              }}
              className="text-white uppercase text-[11px] md:text-[12px] leading-relaxed text-left"
            >
              {subtitle}
            </motion.p>
          )}

          {/* One button: 48px high, padding 0 32px, 1px solid white border, radius 4px, transparent bg, white Playfair text 12px uppercase, letter-spacing 0.28em. Hover: gold fill #C9A24B, dark maroon text #3D0A14, 300ms. */}
          {ctaText && ctaLink && (
            <motion.div variants={itemVariants} className="mt-7 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleCtaClick}
                style={{
                  height: '48px',
                  padding: '0 32px',
                  border: '1px solid #FFFFFF',
                  borderRadius: '4px',
                  backgroundColor: 'transparent',
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '12px',
                  letterSpacing: '0.28em',
                  transition: 'background-color 300ms ease, color 300ms ease, border-color 300ms ease',
                }}
                className="text-white uppercase font-normal hover:bg-[#C9A24B] hover:text-[#3D0A14] hover:border-[#C9A24B] w-full max-w-[300px] sm:w-auto inline-flex items-center justify-center cursor-pointer text-center"
              >
                {ctaText}
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
