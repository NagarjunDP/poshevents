import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// Custom Magnetic Container for CTAs (Desktop Only)
const MagneticButton = ({ children, className, href }) => {
  const buttonRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    const button = buttonRef.current;
    if (!button) return;
    
    const rect = button.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const centerX = rect.left + width / 2;
    const centerY = rect.top + height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Magnetic pull radius is ~60px
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    if (distance < 60) {
      x.set(distanceX * 0.25); // ~15px pull max
      y.set(distanceY * 0.25);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
      whileTap={{ scale: 0.97 }} // touch scale-down feedback
    >
      <a href={href} className={className}>
        {children}
      </a>
    </motion.div>
  );
};

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax calculations: Background video scrolls at 0.5x rate
  const imageY = useTransform(scrollY, [0, 800], [0, 400]);
  const textY = useTransform(scrollY, [0, 800], [0, 100]);
  const textOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  const words = ["Posh", "Events", "By", "Sudee"];

  // State machine for text shimmer states
  // Phase 0: Entrance (0s - 1.2s)
  // Phase 1: Shimmer Sweep (1.2s - 3.4s)
  // Phase 2: Finished sweep, active breathing (3.4s+)
  const [headlinePhase, setHeadlinePhase] = useState(0);

  useEffect(() => {
    const sweepStartTimer = setTimeout(() => {
      setHeadlinePhase(1);
    }, 1200);

    const sweepEndTimer = setTimeout(() => {
      setHeadlinePhase(2);
    }, 3400);

    return () => {
      clearTimeout(sweepStartTimer);
      clearTimeout(sweepEndTimer);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-[100vh] w-full overflow-hidden flex items-end justify-center bg-[#14203A]"
    >
      <style>{`
        @keyframes kenBurns {
          0% { transform: scale(1.02); }
          50% { transform: scale(1.07); }
          100% { transform: scale(1.02); }
        }
        .animate-ken-burns {
          animation: kenBurns 24s ease-in-out infinite;
        }

        @keyframes goldShimmerSweepContinuous {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes goldGlowBreathing {
          0%, 100% {
            text-shadow: 0 0 10px rgba(227, 194, 133, 0.25), 0 0 20px rgba(201, 162, 94, 0.15);
          }
          50% {
            text-shadow: 0 0 25px rgba(227, 194, 133, 0.5), 0 0 45px rgba(201, 162, 94, 0.3), 0 0 60px rgba(138, 107, 46, 0.2);
          }
        }
        @keyframes letterBreathing {
          0%, 100% { letter-spacing: 0.05em; }
          50% { letter-spacing: 0.055em; }
        }
        .headline-glowing-gold {
          background: linear-gradient(120deg, #E3C285 10%, #FAF8F3 30%, #C9A25E 50%, #E3C285 70%, #FAF8F3 90%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: 
            goldShimmerSweepContinuous 8s linear infinite,
            goldGlowBreathing 4s ease-in-out infinite alternate,
            letterBreathing 12s ease-in-out infinite;
        }

        @keyframes liquidText {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .liquid-text-active {
          background: linear-gradient(270deg, #8A6B2E, #C9A25E, #E3C285, #FAF8F3, #C9A25E, #8A6B2E);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: liquidText 6s ease-in-out infinite;
        }
      `}</style>

      {/* SVG definitions for liquid displacement filters */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id="heroLiquidFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="40" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <linearGradient id="goldGradientHex" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8A6B2E" />
            <stop offset="50%" stopColor="#C9A25E" />
            <stop offset="100%" stopColor="#E3C285" />
          </linearGradient>
        </defs>
      </svg>

      {/* 1. Full-Bleed Parallax Background Video (No borders, true edge-to-edge) */}
      <motion.div 
        style={{ y: imageY }}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover origin-center scale-[1.02] animate-ken-burns"
        >
          <source src="/besthomevid_optimized.mp4" type="video/mp4" />
        </video>
        
        {/* Contrast Scrim Overlay: Gradient from deep navy bottom to transparent/light navy top */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#14203A]/90 via-[#14203A]/55 to-[#14203A]/15 lg:from-[#14203A]/75 lg:via-[#14203A]/40 lg:to-[#14203A]/15 z-10" />
      </motion.div>

      {/* 2. Ambient Liquid Textures purely at top-left and bottom-right corners (5% opacity) */}
      <div className="absolute top-0 left-0 w-72 h-72 z-10 opacity-5 pointer-events-none overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <circle cx="150" cy="150" r="320" fill="url(#goldGradientHex)" filter="url(#heroLiquidFilter)" className="animate-[spin_35s_linear_infinite]" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-72 h-72 z-10 opacity-5 pointer-events-none overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <circle cx="850" cy="850" r="320" fill="url(#goldGradientHex)" filter="url(#heroLiquidFilter)" className="animate-[spin_45s_linear_infinite]" />
        </svg>
      </div>

      {/* 3. Center Content Container (Centered vertically in lower 60% of viewport) */}
      <motion.div 
        style={{ y: textY, opacity: textOpacity }}
        className="container mx-auto px-6 md:px-12 text-center relative z-20 flex flex-col items-center justify-end min-h-[100vh] pb-20 lg:pb-36 pt-32"
      >
        {/* Eyebrow Label (No flanking horizontal rules, no badge container background) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <span className="font-sans text-[#C9A25E] text-[10px] md:text-xs tracking-[0.22em] uppercase font-bold">
            CRAFTING EXTRAORDINARY CELEBRATIONS
          </span>
        </motion.div>

        {/* Kinetic Title (Staggered slide + blur reveal, gold shimmer sweep & breathing gold glow aura) */}
        <h1 
          className="font-serif text-5xl md:text-8xl text-center leading-none mb-4 max-w-[85vw] md:max-w-4xl tracking-[0.05em] flex flex-wrap justify-center gap-x-4 mx-auto select-none"
        >
          {words.map((word, idx) => (
            <span key={idx} className="overflow-hidden inline-block py-2">
              <motion.span
                custom={idx}
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
                  visible: (i) => ({
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)',
                    transition: {
                      delay: 0.15 + i * 0.1,
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1]
                    }
                  })
                }}
                className="inline-block headline-glowing-gold"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Tagline Subtitle: Turning Visions into Celebrations (Staggered spring blur reveals) */}
        <div className="overflow-hidden flex flex-wrap justify-center gap-x-3 mb-8 max-w-2xl select-none">
          {["Turning", "Visions", "into", "Celebrations"].map((word, idx) => {
            const isCelebrations = word === "Celebrations";
            return (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 1.1 + idx * 0.15, duration: 0.7, ease: "easeOut" }}
                className={`font-serif italic text-lg md:text-2xl lg:text-3xl leading-relaxed ${
                  isCelebrations 
                    ? 'text-[#E3C285] font-bold liquid-text-active px-2 relative' 
                    : 'text-[#F1ECE1] opacity-90'
                }`}
              >
                {word}
                {isCelebrations && (
                  <motion.span 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.9, duration: 0.8, ease: "easeOut" }}
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#8A6B2E] via-[#E3C285] to-transparent origin-left"
                  />
                )}
              </motion.span>
            );
          })}
        </div>

        {/* CTA Button redesign: Glass fill by default with shimmering border, liquid fill hover */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 1.5 }}
        >
          <MagneticButton
            href="#contact"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-10 py-4 font-sans text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#E3C285]"
            style={{
              border: '1.5px solid transparent',
              backgroundImage: 'linear-gradient(rgba(20, 32, 58, 0.85), rgba(20, 32, 58, 0.85)), linear-gradient(135deg, #8A6B2E 0%, #C9A25E 50%, #E3C285 100%)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
              backgroundSize: '200% 200%',
              animation: 'shimmerBorder 8s linear infinite'
            }}
          >
            {/* Liquid fill backdrop scales from center on hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#C9A25E] to-[#E3C285] scale-0 group-hover:scale-[1.35] transition-transform duration-[450ms] origin-center ease-[0.16,1,0.3,1] -z-10 rounded-full" />
            
            {/* Button text with expand letter spacing & color flip */}
            <span className="relative z-10 flex flex-col items-center group-hover:text-[#14203A] group-hover:tracking-[0.22em] transition-all duration-[450ms] ease-[0.16,1,0.3,1]">
              Enquire Now
              {/* Thin gold rule line underscore inside the button text */}
              <span className="w-full h-[1px] bg-[#14203A] scale-x-0 group-hover:scale-x-100 transition-transform duration-[450ms] ease-[0.16,1,0.3,1] origin-center mt-1" />
            </span>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* 4. Elegant custom eased chevron indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.9, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 pointer-events-none"
      >
        <span className="text-[#C9A25E] text-[10px] font-sans tracking-[0.3em] mb-2 uppercase font-semibold">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }}
        >
          <ChevronDown className="text-[#C9A25E]" size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
