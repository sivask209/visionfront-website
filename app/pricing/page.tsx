import Link from 'next/link'

// TODO: Replace each price with confirmed monthly pricing before launch.
// Keep 'TBD' until real numbers are final so no unverified price goes live.
const tiers = [
  {
    name: 'Local Foundation',
    price: 'TBD',
    tagline: 'Get found in your local market.',
    desc: 'The essentials for a business that wants to show up for local searches: a clear plan and the local profile work that makes it possible.',
    features: [
      'SEO audit with prioritized action plan',
      'Google Business Profile optimization',
      'Local citations and directory cleanup',
      'Reviews strategy and response templates',
      'Monthly reporting on local visibility',
    ],
    cta: 'Get a Free SEO Audit',
    featured: false,
  },
  {
    name: 'Growth',
    price: 'TBD',
    tagline: 'Steady organic growth, every month.',
    desc: 'Everything in Local Foundation, plus ongoing SEO and social media so your visibility keeps building month after month.',
    features: [
      'Everything in Local Foundation',
      'Ongoing SEO: keyword research and on-page optimization',
      'Ongoing technical SEO fixes',
      'Location and service-area landing pages',
      'Social media content plan and posting',
      'Monthly performance review',
    ],
    cta: 'Get a Free SEO Audit',
    featured: true,
    badge: 'Recommended',
  },
  {
    name: 'Complete',
    price: 'TBD',
    tagline: 'Full organic growth, from search to content.',
    desc: 'Everything in Growth, plus content creation, AI search optimization, and a new website built to convert.',
    features: [
      'Everything in Growth',
      'Blog posts, service pages, and email content',
      'Short-form video scripts and edits',
      'AI & modern search optimization',
      'Website creation or redesign',
      'Reputation and review management',
    ],
    cta: 'Get a Free SEO Audit',
    featured: false,
  },
]

const faqs = [
  {
    q: 'How is pricing set?',
    a: 'Pricing depends on your market, the size of your service area, and the work included. We share a clear quote after your free SEO audit, so you know exactly what you are paying for.',
  },
  {
    q: 'Do you run paid ads?',
    a: 'No. Every package focuses on organic channels: search, local, social, content, and reviews.',
  },
  {
    q: 'Can I change packages later?',
    a: 'Yes, you can move up or down a package as your needs change. Terms are outlined in your proposal before you commit.',
  },
  {
    q: 'How soon will I see results?',
    a: 'Local profile and technical fixes can move quickly. Organic search growth usually builds over several months, which is why starting with a clear plan matters.',
  },
]

