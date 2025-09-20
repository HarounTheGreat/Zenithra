import React from "react";
import { useTranslation } from "react-i18next";

const ServicesHero = () => {
  const { t } = useTranslation();
  return (
    <section className="section">
      <div className="container">
        <h1>{t("services.title")}</h1>
        <p>En cours de développement...</p>
      </div>
    </section>
  );
};

export default ServicesHero;
