/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#FDFAF7',
        accent: '#C94A6E',
        dark: '#1A0A0E',
        'dark-secondary': '#3D1520',
        'text-primary': '#1A1A1A',
        'text-muted': '#6B6B6B',
        'text-hint': '#9E8E93',
        'card-bg': '#FFFFFF',
        'card-border': '#F0E8EC',
        'soft-pink': '#FDF0F4',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
