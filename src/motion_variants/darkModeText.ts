import { Variants } from "framer-motion";

// "#334155" is the slate-700 colour for dark mode button background
// "#f1f1ec" is the offwhite lightmode and base background colour
// "#000000" is the colour black for dark mode text

export const getDarkModeTextColour = (darkMode: string): Variants => {
  return {
    initial: { color: darkMode === "Dark" ? "#000000" : "#f1f1ec" },
    animate: {
      color: darkMode === "Dark" ? "#000000" : "#f1f1ec",
      transition: { type: "tween", duration: 0.4, ease: "easeInOut" },
    },
  };
};
