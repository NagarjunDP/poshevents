import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Play, X, ChevronDown } from 'lucide-react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import ParticleCanvas from './ParticleCanvas';
import { media } from '../data/media';

export default function Hero({ navigate }) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [heroVideo] = useState(
    () => media.hero.videos[Math.floor(Math.random() * media.hero.videos.length)]
  );
  const heroVideoRef = useRef(null);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (video) {
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  }, []);

  const headlineLines = [
    { text: 'Where every love story', highlight: false },
    { text: 'becomes a', highlight: false, goldWord: 'celebration.' },
  ];

  return (
    <section className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#0E0A12] select-none">
      {/* ── 1. CINEMATIC BACKGROUND VIDEO WITH FALLBACK POSTER ── */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={heroVideoRef}
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          preload="auto"
          poster={media.hero.poster}
          className="w-full h-full object-cover object-center scale-[1.03] transition-transform duration-1000 ease-out"
        >
          <source src={heroVideo} type="video/mp4" />
          <source src="/besthomevid_optimized.mp4" type="video/mp4" />
        </video>

        {/* Subtle bottom-only scrim for text readability — video stays bright */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent pointer-events-none" />
      </div>

      {/* ── 2. DRIFTING PETALS & SPARKLES CANVAS ── */}
      <ParticleCanvas count={40} />

      {/* ── 3. VERTICAL SIDE TEXT & SOCIAL STRIP (DESKTOP) ── */}
      <div className="hidden lg:flex flex-col items-center justify-between absolute left-8 inset-y-16 z-20 pointer-events-none">
        <div className="flex items-center gap-3 [writing-mode:vertical-rl] rotate-180">
          <span className="text-[10px] tracking-[0.35em] uppercase font-sans font-medium text-gold/70">
            EST. BENGALURU • SOUTH INDIA
          </span>
          <span className="h-10 w-[1px] bg-gold/30" />
        </div>

        <div className="pointer-events-auto flex flex-col items-center gap-4 text-ivory/60">
          <a
            href="https://www.instagram.com/posheventsbysudee/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-gold transition-colors"
          >
            <FaInstagram className="w-4 h-4" />
          </a>
          <a
            href="https://wa.me/919845012345"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-gold transition-colors"
          >
            <FaWhatsapp className="w-4 h-4" />
          </a>
          <span className="h-12 w-[1px] bg-gold/25" />
        </div>
      </div>

      {/* ── 4. MAIN HERO EDITORIAL CONTENT ── */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 sm:px-10 text-center flex flex-col items-center pt-24 pb-20">
        {/* Chapter Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/35 bg-[#0E0A12]/70 backdrop-blur-md mb-6 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="text-[11px] tracking-[0.28em] uppercase font-sans font-semibold text-gold-light">
            Chapter I • The Promise
          </span>
        </motion.div>

        {/* Headline Revealed Line by Line */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-ivory leading-[1.08] tracking-tight max-w-4xl">
          {headlineLines.map((line, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.25 + idx * 0.18,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="block"
            >
              {line.text}{' '}
              {line.goldWord && (
                <span className="gold-glow-word">{line.goldWord}</span>
              )}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg md:text-xl font-light text-ivory/80 leading-relaxed font-sans"
        >
          Luxury wedding planners in Bangalore, crafting timeless celebrations with{' '}
          <span className="text-gold-light font-normal">Southern heritage</span> and{' '}
          <span className="text-gold-light font-normal">global grandeur</span>.
        </motion.p>

        {/* Two Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          {/* Primary Gold Pill */}
          <button
            onClick={() => navigate('/contact')}
            className="btn-gold-pill group"
          >
            <span>Plan Your Celebration</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Ghost Video Story Button */}
          <button
            onClick={() => setIsVideoModalOpen(true)}
            className="btn-ghost-pill group"
          >
            <div className="w-7 h-7 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-gold transition-transform group-hover:scale-110">
              <Play className="w-3 h-3 fill-current ml-0.5" />
            </div>
            <span>Watch Our Stories</span>
          </button>
        </motion.div>
      </div>

      {/* ── 5. SCROLL CUE ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 inset-x-0 flex flex-col items-center justify-center pointer-events-none z-20"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-gold/70 font-sans mb-1">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-gold" />
        </motion.div>
      </motion.div>

      {/* ── 6. FULLSCREEN CINEMATIC VIDEO MODAL ("Watch Our Stories") ── */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
          >
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full border border-gold/40 bg-gold/10 hover:bg-gold/25 flex items-center justify-center text-gold transition-colors focus:outline-none z-10"
              aria-label="Close Story Video"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-gold/40 shadow-2xl bg-black"
            >
              <video
                controls
                autoPlay
                playsInline
                className="w-full h-full object-cover"
                poster={media.hero.poster}
              >
                <source src={media.hero.storyModalVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
