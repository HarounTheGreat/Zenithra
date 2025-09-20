import React from "react";
import { useTranslation } from "react-i18next";
import AboutHero from "../components/about/AboutHero";
import Team from "../components/about/Team";
import Certifications from "../components/about/Certifications";
import Values from "../components/about/Values";
import "./About.css";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      <AboutHero />
      <Values />
      <Team />
      <Certifications />
    </div>
  );
};

export default About;
