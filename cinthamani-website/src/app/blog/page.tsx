import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights & Updates | Cinthamani Computers Blog",
  description:
    "Latest from broadcast technology, industry trends, and Cinthamani news. Stay informed about innovations in broadcast, post-production, Apple enterprise, and AV technology.",
  openGraph: {
    title: "Insights & Updates | Cinthamani Computers Blog",
    description:
      "Broadcast technology insights, industry trends, and company news from Cinthamani Computers.",
  },
};

const posts = [
  {
    title: "The Shift to Cloud-Based Broadcast Playout: What Operators Need to Know",
    excerpt:
      "Cloud playout is transforming how channels operate. We explore the benefits, challenges, and hybrid models that are reshaping broadcast infrastructure in 2026.",
    date: "Coming Soon",
    readTime: "6 min read",
    category: "Broadcast",
  },
  {
    title: "Why Jamf MDM Is the Standard for Enterprise Apple Deployments",
    excerpt:
      "With 75,900+ organizations trusting Jamf, we break down why it remains the gold standard for managing Apple devices at scale -- and how to get started.",
    date: "Coming Soon",
    readTime: "5 min read",
    category: "Apple & IT",
  },
  {
    title: "Building a Modern Post-Production Facility: A Complete Guide",
    excerpt:
      "From shared storage architecture to color-accurate monitoring, here is what goes into designing a post-production facility that creative teams love working in.",
    date: "Coming Soon",
    readTime: "8 min read",
    category: "Post-Production",
  },
];

export default function BlogPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section-dark py-24 md:py-32">
        <div className="container-narrow text-center">
          <p className="text-sm uppercase tracking-widest text-[#CA8A04] mb-4">
            Blog
          </p>
          <h1 className="mb-6">Insights & Updates</h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Latest from broadcast technology, industry trends, and Cinthamani
            news.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-white py-20 md:py-28">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.title} className="card flex flex-col p-0 overflow-hidden">
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-[var(--color-dark-surface-1)] to-[var(--color-dark-surface-2)] flex items-center justify-center">
                  <span className="text-white/20 text-sm uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-[var(--color-text-tertiary)] mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-[14px] text-[var(--color-text-secondary)] leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  <span className="btn-pill w-fit opacity-50 pointer-events-none">
                    Coming Soon
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="section-light py-20 md:py-28">
        <div className="container-narrow text-center">
          <h2 className="mb-4">Stay in the Loop</h2>
          <p className="text-[var(--color-text-tertiary)] max-w-xl mx-auto mb-8">
            New articles on broadcast technology, product launches, and industry
            insights are on the way. Check back soon or reach out to learn more.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
