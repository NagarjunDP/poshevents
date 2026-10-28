import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowUpRight, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { filmData } from '../data/filmData';

export default function FilmReelSection({ navigate }) {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [hasAnimatedHeading, setHasAnimatedHeading] = useState(false);
  const [hoveredRow, setHoveredRow] = useState(null);
  const [hoveredPhotoId, setHoveredPhotoId] = useState(null);
  const [activePhoto, setActivePhoto] = useState(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [centerActiveId, setCenterActiveId] = useState(null);
  const [mousePos, setMousePos] = useState({ x: -999, y: -999 });
  const [scrollSkew, setScrollSkew] = useState(0);
  const [marqueeDirection, setMarqueeDirection] = useState(1);
  const lastScrollY = useRef(0);

  // Distribute unique photos into Row 1 (odd) and Row 2 (even)
  // 12 unique items per row, 24 unique photos total
  const row1Items = filmData.filter((_, i) => i % 2 === 0);
  const row2Items = filmData.filter((_, i) => i % 2 === 1);

  // Check touch device
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  // IntersectionObserver to pause animations when off-screen
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting && !hasAnimatedHeading) {
          setHasAnimatedHeading(true);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimatedHeading]);

  // Scroll skew & marquee direction calculation
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const deltaY = currentY - lastScrollY.current;
      lastScrollY.current = currentY;

      // Invert marquee if scrolling up
      if (deltaY > 0) setMarqueeDirection(1);
      else if (deltaY < 0) setMarqueeDirection(-1);

      // Skew heading up to 4deg with scroll velocity
      const clampedSkew = Math.max(-4, Math.min(4, deltaY * 0.15));
      setScrollSkew(clampedSkew);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Spring back skew
  useEffect(() => {
    if (scrollSkew !== 0) {
      const timer = setTimeout(() => setScrollSkew(0), 120);
      return () => clearTimeout(timer);
    }
  }, [scrollSkew]);

  // Track mouse for heading letter lift & spotlight
  const handleMouseMove = useCallback((e) => {
    if (headingRef.current) {
      const rect = headingRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  }, []);

  // Center-detection on mobile
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    if (!isTouchDevice) return;
    const checkCenter = () => {
      const centerX = window.innerWidth / 2;
      const elements = document.querySelectorAll('[data-film-id]');
      let closestId = null;
      let minDistance = Infinity;

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const elCenter = rect.left + rect.width / 2;
        const dist = Math.abs(centerX - elCenter);
        if (dist < minDistance && dist < rect.width) {
          minDistance = dist;
          closestId = el.getAttribute('data-film-id');
        }
      });
      if (closestId) setCenterActiveId(closestId);
    };

    const interval = setInterval(checkCenter, 200);
    return () => clearInterval(interval);
  }, [isTouchDevice]);

  // Lightbox handlers
  const openLightbox = (photo, idx) => {
    setActivePhoto(photo);
    setActivePhotoIndex(idx);
  };

  const handleNext = () => {
    const nextIdx = (activePhotoIndex + 1) % filmData.length;
    setActivePhotoIndex(nextIdx);
    setActivePhoto(filmData[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (activePhotoIndex - 1 + filmData.length) % filmData.length;
    setActivePhotoIndex(prevIdx);
    setActivePhoto(filmData[prevIdx]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (!activePhoto) return;
      if (e.key === 'Escape') setActivePhoto(null);
      else if (e.key === 'ArrowRight') handleNext();
      else if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activePhoto, activePhotoIndex]);

  // Heading Letters split
  const headingText = "Frames of ";
  const italicText = "pure joy.";

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative w-full py-28 lg:py-[120px] bg-gradient-to-b from-[#1A0A0E] via-[#240D15] to-[#3A0F18] text-white overflow-hidden select-none"
    >
      {/* ── Background Outlined Marquee ── */}
      <div
        className="absolute top-12 inset-x-0 overflow-hidden pointer-events-none opacity-20 whitespace-nowrap z-0"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        }}
      >
        <div
          className={`inline-block font-display uppercase tracking-widest font-extrabold ${
            marqueeDirection === 1 ? 'animate-[marquee_60s_linear_infinite]' : 'animate-[marquee-reverse_60s_linear_infinite]'
          }`}
          style={{
            fontSize: 'clamp(80px, 12vw, 180px)',
            WebkitTextStroke: '1px rgba(255, 255, 255, 0.15)',
            color: 'transparent',
            lineHeight: 1,
          }}
        >
          REAL WEDDINGS • REAL JOY • REAL STORIES • REAL WEDDINGS • REAL JOY • REAL STORIES •&nbsp;
        </div>
      </div>

      {/* ── Projector Dust Specks (4 to 6 floating) ── */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#FFF0C8] blur-[1px] animate-pulse"
            style={{
              width: `${(i % 3) + 2}px`,
              height: `${(i % 3) + 2}px`,
              top: `${(i * 18 + 10) % 90}%`,
              left: `${(i * 16 + 5) % 95}%`,
              opacity: 0.35,
              animationDuration: `${3 + i}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-center z-20">
        
        {/* Label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-white/5 backdrop-blur-md mb-4">
          <Sparkles className="w-3.5 h-3.5 text-gold-light" />
          <span className="text-[11px] tracking-[0.25em] uppercase font-semibold text-gold-light">
            THROUGH OUR LENS
          </span>
        </div>

        {/* ── H2 Heading with Film-Develop Letter Animation ── */}
        <div
          ref={headingRef}
          style={{
            transform: `skewY(${scrollSkew}deg)`,
            transition: 'transform 0.2s ease-out',
          }}
          className="relative inline-block text-center mt-2 mb-4"
        >
          <h2
            aria-label="Frames of pure joy."
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(36px, 6vw, 76px)',
              lineHeight: 1.15,
            }}
            className="font-normal text-white relative z-10 m-0 p-0"
          >
            {/* Standard letters */}
            {headingText.split('').map((char, idx) => (
              <FilmLetter
                key={idx}
                char={char}
                idx={idx}
                hasAnimated={hasAnimatedHeading}
                mousePos={mousePos}
                isTouch={isTouchDevice}
              />
            ))}
            {/* Italic letters in gold */}
            {italicText.split('').map((char, idx) => (
              <FilmLetter
                key={idx + headingText.length}
                char={char}
                idx={idx + headingText.length}
                isItalic
                hasAnimated={hasAnimatedHeading}
                mousePos={mousePos}
                isTouch={isTouchDevice}
              />
            ))}
          </h2>

          {/* Projector Light Bar Beam (sweeps across once, 1.2s) */}
          {hasAnimatedHeading && (
            <div
              className="absolute inset-y-0 -inset-x-20 pointer-events-none overflow-hidden"
              style={{ mixBlendMode: 'soft-light' }}
            >
              <div
                className="w-32 h-full bg-gradient-to-r from-transparent via-[#FFF0C8]/50 to-transparent -skew-x-12 animate-[sweep_1.2s_ease-out_forwards]"
                style={{
                  animationDelay: '0.8s',
                  transform: 'translateX(-120%)',
                }}
              />
            </div>
          )}
        </div>

        {/* 2-line Subtext */}
        <p className="text-sm sm:text-base text-white/75 font-light max-w-xl mx-auto leading-relaxed mt-2 mb-14">
          {isTouchDevice ? 'Swipe through our memories.' : 'Hover over a memory and watch it come alive.'}
        </p>

      </div>

      {/* ── THE 80s FILM TAPES (FULL BLEED, DUAL TILTING ENDLESS STRIPS) ── */}
      <div className="relative w-full overflow-hidden my-4 py-8">
        {/* Soft edge fades to dark background */}
        <div className="absolute inset-y-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-[#1A0A0E] to-transparent z-30 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-[#1A0A0E] to-transparent z-30 pointer-events-none" />

        {/* ── ROW 1: TILT -2deg, ENDLESS SLIDE LEFT ── */}
        <div
          ref={row1Ref}
          onMouseEnter={() => setHoveredRow(1)}
          onMouseLeave={() => setHoveredRow(null)}
          style={{ transform: 'rotate(-2deg)' }}
          className="relative w-full overflow-hidden my-6 transition-transform duration-500"
        >
          <FilmStripTrack
            items={row1Items}
            direction="left"
            duration="70s"
            isSlowed={hoveredRow === 1}
            hoveredPhotoId={hoveredPhotoId}
            centerActiveId={centerActiveId}
            onHoverPhoto={setHoveredPhotoId}
            onOpenLightbox={openLightbox}
            isTouchDevice={isTouchDevice}
          />
        </div>

        {/* ── ROW 2: TILT +1.5deg, ENDLESS SLIDE RIGHT ── */}
        <div
          ref={row2Ref}
          onMouseEnter={() => setHoveredRow(2)}
          onMouseLeave={() => setHoveredRow(null)}
          style={{ transform: 'rotate(1.5deg)' }}
          className="relative w-full overflow-hidden my-6 transition-transform duration-500"
        >
          <FilmStripTrack
            items={row2Items}
            direction="right"
            duration="85s"
            isSlowed={hoveredRow === 2}
            hoveredPhotoId={hoveredPhotoId}
            centerActiveId={centerActiveId}
            onHoverPhoto={setHoveredPhotoId}
            onOpenLightbox={openLightbox}
            isTouchDevice={isTouchDevice}
          />
        </div>
      </div>

      {/* ── CTA Below Strips: "VIEW FULL PORTFOLIO" to /portfolio ── */}
      <div className="relative z-20 mt-14 flex justify-center">
        <button
          type="button"
          onClick={() => (navigate ? navigate('/portfolio') : (window.location.href = '/portfolio'))}
          style={{
            height: '48px',
            padding: '0 36px',
            border: '1px solid #C9A24B',
            borderRadius: '4px',
            letterSpacing: '0.24em',
            transition: 'all 300ms ease',
          }}
          className="text-gold-light uppercase text-xs font-semibold bg-transparent hover:bg-[#C9A24B] hover:text-[#1A0A0E] cursor-pointer inline-flex items-center justify-center shadow-lg"
        >
          <span>VIEW FULL PORTFOLIO</span>
          <ArrowUpRight className="w-3.5 h-3.5 ml-2" />
        </button>
      </div>

      {/* ── LIGHTBOX MODAL (COLOUR) ── */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setActivePhoto(null)}
          >
            {/* Top Bar: Counter & Close */}
            <div className="absolute top-5 inset-x-5 sm:top-8 sm:inset-x-8 z-50 flex items-center justify-between text-white pointer-events-none">
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-gold-light bg-black/40 px-3 py-1 rounded-full backdrop-blur-md">
                {activePhotoIndex + 1} / {filmData.length}
              </span>
              <button
                onClick={() => setActivePhoto(null)}
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

/* ────────── Film Letter Component (Letters with Latent Film Develop Animation & Cursor Proximity Lift) ────────── */
function FilmLetter({ char, idx, isItalic = false, hasAnimated, mousePos, isTouch }) {
  const spanRef = useRef(null);
  const [lift, setLift] = useState({ y: 0, scale: 1 });

  // Cursor proximity lift on desktop (<140px, lift 6px, scale 1.06)
  useEffect(() => {
    if (isTouch || !spanRef.current) return;
    const rect = spanRef.current.getBoundingClientRect();
    const letterCenterX = rect.left + rect.width / 2;
    const letterCenterY = rect.top + rect.height / 2;

    const dx = mousePos.x - (rect.left - (spanRef.current.parentElement?.getBoundingClientRect().left || 0) + rect.width / 2);
    const dy = mousePos.y - (rect.top - (spanRef.current.parentElement?.getBoundingClientRect().top || 0) + rect.height / 2);
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 140) {
      const factor = (1 - dist / 140);
      setLift({
        y: -6 * factor,
        scale: 1 + 0.06 * factor,
      });
    } else {
      setLift({ y: 0, scale: 1 });
    }
  }, [mousePos, isTouch]);

  return (
    <span
      ref={spanRef}
      aria-hidden="true"
      className={`relative inline-block transition-all ${
        hasAnimated ? 'animate-[filmDevelop_0.7s_cubic-bezier(0.16,1,0.3,1)_forwards]' : 'opacity-0'
      }`}
      style={{
        animationDelay: `${idx * 35}ms`,
        animationFillMode: 'forwards',
        display: 'inline-block',
        whiteSpace: char === ' ' ? 'pre' : 'normal',
        transform: `translateY(${lift.y}px) scale(${lift.scale})`,
        transition: 'transform 0.15s ease-out',
        color: isItalic ? '#C9A24B' : '#FFFFFF',
        fontStyle: isItalic ? 'italic' : 'normal',
      }}
    >
      {char}
    </span>
  );
}

/* ────────── Seamless Dual-Strip Film Track with 35mm Sprocket Rails & Edge Codes ────────── */
function FilmStripTrack({
  items,
  direction = 'left',
  duration = '70s',
  isSlowed,
  hoveredPhotoId,
  centerActiveId,
  onHoverPhoto,
  onOpenLightbox,
  isTouchDevice,
}) {
  // Duplicate list once for seamless infinite loop
  const seamlessList = [...items, ...items];

  return (
    <div
      style={{
        animationPlayState: isSlowed ? 'paused' : 'running',
      }}
      className={`flex items-center gap-6 w-max ${
        direction === 'left' ? 'animate-[filmSlideLeft_70s_linear_infinite]' : 'animate-[filmSlideRight_85s_linear_infinite]'
      }`}
    >
      {seamlessList.map((item, idx) => {
        const isHovered = hoveredPhotoId === item.id;
        const isCenterActive = isTouchDevice && centerActiveId === item.id;
        const isColor = isHovered || isCenterActive;
        const isDimmed = hoveredPhotoId !== null && !isHovered;

        return (
          <div
            key={`${item.id}-${idx}`}
            data-film-id={item.id}
            onMouseEnter={() => onHoverPhoto(item.id)}
            onMouseLeave={() => onHoverPhoto(null)}
            onClick={() => onOpenLightbox(item, idx % items.length)}
            style={{
              height: 'clamp(220px, 24vw, 340px)',
              aspectRatio: item.aspect || 1.33,
              zIndex: isColor ? 30 : 10,
              transform: isColor ? 'scale(1.08)' : 'scale(1)',
              boxShadow: isColor ? '0 0 40px rgba(201, 162, 75, 0.45)' : 'none',
              opacity: isDimmed ? 0.7 : 1,
              transition: 'transform 450ms ease, box-shadow 450ms ease, opacity 350ms ease',
            }}
            className="group relative bg-[#0B0507] p-2 sm:p-2.5 rounded-[4px] shrink-0 cursor-pointer flex flex-col justify-between overflow-hidden shadow-2xl"
          >
            {/* 1. Top Sprocket Rail (14x10px holes every 34px) */}
            <div className="w-full h-3 flex items-center justify-between px-1 pointer-events-none mb-1">
              <div
                className="w-full h-[9px]"
                style={{
                  background:
                    'repeating-linear-gradient(90deg, rgba(255,255,255,0.18) 0px, rgba(255,255,255,0.18) 14px, transparent 14px, transparent 34px)',
                  borderRadius: '2px',
                }}
              />
            </div>

            {/* 2. Photo Frame (6px black border, 4px radius) */}
            <div className="relative flex-1 w-full rounded-[4px] overflow-hidden border-[6px] border-black bg-black">
              <img
                src={item.src}
                alt={item.title}
                width={item.width}
                height={item.height}
                loading="eager"
                decoding="async"
                onError={(e) => {
                  if (item.full && e.target.src !== item.full) {
                    e.target.src = item.full;
                  }
                }}
                style={{
                  filter: isColor
                    ? 'none'
                    : 'grayscale(1) contrast(1.12) brightness(0.92) sepia(0.15)',
                  transition: 'filter 450ms ease',
                }}
                className="w-full h-full object-cover"
              />

              {/* Vintage Grain Overlay (fades out on hover) */}
              <div
                className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
                  isColor ? 'opacity-0' : 'opacity-[0.14]'
                }`}
                style={{
                  backgroundImage:
                    'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 0)',
                  backgroundSize: '4px 4px',
                }}
              />

              {/* Faint vertical tape scratches */}
              <div
                className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
                  isColor ? 'opacity-0' : 'opacity-[0.06]'
                }`}
                style={{
                  background:
                    'linear-gradient(90deg, transparent 40%, rgba(255,255,255,0.5) 41%, transparent 42%)',
                }}
              />
            </div>

            {/* 3. Bottom Edge Code & Frame Number (Amber Monospace) */}
            <div className="w-full mt-1.5 flex items-center justify-between px-1 text-[9px] font-mono tracking-wider text-[#E8A317]/80 pointer-events-none select-none">
              <span>{item.edgeCode}</span>
              <span className="font-bold">{item.frameNum}</span>
            </div>

            {/* 4. Bottom Sprocket Rail */}
            <div className="w-full h-3 flex items-center justify-between px-1 pointer-events-none mt-1">
              <div
                className="w-full h-[9px]"
                style={{
                  background:
                    'repeating-linear-gradient(90deg, rgba(255,255,255,0.18) 0px, rgba(255,255,255,0.18) 14px, transparent 14px, transparent 34px)',
                  borderRadius: '2px',
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
