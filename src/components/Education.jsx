import React from "react";
import { Container } from "react-bootstrap";
import { FaGraduationCap, FaSchool, FaUniversity } from "react-icons/fa";
import "./Education.css";

const educationData = [
  { institute: "The Future Kid’s School", degree: "Class X", cgpa: "91.2%", year: "2021", icon: <FaSchool /> },
  { institute: "Sri Chaitanya Junior College", degree: "Class XI–XII", cgpa: "9.8/10", year: "2021–2023", icon: <FaUniversity /> },
  { institute: "VNR VJIET, Hyderabad", degree: "B.Tech CSE", cgpa: "9.33/10", year: "2023–2027", icon: <FaGraduationCap /> },
];

const Education = () => (
  <section id="education" className="education-section py-5">
    <Container>
      <h2 className="text-center mb-5 education-title">Education</h2>
      <div className="education-timeline">
        {educationData.map((edu, idx) => (
          <div key={idx} className="timeline-item fade-in" style={{ animationDelay: `${0.5 + idx * 0.5}s` }}>
            <div className="timeline-icon">{edu.icon}</div>
            <div className="timeline-content">
              <h5>{edu.institute}</h5>
              <p>{edu.degree} | GPA: {edu.cgpa} ({edu.year})</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default Education;
