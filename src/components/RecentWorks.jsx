import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Play, Calendar, MapPin, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { getStoredPortfolio } from '../data/portfolioData';
import SectionHeader from './SectionHeader';

export default function RecentWorks({ navigate }) {
  const [works, setWorks] = useState([]);
  const [activeStoryModal, setActiveStoryModal] = useState(null);
  const scrollContainerRef = useRef(null);

  const loadData = () => {
    setWorks(getStoredPortfolio());
  };

  useEffect(() => {
    loadData();
    window.addEventListener('posh_portfolio_updated', loadData);
    window.addEventListener('storage', loadData);
    return () => {
      window.removeEventListener('posh_portfolio_updated', loadData);
      window.removeEventListener('storage', loadData);
    };
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -420, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 420, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full py-28 md:py-36 bg-[#0E0A12] text-[#F7F1E6] overflow-hidden border-t border-gold/15">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-10 w-[600px] h-[500px] bg-maroon-dark/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        {/* Section Header with Left/Right Scroll Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            chapter="Chapter VIII • Recent Works"
            title="Freshly curated celebratory"
            highlightWord="milestones."
            subtitle="The newest celebrations designed and executed by Posh Events across Bengaluru."
            align="left"
            dark={true}
            className="!mx-0 !px-0"
          />

          <div className="flex items-center gap-3">
            <button
              onClick={scrollLeft}
              aria-label="Scroll Left"
              className="w-12 h-12 rounded-full border border-gold/35 bg-ink-light hover:bg-gold/20 flex items-center justify-center text-gold transition-colors focus:outline-none"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              aria-label="Scroll Right"
              className="w-12 h-12 rounded-full border border-gold/35 bg-ink-light hover:bg-gold/20 flex items-center justify-center text-gold transition-colors focus:outline-none"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ── HORIZONTAL DRAG / SCROLL SHOWCASE ── */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory cursor-grab active:cursor-grabbing"
        >
          {works.map((item) => (
            <motion.div
              key={item.id}
              className="w-[300px] sm:w-[380px] md:w-[420px] shrink-0 snap-start rounded-3xl overflow-hidden border border-gold/30 bg-ink-card shadow-glass-dark group hover:border-gold hover:shadow-gold-glow transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Media Card */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-ink">
                <img
                  src={item.poster}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = '/media/hero/hero-poster.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] tracking-wider uppercase font-bold text-ink bg-gold shadow-sm">
                    {item.category}
                  </span>
                </div>

                {/* Play Hint */}
                {item.videoUrl && (
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-ink/70 backdrop-blur-md border border-gold/40 flex items-center justify-center text-gold group-hover:scale-110 group-hover:bg-gold group-hover:text-ink transition-all">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                )}
              </div>

              {/* Bottom Information */}
              <div className="p-6 flex flex-col justify-between flex-1 text-left">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-gold-light/80 font-sans mb-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="font-display text-2xl text-ivory group-hover:text-gold-light transition-colors font-normal">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-ivory/70 mt-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gold/15 flex items-center justify-between">
                  <button
                    onClick={() => setActiveStoryModal(item)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold hover:text-gold-light transition-colors"
                  >
                    <span>View Story</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <span className="text-[10px] text-ivory/40 font-mono">
                    Posh Archive
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Story Video Modal */}
      <AnimatePresence>
        {activeStoryModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            <button
              onClick={() => setActiveStoryModal(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full border border-gold/40 bg-gold/10 hover:bg-gold/25 flex items-center justify-center text-gold transition-colors z-20"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-3xl aspect-[16/10] rounded-3xl overflow-hidden border border-gold/40 shadow-2xl bg-ink flex flex-col justify-between p-6"
            >
              {activeStoryModal.videoUrl ? (
                <video
                  controls
                  autoPlay
                  className="absolute inset-0 w-full h-full object-cover"
                  poster={activeStoryModal.poster}
                >
                  <source src={activeStoryModal.videoUrl} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={activeStoryModal.poster}
                  alt={activeStoryModal.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between text-white pointer-events-none">
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-ink bg-gold">
                  {activeStoryModal.category}
                </span>
                <span className="text-xs text-gold-light/90">
                  {activeStoryModal.date}
                </span>
              </div>

              <div className="relative z-10 text-white pointer-events-none">
                <h3 className="font-display text-3xl text-ivory">
                  {activeStoryModal.title}
                </h3>
                <p className="text-xs text-gold-light flex items-center gap-1.5 mt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {activeStoryModal.location}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
