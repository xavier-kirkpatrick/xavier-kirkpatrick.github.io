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
        primary: "var(--primary-font-family)",
        secondary: "var(--secondary-font-family)",
      },
      fontSize: {
        sideBar: "var(--sidebar-font-size)",
      },
    },
  },
  plugins: [],
};
