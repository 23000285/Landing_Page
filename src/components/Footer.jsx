import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <p className="footer-name">P R Venkatanathan</p>
          <p className="footer-role">Backend Developer · AI/ML Student</p>
        </div>
        <nav className="footer-nav">
          {['#about','#skills','#experience','#projects','#education','#contact'].map(href => (
            <a key={href} href={href}>{href.slice(1).toUpperCase()}</a>
          ))}
        </nav>
        <div className="footer-right">
          <a href="mailto:rvenkatanathan2005@gmail.com">rvenkatanathan2005@gmail.com</a>
          <a href="https://github.com/23000285" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/venkatanathan-p-r-01b0a6291" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} P R Venkatanathan · Built with React</p>
      </div>
    </footer>
  )
}
