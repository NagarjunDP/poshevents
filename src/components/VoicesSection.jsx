import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Play, X, Sparkles } from 'lucide-react';
import { reviews, marqueeCelebrityPartners } from '../data/reviews';
import SectionHeader from './SectionHeader';

export default function VoicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeVideoModal, setActiveVideoModal] = useState(null);

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section
      id="voices"
      className="relative w-full py-24 md:py-32 bg-[#0E0A12] text-[#F7F1E6] overflow-hidden border-t border-gold/15"
    >
      {/* Background Ambience: Soft Spotlight Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-maroon-dark/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-gold/10 rounded-full blur-[110px] pointer-events-none" />

      {/* ── 1. SECTION HEADER ── */}
      <SectionHeader
        chapter="Celebrity & Royal Love"
        title="Celebrated by icons,"
        highlightWord="remembered forever."
        subtitle="Behind every magnificent celebration is the trust of families, artists, and leaders who demand perfection."
      />

      {/* ── 2. "LOVED BY" MARQUEE STRIP ── */}
      <div className="relative w-full overflow-hidden my-12 border-y border-gold/15 py-4 bg-ink-light/40">
        <div className="flex w-max animate-marquee-slow space-x-12 items-center">
          {[...marqueeCelebrityPartners, ...marqueeCelebrityPartners].map((partner, idx) => (
            <div key={idx} className="flex items-center space-x-6 text-ivory/60">
              <span className="text-xs sm:text-sm uppercase tracking-[0.25em] font-sans font-medium text-gold-light/80">
                {partner}
              </span>
              <Sparkles className="w-3.5 h-3.5 text-gold/60" />
            </div>
          ))}
        </div>
      </div>

      {/* ── 3. CINEMATIC CAROUSEL OF LARGE PORTRAIT CARDS ── */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-8 mt-10">
        <div className="relative bg-gradient-to-br from-ink-card via-ink-light to-maroon-dark/20 rounded-3xl border border-gold/30 p-6 sm:p-10 md:p-14 shadow-glass-dark overflow-hidden">
          {/* Giant Gold Quote Mark watermark */}
          <div className="absolute top-6 right-8 text-gold/10 pointer-events-none select-none">
            <Quote className="w-32 h-32 stroke-[1]" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10"
            >
              {/* Left Column: Portrait Card with Gold Hairline & Optional Video Tag */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden border border-gold/40 shadow-2xl group bg-ink-deep">
                  <img
                    src={reviews[activeIndex].image}
                    alt={reviews[activeIndex].name}
                    className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      // Fallback gradient placeholder if asset slot not yet populated
                      e.target.style.display = 'none';
                    }}
                  />
                  {/* Subtle vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80" />

                  {/* Optional Video Testimonial Overlay Button */}
                  {reviews[activeIndex].video && (
                    <button
                      onClick={() => setActiveVideoModal(reviews[activeIndex].video)}
                      className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors focus:outline-none"
                    >
                      <div className="w-14 h-14 rounded-full bg-gold/90 text-ink flex items-center justify-center shadow-gold-glow group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-current ml-0.5" />
                      </div>
                    </button>
                  )}

                  {/* Bottom Portrait Info */}
                  <div className="absolute bottom-4 inset-x-4 text-center">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-gold font-semibold">
                      {reviews[activeIndex].eventType}
                    </span>
                    <p className="text-xs text-ivory/80 font-light">
                      {reviews[activeIndex].location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Pull Quote & Speaker Details */}
              <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
                {/* Event Type & Role Badge */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full text-[11px] tracking-[0.2em] uppercase font-semibold text-gold bg-gold/10 border border-gold/30">
                    {reviews[activeIndex].eventType}
                  </span>
                  <span className="text-xs text-ivory/60 font-light">
                    {reviews[activeIndex].location}
                  </span>
                </div>

                {/* Big Italic Serif Pull Quote */}
                <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl text-ivory leading-snug font-normal italic">
                  "{reviews[activeIndex].quote}"
                </blockquote>

                {/* Speaker Info */}
                <div className="pt-4 border-t border-gold/20 flex flex-col">
                  <h4 className="font-display text-2xl text-gold-light tracking-wide font-normal">
                    {reviews[activeIndex].name}
                  </h4>
                  <p className="text-sm text-ivory/70 tracking-wider uppercase font-sans">
                    {reviews[activeIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-gold/15">
            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
                    idx === activeIndex
                      ? 'w-8 bg-gold'
                      : 'w-2 bg-gold/30 hover:bg-gold/60'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevReview}
                aria-label="Previous Review"
                className="w-11 h-11 rounded-full border border-gold/35 bg-ink-light/80 hover:bg-gold/20 flex items-center justify-center text-gold transition-colors focus:outline-none"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextReview}
                aria-label="Next Review"
                className="w-11 h-11 rounded-full border border-gold/35 bg-ink-light/80 hover:bg-gold/20 flex items-center justify-center text-gold transition-colors focus:outline-none"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Testimonial Modal if clicked */}
      <AnimatePresence>
        {activeVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button
              onClick={() => setActiveVideoModal(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full border border-gold/40 bg-gold/10 text-gold flex items-center justify-center hover:bg-gold/25"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-gold/40 shadow-2xl bg-black">
              <video controls autoPlay className="w-full h-full object-cover">
                <source src={activeVideoModal} type="video/mp4" />
              </video>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
