import experience from "../data/experience";

const Experience = () => (
  <section id="experience" className="achievements-section">
    <h2 className="section-heading">
      My <span>Experience</span>
    </h2>
    <div className="achievements-grid">
      {experience.map((item) => (
        <article key={item.company} className="achievement-card">
          <div className="achievement-year" style={{ fontSize: "0.8rem", textAlign: "center", padding: "2px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </span>
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
