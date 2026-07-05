import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const servicesList = [
  {
    num: "01",
    title: "Wedding Decor",
    type: "video",
    src: "/wedding_bento.mp4",
    poster: "/welcomeboard1.png",
    description: "Bespoke high-end setups blending traditional floral cascades, custom arches, and gold monogram detailing."
  },
  {
    num: "02",
    title: "Sangeet Production",
    type: "video",
    src: "/bachelorparty_bento.mp4",
    poster: "/Bringing bachelor party vibes to life for the creative head of @swara_creationss team! 🎉✨ Decor.jpg",
    description: "Immersive soundscapes, cinematic moving light arrays, and customized contemporary modular staging."
  },
  {
    num: "03",
    title: "Haldi & Mehendi",
    type: "video",
    src: "/haldicarnival_bento.mp4",
    poster: "/Wrapped in sunshine and tradition, our Haldi 🌻celebration for Shiv & Siri was filled with vibra.jpg",
    description: "Vibrant yellow floral installations, marigold wall backdrops, and playful carnival details."
  },
  {
    num: "04",
    title: "Traditional Seemantha",
    type: "video",
    src: "/babyshower_bento.mp4",
    poster: "/Rooted in tradition, elevated with luxury ✨A premium coconut leaf baby shower decor curated with-2.jpg",
    description: "Authentic, handcrafted coconut leaf panels, cradle setups, and royal settings."
  },
  {
    num: "05",
    title: "Naming Ceremony",
    type: "video",
    src: "/namingceremony_bento.mp4",
    poster: "/welcomeboard2.png",
    description: "Divine themes featuring custom cradle decoration, floral halos, and sacred traditional setups."
  },
  {
    num: "06",
    title: "Birthday Events",
    type: "photo",
    src: "/Step into enchantment with this dreamy pink balloon portal- Lavish arches in blush and violet 🌸.jpg",
    description: "Creative themes and floral balloon arches styled to make birthdays truly memorable."
  },
  {
    num: "07",
    title: "Corporate Events",
    type: "photo",
    src: "/Rooted in tradition, elevated with luxury ✨A premium coconut leaf baby shower decor curated with.jpg",
    description: "Professional visual design and end-to-end exhibition management with corporate elegance."
  },
  {
    num: "08",
    title: "Stage Production",
    type: "video",
    src: "/besthomevid_optimized.mp4",
    poster: "/welcomeboard1.png",
    description: "State-of-the-art stage setups, geometric framing, and high-fashion grand scales."
  }
];

// Helper Media Element with viewport intersection observer for fast loading
const ServiceMedia = ({ type, src, poster, title }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || type !== 'video') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch((err) => console.log("Autoplay check:", err));
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => {
      observer.unobserve(video);
    };
  }, [type]);

  if (type === 'video') {
    return (
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
      >
        <source src={src} type="video/mp4" />
      </video>
    );
  }

  return (
    <img 
      src={src} 
      alt={title} 
      loading="lazy"
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
    />
  );
};

