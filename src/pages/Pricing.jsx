import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, ChevronDown, ChevronUp, Calendar } from 'lucide-react';

export default function Pricing({ navigate }) {
  const [openFaq, setOpenFaq] = useState(null);

  const packages = [
    {
      name: 'Essential Styling',
      tagline: 'Ideal for Intimate Traditions & Single-Day Functions',
      price: 'Curated Investment',
      isPopular: false,
      features: [
        'Dedicated senior lead planner',
        'Custom traditional mandap or backdrop styling',
        'Complete floral procurement & on-site assembly',
        'Bridal entry & groom arrival coordination',
        'Stage ambient warm mood lighting',
        'Ritual prop set (brass urlis, diyas, cushions)',
        'Up to 300 guests coverage',
        'Full post-event teardown',
      ],
      cta: 'Book Essential Package',
    },
    {
      name: 'Royal Signature',
      tagline: 'Our Most Coveted Full-Scale Wedding Production',
      price: 'Bespoke Grandeur',
      isPopular: true,
      popularBadge: 'MOST POPULAR',
      features: [
        'Complete end-to-end wedding direction',
        'Multi-day coverage (Haldi, Sangeet & Muhurtham)',
        'Custom 3D spatial renders & venue layout',
        'Concert-grade truss stage & intelligent lighting',
        'Exotic & native botanical floral architecture',
        'Dedicated bridal concierge & VIP hospitality',
        'Vendor negotiation & contract management',
        'Personal Security Officers (PSO) deployment',
        'Full guest hospitality desk liaison',
      ],
      cta: 'Book Royal Signature',
    },
    {
      name: 'Imperial Bespoke',
      tagline: 'Ultra-Luxury Destination & Palace Celebrations',
      price: 'Custom Masterwork',
      isPopular: false,
      features: [
        'Founder Sudeep personally oversees execution',
        'Pan-India destination logistics & hotel buyouts',
        'Monumental mandap architectural installations',
        'Celebrity artist & DJ stage production',
        'Charter travel & luggage escort coordination',
        'Custom themed photo-booths & interactive lounges',
        'Drone & multi-camera AV live feed integration',
        'Round-the-clock family concierge suite',
        'Unlimited revisions on all design mockups',
      ],
      cta: 'Request Private Consultation',
    },
  ];

  const faqs = [
    {
      q: 'How does Posh Events structure pricing and billing?',
      a: 'We believe in 100% transparent pricing. Depending on whether you choose our decor styling package or full end-to-end wedding planning, we provide a detailed itemized estimate covering decor fabrication, florals, lighting, audio, and planning fees with no hidden markups.',
    },
    {
      q: 'Are vendor fees included in the package or billed directly?',
      a: 'Vendor fees (such as hotel catering, celebrity performers, or specific venue rentals) are billed transparently at actuals directly to the vendor or through our consolidated master invoice, whichever you prefer.',
    },
    {
      q: 'Can packages be customized for multi-day South Indian weddings?',
      a: 'Yes, almost 90% of our weddings are multi-day celebrations comprising Haldi, Mehendi, Sangeet, Muhurtham, and Reception. We tailor package deliverables to match your exact rituals.',
    },
    {
      q: 'What is the payment schedule?',
      a: 'A 25% retainer secures your wedding date on our calendar. A 50% milestone payment is scheduled upon 3D design approval, with the final 25% balance due prior to wedding week execution.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full pt-20">
      
      {/* ── 1. HERO BANNER ── */}
      <section className="bg-[#FAF8F3] py-16 lg:py-24 border-b border-[#B08D57]/20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#B08D57]/15 border border-[#B08D57]/30 mb-4">
            <Sparkles size={13} className="text-[#8A6B2E]" />
            <span className="font-sans text-[11px] tracking-[0.22em] uppercase font-bold text-[#8A6B2E]">
              TRANSPARENT VALUE
            </span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-[0.05em] text-[#2B2B2B] mb-4">
            Wedding Planner Cost & Packages
          </h1>

          <p className="font-sans text-sm sm:text-base text-[#4A4A4A] max-w-xl mx-auto leading-relaxed">
            Every love story is unique. We offer curated investment tiers designed to deliver flawless beauty and peace of mind.
          </p>

          <div className="w-20 h-[1.5px] bg-[#B08D57] mx-auto mt-6" />
        </div>
      </section>


      {/* ── 2. 3-TIER PRICING CARDS ── */}
      <section className="py-20 lg:py-28 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg) => {
              const isPop = pkg.isPopular;
              return (
                <div
                  key={pkg.name}
                  className={`relative rounded-[24px] p-8 lg:p-10 flex flex-col justify-between transition-all duration-500 ${
                    isPop
                      ? 'bg-white border-2 border-[#B08D57] shadow-2xl lg:-translate-y-4'
                      : 'bg-white/80 border border-[#B08D57]/20 shadow-luxury hover:bg-white'
                  }`}
                >
                  {/* Most Popular Badge */}
                  {isPop && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#B08D57] to-[#C4A574] text-white px-4 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-[0.2em] shadow-md">
                      {pkg.popularBadge}
                    </div>
                  )}

                  <div>
                    <div className="border-b border-[#B08D57]/15 pb-6 mb-6">
                      <span className="eyebrow-label block mb-2">{pkg.name}</span>
                      <p className="font-sans text-xs text-[#4A4A4A] mb-4 min-h-[36px]">
                        {pkg.tagline}
                      </p>
                      <div className="font-serif font-bold text-2xl sm:text-3xl text-[#2B2B2B]">
                        {pkg.price}
                      </div>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-3.5 mb-8">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm font-sans text-[#2B2B2B]">
                          <CheckCircle2 size={16} className="text-[#B08D57] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <a
                      href="/contact"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate('/contact');
                      }}
                      className={`w-full py-3.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider text-center block transition-all shadow-md ${
                        isPop
                          ? 'btn-gold-pill'
                          : 'bg-[#FAF8F3] text-[#2B2B2B] border border-[#B08D57]/40 hover:bg-[#B08D57] hover:text-white'
                      }`}
                    >
                      {pkg.cta}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ── 3. PRICING FAQS ── */}
      <section className="py-20 lg:py-28 bg-[#FAF8F3] border-t border-[#B08D57]/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow-label block mb-3">CLARITY & ASSURANCE</span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.04em] text-[#2B2B2B]">
              PRICING & INVESTMENT FAQS
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


      {/* ── 4. CTA BANNER ── */}
      <section className="py-20 bg-gradient-to-r from-[#FAF8F3] via-[#F5F0E8] to-[#EAE3D6] border-t border-[#B08D57]/20 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-5">
          <span className="eyebrow-label block">REQUEST AN ESTIMATE</span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl uppercase tracking-[0.04em] text-[#2B2B2B]">
            NEED A BESPOKE PROPOSAL?
          </h2>
          <p className="font-sans text-sm text-[#4A4A4A] leading-relaxed">
            Share your dates, venue, and vision for an itemized estimate tailored to your celebration.
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
              Get Custom Quote
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
