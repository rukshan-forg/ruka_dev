/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          LOW: '#e493ff',
          DEFAULT: '#ca36ff',
          HIGH: '#3a0051',
        },
      }
    },
  },
  plugins: [],
}