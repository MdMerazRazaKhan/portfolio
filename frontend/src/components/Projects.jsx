import projects from "../data/projects";

const Projects = () => (
  <section id="projects">
    <h2 className="section-heading">Projects</h2>
    <div className="container grid-2">
      {projects.map((project) => (
        <div key={project.title} className="card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a className="button" href={project.link}>
            View project
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
