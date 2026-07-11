import projects from "../data/projects";

const Projects = () => (
  <section id="projects" className="achievements-section">
    <h2 className="section-heading">
      My <span>Projects</span>
    </h2>
    <div className="achievements-grid">
      {projects.map((project) => (
        <article key={project.title} className="achievement-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
          <div className="achievement-body" style={{ width: "100%" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
              <h3 style={{ fontSize: "1.25rem", margin: 0 }}>{project.title}</h3>
              <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--accent)" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </span>
            </div>
            <p style={{ marginBottom: "1.5rem" }}>{project.description}</p>
          </div>
          <a className="button" href={project.link} target="_blank" rel="noopener noreferrer" style={{ width: "100%", marginTop: "auto" }}>
            View Project
          </a>
        </article>
      ))}
    </div>
  </section>
);

export default Projects;
