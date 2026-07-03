import activities from "../data/activities";

const Activities = () => (
  <section id="activities">
    <h2 className="section-heading">Extra Activities</h2>
    <div className="activity-grid">
      {activities.map((item) => (
        <div key={item.title} className="activity-card">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Activities;
