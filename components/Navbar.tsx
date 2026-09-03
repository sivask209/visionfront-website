'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

// Order: Home, Services, Portfolio (dropdown, rendered between the two groups), Blog, About, Contact
const linksBeforePortfolio = [
  { href: '/',         label: 'Home' },
  { href: '/services', label: 'Services' },
]
const linksAfterPortfolio = [
  { href: '/blog',     label: 'Blog' },
  { href: '/about',    label: 'About' },
  { href: '/contact',  label: 'Contact' },
]
const portfolioLinks = [
  { href: 'https://adsportfolio.visionfrontai.com/', label: 'Ads Portfolio' },
  { href: 'https://portfolio.visionfrontai.com/',    label: 'Portfolio' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen]       = useState(false)
  const [portfolioOpen, setPortfolioOpen] = useState(false)
  const pathname                      = usePathname()
  const portfolioRef                  = useRef<HTMLDivElement>(null)

  useEffect(() => { setMenuOpen(false); setPortfolioOpen(false) }, [pathname])

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (portfolioRef.current && !portfolioRef.current.contains(e.target as Node)) {
        setPortfolioOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200, padding: '16px 20px 0' }}>
        <nav
          style={{
            maxWidth: 1180,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 72,
            padding: '0 12px 0 20px',
            borderRadius: 999,
            background: 'rgba(7,13,22,0.82)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(237,239,231,0.08)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.35)',
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <Image src="/logo.png" alt="VisionFront AI Solutions" width={190} height={54} style={{ height: 40, width: 'auto', filter: 'brightness(1.15)' }} priority />
          </Link>

          {/* Desktop links */}
          <div className="nav-links-desktop" style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
            {linksBeforePortfolio.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  color: pathname === href ? '#EDEFE7' : '#93A29A',
                  fontFamily: 'var(--font-manrope), sans-serif',
                  fontWeight: 500,
                  fontSize: '0.9375rem',
                  textDecoration: 'none',
                  transition: 'color 0.25s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#EDEFE7')}
                onMouseLeave={e => (e.currentTarget.style.color = pathname === href ? '#EDEFE7' : '#93A29A')}
              >
                {label}
              </Link>
            ))}

            {/* Portfolio dropdown */}
            <div ref={portfolioRef} style={{ position: 'relative' }}>
              <button
                onClick={() => setPortfolioOpen(o => !o)}
                aria-haspopup="true"
                aria-expanded={portfolioOpen}
                style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                  color: portfolioOpen ? '#EDEFE7' : '#93A29A',
                  fontFamily: 'var(--font-manrope), sans-serif',
                  fontWeight: 500,
                  fontSize: '0.9375rem',
                  transition: 'color 0.25s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#EDEFE7')}
                onMouseLeave={e => (e.currentTarget.style.color = portfolioOpen ? '#EDEFE7' : '#93A29A')}
              >
                Portfolio
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" style={{ transform: portfolioOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s ease' }}>
                  <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div
                role="menu"
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 16px)',
                  left: '50%',
                  transform: `translateX(-50%) translateY(${portfolioOpen ? '0' : '-6px'})`,
                  minWidth: 190,
                  background: '#0C1721',
                  border: '1px solid rgba(237,239,231,0.1)',
                  borderRadius: 16,
                  padding: 8,
                  boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                  opacity: portfolioOpen ? 1 : 0,
                  visibility: portfolioOpen ? 'visible' : 'hidden',
                  transition: 'opacity 0.2s ease, transform 0.2s ease, visibility 0.2s',
                }}
              >
                {portfolioLinks.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    role="menuitem"
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '10px 14px', borderRadius: 10,
                      color: '#EDEFE7', fontSize: '0.9rem', textDecoration: 'none',
                      transition: 'background 0.2s ease, color 0.2s ease',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(200,241,75,0.1)'; e.currentTarget.style.color = '#C8F14B' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#EDEFE7' }}
                  >
                    {label}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M3.5 8.5l5-5M4 3.5h4.5V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                ))}
              </div>
            </div>

            {linksAfterPortfolio.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  color: pathname === href ? '#EDEFE7' : '#93A29A',
                  fontFamily: 'var(--font-manrope), sans-serif',
                  fontWeight: 500,
                  fontSize: '0.9375rem',
                  textDecoration: 'none',
                  transition: 'color 0.25s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#EDEFE7')}
                onMouseLeave={e => (e.currentTarget.style.color = pathname === href ? '#EDEFE7' : '#93A29A')}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA — white pill, per reference */}
          <Link
            href="/contact"
            className="nav-cta-desktop"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '11px 22px',
              borderRadius: 999,
              background: '#F7F6F1',
              color: '#0B1210',
              fontFamily: 'var(--font-manrope), sans-serif',
              fontWeight: 600,
              fontSize: '0.9rem',
              textDecoration: 'none',
              transition: 'transform 0.22s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(247,246,241,0.2)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = 'none' }}
          >
            Get a Quote
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 7h8M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>

          {/* Hamburger */}
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            style={{ display: 'none', flexDirection: 'column', gap: 5, background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block',
                width: 22, height: 1.5,
                background: '#93A29A',
                borderRadius: 2,
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                transform: menuOpen
                  ? i === 0 ? 'translateY(6.5px) rotate(45deg)'
                  : i === 2 ? 'translateY(-6.5px) rotate(-45deg)'
                  : 'none'
                  : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div style={{
        position: 'fixed',
        top: 96, left: 20, right: 20,
        zIndex: 199,
        maxHeight: menuOpen ? 520 : 0,
        overflow: 'hidden',
        transition: 'max-height 0.4s cubic-bezier(0.22,1,0.36,1)',
        background: 'rgba(7,13,22,0.97)',
        backdropFilter: 'blur(20px)',
        borderRadius: 24,
        border: menuOpen ? '1px solid rgba(237,239,231,0.08)' : 'none',
      }}>
        <div style={{ padding: '20px 28px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {linksBeforePortfolio.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                color: pathname === href ? '#C8F14B' : '#93A29A',
                fontSize: '1.05rem',
                fontWeight: 500,
                textDecoration: 'none',
                padding: '10px 0',
                borderBottom: '1px solid rgba(237,239,231,0.08)',
              }}
            >
              {label}
            </Link>
          ))}
          <p style={{ fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5B6560', padding: '14px 0 6px' }}>Portfolio</p>
          {portfolioLinks.map(({ href, label }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" style={{ color: '#93A29A', fontSize: '1rem', fontWeight: 500, textDecoration: 'none', padding: '8px 0', borderBottom: '1px solid rgba(237,239,231,0.08)' }}>
              {label} ↗
            </a>
          ))}
          {linksAfterPortfolio.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                color: pathname === href ? '#C8F14B' : '#93A29A',
                fontSize: '1.05rem',
                fontWeight: 500,
                textDecoration: 'none',
                padding: '10px 0',
                borderBottom: '1px solid rgba(237,239,231,0.08)',
              }}
            >
              {label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary" style={{ justifyContent: 'center', padding: 13, marginTop: 16 }}>Get a Quote</Link>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          .nav-links-desktop, .nav-cta-desktop { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; }
        }
      `}</style>
    </>
  )
}
