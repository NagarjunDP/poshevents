import React from 'react';
import { motion } from 'framer-motion';
import { Crown, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { packagesData, packagesFootnote } from '../data/packages';
import { media } from '../data/media';
import SectionHeader from '../components/SectionHeader';
import PageHero from '../components/PageHero';

export default function Pricing({ navigate }) {
  return (
    <div className="w-full bg-[#FFF9F0] text-[#3D0A14]">
      {/* ── 1. CINEMATIC HERO ── */}
      <PageHero
        image="/media/heroes/packages-hero.webp"
        title="WEDDING PLANNING"
        script="Packages"
        subtitle="TRANSPARENT PACKAGES FOR EVERY SCALE OF CELEBRATION"
        ctaText="GET A CUSTOM QUOTE"
        ctaLink="/contact"
        alt="Transparent Luxury Wedding Planning Packages in Bangalore"
        navigate={navigate}
      />

      {/* ── 2. THREE PACKAGE CARDS ── */}
      <section className="py-20 lg:py-28 bg-white text-[#3D0A14] border-t border-[#EEDDC8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <SectionHeader
            chapter="Our Three Signature Tiers"
            title="Curated packages designed for"
            highlightWord="your celebration."
            subtitle="Explore our transparent tiers below. Inclusions are customizable to your vision and venue requirements."
            dark={false}
            className="mb-16 md:mb-20"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {packagesData.map((pkg) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-400 bg-[#FFF9F0] ${
                  pkg.isPopular
                    ? 'border-2 border-gold shadow-[0_12px_45px_rgba(201,162,75,0.22)] -translate-y-2 lg:-translate-y-4 ring-4 ring-gold/10'
                    : 'border border-[#EEDDC8] shadow-[0_6px_25px_rgba(201,162,75,0.08)] hover:border-gold'
                }`}
              >
                {/* Most Loved Badge */}
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

                  {/* Price */}
                  <div className="my-5 py-3 border-y border-[#EEDDC8] flex flex-col">
                    <span className="font-display text-3xl sm:text-4xl font-semibold text-[#B8860B] tracking-wide">
                      {pkg.price}
                    </span>
                    <span className="text-[10px] tracking-wider uppercase mt-1 font-sans text-[#8C5D53] font-medium">
                      Starting Investment
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5A2A27] font-light leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Inclusions List */}
                  <div className="space-y-3 mt-6 pt-6 border-t border-[#EEDDC8]">
                    {pkg.inclusions.map((inc, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs leading-relaxed text-left">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span className="text-[#3D0A14] font-light">
                          {inc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="pt-8 mt-8 border-t border-[#EEDDC8]">
                  <button
                    onClick={() => navigate('/contact')}
                    className={`w-full py-3.5 px-6 rounded-full text-xs font-semibold uppercase tracking-[0.16em] flex items-center justify-center gap-2 transition-all ${
                      pkg.isPopular
                        ? 'btn-gold-pill'
                        : 'border border-gold text-[#3D0A14] hover:bg-gold hover:text-white bg-white'
                    }`}
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footnote */}
          <p className="text-xs text-[#8C5D53] font-light text-center max-w-xl mx-auto mt-14 italic font-sans">
            *{packagesFootnote}
          </p>
        </div>
      </section>

      {/* ── 3. CELEBRATORY CTA BAND ── */}
      <section className="py-16 bg-[#FFF9F0] text-center border-t border-[#EEDDC8]">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="font-display text-2xl sm:text-3xl text-[#3D0A14]">
              Need a tailored proposal for your <span className="gold-glow-word">venue?</span>
            </h3>
            <p className="text-xs text-[#5A2A27] mt-1 font-light">Book an intimate consultation with Sudee at our Sadashivanagar studio.</p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="btn-gold-pill shrink-0 !text-xs"
          >
            <span>Request Custom Proposal</span>
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </section>
    </div>
  );
}
