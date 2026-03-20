import './Hero.css'

const STATS = [
  { num: '15+', label: 'REST APIs Built' },
  { num: '8.31', label: 'CGPA / 10.0' },
  { num: '5★', label: 'HackerRank Java' },
  { num: '50', label: 'Day LeetCode Streak' },
]

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Decorative blobs */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />

      {/* Sparkles */}
      {[
        { top: '18%', left: '7%',  delay: '0s',    size: '1.4rem' },
        { top: '28%', right: '10%', delay: '0.8s', size: '0.9rem' },
        { bottom: '28%', left: '22%', delay: '1.5s', size: '0.8rem' },
        { bottom: '20%', right: '7%', delay: '0.3s', size: '1.1rem' },
      ].map((s, i) => (
        <span key={i} className="sparkle" style={{ ...s, animationDelay: s.delay, fontSize: s.size }}>✦</span>
      ))}

      <div className="hero-inner">
        {/* TEXT SIDE */}
        <div className="hero-text">
          <div className="hero-tag">
            <span className="pulse-dot" />
            Hey, I am Venkatanathan 👋
          </div>

          <h1 className="hero-h1">
            I build <span className="hero-accent">scalable backends</span>{' '}
            &amp; intelligent systems
          </h1>

          <p className="hero-desc">
            Backend Developer &amp; AI/ML student at Saveetha Engineering College (B.Tech 2027).
            Crafting REST APIs, microservices, and ML pipelines — one commit at a time.
          </p>

          <div className="hero-btns">
            <a href="#contact" className="btn-primary">Get In Touch →</a>
            <a href="#projects" className="btn-outline">View Projects</a>
          </div>

          <div className="hero-stats">
            {STATS.map(({ num, label }) => (
              <div key={label} className="hero-stat">
                <span className="hero-stat-num">{num}</span>
                <span className="hero-stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* IMAGE SIDE */}
        <div className="hero-img-side">
          <div className="hero-img-wrap">
            <div className="hero-avatar">
              <span>👨‍💻</span>
              <p>P R Venkatanathan</p>
              <small>Backend Developer</small>
            </div>
          </div>

          <div className="badge badge-tl">
            <span className="badge-icon">☁️</span>
            <div>
              <strong>AWS Certified</strong>
              <small>Cloud Practitioner</small>
            </div>
          </div>

          <div className="badge badge-br">
            <span className="badge-icon">🏆</span>
            <div>
              <strong>Hackathon</strong>
              <small>Kyndryl Finalist</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
