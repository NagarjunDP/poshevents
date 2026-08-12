import React, { useState } from 'react';
import { Phone, MapPin, Instagram, Mail } from 'lucide-react';
import { FadeUp } from './FadeUp';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactSection() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    eventType: 'Wedding Decor',
    date: '',
    name: '',
    phone: '',
    vision: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct pre-filled WhatsApp message
    const message = `Hello Sudeep, I would like to make an enquiry:

• Name: ${formData.name || 'Not provided'}
• Contact: ${formData.phone || 'Not provided'}
• Service Required: ${formData.eventType}
• Estimated Date: ${formData.date || 'Not provided'}
• Vision/Message: ${formData.vision || 'Not provided'}`;

    const whatsappUrl = `https://wa.me/917899243348?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-12 md:py-28 bg-[#FAF8F3] relative overflow-hidden">
      
      {/* Decorative accent element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A25E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <FadeUp>
          <div className="text-center mb-10 md:mb-16">
            <span className="font-jakarta font-bold text-[#8A6B2E] tracking-[0.2em] text-[11px] md:text-xs uppercase mb-2 block">
              GET IN TOUCH WITH US
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-jakarta text-[#0E1B38] mb-3 tracking-tight">
              Contact Us
            </h2>
            <p className="font-jakarta font-bold text-[#8A6B2E] tracking-[0.1em] text-xs md:text-sm uppercase max-w-2xl mx-auto leading-relaxed px-2">
              LET'S CREATE SOMETHING EXTRAORDINARY TOGETHER. WE'D LOVE TO HEAR FROM YOU!
            </p>
            <div className="flex items-center justify-center mt-5 w-20 md:w-24 h-[2px] mx-auto bg-gradient-to-r from-transparent via-[#C9A25E] to-transparent" />
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Left Column: Details with Mobile Optimized Layout & Logo Navy Color */}
          <FadeUp delay={0.2} className="flex flex-col justify-center space-y-6 md:space-y-8 bg-white p-5 sm:p-8 md:p-10 rounded-2xl border border-[#C9A25E]/20 shadow-xl">
            
            {/* Direct Line */}
            <div className="flex items-center space-x-3.5 sm:space-x-5 md:space-x-6 group">
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#8A6B2E] to-[#C9A25E] text-[#FAF8F3] shadow-md flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="font-jakarta font-bold text-[#8A6B2E] text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-0.5 sm:mb-1">Direct Line</h4>
                <a href="tel:+917899243348" className="font-jakarta font-extrabold text-lg sm:text-2xl md:text-3xl text-[#0E1B38] tracking-tight group-hover:text-[#8A6B2E] transition-colors whitespace-nowrap block">
                  +91 78992 43348
                </a>
              </div>
            </div>
            
            {/* Portfolio */}
            <div className="flex items-center space-x-3.5 sm:space-x-5 md:space-x-6 group">
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#8A6B2E] to-[#C9A25E] text-[#FAF8F3] shadow-md flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="font-jakarta font-bold text-[#8A6B2E] text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-0.5 sm:mb-1">Portfolio</h4>
                <a href="https://instagram.com/posh_events_by_sudee" target="_blank" rel="noopener noreferrer" className="font-jakarta font-extrabold text-sm sm:text-xl md:text-2xl text-[#0E1B38] tracking-tight group-hover:text-[#8A6B2E] transition-colors truncate block">
                  @posh_events_by_sudee
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3.5 sm:space-x-5 md:space-x-6 group">
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#8A6B2E] to-[#C9A25E] text-[#FAF8F3] shadow-md flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="font-jakarta font-bold text-[#8A6B2E] text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-0.5 sm:mb-1">Email</h4>
                <a href="mailto:sudee43348@gmail.com" className="font-jakarta font-extrabold text-xs sm:text-lg md:text-2xl text-[#0E1B38] tracking-tight group-hover:text-[#8A6B2E] transition-colors truncate block">
                  poshevntz2001@gmail.com
                </a>
              </div>
            </div>

            {/* Headquarters */}
            <div className="flex items-center space-x-3.5 sm:space-x-5 md:space-x-6 group">
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#8A6B2E] to-[#C9A25E] text-[#FAF8F3] shadow-md flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="font-jakarta font-bold text-[#8A6B2E] text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-0.5 sm:mb-1">Headquarters</h4>
                <p className="font-jakarta font-extrabold text-base sm:text-2xl md:text-3xl text-[#0E1B38] tracking-tight">
                  Bengaluru, Karnataka
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Right Column: High-Contrast Form */}
          <FadeUp delay={0.4}>
            <div className="bg-white p-5 sm:p-8 md:p-10 rounded-2xl border-2 border-[#C9A25E]/30 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#FAF8F3]">
                <div className="h-full bg-gradient-to-r from-[#8A6B2E] to-[#C9A25E] transition-all duration-500" style={{ width: step === 1 ? '50%' : '100%' }} />
              </div>
              
              <h3 className="font-jakarta font-bold text-xl sm:text-2xl md:text-3xl text-[#0E1B38] mb-6 md:mb-8 border-b-2 border-[#C9A25E]/20 pb-3.5 md:pb-4 tracking-tight">
                {step === 1 ? 'Step 1: Event Details' : 'Step 2: Personal Details'}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                <AnimatePresence mode="wait">
                  {step === 1 ? (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-5 md:space-y-6"
                    >
                      <div>
                        <label className="block font-jakarta font-bold text-xs tracking-widest text-[#0E1B38] uppercase mb-2">Service Required</label>
                        <select 
                          name="eventType" 
                          value={formData.eventType}
                          onChange={handleChange}
                          className="w-full bg-[#FAF8F3] border-2 border-[#C9A25E]/30 px-4 py-3 sm:py-3.5 text-[#0E1B38] font-jakarta font-bold rounded-xl focus:outline-none focus:border-[#8A6B2E] focus:ring-2 focus:ring-[#8A6B2E]/20 transition-all cursor-pointer text-sm sm:text-base"
                        >
                          <option value="Wedding Decor">Wedding Decor</option>
                          <option value="Sangeet Production">Sangeet Production</option>
                          <option value="Haldi & Mehendi">Haldi & Mehendi</option>
                          <option value="Traditional Seemantha">Traditional Seemantha</option>
                          <option value="Naming Ceremony">Naming Ceremony</option>
                          <option value="Birthday Events">Birthday Events</option>
                          <option value="Corporate Events">Corporate Events</option>
                          <option value="Stage Production">Stage Production</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-jakarta font-bold text-xs tracking-widest text-[#0E1B38] uppercase mb-2">Estimated Date</label>
                        <input 
                          type="date" 
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full bg-[#FAF8F3] border-2 border-[#C9A25E]/30 px-4 py-3 sm:py-3.5 text-[#0E1B38] font-jakarta font-bold rounded-xl focus:outline-none focus:border-[#8A6B2E] focus:ring-2 focus:ring-[#8A6B2E]/20 transition-all text-sm sm:text-base" 
                        />
                      </div>
                      <button 
                        onClick={() => setStep(2)}
                        type="button" 
                        className="w-full bg-[#0E1B38] text-[#C9A25E] py-3.5 sm:py-4 font-jakarta font-bold tracking-widest uppercase text-xs sm:text-sm rounded-xl hover:bg-gradient-to-r hover:from-[#8A6B2E] hover:to-[#C9A25E] hover:text-[#FAF8F3] transition-all shadow-md active:scale-[0.99]"
                      >
                        Next Step →
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-5 md:space-y-6"
                    >
                      <div>
                        <label className="block font-jakarta font-bold text-xs tracking-widest text-[#0E1B38] uppercase mb-2">Your Full Name</label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Anjali Sharma" 
                          className="w-full bg-[#FAF8F3] border-2 border-[#C9A25E]/30 px-4 py-3 sm:py-3.5 text-[#0E1B38] font-jakarta font-bold rounded-xl focus:outline-none focus:border-[#8A6B2E] focus:ring-2 focus:ring-[#8A6B2E]/20 transition-all placeholder:text-[#0E1B38]/40 placeholder:font-normal text-sm sm:text-base" 
                          required 
                        />
                      </div>
                      <div>
                        <label className="block font-jakarta font-bold text-xs tracking-widest text-[#0E1B38] uppercase mb-2">Phone Number</label>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. +91 98765 43210" 
                          className="w-full bg-[#FAF8F3] border-2 border-[#C9A25E]/30 px-4 py-3 sm:py-3.5 text-[#0E1B38] font-jakarta font-bold rounded-xl focus:outline-none focus:border-[#8A6B2E] focus:ring-2 focus:ring-[#8A6B2E]/20 transition-all placeholder:text-[#0E1B38]/40 placeholder:font-normal text-sm sm:text-base" 
                          required 
                        />
                      </div>
                      <div>
                        <label className="block font-jakarta font-bold text-xs tracking-widest text-[#0E1B38] uppercase mb-2">Vision / Message</label>
                        <textarea 
                          name="vision"
                          value={formData.vision}
                          onChange={handleChange}
                          rows="3" 
                          placeholder="Share your dream aesthetic..." 
                          className="w-full bg-[#FAF8F3] border-2 border-[#C9A25E]/30 px-4 py-3 sm:py-3.5 text-[#0E1B38] font-jakarta font-bold rounded-xl focus:outline-none focus:border-[#8A6B2E] focus:ring-2 focus:ring-[#8A6B2E]/20 transition-all placeholder:text-[#0E1B38]/40 placeholder:font-normal text-sm sm:text-base"
                        ></textarea>
                      </div>
                      <div className="flex space-x-3 sm:space-x-4">
                        <button 
                          onClick={() => setStep(1)}
                          type="button" 
                          className="w-1/3 bg-[#FAF8F3] text-[#0E1B38] border-2 border-[#C9A25E]/40 py-3.5 sm:py-4 font-jakarta font-bold tracking-widest uppercase text-xs sm:text-sm rounded-xl hover:bg-[#0E1B38] hover:text-[#C9A25E] transition-all"
                        >
                          ← Back
                        </button>
                        <button 
                          type="submit" 
                          className="w-2/3 bg-gradient-to-r from-[#8A6B2E] to-[#C9A25E] text-[#FAF8F3] py-3.5 sm:py-4 font-jakarta font-extrabold tracking-widest uppercase text-xs sm:text-sm rounded-xl hover:from-[#0E1B38] hover:to-[#1B2E57] hover:text-[#C9A25E] transition-all shadow-lg active:scale-[0.99]"
                        >
                          Send Enquiry →
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
