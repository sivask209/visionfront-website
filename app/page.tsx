'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { posts } from '@/lib/posts'

const featuredPosts = posts.filter(p => p.featured).slice(0, 3)

const LEAD_MSG = 'Do you offer social media management?'
const AI_REPLY = 'Yes! We handle everything from content to ad spend. Want me to book you a free strategy call?'

function ChatMockup({ mockupRef }: { mockupRef: React.RefObject<HTMLDivElement | null> }) {
  const [chipVisible, setChipVisible] = useState(false)
  const [typedLength, setTypedLength] = useState(0)
  const [buttonVisible, setButtonVisible] = useState(false)
  const startedRef = useRef(false)
  const timers = useRef<number[]>([])

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      setChipVisible(true)
      setTypedLength(AI_REPLY.length)
      setButtonVisible(true)
      return
    }

    const clearTimers = () => { timers.current.forEach(clearTimeout); timers.current = [] }

    function runSequence() {
      clearTimers()
      setChipVisible(false)
      setTypedLength(0)
      setButtonVisible(false)

      timers.current.push(window.setTimeout(() => setChipVisible(true), 400))
      timers.current.push(window.setTimeout(() => {
        let i = 0
        const typeNext = () => {
          i++
          setTypedLength(i)
          if (i < AI_REPLY.length) {
            timers.current.push(window.setTimeout(typeNext, 30 + Math.random() * 12))
          } else {
            timers.current.push(window.setTimeout(() => setButtonVisible(true), 350))
            timers.current.push(window.setTimeout(runSequence, 9000))
          }
        }
        typeNext()
      }, 1100))
    }

    const el = mockupRef.current
    if (!el) return
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true
          runSequence()
        }
      })
    }, { threshold: 0.3 })
    io.observe(el)

    return () => { io.disconnect(); clearTimers() }
  }, [mockupRef])

  const typing = typedLength > 0 && typedLength < AI_REPLY.length

  return (
    <>
      {/* translucent callout chip */}
      <div style={{
        position: 'absolute', left: '4%', top: '18%', zIndex: 5, display: 'flex', alignItems: 'center', gap: 8,
        background: 'rgba(12,23,33,0.75)', backdropFilter: 'blur(10px)', border: '1px solid rgba(237,239,231,0.14)',
        borderRadius: 100, padding: '8px 14px',
        opacity: chipVisible ? 1 : 0,
        transform: chipVisible ? 'translateY(0)' : 'translateY(6px)',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
      }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><circle cx="7" cy="7" r="6" fill="#C8F14B"/><path d="M4.5 7l1.7 1.7L9.5 5" stroke="#04070C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
        <span style={{ fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.66rem', color: '#EDEFE7' }}>AI replying in &lt;5s…</span>
      </div>

      {/* front frame — AI assistant chat (coded illustration, not a real screenshot) */}
      <div ref={mockupRef} style={{ position: 'absolute', width: 300, height: 380, left: 0, bottom: 0, borderRadius: 22, overflow: 'hidden', transform: 'rotate(6deg)', boxShadow: '0 40px 90px rgba(0,0,0,0.6)', border: '1px solid rgba(237,239,231,0.14)', background: '#0C1721', transition: 'transform 0.1s linear' }}>
        <div style={{ height: 30, display: 'flex', alignItems: 'center', gap: 5, padding: '0 12px', borderBottom: '1px solid rgba(237,239,231,0.08)' }}>
          {[0, 1, 2].map(i => <span key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: '#93A29A', opacity: 0.4 }} />)}
        </div>
        <div style={{ height: 'calc(100% - 30px)', padding: '14px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 8 }}>
          {/* lead's incoming message */}
          <div style={{ alignSelf: 'flex-start', display: 'inline-block', maxWidth: '80%', background: 'rgba(237,239,231,0.06)', border: '1px solid rgba(237,239,231,0.1)', borderRadius: '4px 14px 14px 14px', padding: '9px 13px' }}>
            <span style={{ fontFamily: 'var(--font-manrope),sans-serif', fontSize: '0.72rem', lineHeight: 1.45, color: 'rgba(237,239,231,0.75)' }}>{LEAD_MSG}</span>
          </div>

          {/* AI reply — types out character by character */}
          {typedLength > 0 && (
            <div style={{ alignSelf: 'flex-end', display: 'inline-block', maxWidth: '88%', background: '#C8F14B', borderRadius: '14px 4px 14px 14px', padding: '9px 13px' }}>
              <span style={{ fontFamily: 'var(--font-manrope),sans-serif', fontWeight: 500, fontSize: '0.72rem', lineHeight: 1.45, color: '#04070C' }}>
                {AI_REPLY.slice(0, typedLength)}
                {typing && <span className="chat-cursor" />}
              </span>
            </div>
          )}

          {/* AI-generated quick-action button */}
          <div style={{
            alignSelf: 'flex-end',
            opacity: buttonVisible ? 1 : 0,
            transform: buttonVisible ? 'scale(1)' : 'scale(0.85)',
            transformOrigin: 'right center',
            transition: 'opacity 0.3s cubic-bezier(0.34,1.56,0.64,1), transform 0.3s cubic-bezier(0.34,1.56,0.64,1)',
            pointerEvents: buttonVisible ? 'auto' : 'none',
          }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: 'rgba(237,239,231,0.06)', border: '1px solid rgba(200,241,75,0.5)', borderRadius: 100, padding: '6px 13px', fontFamily: 'var(--font-manrope),sans-serif', fontWeight: 600, fontSize: '0.68rem', color: '#C8F14B' }}>
              Book a call
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M2 5h6M6 5L3.5 2.5M6 5L3.5 7.5" stroke="#C8F14B" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 2 }}>
            <div style={{ flex: 1, height: 32, borderRadius: 100, background: 'rgba(237,239,231,0.06)', border: '1px solid rgba(237,239,231,0.12)' }} />
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#C8F14B', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2.5 7l9-4.5-3 4.5 3 4.5-9-4.5z" fill="#04070C"/></svg>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const howItWorks = [
  {
    title: 'Lead Capture & Qualification',
    desc: 'Your AI instantly engages every new lead, asks the right questions, and filters out low-quality prospects — so your team only speaks to serious buyers.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><path d="M11 2.5l1.8 4.6L17.5 9l-4.7 1.9L11 15.5l-1.8-4.6L4.5 9l4.7-1.9L11 2.5z" stroke="#04070C" strokeWidth="1.3" strokeLinejoin="round"/></svg>
    ),
  },
  {
    title: '24/7 Instant Response',
    desc: 'No more missed messages. Your AI replies within seconds via chat, calls, email, or SMS — at any hour, on any day, without hiring extra staff.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="8" stroke="#04070C" strokeWidth="1.4"/><path d="M11 6.5v5l3.5 2" stroke="#04070C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
  {
    title: 'Lead Conversion',
    desc: 'We automate follow-ups, reminders, and bookings so leads never go cold. Your AI nurtures prospects through the funnel until they become paying customers.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><path d="M3.5 14.5l4.5-5 3.5 3.5 6.5-8" stroke="#04070C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 4h4.5v4.5" stroke="#04070C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
]

const stats = [
  { value: '3x',   label: 'Faster Lead Response' },
  { value: '40%',  label: 'More Qualified Leads' },
  { value: '24/7', label: 'AI Always On' },
]

const services = [
  {
    num: '01',
    title: 'AI Agents & Automation',
    desc: 'Always-on AI agents and chatbots that handle lead qualification, customer questions, and internal workflows — so no inquiry ever goes cold.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><rect x="4" y="7" width="14" height="11" rx="3" stroke="#04070C" strokeWidth="1.4"/><path d="M11 7V4M8 4h6" stroke="#04070C" strokeWidth="1.4" strokeLinecap="round"/><circle cx="8.5" cy="12.5" r="1.1" fill="#04070C"/><circle cx="13.5" cy="12.5" r="1.1" fill="#04070C"/></svg>
    ),
  },
  {
    num: '02',
    title: 'AI Content Creation',
    desc: 'Cinematic property and store walkthrough videos, AI-generated video ads, and on-brand content — produced fast and built to stop the scroll.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><rect x="2.5" y="5.5" width="13" height="11" rx="2.5" stroke="#04070C" strokeWidth="1.4"/><path d="M15.5 9.5l4-2.5v8l-4-2.5" stroke="#04070C" strokeWidth="1.4" strokeLinejoin="round"/></svg>
    ),
  },
  {
    num: '03',
    title: 'Website Design',
    desc: 'Premium, conversion-focused websites built to match the quality of everything else we make for you — fast, custom, and made to turn visits into leads.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><rect x="2.5" y="4" width="17" height="14" rx="2.5" stroke="#04070C" strokeWidth="1.4"/><path d="M2.5 8h17" stroke="#04070C" strokeWidth="1.4"/><circle cx="5.3" cy="6" r="0.7" fill="#04070C"/></svg>
    ),
  },
]

