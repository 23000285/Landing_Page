import { useState, useRef } from 'react'
import './Certificates.css'

const CERTS = [
  {
    id: 'aws',
    priority: '01',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    issuerShort: 'AWS',
    issued: '2024',
    credentialId: 'AWS-CCP-XXXXXXXX',
    verifyUrl: 'https://aws.amazon.com/verification',
    color: '#FF9900',
    colorBg: '#FFF7E6',
    icon: '☁️',
    description: 'Validates foundational cloud knowledge and AWS services across compute, storage, security, architecture, pricing, and support.',
    skills: ['EC2', 'S3', 'IAM', 'Lambda', 'CloudWatch', 'VPC', 'RDS'],
  },
  {
    id: 'nptel',
    priority: '02',
    name: 'Cloud Computing',
    issuer: 'NPTEL — IIT',
    issuerShort: 'NPTEL',
    issued: '2024',
    credentialId: 'NPTEL24CS-XXXXXXXX',
    verifyUrl: 'https://nptel.ac.in/noc/Ecertificate',
    color: '#1565C0',
    colorBg: '#E3F2FD',
    icon: '🎓',
    description: 'NPTEL certification covering cloud service models (IaaS, PaaS, SaaS), virtualization, distributed systems, and cloud security.',
    skills: ['Cloud Architecture', 'Virtualization', 'Distributed Systems', 'Cloud Security', 'SaaS/PaaS/IaaS'],
  },
  {
    id: 'ibm',
    priority: '03',
    name: 'IBM Full Stack Java Developer',
    issuer: 'IBM — Coursera',
    issuerShort: 'IBM',
    issued: '2025',
    credentialId: 'COURSERA-IBM-XXXXXXXX',
    verifyUrl: 'https://www.coursera.org/account/accomplishments',
    color: '#0062FF',
    colorBg: '#E8F0FF',
    icon: '💻',
    description: 'Comprehensive full-stack Java development program covering Spring Boot, Microservices, REST APIs, Docker, and cloud deployment.',
    skills: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'Docker', 'Cloud'],
  },
  {
    id: 'simplilearn',
    priority: '04',
    name: 'Machine Learning',
    issuer: 'Simplilearn',
    issuerShort: 'Simplilearn',
    issued: '2024',
    credentialId: 'SL-ML-XXXXXXXX',
    verifyUrl: 'https://www.simplilearn.com/skillup-certificate-landing',
    color: '#E65100',
    colorBg: '#FFF3E0',
    icon: '🤖',
    description: 'End-to-end machine learning certification covering supervised/unsupervised learning, neural networks, model evaluation, and deployment.',
    skills: ['Python', 'Scikit-learn', 'Neural Networks', 'Model Evaluation', 'Feature Engineering'],
  },
]

// Individual cert card with upload + PDF viewer
function CertCard({ cert }) {
  const [pdfFile, setPdfFile]       = useState(null)
  const [pdfUrl, setPdfUrl]         = useState(null)
  const [viewing, setViewing]       = useState(false)
  const inputRef                    = useRef(null)

  const handleUpload = (e) => {
    const file = e.target.files[0]
    if (!file) return
    setPdfFile(file)
    const url = URL.createObjectURL(file)
    setPdfUrl(url)
    setViewing(true)
  }

  return (
    <div className={`cert-card reveal`} style={{ '--ccolor': cert.color, '--cbg': cert.colorBg }}>
      {/* PDF viewer modal */}
      {viewing && pdfUrl && (
        <div className="pdf-overlay" onClick={() => setViewing(false)}>
          <div className="pdf-modal" onClick={e => e.stopPropagation()}>
            <div className="pdf-modal-header">
              <span className="pdf-modal-title">{cert.name}</span>
              <button className="pdf-modal-close" onClick={() => setViewing(false)}>✕</button>
            </div>
            {pdfFile?.type === 'application/pdf' ? (
              <iframe
                src={pdfUrl}
                title={cert.name}
                className="pdf-iframe"
              />
            ) : (
              <img src={pdfUrl} alt={cert.name} className="pdf-img-preview" />
            )}
          </div>
        </div>
      )}

      {/* Priority number */}
      <span className="cert-priority">{cert.priority}</span>

      {/* Top row */}
      <div className="cert-top">
        <div className="cert-icon-wrap" style={{ background: cert.colorBg }}>
          <span className="cert-icon">{cert.icon}</span>
        </div>
        <div className="cert-header-text">
          <h3 className="cert-name">{cert.name}</h3>
          <p className="cert-issuer">{cert.issuer} · {cert.issued}</p>
          <p className="cert-id">ID: {cert.credentialId}</p>
        </div>
      </div>

      {/* Description */}
      <p className="cert-desc">{cert.description}</p>

      {/* Skills */}
      <div className="cert-skills">
        {cert.skills.map(s => (
          <span key={s} className="cert-skill-tag">{s}</span>
        ))}
      </div>

      {/* Actions */}
      <div className="cert-actions">
        {/* Upload / View certificate */}
        <input
          ref={inputRef}
          type="file"
          accept=".pdf,image/*"
          style={{ display: 'none' }}
          onChange={handleUpload}
        />
        {pdfFile ? (
          <button
            className="cert-btn cert-btn-view"
            onClick={() => setViewing(true)}
          >
            <span>📄</span> View Certificate
          </button>
        ) : (
          <button
            className="cert-btn cert-btn-upload"
            onClick={() => inputRef.current.click()}
          >
            <span>⬆</span> Upload Certificate
          </button>
        )}

        {pdfFile && (
          <button
            className="cert-btn cert-btn-change"
            onClick={() => inputRef.current.click()}
          >
            Change
          </button>
        )}

        {/* Verify link */}
        <a
          href={cert.verifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cert-btn cert-btn-verify"
        >
          <span>🔗</span> Verify
        </a>
      </div>
    </div>
  )
}

export default function Certificates() {
  return (
    <section id="certificates" className="certs-section">
      <div className="certs-inner">
        <p className="certs-label">Credentials</p>
        <h2 className="certs-title">Certifications</h2>
        <p className="certs-sub">
          Industry-recognised certifications — click <strong>View Certificate</strong> to open the PDF
          or <strong>Verify</strong> to check on the official issuer's page.
        </p>

        <div className="certs-grid">
          {CERTS.map(cert => (
            <CertCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  )
}
