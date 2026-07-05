import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeUp } from './FadeUp';

const showcaseItems = [
  {
    type: 'video',
    src: '/haldicarnival_bento.mp4',
    poster: '/Wrapped in sunshine and tradition, our Haldi 🌻celebration for Shiv & Siri was filled with vibra.jpg',
    category: 'Haldi Decor',
    title: 'Modern Carnival Twist',
    sizeClass: 'lg:col-span-2 lg:row-span-2 md:col-span-2 md:row-span-2 col-span-2 row-span-2',
    parallaxSpeed: 'slow'
  },
  {
    type: 'photo',
    src: '/Step into enchantment with this dreamy pink balloon portal- Lavish arches in blush and violet 🌸.jpg',
    category: 'Birthday Party',
    title: 'Dreamy Balloon Arch',
    sizeClass: 'lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 row-span-1',
    parallaxSpeed: 'fast'
  },
  {
    type: 'video',
    src: '/namingceremony_bento.mp4',
    poster: '/logo.png',
    category: 'Naming Ceremony',
    title: 'Divine Krishna Theme',
    sizeClass: 'lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 row-span-1',
    parallaxSpeed: 'slow'
  },
  {
    type: 'photo',
    src: '/Rooted in tradition, elevated with luxury ✨A premium coconut leaf baby shower decor curated with.jpg',
    category: 'Baby Shower',
    title: 'Coconut Leaf Mandap',
    sizeClass: 'lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 row-span-1',
    parallaxSpeed: 'fast'
  },
  {
    type: 'video',
    src: '/bachelorparty_bento.mp4',
    poster: '/Bringing bachelor party vibes to life for the creative head of @swara_creationss team! 🎉✨ Decor.jpg',
    category: 'Celebrations',
    title: 'Bachelor Party Decor',
    sizeClass: 'lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 row-span-1',
    parallaxSpeed: 'slow'
  },
  {
    type: 'video',
    src: '/babyshower_bento.mp4',
    poster: '/Rooted in tradition, elevated with luxury ✨A premium coconut leaf baby shower decor curated with-2.jpg',
    category: 'Baby Shower',
    title: 'Traditional Cradle Setup',
    sizeClass: 'lg:col-span-1 lg:row-span-2 md:col-span-1 md:row-span-2 col-span-1 row-span-2',
    parallaxSpeed: 'slow'
  },
  {
    type: 'video',
    src: '/wedding_bento.mp4',
    poster: '/logo.png',
    category: 'Wedding Decor',
    title: 'Flute Program Staging',
    sizeClass: 'lg:col-span-2 lg:row-span-1 md:col-span-2 md:row-span-1 col-span-2 row-span-1',
    parallaxSpeed: 'fast'
  },
  {
    type: 'photo',
    src: '/Wrapped in sunshine and tradition, our Haldi 🌻celebration for Shiv & Siri was filled with vibra.jpg',
    category: 'Haldi Decor',
    title: 'Floral Cascades & Seating',
    sizeClass: 'lg:col-span-2 lg:row-span-1 md:col-span-2 md:row-span-1 col-span-2 row-span-1',
    parallaxSpeed: 'fast'
  },
  {
    type: 'photo',
    src: '/Wrapped in sunshine and tradition, our Haldi 🌻celebration for Shiv & Siri was filled with vibra-2.jpg',
    category: 'Haldi Decor',
    title: 'Marigold Swags',
    sizeClass: 'lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 row-span-1',
    parallaxSpeed: 'slow'
  },
  {
    type: 'photo',
    src: '/Wrapped in sunshine and tradition, our Haldi 🌻celebration for Shiv & Siri was filled with vibra-4.jpg',
    category: 'Haldi Decor',
    title: 'Traditional Accents',
    sizeClass: 'lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 row-span-1',
    parallaxSpeed: 'fast'
  }
];

const BentoVideoTile = ({ src, poster }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch((err) => {
              console.log("Autoplay check:", err);
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(video);
    return () => {
      observer.unobserve(video);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.05]"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

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
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      loading="lazy"
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
