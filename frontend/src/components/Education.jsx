import { useState, useEffect } from "react";
import education from "../data/education";

const Education = () => {
  const [selectedEdu, setSelectedEdu] = useState(null);
  const [logoError, setLogoError] = useState({});

  // Handle escape key to close the modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedEdu(null);
      }
    };
    if (selectedEdu) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = ""; // Reset overflow on close
    };
  }, [selectedEdu]);

  const handleClose = () => setSelectedEdu(null);

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("modal-backdrop")) {
      handleClose();
    }
  };

  return (
    <section id="education" className="achievements-section">
      <h2 className="section-heading">
        My <span>Education</span>
      </h2>
      
      <div className="education-timeline">
        {education.map((item) => (
          <div key={item.id} className="timeline-item">
            <div className="timeline-icon" style={{ overflow: "hidden", background: "#fff", display: "grid", placeItems: "center" }}>
              {item.logo && !logoError[item.id] ? (
                <img 
                  src={item.logo} 
                  alt="" 
                  onError={() => setLogoError(prev => ({ ...prev, [item.id]: true }))}
                  style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "contain", padding: "4px" }} 
                />
              ) : (
                item.id === "btech" ? "🎓" : "🏫"
              )}
            </div>
            
            <div className="timeline-card">
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.75rem" }}>
                <span className="badge" style={{ fontSize: "0.8rem" }}>{item.duration}</span>
                <span style={{ color: "var(--accent)", fontWeight: "700" }}>{item.score}</span>
              </div>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "0.35rem" }}>{item.degree}</h3>
              <p style={{ color: "var(--accent)", fontWeight: "600", marginBottom: "0.5rem" }}>{item.stream}</p>
              <p style={{ fontSize: "0.95rem", color: "var(--surface-text)", marginBottom: "1.25rem" }}>{item.institution}</p>
              
              <button 
                type="button" 
                className="button button-secondary" 
                style={{ width: "100%", padding: "0.65rem 1rem", fontSize: "0.95rem" }}
                onClick={() => setSelectedEdu(item)}
              >
                View More Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedEdu && (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
          <div 
            className="modal-container"
            onMouseEnter={() => { document.body.style.overflow = "hidden"; }}
            onMouseLeave={() => { document.body.style.overflow = ""; }}
          >
            <div className="modal-header">
              <button type="button" className="modal-back-btn" onClick={handleClose} aria-label="Go back">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                <span>Back</span>
              </button>
            </div>

            <div className="modal-intro">
              <h3 className="modal-title">{selectedEdu.degree}</h3>
              <p className="modal-subtitle">{selectedEdu.stream}</p>
              <div className="modal-badges">
                <span className="badge">{selectedEdu.duration}</span>
                <span className="badge badge-accent">{selectedEdu.score}</span>
              </div>
            </div>

            <p style={{ margin: "1.25rem 0", lineHeight: "1.7", color: "var(--surface-text)", fontSize: "0.98rem" }}>
              {selectedEdu.description}
            </p>
            
            <div className="modal-info-grid">
              <div className="modal-info-item">
                <div className="info-icon">🏫</div>
                <div className="info-text">
                  <span className="info-label">Institution</span>
                  <span className="info-value">{selectedEdu.institution}</span>
                </div>
              </div>
              <div className="modal-info-item">
                <div className="info-icon">📜</div>
                <div className="info-text">
                  <span className="info-label">Board / University</span>
                  <span className="info-value">{selectedEdu.board}</span>
                </div>
              </div>
              {selectedEdu.averageCgpa && (
                <div className="modal-info-item">
                  <div className="info-icon">📊</div>
                  <div className="info-text">
                    <span className="info-label">Average Score</span>
                    <span className="info-value">CGPA: {selectedEdu.averageCgpa}</span>
                  </div>
                </div>
              )}
              {selectedEdu.equivalentPercentage && (
                <div className="modal-info-item">
                  <div className="info-icon">📈</div>
                  <div className="info-text">
                    <span className="info-label">MAKAUT Score</span>
                    <span className="info-value">Percentage: {selectedEdu.equivalentPercentage}</span>
                  </div>
                </div>
              )}
            </div>

            {selectedEdu.semesters && (
              <div style={{ marginTop: "1.75rem" }}>
                <h4 style={{ color: "var(--body-text)", marginBottom: "0.75rem", fontSize: "1.1rem", fontWeight: "700" }}>Semester-wise Performance</h4>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: "0.75rem" }}>
                  {selectedEdu.semesters.map((s) => (
                    <div key={s.sem} className="tech-chip" style={{ display: "flex", flexDirection: "column", gap: "0.25rem", padding: "0.6rem 0.5rem", textAlign: "center", borderRadius: "0.75rem", margin: 0, boxShadow: "none", background: "rgba(255,255,255,0.02)", border: "1px solid var(--surface-border)" }}>
                      <span style={{ fontSize: "0.72rem", color: "var(--surface-text)", fontWeight: "500" }}>{s.sem}</span>
                      <span style={{ fontSize: "1.05rem", fontWeight: "800", color: "var(--accent)" }}>{s.cgpa}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedEdu.coursework && (
              <div style={{ marginTop: "1.75rem" }}>
                <h4 style={{ color: "var(--body-text)", marginBottom: "0.75rem", fontSize: "1.1rem", fontWeight: "700" }}>Relevant Coursework</h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {selectedEdu.coursework.map((course) => (
                    <span key={course} className="tech-chip" style={{ fontSize: "0.8rem", padding: "0.4rem 0.8rem", borderRadius: "0.5rem", margin: 0, boxShadow: "none" }}>
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {selectedEdu.achievements && (
              <div style={{ marginTop: "1.75rem" }}>
                <h4 style={{ color: "var(--body-text)", marginBottom: "0.6rem", fontSize: "1.1rem", fontWeight: "700" }}>Key Achievements</h4>
                <ul style={{ paddingLeft: "1.25rem", color: "var(--surface-text)", display: "grid", gap: "0.55rem", fontSize: "0.92rem" }}>
                  {selectedEdu.achievements.map((ach, idx) => (
                    <li key={idx} style={{ lineHeight: "1.65" }}>{ach}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;
