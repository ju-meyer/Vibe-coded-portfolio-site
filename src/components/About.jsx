export default function About({ aboutText }) {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <h2 className="section-title mb-3">About</h2>
        <p className="section-text mb-0">{aboutText}</p>
      </div>
    </section>
  )
}
