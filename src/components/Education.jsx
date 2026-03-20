import './Education.css'

const EDU = [
  {
    icon: '🎓',
    degree: 'B.Tech, AI & Machine Learning',
    school: 'Saveetha Engineering College, Chennai',
    year: '2023 – 2027 (Expected)',
    score: '⭐ CGPA: 8.31 / 10.0',
  },
  {
    icon: '🏫',
    degree: 'HSC (Class 12)',
    school: 'Terapanth Jain Vidyalaya',
    year: '2022 – 2023',
    score: '🥇 87.66% — Gold Medal in Computer Science (100/100)',
  },
]

export default function Education() {
  return (
    <section id="education" className="section edu-section">
      <div className="section-inner">
        <span className="section-tag">Education</span>
        <h2 className="section-title">Academic Background</h2>
        <p className="section-sub">
          Strong academic foundation in AI, Machine Learning, and Computer Science.
        </p>

        <div className="edu-grid">
          {EDU.map(({ icon, degree, school, year, score }) => (
            <div key={degree} className="edu-card reveal">
              <div className="edu-accent-bar" />
              <div className="edu-icon">{icon}</div>
              <h3>{degree}</h3>
              <p className="edu-school">{school}</p>
              <p className="edu-year">{year}</p>
              <span className="edu-score">{score}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
