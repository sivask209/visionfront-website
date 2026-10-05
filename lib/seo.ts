export const SITE = {
  name: 'VisionFront AI Solutions',
  url: 'https://visionfrontai.com',
  email: 'info@visionfrontai.com',
  description:
    'VisionFront AI Solutions is an SEO and local marketing agency for small businesses. We help you get found online through search, local listings, social media, and AI search, and turn that visibility into a steady flow of new clients.',
}

type FaqItem = { q: string; a: string }

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
    email: SITE.email,
    description: SITE.description,
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
  }
}

export function faqSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}

export function servicesSchema(items: { name: string; description: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': items.map(({ name, description }) => ({
      '@type': 'Service',
      name,
      description,
      provider: { '@type': 'Organization', name: SITE.name, url: SITE.url },
      areaServed: { '@type': 'Country', name: 'United States' },
    })),
  }
}

export function articleSchema(post: { title: string; excerpt: string; image: string; slug: string; date: string }) {
  const parsed = new Date(post.date)
  const iso = Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString().slice(0, 10)
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image.startsWith('http') ? post.image : `${SITE.url}${post.image}`,
    datePublished: iso,
    author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    publisher: { '@type': 'Organization', name: SITE.name, logo: { '@type': 'ImageObject', url: `${SITE.url}/logo.png` } },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
  }
}
