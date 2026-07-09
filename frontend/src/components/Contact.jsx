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

const PHONE_NUMBER = "+91 82403 65876";
const PHONE_LINK = "918240365876";

const EMAIL_SUBJECT = encodeURIComponent(
  "Opportunity from your Portfolio"
);

const EMAIL_BODY = encodeURIComponent(
  `Hi Meraz,

I visited your portfolio and was impressed with your work.

I would like to connect with you regarding an opportunity.

Looking forward to hearing from you.

Best Regards`
);

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Meraz, I visited your portfolio and would like to connect with you regarding an opportunity."
);

const socials = [
  {
    name: "LinkedIn",
    icon: linkedin,
    url: "https://www.linkedin.com/in/md-meraz-raza-khan-725097282/",
  },
  {
    name: "GitHub",
    icon: github,
    url: "https://github.com/MdMerazRazaKhan",
  },
  {
    name: "LeetCode",
    icon: leetcode,
    url: "https://leetcode.com/u/MD_MERAZ_RAZA_KHAN/",
  },
  {
    name: "GeeksforGeeks",
    icon: gfg,
    url: "https://www.geeksforgeeks.org/profile/merazraza8el5",
  },
  {
    name: "Codeforces",
    icon: codeforces,
    url: "https://codeforces.com/profile/merazrazakhan8240",
  },
  {
    name: "Coding Ninjas",
    icon: codingninjas,
    url: "https://www.naukri.com/code360/profile/7a4551d9-c1aa-4524-96f0-03d0c85ac3d1",
  },
  {
    name: "CodeChef",
    icon: codechef,
    url: "https://www.codechef.com/users/chunk_dawn_21",
  },
  {
    name: "Instagram",
    icon: instagram,
    url: "https://www.instagram.com/_.merazzz?igsh=MWdvZHA1bnFsODBqNQ==",
  },
  {
    name: "Snapchat",
    icon: snapchat,
    url: "https://www.snapchat.com/add/mdmerazrazakh24?share_id=M4Pb34TL4_Q&locale=en-IN",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="achievements-section">
      <h2 className="section-heading">
        Contact <span>Me</span>
      </h2>

      {/* Contact Cards */}

      <div className="contact-grid">
        {/* Phone */}

        <div className="contact-card">
          <div className="contact-icon">
            <img
              src={phoneIcon}
              alt="Phone"
              className="contact-image"
            />
          </div>

          <h3>Phone</h3>

          <p>{PHONE_NUMBER}</p>

          <a
            href={`tel:${PHONE_LINK}`}
            className="button button-secondary"
          >
            Call Now
          </a>
        </div>

        {/* Email */}

        <div className="contact-card">
          <div className="contact-icon">
            <img
              src={emailIcon}
              alt="Email"
              className="contact-image"
            />
          </div>

          <h3>Email</h3>

          <p>{CONTACT_EMAIL}</p>

          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${EMAIL_SUBJECT}&body=${EMAIL_BODY}`}
            className="button button-secondary"
          >
            Send Email
          </a>
        </div>

        {/* WhatsApp */}

        <div className="contact-card">
          <div className="contact-icon">
            <img
              src={whatsappIcon}
              alt="WhatsApp"
              className="contact-image"
            />
          </div>

          <h3>WhatsApp</h3>

          <p>{PHONE_NUMBER}</p>

          <a
            href={`https://wa.me/${PHONE_LINK}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-secondary"
          >
            Message on WhatsApp
          </a>
        </div>
      </div>

      {/* Social Profiles */}

      <div className="social-grid">
        {socials.map((social) => (
          <div key={social.name} className="contact-card social-card">
            <div className="contact-icon social-icon-wrapper">
              <img
                src={social.icon}
                alt={social.name}
                className="social-icon"
              />
            </div>

            <h3>{social.name}</h3>

            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="connect-button"
            >
              Connect 
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;