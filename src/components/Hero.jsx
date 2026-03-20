import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-inner">

        {/* LEFT — text */}
        <div className="hero-text">
          <p className="hero-greeting">Hey, I am Venkatanathan</p>
          <h1 className="hero-headline">
            I build <span className="hero-accent">scalable backends</span><br />
            and intelligent systems
          </h1>
          <p className="hero-desc">
            Backend Developer &amp; AI/ML student at Saveetha Engineering College (B.Tech 2027).
            Passionate about building REST APIs, microservices, and ML pipelines.
          </p>
          <a href="#contact" className="hero-btn">Get In Touch</a>
        </div>

        {/* RIGHT — photo card */}
        <div className="hero-photo-wrap">
          {/* sparkle decorations matching the image */}
          <span className="spark spark-1">✦</span>
          <span className="spark spark-2">✦</span>
          <span className="spark spark-3">+</span>
          <span className="spark spark-4">+</span>

          <div className="hero-photo-card">
            {/* avatar placeholder — replace src with your photo */}
            <div className="hero-avatar-box">
              <div className="hero-avatar-emoji">👨‍💻</div>
              <p className="hero-avatar-name">P R Venkatanathan</p>
              <p className="hero-avatar-role">Backend Developer</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
