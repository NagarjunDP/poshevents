/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#2B1B17',
          light: '#3E2923',
          card: '#FFFFFF',
          deep: '#1A0F0D',
        },
        maroon: {
          DEFAULT: '#5A0F1E',
          dark: '#3D0A14',
          light: '#7A1C2C',
          glow: '#9E2437',
        },
        gold: {
          DEFAULT: '#C9A24B',
          light: '#EAD18C',
          dark: '#9E7828',
          shimmer: '#FDF0CD',
          muted: '#8C7238',
        },
        ivory: {
          DEFAULT: '#FFF9F0',
          paper: '#FFFFFF',
          card: '#FFF5E8',
          border: '#EEDDC8',
          warm: '#FAF3EA',
        },
        blush: {
          DEFAULT: '#FBE9E4',
          soft: '#FDF3F0',
          card: '#FCECE8',
          border: '#F4D4CD',
        },
        rose: {
          DEFAULT: '#E8A0A8',
          light: '#F5CBD0',
          dark: '#C86D77',
        },
        marigold: {
          DEFAULT: '#F2A900',
          light: '#FFCA45',
          dark: '#C78500',
        },
        jasmine: '#FFFDF7',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Jost"', '"Inter"', 'sans-serif'],
        body: ['"Jost"', 'sans-serif'],
      },
      letterSpacing: {
        'widest-luxury': '0.28em',
        'subtle': '0.04em',
      },
      boxShadow: {
        'gold-glow': '0 0 35px -5px rgba(201, 162, 75, 0.35)',
        'gold-glow-lg': '0 0 60px -10px rgba(201, 162, 75, 0.45)',
        'maroon-glow': '0 10px 40px -10px rgba(122, 20, 32, 0.4)',
        'glass-dark': '0 20px 50px rgba(0, 0, 0, 0.5)',
        'glass-ivory': '0 20px 40px rgba(201, 162, 75, 0.08)',
      },
      animation: {
        'marquee-slow': 'marquee 45s linear infinite',
        'marquee-reverse': 'marquee-reverse 45s linear infinite',
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shine': 'shine 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        shine: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
    },
  },
  plugins: [],
}
