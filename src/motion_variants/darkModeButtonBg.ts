import { Variants } from "framer-motion";

// "#334155" is the slate-700 colour for dark mode button background
// "#f1f1ec" is the offwhite lightmode and base background colour

export const getDarkModeButtonBg = (darkMode: string): Variants => {
  return {
    initial: { backgroundColor: darkMode === "Dark" ? "#334155" : "#f1f1ec" },
    animate: {
      backgroundColor: darkMode === "Dark" ? "#334155" : "#f1f1ec",
      transition: { type: "tween", duration: 0.4, ease: "easeInOut" },
    },
  };
};
