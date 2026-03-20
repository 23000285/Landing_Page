import './About.css'

const CHIPS = ['☕ Java','🐍 Python','🍃 Spring Boot','⚛️ React','☁️ AWS','🤖 PyTorch','🗄️ PostgreSQL','🐳 Docker']

const INFO = [
  { icon: '📧', text: 'rvenkatanathan2005@gmail.com', href: 'mailto:rvenkatanathan2005@gmail.com' },
  { icon: '📱', text: '9025981726' },
  { icon: '🔗', text: 'LinkedIn Profile', href: 'https://linkedin.com/in/venkatanathan-p-r-01b0a6291' },
  { icon: '💻', text: 'github.com/23000285', href: 'https://github.com/23000285' },
  { icon: '📍', text: 'Chennai, Tamil Nadu, India' },
]

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="about-inner section-inner">
        <div className="about-img-side reveal">
          <div className="about-glow" />
          <div className="about-frame">
            <div className="about-avatar-icon">👨‍💻</div>
          </div>
        </div>

        <div className="about-text reveal">
          <span className="section-tag" style={{ color: '#9B7FFF' }}>About</span>
          <h2 className="section-title" style={{ color: '#fff' }}>About Me</h2>

          <p className="about-p">
            I'm a B.Tech AI &amp; Machine Learning student (2027) at Saveetha Engineering College, Chennai,
            passionate about building robust backend systems and intelligent software.
            Currently interning as a Java Full-Stack Developer at <strong>Infosys SpringBoard</strong>,
            where I'm engineering a Crypto Portfolio Management Platform.
          </p>
          <p className="about-p">
            I thrive at the intersection of backend engineering and machine learning — from designing
            FIFO P&amp;L engines and JWT-secured APIs to training CNN models for medical image
            classification. I love turning complex problems into clean, scalable solutions.
          </p>

          <div className="about-chips">
            {CHIPS.map(c => <span key={c} className="about-chip">{c}</span>)}
          </div>

          <div className="about-info">
            {INFO.map(({ icon, text, href }) => (
              <div key={text} className="about-info-row">
                <span>{icon}</span>
                {href
                  ? <a href={href} target="_blank" rel="noopener noreferrer">{text}</a>
                  : <span>{text}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
