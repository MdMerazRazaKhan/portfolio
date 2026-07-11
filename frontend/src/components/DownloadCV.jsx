import downloadOptions from "../data/downloadOptions";

const DownloadCV = () => (
  <section id="download" className="download-section">
    <h2 className="section-heading">Download <span>CV</span></h2>
    <div className="download-grid">
      {downloadOptions.map((option) => (
        <div key={option.title} className="download-card">
          <div className="download-icon-circle">
            <span className="download-icon" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </span>
          </div>
          <h3>{option.title}</h3>
          <p>{option.description}</p>
          <a
            className="button"
            href={option.link}
            download={option.download ? "MD_MERAZ_RAZA_KHAN_Resume.pdf" : undefined}
            target={option.download ? undefined : "_blank"}
            rel={option.download ? undefined : "noopener noreferrer"}
          >
            {option.label}
          </a>
        </div>
      ))}
    </div>
    <div className="download-footer">
      <p>Need a different format? Feel free to contact me.</p>
      <a href="#contact" className="button button-secondary">Contact Me</a>
    </div>
  </section>
);

export default DownloadCV;
