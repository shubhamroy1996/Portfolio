import { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Apply initial dark theme
    document.documentElement.classList.add("dark");
    applyTheme(true);
  }, []);

  const applyTheme = (isDarkTheme) => {
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
      document.body.style.backgroundColor = "#030412";
      document.body.style.color = "#ffffff";
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
      document.body.style.backgroundColor = "#f8f8f8";
      document.body.style.color = "#1a1a1a";
    }
  };

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    applyTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
