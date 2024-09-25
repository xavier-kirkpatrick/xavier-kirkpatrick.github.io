import { createContext, useState } from "react";
import { DarkModeProps } from "../../models/darkModeProps";

// Create a context to store the dark mode state and share it with other globally
export const DarkModeContext = createContext<{
  darkMode: string;
  setDarkMode: (mode: string) => void;
}>({ darkMode: "Dark", setDarkMode: () => {} });

function DarkModeGlobalProvider({ children }: DarkModeProps) {
  const [darkMode, setDarkMode] = useState(() => {
    // Checks if the user has a cached setting
    const cachedSetting = localStorage.getItem("DarkModeSetting");
    return cachedSetting ? cachedSetting : "Dark";
  });

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export default DarkModeGlobalProvider;
