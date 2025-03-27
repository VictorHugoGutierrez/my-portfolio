import { useState } from "react";

export default function useEnOrPt() {
  const [language, setLanguage] = useState<"Portuguese" | "English">(
    "Portuguese",
  );

  const showPortuguese = () => setLanguage("Portuguese");
  const showEnglish = () => setLanguage("English");

  return {
    portugueseVisible: language === "Portuguese",
    englishVisible: language === "English",
    showPortuguese,
    showEnglish,
  };
}
