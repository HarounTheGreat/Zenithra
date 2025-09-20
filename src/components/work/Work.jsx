import React from "react";
import "./work.css";
import Works from "./Works";
const Work = () => {
  return (
    <section className="work section" id="achievements">
      <h2 className="section__title"> Achievements</h2>
      <span className="section__subtitle">Most Recent Achievements</span>
      <Works />
    </section>
  );
};

export default Work;
