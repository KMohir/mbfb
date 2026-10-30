"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
  isMounted: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
  toggleTheme: () => {},
  isMounted: false,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("mbfb_theme") as Theme | null;
      if (saved === "light" || saved === "dark") {
        setThemeState(saved);
        applyThemeClass(saved);
      } else {
        // Default to light (Kunduzgi) by user requirement
        setThemeState("light");
        applyThemeClass("light");
      }
    } catch {
      applyThemeClass("light");
    }
    setIsMounted(true);
  }, []);

  const applyThemeClass = (t: Theme) => {
    const root = document.documentElement;
    if (t === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
  };

  const setTheme = (t: Theme) => {
    setThemeState(t);
    applyThemeClass(t);
    try {
      localStorage.setItem("mbfb_theme", t);
    } catch {}
  };

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, isMounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
