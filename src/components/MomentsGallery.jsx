import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles, ArrowUpRight } from 'lucide-react';
import { galleryPhotos } from '../data/gallery';

export default function MomentsGallery({ navigate }) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(12);
  const [touchStartX, setTouchStartX] = useState(null);

  const displayedPhotos = galleryPhotos.slice(0, visibleCount);
  const hasMore = visibleCount < galleryPhotos.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 12, galleryPhotos.length));
  };

  // Keyboard navigation & Esc to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') {
        setSelectedPhotoIndex(null);
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex]);

  const handleNext = () => {
    setSelectedPhotoIndex((prev) => (prev + 1) % galleryPhotos.length);
  };

  const handlePrev = () => {
    setSelectedPhotoIndex((prev) => (prev - 1 + galleryPhotos.length) % galleryPhotos.length);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  const activePhoto = selectedPhotoIndex !== null ? galleryPhotos[selectedPhotoIndex] : null;

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#FFF9F0] text-[#3D0A14] overflow-hidden border-t border-[#EEDDC8]">
      {/* Subtle gold ambient watermark */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-white/80 shadow-sm backdrop-blur-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
            <span className="text-[11px] tracking-[0.25em] uppercase font-semibold text-gold-dark">
              Moments We Created
            </span>
          </div>
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight text-[#3D0A14]"
          >
            A tapestry of ancestral warmth & <span className="text-[#C9A24B] italic">luxury.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5A2A27]/80 font-light max-w-2xl mx-auto leading-relaxed">
            Every celebration captured in its natural grandeur. Explore our unfiltered archival photography across sacred South Indian mandaps, joyous haldi petal showers, and royal banquet halls.
          </p>
        </div>

        {/* ── MASONRY GRID (4 col desktop / 3 tablet / 2 mobile, gap 18px, radius 20px) ── */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-[18px] space-y-[18px]">
          {displayedPhotos.map((photo, idx) => (
            <motion.div
              key={photo.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 4) * 0.06, duration: 0.5 }}
              onClick={() => setSelectedPhotoIndex(idx)}
              className="break-inside-avoid relative rounded-[20px] overflow-hidden bg-[#FAF3EA] border border-[#EEDDC8] shadow-[0_4px_20px_rgba(201,162,75,0.08)] cursor-pointer group"
            >
              <div
                className="w-full relative"
                style={{
                  backgroundImage: `url(${photo.blur})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <img
                  src={photo.thumb}
                  alt={photo.title}
                  width={photo.width}
                  height={photo.height}
                  loading="lazy"
                  className="w-full h-auto block object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                />
              </div>

              {/* Hover Overlay: Dark Gradient & Expand Icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 pointer-events-none">
                <div className="flex justify-end">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="text-white">
                  <span className="text-[9.5px] uppercase tracking-[0.2em] font-semibold text-gold-light">
                    {photo.category}
                  </span>
                  <p
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-sm font-normal text-white mt-0.5 line-clamp-1"
                  >
                    {photo.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── LOAD MORE PHOTOS BUTTON ── */}
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
              className="text-[#3D0A14] uppercase text-xs font-semibold bg-transparent hover:bg-[#C9A24B] hover:text-white cursor-pointer inline-flex items-center justify-center"
            >
              LOAD MORE
            </button>
          ) : (
            <div className="flex flex-col items-center">
              <button
                disabled
                style={{
                  height: '48px',
                  padding: '0 36px',
                  border: '1px solid rgba(201,162,75,0.4)',
                  borderRadius: '4px',
                  letterSpacing: '0.25em',
                }}
                className="text-[#5A2A27]/40 uppercase text-xs font-semibold bg-transparent cursor-not-allowed"
              >
                YOU'VE SEEN IT ALL
              </button>
              <button
                onClick={() => navigate ? navigate('/contact') : (window.location.href = '/contact')}
                className="mt-3 text-xs tracking-[0.2em] uppercase font-semibold text-gold-dark hover:underline inline-flex items-center gap-1"
              >
                <span>Plan Your Celebration</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
          <span className="text-[11px] tracking-[0.2em] uppercase text-[#5A2A27]/60 font-light mt-3">
            SHOWING {displayedPhotos.length} OF {galleryPhotos.length}
          </span>
        </div>

      </div>

      {/* ── LIGHTBOX MODAL ── */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedPhotoIndex(null)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Top Bar: Counter & Close */}
            <div className="absolute top-5 inset-x-5 sm:top-8 sm:inset-x-8 z-50 flex items-center justify-between text-white pointer-events-none">
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-gold-light bg-black/40 px-3 py-1 rounded-full backdrop-blur-md">
                {selectedPhotoIndex + 1} / {galleryPhotos.length}
              </span>
              <button
                onClick={() => setSelectedPhotoIndex(null)}
                className="w-11 h-11 rounded-full bg-white/15 text-white hover:bg-gold hover:text-[#3D0A14] flex items-center justify-center transition-all focus:outline-none pointer-events-auto"
                aria-label="Close photo"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Prev Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/10 text-white hover:bg-gold hover:text-[#3D0A14] hidden md:flex items-center justify-center transition-all focus:outline-none"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/10 text-white hover:bg-gold hover:text-[#3D0A14] hidden md:flex items-center justify-center transition-all focus:outline-none"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Photo Container */}
            <motion.div
              key={activePhoto.id}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
            >
              <img
                src={activePhoto.full}
                alt={activePhoto.title}
                className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-[0_25px_70px_rgba(0,0,0,0.85)] border border-white/15"
              />
              <div className="mt-4 text-center text-white pointer-events-none">
                <span className="text-[10px] tracking-[0.25em] uppercase text-gold font-semibold">
                  {activePhoto.category}
                </span>
                <p
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-base text-white/90 mt-0.5"
                >
                  {activePhoto.title}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
