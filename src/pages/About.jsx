import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, Users, CheckCircle2, ArrowUpRight, Compass, Feather } from 'lucide-react';
import { media } from '../data/media';
import PageHero from '../components/PageHero';

export default function About({ navigate }) {
  const principles = [
    {
      number: '01',
      title: 'Sacred Reverence First',
      desc: 'Rituals are not decor backdrops; they are the living heartbeat of the wedding. Every mandap is designed to sanctify and elevate the Vedic muhurtham.',
    },
    {
      number: '02',
      title: 'Architectural Singularity',
      desc: 'We never duplicate designs. Every celebration is born from a blank canvas, inspired by the couple’s lineage, aesthetics, and architectural taste.',
    },
    {
      number: '03',
      title: 'Complete Host Serenity',
      desc: 'The greatest luxury on your wedding day is tranquility. We absorb every logistical friction so families can immerse themselves in pure joy.',
    },
  ];

  return (
    <div className="w-full bg-[#FFF9F0] text-[#3D0A14]">
      {/* ── 1. CINEMATIC HERO ── */}
      <PageHero
        image="/media/heroes/about-hero.webp"
        title="OUR STORY"
        script="Posh Events by Sudee"
        subtitle="BORN IN BENGALURU, BUILT ON TRADITION AND TRUST"
        ctaText="MEET THE TEAM"
        ctaLink="#team"
        alt="Posh Events by Sudee luxury wedding decor and heritage brass lamps"
        navigate={navigate}
      />

      {/* ── 2. FOUNDER SECTION WITH MANDAP-ARCH MASK & NOTE ── */}
      <section id="team" className="py-20 lg:py-28 bg-white text-[#3D0A14] overflow-hidden border-t border-[#EEDDC8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Arched Mandap-Frame Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 relative flex justify-center"
            >
              {/* Elegant Arched Frame */}
              <div className="relative w-full max-w-sm aspect-[3/4.2] rounded-t-[140px] rounded-b-3xl overflow-hidden border-2 border-gold/50 shadow-2xl bg-[#FFF9F0] p-1.5">
                <div className="w-full h-full rounded-t-[132px] rounded-b-2xl overflow-hidden relative">
                  <img
                    src={media.story.founder}
                    alt="Sudee, Founder & Creative Director, Posh Events"
                    className="w-full h-full object-cover filter brightness-[0.98] hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = '/media/story/philosophy-stage.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Caption */}
                  <div className="absolute bottom-5 inset-x-5 text-white text-center">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-gold font-semibold block">
                      Founder & Creative Director
                    </span>
                    <h3 className="font-display text-2xl text-white mt-0.5">Sudee</h3>
                    <p className="text-[11px] text-white/80 mt-0.5 font-light">Posh Events by Sudee • Bengaluru</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Founder Note & 3 Principles */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 flex flex-col justify-center text-left space-y-6"
            >
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-gold-dark">
                <Feather className="w-4 h-4 text-gold-dark" />
                <span>A PERSONAL NOTE FROM SUDEE</span>
              </div>

              {/* Founder's Note in Italic Serif */}
              <blockquote className="font-display text-2xl sm:text-3xl text-[#3D0A14] font-normal italic leading-snug">
                "When I founded Posh Events in Bengaluru, my dream was to give South Indian celebrations the cinematic grandeur they truly deserve—without ever losing the sacred warmth of our temple traditions."
              </blockquote>

              <p className="text-sm sm:text-base text-[#5A2A27] font-light leading-relaxed">
                Every family that walks into our Sadashivanagar studio brings a unique legacy. We treat that trust as sacred. Whether it is sourcing pure Madurai mallige for a Vedic mandap or orchestrating a starlit concert Sangeet at the palace, we put our heart into every petal and beam of light.
              </p>

              {/* Signature-style flourish */}
              <div className="pt-2 font-display text-2xl text-[#5A0F1E] italic font-semibold">
                ~ Sudee
              </div>

              {/* 3 Guiding Convictions */}
              <div className="mt-8 pt-8 border-t border-[#EEDDC8] space-y-4">
                <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-gold-dark block">
                  THREE GUIDING CONVICTIONS
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {principles.map((pr) => (
                    <div key={pr.number} className="p-5 rounded-2xl bg-[#FFF9F0] border border-[#EEDDC8] shadow-sm">
                      <span className="text-xs font-mono text-gold-dark font-bold block mb-1">
                        {pr.number}
                      </span>
                      <h4 className="font-display text-lg text-[#3D0A14] font-medium leading-tight">
                        {pr.title}
                      </h4>
                      <p className="text-xs text-[#5A2A27] font-light mt-1.5 leading-relaxed">
                        {pr.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. CELEBRATORY STUDIO CTA BAND ── */}
      <section className="py-16 bg-[#FFF9F0] text-center border-t border-[#EEDDC8]">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="font-display text-2xl sm:text-3xl text-[#3D0A14]">
              Ready to meet Sudee at our <span className="gold-glow-word">Bangalore studio?</span>
            </h3>
            <p className="text-xs text-[#5A2A27] mt-1 font-light">Schedule an intimate celebration discovery session.</p>
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
