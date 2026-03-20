import './Projects.css'

const PROJECTS = [
  {
    emoji: '📝',
    bg: 'linear-gradient(135deg, #EDE9FF 0%, #D4CCFF 100%)',
    title: 'Quiz Application',
    desc: 'Full-stack quiz platform with a 4-layer modular architecture (Entity, Controller, DTO, Service). Admins manage 100+ MCQs; randomised quiz engine with real-time scoring improved assessment accuracy by 30%.',
    tags: ['Spring Boot','PostgreSQL','REST API','Java'],
    link: 'https://github.com/23000285',
  },
  {
    emoji: '🧠',
    bg: 'linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 100%)',
    title: "Alzheimer's Disease Prediction",
    desc: 'Hybrid ML model combining NLP clinical-text features with a custom CNN for MRI classification, achieving 85%+ validation accuracy. Domain-specific scoring pipeline classifies 4 cognitive states.',
    tags: ['Python','TensorFlow','Scikit-learn','CNN','NLP'],
    link: 'https://github.com/23000285',
  },
  {
    emoji: '💹',
    bg: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)',
    title: 'Crypto Portfolio Platform',
    desc: 'Full-stack crypto portfolio management with Binance API integration, JWT-secured endpoints, a FIFO P&L engine, and a React dashboard with live charts. Built during Infosys SpringBoard internship.',
    tags: ['Spring Boot','React','PostgreSQL','Binance API'],
    link: 'https://github.com/23000285',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-inner">
        <div className="projects-header">
          <div>
            <span className="section-tag">Recent Projects</span>
            <h2 className="section-title">My Portfolio</h2>
          </div>
          <a
            href="https://github.com/23000285"
            target="_blank" rel="noopener noreferrer"
            className="github-btn"
          >
            🚀 Visit My GitHub
          </a>
        </div>

        <div className="projects-grid">
          {PROJECTS.map(({ emoji, bg, title, desc, tags, link }) => (
            <div key={title} className="proj-card reveal">
              <div className="proj-thumb" style={{ background: bg }}>
                <span>{emoji}</span>
              </div>
              <div className="proj-body">
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="proj-tags">
                  {tags.map(t => <span key={t} className="proj-tag">{t}</span>)}
                </div>
                <a href={link} target="_blank" rel="noopener noreferrer" className="proj-link">
                  View In GitHub ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
