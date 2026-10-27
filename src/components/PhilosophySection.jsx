import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { statsData } from '../data/stats';

export default function PhilosophySection({ navigate }) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mq.matches);
      const handler = (e) => setPrefersReducedMotion(e.matches);
      mq.addEventListener?.('change', handler);
      return () => mq.removeEventListener?.('change', handler);
    }
  }, []);

  const imageParallaxVariant = {
    hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.96, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0.01 : 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const textContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.12,
      },
    },
  };

  const textItem = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0.01 : 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative w-full py-[120px] bg-[#FBF6EC] text-[#3D0A14] overflow-hidden">
      {/* Soft blush radial glow */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none opacity-40 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, rgba(238, 203, 196, 0.45) 0%, rgba(251, 246, 236, 0) 70%)',
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ── LEFT COLUMN: 55% IMAGES (lg:col-span-7) ── */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start">
            <div className="relative w-full max-w-[480px] sm:max-w-[520px] aspect-[4/5] mx-auto lg:mx-0">
              
              {/* 1. Decorative Gold Arch Frame Offset 14px behind */}
              <div
                className="absolute -inset-[14px] rounded-[294px_294px_38px_38px] border border-[#C9A24B]/60 pointer-events-none transition-all duration-700"
                style={{
                  boxShadow: '0 10px 40px rgba(201, 162, 75, 0.08)',
                }}
              />

              {/* 2. Large Arch-top Photo (border-radius 280px 280px 24px 24px, 4:5) */}
              <motion.div
                variants={imageParallaxVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="relative w-full h-full rounded-[280px_280px_24px_24px] overflow-hidden shadow-2xl z-10 bg-[#FAF3EA]"
              >
                <img
                  src="/stagedesign.jpg"
                  alt="Fine-Art Temple Mandap Architecture in Bengaluru"
                  className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.02] hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              {/* 3. Smaller Rounded Photo (3:4) overlapping bottom-right corner */}
              <motion.div
                initial={{ opacity: 0, x: 25, y: 25 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
                className="absolute -bottom-6 -right-3 sm:-right-8 w-[46%] aspect-[3/4] rounded-2xl overflow-hidden border-[6px] border-[#FBF6EC] shadow-2xl z-20 bg-[#FAF3EA]"
              >
                <img
                  src="/traditionaldesign.jpg"
                  alt="Ancestral South Indian Vedic Muhurtham Decor"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              {/* 4. Round Gold Badge at top-left with rotating text ring */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -top-4 -left-4 sm:-left-6 w-24 h-24 sm:w-28 sm:h-28 z-30 flex items-center justify-center pointer-events-none"
              >
                {/* Rotating SVG text ring */}
                <svg
                  className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]"
                  viewBox="0 0 100 100"
                >
                  <path
                    id="textPath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text className="text-[8.5px] uppercase tracking-[0.24em] fill-[#C9A24B] font-bold">
                    <textPath href="#textPath" startOffset="0%">
                      SINCE 2017 • BENGALURU • POSH EVENTS •
                    </textPath>
                  </text>
                </svg>

                {/* Badge Center with 3rd Photo */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-[#C9A24B] p-1 bg-[#FFF9F0] shadow-lg overflow-hidden flex items-center justify-center">
                  <img
                    src="/flowerdesign.jpg"
                    alt="Posh Events Floral Craftsmanship"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </motion.div>
            </div>

            {/* Clean Ivory Caption Pill Below (never cut off) */}
            <div className="mt-8 px-4 py-2 rounded-full bg-[#FFF9F0] border border-[#EEDDC8] shadow-sm inline-flex items-center gap-2 max-w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24B] shrink-0" />
              <span className="text-[11px] uppercase tracking-[0.18em] text-[#5A2A27] font-semibold truncate">
                Temple Mandap & Stage Architecture · Bengaluru
              </span>
            </div>
          </div>

          {/* ── RIGHT COLUMN: 45% TEXT (lg:col-span-5) ── */}
          <motion.div
            variants={textContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-5 flex flex-col justify-center text-left"
          >
            {/* Label */}
            <motion.span
              variants={textItem}
              className="text-[11px] tracking-[0.28em] font-sans font-bold text-[#C9A24B] uppercase"
            >
              THE POSH ETHOS
            </motion.span>

            {/* Quote with memories in gold italic */}
            <motion.h2
              variants={textItem}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(28px, 3.2vw, 46px)',
                lineHeight: 1.2,
              }}
              className="text-[#3D0A14] font-normal mt-4"
            >
              "We do not merely design stages; we architect the{' '}
              <span className="italic font-serif text-[#C9A24B] font-normal">memories</span> your family will cherish for generations."
            </motion.h2>

            {/* Paragraph 1 */}
            <motion.p
              variants={textItem}
              style={{ color: '#4A3A32' }}
              className="text-sm sm:text-base leading-relaxed font-light mt-6"
            >
              Born in Bengaluru, Posh Events by Sudee is crafted for discerning hosts who appreciate the sacred purity of Southern traditions—from jasmine-scented temple mandaps to fragrant vetiver swags—seamlessly integrated with the grandest international luxury standards.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              variants={textItem}
              style={{ color: '#4A3A32' }}
              className="text-sm sm:text-base leading-relaxed font-light mt-4"
            >
              Every celebration is treated as an original cinematic production: customized hospitality concierges, Michelin-grade culinary curation, acoustic engineering, and bespoke architectural installations designed from scratch.
            </motion.p>

            {/* Link with animated underline */}
            <motion.div variants={textItem} className="mt-8">
              <button
                type="button"
                onClick={() => navigate('/about')}
                className="group relative inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] font-semibold text-[#3D0A14] hover:text-[#C9A24B] transition-colors py-1 cursor-pointer"
              >
                <span>Read Sudee's Full Story</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#C9A24B] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </button>
            </motion.div>

            {/* 3-item Stat Row under the text */}
            <motion.div
              variants={textItem}
              className="grid grid-cols-3 gap-4 pt-8 mt-10 border-t border-[#E8DEC8]"
            >
              {statsData.map((stat, idx) => (
                <div key={idx} className="flex flex-col text-left">
                  <span
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-2xl sm:text-3xl lg:text-4xl text-[#C9A24B] font-normal"
                  >
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#3D0A14] font-semibold mt-1">
                    {stat.label}
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-[#5A2A27]/70 font-light mt-0.5">
                    {stat.sub}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
