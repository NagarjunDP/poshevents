import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Flower2, Heart, Award, ArrowRight } from 'lucide-react';
import { media } from '../data/media';
import SectionHeader from './SectionHeader';

export default function TraditionalExpertise() {
  const [activeRitual, setActiveRitual] = useState(0);

  // TODO: Verify ritual nuances and specific regional variants (Kannada, Telugu, Tamil, Gowda, Iyer, etc.) with client
  const rituals = [
    {
      id: 'muhurtham',
      title: 'Auspicious Muhurtham',
      subtitle: 'Sacred Vedic Vows & Talambralu',
      desc: 'The pinnacle of the South Indian wedding ceremony, timed strictly according to Vedic astrology. Scented with camphor, sacred sandalwood paste, and cascading temple garlands.',
      image: media.traditional.muhurtham,
      elements: ['Vedic Agni Homa', 'Talambralu Blessing', 'Sacred Muhurtham Timing'],
    },
    {
      id: 'kashiyatra',
      title: 'Kashi Yatra Tradition',
      subtitle: 'Playful Heritage Procession',
      desc: 'A joyous ceremonial procession where the groom feigns departure to Kashi, warmly welcomed and persuaded by the bride’s father with silk umbrella, walking stick, and coconut.',
      image: media.traditional.kashiyatra,
      elements: ['Handcrafted Silk Umbrella', 'Silver Coconut Offering', 'Joyous Family Camaraderie'],
    },
    {
      id: 'saptapadi',
      title: 'Saptapadi & Mangalsutra',
      subtitle: 'The Seven Sacred Steps',
      desc: 'The sanctified vows taken around the sacred fire, binding two souls across seven lifetimes, followed by the tying of the sacred Mangalsutra (Thaali) with maternal blessings.',
      image: media.traditional.saptapadi,
      elements: ['Seven Eternal Vows', 'Pristine Yellow Thread / Gold Thaali', 'Maternal Family Blessings'],
    },
    {
      id: 'haldi',
      title: 'Haldi & Oorukai Revelry',
      subtitle: 'Turmeric Purification & Flower Rain',
      desc: 'Infusing pure kasturi manjal (wild turmeric), rose water, and marigold flower showers to bless the bride and groom with divine glow and auspicious family joy.',
      image: media.traditional.haldiRitual,
      elements: ['Kasturi Wild Turmeric', 'Fragrant Petal Showers', 'Traditional Brass Urulis'],
    },
  ];

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#FFF9F0] text-[#3D0A14] overflow-hidden border-t border-[#EEDDC8]">
      {/* Decorative Traditional Kolam / Lotus SVG Motif Background Watermark */}
      <div className="absolute top-10 right-10 w-96 h-96 opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-gold stroke-[0.8]">
          <circle cx="50" cy="50" r="45" />
          <path d="M50 5 Q35 35 5 50 Q35 65 50 95 Q65 65 95 50 Q65 35 50 5 Z" />
          <circle cx="50" cy="50" r="25" />
          <path d="M50 25 Q40 40 25 50 Q40 60 50 75 Q60 60 75 50 Q60 40 50 25 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        {/* Section Header */}
        <SectionHeader
          chapter="Rooted in Tradition"
          title="Sacred rituals curated with"
          highlightWord="ancestral reverence."
          subtitle="Honoring centuries of South Indian heritage—from jasmine-scented temple mandaps and brass deepams to Vedic sanctity."
          dark={false}
          className="mb-16 md:mb-20"
        />

        {/* ── SACRED RITUALS TABBED CAROUSEL & VISUAL SHOWCASE ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Ritual Tabs */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-gold-dark font-sans">
              SACRED CEREMONIES & PROTOCOLS
            </span>

            <div className="space-y-3 mt-4">
              {rituals.map((r, idx) => {
                const isActive = activeRitual === idx;
                return (
                  <div
                    key={r.id}
                    onClick={() => setActiveRitual(idx)}
                    className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border text-left ${
                      isActive
                        ? 'bg-white border-gold shadow-lg translate-x-2'
                        : 'bg-white/50 border-[#E2D7C3] hover:bg-white hover:border-gold/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-gold-dark font-semibold">
                        0{idx + 1}
                      </span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                      )}
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl text-ink font-normal mt-1">
                      {r.title}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-maroon font-semibold mt-0.5">
                      {r.subtitle}
                    </p>

                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="text-xs text-ink/75 font-light leading-relaxed mt-3 pt-3 border-t border-[#E2D7C3]"
                      >
                        {r.desc}
                      </motion.p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Large High-Resolution Ritual Image with Kolam Border */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-white shadow-2xl bg-ink">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeRitual}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.55 }}
                  className="w-full h-full relative"
                >
                  <img
                    src={rituals[activeRitual].image}
                    alt={rituals[activeRitual].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Bottom Elements pill tags */}
                  <div className="absolute bottom-6 inset-x-6 text-white text-left">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-gold font-semibold">
                      Ritual Nuance
                    </span>
                    <h4 className="font-display text-2xl text-ivory mt-0.5">
                      {rituals[activeRitual].title}
                    </h4>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {rituals[activeRitual].elements.map((el, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full text-[10px] tracking-wider uppercase font-semibold text-gold-light bg-black/60 backdrop-blur-md border border-gold/30"
                        >
                          {el}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
