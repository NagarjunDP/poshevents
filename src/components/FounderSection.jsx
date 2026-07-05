import React from 'react';
import { FadeUp } from './FadeUp';

export default function FounderSection() {
  return (
    <section id="founder" className="py-14 md:py-24 bg-white border-b border-[#C9A25E]/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Elegant Frame */}
          <div className="lg:col-span-5 flex justify-center relative">
            <FadeUp className="relative w-full max-w-md">
              {/* Outer decorative gold frame */}
              <div className="absolute -inset-4 border border-gold/40 rounded-t-[100px] pointer-events-none z-0 translate-x-2 translate-y-2 hidden md:block" />
              
              {/* Image container */}
              <div className="relative z-10 overflow-hidden rounded-t-[100px] border-2 border-gold aspect-square md:aspect-[4/5] shadow-2xl">
                <img 
                  src="/founderpic.png" 
                  alt="Sudeep K - Founder of Posh Events By Sudee" 
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>
            </FadeUp>
          </div>

          {/* Right Column: Bio text */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <FadeUp delay={0.2}>
              <span className="font-sans text-gold tracking-[0.25em] text-xs md:text-sm font-semibold uppercase mb-3 block">
                MEET THE VISIONARY
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-navy mb-2">
                Founder
              </h2>
              <h3 className="font-serif text-2xl md:text-3xl text-gold italic mb-6">
                Sudeep K
              </h3>
              
              {/* Double line gold divider */}
              <div className="flex items-center space-x-1 mb-8">
                <div className="h-[2px] w-12 bg-gold" />
                <div className="h-[1px] w-6 bg-gold/50" />
              </div>

              <p className="font-sans text-charcoal/90 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
                A passionate dreamer and creative visionary, Sudeep K founded Posh Events By Sudee with a mission to transform every celebration into an unforgettable experience. With a keen eye for detail, innovative ideas, and a heart for perfection, he believes that every event tells a story — and we are here to make it timeless.
              </p>

              {/* Large Pull Quote Accent */}
              <div className="bg-cream/40 border-l-4 border-gold p-6 rounded-r-lg max-w-lg shadow-sm mb-10">
                <p className="font-serif italic text-gold text-lg md:text-xl leading-relaxed">
                  "Every event tells a story — and we are here to make it timeless."
                </p>
              </div>

              {/* Premium Instagram CTA Button */}
              <div className="pointer-events-auto">
                <a 
                  href="https://www.instagram.com/posheventsbysudee" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center space-x-3 px-8 py-3.5 bg-gradient-to-r from-[#8A6B2E] via-[#C9A25E] to-[#E3C285] text-[#14203A] font-sans font-semibold text-xs tracking-[0.2em] uppercase rounded-full hover:shadow-xl transition-all duration-300"
                >
                  <span>Follow Our Journey</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
}
