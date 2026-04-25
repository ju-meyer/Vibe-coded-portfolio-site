export default function Hero({ personal, summary }) {
  return (
    <header className="hero-section py-5">
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <p className="text-uppercase fw-semibold small text-accent mb-2">Stackbridge.ca</p>
            <h1 className="display-4 fw-bold mb-2">{personal.name}</h1>
            <h2 className="h4 text-light-emphasis mb-3">{personal.title}</h2>
            <p className="lead mb-4">{summary}</p>
            <div className="d-flex flex-wrap gap-2">
              <span className="badge rounded-pill text-bg-dark border border-secondary px-3 py-2">
                {personal.location}
              </span>
              <span className="badge rounded-pill text-bg-dark border border-secondary px-3 py-2">
                {personal.education}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
