import './Education.css'

const EDU = [
  {
    icon: '🎓',
    degree: 'B.Tech, AI & Machine Learning',
    school: 'Saveetha Engineering College, Chennai',
    period: '2023 – 2027 (Expected)',
    score: 'CGPA: 8.31 / 10.0',
  },
  {
    icon: '🏫',
    degree: 'HSC (Class 12)',
    school: 'Terapanth Jain Vidyalaya',
    period: '2022 – 2023',
    score: '87.66% — Gold Medal, Computer Science (100/100)',
  },
]

export default function Education() {
  return (
    <section id="education" className="edu-section">
      <div className="edu-inner">
        <p className="section-label2">Education</p>
        <h2 className="section-heading2">Academic Background</h2>

        <div className="edu-grid">
          {EDU.map(({ icon, degree, school, period, score }, i) => (
            <div key={degree} className={`edu-card reveal reveal-d${i + 1}`}>
              <div className="edu-top-bar" />
              <div className="edu-icon">{icon}</div>
              <h3 className="edu-degree">{degree}</h3>
              <p className="edu-school">{school}</p>
              <p className="edu-period">{period}</p>
              <span className="edu-score">{score}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
