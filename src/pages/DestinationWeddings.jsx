import React, { useState, useEffect, useRef } from 'react';
import { destinations } from '../data/destinations';

/* ───────────── Fade-up on scroll observer ───────────── */
function useFadeUp() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return { ref, style: { opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.7s ease, transform 0.7s ease' } };
}

function FadeSection({ children, className = '' }) {
  const { ref, style } = useFadeUp();
  return <div ref={ref} style={style} className={className}>{children}</div>;
}

/* ───────────── FAQ Accordion ───────────── */
const faqItems = [
  { q: 'Do you need a planner for a destination wedding?', a: 'In most cases, yes. A destination wedding involves coordinating remote vendors, travel logistics, guest accommodations, permits, and weather contingencies across an unfamiliar location. A dedicated planner acts as your local project manager, saving you months of stress and costly last-minute mistakes.' },
  { q: 'Which destinations do you plan weddings at?', a: 'We currently curate destination celebrations in Goa, Coorg, Rajasthan, and Kerala Backwaters. Each destination is handpicked for its unique charm, luxury venue options, and accessibility from Bangalore.' },
  { q: 'How far in advance should we start planning?', a: 'We recommend starting 9 to 12 months ahead for a destination wedding. This gives ample time for venue scouting, guest travel coordination, vendor negotiations, and design finalization without last-minute rushes.' },
  { q: 'Will you coordinate with local vendors at the destination?', a: 'Absolutely. We maintain trusted vendor networks at every destination we serve — from florists and priests to caterers and lighting technicians. We also transport specialized artisans from Bangalore when the celebration demands it.' },
];

function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {faqItems.map((item, i) => {
        const isOpen = openIdx === i;
        return (
          <div key={i} className="border border-[#EEDDC8] rounded-2xl overflow-hidden bg-white">
            <button
              onClick={() => setOpenIdx(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg sm:text-xl text-[#3D0A14] font-semibold">{item.q}</span>
              <span className="shrink-0 text-2xl text-[#C9A24B] transition-transform" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
            </button>
            <div
              className="overflow-hidden transition-all duration-500 ease-in-out"
              style={{ maxHeight: isOpen ? '300px' : '0', opacity: isOpen ? 1 : 0 }}
            >
              <p className="px-6 pb-5 text-sm leading-relaxed text-[#4A3A32]" style={{ fontFamily: 'Inter, sans-serif' }}>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ───────────── What-We-Handle Cards ───────────── */
const handleCards = [
  { icon: '🔍', title: 'Remote Venue Scouting', desc: 'We shortlist and personally vet luxury venues at your dream location before you visit.' },
  { icon: '✈️', title: 'Travel & Logistics', desc: 'Group flight bookings, airport transfers, guest luggage coordination, and arrival hospitality.' },
  { icon: '🤝', title: 'Local Vendor Network', desc: 'Trusted florists, priests, caterers, and technicians at every destination we serve.' },
  { icon: '📋', title: 'Multi-Day Coordination', desc: 'Seamless itinerary design across mehendi, sangeet, ceremony, and reception events.' },
  { icon: '🛡️', title: 'On-Ground Crisis Handling', desc: 'Weather contingencies, permit issues, and real-time problem-solving by our senior team.' },
  { icon: '🎊', title: 'Guest Experience', desc: 'Welcome hampers, multilingual concierges, childcare, and personalized itinerary booklets.' },
];

/* ───────────── Main Page ───────────── */
export default function DestinationWeddings({ navigate }) {
  const heroImage =
    '/SaveClip.App_863173775_18030210647856548_5186953821227231369_n.jpg';

  useEffect(() => {
    document.title = 'Destination Wedding Planners in Bangalore | Posh Events by Sudee';
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = 'Planning a destination wedding? Posh Events by Sudee offers end-to-end destination wedding planning across Goa, Coorg, Rajasthan & Kerala — from venue scouting to on-ground execution.';

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    });
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  return (
    <>

      <div className="w-full">
        {/* ═══════════ 1. HERO (100svh desktop, 85svh mobile) ═══════════ */}
        <section
          className="relative w-full flex items-end overflow-hidden"
          style={{ height: '100svh', minHeight: '600px' }}
        >
          <img
            src={heroImage}
            alt="Pink rose petals arranged around a destination wedding ceremony pool"
            className="absolute inset-0 w-full h-full object-cover object-center"
            fetchPriority="high"
          />
          {/* Light bottom-left gradient scrim only */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to top right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 40%, transparent 70%)' }}
          />

          <div className="relative z-10 px-6 sm:px-10 lg:px-12 pb-16 sm:pb-20 max-w-3xl">
            <h1
              className="uppercase text-white font-semibold"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(30px, 4vw, 56px)',
                letterSpacing: '0.03em',
                lineHeight: 1.1,
                fontWeight: 600,
              }}
            >
              Destination Wedding
            </h1>
            <p
              className="text-white mt-1"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(34px, 4.6vw, 64px)',
                fontStyle: 'italic',
                fontWeight: 400,
                lineHeight: 1.15,
              }}
            >
              Planning Guide
            </p>
            <p
              className="uppercase text-white mt-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '12px',
                letterSpacing: '0.28em',
                lineHeight: 1.5,
              }}
            >
              Everything you need to know about hiring a planner for your dream location
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="mt-8 uppercase text-white transition-all duration-300 hover:text-[#3D0A14]"
              style={{
                height: '48px',
                padding: '0 32px',
                border: '1px solid white',
                borderRadius: '4px',
                background: 'transparent',
                fontFamily: "'Inter', sans-serif",
                fontSize: '12px',
                letterSpacing: '0.25em',
                fontWeight: 600,
                maxWidth: '300px',
                width: '100%',
              }}
              onMouseEnter={(e) => { e.target.style.background = '#C9A24B'; e.target.style.borderColor = '#C9A24B'; e.target.style.color = '#3D0A14'; }}
              onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.borderColor = 'white'; e.target.style.color = 'white'; }}
            >
              Plan Your Destination Wedding
            </button>
          </div>

          {/* Mobile adjustment */}
          <style>{`
            @media (max-width: 767px) {
              section:first-of-type { height: 85svh !important; min-height: 500px !important; }
            }
          `}</style>
        </section>

        {/* ═══════════ 2. INTRO ═══════════ */}
        <section style={{ background: '#FBF6EC' }}>
          <FadeSection className="max-w-[820px] mx-auto px-6 sm:px-10 py-24 text-center">
            <h2
              className="font-semibold"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(26px, 3.5vw, 42px)',
                color: '#4A3A32',
                lineHeight: 1.25,
              }}
            >
              Do You Need a Wedding Planner for a Destination Wedding?
            </h2>
            <p className="mt-6 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#4A3A32' }}>
              In most cases, the answer is a resounding yes. A destination wedding means coordinating across locations you may not know intimately — from securing venue permits and navigating local vendor ecosystems to managing guest travel, stay logistics, weather contingencies, and multi-day itineraries, all while being hundreds of kilometres away.
            </p>
            <p className="mt-4 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#4A3A32' }}>
              A planner becomes your local eyes, ears, and project manager. They transform chaotic logistics into a seamless celebration, saving you months of stress and preventing costly last-minute surprises. Think of it as the single investment that protects every other investment you make for your wedding.
            </p>
          </FadeSection>
        </section>

        {/* ═══════════ 3. WHAT WE HANDLE ═══════════ */}
        <section className="bg-white py-24">
          <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
            <FadeSection className="text-center mb-16">
              <span
                className="uppercase inline-block mb-3"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '11px',
                  letterSpacing: '0.25em',
                  color: '#C9A24B',
                  fontWeight: 600,
                }}
              >
                Why Hire a Planner
              </span>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(26px, 3.5vw, 42px)',
                  color: '#4A3A32',
                  fontWeight: 600,
                }}
              >
                What a Planner Actually Handles
              </h2>
            </FadeSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {handleCards.map((card, i) => (
                <FadeSection key={i}>
                  <div
                    className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 h-full"
                    style={{ border: '1px solid rgba(201,162,75,0.35)', borderRadius: '16px' }}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                      style={{ border: '1px solid rgba(201,162,75,0.5)' }}
                    >
                      <span className="text-lg">{card.icon}</span>
                    </div>
                    <h3
                      style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', color: '#4A3A32', fontWeight: 600 }}
                    >
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", color: '#4A3A32' }}>
                      {card.desc}
                    </p>
                  </div>
                </FadeSection>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ 4. WHEN CAN YOU SKIP A PLANNER? ═══════════ */}
        <section style={{ background: '#FBE9E4' }} className="py-24">
          <FadeSection className="max-w-[820px] mx-auto px-6 sm:px-10">
            <h2
              className="text-center font-semibold mb-8"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(26px, 3.5vw, 42px)',
                color: '#4A3A32',
              }}
            >
              When Can You Skip a Planner?
            </h2>
            <ul className="space-y-4">
              {[
                'You know the destination intimately and have trusted local contacts who can manage vendors on your behalf.',
                'Your guest list is under 20 people and the event is a simple, single-day ceremony.',
                'The venue has a comprehensive in-house wedding coordinator who handles all logistics end-to-end.',
                'You genuinely enjoy managing vendors, timelines, and logistics yourself — and have the bandwidth to do it remotely.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3" style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#4A3A32' }}>
                  <span className="shrink-0 mt-0.5 text-[#C9A24B] text-lg">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-center text-sm" style={{ fontFamily: "'Inter', sans-serif", color: '#4A3A32' }}>
              Even in these cases, consider hiring a day-of coordinator to handle on-ground execution so you can be fully present at your own celebration.
            </p>
          </FadeSection>
        </section>

        {/* ═══════════ 5. WHERE WE CELEBRATE ═══════════ */}
        <section style={{ background: '#FBF6EC' }} className="py-24">
          <FadeSection className="max-w-4xl mx-auto px-6 sm:px-10 text-center">
            <h2
              className="font-semibold mb-10"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(26px, 3.5vw, 42px)',
                color: '#4A3A32',
              }}
            >
              Where We Celebrate
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {destinations.map((d, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full"
                  style={{
                    border: '1px solid rgba(201,162,75,0.4)',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '13px',
                    letterSpacing: '0.12em',
                    color: '#4A3A32',
                    fontWeight: 500,
                    background: 'rgba(255,255,255,0.6)',
                  }}
                >
                  <span style={{ fontSize: '14px' }}>{d.icon}</span>
                  {d.name}
                </span>
              ))}
            </div>
          </FadeSection>
        </section>

        {/* ═══════════ 6. FAQ ═══════════ */}
        <section className="bg-white py-24">
          <div className="max-w-4xl mx-auto px-6 sm:px-10">
            <FadeSection className="text-center mb-12">
              <h2
                className="font-semibold"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(26px, 3.5vw, 42px)',
                  color: '#4A3A32',
                }}
              >
                Destination Wedding FAQ
              </h2>
            </FadeSection>
            <FaqAccordion />
          </div>
        </section>

        {/* ═══════════ 7. CTA BAND ═══════════ */}
        <section
          className="py-20 text-center"
          style={{ background: '#5A0F1E' }}
        >
          <FadeSection className="max-w-3xl mx-auto px-6">
            <h2
              className="text-white font-semibold"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(28px, 4vw, 48px)',
                lineHeight: 1.2,
              }}
            >
              Let's Plan Your Dream Destination Wedding
            </h2>
            <p className="text-white/80 mt-4" style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px' }}>
              Share your dream location and guest count. We'll handle the rest.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="mt-8 uppercase transition-all duration-300"
              style={{
                height: '48px',
                padding: '0 36px',
                borderRadius: '4px',
                background: '#C9A24B',
                color: '#3D0A14',
                fontFamily: "'Inter', sans-serif",
                fontSize: '13px',
                letterSpacing: '0.2em',
                fontWeight: 600,
                border: 'none',
              }}
              onMouseEnter={(e) => { e.target.style.background = '#E2BE6C'; e.target.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.target.style.background = '#C9A24B'; e.target.style.transform = 'translateY(0)'; }}
            >
              Start Planning
            </button>
          </FadeSection>
        </section>
      </div>
    </>
  );
}
