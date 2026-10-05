'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/',         label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/blog',     label: 'Blog' },
  { href: '/about',    label: 'About' },
  { href: '/contact',  label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname                = usePathname()

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
            {links.map(({ href, label }) => (
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
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
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
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="btn-primary" style={{ justifyContent: 'center', padding: 13, marginTop: 16 }}>Get a Quote</Link>
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
