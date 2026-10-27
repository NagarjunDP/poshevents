/**
 * Posh Events by Sudee - Central Media Asset Map
 * Every image and video across the website is defined here.
 * RULE: Every image and video is used AT MOST ONCE across the entire site (except the logo).
 * Edit file paths here without touching component markup.
 */

export const media = {
  brand: {
    logo: '/logo.png',
    logoAlt: 'Posh Events by Sudee Monogram Crest',
  },

  hero: {
    video: 'https://ik.imagekit.io/7ksvfitos/tr:rt-270/brdy%20vid%20tarun%20anna.mp4',
    poster: 'https://ik.imagekit.io/7ksvfitos/tr:rt-270,so-2/brdy%20vid%20tarun%20anna.mp4/ik-thumbnail.jpg',
    storyModalVideo: '/prana studios.mp4',
  },

  pages: {
    aboutHero: '/media/about/about-hero.jpg',
    pricingHero: '/media/pricing/pricing-hero.jpg',
    contactHero: '/media/contact/contact-hero.jpg',
    weddingPlannersHero: '/media/weddings/wedding-planners-hero.jpg',
    corporateHero: '/media/corporate/corporate-hero.jpg',
    portfolioHero: '/media/gallery/portfolio-hero.jpg',
    destinationHero: '/media/destinations/destination-hero.jpg',
  },

  story: {
    stageDecor: '/media/story/philosophy-stage.jpg',
    heritageMandap: '/media/story/philosophy-tradition.jpg',
    floralSculpture: '/media/story/philosophy-flowers.jpg',
    founder: '/media/about/founder.jpg',
    btsVideo: '',
    journeyStep1: '/media/story/journey-dream.jpg',
    journeyStep2: '/media/story/step-2.jpg',
    journeyStep3: '/media/story/step-3.jpg',
    journeyStep4: '/media/story/step-4.jpg',
  },

  celebrations: {
    weddingCard: '/media/weddings/wedding-card.jpg',
    weddingVideoPreview: '/wedding_bento.mp4',

    destinationCard: '/media/destinations/destination-hero.jpg',
    destinationVideoPreview: '/wedding_haldi_gallery_2.mp4',

    sangeetCard: '/media/sangeet/sangeet-card.jpg',
    sangeetVideoPreview: '/sangeet_production.mp4',

    haldiCard: '/media/mehendi/haldi-card.jpg',
    haldiVideoPreview: '/haldicarnival_bento.mp4',

    corporateCard: '/media/corporate/corporate-card.jpg',
    corporateVideoPreview: '/corporate_events.mp4',

    milestoneCard: '/media/gallery/babyshower-card.jpg',
    milestoneVideoPreview: '/babyshower_bento.mp4',
  },

  weddingsBreakdown: {
    mandap: '/media/weddings/mandap-breakdown.jpg',
    floral: '/media/weddings/floral-breakdown.jpg',
    lighting: '/media/weddings/lighting-breakdown.jpg',
    concierge: '/media/weddings/concierge-breakdown.jpg',
  },

  corporateBreakdown: {
    gala: '/media/corporate/gala-breakdown.jpg',
    seemantha: '/media/corporate/seemantha-breakdown.jpg',
    security: '/media/corporate/security-breakdown.jpg',
  },

  traditional: {
    muhurtham: '/media/traditional/muhurtham.jpg',
    kashiyatra: '/media/traditional/kashiyatra.jpg',
    saptapadi: '/media/traditional/saptapadi.jpg',
    haldiRitual: '/media/traditional/haldi-ritual.jpg',
  },

  luxuryWorks: [
    {
      id: 'lux-1',
      title: 'The Royal Glasshouse Mandap',
      venue: 'Bengaluru Palace Heritage Grounds',
      desc: 'An architectural glass temple wrapped in 5,000 strings of fragrant Madurai jasmine.',
      image: '/media/luxury/royal-mandap.jpg',
    },
    {
      id: 'lux-2',
      title: 'The Suspended Lotus Canopy',
      venue: 'The Leela Bhartiya City',
      desc: 'Cascading brass lotuses and gold mirror aisles reflecting starlit crystal chandeliers.',
      image: '/media/luxury/lotus-ceiling.jpg',
    },
    {
      id: 'lux-3',
      title: 'The Ancient Banyan Tree Sangeet',
      venue: 'The Taj West End, Bangalore',
      desc: 'Centuries-old botanical trees transformed with kinetic warm fairy lights and acoustic live stages.',
      image: '/media/luxury/banyan-sangeet.jpg',
    },
    {
      id: 'lux-4',
      title: 'The Brass Deepam Courtyard',
      venue: 'Private Heritage Estate, Nandi Hills',
      desc: 'Hand-carved brass urulis and floating oil lamps creating a sanctified Vedic atmosphere.',
      image: '/media/luxury/brass-courtyard.jpg',
    },
  ],

  setupsAndStages: {
    categories: ['Stages', 'Mandaps', 'Entrances', 'Lighting', 'Floral'],
    items: [
      {
        id: 'setup-stage',
        category: 'Stages',
        title: 'Architectural Concert Stage',
        venue: 'Bengaluru Palace Grounds',
        image: '/media/setups/stage-1.jpg',
        specs: '50ft Curved Truss • Kinetic Beams • Acoustic Sound Wall',
      },
      {
        id: 'setup-mandap',
        category: 'Mandaps',
        title: 'Four-Pillar Temple Mandapa',
        venue: 'The Taj West End',
        image: '/media/setups/mandap-1.jpg',
        specs: 'Pure Jasmine Canopy • Hand-carved Pillars • Vedic Fire Pit Shield',
      },
      {
        id: 'setup-entrance',
        category: 'Entrances',
        title: 'Royal Brass & Bell Archway',
        venue: 'The Leela Bhartiya City',
        image: '/media/setups/entrance-1.jpg',
        specs: '12ft Arched Gateway • Traditional Nadaswaram Pavilion • Fresh Marigolds',
      },
      {
        id: 'setup-lighting',
        category: 'Lighting',
        title: 'Warm Candlelight & Crystal Glow',
        venue: 'Four Seasons Ballroom',
        image: '/media/setups/lighting-1.jpg',
        specs: 'Color-calibrated 2700K Warm Ambience • Flattering Photo Illumination',
      },
      {
        id: 'setup-floral',
        category: 'Floral',
        title: 'Botanical Velvet & Lavender Swags',
        venue: 'Sheraton Grand Lawns',
        image: '/media/setups/floral-1.jpg',
        specs: 'Locally Sourced Seasonal Florals • Zero Single-use Plastic',
      },
    ],
  },

  destinations: {
    heroVideo: '/wedding_haldi_gallery_2.mp4',
    heroPoster: '/media/destinations/destination-hero.jpg',
    locations: [
      {
        name: 'Goa Coastal Grandeur',
        tagline: 'Oceanfront Sunset Mandaps & Beachside Sangeets',
        desc: '[Placeholder] Luxury resorts in South Goa with breezy beachfront Vedic canopies and starlit barefoot afterparties.',
        image: '/media/destinations/goa.jpg',
      },
      {
        name: 'Rajasthan Palatial Royalty',
        tagline: 'Udaipur & Jaipur Palace Courtyards',
        desc: '[Placeholder] Historic heritage forts, royal lakeside processions, and fireworks over tranquil waters.',
        image: '/media/destinations/rajasthan.jpg',
      },
      {
        name: 'Coorg & Kabini Sanctuary',
        tagline: 'Misty Coffee Plantations & Riverfront Estates',
        desc: '[Placeholder] Intimate botanical luxury surrounded by lush Western Ghats greenery and serene wilderness.',
        image: '/media/destinations/coorg.jpg',
      },
      {
        name: 'Hampi & Mysuru Heritage',
        tagline: 'Ancestral Stone Temples & Royal Legacy',
        desc: '[Placeholder] Ceremonies infused with sacred Vijayanagara architecture and historic South Indian royalty.',
        image: '/media/destinations/hampi.jpg',
      },
    ],
  },

  gallery: {
    items: [
      {
        id: 'gal-1',
        title: 'Floral Baby Shower Sanctuary',
        subtitle: 'Traditional Seemantha with Jasmine Swags',
        category: 'Milestones',
        src: '/media/gallery/moments-1.jpg',
        aspect: 'portrait',
      },
      {
        id: 'gal-2',
        title: 'Sacred Krishna-Themed Cradle',
        subtitle: 'Bespoke Naming Ceremony Mandap',
        category: 'Milestones',
        src: '/media/gallery/moments-2.jpg',
        aspect: 'landscape',
      },
      {
        id: 'gal-3',
        title: 'Dreamy Lavender & Pastel Canopy',
        subtitle: 'Modern Pastel Baby Shower Decor',
        category: 'Milestones',
        src: '/media/gallery/moments-3.jpg',
        aspect: 'portrait',
      },
      {
        id: 'gal-4',
        title: 'Temple Bell Arch & Brass Urulis',
        subtitle: 'Traditional Heritage Floral Architecture',
        category: 'Weddings',
        src: '/media/gallery/moments-4.jpg',
        aspect: 'landscape',
      },
      {
        id: 'gal-5',
        title: 'Sacred Vows & Rose Canopy',
        subtitle: 'Vibrant Ritual Atmosphere',
        category: 'Weddings',
        src: '/media/gallery/moments-5.jpg',
        aspect: 'portrait',
      },
      {
        id: 'gal-6',
        title: 'Emerald Canopy Floral Backdrop',
        subtitle: 'Intimate Ceremony Styling',
        category: 'Milestones',
        src: '/media/gallery/moments-6.jpg',
        aspect: 'portrait',
      },
      {
        id: 'gal-7',
        title: 'Carved Wooden Temple Mandapa',
        subtitle: 'Southern Heritage Pavilion',
        category: 'Weddings',
        src: '/media/gallery/moments-7.jpg',
        aspect: 'landscape',
      },
      {
        id: 'gal-8',
        title: 'Lotus Petal Cradle Sanctuary',
        subtitle: 'Bespoke Baby Welcome',
        category: 'Milestones',
        src: '/media/gallery/moments-8.jpg',
        aspect: 'portrait',
      },
      {
        id: 'gal-9',
        title: 'Vibrant Krishna Cradle Pavilion',
        subtitle: 'Peacock & Marigold Detailing',
        category: 'Milestones',
        src: '/media/gallery/moments-9.jpg',
        aspect: 'square',
      },
      {
        id: 'gal-10',
        title: 'Mirror Aisle & Crystal Chandeliers',
        subtitle: 'Gala Milestone Celebration',
        category: 'Corporate & Galas',
        src: '/media/gallery/moments-10.jpg',
        aspect: 'portrait',
      },
      {
        id: 'gal-11',
        title: 'Royal Brass Uruli & Marigold Welcome',
        subtitle: 'Heritage Entrance Architecture',
        category: 'Weddings',
        src: '/media/gallery/moments-11.jpg',
        aspect: 'landscape',
      },
      {
        id: 'gal-12',
        title: 'Carnival Haldi Petal Rain',
        subtitle: 'Joyous Sunshine Festivities',
        category: 'Haldi & Mehendi',
        src: '/media/gallery/moments-12.jpg',
        aspect: 'portrait',
      },
    ],
  },

  reviews: {
    review1: '/media/reviews/review-1.jpg',
    review2: '/media/reviews/review-2.jpg',
    review3: '/media/reviews/review-3.jpg',
    review4: '/media/reviews/review-4.jpg',
  },

  venues: [
    { name: 'Bengaluru Palace', city: 'Bangalore', type: 'Royal Heritage Grounds' },
    { name: 'The Taj West End', city: 'Bangalore', type: '20-Acre Heritage Botanical Canopy' },
    { name: 'The Leela Bhartiya City', city: 'Bangalore', type: 'Grand Starlit Modern Ballroom' },
    { name: 'ITC Gardenia', city: 'Bangalore', type: 'Contemporary Luxury Architecture' },
    { name: 'Four Seasons Hotel', city: 'Bangalore', type: 'Skyline Ballroom & Lawns' },
    { name: 'JW Marriott Resort', city: 'Goa', type: 'Oceanfront Sunset Mandap' },
  ],
};

export const getMediaSrc = (src, label = 'Curated Celebration Image') => {
  if (!src) {
    return {
      isPlaceholder: true,
      label: `Add image: ${label}`,
    };
  }
  return {
    isPlaceholder: false,
    src,
  };
};
