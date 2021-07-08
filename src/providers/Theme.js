import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

const themes = {
  dark: {
    name: "dark",
    color: {
      background: "black",
      colors: "white",
    },
  },

  roxo: {
    name: "roxo",
    color: {
      background: "#6034BF",
      colors: "black",
    },
  },
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes["dark"]);

  function handleSetTheme(key) {
    setTheme(themes[key]);
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        handleSetTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const themes = useContext(ThemeContext);
  
  if (!themes)
    throw new Error(" useCount must be used within a counterProvider  ");
  const { theme, handleSetTheme } = themes;
  return { theme, handleSetTheme };
}
