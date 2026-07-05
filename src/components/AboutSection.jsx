import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const pillars1 = ["HERITAGE", "PRECISION", "ARTISTRY", "LUXURY"];
  const pillars2 = ["CRAFT", "RITUAL", "ELEGANCE", "SPLENDOR"];

  // Double text lists to ensure smooth looping
  const marqueeItems1 = [...pillars1, ...pillars1, ...pillars1, ...pillars1];
  const marqueeItems2 = [...pillars2, ...pillars2, ...pillars2, ...pillars2];

  return (
    <section id="about" className="py-14 md:py-36 bg-[#F1ECE1] text-[#14203A] relative overflow-hidden border-b border-[#C9A25E]/20">
      
      {/* Brand Motif Rule */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A25E] to-transparent opacity-30" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Philosophy Quote */}
          <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-8">
            <span className="font-sans text-[#C9A25E] tracking-[0.25em] text-xs font-semibold uppercase mb-4 block">
              OUR PHILOSOPHY
            </span>
            
            {/* Flanking gold rules matching brand monogram */}
            <div className="flex items-center w-24 h-[1px] mb-8">
              <div className="w-full h-full bg-gradient-to-r from-[#C9A25E] to-transparent" />
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif italic text-2xl md:text-4xl text-[#1B2846] leading-relaxed mb-6 font-light"
            >
              "A luxury celebration is not merely designed; it is orchestrated. We honor traditional rituals by wrapping them in contemporary production excellence."
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.8, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="font-sans text-sm md:text-base leading-relaxed text-[#14203A]/90 max-w-lg"
            >
              From coconut-leaf Seemanthams in ancestral homes to high-tech Sangeet stages in Bangalore’s finest retreats, we curate bespoke weddings for discerning families globally. Every detail matches a standard of absolute visual confidence.
            </motion.p>
          </div>

          {/* Right Side: Double Scrolling Outlined Marquees */}
          <div className="lg:col-span-6 relative flex flex-col justify-center space-y-6 md:space-y-8 overflow-hidden pointer-events-none select-none">
            
            {/* Row 1: Scrolling Left */}
            <div className="w-full flex overflow-hidden whitespace-nowrap">
              <div className="flex items-center animate-marquee-left space-x-12 pr-12">
                {marqueeItems1.map((item, idx) => (
                  <div key={`row1-${idx}`} className="flex items-center space-x-12">
                    <span 
                      style={{
                        WebkitTextStroke: '1.5px rgba(27, 40, 70, 0.25)',
                        color: 'transparent'
                      }}
                      className="font-serif text-5xl md:text-7xl font-bold tracking-[0.12em] transition-all duration-300 hover:text-[#C9A25E]"
                    >
                      {item}
                    </span>
                    <span className="text-[#C9A25E] text-2xl">✦</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: Scrolling Right */}
            <div className="w-full flex overflow-hidden whitespace-nowrap">
              <div className="flex items-center animate-marquee-right space-x-12 pr-12">
                {marqueeItems2.map((item, idx) => (
                  <div key={`row2-${idx}`} className="flex items-center space-x-12">
                    <span 
                      style={{
                        WebkitTextStroke: '1.5px rgba(27, 40, 70, 0.25)',
                        color: 'transparent'
                      }}
                      className="font-serif text-5xl md:text-7xl font-bold tracking-[0.12em] transition-all duration-300 hover:text-[#C9A25E]"
                    >
                      {item}
                    </span>
                    <span className="text-[#C9A25E] text-2xl">✦</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
