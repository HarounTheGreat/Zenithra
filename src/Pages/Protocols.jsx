import React from "react";
import { useTranslation } from "react-i18next";
import ProtocolsHero from "../components/protocols/ProtocolsHero";
import ConsultationProcess from "../components/protocols/ConsultationProcess";
import TreatmentSteps from "../components/protocols/TreatmentSteps";
import Safety from "../components/protocols/Safety";
import "./Protocols.css";

const Protocols = () => {
  const { t } = useTranslation();

  return (
    <div className="protocols-page">
      <ProtocolsHero />
      <ConsultationProcess />
      <TreatmentSteps />
      <Safety />
    </div>
  );
};

export default Protocols;
