import { useState } from 'react'
import './Skills.css'

const DOMAINS = [
  {
    id: 'backend',
    title: 'Backend',
    icon: '☕',
    color: '#FF6B35',
    colorLight: '#FFF3EE',
    learnUrl: 'https://spring.io/projects/spring-boot',
    learnLabel: 'spring.io',
    skills: [
      { name: 'Java',          abbr: 'Java',  icon: '☕' },
      { name: 'Spring Boot',   abbr: 'SB',    icon: '🍃' },
      { name: 'REST APIs',     abbr: 'REST',  icon: '🔌' },
      { name: 'Microservices', abbr: 'μSvc',  icon: '🧩' },
      { name: 'JPA/Hibernate', abbr: 'JPA',   icon: '🗃️' },
      { name: 'Spring MVC',    abbr: 'MVC',   icon: '🔄' },
    ],
  },
  {
    id: 'security',
    title: 'Security',
    icon: '🔐',
    color: '#E63946',
    colorLight: '#FFECEE',
    learnUrl: 'https://spring.io/projects/spring-security',
    learnLabel: 'spring.io/security',
    skills: [
      { name: 'Spring Security', abbr: 'SecF',  icon: '🛡️' },
      { name: 'JWT',             abbr: 'JWT',   icon: '🔑' },
      { name: 'OAuth 2.0',       abbr: 'OAuth', icon: '🔓' },
      { name: 'OTP / Email',     abbr: 'OTP',   icon: '📧' },
      { name: 'RBAC',            abbr: 'RBAC',  icon: '👥' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    icon: '☁️',
    color: '#FF9900',
    colorLight: '#FFF7E6',
    learnUrl: 'https://aws.amazon.com/getting-started/',
    learnLabel: 'aws.amazon.com',
    skills: [
      { name: 'AWS EC2',    abbr: 'EC2',    icon: '💻' },
      { name: 'AWS S3',     abbr: 'S3',     icon: '🗄️' },
      { name: 'AWS Lambda', abbr: 'λ',      icon: '⚡' },
      { name: 'IAM',        abbr: 'IAM',    icon: '🪪' },
      { name: 'Docker',     abbr: 'Docker', icon: '🐳' },
      { name: 'CI/CD',      abbr: 'CI/CD',  icon: '🔁' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: '⚛️',
    color: '#0EA5E9',
    colorLight: '#E0F4FF',
    learnUrl: 'https://react.dev',
    learnLabel: 'react.dev',
    skills: [
      { name: 'React.js',   abbr: 'React', icon: '⚛️' },
      { name: 'JavaScript', abbr: 'JS',    icon: '🟨' },
      { name: 'HTML5',      abbr: 'HTML',  icon: '🌐' },
      { name: 'CSS3',       abbr: 'CSS',   icon: '🎨' },
    ],
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    icon: '🤖',
    color: '#7C3AED',
    colorLight: '#F3EDFF',
    learnUrl: 'https://pytorch.org',
    learnLabel: 'pytorch.org',
    skills: [
      { name: 'PyTorch',      abbr: 'Torch', icon: '🔥' },
      { name: 'TensorFlow',   abbr: 'TF',    icon: '🧠' },
      { name: 'Scikit-Learn', abbr: 'SKL',   icon: '📊' },
      { name: 'CNN',          abbr: 'CNN',   icon: '🖼️' },
      { name: 'NLP',          abbr: 'NLP',   icon: '💬' },
      { name: 'NumPy/Pandas', abbr: 'Numpy', icon: '🔢' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: '🗄️',
    color: '#336791',
    colorLight: '#EAF2FB',
    learnUrl: 'https://www.postgresql.org/docs/',
    learnLabel: 'postgresql.org',
    skills: [
      { name: 'PostgreSQL', abbr: 'PG',  icon: '🐘' },
      { name: 'MySQL',      abbr: 'SQL', icon: '🐬' },
      { name: 'SQL',        abbr: 'SQL', icon: '📋' },
    ],
  },
  {
    id: 'languages',
    title: 'Languages',
    icon: '💻',
    color: '#1C7C54',
    colorLight: '#E8F5F0',
    learnUrl: 'https://docs.oracle.com/en/java/',
    learnLabel: 'oracle.com/java',
    skills: [
      { name: 'Java',       abbr: 'Java', icon: '☕' },
      { name: 'Python',     abbr: 'Py',   icon: '🐍' },
      { name: 'C',          abbr: 'C',    icon: '⚙️' },
      { name: 'JavaScript', abbr: 'JS',   icon: '🟨' },
      { name: 'SQL',        abbr: 'SQL',  icon: '📋' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: '🔧',
    color: '#475569',
    colorLight: '#F1F5F9',
    learnUrl: 'https://git-scm.com/doc',
    learnLabel: 'git-scm.com',
    skills: [
      { name: 'Git',         abbr: 'Git',    icon: '🐙' },
      { name: 'JUnit',       abbr: 'JUnit',  icon: '✅' },
      { name: 'Swagger',     abbr: 'Swagger',icon: '📖' },
      { name: 'Postman',     abbr: 'Postman',icon: '📬' },
      { name: 'Agile/Scrum', abbr: 'Scrum',  icon: '🏃' },
    ],
  },
]

function HexDomain({ domain }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={'hex-domain' + (open ? ' hex-domain-open' : '')}
      style={{ '--hc': domain.color, '--hl': domain.colorLight }}
    >
      {/* ─── TRUE HEXAGON (CSS clip-path) ─── */}
      <button
        className="hexagon"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-label={`${domain.title} skills`}
      >
        {/* Inner face */}
        <div className="hex-face">
          <span className="hex-icon">{domain.icon}</span>
          <span className="hex-label">{domain.title}</span>
          <span className="hex-hint">{open ? 'click to close' : 'click to open'}</span>
        </div>
      </button>

      {/* ─── SKILL CIRCLES PANEL ─── */}
      <div className="hex-skills-panel">
        <div className="hex-skills-grid">
          {domain.skills.map((sk, i) => (
            <div
              key={sk.name}
              className="skill-circle"
              title={sk.name}
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <span className="skill-circle-icon">{sk.icon}</span>
              <span className="skill-circle-name">{sk.abbr}</span>
            </div>
          ))}
        </div>

        {/* Official documentation link */}
        <a
          href={domain.learnUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hex-learn-link"
          onClick={e => e.stopPropagation()}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
          {domain.learnLabel}
        </a>
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-inner">
        <p className="skills-label">My Skills</p>
        <h2 className="skills-title">My Expertise</h2>
        <p className="skills-sub">
          Click a hexagon to reveal the skills inside. Hit the link to visit the official documentation.
        </p>

        <div className="hex-grid">
          {DOMAINS.map(domain => (
            <HexDomain key={domain.id} domain={domain} />
          ))}
        </div>
      </div>
    </section>
  )
}
