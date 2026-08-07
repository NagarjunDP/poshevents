import React from 'react';
import { motion } from 'framer-motion';
import { FadeUp } from './FadeUp';
import { OptimizedImage } from './OptimizedImage';

export default function SlidingTabs() {
  return (
    <section id="weddings" className="py-20 md:py-32 bg-[#14203A] relative overflow-hidden border-b border-[#C9A25E]/20">
      
      {/* ── Section Header ── */}
      <div className="container mx-auto px-6 md:px-12 text-center mb-16 md:mb-24 relative z-10">
        <FadeUp>
          <span className="font-sans text-[#C9A25E] tracking-[0.25em] text-xs font-semibold uppercase mb-3 block">
            THE DUALITY OF POSH
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#FAF8F3] mb-4 font-normal">
            Timeless Tradition. Modern Luxury.
          </h2>
          <p className="font-sans text-[#F1ECE1]/70 text-sm md:text-base max-w-2xl mx-auto tracking-wide leading-relaxed">
            Posh Events seamlessly blends deeply rooted heritage rituals with monumental contemporary staging.
          </p>
          <div className="flex items-center justify-center mt-6 w-32 h-[1px] mx-auto bg-gradient-to-r from-transparent via-[#C9A25E]/60 to-transparent" />
        </FadeUp>
      </div>

      {/* ── Editorial Stacked Layout ── */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col gap-20 md:gap-28 relative z-10">
        
        {/* ── 1. TRADITIONAL HERITAGE CARD ── */}
        <FadeUp>
          <div className="group relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-[#C9A25E]/20 shadow-2xl bg-[#0E1520]">
            {/* Image Container with Soft Scroll Scale */}
            <div className="w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden relative">
              <motion.div
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full"
              >
                <OptimizedImage
                  src="/Rooted in tradition, elevated with luxury ✨A premium coconut leaf baby shower decor curated with.jpg"
                  alt="Traditional Celebrations - Handcrafted Heritage"
                  className="w-full h-full object-cover origin-center transition-transform duration-1000 group-hover:scale-[1.03]"
                />
              </motion.div>

              {/* Soft Gradient Overlay at bottom for readable text */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1520] via-[#0E1520]/40 to-transparent pointer-events-none" />
              
              {/* Floating Content Block (Bottom) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-[#FAF8F3] z-10">
                <span className="font-sans text-[#E3C285] tracking-[0.25em] text-[10px] md:text-xs font-semibold uppercase mb-2 block">
                  TRADITIONAL HERITAGE
                </span>
                <h3 className="font-serif text-2xl md:text-4xl lg:text-5xl mb-3 font-normal tracking-wide text-[#FAF8F3]">
                  Handcrafted Heritage
                </h3>
                <p className="font-sans text-xs md:text-sm text-[#F1ECE1]/80 max-w-xl leading-relaxed tracking-wide">
                  Authentic rituals and South Indian heritage brought to life with timeless floral artistry and sacred mandap setups.
                </p>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ── Subtle Centered Monogram Divider ── */}
        <div className="flex items-center justify-center gap-4 py-2">
          <div className="w-20 md:w-32 h-[1px] bg-gradient-to-r from-transparent to-[#C9A25E]/40" />
          <span className="font-serif text-[#C9A25E] text-xs italic tracking-widest select-none">❖</span>
          <div className="w-20 md:w-32 h-[1px] bg-gradient-to-l from-transparent to-[#C9A25E]/40" />
        </div>

        {/* ── 2. CONTEMPORARY DESIGN CARD ── */}
        <FadeUp>
          <div className="group relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-[#C9A25E]/20 shadow-2xl bg-[#0E1520]">
            {/* Image Container with Soft Scroll Scale */}
            <div className="w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden relative">
              <motion.div
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full"
              >
                <OptimizedImage
                  src="/welcomeboard2.png"
                  alt="Modern Productions - Contemporary Staging"
                  className="w-full h-full object-cover origin-center transition-transform duration-1000 group-hover:scale-[1.03]"
                />
              </motion.div>

              {/* Soft Gradient Overlay at bottom for readable text */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1520] via-[#0E1520]/40 to-transparent pointer-events-none" />
              
              {/* Floating Content Block (Bottom) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-[#FAF8F3] z-10">
                <span className="font-sans text-[#E3C285] tracking-[0.25em] text-[10px] md:text-xs font-semibold uppercase mb-2 block">
                  CONTEMPORARY DESIGN
                </span>
                <h3 className="font-serif text-2xl md:text-4xl lg:text-5xl mb-3 font-normal tracking-wide text-[#FAF8F3]">
                  Modern Productions
                </h3>
                <p className="font-sans text-xs md:text-sm text-[#F1ECE1]/80 max-w-xl leading-relaxed tracking-wide">
                  Immersive staging, geometric architectural framing, and high-fashion editorial styling for grand scale celebrations.
                </p>
              </div>
            </div>
          </div>
        </FadeUp>

      </div>

    </section>
  );
}
