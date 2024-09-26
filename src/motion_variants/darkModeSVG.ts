import { Variants } from "framer-motion";

// "#334155" is slate-700 colour for dark mode button background
// "#f1f1ec" is the offwhite lightmode and base background colour
// "#000000" is black for dark mode text

export const getDarkModeSVGColour = (darkMode: string): Variants => {
  return {
    initial: { stroke: darkMode === "Dark" ? "#000000" : "#f1f1ec" },
    animate: {
      stroke: darkMode === "Dark" ? "#000000" : "#f1f1ec",
      transition: { type: "tween", duration: 0.4, ease: "easeInOut" },
    },
  };
};
