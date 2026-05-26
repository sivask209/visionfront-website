export const metadata = {
  title: 'Privacy Policy — VisionFront AI Solutions',
}

const sections = [
  {
    title: 'Information We Collect',
    content: [
      {
        subtitle: 'Information you provide directly',
        text: 'When you fill out our contact form, book a strategy call, or subscribe to our newsletter, we collect your name, email address, phone number (if provided), and the content of your message.',
      },
      {
        subtitle: 'Usage and analytics data',
        text: 'We may collect non-personal information about how you interact with our website, including pages visited, time spent, referring URLs, browser type, and device information. This data is used in aggregate to improve our website and services.',
      },
      {
        subtitle: 'AI system data',
        text: 'If you engage with any AI agent, chatbot, or automation tool we deploy on behalf of a client, conversation data may be collected and processed to deliver the service and improve AI performance.',
      },
    ],
  },
  {
    title: 'How We Use Your Information',
    content: [
      {
        subtitle: '',
        text: 'We use the information we collect to: respond to your enquiries and service requests; send you updates, newsletters, or marketing communications where you have opted in; deliver and improve our AI automation services; analyse website performance; and comply with legal obligations. We do not sell, rent, or trade your personal information to third parties.',
      },
    ],
  },
  {
    title: 'Third-Party Services',
    content: [
      {
        subtitle: '',
        text: 'We may use trusted third-party tools to operate our business, including CRM platforms, email marketing tools, scheduling software, and analytics providers. These services have their own privacy policies and we select providers who meet appropriate data protection standards. We may share your information with these services only to the extent necessary to deliver our services to you.',
      },
    ],
  },
  {
    title: 'AI Tools and Automation',
    content: [
      {
        subtitle: '',
        text: 'Our core service involves building and deploying AI-powered systems for our clients. Data processed through these systems — such as lead information, conversation logs, and CRM records — is handled in accordance with the data agreements in place between VisionFront AI Solutions and the respective client. If you are interacting with an AI system deployed by one of our clients, please refer to that client\'s privacy policy for details.',
      },
    ],
  },
  {
    title: 'Data Retention',
    content: [
      {
        subtitle: '',
        text: 'We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law. Contact form submissions and enquiry data are typically retained for up to 24 months. You may request deletion of your data at any time by contacting us.',
      },
    ],
  },
  {
    title: 'Your Rights',
    content: [
      {
        subtitle: '',
        text: 'Depending on your location, you may have the right to: access the personal data we hold about you; request correction of inaccurate data; request deletion of your data; withdraw consent for marketing communications at any time; and lodge a complaint with a relevant data protection authority. To exercise any of these rights, please contact us at info@visionfrontai.com.',
      },
    ],
  },
  {
    title: 'Cookies',
    content: [
      {
        subtitle: '',
        text: 'Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyse site traffic. You can control cookie preferences through your browser settings. Disabling cookies may affect the functionality of certain parts of our website.',
      },
    ],
  },
  {
    title: 'Security',
    content: [
      {
        subtitle: '',
        text: 'We take reasonable technical and organisational measures to protect your personal information against unauthorised access, loss, or misuse. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.',
      },
    ],
  },
  {
    title: 'Changes to This Policy',
    content: [
      {
        subtitle: '',
        text: 'We may update this Privacy Policy from time to time. When we do, we will revise the "last updated" date at the top of this page. We encourage you to review this policy periodically.',
      },
    ],
  },
  {
    title: 'Contact Us',
    content: [
      {
        subtitle: '',
        text: 'If you have any questions about this Privacy Policy or how we handle your data, please contact us at info@visionfrontai.com.',
      },
    ],
  },
]

export default function PrivacyPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: '#05050D', padding: '160px 24px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(123,47,190,0.22) 0%,transparent 65%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', marginBottom: 24 }}><span className="eyebrow">Legal</span></div>
          <h1 style={{ fontFamily: 'var(--font-syne),sans-serif', fontWeight: 800, fontSize: 'clamp(2.2rem,5vw,3.5rem)', letterSpacing: '-0.04em', lineHeight: 1.0, color: '#F0F0FF', marginBottom: 16 }}>
            Privacy Policy
          </h1>
          <p style={{ color: '#8B8BA8', fontSize: '0.9rem', fontFamily: 'var(--font-jetbrains),monospace', letterSpacing: '0.06em' }}>
            Last updated: January 2026
          </p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section style={{ background: '#0A0A1A', padding: '60px 24px 120px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p style={{ color: '#8B8BA8', fontSize: '1rem', lineHeight: 1.8, marginBottom: 56, paddingBottom: 40, borderBottom: '1px solid rgba(123,83,204,0.15)' }}>
            VisionFront AI Solutions (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
            {sections.map(({ title, content }, i) => (
              <div key={title}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                  <span style={{ fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7B53CC' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 style={{ fontFamily: 'var(--font-syne),sans-serif', fontWeight: 700, fontSize: '1.2rem', letterSpacing: '-0.02em', color: '#F0F0FF' }}>{title}</h2>
                </div>
                <div style={{ paddingLeft: 32, borderLeft: '2px solid rgba(123,83,204,0.2)', display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {content.map(({ subtitle, text }, j) => (
                    <div key={j}>
                      {subtitle && (
                        <p style={{ fontFamily: 'var(--font-syne),sans-serif', fontWeight: 600, fontSize: '0.9rem', color: '#06B6D4', marginBottom: 8 }}>{subtitle}</p>
                      )}
                      <p style={{ color: '#8B8BA8', fontSize: '0.9625rem', lineHeight: 1.8 }}>{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
