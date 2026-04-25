export default function Skills({ skills }) {
  return (
    <section id="skills" className="section-padding section-alt">
      <div className="container">
        <h2 className="section-title mb-4">Technical Skills</h2>
        <div className="row g-4">
          {Object.entries(skills).map(([category, items]) => (
            <div className="col-12 col-md-6" key={category}>
              <article className="card skill-card h-100 border-0">
                <div className="card-body p-4">
                  <h3 className="h5 card-title mb-3">{category}</h3>
                  <div className="d-flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span key={item} className="badge badge-skill rounded-pill px-3 py-2">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
