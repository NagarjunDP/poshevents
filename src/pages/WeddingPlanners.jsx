import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, ChevronDown, ChevronUp, MapPin, Calendar, Heart } from 'lucide-react';

export default function WeddingPlanners({ navigate }) {
  const [openFaq, setOpenFaq] = useState(null);

  const servicesBreakdown = [
    {
      title: 'Sacred Mandap & Temple Architecture',
      eyebrow: 'DECOR & STYLING',
      desc: 'Bespoke mandap concepts inspired by heritage South Indian temples, featuring hand-carved pillars, floral canopies, brass urlis, and ambient temple bells.',
      image: '/hali2.PNG',
    },
    {
      title: 'Venue Curation & Spatial Flow',
      eyebrow: 'LOCATIONS & LOGISTICS',
      desc: 'Assistance in selecting and securing premier Bangalore venues (The Leela, Taj West End, Bangalore Palace, ITC Gardenia) with customized 3D layout planning.',
      image: '/hali6.PNG',
    },
    {
      title: 'Artisan Floral & Lighting Mastery',
      eyebrow: 'SENSORY EXPERIENCE',
      desc: 'Direct sourcing of premium tuberoses, marigolds, lotus buds, and Dutch roses, paired with warm architectural mood lighting that flatters photography.',
      image: '/hali11.PNG',
    },
    {
      title: 'Day-of Concierge & Stage Management',
      eyebrow: 'EFFORTLESS HARMONY',
      desc: 'Dedicated floor directors ensuring bridal entries, garland exchanges (Varmala), muhurtham timings, and guest refreshments run with clockwork precision.',
      image: '/sangeet01.PNG',
    },
  ];

  const whatsIncluded = [
    'Comprehensive wedding concept & theme deck',
    'Customized 3D mandap & stage sketches',
    'Complete floral procurement & on-site styling',
    'High-definition sound & acoustic stage design',
    'Ritual prop sourcing (brass urlis, diyas, cushions)',
    'Bridal entry & groom baraat coordination',
    'VIP security and valet hospitality liaison',
    'Dedicated senior event director on ground',
    'Photographer & videographer timeline alignment',
    'End-to-end teardown and venue restoration',
  ];

  const faqs = [
    {
      q: 'How far in advance should we book Posh Events for our wedding?',
      a: 'We recommend booking 4 to 8 months in advance, especially for auspicious muhurtham dates between October and February. However, we also take select curated weddings with 6–8 weeks notice based on team availability.',
    },
    {
      q: 'Do you only handle decor, or end-to-end wedding planning as well?',
      a: 'We offer full end-to-end wedding production as well as standalone luxury decor styling. Our end-to-end service covers venue liaison, vendor selection, day-of scheduling, artist bookings, and bridal concierge.',
    },
    {
      q: 'Can we customize mandap themes and color palettes?',
      a: 'Absolutely. Every single Posh Events wedding is bespoke. We never replicate standard packages. During our consultation, we craft custom moodboards, 3D floor plans, and sample floral swatches aligned with your attire.',
    },
    {
      q: 'Do you handle destination weddings outside of Bangalore?',
      a: 'Yes, we regularly plan and produce destination weddings in Goa, Udaipur, Jaipur, Kerala backwaters, Chikmagalur, and Coorg, as well as international destinations.',
    },
    {
      q: 'What is the consultation process?',
      a: 'Our initial consultation is complimentary. We discuss your estimated guest count, dates, preferred aesthetics, and budget range. We then present a comprehensive concept proposal and transparent quote.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full">
      
      {/* ── 1. HERO BANNER ── */}
      {/* pt-[68px] on mobile (navbar height), pt-[84px] on desktop */}
      <section className="relative w-full flex items-center justify-center overflow-hidden bg-black"
        style={{ minHeight: 'min(65svh, 640px)', paddingTop: '68px' }}
      >
        <style>{`@media (min-width: 1180px) { .hero-wp { padding-top: 84px !important; } }`}</style>
        <div className="hero-wp absolute inset-0" style={{ paddingTop: 0 }} />
        <img
          src="/sangeeth04.PNG"
          alt="Luxury Wedding Planners in Bangalore — Bespoke Mandap and Stage Design"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#F5F0E8]" />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-5 py-16 text-center text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-5">
            <Sparkles size={12} className="text-[#D8BA84] shrink-0" />
            <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.22em] uppercase font-bold text-white">
              BENGALURU'S PREMIER WEDDING STUDIO
            </span>
          </div>

          <h1 className="font-serif font-bold text-[clamp(1.75rem,6vw,3.75rem)] uppercase tracking-[0.04em] text-white leading-[1.1] mb-4 drop-shadow-md">
            Wedding Planners <br />
            <span className="text-[#D8BA84]">in Bangalore</span>
          </h1>

          <p className="font-sans text-[11px] sm:text-sm uppercase tracking-[0.18em] font-medium text-white/85 max-w-lg mx-auto">
            Where Royal South Indian Heritage Meets Contemporary Master Production
          </p>
        </div>
      </section>


      {/* ── 2. SERVICE BREAKDOWN (ZIG-ZAG SECTIONS) ── */}
      <section className="py-20 lg:py-28 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow-label block mb-3">WHAT WE DO</span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.04em] text-[#2B2B2B]">
              BESPOKE WEDDING SERVICES
            </h2>
            <div className="w-20 h-[1.5px] bg-[#B08D57] mx-auto mt-5" />
          </div>

          {servicesBreakdown.map((item, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={item.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
              >
                {/* Image */}
                <div
                  className={`relative rounded-[24px] overflow-hidden shadow-luxury border border-[#B08D57]/20 aspect-[4/3] group ${
                    isEven ? 'order-1 lg:order-2' : ''
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Text */}
                <div className={`space-y-5 ${isEven ? 'order-2 lg:order-1' : ''}`}>
                  <span className="eyebrow-label">{item.eyebrow}</span>
                  <h3 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-[0.04em] text-[#2B2B2B]">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="pt-2">
                    <a
                      href="/contact"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate('/contact');
                      }}
                      className="btn-gold-pill text-xs shadow-md"
                    >
                      Enquire for This Service
                    </a>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </section>


      {/* ── 3. WHAT'S INCLUDED CHECKLIST ── */}
      <section className="py-20 lg:py-24 bg-[#FAF8F3] border-t border-[#B08D57]/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow-label block mb-3">COMPLETE PEACE OF MIND</span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.04em] text-[#2B2B2B]">
              WHAT OUR WEDDING PLANNING INCLUDES
            </h2>
            <div className="w-20 h-[1.5px] bg-[#B08D57] mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-white p-8 sm:p-12 rounded-[24px] border border-[#B08D57]/25 shadow-luxury">
            {whatsIncluded.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-3.5">
                <CheckCircle2 size={20} className="text-[#B08D57] shrink-0 mt-0.5" />
                <span className="font-sans text-sm sm:text-base text-[#2B2B2B] font-medium leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ── 4. CURATED GALLERY STRIP ── */}
      <section className="py-10 bg-[#2B2B2B] overflow-hidden">
        {/* Double the images so the seamless loop works */}
        <div className="flex gap-4 animate-marquee-left" style={{ width: 'max-content' }}>
          {['/IMG_7458.PNG', '/sangeet01.PNG', '/IMG_7453.PNG', '/sangeet02.PNG', '/IMG_7450.PNG', '/sangeeth04.PNG',
            '/IMG_7458.PNG', '/sangeet01.PNG', '/IMG_7453.PNG', '/sangeet02.PNG', '/IMG_7450.PNG', '/sangeeth04.PNG'].map(
            (src, idx) => (
              <div
                key={idx}
                className="w-64 sm:w-80 h-48 sm:h-52 shrink-0 rounded-2xl overflow-hidden border border-white/20 shadow-md"
              >
                <img
                  src={src}
                  alt="Posh Events Wedding Gallery"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            )
          )}
        </div>
      </section>


      {/* ── 5. FAQS ACCORDION ── */}
      <section className="py-20 lg:py-28 bg-[#F5F0E8] border-t border-[#B08D57]/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow-label block mb-3">COMMON QUESTIONS</span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.04em] text-[#2B2B2B]">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <div className="w-20 h-[1.5px] bg-[#B08D57] mx-auto mt-5" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#B08D57]/20 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between font-serif font-bold text-lg text-[#2B2B2B] hover:text-[#B08D57] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="ml-4 shrink-0 text-[#B08D57]">
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 text-sm text-[#4A4A4A] font-sans leading-relaxed border-t border-[#B08D57]/10 pt-4"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ── 6. CTA BANNER ── */}
      <section className="py-20 bg-[#FAF8F3] border-t border-[#B08D57]/20 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-5">
          <span className="eyebrow-label block">PLAN WITH POSH EVENTS</span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl uppercase tracking-[0.04em] text-[#2B2B2B]">
            READY TO PLAN YOUR WEDDING?
          </h2>
          <p className="font-sans text-sm text-[#4A4A4A] leading-relaxed">
            Connect directly with Sudeep and our senior styling team to review your dates and explore personalized mandap concepts.
          </p>
          <div className="pt-2">
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                navigate('/contact');
              }}
              className="btn-gold-pill text-sm py-3.5 px-8 shadow-xl"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
