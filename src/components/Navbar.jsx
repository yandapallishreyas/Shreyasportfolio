import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";
import ResumePDF from "../assets/Shreyas_Resume.pdf";

const MyNavbar = () => {
  return (
    <Navbar expand="lg" sticky="top" className="navbar-gradient">
      <Container fluid className="d-flex justify-content-between align-items-center">
        {/* Brand / Header */}
        <Navbar.Brand href="#hero" className="d-flex align-items-center">
          <span style={{ color: '#00d2ff' }}>&lt;Shreyas&gt;</span>
          <span style={{ color: '#c77dfd', marginLeft: '8px' }}>&lt;/Yandapalli&gt;</span>
        </Navbar.Brand>

        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="navbar-collapse" />

        {/* Nav links */}
        <Navbar.Collapse id="navbar-collapse">
          <Nav className="ms-auto d-flex flex-column flex-lg-row align-items-start align-lg-items-center gap-2 gap-lg-0">
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href={ResumePDF} target="_blank" rel="noopener noreferrer">Resume</Nav.Link>
            <Nav.Link href="#achievements">Achievements</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
