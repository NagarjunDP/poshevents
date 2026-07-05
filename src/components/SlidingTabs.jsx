import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

export default function SlidingTabs() {
  const [hoveredSide, setHoveredSide] = useState('none'); // 'none', 'traditional', 'contemporary'
  const [sliderPosition, setSliderPosition] = useState(50); // percentage for mobile compare slider
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const isScrollInView = useInView(scrollRef, { once: true, margin: "-100px" });
  const [isMobile, setIsMobile] = useState(false);

  // Responsive check
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTouchMove = (e) => {
    if (!isMobile || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touchX = e.touches[0].clientX;
    const relativeX = touchX - rect.left;
    const percentage = (relativeX / rect.width) * 100;
    setSliderPosition(Math.max(5, Math.min(95, percentage)));
  };

  const handleMouseMove = (e) => {
    if (!isMobile || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const percentage = (mouseX / rect.width) * 100;
    setSliderPosition(Math.max(5, Math.min(95, percentage)));
  };

  return (
    <section id="weddings" className="py-14 md:py-24 bg-[#14203A] relative overflow-hidden border-b border-[#C9A25E]/20">
      
      {/* Decorative Brand Header */}
      <div className="container mx-auto px-6 md:px-12 text-center mb-16 relative z-10" ref={scrollRef}>
        <span className="font-sans text-[#C9A25E] tracking-[0.25em] text-xs font-semibold uppercase mb-3 block">
          AESTHETIC DUALITY
        </span>
        <h2 className="text-4xl md:text-5xl font-serif text-[#FAF8F3] mb-4">
          Ritual Meets Staging
        </h2>
        {/* Draw on Scroll line matching brand monogram motif */}
        <div className="flex items-center justify-center mt-4 w-40 h-[1.5px] mx-auto">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isScrollInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full bg-gradient-to-r from-transparent via-[#C9A25E] to-transparent origin-center"
          />
        </div>
      </div>

      {/* DESKTOP SPLIT COMPARISON LAYOUT */}
      {!isMobile ? (
        <div 
          className="relative w-full h-[70vh] flex overflow-hidden border-y border-[#C9A25E]/20"
          onMouseLeave={() => setHoveredSide('none')}
        >
          {/* Traditional Panel (Left) */}
          <div
            onMouseEnter={() => setHoveredSide('traditional')}
            style={{
              width: hoveredSide === 'traditional' ? '62%' : hoveredSide === 'contemporary' ? '38%' : '50%',
              transition: 'width 0.65s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            className="relative h-full overflow-hidden group cursor-pointer"
          >
            {/* Image background with warner/gold grade overlay */}
            <img
              src="/Rooted in tradition, elevated with luxury ✨A premium coconut leaf baby shower decor curated with.jpg"
              alt="Traditional Milestones"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-102"
            />
            {/* Gold tone grading overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#14203A]/95 via-[#1B2846]/60 to-transparent mix-blend-multiply opacity-80" />
            <div className="absolute inset-0 bg-[#8A6B2E]/15 mix-blend-color-burn" />

            {/* Content overlay */}
            <div className="absolute inset-0 p-12 flex flex-col justify-between z-10 text-[#FAF8F3]">
              <div>
                <span className="font-sans text-[#E3C285] tracking-[0.25em] text-[10px] font-semibold uppercase mb-2 block">
                  HERITAGE DESIGN
                </span>
                <h3 className="font-serif text-3xl md:text-5xl leading-tight">
                  Traditional Milestones
                </h3>
              </div>

              <div className="max-w-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <p className="font-sans text-xs md:text-sm text-[#F1ECE1]/80 leading-relaxed mb-6">
                  Rooted deeply in our rich heritage. We orchestrate traditional South Indian rituals with authentic floral arrangements, jasmine accents, and brass structures.
                </p>
                <a 
                  href="#contact" 
                  className="group relative inline-flex items-center text-[#E3C285] text-xs font-semibold tracking-widest uppercase py-2"
                >
                  View Portfolio
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#E3C285] transition-all duration-300 group-hover:w-full" />
                </a>
              </div>
            </div>
          </div>

          {/* Centered Vertical Gold Line Divider (drawn on scroll) */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-[#8A6B2E] via-[#E3C285] to-[#8A6B2E] z-20 pointer-events-none origin-top transition-transform duration-1000" />

          {/* Contemporary Panel (Right) */}
          <div
            onMouseEnter={() => setHoveredSide('contemporary')}
            style={{
              width: hoveredSide === 'contemporary' ? '62%' : hoveredSide === 'traditional' ? '38%' : '50%',
              transition: 'width 0.65s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            className="relative h-full overflow-hidden group cursor-pointer"
          >
            {/* Image background with cooler/navy grade overlay */}
            <img
              src="/welcomeboard2.png"
              alt="Contemporary Productions"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-102"
            />
            {/* Navy tone grading overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-[#14203A]/95 via-[#1B2846]/60 to-transparent mix-blend-multiply opacity-80" />
            <div className="absolute inset-0 bg-[#1B2846]/20 mix-blend-color-burn" />

            {/* Content overlay */}
            <div className="absolute inset-0 p-12 flex flex-col justify-between z-10 text-[#FAF8F3] items-end text-right">
              <div>
                <span className="font-sans text-[#E3C285] tracking-[0.25em] text-[10px] font-semibold uppercase mb-2 block">
                  PRODUCTION DESIGN
                </span>
                <h3 className="font-serif text-3xl md:text-5xl leading-tight">
                  Contemporary Productions
                </h3>
              </div>

              <div className="max-w-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col items-end">
                <p className="font-sans text-xs md:text-sm text-[#F1ECE1]/80 leading-relaxed mb-6">
                  Modern design aesthetics scaled to monumental scales. Geometric arches, integrated intelligent lighting, and high-fashion editorial styling.
                </p>
                <a 
                  href="#contact" 
                  className="group relative inline-flex items-center text-[#E3C285] text-xs font-semibold tracking-widest uppercase py-2"
                >
                  View Portfolio
                  <span className="absolute bottom-0 right-0 w-0 h-[1px] bg-[#E3C285] transition-all duration-300 group-hover:w-full" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // MOBILE INTERACTIVE DRAG-SLIDER COMPARISON
        <div 
          ref={containerRef}
          onTouchMove={handleTouchMove}
          onMouseMove={handleMouseMove}
          className="relative w-full h-[55vh] overflow-hidden border-y border-[#C9A25E]/20 cursor-ew-resize select-none"
        >
          {/* Base Layer: Traditional (Left) */}
          <div className="absolute inset-0 w-full h-full z-0">
            <img
              src="/Rooted in tradition, elevated with luxury ✨A premium coconut leaf baby shower decor curated with.jpg"
              alt="Traditional Milestones"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#14203A]/90 via-[#1B2846]/60 to-[#14203A]/80 mix-blend-multiply" />
            <div className="absolute inset-0 bg-[#8A6B2E]/10 mix-blend-color-burn" />

            {/* Bottom-Left content overlay */}
            <div className="absolute bottom-6 left-6 right-6 z-10 text-[#FAF8F3]">
              <span className="font-sans text-[#E3C285] tracking-[0.2em] text-[9px] font-semibold uppercase mb-1 block">
                TRADITIONAL CELEBRATION
              </span>
              <h3 className="font-serif text-xl">
                Traditional Milestones
              </h3>
              <p className="font-sans text-[10px] text-[#F1ECE1]/70 leading-relaxed max-w-xs mt-1">
                Handcrafted coconut leaf mandaps, jasmine, and rich South Indian heritage.
              </p>
            </div>
          </div>

          {/* Sliding Layer: Contemporary (Right) */}
          <div 
            className="absolute top-0 bottom-0 right-0 h-full z-10 overflow-hidden"
            style={{ left: `${sliderPosition}%` }}
          >
            <div 
              className="absolute top-0 bottom-0 right-0 h-full w-[100vw]"
              style={{ width: `${100 - sliderPosition}vw`, right: 0 }}
            >
              <img
                src="/welcomeboard2.png"
                alt="Contemporary Productions"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ width: '100%', height: '100%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-l from-[#14203A]/90 via-[#1B2846]/60 to-[#14203A]/80 mix-blend-multiply" />
              <div className="absolute inset-0 bg-[#1B2846]/10 mix-blend-color-burn" />
            </div>

            {/* Bottom-Right content overlay */}
            <div className="absolute bottom-6 right-6 z-10 text-[#FAF8F3] text-right flex flex-col items-end w-[80vw]">
              <span className="font-sans text-[#E3C285] tracking-[0.2em] text-[9px] font-semibold uppercase mb-1 block">
                CONTEMPORARY STAGING
              </span>
              <h3 className="font-serif text-xl">
                Contemporary Productions
              </h3>
              <p className="font-sans text-[10px] text-[#F1ECE1]/70 leading-relaxed max-w-[200px] mt-1">
                Geometric structures, custom stage sets, and visual grandeur.
              </p>
            </div>
          </div>

          {/* Interactive Slider Divider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#8A6B2E] via-[#E3C285] to-[#8A6B2E] z-30 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Center golden badge handler */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#14203A] border border-[#C9A25E] flex items-center justify-center shadow-lg">
              <span className="text-[#C9A25E] text-[10px] font-serif tracking-[0.05em]">◄►</span>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
