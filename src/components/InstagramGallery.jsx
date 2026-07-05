import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const row1Images = [
  "/welcomeboard1.png",
  "/Rooted in tradition, elevated with luxury ✨A premium coconut leaf baby shower decor curated with.jpg",
  "/Bringing bachelor party vibes to life for the creative head of @swara_creationss team! 🎉✨ Decor.jpg",
  "/Wrapped in sunshine and tradition, our Haldi 🌻celebration for Shiv & Siri was filled with vibra-3.jpg",
  "/Step into enchantment with this dreamy pink balloon portal- Lavish arches in blush and violet 🌸.jpg"
];

const row2Images = [
  "/welcomeboard2.png",
  "/Rooted in tradition, elevated with luxury ✨A premium coconut leaf baby shower decor curated with-2.jpg",
  "/Wrapped in sunshine and tradition, our Haldi 🌻celebration for Shiv & Siri was filled with vibra.jpg",
  "/Wrapped in sunshine and tradition, our Haldi 🌻celebration for Shiv & Siri was filled with vibra-2.jpg",
  "/Wrapped in sunshine and tradition, our Haldi 🌻celebration for Shiv & Siri was filled with vibra-4.jpg"
];

// Duplicate elements to ensure smooth infinite loop scroll
const row1 = [...row1Images, ...row1Images, ...row1Images];
const row2 = [...row2Images, ...row2Images, ...row2Images];

export default function InstagramGallery() {
  return (
    <section className="py-14 md:py-24 bg-[#FAF8F3] relative overflow-hidden border-t border-[#C9A25E]/20">
      
      {/* Eyebrow and Section Header */}
      <div className="container mx-auto px-6 md:px-12 text-center mb-16 relative z-10">
        <span className="font-sans text-[#C9A25E] tracking-[0.25em] text-xs font-semibold uppercase mb-3 block">
          FOLLOW THE JOURNEY
        </span>
        <h2 className="text-4xl md:text-5xl font-serif text-[#14203A] mb-4">
          Editorial Inspirations
        </h2>
        <div className="flex items-center justify-center mt-4 w-28 h-[1px] mx-auto">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-[#C9A25E] to-transparent" />
        </div>
      </div>

      {/* Marquee Row Container */}
      <div className="relative w-full flex flex-col space-y-6 overflow-hidden select-none">
        
        {/* ROW 1: Scrolling Left */}
        <div className="w-full flex overflow-hidden whitespace-nowrap group">
          <div className="flex items-center animate-marquee-left space-x-6 pr-6 hover:[animation-play-state:paused]">
            {row1.map((img, idx) => (
              <div 
                key={`r1-${idx}`}
                className="w-48 h-48 md:w-64 md:h-64 relative rounded-xl overflow-hidden group/item border border-[#C9A25E]/10 cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <img 
                  src={img} 
                  alt="Posh Instagram feed" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105"
                  loading="lazy"
                />
                {/* Custom Overlay on hover */}
                <div className="absolute inset-0 bg-[#14203A]/60 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <FaInstagram className="text-[#FAF8F3] text-3xl transform scale-75 group-hover/item:scale-100 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Scrolling Right */}
        <div className="w-full flex overflow-hidden whitespace-nowrap group">
          <div className="flex items-center animate-marquee-right space-x-6 pr-6 hover:[animation-play-state:paused]">
            {row2.map((img, idx) => (
              <div 
                key={`r2-${idx}`}
                className="w-48 h-48 md:w-64 md:h-64 relative rounded-xl overflow-hidden group/item border border-[#C9A25E]/10 cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <img 
                  src={img} 
                  alt="Posh Instagram feed" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105"
                  loading="lazy"
                />
                {/* Custom Overlay on hover */}
                <div className="absolute inset-0 bg-[#14203A]/60 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <FaInstagram className="text-[#FAF8F3] text-3xl transform scale-75 group-hover/item:scale-100 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating sticky follow layer overlay (Double-div design to prevent WebKit rendering bugs) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto">
          <a 
            href="https://www.instagram.com/posheventsbysudee" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative flex items-center justify-center whitespace-nowrap space-x-2 md:space-x-3 px-5 py-3 md:px-8 md:py-4 rounded-full shadow-2xl group transition-all duration-300 hover:scale-105 active:scale-98 text-[#FAF8F3]"
            data-hover-glow="true"
          >
            {/* Shimmering Gold Border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8A6B2E] via-[#C9A25E] to-[#E3C285] z-0 pointer-events-none" />
            
            {/* Inner Navy Background Fill */}
            <div className="absolute inset-[1.5px] rounded-full bg-[#14203A]/90 backdrop-blur-md z-10 pointer-events-none" />

            {/* Content */}
            <FaInstagram className="text-[#E3C285] text-sm md:text-lg z-20 relative transition-transform duration-300 group-hover:rotate-[8deg]" />
            <span className="text-[#FAF8F3] font-sans text-[10px] md:text-sm tracking-wider font-medium z-20 relative">
              @poshevents.bysudee
            </span>
            <span className="text-[#E3C285] font-sans font-bold text-[10px] md:text-sm tracking-widest uppercase z-20 relative">
              — Follow
            </span>
          </a>
        </div>

      </div>

    </section>
  );
}
