/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        gujarati: ['Noto Sans Gujarati', 'sans-serif'],
        hindi: ['Noto Sans Devanagari', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
