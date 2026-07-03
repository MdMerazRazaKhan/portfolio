import achievements from "../data/achievements";

const Achievements = () => (
  <section id="achievements">
    <h2 className="section-heading">Achievements</h2>
    <div className="container">
      {achievements.map((item) => (
        <div key={item.title} className="card">
          <h3>{item.title}</h3>
          <p>{item.details}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Achievements;
