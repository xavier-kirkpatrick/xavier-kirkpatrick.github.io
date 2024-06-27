/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBgColour: "var(--main-background-color)",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        jost: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [],
};
