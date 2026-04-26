export default function Projects({ projects }) {
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <h2 className="section-title mb-4">Projects / Technical Experience</h2>
        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-12 col-lg-4" key={project.title}>
              <article className="card feature-card h-100 border-0">
                <div className="card-body p-4">
                  <h3 className="h5 card-title mb-3">{project.title}</h3>
                  <p className="mb-0 text-light-emphasis">{project.description}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
