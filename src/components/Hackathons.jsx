import { useState, useRef } from 'react'
import './Hackathons.css'

const HACKATHONS = [
  {
    id: 'ibm',
    rank: '01',
    name: 'IBM Datathon',
    organizer: 'IBM',
    result: 'Finalist',
    resultColor: '#0062FF',
    resultBg: '#E8F0FF',
    teams: null,
    date: '2024',
    location: 'Chennai, India',
    emoji: '🔵',
    accentColor: '#0062FF',
    story: [
      'Participated in IBM\'s Datathon, a competitive data science challenge that brought together top engineering students from across the country.',
      'Our team tackled a complex real-world dataset problem, applying machine learning techniques including feature engineering, model selection, and hyperparameter tuning to build a high-accuracy predictive model.',
      'The experience sharpened our data wrangling skills in Python (Pandas, NumPy) and model evaluation using Scikit-learn, and gave us exposure to enterprise-scale data challenges.',
    ],
    tags: ['Python', 'Scikit-learn', 'Data Analysis', 'ML Modeling', 'Pandas', 'NumPy'],
  },
  {
    id: 'kyndryl',
    rank: '02',
    name: 'Kyndryl AI ASCEND',
    organizer: 'Kyndryl',
    result: 'Finalist',
    resultColor: '#7C3AED',
    resultBg: '#F3EDFF',
    teams: '160+',
    teamLabel: 'teams competed',
    date: '2024',
    location: 'Pan-India',
    emoji: '🏆',
    accentColor: '#7C3AED',
    story: [
      'Selected as finalists among 160+ competing teams in Kyndryl\'s prestigious AI ASCEND Hackathon — one of the most competitive AI challenges in the region.',
      'Our solution focused on an AI-driven automation framework, leveraging deep learning models to solve an enterprise IT operations problem. We designed the architecture, trained the model pipeline, and presented a live demo to a panel of Kyndryl engineers and AI specialists.',
      'Reaching the finals from a pool of 160+ teams was a testament to our team\'s technical depth in AI/ML and our ability to build end-to-end solutions under pressure.',
    ],
    tags: ['AI/ML', 'Deep Learning', 'Python', 'PyTorch', 'System Design', 'Presentation'],
  },
  {
    id: 'hackhustle',
    rank: '03',
    name: 'HackHustle',
    organizer: 'HackHustle',
    result: 'Finalist',
    resultColor: '#D97706',
    resultBg: '#FFF8E6',
    teams: '87',
    teamLabel: 'teams competed',
    date: '2024',
    location: 'Chennai, India',
    emoji: '⚡',
    accentColor: '#D97706',
    story: [
      'Reached the finals of HackHustle among 87 participating teams — a fast-paced hackathon that tested rapid prototyping, creativity, and full-stack development skills.',
      'We built a full-stack web application within a strict 24-hour window, integrating a Spring Boot backend with a React frontend and deploying it on AWS EC2. The app solved a real-world logistics coordination problem.',
      'The hackathon was a great proving ground for combining backend engineering with quick thinking — we shipped a working product end-to-end in under a day.',
    ],
    tags: ['Spring Boot', 'React', 'AWS EC2', 'PostgreSQL', 'REST API', 'Full Stack'],
  },
]

// Upload slot component — shows placeholder, allows image upload
function PhotoSlot({ label, icon }) {
  const [preview, setPreview] = useState(null)
  const inputRef = useRef(null)

  const handleFile = (e) => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => setPreview(ev.target.result)
    reader.readAsDataURL(file)
  }

  return (
    <div className="photo-slot" onClick={() => inputRef.current.click()}>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFile}
      />
      {preview ? (
        <>
          <img src={preview} alt={label} className="photo-slot-img" />
          <div className="photo-slot-overlay">
            <span>Change Photo</span>
          </div>
        </>
      ) : (
        <div className="photo-slot-empty">
          <span className="photo-slot-icon">{icon}</span>
          <span className="photo-slot-label">{label}</span>
          <span className="photo-slot-hint">Click to upload</span>
        </div>
      )}
    </div>
  )
}

