import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeUp } from './FadeUp';
import { OptimizedImage } from './OptimizedImage';

const showcaseItems = [
  {
    type: 'video',
    src: '/haldicarnival_new.mp4',
    poster: '/haldicarnival_new_poster.jpg',
    category: 'Haldi Decor',
    title: 'Modern Carnival Twist',
    sizeClass: 'lg:col-span-2 lg:row-span-2 md:col-span-2 md:row-span-2 col-span-2 row-span-2',
    parallaxSpeed: 'slow'
  },
  {
    type: 'video',
    src: '/namingceremony_new.mp4',
    poster: '/namingceremony_new_poster.jpg',
    category: 'Birthday Events',
    title: 'Birthday Celebration',
    sizeClass: 'lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 row-span-1',
    parallaxSpeed: 'slow'
  },
  {
    type: 'video',
    src: '/halfsaree_bento.mp4',
    poster: '/halfsaree_bento_poster.jpg',
    category: 'Celebrations',
    title: 'Half Saree Celebration',
    sizeClass: 'lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 row-span-1',
    parallaxSpeed: 'slow'
  },
  {
    type: 'video',
    src: '/reception_bento.mp4',
    poster: '/reception_bento_poster.jpg',
    category: 'Reception Decor',
    title: 'premium outdoor reception decor',
    sizeClass: 'lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 row-span-1',
    parallaxSpeed: 'slow'
  },
  {
    type: 'video',
    src: '/holi_bento.mp4',
    poster: '/holi_bento_poster.jpg',
    category: 'celebration',
    title: 'Holi Party',
    sizeClass: 'lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 row-span-1',
    parallaxSpeed: 'fast'
  }
];

const BentoVideoTile = React.memo(({ src, poster }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {});
            }
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.05, rootMargin: '200px' }
    );

    observer.observe(video);
    return () => {
      observer.unobserve(video);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      webkit-playsinline="true"
      preload="metadata"
      poster={poster}
      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.05]"
    />
  );
});

export default function BentoShowcase() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const ySlow = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const yFast = useTransform(scrollYProgress, [0, 1], [20, -20]);

  // Framer motion variants for grid staggered loading reveal
  const gridContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06
      }
    }
  };

  const tileVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.95,
      y: 30
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      }
    }
  };

  return (
    <section ref={containerRef} id="showcase" className="py-14 md:py-24 bg-cream border-b border-[#C9A25E]/20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-4">Moments We've Created</h2>
            <p className="font-sans text-gold tracking-[0.2em] text-sm uppercase max-w-2xl mx-auto">
              A glimpse into the celebrations, rituals, and stages we've brought to life.
            </p>
          </div>
        </FadeUp>

        {/* Bento Grid (2-column layout on mobile, 4-column on desktop, packed tightly using grid-flow-row-dense) */}
        <motion.div 
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5%" }}
          className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[160px] md:auto-rows-[225px] lg:auto-rows-[250px] gap-4 md:gap-6 grid-flow-row-dense max-w-7xl mx-auto"
        >
          {showcaseItems.map((item, idx) => {
            const parallaxVal = isMobile 
              ? 0 
              : item.parallaxSpeed === 'slow' ? ySlow : yFast;

            return (
              <motion.div
                key={idx}
                variants={tileVariants}
                style={{ y: parallaxVal }}
                className={`${item.sizeClass} relative group overflow-hidden rounded-[16px] border border-gold/15 hover:border-gold/50 shadow-sm hover:shadow-xl transition-all duration-500 ease-out bg-white`}
              >
                {/* Content */}
                <div className="w-full h-full relative overflow-hidden">
                  {item.type === 'video' ? (
                    <BentoVideoTile src={item.src} poster={item.poster} />
                  ) : (
                    <OptimizedImage 
                      src={item.src} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.05]"
                    />
                  )}

                  {/* Caption Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/35 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4 md:p-6 z-10">
                    <span className="font-sans text-gold-lt tracking-[0.2em] text-[9px] md:text-[10px] uppercase font-semibold mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-cream text-base md:text-xl font-medium tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
