import './Footer.css'

const LINKS = [
  { href: '#about',          label: 'About' },
  { href: '#skills',         label: 'Skills' },
  { href: '#experience',     label: 'Experience' },
  { href: '#projects',       label: 'Projects' },
  { href: '#education',      label: 'Education' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact',        label: 'Contact' },
]

const SOCIALS = [
  { href: 'https://linkedin.com/in/venkatanathan-p-r-01b0a6291', label: 'LinkedIn',  icon: '🔗' },
  { href: 'https://github.com/23000285',                          label: 'GitHub',    icon: '💻' },
  { href: 'mailto:rvenkatanathan2005@gmail.com',                  label: 'Email',     icon: '📧' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <a href="#hero" className="footer-logo">PR<span>V</span></a>
          <div className="footer-socials">
            {SOCIALS.map(({ href, label, icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="social-link">
                {icon} {label}
              </a>
            ))}
          </div>
        </div>

        <nav className="footer-nav">
          {LINKS.map(({ href, label }) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} P R Venkatanathan · Built with React &amp; ❤️</p>
          <a href="mailto:rvenkatanathan2005@gmail.com" className="footer-email">
            rvenkatanathan2005@gmail.com
          </a>
        </div>
      </div>
    </footer>
  )
}
