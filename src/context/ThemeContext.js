import { createContext, useState } from "react";

const ThemeContext = createContext();
export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(false);
  const theme = mode
    ? {
        text: "text-black",
        background: "bg-white",
        productBg: "bg-black",
        popularBg: "bg-black/50",
        button1: "bg-black text-white border-black",
        button2: "bg-transprent text-black border-black",
      }
    : {
        text: "text-white",
        background: "bg-[#43283A]",
        productBg: "bg-[#381F30]",
        popularBg: "bg-[#381F30]",
        button1: "bg-white text-black border-white",
        button2: "bg-transprent text-white border-white",
      };

  const handleMode = () => {
    setMode((prevState) => !prevState);
  };
  return (
    <ThemeContext.Provider value={{ theme, handleMode, mode }}>
      {children}
    </ThemeContext.Provider>
  );
}
export default ThemeContext;

