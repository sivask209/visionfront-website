export const metadata = {
  title: 'Terms of Service — VisionFront AI Solutions',
}

const sections = [
  {
    title: 'Acceptance of Terms',
    text: 'By accessing our website or engaging VisionFront AI Solutions for services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services.',
  },
  {
    title: 'Services',
    text: 'VisionFront AI Solutions provides AI automation services including, but not limited to: AI agents, automated follow-up systems, AI-powered scheduling, chatbot development, workflow automation, and website and AI application development. The specific scope, deliverables, and timeline for each engagement are defined in a separate service agreement or proposal agreed upon between VisionFront AI Solutions and the client.',
  },
  {
    title: 'Payment Terms',
    text: 'Services are billed on a monthly subscription basis unless otherwise agreed in writing. Payment is due at the start of each billing cycle. VisionFront AI Solutions reserves the right to suspend services for accounts with outstanding balances. All fees are non-refundable unless otherwise stated in your service agreement. Prices are subject to change with 30 days written notice.',
  },
  {
    title: 'Client Responsibilities',
    text: 'Clients are responsible for providing accurate and complete information required to deliver the agreed services, granting necessary access to relevant platforms and tools, ensuring that any content or data provided to VisionFront AI Solutions complies with applicable laws, and promptly reviewing and providing feedback on deliverables. VisionFront AI Solutions is not liable for delays or issues caused by incomplete or inaccurate information provided by the client.',
  },
  {
    title: 'Intellectual Property',
    text: 'Upon receipt of full payment, clients own the custom-built AI systems, websites, and automation workflows developed specifically for their business. VisionFront AI Solutions retains ownership of any proprietary methodologies, frameworks, templates, and tools used in delivering the services. We reserve the right to reference the work completed (in general terms) for portfolio and marketing purposes unless the client requests otherwise in writing.',
  },
  {
    title: 'Confidentiality',
    text: 'Both parties agree to keep confidential any proprietary or sensitive information shared during the engagement. VisionFront AI Solutions will not disclose client business data, strategies, or customer information to third parties except as required to deliver the agreed services or as required by law.',
  },
  {
    title: 'Third-Party Tools and Platforms',
    text: 'Our services may involve integrating with or deploying on third-party platforms (e.g. CRM systems, telephony providers, email platforms). VisionFront AI Solutions is not responsible for the availability, performance, or changes to these third-party services. Any costs associated with third-party platforms are the client\'s responsibility unless explicitly included in the service agreement.',
  },
  {
    title: 'AI and Automation Disclaimer',
    text: 'Our AI systems are designed to augment and automate business operations. While we strive for high performance and accuracy, AI outputs are not guaranteed to be error-free. VisionFront AI Solutions does not guarantee specific business outcomes (such as revenue growth or lead volume) as these depend on factors outside our control, including market conditions, client industry, and how clients act on the information provided.',
  },
  {
    title: 'Limitation of Liability',
    text: 'To the maximum extent permitted by law, VisionFront AI Solutions shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services or website. Our total liability in connection with any service shall not exceed the total fees paid by the client in the three months preceding the claim.',
  },
  {
    title: 'Termination',
    text: 'Either party may terminate a monthly service agreement with 30 days written notice. VisionFront AI Solutions reserves the right to terminate services immediately in the event of non-payment, misuse, or breach of these terms. Upon termination, the client retains ownership of any completed deliverables that have been fully paid for.',
  },
  {
    title: 'Governing Law',
    text: 'These Terms of Service shall be governed by and construed in accordance with applicable law. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the relevant courts.',
  },
  {
    title: 'Changes to These Terms',
    text: 'We reserve the right to update these Terms of Service at any time. We will notify active clients of material changes. Continued use of our services after changes are posted constitutes acceptance of the revised terms.',
  },
  {
    title: 'Contact Us',
    text: 'If you have any questions about these Terms of Service, please contact us at info@visionfrontai.com.',
  },
]

export default function TermsPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: '#05050D', padding: '160px 24px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(0,191,255,0.18) 0%,transparent 65%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', marginBottom: 24 }}><span className="eyebrow">Legal</span></div>
          <h1 style={{ fontFamily: 'var(--font-syne),sans-serif', fontWeight: 800, fontSize: 'clamp(2.2rem,5vw,3.5rem)', letterSpacing: '-0.04em', lineHeight: 1.0, color: '#F0F0FF', marginBottom: 16 }}>
            Terms of Service
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
            Please read these Terms of Service carefully before using the VisionFront AI Solutions website or engaging our services. These terms govern your use of our website and the services we provide.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {sections.map(({ title, text }, i) => (
              <div key={title}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                  <span style={{ fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7B53CC' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 style={{ fontFamily: 'var(--font-syne),sans-serif', fontWeight: 700, fontSize: '1.2rem', letterSpacing: '-0.02em', color: '#F0F0FF' }}>{title}</h2>
                </div>
                <div style={{ paddingLeft: 32, borderLeft: '2px solid rgba(123,83,204,0.2)' }}>
                  <p style={{ color: '#8B8BA8', fontSize: '0.9625rem', lineHeight: 1.8 }}>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
