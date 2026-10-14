import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Filter, ChevronLeft, ChevronRight, X, Play } from 'lucide-react';
import WeddingVideoCard from '../components/WeddingVideoCard';
import { portfolioData, portfolioCategories } from '../data/portfolioData';

// Curated high-res photos for secondary photo gallery
const curatedPhotos = [
  { src: '/hali2.PNG', title: 'Traditional Haldi Urli & Marigold Swags', category: 'Wedding & Haldi' },
  { src: '/sangeet01.PNG', title: 'Enchanting Sangeet Concert Stage', category: 'Sangeet' },
  { src: '/hali6.PNG', title: 'Golden Mandap Festivities', category: 'Wedding & Haldi' },
  { src: '/sangeet02.PNG', title: 'Glamorous Starlit Dance Floor', category: 'Sangeet' },
  { src: '/hali9.PNG', title: 'Royal Yellow Archway Portal', category: 'Wedding & Haldi' },
  { src: '/i3.jpg', title: 'Traditional Seemantha Cradle Decor', category: 'Baby Shower' },
  { src: '/hali11.PNG', title: 'Grand Floral Cascade Display', category: 'Wedding & Haldi' },
  { src: '/i13.jpeg', title: 'Divine Krishna Themed Naming Ceremony', category: 'Naming Ceremony' },
  { src: '/po1.jpeg', title: 'Corporate Annual Gala & Awards', category: 'Corporate' },
];

