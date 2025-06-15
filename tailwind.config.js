/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#059669',
        secondary: '#D97706',
        accent: '#DC2626',
      },
      fontFamily: {
        heading: ['Roboto Slab, serif', 'sans-serif'],
        body: ['Open Sans, sans-serif', 'sans-serif'],
      },
    },
  },
  plugins: [],
}