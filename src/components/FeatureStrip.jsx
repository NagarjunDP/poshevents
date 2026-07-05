import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Compass, Heart } from 'lucide-react';
import { FadeUp } from './FadeUp';

export default function FeatureStrip() {
  return (
    <section id="about" className="py-24 bg-cream border-b border-gold/30">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Two-Card Vision/Mission Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          
          {/* Vision Card */}
          <FadeUp>
            <div className="bg-white p-8 md:p-12 border border-gold/30 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full pointer-events-none transition-all duration-300 group-hover:bg-gold/10" />
              <div>
                <span className="font-sans text-gold tracking-[0.25em] text-xs md:text-sm font-semibold uppercase mb-4 block">
                  THE FUTURE WE BUILD
                </span>
                <h3 className="font-serif text-3xl md:text-4xl text-navy mb-6 pb-4 border-b border-gold/20">
                  Our Vision
                </h3>
                <p className="font-sans text-charcoal/90 text-sm md:text-base leading-relaxed">
                  "To be a leading event design company known for creativity, elegance and unforgettable celebrations that leave a lasting impression."
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Mission Card */}
          <FadeUp delay={0.15}>
            <div className="bg-navy p-8 md:p-12 border border-gold/30 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-full pointer-events-none transition-all duration-300 group-hover:bg-gold/20" />
              <div>
                <span className="font-sans text-gold-lt tracking-[0.25em] text-xs md:text-sm font-semibold uppercase mb-4 block">
                  THE PROMISE WE KEEP
                </span>
                <h3 className="font-serif text-3xl md:text-4xl text-cream mb-6 pb-4 border-b border-gold/20">
                  Our Mission
                </h3>
                <p className="font-sans text-cream/90 text-sm md:text-base leading-relaxed">
                  "To deliver seamless, innovative, and personalized event experiences with passion and perfection, exceeding expectations and creating lasting impressions."
                </p>
              </div>
            </div>
          </FadeUp>

        </div>

        {/* Supporting Three-Point Strip */}
        <div className="border-t border-gold/20 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Point 1: Creative Concepts */}
            <FadeUp delay={0.1}>
              <div className="flex flex-col items-center text-center p-6 bg-white/40 border border-gold/10 rounded-lg hover:border-gold/30 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mb-6">
                  <Sparkles size={28} />
                </div>
                <h4 className="font-serif text-2xl text-navy mb-3">Creative Concepts</h4>
                <p className="font-sans text-charcoal/80 text-sm leading-relaxed max-w-xs">
                  "Unique ideas tailored to your vision."
                </p>
              </div>
            </FadeUp>

            {/* Point 2: Flawless Execution */}
            <FadeUp delay={0.25}>
              <div className="flex flex-col items-center text-center p-6 bg-white/40 border border-gold/10 rounded-lg hover:border-gold/30 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mb-6">
                  <Compass size={28} />
                </div>
                <h4 className="font-serif text-2xl text-navy mb-3">Flawless Execution</h4>
                <p className="font-sans text-charcoal/80 text-sm leading-relaxed max-w-xs">
                  "Precision, planning & perfection at every step."
                </p>
              </div>
            </FadeUp>

            {/* Point 3: Memories That Last */}
            <FadeUp delay={0.4}>
              <div className="flex flex-col items-center text-center p-6 bg-white/40 border border-gold/10 rounded-lg hover:border-gold/30 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mb-6">
                  <Heart size={28} />
                </div>
                <h4 className="font-serif text-2xl text-navy mb-3">Memories That Last</h4>
                <p className="font-sans text-charcoal/80 text-sm leading-relaxed max-w-xs">
                  "We don't just plan events, we create emotions."
                </p>
              </div>
            </FadeUp>

          </div>
        </div>

      </div>
    </section>
  );
}
