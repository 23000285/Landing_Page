import './About.css'

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">

        {/* LEFT — photo with purple brush blob behind */}
        <div className="about-photo-wrap reveal">
          <div className="about-blob">
            {/* SVG brush stroke blob exactly like image 2 */}
            <svg viewBox="0 0 420 380" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M60 80 C20 60, 10 120, 30 170 C50 220, 10 260, 40 310 C70 360, 140 390, 200 370 C260 350, 350 380, 390 330 C430 280, 400 200, 380 150 C360 100, 400 40, 360 20 C320 0, 260 30, 200 20 C140 10, 100 100, 60 80 Z"
                fill="#6C47FF"
                opacity="0.85"
              />
            </svg>
          </div>
          <div className="about-photo-frame">
            <div className="about-avatar">
              <span className="about-avatar-emoji">👨‍💻</span>
            </div>
          </div>
        </div>

        {/* RIGHT — text */}
        <div className="about-text reveal reveal-d2">
          <p className="about-label">About</p>
          <h2 className="about-title">About Me</h2>
          <p className="about-p">
            I'm a B.Tech AI &amp; Machine Learning student (2027) at Saveetha Engineering College, Chennai.
            Currently interning as a Java Full-Stack Developer at Infosys SpringBoard, building a
            Crypto Portfolio Management Platform with Spring Boot, React, and PostgreSQL.
          </p>
          <p className="about-p">
            I thrive at the intersection of backend engineering and machine learning — designing FIFO P&amp;L
            engines, JWT-secured REST APIs, and CNN models for medical image classification.
            I love turning complex problems into clean, scalable solutions.
          </p>
          <div className="about-links">
            <a href="mailto:rvenkatanathan2005@gmail.com" className="about-link">📧 rvenkatanathan2005@gmail.com</a>
            <a href="https://linkedin.com/in/venkatanathan-p-r-01b0a6291" target="_blank" rel="noopener noreferrer" className="about-link">🔗 LinkedIn</a>
            <a href="https://github.com/23000285" target="_blank" rel="noopener noreferrer" className="about-link">💻 GitHub</a>
          </div>
        </div>

      </div>
    </section>
  )
}
