import experience from "../data/experience";

const Experience = () => (
  <section id="experience" className="achievements-section">
    <h2 className="section-heading">
      My <span>Experience</span>
    </h2>
    <div className="achievements-grid">
      {experience.map((item) => (
        <article key={item.company} className="achievement-card">
          <div className="achievement-year" style={{ fontSize: "0.8rem", textAlign: "center", padding: "2px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span>💼</span>
          </div>
          <div className="achievement-body">
            <h3>{item.role}</h3>
            <p style={{ margin: "0.25rem 0", color: "var(--accent)", fontWeight: "600" }}>{item.company}</p>
            <p style={{ margin: "0.5rem 0 0", color: "var(--surface-text)", fontSize: "0.95rem" }}>{item.duration}</p>
            <p style={{ margin: "0.5rem 0 0" }}>{item.details}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Experience;
