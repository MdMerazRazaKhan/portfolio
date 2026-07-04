import { useEffect, useRef } from "react";

const Hero = () => {
  const name = "Md Meraz Raza Khan";
  const letterRefs = useRef([]);

  useEffect(() => {
    letterRefs.current = letterRefs.current.slice(0, name.length);
  }, [name.length]);

  const resetLetters = () => {
    letterRefs.current.forEach((letter) => {
      if (!letter) return;
      letter.style.animation = "none";
      letter.style.opacity = "0";
      letter.style.transform = "translateX(10px)";
    });
  };

  const handleNameMouseEnter = () => {
    resetLetters();
    void letterRefs.current[0]?.offsetWidth;

    letterRefs.current.forEach((letter, index) => {
      if (!letter) return;
      letter.style.animation = `heroNameTyping 1.5s ease ${index * 0.08}s infinite`;
    });
  };

  const handleNameMouseLeave = () => {
    resetLetters();
  };

  return (
    <section id="home" className="hero hero-center">
      <div className="hero-box">
        <p className="badge">Portfolio</p>
        <h1 className="hero-name" aria-label={name} onMouseEnter={handleNameMouseEnter} onMouseLeave={handleNameMouseLeave}>
          {name.split("").map((letter, index) => (
            <span
              key={`${letter}-${index}`}
              ref={(el) => {
                letterRefs.current[index] = el;
              }}
              className="hero-name-letter"
            >
              {letter}
            </span>
          ))}
        </h1>
        <p className="hero-subtitle">Full Stack Developer & Software Engineer</p>
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
