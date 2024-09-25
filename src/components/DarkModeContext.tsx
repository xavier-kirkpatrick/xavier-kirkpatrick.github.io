import { createContext, useContext, useState } from "react";
import { DarkModeProps } from "../../models/darkModeProps";

const DarkModeContext = createContext();

function DarkModeGlobalProvider({ children }: DarkModeProps) {
  const [darkMode, setDarkMode] = useState(() => {
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
