import './Certificates.css'

/* ════════════════════════════════════════════════════════════════════
   HOW TO ADD YOUR CERTIFICATE FILES PERMANENTLY
   ════════════════════════════════════════════════════════════════════

   STEP 1 — Create the folder (if it doesn't exist):
     portfolio2/
       public/
         certificates/        ← create this folder

   STEP 2 — Copy your PDF files into that folder:
     public/certificates/aws-cloud-practitioner.pdf
     public/certificates/nptel-cloud-computing.pdf
     public/certificates/ibm-java-fullstack.pdf
     public/certificates/simplilearn-ml.pdf

     ✅ File name tips:
       - Use lowercase, no spaces (use hyphens instead)
       - Accepted formats: .pdf  .jpg  .png
       - Example rename: "AWS Certificate.pdf" → "aws-cloud-practitioner.pdf"

   STEP 3 — Update the `file` path below to match your filename exactly.
     Example: file: '/certificates/aws-cloud-practitioner.pdf'
     The leading slash is required.

   STEP 4 — Commit & push to GitHub:
     git add public/certificates/
     git commit -m "Add certificate files"
     git push

   WHY public/ ?
     Files inside public/ are served as static assets at the root URL.
     Vite does NOT process them — they are copied as-is into the build.
     This means /certificates/aws.pdf will ALWAYS be accessible at:
       https://your-site.com/certificates/aws.pdf
     Perfect for PDFs and images you want permanently on your site.

   VIEWING:
     Clicking "View Certificate" calls window.open(url, '_blank')
     which opens the file in a NEW browser tab — full-screen on both
     desktop and mobile. No popups, no iframes.

   ════════════════════════════════════════════════════════════════════ */

const CERTS = [
  {
    id: 'aws',
    priority: '01',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    issued: 'August 2025',
    credentialId: null,          // ← replace with your real credential ID
    color: '#FF9900',
    colorBg: '#FFF7E6',
    icon: '☁️',
    description: 'Validates foundational cloud knowledge and AWS services across compute, storage, security, architecture, pricing, and support.',
    skills: ['EC2', 'S3', 'IAM', 'Lambda', 'CloudWatch', 'VPC', 'RDS'],
    file: '/certificates/aws-cloud-practitioner.pdf',   // ← update filename if needed
    verifyUrl: 'https://www.credly.com/badges/559227f2-a565-44a6-b253-1c10df499368/public_url',
    showVerify: true,
  },
  {
    id: 'nptel',
    priority: '02',
    name: 'Cloud Computing',
    issuer: 'NPTEL — IIT',
    issued: 'Jul-Oct 2024',
    credentialId: 'NPTEL24CS-XXXXXXXX',
    color: '#1565C0',
    colorBg: '#E3F2FD',
    icon: '🎓',
    description: 'NPTEL certification covering cloud service models (IaaS, PaaS, SaaS), virtualization, distributed systems, and cloud security fundamentals.',
    skills: ['Cloud Architecture', 'Virtualization', 'Distributed Systems', 'Cloud Security', 'SaaS / PaaS / IaaS'],
    file: '/certificates/nptel-cloud-computing.pdf',
    verifyUrl: null,
    showVerify: false,   // ← No verify link for NPTEL as requested
  },
  {
    id: 'ibm',
    priority: '03',
    name: 'IBM Full Stack Java Developer',
    issuer: 'IBM — Coursera',
    issued: '2025',
    credentialId: 'COURSERA-IBM-XXXXXXXX',
    color: '#0062FF',
    colorBg: '#E8F0FF',
    icon: '💻',
    description: 'Comprehensive full-stack Java development program covering Spring Boot, Microservices, REST APIs, Docker, and cloud deployment on IBM Cloud.',
    skills: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'Docker', 'Cloud'],
    file: '/certificates/ibm-java-fullstack.pdf',
    verifyUrl: 'https://coursera.org/share/f21265557638dcb11552260927aa0a89',
    showVerify: true,
  },
  {
    id: 'simplilearn',
    priority: '04',
    name: 'Machine Learning',
    issuer: 'Simplilearn',
    issued: '2024',
    credentialId: 'SL-ML-XXXXXXXX',
    color: '#E65100',
    colorBg: '#FFF3E0',
    icon: '🤖',
    description: 'End-to-end machine learning certification covering supervised & unsupervised learning, neural networks, model evaluation and deployment.',
    skills: ['Python', 'Scikit-learn', 'Neural Networks', 'Model Evaluation', 'Feature Engineering'],
    file: '/certificates/simplilearn-ml.pdf',
    verifyUrl: 'https://simpli-web.app.link/e/2TyaaLpWX2b',
    showVerify: true,
  },
]

function CertCard({ cert }) {
  /*
    window.open with '_blank' opens the PDF/image in a brand-new browser tab.
    On desktop: full-screen PDF viewer in a new tab.
    On mobile:  opens the file in the mobile browser's built-in PDF/image viewer.
    noopener,noreferrer: security best practice for _blank links.
  */
  const handleView = () => {
    window.open(cert.file, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="cert-card reveal" style={{ '--ccolor': cert.color, '--cbg': cert.colorBg }}>

      {/* Faint priority watermark */}
      <span className="cert-priority">{cert.priority}</span>

      {/* Header */}
      <div className="cert-top">
        <div className="cert-icon-wrap">
          <span className="cert-icon">{cert.icon}</span>
        </div>
        <div className="cert-header-text">
          <h3 className="cert-name">{cert.name}</h3>
          <p className="cert-issuer">{cert.issuer} · {cert.issued}</p>
          {/* <p className="cert-id">Credential ID: {cert.credentialId}</p> */}
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

        {/* Opens PDF in a new browser tab — desktop & mobile */}
        <button className="cert-btn cert-btn-view" onClick={handleView}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
          View Certificate
        </button>

        {/* Verify link — shown only when showVerify is true */}
        {cert.showVerify && cert.verifyUrl && (
          <a
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-btn cert-btn-verify"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            Verify
          </a>
        )}

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
          Click <strong>View Certificate</strong> to open in a new tab — full screen on desktop &amp; mobile.
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
