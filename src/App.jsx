import { createElement, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import {
  FaArrowRight,
  FaArrowUp,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import {
  SiCodechef,
  SiCodeforces,
  SiHackerrank,
  SiLeetcode,
} from "react-icons/si";
import AtCoderIcon from "./assets/atcoder.png";
import CodeChefIcon from "./assets/codechef.png";
import ResumePDF from "./assets/Shreyas_Resume.pdf";
import TuringHutIcon from "./assets/turinghut.png";
import NSSIcon from "./assets/nss.png";
import StudentForceIcon from "./assets/studentforce.png";
import VJTheatroIcon from "./assets/vjtheatro.png";
import ISTEIcon from "./assets/istevnrvjiet.png";
import "./index.css";

const roles = ["full-stack developer", "problem solver", "machine learning enthusiast"];
const navigation = [
  ["Work", "#projects"],
  ["Experience", "#experience"],
  ["About", "#about"],
];

const destinations = [
  { number: "01", title: "Selected work", detail: "Projects and things I’ve built.", href: "#projects" },
  { number: "02", title: "My journey", detail: "Experience and education.", href: "#experience" },
  { number: "03", title: "What I know", detail: "Tools, technologies, and interests.", href: "#about" },
  { number: "04", title: "People & places", detail: "Communities that make the work better.", href: "#community" },
  { number: "05", title: "Say hello", detail: "Have an idea? Let’s make something useful.", href: "#contact" },
];

const projects = [
  {
    number: "01",
    category: "FULL-STACK · WEB APP",
    title: "Hotel Reservation System",
    description:
      "A full-stack hotel booking experience with room discovery, real-time availability, and secure sign-in.",
    stack: ["React", "Flask", "Firebase"],
    href: "https://github.com/yandapallishreyas/HotelManage",
    style: "project-lime",
    visual: "stay.",
  },
  {
    number: "02",
    category: "FULL-STACK · CAMPUS",
    title: "Campus Student Portal",
    description:
      "A central space for student profiles, achievements, and communication, built around a React and MongoDB stack.",
    stack: ["React", "Node.js", "MongoDB"],
    href: "https://github.com/yandapallishreyas/Loginpage",
    style: "project-lilac",
    visual: "campus",
  },
  {
    number: "03",
    category: "MACHINE LEARNING · CLASSIFICATION",
    title: "Breast Cancer Classification",
    description:
      "A supervised-learning project focused on data preparation, feature selection, and carefully evaluated classification.",
    stack: ["Python", "Scikit-learn", "Pandas"],
    href: "https://github.com/yandapallishreyas/sample",
    style: "project-blue",
    visual: "model_01",
  },
  {
    number: "04",
    category: "DATABASES · SYSTEM DESIGN",
    title: "Global Connect",
    description:
      "A Discord-inspired database simulation exploring relational modeling, messaging workflows, and useful SQL reports.",
    stack: ["SQL", "ER models", "Python"],
    href: "https://github.com/yandapallishreyas/Discord_DBMS",
    style: "project-orange",
    visual: "connect",
  },
];

const experience = [
  {
    period: "JUL 2026 — PRESENT",
    role: "Software Engineering Intern",
    company: "The Hartford, India",
    description:
      "Completed Java Full-Stack Development training covering Java, Spring Boot, REST APIs, MySQL, Angular, NgRx, and RxJS. Gained hands-on experience in Playwright-based web application testing and AWS DevOps. Developed and presented a full-stack capstone project integrating Angular, Spring Boot, and MySQL to The Hartford leadership.",
    certificate: "/certificates/hartford_certificate.pdf",
  },
  {
    period: "JUN — JUL 2025",
    role: "Web Development Intern",
    company: "Sailotech Pvt Ltd",
    description:
      "Built and refined a responsive website with WordPress, PHP, and CSS. Worked with clients and senior developers to shape user-friendly features.",
    certificate: "/certificates/sailotech_certificate.pdf",
  },
  {
    period: "JUL — AUG 2024",
    role: "Junior Intern",
    company: "Cisco",
    description:
      "Worked on TCP/IP protocol test cases and routing algorithms, contributing to Agile sprints and technical documentation.",
    certificate: "/certificates/cisco_certificate.pdf",
  },
];

const skills = [
  "C++", "Java", "Python", "C", "JavaScript", "TypeScript", "SQL",
  "HTML5", "CSS3", "React", "Angular", "Bootstrap", "Tailwind CSS", "NgRx", "RxJS",
  "Node.js", "Express.js", "Spring Boot", "Flask", "REST APIs", "Java Servlets",
  "MySQL", "MongoDB", "Firebase", "Firestore", "Playwright", "Postman", "JUnit",
  "Docker", "AWS", "Git", "GitHub", "Data Structures & Algorithms",
  "Object-Oriented Programming", "DBMS", "Operating Systems", "Computer Networks",
];

const achievements = [
  {
    number: "01",
    title: "CodeRush · 1st place",
    detail: "Won the college-level Convergence 2025 coding contest among 500+ participants.",
  },
  {
    number: "02",
    title: "HackerRank · 5-star",
    detail: "Earned 5-star recognition in problem solving through consistent algorithm practice.",
  },
  {
    number: "03",
    title: "LeetCode · 1500+ rating",
    detail: "Reached a 1500+ contest rating and solved more than 200 problems.",
  },
  {
    number: "04",
    title: "Smart India Hackathon 2025",
    detail: "Advanced through the campus round with a project addressing a real-world challenge.",
  },
  {
    number: "05",
    title: "Turing Cup & Convergence",
    detail: "Finalist in Turing Cup 2k25 and the Convergence coding contest.",
  },
];

const communities = [
  {
    image: TuringHutIcon,
    title: "Turing Hut · VNRVJIET",
    role: "Public Relations & Documentation Head",
    description:
      "Leading PR and documentation activities, coordinating competitive programming contests and contributing to major technical events like Turing Cup 2K26.",
  },
  {
    image: ISTEIcon,
    title: "ISTE · VNRVJIET",
    role: "Public Relations & Multimedia Head",
    description:
      "Currently serving in the second phase of the ISTE committee. Coordinating public relations, managing event communications, and contributing to multiple hackathons including the Convergence Software Hackathon 2k26 and AI Engineering Hackathon.",
  },
  {
    image: NSSIcon,
    title: "NSS · VNRVJIET",
    role: "Logistics Supervisor",
    description:
      "Coordinated volunteers and logistics for the Mega Blood Donation Camp 2025, ensuring smooth event execution.",
  },
  {
    image: StudentForceIcon,
    title: "StudentForce",
    role: "Former Social Media Head",
    description:
      "Created social media campaigns, managed digital outreach, and improved event engagement and visibility.",
  },
];

const profiles = [
  { label: "LeetCode", href: "https://leetcode.com/yandashreyas24/", icon: SiLeetcode },
  { label: "HackerRank", href: "https://www.hackerrank.com/yandapallishrey1", icon: SiHackerrank },
  { label: "Codeforces", href: "https://codeforces.com/profile/yandapallishreyas", icon: SiCodeforces },
  { label: "CodeChef", href: "https://www.codechef.com/users/yandashreyas24", image: CodeChefIcon },
];

function Reveal({ children, className = "", delay = 0, as = "div" }) {
  const Component = motion[as] ?? motion.div;
  const reduceMotion = useReducedMotion();

  return (
    <Component
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: reduceMotion ? 0 : 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}

function SectionHeading({ eyebrow, title, note }) {
  return (
    <Reveal className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <div className="section-heading-row">
        <h2>{title}</h2>
        {note && <p className="section-note">{note}</p>}
      </div>
    </Reveal>
  );
}

function RobotGuide() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="robot-guide" aria-label="Orbit, your portfolio guide">
      <motion.div
        className="robot-speech"
        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.25 }}
      >
        <span className="robot-speech-label"><span /> ORBIT · YOUR GUIDE</span>
        <p>Hi! Pick a destination and I&apos;ll point you there.</p>
        <span className="speech-tail" />
      </motion.div>
      <motion.div
        className="robot"
        initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.96 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: [0, -6, 0], scale: 1 }}
        transition={reduceMotion
          ? { duration: 0 }
          : { opacity: { duration: 0.55 }, y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" } }}
        aria-hidden="true"
      >
        <span className="robot-antenna"><i /></span>
        <span className="robot-ear robot-ear-left" />
        <span className="robot-ear robot-ear-right" />
        <span className="robot-head">
          <span className="robot-face">
            <i className="robot-eye" />
            <i className="robot-eye" />
            <i className="robot-mouth" />
          </span>
        </span>
        <span className="robot-neck" />
        <span className="robot-body">
          <span className="robot-chest"><i /><b>O</b><i /></span>
          <span className="robot-body-label">HERE TO HELP</span>
        </span>
        <span className="robot-arm robot-arm-left" />
        <span className="robot-arm robot-arm-right"><i /></span>
        <span className="robot-foot robot-foot-left" />
        <span className="robot-foot robot-foot-right" />
        <span className="robot-ground" />
      </motion.div>
      <p className="robot-caption">ORBIT MK. 01 <span>READY TO EXPLORE</span></p>
    </div>
  );
}

