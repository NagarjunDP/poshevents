import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { media } from '../data/media';
import SectionHeader from './SectionHeader';

export default function SignatureCelebrations({ navigate }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 'mandap',
      title: 'Muhurtham & Mandap Architecture',
      tagline: 'Temple Mandaps • Madurai Jasmine • Sacred Urulis',
      description:
        'Architectural temple mandaps, hand-woven Madurai jasmine canopies, authentic brass urulis, and sacred muhurtham choreography tailored to your family traditions.',
      image: '/mandap.jpg',
      video: media.celebrations.weddingVideoPreview,
      path: '/wedding-planners-in-bangalore',
      cols: 'lg:col-span-7',
      aspect: 'aspect-[16/10]',
    },
    {
      id: 'naming',
      title: 'Naming Ceremony',
      tagline: 'Bespoke Cradles • Sacred Florals • Heritage Traditions',
      description:
        'Heartwarming cradle ceremonies and naming rituals designed with sacred floral canopies, bespoke cradles, brass accents, and joy-filled moments for your family.',
      image: '/namingceremony.jpg',
      video: '/namingceremony_bento.mp4',
      path: '/event-management-bangalore',
      cols: 'lg:col-span-5',
      aspect: 'aspect-[16/10]',
    },
    {
      id: 'sangeet',
      title: 'Sangeet & Musical Productions',
      tagline: 'Starlit Amphitheatres • Dynamic Lighting • Sound Architecture',
      description:
        'Concert-scale lighting rigs, artist line-ups, choreographed family performances, and high-energy nightlife aesthetics.',
      image: media.celebrations.sangeetCard,
      video: media.celebrations.sangeetVideoPreview,
      path: '/wedding-planners-in-bangalore',
      cols: 'lg:col-span-4',
      aspect: 'aspect-[4/3]',
    },
    {
      id: 'haldi',
      title: 'Haldi & Mehendi Carnivals',
      tagline: 'Marigold Swags • Brass Urulis • Floral Rain Festivities',
      description:
        'Sun-drenched daytime bliss with fragrant flower showers, live folk instrumentalists, and joyful interactive carnival lounges.',
      image: media.celebrations.haldiCard,
      video: media.celebrations.haldiVideoPreview,
      path: '/wedding-planners-in-bangalore',
      cols: 'lg:col-span-4',
      aspect: 'aspect-[4/3]',
    },
    {
      id: 'corporate',
      title: 'Corporate Galas & Milestones',
      tagline: 'Executive Summits • Baby Showers • Milestone Galas',
      description:
        'Conferences, awards banquets, traditional seemanthas, and milestone birthdays planned with uncompromising aesthetic quality and safety.',
      image: media.celebrations.corporateCard,
      video: media.celebrations.corporateVideoPreview,
      path: '/event-management-bangalore',
      cols: 'lg:col-span-4',
      aspect: 'aspect-[4/3]',
    },
  ];

  return (
    <section className="relative w-full py-28 md:py-36 bg-[#F7F1E6] text-[#0E0A12] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        {/* Section Header */}
        <SectionHeader
          chapter="Chapter V • Signature Celebrations"
          title="Bespoke services for life’s"
          highlightWord="grandest milestones."
          subtitle="Explore our specialized celebration divisions. Hover or tap each card to preview the live cinematic atmosphere."
          dark={false}
          className="mb-16 md:mb-20"
        />

        {/* ── IMMERSIVE SERVICES GRID (INCL. DESTINATION WEDDINGS) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {services.map((item) => {
            const isHovered = hoveredCard === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => navigate(item.path)}
                className={`${item.cols} group relative rounded-3xl overflow-hidden border border-[#C9A24B]/35 shadow-glass-ivory cursor-pointer transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:border-gold`}
              >
                <div className={`w-full ${item.aspect} relative overflow-hidden bg-ink`}>
                  {/* Poster Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      isHovered ? 'scale-105 opacity-0' : 'scale-100 opacity-90'
                    }`}
                  />

                  {/* Video Preview on Hover/Tap */}
                  {item.video && (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                        isHovered ? 'opacity-100 scale-102' : 'opacity-0'
                      }`}
                    >
                      <source src={item.video} type="video/mp4" />
                    </video>
                  )}

                  {/* Dark Multi-Stop Scrim for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0A12] via-[#0E0A12]/40 to-transparent opacity-90 group-hover:opacity-85 transition-opacity" />

                  {/* Top Badge & Video Play Hint */}
                  <div className="absolute top-5 inset-x-5 flex items-center justify-between text-white z-10">
                    <span className="text-[10px] tracking-[0.22em] uppercase font-semibold text-gold-light bg-ink/60 backdrop-blur-md px-3 py-1 rounded-full border border-gold/30">
                      Signature Experience
                    </span>
                    <div className="w-8 h-8 rounded-full bg-gold/20 backdrop-blur-md border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-ink transition-all">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* Bottom Text Content */}
                  <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 flex flex-col justify-end text-left z-10 text-white">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-gold font-sans font-semibold mb-1">
                      {item.tagline}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl text-ivory group-hover:text-gold-light transition-colors font-normal">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-ivory/70 line-clamp-2 mt-2 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
