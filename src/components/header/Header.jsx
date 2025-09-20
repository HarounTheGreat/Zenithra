import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import "./header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: t("nav.home"), icon: "uil-estate" },
    { path: "/about", label: t("nav.about"), icon: "uil-user" },
    { path: "/services", label: t("nav.services"), icon: "uil-briefcase-alt" },
    { path: "/protocols", label: t("nav.protocols"), icon: "uil-file-alt" },
    { path: "/gallery", label: t("nav.gallery"), icon: "uil-scenery" },
    { path: "/blog", label: t("nav.blog"), icon: "uil-newspaper" },
    { path: "/contact", label: t("nav.contact"), icon: "uil-message" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <nav className="nav container">
        <Link
          to="/"
          className="nav__logo"
          onClick={closeMenu}
        >
          <span className="logo-text">Zenithra</span>
          <span className="logo-subtitle">Clinic</span>
        </Link>

        <div className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`}>
          <ul className="nav__list">
            {navItems.map((item) => (
              <li
                key={item.path}
                className="nav__item"
              >
                <Link
                  to={item.path}
                  className={`nav__link ${
                    location.pathname === item.path ? "active-link" : ""
                  }`}
                  onClick={closeMenu}
                >
                  <i className={`uil ${item.icon} nav__icon`}></i>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="nav__actions">
            <LanguageSelector />
            <Link
              to="/contact"
              className="btn btn-primary nav__cta"
              onClick={closeMenu}
            >
              {t("home.cta")}
            </Link>
          </div>

          <i
            className="uil uil-times nav__close"
            onClick={toggleMenu}
          ></i>
        </div>

        <div
          className="nav__toggle"
          onClick={toggleMenu}
        >
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
