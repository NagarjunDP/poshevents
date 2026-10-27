import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, ChevronDown, ChevronUp, MapPin, Calendar, Heart, ArrowUpRight } from 'lucide-react';
import { media } from '../data/media';
import SectionHeader from '../components/SectionHeader';
import PageHero from '../components/PageHero';

export default function WeddingPlanners({ navigate }) {
  const [openFaq, setOpenFaq] = useState(null);

  const servicesBreakdown = [
    {
      title: 'Sacred Mandap & Temple Architecture',
      eyebrow: 'DECOR & SACRED STYLING',
      desc: 'Bespoke mandap concepts inspired by heritage South Indian temples, featuring hand-carved pillars, cascading jasmine canopies, brass urulis, and ambient temple bells.',
      image: media.weddingsBreakdown.mandap,
    },
    {
      title: 'Artisan Florals & Sacred Scentscapes',
      eyebrow: 'FINE-ART BOTANICALS',
      desc: 'Direct ethical sourcing of authentic Madurai mallige (jasmine), royal marigolds, lotus buds, and Dutch garden roses, arranged in sacred geometric canopies.',
      image: media.weddingsBreakdown.floral,
    },
    {
      title: 'Cinematic Concert Sound & Lighting',
      eyebrow: 'ACOUSTIC ENGINEERING',
      desc: 'Architectural mood illumination calibrated to flatter traditional silks and gold jewelry, paired with acoustic sound engineering for Vedic mantras and live nadaswaram.',
      image: media.weddingsBreakdown.lighting,
    },
    {
      title: 'Day-of Concierge & Muhurtham Protocol',
      eyebrow: 'FLAWLESS HARMONY',
      desc: 'Dedicated floor directors managing auspicious muhurtham timings, bridal palanquin entries, varmala garlands, priest requirements, and VIP guest refreshments.',
      image: media.weddingsBreakdown.concierge,
    },
  ];

  const whatsIncluded = [
    'Comprehensive wedding design & color palette deck',
    'Customized 3D mandap & floorplan schematics',
    'Procurement of fresh premium jasmine & temple flowers',
    'High-definition acoustic stage & ambient lighting',
    'Vedic ritual prop curation (brass urulis, diyas, cushions)',
    'Bridal entry & groom baraat coordination',
    'VIP security, guest reception, and hospitality liaison',
    'Dedicated senior event director on ground throughout',
    'Vendor timeline alignment (photo, video, catering, makeup)',
    'End-to-end post-event teardown and venue restoration',
  ];

  const faqs = [
    {
      q: 'How far in advance should we book Posh Events for our wedding?',
      a: 'We recommend booking 4 to 8 months in advance, especially for auspicious muhurtham dates between October and February. However, we also curate intimate luxury weddings with 6–8 weeks notice based on schedule availability.',
    },
    {
      q: 'Do you only handle decor, or end-to-end wedding planning as well?',
      a: 'We offer full end-to-end luxury wedding planning as well as standalone couture decor styling. Our end-to-end service covers venue liaisons, catering curation, day-of scheduling, artist bookings, and bridal concierges.',
    },
    {
      q: 'Can we customize mandap themes and color palettes?',
      a: 'Every single Posh Events wedding is bespoke. We never replicate standard packages. During your studio consultation, we craft custom moodboards, 3D floor plans, and sample floral swatches tailored to your attire and heritage.',
    },
    {
      q: 'Do you plan weddings outside Bangalore?',
      a: 'Yes, while Bengaluru is our home base, we regularly curate celebrations across Karnataka (Mysuru, Hampi, Coorg) and destination resorts in Goa, Kerala, and Rajasthan.',
    },
  ];

  return (
    <div className="w-full bg-[#FFF9F0] text-[#3D0A14]">
      {/* ── 1. CINEMATIC HERO ── */}
      <PageHero
        image="/media/heroes/weddings-hero.webp"
        title="ROYAL SOUTH INDIAN"
        script="Weddings"
        subtitle="TEMPLE-INSPIRED MANDAPS, SACRED RITUALS, TIMELESS ELEGANCE"
        ctaText="PLAN YOUR WEDDING"
        ctaLink="/contact"
        alt="Royal South Indian Temple Mandap by Posh Events"
        navigate={navigate}
      />

      {/* ── 2. STORY-LED PILLARS ── */}
      <section className="py-20 lg:py-28 bg-white text-[#3D0A14] border-t border-[#EEDDC8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <SectionHeader
            chapter="Our Wedding Craft"
            title="Every ritual orchestrated with"
            highlightWord="perfection."
            subtitle="Explore how our specialized departments bring harmony, architectural majesty, and sanctity to your celebration."
            dark={false}
            className="mb-16 md:mb-20"
          />

          <div className="space-y-16 lg:space-y-20">
            {servicesBreakdown.map((item, idx) => {
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={idx}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`lg:col-span-6 ${isEven ? 'lg:order-2' : ''}`}
                  >
                    <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-[#EEDDC8] shadow-[0_8px_30px_rgba(201,162,75,0.12)] bg-[#FFF9F0]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        onError={(e) => {
                          e.target.src = '/media/story/philosophy-tradition.jpg';
                        }}
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`lg:col-span-6 flex flex-col justify-center text-left space-y-4 ${
                      isEven ? 'lg:order-1' : ''
                    }`}
                  >
                    <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-gold-dark">
                      {item.eyebrow}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#3D0A14] font-normal leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#5A2A27] font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. WHAT'S INCLUDED CHECKLIST ── */}
      <section className="py-20 lg:py-28 bg-[#FFF9F0] text-[#3D0A14] border-t border-[#EEDDC8]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
          <SectionHeader
            chapter="Flawless Execution"
            title="What's included in every"
            highlightWord="Posh wedding."
            subtitle="Complete end-to-end production coverage so your family enjoys every moment."
            dark={false}
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {whatsIncluded.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#EEDDC8] flex items-start gap-4 text-left shadow-sm"
              >
                <div className="w-6 h-6 rounded-full bg-gold/15 text-gold flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-dark" />
                </div>
                <span className="text-sm text-[#3D0A14] font-light leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. FAQS ACCORDION ── */}
      <section className="py-20 lg:py-28 bg-white text-[#3D0A14] border-t border-[#EEDDC8]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <SectionHeader
            chapter="Common Inquiries"
            title="Everything you need to"
            highlightWord="know."
            dark={false}
            className="mb-12"
          />

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#EEDDC8] bg-[#FFF9F0] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-display text-xl text-[#3D0A14] font-medium">
                      {faq.q}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center text-gold shrink-0 bg-white">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-6 pb-6 text-sm text-[#5A2A27] font-light leading-relaxed border-t border-[#EEDDC8] pt-4"
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

      {/* ── 5. CELEBRATORY CTA BAND ── */}
      <section className="py-16 bg-[#FFF9F0] text-center border-t border-[#EEDDC8]">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="font-display text-2xl sm:text-3xl text-[#3D0A14]">
              Ready to plan your <span className="gold-glow-word">Royal Mandap?</span>
            </h3>
            <p className="text-xs text-[#5A2A27] mt-1 font-light">Reserve your auspicious wedding muhurtham date today.</p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="btn-gold-pill shrink-0 !text-xs"
          >
            <span>Plan Your Celebration</span>
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </section>
    </div>
  );
}
