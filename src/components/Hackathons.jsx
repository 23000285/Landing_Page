/*
  ══════════════════════════════════════════════════════════════
  HOW TO ADD YOUR PHOTOS & CERTIFICATES PERMANENTLY
  ══════════════════════════════════════════════════════════════

  STEP 1 — Create these folders inside portfolio2/public/:

    public/
      hackathons/
        ibm/
          team.jpg          ← team photo
          moment.jpg        ← hackathon moment photo
          demo.jpg          ← project demo photo
          certificate.pdf   ← participation certificate
        kyndryl/
          team.jpg
          moment.jpg
          demo.jpg
          certificate.pdf
        hackhustle/
          team.jpg
          moment.jpg
          demo.jpg
          certificate.pdf

  STEP 2 — Update the `photos` and `certificate` fields below
           to match your exact filenames.

  STEP 3 — Commit & push:
    git add public/hackathons/
    git commit -m "Add hackathon photos and certificates"
    git push

  BEHAVIOUR:
    • Clicking a photo  → opens a LIGHTBOX (blurred background,
                          image centred) — press Esc or click outside to close
    • Clicking "View Certificate" → opens PDF in a NEW browser tab
  ══════════════════════════════════════════════════════════════
*/

import { useState, useEffect } from 'react'
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
    date: '11 October 2025',
    location: 'Chennai, India',
    emoji: '🔵',
    accentColor: '#0062FF',
    story: [
      "Participated in IBM's Datathon, a competitive data science challenge that brought together top engineering students from across the country.",
      "Our team tackled a complex real-world dataset problem, applying machine learning techniques including feature engineering, model selection, and hyperparameter tuning to build a high-accuracy predictive model.",
      "The experience sharpened our data wrangling skills in Python (Pandas, NumPy) and model evaluation using Scikit-learn, and gave us exposure to enterprise-scale data challenges.",
    ],
    tags: ['Python', 'Scikit-learn', 'Data Analysis', 'ML Modeling', 'Pandas', 'NumPy'],
    // ↓ Update filenames to match what you put in public/hackathons/ibm/
    photos: [
      { src: '/hackathons/ibm/team.jpg',    label: 'Team Photo' },
      { src: '/hackathons/ibm/moment.jpg',  label: 'Hackathon Moment' },
      { src: '/hackathons/ibm/demo.jpg',    label: 'Project Demo' },
    ],
    certificate: '/hackathons/ibm/certificate.pdf',
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
    date: '8 March 2026',
    location: 'Saveetha Engineering College, Chennai',
    emoji: '🏆',
    accentColor: '#7C3AED',
    story: [
      "Selected as finalists among 160+ competing teams in Kyndryl's prestigious AI ASCEND Hackathon — one of the most competitive AI challenges in the region.",
      "Our solution focused on an AI-driven automation framework, leveraging deep learning models to solve an enterprise IT operations problem. We designed the architecture, trained the model pipeline, and presented a live demo to a panel of Kyndryl engineers and AI specialists.",
      "Reaching the finals from a pool of 160+ teams was a testament to our team's technical depth in AI/ML and our ability to build end-to-end solutions under pressure.",
    ],
    tags: ['AWS services', 'Mysql and MongoDB', 'Google AI Studio for Website'],
    photos: [
      { src: '/hackathons/kyndryl/team.jpg',   label: 'Team Photo' },
      { src: '/hackathons/kyndryl/moment.jpg', label: 'Hackathon Moment' },
      { src: '/hackathons/kyndryl/demo.jpg',   label: 'Project Demo' },
    ],
    certificate: '/hackathons/kyndryl/certificate.pdf',
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
    date: '29 April 2026',
    location: 'Saveetha Engineering College, Chennai',
    emoji: '⚡',
    accentColor: '#D97706',
    story: [
      "Reached the finals of HackHustle among 87 participating teams — a fast-paced hackathon that tested rapid prototyping, creativity, and full-stack development skills.",
      "We built a full-stack web application within a strict 24-hour window, integrating a Spring Boot backend with a React frontend and deploying it on AWS EC2. The app solved a real-world logistics coordination problem.",
      "The hackathon was a great proving ground for combining backend engineering with quick thinking — we shipped a working product end-to-end in under a day.",
    ],
    tags: ['AI/ML', 'Deep Learning', 'Python', 'System Design', 'Google AI Studio for Website'],
    photos: [
      { src: '/hackathons/hackhustle/team.jpg',   label: 'Team Photo' },
      { src: '/hackathons/hackhustle/moment.jpg', label: 'Hackathon Moment' },
      { src: '/hackathons/hackhustle/demo.jpg',   label: 'Project Demo' },
    ],
    certificate: '/hackathons/hackhustle/certificate.pdf',
  },
]

