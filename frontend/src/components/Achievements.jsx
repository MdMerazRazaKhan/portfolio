import achievements from "../data/achievements";

const Achievements = () => (
  <section id="achievements" className="achievements-section">
    <h2 className="section-heading">
      My <span>Achievements</span>
    </h2>
    <div className="achievements-grid">
      {achievements.map((item) => (
        <article key={item.title} className="achievement-card">
          <div className="achievement-year">{item.year}</div>
          <div className="achievement-body">
            <h3>{item.title}</h3>
            <p>{item.details}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Achievements;
