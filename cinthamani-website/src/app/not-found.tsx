import Link from "next/link";
import { Home, Headset, ArrowLeft, Radio } from "lucide-react";

export const metadata = {
  title: "Page Not Found — Cinthamani Computers",
  description:
    "The page you are looking for could not be found. Return to the homepage or contact our support team for assistance.",
};

export default function NotFound() {
  return (
    <section className="section-dark relative flex min-h-[calc(100dvh-100px)] items-center justify-center overflow-hidden">
      {/* Soft radial wash — same as hero */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(26,26,240,0.10) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 50% 60%, rgba(202,138,4,0.06) 0%, transparent 60%)",
        }}
      />

      {/* Faint static scan-lines pattern (broadcast feel) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent 0, transparent 3px, rgba(255,255,255,0.5) 3px, rgba(255,255,255,0.5) 4px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-2xl px-6 py-16 text-center md:py-24">
        {/* Eyebrow badge — broadcast metaphor */}
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
          <Radio
            className="h-3 w-3 text-[var(--color-cta)]"
            strokeWidth={2}
          />
          Signal Lost
        </span>

        {/* The big 404 — decorative, non-semantic so global h1 styles don't constrain it */}
        <div
          className="font-[family-name:var(--font-display)] mb-2 select-none font-bold leading-none tracking-tight text-white"
          style={{ fontSize: "clamp(120px, 22vw, 200px)" }}
          aria-hidden="true"
        >
          4<span className="text-[var(--color-cta)]">0</span>4
        </div>

        {/* Real semantic page heading */}
        <h1 className="font-[family-name:var(--font-display)] mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Page Not Found
        </h1>

        {/* Explanation */}
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-white/65 md:text-lg">
          The channel you tried to reach is off-air. The page may have been
          moved, renamed, or removed from our broadcast schedule.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
          <Link href="/" className="hero-btn-primary cursor-pointer">
            <Home size={16} strokeWidth={2.5} />
            Back to Home
          </Link>
          <Link href="/contact" className="hero-btn-secondary cursor-pointer">
            <Headset size={16} strokeWidth={2.5} />
            Contact Support
          </Link>
        </div>

        {/* Tertiary back link */}
        <div className="mt-8">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-1.5 text-sm text-white/50 underline-offset-4 transition-colors hover:text-white hover:underline cursor-pointer"
          >
            <ArrowLeft size={14} strokeWidth={2} />
            Or browse our solutions
          </Link>
        </div>

        {/* Quick links footer */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">
            Popular Pages
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            {[
              { label: "About Us", href: "/about" },
              { label: "Broadcast & OTT", href: "/solutions/broadcast" },
              { label: "Apple & Mobility", href: "/solutions/apple-mobility" },
              { label: "Post-Production", href: "/solutions/post-production" },
              { label: "Products", href: "/products" },
              { label: "Partners", href: "/partners" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/70 transition-colors hover:text-[var(--color-cta)] cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
