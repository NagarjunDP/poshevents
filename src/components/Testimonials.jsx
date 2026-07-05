import React, { useState, useEffect } from 'react';
import { FadeUp } from './FadeUp';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    text: "Really nice experience working with Mr. Sudeep. Just like he has a policy of customer satisfaction, he makes sure all artists and event crew working with him are taken care of throughout the event. Once again thank you Sudeep",
    author: "Anchor Jhanvi",
    source: "Review from Google",
    rating: "⭐⭐⭐⭐⭐ 5/5",
    date: "6 months ago"
  },
  {
    text: "Outstanding event management from start to finish! The team handled every detail with precision, creativity, and professionalism. Seamless coordination.",
    author: "Hemanth Kumar",
    source: "Review from Google",
    rating: "⭐⭐⭐⭐⭐ 5/5",
    date: "6 months ago"
  },
  {
    text: "Excellent event management with seamless coordination and attention to detail. The planning, execution, and overall flow of the event were handled very professionally. Truly a well-organized and memorable experience.",
    author: "Adarsha jain Muppane",
    source: "Review from Google",
    rating: "⭐⭐⭐⭐⭐ 5/5",
    date: "6 months ago"
  },
  {
    text: "😊 Wonderful decoration! Everything looks beautiful and perfectly arranged. Amazing work by Sudee and team.⭐ ✨",
    author: "Bhavya R",
    source: "Review from Google",
    rating: "⭐⭐⭐⭐⭐ 5/5",
    date: "a month ago"
  },
  {
    text: "The event was handled with great professionalism, featuring smooth coordination, precise planning, and a well-structured flow. Overall, it was an impressive!😊",
    author: "Chandini S",
    source: "Review from Google",
    rating: "⭐⭐⭐⭐⭐ 5/5",
    date: "6 months ago"
  },
  {
    text: "The event was handled with great professionalism, featuring smooth coordination, precise planning, and a well-structured flow. Overall, it was an impressive!😊",
    author: "thilak yadav",
    source: "Review from Google",
    rating: "⭐⭐⭐⭐⭐ 5/5",
    date: "6 months ago"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-14 md:py-24 bg-cream relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <FadeUp>
          <span className="font-sans text-gold tracking-[0.25em] text-[10px] md:text-xs font-semibold uppercase mb-3 block">
            VERIFIED FEEDBACK
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-16">
            Words From Our Beloved Clients
          </h2>
        </FadeUp>

        <div className="max-w-3xl mx-auto relative min-h-[260px] md:min-h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="w-full flex flex-col items-center justify-center py-4"
            >
              {/* Rating & Source Metadata block */}
              <div className="flex items-center justify-center space-x-2 md:space-x-3 mb-6 flex-wrap gap-y-2">
                <span className="text-gold text-xs font-semibold tracking-wider">
                  {testimonials[current].rating}
                </span>
                <span className="text-gold/30 hidden xs:inline">|</span>
                <span className="font-sans text-[9px] md:text-[10px] text-navy/70 tracking-widest uppercase font-bold bg-gold/10 px-3 py-1 rounded-full">
                  {testimonials[current].source}
                </span>
                <span className="text-navy/20 hidden xs:inline">|</span>
                <span className="text-navy/50 text-[10px] font-sans tracking-wide">
                  {testimonials[current].date}
                </span>
              </div>

              {/* Review Text */}
              <p className="text-lg md:text-xl font-serif italic text-navy mb-6 leading-relaxed max-w-2xl text-center">
                "{testimonials[current].text}"
              </p>

              {/* Reviewer Name */}
              <span className="font-sans text-charcoal tracking-widest uppercase text-xs md:text-sm font-bold">
                — {testimonials[current].author}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Paginated Navigation Dots */}
        <div className="flex justify-center space-x-3 mt-8 z-20 relative">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === current ? 'bg-gold w-6' : 'bg-gold/30 hover:bg-gold/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
