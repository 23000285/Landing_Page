import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

/*
  ─────────────────────────────────────────────────────────────
  EMAILJS SETUP — replace the three values below with yours:

  1. Go to https://www.emailjs.com/ → sign up (free)
  2. Add an Email Service  →  copy SERVICE_ID
  3. Add an Email Template →  copy TEMPLATE_ID
     Template variables used here:
       {{from_name}}, {{from_email}}, {{phone}}, {{topic}},
       {{message}}, {{to_name}}
  4. Account → API Keys   →  copy PUBLIC_KEY
  ─────────────────────────────────────────────────────────────
*/
const SERVICE_ID  = 'YOUR_SERVICE_ID'
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'

const TOPICS = [
  'Internship Opportunity',
  'Project Collaboration',
  'Freelance Work',
  'Just Saying Hi!',
  'Other',
]

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    setStatus('sending')
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setStatus('success')
      formRef.current.reset()
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      console.error(err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="section-inner">
        <div className="contact-wrap reveal">
          <div className="contact-header">
            <span className="section-tag">Get In Touch</span>
            <h2 className="section-title">Contact me</h2>
            <p className="contact-sub">
              Open to internship opportunities, collaborations, and exciting projects.
            </p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="contact-form" noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="first_name">First name</label>
                <input id="first_name" name="first_name" type="text" placeholder="Your first name" required />
              </div>
              <div className="form-group">
                <label htmlFor="last_name">Last name</label>
                <input id="last_name" name="last_name" type="text" placeholder="Your last name" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="from_email">Email</label>
                <input id="from_email" name="from_email" type="email" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone number</label>
                <input id="phone" name="phone" type="tel" placeholder="+91 xxxxxxxxxx" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="topic">Choose a topic</label>
              <select id="topic" name="topic" required defaultValue="">
                <option value="" disabled>Select one...</option>
                {TOPICS.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Type your message..." rows={5} required />
            </div>

            {/* Hidden field for EmailJS template */}
            <input type="hidden" name="to_name" value="Venkatanathan" />

            <div className="form-check">
              <input id="terms" type="checkbox" required />
              <label htmlFor="terms">I accept the terms and privacy policy</label>
            </div>

            <button
              type="submit"
              className={`submit-btn ${status}`}
              disabled={status === 'sending'}
            >
              {status === 'idle'    && '✉️  Send Message'}
              {status === 'sending' && '⏳  Sending...'}
              {status === 'success' && '✅  Message Sent!'}
              {status === 'error'   && '❌  Something went wrong — try again'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
