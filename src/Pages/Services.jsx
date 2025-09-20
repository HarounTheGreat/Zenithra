import React from "react";
import { useTranslation } from "react-i18next";
import ServicesHero from "../components/services/ServicesHero";
import FaceServices from "../components/services/FaceServices";
import BodyServices from "../components/services/BodyServices";
import WellnessServices from "../components/services/WellnessServices";
import DentalServices from "../components/services/DentalServices";
import "./Services.css";

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="services-page">
      <ServicesHero />
      <FaceServices />
      <BodyServices />
      <WellnessServices />
      <DentalServices />
    </div>
  );
};

export default Services;
