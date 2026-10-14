import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Heart, Calendar, Award, MapPin, CheckCircle2 } from 'lucide-react';
import WeddingVideoCard from '../components/WeddingVideoCard';
import { portfolioData } from '../data/portfolioData';

export default function Home({ navigate }) {
  const [activePlayingId, setActivePlayingId] = useState(null);

  // Take the top 3 featured wedding videos for the crimson real weddings section
  const featuredReels = portfolioData.slice(0, 3);

  const services = [
    {
      title: 'Bespoke Wedding Design',
      eyebrow: 'MANDAP & FLORALS',
      description: 'Sacred temple architecture, cascading botanical arches, and opulent mandaps designed specifically for South Indian and contemporary ceremonies.',
      image: '/hali2.PNG',
      link: '/wedding-planners-in-bangalore',
    },
    {
      title: 'Sangeet & Concert Staging',
      eyebrow: 'LIGHT & SOUND',
      description: 'Dazzling concert-grade truss lighting, kinetic LED backdrops, and acoustic sound engineering for electric musical nights.',
      image: '/sangeet01.PNG',
      link: '/event-management-bangalore',
    },
    {
      title: 'Haldi & Mehendi Carnivals',
      eyebrow: 'FESTIVE RITUALS',
      description: 'Vibrant marigold canopies, brass urlis, handcrafted cushion lounges, and festive props for unforgettable daytime memories.',
      image: '/hali6.PNG',
      link: '/wedding-planners-in-bangalore',
    },
    {
      title: 'Destination Weddings',
      eyebrow: 'PAN-INDIA & BEYOND',
      description: 'Seamless logistics, chartered guest hospitality, and multi-day venue transformations across Goa, Udaipur, Kerala, and luxury resorts.',
      image: '/hali9.PNG',
      link: '/destination-wedding-guide',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Vision & Creative Concept',
      desc: 'We begin with an in-depth consultation to map your family heritage, aesthetic desires, palette, and ritual timeline.',
    },
    {
      step: '02',
      title: 'Venue Curation & 3D Styling',
      desc: 'Detailed spatial planning, floor layouts, digital renders, and curated floral mockups so you see every detail before the day.',
    },
    {
      step: '03',
      title: 'Artisan & Vendor Alignment',
      desc: 'Sourcing master florists, sound technicians, culinary partners, and skilled craftsmen, aligned to your budget and standards.',
    },
    {
      step: '04',
      title: 'Flawless On-Ground Execution',
      desc: 'Our senior directors oversee minute-by-minute schedules, bridal concierge, guest hospitality, and seamless stage transitions.',
    },
  ];

  const testimonials = [
    {
      quote: 'Posh Events transformed our wedding into pure royalty. From the traditional coconut leaf elements to the opulent evening reception, every guest was in awe.',
      couple: 'Shiv & Siri',
      event: 'South Indian Grand Wedding, Bangalore Palace',
      image: '/hali2.PNG',
    },
    {
      quote: 'The Sangeet stage and lighting were beyond our wildest expectations. Sudeep and his team worked tirelessly and delivered absolute perfection.',
      couple: 'Kabir & Ananya',
      event: 'Royal Sangeet Night, Taj West End',
      image: '/sangeet01.PNG',
    },
    {
      quote: 'Our destination wedding in Goa was completely stress-free. Every ritual started on time, and the mandap on the beach was simply breathtaking.',
      couple: 'Rohan & Meera',
      event: 'Destination Beach Wedding, Goa',
      image: '/hali9.PNG',
    },
  ];

  return (
    <div className="w-full">
      
      {/* ── 1. CINEMATIC HERO SECTION ── */}
      <section className="relative w-full h-[92vh] min-h-[640px] max-h-[1000px] flex items-center justify-center overflow-hidden bg-black">
        {/* Cinematic Background Video / Image */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/hali2.PNG"
            className="w-full h-full object-cover object-center opacity-70 scale-105 transition-transform duration-10000 ease-out"
          >
            <source src="/besthomevid_optimized.mp4" type="video/mp4" />
          </video>

          {/* Luxury Multi-Stop Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-[#F5F0E8] z-10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6"
          >
            <Sparkles size={14} className="text-[#D8BA84]" />
            <span className="font-sans text-xs tracking-[0.25em] uppercase font-semibold text-white/95">
              BESPOKE WEDDINGS & BESPOKE PRODUCTIONS
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="font-serif font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-[0.06em] text-white leading-[1.1] mb-6 drop-shadow-lg"
          >
            LUXURY WEDDING PLANNERS <br />
            <span className="text-[#D8BA84]">IN BANGALORE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] font-medium text-white/90 max-w-2xl mx-auto mb-10 drop-shadow"
          >
            CRAFTING TIMELESS CELEBRATIONS WITH SOUTHERN HERITAGE & GLOBAL GRANDEUR
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
          >
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                navigate('/contact');
              }}
              className="btn-outline-white text-xs sm:text-sm tracking-[0.22em]"
            >
              CONTACT US
            </a>
            <a
              href="/portfolio"
              onClick={(e) => {
                e.preventDefault();
                navigate('/portfolio');
              }}
              className="btn-gold-pill text-xs sm:text-sm shadow-xl"
            >
              Explore Real Weddings
            </a>
          </motion.div>
        </div>

        {/* Smooth Bottom Fade into warm cream */}
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#F5F0E8] to-transparent z-15 pointer-events-none" />
      </section>


      {/* ── 2. ALTERNATING ZIG-ZAG INTRO SECTIONS ── */}
      <section className="py-20 lg:py-28 bg-[#F5F0E8] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 lg:space-y-32">
          
          {/* Zig-Zag 1: Image Left / Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Column */}
            <div className="relative rounded-[24px] overflow-hidden shadow-luxury border border-[#B08D57]/20 aspect-[4/3] group">
              <img
                src="/hali2.PNG"
                alt="Sacred South Indian Wedding Mandap by Posh Events"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#B08D57]/30 text-[10px] font-sans font-bold tracking-widest uppercase text-[#8A6B2E]">
                BENGALURU PALACE WEDDING
              </div>
            </div>

            {/* Text Column */}
            <div className="space-y-6">
              <span className="eyebrow-label">OUR APPROACH</span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-[0.04em] text-[#2B2B2B] leading-tight">
                BESPOKE GRANDEUR, <br />
                <span className="text-[#B08D57]">TAILORED FOR GENERATIONS</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
                At Posh Events, we believe a wedding is not simply an event — it is the sacred union of two legacies and the celebration of cherished memories. Based in Bangalore, our design team blends traditional South Indian rituals with cutting-edge architectural decor.
              </p>
              <p className="font-sans text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
                Whether creating a grand floral mandap draped with fresh jasmine and tuberose or orchestrating an intimate royal celebration, we oversee every petal, light fixture, and guest moment with meticulous precision.
              </p>
              <div className="pt-2">
                <a
                  href="/about"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/about');
                  }}
                  className="inline-flex items-center space-x-2 font-sans font-bold text-xs uppercase tracking-[0.18em] text-[#8A6B2E] hover:text-[#B08D57] transition-colors group"
                >
                  <span>Learn More About Our Philosophy</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Zig-Zag 2: Text Left / Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Column */}
            <div className="space-y-6 order-2 lg:order-1">
              <span className="eyebrow-label">END-TO-END MASTERY</span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-[0.04em] text-[#2B2B2B] leading-tight">
                EVERY MOMENT <br />
                <span className="text-[#B08D57]">FLAWLESSLY CONDUCTED</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
                From venue scouting across Bangalore’s finest five-star properties to handling multi-city vendor logistics, sound systems, artist coordination, and guest hospitality, our experienced coordinators take care of the heavy lifting so you and your family can immerse yourselves in the joy.
              </p>
              <ul className="space-y-3 font-sans text-sm text-[#2B2B2B] pt-2">
                <li className="flex items-center space-x-3">
                  <CheckCircle2 size={18} className="text-[#B08D57] shrink-0" />
                  <span>Single Dedicated Lead Planner for Your Family</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 size={18} className="text-[#B08D57] shrink-0" />
                  <span>Curated Floral & Mandap Mockups with Transparent Pricing</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 size={18} className="text-[#B08D57] shrink-0" />
                  <span>Day-of Stage Management & VIP Security Escorts</span>
                </li>
              </ul>
              <div className="pt-4">
                <a
                  href="/wedding-planners-in-bangalore"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/wedding-planners-in-bangalore');
                  }}
                  className="btn-gold-pill text-xs shadow-md"
                >
                  Explore Wedding Planning Services
                </a>
              </div>
            </div>

            {/* Image Column */}
            <div className="order-1 lg:order-2 relative rounded-[24px] overflow-hidden shadow-luxury border border-[#B08D57]/20 aspect-[4/3] group">
              <img
                src="/sangeet01.PNG"
                alt="Sangeet and Musical Production Setup by Posh Events"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#B08D57]/30 text-[10px] font-sans font-bold tracking-widest uppercase text-[#8A6B2E]">
                CONCERT LIGHTING & STAGING
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── 3. REAL WEDDINGS (DEEP CRIMSON SECTION) ── */}
      <section className="py-24 bg-[#8B0014] text-white relative overflow-hidden">
        {/* Subtle royal background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Centred Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-sans text-xs uppercase tracking-[0.25em] font-semibold text-[#D8BA84] mb-3 block">
              REAL WEDDINGS & REELS
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.05em] text-white mb-4">
              Real Weddings
            </h2>
            <p className="font-serif italic text-base sm:text-lg text-white/85 max-w-xl mx-auto">
              Moments we planned. Memories our couples live forever.
            </p>
            <div className="w-20 h-[1.5px] bg-[#D8BA84] mx-auto mt-6" />
          </div>

          {/* Grid of 3 Vertical (9:16) Video Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredReels.map((item) => (
              <WeddingVideoCard
                key={item.id}
                item={item}
                activePlayingId={activePlayingId}
                setActivePlayingId={setActivePlayingId}
              />
            ))}
          </div>

          {/* Footnote & Full Portfolio CTA */}
          <div className="text-center mt-12 space-y-4">
            <p className="font-sans text-xs italic text-white/70">
              Shared with permission from our couples.
            </p>
            <div>
              <a
                href="/portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/portfolio');
                }}
                className="btn-outline-white text-xs tracking-[0.2em] shadow-lg"
              >
                VIEW FULL PORTFOLIO ARCHIVE →
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* ── 4. SERVICES / HIGHLIGHTS GRID ── */}
      <section className="py-20 lg:py-28 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow-label block mb-3">CURATED SERVICES</span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.04em] text-[#2B2B2B]">
              BESPOKE CELEBRATION STYLING
            </h2>
            <div className="w-20 h-[1.5px] bg-[#B08D57] mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((svc) => (
              <div
                key={svc.title}
                onClick={() => navigate(svc.link)}
                className="group bg-white rounded-[20px] overflow-hidden border border-[#B08D57]/20 shadow-sm hover:shadow-luxury transition-all duration-500 flex flex-col justify-between cursor-pointer"
              >
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[9px] font-sans font-bold uppercase tracking-wider text-[#8A6B2E] border border-[#B08D57]/20">
                    {svc.eyebrow}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-xl text-[#2B2B2B] mb-2.5 group-hover:text-[#B08D57] transition-colors">
                      {svc.title}
                    </h3>
                    <p className="font-sans text-xs text-[#4A4A4A] leading-relaxed">
                      {svc.description}
                    </p>
                  </div>

                  <div className="pt-5 flex items-center text-xs font-sans font-bold uppercase tracking-wider text-[#8A6B2E] group-hover:text-[#B08D57]">
                    <span>Learn Details</span>
                    <ArrowRight size={13} className="ml-1.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── 5. OUR PROCESS / 4-STEP TIMELINE ── */}
      <section className="py-20 lg:py-28 bg-[#F5F0E8] border-t border-[#B08D57]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow-label block mb-3">HOW WE WORK</span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.04em] text-[#2B2B2B]">
              THE POSH PLANNING ROADMAP
            </h2>
            <div className="w-20 h-[1.5px] bg-[#B08D57] mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white/90 rounded-[24px] p-8 border border-[#B08D57]/20 shadow-sm relative space-y-4 hover:shadow-luxury transition-all duration-300"
              >
                <span className="font-serif font-bold text-4xl text-[#B08D57]/50 block">
                  {step.step}
                </span>
                <h3 className="font-serif font-bold text-xl text-[#2B2B2B]">
                  {step.title}
                </h3>
                <p className="font-sans text-xs text-[#4A4A4A] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── 6. NUMBERS & TRUST RIBBON ── */}
      <section className="py-16 bg-[#2B2B2B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-4 md:pt-0 space-y-2">
              <span className="font-serif font-bold text-4xl lg:text-5xl text-[#D8BA84] block">
                250+
              </span>
              <span className="font-sans text-xs uppercase tracking-[0.16em] text-white/80">
                Weddings Planned
              </span>
            </div>
            <div className="pt-4 md:pt-0 space-y-2">
              <span className="font-serif font-bold text-4xl lg:text-5xl text-[#D8BA84] block">
                12+
              </span>
              <span className="font-sans text-xs uppercase tracking-[0.16em] text-white/80">
                Years of Excellence
              </span>
            </div>
            <div className="pt-4 md:pt-0 space-y-2">
              <span className="font-serif font-bold text-4xl lg:text-5xl text-[#D8BA84] block">
                100%
              </span>
              <span className="font-sans text-xs uppercase tracking-[0.16em] text-white/80">
                On-Time Execution
              </span>
            </div>
            <div className="pt-4 md:pt-0 space-y-2">
              <span className="font-serif font-bold text-4xl lg:text-5xl text-[#D8BA84] block">
                15+
              </span>
              <span className="font-sans text-xs uppercase tracking-[0.16em] text-white/80">
                Cities Across India
              </span>
            </div>
          </div>
        </div>
      </section>


      {/* ── 7. TESTIMONIALS SECTION ── */}
      <section className="py-20 lg:py-28 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow-label block mb-3">COUPLE STORIES</span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.04em] text-[#2B2B2B]">
              WORDS FROM OUR COUPLES
            </h2>
            <div className="w-20 h-[1.5px] bg-[#B08D57] mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.couple}
                className="bg-white rounded-[24px] p-8 border border-[#B08D57]/20 shadow-luxury flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex text-[#B08D57]">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-base">★</span>
                    ))}
                  </div>
                  <p className="font-sans text-sm text-[#4A4A4A] italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-6 border-t border-[#B08D57]/15 flex items-center space-x-3.5 mt-6">
                  <img
                    src={t.image}
                    alt={t.couple}
                    className="w-12 h-12 rounded-full object-cover border border-[#B08D57]/40"
                  />
                  <div>
                    <h4 className="font-serif font-bold text-base text-[#2B2B2B]">
                      {t.couple}
                    </h4>
                    <span className="font-sans text-[11px] text-[#8A6B2E]">
                      {t.event}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── 8. FINAL CALL TO ACTION BANNER ── */}
      <section className="py-20 bg-gradient-to-r from-[#FAF8F3] via-[#F5F0E8] to-[#EAE3D6] border-t border-[#B08D57]/20 relative">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="eyebrow-label block">START YOUR JOURNEY</span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.04em] text-[#2B2B2B]">
            LET’S CREATE MAGIC TOGETHER
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#4A4A4A] max-w-xl mx-auto leading-relaxed">
            Schedule an exclusive consultation with our founder and creative team to discuss your dates, vision, and custom decor plans.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                navigate('/contact');
              }}
              className="btn-gold-pill text-sm py-3.5 px-8 shadow-xl"
            >
              Book Complimentary Consultation
            </a>
            <a
              href="https://wa.me/917899243348"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold text-xs py-3.5 px-8"
            >
              Quick Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
