'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { posts } from '@/lib/posts'

const featuredPosts = posts.filter(p => p.featured).slice(0, 3)

const problems = [
  {
    title: 'Hard to find on Google',
    desc: 'Pages that don’t match what people search for keep your business off the first page of results.',
  },
  {
    title: 'Thin local presence',
    desc: 'An incomplete Google Business Profile and few recent reviews make you easy to skip.',
  },
  {
    title: 'Quiet on social media',
    desc: 'Inconsistent posting makes it hard to build trust before someone picks up the phone.',
  },
]

const services = [
  { num: '01', title: 'SEO Audits', desc: 'A technical, on-page, content, and local review of your site, with a prioritized action plan.' },
  { num: '02', title: 'Ongoing SEO', desc: 'Keyword research, on-page optimization, technical fixes, link building, and monthly reporting.' },
  { num: '03', title: 'Local SEO', desc: 'Google Business Profile optimization, local citations, a reviews strategy, and location pages.' },
  { num: '04', title: 'Social Media Marketing', desc: 'Organic content plans and consistent posting built for where your clients spend their time.' },
  { num: '05', title: 'AI & Modern Search', desc: 'Clear, structured content so your business shows up in AI Overviews and AI search tools.' },
  { num: '06', title: 'Content Creation', desc: 'Blog posts, service pages, short-form video, and email content that brings in organic visitors.' },
]

const steps = [
  { title: 'Audit', desc: 'We review your website, Google profile, and social presence to find what is holding you back.' },
  { title: 'Plan', desc: 'We build a prioritized roadmap around the fixes that matter most in your local market.' },
  { title: 'Execute', desc: 'We handle the on-page, technical, local, and content work, plus social posting.' },
  { title: 'Report', desc: 'Monthly reports cover rankings, traffic, calls, and inquiries, not vanity numbers.' },
]

const audiences = [
  {
    title: 'Law firms',
    desc: 'When someone needs a lawyer, they search first. We help your practice show up for the searches that matter in your area.',
  },
  {
    title: 'Realtors',
    desc: 'Buyers and sellers start online. We help your listings, neighborhood pages, and Google profile get noticed.',
  },
  {
    title: 'Local service businesses',
    desc: 'Plumbers, dentists, salons, and other local pros win when they appear first on the map. We help you get there.',
  },
]

const faqs = [
  {
    q: 'Do you run paid ads?',
    a: 'No. Our work focuses on organic channels: search, social, content, and reviews. That keeps your cost per client steady over time instead of tied to ad spend.',
  },
  {
    q: 'How long until I see results?',
    a: 'Local profile and technical fixes can move quickly. Organic search growth usually builds over several months, which is why we start with a clear plan.',
  },
  {
    q: 'Do you guarantee rankings?',
    a: 'No honest agency can guarantee a specific ranking, because search engines control that. We commit to a clear process, transparent reporting, and work that follows current search guidance.',
  },
  {
    q: 'What does a free SEO audit include?',
    a: 'A review of your website, local listings, and content, with a prioritized list of what to fix first. It is the simplest way to see where you stand before committing to anything.',
  },
]

const underline = { textDecoration: 'underline', textDecorationColor: '#C8F14B', textDecorationThickness: 3, textUnderlineOffset: 4 } as const

