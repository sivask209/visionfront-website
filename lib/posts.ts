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
    slug: 'content-plan-for-small-business',
    category: 'Content Marketing',
    title: 'A Simple Content Plan for Businesses Without a Marketing Team',
    excerpt: "No marketing team? See what a real content plan takes and how outsourcing to a professional keeps your business visible at a fair price.",
    date: 'Oct 1, 2026',
    readTime: '7 min read',
    image: '/blog/content-plan-for-small-business.jpg',
    featured: true,
    body: [
      { type: 'paragraph', text: "Picture an owner who posts on social media three times in January, publishes one blog in February, and then disappears while client work piles up. By spring, the website looks forgotten, the social pages are quiet, and new clients keep choosing the competitor who shows up every week." },
      { type: 'paragraph', text: "That owner isn't lazy. They're busy running a business, and a content plan for a small business is a job that never ends. The good news is you have two real options: build a team, or hand the work to a professional who does it every day. This article covers what a proper plan includes, what it costs you to handle it alone, and why outsourcing is often the simplest way to stay visible without hiring." },

      { type: 'heading', text: 'Why website content is the foundation of online visibility' },
      { type: 'paragraph', text: "Your website is the one marketing asset you fully own. Social platforms can change their rules overnight, but your site stays yours, and it's where most potential clients land before they decide to call." },
      { type: 'paragraph', text: 'Search engines read your content to work out what you do and where you do it. Service pages explain your offer. Location pages tell Google and Bing which cities you serve. FAQ pages answer the questions people type into search before they ever pick up the phone. Without that content, there’s very little for a search engine to show.' },
      { type: 'paragraph', text: "Fresh content matters too. A site with recent posts and updated pages looks like a business that's open and paying attention. A site nobody has touched in two years looks like one that might have closed. Visitors notice, and so do search engines." },

      { type: 'heading', text: 'What a proper content plan actually includes' },
      { type: 'paragraph', text: 'Most owners picture a content plan as "write a blog now and then." A plan that moves the needle has more parts than that.' },
      { type: 'paragraph', text: 'Start with blogs. Publishing three to four posts a week is the ideal if you want steady growth. Each post is another page that can rank, another question answered, and another way for a stranger to find you. The more useful pages you have covering your services and your area, the more searches you can show up for. Even one or two strong posts a week beats nothing, but the pace is what compounds.' },
      { type: 'paragraph', text: "Then there's social media. Posting every day keeps you in front of people who aren't ready to hire yet but will be soon. It also works as a trust check, since plenty of people look at your profile before they contact you. A daily presence doesn't mean daily original work, because one blog post can become several posts, a short video, and an email." },
      { type: 'paragraph', text: 'Beyond those two sit the other pieces of visibility. Your Google Business Profile needs updates and fresh photos. Reviews need to be requested and answered. An email list lets you reach past visitors and clients directly. Short video is earning more reach for local businesses every year, and your business details need to match across directories so search engines trust them.' },
      { type: 'paragraph', text: 'None of these pieces works well alone. Blogs feed social posts, social posts drive visits to the site, reviews support local rankings, and email brings people back. Drop one and the others get weaker.' },

      { type: 'heading', text: 'The real cost of doing it all yourself' },
      { type: 'paragraph', text: "Here's the part most owners underestimate: time. By our rough estimate, a full plan like the one above takes somewhere between 10 and 15 hours a week once you count writing, editing, making images, scheduling, replying to comments, and checking what worked. That's a part-time job stacked on top of the one you already have." },
      { type: 'paragraph', text: "The pattern is predictable. The first few weeks go well. Then a big client project lands, or a slow month makes marketing feel optional, and the posting stops. Stopping costs more than it looks like, because visibility you've built fades when you go quiet, and restarting takes effort all over again." },
      { type: 'paragraph', text: 'Hiring in-house isn’t a simple fix either. A full-time marketer is a significant fixed cost, and one person rarely covers strategy, writing, design, video, and SEO equally well. Building a full team is out of reach for most small businesses, and that’s fine. It just means the question changes from "how do I build a team?" to "who can do this for me?"' },

      { type: 'cta', heading: 'Want this handled for you?', text: "We'll build and run your content plan, from blogs and social posts to visibility across the web, so you can focus on your clients.", buttonText: 'Reach Out to Us to Create Your Content Strategy', buttonHref: '/contact' },

      { type: 'heading', text: 'Why outsourcing to a professional makes sense' },
      { type: 'paragraph', text: 'Outsourcing gives you a whole marketing skill set for the price of one service. A good provider brings strategy, writing, design, video, and search know-how together, which would take several hires to match in-house.' },
      { type: 'paragraph', text: 'The cost is also easier to plan around. You pay a set monthly amount, with no salaries, benefits, or software subscriptions to manage on your own.' },
      { type: 'paragraph', text: "You also skip the trial and error. A professional already has a process for planning topics, producing content, and tracking what brings in leads. You're not paying for them to figure it out on your time." },
      { type: 'paragraph', text: 'Then there’s consistency, which is the whole game. Publishing on schedule is their job, so it doesn’t slip when your week gets crazy. Modern AI tools make this practical at a reasonable price, because a specialist can produce the drafts, graphics, and scheduling far faster than one person working alone. The key is that a person still reviews everything, adds the local detail, and makes sure it sounds like your business.' },

      { type: 'heading', text: 'What to look for in a marketing partner' },
      { type: 'paragraph', text: 'Not every provider is worth hiring, so it helps to ask a few questions before you sign anything.' },
      { type: 'paragraph', text: 'Ask what you’ll receive each week and whether you can see the schedule in advance. Ask to see samples, and check that the writing sounds like a real business and not a template. Look for clear pricing and a plan to report on leads and inquiries, not just the number of posts. Find out whether they understand your local market and your industry, since a law firm and a realtor need very different content. And ask who reviews the work before it goes live. If the answer is "nobody," keep looking.' },
      { type: 'paragraph', text: 'Good providers welcome these questions. If you get vague answers or pressure to sign quickly, that tells you what you need to know.' },

      { type: 'heading', text: 'How it works with VisionFront AI' },
      { type: 'paragraph', text: 'We keep the process simple. First, we have a discovery call to learn about your business, your clients, and your goals. Next, we build a custom content plan that covers your website, blogs, social media, reviews, and lead follow-up. After that, we handle the publishing and send regular reports, so you can see what’s working.' },
      { type: 'paragraph', text: 'We offer Starter, Growth, and Enterprise packages, so the plan can match the size of your business and your budget. You start with what you need and expand when you’re ready.' },

      { type: 'heading', text: 'Common mistakes to avoid' },
      { type: 'paragraph', text: "Waiting until business slows down is the most common one, since that's exactly when a lack of visibility hurts most. Choosing the cheapest provider with no track record is a close second, because low prices often mean copied text and no results. Posting on every platform instead of the ones your clients use spreads the work thin. And paying for content without any reporting leaves you guessing whether it's helping." },

      { type: 'faq', heading: 'Frequently Asked Questions', items: [
        { q: 'Is outsourcing content marketing worth it for a small business?', a: 'For most, yes. You get steady content and a full set of skills without hiring, and you get your own time back for clients.' },
        { q: 'How much does it cost?', a: 'It depends on how much content and support you need. A plan with a professional is usually a fraction of what a full-time marketing hire costs, and a good provider will give you clear pricing before you commit.' },
        { q: 'How long before I see results?', a: 'Social media and review activity can show movement within weeks. Blogs and SEO usually take a few months to build momentum, which is why starting sooner matters.' },
        { q: 'Will the content sound like my business?', a: 'It should. A good provider learns your services, your area, and your voice, and reviews every piece before it’s published.' },
      ]},

      { type: 'heading', text: "You don't need to build a team to have one" },
      { type: 'paragraph', text: 'Visibility comes from steady content, and steady content takes time that most owners don’t have. You can try to squeeze it in around everything else, or you can hand it to someone whose full-time job is keeping your business visible. Either way, the businesses that stay consistent are the ones clients find.' },

      { type: 'cta', heading: 'Let us be your marketing team', text: 'Get a content plan built for your business and a professional to run it, at a price that makes sense for a small business.', buttonText: 'Reach Out to Us to Create Your Content Strategy', buttonHref: '/contact' },
    ],
  },
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
    featured: false,
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
    featured: false,
  },
]
