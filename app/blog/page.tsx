import Link from 'next/link'
import { posts } from '@/lib/posts'

export const metadata = {
  title: 'Blog — VisionFront AI Solutions',
  description: 'Practical AI ideas for growing small businesses — lead capture, automation, content, and web design from VisionFront AI Solutions.',
}

const POSTS_PER_PAGE = 9

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page } = await searchParams
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE))
  const currentPage = Math.min(Math.max(1, parseInt(page ?? '1', 10) || 1), totalPages)
  const start = (currentPage - 1) * POSTS_PER_PAGE
  const pagePosts = posts.slice(start, start + POSTS_PER_PAGE)

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section style={{ background: '#04070C', padding: '160px 24px 90px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(34,59,60,0.5) 0%,transparent 65%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}><span className="eyebrow">The VisionFront Blog</span></div>
          <h1 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 800, fontSize: 'clamp(2.4rem,6vw,4rem)', letterSpacing: '-0.02em', lineHeight: 1.02, color: '#EDEFE7', marginBottom: 24 }}>
            Grow Your Business<br /><span className="g-text">With Practical AI</span>
          </h1>
          <p style={{ color: '#93A29A', fontSize: '1.1rem', lineHeight: 1.75, maxWidth: 560, margin: '0 auto' }}>
            Straight talk on AI agents, automation, and content — the ideas we actually use to help small businesses capture more leads and get more done.
          </p>
        </div>
      </section>

      {/* ── POST GRID ── */}
      <section style={{ background: '#F7F6F1', padding: '80px 24px 100px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 28, marginBottom: totalPages > 1 ? 56 : 0 }}>
            {pagePosts.map(({ slug, category, title, excerpt, date, readTime, image }) => (
              <Link key={slug} href={`/blog/${slug}`} className="card-light" style={{ display: 'block', textDecoration: 'none', overflow: 'hidden', padding: 0 }}>
                <div style={{ position: 'relative', aspectRatio: '3/2', overflow: 'hidden' }}>
                  <img src={image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span style={{ position: 'absolute', top: 16, left: 16, background: '#C8F14B', color: '#04070C', fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', borderRadius: 100, padding: '6px 12px' }}>{category}</span>
                </div>
                <div style={{ padding: '26px 26px 30px' }}>
                  <h2 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 700, fontSize: '1.15rem', letterSpacing: '-0.01em', lineHeight: 1.3, color: '#0B1210', marginBottom: 10 }}>{title}</h2>
                  <p style={{ color: '#5B6560', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: 18 }}>{excerpt}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.68rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#8A948E' }}>
                    <span>{date}</span><span>·</span><span>{readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* ── PAGINATION — only once there are more posts than fit on one page ── */}
          {totalPages > 1 && (
            <nav aria-label="Blog pagination" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
              <Link
                href={`/blog?page=${Math.max(1, currentPage - 1)}`}
                aria-disabled={currentPage === 1}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: '50%',
                  border: '1px solid rgba(11,18,16,0.14)', color: currentPage === 1 ? 'rgba(11,18,16,0.25)' : '#0B1210',
                  textDecoration: 'none', pointerEvents: currentPage === 1 ? 'none' : 'auto',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
                <Link
                  key={n}
                  href={`/blog?page=${n}`}
                  aria-current={n === currentPage ? 'page' : undefined}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: '50%',
                    fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none',
                    background: n === currentPage ? '#C8F14B' : 'transparent',
                    color: n === currentPage ? '#04070C' : '#0B1210',
                    border: n === currentPage ? 'none' : '1px solid rgba(11,18,16,0.14)',
                  }}
                >
                  {n}
                </Link>
              ))}

              <Link
                href={`/blog?page=${Math.min(totalPages, currentPage + 1)}`}
                aria-disabled={currentPage === totalPages}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: '50%',
                  border: '1px solid rgba(11,18,16,0.14)', color: currentPage === totalPages ? 'rgba(11,18,16,0.25)' : '#0B1210',
                  textDecoration: 'none', pointerEvents: currentPage === totalPages ? 'none' : 'auto',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </nav>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#04070C', padding: '0 24px 120px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', letterSpacing: '-0.02em', color: '#EDEFE7', marginBottom: 20 }}>
            Want to talk through <span className="g-text">a project?</span>
          </h2>
          <Link href="/contact" className="btn-primary" style={{ padding: '15px 34px', fontSize: '1rem' }}>Book a Free Consultation</Link>
        </div>
      </section>
    </>
  )
}