function SearchMockup() {
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 440, margin: '0 auto' }}>
      <div style={{ borderRadius: 22, overflow: 'hidden', background: '#0C1721', border: '1px solid rgba(237,239,231,0.12)', boxShadow: '0 40px 90px rgba(0,0,0,0.6)' }}>
        <div style={{ height: 30, display: 'flex', alignItems: 'center', gap: 5, padding: '0 12px', borderBottom: '1px solid rgba(237,239,231,0.08)' }}>
          {[0, 1, 2].map(i => <span key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: '#93A29A', opacity: 0.4 }} />)}
        </div>
        <div style={{ padding: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, height: 42, padding: '0 16px', borderRadius: 100, background: 'rgba(237,239,231,0.06)', border: '1px solid rgba(237,239,231,0.12)' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><circle cx="6" cy="6" r="4.5" stroke="#93A29A" strokeWidth="1.4"/><path d="M9.5 9.5L12.5 12.5" stroke="#93A29A" strokeWidth="1.4" strokeLinecap="round"/></svg>
            <span style={{ fontFamily: 'var(--font-manrope),sans-serif', fontSize: '0.85rem', color: '#EDEFE7' }}>family law attorney near me</span>
          </div>

          <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ padding: 14, borderRadius: 14, background: 'rgba(200,241,75,0.08)', border: '1px solid rgba(200,241,75,0.35)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                <span style={{ fontFamily: 'var(--font-manrope),sans-serif', fontWeight: 700, fontSize: '0.85rem', color: '#EDEFE7' }}>Your business</span>
                <span style={{ fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.56rem', letterSpacing: '0.08em', color: '#04070C', background: '#C8F14B', borderRadius: 100, padding: '3px 8px' }}>YOUR LISTING</span>
              </div>
              <div style={{ width: '80%', height: 6, borderRadius: 3, background: 'rgba(237,239,231,0.3)', marginBottom: 6 }} />
              <div style={{ width: '55%', height: 6, borderRadius: 3, background: 'rgba(237,239,231,0.18)' }} />
            </div>
            {[0, 1, 2].map(i => (
              <div key={i} style={{ padding: 14, borderRadius: 14, background: 'rgba(237,239,231,0.04)', border: '1px solid rgba(237,239,231,0.06)' }}>
                <div style={{ width: `${40 + i * 12}%`, height: 8, borderRadius: 3, background: 'rgba(237,239,231,0.16)', marginBottom: 8 }} />
                <div style={{ width: '75%', height: 6, borderRadius: 3, background: 'rgba(237,239,231,0.09)' }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', top: -14, right: -8, background: '#C8F14B', color: '#04070C', borderRadius: 100, padding: '8px 14px', fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.62rem', letterSpacing: '0.06em', textTransform: 'uppercase', boxShadow: '0 12px 30px rgba(200,241,75,0.25)' }}>
        Local results
      </div>
      <div style={{ position: 'absolute', bottom: -12, left: -10, display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(12,23,33,0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(237,239,231,0.14)', borderRadius: 100, padding: '8px 14px' }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><circle cx="7" cy="7" r="6" fill="#C8F14B"/><path d="M4.5 7l1.7 1.7L9.5 5" stroke="#04070C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
        <span style={{ fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.66rem', color: '#EDEFE7' }}>Google Business Profile</span>
      </div>
    </div>
  )
}

export default function HomePage() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el))
    return () => io.disconnect()
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
          <div>
            <div style={fadeIn(0)}><span className="eyebrow">SEO &amp; Local Marketing</span></div>
            <h1 style={{ ...fadeIn(90), fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 800, fontSize: 'clamp(2.5rem,4.6vw,4.25rem)', lineHeight: 1.02, letterSpacing: '-0.02em', color: '#EDEFE7', margin: '22px 0 22px' }}>
              Get found online.<br /><span className="g-text">Win more clients.</span>
            </h1>
            <p style={{ ...fadeIn(180), color: '#93A29A', fontSize: 'clamp(1rem,1.4vw,1.15rem)', maxWidth: 480, lineHeight: 1.7, marginBottom: 36 }}>
              We help small businesses get found on Google, social media, and AI search, then turn that visibility into a steady flow of new clients. Organically, with no paid ads required.
            </p>
            <div style={{ ...fadeIn(270), display: 'flex', alignItems: 'center', gap: 14, marginBottom: 44, flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary" style={{ padding: '15px 32px', fontSize: '1rem' }}>
                Get a Free SEO Audit
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true"><path d="M3 7.5H12M12 7.5L8.5 4M12 7.5L8.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              <Link href="/services" className="btn-ghost" style={{ padding: '15px 30px', fontSize: '1rem' }}>See Our Services</Link>
            </div>
            <div style={{ ...fadeIn(360), display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
              {['SEO', 'LOCAL SEO', 'SOCIAL MEDIA', 'AI SEARCH'].map(badge => (
                <span key={badge} style={{ display: 'flex', alignItems: 'center', gap: 7, fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.68rem', letterSpacing: '0.1em', color: '#93A29A', border: '1px solid rgba(237,239,231,0.12)', borderRadius: 100, padding: '7px 13px' }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#C8F14B', flexShrink: 0 }} />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div style={{ ...fadeIn(200) }}>
            <SearchMockup />
          </div>
        </div>
      </section>

      {/* ── PROBLEM (light) ── */}
      <section style={{ background: '#F7F6F1', padding: '110px 24px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }} data-reveal>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}><span className="eyebrow">The Problem</span></div>
            <h2 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 700, fontSize: 'clamp(1.9rem,3.8vw,2.9rem)', letterSpacing: '-0.015em', color: '#0B1210', marginBottom: 16 }}>
              If people can&apos;t find you online, <span style={underline}>they call someone else.</span>
            </h2>
            <p style={{ color: '#5B6560', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 580, margin: '0 auto' }}>
              Most local customers start with a search. If your website is hard to find, your Google profile is thin, or your social pages have gone quiet, the business that shows up first gets the call.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }} data-reveal>
            {problems.map(({ title, desc }) => (
              <div key={title} className="card-light" style={{ padding: '36px 30px' }}>
                <h3 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 700, fontSize: '1.15rem', letterSpacing: '-0.01em', color: '#0B1210', marginBottom: 12 }}>{title}</h3>
                <p style={{ color: '#5B6560', fontSize: '0.9375rem', lineHeight: 1.72 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW (dark) ── */}
      <section style={{ background: '#04070C', padding: '110px 24px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }} data-reveal>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}><span className="eyebrow">What We Do</span></div>
            <h2 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 700, fontSize: 'clamp(1.9rem,3.8vw,2.9rem)', letterSpacing: '-0.015em', color: '#EDEFE7' }}>
              Organic growth, <span className="g-text">handled end to end</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }} data-reveal>
            {services.map(({ num, title, desc }) => (
              <div key={title} className="glass" style={{ padding: '32px 28px' }}>
                <div style={{ fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.7rem', letterSpacing: '0.1em', color: '#C8F14B', marginBottom: 14 }}>{num}</div>
                <h3 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 700, fontSize: '1.15rem', letterSpacing: '-0.01em', color: '#EDEFE7', marginBottom: 10 }}>{title}</h3>
                <p style={{ color: '#93A29A', fontSize: '0.9375rem', lineHeight: 1.72 }}>{desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link href="/services" className="btn-ghost" style={{ padding: '13px 32px' }}>View All Services</Link>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK (light) ── */}
      <section style={{ background: '#F7F6F1', padding: '110px 24px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }} data-reveal>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}><span className="eyebrow">How We Work</span></div>
            <h2 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 700, fontSize: 'clamp(1.9rem,3.8vw,2.9rem)', letterSpacing: '-0.015em', color: '#0B1210' }}>
              A clear process, <span style={underline}>from audit to results</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 24 }} data-reveal>
            {steps.map(({ title, desc }, i) => (
              <div key={title}>
                <div className="step-badge" style={{ marginBottom: 20, color: '#0B1210', background: '#FFFFFF', border: '1.5px solid #C8F14B' }}>{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 700, fontSize: '1.15rem', color: '#0B1210', marginBottom: 10 }}>{title}</h3>
                <p style={{ color: '#5B6560', fontSize: '0.9375rem', lineHeight: 1.72 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE HELP (dark) ── */}
      <section style={{ background: '#070D16', padding: '110px 24px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }} data-reveal>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}><span className="eyebrow">Who We Help</span></div>
            <h2 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 700, fontSize: 'clamp(1.9rem,3.8vw,2.9rem)', letterSpacing: '-0.015em', color: '#EDEFE7' }}>
              Built for local businesses that <span className="g-text">rely on being found</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }} data-reveal>
            {audiences.map(({ title, desc }) => (
              <div key={title} className="glass" style={{ padding: '36px 30px' }}>
                <h3 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 700, fontSize: '1.2rem', letterSpacing: '-0.01em', color: '#EDEFE7', marginBottom: 12 }}>{title}</h3>
                <p style={{ color: '#93A29A', fontSize: '0.9375rem', lineHeight: 1.72 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ (light) ── */}
      <section style={{ background: '#F7F6F1', padding: '110px 24px' }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }} data-reveal>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}><span className="eyebrow">FAQ</span></div>
            <h2 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 700, fontSize: 'clamp(1.9rem,3.8vw,2.9rem)', letterSpacing: '-0.015em', color: '#0B1210' }}>
              Common questions
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }} data-reveal>
            {faqs.map(({ q, a }) => (
              <details key={q} className="card-light" style={{ padding: '22px 26px' }}>
                <summary style={{ cursor: 'pointer', fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 700, fontSize: '1.02rem', color: '#0B1210', listStyle: 'none' }}>{q}</summary>
                <p style={{ color: '#5B6560', fontSize: '0.95rem', lineHeight: 1.72, marginTop: 12 }}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIGNAL BOOST (dark) — curated blog picks ── */}
      <section style={{ background: '#04070C', padding: '110px 24px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }} data-reveal>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}><span className="eyebrow">Curated Reads</span></div>
            <h2 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 700, fontSize: 'clamp(1.9rem,3.8vw,2.9rem)', letterSpacing: '-0.015em', color: '#EDEFE7', marginBottom: 16 }}>
              Signal <span style={underline}>Boost</span>
            </h2>
            <p style={{ color: '#93A29A', fontSize: '1rem', maxWidth: 500, margin: '0 auto' }}>
              A handful of reads we&apos;ve chosen to surface, not everything, just the ones worth your five minutes.
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
            <Link href="/blog" className="btn-ghost" style={{ padding: '13px 32px' }}>Read More on the Blog</Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA (light section, dark card) ── */}
      <section style={{ background: '#F7F6F1', padding: '110px 24px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ position: 'relative', borderRadius: 28, padding: '84px 56px', textAlign: 'center', overflow: 'hidden', background: '#0C1721', border: '1px solid rgba(237,239,231,0.08)' }} data-reveal>
            <div style={{ position: 'absolute', top: '-40%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(200,241,75,0.1) 0%,transparent 65%)', filter: 'blur(70px)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}><span className="eyebrow">Ready to Grow?</span></div>
              <h2 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 800, fontSize: 'clamp(2.1rem,4.8vw,3.5rem)', letterSpacing: '-0.02em', lineHeight: 1.05, color: '#EDEFE7', marginBottom: 22 }}>
                Get a <span className="g-text">free SEO audit</span> for your business
              </h2>
              <p style={{ color: '#93A29A', maxWidth: 480, margin: '0 auto 44px', fontSize: '1.05rem', lineHeight: 1.75 }}>
                Tell us your city, your services, and your goals. We&apos;ll show you what is holding back your visibility and what to fix first.
              </p>
              <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn-primary" style={{ padding: '16px 36px', fontSize: '1.0625rem' }}>
                  Get a Free SEO Audit
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
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition-duration: 0.01ms !important; }
        }
      `}</style>
    </>
  )
}
