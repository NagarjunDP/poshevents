import React from 'react';
import { FadeUp } from './FadeUp';

const showcaseItems = [
  {
    category: "Welcome Board",
    title: "Acrylic & Floral Signage",
    description: "Floral entrance signage, e.g. acrylic welcome boards with the couple's names, styled at the venue entry.",
    img: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=800"
  },
  {
    category: "Entry Decor",
    title: "Toran & Drape Entrances",
    description: "Marigold and orange garland toran over entryways, floral drape entrances.",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800"
  },
  {
    category: "Traditional Backdrop Decor",
    title: "Mandap & Temple Motifs",
    description: "Mandap-style stage backdrop with jasmine garland swags, kolam motifs, gold pillars.",
    img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800"
  },
  {
    category: "Gender Reveal Board",
    title: "Interactive Trees",
    description: "Interactive painted-tree board with pink/blue thumbprint reveals.",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800"
  },
  {
    category: "Garland",
    title: "Handcrafted Blooms",
    description: "Handcrafted jasmine and baby's-breath garlands.",
    img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800"
  },
  {
    category: "Photobooth",
    title: "\"Pic the Flowers\" Corner",
    description: "Vintage vanity-style photo corner with mirror, flowers, and traditional styling props.",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800"
  }
];

export default function CuratedSlider() {
  return (
    <section id="gallery" className="py-24 bg-navy text-cream overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <FadeUp>
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-cream mb-4">Our Gallery</h2>
              <p className="font-sans text-gold tracking-[0.2em] text-sm uppercase">Curated Styling & Showcase</p>
            </div>
            <div className="hidden md:flex space-x-4">
              {/* Navigation help indicator */}
              <div className="text-gold/60 text-xs font-sans tracking-widest uppercase">Swipe to explore →</div>
            </div>
          </div>
        </FadeUp>

        <div className="flex space-x-8 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar">
          {showcaseItems.map((item, index) => (
            <div key={index} className="min-w-[85vw] md:min-w-[60vw] lg:min-w-[40vw] snap-center group cursor-pointer relative">
              <div className="h-[60vh] overflow-hidden relative border border-gold/20">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-3 py-1 bg-gold text-navy text-[10px] font-sans tracking-widest uppercase font-semibold">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-3xl font-serif text-cream mb-2">{item.title}</h3>
                <p className="text-cream/80 font-sans text-xs md:text-sm leading-relaxed max-w-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}
