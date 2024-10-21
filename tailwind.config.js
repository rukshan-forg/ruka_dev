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
        secondary: {
          LOW: '#f1f1f1',
          DEFAULT: '#f1f1f1',
          HIGH: '#f1f1f1',
        },
        tertiary: {
          LOW: '#f1f1f1',
          DEFAULT: '#f1f1f1',
          HIGH: '#f1f1f1',
        },
      }
    },
  },
  plugins: [],
}