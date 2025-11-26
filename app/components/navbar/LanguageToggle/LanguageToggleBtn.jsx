"use client";
import Cookies from "js-cookie";

export default function LanguageToggleBtn() {
  const toggleLanguage = () => {
    const current = Cookies.get("lang") || "en";
    const next = current === "en" ? "bn" : "en";

    Cookies.set("lang", next, { expires: 365 });
    window.location.reload(); // server re-render (SEO safe)
  };

  const current = Cookies.get("lang") || "en";

  return (
    <button
      onClick={toggleLanguage}
      className="cursor-pointer bg-secondary text-accent px-3 py-1 rounded-md text-sm"
    >
      {current === "en" ? "বাংলা" : "English"}
    </button>
  );
}
