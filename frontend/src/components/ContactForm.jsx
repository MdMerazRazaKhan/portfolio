import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus(result.error || "error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="message" className="contact-form-section">
      <h2 className="section-heading">Send Message</h2>
      <div className="form-card">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="name">Your Name</label>
              <input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
            </div>
            <div className="form-field">
              <label htmlFor="email">Your Email</label>
              <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="johndoe@example.com" required />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="subject">Subject</label>
            <input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="How can I help you?" required />
          </div>

          <div className="form-field">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" rows="6" value={formData.message} onChange={handleChange} placeholder="Write your message here..." required />
          </div>

          <button type="submit" className="button">
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && <p className="form-status success">Message sent successfully!</p>}
          {status === "error" && <p className="form-status error">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