const portfolio = [
  {
    label: 'Website Design',
    sub: 'Featured build — full portfolio ↗',
    img: '/portfolio/website-design.jpg',
    href: 'https://portfolio.visionfrontai.com/',
  },
  {
    label: 'AI Content Creation',
    sub: 'Video & ad work — full portfolio ↗',
    img: '/portfolio/ai-content-creation.jpg',
    href: 'https://adsportfolio.visionfrontai.com/',
  },
]

export default function HomePage() {
  const mockupRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let ticking = false

    function onScroll() {
      if (reduceMotion || !mockupRef.current) return
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const offset = Math.min(window.scrollY * 0.08, 40)
          if (mockupRef.current) mockupRef.current.style.transform = `translateY(${offset}px)`
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el))

    return () => { window.removeEventListener('scroll', onScroll); io.disconnect() }
  }, [])

  const fadeIn = (delayMs: number): React.CSSProperties => ({
    opacity: 0,
    animation: 'fadeUp 0.45s cubic-bezier(0.22,1,0.36,1) forwards',
    animationDelay: `${delayMs}ms`,
  })

  return (
    <>
      {/* ── HERO (dark) ── */}
      <section style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'hidden', padding: '150px 24px 0', background: 'linear-gradient(180deg,#04070C 0%,#0F1D22 38%,#24413E 62%,#142530 84%,#070D16 100%)' }}>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1, opacity: 0.035 }} aria-hidden="true">
          <filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter>
          <rect width="100%" height="100%" filter="url(#grain)"/>
        </svg>
        <div className="hero-grid" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }} />
        <div className="orb animate-drift2" style={{ width: 480, height: 480, top: '4%', right: '-14%', background: 'radial-gradient(circle,rgba(34,59,60,0.55) 0%,transparent 68%)', zIndex: 1 }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: 1180, width: '100%', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 40, alignItems: 'center', paddingBottom: 64 }} className="hero-grid-cols">
          {/* Left: copy */}
          <div>
            <div style={fadeIn(0)}><span className="eyebrow">AI-Powered Growth Agency</span></div>
            <h1 style={{ ...fadeIn(90), fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 800, fontSize: 'clamp(2.5rem,4.6vw,4.25rem)', lineHeight: 1.02, letterSpacing: '-0.02em', color: '#EDEFE7', margin: '22px 0 22px' }}>
              Transform Your Business<br />With Intelligent AI.
            </h1>
            <p style={{ ...fadeIn(180), color: '#93A29A', fontSize: 'clamp(1rem,1.4vw,1.15rem)', maxWidth: 460, lineHeight: 1.7, marginBottom: 36 }}>
              VisionFront AI Solutions builds cutting-edge marketing strategies powered by artificial intelligence — helping brands grow faster, smarter, and at scale.
            </p>
            <div style={{ ...fadeIn(270), display: 'flex', alignItems: 'center', gap: 16, marginBottom: 44, flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary" style={{ padding: '15px 32px', fontSize: '1rem' }}>
                Start Your Growth
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true"><path d="M3 7.5H12M12 7.5L8.5 4M12 7.5L8.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              <a href="#how-it-works" aria-label="See how it works"
                style={{ width: 50, height: 50, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(237,239,231,0.25)', color: '#EDEFE7', flexShrink: 0, transition: 'transform 0.22s cubic-bezier(0.34,1.56,0.64,1), border-color 0.25s ease' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.08)'; e.currentTarget.style.borderColor = 'rgba(200,241,75,0.6)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.borderColor = 'rgba(237,239,231,0.25)' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M5.5 3.5l7 4.5-7 4.5v-9z" fill="currentColor"/></svg>
              </a>
            </div>
            <div style={{ ...fadeIn(360), display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
              {['50+ CLIENTS', '3X AVG ROI', 'AI-FIRST AGENCY'].map(badge => (
                <span key={badge} style={{ display: 'flex', alignItems: 'center', gap: 7, fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.68rem', letterSpacing: '0.1em', color: '#93A29A', border: '1px solid rgba(237,239,231,0.12)', borderRadius: 100, padding: '7px 13px' }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#C8F14B', flexShrink: 0 }} />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right: floating mockup composition */}
          <div style={{ ...fadeIn(200), position: 'relative', width: 420, height: 460, margin: '0 auto' }}>
            {/* back frame — website preview (coded illustration, not a real screenshot) */}
            <div style={{ position: 'absolute', width: 200, height: 340, right: 0, top: 0, borderRadius: 22, overflow: 'hidden', transform: 'rotate(-9deg)', boxShadow: '0 30px 70px rgba(0,0,0,0.55)', border: '1px solid rgba(237,239,231,0.12)', background: '#0C1721' }}>
              <div style={{ height: 22, display: 'flex', alignItems: 'center', gap: 4, padding: '0 10px', borderBottom: '1px solid rgba(237,239,231,0.08)' }}>
                {[0, 1, 2].map(i => <span key={i} style={{ width: 5, height: 5, borderRadius: '50%', background: '#93A29A', opacity: 0.35 }} />)}
              </div>
              <div style={{ background: '#F7F6F1', height: 'calc(100% - 22px)', padding: '18px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ width: '70%', height: 10, borderRadius: 3, background: 'rgba(11,18,16,0.16)' }} />
                <div style={{ width: '85%', height: 10, borderRadius: 3, background: 'rgba(11,18,16,0.16)' }} />
                <div style={{ width: '52%', height: 18, borderRadius: 100, background: '#C8F14B', marginTop: 6 }} />
                <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
                  {[0, 1, 2].map(i => <div key={i} style={{ flex: 1, height: 58, borderRadius: 8, background: '#FFFFFF', border: '1px solid rgba(11,18,16,0.08)' }} />)}
                </div>
                <div style={{ width: '90%', height: 6, borderRadius: 3, background: 'rgba(11,18,16,0.12)', marginTop: 12 }} />
                <div style={{ width: '65%', height: 6, borderRadius: 3, background: 'rgba(11,18,16,0.12)' }} />
              </div>
            </div>
            <ChatMockup mockupRef={mockupRef} />
            {/* pinned stat badge */}
            <div style={{ position: 'absolute', bottom: '2%', right: '6%', background: '#C8F14B', borderRadius: 18, padding: '14px 18px', boxShadow: '0 16px 40px rgba(200,241,75,0.25)' }}>
              <div style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#04070C', lineHeight: 1 }}>50+</div>
              <div style={{ fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.6rem', letterSpacing: '0.06em', color: '#0C1721', marginTop: 3 }}>Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS (light) ── */}
      <section id="how-it-works" style={{ background: '#F7F6F1', padding: '100px 24px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }} data-reveal>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}><span className="eyebrow">How It Works</span></div>
            <h2 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 700, fontSize: 'clamp(1.9rem,3.8vw,2.9rem)', letterSpacing: '-0.015em', color: '#0B1210' }}>
              Three intelligent layers, working <span style={{ textDecoration: 'underline', textDecorationColor: '#C8F14B', textDecorationThickness: 3, textUnderlineOffset: 4 }}>around the clock</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }} data-reveal>
            {howItWorks.map(({ title, desc, icon }) => (
              <div key={title} className="card-light" style={{ padding: '36px 30px' }}>
                <div className="icon-circle" style={{ marginBottom: 20 }}>{icon}</div>
                <h3 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 700, fontSize: '1.15rem', letterSpacing: '-0.01em', color: '#0B1210', marginBottom: 12 }}>{title}</h3>
                <p style={{ color: '#5B6560', fontSize: '0.9375rem', lineHeight: 1.72 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS (dark) ── */}
      <section style={{ background: '#04070C', padding: '80px 24px', position: 'relative' }} className="stats-band">
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32 }} className="stats-grid" data-reveal>
            {stats.map(({ value, label }) => (
              <div key={label} style={{ textAlign: 'center', padding: '20px' }}>
                <div className="stat-rule" style={{ margin: '0 auto 14px' }} />
                <div style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 800, fontSize: 'clamp(2.4rem,4.5vw,3.5rem)', lineHeight: 1, marginBottom: 10, color: '#EDEFE7' }}>{value}</div>
                <div style={{ fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.68rem', letterSpacing: '0.13em', textTransform: 'uppercase', color: '#93A29A' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES (light) ── */}
      <section style={{ background: '#F7F6F1', padding: '100px 24px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }} data-reveal>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}><span className="eyebrow">What We Build</span></div>
            <h2 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 700, fontSize: 'clamp(1.9rem,3.8vw,2.9rem)', letterSpacing: '-0.015em', color: '#0B1210' }}>
              AI solutions for every <span style={{ textDecoration: 'underline', textDecorationColor: '#C8F14B', textDecorationThickness: 3, textUnderlineOffset: 4 }}>business need</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }} data-reveal>
            {services.map(({ num, title, desc, icon }) => (
              <div key={title} className="card-light" style={{ padding: '36px 30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                  <div className="icon-circle">{icon}</div>
                  <span style={{ fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.7rem', letterSpacing: '0.1em', color: '#5B6560' }}>{num}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 700, fontSize: '1.15rem', letterSpacing: '-0.01em', color: '#0B1210', marginBottom: 12 }}>{title}</h3>
                <p style={{ color: '#5B6560', fontSize: '0.9375rem', lineHeight: 1.72 }}>{desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link href="/services" className="btn-ghost-light" style={{ padding: '13px 32px' }}>View All Services</Link>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO TEASER (light) ── */}
      <section style={{ background: '#F7F6F1', padding: '0 24px 110px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }} data-reveal>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}><span className="eyebrow">Recent Work</span></div>
            <h2 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 700, fontSize: 'clamp(1.9rem,3.8vw,2.9rem)', letterSpacing: '-0.015em', color: '#0B1210', marginBottom: 16 }}>
              A closer look — <span style={{ textDecoration: 'underline', textDecorationColor: '#C8F14B', textDecorationThickness: 3, textUnderlineOffset: 4 }}>full portfolios linked below</span>
            </h2>
            <p style={{ color: '#5B6560', fontSize: '1rem', maxWidth: 500, margin: '0 auto' }}>
              These tiles are a preview. The complete case studies live on our dedicated portfolio sites.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="editorial-grid" data-reveal>
            {portfolio.map(({ label, sub, img, href }) => {
              const external = href.startsWith('http')
              return (
                <a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  style={{ position: 'relative', borderRadius: 22, overflow: 'hidden', aspectRatio: '4/5', display: 'block', textDecoration: 'none' }}
                >
                  <img src={img} alt={label} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(4,7,12,0.98) 0%, rgba(4,7,12,0.98) 24%, transparent 58%)' }} />
                  <div style={{ position: 'absolute', left: 18, right: 18, bottom: 18, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ width: 34, height: 34, borderRadius: '50%', background: '#C8F14B', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><circle cx="7" cy="7" r="5.5" stroke="#04070C" strokeWidth="1.4"/></svg>
                      </span>
                      <div>
                        <div style={{ fontFamily: 'var(--font-manrope),sans-serif', fontWeight: 600, fontSize: '0.875rem', color: '#EDEFE7' }}>{label}</div>
                        <div style={{ fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.62rem', color: '#93A29A' }}>{sub}</div>
                      </div>
                    </div>
                  </div>
                </a>
              )
            })}

            {/* AI Agents & Automation — animated process diagram, not a screenshot (illustrates how the service works) */}
            <Link
              href="/services"
              data-reveal
              style={{ position: 'relative', borderRadius: 22, overflow: 'hidden', aspectRatio: '4/5', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', background: 'linear-gradient(160deg,#0C1721,#1A2E2E)' }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', width: 260 }}>
                {/* Trigger node */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 44, flexShrink: 0 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', border: '1.5px solid rgba(237,239,231,0.28)', background: 'rgba(237,239,231,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M2 6l7 4.5L16 6M2.5 4h13a.5.5 0 01.5.5v9a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5z" stroke="#EDEFE7" strokeWidth="1.3" strokeLinejoin="round"/></svg>
                  </div>
                  <span style={{ marginTop: 10, fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#93A29A' }}>Trigger</span>
                </div>

                {/* Track 1 */}
                <div className="diagram-track" style={{ width: 64, height: 2, marginTop: 21, position: 'relative', background: 'rgba(200,241,75,0.18)', flexShrink: 0 }}>
                  <div className="diagram-fill diagram-fill-1" style={{ position: 'absolute', inset: 0, background: '#C8F14B', transform: 'scaleX(0)', transformOrigin: 'left' }} />
                  <div className="diagram-pulse diagram-pulse-1" style={{ position: 'absolute', top: '50%', left: 0, width: 6, height: 6, borderRadius: '50%', background: '#C8F14B', boxShadow: '0 0 8px rgba(200,241,75,0.8)' }} />
                </div>

                {/* AI Agent node — larger, center of the diagram */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 56, marginTop: -6, flexShrink: 0 }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#C8F14B', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 0 6px rgba(200,241,75,0.1)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="3" stroke="#04070C" strokeWidth="1.6"/><path d="M12 3v2.2M12 18.8V21M21 12h-2.2M5.2 12H3M18.4 5.6l-1.55 1.55M7.15 16.85L5.6 18.4M18.4 18.4l-1.55-1.55M7.15 7.15L5.6 5.6" stroke="#04070C" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  </div>
                  <span style={{ marginTop: 10, fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#EDEFE7', fontWeight: 600 }}>AI Agent</span>
                </div>

                {/* Track 2 */}
                <div className="diagram-track" style={{ width: 64, height: 2, marginTop: 21, position: 'relative', background: 'rgba(200,241,75,0.18)', flexShrink: 0 }}>
                  <div className="diagram-fill diagram-fill-2" style={{ position: 'absolute', inset: 0, background: '#C8F14B', transform: 'scaleX(0)', transformOrigin: 'left' }} />
                  <div className="diagram-pulse diagram-pulse-2" style={{ position: 'absolute', top: '50%', left: 0, width: 6, height: 6, borderRadius: '50%', background: '#C8F14B', boxShadow: '0 0 8px rgba(200,241,75,0.8)' }} />
                </div>

                {/* Action node */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 44, flexShrink: 0 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', border: '1.5px solid rgba(237,239,231,0.28)', background: 'rgba(237,239,231,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M3.5 9.5l3.5 3.5 7.5-8" stroke="#EDEFE7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span style={{ marginTop: 10, fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#93A29A' }}>Action</span>
                </div>
              </div>

              <div style={{ position: 'absolute', left: 18, right: 18, bottom: 18, display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 34, height: 34, borderRadius: '50%', background: '#C8F14B', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><circle cx="7" cy="7" r="5.5" stroke="#04070C" strokeWidth="1.4"/></svg>
                </span>
                <div>
                  <div style={{ fontFamily: 'var(--font-manrope),sans-serif', fontWeight: 600, fontSize: '0.875rem', color: '#EDEFE7' }}>AI Agents &amp; Automation</div>
                  <div style={{ fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.62rem', color: '#93A29A' }}>See how it works</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SIGNAL BOOST (light) — hand-picked reads, not just the latest posts ── */}
      <section style={{ background: '#F7F6F1', padding: '0 24px 110px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }} data-reveal>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}><span className="eyebrow">Curated Reads</span></div>
            <h2 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 700, fontSize: 'clamp(1.9rem,3.8vw,2.9rem)', letterSpacing: '-0.015em', color: '#0B1210', marginBottom: 16 }}>
              Signal <span style={{ textDecoration: 'underline', textDecorationColor: '#C8F14B', textDecorationThickness: 3, textUnderlineOffset: 4 }}>Boost</span>
            </h2>
            <p style={{ color: '#5B6560', fontSize: '1rem', maxWidth: 500, margin: '0 auto' }}>
              A handful of reads we've chosen to surface — not everything, just the ones worth your five minutes.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }} data-reveal>
            {featuredPosts.map(({ slug, category, title, date, readTime, image }) => (
              <Link key={slug} href={`/blog/${slug}`} className="card-light" style={{ display: 'block', textDecoration: 'none', overflow: 'hidden', padding: 0 }}>
                <div style={{ position: 'relative', aspectRatio: '3/2', overflow: 'hidden' }}>
                  <img src={image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span style={{ position: 'absolute', top: 14, left: 14, background: '#C8F14B', color: '#04070C', fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', borderRadius: 100, padding: '5px 11px' }}>{category}</span>
                </div>
                <div style={{ padding: '22px 22px 26px' }}>
                  <h3 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 700, fontSize: '1.05rem', letterSpacing: '-0.01em', lineHeight: 1.32, color: '#0B1210', marginBottom: 14 }}>{title}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.65rem', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#5B6560' }}>
                    <span>{date}</span><span>·</span><span>{readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 44 }}>
            <Link href="/blog" className="btn-ghost-light" style={{ padding: '13px 32px' }}>Read More on the Blog</Link>
          </div>
        </div>
      </section>

      {/* ── CTA (dark) ── */}
      <section style={{ background: '#04070C', padding: '110px 24px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ position: 'relative', borderRadius: 28, padding: '84px 56px', textAlign: 'center', overflow: 'hidden', background: '#0C1721', border: '1px solid rgba(237,239,231,0.08)' }} data-reveal>
            <div style={{ position: 'absolute', top: '-40%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(200,241,75,0.1) 0%,transparent 65%)', filter: 'blur(70px)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}><span className="eyebrow">Ready to Grow?</span></div>
              <h2 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 800, fontSize: 'clamp(2.1rem,4.8vw,3.5rem)', letterSpacing: '-0.02em', lineHeight: 1.05, color: '#EDEFE7', marginBottom: 22 }}>
                Get Your Free <span className="g-text">AI Automation Plan</span>
              </h2>
              <p style={{ color: '#93A29A', maxWidth: 480, margin: '0 auto 44px', fontSize: '1.05rem', lineHeight: 1.75 }}>
                Book a free strategy call and discover exactly how AI can transform your business into a 24/7 sales machine.
              </p>
              <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn-primary" style={{ padding: '16px 36px', fontSize: '1.0625rem' }}>
                  Book a Free Strategy Call
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true"><path d="M3 7.5H12M12 7.5L8.5 4M12 7.5L8.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
                <Link href="/services" className="btn-ghost" style={{ padding: '16px 36px', fontSize: '1.0625rem' }}>See Our Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid-cols { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: 1fr !important; gap: 12px !important; }
          .editorial-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .hero-grid-cols > div:last-child { height: 360px !important; }
        }

        /* Process diagram — line draw + traveling pulse, fires once the card scrolls into view */
        .diagram-fill { animation: none; }
        .diagram-pulse { animation: none; opacity: 0; transform: translate(0,-50%); }
        [data-reveal].visible .diagram-fill-1 { animation: diagramDraw 0.55s ease forwards; }
        [data-reveal].visible .diagram-fill-2 { animation: diagramDraw 0.55s ease 0.3s forwards; }
        [data-reveal].visible .diagram-pulse-1 { animation: diagramPulse 1.7s ease-in-out 0.55s infinite; }
        [data-reveal].visible .diagram-pulse-2 { animation: diagramPulse 1.7s ease-in-out 1.4s infinite; }
        @keyframes diagramDraw { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes diagramPulse {
          0%   { transform: translate(0,-50%); opacity: 0; }
          15%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { transform: translate(64px,-50%); opacity: 0; }
        }

        /* Chat mockup — typing cursor */
        .chat-cursor {
          display: inline-block;
          width: 2px;
          height: 10px;
          margin-left: 2px;
          vertical-align: middle;
          background: #04070C;
          animation: cursorBlink 0.9s step-end infinite;
        }
        @keyframes cursorBlink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition-duration: 0.01ms !important; }
          .diagram-fill-1, .diagram-fill-2 { transform: scaleX(1) !important; }
          .chat-cursor { display: none; }
        }
      `}</style>
    </>
  )
}
