/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        noken: ['Noken', 'sans-serif'],
        rokhald: ['Rokhald', 'sans-serif'],
        mourich: ['Mourich', 'sans-serif'], // <-- Updated this line
      },
      colors: {
        'brand-gold': '#C6A664',
      },
    },
  },
  plugins: [],
};