import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Shield, Music, Briefcase, Award, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

export default function EventManagement({ navigate }) {
  const [openFaq, setOpenFaq] = useState(null);

  const eventServices = [
    {
      title: 'Corporate Galas & Leadership Summits',
      eyebrow: 'ENTERPRISE PRODUCTION',
      desc: 'Flawlessly planned annual meets, corporate gala dinners, award ceremonies, and product launches with stage architecture, branding, and audiovisual production.',
      image: '/po1.jpeg',
    },
    {
      title: 'Grand Sangeet & Musical Evenings',
      eyebrow: 'HIGH-VOLTAGE CELEBRATION',
      desc: 'Concert-grade intelligent beam lighting, custom truss systems, LED pixel mapping, DJ consoles, and choreography stage management for energetic celebrations.',
      image: '/sangeet01.PNG',
    },
    {
      title: 'Traditional Seemantha & Baby Showers',
      eyebrow: 'SACRED BLESSINGS',
      desc: 'Authentic South Indian coconut leaf weaves, fresh jasmine garlands, brass deepams, and cradle canopies celebrating the arrival of new life.',
      image: '/i3.jpg',
    },
    {
      title: 'Personal Security Officers & VIP Escorts',
      eyebrow: 'DISCREET PROTECTION',
      desc: 'Professional bouncers and elite personal security officers (PSOs) ensuring discreet crowd flow, celebrity protection, and secure artist transits.',
      image: '/po2.jpeg',
    },
  ];

  const capabilities = [
    {
      icon: Briefcase,
      title: 'Corporate Precision',
      desc: 'Timelines adhered to down to the minute, strict brand guideline fidelity, and executive liaison.',
    },
    {
      icon: Music,
      title: 'Concert-Grade Sound',
      desc: 'Acoustic line-array systems, wireless digital mics, and expert sound technicians.',
    },
    {
      icon: Shield,
      title: 'VIP Protocol & Safety',
      desc: 'Trained security personnel, private green rooms, and seamless artist escort management.',
    },
    {
      icon: Award,
      title: 'Signature Decor',
      desc: 'Uncompromising aesthetic quality and fresh botanicals that make an unforgettable impression.',
    },
  ];

  const faqs = [
    {
      q: 'Can Posh Events manage large scale corporate events with 1,000+ attendees?',
      a: 'Yes, our team has executed corporate summits, annual celebrations, and high-profile exhibitions with over 1,500 delegates across Bangalore’s major convention halls and luxury hotels.',
    },
    {
      q: 'Do you provide security personnel and bouncers for private celebrations?',
      a: 'Yes, we have our own vetted, licensed Personal Security Officers (PSOs) and bouncer teams specifically trained for luxury weddings, high-profile celebrity events, and corporate galas.',
    },
    {
      q: 'What audiovisual and stage equipment do you provide in-house?',
      a: 'We provide comprehensive AV packages including P3 LED video walls, moving head beam lighting, haze machines, line-array audio systems, truss structures, and hydraulic stages.',
    },
    {
      q: 'How do you handle venue permissions and licensing?',
      a: 'Our operations team handles necessary municipal permissions, fire safety compliance, sound level adherence, and venue NOCs so you have zero legal hassle.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full pt-20">
      
      {/* ── 1. HERO BANNER ── */}
      <section className="relative w-full h-[65vh] min-h-[440px] flex items-center justify-center overflow-hidden bg-black">
        <img
          src="/sangeet01.PNG"
          alt="Event Management in Bangalore"
          className="w-full h-full object-cover opacity-65 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-[#F5F0E8]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4">
            <Sparkles size={13} className="text-[#D8BA84]" />
            <span className="font-sans text-[11px] tracking-[0.25em] uppercase font-bold text-white">
              END-TO-END EVENT PRODUCTION
            </span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-[0.05em] text-white leading-tight mb-4 drop-shadow-md">
            EVENT MANAGEMENT <br />
            <span className="text-[#D8BA84]">IN BANGALORE</span>
          </h1>

          <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.2em] font-medium text-white/90 max-w-xl mx-auto">
            CORPORATE GALAS, CONCERT STAGES, AND BESPOKE PRIVATE CELEBRATIONS
          </p>
        </div>
      </section>


      {/* ── 2. SERVICES BREAKDOWN (ZIG-ZAG) ── */}
      <section className="py-20 lg:py-28 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow-label block mb-3">OUR CAPABILITIES</span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.04em] text-[#2B2B2B]">
              COMPREHENSIVE EVENT PRODUCTION
            </h2>
            <div className="w-20 h-[1.5px] bg-[#B08D57] mx-auto mt-5" />
          </div>

          {eventServices.map((item, idx) => {
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
                      Enquire for This Event
                    </a>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </section>


      {/* ── 3. FOUR CORE CAPABILITIES GRID ── */}
      <section className="py-20 lg:py-24 bg-[#FAF8F3] border-t border-[#B08D57]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow-label block mb-3">WHY POSH EVENTS</span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.04em] text-[#2B2B2B]">
              PRODUCTION EXCELLENCE
            </h2>
            <div className="w-20 h-[1.5px] bg-[#B08D57] mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="bg-white rounded-[24px] p-8 border border-[#B08D57]/20 shadow-sm hover:shadow-luxury transition-all space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-[#B08D57]/15 text-[#8A6B2E] flex items-center justify-center">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-[#2B2B2B]">
                    {cap.title}
                  </h3>
                  <p className="font-sans text-xs text-[#4A4A4A] leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ── 4. FAQS ACCORDION ── */}
      <section className="py-20 lg:py-28 bg-[#F5F0E8] border-t border-[#B08D57]/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow-label block mb-3">COMMON QUESTIONS</span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.04em] text-[#2B2B2B]">
              EVENT MANAGEMENT FAQS
            </h2>
            <div className="w-20 h-[1.5px] bg-[#B08D57] mx-auto mt-5" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#B08D57]/20 overflow-hidden shadow-sm"
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


      {/* ── 5. CTA BANNER ── */}
      <section className="py-20 bg-[#FAF8F3] border-t border-[#B08D57]/20 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-5">
          <span className="eyebrow-label block">PLAN YOUR EVENT</span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl uppercase tracking-[0.04em] text-[#2B2B2B]">
            DISCUSS YOUR EVENT REQUIREMENTS
          </h2>
          <p className="font-sans text-sm text-[#4A4A4A] leading-relaxed">
            Reach out to our events production desk for customized stage, AV, security, and decor proposals.
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
              Get Event Proposal
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
