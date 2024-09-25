import { motion } from "framer-motion";
import { useDarkMode } from "../hooks/useDarkMode";
import { getDarkModeButtonVariants } from "../motion_variants/darkModeButton";

function DarkModeButton() {
  const { darkMode, setDarkMode } = useDarkMode();

  const toggleDarkMode = () => {
    const darkOrLightMode = darkMode === "Dark" ? "Light" : "Dark";
    setDarkMode(darkOrLightMode);

    localStorage.setItem("DarkModeSetting", darkOrLightMode);
  };

  // "#334155" is the slate-700 colour for dark mode
  // "#f1f1ec" is the offwhite lightmode and base background colour
  // "#0f172a" is the slate-900 colour

  const darkOrLightText = darkMode === "Dark" ? "#f1f1ec" : "#334155";

  return (
    <motion.button
      className="h-7 w-16 border border-slate-700 bg-slate-900 font-primary"
      style={{ cursor: "none" }}
      onClick={toggleDarkMode}
      variants={getDarkModeButtonVariants(darkMode)}
      initial="initial"
      animate="animate"
    >
      <motion.p
        initial={{ color: darkOrLightText }}
        animate={{ color: darkOrLightText }}
        transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
      >
        {darkMode}
      </motion.p>
    </motion.button>
  );
}

export default DarkModeButton;
