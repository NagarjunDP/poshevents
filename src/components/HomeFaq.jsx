import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { faqsData } from '../data/faqs';

export default function HomeFaq({ navigate }) {
  const [openIndex, setOpenIndex] = useState(0);

  // Inject FAQPage JSON-LD structured data
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqsData.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
    });
    document.head.appendChild(script);
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  const whatsappUrl =
    'https://wa.me/919845012345?text=Hello%20Posh%20Events%20by%20Sudee,%20I%20have%20a%20question%20regarding%20wedding%20planning.';

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#FFF9F0] text-[#3D0A14] overflow-hidden border-t border-[#EEDDC8]">
      {/* Background radial accent */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ── LEFT COLUMN (STICKY ON DESKTOP, lg:col-span-4) ── */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 flex flex-col text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold/40 bg-white/80 shadow-sm backdrop-blur-sm mb-4 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
              <span className="text-[11px] tracking-[0.25em] uppercase font-semibold text-gold-dark">
                FAQ
              </span>
            </div>

            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-[#3D0A14]"
            >
              Questions Couples <br className="hidden sm:block" />
              <span className="text-[#C9A24B] italic">Ask Us.</span>
            </h2>

            {/* Short gold accent line */}
            <div className="w-16 h-[2px] bg-[#C9A24B] my-6" />

            <p className="text-sm sm:text-base text-[#5A2A27]/80 font-light leading-relaxed mb-8">
              Everything you need to know about our turnkey production, sacred Vedic styling, and investment tiers.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                height: '48px',
                padding: '0 28px',
                border: '1px solid #C9A24B',
                borderRadius: '4px',
                letterSpacing: '0.22em',
                transition: 'all 300ms ease',
              }}
              className="w-fit text-xs uppercase font-semibold text-[#3D0A14] bg-transparent hover:bg-[#C9A24B] hover:text-white inline-flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* ── RIGHT COLUMN: ACCORDION (lg:col-span-8) ── */}
          <div className="lg:col-span-8 flex flex-col divide-y divide-[#EEDDC8] border-y border-[#EEDDC8]">
            {faqsData.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={item.id} className="py-5 sm:py-6 transition-colors">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    className="w-full flex items-center justify-between gap-4 text-left group focus:outline-none cursor-pointer"
                  >
                    <div className="flex items-center gap-4 sm:gap-6 flex-1 min-w-0">
                      {/* Number 01 to 07 in gold */}
                      <span
                        style={{ fontFamily: "'Playfair Display', serif" }}
                        className="text-lg sm:text-xl font-normal text-[#C9A24B] shrink-0"
                      >
                        {item.id}
                      </span>

                      {/* Question (Serif 20px maroon, shifts 6px right on hover, turns gold) */}
                      <span
                        style={{ fontFamily: "'Playfair Display', serif" }}
                        className="text-lg sm:text-[20px] font-normal text-[#3D0A14] leading-snug transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-[#C9A24B]"
                      >
                        {item.q}
                      </span>
                    </div>

                    {/* "+" rotates to "x" in a gold fill */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'bg-[#C9A24B] text-white rotate-45 shadow-sm'
                          : 'bg-white border border-[#EEDDC8] text-[#5A2A27] group-hover:border-gold group-hover:text-gold'
                      }`}
                    >
                      <span className="text-xl font-light leading-none -mt-0.5 select-none">+</span>
                    </div>
                  </button>

                  {/* 350ms height + opacity animated answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${idx}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pb-2 pl-9 sm:pl-12 pr-4 text-sm sm:text-base text-[#4A3A32] font-light leading-relaxed">
                          <p>{item.a}</p>
                          {item.link && (
                            <div className="mt-3">
                              <button
                                type="button"
                                onClick={() => navigate ? navigate(item.link) : (window.location.href = item.link)}
                                className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#C9A24B] hover:text-[#3D0A14] transition-colors"
                              >
                                <span>{item.linkText}</span>
                                <ArrowUpRight className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
