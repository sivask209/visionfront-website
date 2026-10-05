import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { faqSchema, servicesSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'SEO Services for Small Business',
  description:
    'SEO audits, ongoing SEO, local SEO, social media, AI search optimization, content, websites, and reviews. Organic growth for small businesses, with no paid ads required.',
  alternates: { canonical: '/services' },
}

const anchorFor = (title: string) =>
  title.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

const services = [
  {
    num: '01',
    title: 'SEO Audits',
    tagline: 'Know exactly what is holding you back',
    desc: 'A complete review of your website’s technical health, on-page content, and local visibility, finished with a prioritized action plan you can act on right away.',
    features: [
      'Technical check: speed, crawlability, and mobile performance',
      'On-page review of titles, headings, and content',
      'Content gap analysis against competing pages',
      'Local review of listings and citations',
      'Prioritized action plan with clear next steps',
    ],
    bestFor: 'Businesses that want to see exactly what needs fixing before committing to a full plan.',
  },
  {
    num: '02',
    title: 'Ongoing SEO',
    tagline: 'Organic growth that compounds month after month',
    desc: 'Steady search optimization that builds on itself, with regular improvements to your site, your content, and how search engines understand your business.',
    features: [
      'Keyword research based on what your clients search',
      'On-page optimization of pages and posts',
      'Ongoing technical SEO fixes',
      'Link building from relevant local and industry sources',
      'Monthly reporting on rankings, traffic, and inquiries',
    ],
    bestFor: 'Businesses ready for long-term, steady organic growth.',
  },
  {
    num: '03',
    title: 'Local SEO',
    tagline: 'Be the business people find when they search near them',
    desc: 'A stronger Google presence, consistent listings across directories, and a reviews strategy that builds trust before the first call.',
    features: [
      'Google Business Profile setup and optimization',
      'Local citations and directory consistency',
      'Reviews strategy and response templates',
      'Location and service-area landing pages',
      'Tracking of local search and map visibility',
    ],
    bestFor: 'Service businesses with a physical location or service area, such as law firms, realtors, and home services.',
  },
  {
    num: '04',
    title: 'Social Media Marketing',
    tagline: 'Visibility and trust, without paid promotion',
    desc: 'Organic posting and community building on the platforms your clients actually use, with content that sounds like your business.',
    features: [
      'Platform strategy based on your audience',
      'Monthly content calendar',
      'Posting, captions, and basic graphics',
      'Engagement and community management',
      'Monthly performance review',
    ],
    bestFor: 'Businesses that want to be seen and trusted through their own content, not ad spend.',
  },
  {
    num: '05',
    title: 'AI & Modern Search',
    tagline: 'Be found in AI Overviews, ChatGPT, and Perplexity',
    desc: 'More people now get answers from AI-generated summaries and assistants. We structure your content and business information so your business is clearly represented in those answers.',
    features: [
      'Structured data and clear business entity information',
      'FAQ-style answers to real client questions',
      'Authoritative, well-sourced service content',
      'Review of how AI tools describe your business today',
      'Ongoing monitoring of AI search visibility',
    ],
    bestFor: 'Businesses that want to stay findable as search shifts toward AI-generated answers.',
  },
  {
    num: '06',
    title: 'Content Creation',
    tagline: 'Helpful content that brings organic visitors',
    desc: 'Blog posts, service pages, short-form video, and email content written to answer your clients’ questions and move them toward a call.',
    features: [
      'Blog posts that target your clients’ questions',
      'Service and location pages written to convert',
      'Short-form video scripts and edits',
      'Email newsletters that bring past visitors back',
      'Review by a real person before anything is published',
    ],
    bestFor: 'Businesses that need a steady flow of helpful content without an in-house writer.',
  },
  {
    num: '07',
    title: 'Website Creation',
    tagline: 'Fast, findable websites built to convert',
    desc: 'Mobile-friendly, fast-loading sites with SEO-ready structure, built to turn visitors into inquiries.',
    features: [
      'Mobile-first, fast-loading design',
      'SEO-ready page structure and templates',
      'Clear calls to action and contact forms',
      'Local business metadata and structured data',
      'Analytics and conversion tracking',
    ],
    bestFor: 'Businesses with an outdated site, or launching a new one that needs to be found.',
  },
  {
    num: '08',
    title: 'Reputation & Reviews',
    tagline: 'Turn happy clients into visible reviews',
    desc: 'A simple system for asking satisfied clients for reviews and responding to every one, so your reputation keeps pace with your work.',
    features: [
      'Review request workflow for happy clients',
      'Response templates for positive and negative reviews',
      'Monitoring across Google and key directories',
      'Monthly reputation summary',
    ],
    bestFor: 'Service businesses where trust decides who gets the call.',
  },
]