export default function ServicesGrid() {
  const desktopContainerRef = useRef(null);
  const horizontalScrollRef = useRef(null);
  const mobileCarouselRef = useRef(null);
  const [mobileProgress, setMobileProgress] = useState(0);

  // Desktop horizontal scroll pinning using GSAP ScrollTrigger
  useEffect(() => {
    const container = desktopContainerRef.current;
    const track = horizontalScrollRef.current;
    if (!container || !track) return;

    let ctx = gsap.context(() => {
      // Pinning animation setup
      const trackWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;
      const distanceToScroll = trackWidth - viewportWidth;

      if (distanceToScroll > 0) {
        gsap.to(track, {
          x: -distanceToScroll,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: 0.8,
            start: "top top",
            end: () => `+=${distanceToScroll * 1.2}`,
            invalidateOnRefresh: true
          }
        });
      }
    }, container);

    return () => ctx.revert();
  }, []);

  // Monitor scroll for mobile snaps to update indicator progress
  const handleMobileScroll = () => {
    const el = mobileCarouselRef.current;
    if (!el) return;
    const progress = el.scrollLeft / (el.scrollWidth - el.clientWidth);
    setMobileProgress(Math.min(Math.max(progress, 0), 1));
  };

  return (
    <section 
      id="celebrations" 
      ref={desktopContainerRef}
      className="bg-[#14203A] text-[#FAF8F3] relative overflow-hidden"
    >
      
      {/* DESKTOP LAYOUT (GSAP Pinning horizontal scroll) */}
      <div className="hidden lg:block w-full min-h-screen">
        
        {/* Absolute Left Sticky Panel */}
        <div className="absolute left-16 top-1/2 -translate-y-1/2 w-[350px] z-20 pointer-events-none">
          <span className="font-sans text-[#C9A25E] tracking-[0.25em] text-xs font-semibold uppercase mb-3 block">
            CRAFTING EXTRAORDINARY
          </span>
          <h2 className="text-5xl font-serif text-[#FAF8F3] mb-6 leading-tight">
            Our Services
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-[#C9A25E] to-transparent mb-6" />
          <p className="font-sans text-[#F1ECE1]/80 text-sm leading-relaxed max-w-sm pointer-events-auto">
            Scroll vertically to traverse our core design specialties. Each block is custom built to bridge South Indian ritual with top-tier global production values.
          </p>
        </div>

        {/* Horizontal Track Container */}
        <div 
          ref={horizontalScrollRef}
          className="flex h-screen items-center pl-[500px] pr-[100px] space-x-12 min-w-max"
        >
          {servicesList.map((service, idx) => (
            <div
              key={idx}
              className="w-[450px] h-[70vh] flex-shrink-0 relative group rounded-2xl overflow-hidden border border-[#C9A25E]/15 hover:border-[#C9A25E]/50 transition-all duration-500 shadow-2xl bg-[#1B2846]"
              data-hover-glow="true"
            >
              {/* Media component */}
              <ServiceMedia 
                type={service.type} 
                src={service.src} 
                poster={service.poster} 
                title={service.title} 
              />
              
              {/* Cinematic Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#14203A] via-[#14203A]/20 to-transparent opacity-90 transition-opacity duration-300" />
              
              {/* Subtle top shimmer glow */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C9A25E]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Panel Content (Flex layout) */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                {/* Outlined service index */}
                <div 
                  style={{ WebkitTextStroke: '1px rgba(227, 194, 133, 0.4)' }}
                  className="font-serif text-4xl text-transparent font-bold tracking-widest self-end"
                >
                  {service.num}
                </div>

                {/* Service Text details */}
                <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="font-serif text-3xl text-[#FAF8F3] mb-3 group-hover:text-[#E3C285] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-[#F1ECE1]/70 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE LAYOUT (Touch snap scroll carousel) */}
      <div className="lg:hidden py-12 px-6 w-full flex flex-col justify-start">
        
        {/* Sticky Intro Header */}
        <div className="mb-12">
          <span className="font-sans text-[#C9A25E] tracking-[0.25em] text-[10px] font-semibold uppercase mb-2 block">
            CRAFTING EXTRAORDINARY
          </span>
          <h2 className="text-4xl font-serif text-[#FAF8F3] mb-4">
            Our Services
          </h2>
          <div className="w-12 h-[1px] bg-[#C9A25E] mb-4" />
          <p className="font-sans text-[#F1ECE1]/80 text-xs leading-relaxed">
            Swipe horizontally to review our core event styling and production design capabilities.
          </p>
        </div>

        {/* Carousel Viewport */}
        <div 
          ref={mobileCarouselRef}
          onScroll={handleMobileScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none w-full gap-6 pb-6 pointer-events-auto"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {servicesList.map((service, idx) => (
            <div
              key={idx}
              className="snap-center shrink-0 w-[82vw] sm:w-[60vw] h-[55vh] relative rounded-2xl overflow-hidden border border-[#C9A25E]/20 bg-[#1B2846]"
            >
              {/* Media component */}
              <ServiceMedia 
                type={service.type} 
                src={service.src} 
                poster={service.poster} 
                title={service.title} 
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#14203A] via-[#14203A]/20 to-transparent opacity-90" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <div 
                  style={{ WebkitTextStroke: '1px rgba(227, 194, 133, 0.4)' }}
                  className="font-serif text-3xl text-transparent font-bold tracking-widest self-end"
                >
                  {service.num}
                </div>

                <div>
                  <h3 className="font-serif text-2xl text-[#FAF8F3] mb-2">
                    {service.title}
                  </h3>
                  <p className="font-sans text-[11px] text-[#F1ECE1]/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Progress Bar at the bottom */}
        <div className="w-32 h-[2px] bg-cream/15 mx-auto mt-6 relative rounded-full overflow-hidden">
          <div 
            className="absolute left-0 top-0 bottom-0 bg-[#C9A25E] rounded-full transition-all duration-75"
            style={{ width: `${mobileProgress * 100}%` }}
          />
        </div>

      </div>

    </section>
  );
}
