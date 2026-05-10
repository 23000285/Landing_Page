/* ── EmailJS Template HTML (paste into EmailJS template content field):

Subject: New Contact — {{contact_type}} from {{first_name}} {{last_name}}

<table border="1" cellpadding="10" cellspacing="0" style="border-collapse:collapse;font-family:Arial,sans-serif;width:100%;max-width:600px">
  <tr style="background:#6C47FF;color:white"><th colspan="2" style="text-align:left;padding:14px 18px;font-size:16px">📬 New Portfolio Contact</th></tr>
  <tr><td style="width:35%;background:#f5f5f5;font-weight:600">Contact Type</td><td>{{contact_type}}</td></tr>
  <tr><td style="background:#f5f5f5;font-weight:600">Full Name</td><td>{{first_name}} {{last_name}}</td></tr>
  <tr><td style="background:#f5f5f5;font-weight:600">Email</td><td>{{from_email}}</td></tr>
  <tr><td style="background:#f5f5f5;font-weight:600">Phone</td><td>{{phone}}</td></tr>
  <tr><td style="background:#f5f5f5;font-weight:600">Company</td><td>{{company_name}}</td></tr>
  <tr><td style="background:#f5f5f5;font-weight:600">Role Offered</td><td>{{role_offered}}</td></tr>
  <tr><td style="background:#f5f5f5;font-weight:600">Employment Type</td><td>{{employment_type}}</td></tr>
  <tr><td style="background:#f5f5f5;font-weight:600">Work Mode</td><td>{{work_mode}}</td></tr>
  <tr><td style="background:#f5f5f5;font-weight:600">Location</td><td>{{location}}</td></tr>
  <tr><td style="background:#f5f5f5;font-weight:600">Message</td><td style="white-space:pre-wrap">{{message}}</td></tr>
  <tr><td style="background:#f5f5f5;font-weight:600">Sent At</td><td>{{sent_at}}</td></tr>
</table>

── Replace SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY below ── */

import { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

const SERVICE_ID  = 'YOUR_SERVICE_ID'
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'

const CONTACT_TYPES = [
  { value: 'Hiring / HR',     label: 'Hiring / HR Contact', icon: '💼' },
  { value: 'Student Message', label: 'Student Message',     icon: '🎓' },
  { value: 'Collaboration',   label: 'Collaboration',       icon: '🤝' },
  { value: 'Networking',      label: 'Networking',          icon: '🌐' },
  { value: 'General Message', label: 'General Message',     icon: '💬' },
]

const ROLES      = ['Backend Developer Intern','Full Stack Developer','Software Engineer','Cloud Engineer','Other']
const EMP_TYPES  = ['Internship','Full-Time','Part-Time','Freelance','Contract']
const WORK_MODES = ['Remote','Hybrid','On-site']

/* ── Simple labelled input ── */
function Field({ id, name, type='text', label, icon, required, validate, hint, dark }) {
  const [val,     setVal]     = useState('')
  const [touched, setTouched] = useState(false)
  const [focused, setFocused] = useState(false)
  const error = touched && validate ? validate(val) : ''
  const hasVal = val.length > 0

  return (
    <div className={'field' + (focused?' field-focus':'') + (error?' field-err':'') + (dark?' field-dark':'')}>
      <label className={'field-label' + (focused||hasVal?' field-label-up':'')} htmlFor={id}>
        {icon && <span className="field-label-icon">{icon}</span>} {label}
      </label>
      <div className="field-input-wrap">
        {icon && <span className="field-pfx">{icon}</span>}
        <input
          id={id} name={name} type={type}
          value={val}
          required={required}
          autoComplete="off"
          placeholder={focused||hasVal ? '' : ''}
          onChange={e => setVal(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => { setFocused(false); setTouched(true) }}
          className="field-inp"
        />
      </div>
      {error && <span className="field-err-msg">{error}</span>}
      {!error && hint && focused && <span className="field-hint">{hint}</span>}
    </div>
  )
}

/* ── Native select — clean, no floating label overlap ── */
function SelectField({ id, name, label, icon, options, required, onChange: onExt, dark }) {
  const [val, setVal] = useState('')
  const [focused, setFocused] = useState(false)

  const handleChange = e => {
    setVal(e.target.value)
    onExt && onExt(e.target.value)
  }

  return (
    <div className={'field' + (focused?' field-focus':'') + (dark?' field-dark':'')}>
      <label className="field-label field-label-static" htmlFor={id}>
        {icon && <span className="field-label-icon">{icon}</span>} {label}
      </label>
      <div className="field-input-wrap">
        {icon && <span className="field-pfx">{icon}</span>}
        <select
          id={id} name={name}
          value={val}
          required={required}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="field-inp field-select"
        >
          <option value="" disabled>Select {label}…</option>
          {options.map(o => (
            <option key={o.value ?? o} value={o.value ?? o}>{o.icon ? `${o.icon} ` : ''}{o.label ?? o}</option>
          ))}
        </select>
        <span className="field-arrow">▾</span>
      </div>
    </div>
  )
}

/* ── Textarea ── */
function TextareaField({ id, name, label, icon, required, rows=5, dark }) {
  const [val,     setVal]     = useState('')
  const [focused, setFocused] = useState(false)
  const hasVal = val.length > 0

  return (
    <div className={'field field-ta' + (focused?' field-focus':'') + (dark?' field-dark':'')}>
      <label className={'field-label' + (focused||hasVal?' field-label-up':'')} htmlFor={id}>
        {icon && <span className="field-label-icon">{icon}</span>} {label}
      </label>
      <div className="field-input-wrap">
        {icon && <span className="field-pfx field-pfx-ta">{icon}</span>}
        <textarea
          id={id} name={name}
          value={val}
          rows={rows}
          required={required}
          onChange={e => setVal(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="field-inp field-ta-inp"
        />
      </div>
    </div>
  )
}

/* ── Contact Type pill selector — replaces broken select ── */
function ContactTypePicker({ value, onChange, dark }) {
  return (
    <div className="ct-picker">
      <p className={'ct-picker-label' + (dark?' ct-dark-text':'')}>Contact Type <span className="ct-req">*</span></p>
      <div className="ct-picker-grid">
        {CONTACT_TYPES.map(t => (
          <button
            key={t.value}
            type="button"
            className={'ct-pill' + (value===t.value?' ct-pill-active':'') + (dark?' ct-pill-dark':'')}
            onClick={() => onChange(t.value)}
          >
            <span className="ct-pill-icon">{t.icon}</span>
            <span className="ct-pill-text">{t.label}</span>
          </button>
        ))}
      </div>
      {/* hidden input for emailjs */}
      <input type="hidden" name="contact_type" value={value} />
    </div>
  )
}

/* ── Success banner ── */
function SuccessBanner({ isHR, onReset }) {
  return (
    <div className="success-wrap">
      <div className="success-circle">✓</div>
      <h3 className="success-title">Message Sent!</h3>
      <p className="success-body">
        {isHR
          ? 'Thank you for reaching out regarding the opportunity. I appreciate your interest and will get back to you soon.'
          : 'Thank you for your message. I appreciate you reaching out and will respond soon.'}
      </p>
      <button className="success-again" onClick={onReset}>Send another message</button>
    </div>
  )
}

/* ══════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════ */
export default function Contact({ dark = false }) {
  const formRef      = useRef(null)
  const sectionRef   = useRef(null)
  const [status,      setStatus]      = useState('idle')
  const [contactType, setContactType] = useState('')
  const [animated,    setAnimated]    = useState(false)

  const isHR = contactType === 'Hiring / HR'

  /* scroll reveal */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setAnimated(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    const hidden = document.createElement('input')
    hidden.type  = 'hidden'
    hidden.name  = 'sent_at'
    hidden.value = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    formRef.current.appendChild(hidden)
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      formRef.current.removeChild(hidden)
      setStatus('success')
    } catch (err) {
      console.error(err)
      formRef.current.removeChild(hidden)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const handleReset = () => {
    formRef.current?.reset()
    setStatus('idle')
    setContactType('')
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={'contact-section' + (dark ? ' contact-dark' : '')}
    >
      <div className="contact-inner">

        {/* ── Header ── */}
        <div className={'ct-head' + (animated ? ' ct-anim' : '')}>
          <span className="ct-eyebrow ct-s1">Get In Touch</span>
          <h2    className="ct-title  ct-s2">Contact Me</h2>
          <p     className="ct-sub    ct-s3">Open to internship opportunities, project collaborations, and exciting work.</p>
          <p     className="ct-helper ct-s4">Choose the appropriate contact type for smoother communication.</p>
          <p     className="ct-guide  ct-s5">
            Recruiters can contact me regarding opportunities and resume requests.
            Students and visitors can send general messages or collaboration requests.
          </p>
          <div   className="avail     ct-s5">
            <span className="avail-dot" />
            <strong>Available for Internship Opportunities</strong>
            <span className="avail-sep">·</span>
            <span className="avail-time">Usually responds within 24 hours</span>
          </div>
        </div>

        {/* ── Form card ── */}
        <div className={'ct-card' + (animated ? ' ct-card-anim' : '')}>
          {status === 'success' ? (
            <SuccessBanner isHR={isHR} onReset={handleReset} />
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} noValidate>

              {/* Name row */}
              <div className={'form-row ct-s6' + (animated?' ct-anim':'')}>
                <Field id="first_name" name="first_name" label="First Name" icon="👤" required dark={dark}
                  validate={v => !v.trim() ? 'First name is required' : ''} />
                <Field id="last_name"  name="last_name"  label="Last Name"  icon="👤" required dark={dark}
                  validate={v => !v.trim() ? 'Last name is required' : ''} />
              </div>

              {/* Email + Phone row */}
              <div className={'form-row ct-s7' + (animated?' ct-anim':'')}>
                <Field id="from_email" name="from_email" type="email" label="Email Address" icon="📧" required dark={dark}
                  validate={v => v && !v.includes('@') ? 'Enter a valid email' : ''} />
                <Field id="phone" name="phone" type="tel" label="Phone Number" icon="📱" dark={dark}
                  hint="Optional · helps with faster response" />
              </div>

              {/* Contact Type — pill picker */}
              <div className={'ct-s8' + (animated?' ct-anim':'')}>
                <ContactTypePicker value={contactType} onChange={setContactType} dark={dark} />
              </div>

              {/* HR extra fields */}
              <div className={'hr-block' + (isHR ? ' hr-block-open' : '')}>
                <div className="hr-block-inner">
                  <p className="hr-tip">💼 You can also request my resume and portfolio through this form.</p>
                  <div className="form-row">
                    <Field id="company_name" name="company_name" label="Company Name" icon="🏢" dark={dark} />
                    <SelectField id="role_offered" name="role_offered" label="Role Offered" icon="💼" options={ROLES} dark={dark} />
                  </div>
                  <div className="form-row">
                    <SelectField id="employment_type" name="employment_type" label="Employment Type" icon="📋" options={EMP_TYPES} dark={dark} />
                    <SelectField id="work_mode" name="work_mode" label="Work Mode" icon="🗺️" options={WORK_MODES} dark={dark} />
                  </div>
                  <Field id="location" name="location" label="Location / City" icon="📍" dark={dark} />
                </div>
              </div>

              {/* Message */}
              <div className={'ct-s9' + (animated?' ct-anim':'')}>
                <TextareaField id="message" name="message" label="Your Message" icon="💬" required rows={5} dark={dark} />
              </div>

              <input type="hidden" name="to_name" value="Venkatanathan" />

              {/* Submit */}
              <div className={'ct-s10' + (animated?' ct-anim':'')}>
                <button
                  type="submit"
                  className={'submit-btn' + (status==='sending'?' btn-sending':'') + (status==='error'?' btn-error':'')}
                  disabled={status === 'sending'}
                >
                  {status === 'idle'    && <><span>✉️</span><span>Send Message</span></>}
                  {status === 'sending' && <><span className="btn-spin" /><span>Sending…</span></>}
                  {status === 'error'   && <><span>⚠️</span><span>Failed — Try Again</span></>}
                </button>
              </div>

            </form>
          )}
        </div>

        {/* ── Social bar ── */}
        <div className={'ct-social-bar' + (animated?' ct-social-anim':'')}>
          <a href="https://linkedin.com/in/venkatanathan-p-r-01b0a6291" target="_blank" rel="noopener noreferrer" className="spill spill-li">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            LinkedIn
          </a>
          <a href="https://github.com/23000285" target="_blank" rel="noopener noreferrer" className="spill spill-gh">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            GitHub
          </a>
          <a href="https://leetcode.com/u/venkatanathan/" target="_blank" rel="noopener noreferrer" className="spill spill-lc">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0z"/></svg>
            LeetCode
          </a>
          <a href="/resume.pdf" download className="spill spill-resume">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download Resume
          </a>
        </div>

      </div>
    </section>
  )
}
