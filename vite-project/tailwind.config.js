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
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // If you installed it
    require('@tailwindcss/typography'), // If you installed it
  ],
}