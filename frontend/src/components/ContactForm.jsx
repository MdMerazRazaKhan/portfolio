import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "", // Honeypot field
  });
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { name, email, subject, message } = formData;

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setErrorMsg("All fields are required.");
      return false;
    }

    if (name.trim().length < 2 || name.trim().length > 100) {
      setErrorMsg("Name must be between 2 and 100 characters.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMsg("Please enter a valid email address.");
      return false;
    }

    if (subject.trim().length < 3 || subject.trim().length > 150) {
      setErrorMsg("Subject must be between 3 and 150 characters.");
      return false;
    }

    if (message.trim().length < 10 || message.trim().length > 5000) {
      setErrorMsg("Message must be between 10 and 5000 characters.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMsg(null);

    if (!validateForm()) {
      setStatus("error");
      return;
    }

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
        setFormData({ name: "", email: "", subject: "", message: "", website: "" });
      } else {
        setStatus("error");
        setErrorMsg(result.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMsg("Connection error. Could not connect to the backend server.");
    }
  };

  return (
    <section id="message" className="contact-form-section">
      <h2 className="section-heading">
        Send <span>Message</span>
      </h2>
      <div className="form-card">
        <form onSubmit={handleSubmit} noValidate>
          {/* Honeypot field - visually hidden to trap bots */}
          <div style={{ display: "none" }} aria-hidden="true">
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              tabIndex="-1"
              autoComplete="off"
              placeholder="Leave this empty"
            />
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Md Meraz Raza Khan"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Your Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="merazrazakhan8240@gmail.com"
                required
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="How can I help you?"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              required
            />
          </div>

          <button type="submit" className="button" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="form-status success" style={{ fontWeight: 600 }}>
              ✓ Message sent successfully! I will reply to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="form-status error" style={{ fontWeight: 600 }}>
              ✗ {errorMsg || "Something went wrong. Please try again."}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
