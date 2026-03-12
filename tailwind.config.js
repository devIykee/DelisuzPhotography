/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'serif'],
        jost: ['var(--font-jost)', 'sans-serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#C9A96E',
          light: '#E8D5A3',
          dark: '#9E7A42',
        },
        dark: {
          DEFAULT: '#0D0D0D',
          100: '#1A1A1A',
          200: '#242424',
          300: '#2E2E2E',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'slide-in-left': 'slideInLeft 0.8s ease forwards',
        'kenburns': 'kenburns 8s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-40px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        kenburns: {
          from: { transform: 'scale(1) translate(0, 0)' },
          to: { transform: 'scale(1.08) translate(-1%, -1%)' },
        },
      },
    },
  },
  plugins: [],
};
