import './Achievements.css'

const ITEMS = [
  { icon: '⭐', bg: '#FFF8E1', title: 'HackerRank 5-Star Badges', desc: 'Java, Python & C — top-tier rating on competitive platform.' },
  { icon: '🔥', bg: '#FFF3E0', title: 'LeetCode 50-Day Streak',   desc: 'Consecutive DSA problem-solving streak.' },
  { icon: '🏆', bg: '#E3F2FD', title: 'Kyndryl AI ASCEND Finalist', desc: 'Top team among 160+ participants in AI hackathon.' },
  { icon: '🥇', bg: '#FCE4EC', title: 'Gold Medal — CS (HSC)',    desc: 'Scored 100/100 in Computer Science board exams.' },
  { icon: '📊', bg: '#F3E5F5', title: 'IBM Datathon',             desc: 'Solved complex data science challenges at IBM event.' },
  { icon: '🛒', bg: '#E8F5E9', title: 'Flipkart Grid',            desc: "Participated in India's premier engineering competition." },
]

export default function Achievements() {
  return (
    <section id="achievements" className="ach-section">
      <div className="ach-inner">
        <p className="section-label3">Achievements</p>
        <h2 className="section-heading3">Awards & Competitions</h2>

        <div className="ach-grid">
          {ITEMS.map(({ icon, bg, title, desc }, i) => (
            <div key={title} className={`ach-card reveal reveal-d${(i % 4) + 1}`}>
              <div className="ach-icon" style={{ background: bg }}>{icon}</div>
              <div>
                <h4 className="ach-title">{title}</h4>
                <p className="ach-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
