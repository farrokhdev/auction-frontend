import React from "react";
import { useTranslation } from "react-i18next";
import changeLang from "../../changeLang";

function Home() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <h1>{t("appName")}</h1>
      <button onClick={() => changeLang()}>{t("translate")}</button>
    </>
  );
}

export default Home;
