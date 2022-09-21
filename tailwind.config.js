/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    'src/**/*.{html,pcss,tsx,html,jsx,css}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#b18de0',
          '100': '#945dda',
          '200': '#8541db',
          '300': '#7637c7',
          '400': '#5d15b9',
          '500': '#430099',
        },
      }
    },
  },
  plugins: [],
}
