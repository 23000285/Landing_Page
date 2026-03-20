import './Achievements.css'

const ACHIEVEMENTS = [
  {
    icon: '⭐', bg: '#FFF8E1',
    title: 'HackerRank 5-Star Badges',
    desc: 'Earned 5-star ratings in Java, Python, and C — top tier among competitive programmers.',
  },
  {
    icon: '🔥', bg: '#FFF3E0',
    title: 'LeetCode 50-Day Streak',
    desc: 'Maintained a 50-day consecutive DSA problem-solving streak on LeetCode.',
  },
  {
    icon: '🏆', bg: '#E3F2FD',
    title: 'Kyndryl AI ASCEND — Finalist',
    desc: 'Reached the finals in the Kyndryl AI ASCEND Hackathon among top teams from 160+ participants.',
  },
  {
    icon: '🥇', bg: '#FCE4EC',
    title: 'Gold Medal — Computer Science',
    desc: 'Scored 100/100 in Computer Science in HSC board exams, earning the school gold medal.',
  },
  {
    icon: '📊', bg: '#F3E5F5',
    title: 'IBM Datathon',
    desc: 'Participated in IBM Datathon, solving complex data science and analytics challenges.',
  },
  {
    icon: '🛒', bg: '#E8F5E9',
    title: 'Flipkart Grid',
    desc: "Participated in Flipkart Grid, one of India's premier engineering competitions.",
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="section achieve-section">
      <div className="section-inner">
        <span className="section-tag">Achievements</span>
        <h2 className="section-title">Awards & Competitions</h2>
        <p className="section-sub">
          Competing, learning, and earning recognition across platforms and hackathons.
        </p>

        <div className="achieve-grid">
          {ACHIEVEMENTS.map(({ icon, bg, title, desc }) => (
            <div key={title} className="achieve-card reveal">
              <div className="achieve-icon" style={{ background: bg }}>{icon}</div>
              <div className="achieve-text">
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
