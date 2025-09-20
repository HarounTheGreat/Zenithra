import React from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "./Testimonials.css";

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: "Marie Dubois",
      treatment: "Traitement visage",
      rating: 5,
      text: "Excellente expérience à la clinique Zenithra. Le personnel est très professionnel et les résultats sont exceptionnels.",
    },
    {
      name: "Ahmed Benali",
      treatment: "Soins corporels",
      rating: 5,
      text: "Je recommande vivement cette clinique. L'équipe médicale est compétente et l'environnement très rassurant.",
    },
    {
      name: "Sophie Martin",
      treatment: "Bien-être",
      rating: 5,
      text: "Un service de qualité supérieure. Les soins sont personnalisés et les résultats dépassent mes attentes.",
    },
  ];

  return (
    <section className="testimonials section">
      <div className="container">
        <div
          className="section-title"
          data-aos="fade-up"
        >
          <h2>Témoignages</h2>
          <p>Ce que disent nos patients</p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="testimonial-card__rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i
                    key={i}
                    className="uil uil-star"
                  ></i>
                ))}
              </div>
              <p className="testimonial-card__text">"{testimonial.text}"</p>
              <div className="testimonial-card__author">
                <h4>{testimonial.name}</h4>
                <span>{testimonial.treatment}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
