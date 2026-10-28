import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Volume2, VolumeX, Play, Pause, Sparkles } from 'lucide-react';
import { celebReviewsData } from '../data/celebReviews';
import './celebVideoSlider.css';

export default function CelebVideoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const isVisibleRef = useRef(true);

  const total = celebReviewsData.length;

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    const handler = (e) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Ensure current active video starts playing immediately (unmuted if allowed, muted fallback if policy requires)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = isMuted;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // If browser autoplay policy blocked unmuted sound without interaction, mute & play
          video.muted = true;
          setIsMuted(true);
          video.play().catch(() => {});
        });
    }
  }, [currentIndex, isMuted]);

  // IntersectionObserver to pause video when off-screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (videoRef.current) {
          if (entry.isIntersecting) {
            if (isPlaying) {
              videoRef.current.play().catch(() => {});
            }
          } else {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, [isPlaying]);

  // Navigate functions with wrap-around infinite loop
  const nextSlide = useCallback(() => {
    setIsPlaying(true);
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setIsPlaying(true);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (idx) => {
    if (idx === currentIndex) return;
    setIsPlaying(true);
    setCurrentIndex(idx);
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextSlide();
    }
  };

  // Touch swipe handling
  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(null);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX !== null && touchEndX !== null) {
      const distance = touchStartX - touchEndX;
      const minSwipeDistance = 45;
      if (distance > minSwipeDistance) {
        nextSlide();
      } else if (distance < -minSwipeDistance) {
        prevSlide();
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  // Toggle Play/Pause on center card tap (also unmutes audio on user interaction)
  const togglePlayPause = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isMuted) {
      videoRef.current.muted = false;
      setIsMuted(false);
    }
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  // Toggle Mute on pill button
  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMute = !isMuted;
    videoRef.current.muted = nextMute;
    setIsMuted(nextMute);
  };

  // Auto-advance when video ends (only if user hasn't unmuted and isn't hovering)
  const handleVideoEnded = () => {
    if (isMuted && !isHovered) {
      nextSlide();
    }
  };

  // Active item
  const activeItem = celebReviewsData[currentIndex];

  // Preload URLs for adjacent slides
  const prevIdx = (currentIndex - 1 + total) % total;
  const nextIdx = (currentIndex + 1) % total;

  return (
    <section
      ref={sectionRef}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Celebrity Testimonials Video Carousel"
      className="relative w-full py-20 sm:py-28 bg-gradient-to-b from-[#FFF9F0] via-[#FAF3EA] to-[#FFF9F0] text-[#3D0A14] overflow-hidden focus:outline-none select-none"
    >
      {/* Background soft ambient celebration glows */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 rounded-full bg-gold/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-24 w-96 h-96 rounded-full bg-rose/15 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* ── Section Heading & Eyebrow (kept exactly as required) ── */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-white/90 shadow-sm backdrop-blur-sm mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-[11px] tracking-[0.25em] uppercase font-semibold text-gold-dark">
              Celebrity & VIP Endorsements
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight text-[#3D0A14]"
          >
            Loved by stars, cherished by <span className="gold-glow-word">families.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-sm sm:text-base md:text-lg text-[#5A2A27] font-light leading-relaxed"
          >
            Watch real heartfelt moments and live video testimonials from renowned artists, celebrities, and families who trusted Sudee with their landmark celebrations.
          </motion.p>
        </div>

        {/* ── COVERFLOW VIDEO SLIDER STAGE ── */}
        <div
          className="relative w-full max-w-6xl mx-auto flex items-center justify-center my-6"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Circular Left Arrow Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="celeb-nav-btn celeb-nav-btn-prev absolute left-2 sm:left-4 lg:-left-2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-[#EEDDC8] shadow-[0_4px_20px_rgba(201,162,75,0.15)] hover:border-gold hover:shadow-[0_6px_25px_rgba(201,162,75,0.3)] hover:scale-108 active:scale-95 transition-all duration-300 flex items-center justify-center text-[#3D0A14] hover:text-gold focus-visible:ring-2 focus-visible:ring-gold focus:outline-none"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* 3D Perspective Stage Container */}
          <div className="relative w-full h-[470px] sm:h-[530px] md:h-[580px] flex items-center justify-center celeb-slider-perspective overflow-visible">
            {celebReviewsData.map((item, idx) => {
              // Calculate circular offset relative to active card (-2, -1, 0, 1, 2)
              const rawDiff = (idx - currentIndex + total) % total;
              let offset = rawDiff;
              if (offset > total / 2) {
                offset -= total;
              }

              const isCenter = offset === 0;

              // Coverflow values
              let xOffset = '0%';
              let scale = 1;
              let rotateY = 0;
              let opacity = 1;
              let zIndex = 30;

              if (offset === 0) {
                xOffset = '0%';
                scale = 1;
                rotateY = 0;
                opacity = 1;
                zIndex = 30;
              } else if (offset === 1) {
                // Immediate Right
                xOffset = '75%';
                scale = 0.82;
                rotateY = isReducedMotion ? 0 : -10;
                opacity = 0.75;
                zIndex = 20;
              } else if (offset === -1) {
                // Immediate Left
                xOffset = '-75%';
                scale = 0.82;
                rotateY = isReducedMotion ? 0 : 10;
                opacity = 0.75;
                zIndex = 20;
              } else if (offset > 1) {
                // Far Right
                xOffset = '145%';
                scale = 0.68;
                rotateY = isReducedMotion ? 0 : -14;
                opacity = 0.35;
                zIndex = 10;
              } else {
                // Far Left
                xOffset = '-145%';
                scale = 0.68;
                rotateY = isReducedMotion ? 0 : 14;
                opacity = 0.35;
                zIndex = 10;
              }

              return (
                <motion.div
                  key={item.id}
                  onClick={() => {
                    if (!isCenter) goToSlide(idx);
                  }}
                  animate={{
                    x: xOffset,
                    scale: scale,
                    rotateY: rotateY,
                    opacity: opacity,
                    zIndex: zIndex,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 140,
                    damping: 20,
                    mass: 1,
                  }}
                  style={{
                    position: 'absolute',
                  }}
                  className={`celeb-card-3d w-[260px] sm:w-[290px] md:w-[320px] aspect-[9/16] rounded-[20px] overflow-hidden bg-black ${
                    isCenter
                      ? 'shadow-[0_16px_45px_rgba(201,162,75,0.22)] ring-1 ring-gold/40 cursor-pointer'
                      : 'cursor-pointer'
                  }`}
                >
                  {/* Media Rendering */}
                  {isCenter ? (
                    <div
                      className="relative w-full h-full"
                      onClick={togglePlayPause}
                    >
                      <video
                        ref={videoRef}
                        key={item.video}
                        src={item.video}
                        poster={item.poster}
                        playsInline
                        webkit-playsinline="true"
                        muted={isMuted}
                        loop
                        autoPlay
                        preload="auto"
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        onEnded={handleVideoEnded}
                        className="w-full h-full object-cover object-center select-none"
                      />

                      {/* Gentle top & bottom vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

                      {/* Top-Right Mute/Unmute Pill Button */}
                      <button
                        onClick={toggleMute}
                        aria-label={isMuted ? 'Unmute testimonial audio' : 'Mute testimonial audio'}
                        className="absolute top-3.5 right-3.5 z-30 px-2.5 py-1.5 rounded-full bg-black/60 hover:bg-black/85 border border-white/20 backdrop-blur-md text-white flex items-center gap-1.5 text-xs shadow-md transition-colors"
                      >
                        {isMuted ? (
                          <>
                            <VolumeX className="w-3.5 h-3.5 text-white/90" />
                            <span className="text-[10px] tracking-wider uppercase font-semibold">Muted</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-3.5 h-3.5 text-gold" />
                            <span className="text-[10px] tracking-wider uppercase font-semibold text-gold">Sound On</span>
                          </>
                        )}
                      </button>

                      {/* Play/Pause Overlay Indicator on Centre Video */}
                      {!isPlaying && (
                        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none bg-black/25 backdrop-blur-[2px]">
                          <div className="w-14 h-14 rounded-full bg-white/90 text-[#3D0A14] flex items-center justify-center shadow-2xl celeb-play-indicator">
                            <Play className="w-6 h-6 fill-current ml-0.5 text-gold" />
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="relative w-full h-full">
                      <img
                        src={item.poster}
                        alt={item.name}
                        loading="lazy"
                        className="w-full h-full object-cover select-none"
                      />
                      <div className="absolute inset-0 bg-black/35 pointer-events-none" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Circular Right Arrow Button */}
          <button
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="celeb-nav-btn celeb-nav-btn-next absolute right-2 sm:right-4 lg:-right-2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-[#EEDDC8] shadow-[0_4px_20px_rgba(201,162,75,0.15)] hover:border-gold hover:shadow-[0_6px_25px_rgba(201,162,75,0.3)] hover:scale-108 active:scale-95 transition-all duration-300 flex items-center justify-center text-[#3D0A14] hover:text-gold focus-visible:ring-2 focus-visible:ring-gold focus:outline-none"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* ── CELEBRITY CAPTION DETAILS UNDER CENTRE CARD ── */}
        <div className="mt-8 text-center min-h-[110px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center"
            >
              {/* Celebrity Thumbnail avatar */}
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold/60 shadow-md mb-2.5 bg-white p-0.5">
                <img
                  src={activeItem.poster}
                  alt={activeItem.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Name in elegant serif */}
              <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#3D0A14] leading-snug">
                {activeItem.name}
              </h3>

              {/* Role in small text */}
              <p className="text-xs sm:text-sm text-[#5A2A27] font-light mt-0.5">
                {activeItem.role}
              </p>

              {/* Event in gold small caps badge */}
              <span className="text-[10px] sm:text-[11px] tracking-[0.22em] uppercase font-bold text-gold-dark mt-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/25 shadow-sm">
                {activeItem.event}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── DOT INDICATORS UNDER CAPTION ── */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {celebReviewsData.map((item, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={item.id}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}: ${item.name}`}
                className={`transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-full ${
                  isActive
                    ? 'w-7 h-2 bg-gradient-to-r from-gold-dark via-gold to-gold-light shadow-sm'
                    : 'w-2 h-2 bg-[#EEDDC8] hover:bg-gold/60'
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
