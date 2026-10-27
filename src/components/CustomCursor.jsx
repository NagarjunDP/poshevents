import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState('default'); // 'default', 'link', 'video'
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Check if device is touch-enabled
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);

    const onMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Detect hover target
      const target = e.target;
      if (target.closest('button, a, input, select, textarea, [role="button"]')) {
        setCursorType('link');
      } else if (target.closest('video, [data-cursor="play"]')) {
        setCursorType('video');
      } else {
        setCursorType('default');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  const isVideo = cursorType === 'video';
  const isLink = cursorType === 'link';

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full transition-colors duration-200"
      animate={{
        x: pos.x,
        y: pos.y,
        width: isVideo || isLink ? 54 : 26,
        height: isVideo || isLink ? 54 : 26,
        backgroundColor: isVideo
          ? 'rgba(201, 162, 75, 0.9)'
          : isLink
          ? 'rgba(201, 162, 75, 0.2)'
          : 'transparent',
        borderColor: '#C9A24B',
        borderWidth: isLink ? '1.5px' : '1px',
      }}
      transition={{
        type: 'spring',
        damping: 28,
        stiffness: 350,
        mass: 0.5,
      }}
    >
      {isVideo && (
        <span className="text-[10px] font-bold tracking-wider uppercase text-ink">
          Play
        </span>
      )}
      {isLink && !isVideo && (
        <span className="text-[8px] font-bold tracking-wider uppercase text-gold-light">
          View
        </span>
      )}
      {!isVideo && !isLink && (
        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
      )}
    </motion.div>
  );
}
