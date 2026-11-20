import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./Leadership.css";

import TuringHutIcon from "../assets/turinghut.png";
import NSSIcon from "../assets/nss.png";
import CSIIcon from "../assets/csi.png";
import StudentForceIcon from "../assets/studentforce.png";
import VJTheatroIcon from "../assets/vjtheatro.png";

const leaderships = [
  { icon: TuringHutIcon, title: "Documentation & PR Head, Turing Hut VNRVJIET", desc: "Coordinated coding contests and maintained club documentation with precision." },
  { icon: NSSIcon, title: "Logistics Supervisor, NSS VNRVJIET", desc: "Managed logistics for Mega Blood Donation Camp 2025 and led volunteer teams." },
  { icon: CSIIcon, title: "Member, CSI Student Chapter", desc: "Actively participated in tech workshops, seminars, and coding events." },
  { icon: StudentForceIcon, title: "Ex-Social Media Head, StudentForce VNRVJIET", desc: "Managed social media campaigns, increasing engagement and outreach for club events." },
  { icon: VJTheatroIcon, title: "Member, VJTheatro Club", desc: "Contributed to cultural events and stage performances, enhancing campus life." }
];

const Leadership = () => {
  const [isMobile, setIsMobile] = useState(false);
  const trackRef = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Duplicate items for seamless scroll
  const items = leaderships.concat(leaderships);

  useEffect(() => {
    if (!trackRef.current) return;
    setWidth(trackRef.current.scrollWidth / 2);
  }, [trackRef.current]);

  const props = useSpring({
    from: { x: 0 },
    to: async (next) => {
      while (true) {
        await next({ x: -width });
        await next({ x: 0 });
      }
    },
    config: { duration: 20000 }, // scroll duration (adjust speed)
    reset: true,
    loop: true
  });

  return (
    <section id="leadership" className="tech-leadership-section">
      <h2 className="tech-leadership-title">Leadership & Activities</h2>
      <div className="tech-leadership-ticker">
        <animated.div className="tech-ticker-track" style={{ transform: props.x.to(x => `translateX(${x}px)`) }} ref={trackRef}>
          {items.map((item, i) => (
            <div key={i} className="tech-leadership-card">
              <img src={item.icon} alt={item.title} className="tech-leadership-icon" />
              <h3 className="tech-leadership-heading">{item.title}</h3>
              <p className="tech-leadership-desc">{item.desc}</p>
            </div>
          ))}
        </animated.div>
      </div>
    </section>
  );
};

export default Leadership;
