import React from "react";
import { Container } from "react-bootstrap";
import "./Experience.css";

// Certificates inside `public/certificates/`
const experiences = [
    {
    title: "Junior Intern – Cisco",
    duration: "July–August 2024",
    details: [
      "Worked on TCP/IP protocol test cases and routing algorithms.",
      "Participated in Agile sprints and created technical documentation."
    ],
    certificate: "/certificates/cisco_certificate.pdf",
    color: "gradient-purple"
  },
  {
    title: "Web Development Intern – Sailotech Pvt Ltd",
    duration: "June–July 2025",
    details: [
      "Developed and optimized a responsive website using WordPress, PHP, and CSS.",
      "Collaborated with clients and senior developers to deliver user-friendly features."
    ],
    certificate: "/certificates/sailotech_certificate.pdf",
    color: "gradient-blue"
  },
];

const Experience = () => (
  <section id="experience" className="experience-section py-3">
    <Container>
      <h2 className="text-center mb-5 experience-title">Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className={`experience-timeline-item ${idx % 2 === 0 ? "left" : "right"} ${exp.color}`}
          >
            <div className="experience-timeline-icon">
            </div>
            <div className="experience-timeline-content">
              <h5>{exp.title}</h5>
              <p className="experience-duration">{exp.duration}</p>
              <ul>
                {exp.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              {exp.certificate && (
                <a
                  href={exp.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light mt-2 fw-semibold"
                >
                  View Certificate
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default Experience;
