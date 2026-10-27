import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

export default function MediaPlaceholder({ label = '/media/slot.jpg', className = '', height = 'h-64' }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-dashed border-gold/40 bg-gradient-to-br from-ink-card via-ink-light to-maroon-dark/30 p-6 flex flex-col items-center justify-center text-center group ${height} ${className}`}
    >
      <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-3 text-gold group-hover:scale-110 group-hover:bg-gold/20 transition-all duration-300">
        <ImageIcon className="w-5 h-5 stroke-[1.5]" />
      </div>
      <p className="text-xs uppercase tracking-widest text-gold-light/90 font-medium mb-1">
        Media Slot Open
      </p>
      <code className="text-[11px] font-mono text-ivory/60 bg-ink-deep/60 px-2.5 py-1 rounded border border-gold/20 select-all max-w-full truncate">
        {label}
      </code>
      <span className="text-[10px] text-ivory/40 mt-2">
        Add file or upload via Admin Portal
      </span>
    </div>
  );
}
