import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import React from "react";

function Languageselect() {
  const { i18n } = useTranslation();
  const languages = [
    { code: "en", lang: "English" },
    { code: "ne", lang: "Nepali" },
    { code: "hi", lang: "Hindi" },
  ];
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="flex p-4 gap-2">
      {languages.map((lng) => {
        return (
          <button
            className="flex p-4 rounded border-1 border-gray-50 font-medium text-xl"
            key={lng.code}
            onClick={() => changeLanguage(lng.code)}
          >
            {lng.lang}
          </button>
        );
      })}
    </div>
  );
}

export default Languageselect;
