import './Leadership.css'

const POINTS = [
  'Instructed 30+ students on AWS core services including EC2, S3, IAM, and Lambda, guiding them toward the Cloud Practitioner certification path.',
  'Authored and distributed an AWS Certification Study Guide (PDF) to 40+ students across departments, enabling independent self-study.',
]

export default function Leadership() {
  return (
    <section id="leadership" className="section lead-section">
      <div className="section-inner">
        <span className="section-tag">Leadership</span>
        <h2 className="section-title">Community & Teaching</h2>

        <div className="lead-card reveal">
          <div className="lead-emoji">🎤</div>
          <div className="lead-content">
            <h3>AWS Instructor — Saveetha Engineering College</h3>
            <p className="lead-meta">28 February 2026 · Chennai, Tamil Nadu</p>
            <ul className="lead-points">
              {POINTS.map((pt, i) => (
                <li key={i} className="lead-point">{pt}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
