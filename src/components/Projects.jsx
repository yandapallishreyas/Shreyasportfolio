import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import "./Projects.css";

const projects = [
  { 
    title: "Hotel Reservation System", 
    desc: "Full-stack booking app with React, Flask, Firebase", 
    details: ["Book rooms with ease", "Realtime availability", "Secure login & payment"], 
    link: "https://github.com/yandapallishreyas/HotelManage",
    tools: ["React", "Flask", "Firebase"] 
  },
  { 
    title: "Campus Student Portal", 
    desc: "Login system with React, Node, MongoDB", 
    details: ["Student login & profile", "Achievements tracking", "Messaging system"], 
    link: "https://github.com/yandapallishreyas/Loginpage",
    tools: ["React", "Node.js", "MongoDB"] 
  },
  { 
    title: "Breast Cancer Classification", 
    desc: "ML project achieving 95% accuracy", 
    details: ["Data preprocessing", "Feature selection", "Model evaluation"], 
    link: "https://github.com/yandapallishreyas/sample",
    tools: ["Python", "Scikit-learn", "Pandas"] 
  },
  { 
    title: "Global Connect Simulation", 
    desc: "Discord-like DBMS using SQL & ER Models", 
    details: ["Database design", "Messaging system", "SQL queries & reports"], 
    link: "https://github.com/yandapallishreyas/Discord_DBMS",
    tools: ["SQL", "ER Models", "Python"] 
  },
  { 
    title: "Coming Soon", 
    desc: "Exciting new project in progress...", 
    details: ["More details coming soon!"], 
    link: "#",
    tools: ["TBA"],
    comingSoon: true
  },
  { 
    title: "Coming Soon", 
    desc: "Stay tuned for updates!", 
    details: ["Exciting features coming up!"], 
    link: "#",
    tools: ["TBA"],
    comingSoon: true
  },
];

const Projects = () => (
  <section id="projects" className="py-5">
    <Container>
      <h2 className="text-center projects-section-title">Projects</h2>
      <Row>
        {projects.map((p, i) => (
          <Col md={6} lg={4} key={i} className="mb-4">
            <Card className={`projects-card h-100 projects-shadow-glow ${p.comingSoon ? "projects-coming-soon" : ""}`} style={{"--i": i}}>
              <Card.Body className="d-flex flex-column">
                <Card.Title className="mb-3 projects-title">{p.title}</Card.Title>
                <Card.Text className="mb-3 projects-desc">{p.desc}</Card.Text>
                <ul className="projects-details mb-4">
                  {p.details.map((d, idx) => <li key={idx}>{d}</li>)}
                </ul>

                <div className="mb-3">
                  {p.tools.map((tool, idx) => (
                    <Badge 
                      bg={p.comingSoon ? "secondary" : "primary"} 
                      key={idx} 
                      className="me-1 projects-tool-badge"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>

                <Button 
                  href={p.comingSoon ? "#" : p.link} 
                  target="_blank" 
                  disabled={p.comingSoon}
                  className={`mt-auto projects-btn-custom ${p.comingSoon ? "projects-btn-soon" : ""}`}
                >
                  {p.comingSoon ? "Stay Tuned" : "GitHub"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Projects;
