import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import ReelsShowcase from '../components/ReelsShowcase';
import MomentsGallery from '../components/MomentsGallery';
import CelebVideoSlider from '../components/CelebVideoSlider';
import { media } from '../data/media';

export default function Portfolio({ navigate }) {
  return (
    <div className="w-full bg-[#FFF9F0] text-[#3D0A14]">
      {/* ── 1. CINEMATIC PAGE HERO ── */}
      <section className="relative w-full h-[55svh] md:h-[70svh] min-h-[420px] flex items-end justify-center overflow-hidden">
        <img
          src="/mandap.jpg"
          alt="Posh Events Celebrations Portfolio"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Gentle gradient at bottom behind text */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0) 60%)',
          }}
        />

        {/* Centered text */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center pb-12 md:pb-16 flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800,
              fontSize: 'clamp(44px, 8vw, 120px)',
              letterSpacing: '0.04em',
              textShadow: '0 4px 20px rgba(0,0,0,0.4)',
              lineHeight: 1.05,
            }}
            className="uppercase text-white text-center font-extrabold"
          >
            OUR PORTFOLIO
          </motion.h1>

          {/* Thin gold line underneath: 60px wide, 2px tall, #C9A24B, centered with margin-top 16px */}
          <div
            style={{
              width: '60px',
              height: '2px',
              backgroundColor: '#C9A24B',
              marginTop: '16px',
            }}
          />

          {/* Sub-line under the line: "WEDDINGS · SANGEETS · HALDI · MILESTONES" in Inter, 12px, font-weight 600, tracked out (letter-spacing 0.3em), color white/90, all caps, margin-top 16px */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.3em',
              marginTop: '16px',
            }}
            className="text-white/90 uppercase text-center"
          >
            WEDDINGS · SANGEETS · HALDI · MILESTONES
          </p>
        </div>
      </section>

      {/* ── 2. REAL WEDDINGS & REELS (+ LOAD MORE) ── */}
      <ReelsShowcase navigate={navigate} />

      {/* ── 3. MOMENTS WE CREATED (+ LOAD MORE) ── */}
      <MomentsGallery navigate={navigate} />

      {/* ── 4. CLOSING CTA BAND (MAROON, "Let's Create Your Story", gold button to /contact) ── */}
      <section className="py-20 bg-[#3D0A14] text-white text-center border-t border-gold/30">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl sm:text-4xl text-white font-normal"
            >
              Let's Create <span className="text-[#C9A24B] italic">Your Story</span>
            </h3>
            <p className="text-sm text-white/75 mt-1.5 font-light">
              Begin your bespoke celebration consultation with Sudee today.
            </p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            style={{
              height: '48px',
              padding: '0 32px',
              backgroundColor: '#C9A24B',
              borderRadius: '4px',
              letterSpacing: '0.22em',
              transition: 'all 300ms ease',
            }}
            className="shrink-0 text-xs uppercase font-bold text-[#3D0A14] hover:bg-white inline-flex items-center justify-center cursor-pointer shadow-lg"
          >
            <span>Plan Your Celebration</span>
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
}
