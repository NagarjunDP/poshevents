import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Crown, MapPin, ArrowUpRight } from 'lucide-react';
import { media } from '../data/media';
import SectionHeader from './SectionHeader';

export default function LuxuryWorks({ navigate }) {
  const works = media.luxuryWorks;

  return (
    <section className="relative w-full py-28 md:py-36 bg-[#0E0A12] text-[#F7F1E6] overflow-hidden border-t border-gold/15">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-maroon-dark/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        {/* Section Header */}
        <SectionHeader
          chapter="Chapter VI • Luxury Works"
          title="Monuments of love, crafted with"
          highlightWord="pure opulence."
          subtitle="A full-bleed editorial retrospective of our most grandiose palace installations and architectural spectacles across South India."
          dark={true}
          className="mb-16 md:mb-20"
        />

        {/* ── OPULENT WORKS SHOWCASE (EDITORIAL ASYMMETRY) ── */}
        <div className="space-y-20 lg:space-y-28">
          {works.map((item, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <div
                key={item.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Large Overlapping Image Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className={`lg:col-span-7 ${isEven ? 'lg:order-2' : ''}`}
                >
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden border border-gold/40 shadow-glass-dark group bg-ink-card">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-60" />

                    {/* Venue Badge */}
                    <div className="absolute top-5 left-5 px-3.5 py-1 rounded-full text-[10px] tracking-wider uppercase font-semibold text-gold bg-ink/70 backdrop-blur-md border border-gold/30 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.venue}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Editorial Narrative */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className={`lg:col-span-5 flex flex-col justify-center text-left space-y-4 ${
                    isEven ? 'lg:order-1' : ''
                  }`}
                >
                  <div className="flex items-center gap-2 text-gold font-mono text-xs">
                    <Crown className="w-3.5 h-3.5" />
                    <span>OPULENT ARCHIVE 0{idx + 1}</span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl text-ivory font-normal leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs uppercase tracking-[0.2em] text-gold-light/90 font-semibold font-sans">
                    {item.venue}
                  </p>

                  <p className="text-sm sm:text-base text-ivory/70 font-light leading-relaxed pt-2">
                    {item.desc}
                  </p>

                  <div className="pt-4">
                    <button
                      onClick={() => navigate('/portfolio')}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-gold hover:text-gold-light transition-colors group"
                    >
                      <span>Explore Archive Details</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
