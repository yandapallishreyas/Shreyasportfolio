import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode, SiHackerrank, SiCodeforces } from "react-icons/si";
import "./Hero.css";

// If needed, add local images for CodeChef and AtCoder in assets folder
import CodeChefIcon from "../assets/codechef.png";
import AtCoderIcon from "../assets/atcoder.png";
const profiles = [
  { name: "LeetCode", icon: <SiLeetcode />, link: "https://leetcode.com/yandashreyas24/" },
  { name: "HackerRank", icon: <SiHackerrank />, link: "https://www.hackerrank.com/yandapallishrey1" },
  { name: "Codeforces", icon: <SiCodeforces />, link: "https://codeforces.com/profile/yandapallishreyas" },
  { name: "CodeChef", icon: <img src={CodeChefIcon} alt="CodeChef" className="cp-icon" />, link: "https://www.codechef.com/users/yandashreyas24" },
  { name: "AtCoder", icon: <img src={AtCoderIcon} alt="AtCoder" className="cp-icon" />, link: "https://atcoder.jp/users/yandashreyas" },

];

const Hero = () => {
  return (
    <section id="hero" className="hero-section d-flex align-items-center text-white">
      <Container>
<Row className="align-items-center flex-column-reverse flex-md-row">
          {/* Left Content */}
          <Col md={7} className="text-left">
            <h1 className="hero-title fade-in">
              I am <span className="gradient-text">Shreyas Yandapalli</span>
            </h1>

            <h3
              className="mb-4 fade-in delay-1"
              style={{
                marginLeft: "0px",
                background: "linear-gradient(300deg, #00d2ff, #3a7bd5, #c77dfd)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer",
                    "Competitive Programmer",
                    "Machine Learning Enthusiast"
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </h3>

            <p className="hero-description fade-in delay-2">
              Currently pursuing Computer Science Engineering (3rd Year), I love building scalable and user-friendly digital products.  
              With strong skills in DSA and a curious mindset for AI/ML, I aim to create solutions that balance performance and creativity.  
              Beyond coding, I enjoy collaborating, exploring new technologies, and contributing to innovative communities. 🚀 
            </p>

            {/* Coding / Social Profiles */}
            <div className="profile-links fade-in delay-2">
              {profiles.map((p, i) => (
                <a href={p.link} target="_blank" rel="noopener noreferrer" key={i} className="profile-link">
                  {p.icon} {p.name}
                </a>
              ))}
            </div>
          </Col>

          {/* Right Terminal */}
          <Col md={5} className="d-flex justify-content-center fade-in  mb-4 mb-md-0 delay-2">
            <div className="terminal-box">
              <div className="terminal-header">
                <span className="circle red"></span>
                <span className="circle yellow"></span>
                <span className="circle green"></span>
                <span className="terminal-title">terminal</span>
              </div>

              <div className="terminal-content">
                <p>&gt; initializing portfolio...</p>
                <p>&gt; loading skills...</p>
                <p>&gt; setting up projects...</p>
                <p className="yell">&gt; compiling code...</p>
                <p className="success">&gt; build successful ✅</p>
                <p className="success">[ok] model ready 🚀</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
