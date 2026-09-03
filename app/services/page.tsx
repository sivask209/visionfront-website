import Link from 'next/link'

const services = [
  {
    num: '01',
    title: 'AI Agents',
    tagline: 'Always-on intelligence for your business',
    desc: 'Intelligent AI agents that handle customer interactions, qualify incoming leads, manage internal workflows, and provide round-the-clock business support — without any manual input from your team.',
    features: ['Customer interaction handling', 'Lead qualification & scoring', 'Internal workflow management', 'Business support automation', 'Multi-channel deployment (web, SMS, email, voice)'],
  },
  {
    num: '02',
    title: 'Automated Follow-Up',
    tagline: 'Never let a warm lead go cold',
    desc: 'Smart follow-up sequences that run on autopilot via phone, email, and SMS. Our AI nurtures every prospect through your funnel with personalised messages at exactly the right moment.',
    features: ['Automated phone, email & SMS follow-ups', 'Personalised drip sequences', 'Booking & appointment reminders', 'Re-engagement campaigns', 'CRM integration & sync'],
  },
  {
    num: '03',
    title: 'AI-Powered Scheduling',
    tagline: 'Fill your calendar without lifting a finger',
    desc: 'Seamless AI scheduling that integrates with your calendar and CRM. Prospects can book appointments 24/7 while your AI handles confirmations, reminders, and rescheduling automatically.',
    features: ['24/7 self-service booking', 'Calendar & CRM integration', 'Automated confirmations & reminders', 'Smart rescheduling', 'No-show reduction workflows'],
  },
  {
    num: '04',
    title: 'AI Chatbots & Lead Capture',
    tagline: 'Your website working for you around the clock',
    desc: 'Custom AI chatbots deployed on your website and social media that engage every visitor, ask qualifying questions, capture contact details, and hand off hot leads — instantly.',
    features: ['Website & social media deployment', 'Qualifying question flows', 'Lead capture & enrichment', 'Instant hot-lead notification', 'Multi-language support'],
  },
  {
    num: '05',
    title: 'Automation Workflows',
    tagline: 'Connect your tools, eliminate repetition',
    desc: 'End-to-end automation that connects your existing business tools — from CRM to email to invoicing. We eliminate repetitive tasks and build workflows that scale with your growth.',
    features: ['Multi-tool integrations', 'Repetitive task elimination', 'Data syncing & clean-up', 'Trigger-based automations', 'Custom workflow design'],
  },
  {
    num: '06',
    title: 'Websites & AI Applications',
    tagline: 'Modern digital presence, AI-powered',
    desc: 'High-performing websites and custom AI applications built to convert. Every site we build is designed for lead generation, brand authority, and seamless AI integration from the ground up.',
    features: ['Conversion-optimised design', 'Built-in AI integrations', 'Mobile-first, fast-loading', 'Custom AI application development', 'Ongoing optimisation & support'],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section style={{ background: '#04070C', padding: '160px 24px 100px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(34,59,60,0.3) 0%,transparent 65%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(53,84,76,0.25) 0%,transparent 65%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}><span className="eyebrow">What We Offer</span></div>
          <h1 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 800, fontSize: 'clamp(2.4rem,6vw,4rem)', letterSpacing: '-0.04em', lineHeight: 1.0, color: '#EDEFE7', marginBottom: 24 }}>
            AI Systems Built to <span className="g-text">Grow Your Business</span>
          </h1>
          <p style={{ color: '#93A29A', fontSize: '1.1rem', lineHeight: 1.78, maxWidth: 580, margin: '0 auto' }}>
            From intelligent chatbots to full-stack automation — every service we offer is designed to turn your business into a 24/7 lead-generating machine.
          </p>
        </div>
      </section>

      {/* ── SERVICES LIST ── */}
      <section style={{ background: '#070D16', padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 32 }}>
          {services.map(({ num, title, tagline, desc, features }, i) => (
            <div key={title} className="glass" style={{ padding: '48px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }} className="service-row">
                <div>
                  <div style={{ fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C8F14B', marginBottom: 12 }}>{num}</div>
                  <h2 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 800, fontSize: 'clamp(1.6rem,3vw,2.2rem)', letterSpacing: '-0.03em', color: '#EDEFE7', marginBottom: 8 }}>{title}</h2>
                  <p style={{ fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C8F14B', marginBottom: 20 }}>{tagline}</p>
                  <p style={{ color: '#93A29A', lineHeight: 1.78, fontSize: '0.9625rem' }}>{desc}</p>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#EDEFE7', marginBottom: 16 }}>What&apos;s Included</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {features.map(f => (
                      <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'linear-gradient(135deg,#C8F14B,#C8F14B)', flexShrink: 0 }} />
                        <span style={{ color: '#EDEFE7', fontSize: '0.9375rem' }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#04070C', padding: '100px 24px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}><span className="eyebrow">Get Started</span></div>
          <h2 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 800, fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.04em', color: '#EDEFE7', marginBottom: 20 }}>
            Not sure which service <span className="g-text">is right for you?</span>
          </h2>
          <p style={{ color: '#93A29A', fontSize: '1.05rem', lineHeight: 1.78, marginBottom: 40 }}>
            Book a free strategy call and we&apos;ll build a custom AI plan for your specific business — no commitment required.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary" style={{ padding: '15px 34px', fontSize: '1rem' }}>Book a Free Strategy Call</Link>
            <Link href="/contact" className="btn-ghost" style={{ padding: '15px 34px', fontSize: '1rem' }}>Book a Free Call</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .service-row { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </>
  )
}
