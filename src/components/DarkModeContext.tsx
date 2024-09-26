import { createContext, useState, useMemo } from "react";
import { DarkModeProps } from "../../models/darkModeProps";

// Create a context to store the dark mode state and share it with other globally
export const DarkModeContext = createContext<{
  darkMode: string;
  setDarkMode: (mode: string) => void;
}>({ darkMode: "Dark", setDarkMode: () => {} });

function DarkModeGlobalProvider({ children }: Readonly<DarkModeProps>) {
  const [darkMode, setDarkMode] = useState(() => {
    // Checks if the user has a cached setting
    const cachedSetting = localStorage.getItem("DarkModeSetting");
    return cachedSetting ?? "Dark";
  });

  // !Need to look deeper into how useMemo is working here and why it's needed!
  const darkModeVales = useMemo(() => ({ darkMode, setDarkMode }), [darkMode]);

  return (
    <DarkModeContext.Provider value={darkModeVales}>
      {children}
    </DarkModeContext.Provider>
  );
}

export default DarkModeGlobalProvider;
