import React, { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <button
      className="fixed top-4 right-4 z-50 bg-gray-700 text-white px-3 py-1 rounded hover:bg-purple-600 transition"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "☀ Light" : "🌙 Dark"}
    </button>
  );
}