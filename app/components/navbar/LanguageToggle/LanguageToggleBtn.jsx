"use client";

import { useLanguage } from "@pages/Context/LanguageContext";


export default function LanguageToggleBtn() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className=" cursor-pointer bg-secondary text-accent px-3 py-1 rounded-md text-sm hover:bg-primary transition"
    >
      {language === "en" ? "বাংলা" : "English"}
    </button>
  );
}
