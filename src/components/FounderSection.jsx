import React from 'react';
import { FadeUp } from './FadeUp';

export default function FounderSection() {
  return (
    <section id="founder" className="py-14 md:py-24 bg-white border-b border-[#C9A25E]/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* ── LEFT: Founder Photo ── */}
          <div className="lg:col-span-5 flex justify-center relative">
            <FadeUp className="relative w-full">

              {/* Decorative offset gold frame — desktop only */}
              <div className="absolute -inset-3 border border-[#C9A25E]/40 rounded-t-[80px] pointer-events-none z-0 translate-x-3 translate-y-3 hidden md:block" />

              {/* Image wrapper
                  — Mobile:  full width, natural 3:4 portrait ratio, rounded top
                  — Desktop: max 420px, same portrait ratio               */}
              <div className="relative z-10 overflow-hidden rounded-t-[80px] border-2 border-[#C9A25E]
                              w-full max-w-[320px] mx-auto
                              md:max-w-[400px]
                              lg:max-w-[420px]
                              aspect-[3/4]
                              shadow-2xl">
                <img
                  src="/founderpic.jpeg"
                  alt="Sudeep K — Founder of Posh Events By Sudee"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />

                {/* Subtle gold overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24
                                bg-gradient-to-t from-[#0E1520]/40 to-transparent pointer-events-none" />
              </div>

              {/* Floating name badge */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20
                              bg-[#FAF8F3]/90 backdrop-blur-sm border border-[#C9A25E]/50
                              px-5 py-2.5 rounded-full shadow-lg whitespace-nowrap">
                <p className="font-serif text-[#8A6B2E] text-sm italic tracking-wide">Sudeep K — Founder</p>
              </div>
            </FadeUp>
          </div>

          {/* ── RIGHT: Bio Text ── */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <FadeUp delay={0.2}>
              <span className="font-sans text-[#C9A25E] tracking-[0.25em] text-xs md:text-sm font-semibold uppercase mb-3 block">
                MEET THE VISIONARY
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-[#14203A] mb-2">
                Founder
              </h2>
              <h3 className="font-serif text-2xl md:text-3xl text-[#C9A25E] italic mb-6">
                Sudeep K
              </h3>

              {/* Gold divider */}
              <div className="flex items-center space-x-1 mb-8">
                <div className="h-[2px] w-12 bg-[#C9A25E]" />
                <div className="h-[1px] w-6 bg-[#C9A25E]/50" />
              </div>

              <p className="font-sans text-[#14203A]/80 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
                A passionate dreamer and creative visionary, Sudeep K founded Posh Events By Sudee
                with a mission to transform every celebration into an unforgettable experience.
                With a keen eye for detail, innovative ideas, and a heart for perfection, he believes
                that every event tells a story — and we are here to make it timeless.
              </p>

              {/* Pull Quote */}
              <div className="bg-[#F1ECE1]/60 border-l-4 border-[#C9A25E] p-5 rounded-r-lg max-w-lg shadow-sm mb-10">
                <p className="font-serif italic text-[#C9A25E] text-lg md:text-xl leading-relaxed">
                  "Every event tells a story — and we are here to make it timeless."
                </p>
              </div>

              {/* Instagram CTA */}
              <div className="pointer-events-auto">
                <a
                  href="https://www.instagram.com/posheventsbysudee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center space-x-3 px-8 py-3.5
                             bg-gradient-to-r from-[#8A6B2E] via-[#C9A25E] to-[#E3C285]
                             text-[#14203A] font-sans font-semibold text-xs tracking-[0.2em]
                             uppercase rounded-full hover:shadow-xl transition-all duration-300"
                >
                  <span>Follow Our Journey</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
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