export default function Portfolio({ navigate }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activePlayingId, setActivePlayingId] = useState(null);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const [lightboxPhoto, setLightboxPhoto] = useState(null);
  const carouselRef = useRef(null);

  // Filter video cards
  const filteredVideos =
    activeCategory === 'All'
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeCategory);

  // Mobile scroll-snap listener to update active index dots
  const handleMobileScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, offsetWidth } = carouselRef.current;
    const index = Math.round(scrollLeft / (offsetWidth * 0.8));
    setMobileActiveIndex(index);
  };

  return (
    <div className="w-full pt-20">
      
      {/* ── 1. PORTFOLIO HERO BANNER ── */}
      <section className="bg-[#FAF8F3] py-16 lg:py-24 border-b border-[#B08D57]/20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#B08D57]/15 border border-[#B08D57]/30 mb-4">
            <Sparkles size={13} className="text-[#8A6B2E]" />
            <span className="font-sans text-[11px] tracking-[0.22em] uppercase font-bold text-[#8A6B2E]">
              THE POSH ARCHIVE
            </span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-[0.05em] text-[#2B2B2B] mb-4">
            Our Event Portfolio
          </h1>

          <p className="font-sans text-sm sm:text-base text-[#4A4A4A] max-w-xl mx-auto leading-relaxed">
            Explore authentic wedding films, sangeet productions, and sacred celebrations planned and styled across South India.
          </p>

          <div className="w-20 h-[1.5px] bg-[#B08D57] mx-auto mt-6" />
        </div>
      </section>


      {/* ── 2. REAL WEDDINGS (DEEP CRIMSON SECTION WITH VIDEO REELS) ── */}
      <section className="py-20 lg:py-28 bg-[#8B0014] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-sans text-xs uppercase tracking-[0.25em] font-semibold text-[#D8BA84] mb-2.5 block">
              CINEMATIC HIGHLIGHTS
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.05em] text-white mb-3">
              Real Weddings
            </h2>
            <p className="font-serif italic text-base sm:text-lg text-white/85 max-w-xl mx-auto">
              Moments we planned. Memories our couples live forever.
            </p>
          </div>

          {/* Filter Chips Bar */}
          <div className="flex justify-center mb-12 overflow-x-auto scrollbar-none pb-2">
            <div className="flex items-center gap-2 p-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 max-w-full overflow-x-auto whitespace-nowrap">
              {portfolioCategories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setActivePlayingId(null);
                    }}
                    className={`px-4 py-2 rounded-full font-sans text-xs tracking-wider uppercase font-semibold transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-[#B08D57] to-[#C4A574] text-white shadow-md'
                        : 'text-white/75 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── DESKTOP GRID (3 VERTICAL 9:16 VIDEO CARDS) ── */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <AnimatePresence mode="popLayout">
              {filteredVideos.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <WeddingVideoCard
                    item={item}
                    activePlayingId={activePlayingId}
                    setActivePlayingId={setActivePlayingId}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* ── MOBILE HORIZONTAL SWIPE CAROUSEL WITH SCROLL-SNAP ── */}
          <div className="md:hidden">
            <div
              ref={carouselRef}
              onScroll={handleMobileScroll}
              className="flex space-x-4 overflow-x-auto snap-x snap-mandatory scrollbar-none px-4 py-4"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {filteredVideos.map((item) => (
                <div
                  key={item.id}
                  className="w-[82vw] max-w-[320px] shrink-0 snap-center"
                >
                  <WeddingVideoCard
                    item={item}
                    activePlayingId={activePlayingId}
                    setActivePlayingId={setActivePlayingId}
                  />
                </div>
              ))}
            </div>

            {/* Mobile Carousel Indicator Dots */}
            {filteredVideos.length > 1 && (
              <div className="flex justify-center space-x-2 mt-4">
                {filteredVideos.map((_, idx) => (
                  <span
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === mobileActiveIndex
                        ? 'w-6 bg-[#D8BA84]'
                        : 'w-1.5 bg-white/30'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Small Italic Footnote */}
          <div className="text-center mt-12">
            <p className="font-sans text-xs italic text-white/70">
              Shared with permission from our couples.
            </p>
          </div>
        </div>
      </section>


      {/* ── 3. CURATED PHOTOGRAPHY ARCHIVE ── */}
      <section className="py-20 lg:py-28 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow-label block mb-3">STILL MOMENTS</span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.04em] text-[#2B2B2B]">
              CURATED STYLING GALLERY
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#4A4A4A] mt-3">
              Browse detailed shots of our mandap decor, flower arches, and festive table arrangements.
            </p>
            <div className="w-20 h-[1.5px] bg-[#B08D57] mx-auto mt-5" />
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {curatedPhotos.map((photo, idx) => (
              <div
                key={idx}
                onClick={() => setLightboxPhoto(photo)}
                className="group relative rounded-[20px] overflow-hidden aspect-[4/3] bg-white border border-[#B08D57]/20 shadow-sm hover:shadow-luxury cursor-pointer transition-all duration-500"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 text-white">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-[#D8BA84] font-semibold mb-1">
                    {photo.category}
                  </span>
                  <h4 className="font-serif font-bold text-base tracking-wide">
                    {photo.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── 4. LIGHTBOX MODAL FOR PHOTOS ── */}
      <AnimatePresence>
        {lightboxPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button
              onClick={() => setLightboxPhoto(null)}
              aria-label="Close photo preview"
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white hover:text-black flex items-center justify-center transition-all"
            >
              <X size={20} />
            </button>

            <div className="max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <img
                src={lightboxPhoto.src}
                alt={lightboxPhoto.title}
                className="w-full h-full max-h-[75vh] object-contain"
              />
              <div className="p-4 bg-[#1A1A1A] text-white flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold">{lightboxPhoto.title}</h3>
                  <span className="font-sans text-xs text-[#D8BA84] uppercase tracking-wider">{lightboxPhoto.category}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* ── 5. CONSULTATION CTA BANNER ── */}
      <section className="py-20 bg-gradient-to-r from-[#FAF8F3] via-[#F5F0E8] to-[#EAE3D6] border-t border-[#B08D57]/20 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-5">
          <span className="eyebrow-label block">PLAN YOUR CELEBRATION</span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl uppercase tracking-[0.04em] text-[#2B2B2B]">
            IMAGINING SOMETHING EXTRAORDINARY?
          </h2>
          <p className="font-sans text-sm text-[#4A4A4A] leading-relaxed">
            Let us design a bespoke celebration aligned with your family traditions and contemporary luxury.
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
