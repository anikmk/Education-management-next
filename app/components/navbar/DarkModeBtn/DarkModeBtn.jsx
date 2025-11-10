"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { LuSunMedium, LuSunMoon } from "react-icons/lu";

export default function DarkModeBtn() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() =>
        setTheme(currentTheme === "dark" ? "light" : "dark")
      }
      className="p-2 rounded-full border border-purple-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      {currentTheme === "dark" ? (
        <LuSunMedium className="text-yellow-400 text-xl" />
      ) : (
        <LuSunMoon className="text-gray-800 text-xl" />
      )}
    </button>
  );
}
