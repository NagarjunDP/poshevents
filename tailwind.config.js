/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F5F0E8',
          light: '#FAF8F3',
          dark: '#EAE3D6',
        },
        ivory: '#FAF8F3',
        gold: {
          DEFAULT: '#B08D57',
          light: '#D8BA84',
          accent: '#C4A574',
          dark: '#8A6B2E',
        },
        crimson: {
          DEFAULT: '#8B0014',
          deep: '#700010',
          light: '#9B1B22',
        },
        charcoal: '#2B2B2B',
        navy: '#14203A',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
      boxShadow: {
        'luxury': '0 16px 40px -10px rgba(0, 0, 0, 0.07)',
        'luxury-hover': '0 24px 50px -10px rgba(0, 0, 0, 0.12)',
        'gold-soft': '0 8px 30px rgba(176, 141, 87, 0.25)',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
