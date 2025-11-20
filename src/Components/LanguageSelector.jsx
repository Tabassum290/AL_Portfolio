import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const languages = [
  { code: "en", lang: "ENG" },
  { code: "bn", lang: "বাং" }, // বাংলা লেখা
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    const selectedLang = e.target.value;
    i18n.changeLanguage(selectedLang);
    console.log("Language changed to:", selectedLang);
  };

  return (
    <div className="border-2 rounded-lg p-2 inline-block">
      <select
        value={i18n.language}
        onChange={handleChange}
        className="bg-white text-black p-1  border-2 border-purple-600"
      >
        {languages.map((lng) => (
          <option key={lng.code} value={lng.code}>
            {lng.lang}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
