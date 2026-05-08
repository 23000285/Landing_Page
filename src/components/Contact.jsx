import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

/*
  ── EmailJS Setup ──────────────────────────────────────────
  1. Sign up at https://www.emailjs.com (free)
  2. Add Email Service  → copy SERVICE_ID
  3. Add Email Template → copy TEMPLATE_ID
     Use variables: {{first_name}}, {{last_name}},
     {{from_email}}, {{phone}}, {{topic}}, {{message}}
  4. Account → API Keys → copy PUBLIC_KEY
  ───────────────────────────────────────────────────────────
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
    <section id="contact" className="contact-section">
      <div className="contact-inner">

        {/* Heading — centered exactly like image 3 */}
        <p className="contact-label">Get In Touch</p>
        <h2 className="contact-title">Contact me</h2>
        <p className="contact-sub">
          Open to internship opportunities, project collaborations, and exciting work.
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="contact-form" noValidate>

          {/* Row 1: First name + Last name */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="first_name">First name</label>
              <input id="first_name" name="first_name" type="text" placeholder="" required />
            </div>
            <div className="form-group">
              <label htmlFor="last_name">Last name</label>
              <input id="last_name" name="last_name" type="text" placeholder="" required />
            </div>
          </div>

          {/* Row 2: Email + Phone */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="from_email">Email</label>
              <input id="from_email" name="from_email" type="email" placeholder="" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone number</label>
              <input id="phone" name="phone" type="tel" placeholder="" />
            </div>
          </div>

          {/* Topic dropdown — full width */}
          <div className="form-group">
            <label htmlFor="topic">Choose a topic</label>
            <div className="select-wrap">
              <select id="topic" name="topic" required defaultValue="">
                <option value="" disabled>Select one...</option>
                {TOPICS.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              <span className="select-arrow">▾</span>
            </div>
          </div>

          {/* Message */}
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message" name="message"
              placeholder="Type your message..."
              rows={5} required
            />
          </div>

          {/* Hidden to_name for EmailJS */}
          <input type="hidden" name="to_name" value="Venkatanathan" />

          {/* Checkbox */}
          <div className="form-check">
            <input id="terms" type="checkbox" required />
            <label htmlFor="terms">I accept the forms</label>
          </div>

          {/* Submit button */}
          <div className="form-submit-wrap">
            <button
              type="submit"
              className={`submit-btn ${status !== 'idle' ? status : ''}`}
              disabled={status === 'sending'}
            >
              {status === 'idle'    && 'Submit'}
              {status === 'sending' && 'Sending...'}
              {status === 'success' && '✓ Sent!'}
              {status === 'error'   && 'Try again'}
            </button>
          </div>

        </form>
      </div>
    </section>
  )
}