export default function PricingPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section style={{ background: '#04070C', padding: '160px 24px 100px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-25%', left: '50%', transform: 'translateX(-50%)', width: 700, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(34,59,60,0.45) 0%,transparent 65%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}><span className="eyebrow">SEO Packages</span></div>
          <h1 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 800, fontSize: 'clamp(2.4rem,6vw,4rem)', letterSpacing: '-0.02em', lineHeight: 1.02, color: '#EDEFE7', marginBottom: 24 }}>
            Simple packages for <span className="g-text">organic growth</span>
          </h1>
          <p style={{ color: '#93A29A', fontSize: '1.1rem', lineHeight: 1.75, maxWidth: 560, margin: '0 auto' }}>
            Pick the level of support that fits your business. Every package is built around getting you found online and turning that visibility into clients.
          </p>
        </div>
      </section>

      {/* ── PACKAGE CARDS ── */}
      <section style={{ background: '#070D16', padding: '80px 24px 120px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, alignItems: 'start' }} className="pricing-grid">
            {tiers.map(({ name, price, tagline, desc, features, cta, featured, badge }) => (
              <div
                key={name}
                className={featured ? 'glass pricing-featured' : 'glass'}
                style={{
                  padding: '40px 36px',
                  position: 'relative',
                  ...(featured ? { transform: 'scale(1.03)', background: 'rgba(12,23,33,0.9)' } : {}),
                }}
              >
                {badge && (
                  <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: '#C8F14B', borderRadius: 100, padding: '5px 18px', fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#04070C', whiteSpace: 'nowrap' }}>
                    {badge}
                  </div>
                )}

                <p style={{ fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C8F14B', marginBottom: 12 }}>{name}</p>

                <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, marginBottom: 8 }}>
                  {/* TODO: replace TBD with the confirmed monthly price */}
                  <span style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 800, fontSize: 'clamp(2.4rem,4vw,3.2rem)', lineHeight: 1, letterSpacing: '-0.02em', color: '#EDEFE7' }}>{price}</span>
                  {price !== 'TBD' && <span style={{ fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.75rem', color: '#93A29A', marginBottom: 6 }}>/mo</span>}
                </div>

                <p style={{ fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.7rem', letterSpacing: '0.04em', color: '#93A29A', marginBottom: 16, lineHeight: 1.6 }}>{tagline}</p>
                <p style={{ color: '#93A29A', fontSize: '0.9rem', lineHeight: 1.72, marginBottom: 28 }}>{desc}</p>

                <Link href="/contact" className={featured ? 'btn-primary' : 'btn-ghost'} style={{ width: '100%', justifyContent: 'center', padding: '13px 24px', marginBottom: 32, fontSize: '0.9375rem' }}>
                  {cta}
                </Link>

                <div style={{ height: 1, background: 'rgba(237,239,231,0.1)', marginBottom: 28 }} />

                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {features.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: 1 }}>
                        <circle cx="9" cy="9" r="8" stroke="#C8F14B" strokeWidth="1.3"/>
                        <path d="M5.5 9l2.5 2.5 4.5-5" stroke="#C8F14B" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span style={{ color: f.startsWith('Everything') ? '#C8F14B' : '#EDEFE7', fontSize: '0.9rem', lineHeight: 1.5, fontStyle: f.startsWith('Everything') ? 'italic' : 'normal' }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: 48, fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#93A29A' }}>
            Every package is organic. No paid ad spend required.
          </p>
        </div>
      </section>

      {/* ── FAQ (light) ── */}
      <section style={{ background: '#F7F6F1', padding: '110px 24px' }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}><span className="eyebrow">FAQ</span></div>
            <h2 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 700, fontSize: 'clamp(1.9rem,3.8vw,2.9rem)', letterSpacing: '-0.015em', color: '#0B1210' }}>
              Common questions
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {faqs.map(({ q, a }) => (
              <details key={q} className="card-light" style={{ padding: '22px 26px' }}>
                <summary style={{ cursor: 'pointer', fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 700, fontSize: '1.02rem', color: '#0B1210', listStyle: 'none' }}>{q}</summary>
                <p style={{ color: '#5B6560', fontSize: '0.95rem', lineHeight: 1.72, marginTop: 12 }}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA (dark) ── */}
      <section style={{ background: '#04070C', padding: '110px 24px 120px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}><span className="eyebrow">Not Sure Yet?</span></div>
          <h2 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 800, fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.02em', color: '#EDEFE7', marginBottom: 20 }}>
            Start with a <span className="g-text">free SEO audit</span>
          </h2>
          <p style={{ color: '#93A29A', fontSize: '1.05rem', lineHeight: 1.78, marginBottom: 40 }}>
            We will review your online presence and recommend the package that fits your goals and budget. No pressure, no obligation.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary" style={{ padding: '15px 34px', fontSize: '1rem' }}>Get a Free SEO Audit</Link>
            <Link href="/services" className="btn-ghost" style={{ padding: '15px 34px', fontSize: '1rem' }}>See Our Services</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .pricing-grid { grid-template-columns: 1fr !important; max-width: 480px; margin: 0 auto; }
          .pricing-grid > * { transform: none !important; }
        }
      `}</style>
    </>
  )
}
