import { CONTACT_EMAIL } from "../utils/constants";

const Contact = () => (
  <section id="contact">
    <h2 className="section-heading">Contact Me</h2>
    <div className="contact-grid">
      <div className="contact-card">
        <div className="contact-icon">📞</div>
        <h3>Phone</h3>
        <p>+1 (123) 456-7890</p>
        <a className="button button-secondary" href="tel:+11234567890">
          Call Now
        </a>
      </div>
      <div className="contact-card">
        <div className="contact-icon">✉️</div>
        <h3>Email</h3>
        <p>{CONTACT_EMAIL}</p>
        <a className="button button-secondary" href={`mailto:${CONTACT_EMAIL}`}>
          Send Email
        </a>
      </div>
      <div className="contact-card">
        <div className="contact-icon">💬</div>
        <h3>WhatsApp</h3>
        <p>+1 (123) 456-7890</p>
        <a className="button button-secondary" href="https://wa.me/11234567890" target="_blank" rel="noreferrer">
          Message on WhatsApp
        </a>
      </div>
    </div>
    <div className="contact-map">
      <h3>Find Me On Map</h3>
      <div className="map-placeholder">Map placeholder - Replace with Google Maps embed</div>
    </div>
  </section>
);

export default Contact;
