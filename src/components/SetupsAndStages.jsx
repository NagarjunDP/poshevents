import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Layers, Sliders, Maximize2 } from 'lucide-react';
import { media } from '../data/media';
import SectionHeader from './SectionHeader';

export default function SetupsAndStages() {
  const [activeCategory, setActiveCategory] = useState('Stages');
  const setups = media.setupsAndStages;

  const currentItem =
    setups.items.find((item) => item.category === activeCategory) || setups.items[0];

  return (
    <section className="relative w-full py-28 md:py-36 bg-[#0B080F] text-[#F7F1E6] overflow-hidden border-t border-gold/15">
      {/* Dramatic Spotlight Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-gold/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        {/* Section Header */}
        <SectionHeader
          chapter="Chapter VII • Luxury Setups & Stages"
          title="Architectural grandeur, engineered to"
          highlightWord="mesmerize."
          subtitle="Explore our custom stage designs, temple mandaps, ceremonial gateways, and acoustic illumination rigs."
          dark={true}
          className="mb-12"
        />

        {/* ── INTERACTIVE CATEGORY TABS (Stages / Mandaps / Entrances / Lighting / Floral) ── */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-14">
          {setups.categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] font-sans font-semibold transition-all duration-300 focus:outline-none ${
                  isSelected
                    ? 'text-ink font-bold shadow-gold-glow'
                    : 'text-ivory/70 hover:text-gold-light bg-ink-light/50 border border-gold/25'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="setupCategoryPill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* ── IMMERSIVE SPOTLIGHT REVEAL CARD ── */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border-2 border-gold/40 shadow-glass-dark bg-ink-card">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.55 }}
                className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden"
              >
                <img
                  src={currentItem.image}
                  alt={currentItem.title}
                  className="w-full h-full object-cover filter brightness-[0.92]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0A12] via-[#0E0A12]/30 to-transparent" />

                {/* Bottom Architectural Specs Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6 text-left">
                  <div>
                    <span className="text-[10px] tracking-[0.28em] uppercase text-gold font-bold">
                      {currentItem.category} • {currentItem.venue}
                    </span>
                    <h3 className="font-display text-3xl sm:text-4xl text-ivory font-normal mt-1">
                      {currentItem.title}
                    </h3>
                    <p className="text-xs text-gold-light/90 font-mono mt-2 flex items-center gap-2">
                      <Sliders className="w-3.5 h-3.5" />
                      <span>{currentItem.specs}</span>
                    </p>
                  </div>

                  <div className="shrink-0">
                    <span className="px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider text-ink bg-gold shadow-sm">
                      Bespoke Fabrication
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
