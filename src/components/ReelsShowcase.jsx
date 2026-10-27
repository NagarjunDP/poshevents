import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Volume2, VolumeX, X, MapPin, Calendar, ChevronLeft, ChevronRight, Sparkles, ArrowUpRight } from 'lucide-react';
import { getStoredPortfolio, portfolioCategories } from '../data/portfolioData';

export default function ReelsShowcase({ navigate }) {
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalItem, setActiveModalItem] = useState(null);
  const [modalIndex, setModalIndex] = useState(0);
  const [hoveredId, setHoveredId] = useState(null);
  const [visibleCount, setVisibleCount] = useState(8);
  const [isMuted, setIsMuted] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);

  // Sync with portfolioData & admin updates
  useEffect(() => {
    const updateData = () => {
      setItems(getStoredPortfolio());
    };
    updateData();
    window.addEventListener('posh_portfolio_updated', updateData);
    window.addEventListener('storage', updateData);
    return () => {
      window.removeEventListener('posh_portfolio_updated', updateData);
      window.removeEventListener('storage', updateData);
    };
  }, []);

  const filteredItems = items.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category?.toLowerCase() === selectedCategory.toLowerCase();
  });

  const displayedItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 8, filteredItems.length));
  };

  // Keyboard navigation & Esc to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!activeModalItem) return;
      if (e.key === 'Escape') {
        setActiveModalItem(null);
      } else if (e.key === 'ArrowRight') {
        handleNextModal();
      } else if (e.key === 'ArrowLeft') {
        handlePrevModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalItem, modalIndex, filteredItems]);

  const openModal = (item, idx) => {
    setActiveModalItem(item);
    setModalIndex(idx);
    setIsMuted(false);
  };

  const handleNextModal = () => {
    if (filteredItems.length === 0) return;
    const nextIdx = (modalIndex + 1) % filteredItems.length;
    setModalIndex(nextIdx);
    setActiveModalItem(filteredItems[nextIdx]);
  };

  const handlePrevModal = () => {
    if (filteredItems.length === 0) return;
    const prevIdx = (modalIndex - 1 + filteredItems.length) % filteredItems.length;
    setModalIndex(prevIdx);
    setActiveModalItem(filteredItems[prevIdx]);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 50) {
      handleNextModal();
    } else if (diff < -50) {
      handlePrevModal();
    }
    setTouchStartX(null);
  };

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#7A1420] text-white overflow-hidden border-t border-[#8E1C2B]">
      {/* Subtle gold ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gold/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-white/10 backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-light" />
            <span className="text-[11px] tracking-[0.25em] uppercase font-semibold text-gold-light">
              Real Weddings & Reels
            </span>
          </div>
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight text-white"
          >
            Live cinematic stories of <span className="text-gold-light italic">pure joy.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
            Watch real Bangalore celebrations in vertical reels. Hover to preview silently, or click any film to view with original audio.
          </p>
        </div>

        {/* ── UPGRADED CATEGORY FILTER CHIPS ── */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {portfolioCategories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setVisibleCount(8);
                }}
                style={{
                  letterSpacing: '0.18em',
                  transition: 'all 300ms ease',
                }}
                className={`px-5 py-2 rounded-full text-[11px] uppercase font-sans cursor-pointer focus:outline-none ${
                  isSelected
                    ? 'bg-[#C9A24B] text-[#3D0A14] font-bold shadow-[0_4px_18px_rgba(201,162,75,0.4)]'
                    : 'bg-white/10 text-white/85 border border-white/20 hover:border-gold-light hover:text-white hover:bg-white/15'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* ── RESPONSIVE REEL CARDS GRID (4 col desktop / 3 tablet / 2 mobile, gap 20px) ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {displayedItems.map((item, idx) => {
            const isHovered = hoveredId === item.id;
            return (
              <ReelCard
                key={item.id || idx}
                item={item}
                idx={idx}
                isHovered={isHovered}
                onHoverStart={() => setHoveredId(item.id)}
                onHoverEnd={() => setHoveredId(null)}
                onClick={() => openModal(item, idx)}
              />
            );
          })}
        </div>

        {/* ── LOAD MORE REELS BUTTON ── */}
        <div className="mt-16 flex flex-col items-center justify-center text-center">
          {hasMore ? (
            <button
              type="button"
              onClick={handleLoadMore}
              style={{
                height: '48px',
                padding: '0 36px',
                border: '1px solid #C9A24B',
                borderRadius: '4px',
                letterSpacing: '0.25em',
                transition: 'all 300ms ease',
              }}
              className="text-gold-light uppercase text-xs font-semibold bg-transparent hover:bg-[#C9A24B] hover:text-[#3D0A14] cursor-pointer inline-flex items-center justify-center"
            >
              LOAD MORE REELS
            </button>
          ) : (
            <div className="flex flex-col items-center">
              <button
                disabled
                style={{
                  height: '48px',
                  padding: '0 36px',
                  border: '1px solid rgba(201,162,75,0.3)',
                  borderRadius: '4px',
                  letterSpacing: '0.25em',
                }}
                className="text-white/40 uppercase text-xs font-semibold bg-transparent cursor-not-allowed"
              >
                YOU'VE SEEN IT ALL
              </button>
              <button
                onClick={() => navigate ? navigate('/contact') : (window.location.href = '/contact')}
                className="mt-3 text-xs tracking-[0.2em] uppercase font-semibold text-gold-light hover:underline inline-flex items-center gap-1"
              >
                <span>Plan Your Celebration</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
          <span className="text-[11px] tracking-[0.2em] uppercase text-white/60 font-light mt-3">
            SHOWING {displayedItems.length} OF {filteredItems.length}
          </span>
        </div>

      </div>

      {/* ── FULLSCREEN VERTICAL REEL MODAL ── */}
      <AnimatePresence>
        {activeModalItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveModalItem(null)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-5 right-5 sm:top-8 sm:right-8 z-50 w-11 h-11 rounded-full bg-white/15 text-white hover:bg-gold hover:text-[#3D0A14] flex items-center justify-center transition-all focus:outline-none"
              aria-label="Close film"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevModal();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/10 text-white hover:bg-gold hover:text-[#3D0A14] hidden md:flex items-center justify-center transition-all focus:outline-none"
              aria-label="Previous reel"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNextModal();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/10 text-white hover:bg-gold hover:text-[#3D0A14] hidden md:flex items-center justify-center transition-all focus:outline-none"
              aria-label="Next reel"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Vertical 9:16 Video Player Container */}
            <motion.div
              key={activeModalItem.id}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[420px] aspect-[9/16] max-h-[85vh] rounded-[22px] overflow-hidden bg-black shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-gold/40 flex items-center justify-center"
            >
              <video
                src={activeModalItem.videoUrl}
                poster={activeModalItem.poster || activeModalItem.image}
                autoPlay
                playsInline
                loop
                muted={isMuted}
                className="w-full h-full object-cover"
              />

              {/* Sound Toggle */}
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="absolute top-4 left-4 z-30 p-2.5 rounded-full bg-black/60 text-white hover:bg-gold hover:text-[#3D0A14] transition-colors backdrop-blur-md"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              {/* Bottom Scrim & Info */}
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white pointer-events-none">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] tracking-wider uppercase font-semibold bg-gold text-[#3D0A14]">
                  {activeModalItem.category}
                </span>
                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-2xl font-normal leading-tight mt-2 text-white"
                >
                  {activeModalItem.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-white/80 font-light">
                  {activeModalItem.location && (
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-gold" />
                      {activeModalItem.location}
                    </span>
                  )}
                  {activeModalItem.date && (
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gold" />
                      {activeModalItem.date}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ReelCard({ item, idx, isHovered, onHoverStart, onHoverEnd, onClick }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isHovered && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    } else if (!isHovered && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isHovered]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (idx % 4) * 0.08, duration: 0.5 }}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onClick={onClick}
      className={`group relative aspect-[9/16] rounded-[22px] overflow-hidden bg-black/60 shadow-[0_8px_30px_rgba(0,0,0,0.35)] cursor-pointer transition-all duration-500 ${
        isHovered ? '-translate-y-1.5 ring-1 ring-[#C9A24B] shadow-[0_16px_40px_rgba(201,162,75,0.3)]' : 'border border-white/10'
      }`}
    >
      {/* 1. Poster Frame */}
      <img
        src={item.poster || item.image}
        alt={item.title}
        loading="lazy"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          isHovered ? 'opacity-0' : 'opacity-100 group-hover:scale-105'
        }`}
      />

      {/* 2. Inline Silent Video Preview (plays on hover) */}
      <video
        ref={videoRef}
        src={item.videoUrl}
        muted
        loop
        playsInline
        preload="none"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* 3. Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

      {/* 4. Event Type Pill */}
      <div className="absolute top-3.5 left-3.5 z-10 pointer-events-none">
        <span className="px-2.5 py-1 rounded-full text-[9.5px] tracking-wider uppercase font-bold bg-white/90 text-[#3D0A14] backdrop-blur-md shadow-sm">
          {item.category}
        </span>
      </div>

      {/* 5. Centered Frosted Play Button */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-md text-white border border-white/40 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#C9A24B] group-hover:text-[#3D0A14] group-hover:border-[#C9A24B] transition-all duration-300">
          <Play className="w-5 h-5 fill-current ml-0.5" />
        </div>
      </div>

      {/* 6. Bottom Details */}
      <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 text-white z-10 pointer-events-none">
        <h3
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="text-base sm:text-lg font-normal leading-tight group-hover:text-gold-light transition-colors line-clamp-1 text-white"
        >
          {item.title}
        </h3>
        <div className="flex flex-col gap-0.5 mt-1 text-[11px] text-white/80 font-light">
          {item.location && (
            <span className="inline-flex items-center gap-1 truncate">
              <MapPin className="w-3 h-3 text-[#C9A24B] shrink-0" />
              <span className="truncate">{item.location}</span>
            </span>
          )}
          {item.date && (
            <span className="inline-flex items-center gap-1 text-[10px] text-white/60">
              <Calendar className="w-2.5 h-2.5 text-[#C9A24B] shrink-0" />
              <span>{item.date}</span>
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
