import React, { useState, useEffect } from "react";
import sDrive_1 from "../../assets/anbester.jpg";
import sDrive_2 from "../../assets/anbester_1.jpg";

const PersonalProject = () => {
  const video1Link =
    "https://drive.google.com/file/d/1rcq0fHewZRLpl5vnSCVDe96XPH_KxWEX/preview";
  const video2Link =
    "https://drive.google.com/file/d/1WEaUf4XhcrzUp8X1Q1OemLcRlYRvdQ2e/preview";

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive styles
  const responsiveStyles = {
    section: {
      padding: "2rem 1rem",
      textAlign: "center",
    },
    title: {
      fontSize: isMobile ? "1.5rem" : "2rem",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
    subtitle: {
      fontSize: isMobile ? "1rem" : "1.2rem",
      color: "#666",
      marginBottom: "2rem",
      display: "block",
    },
    mediaGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
      gap: "1rem",
      marginTop: "1.5rem",
    },
    iframe: {
      width: "100%",
      height: isMobile ? "200px" : "300px",
      border: "none",
    },
  };

  return (
    <section style={responsiveStyles.section}>
      <h2 style={responsiveStyles.title}>
        From End-of-Study Project to AI-Driven Platform
      </h2>
      <span style={responsiveStyles.subtitle}>
        AI-Powered Business Insights Platform
      </span>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
        <div
          style={{
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: "1rem",
            padding: "1.5rem",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              marginBottom: "1rem",
            }}
          >
            Developed a prototype for a commercial platform based on my
            end-of-studies project, aiming to provide AI-powered business
            insights.
          </h3>

          {/* Media Section */}
          <div style={responsiveStyles.mediaGrid}>
            {/* Image 1 */}
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "1rem",
                overflow: "hidden",
                transition: "transform 0.3s ease",
              }}
            >
              <img
                src={sDrive_1}
                alt="Project Screenshot 1"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            {/* Image 2 */}
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "1rem",
                overflow: "hidden",
                transition: "transform 0.3s ease",
              }}
            >
              <img
                src={sDrive_2}
                alt="Project Screenshot 2"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            {/* Video 1 (Google Drive Video) */}
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "1rem",
                overflow: "hidden",
                transition: "transform 0.3s ease",
              }}
            >
              <iframe
                src={video1Link}
                style={responsiveStyles.iframe}
                allow="autoplay"
              />
            </div>

            {/* Video 2 (Google Drive Video) */}
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "1rem",
                overflow: "hidden",
                transition: "transform 0.3s ease",
              }}
            >
              <iframe
                src={video2Link}
                style={responsiveStyles.iframe}
                allow="autoplay"
              />
            </div>
          </div>

          {/* Description Section */}
          <div style={{ textAlign: "left", marginTop: "1.5rem" }}>
            <ul style={{ listStyle: "none", padding: "0" }}>
              <li style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>
                <strong>Team Formation & Leadership:</strong> Built and managed
                a dynamic team to tackle complex AI challenges.
              </li>
              <li style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>
                <strong>AI Open Challenge 2022 Winner:</strong> Led a team to
                1st place, showcasing innovation, problem-solving, and technical
                excellence.
              </li>
              <li style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>
                <strong>Tools Used:</strong> Angular, Python (Web Scraping, AI),
                Power BI
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalProject;