function DestinationMap() {
  return (
    <section className="destination-section section-wrap" id="destinations">
      <Reveal className="destination-intro">
        <p className="eyebrow"><span className="status-dot" /> MY PORTFOLIO, YOUR ROUTE</p>
        <h2>Where would<br />you like to <span>go?</span></h2>
        <p>Choose a stop. Orbit will get you there.</p>
      </Reveal>
      <div className="destination-list">
        {destinations.map((destination, index) => (
          <Reveal delay={index * 0.045} key={destination.number}>
            <a className="destination-link" href={destination.href}>
              <span className="destination-number">{destination.number}</span>
              <span className="destination-copy">
                <strong>{destination.title}</strong>
                <small>{destination.detail}</small>
              </span>
              <FaArrowRight aria-hidden="true" />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function App() {
  const [activeRole, setActiveRole] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const experienceRef = useRef(null);
  const timelineProgress = useScroll({
    target: experienceRef,
    offset: ["start 70%", "end 65%"],
  }).scrollYProgress;
  const timelineScale = useSpring(timelineProgress, { stiffness: 95, damping: 28 });

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveRole((current) => (current + 1) % roles.length);
    }, 3500);
    return () => window.clearInterval(timer);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Shreyas Yandapalli, home" style={{ marginLeft: "0.5rem" }}>
          SY<span>.</span>
        </a>
        <button
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav
          className={`primary-navigation${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          {navigation.map(([label, href], index) => (
            <a key={href} href={href} onClick={closeMenu}>
              <span className="nav-index">0{index + 1}</span> {label}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let&apos;s talk <FaArrowUp aria-hidden="true" />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-grid">
            <div className="hero-copy">
              <Reveal>
                <p className="eyebrow"><span className="status-dot" /> AVAILABLE FOR WHAT&apos;S NEXT</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h1>
                  A curious mind.
                  <br />
                  <span className="hero-highlight">A little robot.</span>
                  <br />
                  A lot to explore.
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="hero-role" aria-live="polite">
                  <span className="role-prefix">I&apos;m a</span>
                  <span className="role-window">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={roles[activeRole]}
                        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
                        transition={{ duration: 0.3 }}
                      >
                        {roles[activeRole]}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="hero-description">
                  I&apos;m Shreyas, a Computer Science student at VNR VJIET. I build useful
                  digital things, learn by doing, and bring people along for the journey.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="hero-actions">
                  <a className="button button-primary" href="#destinations">
                    Meet your guide <FaArrowRight aria-hidden="true" />
                  </a>
                  <a className="button button-quiet" href={ResumePDF} target="_blank" rel="noreferrer">
                    View Resume <FaArrowUp aria-hidden="true" />
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal className="hero-art" delay={0.12}>
              <RobotGuide />
            </Reveal>
          </div>
          <a className="scroll-cue" href="#destinations">
            <span>CHOOSE YOUR NEXT STOP</span> <FaArrowRight aria-hidden="true" />
          </a>
          <div className="hero-index" aria-hidden="true">01 — 05 STOPS</div>
        </section>

        <DestinationMap />

        <section className="projects-section section-wrap" id="projects">
          <SectionHeading
            eyebrow="A FEW THINGS I’VE MADE"
            title={<>Selected <span>work.</span></>}
            note="Thoughtful solutions, each one made to solve a real problem."
          />
          <div className="projects-grid">
            {projects.map((project, index) => (
              <Reveal className="project-card-wrap" delay={index * 0.06} key={project.number}>
                <article className={`project-card ${project.style}`}>
                  <div className="project-card-top">
                    <span className="project-number">{project.number} / 04</span>
                    <span className="project-category">{project.category}</span>
                  </div>
                  <div className="project-visual" aria-hidden="true">
                    <span className="project-visual-word">{project.visual}</span>
                    <span className="visual-orbit visual-orbit-a" />
                    <span className="visual-orbit visual-orbit-b" />
                    <span className="visual-cross">+</span>
                    <span className="visual-index">0{index + 1}</span>
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul className="tag-list" aria-label="Technologies">
                      {project.stack.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                    <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                      View on GitHub <FaArrowUp aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="experience-section section-wrap" id="experience" ref={experienceRef}>
          <SectionHeading
            eyebrow="WHERE I’VE BEEN"
            title={<>Experience <span>& education.</span></>}
          />
          <div className="experience-layout">
            <div className="timeline">
              <motion.span
                className="timeline-progress"
                style={{ scaleY: reduceMotion ? 1 : timelineScale }}
                aria-hidden="true"
              />
              {experience.map((item, index) => (
                <Reveal className="timeline-item" delay={index * 0.08} key={item.company}>
                  <span className="timeline-marker" aria-hidden="true" />
                  <p className="timeline-period">{item.period}</p>
                  <h3>{item.role}</h3>
                  <p className="timeline-company">{item.company}</p>
                  <p className="timeline-description">{item.description}</p>
                  <a className="text-link" href={item.certificate} target="_blank" rel="noreferrer">
                    Certificate <FaArrowUp aria-hidden="true" />
                  </a>
                </Reveal>
              ))}
            </div>
            <Reveal className="education-card">
              <p className="eyebrow">THE LEARNING NEVER STOPS</p>
              <div className="education-year">2023 <span>—</span> 2027</div>
              <h3>B.Tech, Computer Science & Engineering</h3>
              <p className="education-school">VNR VJIET · Hyderabad, India</p>
              <div className="education-score">
                <span>Current CGPA</span>
                <strong>9.26<span>/10</span></strong>
              </div>
              <div className="education-decoration" aria-hidden="true">VNR</div>
            </Reveal>
          </div>
        </section>

        <section className="about-section section-wrap" id="about">
          <SectionHeading
            eyebrow="A LITTLE ABOUT ME"
            title={<>Built on curiosity.<br /><span>Driven by craft.</span></>}
          />
          <div className="about-layout">
            <Reveal className="about-copy">
              <p>
                I&apos;m a Computer Science student who likes to understand how things work—and
                then make them work better. From full-stack products to algorithmic challenges,
                I enjoy the process as much as the result.
              </p>
              <p>
                Outside the editor, you&apos;ll find me learning with student communities,
                competing in coding contests, or exploring what machine learning can make possible.
              </p>
              <div className="hero-socials" aria-label="Coding profiles" style={{ size: "1.5rem" }}>
                {profiles.map((profile) => (
                  <a
                    href={profile.href}
                    target="_blank"
                    rel="noreferrer"
                    key={profile.label}
                    aria-label={profile.label}
                    title={profile.label}
                  >
                    {profile.icon
                      ? createElement(profile.icon, { "aria-hidden": true })
                      : <img className="profile-image-icon" src={profile.image} alt="" />}
                  </a>
                ))}
                <span className="social-divider" />
                <a href="https://github.com/yandapallishreyas" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <FaGithub aria-hidden="true" />
                </a>
                <a href="https://www.linkedin.com/in/shreyas-yandapalli/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <FaLinkedin aria-hidden="true" />
                </a>
              </div>
            </Reveal>
            <Reveal className="skills-panel" delay={0.08}>
              <p className="eyebrow">TOOLS OF THE TRADE</p>
              <ul className="skills-list">
                {skills.map((skill, index) => (
                  <motion.li
                    key={skill}
                    initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: Math.min(index * 0.018, 0.35), duration: 0.28 }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="recognition-section section-wrap" id="recognition">
          <SectionHeading eyebrow="MILESTONES & MOMENTS" title={<>A few <span>highlights.</span></>} />
          <div className="achievement-list">
            {achievements.map((achievement, index) => (
              <Reveal className="achievement-row" delay={index * 0.04} key={achievement.title}>
                <span className="achievement-index">{achievement.number}</span>
                <h3>{achievement.title}</h3>
                <p>{achievement.detail}</p>
                <FaArrowUp className="achievement-arrow" aria-hidden="true" />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="community-section section-wrap" id="community">
          <SectionHeading
            eyebrow="BETTER, TOGETHER"
            title={<>The work beyond <span>the work.</span></>}
            note="Learning to build with people, not just for them."
          />
          <div className="community-grid">
            {communities.map((community, index) => (
              <Reveal className="community-card" delay={index * 0.045} key={community.title}>
                <div className="community-mark">
                  {community.image
                    ? <img src={community.image} alt="" loading="lazy" />
                    : <span aria-hidden="true">CSI</span>}
                </div>
                <div>
                  <p className="community-role">{community.role}</p>
                  <h3>{community.title}</h3>
                  <p className="community-description">{community.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <Reveal className="contact-card">
            <p className="eyebrow"><span className="status-dot" /> HAVE A GOOD ONE IN MIND?</p>
            <h2>Let&apos;s make<br /><span>something matter.</span></h2>
            <a className="button button-primary contact-button" href="mailto:yandapallishreyas@gmail.com">
              Get in touch <FaArrowRight aria-hidden="true" />
            </a>
            <div className="contact-details">
              <a href="mailto:yandapallishreyas@gmail.com"><FaEnvelope aria-hidden="true" /> yandapallishreyas@gmail.com</a>
              <a href="tel:+916281311142"><FaPhoneAlt aria-hidden="true" /> +91 62813 11142</a>
              <a href="https://www.linkedin.com/in/shreyas-yandapalli/" target="_blank" rel="noreferrer"><FaLinkedin aria-hidden="true" /> LinkedIn</a>
              <a href="https://github.com/yandapallishreyas" target="_blank" rel="noreferrer"><FaGithub aria-hidden="true" /> GitHub</a>
            </div>
            <span className="contact-decoration" aria-hidden="true">✳</span>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark" href="#home">SY<span>.</span></a>
        <p>Designed & built with intention by Shreyas Yandapalli.</p>
        <a className="back-to-top" href="#home">BACK TO TOP <FaArrowUp aria-hidden="true" /></a>
      </footer>
    </div>
  );
}

export default App;
