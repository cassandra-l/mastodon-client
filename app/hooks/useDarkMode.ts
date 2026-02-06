import { useState, useEffect } from "react";

type ThemeString = "light" | "dark";

export function useDarkMode() {
  function getSavedTheme(): ThemeString {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") || "light") as ThemeString;
    }
    return "light";
  }

  // 1. Initialize state
  const [theme, setTheme] = useState<ThemeString>(getSavedTheme());

  // 2. Side effect: Update the <html> class and localStorage whenever theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  // 3. The toggle function
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
}
