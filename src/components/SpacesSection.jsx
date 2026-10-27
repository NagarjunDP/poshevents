import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Building2, Sparkles } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function SpacesSection() {
  const venues = [
    {
      name: 'Bengaluru Palace',
      type: 'Royal Heritage Grounds',
      city: 'Bangalore',
      desc: 'Iconic Tudor architecture, regal lawns, and monumental royal processions.',
    },
    {
      name: 'The Taj West End',
      type: '20-Acre Heritage Botanical Canopy',
      city: 'Bangalore',
      desc: 'Historic banyan trees, cascading lanterns, and starlit open-air sangeets.',
    },
    {
      name: 'The Leela Bhartiya City',
      type: 'Grand Starlit Ballroom & Lawns',
      city: 'Bangalore',
      desc: 'Palatial ballrooms with state-of-the-art concert acoustics and banquet spaces.',
    },
    {
      name: 'ITC Gardenia',
      type: 'Contemporary Luxury Estate',
      city: 'Bangalore',
      desc: 'Sophisticated architectural grandeur for high-profile executive galas.',
    },
    {
      name: 'Four Seasons Bengaluru',
      type: 'Skyline Grandeur & Terrace',
      city: 'Bangalore',
      desc: 'Modern cosmopolitan luxury with panoramic city vistas and luxury suites.',
    },
    {
      name: 'JW Marriott Resort',
      type: 'Oceanfront Sunset Mandap',
      city: 'Goa',
      desc: 'Coastal sea-breeze celebrations with beachfront floral installations.',
    },
  ];

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#FFF9F0] text-[#3D0A14] overflow-hidden border-t border-[#EEDDC8]">
      {/* Background Soft Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gold/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        {/* Section Header */}
        <SectionHeader
          chapter="Our Spaces & Venues"
          title="Iconic destinations where our"
          highlightWord="stories unfold."
          subtitle="From ancestral palaces in the heart of Bengaluru to secluded seaside sanctuaries, our production operates at the highest echelon of hospitality."
          dark={false}
          className="mb-16 md:mb-20"
        />

        {/* ── VENUE GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {venues.map((venue, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative p-8 rounded-3xl bg-white border border-[#EEDDC8] shadow-[0_6px_25px_rgba(201,162,75,0.07)] hover:border-gold hover:shadow-[0_12px_35px_rgba(201,162,75,0.18)] transition-all duration-400 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-4">
                  <span className="text-[10px] tracking-[0.22em] uppercase text-gold font-semibold flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {venue.city}
                  </span>
                  <span className="text-[#8C5D53] font-mono text-xs">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl text-[#3D0A14] group-hover:text-gold transition-colors font-normal">
                  {venue.name}
                </h3>

                <p className="text-xs uppercase tracking-[0.14em] text-gold-dark font-medium mt-1">
                  {venue.type}
                </p>

                <p className="text-xs sm:text-sm text-[#5A2A27] font-light leading-relaxed mt-4 pt-4 border-t border-[#F0E4D5]">
                  {venue.desc}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-semibold text-gold group-hover:text-gold-dark transition-colors">
                <Sparkles className="w-3 h-3" />
                <span>Premier Production Partner</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