// Certificate upload slot — shows PDF icon + file name
function CertSlot({ label }) {
  const [file, setFile] = useState(null)
  const inputRef = useRef(null)

  const handleFile = (e) => {
    const f = e.target.files[0]
    if (!f) return
    setFile(f)
  }

  return (
    <div className="cert-slot" onClick={() => inputRef.current.click()}>
      <input
        ref={inputRef}
        type="file"
        accept=".pdf,image/*"
        style={{ display: 'none' }}
        onChange={handleFile}
      />
      {file ? (
        <div className="cert-slot-filled">
          <span className="cert-slot-pdf-icon">📄</span>
          <span className="cert-slot-filename">{file.name}</span>
          <span className="cert-slot-change">Change</span>
        </div>
      ) : (
        <div className="cert-slot-empty">
          <span className="cert-slot-pdf-icon">📋</span>
          <span className="cert-slot-label">{label}</span>
          <span className="cert-slot-hint">Click to upload PDF / image</span>
        </div>
      )}
    </div>
  )
}

export default function Hackathons() {
  const [expanded, setExpanded] = useState(null)

  return (
    <section id="hackathons" className="hack-section">
      <div className="hack-inner">
        <p className="hack-label">Competitions</p>
        <h2 className="hack-title">Hackathon Participations</h2>
        <p className="hack-sub">
          Competed in multiple national-level hackathons, reaching the finals in all three.
        </p>

        <div className="hack-list">
          {HACKATHONS.map((h) => {
            const isOpen = expanded === h.id
            return (
              <div
                key={h.id}
                className={`hack-card reveal ${isOpen ? 'hack-card-open' : ''}`}
                style={{ '--accent': h.accentColor }}
              >
                {/* ── Card Header ── */}
                <div className="hack-card-header" onClick={() => setExpanded(isOpen ? null : h.id)}>
                  <div className="hack-card-left">
                    <span className="hack-rank">{h.rank}</span>
                    <div className="hack-logo">{h.emoji}</div>
                    <div className="hack-meta">
                      <h3 className="hack-name">{h.name}</h3>
                      <p className="hack-organizer">{h.organizer} · {h.date} · {h.location}</p>
                    </div>
                  </div>

                  <div className="hack-card-right">
                    {h.teams && (
                      <div className="hack-teams">
                        <span className="hack-teams-num">{h.teams}</span>
                        <span className="hack-teams-label">{h.teamLabel}</span>
                      </div>
                    )}
                    <span
                      className="hack-result-badge"
                      style={{ color: h.resultColor, background: h.resultBg }}
                    >
                      🏅 {h.result}
                    </span>
                    <span className="hack-chevron">{isOpen ? '▲' : '▼'}</span>
                  </div>
                </div>

                {/* ── Tech tags ── */}
                <div className="hack-tags">
                  {h.tags.map(t => (
                    <span key={t} className="hack-tag">{t}</span>
                  ))}
                </div>

                {/* ── Expanded section ── */}
                {isOpen && (
                  <div className="hack-expanded">

                    {/* Story */}
                    <div className="hack-story">
                      <h4 className="hack-expanded-title">Our Story</h4>
                      {h.story.map((para, i) => (
                        <p key={i} className="hack-story-para">{para}</p>
                      ))}
                    </div>

                    {/* Photo upload slots */}
                    <div className="hack-photos-section">
                      <h4 className="hack-expanded-title">Photos</h4>
                      <div className="hack-photos-grid">
                        <PhotoSlot label="Team Photo" icon="👥" />
                        <PhotoSlot label="Hackathon Moment" icon="🎯" />
                        <PhotoSlot label="Project Demo" icon="💻" />
                      </div>
                    </div>

                    {/* Certificate upload */}
                    <div className="hack-cert-section">
                      <h4 className="hack-expanded-title">Participation Certificate</h4>
                      <CertSlot label="Upload your certificate (PDF or image)" />
                    </div>

                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
