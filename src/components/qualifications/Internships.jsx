import React from "react";
import "./qualifications.css";

const Internships = () => {
  return (
    <section className="qualification section">
      <h2 className="section__title">Internships</h2>
      <span className="section__subtitle">My Professional Training</span>

      <div className="qualification__container container">
        <div className="qualification__sections">
          <div className="qualification__content qualification__content-active">
            {/* Internship 1 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Smarteo</h3>
                <span className="qualification__subtitle">
                  End of Year Project
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 01/2023 - 05/2023
                </div>
                <span className="qualification__subtitle">
                  Designed and developed a blood donation platform.
                  <br />
                  <strong>Tech Stack:</strong> MERN Stack, Figma, Photoshop,
                  Python, Power BI
                </span>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Internship 2 */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">ITGATE-GROUP</h3>
                <span className="qualification__subtitle">
                  End of Studies Internship
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 01/2021 - 05/2021
                </div>
                <span className="qualification__subtitle">
                  Designed and developed a social media sentiment analysis
                  platform.
                  <br />
                  <strong>Tech Stack:</strong> Django, Python
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;
