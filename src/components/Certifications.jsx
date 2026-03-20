import './Certifications.css'

const CERTS = [
  { icon: '☁️', title: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services' },
  { icon: '🤖', title: 'Machine Learning',                  issuer: 'Simplilearn' },
  { icon: '🍃', title: 'Spring Boot Microservices',         issuer: 'Coursera' },
  { icon: '🌐', title: 'HTML / CSS / JavaScript',           issuer: 'Online Certification' },
  { icon: '🐙', title: 'Git & GitHub',                      issuer: 'Coursera' },
  { icon: '🗄️', title: 'Relational Databases',              issuer: 'Coursera' },
]

export default function Certifications() {
  return (
    <section id="certifications" className="section certs-section">
      <div className="section-inner">
        <span className="section-tag" style={{ color: '#9B7FFF' }}>Certifications</span>
        <h2 className="section-title" style={{ color: '#fff' }}>Credentials</h2>
        <p className="section-sub" style={{ color: 'rgba(255,255,255,0.5)' }}>
          Industry-recognised certifications validating my technical expertise.
        </p>

        <div className="certs-grid">
          {CERTS.map(({ icon, title, issuer }) => (
            <div key={title} className="cert-card reveal">
              <span className="cert-icon">{icon}</span>
              <h4>{title}</h4>
              <p>{issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