const process = [
  { title: 'Audit', desc: 'We review your site, Google profile, and social presence to see what is working and what is not.' },
  { title: 'Plan', desc: 'We build a prioritized roadmap, so the most important fixes happen first.' },
  { title: 'Execute', desc: 'Our team handles the on-page, technical, local, and content work, plus social posting.' },
  { title: 'Report', desc: 'Monthly reports show rankings, traffic, calls, and inquiries, so you can see what is working.' },
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
    q: 'Can I start with just an audit?',
    a: 'Yes. The audit is a standalone deliverable with a prioritized action plan. You can use it with your own team or hire us to carry it out.',
  },
  {
    q: 'Who do you work with?',
    a: 'Small businesses in local markets, including law firms, realtors, and local service businesses that rely on being found online.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={[servicesSchema(services.map(({ title, desc }) => ({ name: title, description: desc }))), faqSchema(faqs)]} />
      {/* ── PAGE HERO ── */}
      <section style={{ background: '#04070C', padding: '160px 24px 100px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(34,59,60,0.5) 0%,transparent 65%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}><span className="eyebrow">Our Services</span></div>
          <h1 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 800, fontSize: 'clamp(2.4rem,6vw,4rem)', letterSpacing: '-0.02em', lineHeight: 1.02, color: '#EDEFE7', marginBottom: 24 }}>
            Organic growth that <span className="g-text">brings in clients</span>
          </h1>
          <p style={{ color: '#93A29A', fontSize: '1.1rem', lineHeight: 1.75, maxWidth: 600, margin: '0 auto' }}>
            Search, local, social, content, and AI search, working together so more of the right people find you, trust you, and get in touch. No paid ads required.
          </p>
        </div>
      </section>

      {/* ── SERVICES LIST ── */}
      <section style={{ background: '#070D16', padding: '100px 24px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 28 }}>
          {services.map(({ num, title, tagline, desc, features, bestFor }) => (
            <div key={title} id={anchorFor(title)} className="glass" style={{ padding: '44px 46px', scrollMarginTop: 120 }}>
              <div className="service-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.72rem', letterSpacing: '0.15em', color: '#C8F14B', marginBottom: 12 }}>{num}</div>
                  <h2 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 800, fontSize: 'clamp(1.6rem,3vw,2.1rem)', letterSpacing: '-0.02em', color: '#EDEFE7', marginBottom: 8 }}>{title}</h2>
                  <p style={{ fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#93A29A', marginBottom: 20 }}>{tagline}</p>
                  <p style={{ color: '#93A29A', lineHeight: 1.75, fontSize: '0.975rem', marginBottom: 22 }}>{desc}</p>
                  <p style={{ color: '#EDEFE7', fontSize: '0.9375rem', lineHeight: 1.7 }}>
                    <span style={{ color: '#C8F14B', fontWeight: 600 }}>Best for: </span>{bestFor}
                  </p>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#EDEFE7', marginBottom: 16 }}>What&apos;s Included</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {features.map(f => (
                      <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#C8F14B', flexShrink: 0, marginTop: 9 }} />
                        <span style={{ color: '#EDEFE7', fontSize: '0.9375rem', lineHeight: 1.6 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY ORGANIC (light) ── */}
      <section style={{ background: '#F7F6F1', padding: '110px 24px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}><span className="eyebrow">Why Organic</span></div>
            <h2 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 700, fontSize: 'clamp(1.9rem,3.8vw,2.9rem)', letterSpacing: '-0.015em', color: '#0B1210' }}>
              Growth that <span style={{ textDecoration: 'underline', textDecorationColor: '#C8F14B', textDecorationThickness: 3, textUnderlineOffset: 4 }}>builds on itself</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
            {[
              { title: 'Compounds over time', desc: 'Pages and posts keep working long after they are published, so each improvement adds to the last.' },
              { title: 'Builds trust', desc: 'People who find you through search are already looking for what you do. That makes them warmer leads.' },
              { title: 'Lower cost per client', desc: 'Organic channels do not need a paid ad budget every month, so your cost per client steadies over time.' },
            ].map(({ title, desc }) => (
              <div key={title} className="card-light" style={{ padding: '36px 30px' }}>
                <h3 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 700, fontSize: '1.15rem', color: '#0B1210', marginBottom: 12 }}>{title}</h3>
                <p style={{ color: '#5B6560', fontSize: '0.9375rem', lineHeight: 1.72 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS (dark) ── */}
      <section style={{ background: '#04070C', padding: '110px 24px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}><span className="eyebrow">How It Works</span></div>
            <h2 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 700, fontSize: 'clamp(1.9rem,3.8vw,2.9rem)', letterSpacing: '-0.015em', color: '#EDEFE7' }}>
              A clear process, <span className="g-text">from audit to results</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 24 }}>
            {process.map(({ title, desc }, i) => (
              <div key={title} className="glass" style={{ padding: '32px 28px' }}>
                <div className="step-badge" style={{ marginBottom: 20 }}>{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 700, fontSize: '1.15rem', color: '#EDEFE7', marginBottom: 10 }}>{title}</h3>
                <p style={{ color: '#93A29A', fontSize: '0.9375rem', lineHeight: 1.72 }}>{desc}</p>
              </div>
            ))}
          </div>
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
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}><span className="eyebrow">Get Started</span></div>
          <h2 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 800, fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.02em', color: '#EDEFE7', marginBottom: 20 }}>
            Not sure where to start? <span className="g-text">Get a free audit.</span>
          </h2>
          <p style={{ color: '#93A29A', fontSize: '1.05rem', lineHeight: 1.78, marginBottom: 40 }}>
            We&apos;ll review your website and online presence, then show you the fixes that will make the biggest difference for your business.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary" style={{ padding: '15px 34px', fontSize: '1rem' }}>Get a Free SEO Audit</Link>
            <Link href="/pricing" className="btn-ghost" style={{ padding: '15px 34px', fontSize: '1rem' }}>View Pricing</Link>
            <Link href="/blog" className="btn-ghost" style={{ padding: '15px 34px', fontSize: '1rem' }}>Read Our Guides</Link>
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
