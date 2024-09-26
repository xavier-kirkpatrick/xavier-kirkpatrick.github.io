import { Variants } from "framer-motion";

// "#334155" is the slate-700 colour for dark mode button background
// "#f1f1ec" is the offwhite lightmode and base background colour

export const getDarkModeGlobalBgColour = (darkMode: string): Variants => {
  return {
    initial: { backgroundColor: darkMode === "Dark" ? "#f1f1ec" : "#334155" },
    animate: {
      backgroundColor: darkMode === "Dark" ? "#f1f1ec" : "#334155",
      transition: { type: "tween", duration: 0.4, ease: "easeInOut" },
    },
  };
};
