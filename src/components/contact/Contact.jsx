import "./contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="section__title">Get in Touch</h2>
      <span className="section__subtitle " style={{ marginBottom: "1%" }}>
        Talk to me
      </span>

      <div style={{ marginBottom: "1%" }}>
        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                harounbouriga99@gmail.com
              </span>
              <a
                href="mailto:harounbouriga99@gmail.com"
                className="contact__button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">WhatsApp</h3>
              <span className="contact__card-data">+216 93 234 428</span>
              <a
                href="https://api.whatsapp.com/send?phone=21693234428&text=Hello, more information!"
                className="contact__button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-linkedin contact__card-icon"></i>
              <h3 className="contact__card-title">LinkedIn</h3>
              <span className="contact__card-data">Haroun Bouriga</span>
              <a
                href="https://www.linkedin.com/in/haroun-bouriga-2167a2196/"
                className="contact__button"
              >
                Connect with me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
