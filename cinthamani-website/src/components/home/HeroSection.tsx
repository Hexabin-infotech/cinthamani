import { Award, Package, Handshake, Globe } from "lucide-react";
import Link from "next/link";
import ClientLogosMarquee from "./ClientLogosMarquee";

const trustBadges = [
  { icon: Award, value: "40+", label: "Years" },
  { icon: Package, value: "400+", label: "Products" },
  { icon: Handshake, value: "35+", label: "Partners" },
  { icon: Globe, value: "3", label: "Global Offices" },
];

export default function HeroSection() {
  return (
    <section className="section-dark relative flex min-h-[calc(100dvh-100px)] flex-col overflow-hidden">
      {/* Subtle radial gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(202,138,4,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Main hero content — takes up remaining space */}
      <div className="relative z-10 flex flex-1 items-center justify-center">
        <div className="container-narrow flex w-full flex-col items-center px-6 py-12 text-center md:py-16">
          {/* Headline */}
          <h1 className="font-[family-name:var(--font-display)] max-w-4xl font-semibold tracking-tight text-white">
            Empowering Broadcast Excellence Since 1984
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
            India&#39;s trusted system integrator for broadcast, post-production,
            and enterprise IT solutions. Apple Authorized Reseller.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Get a Quote
            </Link>
            <Link href="/solutions" className="btn-pill">
              Explore Solutions
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-10">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex flex-col items-center gap-2">
                <badge.icon
                  className="h-6 w-6 text-[var(--color-cta)]"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span className="text-2xl font-semibold tracking-tight text-white font-[family-name:var(--font-display)]">
                  {badge.value}
                </span>
                <span className="text-sm text-white/50">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Client logos marquee at the bottom of the hero */}
      <div className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-sm">
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
