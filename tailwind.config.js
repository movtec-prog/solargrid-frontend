/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'solargrid-blue': '#0f2b5c',
        'solargrid-orange': '#EC6E2D',
      },
    },
  },
  plugins: [],
}