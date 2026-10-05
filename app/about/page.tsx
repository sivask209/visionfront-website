import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'VisionFront AI is a marketing and SEO agency for small businesses. Learn how we help local businesses get found online and win more clients, organically.',
  alternates: { canonical: '/about' },
}

const values = [
  { title: 'Organic First', desc: 'We grow your visibility through search, local listings, social, content, and reviews, not through ad spend that stops when the budget does.' },
  { title: 'Honest Expectations', desc: 'No agency can guarantee a ranking, because search engines decide that. We commit to a clear process and transparent reporting instead.' },
  { title: 'Built to Last', desc: 'Organic growth compounds. The pages, profiles, and content we build keep working for you long after the work is done.' },
  { title: 'Plain Language', desc: 'No jargon walls. You see what we are doing, why we are doing it, and what it is producing for your business.' },
]

const audiences = [
  'Law firms and legal practices',
  'Realtors and real estate teams',
  'Local service businesses like plumbers, dentists, and salons',
  'Home services and contractors',
  'Any local business that relies on being found on Google',
]

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section style={{ background: '#04070C', padding: '160px 24px 100px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(34,59,60,0.35) 0%,transparent 65%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}><span className="eyebrow">Our Story</span></div>
          <h1 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 800, fontSize: 'clamp(2.4rem,6vw,4rem)', letterSpacing: '-0.04em', lineHeight: 1.0, color: '#EDEFE7', marginBottom: 24 }}>
            We Help Small Businesses <span className="g-text">Get Found Online.</span>
          </h1>
          <p style={{ color: '#93A29A', fontSize: '1.1rem', lineHeight: 1.78, maxWidth: 600, margin: '0 auto' }}>
            VisionFront AI is a marketing and SEO agency for small businesses. We help you show up where customers search, then turn that visibility into a steady flow of new clients, organically.
          </p>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section style={{ background: '#070D16', padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="about-grid">
          <div>
            <div style={{ display: 'flex', marginBottom: 20 }}><span className="eyebrow">Our Mission</span></div>
            <h2 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 700, fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', letterSpacing: '-0.03em', lineHeight: 1.1, color: '#EDEFE7', marginBottom: 24 }}>
              Being found should not depend on <span className="g-text">a big ad budget.</span>
            </h2>
            <p style={{ color: '#93A29A', lineHeight: 1.8, marginBottom: 20, fontSize: '1rem' }}>
              Most small businesses do excellent work and still lose clients to competitors who simply show up first in search. Paid ads can help, but they stop the moment the budget does.
            </p>
            <p style={{ color: '#93A29A', lineHeight: 1.8, fontSize: '1rem' }}>
              VisionFront was built to close that gap with organic growth: search, local, social, content, and AI search, handled by a team that treats your visibility as a business asset.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { stat: 'Organic', label: 'Growth from search, social, and content' },
              { stat: 'Local', label: 'Built around how your customers search' },
              { stat: 'Clear', label: 'Prioritized plans and reports you can read' },
            ].map(({ stat, label }) => (
              <div key={stat} className="glass" style={{ padding: '28px 32px', display: 'flex', alignItems: 'center', gap: 24 }}>
                <div style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 800, fontSize: '2rem', background: 'linear-gradient(90deg,#C8F14B,#C8F14B)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', flexShrink: 0 }}>{stat}</div>
                <div style={{ fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#93A29A' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ background: '#0C1721', padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}><span className="eyebrow">What We Stand For</span></div>
            <h2 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 700, fontSize: 'clamp(1.9rem,4vw,3rem)', letterSpacing: '-0.03em', color: '#EDEFE7' }}>
              Our Core <span className="g-text">Values</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 24 }}>
            {values.map(({ title, desc }) => (
              <div key={title} className="glass" style={{ padding: '32px 28px' }}>
                <h3 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 700, fontSize: '1.15rem', letterSpacing: '-0.02em', color: '#EDEFE7', marginBottom: 12 }}>{title}</h3>
                <p style={{ color: '#93A29A', fontSize: '0.9375rem', lineHeight: 1.72 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section style={{ background: '#070D16', padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="about-grid">
          <div>
            <div style={{ display: 'flex', marginBottom: 20 }}><span className="eyebrow">Who We Serve</span></div>
            <h2 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 700, fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', letterSpacing: '-0.03em', lineHeight: 1.1, color: '#EDEFE7', marginBottom: 24 }}>
              Built for local businesses <span className="g-text">that rely on being found.</span>
            </h2>
            <p style={{ color: '#93A29A', lineHeight: 1.8, fontSize: '1rem' }}>
              We work with local businesses in growing markets, including Tier 2 and Tier 3 US cities, that want steady new clients without relying on paid ads or hiring an in-house marketing team.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {audiences.map(a => (
              <div key={a} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 20px', borderRadius: 12, background: 'rgba(15,15,34,0.6)', border: '1px solid rgba(237,239,231,0.2)' }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><circle cx="9" cy="9" r="8" stroke="#C8F14B" strokeWidth="1.3"/><path d="M5.5 9l2.5 2.5 4.5-5" stroke="#C8F14B" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span style={{ color: '#EDEFE7', fontSize: '0.9375rem' }}>{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#04070C', padding: '100px 24px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 800, fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.04em', color: '#EDEFE7', marginBottom: 20 }}>
            Ready to get found <span className="g-text">online?</span>
          </h2>
          <p style={{ color: '#93A29A', fontSize: '1.05rem', lineHeight: 1.78, marginBottom: 40 }}>
            Get a free SEO audit and we&apos;ll show you exactly what is holding your visibility back and what to fix first.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary" style={{ padding: '15px 34px', fontSize: '1rem' }}>Get a Free SEO Audit</Link>
            <Link href="/services" className="btn-ghost" style={{ padding: '15px 34px', fontSize: '1rem' }}>Our Services</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </>
  )
}
