import skills from "../data/skills";

const Skills = () => (
  <section id="skills">
    <h2 className="section-heading">My Coding Skills</h2>
    <div className="skills-grid">
      {skills.map((skill) => (
        <div key={skill.name} className="skill-item">
          <div className="skill-name">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="skill-bar">
            <div className="skill-fill" style={{ width: `${skill.level}%` }} />
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
