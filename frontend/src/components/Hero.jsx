const Hero = () => {
  const name = "Md Meraz Raza Khan";

  return (
    <section id="home" className="hero hero-center">
      <div className="hero-box">
        <p className="badge">Portfolio</p>
        <h1 className="hero-name" aria-label={name}>
          {name.split("").map((letter, index) => (
            <span
              key={`${letter}-${index}`}
              className="hero-name-letter"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {letter}
            </span>
          ))}
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
