import React from "react";
import "./qualifications.css";

const Experience = () => {
  return (
    <section className="qualification section" id="experience">
      {/* <h2 className="section__title">
        Experience
      </h2> */}
      <h2 className="section__title">Full-Stack Web Developer at Start-up</h2>
      <span className="section__subtitle">
        <div className="qualification__calendar">
          <i className="uil uil-calendar-alt"></i> 06/2023 - Present
        </div>
      </span>
      <div className="qualification__container container">
        <div className="qualification__sections">
          <div className="qualification__content qualification__content-active">
            {/* Project 1 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Taxiora Backoffice </h3>
                <span className="qualification__subtitle">
                  A comprehensive web application for managing clients, taxis,
                  drivers, invoices, pricing, stock, and administration.
                  <br />
                  <strong>Tech Stack:</strong> React.js (Redux, Zod), PHP
                  (Symfony)
                </span>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Taxiora Booking</h3>
                <span className="qualification__subtitle">
                  A communication system between the booking mobile app and
                  taximeters, ensuring seamless ride management.
                  <br />
                  <strong>Tech Stack:</strong> Node.js, Socket, RabbitMQ,
                  Firebase, PostgreSQL, SQL, Cron Jobs
                </span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  AMR Dashboard monitoring
                </h3>
                <span className="qualification__subtitle">
                  web application for managing an Autonomous Mobile Robot (AMR)
                  fleet.
                  <br />
                  <strong>Tech Stack:</strong> PERN Stack, ROS, Gazebo
                </span>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Project 4 */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Jobzioo Back-Office </h3>
                <span className="qualification__subtitle">
                  An internal system for Jobzioo Tunisia to streamline user
                  management, candidate tracking, job placement, and reporting.
                  <br />
                  <strong>Tech Stack:</strong> Angular
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
