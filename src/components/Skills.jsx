import React from "react";
import { Container } from "react-bootstrap";
import { 
  SiCplusplus, SiPython, SiJavascript, SiMysql, SiReact, SiNodedotjs,
  SiExpress, SiFirebase, SiGit, SiMongodb, SiPostgresql, SiTypescript
} from "react-icons/si";
import { FaJava } from "react-icons/fa"; // Java icon from Font Awesome
import "./Skills.css";

const skills = [
  { name: "C++", icon: <SiCplusplus /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "SQL", icon: <SiMysql /> },
  { name: "React", icon: <SiReact /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Git", icon: <SiGit /> },
];

const Skills = () => (
  <section id="skills" className="techskills-section py-5">
    <Container>
      <h2 className="text-center mb-5 techskills-section-title">Technical Skills</h2>
      <div className="techskills-grid">
        {skills.map((s, i) => (
          <div key={i} className="techskills-item">
            <div className="techskills-icon">{s.icon}</div>
            <div className="techskills-name">{s.name}</div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default Skills;
