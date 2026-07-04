import { CONTACT_EMAIL } from "../utils/constants";

import phoneIcon from "../assets/icons/phone.svg";
import emailIcon from "../assets/icons/gmail.svg";
import whatsappIcon from "../assets/icons/whatsapp.svg";

import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import leetcode from "../assets/icons/leetcode.svg";
import gfg from "../assets/icons/geeksforgeeks.svg";
import codeforces from "../assets/icons/codeforces.svg";
import codingninjas from "../assets/icons/codingninjas.svg";
import codechef from "../assets/icons/codechef.svg";
import instagram from "../assets/icons/instagram.svg";
import snapchat from "../assets/icons/snapchat.svg";

const socials = [
  {
    name: "LinkedIn",
    icon: linkedin,
    url: "https://linkedin.com/in/YOUR_USERNAME",
  },
  {
    name: "GitHub",
    icon: github,
    url: "https://github.com/YOUR_USERNAME",
  },
  {
    name: "LeetCode",
    icon: leetcode,
    url: "https://leetcode.com/YOUR_USERNAME",
  },
  {
    name: "GeeksforGeeks",
    icon: gfg,
    url: "https://auth.geeksforgeeks.org/user/YOUR_USERNAME",
  },
  {
    name: "Codeforces",
    icon: codeforces,
    url: "https://codeforces.com/profile/YOUR_USERNAME",
  },
  {
    name: "Coding Ninjas",
    icon: codingninjas,
    url: "https://www.codingninjas.com/profile/YOUR_USERNAME",
  },
  {
    name: "CodeChef",
    icon: codechef,
    url: "https://www.codechef.com/users/YOUR_USERNAME",
  },
  {
    name: "Instagram",
    icon: instagram,
    url: "https://instagram.com/YOUR_USERNAME",
  },
  {
    name: "Snapchat",
    icon: snapchat,
    url: "https://snapchat.com/add/YOUR_USERNAME",
  },
];

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="section-heading">Contact Me</h2>

      {/* Contact Cards */}

      <div className="contact-grid">

        <div className="contact-card">
          <div className="contact-icon">
            <img src={phoneIcon} alt="Phone" className="contact-image" />
          </div>

          <h3>Phone</h3>

          <p>+91 82403 65876</p>

          <a href="tel:+918240365876" className="button button-secondary">
            Call Now
          </a>
        </div>

        <div className="contact-card">
          <div className="contact-icon">
            <img src={emailIcon} alt="Email" className="contact-image" />
          </div>

          <h3>Email</h3>

          <p>{CONTACT_EMAIL}</p>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="button button-secondary"
          >
            Send Email
          </a>
        </div>

        <div className="contact-card">
          <div className="contact-icon">
            <img src={whatsappIcon} alt="WhatsApp" className="contact-image" />
          </div>

          <h3>WhatsApp</h3>

          <p>+91 82403 65876</p>

          <a
            href="https://wa.me/918240365876"
            target="_blank"
            rel="noreferrer"
            className="button button-secondary"
          >
            Message on WhatsApp
          </a>
        </div>
      </div>

      {/* Social Cards */}

      <div className="social-grid">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            className="contact-card social-card"
          >
            <div className="contact-icon social-icon-wrapper">
              <img
                src={social.icon}
                alt={social.name}
                className="social-icon"
              />
            </div>

            <h3>{social.name}</h3>
            <span className="connect-button">Connect</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;