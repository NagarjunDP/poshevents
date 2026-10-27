import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, Flame, Heart, Music, Sun, Award, Compass, Building2 } from 'lucide-react';
import { media } from '../data/media';

export default function BespokeServices({ navigate }) {
  const services = [
    {
      id: 'sacred-muhurtham',
      title: 'Muhurtham & Mandap Architecture',
      subtitle: 'TEMPLE INSPIRED • VEDIC TRADITIONS',
      desc: 'Architectural temple mandaps, hand-woven Madurai jasmine canopies, authentic brass urulis, and sacred muhurtham choreography tailored to your family traditions.',
      image: '/mandap.jpg',
      path: '/wedding-planners-in-bangalore',
      badge: 'Signature Heritage',
      icon: Sun,
    },
    {
      id: 'sangeet-reception',
      title: 'Sangeet & Reception Spectacles',
      subtitle: 'HIGH GLAMOUR • CONCERT STAGING',
      desc: 'Cinematic lighting, concert trussing, LED pixel tunnels, DJ soundscapes, and immersive couture stage sets for unforgettable musical evenings.',
      image: media.celebrations.sangeetCard,
      path: '/wedding-planners-in-bangalore',
      badge: 'High Energy',
      icon: Music,
    },
    {
      id: 'haldi-mehendi',
      title: 'Haldi, Mehendi & Carnivals',
      subtitle: 'SUNNY MARIGOLDS • JOYOUS RITUALS',
      desc: 'Vibrant marigold waterfalls, brass uruli floral baths, hand-painted mehendi gazebos, traditional folk singers, and fragrant jasmine petal showers.',
      image: media.celebrations.haldiCard,
      path: '/wedding-planners-in-bangalore',
      badge: 'Pure Joy',
      icon: Flame,
    },
    {
      id: 'milestone-babyshower',
      title: 'Baby Shower & Seemantha Celebrations',
      subtitle: 'TRADITIONAL SEEMANTHA • MATERNITY BLESSINGS',
      desc: 'Heartwarming setups honoring traditional rituals with dreamy botanical canopies, customized cradle decor, and bespoke family hospitality.',
      image: media.celebrations.milestoneCard,
      path: '/portfolio',
      badge: 'Cherished Milestones',
      icon: Heart,
    },
    {
      id: 'naming-ceremony',
      title: 'Naming Ceremony',
      subtitle: 'BESPOKE CRADLES • SACRED FLORALS • TRADITIONS',
      desc: 'Heartwarming cradle ceremonies and naming rituals designed with sacred floral canopies, bespoke cradles, brass accents, and joy-filled moments for your family.',
      image: '/namingceremony.jpg',
      path: '/event-management-bangalore',
      badge: 'Joyous Beginnings',
      icon: Sparkles,
    },
    {
      id: 'corporate-summits',
      title: 'Corporate Galas & Brand Summits',
      subtitle: 'ANNUAL AWARDS • PRODUCT REVEALS',
      desc: 'Executive stage designs, crystal clear line-array sound, high-profile dignitary hosting, and seamless brand experiences for premier enterprises in Bengaluru.',
      image: media.celebrations.corporateCard,
      path: '/event-management-bangalore',
      badge: 'Executive Excellence',
      icon: Building2,
    },
  ];

  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#FFF9F0] text-[#3D0A14] overflow-hidden">
      {/* Delicate background blush accents */}
      <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-blush/30 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 -left-24 w-96 h-96 rounded-full bg-gold/10 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-gold/40 bg-white/80 shadow-sm backdrop-blur-sm mb-4"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span className="text-[11px] tracking-[0.25em] uppercase font-semibold text-gold-dark">
                Bespoke Services & Curations
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal text-[#3D0A14] leading-tight"
            >
              Masterpieces for every <span className="gold-glow-word">milestone.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-sm sm:text-base text-[#5A2A27] font-light leading-relaxed"
            >
              From sacred Vedic muhurthams steeped in temple architecture to glamorous destination weddings and high-profile corporate galas, every event is architected with meticulous reverence.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => navigate('/portfolio')}
              className="btn-ghost-pill group"
            >
              <span>View Portfolio Archive</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                onClick={() => navigate(item.path)}
                className="group relative flex flex-col rounded-3xl overflow-hidden bg-white border border-[#EEDDC8] shadow-[0_6px_25px_rgba(201,162,75,0.07)] hover:shadow-[0_16px_40px_rgba(201,162,75,0.18)] hover:-translate-y-1.5 transition-all duration-500 cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[16/11] overflow-hidden bg-[#FAF3EA]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-[10px] tracking-wider uppercase font-semibold bg-white/95 text-[#3D0A14] backdrop-blur-md shadow-sm">
                      {item.badge}
                    </span>
                  </div>

                  {/* Icon badge */}
                  <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 text-gold flex items-center justify-center shadow-md">
                    <IconComponent className="w-4 h-4 text-gold-dark" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 bg-white">
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-gold-dark block mb-1.5">
                      {item.subtitle}
                    </span>
                    <h3 className="font-display text-2xl font-normal text-[#3D0A14] leading-snug group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-[#5A2A27] font-light leading-relaxed line-clamp-3">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#F2E5D5] flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-wider uppercase text-gold group-hover:text-gold-dark transition-colors inline-flex items-center gap-1">
                      <span>Explore Curation</span>
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#FAF3EA] group-hover:bg-gold text-[#3D0A14] group-hover:text-white flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
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
