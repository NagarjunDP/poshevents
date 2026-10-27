import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Compass, Palette, Layers, PartyPopper } from 'lucide-react';

export default function JourneyTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 55%'],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const steps = [
    {
      number: '01',
      title: 'Discover',
      tagline: 'Vision Consultation & Ritual Alignment',
      desc: 'We listen to your family traditions, venue aspirations, and aesthetic desires to sketch the architectural foundation.',
      icon: Compass,
    },
    {
      number: '02',
      title: 'Design',
      tagline: '3D Mandap & Floral Schematics',
      desc: 'Every structural load, fresh jasmine canopy, ambient lighting tone, and seating layout engineered to perfection.',
      icon: Palette,
    },
    {
      number: '03',
      title: 'Deliver',
      tagline: 'Artisanal Procurement & Protocol',
      desc: 'Fresh Madurai mallige sourcing, brass prop curation, artist coordination, and guest concierge timelines aligned.',
      icon: Layers,
    },
    {
      number: '04',
      title: 'Celebrate',
      tagline: 'Flawless On-Ground Choreography',
      desc: 'Our directors manage every muhurtham moment in quiet harmony, leaving you free to immerse in pure family joy.',
      icon: PartyPopper,
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full py-24 sm:py-32 bg-[#FFF9F0] text-[#3D0A14] overflow-hidden border-t border-[#EEDDC8]"
    >
      {/* Marigold Petals Drifting in the Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50">
        <span className="absolute top-10 left-[8%] w-3 h-3 rounded-full bg-[#E8A317] blur-[0.5px] animate-pulse" />
        <span className="absolute top-1/3 left-[20%] w-4 h-4 rounded-full bg-[#FF8C00] blur-[1px] rotate-45" />
        <span className="absolute bottom-20 left-[15%] w-3.5 h-3.5 rounded-full bg-[#E8A317] blur-[0.5px]" />
        <span className="absolute top-24 right-[12%] w-4 h-4 rounded-full bg-[#E8A317] blur-[1px] -rotate-12" />
        <span className="absolute top-1/2 right-[25%] w-3 h-3 rounded-full bg-[#FF8C00] blur-[0.5px]" />
        <span className="absolute bottom-16 right-[8%] w-4 h-4 rounded-full bg-[#E8A317] blur-[1px] rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-white/80 shadow-sm backdrop-blur-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
            <span className="text-[11px] tracking-[0.25em] uppercase font-semibold text-gold-dark">
              OUR PROCESS
            </span>
          </div>
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight text-[#3D0A14]"
          >
            From First Hello to <span className="text-[#C9A24B] italic">Last Dance.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5A2A27]/80 font-light max-w-2xl mx-auto leading-relaxed">
            How a Posh celebration unfolds from visionary sketches to flawless Vedic timing and unforgettable memories.
          </p>
        </div>

        {/* ── DESKTOP HORIZONTAL TIMELINE ── */}
        <div className="hidden lg:block relative mb-12">
          {/* Timeline Background Track */}
          <div className="absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-[#E8DEC8] -z-0" />
          
          {/* Animated Gold Fill Track */}
          <motion.div
            style={{ width: lineWidth }}
            className="absolute top-[28px] left-[10%] max-w-[80%] h-[2px] bg-[#C9A24B] -z-0 origin-left"
          />

          {/* 4 Process Nodes & Cards */}
          <div className="grid grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Numbered Circle (56px) */}
                  <div className="w-14 h-14 rounded-full bg-white border border-[#C9A24B]/50 text-[#3D0A14] flex items-center justify-center font-display text-lg font-bold shadow-md group-hover:bg-[#C9A24B] group-hover:text-white transition-colors duration-300 mb-8">
                    {step.number}
                  </div>

                  {/* White Card */}
                  <div className="w-full bg-white border border-[#C9A24B]/35 rounded-[20px] p-6 text-left shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 min-h-[240px] flex flex-col justify-between">
                    <div>
                      <div className="w-9 h-9 rounded-full bg-[#FFF9F0] border border-[#EEDDC8] flex items-center justify-center text-[#C9A24B] mb-4">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3
                        style={{ fontFamily: "'Playfair Display', serif" }}
                        className="text-2xl font-normal text-[#3D0A14] leading-tight"
                      >
                        {step.title}
                      </h3>
                      <p className="text-[11px] font-sans uppercase tracking-wider text-[#C9A24B] font-semibold mt-1">
                        {step.tagline}
                      </p>
                    </div>
                    <p className="text-xs text-[#5A2A27]/85 font-light leading-relaxed mt-4">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── MOBILE VERTICAL TIMELINE ── */}
        <div className="lg:hidden relative pl-6 border-l-2 border-[#C9A24B]/40 space-y-8 ml-3">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative"
              >
                {/* Node indicator */}
                <div className="absolute -left-[35px] top-1.5 w-8 h-8 rounded-full bg-[#C9A24B] text-white flex items-center justify-center text-xs font-bold font-display shadow-md">
                  {step.number}
                </div>

                {/* Card */}
                <div className="bg-white border border-[#C9A24B]/35 rounded-[20px] p-5 shadow-sm text-left">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#FFF9F0] border border-[#EEDDC8] flex items-center justify-center text-[#C9A24B]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3
                        style={{ fontFamily: "'Playfair Display', serif" }}
                        className="text-xl font-normal text-[#3D0A14] leading-tight"
                      >
                        {step.title}
                      </h3>
                      <p className="text-[10px] font-sans uppercase tracking-wider text-[#C9A24B] font-semibold">
                        {step.tagline}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-[#5A2A27]/85 font-light leading-relaxed mt-2">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
