import { Variants } from "framer-motion";

// "#334155" is the slate-700 colour for dark mode button background
// "#f1f1ec" is the offwhite lightmode and base background colour
// "#475569" is the slate-600 colour
// "#0f172a" is the slate-900 colour
// "#1e293b" is the slate-800 colour

export const getDarkModeGlobalBgColour = (darkMode: string): Variants => {
  return {
    initial: { backgroundColor: darkMode === "Dark" ? "#f1f1ec" : "#1e293b" },
    animate: {
      backgroundColor: darkMode === "Dark" ? "#f1f1ec" : "#1e293b",
      transition: { type: "tween", duration: 0.4, ease: "easeInOut" },
    },
  };
};
