import './Skills.css'

const SKILLS = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <circle cx="20" cy="20" r="18" stroke="#6C47FF" strokeWidth="2"/>
        <path d="M13 20c0-3.866 3.134-7 7-7s7 3.134 7 7-3.134 7-7 7-7-3.134-7-7z" stroke="#6C47FF" strokeWidth="2"/>
        <path d="M20 13v14M13 20h14" stroke="#6C47FF" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Backend Development',
    desc: 'Spring Boot, REST APIs, Microservices, JPA/Hibernate, Spring MVC',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <rect x="6" y="6" width="28" height="28" rx="4" stroke="#6C47FF" strokeWidth="2"/>
        <path d="M14 20h12M20 14v12" stroke="#6C47FF" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="20" cy="20" r="3" fill="#6C47FF"/>
      </svg>
    ),
    title: 'Security & Auth',
    desc: 'Spring Security, JWT, OTP Verification, Role-Based Access Control',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <path d="M8 28L20 12l12 16" stroke="#6C47FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 22l6-8 6 8" stroke="#6C47FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="20" cy="30" r="2" fill="#6C47FF"/>
      </svg>
    ),
    title: 'Machine Learning',
    desc: 'PyTorch, TensorFlow, Scikit-Learn, CNN, NLP, NumPy, Pandas',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <polyline points="12,26 6,20 12,14" stroke="#6C47FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="28,14 34,20 28,26" stroke="#6C47FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="22" y1="10" x2="18" y2="30" stroke="#6C47FF" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Cloud & Frontend',
    desc: 'AWS (EC2, S3, Lambda, IAM), Docker, React.js, HTML, CSS, JavaScript',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-inner">
        <p className="skills-label">My Skills</p>
        <h2 className="skills-title">My Expertise</h2>

        <div className="skills-grid">
          {SKILLS.map(({ icon, title, desc }, i) => (
            <div key={title} className={`skill-card reveal reveal-d${i + 1}`}>
              <div className="skill-icon">{icon}</div>
              <h3 className="skill-card-title">{title}</h3>
              <p className="skill-card-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
