import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

export default function MapComponent() {
  const address = 'Behind Shantinagar Arch, Secrets of Ocean Resto, Acharya College Main Road, Shanti Nagar, Chikkabanavara, Bengaluru';
  const directionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=Secrets+of+Ocean+Resto+Acharya+College+Main+Road+Chikkabanavara+Bengaluru';

  return (
    <div className="relative w-full rounded-3xl overflow-hidden border border-gold/30 bg-ink-card shadow-glass-dark group">
      {/* Interactive Google Maps Embed with dark luxury filter */}
      <div className="relative w-full h-[380px] sm:h-[440px] overflow-hidden">
        <iframe
          title="Posh Events Studio Chikkabanavara Bengaluru"
          src="https://maps.google.com/maps?q=Secrets%20of%20Ocean%20Resto%20Acharya%20College%20Main%20Road%20Chikkabanavara%20Bengaluru&t=&z=14&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-[105%] group-hover:filter-none transition-all duration-700"
          loading="lazy"
        />

        {/* Floating Studio Pin Card */}
        <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-sm p-5 rounded-2xl bg-[#0E0A12]/95 border border-gold/40 backdrop-blur-xl shadow-2xl text-left z-10">
          <div className="flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-wider mb-1">
            <MapPin className="w-4 h-4 text-gold shrink-0 animate-bounce" />
            <span>Posh Events Studio</span>
          </div>
          <p className="text-xs text-ivory/80 leading-relaxed font-light">
            {address}
          </p>
          <div className="mt-3 pt-3 border-t border-gold/20 flex items-center justify-between">
            <span className="text-[10px] text-gold-light/70 font-mono">By Appointment</span>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-gold hover:text-gold-light font-semibold"
            >
              <span>Get Directions</span>
              <Navigation className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
