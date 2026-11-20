import React from "react";
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

const contacts = [
  {
    icon: <FaPhoneAlt />,
    label: "Phone",
    value: "+91 6281311142",
    link: "tel:+916281311142",
    color: "#6a11cb"
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "yandapallishreyas@gmail.com",
    link: "mailto:yandapallishreyas@gmail.com",
    color: "#2575fc"
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "github.com/yandapallishreyas",
    link: "https://github.com/yandapallishreyas",
    color: "#333"
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "linkedin.com/shreyas-yandapalli",
    link: "https://www.linkedin.com/in/shreyas-yandapalli/",
    color: "#0077b5"
  }
];

const Contact = () => (
  <section id="contact" className="contact-section">
    <h2 className="section-title">Contact Me</h2>
    <div className="contact-grid">
      {contacts.map((c, i) => (
        <a
          href={c.link}
          target="_blank"
          rel="noopener noreferrer"
          key={i}
          className="contact-card"
          style={{ borderTop: `4px solid ${c.color}` }}
        >
          <div className="contact-icon" style={{ backgroundColor: c.color }}>
            {c.icon}
          </div>
          <h3 className="contact-label">{c.label}</h3>
          <p className="contact-value">{c.value}</p>
        </a>
      ))}
    </div>
  </section>
);

export default Contact;
