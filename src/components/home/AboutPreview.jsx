import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AOS from "aos";
import "./AboutPreview.css";

const AboutPreview = () => {
  const { t } = useTranslation();

  const stats = [
    { number: "15+", label: "Années d'expérience" },
    { number: "5000+", label: "Patients satisfaits" },
    { number: "50+", label: "Traitements disponibles" },
    { number: "100%", label: "Satisfaction client" },
  ];

  return (
    <section className="about-preview section">
      <div className="container">
        <div className="about-preview__content">
          <div
            className="about-preview__text"
            data-aos="fade-right"
          >
            <h2>{t("about.title")}</h2>
            <p className="about-preview__subtitle">{t("about.subtitle")}</p>
            <p className="about-preview__description">
              {t("about.description")}
            </p>
            <div className="about-preview__features">
              <div className="feature">
                <i className="uil uil-shield-check"></i>
                <span>Certifications médicales européennes</span>
              </div>
              <div className="feature">
                <i className="uil uil-award"></i>
                <span>Technologies de pointe</span>
              </div>
              <div className="feature">
                <i className="uil uil-heart"></i>
                <span>Approche personnalisée</span>
              </div>
            </div>
            <Link
              to="/about"
              className="btn btn-primary"
            >
              En savoir plus sur nous
            </Link>
          </div>

          <div
            className="about-preview__stats"
            data-aos="fade-left"
          >
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="stat-item"
                >
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
