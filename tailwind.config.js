/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ultra-blue': '#007bff', // Ultra blue color
        'ultra-blue-dark': '#0056b3', // Darker blue on hover
        'ultra-blue-darker': '#004080', // Even darker blue when clicked
      },
    },
  },
  plugins: [],
}
