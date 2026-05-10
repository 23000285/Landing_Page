import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
import Experience from './components/Experience'
import Hackathons from './components/Hackathons'
import Certificates from './components/Certificates'
import Projects from './components/Projects'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [dark, setDark] = useState(false)

  /* Apply dark-theme class to <body> — drives all global CSS overrides */
  useEffect(() => {
    document.body.classList.toggle('dark-theme', dark)
  }, [dark])

  /* Scroll reveal observer */
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <Navbar dark={dark} onToggleDark={() => setDark(d => !d)} />
      <Hero />
      <Skills />
      <About />
      <Experience />
      <Hackathons />
      <Certificates />
      <Projects />
      <Education />
      <Achievements />
      {/* Contact still gets dark prop for its own internal styling */}
      <Contact dark={dark} onToggleDark={() => setDark(d => !d)} />
      <Footer />
    </>
  )
}
