import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppDock({ navigate }) {
  const phoneNumber = '+917899243348';
  const whatsappUrl =
    'https://wa.me/917899243348?text=Hello%20Posh%20Events%20by%20Sudee,%20I%20would%20like%20to%20inquire%20about%20planning%20our%20celebration.';

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Sudee"
        className="w-[52px] h-[52px] rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(18,140,126,0.35)] border border-white/40 hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        <FaWhatsapp className="w-6 h-6 group-hover:scale-105 transition-transform" />
        <span className="sr-only">Chat on WhatsApp</span>
      </a>
    </motion.div>
  );
}
