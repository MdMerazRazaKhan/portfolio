import experience from "../data/experience";

const Experience = () => (
  <section id="experience">
    <h2 className="section-heading">Experience</h2>
    <div className="container">
      {experience.map((item) => (
        <div key={item.company} className="card">
          <h3>{item.role}</h3>
          <p>{item.company} · {item.duration}</p>
          <p>{item.details}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
