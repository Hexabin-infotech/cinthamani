import { ChevronRight } from "lucide-react";
import Link from "next/link";
import ClientLogosMarquee from "./ClientLogosMarquee";
import HeroFloatingCards from "./HeroFloatingCards";

// Avatar stack — initials-based to avoid stock photo licensing issues
const avatars = [
  { initials: "RT", bg: "from-blue-500 to-indigo-600" },
  { initials: "PK", bg: "from-amber-500 to-orange-600" },
  { initials: "AS", bg: "from-emerald-500 to-teal-600" },
  { initials: "VM", bg: "from-purple-500 to-pink-600" },
];

export default function HeroSection() {
  return (
    <section className="section-dark relative overflow-hidden">
      {/* Soft gold + blue radial wash */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 40%, rgba(26,26,240,0.10) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 30% 60%, rgba(202,138,4,0.06) 0%, transparent 60%)",
        }}
      />

      {/* Main split content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 pt-16 pb-10 md:pt-24 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:pt-28">
        {/* LEFT: text content */}
        <div className="flex max-w-xl flex-col items-center text-center lg:items-start lg:text-left">
          {/* Social proof row */}
          <div className="mb-6 flex items-center gap-3">
            <div className="flex">
              {avatars.map((a, i) => (
                <div
                  key={a.initials}
                  className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-black bg-gradient-to-br ${a.bg} text-[10px] font-semibold text-white ${
                    i > 0 ? "-ml-2.5" : ""
                  }`}
                >
                  {a.initials}
                </div>
              ))}
            </div>
            <span className="text-sm text-white/60">
              Trusted by <span className="font-medium text-white/90">500+</span>{" "}
              broadcasters worldwide
            </span>
          </div>

          {/* Eyebrow badge */}
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-cta)]" />
            Empowering Broadcast Excellence Since 1984
          </span>

          {/* Heading */}
          <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
            Broadcast & IT solutions
            <br />
            <span className="text-[var(--color-cta)]">built to scale.</span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/65">
            India&#39;s trusted system integrator for broadcast,
            post-production, and enterprise IT — Apple Authorized Reseller
            serving studios, broadcasters, and corporates across three
            continents.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="hero-btn-primary cursor-pointer"
            >
              Get a Quote
            </Link>
            <Link
              href="/solutions"
              className="hero-btn-secondary cursor-pointer"
            >
              Explore Solutions
              <ChevronRight size={16} strokeWidth={2.5} />
            </Link>
          </div>
        </div>

        {/* RIGHT: floating stat cards */}
        <div className="mt-14 flex justify-center lg:mt-0 lg:shrink-0">
          <HeroFloatingCards />
        </div>
      </div>

      {/* Logo marquee at bottom of hero */}
      <div className="relative z-10 mt-8 border-t border-white/10 bg-black/40 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <p className="mb-2 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
            Trusted by 35+ Global Technology Partners
          </p>
          <ClientLogosMarquee />
        </div>
      </div>
    </section>
  );
}
