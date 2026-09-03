import Link from 'next/link'
import { notFound } from 'next/navigation'
import { posts } from '@/lib/posts'

export function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find(p => p.slug === slug)
  return { title: post ? `${post.title} — VisionFront AI Solutions` : 'Article — VisionFront AI Solutions' }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find(p => p.slug === slug)
  if (!post) notFound()

  return (
    <>
      <section style={{ background: '#04070C', padding: '160px 24px 60px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#93A29A', textDecoration: 'none', fontSize: '0.875rem', marginBottom: 32 }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M11 7H3M3 7l4-4M3 7l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Back to Blog
          </Link>
          <span style={{ display: 'inline-block', background: '#C8F14B', color: '#04070C', fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', borderRadius: 100, padding: '6px 12px', marginBottom: 20 }}>{post.category}</span>
          <h1 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 800, fontSize: 'clamp(2rem,4.5vw,3rem)', letterSpacing: '-0.02em', lineHeight: 1.1, color: '#EDEFE7', marginBottom: 20 }}>{post.title}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.7rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#5B6560' }}>
            <span>{post.date}</span><span>·</span><span>{post.readTime}</span>
          </div>
        </div>
      </section>

      <section style={{ background: '#070D16', padding: '0 24px 100px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ borderRadius: 24, overflow: 'hidden', marginBottom: 44 }}>
            <img src={post.image} alt="" style={{ width: '100%', display: 'block' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {post.body.map((p, i) => (
              <p key={i} style={{ color: '#93A29A', fontSize: '1.0625rem', lineHeight: 1.8 }}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#04070C', padding: '0 24px 120px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 800, fontSize: 'clamp(1.7rem,3.5vw,2.4rem)', letterSpacing: '-0.02em', color: '#EDEFE7', marginBottom: 20 }}>
            Ready to start <span className="g-text">your project?</span>
          </h2>
          <Link href="/contact" className="btn-primary" style={{ padding: '15px 34px', fontSize: '1rem' }}>Book a Free Consultation</Link>
        </div>
      </section>
    </>
  )
}
