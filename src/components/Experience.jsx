export default function Experience({ experience }) {
  return (
    <section id="experience" className="section-padding section-alt">
      <div className="container">
        <h2 className="section-title mb-4">Work Experience</h2>
        <div className="vstack gap-4">
          {experience.map((job) => (
            <article key={`${job.company}-${job.period}`} className="card experience-card border-0">
              <div className="card-body p-4">
                <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center mb-3 gap-2">
                  <div>
                    <h3 className="h5 mb-1">{job.company}</h3>
                    <p className="mb-0 text-light-emphasis">
                      {job.role} · {job.location}
                    </p>
                  </div>
                  <span className="badge rounded-pill badge-period px-3 py-2 align-self-start align-self-lg-auto">
                    {job.period}
                  </span>
                </div>
                <ul className="mb-0 ps-3">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="mb-2 text-light-emphasis">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
