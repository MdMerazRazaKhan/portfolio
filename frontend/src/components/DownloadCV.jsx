import downloadOptions from "../data/downloadOptions";

const DownloadCV = () => (
  <section id="download" className="download-section">
    <h2 className="section-heading">Download <span>CV</span></h2>
    <div className="download-grid">
      {downloadOptions.map((option) => (
        <div key={option.title} className="download-card">
          <div className="download-icon-circle">
            <span className="download-icon">📄</span>
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
