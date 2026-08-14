/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fef7ee',
          100: '#fdedd3',
          200: '#f9d7a5',
          300: '#f5bb6d',
          400: '#f09833',
          500: '#ec7d0e',
          600: '#dd6209',
          700: '#b7490a',
          800: '#923a10',
          900: '#763211',
          950: '#401806',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};