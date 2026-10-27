import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Phone, CheckCircle2, Sparkles, Heart } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import ParticleCanvas from './ParticleCanvas';

export default function FinaleSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Wedding',
    date: '',
    city: 'Bengaluru',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitted(true);
    setShowConfetti(true);

    // Build WhatsApp prefilled message
    const message = `Hello Sudee! I would like to plan a celebration with Posh Events.%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Event Type:* ${encodeURIComponent(formData.eventType)}%0A*Date:* ${encodeURIComponent(formData.date || 'TBD')}%0A*City:* ${encodeURIComponent(formData.city || 'Bengaluru')}`;
    
    setTimeout(() => {
      window.open(`https://wa.me/917899243348?text=${message}`, '_blank');
    }, 1000);
  };

  return (
    <section className="relative w-full py-24 sm:py-32 bg-gradient-to-b from-[#FFF9F0] via-[#FDF3F0] to-[#FAF3EA] text-[#3D0A14] overflow-hidden select-none border-t border-[#EEDDC8]">
      {/* Background Ambience & Canvas Petals */}
      <ParticleCanvas count={showConfetti ? 60 : 25} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-10 relative z-20 text-center">
        {/* Chapter Marker */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-white/90 shadow-sm backdrop-blur-md mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
          <span className="text-[11px] tracking-[0.25em] uppercase font-sans font-semibold text-gold-dark">
            Your Story Begins Here
          </span>
        </motion.div>

        {/* Glowing Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.12] text-[#3D0A14] tracking-tight"
        >
          Let us curate your <span className="gold-glow-word">masterpiece.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-6 text-sm sm:text-base md:text-lg text-[#5A2A27] font-light max-w-xl mx-auto leading-relaxed"
        >
          Whether an intimate temple wedding, a royal Bengaluru palace celebration, or a dreamy destination getaway, our studio is dedicated to your vision.
        </motion.p>

        {/* ── INTERACTIVE CONSULTATION INQUIRY CARD ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-12 bg-white/95 rounded-3xl p-8 sm:p-12 border border-[#EEDDC8] shadow-[0_12px_45px_rgba(201,162,75,0.12)] text-left"
        >
          {isSubmitted ? (
            <div className="py-10 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gold/15 text-gold flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-[#3D0A14]">
                Inquiry Received With Honor
              </h3>
              <p className="mt-2 text-sm text-[#5A2A27] max-w-md font-light">
                Opening direct WhatsApp concierge with Sudee to confirm your private studio consultation...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#5A2A27] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya & Karthik"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#FFF9F0] border border-[#EEDDC8] text-[#3D0A14] placeholder-[#8C5D53]/60 focus:outline-none focus:border-gold text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#5A2A27] mb-2">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98450 12345"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#FFF9F0] border border-[#EEDDC8] text-[#3D0A14] placeholder-[#8C5D53]/60 focus:outline-none focus:border-gold text-sm transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#5A2A27] mb-2">
                    Celebration Type
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#FFF9F0] border border-[#EEDDC8] text-[#3D0A14] focus:outline-none focus:border-gold text-sm transition-colors"
                  >
                    <option value="Wedding">Royal Wedding</option>
                    <option value="Destination Wedding">Destination Wedding</option>
                    <option value="Sangeet / Reception">Sangeet & Reception</option>
                    <option value="Haldi / Mehendi">Haldi & Mehendi</option>
                    <option value="Milestone / Baby Shower">Milestone / Baby Shower</option>
                    <option value="Corporate Gala">Corporate Summit</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#5A2A27] mb-2">
                    Expected Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#FFF9F0] border border-[#EEDDC8] text-[#3D0A14] focus:outline-none focus:border-gold text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#5A2A27] mb-2">
                    City / Destination
                  </label>
                  <input
                    type="text"
                    placeholder="Bengaluru"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#FFF9F0] border border-[#EEDDC8] text-[#3D0A14] placeholder-[#8C5D53]/60 focus:outline-none focus:border-gold text-sm transition-colors"
                  />
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto btn-gold-pill group"
                >
                  <FaWhatsapp className="w-4 h-4 text-white" />
                  <span>Connect Directly via WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <div className="flex items-center gap-2 text-xs text-[#8C5D53]">
                  <Phone className="w-3.5 h-3.5 text-gold" />
                  <a href="tel:+917899243348" className="hover:text-gold transition-colors">
                    Direct Hotline: +91 78992 43348
                  </a>
                </div>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
