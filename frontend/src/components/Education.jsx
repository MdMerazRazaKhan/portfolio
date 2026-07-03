import education from "../data/education";

const Education = () => (
  <section id="education">
    <h2 className="section-heading">Education</h2>
    <div className="container">
      {education.map((item) => (
        <div key={item.institution} className="card">
          <h3>{item.degree}</h3>
          <p>{item.institution}</p>
          <p>{item.duration}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Education;
