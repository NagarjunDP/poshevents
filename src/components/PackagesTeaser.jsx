import React from 'react';
import { motion } from 'framer-motion';
import { Crown, CheckCircle2, ArrowUpRight, Sparkles } from 'lucide-react';
import { packagesData, packagesFootnote } from '../data/packages';
import SectionHeader from './SectionHeader';

export default function PackagesTeaser({ navigate }) {
  return (
    <section className="relative w-full py-24 sm:py-32 bg-gradient-to-b from-[#FFF9F0] via-[#FAF3EA] to-[#FFF9F0] text-[#3D0A14] overflow-hidden border-t border-[#EEDDC8]">
      {/* Background Soft Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gold/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        {/* Section Header */}
        <SectionHeader
          chapter="Curated Packages & Investment"
          title="Transparent luxury, tailored to"
          highlightWord="your vision."
          subtitle="Explore our three signature celebration tiers. Every package is crafted with Southern heritage aesthetics and world-class execution."
          dark={false}
          className="mb-16 md:mb-20"
        />

        {/* ── THREE PACKAGE CARDS ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {packagesData.map((pkg) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-400 bg-white ${
                pkg.isPopular
                  ? 'border-2 border-gold shadow-[0_12px_40px_rgba(201,162,75,0.22)] -translate-y-2 lg:-translate-y-4 ring-4 ring-gold/10'
                  : 'border border-[#EEDDC8] shadow-[0_6px_25px_rgba(201,162,75,0.08)] hover:border-gold/60'
              }`}
            >
              {/* Most Loved Badge for Middle Card */}
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light text-white text-[11px] font-bold uppercase tracking-[0.2em] shadow-md flex items-center gap-1.5 whitespace-nowrap">
                  <Crown className="w-3.5 h-3.5" />
                  <span>{pkg.badge}</span>
                </div>
              )}

              <div>
                <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-gold-dark">
                  {pkg.tagline}
                </span>

                <h3 className="font-display text-2xl sm:text-3xl text-[#3D0A14] font-normal mt-2 leading-snug">
                  {pkg.title}
                </h3>

                {/* Price with Animated Gold Accent */}
                <div className="my-5 py-4 border-y border-[#F0E4D5] flex flex-col">
                  <span className="font-display text-3xl sm:text-4xl font-semibold text-[#B8860B] tracking-wide">
                    {pkg.price}
                  </span>
                  <span className="text-[10px] text-[#8C5D53] tracking-wider uppercase mt-1 font-sans font-medium">
                    Starting Investment
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#5A2A27] font-light leading-relaxed">
                  {pkg.description}
                </p>

                {/* Inclusions List */}
                <div className="space-y-3 mt-6 pt-6 border-t border-[#F0E4D5]">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8C5D53] block mb-2">
                    What is Curated:
                  </span>
                  {pkg.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#3D0A14]">
                      <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <span className="font-light leading-snug">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="mt-8 pt-6 border-t border-[#F0E4D5]">
                <button
                  onClick={() => navigate('/pricing')}
                  className={`w-full py-3.5 rounded-full text-xs uppercase tracking-[0.16em] font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                    pkg.isPopular
                      ? 'btn-gold-pill'
                      : 'border border-gold text-[#3D0A14] hover:bg-gold hover:text-white bg-[#FFF9F0]'
                  }`}
                >
                  <span>Select & Customize</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-center text-xs text-[#8C5D53] mt-12 max-w-2xl mx-auto font-light">
          {packagesFootnote}
        </p>
      </div>
    </section>
  );
}
