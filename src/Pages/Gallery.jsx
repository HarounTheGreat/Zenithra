import React from "react";
import { useTranslation } from "react-i18next";
import GalleryHero from "../components/gallery/GalleryHero";
import BeforeAfter from "../components/gallery/BeforeAfter";
import TreatmentGallery from "../components/gallery/TreatmentGallery";
import "./Gallery.css";

const Gallery = () => {
  const { t } = useTranslation();

  return (
    <div className="gallery-page">
      <GalleryHero />
      <BeforeAfter />
      <TreatmentGallery />
    </div>
  );
};

export default Gallery;
