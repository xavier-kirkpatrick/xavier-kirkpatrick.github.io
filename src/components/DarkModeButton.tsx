import "../styles/hide_cursor.css";
import { useState, useEffect } from "react";

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

  const darkOrLightButton =
    darkMode === "Dark" ? "bg-slate-700" : "bg-slate-200";
  const darkOrLightText =
    darkMode === "Dark" ? "text-slate-200" : "text-slate-700";
  return (
    <button
      className={`${darkOrLightButton} h-7 w-16 border border-slate-700 font-primary text-white ${darkOrLightText} transition-all`}
      style={{ cursor: "none" }}
      onClick={toggleDarkMode}
    >
      {darkMode}
    </button>
  );
}

export default DarkModeButton;
