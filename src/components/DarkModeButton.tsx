import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function DarkModeButton() {
  const [darkMode, setDarkMode] = useState("Dark");

  useEffect(() => {
    const cachedSetting = localStorage.getItem("DarkModeSetting");
    if (cachedSetting) {
      setDarkMode(cachedSetting);
    }
  }, []);

  const toggleDarkMode = () => {
    const darkOrLightMode = darkMode === "Dark" ? "Light" : "Dark";
    setDarkMode(darkOrLightMode);

    localStorage.setItem("DarkModeSetting", darkOrLightMode);
  };

  const darkOrLightButton = darkMode === "Dark" ? "#334155" : "#f1f1ec";
  const darkOrLightText = darkMode === "Dark" ? "#f1f1ec" : "#334155";

  return (
    <motion.button
      className="h-7 w-16 border border-slate-700 font-primary"
      style={{ cursor: "none" }}
      onClick={toggleDarkMode}
      initial={{ backgroundColor: darkOrLightButton }}
      animate={{ backgroundColor: darkOrLightButton }}
      transition={{ type: "spring", duration: 0.8, ease: "easeInOut" }}
    >
      <motion.p
        initial={{ color: darkOrLightText }}
        animate={{ color: darkOrLightText }}
        transition={{ type: "spring", duration: 0.8, ease: "easeInOut" }}
      >
        {darkMode}
      </motion.p>
    </motion.button>
  );
}

export default DarkModeButton;
