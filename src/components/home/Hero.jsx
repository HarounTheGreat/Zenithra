import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Hero.css";

const Hero = () => {
  const { t } = useTranslation();

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="hero">
      <div className="hero__container container">
        <div className="hero__content">
          <div
            className="hero__text"
            data-aos="fade-up"
          >
            <h1 className="hero__title">
              <span className="hero__title-main">{t("home.title")}</span>
              <span className="hero__title-sub">{t("home.subtitle")}</span>
            </h1>
            <p className="hero__description">{t("home.description")}</p>
            <div className="hero__buttons">
              <Link
                to="/contact"
                className="btn btn-primary hero__cta"
              >
                {t("home.cta")}
              </Link>
              <Link
                to="/about"
                className="btn btn-secondary hero__learn"
              >
                {t("home.learnMore")}
              </Link>
            </div>
          </div>

          <div
            className="hero__image"
            data-aos="fade-left"
          >
            <div className="hero__image-container">
              <div className="hero__image-placeholder">
                <i className="uil uil-hospital"></i>
                <span>Clinique Zenithra</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="hero__features"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="hero__feature">
            <i className="uil uil-shield-check"></i>
            <span>Certifié Médical</span>
          </div>
          <div className="hero__feature">
            <i className="uil uil-award"></i>
            <span>Excellence</span>
          </div>
          <div className="hero__feature">
            <i className="uil uil-heart"></i>
            <span>Soins Personnalisés</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll">
        <div className="hero__scroll-indicator">
          <span>Scroll</span>
          <i className="uil uil-angle-down"></i>
        </div>
      </div>
    </section>
  );
};

export default Hero;
