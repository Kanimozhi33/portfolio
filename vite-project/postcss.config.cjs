module.exports = {
  plugins: [
    require('tailwindcss')(), // Note: It should be just 'tailwindcss' for v3
    require('autoprefixer')(),
  ],
};