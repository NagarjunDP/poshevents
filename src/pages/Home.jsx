import React from 'react';
import Hero from '../components/Hero';
import CelebVideoSlider from '../components/CelebVideoSlider';
import PhilosophySection from '../components/PhilosophySection';
import BespokeServices from '../components/BespokeServices';
import FilmReelSection from '../components/FilmReelSection';
import JourneyTimeline from '../components/JourneyTimeline';
import PackagesTeaser from '../components/PackagesTeaser';
import HomeFaq from '../components/HomeFaq';
import FinaleSection from '../components/FinaleSection';

export default function Home({ navigate }) {
  return (
    <div className="w-full bg-[#FFF9F0] text-[#3D0A14]">
      {/* ── 1. HERO ── */}
      <Hero navigate={navigate} />

      {/* ── 2. HERITAGE & ETHOS ── */}
      <PhilosophySection navigate={navigate} />

      {/* ── 3. MASTERPIECES FOR EVERY MILESTONE ── */}
      <BespokeServices navigate={navigate} />

      {/* ── 4. CLIENT REVIEWS ── */}
      <CelebVideoSlider />

      {/* ── 5. FILM REEL (35mm ENDLESS TAPES) ── */}
      <FilmReelSection navigate={navigate} />

      {/* ── 6. HOW A POSH CELEBRATION UNFOLDS (OUR PROCESS) ── */}
      <JourneyTimeline />

      {/* ── 7. PACKAGES TEASER ── */}
      <PackagesTeaser navigate={navigate} />

      {/* ── 8. FAQ ── */}
      <HomeFaq navigate={navigate} />

      {/* ── 9. CONTACT CTA ── */}
      <FinaleSection />
    </div>
  );
}
