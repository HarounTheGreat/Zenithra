import React from "react";
import "./skills.css";
import Backend from "./Backend";
import Frontend from "./Frontend";
import Design from "./Design";
import Database from "./Database";
import DataAnalysis from "./DataAnalysis";
import DevOps from "./DevOps";
const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical level</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
        <Database />
        <DataAnalysis />
        <DevOps />
        <Design />
      </div>
    </section>
  );
};

export default Skills;
