import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Play } from 'lucide-react';
import { FadeUp } from './FadeUp';

// Raw items with pre-encoded space characters for absolute URL robustness
const rawItems = [
  // --- BENTO SHOWCASE ITEMS (MOMENTS WE CREATED) ---
  {
    type: 'video',
    src: '/haldicarnival_bento.mp4',
    poster: '/Wrapped%20in%20sunshine%20and%20tradition,%20our%20Haldi%20🌻celebration%20for%20Shiv%20&%20Siri%20was%20filled%20with%20vibra.jpg',
    category: 'Weddings & Haldi',
    title: 'Haldi Carnival Twist',
    sizeClass: 'lg:col-span-2 lg:row-span-2 md:col-span-2 md:row-span-2 col-span-2 row-span-2'
  },
  {
    type: 'photo',
    src: '/Step%20into%20enchantment%20with%20this%20dreamy%20pink%20balloon%20portal-%20Lavish%20arches%20in%20blush%20and%20violet%20🌸.jpg',
    category: 'Birthday Celebrations',
    title: 'Dreamy Balloon Arch',
    sizeClass: 'lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 row-span-1'
  },
  {
    type: 'video',
    src: '/namingceremony_bento.mp4',
    poster: '/logo.png',
    category: 'Naming Ceremony',
    title: 'Divine Krishna Theme',
    sizeClass: 'lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 row-span-1'
  },
  {
    type: 'photo',
    src: '/Rooted%20in%20tradition,%20elevated%20with%20luxury%20✨A%20premium%20coconut%20leaf%20baby%20shower%20decor%20curated%20with.jpg',
    category: 'Baby Shower',
    title: 'Coconut Leaf Mandap',
    sizeClass: 'lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 row-span-1'
  },
  {
    type: 'video',
    src: '/bachelorparty_bento.mp4',
    poster: '/Bringing%20bachelor%20party%20vibes%20to%20life%20for%20the%20creative%20head%20of%20@swara_creationss%20team!%20🎉✨%20Decor.jpg',
    category: 'Celebrations',
    title: 'Bachelor Party Decor',
    sizeClass: 'lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 row-span-1'
  },
  {
    type: 'video',
    src: '/babyshower_bento.mp4',
    poster: '/Rooted%20in%20tradition,%20elevated%20with%20luxury%20✨A%20premium%20coconut%20leaf%20baby%20shower%20decor%20curated%20with-2.jpg',
    category: 'Baby Shower',
    title: 'Traditional Cradle Setup',
    sizeClass: 'lg:col-span-1 lg:row-span-2 md:col-span-1 md:row-span-2 col-span-1 row-span-2'
  },
  {
    type: 'video',
    src: '/wedding_bento.mp4',
    poster: '/logo.png',
    category: 'Weddings & Haldi',
    title: 'Flute Staging & Floral Decors',
    sizeClass: 'lg:col-span-2 lg:row-span-1 md:col-span-2 md:row-span-1 col-span-2 row-span-1'
  },
  {
    type: 'photo',
    src: '/Wrapped%20in%20sunshine%20and%20tradition,%20our%20Haldi%20🌻celebration%20for%20Shiv%20&%20Siri%20was%20filled%20with%20vibra.jpg',
    category: 'Weddings & Haldi',
    title: 'Floral Cascades & Seating',
    sizeClass: 'lg:col-span-2 lg:row-span-1 md:col-span-2 md:row-span-1 col-span-2 row-span-1'
  },
  {
    type: 'photo',
    src: '/Wrapped%20in%20sunshine%20and%20tradition,%20our%20Haldi%20🌻celebration%20for%20Shiv%20&%20Siri%20was%20filled%20with%20vibra-2.jpg',
    category: 'Weddings & Haldi',
    title: 'Marigold Swags',
    sizeClass: 'lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 row-span-1'
  },
  {
    type: 'photo',
    src: '/Wrapped%20in%20sunshine%20and%20tradition,%20our%20Haldi%20🌻celebration%20for%20Shiv%20&%20Siri%20was%20filled%20with%20vibra-4.jpg',
    category: 'Weddings & Haldi',
    title: 'Traditional Accents',
    sizeClass: 'lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 row-span-1'
  },

  // --- BABY SHOWER DIRECTORY PHOTOS ---
  {
    type: 'photo',
    src: '/baby%20shower/WhatsApp%20Image%202026-07-08%20at%2019.49.01%20(2).jpeg',
    category: 'Baby Shower',
    title: 'Moments of Blessing',
    sizeClass: 'lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 row-span-1'
  },
  {
    type: 'photo',
    src: '/baby%20shower/WhatsApp%20Image%202026-07-08%20at%2019.49.01.jpeg',
    category: 'Baby Shower',
    title: 'Divine Decor Close-up',
    sizeClass: 'lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 row-span-1'
  },
  {
    type: 'photo',
    src: '/baby%20shower/WhatsApp%20Image%202026-07-08%20at%2019.49.05.jpeg',
    category: 'Baby Shower',
    title: 'Ritual Stage Setting',
    sizeClass: 'lg:col-span-2 lg:row-span-1 md:col-span-2 md:row-span-1 col-span-2 row-span-1'
  },
  {
    type: 'photo',
    src: '/baby%20shower/WhatsApp%20Image%202026-07-08%20at%2019.49.09.jpeg',
    category: 'Baby Shower',
    title: 'Traditional Cradle Details',
    sizeClass: 'lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 row-span-1'
  },
  {
    type: 'photo',
    src: '/baby%20shower/WhatsApp%20Image%202026-07-08%20at%2019.52.20.jpeg',
    category: 'Baby Shower',
    title: 'Warm Golden Hues',
    sizeClass: 'lg:col-span-1 lg:row-span-2 md:col-span-1 md:row-span-2 col-span-1 row-span-2'
  },
  {
    type: 'photo',
    src: '/baby%20shower/WhatsApp%20Image%202026-07-08%20at%2019.52.23.jpeg',
    category: 'Baby Shower',
    title: 'Showering with Flowers',
    sizeClass: 'lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 row-span-1'
  },

  // --- BIRTHDAY CELEBRATIONS ---
  {
    type: 'photo',
    src: '/birthday%20celebrations/WhatsApp%20Image%202026-07-08%20at%2019.49.00%20(1).jpeg',
    category: 'Birthday Celebrations',
    title: 'Pastel Dreams Theme',
    sizeClass: 'lg:col-span-1 lg:row-span-2 md:col-span-1 md:row-span-2 col-span-1 row-span-2'
  },
  {
    type: 'photo',
    src: '/birthday%20celebrations/WhatsApp%20Image%202026-07-08%20at%2019.49.02%20(1).jpeg',
    category: 'Birthday Celebrations',
    title: 'Grand Entrance Pathway',
    sizeClass: 'lg:col-span-2 lg:row-span-1 md:col-span-2 md:row-span-1 col-span-2 row-span-1'
  },
  {
    type: 'photo',
    src: '/birthday%20celebrations/WhatsApp%20Image%202026-07-08%20at%2019.49.03.jpeg',
    category: 'Birthday Celebrations',
    title: 'Delicate Floral Details',
    sizeClass: 'lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 row-span-1'
  },
  {
    type: 'photo',
    src: '/birthday%20celebrations/WhatsApp%20Image%202026-07-08%20at%2019.49.12%20(1).jpeg',
    category: 'Birthday Celebrations',
    title: 'Joyous Cake Table Setup',
    sizeClass: 'lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 row-span-1'
  },

  // --- BODYGUARDS ---
  {
    type: 'photo',
    src: '/bodyguards/WhatsApp%20Image%202026-07-08%20at%2019.48.55%20(2).jpeg',
    category: 'Personal Security Officers',
    title: 'VIP Event Security Coordination',
    sizeClass: 'lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 row-span-1'
  },
  {
    type: 'photo',
    src: '/bodyguards/WhatsApp%20Image%202026-07-08%20at%2019.48.56%20(1).jpeg',
    category: 'Personal Security Officers',
    title: 'Elite Bouncers Alignment',
    sizeClass: 'lg:col-span-2 lg:row-span-1 md:col-span-2 md:row-span-1 col-span-2 row-span-1'
  },
  {
    type: 'photo',
    src: '/bodyguards/WhatsApp%20Image%202026-07-08%20at%2019.48.56%20(2).jpeg',
    category: 'Personal Security Officers',
    title: 'Professional Security Escort',
    sizeClass: 'lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 row-span-1'
  },
  {
    type: 'photo',
    src: '/bodyguards/WhatsApp%20Image%202026-07-08%20at%2019.48.56.jpeg',
    category: 'Personal Security Officers',
    title: 'High-Profile Event Protection',
    sizeClass: 'lg:col-span-1 lg:row-span-2 md:col-span-1 md:row-span-2 col-span-1 row-span-2'
  },
  {
    type: 'photo',
    src: '/bodyguards/WhatsApp%20Image%202026-07-08%20at%2019.48.57.jpeg',
    category: 'Personal Security Officers',
    title: 'Seamless Safe Operations',
    sizeClass: 'lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 row-span-1'
  },

  // --- NAMING CEREMONY ---
  {
    type: 'photo',
    src: '/naming%20ceremony/WhatsApp%20Image%202026-07-08%20at%2019.49.00.jpeg',
    category: 'Naming Ceremony',
    title: 'Divine Floral Swing',
    sizeClass: 'lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 row-span-1'
  },
  {
    type: 'photo',
    src: '/naming%20ceremony/WhatsApp%20Image%202026-07-08%20at%2019.49.03%20(1).jpeg',
    category: 'Naming Ceremony',
    title: 'Krishna Flute Backdrop',
    sizeClass: 'lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 row-span-1'
  },
  {
    type: 'photo',
    src: '/naming%20ceremony/WhatsApp%20Image%202026-07-08%20at%2019.49.04%20(1).jpeg',
    category: 'Naming Ceremony',
    title: 'Pristine White Blooms',
    sizeClass: 'lg:col-span-2 lg:row-span-1 md:col-span-2 md:row-span-1 col-span-2 row-span-1'
  },
  {
    type: 'photo',
    src: '/naming%20ceremony/WhatsApp%20Image%202026-07-08%20at%2019.49.05%20(1).jpeg',
    category: 'Naming Ceremony',
    title: 'Golden Cradle Details',
    sizeClass: 'lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 row-span-1'
  },
  {
    type: 'photo',
    src: '/naming%20ceremony/WhatsApp%20Image%202026-07-08%20at%2019.49.06.jpeg',
    category: 'Naming Ceremony',
    title: 'Blessed Sacred Mandap',
    sizeClass: 'lg:col-span-1 lg:row-span-2 md:col-span-1 md:row-span-2 col-span-1 row-span-2'
  },
  {
    type: 'photo',
    src: '/naming%20ceremony/WhatsApp%20Image%202026-07-08%20at%2019.49.07.jpeg',
    category: 'Naming Ceremony',
    title: 'Grand Welcoming Board',
    sizeClass: 'lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 row-span-1'
  },
  {
    type: 'photo',
    src: '/naming%20ceremony/WhatsApp%20Image%202026-07-08%20at%2019.52.21%20(1).jpeg',
    category: 'Naming Ceremony',
    title: 'Glistening Lights & Florals',
    sizeClass: 'lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 row-span-1'
  },
  {
    type: 'photo',
    src: '/naming%20ceremony/WhatsApp%20Image%202026-07-08%20at%2019.52.22.jpeg',
    category: 'Naming Ceremony',
    title: 'Baby Naming Decor Theme',
    sizeClass: 'lg:col-span-2 lg:row-span-1 md:col-span-2 md:row-span-1 col-span-2 row-span-1'
  },
  {
    type: 'photo',
    src: '/naming%20ceremony/WhatsApp%20Image%202026-07-08%20at%2019.52.23%20(1).jpeg',
    category: 'Naming Ceremony',
    title: 'Floral Canopy Arrangement',
    sizeClass: 'lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 row-span-1'
  }
];

