import React from "react";
import { useTranslation } from "react-i18next";
import "./AboutHero.css";

const AboutHero = () => {
  const { t } = useTranslation();

  return (
    <section className="about-hero">
      <div className="container">
        <div className="about-hero__content">
          <h1>{t("about.title")}</h1>
          <p className="about-hero__subtitle">{t("about.subtitle")}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
