import './Skills.css'

const SKILLS = [
  { icon: '☕', title: 'Backend Development', tags: ['Java','Spring Boot','Spring MVC','REST APIs','Microservices','JPA / Hibernate'] },
  { icon: '🔐', title: 'Security', tags: ['Spring Security','JWT Auth','OTP Verification','Role-Based Access Control'] },
  { icon: '☁️', title: 'Cloud & DevOps', tags: ['AWS EC2','AWS S3','AWS Lambda','IAM','Docker','CI/CD'] },
  { icon: '⚛️', title: 'Frontend', tags: ['React.js','HTML5','CSS3','JavaScript'] },
  { icon: '🗄️', title: 'Databases', tags: ['PostgreSQL','MySQL','SQL'] },
  { icon: '🤖', title: 'Machine Learning', tags: ['PyTorch','Scikit-Learn','NumPy','Pandas','TensorFlow','CNN','NLP'] },
  { icon: '💻', title: 'Languages', tags: ['Java','Python','C','SQL','JavaScript'] },
  { icon: '🔧', title: 'Tools & Practices', tags: ['Git','JUnit','Swagger / OpenAPI','Postman','Agile / Scrum'] },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-inner">
        <span className="section-tag">My Skills</span>
        <h2 className="section-title">My Expertise</h2>
        <p className="section-sub">
          A versatile stack spanning backend engineering, cloud infrastructure,
          frontend development, and machine learning.
        </p>

        <div className="skills-grid">
          {SKILLS.map(({ icon, title, tags }) => (
            <div key={title} className="skill-card reveal">
              <div className="skill-icon">{icon}</div>
              <h3 className="skill-title">{title}</h3>
              <div className="skill-tags">
                {tags.map(t => <span key={t} className="skill-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
