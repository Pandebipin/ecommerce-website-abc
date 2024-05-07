import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
// import { reactI18nextModule } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    lng: "ne",
    returnObject: true,
    resources: {
      en: {
        translation: {
          greetings: "english",
        },
      },
      ne: {
        translation: {
          greetings: "नेपाली",

          title: "Welcome to react using react-i18next",
          description: {
            part1: "To get started, edit <1>src/App.js</1> and save to reload.",
            part2:
              "Switch language between english and german using buttons above.",
          },
        },
      },
      hi: {
        translation: {
          greetings: "आधुनिक मानक हिन्दी,",

          title: "Welcome to react using react-i18next",
          description: {
            part1: "To get started, edit <1>src/App.js</1> and save to reload.",
            part2:
              "Switch language between english and german using buttons above.",
          },
        },
      },
    },
  });

export default i18n;
