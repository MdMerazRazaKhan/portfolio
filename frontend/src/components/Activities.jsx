import activities from "../data/activities";

const ICONS = ["📝", "🔧", "👩‍🏫", "💻", "🤝", "📚"];

const Activities = () => (
  <section id="activities" className="activities-section">
    <h2 className="section-heading">Extra <span>Activities</span></h2>
    <div className="activity-grid">
      {activities.map((item, idx) => (
        <div key={item.title} className="activity-card">
          <div className="activity-icon">{ICONS[idx % ICONS.length]}</div>
          <div className="activity-body">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Activities;
