import './Experience.css'

const POINTS = [
  'Developed 15+ REST API endpoints for portfolio analytics, real-time trade management, and wallet transactions integrated with Binance API.',
  'Implemented JWT authentication, OTP email verification & role-based access control via Spring Security.',
  'Designed a FIFO P&L engine for accurate cost-basis tracking across 100+ test portfolios.',
  'Built React dashboard with real-time charts; optimised API responses reducing page-load by ~20%.',
]

const TECH = ['Spring Boot', 'React.js', 'PostgreSQL', 'Binance API', 'Spring Security', 'JWT', 'REST APIs']

export default function Experience() {
  return (
    <section id="experience" className="exp-section">
      <div className="exp-inner">
        <p className="section-label">Work Experience</p>
        <h2 className="section-heading">Internship Experience</h2>

        <div className="exp-card reveal">
          <div className="exp-card-left">
            <div className="exp-logo">🏦</div>
          </div>
          <div className="exp-card-right">
            <div className="exp-header">
              <div>
                <h3 className="exp-title">Crypto Portfolio Management Platform</h3>
                <p className="exp-company">Java Full-Stack Developer · Infosys SpringBoard</p>
              </div>
              <span className="exp-badge">
                <span className="exp-dot" />
                Feb 2026 – Present
              </span>
            </div>

            <div className="exp-tech">
              {TECH.map(t => (
                <span key={t} className="exp-tech-tag">{t}</span>
              ))}
            </div>

            <ul className="exp-points">
              {POINTS.map((pt, i) => (
                <li key={i}><span className="exp-arrow">▸</span>{pt}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
