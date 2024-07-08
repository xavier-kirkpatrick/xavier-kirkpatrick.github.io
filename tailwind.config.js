/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBgColour: "var(--main-background-color)",
        blueLink: "var(--sidebar-link-colour)",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        jost: ["Jost", "sans-serif"],
      },
      fontSize: {
        sideBar: "var(--side-bar-font)",
      },
    },
  },
  plugins: [],
};
