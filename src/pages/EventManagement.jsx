import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Shield, Music, Briefcase, Award, ChevronDown, ChevronUp, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { media } from '../data/media';
import SectionHeader from '../components/SectionHeader';
import PageHero from '../components/PageHero';

export default function EventManagement({ navigate }) {
  const [openFaq, setOpenFaq] = useState(null);

  const eventServices = [
    {
      title: 'Corporate Galas & Leadership Summits',
      eyebrow: 'ENTERPRISE PRODUCTION',
      desc: 'Annual stakeholder meets, luxury awards banquets, product showcases, and keynotes designed with bespoke stage architecture, LED pixel-mapping, and flawless executive hospitality.',
      image: media.corporateBreakdown.gala,
    },
    {
      title: 'Starlit Sangeet & High-Voltage Nightlife',
      eyebrow: 'CONCERT-GRADE SPECTACLE',
      desc: 'Concert-scale lighting rigs, intelligent beam choreography, artist line-up coordination, DJ consoles, and starlit open-air amphitheaters for unforgettable musical nights.',
      image: media.celebrations.sangeetCard,
    },
    {
      title: 'Traditional Seemantha & Milestone Showers',
      eyebrow: 'SACRED BLESSINGS',
      desc: 'Authentic South Indian coconut-leaf floral backdrops, fresh jasmine garlands, brass deepams, and bespoke cradles celebrating the arrival of new life with family grace.',
      image: media.corporateBreakdown.seemantha,
    },
    {
      title: 'VIP Protocol, Artists & Discreet Security',
      eyebrow: 'ELITE SAFEGUARDING',
      desc: 'Professional crowd-flow choreography, private VIP green rooms, discreet personal security officers (PSOs), and secure transit management for celebrity artists and dignitaries.',
      image: media.corporateBreakdown.security,
    },
  ];

  const capabilities = [
    {
      icon: Briefcase,
      title: 'Executive Precision',
      desc: 'Timelines executed down to the minute, brand guidelines respected, and polished corporate hospitality.',
    },
    {
      icon: Music,
      title: 'Concert-Grade Acoustics',
      desc: 'Line-array acoustic rigs, wireless digital microphones, and seasoned live audio engineers.',
    },
    {
      icon: Shield,
      title: 'VIP Protocol & Safety',
      desc: 'Certified security personnel, private holding lounges, and seamless artist escort management.',
    },
    {
      icon: Award,
      title: 'Aesthetic Brilliance',
      desc: 'Bespoke stage installations and immersive atmospheres that elevate your brand prestige.',
    },
  ];

  const faqs = [
    {
      q: 'Can Posh Events manage large scale corporate events with 1,000+ attendees?',
      a: 'Yes. Our production network and technical partners have handled large-scale conferences, multi-track symposiums, and gala awards dinners with over 2,500 attendees at premier venues like Bangalore Palace, Sheraton Grand, and The Leela Bhartiya City.',
    },
    {
      q: 'Do you provide turnkey audio-visual and stage fabrication?',
      a: 'We provide full turnkey production: custom stage builds, LED screens, line array sound, intelligent lighting, projection mapping, registration kiosks, and live broadcasting.',
    },
    {
      q: 'Can you handle intimate family milestones like 50th birthdays or naming ceremonies?',
      a: 'Absolutely. We apply the same level of bespoke floral elegance, curated catering coordination, and dedicated floor management to intimate family celebrations as we do to multi-day weddings.',
    },
    {
      q: 'Do you provide artist curation and celebrity management?',
      a: 'Yes, our artist relations team books and manages top playback singers, live bands, international fusion instrumentalists, choreographers, and celebrity anchors.',
    },
  ];

  return (
    <div className="w-full bg-[#FFF9F0] text-[#3D0A14]">
      {/* ── 1. CINEMATIC HERO ── */}
      <PageHero
        image="/media/heroes/event-management-hero.webp"
        title="EVENT MANAGEMENT"
        script="in Bangalore"
        subtitle="CORPORATE GALAS, MILESTONES AND CELEBRATIONS, FLAWLESSLY EXECUTED"
        ctaText="GET A QUOTE"
        ctaLink="/contact"
        alt="Grand Luxury Event Stage and Corporate Gala in Bangalore"
        navigate={navigate}
      />

      {/* ── 2. STORY-LED DIVISIONS ── */}
      <section className="py-20 lg:py-28 bg-white text-[#3D0A14] border-t border-[#EEDDC8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <SectionHeader
            chapter="Our Production Divisions"
            title="Engineered with precision,"
            highlightWord="crafted with soul."
            subtitle="From Fortune 500 summits to intimate traditional Seemanthas, our teams execute with world-class discipline."
            dark={false}
            className="mb-16 md:mb-20"
          />

          <div className="space-y-16 lg:space-y-20">
            {eventServices.map((item, idx) => {
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
                          e.target.src = '/media/story/philosophy-stage.jpg';
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

      {/* ── 3. FOUR CORE CAPABILITIES ── */}
      <section className="py-20 lg:py-28 bg-[#FFF9F0] text-[#3D0A14] border-t border-[#EEDDC8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <SectionHeader
            chapter="Technical Excellence"
            title="Production capabilities built for"
            highlightWord="flawless results."
            dark={false}
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-[#EEDDC8] flex flex-col justify-between hover:border-gold shadow-sm hover:shadow-[0_12px_35px_rgba(201,162,75,0.15)] transition-all"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-gold/15 text-gold flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 stroke-[1.5] text-gold-dark" />
                    </div>
                    <h4 className="font-display text-xl text-[#3D0A14] mb-2 font-medium">
                      {cap.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5A2A27] font-light leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. FAQS ACCORDION ── */}
      <section className="py-20 lg:py-28 bg-white text-[#3D0A14] border-t border-[#EEDDC8]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <SectionHeader
            chapter="Client Queries"
            title="Frequently asked"
            highlightWord="questions."
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
              Planning an executive summit or <span className="gold-glow-word">milestone gala?</span>
            </h3>
            <p className="text-xs text-[#5A2A27] mt-1 font-light">Our senior technical directors are ready to engineer your event.</p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="btn-gold-pill shrink-0 !text-xs"
          >
            <span>Request Proposal</span>
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </section>
    </div>
  );
}
