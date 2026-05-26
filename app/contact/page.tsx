'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1200)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(15,15,34,0.7)',
    border: '1px solid rgba(123,83,204,0.3)',
    borderRadius: 12,
    padding: '14px 18px',
    color: '#F0F0FF',
    fontFamily: 'var(--font-dm-sans),sans-serif',
    fontSize: '0.9375rem',
    outline: 'none',
    transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'var(--font-syne),sans-serif',
    fontWeight: 600,
    fontSize: '0.8rem',
    letterSpacing: '0.04em',
    color: '#F0F0FF',
    marginBottom: 8,
  }

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section style={{ background: '#05050D', padding: '160px 24px 100px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(0,191,255,0.25) 0%,transparent 65%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(123,47,190,0.28) 0%,transparent 65%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}><span className="eyebrow">Let&apos;s Talk</span></div>
          <h1 style={{ fontFamily: 'var(--font-syne),sans-serif', fontWeight: 800, fontSize: 'clamp(2.4rem,6vw,4rem)', letterSpacing: '-0.04em', lineHeight: 1.0, color: '#F0F0FF', marginBottom: 24 }}>
            Start Your <span className="g-text">AI Journey</span>
          </h1>
          <p style={{ color: '#8B8BA8', fontSize: '1.1rem', lineHeight: 1.78, maxWidth: 500, margin: '0 auto' }}>
            Book a free strategy call or drop us a message. We&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* ── CONTACT LAYOUT ── */}
      <section style={{ background: '#0A0A1A', padding: '80px 24px 120px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'start' }} className="contact-grid">

          {/* Left: info */}
          <div>
            <div style={{ display: 'flex', marginBottom: 20 }}><span className="eyebrow">Contact</span></div>
            <h2 style={{ fontFamily: 'var(--font-syne),sans-serif', fontWeight: 700, fontSize: 'clamp(1.6rem,3vw,2.2rem)', letterSpacing: '-0.03em', lineHeight: 1.15, color: '#F0F0FF', marginBottom: 20 }}>
              We&apos;d love to hear about your business.
            </h2>
            <p style={{ color: '#8B8BA8', lineHeight: 1.8, fontSize: '0.9625rem', marginBottom: 40 }}>
              Whether you&apos;re ready to get started or just exploring what AI can do, we&apos;re here to help. Reach out and we&apos;ll build a custom plan around your specific goals.
            </p>

            {/* Email */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
              <div className="icon-circle">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <rect x="2" y="5" width="16" height="11" rx="2.5" stroke="#06B6D4" strokeWidth="1.3"/>
                  <path d="M2 7.5l8 5 8-5" stroke="#06B6D4" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8B8BA8', marginBottom: 4 }}>Email</p>
                <a href="mailto:info@visionfrontai.com" style={{ color: '#F0F0FF', fontSize: '0.9375rem', textDecoration: 'none', transition: 'color 0.22s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#06B6D4')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#F0F0FF')}>
                  info@visionfrontai.com
                </a>
              </div>
            </div>

            {/* Response time */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}>
              <div className="icon-circle">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <circle cx="10" cy="10" r="7.5" stroke="#06B6D4" strokeWidth="1.3"/>
                  <path d="M10 6v4l2.5 2.5" stroke="#06B6D4" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8B8BA8', marginBottom: 4 }}>Response Time</p>
                <p style={{ color: '#F0F0FF', fontSize: '0.9375rem' }}>We typically reply within 24 hours</p>
              </div>
            </div>

            {/* Social */}
            <div>
              <p style={{ fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8B8BA8', marginBottom: 16 }}>Follow Us</p>
              <div style={{ display: 'flex', gap: 12 }}>
                <a href="https://facebook.com/visionfrontai" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                  style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(123,83,204,0.14)', border: '1px solid rgba(123,83,204,0.26)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'transform 0.2s, border-color 0.2s, background 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(6,182,212,0.5)'; (e.currentTarget as HTMLElement).style.background = 'rgba(6,182,212,0.1)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(123,83,204,0.26)'; (e.currentTarget as HTMLElement).style.background = 'rgba(123,83,204,0.14)'; }}>
                  <svg width="16" height="16" viewBox="0 0 15 15" fill="none"><path d="M10 2.5H8.5A2 2 0 006.5 4.5v1.5H5v2h1.5V13H9V8h1.5l.5-2H9V4.5c0-.3.2-.5.5-.5H10V2.5z" stroke="#8B8BA8" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
                <a href="https://instagram.com/visionfrontmarketing" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                  style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(123,83,204,0.14)', border: '1px solid rgba(123,83,204,0.26)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'transform 0.2s, border-color 0.2s, background 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(6,182,212,0.5)'; (e.currentTarget as HTMLElement).style.background = 'rgba(6,182,212,0.1)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(123,83,204,0.26)'; (e.currentTarget as HTMLElement).style.background = 'rgba(123,83,204,0.14)'; }}>
                  <svg width="16" height="16" viewBox="0 0 15 15" fill="none"><rect x="1.5" y="1.5" width="12" height="12" rx="3.5" stroke="#8B8BA8" strokeWidth="1.1"/><circle cx="7.5" cy="7.5" r="2.8" stroke="#8B8BA8" strokeWidth="1.1"/><circle cx="11" cy="4" r=".7" fill="#8B8BA8"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="glass" style={{ padding: '48px' }}>
            {status === 'sent' ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'linear-gradient(135deg,rgba(123,83,204,0.3),rgba(6,182,212,0.3))', border: '1px solid rgba(6,182,212,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><path d="M6 14l6 6 10-12" stroke="#06B6D4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 style={{ fontFamily: 'var(--font-syne),sans-serif', fontWeight: 700, fontSize: '1.4rem', color: '#F0F0FF', marginBottom: 12 }}>Message Sent!</h3>
                <p style={{ color: '#8B8BA8', lineHeight: 1.72 }}>Thanks for reaching out. We&apos;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 style={{ fontFamily: 'var(--font-syne),sans-serif', fontWeight: 700, fontSize: '1.3rem', letterSpacing: '-0.02em', color: '#F0F0FF', marginBottom: 32 }}>Send Us a Message</h3>

                {/* Name row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }} className="name-grid">
                  <div>
                    <label htmlFor="firstName" style={labelStyle}>First Name</label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="Jane"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                      style={inputStyle}
                      onFocus={e => { e.target.style.borderColor = 'rgba(6,182,212,0.6)'; e.target.style.boxShadow = '0 0 0 3px rgba(6,182,212,0.08)'; }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(123,83,204,0.3)'; e.target.style.boxShadow = 'none'; }}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" style={labelStyle}>Last Name</label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Smith"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                      style={inputStyle}
                      onFocus={e => { e.target.style.borderColor = 'rgba(6,182,212,0.6)'; e.target.style.boxShadow = '0 0 0 3px rgba(6,182,212,0.08)'; }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(123,83,204,0.3)'; e.target.style.boxShadow = 'none'; }}
                    />
                  </div>
                </div>

                {/* Email */}
                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="email" style={labelStyle}>Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jane@yourbusiness.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = 'rgba(6,182,212,0.6)'; e.target.style.boxShadow = '0 0 0 3px rgba(6,182,212,0.08)'; }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(123,83,204,0.3)'; e.target.style.boxShadow = 'none'; }}
                  />
                </div>

                {/* Message */}
                <div style={{ marginBottom: 32 }}>
                  <label htmlFor="message" style={labelStyle}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your business and what you're looking to achieve..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 130 }}
                    onFocus={e => { e.target.style.borderColor = 'rgba(6,182,212,0.6)'; e.target.style.boxShadow = '0 0 0 3px rgba(6,182,212,0.08)'; }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(123,83,204,0.3)'; e.target.style.boxShadow = 'none'; }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  disabled={status === 'sending'}
                  style={{ width: '100%', justifyContent: 'center', padding: '15px 24px', fontSize: '1rem', opacity: status === 'sending' ? 0.7 : 1 }}
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>

                <p style={{ textAlign: 'center', marginTop: 16, fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.66rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8B8BA8' }}>
                  We typically reply within 24 hours
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#05050D', padding: '80px 24px 100px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-syne),sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', letterSpacing: '-0.04em', color: '#F0F0FF', marginBottom: 16 }}>
            Prefer to book a call <span className="g-text">directly?</span>
          </h2>
          <p style={{ color: '#8B8BA8', fontSize: '1rem', lineHeight: 1.78, marginBottom: 32 }}>
            Skip the form and book a free 30-minute strategy call where we&apos;ll map out exactly what AI can do for your business.
          </p>
          <Link href="/services" className="btn-ghost" style={{ padding: '13px 32px' }}>View Our Services</Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .name-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
