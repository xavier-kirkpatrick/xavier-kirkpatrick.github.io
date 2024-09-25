import { Variants } from "framer-motion";

export const getDarkModeButtonVariants = (darkMode: string): Variants => {
  return {
    initial: { backgroundColor: darkMode === "Dark" ? "#334155" : "#f1f1ec" },
    animate: {
      backgroundColor: darkMode === "Dark" ? "#334155" : "#f1f1ec",
      transition: { type: "tween", duration: 0.4, ease: "easeInOut" },
    },
  };
};
