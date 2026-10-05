import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get a Free SEO Audit',
  description:
    'Request a free SEO audit from VisionFront AI. Tell us your city and services, and we will show you what to fix first to get found online.',
  alternates: { canonical: '/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
