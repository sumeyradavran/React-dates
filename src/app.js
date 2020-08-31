import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import DateRangeSelector from "./DateRangeSelector";
import moment from "moment";
import Calendar from "./Calendar";

function App() {
  const { t, i18n, ready } = useTranslation();

  const handleLanguageChange = (lng) => {
    moment.locale(lng);
  };

  useEffect(() => {
    i18n.on("languageChanged", handleLanguageChange);
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);

  if (ready) {
    return (
      <div className="App-header">
        <h2>{t("Welcome_to_React")}</h2>
        <button onClick={() => i18n.changeLanguage("tr")}>tr</button>
        <button onClick={() => i18n.changeLanguage("en")}>en</button>
        <button onClick={() => i18n.changeLanguage("de")}>de</button>
        <div>{t("localization_testing")}</div>
        <DateRangeSelector start={moment("2020-05-18")} />
        <Calendar start={moment("2020-05-18")} />
      </div>
    );
  }
  return <span>Loading...</span>;
}

export default App;
