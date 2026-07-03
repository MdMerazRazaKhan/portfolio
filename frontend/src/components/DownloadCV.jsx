import downloadOptions from "../data/downloadOptions";

const DownloadCV = () => (
  <section id="download">
    <h2 className="section-heading">Download CV</h2>
    <div className="download-grid">
      {downloadOptions.map((option) => (
        <div key={option.title} className="download-card">
          <div className="download-icon">📄</div>
          <h3>{option.title}</h3>
          <p>{option.description}</p>
          <a className="button" href={option.link}>
            {option.label}
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default DownloadCV;
