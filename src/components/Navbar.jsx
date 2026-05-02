import { useState, useEffect } from 'react'
import './Navbar.css'

const LINKS = [
  { href: '#education',     label: 'EDUCATION' },
  { href: '#skills',        label: 'SKILLS' },
  { href: '#experience',    label: 'EXPERIENCE' },
  { href: '#hackathons',    label: 'HACKATHONS' },
  { href: '#certificates',  label: 'CERTIFICATES' },
  { href: '#about',         label: 'PROFILE' },
  { href: '#projects',      label: 'PORTFOLIO' },
  { href: '#contact',       label: 'CONTACT' },
]

export default function Navbar() {
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      let cur = ''
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 100) cur = s.id
      })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={active === href.slice(1) ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
