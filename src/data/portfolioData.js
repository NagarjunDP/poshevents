/**
 * Central Portfolio & Real Celebrations Data Store
 * Supports live client updates via Admin Portal (/admin) with localStorage persistence
 * and instantaneous cross-component reactive updates.
 */

export const initialPortfolioData = [
  {
    id: 'wedding-shiv-siri',
    title: 'Shiv & Siri',
    date: '18 November 2025',
    location: 'Bengaluru Palace, Bengaluru',
    category: 'Wedding',
    tags: ['South Indian', 'Temple Mandap', 'Royal Floral'],
    videoUrl: '/wedding_haldi_gallery.mp4',
    poster: '/hali2.PNG',
    featured: true,
  },
  {
    id: 'sangeet-kabir-ananya',
    title: 'Kabir & Ananya',
    date: '24 October 2025',
    location: 'Taj West End, Bengaluru',
    category: 'Sangeet',
    tags: ['Sangeet Night', 'Starlit Stage', 'Dazzling Lights'],
    videoUrl: '/sangeet_production.mp4',
    poster: '/sangeet02.PNG',
    featured: true,
  },
  {
    id: 'haldi-carnival-arjun-diya',
    title: 'Arjun & Diya',
    date: '12 September 2025',
    location: 'The Leela Bhartiya City, Bengaluru',
    category: 'Mehendi',
    tags: ['Haldi Carnival', 'Marigold Swags', 'Daytime Bliss'],
    videoUrl: '/wedding_haldi_gallery_3.mp4',
    poster: '/hali8.PNG',
    featured: true,
  },
  {
    id: 'destination-rohan-meera',
    title: 'Rohan & Meera',
    date: '5 January 2026',
    location: 'JW Marriott Resort, Goa',
    category: 'Wedding',
    tags: ['Beachfront Mandap', 'Sunset Vows', 'Coastal Luxe'],
    videoUrl: '/wedding_haldi_gallery_2.mp4',
    poster: '/hali9.PNG',
    featured: true,
  },
  {
    id: 'birthday-milestone-tarun',
    title: 'Tarun Milestone Gala',
    date: '15 December 2025',
    location: 'Four Seasons, Bengaluru',
    category: 'Celebration',
    tags: ['Royal Crimson', 'Live Saxophone', 'Crystal Runway'],
    videoUrl: 'https://ik.imagekit.io/7ksvfitos/tr:rt-270/brdy%20vid%20tarun%20anna.mp4',
    poster: 'https://ik.imagekit.io/7ksvfitos/tr:rt-270,so-2/brdy%20vid%20tarun%20anna.mp4/ik-thumbnail.jpg',
    featured: true,
  },
  {
    id: 'baby-shower-radhika',
    title: 'Radhika & Prateek',
    date: '14 August 2025',
    location: 'Sheraton Grand, Bengaluru',
    category: 'Celebration',
    tags: ['Traditional Seemantha', 'Floral Swing', 'Divine Blessings'],
    videoUrl: '/traditional_seemantha.mp4',
    poster: '/babyshowermantapa.jpg',
    featured: false,
  },
  {
    id: 'bachelor-creative-bash',
    title: 'Vikram & Crew',
    date: '28 July 2025',
    location: 'Private Villa, Nandi Hills',
    category: 'Celebration',
    tags: ['Bachelor Soirée', 'Cocktail Lounge', 'Neon Aesthetic'],
    videoUrl: '/bachelorparty_bento.mp4',
    poster: '/Slide 4.jpg.jpeg',
    featured: false,
  },
  {
    id: 'corporate-summit-gala',
    title: 'Titan Horizon Gala',
    date: '20 June 2025',
    location: 'ITC Gardenia, Bengaluru',
    category: 'Corporate',
    tags: ['Corporate Gala', 'Keynote Stage', 'VIP Security'],
    videoUrl: '/corporate_events.mp4',
    poster: '/po4.jpeg',
    featured: false,
  },
  {
    id: 'naming-ceremony-aarav',
    title: 'Baby Aarav Naming Ceremony',
    date: '10 May 2025',
    location: 'Shangri-La, Bengaluru',
    category: 'Celebration',
    tags: ['Krishna Theme', 'Cradle Elegance', 'Pristine Florals'],
    videoUrl: '/namingceremony_bento.mp4',
    poster: '/namingceremony.jpg',
    featured: false,
  },
];

export const portfolioCategories = [
  'All',
  'Wedding',
  'Sangeet',
  'Mehendi',
  'Corporate',
  'Celebration',
];

const STORAGE_KEY = 'posh_events_portfolio_data_v2';

/**
 * Get reactive portfolio items from localStorage with fallback to initial data
 */
export const getStoredPortfolio = () => {
  if (typeof window === 'undefined') return initialPortfolioData;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialPortfolioData));
      return initialPortfolioData;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      // Auto-migrate legacy local path if present in user's localStorage
      return parsed.map((item) => {
        if (item.id === 'birthday-milestone-tarun' && (!item.videoUrl || item.videoUrl.startsWith('/brdy'))) {
          return {
            ...item,
            videoUrl: 'https://ik.imagekit.io/7ksvfitos/tr:rt-270/brdy%20vid%20tarun%20anna.mp4',
            poster: 'https://ik.imagekit.io/7ksvfitos/tr:rt-270,so-2/brdy%20vid%20tarun%20anna.mp4/ik-thumbnail.jpg',
          };
        }
        return item;
      });
    }
    return initialPortfolioData;
  } catch (e) {
    console.error('Error reading stored portfolio:', e);
    return initialPortfolioData;
  }
};

/**
 * Add or update an item in portfolio
 */
export const savePortfolioItem = (item) => {
  if (typeof window === 'undefined') return;
  const current = getStoredPortfolio();
  const existsIndex = current.findIndex((i) => i.id === item.id);
  let updated;
  if (existsIndex >= 0) {
    updated = [...current];
    updated[existsIndex] = { ...updated[existsIndex], ...item };
  } else {
    updated = [item, ...current];
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  window.dispatchEvent(new CustomEvent('posh_portfolio_updated', { detail: updated }));
  return updated;
};

/**
 * Delete an item from portfolio
 */
export const deletePortfolioItem = (id) => {
  if (typeof window === 'undefined') return;
  const current = getStoredPortfolio();
  const updated = current.filter((item) => item.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  window.dispatchEvent(new CustomEvent('posh_portfolio_updated', { detail: updated }));
  return updated;
};

/**
 * Reset portfolio back to initial defaults
 */
export const resetPortfolioToDefault = () => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initialPortfolioData));
  window.dispatchEvent(new CustomEvent('posh_portfolio_updated', { detail: initialPortfolioData }));
  return initialPortfolioData;
};

// Legacy export compatibility
export const portfolioData = initialPortfolioData;
