import "../App.css";
import React from "react";
import Header from "../components/header/Header";
import Home from "../components/home/Home";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Services from "../components/services/Services";
import Qualifications from "../components/qualifications/Qualifications";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import ScrollDown from "../components/home/ScrollDown";
import ScrollUp from "../components/scrollup/ScrollUp";
import Work from "../components/work/Work";

const ProPage = () => {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <About />
        <Qualifications />
        <Work />
        <Skills />
        <Services />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </div>
  );
};

export default ProPage;
