export type Post = {
  slug: string
  category: string
  title: string
  excerpt: string
  date: string
  readTime: string
  image: string
  body: string[]
  /** Hand-picked for the home page's "Signal Boost" section — not just the latest posts. */
  featured: boolean
}

export const posts: Post[] = [
  {
    slug: 'placeholder-post-1',
    category: 'Video Production',
    title: '[Placeholder] What Makes a Property Walkthrough Actually Convert',
    excerpt: 'Placeholder excerpt — swap in a real article about pacing, lighting, and shot selection for walkthrough videos that drive bookings.',
    date: 'TBD',
    readTime: '5 min read',
    image: 'https://placehold.co/900x600/0C1721/93A29A?text=Article+Cover',
    body: [
      'This is placeholder body copy. Replace this article with real content about your process, results, or point of view.',
      'Add a second paragraph here once the real article is ready.',
    ],
    featured: true,
  },
  {
    slug: 'placeholder-post-2',
    category: 'AI Advertising',
    title: '[Placeholder] Inside Our AI Video Ad Workflow',
    excerpt: 'Placeholder excerpt — swap in a real article walking through how you brief, generate, and test AI-produced ad creative.',
    date: 'TBD',
    readTime: '4 min read',
    image: 'https://placehold.co/900x600/142530/93A29A?text=Article+Cover',
    body: [
      'This is placeholder body copy. Replace this article with real content about your process, results, or point of view.',
      'Add a second paragraph here once the real article is ready.',
    ],
    featured: true,
  },
  {
    slug: 'placeholder-post-3',
    category: 'Web Design',
    title: '[Placeholder] Why We Build Custom Sites Instead of Templates',
    excerpt: 'Placeholder excerpt — swap in a real article about your web design philosophy and what it means for client results.',
    date: 'TBD',
    readTime: '6 min read',
    image: 'https://placehold.co/900x600/223B3C/93A29A?text=Article+Cover',
    body: [
      'This is placeholder body copy. Replace this article with real content about your process, results, or point of view.',
      'Add a second paragraph here once the real article is ready.',
    ],
    featured: true,
  },
]
