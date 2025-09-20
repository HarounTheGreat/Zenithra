import React from "react";
import { useTranslation } from "react-i18next";
import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import Map from "../components/contact/Map";
import "./Contact.css";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-page">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <Map />
    </div>
  );
};

export default Contact;
