export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'faq'; heading: string; items: { q: string; a: string }[] }
  | { type: 'cta'; heading: string; text: string; buttonText: string; buttonHref: string }

export type Post = {
  slug: string
  category: string
  title: string
  excerpt: string
  date: string
  readTime: string
  image: string
  body: ContentBlock[]
  /** Hand-picked for the home page's "Signal Boost" section — not just the latest posts. */
  featured: boolean
}

export const posts: Post[] = [
  {
    slug: 'ai-for-small-business-marketing',
    category: 'AI Marketing',
    title: 'AI for Small Business Marketing: A Practical Guide to More Clients',
    excerpt: 'Learn how small businesses use AI content marketing, social media automation, and AI receptionists to capture more leads and win more clients.',
    date: 'Sep 29, 2026',
    readTime: '8 min read',
    image: '/blog/ai-for-small-business-marketing.jpg',
    featured: true,
    body: [
      { type: 'paragraph', text: "It's 7:45 on a Tuesday evening. A homeowner is searching for a realtor, or a business owner just got a legal notice and needs a lawyer fast. They call your office and nobody picks up. They try the next name on the list, and that business answers on the second ring. You never find out the lead existed." },
      { type: 'paragraph', text: "This happens to small businesses constantly, and it's the clearest case for AI for small business marketing. You don't need a big team or a big budget to compete anymore. You need a way to show up online, stay active on social media, and answer every inquiry quickly. Below, we cover how AI content marketing, social media automation, and AI agents like AI receptionists can help you get more clients." },

      { type: 'heading', text: 'Why AI helps you win clients, not just save time' },
      { type: 'paragraph', text: "Most people hear about AI as a time-saver. That's true, but it undersells things. For a small business, the bigger gain is the clients you would otherwise have lost." },
      { type: 'paragraph', text: "Think about how people pick a local provider. They search, check reviews, glance at your website or social profile, and contact whoever replies first. Speed and visibility often decide who gets the job, and a small team can't be online all day, publish every week, and answer every message within minutes. AI can cover a lot of that." },
      { type: 'paragraph', text: 'One caveat. AI makes execution faster, but it won’t hand you a strategy. You still need a clear offer, a defined audience, and a real sense of what your clients care about. The tools work best when the owner sets the direction.' },

      { type: 'heading', text: 'AI content marketing: show up where clients search' },
      { type: 'paragraph', text: "Content is how new clients find you before they pick up the phone. A useful blog post, a clear service page, or a well-answered FAQ can bring in traffic from Google and Bing for years. The hard part has always been time, because writing regularly is tough when you're also running the company." },
      { type: 'paragraph', text: 'AI can help you draft service pages, city pages, blog posts, and FAQs built around questions your clients really ask. A family law firm might answer common questions about custody or how long a divorce takes. A realtor might write neighborhood guides and a first-time buyer checklist. Each page gives search engines one more reason to show your business.' },
      { type: 'paragraph', text: 'You can stretch each idea further, too. One topic can become a blog post, a few social posts, an email to your list, and a short video script. AI makes that repurposing quick, so every idea reaches more people.' },
      { type: 'paragraph', text: "This is also where many businesses slip. Publishing raw, unedited AI text produces generic pages that rank poorly and don't build trust. Use AI for the first draft and the structure, then add your real experience, local details, client stories, and your own voice until it sounds like you." },
      { type: 'paragraph', text: "A simple way to start: pick one question a client asked this week, have AI draft an answer, edit it with your expertise, and publish it as a post. Then cut it into social posts and an email. That's one afternoon of work feeding several channels." },

      { type: 'heading', text: 'AI social media management: stay consistent without burning out' },
      { type: 'paragraph', text: 'Social media works when you show up regularly, and most small business accounts fail for a plain reason. The owner gets busy and the posting stops. AI takes some of that pressure off.' },
      { type: 'paragraph', text: "It can build a month of content ideas around your services, seasonal topics, and client questions, and draft captions in minutes. You review, fix the tone, and schedule. Short video does well for local businesses on Instagram Reels, YouTube Shorts, and LinkedIn, and AI tools can help with scripts, captions, graphics, and even the video itself, so you don't need a production crew." },
      { type: 'paragraph', text: 'Reviews matter a great deal for local businesses. AI can send review requests to happy clients once a job is done and help you draft replies to feedback. A steady flow of recent reviews helps your reputation and your local search visibility.' },
      { type: 'paragraph', text: 'As a rule, let AI handle scheduling, first drafts, hashtags, review requests, and reporting. Keep the human parts human: replies to comments and messages that need judgment, sensitive topics, and stories from your own work.' },

      { type: 'cta', heading: 'Ready to turn this into a real plan?', text: "Every business needs a different mix of content, social media, and automation. We'll help you build one that fits your goals and budget.", buttonText: 'Reach Out to Us to Create Your Content Strategy', buttonHref: '/contact' },

      { type: 'heading', text: 'AI agents and AI receptionists: stop losing leads to voicemail' },
      { type: 'paragraph', text: 'If content and social media bring people to your door, AI agents keep them from waiting outside. This is where small businesses often see the fastest return.' },
      { type: 'paragraph', text: 'An AI receptionist answers your phone around the clock. It greets callers, answers common questions, collects their details, qualifies the lead, and books appointments on your calendar. If a call is urgent, it can pass it to you or a team member right away. That means fewer voicemails that never get returned.' },
      { type: 'paragraph', text: "Many website visitors won't call but will type a question into a chat window. An AI chat agent can answer instantly, explain your services, and capture contact details while the visitor is still interested. The same approach works for Instagram and Facebook messages." },
      { type: 'paragraph', text: "Most leads also don't convert on the first touch. Automated text and email sequences can follow up within minutes of an inquiry and keep checking in over the next few days. Plenty of clients are lost simply because nobody followed up, and automation closes that gap." },
      { type: 'paragraph', text: "For a law firm, an AI receptionist can take after-hours intake calls, gather the basics of a case, and book a consultation, so the prospective client reaches you instead of the next firm. For a realtor, AI can reply to buyer and seller inquiries right away, schedule showings, and keep warm leads engaged until they're ready to move." },
      { type: 'paragraph', text: "A few things to get right. Set clear rules for when the AI hands a conversation to a person. Tell callers they're speaking with an AI assistant where the law or good practice calls for it. And check the rules on call recording and client data where you operate, especially for legal and financial conversations." },

      { type: 'heading', text: 'A simple AI marketing plan' },
      { type: 'paragraph', text: "You don't need to launch everything at once, and trying to usually backfires. This order works for most small businesses." },
      { type: 'list', items: [
        'Fix lead capture first. Set up an AI receptionist or chat agent along with automated follow-up, so you stop losing the leads you already get.',
        'Build steady content. Publish helpful pages and posts that answer client questions, then repurpose them on social media.',
        "Track results. Watch new leads, booked calls, and cost per new client. If a tool isn't moving those numbers, change it or drop it.",
      ]},
      { type: 'paragraph', text: 'Start with one tool and one goal for 30 days. Once that works, add the next piece.' },

      { type: 'heading', text: 'Common mistakes to avoid' },
      { type: 'paragraph', text: "Publishing unedited AI content is the big one, since it sounds generic and rarely earns trust or rankings. Close behind is automating without tracking results, because you can't improve what you can't see. Buying too many tools at once is another, as complexity kills follow-through. And don't ignore privacy and consent rules for calls, texts, and email." },

      { type: 'faq', heading: 'Frequently Asked Questions', items: [
        { q: 'Is AI marketing affordable for small businesses?', a: 'Yes, in most cases. Many AI tools cost far less than adding staff, and you can start with one use case, such as an AI receptionist, before expanding.' },
        { q: 'Will an AI receptionist replace my staff?', a: 'Usually not. It covers routine calls, after-hours inquiries, and scheduling so your team can focus on work that needs a person and on real client relationships.' },
        { q: 'How long until I see results?', a: 'Lead capture tools such as AI receptionists and automated follow-up can show results within weeks. Content marketing and SEO usually take a few months to build momentum.' },
      ]},

      { type: 'heading', text: 'Start getting more clients with AI' },
      { type: 'paragraph', text: 'Small businesses rarely lose clients because they aren’t good enough. They lose them because they’re hard to find, slow to respond, or inconsistent online. Content helps clients find you, social media keeps you visible, and AI receptionists and agents make sure every inquiry gets a quick answer. The businesses that start now will be hard for late adopters to catch.' },

      { type: 'cta', heading: "Let's build your AI-powered marketing plan", text: 'From content and social media to AI receptionists and lead follow-up, we help small businesses turn more inquiries into clients.', buttonText: 'Reach Out to Us to Create Your Content Strategy', buttonHref: '/contact' },
    ],
  },
  {
    slug: 'placeholder-post-1',
    category: 'Video Production',
    title: '[Placeholder] What Makes a Property Walkthrough Actually Convert',
    excerpt: 'Placeholder excerpt — swap in a real article about pacing, lighting, and shot selection for walkthrough videos that drive bookings.',
    date: 'TBD',
    readTime: '5 min read',
    image: 'https://placehold.co/900x600/0C1721/93A29A?text=Article+Cover',
    body: [
      { type: 'paragraph', text: 'This is placeholder body copy. Replace this article with real content about your process, results, or point of view.' },
      { type: 'paragraph', text: 'Add a second paragraph here once the real article is ready.' },
    ],
    featured: false,
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
      { type: 'paragraph', text: 'This is placeholder body copy. Replace this article with real content about your process, results, or point of view.' },
      { type: 'paragraph', text: 'Add a second paragraph here once the real article is ready.' },
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
      { type: 'paragraph', text: 'This is placeholder body copy. Replace this article with real content about your process, results, or point of view.' },
      { type: 'paragraph', text: 'Add a second paragraph here once the real article is ready.' },
    ],
    featured: true,
  },
]
