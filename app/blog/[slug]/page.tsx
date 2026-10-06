import Link from 'next/link'
import { notFound } from 'next/navigation'
import { posts } from '@/lib/posts'
import JsonLd from '@/components/JsonLd'
import { articleSchema } from '@/lib/seo'

export function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find(p => p.slug === slug)
  if (!post) return { title: 'Article' }
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    robots: post.title.startsWith('[Placeholder]') ? { index: false, follow: true } : undefined,
    openGraph: { type: 'article', title: post.title, description: post.excerpt, url: `/blog/${post.slug}`, images: [post.image] },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find(p => p.slug === slug)
  if (!post) notFound()

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <section style={{ background: '#04070C', padding: '160px 24px 60px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#93A29A', textDecoration: 'none', fontSize: '0.875rem', marginBottom: 40 }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M11 7H3M3 7l4-4M3 7l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Back to Blog
          </Link>
          <h1 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 800, fontSize: 'clamp(2rem,4.5vw,3rem)', letterSpacing: '-0.02em', lineHeight: 1.1, color: '#EDEFE7', marginBottom: 20 }}>{post.title}</h1>
          <span style={{ display: 'inline-block', background: '#C8F14B', color: '#04070C', fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', borderRadius: 100, padding: '6px 12px', marginBottom: 20 }}>{post.category}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-jetbrains),monospace', fontSize: '0.7rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#5B6560' }}>
            <span>{post.date}</span><span>·</span><span>{post.readTime}</span>
          </div>
        </div>
      </section>

      <section style={{ background: '#F7F6F1', padding: '56px 24px 100px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ borderRadius: 24, overflow: 'hidden', marginBottom: 44 }}>
            <img src={post.image} alt={post.title} style={{ width: '100%', display: 'block' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            {post.body.map((block, i) => {
              if (block.type === 'heading') {
                return (
                  <h2 key={i} style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 700, fontSize: 'clamp(1.35rem,2.6vw,1.75rem)', letterSpacing: '-0.01em', color: '#0B1210', marginTop: 14 }}>
                    {block.text}
                  </h2>
                )
              }
              if (block.type === 'paragraph') {
                return (
                  <p key={i} style={{ color: '#3D4640', fontSize: '1.0625rem', lineHeight: 1.8 }}>{block.text}</p>
                )
              }
              if (block.type === 'related') {
                return (
                  <p key={i} style={{ fontSize: '0.95rem', margin: '-6px 0 0' }}>
                    <span style={{ color: '#5B6560' }}>Related: </span>
                    <Link href={block.href} style={{ color: '#0B1210', fontWeight: 600, textDecoration: 'underline', textDecorationColor: '#C8F14B', textDecorationThickness: 2, textUnderlineOffset: 3 }}>
                      {block.label} →
                    </Link>
                  </p>
                )
              }
              if (block.type === 'list') {
                return (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {block.items.map((item, j) => (
                      <div key={j} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                        <span style={{ flexShrink: 0, width: 26, height: 26, borderRadius: '50%', background: '#C8F14B', color: '#04070C', fontFamily: 'var(--font-jetbrains),monospace', fontWeight: 700, fontSize: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>{j + 1}</span>
                        <p style={{ color: '#3D4640', fontSize: '1.0625rem', lineHeight: 1.8 }}>{item}</p>
                      </div>
                    ))}
                  </div>
                )
              }
              if (block.type === 'faq') {
                return (
                  <div key={i}>
                    <h2 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 700, fontSize: 'clamp(1.35rem,2.6vw,1.75rem)', letterSpacing: '-0.01em', color: '#0B1210', marginBottom: 22 }}>
                      {block.heading}
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                      {block.items.map((qa, j) => (
                        <div key={j} style={{ borderTop: '1px solid rgba(11,18,16,0.1)', paddingTop: 20 }}>
                          <p style={{ fontFamily: 'var(--font-manrope),sans-serif', fontWeight: 700, fontSize: '1rem', color: '#0B1210', marginBottom: 8 }}>{qa.q}</p>
                          <p style={{ color: '#3D4640', fontSize: '0.9625rem', lineHeight: 1.75 }}>{qa.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              }
              if (block.type === 'cta') {
                return (
                  <div key={i} style={{ background: '#0C1721', border: '1px solid rgba(200,241,75,0.3)', borderRadius: 20, padding: '32px 28px', textAlign: 'center', margin: '10px 0' }}>
                    <h3 style={{ fontFamily: 'var(--font-bricolage),sans-serif', fontWeight: 700, fontSize: '1.25rem', letterSpacing: '-0.01em', color: '#EDEFE7', marginBottom: 10 }}>{block.heading}</h3>
                    <p style={{ color: '#93A29A', fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: 22, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>{block.text}</p>
                    <Link href={block.buttonHref} className="btn-primary" style={{ padding: '13px 26px', fontSize: '0.9rem', whiteSpace: 'normal', textAlign: 'center', maxWidth: 320 }}>{block.buttonText}</Link>
                  </div>
                )
              }
              return null
            })}
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
