import education from "../data/education";

const Education = () => (
  <section id="education" className="achievements-section">
    <h2 className="section-heading">
      My <span>Education</span>
    </h2>
    <div className="achievements-grid">
      {education.map((item) => (
        <article key={item.institution} className="achievement-card">
          <div className="achievement-year" style={{ fontSize: "0.8rem", textAlign: "center", padding: "2px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span>🎓</span>
          </div>
          <div className="achievement-body">
            <h3>{item.degree}</h3>
            <p style={{ margin: "0.25rem 0", color: "var(--accent)", fontWeight: "600" }}>{item.institution}</p>
            <p style={{ margin: "0.5rem 0 0", color: "var(--surface-text)", fontSize: "0.95rem" }}>{item.duration}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Education;
