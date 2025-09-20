import React from "react";
import { useTranslation } from "react-i18next";

const ContactHero = () => {
  const { t } = useTranslation();
  return (
    <section className="section">
      <div className="container">
        <h1>{t("contact.title")}</h1>
        <p>En cours de développement...</p>
      </div>
    </section>
  );
};

export default ContactHero;
