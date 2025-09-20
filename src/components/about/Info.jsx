import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-code-alt about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">2 years</span>
      </div>

      <div className="about__box">
        <i class="bx bx-glasses about__icon"></i>
        <h3 className="about__title">Skills</h3>
        <span className="about__subtitle">
          Strong in scalable app development
        </span>
      </div>

      <div className="about__box">
        <i class="bx bx-award about__icon"></i>
        <h3 className="about__title">Passion</h3>
        <span className="about__subtitle">
          Eager to collaborate and drive success
        </span>
      </div>
    </div>
  );
};

export default Info;