/* ── Lightbox — blurred backdrop, Esc to close ── */
function Lightbox({ src, label, onClose }) {
  // Close on Esc key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    /* Clicking the backdrop (outside the image) also closes */
    <div className="lightbox-backdrop" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">✕</button>
      <div className="lightbox-content" onClick={e => e.stopPropagation()}>
        <img src={src} alt={label} className="lightbox-img" />
        <p className="lightbox-label">{label}</p>
      </div>
    </div>
  )
}

/* ── Photo grid — 3 thumbnails, click to lightbox ── */
function PhotoGrid({ photos }) {
  const [lightbox, setLightbox] = useState(null) // { src, label } | null

  return (
    <>
      <div className="hack-photos-grid">
        {photos.map((p) => (
          <div
            key={p.src}
            className="photo-thumb"
            onClick={() => setLightbox(p)}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && setLightbox(p)}
            aria-label={`View ${p.label}`}
          >
            <img src={p.src} alt={p.label} className="photo-thumb-img" />
            <div className="photo-thumb-overlay">
              <span className="photo-thumb-zoom">🔍</span>
              <span className="photo-thumb-label">{p.label}</span>
            </div>
          </div>
        ))}
      </div>

      {lightbox && (
        <Lightbox
          src={lightbox.src}
          label={lightbox.label}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  )
}

/* ── Certificate button — opens in new tab ── */
function CertButton({ src }) {
  const handleView = () => {
    window.open(src, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="cert-row">
      <div className="cert-file-info">
        <span className="cert-pdf-icon">📄</span>
        <div>
          <div className="cert-file-name">Participation Certificate</div>
          <div className="cert-file-hint">Opens in a new browser tab</div>
        </div>
      </div>
      <button className="cert-view-btn" onClick={handleView}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
        View Certificate
      </button>
    </div>
  )
}

/* ── Main component ── */
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
                className={'hack-card' + (isOpen ? ' hack-card-open' : '')}
                style={{ '--accent': h.accentColor }}
              >
                {/* Clickable header */}
                <div
                  className="hack-card-header"
                  onClick={() => setExpanded(isOpen ? null : h.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setExpanded(isOpen ? null : h.id)}
                >
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
                    <span className={'hack-chevron' + (isOpen ? ' hack-chevron-open' : '')}>▼</span>
                  </div>
                </div>

                {/* Tech tags */}
                <div className="hack-tags">
                  {h.tags.map(t => <span key={t} className="hack-tag">{t}</span>)}
                </div>

                {/* Expandable panel */}
                <div className={'hack-panel' + (isOpen ? ' hack-panel-open' : '')}>
                  <div className="hack-panel-inner">

                    {/* Story */}
                    <div className="hack-story">
                      <h4 className="hack-section-title">Our Story</h4>
                      {h.story.map((para, i) => (
                        <p key={i} className="hack-story-para">{para}</p>
                      ))}
                    </div>

                    {/* Photos — click to open lightbox */}
                    <div>
                      <h4 className="hack-section-title">Photos — click to view</h4>
                      <PhotoGrid photos={h.photos} />
                    </div>

                    {/* Certificate — opens in new tab */}
                    <div>
                      <h4 className="hack-section-title">Participation Certificate</h4>
                      <CertButton src={h.certificate} />
                    </div>

                  </div>
                </div>

              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
