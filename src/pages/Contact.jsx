import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Phone, Mail, MapPin, Clock, Instagram, CheckCircle2, Send } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Wedding Decor & Planning',
    eventDate: '',
    city: 'Bengaluru',
    budget: '₹5 Lakhs - ₹15 Lakhs',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please provide your name and phone number so we can contact you.');
      return;
    }

    // Construct formatted WhatsApp message
    const waText = `*New Wedding / Event Enquiry via Website*
----------------------------------------
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || 'Not provided'}
*Event Type:* ${formData.eventType}
*Event Date:* ${formData.eventDate || 'To be decided'}
*City / Venue:* ${formData.city || 'Bengaluru'}
*Estimated Budget:* ${formData.budget}
*Vision / Message:*
${formData.message || 'Looking forward to consultation.'}`;

    const waUrl = `https://wa.me/917899243348?text=${encodeURIComponent(waText)}`;
    
    // Open WhatsApp
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="w-full pt-20">
      
      {/* ── 1. HERO BANNER ── */}
      <section className="relative w-full h-[55vh] min-h-[380px] flex items-center justify-center overflow-hidden bg-black">
        <img
          src="/hali2.PNG"
          alt="Contact Posh Events Bangalore"
          className="w-full h-full object-cover opacity-65 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-[#F5F0E8]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4">
            <Sparkles size={13} className="text-[#D8BA84]" />
            <span className="font-sans text-[11px] tracking-[0.25em] uppercase font-bold text-white">
              CONTACT US
            </span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-[0.05em] text-white leading-tight mb-4 drop-shadow-md">
            LET'S CREATE MAGIC <br />
            <span className="text-[#D8BA84]">TOGETHER</span>
          </h1>

          <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.2em] font-medium text-white/90 max-w-xl mx-auto">
            SCHEDULE A COMPLIMENTARY CONSULTATION FOR YOUR CELEBRATION
          </p>
        </div>
      </section>


      {/* ── 2. CONSULTATION FORM & CONTACT SUITE ── */}
      <section className="py-20 lg:py-28 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT: Contact Information & Concierge Details (5 cols) */}
            <div className="lg:col-span-5 space-y-8 bg-white p-8 sm:p-10 rounded-[24px] border border-[#B08D57]/20 shadow-luxury">
              <div className="border-b border-[#B08D57]/20 pb-6">
                <span className="eyebrow-label block mb-2">DIRECT CONCIERGE</span>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#2B2B2B]">
                  Posh Events Studio
                </h2>
                <p className="font-sans text-xs text-[#4A4A4A] mt-2 leading-relaxed">
                  Connect directly with our founder and creative team in Bengaluru.
                </p>
              </div>

              {/* Contact Items */}
              <div className="space-y-6 font-sans text-sm text-[#2B2B2B]">
                
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-11 h-11 rounded-full bg-[#B08D57]/15 text-[#8A6B2E] flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-[#8A6B2E]">Phone / Direct Line</span>
                    <a
                      href="tel:+917899243348"
                      className="text-base font-bold text-[#2B2B2B] hover:text-[#B08D57] transition-colors"
                    >
                      +91 78992 43348
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-11 h-11 rounded-full bg-[#B08D57]/15 text-[#8A6B2E] flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-[#8A6B2E]">Email Enquiries</span>
                    <a
                      href="mailto:poshevntz2001@gmail.com"
                      className="text-base font-semibold text-[#2B2B2B] hover:text-[#B08D57] transition-colors break-all"
                    >
                      poshevntz2001@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="w-11 h-11 rounded-full bg-[#B08D57]/15 text-[#8A6B2E] flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-[#8A6B2E]">Studio Location</span>
                    <p className="text-base font-semibold text-[#2B2B2B]">
                      Bengaluru, Karnataka, India
                    </p>
                    <span className="text-xs text-[#4A4A4A]">Covering all of South India & Destinations</span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-11 h-11 rounded-full bg-[#B08D57]/15 text-[#8A6B2E] flex items-center justify-center shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-[#8A6B2E]">Working Hours</span>
                    <p className="text-sm font-semibold text-[#2B2B2B]">
                      Monday – Sunday: 9:00 AM – 9:00 PM
                    </p>
                    <span className="text-xs text-[#4A4A4A]">Available by appointment</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions (WhatsApp & Instagram) */}
              <div className="pt-4 border-t border-[#B08D57]/15 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/917899243348"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-full bg-[#25D366] text-white font-sans text-xs font-bold tracking-wider uppercase shadow-md hover:bg-[#1ebd59] transition-colors"
                >
                  <FaWhatsapp size={16} />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://instagram.com/posh_events_by_sudee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-full bg-[#2B2B2B] text-white font-sans text-xs font-bold tracking-wider uppercase shadow-md hover:bg-black transition-colors"
                >
                  <Instagram size={16} />
                  <span>Instagram</span>
                </a>
              </div>

              {/* Google Map Embed */}
              <div className="pt-4">
                <div className="rounded-2xl overflow-hidden border border-[#B08D57]/20 shadow-sm h-48 w-full">
                  <iframe
                    title="Posh Events Bangalore Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.8865390924!2d77.49085205!3d12.95395995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>


            {/* RIGHT: Polished Consultation Booking Form (7 cols) */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-[24px] border border-[#B08D57]/25 shadow-2xl relative">
              
              <div className="border-b border-[#B08D57]/20 pb-6 mb-8">
                <span className="eyebrow-label block mb-2">BOOK A CONSULTATION</span>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-[#2B2B2B]">
                  Tell Us About Your Vision
                </h2>
                <p className="font-sans text-xs sm:text-sm text-[#4A4A4A] mt-2">
                  Complete this form to connect with our creative lead. We respond within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="bg-[#FAF8F3] border border-[#B08D57]/30 rounded-2xl p-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#B08D57]/20 text-[#8A6B2E] mx-auto flex items-center justify-center">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-[#2B2B2B]">
                    Thank You, {formData.name}!
                  </h3>
                  <p className="font-sans text-sm text-[#4A4A4A] max-w-md mx-auto leading-relaxed">
                    Your enquiry has been formatted and opened in WhatsApp. Our creative team has also received your request and will follow up promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline-gold text-xs"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMsg && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 font-sans text-xs">
                      {errorMsg}
                    </div>
                  )}

                  {/* 2-col Row: Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-sans text-xs uppercase tracking-wider font-semibold text-[#2B2B2B] mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Ananya & Arjun"
                        required
                        className="w-full bg-[#FAF8F3] border border-[#B08D57]/30 rounded-xl px-4 py-3.5 font-sans text-sm text-[#2B2B2B] focus:outline-none focus:border-[#B08D57] focus:ring-1 focus:ring-[#B08D57]"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-xs uppercase tracking-wider font-semibold text-[#2B2B2B] mb-2">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        required
                        className="w-full bg-[#FAF8F3] border border-[#B08D57]/30 rounded-xl px-4 py-3.5 font-sans text-sm text-[#2B2B2B] focus:outline-none focus:border-[#B08D57] focus:ring-1 focus:ring-[#B08D57]"
                      />
                    </div>
                  </div>

                  {/* 2-col Row: Email & Event Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-sans text-xs uppercase tracking-wider font-semibold text-[#2B2B2B] mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@domain.com"
                        className="w-full bg-[#FAF8F3] border border-[#B08D57]/30 rounded-xl px-4 py-3.5 font-sans text-sm text-[#2B2B2B] focus:outline-none focus:border-[#B08D57] focus:ring-1 focus:ring-[#B08D57]"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-xs uppercase tracking-wider font-semibold text-[#2B2B2B] mb-2">
                        Event Type
                      </label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full bg-[#FAF8F3] border border-[#B08D57]/30 rounded-xl px-4 py-3.5 font-sans text-sm text-[#2B2B2B] focus:outline-none focus:border-[#B08D57] focus:ring-1 focus:ring-[#B08D57] cursor-pointer"
                      >
                        <option value="Wedding Decor & Planning">Wedding Decor & Planning</option>
                        <option value="Sangeet & Musical Evening">Sangeet & Musical Evening</option>
                        <option value="Haldi & Mehendi Carnival">Haldi & Mehendi Carnival</option>
                        <option value="Traditional Seemantha / Baby Shower">Traditional Seemantha / Baby Shower</option>
                        <option value="Krishna Themed Naming Ceremony">Krishna Themed Naming Ceremony</option>
                        <option value="Corporate Gala & Summit">Corporate Gala & Summit</option>
                        <option value="Destination Wedding">Destination Wedding</option>
                      </select>
                    </div>
                  </div>

                  {/* 3-col Row: Date, City, Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <label className="block font-sans text-xs uppercase tracking-wider font-semibold text-[#2B2B2B] mb-2">
                        Event Date
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full bg-[#FAF8F3] border border-[#B08D57]/30 rounded-xl px-4 py-3.5 font-sans text-sm text-[#2B2B2B] focus:outline-none focus:border-[#B08D57]"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-xs uppercase tracking-wider font-semibold text-[#2B2B2B] mb-2">
                        City / Venue
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="e.g. Bangalore Palace"
                        className="w-full bg-[#FAF8F3] border border-[#B08D57]/30 rounded-xl px-4 py-3.5 font-sans text-sm text-[#2B2B2B] focus:outline-none focus:border-[#B08D57]"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-xs uppercase tracking-wider font-semibold text-[#2B2B2B] mb-2">
                        Estimated Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-[#FAF8F3] border border-[#B08D57]/30 rounded-xl px-4 py-3.5 font-sans text-sm text-[#2B2B2B] focus:outline-none focus:border-[#B08D57] cursor-pointer"
                      >
                        <option value="₹3 Lakhs - ₹7 Lakhs">₹3 Lakhs – ₹7 Lakhs</option>
                        <option value="₹7 Lakhs - ₹15 Lakhs">₹7 Lakhs – ₹15 Lakhs</option>
                        <option value="₹15 Lakhs - ₹30 Lakhs">₹15 Lakhs – ₹30 Lakhs</option>
                        <option value="₹30 Lakhs+ (Luxury Bespoke)">₹30 Lakhs+ (Luxury Bespoke)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider font-semibold text-[#2B2B2B] mb-2">
                      Tell Us About Your Vision & Special Requests
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Share your dream aesthetic, guest count, ritual traditions, or specific requirements..."
                      className="w-full bg-[#FAF8F3] border border-[#B08D57]/30 rounded-xl px-4 py-3.5 font-sans text-sm text-[#2B2B2B] focus:outline-none focus:border-[#B08D57] focus:ring-1 focus:ring-[#B08D57]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full btn-gold-pill py-4 text-sm uppercase tracking-widest font-bold shadow-xl flex items-center justify-center space-x-2"
                  >
                    <Send size={16} />
                    <span>Send Consultation Request via WhatsApp & Concierge</span>
                  </button>

                  <p className="font-sans text-[11px] text-center text-[#4A4A4A] italic">
                    ✦ By submitting, you connect directly with our founder via WhatsApp and email for immediate response.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
