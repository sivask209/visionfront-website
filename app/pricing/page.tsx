import Link from 'next/link'

const tiers = [
  {
    name: 'Starter',
    price: '299',
    tagline: 'Never miss another inquiry.',
    desc: 'Essential AI tools to capture and respond to every lead — automatically.',
    features: [
      '24/7 AI Web Chat',
      'Missed Call Text Back',
      'Basic Lead Capture',
      'SMS Notifications',
    ],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Growth',
    price: '599',
    tagline: 'Turn more inquiries into booked appointments automatically.',
    desc: 'Everything in Starter, plus voice, booking, and CRM automation built for scaling teams.',
    features: [
      'Everything in Starter',
      'AI Voice Receptionist',
      'Appointment Booking',
      'Automated Follow-Ups',
      'CRM Integration',
      'Lead Qualification Questions',
    ],
    cta: 'Start Growing',
    featured: true,
    badge: 'Most Popular',
  },
  {
    name: 'Premium',
    price: '1,199',
    tagline: 'A fully automated front desk for your business.',
    desc: 'Everything in Growth, plus content, reputation, and full-cycle campaign management.',
    features: [
      'Everything in Growth',
      'AI Content Marketing',
      'Google Review Automation',
      'Social Media Content Strategy',
      'Lead Reactivation Campaigns',
      'Priority Support',
      'Monthly Optimization',
    ],
    cta: 'Go Premium',
    featured: false,
  },
]

const faqs = [
  {
    q: 'Is there a setup fee?',
    a: 'No setup fees — ever. Your monthly price is all-in. We handle onboarding, integration, and getting your AI live.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. No long-term contracts. Cancel month-to-month with 30 days notice. We keep it fair because we want to earn your business every month.',
  },
  {
    q: 'How quickly will I see results?',
    a: 'Most clients see measurable improvements in lead response and capture within the first week. Meaningful ROI typically shows within 30–90 days.',
  },
  {
    q: 'Can I upgrade my plan later?',
    a: 'Absolutely. You can upgrade at any time and we\'ll prorate the difference. Many clients start on Starter and move to Growth once they see the impact.',
  },
]

export default function PricingPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section style={{ background: '#04070C', padding: '160px 24px 100px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-25%', left: '50%', transform: 'translateX(-50%)', width: 700, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(34,59,60,0.28) 0%,transparent 65%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}><span className="eyebrow">Pricing</span></div>
          <h1 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 800, fontSize: 'clamp(2.4rem,6vw,4rem)', letterSpacing: '-0.04em', lineHeight: 1.0, color: '#EDEFE7', marginBottom: 24 }}>
            Simple, Transparent <span className="g-text">Pricing</span>
          </h1>
          <p style={{ color: '#93A29A', fontSize: '1.1rem', lineHeight: 1.78, maxWidth: 500, margin: '0 auto' }}>
            No setup fees. No hidden costs. Just AI that works for your business every single day.
          </p>
        </div>
      </section>

      {/* ── PRICING CARDS ── */}
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
                  ...(featured ? { transform: 'scale(1.04)', background: 'rgba(15,15,34,0.9)' } : {}),
                }}
              >
                {badge && (
                  <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg,#C8F14B,#C8F14B)', borderRadius: 100, padding: '5px 18px', fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#fff', whiteSpace: 'nowrap' }}>
                    {badge}
                  </div>
                )}

                {/* Plan name */}
                <p style={{ fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: featured ? '#C8F14B' : '#C8F14B', marginBottom: 12 }}>{name}</p>

                {/* Price */}
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, marginBottom: 8 }}>
                  <span style={{ fontFamily: 'var(--font-manrope),sans-serif', fontSize: '1rem', color: '#93A29A', marginBottom: 10 }}>$</span>
                  <span style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 800, fontSize: 'clamp(2.8rem,4vw,3.5rem)', lineHeight: 1, letterSpacing: '-0.04em', color: '#EDEFE7' }}>{price}</span>
                  <span style={{ fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.75rem', color: '#93A29A', marginBottom: 10 }}>/mo</span>
                </div>

                {/* Tagline */}
                <p style={{ fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.7rem', letterSpacing: '0.06em', color: '#93A29A', marginBottom: 16, lineHeight: 1.6 }}>{tagline}</p>

                <p style={{ color: '#93A29A', fontSize: '0.9rem', lineHeight: 1.72, marginBottom: 28 }}>{desc}</p>

                <Link href="/contact" className={featured ? 'btn-primary' : 'btn-ghost'} style={{ width: '100%', justifyContent: 'center', padding: '13px 24px', marginBottom: 32, fontSize: '0.9375rem' }}>
                  {cta}
                </Link>

                {/* Divider */}
                <div style={{ height: 1, background: 'rgba(237,239,231,0.2)', marginBottom: 28 }} />

                {/* Features */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {features.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                        <circle cx="9" cy="9" r="8" stroke={featured ? '#C8F14B' : '#C8F14B'} strokeWidth="1.3"/>
                        <path d="M5.5 9l2.5 2.5 4.5-5" stroke={featured ? '#C8F14B' : '#C8F14B'} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span style={{ color: f.startsWith('Everything') ? '#C8F14B' : '#EDEFE7', fontSize: '0.9rem', fontStyle: f.startsWith('Everything') ? 'italic' : 'normal' }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BILLING NOTE ── */}
      <section style={{ background: '#04070C', padding: '0 24px 100px' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#93A29A' }}>
            All plans billed monthly &nbsp;·&nbsp; Cancel anytime &nbsp;·&nbsp; No long-term contracts
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: '#070D16', padding: '100px 24px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}><span className="eyebrow">FAQ</span></div>
            <h2 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 700, fontSize: 'clamp(1.8rem,4vw,2.8rem)', letterSpacing: '-0.03em', color: '#EDEFE7' }}>
              Common <span className="g-text">Questions</span>
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {faqs.map(({ q, a }) => (
              <div key={q} className="glass" style={{ padding: '28px 32px' }}>
                <p style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 700, fontSize: '1rem', color: '#EDEFE7', marginBottom: 10 }}>{q}</p>
                <p style={{ color: '#93A29A', fontSize: '0.9375rem', lineHeight: 1.72 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#04070C', padding: '100px 24px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}><span className="eyebrow">Get Started</span></div>
          <h2 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 800, fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.04em', color: '#EDEFE7', marginBottom: 20 }}>
            Not sure which plan <span className="g-text">is right for you?</span>
          </h2>
          <p style={{ color: '#93A29A', fontSize: '1.05rem', lineHeight: 1.78, marginBottom: 40 }}>
            Book a free strategy call. We&apos;ll assess your business and recommend exactly what you need — no pressure, no obligation.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary" style={{ padding: '15px 34px', fontSize: '1rem' }}>Book a Free Strategy Call</Link>
            <Link href="/services" className="btn-ghost" style={{ padding: '15px 34px', fontSize: '1rem' }}>View Our Services</Link>
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
