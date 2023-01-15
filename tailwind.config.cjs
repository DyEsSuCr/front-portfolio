/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#101320',
        grayy: '#333643',
        bluee: '#3182ce',
      },
    },
  },
  plugins: [],
};