const categories = [
  'All',
  'Baby Shower',
  'Birthday Celebrations',
  'Naming Ceremony',
  'Weddings & Haldi',
  'Personal Security Officers'
];

// Helper video tile player inside bento layout
const BentoVideoTile = ({ src, poster }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
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
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-[#FAF8F3] p-1.5 rounded-full z-10">
        <Play size={12} fill="currentColor" />
      </div>
    </div>
  );
};

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredItems, setFilteredItems] = useState(rawItems);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Filter items whenever category changes
  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredItems(rawItems);
    } else {
      setFilteredItems(rawItems.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setLightboxIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems]);

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#FAF8F3] relative overflow-hidden border-t border-[#C9A25E]/20">
      
      {/* Decorative floral background element */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-[0.03] pointer-events-none translate-x-1/4 -translate-y-1/4">
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="250" cy="250" r="240" stroke="#C9A84C" strokeWidth="1.5" />
          <circle cx="250" cy="250" r="180" stroke="#C9A84C" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        
        {/* --- Header Area --- */}
        <FadeUp>
          <div className="text-center mb-12">
            <span className="font-sans text-[#C9A25E] tracking-[0.25em] text-xs font-semibold uppercase mb-3 block">
              OUR CELEBRATIONS GALLERY
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#14203A] mb-4">
              The Posh Archive
            </h2>
            <p className="font-sans text-[#14203A]/60 tracking-[0.05em] text-sm max-w-xl mx-auto">
              Explore our curation of Baby Showers, Naming Ceremonies, Birthdays, and premium event guard services.
            </p>
            <div className="flex items-center justify-center mt-6 w-24 h-[1.5px] mx-auto bg-gradient-to-r from-transparent via-[#C9A25E] to-transparent" />
          </div>
        </FadeUp>

        {/* --- Category Filters Tab Scroll --- */}
        <div className="flex justify-center mb-12 overflow-x-auto scrollbar-none w-full px-2">
          <div className="flex items-center gap-2 md:gap-3 bg-[#FAF8F3] p-1.5 rounded-full border border-[#C9A25E]/15 shadow-sm max-w-full overflow-x-auto scrollbar-none whitespace-nowrap">
            {categories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-[10px] md:text-xs font-sans font-semibold tracking-wider uppercase rounded-full transition-all duration-300 ${
                    active
                      ? 'bg-gradient-to-r from-[#8A6B2E] to-[#C9A25E] text-[#FAF8F3] shadow-md'
                      : 'text-[#14203A]/70 hover:text-[#C9A25E] hover:bg-[#14203A]/5'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* --- Bento Grid Layout --- */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[140px] md:auto-rows-[190px] lg:auto-rows-[220px] gap-3 md:gap-5 max-w-7xl mx-auto grid-flow-row-dense"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                key={item.src}
                onClick={() => setLightboxIndex(idx)}
                className={`${item.sizeClass} relative group overflow-hidden rounded-[14px] border border-[#C9A25E]/10 hover:border-[#C9A25E]/40 shadow-sm hover:shadow-xl transition-all duration-500 bg-white cursor-pointer`}
              >
                <div className="w-full h-full relative overflow-hidden">
                  {item.type === 'video' ? (
                    <BentoVideoTile src={item.src} poster={item.poster} />
                  ) : (
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                  )}

                  {/* Elegant bottom label text - Small & Premium */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1520]/80 via-[#0E1520]/20 to-transparent flex flex-col justify-end p-3 md:p-4 z-10">
                    <span className="font-sans text-[#E3C285] tracking-[0.18em] text-[8px] md:text-[9px] uppercase font-semibold mb-0.5">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-[#FAF8F3] text-xs md:text-sm tracking-wide font-medium">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* --- Immersive Lightbox Modal Slider --- */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#0E1520]/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 select-none"
          >
            {/* Modal Top Control Header */}
            <div className="w-full max-w-7xl flex items-center justify-between z-10 pt-4 px-4 md:px-8">
              <div className="flex items-center gap-3">
                <span className="font-sans text-[#C9A25E] text-[10px] md:text-xs tracking-[0.25em] uppercase font-bold">
                  {filteredItems[lightboxIndex].category}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A25E]/40" />
                <span className="font-sans text-[#FAF8F3]/50 text-[10px] md:text-xs tracking-wider">
                  {lightboxIndex + 1} of {filteredItems.length}
                </span>
              </div>
              <button
                onClick={() => setLightboxIndex(null)}
                className="w-10 h-10 rounded-full border border-[#FAF8F3]/15 flex items-center justify-center text-[#FAF8F3] hover:bg-[#FAF8F3] hover:text-[#0E1520] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <X size={18} />
              </button>
            </div>

            {/* Slider Content Wrapper */}
            <div className="w-full flex-1 flex items-center justify-between max-w-7xl relative px-4 md:px-8">
              
              {/* Left Arrow Button */}
              <button
                onClick={handlePrev}
                className="absolute left-6 md:left-8 z-20 w-11 h-11 md:w-14 md:h-14 rounded-full border border-[#C9A25E]/30 bg-[#0E1520]/60 backdrop-blur-md flex items-center justify-center text-[#FAF8F3] hover:text-[#C9A25E] hover:border-[#C9A25E] hover:scale-110 active:scale-90 transition-all duration-300 shadow-lg cursor-pointer"
                aria-label="Previous Slide"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Main Media Core */}
              <div className="w-full h-[60vh] md:h-[70vh] flex items-center justify-center p-2 relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={filteredItems[lightboxIndex].src}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="max-w-full max-h-full rounded-xl overflow-hidden border border-[#C9A25E]/10 bg-black shadow-2xl flex items-center justify-center relative aspect-auto"
                  >
                    {filteredItems[lightboxIndex].type === 'video' ? (
                      <video
                        key={filteredItems[lightboxIndex].src}
                        src={filteredItems[lightboxIndex].src}
                        controls
                        autoPlay
                        className="max-w-full max-h-full object-contain"
                      />
                    ) : (
                      <img
                        src={filteredItems[lightboxIndex].src}
                        alt={filteredItems[lightboxIndex].title}
                        className="max-w-full max-h-full object-contain"
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Arrow Button */}
              <button
                onClick={handleNext}
                className="absolute right-6 md:right-8 z-20 w-11 h-11 md:w-14 md:h-14 rounded-full border border-[#C9A25E]/30 bg-[#0E1520]/60 backdrop-blur-md flex items-center justify-center text-[#FAF8F3] hover:text-[#C9A25E] hover:border-[#C9A25E] hover:scale-110 active:scale-90 transition-all duration-300 shadow-lg cursor-pointer"
                aria-label="Next Slide"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Subtitle Footer */}
            <div className="w-full max-w-3xl text-center pb-8 px-6">
              <h3 className="font-serif text-[#FAF8F3] text-lg md:text-2xl tracking-wide mb-1 font-medium">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="font-sans text-[#FAF8F3]/50 text-[10px] md:text-xs tracking-[0.15em] uppercase">
                Premium Event Curation By Posh Events
              </p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
