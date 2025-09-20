import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AOS from "aos";
import "./CTA.css";

const CTA = () => {
  const { t } = useTranslation();

  return (
    <section className="cta section">
      <div className="container">
        <div
          className="cta__content"
          data-aos="fade-up"
        >
          <h2>Prêt à commencer votre transformation ?</h2>
          <p>
            Prenez rendez-vous dès aujourd'hui et découvrez nos soins
            esthétiques de qualité supérieure.
          </p>
          <div className="cta__buttons">
            <Link
              to="/contact"
              className="btn btn-primary cta__primary"
            >
              Prendre rendez-vous
            </Link>
            <Link
              to="/gallery"
              className="btn btn-outline cta__secondary"
            >
              Voir nos résultats
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
