import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, MapPin } from 'lucide-react';

export default function WeddingVideoCard({
  item,
  activePlayingId,
  setActivePlayingId,
}) {
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const isCurrentPlaying = activePlayingId === item.id;

  // Sync playback state with the global activePlayingId
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isCurrentPlaying) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, [isCurrentPlaying]);

  // Autoplay when card enters viewport or hover on desktop
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !activePlayingId) {
            // Soft play first in-view item muted
            setActivePlayingId(item.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    observer.observe(card);
    return () => observer.unobserve(card);
  }, [activePlayingId, item.id, setActivePlayingId]);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (isCurrentPlaying && isPlaying) {
      setActivePlayingId(null);
    } else {
      setActivePlayingId(item.id);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleFullscreen = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (!activePlayingId) {
      setActivePlayingId(item.id);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={togglePlay}
      className="group relative w-full aspect-[9/16] rounded-[24px] overflow-hidden bg-[#1A1A1A] border border-white/15 shadow-2xl transition-all duration-500 hover:shadow-[0_24px_50px_rgba(0,0,0,0.35)] hover:-translate-y-1.5 cursor-pointer select-none"
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={item.videoUrl}
        poster={item.poster}
        muted={isMuted}
        loop
        playsInline
        webkit-playsinline="true"
        preload="metadata"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Top Gradient for text contrast */}
      <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-black/85 via-black/45 to-transparent pointer-events-none z-10" />

      {/* Bottom Gradient for text contrast */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none z-10" />

      {/* TOP OVERLAY: Date + Planner Team Badge + Logo Avatar */}
      <div className="absolute top-4 inset-x-4 flex items-center justify-between z-20">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-full bg-white/95 p-1 shadow-md border border-[#B08D57]/40 flex items-center justify-center shrink-0">
            <img
              src="/logo.png"
              alt="Posh Events"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <span className="block text-white font-sans text-xs font-bold tracking-wide">
              {item.date}
            </span>
            <span className="block text-[#D8BA84] font-sans text-[10px] uppercase tracking-[0.16em] font-semibold">
              POSH EVENTS TEAM
            </span>
          </div>
        </div>

        {/* Quick controls in top right */}
        <div className="flex items-center space-x-1.5">
          <button
            type="button"
            onClick={toggleMute}
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white/90 hover:text-white hover:bg-black/70 flex items-center justify-center transition-all"
          >
            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>
          <button
            type="button"
            onClick={handleFullscreen}
            aria-label="Fullscreen"
            className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white/90 hover:text-white hover:bg-black/70 flex items-center justify-center transition-all"
          >
            <Maximize2 size={13} />
          </button>
        </div>
      </div>

      {/* CENTER PLAY/PAUSE INDICATOR */}
      <div
        className={`absolute inset-0 m-auto w-14 h-14 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 pointer-events-none z-20 ${
          isPlaying ? 'opacity-0 scale-90 group-hover:opacity-80' : 'opacity-90 scale-100 shadow-xl'
        }`}
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} className="translate-x-0.5" />}
      </div>

      {/* BOTTOM OVERLAY: Tags + Couple Name + Location */}
      <div className="absolute bottom-5 inset-x-5 z-20 flex flex-col space-y-2">
        {/* Pill Tags */}
        <div className="flex flex-wrap gap-1.5">
          {item.tags?.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-sans tracking-wider uppercase font-medium border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Couple / Event Name */}
        <h3 className="text-white font-serif text-2xl font-bold tracking-tight drop-shadow-md">
          {item.title}
        </h3>

        {/* Location Pin */}
        <div className="flex items-center text-[#D8BA84] font-sans text-xs space-x-1.5 drop-shadow">
          <MapPin size={13} className="shrink-0 text-[#C4A574]" />
          <span className="truncate">{item.location}</span>
        </div>
      </div>
    </div>
  );
}
