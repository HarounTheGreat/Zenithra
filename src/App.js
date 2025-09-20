import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import "./App.css";

// Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Protocols from "./Pages/Protocols";
import Gallery from "./Pages/Gallery";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Admin from "./Pages/Admin";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="App">
          <Header />
          <main className="main">
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/about"
                element={<About />}
              />
              <Route
                path="/services"
                element={<Services />}
              />
              <Route
                path="/protocols"
                element={<Protocols />}
              />
              <Route
                path="/gallery"
                element={<Gallery />}
              />
              <Route
                path="/blog"
                element={<Blog />}
              />
              <Route
                path="/contact"
                element={<Contact />}
              />
              <Route
                path="/admin"
                element={<Admin />}
              />
            </Routes>
          </main>
          <Footer />
          <ScrollUp />
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;
