
const appTheme = require('./src/components/themes.json')

/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    'src/**/*.{tsx,ts,html,jsx,js,md,json}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: appTheme.colorPalette,
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
