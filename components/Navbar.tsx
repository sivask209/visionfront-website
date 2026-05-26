'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/',         label: 'Home' },
  { href: '/about',    label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact',  label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const pathname                  = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 200,
          transition: 'background 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease',
          background: scrolled ? 'rgba(5,5,13,0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(22px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(22px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(123,83,204,0.22)' : '1px solid transparent',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <Image src="/logo.png" alt="VisionFront AI Solutions" width={180} height={52} style={{ height: 46, width: 'auto', filter: 'brightness(1.2) drop-shadow(0 0 12px rgba(123,83,204,0.45))' }} priority />
          </Link>

          {/* Desktop links */}
          <div className="nav-links-desktop" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  position: 'relative',
                  color: pathname === href ? '#F0F0FF' : '#8B8BA8',
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontWeight: 500,
                  fontSize: '0.9375rem',
                  textDecoration: 'none',
                  paddingBottom: 3,
                  transition: 'color 0.25s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#F0F0FF')}
                onMouseLeave={e => (e.currentTarget.style.color = pathname === href ? '#F0F0FF' : '#8B8BA8')}
              >
                {label}
                {pathname === href && (
                  <span style={{ position: 'absolute', left: 0, bottom: -1, width: '100%', height: 1.5, background: 'linear-gradient(90deg,#8B5CF6,#06B6D4)', borderRadius: 1 }} />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="nav-ctas-desktop" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Link href="/contact" className="btn-ghost" style={{ padding: '9px 20px', fontSize: '0.875rem' }}>Book a Call</Link>
            <Link href="/contact" className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.875rem' }}>Get Started</Link>
          </div>

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
                background: '#8B8BA8',
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
        </div>
      </nav>

      {/* Mobile menu */}
      <div style={{
        position: 'fixed',
        top: 72, left: 0, right: 0,
        zIndex: 199,
        maxHeight: menuOpen ? 440 : 0,
        overflow: 'hidden',
        transition: 'max-height 0.4s cubic-bezier(0.22,1,0.36,1)',
        background: 'rgba(5,5,13,0.97)',
        backdropFilter: 'blur(22px)',
        borderBottom: menuOpen ? '1px solid rgba(123,83,204,0.2)' : 'none',
      }}>
        <div style={{ padding: '20px 32px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                color: pathname === href ? '#06B6D4' : '#8B8BA8',
                fontSize: '1.1rem',
                fontWeight: 500,
                textDecoration: 'none',
                padding: '10px 0',
                borderBottom: '1px solid rgba(123,83,204,0.1)',
                transition: 'color 0.2s ease',
              }}
            >
              {label}
            </Link>
          ))}
          <div style={{ display: 'flex', gap: 12, paddingTop: 16 }}>
            <Link href="/contact" className="btn-ghost" style={{ flex: 1, justifyContent: 'center', padding: 11 }}>Book a Call</Link>
            <Link href="/contact" className="btn-primary" style={{ flex: 1, justifyContent: 'center', padding: 12 }}>Get Started</Link>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          .nav-links-desktop, .nav-ctas-desktop { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
