import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AOS from "aos";
import "./ServicesPreview.css";

const ServicesPreview = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: "uil-facebook",
      title: t("services.face"),
      description: "Traitements esthétiques du visage",
      link: "/services#face",
    },
    {
      icon: "uil-user-arrows",
      title: t("services.body"),
      description: "Soins corporels et silhouette",
      link: "/services#body",
    },
    {
      icon: "uil-heart",
      title: t("services.wellness"),
      description: "Bien-être et relaxation",
      link: "/services#wellness",
    },
    {
      icon: "uil-tooth",
      title: t("services.dental"),
      description: "Soins dentaires esthétiques",
      link: "/services#dental",
    },
  ];

  return (
    <section className="services-preview section">
      <div className="container">
        <div
          className="section-title"
          data-aos="fade-up"
        >
          <h2>{t("services.title")}</h2>
          <p>{t("services.subtitle")}</p>
        </div>

        <div className="services-preview__grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="service-card__icon">
                <i className={`uil ${service.icon}`}></i>
              </div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
              <Link
                to={service.link}
                className="service-card__link"
              >
                En savoir plus
                <i className="uil uil-arrow-right"></i>
              </Link>
            </div>
          ))}
        </div>

        <div
          className="services-preview__cta"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Link
            to="/services"
            className="btn btn-outline"
          >
            Voir tous nos services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
