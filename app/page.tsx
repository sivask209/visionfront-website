import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ minHeight: '100dvh', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#05050D', overflow: 'hidden', padding: '120px 24px 80px' }}>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1, opacity: 0.038 }} aria-hidden="true">
          <filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter>
          <rect width="100%" height="100%" filter="url(#grain)"/>
        </svg>
        <div className="hero-grid" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }} />
        <div className="orb animate-drift1" style={{ width: 620, height: 620, top: '-12%', left: '-18%', background: 'radial-gradient(circle,rgba(123,47,190,0.62) 0%,transparent 68%)', zIndex: 1 }} />
        <div className="orb animate-drift2" style={{ width: 420, height: 420, top: '18%', right: '-10%', background: 'radial-gradient(circle,rgba(0,30,255,0.52) 0%,transparent 68%)', zIndex: 1 }} />
        <div className="orb animate-drift3" style={{ width: 360, height: 360, bottom: '8%', left: '32%', background: 'radial-gradient(circle,rgba(0,191,255,0.42) 0%,transparent 68%)', zIndex: 1 }} />

        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: 920, width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 34 }}>
            <span className="eyebrow">AI-Powered Growth Agency</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-syne),sans-serif', fontWeight: 800, fontSize: 'clamp(2.6rem,7vw,5.5rem)', lineHeight: 0.94, letterSpacing: '-0.04em', color: '#F0F0FF', marginBottom: 28 }}>
            Transform Your Business<br />
            <span className="g-text">With Intelligent AI</span>
          </h1>
          <p style={{ color: '#8B8BA8', fontSize: 'clamp(1rem,2vw,1.2rem)', maxWidth: 560, margin: '0 auto 44px', lineHeight: 1.8 }}>
            VisionFront AI Solutions builds cutting-edge marketing strategies powered by artificial intelligence — helping brands grow faster, smarter, and at scale.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 52 }}>
            <Link href="/contact" className="btn-primary" style={{ padding: '15px 34px', fontSize: '1rem' }}>
              Start Your Growth
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true"><path d="M3 7.5H12M12 7.5L8.5 4M12 7.5L8.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
            <Link href="/services" className="btn-ghost" style={{ padding: '15px 34px', fontSize: '1rem' }}>See Our Services</Link>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, flexWrap: 'wrap' }}>
            {['50+ CLIENTS', '3X AVG ROI', 'AI-FIRST AGENCY'].map(badge => (
              <span key={badge} style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.72rem', letterSpacing: '0.12em', color: '#8B8BA8' }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><circle cx="7" cy="7" r="6" stroke="#7B53CC" strokeWidth="1.2"/><path d="M4 7l2 2 4-4" stroke="#7B53CC" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                {badge}
              </span>
            ))}
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 32, left: '50%', animation: 'bounceY 2.2s ease-in-out infinite', color: 'rgba(123,83,204,0.55)' }} aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      </section>

      {/* ── HOW OUR AI SYSTEMS WORK ── */}
      <section style={{ background: '#0A0A1A', padding: '120px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}><span className="eyebrow">How It Works</span></div>
            <h2 style={{ fontFamily: 'var(--font-syne),sans-serif', fontWeight: 700, fontSize: 'clamp(1.9rem,4vw,3rem)', letterSpacing: '-0.03em', color: '#F0F0FF', marginBottom: 16 }}>
              How Our AI Systems <span className="g-text">Work</span>
            </h2>
            <p style={{ color: '#8B8BA8', maxWidth: 460, margin: '0 auto' }}>Three intelligent layers working together to capture, qualify, and convert leads around the clock.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
            {[
              { icon: '⚡', title: 'Lead Capture & Qualification', desc: 'Your AI instantly engages every new lead, asks the right questions, and filters out low-quality prospects — so your team only speaks to serious buyers.' },
              { icon: '🕐', title: '24/7 Instant Response', desc: 'No more missed messages. Your AI replies within seconds via chat, calls, email, or SMS — at any hour, on any day, without hiring extra staff.' },
              { icon: '📈', title: 'Lead Conversion', desc: 'We automate follow-ups, reminders, and bookings so leads never go cold. Your AI nurtures prospects through the funnel until they become paying customers.' },
            ].map(({ title, desc }) => (
              <div key={title} className="glass" style={{ padding: '36px 30px' }}>
                <h3 style={{ fontFamily: 'var(--font-syne),sans-serif', fontWeight: 700, fontSize: '1.2rem', letterSpacing: '-0.02em', color: '#F0F0FF', marginBottom: 12 }}>{title}</h3>
                <p style={{ color: '#8B8BA8', fontSize: '0.9375rem', lineHeight: 1.72 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: '#05050D', padding: '80px 24px', position: 'relative' }} className="stats-band">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0 }}>
            {[
              { value: '3x',   label: 'Faster Lead Response' },
              { value: '40%',  label: 'More Qualified Leads' },
              { value: '24/7', label: 'AI Always On' },
            ].map(({ value, label }, i) => (
              <div key={label} style={{ textAlign: 'center', padding: '40px 20px', position: 'relative' }}>
                <div style={{ fontFamily: 'var(--font-syne),sans-serif', fontWeight: 800, fontSize: 'clamp(2.8rem,5.5vw,4.5rem)', lineHeight: 1, marginBottom: 10, background: 'linear-gradient(90deg,#8B5CF6,#06B6D4)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {value}
                </div>
                <div style={{ fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8B8BA8' }}>{label}</div>
                {i < 2 && <div style={{ position: 'absolute', right: 0, top: '25%', bottom: '25%', width: 1, background: 'rgba(123,83,204,0.2)' }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section style={{ background: '#0F0F22', padding: '120px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}><span className="eyebrow">What We Build</span></div>
            <h2 style={{ fontFamily: 'var(--font-syne),sans-serif', fontWeight: 700, fontSize: 'clamp(1.9rem,4vw,3rem)', letterSpacing: '-0.03em', color: '#F0F0FF' }}>
              AI Solutions for <span className="g-text">Every Business Need</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(265px,1fr))', gap: 24 }}>
            {[
              { num: '01', title: 'AI Agents', desc: 'Intelligent agents that handle customer interactions, qualify leads, and manage internal workflows 24/7.' },
              { num: '02', title: 'Automation', desc: 'Smart workflows that connect your business tools and eliminate repetitive tasks at scale.' },
              { num: '03', title: 'Websites & AI Apps', desc: 'Modern, high-performing digital solutions built for conversion and powered by AI.' },
              { num: '04', title: 'AI Chatbots', desc: 'Custom chatbots that engage visitors, capture leads, and book appointments automatically.' },
            ].map(({ num, title, desc }) => (
              <div key={title} className="glass" style={{ padding: '32px 28px' }}>
                <div style={{ fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7B53CC', marginBottom: 14 }}>{num}</div>
                <h3 style={{ fontFamily: 'var(--font-syne),sans-serif', fontWeight: 700, fontSize: '1.15rem', letterSpacing: '-0.02em', color: '#F0F0FF', marginBottom: 10 }}>{title}</h3>
                <p style={{ color: '#8B8BA8', fontSize: '0.9375rem', lineHeight: 1.72 }}>{desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link href="/services" className="btn-ghost" style={{ padding: '13px 32px' }}>View All Services</Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#05050D', padding: '120px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ position: 'relative', borderRadius: 24, padding: '88px 60px', textAlign: 'center', overflow: 'hidden', background: 'rgba(15,15,34,0.82)', border: '1px solid rgba(123,83,204,0.32)' }}>
            <div style={{ position: 'absolute', top: '-35%', left: '-12%', width: 520, height: 520, borderRadius: '50%', background: 'radial-gradient(circle,rgba(123,47,190,0.38) 0%,transparent 65%)', filter: 'blur(70px)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-35%', right: '-12%', width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle,rgba(0,191,255,0.32) 0%,transparent 65%)', filter: 'blur(70px)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}><span className="eyebrow">Ready to Grow?</span></div>
              <h2 style={{ fontFamily: 'var(--font-syne),sans-serif', fontWeight: 800, fontSize: 'clamp(2.2rem,5.5vw,3.75rem)', letterSpacing: '-0.04em', lineHeight: 0.96, color: '#F0F0FF', marginBottom: 22 }}>
                Get Your Free<br /><span className="g-text">AI Automation Plan</span>
              </h2>
              <p style={{ color: '#8B8BA8', maxWidth: 480, margin: '0 auto 44px', fontSize: '1.05rem', lineHeight: 1.78 }}>
                Book a free strategy call and discover exactly how AI can transform your business into a 24/7 sales machine.
              </p>
              <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 40 }}>
                <Link href="/contact" className="btn-primary" style={{ padding: '16px 38px', fontSize: '1.0625rem' }}>
                  Book a Free Strategy Call
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true"><path d="M3 7.5H12M12 7.5L8.5 4M12 7.5L8.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
                <Link href="/services" className="btn-ghost" style={{ padding: '16px 38px', fontSize: '1.0625rem' }}>See Our Services</Link>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
                {['Free Consultation', 'No Long-Term Contracts', 'Results in 90 Days'].map(t => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true"><circle cx="7.5" cy="7.5" r="6.5" stroke="#06B6D4" strokeWidth="1.2"/><path d="M4.5 7.5l2 2 4-4" stroke="#06B6D4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span style={{ fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8B8BA8' }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
