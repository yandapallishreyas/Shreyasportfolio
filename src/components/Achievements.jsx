import React from "react";
import "./Achievements.css";

const achievements = [
  {
    emoji: "🏆",
    title: "1st Place – CodeRush (Convergence 2025)",
    desc: "Won the college level coding contest with 500+ participants by building optimized solutions under time pressure."
  },
  {
    emoji: "⭐",
    title: "5-Star – Problem Solving (HackerRank)",
    desc: "Achieved 5-star recognition for solving algorithmic and data structure challenges consistently."
  },
  {
    emoji: "💡",
    title: "LeetCode Milestone",
    desc: "Reached 1500+ contest rating and solved 200+ problems, showcasing strong problem-solving ability."
  },
  {
    emoji: "🚀",
    title: "Smart India Hackathon 2025",
    desc: "Advanced through the Campus Round with a project addressing real-world challenges in technology."
  },
  {
    emoji: "🎯",
    title: "Finalist – Turing Cup 2k25 & Convergence Coding Contest",
    desc: "Selected among top teams, demonstrating teamwork and coding expertise under competitive settings."
  }
];

const Achievements = () => (
  <section id="achievements" className="tech-achievements-section">
    <h2 className="tech-achievements-title">Achievements</h2>

    <div className="tech-achievements-row">
      {achievements.slice(0, 3).map((ach, i) => (
        <div key={i} className="tech-achievement-card">
          <span className="tech-achievement-emoji">{ach.emoji}</span>
          <h3 className="tech-achievement-title">{ach.title}</h3>
          <p className="tech-achievement-desc">{ach.desc}</p>
        </div>
      ))}
    </div>

    <div className="tech-achievements-row">
      {achievements.slice(3, 5).map((ach, i) => (
        <div key={i} className="tech-achievement-card">
          <span className="tech-achievement-emoji">{ach.emoji}</span>
          <h3 className="tech-achievement-title">{ach.title}</h3>
          <p className="tech-achievement-desc">{ach.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Achievements;
