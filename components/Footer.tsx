'use client'

import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '/',         label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/blog',     label: 'Blog' },
  { href: '/about',    label: 'About' },
  { href: '/contact',  label: 'Contact' },
]

const portfolioLinks = [
  { href: 'https://adsportfolio.visionfrontai.com/', label: 'Ads Portfolio' },
  { href: 'https://portfolio.visionfrontai.com/',    label: 'Portfolio' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#04070C', borderTop: '1px solid rgba(237,239,231,0.08)', padding: '72px 24px 36px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1.3fr', gap: 48, marginBottom: 56 }} className="footer-grid">

          {/* Brand */}
          <div>
            <Image src="/logo.png" alt="VisionFront AI Solutions" width={190} height={52} style={{ height: 46, width: 'auto', marginBottom: 20 }} />
            <p style={{ color: '#93A29A', fontSize: '0.9375rem', lineHeight: 1.78, maxWidth: 250, marginBottom: 28 }}>
              Building intelligent AI systems that turn small businesses into 24/7 growth machines.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              <a href="https://facebook.com/visionfrontai" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(237,239,231,0.06)', border: '1px solid rgba(237,239,231,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'transform 0.2s, background 0.2s, border-color 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,241,75,0.4)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(237,239,231,0.12)'; }}>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M10 2.5H8.5A2 2 0 006.5 4.5v1.5H5v2h1.5V13H9V8h1.5l.5-2H9V4.5c0-.3.2-.5.5-.5H10V2.5z" stroke="#93A29A" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="https://instagram.com/visionfrontmarketing" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(237,239,231,0.06)', border: '1px solid rgba(237,239,231,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'transform 0.2s, background 0.2s, border-color 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,241,75,0.4)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(237,239,231,0.12)'; }}>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><rect x="1.5" y="1.5" width="12" height="12" rx="3.5" stroke="#93A29A" strokeWidth="1.1"/><circle cx="7.5" cy="7.5" r="2.8" stroke="#93A29A" strokeWidth="1.1"/><circle cx="11" cy="4" r=".7" fill="#93A29A"/></svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-bricolage), sans-serif', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#EDEFE7', marginBottom: 20 }}>Navigation</h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {navLinks.map(({ href, label }) => (
                <Link key={href} href={href} style={{ color: '#93A29A', textDecoration: 'none', fontSize: '0.9375rem', transition: 'color 0.22s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#C8F14B')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#93A29A')}>
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Portfolio */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-bricolage), sans-serif', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#EDEFE7', marginBottom: 20 }}>Portfolio</h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {portfolioLinks.map(({ href, label }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" style={{ color: '#93A29A', textDecoration: 'none', fontSize: '0.9375rem', transition: 'color 0.22s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#C8F14B')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#93A29A')}>
                  {label} ↗
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-bricolage), sans-serif', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#EDEFE7', marginBottom: 20 }}>Get in Touch</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
              <a href="mailto:info@visionfrontai.com" style={{ color: '#93A29A', textDecoration: 'none', fontSize: '0.9375rem', transition: 'color 0.22s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#C8F14B')}
                onMouseLeave={e => (e.currentTarget.style.color = '#93A29A')}>
                info@visionfrontai.com
              </a>
            </div>
            <h4 style={{ fontFamily: 'var(--font-bricolage), sans-serif', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#EDEFE7', marginBottom: 14 }}>Stay Updated</h4>
            <div style={{ display: 'flex', gap: 8 }}>
              <input type="email" placeholder="your@email.com" aria-label="Email for newsletter"
                style={{ flex: 1, minWidth: 0, background: 'rgba(237,239,231,0.05)', border: '1px solid rgba(237,239,231,0.15)', borderRadius: 100, padding: '10px 20px', color: '#EDEFE7', fontFamily: 'var(--font-manrope), sans-serif', fontSize: '0.9rem', outline: 'none' }} />
              <button className="btn-primary" style={{ padding: '10px 18px', fontSize: '0.85rem', flexShrink: 0 }}>Subscribe</button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(237,239,231,0.08)', paddingTop: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 14 }}>
          <p style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '0.68rem', letterSpacing: '0.06em', color: 'rgba(147,162,154,0.7)' }}>
            © 2026 VisionFront AI Solutions. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            <Link href="/privacy" style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '0.68rem', letterSpacing: '0.06em', color: 'rgba(147,162,154,0.7)', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '0.68rem', letterSpacing: '0.06em', color: 'rgba(147,162,154,0.7)', textDecoration: 'none' }}>Terms of Service</Link>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
