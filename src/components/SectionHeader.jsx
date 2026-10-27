import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({
  chapter = '',
  title = '',
  highlightWord = '',
  subtitle = '',
  align = 'center', // 'center' or 'left'
  dark = false, // Defaults to false for happy, warm light theme!
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <div
      className={`relative max-w-4xl mx-auto px-4 ${
        isCenter ? 'text-center' : 'text-left'
      } ${className}`}
    >
      {/* Chapter Marker */}
      {chapter && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`inline-flex items-center gap-2 mb-4 px-3.5 py-1 rounded-full border border-gold/40 bg-white/80 shadow-sm backdrop-blur-sm ${
            isCenter ? 'mx-auto' : ''
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-[11px] tracking-[0.25em] uppercase font-semibold text-gold-dark">
            {chapter}
          </span>
        </motion.div>
      )}

      {/* Headline with glowing gold keyword */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.15] tracking-tight ${
          dark ? 'text-ivory' : 'text-[#3D0A14]'
        }`}
      >
        {title}{' '}
        {highlightWord && (
          <span className="gold-glow-word">{highlightWord}</span>
        )}
      </motion.h2>

      {/* Mandap-arch / Lotus Motif SVG Divider */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`flex items-center gap-3 my-5 ${
          isCenter ? 'justify-center' : 'justify-start'
        }`}
      >
        <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold/60" />
        {/* Lotus / Mandap Arch Icon */}
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 text-gold fill-none stroke-current stroke-[1.2]"
        >
          <path d="M12 2C12 2 8 8 8 13C8 16.5 10 19 12 21C14 19 16 16.5 16 13C16 8 12 2 12 2Z" />
          <path d="M12 21C7 20 4 16 4 13C4 10 7 7 7 7" strokeDasharray="1 1" />
          <path d="M12 21C17 20 20 16 20 13C20 10 17 7 17 7" strokeDasharray="1 1" />
        </svg>
        <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold/60" />
      </motion.div>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed ${
            isCenter ? 'mx-auto' : ''
          } ${dark ? 'text-ivory/70' : 'text-[#5A2A27]'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
