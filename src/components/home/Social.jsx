import React from "react";
import "./social.css";
const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/haroun-bouriga-2167a2196/"
        className="home__social-icon"
        target="_blank"
      >
        <i class="bx bxl-linkedin"></i>
      </a>

      <a
        href="https://github.com/HarounTheGreat"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-github-alt"></i>
      </a>

      <a
        href="https://www.facebook.com/haroun.bouriga.75/"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-facebook"></i>
      </a>
    </div>
  );
};

export default Social;
