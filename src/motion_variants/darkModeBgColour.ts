import { Variants } from "framer-motion";
import { DarkModeContext } from "../components/DarkModeContext";

export const darkModeBgColour: Variants = {
  initial:
    DarkModeContext.darkMode === "Dark"
      ? { backgroundColor: "#1a202c" }
      : { backgroundColor: "#f1f1ec" },
};
