import './Projects.css'

const PROJECTS = [
  {
    color: '#E8E4FF',
    mockupBg: '#c4baf5',
    emoji: '📝',
    title: 'Quiz Application',
    desc: '4-layer modular architecture with admin CRUD for 100+ MCQs. Randomised quiz engine with real-time scoring improved assessment accuracy by 30%.',
    link: 'https://github.com/23000285',
  },
  {
    color: '#EEF2FF',
    mockupBg: '#c7cff5',
    emoji: '🧠',
    title: "Alzheimer's Prediction",
    desc: 'Hybrid ML model: NLP clinical text + custom CNN for MRI classification achieving 85%+ validation accuracy across 4 cognitive states.',
    link: 'https://github.com/23000285',
  },
  {
    color: '#F0F4FF',
    mockupBg: '#bcc8f5',
    emoji: '💹',
    title: 'Crypto Portfolio Platform',
    desc: 'Full-stack crypto management with Binance API, JWT auth, FIFO P&L engine, and a React dashboard with live charts built at Infosys.',
    link: 'https://github.com/23000285',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-inner">

        {/* Header row exactly like image 4 */}
        <div className="projects-header">
          <div>
            <p className="projects-label">Recent Projects</p>
            <h2 className="projects-title">My Portfolio</h2>
          </div>
          <a
            href="https://github.com/23000285"
            target="_blank"
            rel="noopener noreferrer"
            className="github-pill"
          >
            <span className="github-pill-icon">⚡</span>
            Visit My GitHub
          </a>
        </div>

        {/* 3 project cards */}
        <div className="projects-grid">
          {PROJECTS.map(({ color, mockupBg, emoji, title, desc, link }, i) => (
            <div key={title} className={`proj-card reveal reveal-d${i + 1}`}>
              {/* Screenshot / mockup area — styled like the cards in image 4 */}
              <div className="proj-thumb" style={{ background: color }}>
                <div className="proj-mockup" style={{ background: mockupBg }}>
                  <span className="proj-mockup-emoji">{emoji}</span>
                  <div className="proj-mockup-lines">
                    <div className="proj-mockup-line" style={{ width: '70%' }} />
                    <div className="proj-mockup-line" style={{ width: '90%' }} />
                    <div className="proj-mockup-line" style={{ width: '55%' }} />
                    <div className="proj-mockup-line" style={{ width: '80%' }} />
                  </div>
                </div>
              </div>

              <div className="proj-body">
                <h3 className="proj-title">{title}</h3>
                <p className="proj-desc">{desc}</p>
                <a href={link} target="_blank" rel="noopener noreferrer" className="proj-link">
                  View In GitHub&nbsp;↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
