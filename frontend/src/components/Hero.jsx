const Hero = () => {
  const name = "Md Meraz Raza Khan";

  return (
    <section id="home" className="hero hero-center">
      <div className="hero-box">
        <p className="badge">Portfolio</p>
        <h1 className="hero-name" aria-label={name} style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.4rem 0.8rem" }}>
          {name.split(" ").map((word, wordIdx) => {
            const prevCharCount = name.split(" ").slice(0, wordIdx).join(" ").length + (wordIdx > 0 ? 1 : 0);
            return (
              <span key={wordIdx} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
                {word.split("").map((letter, letterIdx) => {
                  const globalIndex = prevCharCount + letterIdx;
                  return (
                    <span
                      key={`${letter}-${letterIdx}`}
                      className="hero-name-letter"
                      style={{ animationDelay: `${globalIndex * 0.08}s` }}
                    >
                      {letter}
                    </span>
                  );
                })}
              </span>
            );
          })}
        </h1>
        <p className="hero-subtitle">Software Developer Engineer & Aspiring AI Enthusiast</p>
        <div className="hero-actions">
          <a className="button" href="#contact">
            Contact Me
          </a>
          <a className="button button-secondary" href="#download">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
