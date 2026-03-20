import './Experience.css'

const EXP = {
  title: 'Crypto Portfolio Management Platform',
  role: 'Java Full-Stack Developer',
  company: 'Infosys SpringBoard',
  period: 'Feb 2026 – Present',
  live: true,
  tech: ['Spring Boot','React.js','PostgreSQL','Binance API','Spring Security','JWT','REST APIs','FIFO Engine'],
  points: [
    'Developed 15+ REST API endpoints for portfolio analytics, real-time trade management, and wallet transactions integrated with the Binance API.',
    'Implemented JWT authentication, OTP email verification, and role-based access control (RBAC) via Spring Security for enterprise-grade security.',
    'Designed a FIFO P&L engine for accurate cost-basis tracking and profit/loss calculations across 100+ test portfolios.',
    'Built a React dashboard with real-time charts and optimised API response handling, reducing page-load time by ~20%.',
  ],
}

export default function Experience() {
  return (
    <section id="experience" className="section exp-section">
      <div className="section-inner">
        <span className="section-tag">Work Experience</span>
        <h2 className="section-title">Internship Experience</h2>
        <p className="section-sub">Building production-grade systems as a Java Full-Stack Developer intern.</p>

        <div className="exp-card reveal">
          <div className="exp-top">
            <div className="exp-badge-wrap">
              <div className="exp-logo">🏦</div>
              <div className="exp-meta">
                <h3>{EXP.title}</h3>
                <p>{EXP.role} · {EXP.company}</p>
              </div>
            </div>
            <div className="exp-period">
              {EXP.live && <span className="live-dot" />}
              {EXP.period}
            </div>
          </div>

          <div className="exp-tech">
            {EXP.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
          </div>

          <ul className="exp-points">
            {EXP.points.map((pt, i) => (
              <li key={i} className="exp-point">{pt}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
