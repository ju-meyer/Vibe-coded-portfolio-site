export default function Contact({ email, cta }) {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <article className="card contact-card border-0 text-center p-4 p-md-5">
          <div className="card-body">
            <h2 className="section-title mb-3">Contact</h2>
            <p className="mb-4 text-light-emphasis">{cta}</p>
            <a className="btn btn-accent btn-lg" href={`mailto:${email}`}>
              {email}
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
