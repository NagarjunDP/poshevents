/**
 * Central Packages Data Store
 * Exactly three curated packages as requested by client addendum.
 * Inclusions are clearly marked EDITABLE PLACEHOLDERS for client replacement.
 */

export const packagesData = [
  {
    id: 'package-wedding',
    title: 'Wedding Packages',
    price: 'Starts from ₹3 Lakhs',
    priceNumeric: '₹3,00,000',
    badge: '',
    isPopular: false,
    tagline: 'Essential Heritage Elegance',
    description:
      'Curated for intimate South Indian ceremonies with refined traditional decor, authentic florals, and seamless ritual coordination.',
    inclusions: [
      '[Editable Placeholder] Traditional floral mandap with seasonal marigolds & jasmine',
      '[Editable Placeholder] Entrance welcome arch with brass urulis & auspicious deepams',
      '[Editable Placeholder] Dedicated floor coordinator for Muhurtham rituals',
      '[Editable Placeholder] High-fidelity sound system for Vedic chants & background nadaswaram',
      '[Editable Placeholder] Ambient warm illumination for photography & stage focus',
      '[Editable Placeholder] Complete event setup, teardown & post-event cleanup',
    ],
    ctaText: 'Enquire Now',
  },
  {
    id: 'package-premium',
    title: 'Premium Wedding Packages',
    price: 'Starts from ₹5 Lakhs',
    priceNumeric: '₹5,00,000',
    badge: 'Most Loved',
    isPopular: true,
    tagline: 'Multi-Event Opulence & Architectural Grandeur',
    description:
      'Our most requested celebration experience. Designed for grandiose multi-day weddings with bespoke structural mandaps and starlit evening production.',
    inclusions: [
      '[Editable Placeholder] Full bespoke 3D mandap architecture with imported Dutch florals & tuberoses',
      '[Editable Placeholder] Grand starlit Sangeet stage with intelligent beam lighting & LED wall',
      '[Editable Placeholder] Joyous Haldi carnival lounge with marigold swings & flower showers',
      '[Editable Placeholder] Senior bridal concierge & dedicated family VIP liaison',
      '[Editable Placeholder] Live acoustic line-array audio & concert-grade stage choreography',
      '[Editable Placeholder] Bespoke guest stationery, gift packaging styling & photo-booth installation',
      '[Editable Placeholder] Full-day production management with zero stress for hosts',
    ],
    ctaText: 'Build My Package',
  },
  {
    id: 'package-customized',
    title: 'Customized Celebration',
    price: 'Tailored to your vision',
    priceNumeric: 'Bespoke Quote',
    badge: '',
    isPopular: false,
    tagline: 'Palatial, Destination & Mega Celebrations',
    description:
      'Completely tailor-made for royal heritage palace weddings, multi-city destination celebrations, or luxury corporate galas with zero constraints.',
    inclusions: [
      '[Editable Placeholder] Turnkey concept design, architectural blueprints & scale 3D renders',
      '[Editable Placeholder] Complete multi-day destination hospitality & guest logistics management',
      '[Editable Placeholder] Custom royal pavilions, structural arches & kinetic lighting design',
      '[Editable Placeholder] Top-tier playback artist booking, choreography & show direction',
      '[Editable Placeholder] VIP security escorts, private holding suites & valet coordination',
      '[Editable Placeholder] Round-the-clock direct access to Creative Director Sudee',
    ],
    ctaText: 'Request Bespoke Quote',
  },
];

export const packagesFootnote =
  'Final pricing depends on guest count, venue, decor and customizations. All inclusions above are editable placeholders to be verified with Posh Events by Sudee.';
