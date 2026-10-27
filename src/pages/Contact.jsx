import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Phone, Mail, MapPin, Clock, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { media } from '../data/media';
import MapComponent from '../components/MapComponent';
import SectionHeader from '../components/SectionHeader';
import PageHero from '../components/PageHero';

export default function Contact({ navigate }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Royal South Indian Wedding',
    eventDate: '',
    city: 'Bengaluru',
    budget: '₹15 Lakhs - ₹30 Lakhs',
    vision: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;

    setIsSubmitted(true);
    const message = `*New Celebration Inquiry via posheventsbysudee.com*%0A%0A*Name:* ${encodeURIComponent(form.name)}%0A*Phone:* ${encodeURIComponent(form.phone)}%0A*Email:* ${encodeURIComponent(form.email || 'Not provided')}%0A*Event:* ${encodeURIComponent(form.eventType)}%0A*Date:* ${encodeURIComponent(form.eventDate || 'TBD')}%0A*Venue/City:* ${encodeURIComponent(form.city)}%0A*Budget:* ${encodeURIComponent(form.budget)}%0A*Vision:* ${encodeURIComponent(form.vision || 'Consultation requested')}`;

    setTimeout(() => {
      window.open(`https://wa.me/917899243348?text=${message}`, '_blank');
    }, 1000);
  };

  return (
    <div className="w-full bg-[#FFF9F0] text-[#3D0A14]">
      {/* ── 1. CINEMATIC HERO ── */}
      <PageHero
        image="/media/heroes/contact-hero.webp"
        title="LET'S PLAN"
        script="Your Celebration"
        subtitle="SHARE YOUR DATE, VENUE AND VISION. WE'LL HANDLE THE REST"
        ctaText="WHATSAPP US"
        ctaLink="https://wa.me/917899243348?text=Hello%20Sudee,%20I%20would%20like%20to%20plan%20a%20celebration%20with%20Posh%20Events."
        alt="Romantic Luxury Outdoor Celebration with Fairy Lights and Florals"
        navigate={navigate}
      />

      {/* ── 2. STUDIO CONTACT DETAILS & INQUIRY FORM ── */}
      <section className="py-20 lg:py-28 bg-white text-[#3D0A14] border-t border-[#EEDDC8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Studio Information */}
            <div className="lg:col-span-5 flex flex-col space-y-8 text-left">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-dark">
                  BANGALORE STUDIO
                </span>
                <h2 className="font-display text-3xl sm:text-4xl text-[#3D0A14] font-normal mt-2">
                  Posh Events by Sudee
                </h2>
                <p className="text-sm text-[#5A2A27] font-light leading-relaxed mt-2">
                  We welcome couples and families by prior appointment to explore custom 3D spatial mandaps, live flower swatches, and fabric moodboards.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#EEDDC8]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center text-gold-dark shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#3D0A14]">
                      Studio Address
                    </span>
                    <p className="text-sm text-[#5A2A27] font-light mt-0.5 leading-relaxed">
                      Behind Shantinagar Arch, Secrets of Ocean Resto, Acharya College Main Road, Shanti Nagar, Chikkabanavara, Bengaluru
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center text-gold-dark shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#3D0A14]">
                      Phone / WhatsApp
                    </span>
                    <p className="text-sm text-[#5A2A27] font-light mt-0.5">
                      <a href="tel:+917899243348" className="hover:text-gold transition-colors font-medium text-[#3D0A14]">
                        +91 78992 43348
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center text-gold-dark shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#3D0A14]">
                      Email
                    </span>
                    <p className="text-sm text-[#5A2A27] font-light mt-0.5">
                      <a href="mailto:poshevntz2001@gmail.com" className="hover:text-gold transition-colors">
                        poshevntz2001@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center text-gold-dark shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#3D0A14]">
                      Studio Timings
                    </span>
                    <p className="text-sm text-[#5A2A27] font-light mt-0.5">
                      Monday to Sunday: 9:00 AM – 9:00 PM (IST)
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Quick Button */}
              <div className="pt-2">
                <a
                  href="https://wa.me/917899243348?text=Hello%20Sudee,%20I%20would%20like%20to%20schedule%20a%20consultation%20with%20Posh%20Events."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-pill !text-xs flex items-center gap-2"
                >
                  <FaWhatsapp className="w-4 h-4 text-white" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>

            {/* Right: Consultation Form in clean warm ivory card */}
            <div className="lg:col-span-7 bg-[#FFF9F0] text-[#3D0A14] p-8 sm:p-12 rounded-3xl border border-[#EEDDC8] shadow-[0_12px_45px_rgba(201,162,75,0.12)] text-left">
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-gold-dark">
                PRIORITY RESERVATION
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-[#3D0A14] font-normal mt-1 mb-6">
                Request a Bespoke Consultation
              </h3>

              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display text-2xl text-[#3D0A14]">
                    Inquiry Transmitted
                  </h4>
                  <p className="text-xs text-[#5A2A27] max-w-sm font-light">
                    Connecting to WhatsApp for instant priority scheduling with Sudee...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-[#5A2A27] font-semibold block mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Radhika Menon"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#EEDDC8] text-[#3D0A14] text-sm focus:border-gold focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-[#5A2A27] font-semibold block mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98450 XXXXX"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#EEDDC8] text-[#3D0A14] text-sm focus:border-gold focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-[#5A2A27] font-semibold block mb-1.5">
                        Event Type
                      </label>
                      <select
                        value={form.eventType}
                        onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#EEDDC8] text-[#3D0A14] text-sm focus:border-gold focus:outline-none"
                      >
                        <option value="Royal South Indian Wedding">Royal South Indian Wedding</option>
                        <option value="Destination Wedding">Destination Wedding</option>
                        <option value="Sangeet & Musical Production">Sangeet & Musical Production</option>
                        <option value="Haldi & Mehendi Carnival">Haldi & Mehendi Carnival</option>
                        <option value="Traditional Seemantha / Baby Shower">Traditional Seemantha / Baby Shower</option>
                        <option value="Corporate Summit / Gala">Corporate Summit / Gala</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-[#5A2A27] font-semibold block mb-1.5">
                        Approximate Date
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. December 2026"
                        value={form.eventDate}
                        onChange={(e) => setForm({ ...form, eventDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#EEDDC8] text-[#3D0A14] text-sm focus:border-gold focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-[#5A2A27] font-semibold block mb-1.5">
                      Your Celebration Vision / Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share your preferred venue, estimated guest count, or decor themes..."
                      value={form.vision}
                      onChange={(e) => setForm({ ...form, vision: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#EEDDC8] text-[#3D0A14] text-sm focus:border-gold focus:outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="btn-gold-pill w-full !py-3.5 text-xs flex items-center justify-center gap-2"
                    >
                      <span>Submit & Connect to WhatsApp</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Interactive Map Section */}
          <div className="mt-20">
            <MapComponent />
          </div>
        </div>
      </section>
    </div>
  );
}
