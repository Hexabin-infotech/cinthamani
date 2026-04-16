import Link from "next/link";

export default function CTASection() {
  return (
    <section className="section-light py-20 md:py-28">
      <div className="container-narrow px-6 text-center">
        <h2 className="mx-auto max-w-3xl font-[family-name:var(--font-display)] font-semibold tracking-tight">
          Ready to Transform Your Broadcast Infrastructure?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[var(--color-text-secondary)]">
          Let&#39;s discuss how Cinthamani can design, integrate, and support
          your next project.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contact" className="btn-primary">
            Get a Quote
          </Link>
          <a href="tel:+914428153842" className="btn-secondary">
            Call Us: +91 44 28153842
          </a>
        </div>
      </div>
    </section>
  );
}
