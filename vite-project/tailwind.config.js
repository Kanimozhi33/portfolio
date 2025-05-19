/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'kanit':['Kanit', 'sans-serif'],
        'bebas': ["Bebas Neue", 'sans-serif'],
        'libre': ['Libre Baskerville', 'serif'],
        'caveat': ['caveat','cursive'],
        'oswald':["Oswald", 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // If you installed it
    require('@tailwindcss/typography'), // If you installed it
  ],
}