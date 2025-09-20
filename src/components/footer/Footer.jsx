import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <h3 className="footer__logo">
              <span className="logo-text">Zenithra</span>
              <span className="logo-subtitle">Clinic</span>
            </h3>
            <p className="footer__description">{t("footer.description")}</p>
            <div className="footer__social">
              <a
                href="https://facebook.com"
                className="footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="uil uil-facebook-f"></i>
              </a>
              <a
                href="https://instagram.com"
                className="footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="uil uil-instagram"></i>
              </a>
              <a
                href="https://linkedin.com"
                className="footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="uil uil-linkedin"></i>
              </a>
              <a
                href="https://youtube.com"
                className="footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="uil uil-youtube"></i>
              </a>
            </div>
          </div>

          <div className="footer__links">
            <h4 className="footer__title">{t("footer.quickLinks")}</h4>
            <ul className="footer__list">
              <li>
                <Link
                  to="/about"
                  className="footer__link"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="footer__link"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/protocols"
                  className="footer__link"
                >
                  Protocoles
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="footer__link"
                >
                  Galerie
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="footer__link"
                >
                  Actualités
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__services">
            <h4 className="footer__title">{t("footer.services")}</h4>
            <ul className="footer__list">
              <li>
                <Link
                  to="/services#face"
                  className="footer__link"
                >
                  Soins du visage
                </Link>
              </li>
              <li>
                <Link
                  to="/services#body"
                  className="footer__link"
                >
                  Soins corporels
                </Link>
              </li>
              <li>
                <Link
                  to="/services#wellness"
                  className="footer__link"
                >
                  Bien-être
                </Link>
              </li>
              <li>
                <Link
                  to="/services#dental"
                  className="footer__link"
                >
                  Dentaire
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__contact">
            <h4 className="footer__title">{t("footer.contact")}</h4>
            <div className="footer__contact-info">
              <div className="contact-item">
                <i className="uil uil-map-marker"></i>
                <span>
                  123 Avenue des Champs-Élysées
                  <br />
                  75008 Paris, France
                </span>
              </div>
              <div className="contact-item">
                <i className="uil uil-phone"></i>
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="contact-item">
                <i className="uil uil-envelope"></i>
                <span>contact@zenithra-clinic.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © 2024 Zenithra Clinic. {t("footer.rights")}
          </p>
          <div className="footer__legal">
            <Link
              to="/privacy"
              className="footer__legal-link"
            >
              Confidentialité
            </Link>
            <Link
              to="/terms"
              className="footer__legal-link"
            >
              Conditions
            </Link>
            <Link
              to="/cookies"
              className="footer__legal-link"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
