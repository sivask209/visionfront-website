import Link from 'next/link'

const values = [
  { title: 'AI-First Thinking', desc: 'Every solution we build starts with the question: how can AI make this faster, smarter, and more scalable?' },
  { title: 'Results Over Promises', desc: 'We measure success in leads captured, time saved, and revenue generated — not vanity metrics.' },
  { title: 'Build for the Future', desc: 'We don\'t just fix today\'s problems. We build intelligent systems designed to evolve with your business.' },
  { title: 'Radical Transparency', desc: 'No black boxes. You see exactly what\'s running, why it\'s running, and what it\'s producing for you.' },
]

const audiences = [
  'Service-based businesses & agencies',
  'Law firms & professional consultants',
  'Local businesses & franchises',
  'Digital entrepreneurs & solopreneurs',
  'Growing teams looking to scale without hiring',
]

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section style={{ background: '#05050D', padding: '160px 24px 100px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(123,47,190,0.35) 0%,transparent 65%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}><span className="eyebrow">Our Story</span></div>
          <h1 style={{ fontFamily: 'var(--font-syne),sans-serif', fontWeight: 800, fontSize: 'clamp(2.4rem,6vw,4rem)', letterSpacing: '-0.04em', lineHeight: 1.0, color: '#F0F0FF', marginBottom: 24 }}>
            We Don&apos;t Just Implement Tools.<br />
            <span className="g-text">We Build Intelligent Systems.</span>
          </h1>
          <p style={{ color: '#8B8BA8', fontSize: '1.1rem', lineHeight: 1.78, maxWidth: 600, margin: '0 auto' }}>
            VisionFront AI was established to bridge the gap between powerful AI technology and the businesses that need it most.
          </p>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section style={{ background: '#0A0A1A', padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="about-grid">
          <div>
            <div style={{ display: 'flex', marginBottom: 20 }}><span className="eyebrow">Our Mission</span></div>
            <h2 style={{ fontFamily: 'var(--font-syne),sans-serif', fontWeight: 700, fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', letterSpacing: '-0.03em', lineHeight: 1.1, color: '#F0F0FF', marginBottom: 24 }}>
              Artificial intelligence is no longer optional — <span className="g-text">it&apos;s foundational.</span>
            </h2>
            <p style={{ color: '#8B8BA8', lineHeight: 1.8, marginBottom: 20, fontSize: '1rem' }}>
              We saw a critical gap in the market: while AI tools had become widely accessible, most businesses struggled with practical implementation. The technology existed. The expertise to deploy it strategically didn&apos;t.
            </p>
            <p style={{ color: '#8B8BA8', lineHeight: 1.8, fontSize: '1rem' }}>
              VisionFront AI was built to close that gap — delivering enterprise-grade AI systems to small and growing businesses at a price point that makes sense.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { stat: '24/7', label: 'AI always working for you' },
              { stat: '< 5s', label: 'Average AI response time' },
              { stat: '90 days', label: 'Time to measurable results' },
            ].map(({ stat, label }) => (
              <div key={stat} className="glass" style={{ padding: '28px 32px', display: 'flex', alignItems: 'center', gap: 24 }}>
                <div style={{ fontFamily: 'var(--font-syne),sans-serif', fontWeight: 800, fontSize: '2rem', background: 'linear-gradient(90deg,#8B5CF6,#06B6D4)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', flexShrink: 0 }}>{stat}</div>
                <div style={{ fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8B8BA8' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ background: '#0F0F22', padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}><span className="eyebrow">What We Stand For</span></div>
            <h2 style={{ fontFamily: 'var(--font-syne),sans-serif', fontWeight: 700, fontSize: 'clamp(1.9rem,4vw,3rem)', letterSpacing: '-0.03em', color: '#F0F0FF' }}>
              Our Core <span className="g-text">Values</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 24 }}>
            {values.map(({ title, desc }) => (
              <div key={title} className="glass" style={{ padding: '32px 28px' }}>
                <h3 style={{ fontFamily: 'var(--font-syne),sans-serif', fontWeight: 700, fontSize: '1.15rem', letterSpacing: '-0.02em', color: '#F0F0FF', marginBottom: 12 }}>{title}</h3>
                <p style={{ color: '#8B8BA8', fontSize: '0.9375rem', lineHeight: 1.72 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section style={{ background: '#0A0A1A', padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="about-grid">
          <div>
            <div style={{ display: 'flex', marginBottom: 20 }}><span className="eyebrow">Who We Serve</span></div>
            <h2 style={{ fontFamily: 'var(--font-syne),sans-serif', fontWeight: 700, fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', letterSpacing: '-0.03em', lineHeight: 1.1, color: '#F0F0FF', marginBottom: 24 }}>
              Built for businesses <span className="g-text">ready to scale with AI.</span>
            </h2>
            <p style={{ color: '#8B8BA8', lineHeight: 1.8, fontSize: '1rem' }}>
              We partner with service businesses, consultants, and growth-focused founders who are losing valuable leads and want to automate their front-end operations — without building an in-house tech team.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {audiences.map(a => (
              <div key={a} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 20px', borderRadius: 12, background: 'rgba(15,15,34,0.6)', border: '1px solid rgba(123,83,204,0.2)' }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><circle cx="9" cy="9" r="8" stroke="#7B53CC" strokeWidth="1.3"/><path d="M5.5 9l2.5 2.5 4.5-5" stroke="#06B6D4" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span style={{ color: '#F0F0FF', fontSize: '0.9375rem' }}>{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#05050D', padding: '100px 24px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-syne),sans-serif', fontWeight: 800, fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.04em', color: '#F0F0FF', marginBottom: 20 }}>
            Ready to work <span className="g-text">with us?</span>
          </h2>
          <p style={{ color: '#8B8BA8', fontSize: '1.05rem', lineHeight: 1.78, marginBottom: 40 }}>
            Book a free strategy call and let&apos;s explore what AI can do for your specific business.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary" style={{ padding: '15px 34px', fontSize: '1rem' }}>Book a Free Call</Link>
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
