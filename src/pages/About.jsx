import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Award, Users, CheckCircle2 } from 'lucide-react';

export default function About({ navigate }) {
  const values = [
    {
      title: 'Sacred Heritage',
      description: 'Honoring centuries of South Indian cultural traditions, Vedic rituals, auspicious timing, and authentic regional ceremonies with deep reverence.',
      icon: Award,
    },
    {
      title: 'Architectural Grandeur',
      description: 'Designing bespoke spatial layouts, custom mandap columns, kinetic concert lighting, and cascading florals that feel magnificent from every vantage point.',
      icon: Sparkles,
    },
    {
      title: 'Flawless Peace of Mind',
      description: 'Giving couples and their families complete tranquility on the wedding day through single-point concierge leadership, minute-by-minute execution, and hospitality.',
      icon: Heart,
    },
  ];

  return (
    <div className="w-full pt-20">
      
      {/* ── 1. HERO BANNER ── */}
      <section className="relative w-full h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden bg-black">
        <img
          src="/hali2.PNG"
          alt="Posh Events Luxury Wedding Philosophy"
          className="w-full h-full object-cover opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#F5F0E8]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4">
            <Sparkles size={13} className="text-[#D8BA84]" />
            <span className="font-sans text-[11px] tracking-[0.25em] uppercase font-bold text-white">
              OUR STORY & PHILOSOPHY
            </span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-[0.05em] text-white leading-tight mb-4 drop-shadow-md">
            TIMELESS CELEBRATIONS, <br />
            <span className="text-[#D8BA84]">BEAUTIFULLY DESIGNED</span>
          </h1>

          <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.2em] font-medium text-white/90 max-w-xl mx-auto">
            WHERE REVERED TRADITION MEETS CONTEMPORARY OPULENCE IN BANGALORE
          </p>
        </div>
      </section>


      {/* ── 2. BRAND STORY (ZIG-ZAG 1) ── */}
      <section className="py-20 lg:py-28 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Image Column */}
            <div className="relative rounded-[24px] overflow-hidden shadow-luxury border border-[#B08D57]/20 aspect-[4/3] group">
              <img
                src="/hali6.PNG"
                alt="Posh Events Mandap Creation"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#B08D57]/30 text-[10px] font-sans font-bold tracking-widest uppercase text-[#8A6B2E]">
                CRAFTED IN BENGALURU
              </div>
            </div>

            {/* Story Text */}
            <div className="space-y-6">
              <span className="eyebrow-label">HOW IT BEGAN</span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-[0.04em] text-[#2B2B2B] leading-tight">
                CRAFTING MEMORIES THAT <br />
                <span className="text-[#B08D57]">ENDURE FOR GENERATIONS</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
                Founded with a singular dedication to elevating Indian weddings, Posh Events has grown into one of Bangalore’s most trusted and coveted event management and wedding styling studios.
              </p>
              <p className="font-sans text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
                Our approach rejects cookie-cutter banquet arrangements. Instead, we study the architectural proportions of each venue, source exotic and native blooms directly from the finest growers, and design bespoke structures that frame the sacred rituals of your big day.
              </p>
              <div className="pt-2">
                <a
                  href="/portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/portfolio');
                  }}
                  className="btn-outline-gold text-xs"
                >
                  View Our Portfolio
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ── 3. FOUNDER & TEAM SECTION (ZIG-ZAG 2) ── */}
      <section className="py-20 lg:py-28 bg-[#FAF8F3] border-t border-[#B08D57]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Founder Text */}
            <div className="space-y-6 order-2 lg:order-1">
              <span className="eyebrow-label">THE CREATIVE VISIONARY</span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-[0.04em] text-[#2B2B2B] leading-tight">
                SUDEEP & <br />
                <span className="text-[#B08D57]">THE POSH EVENTS ENSEMBLE</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
                Led by Sudeep, our creative director and founder, the Posh Events team comprises veteran spatial designers, lighting engineers, master floral artisans, and day-of hospitality directors.
              </p>
              <p className="font-sans text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
                "Our promise to every couple is simple: you will never feel like a client navigating a transaction. You will feel like royalty surrounded by a family of artisans dedicated to making your dream celebration come alive."
              </p>
              
              <div className="pt-2 flex items-center space-x-4 border-t border-[#B08D57]/20">
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#2B2B2B]">Sudeep</h4>
                  <span className="font-sans text-xs text-[#8A6B2E] uppercase tracking-wider font-semibold">Founder & Creative Director</span>
                </div>
              </div>
            </div>

            {/* Founder Image */}
            <div className="order-1 lg:order-2 relative rounded-[24px] overflow-hidden shadow-luxury border border-[#B08D57]/20 aspect-[4/3] group">
              <img
                src="/sangeet01.PNG"
                alt="Posh Events Team and Production"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#B08D57]/30 text-[10px] font-sans font-bold tracking-widest uppercase text-[#8A6B2E]">
                CREATIVE DIRECTION & STAGE MASTERY
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ── 4. VALUES & PILLARS ── */}
      <section className="py-20 lg:py-28 bg-[#F5F0E8] border-t border-[#B08D57]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow-label block mb-3">OUR CORE VALUES</span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.04em] text-[#2B2B2B]">
              THE PILLARS OF POSH EXCELLENCE
            </h2>
            <div className="w-20 h-[1.5px] bg-[#B08D57] mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="bg-white rounded-[24px] p-8 border border-[#B08D57]/20 shadow-sm hover:shadow-luxury transition-all duration-300 space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-[#B08D57]/15 text-[#8A6B2E] flex items-center justify-center">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-[#2B2B2B]">
                    {v.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ── 5. MILESTONE NUMBERS ── */}
      <section className="py-16 bg-[#2B2B2B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-4 md:pt-0 space-y-2">
              <span className="font-serif font-bold text-4xl lg:text-5xl text-[#D8BA84] block">250+</span>
              <span className="font-sans text-xs uppercase tracking-[0.16em] text-white/80">Weddings Styled</span>
            </div>
            <div className="pt-4 md:pt-0 space-y-2">
              <span className="font-serif font-bold text-4xl lg:text-5xl text-[#D8BA84] block">12+</span>
              <span className="font-sans text-xs uppercase tracking-[0.16em] text-white/80">Years In Industry</span>
            </div>
            <div className="pt-4 md:pt-0 space-y-2">
              <span className="font-serif font-bold text-4xl lg:text-5xl text-[#D8BA84] block">500+</span>
              <span className="font-sans text-xs uppercase tracking-[0.16em] text-white/80">Celebrations Completed</span>
            </div>
            <div className="pt-4 md:pt-0 space-y-2">
              <span className="font-serif font-bold text-4xl lg:text-5xl text-[#D8BA84] block">15+</span>
              <span className="font-sans text-xs uppercase tracking-[0.16em] text-white/80">Destinations Curated</span>
            </div>
          </div>
        </div>
      </section>


      {/* ── 6. CTA BANNER ── */}
      <section className="py-20 bg-[#FAF8F3] border-t border-[#B08D57]/20 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-5">
          <span className="eyebrow-label block">RESERVE YOUR DATES</span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl uppercase tracking-[0.04em] text-[#2B2B2B]">
            LET’S DISCUSS YOUR VISION
          </h2>
          <p className="font-sans text-sm text-[#4A4A4A] leading-relaxed">
            We limit our calendar each wedding season to give each couple our undivided focus and artisanal craftsmanship.
          </p>
          <div className="pt-2">
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                navigate('/contact');
              }}
              className="btn-gold-pill text-sm py-3.5 px-8 shadow-xl"
            >
              Book Complimentary Consultation
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
