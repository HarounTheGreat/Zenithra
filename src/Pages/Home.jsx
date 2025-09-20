import React from "react";
import { useTranslation } from "react-i18next";
import Hero from "../components/home/Hero";
import ServicesPreview from "../components/home/ServicesPreview";
import AboutPreview from "../components/home/AboutPreview";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";
import "./Home.css";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home-page">
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;
