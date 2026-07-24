import skills from "../data/skills";

const techs = [
  "Git",
  "GitHub",
  "Express.js",
  "MongoDB",
  "Linux",
  "Next.js",
  "Tailwind CSS",
  "HTML5",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Rest API",

];

const Skills = () => (
  <section id="skills" className="skills-section">
    <h2 className="section-heading">
      My <span>Coding Skills</span>
    </h2>
    <div className="skills-grid">
      {skills.map((skill) => (
        <div key={skill.name} className="skill-item">
          <div className="skill-name">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="skill-bar">
            <div className="skill-fill" style={{ "--target": `${skill.level}%` }} />
          </div>
        </div>
      ))}
    </div>

    <h3 className="tech-heading">Technologies I Work With</h3>
    <div className="tech-grid">
      {techs.map((tech) => (
        <div key={tech} className="tech-chip">
          {tech}
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
